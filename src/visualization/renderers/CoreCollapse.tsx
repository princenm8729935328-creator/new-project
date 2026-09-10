import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The second that ends a massive star, in five stages.
 *
 * The sequence — collapse, bounce, stall, neutrino heating, revival — is the
 * leading model, and this figure presents it as that rather than as settled
 * fact. The parts that are established are marked as such: that the collapse
 * happens, that a bounce occurs at nuclear density, and that 99% of the energy
 * leaves as neutrinos, which SN 1987A confirmed directly when two detectors
 * caught two dozen of them.
 *
 * What is not established is how the stalled shock gets going again, and the
 * figure says so at the stage where it matters.
 */

interface Stage {
  readonly name: string;
  readonly duration: string;
  readonly status: 'established' | 'model';
  readonly detail: string;
  /** Core radius in km, for the drawing. */
  readonly coreKm: number;
  readonly shockKm: number;
  readonly neutrinos: number;
}

const STAGES: readonly Stage[] = [
  {
    name: 'Collapse',
    duration: 'a few tenths of a second',
    status: 'established',
    coreKm: 3000,
    shockKm: 0,
    neutrinos: 0.15,
    detail:
      'The iron core has grown past about 1.4 solar masses and degeneracy pressure can no longer hold it. It falls inward at up to a quarter of the speed of light. Two processes make it worse: photons energetic enough to break iron nuclei apart, which absorbs energy, and electrons captured onto protons, which removes the very pressure holding things up.',
  },
  {
    name: 'Bounce',
    duration: 'about a millisecond',
    status: 'established',
    coreKm: 30,
    shockKm: 60,
    neutrinos: 0.7,
    detail:
      'The inner core reaches nuclear density — the density inside an atomic nucleus — and the strong force stiffens abruptly. Infalling material rebounds off it, launching a shock wave outward. This is the closest thing to a "moment of explosion" in the whole sequence, and by itself it is not enough.',
  },
  {
    name: 'Stall',
    duration: 'a few hundred milliseconds',
    status: 'established',
    coreKm: 25,
    shockKm: 150,
    neutrinos: 0.9,
    detail:
      'Within milliseconds the shock has spent nearly all its energy tearing apart the iron it plows into — the same binding energy that made iron the end of the road, now working against the explosion. It stalls, and material continues to rain down through it. In a one-dimensional simulation, this is where the star simply fails to explode.',
  },
  {
    name: 'Neutrino heating',
    duration: 'a few hundred milliseconds',
    status: 'model',
    coreKm: 20,
    shockKm: 200,
    neutrinos: 1,
    detail:
      'The proto-neutron star is radiating 10⁵⁸ neutrinos. Almost all pass straight through, but a fraction of a percent are absorbed just behind the stalled shock, and convection plus a large-scale sloshing instability keeps material in that heating region longer. This is the leading explanation for how the shock is revived. Three-dimensional simulations now explode for many progenitors — but not reliably for all, and the mechanism is not considered closed.',
  },
  {
    name: 'Explosion',
    duration: 'hours to break out of the star',
    status: 'model',
    coreKm: 15,
    shockKm: 320,
    neutrinos: 0.5,
    detail:
      'The revived shock unbinds the envelope. The star is destroyed and briefly outshines its galaxy — on about 0.01% of the energy released. The other 99% left as neutrinos before the surface even knew anything had happened; the light takes hours to emerge.',
  },
];

const ENERGY_SPLIT: readonly { label: string; pct: number; colour: string }[] = [
  { label: 'neutrinos', pct: 99, colour: '#4fe0c0' },
  { label: 'kinetic', pct: 0.99, colour: '#ff8f6e' },
  { label: 'light', pct: 0.01, colour: '#ffd27f' },
];

