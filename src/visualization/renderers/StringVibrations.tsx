import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Standing waves on a loop — an analogy, labelled as one.
 *
 * The modes drawn here are the ordinary classical modes of a closed loop and are
 * computed correctly. They are not a string theory calculation. A real string in
 * the theory is a quantised relativistic object in ten dimensions, six of them
 * compactified at a scale no one can draw, and its spectrum is not obtained by
 * looking at a picture like this one.
 *
 * What the analogy is good for is the single starting idea: one kind of object,
 * many vibrational modes, and the modes appearing to us as different particles.
 * What the analogy must not be allowed to do is suggest the theory has been
 * confirmed. It has not been, by anything.
 */

export default function StringVibrations({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [mode, setMode] = useState(2);
  const phaseRef = useRef(0);

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
    const cx = w * 0.36;
    const cy = h * 0.48;
    const base = Math.min(w * 0.2, h * 0.32);
    const phase = phaseRef.current;
    const breathe = reducedMotion ? 0.6 : Math.cos(phase * 2.4);

    // The loop, with a standing wave of the selected mode number on it.
    context.strokeStyle = '#a97bff';
    context.lineWidth = 2.2 * scale;
    context.beginPath();
    for (let i = 0; i <= 240; i += 1) {
      const t = (i / 240) * Math.PI * 2;
      const r = base * (1 + 0.22 * breathe * Math.cos(mode * t));
      const x = cx + r * Math.cos(t);
      const y = cy + r * Math.sin(t);
      if (i === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.closePath();
    context.stroke();

    // The undisturbed loop, for reference.
    context.strokeStyle = 'rgba(148,162,192,0.25)';
    context.lineWidth = 1;
    context.setLineDash([3 * scale, 3 * scale]);
    context.beginPath();
    context.arc(cx, cy, base, 0, Math.PI * 2);
    context.stroke();
    context.setLineDash([]);

    context.font = `${9 * scale}px system-ui, sans-serif`;
    context.textAlign = 'center';
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText(`mode ${mode}`, cx, cy + base + 20 * scale);

    // The frequency ladder, which is what the analogy is actually about.
    const ladderX = w * 0.68;
    context.textAlign = 'left';
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText('mode frequencies', ladderX, h * 0.2);
    for (let n = 1; n <= 6; n += 1) {
      const y = h * 0.28 + (n - 1) * h * 0.1;
      const selected = n === mode;
      context.strokeStyle = selected ? '#a97bff' : 'rgba(148,162,192,0.35)';
      context.lineWidth = (selected ? 2.4 : 1.2) * scale;
      context.beginPath();
      context.moveTo(ladderX, y);
      context.lineTo(ladderX + w * 0.14, y);
      context.stroke();
      context.fillStyle = selected ? '#a97bff' : 'rgba(148,162,192,0.7)';
      context.font = `${8 * scale}px ui-monospace, monospace`;
      context.fillText(`${n}f₀`, ladderX + w * 0.16, y + 3 * scale);
    }
  }, [dpr, height, mode, reducedMotion, width]);

  useAnimationFrame(
    (delta) => {
      phaseRef.current += delta;
      draw();
    },
    active && !reducedMotion,
    budget.targetFps,
  );

  useEffect(draw, [draw]);

  return (
    // Flow layout: the caption under this figure is long enough that, in the
    // fixed-aspect stage, it left the canvas no height at all on a phone.
    <div className={styles.chartStack}>
      <canvas ref={canvasRef} className={styles.flowCanvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Mode</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Vibrational mode number</span>
            <input
              className={styles.slider}
              type="range"
              min={1}
              max={6}
              step={1}
              value={mode}
              onChange={(event) => setMode(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{mode}f₀</output>
        </div>
      </div>
      <p className={styles.epochDetail}>
        A violin string makes many notes from one string, because it supports many standing waves.
        String theory’s starting proposal is analogous: one kind of extended object, whose
        vibrational modes appear to us as different particle species — and one of those modes has
        the properties of a graviton, which is the reason the idea attracted so much attention.{' '}
        <strong>This is an analogy, and only that.</strong> A real string in the theory is a
        quantised relativistic object in ten dimensions, six of them curled up at around 10⁻³⁵
        metres — roughly 10¹⁵ times smaller than anything the Large Hadron Collider can resolve.
        String theory is a serious mathematical research programme with real results inside it. It
        has produced no confirmed experimental prediction, no experiment has distinguished it from
        alternatives, and it is not established physics.
      </p>
    </div>
  );
}
