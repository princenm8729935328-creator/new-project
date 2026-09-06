import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Why the distance in Newton's law is squared.
 *
 * The answer is geometry, not gravity, so the figure argues it geometrically.
 * The same fixed bundle of lines leaves the mass; at distance d it has to cover
 * a patch d times wider and d times taller, so it is spread over d² patches and
 * any one patch receives 1/d² of it.
 *
 * The squares are drawn axis-aligned and centred on the source's height with a
 * half-size of 13d at x = 30 + 100d. Every one of the four corner families then
 * lies on a straight line through the source, which is what makes the diagram
 * self-consistent rather than merely suggestive: the rays really do pass
 * through the corners of all three squares.
 */

const SRC_X = 30;
const SRC_Y = 85;
const STEP = 100;
const HALF = 13;

/** Corner of the patch at distance `d`, for sign pair (sx, sy). */
function corner(d: number, sx: number, sy: number): [number, number] {
  return [SRC_X + STEP * d + sx * HALF * d, SRC_Y + sy * HALF * d];
}

const W = 380;
const PLOT_TOP = 178;
const PLOT_H = 108;
// Wide enough that the rotated axis caption clears the tick labels.
const PLOT_LEFT = 50;
const PLOT_RIGHT = 16;
const PLOT_W = W - PLOT_LEFT - PLOT_RIGHT;
const D_MIN = 1;
const D_MAX = 4;
const H = 330;

const px = (d: number): number => PLOT_LEFT + ((d - D_MIN) / (D_MAX - D_MIN)) * PLOT_W;
const py = (f: number): number => PLOT_TOP + PLOT_H - f * PLOT_H;

/** The 1/d² curve, precomputed once — it never changes. */
const CURVE = ((): string => {
  const points: string[] = [];
  for (let d = D_MIN; d <= D_MAX + 1e-9; d += 0.05) {
    points.push(
      `${points.length === 0 ? 'M' : 'L'}${px(d).toFixed(1)},${py(1 / (d * d)).toFixed(1)}`,
    );
  }
  return points.join(' ');
})();

export default function InverseSquareLaw(_props: VisualizationProps): ReactNode {
  const [distance, setDistance] = useState(2);
  const fraction = 1 / (distance * distance);

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {/* ---- Spreading rays -------------------------------------------- */}
        {[
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ].map(([sx, sy]) => {
          const [x, y] = corner(3, sx!, sy!);
          return (
            <line
              key={`${sx}-${sy}`}
              x1={SRC_X}
              y1={SRC_Y}
              x2={x}
              y2={y}
              stroke="rgba(255,214,110,0.35)"
              strokeWidth={1}
            />
          );
        })}

        {[1, 2, 3].map((d) => {
          const size = HALF * 2 * d;
          const [left, top] = corner(d, -1, -1);
          const cells: ReactNode[] = [];
          for (let row = 0; row < d; row += 1) {
            for (let col = 0; col < d; col += 1) {
              cells.push(
                <rect
                  key={`${row}-${col}`}
                  x={left + (col * size) / d}
                  y={top + (row * size) / d}
                  width={size / d}
                  height={size / d}
                  fill="rgba(255,214,110,0.16)"
                  stroke="rgba(255,214,110,0.6)"
                  strokeWidth={0.8}
                />,
              );
            }
          }
          return (
            <g key={d}>
              {cells}
              <text
                x={left + size / 2}
                y={top + size + 13}
                textAnchor="middle"
                fontSize={10}
                fill="rgba(226,233,246,0.9)"
                fontFamily="ui-monospace, monospace"
              >
                {d === 1 ? '1 patch' : `${d * d} patches`}
              </text>
              <text
                x={left + size / 2}
                y={top - 5}
                textAnchor="middle"
                fontSize={9.5}
                fill="rgba(148,162,192,0.9)"
                fontFamily="system-ui, sans-serif"
              >
                r = {d}
              </text>
            </g>
          );
        })}

        <circle cx={SRC_X} cy={SRC_Y} r={7} fill="#ffd76e" />
        <circle cx={SRC_X} cy={SRC_Y} r={13} fill="none" stroke="rgba(255,214,110,0.3)" />
        <text
          x={SRC_X - 12}
          y={SRC_Y + 30}
          fontSize={9.5}
          fill="rgba(226,233,246,0.85)"
          fontFamily="system-ui, sans-serif"
        >
          mass
        </text>
        <text
          x={12}
          y={162}
          fontSize={10.5}
          fill="rgba(226,233,246,0.92)"
          fontFamily="system-ui, sans-serif"
        >
          Same total spread over more area — so each patch gets less.
        </text>

        {/* ---- The 1/r² curve -------------------------------------------- */}
        {[0, 0.25, 0.5, 0.75, 1].map((f) => (
          <g key={f}>
            <line
              x1={PLOT_LEFT}
              x2={W - PLOT_RIGHT}
              y1={py(f)}
              y2={py(f)}
              stroke="rgba(148,162,192,0.14)"
            />
            <text
              x={PLOT_LEFT - 6}
              y={py(f) + 3.5}
              textAnchor="end"
              fontSize={9.5}
              fill="rgba(148,162,192,0.85)"
              fontFamily="ui-monospace, monospace"
            >
              {f}
            </text>
          </g>
        ))}

        <path d={CURVE} fill="none" stroke="#7fc7ff" strokeWidth={2.4} />

        <line
          x1={px(distance)}
          x2={px(distance)}
          y1={PLOT_TOP}
          y2={py(fraction)}
          stroke="rgba(127,199,255,0.45)"
          strokeDasharray="3 3"
        />
        <circle cx={px(distance)} cy={py(fraction)} r={5} fill="#7fc7ff" />

        {[1, 2, 3, 4].map((d) => (
          <text
            key={d}
            x={px(d)}
            y={PLOT_TOP + PLOT_H + 15}
            textAnchor="middle"
            fontSize={9.5}
            fill="rgba(148,162,192,0.85)"
            fontFamily="ui-monospace, monospace"
          >
            {d}
          </text>
        ))}
        <text
          x={PLOT_LEFT + PLOT_W / 2}
          y={H - 6}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          distance, in multiples of the reference distance
        </text>
        <text
          x={10}
          y={PLOT_TOP + PLOT_H / 2}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
          transform={`rotate(-90 10 ${PLOT_TOP + PLOT_H / 2})`}
        >
          force, as a fraction
        </text>
      </svg>

      <div className={styles.controls}>
        <label className={styles.sliderLabel}>
          <span className="ds-visually-hidden">
            Distance, in multiples of the reference distance
          </span>
          <input
            className={styles.slider}
            type="range"
            min={D_MIN}
            max={D_MAX}
            step={0.05}
            value={distance}
            onChange={(event) => setDistance(Number(event.target.value))}
          />
        </label>
        <output className={styles.value}>
          ×{fraction < 0.1 ? fraction.toFixed(3) : fraction.toFixed(2)}
        </output>
      </div>
      <p className={styles.epochDetail} aria-live="polite">
        At <strong>{distance.toFixed(2)}×</strong> the distance the force is{' '}
        <strong>{(fraction * 100).toFixed(1)}%</strong> of what it was — that is 1 ÷{' '}
        {distance.toFixed(2)}², or 1 ÷ {(distance * distance).toFixed(2)}.
        {distance >= 1.95 &&
          distance <= 2.05 &&
          ' Twice as far away, exactly a quarter of the force.'}
        {distance >= 2.95 &&
          distance <= 3.05 &&
          ' Three times as far away, exactly a ninth of the force.'}
      </p>
    </div>
  );
}
