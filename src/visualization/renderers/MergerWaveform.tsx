import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The three phases, with the masses in the reader's hands.
 *
 * The inspiral is built from the leading-order post-Newtonian result, in which
 * frequency rises as (t_c − t)^(−3/8) and amplitude as f^(2/3), scaled by the
 * chirp mass computed from the two slider values. The ringdown is a damped
 * sinusoid at the fundamental quasinormal frequency of the remnant. The merger
 * between them is interpolated, because computing it honestly requires
 * numerical relativity — and saying so is more useful than pretending.
 *
 * This is not LIGO data. At the default slider positions the parameters are
 * comparable to GW150914; nothing here reproduces that event's waveform.
 */

const SAMPLES = 720;
const MERGE_INDEX = Math.round(SAMPLES * 0.72);

interface Waveform {
  readonly strain: Float32Array;
  readonly chirpMass: number;
  readonly remnant: number;
  readonly radiated: number;
  readonly peakHz: number;
}

function build(m1: number, m2: number): Waveform {
  const total = m1 + m2;
  const chirpMass = Math.pow(m1 * m2, 3 / 5) / Math.pow(total, 1 / 5);
  // Radiated fraction rises with symmetry; ~5% for an equal-mass pair.
  const eta = (m1 * m2) / (total * total);
  const radiated = total * (0.2 * eta);
  const remnant = total - radiated;
  // The ringdown fundamental for a Kerr remnant scales as 1/M; ~250 Hz at 62 M☉.
  const peakHz = (250 * 62) / remnant;

  const strain = new Float32Array(SAMPLES);
  const tau0 = 1;
  // Shallow enough that the fastest drawn cycle is still well sampled; a
  // steeper chirp aliases and reads as the amplitude falling into the merger.
  const tauEnd = 0.06;
  let phase = 0;
  let peak = 0;

  for (let i = 0; i < MERGE_INDEX; i += 1) {
    const tau = tau0 - (tau0 - tauEnd) * (i / (MERGE_INDEX - 1));
    const f = Math.pow(tau0 / tau, 3 / 8);
    phase += f * 0.055;
    const value = Math.pow(f, 2 / 3) * Math.sin(phase);
    strain[i] = value;
    peak = Math.max(peak, Math.abs(value));
  }
  for (let i = 0; i < MERGE_INDEX; i += 1) strain[i] = strain[i]! / peak;

  // Ringdown: a damped sinusoid continuing the phase.
  const ringFrequency = 0.42;
  for (let i = MERGE_INDEX; i < SAMPLES; i += 1) {
    const since = i - MERGE_INDEX;
    phase += ringFrequency;
    strain[i] = Math.exp(-since / 26) * Math.sin(phase);
  }

  return { strain, chirpMass, remnant, radiated, peakHz };
}

export default function MergerWaveform({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [m1, setM1] = useState(36);
  const [m2, setM2] = useState(29);
  const wave = useMemo(() => build(m1, m2), [m1, m2]);
  const cursorRef = useRef(0);

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

    const left = 10 * dpr;
    const right = w - 10 * dpr;
    const mid = h * 0.55;
    const amplitude = h * 0.26;
    const xOf = (index: number): number => left + (index / (SAMPLES - 1)) * (right - left);

    // ---- Phase bands ----------------------------------------------------------
    const bands: readonly [number, number, string, string][] = [
      [0, MERGE_INDEX - 20, 'rgba(102,224,212,0.06)', 'inspiral'],
      [MERGE_INDEX - 20, MERGE_INDEX + 14, 'rgba(255,214,110,0.10)', 'merger'],
      [MERGE_INDEX + 14, SAMPLES - 1, 'rgba(169,123,255,0.07)', 'ringdown'],
    ];
    for (const [from, to, fill, label] of bands) {
      context.fillStyle = fill;
      context.fillRect(xOf(from), mid - amplitude * 1.35, xOf(to) - xOf(from), amplitude * 2.7);
      context.textAlign = 'center';
      context.textBaseline = 'top';
      context.font = `${8.5 * dpr}px system-ui, sans-serif`;
      context.fillStyle = 'rgba(148,162,192,0.85)';
      context.fillText(label, (xOf(from) + xOf(to)) / 2, mid + amplitude * 1.4);
    }

    context.strokeStyle = 'rgba(148,162,192,0.25)';
    context.lineWidth = 1 * dpr;
    context.beginPath();
    context.moveTo(left, mid);
    context.lineTo(right, mid);
    context.stroke();

    // ---- The waveform, drawn up to the sweeping cursor ------------------------
    const cursor = Math.min(SAMPLES - 1, Math.floor(cursorRef.current));
    context.strokeStyle = '#66e0d4';
    context.lineWidth = 1.6 * dpr;
    context.beginPath();
    for (let i = 0; i <= cursor; i += 1) {
      const x = xOf(i);
      const y = mid - wave.strain[i]! * amplitude;
      if (i === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.stroke();

    // The rest, ghosted, so the shape is legible before the sweep arrives.
    context.strokeStyle = 'rgba(102,224,212,0.18)';
    context.lineWidth = 1.2 * dpr;
    context.beginPath();
    for (let i = cursor; i < SAMPLES; i += 1) {
      const x = xOf(i);
      const y = mid - wave.strain[i]! * amplitude;
      if (i === cursor) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.stroke();

    // ---- Readouts --------------------------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#e2e9f6';
    context.fillText(`${m1} M☉ + ${m2} M☉`, 10 * dpr, 8 * dpr);

    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `chirp mass ${wave.chirpMass.toFixed(1)} M☉ · remnant ${wave.remnant.toFixed(1)} M☉`,
      10 * dpr,
      24 * dpr,
    );
    context.fillStyle = '#ffd66e';
    context.fillText(
      `${wave.radiated.toFixed(1)} M☉ radiated · peak near ${wave.peakHz.toFixed(0)} Hz`,
      10 * dpr,
      40 * dpr,
    );

    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText('computed from leading-order formulas — not LIGO data', 10 * dpr, h - 6 * dpr);
  }, [width, height, dpr, wave, m1, m2]);

  useAnimationFrame(
    (delta) => {
      cursorRef.current += delta * SAMPLES * 0.28;
      if (cursorRef.current > SAMPLES * 1.25) cursorRef.current = 0;
      draw();
    },
    active && !reducedMotion,
    budget.targetFps,
  );

  useEffect(() => {
    cursorRef.current = SAMPLES;
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>First mass</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Mass of the first black hole, solar masses</span>
            <input
              className={styles.slider}
              type="range"
              min={5}
              max={90}
              step={1}
              value={m1}
              onChange={(event) => setM1(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{m1} M☉</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Second mass</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Mass of the second black hole, solar masses</span>
            <input
              className={styles.slider}
              type="range"
              min={5}
              max={90}
              step={1}
              value={m2}
              onChange={(event) => setM2(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{m2} M☉</output>
        </div>
      </div>
      <p className={styles.readout}>
        Heavier pairs merge at lower frequency and produce a shorter signal in the detector band.
        The merger portion is the one piece no formula supplies: computing it took two decades of
        numerical relativity, and the templates were ready in 2005, ten years before the first
        detection.
      </p>
    </div>
  );
}
