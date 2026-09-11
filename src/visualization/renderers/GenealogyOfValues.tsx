import type { ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Panels, C } from './philKit';

/**
 * What a genealogy is doing, and what it cannot do.
 *
 * Nietzsche is the philosopher most often flattened into slogans, so this
 * figure is built around the distinction between his method and his
 * conclusions, and ends by naming the objection his method invites.
 */
export default function GenealogyOfValues(_props: VisualizationProps): ReactNode {
  return (
    <Panels
      label="What a genealogy of a value does — a conceptual model of a method"
      flow
      items={[
        {
          id: 'assume',
          label: 'Start: the value feels timeless',
          colour: C.dim,
          detail:
            'Humility, pity, equality, the wrongness of cruelty — these present themselves as simply what morality is, rather than as having arrived at some point.',
        },
        {
          id: 'history',
          label: 'Ask when and among whom it arose',
          colour: C.water,
          detail:
            'Nietzsche\u2019s claim is that moral concepts have histories, and that the histories are often not flattering. Whether his particular historical claims are accurate is disputed by historians and classicists; the method survives the disputes about the details.',
        },
        {
          id: 'contrast',
          label: 'His hypothesis: two ways of evaluating',
          colour: C.warm,
          detail:
            'One starts from self-affirmation and calls its opposite "bad"; the other starts from an enemy, calls them "evil", and derives its own goodness by contrast. Nietzsche argues the second is a reversal produced from a position of weakness.',
        },
        {
          id: 'point',
          label: 'The point: a value can be a symptom',
          colour: C.hot,
          detail:
            'He asks not only whether a value is true but what kind of life it comes from and what it does to those who hold it. That question is his real contribution, and it is uncomfortable by design.',
        },
        {
          id: 'limit',
          label: 'What genealogy cannot establish',
          colour: C.life,
          tag: 'objection',
          detail:
            'An unflattering origin does not make a value false — that is the genetic fallacy, and Nietzsche is often read as committing it. Note too what he is not saying: not that anything you want is permitted, not that cruelty is good, and not that the \u00dcbermensch means becoming powerful over others. He was explicitly contemptuous of the nationalists and antisemites who later claimed him.',
        },
      ]}
    />
  );
}
