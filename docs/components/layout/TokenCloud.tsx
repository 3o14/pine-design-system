"use client";

import { useEffect, useRef } from "react";

type TokenItem =
  | { kind: "chip"; color: string; label?: string }
  | { kind: "palette"; colors: string[] }
  | { kind: "spacing"; steps: number; label: string }
  | { kind: "radius"; radius: number }
  | { kind: "text"; text: string; mono: boolean };

type Particle = TokenItem & { x: number; y: number; z: number };

// Foundation 500 scale from src/tokens/foundation/colors.ts
const COLORS = ["#a855f7", "#22c55e", "#facc15", "#ef4444", "#4cb4ff", "#ffb4d4", "#ffb94c", "#64748b"];

const TOKEN_NAMES = [
  "color.primary.surface",
  "color.danger.weak",
  "surface.textMuted",
  "spacing.md",
  "spacing.xs",
  "radius.lg",
  "radius.full",
  "fontWeight.bold",
  "fontSize.xlarge",
  "lineHeight.large",
  "shadow.medium",
  "intent=\"success\"",
  "design=\"crayon\"",
  "theme=\"dark\"",
  "16px",
  "24px",
];

const DISPLAY_TOKENS = ["Aa", "Ag", "H1", "Body", "Pine"];

// Foundation spacing scale in px (xxs → xl)
const SPACING_LABELS = ["4", "8", "12", "16", "24", "32"];

const PARTICLE_COUNT = 150;
const INNER_SHELL_RATIO = 0.3;
const ROTATION_SPEED = 0.0001;

// Seeded so the cloud has the same shape on every render.
const createRandom = (seed: number) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

const pick = <T,>(list: T[], random: () => number) => list[Math.floor(random() * list.length)];

const createItem = (index: number, random: () => number): TokenItem => {
  switch (index % 7) {
    case 0:
    case 1: {
      const color = pick(COLORS, random);
      return { kind: "chip", color, label: random() > 0.75 ? color.toUpperCase() : undefined };
    }
    case 2:
      return { kind: "palette", colors: [...COLORS].sort(() => random() - 0.5).slice(0, 4) };
    case 3:
      return { kind: "spacing", steps: 3 + Math.floor(random() * 4), label: pick(SPACING_LABELS, random) };
    case 4:
      return { kind: "radius", radius: 4 + Math.floor(random() * 10) };
    case 5:
      return { kind: "text", text: pick(DISPLAY_TOKENS, random), mono: false };
    default:
      return { kind: "text", text: pick(TOKEN_NAMES, random), mono: true };
  }
};

// Fibonacci sphere with an inner shell and radial jitter so it reads as a dense cloud.
const createParticles = (): Particle[] => {
  const random = createRandom(711);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  return Array.from({ length: PARTICLE_COUNT }, (_, index) => {
    const y = 1 - (index / (PARTICLE_COUNT - 1)) * 2;
    const ring = Math.sqrt(1 - y * y);
    const theta = goldenAngle * index;
    const isInner = random() < INNER_SHELL_RATIO;
    const radius = isInner ? 0.45 + random() * 0.25 : 0.82 + random() * 0.2;

    return {
      ...createItem(index, random),
      x: Math.cos(theta) * ring * radius,
      y: y * radius,
      z: Math.sin(theta) * ring * radius,
    };
  });
};

