/**
 * Recaps for Quantum Physics.
 *
 * The distractors in this file are unusually important, because quantum physics
 * has a larger stock of confident popular misinformation than any other subject
 * on this platform. Almost every wrong option below is a sentence a reader has
 * probably already encountered somewhere and half-believed: the particle knows
 * it is being watched, uncertainty comes from clumsy instruments, entanglement
 * sends signals, empty space is full of particles popping in and out, physics
 * has proved time is an illusion, string theory has been confirmed.
 *
 * Getting one of those wrong and then reading why is worth more than getting it
 * right by luck, which is why each explanation names the principle rather than
 * restating the answer.
 */
import type { RecapsByTopic } from '../schema/recap';

export const QUANTUM_RECAPS: RecapsByTopic = {
  'classical-limits': {
    summary: {
      essential:
        'By 1900 classical physics was superbly successful and gave definite, wrong answers to three ordinary questions: the colours a hot object glows, why light ejects electrons from metal only above a threshold colour, and why atoms emit sharp spectral lines. All three concern how light and matter exchange energy, and all three are fixed by one rule: E = hf.',
      detailed:
        'The distinction that matters is between a theory with a gap and a theory that confidently predicts something absurd. Classical statistical mechanics did not merely fail to predict the blackbody curve — it predicted infinite energy from a warm oven. Classical wave theory did not merely fail to predict the photoelectric threshold — it forbade one. These are structural failures, not missing decimal places, which is why they could not be patched and why the replacement had to be a different account of what a physical state is.',
    },
    questions: [
      {
        id: 'why-serious',
        prompt:
          'Why were these three anomalies more serious than an ordinary unexplained observation?',
        options: [
          { id: 'a', text: 'They were measured more precisely than anything else at the time' },
          {
            id: 'b',
            text: 'Classical physics gave definite answers that were wrong — in one case infinite — rather than simply having no answer',
            correct: true,
          },
          { id: 'c', text: 'They involved astronomical rather than laboratory observations' },
          { id: 'd', text: 'They contradicted Newton’s laws of motion directly' },
        ],
        explanation:
          'A theory with a gap can be extended. A theory that predicts unbounded energy from a warm object, or forbids an effect that plainly occurs, has something wrong at its foundations. That is why patching failed and a new framework was needed.',
      },
      {
        id: 'common-thread',
        prompt: 'What do all three failures have in common?',
        options: [
          { id: 'a', text: 'They all involve the behaviour of atomic nuclei' },
          {
            id: 'b',
            text: 'They all concern the exchange of energy between radiation and matter',
            correct: true,
          },
          { id: 'c', text: 'They all occur only at very low temperatures' },
          { id: 'd', text: 'They all require relativity to explain' },
        ],
        explanation:
          'Blackbody radiation, the photoelectric effect and atomic spectra are all about how light gives energy to matter or receives it. That is why one rule — that the exchange happens in quanta of size hf — resolves all three.',
      },
    ],
  },

  'blackbody-radiation': {
    summary: {
      essential:
        'Every warm object glows, with a colour distribution set by temperature alone and not by what it is made of. Classical physics predicted the intensity should rise without limit at short wavelengths — the ultraviolet catastrophe — giving infinite total energy. The measured curve rises, peaks and falls, and Planck’s law fits it exactly.',
      detailed:
        'The classical derivation is correct given its premises, which is what makes the failure instructive. Count the standing-wave modes in a cavity: their number grows without bound at short wavelengths. Give each one k_BT, as equipartition demands. Multiply and the integral diverges. The premise that fails is equipartition, applied to modes whose minimum energy quantum exceeds the available thermal energy. Note also that the "catastrophe" was named in 1911, after Planck had already solved the problem — what actually drove him was new Berlin data showing Wien’s law failing at long wavelengths.',
    },
    questions: [
      {
        id: 'why-material-independent',
        prompt:
          'Why is it significant that the glow colour depends only on temperature, not on the material?',
        options: [
          { id: 'a', text: 'It shows the material must be a perfect conductor' },
          {
            id: 'b',
            text: 'Independence from material details suggests the effect concerns the radiation itself rather than the substance',
            correct: true,
          },
          { id: 'c', text: 'It proves that all materials have the same atomic structure' },
          { id: 'd', text: 'It means the radiation carries no information about the object' },
        ],
        explanation:
          'When a result does not depend on the details of the material, it usually reflects something general. That is why the idealised "blackbody" — defined by its behaviour rather than its composition — was the right object to theorise about.',
      },
      {
        id: 'catastrophe',
        prompt: 'What exactly was the "ultraviolet catastrophe"?',
        options: [
          { id: 'a', text: 'An observed burst of ultraviolet light from heated cavities' },
          {
            id: 'b',
            text: 'A theoretical prediction of unbounded short-wavelength intensity, and hence infinite total energy — never anything observed',
            correct: true,
          },
          { id: 'c', text: 'The failure of early detectors to register ultraviolet light' },
          { id: 'd', text: 'Damage caused to experimenters by cavity radiation' },
        ],
        explanation:
          'Nothing catastrophic ever happened in a laboratory. The catastrophe is entirely in the classical formula, which diverges as wavelength goes to zero. Reality politely declines, and the mismatch is where quantum physics begins.',
      },
      {
        id: 'which-premise',
        prompt: 'Which classical assumption actually fails in the blackbody derivation?',
        options: [
          { id: 'a', text: 'The counting of standing-wave modes in the cavity' },
          {
            id: 'b',
            text: 'Equipartition — the assumption that every mode receives k_BT on average',
            correct: true,
          },
          { id: 'c', text: 'The assumption that light is an electromagnetic wave' },
          { id: 'd', text: 'The conservation of energy' },
        ],
        explanation:
          'The mode counting is right and survives into Planck’s law unchanged. What fails is giving every mode the same average energy: a mode whose minimum quantum hf far exceeds k_BT is almost never excited, so it never collects its share.',
      },
    ],
  },

  'planck-quantum': {
    summary: {
      essential:
        'Planck found the blackbody curve comes out exactly right if energy is exchanged only in discrete lumps of size E = hf. High-frequency modes then demand a large minimum payment, and thermal energy at temperature T — arriving in typical parcels of k_BT — cannot afford them, so they stay unexcited and the divergence disappears.',
      detailed:
        'Two things are worth carrying. First, the mechanism is exponential suppression, not cancellation: the mean energy of a quantised oscillator is hf/(e^{hf/k_BT} − 1), which tends to k_BT when hf ≪ k_BT and dies off as hf·e^{−hf/k_BT} in the opposite limit. Second, h has units of action, and quantum effects matter when the action of a process is comparable to h. A pendulum’s action is about 10³⁴ times h, so its quantisation is invisible; an electron in an atom has action of order h itself. There is no boundary between the quantum and classical worlds — there is a ratio.',
    },
    questions: [
      {
        id: 'mechanism',
        prompt: 'How does quantisation remove the ultraviolet divergence?',
        options: [
          { id: 'a', text: 'It cancels the short-wavelength contribution with a negative term' },
          {
            id: 'b',
            text: 'High-frequency modes require a minimum energy quantum larger than the available thermal energy, so they are almost never excited',
            correct: true,
          },
          { id: 'c', text: 'It puts an upper limit on the frequency a cavity mode can have' },
          { id: 'd', text: 'It reduces the number of modes available at short wavelengths' },
        ],
        explanation:
          'Nothing is cancelled and no mode is forbidden. Expensive modes simply almost never get bought: the mean energy falls off exponentially once hf exceeds k_BT, which is enough to make the total finite.',
      },
      {
        id: 'planck-belief',
        prompt: 'What did Planck himself think of the quantum hypothesis?',
        options: [
          {
            id: 'a',
            text: 'He regarded it as his most important physical discovery from the start',
          },
          {
            id: 'b',
            text: 'He called it an act of desperation and spent years trying to derive the result without it',
            correct: true,
          },
          { id: 'c', text: 'He believed it applied to light itself, ahead of Einstein' },
          { id: 'd', text: 'He never accepted it and retracted the paper' },
        ],
        explanation:
          'Planck treated the discreteness as a property of his hypothetical oscillators, not of light, and as a mathematical device. What turned it into physics was Einstein applying the same assumption, five years later, to a completely different experiment.',
      },
      {
        id: 'why-h-small',
        prompt: 'Why does the world look continuous despite energy being quantised?',
        options: [
          { id: 'a', text: 'Quantisation applies only to light, not to matter' },
          {
            id: 'b',
            text: 'h is extraordinarily small, so for everyday processes the action involved is astronomically larger than one quantum',
            correct: true,
          },
          { id: 'c', text: 'Quantum effects average out to zero over large numbers of particles' },
          { id: 'd', text: 'Quantisation switches off above a certain size' },
        ],
        explanation:
          'There is no size at which the rules change. h = 6.6 × 10⁻³⁴ J·s, so a swinging pendulum involves about 10³⁴ quanta of action and its level spacing is unmeasurable. The graininess is real and far below any resolution we have.',
      },
    ],
  },

  'photons-and-photoelectric': {
    summary: {
      essential:
        'Light ejects electrons from a metal only above a threshold frequency, however bright it is; above the threshold, even faint light works instantly, and extra brightness gives more electrons rather than faster ones. Einstein explained this with light quanta of energy hf: one quantum, one electron, E_max = hf − φ.',
      detailed:
        'Every element of the classical prediction fails. Classically, energy arrives continuously, so dim light should work after a delay, brighter light should give more energetic electrons, and there should be no threshold. Measured: no delay, no energy dependence on intensity, a sharp threshold. The decisive test is that a plot of stopping voltage against frequency is a straight line whose slope is h/e — independent of which metal — and whose intercept gives that metal’s work function. Millikan measured it in 1916 to about 0.5%, while disbelieving the hypothesis he was confirming.',
    },
    questions: [
      {
        id: 'intensity',
        prompt: 'Below the threshold frequency, what happens if you make the light much brighter?',
        options: [
          { id: 'a', text: 'Electrons are ejected, but more slowly' },
          { id: 'b', text: 'Nothing — no electrons are ejected at any intensity', correct: true },
          { id: 'c', text: 'Electrons are ejected after a delay proportional to the intensity' },
          { id: 'd', text: 'Electrons are ejected with lower energy than above the threshold' },
        ],
        explanation:
          'One photon interacts with one electron. If a single photon does not carry enough energy to free an electron, sending more of them does not help any individual electron — it only means more transactions that each fail.',
      },
      {
        id: 'what-it-shows',
        prompt: 'What does the photoelectric effect strictly establish about light?',
        options: [
          { id: 'a', text: 'That light travels as a stream of small hard particles' },
          {
            id: 'b',
            text: 'That light exchanges energy with matter in discrete amounts proportional to frequency',
            correct: true,
          },
          { id: 'c', text: 'That light is not a wave at all' },
          { id: 'd', text: 'That photons have mass' },
        ],
        explanation:
          'The result is about interaction, not about how light travels. Photons have no definite position in flight, interfere with themselves, and are created and destroyed freely — the modern description is a quantised excitation of the electromagnetic field, not a pellet.',
      },
    ],
  },

  'atomic-spectra-bohr': {
    summary: {
      essential:
        'Hot gases emit light at a few exact wavelengths — a barcode unique to each element and identical anywhere in the Universe. Bohr explained hydrogen’s in 1913 by allowing only certain electron states and having light emitted when the electron drops between them, with hf equal to the energy difference. The energies came out exactly right.',
      detailed:
        'Keep the part that survives and discard the rest. What survives: atomic energies are discrete, and spectral lines are transitions between them. That is exactly correct and is retained by quantum mechanics. What had to go: circular orbits, the arbitrary rule L = nħ, and the assertion that an orbiting electron does not radiate. Bohr’s model also fails outright for helium, gives no way to compute line intensities, and requires the ground state to have angular momentum ħ when it actually has zero. It is scaffolding — right enough to prove discreteness lives inside the atom, wrong enough to force something deeper.',
    },
    questions: [
      {
        id: 'what-lines-mean',
        prompt: 'What do the discrete lines in an atomic spectrum correspond to?',
        options: [
          { id: 'a', text: 'The different sizes of atoms in the sample' },
          { id: 'b', text: 'Differences between the atom’s allowed energy levels', correct: true },
          { id: 'c', text: 'The orbital speeds of electrons around the nucleus' },
          { id: 'd', text: 'Resonances of the container the gas is held in' },
        ],
        explanation:
          'Each photon carries exactly the energy difference between two levels, so hf = E₂ − E₁. Because the levels are discrete, the frequencies are discrete. The barcode is a picture of the atom’s allowed energies.',
      },
      {
        id: 'why-withdrawn',
        prompt: 'Why is the Bohr model taught and then withdrawn?',
        options: [
          { id: 'a', text: 'It is a simplified version of the correct quantum picture' },
          {
            id: 'b',
            text: 'It gets the hydrogen energies right for the wrong reasons: there are no orbits, the ground state has zero angular momentum, and it fails for helium',
            correct: true,
          },
          { id: 'c', text: 'Its predicted wavelengths were later found to be inaccurate' },
          {
            id: 'd',
            text: 'It was superseded by a model with elliptical rather than circular orbits',
          },
        ],
        explanation:
          'It is not a simplification of the truth but a different, incorrect picture that happens to give the right hydrogen energies. Keep the energy-level ladder; abandon the orbits entirely.',
      },
    ],
  },

  'matter-waves': {
    summary: {
      essential:
        'De Broglie proposed that if light can behave as quanta carrying momentum, then anything with momentum has a wavelength: λ = h/p. Three years later electrons were seen diffracting off a nickel crystal at exactly the predicted wavelength. It also explained Bohr’s quantisation rule — an allowed orbit is one where a whole number of wavelengths fits.',
      detailed:
        'The standing-wave argument turns an arbitrary postulate into a mechanism. Setting 2πr = nλ with λ = h/p gives L = nħ directly, so quantisation comes from a wave fitting a space, exactly as a drum’s allowed frequencies come from its rim. The formula applies to everything: a 100 eV electron has λ ≈ 0.12 nm, comparable to atomic spacing, which is why crystals diffract electrons; a walking person has λ ≈ 10⁻³⁵ m, which is why nobody diffracts through doorways. Interference has since been demonstrated for neutrons, atoms, C₆₀, and molecules above 25,000 atomic mass units, with no barrier of principle yet found.',
    },
    questions: [
      {
        id: 'orbit-explanation',
        prompt: 'How does the matter-wave idea explain Bohr’s allowed orbits?',
        options: [
          { id: 'a', text: 'The wave pushes the electron into specific radii' },
          {
            id: 'b',
            text: 'Only orbits whose circumference fits a whole number of wavelengths let the wave reinforce rather than cancel itself',
            correct: true,
          },
          { id: 'c', text: 'The wavelength sets a minimum possible orbital radius' },
          { id: 'd', text: 'Waves can only exist at certain distances from a charge' },
        ],
        explanation:
          '2πr = nλ with λ = h/p gives L = nħ exactly. A rule Bohr had imposed by hand becomes a consequence of a wave having to join up with itself — the same mathematics that gives a guitar string its notes.',
      },
      {
        id: 'why-not-people',
        prompt: 'Why do people not show wave behaviour when walking through doorways?',
        options: [
          { id: 'a', text: 'The formula applies only to particles smaller than an atom' },
          {
            id: 'b',
            text: 'It applies, but gives a wavelength around 10⁻³⁵ m — there is no obstacle small enough to diffract it',
            correct: true,
          },
          { id: 'c', text: 'Body heat destroys the wave' },
          { id: 'd', text: 'Human bodies contain too many atoms for waves to form' },
        ],
        explanation:
          'λ = h/p applies universally; the numerator is just very small. Diffraction needs an aperture comparable to the wavelength, and 10⁻³⁵ m is twenty orders of magnitude below the Planck length.',
      },
    ],
  },

  'wave-particle-duality': {
    summary: {
      essential:
        'Quantum objects interfere, which is wave behaviour, and arrive as single localised events, which is particle behaviour. The right conclusion is not that they are secretly both — it is that "wave" and "particle" are two classical pictures borrowed from water and stones, and neither fits a third kind of thing.',
      detailed:
        'Duality is a placeholder from the 1920s, and it can be made quantitative rather than mystical: fringe visibility V and which-path distinguishability D obey V² + D² ≤ 1. Perfect path information forbids fringes, perfect fringes forbid path information, and intermediate cases are permitted and measured. Quantum field theory then dissolves the puzzle entirely: there is one entity, a field, whose wave-like evolution explains interference and whose quantised excitations explain discrete arrival. There was never a duality to reconcile — there was one thing being described with two borrowed nouns.',
    },
    questions: [
      {
        id: 'both-at-once',
        prompt:
          'In a single-particle interference experiment, when does the particle behave as a wave and when as a particle?',
        options: [
          {
            id: 'a',
            text: 'As a wave while travelling, then as a particle when it hits the screen',
          },
          {
            id: 'b',
            text: 'Neither description applies: it arrives as a single localised event, and where such events accumulate is governed by interference — both in the same run',
            correct: true,
          },
          { id: 'c', text: 'As a particle when observed and a wave when not observed' },
          { id: 'd', text: 'It alternates randomly between the two behaviours' },
        ],
        explanation:
          'Nothing switches modes. Each electron lands as one dot, and the distribution of dots is set by amplitudes interfering. Both facts hold simultaneously, which is exactly why neither classical noun is adequate.',
      },
      {
        id: 'duality-relation',
        prompt: 'What does the relation V² + D² ≤ 1 express?',
        options: [
          { id: 'a', text: 'That energy and momentum are conserved in interference experiments' },
          {
            id: 'b',
            text: 'A quantitative trade-off: gaining which-path information costs fringe contrast, in a definite and measurable proportion',
            correct: true,
          },
          { id: 'c', text: 'That the wavelength cannot exceed the slit separation' },
          { id: 'd', text: 'That detectors are never perfectly efficient' },
        ],
        explanation:
          'It turns Bohr’s verbal "complementarity" into a testable inequality, and it is a theorem of the formalism rather than an extra postulate. Partial path information gives partial fringes, by exactly the predicted amount.',
      },
    ],
  },

  'double-slit': {
    summary: {
      essential:
        'Electrons sent one at a time through two slits each arrive as a single dot, yet the dots accumulate into interference stripes with dark bands. Only one particle is in the apparatus at a time, so nothing is bumping into anything. What interferes is the probability amplitude for one route with the amplitude for the other.',
      detailed:
        'The crucial arithmetic: classical probability adds probabilities, P = P₁ + P₂, and probabilities are never negative, so opening a second route can never make an outcome less likely. Quantum mechanics adds amplitudes and squares afterwards, P = |ψ₁ + ψ₂|², and amplitudes are complex, so they can cancel. That is why opening a second slit makes some spots darker — impossible classically, and exactly what the dark bands are. Introduce any physical arrangement that records which slit was taken and the stripes vanish; it is the existence of which-path information anywhere in the world that matters, not whether a person reads it.',
    },
    questions: [
      {
        id: 'what-interferes',
        prompt: 'With only one electron in the apparatus at a time, what is interfering?',
        options: [
          { id: 'a', text: 'The electron with other electrons that passed earlier' },
          {
            id: 'b',
            text: 'The probability amplitudes for the two possible routes',
            correct: true,
          },
          { id: 'c', text: 'The electron with itself, having split into two halves' },
          { id: 'd', text: 'The electron with the electromagnetic field of the slits' },
        ],
        explanation:
          'There is no other electron, and the electron never arrives in halves — it always lands whole at one place. What combine are two complex numbers, one per route, added before squaring.',
      },
      {
        id: 'dark-bands',
        prompt:
          'Why is the existence of dark bands so decisive against a "the electron really went through one slit" account?',
        options: [
          { id: 'a', text: 'Because dark bands mean electrons were absorbed by the barrier' },
          {
            id: 'b',
            text: 'Because ignorance about which of two routes was taken can only add possibilities — opening a second slit could never make a spot darker',
            correct: true,
          },
          { id: 'c', text: 'Because the bands are evenly spaced' },
          { id: 'd', text: 'Because the pattern appears only at low intensity' },
        ],
        explanation:
          'Classical probabilities are non-negative and only accumulate. A spot that receives electrons with one slit open and almost none with both open cannot be explained by any account in which each electron simply took one route and we did not know which.',
      },
      {
        id: 'which-path',
        prompt: 'What makes the interference pattern disappear?',
        options: [
          { id: 'a', text: 'A conscious observer looking at the detector output' },
          {
            id: 'b',
            text: 'Any physical arrangement that leaves which-path information in the world, whether or not anyone reads it',
            correct: true,
          },
          { id: 'c', text: 'Increasing the electron beam intensity' },
          { id: 'd', text: 'Making the slits wider than the wavelength' },
        ],
        explanation:
          'Automated detectors with their records discarded destroy interference exactly as effectively as attentive experimenters. What matters is whether the two routes remain indistinguishable in principle — a fact about physical correlation, not about awareness.',
      },
    ],
  },

  measurement: {
    summary: {
      essential:
        'A measurement is any interaction that spreads information about a system’s state into a large number of other degrees of freedom. That coupling destroys interference — this part is calculable, measured and understood. Why one specific outcome occurs rather than another is not settled, and decoherence does not answer it.',
      detailed:
        'Two questions get run together and must be kept apart. Why do we stop seeing interference when a system interacts with its surroundings? Decoherence answers this, follows from ordinary quantum mechanics with no extra assumptions, and predicts rates that have been confirmed — a dust grain in air loses coherence in about 10⁻³¹ seconds. Why does a measurement yield one definite result? Decoherence converts a coherent superposition into something that looks like a classical mixture if you examine the system alone; it does not select an outcome. Born’s rule supplies the probabilities perfectly and stays silent about the individual case.',
    },
    questions: [
      {
        id: 'what-counts',
        prompt: 'What physically distinguishes an interaction that counts as a measurement?',
        options: [
          {
            id: 'a',
            text: 'It involves a human experimenter or a recording device someone will read',
          },
          {
            id: 'b',
            text: 'It spreads information about the state into many other degrees of freedom, making the alternatives practically impossible to re-interfere',
            correct: true,
          },
          { id: 'c', text: 'It transfers energy to the system being measured' },
          { id: 'd', text: 'It occurs at a specific instant rather than continuously' },
        ],
        explanation:
          'Nature performs vastly more measurements than laboratories do — a photon absorbed by a dust grain qualifies. Interference requires the alternatives to stay indistinguishable in principle, and copying the difference into 10²³ air molecules ends that permanently.',
      },
      {
        id: 'decoherence-limits',
        prompt: 'What does decoherence explain, and what does it leave open?',
        options: [
          {
            id: 'a',
            text: 'It explains both why interference vanishes and why one outcome occurs',
          },
          {
            id: 'b',
            text: 'It explains why interference vanishes; it does not explain why one alternative is the one that actually happens',
            correct: true,
          },
          { id: 'c', text: 'It explains why one outcome occurs but not why interference vanishes' },
          { id: 'd', text: 'It explains neither and is only an approximation' },
        ],
        explanation:
          'After decoherence the total state of system plus environment is still a superposition; it merely looks like a classical mixture when you examine the system alone. The step from that to a single realised outcome is the measurement problem, and it is unsolved.',
      },
      {
        id: 'born',
        prompt: 'What does Born’s rule provide?',
        options: [
          { id: 'a', text: 'A prediction of which outcome will occur in any individual run' },
          {
            id: 'b',
            text: 'The probability of each outcome, as the squared magnitude of its amplitude',
            correct: true,
          },
          { id: 'c', text: 'The time at which a measurement will occur' },
          { id: 'd', text: 'A mechanism by which the wavefunction physically collapses' },
        ],
        explanation:
          'It gives the statistics, confirmed to extraordinary precision across every branch of physics, and says nothing about the individual case. Gleason’s theorem shows it is essentially the only consistent probability assignment on Hilbert spaces of dimension three or more.',
      },
    ],
  },

  'quantum-states': {
    summary: {
      essential:
        'A quantum state is not a list of the system’s properties. It is the object from which the probability of every possible measurement result is computed. It assigns a complex amplitude to each outcome, and squaring the magnitude gives the probability — the complexity is what lets contributions cancel.',
      detailed:
        'The piece of vocabulary that removes most later confusion is the basis. To write a state down you must choose a set of possible outcomes to express it in: position, or momentum, or energy. The same state looks entirely different in each, like a north-east arrow described as "one north plus one east" or as "1.41 along a rotated axis". A state that is a definite momentum is a broad spread of positions, because the two bases are related by a Fourier transform — and that mathematical fact, not measurement clumsiness, is where the uncertainty principle comes from.',
    },
    questions: [
      {
        id: 'why-complex',
        prompt: 'Why must amplitudes be complex numbers rather than ordinary probabilities?',
        options: [
          { id: 'a', text: 'Complex numbers make the equations easier to solve' },
          {
            id: 'b',
            text: 'They carry a phase as well as a size, so contributions from different routes can cancel — which is what interference is',
            correct: true,
          },
          { id: 'c', text: 'They allow probabilities greater than one' },
          { id: 'd', text: 'They encode the particle’s spin direction' },
        ],
        explanation:
          'Probabilities are non-negative and can only accumulate. Amplitudes have direction, so two arrows pointing opposite ways cancel. Interference is not an extra rule — it is automatic once probabilities come from squared complex amplitudes.',
      },
      {
        id: 'basis',
        prompt: 'What does choosing a basis mean?',
        options: [
          { id: 'a', text: 'Choosing which of the possible outcomes actually occurs' },
          {
            id: 'b',
            text: 'Choosing which set of possible measurement outcomes to express the state in terms of',
            correct: true,
          },
          { id: 'c', text: 'Choosing the units in which energy is measured' },
          { id: 'd', text: 'Choosing the reference frame of the observer' },
        ],
        explanation:
          'Position, momentum and energy are all valid bases, and none is the "true" one. The same physical state has completely different-looking descriptions in each, exactly as one arrow has different components in different coordinate axes.',
      },
      {
        id: 'ignorance',
        prompt:
          'Why can the quantum state not be merely a record of our ignorance about definite underlying values?',
        options: [
          { id: 'a', text: 'Because quantum states are always known exactly in the laboratory' },
          {
            id: 'b',
            text: 'Because ignorance about which route was taken could never make an outcome less likely, yet opening a second slit produces dark fringes',
            correct: true,
          },
          { id: 'c', text: 'Because ignorance would violate conservation of energy' },
          {
            id: 'd',
            text: 'Because the state contains complex numbers and ignorance is real-valued',
          },
        ],
        explanation:
          'The dark fringes rule out the comfortable "already flipped coin under a hand" reading directly. Bell’s theorem later sharpens this enormously, excluding an entire class of local pre-existing-property theories.',
      },
    ],
  },

  superposition: {
    summary: {
      essential:
        'If two states are possible, so is any combination of them. That does not mean the system secretly has one of the values, and it does not mean it is in two classical places at once. It means the amplitudes add — and interference is the evidence that they really do.',
      detailed:
        'Superposition is always superposition with respect to a chosen basis, which is why "the electron is in a superposition" is an incomplete sentence. An electron with spin definitely up along the vertical axis is, described along the horizontal axis, an equal superposition of left and right. Nothing about it changed; only the basis did. The states |L⟩ + |R⟩ and |L⟩ − |R⟩ give identical 50/50 position statistics but are physically different and distinguishable by interference — which is precisely what any "it is really one of the two" reading cannot accommodate.',
    },
    questions: [
      {
        id: 'not-two-places',
        prompt: 'What is wrong with saying a superposed particle is "in two places at once"?',
        options: [
          { id: 'a', text: 'Nothing — it is an accurate description of the state' },
          {
            id: 'b',
            text: 'It uses a classical word as though the particle had a position, twice; in such a state position has no definite value at all, hidden or otherwise',
            correct: true,
          },
          { id: 'c', text: 'It is right for photons but wrong for electrons' },
          { id: 'd', text: 'It should say "in many places at once" rather than two' },
        ],
        explanation:
          'The two-copies reading predicts the copies could be found separately, which never happens — the particle always arrives whole and once. The hidden-value reading predicts no interference. Only the amplitude account predicts both observed facts.',
      },
      {
        id: 'basis-dependence',
        prompt: 'Can a state be a superposition and also perfectly definite?',
        options: [
          { id: 'a', text: 'No — a state is either superposed or definite' },
          {
            id: 'b',
            text: 'Yes: a state definite along one axis is an equal superposition along a perpendicular one, because the two observables do not commute',
            correct: true,
          },
          { id: 'c', text: 'Only for photons, which have two polarisation states' },
          { id: 'd', text: 'Only immediately after a measurement' },
        ],
        explanation:
          'Spin-½ makes it concrete: |+z⟩ = (|+x⟩ + |−x⟩)/√2. So "is it in a superposition?" has no answer until you say superposition of what — and much popular confusion comes from leaving that unanswered.',
      },
      {
        id: 'cat',
        prompt: 'What was Schrödinger’s intention in describing the cat?',
        options: [
          { id: 'a', text: 'To illustrate how nature genuinely behaves at all scales' },
          {
            id: 'b',
            text: 'To argue that something had gone wrong — it was a reductio, not an illustration',
            correct: true,
          },
          { id: 'c', text: 'To demonstrate that measurement requires a conscious observer' },
          { id: 'd', text: 'To propose an experiment that was later performed' },
        ],
        explanation:
          'He was objecting: if the formalism gives a superposed cat, the formalism seems absurd. Decoherence answers the interference half of his objection — a cat decoheres essentially instantly — but not the question of why a single outcome is realised.',
      },
    ],
  },

  uncertainty: {
    summary: {
      essential:
        'A state cannot have both a sharp position and a sharp momentum: σ_x σ_p ≥ ħ/2. This is not about clumsy instruments. It is the same fact as a short click having no definite pitch — narrow in one description means broad in the other, and once momentum is a wavelength, the two are Fourier partners.',
      detailed:
        'The relation is a property of the state before anyone measures anything: prepare a million identical particles, measure position on half and momentum on the other half, and the two spreads still obey it with no measurement ever disturbing the quantity it did not measure. There is a separate, genuine result about measurement disturbance with its own different inequalities. The consequences are physical, not philosophical: hydrogen has a size because confining the electron raises its kinetic energy faster than the Coulomb attraction lowers its potential energy, and a crude uncertainty estimate reproduces both the Bohr radius and −13.6 eV.',
    },
    questions: [
      {
        id: 'not-disturbance',
        prompt: 'Is the uncertainty relation caused by measurement disturbing the system?',
        options: [
          {
            id: 'a',
            text: 'Yes — measuring position necessarily kicks the particle and spoils its momentum',
          },
          {
            id: 'b',
            text: 'No — it is a property of the state itself, and holds across separate measurements on identically prepared systems where no disturbance occurs',
            correct: true,
          },
          { id: 'c', text: 'Yes, but only for measurements using photons' },
          { id: 'd', text: 'Only for particles smaller than an atom' },
        ],
        explanation:
          'The disturbance story was Heisenberg’s first attempt and leaves readers thinking better technology would help. It would not: a state with both quantities sharp does not exist in the theory. Measurement disturbance is a real but separate result with different inequalities.',
      },
      {
        id: 'analogy',
        prompt: 'Which everyday fact is the closest exact analogue of the uncertainty relation?',
        options: [
          { id: 'a', text: 'A camera cannot focus on near and far objects at once' },
          {
            id: 'b',
            text: 'A very short sound has no definite pitch, while a sustained note does',
            correct: true,
          },
          { id: 'c', text: 'A thermometer changes the temperature of what it measures' },
          { id: 'd', text: 'You cannot know both the position and colour of a moving car' },
        ],
        explanation:
          'It is the same theorem, not merely a similar-sounding one. Narrow in time means broad in frequency for any wave, and de Broglie’s λ = h/p makes momentum a wavelength — so the wave theorem becomes physics with ħ setting the scale.',
      },
      {
        id: 'atom-size',
        prompt: 'How does the uncertainty principle explain why atoms have a size?',
        options: [
          { id: 'a', text: 'It sets a minimum distance below which particles cannot approach' },
          {
            id: 'b',
            text: 'Squeezing the electron into a smaller region raises its momentum spread and kinetic energy faster than the attraction lowers its potential energy',
            correct: true,
          },
          { id: 'c', text: 'It prevents electrons from radiating energy' },
          { id: 'd', text: 'It makes the nucleus repel the electron at short range' },
        ],
        explanation:
          'Minimising ħ²/2mr² − e²/4πε₀r gives r = a₀ = 0.529 Å and E = −13.6 eV. That a crude inequality reproduces both the size and binding energy shows the principle, not any orbit, is doing the physical work.',
      },
    ],
  },

  'schrodinger-equation': {
    summary: {
      essential:
        'The Schrödinger equation is quantum mechanics’ law of motion: give it the state now and it hands you the state later, exactly. It contains no randomness whatsoever. It is linear, which is why superpositions persist, and it conserves probability. All the randomness enters at one point — the rule that measurement yields one outcome.',
      detailed:
        'Energy quantisation is not assumed by the equation; it emerges from it. Confine a particle and only certain wave shapes satisfy the boundary conditions, exactly as a pinned guitar string admits only certain wavelengths. Each shape has one energy, and everything between is not a solution. Solve for a box and you get E_n = n²π²ħ²/2mL²; solve for the Coulomb potential and you get the hydrogen levels with the right degeneracies. Bohr’s hand-waved rule finally has a derivation. The equation’s limits are also worth naming: it is non-relativistic and describes a fixed number of particles, both of which quantum field theory removes.',
    },
    questions: [
      {
        id: 'deterministic',
        prompt: 'Is the Schrödinger equation deterministic?',
        options: [
          { id: 'a', text: 'No — it predicts only probabilities at every step' },
          {
            id: 'b',
            text: 'Yes, completely: given the state now it gives the state later exactly. Randomness enters only at measurement',
            correct: true,
          },
          { id: 'c', text: 'Only for systems with no external potential' },
          { id: 'd', text: 'Only when the wavefunction is real-valued' },
        ],
        explanation:
          'Between measurements the state evolves as predictably as a Newtonian trajectory. Quantum theory contains two rules for how states change — smooth unitary evolution and the abrupt measurement update — and the asymmetry between them is exactly what interpretations argue about.',
      },
      {
        id: 'quantisation-source',
        prompt: 'Where does energy quantisation come from in this framework?',
        options: [
          { id: 'a', text: 'It is postulated separately, as Bohr did' },
          {
            id: 'b',
            text: 'From boundary conditions: in a confining potential only certain wave shapes are solutions, and each has a definite energy',
            correct: true,
          },
          { id: 'c', text: 'From the discreteness of the Planck constant' },
          { id: 'd', text: 'From the exclusion principle' },
        ],
        explanation:
          'It is the drum-and-guitar-string mathematics applied to matter waves. Nothing is quantised by decree — the discreteness follows from a wave equation plus the requirement that the solution behave sensibly at the boundaries.',
      },
    ],
  },

  'operators-and-observables': {
    summary: {
      essential:
        'Every measurable quantity is represented by an operator rather than a number. The possible results are its eigenvalues, and nothing else can ever come out. Whether two quantities can both be sharp at once depends on whether their operators commute — that is, whether applying them in either order gives the same answer.',
      detailed:
        'Requiring operators to be Hermitian is not an arbitrary technicality: it is exactly the condition that guarantees real eigenvalues, which is forced by the fact that instruments read real numbers. As a bonus it guarantees the eigenvectors form a complete set, so any state can be expanded in possible outcomes. When [Â,B̂] ≠ 0 no state is a simultaneous eigenstate of both, and the general relation σ_A σ_B ≥ ½|⟨[Â,B̂]⟩| follows. Given the demands for real outcomes, conserved probability and a complex vector space, most of quantum mechanics’ structure is forced rather than chosen.',
    },
    questions: [
      {
        id: 'commuting',
        prompt: 'When can two quantities both have sharp values in the same state?',
        options: [
          { id: 'a', text: 'When both are conserved quantities' },
          {
            id: 'b',
            text: 'When their operators commute — applying them in either order gives the same result',
            correct: true,
          },
          { id: 'c', text: 'When they are measured simultaneously by the same instrument' },
          { id: 'd', text: 'Whenever the state is an energy eigenstate' },
        ],
        explanation:
          'Commuting operators share a complete set of eigenstates, so a state can be an eigenstate of both. When [x̂,p̂] = iħ ≠ 0, no such shared state exists — and the size of the commutator sets the floor in the uncertainty relation.',
      },
      {
        id: 'hermitian',
        prompt: 'Why must observables be represented by Hermitian operators?',
        options: [
          { id: 'a', text: 'To make the mathematics easier to compute' },
          {
            id: 'b',
            text: 'Because Hermitian operators have real eigenvalues, and measurements read real numbers',
            correct: true,
          },
          { id: 'c', text: 'Because it guarantees the system is stable' },
          { id: 'd', text: 'Because it makes time evolution deterministic' },
        ],
        explanation:
          'One physically motivated requirement delivers the whole structure: real eigenvalues for possible results, and a complete eigenbasis so any state can be expanded in them. The same reasoning forces time evolution to be unitary, so probabilities keep summing to one.',
      },
    ],
  },

  spin: {
    summary: {
      essential:
        'Electrons carry angular momentum and behave as tiny magnets, but nothing is rotating — a point particle has no parts to go round. Spin is intrinsic, quantised in half-units of ħ, and along any axis you choose the result is always +ħ/2 or −ħ/2, never zero and never anything between.',
      detailed:
        'The sequential Stern–Gerlach experiment is the most instructive result in elementary quantum mechanics. Filter for "up" along the vertical axis, measure along the horizontal, and the beam splits fifty-fifty; now measure vertical again and it splits again, even though every atom in it was up a moment before. No hidden list of answers survives that. The rotating-ball picture also fails numerically: the electron’s radius is bounded below 10⁻¹⁸ m, so its surface would exceed light speed, and rotation gives g ≈ 1 against the measured 2.0023. Most tellingly, a 360° rotation multiplies a spin-½ state by −1 — only 720° returns it, measured directly in neutron interferometry.',
    },
    questions: [
      {
        id: 'sequential',
        prompt:
          'You filter a beam for spin-up along z, then measure along x, then measure along z again. What happens at the third step?',
        options: [
          { id: 'a', text: 'All atoms are still spin-up along z' },
          { id: 'b', text: 'The beam splits fifty-fifty again', correct: true },
          { id: 'c', text: 'The beam is entirely spin-down along z' },
          { id: 'd', text: 'No atoms emerge at all' },
        ],
        explanation:
          'Measuring x prepares a state with no definite z component, because the two observables do not commute. Nothing was disturbed by clumsiness — the second measurement prepared a different state, and the third measures that one.',
      },
      {
        id: 'not-rotating',
        prompt: 'What is the strongest evidence that spin is not literal rotation?',
        options: [
          { id: 'a', text: 'Electrons are too light to carry angular momentum' },
          {
            id: 'b',
            text: 'A 360° rotation multiplies a spin-½ state by −1; only 720° returns it, which nothing made of rotating parts does',
            correct: true,
          },
          { id: 'c', text: 'Spin cannot be measured along more than one axis' },
          { id: 'd', text: 'Spin has no associated magnetic moment' },
        ],
        explanation:
          'This was measured with neutron interferometry by rotating the spin in one arm and watching the interference shift. Combined with the surface-speed problem and the g ≈ 2 result, the rotating-ball picture fails on every count.',
      },
    ],
  },

  'pauli-and-statistics': {
    summary: {
      essential:
        'Fermions — electrons, protons, quarks — cannot occupy the same state as an identical fermion. Bosons — photons, gluons — pile happily into the same state. That single division explains why matter is solid, why the periodic table has its shape, and why lasers and superfluids work.',
      detailed:
        'The rule is not a force. It comes from a symmetry requirement: swapping two identical fermions changes the sign of the state, so if they were in the same state the swap would have to leave it unchanged and flip its sign at once, forcing the state to be zero — it does not exist. The spin-statistics theorem ties the family to the spin: half-integer means fermion, integer means boson. The mechanical consequences are enormous: electron degeneracy pressure supports white dwarfs with no heat involved, and the Chandrasekhar limit follows from this counting plus special relativity.',
    },
    questions: [
      {
        id: 'why-solid',
        prompt: 'What is the dominant reason you cannot push your hand through a table?',
        options: [
          { id: 'a', text: 'Electrical repulsion between the electrons in each' },
          {
            id: 'b',
            text: 'Electrons cannot enter states already occupied, so compressing the two together requires promoting electrons to higher energies',
            correct: true,
          },
          { id: 'c', text: 'The strong nuclear force binding the atoms' },
          { id: 'd', text: 'Friction between the surfaces' },
        ],
        explanation:
          'Electrical repulsion contributes but is not the main effect. Solidity is the exclusion principle felt directly — the same effect that supports a white dwarf against its own gravity with no heat and no repulsion involved.',
      },
      {
        id: 'periodic-table',
        prompt: 'Why does the periodic table have columns of chemically similar elements?',
        options: [
          { id: 'a', text: 'Because elements in a column have similar atomic masses' },
          {
            id: 'b',
            text: 'Because exclusion forces electrons to stack into shells, and elements with the same outer-shell configuration behave alike',
            correct: true,
          },
          { id: 'c', text: 'Because they were discovered in the same historical period' },
          { id: 'd', text: 'Because they have the same number of neutrons' },
        ],
        explanation:
          'If electrons ignored each other they would all sit in the 1s state and every element would behave identically. Stacking creates outer shells, and chemistry is almost entirely about the outermost electrons.',
      },
      {
        id: 'not-a-force',
        prompt: 'Is the exclusion principle a force?',
        options: [
          { id: 'a', text: 'Yes — it is a short-range repulsion between identical fermions' },
          {
            id: 'b',
            text: 'No — it is a constraint on which states are available; the resulting pressure comes from the energy cost of the states that remain',
            correct: true,
          },
          { id: 'c', text: 'Yes, mediated by the exchange of virtual photons' },
          { id: 'd', text: 'It is a force only at temperatures near absolute zero' },
        ],
        explanation:
          'There is no exclusion field and no exchange particle. It is a bookkeeping fact about counting states that has the mechanical consequences of an enormously strong repulsion — and does not vanish at absolute zero.',
      },
    ],
  },

  entanglement: {
    summary: {
      essential:
        'Two particles can share a state that cannot be written as a state for each separately. Neither has properties of its own; only the pair does. Measurements on the two are correlated more strongly than any pre-arranged agreement allows — and the correlation cannot carry a message.',
      detailed:
        'The glove analogy is the one to beat, and it nearly works: two gloves posted apart are anticorrelated in handedness, and nothing travels when you open a box. What breaks it is that an entangled pair is perfectly anticorrelated along *every* axis simultaneously, not just one. A pre-packed pair would need matching answers ready for every possible measurement direction — conceivable, and exactly what Bell showed makes different predictions. No-signalling is a theorem, not luck: Bob’s reduced density matrix is unchanged by anything Alice does, so his data contains no pattern for a message to be encoded in.',
    },
    questions: [
      {
        id: 'signalling',
        prompt: 'Can entanglement be used to send a message faster than light?',
        options: [
          { id: 'a', text: 'Yes, but only one bit at a time' },
          {
            id: 'b',
            text: 'No — Bob’s statistics are identical whatever Alice does, so there is no pattern in his data to encode anything in',
            correct: true,
          },
          { id: 'c', text: 'Yes, which is why quantum computers are fast' },
          { id: 'd', text: 'Only if the particles were prepared less than a light-second apart' },
        ],
        explanation:
          'This is a theorem: any local operation Alice performs leaves Bob’s reduced density matrix untouched. The correlation becomes visible only when the two lists of results are compared, which requires an ordinary light-speed-or-slower channel.',
      },
      {
        id: 'glove-fails',
        prompt: 'Where does the "two gloves in two boxes" analogy break down?',
        options: [
          { id: 'a', text: 'Gloves are macroscopic and quantum rules do not apply to them' },
          {
            id: 'b',
            text: 'An entangled pair is perfectly anticorrelated along every measurement axis at once, not just one property like handedness',
            correct: true,
          },
          { id: 'c', text: 'Gloves cannot be separated by large distances' },
          {
            id: 'd',
            text: 'The analogy implies faster-than-light signalling, which entanglement forbids',
          },
        ],
        explanation:
          'A pre-packed pair would need a matching answer ready for every possible axis. That is conceivable — and Bell showed such a scheme makes measurably different predictions from quantum mechanics, which experiments then decided against it.',
      },
      {
        id: 'teleportation',
        prompt: 'What does quantum teleportation require in addition to entanglement?',
        options: [
          { id: 'a', text: 'Nothing else — the state simply appears at the destination' },
          {
            id: 'b',
            text: 'Classical bits sent by ordinary means at light speed or slower',
            correct: true,
          },
          { id: 'c', text: 'A physical channel to transport the original particle' },
          { id: 'd', text: 'A copy of the original state made before transmission' },
        ],
        explanation:
          'Without those classical bits the receiving end has nothing but noise. The classical channel is not a technicality — it is what keeps the protocol causal. Nothing material is transported, and the original state is destroyed, as the no-cloning theorem requires.',
      },
    ],
  },

  'bell-theorem': {
    summary: {
      essential:
        'Bell showed that if measurement results are fixed in advance by properties the particles carry, and nothing influences the distant detector faster than light, a certain combination of correlations cannot exceed 2. Quantum mechanics predicts up to 2.83, and experiments measure above 2. One of those two assumptions is false.',
      detailed:
        'What makes the theorem extraordinary is that it does not assume quantum mechanics. It derives a bound that any theory obeying two conditions must satisfy, whatever its details — the hidden instruction sheets can be arbitrarily complicated and depend on anything in the particles’ shared past. Nature exceeds the bound, so this is an experimental fact about the world rather than about the formalism. Loopholes mattered for decades: low detector efficiency, and settings chosen early enough for a light-speed signal to matter. Three groups closed the main ones simultaneously in 2015, with the Delft experiment using electron spins 1.3 km apart.',
    },
    questions: [
      {
        id: 'assumptions',
        prompt: 'Which two assumptions does Bell’s inequality rest on?',
        options: [
          { id: 'a', text: 'That quantum mechanics is correct and that measurements are accurate' },
          {
            id: 'b',
            text: 'That results are determined by properties the particles carry, and that a choice at one detector cannot influence the distant outcome',
            correct: true,
          },
          { id: 'c', text: 'That the particles are identical and that they were created together' },
          {
            id: 'd',
            text: 'That the detectors are perfectly efficient and the source is unbiased',
          },
        ],
        explanation:
          'The derivation assumes nothing about quantum mechanics at all, which is why the result would have stood even if quantum theory had turned out to be wrong. It is a constraint on a whole class of possible theories.',
      },
      {
        id: 'what-ruled-out',
        prompt: 'What do Bell-test violations establish?',
        options: [
          { id: 'a', text: 'That influences travel faster than light' },
          { id: 'b', text: 'That local hidden-variable theories are ruled out', correct: true },
          { id: 'c', text: 'That the many-worlds interpretation is correct' },
          { id: 'd', text: 'That measurement requires a conscious observer' },
        ],
        explanation:
          'The result is a negative one, and it is enormous: an entire natural class of explanations is dead. It does not identify which assumption fails, does not establish superluminal influence, and does not select an interpretation.',
      },
      {
        id: 'loopholes',
        prompt: 'What was the point of closing the detection and locality loopholes?',
        options: [
          { id: 'a', text: 'To increase the measured value of S beyond 2.83' },
          {
            id: 'b',
            text: 'To remove the possibility that a local model could explain the results through undetected pairs or through settings chosen early enough to be signalled',
            correct: true,
          },
          { id: 'c', text: 'To demonstrate entanglement over longer distances' },
          { id: 'd', text: 'To confirm that the source produced exactly one pair at a time' },
        ],
        explanation:
          'Both loopholes offered a local escape route. High-efficiency detection closes the first; fast random settings with enough separation close the second. Delft closed both at once with electron spins 1.3 km apart in 2015.',
      },
    ],
  },

  tunnelling: {
    summary: {
      essential:
        'A quantum particle can appear on the far side of a barrier it does not have the energy to climb. The wavefunction does not stop at the barrier — it decays exponentially inside it, and if the barrier is thin enough, some amplitude survives to the other side as a genuine probability of being found there.',
      detailed:
        'The transmission probability falls exponentially with barrier width and with the square root of the particle’s mass, which is why tunnelling is ubiquitous for electrons and unobservable for tennis balls — the exponential does the work of a size cut-off that the equations do not contain. Three consequences are decisive rather than curious: alpha decay, where Gamow’s theory spans twenty orders of magnitude of half-life; solar fusion, where protons at 1.4 keV must cross a barrier of hundreds of keV and the Sun would not shine without tunnelling; and scanning tunnelling microscopy, where a one-atom change in tip height alters the current by about an order of magnitude.',
    },
    questions: [
      {
        id: 'energy',
        prompt: 'Does a tunnelling particle borrow energy to cross the barrier?',
        options: [
          {
            id: 'a',
            text: 'Yes — it borrows from the vacuum and repays it, as the time–energy relation permits',
          },
          {
            id: 'b',
            text: 'No — energy is conserved exactly; what fails is the classical assumption that a particle has a definite position and trajectory',
            correct: true,
          },
          { id: 'c', text: 'Yes, it absorbs a photon from the barrier material' },
          { id: 'd', text: 'It converts mass into energy temporarily' },
        ],
        explanation:
          'The particle has the same energy before and after and is never found with more than it started with. The borrowing story is a loose gloss on the time–energy relation; the honest account is that the wave equation gives a decaying rather than vanishing solution in the forbidden region.',
      },
      {
        id: 'sun',
        prompt: 'Why is tunnelling essential to the Sun?',
        options: [
          { id: 'a', text: 'It lets photons escape from the dense core' },
          {
            id: 'b',
            text: 'Protons at core temperatures have far too little energy to overcome their mutual repulsion, so fusion proceeds only because a fraction tunnel through',
            correct: true,
          },
          { id: 'c', text: 'It allows neutrinos to pass through the Sun’s outer layers' },
          { id: 'd', text: 'It prevents the core from collapsing under gravity' },
        ],
        explanation:
          'The core is at 15.7 million kelvin, giving protons about 1.4 keV against a Coulomb barrier of hundreds of keV. Classically fusion would essentially never happen, and the Sun would not shine.',
      },
      {
        id: 'exponential',
        prompt: 'Why is scanning tunnelling microscopy able to resolve individual atoms?',
        options: [
          { id: 'a', text: 'Because the tip is sharpened to a single atom' },
          {
            id: 'b',
            text: 'Because the tunnelling current depends exponentially on distance, so a change of one atomic diameter changes it by about an order of magnitude',
            correct: true,
          },
          { id: 'c', text: 'Because electrons have a wavelength smaller than an atom' },
          { id: 'd', text: 'Because the surface is cooled to near absolute zero' },
        ],
        explanation:
          'The exponential sensitivity is the whole instrument. For a typical barrier the current falls by a factor of about 7.4 for each additional 0.1 nm, which converts a tiny height difference into a large, measurable signal.',
      },
    ],
  },

  'atomic-structure': {
    summary: {
      essential:
        'Solving the Schrödinger equation for an electron near a nucleus gives orbitals: three-dimensional standing waves, dense in some regions and thin in others. An orbital is not a path. Where the wave is intense the electron is likely to be found, and the shape decides how the atom bonds.',
      detailed:
        'Three quantum numbers fall out of the mathematics rather than being imposed — n for energy and size, l for shape, m for orientation — because a wave wrapped around a sphere must match itself after a full turn, and must die away at large distance while staying finite at the origin. Their allowed ranges (l < n, |m| ≤ l) come free, giving n² orbitals and 2n² electron states per shell. In a stationary state the probability distribution does not change with time at all, which is exactly why the atom does not radiate and collapse. The pictures are 90%-probability surfaces, not walls, and exact orbitals exist only for one-electron atoms.',
    },
    questions: [
      {
        id: 'not-orbits',
        prompt: 'What is an orbital?',
        options: [
          { id: 'a', text: 'The path an electron follows around the nucleus' },
          {
            id: 'b',
            text: 'A three-dimensional standing wave giving the probability of finding the electron at each place',
            correct: true,
          },
          { id: 'c', text: 'The shell in which a fixed number of electrons is stored' },
          { id: 'd', text: 'The region within which the electron is definitely confined' },
        ],
        explanation:
          'There are no paths. In a stationary state nothing changes with time — the electron does not zip around inside the cloud too fast to see, and that time-independence is precisely why the atom is stable.',
      },
      {
        id: 'quantum-numbers',
        prompt: 'Where do the three quantum numbers come from?',
        options: [
          { id: 'a', text: 'They were fitted to spectroscopic data' },
          {
            id: 'b',
            text: 'From boundary conditions — the wave must match itself around a sphere and behave sensibly at the origin and at infinity',
            correct: true,
          },
          { id: 'c', text: 'They were postulated by Bohr and retained' },
          { id: 'd', text: 'They count the electron’s spin, charge and mass' },
        ],
        explanation:
          'They are boundary conditions in disguise, which is why their allowed ranges follow automatically rather than being separate rules. The same logic gives a drum its allowed vibration patterns.',
      },
      {
        id: 'shapes',
        prompt: 'Why do orbital shapes matter beyond physics?',
        options: [
          { id: 'a', text: 'They determine the atom’s mass' },
          {
            id: 'b',
            text: 'They fix the directions in which atoms bond — which is why water is bent and carbon builds tetrahedra',
            correct: true,
          },
          { id: 'c', text: 'They determine which isotopes are stable' },
          { id: 'd', text: 'They set the colour of every element' },
        ],
        explanation:
          'Water’s 104.5° bond angle follows from the arrangement around oxygen, and it gives the molecule its dipole moment — hence water’s solvent behaviour, hence ice floating. A quantum-mechanical angle propagating up to planetary habitability.',
      },
    ],
  },

  'chemistry-and-materials': {
    summary: {
      essential:
        'Bring two atoms together and their electron waves overlap. Combined in phase, electron density builds up between the nuclei and pulls them together — a bond. Repeat across a crystal and the levels smear into bands, and whether the top occupied band is full or partly full decides metal, insulator or semiconductor.',
      detailed:
        'The molecular-orbital account makes real predictions rather than describing after the fact: two hydrogen atoms give one bonding and one antibonding orbital, two electrons fill the bonding one, and H₂ is stable; two helium atoms give four electrons, the antibonding orbital fills too, the gain cancels, and He₂ does not form. Band structure then explains conduction. Silicon’s 1.12 eV gap against k_BT ≈ 0.026 eV at room temperature is small enough to bridge by doping and large enough to switch off cleanly — the whole of digital electronics rests on that number being in the right range.',
    },
    questions: [
      {
        id: 'why-bond',
        prompt: 'Why do two hydrogen atoms bond?',
        options: [
          { id: 'a', text: 'Their nuclei attract each other electrostatically' },
          {
            id: 'b',
            text: 'In-phase overlap builds electron density between the nuclei, and spreading the wave over a larger region lowers the total energy',
            correct: true,
          },
          { id: 'c', text: 'The exclusion principle pushes their electrons together' },
          { id: 'd', text: 'They exchange a photon that binds them' },
        ],
        explanation:
          'The bonding orbital lowers both the kinetic energy, by letting the wave spread, and the potential energy, by placing charge between two protons. The test of the account is that it also correctly predicts He₂ does not form.',
      },
      {
        id: 'bands',
        prompt: 'What distinguishes a metal from an insulator in band theory?',
        options: [
          { id: 'a', text: 'Metals have more electrons per atom' },
          {
            id: 'b',
            text: 'A metal’s highest occupied band is only partly full, so electrons have empty states to move into',
            correct: true,
          },
          { id: 'c', text: 'Insulators have no free electrons at all' },
          { id: 'd', text: 'Metals have smaller atoms, allowing electrons to hop between them' },
        ],
        explanation:
          'A full band cannot conduct because there is nowhere for an electron to go. A partly full band gives states immediately above the occupied ones, so a field accelerates electrons — and a small gap that doping can bridge gives a semiconductor.',
      },
    ],
  },

  'why-world-looks-classical': {
    summary: {
      essential:
        'Nothing around you behaves quantum-mechanically for two reasons. h is tiny, so quantum effects on large objects are unmeasurably small. And large objects interact constantly with their surroundings, which destroys interference almost instantaneously — a dust grain in air decoheres in about 10⁻³¹ seconds.',
      detailed:
        'The second reason does the real work, because the first does not explain the absence of macroscopic superpositions, which would be a dramatic effect rather than a small one. Decoherence times fall steeply with mass, separation and environmental density, and the theory was confirmed quantitatively: interference experiments with large molecules deliberately raised the gas pressure or heated the molecules, and the fringe contrast fell exactly as calculated. Even in deep space, cosmic microwave photons decohere a dust grain in about a second. Turn the question around and the everyday world is not merely compatible with quantum mechanics — solidity, the Sun, colour and electronics are all consequences of it.',
    },
    questions: [
      {
        id: 'main-reason',
        prompt: 'Why do we never see a macroscopic object in a superposition of two locations?',
        options: [
          { id: 'a', text: 'Quantum mechanics stops applying above a certain mass' },
          {
            id: 'b',
            text: 'Constant interaction with the environment carries away which-position information, destroying coherence far faster than any experiment could look',
            correct: true,
          },
          { id: 'c', text: 'Large objects have de Broglie wavelengths that are exactly zero' },
          { id: 'd', text: 'Gravity collapses the wavefunction of anything heavy' },
        ],
        explanation:
          'There is no size at which the rules change; what changes is how long coherence survives. The smallness of h explains why quantum corrections are tiny, but not why superpositions are absent — decoherence does that.',
      },
      {
        id: 'not-solved',
        prompt: 'Does decoherence solve the measurement problem?',
        options: [
          {
            id: 'a',
            text: 'Yes — it shows the wavefunction physically collapses on contact with the environment',
          },
          {
            id: 'b',
            text: 'No — it explains the appearance of collapse, not why one alternative is realised. The full state is still a superposition',
            correct: true,
          },
          { id: 'c', text: 'Yes, for macroscopic objects, though not for single particles' },
          { id: 'd', text: 'No, because decoherence has never been experimentally observed' },
        ],
        explanation:
          'The mathematics of decoherence is common ground to every interpretation, which is exactly why it cannot decide between them. Many-worlds says nothing more is needed; collapse models add new physics; Copenhagen declines the question.',
      },
    ],
  },

  'quantum-fields': {
    summary: {
      essential:
        'The modern description starts with fields — quantities with a value everywhere — and quantises them. A particle is a discrete excitation of a field: one electron is one unit of excitation of the electron field. That is why all electrons are exactly identical, and why particles can be created and destroyed.',
      detailed:
        'The framework resolves several puzzles at once and delivers the most precise prediction in science: quantum electrodynamics gives the electron’s magnetic moment to about one part in 10¹³, matching a measurement made by entirely independent means. Its organising principle is gauge symmetry — demand that a theory be unchanged under a rearrangement applied independently at every point, and the mathematics forces new fields into existence. Those fields are the force carriers. Electromagnetism follows from U(1), the strong interaction from SU(3), the weak from SU(2). Forces are not inserted and described; they are the price of a symmetry.',
    },
    questions: [
      {
        id: 'identical',
        prompt: 'Why is every electron exactly identical to every other?',
        options: [
          { id: 'a', text: 'They were all produced by the same process in the early Universe' },
          {
            id: 'b',
            text: 'They are not separate objects but excitations of one underlying field',
            correct: true,
          },
          { id: 'c', text: 'Any differences are too small to have been measured yet' },
          { id: 'd', text: 'The exclusion principle forces them to be the same' },
        ],
        explanation:
          'Asking why two excitations of the same field are identical is like asking why two waves on the same pond obey the same wave equation. On any other account the exactness — bounded at one part in 10⁸ for electron–positron charge difference alone — would be an unexplained coincidence.',
      },
      {
        id: 'gauge',
        prompt: 'Where do the forces come from in this framework?',
        options: [
          {
            id: 'a',
            text: 'They are added to the theory as separate interaction terms chosen to fit data',
          },
          {
            id: 'b',
            text: 'Requiring a symmetry to hold independently at every point forces new fields into existence, and those fields are the force carriers',
            correct: true,
          },
          { id: 'c', text: 'They arise from the exchange of energy between particles' },
          { id: 'd', text: 'They are consequences of spacetime curvature' },
        ],
        explanation:
          'This is a striking inversion: forces are the price of insisting on a local symmetry. The photon follows from U(1), gluons from SU(3), the W and Z from SU(2) — which is why the Standard Model can be written in one line.',
      },
    ],
  },

  'standard-model': {
    summary: {
      essential:
        'The Standard Model lists the fields the Universe seems to be made of: six quarks, six leptons, the carriers of three interactions, and the Higgs. It predicted the W, Z, top quark and Higgs before they were found. It also omits gravity entirely and describes about 5% of the Universe’s energy content.',
      detailed:
        'Both halves of that assessment are firm. Successes: the Higgs was required for internal consistency, its allowed mass range narrowed for decades by indirect measurements, and it appeared in 2012 at 125 GeV inside that range, seen independently by two experiments. Limits: no dark matter candidate, nothing on dark energy, no gravity, CP violation about ten orders of magnitude short of explaining the matter–antimatter asymmetry, and neutrino masses which the original formulation forbade. Around 19 free parameters must be measured rather than derived — about 26 once neutrinos are included. Most physicists regard it as an effective theory: the low-energy limit of something not yet found.',
    },
    questions: [
      {
        id: 'predictions',
        prompt: 'What is the strongest form of evidence the Standard Model has provided?',
        options: [
          { id: 'a', text: 'It fits all existing collider data with adjustable parameters' },
          {
            id: 'b',
            text: 'It predicted particles and their masses before they were observed — the W, Z, top quark and Higgs',
            correct: true,
          },
          { id: 'c', text: 'It explains dark matter and dark energy' },
          { id: 'd', text: 'It has been derived from a deeper theory' },
        ],
        explanation:
          'A prediction made in advance cannot be a fit to existing data. The Higgs case is the sharpest: required for consistency, its mass range narrowed indirectly for decades, then found inside that range by two independent experiments.',
      },
      {
        id: 'limits',
        prompt: 'Which of these does the Standard Model NOT account for?',
        options: [
          { id: 'a', text: 'The behaviour of quarks inside protons' },
          {
            id: 'b',
            text: 'Gravity, dark matter, dark energy and the matter–antimatter asymmetry',
            correct: true,
          },
          { id: 'c', text: 'The electromagnetic interaction' },
          { id: 'd', text: 'The masses of the W and Z bosons' },
        ],
        explanation:
          'These are not small gaps. Dark matter and dark energy make up about 95% of the Universe’s energy content, and gravity is simply absent from the framework — which is why the theory is regarded as effective rather than final.',
      },
      {
        id: 'neutrinos',
        prompt: 'What did the discovery of neutrino oscillation show?',
        options: [
          { id: 'a', text: 'That neutrinos travel faster than light' },
          {
            id: 'b',
            text: 'That neutrinos have mass, which the original Standard Model did not allow',
            correct: true,
          },
          { id: 'c', text: 'That there are more than three neutrino types' },
          { id: 'd', text: 'That neutrinos are their own antiparticles' },
        ],
        explanation:
          'Oscillation between flavours requires non-zero mass differences. Super-Kamiokande established it for atmospheric neutrinos in 1998 and SNO resolved the solar neutrino problem in 2002. Whether neutrinos are their own antiparticles remains unknown.',
      },
    ],
  },

  'quantum-vacuum': {
    summary: {
      essential:
        'Remove every particle from a region and the fields remain — you cannot remove a field, only its excitations. The vacuum is their lowest-energy state. Field values there have no sharp value but a calculable spread, and that spread has measurable consequences such as the Casimir force.',
      detailed:
        'The oscillator analogy is exact. A pendulum at absolute zero cannot hang perfectly still, because that would mean a sharp position and momentum at once; its lowest state retains ½ħω and a spread of positions. A field is one oscillator per mode, so its ground state has non-zero variance in the field value everywhere. That is what "vacuum fluctuation" properly means. What it does not mean is a population of particles appearing and disappearing: the vacuum is a stationary state with particle number definitely zero, and virtual particles are terms in a perturbative expansion, not objects you could detect.',
    },
    questions: [
      {
        id: 'popping',
        prompt:
          'How should the popular claim that "empty space is full of particles popping in and out" be assessed?',
        options: [
          { id: 'a', text: 'It is an accurate description of the vacuum state' },
          {
            id: 'b',
            text: 'It is misleading: the vacuum is stationary with particle number definitely zero. What is real is that field observables have non-zero variance',
            correct: true,
          },
          { id: 'c', text: 'It is correct only in the presence of a strong gravitational field' },
          { id: 'd', text: 'It is correct, and the particles have been photographed' },
        ],
        explanation:
          'Virtual particles are internal lines in Feynman diagrams — terms in an expansion, not detectable objects. The genuine and stranger fact is that field values have a distribution rather than a value, with consequences including the Lamb shift and the Casimir force.',
      },
      {
        id: 'casimir',
        prompt: 'What does the measured Casimir force demonstrate?',
        options: [
          { id: 'a', text: 'That virtual particles physically strike the plates' },
          {
            id: 'b',
            text: 'That the vacuum has structure whose energy depends on the boundary configuration, producing a real measurable force',
            correct: true,
          },
          { id: 'c', text: 'That the plates acquire an electric charge in vacuum' },
          { id: 'd', text: 'That gravity becomes repulsive at short distances' },
        ],
        explanation:
          'The plates restrict which modes fit between them, so the vacuum energy depends on separation, and an energy that depends on separation is a force. Honestly, the effect can also be derived from relativistic van der Waals forces — so it confirms the predictions without uniquely proving one interpretive picture.',
      },
      {
        id: 'cc-problem',
        prompt: 'What is the cosmological constant problem?',
        options: [
          { id: 'a', text: 'Dark energy has never been detected' },
          {
            id: 'b',
            text: 'Naive quantum field theory estimates of the gravitating vacuum energy exceed the observed value by an enormous factor',
            correct: true,
          },
          {
            id: 'c',
            text: 'The cosmological constant changes over time in a way no theory predicts',
          },
          { id: 'd', text: 'General relativity forbids a non-zero vacuum energy' },
        ],
        explanation:
          'It is the largest quantitative mismatch between theory and observation anywhere in physics. The estimate is admittedly crude — it sums zero-point energies up to the Planck scale, exactly where the framework should not be trusted — and nobody has produced a mechanism giving the small non-zero value observed.',
      },
    ],
  },

  'quantum-gravity': {
    summary: {
      essential:
        'Quantum field theory describes matter and three interactions superbly. General relativity describes gravity and spacetime superbly. Applied to the same situation — a black hole interior, the first instant of the Universe — they give incompatible answers, and no tested theory covers both.',
      detailed:
        'The obstacle is structural. Quantum field theory puts fields on a fixed background with time as an external parameter; general relativity makes spacetime itself the thing being solved for, so there is nothing left to define "at the same time" against. Treating the metric perturbatively gives a non-renormalisable theory: each order needs new counterterms, so infinitely many parameters would have to be measured. As an effective theory below the Planck scale it works fine. The Planck scale itself — 10⁻³⁵ m, 10¹⁹ GeV — follows from dimensional analysis alone, which is why every candidate theory agrees on where the problem lives, and it is roughly 10¹⁵ times beyond collider energies.',
    },
    questions: [
      {
        id: 'why-hard',
        prompt: 'Why is combining quantum theory with general relativity structurally difficult?',
        options: [
          { id: 'a', text: 'Gravity is too weak to be measured at quantum scales' },
          {
            id: 'b',
            text: 'Quantum field theory needs a fixed background to define time and locality, and general relativity makes spacetime itself dynamical',
            correct: true,
          },
          { id: 'c', text: 'General relativity is not a mathematically consistent theory' },
          { id: 'd', text: 'The two theories use incompatible units' },
        ],
        explanation:
          'Quantising a field on a stage is well understood; quantising the stage is not, because there is then nothing to define "at the same time" or "at this point" against. Perturbative quantisation additionally fails to be renormalisable.',
      },
      {
        id: 'planck-scale',
        prompt: 'Where does the Planck scale come from?',
        options: [
          { id: 'a', text: 'From string theory’s prediction of a minimum length' },
          {
            id: 'b',
            text: 'From dimensional analysis: it is the only length that can be built from G, c and ħ',
            correct: true,
          },
          { id: 'c', text: 'From the smallest distance current experiments can probe' },
          {
            id: 'd',
            text: 'From the size of the observable Universe divided by the number of particles in it',
          },
        ],
        explanation:
          'It is not a prediction of any theory of quantum gravity, which is why every candidate agrees on roughly where the problem lives. Probing 10¹⁹ GeV directly would need a collider of roughly galactic size.',
      },
      {
        id: 'status',
        prompt: 'What is the experimental status of candidate quantum-gravity theories?',
        options: [
          { id: 'a', text: 'String theory has been confirmed; the others have been excluded' },
          {
            id: 'b',
            text: 'None has experimental support, and none has been ruled out',
            correct: true,
          },
          { id: 'c', text: 'Loop quantum gravity has been confirmed by black-hole observations' },
          { id: 'd', text: 'All have been excluded, which is why the field has stalled' },
        ],
        explanation:
          'They agree with general relativity and quantum field theory in every tested regime by construction, which is a requirement rather than a success. The correct description of the situation is that we do not know.',
      },
    ],
  },

  'string-theory': {
    summary: {
      essential:
        'String theory replaces point particles with tiny one-dimensional objects whose different vibration patterns behave as different particles. One pattern has exactly the properties of a graviton, which is why the idea drew such attention. It is a major mathematical research programme with no experimental evidence.',
      detailed:
        'Keep four things apart, because merging them is how the subject gets misreported. Mathematical framework: well-developed, internally consistent, and the source of techniques now used elsewhere in physics. Theoretical motivation: strong — smearing interactions over an extended object softens the divergences that make quantised general relativity non-renormalisable, and gravity emerges rather than being inserted. Predictions at accessible energies: essentially none, because the string scale is Planckian. Experimental evidence: none — no supersymmetric partner, no extra dimension, no string signature has been observed. Consistency also requires ten dimensions, and the number of ways to compactify the extra six is estimated around 10⁵⁰⁰, which is the landscape problem.',
    },
    questions: [
      {
        id: 'evidence',
        prompt: 'What is the experimental evidence for string theory?',
        options: [
          { id: 'a', text: 'Indirect evidence from black-hole entropy measurements' },
          {
            id: 'b',
            text: 'None — no supersymmetric partner, extra dimension or string signature has been observed',
            correct: true,
          },
          { id: 'c', text: 'The detection of gravitational waves confirmed it' },
          { id: 'd', text: 'The discovery of the Higgs boson confirmed it' },
        ],
        explanation:
          'The black-hole entropy counting is an internal mathematical success, reproducing the Bekenstein–Hawking formula for certain extremal cases — not an observation. String theory is a serious research programme that has not become an experimentally confirmed theory of nature.',
      },
      {
        id: 'why-attractive',
        prompt: 'Why did string theory attract so much attention as a route to quantum gravity?',
        options: [
          { id: 'a', text: 'It was the first theory to predict the existence of gravity' },
          {
            id: 'b',
            text: 'Extended objects soften the divergences that defeat quantised general relativity, and a massless spin-2 excitation — a graviton — appears without being inserted',
            correct: true,
          },
          { id: 'c', text: 'It requires fewer free parameters than the Standard Model' },
          { id: 'd', text: 'It made testable predictions at accessible collider energies' },
        ],
        explanation:
          'Both motivations are genuine and technical rather than aesthetic. Point-like interactions produce infinities that are fatal for gravity; the graviton emerging unforced from the vibration spectrum was the result that made the programme compelling.',
      },
      {
        id: 'landscape',
        prompt: 'What is the landscape problem?',
        options: [
          { id: 'a', text: 'String theory cannot be formulated in curved spacetime' },
          {
            id: 'b',
            text: 'There are astronomically many consistent compactifications, each giving different physics, with no principle selecting ours — so the framework predicts little in particular',
            correct: true,
          },
          { id: 'c', text: 'The extra dimensions are too large to have escaped detection' },
          { id: 'd', text: 'The theory requires more than eleven dimensions to be consistent' },
        ],
        explanation:
          'A theory that can accommodate any observation predicts nothing. Responses range from embracing a multiverse with anthropic selection to arguing the landscape is an artefact of current approximations — and to the swampland programme, which tries to extract predictions from the framework itself.',
      },
    ],
  },

  'what-is-time': {
    summary: {
      essential:
        '"What is time?" is not one question. In Newton it is a universal parameter. In relativity it is a direction in spacetime, and different paths age differently. In quantum mechanics it is an external parameter rather than an observable. In quantum gravity it becomes genuinely problematic. Each statement is correct in its own domain.',
      detailed:
        'Separating the questions makes most of the topic tractable. What a clock measures: proper time, τ = ∫√(1 − v²/c²)dt, confirmed by Hafele–Keating, by GPS, and in 2022 across a millimetre-tall sample of atoms. Why time has a direction: entropy, because there are vastly more disordered arrangements than ordered ones — though deriving that entropy was lower in the past requires the past hypothesis, an observational input from cosmology rather than a theorem. Why time appears differently in quantum mechanics: Pauli showed a self-adjoint time operator conjugate to a Hamiltonian bounded below cannot exist, so this is structural. And in canonical quantum gravity the equation ĤΨ = 0 contains no time evolution at all.',
    },
    questions: [
      {
        id: 'quantum-time',
        prompt: 'How is time treated in ordinary quantum mechanics?',
        options: [
          { id: 'a', text: 'As an observable with an operator, like position and momentum' },
          {
            id: 'b',
            text: 'As an external parameter labelling the evolution, not a measurable property',
            correct: true,
          },
          { id: 'c', text: 'As a quantity that is always perfectly sharp' },
          { id: 'd', text: 'As identical to energy, by the uncertainty relation' },
        ],
        explanation:
          'You cannot ask "what time is this system?" the way you can ask where it is. Pauli showed a self-adjoint time operator conjugate to a Hamiltonian bounded below cannot exist, and Hamiltonians must be bounded below for stable matter — so this is structural, not an oversight.',
      },
      {
        id: 'arrow',
        prompt:
          'Why do macroscopic processes have a direction when the microscopic laws are largely time-symmetric?',
        options: [
          { id: 'a', text: 'A fundamental law forbids entropy from decreasing' },
          {
            id: 'b',
            text: 'There are vastly more disordered arrangements than ordered ones, so a system started in a low-entropy state overwhelmingly moves toward higher entropy',
            correct: true,
          },
          { id: 'c', text: 'CP violation in weak decays sets the direction of time' },
          { id: 'd', text: 'Gravity always increases disorder' },
        ],
        explanation:
          'It is counting, not a law: one ordered deck against about 10⁶⁷ disordered ones. CP violation does imply T violation, and it is far too small to account for the thermodynamic arrow.',
      },
      {
        id: 'past-hypothesis',
        prompt: 'What does the entropy account of time’s arrow NOT explain?',
        options: [
          { id: 'a', text: 'Why eggs break rather than unbreak' },
          {
            id: 'b',
            text: 'Why the early Universe had such low entropy in the first place',
            correct: true,
          },
          { id: 'c', text: 'Why entropy increases in isolated systems' },
          { id: 'd', text: 'Why heat flows from hot to cold' },
        ],
        explanation:
          'The statistical argument works in both temporal directions from a given state, so deriving a low-entropy past requires an additional assumption — the past hypothesis. That is an observational input from cosmology and an open problem, not a theorem.',
      },
    ],
  },

  'does-time-exist': {
    summary: {
      essential:
        'Yes, in the sense that matters most: clocks physically change, at path-dependent rates, and the comparisons come out exactly as relativity predicts. That is a measurement, not an illusion. What is genuinely unsettled is narrower — whether time is fundamental or emerges from a deeper description without it.',
      detailed:
        'Five things get called "time" and separating them dissolves most of the paradox. Clock readings: measured and unambiguous. Proper time along a worldline: a well-defined invariant, and what a clock actually measures. Coordinate time: explicitly not unique, which is the precise content of "there is no universal now". Psychological flow: real as experience, not derived from physics. Whether time is fundamental or emergent: open. The claim that physics has proved time an illusion typically takes the third item — a genuine result about coordinates — and inflates it into a claim about the first. Earth has no master clock for the Universe; even the 13.8-billion-year age is proper time along a particular comoving worldline.',
    },
    questions: [
      {
        id: 'illusion',
        prompt: 'Has physics established that time is an illusion?',
        options: [
          { id: 'a', text: 'Yes — relativity showed time is merely a human construct' },
          {
            id: 'b',
            text: 'No. It has established that there is no universal present and that clock rates are path-dependent — both strong results, neither saying time is unreal',
            correct: true,
          },
          { id: 'c', text: 'Yes — the Wheeler–DeWitt equation proved time does not exist' },
          { id: 'd', text: 'No, and no aspect of time’s status is unresolved' },
        ],
        explanation:
          'A clock that has physically aged less than another is a measurement. The Wheeler–DeWitt equation is a feature of one unconfirmed approach to quantum gravity, not an established result about nature — and "not fundamental" would not mean "not real" in any case, as temperature shows.',
      },
      {
        id: 'universal-clock',
        prompt: 'Does the Earth define a universal time for the Universe?',
        options: [
          { id: 'a', text: 'Yes — Coordinated Universal Time is the reference for all physics' },
          {
            id: 'b',
            text: 'No. Different paths through spacetime accumulate different proper times, and no path is the correct one',
            correct: true,
          },
          {
            id: 'c',
            text: 'Yes, because Earth is at rest relative to the cosmic microwave background',
          },
          { id: 'd', text: 'Only for events within the Solar System' },
        ],
        explanation:
          'Clocks at different altitudes on Earth already run measurably differently — the effect is used to survey height geodetically. Even the quoted age of the Universe is proper time along a comoving worldline, which is a natural choice and still a choice.',
      },
      {
        id: 'interpretation',
        prompt: 'Which of these is an interpretation rather than an experimental result?',
        options: [
          { id: 'a', text: 'Clocks tick at rates depending on their path through spacetime' },
          {
            id: 'b',
            text: 'Whether all moments are equally real, or only the present is',
            correct: true,
          },
          { id: 'c', text: 'Entropy increases in isolated systems' },
          { id: 'd', text: 'There is no preferred simultaneity across space' },
        ],
        explanation:
          'Eternalism and presentism are both compatible with the physics; relativity constrains the debate substantially without settling it. The other three items are established by measurement, and keeping the two categories apart is the whole discipline of the topic.',
      },
    ],
  },

  'quantum-cosmology': {
    summary: {
      essential:
        'The leading account of cosmic structure is that galaxies exist because of quantum fluctuations. Tiny quantum variations in a field were stretched to enormous scale by inflation, froze in as slight density differences, and gravity amplified them over billions of years. The predicted statistical pattern matches the microwave background closely.',
      detailed:
        'The confidence levels differ sharply and should not be merged. Measured: the CMB has variations of about one part in 100,000 with a specific acoustic-peak structure, and n_s = 0.9649 ± 0.0042, excluding exact scale invariance at more than 8σ. Strongly supported: those variations grew into the observed galaxy distribution. Model: that they originated as quantum fluctuations stretched by inflation — impressive fit, successful predictions of flatness and the spectral tilt, and an unidentified driving field whose generic gravitational-wave signature remains undetected, with r < 0.032 now excluding several simple potentials.',
    },
    questions: [
      {
        id: 'origin-of-structure',
        prompt: 'What does inflation propose as the origin of cosmic structure?',
        options: [
          { id: 'a', text: 'Collisions between early galaxies' },
          {
            id: 'b',
            text: 'Quantum fluctuations in a field, stretched beyond the causal horizon and frozen in as density variations',
            correct: true,
          },
          { id: 'c', text: 'Turbulence in the primordial plasma' },
          { id: 'd', text: 'Gravitational waves from the Big Bang' },
        ],
        explanation:
          'A quantum field cannot be perfectly uniform — uncertainty forbids it. Rapid expansion carries a microscopic fluctuation to super-horizon scale where it stops evolving, and it re-enters later as an over- or under-density that gravity amplifies.',
      },
      {
        id: 'status',
        prompt: 'What is the status of inflation?',
        options: [
          { id: 'a', text: 'Confirmed, with the inflaton field identified' },
          {
            id: 'b',
            text: 'The leading model — impressive fit and successful predictions — but the driving field is unidentified and its generic gravitational-wave signature is undetected',
            correct: true,
          },
          { id: 'c', text: 'Excluded by the latest CMB measurements' },
          { id: 'd', text: 'A purely philosophical proposal with no observational content' },
        ],
        explanation:
          'It predicted flatness, super-horizon uniformity and the fluctuation spectrum before those were measured, which is real evidence. It also has an unidentified field, considerable flexibility, and a missing tensor signal now bounded at r < 0.032.',
      },
      {
        id: 'origin-of-universe',
        prompt: 'Does quantum cosmology explain where the Universe came from?',
        options: [
          {
            id: 'a',
            text: 'Yes — quantum mechanics shows the Universe created itself from nothing',
          },
          {
            id: 'b',
            text: 'No. It explains the origin of structure. Inflation still requires a pre-existing spacetime, a field, and laws for that field to obey',
            correct: true,
          },
          { id: 'c', text: 'Yes, through the Hartle–Hawking proposal, which has been confirmed' },
          { id: 'd', text: 'No, and no serious proposals about the initial state exist' },
        ],
        explanation:
          'Claims about creation "from nothing" use "nothing" to mean a quantum state governed by laws, which is not nothing in the sense the question intends. Serious proposals about the initial state exist, disagree with each other, and have no observational support.',
      },
    ],
  },

  interpretations: {
    summary: {
      essential:
        'Physicists agree completely on how to use quantum mechanics and disagree about what it means. The main interpretations reproduce the same experimental predictions — that is what makes them interpretations rather than rival theories. They differ about whether the wavefunction is real, whether outcomes are unique, and what a measurement is.',
      detailed:
        'Each position pays a price. Copenhagen-family views keep the theory minimal and leave "measurement" undefined. Many-worlds keeps the Schrödinger equation universal and gives up unique outcomes, inheriting a genuine difficulty about what probability means when everything happens. Pilot-wave theory keeps definite positions and gives up locality explicitly — which is why it evades Bell’s theorem, as the theorem permits. Objective-collapse models keep unique outcomes and give up exact linearity, which makes them uniquely testable: they predict deviations for large superpositions, and experiments have excluded regions of their parameter space without excluding the models.',
    },
    questions: [
      {
        id: 'what-differs',
        prompt: 'What do the main interpretations of quantum mechanics disagree about?',
        options: [
          { id: 'a', text: 'The predictions for experimental outcomes' },
          {
            id: 'b',
            text: 'What the mathematics is describing — not what it predicts',
            correct: true,
          },
          { id: 'c', text: 'Whether the Schrödinger equation is correct' },
          { id: 'd', text: 'The value of Planck’s constant' },
        ],
        explanation:
          'For most of them, empirical equivalence is a theorem rather than a temporary state of ignorance. The choice is therefore made on other grounds — simplicity, coherence, what one is willing to accept — and informal surveys show no majority position.',
      },
      {
        id: 'testable-one',
        prompt:
          'Which family of interpretations makes predictions that differ from standard quantum mechanics?',
        options: [
          { id: 'a', text: 'Many-worlds' },
          { id: 'b', text: 'Objective-collapse models', correct: true },
          { id: 'c', text: 'Copenhagen-family views' },
          { id: 'd', text: 'Pilot-wave theory' },
        ],
        explanation:
          'Collapse models modify the Schrödinger equation, so they are a change to physics rather than a reinterpretation. That converts a philosophical dispute into an experimental programme, and searches have constrained the parameter space without closing it.',
      },
      {
        id: 'bohm-bell',
        prompt: 'How does pilot-wave theory reproduce quantum predictions despite Bell’s theorem?',
        options: [
          { id: 'a', text: 'It denies that Bell tests have been performed correctly' },
          {
            id: 'b',
            text: 'It is explicitly non-local, which Bell’s theorem permits — the theorem rules out *local* hidden variables',
            correct: true,
          },
          { id: 'c', text: 'It abandons definite particle positions' },
          {
            id: 'd',
            text: 'It applies only to non-relativistic systems, where Bell’s theorem does not hold',
          },
        ],
        explanation:
          'The guidance equation makes one particle’s velocity depend instantaneously on the configuration of all others. No signalling results, because the initial positions are unknowable in detail — and its existence is why Bell’s theorem had to be stated so carefully.',
      },
    ],
  },

  'quantum-view-of-reality': {
    summary: {
      essential:
        'Fields fill space; particles are their discrete excitations; those excitations have states that evolve deterministically and give probabilities when measured. From that, atoms, chemistry, materials and stars follow. It is the most precisely tested description of nature ever produced, and it is incomplete in ways that are not subtle.',
      detailed:
        'The habit worth keeping is sorting claims into tiers. KNOWN: quantisation, matter waves, single-particle interference, uncertainty, spin and exclusion, tunnelling, Bell violations, Standard Model predictions at accessible energies. STRONGLY SUPPORTED: decoherence as the explanation of classical appearance, quantum field theory as the framework below some higher scale, inflation as the origin of structure. ACTIVE RESEARCH: dark matter’s nature, collapse models, quantum effects in biology, how far superposition extends. SPECULATIVE OR UNRESOLVED: quantum gravity in any specific form, string theory, the multiverse, why the Universe exists, the interpretation question, whether time is fundamental. The gaps cluster at the very large, the very early, and the interpretive foundations.',
    },
    questions: [
      {
        id: 'tiers',
        prompt: 'Which of these belongs in the "known — established by repeated experiment" tier?',
        options: [
          { id: 'a', text: 'The correct interpretation of the wavefunction' },
          {
            id: 'b',
            text: 'Violation of Bell inequalities with the main loopholes closed',
            correct: true,
          },
          { id: 'c', text: 'The existence of extra spatial dimensions' },
          { id: 'd', text: 'That time is emergent rather than fundamental' },
        ],
        explanation:
          'Bell violations have been measured with detection and locality loopholes closed simultaneously, by three independent groups. The other three have no experimental support — two are open research questions and one is an interpretive dispute.',
      },
      {
        id: 'what-missing',
        prompt: 'What does quantum physics currently NOT provide?',
        options: [
          { id: 'a', text: 'Accurate predictions for atomic and molecular structure' },
          {
            id: 'b',
            text: 'A complete theory of quantum gravity, an explanation of why this Universe exists, or an account of dark matter and dark energy',
            correct: true,
          },
          { id: 'c', text: 'A framework for computing particle interactions' },
          { id: 'd', text: 'An explanation of why matter is solid' },
        ],
        explanation:
          'The gaps are not scattered randomly — they cluster at the very large, the very early, and the interpretive foundations. The middle, from atoms to collider energies, is understood to a precision unmatched anywhere in science.',
      },
      {
        id: 'why-strange',
        prompt: 'Why does quantum mechanics seem strange?',
        options: [
          { id: 'a', text: 'Because the mathematics is inconsistent' },
          {
            id: 'b',
            text: 'Because objects at small scales do not behave like objects at human scale, and there was never any reason they should',
            correct: true,
          },
          { id: 'c', text: 'Because it has not yet been tested carefully enough' },
          { id: 'd', text: 'Because physicists disagree about its predictions' },
        ],
        explanation:
          'The mathematics is precise and the predictions are confirmed to thirteen significant figures in places. The discomfort is a fact about intuitions built from watching water and throwing stones, not a defect in the theory.',
      },
    ],
  },
};
