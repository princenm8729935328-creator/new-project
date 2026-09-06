import { describe, expect, it } from 'vitest';
import { visualizationId } from '@/content/schema/visualization';
import { VISUALIZATIONS } from '@/content/visualizations';
import {
  getVisualization,
  getVisualizationComponent,
  unimplementedVisualizations,
  unspecifiedVisualizations,
} from './registry';

describe('visualization registry', () => {
  it('pairs every spec with a renderer and vice versa', () => {
    expect(unimplementedVisualizations()).toEqual([]);
    expect(unspecifiedVisualizations()).toEqual([]);
  });

  it('resolves every registered figure', () => {
    for (const spec of VISUALIZATIONS) {
      expect(getVisualization(spec.id), spec.id).toBeDefined();
      expect(getVisualizationComponent(spec.id), spec.id).toBeDefined();
    }
  });

  /**
   * Regression test.
   *
   * `lazy()` returns a new component type on every call, and React treats a new
   * type as a different component: it remounts and re-suspends. A frame that
   * built its lazy component inline therefore never escaped its Suspense
   * fallback — React left the real figure in the DOM but hid it with
   * `display: none !important`, so figures silently never appeared in the
   * browser while every unit test still passed.
   */
  it('returns a stable component identity for the same figure', () => {
    const id = VISUALIZATIONS[0]!.id;
    const first = getVisualizationComponent(id);
    const second = getVisualizationComponent(id);
    expect(first).toBe(second);
  });

  it('returns nothing for an unknown figure rather than throwing', () => {
    const missing = visualizationId('does-not-exist');
    expect(getVisualization(missing)).toBeUndefined();
    expect(getVisualizationComponent(missing)).toBeUndefined();
  });
});
