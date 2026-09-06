import { useEffect, useState, type ReactNode } from 'react';
import { UNIVERSE_AGE_YEARS } from '@/content/schema/cosmicTime';
import { TIMELINE_EVENTS } from '@/content/timeline';
import styles from './CosmicOpening.module.css';

/**
 * The way in.
 *
 * A held, quiet opening rather than a landing page: three lines that arrive in
 * sequence, then a single control. Its job is to set the scale of what the
 * reader is about to travel through before any interface appears — the museum
 * entrance hall, not the exhibit.
 *
 * Under reduced motion the whole sequence resolves immediately: the reader gets
 * the same words with no staging, and no time is wasted waiting for an
 * animation that has been switched off.
 */

interface Props {
  onBegin(): void;
  onJumpToPresent(): void;
  reducedMotion: boolean;
}

const LINE_DELAYS = [200, 1500, 3000, 4200];

export function CosmicOpening({ onBegin, onJumpToPresent, reducedMotion }: Props): ReactNode {
  // How many of the staged lines have appeared.
  const [revealed, setRevealed] = useState(reducedMotion ? LINE_DELAYS.length : 0);

  useEffect(() => {
    if (reducedMotion) {
      setRevealed(LINE_DELAYS.length);
      return;
    }
    const timers = LINE_DELAYS.map((delay, index) =>
      window.setTimeout(() => setRevealed((count) => Math.max(count, index + 1)), delay),
    );
    return () => timers.forEach(window.clearTimeout);
  }, [reducedMotion]);

  const milestoneCount = TIMELINE_EVENTS.length;

  return (
    <section className={styles.opening}>
      <div className={styles.inner}>
        <p className={styles.eyebrow} data-shown={revealed >= 1}>
          The Cosmic Timeline
        </p>

        <h1 className={styles.headline} data-shown={revealed >= 2}>
          {(UNIVERSE_AGE_YEARS / 1e9).toFixed(1)} billion years ago, everything we can observe was
          in an extremely hot, dense state.
        </h1>

        <p className={styles.lede} data-shown={revealed >= 3}>
          It has been expanding and cooling ever since. What follows is that history in{' '}
          {milestoneCount} milestones — from the earliest moment physics can describe to the world
          outside your window. Every date was measured. Every claim is labelled with how firmly it
          is known.
        </p>

        <div className={styles.actions} data-shown={revealed >= 4}>
          <button type="button" className={styles.primary} onClick={onBegin}>
            Begin at the beginning
          </button>
          <button type="button" className={styles.secondary} onClick={onJumpToPresent}>
            Skip to the present
          </button>
        </div>

        <p className={styles.note} data-shown={revealed >= 4}>
          The Big Bang was not an explosion in empty space. There was no surrounding space to
          explode into — space itself was dense everywhere, and then began to stretch.
        </p>
      </div>

      {/* Skipping the staging is one tap for anyone who does not want to wait. */}
      {revealed < LINE_DELAYS.length && (
        <button
          type="button"
          className={styles.skip}
          onClick={() => setRevealed(LINE_DELAYS.length)}
        >
          Show all
        </button>
      )}
    </section>
  );
}
