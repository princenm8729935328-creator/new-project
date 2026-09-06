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
];
