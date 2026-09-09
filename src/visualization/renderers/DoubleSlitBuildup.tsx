import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The double slit built up one detection at a time.
 *
 * Two decisions here are deliberate and are the whole point of the figure.
 *
 * First, nothing is drawn travelling from the source to the screen. The theory
 * does not contain a trajectory, and drawing one — a little ball wiggling
 * through a slit — would teach exactly the picture the topic exists to remove.
 * What is drawn is what an experiment actually produces: a detection, at a
 * place, at a time.
 *
 * Second, the distribution the detections are sampled from is computed, not
 * shaped by hand. It is the standard two-slit intensity, a cos² fringe term
 * inside a sinc² single-slit envelope. When the which-path detector is on, the
 * cos² term is dropped and the two single-slit envelopes are added as
 * probabilities — which is what "the interference is gone" means numerically.
 */

/** Slit separation and slit width, in units of wavelength × distance. */
const FRINGE_SCALE = 15;
const ENVELOPE_SCALE = 3.4;

/** Relative probability of a detection at screen coordinate u ∈ [−1, 1]. */
function intensity(u: number, whichPath: boolean): number {
  const envelope = (() => {
    const arg = ENVELOPE_SCALE * u;
    if (Math.abs(arg) < 1e-6) return 1;
    return (Math.sin(arg) / arg) ** 2;
  })();
  if (whichPath) {
    // Two independent single-slit patterns, offset and added as probabilities.
    const one = (() => {
      const arg = ENVELOPE_SCALE * (u - 0.16);
      return Math.abs(arg) < 1e-6 ? 1 : (Math.sin(arg) / arg) ** 2;
    })();
    const two = (() => {
      const arg = ENVELOPE_SCALE * (u + 0.16);
      return Math.abs(arg) < 1e-6 ? 1 : (Math.sin(arg) / arg) ** 2;
    })();
    return 0.5 * (one + two);
  }
  return envelope * Math.cos(FRINGE_SCALE * u * 0.5) ** 2;
}

/** One accepted sample from that distribution, by rejection. */
function sample(whichPath: boolean): number {
  for (let attempt = 0; attempt < 64; attempt += 1) {
    const u = Math.random() * 2 - 1;
    if (Math.random() < intensity(u, whichPath)) return u;
  }
  return Math.random() * 2 - 1;
}

const MAX_DOTS = 4000;

