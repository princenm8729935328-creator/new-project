/**
 * Einstein & Relativity topics, in reading order.
 *
 * Special relativity first, because general relativity is unintelligible
 * without it: curvature is curvature *of spacetime*, and spacetime is what the
 * first seven topics build. Then the equivalence principle, geometry, and the
 * three classical tests. Then the frontier — black-hole foundations,
 * gravitational waves, the experimental record, and what is still open.
 */
import type { Topic } from '../../schema/topic';
import { SPECIAL_RELATIVITY_TOPICS } from './special';
import { GENERAL_RELATIVITY_TOPICS } from './general';
import { RELATIVITY_FRONTIER_TOPICS } from './frontiers';

export const RELATIVITY_TOPICS: readonly Topic[] = [
  ...SPECIAL_RELATIVITY_TOPICS,
  ...GENERAL_RELATIVITY_TOPICS,
  ...RELATIVITY_FRONTIER_TOPICS,
];
