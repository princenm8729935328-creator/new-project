import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * Answers that have been given to the closing question, side by side.
 *
 * Deliberately unranked and deliberately incomplete. Ending a journey about
 * thinking clearly with a recommended answer would undo the journey, so the
 * figure presents these as what has been argued, with each one's cost named.
 */
export default function HowToLiveTraditions(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Answers that have been argued for — a conceptual comparison, not a recommendation"
      items={[
        {
          id: 'virtue',
          label: 'Become a certain kind of person',
          colour: C.life,
          detail:
            'Aristotle, and the traditions around Confucius and Mengzi. Character is built by practice, and a good life is that character in action. Cost: it says less than you want about what to do on a particular difficult Tuesday.',
        },
        {
          id: 'stoic',
          label: 'Sort what is yours from what is not',
          colour: C.water,
          detail:
            'The Stoics. Judgement is in your power; outcomes largely are not, and most suffering comes from treating the second as the first. Cost: critics say it can slide into accepting what should be resisted.',
        },
        {
          id: 'duty',
          label: 'Act only as anyone could',
          colour: C.warm,
          detail:
            'Kant. Treat others as ends, never merely as means. Cost: the strictness that makes it dependable also makes it look inhuman in the cases where lying would clearly be better.',
        },
        {
          id: 'utility',
          label: 'Reduce suffering, count everyone equally',
          colour: C.hot,
          detail:
            'The utilitarians. Cost: taken seriously it is extremely demanding, and it will sometimes tell you to do something that feels monstrous.',
        },
        {
          id: 'create',
          label: 'Make values rather than inherit them',
          colour: C.deep,
          detail:
            'Nietzsche, and in a different key Sartre and Beauvoir. Cost: it is much easier to say than to do, and it is the answer most often flattened into a licence to do as you like — which none of them meant.',
        },
        {
          id: 'absurd',
          label: 'Live without resolving it',
          colour: C.rock,
          detail:
            'Camus. Neither deny the silence nor leap past it; keep both and carry on. Cost: it is a posture rather than a guide, and it does not tell you what to do with a morning.',
        },
        {
          id: 'yours',
          label: 'None of these is offered here as the answer',
          colour: C.dim,
          tag: 'the point',
          detail:
            'The claim of this lens is not that one of these is correct. It is that the question is worth asking carefully, that the answers have costs you can now see, and that which cost you are willing to pay is not something a diagram can settle for you.',
        },
      ]}
    />
  );
}
