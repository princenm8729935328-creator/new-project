import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSectionBySlug, getSectionById } from '@/content/sections';
import { getTopicBySlug, getTopicById } from '@/content/topics';
import { getRecap } from '@/content/recaps';
import { useReaderPreferences } from '@/app/providers/useReaderPreferences';
import { resolveDepthText } from '@/content/schema/depth';
import { Panel } from '@/design-system/components/Panel';
import { BackLink } from '@/design-system/components/BackLink';
import { DepthControl } from '@/app/layout/DepthControl';
import NotFoundPage from '@/features/errors/NotFoundPage';
import { BlockList } from './BlockRenderer';
import { ReferenceList } from './ReferenceList';
import { TopicRecapSection } from './TopicRecap';
import styles from './TopicPage.module.css';

/**
 * A single topic.
 *
 * The page is a thin renderer over the content model: it decides layout and
 * order, never wording. Related topics come from the curated `related` edges,
 * so the knowledge graph a reader traverses is the one an author intended.
 */
export default function TopicPage(): ReactNode {
  const { sectionSlug, topicSlug } = useParams();
  const { depth } = useReaderPreferences();

  const section = sectionSlug ? getSectionBySlug(sectionSlug) : undefined;
  const topic = section && topicSlug ? getTopicBySlug(section.id, topicSlug) : undefined;

  if (!section || !topic) return <NotFoundPage />;

  const recap = getRecap(topic.id);
  const related = (topic.related ?? [])
    .map(getTopicById)
    .filter((candidate): candidate is NonNullable<typeof candidate> => candidate !== undefined);

  return (
    <article className="ds-container" data-accent={section.accent}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <BackLink fallbackTo={`/${section.slug}`} label={`Back to ${section.title}`} />
      </nav>

      <header className={styles.header}>
        <h1 className="ds-title">{topic.title}</h1>
        {topic.subtitle && <p className={styles.subtitle}>{topic.subtitle}</p>}
        <p className="ds-lede">{resolveDepthText(topic.summary, depth)}</p>
        {topic.reviewedOn && (
          <p className="ds-caption">Last checked against sources on {topic.reviewedOn}.</p>
        )}
      </header>

      {/* Depth sits above the article, not in the footer: the reader should
          choose how deep they want to go before reading, not after. */}
      <div className={styles.depthRow}>
        <DepthControl />
      </div>

      <div className={styles.body}>
        <BlockList blocks={topic.blocks} depth={depth} />
      </div>

      {/* Synthesis, then a comprehension check. Placed after the article and
          before the citations and onward links: the reading is over, and what
          follows is consolidation rather than more material. */}
      {recap && <TopicRecapSection recap={recap} depth={depth} />}

      {topic.furtherReading && topic.furtherReading.length > 0 && (
        <section className={styles.further}>
          <h2 className="ds-heading">Further reading</h2>
          <ReferenceList ids={topic.furtherReading} label="Further reading" />
        </section>
      )}

      {related.length > 0 && (
        <section className={styles.related}>
          <h2 className="ds-heading">Connected ideas</h2>
          <ul className={styles.relatedList}>
            {related.map((candidate) => {
              const targetSection = getSectionById(candidate.sectionId);
              if (!targetSection) return null;
              return (
                <li key={candidate.id}>
                  <Panel as="article" interactive>
                    <Link to={`/${targetSection.slug}/${candidate.slug}`}>
                      <span className="ds-eyebrow">{targetSection.title}</span>
                      <p className="ds-subheading">{candidate.title}</p>
                    </Link>
                  </Panel>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </article>
  );
}
