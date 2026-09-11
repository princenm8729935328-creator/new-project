/**
 * Human Evolution — Scientific Lens.
 *
 * Nine movements, in reading order: what we are, what the body records, what the
 * ground holds, what the brain cost, what behaviour changed, who else there was,
 * what people made that meant something, what farming did, and where the process
 * stands now.
 *
 * Every topic here carries `lens: 'scientific'`. The Philosophical Lens will be
 * a separate set of files declaring `lens: 'philosophical'`, and the two are
 * spread into the same section without either needing to know the other exists.
 */
import type { Topic } from '../../schema/topic';
import { HUMAN_BEFORE_US_TOPICS } from './beforeUs';
import { HUMAN_BODY_TOPICS } from './body';
import { HUMAN_FOSSIL_TOPICS } from './fossils';
import { HUMAN_BRAIN_TOPICS } from './brain';
import { HUMAN_CULTURE_TOPICS } from './culture';
import { HUMAN_FAMILY_TOPICS } from './family';
import { HUMAN_SYMBOL_TOPICS } from './symbols';
import { HUMAN_AGRICULTURE_TOPICS } from './agriculture';
import { HUMAN_PRESENT_TOPICS } from './present';

export const HUMAN_EVOLUTION_TOPICS: readonly Topic[] = [
  ...HUMAN_BEFORE_US_TOPICS,
  ...HUMAN_BODY_TOPICS,
  ...HUMAN_FOSSIL_TOPICS,
  ...HUMAN_BRAIN_TOPICS,
  ...HUMAN_CULTURE_TOPICS,
  ...HUMAN_FAMILY_TOPICS,
  ...HUMAN_SYMBOL_TOPICS,
  ...HUMAN_AGRICULTURE_TOPICS,
  ...HUMAN_PRESENT_TOPICS,
];
