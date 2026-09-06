/**
 * Newton’s Laws topics, in reading order.
 *
 * Vocabulary first, because the three laws are almost always misunderstood
 * through the words rather than the physics. Then one page per law, then the
 * synthesis that made them famous.
 */
import type { Topic } from '../../schema/topic';
import { NEWTON_LAW_TOPICS } from './laws';
import { NEWTON_ACHIEVEMENT_TOPICS } from './achievement';

export const NEWTON_TOPICS: readonly Topic[] = [...NEWTON_LAW_TOPICS, ...NEWTON_ACHIEVEMENT_TOPICS];
