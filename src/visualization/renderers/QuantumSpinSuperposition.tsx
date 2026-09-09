import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Spin measured along an adjustable axis, with the counts checked against cos²(θ/2).
 *
 * Two things this figure is careful about.
 *
 * The result is always one of exactly two values, however the analyser is
 * turned. Tilt it by thirty degrees and you do not get a result thirty degrees
 * along — you get up or down, in the ratio the Born rule gives. That is the
 * discreteness, and it is what makes "the particle secretly had a direction and
 * we just found out" hard to sustain.
 *
 * A superposition is drawn as an arrow with a definite direction that is simply
 * not the measurement axis — never as a particle that is secretly up or down.
 * The second analyser is there to show the difference is testable: after a
 * measurement along one axis, a measurement along a perpendicular axis splits
 * fifty-fifty again, which a "we merely revealed a pre-existing value" account
 * has to work very hard to explain.
 */

const DEG = Math.PI / 180;

export default function QuantumSpinSuperposition({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Analyser angle relative to the prepared state direction, in degrees. */
  const [angle, setAngle] = useState(60);
  const [second, setSecond] = useState(false);
  const [counts, setCounts] = useState({ up: 0, down: 0 });

  const pendingRef = useRef(0);
  const angleRef = useRef(angle);
  angleRef.current = angle;

  const reset = useCallback(() => setCounts({ up: 0, down: 0 }), []);
  useEffect(reset, [reset, angle]);

  const probability = Math.cos((angle * DEG) / 2) ** 2;
  const total = counts.up + counts.down;
  const measured = total > 0 ? counts.up / total : 0;

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

    const scale = h / 250;
    context.font = `${9 * scale}px system-ui, sans-serif`;

    // ---- Left: the state as a direction, and the measurement axis -----------
    const bx = w * 0.17;
    const by = h * 0.46;
    const br = Math.min(w * 0.13, h * 0.3);

    context.strokeStyle = 'rgba(148,162,192,0.3)';
    context.lineWidth = 1;
    context.beginPath();
    context.arc(bx, by, br, 0, Math.PI * 2);
    context.stroke();

    context.fillStyle = 'rgba(148,162,192,0.7)';
    context.textAlign = 'center';
    context.fillText('|↑⟩', bx, by - br - 4 * scale);
    context.fillText('|↓⟩', bx, by + br + 10 * scale);
    context.fillText('prepared state', bx, by + br + 36 * scale);

    // The prepared state: a definite direction, drawn straight up.
    context.strokeStyle = '#66e0d4';
    context.lineWidth = 2.4 * scale;
    context.beginPath();
    context.moveTo(bx, by);
    context.lineTo(bx, by - br);
    context.stroke();

    // The analyser axis, tilted by θ.
    const a = angleRef.current * DEG;
    context.strokeStyle = '#ffd66e';
    context.setLineDash([4 * scale, 3 * scale]);
    context.lineWidth = 1.6 * scale;
    context.beginPath();
    context.moveTo(bx - br * Math.sin(a), by + br * Math.cos(a));
    context.lineTo(bx + br * Math.sin(a), by - br * Math.cos(a));
    context.stroke();
    context.setLineDash([]);
    context.fillStyle = '#ffd66e';
    context.fillText(`θ = ${Math.round(angleRef.current)}°`, bx, by + br + 24 * scale);

    // ---- Right: the analyser and its two — only two — output spots ----------
    const ax = w * 0.52;
    const upY = h * 0.28;
    const downY = h * 0.68;
    const outX = w * 0.86;

    context.strokeStyle = 'rgba(148,162,192,0.5)';
    context.lineWidth = 1.4 * scale;
    context.beginPath();
    context.moveTo(bx + br + 8 * scale, by);
    context.lineTo(ax, by);
    context.stroke();

    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.textAlign = 'left';
    context.fillText('atoms →', bx + br + 14 * scale, by - 6 * scale);
    context.fillText('analyser', ax - 12 * scale, by - 24 * scale);
    context.strokeStyle = 'rgba(169,123,255,0.9)';
    context.lineWidth = 2 * scale;
    context.strokeRect(ax - 6 * scale, by - 20 * scale, 12 * scale, 40 * scale);

    context.strokeStyle = 'rgba(148,162,192,0.35)';
    context.lineWidth = 1.2 * scale;
    context.beginPath();
    context.moveTo(ax + 6 * scale, by);
    context.lineTo(outX, upY);
    context.moveTo(ax + 6 * scale, by);
    context.lineTo(outX, downY);
    context.stroke();

    // Counts as bars. Only two landing spots exist, at any angle.
    const barMax = w * 0.11;
    const fractionUp = total > 0 ? counts.up / total : probability;
    context.fillStyle = '#66e0d4';
    context.fillRect(outX, upY - 9 * scale, barMax * fractionUp, 18 * scale);
    context.fillStyle = '#ff8f6e';
    context.fillRect(outX, downY - 9 * scale, barMax * (1 - fractionUp), 18 * scale);
    context.strokeStyle = 'rgba(148,162,192,0.4)';
    context.lineWidth = 1;
    context.strokeRect(outX, upY - 9 * scale, barMax, 18 * scale);
    context.strokeRect(outX, downY - 9 * scale, barMax, 18 * scale);

    context.fillStyle = 'rgba(226,233,246,0.9)';
    context.fillText('+ (up)', outX, upY - 14 * scale);
    context.fillText('− (down)', outX, downY + 22 * scale);

    if (second) {
      context.fillStyle = 'rgba(255,214,110,0.95)';
      context.textAlign = 'left';
      context.fillText('2nd analyser at 90°: splits 50/50 again', w * 0.3, h * 0.94);
    }
  }, [counts.up, dpr, height, probability, second, total, width]);

  useAnimationFrame(
    (delta) => {
      pendingRef.current += 90 * delta;
      let up = 0;
      let down = 0;
      while (pendingRef.current >= 1) {
        pendingRef.current -= 1;
        if (Math.random() < Math.cos((angleRef.current * DEG) / 2) ** 2) up += 1;
        else down += 1;
      }
      if (up + down > 0) {
        setCounts((previous) => ({ up: previous.up + up, down: previous.down + down }));
      }
      draw();
    },
    active && !reducedMotion,
    budget.targetFps,
  );

  // Reduced motion: give the finished statistics rather than an animation.
  useEffect(() => {
    if (!reducedMotion) return;
    let up = 0;
    for (let i = 0; i < 2000; i += 1) {
      if (Math.random() < probability) up += 1;
    }
    setCounts({ up, down: 2000 - up });
  }, [probability, reducedMotion]);

  useEffect(draw, [draw]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={second}
          onClick={() => setSecond((previous) => !previous)}
        >
          Second analyser at 90° {second ? 'on' : 'off'}
        </button>
        <button type="button" className={styles.toggle} onClick={reset}>
          Clear counts
        </button>
      </div>
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Angle θ</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Analyser angle in degrees</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={180}
              step={1}
              value={angle}
              onChange={(event) => setAngle(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{angle}°</output>
        </div>
      </div>
      <p className={styles.epochDetail}>
        Predicted fraction up: <strong>cos²(θ/2) = {probability.toFixed(3)}</strong>. Measured so
        far: <strong>{total > 0 ? measured.toFixed(3) : '—'}</strong> from {total.toLocaleString()}{' '}
        atoms.{' '}
        {second
          ? 'After the first measurement, a second analyser turned ninety degrees splits the beam evenly again — so the first measurement did not simply reveal a value the atom was carrying all along.'
          : 'Whatever the angle, the result is always one of exactly two spots. There is no intermediate landing place, which is the discreteness that gives spin its name.'}{' '}
        The arrow on the left has a definite direction; it is a superposition of up and down only
        relative to the axis you chose to measure along.
      </p>
    </div>
  );
}
