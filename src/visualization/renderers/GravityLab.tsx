import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The gravity lab.
 *
 * A calculator with a diagram attached, and deliberately nothing more: it does
 * arithmetic on F = G·m₁·m₂/r² and draws the result. No motion is modelled, so
 * nothing here can be mistaken for a simulation.
 *
 * The sliders are logarithmic because the interesting range spans thirty orders
 * of magnitude — from two people standing a metre apart to the Sun holding the
 * Earth. A linear slider would spend 99.999% of its travel between "planet" and
 * "star" and would make the everyday cases unreachable.
 *
 * Presets are labelled by provenance. "Measured" pairs use published masses and
 * separations; "illustrative" pairs are everyday objects chosen to make a point
 * about scale and are not measurements of anything in particular.
 */

const G = 6.6743e-11;

interface Preset {
  readonly label: string;
  readonly m1: number;
  readonly m2: number;
  readonly r: number;
  readonly name1: string;
  readonly name2: string;
  readonly measured: boolean;
}

const PRESETS: readonly Preset[] = [
  {
    label: 'Earth + Moon',
    m1: 5.972e24,
    m2: 7.346e22,
    r: 3.844e8,
    name1: 'Earth',
    name2: 'Moon',
    measured: true,
  },
  {
    label: 'Sun + Earth',
    m1: 1.9885e30,
    m2: 5.972e24,
    r: 1.496e11,
    name1: 'Sun',
    name2: 'Earth',
    measured: true,
  },
  {
    label: 'Earth + you',
    m1: 5.972e24,
    m2: 70,
    r: 6.371e6,
    name1: 'Earth',
    name2: '70 kg person',
    measured: true,
  },
  {
    label: 'Two people, 1 m apart',
    m1: 70,
    m2: 70,
    r: 1,
    name1: '70 kg person',
    name2: '70 kg person',
    measured: false,
  },
];

const SUPERSCRIPT = '⁰¹²³⁴⁵⁶⁷⁸⁹';

function superscript(exponent: number): string {
  const digits = String(Math.abs(exponent))
    .split('')
    .map((digit) => SUPERSCRIPT[Number(digit)] ?? digit)
    .join('');
  return exponent < 0 ? `⁻${digits}` : digits;
}

/** "5.97 × 10²⁴" — readable at a glance, unlike 5.972e24. */
function scientific(value: number, figures = 3): string {
  if (value === 0) return '0';
  const exponent = Math.floor(Math.log10(Math.abs(value)));
  if (exponent >= -1 && exponent <= 3) {
    return value >= 100 ? value.toFixed(0) : value.toPrecision(figures);
  }
  const mantissa = value / 10 ** exponent;
  return `${mantissa.toFixed(figures - 1)} × 10${superscript(exponent)}`;
}

function metres(value: number): string {
  if (value >= 1e9) return `${scientific(value / 1000)} km`;
  if (value >= 1000) return `${scientific(value / 1000)} km`;
  return `${scientific(value)} m`;
}

