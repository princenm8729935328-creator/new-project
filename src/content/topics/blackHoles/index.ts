/**
 * Black Holes topics, in reading order.
 *
 * The order builds outward and then inward: what a black hole is, where they
 * come from, what happens during collapse, the horizon, the geometry around it,
 * and the singularity where the theory stops. Then the structure — Schwarzschild
 * and Kerr — followed by everything that makes them visible: accretion, jets,
 * tides, the photon sphere and the shadow. Then the populations, the mergers and
 * the observational case. The last three topics are the frontier, kept at the
 * end so that nothing speculative sits next to something settled.
 */
import type { Topic } from '../../schema/topic';
import { BLACK_HOLE_FOUNDATION_TOPICS } from './foundations';
import { BLACK_HOLE_ANATOMY_TOPICS } from './anatomy';
import { BLACK_HOLE_ENVIRONMENT_TOPICS } from './environment';
import { BLACK_HOLE_OBSERVATION_TOPICS } from './observations';
import { BLACK_HOLE_FRONTIER_TOPICS } from './frontiers';

export const BLACK_HOLE_TOPICS: readonly Topic[] = [
  ...BLACK_HOLE_FOUNDATION_TOPICS,
  ...BLACK_HOLE_ANATOMY_TOPICS,
  ...BLACK_HOLE_ENVIRONMENT_TOPICS,
  ...BLACK_HOLE_OBSERVATION_TOPICS,
  ...BLACK_HOLE_FRONTIER_TOPICS,
];
