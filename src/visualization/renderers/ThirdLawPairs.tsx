import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Action–reaction pairs, drawn on the objects they actually act on.
 *
 * The design is the argument. Both arrows are always exactly the same length,
 * because the forces are always exactly equal — but they are drawn attached to
 * two separate bodies, in two colours, on opposite sides of a gap. There is no
 * way to read this figure as "the forces cancel", because there is nowhere for
 * them to cancel: nothing has both arrows on it.
 *
 * The accelerations underneath come from a = F/m with the stated masses. They
 * are illustrative round numbers, not measurements.
 */

interface Scenario {
  readonly id: string;
  readonly label: string;
  readonly force: number;
  readonly left: { name: string; mass: number; massLabel: string };
  readonly right: { name: string; mass: number; massLabel: string };
  readonly explain: string;
}

const SCENARIOS: readonly Scenario[] = [
  {
    id: 'skaters',
    label: 'Two skaters',
    force: 200,
    left: { name: 'Skater A', mass: 50, massLabel: '50 kg' },
    right: { name: 'Skater B', mass: 80, massLabel: '80 kg' },
    explain:
      'A pushes B and B pushes A, with one identical 200 N interaction. Both skaters move, in opposite directions, and the lighter one moves faster.',
  },
  {
    id: 'rocket',
    label: 'Rocket',
    force: 30000,
    left: { name: 'Exhaust gas', mass: 10, massLabel: '10 kg of gas' },
    right: { name: 'Rocket', mass: 1000, massLabel: '1,000 kg' },
    explain:
      'The rocket pushes gas backwards; the gas pushes the rocket forwards. Nothing outside is being pushed against, which is why rockets work in vacuum — better than in air, in fact.',
  },
  {
    id: 'jump',
    label: 'Jumping',
    force: 1400,
    left: { name: 'Earth', mass: 5.972e24, massLabel: '5.97 × 10²⁴ kg' },
    right: { name: 'Person', mass: 70, massLabel: '70 kg' },
    explain:
      'You push down on the Earth exactly as hard as it pushes up on you. The Earth really does accelerate — by an amount far too small to detect, because it is 10²³ times more massive than you.',
  },
  {
    id: 'collision',
    label: 'Collision',
    force: 60000,
    left: { name: 'Lorry', mass: 3000, massLabel: '3,000 kg' },
    right: { name: 'Car', mass: 1200, massLabel: '1,200 kg' },
    explain:
      'Both vehicles feel exactly the same force. The car is wrecked because the same force on a quarter of the mass gives four times the acceleration — and acceleration, not force, is what injures people.',
  },
];

const W = 380;
const H = 176;
const MID = H / 2 - 16;
const ARROW = 62;

function acceleration(force: number, mass: number): string {
  const a = force / mass;
  if (a < 0.001) return `${a.toExponential(1)} m/s²`;
  if (a >= 100) return `${a.toFixed(0)} m/s²`;
  return `${a.toFixed(1)} m/s²`;
}

