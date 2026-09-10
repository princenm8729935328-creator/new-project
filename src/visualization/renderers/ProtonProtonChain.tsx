import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The pp-I chain, one step at a time.
 *
 * The reason this is a stepped diagram rather than an animation is a fact the
 * animation could not honestly represent: the three steps differ in timescale
 * by more than twenty orders of magnitude. A given proton in the Sun's core
 * waits about nine billion years for step one and about a second for step two.
 * No single playback rate can show both, so the figure states the real waiting
 * times in the readout and does not pretend.
 *
 * The particles, the order, and the energies are correct. The spatial layout
 * is entirely illustrative.
 */

interface Particle {
  readonly kind: 'p' | 'n' | 'e' | 'nu' | 'gamma';
  readonly x: number;
  readonly y: number;
  readonly label?: string;
}

interface Step {
  readonly equation: string;
  readonly energy: number;
  readonly wait: string;
  readonly before: readonly Particle[];
  readonly after: readonly Particle[];
  readonly detail: string;
}

const STEPS: readonly Step[] = [
  {
    equation: 'p + p → ²H + e⁺ + ν',
    energy: 1.44,
    wait: 'about 9 billion years',
    before: [
      { kind: 'p', x: -0.4, y: 0 },
      { kind: 'p', x: 0.4, y: 0 },
    ],
    after: [
      { kind: 'p', x: -0.12, y: 0, label: '²H' },
      { kind: 'n', x: 0.12, y: 0 },
      { kind: 'e', x: 0.55, y: -0.4 },
      { kind: 'nu', x: 0.7, y: 0.4 },
    ],
    detail:
      'Two protons collide and stick — but only if one of them converts into a neutron at the same instant, which requires the weak force. The weak force is weak: this is why the Sun burns for ten billion years instead of exploding. It is the bottleneck in the entire chain, and everything that follows waits on it.',
  },
  {
    equation: '²H + p → ³He + γ',
    energy: 5.49,
    wait: 'about 1 second',
    before: [
      { kind: 'p', x: -0.35, y: 0, label: '²H' },
      { kind: 'n', x: -0.11, y: 0 },
      { kind: 'p', x: 0.5, y: 0 },
    ],
    after: [
      { kind: 'p', x: -0.12, y: -0.12, label: '³He' },
      { kind: 'p', x: 0.12, y: -0.12 },
      { kind: 'n', x: 0, y: 0.14 },
      { kind: 'gamma', x: 0.65, y: -0.35 },
    ],
    detail:
      'Once deuterium exists it does not last. The strong force takes over and a proton is captured almost immediately, releasing a gamma ray. There is essentially no deuterium in the Sun’s core at any moment — it is made and consumed within a second.',
  },
  {
    equation: '³He + ³He → ⁴He + p + p',
    energy: 12.86,
    wait: 'about 400 years',
    before: [
      { kind: 'p', x: -0.55, y: -0.1, label: '³He' },
      { kind: 'p', x: -0.35, y: -0.1 },
      { kind: 'n', x: -0.45, y: 0.12 },
      { kind: 'p', x: 0.35, y: -0.1, label: '³He' },
      { kind: 'p', x: 0.55, y: -0.1 },
      { kind: 'n', x: 0.45, y: 0.12 },
    ],
    after: [
      { kind: 'p', x: -0.1, y: -0.1, label: '⁴He' },
      { kind: 'p', x: 0.1, y: -0.1 },
      { kind: 'n', x: -0.1, y: 0.1 },
      { kind: 'n', x: 0.1, y: 0.1 },
      { kind: 'p', x: -0.7, y: 0.25 },
      { kind: 'p', x: 0.7, y: 0.25 },
    ],
    detail:
      'Two helium-3 nuclei meet and rearrange into one helium-4, returning two protons to the pool. Four protons have gone in; one helium-4 has come out; 0.7% of the original mass has become energy. That is the reaction the Sun runs on, and it happens about 10³⁸ times a second.',
  },
];

