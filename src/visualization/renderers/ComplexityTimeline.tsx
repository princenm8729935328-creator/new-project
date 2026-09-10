import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Timeline, type TimelineEvent } from './lifeKit';

/**
 * Four billion years on one linear bar.
 *
 * Linear is the whole argument. Every log-scale version of this figure makes
 * the last few hundred million years look like most of the story; drawn
 * honestly, the microbial stretch takes up three quarters of the bar and the
 * reader can see it at a glance.
 */

const EVENTS: readonly TimelineEvent[] = [
  {
    ma: 4540,
    label: 'Earth forms',
    colour: C.rock,
    detail:
      'Earth assembles from the debris of the solar nebula. There is no surface to speak of for tens of millions of years.',
  },
  {
    ma: 4400,
    label: 'Liquid water',
    colour: C.water,
    detail:
      'The oldest zircon crystals carry an oxygen isotope signature indicating they formed in the presence of liquid water — much earlier than the old picture of a permanently molten Hadean allowed.',
  },
  {
    ma: 3700,
    label: 'Contested traces of life',
    colour: C.warm,
    detail:
      'Structures in Greenland and Canada interpreted as microbial. All of these claims are disputed, and the disputes are live.',
  },
  {
    ma: 3430,
    label: 'Accepted microbial mats',
    colour: C.life,
    detail:
      'Stromatolites from the Pilbara in Australia — the oldest evidence of life that most researchers accept. Life is at least this old, and probably considerably older.',
  },
  {
    ma: 2400,
    label: 'Oxygen in the air',
    colour: C.air,
    detail:
      'The Great Oxidation Event. Photosynthetic bacteria have been releasing oxygen for a long time; now the chemical sinks are finally saturated and it starts accumulating.',
  },
  {
    ma: 1800,
    label: 'Complex cells',
    colour: C.deep,
    detail:
      'The oldest widely accepted eukaryote fossils. The merger that produced them appears to have happened once, and everything with a nucleus descends from it.',
  },
  {
    ma: 575,
    label: 'Large organisms',
    colour: C.hot,
    detail:
      'The Ediacaran biota — the first organisms large enough to see. Many of them are unlike anything alive, and most disappear before the Cambrian.',
  },
  {
    ma: 538,
    label: 'Cambrian diversification',
    colour: C.hot,
    detail:
      'Most animal body plans appear in the fossil record within roughly twenty million years. Molecular evidence indicates the lineages diverged earlier; what changed was largely that animals started making hard parts.',
  },
  {
    ma: 470,
    label: 'Life on land',
    colour: C.life,
    detail:
      'Plants and fungi colonise the continents, followed by arthropods and, about a hundred million years later, vertebrates.',
  },
  {
    ma: 66,
    label: 'End-Cretaceous impact',
    colour: C.hot,
    detail:
      'An asteroid strike ends the dinosaurs except the birds, and roughly three quarters of species. Mammals expand into the space.',
  },
  {
    ma: 0.3,
    label: 'Modern humans',
    colour: '#fff',
    detail:
      'Anatomically modern humans appear. On this bar the mark is thinner than the line drawing it.',
  },
];

export default function ComplexityTimeline(_props: VisualizationProps): ReactNode {
  return (
    <Timeline
      events={EVENTS}
      fromMa={4540}
      toMa={0}
      caption="Four and a half billion years, linear — tap a marker"
    />
  );
}
