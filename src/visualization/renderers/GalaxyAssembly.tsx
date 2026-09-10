import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Hierarchical assembly: small halos first, then everything falls together.
 *
 * This is deliberately *not* dressed up as a simulation. No gravity is being
 * integrated; the halos follow prescribed infall paths. What the figure
 * represents faithfully is the ordering — dark matter collapses first and stays
 * extended, gas cools inside it and settles into a rotating disk, stars form in
 * the disk — because that ordering is the substantive claim, and it is the
 * thing a reader should take away.
 *
 * The dark-matter toggle exists because it makes one point better than any
 * paragraph: turn it off and most of the structure disappears.
 */

interface Halo {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  mass: number;
  merged: boolean;
  gas: number;
}

function seeded(i: number): number {
  const x = Math.sin(i * 45.164 + 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export default function GalaxyAssembly({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [showDark, setShowDark] = useState(true);
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(true);

  const halos = useRef<Halo[]>([]);
  if (halos.current.length === 0) {
    halos.current = Array.from({ length: 26 }, (_, i) => ({
      x: seeded(i * 4),
      y: seeded(i * 4 + 1),
      targetX: 0.5 + (seeded(i * 4 + 2) - 0.5) * 0.16,
      targetY: 0.5 + (seeded(i * 4 + 3) - 0.5) * 0.1,
      mass: 0.4 + seeded(i * 7) * 0.6,
      merged: false,
      gas: 0.5 + seeded(i * 9) * 0.5,
    }));
  }

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

    const unit = Math.min(w, h);
    const ease = t * t * (3 - 2 * t);

    // Merged dark-matter halo, growing as things fall in.
    if (showDark && ease > 0.15) {
      const r = unit * (0.08 + ease * 0.3);
      const grad = context.createRadialGradient(w / 2, h / 2, r * 0.1, w / 2, h / 2, r);
      grad.addColorStop(0, `rgba(200,155,255,${0.12 + ease * 0.1})`);
      grad.addColorStop(1, 'rgba(200,155,255,0)');
      context.fillStyle = grad;
      context.beginPath();
      context.arc(w / 2, h / 2, r, 0, Math.PI * 2);
      context.fill();
    }

    for (const halo of halos.current) {
      const x = (halo.x + (halo.targetX - halo.x) * ease) * w;
      const y = (halo.y + (halo.targetY - halo.y) * ease) * h;
      const fade = Math.max(0, 1 - ease * 1.35);

      if (showDark) {
        const r = unit * 0.055 * halo.mass * (1 - ease * 0.4);
        const grad = context.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, `rgba(200,155,255,${0.3 * fade + 0.05})`);
        grad.addColorStop(1, 'rgba(200,155,255,0)');
        context.fillStyle = grad;
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        context.fill();
      }

      // Gas cools toward the centre of each halo, then lights up as stars.
      const lit = ease > 0.3;
      context.fillStyle = lit
        ? `rgba(255,${220 - ease * 40},${170 + ease * 40},${0.5 + ease * 0.45})`
        : `rgba(127,199,255,${0.35 + ease * 0.3})`;
      context.beginPath();
      context.arc(x, y, Math.max(1.4 * dpr, unit * 0.012 * halo.gas), 0, Math.PI * 2);
      context.fill();
    }

    // The disk that forms at the centre.
    if (ease > 0.45) {
      const a = (ease - 0.45) / 0.55;
      context.save();
      context.translate(w / 2, h / 2);
      context.scale(1, 0.32);
      const r = unit * 0.16 * a;
      const grad = context.createRadialGradient(0, 0, r * 0.1, 0, 0, r);
      grad.addColorStop(0, `rgba(255,235,190,${0.55 * a})`);
      grad.addColorStop(0.6, `rgba(180,205,255,${0.3 * a})`);
      grad.addColorStop(1, 'rgba(140,180,255,0)');
      context.fillStyle = grad;
      context.beginPath();
      context.arc(0, 0, r, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${10.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(226,233,246,0.92)';
    const caption =
      ease < 0.2
        ? 'small dark-matter halos collapse first'
        : ease < 0.45
          ? 'they fall together and merge; gas cools inside them'
          : ease < 0.8
            ? 'gas settles into a rotating disk and lights up as stars'
            : 'a galaxy — with the dark matter still extended around it';
    context.fillText(caption, 10 * dpr, 10 * dpr);
    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.9)';
    context.fillText(
      `≈ ${(0.4 + ease * 10).toFixed(1)} billion years after the Big Bang`,
      10 * dpr,
      28 * dpr,
    );

    context.textAlign = 'right';
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.fillText('schematic — no gravity is being integrated', w - 10 * dpr, h - 16 * dpr);
  }, [width, height, dpr, showDark, t]);

  useAnimationFrame(
    (delta) => {
      setT((value) => {
        const next = value + delta * 0.12;
        if (next >= 1) {
          setPlaying(false);
          return 1;
        }
        return next;
      });
    },
    playing && active && !reducedMotion,
    30,
  );

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Time</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Cosmic time through the assembly sequence</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={1}
              step={0.005}
              value={t}
              onChange={(event) => {
                setPlaying(false);
                setT(Number(event.target.value));
              }}
            />
          </label>
          <output className={styles.value}>{(0.4 + t * 10).toFixed(1)} Gyr</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={playing}
          onClick={() => {
            if (t >= 1) setT(0);
            setPlaying((v) => !v);
          }}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={showDark}
          onClick={() => setShowDark((v) => !v)}
        >
          Show dark matter
        </button>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        {showDark
          ? 'Dark matter collapses first, and it never settles into a disk — it has no way to radiate energy away, so it stays extended and roughly spherical. The gas can radiate, so it sinks to the centre, spins up, flattens, and forms stars. That asymmetry is why galaxies look the way they do.'
          : 'With the dark matter hidden, most of the structure is gone. The visible galaxy is the small bright part at the bottom of a much larger invisible well — under a fifth of the total mass, occupying a few percent of the radius.'}{' '}
        This is a schematic of a process reconstructed from models and observations, not a recording
        of anything. Nobody has watched a galaxy assemble; the sequence is inferred by comparing
        galaxies at different redshifts, which is looking at different objects rather than the same
        one over time.
      </p>
    </div>
  );
}
