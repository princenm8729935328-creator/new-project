/**
 * Topic registry.
 *
 * Topics are written per section under `src/content/topics/<section-slug>/` and
 * re-exported here. The array is empty until Phase 1: no section has published
 * content yet, and the UI reflects that honestly rather than rendering stubs.
 *
 * When a section's content lands, add `import { COSMIC_TIMELINE_TOPICS } from
 * './cosmic-timeline'` and spread it into `TOPICS`. Nothing else changes —
 * routing, search, the knowledge graph and validation all read from here.
 */
import type { Topic, TopicId } from '../schema/topic';
import type { SectionId } from '../schema/section';

export const TOPICS: readonly Topic[] = [];

const BY_ID = new Map<TopicId, Topic>(TOPICS.map((topic) => [topic.id, topic]));

export function getTopicById(id: TopicId): Topic | undefined {
  return BY_ID.get(id);
}

export function getTopicsForSection(sectionId: SectionId): readonly Topic[] {
  return TOPICS.filter((topic) => topic.sectionId === sectionId).sort((a, b) => a.order - b.order);
}

export function getTopicBySlug(sectionId: SectionId, slug: string): Topic | undefined {
  return TOPICS.find((topic) => topic.sectionId === sectionId && topic.slug === slug);
}

/** Topics a reader can actually open. Drafts stay invisible in production. */
export function publishedTopics(): readonly Topic[] {
  return TOPICS.filter((topic) => topic.status === 'published');
}
