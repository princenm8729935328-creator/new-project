import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * "We are made of stardust", made precise.
 *
 * The phrase is a good one and it is also slightly wrong, in a way that is more
 * interesting than the phrase. Ninety percent of the atoms in a human body are
 * hydrogen, and hydrogen is not stardust at all: it was made in the first three
 * minutes and has never been inside a star that gave it back. The heavy
 * elements are stardust, and different ones come from different kinds of star.
 * This figure gives each element its own history rather than one slogan.
 */

type Origin = 'bigbang' | 'lowmass' | 'ccsn' | 'ia' | 'rprocess';

const ORIGIN_COLOUR: Record<Origin, string> = {
  bigbang: '#8fb8ff',
  lowmass: '#ffd27f',
  ccsn: '#ff8f6e',
  ia: '#c89bff',
  rprocess: '#4fe0c0',
};

const ORIGIN_LABEL: Record<Origin, string> = {
  bigbang: 'Big Bang nucleosynthesis',
  lowmass: 'dying low-mass stars',
  ccsn: 'core-collapse supernovae',
  ia: 'exploding white dwarfs',
  rprocess: 'neutron-star mergers',
};

interface Element {
  readonly sym: string;
  readonly name: string;
  /** Percentage of body mass. */
  readonly massPct: number;
  /** Percentage of body atoms. */
  readonly atomPct: number;
  readonly origin: Origin;
  readonly stages: readonly string[];
  readonly age: string;
}

const ELEMENTS: readonly Element[] = [
  {
    sym: 'O',
    name: 'Oxygen',
    massPct: 65,
    atomPct: 24,
    origin: 'ccsn',
    age: 'made over the last 13 billion years, most of it well before the Sun formed',
    stages: [
      'Fused from helium and carbon in the core of a star more than eight times the Sun’s mass.',
      'Blown out across tens of parsecs when that star’s core collapsed and the envelope was ejected at thousands of kilometres per second.',
      'Mixed through the interstellar medium for millions of years, then swept into the cloud that collapsed to form the Sun 4.6 billion years ago.',
      'Bound into silicate rock and into water ice in the outer disk; the Earth accreted from both.',
      'Cycled through oceans, rock and air, and taken up by living things — you are about two-thirds oxygen by mass, most of it in water.',
    ],
  },
  {
    sym: 'C',
    name: 'Carbon',
    massPct: 18,
    atomPct: 12,
    origin: 'lowmass',
    age: 'roughly half made in stars like the Sun, half in massive stars',
    stages: [
      'Made by the triple-alpha process — three helium nuclei meeting in the core of a red giant, which works only because of a resonance in carbon-12 that Fred Hoyle predicted must exist.',
      'Dredged to the surface by convection and blown off gently in a stellar wind, not an explosion. Much of the carbon in you drifted out of a dying star rather than being thrown.',
      'Condensed onto dust grains in the cooling wind — a large fraction of interstellar carbon is solid, not gas.',
      'Incorporated into the Solar System, delivered to Earth partly in carbonaceous material.',
      'Every chain and ring in your biochemistry.',
    ],
  },
  {
    sym: 'H',
    name: 'Hydrogen',
    massPct: 10,
    atomPct: 62,
    origin: 'bigbang',
    age: '13.8 billion years — as old as matter gets',
    stages: [
      'Made in the first second: protons, once the Universe was cool enough for quarks to bind.',
      'Never processed. Stars destroy hydrogen; they do not make it. Every hydrogen nucleus in you avoided every star that has ever existed.',
      'Collected into the cloud that became the Solar System.',
      'Bound to oxygen as water, and to carbon in every organic molecule you contain.',
      'Nearly two-thirds of your atoms are these unchanged particles from the Universe’s first second.',
    ],
  },
  {
    sym: 'N',
    name: 'Nitrogen',
    massPct: 3,
    atomPct: 1.1,
    origin: 'lowmass',
    age: 'mostly from intermediate-mass stars, over the last several billion years',
    stages: [
      'Made in the CNO cycle, which converts carbon and oxygen into nitrogen as material waits at the cycle’s slowest step.',
      'Brought to the surface and expelled by intermediate-mass stars in their asymptotic giant branch phase.',
      'Mixed into the interstellar medium, mostly as ammonia and molecular nitrogen.',
      'Delivered to Earth; most of it is now in the atmosphere.',
      'In every amino acid and every base pair of your DNA.',
    ],
  },
  {
    sym: 'Ca',
    name: 'Calcium',
    massPct: 1.4,
    atomPct: 0.22,
    origin: 'ccsn',
    age: 'made in massive stars, with about a third from exploding white dwarfs',
    stages: [
      'Fused in the oxygen- and silicon-burning shells of a massive star, in the last months of its life.',
      'Ejected in the supernova — some of it processed further by the shock as it passed through.',
      'Mixed into the interstellar medium and incorporated into the Solar nebula.',
      'Concentrated into the earliest solids to condense in the Solar System: calcium–aluminium inclusions, the oldest datable objects we have.',
      'Roughly a kilogram of it in your skeleton.',
    ],
  },
  {
    sym: 'Fe',
    name: 'Iron',
    massPct: 0.006,
    atomPct: 0.00067,
    origin: 'ia',
    age: 'about two-thirds from white dwarf explosions, one-third from core collapse',
    stages: [
      'Made as radioactive nickel-56 in the runaway thermonuclear burning of a white dwarf pushed past the Chandrasekhar limit — an explosion that leaves nothing behind at all.',
      'Nickel-56 decays to cobalt-56 and then to iron-56 over the following months, which is what keeps the supernova visible.',
      'Thrown out at ten thousand kilometres per second, mixed through the Galaxy.',
      'Sank to the centre of the forming Earth — the core is mostly iron, which is why the surface has so little.',
      'About four grams in you, most of it carrying oxygen around your bloodstream.',
    ],
  },
  {
    sym: 'I',
    name: 'Iodine',
    massPct: 0.00002,
    atomPct: 0.0000016,
    origin: 'rprocess',
    age: 'made in rare neutron-rich events, probably neutron-star mergers',
    stages: [
      'Built by rapid neutron capture: a nucleus absorbing neutrons faster than it can decay, in a neutron-rich outflow that lasts about a second.',
      'The 2017 neutron-star merger GW170817 was seen doing exactly this kind of nucleosynthesis, and strontium was identified in its spectrum.',
      'Ejected at a fifth of the speed of light and diluted through the Galaxy — these events are rare, so the enrichment is patchy.',
      'Incorporated into the Solar System in tiny quantities.',
      'Your thyroid concentrates it; without roughly 20 milligrams of it, your metabolism does not regulate.',
    ],
  },
];

