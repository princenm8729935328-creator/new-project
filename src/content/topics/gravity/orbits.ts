/**
 * Gravity — orbits, escape, tides and planetary systems.
 *
 * Topics 6–9. This is where the law starts paying for itself: the same
 * F = Gm₁m₂/r² that explains a dropped stone also explains why the Moon does
 * not fall, how fast a rocket has to go, why there are two tides a day, and how
 * Kepler’s three empirical rules turn out to be one physical law seen from
 * three angles.
 *
 * The tides topic is written carefully. "The Moon pulls the ocean" is the
 * standard explanation and it is wrong — it predicts one bulge, not two. The
 * page gives the differential-acceleration account instead, because getting
 * this right is a good test of whether a reader has actually understood that
 * gravity depends on distance.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const GRAVITY = sectionId('gravity');
const REVIEWED = '2026-09-06';

export const GRAVITY_ORBIT_TOPICS: readonly Topic[] = [
  {
    id: topicId('orbits'),
    slug: 'orbits',
    sectionId: GRAVITY,
    order: 6,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Orbits: falling and missing',
    subtitle: 'An orbit is not a balance of forces. It is a fall that never reaches the ground.',
    summary: {
      essential:
        'A satellite is falling towards the Earth the whole time. It is also moving sideways so fast that the ground curves away beneath it just as quickly as it drops. It keeps falling and keeps missing.',
      detailed:
        'Newton made this precise with a thought experiment: a cannon on an impossibly tall mountain. Fire slowly and the ball lands nearby; fire faster and it lands further around the curve; fire fast enough and it comes back and hits you in the back of the head.',
      technical:
        'Circular orbit requires the gravitational acceleration to equal the centripetal acceleration: GM/r² = v²/r, giving v = √(GM/r). Below that speed at a given radius the trajectory is an ellipse with the launch point at apoapsis; above it, an ellipse with the launch point at periapsis; at √2 times it, a parabola.',
    },
    glossaryTerms: [glossaryTermId('free-fall')],
    related: [topicId('free-fall'), topicId('escape-velocity'), topicId('planetary-systems')],
    blocks: [
      {
        id: 'intuition',
        kind: 'prose',
        text: {
          essential:
            'Throw a ball horizontally. It travels forward and falls at the same time, tracing an arc into the ground a few metres away. Throw it harder and the arc is longer. There is nothing else to add — an orbit is that same arc, thrown hard enough that the Earth’s surface curves away from underneath it.',
          detailed:
            'The Earth’s surface drops about 5 metres below the horizontal for every 8 kilometres you travel across it. An object also falls about 5 metres in the first second. So an object moving horizontally at 8 km/s falls exactly as fast as the ground retreats, and never gets any closer. That is low Earth orbit, and the round number is not a coincidence — it is the two facts meeting.',
        },
      },
      {
        id: 'viz-cannon',
        kind: 'visualization',
        visualizationId: visualizationId('newton-cannon'),
      },
      {
        id: 'claim-not-balance',
        kind: 'claim',
        statement: {
          essential:
            'Nothing is holding a satellite up. There is no outward force balancing gravity — gravity is the only force acting, and it is entirely used up bending the path into a curve.',
          detailed:
            '"Centrifugal force" is not a force acting on the satellite; it is what the satellite’s own inertia feels like from inside the rotating frame. In the inertial frame the accounting is simple: one force, pointing inward, producing one acceleration, pointing inward. An object that is accelerating inward while moving sideways travels in a curve. That is the whole mechanism.',
          technical:
            'For a circular orbit, a = v²/r directed at the centre, supplied entirely by GM/r². Equating gives the orbital speed. In the co-rotating non-inertial frame one may add a centrifugal pseudo-force to recover statics, but this is a bookkeeping device tied to that frame, not a physical interaction with a third-law partner.',
        },
        evidence: 'model',
        references: [
          referenceId('newton-1687-principia'),
          referenceId('vallado-2013-astrodynamics'),
        ],
      },
      {
        id: 'speeds',
        kind: 'prose',
        text: {
          essential:
            'Closer orbits are faster. The International Space Station, 420 km up, travels at about 7.66 km/s and goes round in 93 minutes. The Moon, a thousand times further out, needs only about 1.02 km/s and takes 27.3 days.',
          detailed:
            'That falling-off with distance is v = √(GM/r): quadruple the radius and the orbital speed halves, while the circumference doubles, so the period grows by a factor of eight. Geostationary satellites sit at the one radius — 42,164 km from the centre — where the period is exactly one sidereal day and the satellite hangs over a fixed point on the equator.',
          technical:
            'Period T = 2π√(r³/GM). Setting T to one sidereal day (86,164 s) and solving for r with GM⊕ = 3.986 × 10¹⁴ m³/s² gives r = 42,164 km, or 35,786 km above mean sea level. The whole geostationary belt is a direct consequence of the inverse-square law and the length of the day.',
        },
      },
      {
        id: 'ellipses',
        kind: 'prose',
        text: {
          essential:
            'Only one particular sideways speed gives a circle. Slower, and the orbit is an ellipse that dips closer on the far side; faster, and it is an ellipse that swings further out. Circles are the rare special case, not the norm.',
          detailed:
            'On an elliptical orbit the object speeds up as it falls inward and slows as it climbs back out, trading gravitational potential energy for kinetic energy and back again. Total energy stays constant — which is why the orbit repeats indefinitely in an idealised two-body system, and why raising an orbit costs energy that has to come from somewhere.',
          technical:
            'The vis-viva equation, v² = GM(2/r − 1/a), links speed to current radius and semi-major axis. The specific orbital energy ε = v²/2 − GM/r = −GM/2a is negative for bound orbits, zero for parabolic escape and positive for hyperbolic escape — the classification the orbit lab computes directly.',
        },
      },
      {
        id: 'viz-orbit-lab',
        kind: 'visualization',
        visualizationId: visualizationId('orbit-lab'),
      },
      {
        id: 'assumptions',
        kind: 'callout',
        tone: 'caution',
        title: 'What the orbit lab is not',
        text: {
          essential:
            'The figure above solves one problem only: a single massless craft orbiting one fixed central mass, in a plane, with no atmosphere and no other bodies. Real mission design has to add the Moon, the Sun, the Earth’s non-spherical shape, atmospheric drag, solar radiation pressure and relativistic corrections. The trajectory shapes and the escape boundary shown are correct within the model; nothing beyond that is being claimed.',
        },
        references: [referenceId('vallado-2013-astrodynamics')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'iss-speed',
            label: 'Orbital speed of the International Space Station',
            value: 7.66,
            unit: 'km/s',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'At a mean altitude of about 420 km. The station is re-boosted periodically because residual atmospheric drag lowers the orbit.',
            references: [referenceId('nasa-planetary-factsheet')],
          },
          {
            id: 'moon-speed',
            label: 'Orbital speed of the Moon',
            value: 1.022,
            unit: 'km/s',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Mean value over an orbit of semi-major axis 384,400 km and period 27.32 days.',
            references: [referenceId('nasa-planetary-factsheet')],
          },
        ],
      },
      {
        id: 'cross-achievement',
        kind: 'cross-link',
        topicId: topicId('newtons-achievement'),
        rationale: 'The calculation that showed the Moon obeys the same law as an apple.',
      },
    ],
    furtherReading: [
      referenceId('newton-1687-principia'),
      referenceId('vallado-2013-astrodynamics'),
    ],
  },

  {
    id: topicId('escape-velocity'),
    slug: 'escape-velocity',
    sectionId: GRAVITY,
    order: 7,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Escape velocity',
    subtitle: 'v = √(2GM/r) — the speed at which you stop coming back.',
    summary: {
      essential:
        'Throw something upward hard enough and it never returns. For the Earth that speed is about 11.2 kilometres per second. It depends on the planet, not on what you throw.',
      detailed:
        'Escape velocity is an energy statement in disguise: it is the speed at which an object’s kinetic energy exactly equals the depth of the gravitational well it is sitting in. Reach it and the object slows for ever without ever stopping.',
      technical:
        'From ½mv² = GMm/r, the escaping mass cancels and v_e = √(2GM/r) = √2 × v_circular at the same radius. It is the parabolic-escape speed: specific orbital energy exactly zero.',
    },
    glossaryTerms: [glossaryTermId('escape-velocity')],
    related: [topicId('orbits'), topicId('surface-gravity'), topicId('newtonian-limits')],
    blocks: [
      {
        id: 'what-it-means',
        kind: 'prose',
        text: {
          essential:
            'Throw a ball up at 5 m/s and it comes back. Throw it at 500 m/s and it still comes back, from much higher. Keep increasing the speed and there is a threshold beyond which it never comes back at all. For Earth that threshold is 11.19 km/s — about 40,000 km/h.',
          detailed:
            'Why a threshold exists at all is the interesting part. Gravity weakens as 1/r², and a quantity falling that fast has a finite total: the energy needed to climb from the Earth’s surface all the way to infinity is not infinite. Once you have that much kinetic energy, gravity can never finish taking it away.',
        },
      },
      {
        id: 'careful-definition',
        kind: 'callout',
        tone: 'misconception',
        title: 'What escape velocity actually means',
        text: {
          essential:
            'It is not "the speed you must keep moving at to escape". It is the minimum speed an unpowered object needs *at the moment it is launched*, after which no further thrust is applied, to escape the body’s gravitational well and never fall back — ignoring the atmosphere and every other body. An object with an engine can leave at any speed it likes, given enough fuel; escape velocity is about a single initial push.',
          detailed:
            'Two further caveats matter. First, the escaping object never quite stops slowing down; it approaches zero speed only at infinite distance. Second, "escape" is escape from that one body — leaving the Earth at 11.2 km/s still leaves you orbiting the Sun. Escaping the Solar System from Earth’s orbit needs about 42.1 km/s relative to the Sun, of which the Earth’s own motion supplies 29.8.',
        },
        references: [referenceId('vallado-2013-astrodynamics')],
      },
      {
        id: 'claim-derivation',
        kind: 'claim',
        statement: {
          essential:
            'The formula is v = √(2GM/r). Note what is missing: the mass of the escaping object. A pebble and a spacecraft need exactly the same speed.',
          detailed:
            'Set the kinetic energy given at launch equal to the energy needed to climb out of the well: ½mv² = GMm/r. Every term on both sides carries one factor of m, so it cancels, leaving v² = 2GM/r. This is the same cancellation that makes everything fall at the same rate, appearing again in energy form.',
          technical:
            'The gravitational potential energy of mass m at radius r is U = −GMm/r, taking zero at infinity. Escape requires total energy E = ½mv² + U ≥ 0. Equality gives the parabolic case, v_e = √(2GM/r), which exceeds circular orbital speed at the same radius by exactly √2 — so a craft in low Earth orbit at 7.8 km/s needs about 3.2 km/s more, not another 11.2.',
        },
        evidence: 'model',
        references: [
          referenceId('vallado-2013-astrodynamics'),
          referenceId('newton-1687-principia'),
        ],
      },
      {
        id: 'viz-escape',
        kind: 'visualization',
        visualizationId: visualizationId('escape-velocity-chart'),
      },
      {
        id: 'how-it-changes',
        kind: 'prose',
        text: {
          essential:
            'More mass means a higher escape velocity; a bigger radius means a lower one. But both are under a square root, so the response is gentle: nine times the mass only triples the escape speed.',
          detailed:
            'Compare the Moon and Mars. Mars has about nine times the Moon’s mass, which alone would raise escape velocity by a factor of three; but Mars is also about twice the radius, which lowers it by √2. Net result: 5.03 km/s against 2.38 — a factor of 2.1, not 9. This is why leaving the Moon needs a small ascent stage while leaving Mars is a serious rocket problem.',
          technical:
            'v_e ∝ √(M/r) ∝ √(ρ) × r for a body of uniform density ρ, so within a family of similar-density bodies escape velocity grows linearly with size. That scaling is why small asteroids can be left by jumping — Ceres needs 0.51 km/s, but a 1 km asteroid needs under a metre per second.',
        },
      },
      {
        id: 'viz-well',
        kind: 'visualization',
        visualizationId: visualizationId('gravity-well'),
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 've-earth',
            label: 'Escape velocity from Earth’s surface',
            value: 11.19,
            unit: 'km/s',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Calculated from Earth’s mass and mean radius, ignoring the atmosphere and the Earth’s rotation. A rocket launched eastward from near the equator gets up to 0.46 km/s of this for free.',
            references: [referenceId('nasa-planetary-factsheet')],
          },
          {
            id: 've-moon',
            label: 'Escape velocity from the Moon',
            value: 2.38,
            unit: 'km/s',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About a fifth of Earth’s, which is why the Apollo ascent stage could be small.',
            references: [referenceId('nasa-planetary-factsheet')],
          },
          {
            id: 've-mars',
            label: 'Escape velocity from Mars',
            value: 5.03,
            unit: 'km/s',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Between the Moon’s and Earth’s, from 10.7% of Earth’s mass at 53% of its radius.',
            references: [referenceId('nasa-planetary-factsheet')],
          },
          {
            id: 've-sun',
            label: 'Escape velocity from the Sun’s surface',
            value: 617.5,
            unit: 'km/s',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'At the photosphere. Fifty-five times Earth’s, which is what makes the Sun a permanent gravitational anchor for the Solar System.',
            references: [referenceId('nasa-planetary-factsheet')],
          },
        ],
      },
      {
        id: 'atmosphere-note',
        kind: 'callout',
        tone: 'note',
        title: 'Why escape velocity also decides what air a world can keep',
        text: {
          essential:
            'Gas molecules move at a range of speeds set by temperature. If a planet’s escape velocity is not comfortably above the typical speed of a given molecule, that gas leaks away over geological time. The Moon has essentially none; Earth holds nitrogen and oxygen but has lost most of its hydrogen and helium; Jupiter holds everything.',
        },
        references: [referenceId('nasa-planetary-factsheet')],
      },
    ],
    furtherReading: [
      referenceId('vallado-2013-astrodynamics'),
      referenceId('nasa-planetary-factsheet'),
    ],
  },

  {
    id: topicId('tides'),
    slug: 'tides',
    sectionId: GRAVITY,
    order: 8,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Tides',
    subtitle: 'Not the Moon pulling the ocean — the Moon pulling one side harder than the other.',
    summary: {
      essential:
        'There are two high tides a day, on opposite sides of the Earth at once. A simple pull towards the Moon would produce one. The second bulge is the clue that something subtler is happening.',
      detailed:
        'Tides come from the *difference* in the Moon’s gravitational pull across the width of the Earth. The near side is pulled harder than the centre, the far side less hard, and relative to the Earth as a whole both ends are stretched outward.',
      technical:
        'The tidal acceleration is the gradient of the gravitational field, so it falls as 1/r³ rather than 1/r². That is why the Moon dominates the Sun for tides despite the Sun exerting 178 times more direct gravitational force on the Earth.',
    },
    glossaryTerms: [glossaryTermId('tidal-force')],
    related: [topicId('universal-law'), topicId('orbits'), topicId('planetary-systems')],
    blocks: [
      {
        id: 'puzzle',
        kind: 'prose',
        text: {
          essential:
            'Most coasts get two high tides in every lunar day of 24 hours and 50 minutes. If the Moon simply pulled the water towards itself, there would be one bulge on the Moon’s side and one high tide per rotation. The second bulge — on the side facing away from the Moon — is the thing that needs explaining.',
          detailed:
            'The common textbook picture ("the Moon pulls the ocean up") is not just incomplete, it is wrong in a way that predicts the wrong number of tides. Getting the right answer requires taking seriously something already established two topics ago: that gravity depends on distance, and the Earth is 12,742 km wide.',
        },
      },
      {
        id: 'claim-differential',
        kind: 'claim',
        statement: {
          essential:
            'The Moon pulls the near side of the Earth harder than the centre, and the centre harder than the far side. The whole Earth accelerates by the average amount; relative to that average, the near side is pulled towards the Moon and the far side is left behind. Both ends stretch outward.',
          detailed:
            'Work it in the Earth’s own frame. Every part of the Earth is in free fall towards the Moon, but not at the same rate: the near side is about 6,400 km closer than the centre and feels roughly 3.4% more pull, while the far side, the same distance beyond, feels about 3.2% less. Subtract the centre’s acceleration — the one the Earth as a whole shares — and what remains points away from the centre at both ends, and inward around the sides. That residual field is the tidal force, and it stretches the Earth into a slight rugby-ball shape.',
          technical:
            'Expanding GM_moon/(d ∓ R)² about d gives a leading residual of ±2GM_moon R/d³. The 1/d³ dependence and the factor-of-two symmetry between near and far sides are both visible in that expansion. The transverse component, −GM_moon R/d³, is what squeezes the sides in and is essential to actually moving water horizontally.',
        },
        evidence: 'established',
        references: [referenceId('agnew-2015-earth-tides'), referenceId('newton-1687-principia')],
      },
      {
        id: 'viz-tides',
        kind: 'visualization',
        visualizationId: visualizationId('tides-diagram'),
      },
      {
        id: 'rotation',
        kind: 'prose',
        text: {
          essential:
            'The two bulges stay roughly lined up with the Moon while the Earth turns underneath them. A point on the coast passes through both bulges in one rotation — hence two high tides. The gap is about 12 hours 25 minutes rather than 12, because the Moon has moved on a little in its own orbit meanwhile.',
          detailed:
            'The Moon completes an orbit in 27.3 days, so it advances about 13° per day. The Earth has to turn an extra 13° to bring the same point back under the Moon, which takes about 50 minutes — giving a lunar day of 24 h 50 min and a tidal cycle of half that.',
        },
      },
      {
        id: 'claim-sun',
        kind: 'claim',
        statement: {
          essential:
            'The Sun raises tides too, a little under half as strong as the Moon’s. When they line up the tides are unusually large; when they are at right angles the tides are unusually small.',
          detailed:
            'The Sun exerts about 178 times more total gravitational force on the Earth than the Moon does — yet its tidal effect is roughly 46% of the Moon’s. The reason is the 1/d³ dependence: the Sun is 390 times further away, and although it is 27 million times more massive, the extra power of distance cuts its tidal influence far more than its mass raises it. Spring tides (aligned, at new and full Moon) and neap tides (perpendicular, at the quarters) follow directly.',
          technical:
            'Ratio of tidal accelerations = (M_sun/M_moon)(d_moon/d_sun)³ ≈ (2.7 × 10⁷)(1/389)³ ≈ 0.46. "Spring" here has nothing to do with the season; it is the older sense of springing up.',
        },
        evidence: 'established',
        references: [referenceId('agnew-2015-earth-tides'), referenceId('noaa-tides-tutorial')],
      },
      {
        id: 'real-tides',
        kind: 'callout',
        tone: 'caution',
        title: 'Real coastlines do not obey the simple picture',
        text: {
          essential:
            'The two-bulge model explains where tides come from. It does not predict the tide at any actual harbour. Real tides are shallow-water waves sloshing in ocean basins with their own resonant periods, deflected by the Earth’s rotation and funnelled by coastline shape. The Bay of Fundy sees over 16 metres of range; the Mediterranean sees a few centimetres; some places have one high tide a day rather than two.',
        },
        references: [referenceId('noaa-tides-tutorial'), referenceId('agnew-2015-earth-tides')],
      },
      {
        id: 'consequences',
        kind: 'prose',
        text: {
          essential:
            'Tides do more than move water. Friction from the tidal bulges is slowly braking the Earth’s rotation and pushing the Moon further away — about 3.8 centimetres per year, measured by bouncing lasers off reflectors left on the surface.',
          detailed:
            'The same mechanism, applied elsewhere, explains why the Moon keeps one face towards us, why Io is volcanically active, and why a comet or moon that strays inside a planet’s Roche limit is pulled apart. Tidal forces are the reason gravity can destroy things as well as assemble them.',
        },
      },
      {
        id: 'quantity-recession',
        kind: 'quantity',
        quantities: [
          {
            id: 'lunar-recession',
            label: 'Rate at which the Moon is receding from Earth',
            value: 3.8,
            unit: 'cm/year',
            uncertainty: { plusMinus: 0.1 },
            context:
              'Measured by lunar laser ranging to retroreflectors placed by Apollo and Lunokhod missions. Caused by tidal friction transferring angular momentum from Earth’s rotation to the Moon’s orbit.',
            references: [referenceId('williams-2012-lunar-laser')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('agnew-2015-earth-tides'), referenceId('noaa-tides-tutorial')],
  },

  {
    id: topicId('planetary-systems'),
    slug: 'planetary-systems',
    sectionId: GRAVITY,
    order: 9,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Gravity and planetary systems',
    subtitle: 'Kepler found three rules by staring at data. Newton showed they were one law.',
    summary: {
      essential:
        'Planets move on ellipses, sweep out equal areas in equal times, and have periods tied to their distances. All three follow from the inverse-square law — they are not separate facts.',
      detailed:
        'This is the moment a description became an explanation. Kepler’s laws summarised Tycho Brahe’s observations beautifully but said nothing about why. Newton derived all three from one force law, and in doing so turned astronomy into a branch of mechanics.',
    },
    related: [topicId('orbits'), topicId('newtons-achievement'), topicId('tides')],
    blocks: [
      {
        id: 'kepler',
        kind: 'prose',
        text: {
          essential:
            'Kepler’s three rules, from decades of naked-eye observations: planets orbit on ellipses with the Sun at one focus; a line from Sun to planet sweeps equal areas in equal times; and the square of the orbital period is proportional to the cube of the average distance.',
          detailed:
            'The third is the one that carries the most information. Earth takes 1 year at 1 astronomical unit; Jupiter is 5.2 AU out, and 5.2³ = 140, whose square root is 11.9 — Jupiter’s year in Earth years, to three figures, from arithmetic alone.',
        },
      },
      {
        id: 'claim-derived',
        kind: 'claim',
        statement: {
          essential:
            'Newton showed that all three of Kepler’s rules are consequences of a single inverse-square attraction. They stopped being rules and became results.',
          detailed:
            'The equal-areas law follows from the force being central — pointing straight at the Sun — which conserves angular momentum, and holds for *any* central force, not only gravity. The elliptical orbits and the period–distance relation are specific to the inverse square: change the exponent and closed elliptical orbits stop existing. So Kepler’s second law tests one property of gravity, and his first and third test a different, sharper one.',
          technical:
            'Solving the two-body problem for a 1/r² central force yields conic sections with the focus at the centre of force, and T² = 4π²a³/G(M + m). The dependence on the *sum* of the masses is Newton’s correction to Kepler’s third law, and it is what allows a binary star’s total mass to be read off its orbit.',
        },
        evidence: 'model',
        references: [
          referenceId('kepler-1609-astronomia-nova'),
          referenceId('newton-1687-principia'),
        ],
      },
      {
        id: 'weighing',
        kind: 'prose',
        text: {
          essential:
            'This gives astronomers a scale for the Universe. Watch anything orbit anything else, measure the period and the size of the orbit, and the masses follow. Almost every mass quoted in astronomy is measured this way.',
          detailed:
            'The mass of the Sun comes from the Earth’s orbit. The mass of the Earth comes from the Moon’s, and from satellites. The mass of the Milky Way’s central black hole comes from watching individual stars loop around it. The mass of a distant exoplanet comes from the wobble it induces in its star. In every case the instrument is Newtonian gravity, and in every case what is actually measured is the product GM.',
          technical:
            'Because orbital dynamics constrain GM rather than M, the Sun’s gravitational parameter is known to about ten significant figures while its mass in kilograms is known to five — the difference being entirely the uncertainty in G. This is why the IAU defines nominal values of GM for solar and planetary quantities rather than masses.',
        },
      },
      {
        id: 'claim-discovery',
        kind: 'claim',
        statement: {
          essential:
            'The theory was strong enough to find a planet nobody had seen. Uranus was not moving quite as predicted; the discrepancy was used to calculate where an unknown planet must be, and Neptune was found within a degree of the prediction.',
          detailed:
            'Le Verrier and Adams independently attributed Uranus’s residuals to an eighth planet and computed its position. Galle found Neptune in 1846 on the first night of looking. The same method applied to Mercury’s residuals produced a predicted planet "Vulcan" that was never found — because that discrepancy was not a missing planet but a failure of Newtonian gravity itself.',
        },
        evidence: 'established',
        references: [referenceId('newton-1687-principia'), referenceId('will-2014-confrontation')],
      },
      {
        id: 'hierarchy',
        kind: 'prose',
        text: {
          essential:
            'Gravity also explains the architecture: why systems are flat, why they orbit in the same direction, and why moons orbit planets while planets orbit stars. Whatever has the most nearby mass wins, and its influence fades as 1/r².',
          detailed:
            'A collapsing cloud with any net rotation flattens into a disc, because material can fall inward along the rotation axis but not across it — angular momentum forbids that. Everything that forms from the disc inherits its plane and direction. Within the resulting hierarchy, a body is bound to whichever mass dominates locally: the Moon is inside the Earth’s sphere of influence, which is itself inside the Sun’s.',
        },
      },
      {
        id: 'cross-limits',
        kind: 'cross-link',
        topicId: topicId('newtonian-limits'),
        rationale: 'Where this extraordinarily successful model stops being accurate.',
      },
    ],
    furtherReading: [
      referenceId('kepler-1609-astronomia-nova'),
      referenceId('newton-1687-principia'),
    ],
  },
];
