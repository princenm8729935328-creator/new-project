import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The winding problem, and the standard answer to it.
 *
 * Material-arm mode is a real calculation: stars orbit on a flat rotation
 * curve, so the inner ones lap the outer ones, and an arm made of a fixed set
 * of stars winds itself into an unrecognisable coil within a few rotations.
 * The Galaxy is about fifty rotations old. That is the problem.
 *
 * Density-wave mode imposes a rigidly rotating pattern rather than deriving it
 * — the figure says so — and shows stars passing through it, bunching up inside
 * and thinning out beyond, with gas compressed on the leading edge and new blue
 * stars appearing just downstream. Whether real arms are long-lived waves or
 * transient recurrent patterns is still argued.
 */

interface Star {
  r: number;
  theta0: number;
  arm: number;
  young: boolean;
  bornAt: number;
}

function seeded(i: number): number {
  const x = Math.sin(i * 78.233 + 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const ARMS = 2;
const PATTERN_SPEED = 0.28; // radians per second of animation
const PITCH = 0.25; // logarithmic spiral pitch

type Mode = 'material' | 'wave';

export default function SpiralStructure({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [mode, setMode] = useState<Mode>('material');
  const [rotations, setRotations] = useState(0);
  const clock = useRef(0);

  const stars = useRef<Star[]>([]);
  if (stars.current.length === 0) {
    const list: Star[] = [];
    for (let i = 0; i < 1100; i += 1) {
      const arm = i % ARMS;
      const r = 0.16 + seeded(i * 3) * 0.82;
      // Start each star near its arm, with scatter.
      const armTheta = (arm / ARMS) * Math.PI * 2 + Math.log(r / 0.16) / PITCH;
      list.push({
        r,
        theta0: armTheta + (seeded(i * 3 + 1) - 0.5) * 0.55,
        arm,
        young: false,
        bornAt: -99,
      });
    }
    stars.current = list;
  }

  const reset = useCallback(() => {
    clock.current = 0;
    setRotations(0);
    for (const star of stars.current) {
      star.young = false;
      star.bornAt = -99;
    }
  }, []);

  useEffect(() => {
    reset();
  }, [reset, mode]);

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

    const cx = w / 2;
    const cy = h * 0.48;
    const unit = Math.min(w, h) * 0.42;
    const time = clock.current;

    // Flat rotation curve: v is constant, so ω = v/r. Inner orbits are faster.
    const V_FLAT = 0.34;
    const omega = (r: number): number => V_FLAT / r;

    // Bulge.
    const bulge = context.createRadialGradient(cx, cy, 0, cx, cy, unit * 0.16);
    bulge.addColorStop(0, 'rgba(255,230,180,0.7)');
    bulge.addColorStop(1, 'rgba(255,210,140,0)');
    context.fillStyle = bulge;
    context.beginPath();
    context.arc(cx, cy, unit * 0.16, 0, Math.PI * 2);
    context.fill();

    if (mode === 'wave') {
      // The imposed pattern, rotating rigidly.
      const patternPhase = PATTERN_SPEED * time;
      for (let a = 0; a < ARMS; a += 1) {
        context.strokeStyle = 'rgba(127,199,255,0.16)';
        context.lineWidth = unit * 0.13;
        context.beginPath();
        for (let i = 0; i <= 60; i += 1) {
          const r = 0.16 + (i / 60) * 0.84;
          const theta = (a / ARMS) * Math.PI * 2 + Math.log(r / 0.16) / PITCH + patternPhase;
          const x = cx + Math.cos(theta) * r * unit;
          const y = cy + Math.sin(theta) * r * unit;
          if (i === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.stroke();
      }
    }

    for (const star of stars.current) {
      const theta = star.theta0 + omega(star.r) * time;
      let drawR = star.r;
      let drawTheta = theta;

      if (mode === 'wave') {
        // Stars bunch up in the arm: a small radial perturbation whose phase
        // is set by the star's position relative to the rotating pattern.
        const patternPhase = PATTERN_SPEED * time;
        const armTheta = Math.log(star.r / 0.16) / PITCH + patternPhase;
        let phase = theta - armTheta;
        phase = ((phase % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const nearest = Math.min(phase, Math.PI * 2 - phase, Math.abs(phase - Math.PI));
        const crowd = Math.exp(-((nearest / 0.5) ** 2));
        drawTheta = theta - crowd * 0.22 * Math.sign(Math.sin(phase * ARMS) || 1);
        drawR = star.r * (1 - crowd * 0.02);

        // Gas entering the arm is compressed and lights up just downstream.
        if (crowd > 0.86 && !star.young && seeded(star.r * 977 + time * 3) > 0.994) {
          star.young = true;
          star.bornAt = time;
        }
        if (star.young && time - star.bornAt > 6) star.young = false;
      }

      const x = cx + Math.cos(drawTheta) * drawR * unit;
      const y = cy + Math.sin(drawTheta) * drawR * unit;
      context.fillStyle = star.young
        ? 'rgba(150,205,255,0.98)'
        : mode === 'material'
          ? 'rgba(226,233,246,0.7)'
          : 'rgba(226,233,246,0.55)';
      context.beginPath();
      context.arc(x, y, (star.young ? 2.4 : 1.3) * dpr, 0, Math.PI * 2);
      context.fill();
    }

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = mode === 'material' ? '#ff8f6e' : '#4fe0c0';
    context.fillText(
      mode === 'material' ? 'arms made of fixed stars' : 'arms as a rotating density wave',
      10 * dpr,
      10 * dpr,
    );
    context.font = `${10 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `${((V_FLAT * time) / (2 * Math.PI * 0.5)).toFixed(1)} rotations at the Sun’s radius`,
      10 * dpr,
      28 * dpr,
    );

    context.textAlign = 'right';
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.fillText(
      mode === 'material'
        ? 'rotation curve is real; timescale compressed'
        : 'the wave pattern is imposed, not derived',
      w - 10 * dpr,
      h - 16 * dpr,
    );
  }, [width, height, dpr, mode]);

  useAnimationFrame(
    (delta) => {
      clock.current += delta;
      setRotations((0.34 * clock.current) / (2 * Math.PI * 0.5));
      draw();
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 40),
  );

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={mode === 'material'}
          onClick={() => setMode('material')}
        >
          Arms made of stars
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={mode === 'wave'}
          onClick={() => setMode('wave')}
        >
          Arms as a density wave
        </button>
        <button type="button" className={styles.toggle} aria-pressed={false} onClick={reset}>
          Restart
        </button>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        {mode === 'material' ? (
          <>
            After <strong>{rotations.toFixed(1)} rotations</strong> the arms have wound themselves
            into a tight coil, because the inner disk goes round faster than the outer disk. The
            Milky Way is roughly fifty rotations old. If arms were made of a fixed set of stars,
            there would be no arms left to see — and yet most disk galaxies have them. This is the
            winding problem, and it rules out the obvious explanation.
          </>
        ) : (
          <>
            The pattern rotates at its own fixed speed while individual stars pass through it,
            slowing slightly as they enter and speeding up as they leave — a traffic jam rather than
            a structure. The stars in the arm now are not the stars that were in it before. Gas
            entering the arm is compressed and lights up as new blue stars just downstream, which is
            why arms look bluer than the disk between them and why the young stars sit offset from
            the gas.{' '}
            <em>
              Whether real arms are long-lived waves or transient recurrent patterns is still
              argued; this is the standard model, not a settled fact.
            </em>
          </>
        )}
      </p>
    </div>
  );
}
