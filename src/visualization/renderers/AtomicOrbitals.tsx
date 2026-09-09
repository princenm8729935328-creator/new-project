import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { QUALITY_BUDGETS } from '@/visualization/core/quality';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Hydrogen probability densities, computed from the exact solutions.
 *
 * Every shape here is a result, not a drawing. The radial parts are the
 * standard hydrogenic functions and the angular parts are the spherical
 * harmonics; the map is |ψ|² evaluated on a plane through the nucleus. The
 * nodes — the spherical shell inside the 2s state, the plane between the 2p
 * lobes — are where the mathematics says the probability is exactly zero, and
 * their number is always n − 1 because that is what the solutions require.
 *
 * What the brightness means matters. It is the probability of a detection at
 * that place if you look. It is not a picture of a smeared-out electron, and
 * there is no orbit in it: nothing here is going round.
 */

/** Radial functions R_nl(ρ), ρ = r/a₀, up to an overall normalisation. */
function radial(n: number, l: number, rho: number): number {
  if (n === 1) return 2 * Math.exp(-rho);
  if (n === 2 && l === 0) return (1 / (2 * Math.SQRT2)) * (2 - rho) * Math.exp(-rho / 2);
  if (n === 2 && l === 1) return (1 / (2 * Math.sqrt(6))) * rho * Math.exp(-rho / 2);
  if (n === 3 && l === 0) {
    return (2 / (81 * Math.sqrt(3))) * (27 - 18 * rho + 2 * rho * rho) * Math.exp(-rho / 3);
  }
  if (n === 3 && l === 1) {
    return (4 / (81 * Math.sqrt(6))) * (6 * rho - rho * rho) * Math.exp(-rho / 3);
  }
  return (4 / (81 * Math.sqrt(30))) * rho * rho * Math.exp(-rho / 3);
}

interface Orbital {
  readonly id: string;
  readonly label: string;
  readonly n: number;
  readonly l: number;
  /** Angular factor on the drawing plane, given cos θ. */
  readonly angular: (cosTheta: number, sinTheta: number) => number;
  readonly extent: number;
  readonly note: string;
}

const ORBITALS: readonly Orbital[] = [
  {
    id: '1s',
    label: '1s',
    n: 1,
    l: 0,
    angular: () => 1,
    extent: 5,
    note: 'The ground state: spherical, densest at the nucleus, with no nodes anywhere. The most likely distance to find the electron is one Bohr radius, 52.9 picometres.',
  },
  {
    id: '2s',
    label: '2s',
    n: 2,
    l: 0,
    angular: () => 1,
    extent: 12,
    note: 'Still spherical, but with one radial node — a spherical shell where the probability is exactly zero, with electron density on both sides of it. Nothing crosses that shell; it is simply where the wavefunction changes sign.',
  },
  {
    id: '2p',
    label: '2p',
    n: 2,
    l: 1,
    angular: (cosTheta) => cosTheta,
    extent: 12,
    note: 'Two lobes with a nodal plane through the nucleus. The electron has angular momentum here, but there is still no orbit: the density is static, and the lobes are where a detection is likely, not a path.',
  },
  {
    id: '3p',
    label: '3p',
    n: 3,
    l: 1,
    angular: (cosTheta) => cosTheta,
    extent: 25,
    note: 'Two lobes again, now with an extra radial node inside them — n − 1 = 2 nodes in total, one angular and one radial, exactly as the solutions require.',
  },
  {
    id: '3d',
    label: '3d',
    n: 3,
    l: 2,
    angular: (cosTheta, sinTheta) => sinTheta * cosTheta,
    extent: 22,
    note: 'A four-lobed shape with two nodal planes. These are the orbitals whose directional shape gives transition-metal chemistry its geometry — why complexes are octahedral rather than shapeless.',
  },
];

