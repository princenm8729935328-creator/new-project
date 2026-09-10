import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import styles from './controls.module.css';

/**
 * A periodic table coloured by where each element was made.
 *
 * This is the figure most likely to be misread, so the legend says the
 * important thing outright: these are computed contributions from a galactic
 * chemical evolution model, not measurements of individual atoms. Nobody has
 * ever traced a specific gold nucleus back to a specific neutron-star merger.
 * What has been done is to compute the yields of each kind of event, weight
 * them by how often each happens, integrate over the Galaxy's history, and
 * check the result against measured abundances — and that procedure agrees well
 * for most elements and poorly for a few.
 */

type Source = 'bigbang' | 'lowmass' | 'ccsn' | 'ia' | 'rprocess' | 'cosmicray';

const SOURCE_INFO: Record<Source, { label: string; colour: string; note: string }> = {
  bigbang: {
    label: 'Big Bang',
    colour: '#8fb8ff',
    note: 'Made in the first three minutes, before any star existed. Nothing has made appreciable amounts since.',
  },
  lowmass: {
    label: 'Dying low-mass stars',
    colour: '#ffd27f',
    note: 'Made in stars like the Sun near the end of their lives and blown off gently as a planetary nebula, not in an explosion.',
  },
  ccsn: {
    label: 'Core-collapse supernovae',
    colour: '#ff8f6e',
    note: 'Made inside massive stars and ejected when they explode. These are the fastest enrichers — the stars live only a few million years.',
  },
  ia: {
    label: 'Exploding white dwarfs',
    colour: '#c89bff',
    note: 'Thermonuclear supernovae, which need a white dwarf and therefore a delay of hundreds of millions of years after star formation begins.',
  },
  rprocess: {
    label: 'Neutron-star mergers',
    colour: '#4fe0c0',
    note: 'Rapid neutron capture in neutron-rich ejecta. A merger was caught doing this in 2017, and strontium was identified in its spectrum — the first direct confirmation of the site.',
  },
  cosmicray: {
    label: 'Cosmic-ray spallation',
    colour: 'rgba(148,162,192,0.75)',
    note: 'Not made in stars at all: made when a cosmic ray smashes a heavier nucleus apart in interstellar space. Stars destroy these elements rather than making them.',
  },
};

interface El {
  readonly z: number;
  readonly sym: string;
  readonly col: number;
  readonly row: number;
  readonly source: Source;
  readonly detail: string;
  /** How well the attribution is established. */
  readonly confidence: 'established' | 'model' | 'debated';
}

