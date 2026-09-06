import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSectionBySlug } from '@/content/sections';
import { getTopicsForSection } from '@/content/topics';
import { BackLink } from '@/design-system/components/BackLink';
import { PhaseNotice } from '@/design-system/components/PhaseNotice';
import { useReaderPreferences } from '@/app/providers/useReaderPreferences';
import { resolveDepthText } from '@/content/schema/depth';
import { DepthControl } from '@/app/layout/DepthControl';
import NotFoundPage from '@/features/errors/NotFoundPage';
import styles from './SectionPage.module.css';

/**
 * One page that renders any of the fourteen sections.
 *
 * There is no per-section page component and there will not be one: sections
 * differ in content and accent, not in structure. A section with topics lists
 * them; a section without shows what it will contain and when.
 */
export default function SectionPage(): ReactNode {
  const { sectionSlug } = useParams();
  const { depth } = useReaderPreferences();
  const section = sectionSlug ? getSectionBySlug(sectionSlug) : undefined;

  if (!section) return <NotFoundPage />;

  const topics = getTopicsForSection(section.id).filter((topic) => topic.status === 'published');

  return (
    <div className="ds-container" data-accent={section.accent}>
      <nav className={styles.backRow} aria-label="Breadcrumb">
        <BackLink fallbackTo="/" label="Back to all sections" />
      </nav>

      <header className={styles.header}>
        <span className={styles.index}>Section {String(section.order).padStart(2, '0')}</span>
        <h1 className={`ds-title ${styles.title}`}>{section.title}</h1>
        <p className={styles.tagline}>{section.tagline}</p>
        <p className={`ds-lede ${styles.overview}`}>{section.overview}</p>
      </header>

      <div className={styles.body}>
        {topics.length > 0 ? (
          <>
            <p className={styles.count}>
              {topics.length} topics, in reading order. Each one states its evidence level and cites
              its sources.
            </p>
            {/*
              A numbered list, because the order genuinely carries information:
              this section is a journey from what the model claims through to
              what is still unknown, and reading it in sequence is the point.
            */}
            <ol className={styles.topicList}>
              {topics.map((topic, index) => (
                <li key={topic.id}>
                  <Link to={`/${section.slug}/${topic.slug}`} className={styles.topicLink}>
                    <span className={styles.topicIndex}>{String(index + 1).padStart(2, '0')}</span>
                    <span className={styles.topicTitle}>{topic.title}</span>
                    {topic.subtitle && (
                      <span className={styles.topicSubtitle}>{topic.subtitle}</span>
                    )}
                    <span className={styles.topicSummary}>
                      {resolveDepthText(topic.summary, depth)}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
            <div className={styles.depth}>
              <DepthControl />
            </div>
          </>
        ) : (
          <PhaseNotice
            status={section.status}
            phase={section.phase}
            // Not the overview — that is already above. This says what is
            // missing, which is a different thing from what the section is.
            description={`The topics, figures and sources for ${section.title} have not been written yet. Nothing is being hidden behind a loading state — there is simply no content here to read.`}
          />
        )}
      </div>
    </div>
  );
}
