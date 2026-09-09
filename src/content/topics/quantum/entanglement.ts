/**
 * Quantum Physics — entanglement and Bell's theorem.
 *
 * Two failure modes to avoid, and they pull in opposite directions.
 *
 * Undersell: "it's just correlation, like a pair of gloves in two boxes."
 * That is exactly the explanation Bell's theorem rules out, and repeating it
 * teaches the reader the wrong thing while sounding reassuringly sober.
 *
 * Oversell: "measuring one instantly changes the other, faster than light."
 * That is wrong too, and it is worse, because it suggests a signalling channel
 * that provably does not exist.
 *
 * The correct account needs the glove analogy introduced, tested, and then
 * shown to fail quantitatively — which is what Bell's inequality is for. The
 * no-signalling argument then has to be given properly, not asserted.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const QUANTUM = sectionId('quantum');
const REVIEWED = '2026-09-09';

export const QUANTUM_ENTANGLEMENT_TOPICS: readonly Topic[] = [
  {
    id: topicId('entanglement'),
    slug: 'entanglement',
    sectionId: QUANTUM,
    order: 17,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Entanglement',
    subtitle: 'A joint state that cannot be split into two separate descriptions.',
    summary: {
      essential:
        'Two particles can share a state in which neither has properties of its own — only the pair does. Measure one and you learn something about the other, however far away it is. Einstein called it "spooky action at a distance" and thought it showed the theory was incomplete. It is real, it is routine in laboratories, and it cannot be used to send a message.',
      detailed:
        'The precise statement is mathematical and worth having: a state of two systems is entangled if it cannot be written as a product of a state for the first and a state for the second. That is all. The consequence is that questions about "what is particle A doing" have no complete answer — the only complete description is of the pair. Correlations then appear between measurements on the two parts that are stronger than any pre-agreed arrangement can produce.',
      technical:
        'For the singlet state |ψ⁻⟩ = (|↑↓⟩ − |↓↑⟩)/√2, the reduced density matrix of either subsystem is maximally mixed, ρ = I/2: each particle alone has no spin direction whatever. Measuring along the same axis gives perfectly anticorrelated results; along axes separated by angle θ the correlation is E(θ) = −cos θ, which is what no local model can reproduce for all θ.',
    },
    glossaryTerms: [glossaryTermId('entanglement'), glossaryTermId('quantum-state')],
    related: [topicId('bell-theorem'), topicId('spin'), topicId('superposition')],
    blocks: [
      {
        id: 'the-gloves',
        kind: 'prose',
        text: {
          essential:
            'Start with the sensible explanation, because it is the one to beat. Put one glove of a pair in each of two boxes, without looking, and post them to opposite sides of the world. Open one, see a left glove, and you instantly know the other is right. Nothing travelled. The correlation was created when the gloves were packed. Entanglement looks exactly like this — and for a long time most physicists assumed it was exactly this.',
          detailed:
            'Einstein, Podolsky and Rosen made the argument formally in 1935. If measuring here lets you predict a result there with certainty, without disturbing it, then that result must have been determined already — so the quantum state, which does not contain it, must be an incomplete description. It is a careful, reasonable argument. The remarkable thing is that thirty years later John Bell found a way to test its central assumption experimentally, and the assumption failed.',
        },
      },
      {
        id: 'viz-correlations',
        kind: 'visualization',
        visualizationId: visualizationId('entanglement-correlations'),
      },
      {
        id: 'claim-not-separable',
        kind: 'claim',
        statement: {
          essential:
            'In an entangled pair, neither particle has a spin direction of its own. Measure one along any axis you like and you get a random result — but the two results are always perfectly related, whichever axis both experimenters chose.',
          detailed:
            'That last clause is where the glove picture starts to strain. Gloves are anticorrelated in exactly one respect: handedness. An entangled pair is perfectly anticorrelated along *every* axis simultaneously — vertical, horizontal, at 37 degrees, whatever the two experimenters agree on, provided they use the same one. A pre-packed pair would need to carry a matching answer for every possible axis in advance. That is conceivable, and Bell showed it makes predictions that differ from quantum mechanics.',
          technical:
            'For the singlet, ⟨ψ⁻|σ_a ⊗ σ_b|ψ⁻⟩ = −a·b, giving perfect anticorrelation whenever a = b, for any direction. The rotational invariance of the singlet is what makes this axis-independent, and it is a property of the entangled state, not of the individual particles — which, taken alone, are in maximally mixed states with no preferred direction at all.',
        },
        evidence: 'established',
        references: [referenceId('epr-1935'), referenceId('sakurai-2020-modern-qm')],
      },
      {
        id: 'no-signalling',
        kind: 'claim',
        statement: {
          essential:
            'Entanglement cannot send a message. Whatever Alice does to her particle, the statistics Bob sees are identical — completely random, with no dependence on her choice or her result. The correlation only appears when the two sets of results are brought together and compared, which requires an ordinary signal.',
          detailed:
            'This is worth working through, because "instantaneous influence" is the single most repeated error about entanglement. Bob measures his particle and gets up or down with probability one-half each. That is true whether Alice measured hers along the same axis, a different axis, or not at all. There is no pattern in Bob’s data for a message to be encoded in. Only later, when Alice’s list and Bob’s list are compared — over a telephone, at light speed or slower — does the correlation become visible. Nothing about the protocol lets information outrun light, and this is a theorem rather than a lucky accident.',
          technical:
            'The no-signalling theorem: Bob’s reduced density matrix ρ_B = Tr_A(ρ_AB) is unchanged by any local operation Alice performs, because a local unitary or measurement on A acts as the identity on B under the partial trace. This holds for all quantum states and all local operations, and it is why quantum mechanics is compatible with relativity despite Bell correlations.',
        },
        evidence: 'established',
        references: [
          referenceId('sakurai-2020-modern-qm'),
          referenceId('hensen-2015-loophole-free'),
        ],
      },
      {
        id: 'not-teleport',
        kind: 'callout',
        tone: 'misconception',
        title: '“Quantum teleportation sends things faster than light”',
        text: {
          essential:
            'Quantum teleportation is a real, demonstrated protocol, and it transfers an unknown quantum state from one place to another. It also requires two ordinary classical bits to be sent by ordinary means — radio, fibre, anything at light speed or slower. Without those bits the receiving end has nothing but noise. The classical channel is not a technicality; it is what makes the protocol causal.',
          detailed:
            'Nothing material is transported either. The state is reconstructed on a particle that was already at the destination, and the original state is destroyed in the process — which is required, since quantum states cannot be copied. The name is unfortunate. What teleportation demonstrates is that entanglement plus classical communication is a genuine resource, which is the basis of quantum networking and device-independent cryptography.',
        },
        references: [referenceId('hensen-2015-loophole-free')],
      },
      {
        id: 'link-bell',
        kind: 'cross-link',
        topicId: topicId('bell-theorem'),
        rationale: 'The theorem that turned "is it just pre-packed gloves?" into an experiment.',
      },
    ],
    furtherReading: [
      referenceId('epr-1935'),
      referenceId('bell-1964'),
      referenceId('hensen-2015-loophole-free'),
    ],
  },

  {
    id: topicId('bell-theorem'),
    slug: 'bells-theorem-and-the-experiments',
    sectionId: QUANTUM,
    order: 18,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Bell’s theorem and the experiments',
    subtitle: 'How a philosophical dispute became a number you can measure.',
    summary: {
      essential:
        'Bell found that if the particles carry pre-existing answers, and nothing travels faster than light between them, then a certain combination of measured correlations can never exceed 2. Quantum mechanics predicts up to 2.83, and experiments measure the larger value. Something in that pair of assumptions is wrong.',
      detailed:
        'What makes Bell’s result extraordinary is that it does not assume quantum mechanics is correct. It derives a limit that *any* theory obeying two conditions must satisfy: that measurement results are determined by properties carried by the particles, and that a choice made at one detector cannot influence the result at the other. Nature exceeds that limit. This is an experimental fact about the world, not a fact about the quantum formalism, and it would have stood even if quantum mechanics had turned out to be wrong.',
      technical:
        'The CHSH combination S = |E(a,b) − E(a,b′) + E(a′,b) + E(a′,b′)| satisfies S ≤ 2 for local hidden-variable models. Quantum mechanics with the singlet state and E(a,b) = −a·b gives S = 2√2 ≈ 2.828 at the optimal settings (Tsirelson’s bound). Loophole-free experiments since 2015 have closed the detection, locality and freedom-of-choice loopholes simultaneously, with violations at high statistical significance.',
    },
    glossaryTerms: [glossaryTermId('entanglement')],
    related: [topicId('entanglement'), topicId('interpretations'), topicId('measurement')],
    blocks: [
      {
        id: 'the-idea',
        kind: 'prose',
        text: {
          essential:
            'Bell’s idea, stripped down: suppose each particle leaves the source carrying a hidden instruction sheet saying what result to give for every possible measurement axis. Suppose also that what one experimenter chooses cannot affect what happens at the other. Under just those two suppositions, the correlations between the two sides must satisfy an inequality — a bound on how well-coordinated they can be.',
          detailed:
            'What makes the argument so powerful is how little it assumes about the instruction sheets. They can be arbitrarily complicated. They can be different for every pair. They can depend on anything in the particles’ shared past. Bell’s bound follows from the structure of the situation, not from the details, and it is straightforward enough that the derivation fits on a page. Nature violates it. So either the results are not determined in advance, or a choice at one detector does influence the distant outcome, or something even more surprising — but the comfortable picture in which both hold cannot survive.',
        },
      },
      {
        id: 'viz-bell',
        kind: 'visualization',
        visualizationId: visualizationId('bell-test'),
      },
      {
        id: 'claim-numbers',
        kind: 'claim',
        statement: {
          essential:
            'The standard test uses four correlation measurements combined into one number, S. Local pre-existing properties cap it at 2. Quantum mechanics predicts 2√2 ≈ 2.83 for the best choice of angles. Experiments measure values above 2, by many standard deviations.',
          detailed:
            'The reason a specific set of angles matters is that the two theories agree at some settings and diverge at others. At 0° and 90° the quantum and classical predictions coincide; the maximum gap opens at 22.5° separations, which is why real experiments use them. The measured correlation follows the smooth −cos θ curve of quantum mechanics rather than the straight-line behaviour that the best local models permit, and the difference is not subtle at the optimal points.',
          technical:
            'With settings a = 0°, a′ = 45°, b = 22.5°, b′ = 67.5°, each term |E| = cos 45° = 0.707 and S = 4 × 0.707 = 2.828. Tsirelson proved 2√2 is the maximum any quantum state can give, so quantum mechanics does not saturate the algebraic maximum of 4 — a curious fact whose deeper origin is still investigated under the heading of "why this much and no more".',
        },
        evidence: 'established',
        references: [referenceId('bell-1964'), referenceId('chsh-1969')],
      },
      {
        id: 'loopholes',
        kind: 'claim',
        statement: {
          essential:
            'For decades the results could be doubted on technical grounds — detectors missed most particles, or the settings were chosen too early. Those loopholes were closed one by one, and in 2015 three independent groups closed the main ones simultaneously.',
          detailed:
            'Two loopholes mattered most. The detection loophole: if your detectors only catch a small fraction of pairs, a conspiratorial local model could arrange for the detected subset to look non-classical. Closing it needs high-efficiency detection. The locality loophole: if the choice of measurement setting at one station could have reached the other before its measurement finished, no faster-than-light influence is needed to explain the correlation. Closing it needs fast random settings and enough distance. The Delft experiment used electron spins in diamond 1.3 km apart, with random settings generated fast enough that no light-speed signal could connect the two measurement events, and it closed both at once. Vienna and NIST published comparable results within months.',
          technical:
            'Hensen et al. reported S = 2.42 ± 0.20 with a p-value of 0.039 under a null hypothesis of local realism; the Vienna and NIST photonic experiments achieved far higher statistical significance with efficiencies above 75%. The freedom-of-choice loophole was further addressed by the Cosmic Bell experiments, which took setting choices from the light of distant quasars, and by the BIG Bell Test, which used choices made by about 100,000 human participants.',
        },
        evidence: 'established',
        references: [
          referenceId('hensen-2015-loophole-free'),
          referenceId('aspect-1982-bell'),
          referenceId('big-bell-test-2018'),
        ],
      },
      {
        id: 'what-it-rules-out',
        kind: 'callout',
        tone: 'caution',
        title: 'What Bell tests do and do not establish',
        text: {
          essential:
            'They rule out local hidden-variable theories: the class of explanations in which measurement results are fixed in advance by properties the particles carry, and no influence travels faster than light. That is a large and natural class, and it is dead. They do not establish that anything travels faster than light, they do not identify which assumption fails, and they do not select an interpretation of quantum mechanics.',
          detailed:
            'Different responses remain live. Pilot-wave theory keeps definite values and abandons locality outright, and it reproduces all the results. Many-worlds keeps locality and abandons single outcomes. Copenhagen-family views deny that the pre-measurement values were ever meaningful. Superdeterminism denies that the setting choices were independent of the hidden variables — logically available, widely regarded as unattractive, and not excluded by experiment. What is settled is the negative result, and the negative result is enormous.',
        },
        references: [referenceId('bell-1964'), referenceId('hensen-2015-loophole-free')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'chsh-classical',
            label: 'Maximum CHSH value for any local hidden-variable theory',
            value: 2,
            unit: 'dimensionless',
            context:
              'A mathematical bound following from the assumptions alone, with no reference to quantum mechanics. Exceeding it falsifies the whole class.',
            references: [referenceId('chsh-1969'), referenceId('bell-1964')],
          },
          {
            id: 'chsh-quantum',
            label: 'Maximum CHSH value permitted by quantum mechanics',
            value: 2.828,
            unit: 'dimensionless',
            context:
              'Tsirelson’s bound, 2√2, reached with a maximally entangled state at optimal settings. Measured violations of the classical bound are now routine.',
            references: [referenceId('chsh-1969'), referenceId('hensen-2015-loophole-free')],
          },
          {
            id: 'delft-separation',
            label: 'Detector separation in the Delft loophole-free test',
            value: 1.3,
            unit: 'km',
            context:
              'Far enough that a light-speed signal could not connect the two measurement events within the time each took, closing the locality loophole.',
            references: [referenceId('hensen-2015-loophole-free')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('bell-1964'),
      referenceId('hensen-2015-loophole-free'),
      referenceId('big-bell-test-2018'),
    ],
  },

  {
    id: topicId('tunnelling'),
    slug: 'quantum-tunnelling',
    sectionId: QUANTUM,
    order: 19,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Quantum tunnelling',
    subtitle: 'Getting to the other side of a hill you do not have the energy to climb.',
    summary: {
      essential:
        'A ball rolled at a hill it cannot climb comes back. A quantum particle sometimes appears on the far side. The wavefunction does not stop dead at the barrier — it decays exponentially inside it, and if the barrier is thin enough, a small amount survives to the other side. That surviving amplitude is a real probability of being found there.',
      detailed:
        'The key is that the Schrödinger equation is a second-order differential equation, and its solutions do not simply vanish where the energy is insufficient. In the classically forbidden region the solution becomes a decaying exponential rather than an oscillation. Decaying is not the same as zero. Match the pieces across the barrier and there is a non-zero transmitted wave — smaller for thicker barriers, taller barriers and heavier particles, and exponentially sensitive to all three.',
      technical:
        'For a rectangular barrier of height V₀ and width L with E < V₀, the transmission coefficient is T = [1 + V₀² sinh²(κL)/(4E(V₀−E))]⁻¹ with κ = √(2m(V₀−E))/ħ. For κL ≫ 1 this reduces to T ≈ 16(E/V₀)(1−E/V₀)e^{−2κL}. The exponential dependence on L and on √m is why tunnelling dominates for electrons, matters for protons, and is negligible for anything larger.',
    },
    glossaryTerms: [glossaryTermId('quantum-tunnelling'), glossaryTermId('wavefunction')],
    related: [
      topicId('schrodinger-equation'),
      topicId('uncertainty'),
      topicId('chemistry-and-materials'),
    ],
    blocks: [
      {
        id: 'the-hill',
        kind: 'prose',
        text: {
          essential:
            'Picture a valley with a hill on one side. A marble rolled up the slope with too little energy climbs part way, stops, and rolls back — it cannot be found beyond the crest. In quantum mechanics the particle is described by a wave, and waves behave differently at barriers: they do not stop at a boundary, they penetrate and fade. If the hill is narrow enough, the fading wave has not reached zero by the time it reaches the far side.',
          detailed:
            'Two clarifications that prevent bad mental pictures. First, the particle does not borrow energy and pay it back — that story invokes the time–energy relation loosely and does not survive scrutiny. It never has more energy than it started with. Second, it is not "moving through" the barrier in any ordinary sense; asking how long it spends inside is a genuinely subtle question with several competing definitions and active experimental work. What is unambiguous is the outcome: a definite probability of being detected on the far side, and that probability is calculated and confirmed to high precision.',
        },
      },
      {
        id: 'viz-tunnelling',
        kind: 'visualization',
        visualizationId: visualizationId('quantum-tunnelling'),
      },
      {
        id: 'claim-exponential',
        kind: 'claim',
        statement: {
          essential:
            'The probability of getting through falls exponentially with the barrier’s width and with the square root of the particle’s mass. Doubling the width does not halve the chance — it squares an already small number.',
          detailed:
            'This extreme sensitivity is what makes tunnelling both ubiquitous and invisible. For an electron facing a barrier a few tenths of a nanometre wide, transmission can be a substantial fraction. Add another nanometre and it drops by many orders of magnitude. Scale up to a tennis ball and a wall, and the exponent is so enormous that the probability is smaller than any number that has ever mattered — you would wait vastly longer than the age of the Universe. Tunnelling does not have a size cut-off written into the equations; the exponential simply does the work of one.',
          technical:
            'The exponent is 2L√(2m(V₀−E))/ħ. For an electron with V₀ − E = 4 eV, κ⁻¹ ≈ 0.1 nm, so transmission falls by roughly a factor of e² ≈ 7.4 for each additional 0.1 nm. This is exactly the sensitivity that makes scanning tunnelling microscopy work: a change in tip height of one atomic diameter changes the current by about an order of magnitude.',
        },
        evidence: 'established',
        references: [referenceId('griffiths-2018-quantum'), referenceId('binnig-rohrer-1982-stm')],
      },
      {
        id: 'real-consequences',
        kind: 'claim',
        statement: {
          essential:
            'Tunnelling is not a curiosity. It is why heavy nuclei decay, why the Sun shines, and how microscopes image individual atoms.',
          detailed:
            'Three cases, each decisive. Alpha decay: an alpha particle inside a nucleus is trapped by a barrier it cannot classically cross, yet uranium-238 decays with a half-life of 4.5 billion years — Gamow explained it in 1928 as tunnelling, and the theory reproduces the enormous spread of half-lives across nuclides. Stellar fusion: the Sun’s core is at 15 million kelvin, which sounds hot but gives protons only about a thousandth of the energy needed to overcome their mutual electrostatic repulsion; fusion happens because a small fraction tunnel through. Without tunnelling the Sun would not burn. And scanning tunnelling microscopy: bring a sharp tip within a nanometre of a surface, measure the tunnelling current, and its exponential distance dependence resolves individual atoms.',
          technical:
            'Gamow’s theory gives the Geiger–Nuttall relation between decay constant and alpha energy, spanning more than twenty orders of magnitude in half-life with a two-parameter fit. In the solar core the Gamow peak — the product of the falling Maxwell–Boltzmann tail and the rising tunnelling probability — determines the effective energy at which fusion occurs, well above thermal but far below the classical barrier.',
        },
        evidence: 'established',
        references: [
          referenceId('gamow-1928-alpha-decay'),
          referenceId('binnig-rohrer-1982-stm'),
          referenceId('b2fh-1957'),
        ],
      },
      {
        id: 'not-magic',
        kind: 'callout',
        tone: 'note',
        title: 'Nothing is violated',
        text: {
          essential:
            'Tunnelling does not break conservation of energy. The particle has the same energy before and after; it never has enough to be at the top of the barrier, and it is never found there with more energy than it started with. What the classical picture gets wrong is not the energy bookkeeping but the assumption that a particle must have a definite position and trajectory — and that assumption was already abandoned several topics ago.',
          detailed:
            'The "borrowing energy from the vacuum" story, though widespread, is a misleading gloss on the time–energy relation. That relation is not a statement about a system temporarily acquiring extra energy; energy conservation holds exactly in quantum mechanics, as it does classically. The honest account is the one above: solve the equation, find a decaying rather than vanishing solution in the forbidden region, and read off a transmission probability.',
        },
        references: [referenceId('griffiths-2018-quantum')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'solar-core-temp',
            label: 'Temperature at the centre of the Sun',
            value: 1.57e7,
            unit: 'K',
            context:
              'Corresponding to typical proton energies of about 1.4 keV, against a Coulomb barrier of several hundred keV. Fusion proceeds only because protons tunnel.',
            references: [referenceId('b2fh-1957'), referenceId('iau-2015-nominal-constants')],
          },
          {
            id: 'u238-halflife',
            label: 'Half-life of uranium-238 against alpha decay',
            value: 4.468e9,
            unit: 'years',
            context:
              'Gamow’s tunnelling theory explains why half-lives across different nuclides span more than twenty orders of magnitude, from microseconds to far longer than the age of the Universe.',
            references: [referenceId('gamow-1928-alpha-decay'), referenceId('pdg-2024')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('gamow-1928-alpha-decay'),
      referenceId('binnig-rohrer-1982-stm'),
      referenceId('griffiths-2018-quantum'),
    ],
  },
];
