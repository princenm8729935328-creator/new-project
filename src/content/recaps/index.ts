/**
 * Topic recaps, keyed by topic id.
 *
 * Kept beside the topics rather than inside them so that a section written in
 * an earlier phase can gain a summary and a comprehension check without its
 * content file being touched at all. Adding a topic and adding its recap are
 * two independent edits, and the content validator enforces that a published
 * topic has both.
 *
 * Every entry is written specifically for its topic. A generic summary would be
 * worse than none: it teaches nothing and it trains readers to skip the
 * section.
 */
import type { RecapsByTopic, TopicRecap } from '../schema/recap';
import type { TopicId } from '../schema/topic';
import { UNIVERSE_RECAPS } from './universe';
import { GRAVITY_RECAPS } from './gravity';
import { NEWTON_RECAPS } from './newton';
import { RELATIVITY_RECAPS } from './relativity';
import { BLACK_HOLE_RECAPS } from './blackHoles';
import { QUANTUM_RECAPS } from './quantum';
import { STARS_GALAXIES_RECAPS } from './starsGalaxies';
import { EARTH_RECAPS } from './earth';
import { LIFE_ORIGIN_RECAPS } from './lifeOrigin';
import { LIFE_EARLY_RECAPS } from './lifeEarly';
import { LIFE_EVOLUTION_RECAPS } from './lifeEvolution';
import { LIFE_ECOLOGY_RECAPS } from './lifeEcology';
import { LIFE_SYNTHESIS_RECAPS } from './lifeSynthesis';
import { LIFE_QUESTIONS_RECAPS } from './lifeQuestions';
import { HUMAN_ORIGINS_RECAPS } from './humanOrigins';
import { HUMAN_FOSSIL_RECAPS } from './humanFossils';
import { HUMAN_CULTURE_RECAPS } from './humanCulture';
import { HUMAN_PRESENT_RECAPS } from './humanPresent';
import { PHILOSOPHY_REALITY_RECAPS } from './philosophyReality';
import { PHILOSOPHY_FREEDOM_RECAPS } from './philosophyFreedom';
import { PHILOSOPHY_MORALITY_RECAPS } from './philosophyMorality';
import { PHILOSOPHY_MIND_RECAPS } from './philosophyMind';

export const RECAPS: RecapsByTopic = {
  ...UNIVERSE_RECAPS,
  ...GRAVITY_RECAPS,
  ...NEWTON_RECAPS,
  ...RELATIVITY_RECAPS,
  ...BLACK_HOLE_RECAPS,
  ...QUANTUM_RECAPS,
  ...STARS_GALAXIES_RECAPS,
  ...EARTH_RECAPS,
  ...LIFE_ORIGIN_RECAPS,
  ...LIFE_EARLY_RECAPS,
  ...LIFE_EVOLUTION_RECAPS,
  ...LIFE_ECOLOGY_RECAPS,
  ...LIFE_SYNTHESIS_RECAPS,
  ...LIFE_QUESTIONS_RECAPS,
  ...HUMAN_ORIGINS_RECAPS,
  ...HUMAN_FOSSIL_RECAPS,
  ...HUMAN_CULTURE_RECAPS,
  ...HUMAN_PRESENT_RECAPS,
  ...PHILOSOPHY_REALITY_RECAPS,
  ...PHILOSOPHY_FREEDOM_RECAPS,
  ...PHILOSOPHY_MORALITY_RECAPS,
  ...PHILOSOPHY_MIND_RECAPS,
};

export function getRecap(id: TopicId): TopicRecap | undefined {
  return RECAPS[id];
}
