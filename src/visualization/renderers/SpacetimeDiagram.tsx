import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * A Minkowski diagram with a working boost.
 *
 * The reason this figure exists rather than a paragraph: the invariance of the
 * interval is a claim that can be *checked*, and here it is checked live. Drag
 * the boost and watch two numbers move while a third refuses to. The primed
 * coordinates of the events change; the interval printed beside them does not,
 * to the digit.
 *
 * The 45-degree light cone is a scaling convention (plotting ct rather than t),
 * not a measurement — the caption says so.
 */

const W = 380;
const H = 330;
const CX = W / 2;
const CY = 218;
const UNIT = 88; // pixels per unit of ct and of x

/** Screen position of an event given in (x, ct) units. */
function place(spaceUnits: number, timeUnits: number): [number, number] {
  return [CX + spaceUnits * UNIT, CY - timeUnits * UNIT];
}

interface Event {
  readonly id: string;
  readonly label: string;
  /** Space and time coordinates in the unprimed frame, in units where c = 1. */
  readonly x: number;
  readonly ct: number;
  readonly colour: string;
}

const EVENTS: readonly Event[] = [
  { id: 'A', label: 'A', x: 0, ct: 0, colour: '#e2e9f6' },
  { id: 'B', label: 'B', x: 1.15, ct: 0.4, colour: '#ffd76e' },
  { id: 'C', label: 'C', x: 0.35, ct: 1.15, colour: '#66e0d4' },
];

