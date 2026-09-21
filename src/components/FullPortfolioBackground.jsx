import React, { useEffect, useRef } from 'react';

/**
 * FullPortfolioBackground
 * A high-performance, full-page ambient background animation.
 * Features drifting fluid color orbs, subtle financial network nodes with connecting filaments,
 * and an architectural micro-dot grid that brings life and visual depth to the entire portfolio.
 * Automatically synchronizes with Dark Mode and Light Mode.
 */
export default function FullPortfolioBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Particle nodes (network constellation)
    const particleCount = Math.min(Math.floor((width * height) / 20000), 75);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        radius: Math.random() * 1.9 + 1.2,
        alpha: Math.random() * 0.45 + 0.25,
        sparkle: Math.random() > 0.82,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Drifting ambient color orbs
    const orbs = [
      { x: width * 0.2, y: height * 0.25, r: 380, vx: 0.18, vy: 0.12, darkColor: 'rgba(20, 184, 166, 0.16)', lightColor: 'rgba(20, 184, 166, 0.08)' },
      { x: width * 0.8, y: height * 0.65, r: 420, vx: -0.15, vy: -0.16, darkColor: 'rgba(15, 118, 110, 0.15)', lightColor: 'rgba(15, 118, 110, 0.07)' },
      { x: width * 0.5, y: height * 0.85, r: 350, vx: 0.12, vy: -0.14, darkColor: 'rgba(45, 212, 191, 0.12)', lightColor: 'rgba(45, 212, 191, 0.06)' },
      { x: width * 0.85, y: height * 0.2, r: 300, vx: -0.12, vy: 0.1, darkColor: 'rgba(30, 58, 58, 0.18)', lightColor: 'rgba(30, 58, 58, 0.08)' },
    ];

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let clock = 0;

    const render = () => {
      clock += 0.015;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      // 1. Draw drifting color orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -orb.r) orb.x = width + orb.r;
        if (orb.x > width + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = height + orb.r;
        if (orb.y > height + orb.r) orb.y = -orb.r;

        const baseColor = isDark ? orb.darkColor : orb.lightColor;
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, baseColor);
        grad.addColorStop(0.65, baseColor.replace(/[\d\.]+\)$/, isDark ? '0.04)' : '0.02)'));
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Update and draw network particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle mouse interaction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          p.x -= (dx / dist) * 0.85;
          p.y -= (dy / dist) * 0.85;
        }

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 115) {
            const lineAlpha = (1 - dist2 / 115) * (isDark ? 0.22 : 0.14);
            ctx.strokeStyle = isDark
              ? `rgba(45, 212, 191, ${lineAlpha})`
              : `rgba(20, 184, 166, ${lineAlpha})`;
            ctx.lineWidth = isDark ? 0.9 : 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle dot
        const pulse = Math.sin(clock + p.phase) * 0.25 + 0.75;
        ctx.fillStyle = isDark
          ? `rgba(45, 212, 191, ${p.alpha * pulse * 0.85})`
          : `rgba(20, 184, 166, ${p.alpha * pulse * 0.55})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Occasional 4-point sparkle star
        if (p.sparkle && pulse > 0.82) {
          const starLen = p.radius * 3.4;
          ctx.strokeStyle = isDark
            ? `rgba(248, 250, 252, ${(pulse - 0.82) * 1.2})`
            : `rgba(20, 184, 166, ${(pulse - 0.82) * 0.8})`;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(p.x - starLen, p.y);
          ctx.lineTo(p.x + starLen, p.y);
          ctx.moveTo(p.x, p.y - starLen);
          ctx.lineTo(p.x, p.y + starLen);
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Dynamic architectural micro-dot grid background */}
      <div
        className="portfolio-bg-grid"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.85,
        }}
      />

      {/* Dynamic interactive Canvas Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />

      <style>{`
        .portfolio-bg-grid {
          background-image: radial-gradient(rgba(20, 184, 166, 0.08) 1.2px, transparent 1.2px);
          background-size: 30px 30px;
        }
        [data-theme="dark"] .portfolio-bg-grid {
          background-image: radial-gradient(rgba(45, 212, 191, 0.10) 1.2px, transparent 1.2px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
}
