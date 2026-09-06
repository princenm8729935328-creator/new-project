/**
 * Reading depth.
 *
 * The same topic is written three times, not dumbed down once: a curious
 * newcomer, an interested adult, and a reader who wants the actual physics.
 * Depth is a global reader preference, so switching it re-renders every panel
 * on the page rather than expanding a single "read more".
 */
export const DEPTH_LEVELS = ['essential', 'detailed', 'technical'] as const;

export type DepthLevel = (typeof DEPTH_LEVELS)[number];

export interface DepthMeta {
  readonly id: DepthLevel;
  readonly label: string;
  readonly description: string;
  readonly rank: number;
}

export const DEPTH_META: Readonly<Record<DepthLevel, DepthMeta>> = {
  essential: {
    id: 'essential',
    label: 'Essential',
    description: 'The idea in plain language, no mathematics.',
    rank: 0,
  },
  detailed: {
    id: 'detailed',
    label: 'Detailed',
    description: 'The mechanism, the evidence, and why scientists accept it.',
    rank: 1,
  },
  technical: {
    id: 'technical',
    label: 'Technical',
    description: 'Formal statements, equations, and quantitative detail.',
    rank: 2,
  },
};

export const DEFAULT_DEPTH: DepthLevel = 'essential';

/**
 * Text keyed by depth. `essential` is mandatory: every idea must be sayable to
 * a newcomer. Deeper levels fall back to the nearest shallower one that exists,
 * so a topic is never blank because an author has not written the technical
 * version yet.
 */
export type DepthText = {
  readonly essential: string;
} & Partial<Record<DepthLevel, string>>;

export function resolveDepthText(text: DepthText, depth: DepthLevel): string {
  const wanted = DEPTH_META[depth].rank;
  for (let rank = wanted; rank >= 0; rank -= 1) {
    const level = DEPTH_LEVELS[rank];
    const value = level ? text[level] : undefined;
    if (value) return value;
  }
  return text.essential;
}

export function isDepthLevel(value: unknown): value is DepthLevel {
  return typeof value === 'string' && (DEPTH_LEVELS as readonly string[]).includes(value);
}
