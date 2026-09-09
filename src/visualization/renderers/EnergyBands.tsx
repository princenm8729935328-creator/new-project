import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * Discrete levels broadening into bands, and the gap that decides everything.
 *
 * The left half is illustrative: the splitting is drawn, not computed from a
 * real band-structure calculation, because a genuine one for even one material
 * takes a paper to present. What it gets right is the mechanism — the exclusion
 * principle forbids two electrons from sharing a state, so bringing N atoms
 * together turns each atomic level into N closely spaced ones, and by the time
 * N is of order 10²³ they are a continuum.
 *
 * The right half is measured. Those four band gaps are real room-temperature
 * values, and the difference between 1.12 eV and 5.5 eV is the difference
 * between a transistor and a diamond.
 */

interface Material {
  readonly name: string;
  /** Room-temperature band gap in electronvolts; 0 for a metal. */
  readonly gap: number;
  readonly kind: string;
  readonly note: string;
}

const MATERIALS: readonly Material[] = [
  {
    name: 'Copper',
    gap: 0,
    kind: 'metal',
    note: 'The highest occupied band is only partly filled, so there are empty states immediately above the occupied ones. An electron needs almost no energy to start moving, which is what conducting is.',
  },
  {
    name: 'Germanium',
    gap: 0.67,
    kind: 'semiconductor',
    note: 'A gap of 0.67 eV. Room-temperature thermal energy is about 0.026 eV, so only a tiny fraction of electrons make it across — but that fraction is controllable, which is the whole point.',
  },
  {
    name: 'Silicon',
    gap: 1.12,
    kind: 'semiconductor',
    note: 'A gap of 1.12 eV: large enough that pure silicon barely conducts, small enough that adding a trace of another element, or a voltage on a nearby gate, changes the conduction by orders of magnitude. Every transistor ever made rests on that number.',
  },
  {
    name: 'Diamond',
    gap: 5.5,
    kind: 'insulator',
    note: 'A gap of about 5.5 eV — beyond anything thermal energy can supply, and beyond the energy of a visible photon. So diamond does not conduct, and visible light passes straight through it without being absorbed. Its transparency and its insulation are the same fact.',
  },
];

const W = 380;
const H = 300;
const LEFT_L = 20;
const LEFT_R = 168;
const RIGHT_L = 196;
const RIGHT_R = W - 14;
const PLOT_T = 46;
const PLOT_B = H - 60;

const ATOMIC_LEVELS = [0.22, 0.5, 0.78];

