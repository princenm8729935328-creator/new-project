import { Suspense, lazy, useMemo, useRef, type ReactNode } from 'react';
import type { VisualizationId } from '@/content/schema/visualization';
import { FIDELITY_META } from '@/content/schema/visualization';
import { formatReference, referenceHref } from '@/content/schema/reference';
import { getReference } from '@/content/references';
import { getVisualization } from '@/visualization/registry';
import { useReaderPreferences } from '@/app/providers/useReaderPreferences';
import { cx } from '@/lib/cx';
import { QUALITY_BUDGETS, meetsQuality } from './quality';
import { useElementSize } from './useElementSize';
import { useDocumentVisible, useInViewport } from './useInViewport';
import styles from './VisualizationFrame.module.css';

export interface VisualizationFrameProps {
  id: VisualizationId;
  /** Overrides the spec's caption for this particular placement. */
  caption?: string;
}

/**
 * The only way a visualization reaches the screen.
 *
 * Everything the platform promises about figures is enforced here rather than
 * left to each renderer:
 *
 *  - the fidelity badge and caption are always drawn, so an artistic impression
 *    can never be mistaken for an observation;
 *  - the renderer is code-split and only fetched when the figure nears the
 *    viewport;
 *  - animation is gated on visibility, tab focus and the device's quality tier,
 *    and a device below the figure's minimum sees the text description instead;
 *  - a screen reader gets the description whether or not the canvas renders.
 */
export function VisualizationFrame({ id, caption }: VisualizationFrameProps): ReactNode {
  const stageRef = useRef<HTMLDivElement>(null);
  const { quality, reducedMotion } = useReaderPreferences();
  const inViewport = useInViewport(stageRef);
  const documentVisible = useDocumentVisible();
  const size = useElementSize(stageRef);

  const registered = getVisualization(id);

  // `lazy` must not be re-created on every render, or React remounts the scene.
  const Renderer = useMemo(() => (registered ? lazy(registered.load) : null), [registered]);

  if (!registered || !Renderer) {
    // A spec without a renderer is a content bug, caught by the registry test.
    // In the browser it degrades to nothing rather than to a broken frame.
    return null;
  }

  const { spec } = registered;
  const fidelity = FIDELITY_META[spec.fidelity];
  const budget = QUALITY_BUDGETS[quality];
  const runnable = meetsQuality(quality, spec.minimumQuality ?? 'low');
  const active = runnable && inViewport && documentVisible && size.width > 0;

  return (
    <figure className={styles.figure}>
      <div className={styles.header}>
        <h3 className={styles.title}>{spec.title}</h3>
        <span
          className={cx(styles.fidelity, spec.fidelity === 'artistic' && styles.artistic)}
          title={fidelity.definition}
        >
          {fidelity.label}
        </span>
      </div>

      <div
        ref={stageRef}
        className={styles.stage}
        role="img"
        aria-label={spec.description}
        data-runnable={runnable}
      >
        {runnable ? (
          <Suspense fallback={<p className={styles.fallback}>{spec.description}</p>}>
            <Renderer
              quality={quality}
              active={active}
              reducedMotion={reducedMotion}
              width={size.width}
              height={size.height}
            />
          </Suspense>
        ) : (
          <p className={styles.fallback}>{spec.description}</p>
        )}
      </div>

      <figcaption className={styles.caption}>
        {caption ?? spec.caption}
        {!runnable &&
          ' This figure is shown as text because it needs more graphics performance than this device reports.'}
        {reducedMotion &&
          runnable &&
          !budget.ambientMotion &&
          ' Animation is paused because you have asked for reduced motion.'}
      </figcaption>

      {spec.references && spec.references.length > 0 && (
        <p className={styles.sources}>
          Data:{' '}
          {spec.references.map((referenceId, index) => {
            const reference = getReference(referenceId);
            if (!reference) return null;
            const href = referenceHref(reference);
            return (
              <span key={referenceId}>
                {index > 0 && '; '}
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer noopener">
                    {formatReference(reference)}
                  </a>
                ) : (
                  formatReference(reference)
                )}
              </span>
            );
          })}
        </p>
      )}
    </figure>
  );
}
