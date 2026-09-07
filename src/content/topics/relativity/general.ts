/**
 * Einstein & Relativity — general relativity.
 *
 * Topics 8–13: the equivalence principle, curvature, geodesics, and the three
 * observable consequences that made the theory believable — clocks running at
 * different rates, light bending, and Mercury.
 *
 * The rubber-sheet picture is handled carefully throughout. It is the standard
 * illustration and it is actively misleading: it explains gravity by drawing a
 * ball rolling into a dip under a second, unexplained downward gravity. This
 * section keeps the picture, because readers arrive with it, and says exactly
 * what is wrong with it — then gives the honest version, which is that mostly
 * it is *time* that is curved, and that free fall is the straightest available
 * path rather than a response to a force.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const RELATIVITY = sectionId('relativity');
const REVIEWED = '2026-09-07';

export const GENERAL_RELATIVITY_TOPICS: readonly Topic[] = [
  {
    id: topicId('equivalence-principle'),
    slug: 'equivalence-principle',
    sectionId: RELATIVITY,
    order: 8,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The equivalence principle',
    subtitle: 'Standing on a planet and accelerating through space feel exactly the same.',
    summary: {
      essential:
        'Inside a sealed room you cannot tell whether you are standing on a planet or being accelerated through empty space. Einstein took that seriously and built a theory of gravity out of it.',
      detailed:
        'The starting point is the fact from Phase 3 that everything falls at the same rate. If everything falls identically, then falling is not something gravity does to objects — it is something the objects’ surroundings do to the description.',
      technical:
        'The weak equivalence principle asserts the universality of free fall; the Einstein equivalence principle adds local Lorentz invariance and local position invariance, so that in a small enough freely falling region all of special relativity holds and gravity disappears.',
    },
    glossaryTerms: [glossaryTermId('equivalence-principle'), glossaryTermId('free-fall')],
    related: [
      topicId('mass-and-weight'),
      topicId('curved-spacetime'),
      topicId('gravitational-time-dilation'),
    ],
    blocks: [
      {
        id: 'the-idea',
        kind: 'prose',
        text: {
          essential:
            'Einstein called it the happiest thought of his life: a person falling freely does not feel their own weight. Step off a diving board and, for the moment you are in the air, gravity has effectively vanished — you feel nothing pressing on you at all.',
          detailed:
            'Turn it around and the same statement is stranger. Seal someone in a windowless room. If a released ball drops to the floor at 9.8 m/s², they might be standing on Earth — or the room might be a rocket accelerating at 9.8 m/s² far from any mass. No experiment done inside the room distinguishes the two cases. Einstein’s move was to declare that this is not a coincidence to be explained but a principle to be built on.',
        },
      },
      {
        id: 'viz-lift',
        kind: 'visualization',
        visualizationId: visualizationId('equivalence-lift'),
      },
      {
        id: 'claim-why',
        kind: 'claim',
        statement: {
          essential:
            'The principle works only because everything falls at the same rate. If a wooden ball and a lead ball fell differently, the sealed-room experiment would give the game away instantly.',
          detailed:
            'This is why the equality of gravitational and inertial mass — an unexplained coincidence in Newton’s framework — becomes the foundation of the new one. It is also why the equality is tested so obsessively: the whole theory rests on it. The best measurement, made by dropping two different alloys around the Earth for two years, finds no difference to better than one part in 10¹⁵.',
          technical:
            'The Eötvös parameter is bounded by |η| < 1.5 × 10⁻¹⁵ from the MICROSCOPE satellite. Lunar laser ranging extends the test to bodies whose own gravitational binding energy is significant, constraining the Nordtvedt parameter and therefore testing whether gravitational energy itself gravitates as ordinary mass does.',
        },
        evidence: 'established',
        references: [
          referenceId('touboul-2022-microscope'),
          referenceId('williams-2012-lunar-laser'),
        ],
      },
      {
        id: 'claim-light-bends',
        kind: 'claim',
        statement: {
          essential:
            'The principle immediately predicts something Newton’s gravity does not: light must bend in a gravitational field, because it visibly bends inside an accelerating room.',
          detailed:
            'Fire a laser horizontally across an accelerating rocket. While the light crosses, the rocket moves up — so the beam lands lower on the far wall than where it left. Nothing exotic has happened; the light went straight and the room moved. But if the accelerating room and the gravitating room are genuinely indistinguishable, the beam must bend in the gravitational room too. Light, which has no mass to be pulled on in the Newtonian sense, has to fall.',
          technical:
            'This argument gives only half the observed deflection. The equivalence principle captures the time-curvature contribution; the remaining half comes from the curvature of space, which requires the full field equations. Getting 1.75 arcseconds rather than 0.87 was therefore a genuine test of general relativity and not merely of the equivalence principle.',
        },
        evidence: 'model',
        references: [referenceId('einstein-1916-gr'), referenceId('hartle-2003-gravity')],
      },
      {
        id: 'local-only',
        kind: 'callout',
        tone: 'caution',
        title: 'Only true locally — and the exception is the point',
        text: {
          essential:
            'The equivalence holds in a small enough region. Make the room big enough and the difference shows: in a real gravitational field two balls released side by side drift slightly *towards* each other, because both fall towards the planet’s centre, and balls at different heights drift apart. In an accelerating rocket they stay put relative to one another.',
          detailed:
            'That residual difference is the tidal effect from Phase 3, and it is not a nuisance — it is the observable content of curvature. Uniform gravity can always be transformed away by falling; the part that cannot be transformed away is precisely what general relativity describes as the curvature of spacetime.',
        },
        references: [
          referenceId('misner-thorne-wheeler-1973'),
          referenceId('agnew-2015-earth-tides'),
        ],
      },
      {
        id: 'cross-tides',
        kind: 'cross-link',
        topicId: topicId('tides'),
        rationale: 'The differential effect that survives free fall, described Newtonianly.',
      },
      {
        id: 'cross-curved',
        kind: 'cross-link',
        topicId: topicId('curved-spacetime'),
        rationale: 'What that residual effect turns out to be.',
      },
    ],
    furtherReading: [referenceId('hartle-2003-gravity'), referenceId('einstein-1916-gr')],
  },

  {
    id: topicId('curved-spacetime'),
    slug: 'curved-spacetime',
    sectionId: RELATIVITY,
    order: 9,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Gravity as curved spacetime',
    subtitle: 'Mass tells spacetime how to curve; curved spacetime tells matter how to move.',
    summary: {
      essential:
        'General relativity replaces the force of gravity with geometry. Mass and energy change the shape of spacetime, and everything else simply follows the shape.',
      detailed:
        'This is a genuine change of explanation, not a rewording. In Newton’s account a force reaches across empty space and pulls. In Einstein’s there is no force and nothing reaches: objects in free fall are not being pulled at all, and it is the geometry they travel through that has changed.',
      technical:
        'The Einstein field equations, G_μν + Λg_μν = 8πG/c⁴ T_μν, relate the curvature of spacetime to the energy and momentum it contains. They reduce to Newton’s law in the weak-field, slow-motion limit.',
    },
    glossaryTerms: [glossaryTermId('spacetime'), glossaryTermId('geodesic')],
    related: [topicId('equivalence-principle'), topicId('geodesics'), topicId('spacetime')],
    blocks: [
      {
        id: 'the-move',
        kind: 'prose',
        text: {
          essential:
            'The chain of reasoning is short. Everything falls the same way. So falling cannot depend on what the falling thing is made of. So falling must be a property of the region, not of the object. General relativity makes that literal: the region is spacetime, and what varies from place to place is its shape.',
          detailed:
            'Wheeler’s summary is the standard one and it is hard to improve on: spacetime tells matter how to move, and matter tells spacetime how to curve. The second half is the field equations; the first half is the statement that free objects follow the straightest available paths. Everything general relativity predicts comes from putting those two halves together.',
        },
      },
      {
        id: 'viz-curvature',
        kind: 'visualization',
        visualizationId: visualizationId('spacetime-curvature'),
      },
      {
        id: 'rubber-sheet',
        kind: 'callout',
        tone: 'misconception',
        title: 'The trouble with the rubber sheet',
        text: {
          essential:
            'The bowling-ball-on-a-trampoline picture is everywhere, and it explains gravity by assuming gravity: the marble rolls into the dip because something is pulling it *down*, out of the picture. Remove that outside gravity and the marble sits still. As an explanation it is circular.',
          detailed:
            'It is also the wrong dimension. The sheet shows curved *space*, but for the Earth, the Sun and everything else you will ever encounter, almost all of the gravity you feel comes from the curvature of *time* — the fact that clocks tick at different rates at different heights. That is not something a dented sheet can show, which is why this platform keeps the diagram but labels it as an analogy rather than a picture.',
        },
        references: [referenceId('misner-thorne-wheeler-1973')],
      },
      {
        id: 'claim-time-curvature',
        kind: 'claim',
        statement: {
          essential:
            'For everyday gravity, the curvature that matters is in time, not space. A ball thrown across a room follows the path it does almost entirely because time runs very slightly faster higher up.',
          detailed:
            'The effect is astonishingly small — about one part in 10¹⁶ per metre of height near the Earth’s surface — but the ball’s path through spacetime is very nearly vertical, since it moves one second through time for every few metres through space. A tiny tilt applied over an enormous stretch of the time direction produces exactly the parabola Newton predicted. The spatial curvature contributes a correction so small that it is unmeasurable in a thrown ball, and only shows up in light, which travels equal distances in space and time.',
          technical:
            'In the weak-field metric, g₀₀ = −(1 + 2Φ/c²) reproduces Newtonian gravity on its own; the spatial part g_ij = (1 − 2Φ/c²)δ_ij contributes at the same order only for relativistic speeds. That is precisely why light is deflected twice as much as a Newtonian corpuscle calculation gives.',
        },
        evidence: 'model',
        references: [referenceId('misner-thorne-wheeler-1973'), referenceId('hartle-2003-gravity')],
      },
      {
        id: 'field-equations',
        kind: 'prose',
        depths: ['detailed', 'technical'],
        text: {
          essential:
            'The field equations say, in one line, how much curvature a given amount of energy produces.',
          detailed:
            'The equations relate a measure of curvature on one side to the energy, momentum, pressure and stress present on the other. Two features are worth noting even without the mathematics. First, it is energy and momentum that curve spacetime, not mass alone — light and pressure gravitate too. Second, the equations are non-linear: gravity itself carries energy, so gravity gravitates. That is why they are so hard to solve, and why exact solutions are famous enough to be named after people.',
          technical:
            'G_μν + Λg_μν = (8πG/c⁴) T_μν. The factor c⁴/8πG is about 5 × 10⁴² newtons, which is why enormous energies produce minute curvature. The non-linearity means solutions do not superpose: two black holes are not the sum of two one-black-hole solutions, which is why merger waveforms require numerical relativity.',
        },
      },
      {
        id: 'contains-newton',
        kind: 'callout',
        tone: 'note',
        title: 'Newton is still in there',
        text: {
          essential:
            'When gravity is weak and speeds are small, the field equations reduce exactly to F = Gm₁m₂/r². That is a requirement, not a happy accident: any replacement theory that failed to reproduce three centuries of successful predictions would be refuted immediately.',
        },
        references: [referenceId('will-2014-confrontation')],
      },
      {
        id: 'cross-geodesics',
        kind: 'cross-link',
        topicId: topicId('geodesics'),
        rationale: 'What "following the shape" actually means.',
      },
    ],
    furtherReading: [referenceId('einstein-1916-gr'), referenceId('misner-thorne-wheeler-1973')],
  },

  {
    id: topicId('geodesics'),
    slug: 'geodesics',
    sectionId: RELATIVITY,
    order: 10,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Geodesics: falling in a straight line',
    subtitle:
      'A falling object is not being pushed. It is going as straight as the geometry allows.',
    summary: {
      essential:
        'A geodesic is the straightest path a curved geometry permits. In general relativity, anything in free fall follows one — which means a falling apple and an orbiting satellite are both travelling in a straight line.',
      detailed:
        'The Earth does not curve around the Sun because a force bends its path. Its path is already as straight as it can be; the geometry it is travelling through is what is curved.',
      technical:
        'Free particles follow timelike geodesics, extremising proper time; light follows null geodesics. The geodesic equation contains no force term — the Christoffel symbols encode the geometry, and the "force" of gravity is a coordinate artefact that vanishes in a freely falling frame.',
    },
    glossaryTerms: [glossaryTermId('geodesic'), glossaryTermId('proper-time')],
    related: [
      topicId('curved-spacetime'),
      topicId('orbits'),
      topicId('gravitational-time-dilation'),
    ],
    blocks: [
      {
        id: 'sphere',
        kind: 'prose',
        text: {
          essential:
            'Start with a surface everybody knows. Two people stand on the equator a hundred kilometres apart and both walk due north, never turning. They are walking parallel and going perfectly straight — and they meet at the pole. Nothing pulled them together. The surface is curved.',
          detailed:
            'On a sphere the straightest available paths are great circles, and great circles that start out parallel converge. That is the whole idea of a geodesic and of curvature, available without any mathematics: "straight" means not turning, and on a curved surface not turning is not enough to keep two paths apart.',
        },
      },
      {
        id: 'viz-geodesic',
        kind: 'visualization',
        visualizationId: visualizationId('geodesic-sphere'),
      },
      {
        id: 'claim-free-fall',
        kind: 'claim',
        statement: {
          essential:
            'In general relativity, a freely falling object has no force on it at all. It is the one moving naturally. It is the person standing on the ground who is being accelerated — by the ground, pushing up.',
          detailed:
            'This inverts the Newtonian picture completely, and it matches what you can actually feel. An accelerometer in free fall reads zero; an accelerometer sitting on a table reads 9.8 m/s² upwards. The instrument is not confused. What it measures is departure from a geodesic, and the falling object is the one that is not departing.',
          technical:
            'Proper acceleration is the covariant derivative of four-velocity along the worldline, and it vanishes exactly for geodesic motion. Weight is the normal force required to hold an object off its geodesic, which is why it is measurable and why free fall is not.',
        },
        evidence: 'model',
        references: [referenceId('einstein-1916-gr'), referenceId('hartle-2003-gravity')],
      },
      {
        id: 'orbits',
        kind: 'prose',
        text: {
          essential:
            'This is the honest version of "an orbit is continuous free fall". The satellite is not falling around the Earth in the sense of being tugged; it is following the straightest path available, and that path happens to close on itself.',
          detailed:
            'In four dimensions the picture makes more sense than it does in three. The satellite’s worldline is nearly straight — it advances one light-second through time for every 300,000 km through space, and its orbit is a very gentle helix in spacetime rather than the tight loop drawn on paper. Curving that helix by the tiny amount the Earth’s mass provides is enough to make its spatial projection a closed ellipse.',
        },
      },
      {
        id: 'longest-time',
        kind: 'callout',
        tone: 'note',
        title: 'The straightest path is the one with the most time',
        text: {
          essential:
            'There is a striking way to say what a geodesic is. Of all the paths an object could take between two events, the freely falling one is the path on which the object’s own clock records the most elapsed time. Falling is what maximising your own experienced time looks like.',
          detailed:
            'This is why the stay-at-home twin ages more, and why a thrown ball goes just high enough: climbing higher buys the faster clock rate of altitude, but costs speed-related slowing, and the actual trajectory is the compromise that maximises the total. Newton’s parabola is that optimum, rederived.',
        },
        references: [referenceId('taylor-wheeler-1992-spacetime')],
      },
      {
        id: 'definition',
        kind: 'definition',
        termId: glossaryTermId('geodesic'),
      },
      {
        id: 'cross-orbits',
        kind: 'cross-link',
        topicId: topicId('orbits'),
        rationale: 'The Newtonian account of the same motion, and why it works so well.',
      },
    ],
    furtherReading: [
      referenceId('hartle-2003-gravity'),
      referenceId('taylor-wheeler-1992-spacetime'),
    ],
  },

  {
    id: topicId('gravitational-time-dilation'),
    slug: 'gravitational-time-dilation',
    sectionId: RELATIVITY,
    order: 11,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Gravitational time dilation',
    subtitle: 'Clocks run slower lower down. Your feet age more slowly than your head.',
    summary: {
      essential:
        'Time itself runs at different rates at different depths in a gravitational field. Deeper means slower. The effect is measured routinely, over height differences as small as a third of a metre.',
      detailed:
        'This is the curvature of time made concrete, and it is the piece of general relativity with the most everyday consequences — satellite navigation would fail within minutes without it.',
      technical:
        'For a static observer at radius r outside a spherical mass, dτ/dt = √(1 − 2GM/rc²). In the weak field this is approximately 1 + Φ/c², giving a fractional rate difference gh/c² between two heights.',
    },
    glossaryTerms: [glossaryTermId('proper-time')],
    related: [
      topicId('curved-spacetime'),
      topicId('time-dilation'),
      topicId('black-hole-foundations'),
    ],
    blocks: [
      {
        id: 'statement',
        kind: 'prose',
        text: {
          essential:
            'Put one clock on the floor and one on a shelf. The one on the shelf runs faster. Not because of the mechanism — atomic clocks, pendulum clocks and biological ageing all shift by the same amount. Time is running at different rates in the two places.',
          detailed:
            'The size of it near the Earth is gh/c² per unit time: about 1.1 × 10⁻¹⁶ for every metre of height. Over a human lifetime, someone living their whole life one storey higher ages by roughly a few hundred nanoseconds more. It is real, it is directional — higher is faster — and it has been measured over a height difference of 33 centimetres in a single laboratory.',
        },
      },
      {
        id: 'viz-gtd',
        kind: 'visualization',
        visualizationId: visualizationId('gravitational-time-dilation'),
      },
      {
        id: 'claim-measured',
        kind: 'claim',
        statement: {
          essential:
            'It has been measured many times, at increasing precision: up a 22-metre tower in 1960, with clocks 33 centimetres apart in 2010, and with satellites in eccentric orbits in 2018.',
          detailed:
            'Pound and Rebka used the Mössbauer effect to detect a frequency shift of 2.5 parts in 10¹⁵ across the Jefferson tower at Harvard. Fifty years later, optical clocks stable to parts in 10¹⁷ resolved the difference across a height change smaller than a ruler. In 2018 two Galileo navigation satellites, accidentally launched into elliptical orbits, swept up and down through the Earth’s field twice a day and confirmed the redshift to about 2 parts in 100,000.',
          technical:
            'The Galileo result constrains the violation parameter to (0.19 ± 2.48) × 10⁻⁵. The GRAVITY collaboration has since detected the same effect in the spectrum of the star S2 as it swung past the Milky Way’s central black hole.',
        },
        evidence: 'established',
        references: [
          referenceId('pound-rebka-1960'),
          referenceId('chou-2010-optical-clocks'),
          referenceId('delva-2018-galileo-redshift'),
        ],
      },
      {
        id: 'gps',
        kind: 'claim',
        statement: {
          essential:
            'Satellite navigation depends on getting this right. GPS clocks gain about 45 microseconds a day from weaker gravity and lose about 7 from their speed, a net 38 microseconds that is designed into the hardware before launch.',
          detailed:
            'Thirty-eight microseconds sounds negligible until it is multiplied by the speed of light: an uncorrected system would accumulate positional errors of roughly 10 kilometres per day. The satellite oscillators are therefore deliberately offset in frequency before launch so that, once in orbit, they tick at the rate the ground expects. Relativity is not a correction bolted onto GPS; it is a design parameter.',
        },
        evidence: 'established',
        references: [referenceId('ashby-2003-gps')],
      },
      {
        id: 'why-it-is-gravity',
        kind: 'prose',
        text: {
          essential:
            'This is not a side effect of gravity — for everyday purposes it very nearly *is* gravity. Objects move so as to spend as much time as possible in the region where clocks run fastest, and "falling down" is what that preference looks like from outside.',
          detailed:
            'Take the earlier statement that a free object follows the worldline of greatest proper time. If clocks run faster higher up, a thrown ball gains by going high; but going fast to get there costs proper time through ordinary time dilation. The trajectory that balances the two is the parabola. Run the numbers and Newton’s g falls out of nothing but the rate at which clocks differ with height.',
        },
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'gps-net',
            label: 'Net clock offset built into a GPS satellite',
            value: 38,
            unit: 'µs/day',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'A 45 µs/day gain from weaker gravity minus a 7 µs/day loss from orbital speed. Uncorrected, position errors would grow by about 10 km per day.',
            references: [referenceId('ashby-2003-gps')],
          },
          {
            id: 'earth-surface-rate',
            label: 'Clock slowing at the Earth’s surface, relative to far away',
            value: 6.97e-10,
            unit: '(fractional)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About 22 milliseconds per year. Computed from GM⊕/Rc² with measured values, for a non-rotating idealisation of the Earth.',
            references: [
              referenceId('schwarzschild-1916'),
              referenceId('nasa-planetary-factsheet'),
            ],
          },
        ],
      },
      {
        id: 'cross-black-hole',
        kind: 'cross-link',
        topicId: topicId('black-hole-foundations'),
        rationale: 'What happens to this effect when it stops being small.',
      },
    ],
    furtherReading: [referenceId('ashby-2003-gps'), referenceId('hartle-2003-gravity')],
  },

  {
    id: topicId('gravitational-lensing'),
    slug: 'gravitational-lensing',
    sectionId: RELATIVITY,
    order: 12,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Gravitational lensing',
    subtitle: 'Mass bends light — twice as much as any Newtonian calculation allows.',
    summary: {
      essential:
        'Light passing a massive object is deflected. The amount is small — 1.75 arcseconds at the edge of the Sun — but it is twice what you get by treating light as falling particles, and measuring it made Einstein famous overnight.',
      detailed:
        'Lensing has since grown from a test of the theory into a tool: it is now one of the main ways astronomers weigh galaxy clusters and map dark matter, precisely because it responds to all mass, luminous or not.',
      technical:
        'The deflection angle for a ray with impact parameter b is α = 4GM/bc², twice the Newtonian corpuscular value. The factor of two comes from the spatial curvature term, absent in any pre-relativistic treatment.',
    },
    glossaryTerms: [glossaryTermId('spacetime'), glossaryTermId('dark-matter')],
    related: [topicId('curved-spacetime'), topicId('dark-matter'), topicId('testing-relativity')],
    blocks: [
      {
        id: 'the-prediction',
        kind: 'prose',
        text: {
          essential:
            'General relativity predicts that a ray of starlight grazing the Sun is bent by 1.75 arcseconds — about the angle a pound coin makes at two kilometres. The prediction is sharp, and it differs by exactly a factor of two from the alternative.',
          detailed:
            'Treating light as a stream of tiny particles and applying Newtonian gravity gives 0.87 arcseconds; a calculation of this kind was published as early as 1804. Einstein himself got the smaller value in 1911, before the full theory was finished, and only reached 1.75 once spatial curvature was included in 1915. That is why the eclipse measurement was a real test: it could distinguish the two.',
        },
      },
      {
        id: 'viz-lensing',
        kind: 'visualization',
        visualizationId: visualizationId('gravitational-lensing'),
      },
      {
        id: 'claim-eclipse',
        kind: 'claim',
        statement: {
          essential:
            'Two expeditions photographed the star field around the Sun during the total eclipse of 29 May 1919, compared it with the same stars at night, and found the shift.',
          detailed:
            'The stars had to be measured during totality because the Sun is otherwise far too bright. The result favoured the relativistic value over both the Newtonian one and no deflection at all, and it made international news. The 1919 data were noisier than the confidence of the announcement suggested, and the plates have been re-analysed and argued over since — but the prediction has been confirmed many times over by later eclipses and, far more precisely, by radio interferometry and spacecraft tracking.',
          technical:
            'Radio measurements now constrain the PPN parameter γ, which scales the deflection as (1 + γ)/2, to 1 within about 2 × 10⁻⁵ using the Cassini spacecraft’s Shapiro delay.',
        },
        evidence: 'established',
        references: [referenceId('dyson-1920-eclipse'), referenceId('bertotti-2003-cassini')],
      },
      {
        id: 'claim-lensing-astronomy',
        kind: 'claim',
        statement: {
          essential:
            'Whole galaxies act as lenses. A galaxy sitting between us and a more distant quasar can produce two, four, or a complete ring of images of the same object.',
          detailed:
            'The first confirmed case was the "twin quasar" Q0957+561 in 1979: two quasars with identical spectra and redshifts, which turned out to be one object seen twice. Since then lensing has become a standard tool. Because the deflection depends only on the mass along the line of sight, it measures total mass regardless of whether that mass emits light — which is why lensing is one of the strongest independent lines of evidence for dark matter.',
        },
        evidence: 'established',
        references: [
          referenceId('walsh-1979-twin-quasar'),
          referenceId('bertone-hooper-2018-history'),
        ],
      },
      {
        id: 'not-a-lens',
        kind: 'callout',
        tone: 'caution',
        title: 'A poor lens, as lenses go',
        text: {
          essential:
            'The name is a little generous. A glass lens brings parallel rays to a single focus; a mass bends rays closer to it more strongly, so there is no focal point — only a line of them stretching away. That is why lensed images are smeared into arcs and rings rather than sharpened, and why "gravitational lens" describes the effect rather than the optics.',
        },
        references: [referenceId('hartle-2003-gravity')],
      },
      {
        id: 'quantity',
        kind: 'quantity',
        quantities: [
          {
            id: 'solar-deflection',
            label: 'Deflection of starlight grazing the Sun',
            value: 1.7512,
            unit: 'arcsec',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'The general-relativistic prediction, α = 4GM/bc², at the solar limb. A Newtonian corpuscular calculation gives exactly half.',
            references: [referenceId('will-2014-confrontation'), referenceId('dyson-1920-eclipse')],
          },
        ],
      },
      {
        id: 'cross-dark-matter',
        kind: 'cross-link',
        topicId: topicId('dark-matter'),
        rationale: 'What lensing weighs, and why the answer does not match the light.',
      },
    ],
    furtherReading: [referenceId('dyson-1920-eclipse'), referenceId('will-2014-confrontation')],
  },

  {
    id: topicId('mercury-perihelion'),
    slug: 'mercury-perihelion',
    sectionId: RELATIVITY,
    order: 13,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Mercury’s perihelion',
    subtitle: 'The 43 arcseconds nobody could explain, and the theory that produced them for free.',
    summary: {
      essential:
        'Mercury’s orbit turns slightly faster than Newtonian gravity allows — by 43 arcseconds per century. General relativity predicts exactly that number, with nothing adjustable.',
      detailed:
        'This was the first thing Einstein checked, and unlike the eclipse it was not a prediction awaiting a test: the discrepancy had been known and unexplained for over fifty years. The theory did not fit it; it produced it.',
      technical:
        'The relativistic advance is Δφ = 6πGM/(c²a(1 − e²)) per orbit, which for Mercury gives 0.1035 arcseconds per orbit and 42.98 per century.',
    },
    related: [
      topicId('newtonian-limits'),
      topicId('curved-spacetime'),
      topicId('testing-relativity'),
    ],
    blocks: [
      {
        id: 'the-anomaly',
        kind: 'prose',
        text: {
          essential:
            'An isolated planet on a Newtonian orbit traces the same ellipse for ever. Add the pull of the other planets and the ellipse slowly rotates. For Mercury that rotation was measured, calculated — and the two numbers did not match, by about 43 arcseconds per century.',
          detailed:
            'Le Verrier identified the discrepancy in 1859. Forty-three arcseconds per century is about a hundredth of a degree in a human lifetime, and yet it was far larger than the observational error. He had already found Neptune by attributing a similar anomaly in Uranus’s orbit to an unseen planet, so the obvious move was to do it again: an inner planet, provisionally named Vulcan. It was searched for repeatedly and never found.',
        },
      },
      {
        id: 'viz-precession',
        kind: 'visualization',
        visualizationId: visualizationId('gr-orbit-precession'),
      },
      {
        id: 'claim-prediction',
        kind: 'claim',
        statement: {
          essential:
            'In November 1915, Einstein calculated the orbit from his new field equations and got 43 arcseconds per century. There was no parameter to adjust — the number simply came out.',
          detailed:
            'This is a very different kind of success from fitting data. The theory was built to satisfy the equivalence principle and general covariance, not to explain Mercury; the perihelion advance was a consequence that had to be computed after the fact. Einstein later described the moment of finding the number as leaving him unable to work for days.',
          technical:
            'The advance per orbit is 6πGM/(c²a(1 − e²)) radians. For Mercury, with a = 5.79 × 10¹⁰ m and e = 0.2056 about the Sun, this is 5.02 × 10⁻⁷ rad = 0.1035 arcseconds per orbit; times 415 orbits per century gives 42.98.',
        },
        evidence: 'established',
        references: [referenceId('einstein-1916-gr'), referenceId('park-2017-mercury-precession')],
      },
      {
        id: 'claim-modern',
        kind: 'claim',
        statement: {
          essential:
            'The measurement is now far sharper than it was in 1915: 42.9799 ± 0.0009 arcseconds per century, from radio tracking of a spacecraft in orbit around Mercury.',
          detailed:
            'The MESSENGER mission allowed Mercury’s position to be determined to metres over years, which turns a nineteenth-century puzzle into a precision test. The measured excess agrees with the general-relativistic 42.98 to within a part in ten thousand. The same analysis simultaneously bounds a change in the gravitational constant over time and constrains the Sun’s oblateness.',
        },
        evidence: 'established',
        references: [referenceId('park-2017-mercury-precession')],
      },
      {
        id: 'why-mercury',
        kind: 'prose',
        text: {
          essential:
            'Why Mercury and not the others? Because the effect grows as a planet gets closer to the Sun and as its orbit gets more elongated, and Mercury is the innermost planet with much the most eccentric orbit of the inner four.',
          detailed:
            'The advance scales as 1/(a(1 − e²)). Venus and Earth do precess relativistically too, by about 8.6 and 3.8 arcseconds per century respectively, and both have since been measured; but in 1915 only Mercury’s effect stood clear of the observational error. The same mechanism, enormously amplified, is what makes binary pulsars precess by degrees per year instead of arcseconds per century.',
        },
      },
      {
        id: 'not-a-fit',
        kind: 'callout',
        tone: 'note',
        title: 'Why this counted as evidence',
        text: {
          essential:
            'A theory with a free parameter can be made to match almost anything. General relativity had none to spare here: the geometry, the equivalence principle and the requirement of reducing to Newton in the weak field fixed the answer completely. Producing an already-measured number that no one had been able to explain, without adjusting anything, is about the strongest form of evidence a physical theory can offer.',
        },
        references: [referenceId('will-2014-confrontation')],
      },
      {
        id: 'cross-limits',
        kind: 'cross-link',
        topicId: topicId('newtonian-limits'),
        rationale: 'The same anomaly, seen from the Newtonian side.',
      },
    ],
    furtherReading: [
      referenceId('park-2017-mercury-precession'),
      referenceId('will-2014-confrontation'),
    ],
  },
];
