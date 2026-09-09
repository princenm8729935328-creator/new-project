/**
 * Quantum Physics — cosmology, interpretations, and the closing synthesis.
 *
 * The synthesis topic is the section's summary and the platform's most explicit
 * statement of its epistemic policy: four labelled tiers, KNOWN through
 * SPECULATIVE, with every major claim in the section sorted into one. It exists
 * so a reader who takes nothing else away takes away the habit of asking which
 * tier a statement belongs to.
 *
 * The interpretations topic must not crown a winner. All the major
 * interpretations reproduce standard quantum predictions in their domains of
 * applicability — that is what makes them interpretations rather than rival
 * theories — with the honourable exception of objective-collapse models, which
 * differ measurably and are therefore being tested.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const QUANTUM = sectionId('quantum');
const REVIEWED = '2026-09-09';

export const QUANTUM_FRONTIER_TOPICS: readonly Topic[] = [
  {
    id: topicId('quantum-cosmology'),
    slug: 'quantum-physics-and-the-early-universe',
    sectionId: QUANTUM,
    order: 30,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Quantum physics and the early Universe',
    subtitle:
      'Microscopic fluctuations, stretched across the sky, and the galaxies that grew from them.',
    summary: {
      essential:
        'The leading account of cosmic structure is startling: the galaxies exist because of quantum fluctuations. In the first fraction of a second, tiny quantum variations in a field were stretched to enormous size by inflation, becoming slight density differences. Gravity amplified them over billions of years into galaxies. The predicted pattern matches the microwave background in remarkable detail.',
      detailed:
        'Separate the confidence levels carefully here, because they differ sharply. That the CMB has temperature variations of about one part in 100,000 with a specific statistical pattern: measured, to high precision. That those variations grew into the observed distribution of galaxies: strongly supported by simulations and surveys. That they originated as quantum fluctuations stretched by inflation: the leading model, fitting the data impressively well, and not established in the way the first two are.',
      technical:
        'Inflation predicts a nearly scale-invariant spectrum of adiabatic, Gaussian, primarily scalar perturbations with n_s slightly below 1. Planck measures n_s = 0.9649 ± 0.0042, and the acoustic peak structure of the CMB matches the predictions of a ΛCDM model with such initial conditions. The generic prediction of primordial gravitational waves, parameterised by r, remains unobserved: current bounds are r < 0.032, which excludes several simple inflationary potentials.',
    },
    glossaryTerms: [glossaryTermId('quantum-field'), glossaryTermId('cmb')],
    related: [topicId('quantum-vacuum'), topicId('inflation'), topicId('cmb')],
    blocks: [
      {
        id: 'the-claim',
        kind: 'prose',
        text: {
          essential:
            'Here is the claim in one sentence, and it is worth reading twice. Every galaxy, every star, every planet exists because of quantum fluctuations in a field, in the first tiny fraction of a second, stretched to cosmic scale faster than light could cross them. The largest structures in the Universe are the fossilised imprint of the smallest possible variations.',
          detailed:
            'The mechanism is straightforward once inflation is granted. A quantum field cannot have a perfectly uniform value — uncertainty forbids it, exactly as in the vacuum topic. During inflation, space expands by an enormous factor in a very short time, so a fluctuation that was microscopic gets carried to a scale larger than the causal horizon, where it stops evolving and is effectively frozen in as a classical density variation. When inflation ends, these become slight over- and under-densities in the hot plasma. Gravity does the rest over 13.8 billion years.',
        },
      },
      {
        id: 'viz-fluctuations',
        kind: 'visualization',
        visualizationId: visualizationId('primordial-fluctuations'),
      },
      {
        id: 'claim-cmb-pattern',
        kind: 'claim',
        statement: {
          essential:
            'The microwave background has temperature variations of about one part in 100,000, and their statistical pattern matches what inflation predicts — including features that were predicted before they were measured.',
          detailed:
            'The strongest evidence is the acoustic peak structure. Before recombination, the photon–baryon fluid oscillated: over-dense regions compressed, radiation pressure pushed back, and the resulting sound waves froze in when the Universe became transparent. The pattern of peaks depends on the initial conditions, and inflation predicts a specific kind — nearly scale-invariant, adiabatic, Gaussian. The positions and relative heights of the peaks measured by WMAP and Planck match. The observed spectral tilt, slightly less than perfectly scale-invariant, is also what simple inflation models predict, and it is measured to be different from 1 at very high significance.',
          technical:
            'Planck 2018: n_s = 0.9649 ± 0.0042, so scale invariance (n_s = 1) is excluded at more than 8σ. Adiabatic initial conditions are strongly favoured over isocurvature; non-Gaussianity is consistent with zero, as simple single-field slow-roll inflation predicts. The angular position of the first acoustic peak fixes the spatial curvature close to flat, another generic inflationary prediction.',
        },
        evidence: 'established',
        references: [
          referenceId('planck-2018-vi'),
          referenceId('bennett-2013-wmap9'),
          referenceId('smoot-1992-cobe'),
        ],
      },
      {
        id: 'claim-inflation-status',
        kind: 'claim',
        statement: {
          essential:
            'Inflation is the leading explanation and it is not confirmed. It fits the data impressively, it made predictions that were later verified, and its central generic prediction — primordial gravitational waves — has not been detected.',
          detailed:
            'The honest position has three parts. In its favour: inflation explains why the Universe is flat, why it is uniform on scales that were never in causal contact, and why the fluctuation spectrum has the observed shape, and it did so before those measurements existed. Against it: the field driving it has never been identified, its potential is not derived from any established theory, and the framework is flexible enough that many versions can accommodate many outcomes — a criticism made forcefully within the field. And unresolved: primordial gravitational waves, generically predicted, remain unseen, with bounds now excluding some of the simplest models.',
          technical:
            'The tensor-to-scalar ratio bound r < 0.032 (95% confidence, BICEP/Keck plus Planck) excludes ϕ² and ϕ⁴ chaotic inflation, while Starobinsky-type and plateau models predict r ≈ 10⁻³ and remain viable. Alternatives such as bouncing cosmologies and string-gas cosmology are pursued by a minority and are more constrained but not excluded.',
        },
        evidence: 'model',
        references: [
          referenceId('guth-1981-inflation'),
          referenceId('bicep-keck-2021'),
          referenceId('ijjas-steinhardt-loeb-2013'),
        ],
      },
      {
        id: 'not-the-origin',
        kind: 'callout',
        tone: 'caution',
        title: 'This does not explain where the Universe came from',
        text: {
          essential:
            'Quantum cosmology explains the origin of *structure* — why matter is clumped rather than smooth — and it does so well. It does not explain why there is a Universe at all. Inflation requires a pre-existing spacetime, a field, and physical laws for that field to obey. Claims that quantum mechanics shows the Universe created itself from nothing are using "nothing" to mean a quantum state governed by laws, which is not nothing in the sense the question intends.',
          detailed:
            'There are serious proposals about the initial state — the Hartle–Hawking no-boundary proposal, Vilenkin’s tunnelling proposal, and others. They are mathematically interesting attempts within frameworks that are themselves unconfirmed, they disagree with one another, and none has observational support. The honest answer to "why is there a Universe?" from current physics is that we do not know, and it is not clear the question is within the reach of the methods we have.',
        },
        references: [
          referenceId('mukhanov-chibisov-1981'),
          referenceId('kiefer-2012-quantum-gravity'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'cmb-anisotropy',
            label: 'Temperature variations in the microwave background',
            value: 1e-5,
            unit: 'fractional',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About 18 microkelvin against a 2.725 K background. First detected by COBE in 1992, mapped in detail by WMAP and Planck. These are the seeds every galaxy grew from.',
            references: [referenceId('smoot-1992-cobe'), referenceId('planck-2018-vi')],
          },
          {
            id: 'spectral-index',
            label: 'Scalar spectral index of primordial fluctuations',
            value: 0.9649,
            unit: 'dimensionless',
            uncertainty: { plusMinus: 0.0042 },
            context:
              'Slightly less than 1, meaning slightly more power on large scales — a specific prediction of simple inflationary models, confirmed at high significance.',
            references: [referenceId('planck-2018-vi')],
          },
          {
            id: 'tensor-ratio',
            label: 'Tensor-to-scalar ratio',
            value: 0.032,
            unit: 'upper limit, 95% confidence',
            uncertainty: { kind: 'upper-limit' },
            context:
              'Primordial gravitational waves from inflation have not been detected. The bound already excludes several of the simplest inflationary potentials.',
            references: [referenceId('bicep-keck-2021')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('planck-2018-vi'),
      referenceId('mukhanov-chibisov-1981'),
      referenceId('bicep-keck-2021'),
    ],
  },

  {
    id: topicId('interpretations'),
    slug: 'interpretations-of-quantum-mechanics',
    sectionId: QUANTUM,
    order: 31,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Interpretations of quantum mechanics',
    subtitle: 'Same predictions, different accounts of what the mathematics is describing.',
    summary: {
      essential:
        'Physicists agree completely on how to use quantum mechanics and disagree about what it means. The main interpretations reproduce the same experimental predictions — that is what makes them interpretations rather than competing theories. They differ about whether the wavefunction is real, whether outcomes are unique, and what a measurement is.',
      detailed:
        'It helps to see what each one gives up, since none is free. Copenhagen-family views decline to say what happens between measurements, keeping the theory minimal at the cost of leaving "measurement" undefined. Many-worlds keeps the Schrödinger equation universal and gives up unique outcomes. Pilot-wave theory keeps definite particle positions and gives up locality explicitly. Objective-collapse models keep unique outcomes and give up exact linearity — which makes them, uniquely, testable.',
      technical:
        'Interpretations of standard quantum mechanics are empirically equivalent by construction. Objective-collapse models are not: continuous spontaneous localisation adds stochastic non-linear terms with parameters λ and r_C, predicting deviations for sufficiently massive superpositions and a small anomalous heating. Experiments including underground gravitational-wave detectors, X-ray emission searches and levitated-nanoparticle interferometry have excluded substantial regions of that parameter space without excluding the models.',
    },
    glossaryTerms: [glossaryTermId('quantum-state'), glossaryTermId('decoherence')],
    related: [topicId('measurement'), topicId('bell-theorem'), topicId('quantum-view-of-reality')],
    blocks: [
      {
        id: 'what-is-disputed',
        kind: 'prose',
        text: {
          essential:
            'Be clear about what is not in dispute. The mathematics is agreed. The predictions are agreed. The experimental record is agreed. What is disputed is a question the mathematics does not answer: when you write down a state and it gives probabilities for several outcomes, what is that state describing? A physical thing? Your information? Something else?',
          detailed:
            'This is unusual in physics and it is worth pausing on. Normally, competing accounts differ in what they predict and an experiment decides. Here the accounts agree on every prediction that has been or can currently be checked. That is not a temporary state of ignorance about the experimental situation — for most of these interpretations it is a theorem that they agree. So the choice between them is made on other grounds: simplicity, coherence, what one is willing to accept. Physicists differ, and informal surveys at conferences show no majority position.',
        },
      },
      {
        id: 'viz-interpretations',
        kind: 'visualization',
        visualizationId: visualizationId('interpretation-map'),
      },
      {
        id: 'copenhagen',
        kind: 'claim',
        statement: {
          essential:
            'Copenhagen-family views treat the quantum state as a tool for predicting measurement outcomes rather than a picture of reality, and decline to describe what happens between measurements.',
          detailed:
            'This is less a single position than a family — Bohr, Heisenberg and their successors did not agree in detail, and modern versions such as QBism take the state to represent an agent’s expectations rather than anything physical. What they share is a refusal to treat the wavefunction as a description of the world, and a corresponding refusal to answer "what is the electron doing between measurements?". The advantage is that it adds nothing beyond what is used in practice; every working physicist calculates this way. The cost is that "measurement" and "classical apparatus" appear as primitive terms that the theory itself never defines, which is precisely the gap decoherence was later brought in to narrow.',
          technical:
            'The pragmatic core — unitary evolution plus Born’s rule on measurement — is what textbooks present and what is used in every laboratory. Its incompleteness is a conceptual objection rather than an empirical one, and it is why the position is sometimes summarised, unkindly but not entirely unfairly, as "shut up and calculate".',
        },
        evidence: 'model',
        references: [referenceId('sakurai-2020-modern-qm')],
      },
      {
        id: 'many-worlds',
        kind: 'claim',
        statement: {
          essential:
            'Many-worlds takes the Schrödinger equation to apply always, with no collapse. Every outcome occurs, in branches that decohere from one another; an observer finds themselves in one branch and calls that "the result".',
          detailed:
            'The appeal is economy of assumptions: it removes the second rule entirely, keeping only the deterministic evolution that is derived rather than postulated. Decoherence supplies the branching structure without extra machinery. The costs are substantial. It requires accepting an enormous, continually growing multiplicity of branches. And it has a well-known difficulty with probability: if every outcome happens, it is not obvious what "a 30% chance" means. Decision-theoretic derivations of Born’s rule within the framework exist and are contested. Everett proposed it in 1957 and it was largely ignored for two decades; it now has substantial support, particularly among cosmologists, who need a formulation that can describe the whole Universe with no external observer.',
          technical:
            'The branching basis is selected by environmental decoherence rather than postulated, which addresses the preferred-basis problem. The probability problem is the live objection: Deutsch–Wallace decision-theoretic arguments and self-locating-uncertainty approaches both aim to derive |ψ|² weighting, and neither is universally accepted.',
        },
        evidence: 'model',
        references: [referenceId('everett-1957'), referenceId('zurek-2003-decoherence')],
      },
      {
        id: 'pilot-wave',
        kind: 'claim',
        statement: {
          essential:
            'Pilot-wave theory says particles always have definite positions and are guided by a real wave. Nothing is indeterminate; the probabilities come from ignorance of the initial positions. The price is that the guidance is explicitly non-local.',
          detailed:
            'De Broglie proposed it in 1927, Bohm developed it fully in 1952, and it reproduces every prediction of standard quantum mechanics for non-relativistic systems. In the double slit, the particle really does go through one slit — and the wave goes through both, and guides it, which is how the interference pattern arises. It is a genuine counterexample to loose claims that quantum mechanics forces indeterminism, and its existence is why Bell’s theorem had to be stated so carefully: Bohmian mechanics has hidden variables and evades the theorem by being non-local, which the theorem explicitly permits. Its difficulties are extending naturally to relativistic quantum field theory, and a widespread sense that the guiding wave is doing a great deal of work while being unobservable.',
          technical:
            'The guidance equation is dx/dt = (ħ/m)Im(∇ψ/ψ), with the quantum equilibrium hypothesis ρ = |ψ|² recovering Born statistics. The non-locality is explicit: the velocity of one particle depends instantaneously on the configuration of all others. No signalling results, because the initial positions are unknowable in detail.',
        },
        evidence: 'model',
        references: [referenceId('bohm-1952'), referenceId('bell-1964')],
      },
      {
        id: 'collapse-models',
        kind: 'claim',
        statement: {
          essential:
            'Objective-collapse models modify the Schrödinger equation so that superpositions of large systems really do break down spontaneously. Unlike every other interpretation, this makes different predictions — so it can be tested, and it is being tested.',
          detailed:
            'The idea is to add a small random term that has almost no effect on a single particle but grows rapidly with the number of particles involved, so a microscopic system stays coherent and a cat cannot. This is a genuine change to physics, not a reinterpretation, which is what makes it valuable: it converts a philosophical dispute into an experimental programme. Searches for the predicted anomalous heating and for loss of interference in ever-larger objects have excluded substantial regions of the parameter space without excluding the models. If a superposition were ever prepared and confirmed at a mass where a given collapse model forbids it, that model would be dead.',
          technical:
            'GRW and continuous spontaneous localisation introduce a collapse rate λ and correlation length r_C. Constraints come from X-ray emission searches, LISA Pathfinder and gravitational-wave detector noise floors, and matter-wave interferometry. The originally proposed GRW parameters are now excluded by some analyses; broader parameter ranges remain open.',
        },
        evidence: 'active-research',
        references: [referenceId('grw-1986'), referenceId('fein-2019-massive-interference')],
      },
      {
        id: 'no-winner',
        kind: 'callout',
        tone: 'caution',
        title: 'No interpretation has been experimentally established',
        text: {
          essential:
            'Anyone who tells you that many-worlds has been proved, or that Copenhagen has been refuted, or that Bohmian mechanics is ruled out, is stating a preference. The interpretations of standard quantum mechanics agree on all current predictions, by construction. The one exception is objective collapse, which differs measurably and is under active experimental constraint — and has not been excluded.',
          detailed:
            'What *has* been settled is important and should not be lost in the even-handedness. Local hidden variables are dead, killed by Bell tests. Any interpretation must accommodate that. Beyond it, the field is genuinely open, and the appropriate response is to understand the options and the trade-offs rather than to adopt one and call it the discovery.',
        },
        references: [referenceId('hensen-2015-loophole-free'), referenceId('grw-1986')],
      },
    ],
    furtherReading: [
      referenceId('everett-1957'),
      referenceId('bohm-1952'),
      referenceId('grw-1986'),
      referenceId('zurek-2003-decoherence'),
    ],
  },

  {
    id: topicId('quantum-view-of-reality'),
    slug: 'how-quantum-physics-sees-the-universe',
    sectionId: QUANTUM,
    order: 32,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How quantum physics sees the Universe',
    subtitle: 'The whole picture, and an explicit line between what is known and what is not.',
    summary: {
      essential:
        'Put together, the picture is this. Fields fill space. Particles are their discrete excitations. Those excitations have states that evolve deterministically and give probabilities when measured. Atoms, chemistry, materials and stars follow. It is the most precisely tested description of nature ever produced — and it is incomplete in ways that are not subtle.',
      detailed:
        'The point of this final topic is to sort every major claim in the section into one of four tiers: known, strongly supported, active research, and speculative or unresolved. That habit is more valuable than any individual fact, because it is what lets a reader evaluate the next confident claim they encounter about quantum physics — and there will be many.',
    },
    glossaryTerms: [glossaryTermId('quantum-field'), glossaryTermId('quantum-state')],
    related: [topicId('standard-model'), topicId('quantum-gravity'), topicId('interpretations')],
    blocks: [
      {
        id: 'the-ladder',
        kind: 'prose',
        text: {
          essential:
            'Climb the ladder once, quickly. Fields exist everywhere. Their excitations are particles. Electrons and quarks are fermions, so they refuse to share states, which gives atoms their shells. Shells give the periodic table. The table gives chemistry. Chemistry gives materials, biology and everything you can touch. Meanwhile the same framework describes how those particles interact, and the same quantum fluctuations that make an atom’s size also seeded every galaxy.',
          detailed:
            'What is striking is how few ingredients that took. A handful of fields, a symmetry principle that generates the forces, one constant setting the scale of quantum effects, and one rule connecting amplitudes to probabilities. From that: the solidity of matter, the colours of things, the light of stars, the chemistry of life, and the large-scale structure of the cosmos. Whatever is missing from the theory, the reach of what is present is extraordinary.',
        },
      },
      {
        id: 'viz-scales',
        kind: 'visualization',
        visualizationId: visualizationId('quantum-scale-ladder'),
      },
      {
        id: 'known',
        kind: 'claim',
        statement: {
          essential:
            'KNOWN — established by repeated experiment, not seriously in doubt: energy quantisation, wave behaviour of matter, interference of single particles, the uncertainty relation, spin and the exclusion principle, tunnelling, entanglement and the violation of Bell inequalities, and the predictions of the Standard Model at accessible energies.',
          detailed:
            'These are not "well-supported theories" in the hedging sense. Electron interference has been filmed. Bell violations have been measured with every loophole closed. The electron’s magnetic moment agrees with quantum electrodynamics to about one part in 10¹³. Tunnelling is the working principle of instruments that image individual atoms. Doubting this tier is not scepticism; it is a failure to look at the evidence.',
          technical:
            'The precision hierarchy is worth carrying: QED predictions confirmed to ~10⁻¹³ (electron g−2), atomic transition frequencies to ~10⁻¹⁵, Bell violations at many σ with loopholes closed, Standard Model electroweak fits consistent across dozens of independent observables.',
        },
        evidence: 'established',
        references: [
          referenceId('fan-2023-electron-g'),
          referenceId('hensen-2015-loophole-free'),
          referenceId('pdg-2024'),
        ],
      },
      {
        id: 'supported',
        kind: 'claim',
        statement: {
          essential:
            'STRONGLY SUPPORTED — very well evidenced, with model-dependence worth naming: decoherence as the explanation of classical appearance, quantum field theory as the correct framework at accessible energies, and inflation as the origin of cosmic structure.',
          detailed:
            'The distinction from the first tier is real but modest. Decoherence is calculated and measured, and it is universally accepted as far as it goes — the caveat is what it does not do, not whether it happens. Quantum field theory is superbly confirmed and is nevertheless generally regarded as an effective theory valid below some higher scale. Inflation fits the data impressively and made successful predictions, but the field driving it is unidentified and its signature gravitational-wave background has not been found.',
          technical:
            'A useful marker for this tier: each item has passed tests it could have failed, and each has an acknowledged boundary or unconfirmed component that a careful practitioner would state without prompting.',
        },
        evidence: 'model',
        references: [
          referenceId('zurek-2003-decoherence'),
          referenceId('planck-2018-vi'),
          referenceId('peskin-schroeder-1995'),
        ],
      },
      {
        id: 'active',
        kind: 'claim',
        statement: {
          essential:
            'ACTIVE RESEARCH — real programmes with real results and no settled conclusion: the nature of dark matter, whether objective-collapse models are correct, whether quantum coherence plays a functional role in biology, and how far superposition extends with mass.',
          detailed:
            'This tier is where most working physicists are actually employed, and where honest reporting is hardest, because progress here generates the headlines. Each item has published results, ongoing experiments and no consensus answer. A useful test: if you read a confident claim about any of these, ask what would have counted as a null result and whether that was reported.',
          technical:
            'Direct dark-matter searches have excluded large regions of WIMP parameter space without a detection; collapse-model parameters are constrained by several independent methods; large-molecule interferometry advances by roughly an order of magnitude in mass per decade.',
        },
        evidence: 'active-research',
        references: [
          referenceId('lux-zeplin-2023'),
          referenceId('grw-1986'),
          referenceId('fein-2019-massive-interference'),
        ],
      },
      {
        id: 'speculative',
        kind: 'claim',
        statement: {
          essential:
            'SPECULATIVE OR UNRESOLVED — no experimental support, and honesty requires saying so: quantum gravity in any specific form, string theory, the multiverse, why the Universe exists, the interpretation of quantum mechanics, and whether time is fundamental.',
          detailed:
            'Every item here is a legitimate subject of serious work by serious people. None has an experimental result behind it. That is not a criticism of the researchers; some of these questions may be beyond the reach of any experiment we can build, and the work is still worth doing. It is a statement about what a reader is entitled to believe on the evidence — which is, for now, nothing definite.',
          technical:
            'The practical marker for this tier is the absence of a confirmed novel prediction. Candidate quantum-gravity theories agree with general relativity and quantum field theory in all tested regimes by construction, which is a requirement rather than a success.',
        },
        evidence: 'open-question',
        references: [
          referenceId('kiefer-2012-quantum-gravity'),
          referenceId('polchinski-1998-string-theory'),
          referenceId('susskind-2003-landscape'),
        ],
      },
      {
        id: 'what-it-does-not-provide',
        kind: 'callout',
        tone: 'caution',
        title: 'What quantum physics does not currently provide',
        text: {
          essential:
            'A complete theory of quantum gravity. An explanation of why this Universe exists, or why it has these particular constants. A settled answer to what the wavefunction is. An account of dark matter or dark energy. A unification of all known physics. None of these is a small remaining detail, and none has an agreed answer.',
          detailed:
            'It is worth ending on the shape of that list rather than its length. The gaps are not scattered randomly: they cluster at the very large, the very early, and the interpretive foundations. The middle — atoms, molecules, materials, particles at collider energies — is understood to a precision unmatched anywhere else in science. A theory can be simultaneously the most accurate description humans have produced and visibly unfinished, and quantum physics is exactly that.',
        },
        references: [referenceId('pdg-2024'), referenceId('kiefer-2012-quantum-gravity')],
      },
      {
        id: 'closing',
        kind: 'prose',
        text: {
          essential:
            'One last thing worth carrying out of this section. Quantum mechanics is not strange because it is badly explained. It is strange because the world at small scales does not work the way objects at human scale work, and there was never any reason it should. The mathematics is precise, the predictions are confirmed, and the discomfort is a fact about our intuitions rather than a defect in the theory.',
          detailed:
            'The habit this section has tried to build is the one that matters after the details fade: ask what tier a claim belongs to. Is it measured? Is it a well-supported model? Is it live research? Is it an interpretation being sold as a discovery? That question is answerable for almost any statement about quantum physics you will encounter, and asking it is worth more than remembering any particular equation here.',
        },
      },
    ],
    furtherReading: [
      referenceId('pdg-2024'),
      referenceId('peskin-schroeder-1995'),
      referenceId('kiefer-2012-quantum-gravity'),
    ],
  },
];
