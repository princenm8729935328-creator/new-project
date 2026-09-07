import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The Lorentz factor, plotted exactly.
 *
 * The shape is the lesson. Readers arrive expecting relativity to be a strange
 * correction that lurks everywhere; the curve shows that it is flat to within a
 * millionth of a percent across every speed a human being has travelled, and
 * only takes off in the last stretch before c. That is simultaneously why
 * Newton survived three centuries and why particle accelerators cannot use him.
 *
 * Every number in the readout is computed from γ rather than tabulated, so the
 * four consequences — dilation, contraction, energy, and the factor itself —
 * can never drift out of step with each other.
 */

const W = 380;
const H = 250;
const PAD = { top: 20, right: 14, bottom: 44, left: 40 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;
const GAMMA_MAX = 10;

const x = (beta: number): number => PAD.left + beta * PLOT_W;
const y = (gamma: number): number =>
  PAD.top + PLOT_H - (Math.min(gamma, GAMMA_MAX) - 1) * (PLOT_H / (GAMMA_MAX - 1));

const gammaOf = (beta: number): number => 1 / Math.sqrt(1 - beta * beta);

/** The curve never changes, so it is built once at module load. */
const CURVE = ((): string => {
  const points: string[] = [];
  for (let beta = 0; beta <= 0.995; beta += 0.002) {
    const gamma = gammaOf(beta);
    if (gamma > GAMMA_MAX) break;
    points.push(`${points.length === 0 ? 'M' : 'L'}${x(beta).toFixed(1)},${y(gamma).toFixed(1)}`);
  }
  return points.join(' ');
})();

interface Marker {
  readonly label: string;
  readonly beta: number;
  readonly note: string;
}

/** Real speeds, for scale. */
const MARKERS: readonly Marker[] = [
  { label: 'Airliner', beta: 8.3e-7, note: '250 m/s' },
  { label: 'Space station', beta: 2.56e-5, note: '7.66 km/s' },
  { label: 'Parker Solar Probe', beta: 6.4e-4, note: '191 km/s — fastest craft ever built' },
  { label: 'Half light speed', beta: 0.5, note: '149,896 km/s' },
  { label: 'Muon in a storage ring', beta: 0.9994, note: 'CERN, 1977' },
];

export default function LorentzFactor(_props: VisualizationProps): ReactNode {
  const [beta, setBeta] = useState(0.5);
  const gamma = gammaOf(beta);

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {[1, 2, 4, 6, 8, 10].map((g) => (
          <g key={g}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y(g)}
              y2={y(g)}
              stroke="rgba(148,162,192,0.14)"
            />
            <text
              x={PAD.left - 6}
              y={y(g) + 3.5}
              textAnchor="end"
              fontSize={9.5}
              fill="rgba(148,162,192,0.85)"
              fontFamily="ui-monospace, monospace"
            >
              {g}
            </text>
          </g>
        ))}

        {/* The region where every human-scale speed lives, all of it flat. */}
        <rect
          x={PAD.left}
          y={PAD.top}
          width={x(0.1) - PAD.left}
          height={PLOT_H}
          fill="rgba(79,224,192,0.07)"
        />
        <text
          x={x(0.05)}
          y={PAD.top + PLOT_H - 8}
          textAnchor="middle"
          fontSize={9}
          fill="rgba(79,224,192,0.8)"
          fontFamily="system-ui, sans-serif"
        >
          everything humans do
        </text>

        <path d={CURVE} fill="none" stroke="#66e0d4" strokeWidth={2.4} />

        <line
          x1={x(beta)}
          x2={x(beta)}
          y1={PAD.top}
          y2={PAD.top + PLOT_H}
          stroke="rgba(102,224,212,0.45)"
          strokeDasharray="3 3"
        />
        <circle cx={x(beta)} cy={y(gamma)} r={5} fill="#66e0d4" />
        {gamma > GAMMA_MAX && (
          <text
            x={Math.min(x(beta) + 6, W - PAD.right - 4)}
            y={PAD.top + 12}
            textAnchor="end"
            fontSize={9.5}
            fill="#66e0d4"
            fontFamily="system-ui, sans-serif"
          >
            off the top of the chart
          </text>
        )}

        {[0, 0.25, 0.5, 0.75, 1].map((b) => (
          <text
            key={b}
            x={x(b)}
            y={PAD.top + PLOT_H + 15}
            textAnchor="middle"
            fontSize={9.5}
            fill="rgba(148,162,192,0.85)"
            fontFamily="ui-monospace, monospace"
          >
            {b}
          </text>
        ))}
        <text
          x={PAD.left + PLOT_W / 2}
          y={H - 16}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          speed, as a fraction of the speed of light
        </text>
        <text
          x={10}
          y={PAD.top + PLOT_H / 2}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
          transform={`rotate(-90 10 ${PAD.top + PLOT_H / 2})`}
        >
          Lorentz factor γ
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Speed</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Speed as a fraction of the speed of light</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={0.9999}
              step={0.0001}
              value={beta}
              onChange={(event) => setBeta(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{beta.toFixed(4)} c</output>
        </div>
      </div>

      <div className={styles.toggles}>
        {MARKERS.map((marker) => (
          <button
            key={marker.label}
            type="button"
            className={styles.toggle}
            aria-pressed={Math.abs(beta - marker.beta) < 1e-9}
            onClick={() => setBeta(marker.beta)}
          >
            {marker.label}
          </button>
        ))}
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        At <strong>{beta < 0.001 ? beta.toExponential(1) : beta.toFixed(4)} c</strong>, γ ={' '}
        <strong>{gamma < 1.001 ? gamma.toFixed(9) : gamma.toFixed(3)}</strong>. One second on the
        moving clock takes {gamma < 1.001 ? gamma.toFixed(9) : gamma.toFixed(3)} seconds here; a
        metre-long object measures {(100 / gamma).toFixed(gamma < 1.001 ? 6 : 2)} cm; and getting
        there costs {gamma - 1 < 0.001 ? (gamma - 1).toExponential(1) : (gamma - 1).toFixed(2)}{' '}
        times the object’s rest energy in kinetic energy.
      </p>
    </div>
  );
}
