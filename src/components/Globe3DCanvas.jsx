import { useEffect, useRef } from 'react';

export default function Globe3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isRunning = true;
    let rotation = 0;

    let W = 0;
    let H = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas.parentElement;
      W = parent ? parent.clientWidth : 450;
      H = parent ? parent.clientHeight : 450;

      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    // Generate 3D Landmass / City Light Dots on Sphere
    const dotsCount = 450;
    const sphereDots = [];
    const radius = Math.min(W, H) * 0.28 || 120;

    for (let i = 0; i < dotsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;
      sphereDots.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        size: Math.random() * 1.6 + 1,
        isCity: Math.random() > 0.65,
      });
    }

    const draw = () => {
      if (!isRunning) return;

      rotation += 0.008;

      ctx.clearRect(0, 0, W, H);

      const centerX = W / 2;
      const centerY = H / 2;
      const r = Math.min(W, H) * 0.28 || 120;

      // 1. Atmosphere Outer Glow Aura
      const auraGradient = ctx.createRadialGradient(centerX, centerY, r * 0.8, centerX, centerY, r * 1.35);
      auraGradient.addColorStop(0, 'rgba(6, 182, 212, 0.2)');
      auraGradient.addColorStop(0.5, 'rgba(145, 94, 255, 0.12)');
      auraGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, r * 1.35, 0, Math.PI * 2);
      ctx.fillStyle = auraGradient;
      ctx.fill();

      // 2. Base Sphere Ocean Body
      const sphereGradient = ctx.createRadialGradient(
        centerX - r * 0.35,
        centerY - r * 0.35,
        r * 0.1,
        centerX,
        centerY,
        r
      );
      sphereGradient.addColorStop(0, '#1a2c4e');
      sphereGradient.addColorStop(0.5, '#0b162c');
      sphereGradient.addColorStop(1, '#050a14');

      ctx.beginPath();
      ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
      ctx.fillStyle = sphereGradient;
      ctx.fill();
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 3. Back Orbital Atmosphere Cloud Rings
      drawOrbitRings(ctx, centerX, centerY, r, rotation, true);

      // 4. Rotating 3D Landmass Dots & City Lights
      const sinRot = Math.sin(rotation);
      const cosRot = Math.cos(rotation);

      // Sort dots by Z depth for proper 3D rendering
      const projectedDots = sphereDots.map((dot) => {
        // Rotate around Y axis
        const rx = dot.x * cosRot - dot.z * sinRot;
        const rz = dot.x * sinRot + dot.z * cosRot;
        return {
          x: rx + centerX,
          y: dot.y + centerY,
          z: rz,
          size: dot.size,
          isCity: dot.isCity,
        };
      });

      projectedDots.sort((a, b) => a.z - b.z);

      for (let i = 0; i < projectedDots.length; i++) {
        const dot = projectedDots[i];
        if (dot.z < 0) {
          // Front facing dots
          const alpha = (dot.z + r) / (r * 2);
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size * (alpha + 0.5), 0, Math.PI * 2);

          if (dot.isCity) {
            ctx.fillStyle = `rgba(255, 215, 0, ${alpha * 0.95})`;
            ctx.shadowBlur = 6;
            ctx.shadowColor = '#ffd700';
          } else {
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha * 0.8})`;
            ctx.shadowBlur = 0;
          }
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // 5. Front Orbital Atmosphere Cloud Rings (swirling around globe)
      drawOrbitRings(ctx, centerX, centerY, r, rotation, false);

      animationFrameId = requestAnimationFrame(draw);
    };

    const drawOrbitRings = (ctx, cx, cy, r, rot, isBack) => {
      const ringCount = 5;
      for (let k = 0; k < ringCount; k++) {
        const angleOffset = (k * Math.PI) / ringCount + rot * 0.6;
        const tiltAngle = (Math.PI / 6) * Math.sin(rot * 0.5 + k);

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(tiltAngle);
        ctx.scale(1.35, 0.45);

        ctx.beginPath();
        ctx.arc(0, 0, r * (1.1 + k * 0.08), angleOffset, angleOffset + Math.PI * 1.15);

        const gradient = ctx.createLinearGradient(-r, -r, r, r);
        gradient.addColorStop(0, 'rgba(145, 94, 255, 0.65)');
        gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.85)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.35)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 4.5 - k * 0.6;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#06b6d4';
        ctx.stroke();

        ctx.restore();
      }
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

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '520px',
          maxWidth: '520px',
          display: 'block',
        }}
      />
    </div>
  );
}
