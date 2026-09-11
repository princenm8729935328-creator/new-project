import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Compare } from './philKit';

/**
 * Predicted causes of behaviour against what the experiments found moved it.
 *
 * The findings here are empirical, and the figure keeps them empirical: it does
 * not draw a philosophical conclusion, and the last row says what the studies
 * do not license.
 */
export default function SituationVsCharacter(_props: VisualizationProps): ReactNode {
  return (
    <Compare
      label="A conceptual comparison of what predicts behaviour — not a data plot"
      leftTitle="What people expect to matter"
      rightTitle="What moved behaviour in studies"
      rows={[
        {
          id: 'obedience',
          left: 'Only unusual people would comply',
          right: 'An instruction from an apparent authority',
          detail:
            'Observers asked in advance expected almost nobody to continue. Compliance was far higher than predicted. The interesting result is the size of the prediction error, not any particular percentage.',
        },
        {
          id: 'hurry',
          left: 'Whether you care about helping',
          right: 'Whether you were told you were late',
          detail:
            'In the Darley and Batson study, participants on their way to speak — some of them about a parable on helping a stranger — passed someone slumped in a doorway. Hurry predicted helping better than what they were about to talk about.',
        },
        {
          id: 'group',
          left: 'What you can plainly see',
          right: 'What everyone around you says they see',
          detail:
            'Conformity studies find judgements about simple perceptual facts bending to a unanimous group. Most people hold out at least sometimes; most people also yield at least sometimes.',
        },
        {
          id: 'limit',
          left: 'Therefore character is a myth',
          right: 'This is not what follows',
          detail:
            'Several of these literatures have had replication problems and their effect sizes are debated. And even taken at face value, they show that situations matter more than people assume — not that dispositions do nothing. The philosophical question is what a realistic account of character should look like given this, which is exactly what is contested.',
        },
      ]}
    />
  );
}
