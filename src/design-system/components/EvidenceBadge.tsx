import type { ReactNode } from 'react';
import { EVIDENCE_LEVEL_META, type EvidenceLevel } from '@/content/schema/evidence';
import { cx } from '@/lib/cx';
import styles from './EvidenceBadge.module.css';

export interface EvidenceBadgeProps {
  level: EvidenceLevel;
  /** Prints the level's definition underneath. Use on first appearance in a page. */
  showDefinition?: boolean;
  className?: string;
}

/**
 * The epistemic-status marker.
 *
 * This component is the visible half of the platform's central promise: a
 * reader can always tell, at a glance, whether they are looking at a
 * measurement, a model, an argument in progress, or an idea. It never renders
 * without a text label, so the meaning survives colour blindness and greyscale.
 */
export function EvidenceBadge({
  level,
  showDefinition = false,
  className,
}: EvidenceBadgeProps): ReactNode {
  const meta = EVIDENCE_LEVEL_META[level];

  return (
    <span className={className}>
      <span className={cx(styles.badge, styles[meta.token])} title={meta.definition}>
        <span className={styles.dot} aria-hidden="true" />
        {meta.label}
      </span>
      {showDefinition && <p className={styles.definition}>{meta.definition}</p>}
    </span>
  );
}
