import type { ReactNode } from 'react';
import { DEPTH_LEVELS, DEPTH_META } from '@/content/schema/depth';
import { useReaderPreferences } from '@/app/providers/useReaderPreferences';
import styles from './DepthControl.module.css';

/**
 * Reading-depth selector.
 *
 * Global rather than per-article, because "how technical do you want this" is a
 * property of the reader, not of the page. Native radios keep it operable by
 * keyboard, switch control and screen reader with no ARIA of our own.
 */
export function DepthControl(): ReactNode {
  const { depth, setDepth } = useReaderPreferences();

  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>Reading depth</legend>
      <div className={styles.options}>
        {DEPTH_LEVELS.map((level) => (
          <label key={level} className={styles.option}>
            <input
              type="radio"
              name="reading-depth"
              value={level}
              checked={depth === level}
              onChange={() => setDepth(level)}
            />
            {DEPTH_META[level].label}
          </label>
        ))}
      </div>
      <p className={styles.description}>{DEPTH_META[depth].description}</p>
    </fieldset>
  );
}
