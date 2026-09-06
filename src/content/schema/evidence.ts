/**
 * Epistemic status vocabulary.
 *
 * Every scientific statement on this platform is tagged with exactly one of
 * these levels. The level is not decoration — it drives the badge shown next to
 * the statement and the citation requirements enforced by `validateTopic`.
 *
 * See PROJECT_PLAN.md § Scientific accuracy rules.
 */
export const EVIDENCE_LEVELS = [
  'established',
  'model',
  'active-research',
  'open-question',
  'speculation',
] as const;

export type EvidenceLevel = (typeof EVIDENCE_LEVELS)[number];

export interface EvidenceLevelMeta {
  readonly id: EvidenceLevel;
  /** Short label used on badges. */
  readonly label: string;
  /** One sentence the reader sees on hover/tap. Must be plain language. */
  readonly definition: string;
  /**
   * Minimum number of references a claim at this level must carry.
   * Speculation is the only level allowed to stand without a citation, and only
   * because it is explicitly labelled as not-yet-science.
   */
  readonly minReferences: number;
  /** Design-system token suffix, e.g. `--evidence-established`. */
  readonly token: string;
}

export const EVIDENCE_LEVEL_META: Readonly<Record<EvidenceLevel, EvidenceLevelMeta>> = {
  established: {
    id: 'established',
    label: 'Established',
    definition:
      'Supported by repeated, independent measurement. Treated as settled by essentially all working scientists in the field.',
    minReferences: 1,
    token: 'established',
  },
  model: {
    id: 'model',
    label: 'Scientific model',
    definition:
      'A well-tested framework that explains and predicts the evidence. Strongly supported, but a model of reality rather than a direct observation of it.',
    minReferences: 1,
    token: 'model',
  },
  'active-research': {
    id: 'active-research',
    label: 'Active research',
    definition:
      'Under genuine investigation right now. Competing explanations exist and the answer may change as data improves.',
    minReferences: 1,
    token: 'research',
  },
  'open-question': {
    id: 'open-question',
    label: 'Open question',
    definition: 'Science does not currently have an answer. Stated here as a question, not a fact.',
    minReferences: 1,
    token: 'open',
  },
  speculation: {
    id: 'speculation',
    label: 'Speculation',
    definition:
      'An idea that is not established science. Included only to show how scientists think, and always marked as speculation.',
    minReferences: 0,
    token: 'speculation',
  },
};

export function isEvidenceLevel(value: unknown): value is EvidenceLevel {
  return typeof value === 'string' && (EVIDENCE_LEVELS as readonly string[]).includes(value);
}
