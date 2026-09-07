import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Einstein's train, run in both frames.
 *
 * Each frame is animated from its own set of events, related by an actual
 * Lorentz transformation rather than by redrawing the same picture with a
 * caption change. In the platform frame the strikes happen at t = 0 at both
 * ends; transforming those two events into the train frame puts them at
 * t′ = ∓γβL/2c, which is where the train-frame animation starts them. The
 * disagreement in the readout is therefore computed, not asserted.
 *
 * Light travels at the same drawn speed in both frames — the one thing the
 * figure is literally faithful about.
 */

type Frame = 'platform' | 'train';

/** Train rest length, in drawn units; the platform sees it contracted. */
const L0 = 1;
/** Drawn light speed, in units of length per second of animation. */
const C_DRAW = 0.55;
/**
 * The train starts left of centre in the platform frame so that the strikes,
 * the pulses and both observers stay inside the frame for the whole sequence.
 */
const START_CENTRE = -0.45;
/** Animation window per frame: enough for both pulses to land, then a hold. */
const WINDOW: Readonly<Record<Frame, { from: number; to: number }>> = {
  platform: { from: 0, to: 2.0 },
  train: { from: -0.6, to: 1.9 },
};
/** How long the finished picture is held before the sequence replays. */
const HOLD = 2.2;

interface Sim {
  t: number;
  /** Seconds spent on the held final frame. */
  held: number;
}

