/**
 * Recaps for Gravity & Newton — the gravity half.
 *
 * The section's hardest ideas are the ones that feel settled but are not: that
 * weight is not mass, that an orbit is a fall rather than a balance, that tides
 * come from a difference rather than a pull, and that Newton's law is a superb
 * approximation rather than a truth. The distractors below are the specific
 * wrong models readers arrive with.
 */
import type { RecapsByTopic } from '../schema/recap';

export const GRAVITY_RECAPS: RecapsByTopic = {
  'what-gravity-is': {
    summary: {
      essential:
        'Gravity is the mutual attraction of every mass for every other mass. It is by far the weakest of the four fundamental interactions — a fridge magnet beats the whole Earth — but it is always attractive and never cancels, so once enough mass gathers it dominates everything at large scale. That is why gravity, and not electromagnetism, shapes planets, stars and galaxies.',
      detailed:
        'Two properties do all the work. Gravity is universal: it acts between every pair of masses, with no shielding and no negative charge to cancel it. And it is unimaginably weak: between two protons it is about 10³⁶ times weaker than their electric repulsion. Electromagnetism is stronger but bipolar, so bulk matter is electrically neutral and its influence dies away; gravity is feeble but monopolar, so it accumulates without limit. Scale decides which wins. In an atom, gravity is irrelevant; across a galaxy, nothing else matters. Note also what "no gravity in space" really means — orbiting astronauts are in continuous free fall, not beyond gravity\'s reach.',
    },
    questions: [
      {
        id: 'weak-but-dominant',
        prompt:
          'Gravity is the weakest of the fundamental interactions. Why does it nevertheless govern the structure of the Universe?',
        options: [
          { id: 'a', text: 'It becomes stronger over very large distances' },
          {
            id: 'b',
            text: 'It is always attractive and cannot be cancelled, so it accumulates as mass accumulates',
            correct: true,
          },
          { id: 'c', text: 'The other forces do not act in the vacuum of space' },
          { id: 'd', text: 'Dark matter amplifies it on large scales' },
        ],
        explanation:
          'Electric charge comes in two signs, so bulk matter is neutral and electromagnetic influence cancels out over distance. Gravity has only one sign, so every additional kilogram adds to the total. Weak-but-cumulative beats strong-but-self-cancelling once objects get large enough.',
      },
      {
        id: 'no-gravity',
        prompt: 'An astronaut floats inside the ISS. What is the correct description?',
        options: [
          { id: 'a', text: 'They are far enough from Earth that gravity is negligible' },
          {
            id: 'b',
            text: 'They and the station are both falling around Earth, so nothing pushes them against a floor',
            correct: true,
          },
          { id: 'c', text: 'The station’s speed cancels Earth’s gravity' },
          { id: 'd', text: 'Earth’s and the Moon’s pulls balance at that altitude' },
        ],
        explanation:
          'At ISS altitude Earth’s gravity is still about 90% of its surface value. Weightlessness is the sensation of unresisted free fall, not the absence of gravity — the station and everything in it fall together, so there is no contact force to feel.',
      },
    ],
  },

  'universal-law': {
    summary: {
      essential:
        'F = G·m₁·m₂/r² says the attraction between two masses grows with either mass and falls with the square of the distance between their centres. G is the constant that converts kilograms and metres into newtons; it is tiny, which is why gravity is weak. Double one mass and the force doubles; double the separation and it falls to a quarter.',
      detailed:
        'Read the equation term by term. m₁ and m₂ enter linearly and symmetrically — the Earth pulls you exactly as hard as you pull the Earth. r is the distance between centres of mass, not between surfaces, which is why standing on Earth already puts you 6,371 km away. The square in the denominator is geometric: influence spreading over a sphere thins as the sphere’s area, 4πr². G = 6.674 × 10⁻¹¹ N·m²/kg² is the worst-measured of the fundamental constants, known to only about one part in 10⁵. And the whole expression is a model with known limits: it assumes instantaneous action, ignores the finite speed of gravity, and is superseded near large masses and high speeds.',
    },
    questions: [
      {
        id: 'inverse-square',
        prompt:
          'A probe at distance r from a planet is moved to 3r. How does the gravitational force change?',
        options: [
          { id: 'a', text: 'It falls to one third' },
          { id: 'b', text: 'It falls to one ninth', correct: true },
          { id: 'c', text: 'It falls to one sixth' },
          { id: 'd', text: 'It is unchanged, because the masses are unchanged' },
        ],
        explanation:
          'The r² in the denominator means tripling the distance divides the force by 3² = 9. The inverse-square shape is not arbitrary: it is what any influence spreading uniformly over the surface of a sphere must do, since that area grows as r².',
      },
      {
        id: 'symmetry',
        prompt: 'Which is larger: Earth’s gravitational pull on you, or your pull on Earth?',
        options: [
          { id: 'a', text: 'Earth’s pull on you, by the ratio of the masses' },
          { id: 'b', text: 'They are exactly equal', correct: true },
          { id: 'c', text: 'Your pull on Earth, but only while you are falling' },
          { id: 'd', text: 'Earth’s pull, because gravity acts from larger mass to smaller' },
        ],
        explanation:
          'The two masses enter the formula symmetrically, so the forces are equal and opposite — Newton’s third law. What differs is the resulting acceleration: the same force divided by Earth’s enormous mass produces a motion far too small to notice.',
      },
      {
        id: 'r-meaning',
        prompt: 'In F = G·m₁·m₂/r², what does r measure for a person standing on Earth?',
        options: [
          { id: 'a', text: 'Their height above the ground' },
          {
            id: 'b',
            text: 'The distance from their centre of mass to Earth’s centre — about 6,371 km',
            correct: true,
          },
          { id: 'c', text: 'The thickness of the atmosphere' },
          { id: 'd', text: 'Zero, because they are in contact with the surface' },
        ],
        explanation:
          'For a spherically symmetric body the external field is the same as if all its mass sat at its centre, so r runs to the centre. This is also why climbing a mountain barely changes your weight: a few kilometres is a small fraction of 6,371.',
      },
    ],
  },

  'mass-and-weight': {
    summary: {
      essential:
        'Mass is how much matter an object contains and how strongly it resists being accelerated; it does not change when you travel. Weight is the gravitational force acting on that mass, W = m·g, and it changes with where you are — the same 70 kg body weighs about 687 N on Earth and 113 N on the Moon. The two words are used interchangeably in daily life and mean different things in physics.',
      detailed:
        'Beyond the everyday distinction there is a deeper one. Mass appears twice in physics for apparently unrelated reasons: as inertial mass in F = ma, measuring resistance to acceleration, and as gravitational mass in F = Gm₁m₂/r², measuring the strength of gravitational coupling. Nothing in Newtonian mechanics requires these to be the same number, yet every experiment finds them identical — currently to better than one part in 10¹⁵ (MICROSCOPE, 2022). Newton recorded the coincidence. Einstein refused to accept it as coincidence and built general relativity on the assumption that it is an identity, which is why free fall is the same for all bodies and why gravity can be reinterpreted as geometry.',
    },
    questions: [
      {
        id: 'moon',
        prompt: 'You take a 70 kg body to the Moon. What changes?',
        options: [
          { id: 'a', text: 'Its mass falls to about 12 kg; its weight is unchanged' },
          {
            id: 'b',
            text: 'Its mass stays 70 kg; its weight falls to about one sixth',
            correct: true,
          },
          { id: 'c', text: 'Both fall to about one sixth' },
          { id: 'd', text: 'Neither changes; only the sensation differs' },
        ],
        explanation:
          'Mass is a property of the object. Weight is a force, m·g, and lunar surface gravity is 1.62 m/s² against Earth’s 9.81 — a factor of about 6. The body is just as hard to accelerate sideways on the Moon as on Earth, which is exactly what unchanged mass means.',
      },
      {
        id: 'two-masses',
        prompt: 'What is significant about inertial mass and gravitational mass being equal?',
        options: [
          { id: 'a', text: 'It is a definition, so the equality is guaranteed' },
          {
            id: 'b',
            text: 'Nothing in Newtonian physics requires it, yet it holds to extraordinary precision — and general relativity is built on taking it as fundamental',
            correct: true,
          },
          { id: 'c', text: 'It explains why gravity is weaker than electromagnetism' },
          { id: 'd', text: 'It is an approximation that fails for very heavy objects' },
        ],
        explanation:
          'Resistance to acceleration and strength of gravitational coupling are logically independent quantities; their equality is an experimental fact, tested to about one part in 10¹⁵. Einstein promoted that fact to the equivalence principle, and the whole geometric picture of gravity follows from it.',
      },
    ],
  },

  'free-fall': {
    summary: {
      essential:
        'In free fall every object accelerates at the same rate regardless of mass, because a heavier object feels a proportionally larger force and has a proportionally larger inertia — the two cancel exactly. On Earth that rate is g ≈ 9.81 m/s². A hammer and a feather dropped together land together, provided there is no air; Apollo 15 performed exactly that demonstration on the Moon.',
      detailed:
        'The cancellation is worth writing out: m·a = G·M·m/r² gives a = G·M/r², with the falling object’s own mass gone from the result. Acceleration in free fall depends only on the attracting body and the distance, never on what is falling. Air resistance is what breaks the pattern on Earth, and it breaks it by mass-to-area ratio rather than by mass — which is why a feather loses and a hammer does not. "Weightlessness" belongs here too: an astronaut in orbit is in permanent free fall, so there is no supporting contact force and nothing to feel, even though gravity there is nearly as strong as at the surface.',
    },
    questions: [
      {
        id: 'same-rate',
        prompt: 'Why do a heavy ball and a light ball fall at the same rate in a vacuum?',
        options: [
          { id: 'a', text: 'Gravity pulls both with the same force' },
          {
            id: 'b',
            text: 'The heavier ball feels more force but resists acceleration proportionally more, and the two effects cancel exactly',
            correct: true,
          },
          { id: 'c', text: 'Their difference in mass is too small to matter' },
          { id: 'd', text: 'Air resistance normally makes up the difference' },
        ],
        explanation:
          'Setting m·a = G·M·m/r² and dividing by m leaves a = G·M/r². The falling object’s mass cancels out. This exact cancellation is the same fact as inertial mass equalling gravitational mass, and it is where general relativity begins.',
      },
      {
        id: 'weightless',
        prompt: 'What does it mean to feel weightless?',
        options: [
          { id: 'a', text: 'Gravity is absent' },
          {
            id: 'b',
            text: 'Nothing is pushing back against you, because you and your surroundings fall together',
            correct: true,
          },
          { id: 'c', text: 'You have reached escape velocity' },
          { id: 'd', text: 'Your mass has temporarily fallen to zero' },
        ],
        explanation:
          'What you normally sense as weight is the floor pushing up on you, not gravity pulling down. Remove the support — in a falling lift, a parabolic flight or an orbiting station — and the sensation vanishes while gravity carries on unchanged.',
      },
    ],
  },

  'surface-gravity': {
    summary: {
      essential:
        'Surface gravity is g = G·M/r²: it depends on a world’s mass and on its radius, not on mass alone. That is why Mars, with about a tenth of Earth’s mass, still has 38% of its surface gravity, and why the Sun’s enormous mass gives 274 m/s² at a surface 109 times further from the centre than Earth’s. Compactness matters as much as bulk.',
      detailed:
        'Because r is squared and M enters only linearly, radius has the sharper influence. Two bodies of equal mass, one twice the radius of the other, differ by a factor of four in surface gravity. This is why the ordering of worlds by mass and by surface gravity is not the same list: Saturn is 95 Earth masses yet has a surface gravity close to Earth’s, because it is enormous and diffuse. Pushed to the extreme, the same formula is what makes compact objects extraordinary — hold M fixed and shrink r far enough and g rises without limit, which is the Newtonian shadow of what happens near a neutron star or a black hole.',
    },
    questions: [
      {
        id: 'radius',
        prompt:
          'Two planets have the same mass, but one has twice the radius. How do their surface gravities compare?',
        options: [
          { id: 'a', text: 'They are equal, since the masses are equal' },
          { id: 'b', text: 'The larger planet has half the surface gravity' },
          { id: 'c', text: 'The larger planet has one quarter the surface gravity', correct: true },
          { id: 'd', text: 'The larger planet has four times the surface gravity' },
        ],
        explanation:
          'g = G·M/r², so doubling r divides g by four. Surface gravity is not a measure of how much mass a world has; it is a measure of how much mass lies beneath a given distance from the centre.',
      },
      {
        id: 'saturn',
        prompt:
          'Saturn has about 95 times Earth’s mass but a surface gravity close to Earth’s. Why?',
        options: [
          { id: 'a', text: 'Its rapid rotation cancels most of its gravity' },
          { id: 'b', text: 'It has no solid surface, so g is undefined there' },
          {
            id: 'c',
            text: 'Its radius is about nine times Earth’s, and the r² in the denominator offsets the larger mass',
            correct: true,
          },
          { id: 'd', text: 'Gas has weaker gravity than rock' },
        ],
        explanation:
          '95 divided by roughly 9² ≈ 81 leaves a ratio near 1.2 — close to Earth’s value. Rotation does reduce apparent weight slightly, and the "surface" is a pressure level rather than ground, but the dominant reason is simply that Saturn is huge.',
      },
    ],
  },

  orbits: {
    summary: {
      essential:
        'An orbit is not a balance between gravity and some outward force. It is free fall with enough sideways speed that the falling path keeps missing the surface. Gravity is the only force acting, and it is entirely unbalanced — it continuously bends the trajectory, which is precisely what keeps the object going round rather than straight on.',
      detailed:
        'Newton’s cannonball is the whole argument. Fire a ball horizontally and it falls; fire it faster and it falls further before landing; fire it fast enough and the ground curves away as quickly as the ball falls, and the fall never ends. The acceleration is toward the centre at every instant, so the velocity — always perpendicular to it in a circle — changes direction but not magnitude. There is no "centrifugal force" in the inertial frame; what a passenger feels as being flung outward is inertia carrying them in a straight line while the vehicle turns. Elliptical orbits follow from the same law with different initial speeds, which is where Kepler’s rules come from.',
    },
    questions: [
      {
        id: 'balance',
        prompt: 'What keeps a satellite in orbit rather than falling to Earth?',
        options: [
          { id: 'a', text: 'An outward centrifugal force balancing gravity' },
          {
            id: 'b',
            text: 'It is falling continuously, but moving sideways fast enough that it keeps missing Earth',
            correct: true,
          },
          { id: 'c', text: 'Its engines fire constantly to hold altitude' },
          { id: 'd', text: 'At orbital altitude gravity is too weak to pull it down' },
        ],
        explanation:
          'Gravity is the only force, and it is unbalanced — that is what makes the path curve. If it were balanced by something, the satellite would travel in a straight line and leave. The orbit is a permanent fall whose horizontal speed matches the curvature of the surface below.',
      },
      {
        id: 'speed-direction',
        prompt: 'In a circular orbit, gravity does not change the satellite’s speed. Why not?',
        options: [
          { id: 'a', text: 'Because gravity is too weak at that distance' },
          {
            id: 'b',
            text: 'Because the force points toward the centre, perpendicular to the motion, so it changes direction rather than magnitude',
            correct: true,
          },
          { id: 'c', text: 'Because the satellite is weightless' },
          { id: 'd', text: 'Because drag cancels the gain each orbit' },
        ],
        explanation:
          'A force along the direction of motion speeds an object up or slows it down; a force perpendicular to it turns the object. In a circle gravity is always perpendicular, so the speed is constant and only the heading changes. In an ellipse the force is not perpendicular, and the speed does vary.',
      },
    ],
  },

  'escape-velocity': {
    summary: {
      essential:
        'Escape velocity, v = √(2GM/r), is the speed at which an unpowered object launched upward never falls back — its kinetic energy exactly matches the energy needed to climb out of the gravitational well. For Earth it is 11.2 km/s. It is a speed for a single ballistic push, not a speed limit: a rocket that keeps thrusting can leave at any speed at all.',
      detailed:
        'Two features of the formula matter. The escaping object’s own mass has cancelled out, so escape velocity is a property of the body being escaped from and the distance you start at. And it never truly reaches zero: gravity has infinite range, so escaping means having enough energy that the ever-slowing climb never reverses, not outrunning the force. The same quantity governs atmospheres — a world keeps a gas when the typical thermal speed of its molecules is well below escape velocity, which is why Earth holds nitrogen and oxygen but loses hydrogen and helium, and why the Moon holds nothing at all. Push r small enough at fixed M and v exceeds c, which is the Newtonian hint of a black hole, though the honest treatment needs general relativity.',
    },
    questions: [
      {
        id: 'not-a-limit',
        prompt:
          'A spacecraft leaves Earth travelling at 3 km/s under continuous thrust. Can it escape?',
        options: [
          { id: 'a', text: 'No — anything below 11.2 km/s falls back' },
          {
            id: 'b',
            text: 'Yes, as long as it keeps thrusting; escape velocity applies only to unpowered objects',
            correct: true,
          },
          { id: 'c', text: 'Only if it first reaches orbit' },
          { id: 'd', text: 'Only if it travels straight up' },
        ],
        explanation:
          'Escape velocity is the speed needed for a single ballistic launch with no further energy input. A vehicle that keeps adding energy can climb out arbitrarily slowly — it is a question of total energy, not of instantaneous speed.',
      },
      {
        id: 'atmosphere',
        prompt: 'Why has the Moon retained essentially no atmosphere?',
        options: [
          { id: 'a', text: 'The solar wind blew it away and nothing replaced it' },
          {
            id: 'b',
            text: 'Its escape velocity of 2.4 km/s is low enough that gas molecules at typical temperatures escape over time',
            correct: true,
          },
          { id: 'c', text: 'It never had any gas to begin with' },
          { id: 'd', text: 'It has no magnetic field, and magnetic fields hold air down' },
        ],
        explanation:
          'Molecules in a gas have a spread of speeds around a thermal average; when that average is a significant fraction of escape velocity, the fast tail leaks away continuously and the atmosphere drains. Solar wind stripping contributes, but the low escape velocity is the fundamental reason.',
      },
      {
        id: 'mass-cancels',
        prompt: 'Does a heavier spacecraft need a higher escape velocity than a lighter one?',
        options: [
          { id: 'a', text: 'Yes, proportional to its mass' },
          {
            id: 'b',
            text: 'No — the escaping mass cancels out; only the planet’s mass and the starting distance matter',
            correct: true,
          },
          { id: 'c', text: 'Yes, but only by the square root of the mass ratio' },
          { id: 'd', text: 'It depends on the shape of the spacecraft' },
        ],
        explanation:
          'Equating ½mv² with GMm/r removes m from both sides, leaving v = √(2GM/r). A heavier craft needs more *energy* to escape — more fuel — but the same *speed*.',
      },
    ],
  },

  tides: {
    summary: {
      essential:
        'Tides are caused by the difference in gravitational pull across the Earth, not by the pull itself. The near side is pulled harder than Earth’s centre and the far side less, so water bulges on both sides at once — which is why most coasts see two high tides a day. Because the difference depends on 1/r³ rather than 1/r², the near Moon out-tides the vastly more massive Sun.',
      detailed:
        'Work in the frame of Earth’s centre: subtract the average pull, and what remains is a stretching field pointing away from the centre on both the near and far sides and squeezing at the sides. That residual is the tidal field, and it falls off as the cube of distance because it is the gradient of an inverse-square force. The Sun is 27 million times more massive than the Moon but 390 times further away, so its tidal effect is roughly 46% of the Moon’s — enough to produce spring and neap tides as the two align or oppose. The equilibrium two-bulge picture explains the physics but not any particular coastline: real tides are shaped by basin resonance, continental geometry and friction, which is why some places see one tide a day and the Bay of Fundy sees a 16 m range.',
    },
    questions: [
      {
        id: 'two-bulges',
        prompt:
          'Why are there high tides on both the side of Earth facing the Moon and the side facing away?',
        options: [
          { id: 'a', text: 'The Moon pushes water away on the far side' },
          {
            id: 'b',
            text: 'The Moon pulls the near water more than Earth’s centre and Earth’s centre more than the far water, stretching the ocean in both directions',
            correct: true,
          },
          { id: 'c', text: 'The Sun raises the far bulge and the Moon the near one' },
          { id: 'd', text: 'Earth’s rotation flings water outward on the far side' },
        ],
        explanation:
          'Tides come from the *gradient* of gravity across an extended body. Relative to the centre, the near side is pulled toward the Moon and the far side is left behind — both are displacements away from the centre, so both are bulges.',
      },
      {
        id: 'sun-vs-moon',
        prompt: 'The Sun is far more massive than the Moon. Why does the Moon dominate the tides?',
        options: [
          { id: 'a', text: 'The Sun is too hot for its gravity to reach Earth’s oceans' },
          {
            id: 'b',
            text: 'Tidal force falls off as 1/r³, so the Moon’s much smaller distance more than compensates for its smaller mass',
            correct: true,
          },
          { id: 'c', text: 'The Sun raises tides only in the atmosphere' },
          { id: 'd', text: 'The Moon orbits faster, so its effect accumulates' },
        ],
        explanation:
          'Gravitational force goes as 1/r², but the *difference* across a body — the gradient — goes as 1/r³. That steeper falloff is why proximity beats mass here: the solar tide is roughly 46% of the lunar tide, and their alignment gives spring and neap cycles.',
      },
    ],
  },

  'planetary-systems': {
    summary: {
      essential:
        'Kepler found three empirical rules from Tycho Brahe’s observations: orbits are ellipses with the Sun at one focus; a planet sweeps equal areas in equal times; and the square of the orbital period is proportional to the cube of the semi-major axis. Newton showed that all three are consequences of one inverse-square law — descriptions became derivations.',
      detailed:
        'Each of Kepler’s rules maps onto something deeper. The ellipse is the general bound solution of an inverse-square force; only that exponent gives closed, non-precessing orbits. Equal areas in equal times is conservation of angular momentum, and holds for any central force whatever its strength law. And T² ∝ a³ follows directly from equating gravitational and centripetal accelerations — with the constant of proportionality containing the central mass, which turns the rule into a scale for weighing stars, planets and even the Milky Way from the motion of things orbiting them. That is the practical legacy: nearly every mass in astronomy is measured by watching something orbit.',
    },
    questions: [
      {
        id: 'equal-areas',
        prompt:
          'Kepler’s second law — equal areas in equal times — is a statement of which conservation law?',
        options: [
          { id: 'a', text: 'Conservation of energy' },
          { id: 'b', text: 'Conservation of angular momentum', correct: true },
          { id: 'c', text: 'Conservation of mass' },
          { id: 'd', text: 'Conservation of linear momentum' },
        ],
        explanation:
          'The areal sweep rate is proportional to angular momentum per unit mass. Because gravity acts along the line joining the two bodies it exerts no torque about the focus, so angular momentum is constant — and the planet must move faster when closer.',
      },
      {
        id: 'weighing',
        prompt: 'Why is Kepler’s third law so useful in modern astronomy?',
        options: [
          { id: 'a', text: 'It predicts the composition of planets' },
          {
            id: 'b',
            text: 'Its constant of proportionality contains the central mass, so an orbit’s period and size reveal the mass of what is being orbited',
            correct: true,
          },
          { id: 'c', text: 'It gives the age of a planetary system' },
          { id: 'd', text: 'It works only within the Solar System, providing a local calibration' },
        ],
        explanation:
          'Rearranging T² ∝ a³ gives M in terms of the period and semi-major axis. Stars, exoplanet hosts, binary systems and the Milky Way’s central black hole are all weighed this way — by watching something go round them and timing it.',
      },
    ],
  },

  'newtonian-limits': {
    summary: {
      essential:
        'Newtonian gravity is not wrong; it is a superb approximation with a known domain. It fails when speeds approach the speed of light, when gravity is strong enough to curve spacetime noticeably, and when the finite speed of gravitational influence matters. Mercury’s orbit, GPS timing and the bending of starlight all sit outside that domain — and all are handled by general relativity, which reduces to Newton’s law in the weak-field, slow-motion limit.',
      detailed:
        'The specific failures are worth naming. Mercury’s perihelion advances 43 arcseconds per century more than Newtonian perturbations account for. Light is deflected by the Sun at twice the value a naive Newtonian calculation gives. Clocks on GPS satellites run about 38 microseconds per day fast relative to the ground, and uncorrected that becomes a 10 km positioning error within a day. Newton also assumed instantaneous action at a distance, which special relativity forbids. What replaces Newton does not discard him: general relativity contains Newtonian gravity as its weak-field limit, which is why spacecraft trajectories and planetary ephemerides still use Newtonian mechanics with relativistic corrections applied only where they matter.',
    },
    questions: [
      {
        id: 'not-wrong',
        prompt: 'What is the most accurate statement about Newtonian gravity today?',
        options: [
          { id: 'a', text: 'It was disproved by Einstein and is no longer used' },
          {
            id: 'b',
            text: 'It is an excellent approximation whose domain of validity is known, and general relativity reduces to it in weak fields at low speeds',
            correct: true,
          },
          { id: 'c', text: 'It is exact for planets and fails only for stars' },
          { id: 'd', text: 'It is a special case of quantum mechanics' },
        ],
        explanation:
          'Superseded theories are not deleted — they are bounded. NASA still navigates the Solar System with Newtonian mechanics, adding relativistic corrections only where the precision demands it. Knowing where a model stops being accurate is different from the model being false.',
      },
      {
        id: 'gps',
        prompt: 'Why does GPS need relativistic corrections?',
        options: [
          { id: 'a', text: 'Radio signals travel slower than light through the atmosphere' },
          {
            id: 'b',
            text: 'Satellite clocks run at a different rate from ground clocks — about 38 microseconds per day — and uncorrected this becomes kilometres of error',
            correct: true,
          },
          { id: 'c', text: 'Satellite orbits precess like Mercury’s' },
          { id: 'd', text: 'The satellites move fast enough to contract in length' },
        ],
        explanation:
          'Two relativistic effects act in opposite directions: motion slows the satellite clocks (special relativity) while weaker gravity higher up speeds them (general relativity), and the gravitational term wins. Positioning depends on timing to nanoseconds, so 38 μs per day is not a subtlety — it is roughly 10 km of drift per day.',
      },
    ],
  },
};
