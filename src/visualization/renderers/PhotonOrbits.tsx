import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Light fired past a black hole, integrated rather than drawn.
 *
 * Each path comes from the Schwarzschild null geodesic equation, u'' = −u + 3u²
 * with u = r_g/r, integrated by fourth-order Runge–Kutta. Nothing about the
 * capture threshold is imposed: rays aimed inside b = √27 r_g spiral in and
 * rays outside it escape, because that is what the integration does. The rays
 * that loop several times just above the threshold are the same rays that
 * produce the bright ring in an image of a real black hole.
 *
 * Distances are in gravitational radii and the black hole is not at any
 * realistic angular size.
 */

const R_START = 30;
const B_CRIT = Math.sqrt(27);

interface Path {
  readonly points: readonly (readonly [number, number])[];
  readonly captured: boolean;
  readonly deflectionDegrees: number;
}

/** Integrate one ray of impact parameter b, in gravitational radii. */
function integrate(b: number): Path {
  const points: [number, number][] = [];
  let u = 1 / R_START;
  // From (du/dφ)² = 1/b² − u² + 2u³, taking the inward-going root.
  let du = Math.sqrt(Math.max(0, 1 / (b * b) - u * u + 2 * u ** 3));
  let phi = 0;
  const step = 0.004;
  let captured = false;

  const accel = (uu: number): number => -uu + 3 * uu * uu;

  for (let i = 0; i < 40000; i += 1) {
    const r = 1 / u;
    points.push([r * Math.cos(phi), r * Math.sin(phi)]);

    if (u > 0.5) {
      captured = true;
      break;
    }
    if (u < 1 / R_START && phi > 0.2) break;
    if (phi > 14 * Math.PI) break;

    // RK4 on the pair (u, du).
    const k1u = du;
    const k1d = accel(u);
    const k2u = du + (step / 2) * k1d;
    const k2d = accel(u + (step / 2) * k1u);
    const k3u = du + (step / 2) * k2d;
    const k3d = accel(u + (step / 2) * k2u);
    const k4u = du + step * k3d;
    const k4d = accel(u + step * k3u);

    u += (step / 6) * (k1u + 2 * k2u + 2 * k3u + k4u);
    du += (step / 6) * (k1d + 2 * k2d + 2 * k3d + k4d);
    phi += step;

    if (u <= 0) break;
  }

  // The straight-line path would have left at φ = π; the excess is the bend.
  const deflection = captured ? Number.NaN : (phi - Math.PI) * (180 / Math.PI);
  return { points, captured, deflectionDegrees: deflection };
}

const REFERENCE_B = [12, 8, 6.2, 5.4];

export default function PhotonOrbits({
  quality,
  active,
  reducedMotion,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);

  const [impact, setImpact] = useState(6);

  const reference = useMemo(() => REFERENCE_B.map(integrate), []);
  const selected = useMemo(() => integrate(impact), [impact]);

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

    const cx = w * 0.5;
    const cy = h * 0.52;
    const view = 16; // gravitational radii across the half-frame
    const scale = Math.min(w, h) / (2 * view);
    const toX = (x: number): number => cx + x * scale;
    const toY = (y: number): number => cy - y * scale;

    // ---- Horizon and photon sphere -------------------------------------------
    context.strokeStyle = 'rgba(255,214,110,0.45)';
    context.setLineDash([4 * dpr, 4 * dpr]);
    context.lineWidth = 1.2 * dpr;
    context.beginPath();
    context.arc(cx, cy, 3 * scale, 0, Math.PI * 2);
    context.stroke();
    context.setLineDash([]);

    context.fillStyle = '#05070d';
    context.beginPath();
    context.arc(cx, cy, 2 * scale, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = 'rgba(255,143,110,0.85)';
    context.lineWidth = 1.6 * dpr;
    context.beginPath();
    context.arc(cx, cy, 2 * scale, 0, Math.PI * 2);
    context.stroke();

    const drawPath = (path: Path, colour: string, lineWidth: number): void => {
      context.strokeStyle = colour;
      context.lineWidth = lineWidth * dpr;
      context.beginPath();
      path.points.forEach(([x, y], index) => {
        const px = toX(x);
        const py = toY(y);
        if (index === 0) context.moveTo(px, py);
        else context.lineTo(px, py);
      });
      context.stroke();
    };

    for (const path of reference) {
      drawPath(path, path.captured ? 'rgba(255,143,110,0.28)' : 'rgba(148,162,192,0.30)', 1.1);
    }
    drawPath(selected, selected.captured ? '#ff8f6e' : '#66e0d4', 2);

    // ---- Readouts -------------------------------------------------------------
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${11 * dpr}px system-ui, sans-serif`;
    context.fillStyle = selected.captured ? '#ff8f6e' : '#66e0d4';
    context.fillText(
      selected.captured ? 'Captured.' : 'Escapes, bent on the way past.',
      10 * dpr,
      10 * dpr,
    );

    context.font = `${9.5 * dpr}px ui-monospace, monospace`;
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(
      selected.captured
        ? `b = ${impact.toFixed(2)} r_g — below the threshold at √27 = 5.196`
        : `b = ${impact.toFixed(2)} r_g · deflection ${selected.deflectionDegrees.toFixed(1)}°`,
      10 * dpr,
      28 * dpr,
    );

    context.textAlign = 'center';
    context.font = `${8 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(255,214,110,0.85)';
    context.fillText('photon sphere, 3 r_g', cx, cy + 3 * scale + 5 * dpr);

    context.textAlign = 'left';
    context.textBaseline = 'bottom';
    context.font = `${8.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.8)';
    context.fillText('paths integrated from the null geodesic equation', 10 * dpr, h - 6 * dpr);
  }, [width, height, dpr, reference, selected, impact]);

  useEffect(() => {
    draw();
  }, [draw, active, reducedMotion]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Aim</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Impact parameter, in gravitational radii</span>
            <input
              className={styles.slider}
              type="range"
              min={2}
              max={14}
              step={0.01}
              value={impact}
              onChange={(event) => setImpact(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>b = {impact.toFixed(2)}</output>
        </div>
      </div>
      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setImpact(Number((B_CRIT + 0.02).toFixed(2)))}
        >
          Just above capture
        </button>
        <button type="button" className={styles.toggle} onClick={() => setImpact(4.8)}>
          Just below
        </button>
      </div>
      <p className={styles.readout}>
        The threshold is b = √27 ≈ 5.196 gravitational radii. Rays a hair above it wind around the
        photon sphere before escaping in an almost arbitrary direction — and that pile-up of nearly
        captured light is the bright ring in a black-hole image.
      </p>
    </div>
  );
}
