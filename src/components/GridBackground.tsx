import React, { useEffect, useRef } from 'react';

interface Pulse {
  x: number; // grid intersection index X
  y: number; // grid intersection index Y
  startX: number;
  startY: number;
  progress: number; // 0 to 1
  speed: number;
  direction: { dx: number; dy: number };
  color: string;
  life: number;
  maxDistance: number;
  path: { x: number; y: number }[];
  trail: { x: number; y: number; alpha: number }[];
}

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gridSize = 60; // Medium grid size
    let pulses: Pulse[] = [];
    let animationFrameId: number;

    const getRandomDirection = () => {
      const directions = [
        { dx: 1, dy: 0 },
        { dx: -1, dy: 0 },
        { dx: 0, dy: 1 },
        { dx: 0, dy: -1 }
      ];
      return directions[Math.floor(Math.random() * directions.length)];
    };

    const spawnPulse = (cols: number, rows: number) => {
      // Start from a random intersection
      const startX = Math.floor(Math.random() * cols);
      const startY = Math.floor(Math.random() * rows);

      const direction = getRandomDirection();

      pulses.push({
        x: startX,
        y: startY,
        startX: startX,
        startY: startY,
        progress: 0,
        speed: 0.005 + Math.random() * 0.008, // Slowed down speed
        direction: direction,
        color: (() => {
          const r = Math.random();
          if (r < 0.45) return '#d4af37'; // Gold
          if (r < 0.9) return '#FF5349'; // Coral
          return '#ffffff'; // White
        })(),
        life: 15 + Math.floor(Math.random() * 10),
        maxDistance: 8 + Math.floor(Math.random() * 12),
        path: [{ x: startX, y: startY }],
        trail: []
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      // 1. Draw Static Grid Overlay - matching gold theme color
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.035)';
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * gridSize;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let j = 0; j < rows; j++) {
        const y = j * gridSize;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 2. Spawn Pulses (Up to 8 concurrent flow threads)
      if (pulses.length < 8 && Math.random() < 0.02) {
        spawnPulse(cols, rows);
      }

      // 3. Update & Draw Flowing Pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulse.progress = 0;

          // Move to next grid intersection
          const newX = pulse.x + pulse.direction.dx;
          const newY = pulse.y + pulse.direction.dy;

          // Check if we're still within bounds
          if (newX < 0 || newX >= cols || newY < 0 || newY >= rows) {
            pulses.splice(i, 1);
            continue;
          }

          // Check if we've reached max distance from start
          const distance = Math.abs(newX - pulse.startX) + Math.abs(newY - pulse.startY);
          if (distance > pulse.maxDistance) {
            pulses.splice(i, 1);
            continue;
          }

          pulse.x = newX;
          pulse.y = newY;
          pulse.life--;
          pulse.path.push({ x: newX, y: newY });

          if (pulse.life <= 0) {
            pulses.splice(i, 1);
            continue;
          }

          // Randomly change direction at intersections (but no backtracking)
          const choices: { dx: number; dy: number }[] = [];
          const opposites = [
            { dx: -pulse.direction.dx, dy: -pulse.direction.dy }
          ];

          // Check all possible directions except backtracking
          const allDirections = [
            { dx: 1, dy: 0 },
            { dx: -1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 0, dy: -1 }
          ];

          for (const dir of allDirections) {
            const newX2 = pulse.x + dir.dx;
            const newY2 = pulse.y + dir.dy;
            const isBacktracking = dir.dx === -pulse.direction.dx && dir.dy === -pulse.direction.dy;
            const withinBounds = newX2 >= 0 && newX2 < cols && newY2 >= 0 && newY2 < rows;

            if (!isBacktracking && withinBounds) {
              choices.push(dir);
            }
          }

          if (choices.length > 0) {
            // 70% chance to continue straight, 30% chance to turn
            if (Math.random() < 0.7 && choices.some(d => d.dx === pulse.direction.dx && d.dy === pulse.direction.dy)) {
              // Continue straight
            } else {
              pulse.direction = choices[Math.floor(Math.random() * choices.length)];
            }
          }
        }

        // Calculate current position
        const startX = pulse.x * gridSize;
        const startY = pulse.y * gridSize;
        const endX = (pulse.x + pulse.direction.dx) * gridSize;
        const endY = (pulse.y + pulse.direction.dy) * gridSize;

        const currentX = startX + (endX - startX) * pulse.progress;
        const currentY = startY + (endY - startY) * pulse.progress;

        // Draw the entire path with fading trail
        if (pulse.path.length > 1) {
          // Draw the path segments with decreasing opacity
          for (let j = 0; j < pulse.path.length - 1; j++) {
            const p1 = pulse.path[j];
            const p2 = pulse.path[j + 1];
            const segmentProgress = j / pulse.path.length;
            const alpha = 0.15 * (1 - segmentProgress);

            const x1 = p1.x * gridSize;
            const y1 = p1.y * gridSize;
            const x2 = p2.x * gridSize;
            const y2 = p2.y * gridSize;

            ctx.save();
            ctx.strokeStyle = pulse.color;
            ctx.lineWidth = 1.2;
            ctx.globalAlpha = alpha;
            ctx.shadowBlur = 0;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.restore();
          }
        }

        // Draw current flowing segment with glow
        ctx.save();
        ctx.strokeStyle = pulse.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.8;
        ctx.shadowBlur = 15;
        ctx.shadowColor = pulse.color;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        // Draw head with glow
        ctx.beginPath();
        ctx.arc(currentX, currentY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = pulse.color;
        ctx.shadowBlur = 25;
        ctx.globalAlpha = 0.9;
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}