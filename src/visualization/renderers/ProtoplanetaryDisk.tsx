import { useEffect, useMemo, useRef, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';

interface Grain {
  radius: number;
  angle: number;
  /** Angular speed. Inner material orbits faster — Kepler's third law. */
  speed: number;
  size: number;
  tint: number;
}

/**
 * A disc of dust becoming planets.
 *
 * Conceptual. The disc is drawn in projection with grains on circular orbits
 * whose angular speeds follow r^(-3/2), so the differential rotation is
 * qualitatively right. Everything else is illustrative: the gaps open far too
 * quickly, the planets are enormously oversized, and no accretion physics is
 * being solved. The caption states this.
 */
export default function ProtoplanetaryDisk({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);
  const grainCount = Math.round(Math.min(budget.maxParticles, 900) * 0.7);

  // Gaps the forming planets sweep clear, as fractions of the disc radius.
  const planetOrbits = useMemo(() => [0.34, 0.52, 0.72, 0.88], []);

  const grains = useMemo<Grain[]>(() => {
    let state = 987654321;
    const random = (): number => {
      state = (state * 1664525 + 1013904223) % 4294967296;
      return state / 4294967296;
    };
    return Array.from({ length: grainCount }, () => {
      const radius = 0.12 + Math.sqrt(random()) * 0.88;
      return {
        radius,
        angle: random() * Math.PI * 2,
        speed: 0.55 * radius ** -1.5,
        size: 0.5 + random() * 1.3,
        tint: random(),
      };
    });
  }, [grainCount]);

  const render = (elapsed: number): void => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || width === 0) return;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const discRadius = Math.min(w, h) * 0.46;
    // Vertical squash: the disc is viewed at a shallow angle.
    const tilt = 0.34;

    const cycle = reducedMotion ? 1 : Math.min(1, (elapsed % 24) / 18);
    const time = reducedMotion ? 6 : elapsed;

    context.clearRect(0, 0, w, h);

    // The young star at the centre.
    const starRadius = (6 + 8 * cycle) * dpr;
    const starGlow = context.createRadialGradient(cx, cy, 0, cx, cy, starRadius * 9);
    starGlow.addColorStop(0, `rgba(255, 244, 214, ${0.55 + 0.35 * cycle})`);
    starGlow.addColorStop(0.35, `rgba(255, 190, 110, ${0.22 * cycle})`);
    starGlow.addColorStop(1, 'rgba(255, 150, 60, 0)');
    context.fillStyle = starGlow;
    context.beginPath();
    context.arc(cx, cy, starRadius * 9, 0, Math.PI * 2);
    context.fill();

    for (const grain of grains) {
      // Grains near a forming planet's orbit are progressively cleared.
      let cleared = 0;
      for (const orbit of planetOrbits) {
        const distance = Math.abs(grain.radius - orbit);
        if (distance < 0.055) cleared = Math.max(cleared, 1 - distance / 0.055);
      }
      const alpha = (0.5 - 0.45 * cleared * cycle) * (0.35 + 0.65 * (1 - cycle * 0.5));
      if (alpha <= 0.01) continue;

      const angle = grain.angle + grain.speed * time * (reducedMotion ? 0 : 1);
      const x = cx + Math.cos(angle) * grain.radius * discRadius;
      const y = cy + Math.sin(angle) * grain.radius * discRadius * tilt;

      context.beginPath();
      context.arc(x, y, grain.size * dpr, 0, Math.PI * 2);
      context.fillStyle =
        grain.tint > 0.7 ? `rgba(255, 205, 150, ${alpha})` : `rgba(190, 205, 235, ${alpha * 0.85})`;
      context.fill();
    }

    // The forming planets themselves, growing as the disc clears.
    planetOrbits.forEach((orbit, index) => {
      const growth = Math.min(1, Math.max(0, (cycle - 0.25 - index * 0.07) / 0.5));
      if (growth <= 0) return;
      const angle = 0.8 * index + 0.42 * orbit ** -1.5 * time * (reducedMotion ? 0 : 1);
      const x = cx + Math.cos(angle) * orbit * discRadius;
      const y = cy + Math.sin(angle) * orbit * discRadius * tilt;
      const radius = (1.5 + growth * (index < 2 ? 3 : 5.5)) * dpr;

      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = index < 2 ? 'rgba(214, 196, 170, 0.95)' : 'rgba(168, 196, 235, 0.95)';
      context.fill();
    });

    // Star core drawn last so it sits above the near edge of the disc.
    context.beginPath();
    context.arc(cx, cy, starRadius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(255, 250, 235, 0.98)';
    context.fill();

    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(220, 228, 242, 0.85)';
    context.textBaseline = 'top';
    context.fillText(
      cycle < 0.3
        ? 'A collapsing cloud flattens into a spinning disc'
        : cycle < 0.7
          ? 'Dust sticks together; bodies grow and sweep gaps'
          : 'Planets clear their orbits',
      12 * dpr,
      12 * dpr,
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width === 0 || height === 0) return;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    render(reducedMotion ? 20 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, dpr, reducedMotion, quality]);

  useAnimationFrame(
    (_delta, elapsed) => render(elapsed),
    active && !reducedMotion,
    budget.targetFps,
  );

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
}
