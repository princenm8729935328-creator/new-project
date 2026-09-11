/**
 * The platform's fourteen top-level areas.
 *
 * This file is the single source of truth for navigation, routing, the home
 * page, and the phase roadmap. Nothing else enumerates sections. Adding one
 * means appending a record here and creating `src/content/topics/<slug>/`.
 *
 * `status` is honest by construction: a section whose content has not been
 * written is `planned`, and the UI shows it as planned rather than as an empty
 * page pretending to be finished.
 */
import { sectionId, type Section } from './schema/section';

export const SECTIONS: readonly Section[] = [
  {
    id: sectionId('cosmic-timeline'),
    slug: 'cosmic-timeline',
    title: 'Cosmic Timeline',
    tagline: 'Everything that has happened, in order.',
    overview:
      'A single continuous scale from the earliest moment physics can describe to the present day. Scroll through it to see when the first atoms formed, when the first stars lit, when the Earth cooled, and how recently anything resembling us appeared.',
    accent: 'cosmos',
    order: 1,
    phase: 1,
    status: 'published',
    icon: 'timeline',
    timelineSpan: { fromLogSeconds: -43, toLogSeconds: 17.64 },
  },
  {
    id: sectionId('universe'),
    slug: 'universe',
    title: 'Universe & Cosmology',
    tagline: 'How we know the Universe has a history.',
    overview:
      'Expansion, the cosmic microwave background, the composition of the cosmos, and the evidence behind the standard cosmological model — including what that model does not explain.',
    accent: 'plasma',
    order: 2,
    phase: 2,
    status: 'published',
    icon: 'universe',
    timelineSpan: { fromLogSeconds: -43, toLogSeconds: 17.64 },
  },
  {
    id: sectionId('stars-galaxies'),
    slug: 'stars-galaxies',
    title: 'Stars & Galaxies',
    tagline: 'Where the atoms in your body were made.',
    overview:
      'How stars form, how they burn, how they die, and how their debris becomes planets and people. Then the larger structures: galaxies, clusters, and the cosmic web.',
    accent: 'ember',
    order: 3,
    phase: 5,
    status: 'published',
    icon: 'star',
    timelineSpan: { fromLogSeconds: 15.5, toLogSeconds: 17.64 },
  },
  {
    id: sectionId('black-holes'),
    slug: 'black-holes',
    title: 'Black Holes',
    tagline: 'Where our two best theories stop agreeing.',
    overview:
      'Event horizons, singularities, accretion, Hawking radiation, and the direct observations — gravitational waves and horizon-scale imaging — that turned black holes from a mathematical curiosity into measured objects.',
    accent: 'void',
    order: 4,
    phase: 5,
    status: 'published',
    icon: 'black-hole',
  },
  {
    id: sectionId('gravity'),
    slug: 'gravity',
    title: 'Gravity',
    tagline: 'The weakest force, and the one that builds everything.',
    overview:
      'From falling apples to orbits to the curvature of spacetime — one phenomenon described by two theories that agree almost everywhere, and the places where they do not.',
    accent: 'gravity',
    order: 5,
    phase: 3,
    status: 'published',
    icon: 'gravity',
  },
  {
    id: sectionId('newton'),
    slug: 'newton',
    title: "Newton's Laws",
    tagline: 'The rules that still fly spacecraft.',
    overview:
      'Inertia, force and acceleration, action and reaction, and universal gravitation: the framework that made motion predictable, together with an honest account of where it stops being accurate.',
    accent: 'classical',
    order: 6,
    phase: 3,
    status: 'published',
    icon: 'newton',
  },
  {
    id: sectionId('relativity'),
    slug: 'relativity',
    title: 'Einstein & Relativity',
    tagline: 'Time is not the same for everyone.',
    overview:
      'Special relativity, general relativity, and the experiments that confirmed them — light bending around mass, clocks running at different rates, and gravitational waves crossing a billion light-years to shift a mirror by less than a proton width.',
    accent: 'relativity',
    order: 7,
    phase: 4,
    status: 'published',
    icon: 'relativity',
  },
  {
    id: sectionId('quantum'),
    slug: 'quantum',
    title: 'Quantum Physics',
    tagline: 'The rules underneath everything else.',
    overview:
      'Quantisation, superposition, uncertainty, entanglement and measurement: the most precisely tested theory in science, and the one whose meaning is still genuinely argued about.',
    accent: 'quantum',
    order: 8,
    phase: 6,
    status: 'published',
    icon: 'quantum',
  },
  {
    id: sectionId('earth'),
    slug: 'earth',
    title: 'Earth',
    tagline: 'One planet, read like a document.',
    overview:
      'Formation, differentiation, plate tectonics, atmosphere and oceans, and how rocks and ice let us date events that happened billions of years before anyone was watching.',
    accent: 'terra',
    order: 9,
    phase: 7,
    status: 'published',
    icon: 'earth',
    timelineSpan: { fromLogSeconds: 17.46, toLogSeconds: 17.64 },
  },
  {
    id: sectionId('life'),
    slug: 'life',
    title: 'Origin & Evolution of Life',
    tagline: 'From chemistry to biology.',
    overview:
      'What the earliest evidence of life actually shows, how single cells became complex ones, and the mechanism — variation plus selection over deep time — that connects every living thing.',
    accent: 'life',
    order: 10,
    phase: 7,
    status: 'published',
    icon: 'life',
    timelineSpan: { fromLogSeconds: 17.5, toLogSeconds: 17.64 },
  },
  {
    id: sectionId('human-evolution'),
    slug: 'human-evolution',
    title: 'Human Evolution',
    tagline: 'A very recent branch.',
    overview:
      'The hominin fossil and genetic record: bipedalism, brain size, tools, language, migration, and the discovery that our ancestry is a braided river rather than a ladder.',
    accent: 'human',
    order: 11,
    phase: 8,
    status: 'published',
    icon: 'human',
    timelineSpan: { fromLogSeconds: 17.63, toLogSeconds: 17.64 },
    // The only section read through two lenses. "How did we become human" and
    // "what does it mean to be human" are different questions with different
    // standards of evidence, and the reader chooses which one they are asking.
    lenses: ['scientific', 'philosophical'],
  },
  {
    id: sectionId('dark-universe'),
    slug: 'dark-universe',
    title: 'Dark Matter & Dark Energy',
    tagline: 'Most of the Universe is unidentified.',
    overview:
      'The observations that force us to posit unseen mass and an accelerating expansion, the candidates proposed for each, and the honest state of play: strong evidence that something is there, no confirmed identification of what.',
    accent: 'dark',
    order: 12,
    phase: 9,
    status: 'planned',
    icon: 'dark-matter',
  },
  {
    id: sectionId('open-questions'),
    slug: 'open-questions',
    title: 'Open Questions',
    tagline: 'The edge of what is known.',
    overview:
      'Quantum gravity, the measurement problem, the matter–antimatter asymmetry, the Hubble tension, abiogenesis, consciousness. Each stated as a question, with what is established, what is contested, and what evidence would settle it.',
    accent: 'unknown',
    order: 13,
    phase: 10,
    status: 'planned',
    icon: 'question',
  },
  {
    id: sectionId('glossary'),
    slug: 'glossary',
    title: 'Scientific Glossary',
    tagline: 'Every term, defined once.',
    overview:
      'A single definition for every technical term used anywhere on the platform, linked to the topics where the idea is actually explained.',
    accent: 'lexicon',
    order: 14,
    phase: 11,
    status: 'planned',
    icon: 'glossary',
  },
];

const SECTIONS_BY_SLUG = new Map(SECTIONS.map((section) => [section.slug, section]));
const SECTIONS_BY_ID = new Map(SECTIONS.map((section) => [section.id, section]));

export function getSectionBySlug(slug: string): Section | undefined {
  return SECTIONS_BY_SLUG.get(slug);
}

export function getSectionById(id: Section['id']): Section | undefined {
  return SECTIONS_BY_ID.get(id);
}

/** Sections in navigation order. */
export function orderedSections(): readonly Section[] {
  return [...SECTIONS].sort((a, b) => a.order - b.order);
}
