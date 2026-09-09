import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The primordial tilt, drawn so the measurement and the interpretation stay apart.
 *
 * The measurement is real and tight: n_s = 0.9649 ± 0.0042. Exact scale
 * invariance, n_s = 1, sits about eight standard deviations away and is excluded.
 *
 * The interpretation — that the fluctuations began as quantum fluctuations of a
 * field, stretched to cosmic size by inflation — is a well-motivated account that
 * fits the data. It is not a direct observation, and the prediction that would
 * make it decisive, primordial gravitational waves, has been searched for and
 * not found: the tensor-to-scalar ratio is bounded below 0.036.
 *
 * The figure is built so a reader cannot come away thinking the second is as
 * settled as the first.
 */

const N_S = 0.9649;
const N_S_ERROR = 0.0042;
const R_LIMIT = 0.036;

const W = 380;
const H = 288;
const PLOT_L = 44;
const PLOT_R = W - 16;
const PLOT_T = 40;
const PLOT_B = H - 82;

/** Log₁₀ of wavenumber k, in Mpc⁻¹. */
const LOG_K_MIN = -4;
const LOG_K_MAX = -0.5;
const K_PIVOT = 0.05;

const xOf = (logK: number): number =>
  PLOT_L + ((logK - LOG_K_MIN) / (LOG_K_MAX - LOG_K_MIN)) * (PLOT_R - PLOT_L);
/** Relative power, plotted over a narrow band because the tilt is small. */
const yOf = (relative: number): number =>
  PLOT_B - ((relative - 0.7) / (1.5 - 0.7)) * (PLOT_B - PLOT_T);

const powerOf = (logK: number, ns: number): number => (10 ** logK / K_PIVOT) ** (ns - 1);

export default function PrimordialFluctuations(_props: VisualizationProps): ReactNode {
  const [ns, setNs] = useState(N_S);
  const sigmasFromFlat = Math.abs(1 - N_S) / N_S_ERROR;
  const sigmasFromMeasured = Math.abs(ns - N_S) / N_S_ERROR;

  const line = (value: number): string =>
    Array.from({ length: 61 }, (_, index) => {
      const logK = LOG_K_MIN + ((LOG_K_MAX - LOG_K_MIN) * index) / 60;
      return `${index === 0 ? 'M' : 'L'}${xOf(logK).toFixed(2)},${yOf(powerOf(logK, value)).toFixed(2)}`;
    }).join(' ');

  const bandTop = line(N_S + N_S_ERROR);
  const bandBottom = line(N_S - N_S_ERROR);

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
          Primordial power spectrum, P(k) ∝ k^(n_s − 1)
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.72)">
          measured tilt from Planck 2018; the quantum origin is an inference from it
        </text>

        <line x1={PLOT_L} x2={PLOT_R} y1={PLOT_B} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        <line x1={PLOT_L} x2={PLOT_L} y1={PLOT_T} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        {[0.8, 1, 1.2, 1.4].map((tick) => (
          <g key={tick}>
            <line
              x1={PLOT_L}
              x2={PLOT_R}
              y1={yOf(tick)}
              y2={yOf(tick)}
              stroke="rgba(148,162,192,0.08)"
            />
            <text
              x={PLOT_L - 4}
              y={yOf(tick) + 3}
              textAnchor="end"
              fontSize={7.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {tick.toFixed(1)}
            </text>
          </g>
        ))}
        {[-4, -3, -2, -1].map((decade) => (
          <text
            key={decade}
            x={xOf(decade)}
            y={PLOT_B + 12}
            textAnchor="middle"
            fontSize={7.5}
            fill="rgba(148,162,192,0.8)"
            fontFamily="ui-monospace, monospace"
          >
            1e{decade}
          </text>
        ))}
        <text
          x={(PLOT_L + PLOT_R) / 2}
          y={PLOT_B + 24}
          textAnchor="middle"
          fontSize={8}
          fill="rgba(148,162,192,0.8)"
        >
          wavenumber k, Mpc⁻¹ — larger scales to the left
        </text>
        <text x={12} y={PLOT_T - 6} fontSize={8} fill="rgba(148,162,192,0.8)">
          relative power
        </text>

        {/* Exact scale invariance: what a flat spectrum would look like. */}
        <line
          x1={PLOT_L}
          x2={PLOT_R}
          y1={yOf(1)}
          y2={yOf(1)}
          stroke="rgba(255,143,110,0.75)"
          strokeDasharray="4 3"
        />
        <text
          x={PLOT_R - 4}
          y={yOf(1) - 5}
          textAnchor="end"
          fontSize={7.5}
          fill="rgba(255,143,110,0.95)"
        >
          exactly scale-invariant, n_s = 1 — excluded at {sigmasFromFlat.toFixed(1)}σ
        </text>

        {/* The Planck measurement band. */}
        <path
          d={`${bandTop} L${xOf(LOG_K_MAX)},${yOf(powerOf(LOG_K_MAX, N_S - N_S_ERROR))} ${bandBottom.replace('M', 'L')} Z`}
          fill="rgba(102,224,212,0.16)"
        />
        <path d={line(N_S)} fill="none" stroke="#66e0d4" strokeWidth={2} />

        {/* Whatever the reader has dialled in. */}
        <path d={line(ns)} fill="none" stroke="#a97bff" strokeWidth={1.6} strokeDasharray="3 2" />
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>n_s</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Spectral index</span>
            <input
              className={styles.slider}
              type="range"
              min={0.9}
              max={1.06}
              step={0.001}
              value={ns}
              onChange={(event) => setNs(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{ns.toFixed(3)}</output>
        </div>
      </div>

      <p className={styles.epochDetail}>
        <strong>Measured:</strong> n_s = {N_S.toFixed(4)} ± {N_S_ERROR.toFixed(4)}. Your setting of{' '}
        {ns.toFixed(3)} is <strong>{sigmasFromMeasured.toFixed(1)}σ</strong> from that. The tilt is
        small but decisively non-zero: fluctuations were slightly stronger on large scales than on
        small ones.
      </p>
      <p className={styles.epochDetail}>
        <strong>Inferred, not observed:</strong> that these fluctuations began as quantum
        fluctuations of a field and were stretched to cosmic size by inflation. Simple inflationary
        models predict a slight red tilt of roughly this size, which is a genuine success of the
        idea. But inflation is a class of models rather than one theory, its energy scale is
        unknown, and its distinctive prediction — primordial gravitational waves — has not been
        detected, with the tensor-to-scalar ratio bounded below {R_LIMIT}. So: a strongly supported
        inference, and not a settled fact. Quantum mechanics has not explained the origin of the
        Universe.
      </p>
    </div>
  );
}
