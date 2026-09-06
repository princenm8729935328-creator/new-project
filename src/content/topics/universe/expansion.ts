/**
 * Universe & Cosmology — the expanding Universe.
 *
 * Topics 1–5: what the Big Bang model actually claims, expansion, inflation,
 * the hot early Universe, and the particle era.
 *
 * The evidence levels here are doing real work. "The Universe is expanding" is
 * `established`; "the Big Bang model describes that expansion back to the first
 * second" is `model`; "inflation happened" is `active-research`. Collapsing
 * those into one confident voice would be the single easiest way to mislead a
 * reader about cosmology, and this file is written to prevent it.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const UNIVERSE = sectionId('universe');
const REVIEWED = '2026-09-06';

export const EXPANSION_TOPICS: readonly Topic[] = [
  {
    id: topicId('big-bang-model'),
    slug: 'big-bang-model',
    sectionId: UNIVERSE,
    order: 1,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What the Big Bang model actually says',
    subtitle: 'A history of expansion and cooling — not an explosion in empty space.',
    summary: {
      essential:
        'The Big Bang is not a bang. It is the observation that everything is moving apart, run backwards: the Universe used to be hotter, denser and closer together everywhere at once.',
      detailed:
        'The Big Bang model describes the expansion and cooling of the Universe from a hot, dense early state. It is a description of how the Universe has changed, not an account of how it began — and the distinction matters for almost every misconception about it.',
    },
    glossaryTerms: [glossaryTermId('redshift'), glossaryTermId('cmb')],
    related: [topicId('expansion'), topicId('earliest-universe'), topicId('cmb')],
    blocks: [
      {
        id: 'intro',
        kind: 'prose',
        text: {
          essential:
            'Almost everything people think they know about the Big Bang is a picture of an explosion: a point of matter in a dark void, blowing outwards into empty space. Every part of that picture is wrong, and the real idea is stranger and better supported.',
          detailed:
            'The name was coined dismissively by Fred Hoyle, who preferred a steady-state Universe, and it has misled readers ever since. The model makes no claim about a bang, a centre, or an edge. It claims something narrower and far better tested: that the Universe has been expanding and cooling, and that we can follow that history backwards with confidence to within a second of the beginning.',
        },
      },
      {
        id: 'claim-not-explosion',
        kind: 'claim',
        statement: {
          essential:
            'The Big Bang did not happen at a point in space. It happened everywhere at once — because in the model, space itself was dense everywhere and then began to stretch.',
          detailed:
            'There is no location you could travel to and call the site of the Big Bang. Every region of the Universe, including the one you are sitting in, was part of the hot dense state. An observer in any galaxy sees the same recession in every direction, which is exactly what a uniformly expanding space produces and nothing like what an explosion in pre-existing space would look like.',
          technical:
            'In the FLRW metric, comoving coordinates are fixed while the scale factor a(t) grows. Recession is not motion through space but growth of the metric distance between comoving observers. Homogeneity and isotropy — supported by the CMB to one part in 100,000 and by galaxy surveys on scales above ~100 Mpc — leave no preferred centre.',
        },
        evidence: 'model',
        references: [
          referenceId('friedmann-1922'),
          referenceId('lemaitre-1927'),
          referenceId('planck-2018-vi'),
        ],
      },
      {
        id: 'viz-expansion',
        kind: 'visualization',
        visualizationId: visualizationId('expansion-grid'),
      },
      {
        id: 'claim-three-pillars',
        kind: 'claim',
        statement: {
          essential:
            'Three separate kinds of evidence support the model, and no rival explanation accounts for all three: galaxies receding, the afterglow of the hot phase, and the amounts of the lightest elements.',
          detailed:
            'The distance–redshift relation shows expansion. The cosmic microwave background is thermal radiation from when the Universe was hot and opaque, now cooled to 2.725 K. Big Bang nucleosynthesis predicts the primordial helium and deuterium abundances from a single parameter — and that parameter agrees with the value the CMB gives independently, 380,000 years later.',
        },
        evidence: 'established',
        references: [
          referenceId('hubble-1929'),
          referenceId('penzias-wilson-1965'),
          referenceId('cyburt-2016-bbn'),
          referenceId('planck-2018-vi'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'age',
            label: 'Age of the Universe',
            value: 13.797,
            unit: 'billion years',
            uncertainty: { plusMinus: 0.023 },
            context: 'Planck 2018 base-ΛCDM fit to the cosmic microwave background.',
            references: [referenceId('planck-2018-vi')],
          },
          {
            id: 'cmb-temp',
            label: 'Temperature of the afterglow today',
            value: 2.7255,
            unit: 'K',
            uncertainty: { plusMinus: 0.0006 },
            context: 'COBE/FIRAS monopole temperature, the most precise blackbody ever measured.',
            references: [referenceId('fixsen-2009-cmb-temperature')],
          },
        ],
      },
      {
        id: 'misconception',
        kind: 'callout',
        tone: 'misconception',
        title: '“So what was there before?”',
        text: {
          essential:
            'The honest answer is that nobody knows, and the model does not claim to. The Big Bang model describes what happened as the Universe expanded and cooled. It says nothing about a beginning of time, a cause, or a “before” — those are open questions, not settled parts of the theory.',
          detailed:
            'Running the equations backwards gives a singularity at t = 0, but that is where general relativity stops being trustworthy, not a described physical event. Treating the singularity as a moment of creation confuses the failure of a theory with a discovery about the world.',
        },
      },
      {
        id: 'link-earliest',
        kind: 'cross-link',
        topicId: topicId('earliest-universe'),
        rationale: 'Where established physics runs out, and what that actually means.',
      },
    ],
    furtherReading: [referenceId('planck-2018-vi'), referenceId('pdg-2024')],
  },

  {
    id: topicId('expansion'),
    slug: 'expansion',
    sectionId: UNIVERSE,
    order: 2,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The expansion of the Universe',
    subtitle: 'Distant galaxies recede faster — and the light itself is stretched on the way.',
    summary: {
      essential:
        'Space between galaxies is growing. The further away a galaxy is, the faster it recedes — and its light arrives stretched towards the red.',
      detailed:
        'Expansion is measured through redshift, calibrated by a ladder of distance indicators. It is the single most consequential observation in cosmology: it gives the Universe a history, an age, and a testable past.',
    },
    glossaryTerms: [glossaryTermId('redshift'), glossaryTermId('hubble-constant')],
    related: [
      topicId('big-bang-model'),
      topicId('accelerating-expansion'),
      topicId('observable-universe'),
    ],
    blocks: [
      {
        id: 'claim-hubble',
        kind: 'claim',
        statement: {
          essential:
            'The further away a galaxy is, the faster it is moving away from us — and the relationship is close to a straight line.',
          detailed:
            'Hubble published the distance–velocity relation in 1929, building on Lemaître’s theoretical derivation two years earlier and on Slipher’s redshift measurements. The relation now extends across billions of light-years and holds in every direction.',
          technical:
            'v = H₀ d for nearby galaxies, with H₀ the present-day expansion rate. At larger distances the relation departs from linearity in a way that encodes the expansion history, which is precisely how dark energy was found.',
        },
        evidence: 'established',
        references: [referenceId('hubble-1929'), referenceId('lemaitre-1927')],
      },
      {
        id: 'viz',
        kind: 'visualization',
        visualizationId: visualizationId('expansion-grid'),
        caption:
          'Drag the slider to run the expansion. This is a conceptual diagram: the galaxies are drawn far too large for their separations, and only the proportional stretching of distances and wavelengths is meaningful.',
      },
      {
        id: 'prose-redshift',
        kind: 'prose',
        text: {
          essential:
            'The stretching applies to the light as well. A wave that set out from a distant galaxy is carried along by the growth of space, arriving longer than it left — shifted towards the red end of the spectrum. That shift is what astronomers actually measure.',
          detailed:
            'Cosmological redshift is not a Doppler shift from motion through space; it is the accumulated stretching of the wave during its journey. The observed wavelength is longer than the emitted one by exactly the factor by which the Universe has expanded since the light was emitted.',
          technical:
            '1 + z = a(t₀)/a(t_emit). A galaxy observed at z = 1 emitted its light when the Universe was half its present size; at z = 1090, the redshift of the CMB, the Universe was about 1/1091 of its present scale.',
        },
      },
      {
        id: 'h0',
        kind: 'quantity',
        quantities: [
          {
            id: 'h0-cmb',
            label: 'Expansion rate from the CMB',
            value: 67.36,
            unit: 'km/s per Mpc',
            uncertainty: { plusMinus: 0.54 },
            context: 'Planck 2018, inferred from the early Universe assuming the ΛCDM model.',
            references: [referenceId('planck-2018-vi')],
          },
          {
            id: 'h0-local',
            label: 'Expansion rate from the local distance ladder',
            value: 73.04,
            unit: 'km/s per Mpc',
            uncertainty: { plusMinus: 1.04 },
            context: 'SH0ES 2022, measured directly from Cepheids and Type Ia supernovae.',
            references: [referenceId('riess-2022-sh0es')],
          },
        ],
      },
      {
        id: 'tension',
        kind: 'open-question',
        question: 'Why do the two measurements of the expansion rate disagree?',
        whyItMatters: {
          essential:
            'These two numbers are measured in completely different ways and should agree. They differ by about 5σ — far too much to be luck. Either one measurement has a hidden error, or the standard model of cosmology is missing something.',
        },
        whatWouldSettleIt: {
          essential:
            'Independent distance measurements that avoid the assumptions of both methods — gravitational-wave “standard sirens”, tip-of-the-red-giant-branch distances, and time-delay lensing are all being pushed to the required precision.',
          detailed:
            'Freedman’s TRGB calibration gives a value between the two, which is why the tension is not yet considered decisive by everyone in the field. A confirmed discrepancy would point to new physics in the early Universe — extra relativistic species, or early dark energy.',
        },
        references: [
          referenceId('planck-2018-vi'),
          referenceId('riess-2022-sh0es'),
          referenceId('freedman-2021-h0'),
        ],
      },
      {
        id: 'caution',
        kind: 'callout',
        tone: 'caution',
        title: 'Not everything is expanding',
        text: {
          essential:
            'You are not expanding. Neither is the Earth, the Solar System, or the Milky Way. Expansion only wins where gravity is too weak to hold things together — between galaxy groups and beyond. Locally, bound systems simply stay bound.',
        },
      },
    ],
    furtherReading: [referenceId('planck-2018-vi'), referenceId('brout-2022-pantheon-plus')],
  },

  {
    id: topicId('inflation'),
    slug: 'inflation',
    sectionId: UNIVERSE,
    order: 3,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Cosmic inflation',
    subtitle:
      'A well-motivated proposal about the first fraction of a second — not an observation.',
    summary: {
      essential:
        'Inflation proposes that the Universe expanded by an enormous factor in a tiny fraction of a second. It solves several puzzles elegantly. It has not been confirmed.',
      detailed:
        'Inflation is a framework, not a specific theory: the physical mechanism that would have driven it is unknown, and its signature prediction has not been detected. This topic separates what inflation explains from what it has established.',
    },
    glossaryTerms: [glossaryTermId('cmb')],
    related: [topicId('big-bang-model'), topicId('cmb'), topicId('earliest-universe')],
    blocks: [
      {
        id: 'what',
        kind: 'prose',
        text: {
          essential:
            'In this proposal, a patch of the early Universe smaller than an atom was stretched to something larger than a grapefruit in far less than a billionth of a second. Everything we can see today would have grown from that one smooth patch.',
          detailed:
            'Inflation was proposed by Guth in 1981 and reformulated as “slow roll” by Linde and others shortly afterwards. It is driven, in the model, by a scalar field sitting at high potential energy; while the field rolls slowly, the expansion accelerates enormously, and when it ends the field’s energy converts into the hot particle soup the Big Bang model starts from.',
          technical:
            'Roughly 60 e-folds of quasi-de Sitter expansion. Quantum fluctuations of the inflaton are stretched beyond the horizon and freeze in as classical density perturbations with a nearly scale-invariant spectrum, seeding all later structure.',
        },
      },
      {
        id: 'claim-problems',
        kind: 'claim',
        statement: {
          essential:
            'Inflation was invented to solve two specific problems: why opposite sides of the sky have the same temperature when they were never in contact, and why space is so close to geometrically flat.',
          detailed:
            'The horizon problem: regions on opposite sides of the observable Universe have the same CMB temperature to one part in 100,000, yet in a non-inflating universe light could never have travelled between them. The flatness problem: the measured curvature is so close to zero that without inflation it would require extraordinary fine-tuning at early times. A brief burst of accelerated expansion resolves both at once.',
        },
        evidence: 'model',
        references: [referenceId('guth-1981-inflation'), referenceId('linde-1982-new-inflation')],
      },
      {
        id: 'viz-cmb',
        kind: 'visualization',
        visualizationId: visualizationId('cmb-fluctuations'),
      },
      {
        id: 'claim-consistent',
        kind: 'claim',
        statement: {
          essential:
            'What we measure in the microwave background is consistent with inflation — nearly flat space, and ripples that are almost, but not exactly, the same size on every scale.',
          detailed:
            'Planck measures a scalar spectral index n_s = 0.965 ± 0.004, slightly below 1. Exact scale invariance would be n_s = 1; the small tilt is a generic prediction of slow-roll inflation. Curvature is consistent with zero, and the fluctuations are adiabatic and very close to Gaussian, as inflation predicts.',
        },
        evidence: 'model',
        references: [referenceId('planck-2018-x-inflation'), referenceId('planck-2018-vi')],
      },
      {
        id: 'undetected',
        kind: 'claim',
        statement: {
          essential:
            'Inflation’s sharpest prediction — a specific twist in the polarisation of the microwave background, left by gravitational waves from the inflating era — has not been detected. Searches keep tightening the limit.',
          detailed:
            'Primordial gravitational waves would imprint a curl-like “B-mode” pattern in CMB polarisation. A widely publicised 2014 claim of detection was subsequently attributed to dust in our own galaxy. The current bound from BICEP/Keck combined with Planck is r < 0.036 at 95% confidence, which already excludes some of the simplest inflationary models.',
        },
        evidence: 'active-research',
        references: [referenceId('bicep-keck-2021')],
      },
      {
        id: 'honest',
        kind: 'callout',
        tone: 'caution',
        title: 'Why this page says “proposal”, not “fact”',
        text: {
          essential:
            'Inflation is the leading explanation, held by most cosmologists, and it fits the data. But the field that drove it is unidentified, its signature has not been seen, and serious researchers argue that the framework is flexible enough to fit almost any result — which weakens it as a prediction. Anything that calls inflation an observed event is overstating the science.',
        },
        references: [referenceId('ijjas-steinhardt-loeb-2013'), referenceId('bicep-keck-2021')],
      },
      {
        id: 'open',
        kind: 'open-question',
        question: 'What physically drove inflation, if it happened?',
        whyItMatters: {
          essential:
            'Inflation is a shape of behaviour, not a mechanism. No known field of the Standard Model can do it, so the model requires physics nobody has observed.',
        },
        whatWouldSettleIt: {
          essential:
            'A detection of primordial B-modes would confirm that something inflationary happened and measure its energy scale. Different models predict different values of r and different tilts, so a detection would begin to select among them.',
        },
        references: [referenceId('bicep-keck-2021'), referenceId('planck-2018-x-inflation')],
      },
    ],
    furtherReading: [referenceId('guth-1981-inflation'), referenceId('planck-2018-x-inflation')],
  },

  {
    id: topicId('hot-early-universe'),
    slug: 'hot-early-universe',
    sectionId: UNIVERSE,
    order: 4,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The hot early Universe',
    subtitle: 'Expansion cools. Run it backwards and everything gets hotter, without limit.',
    summary: {
      essential:
        'Because the Universe expands, it cools. That single fact means the past was hot — and the temperature at any moment can be calculated rather than guessed.',
      detailed:
        'The temperature history is one of the most robust results in cosmology: it follows from the expansion and from thermodynamics, and it is anchored today by the measured temperature of the microwave background.',
    },
    related: [
      topicId('particles-and-plasma'),
      topicId('nucleosynthesis'),
      topicId('recombination'),
    ],
    blocks: [
      {
        id: 'prose',
        kind: 'prose',
        text: {
          essential:
            'A gas that expands cools; a gas that is compressed heats up. The Universe is no different. Since it has been expanding for 13.8 billion years, every step backwards is a step towards higher temperature and density.',
          detailed:
            'For radiation, the temperature falls in inverse proportion to the scale factor. Since we measure the present temperature precisely and know how much the Universe has expanded, the temperature at any earlier epoch is a calculation, not an estimate.',
          technical:
            'T ∝ 1/a, so T(z) = T₀(1 + z) with T₀ = 2.7255 K. At recombination (z ≈ 1090) that gives ≈ 3000 K; at nucleosynthesis (t ≈ 1–200 s), ≈ 10⁹ K; at the electroweak scale (t ≈ 10⁻¹² s), ≈ 10¹⁵ K.',
        },
      },
      {
        id: 'viz-cooling',
        kind: 'visualization',
        visualizationId: visualizationId('cooling-history'),
      },
      {
        id: 'claim-calc',
        kind: 'claim',
        statement: {
          essential:
            'The temperature of the Universe at any past moment is calculated from its measured present temperature and how much it has expanded since. It is not a guess, but it is a calculation, and it inherits the assumptions of the model.',
          detailed:
            'This is why the entry is labelled inference rather than observation: nobody has measured the temperature of the Universe at one second old. The number follows from thermodynamics plus the expansion history, both independently tested — but it is derived, not seen.',
        },
        evidence: 'inference',
        references: [referenceId('fixsen-2009-cmb-temperature'), referenceId('planck-2018-vi')],
      },
      {
        id: 'confirm',
        kind: 'claim',
        statement: {
          essential:
            'There is a check on this: the microwave background really was hotter in the past, and astronomers have measured it in distant gas clouds.',
          detailed:
            'The excitation of certain molecules and atoms in absorption systems along the line of sight to distant quasars depends on the ambient radiation temperature. Measurements at redshifts up to about z ≈ 3 give temperatures consistent with T₀(1 + z), directly confirming that the radiation cooled as the Universe expanded.',
        },
        evidence: 'established',
        references: [referenceId('fixsen-2009-cmb-temperature'), referenceId('pdg-2024')],
      },
      {
        id: 'link',
        kind: 'cross-link',
        topicId: topicId('particles-and-plasma'),
        rationale: 'What matter actually was, at those temperatures.',
      },
    ],
    furtherReading: [referenceId('pdg-2024')],
  },

  {
    id: topicId('particles-and-plasma'),
    slug: 'particles-and-plasma',
    sectionId: UNIVERSE,
    order: 5,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Early particles and plasma',
    subtitle:
      'Quarks running free, matter and antimatter annihilating, and a leftover of one in a billion.',
    summary: {
      essential:
        'For the first millionth of a second, quarks were not bound into protons. When they finally locked together, almost all matter annihilated with antimatter — and we are the tiny remainder.',
      detailed:
        'This is the one early epoch that can be partly recreated in a laboratory: heavy-ion colliders produce quark–gluon plasma and it behaves as predicted. The matter–antimatter asymmetry, by contrast, remains unexplained.',
    },
    related: [
      topicId('hot-early-universe'),
      topicId('nucleosynthesis'),
      topicId('open-questions-universe'),
    ],
    blocks: [
      {
        id: 'prose',
        kind: 'prose',
        text: {
          essential:
            'Above roughly two trillion degrees, quarks and gluons move freely instead of being confined inside protons and neutrons. As the Universe fell below that temperature — at about a millionth of a second — quarks locked together in threes, and every proton and neutron that exists today was formed.',
          detailed:
            'Slightly earlier, at around 10⁻¹² seconds, electroweak symmetry broke and particles acquired mass through the Higgs mechanism. Neutrinos decoupled at about one second and still fill the Universe today as a relic background, too cold to have been detected directly.',
        },
      },
      {
        id: 'claim-qgp',
        kind: 'claim',
        statement: {
          essential:
            'Quark–gluon plasma is not only theory. It has been created in particle colliders by smashing heavy nuclei together, and it behaves as the physics predicts — flowing almost like a perfect liquid.',
          detailed:
            'Experiments at RHIC and the LHC produce a deconfined quark–gluon state whose collective flow matches relativistic hydrodynamics with extremely low viscosity. This does not observe the early Universe, but it tests the physics the early-Universe description depends on, at the relevant energy scale.',
        },
        evidence: 'established',
        references: [referenceId('busza-2018-heavy-ion')],
      },
      {
        id: 'claim-asymmetry',
        kind: 'claim',
        statement: {
          essential:
            'Matter and antimatter annihilated almost completely. Roughly one particle in a billion survived — and everything you have ever seen is made of that residue.',
          detailed:
            'The ratio of surviving baryons to photons is about 6 × 10⁻¹⁰, measured independently from primordial deuterium and from the CMB acoustic peaks. That number quantifies the asymmetry, but nothing in the Standard Model explains why it is not zero.',
        },
        evidence: 'inference',
        references: [referenceId('cyburt-2016-bbn'), referenceId('planck-2018-vi')],
      },
      {
        id: 'open-baryogenesis',
        kind: 'open-question',
        question: 'Why was there any matter left over at all?',
        whyItMatters: {
          essential:
            'With exactly equal matter and antimatter, everything would have annihilated into radiation and no galaxies, stars or people would exist. Something tipped the balance, and we do not know what.',
        },
        whatWouldSettleIt: {
          essential:
            'Baryogenesis requires processes that violate baryon number and CP symmetry beyond what the Standard Model provides. Evidence would come from measuring CP violation in neutrinos, finding a permanent electric dipole moment of the neutron, or observing proton decay.',
        },
        references: [referenceId('busza-2018-heavy-ion'), referenceId('pdg-2024')],
      },
    ],
    furtherReading: [referenceId('pdg-2024'), referenceId('busza-2018-heavy-ion')],
  },
];
