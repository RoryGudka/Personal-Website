import { useEffect, useRef } from "react";

import { Box } from "@mui/material";

// Highly optimized particle renderer
// - Uses requestAnimationFrame instead of setInterval
// - Uses ResizeObserver instead of polling for size
// - Uses spatial hashing (grid) to avoid O(n^2) line checks
// - Batches particle drawing into a single path fill
// - Avoids unnecessary React state updates during animation

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  temp?: boolean; // mouse-following particle
};

const OPACITY = 0.3;
const BASE_DENSITY = 0.00008; // particles per px^2 (tuned for performance)
const MAX_PARTICLES_CAP = 1000; // hard cap to avoid overload on very large screens
const SPEED = 0.2; // px per frame at ~60fps
const SIZE_MIN = 1;
const SIZE_MAX = 3;
const LINK_LENGTH = 150; // px

function rand(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    let particles: Particle[] = [];

    // Spatial grid: key -> array of indices
    const grid = new Map<string, number[]>();
    const gridCell = LINK_LENGTH; // cell size

    function key(cx: number, cy: number) {
      return `${cx},${cy}`;
    }

    function placeInGrid(i: number, p: Particle) {
      const cx = Math.floor(p.x / gridCell);
      const cy = Math.floor(p.y / gridCell);
      const k = key(cx, cy);
      let arr = grid.get(k);
      if (!arr) {
        arr = [];
        grid.set(k, arr);
      }
      arr.push(i);
    }

    function rebuildGrid() {
      grid.clear();
      for (let i = 0; i < particles.length; i++) {
        placeInGrid(i, particles[i]);
      }
    }

    function resize() {
      if (!canvas || !ctx) return;

      const rect = canvas.getBoundingClientRect();
      const newW = Math.max(1, Math.floor(rect.width));
      const newH = Math.max(1, Math.floor(rect.height));
      const newDpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

      if (newW === width && newDpr === dpr) return;

      width = newW;
      height = newH;
      dpr = newDpr;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Recreate particles to fit new area (preserve temp particle if present)
      const tempIndex = particles.findIndex((p) => p.temp);
      const tempParticle = tempIndex >= 0 ? particles[tempIndex] : null;

      particles = [];
      const area = width * height;
      const target = Math.min(
        MAX_PARTICLES_CAP,
        Math.floor(area * BASE_DENSITY)
      );

      for (let i = 0; i < target; i++) {
        const angle = rand(0, Math.PI * 2);
        particles.push({
          x: rand(0, width),
          y: rand(0, height),
          vx: Math.cos(angle) * SPEED,
          vy: Math.sin(angle) * SPEED,
          r: rand(SIZE_MIN, SIZE_MAX),
        });
      }

      if (tempParticle) {
        particles.push({ ...tempParticle });
      }

      rebuildGrid();
    }

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    function update() {
      // Update positions (skip temp particle)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.temp) continue;
        let nx = p.x + p.vx;
        let ny = p.y + p.vy;
        if (nx >= width) nx -= width;
        if (nx < 0) nx += width;
        if (ny >= height) ny -= height;
        if (ny < 0) ny += height;
        p.x = nx;
        p.y = ny;
      }

      rebuildGrid();
    }

    function draw() {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      // Draw particles in one batch
      ctx.fillStyle = `rgba(255, 255, 255, ${OPACITY})`;
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.moveTo(p.x + p.r, p.y); // move to start of arc to avoid connecting arcs
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      }
      ctx.fill();

      // Draw lines using spatial grid neighbors
      const maxCx = Math.floor(width / gridCell) + 1;
      const maxCy = Math.floor(height / gridCell) + 1;
      const len2 = LINK_LENGTH * LINK_LENGTH;

      // For each particle, look into its cell and neighbors
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const cx = Math.floor(p.x / gridCell);
        const cy = Math.floor(p.y / gridCell);
        for (let ox = -1; ox <= 1; ox++) {
          for (let oy = -1; oy <= 1; oy++) {
            const ncx = cx + ox;
            const ncy = cy + oy;
            if (ncx < 0 || ncy < 0 || ncx > maxCx || ncy > maxCy) continue;
            const arr = grid.get(key(ncx, ncy));
            if (!arr) continue;
            for (let k = 0; k < arr.length; k++) {
              const j = arr[k];
              if (j <= i) continue; // avoid double-drawing
              const q = particles[j];
              const dx = p.x - q.x;
              const dy = p.y - q.y;
              const d2 = dx * dx + dy * dy;
              if (d2 < len2) {
                const d = Math.sqrt(d2);
                const alpha = (1 - d / LINK_LENGTH) / 1.5;
                if (alpha <= 0) continue;
                ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.stroke();
              }
            }
          }
        }
      }
    }

    function frame() {
      update();
      draw();
      rafRef.current = window.requestAnimationFrame(frame);
    }

    // Mouse interactions
    function handleMouseMove(e: MouseEvent) {
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      let idx = particles.findIndex((p) => p.temp);
      if (idx === -1) {
        particles.push({ x, y, vx: 0, vy: 0, r: 3, temp: true });
      } else {
        const p = particles[idx];
        p.x = x;
        p.y = y;
      }
    }

    function handleClick(e: MouseEvent) {
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      let idx = particles.findIndex((p) => p.temp);
      if (idx === -1) {
        const angle = rand(0, Math.PI * 2);
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * SPEED,
          vy: Math.sin(angle) * SPEED,
          r: 3,
        });
      } else {
        const p = particles[idx];
        const angle = rand(0, Math.PI * 2);
        p.vx = Math.cos(angle) * SPEED;
        p.vy = Math.sin(angle) * SPEED;
        delete p.temp;
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    // Kick things off
    resize();
    rafRef.current = window.requestAnimationFrame(frame);

    cleanupRef.current = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
    };

    return () => {
      cleanupRef.current?.();
    };
  }, []);

  return (
    <Box width="120%" height="120%">
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </Box>
  );
};

export default Particles;