/** A compact periodic layout: 18 columns, 7 rows, lanthanides folded into row 8. */
const ELEMENTS: readonly El[] = [
  {
    z: 1,
    sym: 'H',
    col: 1,
    row: 1,
    source: 'bigbang',
    detail:
      'About 92% of all atoms. Every hydrogen nucleus in you is a proton from the first second of the Universe.',
    confidence: 'established',
  },
  {
    z: 2,
    sym: 'He',
    col: 18,
    row: 1,
    source: 'bigbang',
    detail:
      'Roughly a quarter of ordinary matter by mass, nearly all of it from the first three minutes. Stars have added only a few percent since.',
    confidence: 'established',
  },
  {
    z: 3,
    sym: 'Li',
    col: 1,
    row: 2,
    source: 'bigbang',
    detail:
      'Partly primordial, partly cosmic-ray spallation. The predicted primordial amount is about three times what metal-poor stars actually show — the lithium problem, still unsolved.',
    confidence: 'debated',
  },
  {
    z: 4,
    sym: 'Be',
    col: 2,
    row: 2,
    source: 'cosmicray',
    detail:
      'Made entirely by cosmic rays breaking up carbon, nitrogen and oxygen. Stars destroy beryllium; they do not make it.',
    confidence: 'established',
  },
  {
    z: 5,
    sym: 'B',
    col: 13,
    row: 2,
    source: 'cosmicray',
    detail:
      'Also cosmic-ray spallation. Boron, beryllium and most lithium are the three elements the stars skipped.',
    confidence: 'established',
  },
  {
    z: 6,
    sym: 'C',
    col: 14,
    row: 2,
    source: 'lowmass',
    detail:
      'Roughly half from dying low-mass stars and half from massive stars. Made by the triple-alpha process, which needs a resonance Hoyle predicted must exist because carbon exists.',
    confidence: 'model',
  },
  {
    z: 7,
    sym: 'N',
    col: 15,
    row: 2,
    source: 'lowmass',
    detail:
      'Mostly from intermediate-mass stars running the CNO cycle, which converts carbon and oxygen into nitrogen. The split between sources is one of the more actively argued attributions.',
    confidence: 'debated',
  },
  {
    z: 8,
    sym: 'O',
    col: 16,
    row: 2,
    source: 'ccsn',
    detail:
      'The third most abundant element in the Universe and the most abundant in you. Almost all of it made in massive stars and ejected by core collapse.',
    confidence: 'established',
  },
  {
    z: 9,
    sym: 'F',
    col: 17,
    row: 2,
    source: 'lowmass',
    detail:
      'Fragile and easily destroyed, which is why it is so rare relative to its neighbours. Production sites are still argued over.',
    confidence: 'debated',
  },
  {
    z: 10,
    sym: 'Ne',
    col: 18,
    row: 2,
    source: 'ccsn',
    detail: 'Made in carbon burning in massive stars.',
    confidence: 'established',
  },
  {
    z: 11,
    sym: 'Na',
    col: 1,
    row: 3,
    source: 'ccsn',
    detail:
      'Made in carbon burning; also produced in the hydrogen-burning shells of intermediate-mass stars.',
    confidence: 'model',
  },
  {
    z: 12,
    sym: 'Mg',
    col: 2,
    row: 3,
    source: 'ccsn',
    detail:
      'A classic alpha element: made in massive stars, tracking oxygen closely. Its abundance relative to iron is how a star’s formation history is read.',
    confidence: 'established',
  },
  {
    z: 13,
    sym: 'Al',
    col: 13,
    row: 3,
    source: 'ccsn',
    detail:
      'Massive stars. The radioactive isotope aluminium-26 is detected in the Galaxy today, which is direct evidence that massive stars are dying right now.',
    confidence: 'established',
  },
  {
    z: 14,
    sym: 'Si',
    col: 14,
    row: 3,
    source: 'ccsn',
    detail:
      'Mostly massive stars, with a substantial contribution from thermonuclear supernovae. The rock under your feet is largely silicon and oxygen.',
    confidence: 'established',
  },
  {
    z: 15,
    sym: 'P',
    col: 15,
    row: 3,
    source: 'ccsn',
    detail:
      'Massive stars. Every phosphorus atom in your DNA backbone and your bones came from one.',
    confidence: 'model',
  },
  {
    z: 16,
    sym: 'S',
    col: 16,
    row: 3,
    source: 'ccsn',
    detail: 'Made in oxygen burning in massive stars.',
    confidence: 'established',
  },
  {
    z: 17,
    sym: 'Cl',
    col: 17,
    row: 3,
    source: 'ccsn',
    detail: 'Massive stars, with a thermonuclear supernova contribution.',
    confidence: 'model',
  },
  {
    z: 18,
    sym: 'Ar',
    col: 18,
    row: 3,
    source: 'ccsn',
    detail: 'Made in oxygen and silicon burning.',
    confidence: 'established',
  },
  {
    z: 19,
    sym: 'K',
    col: 1,
    row: 4,
    source: 'ccsn',
    detail:
      'Massive stars. Models under-produce potassium relative to what is observed, which is a known and unresolved discrepancy.',
    confidence: 'debated',
  },
  {
    z: 20,
    sym: 'Ca',
    col: 2,
    row: 4,
    source: 'ccsn',
    detail:
      'Mostly massive stars, with roughly a third from thermonuclear supernovae. The calcium in your bones is largely core-collapse ejecta.',
    confidence: 'established',
  },
  {
    z: 24,
    sym: 'Cr',
    col: 6,
    row: 4,
    source: 'ia',
    detail: 'Roughly half from exploding white dwarfs, half from core collapse.',
    confidence: 'model',
  },
  {
    z: 25,
    sym: 'Mn',
    col: 7,
    row: 4,
    source: 'ia',
    detail:
      'Predominantly from thermonuclear supernovae. Its abundance relative to iron is one of the sharpest tests of how those explosions work.',
    confidence: 'model',
  },
  {
    z: 26,
    sym: 'Fe',
    col: 8,
    row: 4,
    source: 'ia',
    detail:
      'About two-thirds from exploding white dwarfs and one-third from core collapse. The iron in your blood is therefore mostly the ash of a white dwarf that detonated.',
    confidence: 'established',
  },
  {
    z: 27,
    sym: 'Co',
    col: 9,
    row: 4,
    source: 'ccsn',
    detail: 'Core-collapse supernovae, from the innermost ejected layers.',
    confidence: 'model',
  },
  {
    z: 28,
    sym: 'Ni',
    col: 10,
    row: 4,
    source: 'ia',
    detail:
      'Thermonuclear supernovae produce nickel-56 in bulk; its radioactive decay is what makes the explosion visible for months.',
    confidence: 'established',
  },
  {
    z: 29,
    sym: 'Cu',
    col: 11,
    row: 4,
    source: 'ccsn',
    detail: 'Massive stars, mostly by slow neutron capture during helium and carbon burning.',
    confidence: 'model',
  },
  {
    z: 30,
    sym: 'Zn',
    col: 12,
    row: 4,
    source: 'ccsn',
    detail: 'Core-collapse supernovae, especially the more energetic ones.',
    confidence: 'model',
  },
  {
    z: 38,
    sym: 'Sr',
    col: 2,
    row: 5,
    source: 'lowmass',
    detail:
      'Mostly slow neutron capture in AGB stars — but strontium was also identified in the 2017 neutron-star merger, the first element ever tied directly to an observed r-process event.',
    confidence: 'model',
  },
  {
    z: 47,
    sym: 'Ag',
    col: 11,
    row: 5,
    source: 'rprocess',
    detail: 'Predominantly rapid neutron capture.',
    confidence: 'model',
  },
  {
    z: 53,
    sym: 'I',
    col: 17,
    row: 5,
    source: 'rprocess',
    detail:
      'Rapid neutron capture. The iodine your thyroid depends on came from neutron-rich ejecta.',
    confidence: 'model',
  },
  {
    z: 56,
    sym: 'Ba',
    col: 2,
    row: 6,
    source: 'lowmass',
    detail: 'Mostly slow neutron capture in AGB stars — barium is the classic s-process tracer.',
    confidence: 'established',
  },
  {
    z: 63,
    sym: 'Eu',
    col: 4,
    row: 8,
    source: 'rprocess',
    detail:
      'Almost purely r-process. Europium relative to barium is how astronomers separate the two neutron-capture processes in a stellar spectrum.',
    confidence: 'established',
  },
  {
    z: 78,
    sym: 'Pt',
    col: 10,
    row: 6,
    source: 'rprocess',
    detail:
      'Rapid neutron capture, in neutron-star mergers and possibly in rare energetic supernovae.',
    confidence: 'debated',
  },
  {
    z: 79,
    sym: 'Au',
    col: 11,
    row: 6,
    source: 'rprocess',
    detail:
      'Rapid neutron capture. Gold is not made in ordinary stellar cores at all: fusing anything into gold costs energy, so it takes a violent neutron-rich environment that exists for about a second.',
    confidence: 'debated',
  },
  {
    z: 82,
    sym: 'Pb',
    col: 14,
    row: 6,
    source: 'lowmass',
    detail:
      'A mix: slow neutron capture in AGB stars, plus the decay products of heavier r-process nuclei.',
    confidence: 'model',
  },
  {
    z: 90,
    sym: 'Th',
    col: 3,
    row: 9,
    source: 'rprocess',
    detail:
      'Rapid neutron capture only. Thorium and uranium in old stars are used as radioactive clocks to date the population.',
    confidence: 'model',
  },
  {
    z: 92,
    sym: 'U',
    col: 5,
    row: 9,
    source: 'rprocess',
    detail:
      'Rapid neutron capture only. The uranium heating the Earth’s interior was made before the Sun existed.',
    confidence: 'model',
  },
];

