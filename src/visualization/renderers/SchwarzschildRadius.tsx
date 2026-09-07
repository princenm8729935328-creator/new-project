import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Every object's Schwarzschild radius, next to the size it actually is.
 *
 * The gap between the two bars is the whole content. For a person it spans
 * twenty-five orders of magnitude; for the Sun, five; for the objects at the
 * bottom of the chart it closes completely, and those are the ones that are
 * black holes. Reading the chart is what makes "compact enough" quantitative
 * rather than atmospheric.
 *
 * Radii are computed from measured masses; the actual sizes are measured too.
 * Nothing here says anything about the interior of a black hole.
 */

const G = 6.6743e-11;
const C2 = 299792458 ** 2;
const SOLAR_MASS = 1.9885e30;

/** r = 2GM/c², in metres. */
const schwarzschild = (mass: number): number => (2 * G * mass) / C2;

interface Body {
  readonly label: string;
  readonly mass: number;
  /** Actual radius in metres; equal to r_s for the black holes. */
  readonly radius: number;
  readonly isBlackHole: boolean;
}

const BODIES: readonly Body[] = [
  { label: 'A 70 kg person', mass: 70, radius: 0.4, isBlackHole: false },
  { label: 'The Earth', mass: 5.972e24, radius: 6.371e6, isBlackHole: false },
  { label: 'Jupiter', mass: 1.898e27, radius: 6.9911e7, isBlackHole: false },
  { label: 'The Sun', mass: 1.9885e30, radius: 6.957e8, isBlackHole: false },
  {
    label: 'GW150914’s remnant (62 M☉)',
    mass: 62 * SOLAR_MASS,
    radius: schwarzschild(62 * SOLAR_MASS),
    isBlackHole: true,
  },
  {
    label: 'Sagittarius A* (4.3 million M☉)',
    mass: 4.3e6 * SOLAR_MASS,
    radius: schwarzschild(4.3e6 * SOLAR_MASS),
    isBlackHole: true,
  },
  {
    label: 'M87* (6.5 billion M☉)',
    mass: 6.5e9 * SOLAR_MASS,
    radius: schwarzschild(6.5e9 * SOLAR_MASS),
    isBlackHole: true,
  },
];

const W = 380;
const ROW = 30;
const TOP = 34;
const LEFT = 8;
const BAR_LEFT = 8;
const BAR_W = W - 16;
const LOG_MIN = -26;
const LOG_MAX = 14;
const H = TOP + (BODIES.length + 1) * ROW + 30;

const px = (metres: number): number =>
  BAR_LEFT + ((Math.log10(metres) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * BAR_W;

function length(metres: number): string {
  if (metres < 1e-9) return `${metres.toExponential(1)} m`;
  if (metres < 1e-2) return `${(metres * 1000).toPrecision(3)} mm`;
  if (metres < 1e3) return `${metres.toPrecision(3)} m`;
  if (metres < 1e9) return `${(metres / 1000).toPrecision(3)} km`;
  return `${(metres / 1000).toExponential(2)} km`;
}

export default function SchwarzschildRadius(_props: VisualizationProps): ReactNode {
  /** Log₁₀ of a mass in kilograms, for the reader's own row. */
  const [logMass, setLogMass] = useState(24);
  const mass = 10 ** logMass;
  const custom = schwarzschild(mass);

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {[-24, -16, -8, 0, 8].map((decade) => (
          <g key={decade}>
            <line
              x1={px(10 ** decade)}
              x2={px(10 ** decade)}
              y1={TOP - 6}
              y2={TOP + (BODIES.length + 1) * ROW}
              stroke="rgba(148,162,192,0.14)"
            />
            <text
              x={px(10 ** decade)}
              y={TOP - 10}
              textAnchor="middle"
              fontSize={8.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              1e{decade} m
            </text>
          </g>
        ))}
        <text
          x={LEFT}
          y={14}
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          size, metres — logarithmic. Teal ● = actual, orange ◆ = Schwarzschild radius.
        </text>

        {BODIES.map((body, index) => {
          const rowY = TOP + index * ROW;
          const rs = schwarzschild(body.mass);
          return (
            <g key={body.label}>
              <text
                x={LEFT}
                y={rowY + 11}
                fontSize={9.5}
                fill="rgba(226,233,246,0.92)"
                fontFamily="system-ui, sans-serif"
              >
                {body.label}
              </text>
              {!body.isBlackHole && (
                <line
                  x1={px(rs)}
                  x2={px(body.radius)}
                  y1={rowY + 21}
                  y2={rowY + 21}
                  stroke="rgba(148,162,192,0.35)"
                  strokeWidth={1.5}
                  strokeDasharray="3 3"
                />
              )}
              <circle cx={px(body.radius)} cy={rowY + 21} r={4.5} fill="#66e0d4" />
              <path
                d={`M${px(rs)},${rowY + 16} l5,5 l-5,5 l-5,-5 Z`}
                fill={body.isBlackHole ? '#ff8f6e' : '#ffb45e'}
              />
              <text
                x={W - 8}
                y={rowY + 11}
                textAnchor="end"
                fontSize={8.5}
                fill="rgba(148,162,192,0.9)"
                fontFamily="ui-monospace, monospace"
              >
                r_s = {length(rs)}
              </text>
            </g>
          );
        })}

        {/* The reader's own mass. */}
        <g>
          <text
            x={LEFT}
            y={TOP + BODIES.length * ROW + 11}
            fontSize={9.5}
            fontWeight={700}
            fill="#a97bff"
            fontFamily="system-ui, sans-serif"
          >
            Your chosen mass
          </text>
          <path
            d={`M${px(custom)},${TOP + BODIES.length * ROW + 16} l5,5 l-5,5 l-5,-5 Z`}
            fill="#a97bff"
          />
          <text
            x={W - 8}
            y={TOP + BODIES.length * ROW + 11}
            textAnchor="end"
            fontSize={8.5}
            fill="#a97bff"
            fontFamily="ui-monospace, monospace"
          >
            r_s = {length(custom)}
          </text>
        </g>

        <text
          x={LEFT}
          y={H - 8}
          fontSize={9}
          fill="rgba(148,162,192,0.85)"
          fontFamily="system-ui, sans-serif"
        >
          The last three rows are black holes: the two markers coincide.
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Mass</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Mass in kilograms, as a power of ten</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={42}
              step={0.1}
              value={logMass}
              onChange={(event) => setLogMass(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>1e{logMass.toFixed(1)} kg</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        A mass of <strong>10^{logMass.toFixed(1)} kg</strong> —{' '}
        {mass / SOLAR_MASS >= 0.01
          ? `${(mass / SOLAR_MASS).toPrecision(3)} solar masses`
          : `${(mass / 5.972e24).toPrecision(3)} Earth masses`}{' '}
        — would have to be squeezed inside <strong>{length(custom)}</strong> to form a black hole.
        The radius is simply proportional to the mass, which is why supermassive black holes can
        have an average density inside the horizon lower than water’s.
      </p>
    </div>
  );
}
