/**
 * Timeline events (Phase 1 consumes these; the schema is fixed now so content
 * authoring can start in parallel with the timeline's implementation).
 */
import type { CosmicTime } from './cosmicTime';
import type { DepthText } from './depth';
import type { EvidenceLevel } from './evidence';
import type { ReferenceId } from './reference';
import type { SectionId } from './section';
import type { TopicId } from './topic';
import type { VisualizationId } from './visualization';

export type TimelineEventId = string & { readonly __brand: 'TimelineEventId' };

export function timelineEventId(id: string): TimelineEventId {
  return id as TimelineEventId;
}

/**
 * Named intervals of cosmic history (the Planck epoch, recombination, the dark
 * ages…). Eras give the timeline its bands; events are the pins inside them.
 */
export interface TimelineEra {
  readonly id: string;
  readonly title: string;
  readonly from: CosmicTime;
  readonly to: CosmicTime;
  readonly summary: DepthText;
  readonly accent: string;
}

export interface TimelineEvent {
  readonly id: TimelineEventId;
  readonly slug: string;
  readonly title: string;
  readonly time: CosmicTime;
  readonly eraId: string;
  readonly summary: DepthText;
  readonly evidence: EvidenceLevel;
  readonly references: readonly ReferenceId[];
  /** The topic a reader lands on when they open this event. */
  readonly topicId?: TopicId;
  readonly sectionId?: SectionId;
  readonly visualizationId?: VisualizationId;
  /**
   * Relative prominence, 0–1. The timeline shows only the most prominent
   * events when zoomed out, so a phone never renders hundreds of labels.
   */
  readonly prominence: number;
}
