import { useState, type ReactNode } from 'react';
import { UNIVERSE_AGE_YEARS } from '@/content/schema/cosmicTime';
import { trueScaleFraction } from './axis';
import styles from './TrueScaleBar.module.css';

/**
 * The corrective.
 *
 * The main axis is deliberately warped so that a reader can reach the last
 * 300,000 years at all. This bar shows the same journey on a genuinely linear
 * 13.8-billion-year scale, so the compression is visible instead of hidden —
 * and so the reader can see, directly, that everything from the first animals
 * onwards occupies the last 4% of cosmic time and all of recorded history is
 * narrower than the line drawn to mark it.
 *
 * Without this bar the timeline would be quietly lying about scale. With it,
 * the warping becomes part of the lesson.
 */

interface Props {
  position: number;
}

/** Reference points, in years before present, for the linear bar. */
const LANDMARKS: ReadonlyArray<{ label: string; yearsAgo: number }> = [
  { label: 'Solar System', yearsAgo: 4.568e9 },
  { label: 'Oxygen', yearsAgo: 2.4e9 },
  { label: 'Animals', yearsAgo: 5.75e8 },
  { label: 'Us', yearsAgo: 3e5 },
];

export function TrueScaleBar({ position }: Props): ReactNode {
  const [explained, setExplained] = useState(false);
  const fraction = trueScaleFraction(position);
  const percent = fraction * 100;

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={styles.label}>True linear scale</span>
        <button
          type="button"
          className={styles.explainToggle}
          aria-expanded={explained}
          onClick={() => setExplained((open) => !open)}
        >
          {explained ? 'Hide' : 'Why is the timeline above not linear?'}
        </button>
      </div>

      <div
        className={styles.track}
        role="img"
        aria-label={`On a true linear scale, you are ${percent.toFixed(percent < 1 ? 3 : 1)}% of the way through the 13.8 billion years since the beginning.`}
      >
        <div className={styles.fill} style={{ inlineSize: `${percent}%` }} />
        <div className={styles.playhead} style={{ insetInlineStart: `${percent}%` }} />
        {LANDMARKS.map((landmark) => {
          const at = ((UNIVERSE_AGE_YEARS - landmark.yearsAgo) / UNIVERSE_AGE_YEARS) * 100;
          return (
            <div
              key={landmark.label}
              className={styles.landmark}
              style={{ insetInlineStart: `${at}%` }}
            />
          );
        })}
      </div>

      {/*
        The landmark names are listed rather than positioned on the bar. Three
        of the four fall in the last third and their labels collided into an
        unreadable smear — and the percentages make the point better anyway.
      */}
      <ul className={styles.legend}>
        {LANDMARKS.map((landmark) => {
          const at = ((UNIVERSE_AGE_YEARS - landmark.yearsAgo) / UNIVERSE_AGE_YEARS) * 100;
          return (
            <li key={landmark.label}>
              <span className={styles.legendTick} aria-hidden="true" />
              {landmark.label}
              <span className="ds-numeric">{at >= 99.99 ? '~100' : at.toFixed(1)}%</span>
            </li>
          );
        })}
      </ul>

      <p className={styles.readout}>
        You are at <span className="ds-numeric">{percent.toFixed(percent < 1 ? 4 : 2)}%</span> of
        cosmic time
      </p>

      {explained && (
        <div className={styles.explanation}>
          <p>
            Because a linear timeline is unreadable. On the bar above — which is linear — the entire
            history of our species is about two thousandths of one percent of the width. Every
            hominin species, every civilisation, every person who has ever lived fits inside a line
            thinner than the one marking it.
          </p>
          <p>
            So the main timeline is deliberately <strong>compressed</strong>: early moments and
            recent ones are each given enough room to be readable, which means the visual distance
            between two milestones is <em>not</em> proportional to the time between them. This bar
            exists so you can always see the real proportions, and every milestone states its actual
            date in words.
          </p>
        </div>
      )}
    </div>
  );
}
