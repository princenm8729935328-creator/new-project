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

  // Phase 5 — Stars & Galaxies
  //
  // Phase numbers are the canonical roadmap position, not the build order:
  // Black Holes was implemented before this section because it depends on
  // general relativity, which changed the order of work and nothing else.
  'hydrostatic-equilibrium': () => import('./renderers/HydrostaticEquilibrium'),
  'stellar-structure': () => import('./renderers/StellarStructure'),
  'molecular-cloud-collapse': () => import('./renderers/MolecularCloudCollapse'),
  'gravitational-heating': () => import('./renderers/GravitationalHeating'),
  'stellar-thermostat': () => import('./renderers/StellarThermostat'),
  'proton-proton-chain': () => import('./renderers/ProtonProtonChain'),
  'cno-cycle': () => import('./renderers/CnoCycle'),
  'mass-luminosity-relation': () => import('./renderers/MassLuminosityRelation'),
  'hr-diagram': () => import('./renderers/HrDiagram'),
  'stellar-evolution-tracks': () => import('./renderers/StellarEvolutionTracks'),
  'red-giant-expansion': () => import('./renderers/RedGiantExpansion'),
  'onion-shell-burning': () => import('./renderers/OnionShellBurning'),
  'binding-energy-curve': () => import('./renderers/BindingEnergyCurve'),
  'element-origins': () => import('./renderers/ElementOrigins'),
  'core-collapse': () => import('./renderers/CoreCollapse'),
  'remnant-outcomes': () => import('./renderers/RemnantOutcomes'),
  'neutron-star-density': () => import('./renderers/NeutronStarDensity'),
  'chandrasekhar-limit': () => import('./renderers/ChandrasekharLimit'),
  'chemical-enrichment': () => import('./renderers/ChemicalEnrichment'),
  'galaxy-assembly': () => import('./renderers/GalaxyAssembly'),
  'galaxy-types': () => import('./renderers/GalaxyTypes'),
  'spiral-structure': () => import('./renderers/SpiralStructure'),
  'galaxy-merger': () => import('./renderers/GalaxyMerger'),
  'star-formation-regions': () => import('./renderers/StarFormationRegions'),
  'galactic-feedback': () => import('./renderers/GalacticFeedback'),
  'milky-way-structure': () => import('./renderers/MilkyWayStructure'),
  'solar-neighbourhood': () => import('./renderers/SolarNeighbourhood'),
  'galactic-centre-orbits': () => import('./renderers/GalacticCentreOrbits'),
  'black-hole-galaxy-relation': () => import('./renderers/BlackHoleGalaxyRelation'),
  'atom-origins-journey': () => import('./renderers/AtomOriginsJourney'),
  'stellar-generations': () => import('./renderers/StellarGenerations'),
  'first-stars': () => import('./renderers/FirstStars'),
  'cosmic-chemical-history': () => import('./renderers/CosmicChemicalHistory'),
  'stellar-spectroscopy': () => import('./renderers/StellarSpectroscopy'),
  'stellar-parallax': () => import('./renderers/StellarParallax'),
  'distance-ladder': () => import('./renderers/DistanceLadder'),
  'stellar-temperature-colour': () => import('./renderers/StellarTemperatureColour'),
  'binary-star-masses': () => import('./renderers/BinaryStarMasses'),
  'doppler-redshift': () => import('./renderers/DopplerRedshift'),
  'spectrum-decoder': () => import('./renderers/SpectrumDecoder'),
  'stellar-lifetimes': () => import('./renderers/StellarLifetimes'),
  'observational-frontier': () => import('./renderers/ObservationalFrontier'),
  'stellar-uncertainties': () => import('./renderers/StellarUncertainties'),
  'galaxy-unknowns': () => import('./renderers/GalaxyUnknowns'),

  // Phase 7 — Earth, and the Origin & Evolution of Life.
  // Phase numbers are the canonical roadmap position, not build order.
  'allele-fixation': () => import('./renderers/AlleleFixation'),
  'alternative-states': () => import('./renderers/AlternativeStates'),
  'animals-reshape': () => import('./renderers/AnimalsReshape'),
  'arms-race': () => import('./renderers/ArmsRace'),
  'atmosphere-evolution': () => import('./renderers/AtmosphereEvolution'),
  'autocatalytic-network': () => import('./renderers/AutocatalyticNetwork'),
  'biodiversity-levels': () => import('./renderers/BiodiversityLevels'),
  'biological-carbon-cycle': () => import('./renderers/BiologicalCarbonCycle'),
  'biomass-pyramid': () => import('./renderers/BiomassPyramid'),
  'biosphere-biomass': () => import('./renderers/BiosphereBiomass'),
  'brain-energy-budget': () => import('./renderers/BrainEnergyBudget'),
  'cambrian-explosion': () => import('./renderers/CambrianExplosion'),
  'carbon-cycle-thermostat': () => import('./renderers/CarbonCycleThermostat'),
  'cell-complexity-scaling': () => import('./renderers/CellComplexityScaling'),
  'cell-cooperation': () => import('./renderers/CellCooperation'),
  'cell-specialisation': () => import('./renderers/CellSpecialisation'),
  'cellular-energy': () => import('./renderers/CellularEnergy'),
  'chemistry-to-biology': () => import('./renderers/ChemistryToBiology'),
  'climate-energy-balance': () => import('./renderers/ClimateEnergyBalance'),
  'coevolution-matching': () => import('./renderers/CoevolutionMatching'),
  'competition-outcomes': () => import('./renderers/CompetitionOutcomes'),
  'complexity-costs': () => import('./renderers/ComplexityCosts'),
  'complexity-timeline': () => import('./renderers/ComplexityTimeline'),
  'consciousness-problem': () => import('./renderers/ConsciousnessProblem'),
  'continental-greening': () => import('./renderers/ContinentalGreening'),
  'convergent-evolution': () => import('./renderers/ConvergentEvolution'),
  'cooperation-payoff': () => import('./renderers/CooperationPayoff'),
  'cosmic-chain': () => import('./renderers/CosmicChain'),
  'diversity-radiation': () => import('./renderers/DiversityRadiation'),
  'diversity-turnover': () => import('./renderers/DiversityTurnover'),
  'diversity-vs-complexity': () => import('./renderers/DiversityVsComplexity'),
  'earliest-life-evidence': () => import('./renderers/EarliestLifeEvidence'),
  'early-earth-cooling': () => import('./renderers/EarlyEarthCooling'),
  'earth-accretion': () => import('./renderers/EarthAccretion'),
  'earth-interior': () => import('./renderers/EarthInterior'),
  'ecosystem-flows': () => import('./renderers/EcosystemFlows'),
  endosymbiosis: () => import('./renderers/Endosymbiosis'),
  'energy-pyramid': () => import('./renderers/EnergyPyramid'),
  'eukaryote-origin': () => import('./renderers/EukaryoteOrigin'),
  'extinction-record': () => import('./renderers/ExtinctionRecord'),
  'extinction-recovery': () => import('./renderers/ExtinctionRecovery'),
  'extinction-vortex': () => import('./renderers/ExtinctionVortex'),
  'feedback-loops': () => import('./renderers/FeedbackLoops'),
  'first-cell-anatomy': () => import('./renderers/FirstCellAnatomy'),
  'fitness-is-context': () => import('./renderers/FitnessIsContext'),
  'fitness-landscape': () => import('./renderers/FitnessLandscape'),
  'food-web': () => import('./renderers/FoodWeb'),
  'gaia-daisyworld': () => import('./renderers/GaiaDaisyworld'),
  'humans-on-the-tree': () => import('./renderers/HumansOnTheTree'),
  'impact-winter': () => import('./renderers/ImpactWinter'),
  'intelligence-drivers': () => import('./renderers/IntelligenceDrivers'),
  'interaction-network': () => import('./renderers/InteractionNetwork'),
  'is-and-ought': () => import('./renderers/IsAndOught'),
  'keystone-removal': () => import('./renderers/KeystoneRemoval'),
  'learning-vs-instinct': () => import('./renderers/LearningVsInstinct'),
  'life-environment-feedback': () => import('./renderers/LifeEnvironmentFeedback'),
  'life-history-tradeoffs': () => import('./renderers/LifeHistoryTradeoffs'),
  'life-nonlife-gradient': () => import('./renderers/LifeNonlifeGradient'),
  'limits-of-life': () => import('./renderers/LimitsOfLife'),
  'luca-timeline-gap': () => import('./renderers/LucaTimelineGap'),
  'magnetic-field': () => import('./renderers/MagneticField'),
  'major-transitions': () => import('./renderers/MajorTransitions'),
  'membrane-self-assembly': () => import('./renderers/MembraneSelfAssembly'),
  'mesozoic-timeline': () => import('./renderers/MesozoicTimeline'),
  'moon-forming-impact': () => import('./renderers/MoonFormingImpact'),
  'move-to-land': () => import('./renderers/MoveToLand'),
  multicellularity: () => import('./renderers/Multicellularity'),
  'mutualism-stability': () => import('./renderers/MutualismStability'),
  'natural-selection-lab': () => import('./renderers/NaturalSelectionLab'),
  'nested-similarity': () => import('./renderers/NestedSimilarity'),
  'niche-construction': () => import('./renderers/NicheConstruction'),
  'niche-partitioning': () => import('./renderers/NichePartitioning'),
  'niche-space': () => import('./renderers/NicheSpace'),
  'order-from-flow': () => import('./renderers/OrderFromFlow'),
  'origin-settings': () => import('./renderers/OriginSettings'),
  'oxygen-tolerance': () => import('./renderers/OxygenTolerance'),
  'passive-vs-driven-trend': () => import('./renderers/PassiveVsDrivenTrend'),
  'persistence-through-crises': () => import('./renderers/PersistenceThroughCrises'),
  photosynthesis: () => import('./renderers/Photosynthesis'),
  'planetary-oxygen-budget': () => import('./renderers/PlanetaryOxygenBudget'),
  'plate-tectonics': () => import('./renderers/PlateTectonics'),
  'population-shift': () => import('./renderers/PopulationShift'),
  'prebiotic-chemistry': () => import('./renderers/PrebioticChemistry'),
  'prebiotic-environments': () => import('./renderers/PrebioticEnvironments'),
  'precambrian-timeline': () => import('./renderers/PrecambrianTimeline'),
  'predator-prey-cycles': () => import('./renderers/PredatorPreyCycles'),
  'rarity-advantage': () => import('./renderers/RarityAdvantage'),
  'reductive-evolution': () => import('./renderers/ReductiveEvolution'),
  'replay-the-tape': () => import('./renderers/ReplayTheTape'),
  'rna-world': () => import('./renderers/RnaWorld'),
  'selection-ingredients': () => import('./renderers/SelectionIngredients'),
  'selection-not-choice': () => import('./renderers/SelectionNotChoice'),
  'snowball-earth': () => import('./renderers/SnowballEarth'),
  'social-complexity': () => import('./renderers/SocialComplexity'),
  'success-metrics': () => import('./renderers/SuccessMetrics'),
  'supercontinent-cycle': () => import('./renderers/SupercontinentCycle'),
  'symbiosis-spectrum': () => import('./renderers/SymbiosisSpectrum'),
  'teleonomy-vs-teleology': () => import('./renderers/TeleonomyVsTeleology'),
  'template-replication': () => import('./renderers/TemplateReplication'),
  'tree-not-ladder': () => import('./renderers/TreeNotLadder'),
  'tree-of-life': () => import('./renderers/TreeOfLife'),
  'two-kinds-of-why': () => import('./renderers/TwoKindsOfWhy'),
  'virulence-tradeoff': () => import('./renderers/VirulenceTradeoff'),
  'water-origin-isotopes': () => import('./renderers/WaterOriginIsotopes'),
  'what-is-life-criteria': () => import('./renderers/WhatIsLifeCriteria'),

  // Phase 8 — Human Evolution, Scientific Lens.
  'nested-ancestry': () => import('./renderers/NestedAncestry'),
  'ape-relationships': () => import('./renderers/ApeRelationships'),
  'divergence-dating': () => import('./renderers/DivergenceDating'),
  'cousins-not-ancestors': () => import('./renderers/CousinsNotAncestors'),
  'reading-a-tree': () => import('./renderers/ReadingATree'),
  'genome-similarity': () => import('./renderers/GenomeSimilarity'),
  'shared-errors': () => import('./renderers/SharedErrors'),
  'bipedal-balance': () => import('./renderers/BipedalBalance'),
  'skeleton-comparison': () => import('./renderers/SkeletonComparison'),
  'bipedalism-hypotheses': () => import('./renderers/BipedalismHypotheses'),
  'mosaic-body': () => import('./renderers/MosaicBody'),
  'hand-proportions': () => import('./renderers/HandProportions'),
  'cooling-systems': () => import('./renderers/CoolingSystems'),
  'diet-evidence': () => import('./renderers/DietEvidence'),
  'birth-canal': () => import('./renderers/BirthCanal'),
  'growth-schedules': () => import('./renderers/GrowthSchedules'),
  'body-archive': () => import('./renderers/BodyArchive'),
  'fossil-filter': () => import('./renderers/FossilFilter'),
  'earliest-candidates': () => import('./renderers/EarliestCandidates'),
  'brain-before-body': () => import('./renderers/BrainBeforeBody'),
  'lucy-completeness': () => import('./renderers/LucyCompleteness'),
  'robust-skull': () => import('./renderers/RobustSkull'),
  'genus-boundary': () => import('./renderers/GenusBoundary'),
  'erectus-body': () => import('./renderers/ErectusBody'),
  'first-dispersal': () => import('./renderers/FirstDispersal'),
  'tree-uncertainty': () => import('./renderers/TreeUncertainty'),
  'brain-energy-cost': () => import('./renderers/BrainEnergyCost'),
  'brain-size-record': () => import('./renderers/BrainSizeRecord'),
  'brain-shape': () => import('./renderers/BrainShape'),
  'brain-hypotheses': () => import('./renderers/BrainHypotheses'),
  'cognition-battery': () => import('./renderers/CognitionBattery'),
  'transmission-fidelity': () => import('./renderers/TransmissionFidelity'),
  'language-evidence': () => import('./renderers/LanguageEvidence'),
  'symbolic-record': () => import('./renderers/SymbolicRecord'),
  'knapping-mechanics': () => import('./renderers/KnappingMechanics'),
  'technological-stasis': () => import('./renderers/TechnologicalStasis'),
  'toolmaking-cognition': () => import('./renderers/ToolmakingCognition'),
  'fire-evidence': () => import('./renderers/FireEvidence'),
  'cooking-energy': () => import('./renderers/CookingEnergy'),
  'behaviour-feedback': () => import('./renderers/BehaviourFeedback'),
  'cultural-ratchet': () => import('./renderers/CulturalRatchet'),
  'lactase-coevolution': () => import('./renderers/LactaseCoevolution'),
  'sapiens-origins': () => import('./renderers/SapiensOrigins'),
  'neanderthal-profile': () => import('./renderers/NeanderthalProfile'),
  'denisovan-discovery': () => import('./renderers/DenisovanDiscovery'),
  'introgression-map': () => import('./renderers/IntrogressionMap'),
  'ancient-dna-damage': () => import('./renderers/AncientDnaDamage'),
  'sapiens-dispersal': () => import('./renderers/SapiensDispersal'),
  'peopling-timeline': () => import('./renderers/PeoplingTimeline'),
  'last-humans-standing': () => import('./renderers/LastHumansStanding'),
  'bead-inference': () => import('./renderers/BeadInference'),
  'cave-art-record': () => import('./renderers/CaveArtRecord'),
  'burial-criteria': () => import('./renderers/BurialCriteria'),
  'exchange-distance': () => import('./renderers/ExchangeDistance'),
  'farming-origins': () => import('./renderers/FarmingOrigins'),
  'domestication-selection': () => import('./renderers/DomesticationSelection'),
  'farming-health': () => import('./renderers/FarmingHealth'),
  'ancient-selection': () => import('./renderers/AncientSelection'),
  'selection-components': () => import('./renderers/SelectionComponents'),
  'measured-selection': () => import('./renderers/MeasuredSelection'),
  'altitude-adaptation': () => import('./renderers/AltitudeAdaptation'),
  'variation-structure': () => import('./renderers/VariationStructure'),
  'changing-pressures': () => import('./renderers/ChangingPressures'),
  'evolutionary-futures': () => import('./renderers/EvolutionaryFutures'),
  'the-whole-chain': () => import('./renderers/TheWholeChain'),

  // Phase 8 — Human Evolution, Philosophical Lens.
  'appearance-and-reality': () => import('./renderers/AppearanceAndReality'),
  'platos-cave': () => import('./renderers/PlatosCave'),
  'doubt-ladder': () => import('./renderers/DoubtLadder'),
  'induction-gap': () => import('./renderers/InductionGap'),
  'kants-lens': () => import('./renderers/KantsLens'),
  'identity-over-time': () => import('./renderers/IdentityOverTime'),
  'cogito-structure': () => import('./renderers/CogitoStructure'),
  'memory-chain': () => import('./renderers/MemoryChain'),
  'bundle-search': () => import('./renderers/BundleSearch'),
  'teletransporter-branches': () => import('./renderers/TeletransporterBranches'),
  'anatta-aggregates': () => import('./renderers/AnattaAggregates'),
  'sources-of-a-self': () => import('./renderers/SourcesOfASelf'),
  'belief-inheritance': () => import('./renderers/BeliefInheritance'),
  'authorship-degrees': () => import('./renderers/AuthorshipDegrees'),
  'determinism-branching': () => import('./renderers/DeterminismBranching'),
  'free-will-positions': () => import('./renderers/FreeWillPositions'),
  'randomness-problem': () => import('./renderers/RandomnessProblem'),
  'compatibilist-conditions': () => import('./renderers/CompatibilistConditions'),
  'readiness-potential-interpretations': () =>
    import('./renderers/ReadinessPotentialInterpretations'),
  'basic-argument-regress': () => import('./renderers/BasicArgumentRegress'),
  'moral-theory-lenses': () => import('./renderers/MoralTheoryLenses'),
  'universalizability-test': () => import('./renderers/UniversalizabilityTest'),
  'virtue-mean': () => import('./renderers/VirtueMean'),
  'metaethics-map': () => import('./renderers/MetaethicsMap'),
  'genealogy-of-values': () => import('./renderers/GenealogyOfValues'),
  'is-ought-gap': () => import('./renderers/IsOughtGap'),
  'open-question-test': () => import('./renderers/OpenQuestionTest'),
  'situation-vs-character': () => import('./renderers/SituationVsCharacter'),
  'moral-luck-cases': () => import('./renderers/MoralLuckCases'),
  'punishment-justifications': () => import('./renderers/PunishmentJustifications'),
  'responsibility-conditions': () => import('./renderers/ResponsibilityConditions'),
  'hard-problem-gap': () => import('./renderers/HardProblemGap'),
  'marys-room': () => import('./renderers/MarysRoom'),
  'other-minds-inference': () => import('./renderers/OtherMindsInference'),
  'consciousness-positions': () => import('./renderers/ConsciousnessPositions'),
  'this-person-question': () => import('./renderers/ThisPersonQuestion'),
  'meaning-views': () => import('./renderers/MeaningViews'),
  'meaning-sources': () => import('./renderers/MeaningSources'),
  'how-to-live-traditions': () => import('./renderers/HowToLiveTraditions'),
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