const COLOURS: Record<Particle['kind'], string> = {
  p: '#ff8f6e',
  n: '#8fb8ff',
  e: '#ffd27f',
  nu: '#4fe0c0',
  gamma: '#e2e9f6',
};

const SYMBOLS: Record<Particle['kind'], string> = {
  p: 'p',
  n: 'n',
  e: 'e⁺',
  nu: 'ν',
  gamma: 'γ',
};

export default function ProtonProtonChain({
  quality,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);
  const [step, setStep] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const current = STEPS[step] ?? STEPS[0]!;

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

    const cx = w / 2;
    const cy = h * 0.52;
    const unit = Math.min(w * 0.34, h * 0.34);
    const particles = showAfter ? current.after : current.before;
    const r = Math.max(6 * dpr, unit * 0.13);

    for (const particle of particles) {
      const x = cx + particle.x * unit;
      const y = cy + particle.y * unit;
      context.fillStyle = COLOURS[particle.kind];
      context.beginPath();
      context.arc(
        x,
        y,
        particle.kind === 'gamma' || particle.kind === 'nu' ? r * 0.55 : r,
        0,
        Math.PI * 2,
      );
      context.fill();
      context.fillStyle = '#0a0e18';
      context.font = `${r * 0.95}px system-ui, sans-serif`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      if (particle.kind !== 'gamma' && particle.kind !== 'nu') {
        context.fillText(SYMBOLS[particle.kind], x, y);
      }
      if (particle.label) {
        context.fillStyle = 'rgba(226,233,246,0.95)';
        context.font = `${11 * dpr}px system-ui, sans-serif`;
        context.fillText(particle.label, x + r * 0.5, y - r * 1.9);
      }
    }

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${12 * dpr}px ui-monospace, monospace`;
    context.fillStyle = '#4fe0c0';
    context.fillText(current.equation, 10 * dpr, 10 * dpr);
    context.font = `${10.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `step ${step + 1} of 3 · ${showAfter ? 'after' : 'before'} · ${current.energy} MeV released`,
      10 * dpr,
      30 * dpr,
    );

    context.textAlign = 'right';
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.fillText(
      'layout illustrative — sizes and distances are not physical',
      w - 10 * dpr,
      h - 16 * dpr,
    );

    // Legend row.
    context.textAlign = 'left';
    const legend: readonly Particle['kind'][] = ['p', 'n', 'e', 'nu', 'gamma'];
    const names = ['proton', 'neutron', 'positron', 'neutrino', 'gamma ray'];
    legend.forEach((kind, i) => {
      const lx = 10 * dpr + (i * (w - 20 * dpr)) / 5;
      context.fillStyle = COLOURS[kind];
      context.beginPath();
      context.arc(lx + 4 * dpr, h - 34 * dpr, 4 * dpr, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = 'rgba(226,233,246,0.9)';
      context.font = `${9 * dpr}px system-ui, sans-serif`;
      context.fillText(names[i] ?? '', lx + 12 * dpr, h - 39 * dpr);
    });
  }, [width, height, dpr, current, step, showAfter]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            if (showAfter) setShowAfter(false);
            else {
              setStep((v) => (v + 2) % 3);
              setShowAfter(true);
            }
          }}
        >
          Back
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            if (showAfter) {
              setStep((v) => (v + 1) % 3);
              setShowAfter(false);
            } else {
              setShowAfter(true);
            }
          }}
        >
          {showAfter ? 'Next step' : 'React'}
        </button>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        <strong>{current.equation}</strong> — {current.energy} MeV, and a typical waiting time of{' '}
        <strong>{current.wait}</strong>. {current.detail} Across the whole chain, 26.73 MeV is
        released per helium nucleus, of which about 0.6 MeV leaves as neutrinos and never heats
        anything.
      </p>
    </div>
  );
}
