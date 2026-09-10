import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The recycling loop, with the model's own failure available as a control.
 *
 * The closed-box chemical evolution model is the simplest thing that works, and
 * its most famous property is that it is wrong: it predicts far more metal-poor
 * stars in the Galaxy than are observed, the "G-dwarf problem". The fix, adding
 * a steady inflow of un-enriched gas, is available here as a toggle — so the
 * reader can see the model failing and then see what mends it, rather than
 * being handed the mended version as though it had always been right.
 *
 * Metallicity evolves according to the closed-box equation with the chosen
 * inflow and outflow. Timescales and star counts are token.
 */

const YIELD = 0.012; // net metal yield per unit mass locked into stars

interface Star {
  x: number;
  y: number;
  age: number;
  life: number;
  z: number;
  massive: boolean;
}

function seeded(i: number): number {
  const x = Math.sin(i * 91.7 + 41.3) * 43758.5453;
  return x - Math.floor(x);
}

type Mode = 'closed' | 'inflow' | 'outflow';

const MODE_LABEL: Record<Mode, string> = {
  closed: 'Closed box',
  inflow: 'With gas inflow',
  outflow: 'With supernova outflow',
};

export default function ChemicalEnrichment({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [mode, setMode] = useState<Mode>('closed');
  const [readout, setReadout] = useState({ z: 0, gas: 1, gen: 0, gyr: 0 });

  const sim = useRef({
    stars: [] as Star[],
    gas: 1,
    z: 0,
    generation: 0,
    time: 0,
    spawn: 0,
    seed: 0,
    history: [] as number[],
  });

  const reset = useCallback(() => {
    sim.current = {
      stars: [],
      gas: 1,
      z: 0,
      generation: 0,
      time: 0,
      spawn: 0,
      seed: 0,
      history: [],
    };
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

    const s = sim.current;
    const panelTop = h * 0.62;

    // The gas reservoir, tinted by metallicity.
    const enrich = Math.min(1, s.z / 0.02);
    context.fillStyle = `rgba(${100 + enrich * 155},${140 + enrich * 70},${220 - enrich * 60},${0.1 + s.gas * 0.14})`;
    context.fillRect(0, 0, w, panelTop);
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.fillStyle = 'rgba(226,233,246,0.9)';
    context.fillText(
      'interstellar gas — colour shows its heavy-element content',
      10 * dpr,
      10 * dpr,
    );

    // Stars.
    for (const star of s.stars) {
      const x = star.x * w;
      const y = 26 * dpr + star.y * (panelTop - 40 * dpr);
      const frac = star.age / star.life;
      const r = (star.massive ? 4 : 2.4) * dpr;
      if (frac > 0.93 && star.massive) {
        // A supernova in progress.
        const glow = context.createRadialGradient(x, y, 0, x, y, r * 6);
        glow.addColorStop(0, 'rgba(255,240,200,0.95)');
        glow.addColorStop(1, 'rgba(255,140,90,0)');
        context.fillStyle = glow;
        context.beginPath();
        context.arc(x, y, r * 6, 0, Math.PI * 2);
        context.fill();
      } else {
        context.fillStyle = star.massive ? 'rgba(180,215,255,0.95)' : 'rgba(255,225,180,0.9)';
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        context.fill();
      }
    }

    // Enrichment history trace.
    context.fillStyle = 'rgba(4,6,13,0.6)';
    context.fillRect(0, panelTop, w, h - panelTop);
    context.strokeStyle = 'rgba(148,162,192,0.25)';
    context.lineWidth = 1 * dpr;
    context.beginPath();
    context.moveTo(10 * dpr, h - 22 * dpr);
    context.lineTo(w - 10 * dpr, h - 22 * dpr);
    context.stroke();

    if (s.history.length > 1) {
      context.strokeStyle = '#4fe0c0';
      context.lineWidth = 2 * dpr;
      context.beginPath();
      s.history.forEach((z, i) => {
        const x = 10 * dpr + (i / Math.max(1, s.history.length - 1)) * (w - 20 * dpr);
        const y = h - 22 * dpr - Math.min(1, z / 0.025) * (h - panelTop - 34 * dpr);
        if (i === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      });
      context.stroke();
    }

    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      `Z = ${(s.z * 100).toFixed(3)}%  (solar ≈ 1.4%)`,
      10 * dpr,
      panelTop + 6 * dpr,
    );
    context.textAlign = 'right';
    context.fillText(`gas left ${(s.gas * 100).toFixed(0)}%`, w - 10 * dpr, panelTop + 6 * dpr);
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.fillText(
      'timescales compressed; star count is a token handful',
      w - 10 * dpr,
      h - 16 * dpr,
    );
  }, [width, height, dpr]);

  useAnimationFrame(
    (delta) => {
      const s = sim.current;
      s.time += delta;
      s.spawn += delta;

      // Form stars from the available gas.
      if (s.spawn > 0.12 && s.gas > 0.02 && s.stars.length < 90) {
        s.spawn = 0;
        s.seed += 1;
        const massive = seeded(s.seed * 3) > 0.72;
        s.stars.push({
          x: 0.06 + seeded(s.seed * 3 + 1) * 0.88,
          y: seeded(s.seed * 3 + 2),
          age: 0,
          life: massive ? 1.6 + seeded(s.seed * 5) * 1.2 : 20,
          z: s.z,
          massive,
        });
        const consumed = 0.012;
        s.gas = Math.max(0, s.gas - consumed);
        // Closed-box enrichment: dZ = y·dM_stars / M_gas.
        if (s.gas > 0.02) s.z += (YIELD * consumed) / s.gas;
      }

      // Age stars; massive ones die and return enriched gas.
      for (let i = s.stars.length - 1; i >= 0; i -= 1) {
        const star = s.stars[i]!;
        star.age += delta;
        if (star.age > star.life) {
          if (star.massive) {
            const returned = 0.008;
            if (mode === 'outflow') {
              // Supernova-driven wind carries the enriched gas out of the galaxy.
              s.gas = Math.max(0, s.gas - 0.002);
            } else {
              s.gas += returned;
              s.z += (YIELD * returned) / Math.max(0.02, s.gas);
            }
            s.generation += 1;
          }
          s.stars.splice(i, 1);
        }
      }

      // Fresh un-enriched gas falling in dilutes the metallicity.
      if (mode === 'inflow') {
        const added = delta * 0.02;
        s.z = (s.z * s.gas) / (s.gas + added);
        s.gas = Math.min(1.4, s.gas + added);
      }

      if (s.history.length === 0 || s.time - s.history.length * 0.1 > 0.1) {
        s.history.push(s.z);
        if (s.history.length > 220) s.history.shift();
      }

      draw();
      setReadout({ z: s.z, gas: s.gas, gen: s.generation, gyr: s.time * 1.2 });
    },
    active && !reducedMotion,
    Math.min(budget.targetFps, 30),
  );

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.toggles}>
        {(['closed', 'inflow', 'outflow'] as const).map((m) => (
          <button
            key={m}
            type="button"
            className={styles.toggle}
            aria-pressed={mode === m}
            onClick={() => setMode(m)}
          >
            {MODE_LABEL[m]}
          </button>
        ))}
        <button type="button" className={styles.toggle} aria-pressed={false} onClick={reset}>
          Restart
        </button>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        Metallicity <strong>{(readout.z * 100).toFixed(3)}%</strong> (the Sun is about 1.4%), with{' '}
        {(readout.gas * 100).toFixed(0)}% of the original gas left and {readout.gen} massive stars
        already dead and returned.{' '}
        {mode === 'closed'
          ? 'The closed box: nothing enters, nothing leaves, and enrichment climbs steadily. It is also the model’s famous failure — it predicts far more surviving metal-poor stars than the Galaxy actually contains.'
          : mode === 'inflow'
            ? 'Fresh un-enriched gas falling in dilutes the metals and holds the metallicity down for longer. This is the standard fix for the closed box’s failure, and it also matches the observation that the Galaxy is still accreting gas today.'
            : 'Supernova-driven winds carry enriched gas out of the galaxy entirely. In a small galaxy with a shallow potential well this is decisive — which is why dwarf galaxies are metal-poor even after billions of years of star formation.'}
      </p>
    </div>
  );
}
