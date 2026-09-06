import { useCallback, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './BackLink.module.css';

export interface BackLinkProps {
  /** Where to go when there is no history to go back to. */
  fallbackTo: string;
  /** What that fallback is, for the label: "Back to Universe & Cosmology". */
  label: string;
}

/**
 * Back navigation that is real.
 *
 * A back control that always pushes a hard-coded route is a lie: it looks like
 * Back and behaves like a link, so it strands a reader who arrived from
 * somewhere unexpected and leaves the forward button broken. This one uses the
 * history stack when there is one, and falls back to a route only when there is
 * not.
 *
 * `location.key` is React Router's marker for a location it created. On the
 * very first entry of a session it is the literal string `'default'`, which is
 * exactly the case where `navigate(-1)` would take the reader out of the app —
 * to whatever page they were on before, or to a blank tab. That is the one case
 * the fallback exists for.
 *
 * It renders as a `<button>` rather than an `<a>` because it performs a history
 * action rather than pointing at a location; the label always names the
 * destination, so its purpose is clear read out of context.
 */
export function BackLink({ fallbackTo, label }: BackLinkProps): ReactNode {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = useCallback(() => {
    if (location.key !== 'default') navigate(-1);
    else navigate(fallbackTo);
  }, [navigate, location.key, fallbackTo]);

  return (
    <button type="button" className={styles.back} onClick={goBack}>
      <svg className={styles.chevron} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path
          d="M10 3 L5 8 L10 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