const CELL = 18;
const GAP = 1.5;
const W = 380;
const LEFT = 6;
const TOP = 22;
const H = TOP + 9 * (CELL + GAP) + 34;

export default function ElementOrigins(_props: VisualizationProps): ReactNode {
  // Selected by symbol rather than by index, which silently drifts whenever an
  // element is inserted above it.
  const [selected, setSelected] = useState(ELEMENTS.findIndex((e) => e.sym === 'Fe'));
  const el = ELEMENTS[selected] ?? ELEMENTS[0]!;
  const info = SOURCE_INFO[el.source];

  return (
    <div className={styles.chartStack}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: 'auto' }}
        role="presentation"
      >
        <text x={LEFT} y={12} fontSize={9.5} fill="rgba(148,162,192,0.9)">
          coloured by dominant source — computed, not measured per atom
        </text>

        {ELEMENTS.map((entry, index) => {
          const x = LEFT + (entry.col - 1) * (CELL + GAP);
          const y = TOP + (entry.row - 1) * (CELL + GAP);
          const isSelected = index === selected;
          return (
            <g key={entry.z} onClick={() => setSelected(index)} style={{ cursor: 'pointer' }}>
              <rect
                x={x}
                y={y}
                width={CELL}
                height={CELL}
                rx={2.5}
                fill={SOURCE_INFO[entry.source].colour}
                opacity={isSelected ? 1 : 0.62}
                stroke={isSelected ? '#e2e9f6' : 'transparent'}
                strokeWidth={1.6}
              />
              <text
                x={x + CELL / 2}
                y={y + CELL / 2 + 3.5}
                textAnchor="middle"
                fontSize={9}
                fontWeight={600}
                fill="#0a0e18"
              >
                {entry.sym}
              </text>
            </g>
          );
        })}

        <text
          x={LEFT + 6.6 * (CELL + GAP)}
          y={TOP + 8 * (CELL + GAP) + 6}
          fontSize={8}
          fill="rgba(148,162,192,0.7)"
        >
          ← lanthanides and actinides
        </text>

        {/* Legend. */}
        <g transform={`translate(${LEFT}, ${TOP + 9 * (CELL + GAP) + 12})`}>
          {(Object.keys(SOURCE_INFO) as Source[]).map((key, i) => (
            <g key={key} transform={`translate(${(i % 3) * 124}, ${Math.floor(i / 3) * 13})`}>
              <rect width={8} height={8} y={-7} rx={2} fill={SOURCE_INFO[key].colour} />
              <text x={12} y={0} fontSize={8} fill="rgba(226,233,246,0.9)">
                {SOURCE_INFO[key].label}
              </text>
            </g>
          ))}
        </g>
      </svg>

      <p className={styles.epochDetail} aria-live="polite">
        <strong>
          {el.sym} (element {el.z}) — {info.label}.
        </strong>{' '}
        {el.detail} {info.note}{' '}
        <em>
          {el.confidence === 'established'
            ? 'This attribution is robust across models.'
            : el.confidence === 'model'
              ? 'This is a model result with real uncertainty in the percentages.'
              : 'This attribution is actively debated — treat the percentages as provisional.'}
        </em>
      </p>
    </div>
  );
}
