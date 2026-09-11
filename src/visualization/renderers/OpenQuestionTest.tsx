import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * Moore's test applied to several candidate definitions of "good", including
 * the test's own weakness.
 *
 * Presenting the argument without its standard rebuttal would misrepresent the
 * state of the field: most philosophers today do not think the open-question
 * argument is decisive, and the figure has to say so.
 */
export default function OpenQuestionTest(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Moore’s test on candidate definitions — a conceptual model of an argument"
      items={[
        {
          id: 'pleasure',
          label: 'Good = whatever is pleasant',
          colour: C.warm,
          detail:
            '"This is pleasant, but is it good?" remains a sensible question rather than a confused one. Moore takes that as evidence the definition has not captured what "good" means.',
        },
        {
          id: 'desired',
          label: 'Good = whatever we desire',
          colour: C.water,
          detail:
            '"I want it, but should I?" is not nonsense either — it is arguably the most common question anyone asks themselves.',
        },
        {
          id: 'evolved',
          label: 'Good = what we evolved to approve of',
          colour: C.life,
          detail:
            '"We evolved to approve of this, but is it good?" stays open too. This is the version most relevant now, because evolutionary accounts of morality are often presented as if they answered the question rather than relocating it.',
        },
        {
          id: 'flourishing',
          label: 'Good = what conduces to flourishing',
          colour: C.rock,
          detail:
            'The strongest candidate, and the one where the question feels least open. Naturalists argue this shows the test tracks familiarity rather than meaning.',
        },
        {
          id: 'rebuttal',
          label: 'The test\u2019s own weakness',
          colour: C.deep,
          tag: 'objection',
          detail:
            'Water is H\u2082O, and "this is H\u2082O, but is it water?" would have been an open question before chemistry. So a definition can be true without being obvious, and openness alone does not refute it. This is why the argument is now treated as a challenge to meet rather than a proof.',
        },
      ]}
    />
  );
}
