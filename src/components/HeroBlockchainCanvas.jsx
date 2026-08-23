import { useEffect, useRef } from 'react';

export default function HeroBlockchainCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isRunning = true;

    // ── Theme-aware colors ─────────────────────────────────────────────────
    const getColors = () => {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      return {
        nodeColor:    isDark ? 'rgba(16, 185, 129, 0.85)' : 'rgba(5, 150, 105, 0.85)',
        nodeColorAlt: isDark ? 'rgba(52, 211, 153, 0.85)' : 'rgba(16, 185, 129, 0.85)',
        lineColor:    isDark ? 'rgba(6, 182, 212, 0.28)'  : 'rgba(2, 132, 199, 0.25)',
        pulseColor:   isDark ? '#06b6d4' : '#0284c7',
      };
    };

    let colors = getColors();

    const observer = new MutationObserver(() => { colors = getColors(); });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // ── Canvas dimensions (logical, not physical pixels) ──────────────────
    let W = 0;
    let H = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      // Use the section element's size, not the canvas itself
      const parent = canvas.parentElement;
      W = parent ? parent.clientWidth  : window.innerWidth;
      H = parent ? parent.clientHeight : window.innerHeight;

      // Physical pixel resolution
      canvas.width  = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);

      // IMPORTANT: reset transform before scaling to avoid accumulation
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // ── Nodes ──────────────────────────────────────────────────────────────
    let nodes = [];
    let pulses = [];

    const buildNodes = () => {
      const isMobile = W < 768;
      const density  = isMobile ? 10000 : 20000;
      const minCount = isMobile ? 20 : 28;
      const maxCount = isMobile ? 32 : 50;
      const count    = Math.max(minCount, Math.min(Math.floor((W * H) / density), maxCount));

      nodes  = [];
      pulses = [];

      const speed = isMobile ? 0.55 : 0.65;
      for (let i = 0; i < count; i++) {
        nodes.push({
          x:      Math.random() * W,
          y:      Math.random() * H,
          vx:     (Math.random() - 0.5) * speed,
          vy:     (Math.random() - 0.5) * speed,
          radius: Math.random() * 2.2 + 1.4,
          isAlt:  Math.random() > 0.6,
        });
      }
    };

    // ── Pulses ─────────────────────────────────────────────────────────────
    const MAX_PULSES = 6;

    const createPulse = (n1, n2) => {
      if (pulses.length >= MAX_PULSES) return;
      pulses.push({
        x1: n1.x, y1: n1.y,
        x2: n2.x, y2: n2.y,
        progress: 0,
        speed: 0.016 + Math.random() * 0.022,
      });
    };

    // ── Animation loop ─────────────────────────────────────────────────────
    const draw = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, W, H);

      const isMobile = W < 768;
      const maxDist  = isMobile ? 140 : 155;

      // Update & draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.isAlt ? colors.nodeColorAlt : colors.nodeColor;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const t  = nodes[j];
          const dx = t.x - n.x;
          const dy = t.y - n.y;
          const d  = Math.sqrt(dx * dx + dy * dy);

          if (d < maxDist) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(t.x, t.y);
            ctx.strokeStyle = colors.lineColor;
            ctx.lineWidth   = (1 - d / maxDist) * 1.3;
            ctx.stroke();

            if (Math.random() < 0.002) createPulse(n, t);
          }
        }
      }

      // Draw pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) { pulses.splice(p, 1); continue; }

        const px = pulse.x1 + (pulse.x2 - pulse.x1) * pulse.progress;
        const py = pulse.y1 + (pulse.y2 - pulse.y1) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.8, 0, Math.PI * 2);
        ctx.fillStyle    = colors.pulseColor;
        ctx.shadowBlur   = 10;
        ctx.shadowColor  = colors.pulseColor;
        ctx.fill();
        ctx.shadowBlur   = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // ── Init & resize handler ──────────────────────────────────────────────
    const init = () => {
      resizeCanvas();
      buildNodes();
    };

    let resizeTimer;
    const handleResize = () => {
      // Debounce: avoid rebuilding nodes on every pixel of resize
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        init();
      }, 150);
    };

    init();
    draw();

    window.addEventListener('resize', handleResize);

    // Pause when tab is hidden
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
      observer.disconnect();
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
        display: 'block',
      }}
    />
  );
}
