import type { ReferenceId } from './reference';
import type { DepthText } from './depth';
import type { TopicId } from './topic';

export type GlossaryTermId = string & { readonly __brand: 'GlossaryTermId' };

export function glossaryTermId(id: string): GlossaryTermId {
  return id as GlossaryTermId;
}

export interface GlossaryTerm {
  readonly id: GlossaryTermId;
  readonly term: string;
  /** Alternate spellings and synonyms; feeds search and inline term matching. */
  readonly aliases?: readonly string[];
  /** One sentence, shown in tooltips and search results. Must stand alone. */
  readonly short: string;
  /** Fuller treatment on the glossary page. */
  readonly extended?: DepthText;
  /** Topics where the term is actually explained, best first. */
  readonly relatedTopics?: readonly TopicId[];
  readonly relatedTerms?: readonly GlossaryTermId[];
  readonly references?: readonly ReferenceId[];
  /** Symbol and unit, when the term denotes a physical quantity. */
  readonly symbol?: string;
  readonly unit?: string;
}
