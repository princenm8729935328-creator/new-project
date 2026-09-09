import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * A field, and a particle as a quantised excitation of it.
 *
 * This is honestly a diagram of an idea, not a calculation. No field equations
 * are solved here and nothing is simulated. A quantum field has an operator at
 * every point, which has no picture at all; the sheet is a visual stand-in.
 *
 * What the diagram does encode faithfully is the one structural fact worth
 * taking away: the amplitude cannot be turned up smoothly. It steps. Those
 * steps are what we count as particles, which is why every electron in the
 * Universe is identical — they are excitations of one field, and there is
 * nothing else about them left to differ in.
 */

interface Sheet {
  readonly label: string;
  readonly colour: string;
  readonly base: number;
}

const SHEETS: readonly Sheet[] = [
  { label: 'electron field', colour: '#66e0d4', base: 0.36 },
  { label: 'photon field', colour: '#ffd66e', base: 0.72 },
];

export default function FieldExcitations({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Excitation number in each field. Integers only — that is the whole point. */
  const [quanta, setQuanta] = useState([1, 0]);
  const [coupled, setCoupled] = useState(false);
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
    const phase = phaseRef.current;

    SHEETS.forEach((sheet, index) => {
      const n = quanta[index] ?? 0;
      const baseY = h * sheet.base;
      const amplitude = n === 0 ? 0 : Math.sqrt(n) * h * 0.055;

      // Faint grid lines, so the sheet reads as a surface rather than a curve.
      for (let row = -2; row <= 2; row += 1) {
        context.beginPath();
        context.strokeStyle = row === 0 ? sheet.colour : `${sheet.colour}${row === 0 ? '' : '33'}`;
        context.lineWidth = (row === 0 ? 2 : 1) * scale * 0.8;
        for (let px = 0; px <= w; px += 4) {
          const u = px / w;
          const envelope = Math.exp(-(((u - 0.5) * 5) ** 2));
          const wave = Math.sin(u * Math.PI * 6 - phase * (index === 0 ? 1.2 : 1.8));
          const y = baseY + row * 7 * scale - amplitude * envelope * wave;
          if (px === 0) context.moveTo(px, y);
          else context.lineTo(px, y);
        }
        context.stroke();
      }

      context.font = `${9.5 * scale}px system-ui, sans-serif`;
      context.textAlign = 'left';
      context.fillStyle = sheet.colour;
      context.fillText(
        `${sheet.label}: ${n} ${n === 1 ? 'quantum' : 'quanta'}`,
        8 * scale,
        baseY - 26 * scale,
      );

      // The allowed amplitude steps, drawn as a small ladder.
      for (let step = 0; step <= 3; step += 1) {
        const y = baseY + 24 * scale + step * 5 * scale;
        context.fillStyle = step <= n ? sheet.colour : 'rgba(148,162,192,0.25)';
        context.fillRect(w - 46 * scale, y, 12 * scale, 2 * scale);
      }
      context.fillStyle = 'rgba(148,162,192,0.7)';
      context.font = `${7.5 * scale}px system-ui, sans-serif`;
      context.fillText('allowed steps', w - 46 * scale, baseY + 20 * scale);
    });

    if (coupled) {
      context.strokeStyle = 'rgba(169,123,255,0.85)';
      context.setLineDash([4 * scale, 3 * scale]);
      context.lineWidth = 1.6 * scale;
      context.beginPath();
      context.moveTo(w * 0.5, h * SHEETS[0]!.base + 10 * scale);
      context.lineTo(w * 0.5, h * SHEETS[1]!.base - 10 * scale);
      context.stroke();
      context.setLineDash([]);
      context.fillStyle = 'rgba(169,123,255,0.95)';
      context.font = `${8.5 * scale}px system-ui, sans-serif`;
      context.textAlign = 'center';
      context.fillText('coupling', w * 0.5, (h * (SHEETS[0]!.base + SHEETS[1]!.base)) / 2);
    }
  }, [coupled, dpr, height, quanta, width]);

  useAnimationFrame(
    (delta) => {
      phaseRef.current += delta * 2.2;
      draw();
    },
    active && !reducedMotion,
    budget.targetFps,
  );

  useEffect(draw, [draw]);

  const bump = (index: number, by: number): void =>
    setQuanta((previous) =>
      previous.map((value, i) => (i === index ? Math.max(0, Math.min(3, value + by)) : value)),
    );

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.toggles}>
        <button type="button" className={styles.toggle} onClick={() => bump(0, 1)}>
          + electron
        </button>
        <button type="button" className={styles.toggle} onClick={() => bump(0, -1)}>
          − electron
        </button>
        <button type="button" className={styles.toggle} onClick={() => bump(1, 1)}>
          + photon
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={coupled}
          onClick={() => setCoupled((previous) => !previous)}
        >
          Coupling {coupled ? 'on' : 'off'}
        </button>
      </div>
      <p className={styles.epochDetail}>
        The amplitude cannot be raised smoothly — it steps, and each step is what we count as one
        particle. That is the whole content of calling a particle an excitation of a field.{' '}
        {coupled
          ? 'With the coupling on, an excitation in one field can create one in the other: an electron changing state emits a photon. Interaction is the two fields being able to move each other, and nothing is emitted from a store of photons the electron was carrying.'
          : 'Turn the coupling on to see how one field can raise an excitation in another — which is what "an electron emits a photon" means here.'}{' '}
        The sheets, the heights and the ripples are visual devices: a real quantum field has an
        operator at every point of space, which has no picture. What the picture is faithful to is
        the discreteness, and the fact that identical particles are identical because there is only
        one field.
      </p>
    </div>
  );
}
