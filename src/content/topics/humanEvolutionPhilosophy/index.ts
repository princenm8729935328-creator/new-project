/**
 * Human Evolution, Philosophical Lens.
 *
 * Fifty-six topics in twelve movements, running from "is the world as it
 * seems?" to "how should a human being live?". They share a section with the
 * Scientific Lens and are kept completely separate from it: a different
 * directory, a different order range, and no topic in either lens referring to
 * the other except through one deliberate cross-link at the very end.
 *
 * The order range starts at 101 so that the two curricula can each grow without
 * renumbering the other. `getTopicsForLens` is what the section page uses, so
 * neither list ever has to know how long the other one is.
 */
import type { Topic } from '../../schema/topic';
import { PHIL_REALITY_TOPICS } from './reality';
import { PHIL_SELF_TOPICS } from './self';
import { PHIL_CONDITIONING_TOPICS } from './conditioning';
import { PHIL_FREEDOM_TOPICS } from './freedom';
import { PHIL_MORALITY_TOPICS } from './morality';
import { PHIL_CHARACTER_TOPICS } from './character';
import { PHIL_MIND_TOPICS } from './mind';
import { PHIL_MEANING_TOPICS } from './meaning';

export const HUMAN_EVOLUTION_PHILOSOPHY_TOPICS: readonly Topic[] = [
  ...PHIL_REALITY_TOPICS,
  ...PHIL_SELF_TOPICS,
  ...PHIL_CONDITIONING_TOPICS,
  ...PHIL_FREEDOM_TOPICS,
  ...PHIL_MORALITY_TOPICS,
  ...PHIL_CHARACTER_TOPICS,
  ...PHIL_MIND_TOPICS,
  ...PHIL_MEANING_TOPICS,
];
