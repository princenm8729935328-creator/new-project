/**
 * Topic registry.
 *
 * Topics are written per section under `src/content/topics/<section-slug>/` and
 * re-exported here. Adding a section's content is one import and one spread —
 * routing, search, the knowledge graph and validation all read from this array,
 * and none of them needs to know a new section exists.
 */
import type { Topic, TopicId } from '../schema/topic';
import type { LensId } from '../schema/lens';
import type { SectionId } from '../schema/section';
import { UNIVERSE_TOPICS } from './universe';
import { GRAVITY_TOPICS } from './gravity';
import { NEWTON_TOPICS } from './newton';
import { RELATIVITY_TOPICS } from './relativity';
import { BLACK_HOLE_TOPICS } from './blackHoles';
import { QUANTUM_TOPICS } from './quantum';
import { STARS_GALAXIES_TOPICS } from './starsGalaxies';
import { EARTH_TOPICS } from './earth';
import { LIFE_TOPICS } from './life';
import { HUMAN_EVOLUTION_TOPICS } from './humanEvolution';

export const TOPICS: readonly Topic[] = [
  ...UNIVERSE_TOPICS,
  ...GRAVITY_TOPICS,
  ...NEWTON_TOPICS,
  ...RELATIVITY_TOPICS,
  ...BLACK_HOLE_TOPICS,
  ...QUANTUM_TOPICS,
  ...STARS_GALAXIES_TOPICS,
  ...EARTH_TOPICS,
  ...LIFE_TOPICS,
  ...HUMAN_EVOLUTION_TOPICS,
];

const BY_ID = new Map<TopicId, Topic>(TOPICS.map((topic) => [topic.id, topic]));

export function getTopicById(id: TopicId): Topic | undefined {
  return BY_ID.get(id);
}

export function getTopicsForSection(sectionId: SectionId): readonly Topic[] {
  return TOPICS.filter((topic) => topic.sectionId === sectionId).sort((a, b) => a.order - b.order);
}

/**
 * The topics of one lens within a section, in reading order.
 *
 * Separate from `getTopicsForSection` rather than a parameter on it, so that
 * the sections without lenses — which is all of them but one — keep the exact
 * call they have always made.
 */
export function getTopicsForLens(sectionId: SectionId, lens: LensId): readonly Topic[] {
  return getTopicsForSection(sectionId).filter((topic) => topic.lens === lens);
}

export function getTopicBySlug(sectionId: SectionId, slug: string): Topic | undefined {
  return TOPICS.find((topic) => topic.sectionId === sectionId && topic.slug === slug);
}

/** Topics a reader can actually open. Drafts stay invisible in production. */
export function publishedTopics(): readonly Topic[] {
  return TOPICS.filter((topic) => topic.status === 'published');
}
