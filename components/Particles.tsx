import { useEffect, useRef, useState } from "react";

import { Box } from "@mui/material";
import random from "random";

const Particles = () => {
  const ref = useRef<HTMLCanvasElement>();
  const [windowWidth, setWindowWidth] = useState(0);
  const fps = 30;
  const opacity = 0.3;

  const scale = 2;
  const density = 0.0001 / Math.pow(scale, 2);
  const speed = 0.2 * scale;
  const size = 3 * scale;
  const length = 150 * scale;

  useEffect(() => {
    const interval = setInterval(() => {
      const canvas = ref.current;
      if (!canvas) return;

      const { width } = canvas.getBoundingClientRect();
      setWindowWidth(width);
    }, 33);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const particles: {
      x: number;
      y: number;
      angle: number;
      radius: number;
      temp?: boolean;
    }[] = [];

    if (!windowWidth) return;

    const canvas = ref.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width * scale;
    const height = rect.height * scale;
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
      const canvas = ref.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const { x, y, angle, radius, temp } = particles[i];
        if (!temp) {
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
              const op = (1 - distance / length) / 1.5;
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

    const handleMouseMove = (e: MouseEvent) => {
      const canvas = ref.current;
      if (!canvas) return;

      const { left, top } = canvas.getBoundingClientRect();
      const x = (e.clientX - left) * scale;
      const y = (e.clientY - top) * scale;
      const angle = random.float(0, 2 * Math.PI);
      const index = particles.findIndex(({ temp }) => temp);
      if (index === -1) {
        particles.push({ x, y, angle, radius: 3 * scale, temp: true });
      } else {
        particles[index].x = x;
        particles[index].y = y;
      }
    };

    const handleClick = (e: MouseEvent) => {
      const canvas = ref.current;
      if (!canvas) return;

      const { left, top } = canvas.getBoundingClientRect();
      const x = (e.clientX - left) * scale;
      const y = (e.clientY - top) * scale;
      const angle = random.float(0, 2 * Math.PI);
      const index = particles.findIndex(({ temp }) => temp);
      if (index === -1) {
        particles.push({ x, y, angle, radius: 3 * scale });
      } else {
        particles[index].x = x;
        particles[index].y = y;
        delete particles[index].temp;
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    return () => {
      clearInterval(interval);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, [windowWidth]);

  return (
    <Box width="120%" height="120%">
      <canvas ref={ref as any} style={{ width: "100%", height: "100%" }} />
    </Box>
  );
};

export default Particles;
