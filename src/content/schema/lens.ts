/**
 * Lenses — two ways of investigating one subject.
 *
 * A lens is not a theme or a display mode. It is a separate body of thought
 * with its own question, its own standards of evidence, and its own curriculum.
 * Human Evolution is the first section that needs the idea: "how did we become
 * human" is answered from fossils, genomes and dates, while "what does it mean
 * to be human" is answered by argument, and running them together would let
 * each borrow authority it has not earned.
 *
 * The separation is therefore structural rather than visual. A topic declares
 * the lens it belongs to, `getTopicsForLens` reads that declaration, and the two
 * curricula can be written, reviewed and extended without touching each other.
 * A section that declares no lenses behaves exactly as it always has.
 */
import type { ContentStatus } from './topic';

export const LENS_IDS = ['scientific', 'philosophical'] as const;

export type LensId = (typeof LENS_IDS)[number];

export interface LensMeta {
  readonly id: LensId;
  /** Name of the lens, as the reader chooses it. */
  readonly label: string;
  /** The question this lens asks. This is the distinction, not the label. */
  readonly question: string;
  /** What kind of answer this lens can give, and what it cannot. */
  readonly description: string;
  readonly status: ContentStatus;
}

export const LENS_META: Readonly<Record<LensId, LensMeta>> = {
  scientific: {
    id: 'scientific',
    label: 'Scientific Lens',
    question: 'How did we become human?',
    description:
      'Fossils, genomes, tools and dates, and what can be inferred from them. Answers here are provisional and stand or fall on evidence.',
    status: 'published',
  },
  philosophical: {
    id: 'philosophical',
    label: 'Philosophical Lens',
    question: 'What does it mean to be human?',
    description:
      'Questions no excavation settles. Answers here are arguments, held to be clear and honest rather than confirmed, and they never borrow the authority of the evidence next door.',
    status: 'planned',
  },
};

export const DEFAULT_LENS: LensId = 'scientific';

/** The line under the selector. Deliberately quiet. */
export const LENS_STRAPLINE = 'Two ways of looking. One reality.';

export function isLensId(value: unknown): value is LensId {
  return typeof value === 'string' && (LENS_IDS as readonly string[]).includes(value);
}
