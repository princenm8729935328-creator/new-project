/**
 * Quantum Physics — from orbitals to the solid world.
 *
 * This is the file that answers "so what?". Everything before it is about
 * strange behaviour at small scales; these three topics show that the strange
 * behaviour is what builds the ordinary world. Orbitals give the periodic
 * table, the periodic table gives chemistry, chemistry gives materials — and
 * the last topic closes the loop by explaining why the resulting world looks
 * nothing like the theory underneath it.
 *
 * The decoherence topic is deliberately placed here rather than next to
 * measurement, because "why does the world look classical" is a question about
 * matter, and because it lets the section make the point twice, in two
 * different contexts, that decoherence explains the loss of interference and
 * not the selection of an outcome.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const QUANTUM = sectionId('quantum');
const REVIEWED = '2026-09-09';

export const QUANTUM_MATTER_TOPICS: readonly Topic[] = [
  {
    id: topicId('atomic-structure'),
    slug: 'atoms-and-orbitals',
    sectionId: QUANTUM,
    order: 20,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Atoms and orbitals',
    subtitle: 'What replaced the orbit, and why the shapes matter.',
    summary: {
      essential:
        'Solve the Schrödinger equation for an electron near a proton and you get a set of allowed states — orbitals. An orbital is not a path. It is a three-dimensional cloud describing where the electron is likely to be found, and its shape decides how the atom bonds to other atoms.',
      detailed:
        'Each orbital is labelled by three quantum numbers that arise from the mathematics rather than being imposed: n sets the energy and overall size, l sets the shape and the orbital angular momentum, and m sets the orientation. Add spin and each orbital holds two electrons. The famous shapes — spherical s, dumbbell p, cloverleaf d — are not artistic choices; they are the angular parts of the solutions, and their geometry is why water is bent and carbon forms tetrahedra.',
      technical:
        'Separating ψ(r,θ,φ) = R_{nl}(r)Y_l^m(θ,φ) gives radial functions involving associated Laguerre polynomials and angular functions that are spherical harmonics. For hydrogen, E_n = −13.606 eV/n², independent of l — an accidental degeneracy of the pure Coulomb potential, broken in multi-electron atoms by screening and, at finer resolution, by relativistic, spin–orbit and QED corrections (the Lamb shift).',
    },
    glossaryTerms: [glossaryTermId('wavefunction'), glossaryTermId('quantum-state')],
    related: [
      topicId('schrodinger-equation'),
      topicId('pauli-and-statistics'),
      topicId('chemistry-and-materials'),
    ],
    blocks: [
      {
        id: 'not-orbits',
        kind: 'prose',
        text: {
          essential:
            'The picture of electrons circling a nucleus like planets is on school badges and company logos, and it is wrong. There are no orbits. What quantum mechanics gives instead is a standing wave filling the space around the nucleus: dense in some regions, thin in others, with definite shapes. Where the wave is intense, the electron is likely to be found. That is the whole content of an orbital.',
          detailed:
            'It is worth being clear about what "likely to be found" means, because it is easy to slide back into the orbit picture. The electron does not zip around inside the cloud too fast to see. In a stationary state there is no motion to speak of — the probability distribution does not change with time at all, which is exactly why the atom does not radiate and collapse. Ask where the electron is and you get a probability. Do not ask what it is doing between measurements; the theory does not answer, and the double-slit result warns against assuming.',
        },
      },
      {
        id: 'viz-orbitals',
        kind: 'visualization',
        visualizationId: visualizationId('atomic-orbitals'),
      },
      {
        id: 'claim-quantum-numbers',
        kind: 'claim',
        statement: {
          essential:
            'Three whole numbers fall out of the mathematics and label every orbital: n for energy and size, l for shape, m for orientation. They are not fitted to data — they arise because the wave must join up smoothly onto itself around a sphere.',
          detailed:
            'This is the same logic as the guitar string, applied in three dimensions to a sphere. A wave wrapped around a sphere must match itself after a full turn, which restricts it to a discrete set of angular patterns. Those patterns are the spherical harmonics, and they are indexed by two integers, l and m. The radial direction adds a third condition — the wave must die away far from the nucleus and stay finite at the origin — which gives n. So the quantum numbers are boundary conditions in disguise, and their allowed ranges (l < n, |m| ≤ l) come for free.',
          technical:
            'For each n there are n values of l (0 to n−1) and 2l+1 values of m, giving n² orbitals and 2n² electron states — the shell capacities 2, 8, 18, 32. Chemists’ letters map as l = 0,1,2,3 → s,p,d,f, a survival of nineteenth-century spectroscopic labels (sharp, principal, diffuse, fundamental).',
        },
        evidence: 'established',
        references: [
          referenceId('schrodinger-1926-equation'),
          referenceId('griffiths-2018-quantum'),
        ],
      },
      {
        id: 'shapes-matter',
        kind: 'prose',
        text: {
          essential:
            'The shapes are not decoration. An s orbital is spherical, so it bonds equally in all directions. A p orbital is a dumbbell pointing along one axis, so it bonds along that axis. Carbon mixes one s and three p orbitals into four equivalent lobes pointing to the corners of a tetrahedron — and that is why organic molecules have the three-dimensional architecture that makes biology possible.',
          detailed:
            'Water is the clearest small example. Oxygen has two lone pairs and two bonds arranged roughly tetrahedrally, which forces the H–O–H angle to about 104.5° rather than the 180° a naive picture would give. That bend is why the molecule has a dipole moment, which is why water is an extraordinary solvent, why ice floats, and why the oceans are liquid at Earth’s temperature. A quantum-mechanical angle, propagating all the way up to planetary habitability.',
        },
      },
      {
        id: 'orbital-caution',
        kind: 'callout',
        tone: 'caution',
        title: 'What an orbital picture actually shows',
        text: {
          essential:
            'Pictures of orbitals are surfaces drawn where the probability density has some chosen value — usually one enclosing 90% of the probability. The electron is not confined inside that surface; the cloud extends outward forever, just with rapidly diminishing probability. The boundary is a drawing convention, not a wall.',
          detailed:
            'Two further honesty notes. The familiar p_x, p_y, p_z dumbbells are real-valued combinations of the complex m = −1, 0, +1 solutions, chosen because chemists want axes; the complex versions are the ones with definite angular momentum. And exact orbitals exist only for one-electron atoms. For anything larger, "the 2p orbital of oxygen" refers to an approximation in which each electron moves in the averaged field of the others — an extremely useful approximation that underpins all of quantum chemistry, and an approximation nonetheless.',
        },
        references: [referenceId('griffiths-2018-quantum')],
      },
      {
        id: 'link-chemistry',
        kind: 'cross-link',
        topicId: topicId('chemistry-and-materials'),
        rationale: 'What happens when two of these clouds are brought together.',
      },
    ],
    furtherReading: [
      referenceId('griffiths-2018-quantum'),
      referenceId('schrodinger-1926-equation'),
    ],
  },

  {
    id: topicId('chemistry-and-materials'),
    slug: 'chemistry-and-materials',
    sectionId: QUANTUM,
    order: 21,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'From orbitals to chemistry and materials',
    subtitle: 'Bonding, the periodic table, and why some things conduct electricity.',
    summary: {
      essential:
        'Bring two atoms together and their electron waves overlap. Some combinations lower the total energy and hold the atoms together — that is a chemical bond. Repeat across a whole crystal and the individual levels smear into bands, and whether those bands are full or partly full decides whether you have a metal, an insulator or a semiconductor.',
      detailed:
        'Chemistry is quantum mechanics with the difficulty of many electrons. When two hydrogen atoms approach, the two 1s orbitals combine in two ways: added in phase, giving extra electron density between the nuclei that pulls them together, or subtracted, giving a node between them that pushes them apart. Both electrons can occupy the lower one, so the molecule is bound. Every bond in chemistry is a more elaborate version of this calculation.',
      technical:
        'In molecular-orbital theory, N atomic orbitals combine into N molecular orbitals; occupation of bonding versus antibonding orbitals gives the bond order. Extending to a periodic solid, Bloch’s theorem gives states labelled by crystal momentum and energy bands separated by gaps. Fermi level position relative to the gap determines conduction: metals have a partly filled band, insulators a gap of several eV, semiconductors a gap of order 1 eV (silicon: 1.12 eV at 300 K).',
    },
    glossaryTerms: [glossaryTermId('quantum-state'), glossaryTermId('spin')],
    related: [
      topicId('atomic-structure'),
      topicId('pauli-and-statistics'),
      topicId('why-world-looks-classical'),
    ],
    blocks: [
      {
        id: 'the-bond',
        kind: 'prose',
        text: {
          essential:
            'Why do two hydrogen atoms stick together? Not because of some separate glue. Bring them close and each electron can now be near both protons instead of one. Spreading the wave over a larger region lowers its kinetic energy, and sitting between two positive charges lowers its potential energy. The total energy drops, and a lower-energy arrangement is a bound one.',
          detailed:
            'The precise mechanism is a combination. In-phase overlap builds up electron density in the region between the two nuclei, where it attracts both — this is the bonding orbital. Out-of-phase overlap creates a node there, which is worse than either atom alone: the antibonding orbital. With only two electrons available, both go into the bonding orbital with opposite spins, and the molecule is stable. Try the same with two helium atoms and there are four electrons, so the antibonding orbital fills too, the gain cancels, and He₂ does not form. That is a real prediction, and it is right.',
        },
      },
      {
        id: 'claim-periodic-table',
        kind: 'claim',
        statement: {
          essential:
            'The periodic table’s structure follows from orbital shapes plus the exclusion principle. Its columns are elements with the same outer-shell configuration, and elements in a column behave alike because chemistry is almost entirely about the outermost electrons.',
          detailed:
            'Take the noble gases. Helium, neon and argon are chemically inert because their outer shells are exactly full — there is no low-energy way to add or remove an electron, so they barely react. Now look one column over: sodium and potassium each have a single electron outside a closed shell, loosely held, easily lost, which is why they are violently reactive metals with almost identical chemistry despite different masses. The row lengths — 2, 8, 8, 18, 18, 32 — are the subshell capacities in the order they fill. Mendeleev arranged the elements by their behaviour in 1869 and left gaps for elements not yet found. Quantum mechanics explains why the arrangement exists.',
          technical:
            'Filling order follows the Madelung (n+l, then n) rule, which is empirical rather than exact and has known exceptions (chromium, copper, palladium and others) arising from exchange energy and screening. Transition metals fill d subshells and lanthanides f subshells, which is why those blocks are 10 and 14 elements wide respectively.',
        },
        evidence: 'established',
        references: [referenceId('pauli-1925-exclusion'), referenceId('griffiths-2018-quantum')],
      },
      {
        id: 'viz-bands',
        kind: 'visualization',
        visualizationId: visualizationId('energy-bands'),
      },
      {
        id: 'claim-bands',
        kind: 'claim',
        statement: {
          essential:
            'In a solid, the enormous number of atoms turns discrete atomic levels into continuous bands of allowed energies separated by forbidden gaps. Whether the highest occupied band is full or partly full is the difference between an insulator and a metal.',
          detailed:
            'The counting is the point. Two atoms give two molecular orbitals from each atomic one; a thousand atoms give a thousand, spread over a range; 10²³ atoms give a band so densely packed it is effectively continuous. If the topmost occupied band is only partly full, electrons have empty states immediately above them and can be accelerated by a field — a metal. If it is exactly full and the next band is far above, a small field can do nothing, because there is nowhere for an electron to go — an insulator. If the gap is small enough that thermal energy or deliberate doping can bridge it, the conductivity becomes controllable, which is a semiconductor and therefore the entire electronics industry.',
          technical:
            'Silicon’s gap of 1.12 eV against k_BT ≈ 0.026 eV at room temperature gives an intrinsic carrier concentration around 10¹⁰ cm⁻³, which doping raises by many orders of magnitude and controls precisely. Diamond, chemically similar, has a 5.5 eV gap and is an excellent insulator. The transistor rests on nothing more exotic than band structure plus the ability to move the Fermi level.',
        },
        evidence: 'established',
        references: [referenceId('griffiths-2018-quantum'), referenceId('peskin-schroeder-1995')],
      },
      {
        id: 'tunnelling-in-chemistry',
        kind: 'callout',
        tone: 'note',
        title: 'Quantum effects that survive into biology',
        text: {
          essential:
            'Some quantum behaviour persists in warm, wet, messy systems. Proton tunnelling contributes measurably to the rate of many enzyme reactions — established by the large kinetic isotope effects seen when hydrogen is replaced with deuterium, which is twice as heavy and therefore tunnels far less. That is a real, quantitative, uncontroversial result.',
          detailed:
            'Beyond that the ground gets softer. Coherent energy transfer in photosynthetic complexes and a radical-pair mechanism for magnetic sensing in migratory birds are both actively researched, with genuine experimental support and genuine ongoing debate about how much the quantum coherence actually matters at physiological temperatures. They are worth knowing about as live research, and worth not describing as established. "Quantum biology" as a general claim that life exploits quantum coherence broadly is not established.',
        },
        references: [referenceId('griffiths-2018-quantum')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'silicon-gap',
            label: 'Band gap of silicon at 300 K',
            value: 1.12,
            unit: 'eV',
            context:
              'Small enough to be bridged by doping and thermal excitation, large enough to switch off cleanly. The whole of digital electronics sits on this number being in the right range.',
            references: [referenceId('griffiths-2018-quantum')],
          },
          {
            id: 'water-angle',
            label: 'H–O–H bond angle in water',
            value: 104.5,
            unit: 'degrees',
            context:
              'Set by the arrangement of bonding and lone pairs around oxygen. The bend gives water its dipole moment, and therefore its solvent behaviour and the fact that ice floats.',
            references: [referenceId('griffiths-2018-quantum')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('griffiths-2018-quantum'), referenceId('pauli-1925-exclusion')],
  },

  {
    id: topicId('why-world-looks-classical'),
    slug: 'why-the-everyday-world-looks-classical',
    sectionId: QUANTUM,
    order: 22,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why the everyday world looks classical',
    subtitle: 'Not because quantum mechanics stops — because interference is destroyed instantly.',
    summary: {
      essential:
        'If everything is quantum, why does nothing around you behave quantum-mechanically? Two reasons. First, h is tiny, so quantum effects are unmeasurably small for large objects. Second, and more decisively, large objects are constantly interacting with their surroundings, and that destroys interference almost instantaneously.',
      detailed:
        'There is no size at which the rules change. What changes is how long a superposition survives. Decoherence times scale steeply with mass, separation and environmental coupling: a molecule in high vacuum can stay coherent for milliseconds, a dust grain in air for something like 10⁻³¹ seconds. Nobody has ever seen a coffee cup interfere because the coherence is gone before any conceivable apparatus could look.',
      technical:
        'The classical limit arises in two distinct ways. Ehrenfest’s theorem gives classical equations for expectation values, exactly for quadratic potentials and approximately when the wavepacket is narrow relative to the potential’s variation. Decoherence separately suppresses off-diagonal elements of ρ in the pointer basis at a rate growing with (Δx)² and environmental scattering flux. Both are needed: the first explains classical trajectories, the second explains the absence of macroscopic superpositions.',
    },
    glossaryTerms: [glossaryTermId('decoherence'), glossaryTermId('planck-constant')],
    related: [topicId('measurement'), topicId('superposition'), topicId('chemistry-and-materials')],
    blocks: [
      {
        id: 'two-answers',
        kind: 'prose',
        text: {
          essential:
            'The first answer is scale. A thrown ball has a de Broglie wavelength around 10⁻³⁴ metres; its energy levels are spaced so finely that no instrument could resolve them. Quantum effects are there, and they are unmeasurably small. But this answer alone is not enough, because it does not explain why you never see a superposition of a ball in two rooms — that is not a small effect, it is a dramatic one.',
          detailed:
            'The second answer does the real work. To see interference, the alternatives must remain indistinguishable. A large object is in constant contact with air molecules, thermal photons and its own internal vibrations, all of which carry away information about where it is. Once that information exists anywhere, the interference is gone. The object does not become classical; it becomes entangled with 10²⁰-odd other things, and what is left when you look only at the object is a state that behaves classically for every practical purpose.',
        },
      },
      {
        id: 'claim-timescales',
        kind: 'claim',
        statement: {
          essential:
            'Decoherence times can be calculated and measured, and they are astonishingly short for anything macroscopic. A dust grain in air loses coherence in about 10⁻³¹ seconds; in a good laboratory vacuum, it survives about 10⁻¹⁷ seconds; in intergalactic space, around a second.',
          detailed:
            'The trend is what matters. Coherence time falls steeply with size and with environmental density, and every increase in isolation buys more of it. That is testable, and it has been tested: interference experiments with large molecules deliberately increased the background gas pressure or heated the molecules so they radiated thermal photons, and the fringe contrast fell exactly as calculated. Decoherence is not a story told to explain an absence — it is a quantitative theory that predicted the numbers before they were measured.',
          technical:
            'For scattering decoherence the localisation rate is Λ ∝ n v σ_eff, with coherence between separations Δx decaying as exp(−Λ(Δx)²t) in the long-wavelength regime. Estimates for a 10 μm dust grain: ~10⁻³¹ s in air at STP, ~10⁻¹⁷ s in laboratory vacuum, and ~1 s from cosmic microwave background photons alone — meaning even in deep space nothing macroscopic is truly isolated.',
        },
        evidence: 'established',
        references: [referenceId('zurek-2003-decoherence'), referenceId('arndt-1999-fullerene')],
      },
      {
        id: 'def-decoherence',
        kind: 'definition',
        termId: glossaryTermId('decoherence'),
      },
      {
        id: 'still-not-solved',
        kind: 'callout',
        tone: 'caution',
        title: 'Decoherence is not a solution to the measurement problem',
        text: {
          essential:
            'This bears repeating because it is so often stated wrongly. Decoherence explains why we do not see interference between macroscopically different alternatives. It does not explain why one of those alternatives is what actually happens. The state after decoherence is still a superposition of the whole system plus environment; it merely looks like a classical mixture if you examine the system alone.',
          detailed:
            'The distinction is sometimes put as: decoherence explains the *appearance* of collapse, not collapse itself. Everyone in the field agrees on the mathematics; the disagreement is about whether anything more is needed. Many-worlds says no. Objective-collapse says yes and proposes new physics. Copenhagen-style views say the question is misconceived. The mathematics of decoherence is common ground to all of them, which is precisely why it cannot settle between them.',
        },
        references: [referenceId('zurek-2003-decoherence')],
      },
      {
        id: 'quantum-in-plain-sight',
        kind: 'prose',
        text: {
          essential:
            'It is worth turning the question around. The everyday world does not merely tolerate quantum mechanics; it is made of it. That the table is solid is the exclusion principle. That the Sun shines is tunnelling and fusion. That your phone works is band structure. That anything is coloured at all is discrete energy levels absorbing particular photons. The classical appearance is a surface; the quantum mechanics is the substance.',
          detailed:
            'Perhaps the sharpest example is that ordinary matter has a size at all. Without the uncertainty principle, electrons would spiral into nuclei and every atom would collapse to a point in about 10⁻¹¹ seconds. Without the exclusion principle, all the electrons in every atom would occupy the lowest level, matter would have no chemistry, and everything would collapse into an undifferentiated dense mass. The reason you can stand on a floor is quantum mechanical, all the way down.',
        },
      },
    ],
    furtherReading: [referenceId('zurek-2003-decoherence'), referenceId('griffiths-2018-quantum')],
  },
];
