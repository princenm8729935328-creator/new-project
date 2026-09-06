/**
 * Gravity topics, in reading order.
 *
 * The order is a build-up: what the phenomenon is, the law that describes it,
 * the two meanings of mass, then the four things the law explains that people
 * actually ask about — falling, weight elsewhere, orbits, escape and tides —
 * and finally an honest account of where the whole model stops working.
 */
import type { Topic } from '../../schema/topic';
import { GRAVITY_FOUNDATION_TOPICS } from './foundations';
import { GRAVITY_ORBIT_TOPICS } from './orbits';
import { GRAVITY_LIMIT_TOPICS } from './limits';

export const GRAVITY_TOPICS: readonly Topic[] = [
  ...GRAVITY_FOUNDATION_TOPICS,
  ...GRAVITY_ORBIT_TOPICS,
  ...GRAVITY_LIMIT_TOPICS,
];
