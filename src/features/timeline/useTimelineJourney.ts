import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TIMELINE_EVENTS } from '@/content/timeline';
import type { TimelineEvent } from '@/content/schema/timeline';
import { positionOf, secondsAtPosition } from './axis';

/**
 * Journey state: where the reader is on the axis, and which milestone that is.
 *
 * Position is continuous (0–1) rather than an index, because the reader can
 * drag to anywhere between milestones and the era indicator, the true-scale bar
 * and the cosmic clock all have to update smoothly as they do. The selected
 * milestone is derived from the position by nearest-neighbour, so dragging and
 * tapping cannot disagree with each other.
 */

export interface TimelineJourney {
  /** Continuous position on the warped axis, 0–1. */
  readonly position: number;
  /** Seconds since the beginning at the current position. */
  readonly seconds: number;
  readonly events: readonly TimelineEvent[];
  readonly positions: readonly number[];
  /** Index of the milestone nearest the current position. */
  readonly index: number;
  readonly current: TimelineEvent;
  readonly hasPrevious: boolean;
  readonly hasNext: boolean;
  /** True while an animated travel is running. */
  readonly travelling: boolean;

  goToIndex(index: number, animate?: boolean): void;
  goToSlug(slug: string, animate?: boolean): void;
  next(): void;
  previous(): void;
  jumpToPresent(): void;
  jumpToBeginning(): void;
  /** Drag/scrub: sets position directly, without animation. */
  scrubTo(position: number): void;
}

/** Seconds a travel animation takes, scaled by how far it goes. */
function travelDuration(distance: number): number {
  return Math.min(1.6, 0.42 + distance * 1.5);
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

export function useTimelineJourney(
  initialSlug: string | undefined,
  reducedMotion: boolean,
): TimelineJourney {
  const events = TIMELINE_EVENTS;
  const positions = useMemo(() => events.map((event) => positionOf(event.time)), [events]);

  const initialIndex = useMemo(() => {
    if (!initialSlug) return 0;
    const found = events.findIndex((event) => event.slug === initialSlug);
    return found >= 0 ? found : 0;
  }, [events, initialSlug]);

  const [position, setPosition] = useState(() => positions[initialIndex] ?? 0);
  const [travelling, setTravelling] = useState(false);
  const animationRef = useRef<number | null>(null);

  const cancelAnimation = useCallback(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  useEffect(() => cancelAnimation, [cancelAnimation]);

  const animateTo = useCallback(
    (target: number) => {
      cancelAnimation();
      const from = position;
      const distance = Math.abs(target - from);

      if (reducedMotion || distance < 0.0005) {
        setPosition(target);
        setTravelling(false);
        return;
      }

      const duration = travelDuration(distance) * 1000;
      const start = performance.now();
      setTravelling(true);

      const step = (now: number): void => {
        const t = Math.min(1, (now - start) / duration);
        setPosition(from + (target - from) * easeInOutCubic(t));
        if (t < 1) {
          animationRef.current = requestAnimationFrame(step);
        } else {
          animationRef.current = null;
          setTravelling(false);
        }
      };
      animationRef.current = requestAnimationFrame(step);
    },
    [position, reducedMotion, cancelAnimation],
  );

  // Nearest milestone to the current position.
  const index = useMemo(() => {
    let best = 0;
    let bestDistance = Infinity;
    for (let i = 0; i < positions.length; i += 1) {
      const distance = Math.abs(positions[i]! - position);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    }
    return best;
  }, [positions, position]);

  const goToIndex = useCallback(
    (target: number, animate = true) => {
      const clamped = Math.min(events.length - 1, Math.max(0, target));
      const targetPosition = positions[clamped];
      if (targetPosition === undefined) return;
      if (animate) animateTo(targetPosition);
      else {
        cancelAnimation();
        setPosition(targetPosition);
      }
    },
    [events.length, positions, animateTo, cancelAnimation],
  );

  const goToSlug = useCallback(
    (slug: string, animate = true) => {
      const found = events.findIndex((event) => event.slug === slug);
      if (found >= 0) goToIndex(found, animate);
    },
    [events, goToIndex],
  );

  const scrubTo = useCallback(
    (next: number) => {
      cancelAnimation();
      setTravelling(false);
      setPosition(Math.min(1, Math.max(0, next)));
    },
    [cancelAnimation],
  );

  return {
    position,
    seconds: secondsAtPosition(position),
    events,
    positions,
    index,
    current: events[index]!,
    hasPrevious: index > 0,
    hasNext: index < events.length - 1,
    travelling,
    goToIndex,
    goToSlug,
    next: () => goToIndex(index + 1),
    previous: () => goToIndex(index - 1),
    jumpToPresent: () => goToIndex(events.length - 1),
    jumpToBeginning: () => goToIndex(0),
    scrubTo,
  };
}
