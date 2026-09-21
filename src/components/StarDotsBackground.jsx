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

    // Generate Star Dots
    const starCount = W < 768 ? 50 : 100;
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        radius: Math.random() * 1.5 + 0.6,
        alpha: Math.random(),
        speed: Math.random() * 0.012 + 0.004,
        isOrange: Math.random() > 0.6,
      });
    }

    const draw = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0.1) {
          s.speed = -s.speed;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);

        ctx.fillStyle = s.isOrange
          ? `rgba(20, 184, 166, ${Math.max(0.1, s.alpha * 0.85)})`
          : `rgba(248, 250, 252, ${Math.max(0.08, s.alpha * 0.65)})`;

        if (s.radius > 1.2 && s.isOrange) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = '#14B8A6';
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
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.7,
      }}
    />
  );
}
