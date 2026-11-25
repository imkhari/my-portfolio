import React, { useEffect, useRef } from 'react';

function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    const pointer = { x: -9999, y: -9999, active: false };

    const handleMouseMove = (e) => {
      if (isTouchDevice) return;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const handleMouseLeave = () => {
      pointer.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // --- Canvas Particle System ---
    const canvas = canvasRef.current;
    if (!canvas) {
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];

    const colors = [
      'rgba(129, 140, 248, ', // soft indigo
      'rgba(56, 189, 248, ',  // sky cyan
      'rgba(228, 228, 231, ', // cool zinc white
    ];

    const initParticles = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 768 ? 28 : 55;
      particles = Array.from({ length: count }, () => {
        const colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35 - 0.08,
          radius: Math.random() * 1.4 + 0.6,
          baseAlpha: Math.random() * 0.35 + 0.15,
          colorPrefix,
        };
      });
    };

    initParticles();
    window.addEventListener('resize', initParticles);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Subtle cursor repulsion when moving close
          if (pointer.active) {
            const dx = p.x - pointer.x;
            const dy = p.y - pointer.y;
            const dist = Math.hypot(dx, dy);
            const repelRadius = 110;
            if (dist > 0 && dist < repelRadius) {
              const force = (repelRadius - dist) / repelRadius;
              p.x += (dx / dist) * force * 0.9;
              p.y += (dy / dist) * force * 0.9;
            }
          }

          // Wrap around viewport smoothly
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }

        // Brighten near cursor
        let alpha = p.baseAlpha;
        let radius = p.radius;
        if (pointer.active) {
          const distToCursor = Math.hypot(p.x - pointer.x, p.y - pointer.y);
          if (distToCursor < 160) {
            const boost = 1 - distToCursor / 160;
            alpha = Math.min(0.85, p.baseAlpha + boost * 0.45);
            radius = p.radius + boost * 0.8;

            // Delicate line connecting nearby particle to cursor
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${boost * 0.16})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${alpha})`;
        ctx.fill();

        // Subtle links between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 105) {
            const lineAlpha = (1 - dist / 105) * 0.07;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', initParticles);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle Architectural Grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />

      {/* Calm Ambient Atmospheric Blobs */}
      <div className="absolute -top-40 left-[12%] w-[520px] h-[520px] bg-indigo-500/[0.08] rounded-full blur-[150px]" />
      <div className="absolute bottom-[5%] right-[10%] w-[540px] h-[540px] bg-sky-500/[0.06] rounded-full blur-[160px]" />

      {/* Global Drifting & Interactive Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}

export default InteractiveBackground;
