import type { ReactNode } from 'react';
import { LENS_META, LENS_STRAPLINE, type LensId } from '@/content/schema/lens';
import styles from './LensSelector.module.css';

export interface LensSelectorProps {
  /** The lenses on offer, in the order the section declares them. */
  lenses: readonly LensId[];
  value: LensId;
  onChange: (lens: LensId) => void;
  /** Scopes the radio group, so two selectors on a page never share state. */
  name: string;
}

/**
 * The choice between two ways of investigating the same subject.
 *
 * Native radios, for the same reason the depth control uses them: a real radio
 * group is already operable by keyboard, switch control and screen reader, and
 * arrow keys already move between the options. Nothing here needs ARIA of its
 * own, and a custom tab widget would have to reimplement all of it worse.
 *
 * Each option states its question rather than only its name, because the
 * question is the actual distinction — "Scientific" and "Philosophical" are
 * labels a reader can project anything onto, while "How did we become human?"
 * and "What does it mean to be human?" cannot be confused with each other.
 */
export function LensSelector({ lenses, value, onChange, name }: LensSelectorProps): ReactNode {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>Lens</legend>
      <div className={styles.options}>
        {lenses.map((id) => {
          const lens = LENS_META[id];
          return (
            <label key={id} className={styles.option}>
              <input
                type="radio"
                name={name}
                value={id}
                checked={value === id}
                onChange={() => onChange(id)}
              />
              <span className={styles.name}>{lens.label}</span>
              <span className={styles.question}>{lens.question}</span>
            </label>
          );
        })}
      </div>
      <p className={styles.strapline}>{LENS_STRAPLINE}</p>
    </fieldset>
  );
}
