import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { orderedSections } from '@/content/sections';
import { DepthControl } from './DepthControl';
import styles from './TopBar.module.css';

/**
 * Navigation.
 *
 * A single sheet rather than a persistent sidebar: on a phone a sidebar costs
 * a third of the screen, and this platform's content is the point. The sheet is
 * a two-column list on large screens so desktop is not penalised for the
 * mobile-first decision.
 */
export function TopBar(): ReactNode {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Navigating always dismisses the sheet.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes; focus moves into the sheet on open and back out on close, so
  // keyboard and screen-reader users are not stranded behind it.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    closeButtonRef.current?.focus();

    // Stop the page behind the sheet from scrolling with it.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const sections = orderedSections();

  return (
    <>
      <header className={styles.bar}>
        <div className={`ds-container ${styles.inner}`}>
          <Link to="/" className={styles.brand}>
            Cosmos Atlas
            <span className={styles.brandMark}>Beginning → Now</span>
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-haspopup="dialog"
            onClick={() => setOpen(true)}
          >
            Explore
          </button>
        </div>
      </header>

      {open && (
        <div className={styles.sheet} role="dialog" aria-modal="true" aria-label="Sections">
          <div className={`ds-container ${styles.sheetHeader}`}>
            <span className="ds-eyebrow">Sections</span>
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.menuButton}
              onClick={close}
            >
              Close
            </button>
          </div>

          <div className={`ds-container ${styles.sheetBody}`}>
            <ul className={styles.sectionList}>
              {sections.map((section) => (
                <li key={section.id} data-accent={section.accent}>
                  <NavLink to={`/${section.slug}`} className={styles.sectionLink}>
                    <span className={styles.sectionIndex}>
                      {String(section.order).padStart(2, '0')}
                    </span>
                    <span className={styles.sectionTitle}>{section.title}</span>
                    <span className={styles.sectionTagline}>{section.tagline}</span>
                    {section.status === 'planned' && (
                      <span className={styles.sectionStatus}>
                        Not built yet · Phase {section.phase}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className={styles.controls}>
              <DepthControl />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
