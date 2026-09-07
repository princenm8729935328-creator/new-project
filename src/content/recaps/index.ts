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

export const RECAPS: RecapsByTopic = {
  ...UNIVERSE_RECAPS,
  ...GRAVITY_RECAPS,
  ...NEWTON_RECAPS,
  ...RELATIVITY_RECAPS,
  ...BLACK_HOLE_RECAPS,
};

export function getRecap(id: TopicId): TopicRecap | undefined {
  return RECAPS[id];
}
