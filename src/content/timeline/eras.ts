/**
 * Cosmic eras.
 *
 * Thirteen named stretches of history. They give the timeline its bands, its
 * colour, and — through `domain` — its changing visual treatment: the cosmic
 * eras, the planetary ones, the biological ones and the human ones are answered
 * by different sciences and different kinds of evidence, and the interface says
 * so without a word.
 *
 * Era boundaries are approximate by nature. They are editorial divisions of a
 * continuous process, not measured transitions, and the timeline never presents
 * them as if they were.
 */
import { cosmicTime, cosmicTimeFromYearsAgo } from '../schema/cosmicTime';
import type { TimelineEra } from '../schema/timeline';

export const TIMELINE_ERAS: readonly TimelineEra[] = [
  {
    id: 'primordial',
    title: 'The First Second',
    order: 1,
    domain: 'cosmic',
    accent: 'plasma',
    from: cosmicTime(1e-43, 'modelled', 'the earliest describable moment'),
    to: cosmicTime(1, 'modelled', 'one second'),
    summary: {
      essential:
        'Everything we can observe was packed into a state far hotter and denser than anything that exists today. Physics can describe this era, but not its first instant.',
      detailed:
        'Within the first second the Universe passed through energies no laboratory can reach. The physics here is extrapolation from theories tested at much lower energies, which is why almost everything in this era is a model rather than an observation.',
    },
  },
  {
    id: 'nucleosynthesis',
    title: 'The First Twenty Minutes',
    order: 2,
    domain: 'cosmic',
    accent: 'ember',
    from: cosmicTime(1, 'modelled', 'one second'),
    to: cosmicTime(1200, 'modelled', 'twenty minutes'),
    summary: {
      essential:
        'The Universe cooled enough for protons and neutrons to stick together, making the first atomic nuclei — and then cooled too far to make any more.',
    },
  },
  {
    id: 'opaque',
    title: 'The Glowing Fog',
    order: 3,
    domain: 'cosmic',
    accent: 'ember',
    from: cosmicTime(1200, 'modelled', 'twenty minutes'),
    to: cosmicTime(1.2e13, 'measured', '380,000 years'),
    summary: {
      essential:
        'For nearly 400,000 years the Universe was an opaque, glowing fog of nuclei and free electrons. Light could not travel far before being scattered.',
    },
  },
  {
    id: 'dark-ages',
    title: 'The Dark Ages',
    order: 4,
    domain: 'cosmic',
    accent: 'void',
    from: cosmicTime(1.2e13, 'measured', '380,000 years'),
    to: cosmicTimeFromYearsAgo(13.6e9, 'modelled'),
    summary: {
      essential:
        'The fog cleared, and then there was nothing to see. No stars existed yet. The Universe was dark, cold and almost featureless.',
    },
  },
  {
    id: 'first-light',
    title: 'First Light',
    order: 5,
    domain: 'stellar',
    accent: 'dawn',
    from: cosmicTimeFromYearsAgo(13.6e9, 'modelled'),
    to: cosmicTimeFromYearsAgo(12.8e9, 'modelled'),
    summary: {
      essential:
        'Gravity gathered the first gas clouds tightly enough to ignite fusion. The first stars lit up, and the first galaxies began to assemble around them.',
    },
  },
  {
    id: 'galaxies',
    title: 'The Age of Galaxies',
    order: 6,
    domain: 'stellar',
    accent: 'cosmos',
    from: cosmicTimeFromYearsAgo(12.8e9, 'modelled'),
    to: cosmicTimeFromYearsAgo(4.6e9, 'measured'),
    summary: {
      essential:
        'Eight billion years in which galaxies grew, collided and merged, generations of stars manufactured the heavier elements, and the expansion of the Universe began to speed up.',
    },
  },
  {
    id: 'solar-system',
    title: 'Our Corner of the Galaxy',
    order: 7,
    domain: 'planetary',
    accent: 'terra',
    from: cosmicTimeFromYearsAgo(4.6e9, 'measured'),
    to: cosmicTimeFromYearsAgo(4.0e9, 'measured'),
    summary: {
      essential:
        'A cloud of gas and dust collapsed into a new star and a disc of debris. Out of that debris came the planets, including this one.',
    },
  },
  {
    id: 'early-life',
    title: 'Life Takes Hold',
    order: 8,
    domain: 'biological',
    accent: 'origins',
    from: cosmicTimeFromYearsAgo(4.0e9, 'measured'),
    to: cosmicTimeFromYearsAgo(2.0e9, 'measured'),
    summary: {
      essential:
        'Somewhere in this stretch, chemistry became biology. Single-celled life appeared, and eventually one lineage learned to split water using sunlight — poisoning the atmosphere with oxygen.',
    },
  },
  {
    id: 'complex-life',
    title: 'Complexity',
    order: 9,
    domain: 'biological',
    accent: 'life',
    from: cosmicTimeFromYearsAgo(2.0e9, 'measured'),
    to: cosmicTimeFromYearsAgo(5.4e8, 'measured'),
    summary: {
      essential:
        'Cells acquired internal machinery, then learned to live in permanent groups. Through global glaciations and rising oxygen, the first animals appeared.',
    },
  },
  {
    id: 'animal-world',
    title: 'The Animal World',
    order: 10,
    domain: 'biological',
    accent: 'fauna',
    from: cosmicTimeFromYearsAgo(5.4e8, 'measured'),
    to: cosmicTimeFromYearsAgo(6.6e7, 'measured'),
    summary: {
      essential:
        'Animal body plans diversified rapidly, life moved onto land, and for 165 million years dinosaurs dominated the large-animal world — until an asteroid ended it.',
    },
  },
  {
    id: 'mammals',
    title: 'The Age of Mammals',
    order: 11,
    domain: 'biological',
    accent: 'human',
    from: cosmicTimeFromYearsAgo(6.6e7, 'measured'),
    to: cosmicTimeFromYearsAgo(7e6, 'measured'),
    summary: {
      essential:
        'With the large dinosaurs gone, mammals expanded into the empty roles. One small, tree-dwelling branch of them became the primates.',
    },
  },
  {
    id: 'hominins',
    title: 'The Hominin Bush',
    order: 12,
    domain: 'human',
    accent: 'human',
    from: cosmicTimeFromYearsAgo(7e6, 'measured'),
    to: cosmicTimeFromYearsAgo(3e5, 'measured'),
    summary: {
      essential:
        'Our lineage separated from the one leading to chimpanzees, then branched repeatedly. Many upright, tool-using species lived — most of them left no descendants.',
      detailed:
        'This is the part of the story most often drawn as a march from ape to human. The fossil record shows something else: a bush of contemporaneous species, most of them evolutionary dead ends.',
    },
  },
  {
    id: 'sapiens',
    title: 'Us',
    order: 13,
    domain: 'human',
    accent: 'unknown',
    from: cosmicTimeFromYearsAgo(3e5, 'measured'),
    to: cosmicTimeFromYearsAgo(0, 'measured', 'today'),
    summary: {
      essential:
        'Homo sapiens appeared in Africa, spread across the planet, met and interbred with other human species, and then — very recently — began to farm.',
    },
  },
];

const BY_ID = new Map(TIMELINE_ERAS.map((era) => [era.id, era]));

export function getEra(id: string): TimelineEra | undefined {
  return BY_ID.get(id);
}
