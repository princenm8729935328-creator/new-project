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
import { lazy, type ComponentType } from 'react';
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
 * Loaders by id. Every entry is a dynamic import, so a renderer is fetched only
 * when a frame using it approaches the viewport.
 */
const LOADERS: Partial<Record<string, VisualizationLoader>> = {
  'primordial-plasma': () => import('./renderers/PrimordialPlasma'),
  'structure-formation': () => import('./renderers/StructureFormation'),
  'protoplanetary-disk': () => import('./renderers/ProtoplanetaryDisk'),
  'oxygen-history': () => import('./renderers/OxygenHistory'),
  'hominin-tree': () => import('./renderers/HomininTree'),
  'deep-time-scale': () => import('./renderers/DeepTimeScale'),
};

const SPECS = new Map<string, VisualizationSpec>(
  VISUALIZATIONS.map((visualization) => [visualization.id, visualization]),
);

export function getVisualization(id: VisualizationId): RegisteredVisualization | undefined {
  const spec = SPECS.get(id);
  const load = LOADERS[id];
  if (!spec || !load) return undefined;
  return { spec, load };
}

/**
 * The lazy component for a visualization, created once and cached forever.
 *
 * This has to be module-level, not a `useMemo` in the frame. `lazy()` returns a
 * new component type on every call, and React treats a new type as a different
 * component: it unmounts the old one and suspends again. A frame that recreated
 * its lazy component on each render therefore never escaped its Suspense
 * fallback — React kept the real element in the tree but hid it with
 * `display: none !important`, so the figure silently never appeared.
 *
 * Caching by id makes the component type stable across renders, across frames
 * showing the same figure, and across remounts.
 */
const COMPONENTS = new Map<string, ComponentType<VisualizationProps>>();

export function getVisualizationComponent(
  id: VisualizationId,
): ComponentType<VisualizationProps> | undefined {
  const cached = COMPONENTS.get(id);
  if (cached) return cached;

  const load = LOADERS[id];
  if (!load) return undefined;

  const component = lazy(load);
  COMPONENTS.set(id, component);
  return component;
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
