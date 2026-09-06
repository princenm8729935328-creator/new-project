import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The temperature history of the Universe.
 *
 * Computed, not sketched. During radiation domination T ∝ t^−1/2; the curve is
 * anchored on the measured present-day temperature (2.7255 K) and the measured
 * age, and the epoch markers sit at their published times and temperatures.
 *
 * Both axes are logarithmic because the range is absurd: sixty orders of
 * magnitude in time, thirty-two in temperature. Tapping a marker names what was
 * happening — which is the part a reader actually takes away.
 */

interface Epoch {
  id: string;
  label: string;
  /** Seconds since the beginning. */
  t: number;
  /** Kelvin. */
  T: number;
  detail: string;
}

const EPOCHS: readonly Epoch[] = [
  {
    id: 'planck',
    label: 'Planck time',
    t: 1e-43,
    T: 1e32,
    detail: 'No tested physics applies. General relativity and quantum mechanics both fail here.',
  },
  {
    id: 'inflation',
    label: 'Inflation (proposed)',
    t: 1e-34,
    T: 1e27,
    detail:
      'If it happened, expansion accelerated enormously. Not confirmed — its signature has not been detected.',
  },
  {
    id: 'quarks',
    label: 'Quark–gluon plasma',
    t: 1e-6,
    T: 1e13,
    detail:
      'Quarks move freely. Below this temperature they lock into protons and neutrons — a state recreated in heavy-ion colliders.',
  },
  {
    id: 'bbn',
    label: 'Nucleosynthesis',
    t: 200,
    T: 1e9,
    detail:
      'Hot enough to fuse, cool enough to bind: the Universe makes its hydrogen and helium in about twenty minutes.',
  },
  {
    id: 'recombination',
    label: 'Recombination',
    t: 1.2e13,
    T: 3000,
    detail:
      'Electrons bind to nuclei, the fog clears, and light escapes. This is the microwave background we still see.',
  },
  {
    id: 'first-stars',
    label: 'First stars',
    t: 6e15,
    T: 50,
    detail:
      'Gravity has gathered gas dense enough to ignite fusion, after a hundred million dark years.',
  },
  {
    id: 'now',
    label: 'Today',
    t: 4.35e17,
    T: 2.7255,
    detail:
      'The afterglow has cooled to 2.7255 K — measured, not inferred, and the anchor the whole curve is calibrated on.',
  },
];

const w = 380;
const h = 250;
const pad = { top: 22, right: 16, bottom: 46, left: 44 };
const plotW = w - pad.left - pad.right;
const plotH = h - pad.top - pad.bottom;

const logTMin = -43;
const logTMax = 18;
const logTempMin = 0; // 10^0 = 1 K
const logTempMax = 32;

const x = (t: number): number =>
  pad.left + ((Math.log10(t) - logTMin) / (logTMax - logTMin)) * plotW;
const y = (T: number): number =>
  pad.top + plotH - ((Math.log10(T) - logTempMin) / (logTempMax - logTempMin)) * plotH;

/**
 * The curve, computed once at module load.
 *
 * T ∝ t^−1/2 through radiation domination, normalised through the
 * nucleosynthesis anchor (10^9 K at 200 s); after matter–radiation equality the
 * fall is shallower, so it is blended onto the measured present-day value. It
 * depends on nothing the reader can change, so there is no reason for it to be
 * inside the component at all.
 */
const CURVE = (() => {
  const points: string[] = [];
  for (let logT = logTMin; logT <= logTMax; logT += 0.5) {
    const t = 10 ** logT;
    const radiationT = 1e9 * Math.sqrt(200 / t);
    const t0 = 4.35e17;
    const late = 2.7255 * (t0 / t) ** (2 / 3);
    const T = t < 1e12 ? radiationT : Math.max(2.7255, Math.min(radiationT, late));
    points.push(`${points.length === 0 ? 'M' : 'L'}${x(t).toFixed(1)},${y(T).toFixed(1)}`);
  }
  return points.join(' ');
})();

