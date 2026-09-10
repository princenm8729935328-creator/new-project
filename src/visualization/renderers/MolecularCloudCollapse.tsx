import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * A cloud collapsing and fragmenting, with the Jeans criterion doing the work.
 *
 * No hydrodynamics is solved. What is computed at every step is the Jeans mass
 * for the current density and temperature, and that is the honest core of the
 * figure: as the cloud densifies, the smallest mass that can collapse falls,
 * so regions that were stable become unstable and the cloud breaks up. That is
 * why one cloud makes a cluster and not one enormous star.
 *
 * The cooling toggle is the other half of the argument. Without a way to
 * radiate the compression heat away, the gas warms as it contracts, the Jeans
 * mass rises instead of falling, and nothing forms at all.
 */

const M_H = 1.6726e-27;
const K_B = 1.381e-23;
const G = 6.674e-11;
const M_SUN = 1.989e30;

function jeansMass(tempK: number, nCm3: number): number {
  const mu = 2.33;
  const rho = nCm3 * 1e6 * mu * M_H;
  const cs2 = (K_B * tempK) / (mu * M_H);
  return (((5 * cs2) / G) ** 1.5 * (3 / (4 * Math.PI * rho)) ** 0.5) / M_SUN;
}

interface Clump {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  lit: boolean;
}

function seeded(i: number): number {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export default function MolecularCloudCollapse({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [cooling, setCooling] = useState(true);
  const [generation, setGeneration] = useState(0);
  const [state, setState] = useState({ density: 100, temp: 60, jeans: 0, stars: 0 });

  const sim = useRef<{
    clumps: Clump[];
    scale: number;
    density: number;
    temp: number;
    time: number;
  }>({
    clumps: [],
    scale: 1,
    density: 100,
    temp: 60,
    time: 0,
  });

  const reset = useCallback(() => {
    const clumps: Clump[] = [];
    for (let i = 0; i < 5; i += 1) {
      clumps.push({
        x: (seeded(i * 3 + generation * 17) - 0.5) * 1.5,
        y: (seeded(i * 3 + 1 + generation * 17) - 0.5) * 1.5,
        vx: 0,
        vy: 0,
        mass: 1,
        lit: false,
      });
    }
    sim.current = { clumps, scale: 1, density: 100, temp: 60, time: 0 };
  }, [generation]);

  useEffect(() => {
    reset();
  }, [reset, cooling]);

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
    const cy = h * 0.5;
    const unit = Math.min(w, h) * 0.3;
    const s = sim.current;

    // The diffuse cloud, shrinking.
    const cloudR = unit * 1.5 * s.scale;
    const cloud = context.createRadialGradient(cx, cy, cloudR * 0.15, cx, cy, cloudR);
    cloud.addColorStop(0, 'rgba(143,184,255,0.20)');
    cloud.addColorStop(1, 'rgba(143,184,255,0)');
    context.fillStyle = cloud;
    context.beginPath();
    context.arc(cx, cy, cloudR, 0, Math.PI * 2);
    context.fill();

    for (const clump of s.clumps) {
      const x = cx + clump.x * unit * s.scale;
      const y = cy + clump.y * unit * s.scale;
      const r = Math.max(2 * dpr, unit * 0.16 * s.scale * Math.sqrt(clump.mass));
      if (clump.lit) {
        const star = context.createRadialGradient(x, y, 0, x, y, r * 3);
        star.addColorStop(0, 'rgba(255,240,200,0.95)');
        star.addColorStop(0.3, 'rgba(255,200,120,0.6)');
        star.addColorStop(1, 'rgba(255,180,90,0)');
        context.fillStyle = star;
        context.beginPath();
        context.arc(x, y, r * 3, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = '#fff6de';
        context.beginPath();
        context.arc(x, y, Math.max(2 * dpr, r * 0.5), 0, Math.PI * 2);
        context.fill();
      } else {
        context.fillStyle = 'rgba(127,199,255,0.42)';
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        context.fill();
      }
    }

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${10.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(`n = ${s.density.toExponential(1)} cm⁻³`, 10 * dpr, 10 * dpr);
    context.fillText(`T = ${s.temp.toFixed(0)} K`, 10 * dpr, 26 * dpr);
    context.fillStyle = cooling ? '#4fe0c0' : '#ff8f6e';
    context.fillText(
      `Jeans mass = ${jeansMass(s.temp, s.density).toPrecision(3)} M☉`,
      10 * dpr,
      42 * dpr,
    );

    context.textAlign = 'right';
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.fillText('conceptual — no hydrodynamics is solved', w - 10 * dpr, h - 16 * dpr);
  }, [width, height, dpr, cooling]);

  useAnimationFrame(
    (delta) => {
      const s = sim.current;
      s.time += delta;

      if (cooling) {
        // Contract, densify, and cool: the Jeans mass falls, so clumps split.
        s.scale = Math.max(0.14, s.scale - delta * 0.14 * s.scale);
        s.density = 100 / s.scale ** 3;
        s.temp = Math.max(12, 60 - 48 * (1 - s.scale));
        const mj = jeansMass(s.temp, s.density);
        for (const clump of s.clumps) {
          if (
            !clump.lit &&
            clump.mass * 60 > mj &&
            s.clumps.length < 14 &&
            seeded(s.time * 91 + clump.x * 7) > 0.985
          ) {
            clump.mass *= 0.55;
            s.clumps.push({
              x: clump.x + (seeded(s.time * 13) - 0.5) * 0.3,
              y: clump.y + (seeded(s.time * 29) - 0.5) * 0.3,
              vx: 0,
              vy: 0,
              mass: clump.mass,
              lit: false,
            });
          }
          if (!clump.lit && s.density > 3e5) clump.lit = true;
        }
      } else {
        // Pressure holds it up: contraction stalls and the gas warms slightly.
        s.scale = Math.min(1, s.scale + delta * 0.12 * (1 - s.scale));
        s.density = 100 / s.scale ** 3;
        s.temp = 60 + 40 * (1 - s.scale);
      }

      draw();
      setState({
        density: s.density,
        temp: s.temp,
        jeans: jeansMass(s.temp, s.density),
        stars: s.clumps.filter((c) => c.lit).length,
      });
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 30),
  );

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion, generation]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={cooling}
          onClick={() => setCooling(true)}
        >
          Gas can cool
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={!cooling}
          onClick={() => setCooling(false)}
        >
          Gas cannot cool
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={false}
          onClick={() => setGeneration((v) => v + 1)}
        >
          Restart
        </button>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        Density {state.density.toExponential(1)} cm⁻³, temperature {state.temp.toFixed(0)} K, so the
        smallest mass gravity can pull together is{' '}
        <strong>{state.jeans.toPrecision(3)} solar masses</strong>.{' '}
        {cooling
          ? `As the cloud contracts and radiates its heat away, that number falls — so regions that were stable become unstable, and the cloud splits. ${state.stars} protostar${state.stars === 1 ? '' : 's'} so far. One cloud makes a cluster, not one enormous star.`
          : 'With no way to radiate the compression heat away, the gas warms as it contracts. Pressure rises, the Jeans mass rises with it, and the collapse stalls. Cooling is not a detail of star formation — it is the thing that permits it.'}
      </p>
    </div>
  );
}