export default function DoubleSlitBuildup({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [whichPath, setWhichPath] = useState(false);
  const [rate, setRate] = useState(320);
  const [count, setCount] = useState(0);

  /** Accepted detections, as (u across the screen, v along it). */
  const dotsRef = useRef<Array<{ u: number; v: number }>>([]);
  const pendingRef = useRef(0);

  const reset = useCallback(() => {
    dotsRef.current = [];
    pendingRef.current = 0;
    setCount(0);
  }, []);

  useEffect(reset, [reset, whichPath]);

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

    const scale = h / 260;
    const screenLeft = w * 0.34;
    const screenRight = w - 10 * scale;
    const midY = h * 0.5;
    const halfHeight = h * 0.42;

    // ---- Apparatus, drawn as a plain schematic, with no particle in flight ---
    context.strokeStyle = 'rgba(148,162,192,0.45)';
    context.lineWidth = 1.5 * scale;
    const barrierX = w * 0.18;
    const slitGap = halfHeight * 0.16;
    const slitHalf = halfHeight * 0.035;
    context.beginPath();
    context.moveTo(barrierX, midY - halfHeight);
    context.lineTo(barrierX, midY - slitGap - slitHalf);
    context.moveTo(barrierX, midY - slitGap + slitHalf);
    context.lineTo(barrierX, midY + slitGap - slitHalf);
    context.moveTo(barrierX, midY + slitGap + slitHalf);
    context.lineTo(barrierX, midY + halfHeight);
    context.stroke();

    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.font = `${9 * scale}px system-ui, sans-serif`;
    context.textAlign = 'left';
    context.fillText('source', 6 * scale, midY - 6 * scale);
    context.fillText('two slits', barrierX - 18 * scale, midY + halfHeight + 12 * scale);
    context.fillText('detection screen', screenLeft, midY + halfHeight + 12 * scale);

    context.fillStyle = 'rgba(102,224,212,0.85)';
    context.beginPath();
    context.arc(10 * scale, midY, 3.5 * scale, 0, Math.PI * 2);
    context.fill();

    if (whichPath) {
      context.fillStyle = 'rgba(255,143,110,0.9)';
      context.beginPath();
      context.arc(barrierX + 8 * scale, midY - slitGap, 3 * scale, 0, Math.PI * 2);
      context.arc(barrierX + 8 * scale, midY + slitGap, 3 * scale, 0, Math.PI * 2);
      context.fill();
      context.fillText(
        'which-path detector on',
        barrierX + 14 * scale,
        midY - halfHeight + 10 * scale,
      );
    }

    // ---- The screen and the accumulated detections --------------------------
    context.fillStyle = 'rgba(6,8,16,0.85)';
    context.fillRect(screenLeft, midY - halfHeight, screenRight - screenLeft, halfHeight * 2);
    context.strokeStyle = 'rgba(148,162,192,0.3)';
    context.lineWidth = 1;
    context.strokeRect(screenLeft, midY - halfHeight, screenRight - screenLeft, halfHeight * 2);

    context.fillStyle = whichPath ? 'rgba(255,196,140,0.9)' : 'rgba(160,215,255,0.9)';
    const dotR = Math.max(0.8, 1.2 * scale);
    for (const dot of dotsRef.current) {
      const y = midY + dot.u * halfHeight;
      const x = screenLeft + (0.5 + dot.v * 0.48) * (screenRight - screenLeft);
      context.beginPath();
      context.arc(x, y, dotR, 0, Math.PI * 2);
      context.fill();
    }

    // ---- The distribution they are drawn from, for comparison ---------------
    context.strokeStyle = 'rgba(255,214,110,0.55)';
    context.lineWidth = 1.4 * scale;
    context.beginPath();
    for (let i = 0; i <= 120; i += 1) {
      const u = -1 + (2 * i) / 120;
      const p = intensity(u, whichPath);
      const x = screenLeft - 6 * scale - p * (w * 0.1);
      const y = midY + u * halfHeight;
      if (i === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.stroke();
    context.fillStyle = 'rgba(255,214,110,0.8)';
    context.textAlign = 'right';
    context.fillText(
      'predicted probability',
      screenLeft - 8 * scale,
      midY - halfHeight - 4 * scale,
    );
  }, [dpr, height, whichPath, width]);

  useAnimationFrame(
    (delta) => {
      pendingRef.current += rate * delta;
      let added = 0;
      while (pendingRef.current >= 1 && added < 400) {
        pendingRef.current -= 1;
        dotsRef.current.push({ u: sample(whichPath), v: Math.random() * 2 - 1 });
        added += 1;
      }
      if (dotsRef.current.length > MAX_DOTS) {
        dotsRef.current.splice(0, dotsRef.current.length - MAX_DOTS);
      }
      if (added > 0) setCount((previous) => previous + added);
      draw();
    },
    active && !reducedMotion,
    budget.targetFps,
  );

  // A reader who has asked for reduced motion still gets the finished result.
  useEffect(() => {
    if (!reducedMotion) return;
    dotsRef.current = Array.from({ length: 2200 }, () => ({
      u: sample(whichPath),
      v: Math.random() * 2 - 1,
    }));
    setCount(2200);
    draw();
  }, [draw, reducedMotion, whichPath]);

  useEffect(draw, [draw]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={whichPath}
          onClick={() => setWhichPath((previous) => !previous)}
        >
          Which-path detector {whichPath ? 'on' : 'off'}
        </button>
        <button type="button" className={styles.toggle} onClick={reset}>
          Start again
        </button>
      </div>
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Rate</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Detections per second</span>
            <input
              className={styles.slider}
              type="range"
              min={5}
              max={600}
              step={5}
              value={rate}
              onChange={(event) => setRate(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{count.toLocaleString()} hits</output>
        </div>
      </div>
      <p className={styles.epochDetail}>
        {whichPath ? (
          <>
            With the which-path detector on, the fringes are <strong>gone</strong> and what is left
            is the plain sum of the two single-slit patterns. Nothing was disturbed by being looked
            at in the everyday sense: the detector became <em>correlated</em> with the path, and a
            path that is recorded anywhere cannot also interfere. Switching the detector off
            restores the fringes immediately.
          </>
        ) : (
          <>
            Each dot is one detection. The first dozen look random; the pattern is a property of the{' '}
            <strong>distribution</strong>, not of any single particle, so it only becomes visible
            once thousands have arrived. Nothing is drawn between the source and the screen because
            the theory says nothing about a path — it gives the probability of a detection, and that
            is all.
          </>
        )}
      </p>
    </div>
  );
}
