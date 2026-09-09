import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Stopping voltage against frequency, with an intensity control that does nothing to it.
 *
 * The straight line is eV_stop = hf − φ. Its slope is h/e and nothing else, which
 * is how Millikan turned an experiment about electrons leaving metal into a
 * measurement of Planck's constant — and had to concede the result even though
 * he had set out to disprove Einstein's account.
 *
 * The intensity slider is the argument. Brighter light produces more electrons
 * and never gives any one of them more energy. A wave picture cannot produce
 * that: pour in more energy and each electron should eventually accumulate
 * enough to escape, however low the frequency. It never does.
 */

/** h/e in volt-seconds. Both constants are exact in the SI, so this is exact. */
const H_OVER_E = 4.135667696e-15;

interface Metal {
  readonly name: string;
  /** Work function in electronvolts. Surface-dependent; these are typical values. */
  readonly workFunction: number;
}

const METALS: readonly Metal[] = [
  { name: 'Caesium', workFunction: 2.14 },
  { name: 'Sodium', workFunction: 2.36 },
  { name: 'Zinc', workFunction: 4.33 },
  { name: 'Platinum', workFunction: 5.65 },
];

const W = 380;
const H = 274;
const PLOT_L = 42;
const PLOT_R = W - 96;
const PLOT_T = 34;
const PLOT_B = H - 54;

const F_MAX = 2.2e15; // Hz
const V_MAX = 4.5; // volts

const xOf = (f: number): number => PLOT_L + (f / F_MAX) * (PLOT_R - PLOT_L);
const yOf = (v: number): number => PLOT_B - (v / V_MAX) * (PLOT_B - PLOT_T);

