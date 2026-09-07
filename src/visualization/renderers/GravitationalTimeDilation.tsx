import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * How much slower a clock runs, from a GPS satellite to just outside a horizon.
 *
 * The span is ten orders of magnitude, which is exactly the point: the same
 * formula that adds 38 microseconds a day to a navigation satellite stops a
 * clock altogether at a horizon. A log scale is the only way to show both.
 *
 * Every row is computed from √(1 − 2GM/rc²) with measured masses and radii —
 * the Schwarzschild factor for a non-rotating, uncharged sphere, which real
 * bodies only approximate. The last row is under the reader's control, because
 * the interesting behaviour is all in the final factor of two before r_s.
 */

const G = 6.6743e-11;
const C2 = 299792458 ** 2;
const SOLAR_MASS = 1.9885e30;

/** 1 − dτ/dt: how much slower this clock runs than one infinitely far away. */
function slowing(gm: number, radius: number): number {
  const ratio = (2 * gm) / (radius * C2);
  return ratio >= 1 ? 1 : 1 - Math.sqrt(1 - ratio);
}

interface Place {
  readonly label: string;
  readonly gm: number;
  readonly radius: number;
  readonly note: string;
}

const PLACES: readonly Place[] = [
  {
    label: 'GPS satellite',
    gm: 3.986004e14,
    radius: 2.656e7,
    note: '20,200 km up — runs 38 µs/day fast relative to the ground',
  },
  {
    label: 'Earth’s surface',
    gm: 3.986004e14,
    radius: 6.371e6,
    note: 'about 22 milliseconds per year',
  },
  {
    label: 'Sun’s surface',
    gm: G * SOLAR_MASS,
    radius: 6.957e8,
    note: 'about one minute per year',
  },
  {
    label: 'White dwarf surface',
    gm: G * 1.018 * SOLAR_MASS,
    radius: 5.85e6,
    note: 'Sirius B — a solar mass inside an Earth-sized ball',
  },
  {
    label: 'Neutron star surface',
    gm: G * 1.4 * SOLAR_MASS,
    radius: 1.2e4,
    note: '1.4 solar masses inside 12 km',
  },
];

const W = 380;
const ROW = 30;
const TOP = 34;
const LABEL_W = 118;
const VALUE_W = 74;
const BAR_W = W - LABEL_W - VALUE_W - 14;
const LOG_MIN = -11;
const LOG_MAX = 0;
const H = TOP + (PLACES.length + 1) * ROW + 34;

const barWidth = (value: number): number =>
  Math.max(2, ((Math.log10(value) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * BAR_W);

function format(value: number): string {
  if (value >= 0.01) return `${(value * 100).toFixed(1)}%`;
  if (value >= 1e-6) return `${(value * 1e6).toPrecision(3)} ppm`;
  return value.toExponential(2);
}

export default function GravitationalTimeDilation(_props: VisualizationProps): ReactNode {
  /** Distance from a black hole, in Schwarzschild radii. */
  const [radii, setRadii] = useState(2);
  const horizonSlowing = 1 - Math.sqrt(1 - 1 / radii);

  const rows: readonly { label: string; value: number; note: string; live: boolean }[] = [
    ...PLACES.map((place) => ({
      label: place.label,
      value: slowing(place.gm, place.radius),
      note: place.note,
      live: false,
    })),
    {
      label: `${radii.toFixed(2)} × r_s from a black hole`,
      value: horizonSlowing,
      note: 'set by the slider below',
      live: true,
    },
  ];

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {[-10, -8, -6, -4, -2, 0].map((decade) => (
          <g key={decade}>
            <line
              x1={LABEL_W + barWidth(10 ** decade)}
              x2={LABEL_W + barWidth(10 ** decade)}
              y1={TOP - 6}
              y2={TOP + rows.length * ROW}
              stroke="rgba(148,162,192,0.14)"
            />
            <text
              x={LABEL_W + barWidth(10 ** decade)}
              y={TOP - 10}
              textAnchor="middle"
              fontSize={8.5}
              fill="rgba(148,162,192,0.8)"
              fontFamily="ui-monospace, monospace"
            >
              {decade === 0 ? '1' : `1e${decade}`}
            </text>
          </g>
        ))}
        <text
          x={8}
          y={14}
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          how much slower the clock runs — logarithmic
        </text>

        {rows.map((row, index) => {
          const rowY = TOP + index * ROW;
          return (
            <g key={row.label}>
              <text
                x={8}
                y={rowY + 12}
                fontSize={10}
                fontWeight={row.live ? 700 : 500}
                fill={row.live ? '#66e0d4' : 'rgba(226,233,246,0.92)'}
                fontFamily="system-ui, sans-serif"
              >
                {row.label}
              </text>
              <text
                x={8}
                y={rowY + 24}
                fontSize={8.5}
                fill="rgba(148,162,192,0.85)"
                fontFamily="system-ui, sans-serif"
              >
                {row.note}
              </text>
              <rect
                x={LABEL_W}
                y={rowY + 6}
                width={barWidth(row.value)}
                height={12}
                rx={2}
                fill={row.live ? '#66e0d4' : 'rgba(143,184,255,0.6)'}
              />
              <text
                x={W - 8}
                y={rowY + 16}
                textAnchor="end"
                fontSize={9.5}
                fill={row.live ? '#66e0d4' : 'rgba(148,162,192,0.95)'}
                fontFamily="ui-monospace, monospace"
              >
                {format(row.value)}
              </text>
            </g>
          );
        })}

        <text
          x={8}
          y={H - 10}
          fontSize={9}
          fill="rgba(148,162,192,0.85)"
          fontFamily="system-ui, sans-serif"
        >
          At the horizon itself the factor reaches 1: the clock stops, as seen from far away.
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Distance</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Distance from a black hole, in Schwarzschild radii
            </span>
            <input
              className={styles.slider}
              type="range"
              min={1.01}
              max={50}
              step={0.01}
              value={radii}
              onChange={(event) => setRadii(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{radii.toFixed(2)} r_s</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        At <strong>{radii.toFixed(2)} Schwarzschild radii</strong> a hovering clock runs{' '}
        <strong>{format(horizonSlowing)}</strong> slower than one far away — so one year out there
        is {(1 / (1 - horizonSlowing)).toFixed(3)} years back home. The effect is unbounded as the
        horizon is approached, which is why an infalling object appears to freeze and fade rather
        than to arrive.
      </p>
    </div>
  );
}