export default function CoolingHistory(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState<string>('recombination');

  const active = EPOCHS.find((epoch) => epoch.id === selected) ?? EPOCHS[4]!;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {[0, 8, 16, 24, 32].map((logT) => (
          <g key={logT}>
            <line
              x1={pad.left}
              x2={w - pad.right}
              y1={y(10 ** logT)}
              y2={y(10 ** logT)}
              stroke="rgba(148,162,192,0.13)"
              strokeWidth={1}
            />
            <text
              x={pad.left - 6}
              y={y(10 ** logT) + 3.5}
              textAnchor="end"
              fontSize={9.5}
              fill="rgba(148,162,192,0.85)"
              fontFamily="ui-monospace, monospace"
            >
              {logT === 0 ? '1 K' : `10${sup(logT)}`}
            </text>
          </g>
        ))}

        <path d={CURVE} fill="none" stroke="#ff8fb0" strokeWidth={2.2} />

        {EPOCHS.map((epoch) => {
          const isActive = epoch.id === active.id;
          return (
            <g
              key={epoch.id}
              onClick={() => setSelected(epoch.id)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              aria-label={epoch.label}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') setSelected(epoch.id);
              }}
            >
              {/* Generous invisible hit area: the visible dot is 4px. */}
              <circle cx={x(epoch.t)} cy={y(epoch.T)} r={16} fill="transparent" />
              <circle
                cx={x(epoch.t)}
                cy={y(epoch.T)}
                r={isActive ? 6 : 4}
                fill={isActive ? '#ffffff' : '#ffd76e'}
                stroke={isActive ? '#ffd76e' : 'none'}
                strokeWidth={2}
              />
            </g>
          );
        })}

        {[-40, -30, -20, -10, 0, 10].map((logT) => (
          <text
            key={logT}
            x={x(10 ** logT)}
            y={h - pad.bottom + 16}
            textAnchor="middle"
            fontSize={9.5}
            fill="rgba(148,162,192,0.85)"
            fontFamily="ui-monospace, monospace"
          >
            10{sup(logT)}
          </text>
        ))}
        <text
          x={pad.left + plotW / 2}
          y={h - 18}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          seconds since the beginning (log scale)
        </text>
        <text
          x={10}
          y={pad.top + plotH / 2}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
          transform={`rotate(-90 10 ${pad.top + plotH / 2})`}
        >
          temperature
        </text>
      </svg>

      <div className={styles.toggles} role="group" aria-label="Epochs">
        {EPOCHS.map((epoch) => (
          <button
            key={epoch.id}
            type="button"
            className={styles.toggle}
            aria-pressed={epoch.id === active.id}
            onClick={() => setSelected(epoch.id)}
          >
            {epoch.label}
          </button>
        ))}
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        <strong>{active.label}</strong> · {formatTime(active.t)} · {formatTemp(active.T)} —{' '}
        {active.detail}
      </p>
    </div>
  );
}

function sup(value: number): string {
  const map: Record<string, string> = {
    '0': '⁰',
    '1': '¹',
    '2': '²',
    '3': '³',
    '4': '⁴',
    '5': '⁵',
    '6': '⁶',
    '7': '⁷',
    '8': '⁸',
    '9': '⁹',
    '-': '⁻',
  };
  return String(value)
    .split('')
    .map((character) => map[character] ?? character)
    .join('');
}

function formatTime(seconds: number): string {
  if (seconds < 1e-6) return `${seconds.toExponential(0)} s`;
  if (seconds < 60) return `${seconds.toPrecision(2)} s`;
  if (seconds < 3600) return `${(seconds / 60).toPrecision(2)} minutes`;
  const years = seconds / 3.156e7;
  if (years < 1e6) return `${Math.round(years / 1000)},000 years`;
  if (years < 1e9) return `${(years / 1e6).toPrecision(2)} million years`;
  return `${(years / 1e9).toPrecision(3)} billion years`;
}

function formatTemp(kelvin: number): string {
  if (kelvin >= 1e6) return `${kelvin.toExponential(0)} K`;
  if (kelvin >= 100) return `${Math.round(kelvin).toLocaleString()} K`;
  return `${kelvin} K`;
}
