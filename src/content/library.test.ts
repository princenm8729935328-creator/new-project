import { describe, expect, it } from 'vitest';
import { LIBRARY } from './library';
import { errorsOnly, formatIssues, validateLibrary } from './schema/validate';
import { SECTIONS } from './sections';
import { REFERENCES } from './references';
import { GLOSSARY } from './glossary';
import { unimplementedVisualizations, unspecifiedVisualizations } from '@/visualization/registry';

/**
 * The content gate.
 *
 * This suite is the reason the accuracy rules are rules rather than
 * aspirations: an uncited claim, a dangling cross-link or a figure without a
 * caption fails here before it can reach a reader.
 */
describe('content library', () => {
  it('has no validation errors', () => {
    const issues = errorsOnly(validateLibrary(LIBRARY));
    expect(issues, formatIssues(issues)).toEqual([]);
  });

  it('gives every section a unique slug and order', () => {
    const slugs = SECTIONS.map((section) => section.slug);
    const orders = SECTIONS.map((section) => section.order);
    expect(new Set(slugs).size).toBe(SECTIONS.length);
    expect(new Set(orders).size).toBe(SECTIONS.length);
  });

  it('covers all fourteen core areas', () => {
    expect(SECTIONS).toHaveLength(14);
  });

  it('gives every reference a resolvable identity', () => {
    for (const reference of REFERENCES) {
      expect(reference.title.trim()).not.toBe('');
      expect(reference.year).toBeGreaterThan(1500);
      expect(reference.year).toBeLessThanOrEqual(new Date().getFullYear() + 1);
      // A source a reader cannot reach is not much of a citation. Books are
      // the exception: they are findable by title and author alone.
      if (reference.kind !== 'book') {
        expect(
          reference.doi ?? reference.arxiv ?? reference.url,
          `${reference.id} has no DOI, arXiv id or URL`,
        ).toBeDefined();
      }
    }
  });

  it('gives every glossary term a standalone one-sentence definition', () => {
    for (const term of GLOSSARY) {
      expect(term.short.length, `${term.id} definition is too short`).toBeGreaterThan(20);
    }
  });
});

describe('visualization registry', () => {
  it('has a renderer for every published spec', () => {
    expect(unimplementedVisualizations()).toEqual([]);
  });

  it('has a spec for every renderer, so no figure can render uncaptioned', () => {
    expect(unspecifiedVisualizations()).toEqual([]);
  });
});
