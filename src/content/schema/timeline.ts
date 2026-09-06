/**
 * Cosmic timeline: eras and milestones.
 *
 * A milestone is a self-contained piece of scientific writing, not a label on a
 * line. The five narrative fields below are required because they are the five
 * things a reader needs in order to understand a claim rather than memorise
 * it — including `uncertainty`, which is what stops the timeline reading as a
 * settled story told by an omniscient narrator.
 */
import type { CosmicTime } from './cosmicTime';
import type { DepthText } from './depth';
import type { EvidenceLevel } from './evidence';
import type { GlossaryTermId } from './glossary';
import type { ReferenceId } from './reference';
import type { SectionId } from './section';
import type { TopicId } from './topic';
import type { VisualizationId } from './visualization';

export type TimelineEventId = string & { readonly __brand: 'TimelineEventId' };

export function timelineEventId(id: string): TimelineEventId {
  return id as TimelineEventId;
}

/**
 * The domain a stretch of history belongs to. Drives the timeline's visual
 * treatment: cosmic, planetary, biological and human eras look different from
 * one another, because they are answered by different sciences and different
 * kinds of evidence.
 */
export const ERA_DOMAINS = ['cosmic', 'stellar', 'planetary', 'biological', 'human'] as const;
export type EraDomain = (typeof ERA_DOMAINS)[number];

/**
 * Era accents. A closed set, mirroring the tokens in
 * `design-system/tokens/accents.css` — declaring it as a union means an era
 * cannot name a colour that does not exist.
 */
export const ERA_ACCENTS = [
  'plasma',
  'ember',
  'void',
  'dawn',
  'cosmos',
  'terra',
  'origins',
  'life',
  'fauna',
  'human',
  'unknown',
] as const;
export type EraAccent = (typeof ERA_ACCENTS)[number];

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
  readonly accent: EraAccent;
  readonly domain: EraDomain;
  /** Order along the axis. */
  readonly order: number;
}

export interface TimelineEvent {
  readonly id: TimelineEventId;
  readonly slug: string;
  readonly title: string;
  readonly time: CosmicTime;
  readonly eraId: string;
  /** One line, shown on the axis and in the milestone list. */
  readonly summary: DepthText;
  readonly evidence: EvidenceLevel;
  readonly references: readonly ReferenceId[];

  /** What happened. The narrative core of the milestone. */
  readonly whatHappened: DepthText;
  /** Why it matters — what would be different if it had not happened. */
  readonly whyItMatters: DepthText;
  /** What evidence tells us this. Never "scientists say"; always the measurement. */
  readonly evidenceBasis: DepthText;
  /**
   * What is still genuinely uncertain. Omitted only where a milestone really is
   * settled in every respect a reader would ask about — which is rare.
   */
  readonly uncertainty?: DepthText;

  /**
   * A human-readable date phrase that beats any formatter, e.g.
   * "about 380,000 years after the beginning".
   */
  readonly whenLabel: string;
  /** Stated range where the date is a range rather than a point. */
  readonly whenRange?: string;

  /** The topic a reader lands on when they open this event. */
  readonly topicId?: TopicId;
  readonly sectionId?: SectionId;
  readonly visualizationId?: VisualizationId;
  readonly glossaryTerms?: readonly GlossaryTermId[];
  readonly relatedEvents?: readonly TimelineEventId[];

  /**
   * Relative prominence, 0–1. The timeline shows only the most prominent
   * events when zoomed out, so a phone never renders hundreds of labels.
   */
  readonly prominence: number;
}
