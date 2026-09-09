import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * How far up the mass scale quantum interference has actually been demonstrated.
 *
 * The honest answer to "where does quantum mechanics stop?" is that nothing in
 * the theory says it stops anywhere, and that the demonstrated range currently
 * ends with molecules of about 25,000 atomic mass units. Above that the ladder
 * continues unmarked — untested, not excluded.
 *
 * The reason larger objects do not show interference is decoherence, which is
 * calculable, not a boundary where the rules change. A dust grain in air is
 * hit by so many molecules and photons that a record of its position exists
 * almost immediately, and once that record exists there is nothing left to
 * interfere.
 */

interface Rung {
  readonly label: string;
  readonly kg: number;
  readonly year?: number;
  readonly demonstrated: boolean;
  readonly note: string;
}

const RUNGS: readonly Rung[] = [
  {
    label: 'Electron',
    kg: 9.109e-31,
    year: 1961,
    demonstrated: true,
    note: 'Jönsson passed electrons through fabricated slits and saw fringes. Tonomura’s 1989 experiment sent them one at a time and filmed the pattern building up out of individual detections.',
  },
  {
    label: 'Neutron',
    kg: 1.675e-27,
    year: 1974,
    demonstrated: true,
    note: 'Neutron interferometry, with a beam split and recombined across centimetres — massive, neutral particles behaving as waves over laboratory distances.',
  },
  {
    label: 'Sodium atom',
    kg: 3.82e-26,
    year: 1991,
    demonstrated: true,
    note: 'Whole atoms, with internal structure, interfering with themselves. Atom interferometers are now standard instruments for measuring gravity and rotation.',
  },
  {
    label: 'C₆₀ fullerene',
    kg: 1.196e-24,
    year: 1999,
    demonstrated: true,
    note: 'Sixty carbon atoms in one molecule, hot enough to be radiating thermal photons, still producing an interference pattern. This was the experiment that made the "how big can it get?" question a laboratory question.',
  },
  {
    label: '2,000-atom molecule',
    kg: 4.15e-23,
    year: 2019,
    demonstrated: true,
    note: 'Oligoporphyrin molecules of over 25,000 atomic mass units — around 2,000 atoms — showing matter-wave interference. This is the current record, and the de Broglie wavelength involved is smaller than the diameter of a proton.',
  },
  {
    label: 'Virus',
    kg: 1e-20,
    demonstrated: false,
    note: 'Proposed but not achieved. Nothing in the theory forbids it; the difficulty is entirely in isolating the object well enough and for long enough.',
  },
  {
    label: 'Dust grain',
    kg: 1e-12,
    demonstrated: false,
    note: 'A dust grain in air is struck by air molecules and photons constantly, so a record of where it is exists almost immediately. Decoherence times here are far shorter than any experiment could work with — which is why the everyday world looks classical.',
  },
  {
    label: 'Human',
    kg: 70,
    demonstrated: false,
    note: 'Untested and, in practice, untestable. Not excluded by any principle in the theory — which is a statement about the theory’s silence, not a claim that it would work.',
  },
];

const W = 380;
const H = 300;
const AXIS_X = 150;
const AXIS_T = 46;
const AXIS_B = H - 40;

const LOG_MIN = -31;
const LOG_MAX = 2;

const yOf = (kg: number): number =>
  AXIS_B - ((Math.log10(kg) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * (AXIS_B - AXIS_T);

const RECORD_KG = 4.15e-23;

export default function QuantumScaleLadder(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(4);
  const rung = RUNGS[selected] ?? RUNGS[0];

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
          Where quantum interference has actually been shown
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.72)">
          mass, logarithmic — filled markers are published experiments
        </text>

        {/* Demonstrated range, against the untested continuation. */}
        <rect
          x={AXIS_X - 5}
          y={yOf(RECORD_KG)}
          width={10}
          height={AXIS_B - yOf(RECORD_KG)}
          fill="rgba(102,224,212,0.18)"
        />
        <rect
          x={AXIS_X - 5}
          y={AXIS_T}
          width={10}
          height={yOf(RECORD_KG) - AXIS_T}
          fill="rgba(148,162,192,0.09)"
        />
        {/* Placed in the empty stretch between the dust grain and the virus:
            at the band's own edge it collided with the virus row's readout. */}
        <text x={AXIS_X + 14} y={yOf(1e-15)} fontSize={7.5} fill="rgba(148,162,192,0.85)">
          above the shaded band:
        </text>
        <text x={AXIS_X + 14} y={yOf(1e-15) + 11} fontSize={7.5} fill="rgba(148,162,192,0.85)">
          untested, not excluded
        </text>

        <line x1={AXIS_X} x2={AXIS_X} y1={AXIS_T} y2={AXIS_B} stroke="rgba(148,162,192,0.4)" />

        {RUNGS.map((entry, index) => {
          const y = yOf(entry.kg);
          const active = index === selected;
          return (
            <g key={entry.label} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <line
                x1={AXIS_X - 6}
                x2={AXIS_X + 6}
                y1={y}
                y2={y}
                stroke={active ? '#ffd66e' : 'rgba(148,162,192,0.6)'}
                strokeWidth={active ? 2.4 : 1.2}
              />
              <circle
                cx={AXIS_X}
                cy={y}
                r={active ? 5 : 3.5}
                fill={entry.demonstrated ? (active ? '#ffd66e' : '#66e0d4') : 'none'}
                stroke={entry.demonstrated ? 'none' : 'rgba(148,162,192,0.7)'}
                strokeWidth={1.2}
              />
              <text
                x={AXIS_X - 12}
                y={y + 3}
                textAnchor="end"
                fontSize={8.5}
                fill={active ? '#ffd66e' : 'rgba(226,233,246,0.88)'}
                fontFamily="system-ui, sans-serif"
              >
                {entry.label}
                {entry.year ? ` (${entry.year})` : ''}
              </text>
              <text
                x={AXIS_X + 12}
                y={y + 3}
                fontSize={7}
                fill="rgba(148,162,192,0.7)"
                fontFamily="ui-monospace, monospace"
              >
                {entry.kg.toExponential(1)} kg
              </text>
            </g>
          );
        })}
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Rung</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Which object to describe</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={RUNGS.length - 1}
              step={1}
              value={selected}
              onChange={(event) => setSelected(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{rung?.label}</output>
        </div>
      </div>

      <p className={styles.epochDetail}>
        <strong>
          {rung?.label}
          {rung?.year ? ` — ${rung.year}` : ' — not demonstrated'}.
        </strong>{' '}
        {rung?.note}{' '}
        {rung?.demonstrated
          ? ''
          : 'Nothing in quantum mechanics forbids it. The obstacle is decoherence: the larger and warmer an object is, the faster its surroundings acquire a record of where it is, and once that record exists there is nothing left to interfere.'}
      </p>
    </div>
  );
}
