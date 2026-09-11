import { useEffect, useRef } from 'react';

export default function HeroBlockchainCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isRunning = true;
    let time = 0;

    let W = 0;
    let H = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas.parentElement;
      W = parent ? parent.clientWidth : window.innerWidth;
      H = parent ? parent.clientHeight : window.innerHeight;

      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    const draw = () => {
      if (!isRunning) return;

      time += 0.008;

      ctx.clearRect(0, 0, W, H);

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      // Palette
      const primaryColor = isDark ? 'rgba(145, 94, 255, ' : 'rgba(124, 58, 237, ';
      const secondaryColor = isDark ? 'rgba(6, 182, 212, ' : 'rgba(2, 132, 199, ';

      // Render Topological Sine-Wave Line Grid
      const linesCount = W < 768 ? 24 : 38;
      const step = W < 768 ? 8 : 5;

      for (let i = 0; i < linesCount; i++) {
        ctx.beginPath();

        const progress = i / linesCount;
        const yBase = (progress * 0.9 + 0.05) * H;
        const amplitude = (25 + Math.sin(time * 0.5 + i * 0.2) * 15) * (1 - Math.abs(progress - 0.5) * 0.8);
        const frequency = 0.003 + (i % 5) * 0.0006;

        let firstPoint = true;

        for (let x = -50; x <= W + 50; x += step) {
          // Double harmonic sine wave math for smooth wave grid
          const wave1 = Math.sin(x * frequency + time * 1.2 + i * 0.18) * amplitude;
          const wave2 = Math.cos(x * (frequency * 1.5) - time * 0.8 + i * 0.1) * (amplitude * 0.5);
          const wave3 = Math.sin((x + yBase) * 0.002 + time * 0.5) * 20;

          const y = yBase + wave1 + wave2 + wave3;

          if (firstPoint) {
            ctx.moveTo(x, y);
            firstPoint = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Alternate colors for a high-end topological grid glow
        const alpha = Math.max(0.04, (1 - Math.abs(progress - 0.5) * 1.5) * (isDark ? 0.35 : 0.25));
        const strokeStyle = i % 2 === 0
          ? `${primaryColor}${alpha})`
          : `${secondaryColor}${alpha * 0.85})`;

        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = i % 3 === 0 ? 1.6 : 0.95;
        ctx.stroke();
      }

      // Draw subtle glowing ambient particles traversing the waves
      const particleCount = W < 768 ? 12 : 25;
      for (let p = 0; p < particleCount; p++) {
        const px = ((p * (W / particleCount) + time * 60 * ((p % 3) + 1)) % (W + 100)) - 50;
        const pyIndex = (p % linesCount);
        const pyBase = (pyIndex / linesCount * 0.9 + 0.05) * H;
        const py = pyBase + Math.sin(px * 0.003 + time * 1.2 + pyIndex * 0.18) * 25;

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p % 2 === 0 ? 'rgba(6, 182, 212, 0.75)' : 'rgba(145, 94, 255, 0.85)';
        ctx.shadowBlur = 12;
        ctx.shadowColor = p % 2 === 0 ? '#06b6d4' : '#915eff';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resizeCanvas();
      }, 150);
    };

    draw();
    window.addEventListener('resize', handleResize);

    const handleVisibility = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else if (!isRunning) {
        isRunning = true;
        draw();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {/* Background Radial Glow Spotlights */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '10%',
          width: '50vw',
          height: '50vw',
          maxHeight: '600px',
          maxWidth: '600px',
          background: 'radial-gradient(circle, rgba(145, 94, 255, 0.18) 0%, rgba(145, 94, 255, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '45vw',
          height: '45vw',
          maxHeight: '550px',
          maxWidth: '550px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
}
