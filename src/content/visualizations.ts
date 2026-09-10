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
    // Sources added when Phase 5 began reusing this figure; the caption and
    // description are exactly as their author left them.
    references: [
      referenceId('andrews-2018-dsharp'),
      referenceId('drazkowska-2023-planet-formation'),
    ],
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

  // ---- Phase 3: Gravity & Newton ------------------------------------------

  {
    id: visualizationId('inverse-square-law'),
    title: 'Why distance is squared',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram of the geometric reason for the inverse square. The same fixed number of lines leaves the mass in every direction; at twice the distance they are spread over four times the area, so the number crossing any fixed patch falls to a quarter. Drag the distance slider and read the force off the curve. The lines are a bookkeeping device, not a physical object — nothing is actually emitted, and the diagram is two-dimensional while the real spreading is over a sphere.',
    description:
      'An interactive diagram in two halves. On the left, lines radiate from a central mass and pass through nested square patches at one, two and three units of distance; the same lines that fill one patch at distance one are spread across four patches at distance two and nine at distance three. On the right, a curve of force against distance falls steeply and then flattens, following one over distance squared, with a marker that moves as the distance slider is dragged. A readout states the force as a fraction of its value at the reference distance: one quarter at double the distance, one ninth at triple.',
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('gravity-lab'),
    title: 'Gravity lab: two masses, one distance',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'An interactive calculator and diagram. The force displayed is computed live from F = G·m₁·m₂ / r² using the CODATA 2018 value of G — it is arithmetic, not a simulation, and no motion is being modelled. The preset pairs marked “measured” use published masses and separations for real bodies; the presets marked “illustrative” are everyday objects chosen to make a point about scale, not measurements of anything. The two circles are drawn at sizes that keep both visible and are not to scale with each other or with the separation.',
    description:
      'An interactive diagram of two bodies separated by an adjustable distance, with sliders for each mass and for the separation, and preset buttons for the Earth and Moon, the Sun and Earth, the Earth and a person standing on it, and two people standing a metre apart. The gravitational force between them is displayed in newtons and updates immediately as any slider moves. An arrow drawn between the bodies changes thickness with the force. The readout also shows how the force compares to the previous setting, making explicit that doubling one mass doubles the force while doubling the distance quarters it.',
    references: [referenceId('codata-2018'), referenceId('nasa-planetary-factsheet')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('free-fall-lab'),
    title: 'Do heavy things fall faster?',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'An interactive drop test. With air resistance switched off, both objects follow s = ½gt² with g = 9.81 m/s² and land together regardless of mass — that part is exact Newtonian mechanics. With air resistance on, a simple quadratic drag model is integrated numerically; the drag coefficients and areas are illustrative values chosen to make the effect visible over a short drop, not measurements of real objects. Timings shown are model output, not stopwatch results.',
    description:
      'An interactive diagram of two objects released side by side from the top of a frame: a heavy compact ball and a light broad feather. With air resistance switched off, both accelerate identically and strike the ground at the same instant, and a timer confirms the times are equal. With air resistance switched on, the feather quickly reaches a slow steady speed and drifts down long after the ball has landed. Sliders change each object’s mass; with drag off, changing the masses makes no difference to the fall at all.',
    minimumQuality: 'low',
  },
  {
    id: visualizationId('surface-gravity-worlds'),
    title: 'What you would weigh elsewhere',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Measured surface gravity for nine bodies, plotted to scale against Earth’s. Values are the published surface accelerations from the NASA planetary fact sheet; for the gas giants and the Sun the figure is the acceleration at a defined reference level, not a solid surface anyone could stand on. Drag the mass slider to convert to a weight in newtons — your mass is identical everywhere on the chart and only the weight changes, which is the entire point of the figure.',
    description:
      'A horizontal bar chart of surface gravity for the Sun, Jupiter, Neptune, Earth, Venus, Mars, Mercury, the Moon and Ceres, with Earth marked at 9.80 metres per second squared. The Sun’s bar at 274 is far off the scale of the rest and is drawn clipped with its value labelled. The Moon sits at 1.62, about one sixth of Earth, and Ceres at 0.27, about one thirty-sixth. A slider sets a body mass, and each bar is labelled with the weight that mass would register there, while a note states that the mass itself does not change.',
    references: [referenceId('nasa-planetary-factsheet')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('orbit-lab'),
    title: 'Orbit lab: velocity, mass, distance',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A two-body sketch, and deliberately not more than that. One massless test particle moves under the gravity of a single fixed central mass, integrated with a fixed-step velocity-Verlet scheme in two dimensions. There is no second body pulling back, no third body, no atmosphere, no radiation pressure, no relativity, and no rotation of the central body. Within those assumptions the trajectory shapes and the bound-versus-escape boundary are computed correctly from the specific orbital energy, so the classification shown is real physics; the sizes of the bodies and the timescale are not to scale.',
    description:
      'An interactive orbital sandbox. A central body sits at the middle of the frame and a small craft is launched sideways from an adjustable starting distance with an adjustable speed. Sliders control launch speed, the central body’s mass and the starting distance. At low speeds the craft falls inward and strikes the surface; at a particular speed the path is a circle; between and above that it traces ellipses of increasing size; and once the speed passes the square root of two times circular speed the path opens into a hyperbola and never returns. A readout names the trajectory type and reports the specific orbital energy, negative for bound orbits, zero at the escape boundary and positive for escape.',
    references: [referenceId('vallado-2013-astrodynamics')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('escape-velocity-chart'),
    title: 'Escape velocity, and what changes it',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Escape velocities computed from the published masses and radii of each body using v = √(2GM/r), with G from CODATA 2018. The bars are therefore calculated values rather than direct measurements, but every input is measured and cited. The bar lengths use a logarithmic scale, because the range from Ceres to the Sun is a factor of about 1,200 and a linear chart would leave six of the nine bars invisible. Select a body to see its mass and radius and how the two combine. Note what the formula does not contain: the mass of the escaping object appears nowhere, so a pebble and a spacecraft need the same speed.',
    description:
      'A bar chart of escape velocity for the Sun, Jupiter, Neptune, Earth, Venus, Mars, Mercury, the Moon and Ceres. The Sun requires 617.5 kilometres per second, Jupiter 59.5, Earth 11.19, Mars 5.03, the Moon 2.38 and Ceres 0.51. Selecting a bar reveals that body’s mass and radius and shows the calculation: escape velocity rises with the square root of mass and falls with the square root of radius, so a body can be hard to leave either by being massive or by being small and dense.',
    references: [referenceId('nasa-planetary-factsheet'), referenceId('codata-2018')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('tides-diagram'),
    title: 'Why there are two tides, not one',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of tidal forcing. The arrows show the Moon’s gravitational pull at points across the Earth, and then the same pulls with the Earth’s own overall acceleration subtracted — the difference is what stretches the Earth, and it points outward at both the near and the far side. That is the honest reason for two bulges. The Earth–Moon distance is compressed by roughly a factor of twenty, the bulge height is exaggerated by many orders of magnitude, real ocean tides lag the Moon and are dominated by basin shape and coastline, and the Sun’s contribution is shown only when toggled on.',
    description:
      'An animated diagram of the Earth with the Moon to one side. In the first view, arrows on the near side of the Earth are longer than those on the far side, showing that the Moon pulls harder on nearer material. In the second view the average pull has been subtracted, leaving arrows that point away from the Earth’s centre at both the near and far sides and inward around the sides — the stretching pattern that raises two bulges. The Earth then rotates beneath the fixed bulges, and a marked observer passes through two high tides and two low tides per rotation. A toggle adds the Sun’s weaker tidal effect, aligning with the Moon to give large spring tides and opposing it to give small neap tides.',
    references: [referenceId('agnew-2015-earth-tides')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('gravity-well'),
    title: 'The gravitational well',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A plot of gravitational potential energy per kilogram, −GM/r, against distance from a body’s centre — computed for the Earth from its measured mass and radius. The familiar “rubber sheet” picture is this curve rotated, and it is a graph of energy, not a picture of curved space: nothing is falling into a dent because of a second, downward gravity. Drag the launch speed to see how much of the well a given speed can climb; the depth is real, the horizontal spacing is compressed, and no relativity is included.',
    description:
      'A curve showing gravitational potential energy rising steeply from a deep minimum at the Earth’s surface and flattening asymptotically towards zero far away. A horizontal line marks the total energy of an object launched at the chosen speed. Where the line meets the curve is the highest point the object reaches before falling back. As the launch speed is raised towards 11.19 kilometres per second, that meeting point moves outward and finally off the chart: at and above escape velocity the total energy is no longer negative and the object never turns around.',
    references: [referenceId('nasa-planetary-factsheet'), referenceId('codata-2018')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('first-law-track'),
    title: 'What stops a moving object',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of the first law. A block is given one push and then left alone; the only horizontal force afterwards is friction, set by the surface slider. The motion is a numerically integrated constant-deceleration model — the friction values are illustrative rather than measured coefficients for real materials. At zero friction the block never stops, which is the point: stopping is caused by a force, not by the absence of one.',
    description:
      'An interactive diagram of a block on a horizontal surface. One push sets it moving at a fixed speed, after which nothing pushes it again. On a rough surface it slows quickly and stops. On smoother surfaces it travels further before stopping. With friction set to zero it crosses the frame and reappears at the other side, moving at exactly the same speed indefinitely. A live readout shows the block’s speed and the friction force acting on it, which reaches zero at the same moment the block does on rough surfaces and stays at zero throughout on the frictionless one.',
    minimumQuality: 'low',
  },
  {
    id: visualizationId('second-law-lab'),
    title: 'Force, mass and acceleration',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'An interactive experiment on F = ma. Two carts are pushed along a frictionless track: a fixed reference cart at 10 N and 2 kg, and one whose force and mass you set. Their motion is integrated directly from a = F / m, so the acceleration shown is exactly what the equation gives with no fudge factors. This is the mathematical model, not a measurement of a real trolley — a real one has friction, and the model has none.',
    description:
      'An interactive diagram of two carts on a horizontal track. The lower cart is a fixed reference: 10 newtons applied to 2 kilograms, accelerating at 5 metres per second squared. The upper cart has sliders for its force and its mass. Both are released together and race along the track. Doubling the upper cart’s force doubles its acceleration and it pulls ahead of the reference; doubling its mass instead halves its acceleration and it falls behind. A readout gives the force in newtons, the mass in kilograms, the resulting acceleration and the current speed, and says explicitly when the two carts match — which happens whenever the ratio of force to mass is the same, however different the individual numbers are.',
    minimumQuality: 'low',
  },
  {
    id: visualizationId('third-law-pairs'),
    title: 'The other half of every force',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram of action–reaction pairs. In each scenario the two arrows are equal in size and opposite in direction, but they are deliberately drawn attached to different bodies, because that is the whole content of the third law: the pair never acts on the same object and therefore never cancels. The resulting accelerations shown are computed from a = F / m with the stated masses and are illustrative round numbers, not measurements of a real skater, rocket, jump or collision.',
    description:
      'An interactive diagram with four selectable scenarios: two skaters pushing apart, a rocket expelling exhaust, a person jumping from the ground, and a truck colliding with a car. In each, one force arrow is drawn on the first body and the equal, opposite arrow on the second, colour-coded to the body it acts on. Alongside, the resulting accelerations are shown: the lighter skater speeds away faster, the rocket gains speed while the exhaust is thrown backwards, the Earth’s acceleration under a jumper’s push is calculated and found to be about 10⁻²² metres per second squared, and in the collision both vehicles feel the same force while the lighter car’s acceleration is far larger.',
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('newton-cannon'),
    title: 'Newton’s cannonball: falling and missing',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'Newton’s own thought experiment, integrated rather than sketched: a projectile launched horizontally from a tower under inverse-square gravity, with no atmosphere and no rotation of the planet. The trajectories are computed from Newtonian gravity alone, so the transition from a short arc through ellipses to escape is genuine; the tower height, the planet’s size and the speeds are scaled for the frame rather than being Earth’s actual values.',
    description:
      'An animated diagram of a projectile fired horizontally from a tall tower on a round planet. At low speed it arcs down and hits the ground nearby. At higher speeds it lands progressively further around the curve of the planet. At one particular speed the ground curves away exactly as fast as the projectile falls and it circles the planet, returning to the tower. Faster still, the path becomes an ellipse that swings far out and comes back. Beyond escape speed the path opens out and the projectile never returns. Previous trajectories are kept faintly on screen so the whole family of paths is visible at once.',
    references: [referenceId('newton-1687-principia')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('moon-test'),
    title: 'Newton’s Moon test',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: false,
    caption:
      'The calculation that unified falling and orbiting, redone with modern measured values. An apple at the Earth’s surface accelerates at 9.81 m/s². The Moon is 60.34 Earth radii away, so if the same law holds, its acceleration should be 9.81 / 60.34² = 2.69 × 10⁻³ m/s². The Moon’s actual centripetal acceleration, from its measured orbital radius and period, is 2.72 × 10⁻³ m/s². The remaining 1% is not error: it is mostly the Moon’s own mass, since the two bodies orbit their common centre. Inputs are cited; the arithmetic is done in the figure.',
    description:
      'A diagram comparing two accelerations. On the left, an apple falls at the Earth’s surface at 9.81 metres per second squared. On the right, the Moon at 60.34 Earth radii accelerates towards the Earth at 0.00272 metres per second squared. Between them, the inverse-square prediction divides the surface value by 60.34 squared, or 3640, to give 0.00269 — agreeing with the measured lunar value to about one percent. A note attributes the residual mainly to the Moon’s own mass, since both bodies orbit their common centre of mass.',
    references: [
      referenceId('nasa-planetary-factsheet'),
      referenceId('newton-1687-principia'),
      referenceId('iau-2015-nominal-constants'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('mercury-precession'),
    title: 'Where Newton’s gravity falls short',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram of perihelion precession, with the effect enormously exaggerated. In pure Newtonian two-body gravity an elliptical orbit closes on itself exactly and never precesses; Mercury’s observed orbit turns by 42.98 arcseconds per century more than all Newtonian planetary perturbations account for, which works out at about 0.00003 degrees per orbit — utterly invisible at this scale. The slider sets the exaggeration so the qualitative behaviour can be seen; the ellipse’s eccentricity is Mercury’s real value of 0.206, but nothing else here is to scale, and the drawn rate is not the real rate.',
    description:
      'An interactive diagram of an elongated elliptical orbit around a central star. With the exaggeration slider at its lowest setting the ellipse retraces itself exactly, as Newtonian gravity predicts for two bodies. As the exaggeration is raised, each successive orbit’s closest point shifts a little further around, and the accumulated paths trace out a slowly rotating rosette. A caption states the true measured excess: 42.98 arcseconds per century, or roughly one full extra turn every three million years.',
    references: [
      referenceId('park-2017-mercury-precession'),
      referenceId('will-2014-confrontation'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // ---- Phase 4: Einstein & Relativity -------------------------------------

  {
    id: visualizationId('light-clock'),
    title: 'The light clock',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of where time dilation comes from. Two identical clocks tick by bouncing a light pulse between mirrors; one is at rest and one is moving. Because the light in the moving clock has to travel a longer, diagonal path at the same speed, it ticks more slowly — and the ratio of the two tick rates is exactly the Lorentz factor, computed live rather than drawn by hand. The mirrors, the pulse and the separation are illustrative sizes; a real light clock a metre tall ticks about 150 million times a second.',
    description:
      'An interactive diagram of two light clocks side by side. In the stationary clock a pulse bounces straight up and down between two mirrors. In the moving clock, drawn travelling to the right, the same pulse traces a zig-zag: it must cover a longer diagonal path between the same two mirrors, and because its speed is fixed it takes longer. A speed slider changes how fast the second clock moves; as the speed rises the diagonal lengthens, the moving clock visibly falls behind, and a readout gives the Lorentz factor and the accumulated difference in elapsed time between the two clocks.',
    references: [referenceId('einstein-1905-sr')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('lorentz-factor'),
    title: 'How fast is fast enough to matter?',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The Lorentz factor γ = 1/√(1 − v²/c²), plotted exactly. This is the whole of special relativity’s quantitative content in one curve: it is what multiplies time dilation, length contraction and relativistic energy. The point of the figure is the shape — γ stays within a fraction of a percent of 1 for every speed a human has travelled, and only runs away when v is a substantial fraction of c. Marked speeds are real values; the curve is the formula, not a fit to data.',
    description:
      'A chart of the Lorentz factor against speed as a fraction of the speed of light. The curve sits almost exactly at 1 across the left three quarters of the plot, reaches 1.15 at half light speed, 2.29 at 0.9c, 7.09 at 0.99c, and rises steeply towards infinity as the speed approaches c. Reference speeds are marked along the bottom: a passenger jet at 0.0000008c, the International Space Station at 0.000026c, the Parker Solar Probe at 0.00064c, and a muon in a storage ring at 0.9994c. A slider selects a speed and reads out the Lorentz factor, the time dilation, the length contraction and the kinetic energy as a multiple of the rest energy.',
    references: [referenceId('einstein-1905-sr'), referenceId('codata-2018')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('simultaneity-train'),
    title: 'Two lightning strikes, two answers',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'Einstein’s train, drawn in both frames. Switch between them: on the platform the two flashes are emitted at the same moment and reach the platform observer together; in the train’s own frame the same two flashes reach the traveller at different moments, so they cannot have been simultaneous. Neither observer is mistaken and no experiment can settle which is right — that is the point. The train is drawn at a large fraction of light speed and at a size that makes the light travel visible; the light pulses move at the same drawn speed in both frames, which is the one thing the figure gets literally right.',
    description:
      'An animated diagram of a train passing a platform. In the platform frame, lightning strikes both ends of the train at the same instant; the two light pulses travel inward at equal speed and arrive together at an observer standing midway along the platform. Switching to the train frame, the same two pulses still travel at the same speed, but the traveller in the middle of the carriage is moving towards one of them: the pulse from the front arrives first and the pulse from the rear arrives later. A readout states, for each frame, whether the two strikes were simultaneous, and notes that both descriptions are correct.',
    references: [referenceId('einstein-1905-sr')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('length-contraction'),
    title: 'A shorter journey, or a longer life?',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'The muon problem, told from both sides, with the numbers computed live from the Lorentz factor. In the Earth’s frame the atmosphere is 15 km thick and the muon survives the trip because its clock runs slow. In the muon’s own frame its life is the usual 2.2 microseconds, but the atmosphere is rushing past contracted to a fraction of that thickness. Both frames give the same answer for the one thing that can be checked — whether the muon reaches the ground. Sizes are illustrative; the contraction factor and the survival fraction are calculated.',
    description:
      'An interactive diagram in two panels. In the Earth frame, a column of atmosphere 15 kilometres tall stands still while a muon descends through it, and a clock attached to the muon ticks slowly. In the muon frame, the muon is at rest with a normally ticking clock while the whole atmosphere rushes upward past it, flattened along the direction of motion. A speed slider changes the muon’s velocity; at 0.999 of light speed the atmosphere contracts from 15 kilometres to about 670 metres, and a readout gives the contracted thickness, the dilated lifetime and the fraction of muons expected to survive the descent in each description — which always agree.',
    references: [referenceId('frisch-smith-1963-muons'), referenceId('einstein-1905-sr')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('mass-energy'),
    title: 'What a kilogram is worth',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'E = mc² evaluated on a logarithmic energy scale, with real comparisons. Every value is arithmetic on measured quantities — the mass you choose times the square of the defined speed of light — set against published energy figures for familiar events. The scale is logarithmic because the numbers span twenty orders of magnitude. Note what the equation does not say: converting mass to energy completely requires antimatter, and no ordinary process comes close.',
    description:
      'A logarithmic energy scale with a slider that sets a mass from one microgram to one tonne, showing the energy that mass would release if converted entirely. Marked reference points include the chemical energy of burning one kilogram of petrol, the daily energy use of a household, the Hiroshima bomb at about 15 kilotonnes, and the Sun’s output in one second. One gram of matter fully converted sits at about 90 terajoules, comparable to a 21-kilotonne explosion; one kilogram sits at 9 times 10 to the sixteenth joules. A note states that fission releases about 0.1 percent of the available mass-energy and chemical burning about a billionth.',
    references: [referenceId('einstein-1905-inertia'), referenceId('codata-2018')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('spacetime-diagram'),
    title: 'The spacetime diagram, and what a boost does to it',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A Minkowski diagram with an exact Lorentz boost applied by the slider. Time runs up, space runs across, and light travels along the diagonals. As the boost changes, worldlines and lines of constant time tilt — different observers disagree about which events are simultaneous, and about how far apart things are — but two things never move: the light cone, and the spacetime interval between any pair of events, which is printed live so it can be checked. The axes are scaled so that light travels at 45 degrees; that choice is a convention, not a measurement.',
    description:
      'An interactive spacetime diagram. Time runs vertically and space horizontally, with two diagonal lines at 45 degrees forming the light cone through the origin. Three events are plotted, together with the worldline of a stationary observer and of a moving one. A boost slider changes the reference frame: the moving observer’s worldline and their lines of simultaneity tilt towards the light cone, and events that lined up horizontally before no longer do. Throughout, the light cone stays fixed at 45 degrees and the computed spacetime interval between the marked events stays constant, which is displayed as a number that does not change as the slider moves.',
    references: [
      referenceId('minkowski-1952-space-and-time'),
      referenceId('taylor-wheeler-1992-spacetime'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('equivalence-lift'),
    title: 'The lift you cannot see out of',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'Einstein’s lift, side by side. On the left a sealed box sits on a planet; on the right an identical box accelerates through empty space at the same rate. Every mechanical experiment inside gives the same result in both, which is the equivalence principle. The horizontal light beam bends in the accelerating box for a reason that needs no gravity at all — the box moves up while the light crosses — and the principle then demands that it bend in the gravitational box too. The bending is exaggerated by an enormous factor: over a two-metre box on Earth a light beam drops about 10⁻¹⁶ metres.',
    description:
      'An animated diagram of two identical sealed rooms shown side by side. The left room rests on the surface of a planet; the right room is far from any mass and accelerates upward at 9.8 metres per second squared. In both, a released ball falls to the floor along the same curve, and a person stands with the same apparent weight. A light beam is then fired horizontally across each room: in the accelerating room it visibly strikes the far wall below the height it was emitted at, because the room has moved up while the light crossed. The same bend is drawn in the gravitational room, and a note states that the equivalence principle requires it and that the real deflection over a room-sized box is far too small to see.',
    references: [referenceId('einstein-1916-gr'), referenceId('hartle-2003-gravity')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('spacetime-curvature'),
    title: 'Mass changes the geometry',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of curvature, and one that has to be read carefully. The grid is a two-dimensional stand-in for four-dimensional spacetime; the deformation shown is the spatial part alone, and for planets and stars the part that actually produces almost all of the gravity you feel is the curvature of *time*, which cannot be drawn as a dent. Above all, nothing here is rolling downhill: the classic rubber-sheet picture explains gravity by quietly assuming a second, downward gravity pulling the ball into the dip. The grid spacing and the depth are chosen for visibility and correspond to no scale.',
    description:
      'An interactive diagram of a grid representing spacetime, with a mass placed on it. Rings that are equally far apart in the geometry bunch together close to the mass and return to an even spacing far away. A slider changes how compact the body is, with presets for a black hole, a neutron star and a diffuse star: the same mass squeezed smaller produces far stronger curvature close in while leaving the distant grid unchanged. A prominent note states that this is a two-dimensional analogy, that the curvature of time rather than of space accounts for nearly all everyday gravity, and that nothing in the picture is rolling downhill.',
    references: [referenceId('einstein-1916-gr'), referenceId('misner-thorne-wheeler-1973')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('geodesic-sphere'),
    title: 'Straight lines that meet',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'What "straightest possible path" means when the geometry is curved, demonstrated on the one curved surface everybody already knows. Two travellers set off from the equator heading due north, perfectly parallel, each going as straight as they can. Neither ever turns, and yet they meet at the pole. On a sphere that is geometry; in general relativity the same thing happens in spacetime, and we call the convergence gravity. The sphere is a two-dimensional analogy for a four-dimensional geometry, and the paths are computed as true great circles rather than drawn by hand.',
    description:
      'An animated diagram of a globe. Two markers start side by side on the equator and travel due north along great circles, the straightest paths available on a sphere. Neither ever turns, yet the distance between them shrinks steadily and they meet at the north pole. A slider changes their starting separation, and a readout tracks the gap closing. A note contrasts this with a flat map, on which two parallel northward lines never meet, and states that the convergence is a property of the geometry rather than of any force acting sideways on the travellers.',
    references: [referenceId('hartle-2003-gravity'), referenceId('misner-thorne-wheeler-1973')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('gravitational-time-dilation'),
    title: 'Where clocks run slow',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Clock rate against distance from a mass, computed from the Schwarzschild factor √(1 − 2GM/rc²) with measured masses and radii. The vertical scale is the fractional slowing, and it has to be logarithmic: at the Earth’s surface a clock loses about 7 parts in 10¹⁰, at the Sun’s surface about 2 parts in 10⁶, and at a neutron star’s surface roughly 20 percent. The curve is exact within the model; the model assumes a non-rotating, uncharged spherical mass, which real bodies only approximate.',
    description:
      'A chart of how much slower a clock runs, plotted against distance from a body’s centre on logarithmic axes. Curves are shown for the Earth, the Sun and a typical neutron star. Marked points give the measured cases: a GPS satellite at 20,200 kilometres altitude, where the clock runs fast by 45 microseconds per day relative to the ground; the Earth’s surface; the Sun’s surface; and the surface of a neutron star, where the slowing reaches about 20 percent. Each curve rises steeply close in and flattens towards zero far away. A note marks the radius at which the slowing would become total, which for ordinary bodies lies far inside them.',
    references: [
      referenceId('schwarzschild-1916'),
      referenceId('ashby-2003-gps'),
      referenceId('nasa-planetary-factsheet'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('gravitational-lensing'),
    title: 'Light takes the bent path',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of gravitational lensing. Rays from a single distant source pass a mass at different distances and are deflected by an angle proportional to 1/b, the closest approach — that scaling is the real general-relativistic result, and it is what the drawn rays follow. Everything else is exaggerated: real deflections are measured in arcseconds, so at this scale the bending would be invisible. Move the source behind the mass and the images merge into a ring, which is what is actually seen when the alignment is close enough.',
    description:
      'An animated diagram of light from a distant source passing a massive object on its way to an observer. Rays that pass close to the mass are bent more strongly than rays passing further out, following the inverse relationship general relativity predicts. Because two different paths reach the observer, the source appears in two places at once rather than one. Dragging the source sideways moves the two images and changes their brightness; bringing the source into line directly behind the mass merges them into a complete ring around it. A readout gives the deflection angle for the drawn geometry and, separately, the real deflection of starlight grazing the Sun, 1.75 arcseconds.',
    references: [referenceId('dyson-1920-eclipse'), referenceId('walsh-1979-twin-quasar')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('gr-orbit-precession'),
    title: 'Newton’s orbit and Einstein’s, side by side',
    fidelity: 'data-driven',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'Two orbits integrated at once from the same starting conditions: one under the plain Newtonian inverse-square force, one with the leading general-relativistic correction added. The Newtonian ellipse closes exactly; the corrected one does not, and the precession is an output of the integration rather than a rotation applied by hand. The correction slider multiplies the relativistic term: at ×1 the drawn orbit is Mercury’s real behaviour, and precesses by 0.104 arcseconds per orbit — far too little to see, which is why the slider exists. The bodies are not to scale and the timescale is compressed.',
    description:
      'An animated comparison of two orbits around the same star, drawn from identical starting conditions. The first is computed from Newtonian gravity alone and traces an ellipse that closes perfectly on itself, orbit after orbit. The second adds the leading relativistic correction and traces an ellipse whose closest point creeps a little further around with every circuit, so the accumulated path becomes a rosette. A slider multiplies the strength of the relativistic term; at its true value the two orbits are visually identical and the readout reports a precession of 0.104 arcseconds per orbit, equal to the measured 42.98 arcseconds per century for Mercury.',
    references: [referenceId('park-2017-mercury-precession'), referenceId('hartle-2003-gravity')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('gravitational-wave'),
    title: 'What a passing gravitational wave does',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of a passing wave. The ring of free test masses is stretched along one axis and squeezed along the other, then the other way round — the pattern is correct for the two polarisations general relativity allows, and switching between them is what the toggle does. The amplitude is exaggerated by about twenty orders of magnitude: GW150914 stretched LIGO’s four-kilometre arms by roughly 4 × 10⁻¹⁸ metres, a small fraction of the diameter of a proton. The chirp underneath is computed from the leading-order inspiral formula, not plotted from LIGO data.',
    description:
      'An animated diagram of a ring of free-floating test masses with a gravitational wave passing through them, travelling into the screen. The ring stretches horizontally while squeezing vertically, returns to a circle, then stretches vertically while squeezing horizontally, repeating. A toggle switches to the second polarisation, in which the same stretching and squeezing happens along the diagonals instead. Below the ring, a waveform shows the characteristic chirp of two objects spiralling together: the frequency and the amplitude both climb steeply until the moment of merger, after which the signal stops. A note gives the real amplitude of the first detection and states that the drawn distortion is exaggerated enormously.',
    references: [referenceId('ligo-2016-gw150914'), referenceId('einstein-1916-gr')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('schwarzschild-radius'),
    title: 'How small would it have to be?',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The Schwarzschild radius r = 2GM/c² computed for real objects from their measured masses, set against their actual sizes. The comparison is the content: every ordinary object is enormously larger than its Schwarzschild radius, which is why nothing here is a black hole. The radius is a real prediction of the Schwarzschild solution for a non-rotating uncharged mass; it is not a claim that any of these objects could be compressed that far, and this figure says nothing about what happens inside one.',
    description:
      'A comparison of each object’s actual radius with the radius it would need to be compressed to in order to become a black hole. A person of 70 kilograms would need to be compressed to 10 to the power minus 25 metres, far smaller than a proton. The Earth would need to be compressed to about 9 millimetres, and the Sun to about 3 kilometres, roughly one two-hundred-thousandth of its present radius. The stellar-mass black hole of GW150914 and the supermassive black holes at the centres of the Milky Way and M87 are shown as the cases where the object really is inside its own Schwarzschild radius, with radii of about 190 kilometres, 12.7 million kilometres and 19 billion kilometres respectively.',
    references: [
      referenceId('schwarzschild-1916'),
      referenceId('nasa-planetary-factsheet'),
      referenceId('eht-2022-sgr-a'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // --- Phase 5 — Black Holes ----------------------------------------------
  {
    id: visualizationId('gravitational-collapse'),
    title: 'A core with nothing holding it up',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of the last stage of a massive star. The support slider is the content: while support is above the threshold the core finds an equilibrium radius and stops, and below it the contraction runs away and the horizon appears. Neither the timescale nor the sizes are real — a stellar core collapses in seconds and the horizon is tens of kilometres across, against a star of a million. No hydrodynamics is being solved; the radius follows a prescribed curve chosen to make the two outcomes distinguishable.',
    description:
      'An animated diagram of a stellar core losing its support. A glowing sphere representing the core shrinks as its support is removed. With the support slider held high, the shrinking slows and stops at a stable radius, labelled as a white dwarf or neutron star. With the slider below the threshold, the shrinking accelerates instead of stopping, the surface passes through a dashed circle marking the Schwarzschild radius, and a black disc with a thin bright rim replaces the sphere. As the surface approaches that circle, light emitted from it is shown reddening and dimming, illustrating that a distant observer never sees the crossing complete.',
    references: [
      referenceId('oppenheimer-snyder-1939'),
      referenceId('chandrasekhar-1931'),
      referenceId('penrose-1965-singularities'),
    ],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('black-hole-anatomy'),
    title: 'The radii that matter',
    fidelity: 'to-scale',
    runtime: 'svg',
    interactive: true,
    caption:
      'The characteristic radii of a black hole, drawn in correct proportion to one another and computed from the exact expressions rather than sketched. Radial distances are in units of the gravitational radius GM/c², so the figure holds for a black hole of any mass. The spin slider recomputes the horizon and the innermost stable circular orbit from the Kerr solution, and the ergosphere appears as spin rises. What is not shown is the interior: the region inside the horizon is drawn blank because general relativity does not describe it reliably.',
    description:
      'A cross-section through a black hole showing concentric regions, with radii measured in gravitational radii. From the outside in: the innermost stable circular orbit, the inner edge of any accretion disc, at six gravitational radii for a non-rotating black hole; the photon sphere at three, where light can orbit; and the event horizon at two. The ergosphere is drawn as a flattened region touching the horizon at the poles and bulging at the equator. Moving the spin slider from zero toward the maximum shrinks the horizon, shrinks the innermost stable circular orbit dramatically from six gravitational radii to about one, and expands the ergosphere. The interior of the horizon is left blank and labelled as not described by the theory.',
    references: [
      referenceId('schwarzschild-1916'),
      referenceId('kerr-1963'),
      referenceId('hartle-2003-gravity'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('escape-cone'),
    title: 'Where the way out runs out',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of light cones tipping toward a black hole. The half-angle of the escape cone is computed from the standard expression for the Schwarzschild geometry, so the way it narrows with radius and closes exactly at the horizon is the real result rather than an artistic choice. The cones are drawn far larger than any meaningful scale, and the reference row beneath is spaced evenly for legibility rather than placed on a radial axis — at a shared scale the cones would overlap into an unreadable pile.',
    description:
      'An animated diagram showing light cones at a series of distances from a black hole. Far away, each cone opens symmetrically: a flash of light there can travel outward as easily as inward. Closer in, the cones tilt toward the black hole and the outward-going side becomes narrower, so escaping requires being aimed within an increasingly tight cone. At 1.5 Schwarzschild radii — the photon sphere — exactly half the directions escape. Closer in, the escaping set narrows to a cone about straight up: 62 degrees at 1.2 radii, 21 degrees at 1.02, and zero at the horizon itself, where no outward direction remains at all. A slider moves the selected radius and a row of reference cones beneath shows the same quantity at five fixed distances, each labelled with its half-angle.',
    references: [referenceId('misner-thorne-wheeler-1973'), referenceId('hartle-2003-gravity')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('infalling-clock'),
    title: 'Two clocks, two stories',
    fidelity: 'data-driven',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A clock falling toward a black hole, with the elapsed time on the falling clock and on a distant clock both computed from the Schwarzschild geometry. The divergence between them is the real prediction: the falling clock crosses the horizon after a finite, short interval of its own time, while the distant clock runs away to infinity. The redshift of the light leaving the falling clock is computed from the same expressions. The infall is slowed enormously for viewing and the sizes are not to scale.',
    description:
      'An animated comparison of two clocks. One falls freely toward a black hole from rest at a chosen starting radius; the other stays far away. As the falling clock descends, its face is shown ticking normally from its own point of view and reaching the horizon after a short, finite interval. The distant clock’s reading, shown alongside, climbs ever faster and never reaches the crossing moment. Light from the falling clock is drawn shifting from white toward deep red and dimming as it descends, so the image seen from far away fades to nothing rather than being seen to cross. A readout gives both elapsed times and the redshift factor at the current radius.',
    references: [referenceId('hartle-2003-gravity'), referenceId('gravity-2018-s2-redshift')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('photon-orbits'),
    title: 'Fire light past a black hole',
    fidelity: 'data-driven',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'Photon trajectories integrated from the null geodesic equation of the Schwarzschild geometry, not drawn by hand. The impact parameter slider sets how close each ray is aimed; the capture threshold at b = √27 GM/c² emerges from the integration rather than being imposed. Rays close to the threshold loop one or more times near the photon sphere before escaping, which is the effect that produces the bright ring in a black-hole image. The radial scale is in gravitational radii and no attempt is made to show the black hole at a realistic angular size.',
    description:
      'An interactive diagram in which beams of light are fired past a black hole at a chosen distance. A slider sets the impact parameter, measured in gravitational radii. Rays aimed far away are deflected only slightly. Rays aimed closer bend sharply. At an impact parameter of about 5.2 gravitational radii the ray winds around the photon sphere several times before escaping in an almost arbitrary direction, and just below that value it spirals in and is captured. Dashed circles mark the event horizon at two gravitational radii and the photon sphere at three. A readout gives the deflection angle and states whether the ray escaped or was captured.',
    references: [referenceId('hartle-2003-gravity'), referenceId('eht-2019-v-physical-origin')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('black-hole-shadow'),
    title: 'What a telescope would see',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of a black-hole image. The shadow radius, the photon ring radius and the ratio between them are computed from the Schwarzschild geometry and are correct; the background star field, the brightness of the ring and the Doppler asymmetry across it are illustrative rather than a radiative-transfer calculation. This is not a reproduction of the Event Horizon Telescope images and is not derived from their data. The dark centre is the shadow, which is substantially larger than the event horizon — the horizon itself is marked separately and has never been imaged.',
    description:
      'A diagram of the appearance of a black hole against a background of stars. A dark central disc — the shadow — is surrounded by a thin bright ring of light that has been bent around the black hole on its way to the viewer. Background stars near the edge of the shadow are visibly displaced and duplicated by lensing. A toggle overlays the true size of the event horizon, which is noticeably smaller than the dark region, and a second toggle adds an accretion disc, whose far side appears lifted above and below the black hole because light from behind is bent over the top. A note states that the dark region is a lensing shadow and not a photograph of a horizon.',
    references: [referenceId('eht-2019-v-physical-origin'), referenceId('eht-2019-m87')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('accretion-disc'),
    title: 'Why infalling gas glows',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of an accretion disc. The orbital speeds follow the Keplerian 1/√r profile and the colour follows the thin-disc temperature profile T ∝ r^(−3/4), so the differential rotation and the inward temperature rise are the real relationships. Everything else is illustrative: the disc is drawn far thicker than a real thin disc, the inward drift is enormously accelerated, and no radiative transfer is computed. The inner edge is placed at the innermost stable circular orbit, which is where the spin slider acts.',
    description:
      'An animated diagram of gas orbiting a black hole in a flat disc. Inner rings visibly circulate faster than outer rings, following the Keplerian relationship. Colour indicates temperature: the outer disc is deep red, the middle orange and yellow, the inner edge white-hot. Individual parcels of gas are shown drifting slowly inward as friction removes their angular momentum, brightening as they go, and disappearing at the inner edge. A spin slider moves the inner edge inward, and a readout reports the corresponding efficiency with which rest mass is converted into radiation — from about 6% for a non-rotating black hole to roughly 32% at the highest spin realistic accretion is thought to reach, against 0.7% for hydrogen fusion.',
    references: [referenceId('shakura-sunyaev-1973'), referenceId('remillard-mcclintock-2006')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('relativistic-jet'),
    title: 'A jet, and why only one is bright',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of a relativistic jet. The brightness ratio between the approaching and receding jets is computed from the standard relativistic beaming expression for a given speed and viewing angle, so the asymmetry and how it changes with the sliders are quantitatively right. The geometry, the collimation and the knot structure are illustrative, and no magnetohydrodynamics is being solved. Real jets extend thousands of light years — millions of times the scale drawn here.',
    description:
      'An animated diagram of twin jets emerging from the poles of a spinning black hole, with an accretion disc between them. Bright knots travel outward along both jets at close to the speed of light. A speed slider and a viewing-angle slider control the geometry; as the speed rises and the jet tilts toward the viewer, the approaching jet brightens dramatically and the receding one fades almost to invisibility, which is why images of real sources usually show only one. A readout gives the brightness ratio between the two jets and the apparent transverse speed, which exceeds the speed of light for small viewing angles without anything actually travelling that fast.',
    references: [referenceId('blandford-znajek-1977'), referenceId('eht-2019-m87')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('frame-dragging'),
    title: 'Spacetime dragged around',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of frame dragging around a rotating black hole. The angular velocity imparted to a zero-angular-momentum observer follows the Kerr expression, so the way the dragging strengthens inward and with spin is the real relationship; the ergosphere boundary is computed from the same solution. The test particles, the grid and the scale are illustrative. Around the Earth the same effect amounts to about 37 milliarcseconds per year, which is what Gravity Probe B measured.',
    description:
      'An animated diagram of test particles placed around a spinning black hole, each one released with no angular momentum — that is, not orbiting at all. Despite this, every particle is carried around the black hole, faster the closer it lies, because spacetime itself is being dragged. A spin slider changes the rotation rate: at zero the particles fall straight in, and as spin rises they are swept into tighter spirals. The ergosphere is drawn as a flattened surface outside the horizon, bulging at the equator and touching the horizon at the poles, and inside it a marker shows that no particle can be held stationary no matter how it is propelled.',
    references: [referenceId('kerr-1963'), referenceId('everitt-2011-gravity-probe-b')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('tidal-stretching'),
    title: 'Why small black holes are worse',
    fidelity: 'data-driven',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'Tidal acceleration across a two-metre body, computed from the Newtonian tidal expression 2GMΔr/r³ evaluated along the fall — which agrees with the general-relativistic tidal curvature component to well within the precision shown here. The result at the horizon scales as one over the square of the mass, which is why the mass slider reverses the intuition: a ten-solar-mass black hole is already lethal about 27 horizon radii out, while a supermassive one is survivable at the horizon itself. The figure of the falling body is illustrative and its distortion is exaggerated.',
    description:
      'An interactive diagram of a body falling toward a black hole, with a mass slider spanning from ten solar masses to ten billion. A readout gives the tidal acceleration across a two-metre body at the current distance, and marks the distance at which that acceleration reaches the roughly one thousand g at which a human body would be pulled apart. For a ten-solar-mass black hole that distance is about 810 kilometres, some 27 times the horizon radius, so disruption happens well before the horizon. For a black hole of billions of solar masses the tidal acceleration at the horizon is smaller than Earth’s gravity, so the crossing would be physically unremarkable. The falling figure is drawn stretched along the direction of fall and squeezed across it, in proportion to the computed value.',
    references: [referenceId('misner-thorne-wheeler-1973'), referenceId('hartle-2003-gravity')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('black-hole-mass-scale'),
    title: 'Eight orders of magnitude',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: false,
    caption:
      'Measured masses of real black holes, plotted on a logarithmic scale, with each horizon radius computed from the same measured mass. Every entry is an object with a published dynamical, gravitational-wave or interferometric mass measurement; nothing here is representative or invented. The uncertainties on individual masses are omitted for legibility and are given in the sources.',
    description:
      'A logarithmic comparison of black-hole masses spanning from a few solar masses to billions. At the light end: the neutron-star limit at about 2.3 solar masses, marking where black holes can begin; Cygnus X-1 at about 21 solar masses, measured from its companion star’s orbit; and the components of GW150914 at 36 and 29 solar masses, measured from gravitational waves. In the middle: the remnant of GW190521 at about 142 solar masses, the first securely measured intermediate-mass black hole. At the heavy end: Sagittarius A star at the centre of the Milky Way, 4.3 million solar masses, from three decades of stellar orbits; and M87 star at 6.5 billion solar masses, from Event Horizon Telescope imaging. Each entry also shows the corresponding horizon radius, from about 30 kilometres across for a stellar-mass black hole to about 38 billion kilometres across for M87 star, roughly four times the diameter of Neptune’s orbit.',
    references: [
      referenceId('remillard-mcclintock-2006'),
      referenceId('ligo-2016-gw150914'),
      referenceId('abbott-2020-gw190521'),
      referenceId('eht-2019-m87'),
      referenceId('gravity-2020-schwarzschild-precession'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('binary-inspiral'),
    title: 'Two black holes running out of orbit',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of an inspiral. The orbital separation follows the leading-order quadrupole result, in which the separation shrinks as the fourth root of the time remaining, so the acceleration into the merger is the real relationship rather than a chosen easing curve. The timescale is compressed by many orders of magnitude, the black holes are drawn far larger than their horizons relative to the orbit, and the emitted waves are drawn as visible ripples, which they are not.',
    description:
      'An animated diagram of two black holes orbiting each other. Their separation shrinks slowly at first and then with increasing speed as energy is carried away by gravitational waves, drawn as expanding spiral ripples in a background grid. In the final moments the orbit shrinks and the orbital frequency rises steeply; the two horizons touch and merge into a single, larger, briefly distorted horizon which then settles into a smooth sphere. A mass-ratio slider changes the relative sizes of the two black holes, and a readout gives the orbital separation in units of the final horizon radius and the number of orbits remaining.',
    references: [referenceId('ligo-2016-gw150914'), referenceId('einstein-1916-gr')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('merger-waveform'),
    title: 'Inspiral, merger, ringdown',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of a merger waveform. The inspiral portion is computed from the leading-order post-Newtonian frequency evolution and the ringdown from an exponentially damped sinusoid, with the chirp mass and remnant properties set by the mass sliders; the merger itself is interpolated, because computing it genuinely requires numerical relativity. This is not LIGO data and does not reproduce any specific event, though the default slider positions give a signal comparable to GW150914.',
    description:
      'An interactive waveform showing the three phases of a black-hole merger. During the inspiral, the wave oscillates with steadily rising frequency and amplitude — the chirp. At merger the amplitude peaks sharply. During the ringdown the signal decays away within a few cycles as the newly formed black hole settles. The three phases are labelled and shaded separately. Two sliders set the masses of the merging black holes; increasing them lowers the frequency and shortens the visible signal, while making them more unequal reduces the amplitude. A readout gives the chirp mass, the final remnant mass, the energy radiated in solar masses, and the peak frequency.',
    references: [referenceId('ligo-2016-gw150914'), referenceId('abbott-2023-gwtc3')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('hawking-temperature'),
    title: 'Colder than empty space',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Hawking temperature and evaporation time computed exactly from Hawking’s expressions, T = ħc³/8πGMk_B and an evaporation time scaling as the cube of the mass, plotted against the measured cosmic microwave background temperature of 2.725 K. The crossing point is the content: every known black hole lies far to the right of it, meaning it absorbs more from the microwave background than it emits and therefore grows rather than evaporating. Hawking radiation is a theoretical prediction and has never been observed.',
    description:
      'A logarithmic chart of Hawking temperature against black-hole mass, spanning from asteroid-mass hypothetical black holes to the supermassive black hole in M87. Temperature falls steeply as mass rises. A horizontal line marks the cosmic microwave background at 2.725 kelvin. Every real black hole marked on the chart — a stellar-mass example, Sagittarius A star, and M87 star — lies far below that line, at temperatures between 10 to the minus 8 and 10 to the minus 17 kelvin, meaning each absorbs far more energy than it radiates. Only a hypothetical black hole below about 10 to the power 22 kilograms, with a horizon smaller than a proton, would be warmer than its surroundings today. A second readout gives the predicted evaporation time for the selected mass, which for one solar mass is about 10 to the power 67 years against a present cosmic age of 1.4 times 10 to the power 10 years.',
    references: [referenceId('hawking-1975-radiation'), referenceId('fixsen-2009-cmb-temperature')],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // ---------------------------------------------------------------------------
  // Phase 6 — Quantum Physics
  //
  // Quantum figures carry a particular risk: it is very easy to draw something
  // that looks quantum — glowing orbs, sparkles, particles winking in and out —
  // and teaches the reader something false. Every figure below therefore plots
  // a quantity that is actually computed from the theory's own expressions, and
  // every caption names which of those numbers are measured, which are exact
  // results of the mathematics, and which are neither.
  // ---------------------------------------------------------------------------
  {
    id: visualizationId('blackbody-spectrum'),
    title: 'The curve classical physics could not draw',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Both curves are computed exactly, from Planck’s law and from the Rayleigh–Jeans law that classical physics predicts, at whatever temperature the slider is set to. Nothing is fitted or stylised: the classical curve really does run off the top of the chart at short wavelengths, and that divergence is the failure that forced the quantum. The measured spectrum of the cosmic microwave background is marked because it is the most precise blackbody ever recorded.',
    description:
      'A chart of emitted power against wavelength. The Planck curve rises from zero, peaks, and falls away — a smooth hump whose position moves to shorter wavelengths as the temperature slider rises, following Wien’s law. The classical Rayleigh–Jeans curve tracks it closely at long wavelengths but then climbs without limit toward short wavelengths, leaving the frame entirely. A readout gives the peak wavelength and the total radiated power, which rises as the fourth power of temperature. Markers show the Sun’s surface at 5772 kelvin, an incandescent filament at 2800 kelvin, a human body at 310 kelvin, and the cosmic microwave background at 2.725 kelvin.',
    references: [
      referenceId('planck-1901-radiation'),
      referenceId('fixsen-2009-cmb-temperature'),
      referenceId('mather-1994-cobe-firas'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('photoelectric-effect'),
    title: 'Brightness does not help',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The straight line is Einstein’s relation eV_stop = hf − φ, computed with the CODATA value of Planck’s constant and the measured work function of the chosen metal. The slope of that line is h/e and nothing else, which is how Millikan measured Planck’s constant from an experiment about electrons. The intensity control is the point: increasing it changes how many electrons come out and never changes the energy of any one of them.',
    description:
      'A chart of the stopping voltage needed to hold electrons back, plotted against the frequency of the light. The data lie on a straight line that crosses zero at the threshold frequency and rises with a slope equal to Planck’s constant divided by the electron charge. Below the threshold no electrons are emitted at all, no matter how bright the light. A metal selector switches between caesium, sodium, zinc and platinum, shifting the whole line sideways by the difference in work function. An intensity slider changes the emitted current shown in a side gauge — more electrons — while leaving the stopping voltage completely unmoved.',
    references: [
      referenceId('einstein-1905-photoelectric'),
      referenceId('millikan-1916-photoelectric'),
      referenceId('codata-2018'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('atomic-energy-levels'),
    title: 'Why hydrogen has a barcode',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Hydrogen energy levels computed from E_n = −13.606 eV / n², and the emitted wavelengths from the difference between any two of them. Every wavelength shown is a real measured spectral line to the precision drawn. The levels are plotted on their true energy scale, which is why they crowd together toward the ionisation limit rather than being evenly spaced — a detail most textbook diagrams lose.',
    description:
      'A ladder of hydrogen energy levels drawn at their true relative energies: the ground state far below, then levels bunching closer and closer toward the ionisation limit at zero. Selecting an upper and a lower level draws an arrow between them and adds the corresponding line to a spectrum strip beneath, at its true wavelength and colour. The Lyman series lands in the ultraviolet, the Balmer series produces the four visible hydrogen lines at 656, 486, 434 and 410 nanometres, and the Paschen series falls in the infrared. Transitions that do not exist cannot be selected, which is the point: the spectrum is a barcode because the levels are discrete.',
    references: [referenceId('bohr-1913-atom'), referenceId('codata-2018')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('double-slit-buildup'),
    title: 'One detection at a time',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of the double-slit result. The probability distribution across the screen is computed exactly, from the standard two-slit expression with a single-slit envelope, and each dot is a pseudorandom sample drawn from that distribution. No particle is simulated travelling anywhere: there is no trajectory in the theory to draw, and inventing one would be the misconception this figure exists to remove. The slit spacing and wavelength are set for legibility, and the buildup is compressed from hours into seconds.',
    description:
      'An animated diagram of a detection screen behind two slits. Dots appear one at a time at apparently random positions — the first few show no pattern at all. As hundreds and then thousands accumulate, interference fringes emerge from the scatter. A which-path control adds a detector at the slits; when it is on, the fringes are replaced by two plain bands, and the accumulated pattern is the simple sum of what each slit alone would give. A rate slider changes how fast detections arrive, and a counter reports the total. The figure never draws a particle in flight between the source and the screen.',
    references: [
      referenceId('tonomura-1989-single-electron'),
      referenceId('jonsson-1961-electron-diffraction'),
    ],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('decoherence-visibility'),
    title: 'Interference fades as information leaks',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Fringe visibility plotted against the which-path distinguishability available in the environment, on Englert’s exact inequality V² + D² ≤ 1. The trade-off is quantitative, not a matter of interpretation: the quantum-mechanical bound is a theorem, and experiments sit on it. This is what "observation destroys interference" actually means — an entangling interaction that records which path was taken, whether or not anyone reads the record.',
    description:
      'A chart with which-path distinguishability on the horizontal axis and fringe visibility on the vertical. A quarter-circle marks the boundary V² + D² = 1; the region above it is forbidden by quantum mechanics. A slider moves a marker along the boundary, and a fringe pattern beside the chart shows the corresponding interference: at zero distinguishability the fringes have full contrast, at full distinguishability they are flat. Reference points mark real experiments in which interference survived for objects as large as sixty-carbon fullerenes and, later, molecules of over 25,000 atomic mass units, because those objects were isolated well enough that the environment learned nothing about which path they took.',
    references: [
      referenceId('englert-1996-duality'),
      referenceId('zurek-2003-decoherence'),
      referenceId('arndt-1999-fullerene'),
      referenceId('fein-2019-massive-interference'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('quantum-spin-superposition'),
    title: 'A superposition is not a mixture',
    fidelity: 'data-driven',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'Spin-½ measurement statistics computed exactly from the Born rule: the probability of "up" along an analyser at angle θ to the state direction is cos²(θ/2). The figure runs the numbers rather than illustrating them, so the readout can be checked against the formula. A superposition of up and down is drawn as a definite direction pointing somewhere else — because that is what it is — never as a particle that is secretly up or down and we have not looked yet. The two are experimentally different, and the sequential-analyser control shows why.',
    description:
      'An interactive Stern–Gerlach arrangement. Atoms leave a source, pass through an analyser at an adjustable angle, and land in one of exactly two spots — never anywhere between them, however the angle is set. A histogram accumulates the counts, and a readout compares the running fraction against the predicted cos²(θ/2). A second analyser can be switched on after the first: rotated to the same axis it passes everything, rotated ninety degrees it splits the beam evenly again, which is only possible if the first measurement did not simply reveal a value that was already there. A Bloch-sphere inset shows the state as an arrow with a definite direction, with the measurement axis drawn beside it.',
    references: [referenceId('stern-gerlach-1922'), referenceId('sakurai-2020-modern-qm')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('wavepacket-uncertainty'),
    title: 'Narrow in one graph, wide in the other',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A Gaussian wavepacket and its exact Fourier transform, plotted together. The product of the two widths is computed and displayed; for a Gaussian it sits exactly on the bound σₓσ_p = ħ/2, and no setting of the slider can push it below. That is the content: the uncertainty relation is a property of the Fourier pair, present before any measuring instrument is introduced. It is not a statement about clumsy apparatus disturbing a particle that secretly had both values.',
    description:
      'Two charts side by side. The upper one shows the probability density in position, a bell curve whose width the slider controls. The lower one shows the probability density in momentum, computed as the Fourier transform of the first. Squeezing the position curve to a spike makes the momentum curve spread across the whole frame, and spreading the position curve out narrows the momentum curve to a spike. A readout gives both standard deviations and their product in units of the reduced Planck constant, which stays pinned at 0.50 for every slider position. A worked example converts the same relation into everyday numbers: an electron confined to a region the size of an atom, about 0.1 nanometres, must have a momentum spread corresponding to a speed of roughly 580 kilometres per second, which is why atoms do not collapse.',
    references: [
      referenceId('heisenberg-1927-uncertainty'),
      referenceId('kennard-1927-uncertainty'),
      referenceId('griffiths-2018-quantum'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('quantum-harmonic-oscillator'),
    title: 'Solving the equation gives a ladder',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The exact stationary states of the quantum harmonic oscillator, computed from the Hermite-polynomial solutions of the Schrödinger equation, drawn on their own energy levels inside the potential. The evenly spaced ladder E_n = (n + ½)ħω is not an assumption fed in; it is what falls out when you demand that the solution stay finite far from the well. The lowest level sits above the bottom of the well, and cannot be lowered — that residual ½ħω is the zero-point energy, and it has measurable consequences.',
    description:
      'A parabolic potential well with horizontal lines drawn across it at the allowed energies, evenly spaced. Selecting a level draws the corresponding wavefunction along that line: the ground state is a single hump, the first excited state has one node, and higher states oscillate more, with the probability piling up near the classical turning points as the level rises. A toggle switches between the wavefunction and its square, the probability density. The lowest line is highlighted to show it lies half a quantum above the bottom of the well rather than at it. Alongside, the classical prediction of a continuous range of energies, including zero, is drawn for comparison.',
    references: [referenceId('schrodinger-1926-equation'), referenceId('griffiths-2018-quantum')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('quantum-tunnelling'),
    title: 'Through a wall it cannot climb',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Transmission probability through a rectangular barrier, computed from the exact expression for the Schrödinger equation rather than from an approximation, for whatever barrier height, width and particle energy the sliders are set to. The exponential sensitivity to width is the real relationship and is the reason a scanning tunnelling microscope can resolve single atoms: change the gap by one atomic diameter and the current changes by about an order of magnitude.',
    description:
      'A particle wave approaching a rectangular energy barrier taller than the particle’s own energy. Inside the barrier the wave does not oscillate but decays exponentially; beyond it, a smaller wave continues with the original wavelength. Three sliders set the particle energy, the barrier height and the barrier width. A readout gives the transmission probability, which falls by orders of magnitude for small increases in width — the classical prediction is exactly zero for every setting where the energy is below the barrier. Worked cases are marked: an alpha particle escaping a uranium nucleus, where a probability of about 10 to the minus 39 per approach still gives a half-life of billions of years because the particle attempts the barrier around 10 to the power 21 times a second; and the tunnelling gap in a scanning tunnelling microscope.',
    references: [
      referenceId('gamow-1928-alpha-decay'),
      referenceId('binnig-rohrer-1982-stm'),
      referenceId('griffiths-2018-quantum'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('entanglement-correlations'),
    title: 'Perfectly correlated, and useless for sending anything',
    fidelity: 'data-driven',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'Measurement outcomes for an entangled pair, sampled from the exact quantum prediction for the singlet state: the correlation between two analysers at angle θ apart is −cos θ, and the result at either detector alone is 50/50 regardless of what the other analyser is set to. Both facts are computed, not asserted. The second is why entanglement cannot carry a signal: Alice cannot see anything in her own data that depends on Bob’s setting, so there is nothing for her to read.',
    description:
      'Two detectors, drawn far apart, each receiving one member of an entangled pair. Each has its own angle control. Outcomes stream in as paired rows of plus and minus signs. Three running readouts update: the fraction of plus results at the left detector, which stays at one half whatever either angle is set to; the same at the right detector, likewise one half; and the correlation between the two columns, which swings from perfect anti-correlation at equal angles through zero at ninety degrees to perfect correlation at one hundred and eighty. A caption line states the consequence directly: changing your own detector angle changes nothing whatsoever in the other detector’s local record, which is why no message can be sent this way, at any speed.',
    references: [
      referenceId('epr-1935'),
      referenceId('bell-1964'),
      referenceId('sakurai-2020-modern-qm'),
    ],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('bell-test'),
    title: 'Where local realism runs out of room',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The CHSH quantity S computed as a function of the analyser angles, against the bound of 2 that any local hidden-variable theory must respect and the quantum maximum of 2√2 ≈ 2.828. The bound is a theorem about a class of theories, the curve is an exact quantum prediction, and the marked points are published experimental results — three different kinds of claim, which is why they are drawn differently. Experiments have exceeded 2 by many standard deviations with the main loopholes closed simultaneously.',
    description:
      'A chart of the CHSH quantity S against the analyser angle setting. A horizontal line at S = 2 marks the limit of every local hidden-variable theory. The quantum prediction curve rises above it over a broad range of angles, peaking at 2 times the square root of 2, about 2.828, at the optimal setting of 22.5 degrees. Measured values are plotted as points with error bars: Aspect and colleagues in 1982, and the loophole-free experiments from 2015 onward that closed the detection and locality loopholes in the same run. All lie above the classical bound. A note states plainly what the result rules out — that the outcomes were fixed in advance by local properties carried by the particles — and what it does not: it does not permit faster-than-light signalling, and it does not by itself select any one interpretation of quantum mechanics.',
    references: [
      referenceId('bell-1964'),
      referenceId('chsh-1969'),
      referenceId('aspect-1982-bell'),
      referenceId('hensen-2015-loophole-free'),
      referenceId('big-bell-test-2018'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('atomic-orbitals'),
    title: 'What an electron in an atom actually looks like',
    fidelity: 'data-driven',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'Electron probability density for hydrogen, computed from the exact analytic solutions of the Schrödinger equation for each quantum-number set, sampled on a plane through the nucleus. The shapes and the node positions are results of the mathematics, not artistic choices. The brightness is the probability of finding the electron there if you look — it is not a picture of a smeared-out electron, and there is no orbit anywhere in it.',
    description:
      'A density map of the electron probability distribution in a hydrogen atom, with a selector for the orbital. The 1s state is a single spherical cloud densest at the nucleus. The 2s state has a bright core, a dark spherical shell where the probability is exactly zero, and an outer cloud. The 2p states are two lobes on opposite sides of a nodal plane. The 3d states show four lobes or a lobe-and-ring form. A radial plot beside the map shows the probability of finding the electron at each distance, peaking for the ground state at the Bohr radius of 52.9 picometres. The number of nodes visible always equals n minus one, as the solutions require.',
    references: [
      referenceId('schrodinger-1926-equation'),
      referenceId('born-1926-probability'),
      referenceId('griffiths-2018-quantum'),
    ],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('energy-bands'),
    title: 'From levels in one atom to bands in a solid',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram of band formation: the broadening of discrete levels into bands as atoms are brought together is drawn illustratively, not computed from a real band-structure calculation. The band gaps quoted for real materials are measured room-temperature values and are correct. The consequence is the point — whether a material conducts, insulates or does neither is decided by a gap of a few electronvolts, which is why silicon runs the world and diamond does not.',
    description:
      'On the left, the discrete energy levels of a single isolated atom. Moving a slider brings more atoms together; each level splits into as many closely spaced levels as there are atoms, and by the time there are enough atoms to count as a solid the levels have merged into continuous bands separated by gaps. On the right, four real materials are compared on the same energy scale: copper, whose highest occupied band is only partly filled so electrons move freely and it conducts; germanium with a gap of 0.67 electronvolts and silicon with 1.12, small enough that a modest amount of energy can push electrons across, which is what makes a semiconductor controllable; and diamond with a gap of about 5.5 electronvolts, far beyond what room-temperature energy can supply, so it insulates and is transparent to visible light.',
    references: [referenceId('madelung-2004-semiconductors'), referenceId('pauli-1925-exclusion')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('field-excitations'),
    title: 'A particle as an excitation of a field',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of the field picture, not a quantum field theory calculation — no field equations are being solved and nothing here is a simulation. It illustrates one specific idea: in the modern account the fundamental object is a field filling all of space, and a particle is a discrete, quantised excitation of it. That is why every electron in the Universe is identical: they are excitations of the same field, and there is nothing else about them to differ in.',
    description:
      'An animated diagram of a field drawn as a flexible sheet stretched across the frame. At rest it is smooth. Adding energy raises a travelling ripple in it — and the amplitude control cannot produce a ripple of arbitrary size: it steps between allowed values, because the field’s excitations are quantised. Each allowed step is labelled as one particle, two particles, and so on. A second sheet beneath represents a different field, and a coupling control lets an excitation in one raise an excitation in the other, which is how the diagram represents interaction. A note states that the sheet, the height and the ripple shape are visual devices for a mathematical structure that has no picture, and that the real fields have values that are operators, not heights.',
    references: [referenceId('peskin-schroeder-1995'), referenceId('pdg-2024')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('standard-model-chart'),
    title: 'Everything the Standard Model contains',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Every measured mass, charge and spin is taken from the Particle Data Group’s current review; nothing is representative or rounded beyond the digits shown. The chart is complete for the Standard Model, and the gaps are drawn as deliberately as the entries: the model has no dark matter candidate, no explanation of the mass pattern, no account of gravity, and it predicted neutrinos to be massless — which experiment has shown they are not.',
    description:
      'A chart of the seventeen Standard Model particle types arranged in the usual blocks: six quarks in three generations, six leptons in three generations, the four force-carrying gauge bosons, and the Higgs boson. Selecting any entry shows its measured mass, electric charge, spin and the year it was confirmed. The mass scale spans more than eleven orders of magnitude, from neutrinos below 0.8 electronvolts to the top quark at 172.6 giga-electronvolts, with no explanation in the theory for why the values fall where they do. A panel lists what the chart does not contain: dark matter, dark energy, gravity, the origin of neutrino mass, and the matter–antimatter asymmetry.',
    references: [
      referenceId('pdg-2024'),
      referenceId('atlas-2012-higgs'),
      referenceId('cms-2012-higgs'),
      referenceId('super-k-1998-oscillation'),
      referenceId('sno-2002-solar-neutrinos'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('quantum-vacuum-fluctuations'),
    title: 'What the vacuum actually does',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The Casimir force between two mirrors, computed exactly from the standard expression and plotted against the measured results. Deliberately, this figure does not draw particles appearing and disappearing in empty space: that popular image comes from reading Feynman diagrams as if they were photographs, and it is not what the theory says the vacuum contains. What the theory does say is that the vacuum is the lowest-energy state of the fields and that its properties depend on the boundaries you impose — and that is a measured effect, not a story.',
    description:
      'A chart of the attractive force per unit area between two parallel conducting plates, against their separation, on logarithmic axes. The predicted curve falls as the fourth power of the separation. Measured points from precision experiments lie on it. A slider sets the separation; a readout converts the result into everyday terms — at 10 nanometres the pressure is roughly one atmosphere, at 1 micrometre it is about 1.3 millipascal, a hundred million times weaker. Beside the chart, a diagram shows the physical reason: between the plates only field modes that fit between them are allowed, while outside all modes are, and the imbalance pushes the plates together. A note explains that the same zero-point energy, taken naively as a source of gravity, over-predicts the observed dark energy density by many tens of orders of magnitude — the largest unexplained discrepancy in physics.',
    references: [
      referenceId('lamoreaux-1997-casimir'),
      referenceId('peskin-schroeder-1995'),
      referenceId('weinberg-1989-cc-problem'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('planck-scale'),
    title: 'Where both theories are needed at once',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The Planck length, time, mass and energy computed from G, ħ and c alone, with the reach of experiment marked beside them. They are the only combinations of those three constants with the right dimensions, which is what makes them significant — and also all that makes them significant. No experiment has ever probed the Planck scale; the highest-energy collisions ever produced fall short of the Planck energy by about fifteen orders of magnitude. Nothing is known to happen there. It is where the existing theories stop making sense together.',
    description:
      'A logarithmic ladder of length scales running from the Planck length at 1.6 times 10 to the minus 35 metres up to the observable Universe at 10 to the power 26 metres — sixty-one orders of magnitude. Rungs mark a proton at 10 to the minus 15 metres, an atom at 10 to the minus 10, a virus, a human, the Earth, the Solar System and the observable Universe. A shaded band shows the range experiments have actually reached: the Large Hadron Collider probes down to roughly 10 to the minus 20 metres. The gap between that band and the Planck length is drawn to scale on the logarithmic axis and is enormous. Parallel readouts give the Planck time of 5.4 times 10 to the minus 44 seconds, the Planck mass of 22 micrograms, and the Planck energy of 1.2 times 10 to the power 19 giga-electronvolts.',
    references: [referenceId('codata-2018'), referenceId('kiefer-2012-quantum-gravity')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('string-vibrations'),
    title: 'One object, many modes',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of the single idea string theory starts from: that one kind of object vibrating in different modes could give rise to what look like different particles. The standing waves drawn here are the ordinary classical modes of a loop, computed correctly — but they are an analogy, not a calculation in string theory, which requires ten dimensions and a quantised relativistic string that cannot be drawn. String theory is a serious research programme with real mathematical results. It has no experimental confirmation, and no experiment has yet distinguished it from alternatives.',
    description:
      'An animated diagram of a closed loop vibrating. A mode selector steps through the standing-wave patterns the loop supports: the fundamental, then one with two nodes, three, and so on, each labelled with its frequency as a multiple of the fundamental. A note draws the analogy explicitly — that a violin string produces different notes from one string, and that string theory proposes an analogous relationship between vibrational modes and particle species. A second note is equally explicit about the limits: the loop drawn here is a classical loop in two dimensions, the real proposal involves six additional compactified dimensions and objects at the Planck scale, roughly 10 to the power 15 times smaller than anything the Large Hadron Collider can resolve, and no version of the theory has been experimentally tested.',
    references: [
      referenceId('polchinski-1998-string-theory'),
      referenceId('susskind-2003-landscape'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('proper-time-paths'),
    title: 'Two routes between the same two events',
    fidelity: 'data-driven',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'Elapsed proper time computed exactly from the Minkowski metric along each worldline, in units where the speed of light is one. The result is not an illusion or a trick of perspective: the two clocks really do read different numbers when they are brought back together, and the difference is the integral of dτ along each path. The straight worldline always wins, which is the geometric content of the twin puzzle. Speeds are drawn as a large fraction of light speed so the effect is visible.',
    description:
      'A spacetime diagram with time running upward and space across. Two worldlines connect the same starting and ending events: one straight, belonging to a clock that stays put, and one bent, belonging to a clock that travels out and comes back. A handle lets the bend be dragged further out, raising the travelling clock’s speed. Two clock faces run alongside, and the travelling one visibly falls behind. A readout gives both elapsed proper times and their ratio, together with the speed as a fraction of light speed. The straight path is highlighted as the one with the greatest elapsed time — the opposite of the shortest-distance intuition from ordinary geometry, and a direct consequence of the minus sign in the spacetime interval.',
    references: [
      referenceId('minkowski-1952-space-and-time'),
      referenceId('taylor-wheeler-1992-spacetime'),
      referenceId('hafele-keating-1972'),
    ],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('clock-comparison'),
    title: 'Measured disagreements between real clocks',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: false,
    caption:
      'Every entry is a published measurement of two real clocks disagreeing, or an engineering correction that would break a working system if it were omitted. This is the evidence that there is no single universal clock — not even one for the Earth. It is why the platform does not say time is an illusion and does not say time is absolute: what the measurements show is that elapsed time depends on the path a clock takes and on where it sits in a gravitational field, by amounts that were predicted before they were measured.',
    description:
      'A logarithmic chart of fractional clock-rate differences, spanning about fifteen orders of magnitude. At the large end: GPS satellite clocks, which run about 38 microseconds per day faster than clocks on the ground once both effects are combined, a fractional difference of about 4 parts in 10 to the power 10 — uncorrected, positions would drift by roughly 10 kilometres a day. Then the Hafele–Keating flights of 1971, which measured differences of tens of nanoseconds after circumnavigating the Earth. Then optical clocks raised by 33 centimetres in a single laboratory, showing a measurable difference of about 4 parts in 10 to the power 17. At the small end: a difference measured across a height of one millimetre inside a single strontium clock, about 1.1 parts in 10 to the power 19. Each entry is annotated with the year, the measured value and the source.',
    references: [
      referenceId('hafele-keating-1972'),
      referenceId('ashby-2003-gps'),
      referenceId('chou-2010-optical-clocks'),
      referenceId('bothwell-2022-redshift'),
      referenceId('ludlow-2015-optical-clocks'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('primordial-fluctuations'),
    title: 'A quantum origin, inferred from a measured tilt',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The primordial power spectrum P(k) ∝ k^(n_s−1) drawn with the measured value n_s = 0.9649 ± 0.0042 from Planck, against the exactly scale-invariant n_s = 1 that would show as a flat line. The measurement is real and precise. The inference drawn from it — that these fluctuations began as quantum fluctuations stretched by inflation — is a well-motivated theoretical account that fits the data, not a direct observation. The distinguishing prediction, primordial gravitational waves, has been searched for and not found.',
    description:
      'A chart of the primordial power spectrum against scale, on logarithmic axes. A horizontal dashed line marks exact scale invariance, in which fluctuations have the same amplitude at every scale. The measured spectrum is drawn as a very slightly tilted line just below it, with a shaded band for the uncertainty on the tilt. A slider varies the spectral index, and the shaded region marking the Planck measurement shows how narrowly it is constrained: the exactly flat case sits about eight standard deviations away and is excluded. A second panel gives the honest status of the interpretation: the small tilt is what simple inflationary models predict, which is a genuine success; but inflation is a class of models rather than a single theory, its energy scale is unknown, and the tensor-to-scalar ratio r remains below 0.036 with no detection — so the quantum origin of structure is a strongly supported inference, not a settled fact.',
    references: [
      referenceId('planck-2018-vi'),
      referenceId('planck-2018-x-inflation'),
      referenceId('mukhanov-chibisov-1981'),
      referenceId('bicep-keck-2021'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('interpretation-map'),
    title: 'Same predictions, different stories',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual comparison, not a ranking and not a scoreboard. Every interpretation listed reproduces the standard predictions of quantum mechanics in the regimes tested so far — that is what makes them interpretations rather than rival theories. The final column is the one that matters: no experiment has distinguished between them. Some variants make different predictions and have been narrowed or excluded by experiment, and where that is the case it is stated.',
    description:
      'A comparison of the main interpretations of quantum mechanics — Copenhagen and its modern descendants, many-worlds, de Broglie–Bohm pilot-wave theory, spontaneous-collapse models such as GRW, and QBism and other epistemic readings. For each, four properties are shown: whether the wavefunction is taken to be a real physical object or a bookkeeping device; whether collapse is a physical process, an emergent appearance, or absent; whether the underlying dynamics is deterministic; and what has to be given up. Selecting one expands a short account of what it says and what it costs. A footer states the current position plainly: as of today no experiment distinguishes these from one another, spontaneous-collapse models are the exception because they predict small deviations and experiments have squeezed their parameter space without ruling the class out, and the measurement problem is unresolved rather than solved.',
    references: [
      referenceId('everett-1957'),
      referenceId('bohm-1952'),
      referenceId('grw-1986'),
      referenceId('zurek-2003-decoherence'),
      referenceId('bell-1964'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('quantum-scale-ladder'),
    title: 'How far up the scale quantum behaviour has been shown',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: false,
    caption:
      'Every marker is a published experiment in which quantum interference or entanglement was actually demonstrated at that scale, plotted against a logarithmic mass axis. The chart answers a real question honestly: quantum mechanics has no known size limit written into it, but the demonstrated range currently stops with molecules of around 25,000 atomic mass units. Everything above that is untested, not disproved — and the reason larger objects behave classically is decoherence, which is understood and calculable, not a boundary where the theory switches off.',
    description:
      'A logarithmic ladder of mass, from a single electron at 9.1 times 10 to the minus 31 kilograms up to a human. Markers show where quantum behaviour has been directly demonstrated: single electrons in the 1961 and 1989 double-slit experiments, neutrons, atoms, sixty-carbon fullerene molecules in 1999, and oligoporphyrin molecules of over 25,000 atomic mass units and 2,000 atoms in 2019 — the current record for matter-wave interference. Above the last marker the ladder continues, unmarked, through a virus, a dust grain, and a human, with the region labelled as untested rather than excluded. A note gives the reason larger objects do not show interference: the decoherence time falls extraordinarily fast with size and with coupling to the environment, so a dust grain in air loses coherence in far less than the time it would take to cross an apparatus.',
    references: [
      referenceId('jonsson-1961-electron-diffraction'),
      referenceId('tonomura-1989-single-electron'),
      referenceId('arndt-1999-fullerene'),
      referenceId('fein-2019-massive-interference'),
      referenceId('zurek-2003-decoherence'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // ---------------------------------------------------------------------------
  // Phase 5 — Stars & Galaxies
  //
  // The recurring risk in this section is the pretty astronomy picture that
  // teaches nothing. Every figure below therefore either plots a computed
  // physical relationship, or is explicitly labelled a conceptual diagram and
  // says in its caption which parts are illustrative. None of them is a
  // rendering of what a telescope would see.
  // ---------------------------------------------------------------------------
  {
    id: visualizationId('hydrostatic-equilibrium'),
    title: 'The balance that is a star',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of the balance between gravity and pressure. The restoring behaviour is real — perturb a stable star and it returns — but no stellar structure equations are being integrated here, and the response time is compressed from thousands of years to seconds. The arrows are drawn proportional to the imbalance at each moment, so their relative lengths carry the argument.',
    description:
      'An interactive diagram of a star in cross-section, with inward gravity arrows and outward pressure arrows at several depths. A slider disturbs the balance: pushing toward gravity makes the star contract, which heats the interior and lengthens the pressure arrows until the contraction stops and reverses. Pushing the other way makes it expand, cool, and settle back. A readout reports the current core temperature and radius relative to equilibrium, and the star always returns to the same state — which is the point of the figure.',
    references: [referenceId('eddington-1926-internal-constitution')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('stellar-structure'),
    title: 'How energy gets out of a star',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual cross-section. The zone boundaries are taken from standard stellar models for each mass, so the switch between radiative and convective interiors around 1.3 solar masses is a real model result. The relative sizes are drawn to scale within each star, but the stars are not drawn to scale against each other, and the convection cells are illustrative rather than computed.',
    description:
      'A cutaway of stellar interiors for three masses. A 0.3 solar mass red dwarf is fully convective throughout. The Sun has a radiative interior out to about 70 percent of its radius and a convective outer envelope. A 5 solar mass star has the arrangement reversed — a convective core, because the CNO cycle concentrates energy generation in a small central volume, surrounded by a radiative envelope. Labels mark the core where fusion occurs, the radiative zone where photons random-walk outward, and the convective zone where hot material physically rises.',
    references: [
      referenceId('eddington-1926-internal-constitution'),
      referenceId('christensen-dalsgaard-2002-helioseismology'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('molecular-cloud-collapse'),
    title: 'A cloud fragments as it falls',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of gravitational collapse and fragmentation. No hydrodynamics is solved; the fragmentation follows the Jeans criterion evaluated at each step, so the fact that smaller regions become unstable as density rises is the real physical relationship. The timescale is compressed from millions of years to seconds, and the particle count is thousands of times too low.',
    description:
      'An animated diagram beginning with a diffuse cloud of cold gas. A temperature slider controls how effectively the gas can cool. With cooling on, gravity wins: the cloud contracts, and as it densifies it splits into several independently collapsing clumps, each brightening into a protostar. With cooling off, the cloud’s pressure holds it up and nothing forms. A readout gives the current density and the corresponding Jeans mass — the minimum mass that can collapse — which falls as the density rises, which is why one cloud produces many stars.',
    references: [referenceId('mckee-ostriker-2007-star-formation'), referenceId('draine-2011-ism')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('gravitational-heating'),
    title: 'Losing energy makes it hotter',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Gravitational energy, thermal energy and total energy for a contracting self-gravitating sphere, computed from the virial theorem. The counterintuitive result — that radiating energy away raises the internal temperature — is not an approximation but a consequence of 2K + U = 0 for any such system in equilibrium. The curve stops where degeneracy would take over, which is where the argument stops applying.',
    description:
      'A chart with radius shrinking to the right. Three curves are plotted: gravitational potential energy falling steeply negative, thermal energy rising, and total energy falling. As the sphere contracts, exactly half the released gravitational energy becomes heat and half is radiated away, so the object grows hotter while its total energy decreases. A slider moves along the contraction and a readout gives the internal temperature and the Kelvin–Helmholtz timescale — which for the Sun is about 31 million years, the answer nineteenth-century physics obtained for the Sun’s age and the reason that answer had to be wrong.',
    references: [referenceId('eddington-1926-internal-constitution')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('stellar-thermostat'),
    title: 'A star regulating itself',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Nuclear energy generation rate against core temperature, computed with the standard power-law approximations: the proton–proton chain scaling as roughly T⁴ near solar conditions and the CNO cycle as roughly T¹⁷. The steepness is what makes the feedback loop work, and the crossover near 1.3 solar masses is a real model result. Absolute rates are normalised to solar conditions rather than computed from cross-sections.',
    description:
      'A chart of energy generation rate against core temperature on logarithmic axes, with two curves: the shallow proton–proton chain and the very steep CNO cycle, crossing at around 17 million kelvin. A slider perturbs the core temperature away from equilibrium and the diagram traces the response — a temperature excess produces a large energy surge, which expands and cools the core, returning it to the starting point. A readout reports the fractional change in energy output for the chosen temperature change, showing that a 5 percent rise roughly doubles the CNO rate while raising the proton–proton rate by about 20 percent.',
    references: [
      referenceId('bethe-1939-energy-production'),
      referenceId('bahcall-2005-solar-neutrinos'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('proton-proton-chain'),
    title: 'Four protons become one helium nucleus',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of the pp-I chain. The particles, the reaction order and the energy released at each step are correct; the spatial arrangement, the sizes and the timing are entirely illustrative. Real reaction timescales differ by more than twenty orders of magnitude between the first step and the last, which cannot be shown at any single pace — the figure states the true waiting times in a readout instead.',
    description:
      'An animated three-step diagram. First, two protons fuse into deuterium, emitting a positron and a neutrino — the step that requires a proton to convert into a neutron, and which a given proton in the Sun’s core waits billions of years for. Second, deuterium captures a proton to form helium-3, releasing a gamma ray, which takes about a second. Third, two helium-3 nuclei combine into helium-4, returning two protons. A step control walks through the sequence, and a readout gives the energy released and the characteristic waiting time for each step, together with the total of 26.73 MeV of which about 0.6 MeV escapes as neutrinos.',
    references: [referenceId('bethe-1939-energy-production'), referenceId('audi-2021-atomic-mass')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('cno-cycle'),
    title: 'Carbon as a catalyst',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram of the CNO-I cycle. The reaction sequence, the nuclei involved and the energy released are correct. The circular layout is a visual device — nothing physically travels in a circle — and the relative step timings are not represented, since the beta decays take minutes while the proton captures take far longer.',
    description:
      'A ring diagram of six nuclei: carbon-12 captures a proton to become nitrogen-13, which beta-decays to carbon-13, which captures a proton to become nitrogen-14, then oxygen-15, which decays to nitrogen-15, which captures a final proton and splits into carbon-12 plus helium-4. Stepping around the ring highlights each reaction with its energy release. The key point is marked explicitly: the carbon is returned unchanged at the end, so it is a catalyst rather than a fuel, and the net reaction is the same as the proton–proton chain — four protons into one helium nucleus.',
    references: [referenceId('bethe-1939-energy-production'), referenceId('borexino-2020-cno')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('mass-luminosity-relation'),
    title: 'Ten times brighter for twice the mass',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Published masses and luminosities for named stars whose masses are determined dynamically — from binary orbits, and from eclipses where the system is eclipsing — rather than read off a model. The plotted power law is the standard broken approximation shown as a guide; the exponent genuinely varies from about 2.3 at the bottom of the main sequence to about 3.5 in the middle and flatter still at the top, so a single value is a convenience rather than a law.',
    description:
      'A logarithmic chart of luminosity against mass, with measured stars plotted as points spanning roughly 0.1 to 12 solar masses and seven orders of magnitude in luminosity. A power-law line with slope about 3.5 runs through them. A mass slider reports the corresponding luminosity and the resulting main-sequence lifetime, making the compounding explicit: ten times the mass gives roughly 3,000 times the luminosity and about one three-hundredth of the lifetime. The deviation from a single power law at both ends of the mass range is visible in the data.',
    references: [
      referenceId('torres-2010-eclipsing-binaries'),
      referenceId('eddington-1926-internal-constitution'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('hr-diagram'),
    title: 'Stars do not fill this diagram evenly',
    fidelity: 'data-driven',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A Hertzsprung–Russell diagram populated from the empirical spectral-type sequence for main-sequence stars, plus the giant branch and white dwarf sequence at their measured positions. The point density reflects the stellar initial mass function rather than an observed sample, so the shape of the populated regions is real while the exact counts are illustrative. Temperature increases leftward, following the century-old convention.',
    description:
      'A scatter of stars plotted by luminosity against surface temperature. They do not fill the plane: most lie along a diagonal band from hot and bright at the upper left to cool and faint at the lower right — the main sequence — with a separate clump of cool but luminous red giants at the upper right and a sparse sequence of hot but faint white dwarfs at the lower left. Markers identify the Sun, Sirius, Betelgeuse, Proxima Centauri and Sirius B. A control highlights lines of constant radius, which run diagonally and show that a red giant is luminous despite its low temperature purely because it is enormous.',
    references: [
      referenceId('gaia-2018-hr-diagram'),
      referenceId('pecaut-mamajek-2013-stellar-scale'),
    ],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('stellar-evolution-tracks'),
    title: 'Where a star goes when it leaves the main sequence',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Evolutionary tracks through the Hertzsprung–Russell diagram, following published model grids for solar metallicity. These are computed trajectories, not observed paths — no star has been watched moving along one, since the timescales are millions to billions of years. The tracks are drawn schematically between the model anchor points, and the elapsed times shown at each stage are the model values.',
    description:
      'Evolutionary tracks for stars of 1, 5 and 25 solar masses, animated from the main sequence onward. The one-solar-mass track climbs the red giant branch, loops through core helium burning, ascends the asymptotic giant branch and then turns sharply left and down as the envelope is lost and a white dwarf is exposed. The five-solar-mass track crosses the diagram rapidly to become a red giant. The twenty-five-solar-mass track moves nearly horizontally to the supergiant region and ends at core collapse. A play control advances the tracks, and a readout gives the elapsed time and current burning stage.',
    references: [referenceId('choi-2016-mist')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('red-giant-expansion'),
    title: 'The core shrinks; the star swells',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of the giant-branch mirror behaviour. The radius and luminosity change together according to the Stefan–Boltzmann law, so the relationship between surface temperature, radius and brightness is computed rather than drawn. The core is shown enormously oversized — at the same scale as the envelope it would be invisible — and the timescale is compressed from hundreds of millions of years.',
    description:
      'An animated cross-section of a star making the transition from main sequence to red giant. As the animation runs, the inert helium core contracts and brightens while a burning shell around it intensifies, and the envelope expands by a factor of over a hundred while its surface cools from yellow-white to deep red. Orbit markers for Mercury, Venus and Earth are drawn at true relative scale so the envelope’s growth can be judged against them. A readout gives the current radius in solar radii, the surface temperature, and the luminosity, showing that a hundredfold radius increase with a halving of temperature raises luminosity roughly six hundredfold.',
    references: [referenceId('choi-2016-mist'), referenceId('herwig-2005-agb')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('onion-shell-burning'),
    title: 'The last days of a massive star',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual cross-section of the advanced burning stages. The layer ordering, the fuels and the burning durations come from stellar evolution models and are real results; the layer thicknesses are drawn for legibility and are wildly unrepresentative, since the iron core occupies a tiny fraction of the star’s radius while the hydrogen envelope occupies almost all of it. This structure has never been observed — it is inferred from models.',
    description:
      'A cutaway of a massive star shortly before collapse, showing nested shells: hydrogen burning at the outside, then helium, carbon, neon, oxygen and silicon, with an inert iron core at the centre. Selecting a layer reports its fuel, its products, the temperature at which it burns and how long that stage lasts — from millions of years for hydrogen down to about a day for silicon. A logarithmic timeline beside the diagram makes the acceleration visible: the last four stages together occupy less time than a single year.',
    references: [referenceId('woosley-2002-massive-stars')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('binding-energy-curve'),
    title: 'The curve that explains why stars die',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Binding energy per nucleon computed directly from measured atomic masses in the AME2020 evaluation. Nothing is fitted or smoothed. The peak at nickel-62, with iron-58 and iron-56 within 0.005 percent of it, is a measured fact about nuclear physics — and it is the reason fusion releases energy below iron, fission releases energy above it, and a massive star with an iron core has run out of options.',
    description:
      'A chart of binding energy per nucleon against mass number, rising steeply from hydrogen through helium and carbon, peaking in the iron-group region near mass 56 to 62, and declining slowly toward uranium. Individual nuclei are marked: hydrogen-1 at zero, helium-4 at 7.07 MeV, carbon-12 at 7.68, iron-56 at 8.790, nickel-62 at 8.795 and uranium-238 at 7.57. Selecting any two nuclei shows the energy released or absorbed by converting one into the other, making explicit that reactions toward the peak release energy and reactions away from it cost energy. A shaded region marks the fusion side and the fission side of the peak.',
    references: [referenceId('audi-2021-atomic-mass')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('element-origins'),
    title: 'Which stars made which elements',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A periodic table coloured by dominant production site, using the element-by-element attributions computed in a published galactic chemical evolution model. These are model results rather than direct measurements: the yields come from stellar models, weighted by an initial mass function and integrated over galactic history, then checked against observed abundance patterns. Individual percentages carry real uncertainty, and nitrogen and the heaviest elements are actively debated.',
    description:
      'A periodic table in which each element is coloured by where most of it was made: Big Bang nucleosynthesis for hydrogen, helium and a little lithium; dying low- and intermediate-mass stars for much of the carbon and nitrogen; core-collapse supernovae for oxygen, neon, magnesium and silicon; thermonuclear supernovae for roughly half the iron; and rapid neutron capture, in neutron-star mergers, for gold, platinum, uranium and their neighbours. Selecting an element gives its dominant sources with approximate percentages and a note on how confident the attribution is. A legend states plainly that these are computed contributions, not measurements of individual atoms.',
    references: [
      referenceId('kobayashi-2020-origin-of-elements'),
      referenceId('b2fh-1957'),
      referenceId('cyburt-2016-bbn'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('core-collapse'),
    title: 'A second that ends a star',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of core collapse. The sequence — collapse, bounce at nuclear density, shock stall, neutrino heating, revival — follows the leading model, and the energy split of roughly 99 percent into neutrinos is a robust result confirmed by SN 1987A. No hydrodynamics or neutrino transport is being computed. The explosion mechanism itself remains an active research problem, and this figure shows the leading model rather than an established fact.',
    description:
      'An animated sequence in five stages. The iron core collapses inward at a quarter of the speed of light. The centre reaches nuclear density and stiffens abruptly, launching a shock wave outward. The shock stalls within milliseconds as it spends its energy disintegrating infalling iron. A flood of neutrinos streams outward, a small fraction of which is reabsorbed behind the shock, and convective plumes carry that heat where it is needed. The revived shock breaks out and destroys the star. A stage control steps through the sequence, and an energy readout shows the split between neutrinos, kinetic energy and light — 99 percent, 1 percent and 0.01 percent.',
    references: [referenceId('janka-2012-explosion-mechanism'), referenceId('hirata-1987-sn1987a')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('remnant-outcomes'),
    title: 'What a star leaves behind',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The mapping from a star’s birth mass to its final remnant, drawn from stellar evolution models. The boundaries are approximate and the middle range is genuinely uncertain — recent modelling suggests the mapping is not even monotonic, with masses that explode interleaved among masses that collapse quietly. The uncertainty is drawn as a shaded band rather than hidden behind a sharp line.',
    description:
      'A horizontal axis of initial stellar mass from 0.08 to 100 solar masses, divided into regions by outcome. Below about 0.08 solar masses, no star forms at all — a brown dwarf. Up to about 8 solar masses, a carbon–oxygen white dwarf. Between roughly 8 and 20, a neutron star. Above that, black holes become increasingly likely, with a shaded band marking where the outcome depends on metallicity, rotation, mass loss and binary history. A second axis shows the remnant mass, which does not rise smoothly with initial mass. A note records the red supergiant problem: pre-explosion images have not found the high-mass progenitors that single-star models predict.',
    references: [referenceId('smartt-2009-progenitors'), referenceId('woosley-2002-massive-stars')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('neutron-star-density'),
    title: 'A star’s mass in the space of a city',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Density compared across objects on a logarithmic scale, computed from measured masses and radii. The neutron star value uses the NICER mass and radius determination for PSR J0030+0451. The comparison is exact arithmetic; what is illustrative is the drawing of the neutron star beside a city outline, which is drawn to scale in diameter only.',
    description:
      'A logarithmic density comparison spanning twenty-two orders of magnitude: air at about 1.2 kg per cubic metre, water at 1,000, lead at 11,340, the Sun’s core at 150,000, a white dwarf at around 10⁹, an atomic nucleus at 2.7 × 10¹⁷, and a neutron star at several times that. Beside it, a neutron star of about 24 kilometres diameter is drawn against a city street grid at the same scale. A readout converts the selected density into an everyday comparison — a sugar-cube volume of neutron star material weighing roughly as much as all of humanity.',
    references: [referenceId('ozel-freire-2016-neutron-stars'), referenceId('riley-2019-nicer')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('chandrasekhar-limit'),
    title: 'Add mass and it gets smaller',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The white dwarf mass–radius relation computed from the degenerate equation of state, interpolating between the non-relativistic limit where radius scales as the inverse cube root of mass and the ultra-relativistic limit where the radius goes to zero at a finite mass. The limiting mass of about 1.44 solar masses for a composition with two nucleons per electron is a first-principles result, not a fit. Measured white dwarfs are plotted for comparison.',
    description:
      'A chart of white dwarf radius against mass. The curve falls as mass increases — the opposite of ordinary objects — and plunges toward zero radius as the mass approaches 1.44 solar masses, the Chandrasekhar limit, drawn as a vertical asymptote. Sirius B is marked at 1.02 solar masses and about 5,800 kilometres, smaller than the Earth. A mass slider moves along the curve and reports the radius, the mean density and the fraction of the limiting mass reached, and beyond the limit the readout states plainly that no stable configuration exists.',
    references: [referenceId('chandrasekhar-1931'), referenceId('pons-2005-white-dwarf-cooling')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('chemical-enrichment'),
    title: 'The recycling loop',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of galactic chemical recycling. The metallicity rises with each generation according to a simple closed-box chemical evolution model, so the shape of the enrichment curve reflects real model behaviour — including its known failure to produce enough metal-poor stars, which is why the figure lets inflow be switched on. Timescales are compressed and the number of stars is a token handful.',
    description:
      'An animated loop. Gas collapses into stars; stars live and die, returning enriched material to the interstellar medium; that gas forms the next generation, which starts with a higher heavy-element content. A metallicity readout climbs with each cycle. Controls let fresh un-enriched gas flow in, which dilutes the metallicity and slows enrichment, and let supernova-driven outflow remove enriched gas entirely, which is what happens in small galaxies with weak gravity. The three settings produce visibly different enrichment histories from the same starting point.',
    references: [referenceId('kobayashi-2020-origin-of-elements'), referenceId('kroupa-2001-imf')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('galaxy-assembly'),
    title: 'Building a galaxy from smaller pieces',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram of hierarchical assembly. It is generated to resemble the output of cosmological simulations but is not one: no gravity is being integrated and no gas physics is solved. What it represents faithfully is the ordering — small halos first, merging into larger ones, with gas cooling into a disk while the dark matter stays extended. Timescales are compressed from billions of years into seconds.',
    description:
      'An animated diagram beginning with many small dark-matter halos scattered across the frame. They fall together and merge into progressively larger structures. Gas, drawn in a separate colour, cools and settles toward the centres of the halos, flattening into rotating disks in which stars light up — while the dark matter remains extended and roughly spherical throughout. A toggle hides the dark matter to show how little of the structure is visible in stars alone. A caption line states that this is a schematic of a process reconstructed from models and observations, not a recording.',
    references: [
      referenceId('somerville-dave-2015-galaxy-formation'),
      referenceId('vogelsberger-2014-illustris'),
    ],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('galaxy-types'),
    title: 'A classification that is really a continuum',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram of galaxy morphology. The galaxy shapes are drawn representations rather than images, and the layout follows Hubble’s tuning fork for familiarity — while the figure’s purpose is to undercut the idea that the categories are boxes. The physical properties attached to each type are typical values from surveys, not properties of any individual galaxy.',
    description:
      'A tuning-fork layout with ellipticals along the handle, spirals and barred spirals along the two prongs, and lenticulars at the junction. Selecting a type reports its typical gas content, star-formation rate, dominant stellar age and how its stars move — rotation-supported for disks, dispersion-supported for spheroids. A slider labelled "classifier agreement" reveals that a substantial fraction of real galaxies sit between the drawn categories, and a note states that Hubble’s "early" and "late" terminology implies no evolutionary sequence.',
    references: [
      referenceId('hubble-1926-classification'),
      referenceId('lintott-2008-galaxy-zoo'),
      referenceId('vandenbergh-1999-galaxy-morphology'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('spiral-structure'),
    title: 'Why arms do not wind up',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram contrasting two accounts of spiral arms. The differential rotation is computed from a flat rotation curve, so the winding of a material arm is a real consequence correctly shown. The density-wave pattern is imposed rather than derived from a dynamical calculation. Whether real arms are long-lived waves or transient recurrent features is still debated, and the figure shows the wave picture as the standard model rather than as settled fact.',
    description:
      'An animated disk of orbiting stars with a toggle between two interpretations. In the material-arm mode, stars in an arm keep their positions relative to the arm, and within a few rotations the arm winds into an unrecognisable tight coil — demonstrating the winding problem. In the density-wave mode, the arm pattern rotates at its own fixed speed while individual stars pass through it, slowing slightly inside and speeding up as they leave; the pattern persists indefinitely. In wave mode, gas entering the arm is compressed and lights up as new blue stars just downstream of the arm’s leading edge, reproducing the observed offset between gas, young stars and old stars.',
    references: [
      referenceId('lin-shu-1964-density-wave'),
      referenceId('kennicutt-evans-2012-star-formation'),
    ],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('galaxy-merger'),
    title: 'Two galaxies pass through each other',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A restricted three-body calculation in the spirit of Toomre and Toomre (1972): stars are treated as massless test particles orbiting two point masses, with no self-gravity. That drastic simplification is the historically important one, because it reproduces the observed bridges and tails. It does not model the gas, the dark matter or the eventual merger dynamics, and the timescale is compressed from hundreds of millions of years.',
    description:
      'An animated encounter between two disk galaxies. As they approach, tidal forces stretch each into long curving tails and a bridge of stars between them. The stars visibly pass through one another without a single collision — a counter tracks the number of stellar collisions, which stays at zero — while the disks are progressively destroyed and the remnants settle into a single spheroidal system. Controls set the encounter geometry and the mass ratio, showing that a major merger destroys both disks while a minor one thickens the larger disk without destroying it. A note explains that gas, not modelled here, does collide directly and drives the starburst that accompanies real mergers.',
    references: [referenceId('toomre-1972-mergers')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('star-formation-regions'),
    title: 'More gas, disproportionately more stars',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The relation between gas surface density and star-formation rate surface density, plotted on the logarithmic axes on which it is conventionally measured, with the observed power-law slope near 1.4 for total gas. The relation is empirical and holds across four orders of magnitude from quiet disks to extreme starbursts. Individual galaxy positions are representative of the observed distribution rather than a specific published sample.',
    description:
      'A logarithmic chart of star-formation rate per unit area against gas surface density per unit area, with a power-law relation of slope about 1.4 running through it. Regions are marked: outer spiral disks at low density, the Milky Way’s inner disk in the middle, and merger-driven starbursts several orders of magnitude higher. A toggle switches between total gas and molecular gas only, and the relation visibly tightens toward linear when only molecular gas is counted — which is the evidence that stars form from molecular clouds specifically. A readout gives the implied gas depletion time, showing that starbursts would exhaust their supply within tens of millions of years.',
    references: [referenceId('kennicutt-evans-2012-star-formation')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('galactic-feedback'),
    title: 'Why galaxies contain fewer stars than they should',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The relationship between a galaxy’s stellar mass and the mass of its dark-matter halo, which peaks at only about 20 percent of the cosmic baryon fraction and falls steeply on both sides. The curve is derived by matching observed galaxy counts to simulated halo counts — an inference from two well-measured distributions rather than a direct measurement of any galaxy. The efficiency shortfall is the strongest general evidence that feedback is important.',
    description:
      'A chart of star-formation efficiency — the fraction of a halo’s available gas converted into stars — against halo mass, on logarithmic axes. The curve peaks near 10¹² solar masses at around 20 percent, and falls by one to two orders of magnitude toward both smaller and larger halos. The two falling wings are labelled with the mechanism usually invoked for each: supernova-driven winds escaping shallow potential wells at low mass, and energy from an accreting black hole at high mass. A toggle removes feedback and shows the far higher curve that gravity and cooling alone would produce, which is the discrepancy that has to be explained.',
    references: [
      referenceId('somerville-dave-2015-galaxy-formation'),
      referenceId('fabian-2012-agn-feedback'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('milky-way-structure'),
    title: 'Our Galaxy, mapped from inside it',
    fidelity: 'reconstruction',
    runtime: 'svg',
    interactive: true,
    caption:
      'A scientific reconstruction, not an image. Nobody has photographed the Milky Way from outside and nobody will. The Sun’s galactocentric distance, the disk scale length and height, the bar length and angle, and the globular cluster distribution are measured quantities from the cited review; the spiral arm positions are the least certain element and are drawn following one common reconstruction among several that remain in contention.',
    description:
      'Two views of the Milky Way. Face-on: a barred spiral with a central bar at about 27 degrees to the Sun–centre line, spiral arms emerging from its ends, and the Sun marked 8.18 kiloparsecs from the centre in a minor spur between two major arms. Edge-on: a thin disk with a scale height of about 300 parsecs, a thicker older disk around it, a central bulge, and a sparse halo of globular clusters extending far above and below. A toggle adds the dark-matter halo, drawn to its inferred virial radius, which dwarfs everything visible. Labels state which parameters are measured and which — principally the arm structure — remain contested.',
    references: [
      referenceId('bland-hawthorn-gerhard-2016-milky-way'),
      referenceId('gravity-2019-galactic-centre-distance'),
      referenceId('harris-2010-globular-catalog'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('solar-neighbourhood'),
    title: 'Why the night sky looks the way it does',
    fidelity: 'schematic',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'A conceptual diagram connecting our position in the disk to the appearance of the sky. The geometry is correct — looking along the disk plane passes through far more stars than looking perpendicular to it — and the Sun’s position is at its measured galactocentric distance. Star positions are generated from a smooth disk model rather than a catalogue, so this is a diagram of why the band exists, not a star chart.',
    description:
      'A rotating view that begins looking down on the Galactic disk with the Sun marked partway out, then tilts into the Sun’s own viewpoint. From inside the disk, looking along the plane the sight lines pass through enormous numbers of stars and the view fills with a bright band; looking perpendicular to the plane, the sight lines leave the disk quickly and few stars appear. Dust lanes are drawn blocking parts of the band, as they do in reality. A control sweeps the viewing direction and a readout gives the number of stars along that sight line relative to looking straight out of the disk.',
    references: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('galactic-centre-orbits'),
    title: 'Stars orbiting something invisible',
    fidelity: 'data-driven',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'The orbit of the star S2 around Sagittarius A*, computed from its published orbital elements — a 16.05-year period, a semi-major axis of about 970 astronomical units and an eccentricity of 0.88. The ellipse and the speed variation along it are therefore the real orbit, not an artistic path. The central object is drawn as a marker at the focus; its size is not to scale, and no image of it is implied.',
    description:
      'An animated view of the Galactic Centre with the star S2 tracing its 16-year elliptical orbit around a marked focus. The star sweeps rapidly through periapsis at about 120 astronomical units, where it reaches 7,650 kilometres per second — 2.6 percent of the speed of light — and crawls slowly through apoapsis. A control speeds up or slows the animation, and a readout gives the current separation, orbital speed, and the mass required at the focus by Kepler’s third law, which comes out at about 4.3 million solar masses. A note distinguishes the measurement, which is a mass inside a volume, from the inference that the object is a black hole.',
    references: [
      referenceId('gravity-2019-galactic-centre-distance'),
      referenceId('genzel-2010-galactic-centre'),
      referenceId('ghez-2008-galactic-centre'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('black-hole-galaxy-relation'),
    title: 'A correlation across three orders of magnitude',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Black-hole mass against bulge stellar velocity dispersion, following the compilation and fitted relation from the cited review. The tightness of the relation is the observation; the mechanism behind it is not established, and the figure says so rather than implying causation. Individual galaxy positions are representative of the published sample distribution.',
    description:
      'A logarithmic chart of black-hole mass against bulge velocity dispersion, with measured galaxies scattered along a steep relation of slope between four and five and a scatter of only about a factor of two. Sagittarius A* is marked at 4.3 million solar masses and M87 at several billion. A readout emphasises the scale mismatch that makes the correlation puzzling: the black hole’s gravitational sphere of influence is of order ten parsecs, while the bulge whose properties it tracks is thousands of parsecs across. A panel presents the two competing explanations — self-regulation through feedback, and averaging through repeated mergers — as competing hypotheses rather than as a conclusion.',
    references: [referenceId('kormendy-ho-2013'), referenceId('fabian-2012-agn-feedback')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('atom-origins-journey'),
    title: 'The journey of your atoms',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The composition of the human body by element, with each element’s dominant production site taken from a published galactic chemical evolution model. The body composition and the production attributions are both drawn from cited sources; what is illustrative is the journey diagram beneath, which represents a typical path rather than the history of any particular atom.',
    description:
      'A composition bar for the human body — about 65 percent oxygen, 18 percent carbon, 10 percent hydrogen, 3 percent nitrogen, with calcium, phosphorus and traces including iron — with each segment coloured by where that element was made. Selecting a segment traces its journey through five stages: origin, ejection into interstellar space, incorporation into the cloud that formed the Sun 4.6 billion years ago, condensation into the Earth, and uptake by living things. Hydrogen’s journey is visibly shorter than the others, because it begins in the first minutes of the Universe and never enters a star at all. A readout gives the approximate age of each element’s atoms.',
    references: [
      referenceId('kobayashi-2020-origin-of-elements'),
      referenceId('cyburt-2016-bbn'),
      referenceId('asplund-2021-solar-composition'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('stellar-generations'),
    title: 'Each generation starts richer',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram of stellar populations against metallicity, with the observed metallicity ranges of Population I and Population II stars marked from survey data. Population III is drawn as a predicted category with no confirmed members, which is the honest representation of its status. The enrichment curve follows a simple chemical evolution model rather than a measured history.',
    description:
      'A metallicity axis running from zero — the primordial composition — up to and beyond solar. Population III sits at exactly zero and is drawn as an empty outline with the label "predicted, never observed". Population II occupies the metal-poor range, with the most extreme measured stars marked below one ten-millionth of solar iron. Population I, including the Sun, occupies the enriched end. Above the axis, a panel shows what each generation could build: no planets at all at zero metallicity, rocky planets becoming possible as silicon and iron accumulate, and giant planets becoming common only at higher metallicity still.',
    references: [
      referenceId('beers-christlieb-2005-metal-poor'),
      referenceId('frebel-norris-2015-first-stars'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('first-stars'),
    title: 'How the first stars were different',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual comparison of primordial and present-day star formation. The temperature difference and its consequence for the minimum collapse mass are computed from the Jeans criterion, so that relationship is real. The predicted mass range for Population III stars comes from simulations and has shifted substantially as those simulations improved — the figure shows both the early and current estimates rather than only the latest.',
    description:
      'A side-by-side comparison. On the left, primordial gas: no dust, no heavy elements, cooling only via molecular hydrogen, reaching about 200 kelvin, and requiring hundreds of solar masses before it can collapse. On the right, present-day gas: dust and heavy-element cooling reaching 10 to 20 kelvin, requiring around one solar mass. A readout computes the Jeans mass for the selected temperature and density, making the factor of hundreds explicit. A timeline beneath shows how the predicted Population III mass range has been revised, from several hundred solar masses in early work to a broad distribution starting near ten in simulations that resolve disk fragmentation.',
    references: [
      referenceId('klessen-glover-2023-first-stars'),
      referenceId('bromm-larson-2004-first-stars'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('cosmic-chemical-history'),
    title: 'Reading the Galaxy’s chemistry off its stars',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The alpha-element to iron ratio plotted against iron abundance — the standard diagnostic of a stellar population’s formation history. The characteristic plateau and downward bend are a robust observational result, and the bend’s position dates the onset of thermonuclear supernova enrichment. The plotted tracks are computed from a chemical evolution model with adjustable star-formation timescale rather than fitted to a specific survey.',
    description:
      'A chart of the oxygen-to-iron ratio against total iron abundance. The curve is flat and high at low iron — when only core-collapse supernovae had contributed — and then bends downward as thermonuclear supernovae begin delivering iron hundreds of millions of years later. A slider changes the star-formation timescale of the modelled population, and the bend moves left or right accordingly: a population that formed its stars quickly bends at low iron, one that formed them slowly bends at high iron. Markers show where the Milky Way’s halo, thick disk and thin disk fall, and where a typical dwarf galaxy falls, reading off four different histories from the same diagram.',
    references: [
      referenceId('kobayashi-2020-origin-of-elements'),
      referenceId('beers-christlieb-2005-metal-poor'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('stellar-spectroscopy'),
    title: 'Every element writes its name in light',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Absorption line positions computed from measured atomic transition wavelengths, shown against a Planck continuum at the selected temperature. The line positions are exact; the line depths are illustrative, since real depths depend on abundance, ionisation state and the structure of the stellar atmosphere in ways that require a model to compute.',
    description:
      'A spectrum strip with a smooth blackbody continuum crossed by dark absorption lines. An element selector adds or removes hydrogen, helium, sodium, calcium and iron, each contributing its own characteristic pattern at fixed wavelengths — hydrogen’s Balmer series at 656, 486, 434 and 410 nanometres, sodium’s bright yellow doublet at 589, and iron’s dense forest of lines. A temperature slider changes both the continuum shape and which lines are strong, demonstrating the point Payne established: hydrogen lines are weak in cool stars not because hydrogen is scarce but because most of it is unexcited.',
    references: [
      referenceId('fraunhofer-1817-lines'),
      referenceId('payne-1925-stellar-atmospheres'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('stellar-parallax'),
    title: 'Measuring distance with geometry alone',
    fidelity: 'data-driven',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'The parallax shift is computed exactly from the geometry: the apparent angular displacement equals one astronomical unit divided by the distance. The angles are enormously exaggerated to be visible — the largest real stellar parallax, Proxima Centauri’s, is 0.77 arcseconds, about the angle a one-euro coin subtends at six kilometres, and would be a fraction of a pixel at true scale.',
    description:
      'An animated diagram of the Earth orbiting the Sun, with a nearby star and a distant background field. As the Earth moves from one side of its orbit to the other, the nearby star appears to shift back and forth against the background while the distant stars stay fixed. A distance slider moves the star further away and the shift visibly shrinks, following the inverse relationship exactly. A readout gives the parallax angle in arcseconds and the distance in parsecs, and marks where Gaia’s precision limit falls — showing that a star at a thousand parsecs still produces a measurable shift, which is what makes a billion-star survey possible.',
    references: [referenceId('bessel-1838-parallax'), referenceId('gaia-2021-edr3-parallax')],
    minimumQuality: 'low',
  },
  {
    id: visualizationId('distance-ladder'),
    title: 'Each rung calibrated on the one below',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The distance ranges over which each technique operates, on a logarithmic scale. The ranges are real, as are the overlap regions where one method calibrates the next. The figure exists to make the dependency structure visible, because that structure is why a systematic error at a low rung propagates all the way up and does not average out.',
    description:
      'A logarithmic distance axis running from within the Solar System out to billions of light-years, with each technique drawn as a bar spanning the range it covers: radar ranging within the Solar System, stellar parallax to a few thousand parsecs, main-sequence fitting and Cepheid variables into nearby galaxies, the tip of the red giant branch, and Type Ia supernovae to cosmological distances. Overlap regions where one method calibrates the next are highlighted, and selecting a rung shows what it depends on beneath it. A note records that ladder-based and microwave-background-based measurements of the expansion rate currently disagree, and that this is why the ladder receives so much scrutiny.',
    references: [
      referenceId('leavitt-1912-cepheids'),
      referenceId('gaia-2021-edr3-parallax'),
      referenceId('riess-2022-sh0es'),
      referenceId('freedman-2021-h0'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('stellar-temperature-colour'),
    title: 'Colour is a thermometer',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Blackbody spectra computed from Planck’s law at each temperature, with the displayed colour derived from the spectrum rather than chosen. The peak wavelength follows Wien’s law exactly. What is approximate is the mapping from spectrum to screen colour, which is limited by what a display can reproduce, and the fact that real stars are not perfect blackbodies.',
    description:
      'A chart of blackbody spectra at several stellar temperatures, from 3,000 kelvin for an M dwarf to 40,000 kelvin for an O star, with the visible band marked. As temperature rises, the peak moves from infrared through the visible into the ultraviolet, and the rendered colour shifts from deep red through yellow-white to blue-white. A temperature slider reports the peak wavelength from Wien’s law and the total emitted power per unit area from the Stefan–Boltzmann law. A second control adds interstellar reddening, showing how dust removes blue light preferentially and makes a hot star masquerade as a cooler one — the main limitation of colour-based temperatures.',
    references: [
      referenceId('pecaut-mamajek-2013-stellar-scale'),
      referenceId('planck-1901-radiation'),
      referenceId('draine-2011-ism'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('binary-star-masses'),
    title: 'Weighing stars with Kepler’s third law',
    fidelity: 'data-driven',
    runtime: 'canvas2d',
    interactive: true,
    caption:
      'Two stars orbiting their common centre of mass, computed from Newtonian gravity with the masses set by the sliders. The orbital period follows Kepler’s third law exactly and the ratio of the two orbital radii equals the inverse ratio of the masses, so both relationships the technique depends on are computed rather than drawn. The stars are shown enormously oversized relative to the orbit.',
    description:
      'An animated binary system with both stars orbiting a marked centre of mass, the heavier one on a smaller ellipse. Mass sliders change both stars, and the orbits adjust: making one star heavier shrinks its own orbit and enlarges its companion’s, while the total mass sets the period. A readout gives the period, the separation and the derived total mass from Kepler’s third law, and shows how the mass ratio is read from the two orbital radii. A toggle switches to the eclipsing case, viewed edge-on, where a light curve appears beneath — dipping each time one star passes in front of the other, which is what removes the inclination ambiguity and makes these systems the source of the most accurate stellar masses known.',
    references: [
      referenceId('torres-2010-eclipsing-binaries'),
      referenceId('kepler-1609-astronomia-nova'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('doppler-redshift'),
    title: 'Two different reasons light gets redder',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Line shifts computed from the relativistic Doppler formula for motion through space, and from the ratio of cosmic scale factors for cosmological redshift. The distinction is the figure’s purpose: they are different physical effects, they agree only at small redshift, and converting a large cosmological redshift into a velocity via the Doppler formula produces a number that does not correspond to anything physical.',
    description:
      'A spectrum with identified absorption lines, shown at rest and then shifted. A mode switch selects between two causes. In Doppler mode, a velocity slider moves the source through space and the lines shift blueward or redward accordingly, with the readout giving the velocity directly. In cosmological mode, a redshift slider stretches the wavelengths by the factor by which space has expanded during the light’s journey, and the readout gives the redshift, the look-back time and the scale factor ratio — while explicitly declining to quote a velocity. A comparison panel shows the two agreeing below redshift 0.1 and diverging sharply above it.',
    references: [
      referenceId('slipher-1917-radial-velocities'),
      referenceId('hubble-1929'),
      referenceId('planck-2018-vi'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('spectrum-decoder'),
    title: 'Six measurements from one spectrum',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram of how different physical conditions imprint themselves on spectral lines. Each effect is modelled with the correct functional form — Doppler shift, thermal and rotational broadening, pressure-broadened wings, Zeeman splitting — but the line profile is synthetic rather than computed from a stellar atmosphere, so this shows the shapes of the signatures rather than a predicted spectrum.',
    description:
      'A single spectral line that responds to five independent controls. Motion shifts its centre. Rotation broadens it symmetrically with a distinctive flat-topped profile. Pressure, which depends on surface gravity, broadens its wings far more than its core. A magnetic field splits it into components whose separation gives the field strength. Temperature changes its depth relative to neighbouring lines of different excitation. Each effect has a visibly different shape, which is why a single spectrum can be decomposed into six separate measurements rather than one.',
    references: [
      referenceId('payne-1925-stellar-atmospheres'),
      referenceId('asplund-2021-solar-composition'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('stellar-lifetimes'),
    title: 'A million to one',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Main-sequence lifetimes against stellar mass, from published evolutionary model grids at solar metallicity. These are computed lifetimes: only the shortest have ever been checked against an observed population, and the predicted trillion-year lifetimes of red dwarfs cannot be tested, because the Universe is far too young for any of them to have aged appreciably.',
    description:
      'A logarithmic chart of main-sequence lifetime against mass, falling steeply from over a trillion years at a tenth of a solar mass to a few million years at sixty. The Sun is marked at about ten billion years. A horizontal line marks the current age of the Universe at 13.8 billion years, and everything to the left of where the curve crosses it has never had time to die — which is most stars by number. A mass slider reports the lifetime and how many such stars could have lived and died in sequence since the Big Bang.',
    references: [referenceId('choi-2016-mist'), referenceId('chabrier-baraffe-2000-low-mass')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('observational-frontier'),
    title: 'How far back we can actually see',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Cosmic time against redshift, computed from the standard cosmological model with measured parameters, marked with what has actually been observed at each epoch. The distinction the figure exists to draw is between observed galaxies at very high redshift, which is established, and observed first-generation stars, which have not been achieved and may not be achievable.',
    description:
      'A timeline running from the Big Bang to the present, marked with epochs and with what has been detected in each. The cosmic microwave background at 380,000 years is marked as directly observed. The predicted era of the first stars, around 100 to 250 million years, is marked as never observed, with a note that the claimed 21 cm detection at redshift 17 was not confirmed by an independent experiment. Spectroscopically confirmed galaxies above redshift 13 are marked at roughly 300 million years. A shaded band shows the gap between the earliest observed galaxies and the predicted first stars, and a panel lists what would count as a detection: a pair-instability supernova, a metal-free galaxy spectrum, or a confirmed 21 cm signal.',
    references: [
      referenceId('curtis-lake-2023-jwst'),
      referenceId('robertson-2022-jwst-galaxies'),
      referenceId('klessen-glover-2023-first-stars'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('stellar-uncertainties'),
    title: 'Where stellar models are weakest',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual map of open problems in stellar physics, positioned by how well established each is and how much it affects predictions the field relies on. The placements are an editorial judgement informed by the cited reviews, not a computed quantity, and are presented as such. The purpose is to distinguish load-bearing uncertainties from ones that change little.',
    description:
      'A two-axis map. The horizontal axis runs from well understood to poorly understood; the vertical axis from low impact on predictions to high impact. Items are placed accordingly: convection appears as poorly understood and high impact, since a one-parameter recipe from 1958 sets predicted stellar ages and radii. Massive-star mass loss is similar, because final mass determines the remnant. The supernova explosion mechanism, neutron-star interior composition and binary interaction rates are placed nearby. Selecting an item gives what is established, what is not, and what evidence would settle it. A note states that these are gaps in specific mechanisms inside a framework that works, not doubt about the framework.',
    references: [
      referenceId('smith-2014-mass-loss'),
      referenceId('sana-2012-binaries'),
      referenceId('janka-2012-explosion-mechanism'),
      referenceId('ozel-freire-2016-neutron-stars'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('galaxy-unknowns'),
    title: 'What galaxy formation still cannot derive',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram of the resolution gap that forces cosmological simulations to use calibrated recipes. The scales shown are real: cosmological volumes resolve hundreds of parsecs at best, while supernova remnants and black-hole accretion disks operate from a parsec down to microparsecs. That gap of many orders of magnitude is the reason feedback is parameterised rather than derived.',
    description:
      'A logarithmic scale axis spanning from the size of a cosmological simulation volume down to the scale of a black-hole accretion disk. The region a cosmological simulation can resolve is shaded, and the processes that actually matter — supernova remnant expansion, molecular cloud fragmentation, black-hole accretion — are marked well below it, in the unresolved region. Selecting a process shows what recipe stands in for it and what is calibrated. A panel lists the specific open problems that follow: the origin of supermassive black-hole seeds, the speed of quenching, and the dwarf-galaxy discrepancies that may reflect baryonic physics or may point elsewhere.',
    references: [
      referenceId('naab-ostriker-2017-galaxy-formation'),
      referenceId('somerville-dave-2015-galaxy-formation'),
      referenceId('vogelsberger-2014-illustris'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  // Phase 7 — Earth
  {
    id: visualizationId('earth-accretion'),
    title: 'Building a planet out of dust',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A stepped conceptual diagram of planetary accretion. Sizes and spacings are chosen for legibility and are not to scale — the disc is drawn a few hundred pixels wide where the real one spanned billions of kilometres, and the bodies at each stage differ in size by many orders of magnitude. The sequence and its causes are well established; the step from centimetre-sized pebbles to kilometre-sized planetesimals is the part still under active research, and the diagram says so rather than glossing it.',
    description:
      'Five steps a reader moves through with Back and Next buttons. Step one: a flattened disc of dust grains orbiting the young Sun. Step two: grains stick into pebbles, with a note that crossing the metre barrier is an unsolved problem because objects that size drift inward and shatter. Step three: a handful of Moon-to-Mars-sized embryos on crossing orbits. Step four: a giant impact between two embryos, drawn as a molten body with ejecta, captioned that the energy melts much of the planet. Step five: a differentiated Earth with an iron core drawn inside a silicate mantle, captioned that dense metal sank and light rock floated.',
    references: [
      referenceId('chambers-2004-accretion'),
      referenceId('elkins-tanton-2012-magma-ocean'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('early-earth-cooling'),
    title: 'How fast the Hadean surface cooled',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Modelled surface temperature across the first 700 million years, computed from a simple magma-ocean cooling law rather than measured — nothing survives from most of this interval. The one hard data point is marked: the 4.40-billion-year-old Jack Hills zircon whose oxygen isotope ratio indicates it formed in the presence of liquid water. The shaded bands, where rock is molten and where liquid water is possible, are the parts of the figure that carry real information; the exact shape of the curve does not.',
    description:
      'A line chart with time in billions of years across the bottom and modelled surface temperature in kelvin up the side. The curve starts above 2000 K, falls steeply through the first few million years, then flattens into a long tail. A red band across the top marks temperatures at which rock is molten; a blue band near the bottom marks the range in which liquid water is possible. A dashed green vertical line at 4.40 billion years ago marks the oldest zircon. A slider moves a marker along the curve, and a readout gives the modelled temperature in kelvin and celsius at that moment together with a sentence saying whether rock would be molten, whether water would be steam, or whether oceans were possible.',
    references: [
      referenceId('elkins-tanton-2012-magma-ocean'),
      referenceId('wilde-2001-zircon'),
      referenceId('valley-2014-hadean-zircon'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('moon-forming-impact'),
    title: 'The giant impact that made the Moon',
    fidelity: 'reconstruction',
    runtime: 'svg',
    interactive: true,
    caption:
      'A reconstruction, not a simulation. Real giant-impact models are three-dimensional hydrodynamic calculations; this is a cartoon of what they produce, with sizes and geometry chosen for clarity. The sequence — oblique collision, melting, a debris disc dominated by mantle material, rapid accretion of the Moon — is the standard model and is supported by the Moon’s low iron content and its depletion in volatile elements. The final panel carries the unresolved problem: Earth and Moon have nearly identical oxygen isotope ratios, which the classic version of the model does not naturally explain.',
    description:
      'Five steps with Back and Next. First, a Mars-sized body named Theia approaching the proto-Earth on a crossing orbit. Second, an oblique collision drawn as two molten bodies with ejecta thrown clear, captioned that both bodies largely melt. Third, a hot disc of debris orbiting the battered Earth, labelled as mostly mantle rock. Fourth, the Moon assembled from that disc, drawn much closer to Earth than today, with a note that models put its formation within decades to a century and that it has been receding ever since at about 3.8 centimetres a year. Fifth, two panels side by side giving the oxygen isotope composition of Earth and Moon as indistinguishable, with a note that Mars and asteroids differ measurably from both, and that this similarity is the open problem the model still struggles with.',
    references: [
      referenceId('canup-2004-moon'),
      referenceId('canup-2012-moon-isotopes'),
      referenceId('young-2016-oxygen-isotopes'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('atmosphere-evolution'),
    title: 'Earth has had three atmospheres',
    fidelity: 'reconstruction',
    runtime: 'svg',
    interactive: true,
    caption:
      'Composition drawn as proportions of three successive atmospheres. The modern figures are measured. The primary and secondary compositions are reconstructions from models and indirect evidence, and their percentages are indicative rather than measured — the carbon dioxide content of the secondary atmosphere in particular is actively debated. What the figure is for is the proportional story: carbon dioxide going from dominant to a trace, and oxygen going from absent to a fifth of the air.',
    description:
      'A stacked horizontal bar showing the composition of one atmosphere at a time, with a legend beneath naming each gas and its percentage. Three buttons switch between the primary atmosphere of about 4.5 billion years ago, dominated by hydrogen and helium captured from the solar nebula; the secondary atmosphere from roughly 4.4 to 2.4 billion years ago, dominated by volcanic carbon dioxide with nitrogen and water vapour; and the modern atmosphere of nitrogen, oxygen, argon and trace carbon dioxide. A note under each explains where that atmosphere came from and where it went — the primary lost to space, the secondary outgassed from the interior, and the modern one’s oxygen produced entirely by photosynthesis and requiring continuous resupply to persist.',
    references: [
      referenceId('catling-zahnle-2020-atmosphere'),
      referenceId('zahnle-2007-early-earth'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('water-origin-isotopes'),
    title: 'Where the oceans came from, read from one ratio',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Measured deuterium-to-hydrogen ratios in water from six sources, on a logarithmic scale. Water that formed further from the Sun carries more deuterium, so the ratio is a fingerprint of origin. Earth’s oceans match carbonaceous chondrites closely and most comets poorly — which is the strongest single constraint on where the water came from. The figure deliberately includes Hartley 2, a comet that does match, because comets turn out not to share a single ratio and the argument constrains the answer without closing it.',
    description:
      'Six labelled horizontal bars on a logarithmic axis of deuterium-to-hydrogen ratio, each tappable. The solar nebula sits lowest at about 21 parts per million; Earth’s oceans at 156; carbonaceous chondrites bracket Earth at roughly 120 to 170; comet Halley at 316; comet 67P, measured in place by Rosetta, at about 530; and comet Hartley 2 at 161, essentially matching Earth. Selecting a bar gives a paragraph on what that source is and what its ratio implies — that nebular gas cannot be the source, that chondrites are the leading candidate, that the Rosetta result weakened the comet hypothesis when it arrived in 2014, and that Hartley 2 shows comets are not uniform.',
    references: [
      referenceId('marty-2012-water-origin'),
      referenceId('alexander-2012-chondrites'),
      referenceId('hartogh-2011-hartley'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('earth-interior'),
    title: 'Inside the Earth, with the radii to scale',
    fidelity: 'to-scale',
    runtime: 'svg',
    interactive: true,
    caption:
      'A cross-section with layer radii in correct proportion, which is unusual — textbook diagrams almost always exaggerate the crust so it can be labelled. Drawn honestly, the crust is thinner than the line around the circle. Depths and temperatures are from the standard reference Earth model and from experimental work on core conditions; the temperature figures for the core carry uncertainties of several hundred kelvin.',
    description:
      'A circle divided into four concentric layers with radii proportional to the real ones: inner core to 1,220 km, outer core to 3,480 km, mantle to about 6,341 km, and crust to 6,371 km. Beside it, four tappable rows name each layer with its outer radius and temperature range. Selecting a layer highlights it in the cross-section and gives a paragraph on its state and, crucially, how it is known — Inge Lehmann finding the inner core in 1936 from seismic waves arriving where none should have been, the outer core identified because shear waves stop dead at its boundary since they cannot travel through liquid, and the mantle mapped by seismic tomography from thousands of earthquake arrival times.',
    references: [
      referenceId('dziewonski-anderson-1981-prem'),
      referenceId('lehmann-1936-core'),
      referenceId('hirose-2013-core'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('plate-tectonics'),
    title: 'The three ways two plates can meet',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Conceptual cross-sections. Vertical scale is exaggerated enormously — the plates are drawn tens of pixels thick where they are a hundred kilometres against a planet 12,700 kilometres across — and the shapes are simplified. What the figure carries accurately is the direction of motion at each boundary and what is created or destroyed there, which is the distinction readers most often lose.',
    description:
      'One cross-section at a time, with three buttons switching between boundary types. Divergent: two plates pulling apart with mantle rising into the gap and freezing onto both edges, labelled with the Mid-Atlantic Ridge and the East African Rift, and a note that the Atlantic widens at roughly the rate fingernails grow. Convergent: one plate bending and sinking beneath another with a volcano drawn inland of the trench, labelled with the Andes, Japan and Cascadia, and a note that water carried down lowers the melting point of rock above. Transform: two plates sliding past each other along a vertical fault with arrows in opposite directions, labelled with the San Andreas and North Anatolian faults, and a note that the fault locks and then slips suddenly, producing large shallow earthquakes but few volcanoes.',
    references: [
      referenceId('wessel-muller-2007-tectonics'),
      referenceId('vine-matthews-1963'),
      referenceId('korenaga-2013-tectonics-history'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('carbon-cycle-thermostat'),
    title: 'The thermostat that has kept Earth habitable',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A deliberately simple model of the Walker–Hays–Kasting silicate-weathering feedback, solved for its steady state. Weathering removal rises with temperature; temperature rises logarithmically with carbon dioxide; the intersection is where the system settles. The behaviour it reproduces is the one that matters — that raising the volcanic input raises the temperature far less than it raises the input — but the parameters are illustrative and the model is not a research tool. It also acts over hundreds of thousands of years, which the note states explicitly.',
    description:
      'A line chart with atmospheric carbon dioxide on a logarithmic axis across the bottom, in multiples of today, and global mean temperature in kelvin up the side. A curve shows the greenhouse relationship between them; a blue band marks temperatures below freezing; a dashed line marks today’s carbon dioxide level. A slider adjusts the volcanic carbon dioxide input from 0.2 to 5 times its present value, and a marker moves to the resulting steady state. A readout gives the settled carbon dioxide level and temperature, and points out the asymmetry: a fivefold change in input moves the temperature only about twenty degrees, because warming speeds up weathering, which removes carbon dioxide, which limits the warming.',
    references: [referenceId('walker-1981-thermostat'), referenceId('berner-2003-carbon-cycle')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('magnetic-field'),
    title: 'The magnetosphere, and the planet that lost one',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram. The field-line geometry is schematic and symmetrical; a real magnetosphere is strongly asymmetric, compressed on the sunward side and drawn into a long tail on the night side, and it is turbulent. What the figure carries is the causal chain — convecting liquid iron, a self-generating dynamo, a field that deflects the solar wind — and the comparison with Mars, whose crustal magnetisation records a dynamo that stopped.',
    description:
      'One scene at a time, with three buttons. With field: Earth drawn with a liquid iron core, dipole field lines arcing from pole to pole, a bow shock on the sunward side, and solar wind arrows stopping at it. Without field: the same planet with no field lines, solar wind arrows reaching the atmosphere directly, and particles drawn escaping to space behind it. Mars: a smaller planet with a solidified core, the same stripping, and a note that its dynamo stopped because the small core cooled too fast to keep convecting. Accompanying text explains that aurorae are charged particles that leaked in and followed field lines to the poles, that atmospheric loss is slow on a human scale and decisive on a geological one, and that the MAVEN mission has measured the escape from Mars still happening.',
    references: [
      referenceId('glatzmaier-roberts-1995-dynamo'),
      referenceId('tarduno-2015-early-dynamo'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('climate-energy-balance'),
    title: 'Planetary temperature from one equation',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Absorbed sunlight set equal to emitted infrared, solved for temperature using the Stefan–Boltzmann law, with the greenhouse contribution added as an adjustable offset. The effective temperature is computed exactly; the greenhouse term is a simplification of a radiative transfer calculation, which is why it appears as a knob rather than as a derived quantity. Earth’s present values are albedo 0.30 and about +33 K, and the figure exists to show how large that second number has to be.',
    description:
      'A diagram of a planet receiving sunlight, with some reflected according to the chosen albedo and infrared radiated back out. Below it, two horizontal scales from 180 to 320 kelvin: one marking the effective temperature computed from absorbed sunlight alone, and one marking the surface temperature after the greenhouse offset. A dashed line marks 273 K, where water freezes. Three sliders control albedo from 0.05 to 0.8, greenhouse warming from 0 to 90 kelvin, and solar output from 0.7 to 1.15 times today. A readout gives both temperatures in kelvin and celsius and says whether the planet is frozen, temperate or hotter than anywhere on Earth, together with the note that Earth’s effective temperature without a greenhouse is 255 K and its oceans would be ice.',
    references: [referenceId('ipcc-2021-ar6-wg1'), referenceId('sagan-mullen-1972-faint-sun')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('snowball-earth'),
    title: 'Two stable planets, one set of conditions',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'An energy-balance model with a temperature-dependent albedo, iterated to its fixed point from two different starting states. It reproduces the qualitative behaviour that matters — bistability and hysteresis, so that the forcing needed to leave a frozen state is much lower than the forcing that would have prevented entering it — but it is a toy, and the real episodes involved ocean circulation, carbon chemistry and continental configuration it does not represent.',
    description:
      'A chart with forcing relative to today across the bottom and global mean surface temperature in kelvin up the side. Two curves are drawn: one traced by a planet starting warm and one by a planet starting frozen. Over a wide middle range both exist at the same forcing, which is the bistability. A blue band marks temperatures at which ice reaches the equator. A slider moves the forcing and a marker shows where the planet settles; a second control switches the starting state between warm and frozen so the reader can find the same forcing giving two different answers. The accompanying text explains that escaping a snowball took hundreds of millions of years of volcanic carbon dioxide accumulating with no rain to wash it out.',
    references: [referenceId('hoffman-1998-snowball'), referenceId('hoffman-2017-snowball-review')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('supercontinent-cycle'),
    title: 'Continents assembling and dispersing',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Schematic blobs, not palaeogeographic reconstructions. Detailed reconstructions exist and are far more accurate, but a reader who cannot recognise Laurentia gains nothing from an accurate outline; what the figure has to carry is the rhythm and the fact that the cycle is still running. The final step is explicitly a model projection rather than a reconstruction — the further plate motions are extrapolated forward, the wider the uncertainty.',
    description:
      'Five steps with Back and Next, each showing landmasses on an ocean. Rodinia at about 900 million years ago as a single mass, with a note that its break-up is a suspect in triggering the Snowball Earth episodes through increased weathering. Break-up between 750 and 600 million years ago into several fragments. Pangaea at about 300 million years ago, reassembled on the other side of the planet, coinciding with the end-Permian extinction. Today, with five separated masses and a note that the Atlantic is still widening and that the fit between African and South American coastlines is what started Wegener thinking. And a projected future supercontinent 200 to 300 million years ahead, variously called Amasia, Pangaea Proxima or Aurica depending on which ocean closes first.',
    references: [
      referenceId('wegener-1915'),
      referenceId('wessel-muller-2007-tectonics'),
      referenceId('hoffman-1998-snowball'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('prebiotic-environments'),
    title: 'What the young planet actually had',
    fidelity: 'reconstruction',
    runtime: 'svg',
    interactive: true,
    caption:
      'Four settings on the early Earth, drawn as places rather than as chemistry. Each is a reconstruction: the vent field is modelled on Lost City in the Atlantic, which is a modern analogue rather than a Hadean observation, and the surface pools depend on how much land existed, which is itself uncertain. The figure is not arguing that any of these hosted the origin of life — that argument belongs to the origin-of-life topics — only showing what the young planet physically offered.',
    description:
      'One scene at a time, with four buttons. Alkaline hydrothermal vents: porous mineral chimneys on a dark seafloor with warm fluid seeping through them, explained as the product of seawater reacting with mantle rock, each pore a compartment with a natural proton gradient across its wall. Volcanic pools: geothermal pools on land with unscreened ultraviolet light reaching them, explained as concentrating solutes by evaporation and driving polymerisation through wet–dry cycling, at the cost of the same light destroying products. Impact delivery: meteorites arriving at an ocean, with a note that the Murchison meteorite alone contains more than eighty amino acids, and that impacts both supplied and destroyed. Ice: crystals with unfrozen brine channels between them, explained as concentrating solutes and stabilising RNA, with the caveat that a cold early Earth conflicts with most reconstructions.',
    references: [
      referenceId('kelley-2005-lost-city'),
      referenceId('deamer-2017-hot-springs'),
      referenceId('alexander-2012-chondrites'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('earliest-life-evidence'),
    title: 'The oldest traces, ranked by how contested they are',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Five claimed traces of early life with their ages and, next to each, a bar showing how widely the interpretation is accepted. That second bar is the honest part of the figure: a chart of ages alone would imply a settled record, and this one is not. The confidence values are the author’s summary of the state of the literature rather than a measured quantity, and every claim shown has a published rebuttal.',
    description:
      'Five tappable rows in order of decreasing age, each giving the claimed age in billions of years, what was found, and where. A 4.1-billion-year carbon inclusion in a Jack Hills zircon; 3.8-billion-year haematite tubes from Nuvvuagittuq in Canada; 3.7-billion-year layered structures from Isua in Greenland; 3.48-billion-year stromatolites from the Dresser Formation in Australia; and 3.43-billion-year stromatolites from Strelley Pool in the Pilbara. Beside each is a coloured confidence bar, red for the weakest claims and green for the strongest. Selecting a row gives a paragraph on why it is or is not accepted — a single inclusion in a single grain, a disputed host-rock age, a 2018 reinterpretation of the Isua structures as rock deformation, and the multiple independent lines of evidence supporting the two Australian cases.',
    references: [
      referenceId('bell-2015-biogenic-carbon'),
      referenceId('dodd-2017-vent-fossils'),
      referenceId('nutman-2016-stromatolites'),
      referenceId('allwood-2018-isua-comment'),
      referenceId('schopf-2018-microfossils'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('feedback-loops'),
    title: 'The two shapes every feedback loop has',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Conceptual loop diagrams. The four examples are real mechanisms and the sign on each is correct; the diagram carries no quantities, because the whole point is the structure. Readers meet the phrase positive feedback and hear something good, and a ring with an explicit sign on it is the cheapest available correction: positive means self-amplifying, and a self-amplifying loop is what takes a planet from temperate to frozen.',
    description:
      'A ring of four labelled nodes with arrows running round it and a large plus or minus sign at the centre, together with the words self-amplifying or self-correcting. Four buttons switch between loops. Ice–albedo, positive: cooling leads to more ice, which reflects more sunlight, which absorbs less heat, which cools further. Silicate weathering, negative: warming speeds up rock weathering, which removes carbon dioxide, which reduces greenhouse warming. Permafrost, positive: warming thaws permafrost, releasing methane and carbon dioxide, causing further warming. Predator and prey, negative but delayed: more prey leads to more predators, which eat the prey down, which reduces predator numbers. Each carries a paragraph on what it does and, where relevant, how uncertain its magnitude is.',
    references: [
      referenceId('ipcc-2021-ar6-wg1'),
      referenceId('hoffman-2017-snowball-review'),
      referenceId('walker-1981-thermostat'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // Phase 7 — Origin of life
  {
    id: visualizationId('what-is-life-criteria'),
    title: 'Every definition of life, against the awkward cases',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A grid rather than a list, because the point is the pattern rather than any single row: no criterion is passed by everything alive and failed by everything dead. The ticks and crosses reflect the standard treatment of each case in the literature, and the question marks mark cases where the answer genuinely depends on how the criterion is stated. This is a conceptual diagram, not data.',
    description:
      'A table with six criteria across the top — metabolism, growth, reproduction, response to stimuli, evolution, homeostasis — and six cases down the side, each tappable. A bacterium passes everything. A virus fails metabolism and independent reproduction while evolving vigorously. Fire passes almost everything except evolution. A crystal grows and templates copies but has no metabolism. A mule is alive and sterile. A dormant seed fails nearly every criterion while remaining alive. Selecting a row gives a paragraph on why it is awkward: that the virus argument has run for eighty years without resolving, that fire shows why heredity sits at the centre of most definitions, and that the mule shows reproduction cannot be a requirement for an individual, only for a lineage.',
    references: [
      referenceId('benner-2010-defining-life'),
      referenceId('cleland-chyba-2002-life'),
      referenceId('schrodinger-1944'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('life-nonlife-gradient'),
    title: 'Where does non-life end and life begin?',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A slider along a continuum, chosen precisely because it cannot be snapped to a boundary. The eight positions are real classes of chemical system in roughly increasing order of the properties associated with life, but the spacing carries no quantitative meaning and the ordering is not a claim about historical sequence. Wherever the reader stops, the systems on either side differ by a little, and the figure never offers a place to draw a line, because the evidence does not offer one.',
    description:
      'A horizontal gradient bar running from plainly chemistry on the left to plainly alive on the right, with eight labelled positions marked along it: simple molecules, amino acids and sugars, polymers, self-templating molecules, autocatalytic sets, protocells, viruses, and cells. A slider moves a marker along the bar and the nearest position is highlighted, with a paragraph describing it — that a self-templating molecule has heredity and that calling it non-living is getting harder to justify, that a protocell has a boundary, an inside, heredity and a crude metabolism, and that viruses sit at the boundary from the other direction as simplified descendants of a world that already had cells. A line beneath states that there is no tick mark here that everyone agrees on.',
    references: [
      referenceId('cleland-chyba-2002-life'),
      referenceId('joyce-szostak-2018-protocells'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('limits-of-life'),
    title: 'How wide the habitable envelope actually is',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Measured tolerance ranges for known life against three physical variables, with the human range marked on each for comparison. The values are the current records from cultured organisms and are revised upward from time to time as new extremophiles are isolated; the ranges shown are the well-attested ones rather than the most extreme individual claims. What the figure carries is the ratio between what life in general tolerates and what the animals a reader is familiar with tolerate.',
    description:
      'One axis at a time, with three buttons. Temperature from minus 25 to 130 degrees celsius, with known life spanning minus 20 to 122, most life from minus 5 to 50, and humans a band around 20 to 40. Acidity from below pH 0 to pH 13, with known life spanning nearly the whole range, most life between 4 and 9, and human blood held within a tenth of a unit of 7.4. Pressure from 0 to 1200 atmospheres, with life growing at over 1,000 in the Mariana Trench and humans in a band near 1. Each carries a paragraph noting what sets the limit — for temperature it is liquid water in brine films at the cold end and protein stability at the hot end, and that thirteen pH units means thirteen orders of magnitude in hydrogen ion concentration.',
    references: [referenceId('rothschild-mancinelli-2001-extremophiles')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('prebiotic-chemistry'),
    title: 'What laboratory chemistry has actually achieved',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A ledger rather than a pathway diagram, and deliberately so. Drawing arrows from simple molecules to a cell would imply a route exists; what exists is a set of successful fragments with gaps between them, often under conditions that are not compatible with each other. Each row is marked demonstrated, partly demonstrated, or not demonstrated, and the two rows at the bottom are the ones that popular accounts routinely omit.',
    description:
      'Seven tappable rows, each with a coloured status dot and a label reading demonstrated, partly demonstrated or not demonstrated. Amino acids: demonstrated, from Miller and Urey in 1953 and from meteorites, with a note that the atmosphere Miller used is now thought to be wrong while the availability of the products is not in question. Sugars: partly, since the formose reaction produces a messy mixture in which ribose is minor and unstable. Nucleobases: demonstrated, adenine from concentrated hydrogen cyanide since 1961. Complete nucleotides: demonstrated, by Powner and Sutherland in 2009 along a route that never assembles the pieces separately. Long RNA chains: partly, reaching tens of units rather than the hundreds a functional ribozyme needs. Self-replicating RNA: not demonstrated, and named as the central unsolved problem. The whole route to a cell: not demonstrated.',
    references: [
      referenceId('miller-1953'),
      referenceId('bada-2013-miller-legacy'),
      referenceId('powner-2009-nucleotides'),
      referenceId('patel-2015-cyanosulfidic'),
      referenceId('joyce-szostak-2018-protocells'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('rna-world'),
    title: 'Why RNA, and what the hypothesis still lacks',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Four conceptual panels: the chicken-and-egg problem, the proposed resolution, the evidence left behind in modern cells, and the objections. The molecular drawings are schematic — the ribosome panel shows RNA at the centre and proteins outside, which is the structural fact that matters, not its actual shape. The fourth panel exists because popular accounts routinely present the RNA world as established when it is a leading hypothesis with serious unresolved chemistry.',
    description:
      'One panel at a time, with four buttons. The problem: DNA and proteins drawn as two boxes with arrows each way, DNA needing proteins to be copied and proteins needing DNA to be made, captioned that neither can come first. The proposal: RNA drawn as one box doing both jobs, storing a sequence and catalysing reactions. The fossil: the ribosome drawn as an RNA core with proteins bolted around the outside, captioned that the chemical step joining amino acids is catalysed by RNA, established when the structure was solved in 2000, and that ATP, coenzyme A and NAD are also RNA-like. The trouble: three crossed-out statements — ribose is hard to make prebiotically and unstable once made, RNA degrades quickly in warm water, and no self-replicating ribozyme exists — with a line noting that some researchers propose a simpler genetic polymer preceded RNA.',
    references: [
      referenceId('gilbert-1986-rna-world'),
      referenceId('kruger-1982-ribozyme'),
      referenceId('nissen-2000-ribosome'),
      referenceId('robertson-joyce-2012-rna-world'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('template-replication'),
    title: 'Copying with errors, and the threshold that kills a lineage',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Eigen’s error threshold, computed exactly: the fraction of error-free copies is the per-base fidelity raised to the sequence length, and the threshold sits at roughly the reciprocal of the error rate. The mathematics is not in dispute. What is illustrative is the choice of fidelity range — real prebiotic copying fidelities are not measured, and the figure uses a plausible span to show the shape of the constraint rather than to quantify it.',
    description:
      'A curve of the fraction of error-free copies against sequence length in bases, with a slider controlling per-base copying fidelity between 95 and 99.9 percent. A dashed vertical line marks the error threshold at the reciprocal of the error rate, labelled with its value in bases. A readout gives the threshold length and the percentage of error-free copies for a 200-base sequence at the chosen fidelity, and explains the trap this creates for any RNA world: accurate copying needs a good catalyst, a good catalyst needs a long sequence, and a long sequence needs accurate copying. It notes that modern cells reach roughly 99.9999999 percent by using proteins to proofread.',
    references: [
      referenceId('joyce-szostak-2018-protocells'),
      referenceId('robertson-joyce-2012-rna-world'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('autocatalytic-network'),
    title: 'Metabolism first: the network is the replicator',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram of a closed catalytic cycle, with five members standing in for what would be a large and messy real network. The idea is hard to picture precisely because nothing in the set is the replicator — the set as a whole is — so the second view removes one member and shows the loop opening. This is an illustration of a hypothesis, not of a demonstrated system: no autocatalytic set that could support open-ended evolution has been made.',
    description:
      'Three views selectable by buttons. Closed loop: five labelled molecules arranged in a ring, each with an arrow to the next, captioned that each catalyses the formation of the next and that the loop closing is what lets the set make more of itself. One removed: the same ring with one member crossed out and the connections either side dashed, captioned that nothing makes the next member and the whole set collapses. In a vent: a cross-section of a mineral wall separating cold alkaline seawater from hot vent fluid, with arrows showing a proton gradient across it, explained as the version of the hypothesis with the strongest chemical case, where mineral surfaces provide the catalysis and the gradient provides the energy without anything being encoded.',
    references: [
      referenceId('wachtershauser-1988-iron-sulfur'),
      referenceId('martin-russell-2003-vents'),
      referenceId('sojo-2016-vents'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('origin-settings'),
    title: 'Four candidate birthplaces, scored honestly',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Each candidate setting gets the same three-part treatment: what it supplies, what it cannot supply, and what would count as evidence. There is no winner, and the figure must not manufacture one — the disagreement here is between serious researchers reading the same incomplete evidence differently, not between a consensus and some outliers.',
    description:
      'One setting at a time, with four buttons, each showing a list of what the setting supplies and a list of what it struggles with, plus a line stating what would settle the case for it. Alkaline vents supply a natural proton gradient, iron-sulphur catalysts and long-lived stability, and struggle with dilution, RNA instability in warm alkaline water, and having no demonstrated route to a genetic polymer. Warm pools supply concentration by evaporation, wet–dry cycling that drives polymerisation, and ultraviolet energy, and struggle with the same light destroying products and with the scarcity of land. Ice supplies concentration into brine channels and stabilises RNA, and struggles with slow reaction rates and a cold early Earth. Elsewhere supplies demonstrated meteoritic delivery of building blocks, and struggles with moving the problem rather than solving it.',
    references: [
      referenceId('martin-russell-2003-vents'),
      referenceId('deamer-2017-hot-springs'),
      referenceId('kelley-2005-lost-city'),
      referenceId('alexander-2012-chondrites'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('membrane-self-assembly'),
    title: 'A compartment that builds itself',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram of amphiphile self-assembly. The molecules are drawn as a head and a tail and the vesicle as a single cross-section; real bilayers are three-dimensional, dynamic, and far more crowded. The critical concentration is real physics — below it molecules disperse, above it they aggregate — but the value here is arbitrary, since it depends on the specific amphiphile. Fatty acid vesicles have been shown to grow and divide; what has not been demonstrated is one that also copies its contents.',
    description:
      'A field of amphiphile molecules in water, each drawn as a blue head with a tail. A slider raises the concentration. Below the critical value the molecules drift separately and the caption says so. Above it they snap into a closed bilayer vesicle — two rings of molecules with tails facing each other and heads facing the water inside and outside — labelled inside, with a caption that the sheet closes into a sphere because an edge would expose tails. Accompanying text explains that nothing assembles this, that the arrangement follows from the shape of the molecule alone, that the result is an inside and an outside which is the minimum requirement for a cell, and that fatty acid vesicles have been shown to grow and divide when fed more material.',
    references: [
      referenceId('szostak-2001-protocells'),
      referenceId('chen-walde-2010-vesicles'),
      referenceId('deamer-2017-hot-springs'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('chemistry-to-biology'),
    title: 'The whole route, with the gaps left visible',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A stepped diagram in which each step carries a progress bar showing how much of it has actually been achieved in a laboratory. Almost every popular version of this figure draws a continuous arrow; marking the achieved fraction turns the same picture into an honest one, with solid ends and a middle that is not. The bar lengths are the author’s summary of the state of the field, not a measured quantity.',
    description:
      'Five steps a reader moves through with Back and Next, each showing a chemical transformation and a progress bar labelled demonstrated, partly demonstrated, or not demonstrated. Simple molecules to building blocks: full, demonstrated repeatedly since 1953. Building blocks to chains: about half, with chains of tens of units achieved and hundreds not. Chains that copy themselves: nearly empty, named as the central gap, with a note that ribozymes copying templates exist but none copies itself with the required accuracy. Contents inside a boundary: about half, since vesicles grow, divide and can encapsulate RNA but not with replicating contents. A population that evolves: nearly empty, with a note that nothing has been carried across this line from scratch and that the route drawn is a research programme rather than a description of what happened.',
    references: [
      referenceId('powner-2009-nucleotides'),
      referenceId('joyce-szostak-2018-protocells'),
      referenceId('szostak-2001-protocells'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // Phase 7 — Early life
  {
    id: visualizationId('complexity-timeline'),
    title: 'Four billion years, drawn linearly',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A linear time axis, which is the whole argument. Every logarithmic version of this figure makes the last few hundred million years look like most of the story; drawn honestly, the microbial stretch occupies three quarters of the bar. Dates are the current consensus values and carry uncertainties of tens of millions of years for the older events; the contested nature of the earliest life claims is marked explicitly.',
    description:
      'A horizontal bar spanning 4,540 million years ago to the present, with tick marks every billion years and eleven event markers a reader can tap. Earth forms; liquid water at 4.40 billion years from zircon evidence; contested traces of life at 3.7 billion; accepted microbial mats at 3.43 billion; oxygen in the air at 2.4 billion; complex cells at 1.8 billion; large organisms at 575 million; the Cambrian diversification at 538 million; life on land at 470 million; the end-Cretaceous impact at 66 million; and modern humans at 300,000 years, whose marker is thinner than the line drawing it. Selecting any marker gives its date and a paragraph on what it was and how confidently it is known.',
    references: [
      referenceId('schopf-2018-microfossils'),
      referenceId('lyons-2014-oxygen-rise'),
      referenceId('knoll-2011-eukaryotes'),
      referenceId('erwin-2011-cambrian'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('luca-timeline-gap'),
    title: 'LUCA is not the first organism',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A schematic timeline, not to scale in its proportions — the width of the interval between the origin of life and LUCA is unknown, and drawing it as a definite length is a convenience. What the figure carries is a structural point: LUCA is the most recent common ancestor of everything that survived, so lineages that existed before it and left no descendants are real life that the genetic record cannot reach.',
    description:
      'A horizontal bar with two marked points: life begins, and LUCA. The interval between them is shaded orange and carries several short branches that end without reaching the present, labelled as other lineages — real life, no survivors, no fossils. To the right of LUCA the bar is shaded green and three branches run to the present, labelled Bacteria, Archaea and Eukarya. A caption states that LUCA is the most recent common ancestor of survivors rather than the first organism, and accompanying text explains that genetics can reconstruct LUCA because every living thing carries evidence of it but cannot reach anything before it, and that current estimates place LUCA somewhere around 4.2 to 3.9 billion years ago with real uncertainty.',
    references: [
      referenceId('weiss-2016-luca'),
      referenceId('moody-2024-luca'),
      referenceId('woese-1990-three-domains'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('first-cell-anatomy'),
    title: 'What a reconstruction of LUCA does and does not contain',
    fidelity: 'reconstruction',
    runtime: 'svg',
    interactive: true,
    caption:
      'A reconstruction with every part colour-coded by how confidently it is inferred. The usual illustration of the first cell presents a complete organism, and the genetics supports nothing of the kind: roughly 350 gene families can be traced to LUCA against several thousand in a modern bacterium, and two of the most basic features — its membrane and its DNA replication machinery — are genuinely unknown because bacteria and archaea use unrelated versions of both.',
    description:
      'A dashed cell outline with six labelled features placed inside and around it, each coloured green for confidently inferred, amber for likely, or red for genuinely unknown, and each tappable. The genetic code, ribosomes and ATP as an energy currency are green, with explanations that these are essentially identical across all life. Hydrogen-based metabolism is amber, pointing towards a hydrothermal setting but depending on contested assumptions about horizontal gene transfer. Membrane lipids and DNA replication machinery are red, because bacteria and archaea build both from unrelated components — meaning either LUCA had no proper membrane or both lineages replaced it, and neither answer is comfortable.',
    references: [
      referenceId('weiss-2016-luca'),
      referenceId('moody-2024-luca'),
      referenceId('mitchell-1961-chemiosmosis'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('tree-of-life'),
    title: 'The tree, drawn twice',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A three-branch simplification of a tree that published versions resolve to thousands of lineages. The first view shows relationships; the second scales each branch by its share of known lineage diversity, which is where the figure earns its place — animals become a twig on a twig. The percentages are approximate and shift as environmental sequencing continues; the 2016 tree that added the candidate phyla radiation roughly doubled recognised bacterial diversity in one paper.',
    description:
      'A branching diagram from a root marked LUCA to three tips labelled Bacteria, Archaea and Eukarya, each tappable. A toggle switches between two views: one in which the branches are drawn at equal thickness to show relationships, and one in which thickness is proportional to each domain’s share of known lineages — roughly 72 percent bacteria, 16 percent archaea and 12 percent eukaryotes — with a small marked twig indicating where animals sit within the eukaryote branch. Selecting a branch gives a paragraph on it, and accompanying text notes that horizontal gene transfer between distant branches means the deepest relationships are better described as a network than a clean tree.',
    references: [
      referenceId('hug-2016-tree-of-life'),
      referenceId('woese-1990-three-domains'),
      referenceId('doolittle-1999-lateral'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('cellular-energy'),
    title: 'How a cell actually gets energy',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Conceptual diagrams of fermentation, respiration and ATP synthase. The membrane, the complexes and the rotor are drawn schematically and are not to scale relative to each other. The mechanism is well established — Mitchell proposed chemiosmosis in 1961 and spent a decade being disbelieved because everyone was looking for a chemical intermediate rather than a gradient, and the rotation of ATP synthase was eventually filmed directly.',
    description:
      'One scene at a time, with three buttons. Fermentation: glucose broken down partway with two ATP produced and ethanol or lactate discarded, captioned that most of the chemical energy remains in the waste. Respiration: a membrane with four numbered complexes embedded in it, electrons entering at one end and oxygen accepting them at the other, with arrows showing protons pumped across at each step and a note that about thirty ATP are produced per glucose. The turbine: protons flowing back through ATP synthase, drawn as a rotor spanning the membrane, with a note that it turns at several hundred revolutions per second and each turn assembles ATP.',
    references: [
      referenceId('mitchell-1961-chemiosmosis'),
      referenceId('lane-martin-2010-energetics'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('photosynthesis'),
    title: 'Two kinds of photosynthesis, and the electron source that separates them',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Conceptual diagrams of anoxygenic and oxygenic photosynthesis, with the third panel comparing their consequences. The photosystems are drawn as boxes rather than as structures. What the figure carries accurately is why two of them are needed to split water and only one to split hydrogen sulphide, and why that difference is the reason one version reshaped the planet. The estimate of the productivity increase spans two to three orders of magnitude in the literature.',
    description:
      'One panel at a time, with three buttons. Anoxygenic: hydrogen sulphide giving up electrons to a single photosystem driven by light, producing sugar with sulphur as waste, captioned that this works but only where hydrogen sulphide is available. Oxygenic: water giving up electrons to two photosystems in series, each absorbing light, producing sugar with oxygen as waste, captioned that two photons per electron pay the extra energy cost of splitting water and that this appears to have evolved exactly once. Why it mattered: two bars comparing global primary production in an anoxygenic world with an oxygenic one, differing by two to three orders of magnitude, with a note that the constraint changed from where the chemical fuel is to where there is water and light.',
    references: [
      referenceId('blankenship-2010-photosynthesis'),
      referenceId('fischer-2016-oxygenic'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('oxygen-tolerance'),
    title: 'Oxygen as poison and as opportunity',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two illustrative response curves against atmospheric oxygen on a logarithmic axis. The shapes are conceptual rather than measured — real tolerance and performance curves vary enormously between organisms — but the crossing is the point, and it is real: the same molecule that was straightforwardly toxic for two billion years became the largest energy source available once enzymes existed to neutralise it.',
    description:
      'A chart with atmospheric oxygen as a fraction of today’s level on a logarithmic axis across the bottom and relative performance up the side. Two curves cross: anaerobes, doing well at very low oxygen and collapsing as it rises, and aerobes, unable to function below a threshold and improving steadily above it. A slider moves a marker along both curves and a readout gives each value. Accompanying text explains that oxygen is a highly reactive molecule that damages proteins, membranes and DNA, that what changed was not oxygen but the appearance of enzymes that neutralise it, and that anaerobes did not disappear but retreated into sediment, deep rock and animal guts where they remain enormously abundant.',
    references: [referenceId('lyons-2014-oxygen-rise'), referenceId('holland-2006-goe')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('eukaryote-origin'),
    title: 'Where eukaryotes sit, and how that answer changed',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two trees, thirty years apart. This is one of the few places where a genuine shift in scientific consensus can be shown directly rather than described, so both are drawn. Branch positions are schematic. The current two-domain picture, with eukaryotes nested inside the archaea and the mitochondrion contributed separately by a bacterium, is now widely though not universally accepted, and the branching order within the Asgard group is still being argued.',
    description:
      'One tree at a time, with a toggle. The 1977 picture: a root labelled LUCA with three branches of equal standing to Bacteria, Archaea and Eukarya. The current picture: the same root, with Bacteria branching off first and Eukarya emerging from within the archaeal branch alongside the Asgard archaea, plus a dashed line from the bacterial branch to Eukarya marking the separate contribution of the mitochondrion. Accompanying text explains that Woese established the three domains from ribosomal RNA in 1977, that metagenomic sequencing of Arctic seafloor sediment turned up Lokiarchaeum carrying genes previously thought eukaryote-specific in 2015, and that an Asgard archaeon was finally cultured in 2020 after twelve years.',
    references: [
      referenceId('woese-1990-three-domains'),
      referenceId('spang-2015-lokiarchaeota'),
      referenceId('imachi-2020-prometheoarchaeum'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('endosymbiosis'),
    title: 'A merger, and the evidence it left behind',
    fidelity: 'reconstruction',
    runtime: 'svg',
    interactive: true,
    caption:
      'A stepped reconstruction. The mechanism by which one cell ended up inside another is genuinely unknown — engulfment without digestion, parasitism, and a metabolic partnership growing progressively closer are all argued for — and the second step says so rather than picking one. The fourth step is the part that is not reconstruction but observation: the specific features of mitochondria that are bacterial rather than eukaryotic.',
    description:
      'Five steps with Back and Next. Two separate organisms, an archaeal host and an aerobic bacterium. One ending up inside the other, with an explicit note that how is not known. The two becoming inseparable as most of the guest’s genes migrate to the host genome or are lost. The evidence left behind, listed as five items: own circular DNA, bacterial-type ribosomes, a double membrane, division by splitting rather than assembly, and maternal inheritance — with a note that antibiotics targeting bacterial ribosomes affect mitochondria too. And a fifth step showing a later separate merger that brought a photosynthetic cyanobacterium into a eukaryote to produce chloroplasts, with a note that some algae acquired theirs by swallowing other algae that had already done it.',
    references: [
      referenceId('sagan-margulis-1967-endosymbiosis'),
      referenceId('roger-2017-mitochondria'),
      referenceId('spang-2015-lokiarchaeota'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('cell-complexity-scaling'),
    title: 'Energy available per gene',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Energy available per gene for four cell types on a logarithmic scale, from Lane and Martin’s 2010 analysis. The bars span four orders of magnitude, which is why the axis is logarithmic and says so. The strong form of the argument — that mitochondria were a prerequisite for complexity rather than merely helpful — is disputed, on the grounds that the result depends on how the comparison is normalised and that some bacteria maintain extensive internal membranes. The correlation between acquiring mitochondria and expanding the genome is not disputed, and the caption says which is which.',
    description:
      'Four tappable horizontal bars on a logarithmic axis of energy available per gene relative to a bacterium: E. coli as the baseline, a large bacterium at roughly 0.3 times, yeast at about 4,700 times, and an amoeba at about 100,000 times. Selecting a bar gives a paragraph explaining it — that a bacterium generates energy across its single outer membrane whose area grows with the square of size while costs grow with the cube, so getting larger makes its budget worse; and that a eukaryote escapes this because energy generation happens on hundreds or thousands of internal mitochondrial membranes each with its own small genome controlling it locally.',
    references: [
      referenceId('lane-martin-2010-energetics'),
      referenceId('lane-2015-vital-question'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // Phase 7 — Evolution, part one
  {
    id: visualizationId('multicellularity'),
    title: 'Why sticking together works',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram of the simplest selective advantage of multicellularity: being too large for a predator with a fixed mouth size. Sizes are schematic, and the cluster radius grows as the cube root of cell number, which is correct scaling. The underlying result is experimental — adding a filter-feeding predator to populations of single-celled green algae has repeatedly produced heritable multicellular colonies within a few hundred generations.',
    description:
      'A cluster of cells beside a filter-feeding predator whose mouth gape is marked with a dashed line. A slider raises the number of cells in the cluster from 1 to 64, and the cluster grows as the cube root of that number. A label above says whether the cluster is small enough to be eaten or too big. A readout gives the cluster radius as a multiple of a single cell’s and notes that nothing worked anything out — the clusters were simply the ones still there. It also records that Ratcliff and colleagues evolved snowflake-shaped yeast clusters in about sixty transfers by repeatedly keeping whatever settled fastest, and that some cells within them were dying in a programmed way that helped the cluster reproduce.',
    references: [
      referenceId('ratcliff-2012-multicellularity'),
      referenceId('knoll-2011-multicellularity'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('cell-cooperation'),
    title: 'A body is a truce, and cancer is what breaks it',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'An illustrative diagram of somatic cells accumulating a defecting lineage. It is a schematic, not a model of tumour progression: real cancers require several mutations acquired in sequence, and the growth here is a single adjustable parameter. What it carries is the structural point — that a body is a population of genetically near-identical cells, and that when mutation breaks that identity, natural selection operates inside the organism over years.',
    description:
      'A grid of cells representing a tissue, all initially green and cooperating. A slider advances the number of accumulated rounds of cell division, and a growing number of cells turn red and are described as no longer stopping and dividing faster than their neighbours. Accompanying text explains that cooperation is stable because all cells in a body descend from one fertilised egg and share the same genes, that a cell which stops obeying the stop signal out-reproduces its neighbours from that moment, and that this is why the body carries so much machinery whose only job is to suppress its own cells — checkpoints, programmed cell death, division limits and immune surveillance.',
    references: [referenceId('szathmary-smith-1995-transitions')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('cell-specialisation'),
    title: 'One genome, many kinds of cell',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A switchboard diagram. The gene names are illustrative rather than a real expression profile, chosen to be recognisable — the concept being shown is that the same set of genes is present in every cell and different subsets are switched on. That fact was settled by cloning experiments in which a nucleus from a differentiated adult cell directed the development of an entire animal, which is the strongest possible demonstration that the information was never lost.',
    description:
      'A grid with six gene names across the top and four cell types down the side, each tappable, and a row of switches for each cell type showing which genes are expressed in green and which are present but silent in grey. A neuron expresses housekeeping genes and ion channels; a muscle cell adds myosin; a red blood cell expresses haemoglobin and little else; a skin cell expresses keratin. Selecting a row gives a paragraph on what that specialisation costs and buys — that a mammalian red blood cell ejects its own nucleus to make room for haemoglobin and so can no longer make proteins, and that the outer surface of skin is made of dead specialised cells doing their job posthumously.',
    references: [referenceId('knoll-2011-eukaryotes')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('cambrian-explosion'),
    title: 'The explosion, and what makes it look larger than it was',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'First-appearance dates from the fossil record compared with divergence times estimated from molecular clocks, for five animal phyla. The fossil dates are observations; the molecular dates are model-dependent estimates with substantial uncertainty, and the two disagree by tens of millions of years. Both are real, and the gap between them is where the argument lives — the figure shows both rather than choosing.',
    description:
      'A time axis from 700 to 460 million years ago with the Cambrian interval shaded, and five horizontal lines for arthropods, molluscs, chordates, echinoderms and annelids. Three views selectable by buttons. Fossil record: each line begins at its first unambiguous fossil, clustered tightly in the early Cambrian. Molecular clocks: each line begins much earlier, in the Ediacaran or before, with the interval between the molecular and fossil dates drawn dashed and labelled as inferred from genetics with no fossils. Why the difference: text explaining that animals began making mineralised skeletons largely in response to predation, and that oxygen rose enough to support larger bodies — so the record shows a genuine ecological revolution and also an artefact of what could be preserved.',
    references: [referenceId('erwin-2011-cambrian'), referenceId('marshall-2006-cambrian')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('diversity-radiation'),
    title: 'Why diversity compounds',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A schematic branching diagram of repeated lineage splitting. It is a diagram of a logic, not a phylogeny: real diversification does not double indefinitely, rates decline as niches fill, and mass extinctions have repeatedly cut the total back by most of itself. The caption states all three limits, because a doubling tree left unqualified would badly misrepresent the fossil record.',
    description:
      'A tree that branches into two at each step, with a slider controlling the number of rounds from zero to four and a running count of lineages. Accompanying text explains that each split happens because a population became isolated — a river moved, a forest fragmented, a few individuals reached an island — and that what makes the process compound rather than merely repeat is that each new organism is itself an environment: once there are trees, there is room for things that eat leaves, bore into wood, live in bark, and eat the things that eat leaves. It also states plainly that this is a schematic of the logic rather than a real phylogeny and that diversification rates decline as niches fill.',
    references: [referenceId('mora-2011-species'), referenceId('erwin-2011-cambrian')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('population-shift'),
    title: 'Evolution changes a population, not an individual',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A distribution of a heritable trait moving under directional selection, with the starting distribution left visible behind it. The distributions are illustrative normal curves rather than plotted field data, but the phenomenon is measured: Peter and Rosemary Grant recorded exactly this shift in beak depth on Daphne Major across drought years, and watched it reverse when the rains returned and small seeds came back.',
    description:
      'A histogram of beak depth across a finch population, with a slider advancing the number of generations of selection during a drought in which only large hard seeds are available. As generations pass the distribution shifts towards deeper beaks and narrows slightly, while the original distribution stays visible behind it in grey. A readout gives the mean beak depth and states explicitly what did not happen: no bird’s beak grew. Birds with deeper beaks cracked the seeds, survived and had offspring, and the population changed because its membership changed.',
    references: [referenceId('grant-grant-2002-finches'), referenceId('darwin-1859')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('selection-ingredients'),
    title: 'The three things natural selection needs',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual diagram in which each of the three requirements can be switched off. Natural selection is often taught as a fact to accept; it is better taught as a consequence, in that given variation, heredity and differential reproduction the outcome follows whether or not anyone believes in it. Removing each ingredient in turn shows that all three are load-bearing.',
    description:
      'Three labelled rows — variation, heredity, differential reproduction — each showing a tick or a cross, and a summary row beneath reading either adaptation accumulates or nothing accumulates. Four buttons switch between all three present and each one removed. Accompanying text explains each case: with all three, change accumulates and nothing else is required, not a designer, not a goal, not any tendency towards improvement. Without variation there is nothing to select between, which is the danger of an inbred population. Without heredity nothing is transmitted, which is why fire does not evolve. Without differential reproduction the mix cannot change through selection, though drift still operates.',
    references: [
      referenceId('darwin-1859'),
      referenceId('wallace-1858'),
      referenceId('lenski-2015-ltee'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('natural-selection-lab'),
    title: 'Selection with the knobs exposed',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A deterministic model of allele frequency change under constant selection, computed exactly from the standard recursion. It ignores genetic drift entirely, which in small populations can override selection — a limitation stated in the accompanying text and addressed by the companion figure on drift. What it reproduces correctly is the S-shape and the fact that advantages that sound trivially small still sweep through a population given time.',
    description:
      'A chart of the frequency of a favoured variant against generations, with two sliders: the selective advantage per generation from 0.5 to 40 percent, and the starting frequency from 0.1 to 20 percent. The curve is S-shaped, and a dashed vertical line marks the generation at which the variant reaches 99 percent, labelled with that number. A readout gives the advantage, the starting share and the time to near-fixation, and points out that the curve is slow while the variant is rare, fast in the middle, and slow again at the end because there is less and less left to replace.',
    references: [referenceId('lenski-2015-ltee'), referenceId('blount-2008-citrate')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('allele-fixation'),
    title: 'Drift against selection',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Five independent stochastic simulations from fixed random seeds, so that the runs do not change between views — a figure that reshuffled on every render would make the reader think the noise was the interface rather than the biology. Reproduction is modelled by a normal approximation to binomial sampling. The qualitative result is standard population genetics: in small populations chance dominates, and beneficial mutations are lost far more often than intuition suggests.',
    description:
      'A chart of allele frequency against generations showing five coloured trajectories from independent populations, all starting at 0.5. Two sliders control population size from 10 to 100,000 on a logarithmic scale and the selective advantage from 0 to 15 percent. At small population sizes the trajectories scatter widely and several hit zero or one within a few hundred generations; at large sizes they follow the deterministic curve closely. A readout counts how many of the five reached fixation and how many were lost, and explains that this is why effective population size matters so much in conservation.',
    references: [referenceId('lenski-2015-ltee')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('selection-not-choice'),
    title: 'Nature does not choose',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two accounts of the same outcome, drawn side by side. The left panel is the story most people carry — that nature notices what is needed and provides it — and the right panel is the mechanism. Both end with the same population, which is exactly why the wrong version survives: it predicts correctly and explains wrongly. The peppered moth case is used because it is well documented, including the field experiments that were repeated after the original work was criticised.',
    description:
      'One panel at a time, with a toggle. The intuition: an oval labelled Nature drawn with a dashed outline, an arrow down from it, and text saying it sees that dark moths are needed and selects them — with a line beneath stating that there is no such agent and no such step. What happens: three rows of moths. The first row shows a population that already varies, some dark and some pale, with a note that nothing new appears. The second shows soot darkening the trees and the pale moths crossed out as visible to birds. The third shows the next generation, now mostly dark. Accompanying text states that industrial pollution did not create the dark moths, that birds ate the ones they could see, and that nothing at any point evaluated, decided or intended.',
    references: [referenceId('darwin-1859'), referenceId('mayr-1982-growth-biology')],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // Phase 7 — Evolution, part two
  {
    id: visualizationId('fitness-landscape'),
    title: 'Why selection gets stuck',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A one-dimensional fitness landscape, which is a caricature. Real landscapes have thousands of dimensions, where valleys are far easier to route around than a two-dimensional picture suggests, and intuitions drawn from this figure often fail. What it carries correctly is the one constraint that matters: selection cannot move downhill, so a population can end on a lower peak and stay there permanently.',
    description:
      'A curve with three peaks of different heights over an axis labelled as some heritable trait. A slider sets where the population starts, and a marker climbs uphill from there to whichever peak it can reach, coloured green if that is the highest peak and red if it is not. Accompanying text explains that reaching a better solution would require passing through worse ones, and gives two consequences visible in real anatomy: the vertebrate eye has its wiring in front of the light-sensitive cells, producing a blind spot, and the nerve serving a giraffe’s larynx runs the length of the neck and back up. Both would be fixed by a redesign and neither can be reached from where those lineages are.',
    references: [
      referenceId('gould-lewontin-1979-spandrels'),
      referenceId('stearns-1989-tradeoffs'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('tree-not-ladder'),
    title: 'The march of progress against the actual topology',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two pictures containing the same organisms. The ladder is not a scientific diagram and is drawn here only to be dismantled; the tree is schematic in its branch positions but correct in the one respect that matters, which is that every living tip sits at the same right-hand edge because every lineage has had exactly the same amount of evolutionary time.',
    description:
      'One picture at a time, with a toggle. The ladder: six figures in a line from a bacterium to a human, each larger than the last and stepping upward, with a line beneath stating plainly that this is not what the evidence shows. The tree: a root branching to seven tips — bacteria, fungi, plants, insects, fish, birds and humans — all reaching a dashed vertical line at the right labelled all equally recent, with the human branch highlighted. Accompanying text explains that the line in the first picture is produced by choosing, at each branch point, the side that leads to us and discarding the rest, and that drawing the same line to a hummingbird gives something equally continuous and equally arbitrary.',
    references: [referenceId('gould-1996-full-house'), referenceId('hug-2016-tree-of-life')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('biomass-pyramid'),
    title: 'The pyramid, and where it stands on its head',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Three trophic pyramids drawn from representative figures rather than from one dataset. The inverted marine pyramid is the reason the figure exists: it looks like a violation of the ten percent rule and is not, which makes it the best available way to force the distinction between a standing stock and a rate. The third view shows the same ocean system measured as energy flow, where the pyramid is the right way up and steeper than the grassland.',
    description:
      'Three stacked bars forming a pyramid, with widths proportional to the values shown, and three buttons. Grassland: a wide band of grass, a narrower band of grazers, a very narrow band of predators. Open ocean by biomass: phytoplankton narrower than the zooplankton above them, an inverted pyramid. Open ocean by rate: the same system measured as energy flow per year, right way up and steeper than the grassland. Accompanying text explains that phytoplankton are tiny and divide in hours, so a small standing crop is replaced continuously and the flow through it is enormous, and that what must obey the ten percent rule is the rate rather than the amount sitting there at any instant.',
    references: [referenceId('lindeman-1942-trophic'), referenceId('bar-on-2018-biomass')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('passive-vs-driven-trend'),
    title: 'A rising maximum is not a trend upward',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A simulation of Gould’s drunkard’s walk with a fixed random seed: 220 lineages taking random steps in complexity, with a hard lower bound. Run without bias it still raises the maximum while leaving the mean pinned near the wall. Run with a bias it moves the whole distribution. This is a simulation of an argument, not a measurement of the fossil record, and the caption says so.',
    description:
      'A histogram of how many lineages have each level of complexity, with a red bar at the left marking the minimum possible. A toggle switches between a passive model with no bias and a driven model with an upward bias, and a slider advances the simulation from zero to 120 steps. A dashed line marks the mean and a readout gives the mean and the maximum. In the passive model the maximum rises steadily while the mean stays near the wall; in the driven model both rise together. Accompanying text notes that the real biosphere looks like the first case, since the maximum has risen for four billion years while the mode of the distribution has stayed on bacteria.',
    references: [referenceId('gould-1996-full-house'), referenceId('mcshea-brandon-2010-ztfel')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('reductive-evolution'),
    title: 'Genomes that got smaller',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Measured genome sizes for four organisms on a logarithmic scale, spanning nearly three orders of magnitude. These are real published values. The figure exists to make quantitatively what anecdotes about blind cave fish make only impressionistically: an endosymbiont with 160 kilobases is not a degenerate bacterium, it is an extremely specialised organism whose specialisation consists almost entirely of subtraction.',
    description:
      'Four tappable horizontal bars on a logarithmic genome-size axis: E. coli at about 4,600 kilobases and 4,300 genes; Buchnera, which lives inside aphids, at about 640 kilobases and 580 genes; Carsonella ruddii at about 160 kilobases and 180 genes; and the human mitochondrion at 16.6 kilobases and 37 genes. Selecting a bar gives a paragraph on what has been lost and why. Accompanying text explains the two forces at work — relaxed selection on functions the host supplies, and small effective population sizes in vertically transmitted symbionts letting drift fix slightly harmful changes — and states that the process is essentially irreversible and is not decline.',
    references: [
      referenceId('wolfe-li-2003-genome-reduction'),
      referenceId('douglas-2010-symbiosis'),
      referenceId('roger-2017-mitochondria'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('life-history-tradeoffs'),
    title: 'One budget, spent three ways',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual allocation diagram in which the total cannot be increased. That constraint is the entire content of the trade-off idea, and a control that steals from one category to feed another teaches it faster than examples alone — though examples are needed too, and the accompanying text supplies them. The three-way split is a simplification of a continuous allocation problem.',
    description:
      'A single bar divided into three coloured segments — growth, reproduction, maintenance and repair — with two sliders that adjust the first two, the third taking whatever remains. Beneath, three separate bars show each allocation with its percentage. A readout names the resulting strategy and gives real organisms that follow it: heavy reproduction as a mayfly, an annual weed or a mouse, which works where mortality is high and unpredictable; heavy maintenance as a tortoise, an albatross or a bristlecone pine, which works where adults survive well; and heavy growth as a large tree or a whale, buying safety and competitive advantage at the cost of years before any offspring.',
    references: [
      referenceId('stearns-1989-tradeoffs'),
      referenceId('gould-lewontin-1979-spandrels'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('niche-space'),
    title: 'A niche is a region, not a place',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two axes of a space that formally has as many dimensions as there are relevant conditions, drawn in two because more cannot be drawn. The distinction between the fundamental and realised niche is the part that matters and is demonstrated experimentally: remove a competitor and a species expands into zones it never occupies naturally, which Connell showed directly with barnacles on Scottish shores.',
    description:
      'A rectangle with temperature across the bottom and moisture up the side, with a note that further axes exist — food size, time of day, and more. A toggle switches between two views. What it could tolerate: a single dashed ellipse labelled fundamental niche, the full range of conditions under which the species could survive with nothing else in the way. Where it actually lives: the same ellipse plus an overlapping ellipse for a competitor, with a smaller solid region labelled realised niche where the species is actually found. Accompanying text explains that the fundamental niche is a property of the organism and can be measured in the laboratory, while the realised niche depends on who else is present.',
    references: [referenceId('hutchinson-1957-niche'), referenceId('elton-1927-animal-ecology')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('fitness-is-context'),
    title: 'Fitness is a relationship, not a property',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Three hypothetical organisms ranked in three environments, with the ranking changing completely between them. The performance values are illustrative rather than measured — the figure is making a conceptual point about what the word fitness means, and inventing plausible numbers is the honest way to make it, provided the caption says they are invented.',
    description:
      'Three ranked bars showing relative reproductive success for a large slow well-defended organism, a heat-tolerant specialist, and a small fast-breeding generalist, with three buttons switching the environment between cold and stable, hot and dry, and disturbed and unpredictable. The ordering changes entirely between environments. Accompanying text explains why in each case, and notes that this is why survival of the fittest misleads — it sounds like a statement about which organisms are best and is really a statement about which happen to leave more offspring under conditions currently in force. It also records that Darwin did not coin the phrase; Herbert Spencer did.',
    references: [referenceId('stearns-1989-tradeoffs'), referenceId('vanvalen-1973-red-queen')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('nested-similarity'),
    title: 'The nested pattern that common ancestry predicts',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Nested boxes showing groups within groups, with the trait that defines each level named. Similarity alone proves nothing — convergence produces plenty of it — so what needs explaining is that the similarities nest strictly, with no crossing, and that anatomy, genetics and development produce the same nesting despite being gathered by different methods over two centuries.',
    description:
      'Five rectangles drawn strictly inside one another and labelled vertebrates, tetrapods, amniotes, mammals and primates, each carrying the trait that defines it. A toggle switches the traits between three kinds of evidence: anatomy, giving backbone, four limbs, amniotic egg, hair and milk, and grasping hands; genetics, giving the shared Hox cluster, limb-patterning genes, the keratin gene family, casein genes and trichromatic opsins; and development, giving notochord, limb buds, extraembryonic membranes, mammary ridge and prolonged brain growth. Accompanying text notes that every box sits entirely inside the next with none overlapping partway, that descent with modification explains this exactly, and that a designer under no obligation to reuse parts could have produced any arrangement.',
    references: [referenceId('darwin-1859'), referenceId('hug-2016-tree-of-life')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('extinction-record'),
    title: 'Extinction intensity through the Phanerozoic',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A curve of extinction intensity over the last 540 million years with the big five marked. The shape is illustrative of the Sepkoski-derived compilations rather than a reproduction of any one dataset, and the background variation is stylised. The percentages given for each event are the standard published estimates and carry real uncertainty. The feature the figure exists to carry is that the line never reaches zero — extinction is continuous, and the famous events are spikes on top of a process that never stops.',
    description:
      'A line chart of percentage of genera lost against time from 540 million years ago to the present, with five marked spikes a reader can tap. End-Ordovician at 444 million years, around 85 percent, attributed to rapid glaciation draining the shallow shelf seas. Late Devonian at 372 million, around 75 percent, a series of pulses with widespread ocean anoxia possibly driven by nutrient runoff from newly forested continents. End-Permian at 252 million, around 90 percent, the Siberian Traps erupting through coal deposits. End-Triassic at 201 million, around 76 percent, removing most crocodile-line archosaurs and letting dinosaurs expand. End-Cretaceous at 66 million, around 76 percent, the Chicxulub impact with the Deccan Traps erupting across the same interval.',
    references: [
      referenceId('raup-sepkoski-1982-extinctions'),
      referenceId('alvarez-1980-impact'),
      referenceId('burgess-2014-permian'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // Phase 7 — Ecology, part one
  {
    id: visualizationId('convergent-evolution'),
    title: 'The same solution, reached independently',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Four cases drawn as two lineages converging on one solution from a distant shared ancestor that had nothing like it. The branch diagrams are schematic. What convergence shows is that the space of workable solutions is narrower than the space of possible ones; what it does not show is that any particular outcome was bound to happen, and the caption keeps those two claims apart because they are routinely conflated.',
    description:
      'A branching diagram from a distant ancestor to two lineages that then converge on a common outcome drawn at the right, with four buttons switching the case. Eyes: vertebrates and octopuses arriving at a camera eye from an ancestor 600 million years back that had at most a light-sensitive patch, with the note that the vertebrate retina is wired backwards and has a blind spot while the octopus one is not and does not. Flight: birds and bats arriving at a powered wing built from completely different material. Body shape: sharks and dolphins arriving at the same streamlined form, with the tail giving the ancestry away since fish beat side to side and mammals up and down. Agriculture: leafcutter ants and termites independently evolving fungus farming, showing that behaviour converges too.',
    references: [
      referenceId('conway-morris-2003-convergence'),
      referenceId('losos-2011-convergence'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('replay-the-tape'),
    title: 'Replaying the tape, as actually performed',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Gould’s thought experiment became a real one when Lenski froze samples every 500 generations and could restart from any point. The figure shows the published result: one population of twelve gained the ability to use citrate, and replays from late samples reproduced it while replays from early ones never did. The bar lengths in the second view are illustrative of the reported pattern rather than exact replicate frequencies.',
    description:
      'Two views selectable by buttons. Twelve populations: twelve horizontal lines representing the long-term evolution experiment, eleven grey and one highlighted, with a marker at about 31,500 generations where that population evolved the ability to use citrate in the presence of oxygen — something E. coli is essentially defined by not doing. Replaying the tape: four bars showing how often restarts from frozen samples at 5,000, 15,000, 20,000 and 30,000 generations reproduced the innovation, running from never to sometimes. Accompanying text explains that something had happened in the interim which made the innovation reachable — a potentiating mutation with no visible effect of its own — and that this is contingency demonstrated rather than argued.',
    references: [
      referenceId('blount-2008-citrate'),
      referenceId('lenski-2015-ltee'),
      referenceId('gould-1989-wonderful-life'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('ecosystem-flows'),
    title: 'Energy passes through; matter goes round',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two conceptual diagrams with deliberately different shapes: an arrow that passes through and leaves, and a ring that closes. Confusing these two is the most common error in thinking about ecosystems, and drawing them differently is the cheapest correction available. Neither carries quantities; the companion carbon-cycle figure does that.',
    description:
      'One diagram at a time, with a toggle. Energy: sunlight entering at the left, passing through boxes for plants, grazers, predators and decomposers, with an arrow leaving each box downward labelled heat, and a caption that energy passes through once and cannot be reused. Matter: four circles arranged in a ring — plants, animals, dead matter, and soil, air and water — connected by a closed dashed loop, captioned that the same atoms go round indefinitely and that the carbon in a leaf becomes carbon in a bird. Accompanying text explains that the second law forbids recycling energy, which is why cutting off sunlight collapses an ecosystem from the bottom within months, and that what limits an ecosystem is the rate at which decomposers release elements back into usable form.',
    references: [
      referenceId('lindeman-1942-trophic'),
      referenceId('falkowski-2008-microbial-engines'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('energy-pyramid'),
    title: 'The ten percent rule, and why food chains are short',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Energy at successive trophic levels computed from an adjustable transfer efficiency. Real efficiencies average around ten percent and range from roughly two to twenty depending on the taxa involved, and the slider spans that range. Making the number adjustable turns a memorised figure into a consequence: chain length is arithmetic, not a fact about ecology that has to be learned separately.',
    description:
      'Five stacked bars forming a pyramid — producers, herbivores, small carnivores, large carnivores and top predators — with widths proportional to the logarithm of the energy reaching each, and each labelled with its value. A slider adjusts transfer efficiency between 2 and 25 percent. Levels that fall below the energy needed to sustain a population are greyed out and labelled as such. A readout gives how many levels the chain supports at the chosen efficiency and explains where the losses come from: material never eaten, material eaten and not digested, and energy burned staying alive, which leaves as heat. It notes that warm-blooded animals sit at the low end because so much goes into maintaining body temperature.',
    references: [
      referenceId('lindeman-1942-trophic'),
      referenceId('estes-2011-trophic-downgrading'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('food-web'),
    title: 'A chain is a path; a web is the actual thing',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A simplified North Pacific kelp system with eight nodes. Real webs contain hundreds of species and connections whose strengths differ by orders of magnitude; this is a sketch of the logic rather than a survey. The consequences described when a species is removed are drawn from documented cases, including the collapse and recovery of kelp forests with the loss and protection of sea otters.',
    description:
      'A network diagram with eight species — kelp, plankton, urchins, crabs, fish, sea otters, seals and orcas — connected by arrows running from consumer to what it eats. Tapping any species removes it and dims every connection that depended on it. A paragraph then describes what follows. Removing sea otters lets urchin numbers explode, and urchins graze kelp to bare rock, taking with them the fish, invertebrates and seabirds that lived in the forest — even though otters never touched the kelp, which is a documented case from the North Pacific fur trade that reversed when otters were protected. Removing less connected species produces modest local effects, and the contrast is the point.',
    references: [referenceId('estes-2011-trophic-downgrading'), referenceId('paine-1966-keystone')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('niche-partitioning'),
    title: 'Five warblers dividing one tree',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Feeding zones for five warbler species in the same spruce trees, after MacArthur’s observations in Maine. The zone boundaries are schematic representations of his results rather than exact reproductions of his data. The second view is a counterfactual — what complete overlap would imply — and is drawn as such, since competitive exclusion means it is not a state that persists.',
    description:
      'A spruce tree drawn beside a vertical axis from base to top, with five coloured bands showing where each warbler species feeds: Cape May at the very top, then Blackburnian, black-throated green, bay-breasted, and myrtle towards the base, each overlapping its neighbours slightly. A toggle switches to a view in which all five occupy the full height, labelled as complete overlap in which one species would exclude the rest. Accompanying text explains that MacArthur recorded where each species spent its time, that they also differ in timing and in which insects they take, and that coexistence requires species to differ somewhere — while noting that the differences are not always found even when species clearly do coexist, a long-running puzzle sometimes called the paradox of the plankton.',
    references: [referenceId('hutchinson-1957-niche'), referenceId('elton-1927-animal-ecology')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('competition-outcomes'),
    title: 'Two competitors, three possible outcomes',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The Lotka–Volterra competition model, integrated forward from equal small starting populations. It is deliberately simple and ignores space, time-varying conditions and any third species, all of which can permit coexistence it forbids. What it produces correctly is the general rule, which is not obvious: two species coexist when each suppresses itself more than it suppresses the other.',
    description:
      'A chart of two population trajectories against time, with two sliders controlling how strongly each species suppresses the other relative to itself, from 0.1 to 1.8. A label names the outcome as coexistence, species A excluding species B, or species B excluding species A. Accompanying text states the rule that falls out of the model — coexistence when both competition coefficients are below one — and explains what it means biologically: that coexistence is not about being equally matched but about the competitors being different enough that each runs out of its own limiting resources before exhausting the other’s.',
    references: [referenceId('hutchinson-1957-niche'), referenceId('tilman-2014-biodiversity')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('predator-prey-cycles'),
    title: 'Lynx and hare, in time and in phase',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The Lotka–Volterra predator–prey model, integrated forward and shown both as time series and in the phase plane. It is simpler than any real system: the Hudson’s Bay Company fur records show the pattern over nearly two centuries, but the real hare cycle is now known to involve food supply and stress physiology as well as predation. The phase-plane view is included because a closed loop there is what an oscillation in time actually is.',
    description:
      'Two views selectable by buttons, with a slider controlling how efficiently predators catch prey. Over time: two curves oscillating out of phase, hares peaking before lynx. Phase plane: the same run plotted with hares across and lynx up, tracing a closed loop that does not settle to a point. Accompanying text explains the sequence — hares increase, lynx increase after a delay, hares are eaten down, lynx starve, hares recover — and that the predator peak always follows the prey peak because predators need time to convert food into offspring, which is why the system oscillates rather than settling at a balance point.',
    references: [referenceId('elton-1927-animal-ecology'), referenceId('vanvalen-1973-red-queen')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('arms-race'),
    title: 'Both sides improve; neither gets ahead',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two illustrative performance curves rising together with a constant gap. The curves are schematic, not measured — real arms races hit physical and energetic limits and do not run indefinitely. The result they carry is the counter-intuitive one that makes the Red Queen hypothesis worth stating: enormous absolute change producing no net advantage on either side.',
    description:
      'A chart of absolute performance against rounds of coevolution, with two curves — predator speed and prey speed — climbing together from a common baseline while the gap between them stays flat. A slider advances the number of rounds, and a readout gives both performance values, the gap, and notes that the gap is essentially where it started. Accompanying text explains that Leigh Van Valen called this the Red Queen hypothesis after the character who has to run to stay in the same place, and proposed it to explain why extinction risk in the fossil record does not appear to fall as a lineage persists: the environment that matters most is other organisms, and they keep adapting.',
    references: [referenceId('vanvalen-1973-red-queen'), referenceId('vermeij-1994-arms-race')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('cooperation-payoff'),
    title: 'Why cooperation is a puzzle, and three resolutions',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A payoff matrix stating the puzzle precisely, followed by the three standard mechanisms that resolve it. The payoff numbers are the conventional prisoner’s dilemma values used for exposition rather than measured quantities. The three mechanisms are presented separately because each has a different signature in nature, and treating cooperation as simply resolved would lose that.',
    description:
      'Four panels selectable by buttons. The problem: a two-by-two payoff matrix showing that defecting pays better whatever the other individual does, with a line noting that two self-interested players end up with 1 each instead of the 3 each they could have had. Kinship: Hamilton’s rule written out, with relatedness values for siblings, cousins and bee sisters, explaining sterile worker castes. Repetition: a row of interaction rounds with one defection marked, explaining that defecting once costs cooperation in every round after and citing vampire bats regurgitating blood preferentially for roost-mates that have fed them. Reputation: a ring of individuals with one defector visible to all, explaining that this requires recognising individuals and remembering what they did.',
    references: [
      referenceId('douglas-2010-symbiosis'),
      referenceId('bronstein-2015-mutualism'),
      referenceId('szathmary-smith-1995-transitions'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // Phase 7 — Ecology, part two
  {
    id: visualizationId('symbiosis-spectrum'),
    title: 'Mutualism, commensalism and parasitism on one axis',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A continuum rather than three categories, which is the correction the figure exists to make. The position of a given relationship is not fixed: mycorrhizal fungi help plants take up phosphorus and are repaid in sugar, but when soil phosphorus is abundant the plant gains little and the fungus becomes closer to a cost. Nothing about the organisms changes; the context does.',
    description:
      'A horizontal gradient bar running from partner B harmed on the left through unaffected in the middle to partner B benefits on the right, with a marker the reader can slide along it. The label above the marker changes between parasitism, commensalism and mutualism, and a paragraph gives an example of each: the fig and its wasp, where neither exists without the other and the relationship is about 75 million years old; barnacles on a whale, where true neutrality is hard to demonstrate and careful measurement often turns apparent commensalism into slight benefit or cost; and tapeworms and parasitic wasps, with a note that a successful parasite usually does not kill quickly. A line beneath records that gut bacteria are helpful in the gut and dangerous in the bloodstream.',
    references: [referenceId('douglas-2010-symbiosis'), referenceId('bronstein-2015-mutualism')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('mutualism-stability'),
    title: 'How mutualisms survive cheating',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Three mechanisms drawn as a host allocating resources to three partners, one of which cheats. The diagram is conceptual; what makes it worth drawing is that each mechanism produces a visibly different allocation pattern. Each is supported by a specific experiment named in the accompanying text, including the argon experiment on legume nodules that demonstrated sanctions directly.',
    description:
      'A host organism connected to three partners, two giving and one cheating, with the connection lines drawn thick where resources flow and dashed where they are withheld. Three buttons switch the mechanism. Sanctions: the host withholds from the cheat, illustrated by legume plants cutting oxygen supply to root nodules supplied with argon instead of nitrogen so the bacteria could not fix any. Vertical transmission: all connections stay thick, because a symbiont passed from parent to offspring has its reproductive future bound to the host’s, as in aphid endosymbionts. Partner choice: the host withholds from the cheat and both sides preferentially allocate to good partners, as plants and mycorrhizal fungi do in a market rather than a punishment.',
    references: [referenceId('bronstein-2015-mutualism'), referenceId('douglas-2010-symbiosis')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('virulence-tradeoff'),
    title: 'Why parasites do not become as harmful as possible',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two opposing curves and their product, computed from illustrative functional forms rather than measured trade-off functions, which vary by system and are weak or absent for some parasites. The result the model produces is the one worth having: the optimum is at an intermediate level of harm, not at zero — which is why the folk claim that parasites always evolve towards harmlessness is wrong.',
    description:
      'A chart with how much damage the parasite does across the bottom and relative performance up the side. Two dashed curves rise and fall against each other — transmission per day increasing with damage, and days the host survives decreasing with it — and a solid curve shows their product, total transmission, peaking at an intermediate value marked with a dashed line labelled best for the parasite. A slider adjusts how easily the parasite spreads between hosts. Accompanying text explains the prediction this yields: where a parasite can spread without the host moving, through water, a vector, or a hospital ward, the cost of disabling the host falls and higher virulence is favoured, with cholera and malaria as the standard examples.',
    references: [referenceId('vanvalen-1973-red-queen'), referenceId('douglas-2010-symbiosis')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('coevolution-matching'),
    title: 'Darwin’s orchid and the predicted moth',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A schematic of an orchid nectar spur and a hawkmoth proboscis, with lengths linked. The drawings are simplified — the real spur is coiled and the real moth far less tidy — and the linear relationship between them is illustrative. The case itself is documented history: Darwin predicted the moth in 1862 from the flower alone, it was described in 1903, and its feeding on the orchid was filmed in 1992.',
    description:
      'An orchid drawn with an adjustable nectar spur beside a hawkmoth whose proboscis extends to match. A slider sets the spur length from 4 to 40 centimetres and the proboscis follows. Accompanying text recounts that Darwin received a Madagascan orchid with a spur about 30 centimetres long and wrote that there must be a moth with a proboscis of comparable length, that the suggestion was ridiculed, and that the moth was named praedicta — the predicted one. It explains that the escalation runs both ways, since a longer spur forces the moth to press harder against the pollen so flowers with longer spurs are pollinated better, and neither partner is trying to escalate.',
    references: [referenceId('darwin-1859'), referenceId('bronstein-2015-mutualism')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('rarity-advantage'),
    title: 'Why no species takes over everything',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two straight fitness lines crossing, which is the simplest possible statement of negative frequency dependence: whichever species is common does worse, so the system is pushed back towards the middle from either side. The linear form is a schematic. The mechanisms behind it are real and specific, and are named in the accompanying text rather than left as an abstraction.',
    description:
      'A chart with the share of the population that is species A across the bottom and reproductive success up the side, showing two lines crossing at the midpoint. A slider moves a marker along both, and a readout says which species is currently increasing. Accompanying text names the mechanisms: the commonest prey is the one predators learn to recognise, the commonest host is the one parasites are adapted to, and the commonest plant depletes the nutrients it needs while accumulating the pathogens that attack it. It records that Janzen and Connell proposed the last of these to explain why tropical forests hold hundreds of tree species, since seedlings near a parent tree die from that species’ accumulated enemies.',
    references: [referenceId('tilman-2014-biodiversity'), referenceId('paine-1966-keystone')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('biodiversity-levels'),
    title: 'Diversity is three things',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Three conceptual panels. A reader who thinks biodiversity means a species count will misread almost every conservation argument, so genetic, species and ecosystem diversity are separated and each given a case where it is the one that matters. The panels are illustrative diagrams and carry no data.',
    description:
      'One panel at a time, with three buttons. Genetic: twenty-four circles of one colour in varying shades, representing variants within a single species, with the Irish potato famine given as the case — nearly all potatoes grown were a single clone with no resistance to Phytophthora — and cheetahs, so genetically uniform after a bottleneck that unrelated individuals accept skin grafts. Species: twenty-four circles of many colours and sizes, with a note that a count treats every species as equivalent, which is why measures weighted by evolutionary distinctness are increasingly used. Ecosystem: four blocks representing forest, wetland, grassland and reef, each with its own community, with a note that a landscape of one habitat type loses everything to a single event.',
    references: [referenceId('tilman-2014-biodiversity'), referenceId('mora-2011-species')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('keystone-removal'),
    title: 'Paine’s starfish, and what removing it did',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The outcome of Robert Paine’s removal experiment on a rocky shore in Washington State: fifteen species before, eight after. The species names shown are representative of an intertidal community rather than his exact list. The result is the one that mattered — removing a predator reduced diversity, which is the opposite of what intuition predicts, and it is where the word keystone comes from.',
    description:
      'A grid of fifteen species tiles representing a rocky intertidal community, each with a coloured marker. A toggle switches between with the starfish, where all fifteen are present, and starfish removed, where seven tiles including the starfish itself are greyed out and a caption states that mussels have taken the rock. Accompanying text explains that Paine removed the starfish from one plot by hand, repeatedly, for years, that mussels were the best competitors for space and had previously been held in check, and that diversity fell from fifteen species to eight. It adds that the concept has since been overused: keystone status is a property of a species in a particular system, not a label it carries everywhere.',
    references: [referenceId('paine-1966-keystone'), referenceId('estes-2011-trophic-downgrading')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('alternative-states'),
    title: 'Two stable states, and the gap between the thresholds',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A hysteresis diagram for a shallow lake flipping between clear and turbid. The threshold values are illustrative, and the state depends on which direction the reader approaches from — which is the whole point. The gap between the tipping-in and tipping-back thresholds is why reducing nutrient input to where it was before so often fails to restore a degraded lake.',
    description:
      'A chart with nutrient input across the bottom and water clarity up the side, showing an upper branch for a clear lake, a lower branch for a turbid one, and a dashed unstable branch between them. Two dashed vertical lines mark the thresholds: a higher one where a clear lake tips over, and a lower one where a turbid lake recovers. A slider moves the nutrient level and a marker follows the branch the system is currently on, so raising the nutrients past the upper threshold flips it and lowering them back does not flip it back. Accompanying text explains that the turbid state is stabilised by its own feedbacks — algae shade out bottom plants, the plants die, the sediment they held is stirred up — and that the same structure describes Snowball Earth, coral reefs turning to algal rock, and grassland turning to scrub.',
    references: [referenceId('hoffman-2017-snowball-review'), referenceId('ipcc-2021-ar6-wg1')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('extinction-vortex'),
    title: 'Why small populations keep getting smaller',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual loop diagram with an illustrative risk estimate attached. The risk figures are not a population viability analysis — real ones are built species by species from measured demographic rates — and are there to show the direction and steepness of the relationship rather than to quantify any particular case. Extinction is usually pictured as an external blow; for most species it is a spiral.',
    description:
      'A ring of four stages with arrows running round it — population falls, fewer mates and more inbreeding, lower survival and fertility, chance events hit harder — and a rotation symbol at the centre. Beneath, a bar showing modelled extinction risk over a hundred years. A slider sets the number of breeding individuals from 20 to 2,000, and the risk bar responds. Accompanying text explains the three things that worsen together as a population shrinks: inbreeding exposing harmful recessives, genetic variation lost to drift so the population cannot adapt, and random events ceasing to average out. It notes that the northern white rhinoceros is now at two individuals, both female.',
    references: [
      referenceId('tilman-2014-biodiversity'),
      referenceId('raup-sepkoski-1982-extinctions'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('extinction-recovery'),
    title: 'What recovery actually looks like',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Schematic diversity curves through and after two mass extinctions, showing the collapse, the interval dominated by a few tolerant generalists, and the long climb back. The curves are representations of the published pattern rather than plots from a specific dataset. The point they carry is that the curve returns and the composition does not: recovery is real, restoration is not.',
    description:
      'A curve of diversity against time with a sharp drop and a long asymptotic recovery, with the collapse shaded red and the aftermath shaded amber and labelled disaster taxa dominate. A dashed horizontal line marks the pre-extinction level. A toggle switches between the end-Permian and the end-Cretaceous. Accompanying text describes the aftermath in each case — the clam Claraia and the burrower Lystrosaurus dominating end-Permian beds, and mammals expanding from small nocturnal animals into whales and bats within about ten million years after the end-Cretaceous — and states that brachiopods never regained their Palaeozoic position and that what returned was never what had been lost.',
    references: [
      referenceId('burgess-2014-permian'),
      referenceId('raup-sepkoski-1982-extinctions'),
      referenceId('schulte-2010-chicxulub'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // Phase 7 — Life and the planet
  {
    id: visualizationId('biosphere-biomass'),
    title: 'What the biosphere is actually made of',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The 2018 global biomass census, in gigatonnes of carbon, shown on both a linear and a logarithmic scale. Both are offered because either alone misleads: the linear view hides the structure and the log view hides the magnitude. Uncertainties are asymmetric and largest for the deep subsurface biosphere, where estimates have been revised downward substantially as sampling improved — so read the plant and animal figures as well constrained and the microbial ones as approximate.',
    description:
      'Seven tappable horizontal bars giving biomass in gigatonnes of carbon: plants at about 450, bacteria at about 70, fungi at about 12, archaea at about 7, protists at about 4, animals at about 2, and humans at about 0.06. A toggle switches between linear and logarithmic scales. Selecting a bar gives a paragraph on that group — that almost all plant biomass is wood, that most bacteria are in deep soil and sediment rather than anywhere visible, that fungi outweigh all animals by roughly six to one, that arthropods are about half of animal biomass, and that human livestock now outweigh all wild mammals by more than an order of magnitude.',
    references: [
      referenceId('bar-on-2018-biomass'),
      referenceId('falkowski-2008-microbial-engines'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('planetary-oxygen-budget'),
    title: 'Why oxygen took so long to reach the air',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A conceptual budget in arbitrary units, not a quantitative reconstruction. The sink capacities are illustrative. What the figure makes intelligible is the delay: cyanobacteria produced oxygen for a long time before any of it accumulated, because dissolved iron, volcanic gases and exposed rock consumed it as fast as it was made. The Great Oxidation Event is the moment production exceeded the sinks, not the moment production began.',
    description:
      'A bar at the top showing oxygen production, controlled by a slider. Beneath it, three sink bars — dissolved iron in the oceans, volcanic gases, and weathering of exposed rock — filling in order as production rises, each labelled saturated once full. At the bottom, a bar showing what is left over for the atmosphere, which stays empty until all three sinks are saturated. Accompanying text explains that banded iron formations are the record of the largest sink being paid off, that the iron ore industrial civilisation is built from is the waste product of a microbial revolution two billion years old, and that how long the delay lasted is actively argued.',
    references: [
      referenceId('lyons-2014-oxygen-rise'),
      referenceId('holland-2006-goe'),
      referenceId('fischer-2016-oxygenic'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('biological-carbon-cycle'),
    title: 'The fast loop and the slow loop',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Carbon fluxes with arrow width proportional to magnitude, which is what makes the point: the geological arrows are hundreds of times thinner than the biological ones. Figures are approximate and vary between assessments. Reading the carbon cycle correctly means holding two timescales at once — a huge, nearly balanced biological exchange, and a tiny, unbalanced geological one that actually sets the atmosphere over millions of years.',
    description:
      'A diagram with the atmosphere as a bar across the top, labelled with its carbon content, and reservoirs beneath it — plants and soil, the surface ocean, and rock — connected by arrows whose widths are proportional to annual flux. Three buttons show the fast biological loop alone, the slow geological loop alone, or both together. The biological arrows carry about 120 gigatonnes of carbon a year out of the air and about 118 back; the geological arrows carry about 0.3 each way. Accompanying text explains that the seasonal wobble in atmospheric carbon dioxide records is northern forests breathing, that the tiny fraction of organic carbon escaping decay is why there is oxygen in the air, and that fossil fuel burning currently adds about 10 gigatonnes a year.',
    references: [
      referenceId('berner-2003-carbon-cycle'),
      referenceId('falkowski-2008-microbial-engines'),
      referenceId('ipcc-2021-ar6-wg1'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('life-environment-feedback'),
    title: 'Four biological feedbacks, with their confidence marked',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Four loop diagrams, each with a bar showing how well established it is. That bar is the honest part: the Amazon moisture loop is well documented, while the plankton–cloud loop is real chemistry whose planetary magnitude has been argued about for three decades and is now generally thought modest. Presenting them as equally solid would be the easy mistake here, and the confidence values are the author’s summary of the literature rather than a measured quantity.',
    description:
      'A ring of four labelled steps with a plus or minus at the centre marking whether the loop amplifies or corrects, plus a confidence bar beneath. Four buttons switch between loops. Forest rain, positive: the Amazon recycling a large fraction of its own rainfall, well documented, with the threshold for savannisation not. Plankton and clouds, negative: dimethyl sulphide seeding cloud droplets, real chemistry with contested climatic magnitude. Peat, positive: bogs maintaining the waterlogged conditions that stop their own material decaying. Weathering, negative: the best-established stabilising loop, and the reason Earth stayed habitable while the Sun brightened, acting over hundreds of thousands of years.',
    references: [
      referenceId('kirchner-2002-gaia'),
      referenceId('ipcc-2021-ar6-wg1'),
      referenceId('berner-2003-carbon-cycle'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('niche-construction'),
    title: 'The beaver and its pond',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A stepped conceptual diagram. The beaver case is the standard one because the constructed environment obviously outlives the constructor, which is what makes ecological inheritance visible. The final step extends the idea to planetary scale and carries the warning the concept most needs: a constructed niche is not necessarily a better one.',
    description:
      'Five steps with Back and Next. A stream with trees along the bank. The beaver felling trees and building a dam, described as a modification of the environment rather than an adaptation to it. A pond, with the flooded trees dead, different plants growing, and amphibians and waterfowl arriving. The offspring inheriting the pond, with an explanation that the dam outlasts its builder and that what is passed on is a changed set of conditions rather than anything acquired being written into DNA. And the same thing at planetary scale, with Earth drawn inside a green atmospheric ring, captioned that cyanobacteria oxygenating the air is niche construction with the whole planet as the pond — and that the oxygen released was lethal to most of the world that existed at the time.',
    references: [referenceId('odling-smee-2003-niche-construction')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('gaia-daisyworld'),
    title: 'Daisyworld, next to the same planet without daisies',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The Daisyworld model integrated to its steady state, plotted against the bare-rock control. The comparison is essential: on its own the model looks like proof that life regulates planets, and next to the control it is clearly a demonstration that one specific coupling can regulate. Its regulation works because the trait under selection, colour, happens to be the trait that controls the planetary variable, albedo, and to act in the right direction. Later analyses showed the result is sensitive to assumptions, with cheaters and herbivores destroying it in some versions.',
    description:
      'Two views selectable by buttons, with a slider controlling solar output from 0.6 to 1.6 times today. Temperature: two curves against solar output, one for a bare planet rising steeply and one for the daisy planet staying far closer to constant, with markers on both at the chosen output. Daisy cover: a bar showing the proportion of the surface covered by black daisies, white daisies and bare ground at that output, with a line stating that no daisy is regulating anything — each simply grows where it grows best. A readout gives both temperatures and explains that this is a demonstration of possibility rather than evidence about Earth.',
    references: [
      referenceId('lovelock-margulis-1974-gaia'),
      referenceId('kirchner-2002-gaia'),
      referenceId('doolittle-2019-gaia'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('complexity-costs'),
    title: 'What complexity costs, measured three ways',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Three separate comparisons on logarithmic scales: time to maturity, offspring per lifetime, and metabolic cost per gram of tissue. The values are representative published figures rather than a single consistent dataset. Each is an independent argument for the same conclusion, which is why all three are offered — a single chart would be easier to dismiss.',
    description:
      'Four tappable bars at a time on a logarithmic axis, with three buttons switching the measure. Time to maturity: a bacterium at about twenty minutes, a fruit fly at ten days, a mouse at six weeks, a human at fifteen years. Offspring per lifetime: a cod at about five million eggs, a frog at twenty thousand, a mouse at sixty, a human at four. Energy per gram: bone at 0.3 relative, resting muscle at 1, liver at about 13 times muscle, and brain at about 15. Selecting a bar gives a paragraph on it, including that the human brain is about 2 percent of body mass and around 20 percent of resting energy use, that most of that goes on pumping ions back across neuron membranes, and that the expensive-tissue hypothesis has not been supported by broad comparative tests.',
    references: [
      referenceId('aiello-wheeler-1995-expensive-tissue'),
      referenceId('herculano-houzel-2009-neurons'),
      referenceId('stearns-1989-tradeoffs'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('success-metrics'),
    title: 'Better at what?',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Five groups ranked on five measures that biology actually uses, on logarithmic scales. The scores are normalised comparative estimates rather than a single dataset, and are there so the reader can switch metrics and watch the ranking stay essentially the same. On abundance, habitat range, metabolic repertoire and duration, prokaryotes win; on biomass, plants do; animals win nothing.',
    description:
      'Five ranked horizontal bars on a logarithmic axis, with five buttons switching the measure between abundance, biomass, habitats, metabolism and duration. The contenders are prokaryotes, plants, fungi, animals and humans, and the bars re-sort with each measure. Accompanying text gives the numbers behind each: around 10 to the thirtieth prokaryotic cells against 10 to the tenth humans; plants at roughly 80 percent of biomass and animals under half a percent; prokaryotes growing above 100 degrees celsius, below pH 0 and kilometres into rock; and prokaryotes alone able to fix atmospheric nitrogen, which is why removing them collapses the biosphere within a few generations while removing all eukaryotes merely alters it.',
    references: [
      referenceId('bar-on-2018-biomass'),
      referenceId('falkowski-2008-microbial-engines'),
      referenceId('rothschild-mancinelli-2001-extremophiles'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('diversity-vs-complexity'),
    title: 'Diversity as insurance',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A simple model of two communities put through the same drought: one with twelve species spanning a range of tolerances, one with twelve species sharing nearly the same tolerance. The model is schematic. The empirical result behind it is not: the Cedar Creek grassland experiments have run for decades and diverse plots produce more biomass and, more importantly, vary less from year to year, losing far less productivity in drought and recovering faster.',
    description:
      'Twelve species tiles that survive or fail as a drought slider is raised, with a productivity bar beneath and a count of survivors. A toggle switches between a diverse community, whose species have tolerances spread across the range, and a uniform one, whose species share nearly the same tolerance. The uniform community is unaffected until the drought passes its shared tolerance and then fails entirely; the diverse one loses species progressively and keeps functioning. Accompanying text extends the argument to evolutionary time: after each mass extinction, what rebuilt the world was whichever surviving lineages happened to suit the new conditions, and the more lineages there were, the better the odds that something did.',
    references: [referenceId('tilman-2014-biodiversity')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('diversity-turnover'),
    title: 'Diversity as the balance of two rates',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A simple exponential model of standing diversity as origination minus extinction. It is deliberately crude — real rates are neither constant nor independent of standing diversity — and its job is to make one structural point: diversity is not a total that accumulates but the difference between two processes, both of which run all the time. Once that is visible, extinction stops looking like the opposite of evolution.',
    description:
      'A curve of the number of species alive against time, with two sliders controlling the origination and extinction rates independently. A label states whether diversity is rising, falling or steady, and a dashed line marks the starting level. A readout gives the final diversity as a multiple of the start and the average species lifespan implied by the extinction rate. Accompanying text notes that over 99 percent of species that have ever lived are extinct and that the typical species in the fossil record persists a few million years, and that mass extinctions differ from ordinary extinction not just in rate but in which traits help you survive.',
    references: [referenceId('raup-sepkoski-1982-extinctions'), referenceId('mora-2011-species')],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // Phase 7 — History and the bridge
  {
    id: visualizationId('precambrian-timeline'),
    title: 'Two billion years of very little happening',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'The Proterozoic on a linear axis, zoomed in from the four-billion-year view where this whole interval is a smear. Dates are consensus values with uncertainties of tens of millions of years. The impression the figure is meant to leave is the correct one: complex cells were in place for well over a billion years before anything made of many of them became common, and the cause of that delay is not settled.',
    description:
      'A horizontal bar from 2,500 to 500 million years ago with seven tappable markers. The Great Oxidation Event at 2,400 million years, after which oxygen stayed at perhaps one percent of today for well over a billion years. The oldest accepted eukaryote fossils at 1,800 million. Multicellular red algae at 1,200 million, showing the oldest known evidence of sexual reproduction. Snowball Earth beginning at 720 million. Ice retreating at 635 million. The Ediacaran biota at 575 million, with a note that many forms are unlike anything alive and most disappear before the Cambrian. And the Cambrian beginning at 538 million. Selecting any marker gives its date and a paragraph on what it was.',
    references: [
      referenceId('lyons-2014-oxygen-rise'),
      referenceId('knoll-2011-eukaryotes'),
      referenceId('hoffman-2017-snowball-review'),
      referenceId('erwin-2011-cambrian'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('major-transitions'),
    title: 'The transitions, with the conflict each had to suppress',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Maynard Smith and Szathmáry’s list, with a third column that turns it from a chronology into a structural claim: for each transition, the mechanism that stops the combined units competing with each other. The list is usually given in chronological order, which makes it look like rungs on a ladder, and the caption says explicitly that it is not — most lineages have been through only the first of these.',
    description:
      'Six tappable rows, each showing what was separate before, what it became, and the mechanism that suppressed lower-level competition. Separate replicating molecules to chromosomes, suppressed by linkage. Independent genes to fair meiosis, suppressed by giving each copy an equal chance. Separate cells to complex cells, suppressed by uniparental inheritance of mitochondria. Single cells to multicellular bodies, suppressed by clonal development. Solitary individuals to eusocial colonies, suppressed by a single queen and worker policing. Individual learning to cultural inheritance, marked as still in progress. Selecting a row gives a paragraph including the cases where suppression fails — meiotic drive, selfish mitochondria causing male sterility in plants, cancer, and workers destroying each other’s eggs.',
    references: [
      referenceId('szathmary-smith-1995-transitions'),
      referenceId('roger-2017-mitochondria'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('move-to-land'),
    title: 'What water was doing, and how limbs appeared',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two conceptual panels. The first lists the services water provides free and what has to be built to replace each on land, which is what makes the transition feel as hard as it was. The second gives the Devonian tetrapod sequence, which carries the more important lesson: the equipment appeared before there was any use for it on land, and the fossils show limbs with digits in animals that still had gills and tail fins.',
    description:
      'One panel at a time, with a toggle. What water was doing: six paired rows, each with what water supplied on the left and what must be built on the right — holding the body up against a skeleton strong enough for gravity, keeping everything wet against waterproof skin or cuticle, delivering dissolved oxygen against lungs, carrying away waste against kidneys, carrying gametes together against internal fertilisation or the amniotic egg, and buffering temperature against behaviour or insulation. How limbs appeared: five stages from lobe-finned fish with robust jointed fin skeletons and lungs, through Tiktaalik with a neck and sturdy propping fins, Acanthostega with true limbs and eight digits while still living in water, Ichthyostega with stronger limbs and ribs, to early tetrapods where digits settle at five.',
    references: [
      referenceId('clack-2009-tetrapods'),
      referenceId('kenrick-crane-1997-land-plants'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('continental-greening'),
    title: 'Plants rebuilding the continents',
    fidelity: 'reconstruction',
    runtime: 'svg',
    interactive: true,
    caption:
      'A stepped reconstruction of the Devonian and Carboniferous. The landscapes are schematic. The detail worth carrying is the river channel: braided sheets before rooted plants and stable meandering channels after, a change recorded in sedimentary rock and one of the clearest demonstrations that life is a geological force. The atmospheric figures are model-derived and carry substantial uncertainty in their magnitude, particularly the biotic weathering enhancement.',
    description:
      'Four steps with Back and Next. Before plants: bare rock with water running in wide braided sheets, captioned that soil is largely made and held by living things. First land plants around 470 million years ago: small low forms without roots, arriving in partnership with fungi. Roots and wood: trees with root systems drawn splitting the rock, and a single stable meandering channel replacing the braided sheets. The atmosphere changes: a panel showing carbon dioxide falling roughly ten-fold and oxygen rising to perhaps 35 percent, with a buried black layer labelled as the Carboniferous coal measures, and a note that the classic explanation for the coal — that lignin-degrading fungi had not yet evolved — has been substantially revised.',
    references: [
      referenceId('kenrick-crane-1997-land-plants'),
      referenceId('berner-2003-carbon-cycle'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('animals-reshape'),
    title: 'The Cambrian substrate revolution',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two cross-sections of a seafloor, before and after burrowing animals. A cross-section is the only way to show this change; a species list would not. The vertical scale is schematic. What it carries is that burrowing altered the physical and chemical structure of the sediment itself, not merely who was living on it.',
    description:
      'One cross-section at a time, with a toggle. Before animals: a seafloor covered by a thick layered microbial mat, with sharply stratified anoxic sediment beneath, captioned that this persisted essentially undisturbed for hundreds of millions of years. After burrowers: the same seafloor with the mat gone, burrows drawn running metres down, the layering destroyed and the sediment churned, with animals living inside it. Accompanying text explains that burrowing pumps oxygen down and changes where chemical reactions happen, altering how phosphorus and sulphur cycle for the whole ocean, and that a class of organisms adapted to firm undisturbed mats disappeared while a class adapted to soft mud appeared.',
    references: [referenceId('erwin-2011-cambrian'), referenceId('estes-2011-trophic-downgrading')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('mesozoic-timeline'),
    title: 'The Mesozoic at true scale',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A linear time axis from the end-Permian to the Eocene, which is the correction the figure exists for: more time separates Stegosaurus from Tyrannosaurus than separates Tyrannosaurus from us, and no amount of saying so works as well as putting them on the same axis. Dates are standard published values.',
    description:
      'A horizontal bar from 252 to 40 million years ago with eight tappable markers. The end-Permian extinction clearing the way. The first dinosaurs at 233 million, as a modest group among many. The end-Triassic extinction at 201 million, removing most of their competitors. Stegosaurus and Archaeopteryx at 150 million. Flowering plants spreading at 130 million. Tyrannosaurus at 68 million, eighty-two million years after Stegosaurus. The Chicxulub impact at 66 million. Mammals expanding at 55 million. Selecting any marker gives its date and a paragraph, including that dinosaurs became dominant by inheritance after an extinction rather than by winning a contest, and that Archaeopteryx shows feathers and flight in an animal still plainly a small theropod dinosaur.',
    references: [
      referenceId('brusatte-2015-dinosaurs'),
      referenceId('schulte-2010-chicxulub'),
      referenceId('alvarez-1980-impact'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('impact-winter'),
    title: 'The hours, months and years after the impact',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'A stepped account of conditions after the Chicxulub impact, on a logarithmic time axis. Sunlight levels are illustrative of published model ranges rather than a specific simulation, and which phase did most of the killing — the thermal pulse, the darkness, the cold, or ocean acidification — is still argued, as is how much the Deccan Traps eruptions across the same interval contributed. The impact is now generally accepted as the proximate trigger.',
    description:
      'A scene showing sunlight reaching the ground, plants at the surface, and a readout of surface light as a percentage of normal, with a logarithmic slider running from the moment of impact to a century afterwards. Six phases are described as the slider passes them: the impact itself, releasing energy on the order of a hundred million megatons into sulphur-rich carbonate rock; hours, in which re-entering ejecta heats the upper atmosphere and being underground or underwater becomes decisive; weeks, in which aerosol and dust cut surface light by orders of magnitude and photosynthesis largely stops; months to years of sharp cooling; years, as aerosols settle and light returns to survivors that could live on detritus; and decades, in which released carbon dioxide leaves a warmer world than before.',
    references: [referenceId('alvarez-1980-impact'), referenceId('schulte-2010-chicxulub')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('persistence-through-crises'),
    title: 'Where life keeps most of itself',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Five depth bands of the biosphere, with each catastrophe applied to them in turn. The reach of each catastrophe is a qualitative judgement rather than a measured depth. The point the figure carries is structural: the visible biosphere is not where the biosphere mostly is, which is why events that eliminate every large animal barely register two kilometres down.',
    description:
      'Five stacked bands representing depth zones — above ground and canopy, surface and sunlit ocean, soil and shallow sediment, deep sediment, and crust kilometres down — each named with what lives there. Four buttons apply different catastrophes, and the bands each catastrophe reaches turn red and are labelled devastated while the rest stay green and are labelled largely unaffected. The catastrophes are an asteroid impact, a Snowball Earth glaciation, a hypothetical gamma-ray burst, and massive volcanism of the end-Permian kind. Accompanying text explains why each stops where it does, and notes the selection effect: we could only be observing from a planet where life persisted, so persistence alone is not evidence that it was likely.',
    references: [
      referenceId('bar-on-2018-biomass'),
      referenceId('rothschild-mancinelli-2001-extremophiles'),
      referenceId('hoffman-2017-snowball-review'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('learning-vs-instinct'),
    title: 'When paying for a brain returns more than it costs',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two illustrative performance curves against how fast the environment changes, in units of changes per lifetime on a logarithmic axis. The curves are schematic representations of the qualitative result from formal models rather than measured data. The non-obvious part is the right-hand end: when conditions change faster than an animal can learn, what it learned is already wrong and neither strategy works.',
    description:
      'A chart with how many times conditions change per lifetime on a logarithmic axis across the bottom and performance up the side, showing two crossing curves for inherited behaviour and for learning. A slider moves a marker along both and a readout says which strategy is doing better. Accompanying text explains that an inherited program is extremely efficient with no learning period and no brain tissue to feed, and that its weakness shows when the world moves — a digger wasp whose provisioning sequence is interrupted at the wrong point will restart it from the beginning repeatedly, because the program has no representation of the goal.',
    references: [
      referenceId('roth-dicke-2005-brains'),
      referenceId('dunbar-shultz-2007-social-brain'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('brain-energy-budget'),
    title: 'Two percent of the body, twenty percent of the energy',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Published figures for brain mass and resting energy share in four cases, drawn as a proportional pair of bars. The comparison across species carries the argument that this is expensive for everyone and that humans are at the extreme rather than in a category of their own. Neuron counts are from isotropic fractionator measurements. How hominin brain expansion was funded remains argued.',
    description:
      'Two horizontal bars, one for share of body mass and one for share of resting energy use, with the ratio between them stated beneath, plus a neuron count. Four buttons switch the case. A human adult at 2 percent of mass and 20 percent of energy with about 86 billion neurons. A human newborn at 10 percent of mass and 60 percent of energy, with a note that a brain which learns cannot be finished at birth and that long dependency is part of the price. A chimpanzee at 0.9 and 9 percent with about 28 billion neurons. A mouse at 1.6 and 6 percent with about 71 million. Accompanying text notes that nervous tissue cannot store fuel, cannot tolerate interruption, and does not reduce its demand at rest.',
    references: [
      referenceId('herculano-houzel-2009-neurons'),
      referenceId('aiello-wheeler-1995-expensive-tissue'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // Phase 7 — Philosophy and the handover
  {
    id: visualizationId('intelligence-drivers'),
    title: 'Three hypotheses about what drove large brains',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Each hypothesis is given the same two-part treatment: the evidence for it and the problem with it. They are not competing alternatives — current treatments regard them as jointly contributing — so presenting one as the answer would be wrong, and each panel carries its own counter-evidence rather than leaving it to a footnote.',
    description:
      'One hypothesis at a time, with three buttons, each showing a green panel of evidence and a red panel of problems. Ecological: species relying on patchy food have larger relative brains than close relatives eating abundant uniform food, with the problem that diet quality and brain size are entangled since a better diet also supplies the energy a bigger brain needs. Social: relative neocortex size correlates with group size across primates, with the problem that it does not generalise to some large-brained birds and cetaceans and that correlation cannot fix the direction of causation. Cultural: bigger brains let an individual acquire more of what the group already knows, evidenced by distinct tool-making traditions in New Caledonian crow populations, with the problem that this may amplify intelligence rather than start it.',
    references: [
      referenceId('dunbar-shultz-2007-social-brain'),
      referenceId('roth-dicke-2005-brains'),
      referenceId('herculano-houzel-2009-neurons'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('social-complexity'),
    title: 'Why a social group is a harder problem than it looks',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A complete graph on an adjustable number of nodes, with the number of edges counted. The mathematics is exact: relationships grow as n times n minus one over two, so doubling the group roughly quadruples them. Drawing every edge at thirty individuals makes that visceral in a way the formula does not. The claim that animals track these relationships is empirical and is described in the accompanying text.',
    description:
      'A ring of individuals with a line drawn between every pair, and a slider setting the group size from 2 to 30. A readout gives the number of individuals and the number of pairwise relationships. Accompanying text explains that a chimpanzee or baboon demonstrably tracks who is dominant to whom, who groomed whom, and which two have been spending time together — and therefore what will happen if you challenge one of them. It notes that unlike a tree or a rock, every one of those individuals is also adapting to you, so the difficulty escalates rather than being learned once, and that the correlation with neocortex size does not generalise cleanly beyond primates.',
    references: [referenceId('dunbar-shultz-2007-social-brain')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('humans-on-the-tree'),
    title: 'One twig, and a very short one',
    fidelity: 'data-driven',
    runtime: 'svg',
    interactive: true,
    caption:
      'Two views: humans as one tip among many on a tree where every living lineage reaches the same right-hand edge, and lineage durations on a logarithmic scale. The durations are approximate first-appearance figures for the group as commonly defined. The second view is the one that does the work — a reader can accept being one twig among millions and still feel like the culmination until they see that sharks have been here a thousand times longer.',
    description:
      'One view at a time, with a toggle. One twig among many: a root branching into twenty-six lineages that all reach a dashed vertical line labelled today, with the human branch highlighted and labelled us. How long each has lasted: six horizontal bars on a logarithmic axis giving cyanobacteria at about 2,500 million years, horseshoe crabs at 445, sharks at 420, coelacanths at 400, crocodilians at 95, and modern humans at 0.3. Accompanying text notes that human populations are still evolving — lactase persistence, high-altitude adaptation and malaria resistance all spread within the last ten thousand years — and that there is no biological sense in which a lineage can be final short of extinction.',
    references: [
      referenceId('hug-2016-tree-of-life'),
      referenceId('gould-1996-full-house'),
      referenceId('lenski-2015-ltee'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('teleonomy-vs-teleology'),
    title: 'Two arrows of causation',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'The distinction between teleonomy and teleology is entirely about which way the arrow points — from past events, or from a future goal — and drawing it that way makes a distinction that is hard to state in words almost trivial. A conceptual diagram with no quantities.',
    description:
      'Three boxes labelled past, now and future, showing who survived, a heart that pumps, and circulating blood. A toggle switches between two views. What actually happens: solid arrows running left to right, captioned that causation runs forward and that the heart has its function because of what happened before rather than because of what it will do. What the language implies: a dashed arrow running backwards from the future box, labelled with the phrase evolution developed a heart in order to circulate blood, and a line stating that this arrow points backwards from a goal and no such arrow exists. Accompanying text notes that Ernst Mayr called the first teleonomy, and that a process with foresight would leave a very different record — no vertebrate blind spot, no nerve running down a giraffe’s neck and back up.',
    references: [referenceId('mayr-1982-growth-biology'), referenceId('darwin-1859')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('two-kinds-of-why'),
    title: 'The word why doing two different jobs',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Three questions, each asked twice — once as a request for a mechanism and once as a request for a reason. Almost every confusion in this part of the section comes from sliding between the two, and separating them explicitly is the whole content of the figure. A conceptual diagram with no data.',
    description:
      'A question at the top and two panels beneath it, one headed by what process and one headed for what purpose, each containing the answer available under that reading. Three buttons switch the question. Why does it rain: only the mechanism reading makes sense, and nobody asking expects an intention. Why did she lie to me: only the reason reading makes sense, and the mechanical answer about air passing over vocal folds is true and answers nothing you were asking. Why did life begin: the mechanism reading is a hard scientific problem with real progress and no settled answer, and the reason reading is marked not available, because there is no evidence of an intention and science has no method for finding one. A verdict beneath each explains why that question behaves as it does.',
    references: [referenceId('cleland-chyba-2002-life'), referenceId('mayr-1982-growth-biology')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('order-from-flow'),
    title: 'Order appearing because energy is flowing',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A schematic of Bénard convection, in which a fluid heated from below and cooled from above organises into regular cells above a threshold. This is real physics and the transition is genuine; the threshold value here is arbitrary and the cells are drawn as simple rolls. The caption states the limit explicitly, because this figure explains self-organisation and not heredity, and treating the two as the same result is the most common overstatement in this area.',
    description:
      'A fluid layer heated from below and cooled from above, with a slider controlling the heating. Below the threshold the particles are drawn scattered and the caption reads disordered motion, heat conducted, no structure. Above it they snap into a row of regular convection cells with arrows showing circulation, captioned that nobody arranged them. Accompanying text explains that organised motion carries heat upward more effectively than random motion, that the structure persists for as long as the heating continues, and that order inside is paid for by disorder outside so the books balance — the answer Schrödinger gave in 1944 to the question of how an organism maintains itself.',
    references: [referenceId('schrodinger-1944')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('consciousness-problem'),
    title: 'The easy problems and the hard one',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Chalmers’ distinction drawn as two columns: a list of tractable functional questions with real progress, and one item that a complete answer to all of them still seems to leave untouched. The second view lists the leading theories without endorsing any, because none is accepted and adversarial collaborations have constrained predictions without settling the field.',
    description:
      'Two views selectable by buttons. The two problems: a green panel listing the easy problems — discriminating stimuli, integrating information, focusing attention, controlling behaviour, reporting internal states, and the difference between waking and anaesthesia — beside a red panel containing the single question of why any of that is accompanied by experience at all, with a note that a complete functional account seems compatible with there being none. Competing theories: four rows naming global workspace theory, integrated information theory, higher-order theories and predictive processing, each with a one-line statement of its claim, and a line beneath noting that none is accepted.',
    references: [
      referenceId('chalmers-1995-hard-problem'),
      referenceId('seth-bayne-2022-consciousness'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('is-and-ought'),
    title: 'The is–ought gap, in both directions',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'Hume’s observation drawn as two boxes with a crossed-out arrow between them, and then the same invalid inference committed in both directions. Showing that the therefore-nothing-matters conclusion and the therefore-it-was-intended conclusion make the identical move is what keeps this figure from taking a side.',
    description:
      'Two views selectable by buttons. The structure: a box of factual statements — the Universe is 13.8 billion years old, all life shares one ancestor, selection has no goal, stars made your atoms — beside a box of evaluative statements, with a crossed-out dashed arrow between them and a line stating that no chain of facts entails a conclusion about value by logic alone. Both directions: two panels each quoting an inference and naming its hidden premise — evolution has no goal therefore nothing matters, whose hidden premise is that meaning requires a cosmic goal; and life is astonishing therefore it must have been intended, whose hidden premise is that astonishing things require an intender. A line beneath notes that the gap cuts both ways.',
    references: [referenceId('cleland-chyba-2002-life'), referenceId('gould-1996-full-house')],
    minimumQuality: 'low',
    layout: 'flow',
  },
  {
    id: visualizationId('cosmic-chain'),
    title: 'The whole chain, with its evidence marked',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A summary figure at the end of a section is dangerous, because it smooths a story with very different confidence at different points into one arc. So each link here carries its evidential status — established, inferred, or not understood — and the second view is an explicit refusal to read the chain as a destination.',
    description:
      'Two views selectable by buttons. The chain: six links running down the figure, each with a coloured dot and a status label. The Universe produced stars, established. Stars produced the elements, established. Earth assembled those elements into chemistry, established. Chemistry eventually produced life, not understood. Life began evolving, established. One branch became capable of asking where this came from, inferred. What it does not show: the same facts written the other way round — that the Universe produced stars, and among the outcomes on one small planet was a species that reconstructs its own history — labelled same facts, no destination, with a line noting that which version feels more natural is a fact about narrative preference rather than about the evidence.',
    references: [
      referenceId('hug-2016-tree-of-life'),
      referenceId('weiss-2016-luca'),
      referenceId('darwin-1859'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },

  // Phase 7 — Ecology, addendum
  {
    id: visualizationId('interaction-network'),
    title: 'An organism is a bundle of relationships',
    fidelity: 'schematic',
    runtime: 'svg',
    interactive: true,
    caption:
      'A small interaction network centred on a bee, with everything it touches lit up and everything it does not dimmed. The network is a sketch of the kinds of relationship an organism has rather than a survey of any particular system. What it carries is that a bee’s tongue length, hair structure and colour vision are all statements about flowers, and none of them can be explained by studying a bee.',
    description:
      'Seven nodes connected by coloured edges, with green edges for mutual benefit, orange for consumption and violet for harm. The bee sits at the centre, connected to flowers, its gut microbes, birds that eat it, a fungal disease, a parasitic wasp, and other pollinators. Tapping any node dims everything not connected to it and gives a paragraph on that relationship — that the bee’s tongue matches the depth of the blossoms it visits and its colour vision is shifted into the ultraviolet where flowers advertise; that the flower’s colour, scent, shape and opening time are addressed to a pollinator; that bees carry a gut community which helps digest pollen and resists pathogens; and that the sting is why several harmless flies have evolved to look like bees.',
    references: [
      referenceId('douglas-2010-symbiosis'),
      referenceId('estes-2011-trophic-downgrading'),
      referenceId('bronstein-2015-mutualism'),
    ],
    minimumQuality: 'low',
    layout: 'flow',
  },
];
