/**
 * Visualization specs.
 *
 * A spec is the contract a figure must satisfy before it may appear: what it
 * is, how faithful it is to reality, what it says to a screen reader, and —
 * for data-driven figures — where the data came from.
 *
 * Specs live in the content layer, not next to the renderers, because they are
 * editorial statements. A scientific reviewer changes a caption here without
 * touching a line of rendering code.
 *
 * Empty until Phase 1. See `src/visualization/registry.ts` for the other half
 * of the pairing.
 */
import type { VisualizationSpec } from './schema/visualization';

export const VISUALIZATIONS: readonly VisualizationSpec[] = [];
