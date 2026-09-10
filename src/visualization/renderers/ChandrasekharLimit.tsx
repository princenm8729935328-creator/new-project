import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The white dwarf mass–radius relation, with the limit as an asymptote.
 *
 * The curve is Nauenberg's (1972) closed-form interpolation between the
 * non-relativistic degenerate limit, where R ∝ M^(-1/3), and the ultra-
 * relativistic limit, where the radius collapses to zero at a finite mass. It
 * is a first-principles result, not a fit: the limiting mass falls out of the
 * electron degeneracy pressure and special relativity alone, which is why
 * Chandrasekhar could calculate it on a boat in 1930 before anyone had measured
 * a white dwarf properly.
 *
 * The inverse relation is the whole point. Every ordinary object gets bigger
 * when you add mass to it. A white dwarf gets smaller, and there is a mass at
 * which "smaller" becomes "nothing".
 */

const M_CH = 1.456; // solar masses, for μe = 2
const R_SUN_KM = 695700;

/** Nauenberg (1972): R/R☉ = 0.0225/μe · √(1 − (M/M_ch)^(4/3)) / (M/M☉)^(1/3). */
function radiusSolar(mass: number): number {
  const ratio = mass / M_CH;
  const inner = 1 - ratio ** (4 / 3);
  if (inner <= 0) return 0;
  return (0.0225 / 2) * Math.sqrt(inner) * (2 / mass) ** (1 / 3) * 2 ** (1 / 3);
}

const W = 380;
const H = 222;
const LEFT = 44;
const RIGHT = 14;
const TOP = 24;
const BOTTOM = 42;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

const M_MIN = 0.2;
const M_MAX = 1.5;

const px = (m: number): number => LEFT + ((m - M_MIN) / (M_MAX - M_MIN)) * PLOT_W;
/* The vertical range is taken from the curve itself, so nothing is clipped. */
const R_MAX = radiusSolar(M_MIN) * 1.06;
const py = (r: number): number => TOP + PLOT_H - (Math.min(r, R_MAX) / R_MAX) * PLOT_H;

const CURVE = Array.from({ length: 160 }, (_, i) => {
  const m = M_MIN + (i / 159) * (M_CH - 0.002 - M_MIN);
  return `${i === 0 ? 'M' : 'L'}${px(m).toFixed(2)},${py(radiusSolar(m)).toFixed(2)}`;
}).join(' ');

/** Measured comparison points: Sirius B and Earth, at the same scale. */
const SIRIUS_B_MASS = 1.018;
const SIRIUS_B_RADIUS_KM = 5850;
const EARTH_RADIUS_KM = 6371;

