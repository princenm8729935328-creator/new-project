import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The mirror: the core shrinks while the envelope swells.
 *
 * This is the least intuitive thing a star does, and it is worth showing
 * carefully. When the core runs out of hydrogen it contracts and heats — and
 * the shell around it, now hotter, burns faster than the core ever did. The
 * extra flux inflates the envelope by a factor of a hundred, and the surface
 * cools as it expands.
 *
 * Radius and temperature are linked through the Stefan–Boltzmann law here, so
 * the luminosity readout is computed, not asserted. The core is drawn hugely
 * oversized; at true scale it would be a single pixel.
 */

const SIGMA_SCALE = 1; // luminosity in solar units: L = R²(T/T☉)⁴

interface Phase {
  readonly t: number;
  readonly radius: number;
  readonly temp: number;
  readonly core: number;
  readonly label: string;
}

/** Anchor points along the ascent of the giant branch, from model grids. */
const PHASES: readonly Phase[] = [
  {
    t: 0,
    radius: 1,
    temp: 5772,
    core: 0.002,
    label: 'main sequence — hydrogen burning in the core',
  },
  {
    t: 0.18,
    radius: 1.6,
    temp: 5600,
    core: 0.0035,
    label: 'core hydrogen exhausted; an inert helium core forms',
  },
  {
    t: 0.35,
    radius: 3.2,
    temp: 5100,
    core: 0.005,
    label: 'subgiant — a hydrogen shell ignites around the core',
  },
  {
    t: 0.55,
    radius: 11,
    temp: 4600,
    core: 0.008,
    label: 'red giant branch — the envelope is inflating fast',
  },
  {
    t: 0.78,
    radius: 45,
    temp: 4000,
    core: 0.011,
    label: 'the core is now denser than a white dwarf, and still shrinking',
  },
  {
    t: 1,
    radius: 170,
    temp: 3200,
    core: 0.013,
    label: 'red giant tip — the envelope reaches past Earth’s orbit',
  },
];

/** Orbital radii in solar radii, for scale. */
const ORBITS: readonly { name: string; au: number }[] = [
  { name: 'Mercury', au: 0.387 },
  { name: 'Venus', au: 0.723 },
  { name: 'Earth', au: 1.0 },
];
const AU_IN_SOLAR_RADII = 215.03;

function interpolate(t: number): Phase {
  for (let i = 0; i < PHASES.length - 1; i += 1) {
    const a = PHASES[i]!;
    const b = PHASES[i + 1]!;
    if (t <= b.t) {
      const f = (t - a.t) / (b.t - a.t);
      return {
        t,
        radius: 10 ** (Math.log10(a.radius) * (1 - f) + Math.log10(b.radius) * f),
        temp: a.temp * (1 - f) + b.temp * f,
        core: a.core * (1 - f) + b.core * f,
        label: f < 0.5 ? a.label : b.label,
      };
    }
  }
  return PHASES[PHASES.length - 1]!;
}

