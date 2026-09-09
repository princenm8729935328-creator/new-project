/**
 * Quantum Physics — the double slit, and what measurement actually is.
 *
 * This is the file where careless language does the most damage, so the rules
 * are explicit:
 *
 *   - "observation" never means a conscious observer. It means a physical
 *     interaction that leaves which-path information somewhere.
 *   - the particle does not "know" it is being watched. Nothing knows anything.
 *     Coupling a detector changes the experimental situation, and a different
 *     situation has a different prediction.
 *   - the pattern is not "created by the mind". It is created by amplitudes
 *     adding, and it is destroyed when the paths stop being indistinguishable.
 *
 * The measurement topic is deliberately separated from the interference topic
 * so that the experimental facts can be stated fully before the unresolved
 * interpretive question is raised — and so that the reader can see exactly
 * where the established part stops.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const QUANTUM = sectionId('quantum');
const REVIEWED = '2026-09-09';

export const QUANTUM_SLIT_TOPICS: readonly Topic[] = [
  {
    id: topicId('double-slit'),
    slug: 'the-double-slit-experiment',
    sectionId: QUANTUM,
    order: 8,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The double-slit experiment',
    subtitle: 'One particle at a time, and a pattern that only makes sense if it took both paths.',
    summary: {
      essential:
        'Send electrons one at a time through two narrow slits. Each arrives as a single dot. But the dots pile up into stripes — an interference pattern — which requires contributions from both slits. Make it possible to tell which slit each one went through, and the stripes vanish. Remove that possibility again and they return.',
      detailed:
        'The reason this experiment is famous is that it cannot be explained away. There is only one particle in the apparatus at a time, so the stripes cannot come from particles bumping into each other. Each particle arrives whole at one place, so it is not literally a spread-out wave. And the pattern depends on whether which-path information exists, not on whether anyone reads it. What is interfering is not the particle with another particle: it is the probability amplitude for one route with the amplitude for the other.',
      technical:
        'Two indistinguishable paths contribute amplitudes ψ₁ and ψ₂; the detection probability is |ψ₁ + ψ₂|² = |ψ₁|² + |ψ₂|² + 2Re(ψ₁*ψ₂). The cross term is the interference, and it is what classical probability lacks. Making the paths distinguishable entangles the particle with a which-path degree of freedom, so the state becomes |ψ₁⟩|d₁⟩ + |ψ₂⟩|d₂⟩; tracing out the marker gives a mixture in which the cross term is suppressed by the overlap ⟨d₁|d₂⟩.',
    },
    glossaryTerms: [
      glossaryTermId('probability-amplitude'),
      glossaryTermId('superposition'),
      glossaryTermId('wavefunction'),
    ],
    related: [topicId('measurement'), topicId('wave-particle-duality'), topicId('superposition')],
    blocks: [
      {
        id: 'setup',
        kind: 'prose',
        text: {
          essential:
            'The apparatus is old and simple. A source fires particles at a barrier with two narrow slits. Behind it, a screen records where each one lands. Thomas Young did this with light in 1801 and concluded light was a wave. The quantum version is the same experiment done with electrons, one electron at a time, slowly enough that only one is ever inside the apparatus.',
          detailed:
            'Take the classical expectation seriously first, because the surprise only lands if you do. If electrons are little balls, then some go through the left slit and some through the right. The pattern on the screen should be the sum of two single-slit patterns: one broad band behind each slit, overlapping in the middle. This is exactly what you get with actual small balls, or with bullets, or with sand. It is not what you get with electrons.',
        },
      },
      {
        id: 'viz-double-slit',
        kind: 'visualization',
        visualizationId: visualizationId('double-slit-buildup'),
      },
      {
        id: 'claim-buildup',
        kind: 'claim',
        statement: {
          essential:
            'With electrons sent one at a time, each arrives as a single localised dot — and after enough of them, the dots have assembled into a striped interference pattern with dark bands where almost nothing landed.',
          detailed:
            'This was demonstrated directly by Tonomura and colleagues in 1989, with a film showing the accumulation. The early frames look like scattered noise. By about a thousand electrons a structure is faintly visible. By tens of thousands the stripes are unmistakable. Crucially, the electrons are sent so sparsely that on average only one is in flight at a time; the pattern cannot be electrons interacting. Each electron lands somewhere allowed by the interference pattern, and the pattern is what the accumulated statistics reveal.',
          technical:
            'Tonomura used an electron biprism rather than physical slits, with an arrival rate of about 1,000 electrons per second over a flight path where the transit time is of order 10⁻⁸ s — so the probability of two electrons coexisting in the apparatus is negligible. The same one-at-a-time build-up has since been shown with single photons, neutrons, atoms and large molecules.',
        },
        evidence: 'established',
        references: [
          referenceId('tonomura-1989-single-electron'),
          referenceId('jonsson-1961-electron-diffraction'),
        ],
      },
      {
        id: 'what-interferes',
        kind: 'prose',
        text: {
          essential:
            'So what is interfering? Not the electron with another electron — there is only one. Not the electron with itself in the sense of splitting into halves — it always arrives whole. What combines are the probability amplitudes: one complex number for the route through the left slit, one for the right. They add like waves, and then the probability is the square of the total.',
          detailed:
            'The step that makes quantum probability different from ordinary probability is exactly here. In ordinary probability you add probabilities: P = P₁ + P₂, and probabilities are never negative, so adding more routes can never make an outcome less likely. In quantum mechanics you add amplitudes first and square afterwards: P = |ψ₁ + ψ₂|². Amplitudes are complex numbers, so they can point in opposing directions and cancel. Opening a second slit can therefore make a particular spot darker than it was with one slit open — which is impossible classically and is precisely what the dark bands are.',
          technical:
            'Expanding, |ψ₁ + ψ₂|² = |ψ₁|² + |ψ₂|² + 2|ψ₁||ψ₂|cos Δφ, where Δφ is the phase difference accumulated along the two routes. The first two terms are the classical sum; the last is the interference term, oscillating between +2|ψ₁||ψ₂| and −2|ψ₁||ψ₂|. For a slit separation d and small angles, Δφ = 2πd sinθ/λ, giving maxima at d sinθ = mλ — the same condition as for light, with λ = h/p.',
        },
      },
      {
        id: 'which-path',
        kind: 'claim',
        statement: {
          essential:
            'Add any physical arrangement that records which slit the particle went through, and the stripes disappear. You get the two-band classical pattern instead. Remove the arrangement and the stripes come back.',
          detailed:
            'The essential point, and the one most often mangled: what matters is whether which-path information exists in the world, not whether a person looks at it. If a detector at one slit becomes correlated with the particle’s route, the interference is gone even if the detector’s record is never read, printed, or looked at by anyone. If the information is erased before it can distinguish the routes — as in quantum-eraser experiments — the interference reappears in the appropriately selected data. Consciousness plays no role in any of this, and no experiment has ever shown that it does.',
          technical:
            'Formally the marker entangles: |ψ₁⟩|d₁⟩ + |ψ₂⟩|d₂⟩. The reduced density matrix for the particle has off-diagonal terms multiplied by ⟨d₂|d₁⟩. Perfect distinguishability means ⟨d₂|d₁⟩ = 0 and the coherence vanishes; partial overlap gives partial visibility, bounded by V² + D² ≤ 1. Nothing in this calculation refers to an observer, and the suppression is a consequence of the unitary dynamics of particle plus marker.',
        },
        evidence: 'established',
        references: [
          referenceId('tonomura-1989-single-electron'),
          referenceId('zurek-2003-decoherence'),
        ],
      },
      {
        id: 'no-consciousness',
        kind: 'callout',
        tone: 'misconception',
        title: '“The particle knows it is being watched”',
        text: {
          essential:
            'It does not, and nothing in physics says it does. Two things are being confused. The first is the ordinary fact that to detect a particle you must interact with it, and interactions have effects. The second, and more important, is that an experiment with a which-path detector is a different experiment from one without: the system now includes the detector, and its predicted outcome is different. There is no awareness, no decision, and no observer required.',
          detailed:
            'The stronger claim sometimes made — that human consciousness collapses the wavefunction — is an interpretive position held by a small minority of physicists historically, and it has no experimental support whatsoever. Every experiment ever performed is consistent with the rule that decoherence is caused by physical coupling to other degrees of freedom. Automated detectors with their records discarded destroy interference exactly as well as attentive graduate students do.',
        },
        references: [referenceId('zurek-2003-decoherence')],
      },
      {
        id: 'link-measurement',
        kind: 'cross-link',
        topicId: topicId('measurement'),
        rationale:
          'What "measurement" means physically — and which part of it is genuinely unresolved.',
      },
    ],
    furtherReading: [
      referenceId('tonomura-1989-single-electron'),
      referenceId('arndt-1999-fullerene'),
      referenceId('zurek-2003-decoherence'),
    ],
  },

  {
    id: topicId('measurement'),
    slug: 'what-measurement-means',
    sectionId: QUANTUM,
    order: 9,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What measurement actually means',
    subtitle: 'A physical interaction, a well-tested rule, and one question that is still open.',
    summary: {
      essential:
        'Measuring a quantum system means coupling it to something much larger until the difference between the possibilities is recorded in the wider world. That coupling destroys interference — this part is understood, calculable and confirmed. Why one specific result occurs rather than another is not settled, and honest physics says so.',
      detailed:
        'It helps to separate two questions that get run together. First: why do we stop seeing interference when a system interacts with its surroundings? That question has an answer — decoherence — which follows from ordinary quantum mechanics with no extra assumptions and has been measured in detail. Second: why does a measurement yield one definite outcome instead of the full range? Decoherence does not answer that, and saying it does is the most common overreach in popular accounts.',
      technical:
        'Decoherence describes the rapid suppression of off-diagonal elements of the reduced density matrix in a preferred (einselected) basis, on timescales that scale inversely with system size and environmental coupling. It converts a coherent superposition into an improper mixture. The transition from an improper mixture to a single realised outcome is precisely the measurement problem, and it is where interpretations differ.',
    },
    glossaryTerms: [
      glossaryTermId('decoherence'),
      glossaryTermId('observable'),
      glossaryTermId('quantum-state'),
    ],
    related: [
      topicId('double-slit'),
      topicId('interpretations'),
      topicId('why-world-looks-classical'),
    ],
    blocks: [
      {
        id: 'not-a-special-act',
        kind: 'prose',
        text: {
          essential:
            'The word "measurement" is unfortunate. It suggests a deliberate act by a scientist, and that is not what the physics requires. A measurement is any interaction that leaves a durable trace of which outcome occurred — a photon absorbed by a photographic plate, an air molecule scattering off a dust grain, a current recorded on a hard disk. Nature performs vastly more measurements than laboratories do.',
          detailed:
            'This reframing removes most of the mystique. Ask instead: what is physically different about an interaction that counts as a measurement? The answer is that the information about the system’s state gets spread into a very large number of other degrees of freedom, in a way that is practically impossible to reverse. Interference requires the alternatives to remain indistinguishable in principle. Once the difference between them is copied into 10²³ air molecules, that condition is thoroughly and permanently broken.',
        },
      },
      {
        id: 'claim-decoherence',
        kind: 'claim',
        statement: {
          essential:
            'Coupling to an environment destroys interference extremely fast, and the rate can be calculated and measured. Bigger objects and stronger coupling mean faster loss of coherence — which is why superposition is fragile and why the everyday world looks classical.',
          detailed:
            'This is not a hand-wave; it is a quantitative prediction that has been checked. Experiments with fullerene molecules deliberately introduced a controlled environment — collisions with a background gas, or thermal photon emission from a heated molecule — and watched the interference contrast fall exactly as predicted as the coupling was increased. A dust grain in air decoheres in something like 10⁻³¹ seconds; even in interstellar vacuum, scattering of microwave background photons decoheres a grain in about a second. Isolation is the whole art of quantum experiment.',
          technical:
            'For scattering-induced decoherence, the coherence between positions separated by Δx decays at a rate Λ(Δx)², with Λ set by the scattering cross-section and flux, until Δx exceeds the environmental wavelength and the rate saturates. Zurek’s einselection argument shows why the pointer basis singled out is typically the position basis for macroscopic objects: position is what the environment monitors.',
        },
        evidence: 'established',
        references: [referenceId('zurek-2003-decoherence'), referenceId('arndt-1999-fullerene')],
      },
      {
        id: 'viz-decoherence',
        kind: 'visualization',
        visualizationId: visualizationId('decoherence-visibility'),
      },
      {
        id: 'born-rule',
        kind: 'prose',
        text: {
          essential:
            'What the theory does supply, and supplies extremely well, is the probability of each outcome. Born’s rule says: take the amplitude for that outcome, take its squared magnitude, and that is the probability. It has been tested to extraordinary precision across every branch of physics, and nothing has ever contradicted it.',
          detailed:
            'It is worth appreciating how much rests on this one rule. Every prediction in quantum chemistry, particle physics, solid-state physics and quantum optics ultimately passes through it. The electron’s magnetic moment is predicted and measured to about one part in 10¹³ using it. What Born’s rule does not do is explain why a particular run gives a particular result. It gives the statistics, perfectly, and stays silent about the individual case.',
          technical:
            'For an observable A with eigenstates |a⟩, the probability of result a in state |ψ⟩ is |⟨a|ψ⟩|², and the post-measurement state is |a⟩ for an ideal projective measurement. Gleason’s theorem shows this is essentially the only probability assignment consistent with the Hilbert-space structure for dimension ≥ 3, which makes the rule less arbitrary than it first appears — though it does not remove the question of why any single outcome occurs.',
        },
      },
      {
        id: 'the-open-part',
        kind: 'open-question',
        question: 'Why does a measurement produce one outcome rather than all of them?',
        whyItMatters: {
          essential:
            'Quantum mechanics describes a system before measurement as a superposition, and afterwards we find one result. Decoherence explains why we no longer see interference between the alternatives. It does not explain why one of them is what actually happened to us. That gap is the measurement problem, and it is genuinely unsolved.',
          detailed:
            'Different interpretations respond differently. Many-worlds says all outcomes occur and each observer finds themselves in one branch, so nothing needs to be added but a lot must be accepted. Pilot-wave theories add definite particle positions guided by the wave, so there was always a fact of the matter. Objective-collapse models modify the Schrödinger equation itself so that superpositions of large systems really do break down — which makes them experimentally distinguishable in principle. Copenhagen-family views treat the state as a tool for predicting outcomes rather than a picture of reality, and decline the question.',
        },
        whatWouldSettleIt: {
          essential:
            'Objective-collapse models make different predictions from standard quantum mechanics for sufficiently large superpositions, and experiments are steadily narrowing their parameter space — this is the one branch of the debate with an experimental programme. The other interpretations agree on all current predictions, so no experiment yet performed distinguishes them, and it is not known whether any could.',
        },
        references: [
          referenceId('zurek-2003-decoherence'),
          referenceId('grw-1986'),
          referenceId('everett-1957'),
        ],
      },
      {
        id: 'honest-summary',
        kind: 'callout',
        tone: 'caution',
        title: 'Where the established part stops',
        text: {
          essential:
            'Established: the mathematics of quantum states, the Schrödinger evolution, Born’s rule for probabilities, and decoherence as the mechanism that suppresses interference. All confirmed to high precision. Not established: what the quantum state *is*, and why a single outcome occurs. Anyone who tells you the second list is settled is describing their preferred interpretation, not a result.',
        },
        references: [referenceId('zurek-2003-decoherence')],
      },
      {
        id: 'link-interpretations',
        kind: 'cross-link',
        topicId: topicId('interpretations'),
        rationale: 'The main positions on that open question, and what each one costs.',
      },
    ],
    furtherReading: [referenceId('zurek-2003-decoherence'), referenceId('sakurai-2020-modern-qm')],
  },
];
