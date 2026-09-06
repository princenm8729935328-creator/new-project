/**
 * Universe & Cosmology topics, in reading order.
 *
 * The order is a journey, not a taxonomy: what the model claims, then the
 * expansion it describes, then the early Universe forwards in time, then the
 * two components nobody has identified, and finally the limits of knowledge.
 */
import type { Topic } from '../../schema/topic';
import { EXPANSION_TOPICS } from './expansion';
import { LIGHT_AND_STRUCTURE_TOPICS } from './lightAndStructure';
import { DARK_UNIVERSE_TOPICS } from './darkUniverse';

export const UNIVERSE_TOPICS: readonly Topic[] = [
  ...EXPANSION_TOPICS,
  ...LIGHT_AND_STRUCTURE_TOPICS,
  ...DARK_UNIVERSE_TOPICS,
];
