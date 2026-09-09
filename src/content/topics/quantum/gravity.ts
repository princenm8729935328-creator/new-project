/**
 * Quantum Physics — where quantum theory meets gravity, and string theory.
 *
 * The string theory topic is the one with the highest risk of overclaiming, so
 * it is structured around a single distinction stated four times in different
 * words: mathematical framework, theoretical motivation, prediction,
 * experimental evidence. String theory scores very well on the first two,
 * poorly on the third at accessible energies, and has nothing at all on the
 * fourth. Saying that clearly is not hostility to the programme — it is what
 * its own practitioners say, and burying it would be the dishonest choice.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const QUANTUM = sectionId('quantum');
const REVIEWED = '2026-09-09';

export const QUANTUM_GRAVITY_TOPICS: readonly Topic[] = [
  {
    id: topicId('quantum-gravity'),
    slug: 'quantum-theory-and-gravity',
    sectionId: QUANTUM,
    order: 26,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Quantum theory and gravity',
    subtitle: 'Two theories that work perfectly and cannot both be right as they stand.',
    summary: {
      essential:
        'Quantum field theory describes matter and three of the four interactions with extraordinary precision. General relativity describes gravity and spacetime with extraordinary precision. Applied to the same situation — a black hole interior, the first instant of the Universe — they give incompatible answers, and nobody has a tested theory that covers both.',
      detailed:
        'The problem is structural rather than a matter of unfinished arithmetic. In quantum field theory, fields live on a fixed spacetime background and time is an external parameter. In general relativity, spacetime is itself the dynamical object being solved for. Quantising a field on a stage is a well-understood exercise. Quantising the stage is not, because there is then nothing left to define "at the same time" or "at this point" against.',
      technical:
        'Treating the metric perturbatively as g = η + h and quantising gives a theory that is non-renormalisable: each order in perturbation theory requires new counterterms, so infinitely many parameters would have to be measured. As an effective field theory below the Planck scale it works and makes finite predictions — the leading quantum correction to the Newtonian potential is calculable. Its failure is at high energy, exactly where black-hole interiors and the early Universe live.',
    },
    glossaryTerms: [glossaryTermId('planck-scale'), glossaryTermId('quantum-field')],
    related: [topicId('string-theory'), topicId('what-is-time'), topicId('singularity')],
    blocks: [
      {
        id: 'where-they-clash',
        kind: 'prose',
        text: {
          essential:
            'Most of the time the two theories never meet. Quantum effects matter for small, light things; gravity matters for large, heavy things; something both very small and very heavy is rare. But two such situations exist and are not optional: the centre of a black hole, and the first instant of the Universe. In both, the two theories are needed at once, and in both, the combination fails.',
          detailed:
            'It is worth being precise about "fails". General relativity applied to those regimes does not give a wrong answer — it gives infinity, which is a theory reporting that it has left its domain. Quantum field theory applied to a dynamical spacetime does not give infinity so much as fail to be formulable: the standard machinery assumes a fixed background to define energies and time-ordering, and there is not one. Two different kinds of breakdown, both pointing at the same missing theory.',
        },
      },
      {
        id: 'viz-planck',
        kind: 'visualization',
        visualizationId: visualizationId('planck-scale'),
      },
      {
        id: 'claim-planck-scale',
        kind: 'claim',
        statement: {
          essential:
            'Combine G, c and ħ and you get a unique length, time and energy — the Planck scale. It is about 10⁻³⁵ metres and 10¹⁹ GeV, and it is where quantum effects on gravity must become unavoidable.',
          detailed:
            'The construction is almost embarrassingly simple: there is only one way to combine Newton’s constant, the speed of light and Planck’s constant into a length, and it gives 1.6 × 10⁻³⁵ m. That is not a prediction of any theory of quantum gravity; it is dimensional analysis, which is why every candidate theory agrees on roughly where the problem lives. The corresponding energy, 1.2 × 10¹⁹ GeV, is about a quadrillion times what the Large Hadron Collider reaches. A collider able to probe it directly would need to be roughly the size of a galaxy.',
          technical:
            'ℓ_P = √(ħG/c³) = 1.616 × 10⁻³⁵ m; t_P = 5.39 × 10⁻⁴⁴ s; E_P = 1.22 × 10¹⁹ GeV. The Planck mass, 2.18 × 10⁻⁸ kg, is macroscopic — about the mass of a flea’s egg — which reflects how weak gravity is relative to the other interactions rather than anything about small scales.',
        },
        evidence: 'established',
        references: [referenceId('codata-2018'), referenceId('kiefer-2012-quantum-gravity')],
      },
      {
        id: 'def-planck',
        kind: 'definition',
        termId: glossaryTermId('planck-scale'),
      },
      {
        id: 'curved-space-qft',
        kind: 'claim',
        statement: {
          essential:
            'There is a halfway house that works: quantum fields on a curved but fixed spacetime. It is not a theory of quantum gravity, but it is well understood, and it is where Hawking radiation comes from.',
          detailed:
            'The compromise is to let spacetime be curved by classical general relativity, then quantise the matter fields on that fixed geometry. This is legitimate wherever the spacetime curvature is far below Planckian, and it produces striking results. Hawking radiation is the famous one. The Unruh effect is the more revealing: an accelerating observer in flat empty space detects a thermal bath of particles, while an inertial observer in the same spacetime detects nothing. Particle number turns out not to be observer-independent, which is a genuine and unsettling conclusion from mathematics both theories agree on.',
          technical:
            'The Unruh temperature is T = ħa/2πck_B, giving about 4 × 10⁻²¹ K for a = 1 g — far too small to detect, which is why the effect remains unobserved despite being theoretically robust. The framework fails when backreaction matters, which is precisely the late stages of black-hole evaporation and the earliest moments of cosmology.',
        },
        evidence: 'model',
        references: [referenceId('birrell-davies-1982'), referenceId('hawking-1975-radiation')],
      },
      {
        id: 'open-quantum-gravity',
        kind: 'open-question',
        question: 'What is the correct theory of quantum gravity?',
        whyItMatters: {
          essential:
            'Without it, physics has no account of the first instant of the Universe, no description of what replaces a singularity, and no answer to what happens to information falling into a black hole. These are not gaps at the fringe; they are the places where the two most successful theories in science contradict each other.',
          detailed:
            'The main programmes each make different trade-offs. String theory replaces point particles with extended objects and incorporates a graviton naturally, at the cost of extra dimensions and an enormous space of possible vacua. Loop quantum gravity quantises geometry directly and predicts discrete area and volume spectra, but has struggled to recover smooth classical spacetime and to include matter naturally. Asymptotic safety proposes that gravity is renormalisable non-perturbatively, with evidence from truncated calculations. Causal set theory takes discreteness as fundamental. None is experimentally confirmed, and none is excluded.',
        },
        whatWouldSettleIt: {
          essential:
            'Direct tests at the Planck scale are inaccessible with any foreseeable technology. Realistic routes are indirect: signatures in the cosmic microwave background from the very early Universe, gravitational-wave observations of black-hole ringdown that might reveal deviations from the classical prediction, tests of whether gravity itself can produce entanglement between two masses — an experiment now being seriously designed — or the discovery of Lorentz-invariance violation in high-energy astrophysical photons, which has so far been searched for and not found.',
        },
        references: [
          referenceId('kiefer-2012-quantum-gravity'),
          referenceId('dewitt-1967-quantum-gravity'),
          referenceId('polchinski-1998-string-theory'),
        ],
      },
      {
        id: 'no-confirmed-theory',
        kind: 'callout',
        tone: 'caution',
        title: 'No candidate theory of quantum gravity has experimental support',
        text: {
          essential:
            'This needs saying plainly because popular accounts often blur it. String theory, loop quantum gravity, asymptotic safety and the rest are serious research programmes pursued by serious people, and some are mathematically deep. None has made a confirmed novel prediction. None has been ruled out either. The correct description of the current situation is that we do not know.',
        },
        references: [referenceId('kiefer-2012-quantum-gravity')],
      },
      {
        id: 'link-strings',
        kind: 'cross-link',
        topicId: topicId('string-theory'),
        rationale: 'The most developed of the candidates, and the one most often misreported.',
      },
    ],
    furtherReading: [
      referenceId('kiefer-2012-quantum-gravity'),
      referenceId('birrell-davies-1982'),
    ],
  },

  {
    id: topicId('string-theory'),
    slug: 'what-is-string-theory',
    sectionId: QUANTUM,
    order: 27,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What is string theory?',
    subtitle: 'A mathematical framework of real depth, and no experimental evidence whatsoever.',
    summary: {
      essential:
        'String theory replaces point particles with tiny one-dimensional objects. Different vibration patterns of the same string correspond to different particles — and one of those patterns has exactly the properties of a graviton, which is why the idea attracted so much attention. It is a major research programme. It is not a confirmed description of nature.',
      detailed:
        'Four things should be separated and never merged. The mathematical framework is well-developed and internally consistent, and it has produced results used elsewhere in physics. The theoretical motivation is strong: it makes gravity finite where point-particle approaches fail, and the graviton appears without being inserted. The predictions at accessible energies are essentially absent, because the characteristic scale is Planckian. The experimental evidence is nil — no supersymmetric partners, no extra dimensions, no string signature has been observed.',
      technical:
        'Consistency requires 26 spacetime dimensions for the bosonic string and 10 for superstrings, with the extra six compactified on a manifold whose shape determines the effective four-dimensional physics. The five consistent superstring theories are related by dualities and are believed to be limits of an eleven-dimensional M-theory. The number of consistent compactifications is enormous — estimates around 10⁵⁰⁰ are commonly quoted — which is the landscape problem.',
    },
    glossaryTerms: [glossaryTermId('planck-scale'), glossaryTermId('quantum-field')],
    related: [
      topicId('quantum-gravity'),
      topicId('standard-model'),
      topicId('quantum-view-of-reality'),
    ],
    blocks: [
      {
        id: 'the-basic-idea',
        kind: 'prose',
        text: {
          essential:
            'The basic idea is a single substitution. Instead of particles being points, they are tiny loops or segments of string. A string can vibrate in different patterns, like a violin string producing different notes, and each pattern behaves as a different particle. Mass and charge become properties of how the string is vibrating rather than labels attached to a point.',
          detailed:
            'Why would anyone want this? Because points cause trouble. In quantum field theory, interactions happen at a single point, and that produces infinities requiring careful handling — manageable for the Standard Model, fatal for gravity. If interactions are smeared over a small extended object, the worst divergences soften. That was the original technical motivation, and it is a genuine one rather than aesthetic preference. The striking bonus is that among the vibration patterns of a closed string there is automatically a massless spin-2 excitation — exactly the properties a graviton must have. Nobody put gravity in; it came out.',
          technical:
            'The characteristic string length is expected near the Planck scale, so at accessible energies strings are indistinguishable from points — which is why string theory reduces to ordinary quantum field theory in the tested regime, and why it is so hard to test. Scattering amplitudes in string theory are finite order by order, in contrast to the non-renormalisable perturbative expansion of quantised general relativity.',
        },
      },
      {
        id: 'viz-strings',
        kind: 'visualization',
        visualizationId: visualizationId('string-vibrations'),
      },
      {
        id: 'extra-dimensions',
        kind: 'claim',
        statement: {
          essential:
            'Mathematical consistency forces the theory to have more than four spacetime dimensions — ten for superstring theories. The extra dimensions are assumed to be curled up so small that they have not been noticed.',
          detailed:
            'This is not an optional decoration; the theory is inconsistent in four dimensions. The standard response is compactification: the extra six dimensions are wrapped into a tiny shape at every point of ordinary space, too small to detect. The consequence is important and cuts both ways. The shape of that compact space determines the particle content and forces of the resulting four-dimensional world — which is elegant, because it means geometry could explain the Standard Model. It is also the source of the problem, because there are astronomically many possible shapes and no principle selecting one.',
          technical:
            'Superstring theories require D = 10 from cancellation of the conformal anomaly; M-theory is eleven-dimensional. Compactification on Calabi–Yau threefolds preserving N = 1 supersymmetry is the standard construction. Direct searches for large extra dimensions at the LHC and in short-range gravity experiments have found nothing, constraining any dimension larger than roughly 30 micrometres.',
        },
        evidence: 'model',
        references: [referenceId('polchinski-1998-string-theory')],
      },
      {
        id: 'four-columns',
        kind: 'callout',
        tone: 'caution',
        title: 'Framework, motivation, prediction, evidence',
        text: {
          essential:
            'Keep four things apart. **Mathematical framework**: well-developed, internally consistent, and the source of techniques now used in nuclear and condensed-matter physics. **Theoretical motivation**: strong — it makes gravity finite and produces the graviton unforced. **Predictions**: essentially none at reachable energies, because the string scale is Planckian. **Experimental evidence**: none. No supersymmetric partner, no extra dimension, no string effect has ever been observed.',
          detailed:
            'The honest summary is that string theory is a serious mathematical research programme that has not become an experimentally confirmed theory of nature, and might not be able to become one with foreseeable technology. That is a description its own leading practitioners would broadly accept. Two commonly cited internal successes are worth noting because they are real: the microscopic counting of black-hole entropy for certain extremal black holes, which reproduces the Bekenstein–Hawking formula including its factor of one quarter; and the AdS/CFT correspondence, which is a precise, extensively checked duality — in a spacetime that is not ours.',
        },
        references: [
          referenceId('polchinski-1998-string-theory'),
          referenceId('bekenstein-1973-entropy'),
        ],
      },
      {
        id: 'landscape',
        kind: 'open-question',
        question: 'Does string theory predict anything about our Universe in particular?',
        whyItMatters: {
          essential:
            'A theory that can accommodate any observation predicts nothing. The number of consistent compactifications is estimated at something like 10⁵⁰⁰, each giving different particles, forces and constants. If every possible outcome is somewhere in the landscape, then finding our Universe among them is not a confirmation.',
          detailed:
            'Responses divide. Some argue the landscape is a feature: combined with eternal inflation it would produce a multiverse in which different regions have different effective laws, and anthropic reasoning would explain why we observe constants compatible with our existence. Others regard this as abandoning the goal of prediction. A third position holds that the landscape is an artefact of current approximation methods and that a fuller understanding would be far more restrictive. There is also active work on the "swampland" programme, which tries to identify effective theories that cannot come from any consistent quantum gravity — an attempt to extract predictions from the framework rather than from a particular vacuum.',
        },
        whatWouldSettleIt: {
          essential:
            'Discovery of supersymmetric particles would be strong encouragement, though not proof, since supersymmetry is a separate idea that string theory uses rather than owns. A definite, falsifiable, string-specific prediction that could be tested at accessible energies would change the situation decisively; producing one is a central and so far unmet challenge for the programme.',
        },
        references: [
          referenceId('susskind-2003-landscape'),
          referenceId('polchinski-1998-string-theory'),
        ],
      },
      {
        id: 'branes',
        kind: 'prose',
        text: {
          essential:
            'One further ingredient is worth knowing, because it changed the field. Strings are not the only objects in the theory: there are also higher-dimensional surfaces called branes — a membrane is a two-dimensional brane, and there are versions in every dimension. Open strings end on them, which turns branes into places where particles and forces can live.',
          detailed:
            'Branes made two things possible. First, "braneworld" scenarios in which our three-dimensional world is a brane inside a larger space, with gravity leaking into the extra dimensions — which produced a rare thing in this field, an idea testable at the LHC. It was tested. Nothing was found, and the parameter space is now heavily constrained. Second, D-branes underpin the black-hole entropy counting and the AdS/CFT correspondence, which are the framework’s most substantial internal achievements.',
        },
      },
    ],
    furtherReading: [
      referenceId('polchinski-1998-string-theory'),
      referenceId('susskind-2003-landscape'),
      referenceId('kiefer-2012-quantum-gravity'),
    ],
  },
];
