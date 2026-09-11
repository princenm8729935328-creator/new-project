import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { PositionMap, C } from './philKit';

/**
 * Metaethical positions plotted against the two questions that generate them.
 *
 * The commonest error in this area is treating "objective" as one question.
 * Splitting it into two — are moral claims even the kind of thing that can be
 * true, and if so is anything making them true independent of us — sorts
 * positions that otherwise get lumped together.
 */
export default function MetaethicsMap(_props: VisualizationProps): ReactNode {
  return (
    <PositionMap
      label="Metaethical positions — a conceptual map, not a measurement of anything"
      xLow="moral claims do not state facts"
      xHigh="moral claims state facts"
      yLow="no mind-independent moral truths"
      yHigh="mind-independent moral truths"
      points={[
        {
          id: 'realism',
          label: 'Moral realism',
          x: 0.88,
          y: 0.9,
          colour: C.life,
          detail:
            'Moral claims describe, and some of them are true independently of what anyone thinks. Its hardest question is what such facts are made of and how we could detect them.',
        },
        {
          id: 'error',
          label: 'Error theory',
          x: 0.86,
          y: 0.08,
          colour: C.hot,
          detail:
            'Mackie\u2019s position: moral claims do describe, and they are all false, because the objective values they assert do not exist. Unlike relativism it does not make morality true-for-us; it makes it mistaken.',
        },
        {
          id: 'expressivism',
          label: 'Expressivism',
          x: 0.1,
          y: 0.2,
          colour: C.water,
          detail:
            'Moral claims express attitudes rather than report facts. Sophisticated versions work hard to explain how moral argument and moral mistakes remain possible.',
        },
        {
          id: 'relativism',
          label: 'Relativism',
          x: 0.66,
          y: 0.22,
          colour: C.warm,
          detail:
            'Moral claims are true or false, but relative to a framework. It has to explain what happens in disagreement between frameworks without collapsing into "everyone is right".',
        },
        {
          id: 'constructivism',
          label: 'Constructivism',
          x: 0.7,
          y: 0.56,
          colour: C.deep,
          detail:
            'Moral truths are real but constructed by what rational agents would agree to. It sits in the middle deliberately: more than taste, less than a feature of the universe.',
        },
        {
          id: 'naturalism',
          label: 'Moral naturalism',
          x: 0.92,
          y: 0.68,
          colour: C.rock,
          detail:
            'Moral facts are natural facts — about flourishing, or harm, or what a well-functioning social creature needs. It offers the most direct route across the is\u2013ought gap, and inherits the open-question objection.',
        },
      ]}
    />
  );
}
