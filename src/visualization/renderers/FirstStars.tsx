import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Why the first stars had to be different, computed from the Jeans mass.
 *
 * The argument is a single formula and it is worth showing rather than
 * asserting. A cloud collapses when gravity beats pressure, and the mass at
 * which that happens goes as T^1.5. Primordial gas could not cool below about
 * 200 kelvin because it had nothing to radiate with except molecular hydrogen;
 * present-day gas reaches 10 kelvin because dust and heavy elements are
 * efficient radiators. Twenty times the temperature is roughly ninety times the
 * minimum mass, and that is the whole of the argument.
 *
 * The timeline underneath shows the predicted mass range shifting as
 * simulations improved — which is what an honest account of a prediction that
 * has moved looks like.
 */

const M_H = 1.6726e-27;
const K_B = 1.381e-23;
const G = 6.674e-11;
const M_SUN = 1.989e30;

/**
 * Jeans mass for a cloud of temperature T (K) and number density n (cm⁻³),
 * with mean molecular weight μ, in solar masses.
 */
function jeansMass(tempK: number, nCm3: number, mu: number): number {
  const rho = nCm3 * 1e6 * mu * M_H;
  const cs2 = (K_B * tempK) / (mu * M_H);
  const mj = ((5 * cs2) / G) ** 1.5 * (3 / (4 * Math.PI * rho)) ** 0.5;
  return mj / M_SUN;
}

const W = 380;
const H = 248;

interface Side {
  readonly key: 'primordial' | 'today';
  readonly title: string;
  readonly temp: number;
  readonly density: number;
  readonly mu: number;
  readonly coolants: string;
  readonly colour: string;
  readonly detail: string;
}

const SIDES: readonly Side[] = [
  {
    key: 'primordial',
    title: 'Primordial gas',
    temp: 200,
    density: 1e4,
    mu: 1.22,
    coolants: 'molecular hydrogen only — and it is a poor radiator',
    colour: '#ff8f6e',
    detail:
      'Hydrogen and helium, no dust, no carbon, no oxygen. The only coolant is H₂, which forms slowly and radiates weakly, and it stops working below about 200 kelvin. The gas cannot get colder, so it cannot get denser without pressure fighting back, so nothing small can collapse.',
  },
  {
    key: 'today',
    title: 'Present-day gas',
    temp: 15,
    density: 1e6,
    mu: 2.33,
    coolants: 'dust grains, carbon monoxide, atomic carbon and oxygen fine-structure lines',
    colour: '#8fb8ff',
    detail:
      'Heavy elements from earlier stellar generations, and the dust grains they condensed into, radiate away heat far more efficiently. Molecular cloud cores reach 10 to 20 kelvin, and at that temperature a clump of about one solar mass is already unstable.',
  },
];

/** How the predicted Population III mass range has been revised. */
const PREDICTIONS: readonly { year: string; low: number; high: number; why: string }[] = [
  {
    year: '~2002',
    low: 100,
    high: 500,
    why: 'One massive star per minihalo, from simulations that stopped at the first collapsing core.',
  },
  {
    year: '~2011',
    low: 20,
    high: 100,
    why: 'Higher-resolution simulations found the collapsing core fragments into a disk.',
  },
  {
    year: '~2023',
    low: 10,
    high: 300,
    why: 'A broad distribution, with fragmentation, competitive accretion and radiative feedback all included. The spread is honest: this number is not settled.',
  },
];

