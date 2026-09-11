import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * One experimental finding, and the readings it will and will not support.
 *
 * This is the single place in the Philosophical Lens where an experiment is
 * discussed at length, so the figure is built to separate the result from the
 * interpretations — and the interpretations are given as rivals, because that
 * is what they are.
 */
export default function ReadinessPotentialInterpretations(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="A finding and four readings of it — a conceptual diagram, not experimental data"
      items={[
        {
          id: 'finding',
          label: 'The finding: brain activity precedes the reported urge',
          colour: C.dim,
          tag: 'the result',
          detail:
            'In Libet\u2019s paradigm, participants flex a wrist whenever they like and report the position of a clock hand at the moment they first felt the urge. A slow build-up of scalp-recorded activity begins before that reported moment.',
        },
        {
          id: 'strong',
          label: 'Reading 1: the brain decides, then tells you',
          colour: C.hot,
          detail:
            'The popular reading, and the weakest. It treats a spontaneous wrist flick with no reasons on either side as a model of deciding — which is the one kind of choice nobody thought was deliberated.',
        },
        {
          id: 'timing',
          label: 'Reading 2: the introspective timing is unreliable',
          colour: C.warm,
          detail:
            'Reporting when you became aware of something, by reading a clock, is itself a difficult task with its own delays. Several critiques argue the measured gap partly reflects the measurement.',
        },
        {
          id: 'accumulator',
          label: 'Reading 3: the build-up is not a decision at all',
          colour: C.water,
          detail:
            'Schurger and colleagues proposed that ongoing neural noise drifts until it crosses a threshold, and that averaging trials backwards from the movement produces the apparent ramp whether or not a decision was forming.',
        },
        {
          id: 'limit',
          label: 'What none of the readings settles',
          colour: C.life,
          detail:
            'Even the strongest reading concerns an unmotivated flick in a laboratory, over a fraction of a second. Choosing a career, ending a friendship, changing one\u2019s mind about a value \u2014 these are not what the paradigm measures, and no version of the experiment has reached them.',
        },
      ]}
    />
  );
}
