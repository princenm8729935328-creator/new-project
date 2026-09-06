import { useEffect, useRef, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  /** 0 = free electron, 1 = nucleus. Only affects colour. */
  kind: 0 | 1;
  bound: boolean;
}

/**
 * From opaque plasma to transparent gas.
 *
 * A conceptual diagram of recombination. It shows the one thing that matters:
 * while electrons are free, light cannot cross the frame; once electrons are
 * bound into atoms, it can. Positions, speeds and scales are illustrative — real
 * densities and cross-sections are nothing like this, and the caption says so.
 *
 * Loops on a fixed cycle so a reader who arrives mid-animation still sees the
 * whole transition.
 */
export default function PrimordialPlasma({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const photonRef = useRef({ x: 0, y: 0, angle: 0, alive: false });
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);
  const count = Math.round(Math.min(budget.maxParticles, 420) * 0.6);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width === 0 || height === 0) return;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    particlesRef.current = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 40 * dpr,
      vy: (Math.random() - 0.5) * 40 * dpr,
      kind: index % 2 === 0 ? 0 : 1,
      bound: false,
    }));
  }, [width, height, count, dpr]);

  const render = (elapsed: number): void => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const w = canvas.width;
    const h = canvas.height;

    // A 14-second loop: 0–0.45 opaque plasma, 0.45–0.6 recombination,
    // 0.6–1 transparent, with a photon crossing freely.
    const phase = reducedMotion ? 0.8 : (elapsed % 14) / 14;
    const cooled = Math.min(1, Math.max(0, (phase - 0.45) / 0.15));

    context.clearRect(0, 0, w, h);

    // Background glow: hot and bright while ionised, dark once neutral.
    const glow = context.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.7);
    const heat = 1 - cooled;
    glow.addColorStop(
      0,
      `rgba(255, ${120 + 80 * cooled}, ${90 + 60 * cooled}, ${0.28 * heat + 0.04})`,
    );
    glow.addColorStop(1, 'rgba(4, 6, 13, 0)');
    context.fillStyle = glow;
    context.fillRect(0, 0, w, h);

    const particles = particlesRef.current;
    const speed = reducedMotion ? 0 : 1;

    for (let i = 0; i < particles.length; i += 1) {
      const p = particles[i]!;
      // Electrons slow down as the Universe cools, then bind to nuclei.
      const drift = (1 - 0.75 * cooled) * speed;
      p.x += p.vx * drift * 0.016;
      p.y += p.vy * drift * 0.016;
      if (p.x < 0) p.x += w;
      if (p.x > w) p.x -= w;
      if (p.y < 0) p.y += h;
      if (p.y > h) p.y -= h;

      const radius = (p.kind === 1 ? 2.2 : 1.4) * dpr;
      if (p.kind === 1 && cooled > 0.5) {
        // Neutral atom: a nucleus with a faint electron shell drawn around it.
        context.beginPath();
        context.arc(p.x, p.y, radius * 2.6, 0, Math.PI * 2);
        context.strokeStyle = `rgba(143, 184, 255, ${0.18 * cooled})`;
        context.lineWidth = dpr;
        context.stroke();
      }
      context.beginPath();
      context.arc(p.x, p.y, radius, 0, Math.PI * 2);
      context.fillStyle =
        p.kind === 1
          ? `rgba(255, 214, 140, ${0.55 + 0.35 * cooled})`
          : `rgba(120, 200, 255, ${0.7 - 0.5 * cooled})`;
      context.fill();
    }

    // The photon. Before recombination it is scattered constantly and never
    // gets far; afterwards it crosses the frame in a straight line.
    const photon = photonRef.current;
    if (!photon.alive || photon.x > w + 20 || photon.x < -20) {
      photon.x = 0;
      photon.y = h * 0.5;
      photon.angle = 0;
      photon.alive = true;
    }
    const photonSpeed = (cooled > 0.6 ? 5.5 : 2.2) * dpr * speed;
    if (cooled < 0.6 && !reducedMotion) {
      // Scattering: the direction is randomised constantly, so it diffuses.
      photon.angle += (Math.random() - 0.5) * 2.4;
      if (photon.x > w * 0.34) photon.x = w * 0.34;
    }
    photon.x += Math.cos(photon.angle) * photonSpeed;
    photon.y += Math.sin(photon.angle) * photonSpeed;
    photon.y = Math.min(h - 4 * dpr, Math.max(4 * dpr, photon.y));

    context.beginPath();
    context.arc(photon.x, photon.y, 3.2 * dpr, 0, Math.PI * 2);
    context.fillStyle = 'rgba(255, 255, 255, 0.95)';
    context.fill();
    context.beginPath();
    context.arc(photon.x, photon.y, 8 * dpr, 0, Math.PI * 2);
    context.fillStyle = 'rgba(255, 240, 200, 0.18)';
    context.fill();

    // Stage label. The figure is explaining a transition, so it has to say
    // which side of the transition is on screen.
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(220, 228, 242, 0.85)';
    context.textBaseline = 'top';
    context.fillText(
      cooled > 0.6
        ? 'Neutral atoms — light travels freely'
        : cooled > 0
          ? 'Electrons binding to nuclei'
          : 'Ionised plasma — light is scattered',
      12 * dpr,
      12 * dpr,
    );
  };

  useAnimationFrame(
    (_delta, elapsed) => render(elapsed),
    active && !reducedMotion,
    budget.targetFps,
  );

  // One static frame when motion is off, so the figure is never blank.
  useEffect(() => {
    if (!active || reducedMotion) render(11);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reducedMotion, width, height, quality]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
}
