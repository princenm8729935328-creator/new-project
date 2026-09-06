/**
 * Sections — the platform's top-level areas.
 *
 * A section is described entirely by data: its identity, its route, the phase
 * that builds it, and its place in the visual system. Adding a fifteenth
 * section is a matter of appending one record and one content folder; no
 * routing, navigation or layout code changes. See PROJECT_PLAN.md
 * § Extending the platform.
 */
import type { ContentStatus } from './topic';

export type SectionId = string & { readonly __brand: 'SectionId' };

export function sectionId(id: string): SectionId {
  return id as SectionId;
}

/**
 * The accent a section carries through headers, timeline markers and figure
 * highlights. Each maps to a token pair in `design-system/tokens/accents.css`;
 * the palette is fixed so fourteen sections cannot drift into fourteen unrelated
 * colour schemes.
 */
export type SectionAccent =
  | 'cosmos'
  | 'plasma'
  | 'ember'
  | 'void'
  | 'gravity'
  | 'classical'
  | 'relativity'
  | 'quantum'
  | 'terra'
  | 'life'
  | 'human'
  | 'dark'
  | 'unknown'
  | 'lexicon';

export interface Section {
  readonly id: SectionId;
  /** URL segment. Stable forever once published. */
  readonly slug: string;
  readonly title: string;
  /** A single evocative line for the section header and nav. */
  readonly tagline: string;
  /** Two or three sentences for the section landing page. */
  readonly overview: string;
  readonly accent: SectionAccent;
  /** Position in navigation and on the home page. */
  readonly order: number;
  /** Roadmap phase that delivers this section's content. */
  readonly phase: number;
  readonly status: ContentStatus;
  /** Key from `design-system/icons`. */
  readonly icon: string;
  /**
   * Where this section sits on the cosmic timeline, when it sits anywhere.
   * Physics sections (Gravity, Quantum) are laws rather than events and leave
   * this undefined.
   */
  readonly timelineSpan?: {
    readonly fromLogSeconds: number;
    readonly toLogSeconds: number;
  };
}
