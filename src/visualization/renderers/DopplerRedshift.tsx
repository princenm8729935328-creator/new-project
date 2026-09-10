import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Two different reasons light gets redder, kept apart.
 *
 * Almost every popular account collapses these into one: "galaxies are moving
 * away, so their light is Doppler shifted". That is wrong for anything beyond
 * the nearby Universe, and the wrongness is not pedantic — it is why quoting a
 * "velocity" for a redshift-7 galaxy produces a number larger than the speed of
 * light and means nothing.
 *
 * Doppler shift is motion through space and uses the relativistic formula.
 * Cosmological redshift is the expansion of space during the light's journey
 * and uses the ratio of scale factors. They agree at small redshift and diverge
 * badly above about 0.1, which the comparison panel shows.
 */

const C_KMS = 299792.458;

/** Relativistic Doppler: 1+z = √((1+β)/(1−β)). */
const dopplerZ = (beta: number): number => Math.sqrt((1 + beta) / (1 - beta)) - 1;

/** Inverse, for the comparison panel: what β would give this z? */
const betaFromZ = (z: number): number => ((1 + z) ** 2 - 1) / ((1 + z) ** 2 + 1);

/**
 * Look-back time in a flat ΛCDM universe with Ωm = 0.315, H₀ = 67.4 km/s/Mpc,
 * integrated numerically.
 */
function lookbackGyr(z: number): number {
  const OM = 0.315;
  const OL = 0.685;
  const HUBBLE_TIME = 14.51; // Gyr, for H₀ = 67.4
  const steps = 300;
  let sum = 0;
  for (let i = 0; i < steps; i += 1) {
    const zi = ((i + 0.5) / steps) * z;
    sum += 1 / ((1 + zi) * Math.sqrt(OM * (1 + zi) ** 3 + OL));
  }
  return HUBBLE_TIME * sum * (z / steps);
}

interface Line {
  readonly rest: number;
  readonly label: string;
}

const LINES: readonly Line[] = [
  { rest: 393.4, label: 'Ca K' },
  { rest: 410.2, label: 'Hδ' },
  { rest: 434.0, label: 'Hγ' },
  { rest: 486.1, label: 'Hβ' },
  { rest: 589.0, label: 'Na D' },
  { rest: 656.3, label: 'Hα' },
];

const W = 380;
const H = 248;
const LEFT = 14;
const RIGHT = 14;
const PLOT_W = W - LEFT - RIGHT;
const NM_MIN = 350;
const NM_MAX = 1400;
const px = (nm: number): number => LEFT + ((nm - NM_MIN) / (NM_MAX - NM_MIN)) * PLOT_W;

type Mode = 'doppler' | 'cosmological';

