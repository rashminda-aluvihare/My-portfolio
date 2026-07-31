import { useEffect, useRef } from 'react';

export default function HeroBlockchainCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isRunning = true;
    let width = 0;
    let height = 0;

    // Helper to get current theme colors
    const getColors = () => {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      return {
        nodeColor: isDark ? 'rgba(0, 242, 254, 0.85)' : 'rgba(10, 102, 194, 0.8)',
        nodeColorAlt: isDark ? 'rgba(155, 81, 224, 0.85)' : 'rgba(155, 81, 224, 0.8)',
        lineColor: isDark ? 'rgba(0, 242, 254, 0.32)' : 'rgba(10, 102, 194, 0.28)',
        pulseColor: isDark ? '#00f2fe' : '#0a66c2',
      };
    };

    let colors = getColors();

    // Listen to theme changes
    const observer = new MutationObserver(() => {
      colors = getColors();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // Handle canvas resizing with Retina / High-DPI support
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = parent.clientWidth || window.innerWidth || 360;
        height = parent.clientHeight || window.innerHeight || 600;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create blockchain nodes (Mobile optimized count)
    const isMobile = window.innerWidth < 768;
    const densityFactor = isMobile ? 10000 : 18000;
    const minNodeCount = isMobile ? 20 : 26;
    const maxNodeCount = isMobile ? 32 : 45;
    const calculatedNodes = Math.floor((width * height) / densityFactor);
    const nodeCount = Math.max(minNodeCount, Math.min(calculatedNodes, maxNodeCount));
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * (width || 360),
        y: Math.random() * (height || 600),
        vx: (Math.random() - 0.5) * (isMobile ? 0.6 : 0.7),
        vy: (Math.random() - 0.5) * (isMobile ? 0.6 : 0.7),
        radius: Math.random() * 2.2 + 1.4,
        isAlt: Math.random() > 0.6,
      });
    }

    // Active data pulses in blockchain network
    const pulses = [];
    const maxPulses = isMobile ? 4 : 6;

    const createPulse = (n1, n2) => {
      if (pulses.length >= maxPulses) return;
      pulses.push({
        x1: n1.x,
        y1: n1.y,
        x2: n2.x,
        y2: n2.y,
        progress: 0,
        speed: 0.018 + Math.random() * 0.02,
      });
    };

    // Animation Loop
    const draw = () => {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);

      const maxDist = isMobile ? 140 : 150;

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off canvas edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw Node point
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isAlt ? colors.nodeColorAlt : colors.nodeColor;
        ctx.fill();

        // Connect nearby nodes (Blockchain Mesh)
        for (let j = i + 1; j < nodes.length; j++) {
          const target = nodes[j];
          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = colors.lineColor;
            ctx.lineWidth = (1 - dist / maxDist) * (isMobile ? 1.5 : 1.2);
            ctx.stroke();

            // Randomly trigger data pulse
            if (Math.random() < (isMobile ? 0.003 : 0.0015)) {
              createPulse(node, target);
            }
          }
        }
      }

      // Draw & Update Data Pulses along network
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const px = pulse.x1 + (pulse.x2 - pulse.x1) * pulse.progress;
        const py = pulse.y1 + (pulse.y2 - pulse.y1) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = colors.pulseColor;
        ctx.shadowBlur = 8;
        ctx.shadowColor = colors.pulseColor;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Start Animation Loop immediately
    draw();

    // Handle tab visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        if (!isRunning) {
          isRunning = true;
          draw();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
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