export default function AtomicOrbitals({ quality, width, height }: VisualizationProps): ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const budget = QUALITY_BUDGETS[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, budget.maxPixelRatio);
  const [index, setIndex] = useState(0);
  const orbital = ORBITALS[index] ?? ORBITALS[0];

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || !orbital || width === 0 || height === 0) return;

    const cssWidth = canvas.clientWidth || width;
    const cssHeight = canvas.clientHeight || height;
    const w = Math.round(cssWidth * dpr);
    const h = Math.round(cssHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    context.clearRect(0, 0, w, h);

    // Compute on a modest grid and let the browser scale it: the map is smooth,
    // and evaluating Laguerre-style polynomials per device pixel is wasteful.
    const grid = quality === 'low' ? 96 : 168;
    const image = context.createImageData(grid, grid);
    const half = orbital.extent;

    let peak = 0;
    const values = new Float32Array(grid * grid);
    for (let j = 0; j < grid; j += 1) {
      const z = -half + (2 * half * j) / (grid - 1);
      for (let i = 0; i < grid; i += 1) {
        const x = -half + (2 * half * i) / (grid - 1);
        const rho = Math.hypot(x, z);
        const cosTheta = rho < 1e-6 ? 1 : z / rho;
        const sinTheta = rho < 1e-6 ? 0 : x / rho;
        const psi = radial(orbital.n, orbital.l, rho) * orbital.angular(cosTheta, sinTheta);
        const density = psi * psi;
        values[j * grid + i] = density;
        if (density > peak) peak = density;
      }
    }

    for (let p = 0; p < grid * grid; p += 1) {
      // A gentle power law, so the outer density is visible beside the core.
      const value = Math.min(1, ((values[p] ?? 0) / (peak || 1)) ** 0.35);
      image.data[p * 4] = Math.round(90 * value + 30 * value * value);
      image.data[p * 4 + 1] = Math.round(200 * value);
      image.data[p * 4 + 2] = Math.round(150 + 105 * value);
      image.data[p * 4 + 3] = Math.round(255 * value);
    }

    const buffer = document.createElement('canvas');
    buffer.width = grid;
    buffer.height = grid;
    buffer.getContext('2d')?.putImageData(image, 0, 0);

    const size = Math.min(w * 0.56, h * 0.88);
    const left = Math.max(4, w * 0.3 - size / 2);
    const top = (h - size) / 2;
    context.imageSmoothingEnabled = true;
    context.drawImage(buffer, left, top, size, size);

    // The nucleus, and the scale.
    const scaleFont = h / 240;
    context.fillStyle = 'rgba(255,214,110,0.95)';
    context.beginPath();
    context.arc(left + size / 2, top + size / 2, 1.8 * scaleFont, 0, Math.PI * 2);
    context.fill();
    context.font = `${9 * scaleFont}px system-ui, sans-serif`;
    context.textAlign = 'left';
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText(
      `${(2 * half * 52.9).toFixed(0)} pm across`,
      left,
      top + size + 12 * scaleFont,
    );

    // ---- Radial probability, P(r) = r² R², beside the map -------------------
    const chartL = w * 0.66;
    const chartR = w - 10 * scaleFont;
    const chartT = h * 0.2;
    const chartB = h * 0.74;
    let radialPeak = 0;
    const radialValues: number[] = [];
    for (let i = 0; i <= 120; i += 1) {
      const rho = (half * i) / 120;
      const value = (rho * radial(orbital.n, orbital.l, rho)) ** 2;
      radialValues.push(value);
      if (value > radialPeak) radialPeak = value;
    }
    context.strokeStyle = 'rgba(148,162,192,0.3)';
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(chartL, chartB);
    context.lineTo(chartR, chartB);
    context.stroke();
    context.strokeStyle = '#66e0d4';
    context.lineWidth = 1.6 * scaleFont;
    context.beginPath();
    radialValues.forEach((value, i) => {
      const x = chartL + ((chartR - chartL) * i) / 120;
      const y = chartB - (value / (radialPeak || 1)) * (chartB - chartT);
      if (i === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.stroke();
    context.fillStyle = 'rgba(148,162,192,0.85)';
    context.fillText('chance at radius r', chartL, chartT - 6 * scaleFont);
    context.fillText('r →', chartL, chartB + 12 * scaleFont);
  }, [dpr, height, orbital, quality, width]);

  useEffect(draw, [draw]);

  return (
    <div className={styles.stack}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.toggles}>
        {ORBITALS.map((entry, i) => (
          <button
            key={entry.id}
            type="button"
            className={styles.toggle}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          >
            {entry.label}
          </button>
        ))}
      </div>
      <p className={styles.epochDetail}>
        <strong>{orbital?.label}.</strong> {orbital?.note} The brightness is the probability of
        finding the electron there if you look — not a cloud of stuff, and not a path. Counting the
        dark regions is a check on the mathematics rather than a matter of taste: every hydrogen
        state has exactly n − 1 nodes.
      </p>
    </div>
  );
}
