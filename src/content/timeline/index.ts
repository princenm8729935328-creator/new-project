/**
 * Cosmic timeline data.
 *
 * Empty until Phase 1. The eras and events that populate it are authored here
 * against the schema in `../schema/timeline.ts`, which is already fixed so that
 * content writing and timeline engineering can proceed independently.
 */
import type { TimelineEra, TimelineEvent } from '../schema/timeline';

export const TIMELINE_ERAS: readonly TimelineEra[] = [];

export const TIMELINE_EVENTS: readonly TimelineEvent[] = [];

export function eventsInEra(eraId: string): readonly TimelineEvent[] {
  return TIMELINE_EVENTS.filter((event) => event.eraId === eraId).sort(
    (a, b) => a.time.logSeconds - b.time.logSeconds,
  );
}
