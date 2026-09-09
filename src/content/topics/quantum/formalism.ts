/**
 * Quantum Physics — the machinery: states, superposition, uncertainty,
 * the Schrödinger equation, and observables as operators.
 *
 * These five topics are where the section stops telling a story and starts
 * teaching the actual apparatus. The rule followed throughout: introduce every
 * piece of formalism only after the reader has been given a reason to want it.
 * A basis is introduced because superposition is meaningless without saying
 * "superposition of what". Operators are introduced because uncertainty needs
 * a mechanism, not a slogan. The mathematics is not decoration and it is not
 * hidden — it arrives when it earns its place.
 *
 * The uncertainty topic in particular has to fight a specific bad explanation:
 * that measuring disturbs the system and that is all uncertainty is. That
 * explanation is Heisenberg's own first attempt, it is not what the theorem
 * says, and it leaves the reader believing a better microscope would help.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const QUANTUM = sectionId('quantum');
const REVIEWED = '2026-09-09';

export const QUANTUM_FORMALISM_TOPICS: readonly Topic[] = [
  {
    id: topicId('quantum-states'),
    slug: 'quantum-states-and-amplitudes',
    sectionId: QUANTUM,
    order: 10,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Quantum states and amplitudes',
    subtitle: 'What the theory actually tracks, and why it is not a list of properties.',
    summary: {
      essential:
        'In classical physics you describe a thing by listing its properties: this ball is here, moving that fast. Quantum mechanics tracks something different — a state, from which the probability of every possible measurement result can be computed. The state is not a hidden list of the answers. It is the thing that determines the odds.',
      detailed:
        'A useful way in: a quantum state is more like a complete betting book than a photograph. Give me the state and I can tell you the probability of every measurement you might make, on any quantity, to full precision. What I cannot do is tell you what the system "really is" independently of measurement — and the double-slit result shows that assuming such a list exists gives the wrong predictions.',
      technical:
        'A pure state is a unit vector |ψ⟩ in a complex Hilbert space, defined up to global phase. For any observable with eigenbasis {|a⟩}, the coefficients c_a = ⟨a|ψ⟩ are probability amplitudes and |c_a|² are probabilities summing to one. Mixed states, where classical uncertainty is also present, require a density operator ρ with Tr ρ = 1; a pure state has Tr ρ² = 1 and a mixed one less.',
    },
    glossaryTerms: [
      glossaryTermId('quantum-state'),
      glossaryTermId('probability-amplitude'),
      glossaryTermId('wavefunction'),
    ],
    related: [
      topicId('superposition'),
      topicId('operators-and-observables'),
      topicId('measurement'),
    ],
    blocks: [
      {
        id: 'what-a-state-is',
        kind: 'prose',
        text: {
          essential:
            'Think about what it means to describe something completely. For a thrown stone, the complete description is its position and velocity: give me those and Newton gives you the rest of its life. Quantum mechanics keeps the idea of a complete description, but the thing being described is no longer a set of values. It is a state, and from it you extract probabilities.',
          detailed:
            'The temptation is to say the state merely encodes our ignorance — that the electron really does have a position and we just do not know it. That is a coherent thing to want, and it is testable, and Bell’s theorem later in this section shows it fails in a specific and strong sense. For now, take the state seriously on its own terms: it is not a summary of unknown facts, it is the mathematical object from which all predictions flow.',
        },
      },
      {
        id: 'amplitudes',
        kind: 'claim',
        statement: {
          essential:
            'The state assigns a complex number — an amplitude — to each possible outcome. Squaring its magnitude gives the probability. The complexity matters: amplitudes have direction as well as size, and that is what lets them cancel.',
          detailed:
            'Consider why a complex number is needed rather than a plain probability. Probabilities are non-negative and can only accumulate. Amplitudes carry a phase, which you can picture as an arrow’s direction on a clock face. When two routes to the same outcome exist, you add the arrows and then square the length of the result. Two arrows pointing the same way reinforce; pointing opposite ways they cancel. Interference is not an extra rule bolted onto quantum probability. It is what happens automatically once probabilities come from squared complex amplitudes.',
          technical:
            'Global phase is unphysical: |ψ⟩ and e^{iθ}|ψ⟩ give identical predictions, which is why states are rays rather than vectors. Relative phase between components is entirely physical and is what interference measures. This is also why the state space is complex projective space, and why the two-state system’s space is the Bloch sphere rather than a pair of real numbers.',
        },
        evidence: 'established',
        references: [referenceId('born-1926-probability'), referenceId('sakurai-2020-modern-qm')],
      },
      {
        id: 'def-state',
        kind: 'definition',
        termId: glossaryTermId('quantum-state'),
      },
      {
        id: 'basis',
        kind: 'prose',
        text: {
          essential:
            'One more piece of vocabulary, and it is the one that removes most of the confusion later. To write a state down you must choose a basis — a set of possible outcomes to express it in terms of. Position is one basis. Momentum is another. Energy is another. The same state looks completely different depending on which you pick, and none of them is the "true" one.',
          detailed:
            'Here is the analogy worth carrying. A vector pointing north-east can be described as "one unit north plus one unit east", or, if you rotate your axes 45 degrees, as "1.41 units along the new x-axis and nothing along the new y". The arrow has not changed; the description has. Quantum states work the same way. A state that is a definite momentum is a wide spread of positions; a state that is a definite position is a wide spread of momenta. This single observation is the whole origin of the uncertainty principle, and it arrives before any discussion of measurement disturbance.',
          technical:
            'Position and momentum eigenbases are related by Fourier transform: ψ̃(p) = (2πħ)^{−1/2}∫ψ(x)e^{−ipx/ħ}dx. A Fourier pair cannot both be arbitrarily narrow — that is a theorem of classical analysis, independent of physics. Quantum mechanics then inherits it as σ_x σ_p ≥ ħ/2.',
        },
      },
      {
        id: 'not-ignorance',
        kind: 'callout',
        tone: 'misconception',
        title: '“The state just represents what we don’t know”',
        text: {
          essential:
            'If a quantum state were only a record of ignorance — the particle really is somewhere, we just cannot see where — then adding a second slit could never make a spot on the screen darker. Ignorance about which of two routes was taken can only ever add possibilities. The dark fringes of the double slit rule this reading out directly, without any need for advanced arguments.',
          detailed:
            'Bell’s theorem sharpens this enormously, ruling out an entire class of theories in which measurement outcomes are fixed in advance by local pre-existing properties. Pilot-wave theory survives it by being explicitly non-local. What no experiment supports is the comfortable intuition that quantum probability is like the probability of a coin already flipped and covered by a hand.',
        },
        references: [referenceId('bell-1964'), referenceId('born-1926-probability')],
      },
      {
        id: 'link-superposition',
        kind: 'cross-link',
        topicId: topicId('superposition'),
        rationale: 'What it means to add states together — and what it does not mean.',
      },
    ],
    furtherReading: [referenceId('sakurai-2020-modern-qm'), referenceId('born-1926-probability')],
  },

  {
    id: topicId('superposition'),
    slug: 'superposition',
    sectionId: QUANTUM,
    order: 11,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Superposition',
    subtitle: 'Not "in two places at once" — a different thing that needs its own sentence.',
    summary: {
      essential:
        'If two states are possible, so is any combination of them. That is superposition. It does not mean the system is secretly in one of them, and it does not mean it is in both classical places simultaneously. It means the amplitudes add — and the evidence that they really do is interference.',
      detailed:
        'The trouble with "in two places at once" is that it uses a classical word, "place", as though the system had one, twice. A superposition of two position states is a state in which position does not have a definite value at all — not a hidden one, not two of them. Ask a different question of the same state, such as momentum or energy, and the answer may be perfectly sharp. Superposition is always superposition with respect to a chosen basis.',
      technical:
        'Linearity of the Schrödinger equation guarantees that if |ψ₁⟩ and |ψ₂⟩ are solutions then α|ψ₁⟩ + β|ψ₂⟩ is one, with |α|² + |β|² = 1. Because the equation is linear, superposition is not an extra postulate but a structural consequence. Note that |ψ₁⟩ + |ψ₂⟩ and |ψ₁⟩ − |ψ₂⟩ are different physical states with different measurement statistics, which is precisely what a "hidden one of the two" reading cannot accommodate.',
    },
    glossaryTerms: [glossaryTermId('superposition'), glossaryTermId('quantum-state')],
    related: [topicId('quantum-states'), topicId('double-slit'), topicId('entanglement')],
    blocks: [
      {
        id: 'careful-statement',
        kind: 'prose',
        text: {
          essential:
            'Here is the careful version. Take a state where the electron is definitely on the left, and one where it is definitely on the right. Quantum mechanics allows a third state built from both. In that state, asking "which side is it on?" does not have an answer before you measure — not a concealed answer, not two answers. The question simply does not have a value assigned.',
          detailed:
            'Why insist on this so pedantically? Because the sloppy version leads directly to wrong predictions. "It is really in one place and we do not know which" predicts no interference. "It is in both places as two copies" predicts the two copies could be found separately, which never happens — the electron always arrives whole and once. The correct statement predicts both the interference and the single arrival, and it is the only one that does.',
          technical:
            'Formally, |ψ⟩ = (|L⟩ + |R⟩)/√2 is an eigenstate of the parity operator with eigenvalue +1, while (|L⟩ − |R⟩)/√2 is an eigenstate with eigenvalue −1. Both give 50/50 statistics for a position measurement, so any account that reduces the state to "50% chance of L" loses information that is physically measurable — namely, the relative phase, which distinguishes them in an interference experiment.',
        },
      },
      {
        id: 'viz-superposition',
        kind: 'visualization',
        visualizationId: visualizationId('quantum-spin-superposition'),
      },
      {
        id: 'basis-dependence',
        kind: 'claim',
        statement: {
          essential:
            'Whether a state is "in superposition" depends entirely on which question you are asking. The same state can be a superposition of two energies and, at the same time, a perfectly definite value of something else.',
          detailed:
            'The cleanest illustration is spin. An electron whose spin is definitely "up" along the vertical axis is, when described along the horizontal axis, an equal superposition of left and right. Nothing about the electron changed — only the basis in which we chose to write it. So "the electron is in a superposition" is an incomplete sentence. Superposition of what? Until that is answered the statement has no content, and much popular confusion comes from leaving it unanswered.',
          technical:
            'For spin-½, |+z⟩ = (|+x⟩ + |−x⟩)/√2. The states |±x⟩ are eigenstates of σ_x, |±z⟩ of σ_z, and [σ_x, σ_z] = −2iσ_y ≠ 0, so no state is a simultaneous eigenstate of both. This non-commutation is the reason a basis-independent notion of "being in superposition" cannot exist.',
        },
        evidence: 'established',
        references: [referenceId('sakurai-2020-modern-qm'), referenceId('stern-gerlach-1922')],
      },
      {
        id: 'cat-note',
        kind: 'callout',
        tone: 'history',
        title: 'Schrödinger’s cat was an objection, not an illustration',
        text: {
          essential:
            'Schrödinger proposed the cat in 1935 to show that something had gone wrong. His argument was: if quantum states can be superposed, and a cat’s fate can be linked to a quantum event, then the formalism seems to give a superposed cat — which is absurd. It was a reductio, meant to expose a problem, and it is often quoted as though he were cheerfully describing how nature works.',
          detailed:
            'The modern response is decoherence. A cat is coupled to about 10²⁷ particles and to a bath of thermal radiation; a superposition of two macroscopically different cat states loses coherence in a time far shorter than any conceivable measurement. So the interference terms that would make "superposed cat" meaningful are destroyed essentially instantly. This answers Schrödinger’s objection about interference but, as the measurement topic says plainly, it does not by itself explain why one outcome is realised.',
        },
        references: [referenceId('zurek-2003-decoherence')],
      },
      {
        id: 'real-superpositions',
        kind: 'claim',
        statement: {
          essential:
            'Superposition is not confined to single particles. Molecules of thousands of atoms have been put through interferometers and shown to interfere, and superconducting circuits carrying billions of electrons have been placed in superpositions of two current directions.',
          detailed:
            'These experiments matter because they test whether quantum mechanics has a size limit built into it. So far it does not appear to. Every failure to see interference at larger scales has been traced to a technical source of decoherence — background gas, thermal radiation, vibration — rather than to a breakdown of the theory. That is not proof that superposition holds at all scales, and objective-collapse models predict it does not. It is, however, why the burden of evidence currently sits with those proposing a limit.',
          technical:
            'Fein et al. (2019) demonstrated interference of molecules exceeding 25,000 amu. Superconducting flux qubits realise superpositions of persistent currents involving of order 10⁹ electrons. Optomechanical experiments have prepared mechanical oscillators of order 10¹⁴ atoms in non-classical states. Continuous spontaneous localisation models are constrained by these results but not excluded.',
        },
        evidence: 'established',
        references: [
          referenceId('fein-2019-massive-interference'),
          referenceId('arndt-1999-fullerene'),
        ],
      },
    ],
    furtherReading: [
      referenceId('sakurai-2020-modern-qm'),
      referenceId('fein-2019-massive-interference'),
    ],
  },

  {
    id: topicId('uncertainty'),
    slug: 'the-uncertainty-principle',
    sectionId: QUANTUM,
    order: 12,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The uncertainty principle',
    subtitle: 'Not a limit on your instruments — a statement about what a state can be.',
    summary: {
      essential:
        'You cannot prepare a particle with both a sharp position and a sharp momentum. The product of the two spreads has a floor: σ_x σ_p ≥ ħ/2. This is not because measuring is clumsy. It is because a state with a sharp position simply does not have a sharp momentum, in the same way a single sharp click does not have a single pitch.',
      detailed:
        'The musical analogy is exact rather than decorative. A pure tone lasting a long time has a well-defined frequency. A very short click has no well-defined frequency at all — it contains a broad spread of them, and that is a mathematical fact about waves, provable without mentioning physics. Position and momentum are related in precisely the same way. Once de Broglie makes momentum a wavelength, the uncertainty relation follows from Fourier analysis and the value of ħ.',
      technical:
        'The general relation is σ_A σ_B ≥ ½|⟨[Â,B̂]⟩|. For position and momentum, [x̂,p̂] = iħ gives Kennard’s inequality σ_x σ_p ≥ ħ/2, saturated by Gaussian wavepackets. Note that this is a statement about the standard deviations of measurement results on identically prepared states — it does not describe a disturbance caused by measuring one quantity on an individual system, and the two are distinct results with distinct (and separately measured) inequalities.',
    },
    glossaryTerms: [glossaryTermId('observable'), glossaryTermId('wavefunction')],
    related: [
      topicId('quantum-states'),
      topicId('operators-and-observables'),
      topicId('quantum-vacuum'),
    ],
    blocks: [
      {
        id: 'the-sound-analogy',
        kind: 'prose',
        text: {
          essential:
            'Play a note on a violin and hold it. Ask what pitch it is and the answer is sharp: an A, 440 hertz. Now clap once. Ask what pitch the clap is and the question falls apart — a clap is a burst containing an enormous range of frequencies. Short in time means spread in frequency. That is not a limitation of your ear; it is what a short sound is.',
          detailed:
            'This trade-off is a theorem about waves, and it was known long before quantum mechanics: any signal narrow in time is broad in frequency, and vice versa. Now add de Broglie’s insight that a particle’s momentum *is* a wavelength, λ = h/p. A particle localised in a small region is a wave packet narrow in space, which necessarily contains a broad spread of wavelengths, which means a broad spread of momenta. The uncertainty principle is that theorem, wearing physics vocabulary.',
          technical:
            'For a Gaussian wavepacket of width σ_x, the momentum-space wavefunction is Gaussian with σ_p = ħ/2σ_x, saturating the bound. The Fourier bandwidth theorem Δt Δf ≥ 1/4π is the same statement for signals; multiplying by h converts it into Δt ΔE ≥ ħ/2, though the time–energy relation requires care because time is a parameter in quantum mechanics, not an operator.',
        },
      },
      {
        id: 'viz-uncertainty',
        kind: 'visualization',
        visualizationId: visualizationId('wavepacket-uncertainty'),
      },
      {
        id: 'not-disturbance',
        kind: 'callout',
        tone: 'misconception',
        title: '“Measuring position kicks the particle, so you lose the momentum”',
        text: {
          essential:
            'This was Heisenberg’s own first explanation, using an imaginary gamma-ray microscope, and it is not what the principle says. The relation σ_x σ_p ≥ ħ/2 is a property of the state itself, before anybody measures anything. Prepare a million identical particles, measure position on half and momentum on the other half, and the two spreads still obey the inequality — with no measurement ever disturbing the quantity it did not measure.',
          detailed:
            'There is a separate, genuine result about measurement disturbance — how much measuring one observable perturbs another — and it has its own inequalities, which differ from Kennard’s and have been tested directly. Keeping them apart matters, because the disturbance story leaves readers with the impression that better technology could evade the limit. It could not. The limit is in what states exist, and a state with both quantities sharp is not in the theory at all.',
        },
        references: [
          referenceId('heisenberg-1927-uncertainty'),
          referenceId('kennard-1927-uncertainty'),
        ],
      },
      {
        id: 'claim-consequences',
        kind: 'claim',
        statement: {
          essential:
            'The principle has physical consequences that are measured, not merely philosophical. It is why atoms have a size, why hydrogen does not collapse, and why a quantum system can never be completely at rest.',
          detailed:
            'Take hydrogen. Classically, the electron should spiral into the proton, radiating as it goes, because lower is always energetically better. Quantum mechanically it cannot: confining the electron to a smaller region raises its momentum spread, and therefore its kinetic energy, faster than the Coulomb attraction lowers the potential energy. Minimising the sum gives a definite radius — the Bohr radius — from an inequality rather than an orbit. The same argument explains zero-point energy: a harmonic oscillator cannot sit still at the bottom of its well, because that would be a sharp position and a sharp momentum at once, so its lowest energy is ½ħω rather than zero.',
          technical:
            'Estimating the hydrogen ground state: E(r) ≈ ħ²/2mr² − e²/4πε₀r, minimised at r = 4πε₀ħ²/me² = a₀ = 0.529 Å, giving E = −13.6 eV. That a crude uncertainty estimate reproduces both the size and the binding energy of the atom is a strong indication that the principle, not the orbit, is doing the physical work. Zero-point energy is measured directly in the residual motion of atoms in solids at temperatures approaching absolute zero, and in the Casimir force.',
        },
        evidence: 'established',
        references: [
          referenceId('kennard-1927-uncertainty'),
          referenceId('griffiths-2018-quantum'),
          referenceId('lamoreaux-1997-casimir'),
        ],
      },
      {
        id: 'incompatible',
        kind: 'prose',
        text: {
          essential:
            'The deeper statement is about compatibility. Some pairs of quantities can both be sharp at once — position along x and position along y, for instance. Others cannot: position and momentum along the same axis, or spin about two different axes. Quantum mechanics tells you which pairs are which, and the answer is fixed by whether the corresponding operators commute.',
          detailed:
            'This is why "uncertainty" is a slightly misleading name. There is no uncertainty in the sense of missing information about a definite value. There are pairs of questions that cannot both have sharp answers for the same state, because the mathematical objects representing them do not share a common set of eigenstates. Change the pair and the constraint changes; for commuting observables it disappears entirely, and both can be sharp together.',
        },
      },
      {
        id: 'link-operators',
        kind: 'cross-link',
        topicId: topicId('operators-and-observables'),
        rationale: 'The mathematics that decides which pairs of quantities are compatible.',
      },
    ],
    furtherReading: [
      referenceId('kennard-1927-uncertainty'),
      referenceId('heisenberg-1927-uncertainty'),
      referenceId('griffiths-2018-quantum'),
    ],
  },

  {
    id: topicId('schrodinger-equation'),
    slug: 'the-schrodinger-equation',
    sectionId: QUANTUM,
    order: 13,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The Schrödinger equation',
    subtitle: 'The law of motion for a quantum state — and it is completely deterministic.',
    summary: {
      essential:
        'Newton has F = ma: give me the forces and the starting conditions and I can tell you the future. Quantum mechanics has the Schrödinger equation, which does the same job for the state. Given the state now, it tells you the state later, exactly and without any randomness at all. The randomness enters only when you measure.',
      detailed:
        'This surprises people who expect quantum mechanics to be random throughout. It is not. Between measurements the state evolves smoothly and predictably, like a wave on a pond. The equation is linear, which is why superpositions stay superpositions, and it conserves total probability, so the odds always add to one. Every strange quantum phenomenon in this section — interference, tunnelling, orbital shapes, energy levels — is a solution of this one equation with different boundary conditions.',
      technical:
        'iħ ∂ψ/∂t = Ĥψ, with Ĥ = −(ħ²/2m)∇² + V for a non-relativistic particle. Time evolution is unitary, U(t) = e^{−iĤt/ħ}, which preserves inner products and hence probability. Separating variables for time-independent V gives the eigenvalue problem Ĥψ = Eψ, whose solutions in a bound potential form a discrete set — the origin of energy quantisation, with no extra postulate required.',
    },
    glossaryTerms: [glossaryTermId('wavefunction'), glossaryTermId('quantum-state')],
    related: [topicId('quantum-states'), topicId('tunnelling'), topicId('atomic-structure')],
    blocks: [
      {
        id: 'what-it-does',
        kind: 'prose',
        text: {
          essential:
            'Read the equation as a sentence: the rate at which the state changes is set by the system’s energy. That is really all it says. The symbol Ĥ, called the Hamiltonian, encodes the kinetic and potential energy available to the system. Put in a different Ĥ — a different set of forces — and you get the physics of a different situation.',
          detailed:
            'Two features of the equation carry most of the consequences. First, it is linear: no term multiplies the state by itself. That is why adding two solutions gives a third, and therefore why superposition and interference exist at all. Second, the factor of i means it is a wave equation rather than a diffusion equation — the state oscillates rather than smearing out and dying. Change either feature and quantum mechanics as we know it disappears.',
          technical:
            'The Hamiltonian must be Hermitian for U(t) = e^{−iĤt/ħ} to be unitary and probability to be conserved. Attempts to add small non-linear terms — a natural way to build collapse into the dynamics — generically permit superluminal signalling, which is a strong theoretical constraint on such modifications; objective-collapse models avoid it by adding stochastic terms rather than deterministic non-linear ones.',
        },
      },
      {
        id: 'claim-quantisation',
        kind: 'claim',
        statement: {
          essential:
            'Energy quantisation is not assumed by the Schrödinger equation — it comes out of it. Confine a particle and only certain wave shapes fit; those shapes have particular energies; everything in between is not a solution.',
          detailed:
            'This is where Bohr’s hand-waved rule finally gets a derivation. Consider a particle in a box. The wavefunction must vanish at the walls, exactly as a guitar string is pinned at both ends. Only wavelengths that fit an exact number of half-waves satisfy that, and each corresponds to one energy. Nothing was quantised by decree — the discreteness comes from a wave equation plus boundary conditions, the same mathematics that gives a drum its particular set of tones. Solve the same equation for the Coulomb potential of a proton and you get the hydrogen levels, including the −13.6 eV ground state, with the right degeneracies.',
          technical:
            'For an infinite well of width L, E_n = n²π²ħ²/2mL². For the Coulomb potential, separation in spherical coordinates gives E_n = −13.606 eV/n² with states labelled by n, l, m and degeneracy n² — the extra l-degeneracy being an accident of the 1/r potential, lifted by relativistic and QED corrections that are themselves measured and confirmed.',
        },
        evidence: 'established',
        references: [
          referenceId('schrodinger-1926-equation'),
          referenceId('griffiths-2018-quantum'),
        ],
      },
      {
        id: 'viz-oscillator',
        kind: 'visualization',
        visualizationId: visualizationId('quantum-harmonic-oscillator'),
      },
      {
        id: 'determinism',
        kind: 'callout',
        tone: 'note',
        title: 'Quantum mechanics is deterministic — until it isn’t',
        text: {
          essential:
            'It is worth stating plainly: the Schrödinger equation contains no randomness. Give it a state and it hands you the future state with complete precision. The unpredictability of quantum mechanics enters at exactly one point — the rule that a measurement yields one outcome, with probability given by Born’s rule. Everything else is as deterministic as Newton.',
          detailed:
            'This is why the measurement problem is a problem rather than a curiosity. Quantum theory contains two rules for how states change: smooth unitary evolution, and the abrupt update on measurement. The first is derived, universal and beautifully tested. The second is stated as a postulate and refers to "measurement", a term the theory never defines. Interpretations are, in essence, competing proposals for what to do about that asymmetry.',
        },
        references: [
          referenceId('schrodinger-1926-equation'),
          referenceId('sakurai-2020-modern-qm'),
        ],
      },
      {
        id: 'limits',
        kind: 'prose',
        text: {
          essential:
            'The equation as written has limits worth naming. It is non-relativistic, so it fails for fast particles and does not respect the speed of light. It describes a fixed number of particles, so it cannot handle creation and annihilation. Both limits are removed by quantum field theory, later in this section.',
          detailed:
            'The relativistic replacements are the Klein–Gordon equation for spin-0 and the Dirac equation for spin-½. The Dirac equation is a landmark: it predicts spin-½ automatically rather than by hand, gives the electron’s magnetic moment to within a fraction of a per cent, and forced the prediction of antimatter — the positron, found in cosmic rays four years later. But even Dirac’s equation is properly understood as an approximation to a quantum field theory, and it is quantum electrodynamics that yields the electron magnetic moment to twelve figures.',
        },
      },
    ],
    furtherReading: [
      referenceId('schrodinger-1926-equation'),
      referenceId('griffiths-2018-quantum'),
    ],
  },

  {
    id: topicId('operators-and-observables'),
    slug: 'operators-and-observables',
    sectionId: QUANTUM,
    order: 14,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Operators and observables',
    subtitle: 'Why measurable quantities are represented by matrices, and what that buys you.',
    summary: {
      essential:
        'In quantum mechanics, every measurable quantity — position, momentum, energy, spin — is represented not by a number but by an operator: a rule that acts on states. The possible results of a measurement are that operator’s special values, its eigenvalues, and nothing else can ever come out.',
      detailed:
        'This sounds like abstraction for its own sake until you see what it delivers. It explains why some quantities are quantised and others are not: an operator with a discrete spectrum gives discrete results, and whether the spectrum is discrete follows from the physics of confinement. It explains which pairs of quantities can be sharp together: those whose operators commute. And it makes the uncertainty relation a theorem rather than a slogan.',
      technical:
        'Observables are Hermitian operators, so their eigenvalues are real and their eigenvectors form a complete orthonormal basis. Measurement of A in |ψ⟩ yields eigenvalue a with probability |⟨a|ψ⟩|². Two observables have a common eigenbasis if and only if they commute, and the generalised uncertainty relation σ_A σ_B ≥ ½|⟨[Â,B̂]⟩| follows from the Cauchy–Schwarz inequality.',
    },
    glossaryTerms: [glossaryTermId('observable'), glossaryTermId('quantum-state')],
    related: [topicId('uncertainty'), topicId('quantum-states'), topicId('spin')],
    blocks: [
      {
        id: 'why-operators',
        kind: 'prose',
        text: {
          essential:
            'Why replace a number with an operator at all? Because a quantum state does not generally have a single value of a quantity — it has amplitudes for several. What you need is not a number attached to the state, but a machine that, applied to the state, extracts the possible answers and their weights. That machine is the operator.',
          detailed:
            'An analogy that holds up: think of the state as an arrow in some space, and the operator as a way of stretching that space along particular directions. The special directions — the ones the operator only stretches, without rotating — are the eigenvectors, and the stretch factors are the eigenvalues. If the state happens to point along one of those directions, the measurement gives that eigenvalue with certainty. If it points somewhere in between, the state is a superposition and the outcome is probabilistic.',
          technical:
            'Position acts by multiplication, x̂ψ(x) = xψ(x); momentum by differentiation, p̂ψ(x) = −iħ ∂ψ/∂x. Both are unbounded operators with continuous spectra, requiring care about domains — an honest treatment needs rigged Hilbert spaces or the spectral theorem for unbounded self-adjoint operators. Spin operators, by contrast, are finite matrices, which is why spin-½ is the cleanest place to learn the formalism.',
        },
      },
      {
        id: 'claim-commutation',
        kind: 'claim',
        statement: {
          essential:
            'Two quantities can both have sharp values at once if and only if their operators commute — that is, applying them in either order gives the same result. When the order matters, the quantities are incompatible.',
          detailed:
            'The order-matters idea is unfamiliar for numbers but ordinary for actions. Turning a book face-up then rotating it is not the same as rotating it then turning it face-up. In quantum mechanics, position and momentum along the same axis are like that: x̂p̂ and p̂x̂ differ, by exactly iħ. That difference is not a technicality. It is what forbids a state with both sharp, and its size sets the numerical floor in the uncertainty relation. Where two observables do commute — momentum along x and momentum along y, say — no such constraint exists and both can be measured sharply together.',
          technical:
            '[x̂,p̂] = iħ is the canonical commutation relation, and it can be taken as the defining postulate from which the Schrödinger representation follows (Stone–von Neumann). The general uncertainty relation σ_A σ_B ≥ ½|⟨[Â,B̂]⟩| reduces to Kennard for x and p, and gives σ_{S_x}σ_{S_y} ≥ (ħ/2)|⟨S_z⟩| for spin — a state-dependent bound, which vanishes when ⟨S_z⟩ = 0.',
        },
        evidence: 'established',
        references: [
          referenceId('sakurai-2020-modern-qm'),
          referenceId('kennard-1927-uncertainty'),
        ],
      },
      {
        id: 'def-observable',
        kind: 'definition',
        termId: glossaryTermId('observable'),
      },
      {
        id: 'why-real',
        kind: 'callout',
        tone: 'note',
        title: 'Why Hermitian, and why that is not arbitrary',
        text: {
          essential:
            'Measured values are real numbers — no laboratory instrument reads out 3 + 2i. Requiring the operator to be Hermitian is exactly the condition that guarantees real eigenvalues. It also guarantees, as a bonus, that its eigenvectors form a complete set, so any state can be written in terms of possible outcomes. One requirement, motivated purely by physical realism, delivers the whole structure.',
          detailed:
            'The same reasoning explains why time evolution must be unitary rather than merely invertible: probabilities must continue to sum to one. Notice the pattern — the formalism is much more constrained than it looks. Given the demand for real outcomes, conserved probability and a complex vector space, most of the structure of quantum mechanics is forced rather than chosen.',
        },
        references: [referenceId('sakurai-2020-modern-qm')],
      },
    ],
    furtherReading: [referenceId('sakurai-2020-modern-qm'), referenceId('griffiths-2018-quantum')],
  },
];
