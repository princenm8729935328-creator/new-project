/**
 * Recaps for Einstein & Relativity.
 *
 * Relativity is where intuition is not merely unhelpful but actively wrong, so
 * the distractors here are mostly the half-remembered popular versions: that
 * time dilation is an illusion, that mass increases with speed, that the rubber
 * sheet is the explanation rather than an analogy, that gravitational waves are
 * waves travelling *through* space.
 */
import type { RecapsByTopic } from '../schema/recap';

export const RELATIVITY_RECAPS: RecapsByTopic = {
  'speed-of-light-problem': {
    summary: {
      essential:
        'Velocities add in everyday life: walk at 5 km/h on a train doing 100 and the ground sees 105. Light refuses. Every observer measures light in vacuum at the same c, no matter how they are moving. Maxwell’s equations predicted this and the Michelson–Morley experiment found it, and it is flatly incompatible with Newtonian velocity addition — one of the two had to give.',
      detailed:
        'The crisis was structural rather than experimental fine print. Newtonian mechanics is invariant under Galilean transformations, in which velocities add. Maxwell’s electromagnetism is not: it contains a fixed speed c built from two measurable constants of the vacuum, with no reference to any observer. Both theories were superbly confirmed in their own domains, so physics contained two mutually contradictory pictures of what a speed is. The nineteenth-century resolution was to suppose a medium — the luminiferous aether — in which c was the speed and relative to which Earth must be moving. Michelson and Morley looked for that motion in 1887 with enough precision to find it, and found nothing. Einstein’s move in 1905 was to stop patching and instead take the constancy of c as a postulate, accepting whatever it implied about space and time.',
    },
    questions: [
      {
        id: 'chase',
        prompt:
          'You fly at 0.9c toward an oncoming light beam. What speed do you measure for the beam?',
        options: [
          { id: 'a', text: '1.9c' },
          { id: 'b', text: 'c', correct: true },
          { id: 'c', text: '0.1c' },
          { id: 'd', text: 'It depends on the light’s wavelength' },
        ],
        explanation:
          'Every inertial observer measures light in vacuum at c regardless of their own motion. What changes with your motion is the light’s frequency and wavelength — a Doppler shift — never its speed.',
      },
      {
        id: 'mm',
        prompt: 'What did the Michelson–Morley experiment find?',
        options: [
          { id: 'a', text: 'That light travels faster along Earth’s direction of motion' },
          {
            id: 'b',
            text: 'No detectable difference in light’s speed with direction — no sign of motion through an aether',
            correct: true,
          },
          { id: 'c', text: 'That the aether is dragged along by Earth' },
          { id: 'd', text: 'That light slows in a moving frame' },
        ],
        explanation:
          'The apparatus was sensitive enough to detect Earth’s orbital motion through a stationary aether and saw nothing. Combined with Maxwell’s theory, the null result pointed toward c being the same for everyone rather than toward a medium that had to be explained away.',
      },
    ],
  },

  'special-relativity': {
    summary: {
      essential:
        'Special relativity rests on two assumptions: the laws of physics are the same in all inertial frames, and light in vacuum travels at c for every observer. Everything else — time dilation, length contraction, the relativity of simultaneity, E = mc² — follows from those two by arithmetic. The strangeness is not added; it is deduced.',
      detailed:
        'The first postulate is old and unobjectionable: Galileo had it. The second is the one that costs. Hold both and the Galilean transformation must be replaced by the Lorentz transformation, in which the factor γ = 1/√(1 − v²/c²) appears everywhere. γ is 1.000000000034 at aircraft speed, 1.15 at half the speed of light, 7.09 at 0.99c, and diverges as v → c. This is why relativity was not noticed for two centuries: at everyday speeds it *is* Newtonian mechanics to a dozen decimal places. "Special" means restricted — the theory applies to inertial frames only, and extending it to accelerated frames and gravity took Einstein another decade and produced general relativity.',
    },
    questions: [
      {
        id: 'postulates',
        prompt: 'Which pair of assumptions is special relativity built on?',
        options: [
          { id: 'a', text: 'That space is flat and that gravity is a force' },
          {
            id: 'b',
            text: 'That the laws of physics are identical in all inertial frames, and that light in vacuum travels at c for every observer',
            correct: true,
          },
          { id: 'c', text: 'That mass increases with speed and time slows down' },
          { id: 'd', text: 'That nothing can exceed c and that energy is conserved' },
        ],
        explanation:
          'Time dilation, length contraction and mass–energy equivalence are *consequences*, not assumptions. The theory’s power comes from how little it assumes and how much follows.',
      },
      {
        id: 'gamma',
        prompt: 'Why did nobody notice relativistic effects before the twentieth century?',
        options: [
          { id: 'a', text: 'They only occur in space' },
          {
            id: 'b',
            text: 'γ differs from 1 by far less than measurement precision at everyday speeds',
            correct: true,
          },
          { id: 'c', text: 'They were noticed but dismissed as errors' },
          { id: 'd', text: 'They require strong gravity, which is absent on Earth' },
        ],
        explanation:
          'At 900 km/h, γ = 1.000000000034. Relativity does not replace Newtonian mechanics at ordinary speeds — it reproduces it. The effects only become measurable at a substantial fraction of c, or with clocks accurate to nanoseconds.',
      },
      {
        id: 'special',
        prompt: 'What does the word "special" mean in "special relativity"?',
        options: [
          { id: 'a', text: 'That it is more fundamental than other theories' },
          {
            id: 'b',
            text: 'That it is restricted to inertial frames — no acceleration and no gravity',
            correct: true,
          },
          { id: 'c', text: 'That it applies only to light' },
          { id: 'd', text: 'That it holds only at very high speeds' },
        ],
        explanation:
          '"Special" here means "restricted case". General relativity is the extension to accelerated frames and to gravity, and it contains special relativity as the local, gravity-free limit.',
      },
    ],
  },

  'relativity-of-simultaneity': {
    summary: {
      essential:
        'Two events that happen at the same time for one observer can happen at different times for another moving relative to the first. Simultaneity is not a property of the events; it depends on who is asking. This is the root of time dilation and length contraction rather than a curiosity alongside them.',
      detailed:
        'The train argument makes it concrete. A flash starts at the centre of a moving carriage and travels to both ends. In the carriage frame the two ends are equidistant and the light arrives simultaneously. In the platform frame the light still travels at c in both directions, but the rear wall moves toward the flash while the front wall moves away — so the light reaches the rear first. Both descriptions are correct, because "at the same time" has no observer-independent meaning. Causality survives intact: for events that could influence one another — those separated by less than light travel time — the ordering is the same for every observer. Only the ordering of causally disconnected events is frame-dependent, and those are exactly the pairs where reversing the order changes nothing that matters.',
    },
    questions: [
      {
        id: 'train',
        prompt:
          'A flash at the centre of a moving carriage reaches both ends simultaneously in the carriage frame. What does a platform observer see?',
        options: [
          {
            id: 'a',
            text: 'The same — light is the same speed for everyone, so it arrives together',
          },
          {
            id: 'b',
            text: 'The light reaches the rear wall first, because that wall moves toward the flash',
            correct: true,
          },
          {
            id: 'c',
            text: 'The light reaches the front wall first, because it is carried along by the train',
          },
          { id: 'd', text: 'The light travels faster toward the front and slower toward the rear' },
        ],
        explanation:
          'Precisely *because* light travels at c in both directions in the platform frame, the wall approaching the flash is met sooner. Both observers are right; simultaneity simply is not absolute.',
      },
      {
        id: 'causality',
        prompt:
          'Does the relativity of simultaneity allow an effect to precede its cause for some observer?',
        options: [
          { id: 'a', text: 'Yes, which is why time travel is theoretically possible' },
          {
            id: 'b',
            text: 'No — the order of causally connected events is the same for all observers; only causally disconnected pairs can reorder',
            correct: true,
          },
          { id: 'c', text: 'Yes, but only near the speed of light' },
          {
            id: 'd',
            text: 'No, because simultaneity is actually absolute at the fundamental level',
          },
        ],
        explanation:
          'Events that can influence each other are separated by less than light travel time, and no Lorentz transformation reverses their order. Reordering is possible only for events too far apart in space and too close in time for any signal to connect them — where order carries no causal meaning.',
      },
    ],
  },

  'time-dilation': {
    summary: {
      essential:
        'A clock moving relative to you ticks slower than one at rest with you, by the factor γ = 1/√(1 − v²/c²). This is not a mechanical effect on the clock and not an illusion of observation — it is what time itself does. It is measured routinely: in muons reaching the ground, in particle accelerators, and in atomic clocks flown around the world.',
      detailed:
        'The light-clock argument shows why. Bounce light between two mirrors; a moving clock’s light must travel a longer diagonal path to cover the same vertical gap, and since light travels at c for everyone, the longer path takes more time per tick. The effect is symmetric — each observer sees the other’s clock running slow — which is consistent because they also disagree about simultaneity. Cosmic-ray muons are the everyday proof: with a 2.2 μs half-life they should decay long before reaching sea level, and at γ ≈ 30 they arrive in quantity. The twin "paradox" is not a paradox because the situation is not symmetric: the travelling twin must accelerate to turn round, changing inertial frames, and it is that asymmetry that makes their elapsed time definitively shorter.',
    },
    questions: [
      {
        id: 'muons',
        prompt: 'Why do cosmic-ray muons reach the ground when their half-life should stop them?',
        options: [
          { id: 'a', text: 'They are created lower in the atmosphere than assumed' },
          {
            id: 'b',
            text: 'Their internal clocks run slow in our frame, so they decay more slowly relative to us',
            correct: true,
          },
          { id: 'c', text: 'They travel faster than light' },
          { id: 'd', text: 'The half-life measured in the lab is inaccurate' },
        ],
        explanation:
          'At γ ≈ 30 a 2.2 μs half-life becomes about 66 μs in Earth’s frame, which is enough. In the muon’s own frame the half-life is unchanged and the atmosphere is length-contracted instead — the same result described from the other side.',
      },
      {
        id: 'illusion',
        prompt: 'Is time dilation an illusion caused by signal delay?',
        options: [
          {
            id: 'a',
            text: 'Yes — light from a receding clock takes longer to arrive, so it merely appears slow',
          },
          {
            id: 'b',
            text: 'No — signal delay is a separate, correctable effect; the dilation remains after correcting for it, and shows up as real accumulated differences on reunited clocks',
            correct: true,
          },
          { id: 'c', text: 'Yes, and it disappears in the clock’s own frame' },
          { id: 'd', text: 'Only for light clocks; mechanical clocks are unaffected' },
        ],
        explanation:
          'The Hafele–Keating experiment flew atomic clocks around the world and compared them side by side on return: the differences were real and matched prediction. Muons that arrive at the ground genuinely have not decayed. Nothing about that is a viewing artefact.',
      },
      {
        id: 'twins',
        prompt: 'In the twin scenario, why is the outcome not symmetric?',
        options: [
          { id: 'a', text: 'The travelling twin is further from Earth’s gravity' },
          {
            id: 'b',
            text: 'The travelling twin changes inertial frames when turning round; the stay-at-home twin never does',
            correct: true,
          },
          { id: 'c', text: 'Because motion is absolute after all' },
          { id: 'd', text: 'Because the travelling twin ages faster, not slower' },
        ],
        explanation:
          'Mutual time dilation applies between inertial frames. Only one twin accelerates, and that breaks the symmetry: their worldline through spacetime is shorter in elapsed proper time, so they return genuinely younger.',
      },
    ],
  },

  'length-contraction': {
    summary: {
      essential:
        'An object moving relative to you is measured shorter along its direction of motion, by the same factor γ that slows its clocks. Dimensions perpendicular to the motion are unchanged. Like time dilation this is symmetric — each observer measures the other’s ruler as the short one — and it is not a compression of the object by any force.',
      detailed:
        'Length contraction is the geometric partner of time dilation and of the relativity of simultaneity. Measuring a moving object’s length means noting where both ends are *at the same time*, and observers who disagree about simultaneity necessarily disagree about length. "Which one is really shorter" is the wrong question, in the same way as asking which of two people walking apart is really further away: both measurements are correct in their own frame. The muon case shows the two descriptions are one physical situation viewed twice: in our frame the muon’s clock runs slow; in the muon’s frame its clock is normal and the atmosphere is contracted to a fraction of its thickness. Both predict the same number of surviving muons at sea level.',
    },
    questions: [
      {
        id: 'direction',
        prompt:
          'A spacecraft passes you at high speed. Which dimensions do you measure as contracted?',
        options: [
          { id: 'a', text: 'All of them equally' },
          { id: 'b', text: 'Only the dimension along its direction of motion', correct: true },
          { id: 'c', text: 'Only the dimensions perpendicular to its motion' },
          { id: 'd', text: 'None — contraction affects only time' },
        ],
        explanation:
          'The Lorentz transformation mixes the time coordinate with the motion axis only. Transverse dimensions are untouched — which is also why the light clock’s mirror gap stays fixed in the standard derivation.',
      },
      {
        id: 'which',
        prompt:
          'Two ships pass each other at 0.8c. Each measures the other as shorter. Which one is really shorter?',
        options: [
          { id: 'a', text: 'The one that accelerated more recently' },
          {
            id: 'b',
            text: 'Neither — length is frame-dependent, and both measurements are correct',
            correct: true,
          },
          { id: 'c', text: 'The heavier one' },
          { id: 'd', text: 'The question can be settled by a third observer at rest' },
        ],
        explanation:
          'There is no preferred frame in which "real" lengths are recorded. Each ship has an unchanged rest length in its own frame, and measures the other contracted — consistent, because the two also disagree about which end-position measurements were simultaneous.',
      },
    ],
  },

  'mass-energy-equivalence': {
    summary: {
      essential:
        'E = mc² says mass and energy are the same thing in different units, with c² as the conversion factor. A system’s mass is a measure of its total internal energy: heat a lump of iron and it becomes very slightly more massive. Because c² is enormous, a tiny mass corresponds to a vast energy, which is why nuclear processes release so much from so little.',
      detailed:
        'Two clarifications carry most of the weight. First, the full relation is E² = (pc)² + (mc²)², of which E = mc² is the rest-frame case; the photon, with m = 0, has E = pc and still carries energy and momentum. Second, mass does *not* increase with speed. The old "relativistic mass" γm has been retired precisely because it invites the wrong picture; what grows without bound is the momentum γmv and the energy γmc², while rest mass is a frame-independent invariant. The equivalence also explains where everyday mass comes from: only about 1% of a proton’s mass is the rest mass of its quarks, and the rest is the binding energy of the gluon field. Most of your mass is energy.',
    },
    questions: [
      {
        id: 'relativistic-mass',
        prompt: 'Does an object’s mass increase as it approaches the speed of light?',
        options: [
          { id: 'a', text: 'Yes — that is why it cannot reach c' },
          {
            id: 'b',
            text: 'No — rest mass is invariant; what grows without bound is energy and momentum',
            correct: true,
          },
          { id: 'c', text: 'Yes, but only its gravitational mass' },
          { id: 'd', text: 'Only for charged particles' },
        ],
        explanation:
          '"Relativistic mass" is an obsolete bookkeeping device that hides the physics. Rest mass is a Lorentz invariant — the same in every frame. Reaching c is impossible because γmv diverges, which means unbounded energy, not because the object gets heavier.',
      },
      {
        id: 'photon',
        prompt: 'A photon has zero rest mass. How can it carry energy?',
        options: [
          { id: 'a', text: 'It has a very small non-zero mass we cannot yet measure' },
          {
            id: 'b',
            text: 'The full relation is E² = (pc)² + (mc²)²; with m = 0 it reduces to E = pc',
            correct: true,
          },
          { id: 'c', text: 'Its energy comes from the medium it travels through' },
          { id: 'd', text: 'It does not carry energy, only information' },
        ],
        explanation:
          'E = mc² is the special case for an object at rest. Massless particles are never at rest, and their energy is entirely momentum-based — which is why light exerts radiation pressure and why solar sails work.',
      },
      {
        id: 'proton',
        prompt: 'Roughly how much of a proton’s mass comes from the rest masses of its quarks?',
        options: [
          { id: 'a', text: 'Nearly all of it' },
          {
            id: 'b',
            text: 'About 1%; the rest is the energy of the fields binding them',
            correct: true,
          },
          { id: 'c', text: 'About half' },
          { id: 'd', text: 'None — quarks are massless' },
        ],
        explanation:
          'Mass measures a system’s total internal energy. Almost all of a proton’s mass is the energy of gluon fields and quark motion, converted by 1/c². Most of the mass of everyday matter is energy in this sense.',
      },
    ],
  },

  spacetime: {
    summary: {
      essential:
        'Space and time are not two separate stages but one four-dimensional geometry. Different observers slice that geometry into "space" and "time" differently, which is why they disagree about durations and lengths — but they always agree on the spacetime interval between two events, the quantity that survives every change of frame.',
      detailed:
        'Minkowski’s reformulation in 1908 turned relativity from a set of surprising corrections into geometry. The invariant is s² = (cΔt)² − Δx², with a minus sign where Euclidean geometry has a plus, and that single sign difference produces the entire causal structure: intervals are timelike (a massive object can connect the events), lightlike (only light can), or spacelike (nothing can, and the order is frame-dependent). Each observer’s time axis is their own worldline, and their space axis is the set of events they call simultaneous — which is why a change of velocity tilts both axes together and why the disagreements are consistent rather than contradictory. Proper time, the time measured along a worldline, is the invariant that a traveller’s own clock records, and it is what makes the twin result unambiguous.',
    },
    questions: [
      {
        id: 'invariant',
        prompt: 'Observers disagree about durations and distances. What do they all agree on?',
        options: [
          { id: 'a', text: 'The order of all events' },
          { id: 'b', text: 'The spacetime interval between two events', correct: true },
          { id: 'c', text: 'Which events are simultaneous' },
          { id: 'd', text: 'The velocity of the source of a light signal' },
        ],
        explanation:
          'The interval s² = (cΔt)² − Δx² is unchanged by any Lorentz transformation. Time and space measurements are frame-dependent slices of one invariant geometry, in the same way that the shadow of a stick depends on the light but its length does not.',
      },
      {
        id: 'causal',
        prompt: 'What distinguishes a timelike interval from a spacelike one?',
        options: [
          { id: 'a', text: 'Timelike intervals are longer' },
          {
            id: 'b',
            text: 'Timelike events can be connected by something travelling slower than light, so their order is absolute; spacelike events cannot, and their order is frame-dependent',
            correct: true,
          },
          { id: 'c', text: 'Spacelike intervals occur only inside black holes' },
          { id: 'd', text: 'Timelike intervals involve massless particles' },
        ],
        explanation:
          'The sign of s² encodes causal connectability. That is how relativity keeps cause before effect while letting simultaneity be relative — reordering is permitted exactly where no influence could travel between the events anyway.',
      },
    ],
  },

  'equivalence-principle': {
    summary: {
      essential:
        'Standing on a planet and accelerating through empty space feel exactly the same. Inside a sealed lift you cannot distinguish being at rest in a gravitational field from accelerating at the same rate far from any mass. Einstein called this his happiest thought, and general relativity is what follows from taking it seriously.',
      detailed:
        'The principle takes the equality of inertial and gravitational mass — an unexplained coincidence in Newtonian physics — and promotes it to a founding assumption: gravity and acceleration are locally indistinguishable, so any statement true in an accelerating frame is true in a gravitational field. That immediately predicts things Newtonian gravity does not: light must bend in a gravitational field, because it visibly bends across an accelerating lift; and clocks must run at different rates at different heights, because in the accelerating lift the ceiling recedes from light emitted at the floor. Crucially the principle is *local*. Over any extended region, a real gravitational field is non-uniform — it converges toward a centre — so free-falling objects at different points drift relative to one another. That residual is the tidal field, it cannot be transformed away by any choice of frame, and it is the true signature of spacetime curvature.',
    },
    questions: [
      {
        id: 'lift',
        prompt: 'What does the equivalence principle assert?',
        options: [
          {
            id: 'a',
            text: 'That gravity and acceleration produce identical effects everywhere in the universe',
          },
          {
            id: 'b',
            text: 'That within a small enough region, no experiment can distinguish a uniform gravitational field from uniform acceleration',
            correct: true,
          },
          { id: 'c', text: 'That all forms of energy are equivalent to mass' },
          { id: 'd', text: 'That all reference frames are equally valid' },
        ],
        explanation:
          'The word "locally" is not a hedge, it is the content. Over a large region, gravity is non-uniform and reveals itself through tidal effects that acceleration cannot mimic — which is exactly how curvature enters the theory.',
      },
      {
        id: 'tidal',
        prompt: 'Why can tidal effects not be transformed away by falling freely?',
        options: [
          { id: 'a', text: 'Because free fall is impossible in practice' },
          {
            id: 'b',
            text: 'Because a real gravitational field converges, so nearby free-falling objects accelerate relative to each other — that relative acceleration is curvature',
            correct: true,
          },
          { id: 'c', text: 'Because tides come from rotation rather than gravity' },
          { id: 'd', text: 'They can be, in a sufficiently small lift' },
        ],
        explanation:
          'A single free-fall frame removes gravity at one point. It cannot remove the *difference* in the field between two points, and that irreducible difference is what the curvature tensor measures. Gravity that can be transformed away is not curvature; gravity that cannot is.',
      },
    ],
  },

  'curved-spacetime': {
    summary: {
      essential:
        'General relativity replaces gravity-as-force with gravity-as-geometry: mass and energy curve spacetime, and objects moving freely follow the straightest available paths through that curved geometry. Nothing pulls the Earth toward the Sun; the Earth travels as straight as it can through spacetime that the Sun has curved.',
      detailed:
        'Wheeler’s summary is exact: spacetime tells matter how to move, matter tells spacetime how to curve. The mathematics is the Einstein field equations, relating the curvature of spacetime to the energy and momentum it contains — and note that *energy*, not just mass, is the source, which is why pressure and radiation gravitate too. The famous rubber-sheet picture is a poor analogy in three specific ways: it shows only two spatial dimensions with no time, it uses gravity to explain gravity by having the balls roll downhill, and it omits the crucial point that most of the curvature responsible for everyday gravity is curvature of *time*, not of space. Newton is not discarded: in weak fields at low speeds the field equations reduce to Poisson’s equation and reproduce the inverse-square law exactly.',
    },
    questions: [
      {
        id: 'wheeler',
        prompt: 'In general relativity, what keeps Earth in orbit around the Sun?',
        options: [
          { id: 'a', text: 'A gravitational force acting across the distance' },
          {
            id: 'b',
            text: 'Earth follows the straightest available path through spacetime curved by the Sun’s mass',
            correct: true,
          },
          { id: 'c', text: 'The balance between the Sun’s pull and Earth’s outward motion' },
          { id: 'd', text: 'Exchange of gravitons with the Sun' },
        ],
        explanation:
          'There is no force in the general-relativistic account. Earth is in free fall, following a geodesic; what looks like a curved orbit in space is the straightest possible worldline through curved spacetime.',
      },
      {
        id: 'rubber-sheet',
        prompt: 'What is the most serious flaw in the rubber-sheet analogy?',
        options: [
          { id: 'a', text: 'It shows the Sun as too large' },
          {
            id: 'b',
            text: 'It uses gravity to explain gravity — the balls roll downhill because of real gravity — and it omits the curvature of time, which dominates everyday gravity',
            correct: true,
          },
          { id: 'c', text: 'It implies spacetime is made of a physical material' },
          { id: 'd', text: 'It cannot represent black holes' },
        ],
        explanation:
          'The picture is circular and dimensionally incomplete: a two-dimensional sheet with no time axis, animated by the very force it claims to explain. For an apple falling on Earth, essentially all of the effect comes from time running slightly slower nearer the ground.',
      },
      {
        id: 'source',
        prompt: 'What is the source of spacetime curvature in Einstein’s field equations?',
        options: [
          { id: 'a', text: 'Mass alone' },
          {
            id: 'b',
            text: 'Energy, momentum, pressure and stress — mass is one contribution among several',
            correct: true,
          },
          { id: 'c', text: 'Electric charge' },
          { id: 'd', text: 'The number of particles present' },
        ],
        explanation:
          'The stress–energy tensor on the right-hand side includes energy density, momentum flux and pressure. That is why light, which is massless, both gravitates and is deflected, and why pressure contributes to the gravity of a star.',
      },
    ],
  },

  geodesics: {
    summary: {
      essential:
        'A geodesic is the straightest possible path in a curved geometry — the generalisation of a straight line. Freely falling objects follow geodesics through spacetime, which is why a thrown ball, an orbiting satellite and a beam of starlight are all doing the same thing: moving as straight as the local geometry allows.',
      detailed:
        'On a sphere, geodesics are great circles: two aircraft setting off on parallel northward courses converge without either turning, which is the two-dimensional version of gravitational attraction. In spacetime the criterion is sharper — a timelike geodesic between two events is the path of *maximum* proper time, the route on which the traveller’s own clock records the most. That sign flip, relative to the Euclidean shortest-distance rule, comes from the minus sign in the spacetime interval, and it is what makes the twin result inevitable: the twin who stays put follows a geodesic and ages most; the one who accelerates leaves the geodesic and ages less. A thrown ball’s arc, which looks strongly curved in space, is an almost imperceptibly gentle curve in spacetime once the time axis is drawn to scale at one second per 300,000 km.',
    },
    questions: [
      {
        id: 'max-time',
        prompt: 'A freely falling object between two events follows which path?',
        options: [
          { id: 'a', text: 'The path of shortest distance through space' },
          {
            id: 'b',
            text: 'The path of maximum proper time — the one on which its own clock records the most',
            correct: true,
          },
          { id: 'c', text: 'The path of least energy expended' },
          { id: 'd', text: 'The path of shortest elapsed coordinate time' },
        ],
        explanation:
          'Because the spacetime interval carries a minus sign, extremal timelike paths maximise rather than minimise. This is why the inertial twin ages more: staying on a geodesic is the way to accumulate the most proper time between two events.',
      },
      {
        id: 'parallel',
        prompt:
          'Two aircraft fly parallel northward courses from the equator and converge without turning. What does this illustrate?',
        options: [
          { id: 'a', text: 'Magnetic attraction between the aircraft' },
          {
            id: 'b',
            text: 'That in a curved geometry, initially parallel geodesics need not stay parallel — the analogue of gravitational attraction',
            correct: true,
          },
          { id: 'c', text: 'Navigation error' },
          { id: 'd', text: 'That Earth is rotating beneath them' },
        ],
        explanation:
          'Geodesic deviation is curvature made visible. No force acts on the aircraft; the geometry brings them together. Replace the sphere with spacetime curved by mass, and the same effect is what we experience as gravity.',
      },
    ],
  },

  'gravitational-time-dilation': {
    summary: {
      essential:
        'Clocks run more slowly deeper in a gravitational field. Your feet, being closer to Earth’s centre, age fractionally more slowly than your head. The effect is small on Earth but is measured routinely — with optical clocks it is detectable across a height difference of a few centimetres, and GPS would fail within minutes without correcting for it.',
      detailed:
        'The prediction follows straight from the equivalence principle: in an accelerating rocket, light sent from floor to ceiling is received red-shifted, so the ceiling clock must run fast relative to the floor clock — and the same must be true of height in a gravitational field. Pound and Rebka measured it in 1959 over 22.5 m of a Harvard tower. GPS makes it operational: gravitational dilation makes satellite clocks gain about 45 μs/day, motion loses about 7 μs/day, and the net +38 μs/day is corrected in the design. This is also where curvature of *time* shows itself as the dominant term in ordinary gravity: an object at rest in a gravitational field still moves through time, and it moves along the geodesic toward where time runs slower — which is what falling is.',
    },
    questions: [
      {
        id: 'direction',
        prompt: 'Compared with a clock on a mountaintop, a clock at sea level:',
        options: [
          { id: 'a', text: 'runs faster, because it is closer to Earth’s centre' },
          {
            id: 'b',
            text: 'runs slower, because it is deeper in the gravitational potential well',
            correct: true,
          },
          { id: 'c', text: 'runs at the same rate; only motion affects clocks' },
          { id: 'd', text: 'runs slower only if it is moving' },
        ],
        explanation:
          'Deeper in a potential well means slower. The effect has been measured with optical lattice clocks over height differences of centimetres, and it is the larger of the two relativistic terms acting on GPS satellites.',
      },
      {
        id: 'falling',
        prompt: 'How does gravitational time dilation relate to why things fall?',
        options: [
          { id: 'a', text: 'It is an unrelated side effect of gravity' },
          {
            id: 'b',
            text: 'Objects follow the path of maximum proper time, which in ordinary gravity means moving toward where time runs slower — that motion is falling',
            correct: true,
          },
          { id: 'c', text: 'Falling causes time dilation rather than the reverse' },
          { id: 'd', text: 'It explains only the orbits of satellites, not falling objects' },
        ],
        explanation:
          'For everyday gravity, curvature of time dominates curvature of space. An apple at rest is still moving through time at one second per second, and the geodesic that maximises its proper time carries it downward. Falling is the geometry of time, not a pull.',
      },
    ],
  },

  'gravitational-lensing': {
    summary: {
      essential:
        'Mass bends the path of light. The deflection general relativity predicts is exactly twice what a naive Newtonian calculation of light "falling" gives, because space is curved as well as time. Eddington’s 1919 eclipse expedition measured the larger value, and lensing is now a standard tool for weighing galaxies and mapping dark matter.',
      detailed:
        'The factor of two is the whole point of the test. Treating light as a fast particle in Newtonian gravity yields 0.87 arcseconds of deflection at the Sun’s limb; general relativity yields 1.75, with the extra half coming from spatial curvature that a Newtonian calculation has no way to include. The 1919 measurement, though marginal by modern standards, favoured Einstein and was later confirmed to far higher precision by radio interferometry. Lensing is now used at three scales: strong lensing produces multiple images, arcs and Einstein rings, and can even give time delays between images; weak lensing statistically distorts the shapes of background galaxies and is the principal method for mapping dark matter; and microlensing detects transient brightening as an unseen mass passes in front of a star, which is how some free-floating planets and dark compact objects are found.',
    },
    questions: [
      {
        id: 'factor-two',
        prompt:
          'Why was Eddington’s 1919 measurement a test *between* theories rather than just a test of gravity?',
        options: [
          { id: 'a', text: 'Newtonian gravity predicted no deflection at all' },
          {
            id: 'b',
            text: 'A Newtonian calculation gives 0.87 arcseconds and general relativity gives 1.75 — two distinct numbers, distinguishable by measurement',
            correct: true,
          },
          { id: 'c', text: 'Newtonian gravity predicted deflection in the opposite direction' },
          { id: 'd', text: 'Only relativity predicted that light has mass' },
        ],
        explanation:
          'A test that only one theory can pass is weaker than one where two theories give different numbers. The extra factor of two comes from spatial curvature, which the Newtonian treatment cannot represent.',
      },
      {
        id: 'dark-matter',
        prompt: 'How is weak gravitational lensing used today?',
        options: [
          { id: 'a', text: 'To measure the temperature of distant galaxies' },
          {
            id: 'b',
            text: 'To map the distribution of mass, including dark matter, from statistical distortions in background galaxy shapes',
            correct: true,
          },
          { id: 'c', text: 'To detect gravitational waves' },
          { id: 'd', text: 'To measure the expansion rate directly from redshift' },
        ],
        explanation:
          'Lensing responds to all mass, luminous or not, so it measures the total gravitating mass along a line of sight. That makes it the most direct handle we have on dark matter’s distribution — the Bullet Cluster result rests on it.',
      },
    ],
  },

  'mercury-perihelion': {
    summary: {
      essential:
        'Mercury’s orbit slowly rotates, and after accounting for the pull of every other planet, 43 arcseconds per century remained unexplained for over half a century. General relativity produces exactly that figure from its own equations, with nothing adjusted to fit. It was the theory’s first success, and it was a retrodiction of a known anomaly rather than a new prediction.',
      detailed:
        'The total observed precession is about 5,600 arcseconds per century, of which most is the precession of Earth’s own equinoxes and about 531 comes from planetary perturbations, principally Venus and Jupiter. The 43-arcsecond residual was firmly established by Le Verrier in 1859 — the same astronomer whose calculation had found Neptune — and the obvious response was to look for another planet, provisionally named Vulcan, which was never found. General relativity accounts for it because in curved spacetime an inverse-square-like orbit does not quite close: the effect is largest for Mercury because it is nearest the Sun and its orbit most eccentric. Einstein reported that the calculation left him unable to work for days. It counted as evidence because there were no free parameters to tune — the number falls out of the same field equations that reproduce Newtonian gravity everywhere else.',
    },
    questions: [
      {
        id: 'residual',
        prompt: 'What exactly was the 43 arcseconds per century?',
        options: [
          { id: 'a', text: 'Mercury’s total orbital precession' },
          {
            id: 'b',
            text: 'The part of the precession left over after the gravitational effects of all other planets were accounted for',
            correct: true,
          },
          { id: 'c', text: 'The error in nineteenth-century measurements of Mercury’s orbit' },
          { id: 'd', text: 'The precession caused by the Sun’s rotation' },
        ],
        explanation:
          'Most of the observed precession is explained Newtonially — planetary perturbations, plus the moving reference frame of Earth’s equinoxes. The anomaly was the small stubborn residual, and it was solid enough that astronomers hunted a whole planet to explain it.',
      },
      {
        id: 'why-evidence',
        prompt:
          'Why did explaining a known anomaly count as strong evidence for general relativity?',
        options: [
          { id: 'a', text: 'Because it was the first time anyone had measured Mercury accurately' },
          {
            id: 'b',
            text: 'Because the theory had no adjustable parameters — the 43 arcseconds emerged from equations built for entirely different reasons',
            correct: true,
          },
          { id: 'c', text: 'Because it disproved the existence of Vulcan' },
          { id: 'd', text: 'Because it was published before the measurement was made' },
        ],
        explanation:
          'Fitting an anomaly with a tunable parameter is cheap; producing it with none is not. The same field equations that reproduce Newtonian gravity in the weak field also produce this residual, with nothing dialled in to make it come out right.',
      },
    ],
  },

  'black-hole-foundations': {
    summary: {
      essential:
        'Concentrate mass tightly enough and spacetime curvature grows without bound, producing a region from which no path leads outward — a black hole. Its boundary, the event horizon, sits at the Schwarzschild radius r = 2GM/c². This is what the equations of general relativity say happens in the strong-field limit; the physical objects, and the evidence for them, come later.',
      detailed:
        'Schwarzschild found the exact solution for a spherical, non-rotating mass within months of the field equations being published, and it contains two distinguished surfaces. At r = 2GM/c² the coordinates break down but nothing physical goes wrong — that is the horizon, a one-way surface rather than a wall, and a large enough black hole has unremarkable tidal forces there. At r = 0 the curvature itself diverges, and that is where the theory stops describing anything: a singularity is a statement that general relativity has run out of validity, not a description of an object. Resolving it would require a quantum theory of gravity, which does not yet exist. The horizon radius is 3 km for one solar mass and about 12 million km for the black hole at the centre of M87 — a scaling that is linear in mass, so supermassive black holes are enormous in extent but modest in average density.',
    },
    questions: [
      {
        id: 'singularity',
        prompt: 'What is the best description of the singularity at the centre of a black hole?',
        options: [
          { id: 'a', text: 'An infinitely dense point of matter' },
          {
            id: 'b',
            text: 'A place where the equations of general relativity diverge — a sign that the theory has stopped applying, not a described object',
            correct: true,
          },
          { id: 'c', text: 'A tunnel to another region of spacetime' },
          { id: 'd', text: 'The compressed remnant of the original star’s core' },
        ],
        explanation:
          'Curvature going to infinity is how a theory reports its own failure. Describing what is actually there requires quantum gravity, which we do not have. The honest statement is that we do not know.',
      },
      {
        id: 'horizon-scaling',
        prompt: 'How does the Schwarzschild radius scale with mass?',
        options: [
          { id: 'a', text: 'As the square root of mass' },
          { id: 'b', text: 'Linearly with mass — r = 2GM/c²', correct: true },
          { id: 'c', text: 'As the cube of mass' },
          { id: 'd', text: 'It is the same for all black holes' },
        ],
        explanation:
          'Radius is proportional to mass, so volume grows as M³ while mass grows as M — meaning average density *falls* as black holes get bigger. A sufficiently supermassive black hole has a mean density below that of water.',
      },
    ],
  },

  'gravitational-waves': {
    summary: {
      essential:
        'Accelerating masses radiate ripples in the curvature of spacetime itself, travelling at the speed of light and alternately stretching and squeezing everything they pass through. LIGO detected the first one directly in September 2015, from two black holes of about 36 and 29 solar masses merging over a billion light years away.',
      detailed:
        'These are not waves *in* space; they are oscillations *of* the geometry, which is why detecting them means measuring a fractional change in length rather than a displacement. The strain from GW150914 was about 10⁻²¹ — a change of roughly one thousandth of a proton’s width across LIGO’s 4 km arms — and the measurement is possible only because laser interferometry compares two perpendicular arms and because two widely separated detectors must agree. The signal has a characteristic shape: as the two objects spiral in, frequency and amplitude both rise into a "chirp", peak at merger, and then ring down as the remnant settles. About three solar masses of energy was radiated in a fraction of a second. Gravitational-wave astronomy is a genuinely new channel: it sees mergers that emit no light, and the 2017 neutron-star merger GW170817, seen in both gravitational waves and electromagnetic radiation, opened multi-messenger astronomy.',
    },
    questions: [
      {
        id: 'what-waves',
        prompt: 'What is oscillating in a gravitational wave?',
        options: [
          { id: 'a', text: 'A medium filling space, like an aether' },
          {
            id: 'b',
            text: 'The geometry of spacetime itself — distances between free objects stretch and squeeze',
            correct: true,
          },
          { id: 'c', text: 'The electromagnetic field' },
          { id: 'd', text: 'The density of dark matter' },
        ],
        explanation:
          'A gravitational wave changes the metric — the rule for measuring distance. That is why detectors measure a *strain*, a fractional length change, rather than something arriving and pushing on a mass.',
      },
      {
        id: 'chirp',
        prompt:
          'Why does a binary merger signal rise in both frequency and amplitude before cutting off?',
        options: [
          { id: 'a', text: 'The detector becomes more sensitive as the signal arrives' },
          {
            id: 'b',
            text: 'The objects spiral inward as they radiate energy, orbiting faster and closer until they merge and the remnant rings down',
            correct: true,
          },
          { id: 'c', text: 'The wave is blue-shifted by cosmic expansion' },
          { id: 'd', text: 'Two separate signals overlap' },
        ],
        explanation:
          'Radiating energy shrinks the orbit, which raises the orbital frequency, which radiates energy faster still — a runaway that ends at merger. The resulting chirp shape encodes the masses, and it is what the templates search for.',
      },
      {
        id: 'strain',
        prompt: 'Roughly how large was the strain measured in GW150914?',
        options: [
          { id: 'a', text: 'About one part in 10⁶' },
          {
            id: 'b',
            text: 'About one part in 10²¹ — a fraction of a proton width over 4 km arms',
            correct: true,
          },
          { id: 'c', text: 'About one millimetre over 4 km' },
          { id: 'd', text: 'Large enough to be felt by a person nearby' },
        ],
        explanation:
          'Spacetime is extraordinarily stiff, so even two merging black holes a billion light years away produce a strain of ~10⁻²¹. That is why detection required decades of work on isolation, optics and noise, and why two detectors must agree before a candidate counts.',
      },
    ],
  },

  'testing-relativity': {
    summary: {
      essential:
        'Relativity has been tested for over a century by people trying to break it, and it has passed every time. The tests span the equivalence principle to one part in 10¹⁵, light deflection, gravitational redshift, orbital precession, frame dragging, binary pulsar orbital decay, gravitational waves and a black-hole shadow — different phenomena, different instruments, one theory.',
      detailed:
        'What matters is the breadth rather than any single result. The Hulse–Taylor binary pulsar has been losing orbital energy since 1974 at a rate matching general relativity’s gravitational-wave prediction to better than 0.1%, which was indirect evidence decades before LIGO. Gravity Probe B measured frame dragging around a rotating Earth. Shapiro delay — the extra light travel time near a mass — has been measured to parts in 10⁵ using Cassini. GPS applies the theory operationally every day. And the tests continue precisely because the theory is known to be incomplete: it is incompatible with quantum mechanics, and it predicts its own breakdown at singularities. Physicists keep testing not because they expect failure at ordinary precision, but because any deviation found would point directly at what replaces it.',
    },
    questions: [
      {
        id: 'pulsar',
        prompt: 'What made the Hulse–Taylor binary pulsar such important evidence?',
        options: [
          { id: 'a', text: 'It was the first black hole detected' },
          {
            id: 'b',
            text: 'Its orbit decays at exactly the rate predicted for energy lost to gravitational waves — indirect evidence decades before direct detection',
            correct: true,
          },
          { id: 'c', text: 'It proved that neutron stars exist' },
          {
            id: 'd',
            text: 'It showed that pulsars emit gravitational waves continuously at detectable strength',
          },
        ],
        explanation:
          'The orbital period has shortened steadily since 1974, matching the general-relativistic prediction to better than 0.1%. The system is a gravitational-wave detector made of two neutron stars, read out by pulse timing.',
      },
      {
        id: 'why-test',
        prompt: 'Why do physicists keep testing a theory that keeps passing?',
        options: [
          { id: 'a', text: 'Because the earlier tests are now considered unreliable' },
          {
            id: 'b',
            text: 'Because general relativity is known to be incomplete — incompatible with quantum mechanics — so any deviation would point toward what replaces it',
            correct: true,
          },
          { id: 'c', text: 'Because the theory has never been tested in strong fields' },
          { id: 'd', text: 'For funding reasons rather than scientific ones' },
        ],
        explanation:
          'Passing a test does not make a theory final. General relativity predicts singularities where it stops working and cannot be reconciled with quantum field theory, so the search is for the regime where it first fails — and that regime has not been found yet.',
      },
    ],
  },

  'beyond-newton': {
    summary: {
      essential:
        'General relativity explains a specific list of things Newtonian gravity cannot: Mercury’s extra precession, the full deflection of starlight, gravitational time dilation and redshift, gravitational waves, frame dragging, black holes, and the expansion of the Universe as a whole. It also has the advantage of not requiring instantaneous action at a distance, which special relativity forbids.',
      detailed:
        'The list is not a list of corrections but of phenomena outside Newtonian vocabulary. Newton has no way to make light respond to gravity at all, no way for gravity to carry energy away from a system, no notion of time running at different rates, and no mechanism consistent with a finite signal speed. Yet the honest ending is that Newton is still what you should use: spacecraft navigation, planetary ephemerides, tides and orbital mechanics are all Newtonian calculations with relativistic corrections applied only where precision demands. And general relativity has its own ending. It cannot describe the interior of a black hole or the first instants of the Universe, it does not combine with quantum mechanics, and the two dominant components of the cosmos — dark matter and dark energy — are named rather than understood. Every theory so far has been a superb approximation with a boundary, and there is no reason to think this one is different.',
    },
    questions: [
      {
        id: 'list',
        prompt: 'Which of these can Newtonian gravity not account for even in principle?',
        options: [
          { id: 'a', text: 'The orbit of Jupiter' },
          {
            id: 'b',
            text: 'Clocks running at different rates at different altitudes',
            correct: true,
          },
          { id: 'c', text: 'The tides' },
          { id: 'd', text: 'The trajectory of a spacecraft to Mars' },
        ],
        explanation:
          'Newtonian gravity has no concept of time running at different rates — time is a universal parameter in it. Orbits, tides and trajectories are all Newtonian successes, which is exactly why they are still computed that way.',
      },
      {
        id: 'gr-limits',
        prompt: 'What are the acknowledged limits of general relativity?',
        options: [
          { id: 'a', text: 'It fails for weak gravitational fields' },
          {
            id: 'b',
            text: 'It cannot describe singularities or the earliest Universe, and it has not been reconciled with quantum mechanics',
            correct: true,
          },
          { id: 'c', text: 'It has been contradicted by several precision experiments' },
          { id: 'd', text: 'It applies only within the Solar System' },
        ],
        explanation:
          'The theory predicts its own breakdown: curvature diverges at singularities, and it is a classical theory with no quantum formulation. It has passed every experimental test to date, which makes the gap a theoretical one rather than an observational one.',
      },
    ],
  },
};
