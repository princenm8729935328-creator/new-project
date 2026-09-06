/**
 * Visualization descriptors.
 *
 * A visualization is registered as data — never imported directly by a topic —
 * so that the content layer stays free of React and the renderer can be
 * code-split, swapped, or downgraded on a weak device without touching content.
 *
 * The `fidelity` field is mandatory and is rendered as a badge on every figure.
 * It is the mechanism that keeps the platform's promise that an artistic
 * impression is never passed off as a photograph of reality.
 */
import type { ReferenceId } from './reference';

export type VisualizationId = string & { readonly __brand: 'VisualizationId' };

export function visualizationId(id: string): VisualizationId {
  return id as VisualizationId;
}

export const VISUALIZATION_FIDELITIES = [
  'data-driven',
  'to-scale',
  'reconstruction',
  'schematic',
  'artistic',
] as const;

export type VisualizationFidelity = (typeof VISUALIZATION_FIDELITIES)[number];

export interface FidelityMeta {
  readonly id: VisualizationFidelity;
  readonly label: string;
  readonly definition: string;
}

export const FIDELITY_META: Readonly<Record<VisualizationFidelity, FidelityMeta>> = {
  'data-driven': {
    id: 'data-driven',
    label: 'Data-driven',
    definition: 'Drawn from measurements or from a published model, cited below.',
  },
  'to-scale': {
    id: 'to-scale',
    label: 'To scale',
    definition: 'Sizes, distances or times are in correct proportion, as stated in the caption.',
  },
  reconstruction: {
    id: 'reconstruction',
    label: 'Scientific reconstruction',
    definition:
      'Built from evidence, but the evidence is incomplete. It shows the best current interpretation, and the parts that are inferred rather than observed are named in the caption.',
  },
  schematic: {
    id: 'schematic',
    label: 'Conceptual diagram',
    definition:
      'A diagram of how something works. Proportions are chosen for clarity, not accuracy.',
  },
  artistic: {
    id: 'artistic',
    label: 'Artistic impression',
    definition:
      'An illustration. It is not a photograph and not a simulation — it shows an idea, not an appearance.',
  },
};

/** Rendering technology, used to pick a loading strategy and a fallback. */
export type VisualizationRuntime = 'svg' | 'canvas2d' | 'webgl' | 'css';

export interface VisualizationSpec {
  readonly id: VisualizationId;
  readonly title: string;
  readonly fidelity: VisualizationFidelity;
  readonly runtime: VisualizationRuntime;
  /**
   * Always shown under the figure. Says what is being drawn and, when the
   * fidelity is anything but `data-driven`, what has been distorted and why.
   */
  readonly caption: string;
  /** Text alternative for screen readers, and the fallback when the runtime is unavailable. */
  readonly description: string;
  readonly references?: readonly ReferenceId[];
  /**
   * Minimum quality tier at which this runs. On a device below it, the frame
   * shows a static poster plus `description` instead of animating.
   */
  readonly minimumQuality?: 'low' | 'medium' | 'high';
  /** Whether the reader can manipulate it, as opposed to watching it. */
  readonly interactive: boolean;
  /**
   * How the frame sizes the figure.
   *
   * `stage` (the default) gives a fixed-aspect viewport — right for animated
   * scenes, which have no natural height. `flow` lets the figure set its own
   * height, which is what a chart with twenty labelled rows needs; cropping one
   * into a 16:10 box would make it unreadable on a phone.
   */
  readonly layout?: 'stage' | 'flow';
}
