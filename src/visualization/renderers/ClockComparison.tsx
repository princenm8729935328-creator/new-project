import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Real clocks, really disagreeing, by amounts that were predicted first.
 *
 * This is the evidence base behind the section's most-asked question. It is easy
 * to say "time is relative" and easy to say "time is an illusion", and neither
 * sentence is what the measurements support. What they support is narrower and
 * stranger: elapsed time depends on the path a clock takes and on where it sits
 * in a gravitational field, and the dependence is calculable to the digit.
 *
 * Every value here is published, and every one of them is a comparison between
 * two physical clocks — not a thought experiment.
 */

interface Entry {
  readonly label: string;
  readonly year: number;
  readonly fraction: number;
  readonly detail: string;
}

const ENTRIES: readonly Entry[] = [
  {
    label: 'GPS satellite clocks',
    year: 1978,
    fraction: 4.46e-10,
    detail:
      'A GPS satellite clock runs about 38 microseconds per day faster than one on the ground: 45 µs faster from being higher in Earth’s gravitational field, 7 µs slower from its orbital speed. That is a fractional difference of about 4.5 parts in 10¹⁰. Left uncorrected, positions would drift by roughly 10 kilometres a day, so the correction is built into the system — the effect is engineering, not philosophy.',
  },
  {
    label: 'Hafele–Keating flights',
    year: 1971,
    fraction: 1.6e-12,
    detail:
      'Caesium clocks flown around the world on commercial airliners and compared with clocks left at the US Naval Observatory. Eastward flights lost about 59 nanoseconds, westward gained about 273 — both consistent with the predictions, and in opposite directions, because the Earth’s rotation adds to one journey’s speed and subtracts from the other’s.',
  },
  {
    label: 'Optical clocks, 33 cm apart',
    year: 2010,
    fraction: 4.1e-17,
    detail:
      'Two aluminium-ion optical clocks in one laboratory, one raised by 33 centimetres. The higher clock ran faster by about 4 parts in 10¹⁷, matching gh/c². Gravitational time dilation is measurable across the height of a desk.',
  },
  {
    label: 'Across one millimetre',
    year: 2022,
    fraction: 1.1e-19,
    detail:
      'A single strontium optical lattice clock, resolving the difference in rate between its own top and bottom — about 1.1 parts in 10¹⁹ across one millimetre. At this precision the phrase "the time on Earth" has stopped being well defined even within one apparatus.',
  },
];

const W = 380;
const H = 250;
const AXIS_L = 34;
const AXIS_R = W - 16;
const ROW_T = 56;
const ROW_H = 40;

const LOG_MIN = -20;
const LOG_MAX = -9;

const xOf = (fraction: number): number =>
  AXIS_L + ((Math.log10(fraction) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * (AXIS_R - AXIS_L);

export default function ClockComparison(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(0);
  const entry = ENTRIES[selected] ?? ENTRIES[0];

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
          Measured differences between real clocks, logarithmic
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.72)">
          fractional rate difference — every entry published, every one a comparison of two clocks
        </text>

        {[-20, -18, -16, -14, -12, -10].map((decade) => (
          <g key={decade}>
            <line
              x1={xOf(10 ** decade)}
              x2={xOf(10 ** decade)}
              y1={ROW_T - 12}
              y2={ROW_T + ENTRIES.length * ROW_H - 18}
              stroke="rgba(148,162,192,0.09)"
            />
            <text
              x={xOf(10 ** decade)}
              y={ROW_T + ENTRIES.length * ROW_H - 6}
              textAnchor="middle"
              fontSize={7.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              1e{decade}
            </text>
          </g>
        ))}

        {ENTRIES.map((item, index) => {
          const y = ROW_T + index * ROW_H;
          const active = index === selected;
          return (
            <g key={item.label} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <text
                x={AXIS_L}
                y={y - 4}
                fontSize={8.5}
                fill={active ? '#ffd66e' : 'rgba(226,233,246,0.88)'}
                fontFamily="system-ui, sans-serif"
              >
                {item.label} ({item.year})
              </text>
              <line
                x1={AXIS_L}
                x2={xOf(item.fraction)}
                y1={y + 6}
                y2={y + 6}
                stroke={active ? '#ffd66e' : 'rgba(102,224,212,0.55)'}
                strokeWidth={active ? 3 : 2}
              />
              <circle
                cx={xOf(item.fraction)}
                cy={y + 6}
                r={active ? 4.5 : 3}
                fill={active ? '#ffd66e' : '#66e0d4'}
              />
              <text
                x={xOf(item.fraction) + (xOf(item.fraction) > AXIS_R - 40 ? -6 : 6)}
                y={y + 9}
                textAnchor={xOf(item.fraction) > AXIS_R - 40 ? 'end' : 'start'}
                fontSize={7}
                fill="rgba(148,162,192,0.8)"
                fontFamily="ui-monospace, monospace"
              >
                {item.fraction.toExponential(1)}
              </text>
            </g>
          );
        })}
      </svg>

      <div className={styles.toggles}>
        {ENTRIES.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className={styles.toggle}
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
          >
            {item.year}
          </button>
        ))}
      </div>

      <p className={styles.epochDetail}>
        <strong>
          {entry?.label} ({entry?.year}).
        </strong>{' '}
        {entry?.detail}
      </p>
      <p className={styles.epochDetail}>
        Taken together these say something specific, and it is worth stating carefully. There is no
        universal clock — not for the Universe, and not even for the Earth, whose surface has no
        single rate once you measure to 10⁻¹⁹. But this is not evidence that time does not exist or
        that it is an illusion. Clocks measure something real, they can be predicted before they are
        read, and the predictions keep coming out right. What has gone is the assumption that
        everyone’s reading must agree.
      </p>
    </div>
  );
}
