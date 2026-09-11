import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * What we actually check before holding someone responsible.
 *
 * Reading the conditions off ordinary practice rather than off a theory is the
 * point: the excusing conditions are agreed on by people who disagree
 * completely about free will, which suggests the practice is tracking something
 * the metaphysics does not settle.
 */
export default function ResponsibilityConditions(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Conditions ordinary practice already checks — a conceptual model"
      items={[
        {
          id: 'did',
          label: 'Did they do it?',
          colour: C.dim,
          detail: 'The factual condition, and the one courts spend most of their time on.',
        },
        {
          id: 'knew',
          label: 'Did they know what they were doing?',
          colour: C.water,
          detail:
            'Ignorance excuses — unless the ignorance was itself culpable, which is where a great deal of real moral argument happens.',
        },
        {
          id: 'could',
          label: 'Could they have done otherwise, in the ordinary sense?',
          colour: C.warm,
          detail:
            'Not the metaphysical sense. We ask whether they were held at gunpoint, whether the alternative was available, whether anything blocked it.',
        },
        {
          id: 'capacity',
          label: 'Were they able to respond to reasons at all?',
          colour: C.life,
          detail:
            'Severe psychosis, dementia, very young age. Note that we excuse here without deciding anything about determinism — the exemption tracks a capacity, not a metaphysics.',
        },
        {
          id: 'degree',
          label: 'Responsibility comes in degrees',
          colour: C.deep,
          detail:
            'Practice already recognises partial responsibility: duress, provocation, diminished capacity. A framework that forces a yes-or-no answer is cruder than what people actually do.',
        },
        {
          id: 'open',
          label: 'What none of this settles',
          colour: C.rock,
          tag: 'open',
          detail:
            'Whether the whole practice rests on something true. A hard incompatibilist can accept every condition above as a description of what we do, while denying that anyone ever ultimately deserves the blame that follows.',
        },
      ]}
    />
  );
}
