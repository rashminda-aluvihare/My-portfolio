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

      time += 0.007;

      ctx.clearRect(0, 0, W, H);

      // Palette: Bright Teal (#14B8A6) and Light Teal (#2DD4BF)
      const primaryColor = 'rgba(20, 184, 166, ';
      const secondaryColor = 'rgba(45, 212, 191, ';

      // Render Topological Sine-Wave Line Grid
      const linesCount = W < 768 ? 20 : 34;
      const step = W < 768 ? 8 : 5;

      for (let i = 0; i < linesCount; i++) {
        ctx.beginPath();

        const progress = i / linesCount;
        const yBase = (progress * 0.9 + 0.05) * H;
        const amplitude = (22 + Math.sin(time * 0.4 + i * 0.2) * 12) * (1 - Math.abs(progress - 0.5) * 0.8);
        const frequency = 0.003 + (i % 5) * 0.0006;

        let firstPoint = true;

        for (let x = -50; x <= W + 50; x += step) {
          const wave1 = Math.sin(x * frequency + time * 1.1 + i * 0.18) * amplitude;
          const wave2 = Math.cos(x * (frequency * 1.4) - time * 0.7 + i * 0.1) * (amplitude * 0.45);
          const wave3 = Math.sin((x + yBase) * 0.002 + time * 0.4) * 16;

          const y = yBase + wave1 + wave2 + wave3;

          if (firstPoint) {
            ctx.moveTo(x, y);
            firstPoint = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Clean subtle alpha
        const alpha = Math.max(0.03, (1 - Math.abs(progress - 0.5) * 1.5) * 0.22);
        const strokeStyle = i % 3 === 0
          ? `${primaryColor}${alpha * 0.85})`
          : `${secondaryColor}${alpha * 0.45})`;

        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = i % 4 === 0 ? 1.4 : 0.85;
        ctx.stroke();
      }

      // Subtle teal glowing particles
      const particleCount = W < 768 ? 10 : 20;
      for (let p = 0; p < particleCount; p++) {
        const px = ((p * (W / particleCount) + time * 50 * ((p % 3) + 1)) % (W + 100)) - 50;
        const pyIndex = (p % linesCount);
        const pyBase = (pyIndex / linesCount * 0.9 + 0.05) * H;
        const py = pyBase + Math.sin(px * 0.003 + time * 1.1 + pyIndex * 0.18) * 22;

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = p % 2 === 0 ? 'rgba(20, 184, 166, 0.85)' : 'rgba(248, 250, 252, 0.7)';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#14B8A6';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    const handleResize = () => {
      resizeCanvas();
    };

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
        opacity: 0.6,
      }}
    />
  );
}
