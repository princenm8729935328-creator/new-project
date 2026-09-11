import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Spectrum, C } from './philKit';

/**
 * The doctrine of the mean on one trait.
 *
 * A line is the right shape for this and also a slightly misleading one, so the
 * last mark says the misleading part out loud: the mean is not the midpoint,
 * and Aristotle says so explicitly.
 */
export default function VirtueMean(_props: VisualizationProps): ReactNode {
  return (
    <Spectrum
      label="Courage between two failures — a conceptual model, not a measured scale"
      leftEnd="too little"
      rightEnd="too much"
      marks={[
        {
          id: 'cowardice',
          at: 0.06,
          label: 'Cowardice',
          colour: C.dim,
          detail:
            'Fear where fear is not warranted, or fear that wins where it should not. Aristotle treats this as a defect of the same capacity courage is an excellence of.',
        },
        {
          id: 'caution',
          at: 0.3,
          label: 'Excessive caution',
          colour: C.water,
          detail:
            'Not obviously a vice from inside — it presents as prudence. Part of Aristotle\u2019s point is that the failures nearest the mean are the hardest to see in yourself.',
        },
        {
          id: 'courage',
          at: 0.56,
          label: 'Courage',
          colour: C.life,
          detail:
            'Feeling fear in proportion to the danger and acting well anyway, for the right reason. Note that it includes the feeling: someone who feels nothing is not displaying courage.',
        },
        {
          id: 'rashness',
          at: 0.82,
          label: 'Rashness',
          colour: C.warm,
          detail:
            'Acting into danger without weighing it. It can look like courage from outside, and the difference is in the judgement rather than the behaviour.',
        },
        {
          id: 'not-midpoint',
          at: 0.98,
          label: 'Not the midpoint',
          colour: C.hot,
          detail:
            'Aristotle is explicit that the mean is relative to the person and the situation, not an average. Courage sits nearer rashness than cowardice on his own account, and no formula locates it — that is the work practical wisdom does.',
        },
      ]}
    />
  );
}
