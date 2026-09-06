/**
 * Gravity — the limits of the Newtonian model.
 *
 * The most important page in this section, and the one most easily written
 * badly. Two failure modes were avoided deliberately:
 *
 *   - "Newton was wrong, Einstein was right." He was not wrong; he was
 *     approximate, and the approximation is good enough to land on Mars.
 *   - Explaining general relativity here. That is Phase 4. This page names the
 *     places Newtonian gravity measurably fails and stops, so a reader arrives
 *     at relativity already knowing what it is for.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const GRAVITY = sectionId('gravity');
const REVIEWED = '2026-09-06';

export const GRAVITY_LIMIT_TOPICS: readonly Topic[] = [
  {
    id: topicId('newtonian-limits'),
    slug: 'limits-of-newtonian-gravity',
    sectionId: GRAVITY,
    order: 10,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The limits of Newtonian gravity',
    subtitle: 'Where a three-hundred-year-old model stops being accurate — and where it does not.',
    summary: {
      essential:
        'Newton’s law of gravitation is not wrong. It is an approximation that is extremely accurate over an enormous range of situations, and measurably inaccurate in a few specific ones.',
      detailed:
        'Knowing where a model fails is part of knowing the model. Newtonian gravity breaks down when fields are strong, when speeds approach that of light, when the required precision is very high, and whenever light itself is involved. Each of those has been measured.',
      technical:
        'The controlling small parameter is GM/rc², the ratio of gravitational potential to c². It is about 10⁻⁹ at the Earth’s surface, 2 × 10⁻⁶ at the Sun’s, 2.5 × 10⁻⁸ at Mercury’s orbit, and of order 1 at a black hole horizon. Newtonian gravity is the leading term of an expansion in that parameter.',
    },
    glossaryTerms: [glossaryTermId('spacetime'), glossaryTermId('equivalence-principle')],
    related: [topicId('universal-law'), topicId('planetary-systems'), topicId('orbits')],
    blocks: [
      {
        id: 'where-it-works',
        kind: 'prose',
        text: {
          essential:
            'Start with what the model gets right, because it is nearly everything. Newtonian gravity is what engineers actually use to fly spacecraft, predict eclipses, design bridges, model tides and calculate the orbits of the planets. When Voyager 2 reached Neptune after twelve years it arrived within about 100 km of the aim point, on Newtonian mechanics with modest corrections.',
          detailed:
            'The domain of validity is wide: weak gravitational fields, speeds far below light speed, and precision requirements that are not extreme. Almost every situation a human being will ever encounter satisfies all three. Relativity is not needed to explain why you fall off a ladder, and using it would give the same answer to more decimal places than the ladder deserves.',
        },
      },
      {
        id: 'not-wrong',
        kind: 'callout',
        tone: 'caution',
        title: 'Newton’s laws are not simply “wrong”',
        text: {
          essential:
            'A superseded theory is not a discarded one. Newtonian gravity is an extremely successful approximation within its domain, and inside that domain it is still the right tool — simpler, faster, and accurate to far more decimal places than most problems need. What changed in 1915 is that we learned where its edges are, and what lies past them.',
          detailed:
            'This pattern recurs throughout physics. Relativity does not delete Newtonian mechanics; it contains it as the limit where speeds are small and fields weak, and it says exactly how big the corrections are. A theory that could not reproduce Newton in that limit would be immediately refuted by three centuries of successful predictions.',
        },
        references: [referenceId('will-2014-confrontation')],
      },
      {
        id: 'claim-mercury',
        kind: 'claim',
        statement: {
          essential:
            'The first crack was Mercury. Its orbit slowly turns in a way Newtonian gravity cannot account for — 43 arcseconds per century of extra precession, tiny but far larger than the measurement error.',
          detailed:
            'Mercury’s perihelion, the point of closest approach to the Sun, drifts around by about 574 arcseconds per century relative to the fixed stars. The gravitational tugs of the other planets, computed in Newtonian theory, explain about 531 of that. The residual 43 arcseconds per century resisted every attempt to explain it — including a search for an unseen inner planet — until general relativity predicted almost exactly that amount from first principles, with nothing adjustable.',
          technical:
            'Modern ranging to the MESSENGER spacecraft gives an excess precession of 42.9799 ± 0.0009 arcseconds per century, against the general-relativistic prediction of 42.98. The effect scales as GM/(a c²(1 − e²)); Mercury shows it most clearly because it is closest to the Sun and its orbit is the most eccentric of the inner planets.',
        },
        evidence: 'established',
        references: [
          referenceId('park-2017-mercury-precession'),
          referenceId('will-2014-confrontation'),
        ],
      },
      {
        id: 'viz-precession',
        kind: 'visualization',
        visualizationId: visualizationId('mercury-precession'),
      },
      {
        id: 'claim-light',
        kind: 'claim',
        statement: {
          essential:
            'Light bends when it passes a massive body — and it bends twice as much as any Newtonian calculation can give.',
          detailed:
            'Treating light as particles with mass and applying Newtonian gravity gives a deflection of 0.87 arcseconds for a ray grazing the Sun. General relativity predicts 1.75, because space itself is curved as well as time. The 1919 eclipse expeditions measured a value consistent with the larger figure, and modern radio interferometry has confirmed the relativistic prediction to better than 0.01%.',
          technical:
            'The extra factor of two comes from the spatial curvature term, absent in the Newtonian treatment which only accounts for the time-time component of the metric. In the parameterised post-Newtonian framework the deflection is proportional to (1 + γ)/2, with γ = 1 in general relativity; γ is now measured to be 1 within about 2 × 10⁻⁵.',
        },
        evidence: 'established',
        references: [referenceId('dyson-1920-eclipse'), referenceId('will-2014-confrontation')],
      },
      {
        id: 'claim-time',
        kind: 'claim',
        statement: {
          essential:
            'Clocks run slower deeper in a gravitational field. Newtonian gravity has no way to express this at all — time is universal in Newton’s framework, so it cannot even state the question.',
          detailed:
            'A clock at sea level runs slower than one on a mountain. Pound and Rebka first measured this in 1959–60 over a 22.5 m tower at Harvard; the effect has since been measured over a height difference of just 33 centimetres using optical clocks. It is not an instrumental artefact and not a matter of how clocks are built: it is the rate of time itself that differs.',
          technical:
            'The fractional rate difference is Δf/f ≈ gh/c², which is 1.1 × 10⁻¹⁶ per metre near the Earth’s surface — hence the 33 cm demonstration requiring clocks stable to parts in 10¹⁷.',
        },
        evidence: 'established',
        references: [referenceId('pound-rebka-1960'), referenceId('chou-2010-optical-clocks')],
      },
      {
        id: 'gps',
        kind: 'callout',
        tone: 'note',
        title: 'The correction in your pocket',
        text: {
          essential:
            'GPS satellites carry atomic clocks 20,200 km up, where gravity is weaker and time runs faster by about 45 microseconds a day; their orbital speed slows them by about 7 microseconds a day. The net 38 microseconds is designed into the system. Left uncorrected, position errors would accumulate at roughly 10 kilometres per day, and satellite navigation would be useless within hours.',
        },
        references: [referenceId('ashby-2003-gps')],
      },
      {
        id: 'claim-strong-fields',
        kind: 'claim',
        statement: {
          essential:
            'Near very compact objects the Newtonian description fails completely. Around a neutron star or a black hole the corrections are not small, and there is no version of Newtonian gravity that gets the answer approximately right.',
          detailed:
            'The relevant measure is GM/rc² — how deep the gravitational well is compared with the energy content of mass itself. At the Earth’s surface it is about a billionth. At a black hole’s event horizon it is of order one, meaning the "correction" is the same size as the thing being corrected. The 2015 detection of gravitational waves from merging black holes, and the horizon-scale image of M87*, are observations of a regime where Newton has nothing to say: Newtonian gravity has no waves and no horizons.',
          technical:
            'Post-Newtonian expansions in v/c break down as the compactness approaches unity, requiring numerical relativity for the merger waveform. The waveform templates that matched GW150914 could not have been generated in any Newtonian framework.',
        },
        evidence: 'established',
        references: [referenceId('ligo-2016-gw150914'), referenceId('eht-2019-m87')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'mercury-excess',
            label: 'Excess precession of Mercury’s perihelion',
            value: 42.9799,
            unit: 'arcsec per century',
            uncertainty: { plusMinus: 0.0009 },
            context:
              'Measured from ranging to the MESSENGER spacecraft, after subtracting all Newtonian planetary perturbations. General relativity predicts 42.98 with no free parameters.',
            references: [referenceId('park-2017-mercury-precession')],
          },
          {
            id: 'light-deflection',
            label: 'Deflection of starlight grazing the Sun',
            value: 1.75,
            unit: 'arcsec',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'The general-relativistic value. A Newtonian corpuscular calculation gives 0.87 — exactly half. The 1919 eclipse measurements favoured the relativistic figure.',
            references: [referenceId('dyson-1920-eclipse'), referenceId('will-2014-confrontation')],
          },
          {
            id: 'gps-drift',
            label: 'Net relativistic clock offset on a GPS satellite',
            value: 38,
            unit: 'µs/day',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Gravitational time dilation gains about 45 µs/day, velocity time dilation loses about 7 µs/day. The offset is built into the satellite clock frequency before launch.',
            references: [referenceId('ashby-2003-gps')],
          },
        ],
      },
      {
        id: 'summary-table',
        kind: 'prose',
        text: {
          essential:
            'Four conditions mark the edge of the Newtonian domain: very strong gravitational fields, speeds approaching that of light, precision requirements at the level of parts per billion or finer, and anything involving light itself. Away from all four, Newton is not merely adequate — it is the correct tool.',
          detailed:
            'It is worth noticing what these have in common. Each involves a quantity that Newtonian gravity assumes is irrelevant: a finite speed of gravitational influence, an equivalence between mass and energy, a maximum speed, and a geometry of space that can differ from Euclid’s. Newton’s framework is not internally broken; it is built on assumptions that turn out to be approximations.',
          technical:
            'The parameterised post-Newtonian formalism makes this precise: general relativity and its alternatives differ in ten parameters whose Newtonian values are all zero, and Solar System tests bound every one of them close to the general-relativistic values.',
        },
      },
      {
        id: 'open-quantum-gravity',
        kind: 'open-question',
        question:
          'What replaces both descriptions where gravity is strong and quantum effects matter?',
        whyItMatters: {
          essential:
            'General relativity fixes everything on this page, but it is a classical theory. At the centre of a black hole and at the very beginning of the Universe it predicts infinities — a sign that it, too, is an approximation whose limits have been reached.',
          detailed:
            'Newtonian gravity failed at strong fields and high precision. General relativity fails where quantum mechanics also becomes essential, and no experimentally tested theory covers that regime. The pattern of the last three centuries suggests the answer is not that either theory is wrong, but that a wider one contains both.',
        },
        whatWouldSettleIt: {
          essential:
            'A measurement in a regime where quantum and gravitational effects are both strong — which no current or planned experiment can reach directly. Nearer-term evidence could come from black-hole ringdown signals, tests of whether gravity can put a mass in superposition, or observations of the very early Universe.',
        },
        references: [referenceId('will-2014-confrontation'), referenceId('ligo-2016-gw150914')],
      },
      {
        id: 'next-phase',
        kind: 'callout',
        tone: 'note',
        title: 'What comes next',
        text: {
          essential:
            'Every failure listed above has the same resolution: gravity is not a force reaching across space, but the geometry of spacetime itself, with mass and energy determining the shape and everything else following the straightest available path. That is general relativity, and it is the subject of the next section of this platform — which has not been written yet. This page deliberately stops at naming the problems rather than sketching the solution badly.',
        },
        references: [referenceId('einstein-1916-gr')],
      },
    ],
    furtherReading: [
      referenceId('will-2014-confrontation'),
      referenceId('park-2017-mercury-precession'),
      referenceId('ashby-2003-gps'),
    ],
  },
];
