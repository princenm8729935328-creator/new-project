import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The muon problem, drawn in both frames at once.
 *
 * The two panels are the same experiment described two ways, and the figure's
 * job is to show that they agree on the only thing that can be measured: the
 * fraction of muons that reach the ground. On the left the atmosphere is 15 km
 * and the muon's clock is slow; on the right the muon's clock is normal and the
 * atmosphere is contracted. Both survival fractions are computed independently
 * from their own frame's numbers, and they come out identical — which is the
 * check that the reasoning is right.
 */

const ATMOSPHERE_KM = 15;
const MUON_LIFETIME_US = 2.1969811;
const C_KM_PER_US = 0.299792458;

interface Sim {
  /** Fraction of the descent completed, 0 → 1. */
  progress: number;
}

export default function LengthContraction({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sim = useRef<Sim>({ progress: 0 });
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [beta, setBeta] = useState(0.999);
  const [generation, setGeneration] = useState(0);

  const gamma = 1 / Math.sqrt(1 - beta * beta);
  const contracted = ATMOSPHERE_KM / gamma;
  // Earth frame: the trip takes this long, and the muon's clock runs γ slower.
  const earthTripUs = ATMOSPHERE_KM / (beta * C_KM_PER_US);
  const survivalEarth = Math.exp(-earthTripUs / (gamma * MUON_LIFETIME_US));
  // Muon frame: a shorter trip, at the ordinary lifetime.
  const muonTripUs = contracted / (beta * C_KM_PER_US);
  const survivalMuon = Math.exp(-muonTripUs / MUON_LIFETIME_US);

  const reset = useCallback(() => {
    sim.current = { progress: 0 };
    setGeneration((value) => value + 1);
  }, []);

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

    const top = 54 * dpr;
    const groundY = h - 46 * dpr;
    const span = groundY - top;
    const progress = sim.current.progress;

    const panel = (
      cx: number,
      columnKm: number,
      title: string,
      colour: string,
      clockRate: number,
      elapsedUs: number,
    ): void => {
      const columnWidth = Math.min(w * 0.3, 70 * dpr);
      // The column is drawn to scale against the full 15 km, so contraction is
      // visible as a genuinely shorter block rather than a relabelled one.
      const columnHeight = span * (columnKm / ATMOSPHERE_KM);
      const columnTop = groundY - columnHeight;

      context.fillStyle = 'rgba(143,184,255,0.12)';
      context.fillRect(cx - columnWidth / 2, columnTop, columnWidth, columnHeight);
      context.strokeStyle = 'rgba(143,184,255,0.5)';
      context.lineWidth = 1.2 * dpr;
      context.strokeRect(cx - columnWidth / 2, columnTop, columnWidth, columnHeight);

      // Ground.
      context.strokeStyle = 'rgba(148,162,192,0.6)';
      context.lineWidth = 2 * dpr;
      context.beginPath();
      context.moveTo(cx - columnWidth * 0.8, groundY);
      context.lineTo(cx + columnWidth * 0.8, groundY);
      context.stroke();

      // The muon.
      const muonY = columnTop + progress * columnHeight;
      context.fillStyle = colour;
      context.beginPath();
      context.arc(cx, muonY, 5 * dpr, 0, Math.PI * 2);
      context.fill();

      // Its clock: a little dial whose hand turns at the frame's own rate.
      const dialX = cx + columnWidth / 2 + 14 * dpr;
      const dialY = Math.min(Math.max(muonY, top + 12 * dpr), groundY - 12 * dpr);
      const dialR = 9 * dpr;
      context.strokeStyle = 'rgba(226,233,246,0.6)';
      context.lineWidth = 1.2 * dpr;
      context.beginPath();
      context.arc(dialX, dialY, dialR, 0, Math.PI * 2);
      context.stroke();
      const angle = -Math.PI / 2 + progress * clockRate * Math.PI * 2;
      context.strokeStyle = colour;
      context.lineWidth = 1.6 * dpr;
      context.beginPath();
      context.moveTo(dialX, dialY);
      context.lineTo(dialX + Math.cos(angle) * dialR * 0.8, dialY + Math.sin(angle) * dialR * 0.8);
      context.stroke();

      context.textAlign = 'center';
      context.textBaseline = 'top';
      context.font = `${10 * dpr}px system-ui, sans-serif`;
      context.fillStyle = colour;
      context.fillText(title, cx, 10 * dpr);
      context.font = `${9.5 * dpr}px ui-monospace, monospace`;
      context.fillStyle = 'rgba(148,162,192,0.95)';
      context.fillText(`${columnKm.toPrecision(3)} km`, cx, 26 * dpr);

      context.textBaseline = 'bottom';
      context.font = `${9.5 * dpr}px ui-monospace, monospace`;
      context.fillStyle = 'rgba(226,233,246,0.9)';
      context.fillText(`clock: ${(progress * elapsedUs).toFixed(1)} µs`, cx, h - 26 * dpr);
    };

    panel(w * 0.28, ATMOSPHERE_KM, 'Earth frame', '#8fb8ff', 1 / gamma, earthTripUs / gamma);
    panel(w * 0.72, contracted, 'Muon frame', '#66e0d4', 1, muonTripUs);

    context.beginPath();
    context.moveTo(w / 2, top - 30 * dpr);
    context.lineTo(w / 2, groundY + 10 * dpr);
    context.strokeStyle = 'rgba(148,162,192,0.2)';
    context.setLineDash([4 * dpr, 4 * dpr]);
    context.lineWidth = 1 * dpr;
    context.stroke();
    context.setLineDash([]);

    context.textAlign = 'center';
    context.textBaseline = 'bottom';
    context.font = `${10 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#4fe0c0';
    context.fillText(
      `both frames: ${(survivalEarth * 100).toPrecision(3)}% of muons arrive`,
      w / 2,
      h - 8 * dpr,
    );
  }, [width, height, dpr, gamma, contracted, earthTripUs, muonTripUs, survivalEarth]);

  useAnimationFrame(
    (delta) => {
      const state = sim.current;
      state.progress += delta * 0.32;
      if (state.progress > 1.25) state.progress = 0;
      draw();
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 40),
  );

  useEffect(() => {
    draw();
  }, [draw, generation, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Muon speed</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Muon speed as a fraction of c</span>
            <input
              className={styles.slider}
              type="range"
              min={0.9}
              max={0.9999}
              step={0.0001}
              value={beta}
              onChange={(event) => {
                setBeta(Number(event.target.value));
                reset();
              }}
            />
          </label>
          <output className={styles.value}>{beta.toFixed(4)} c</output>
        </div>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        At <strong>{beta.toFixed(4)} c</strong>, γ = {gamma.toFixed(1)}. From the ground the muon
        crosses 15 km in {earthTripUs.toFixed(1)} µs while its clock, running {gamma.toFixed(1)}×
        slow, advances only {(earthTripUs / gamma).toFixed(2)} µs. From the muon, the atmosphere is
        just <strong>{(contracted * 1000).toFixed(0)} m</strong> thick and passes in{' '}
        {muonTripUs.toFixed(2)} µs. Survival:{' '}
        <strong>{(survivalEarth * 100).toPrecision(3)}%</strong> from the Earth frame and{' '}
        <strong>{(survivalMuon * 100).toPrecision(3)}%</strong> from the muon frame — computed
        separately from each frame’s own numbers, and identical, as they must be.
      </p>
    </div>
  );
}
