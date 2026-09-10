/**
 * Earth — Phase 7, first of two sections.
 *
 * The organising decision here is to refuse the postcard. A reader arrives
 * knowing Earth as a blue sphere in a photograph: finished, stable, obviously
 * the way planets are. Almost nothing in this section is compatible with that
 * picture. Earth was assembled violently, melted, hit hard enough to lose a
 * chunk of itself, and has been rebuilding its own surface ever since. Its air
 * has been replaced twice. Its climate has swung from ice at the equator to
 * forests at the poles.
 *
 * So the section is written as a biography rather than a description, and the
 * order is causal: how the planet was built, what that left it made of, how the
 * inside drives the outside, how the outside regulates itself, and finally the
 * moment where a chemical planet starts showing signs that something is living
 * on it — which hands the reader to the next section.
 */
import { EARTH_ORIGIN_TOPICS } from './origin';
import { EARTH_INTERIOR_TOPICS } from './interior';
import { EARTH_CLIMATE_TOPICS } from './climate';
import { EARTH_LIFE_TOPICS } from './beforeLife';
import type { Topic } from '../../schema/topic';

export const EARTH_TOPICS: readonly Topic[] = [
  ...EARTH_ORIGIN_TOPICS,
  ...EARTH_INTERIOR_TOPICS,
  ...EARTH_CLIMATE_TOPICS,
  ...EARTH_LIFE_TOPICS,
];