export default function DopplerRedshift(_props: VisualizationProps): ReactNode {
  const [mode, setMode] = useState<Mode>('doppler');
  /** Velocity as a fraction of c, for Doppler mode. */
  const [beta, setBeta] = useState(0.02);
  /** Redshift, for cosmological mode. */
  const [z, setZ] = useState(1);

  const shift = mode === 'doppler' ? dopplerZ(beta) : z;
  const scaleRatio = 1 + shift;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={LEFT} y={14} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          rest wavelengths (top) and observed wavelengths (bottom)
        </text>

        {/* Rest frame. */}
        <rect x={LEFT} y={24} width={PLOT_W} height={22} fill="rgba(148,162,192,0.12)" />
        {LINES.map((line) => (
          <g key={`r-${line.rest}`}>
            <line
              x1={px(line.rest)}
              x2={px(line.rest)}
              y1={24}
              y2={46}
              stroke="#e2e9f6"
              strokeWidth={1.6}
            />
          </g>
        ))}
        <text x={LEFT} y={58} fontSize={8.5} fill="rgba(148,162,192,0.9)">
          in the laboratory
        </text>

        {/* Shifted frame. */}
        <rect x={LEFT} y={76} width={PLOT_W} height={22} fill="rgba(148,162,192,0.12)" />
        {LINES.map((line) => {
          const obs = line.rest * scaleRatio;
          const inRange = obs >= NM_MIN && obs <= NM_MAX;
          return inRange ? (
            <g key={`o-${line.rest}`}>
              <line
                x1={px(obs)}
                x2={px(obs)}
                y1={76}
                y2={98}
                stroke={shift >= 0 ? '#ff8f6e' : '#7fc7ff'}
                strokeWidth={1.6}
              />
              <line
                x1={px(line.rest)}
                x2={px(obs)}
                y1={50}
                y2={72}
                stroke="rgba(148,162,192,0.35)"
                strokeWidth={0.8}
              />
            </g>
          ) : null;
        })}
        <text
          x={LEFT + PLOT_W}
          y={110}
          textAnchor="end"
          fontSize={8.5}
          fill="rgba(148,162,192,0.9)"
        >
          as observed
        </text>

        {/* Visible band marker. */}
        <rect
          x={px(380)}
          y={100}
          width={px(700) - px(380)}
          height={3}
          fill="rgba(226,233,246,0.35)"
        />
        <text x={px(540)} y={112} textAnchor="middle" fontSize={8} fill="rgba(148,162,192,0.85)">
          visible band
        </text>

        {[400, 700, 1000, 1300].map((tick) => (
          <text
            key={tick}
            x={px(tick)}
            y={126}
            textAnchor="middle"
            fontSize={8.5}
            fill="rgba(148,162,192,0.8)"
            fontFamily="ui-monospace, monospace"
          >
            {tick}
          </text>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={138}
          textAnchor="middle"
          fontSize={9}
          fill="rgba(148,162,192,0.9)"
        >
          wavelength, nm
        </text>

        {/* Divergence comparison. */}
        <text x={LEFT} y={162} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          what velocity would the Doppler formula give for this redshift?
        </text>
        {[0.01, 0.1, 0.5, 1, 3, 7].map((zz, i) => {
          const y = 176 + Math.floor(i / 2) * 22;
          const x = LEFT + (i % 2) * 178;
          const naive = zz * C_KMS;
          const rel = betaFromZ(zz) * C_KMS;
          return (
            <g key={zz}>
              <text
                x={x}
                y={y}
                fontSize={8.5}
                fill="rgba(226,233,246,0.9)"
                fontFamily="ui-monospace, monospace"
              >
                z={zz}: naive cz={Math.round(naive / 1000)}k
              </text>
              <text
                x={x}
                y={y + 10}
                fontSize={8.5}
                fill={zz > 0.1 ? '#ff8f6e' : '#4fe0c0'}
                fontFamily="ui-monospace, monospace"
              >
                {'  '}relativistic {Math.round(rel / 1000)}k km/s
              </text>
            </g>
          );
        })}
        <text x={LEFT} y={242} fontSize={8.5} fill="rgba(255,143,110,0.95)">
          above z ≈ 0.1 the two disagree, and neither is a real recession speed.
        </text>
      </svg>

      <div className={styles.toggles}>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={mode === 'doppler'}
          onClick={() => setMode('doppler')}
        >
          Motion through space
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={mode === 'cosmological'}
          onClick={() => setMode('cosmological')}
        >
          Expansion of space
        </button>
      </div>

      <div className={styles.controlRows}>
        {mode === 'doppler' ? (
          <div className={styles.controlRow}>
            <span className={styles.controlName}>Velocity</span>
            <label className={styles.sliderLabel}>
              <span className="ds-visually-hidden">
                Source velocity as a fraction of the speed of light
              </span>
              <input
                className={styles.slider}
                type="range"
                min={-0.4}
                max={0.4}
                step={0.002}
                value={beta}
                onChange={(event) => setBeta(Number(event.target.value))}
              />
            </label>
            <output className={styles.value}>{(beta * C_KMS).toFixed(0)} km/s</output>
          </div>
        ) : (
          <div className={styles.controlRow}>
            <span className={styles.controlName}>Redshift</span>
            <label className={styles.sliderLabel}>
              <span className="ds-visually-hidden">Cosmological redshift</span>
              <input
                className={styles.slider}
                type="range"
                min={0}
                max={9}
                step={0.05}
                value={z}
                onChange={(event) => setZ(Number(event.target.value))}
              />
            </label>
            <output className={styles.value}>z = {z.toFixed(2)}</output>
          </div>
        )}
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        {mode === 'doppler' ? (
          <>
            <strong>Doppler shift.</strong> The source is genuinely moving through space at{' '}
            {(beta * C_KMS).toFixed(0)} km/s, {beta >= 0 ? 'away from' : 'toward'} us, giving z ={' '}
            {shift.toFixed(4)}. Here the velocity is a real velocity and the formula is exact — this
            is how a star’s motion, a binary orbit and an exoplanet’s tug are all measured.
          </>
        ) : (
          <>
            <strong>Cosmological redshift.</strong> Nothing is moving through space. The wavelength
            was stretched by <strong>{scaleRatio.toFixed(2)}×</strong> because space itself expanded
            by that factor while the light was in transit — the Universe was{' '}
            {(100 / scaleRatio).toFixed(0)}% of its present size when this light left. Look-back
            time: <strong>{lookbackGyr(z).toPrecision(3)} billion years</strong>. This figure
            deliberately declines to quote a velocity, because there is no velocity here to quote.
          </>
        )}
      </p>
    </div>
  );
}
