/**
 * Cosmic timeline data.
 *
 * Milestones are authored per stretch of history under `events/` and assembled
 * here in chronological order. Adding a milestone means writing it in the right
 * file — nothing in the timeline UI enumerates events.
 */
import type { TimelineEra, TimelineEvent, TimelineEventId } from '../schema/timeline';
import { TIMELINE_ERAS } from './eras';
import { EARLY_UNIVERSE_EVENTS } from './events/earlyUniverse';
import { STARS_AND_EARTH_EVENTS } from './events/starsAndEarth';
import { LIFE_EVENTS } from './events/life';
import { HUMAN_EVENTS } from './events/humans';

export { TIMELINE_ERAS, getEra } from './eras';

/** Every milestone, oldest first. */
export const TIMELINE_EVENTS: readonly TimelineEvent[] = [
  ...EARLY_UNIVERSE_EVENTS,
  ...STARS_AND_EARTH_EVENTS,
  ...LIFE_EVENTS,
  ...HUMAN_EVENTS,
].sort((a, b) => a.time.seconds - b.time.seconds);

const BY_ID = new Map<TimelineEventId, TimelineEvent>(
  TIMELINE_EVENTS.map((event) => [event.id, event]),
);
const BY_SLUG = new Map(TIMELINE_EVENTS.map((event) => [event.slug, event]));

export function getTimelineEvent(id: TimelineEventId): TimelineEvent | undefined {
  return BY_ID.get(id);
}

export function getTimelineEventBySlug(slug: string): TimelineEvent | undefined {
  return BY_SLUG.get(slug);
}

export function eventsInEra(eraId: string): readonly TimelineEvent[] {
  return TIMELINE_EVENTS.filter((event) => event.eraId === eraId);
}

/** Eras in chronological order. */
export function orderedEras(): readonly TimelineEra[] {
  return [...TIMELINE_ERAS].sort((a, b) => a.order - b.order);
}
