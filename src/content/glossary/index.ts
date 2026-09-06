/**
 * Glossary — seed set.
 *
 * Terms are added as the sections that use them are written; `relatedTopics` is
 * filled in at that point. Each definition must stand on its own, because it is
 * rendered in a tooltip with no surrounding context.
 */
import { glossaryTermId, type GlossaryTerm } from '../schema/glossary';
import { referenceId } from '../schema/reference';

export const GLOSSARY: readonly GlossaryTerm[] = [
  {
    id: glossaryTermId('light-year'),
    term: 'Light-year',
    short:
      'The distance light travels in one year in a vacuum — about 9.46 trillion kilometres. A unit of distance, not of time.',
    symbol: 'ly',
    unit: 'distance',
    references: [referenceId('codata-2018')],
  },
  {
    id: glossaryTermId('redshift'),
    term: 'Redshift',
    aliases: ['cosmological redshift'],
    short:
      'The stretching of light to longer wavelengths. For distant galaxies it is caused by the expansion of space during the light’s journey, and it is how astronomers measure distance and look-back time.',
    symbol: 'z',
    references: [referenceId('hubble-1929')],
  },
  {
    id: glossaryTermId('cmb'),
    term: 'Cosmic microwave background',
    aliases: ['CMB', 'relic radiation'],
    short:
      'The oldest light that can be observed: microwave radiation released when the Universe first became transparent, now measured across the whole sky at about 2.725 kelvin.',
    references: [referenceId('penzias-wilson-1965'), referenceId('fixsen-2009-cmb-temperature')],
  },
  {
    id: glossaryTermId('spacetime'),
    term: 'Spacetime',
    short:
      'Space and time treated as one four-dimensional structure. In general relativity, mass and energy change its geometry, and that changed geometry is what we experience as gravity.',
    references: [referenceId('einstein-1916-gr')],
  },
  {
    id: glossaryTermId('event-horizon'),
    term: 'Event horizon',
    short:
      'The boundary around a black hole beyond which no signal can escape to the outside. It is not a surface or an object — it is a location defined by the paths light can take.',
    references: [referenceId('eht-2019-m87')],
  },
  {
    id: glossaryTermId('dark-matter'),
    term: 'Dark matter',
    short:
      'Mass inferred from its gravitational effect on galaxies, clusters and the early Universe, but not observed to emit or absorb light. Its composition has not been identified.',
    references: [referenceId('rubin-ford-1970'), referenceId('planck-2018-vi')],
  },
  {
    id: glossaryTermId('dark-energy'),
    term: 'Dark energy',
    short:
      'The name given to whatever is causing the expansion of the Universe to accelerate. Its existence is inferred from several independent observations; its nature is unknown.',
    references: [referenceId('riess-1998'), referenceId('perlmutter-1999')],
  },
  {
    id: glossaryTermId('hubble-constant'),
    term: 'Hubble constant',
    short:
      'The present-day rate at which the Universe is expanding, expressed as a recession speed per unit distance. Independent methods of measuring it currently disagree — the "Hubble tension".',
    symbol: 'H₀',
    unit: 'km s⁻¹ Mpc⁻¹',
    references: [referenceId('hubble-1929'), referenceId('planck-2018-vi')],
  },
  {
    id: glossaryTermId('superposition'),
    term: 'Superposition',
    short:
      'A quantum system’s ability to be described by a combination of states at once, producing interference effects that no single definite state could explain.',
  },
  {
    id: glossaryTermId('nucleosynthesis'),
    term: 'Nucleosynthesis',
    short:
      'The formation of atomic nuclei from lighter ones — in the first minutes of the Universe (Big Bang nucleosynthesis) and, later and continuously, inside stars.',
    references: [referenceId('planck-2018-vi')],
  },
];

const BY_ID = new Map(GLOSSARY.map((term) => [term.id, term]));

export function getGlossaryTerm(id: GlossaryTerm['id']): GlossaryTerm | undefined {
  return BY_ID.get(id);
}

/** Alphabetical, for the glossary page. */
export function orderedGlossary(): readonly GlossaryTerm[] {
  return [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
}
