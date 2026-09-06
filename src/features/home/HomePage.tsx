import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { orderedSections } from '@/content/sections';
import { Panel } from '@/design-system/components/Panel';
import styles from './HomePage.module.css';

/**
 * The entry point.
 *
 * Sections are read from the registry, so this page never falls out of step
 * with what actually exists — including the honest per-section status line.
 */
export default function HomePage(): ReactNode {
  const sections = orderedSections();
  const built = sections.filter((section) => section.status === 'published').length;

  return (
    <div className="ds-container">
      <section className={styles.hero}>
        <span className={`ds-eyebrow ${styles.eyebrow}`}>An interactive science museum</span>
        <h1 className={`ds-display ${styles.title}`}>From the first moment to this one.</h1>
        <p className={`ds-lede ${styles.lede}`}>
          A continuous account of the Universe — its beginning, its structure, the laws that govern
          it, and the improbable chain that ends with something able to ask about it. Every
          statement is marked with how firmly it is known, and cited.
        </p>
        <div className={styles.heroMeta}>
          <Link to="/cosmic-timeline" className={styles.pill}>
            Start at the beginning
          </Link>
          <Link to="/method" className={styles.pill}>
            How accuracy is handled
          </Link>
        </div>
      </section>

      <h2 className={`ds-heading ${styles.sectionsHeading}`}>Sections</h2>
      <p className="ds-caption" style={{ marginBlockEnd: 'var(--space-5)' }}>
        {built} of {sections.length} published. The rest are scheduled, and say so — nothing here is
        a stub pretending to be finished.
      </p>

      <ul className={styles.grid}>
        {sections.map((section) => (
          <li key={section.id} data-accent={section.accent}>
            <Panel as="article" accented className={styles.card}>
              <span className={styles.cardIndex}>{String(section.order).padStart(2, '0')}</span>
              <h3 className={styles.cardTitle}>
                <Link to={`/${section.slug}`}>{section.title}</Link>
              </h3>
              <p className={styles.cardTagline}>{section.tagline}</p>
              <p className={styles.cardStatus}>
                {section.status === 'published'
                  ? 'Published'
                  : `Not built yet · Phase ${section.phase}`}
              </p>
            </Panel>
          </li>
        ))}
      </ul>
    </div>
  );
}
