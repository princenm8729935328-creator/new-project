import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { ContentBlock } from '@/content/schema/blocks';
import { resolveDepthText, type DepthLevel } from '@/content/schema/depth';
import { formatQuantity } from '@/content/schema/quantity';
import { getGlossaryTerm } from '@/content/glossary';
import { getTopicById } from '@/content/topics';
import { getSectionById } from '@/content/sections';
import { EvidenceBadge } from '@/design-system/components/EvidenceBadge';
import { Panel } from '@/design-system/components/Panel';
import { VisualizationFrame } from '@/visualization/core/VisualizationFrame';
import { cx } from '@/lib/cx';
import { ReferenceList } from './ReferenceList';
import styles from './blocks.module.css';

/**
 * Turns one content block into UI.
 *
 * The switch is exhaustive by type: adding a block kind to the schema without
 * handling it here is a compile error, which is deliberate — it is how a new
 * kind of scientific statement is prevented from rendering as nothing.
 */
export function BlockRenderer({
  block,
  depth,
}: {
  block: ContentBlock;
  depth: DepthLevel;
}): ReactNode {
  // Blocks can be scoped to a depth: a derivation appears only at `technical`.
  if (block.depths && !block.depths.includes(depth)) return null;

  switch (block.kind) {
    case 'prose':
      return <p className="ds-body">{resolveDepthText(block.text, depth)}</p>;

    case 'claim':
      return (
        <div className={styles.claim}>
          <EvidenceBadge level={block.evidence} />
          <p className={styles.claimStatement}>{resolveDepthText(block.statement, depth)}</p>
          {block.speculationNote && (
            <p className={styles.speculationNote}>{block.speculationNote}</p>
          )}
          <ReferenceList ids={block.references} />
        </div>
      );

    case 'quantity':
      return (
        <Panel variant="quiet">
          <div className={styles.quantityList}>
            {block.quantities.map((quantity) => (
              <div key={quantity.id}>
                <p className={styles.quantityLabel}>{quantity.label}</p>
                <p className={styles.quantityValue}>{formatQuantity(quantity)}</p>
                {quantity.context && <p className={styles.quantityContext}>{quantity.context}</p>}
                <ReferenceList ids={quantity.references} />
              </div>
            ))}
          </div>
        </Panel>
      );

    case 'visualization':
      return <VisualizationFrame id={block.visualizationId} caption={block.caption} />;

    case 'callout':
      return (
        <Panel variant="quiet" className={cx(styles[block.tone])}>
          <p className={styles.calloutTitle}>{block.title}</p>
          <p className="ds-body">{resolveDepthText(block.text, depth)}</p>
          {block.references && <ReferenceList ids={block.references} />}
        </Panel>
      );

    case 'open-question':
      return (
        <Panel accented>
          <EvidenceBadge level="open-question" />
          <p className={styles.question} style={{ marginBlockStart: 'var(--space-3)' }}>
            {block.question}
          </p>
          <span className={styles.questionLabel}>Why it matters</span>
          <p className="ds-body">{resolveDepthText(block.whyItMatters, depth)}</p>
          <span className={styles.questionLabel}>What would settle it</span>
          <p className="ds-body">{resolveDepthText(block.whatWouldSettleIt, depth)}</p>
          <ReferenceList ids={block.references} />
        </Panel>
      );

    case 'definition': {
      const term = getGlossaryTerm(block.termId);
      if (!term) return null;
      return (
        <Panel variant="quiet">
          <p className={styles.definitionTerm}>
            {term.term}
            {term.symbol && <span className="ds-mono"> · {term.symbol}</span>}
          </p>
          <p className={styles.definitionBody}>{term.short}</p>
        </Panel>
      );
    }

    case 'cross-link': {
      const topic = getTopicById(block.topicId);
      const section = topic ? getSectionById(topic.sectionId) : undefined;
      if (!topic || !section) return null;
      return (
        <Link to={`/${section.slug}/${topic.slug}`} className={styles.crossLink}>
          <span className="ds-subheading">{topic.title}</span>
          <span className={styles.crossLinkRationale}>{block.rationale}</span>
        </Link>
      );
    }
  }
}

export function BlockList({
  blocks,
  depth,
}: {
  blocks: readonly ContentBlock[];
  depth: DepthLevel;
}): ReactNode {
  return (
    <>
      {blocks.map((block) => (
        <div key={block.id} className={styles.block}>
          <BlockRenderer block={block} depth={depth} />
        </div>
      ))}
    </>
  );
}
