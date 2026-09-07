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
];
