import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * E = mc², evaluated against things people have a feel for.
 *
 * The equation is famous and almost never quantified, which is how it acquires
 * its reputation as a licence to extract limitless energy from anything. The
 * figure does the arithmetic — one gram is a small nuclear weapon — and then
 * says the part that is usually left out: complete conversion needs antimatter,
 * and the reactions we actually run release a thousandth of it at best.
 *
 * The scale is logarithmic because the comparisons span twenty decades. The
 * reference energies are order-of-magnitude figures for familiar events, and
 * the figure labels them as such.
 */

const C2 = 299792458 ** 2;

interface Reference {
  readonly label: string;
  readonly joules: number;
}

const REFERENCES: readonly Reference[] = [
  { label: 'A household’s electricity for a day', joules: 3e7 },
  { label: 'Burning a kilogram of petrol', joules: 4.6e7 },
  { label: 'A lightning bolt', joules: 5e9 },
  { label: 'The Hiroshima bomb (~15 kt)', joules: 6.3e13 },
  { label: 'The largest nuclear test (~50 Mt)', joules: 2.1e17 },
  { label: 'The world’s energy use in a year', joules: 6e20 },
  { label: 'The Sun’s output in one second', joules: 3.83e26 },
];

const W = 380;
const ROW = 22;
const TOP = 44;
const LABEL_W = 8;
const BAR_LEFT = 8;
const BAR_W = W - 16;
const LOG_MIN = 6;
const LOG_MAX = 28;
const H = TOP + REFERENCES.length * ROW + 58;

const px = (joules: number): number =>
  BAR_LEFT + ((Math.log10(joules) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * BAR_W;

const SUPERSCRIPT = '⁰¹²³⁴⁵⁶⁷⁸⁹';
function superscript(exponent: number): string {
  const digits = String(Math.abs(exponent))
    .split('')
    .map((digit) => SUPERSCRIPT[Number(digit)] ?? digit)
    .join('');
  return exponent < 0 ? `⁻${digits}` : digits;
}

function scientific(value: number): string {
  const exponent = Math.floor(Math.log10(value));
  const mantissa = value / 10 ** exponent;
  return `${mantissa.toFixed(2)} × 10${superscript(exponent)}`;
}

function massLabel(kilograms: number): string {
  if (kilograms < 1e-3) return `${(kilograms * 1e6).toPrecision(3)} mg`;
  if (kilograms < 1) return `${(kilograms * 1e3).toPrecision(3)} g`;
  if (kilograms < 1000) return `${kilograms.toPrecision(3)} kg`;
  return `${(kilograms / 1000).toPrecision(3)} t`;
}

export default function MassEnergy(_props: VisualizationProps): ReactNode {
  /** Log₁₀ of the mass in kilograms: −9 (one microgram) to 3 (one tonne). */
  const [logMass, setLogMass] = useState(-3);
  const mass = 10 ** logMass;
  const energy = mass * C2;
  const tnt = energy / 4.184e9; // tonnes of TNT equivalent

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {/* Log axis. */}
        {[6, 10, 14, 18, 22, 26].map((decade) => (
          <g key={decade}>
            <line
              x1={px(10 ** decade)}
              x2={px(10 ** decade)}
              y1={TOP - 8}
              y2={TOP + REFERENCES.length * ROW}
              stroke="rgba(148,162,192,0.14)"
            />
            <text
              x={px(10 ** decade)}
              y={TOP - 12}
              textAnchor="middle"
              fontSize={9}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              10{superscript(decade)}
            </text>
          </g>
        ))}
        <text
          x={BAR_LEFT}
          y={14}
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          energy, joules — logarithmic scale
        </text>

        {REFERENCES.map((reference, index) => {
          const rowY = TOP + index * ROW;
          return (
            <g key={reference.label}>
              <rect
                x={BAR_LEFT}
                y={rowY + 4}
                width={Math.max(2, px(reference.joules) - BAR_LEFT)}
                height={10}
                rx={2}
                fill="rgba(143,184,255,0.35)"
              />
              <text
                x={BAR_LEFT + LABEL_W}
                y={rowY + 12}
                fontSize={9.5}
                fill="rgba(226,233,246,0.9)"
                fontFamily="system-ui, sans-serif"
              >
                {reference.label}
              </text>
            </g>
          );
        })}

        {/* The computed value, drawn across every row so it can be compared. */}
        <line
          x1={px(energy)}
          x2={px(energy)}
          y1={TOP - 8}
          y2={TOP + REFERENCES.length * ROW + 10}
          stroke="#66e0d4"
          strokeWidth={2}
        />
        <circle cx={px(energy)} cy={TOP + REFERENCES.length * ROW + 10} r={4} fill="#66e0d4" />
        <text
          x={Math.max(BAR_LEFT, Math.min(px(energy), W - 8))}
          y={TOP + REFERENCES.length * ROW + 26}
          textAnchor={px(energy) > W * 0.6 ? 'end' : 'start'}
          fontSize={10.5}
          fontWeight={600}
          fill="#66e0d4"
          fontFamily="ui-monospace, monospace"
        >
          {massLabel(mass)} → {scientific(energy)} J
        </text>
        <text
          x={BAR_LEFT}
          y={H - 8}
          fontSize={9}
          fill="rgba(148,162,192,0.85)"
          fontFamily="system-ui, sans-serif"
        >
          Reference energies are order-of-magnitude figures for familiar events.
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Mass</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Mass converted, kilograms</span>
            <input
              className={styles.slider}
              type="range"
              min={-9}
              max={3}
              step={0.05}
              value={logMass}
              onChange={(event) => setLogMass(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{massLabel(mass)}</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>{massLabel(mass)}</strong> converted completely to energy gives{' '}
        <strong>{scientific(energy)} joules</strong> — about{' '}
        {tnt >= 1e6
          ? `${(tnt / 1e6).toPrecision(3)} megatonnes`
          : tnt >= 1e3
            ? `${(tnt / 1e3).toPrecision(3)} kilotonnes`
            : `${tnt.toPrecision(3)} tonnes`}{' '}
        of TNT. Complete conversion needs antimatter: fission releases about a thousandth of this,
        and burning it chemically about a billionth.
      </p>
    </div>
  );
}
