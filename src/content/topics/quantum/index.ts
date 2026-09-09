/**
 * Quantum Physics topics, in reading order.
 *
 * The order is the argument. Six foundation topics trace the forced moves from
 * classical failure to matter waves. Then the double slit and measurement, put
 * early because everything after them depends on the language being right. Then
 * the formalism — states, superposition, uncertainty, the equation, operators —
 * introduced only once the reader wants it. Then spin and statistics, which
 * turn the formalism into the periodic table. Then entanglement and Bell, the
 * strongest experimental result in the section. Then tunnelling and the whole
 * material world it makes possible. Then fields, the Standard Model and the
 * vacuum, which is the modern account replacing the 1920s one. Then gravity,
 * strings and time, where the section's confidence deliberately drops. Then
 * cosmology, interpretations, and a closing synthesis that sorts every claim in
 * the section into four honesty tiers.
 */
import type { Topic } from '../../schema/topic';
import { QUANTUM_FOUNDATION_TOPICS } from './foundations';
import { QUANTUM_SLIT_TOPICS } from './slit';
import { QUANTUM_FORMALISM_TOPICS } from './formalism';
import { QUANTUM_SPIN_TOPICS } from './spin';
import { QUANTUM_ENTANGLEMENT_TOPICS } from './entanglement';
import { QUANTUM_MATTER_TOPICS } from './matter';
import { QUANTUM_FIELD_TOPICS } from './fields';
import { QUANTUM_GRAVITY_TOPICS } from './gravity';
import { QUANTUM_TIME_TOPICS } from './time';
import { QUANTUM_FRONTIER_TOPICS } from './frontiers';

export const QUANTUM_TOPICS: readonly Topic[] = [
  ...QUANTUM_FOUNDATION_TOPICS,
  ...QUANTUM_SLIT_TOPICS,
  ...QUANTUM_FORMALISM_TOPICS,
  ...QUANTUM_SPIN_TOPICS,
  ...QUANTUM_ENTANGLEMENT_TOPICS,
  ...QUANTUM_MATTER_TOPICS,
  ...QUANTUM_FIELD_TOPICS,
  ...QUANTUM_GRAVITY_TOPICS,
  ...QUANTUM_TIME_TOPICS,
  ...QUANTUM_FRONTIER_TOPICS,
];