export default function PhotoelectricEffect(_props: VisualizationProps): ReactNode {
  const [metalIndex, setMetalIndex] = useState(0);
  const [frequency, setFrequency] = useState(1.2e15);
  const [intensity, setIntensity] = useState(0.5);

  const metal = METALS[metalIndex] ?? METALS[0];
  const workFunction = metal?.workFunction ?? 2.14;
  const thresholdF = workFunction / H_OVER_E;
  const emitting = frequency > thresholdF;
  const stopping = emitting ? H_OVER_E * frequency - workFunction : 0;
  /** Photocurrent is proportional to photon arrival rate, and to nothing else. */
  const current = emitting ? intensity : 0;
  const wavelengthNm = (2.99792458e8 / frequency) * 1e9;

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
          Stopping voltage against light frequency — {metal?.name ?? 'Caesium'}
        </text>
        <text x={10} y={26} fontSize={8.5} fill="rgba(148,162,192,0.75)">
          slope = h/e = 4.136 × 10⁻¹⁵ V s
        </text>

        {/* Axes. */}
        <line x1={PLOT_L} x2={PLOT_R} y1={PLOT_B} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        <line x1={PLOT_L} x2={PLOT_L} y1={PLOT_T} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        {[0, 1, 2, 3, 4].map((volt) => (
          <g key={volt}>
            <line
              x1={PLOT_L}
              x2={PLOT_R}
              y1={yOf(volt)}
              y2={yOf(volt)}
              stroke="rgba(148,162,192,0.09)"
            />
            <text
              x={PLOT_L - 4}
              y={yOf(volt) + 3}
              textAnchor="end"
              fontSize={7.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {volt} V
            </text>
          </g>
        ))}
        {[0, 0.5, 1, 1.5, 2].map((peta) => (
          <text
            key={peta}
            x={xOf(peta * 1e15)}
            y={PLOT_B + 12}
            textAnchor="middle"
            fontSize={7.5}
            fill="rgba(148,162,192,0.8)"
            fontFamily="ui-monospace, monospace"
          >
            {peta}
          </text>
        ))}
        <text
          x={(PLOT_L + PLOT_R) / 2}
          y={PLOT_B + 24}
          textAnchor="middle"
          fontSize={8.5}
          fill="rgba(148,162,192,0.8)"
          fontFamily="system-ui, sans-serif"
        >
          frequency, 10¹⁵ Hz
        </text>

        {/* No emission at all below threshold, at any brightness. */}
        <rect
          x={PLOT_L}
          y={PLOT_T}
          width={Math.max(0, xOf(thresholdF) - PLOT_L)}
          height={PLOT_B - PLOT_T}
          fill="rgba(255,143,110,0.09)"
        />
        <text
          x={PLOT_L + 4}
          y={PLOT_T + 12}
          fontSize={7.5}
          fill="rgba(255,143,110,0.95)"
          fontFamily="system-ui, sans-serif"
        >
          no electrons at any brightness
        </text>

        {/* The Einstein line, drawn only where electrons actually come out. */}
        <line
          x1={xOf(thresholdF)}
          x2={xOf(F_MAX)}
          y1={yOf(0)}
          y2={yOf(H_OVER_E * F_MAX - workFunction)}
          stroke="#66e0d4"
          strokeWidth={2}
        />
        <circle cx={xOf(thresholdF)} cy={yOf(0)} r={3.5} fill="#ffd66e" />
        <text
          x={xOf(thresholdF) + 5}
          y={yOf(0) - 6}
          fontSize={7.5}
          fill="#ffd66e"
          fontFamily="system-ui, sans-serif"
        >
          threshold f₀ = φ/h
        </text>

        {/* The reader's setting. */}
        <circle
          cx={xOf(Math.min(frequency, F_MAX))}
          cy={yOf(stopping)}
          r={5}
          fill="none"
          stroke="#a97bff"
          strokeWidth={2}
        />

        {/* Current gauge: the only thing intensity moves. */}
        <text
          x={PLOT_R + 12}
          y={PLOT_T - 6}
          fontSize={7.5}
          fill="rgba(148,162,192,0.85)"
          fontFamily="system-ui, sans-serif"
        >
          current
        </text>
        <rect
          x={PLOT_R + 12}
          y={PLOT_T}
          width={22}
          height={PLOT_B - PLOT_T}
          fill="rgba(148,162,192,0.08)"
          stroke="rgba(148,162,192,0.3)"
        />
        <rect
          x={PLOT_R + 12}
          y={PLOT_B - current * (PLOT_B - PLOT_T)}
          width={22}
          height={current * (PLOT_B - PLOT_T)}
          fill="#a97bff"
        />
        <text
          x={PLOT_R + 40}
          y={PLOT_T + 20}
          fontSize={7.5}
          fill="rgba(148,162,192,0.85)"
          fontFamily="system-ui, sans-serif"
        >
          rises with
        </text>
        <text
          x={PLOT_R + 40}
          y={PLOT_T + 30}
          fontSize={7.5}
          fill="rgba(148,162,192,0.85)"
          fontFamily="system-ui, sans-serif"
        >
          brightness
        </text>
        <text
          x={PLOT_R + 40}
          y={PLOT_T + 46}
          fontSize={7.5}
          fill="#ffd66e"
          fontFamily="system-ui, sans-serif"
        >
          energy per
        </text>
        <text
          x={PLOT_R + 40}
          y={PLOT_T + 56}
          fontSize={7.5}
          fill="#ffd66e"
          fontFamily="system-ui, sans-serif"
        >
          electron does
        </text>
        <text
          x={PLOT_R + 40}
          y={PLOT_T + 66}
          fontSize={7.5}
          fill="#ffd66e"
          fontFamily="system-ui, sans-serif"
        >
          not
        </text>
      </svg>

      <div className={styles.toggles}>
        {METALS.map((entry, index) => (
          <button
            key={entry.name}
            type="button"
            className={styles.toggle}
            aria-pressed={index === metalIndex}
            onClick={() => setMetalIndex(index)}
          >
            {entry.name}
          </button>
        ))}
      </div>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Frequency</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Light frequency, hertz</span>
            <input
              className={styles.slider}
              type="range"
              min={1e14}
              max={F_MAX}
              step={1e13}
              value={frequency}
              onChange={(event) => setFrequency(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{wavelengthNm.toFixed(0)} nm</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Brightness</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Light intensity</span>
            <input
              className={styles.slider}
              type="range"
              min={0.05}
              max={1}
              step={0.05}
              value={intensity}
              onChange={(event) => setIntensity(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>×{(intensity * 20).toFixed(0)}</output>
        </div>
      </div>

      <p className={styles.epochDetail}>
        {emitting ? (
          <>
            Electrons leave with at most <strong>{stopping.toFixed(2)} eV</strong> of kinetic
            energy, so it takes <strong>{stopping.toFixed(2)} V</strong> to stop them. Turn the
            brightness up and more electrons come out, every one of them still stopped by exactly{' '}
            {stopping.toFixed(2)} volts.
          </>
        ) : (
          <>
            Below the threshold of <strong>{(thresholdF / 1e15).toFixed(2)} × 10¹⁵ Hz</strong> for{' '}
            {metal?.name.toLowerCase() ?? 'caesium'},{' '}
            <strong>no electrons are emitted at all</strong> — and turning the brightness to maximum
            changes nothing. A wave would eventually deliver enough energy; a stream of quanta each
            too small to do the job never will.
          </>
        )}{' '}
        Work function {workFunction.toFixed(2)} eV — an approximate value, because the work function
        depends on the crystal face and the cleanliness of the surface.
      </p>
    </div>
  );
}
