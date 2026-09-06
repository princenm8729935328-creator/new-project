import type { ReactNode } from 'react';
import { formatReference, referenceHref, type ReferenceId } from '@/content/schema/reference';
import { getReference } from '@/content/references';
import styles from './blocks.module.css';

export interface ReferenceListProps {
  ids: readonly ReferenceId[];
  label?: string;
}

/**
 * Renders the sources behind a claim.
 *
 * A reference id that does not resolve is rendered as an explicit missing-source
 * marker rather than silently dropped: a citation that quietly disappears is
 * worse than one that is visibly broken. The same condition fails the content
 * validation test, so it should never reach a reader.
 */
export function ReferenceList({ ids, label = 'Sources' }: ReferenceListProps): ReactNode {
  if (ids.length === 0) return null;

  return (
    <div className={styles.references}>
      <span className="ds-visually-hidden">{label}</span>
      <ul>
        {ids.map((id, index) => {
          const reference = getReference(id);
          const marker = `[${index + 1}]`;

          if (!reference) {
            return (
              <li key={id} className={styles.referenceItem}>
                <span className={styles.referenceMarker}>{marker}</span>
                <span>Missing source: {id}</span>
              </li>
            );
          }

          const href = referenceHref(reference);
          const text = formatReference(reference);

          return (
            <li key={id} className={styles.referenceItem}>
              <span className={styles.referenceMarker}>{marker}</span>
              {href ? (
                <a href={href} target="_blank" rel="noreferrer noopener">
                  {text}
                </a>
              ) : (
                <span>{text}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
