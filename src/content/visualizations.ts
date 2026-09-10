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
];
