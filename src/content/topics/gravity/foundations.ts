/**
 * Gravity — foundations.
 *
 * Topics 1–5: what gravity is in Newton’s picture, the law itself term by term,
 * the two meanings of mass, free fall, and surface gravity.
 *
 * The writing rule for this section, which is different from Phase 2’s: a
 * reader should finish each page able to *use* the idea, not merely to repeat
 * it. So every equation is unpacked symbol by symbol, every "what happens if"
 * question a reader would actually ask is answered with a number, and the
 * everyday example comes before the astronomical one.
 *
 * The evidence levels stay honest. "Things fall at the same rate" is
 * `established` — it is measured to one part in 10^15. "F = Gm₁m₂/r² describes
 * that" is `model`: an extremely successful one, but a model, and the whole
 * final topic of this section is about where it stops.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const GRAVITY = sectionId('gravity');
const REVIEWED = '2026-09-06';

export const GRAVITY_FOUNDATION_TOPICS: readonly Topic[] = [
  {
    id: topicId('what-gravity-is'),
    slug: 'what-gravity-is',
    sectionId: GRAVITY,
    order: 1,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What gravity is',
    subtitle: 'Every mass pulls every other mass. That single sentence builds solar systems.',
    summary: {
      essential:
        'Anything with mass attracts anything else with mass. The pull is always there, always attractive, and never switches off — it just gets weaker with distance.',
      detailed:
        'Newton’s insight was not that things fall. It was that the pull holding you to the ground and the pull holding the Moon in its orbit are the same pull, obeying one rule, everywhere.',
      technical:
        'In the Newtonian description gravity is a force between point masses proportional to the product of the masses and inversely proportional to the square of their separation, acting along the line joining them. Einstein later replaced this description with the curvature of spacetime, which reduces to Newton’s in the weak-field, slow-motion limit.',
    },
    glossaryTerms: [glossaryTermId('inertia'), glossaryTermId('gravitational-constant')],
    related: [topicId('universal-law'), topicId('mass-and-weight'), topicId('free-fall')],
    blocks: [
      {
        id: 'open',
        kind: 'prose',
        text: {
          essential:
            'Drop something. It goes down. That is so ordinary that it is easy to miss how strange it is — nothing touched it, nothing pushed it, and yet it accelerated.',
          detailed:
            'For most of history, "down" and "the heavens" were separate subjects with separate rules. Falling was what earthly things did because they belonged on the ground; planets moved in circles because circles were the perfect celestial motion. The two had nothing to do with each other. Newton’s claim was that they are the same phenomenon, and he backed it with a calculation anyone could check.',
        },
      },
      {
        id: 'claim-universal',
        kind: 'claim',
        statement: {
          essential:
            'Every object with mass attracts every other object with mass. Not just planets — you and this page are pulling on each other right now, far too weakly to notice.',
          detailed:
            'The word that matters in "universal gravitation" is universal. The law makes no exception for small objects, for objects of different composition, or for objects at rest. Two 1 kg masses a metre apart attract with a force of about 6.7 × 10⁻¹¹ newtons — roughly the weight of a bacterium — but the force is there, and it has been measured in the laboratory since 1798.',
          technical:
            'Cavendish’s torsion balance measured the attraction between lead spheres and, through it, the mean density of the Earth. Modern determinations of G still use torsion balances and still disagree at the level of tens of parts per million, which is why G is the least precisely known of the fundamental constants despite being the oldest.',
        },
        evidence: 'established',
        references: [referenceId('cavendish-1798'), referenceId('codata-2018')],
      },
      {
        id: 'claim-always-attractive',
        kind: 'claim',
        statement: {
          essential:
            'Gravity only ever pulls. There is no gravitational repulsion, no way to shield against it, and no known way to switch it off.',
          detailed:
            'Electric charge comes in two signs, so a lump of matter with equal positive and negative charge is electrically neutral from outside. Mass comes in one sign only, so contributions always add. That is why gravity — by far the weakest of the four fundamental interactions — is the one that shapes the Universe at large scales: it never cancels.',
          technical:
            'Between two protons, the electrostatic repulsion exceeds the gravitational attraction by a factor of about 10³⁶. Yet at the scale of a planet, electromagnetic forces have been neutralised by the pairing of charges, while every kilogram still contributes its full gravitational pull. Accumulation, not strength, is what makes gravity dominant.',
        },
        evidence: 'established',
        references: [referenceId('newton-1687-principia'), referenceId('pdg-2024')],
      },
      {
        id: 'weakness',
        kind: 'callout',
        tone: 'note',
        title: 'Gravity is astonishingly weak',
        text: {
          essential:
            'A small fridge magnet lifts a paperclip off the table. In doing so it beats the gravitational pull of the entire Earth — six thousand billion billion tonnes of it — with a few grams of iron. That is the scale of the mismatch between electromagnetism and gravity.',
        },
        references: [referenceId('pdg-2024')],
      },
      {
        id: 'claim-participation',
        kind: 'claim',
        statement: {
          essential:
            'Everything with mass takes part, in both directions. The Earth pulls you down; you pull the Earth up by exactly the same force. The Earth just does not move much.',
          detailed:
            'This is Newton’s third law applied to gravity, and it is not a technicality. A 70 kg person is pulled towards the Earth with about 687 newtons — and pulls the Earth towards themselves with 687 newtons. The forces are equal; the accelerations are not, because acceleration is force divided by mass, and the Earth’s mass is about 8.5 × 10²² times larger.',
          technical:
            'a_Earth = F / M_⊕ ≈ 687 / 5.97 × 10²⁴ ≈ 1.1 × 10⁻²² m/s². Over the roughly one second of a fall, the Earth moves towards the falling person by a distance far smaller than a proton radius. The effect is real and is unmeasurable in this configuration.',
        },
        evidence: 'model',
        references: [referenceId('newton-1687-principia'), referenceId('nasa-planetary-factsheet')],
      },
      {
        id: 'cross-third-law',
        kind: 'cross-link',
        topicId: topicId('third-law'),
        rationale:
          'Why the equal-and-opposite pair does not cancel, and how to see it in a collision.',
      },
      {
        id: 'misconception-zero-g',
        kind: 'callout',
        tone: 'misconception',
        title: '“There is no gravity in space”',
        text: {
          essential:
            'At the altitude of the International Space Station, about 420 km up, Earth’s gravity is still about 89% as strong as it is at the ground. Astronauts float not because gravity is absent but because they and their spacecraft are falling together, continuously, around the Earth.',
          detailed:
            'Compute it: g at radius r is GM/r². With r = 6371 + 420 = 6791 km against 6371 km at the surface, the ratio is (6371/6791)² = 0.88. Nothing about the station’s environment removes gravity; free fall removes the *sensation* of weight, which is a different thing entirely.',
        },
        references: [referenceId('nasa-planetary-factsheet')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'g-constant',
            label: 'Gravitational constant, G',
            value: 6.6743e-11,
            unit: 'm³ kg⁻¹ s⁻²',
            uncertainty: { plusMinus: 1.5e-15 },
            context:
              'CODATA 2018 recommended value. Known to about 22 parts per million — the least precisely measured of the fundamental constants.',
            references: [referenceId('codata-2018')],
          },
          {
            id: 'earth-mass',
            label: 'Mass of the Earth',
            value: 5.9722e24,
            unit: 'kg',
            uncertainty: { plusMinus: 6e20 },
            context:
              'Derived from the far more precisely known product GM⊕ = 3.986004 × 10¹⁴ m³/s²; the mass alone inherits the uncertainty in G.',
            references: [
              referenceId('nasa-planetary-factsheet'),
              referenceId('iau-2015-nominal-constants'),
            ],
          },
        ],
      },
      {
        id: 'cross-law',
        kind: 'cross-link',
        topicId: topicId('universal-law'),
        rationale: 'The equation itself, one symbol at a time.',
      },
    ],
    furtherReading: [referenceId('newton-1687-principia'), referenceId('codata-2018')],
  },

  {
    id: topicId('universal-law'),
    slug: 'universal-law',
    sectionId: GRAVITY,
    order: 2,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The law of universal gravitation',
    subtitle: 'F = G·m₁·m₂ / r² — what every symbol means, and what the equation predicts.',
    summary: {
      essential:
        'One short equation gives the pull between any two objects. Multiply the two masses, divide by the distance squared, and scale by a constant.',
      detailed:
        'The equation is worth taking apart slowly. Each symbol answers a specific question — how much stuff, how far apart, how strong is gravity in the first place — and the way they combine is what makes the law predictive rather than merely descriptive.',
      technical:
        'F = G m₁ m₂ / r², directed along the line joining the centres of mass. For spherically symmetric bodies the shell theorem lets r be measured from the centre, which is why the formula applies to planets at all rather than only to point masses.',
    },
    glossaryTerms: [glossaryTermId('gravitational-constant')],
    related: [topicId('what-gravity-is'), topicId('surface-gravity'), topicId('orbits')],
    blocks: [
      {
        id: 'equation-intro',
        kind: 'prose',
        text: {
          essential:
            'Here is the whole law: F = G × m₁ × m₂ ÷ r². F is the force, m₁ and m₂ are the two masses, r is the distance between them, and G is a fixed number that sets how strong gravity is. Everything below is an unpacking of that one line.',
          detailed:
            'Newton published it in 1687 in the Principia. What made it revolutionary was not the algebra but the claim attached: that the same expression, with the same constant, governs a dropped stone, the tides, the Moon, and every planet. One rule, no exceptions, checkable by anyone with a telescope and patience.',
        },
      },
      {
        id: 'symbol-F',
        kind: 'prose',
        text: {
          essential:
            'F — the force. Measured in newtons. One newton is roughly the weight of a small apple in your hand. This is the pull each object feels: both feel the same number, in opposite directions.',
          detailed:
            'Force is a vector: it has a size and a direction, and the direction here is always along the straight line joining the two centres. Nothing in the equation is off to one side, which is why gravity alone can never make an orbit tilt or twist — it can only pull inward.',
          technical:
            'The vector form is F₁₂ = −G m₁ m₂ r̂ / r², where r̂ points from body 1 to body 2 and the minus sign encodes attraction. The central, radial character of the force is what conserves angular momentum and is why orbits stay in a plane.',
        },
      },
      {
        id: 'symbol-m',
        kind: 'prose',
        text: {
          essential:
            'm₁ and m₂ — the two masses, in kilograms. They multiply, so the force depends on both. Double either mass and you double the force. Double both and you get four times the force.',
          detailed:
            'This symmetry is worth pausing on. There is no "attracting object" and "attracted object" in the equation; the two masses appear identically. A hammer does not fall to the Earth any more than the Earth falls to the hammer — in the equation neither is privileged. What breaks the apparent symmetry is inertia, not gravity.',
          technical:
            'Because the force is proportional to m₁ m₂ and the resulting acceleration of body 1 is F/m₁, body 1’s own mass cancels: a₁ = G m₂ / r². The acceleration of a falling object therefore depends only on what it is falling towards, never on itself. That cancellation is the mathematical form of the equivalence principle.',
        },
      },
      {
        id: 'symbol-r',
        kind: 'prose',
        text: {
          essential:
            'r — the distance between the two centres, in metres. It is squared and it is on the bottom, so distance matters more than mass does, and more distance means less force.',
          detailed:
            'Note "between the centres", not "between the surfaces". Standing on the ground you are not zero metres from the Earth; you are 6,371 kilometres from its centre. Climbing a ten-storey building changes r by 30 metres out of 6,371,000 — which is why your weight does not noticeably change when you go upstairs.',
          technical:
            'Using the centre is licensed by Newton’s shell theorem: a spherically symmetric shell attracts an external body exactly as if all its mass were concentrated at its centre, and exerts no net force on a body inside it. Without that theorem the law would be almost unusable for real planets, and Newton delayed publication partly until he could prove it.',
        },
      },
      {
        id: 'symbol-G',
        kind: 'prose',
        text: {
          essential:
            'G — the gravitational constant, 6.674 × 10⁻¹¹. It never changes. Its job is to turn kilograms and metres into newtons, and its tininess is why gravity between everyday objects is unnoticeable.',
          detailed:
            'G is not derived from anything; it is measured. Cavendish did it in 1798 by hanging two small lead balls from a fine wire and watching the wire twist as two larger balls were brought near. The twist was measured in fractions of a degree, and from it came the mass of the Earth.',
          technical:
            'Because G is measured through the force between laboratory masses while planetary dynamics measure only the products GM, the gravitational parameters of the Sun and planets are known to nine or more significant figures while their masses are known only to the five or so figures that G permits.',
        },
      },
      {
        id: 'viz-inverse-square',
        kind: 'visualization',
        visualizationId: visualizationId('inverse-square-law'),
      },
      {
        id: 'why-squared',
        kind: 'claim',
        statement: {
          essential:
            'Why squared? Because influence spreads over a sphere. Go twice as far away and the same influence is spread over four times the area, so any fixed patch gets a quarter as much.',
          detailed:
            'A sphere’s surface area is 4πr². Whatever quantity is spreading outward from the mass is diluted in exactly that proportion, and a quantity diluted as 1/r² produces a force that falls as 1/r². The same geometry gives the same law for light intensity and for the electric field of a point charge — the inverse square is a fact about three-dimensional space before it is a fact about gravity.',
          technical:
            'Formally: Gauss’s law for a 1/r² field gives a flux through any enclosing surface that is independent of the surface, which is equivalent to the field falling as 1/r² in three spatial dimensions. Laboratory and astronomical tests constrain the exponent to 2 with high precision; departures at short range are searched for as signatures of extra dimensions and none has been found.',
        },
        evidence: 'model',
        references: [referenceId('newton-1687-principia'), referenceId('will-2014-confrontation')],
      },
      {
        id: 'what-if',
        kind: 'callout',
        tone: 'note',
        title: 'What the equation predicts, in four questions',
        text: {
          essential:
            'Double m₁ → force doubles. Double both masses → force is four times larger. Double the distance → force drops to one quarter. Halve the distance → force is four times larger. Move ten times further away → one hundredth of the force. Distance is the powerful lever, because it is the one that gets squared.',
          detailed:
            'A worked case: the Moon at its average distance of 384,400 km pulls on the Earth with about 2.0 × 10²⁰ N. If the Moon were twice as far, that would fall to 4.9 × 10¹⁹ N — a quarter. If instead the Moon kept its distance and doubled its mass, the force would double to 4.0 × 10²⁰ N. Same equation, two very different sensitivities.',
        },
        references: [referenceId('nasa-planetary-factsheet'), referenceId('codata-2018')],
      },
      {
        id: 'viz-lab',
        kind: 'visualization',
        visualizationId: visualizationId('gravity-lab'),
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'earth-moon-force',
            label: 'Gravitational force between Earth and Moon',
            value: 1.98e20,
            unit: 'N',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Calculated from F = Gm₁m₂/r² with the mean Earth–Moon distance of 384,400 km. The Moon’s distance varies by about ±21,000 km over an orbit, so the instantaneous force varies by roughly ±11%.',
            references: [referenceId('nasa-planetary-factsheet'), referenceId('codata-2018')],
          },
          {
            id: 'sun-earth-force',
            label: 'Gravitational force between Sun and Earth',
            value: 3.54e22,
            unit: 'N',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Calculated at one astronomical unit. About 180 times the Earth–Moon force, which is why the Earth orbits the Sun and the Moon accompanies it.',
            references: [referenceId('nasa-planetary-factsheet'), referenceId('codata-2018')],
          },
        ],
      },
      {
        id: 'limits-note',
        kind: 'callout',
        tone: 'caution',
        title: 'This equation is a model, not the last word',
        text: {
          essential:
            'Everything on this page is Newtonian gravity, and Newtonian gravity is an approximation. It is a superb one — it lands spacecraft — but it is measurably wrong for Mercury’s orbit, for clocks at different heights, and for light passing the Sun. The last topic in this section is about exactly where it breaks.',
        },
        references: [referenceId('will-2014-confrontation')],
      },
    ],
    furtherReading: [referenceId('newton-1687-principia'), referenceId('codata-2018')],
  },

  {
    id: topicId('mass-and-weight'),
    slug: 'mass-and-weight',
    sectionId: GRAVITY,
    order: 3,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Mass, weight, and the two kinds of mass',
    subtitle: 'Your mass is the same on the Moon. Your weight is not. And that is only half of it.',
    summary: {
      essential:
        'Mass is how much matter there is, measured in kilograms. Weight is the force gravity exerts on that mass, measured in newtons. Change planet and the weight changes; the mass does not.',
      detailed:
        'Underneath the everyday distinction sits a deeper one. Mass shows up in physics twice — as resistance to being accelerated, and as the source and receiver of gravity — and there is no obvious reason those two should be the same number. They are, to fifteen decimal places, and nobody has explained why within Newtonian physics.',
    },
    glossaryTerms: [glossaryTermId('inertia'), glossaryTermId('equivalence-principle')],
    related: [topicId('free-fall'), topicId('surface-gravity'), topicId('second-law')],
    blocks: [
      {
        id: 'everyday',
        kind: 'prose',
        text: {
          essential:
            'A bathroom scale does not measure your mass. It measures how hard you push down on it, which is a force. On the Moon the same body would push six times less hard, and the scale would read six times less — while you would contain exactly as much matter as before.',
          detailed:
            'In everyday speech we use "weight" in kilograms, and for terrestrial purposes it does no harm, because g is nearly constant across the Earth’s surface. In physics the units keep the distinction visible: kilograms for mass, newtons for weight, and W = m·g to convert between them at a particular place.',
        },
      },
      {
        id: 'claim-two-masses',
        kind: 'claim',
        statement: {
          essential:
            'Mass does two completely different jobs. It resists being pushed (inertial mass) and it generates and responds to gravity (gravitational mass). There is no obvious reason those should be the same quantity.',
          detailed:
            'Inertial mass is what appears in F = ma: it says how much a given push changes an object’s motion, whether the push is gravitational, electrical or a shove. Gravitational mass is what appears in F = Gm₁m₂/r²: it says how strongly the object participates in gravity. Electric charge, by contrast, plays only the second kind of role — a charge determines electrical force but not inertia — so there is nothing inevitable about mass playing both.',
          technical:
            'Writing them separately, an object in a gravitational field has m_i·a = m_g·g, so a = (m_g/m_i)·g. Universal free fall requires m_g/m_i to be the same for every material. The Eötvös parameter η measures the fractional difference between two test materials.',
        },
        evidence: 'model',
        references: [referenceId('newton-1687-principia'), referenceId('einstein-1916-gr')],
      },
      {
        id: 'claim-equivalence-measured',
        kind: 'claim',
        statement: {
          essential:
            'They have been tested against each other extremely hard. The best measurement, made in orbit, shows two different materials falling identically to better than one part in a thousand million million.',
          detailed:
            'The MICROSCOPE satellite carried concentric test masses of titanium and a platinum–rhodium alloy in free fall around the Earth and looked for any relative drift. It found none, constraining the Eötvös parameter to |η| < 1.5 × 10⁻¹⁵. Lunar laser ranging tests the same principle for the Earth and Moon themselves falling towards the Sun, and also finds agreement.',
          technical:
            'MICROSCOPE’s published constraint is η(Ti, Pt) = (−1.5 ± 2.3 (stat) ± 1.5 (syst)) × 10⁻¹⁵. Lunar laser ranging constrains the Nordtvedt parameter, testing whether gravitational self-energy falls at the same rate as ordinary mass — a test Newtonian theory cannot even pose.',
        },
        evidence: 'established',
        references: [
          referenceId('touboul-2022-microscope'),
          referenceId('williams-2012-lunar-laser'),
        ],
      },
      {
        id: 'definition-equivalence',
        kind: 'definition',
        termId: glossaryTermId('equivalence-principle'),
      },
      {
        id: 'einstein-turn',
        kind: 'callout',
        tone: 'history',
        title: 'The coincidence Einstein refused to accept',
        text: {
          essential:
            'In Newton’s framework the equality of the two masses is a brute fact — true, useful, unexplained. Einstein treated it as a clue instead, and built general relativity on the idea that gravity is not a force at all but the shape of spacetime, in which everything simply follows the straightest available path. Then the equality is not a coincidence: there is only one kind of mass because there is only one path.',
        },
        references: [referenceId('einstein-1916-gr')],
      },
      {
        id: 'weight-anywhere',
        kind: 'prose',
        text: {
          essential:
            'To find your weight anywhere, multiply your mass by that world’s surface gravity. A 70 kg person weighs about 687 N on Earth, 113 N on the Moon, 261 N on Mars, and would weigh 19,000 N at the Sun’s surface — nearly two tonnes of apparent load.',
          detailed:
            'The same arithmetic explains a subtler case: a scale in a lift. Accelerating upwards at 2 m/s², the floor must supply m(g + 2) rather than m·g, and the scale reads high. In free fall it supplies nothing and the scale reads zero. Your mass has not flickered; what changed is the contact force the scale is actually measuring.',
        },
      },
      {
        id: 'viz-worlds',
        kind: 'visualization',
        visualizationId: visualizationId('surface-gravity-worlds'),
      },
      {
        id: 'cross-free-fall',
        kind: 'cross-link',
        topicId: topicId('free-fall'),
        rationale: 'What happens when weight is the only force acting.',
      },
    ],
    furtherReading: [
      referenceId('touboul-2022-microscope'),
      referenceId('will-2014-confrontation'),
    ],
  },

  {
    id: topicId('free-fall'),
    slug: 'free-fall',
    sectionId: GRAVITY,
    order: 4,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Free fall',
    subtitle: 'Ignore the air, and everything falls at exactly the same rate.',
    summary: {
      essential:
        'A hammer and a feather dropped together land together — if there is no air. Heavy things do not fall faster. The air is what makes it look as though they do.',
      detailed:
        'This is the result that most contradicts direct experience, and it has the cleanest explanation: a heavier object is pulled harder, but it is also correspondingly harder to accelerate, and the two effects cancel exactly.',
    },
    glossaryTerms: [glossaryTermId('free-fall'), glossaryTermId('equivalence-principle')],
    related: [topicId('mass-and-weight'), topicId('orbits'), topicId('second-law')],
    blocks: [
      {
        id: 'setup',
        kind: 'prose',
        text: {
          essential:
            'Drop a coin and a sheet of paper. The coin wins, obviously. Now crumple the paper into a tight ball and try again — they land together. Nothing about the paper’s mass changed. Only its interaction with the air did.',
          detailed:
            'Aristotle’s claim that heavier bodies fall proportionally faster survived for nearly two thousand years partly because it is what the unaided eye reports. Galileo’s achievement was to see that the air was the variable and to design experiments — rolling balls down inclined planes, where fall is slowed enough to time by water clock — that removed it as far as possible.',
        },
      },
      {
        id: 'claim-cancellation',
        kind: 'claim',
        statement: {
          essential:
            'A heavier object is pulled harder — and is exactly that much harder to get moving. The two effects cancel, and every object accelerates at the same rate.',
          detailed:
            'Put the two equations together. Gravity supplies F = G M m / r². Newton’s second law says that force produces a = F / m. Substituting, a = G M / r² — and the falling object’s own mass m has cancelled out completely. Whatever you drop, the acceleration depends only on the mass of the thing you are dropping it towards and how far away you are.',
          technical:
            'The cancellation is exact only because gravitational mass (in the first equation) and inertial mass (in the second) are the same quantity. Written without that assumption, a = (m_g/m_i)·GM/r², and universal free fall is the statement that the ratio is material-independent — the empirical content of the equivalence principle.',
        },
        evidence: 'model',
        references: [
          referenceId('galileo-1638-two-new-sciences'),
          referenceId('newton-1687-principia'),
        ],
      },
      {
        id: 'claim-apollo',
        kind: 'claim',
        statement: {
          essential:
            'This has been demonstrated on the Moon, on camera. Commander David Scott dropped a geological hammer and a falcon feather together during Apollo 15, in vacuum. They hit the surface together.',
          detailed:
            'The Moon has no atmosphere worth the name, so the demonstration needs no apparatus at all — just letting go. The two objects differ by a factor of roughly a hundred in mass and enormously in shape and drag area, and in the absence of air neither difference matters. The film is the most direct public demonstration of the principle ever made.',
        },
        evidence: 'established',
        references: [referenceId('nasa-apollo15-feather-drop')],
      },
      {
        id: 'viz-free-fall',
        kind: 'visualization',
        visualizationId: visualizationId('free-fall-lab'),
      },
      {
        id: 'air-resistance',
        kind: 'prose',
        text: {
          essential:
            'Real falls happen in air, and air pushes back harder the faster you go. Eventually the push upwards equals the weight pulling down, the net force reaches zero, and the object stops speeding up. That steady speed is called terminal velocity.',
          detailed:
            'Terminal velocity depends on mass, cross-sectional area and shape, which is why a feather and a hammer differ so much: the feather has an enormous area for its mass and reaches its terminal speed almost immediately, while the hammer would need to fall for many seconds to approach its own much higher one. A skydiver reaches roughly 55 m/s spread-eagled and around 90 m/s head-down — same person, same mass, different area.',
          technical:
            'For quadratic drag, F_drag = ½ρC_dAv², and terminal velocity is v_t = √(2mg / ρC_dA). It scales as the square root of mass over area, so the ratio m/A is the parameter that actually decides how "heavy" something falls, not the mass alone.',
        },
      },
      {
        id: 'timing-maths',
        kind: 'prose',
        depths: ['detailed', 'technical'],
        text: {
          essential:
            'With no air, the arithmetic of a fall is simple: speed after t seconds is v = g·t, and the distance fallen is s = ½·g·t².',
          detailed:
            'With no air, the arithmetic of a fall is simple. Speed after t seconds is v = g·t, and distance fallen is s = ½·g·t². Dropping from 20 metres: t = √(2s/g) = √(40/9.81) ≈ 2.0 s, arriving at about 20 m/s. Double the height and the time only goes up by √2, because the object spends the extra distance moving fast.',
          technical:
            'These follow from integrating constant acceleration, and they assume g does not change over the fall. Over 20 m, g changes by about 6 parts per million — utterly negligible. Over the 400 km climb to low Earth orbit it changes by 12%, and the constant-g equations must be abandoned for the full inverse-square treatment.',
        },
      },
      {
        id: 'weightless',
        kind: 'callout',
        tone: 'misconception',
        title: '“Weightless” means falling, not gravity-free',
        text: {
          essential:
            'An astronaut floating in the space station is in free fall — falling exactly as fast as a dropped hammer would be at that altitude, and moving sideways fast enough to keep missing the Earth. You can feel the same thing on Earth for about a second at the top of a jump, or for twenty seconds in an aircraft flying a parabolic arc.',
        },
        references: [referenceId('nasa-planetary-factsheet')],
      },
      {
        id: 'cross-orbits',
        kind: 'cross-link',
        topicId: topicId('orbits'),
        rationale: 'An orbit is free fall that never lands. Here is why.',
      },
    ],
    furtherReading: [
      referenceId('galileo-1638-two-new-sciences'),
      referenceId('nasa-apollo15-feather-drop'),
    ],
  },

  {
    id: topicId('surface-gravity'),
    slug: 'surface-gravity',
    sectionId: GRAVITY,
    order: 5,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Surface gravity, here and elsewhere',
    subtitle: 'Why g is 9.81 on Earth, 1.62 on the Moon, and 274 at the surface of the Sun.',
    summary: {
      essential:
        'Near the ground, everything falls with an acceleration of about 9.81 metres per second squared. That number is not fundamental — it is a consequence of the Earth’s mass and size, and every world has its own.',
      detailed:
        'Surface gravity follows from g = GM/r². Two properties set it: how much mass a body has, and how close its surface is to the centre of that mass. Because r is squared, a small dense body can pull harder at its surface than a large diffuse one many times its mass.',
    },
    glossaryTerms: [glossaryTermId('free-fall')],
    related: [topicId('mass-and-weight'), topicId('escape-velocity'), topicId('universal-law')],
    blocks: [
      {
        id: 'derive',
        kind: 'prose',
        text: {
          essential:
            'Take the gravity equation and divide by the falling object’s mass. What is left is g = G·M / r², where M is the planet’s mass and r is its radius. Put in the Earth’s numbers and 9.8 comes out.',
          detailed:
            'Doing it explicitly: G = 6.674 × 10⁻¹¹, M⊕ = 5.972 × 10²⁴ kg, r = 6.371 × 10⁶ m. Then g = (6.674 × 10⁻¹¹ × 5.972 × 10²⁴) / (6.371 × 10⁶)² = 3.986 × 10¹⁴ / 4.059 × 10¹³ = 9.82 m/s². The small discrepancy with the everyday 9.81 is real and instructive — see the note below on why g is not a single number.',
        },
      },
      {
        id: 'claim-varies',
        kind: 'claim',
        statement: {
          essential:
            'g is not the same everywhere on Earth. It ranges from about 9.76 to 9.83 m/s², being weakest at the equator and on mountains, strongest at the poles.',
          detailed:
            'Three things cause the variation. The Earth is not a sphere: its equatorial radius exceeds its polar radius by 21 km, putting equatorial ground further from the centre. The Earth rotates, so part of the gravitational pull at the equator goes into supplying centripetal acceleration rather than pressing you onto the scale. And local rock density varies, which is precisely what gravity surveys exploit to map geology from the air.',
          technical:
            'The conventional value g₀ = 9.80665 m/s² is adopted by definition, not measured; it was fixed by the CGPM in 1901 as a standard for converting between kilograms-force and newtons. Modelled surface values come from the international gravity formula and geoid models, not from a single constant.',
        },
        evidence: 'established',
        references: [
          referenceId('cgpm-1901-standard-gravity'),
          referenceId('nasa-planetary-factsheet'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'g-standard',
            label: 'Standard gravity, g₀ (defined)',
            value: 9.80665,
            unit: 'm/s²',
            context:
              'A conventional value adopted by the 3rd CGPM in 1901. It is exact by definition and is not the measured value at any particular place.',
            references: [referenceId('cgpm-1901-standard-gravity')],
          },
          {
            id: 'g-moon',
            label: 'Surface gravity of the Moon',
            value: 1.62,
            unit: 'm/s²',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About one sixth of Earth’s. The Moon has 1.2% of Earth’s mass but 27% of its radius, and the radius being squared is what stops the ratio being 1/81.',
            references: [referenceId('nasa-planetary-factsheet')],
          },
          {
            id: 'g-mars',
            label: 'Surface gravity of Mars',
            value: 3.71,
            unit: 'm/s²',
            uncertainty: { kind: 'order-of-magnitude' },
            context: 'About 38% of Earth’s, from 10.7% of Earth’s mass at 53% of its radius.',
            references: [referenceId('nasa-planetary-factsheet')],
          },
          {
            id: 'g-sun',
            label: 'Surface gravity of the Sun',
            value: 274,
            unit: 'm/s²',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'At the photosphere. Twenty-eight times Earth’s, despite the Sun having 333,000 times the mass — because its radius is 109 times larger, and radius is squared.',
            references: [referenceId('nasa-planetary-factsheet')],
          },
        ],
      },
      {
        id: 'mass-vs-radius',
        kind: 'callout',
        tone: 'note',
        title: 'Mass alone does not tell you how heavy you would feel',
        text: {
          essential:
            'Saturn has 95 times the Earth’s mass, but its surface gravity at the cloud tops is only about 1.07 times Earth’s — because it is enormous and diffuse, so the "surface" is very far from the centre. Meanwhile Mercury and Mars have almost identical surface gravity despite Mars being twice as massive, because Mars is also correspondingly bigger.',
          detailed:
            'Compressed into a rule: g scales as M/r², so density and size matter as much as total mass. Push the idea to its limit and you get a neutron star — roughly the Sun’s mass inside a 12 km radius — where surface gravity reaches around 10¹² m/s², a hundred billion times Earth’s, and Newtonian gravity is no longer adequate to describe it.',
        },
        references: [referenceId('nasa-planetary-factsheet')],
      },
      {
        id: 'constant-g',
        kind: 'prose',
        depths: ['detailed', 'technical'],
        text: {
          essential:
            'Treating g as a fixed 9.81 is a deliberate simplification of the inverse-square law, and an excellent one for anything happening near the ground.',
          detailed:
            'School problems treat g as a constant, and for anything happening near the ground that is an excellent approximation: over a 100 m fall, g changes by three parts in a hundred thousand. The approximation is a deliberate simplification of the inverse-square law, valid whenever the height involved is tiny compared with the planet’s radius.',
          technical:
            'Expanding g(r) = GM/(R + h)² ≈ g₀(1 − 2h/R) for h ≪ R. The fractional error in assuming constant g is about 2h/R, which is 3 × 10⁻⁵ at 100 m and 6% at 200 km. Any trajectory reaching a substantial fraction of a planetary radius must use the full inverse-square form.',
        },
      },
      {
        id: 'cross-escape',
        kind: 'cross-link',
        topicId: topicId('escape-velocity'),
        rationale:
          'How mass and radius combine again — differently — to set how hard it is to leave.',
      },
    ],
    furtherReading: [referenceId('nasa-planetary-factsheet')],
  },
];
