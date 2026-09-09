import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Interpretations side by side, with the column that matters last.
 *
 * The temptation with a figure like this is to score them, and the honest answer
 * is that they cannot be scored on evidence, because they agree on the
 * predictions. That is what makes them interpretations rather than rival
 * theories. So the table compares what each one asserts and what each one costs,
 * and states plainly that no experiment currently distinguishes them.
 *
 * The one genuine exception is drawn as an exception: spontaneous-collapse
 * models predict small deviations from standard quantum mechanics, so they are
 * testable, and experiments have squeezed their parameter space without ruling
 * the class out.
 */

interface Interpretation {
  readonly name: string;
  readonly wavefunction: string;
  readonly collapse: string;
  readonly deterministic: string;
  readonly cost: string;
  readonly detail: string;
  readonly testable: boolean;
}

const INTERPRETATIONS: readonly Interpretation[] = [
  {
    name: 'Copenhagen-style',
    wavefunction: 'a tool',
    collapse: 'postulated',
    deterministic: 'no',
    cost: 'leaves "measurement" undefined',
    detail:
      'The wavefunction is a device for computing probabilities; measurement collapses it, and the theory does not say what a measurement is. Physicists calculate with this successfully every day. Its cost is that the dividing line between quantum system and classical apparatus is never specified — the measurement problem, stated rather than solved.',
    testable: false,
  },
  {
    name: 'Many-worlds',
    wavefunction: 'real',
    collapse: 'never',
    deterministic: 'yes',
    cost: 'must explain where probabilities come from',
    detail:
      'The wavefunction is a real object and always evolves smoothly; there is no collapse. What looks like one outcome is one branch of a state containing all of them. This buys a theory with one rule instead of two, at the price of an enormous ontology and a long-running difficulty in deriving the Born probabilities from within it.',
    testable: false,
  },
  {
    name: 'Pilot wave (de Broglie–Bohm)',
    wavefunction: 'real, guiding',
    collapse: 'never',
    deterministic: 'yes',
    cost: 'explicitly non-local',
    detail:
      'Particles have definite positions at all times, guided by a real wave. It reproduces the standard predictions exactly and makes the double slit unmysterious — the particle goes through one slit, the wave through both. Its cost is that the guidance is explicitly non-local, which sits awkwardly with relativity even though it cannot be used to signal.',
    testable: false,
  },
  {
    name: 'Spontaneous collapse (GRW-type)',
    wavefunction: 'real',
    collapse: 'physical',
    deterministic: 'no',
    cost: 'adds new constants; makes new predictions',
    detail:
      'Collapse is a real physical process that happens spontaneously and rarely for a single particle, but almost instantly for a large object because the rate scales with the number of constituents. This is the exception in the table: it is a different theory, not just a different story, so it can be tested — and experiments have narrowed its parameter space substantially without excluding the whole class.',
    testable: true,
  },
  {
    name: 'Epistemic (QBism and others)',
    wavefunction: 'information',
    collapse: 'belief update',
    deterministic: 'n/a',
    cost: 'says little about what exists',
    detail:
      'The quantum state describes an agent’s expectations rather than the world, and collapse is just what happens when that agent learns something. This dissolves several puzzles by declining them. Its cost is that it says little about what is physically there, which many find unsatisfying in a physical theory.',
    testable: false,
  },
];

const W = 380;
const H = 210;
const ROW_T = 52;
const ROW_H = 30;
const COL_1 = 14;
const COL_2 = 176;
const COL_3 = 250;
const COL_4 = 318;

export default function InterpretationMap(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(0);
  const entry = INTERPRETATIONS[selected] ?? INTERPRETATIONS[0];

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
          Interpretations: same predictions, different stories
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.72)">
          not a ranking: no experiment distinguishes them
        </text>

        <text x={COL_1} y={ROW_T - 8} fontSize={7.5} fill="rgba(148,162,192,0.7)">
          interpretation
        </text>
        <text x={COL_2} y={ROW_T - 8} fontSize={7.5} fill="rgba(148,162,192,0.7)">
          wavefunction
        </text>
        <text x={COL_3} y={ROW_T - 8} fontSize={7.5} fill="rgba(148,162,192,0.7)">
          collapse
        </text>
        <text x={COL_4} y={ROW_T - 8} fontSize={7.5} fill="rgba(148,162,192,0.7)">
          determinism
        </text>
        <line x1={COL_1} x2={W - 10} y1={ROW_T - 4} y2={ROW_T - 4} stroke="rgba(148,162,192,0.3)" />

        {INTERPRETATIONS.map((item, index) => {
          const y = ROW_T + index * ROW_H;
          const active = index === selected;
          return (
            <g key={item.name} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <rect
                x={COL_1 - 4}
                y={y - 2}
                width={W - COL_1 - 6}
                height={ROW_H - 6}
                rx={4}
                fill={active ? 'rgba(169,123,255,0.18)' : 'transparent'}
              />
              <text
                x={COL_1}
                y={y + 12}
                fontSize={8.5}
                fill={active ? '#e2e9f6' : 'rgba(226,233,246,0.82)'}
                fontFamily="system-ui, sans-serif"
              >
                {item.name}
              </text>
              <text x={COL_2} y={y + 12} fontSize={7.5} fill="rgba(148,162,192,0.85)">
                {item.wavefunction}
              </text>
              <text x={COL_3} y={y + 12} fontSize={7.5} fill="rgba(148,162,192,0.85)">
                {item.collapse}
              </text>
              <text x={COL_4} y={y + 12} fontSize={7.5} fill="rgba(148,162,192,0.85)">
                {item.deterministic}
              </text>
              {item.testable && (
                <text x={COL_1} y={y + 21} fontSize={6.8} fill="#ffd66e">
                  testable — makes different predictions
                </text>
              )}
            </g>
          );
        })}
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Row</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Which interpretation to describe</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={INTERPRETATIONS.length - 1}
              step={1}
              value={selected}
              onChange={(event) => setSelected(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>
            {selected + 1}/{INTERPRETATIONS.length}
          </output>
        </div>
      </div>

      <p className={styles.epochDetail}>
        <strong>{entry?.name}.</strong> {entry?.detail} <em>Cost: {entry?.cost}.</em>
      </p>
      <p className={styles.epochDetail}>
        Where this stands today: <strong>no experiment distinguishes these from one another</strong>
        , because they agree on every prediction that has been tested. Decoherence explains why
        interference disappears for large objects and is not itself an interpretation — it is
        standard quantum mechanics, and every row above accepts it. What it does not do is single
        out one outcome from the many, which is why the measurement problem is unresolved rather
        than solved. Anyone telling you that one of these has been proved is telling you something
        the evidence does not support.
      </p>
    </div>
  );
}