/** Approximate surface colour for a temperature, for the drawing. */
function surfaceColour(temp: number, alpha: number): string {
  const t = Math.max(0, Math.min(1, (temp - 3000) / 3200));
  const r = 255;
  const g = Math.round(90 + t * 130);
  const b = Math.round(40 + t * 130);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function RedGiantExpansion({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);

  const phase = interpolate(t);
  const luminosity = SIGMA_SCALE * phase.radius ** 2 * (phase.temp / 5772) ** 4;

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
    const cy = h * 0.52;
    // Scale so Earth's orbit is always visible near the frame edge.
    const maxSolarRadii = AU_IN_SOLAR_RADII * 1.15;
    const scale = (Math.min(w, h) * 0.42) / maxSolarRadii;

    // Planet orbits, drawn to true relative scale.
    context.setLineDash([3 * dpr, 5 * dpr]);
    context.lineWidth = 1 * dpr;
    for (const orbit of ORBITS) {
      const r = orbit.au * AU_IN_SOLAR_RADII * scale;
      const engulfed = phase.radius > orbit.au * AU_IN_SOLAR_RADII;
      context.strokeStyle = engulfed ? 'rgba(255,143,110,0.8)' : 'rgba(148,162,192,0.4)';
      context.beginPath();
      context.arc(cx, cy, r, 0, Math.PI * 2);
      context.stroke();
      context.setLineDash([]);
      context.fillStyle = engulfed ? '#ff8f6e' : 'rgba(226,233,246,0.85)';
      context.beginPath();
      context.arc(cx + r, cy, 2.6 * dpr, 0, Math.PI * 2);
      context.fill();
      context.font = `${9 * dpr}px system-ui, sans-serif`;
      context.textAlign = 'left';
      context.textBaseline = 'middle';
      context.fillText(orbit.name, cx + r + 5 * dpr, cy - 9 * dpr);
      context.setLineDash([3 * dpr, 5 * dpr]);
    }
    context.setLineDash([]);

    // The envelope.
    const rStar = Math.max(3 * dpr, phase.radius * scale);
    const grad = context.createRadialGradient(cx, cy, rStar * 0.1, cx, cy, rStar);
    grad.addColorStop(0, surfaceColour(phase.temp + 800, 0.95));
    grad.addColorStop(0.75, surfaceColour(phase.temp, 0.75));
    grad.addColorStop(1, surfaceColour(phase.temp - 400, 0.25));
    context.fillStyle = grad;
    context.beginPath();
    context.arc(cx, cy, rStar, 0, Math.PI * 2);
    context.fill();

    // Burning shell and core, drawn hugely oversized.
    const rCoreDrawn = Math.max(4 * dpr, (0.02 / phase.core) * 3 * dpr);
    context.strokeStyle = 'rgba(255,255,255,0.85)';
    context.lineWidth = 2 * dpr;
    context.beginPath();
    context.arc(cx, cy, rCoreDrawn * 1.5, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = 'rgba(200,220,255,0.95)';
    context.beginPath();
    context.arc(cx, cy, rCoreDrawn, 0, Math.PI * 2);
    context.fill();

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${10.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(`radius ${phase.radius.toPrecision(3)} R☉`, 10 * dpr, 10 * dpr);
    context.fillText(`surface ${Math.round(phase.temp).toLocaleString()} K`, 10 * dpr, 26 * dpr);
    context.fillText(`luminosity ${luminosity.toPrecision(3)} L☉`, 10 * dpr, 42 * dpr);

    context.textAlign = 'right';
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.fillText('core drawn ~10,000× oversized', w - 10 * dpr, h - 30 * dpr);
    context.fillText('orbits to true relative scale', w - 10 * dpr, h - 16 * dpr);
  }, [width, height, dpr, phase, luminosity]);

  useAnimationFrame(
    (delta) => {
      setT((value) => {
        const next = value + delta * 0.1;
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
          <span className={styles.controlName}>Stage</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Progress from main sequence to red giant tip</span>
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
          <output className={styles.value}>{phase.radius.toPrecision(3)} R☉</output>
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
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        <strong>{phase.label}.</strong> Radius {phase.radius.toPrecision(3)} R☉, surface{' '}
        {Math.round(phase.temp).toLocaleString()} K, luminosity{' '}
        <strong>{luminosity.toPrecision(3)}×</strong> the Sun’s — computed from L = R²(T/T☉)⁴, not
        looked up. A hundred and seventy times the radius with the surface only 45% as hot still
        gives six hundred times the output, because area beats temperature here.{' '}
        {phase.radius > AU_IN_SOLAR_RADII
          ? 'The envelope now reaches past Earth’s orbit. Whether the Earth survives depends on how much mass the Sun loses first, which moves the orbit outward — and the answer is genuinely uncertain.'
          : 'The core meanwhile is contracting, not expanding: it is already denser than any material on Earth, and it will end as a white dwarf.'}
      </p>
    </div>
  );
}