export default function FirstStars(_props: VisualizationProps): ReactNode {
  const [temp, setTemp] = useState(200);
  const [pick, setPick] = useState(0);

  /** The slider varies temperature only, at the primordial density, to isolate T. */
  const mj = jeansMass(temp, 1e4, 1.22);
  const mjPrimordial = jeansMass(200, 1e4, 1.22);
  const mjToday = jeansMass(15, 1e6, 2.33);
  const prediction = PREDICTIONS[pick] ?? PREDICTIONS[0]!;

  /** Bar length for a mass, logarithmic 0.1–3000 M☉ over 300 units. */
  const barLen = (m: number): number =>
    Math.max(3, ((Math.log10(m) + 1) / (Math.log10(3000) + 1)) * 300);

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={10} y={14} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          the smallest clump of gas gravity can pull together against its own pressure
        </text>

        {SIDES.map((side, index) => {
          const x = 10 + index * 186;
          const value = index === 0 ? mjPrimordial : mjToday;
          return (
            <g key={side.key}>
              <rect
                x={x}
                y={24}
                width={174}
                height={62}
                rx={5}
                fill={`${side.colour}22`}
                stroke={side.colour}
                strokeWidth={1}
              />
              <text x={x + 8} y={40} fontSize={10} fontWeight={600} fill={side.colour}>
                {side.title}
              </text>
              <text
                x={x + 8}
                y={55}
                fontSize={9}
                fill="rgba(226,233,246,0.9)"
                fontFamily="ui-monospace, monospace"
              >
                T ≈ {side.temp} K, n ≈ 10{index === 0 ? '⁴' : '⁶'} cm⁻³
              </text>
              <text
                x={x + 8}
                y={69}
                fontSize={9}
                fill="rgba(226,233,246,0.9)"
                fontFamily="ui-monospace, monospace"
              >
                Jeans mass ≈ {value >= 100 ? value.toPrecision(3) : value.toPrecision(2)} M☉
              </text>
              <text x={x + 8} y={81} fontSize={8} fill="rgba(148,162,192,0.9)">
                {index === 0 ? 'so only huge clouds collapse' : 'so a Sun-sized clump collapses'}
              </text>
            </g>
          );
        })}

        <text x={10} y={104} fontSize={9} fill="rgba(148,162,192,0.9)">
          M_Jeans ∝ T¹·⁵ ÷ √ρ — at fixed density, 200 K instead of 15 K costs a factor of{' '}
          {((200 / 15) ** 1.5).toFixed(0)}
        </text>

        {/* Live bar from the slider. */}
        <rect x={10} y={114} width={barLen(mj)} height={14} rx={3} fill="#4fe0c0" />
        {/* The label flips inside the bar once it would push past the edge. */}
        <text
          x={barLen(mj) > 200 ? 6 + barLen(mj) : 14 + barLen(mj)}
          y={125}
          textAnchor={barLen(mj) > 200 ? 'end' : 'start'}
          fontSize={9}
          fill={barLen(mj) > 200 ? '#04060d' : '#4fe0c0'}
          fontFamily="ui-monospace, monospace"
        >
          {mj >= 1000
            ? Math.round(mj).toLocaleString()
            : mj >= 10
              ? mj.toFixed(0)
              : mj.toPrecision(2)}{' '}
          M☉ at {temp.toFixed(0)} K
        </text>

        {/* The revision timeline. */}
        <text x={10} y={154} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          how the predicted Population III mass range has been revised:
        </text>
        {PREDICTIONS.map((entry, index) => {
          const y = 166 + index * 22;
          const isSelected = index === pick;
          return (
            <g key={entry.year} onClick={() => setPick(index)} style={{ cursor: 'pointer' }}>
              <rect
                x={0}
                y={y - 10}
                width={W}
                height={20}
                fill={isSelected ? 'rgba(143,184,255,0.10)' : 'transparent'}
              />
              <text
                x={10}
                y={y + 3}
                fontSize={9}
                fill={isSelected ? '#8fb8ff' : 'rgba(226,233,246,0.9)'}
                fontFamily="ui-monospace, monospace"
              >
                {entry.year}
              </text>
              <rect
                x={56 + barLen(entry.low) * 0.75}
                y={y - 5}
                width={Math.max(4, (barLen(entry.high) - barLen(entry.low)) * 0.75)}
                height={10}
                rx={3}
                fill={isSelected ? '#8fb8ff' : 'rgba(143,184,255,0.45)'}
              />
              <text
                x={W - 10}
                y={y + 3}
                textAnchor="end"
                fontSize={8.5}
                fill="rgba(226,233,246,0.9)"
              >
                {entry.low}–{entry.high} M☉
              </text>
            </g>
          );
        })}
        <text x={10} y={238} fontSize={8.5} fill="rgba(255,143,110,0.95)">
          none of these stars has ever been observed. This is a prediction that has moved.
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Gas temp</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Gas temperature in kelvin</span>
            <input
              className={styles.slider}
              type="range"
              min={8}
              max={300}
              step={1}
              value={temp}
              onChange={(event) => setTemp(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{temp.toFixed(0)} K</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        At <strong>{temp.toFixed(0)} K</strong>, and at the density of a primordial minihalo core,
        the minimum collapsing mass is{' '}
        <strong>{mj >= 100 ? mj.toPrecision(3) : mj.toPrecision(2)} solar masses</strong>.
        Primordial gas could not get below about 200 K, so its first stars had to start from clumps
        of order a thousand solar masses. Gas enriched by earlier stars cools to about 15 K, and can
        also go on compressing to far higher densities before it becomes opaque — both effects push
        the same way, and a present-day cloud core goes unstable at around one solar mass. The heavy
        elements a star makes are what allow the next generation of stars to be small.{' '}
        <strong>{prediction.year}:</strong> {prediction.why}
      </p>
    </div>
  );
}
