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

  // Phase 2 — Universe & Cosmology
  'expansion-grid': () => import('./renderers/ExpansionGrid'),
  'cooling-history': () => import('./renderers/CoolingHistory'),
  'cmb-fluctuations': () => import('./renderers/CmbFluctuations'),
  'rotation-curve': () => import('./renderers/RotationCurve'),
  'cosmic-composition': () => import('./renderers/CosmicComposition'),
  'expansion-history': () => import('./renderers/ExpansionHistory'),
  'observable-universe': () => import('./renderers/ObservableUniverse'),

  // Phase 3 — Gravity & Newton
  'inverse-square-law': () => import('./renderers/InverseSquareLaw'),
  'gravity-lab': () => import('./renderers/GravityLab'),
  'free-fall-lab': () => import('./renderers/FreeFallLab'),
  'surface-gravity-worlds': () => import('./renderers/SurfaceGravityWorlds'),
  'orbit-lab': () => import('./renderers/OrbitLab'),
  'escape-velocity-chart': () => import('./renderers/EscapeVelocityChart'),
  'tides-diagram': () => import('./renderers/TidesDiagram'),
  'gravity-well': () => import('./renderers/GravityWell'),
  'first-law-track': () => import('./renderers/FirstLawTrack'),
  'second-law-lab': () => import('./renderers/SecondLawLab'),
  'third-law-pairs': () => import('./renderers/ThirdLawPairs'),
  'newton-cannon': () => import('./renderers/NewtonCannon'),
  'moon-test': () => import('./renderers/MoonTest'),
  'mercury-precession': () => import('./renderers/MercuryPrecession'),

  // Phase 4 — Einstein & Relativity
  'light-clock': () => import('./renderers/LightClock'),
  'lorentz-factor': () => import('./renderers/LorentzFactor'),
  'simultaneity-train': () => import('./renderers/SimultaneityTrain'),
  'length-contraction': () => import('./renderers/LengthContraction'),
  'mass-energy': () => import('./renderers/MassEnergy'),
  'spacetime-diagram': () => import('./renderers/SpacetimeDiagram'),
  'equivalence-lift': () => import('./renderers/EquivalenceLift'),
  'spacetime-curvature': () => import('./renderers/SpacetimeCurvature'),
  'geodesic-sphere': () => import('./renderers/GeodesicSphere'),
  'gravitational-time-dilation': () => import('./renderers/GravitationalTimeDilation'),
  'gravitational-lensing': () => import('./renderers/GravitationalLensing'),
  'gr-orbit-precession': () => import('./renderers/GrOrbitPrecession'),
  'gravitational-wave': () => import('./renderers/GravitationalWave'),
  'schwarzschild-radius': () => import('./renderers/SchwarzschildRadius'),

  // Phase 5 — Black Holes
  'gravitational-collapse': () => import('./renderers/GravitationalCollapse'),
  'black-hole-anatomy': () => import('./renderers/BlackHoleAnatomy'),
  'escape-cone': () => import('./renderers/EscapeCone'),
  'infalling-clock': () => import('./renderers/InfallingClock'),
  'photon-orbits': () => import('./renderers/PhotonOrbits'),
  'black-hole-shadow': () => import('./renderers/BlackHoleShadow'),
  'accretion-disc': () => import('./renderers/AccretionDisc'),
  'relativistic-jet': () => import('./renderers/RelativisticJet'),
  'frame-dragging': () => import('./renderers/FrameDragging'),
  'tidal-stretching': () => import('./renderers/TidalStretching'),
  'black-hole-mass-scale': () => import('./renderers/BlackHoleMassScale'),
  'binary-inspiral': () => import('./renderers/BinaryInspiral'),
  'merger-waveform': () => import('./renderers/MergerWaveform'),
  'hawking-temperature': () => import('./renderers/HawkingTemperature'),

  // Phase 6 — Quantum Physics
  'blackbody-spectrum': () => import('./renderers/BlackbodySpectrum'),
  'photoelectric-effect': () => import('./renderers/PhotoelectricEffect'),
  'atomic-energy-levels': () => import('./renderers/AtomicEnergyLevels'),
  'double-slit-buildup': () => import('./renderers/DoubleSlitBuildup'),
  'decoherence-visibility': () => import('./renderers/DecoherenceVisibility'),
  'quantum-spin-superposition': () => import('./renderers/QuantumSpinSuperposition'),
  'wavepacket-uncertainty': () => import('./renderers/WavepacketUncertainty'),
  'quantum-harmonic-oscillator': () => import('./renderers/QuantumHarmonicOscillator'),
  'quantum-tunnelling': () => import('./renderers/QuantumTunnelling'),
  'entanglement-correlations': () => import('./renderers/EntanglementCorrelations'),
  'bell-test': () => import('./renderers/BellTest'),
  'atomic-orbitals': () => import('./renderers/AtomicOrbitals'),
  'energy-bands': () => import('./renderers/EnergyBands'),
  'field-excitations': () => import('./renderers/FieldExcitations'),
  'standard-model-chart': () => import('./renderers/StandardModelChart'),
  'quantum-vacuum-fluctuations': () => import('./renderers/QuantumVacuumFluctuations'),
  'planck-scale': () => import('./renderers/PlanckScale'),
  'string-vibrations': () => import('./renderers/StringVibrations'),
  'proper-time-paths': () => import('./renderers/ProperTimePaths'),
  'clock-comparison': () => import('./renderers/ClockComparison'),
  'primordial-fluctuations': () => import('./renderers/PrimordialFluctuations'),
  'interpretation-map': () => import('./renderers/InterpretationMap'),
  'quantum-scale-ladder': () => import('./renderers/QuantumScaleLadder'),
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
