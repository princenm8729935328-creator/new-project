import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Timeline, type TimelineEvent } from './lifeKit';

/**
 * The Mesozoic at true scale, which is the correction this figure exists for.
 *
 * More time separates Stegosaurus from Tyrannosaurus than separates
 * Tyrannosaurus from us, and no amount of saying so works as well as putting
 * them on the same axis.
 */

const EVENTS: readonly TimelineEvent[] = [
  {
    ma: 252,
    label: 'End-Permian extinction',
    colour: C.hot,
    detail:
      'The largest extinction in the record clears the way. Around 90% of marine species disappear. The Mesozoic begins in an emptied world.',
  },
  {
    ma: 233,
    label: 'First dinosaurs',
    colour: C.life,
    detail:
      'Dinosaurs appear as a modest group among many. For their first thirty million years they are outnumbered and out-varied by crocodile-line archosaurs.',
  },
  {
    ma: 201,
    label: 'End-Triassic extinction',
    colour: C.hot,
    detail:
      'Volcanism associated with the break-up of Pangaea removes most of the dinosaurs’ competitors. Dinosaurs come through and expand into the space — dominance by inheritance, not by winning a contest.',
  },
  {
    ma: 150,
    label: 'Stegosaurus, Archaeopteryx',
    colour: C.warm,
    detail:
      'The Late Jurassic. Sauropods reach their largest. Archaeopteryx shows feathers and flight in an animal still plainly a small theropod dinosaur.',
  },
  {
    ma: 130,
    label: 'Flowering plants spread',
    colour: C.life,
    detail:
      'Angiosperms diversify and reorganise terrestrial ecosystems, along with the insects that pollinate them and the herbivores that eat them.',
  },
  {
    ma: 68,
    label: 'Tyrannosaurus',
    colour: C.warm,
    detail:
      'Eighty-two million years after Stegosaurus — a longer gap than the one between Tyrannosaurus and you. The popular image of a single dinosaur world collapses an interval longer than the entire age of mammals.',
  },
  {
    ma: 66,
    label: 'Chicxulub impact',
    colour: C.hot,
    detail:
      'A ten-kilometre asteroid ends the non-bird dinosaurs and around three quarters of species. Nothing on land above roughly 25 kilograms survives.',
  },
  {
    ma: 55,
    label: 'Mammals expand',
    colour: C.deep,
    detail:
      'Mammals had existed for 150 million years, mostly small and nocturnal. Within about ten million years of the impact they occupy body sizes and roles that were previously unavailable to them.',
  },
];

export default function MesozoicTimeline(_props: VisualizationProps): ReactNode {
  return (
    <Timeline
      events={EVENTS}
      fromMa={252}
      toMa={40}
      caption="The Mesozoic and its aftermath, to scale — tap a marker"
    />
  );
}
