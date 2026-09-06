import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { TimelineEvent } from '@/content/schema/timeline';
import { resolveDepthText, type DepthLevel } from '@/content/schema/depth';
import { getSectionById } from '@/content/sections';
import { getGlossaryTerm } from '@/content/glossary';
import { getTimelineEvent, getEra } from '@/content/timeline';
import { EvidenceBadge } from '@/design-system/components/EvidenceBadge';
import { EVIDENCE_LEVEL_META } from '@/content/schema/evidence';
import { VisualizationFrame } from '@/visualization/core/VisualizationFrame';
import { ReferenceList } from '@/features/topic/ReferenceList';
import styles from './MilestonePanel.module.css';

/**
 * A milestone, read in full.
 *
 * The order of the sections is the argument: what happened, why it matters, how
 * we know, and what is still unknown — with the evidence level stated before any
 * of it. A reader should never reach the end of a milestone without knowing how
 * firmly the claim is held.
 *
 * "What we're still unsure about" is not an appendix. It sits inline, in the
 * same visual weight as the rest, because on this platform uncertainty is
 * content rather than a disclaimer.
 */

interface Props {
  event: TimelineEvent;
  depth: DepthLevel;
  onSelectEvent(slug: string): void;
}

export function MilestonePanel({ event, depth, onSelectEvent }: Props): ReactNode {
  const era = getEra(event.eraId);
  const section = event.sectionId ? getSectionById(event.sectionId) : undefined;
  const related = (event.relatedEvents ?? [])
    .map(getTimelineEvent)
    .filter((candidate): candidate is TimelineEvent => candidate !== undefined);
  const terms = (event.glossaryTerms ?? [])
    .map(getGlossaryTerm)
    .filter((term): term is NonNullable<typeof term> => term !== undefined);

  return (
    <article className={styles.panel} data-accent={era?.accent} aria-live="polite">
      <header className={styles.header}>
        <div className={styles.when}>
          <span className={styles.whenLabel}>{event.whenLabel}</span>
          {era && <span className={styles.era}>{era.title}</span>}
        </div>
        <h2 className={styles.title}>{event.title}</h2>
        <p className={styles.summary}>{resolveDepthText(event.summary, depth)}</p>
        <div className={styles.badges}>
          <EvidenceBadge level={event.evidence} />
          <span className={styles.badgeNote}>{EVIDENCE_LEVEL_META[event.evidence].definition}</span>
        </div>
        {event.whenRange && <p className={styles.range}>{event.whenRange}</p>}
      </header>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>What happened</h3>
        <p className={styles.prose}>{resolveDepthText(event.whatHappened, depth)}</p>
      </section>

      {event.visualizationId && (
        <section className={styles.figure}>
          <VisualizationFrame id={event.visualizationId} />
        </section>
      )}

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Why it matters</h3>
        <p className={styles.prose}>{resolveDepthText(event.whyItMatters, depth)}</p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>How we know</h3>
        <p className={styles.prose}>{resolveDepthText(event.evidenceBasis, depth)}</p>
      </section>

      {event.uncertainty && (
        <section className={`${styles.section} ${styles.uncertain}`}>
          <h3 className={styles.sectionTitle}>What we&apos;re still unsure about</h3>
          <p className={styles.prose}>{resolveDepthText(event.uncertainty, depth)}</p>
        </section>
      )}

      {terms.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Terms</h3>
          <dl className={styles.terms}>
            {terms.map((term) => (
              <div key={term.id} className={styles.term}>
                <dt>
                  {term.term}
                  {term.symbol && <span className="ds-mono"> · {term.symbol}</span>}
                </dt>
                <dd>{term.short}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Sources</h3>
        <ReferenceList ids={event.references} />
      </section>

      <footer className={styles.footer}>
        {related.length > 0 && (
          <div className={styles.relatedGroup}>
            <h3 className={styles.sectionTitle}>Connected milestones</h3>
            <ul className={styles.related}>
              {related.map((candidate) => (
                <li key={candidate.id}>
                  <button
                    type="button"
                    className={styles.relatedLink}
                    onClick={() => onSelectEvent(candidate.slug)}
                  >
                    {candidate.title}
                    <span className={styles.relatedWhen}>{candidate.whenLabel}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {section && (
          <Link className={styles.exploreLink} to={`/${section.slug}`}>
            Explore this era in {section.title}
            <span aria-hidden="true"> →</span>
          </Link>
        )}
      </footer>
    </article>
  );
}
