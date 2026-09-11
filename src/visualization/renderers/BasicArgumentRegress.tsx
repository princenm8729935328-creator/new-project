import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * The regress, drawn as a regress.
 *
 * The indentation is the argument: each step is the same step again, applied to
 * whatever the previous step produced, and the trailing line says what that
 * means. A flat list would lose the only feature that matters.
 */
export default function BasicArgumentRegress(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Galen Strawson’s regress — a conceptual diagram of an argument"
      indentStep={16}
      trailer="…and there is no first step."
      items={[
        {
          id: 'act',
          label: 'You act as you do because of how you are',
          colour: C.life,
          detail:
            'Uncontroversial. Your choices come from your values, temperament and judgement — if they did not, they would not be yours.',
        },
        {
          id: 'responsible',
          label: 'So to be ultimately responsible, you must be responsible for how you are',
          colour: C.water,
          detail:
            'This is the step the argument turns on. If what you do follows from how you are, then being answerable for the act requires being answerable for the source.',
        },
        {
          id: 'made',
          label: 'To be responsible for how you are, you must have made yourself that way',
          colour: C.warm,
          detail:
            'Not merely been shaped — chosen. And a choice is an act, which brings the first premise back into play.',
        },
        {
          id: 'earlier',
          label: 'But you made yourself using the self you already had',
          colour: C.hot,
          detail:
            'Any act of self-shaping was performed by whatever you already were, with the preferences you already had. Those you did not choose either.',
        },
        {
          id: 'again',
          label: 'So you would need to be responsible for that earlier self too',
          colour: C.deep,
          tag: 'repeat',
          detail:
            'And the same reasoning applies to it, and to whatever produced it. Strawson\u2019s conclusion is that ultimate responsibility would require something logically impossible — not merely something we happen to lack.',
        },
      ]}
    />
  );
}
