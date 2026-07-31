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
    let isVisible = true;

    // Helper to get current theme colors
    const getColors = () => {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      return {
        nodeColor: isDark ? 'rgba(0, 242, 254, 0.8)' : 'rgba(10, 102, 194, 0.7)',
        nodeColorAlt: isDark ? 'rgba(155, 81, 224, 0.8)' : 'rgba(155, 81, 224, 0.7)',
        lineColor: isDark ? 'rgba(0, 242, 254, 0.22)' : 'rgba(10, 102, 194, 0.22)',
        pulseColor: isDark ? 'rgba(0, 242, 254, 0.95)' : 'rgba(10, 102, 194, 0.9)',
      };
    };

    let colors = getColors();

    // Listen to theme changes
    const observer = new MutationObserver(() => {
      colors = getColors();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // Handle canvas resizing
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create blockchain nodes (Mobile optimized count with guaranteed minimum floor)
    const isMobile = window.innerWidth < 768;
    const densityFactor = isMobile ? 12000 : 20000;
    const minNodeCount = isMobile ? 18 : 24;
    const maxNodeCount = isMobile ? 28 : 42;
    const calculatedNodes = Math.floor((canvas.width * canvas.height) / densityFactor);
    const nodeCount = Math.max(minNodeCount, Math.min(calculatedNodes, maxNodeCount));
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * (canvas.width || 360),
        y: Math.random() * (canvas.height || 600),
        vx: (Math.random() - 0.5) * (isMobile ? 0.5 : 0.6),
        vy: (Math.random() - 0.5) * (isMobile ? 0.5 : 0.6),
        radius: Math.random() * 2 + 1.2,
        isAlt: Math.random() > 0.6,
      });
    }

    // Active data pulses in blockchain network
    const pulses = [];
    const maxPulses = isMobile ? 3 : 5;

    const createPulse = (n1, n2) => {
      if (pulses.length >= maxPulses) return;
      pulses.push({
        x1: n1.x,
        y1: n1.y,
        x2: n2.x,
        y2: n2.y,
        progress: 0,
        speed: 0.015 + Math.random() * 0.018,
      });
    };

    // Animation Loop
    const draw = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const maxDist = isMobile ? 130 : 140;

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off canvas edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

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
            ctx.lineWidth = (1 - dist / maxDist) * (isMobile ? 1.4 : 1.2);
            ctx.stroke();

            // Randomly trigger data pulse
            if (Math.random() < (isMobile ? 0.0025 : 0.001)) {
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
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = colors.pulseColor;
        ctx.shadowBlur = 6;
        ctx.shadowColor = colors.pulseColor;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Pause rendering when canvas is not visible on screen
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          draw();
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.05 }
    );

    intersectionObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
      intersectionObserver.disconnect();
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

