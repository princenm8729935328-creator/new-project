import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Compare } from './philKit';

/**
 * Paired cases, identical in everything the agent controlled.
 *
 * Pairing is the whole method: each row holds the agent's contribution fixed
 * and varies only luck, so that any difference in judgement has nowhere to come
 * from except the luck.
 */
export default function MoralLuckCases(_props: VisualizationProps): ReactNode {
  return (
    <Compare
      label="Pairs identical in what the agent controlled — a conceptual comparison"
      leftTitle="One case"
      rightTitle="The other"
      rows={[
        {
          id: 'outcome',
          left: 'Drives home drunk, arrives safely',
          right: 'Drives home drunk, kills a child',
          detail:
            'Resultant luck. The decision, the impairment and the risk taken are identical. Our judgements are not, and neither are the legal consequences. Either the outcome matters morally, or a great deal of ordinary practice is mistaken.',
        },
        {
          id: 'circumstance',
          left: 'Lived in a country that stayed calm',
          right: 'Lived where a regime demanded collaboration',
          detail:
            'Circumstantial luck. Many people are never tested. Being untested is not a virtue, yet we praise people who passed a test and say nothing of those who never faced one.',
        },
        {
          id: 'constitutive',
          left: 'Born with an even temperament',
          right: 'Born with a volatile one',
          detail:
            'Constitutive luck — the kind the conditioning movement was about. If character is itself luck, then praising character is praising fortune.',
        },
        {
          id: 'response',
          left: 'Restrict blame to what was controlled',
          right: 'Accept that luck reaches inside',
          detail:
            'These are the two main responses, and both cost something. The first shrinks moral assessment until almost nothing is left inside it; the second abandons the principle that we are only answerable for what we control. Nagel and Williams, who set the problem out, did not think it resolved.',
        },
      ]}
    />
  );
}
