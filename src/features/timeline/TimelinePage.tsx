import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useReaderPreferences } from '@/app/providers/useReaderPreferences';
import { DepthControl } from '@/app/layout/DepthControl';
import { getEra } from '@/content/timeline';
import { formatYearsAgo, yearsBeforePresent } from '@/content/schema/cosmicTime';
import { CosmicOpening } from './CosmicOpening';
import { MilestonePanel } from './MilestonePanel';
import { TimelineAxis } from './TimelineAxis';
import { TrueScaleBar } from './TrueScaleBar';
import { useTimelineJourney } from './useTimelineJourney';
import { secondsAtPosition } from './axis';
import styles from './TimelinePage.module.css';

/**
 * The Cosmic Timeline.
 *
 * Assembles the opening, the travelling axis, the true-scale corrective and the
 * milestone reader. It holds no scientific content of its own — every word on
 * screen comes from the content layer — and no layout knowledge about specific
 * milestones, so adding one changes nothing here.
 *
 * The URL carries the current milestone (`/cosmic-timeline/:eventSlug`) so a
 * reader can share or bookmark exactly where they are.
 */
export default function TimelinePage(): ReactNode {
  const { eventSlug } = useParams();
  const navigate = useNavigate();
  const { depth, quality, reducedMotion } = useReaderPreferences();

  const journey = useTimelineJourney(eventSlug, reducedMotion);
  const { current, position, index, events, goToIndex, goToSlug, scrubTo } = journey;

  // The opening is shown only when the reader arrives without a milestone in
  // the URL — a shared link goes straight to its milestone.
  const [started, setStarted] = useState(() => Boolean(eventSlug));

  // Keep the URL in step with the journey, without stacking history entries:
  // travelling through 37 milestones should not require 37 taps of Back.
  useEffect(() => {
    if (!started) return;
    if (current.slug !== eventSlug) {
      navigate(`/cosmic-timeline/${current.slug}`, { replace: true });
    }
  }, [started, current.slug, eventSlug, navigate]);

  // A milestone opened from elsewhere (a link, the back button) moves the axis.
  useEffect(() => {
    if (eventSlug && eventSlug !== current.slug) goToSlug(eventSlug, false);
    // Only react to URL changes; journey changes are handled by the effect above.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventSlug]);

  const begin = useCallback(() => {
    setStarted(true);
    goToIndex(0, false);
  }, [goToIndex]);

  const skipToPresent = useCallback(() => {
    setStarted(true);
    goToIndex(events.length - 1, false);
  }, [goToIndex, events.length]);

  // Arrow keys work anywhere on the page, not only inside the axis widget.
  useEffect(() => {
    if (!started) return;
    const onKeyDown = (event: KeyboardEvent): void => {
      const target = event.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
      if (target?.getAttribute('role') === 'slider') return; // the axis handles its own
      if (event.key === 'ArrowRight') journey.next();
      else if (event.key === 'ArrowLeft') journey.previous();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [started, journey]);

  if (!started) {
    return (
      <div className="ds-container">
        <CosmicOpening
          onBegin={begin}
          onJumpToPresent={skipToPresent}
          reducedMotion={reducedMotion}
        />
      </div>
    );
  }

  const era = getEra(current.eraId);
  const yearsAgo = yearsBeforePresent({
    seconds: secondsAtPosition(position),
    logSeconds: 0,
    precision: 'modelled',
  });
  const progress = ((index + 1) / events.length) * 100;

  return (
    <div className={styles.page} data-accent={era?.accent}>
      {/* ---- Travel bar: the persistent control surface ------------------ */}
      <div className={styles.travelBar}>
        <div className="ds-container">
          <div className={styles.clock}>
            <div className={styles.clockMain}>
              <span className={styles.clockValue}>{formatYearsAgo(Math.max(0, yearsAgo))}</span>
              <span className={styles.clockEra}>{era?.title ?? ''}</span>
            </div>
            <span className={styles.counter}>
              {index + 1} / {events.length}
            </span>
          </div>
          <div
            className={styles.progress}
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={events.length}
            aria-valuenow={index + 1}
            aria-label="Progress through the timeline"
          >
            <div className={styles.progressFill} style={{ inlineSize: `${progress}%` }} />
          </div>
        </div>
      </div>

      <TimelineAxis
        position={position}
        events={events}
        selectedIndex={index}
        quality={quality}
        reducedMotion={reducedMotion}
        onScrub={scrubTo}
        onSelect={(next) => goToIndex(next)}
      />

      {/* ---- Controls ---------------------------------------------------- */}
      <div className="ds-container">
        <nav className={styles.controls} aria-label="Timeline navigation">
          <button
            type="button"
            className={styles.navButton}
            onClick={journey.previous}
            disabled={!journey.hasPrevious}
          >
            <span aria-hidden="true">←</span> Earlier
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={journey.next}
            disabled={!journey.hasNext}
          >
            Later <span aria-hidden="true">→</span>
          </button>
          <button type="button" className={styles.jumpButton} onClick={journey.jumpToBeginning}>
            Beginning
          </button>
          <button type="button" className={styles.jumpButton} onClick={journey.jumpToPresent}>
            Jump to present
          </button>
        </nav>

        <TrueScaleBar position={position} />

        <MilestonePanel event={current} depth={depth} onSelectEvent={(slug) => goToSlug(slug)} />

        {/* ---- Footer controls -------------------------------------------- */}
        <div className={styles.pageFooter}>
          <DepthControl />
          <nav className={styles.exit} aria-label="Leave the timeline">
            <Link to="/">All sections</Link>
            <Link to="/method">How accuracy is handled</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
