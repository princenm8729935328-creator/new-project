import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * F = ma, with the force and the mass in the reader's hands.
 *
 * The lower cart is a fixed reference — 10 N on 2 kg, so 5 m/s² — and never
 * changes. Everything the reader does happens to the upper cart, and the race
 * against an unchanging opponent is what makes the two proportionalities
 * legible: force up, it pulls ahead; mass up, it drops behind; both doubled and
 * the race is a dead heat again, because only the ratio matters.
 *
 * No friction, no drag: a = F/m exactly, integrated with constant acceleration.
 */

const TRACK = 12; // m
const REFERENCE_FORCE = 10; // N
const REFERENCE_MASS = 2; // kg
const RESTART_DELAY = 1.4; // s

interface Sim {
  t: number;
  finishedFor: number;
}

export default function SecondLawLab({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sim = useRef<Sim>({ t: 0, finishedFor: 0 });
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [force, setForce] = useState(10);
  const [mass, setMass] = useState(4);
  const [generation, setGeneration] = useState(0);

  const restart = useCallback(() => {
    sim.current = { t: 0, finishedFor: 0 };
    setGeneration((value) => value + 1);
  }, []);

  const accelerationA = force / mass;
  const accelerationB = REFERENCE_FORCE / REFERENCE_MASS;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || width === 0 || height === 0) return;

    // The frame measures the whole stage, but this canvas occupies only the
    // part above the controls. Sizing the backing store from the stage gives it
    // a different aspect ratio from its CSS box, which stretches every circle
    // into an ellipse — so measure the canvas itself and fall back to the
    // stage only before layout has happened.
    const cssWidth = canvas.clientWidth || width;
    const cssHeight = canvas.clientHeight || height;
    const w = Math.round(cssWidth * dpr);
    const h = Math.round(cssHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    context.clearRect(0, 0, w, h);

    const margin = 14 * dpr;
    const usable = w - margin * 2;
    const t = sim.current.t;

    const lane = (
      y: number,
      acceleration: number,
      colour: string,
      title: string,
      detail: string,
      cartMass: number,
      cartForce: number,
    ): void => {
      const distance = Math.min(TRACK, 0.5 * acceleration * t * t);
      const speed = Math.min(acceleration * t, Math.sqrt(2 * acceleration * TRACK));

      context.strokeStyle = 'rgba(148,162,192,0.35)';
      context.lineWidth = 1.5 * dpr;
      context.beginPath();
      context.moveTo(margin, y + 16 * dpr);
      context.lineTo(w - margin, y + 16 * dpr);
      context.stroke();

      // Cart width tracks its mass, so "heavier" is visible as well as slower.
      const cartW = (16 + Math.min(26, cartMass * 2.2)) * dpr;
      const cartH = 15 * dpr;
      const x = margin + (distance / TRACK) * (usable - cartW);
      context.fillStyle = colour;
      context.fillRect(x, y + 16 * dpr - cartH, cartW, cartH);

      // The driving force, drawn on the same scale in both lanes so the two
      // arrows can be compared directly.
      const arrowLength = (cartForce / 40) * 46 * dpr;
      const arrowY = y + 16 * dpr - cartH / 2;
      context.strokeStyle = colour;
      context.lineWidth = 2.4 * dpr;
      context.beginPath();
      context.moveTo(x - arrowLength, arrowY);
      context.lineTo(x - 5 * dpr, arrowY);
      context.stroke();
      context.fillStyle = colour;
      context.beginPath();
      context.moveTo(x, arrowY);
      context.lineTo(x - 8 * dpr, arrowY - 5 * dpr);
      context.lineTo(x - 8 * dpr, arrowY + 5 * dpr);
      context.closePath();
      context.fill();

      context.textAlign = 'left';
      context.textBaseline = 'top';
      context.font = `${10.5 * dpr}px system-ui, sans-serif`;
      context.fillStyle = colour;
      context.fillText(title, margin, y - 16 * dpr);
      // 9.5px and an extra margin: at 10px the longest readout was clipped by
      // the right edge of the stage on a 390px phone.
      context.font = `${9.5 * dpr}px ui-monospace, monospace`;
      context.fillStyle = 'rgba(148,162,192,0.95)';
      context.textAlign = 'right';
      context.fillText(`${detail} · ${speed.toFixed(1)} m/s`, w - margin * 1.4, y - 15 * dpr);
    };

    lane(
      h * 0.32,
      accelerationA,
      '#ffd76e',
      'Your cart',
      `${force.toFixed(0)} N ÷ ${mass.toFixed(1)} kg = ${accelerationA.toFixed(2)} m/s²`,
      mass,
      force,
    );
    lane(
      h * 0.66,
      accelerationB,
      '#7fc7ff',
      'Reference cart',
      '10 N ÷ 2 kg = 5.00 m/s²',
      REFERENCE_MASS,
      REFERENCE_FORCE,
    );

    // Finish line.
    context.strokeStyle = 'rgba(226,233,246,0.3)';
    context.setLineDash([4 * dpr, 4 * dpr]);
    context.lineWidth = 1 * dpr;
    context.beginPath();
    context.moveTo(w - margin, h * 0.18);
    context.lineTo(w - margin, h * 0.74);
    context.stroke();
    context.setLineDash([]);

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    const equal = Math.abs(accelerationA - accelerationB) < 0.02;
    context.fillStyle = equal ? '#4fe0c0' : 'rgba(226,233,246,0.9)';
    context.fillText(
      equal
        ? 'Same acceleration — different force, different mass, same ratio.'
        : accelerationA > accelerationB
          ? `Your cart accelerates ${(accelerationA / accelerationB).toFixed(2)}× faster.`
          : `Your cart accelerates ${(accelerationB / accelerationA).toFixed(2)}× slower.`,
      14 * dpr,
      h - 26 * dpr,
    );
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText(`${TRACK} m of frictionless track`, 14 * dpr, h - 12 * dpr);
  }, [width, height, dpr, force, mass, accelerationA, accelerationB]);

  useAnimationFrame(
    (delta) => {
      const state = sim.current;
      const slowest = Math.min(accelerationA, accelerationB);
      const finishTime = Math.sqrt((2 * TRACK) / slowest);
      if (state.t < finishTime) {
        state.t += delta;
      } else {
        state.finishedFor += delta;
        if (state.finishedFor > RESTART_DELAY) sim.current = { t: 0, finishedFor: 0 };
      }
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
          <span className={styles.controlName}>Force</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Force applied to your cart, newtons</span>
            <input
              className={styles.slider}
              type="range"
              min={2}
              max={40}
              step={1}
              value={force}
              onChange={(event) => {
                setForce(Number(event.target.value));
                restart();
              }}
            />
          </label>
          <output className={styles.value}>{force} N</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Mass</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Mass of your cart, kilograms</span>
            <input
              className={styles.slider}
              type="range"
              min={0.5}
              max={20}
              step={0.5}
              value={mass}
              onChange={(event) => {
                setMass(Number(event.target.value));
                restart();
              }}
            />
          </label>
          <output className={styles.value}>{mass.toFixed(1)} kg</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button type="button" className={styles.toggle} onClick={restart}>
          Run again
        </button>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => {
            setForce(20);
            setMass(4);
            restart();
          }}
        >
          Double the force
        </button>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => {
            setForce(10);
            setMass(8);
            restart();
          }}
        >
          Double the mass
        </button>
      </div>
    </div>
  );
}
