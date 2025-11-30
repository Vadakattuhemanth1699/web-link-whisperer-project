import React, { useEffect, useRef } from 'react';

// Lightweight real-time canvas renderer (particles + soft lights)
// - responds to mouse/touch/scroll
// - reads theme tokens from CSS custom properties
// - respects prefers-reduced-motion

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));

const RealtimeRenderer: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // don't run animations if user asks to reduce motion

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    // Read theme colors from CSS variables so the effect follows the theme
    const style = getComputedStyle(document.documentElement);
    const primary = style.getPropertyValue('--primary-hex')?.trim() || '#22c55e';
    const secondary = style.getPropertyValue('--secondary-hex')?.trim() || '#001f3f';

    // Convert hex like #rrggbb to rgba
    const toRGBA = (hex: string, alpha = 1) => {
      try {
        const h = hex.replace('#', '');
        const r = parseInt(h.substring(0, 2), 16);
        const g = parseInt(h.substring(2, 4), 16);
        const b = parseInt(h.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      } catch {
        return `rgba(34,197,94,${alpha})`;
      }
    };

    const bgColor = 'transparent';
    const circlePrimary = toRGBA(primary || '#22c55e', 0.26);
    const circleSecondary = toRGBA(secondary || '#001f3f', 0.18);

    // Particles
    const particles: Array<any> = [];
    // particleCount will be computed dynamically to scale down on small screens

    let mouse = { x: -1000, y: -1000 };
    let time = 0;

    function resetSize() {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      width = Math.max(300, canvas.clientWidth) | 0;
      height = Math.max(200, canvas.clientHeight) | 0;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      particles.length = 0;
      // choose particle count relative to size, clamp for perf
      const particleCount = Math.max(6, Math.min(32, Math.floor(width / 60)));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 28 + Math.random() * Math.min(140, Math.max(40, width / 3)),
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          hue: Math.random(),
        });
      }
    }

    function draw() {
      if (!ctx) return;
      time += 1 / 60;

      // clear
      ctx.clearRect(0, 0, width, height);

      // soft radial blobs for depth
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.dx + Math.sin(time * 0.1 + i) * 0.05;
        p.y += p.dy + Math.cos(time * 0.12 + i) * 0.03;

        // wobble a bit
        p.r += Math.sin(time * 0.05 + i) * 0.4;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, Math.abs(p.r));
        gradient.addColorStop(0, i % 2 === 0 ? circlePrimary : circleSecondary);
        gradient.addColorStop(0.6, i % 2 === 0 ? toRGBA(primary || '#22c55e', 0.08) : toRGBA(secondary || '#001f3f', 0.06));
        gradient.addColorStop(1, 'transparent');

        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.abs(p.r), 0, Math.PI * 2);
        ctx.fill();
      }

      // reactive soft light when mouse is present
      if (mouse.x > -500) {
        const mx = clamp(mouse.x / width, 0, 1);
        const my = clamp(mouse.y / height, 0, 1);

        const lx = width * mx;
        const ly = height * my;

        const g = ctx.createRadialGradient(lx, ly, 0, lx, ly, Math.max(width, height) * 0.6);
        g.addColorStop(0, toRGBA(primary || '#22c55e', 0.12));
        g.addColorStop(0.4, 'transparent');
        ctx.globalCompositeOperation = 'overlay';
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.globalCompositeOperation = 'source-over';
    }

    function onFrame() {
      draw();
      rafRef.current = requestAnimationFrame(onFrame);
    }

    function handleMove(e: PointerEvent) {
      mouse.x = e.clientX - canvas.getBoundingClientRect().left;
      mouse.y = e.clientY - canvas.getBoundingClientRect().top;
    }

    function handleLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    function handleResize() {
      resetSize();
      initParticles();
    }

    resetSize();
    initParticles();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('pointermove', handleMove);
    canvas.addEventListener('pointerleave', handleLeave);
    onFrame();

    // Performance: pause when page hidden
    const onVisibility = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(onFrame);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('pointermove', handleMove);
      canvas.removeEventListener('pointerleave', handleLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div className={`realtime-renderer-wrapper ${className || ''}`} aria-hidden>
      <canvas ref={canvasRef} className={`realtime-renderer`} />
      {/* Non-intrusive status indicator so it's obvious the background is active */}
      <div className="realtime-indicator" aria-hidden>
        Realtime • active
      </div>
    </div>
  );
};

export default RealtimeRenderer;
