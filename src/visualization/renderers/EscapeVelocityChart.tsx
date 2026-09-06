import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Escape velocity for nine bodies, computed live from mass and radius.
 *
 * The arithmetic is done in the component rather than typed in as results, so
 * the figure cannot drift out of step with the cited masses and radii — and so
 * the detail line can show the calculation rather than only the answer.
 *
 * A logarithmic bar scale, because the range is a factor of 1200 from Ceres to
 * the Sun and a linear chart would render six of the nine bodies invisible.
 */

const G = 6.6743e-11;

interface Body {
  readonly name: string;
  /** kg */
  readonly mass: number;
  /** m — the radius the escape is measured from. */
  readonly radius: number;
  readonly note?: string;
}

const BODIES: readonly Body[] = [
  { name: 'Sun', mass: 1.9885e30, radius: 6.957e8, note: 'from the photosphere' },
  { name: 'Jupiter', mass: 1.898e27, radius: 7.1492e7, note: 'from the 1-bar level' },
  { name: 'Neptune', mass: 1.024e26, radius: 2.4622e7, note: 'from the 1-bar level' },
  { name: 'Earth', mass: 5.972e24, radius: 6.371e6 },
  { name: 'Venus', mass: 4.8675e24, radius: 6.0518e6 },
  { name: 'Mars', mass: 6.4171e23, radius: 3.3895e6 },
  { name: 'Mercury', mass: 3.301e23, radius: 2.4397e6 },
  { name: 'Moon', mass: 7.346e22, radius: 1.7374e6 },
  { name: 'Ceres', mass: 9.3835e20, radius: 4.696e5 },
];

/** v_e = √(2GM/r), in km/s. */
function escapeVelocity(body: Body): number {
  return Math.sqrt((2 * G * body.mass) / body.radius) / 1000;
}

const W = 380;
const ROW = 26;
const TOP = 30;
const LABEL_W = 66;
const VALUE_W = 74;
const BAR_W = W - LABEL_W - VALUE_W - 14;
const H = TOP + BODIES.length * ROW + 20;

const LOG_MIN = -1; // 0.1 km/s
const LOG_MAX = 3; // 1000 km/s
const barWidth = (kms: number): number =>
  ((Math.log10(kms) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * BAR_W;

export default function EscapeVelocityChart(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState('Earth');
  const body = BODIES.find((entry) => entry.name === selected) ?? BODIES[3]!;
  const velocity = escapeVelocity(body);

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {[0.1, 1, 10, 100, 1000].map((tick) => (
          <g key={tick}>
            <line
              x1={LABEL_W + barWidth(tick)}
              x2={LABEL_W + barWidth(tick)}
              y1={TOP - 4}
              y2={TOP + BODIES.length * ROW}
              stroke="rgba(148,162,192,0.16)"
            />
            <text
              x={LABEL_W + barWidth(tick)}
              y={TOP - 9}
              textAnchor="middle"
              fontSize={9}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {tick}
            </text>
          </g>
        ))}
        <text
          x={10}
          y={12}
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          escape velocity, km/s — logarithmic scale
        </text>

        {BODIES.map((entry, index) => {
          const y = TOP + index * ROW;
          const kms = escapeVelocity(entry);
          const isSelected = entry.name === selected;
          return (
            <g
              key={entry.name}
              onClick={() => setSelected(entry.name)}
              style={{ cursor: 'pointer' }}
            >
              {/* Full-row hit target: comfortably above the 44px floor once the
                  380-unit viewBox is scaled to a phone. */}
              <rect
                x={0}
                y={y}
                width={W}
                height={ROW}
                fill={isSelected ? 'rgba(143,184,255,0.10)' : 'transparent'}
              />
              <text
                x={10}
                y={y + 16}
                fontSize={10.5}
                fontWeight={isSelected ? 700 : 500}
                fill={isSelected ? '#8fb8ff' : 'rgba(226,233,246,0.92)'}
                fontFamily="system-ui, sans-serif"
              >
                {entry.name}
              </text>
              <rect
                x={LABEL_W}
                y={y + 6}
                width={Math.max(2, barWidth(kms))}
                height={13}
                rx={2}
                fill={isSelected ? '#8fb8ff' : 'rgba(143,184,255,0.5)'}
              />
              <text
                x={W - 10}
                y={y + 16}
                textAnchor="end"
                fontSize={10}
                fill="rgba(148,162,192,0.95)"
                fontFamily="ui-monospace, monospace"
              >
                {kms >= 100 ? kms.toFixed(0) : kms.toFixed(2)}
              </text>
            </g>
          );
        })}
      </svg>

      <div className={styles.toggles}>
        {BODIES.map((entry) => (
          <button
            key={entry.name}
            type="button"
            className={styles.toggle}
            aria-pressed={entry.name === selected}
            onClick={() => setSelected(entry.name)}
          >
            {entry.name}
          </button>
        ))}
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>{body.name}</strong>: mass {(body.mass / 5.972e24).toPrecision(3)} Earth masses,
        radius {(body.radius / 1000).toLocaleString(undefined, { maximumFractionDigits: 0 })} km. v
        = √(2 × G × M ÷ r) ={' '}
        <strong>{velocity >= 100 ? velocity.toFixed(1) : velocity.toFixed(2)} km/s</strong>
        {body.note ? ` (${body.note})` : ''}. That is{' '}
        {(velocity / escapeVelocity(BODIES[3]!)).toFixed(2)}× Earth’s. The mass of whatever is
        escaping does not appear in the formula.
      </p>
    </div>
  );
}
