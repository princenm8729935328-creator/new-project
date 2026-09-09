/**
 * Quantum Physics — what time is, and whether it exists.
 *
 * The reader asked these two questions directly, and they are the kind that
 * attract confident bad answers from both directions: "time is an illusion"
 * from one side, "time is obviously just what clocks measure" from the other.
 * Neither is defensible.
 *
 * The structure of both topics is the same discipline used throughout this
 * platform: separate what is measured, from what a theory says, from what is
 * an interpretation. For time that separation is unusually productive, because
 * the measurements are extraordinarily precise, the theories disagree with each
 * other about time's status, and the interpretive question is genuinely open.
 *
 * Two things are forbidden here by name: claiming time does not exist, and
 * claiming time is definitely an illusion. Both go beyond the evidence.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const QUANTUM = sectionId('quantum');
const REVIEWED = '2026-09-09';

export const QUANTUM_TIME_TOPICS: readonly Topic[] = [
  {
    id: topicId('what-is-time'),
    slug: 'what-is-time',
    sectionId: QUANTUM,
    order: 28,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What is time?',
    subtitle: 'Five different answers from five parts of physics, and where they stop agreeing.',
    summary: {
      essential:
        'Time means different things in different parts of physics. In Newton it is a universal parameter ticking the same for everyone. In relativity it is a direction in spacetime, and different paths through it age differently. In quantum mechanics it is an external parameter, not a measurable quantity like position. In quantum gravity it becomes genuinely problematic. All four statements are correct in their domains.',
      detailed:
        'The most useful thing to notice first is that "what is time?" is not one question. Asking what a clock measures has a precise answer, confirmed to fifteen decimal places. Asking why time has a direction has a good but partial answer involving entropy. Asking whether time is fundamental or emergent has no settled answer. Collapsing these into one question is what makes the topic feel hopeless; separating them makes most of it tractable.',
      technical:
        'Newtonian time is an absolute parameter. In special relativity, proper time along a worldline is τ = ∫√(1 − v²/c²)dt, invariant while coordinate time is not. In general relativity there is no preferred time slicing at all. In non-relativistic quantum mechanics time is a c-number parameter in the Schrödinger equation, not an operator — Pauli’s theorem forbids a self-adjoint time operator conjugate to a Hamiltonian bounded below. In canonical quantum gravity the Hamiltonian constraint gives ĤΨ = 0, with no time evolution at all.',
    },
    glossaryTerms: [glossaryTermId('proper-time'), glossaryTermId('spacetime')],
    related: [topicId('does-time-exist'), topicId('spacetime'), topicId('quantum-gravity')],
    blocks: [
      {
        id: 'everyday',
        kind: 'prose',
        text: {
          essential:
            'Start with the everyday sense, because it is what has to be explained rather than dismissed. Time seems to flow. The past is fixed and the future is open. Everything happens "now", and now keeps moving. This is the most direct experience anyone has, and it is worth saying at the outset that physics does not describe it well — not because it is wrong, but because none of the fundamental equations contain a "now" or a flow.',
          detailed:
            'That absence is genuinely striking. Newton’s equations, Maxwell’s, Einstein’s field equations and the Schrödinger equation all treat time as a coordinate or a parameter. None picks out a present moment. None distinguishes past from future at the level of the basic laws. Whatever is responsible for the felt passage of time is not written into the fundamental dynamics, and finding where it does come from is a real project rather than a philosophical evasion.',
        },
      },
      {
        id: 'classical-time',
        kind: 'prose',
        text: {
          essential:
            'In Newtonian physics, time is a universal parameter. There is one clock for the whole Universe, ticking at the same rate everywhere, unaffected by anything. Newton called it "absolute, true and mathematical time", flowing "without reference to anything external". This is the picture almost everyone carries, and it is an excellent approximation for everything slow and light.',
          detailed:
            'It is worth appreciating how strong an assumption this is once you look at it directly. It says two events separated by a billion light years can be meaningfully described as happening "at the same moment", and that this fact is observer-independent. Nothing in experience compels that; it just seemed obvious. Newton himself was uneasy about it, and Leibniz argued against it on philosophical grounds. It took two hundred years and a problem about light to show that it is false.',
        },
      },
      {
        id: 'relativity-time',
        kind: 'claim',
        statement: {
          essential:
            'In relativity, time is a direction in spacetime rather than a universal parameter, and a clock measures the length of its own path through spacetime. Two clocks that separate and meet again can record different elapsed times — and this is measured routinely.',
          detailed:
            'The quantity that matters is proper time: what a clock carried along a particular route actually reads. It is not a matter of clocks appearing to run differently; the readings genuinely differ when compared side by side afterwards. Hafele and Keating flew caesium clocks around the world in 1971 and found differences of hundreds of nanoseconds, matching prediction. GPS satellites gain about 38 microseconds a day relative to the ground and the correction is designed in. And in 2022 an optical clock resolved gravitational time dilation across a sample about a millimetre tall.',
          technical:
            'For a clock at rest in a weak gravitational field, dτ/dt ≈ 1 − v²/2c² + Φ/c². The Hafele–Keating eastward flight predicted −40 ± 23 ns and measured −59 ± 10 ns; westward predicted +275 ± 21 ns and measured +273 ± 7 ns. Bothwell et al. (2022) measured the redshift across 1 mm of a strontium lattice clock, at the level of 10⁻¹⁹ fractional frequency.',
        },
        evidence: 'established',
        references: [
          referenceId('hafele-keating-1972'),
          referenceId('bothwell-2022-redshift'),
          referenceId('ashby-2003-gps'),
        ],
      },
      {
        id: 'viz-proper-time',
        kind: 'visualization',
        visualizationId: visualizationId('proper-time-paths'),
      },
      {
        id: 'quantum-time',
        kind: 'claim',
        statement: {
          essential:
            'In ordinary quantum mechanics, time is treated differently from every other quantity. Position, momentum, energy and spin are all observables with operators. Time is not — it is a parameter that labels the evolution, more like a dial setting than a measurable property.',
          detailed:
            'This asymmetry is easy to miss and important. The Schrödinger equation says how the state changes with t, but there is no "time operator" whose measurement yields a value with a probability distribution. You cannot ask "what time is this system?" the way you can ask "where is it?". Pauli showed that a self-adjoint time operator conjugate to a Hamiltonian with energies bounded below cannot exist — and Hamiltonians must be bounded below for stable matter. So this is a structural feature, not an oversight.',
          technical:
            'The energy–time relation ΔEΔt ≥ ħ/2 is therefore not analogous to ΔxΔp ≥ ħ/2. It is derived differently, with Δt interpreted as a characteristic timescale over which an observable changes appreciably (the Mandelstam–Tamm formulation), rather than as the spread of a measured time. Relativistic quantum field theory makes the treatment more symmetric — position joins time as a label rather than an operator — but time remains a coordinate, not an observable.',
        },
        evidence: 'established',
        references: [referenceId('sakurai-2020-modern-qm'), referenceId('peskin-schroeder-1995')],
      },
      {
        id: 'arrow',
        kind: 'claim',
        statement: {
          essential:
            'Almost all fundamental laws work equally well run backwards. Yet eggs break and never unbreak. The resolution is statistical: there are vastly more disordered arrangements than ordered ones, so a system started in a low-entropy state overwhelmingly moves toward higher entropy.',
          detailed:
            'Work through the shuffled-cards version, because it is exactly right. There is one ordered arrangement of a deck and about 10⁶⁷ disordered ones. Shuffle from order and you get disorder — not because a law forbids the reverse but because the reverse is astronomically improbable. Entropy increase is the same argument with 10²³ particles instead of 52 cards, and the improbability is correspondingly more extreme. Nothing in the microscopic laws prefers a direction; the asymmetry comes from counting.',
          technical:
            'This account has a well-known dependency: the statistical argument works in both temporal directions from any given state, so deriving that entropy was *lower* in the past requires an additional assumption — the past hypothesis, that the early Universe was in an extremely low-entropy state. That is an observational input from cosmology, not a theorem. Note also that the fundamental laws are not perfectly time-symmetric: CP violation in weak decays, combined with the CPT theorem, implies T violation, which has been measured directly. But it is far too small to account for the thermodynamic arrow.',
        },
        evidence: 'established',
        references: [referenceId('planck-2018-vi'), referenceId('pdg-2024')],
      },
      {
        id: 'arrow-caution',
        kind: 'callout',
        tone: 'caution',
        title: 'What the entropy account does and does not settle',
        text: {
          essential:
            'Established: entropy increases in isolated systems, this follows from counting states, and it explains why macroscopic processes are irreversible while microscopic laws are not. Not established: why the early Universe had such low entropy in the first place. That is an initial condition we observe, and explaining it is an open cosmological problem rather than a settled result.',
          detailed:
            'A further caution about a common leap. Some accounts move from "the thermodynamic arrow explains irreversibility" to "the thermodynamic arrow explains why we experience time as flowing". That is a much stronger claim involving memory, information processing and conscious experience, and it is a research area rather than an established chain of reasoning. The thermodynamic arrow is physics; the psychological arrow is not yet reduced to it.',
        },
        references: [referenceId('planck-2018-vi')],
      },
      {
        id: 'problem-of-time',
        kind: 'open-question',
        question: 'What happens to time when gravity is quantised?',
        whyItMatters: {
          essential:
            'Quantum mechanics needs time as an external parameter to evolve states. General relativity has no external time — the geometry, including its time structure, is what you are solving for. Combining them removes the thing quantum mechanics was relying on, and the resulting equation for the quantum state of the Universe contains no time at all.',
          detailed:
            'The Wheeler–DeWitt equation, the canonical attempt at quantum cosmology, takes the form ĤΨ = 0: the state does not evolve. This is not a mistake but a consequence of general covariance, and it is called the problem of time. Proposed responses include treating some physical variable — the size of the Universe, or a matter field — as an internal clock relative to which everything else changes; adopting a "timeless" formulation in which correlations between subsystems replace evolution; or concluding that time is emergent rather than fundamental. Different quantum-gravity programmes take different routes, and none is confirmed.',
        },
        whatWouldSettleIt: {
          essential:
            'A tested theory of quantum gravity, which does not exist. Nearer-term evidence could come from cosmological observations sensitive to Planck-era physics, or from experiments probing whether gravity itself behaves quantum-mechanically. Until then the status of time at that level is genuinely unknown, and confident claims in either direction are not supported.',
        },
        references: [
          referenceId('dewitt-1967-quantum-gravity'),
          referenceId('isham-1993-problem-of-time'),
          referenceId('kiefer-2012-quantum-gravity'),
        ],
      },
      {
        id: 'link-does-time-exist',
        kind: 'cross-link',
        topicId: topicId('does-time-exist'),
        rationale:
          'The direct question, and what each part of physics is entitled to say about it.',
      },
    ],
    furtherReading: [
      referenceId('isham-1993-problem-of-time'),
      referenceId('kiefer-2012-quantum-gravity'),
      referenceId('taylor-wheeler-1992-spacetime'),
    ],
  },

  {
    id: topicId('does-time-exist'),
    slug: 'does-time-really-exist',
    sectionId: QUANTUM,
    order: 29,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Does time really exist?',
    subtitle:
      'Clocks physically change. Whether that makes time fundamental is a separate question.',
    summary: {
      essential:
        'Yes, in the sense that matters most: clocks physically change, at rates that can be compared, and the comparisons come out exactly as relativity predicts. That is not an illusion. What is genuinely unsettled is something narrower — whether time is a fundamental ingredient of reality or something that emerges from a deeper description without it.',
      detailed:
        'Five different things get called "time", and separating them dissolves most of the apparent paradox. Clock readings are physical and measured. Proper time along a worldline is a well-defined geometric quantity. Coordinate time is a labelling convention with no unique choice. The psychological sense of flow is a fact about brains that physics does not currently derive. And whether time is fundamental or emergent is an open question in quantum gravity. Conflating these produces confident nonsense in both directions.',
      technical:
        'Proper time is the invariant τ = ∫√(−g_{μν}dx^μdx^ν)/c along a worldline; coordinate time is gauge. Relativity of simultaneity means "now" across space is not defined without choosing a foliation, and no foliation is preferred. This is the precise sense in which there is no universal present — which is a strong statement, and much weaker than "time does not exist".',
    },
    glossaryTerms: [glossaryTermId('proper-time'), glossaryTermId('simultaneity')],
    related: [
      topicId('what-is-time'),
      topicId('relativity-of-simultaneity'),
      topicId('quantum-gravity'),
    ],
    blocks: [
      {
        id: 'the-direct-answer',
        kind: 'prose',
        text: {
          essential:
            'Take the question at face value and give the direct answer first. Clocks physically change. Two clocks taken on different journeys and brought back together show different readings, and the difference is measured, repeatable and predicted to many decimal places. Whatever else is uncertain, that is a fact about the world, not a perception or a convention.',
          detailed:
            'The precision here is worth dwelling on because it is what makes the answer solid rather than rhetorical. Modern optical clocks are stable to about one part in 10¹⁸. That is enough to detect the difference in the rate of time between two points a centimetre apart in Earth’s gravity, and in 2022 the effect was resolved across a millimetre. If time were merely a human bookkeeping device, atoms would not have to agree about it to eighteen decimal places while sitting a millimetre apart.',
        },
      },
      {
        id: 'five-senses',
        kind: 'prose',
        text: {
          essential:
            'The confusion comes from one word covering five things. What a clock reads. The path-length through spacetime a particular object experiences — proper time. The coordinate label physicists attach to events, which is a choice. The felt flow of the present. And the question of whether time is fundamental or built from something more basic. Only the last one is genuinely unsettled.',
          detailed:
            'Consider how differently each fares. Clock readings: measured, unambiguous. Proper time: a well-defined invariant, and the thing a clock actually measures. Coordinate time: explicitly not unique, and no experiment can single out the right one — this is the precise content of "there is no universal now". Psychological flow: real as an experience, not derived from physics, an open problem in a different field. And fundamentality: open. Statements like "physics has shown time is an illusion" typically take the third item, which is a genuine and interesting result about coordinates, and inflate it into a claim about the first.',
        },
      },
      {
        id: 'viz-clocks',
        kind: 'visualization',
        visualizationId: visualizationId('clock-comparison'),
      },
      {
        id: 'claim-no-universal-clock',
        kind: 'claim',
        statement: {
          essential:
            'The Earth does not carry a master clock for the Universe, and neither does anywhere else. Different paths through spacetime accumulate different amounts of proper time, and no path is the correct one.',
          detailed:
            'This is where relativity genuinely overturns the everyday picture, and it does so with measurements rather than argument. Clocks at different altitudes on Earth run at measurably different rates — the effect is used to survey height differences geodetically, a technique called chronometric levelling. A clock on the ISS and a clock in Colorado do not agree, and neither is malfunctioning. Extending this to the cosmos: the "age of the Universe" of 13.8 billion years is proper time measured along the worldline of an observer comoving with the average expansion, which is a natural choice and still a choice.',
          technical:
            'Fractional rate difference near Earth’s surface is gh/c² ≈ 1.09 × 10⁻¹⁶ per metre of height. Optical clocks reaching 10⁻¹⁸ therefore resolve centimetre-scale height differences. Cosmological proper time is defined relative to the comoving frame in which the CMB dipole vanishes; the Solar System moves at about 370 km/s relative to that frame, so our elapsed proper time since the Big Bang differs slightly from the quoted figure.',
        },
        evidence: 'established',
        references: [
          referenceId('bothwell-2022-redshift'),
          referenceId('ludlow-2015-optical-clocks'),
          referenceId('chou-2010-optical-clocks'),
        ],
      },
      {
        id: 'not-an-illusion',
        kind: 'callout',
        tone: 'misconception',
        title: '“Physics has proved time is an illusion”',
        text: {
          essential:
            'It has not. What has been established is narrower and more interesting: there is no universal present moment shared across space, and the rate at which a clock ticks depends on its path. Both are strong results and neither says time is unreal. A clock that has physically aged less than another is not an illusion; it is a measurement.',
          detailed:
            'The claim usually traces back to one of three things, each stretched past what it supports. The block-universe reading of relativity treats all events as equally real, which is a coherent interpretive position and not a proven fact — the presentist alternative is also compatible with the physics. The Wheeler–DeWitt equation contains no time parameter, which is a real feature of one unconfirmed approach to quantum gravity, not an established result about nature. And popular writing sometimes conflates "not fundamental" with "not real", when temperature is not fundamental either and nobody doubts that things are hot.',
        },
        references: [
          referenceId('dewitt-1967-quantum-gravity'),
          referenceId('isham-1993-problem-of-time'),
        ],
      },
      {
        id: 'emergent',
        kind: 'open-question',
        question: 'Is time fundamental, or does it emerge from something deeper?',
        whyItMatters: {
          essential:
            'In every theory we have tested, time appears at the ground floor. In several candidate theories of quantum gravity it does not appear there at all, and something time-like emerges only when you look at large scales — the way temperature emerges from molecular motion without being a property any single molecule has.',
          detailed:
            'The emergent view is motivated rather than confirmed. Its main support is the problem of time in canonical quantum gravity, where the fundamental equation has no time parameter, and analogies with thermodynamics and with the AdS/CFT correspondence, in which a bulk spacetime with its time direction is encoded in a boundary theory. Against it: no such theory is tested, and general relativity — which is tested, extremely well — treats time as part of the fundamental geometry. Both positions are held by serious physicists and neither has an experiment behind it.',
        },
        whatWouldSettleIt: {
          essential:
            'A confirmed theory of quantum gravity would settle it, and none exists. Nearer-term, an experiment showing that gravity can place a system in a superposition of spacetime geometries would establish that the geometry — and so its time structure — is genuinely quantum, which would sharpen the question considerably. Such experiments are being designed and have not been performed.',
        },
        references: [
          referenceId('isham-1993-problem-of-time'),
          referenceId('kiefer-2012-quantum-gravity'),
          referenceId('dewitt-1967-quantum-gravity'),
        ],
      },
      {
        id: 'interpretations-label',
        kind: 'callout',
        tone: 'note',
        title: 'Which parts of this are interpretation',
        text: {
          essential:
            'Physics: clocks tick at path-dependent rates; there is no preferred simultaneity; entropy increases; the fundamental laws contain no flow. Interpretation: whether all moments are equally real (eternalism) or only the present is (presentism); whether the passage of time is a feature of the world or of the observer. The first list is settled by experiment. The second is not settled by anything currently available, and both positions have competent defenders.',
          detailed:
            'It is entirely legitimate to hold a view on the second list. What is not legitimate is presenting it as a scientific result. This platform’s practice is to label such positions as interpretations, and the honest position on the philosophy of time is that physics constrains it substantially — presentism has to work hard to accommodate relativity — without determining it.',
        },
        references: [referenceId('taylor-wheeler-1992-spacetime')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'clock-height-sensitivity',
            label: 'Fractional clock-rate change per metre of height on Earth',
            value: 1.09e-16,
            unit: 'per metre',
            context:
              'Optical clocks stable to 10⁻¹⁸ can therefore resolve height differences of about a centimetre — and the effect has been measured across a millimetre-tall sample of atoms.',
            references: [
              referenceId('bothwell-2022-redshift'),
              referenceId('ludlow-2015-optical-clocks'),
            ],
          },
          {
            id: 'gps-offset',
            label: 'Net relativistic clock offset on a GPS satellite',
            value: 38,
            unit: 'µs/day',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Designed into the satellite clocks before launch. Without the correction, positions would drift by roughly 10 km per day — a daily, practical demonstration that time is path-dependent.',
            references: [referenceId('ashby-2003-gps')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('bothwell-2022-redshift'),
      referenceId('isham-1993-problem-of-time'),
      referenceId('taylor-wheeler-1992-spacetime'),
    ],
  },
];