export default function SimultaneityTrain({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sim = useRef<Sim>({ t: 0, held: 0 });
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [frame, setFrame] = useState<Frame>('platform');
  const [beta, setBeta] = useState(0.5);
  const [generation, setGeneration] = useState(0);
  const gamma = 1 / Math.sqrt(1 - beta * beta);

  const reset = useCallback(() => {
    sim.current = { t: WINDOW[frame].from, held: 0 };
    setGeneration((value) => value + 1);
  }, [frame]);

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

    const unit = w / 2.6; // pixels per drawn unit of length
    const cx = w / 2;
    const railY = h * 0.56;
    const t = sim.current.t;

    // Platform-frame train length is contracted; train-frame length is L0.
    const platformLength = L0 / gamma;
    const trainLength = frame === 'platform' ? platformLength : L0;

    // Event times and positions in the frame being drawn.
    let frontStrikeTime: number;
    let rearStrikeTime: number;
    let trainCentre: number;
    let observerX: number;
    let platformObserverX: number;

    if (frame === 'platform') {
      frontStrikeTime = 0;
      rearStrikeTime = 0;
      trainCentre = START_CENTRE + beta * C_DRAW * t;
      observerX = trainCentre; // the traveller, carried along
      platformObserverX = START_CENTRE;
    } else {
      // Lorentz-transformed strike times: t′ = γ(t − βx/c) with t = 0.
      frontStrikeTime = (-gamma * beta * (platformLength / 2)) / C_DRAW;
      rearStrikeTime = (gamma * beta * (platformLength / 2)) / C_DRAW;
      trainCentre = 0; // the train is at rest here
      observerX = 0;
      platformObserverX = -beta * C_DRAW * t;
    }

    const rearX = trainCentre - trainLength / 2;
    // Strike positions are fixed in each frame once they have happened: they
    // are the two ends of the train at the moment the strikes landed.
    const strikeCentre = frame === 'platform' ? START_CENTRE : 0;
    const frontStrikeX = strikeCentre + trainLength / 2;
    const rearStrikeX = strikeCentre - trainLength / 2;

    const toPx = (u: number): number => cx + u * unit;

    // ---- Rail -------------------------------------------------------------
    context.strokeStyle = 'rgba(148,162,192,0.45)';
    context.lineWidth = 2 * dpr;
    context.beginPath();
    context.moveTo(0, railY + 22 * dpr);
    context.lineTo(w, railY + 22 * dpr);
    context.stroke();

    // ---- Train ------------------------------------------------------------
    const carHeight = 34 * dpr;
    context.fillStyle = 'rgba(102,224,212,0.18)';
    context.strokeStyle = 'rgba(102,224,212,0.8)';
    context.lineWidth = 1.8 * dpr;
    context.beginPath();
    context.roundRect(
      toPx(rearX),
      railY + 22 * dpr - carHeight,
      trainLength * unit,
      carHeight,
      6 * dpr,
    );
    context.fill();
    context.stroke();

    // ---- Lightning strikes and their pulses --------------------------------
    const drawStrike = (strikeX: number, strikeTime: number, label: string): void => {
      const px = toPx(strikeX);
      if (t < strikeTime) {
        context.strokeStyle = 'rgba(148,162,192,0.3)';
        context.setLineDash([3 * dpr, 3 * dpr]);
        context.lineWidth = 1.2 * dpr;
        context.beginPath();
        context.moveTo(px, railY - 46 * dpr);
        context.lineTo(px, railY + 22 * dpr);
        context.stroke();
        context.setLineDash([]);
        return;
      }
      // The bolt itself, fading.
      const age = t - strikeTime;
      if (age < 0.5) {
        context.strokeStyle = `rgba(255,214,110,${(1 - age / 0.5).toFixed(2)})`;
        context.lineWidth = 3 * dpr;
        context.beginPath();
        context.moveTo(px, railY - 52 * dpr);
        context.lineTo(px - 6 * dpr, railY - 26 * dpr);
        context.lineTo(px + 4 * dpr, railY - 20 * dpr);
        context.lineTo(px, railY + 22 * dpr);
        context.stroke();
      }
      // Two pulses, one each way, at the drawn light speed. Each is drawn with
      // the ground it has covered since the strike, because the argument is
      // about equal distances rather than about where the dots happen to be.
      const spread = age * C_DRAW;
      for (const direction of [-1, 1]) {
        const pulseX = toPx(strikeX + direction * spread);
        context.strokeStyle = 'rgba(255,214,110,0.4)';
        context.lineWidth = 2 * dpr;
        context.beginPath();
        context.moveTo(px, railY);
        context.lineTo(pulseX, railY);
        context.stroke();
        context.fillStyle = '#ffd76e';
        context.beginPath();
        context.arc(pulseX, railY, 5 * dpr, 0, Math.PI * 2);
        context.fill();
      }
      // A permanent tick where the strike happened.
      context.strokeStyle = 'rgba(255,214,110,0.35)';
      context.lineWidth = 1.2 * dpr;
      context.beginPath();
      context.moveTo(px, railY - 14 * dpr);
      context.lineTo(px, railY + 14 * dpr);
      context.stroke();
      context.textAlign = 'center';
      context.textBaseline = 'bottom';
      context.font = `${9 * dpr}px system-ui, sans-serif`;
      context.fillStyle = 'rgba(255,214,110,0.9)';
      context.fillText(label, px, railY - 56 * dpr);
    };

    drawStrike(rearStrikeX, rearStrikeTime, 'rear');
    drawStrike(frontStrikeX, frontStrikeTime, 'front');

    // ---- Observers ---------------------------------------------------------
    const drawObserver = (u: number, colour: string, label: string, dy: number): void => {
      const px = toPx(u);
      context.fillStyle = colour;
      context.beginPath();
      context.arc(px, railY + dy, 5 * dpr, 0, Math.PI * 2);
      context.fill();
      context.textAlign = 'center';
      context.textBaseline = 'top';
      context.font = `${9 * dpr}px system-ui, sans-serif`;
      context.fillText(label, px, railY + dy + 8 * dpr);
    };
    drawObserver(observerX, '#66e0d4', 'traveller', -4 * dpr);
    drawObserver(platformObserverX, '#8fb8ff', 'platform', 34 * dpr);

    // ---- Arrival bookkeeping ------------------------------------------------
    // Where each pulse is, and whether it has reached the observer of interest.
    const arrival = (strikeX: number, strikeTime: number, observerAt: (time: number) => number) => {
      // Solve |observer(t) − strikeX| = c(t − strikeTime) numerically enough for
      // a readout: step forward from the strike until the pulse overtakes.
      let time = strikeTime;
      for (let i = 0; i < 4000; i += 1) {
        const spread = (time - strikeTime) * C_DRAW;
        if (Math.abs(observerAt(time) - strikeX) <= spread) return time;
        time += 0.004;
      }
      return Infinity;
    };
    const travellerAt = (time: number): number =>
      frame === 'platform' ? START_CENTRE + beta * C_DRAW * time : 0;
    const frontArrival = arrival(frontStrikeX, frontStrikeTime, travellerAt);
    const rearArrival = arrival(rearStrikeX, rearStrikeTime, travellerAt);

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = frame === 'platform' ? '#8fb8ff' : '#66e0d4';
    context.fillText(frame === 'platform' ? 'Platform frame' : 'Train frame', 10 * dpr, 10 * dpr);
    context.font = `${10 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(226,233,246,0.9)';
    context.fillText(
      frame === 'platform'
        ? 'Both bolts strike at the same instant.'
        : 'The front bolt strikes first, by a computed margin.',
      10 * dpr,
      28 * dpr,
    );

    context.font = `${10 * dpr}px ui-monospace, monospace`;
    const seenFront = t >= frontArrival;
    const seenRear = t >= rearArrival;
    context.fillStyle = seenFront && seenRear ? '#ffd76e' : 'rgba(148,162,192,0.95)';
    context.fillText(
      seenFront && seenRear
        ? `traveller saw the front ${(rearArrival - frontArrival).toFixed(2)}s earlier`
        : `traveller: front ${seenFront ? 'seen' : 'waiting'} · rear ${seenRear ? 'seen' : 'waiting'}`,
      10 * dpr,
      46 * dpr,
    );

    // Flash the traveller as each pulse lands.
    for (const arrivalTime of [frontArrival, rearArrival]) {
      const since = t - arrivalTime;
      if (since >= 0 && since < 0.6) {
        context.strokeStyle = `rgba(255,214,110,${(1 - since / 0.6).toFixed(2)})`;
        context.lineWidth = 2 * dpr;
        context.beginPath();
        context.arc(toPx(observerX), railY - 4 * dpr, (8 + since * 40) * dpr, 0, Math.PI * 2);
        context.stroke();
      }
    }

    context.textAlign = 'center';
    context.textBaseline = 'bottom';
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText('light travels at the same drawn speed in both frames', w / 2, h - 8 * dpr);
  }, [width, height, dpr, frame, beta, gamma]);

  useAnimationFrame(
    (delta) => {
      const state = sim.current;
      const window = WINDOW[frame];
      if (state.t < window.to) {
        // Advance until both pulses have landed, then freeze on that picture —
        // which is the frame worth looking at — before replaying.
        state.t = Math.min(window.to, state.t + delta * 0.55);
        state.held = 0;
      } else {
        state.held += delta;
        if (state.held > HOLD) {
          state.t = window.from;
          state.held = 0;
        }
      }
      draw();
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 40),
  );

  useEffect(() => {
    sim.current.t = WINDOW[frame].from;
    sim.current.held = 0;
    draw();
  }, [draw, generation, frame, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Speed</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Train speed as a fraction of c</span>
            <input
              className={styles.slider}
              type="range"
              min={0.2}
              max={0.9}
              step={0.01}
              value={beta}
              onChange={(event) => {
                setBeta(Number(event.target.value));
                reset();
              }}
            />
          </label>
          <output className={styles.value}>{beta.toFixed(2)} c</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={frame === 'platform'}
          onClick={() => setFrame('platform')}
        >
          Platform frame
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={frame === 'train'}
          onClick={() => setFrame('train')}
        >
          Train frame
        </button>
        <button type="button" className={styles.toggle} onClick={reset}>
          Replay
        </button>
      </div>
    </div>
  );
}
