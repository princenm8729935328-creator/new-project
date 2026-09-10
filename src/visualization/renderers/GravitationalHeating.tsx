import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The virial theorem, drawn as three curves.
 *
 * The result this figure exists to make believable is that a gas cloud which
 * radiates energy away gets *hotter*. That sounds like a violation of something
 * and it is not: for a self-gravitating sphere in equilibrium, 2K + U = 0, so
 * losing total energy means U becomes more negative and K — the heat — goes up.
 * Half the released gravitational energy is radiated and half stays as heat.
 *
 * Everything plotted is computed from the uniform-sphere expressions, so the
 * reader can check the arithmetic in the readout against the curves.
 */

const G = 6.674e-11;
const K_B = 1.381e-23;
const M_H = 1.6726e-27;
const M_SUN = 1.989e30;
const R_SUN = 6.957e8;
const L_SUN = 3.828e26;
/** Mean molecular weight for ionised solar-composition gas. */
const MU = 0.6;

/** U = −3GM²/5R, in joules. */
const potential = (rSolar: number): number => (-3 * G * M_SUN * M_SUN) / (5 * rSolar * R_SUN);
/** Virial equilibrium: K = −U/2. */
const kinetic = (rSolar: number): number => -potential(rSolar) / 2;
/** E = U + K = U/2. */
const total = (rSolar: number): number => potential(rSolar) / 2;
/** Mean temperature from K = (3/2)(M/μm_H)kT. */
const meanTemperature = (rSolar: number): number =>
  (MU * M_H * G * M_SUN) / (5 * K_B * rSolar * R_SUN);
/** Kelvin–Helmholtz time, seconds: the store of heat over the rate of loss. */
const kelvinHelmholtz = (rSolar: number): number => (G * M_SUN * M_SUN) / (rSolar * R_SUN * L_SUN);

const W = 380;
const H = 224;
const LEFT = 46;
const RIGHT = 14;
const TOP = 26;
const BOTTOM = 42;
const PLOT_W = W - LEFT - RIGHT;
const PLOT_H = H - TOP - BOTTOM;

const R_MAX = 60; // solar radii, at the left
const R_MIN = 1; // solar radii, at the right

/** Radius decreases to the right: the figure runs forward in time. */
const px = (r: number): number =>
  LEFT + ((Math.log10(R_MAX) - Math.log10(r)) / (Math.log10(R_MAX) - Math.log10(R_MIN))) * PLOT_W;

/** Energies span a factor of 60, so a linear scale in units of 10^41 J works. */
const E_SCALE = 1e41;
const E_MAX = 3.4;
const py = (e: number): number =>
  TOP + PLOT_H / 2 - (Math.max(-E_MAX, Math.min(E_MAX, e / E_SCALE)) / E_MAX) * (PLOT_H / 2);

function curve(fn: (r: number) => number): string {
  return Array.from({ length: 90 }, (_, i) => {
    const r = 10 ** (Math.log10(R_MAX) - (i / 89) * (Math.log10(R_MAX) - Math.log10(R_MIN)));
    return `${i === 0 ? 'M' : 'L'}${px(r).toFixed(2)},${py(fn(r)).toFixed(2)}`;
  }).join(' ');
}

const U_PATH = curve(potential);
const K_PATH = curve(kinetic);
const E_PATH = curve(total);

export default function GravitationalHeating(_props: VisualizationProps): ReactNode {
  const [radius, setRadius] = useState(10);
  const t = meanTemperature(radius);
  const kh = kelvinHelmholtz(radius);
  const radiated = -total(radius);

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <line x1={LEFT} x2={LEFT + PLOT_W} y1={py(0)} y2={py(0)} stroke="rgba(148,162,192,0.35)" />
        {[-3, -1.5, 1.5, 3].map((tick) => (
          <g key={tick}>
            <line
              x1={LEFT}
              x2={LEFT + PLOT_W}
              y1={py(tick * E_SCALE)}
              y2={py(tick * E_SCALE)}
              stroke="rgba(148,162,192,0.1)"
            />
            <text
              x={LEFT - 5}
              y={py(tick * E_SCALE) + 3.5}
              textAnchor="end"
              fontSize={8.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {tick > 0 ? `+${tick}` : tick}
            </text>
          </g>
        ))}
        <text x={3} y={TOP - 12} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          energy, units of 10⁴¹ joules
        </text>

        {[60, 20, 6, 2, 1].map((tick) => (
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
          radius in solar radii — the sphere contracts to the right →
        </text>

        <path d={K_PATH} fill="none" stroke="#ff8f6e" strokeWidth={1.9} />
        <path
          d={E_PATH}
          fill="none"
          stroke="rgba(226,233,246,0.75)"
          strokeWidth={1.6}
          strokeDasharray="5 3"
        />
        <path d={U_PATH} fill="none" stroke="#8fb8ff" strokeWidth={1.9} />

        <text x={LEFT + 6} y={py(kinetic(40)) - 6} fontSize={9} fill="#ff8f6e">
          heat, K
        </text>
        <text x={LEFT + 6} y={py(potential(40)) + 14} fontSize={9} fill="#8fb8ff">
          gravity, U
        </text>
        <text
          x={LEFT + PLOT_W - 6}
          y={py(total(2.2)) - 6}
          textAnchor="end"
          fontSize={9}
          fill="rgba(226,233,246,0.85)"
        >
          total, E
        </text>

        <line
          x1={px(radius)}
          x2={px(radius)}
          y1={TOP}
          y2={TOP + PLOT_H}
          stroke="#4fe0c0"
          strokeWidth={1.2}
        />
        <circle cx={px(radius)} cy={py(kinetic(radius))} r={3.4} fill="#ff8f6e" />
        <circle cx={px(radius)} cy={py(potential(radius))} r={3.4} fill="#8fb8ff" />
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Radius</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Radius of the contracting sphere, in solar radii
            </span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={Math.log10(R_MAX)}
              step={0.005}
              value={Math.log10(radius)}
              onChange={(event) => setRadius(10 ** Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{radius.toFixed(2)} R☉</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        One solar mass contracted to <strong>{radius.toFixed(2)} solar radii</strong> has a mean
        internal temperature of <strong>{(t / 1e6).toPrecision(3)} million K</strong>. It has
        radiated {(radiated / 1e41).toPrecision(3)} × 10⁴¹ J away and kept exactly the same amount
        as heat — half and half, every time. Shrinking it further makes it <strong>hotter</strong>,
        not colder. At the Sun’s present size this store would last{' '}
        {(kelvinHelmholtz(1) / 3.156e13).toPrecision(3)} million years, which is what Kelvin
        calculated for the Sun’s age; the rocks were older, and that contradiction is what forced
        the search for nuclear energy. Right now the store would last{' '}
        {(kh / 3.156e13).toPrecision(3)} million years.
      </p>
    </div>
  );
}
