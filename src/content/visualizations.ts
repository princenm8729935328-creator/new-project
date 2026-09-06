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
 * The captions below do the real work of the platform's third commitment. Each
 * one names what has been distorted and why, so no figure can be mistaken for a
 * photograph or a simulation.
 */
import { referenceId } from './schema/reference';
import { visualizationId, type VisualizationSpec } from './schema/visualization';

export const VISUALIZATIONS: readonly VisualizationSpec[] = [
  {
    id: visualizationId('primordial-plasma'),
    title: 'From opaque plasma to transparent gas',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: false,
    caption:
      'A conceptual diagram of recombination, not a picture of the early Universe. It shows one thing only: while electrons are free, light is scattered constantly and cannot cross the frame; once electrons bind into atoms, light travels freely. Particle sizes, spacings and speeds are chosen to be visible — real densities and scattering rates are nothing like this, and only two particle types are drawn.',
    description:
      'An animated diagram. In the first phase, a dense field of blue electrons and yellow nuclei fills the frame while a single photon bounces randomly and makes almost no progress. As the frame cools, electrons pair with nuclei to form neutral atoms drawn with faint shells, and the photon then travels straight across the frame without being deflected. The background glow fades from hot orange to near-black as this happens.',
    minimumQuality: 'low',
  },
  {
    id: visualizationId('structure-formation'),
    title: 'Gravity builds the cosmic web',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: false,
    caption:
      'A conceptual diagram of structure formation. It is generated to resemble the output of cosmological simulations, but it is not one: no gravitational physics is being solved and no real data is plotted. The timescale is compressed from hundreds of millions of years into seconds, and the contrast between dense and empty regions is exaggerated so the filaments are visible at this size.',
    description:
      'An animated diagram beginning with points spread almost evenly across the frame, representing the nearly uniform early Universe. Over time the points drift together along thin filaments into dense knots, leaving large empty voids between them. The knots then brighten one by one with warm halos, representing the first stars and galaxies igniting.',
    minimumQuality: 'low',
  },
  {
    id: visualizationId('protoplanetary-disk'),
    title: 'A disc of dust becomes planets',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: false,
    caption:
      'A conceptual diagram of planet formation. Orbital speeds follow the correct relationship with distance — inner material orbits faster — but everything else is illustrative. The planets are drawn enormously oversized relative to their orbits, gaps open in seconds rather than millions of years, and no accretion physics is simulated.',
    description:
      'An animated diagram viewed at a shallow angle. A bright young star sits at the centre of a flattened, rotating disc of dust grains. Inner grains circle faster than outer ones. Over time, four bodies grow along the disc and sweep clear gaps around their orbits, leaving distinct rings of remaining dust.',
    minimumQuality: 'low',
  },
  {
    id: visualizationId('oxygen-history'),
    title: 'Oxygen in the atmosphere through Earth history',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: false,
    caption:
      'Atmospheric oxygen over the last four billion years, plotted on a logarithmic scale as a fraction of the present-day level. The shaded band is the range of published estimates, not a single curve — the geochemical evidence constrains oxygen to within orders of magnitude, not to a precise value, and drawing one line would imply certainty the data does not support. Redrawn from the reconstruction in Lyons, Reinhard and Planavsky (2014).',
    description:
      'A chart with time running from four billion years ago on the left to the present on the right, and oxygen concentration on a logarithmic vertical axis. Oxygen stays around a millionth of present levels for the first one and a half billion years, then rises abruptly by several orders of magnitude at the Great Oxidation Event 2.4 billion years ago. It then plateaus at roughly one percent of present levels for well over a billion years before rising again around 800 to 540 million years ago, reaching approximately modern levels by the time of the Cambrian.',
    references: [referenceId('lyons-2014-oxygen-rise')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('hominin-tree'),
    title: 'Hominin species through time',
    fidelity: 'reconstruction',
    runtime: 'svg',
    interactive: false,
    caption:
      'Each bar is one species’ approximate known time range from the fossil record; bars that overlap vertically were alive at the same time. Deliberately, no ancestor–descendant lines are drawn between species: the date ranges are reasonably well established, but the branching relationships are contested for almost every node, and drawing connecting lines would present one interpretation as settled fact. Ranges are rounded, and every one of them may change as new fossils are found. The horizontal axis uses a square-root scale so the last million years stays readable.',
    description:
      'A chart of twenty-one hominin species plotted against time from 7.5 million years ago to the present. The bars overlap extensively rather than forming a sequence. Around two million years ago, at least six species were alive simultaneously, including robust Paranthropus forms alongside early Homo. Homo erectus spans nearly two million years. In the last few hundred thousand years, Homo naledi, Homo floresiensis, Homo luzonensis, Neanderthals, Denisovans and Homo sapiens all overlap. Only the Homo sapiens bar reaches the present; every other bar stops.',
    references: [
      referenceId('berger-2015-homo-naledi'),
      referenceId('brunet-2002-sahelanthropus'),
      referenceId('villmoare-2015-early-homo'),
      referenceId('prufer-2014-altai-neanderthal'),
      referenceId('hublin-2017-jebel-irhoud'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('deep-time-scale'),
    title: 'The whole of cosmic time as one year',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: false,
    caption:
      'The age of the Universe compressed into a single calendar year, with each milestone placed by simple proportion from the dates cited elsewhere on this platform. This is the one figure here drawn on a strictly linear time axis, and it is included as a corrective: it shows what the timeline’s own deliberately warped axis has to hide in order to be readable.',
    description:
      'A calendar-year bar with milestones marked along it. The beginning of the Universe is 1 January. The Solar System forms in early September. The first animals appear in mid-December. Dinosaurs appear on 25 December and the asteroid strikes on 30 December. Homo sapiens appears at about 23:48 on 31 December, and farming begins in the final 25 seconds before midnight.',
    references: [
      referenceId('planck-2018-vi'),
      referenceId('bouvier-wadhwa-2010-solar-system-age'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // ---- Phase 2: Universe & Cosmology --------------------------------------

  {
    id: visualizationId('expansion-grid'),
    title: 'Space expanding, and light stretching with it',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of metric expansion. Drag the slider to change the scale factor. What is meaningful is the proportionality: every separation grows by the same factor, no galaxy is at the centre, and the light wave is stretched by exactly that factor. Galaxy sizes, the flat two-dimensional grid, and the number of galaxies are all illustrative — real galaxies are vastly smaller relative to their separations, and bound systems like galaxies do not expand at all.',
    description:
      'An interactive diagram showing a grid of galaxies. As the scale factor increases, every galaxy moves away from every other, with more distant pairs separating faster, while the grid lines stretch uniformly. No galaxy is at the centre. Below the grid, a light wave travelling from one galaxy to another is stretched in proportion to the same factor, its colour shifting from blue towards red, and the corresponding redshift value is displayed.',
    minimumQuality: 'low',
  },
  {
    id: visualizationId('cooling-history'),
    title: 'How the Universe cooled',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Temperature against time since the beginning, both on logarithmic scales. The curve is computed, not drawn by hand: it uses the radiation-era relation T ∝ t^−1/2 anchored to the measured present-day temperature of 2.7255 K and the measured age of the Universe, with the matter and dark-energy eras handled through T = T₀(1+z). Tap an epoch to see what was happening. The epoch boundaries are approximate — they are gradual transitions, not sharp events.',
    description:
      'A logarithmic chart of temperature falling from about 10^32 kelvin at the Planck time to 2.7 kelvin today, spanning more than 60 orders of magnitude in time. Marked epochs along the curve include inflation, the quark era, nucleosynthesis at about 10^9 kelvin and a few minutes, recombination at about 3000 kelvin and 380000 years, the first stars, and the present day. The curve falls steadily with no discontinuities.',
    references: [referenceId('fixsen-2009-cmb-temperature'), referenceId('planck-2018-vi')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('cmb-fluctuations'),
    title: 'The ripples in the microwave background',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram, not a map of the real sky. The real temperature variations are about one part in 100,000 — utterly invisible without amplification, which is why every published CMB image is colour-amplified too. Drag the slider to amplify from a uniform grey to the exaggerated contrast used in press images. The pattern here is generated with a characteristic angular scale of about one degree to resemble the real statistics; it is not Planck data and no individual spot corresponds to anything real.',
    description:
      'An interactive diagram of a patch of sky. At zero amplification it is a featureless grey, showing how uniform the real cosmic microwave background is. As the amplification slider is raised, faint blotches emerge and then become a familiar pattern of red and blue spots roughly one degree across, matching the appearance of published microwave background maps. A readout states the temperature range being displayed at the current amplification.',
    minimumQuality: 'low',
  },
  {
    id: visualizationId('rotation-curve'),
    title: 'Why galaxies need dark matter',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram reproducing the qualitative result that made dark matter unavoidable, not a plot of a specific galaxy’s measurements. The dashed curve is what Newtonian gravity predicts from visible matter alone, falling off as one over the square root of radius. The solid curve is the flat behaviour actually observed in spiral galaxies. Toggle the halo to see the contribution needed to reconcile them. Axis values are illustrative and typical of a large spiral rather than measured from one object.',
    description:
      'A chart of orbital speed against distance from a galaxy’s centre. The prediction from visible matter alone rises then falls away with distance, like planets in a solar system. The observed curve rises and then stays flat out to the edge of the plot, far above the prediction. A toggle adds a dark-matter halo contribution, which rises with radius and brings the predicted curve up to match the observed flat one.',
    references: [referenceId('rubin-ford-1970'), referenceId('bertone-hooper-2018-history')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('cosmic-composition'),
    title: 'What the Universe is made of',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: false,
    caption:
      'The present-day energy budget of the Universe from the Planck 2018 base-ΛCDM fit: dark energy 68.9%, dark matter 26.2%, ordinary matter 4.9%. These are measured values with quoted uncertainties, not estimates. Note what the chart is really saying: everything ever observed with a telescope, in any wavelength, is the smallest slice.',
    description:
      'A proportional bar showing the composition of the Universe. Dark energy occupies 68.9 percent, dark matter 26.2 percent, and ordinary matter 4.9 percent. Within the ordinary-matter slice, a further breakdown notes that stars account for only a small fraction of even that, most of it being diffuse intergalactic gas.',
    references: [referenceId('planck-2018-vi')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('expansion-history'),
    title: 'Slowing down, then speeding up',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The relative size of the Universe against time, computed by numerically integrating the Friedmann equation with the Planck 2018 parameters (Ω_m = 0.315, Ω_Λ = 0.685, H₀ = 67.4 km/s/Mpc). The comparison curve is the same integration with the dark-energy term removed and the matter density renormalised to a flat universe, holding the present-day expansion rate fixed. It reaches today’s size in only about 9.7 billion years — younger than the oldest known stars, which is one of the reasons a cosmological constant was taken seriously before the supernova results. The inflection point, where the expansion stops decelerating and begins accelerating, is calculated rather than drawn.',
    description:
      'A chart of the scale factor of the Universe against time in billions of years. The curve starts at zero, rises steeply, and bends downward for the first several billion years as gravity slows the expansion. Around six billion years ago the curve inflects and begins curving upward as the expansion accelerates. A dashed comparison curve computed without dark energy rises faster at first and reaches today’s size after only 9.7 billion years, then flattens and is overtaken by the real curve. The present day is marked at 13.8 billion years.',
    references: [referenceId('planck-2018-vi'), referenceId('brout-2022-pantheon-plus')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('observable-universe'),
    title: 'The observable Universe, and everything inside it',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: false,
    caption:
      'Nested scales on a logarithmic radial axis, from the Earth to the edge of the observable Universe at 46.5 billion light-years. The distances are real and cited; the radial scale is logarithmic, so each ring outward is ten times further than the last — on a linear scale everything inside the outermost two rings would be invisible. The outer boundary is a horizon, not a wall: it marks how far light has had time to travel, not an edge to the Universe.',
    description:
      'Concentric rings on a logarithmic scale showing, from the centre outward: the Earth, the Solar System, the nearest star at 4.2 light-years, the Milky Way at 100000 light-years across, the Andromeda galaxy at 2.5 million light-years, the Virgo Supercluster, the most distant galaxy confirmed by the James Webb Space Telescope, and finally the edge of the observable Universe at 46.5 billion light-years. A note states that the Universe beyond that boundary is not known to end.',
    references: [referenceId('gott-2005-map-of-the-universe'), referenceId('planck-2018-vi')],
    minimumQuality: 'low',
    layout: 'flow',
  },
];
