import { useEffect, useRef, useState } from "react";

import { Box } from "@mui/material";
import random from "random";

const Particles = () => {
  const ref = useRef<HTMLCanvasElement>();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const fps = 30;
  const opacity = 0.3;

  const scale = 2;
  const density = 0.0001 / Math.pow(scale, 2);
  const speed = 0.1 * scale;
  const size = 3 * scale;
  const length = 150 * scale;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const handler = () => {
      const { width, height } = canvas.getBoundingClientRect();
      console.log(width, height);
      setWidth(width * 2);
      setHeight(height * 2);
    };

    handler();

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  useEffect(() => {
    const particles: { x: number; y: number; angle: number; radius: number }[] =
      [];

    const canvas = ref.current;
    if (!canvas) return;

    if (!width || !height) return;

    canvas.width = width;
    canvas.height = height;

    const area = width * height;
    const total = Math.floor(area * density);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    for (let i = 0; i < total; i++) {
      const x = random.float(0, 1) * width;
      const y = random.float(0, 1) * height;
      const angle = random.float(0, 2 * Math.PI);
      const radius = random.float(1, size);
      particles.push({ x, y, angle, radius });
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }

    const interval = setInterval(() => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const { x, y, angle, radius } = particles[i];
        let newX = x + Math.cos(angle) * speed;
        let newY = y + Math.sin(angle) * speed;
        if (newX >= width) newX = newX - width;
        if (newY >= height) newY = newY - height;
        particles[i].x = newX;
        particles[i].y = newY;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.arc(newX, newY, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = 0; j < particles.length; j++) {
          if (i !== j) {
            const { x: x1, y: y1 } = particles[i];
            const { x: x2, y: y2 } = particles[j];
            const distance = Math.sqrt(
              Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
            );

            if (distance < length) {
              const op = (1 - distance / length) / 2;
              ctx.strokeStyle = `rgba(255, 255, 255, ${op})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    }, 1000 / fps);

    return () => {
      clearInterval(interval);
    };
  }, [width, height]);

  return (
    <Box width="120%" height="120%">
      <canvas ref={ref as any} style={{ width: "100%", height: "100%" }} />
    </Box>
  );
};

export default Particles;
