import { useEffect, type ReactNode } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { StarfieldBackground } from '@/design-system/atmosphere/StarfieldBackground';
import { TopBar } from './TopBar';
import styles from './AppShell.module.css';

/**
 * The persistent frame: atmosphere, navigation, content slot, footer.
 *
 * It never unmounts between routes, so the background does not restart and the
 * navigation does not re-animate on every page change — the difference between
 * a site that feels like one place and one that feels like a stack of pages.
 */
export function AppShell(): ReactNode {
  const { pathname } = useLocation();

  // Browsers restore scroll position on history navigation but not on a fresh
  // push, and a reader arriving at a new section should start at its top.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div className={styles.shell}>
      <a className="ds-skip-link" href="#main">
        Skip to content
      </a>

      <div className={styles.atmosphere} aria-hidden="true">
        <StarfieldBackground />
      </div>

      <TopBar />

      <main id="main" className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={`ds-container ${styles.footerInner}`}>
          <p>
            An educational project. Every scientific statement is labelled with its evidence level
            and cited — see <Link to="/method">how this platform handles accuracy</Link>.
          </p>
          <p>Under active construction. Sections marked as planned are not built yet.</p>
        </div>
      </footer>
    </div>
  );
}
