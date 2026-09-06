/**
 * Content blocks.
 *
 * A topic's body is an ordered list of typed blocks rather than a slab of
 * markup. That is what lets the same content render as a scrolling article on a
 * phone, a side panel next to a visualization on a tablet, and a source list in
 * the reference view — and it is what makes "every claim carries an evidence
 * level and a citation" a type-level requirement instead of a house rule.
 *
 * Adding a new block kind: add a variant here, render it in
 * `features/topic/BlockRenderer.tsx`, and extend `validateBlock`. Nothing else
 * needs to change.
 */
import type { EvidenceLevel } from './evidence';
import type { ReferenceId } from './reference';
import type { DepthText } from './depth';
import type { Quantity } from './quantity';
import type { GlossaryTermId } from './glossary';
import type { VisualizationId } from './visualization';
import type { TopicId } from './topic';

interface BlockBase {
  readonly id: string;
  /**
   * Depth levels this block appears at. Omit to show at every depth.
   * A derivation, for instance, is `['technical']`.
   */
  readonly depths?: readonly ('essential' | 'detailed' | 'technical')[];
}

/** Narrative text. Carries no scientific assertion of its own. */
export interface ProseBlock extends BlockBase {
  readonly kind: 'prose';
  readonly text: DepthText;
}

/**
 * A scientific assertion. The unit of accountability: it must state its
 * epistemic status and, at every level except speculation, cite a source.
 */
export interface ClaimBlock extends BlockBase {
  readonly kind: 'claim';
  readonly statement: DepthText;
  readonly evidence: EvidenceLevel;
  readonly references: readonly ReferenceId[];
  /** Required for `speculation`: says plainly what would make this testable. */
  readonly speculationNote?: string;
}

/** One or more measured values, rendered as a data panel. */
export interface QuantityBlock extends BlockBase {
  readonly kind: 'quantity';
  readonly quantities: readonly Quantity[];
}

/** An interactive or animated figure. See `schema/visualization.ts`. */
export interface VisualizationBlock extends BlockBase {
  readonly kind: 'visualization';
  readonly visualizationId: VisualizationId;
  /** Overrides the visualization's default caption for this context. */
  readonly caption?: string;
}

/** A pulled-aside note: a misconception corrected, a caveat, a bit of history. */
export interface CalloutBlock extends BlockBase {
  readonly kind: 'callout';
  readonly tone: 'note' | 'misconception' | 'history' | 'caution';
  readonly title: string;
  readonly text: DepthText;
  readonly references?: readonly ReferenceId[];
}

/** A question science has not answered, with the shape of the difficulty. */
export interface OpenQuestionBlock extends BlockBase {
  readonly kind: 'open-question';
  readonly question: string;
  readonly whyItMatters: DepthText;
  readonly whatWouldSettleIt: DepthText;
  readonly references: readonly ReferenceId[];
}

/** A defined term surfaced inline, linked into the glossary. */
export interface DefinitionBlock extends BlockBase {
  readonly kind: 'definition';
  readonly termId: GlossaryTermId;
}

/** An explicit hop in the knowledge graph, authored rather than inferred. */
export interface CrossLinkBlock extends BlockBase {
  readonly kind: 'cross-link';
  readonly topicId: TopicId;
  /** Why a reader here should go there. */
  readonly rationale: string;
}

export type ContentBlock =
  | ProseBlock
  | ClaimBlock
  | QuantityBlock
  | VisualizationBlock
  | CalloutBlock
  | OpenQuestionBlock
  | DefinitionBlock
  | CrossLinkBlock;

export type BlockKind = ContentBlock['kind'];

/** All references cited anywhere inside a block. */
export function blockReferences(block: ContentBlock): readonly ReferenceId[] {
  switch (block.kind) {
    case 'claim':
    case 'open-question':
      return block.references;
    case 'callout':
      return block.references ?? [];
    case 'quantity':
      return block.quantities.flatMap((quantity) => quantity.references);
    case 'prose':
    case 'visualization':
    case 'definition':
    case 'cross-link':
      return [];
  }
}
