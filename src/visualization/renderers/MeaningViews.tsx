import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * The main families of answer about meaning in life.
 *
 * The nihilist entry is included and taken seriously rather than dismissed,
 * because a survey that only lists the comfortable options is not a survey.
 */
export default function MeaningViews(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="Families of answer about meaning — a conceptual comparison, not a verdict"
      items={[
        {
          id: 'supernatural',
          label: 'Meaning comes from outside: a purpose we were given',
          colour: C.warm,
          detail:
            'The oldest family and still the most widely held. Its strength is that it makes meaning genuinely objective; its difficulty is that being assigned a purpose by someone else is not obviously the same as your life mattering.',
        },
        {
          id: 'objective',
          label: 'Meaning is objective but not supernatural',
          colour: C.life,
          detail:
            'Some activities and relationships are worth engaging in whether or not anyone does, and a life spent on them is meaningful. Its task is to say what makes something worth engaging in without smuggling in a purpose-giver.',
        },
        {
          id: 'subjective',
          label: 'Meaning is whatever you find meaningful',
          colour: C.water,
          detail:
            'Attractive, and the standard objection is sharp: a life spent memorising phone directories, or devoted to something cruel, would count as meaningful if the person found it absorbing.',
        },
        {
          id: 'hybrid',
          label: 'Both are needed: engagement plus something worth it',
          colour: C.deep,
          detail:
            'Susan Wolf\u2019s proposal, which tries to keep what each side gets right. It is currently the most discussed view, and it inherits the objectivist\u2019s problem of saying what counts as worth it.',
        },
        {
          id: 'nihilist',
          label: 'There is no meaning to be had',
          colour: C.dim,
          detail:
            'A position with serious defenders, not a mood. It has to explain why the absence of cosmic meaning should feel like a loss rather than a category error — and several of the thinkers in the next topics take that challenge as their starting point.',
        },
      ]}
    />
  );
}
