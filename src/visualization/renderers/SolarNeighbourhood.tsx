import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Why there is a band of light across the sky.
 *
 * The Milky Way is a band and not a patch because we are inside a flat disk.
 * Look along the plane and the sight line passes through tens of thousands of
 * parsecs of stars; look perpendicular to it and the sight line leaves the disk
 * within a few hundred parsecs and runs out of stars. The star count along the
 * sight line is computed from an exponential disk with the measured scale
 * height, so the ratio in the readout is a real geometric result rather than an
 * assertion.
 */

/** Milky Way disk parameters, in parsecs. */
const SCALE_HEIGHT = 300;
const SCALE_LENGTH = 2600;
const R_SUN = 8180;

/**
 * Relative number of stars along a sight line at Galactic latitude b, for a
 * double-exponential disk. Integrated numerically along the ray.
 */
function starCount(latitudeDeg: number): number {
  const b = (latitudeDeg * Math.PI) / 180;
  const steps = 400;
  const maxD = 30000;
  let sum = 0;
  for (let i = 0; i < steps; i += 1) {
    const d = ((i + 0.5) / steps) * maxD;
    const z = Math.abs(d * Math.sin(b));
    // Looking toward the Galactic centre along the plane.
    const x = R_SUN - d * Math.cos(b);
    const r = Math.abs(x);
    sum += Math.exp(-r / SCALE_LENGTH) * Math.exp(-z / SCALE_HEIGHT) * (maxD / steps);
  }
  return sum;
}

const PERPENDICULAR = starCount(90);

function seeded(i: number): number {
  const x = Math.sin(i * 51.3 + 19.1) * 43758.5453;
  return x - Math.floor(x);
}

export default function SolarNeighbourhood({
  quality,
  width,
  height,
}: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);
  const [latitude, setLatitude] = useState(0);

  const count = starCount(latitude);
  const ratio = count / PERPENDICULAR;

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

    const split = h * 0.46;

    // ---- Top panel: the disk seen edge-on, with the sight line drawn -------
    const cx = w * 0.68;
    const cy = split * 0.55;
    const diskW = w * 0.6;
    const diskH = Math.max(6 * dpr, split * 0.14);

    const disk = context.createLinearGradient(cx - diskW / 2, cy, cx + diskW / 2, cy);
    disk.addColorStop(0, 'rgba(127,199,255,0.15)');
    disk.addColorStop(0.5, 'rgba(255,220,170,0.4)');
    disk.addColorStop(1, 'rgba(127,199,255,0.15)');
    context.fillStyle = disk;
    context.beginPath();
    context.ellipse(cx - diskW * 0.12, cy, diskW / 2, diskH, 0, 0, Math.PI * 2);
    context.fill();

    // The Sun's position in the disk.
    const sunX = cx + diskW * 0.16;
    context.fillStyle = '#ffd27f';
    context.beginPath();
    context.arc(sunX, cy, 3.4 * dpr, 0, Math.PI * 2);
    context.fill();
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.textAlign = 'left';
    context.textBaseline = 'middle';
    context.fillText('Sun', sunX + 6 * dpr, cy - 10 * dpr);

    // The sight line at the chosen latitude, toward the Galactic centre.
    const b = (latitude * Math.PI) / 180;
    const len = diskW * 0.8;
    context.strokeStyle = '#4fe0c0';
    context.lineWidth = 2 * dpr;
    context.beginPath();
    context.moveTo(sunX, cy);
    context.lineTo(
      sunX - Math.cos(b) * len,
      cy - Math.sin(b) * len * (diskH / (diskW * 0.08)) * 0.5,
    );
    context.stroke();

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `${9.5 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.9)';
    context.fillText('the disk, edge-on — and where you are looking', 10 * dpr, 10 * dpr);

    // ---- Bottom panel: the resulting sky ---------------------------------
    context.fillStyle = 'rgba(4,6,13,0.75)';
    context.fillRect(0, split, w, h - split);

    const skyTop = split + 14 * dpr;
    const skyH = h - skyTop - 34 * dpr;
    const density = Math.min(1, ratio / 40);
    const stars = Math.round(60 + density * 900);
    for (let i = 0; i < stars; i += 1) {
      const x = seeded(i * 3) * w;
      // Concentrate toward the band when looking along the plane.
      const spread = 0.06 + 0.5 * (1 - density);
      const y = skyTop + skyH * (0.5 + (seeded(i * 3 + 1) - 0.5) * 2 * spread);
      if (y < skyTop || y > skyTop + skyH) continue;
      const bright = 0.25 + seeded(i * 3 + 2) * 0.75;
      context.fillStyle = `rgba(226,233,246,${bright * 0.8})`;
      context.beginPath();
      context.arc(x, y, (bright > 0.9 ? 1.6 : 1) * dpr, 0, Math.PI * 2);
      context.fill();
    }

    // Dust lanes, which really do split the band.
    if (density > 0.35) {
      context.fillStyle = `rgba(4,6,13,${0.4 * density})`;
      for (let i = 0; i < 4; i += 1) {
        const y = skyTop + skyH * (0.44 + i * 0.045);
        context.fillRect(seeded(i * 17) * w * 0.4, y, w * (0.25 + seeded(i * 19) * 0.4), 3 * dpr);
      }
    }

    context.font = `${10.5 * dpr}px ui-monospace, monospace`;
    context.textAlign = 'left';
    context.fillStyle = 'rgba(148,162,192,0.95)';
    context.fillText(`Galactic latitude b = ${latitude.toFixed(0)}°`, 10 * dpr, split + 4 * dpr);
    context.textAlign = 'right';
    context.fillStyle = '#4fe0c0';
    context.fillText(`${ratio.toFixed(1)}× as many stars`, w - 10 * dpr, split + 4 * dpr);

    context.font = `${9 * dpr}px system-ui, sans-serif`;
    context.fillStyle = 'rgba(148,162,192,0.75)';
    context.fillText(
      'positions from a smooth disk model — not a star chart',
      w - 10 * dpr,
      h - 16 * dpr,
    );
  }, [width, height, dpr, latitude, ratio]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Look</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Galactic latitude of the viewing direction, in degrees
            </span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={90}
              step={1}
              value={latitude}
              onChange={(event) => setLatitude(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>b = {latitude}°</output>
        </div>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        Looking {latitude === 0 ? 'straight along the disk' : `${latitude}° above the disk`}, the
        sight line passes through <strong>{ratio.toFixed(1)}×</strong> as many stars as looking
        straight out of it. The band across the sky is not a structure you are looking at from
        outside — it is what a flat disk looks like from a position inside it, about 8.2 kiloparsecs
        from the centre and almost exactly in the mid-plane. The dark lanes splitting the band are
        dust in the disk between us and the stars behind, not gaps.
      </p>
    </div>
  );
}
