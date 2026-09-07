import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Einstein's lift: two sealed rooms that behave identically.
 *
 * Both rooms run the same two experiments at once — a dropped ball and a
 * horizontal light pulse — and both produce the same curve, because the code
 * uses one trajectory for both panels. That is the point: there is no
 * experiment inside that separates them.
 *
 * The light bend is exaggerated by an enormous factor. Over a two-metre room on
 * Earth the real deflection is about 10⁻¹⁶ metres, and the "show the room's own
 * motion" toggle exists to make clear that in the accelerating panel nothing
 * has happened to the light at all — the room moved while it crossed.
 */

const CYCLE = 3.6; // seconds per loop

interface Sim {
  t: number;
}

export default function EquivalenceLift({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sim = useRef<Sim>({ t: 0 });
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [showMotion, setShowMotion] = useState(true);
  const [generation, setGeneration] = useState(0);

  const reset = useCallback(() => {
    sim.current = { t: 0 };
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

    const t = sim.current.t % CYCLE;
    const phase = Math.min(t / 2.4, 1); // the drop and the crossing both take 2.4 s

    const roomW = Math.min(w * 0.4, 150 * dpr);
    const roomH = Math.min(h * 0.52, 170 * dpr);
    const roomTop = h * 0.24;

    const drawRoom = (cx: number, accelerating: boolean, title: string, subtitle: string): void => {
      const left = cx - roomW / 2;
      const right = cx + roomW / 2;
      const bottom = roomTop + roomH;

      if (accelerating) {
        // Stars, to say "far from any mass".
        context.fillStyle = 'rgba(226,233,246,0.35)';
        for (let i = 0; i < 14; i += 1) {
          const sx = left - 24 * dpr + ((i * 97) % Math.round(roomW + 48 * dpr));
          const sy = roomTop - 30 * dpr + ((i * 61) % Math.round(roomH + 70 * dpr));
          context.fillRect(sx, sy, 1.6 * dpr, 1.6 * dpr);
        }
      } else {
        // A planet surface below.
        context.fillStyle = 'rgba(74,111,165,0.45)';
        context.beginPath();
        // Narrow enough that the planet stays under the left room; the right
        // room is supposed to be far from any mass.
        context.ellipse(cx, bottom + roomH * 0.62, roomW * 0.72, roomH * 0.5, 0, 0, Math.PI * 2);
        context.fill();
      }

      context.strokeStyle = 'rgba(226,233,246,0.75)';
      context.lineWidth = 2 * dpr;
      context.strokeRect(left, roomTop, roomW, roomH);

      // The dropped ball: identical parabola in both rooms.
      const fall = phase * phase; // constant acceleration, normalised
      const ballY = roomTop + 16 * dpr + fall * (roomH - 32 * dpr);
      context.fillStyle = '#ffd76e';
      context.beginPath();
      context.arc(cx - roomW * 0.28, ballY, 5.5 * dpr, 0, Math.PI * 2);
      context.fill();

      // The light pulse crossing, bending by the same amount in both rooms.
      const emitY = roomTop + 34 * dpr;
      const drop = fall * (roomH * 0.3);
      context.strokeStyle = 'rgba(102,224,212,0.5)';
      context.lineWidth = 1.6 * dpr;
      context.beginPath();
      for (let s = 0; s <= phase; s += 0.02) {
        const px = left + 6 * dpr + s * (roomW - 12 * dpr);
        const py = emitY + s * s * (roomH * 0.3);
        if (s === 0) context.moveTo(px, py);
        else context.lineTo(px, py);
      }
      context.stroke();
      context.fillStyle = '#66e0d4';
      context.beginPath();
      context.arc(
        left + 6 * dpr + phase * (roomW - 12 * dpr),
        emitY + drop,
        4 * dpr,
        0,
        Math.PI * 2,
      );
      context.fill();

      // Where the beam would have landed if it had gone straight.
      context.strokeStyle = 'rgba(102,224,212,0.25)';
      context.setLineDash([3 * dpr, 3 * dpr]);
      context.lineWidth = 1 * dpr;
      context.beginPath();
      context.moveTo(left + 6 * dpr, emitY);
      context.lineTo(right - 6 * dpr, emitY);
      context.stroke();
      context.setLineDash([]);

      // In the accelerating room, show that it is the room that moved.
      if (accelerating && showMotion) {
        context.strokeStyle = 'rgba(169,123,255,0.8)';
        context.lineWidth = 2 * dpr;
        const arrowY = roomTop - 12 * dpr;
        context.beginPath();
        context.moveTo(cx, arrowY + 12 * dpr);
        context.lineTo(cx, arrowY - 10 * dpr);
        context.stroke();
        context.fillStyle = '#a97bff';
        context.beginPath();
        context.moveTo(cx, arrowY - 16 * dpr);
        context.lineTo(cx - 5 * dpr, arrowY - 7 * dpr);
        context.lineTo(cx + 5 * dpr, arrowY - 7 * dpr);
        context.closePath();
        context.fill();
        context.textAlign = 'center';
        context.textBaseline = 'bottom';
        context.font = `${9 * dpr}px system-ui, sans-serif`;
        context.fillStyle = 'rgba(169,123,255,0.95)';
        context.fillText('room accelerates up', cx, arrowY - 20 * dpr);
      }

      context.textAlign = 'center';
      context.textBaseline = 'top';
      context.font = `${10.5 * dpr}px system-ui, sans-serif`;
      context.fillStyle = 'rgba(226,233,246,0.92)';
      context.fillText(title, cx, bottom + 8 * dpr);
      context.font = `${9 * dpr}px system-ui, sans-serif`;
      context.fillStyle = 'rgba(148,162,192,0.9)';
      context.fillText(subtitle, cx, bottom + 22 * dpr);
    };

    drawRoom(w * 0.27, false, 'On a planet', 'gravity, 9.8 m/s²');
    drawRoom(w * 0.73, true, 'In empty space', 'accelerating, 9.8 m/s²');

    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.font = `${11.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = '#ffd76e';
    context.fillText('No experiment inside tells them apart.', w / 2, 10 * dpr);

    context.textBaseline = 'bottom';
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText(
      'light bend exaggerated — really about 10⁻¹⁶ m across a room',
      w / 2,
      h - 8 * dpr,
    );
  }, [width, height, dpr, showMotion]);

  useAnimationFrame(
    (delta) => {
      sim.current.t += delta;
      draw();
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 30),
  );

  useEffect(() => {
    draw();
  }, [draw, generation, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={showMotion}
          onClick={() => setShowMotion((on) => !on)}
        >
          Show the room’s own motion
        </button>
        <button type="button" className={styles.toggle} onClick={reset}>
          Replay
        </button>
      </div>
    </div>
  );
}
