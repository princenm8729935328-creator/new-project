/**
 * Bibliographic records. References live in one shared pool
 * (`src/content/references/`) so a single source can back claims across many
 * sections without being retyped — and so a correction is made once.
 */

export type ReferenceId = string & { readonly __brand: 'ReferenceId' };

export const REFERENCE_KINDS = [
  'journal-article',
  'preprint',
  'review',
  'book',
  'dataset',
  'mission-page',
  'agency-page',
  'encyclopedia',
] as const;

export type ReferenceKind = (typeof REFERENCE_KINDS)[number];

export interface Reference {
  readonly id: ReferenceId;
  readonly kind: ReferenceKind;
  /** Rendered verbatim; format as the source formats itself, e.g. "Planck Collaboration". */
  readonly authors: string;
  readonly year: number;
  readonly title: string;
  /** Journal, publisher, mission, or archive. */
  readonly source: string;
  readonly doi?: string;
  readonly arxiv?: string;
  readonly url?: string;
  /** ISO date the URL was last checked, for web sources that can drift. */
  readonly accessed?: string;
  /**
   * Free-text note for the content author: what exactly this source supports.
   * Not rendered to readers; it exists so a reviewer can audit a citation.
   */
  readonly supports?: string;
}

export function referenceId(id: string): ReferenceId {
  return id as ReferenceId;
}

/** Human-readable single-line citation used in reference lists. */
export function formatReference(reference: Reference): string {
  const parts = [
    `${reference.authors} (${reference.year}).`,
    `${reference.title}.`,
    `${reference.source}.`,
  ];
  if (reference.doi) parts.push(`doi:${reference.doi}`);
  else if (reference.arxiv) parts.push(`arXiv:${reference.arxiv}`);
  return parts.join(' ');
}

/** Best available link for a reference, or undefined when it is print-only. */
export function referenceHref(reference: Reference): string | undefined {
  if (reference.doi) return `https://doi.org/${reference.doi}`;
  if (reference.arxiv) return `https://arxiv.org/abs/${reference.arxiv}`;
  return reference.url;
}