export default function ThirdLawPairs(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState('skaters');
  const scenario = SCENARIOS.find((entry) => entry.id === selected) ?? SCENARIOS[0]!;

  const leftX = 96;
  const rightX = W - 96;

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text
          x={W / 2}
          y={16}
          textAnchor="middle"
          fontSize={10.5}
          fill="rgba(226,233,246,0.92)"
          fontFamily="system-ui, sans-serif"
        >
          Same size. Opposite directions. Different objects.
        </text>

        {/* The gap between the two bodies: the arrows can never meet. */}
        <line
          x1={W / 2}
          x2={W / 2}
          y1={30}
          y2={MID + 40}
          stroke="rgba(148,162,192,0.22)"
          strokeDasharray="3 4"
        />

        {/* ---- Left body ---------------------------------------------------- */}
        <rect
          x={leftX - 30}
          y={MID - 20}
          width={60}
          height={40}
          rx={6}
          fill="rgba(255,214,110,0.9)"
        />
        <text
          x={leftX}
          y={MID + 4}
          textAnchor="middle"
          fontSize={10}
          fontWeight={700}
          fill="#04060d"
          fontFamily="system-ui, sans-serif"
        >
          {scenario.left.name}
        </text>
        <line
          x1={leftX - 30}
          x2={leftX - 30 - ARROW + 10}
          y1={MID}
          y2={MID}
          stroke="#ffd76e"
          strokeWidth={3}
        />
        <polygon
          points={`${leftX - 30 - ARROW},${MID} ${leftX - 30 - ARROW + 11},${MID - 6} ${leftX - 30 - ARROW + 11},${MID + 6}`}
          fill="#ffd76e"
        />
        <text
          x={leftX - 30 - ARROW / 2 - 4}
          y={MID - 12}
          textAnchor="middle"
          fontSize={9.5}
          fill="#ffd76e"
          fontFamily="ui-monospace, monospace"
        >
          {scenario.force.toLocaleString()} N
        </text>

        {/* ---- Right body --------------------------------------------------- */}
        <rect
          x={rightX - 30}
          y={MID - 20}
          width={60}
          height={40}
          rx={6}
          fill="rgba(127,199,255,0.9)"
        />
        <text
          x={rightX}
          y={MID + 4}
          textAnchor="middle"
          fontSize={10}
          fontWeight={700}
          fill="#04060d"
          fontFamily="system-ui, sans-serif"
        >
          {scenario.right.name}
        </text>
        <line
          x1={rightX + 30}
          x2={rightX + 30 + ARROW - 10}
          y1={MID}
          y2={MID}
          stroke="#7fc7ff"
          strokeWidth={3}
        />
        <polygon
          points={`${rightX + 30 + ARROW},${MID} ${rightX + 30 + ARROW - 11},${MID - 6} ${rightX + 30 + ARROW - 11},${MID + 6}`}
          fill="#7fc7ff"
        />
        <text
          x={rightX + 30 + ARROW / 2 + 4}
          y={MID - 12}
          textAnchor="middle"
          fontSize={9.5}
          fill="#7fc7ff"
          fontFamily="ui-monospace, monospace"
        >
          {scenario.force.toLocaleString()} N
        </text>

        {/* ---- Masses and resulting accelerations --------------------------- */}
        <text
          x={leftX}
          y={MID + 38}
          textAnchor="middle"
          fontSize={9.5}
          fill="rgba(148,162,192,0.95)"
          fontFamily="ui-monospace, monospace"
        >
          {scenario.left.massLabel}
        </text>
        <text
          x={leftX}
          y={MID + 54}
          textAnchor="middle"
          fontSize={11}
          fontWeight={700}
          fill="#ffd76e"
          fontFamily="ui-monospace, monospace"
        >
          a = {acceleration(scenario.force, scenario.left.mass)}
        </text>
        <text
          x={rightX}
          y={MID + 38}
          textAnchor="middle"
          fontSize={9.5}
          fill="rgba(148,162,192,0.95)"
          fontFamily="ui-monospace, monospace"
        >
          {scenario.right.massLabel}
        </text>
        <text
          x={rightX}
          y={MID + 54}
          textAnchor="middle"
          fontSize={11}
          fontWeight={700}
          fill="#7fc7ff"
          fontFamily="ui-monospace, monospace"
        >
          a = {acceleration(scenario.force, scenario.right.mass)}
        </text>
      </svg>

      <div className={styles.toggles}>
        {SCENARIOS.map((entry) => (
          <button
            key={entry.id}
            type="button"
            className={styles.toggle}
            aria-pressed={entry.id === selected}
            onClick={() => setSelected(entry.id)}
          >
            {entry.label}
          </button>
        ))}
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        {scenario.explain}
      </p>
    </div>
  );
}
