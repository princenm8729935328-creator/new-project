import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, Timeline, type TimelineEvent } from './lifeKit';

/**
 * The billion-plus years in which complex cells existed and did very little.
 *
 * Zooming the timeline onto the Proterozoic is what makes the delay visible.
 * On a four-billion-year axis this whole interval is a smear; here it is most
 * of the width, which is the correct impression.
 */

const EVENTS: readonly TimelineEvent[] = [
  {
    ma: 2400,
    label: 'Great Oxidation Event',
    colour: C.air,
    detail:
      'Oxygen begins accumulating in the air. Levels reach perhaps one percent of today’s and then stay low for well over a billion years.',
  },
  {
    ma: 1800,
    label: 'Oldest accepted eukaryote fossils',
    colour: C.deep,
    detail:
      'Complex cells are in place. Everything needed for large multicellular organisms — a nucleus, mitochondria, internal structure — now exists, and nothing large appears for more than a billion years.',
  },
  {
    ma: 1200,
    label: 'Multicellular red algae',
    colour: C.life,
    detail:
      'Bangiomorpha, from Arctic Canada: multicellular, differentiated, and showing the oldest known evidence of sexual reproduction. Complexity is possible and is not spreading.',
  },
  {
    ma: 720,
    label: 'Snowball Earth begins',
    colour: C.water,
    detail:
      'The Sturtian and then the Marinoan glaciations cover the planet in ice, possibly to the equator, for tens of millions of years each. Life persists in refuges.',
  },
  {
    ma: 635,
    label: 'Ice retreats',
    colour: C.warm,
    detail:
      'Volcanic carbon dioxide accumulated during the freeze finally forces the planet back out. What follows is a strongly altered ocean chemistry and, shortly afterwards, the first large organisms.',
  },
  {
    ma: 575,
    label: 'Ediacaran biota',
    colour: C.hot,
    detail:
      'Large soft organisms appear: quilted fronds a metre long, flat segmented discs, forms with three-fold symmetry that almost nothing alive has. Many have no mouth or gut. How they relate to later animals is genuinely contested, and most disappear before the Cambrian.',
  },
  {
    ma: 538,
    label: 'Cambrian begins',
    colour: C.hot,
    detail:
      'Most animal body plans appear in the fossil record within roughly twenty million years. Molecular clocks put the divergences considerably earlier; what changed was largely that animals began making hard parts.',
  },
];

export default function PrecambrianTimeline(_props: VisualizationProps): ReactNode {
  return (
    <Timeline
      events={EVENTS}
      fromMa={2500}
      toMa={500}
      caption="Two billion years of very little happening — tap a marker"
    />
  );
}
