/**
 * Quantum Physics — spin, the exclusion principle, and quantum statistics.
 *
 * Spin is the first property in this section with no classical counterpart at
 * all. Position and momentum at least have familiar names; spin has a name
 * borrowed from rotation and nothing rotates. The file leans on that: it is a
 * good place to show a student that "what is it really?" sometimes has the
 * answer "a property, with these consequences, and no picture".
 *
 * The pay-off is immediate and enormous. Half-integer spin plus the
 * antisymmetry requirement gives the Pauli principle, which gives the periodic
 * table, which gives chemistry, which gives everything solid. Few chains in
 * physics are this short or this consequential.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const QUANTUM = sectionId('quantum');
const REVIEWED = '2026-09-09';

export const QUANTUM_SPIN_TOPICS: readonly Topic[] = [
  {
    id: topicId('spin'),
    slug: 'spin',
    sectionId: QUANTUM,
    order: 15,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Spin',
    subtitle: 'An angular momentum carried by things that are not rotating.',
    summary: {
      essential:
        'Electrons behave as though they carry angular momentum, and they respond to magnetic fields as tiny magnets would. But nothing is spinning: a point particle has no parts to go round. Spin is an intrinsic property, quantised in half-units of ħ, with no classical picture behind it — and it is measured every day.',
      detailed:
        'The Stern–Gerlach experiment is the cleanest demonstration. Send silver atoms through a non-uniform magnetic field and classically you expect a continuous smear, because a classical magnetic moment can point anywhere. What you get is two sharp spots. Measure along a different axis and again you get exactly two, never three, never a smear. The quantity being measured has only two possible values along any axis you choose — which is not how any classical vector behaves.',
      technical:
        'Spin-½ states live in a two-dimensional complex space, with operators Ŝ_i = (ħ/2)σ_i for the Pauli matrices. Eigenvalues of any component are ±ħ/2. The commutators [Ŝ_x,Ŝ_y] = iħŜ_z make components mutually incompatible. A 2π rotation multiplies a spin-½ state by −1, and only a 4π rotation returns it — measured directly in neutron interferometry, and a decisive sign that spin is not ordinary rotation.',
    },
    glossaryTerms: [glossaryTermId('spin'), glossaryTermId('observable')],
    related: [
      topicId('operators-and-observables'),
      topicId('pauli-and-statistics'),
      topicId('entanglement'),
    ],
    blocks: [
      {
        id: 'the-experiment',
        kind: 'prose',
        text: {
          essential:
            'Stern and Gerlach fired a beam of silver atoms through a magnet shaped so the field was stronger at one end than the other. A magnet in such a field gets pushed, and how much depends on which way it points. Classically, atoms pointing every possible way should be deflected by every amount, giving a smeared band. They got two distinct spots, cleanly separated, with nothing in between.',
          detailed:
            'The result was published in 1922, three years before spin was proposed, and it was initially interpreted as confirming Bohr’s orbital quantisation — which, ironically, it does not, since a silver atom’s outer electron has zero orbital angular momentum. What the experiment actually detected was the electron’s intrinsic spin. The story that the plates were developed only because Stern’s cheap cigars fumigated the silver into visibility is well attested and improbably good.',
        },
      },
      {
        id: 'viz-spin',
        kind: 'visualization',
        visualizationId: visualizationId('quantum-spin-superposition'),
      },
      {
        id: 'claim-sequential',
        kind: 'claim',
        statement: {
          essential:
            'Measure spin along the vertical axis and take only the "up" beam. Measure that beam along the horizontal axis and it splits fifty-fifty. Now measure the vertical again — and it splits again, even though every atom in it was "up" a moment ago.',
          detailed:
            'This sequence is the most instructive experiment in elementary quantum mechanics, because it kills the idea that the atom is carrying a hidden list of answers. If each atom had a definite up-down value and a definite left-right value, filtering for "up" and then measuring left-right could not erase the up-ness. But it does. Measuring the horizontal component prepares a state with no definite vertical component, because the two observables do not commute. Nothing was disturbed by clumsiness; the second measurement prepared a different state, and the third measures that state.',
          technical:
            'Writing |+z⟩ = (|+x⟩ + |−x⟩)/√2 makes the arithmetic immediate: filtering on |+x⟩ leaves a state which, re-expressed in the z basis, is (|+z⟩ + |−z⟩)/√2, giving 50/50. Sequential Stern–Gerlach measurements with the intermediate beams recombined coherently restore the original state entirely, demonstrating that no irreversible disturbance is involved — only basis change and, when the paths are separated, decoherence.',
        },
        evidence: 'established',
        references: [referenceId('stern-gerlach-1922'), referenceId('sakurai-2020-modern-qm')],
      },
      {
        id: 'nothing-spins',
        kind: 'callout',
        tone: 'misconception',
        title: '“The electron is a little spinning ball”',
        text: {
          essential:
            'Take the picture seriously and it fails numerically. Experiments bound the electron’s radius below about 10⁻¹⁸ metres. For a ball that small to carry the observed angular momentum, its surface would have to move far faster than light. And a rotating charge would give a magnetic moment about half the measured value — the famous factor g ≈ 2, which the Dirac equation predicts exactly and rotation does not.',
          detailed:
            'The strangest evidence is the 4π business. Rotate a spin-½ state through a full 360 degrees and it does not come back to itself: it comes back multiplied by −1. Only after 720 degrees is it unchanged. This was measured directly with neutron interferometry in the 1970s, by rotating the spin in one arm and watching the interference shift. Nothing made of ordinary rotating parts behaves that way, and it is the sharpest demonstration that spin is a property of the state rather than a motion in space.',
        },
        references: [referenceId('fan-2023-electron-g'), referenceId('sakurai-2020-modern-qm')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'electron-g',
            label: 'Electron g-factor',
            value: 2.00231930436092,
            unit: 'dimensionless',
            uncertainty: { plusMinus: 0.00000000000036 },
            context:
              'Predicted by quantum electrodynamics and measured to about one part in 10¹³. A classical rotating charge distribution gives exactly 1; the Dirac equation gives 2; the remaining 0.00232 comes from quantum field corrections and agrees with theory. This is the most precisely tested prediction in all of science.',
            references: [referenceId('fan-2023-electron-g')],
          },
          {
            id: 'spin-quantum',
            label: 'Spin angular momentum of an electron along any axis',
            value: 5.2728585e-35,
            unit: 'J·s (= ħ/2)',
            context:
              'Only two results are ever obtained along a chosen axis: +ħ/2 or −ħ/2. Never zero, never anything in between, whichever axis is chosen.',
            references: [referenceId('codata-2018'), referenceId('stern-gerlach-1922')],
          },
        ],
      },
      {
        id: 'link-pauli',
        kind: 'cross-link',
        topicId: topicId('pauli-and-statistics'),
        rationale:
          'What half-integer spin does to matter — which turns out to be almost everything.',
      },
    ],
    furtherReading: [
      referenceId('stern-gerlach-1922'),
      referenceId('fan-2023-electron-g'),
      referenceId('sakurai-2020-modern-qm'),
    ],
  },

  {
    id: topicId('pauli-and-statistics'),
    slug: 'the-pauli-principle-and-quantum-statistics',
    sectionId: QUANTUM,
    order: 16,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The Pauli principle and quantum statistics',
    subtitle: 'Why matter takes up space, and why the periodic table has the shape it does.',
    summary: {
      essential:
        'All particles fall into two families. Fermions — electrons, protons, neutrons, quarks — refuse to occupy the same state as another identical fermion. Bosons — photons, gluons, the Higgs — are happy to pile into the same state, and the more of them are there the more want to join. That single division explains why matter is solid and why lasers work.',
      detailed:
        'The rule is not an extra force. It comes from a symmetry requirement on the state of identical particles: swap two identical fermions and the state changes sign; swap two identical bosons and it does not. If two fermions were in the same state, swapping them would have to leave the state unchanged and also flip its sign, which forces the state to be zero — meaning it does not exist. The spin-statistics theorem ties which family a particle belongs to to its spin: half-integer means fermion, integer means boson.',
      technical:
        'For identical particles, ψ(1,2) = ±ψ(2,1), with the sign fixed by spin via the spin-statistics theorem — a result of relativistic quantum field theory requiring locality, Lorentz invariance and positive energy. Fermions obey Fermi–Dirac statistics, ⟨n⟩ = 1/(e^{(ε−μ)/k_BT} + 1); bosons obey Bose–Einstein statistics with a minus sign in the denominator, which permits macroscopic occupation of the ground state below a critical temperature.',
    },
    glossaryTerms: [glossaryTermId('spin'), glossaryTermId('quantum-state')],
    related: [topicId('spin'), topicId('atomic-structure'), topicId('chemistry-and-materials')],
    blocks: [
      {
        id: 'why-solid',
        kind: 'prose',
        text: {
          essential:
            'Ask why you cannot push your hand through a table and the usual answer is "electrical repulsion between atoms". That is part of it, and it is not the main part. The dominant effect is that the electrons in your hand cannot enter states already occupied by electrons in the table. Compressing the two together would require promoting electrons to higher energy states, and that costs energy. Solidity is the exclusion principle, felt directly.',
          detailed:
            'This becomes vivid in extreme cases. A white dwarf star has burned out and has no fusion holding it up. What supports it against its own gravity is electron degeneracy pressure — purely the refusal of electrons to share states, with no heat and no repulsion involved. The same effect at higher density supports a neutron star. Both have measured mass limits, and both limits come from this one rule about identical fermions.',
        },
      },
      {
        id: 'claim-exclusion',
        kind: 'claim',
        statement: {
          essential:
            'Two identical fermions cannot occupy the same quantum state. This is why electrons in an atom stack up into shells instead of all falling into the lowest level — and that stacking is what the periodic table is a picture of.',
          detailed:
            'Follow the consequence carefully, because it is the most important one in chemistry. If electrons ignored each other, every atom would have all its electrons in the 1s state, every element would behave almost identically, and there would be no chemistry to speak of. Instead the states fill in order: two electrons in 1s (opposite spins), then two in 2s, then six in 2p, and so on. Elements whose outermost shell is in the same configuration behave similarly — which is exactly what the columns of the periodic table record. Mendeleev found the pattern in 1869; the exclusion principle explains it.',
          technical:
            'The number of states for principal quantum number n is 2n², from n² orbital states times two spin states — giving the shell capacities 2, 8, 18, 32. The observed period lengths 2, 8, 8, 18, 18, 32 differ because of the order in which subshells fill (the Madelung rule), a consequence of electron–electron screening rather than of the exclusion principle itself.',
        },
        evidence: 'established',
        references: [referenceId('pauli-1925-exclusion'), referenceId('griffiths-2018-quantum')],
      },
      {
        id: 'bosons',
        kind: 'claim',
        statement: {
          essential:
            'Bosons do the opposite: they preferentially occupy states that are already occupied. Cool a gas of them enough and a large fraction collapses into a single quantum state — a Bose–Einstein condensate, first made in 1995.',
          detailed:
            'The gregariousness of bosons is behind several technologies. A laser is a large number of photons in the same mode, which is exactly what "coherent light" means and is only possible because photons are bosons. Superfluid helium-4 flows without viscosity for the same underlying reason. Helium-3, whose atoms are fermions, becomes superfluid too — but only at a temperature about a thousand times lower, and only after its atoms pair up into composite bosons, which is a beautiful confirmation that the statistics rather than the chemistry is doing the work.',
          technical:
            'Bose–Einstein condensation occurs when the thermal de Broglie wavelength becomes comparable to the interparticle spacing, at T_c ≈ 3.31ħ²n^{2/3}/mk_B for an ideal gas. The first atomic condensates (rubidium-87 and sodium-23, 1995) required temperatures below 1 μK. Superconductivity is the corresponding phenomenon for electron pairs bound by lattice interactions, which are composite bosons.',
        },
        evidence: 'established',
        references: [referenceId('griffiths-2018-quantum'), referenceId('peskin-schroeder-1995')],
      },
      {
        id: 'not-a-force',
        kind: 'callout',
        tone: 'caution',
        title: 'Exclusion is not a force',
        text: {
          essential:
            'Nothing pushes fermions apart. There is no exclusion field, no exchange particle, no potential energy term. The principle is a constraint on which states are available, and the resulting pressure comes from the energy cost of the states that remain. It is a bookkeeping fact about counting that has the mechanical consequences of an enormously strong repulsion.',
          detailed:
            'The pressure is real and calculable, and it does not vanish at absolute zero. Degeneracy pressure supports white dwarfs at temperatures where thermal pressure is negligible. The Chandrasekhar limit — the mass above which electron degeneracy pressure fails — comes from this calculation plus special relativity, and it is confirmed by the observed masses of white dwarfs and by the uniformity of type Ia supernovae.',
        },
        references: [referenceId('chandrasekhar-1931'), referenceId('pauli-1925-exclusion')],
      },
      {
        id: 'link-atoms',
        kind: 'cross-link',
        topicId: topicId('atomic-structure'),
        rationale:
          'The shells this principle creates, and the shapes the electrons actually occupy.',
      },
    ],
    furtherReading: [referenceId('pauli-1925-exclusion'), referenceId('griffiths-2018-quantum')],
  },
];