export default function EnergyBands(_props: VisualizationProps): ReactNode {
  /** 0 = isolated atoms, 1 = a solid. */
  const [closeness, setCloseness] = useState(0.15);
  const [index, setIndex] = useState(2);
  const material = MATERIALS[index] ?? MATERIALS[2];

  const spanOf = (level: number): number => closeness * (0.06 + 0.1 * (1 - level));
  const yOf = (level: number): number => PLOT_T + level * (PLOT_B - PLOT_T);

  const gapScale = 6.5; // eV shown across the right-hand energy axis
  const gapHeight = ((material?.gap ?? 0) / gapScale) * (PLOT_B - PLOT_T);

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
          Levels become bands; the gap decides what the material does
        </text>
        <text x={LEFT_L} y={34} fontSize={8} fill="rgba(148,162,192,0.75)">
          conceptual broadening
        </text>
        <text x={RIGHT_L} y={34} fontSize={8} fill="#ffd66e">
          measured band gaps
        </text>

        {/* Left: broadening. */}
        {ATOMIC_LEVELS.map((level) => {
          const half = (spanOf(level) * (PLOT_B - PLOT_T)) / 2;
          return (
            <g key={level}>
              <rect
                x={LEFT_L}
                y={yOf(level) - half}
                width={LEFT_R - LEFT_L}
                height={Math.max(1.6, half * 2)}
                fill="rgba(102,224,212,0.32)"
              />
              <line
                x1={LEFT_L}
                x2={LEFT_R}
                y1={yOf(level)}
                y2={yOf(level)}
                stroke="#66e0d4"
                strokeWidth={1}
              />
            </g>
          );
        })}
        <text x={LEFT_L} y={PLOT_B + 14} fontSize={7.5} fill="rgba(148,162,192,0.8)">
          one atom
        </text>
        <text
          x={LEFT_R}
          y={PLOT_B + 14}
          textAnchor="end"
          fontSize={7.5}
          fill="rgba(148,162,192,0.8)"
        >
          10²³ atoms
        </text>
        <line
          x1={LEFT_L}
          x2={LEFT_R}
          y1={PLOT_B + 3}
          y2={PLOT_B + 3}
          stroke="rgba(148,162,192,0.3)"
        />

        {/* Right: the real materials. */}
        <line x1={RIGHT_L} x2={RIGHT_L} y1={PLOT_T} y2={PLOT_B} stroke="rgba(148,162,192,0.35)" />
        {[0, 2, 4, 6].map((ev) => (
          <text
            key={ev}
            x={RIGHT_L - 4}
            y={PLOT_B - (ev / gapScale) * (PLOT_B - PLOT_T) + 3}
            textAnchor="end"
            fontSize={7}
            fill="rgba(148,162,192,0.75)"
            fontFamily="ui-monospace, monospace"
          >
            {ev}
          </text>
        ))}
        <text x={RIGHT_L - 22} y={PLOT_T - 4} fontSize={7.5} fill="rgba(148,162,192,0.8)">
          eV
        </text>

        {/* Valence band, gap, conduction band. */}
        <rect
          x={RIGHT_L + 6}
          y={PLOT_B - 26}
          width={RIGHT_R - RIGHT_L - 12}
          height={26}
          fill="rgba(102,224,212,0.35)"
        />
        <text x={RIGHT_L + 12} y={PLOT_B - 10} fontSize={8} fill="rgba(226,233,246,0.9)">
          filled band
        </text>
        {(material?.gap ?? 0) > 0 ? (
          <>
            <rect
              x={RIGHT_L + 6}
              y={PLOT_B - 26 - gapHeight}
              width={RIGHT_R - RIGHT_L - 12}
              height={gapHeight}
              fill="rgba(255,143,110,0.14)"
              stroke="rgba(255,143,110,0.5)"
              strokeDasharray="3 3"
            />
            <text
              x={(RIGHT_L + RIGHT_R) / 2}
              y={PLOT_B - 26 - gapHeight / 2 + 3}
              textAnchor="middle"
              fontSize={9}
              fill="#ff8f6e"
            >
              gap {material?.gap.toFixed(2)} eV
            </text>
          </>
        ) : (
          <text
            x={(RIGHT_L + RIGHT_R) / 2}
            y={PLOT_B - 34}
            textAnchor="middle"
            fontSize={9}
            fill="#ffd66e"
          >
            no gap — band only half full
          </text>
        )}
        <rect
          x={RIGHT_L + 6}
          y={Math.max(PLOT_T, PLOT_B - 26 - gapHeight - 30)}
          width={RIGHT_R - RIGHT_L - 12}
          height={30}
          fill="rgba(148,162,192,0.16)"
        />
        <text
          x={RIGHT_L + 12}
          y={Math.max(PLOT_T, PLOT_B - 26 - gapHeight - 30) + 16}
          fontSize={8}
          fill="rgba(226,233,246,0.85)"
        >
          empty band
        </text>

        {/* Room-temperature thermal energy, for scale. */}
        <line
          x1={RIGHT_L}
          x2={RIGHT_R}
          y1={PLOT_B - (0.026 / gapScale) * (PLOT_B - PLOT_T) - 26}
          y2={PLOT_B - (0.026 / gapScale) * (PLOT_B - PLOT_T) - 26}
          stroke="rgba(255,214,110,0.8)"
          strokeWidth={1}
        />
        <text x={RIGHT_L + 6} y={PLOT_B - 34} fontSize={7} fill="rgba(255,214,110,0.9)">
          kT = 0.026 eV
        </text>
      </svg>

      <div className={styles.toggles}>
        {MATERIALS.map((entry, i) => (
          <button
            key={entry.name}
            type="button"
            className={styles.toggle}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          >
            {entry.name}
          </button>
        ))}
      </div>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Atoms</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">How close the atoms are brought</span>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={closeness}
              onChange={(event) => setCloseness(Number(event.target.value))}
            />
          </label>
          <output className={styles.value}>{closeness < 0.5 ? 'separate' : 'a solid'}</output>
        </div>
      </div>

      <p className={styles.epochDetail}>
        <strong>
          {material?.name} — {material?.kind}.
        </strong>{' '}
        {material?.note} The reason the levels have to spread rather than pile up is the exclusion
        principle: no two electrons may occupy the same state, so N atoms brought together need N
        distinct levels where one atom needed one. Every property in this figure — conduction,
        transparency, the working of a transistor — follows from that one rule plus a gap measured
        in electronvolts.
      </p>
    </div>
  );
}