export default function ChandrasekharLimit(_props: VisualizationProps): ReactNode {
  const [mass, setMass] = useState(0.6);
  const rSolar = radiusSolar(mass);
  const rKm = rSolar * R_SUN_KM;
  const beyond = mass >= M_CH;
  /** Mean density, kg/m³. */
  const density = beyond ? Infinity : (mass * 1.989e30) / ((4 / 3) * Math.PI * (rKm * 1000) ** 3);

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <rect
          x={px(M_CH)}
          y={TOP}
          width={LEFT + PLOT_W - px(M_CH)}
          height={PLOT_H}
          fill="rgba(255,143,110,0.08)"
        />

        {[0, R_MAX * 0.25, R_MAX * 0.5, R_MAX * 0.75, R_MAX].map((tick) => (
          <g key={tick}>
            <line
              x1={LEFT}
              x2={LEFT + PLOT_W}
              y1={py(tick)}
              y2={py(tick)}
              stroke="rgba(148,162,192,0.13)"
            />
            <text
              x={LEFT - 5}
              y={py(tick) + 3.5}
              textAnchor="end"
              fontSize={8.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {Math.round((tick * R_SUN_KM) / 100) * 100 === 0
                ? 0
                : Math.round((tick * R_SUN_KM) / 100) * 100}
            </text>
          </g>
        ))}
        <text x={3} y={TOP - 10} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          radius, kilometres
        </text>

        {[0.2, 0.6, 1, 1.4].map((tick) => (
          <text
            key={tick}
            x={px(tick)}
            y={TOP + PLOT_H + 13}
            textAnchor="middle"
            fontSize={9}
            fill="rgba(148,162,192,0.8)"
            fontFamily="ui-monospace, monospace"
          >
            {tick}
          </text>
        ))}
        <text
          x={LEFT + PLOT_W / 2}
          y={TOP + PLOT_H + 26}
          textAnchor="middle"
          fontSize={9.5}
          fill="rgba(148,162,192,0.9)"
        >
          mass ÷ Sun’s mass
        </text>

        {/* Earth's radius as a reference line: white dwarfs are planet-sized. */}
        <line
          x1={LEFT}
          x2={LEFT + PLOT_W}
          y1={py(EARTH_RADIUS_KM / R_SUN_KM)}
          y2={py(EARTH_RADIUS_KM / R_SUN_KM)}
          stroke="rgba(79,224,192,0.5)"
          strokeDasharray="4 3"
        />
        <text
          x={LEFT + 4}
          y={py(EARTH_RADIUS_KM / R_SUN_KM) - 5}
          fontSize={8.5}
          fill="rgba(79,224,192,0.9)"
        >
          Earth’s radius
        </text>

        <path d={CURVE} fill="none" stroke="#8fb8ff" strokeWidth={2} />

        <line
          x1={px(M_CH)}
          x2={px(M_CH)}
          y1={TOP}
          y2={TOP + PLOT_H}
          stroke="#ff8f6e"
          strokeWidth={1.4}
        />
        <text x={px(M_CH) - 5} y={TOP + 12} textAnchor="end" fontSize={9} fill="#ff8f6e">
          1.44 M☉
        </text>
        <text
          x={px(M_CH) - 5}
          y={TOP + 24}
          textAnchor="end"
          fontSize={8.5}
          fill="rgba(255,143,110,0.9)"
        >
          no stable star beyond →
        </text>

        <circle
          cx={px(SIRIUS_B_MASS)}
          cy={py(SIRIUS_B_RADIUS_KM / R_SUN_KM)}
          r={3.6}
          fill="#ffd27f"
        />
        <text
          x={px(SIRIUS_B_MASS) - 6}
          y={py(SIRIUS_B_RADIUS_KM / R_SUN_KM) - 6}
          textAnchor="end"
          fontSize={8.5}
          fill="#ffd27f"
        >
          Sirius B (measured)
        </text>

        {!beyond && (
          <circle
            cx={px(mass)}
            cy={py(rSolar)}
            r={5.5}
            fill="none"
            stroke="#4fe0c0"
            strokeWidth={1.6}
          />
        )}
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Mass</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">White dwarf mass in solar masses</span>
            <input
              className={styles.slider}
              type="range"
              min={M_MIN}
              max={1.5}
              step={0.005}
              value={mass}
              onChange={(event) => setMass(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{mass.toFixed(3)} M☉</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        {beyond ? (
          <>
            <strong>{mass.toFixed(3)} M☉ — past the limit.</strong> Electron degeneracy pressure
            cannot hold this up at any radius, because the electrons would have to move faster than
            light to supply it. There is no stable configuration: the star collapses, or it
            detonates. That is why a white dwarf pushed over 1.44 solar masses by a companion
            becomes a Type Ia supernova.
          </>
        ) : (
          <>
            <strong>{mass.toFixed(3)} M☉</strong> gives a radius of{' '}
            <strong>{Math.round(rKm).toLocaleString()} km</strong> —{' '}
            {(rKm / EARTH_RADIUS_KM).toFixed(2)}× the Earth’s — and a mean density of{' '}
            {(density / 1e6).toPrecision(3)} kg in a sugar-cube volume. Adding mass makes it{' '}
            <strong>smaller</strong>, which no ordinary object does, and at{' '}
            {((mass / M_CH) * 100).toFixed(0)}% of the limiting mass the curve is already turning
            down toward zero.
          </>
        )}
      </p>
    </div>
  );
}
