import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * The Planck length on a ladder of real sizes, with the gap to experiment drawn.
 *
 * The Planck quantities are honest and unremarkable in origin: they are the only
 * combinations of G, ħ and c with the dimensions of a length, a time, a mass and
 * an energy. That is all that gives them their standing. They are where the
 * gravitational and quantum descriptions can no longer be applied separately,
 * which makes them a marker for where existing theory stops — not a discovery
 * about what happens there.
 *
 * The point of drawing them against the reach of experiment is that the gap is
 * about fifteen orders of magnitude in energy. Nothing has been observed at the
 * Planck scale. Claims about what happens there are theory, and this figure is
 * built so that fact is unavoidable.
 */

const PLANCK_LENGTH = 1.616255e-35;

interface Rung {
  readonly label: string;
  readonly metres: number;
  readonly note: string;
}

const RUNGS: readonly Rung[] = [
  {
    label: 'Planck length',
    metres: PLANCK_LENGTH,
    note: '1.616 × 10⁻³⁵ m. Not a measured smallest size: it is √(ħG/c³), the only length you can build from the three constants. Below it, general relativity and quantum field theory cannot both be applied, and no one knows what replaces them.',
  },
  {
    label: 'LHC reach',
    metres: 1.5e-20,
    note: 'About 10⁻²⁰ m, from collisions at 13.6 TeV. This is the smallest distance any experiment has probed. It is roughly 10¹⁵ times larger than the Planck length — a gap comparable to the one between a proton and a person.',
  },
  {
    label: 'Proton',
    metres: 8.4e-16,
    note: 'About 0.84 femtometres across, measured by electron and muon scattering.',
  },
  {
    label: 'Atom',
    metres: 1e-10,
    note: 'Around 0.1 nanometres — set by the uncertainty relation and the electron mass, not by any hard surface.',
  },
  {
    label: 'Virus',
    metres: 1e-7,
    note: 'About 100 nanometres. Still far too large to show matter-wave interference under any conditions yet achieved.',
  },
  { label: 'Human', metres: 1.7, note: 'For scale.' },
  { label: 'Earth', metres: 1.27e7, note: 'Diameter 12,742 kilometres.' },
  { label: 'Solar System', metres: 9e12, note: "Roughly Neptune's orbital diameter." },
  {
    label: 'Observable Universe',
    metres: 8.8e26,
    note: 'About 93 billion light years across — larger than light travel time alone would suggest, because space expanded while the light was in flight.',
  },
];

const W = 380;
const H = 300;
const AXIS_T = 46;
const AXIS_B = H - 46;
const AXIS_X = 128;

const LOG_MIN = -36;
const LOG_MAX = 28;

const yOf = (metres: number): number =>
  AXIS_B - ((Math.log10(metres) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * (AXIS_B - AXIS_T);

export default function PlanckScale(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(0);
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
          Sixty-four orders of magnitude of length, logarithmic
        </text>
        <text x={10} y={26} fontSize={8} fill="rgba(148,162,192,0.72)">
          the untested gap is drawn to scale
        </text>

        {/* The region no experiment has reached. */}
        <rect
          x={AXIS_X - 6}
          y={yOf(1.5e-20)}
          width={12}
          height={yOf(PLANCK_LENGTH) - yOf(1.5e-20)}
          fill="rgba(255,143,110,0.18)"
        />
        <text
          x={AXIS_X + 12}
          y={(yOf(1.5e-20) + yOf(PLANCK_LENGTH)) / 2}
          fontSize={7.5}
          fill="rgba(255,143,110,0.95)"
        >
          never probed — 15 orders of magnitude
        </text>

        <line x1={AXIS_X} x2={AXIS_X} y1={AXIS_T} y2={AXIS_B} stroke="rgba(148,162,192,0.4)" />

        {RUNGS.map((entry, index) => {
          const y = yOf(entry.metres);
          const active = index === selected;
          return (
            <g key={entry.label} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <line
                x1={AXIS_X - 6}
                x2={AXIS_X + 6}
                y1={y}
                y2={y}
                stroke={active ? '#ffd66e' : 'rgba(148,162,192,0.7)'}
                strokeWidth={active ? 2.4 : 1.4}
              />
              <text
                x={AXIS_X - 10}
                y={y + 3}
                textAnchor="end"
                fontSize={8}
                fill={active ? '#ffd66e' : 'rgba(226,233,246,0.85)'}
                fontFamily="system-ui, sans-serif"
              >
                {entry.label}
              </text>
              <text
                x={AXIS_X + 10}
                y={y + 3}
                fontSize={7}
                fill="rgba(148,162,192,0.7)"
                fontFamily="ui-monospace, monospace"
              >
                {entry.metres.toExponential(1)} m
              </text>
            </g>
          );
        })}

        {/* The other three Planck quantities, since they come from the same place. */}
        <text x={252} y={AXIS_T + 4} fontSize={8} fill="rgba(148,162,192,0.85)">
          also from G, ħ, c:
        </text>
        {[
          ['time', '5.39 × 10⁻⁴⁴ s'],
          ['mass', '21.8 µg'],
          ['energy', '1.22 × 10¹⁹ GeV'],
        ].map(([name, value], index) => (
          <g key={name}>
            <text x={252} y={AXIS_T + 20 + index * 22} fontSize={7.5} fill="rgba(148,162,192,0.75)">
              Planck {name}
            </text>
            <text
              x={252}
              y={AXIS_T + 30 + index * 22}
              fontSize={8}
              fill="rgba(226,233,246,0.9)"
              fontFamily="ui-monospace, monospace"
            >
              {value}
            </text>
          </g>
        ))}
        <text x={252} y={AXIS_T + 96} fontSize={7} fill="rgba(255,143,110,0.9)">
          LHC reaches
        </text>
        <text
          x={252}
          y={AXIS_T + 106}
          fontSize={7.5}
          fill="rgba(255,143,110,0.9)"
          fontFamily="ui-monospace, monospace"
        >
          1.4 × 10⁴ GeV
        </text>
      </svg>

      <div className={styles.controlRows}>
        <div className={styles.controlRow}>
          <span className={styles.controlName}>Rung</span>
          <label className={styles.sliderLabel}>
            <span className="ds-visually-hidden">Which scale to describe</span>
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
        <strong>{rung?.label}.</strong> {rung?.note} Nothing is known to happen at the Planck scale.
        It is not a measured grain size for space and it is not a proven limit: it is where our two
        working theories can no longer both be applied, so it marks the boundary of what we can
        currently calculate rather than a discovery about nature.
      </p>
    </div>
  );
}
