/**
 * Topics — the unit of reading, and the node of the knowledge graph.
 *
 * A topic belongs to exactly one section but may be linked from anywhere. Its
 * `slug` is stable and forms its URL (`/<section>/<topic>`); renaming a title
 * must never change a slug, because links and citations point at slugs.
 */
import type { ContentBlock } from './blocks';
import type { DepthText } from './depth';
import type { GlossaryTermId } from './glossary';
import type { LensId } from './lens';
import type { ReferenceId } from './reference';
import type { SectionId } from './section';

export type TopicId = string & { readonly __brand: 'TopicId' };

export function topicId(id: string): TopicId {
  return id as TopicId;
}

/** Publication state. Nothing incomplete is ever shown as if it were finished. */
export type ContentStatus = 'planned' | 'draft' | 'in-review' | 'published';

export interface Topic {
  readonly id: TopicId;
  readonly slug: string;
  readonly sectionId: SectionId;
  readonly title: string;
  /** One line under the title. Not a summary — a hook with information in it. */
  readonly subtitle?: string;
  /** Shown in cards, search results, and link previews. */
  readonly summary: DepthText;
  readonly blocks: readonly ContentBlock[];
  /** Ordering within its section. */
  readonly order: number;
  readonly status: ContentStatus;
  /** Graph edges to sibling topics, curated rather than generated. */
  readonly related?: readonly TopicId[];
  readonly glossaryTerms?: readonly GlossaryTermId[];
  /** Further reading beyond what individual blocks cite. */
  readonly furtherReading?: readonly ReferenceId[];
  /** ISO date of the last scientific review of this topic's content. */
  readonly reviewedOn?: string;
  /**
   * Which lens this topic belongs to, in a section that declares lenses.
   *
   * Required for topics in such a section and meaningless everywhere else. It
   * is what keeps the two curricula independent: a scientific topic never has
   * to know a philosophical one exists, and neither list renumbers when the
   * other grows.
   */
  readonly lens?: LensId;
}
