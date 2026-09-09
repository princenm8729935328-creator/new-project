import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * A Gaussian and its Fourier transform, with the product of their widths pinned.
 *
 * The reason to draw the pair rather than a particle being poked by a photon is
 * that the uncertainty relation is a fact about the pair. Any function that is
 * narrow has a transform that is wide; this is true of sound, of radio pulses
 * and of ocean swell, and it was true long before quantum mechanics. What
 * quantum mechanics adds is that the position and momentum descriptions of a
 * particle *are* such a pair, with ħ setting the scale.
 *
 * So the relation is not a statement about clumsy instruments. It holds for the
 * state itself, before any apparatus is introduced.
 */

/** Reduced Planck constant, J s. */
const HBAR = 1.054571817e-34;
const ELECTRON_MASS = 9.1093837015e-31;

const W = 380;
const H = 300;
const PAD_L = 34;
const PAD_R = W - 12;
const TOP_T = 34;
const TOP_B = 146;
const BOT_T = 178;
const BOT_B = 268;

/** Normalised Gaussian probability density, scaled to fill its own panel. */
function gaussianPath(sigma: number, top: number, bottom: number, halfRange: number): string {
  return Array.from({ length: 121 }, (_, index) => {
    const u = -halfRange + (2 * halfRange * index) / 120;
    const value = Math.exp(-(u * u) / (2 * sigma * sigma));
    const x = PAD_L + ((u + halfRange) / (2 * halfRange)) * (PAD_R - PAD_L);
    const y = bottom - value * (bottom - top);
    return `${index === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');
}

/** Marks ±σ on a panel, so the width is visible rather than asserted. */
function sigmaMarks(
  sigma: number,
  top: number,
  bottom: number,
  halfRange: number,
): { left: number; right: number } {
  const scale = (PAD_R - PAD_L) / (2 * halfRange);
  const centre = (PAD_L + PAD_R) / 2;
  void top;
  void bottom;
  return { left: centre - sigma * scale, right: centre + sigma * scale };
}

export default function WavepacketUncertainty(_props: VisualizationProps): ReactNode {
  /** Position width in arbitrary units; the momentum width follows from it. */
  const [sigmaX, setSigmaX] = useState(1);
  const sigmaP = 0.5 / sigmaX; // ħ = 1 in these units, so σₓσ_p = ½ exactly.

  const posHalf = 4;
  const momHalf = 4;
  // Each panel is drawn in its own units, so a very narrow curve stays visible.
  const posMarks = sigmaMarks(Math.min(sigmaX, posHalf * 0.9), TOP_T, TOP_B, posHalf);
  const momMarks = sigmaMarks(Math.min(sigmaP, momHalf * 0.9), BOT_T, BOT_B, momHalf);

  /** The same relation in laboratory units, for an electron in an atom. */
  const confinementM = 1e-10;
  const speedSpread = HBAR / (2 * confinementM * ELECTRON_MASS);

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text
          x={10}
          y={14}
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          One state, described two ways. Squeeze either curve and the other spreads.
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.72)">
          the lower curve is the exact Fourier transform of the upper one
        </text>

        {/* Position panel. */}
        <line x1={PAD_L} x2={PAD_R} y1={TOP_B} y2={TOP_B} stroke="rgba(148,162,192,0.35)" />
        <rect
          x={posMarks.left}
          y={TOP_T}
          width={posMarks.right - posMarks.left}
          height={TOP_B - TOP_T}
          fill="rgba(102,224,212,0.1)"
        />
        <path
          d={gaussianPath(sigmaX, TOP_T, TOP_B, posHalf)}
          fill="none"
          stroke="#66e0d4"
          strokeWidth={2}
        />
        <text x={PAD_L} y={TOP_T - 4} fontSize={8.5} fill="#66e0d4">
          probability in position |ψ(x)|²
        </text>
        <text
          x={PAD_R}
          y={TOP_B + 11}
          textAnchor="end"
          fontSize={7.5}
          fill="rgba(148,162,192,0.75)"
        >
          position →
        </text>

        {/* Momentum panel. */}
        <line x1={PAD_L} x2={PAD_R} y1={BOT_B} y2={BOT_B} stroke="rgba(148,162,192,0.35)" />
        <rect
          x={momMarks.left}
          y={BOT_T}
          width={momMarks.right - momMarks.left}
          height={BOT_B - BOT_T}
          fill="rgba(255,143,110,0.1)"
        />
        <path
          d={gaussianPath(sigmaP, BOT_T, BOT_B, momHalf)}
          fill="none"
          stroke="#ff8f6e"
          strokeWidth={2}
        />
        <text x={PAD_L} y={BOT_T - 4} fontSize={8.5} fill="#ff8f6e">
          probability in momentum |φ(p)|²
        </text>
        <text
          x={PAD_R}
          y={BOT_B + 11}
          textAnchor="end"
          fontSize={7.5}
          fill="rgba(148,162,192,0.75)"
        >
          momentum →
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Width σₓ</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Position width</span>
            <input
              className={styles.slider}
              type="range"
              min={0.25}
              max={3}
              step={0.01}
              value={sigmaX}
              onChange={(event) => setSigmaX(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>σₚ = {sigmaP.toFixed(2)}</output>
        </div>
      </div>

      <p className={styles.epochDetail}>
        σₓ × σₚ = <strong>{(sigmaX * sigmaP).toFixed(2)} ħ</strong> — and it stays at 0.50 for every
        position of the slider, because a Gaussian sits exactly on the bound σₓσₚ = ħ/2. No setting
        can push it below. This is a property of the state, not of an instrument: it is there before
        anything measures anything. In laboratory units, confining an electron to about{' '}
        <strong>0.1 nm</strong> — roughly the size of an atom — forces a momentum spread
        corresponding to a speed of about <strong>{(speedSpread / 1000).toFixed(0)} km/s</strong>.
        That unavoidable motion is what holds the electron away from the nucleus and gives atoms
        their size.
      </p>
    </div>
  );
}
