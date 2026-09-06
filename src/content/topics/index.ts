/**
 * Topic registry.
 *
 * Topics are written per section under `src/content/topics/<section-slug>/` and
 * re-exported here. Adding a section's content is one import and one spread —
 * routing, search, the knowledge graph and validation all read from this array,
 * and none of them needs to know a new section exists.
 */
import type { Topic, TopicId } from '../schema/topic';
import type { SectionId } from '../schema/section';
import { UNIVERSE_TOPICS } from './universe';

export const TOPICS: readonly Topic[] = [...UNIVERSE_TOPICS];

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
