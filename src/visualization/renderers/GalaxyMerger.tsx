import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import { useAnimationFrame } from '@/visualization/core/useAnimationFrame';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * A restricted three-body encounter, in the spirit of Toomre and Toomre (1972).
 *
 * Stars are massless test particles orbiting two point masses; there is no
 * self-gravity, no gas, no dark matter. That is a drastic simplification and it
 * is also the historically important one: the Toomres showed with exactly this
 * model, on a computer with less memory than a modern doorbell, that the
 * bridges and tails seen in peculiar galaxies are tidal, and that galaxies
 * merge.
 *
 * The collision counter stays at zero throughout, and that is the point. Stars
 * are so small compared with the space between them that two galaxies pass
 * through one another without a single stellar impact. Gas, which is not
 * modelled here, does collide, and that is what drives the starburst.
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  host: 0 | 1;
}

const G = 1;

function seeded(i: number): number {
  const x = Math.sin(i * 33.1 + 7.77) * 43758.5453;
  return x - Math.floor(x);
}

export default function GalaxyMerger({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  /** Mass of the second galaxy relative to the first. */
  const [ratio, setRatio] = useState(1);
  const [generation, setGeneration] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const sim = useRef<{
    cores: { x: number; y: number; vx: number; vy: number; m: number }[];
    particles: Particle[];
    time: number;
  }>({ cores: [], particles: [], time: 0 });

  const reset = useCallback(() => {
    const m1 = 1;
    const m2 = ratio;
    const cores = [
      { x: -1.6, y: -0.35, vx: 0.34, vy: 0.05, m: m1 },
      { x: 1.6, y: 0.35, vx: -0.34 / (m2 / m1), vy: -0.05, m: m2 },
    ];
    const particles: Particle[] = [];
    for (let host = 0; host < 2; host += 1) {
      const core = cores[host]!;
      const count = host === 0 ? 420 : Math.round(420 * Math.min(1, ratio));
      for (let i = 0; i < count; i += 1) {
        const r = 0.18 + seeded(i * 5 + host * 999 + generation * 31) * 0.5;
        const a = seeded(i * 5 + 1 + host * 999 + generation * 31) * Math.PI * 2;
        const speed = Math.sqrt((G * core.m) / r);
        const spin = host === 0 ? 1 : -1;
        particles.push({
          x: core.x + Math.cos(a) * r,
          y: core.y + Math.sin(a) * r * 0.85,
          vx: core.vx - Math.sin(a) * speed * spin,
          vy: core.vy + Math.cos(a) * speed * spin * 0.85,
          host: host as 0 | 1,
        });
      }
    }
    sim.current = { cores, particles, time: 0 };
    setElapsed(0);
  }, [ratio, generation]);

  useEffect(() => {
    reset();
  }, [reset]);

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
    const unit = Math.min(w, h) * 0.17;
    const s = sim.current;

    for (const p of s.particles) {
      const x = cx + p.x * unit;
      const y = cy + p.y * unit;
      if (x < -20 || x > w + 20 || y < -20 || y > h + 20) continue;
      context.fillStyle = p.host === 0 ? 'rgba(143,184,255,0.75)' : 'rgba(255,180,140,0.75)';
      context.beginPath();
      context.arc(x, y, 1.3 * dpr, 0, Math.PI * 2);
      context.fill();
    }

    for (const core of s.cores) {
      const x = cx + core.x * unit;
      const y = cy + core.y * unit;
      const grad = context.createRadialGradient(x, y, 0, x, y, 12 * dpr * Math.cbrt(core.m));
      grad.addColorStop(0, 'rgba(255,240,210,0.9)');
      grad.addColorStop(1, 'rgba(255,220,170,0)');
      context.fillStyle = grad;
      context.beginPath();
      context.arc(x, y, 12 * dpr * Math.cbrt(core.m), 0, Math.PI * 2);
      context.fill();
    }

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${10.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = '#4fe0c0';
    context.fillText('stellar collisions: 0', 10 * dpr, 10 * dpr);
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(`${(s.time * 90).toFixed(0)} million years`, 10 * dpr, 26 * dpr);
    context.fillText(`mass ratio 1 : ${ratio.toFixed(2)}`, 10 * dpr, 42 * dpr);

    context.textAlign = 'right';
    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.fillText(
      'massless test particles — no self-gravity, no gas',
      w - 10 * dpr,
      h - 16 * dpr,
    );
  }, [width, height, dpr, ratio]);

  useAnimationFrame(
    (delta) => {
      const s = sim.current;
      const dt = Math.min(0.02, delta) * 0.9;
      const substeps = 4;
      const step = dt / substeps;

      for (let n = 0; n < substeps; n += 1) {
        // The two cores attract each other.
        const dx = s.cores[1]!.x - s.cores[0]!.x;
        const dy = s.cores[1]!.y - s.cores[0]!.y;
        const d2 = dx * dx + dy * dy + 0.09;
        const d = Math.sqrt(d2);
        const f = G / (d2 * d);
        s.cores[0]!.vx += f * s.cores[1]!.m * dx * step;
        s.cores[0]!.vy += f * s.cores[1]!.m * dy * step;
        s.cores[1]!.vx -= f * s.cores[0]!.m * dx * step;
        s.cores[1]!.vy -= f * s.cores[0]!.m * dy * step;
        s.cores[0]!.x += s.cores[0]!.vx * step;
        s.cores[0]!.y += s.cores[0]!.vy * step;
        s.cores[1]!.x += s.cores[1]!.vx * step;
        s.cores[1]!.y += s.cores[1]!.vy * step;

        // Test particles feel both cores and nothing else.
        for (const p of s.particles) {
          let ax = 0;
          let ay = 0;
          for (const core of s.cores) {
            const px = core.x - p.x;
            const py = core.y - p.y;
            const r2 = px * px + py * py + 0.02;
            const r = Math.sqrt(r2);
            const a = (G * core.m) / (r2 * r);
            ax += a * px;
            ay += a * py;
          }
          p.vx += ax * step;
          p.vy += ay * step;
          p.x += p.vx * step;
          p.y += p.vy * step;
        }
        s.time += step;
      }

      draw();
      setElapsed(s.time);
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
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Mass ratio</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Mass of the second galaxy relative to the first
            </span>
            <input
              className={styles.slider}
              type="range"
              min={0.08}
              max={1}
              step={0.01}
              value={ratio}
              onChange={(event) => setRatio(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>1 : {ratio.toFixed(2)}</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={false}
          onClick={() => setGeneration((v) => v + 1)}
        >
          Restart encounter
        </button>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        {(elapsed * 90).toFixed(0)} million years in, at a mass ratio of 1 : {ratio.toFixed(2)}.{' '}
        <strong>Stellar collisions: zero</strong> — and that is not an artefact of the model. Stars
        are so small relative to the distances between them that the chance of two hitting during a
        galaxy merger is negligible; the galaxies pass through each other. What is destroyed is the
        orbits.{' '}
        {ratio > 0.35
          ? 'At this mass ratio both disks are torn apart, and the merger remnant will settle into a single dispersion-supported spheroid — which is one of the leading routes to making an elliptical galaxy.'
          : 'At this mass ratio the small galaxy is disrupted and absorbed while the large disk survives, thickened and stirred. Most mergers are of this kind, and the Milky Way has eaten several.'}{' '}
        The gas, which this model does not include, does collide directly — and that is what drives
        the enormous burst of star formation seen in real interacting galaxies.
      </p>
    </div>
  );
}
