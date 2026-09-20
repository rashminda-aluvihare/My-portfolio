import React, { useEffect, useRef } from 'react';

/**
 * HeroDotsCanvas
 * Subtle floating constellation network animation layer.
 * Includes:
 * - Solid micro dots (•)
 * - Hollow ring circles (o)
 * - 4-point sparkle stars (✦)
 * - Faint interconnecting lines (— / \)
 * - Subtle cursor interactivity
 *
 * Opacity is kept low (~15-30%) so Hero typography remains 100% clear and legible.
 */
export default function HeroDotsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Mouse tracking for subtle interactive effect
    const mouse = {
      x: null,
      y: null,
      radius: 130,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    // Color palette matching Light Mode theme (Royal Blue, Soft Sky, Indigo, Slate)
    const dotColors = [
      'rgba(37, 99, 235, 0.85)',   // Royal Blue
      'rgba(59, 130, 246, 0.85)',  // Soft Sky Blue
      'rgba(99, 102, 241, 0.8)',   // Electric Indigo
      'rgba(71, 85, 105, 0.75)',   // Slate
    ];

    // Determine node count based on screen width
    const nodeCount = Math.floor(Math.min(Math.max(width * 0.038, 28), 52));

    // Particle node class supporting dots, rings, and 4-point sparkle stars
    class Node {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Calm, smooth drift speeds
        this.vx = (Math.random() - 0.5) * 0.42;
        this.vy = (Math.random() - 0.5) * 0.42;
        this.radius = Math.random() * 1.5 + 1.2; // 1.2px - 2.7px
        this.color = dotColors[Math.floor(Math.random() * dotColors.length)];
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.015 + Math.random() * 0.02;

        // Shape types: 'dot' (solid circle), 'ring' (hollow circle), 'sparkle' (4-point star)
        const rand = Math.random();
        if (rand < 0.55) {
          this.shape = 'dot';
        } else if (rand < 0.8) {
          this.shape = 'ring';
        } else {
          this.shape = 'sparkle';
        }

        this.angle = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;
        this.angle += this.rotSpeed;

        // Bounce gently off borders
        if (this.x < 0) {
          this.x = 0;
          this.vx = -this.vx;
        } else if (this.x > width) {
          this.x = width;
          this.vx = -this.vx;
        }

        if (this.y < 0) {
          this.y = 0;
          this.vy = -this.vy;
        } else if (this.y > height) {
          this.y = height;
          this.vy = -this.vy;
        }

        // Gentle reaction to cursor position
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 1.1;
            this.y -= Math.sin(angle) * force * 1.1;
          }
        }
      }

      draw() {
        const pulseScale = 1 + Math.sin(this.pulse) * 0.2;

        if (this.shape === 'dot') {
          // Solid Dot (•)
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * pulseScale, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        } else if (this.shape === 'ring') {
          // Hollow Ring Circle (o)
          ctx.beginPath();
          ctx.arc(this.x, this.y, (this.radius + 1.2) * pulseScale, 0, Math.PI * 2);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        } else if (this.shape === 'sparkle') {
          // 4-Point Sparkle Star (✦)
          const s = (this.radius + 2.4) * pulseScale;
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle);
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // Initialize nodes array
    const nodes = Array.from({ length: nodeCount }, () => new Node());

    // Connect nodes that are near each other with fine delicate constellation lines
    const connectNodes = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const maxDist = 115;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isDark ? 0.35 : 0.4);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(96, 165, 250, ${alpha})`
              : `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Subtle connecting line to cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = nodes[i].x - mouse.x;
          const dy = nodes[i].y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * (isDark ? 0.65 : 0.55);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${alpha})`
              : `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.update();
        node.draw();
      });

      connectNodes();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Responsive resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!canvas || !canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="hero-dots-canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <style>{`
        .hero-dots-canvas {
          opacity: 0.24;
          transition: opacity 0.3s ease;
        }
        [data-theme="dark"] .hero-dots-canvas {
          opacity: 0.52;
        }
      `}</style>
    </>
  );
}
