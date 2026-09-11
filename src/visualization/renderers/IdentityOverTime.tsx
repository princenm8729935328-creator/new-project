import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * Candidate answers to "what makes you the same person", each with its own
 * failure case.
 *
 * Listing them as rivals rather than as a progression is deliberate. No entry
 * here is marked correct, because none of them is settled.
 */
export default function IdentityOverTime(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Candidate criteria for being the same person — a conceptual comparison"
      items={[
        {
          id: 'matter',
          label: 'Same matter',
          colour: C.rock,
          tag: 'fails',
          detail:
            'Almost none of the material in an adult body was there in the child. If sameness of matter were required, nobody would survive a decade.',
        },
        {
          id: 'body',
          label: 'Same body, continuously',
          colour: C.water,
          detail:
            'Survives the matter objection by asking for a continuous organism rather than the same stuff. It has the odd result that a person in an irreversible coma is still the same person, which some take as a feature and others as a cost.',
        },
        {
          id: 'brain',
          label: 'Same brain',
          colour: C.hot,
          detail:
            'Picks out the organ that seems to carry what matters. But brains change extensively, and thought experiments about splitting one make the criterion give two answers where it needs one.',
        },
        {
          id: 'memory',
          label: 'Continuity of memory',
          colour: C.warm,
          detail:
            'Locke\u2019s proposal, and the one most people reach for unprompted. Its difficulty is that memory is patchy and reconstructive, and that the criterion seems to make forgetting into ceasing.',
        },
        {
          id: 'psychological',
          label: 'Overlapping psychological chains',
          colour: C.life,
          detail:
            'The repaired version: not one memory reaching all the way back, but links overlapping like fibres in a rope. It handles forgetting well, and still faces the splitting cases.',
        },
        {
          id: 'none',
          label: 'Nothing further — the question has no deep answer',
          colour: C.deep,
          detail:
            'Reductionist views hold that once you have described the physical and psychological continuities, there is no additional fact about identity left to settle. This is Parfit\u2019s position, and it is a live one rather than a refusal to answer.',
        },
      ]}
    />
  );
}
