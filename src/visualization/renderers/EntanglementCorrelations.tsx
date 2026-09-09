import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Two detectors, correlated outcomes, and nothing to read locally.
 *
 * The figure is built to make one thing checkable rather than asserted: turn
 * either angle dial and watch the local column. It does not move. The fraction
 * of plus results at each detector stays at one half no matter what the other
 * detector is set to — and if nothing in your own data changes when the distant
 * setting changes, there is nothing you could read as a message.
 *
 * That is the whole no-signalling argument, and it is why entanglement does not
 * conflict with relativity even though the correlations are stronger than any
 * local explanation allows.
 *
 * Outcomes are sampled from the exact singlet prediction: the pair is
 * anti-correlated with probability sin²((a − b)/2), giving a correlation of
 * −cos(a − b).
 */

const DEG = Math.PI / 180;

interface Tally {
  aPlus: number;
  bPlus: number;
  same: number;
  total: number;
}

const EMPTY: Tally = { aPlus: 0, bPlus: 0, same: 0, total: 0 };

export default function EntanglementCorrelations({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [angleA, setAngleA] = useState(0);
  const [angleB, setAngleB] = useState(0);
  const [tally, setTally] = useState<Tally>(EMPTY);
  const recentRef = useRef<Array<{ a: boolean; b: boolean }>>([]);
  const pendingRef = useRef(0);
  const anglesRef = useRef({ a: angleA, b: angleB });
  anglesRef.current = { a: angleA, b: angleB };

  const reset = useCallback(() => {
    setTally(EMPTY);
    recentRef.current = [];
  }, []);
  useEffect(reset, [reset, angleA, angleB]);

  const predicted = -Math.cos((angleA - angleB) * DEG);
  const measured = tally.total > 0 ? (2 * tally.same) / tally.total - 1 : 0;
  const localA = tally.total > 0 ? tally.aPlus / tally.total : 0.5;
  const localB = tally.total > 0 ? tally.bPlus / tally.total : 0.5;

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
    context.font = `${9.5 * scale}px system-ui, sans-serif`;
    const midY = h * 0.3;

    // Source in the middle, detectors far apart.
    context.fillStyle = 'rgba(169,123,255,0.9)';
    context.beginPath();
    context.arc(w / 2, midY, 5 * scale, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = 'rgba(148,162,192,0.35)';
    context.lineWidth = 1.2 * scale;
    context.beginPath();
    context.moveTo(w * 0.2, midY);
    context.lineTo(w * 0.8, midY);
    context.stroke();

    context.textAlign = 'center';
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText('entangled pair source', w / 2, midY + 18 * scale);

    const drawDetector = (cx: number, angle: number, label: string): void => {
      const r = 15 * scale;
      context.strokeStyle = 'rgba(148,162,192,0.6)';
      context.lineWidth = 1.4 * scale;
      context.beginPath();
      context.arc(cx, midY, r, 0, Math.PI * 2);
      context.stroke();
      context.strokeStyle = '#ffd66e';
      context.lineWidth = 2.2 * scale;
      context.beginPath();
      context.moveTo(cx - r * Math.cos(angle * DEG), midY + r * Math.sin(angle * DEG));
      context.lineTo(cx + r * Math.cos(angle * DEG), midY - r * Math.sin(angle * DEG));
      context.stroke();
      context.fillStyle = 'rgba(226,233,246,0.9)';
      context.fillText(label, cx, midY - r - 8 * scale);
    };
    drawDetector(w * 0.16, angleA, `A at ${Math.round(angleA)}°`);
    drawDetector(w * 0.84, angleB, `B at ${Math.round(angleB)}°`);

    // A short window of recent outcomes, as paired rows.
    const rows = recentRef.current.slice(-16);
    context.font = `${11 * scale}px ui-monospace, monospace`;
    rows.forEach((row, index) => {
      const y = h * 0.52 + index * 6.5 * scale;
      context.fillStyle = row.a ? '#66e0d4' : '#ff8f6e';
      context.textAlign = 'right';
      context.fillText(row.a ? '+' : '−', w * 0.46, y);
      context.fillStyle = row.b ? '#66e0d4' : '#ff8f6e';
      context.textAlign = 'left';
      context.fillText(row.b ? '+' : '−', w * 0.54, y);
    });
    context.font = `${9 * scale}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.textAlign = 'right';
    context.fillText('A', w * 0.46, h * 0.46);
    context.textAlign = 'left';
    context.fillText('B', w * 0.54, h * 0.46);
  }, [angleA, angleB, dpr, height, width]);

  useAnimationFrame(
    (delta) => {
      pendingRef.current += 70 * delta;
      let aPlus = 0;
      let bPlus = 0;
      let same = 0;
      let total = 0;
      while (pendingRef.current >= 1) {
        pendingRef.current -= 1;
        // A's own result is a fair coin, whatever either angle is set to.
        const a = Math.random() < 0.5;
        const difference = (anglesRef.current.a - anglesRef.current.b) * DEG;
        // Singlet state: the two agree with probability sin²(Δ/2).
        const agree = Math.random() < Math.sin(difference / 2) ** 2;
        const b = agree ? a : !a;
        if (a) aPlus += 1;
        if (b) bPlus += 1;
        if (a === b) same += 1;
        total += 1;
        recentRef.current.push({ a, b });
      }
      if (recentRef.current.length > 40) {
        recentRef.current.splice(0, recentRef.current.length - 40);
      }
      if (total > 0) {
        setTally((previous) => ({
          aPlus: previous.aPlus + aPlus,
          bPlus: previous.bPlus + bPlus,
          same: previous.same + same,
          total: previous.total + total,
        }));
      }
      draw();
    },
    active && !reducedMotion,
    budget.targetFps,
  );

  useEffect(() => {
    if (!reducedMotion) return;
    let aPlus = 0;
    let bPlus = 0;
    let same = 0;
    const difference = (angleA - angleB) * DEG;
    for (let i = 0; i < 3000; i += 1) {
      const a = Math.random() < 0.5;
      const b = Math.random() < Math.sin(difference / 2) ** 2 ? a : !a;
      if (a) aPlus += 1;
      if (b) bPlus += 1;
      if (a === b) same += 1;
    }
    setTally({ aPlus, bPlus, same, total: 3000 });
  }, [angleA, angleB, reducedMotion]);

  useEffect(draw, [draw]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>A angle</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Detector A angle</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={180}
              step={5}
              value={angleA}
              onChange={(event) => setAngleA(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>A: {(localA * 100).toFixed(1)}% +</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>B angle</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Detector B angle</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={180}
              step={5}
              value={angleB}
              onChange={(event) => setAngleB(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>B: {(localB * 100).toFixed(1)}% +</output>
        </div>
      </div>
      <p className={styles.epochDetail}>
        Correlation between the two columns:{' '}
        <strong>{tally.total > 0 ? measured.toFixed(3) : '—'}</strong>, against the quantum
        prediction −cos(a − b) = <strong>{predicted.toFixed(3)}</strong>, from{' '}
        {tally.total.toLocaleString()} pairs. Now watch the two local readouts while you move either
        dial: both stay at <strong>50%</strong>, always. Alice’s own record is a fair coin whatever
        Bob does, so there is <strong>nothing in it for her to read</strong> — no message, at any
        speed. The correlation only appears when the two lists are brought together and compared,
        and bringing them together needs an ordinary signal travelling no faster than light.
      </p>
    </div>
  );
}
