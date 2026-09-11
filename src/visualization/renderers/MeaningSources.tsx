import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Compare } from './philKit';

/**
 * Wolf's two conditions, and what happens when only one is met.
 *
 * The failure cases in the middle rows are what make the proposal testable
 * against intuition rather than merely plausible-sounding.
 */
export default function MeaningSources(_props: VisualizationProps): ReactNode {
  return (
    <Compare
      label="Two conditions on a meaningful life — a conceptual model of a proposal"
      leftTitle="Does it grip you?"
      rightTitle="Is it worth gripping?"
      rows={[
        {
          id: 'both',
          left: 'Yes — you would do it anyway',
          right: 'Yes — it holds up from outside',
          detail:
            'Wolf\u2019s proposal is that meaning lives here, where subjective attraction meets objective attractiveness: raising a child well, work that helps, a craft pursued seriously, a friendship kept over decades.',
        },
        {
          id: 'engaged-only',
          left: 'Yes — completely absorbing',
          right: 'No — nothing comes of it',
          detail:
            'Absorption without worth. The stock example is a life devoted to memorising the phone book. The person is not suffering, which is exactly why this case tests whether meaning reduces to satisfaction.',
        },
        {
          id: 'worthy-only',
          left: 'No — it is a grind',
          right: 'Yes — plainly valuable',
          detail:
            'Worth without engagement. Doing something admirable that you have no relationship to at all. Wolf\u2019s claim is that this is a life of duty rather than a meaningful one, which some find too demanding a distinction.',
        },
        {
          id: 'problem',
          left: 'Who decides what is worth it?',
          right: 'The open question here',
          detail:
            'The proposal inherits the objectivist\u2019s hardest problem: it needs an account of worth that is not simply majority taste, and it does not supply one. That is a real limitation, not a detail.',
        },
      ]}
    />
  );
}
