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
];