export default function CoreCollapse({ quality, width, height }: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);
  const [index, setIndex] = useState(0);
  const stage = STAGES[index] ?? STAGES[0]!;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || width === 0 || height === 0) return;

    const cssWidth = canvas.clientWidth || width;
    const cssHeight = canvas.clientHeight || height;
    const w = Math.round(cssWidth * dpr);
    const h = Math.round(cssHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    context.clearRect(0, 0, w, h);

    const cx = w * 0.5;
    const cy = h * 0.46;
    // Logarithmic radial scale: 10 km to 4000 km must all be visible.
    const rDraw = (km: number): number =>
      km <= 0 ? 0 : ((Math.log10(km) - 1) / (Math.log10(4000) - 1)) * Math.min(w, h) * 0.4;

    // Infalling envelope.
    context.strokeStyle = 'rgba(148,162,192,0.22)';
    context.lineWidth = 1 * dpr;
    for (let i = 0; i < 24; i += 1) {
      const a = (i / 24) * Math.PI * 2;
      const outer = Math.min(w, h) * 0.44;
      const inner = Math.max(rDraw(stage.shockKm), rDraw(stage.coreKm)) + 6 * dpr;
      context.beginPath();
      context.moveTo(cx + Math.cos(a) * outer, cy + Math.sin(a) * outer);
      context.lineTo(cx + Math.cos(a) * inner, cy + Math.sin(a) * inner);
      context.stroke();
    }

    // Neutrino flood.
    if (stage.neutrinos > 0) {
      context.strokeStyle = `rgba(79,224,192,${0.15 + stage.neutrinos * 0.35})`;
      context.lineWidth = 1.4 * dpr;
      for (let i = 0; i < 40; i += 1) {
        const a = (i / 40) * Math.PI * 2 + 0.08;
        const r0 = rDraw(stage.coreKm);
        const r1 = Math.min(w, h) * 0.46;
        context.beginPath();
        context.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
        context.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
        context.stroke();
      }
    }

    // The shock front.
    if (stage.shockKm > 0) {
      const r = rDraw(stage.shockKm);
      const grad = context.createRadialGradient(cx, cy, r * 0.85, cx, cy, r * 1.15);
      grad.addColorStop(0, 'rgba(255,143,110,0)');
      grad.addColorStop(0.5, 'rgba(255,143,110,0.55)');
      grad.addColorStop(1, 'rgba(255,143,110,0)');
      context.fillStyle = grad;
      context.beginPath();
      context.arc(cx, cy, r * 1.15, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = '#ff8f6e';
      context.lineWidth = 2 * dpr;
      context.beginPath();
      context.arc(cx, cy, r, 0, Math.PI * 2);
      context.stroke();
      context.font = `${9.5 * dpr}px system-ui, sans-serif`;
      context.fillStyle = '#ff8f6e';
      context.textAlign = 'center';
      context.fillText('shock', cx, cy - r - 6 * dpr);
    }

    // The collapsing / proto-neutron-star core.
    const rc = rDraw(stage.coreKm);
    const core = context.createRadialGradient(cx, cy, 0, cx, cy, Math.max(4 * dpr, rc));
    core.addColorStop(0, 'rgba(255,255,255,0.98)');
    core.addColorStop(1, 'rgba(143,184,255,0.5)');
    context.fillStyle = core;
    context.beginPath();
    context.arc(cx, cy, Math.max(4 * dpr, rc), 0, Math.PI * 2);
    context.fill();

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${12 * dpr}px system-ui, sans-serif`;
    context.fillStyle = stage.status === 'established' ? '#4fe0c0' : '#ffd27f';
    context.fillText(`${index + 1}. ${stage.name}`, 10 * dpr, 10 * dpr);
    context.font = `${10 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(`core radius ≈ ${stage.coreKm} km · ${stage.duration}`, 10 * dpr, 28 * dpr);
    context.fillStyle = stage.status === 'established' ? '#4fe0c0' : '#ffd27f';
    context.fillText(
      stage.status === 'established' ? 'ESTABLISHED' : 'LEADING MODEL — not settled',
      10 * dpr,
      44 * dpr,
    );

    // Energy split bar.
    const barY = h - 34 * dpr;
    const barW = w - 20 * dpr;
    let x = 10 * dpr;
    for (const part of ENERGY_SPLIT) {
      const segW = Math.max(2 * dpr, (part.pct / 100) * barW);
      context.fillStyle = part.colour;
      context.fillRect(x, barY, segW, 10 * dpr);
      x += segW;
    }
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(226,233,246,0.9)';
    context.fillText('energy: 99% neutrinos · 1% kinetic · 0.01% light', 10 * dpr, barY + 14 * dpr);
  }, [width, height, dpr, stage, index]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.toggles}>
        {STAGES.map((entry, i) => (
          <button
            key={entry.name}
            type="button"
            className={styles.toggle}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          >
            {entry.name}
          </button>
        ))}
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        <strong>
          {stage.name} — {stage.duration}.{' '}
          {stage.status === 'established' ? 'Established.' : 'Leading model, not settled.'}
        </strong>{' '}
        {stage.detail}
      </p>
    </div>
  );
}
