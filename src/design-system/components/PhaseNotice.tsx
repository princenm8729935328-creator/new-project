import type { ReactNode } from 'react';
import type { ContentStatus } from '@/content/schema/topic';
import styles from './PhaseNotice.module.css';

const STATUS_LABEL: Record<ContentStatus, string> = {
  planned: 'Not built yet',
  draft: 'Draft — not reviewed',
  'in-review': 'In scientific review',
  published: 'Published',
};

export interface PhaseNoticeProps {
  status: ContentStatus;
  /** Roadmap phase that delivers this content. */
  phase: number;
  /** What will be here, in the reader's terms. */
  description: string;
}

/**
 * States plainly that something has not been built.
 *
 * This exists so the platform never has to fake completeness. An unbuilt
 * section shows this notice — not an empty grid, not a disabled button, not a
 * loading spinner that never resolves. It is the UI counterpart of the
 * project's rule against presenting placeholders as finished features.
 */
export function PhaseNotice({ status, phase, description }: PhaseNoticeProps): ReactNode {
  return (
    <div className={styles.notice}>
      <span className={styles.label}>{STATUS_LABEL[status]}</span>
      <p className={styles.body}>{description}</p>
      <p className={styles.meta}>
        Scheduled for Phase {phase} of the build. See PROJECT_PLAN.md for the full roadmap.
      </p>
    </div>
  );
}
