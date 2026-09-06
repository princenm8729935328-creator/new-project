import type { ElementType, ReactNode } from 'react';
import styles from './Panel.module.css';
import { cx } from '@/lib/cx';

export type PanelVariant = 'default' | 'quiet' | 'bare';

export interface PanelProps {
  children: ReactNode;
  variant?: PanelVariant;
  /** Draws the section accent hairline along the top edge. */
  accented?: boolean;
  /** Adds hover/press affordances. Set only when the whole panel is clickable. */
  interactive?: boolean;
  /** Rendered element — `article` for content, `li` inside lists, and so on. */
  as?: ElementType;
  className?: string;
}

export function Panel({
  children,
  variant = 'default',
  accented = false,
  interactive = false,
  as: Element = 'div',
  className,
}: PanelProps): ReactNode {
  return (
    <Element
      className={cx(
        styles.panel,
        variant === 'quiet' && styles.quiet,
        variant === 'bare' && styles.bare,
        accented && styles.accented,
        interactive && styles.interactive,
        className,
      )}
    >
      {children}
    </Element>
  );
}
