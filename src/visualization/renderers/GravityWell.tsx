import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The gravitational well as what it actually is: a graph of energy.
 *
 * The rubber-sheet picture is this curve rotated about its axis, and it misleads
 * badly — it explains gravity by drawing a ball rolling downhill under gravity.
 * Plotting −GM/r honestly, against distance, removes the circularity: there is
 * no "down" here, only a quantity that is more negative closer in.
 *
 * Computed for the Earth from its measured mass and radius. The horizontal line
 * is the total energy of a body launched at the chosen speed; where it crosses
 * the curve is where the body runs out of kinetic energy and turns around.
 */

const GM = 3.986004e14; // m³/s², Earth
const R = 6.371e6; // m, Earth mean radius
const SURFACE_POTENTIAL = -GM / R / 1e6; // MJ/kg ≈ −62.56
const ESCAPE_KMS = Math.sqrt((2 * GM) / R) / 1000;

const W = 380;
const H = 268;
const PAD = { top: 22, right: 14, bottom: 46, left: 48 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;
const R_MAX = 12; // in Earth radii
const E_MIN = -70; // MJ/kg
const E_MAX = 8;

const x = (radii: number): number => PAD.left + ((radii - 1) / (R_MAX - 1)) * PLOT_W;
const y = (energy: number): number =>
  PAD.top + PLOT_H - ((energy - E_MIN) / (E_MAX - E_MIN)) * PLOT_H;

/** −GM/r, sampled once: the curve does not depend on the slider. */
const CURVE = ((): string => {
  const points: string[] = [];
  for (let radii = 1; radii <= R_MAX + 1e-9; radii += 0.05) {
    points.push(
      `${points.length === 0 ? 'M' : 'L'}${x(radii).toFixed(1)},${y(SURFACE_POTENTIAL / radii).toFixed(1)}`,
    );
  }
  return points.join(' ');
})();

export default function GravityWell(_props: VisualizationProps): ReactNode {
  const [speed, setSpeed] = useState(5); // km/s

  const kinetic = (0.5 * (speed * 1000) ** 2) / 1e6; // MJ/kg
  const total = SURFACE_POTENTIAL + kinetic;
  const escapes = total >= 0;
  // Turning point: where all the kinetic energy has been spent climbing.
  const apexRadii = escapes ? Infinity : SURFACE_POTENTIAL / total;
  const apexOnChart = !escapes && apexRadii <= R_MAX;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {[0, -20, -40, -60].map((energy) => (
          <g key={energy}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y(energy)}
              y2={y(energy)}
              stroke={energy === 0 ? 'rgba(148,162,192,0.4)' : 'rgba(148,162,192,0.14)'}
              strokeDasharray={energy === 0 ? '4 3' : undefined}
            />
            <text
              x={PAD.left - 6}
              y={y(energy) + 3.5}
              textAnchor="end"
              fontSize={9.5}
              fill="rgba(148,162,192,0.85)"
              fontFamily="ui-monospace, monospace"
            >
              {energy}
            </text>
          </g>
        ))}

        {/* The well itself. */}
        <path d={CURVE} fill="none" stroke="#8fb8ff" strokeWidth={2.4} />
        <path
          d={`${CURVE} L${x(R_MAX)},${y(E_MIN)} L${x(1)},${y(E_MIN)} Z`}
          fill="rgba(143,184,255,0.08)"
        />

        {/* Total energy of the launched body. */}
        <line
          x1={x(1)}
          x2={apexOnChart ? x(apexRadii) : W - PAD.right}
          y1={y(Math.max(total, E_MIN))}
          y2={y(Math.max(total, E_MIN))}
          stroke={escapes ? '#4fe0c0' : '#ffd76e'}
          strokeWidth={2}
        />
        {apexOnChart && (
          <>
            <line
              x1={x(apexRadii)}
              x2={x(apexRadii)}
              y1={y(total)}
              y2={y(E_MIN)}
              stroke="rgba(255,214,110,0.5)"
              strokeDasharray="3 3"
            />
            <circle cx={x(apexRadii)} cy={y(total)} r={5} fill="#ffd76e" />
            <text
              x={Math.min(x(apexRadii) + 8, W - PAD.right - 60)}
              y={y(total) - 8}
              fontSize={9.5}
              fill="#ffd76e"
              fontFamily="system-ui, sans-serif"
            >
              turns around
            </text>
          </>
        )}
        {escapes && (
          <text
            x={W - PAD.right - 6}
            y={y(total) - 8}
            textAnchor="end"
            fontSize={10}
            fontWeight={600}
            fill="#4fe0c0"
            fontFamily="system-ui, sans-serif"
          >
            never turns around
          </text>
        )}

        {/* Earth's surface. */}
        <line
          x1={x(1)}
          x2={x(1)}
          y1={PAD.top}
          y2={PAD.top + PLOT_H}
          stroke="rgba(226,233,246,0.35)"
        />
        <text
          x={x(1) + 4}
          y={PAD.top + 10}
          fontSize={9.5}
          fill="rgba(226,233,246,0.8)"
          fontFamily="system-ui, sans-serif"
        >
          surface
        </text>

        {[1, 4, 8, 12].map((radii) => (
          <text
            key={radii}
            x={x(radii)}
            y={PAD.top + PLOT_H + 15}
            textAnchor="middle"
            fontSize={9.5}
            fill="rgba(148,162,192,0.85)"
            fontFamily="ui-monospace, monospace"
          >
            {radii}
          </text>
        ))}
        <text
          x={PAD.left + PLOT_W / 2}
          y={H - 16}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          distance from Earth’s centre, in Earth radii
        </text>
        <text
          x={11}
          y={PAD.top + PLOT_H / 2}
          textAnchor="middle"
          fontSize={10}
          fill="rgba(148,162,192,0.9)"
          fontFamily="system-ui, sans-serif"
          transform={`rotate(-90 11 ${PAD.top + PLOT_H / 2})`}
        >
          energy per kilogram (MJ)
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Launch</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Launch speed in kilometres per second</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={14}
              step={0.05}
              value={speed}
              onChange={(event) => setSpeed(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{speed.toFixed(2)} km/s</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        {escapes ? (
          <>
            <strong>{speed.toFixed(2)} km/s is at or above escape velocity</strong> (
            {ESCAPE_KMS.toFixed(2)} km/s). Total energy is {total.toFixed(1)} MJ/kg — no longer
            negative, so the body never runs out of kinetic energy and never turns around.
          </>
        ) : (
          <>
            At <strong>{speed.toFixed(2)} km/s</strong> the body carries {kinetic.toFixed(1)} MJ/kg
            of kinetic energy into a well {Math.abs(SURFACE_POTENTIAL).toFixed(1)} MJ/kg deep. Total
            energy {total.toFixed(1)} MJ/kg — still negative, so it climbs to{' '}
            <strong>
              {apexRadii > 200 ? 'far off the chart' : `${apexRadii.toFixed(2)} Earth radii`}
            </strong>{' '}
            and falls back. Escape needs {ESCAPE_KMS.toFixed(2)} km/s.
          </>
        )}
      </p>
    </div>
  );
}
