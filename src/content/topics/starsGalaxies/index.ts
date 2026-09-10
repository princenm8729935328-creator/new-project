/**
 * Stars & Galaxies topics, in reading order.
 *
 * The order is the argument, and it runs one continuous causal chain: what a
 * star is, how one starts, why it stays lit, how its mass decides everything,
 * how it dies, what it makes while dying, where that material goes, what
 * galaxies do with it, and finally what any of it has to do with us.
 *
 * Observation comes near the end on purpose. A reader who has been told for
 * forty topics what stars are made of is by then entitled to ask how anyone
 * could possibly know — and that is a better moment to explain spectroscopy
 * than the beginning, when the question has not yet occurred to them.
 */
import type { Topic } from '../../schema/topic';
import { STARS_FOUNDATION_TOPICS } from './foundations';
import { STARS_EVOLUTION_TOPICS } from './evolution';
import { STARS_DEATH_TOPICS } from './deaths';
import { STARS_GALAXY_TOPICS } from './galaxies';
import { STARS_MILKY_WAY_TOPICS } from './milkyWay';
import { STARS_CHEMISTRY_TOPICS } from './chemistry';
import { STARS_OBSERVATION_TOPICS } from './observation';
import { STARS_FRONTIER_TOPICS } from './frontiers';

export const STARS_GALAXIES_TOPICS: readonly Topic[] = [
  ...STARS_FOUNDATION_TOPICS,
  ...STARS_EVOLUTION_TOPICS,
  ...STARS_DEATH_TOPICS,
  ...STARS_GALAXY_TOPICS,
  ...STARS_MILKY_WAY_TOPICS,
  ...STARS_CHEMISTRY_TOPICS,
  ...STARS_OBSERVATION_TOPICS,
  ...STARS_FRONTIER_TOPICS,
];