export default function GravityLab(_props: VisualizationProps): ReactNode {
  // Log₁₀ of each quantity: the slider position *is* the exponent.
  const [logM1, setLogM1] = useState(Math.log10(5.972e24));
  const [logM2, setLogM2] = useState(Math.log10(7.346e22));
  const [logR, setLogR] = useState(Math.log10(3.844e8));
  const [preset, setPreset] = useState<string | null>('Earth + Moon');

  const m1 = 10 ** logM1;
  const m2 = 10 ** logM2;
  const r = 10 ** logR;
  const force = (G * m1 * m2) / (r * r);

  const active = PRESETS.find((entry) => entry.label === preset);

  const apply = (entry: Preset): void => {
    setLogM1(Math.log10(entry.m1));
    setLogM2(Math.log10(entry.m2));
    setLogR(Math.log10(entry.r));
    setPreset(entry.label);
  };

  const change = (setter: (value: number) => void) => (value: number) => {
    setter(value);
    setPreset(null);
  };

  // Radius by cube root of mass so the circles read as "amount of stuff",
  // clamped hard because the real ratio would be invisible at either end.
  const radius = (mass: number): number =>
    Math.max(9, Math.min(30, 9 + (Math.log10(mass) + 1) * 0.72));

  const w = 380;
  const h = 118;
  const leftX = 62;
  const rightX = 318;
  const midY = 56;
  const arrowWeight = Math.max(1, Math.min(7, (Math.log10(Math.max(force, 1e-12)) + 12) * 0.2));

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <line
          x1={leftX}
          x2={rightX}
          y1={midY}
          y2={midY}
          stroke="rgba(148,162,192,0.3)"
          strokeDasharray="4 4"
        />
        {/* Two arrows, pointing at each other: the pair is equal and opposite. */}
        <line
          x1={leftX + 34}
          x2={leftX + 34 + 46}
          y1={midY}
          y2={midY}
          stroke="#8fb8ff"
          strokeWidth={arrowWeight}
          markerEnd=""
        />
        <polygon
          points={`${leftX + 86},${midY} ${leftX + 76},${midY - 5} ${leftX + 76},${midY + 5}`}
          fill="#8fb8ff"
        />
        <line
          x1={rightX - 34}
          x2={rightX - 34 - 46}
          y1={midY}
          y2={midY}
          stroke="#8fb8ff"
          strokeWidth={arrowWeight}
        />
        <polygon
          points={`${rightX - 86},${midY} ${rightX - 76},${midY - 5} ${rightX - 76},${midY + 5}`}
          fill="#8fb8ff"
        />

        <circle cx={leftX} cy={midY} r={radius(m1)} fill="#ffd76e" opacity={0.92} />
        <circle cx={rightX} cy={midY} r={radius(m2)} fill="#7fc7ff" opacity={0.92} />

        <text
          x={leftX}
          y={16}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(226,233,246,0.92)"
          fontFamily="system-ui, sans-serif"
        >
          {active ? active.name1 : 'mass 1'}
        </text>
        <text
          x={rightX}
          y={16}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(226,233,246,0.92)"
          fontFamily="system-ui, sans-serif"
        >
          {active ? active.name2 : 'mass 2'}
        </text>

        <text
          x={w / 2}
          y={midY - 14}
          textAnchor="middle"
          fontSize={11}
          fontWeight={600}
          fill="#8fb8ff"
          fontFamily="ui-monospace, monospace"
        >
          {scientific(force)} N
        </text>
        <text
          x={w / 2}
          y={midY + 26}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(148,162,192,0.95)"
          fontFamily="ui-monospace, monospace"
        >
          r = {metres(r)}
        </text>
        <text
          x={w / 2}
          y={h - 8}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          each body feels the same force, in opposite directions
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Mass 1</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Mass of the first body, kilograms</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={31}
              step={0.05}
              value={logM1}
              onChange={(event) => change(setLogM1)(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{scientific(m1)}</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Mass 2</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Mass of the second body, kilograms</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={31}
              step={0.05}
              value={logM2}
              onChange={(event) => change(setLogM2)(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{scientific(m2)}</output>
        </div>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Distance</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Separation between the bodies, metres</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={12}
              step={0.02}
              value={logR}
              onChange={(event) => change(setLogR)(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{metres(r)}</output>
        </div>
      </div>

      <div className={styles.toggles}>
        {PRESETS.map((entry) => (
          <button
            key={entry.label}
            type="button"
            className={styles.toggle}
            aria-pressed={preset === entry.label}
            onClick={() => apply(entry)}
          >
            {entry.label}
          </button>
        ))}
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>F = {scientific(force)} newtons.</strong>{' '}
        {active
          ? active.measured
            ? 'Preset built from published masses and separations for real bodies.'
            : 'Illustrative preset: everyday objects, not a measurement of anything in particular.'
          : 'Custom values.'}{' '}
        Doubling either mass would double this to {scientific(force * 2)} N; doubling the distance
        would cut it to {scientific(force / 4)} N.
      </p>
    </div>
  );
}
