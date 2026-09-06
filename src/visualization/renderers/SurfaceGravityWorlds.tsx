import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Surface gravity across the Solar System, with a mass slider attached.
 *
 * The figure exists to make one distinction physical rather than verbal: the
 * slider changes a *mass*, and the mass is the same number on every row. Only
 * the weight — the force — differs, and it differs by a factor of a thousand
 * between the top and bottom of the chart.
 *
 * Values are the published surface accelerations. For the Sun, Jupiter and
 * Neptune there is no solid surface; the quoted figure is the acceleration at a
 * defined reference level, and the row says so.
 */

interface World {
  readonly name: string;
  readonly g: number;
  readonly note?: string;
}

const WORLDS: readonly World[] = [
  { name: 'Sun', g: 274, note: 'at the photosphere — no surface to stand on' },
  { name: 'Jupiter', g: 24.79, note: 'at the 1-bar level — no surface to stand on' },
  { name: 'Neptune', g: 11.15, note: 'at the 1-bar level — no surface to stand on' },
  { name: 'Earth', g: 9.8 },
  { name: 'Venus', g: 8.87 },
  { name: 'Mars', g: 3.71 },
  { name: 'Mercury', g: 3.7 },
  { name: 'Moon', g: 1.62 },
  { name: 'Ceres', g: 0.27 },
];

const W = 380;
const ROW = 24;
const TOP = 26;
const LABEL_W = 66;
// Wide enough for the longest row, "274.00 m/s² · 19180 N": a narrower column
// let the text run back underneath the Sun's bar.
const VALUE_W = 134;
const BAR_MAX = 25; // m/s² at full bar width; the Sun is drawn clipped.
const BAR_W = W - LABEL_W - VALUE_W - 14;
const H = TOP + WORLDS.length * ROW + 26;

export default function SurfaceGravityWorlds(_props: VisualizationProps): ReactNode {
  const [mass, setMass] = useState(70);

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
          fontSize={10.5}
          fill="rgba(226,233,246,0.92)"
          fontFamily="system-ui, sans-serif"
        >
          Your mass stays {mass} kg everywhere. Only the weight changes.
        </text>

        {WORLDS.map((world, index) => {
          const y = TOP + index * ROW;
          const clipped = world.g > BAR_MAX;
          const width = Math.min(world.g / BAR_MAX, 1) * BAR_W;
          const isEarth = world.name === 'Earth';
          return (
            <g key={world.name}>
              <text
                x={10}
                y={y + 13}
                fontSize={10.5}
                fontWeight={isEarth ? 700 : 500}
                fill={isEarth ? '#4fe0c0' : 'rgba(226,233,246,0.92)'}
                fontFamily="system-ui, sans-serif"
              >
                {world.name}
              </text>
              <rect
                x={LABEL_W}
                y={y + 3}
                width={width}
                height={14}
                rx={2}
                fill={isEarth ? '#4fe0c0' : '#8fb8ff'}
                opacity={clipped ? 0.5 : 0.85}
              />
              {clipped && (
                <>
                  <path
                    d={`M${LABEL_W + BAR_W - 8},${y + 3} l6,7 l-6,7`}
                    fill="none"
                    stroke="#8fb8ff"
                    strokeWidth={1.5}
                  />
                  <text
                    x={LABEL_W + 6}
                    y={y + 14}
                    fontSize={9.5}
                    fill="#04060d"
                    fontWeight={700}
                    fontFamily="ui-monospace, monospace"
                  >
                    off scale
                  </text>
                </>
              )}
              <text
                x={W - 8}
                y={y + 13}
                textAnchor="end"
                fontSize={9.5}
                fill="rgba(148,162,192,0.95)"
                fontFamily="ui-monospace, monospace"
              >
                {world.g.toFixed(2)} m/s² · {Math.round(mass * world.g)} N
              </text>
            </g>
          );
        })}

        <line
          x1={LABEL_W + (9.8 / BAR_MAX) * BAR_W}
          x2={LABEL_W + (9.8 / BAR_MAX) * BAR_W}
          y1={TOP}
          y2={TOP + WORLDS.length * ROW}
          stroke="rgba(79,224,192,0.45)"
          strokeDasharray="3 3"
        />
        <text
          x={10}
          y={H - 8}
          fontSize={9.5}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          Dashed line: Earth’s 9.80 m/s². Bars are clipped above 25 m/s².
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Your mass</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Your mass in kilograms</span>
            <input
              className={styles.slider}
              type="range"
              min={5}
              max={150}
              step={1}
              value={mass}
              onChange={(event) => setMass(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{mass} kg</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        A <strong>{mass} kg</strong> body weighs <strong>{Math.round(mass * 9.8)} N</strong> on
        Earth, <strong>{Math.round(mass * 1.62)} N</strong> on the Moon and{' '}
        <strong>{Math.round(mass * 3.71)} N</strong> on Mars. On the Sun’s photosphere it would
        weigh {Math.round(mass * 274).toLocaleString()} N — about{' '}
        {((mass * 274 * 0.10197) / 1000).toFixed(1)} tonnes-force of apparent load.
      </p>
    </div>
  );
}