export function TokenCloud({ mode }: { mode: "light" | "dark" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef(mode);
  const renderRef = useRef<() => void>(() => {});

  useEffect(() => {
    modeRef.current = mode;
    renderRef.current();
  }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) {
      return;
    }

    const particles = createParticles();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sansFont = getComputedStyle(canvas).fontFamily;
    const monoFont = "ui-monospace, SFMono-Regular, Menlo, monospace";

    let size = 0;
    let animationFrameId = 0;
    let isVisible = true;
    let angle = 0;
    let lastTimestamp = 0;
    const tiltTarget = { x: 0, y: 0 };
    const tiltCurrent = { x: 0, y: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = canvas.clientWidth;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawItem = (item: Particle, scale: number, isDark: boolean) => {
      const ink = isDark ? "#f9fafb" : "#111827";
      const muted = isDark ? "rgba(156, 163, 175, 0.9)" : "rgba(107, 114, 128, 0.9)";

      switch (item.kind) {
        case "chip": {
          const s = 16 * scale;
          ctx.fillStyle = item.color;
          ctx.beginPath();
          ctx.roundRect(-s / 2, -s / 2, s, s, 4 * scale);
          ctx.fill();
          if (item.label) {
            ctx.fillStyle = muted;
            ctx.font = `${9 * scale}px ${monoFont}`;
            ctx.fillText(item.label, s / 2 + 5 * scale, 3 * scale);
          }
          break;
        }
        case "palette": {
          const s = 9 * scale;
          item.colors.forEach((color, i) => {
            const isEdge = i === 0 || i === item.colors.length - 1;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.roundRect((i - item.colors.length / 2) * s, -s / 2, s, s, isEdge ? 2 * scale : 0);
            ctx.fill();
          });
          break;
        }
        case "spacing": {
          const unit = 6 * scale;
          const width = unit * item.steps;
          ctx.strokeStyle = ink;
          ctx.lineWidth = Math.max(0.75, scale);
          ctx.beginPath();
          ctx.moveTo(-width / 2, 0);
          ctx.lineTo(width / 2, 0);
          for (let i = 0; i <= item.steps; i++) {
            const tickX = -width / 2 + unit * i;
            const tickHeight = i === 0 || i === item.steps ? 5 * scale : 2.5 * scale;
            ctx.moveTo(tickX, -tickHeight);
            ctx.lineTo(tickX, tickHeight);
          }
          ctx.stroke();
          ctx.fillStyle = muted;
          ctx.font = `${8 * scale}px ${monoFont}`;
          ctx.fillText(item.label, width / 2 + 4 * scale, 3 * scale);
          break;
        }
        case "radius": {
          const s = 14 * scale;
          const r = item.radius * scale;
          ctx.strokeStyle = ink;
          ctx.lineWidth = Math.max(0.75, 1.25 * scale);
          ctx.beginPath();
          ctx.moveTo(-s / 2, s / 2);
          ctx.lineTo(-s / 2, -s / 2 + r);
          ctx.arcTo(-s / 2, -s / 2, -s / 2 + r, -s / 2, r);
          ctx.lineTo(s / 2, -s / 2);
          ctx.stroke();
          break;
        }
        case "text": {
          ctx.fillStyle = item.mono ? muted : ink;
          ctx.font = item.mono ? `${9.5 * scale}px ${monoFont}` : `700 ${17 * scale}px ${sansFont}`;
          ctx.fillText(item.text, -ctx.measureText(item.text).width / 2, 4 * scale);
          break;
        }
      }
    };

    const render = () => {
      const isDark = modeRef.current === "dark";
      const center = size / 2;
      const radius = size * 0.34;
      const perspective = radius * 3.2;

      const rotY = angle + tiltCurrent.x;
      const rotX = -0.35 + tiltCurrent.y;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projected = particles.map((particle) => {
        const x1 = particle.x * cosY - particle.z * sinY;
        const z1 = particle.x * sinY + particle.z * cosY;
        const y1 = particle.y * cosX - z1 * sinX;
        const z2 = particle.y * sinX + z1 * cosX;
        const scale = perspective / (perspective + z2 * radius);

        return { particle, x: center + x1 * radius * scale, y: center + y1 * radius * scale, z: z2, scale };
      });

      // Paint back to front so nearer tokens overlap farther ones.
      projected.sort((a, b) => b.z - a.z);

      ctx.clearRect(0, 0, size, size);
      for (const { particle, x, y, z, scale } of projected) {
        ctx.save();
        ctx.globalAlpha = Math.min(1, Math.max(0.12, 0.15 + ((1 - z) / 2) * 0.85));
        ctx.translate(x, y);
        drawItem(particle, scale, isDark);
        ctx.restore();
      }
    };

    const tick = (timestamp: number) => {
      const delta = lastTimestamp ? Math.min(timestamp - lastTimestamp, 64) : 16;
      lastTimestamp = timestamp;

      angle += delta * ROTATION_SPEED * Math.PI * 2;
      tiltCurrent.x += (tiltTarget.x - tiltCurrent.x) * 0.05;
      tiltCurrent.y += (tiltTarget.y - tiltCurrent.y) * 0.05;
      render();

      animationFrameId = isVisible ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (!prefersReducedMotion && !animationFrameId) {
        lastTimestamp = 0;
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      tiltTarget.x = (event.clientX / window.innerWidth - 0.5) * 0.6;
      tiltTarget.y = (event.clientY / window.innerHeight - 0.5) * 0.4;
    };

    const handleResize = () => {
      resize();
      render();
    };

    // Pause the loop while the hero is scrolled out of view.
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        start();
      }
    });

    renderRef.current = render;
    resize();
    render();
    start();
    observer.observe(canvas);
    window.addEventListener("resize", handleResize);
    if (!prefersReducedMotion) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderRef.current = () => {};
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }} />;
}
