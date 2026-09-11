import { useId, useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSectionBySlug } from '@/content/sections';
import { getTopicsForLens, getTopicsForSection } from '@/content/topics';
import { DEFAULT_LENS, LENS_META, type LensId } from '@/content/schema/lens';
import type { Section } from '@/content/schema/section';
import type { ContentStatus, Topic } from '@/content/schema/topic';
import { BackLink } from '@/design-system/components/BackLink';
import { PhaseNotice } from '@/design-system/components/PhaseNotice';
import { useReaderPreferences } from '@/app/providers/useReaderPreferences';
import { resolveDepthText } from '@/content/schema/depth';
import { DepthControl } from '@/app/layout/DepthControl';
import NotFoundPage from '@/features/errors/NotFoundPage';
import { LensSelector } from './LensSelector';
import styles from './SectionPage.module.css';

/**
 * One page that renders any of the fourteen sections.
 *
 * There is no per-section page component and there will not be one: sections
 * differ in content and accent, not in structure. A section with topics lists
 * them; a section without shows what it will contain and when.
 *
 * A section may also declare lenses, in which case the reader picks which body
 * of thought they are reading and the page lists that lens's topics. That is
 * the only branch here: everything below it is the same list and the same
 * notice either way.
 */
export default function SectionPage(): ReactNode {
  const { sectionSlug } = useParams();
  const section = sectionSlug ? getSectionBySlug(sectionSlug) : undefined;

  if (!section) return <NotFoundPage />;

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
        {section.lenses && section.lenses.length > 0 ? (
          <LensedBody section={section} lenses={section.lenses} />
        ) : (
          <SectionBody section={section} topics={publishedTopicsOf(section)} />
        )}
      </div>
    </div>
  );
}

function publishedTopicsOf(section: Section): readonly Topic[] {
  return getTopicsForSection(section.id).filter((topic) => topic.status === 'published');
}

/**
 * The two-lens reading of a section.
 *
 * The lens is local component state rather than a URL parameter. The platform
 * has no query-string convention to join — every route is a path — and putting
 * the lens in the path or the search string would push history entries, which
 * would change what the Back control does on every other page too. Topics keep
 * their own stable `/section/topic` URLs whichever lens lists them, so nothing
 * that a reader can link to depends on this state.
 */
function LensedBody({
  section,
  lenses,
}: {
  section: Section;
  lenses: readonly LensId[];
}): ReactNode {
  const [active, setActive] = useState<LensId>(() => lenses[0] ?? DEFAULT_LENS);
  const headingId = useId();
  const lens = LENS_META[active];
  const topics = getTopicsForLens(section.id, active).filter(
    (topic) => topic.status === 'published',
  );

  return (
    <>
      <LensSelector
        lenses={lenses}
        value={active}
        onChange={setActive}
        name={`${section.slug}-lens`}
      />

      <section className={styles.lensPanel} aria-labelledby={headingId}>
        <h2 id={headingId} className={styles.lensQuestion}>
          {lens.question}
        </h2>
        <p className={styles.lensDescription}>{lens.description}</p>
        <SectionBody
          section={section}
          topics={topics}
          lensLabel={lens.label}
          // The section as a whole is published once either lens has content,
          // so an unwritten lens has to report its own status rather than
          // inheriting one that would describe it as finished.
          status={lens.status}
        />
      </section>
    </>
  );
}

/** The topic list, or an honest statement that there is not one yet. */
function SectionBody({
  section,
  topics,
  lensLabel,
  status,
}: {
  section: Section;
  topics: readonly Topic[];
  lensLabel?: string;
  status?: ContentStatus;
}): ReactNode {
  const { depth } = useReaderPreferences();
  const subject = lensLabel ? `the ${lensLabel} of ${section.title}` : section.title;

  if (topics.length === 0) {
    return (
      <PhaseNotice
        status={status ?? section.status}
        phase={section.phase}
        // Not the overview — that is already above. This says what is
        // missing, which is a different thing from what the section is.
        description={`The topics, figures and sources for ${subject} have not been written yet. Nothing is being hidden behind a loading state — there is simply no content here to read.`}
      />
    );
  }

  return (
    <>
      <p className={styles.count}>
        {topics.length} topics, in reading order. Each one states its evidence level and cites its
        sources.
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
              {topic.subtitle && <span className={styles.topicSubtitle}>{topic.subtitle}</span>}
              <span className={styles.topicSummary}>{resolveDepthText(topic.summary, depth)}</span>
            </Link>
          </li>
        ))}
      </ol>
      <div className={styles.depth}>
        <DepthControl />
      </div>
    </>
  );
}