const W = 380;
const BAR_Y = 28;
const BAR_H = 22;
const STAGE_TOP = 98;
const H = 170;

export default function AtomOriginsJourney(_props: VisualizationProps): ReactNode {
  const [selected, setSelected] = useState(0);
  const [stage, setStage] = useState(0);
  const el = ELEMENTS[selected] ?? ELEMENTS[0]!;
  const safeStage = Math.min(stage, el.stages.length - 1);

  let x = 8;
  const segments = ELEMENTS.map((entry) => {
    const w = Math.max(2, (entry.massPct / 100) * 364);
    const seg = { entry, x, w };
    x += w;
    return seg;
  });

  const STAGE_NAMES = ['made', 'ejected', 'drifted', 'built into Earth', 'in you'];

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={8} y={14} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          a human body by mass, coloured by where each element was made
        </text>

        {segments.map((seg, index) => (
          <g
            key={seg.entry.sym}
            onClick={() => {
              setSelected(index);
              setStage(0);
            }}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x={seg.x}
              y={BAR_Y}
              width={seg.w}
              height={BAR_H}
              fill={ORIGIN_COLOUR[seg.entry.origin]}
              opacity={index === selected ? 1 : 0.55}
              stroke={index === selected ? '#e2e9f6' : 'transparent'}
              strokeWidth={1.5}
            />
            {seg.w > 22 && (
              <text
                x={seg.x + seg.w / 2}
                y={BAR_Y + 15}
                textAnchor="middle"
                fontSize={10}
                fontWeight={600}
                fill="#0a0e18"
              >
                {seg.entry.sym}
              </text>
            )}
          </g>
        ))}
        <text x={8} y={BAR_Y + BAR_H + 13} fontSize={8.5} fill="rgba(148,162,192,0.85)">
          O 65% · C 18% · H 10% · N 3% · Ca 1.4% · the rest under 1% each
        </text>
        <text x={8} y={BAR_Y + BAR_H + 26} fontSize={8.5} fill="rgba(148,162,192,0.85)">
          by <tspan fontStyle="italic">atom count</tspan> the order is different: 62% hydrogen, 24%
          oxygen, 12% carbon
        </text>

        {/* Five-stage journey. */}
        <line
          x1={26}
          x2={354}
          y1={STAGE_TOP + 12}
          y2={STAGE_TOP + 12}
          stroke="rgba(148,162,192,0.3)"
        />
        {STAGE_NAMES.map((name, i) => {
          const cx = 26 + (i / 4) * 328;
          const done = i <= safeStage;
          return (
            <g key={name} onClick={() => setStage(i)} style={{ cursor: 'pointer' }}>
              <circle
                cx={cx}
                cy={STAGE_TOP + 12}
                r={i === safeStage ? 7 : 4.5}
                fill={done ? ORIGIN_COLOUR[el.origin] : 'rgba(148,162,192,0.35)'}
              />
              <text
                x={cx}
                y={STAGE_TOP + (i % 2 === 0 ? -4 : 30)}
                textAnchor="middle"
                fontSize={8.5}
                fill={i === safeStage ? '#e2e9f6' : 'rgba(148,162,192,0.85)'}
              >
                {name}
              </text>
            </g>
          );
        })}

        <text x={8} y={STAGE_TOP + 56} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          stage {safeStage + 1} of 5 · {STAGE_NAMES[safeStage]}
        </text>
      </svg>

      <p className={styles.epochDetail} aria-live="polite">
        {el.stages[safeStage]}
      </p>

      <div className={styles.toggles}>
        {ELEMENTS.map((entry, index) => (
          <button
            key={entry.sym}
            type="button"
            className={styles.toggle}
            aria-pressed={index === selected}
            onClick={() => {
              setSelected(index);
              setStage(0);
            }}
          >
            {entry.name}
          </button>
        ))}
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={false}
          onClick={() => setStage((value) => (value + 1) % 5)}
        >
          Next stage
        </button>
      </div>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>
          {el.name} — {ORIGIN_LABEL[el.origin]}.
        </strong>{' '}
        {el.massPct}% of your mass, {el.atomPct}% of your atoms. Age of these atoms: {el.age}.{' '}
        {el.origin === 'bigbang'
          ? '“We are made of stardust” is a good phrase that happens to be wrong about the majority of your atoms — most of them never went near a star.'
          : 'These atoms really are stardust, and the kind of star matters: this element did not come from just any dying star.'}
      </p>
    </div>
  );
}
