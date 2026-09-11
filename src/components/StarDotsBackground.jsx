import { useEffect, useRef } from 'react';

export default function StarDotsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isRunning = true;

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

    // Generate Space Star Dots
    const starCount = W < 768 ? 60 : 130;
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        radius: Math.random() * 1.6 + 0.6,
        alpha: Math.random(),
        speed: Math.random() * 0.015 + 0.005,
        isPurple: Math.random() > 0.5,
      });
    }

    const draw = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, W, H);

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0.1) {
          s.speed = -s.speed;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);

        if (isDark) {
          ctx.fillStyle = s.isPurple
            ? `rgba(145, 94, 255, ${Math.max(0.1, s.alpha * 0.85)})`
            : `rgba(255, 255, 255, ${Math.max(0.1, s.alpha * 0.75)})`;
        } else {
          // High-contrast vibrant dots for Light Mode
          ctx.fillStyle = s.isPurple
            ? `rgba(124, 58, 237, ${Math.max(0.15, s.alpha * 0.65)})`
            : `rgba(2, 132, 199, ${Math.max(0.15, s.alpha * 0.65)})`;
        }

        if (s.radius > 1.2) {
          ctx.shadowBlur = isDark ? 8 : 4;
          ctx.shadowColor = s.isPurple ? '#915eff' : '#0284c7';
        }
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
        for (let i = 0; i < stars.length; i++) {
          stars[i].x = Math.random() * W;
          stars[i].y = Math.random() * H;
        }
      }, 150);
    };

    draw();
    window.addEventListener('resize', handleResize);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
