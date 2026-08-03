import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  life: number;
  maxLife: number;
}

interface CustomCursorProps {
  activeSection?: string;
}

export default function CustomCursor({ activeSection }: CustomCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -100, y: -100, lastX: -100, lastY: -100 });
  const [activeColor, setActiveColor] = useState('#d4af37'); // default gold
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const getSectionColor = (section: string) => {
    switch (section) {
      case '/':
      case '/home':
        return '#d4af37'; // Gold for Home
      case '/about':
        return '#ff7300'; // Dark Orange for About
      case '/projects':
        return '#FF5349'; // Coral for Projects
      case '/skills':
        return '#d4af37'; // Gold for Skills
      case '/contact':
        return '#FF5349'; // Coral for Contact
      case '/resume':
        return '#ff7300'; // Dark Orange for Resume
      default:
        return '#d4af37';
    }
  };

  const defaultColor = getSectionColor(activeSection || window.location.pathname);
  const defaultColorRef = useRef(defaultColor);

  useEffect(() => {
    defaultColorRef.current = defaultColor;
    setActiveColor(defaultColor);
  }, [defaultColor]);

  // Ref to hold the active color for the high-frequency animation loop
  const colorRef = useRef(activeColor);
  colorRef.current = activeColor;

  const isHoveredRef = useRef(isHovered);
  isHoveredRef.current = isHovered;

  useEffect(() => {
    // Check if touch device
    const checkDevice = () => {
      const mobileMatch = window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(mobileMatch);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track Mouse State
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Dynamic Hover & Color Morphing Detectors
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Color detection
      const colorTarget = target.closest('[data-glow-color]');
      if (colorTarget) {
        const glowColor = colorTarget.getAttribute('data-glow-color');
        if (glowColor) {
          setActiveColor(glowColor);
        }
      } else {
        setActiveColor(defaultColorRef.current); // Reset to active section's color
      }

      // Size scale detection (links, buttons, copy elements)
      const isInteractive = target.closest('a, button, [role="button"], .interactive-card, [onClick]');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver);

    // Particle Animation Loop variables
    let particles: Particle[] = [];
    let animationFrameId: number;

    const addParticles = (x: number, y: number, color: string) => {
      // Create small twinkling sparks
      const count = Math.random() > 0.4 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4, // float slightly upwards
          size: Math.random() * 3 + 1, // 1px to 4px
          alpha: 1.0,
          color,
          life: 0,
          maxLife: Math.random() * 25 + 15 // lifespan frames
        });
      }
    };

    // Main Draw & Update Loop
    const renderLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const m = mouseRef.current;
      const currentColor = colorRef.current;
      const hovered = isHoveredRef.current;

      // Draw particle trail
      particles.forEach((p, idx) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha = 1.0 - (p.life / p.maxLife);
        p.size *= 0.97; // slightly shrink

        if (p.alpha > 0 && p.size > 0.1) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          // Add glow effect to stardust
          ctx.shadowBlur = 4;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.restore();
        } else {
          particles.splice(idx, 1);
        }
      });

      if (isVisible && m.x !== -100) {
        // Emit particles as mouse moves
        const dx = m.x - m.lastX;
        const dy = m.y - m.lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 2) {
          addParticles(m.x, m.y, currentColor);
          m.lastX = m.x;
          m.lastY = m.y;
        }

        // Draw radial background glow (Blob)
        ctx.save();
        const glowRadius = hovered ? 45 : 30;
        const gradient = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, glowRadius);
        gradient.addColorStop(0, `${currentColor}25`); // central glow
        gradient.addColorStop(0.5, `${currentColor}08`); // intermediate fade
        gradient.addColorStop(1, `${currentColor}00`); // transparent edge

        ctx.beginPath();
        ctx.arc(m.x, m.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();

        // Draw outer ring border
        ctx.save();
        ctx.beginPath();
        const outerRadius = hovered ? 18 : 12;
        ctx.arc(m.x, m.y, outerRadius, 0, Math.PI * 2);
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = hovered ? 1.5 : 1.0;
        ctx.globalAlpha = 0.8;
        ctx.stroke();
        ctx.restore();

        // Draw inner solid dot
        ctx.save();
        ctx.beginPath();
        const dotRadius = hovered ? 4 : 3;
        ctx.arc(m.x, m.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = currentColor;
        ctx.globalAlpha = 1.0;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    // Clean up listeners
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50 mix-blend-screen"
      style={{
        display: isVisible ? 'block' : 'none',
      }}
    />
  );
}
