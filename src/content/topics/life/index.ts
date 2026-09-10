/**
 * Origin & Evolution of Life — Phase 7, second of two sections.
 *
 * The section is built as four stories laid end to end. First chemistry: what
 * life is, and how molecules on a young planet might have crossed into being
 * alive — the part where the honest answer is that nobody knows, and where the
 * competing hypotheses are laid out as competing hypotheses. Then cells: the
 * long microbial world, the energy revolutions, and the two mergers that made
 * complexity possible. Then evolution itself, written to dismantle a specific
 * set of intuitions — that nature chooses, that evolution climbs, that we are
 * what it was heading for. Then relationships: ecology, the ways life changed
 * the planet, and what complexity actually costs.
 *
 * The last two groups are deliberate. Philosophy comes after the science so it
 * cannot be mistaken for it, and each of those topics separates the empirical
 * question from the question about meaning. The bridge group stops at the edge
 * of human evolution, which has its own section.
 */
import { LIFE_ORIGIN_TOPICS } from './origin';
import { LIFE_EARLY_TOPICS } from './earlyLife';
import { LIFE_EVOLUTION_TOPICS } from './evolution';
import { LIFE_ECOLOGY_TOPICS } from './ecology';
import { LIFE_PLANET_TOPICS } from './planet';
import { LIFE_COMPLEXITY_TOPICS } from './complexity';
import { LIFE_PHILOSOPHY_TOPICS } from './philosophy';
import { LIFE_HISTORY_TOPICS } from './history';
import { LIFE_BRIDGE_TOPICS } from './bridge';
import type { Topic } from '../../schema/topic';

export const LIFE_TOPICS: readonly Topic[] = [
  ...LIFE_ORIGIN_TOPICS,
  ...LIFE_EARLY_TOPICS,
  ...LIFE_EVOLUTION_TOPICS,
  ...LIFE_ECOLOGY_TOPICS,
  ...LIFE_PLANET_TOPICS,
  ...LIFE_COMPLEXITY_TOPICS,
  ...LIFE_PHILOSOPHY_TOPICS,
  ...LIFE_HISTORY_TOPICS,
  ...LIFE_BRIDGE_TOPICS,
];
