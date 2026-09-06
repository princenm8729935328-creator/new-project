/**
 * Visualization registry.
 *
 * Maps a `VisualizationId` to (a) its descriptor — the honest caption, fidelity
 * and text alternative that must be shown alongside it — and (b) a lazy loader
 * for the React component that draws it.
 *
 * Registering rather than importing is what keeps every renderer out of the
 * initial bundle: a phone that opens the glossary never downloads a WebGL
 * scene. It is also what lets `VisualizationFrame` refuse to render a figure
 * that has no declared fidelity, since there is no way to reach a renderer
 * except through a registered entry.
 *
 * Adding a visualization:
 *   1. Write the component under `src/visualization/renderers/`.
 *   2. Add its spec to `src/content/visualizations.ts`.
 *   3. Add one line here mapping the id to `() => import('...')`.
 */
import type { ComponentType } from 'react';
import type { VisualizationId, VisualizationSpec } from '@/content/schema/visualization';
import { VISUALIZATIONS } from '@/content/visualizations';
import type { QualityTier } from './core/quality';

/** Props every registered renderer receives. */
export interface VisualizationProps {
  /** Quality tier resolved for the current device. Renderers must honour it. */
  readonly quality: QualityTier;
  /** False when the frame is off-screen or the tab is hidden: stop animating. */
  readonly active: boolean;
  /** True when the reader has asked for reduced motion. */
  readonly reducedMotion: boolean;
  /** Measured pixel size of the frame's content box. */
  readonly width: number;
  readonly height: number;
}

export type VisualizationLoader = () => Promise<{ default: ComponentType<VisualizationProps> }>;

export interface RegisteredVisualization {
  readonly spec: VisualizationSpec;
  readonly load: VisualizationLoader;
}

/**
 * Loaders by id. Empty until Phase 1 adds the first renderer — the machinery
 * around it (frame, quality tiers, viewport gating) is what exists today.
 */
const LOADERS: Partial<Record<string, VisualizationLoader>> = {};

const SPECS = new Map<string, VisualizationSpec>(
  VISUALIZATIONS.map((visualization) => [visualization.id, visualization]),
);

export function getVisualization(id: VisualizationId): RegisteredVisualization | undefined {
  const spec = SPECS.get(id);
  const load = LOADERS[id];
  if (!spec || !load) return undefined;
  return { spec, load };
}

export function getVisualizationSpec(id: VisualizationId): VisualizationSpec | undefined {
  return SPECS.get(id);
}

/** Ids that have a spec but no renderer yet — asserted to be empty in tests. */
export function unimplementedVisualizations(): string[] {
  return [...SPECS.keys()].filter((id) => !LOADERS[id]);
}

/** Ids that have a renderer but no spec: a renderer with no honest caption. */
export function unspecifiedVisualizations(): string[] {
  return Object.keys(LOADERS).filter((id) => !SPECS.has(id));
}
