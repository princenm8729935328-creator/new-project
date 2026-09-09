import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Two worldlines, one pair of endpoints, two different elapsed times.
 *
 * The proper time along each path is computed from the Minkowski interval, in
 * units where c = 1: dτ² = dt² − dx². For the straight worldline that is simply
 * the coordinate time; for the bent one it is T√(1 − v²), with v the out-and-back
 * speed. Both readouts come from that, not from a chosen easing.
 *
 * The result is the geometric heart of the twin puzzle, and it is why this
 * platform does not say time is an illusion. Time is what a clock measures, the
 * two clocks disagree, and the disagreement is calculable in advance and has been
 * measured — on aircraft, on satellites, and across a height of one millimetre.
 */

const W_FRACTION = 0.62;

export default function ProperTimePaths({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Speed of the travelling clock, as a fraction of light speed. */
  const [speed, setSpeed] = useState(0.8);
  const progressRef = useRef(0);

  const gamma = 1 / Math.sqrt(1 - speed * speed);
  const travellerFraction = 1 / gamma;

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

    const scale = h / 240;
    const left = 30 * scale;
    const right = w * W_FRACTION;
    const top = 26 * scale;
    const bottom = h - 26 * scale;
    const stayX = left + (right - left) * 0.28;
    /**
     * One pixel scale for both axes, so a 45° line really is a light ray. With
     * separate scales the travelling worldline was drawn outside the light cone
     * at high speed — a picture of faster-than-light travel, which is exactly
     * the thing the diagram must not show.
     */
    const halfTime = (bottom - top) / 2;
    /** Half the coordinate time is spent going out; x = v × t. */
    const turnX = stayX + speed * halfTime;

    context.strokeStyle = 'rgba(148,162,192,0.3)';
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(left, bottom);
    context.lineTo(right, bottom);
    context.moveTo(left, bottom);
    context.lineTo(left, top);
    context.stroke();

    context.font = `${8.5 * scale}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.textAlign = 'left';
    context.fillText('space →', right - 44 * scale, bottom + 12 * scale);
    context.save();
    context.translate(left - 8 * scale, (top + bottom) / 2);
    context.rotate(-Math.PI / 2);
    context.textAlign = 'center';
    context.fillText('time ↑', 0, 0);
    context.restore();

    // Light cone from the starting event, so the speed limit is visible.
    context.strokeStyle = 'rgba(255,214,110,0.35)';
    context.setLineDash([3 * scale, 3 * scale]);
    context.beginPath();
    context.moveTo(stayX, bottom);
    context.lineTo(stayX + 2 * halfTime, top);
    context.moveTo(stayX, bottom);
    context.lineTo(stayX - 2 * halfTime, top);
    context.stroke();
    context.fillStyle = 'rgba(255,214,110,0.75)';
    context.textAlign = 'left';
    context.fillText('light', stayX + halfTime * 0.9, bottom - halfTime * 1.05);
    context.setLineDash([]);

    // The stay-at-home worldline: straight up.
    context.strokeStyle = '#66e0d4';
    context.lineWidth = 2.4 * scale;
    context.beginPath();
    context.moveTo(stayX, bottom);
    context.lineTo(stayX, top);
    context.stroke();

    // The travelling worldline: out and back.
    context.strokeStyle = '#ff8f6e';
    context.beginPath();
    context.moveTo(stayX, bottom);
    context.lineTo(turnX, bottom - halfTime);
    context.lineTo(stayX, top);
    context.stroke();

    // Events.
    context.fillStyle = 'rgba(255,214,110,0.95)';
    for (const [x, y] of [
      [stayX, bottom],
      [stayX, top],
    ] as const) {
      context.beginPath();
      context.arc(x, y, 3.5 * scale, 0, Math.PI * 2);
      context.fill();
    }
    context.textAlign = 'left';
    context.fillStyle = 'rgba(226,233,246,0.85)';
    context.fillText('they part', stayX + 6 * scale, bottom - 6 * scale);
    context.fillText('they meet again', stayX + 6 * scale, top + 12 * scale);

    // Two clock faces, showing accumulated proper time.
    const progress = reducedMotion ? 1 : progressRef.current;
    const clockR = 17 * scale;
    const drawClock = (
      cx: number,
      cy: number,
      turns: number,
      colour: string,
      label: string,
    ): void => {
      context.strokeStyle = 'rgba(148,162,192,0.5)';
      context.lineWidth = 1.4 * scale;
      context.beginPath();
      context.arc(cx, cy, clockR, 0, Math.PI * 2);
      context.stroke();
      context.strokeStyle = colour;
      context.lineWidth = 2.2 * scale;
      const angle = -Math.PI / 2 + turns * Math.PI * 2;
      context.beginPath();
      context.moveTo(cx, cy);
      context.lineTo(cx + clockR * 0.75 * Math.cos(angle), cy + clockR * 0.75 * Math.sin(angle));
      context.stroke();
      context.fillStyle = colour;
      context.textAlign = 'center';
      context.font = `${8 * scale}px system-ui, sans-serif`;
      context.fillText(label, cx, cy + clockR + 12 * scale);
      context.font = `${9.5 * scale}px ui-monospace, monospace`;
      context.fillText(`${(turns * 10).toFixed(2)}`, cx, cy + clockR + 24 * scale);
    };
    const panelX = w * 0.82;
    drawClock(panelX, h * 0.3, progress, '#66e0d4', 'stays');
    drawClock(panelX, h * 0.72, progress * travellerFraction, '#ff8f6e', 'travels');
  }, [dpr, height, reducedMotion, speed, travellerFraction, width]);

  useAnimationFrame(
    (delta) => {
      progressRef.current += delta * 0.25;
      if (progressRef.current > 1) progressRef.current = 0;
      draw();
    },
    active && !reducedMotion,
    budget.targetFps,
  );

  useEffect(draw, [draw]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Speed</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Travelling clock speed, fraction of light speed
            </span>
            <input
              className={styles.slider}
              type="range"
              min={0.05}
              max={0.99}
              step={0.01}
              value={speed}
              onChange={(event) => setSpeed(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{(speed * 100).toFixed(0)}% c</output>
        </div>
      </div>
      <p className={styles.epochDetail}>
        Both clocks start at the same event and end at the same event. The one that stayed put reads{' '}
        <strong>10.00</strong>; the one that travelled reads{' '}
        <strong>{(10 * travellerFraction).toFixed(2)}</strong> — a factor of 1/γ ={' '}
        {travellerFraction.toFixed(3)}. There is no paradox and no illusion: elapsed time is the
        length of a path through spacetime, and the two paths have different lengths. The straight
        one always has the <em>most</em> elapsed time, which is the opposite of what ordinary
        geometry trains you to expect, and comes directly from the minus sign in dτ² = dt² − dx².
      </p>
    </div>
  );
}