export default function SpacetimeDiagram(_props: VisualizationProps): ReactNode {
  const [beta, setBeta] = useState(0.4);
  const gamma = 1 / Math.sqrt(1 - beta * beta);

  /** Lorentz transform into the frame moving at `beta`. */
  const boost = (event: Event): { x: number; ct: number } => ({
    x: gamma * (event.x - beta * event.ct),
    ct: gamma * (event.ct - beta * event.x),
  });

  const b = EVENTS[1]!;
  const c = EVENTS[2]!;
  const bPrime = boost(b);
  const cPrime = boost(c);
  // s² = (cΔt)² − Δx², measured from A at the origin. Invariant under the boost.
  const intervalB = b.ct * b.ct - b.x * b.x;
  const intervalC = c.ct * c.ct - c.x * c.x;

  const reach = 1.55;
  const [lightRightX, lightRightY] = place(reach, reach);
  const [lightLeftX, lightLeftY] = place(-reach, reach);
  // The t′ axis is the line x = β·ct; the x′ axis is ct = β·x.
  const [tAxisX, tAxisY] = place(beta * reach, reach);
  const [xAxisX, xAxisY] = place(reach, beta * reach);

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        {/* Unprimed grid. */}
        {[-1, 1].map((s) => (
          <line
            key={`v${s}`}
            x1={place(s, 0)[0]}
            x2={place(s, 0)[0]}
            y1={place(0, reach)[1]}
            y2={CY + 18}
            stroke="rgba(148,162,192,0.12)"
          />
        ))}
        {[1].map((t) => (
          <line
            key={`h${t}`}
            x1={place(-reach, 0)[0]}
            x2={place(reach, 0)[0]}
            y1={place(0, t)[1]}
            y2={place(0, t)[1]}
            stroke="rgba(148,162,192,0.12)"
          />
        ))}

        {/* The light cone: fixed, whatever the boost. */}
        <path
          d={`M${CX},${CY} L${lightRightX},${lightRightY} L${lightLeftX},${lightLeftY} Z`}
          fill="rgba(255,214,110,0.07)"
        />
        <line
          x1={CX}
          y1={CY}
          x2={lightRightX}
          y2={lightRightY}
          stroke="#ffd76e"
          strokeWidth={1.6}
        />
        <line x1={CX} y1={CY} x2={lightLeftX} y2={lightLeftY} stroke="#ffd76e" strokeWidth={1.6} />
        <text
          x={place(reach * 0.62, reach * 0.62)[0] + 6}
          y={place(reach * 0.62, reach * 0.62)[1] + 13}
          fontSize={9.5}
          fill="rgba(255,214,110,0.9)"
          fontFamily="system-ui, sans-serif"
        >
          light
        </text>

        {/* Unprimed axes. */}
        <line
          x1={place(-reach, 0)[0]}
          x2={place(reach, 0)[0]}
          y1={CY}
          y2={CY}
          stroke="rgba(226,233,246,0.55)"
        />
        <line
          x1={CX}
          x2={CX}
          y1={CY + 18}
          y2={place(0, reach)[1]}
          stroke="rgba(226,233,246,0.55)"
        />
        <text
          x={place(reach, 0)[0] - 2}
          y={CY + 14}
          textAnchor="end"
          fontSize={9.5}
          fill="rgba(226,233,246,0.75)"
          fontFamily="ui-monospace, monospace"
        >
          x
        </text>
        <text
          x={CX + 5}
          y={place(0, reach)[1] + 10}
          fontSize={9.5}
          fill="rgba(226,233,246,0.75)"
          fontFamily="ui-monospace, monospace"
        >
          ct
        </text>

        {/* Primed axes: the moving observer's time and space directions. */}
        <line x1={CX} y1={CY} x2={tAxisX} y2={tAxisY} stroke="#a97bff" strokeWidth={1.8} />
        <line x1={CX} y1={CY} x2={xAxisX} y2={xAxisY} stroke="#a97bff" strokeWidth={1.8} />
        <text
          x={tAxisX + 5}
          y={tAxisY + 10}
          fontSize={9.5}
          fill="#a97bff"
          fontFamily="ui-monospace, monospace"
        >
          ct′
        </text>
        <text
          x={xAxisX - 2}
          y={xAxisY - 5}
          textAnchor="end"
          fontSize={9.5}
          fill="#a97bff"
          fontFamily="ui-monospace, monospace"
        >
          x′
        </text>

        {/* Line of simultaneity through B, in the primed frame: parallel to x′. */}
        <line
          x1={place(b.x - reach, b.ct - beta * reach)[0]}
          y1={place(b.x - reach, b.ct - beta * reach)[1]}
          x2={place(b.x + 0.35, b.ct + beta * 0.35)[0]}
          y2={place(b.x + 0.35, b.ct + beta * 0.35)[1]}
          stroke="rgba(169,123,255,0.5)"
          strokeDasharray="4 3"
        />

        {EVENTS.map((event) => {
          const [ex, ey] = place(event.x, event.ct);
          return (
            <g key={event.id}>
              <circle cx={ex} cy={ey} r={5} fill={event.colour} />
              <text
                x={ex + 8}
                y={ey - 6}
                fontSize={11}
                fontWeight={700}
                fill={event.colour}
                fontFamily="ui-monospace, monospace"
              >
                {event.label}
              </text>
            </g>
          );
        })}

        <text
          x={10}
          y={16}
          fontSize={10.5}
          fill="rgba(226,233,246,0.92)"
          fontFamily="system-ui, sans-serif"
        >
          The purple axes tilt. The light cone never does.
        </text>
        <text
          x={10}
          y={H - 8}
          fontSize={9}
          fill="rgba(148,162,192,0.85)"
          fontFamily="system-ui, sans-serif"
        >
          Units where c = 1, so light runs at 45°. B is outside A’s light cone; C is inside it.
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Boost</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">
              Speed of the second frame, as a fraction of c
            </span>
            <input
              className={styles.slider}
              type="range"
              min={-0.85}
              max={0.85}
              step={0.01}
              value={beta}
              onChange={(event) => setBeta(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{beta.toFixed(2)} c</output>
        </div>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        In the boosted frame, <strong>B</strong> is at x′ = {bPrime.x.toFixed(2)}, ct′ ={' '}
        {bPrime.ct.toFixed(2)}, and <strong>C</strong> is at x′ = {cPrime.x.toFixed(2)}, ct′ ={' '}
        {cPrime.ct.toFixed(2)} — both change as you move the slider.{' '}
        <strong>
          The intervals do not: s² = {intervalB.toFixed(3)} for B and {intervalC.toFixed(3)} for C,
        </strong>{' '}
        at every boost. B’s negative interval means no signal can connect it to A, so observers may
        disagree about which happened first; C’s positive interval means every observer agrees C
        came after A.
      </p>
    </div>
  );
}
