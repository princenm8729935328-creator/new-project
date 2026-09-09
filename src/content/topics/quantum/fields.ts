/**
 * Quantum Physics — fields, the Standard Model, and the vacuum.
 *
 * The vacuum topic carries a specific instruction: do not repeat the
 * "empty space is full of particles popping in and out" line as though it were
 * a description of what happens. It is a picture attached to a calculational
 * device (virtual particles in perturbative expansions), and taken literally it
 * gives readers a wrong idea of what a vacuum state is and what the Casimir
 * effect demonstrates. The honest version is: the vacuum is the lowest-energy
 * state of the fields, field observables have non-zero variance in it, and that
 * variance has measurable consequences. That is stranger and truer than the
 * popcorn image.
 *
 * The Standard Model topic must be equally clear about what it does not do,
 * because it is the most successful theory ever written and also visibly
 * incomplete.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const QUANTUM = sectionId('quantum');
const REVIEWED = '2026-09-09';

export const QUANTUM_FIELD_TOPICS: readonly Topic[] = [
  {
    id: topicId('quantum-fields'),
    slug: 'quantum-fields',
    sectionId: QUANTUM,
    order: 23,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Quantum fields',
    subtitle: 'The deepest answer so far to "what is a particle?"',
    summary: {
      essential:
        'The modern description does not start with particles. It starts with fields — quantities with a value at every point in space and time — and quantises them. A particle is then a discrete excitation of a field, like a single quantum of vibration. One electron is one unit of excitation of the electron field.',
      detailed:
        'This resolves several puzzles at once. Why are all electrons exactly identical, to a precision no manufacturing process could achieve? Because they are not objects that happen to match; they are identical excitations of one field. Why can particles be created and destroyed in collisions? Because excitations of a field can be added and removed, whereas objects cannot appear from nothing. And why is there antimatter? Because the relativistic field equations require it.',
      technical:
        'Quantising a free field expands it in modes with creation and annihilation operators satisfying [a_k, a†_k′] = δ_{kk′} for bosons or anticommutators for fermions. The Hamiltonian becomes Σ ħω(a†a + ½), so states are labelled by occupation numbers — the particle interpretation. Interactions appear as additional terms in the Lagrangian, computed perturbatively; the resulting expansions in Feynman diagrams are asymptotic rather than convergent, which is one of several signs that the framework is effective rather than final.',
    },
    glossaryTerms: [glossaryTermId('quantum-field'), glossaryTermId('gauge-symmetry')],
    related: [
      topicId('standard-model'),
      topicId('wave-particle-duality'),
      topicId('quantum-vacuum'),
    ],
    blocks: [
      {
        id: 'field-first',
        kind: 'prose',
        text: {
          essential:
            'A field is a simple idea: a quantity that has a value everywhere. Temperature across a room is a field. The magnetic field around a magnet is a field. Quantum field theory takes fields as the basic stuff of the world and asks what happens when the rules of quantum mechanics are applied to them — and the answer is that their energy comes in discrete lumps.',
          detailed:
            'Picture a taut sheet stretched across all of space. Classically it can vibrate by any amount. Quantise it and its vibrational energy comes only in multiples of ħω, exactly as for the harmonic oscillator earlier in this section. One unit of excitation in a particular mode is what we call one particle. Two units, two particles. This is why particle number is not fixed: adding energy to the field adds excitations, and the mathematics of creating and destroying them is built into the framework from the start.',
        },
      },
      {
        id: 'viz-fields',
        kind: 'visualization',
        visualizationId: visualizationId('field-excitations'),
      },
      {
        id: 'claim-identical',
        kind: 'claim',
        statement: {
          essential:
            'Every electron in the Universe has exactly the same mass, charge and spin — not approximately, exactly. Field theory explains this: they are not separate objects that happen to be alike, they are excitations of a single field.',
          detailed:
            'Consider how strange the exactness is on any other account. Two manufactured objects always differ at some decimal place. Two electrons do not: experiments bound any difference in charge between the electron and positron at the level of one part in 10⁸ and any electron-to-electron variation far more tightly still. In field theory this is not a coincidence to be explained but a structural fact — asking why two excitations of the same field are identical is like asking why two waves on the same pond obey the same wave equation.',
          technical:
            'Identity of particles is also what makes the spin-statistics theorem meaningful: exchange symmetry is a statement about the field operators, and the theorem — requiring Lorentz invariance, locality and a spectrum bounded below — forces integer-spin fields to commute and half-integer-spin fields to anticommute at spacelike separation.',
        },
        evidence: 'established',
        references: [referenceId('peskin-schroeder-1995'), referenceId('pdg-2024')],
      },
      {
        id: 'claim-precision',
        kind: 'claim',
        statement: {
          essential:
            'Quantum electrodynamics — the field theory of electrons and photons — makes the most precisely confirmed prediction in science. The electron’s magnetic moment is calculated and measured to about one part in 10¹³, and they agree.',
          detailed:
            'To appreciate that figure: it is like predicting the distance from London to New York and being right to within the width of a human hair. The calculation involves summing thousands of Feynman diagrams to fifth order in the fine-structure constant; the measurement traps a single electron in a magnetic field and reads its cyclotron and spin frequencies. Two entirely independent enterprises, agreeing to twelve significant figures. This is why quantum field theory is taken seriously even where it is conceptually awkward.',
          technical:
            'a_e = (g−2)/2 = 0.00115965218059(13) from the 2023 measurement. The theoretical value depends on the fine-structure constant, so the comparison is now often run the other way: assume QED and extract α, then compare with independent atom-recoil determinations. A persistent tension between those independent α determinations is an active issue.',
        },
        evidence: 'established',
        references: [referenceId('fan-2023-electron-g'), referenceId('peskin-schroeder-1995')],
      },
      {
        id: 'gauge',
        kind: 'prose',
        text: {
          essential:
            'There is one more idea, and it is the organising principle of modern particle physics. If you demand that a field theory be unchanged under a certain kind of local rearrangement — a symmetry that can be applied differently at each point — the mathematics forces you to introduce new fields. Those new fields are the force carriers. The photon is required by demanding one such symmetry; the gluons and the W and Z bosons by demanding others.',
          detailed:
            'This is a remarkable inversion. Forces are not put in by hand and then described; they are the price of insisting on a symmetry. Electromagnetism follows from a U(1) symmetry, the strong interaction from SU(3), the weak from SU(2). The Standard Model is, in one line, the theory with gauge group SU(3) × SU(2) × U(1) plus a particular list of matter fields and a Higgs field. That compactness is part of why it is considered beautiful — and part of why the arbitrariness of the matter list is considered unsatisfying.',
        },
      },
      {
        id: 'def-field',
        kind: 'definition',
        termId: glossaryTermId('quantum-field'),
      },
      {
        id: 'link-sm',
        kind: 'cross-link',
        topicId: topicId('standard-model'),
        rationale: 'The specific set of fields our Universe appears to contain.',
      },
    ],
    furtherReading: [referenceId('peskin-schroeder-1995'), referenceId('fan-2023-electron-g')],
  },

  {
    id: topicId('standard-model'),
    slug: 'the-standard-model',
    sectionId: QUANTUM,
    order: 24,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The Standard Model',
    subtitle: 'The most successful theory ever written, and a list of what it cannot do.',
    summary: {
      essential:
        'The Standard Model lists the fields our Universe seems to be made of: six quarks, six leptons, the force carriers of three interactions, and the Higgs. It has predicted new particles before they were found and matched measurements to extraordinary precision. It also leaves out gravity, dark matter, dark energy, and the reason matter outnumbers antimatter.',
      detailed:
        'Its successes are not vague. It predicted the W and Z bosons and their masses; they were found in 1983. It predicted the top quark; found in 1995. It required the Higgs boson to make the theory consistent; found in 2012, at a mass within the allowed window. Yet it describes about 5% of the Universe’s energy content, contains around 19 free parameters nobody can derive, and has no term for gravity at all.',
      technical:
        'The gauge group is SU(3)_C × SU(2)_L × U(1)_Y, spontaneously broken to SU(3)_C × U(1)_EM by the Higgs mechanism. Matter comprises three generations of quarks and leptons in specified representations. Free parameters include nine charged-fermion masses, four CKM parameters, three gauge couplings, two Higgs parameters and θ_QCD — extended to about 26 once neutrino masses and mixings are included, which the original formulation did not accommodate.',
    },
    glossaryTerms: [glossaryTermId('gauge-symmetry'), glossaryTermId('quantum-field')],
    related: [
      topicId('quantum-fields'),
      topicId('quantum-gravity'),
      topicId('quantum-view-of-reality'),
    ],
    blocks: [
      {
        id: 'the-inventory',
        kind: 'prose',
        text: {
          essential:
            'The inventory is short enough to memorise. Matter comes in two families of six: quarks (up, down, charm, strange, top, bottom) which feel the strong force and make protons and neutrons, and leptons (electron, muon, tau and their three neutrinos) which do not. Forces are carried by the photon for electromagnetism, eight gluons for the strong force, and the W and Z for the weak. The Higgs field gives mass to the rest.',
          detailed:
            'Two structural facts stand out. First, the matter particles come in three near-copies — generations — identical except for mass. The electron, muon and tau differ only in being about 200 and 3,500 times heavier. Nobody knows why there are three, and nothing in the theory requires it. Second, ordinary matter uses only the first generation. The other two exist, are produced in accelerators and cosmic rays, and decay quickly. The theory accommodates them; it does not explain them.',
        },
      },
      {
        id: 'viz-standard-model',
        kind: 'visualization',
        visualizationId: visualizationId('standard-model-chart'),
      },
      {
        id: 'claim-successes',
        kind: 'claim',
        statement: {
          essential:
            'The Standard Model has repeatedly predicted particles before they were observed, including their masses, and has survived every precision test at collider energies.',
          detailed:
            'The pattern is the strongest kind of evidence a theory can offer, because a prediction made in advance cannot be a fit to existing data. The W and Z were predicted with specific masses and found at CERN in 1983. The top quark’s mass was pinned down by precision electroweak measurements before it was directly produced at Fermilab in 1995 — and the direct measurement agreed. The Higgs boson was required for internal consistency, its allowed mass range narrowed for decades by indirect constraints, and it appeared in 2012 at 125 GeV, inside that range. No collider measurement to date is in established conflict with the theory.',
          technical:
            'The Higgs was observed at 5σ by both ATLAS and CMS independently in 2012, at 126.0 ± 0.6 GeV and 125.3 ± 0.6 GeV respectively; the current world average is about 125.25 GeV. Several anomalies have appeared and faded — the 750 GeV diphoton excess, lepton-flavour-universality ratios in B decays — which is normal and is why 5σ is required. The muon g−2 discrepancy remains under discussion, with lattice and data-driven evaluations of the hadronic contribution disagreeing.',
        },
        evidence: 'established',
        references: [
          referenceId('atlas-2012-higgs'),
          referenceId('cms-2012-higgs'),
          referenceId('pdg-2024'),
        ],
      },
      {
        id: 'claim-limits',
        kind: 'claim',
        statement: {
          essential:
            'The Standard Model does not include gravity, does not contain a dark matter candidate, says nothing about dark energy, cannot explain why matter survived the Big Bang, and originally did not allow neutrinos to have mass — which they do.',
          detailed:
            'These are not minor gaps. Together, dark matter and dark energy account for about 95% of the Universe’s energy content, and the Standard Model describes the remaining 5%. Gravity is simply absent from the framework. The observed excess of matter over antimatter requires CP violation far beyond what the theory supplies. And the discovery of neutrino oscillations in 1998 showed that neutrinos have mass, which the original model forbade — the fix is straightforward but requires new fields, and whether neutrinos are their own antiparticles remains unknown.',
          technical:
            'Baryogenesis requires the Sakharov conditions; Standard Model CP violation via the CKM phase falls short of the observed baryon asymmetry by roughly ten orders of magnitude. Neutrino masses can be accommodated by Dirac or Majorana terms; the latter would permit neutrinoless double beta decay, searched for and not yet observed. The hierarchy problem — why the Higgs mass is 17 orders of magnitude below the Planck scale despite quantum corrections — is a naturalness concern rather than an inconsistency, and the absence of supersymmetry at LHC energies has sharpened it.',
        },
        evidence: 'established',
        references: [
          referenceId('super-k-1998-oscillation'),
          referenceId('sno-2002-solar-neutrinos'),
          referenceId('planck-2018-vi'),
        ],
      },
      {
        id: 'not-theory-of-everything',
        kind: 'callout',
        tone: 'caution',
        title: 'Extremely successful, and definitely not complete',
        text: {
          essential:
            'Both halves of that sentence are true and neither should be softened. The Standard Model is the most precisely tested theory in the history of science. It is also known to be incomplete, by its own authors, for reasons that are not subtle: it omits one of the four known interactions entirely and describes a twentieth of the Universe’s contents.',
          detailed:
            'The right way to hold this is the pattern seen throughout this platform. Newtonian gravity was superbly successful and had a boundary. General relativity is superbly successful and has a boundary. The Standard Model is superbly successful within its domain — energies up to a few TeV, gravity neglected — and its boundary is visible from the inside. Most physicists regard it as an effective field theory: the low-energy limit of something deeper that has not been found.',
        },
        references: [referenceId('pdg-2024'), referenceId('peskin-schroeder-1995')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'higgs-mass',
            label: 'Higgs boson mass',
            value: 125.25,
            unit: 'GeV/c²',
            uncertainty: { plusMinus: 0.17 },
            context:
              'Predicted to exist for consistency decades before discovery, with its allowed range narrowed by indirect measurements. Found in 2012 by two independent experiments.',
            references: [referenceId('pdg-2024'), referenceId('atlas-2012-higgs')],
          },
          {
            id: 'sm-parameters',
            label: 'Free parameters in the Standard Model',
            value: 19,
            unit: 'parameters',
            context:
              'Numbers that must be measured rather than derived, before neutrino masses. Including neutrino masses and mixings raises the count to about 26. A deeper theory would be expected to explain some of them.',
            references: [referenceId('pdg-2024')],
          },
          {
            id: 'sm-fraction',
            label: 'Fraction of the Universe’s energy content described by the Standard Model',
            value: 5,
            unit: '%',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'The rest is dark matter (~27%) and dark energy (~68%), neither of which has a Standard Model explanation.',
            references: [referenceId('planck-2018-vi')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('pdg-2024'),
      referenceId('atlas-2012-higgs'),
      referenceId('peskin-schroeder-1995'),
    ],
  },

  {
    id: topicId('quantum-vacuum'),
    slug: 'the-quantum-vacuum',
    sectionId: QUANTUM,
    order: 25,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The quantum vacuum',
    subtitle: 'What "empty" means when the fields are still there.',
    summary: {
      essential:
        'Remove every particle from a region and the fields remain — you cannot remove a field, only its excitations. The vacuum is the lowest-energy state of those fields. It is not nothing, and it is not a seething broth of particles either. It is a definite quantum state in which field values have no sharp value but a calculable spread.',
      detailed:
        'The correct picture comes from the harmonic oscillator. Its lowest state does not sit still at the bottom of the well — uncertainty forbids it — so it retains ½ħω of energy and a non-zero spread in position. A quantum field is a vast collection of such oscillators, one per mode. Its ground state therefore has a non-zero variance in the field value at every point. That variance is what "vacuum fluctuation" properly means: not particles appearing, but a field observable with a distribution rather than a value.',
      technical:
        'For a free field, ⟨0|φ̂|0⟩ = 0 but ⟨0|φ̂²|0⟩ ≠ 0, formally divergent and requiring regularisation. Differences in vacuum energy between configurations are finite and physical: the Casimir energy between parallel plates is −π²ħc A/720d³, giving a measured attractive force. Absolute vacuum energy is not something the theory reliably predicts, and the mismatch with the observed cosmological constant is the worst quantitative discrepancy in physics.',
    },
    glossaryTerms: [glossaryTermId('vacuum-state'), glossaryTermId('quantum-field')],
    related: [topicId('quantum-fields'), topicId('uncertainty'), topicId('quantum-cosmology')],
    blocks: [
      {
        id: 'what-vacuum-means',
        kind: 'prose',
        text: {
          essential:
            'Start with what a vacuum is not. It is not a place where nothing exists. Fields are not objects sitting in space that could be taken away; they are properties of space itself, and the lowest they can go is their ground state. Calling that state "empty" is shorthand for "containing no particles", which is not the same as containing nothing.',
          detailed:
            'The oscillator analogy is exact rather than illustrative. A pendulum at absolute zero cannot hang perfectly still, because that would mean a sharp position and a sharp momentum at once — forbidden. Its lowest state has ½ħω of residual energy and a spread of positions. A field is equivalent to one oscillator per mode, so its ground state has a residual spread in field value everywhere. That is the whole content of vacuum fluctuations, and it follows from the uncertainty principle rather than from anything exotic.',
        },
      },
      {
        id: 'viz-vacuum',
        kind: 'visualization',
        visualizationId: visualizationId('quantum-vacuum-fluctuations'),
      },
      {
        id: 'popping-particles',
        kind: 'callout',
        tone: 'misconception',
        title: '“Empty space is full of particles popping in and out of existence”',
        text: {
          essential:
            'This is the standard popular description, and it should be handled with care. The vacuum is a stationary state: nothing about it changes with time, and its particle number is definitely zero, not fluctuating. The "popping" image comes from virtual particles — internal lines in Feynman diagrams, which are terms in a perturbative expansion, not objects with independent existence. You cannot detect one, because there is nothing there to detect.',
          detailed:
            'What is genuinely true is stranger and more precise. Field observables have non-zero variance in the vacuum. That variance has measurable consequences — the Lamb shift in hydrogen, the electron’s anomalous magnetic moment, the Casimir force between plates. Every one of those is a real, measured effect correctly predicted by the theory. So the vacuum has structure and physical consequences. It just does not contain a population of transient particles, and describing it that way leads readers to conclusions the theory does not support.',
        },
        references: [referenceId('peskin-schroeder-1995'), referenceId('lamoreaux-1997-casimir')],
      },
      {
        id: 'claim-casimir',
        kind: 'claim',
        statement: {
          essential:
            'Place two uncharged metal plates very close together in vacuum and they attract each other. The force is measured, and it matches the prediction from vacuum field energy.',
          detailed:
            'The plates restrict which field modes can exist between them — only wavelengths that fit — while outside, all wavelengths are permitted. The difference in vacuum energy depends on the separation, and an energy that depends on separation is a force. The prediction was made by Casimir in 1948 and measured convincingly by Lamoreaux in 1997, with later experiments reaching the percent level. It is genuine evidence that the vacuum is not featureless.',
          technical:
            'F/A = −π²ħc/240d⁴, giving about 1.3 mPa at 1 μm separation and rising steeply as d shrinks. Note an honest complication: the Casimir force can also be derived from relativistic van der Waals forces between the plates’ constituent atoms without invoking vacuum energy at all. Both derivations agree, so the effect confirms the theory’s predictions without uniquely proving one interpretive picture.',
        },
        evidence: 'established',
        references: [referenceId('lamoreaux-1997-casimir'), referenceId('peskin-schroeder-1995')],
      },
      {
        id: 'cc-problem',
        kind: 'open-question',
        question: 'Why is the energy of the vacuum so much smaller than the calculation suggests?',
        whyItMatters: {
          essential:
            'Vacuum energy gravitates, so it should show up as a cosmological constant driving cosmic expansion. Naive quantum field theory estimates exceed the observed value by an enormous factor — commonly quoted as 10¹²⁰, with the exact number depending on the cut-off assumed. Either way, it is the largest quantitative mismatch between theory and observation anywhere in physics.',
          detailed:
            'The estimate is admittedly crude: it sums zero-point energies of all field modes up to the Planck scale, which is exactly the regime where the framework should not be trusted. Supersymmetry would cancel bosonic against fermionic contributions, but it is broken, which reintroduces a large residue. Nobody has produced a mechanism that reduces the answer to the small non-zero value observed, and the fact that it is non-zero rather than exactly zero makes symmetry-based explanations harder rather than easier.',
        },
        whatWouldSettleIt: {
          essential:
            'A theory of quantum gravity that computes the gravitating vacuum energy properly, or an observational determination that dark energy is not a constant at all — which would change the question. Current data are consistent with a constant, and improved surveys are testing for evolution.',
        },
        references: [
          referenceId('weinberg-1989-cc-problem'),
          referenceId('planck-2018-vi'),
          referenceId('desi-2024-bao'),
        ],
      },
      {
        id: 'link-cosmology',
        kind: 'cross-link',
        topicId: topicId('quantum-cosmology'),
        rationale: 'Where vacuum fluctuations left an observable imprint across the whole sky.',
      },
    ],
    furtherReading: [
      referenceId('lamoreaux-1997-casimir'),
      referenceId('weinberg-1989-cc-problem'),
      referenceId('peskin-schroeder-1995'),
    ],
  },
];
