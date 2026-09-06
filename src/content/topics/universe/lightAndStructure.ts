/**
 * Universe & Cosmology — from the first nuclei to the cosmic web.
 *
 * Topics 6–11: nucleosynthesis, recombination, the microwave background, the
 * first stars, the first galaxies, and large-scale structure.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const UNIVERSE = sectionId('universe');
const REVIEWED = '2026-09-06';

export const LIGHT_AND_STRUCTURE_TOPICS: readonly Topic[] = [
  {
    id: topicId('nucleosynthesis'),
    slug: 'nucleosynthesis',
    sectionId: UNIVERSE,
    order: 6,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Primordial nucleosynthesis',
    subtitle: 'Twenty minutes that fixed the chemical composition of the Universe.',
    summary: {
      essential:
        'In its first twenty minutes the Universe built almost all of its hydrogen and helium — then cooled too far to build anything more.',
      detailed:
        'Big Bang nucleosynthesis is the model’s sharpest quantitative success: four abundances predicted from essentially one parameter, and that parameter independently confirmed by the microwave background 380,000 years later.',
    },
    glossaryTerms: [glossaryTermId('nucleosynthesis')],
    related: [topicId('particles-and-plasma'), topicId('recombination'), topicId('cmb')],
    blocks: [
      {
        id: 'prose',
        kind: 'prose',
        text: {
          essential:
            'Once the Universe was cool enough for protons and neutrons to stick together but still hot enough for fusion, it spent about twenty minutes making nuclei. The result was roughly three-quarters hydrogen and one-quarter helium by mass, with traces of deuterium and lithium — and then expansion shut the process down.',
          detailed:
            'The window is narrow because the Universe is racing itself: fusion needs high temperature, but expansion is removing it. Almost nothing heavier than lithium formed, because there are no stable nuclei with mass numbers 5 or 8 to bridge the gap. Everything heavier had to wait for stars.',
          technical:
            'Nucleosynthesis begins once the deuterium bottleneck clears at T ≈ 0.1 MeV. The helium-4 mass fraction Y_p ≈ 0.247 follows almost entirely from the neutron-to-proton ratio frozen out at T ≈ 0.8 MeV, subsequently reduced by free-neutron decay with τ_n ≈ 879 s.',
        },
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'The predicted amounts of hydrogen, helium and deuterium match what astronomers measure in ancient, barely-processed gas. This is one of the strongest pieces of evidence that the early Universe was hot and dense.',
          detailed:
            'Deuterium is measured in absorption against distant quasars in near-pristine gas; helium-4 in metal-poor extragalactic HII regions. The baryon density they imply agrees to within a few percent with the value derived from the CMB acoustic peaks — two entirely unrelated methods, separated by 380,000 years of cosmic history.',
        },
        evidence: 'established',
        references: [
          referenceId('cyburt-2016-bbn'),
          referenceId('alpher-bethe-gamow-1948'),
          referenceId('planck-2018-vi'),
        ],
      },
      {
        id: 'baryon',
        kind: 'quantity',
        quantities: [
          {
            id: 'yp',
            label: 'Primordial helium-4 mass fraction',
            value: 0.247,
            unit: '',
            uncertainty: { plusMinus: 0.002 },
            context: 'Predicted by Big Bang nucleosynthesis and confirmed observationally.',
            references: [referenceId('cyburt-2016-bbn')],
          },
          {
            id: 'eta',
            label: 'Baryon-to-photon ratio',
            value: 6.1e-10,
            unit: '',
            uncertainty: { plusMinus: 0.1e-10 },
            context:
              'The single parameter that fixes all primordial abundances; agrees with the CMB determination.',
            references: [referenceId('cyburt-2016-bbn'), referenceId('planck-2018-vi')],
          },
        ],
      },
      {
        id: 'lithium',
        kind: 'open-question',
        question: 'Why is there three times less lithium-7 than the theory predicts?',
        whyItMatters: {
          essential:
            'Three of the four predicted abundances match beautifully. The fourth does not, and it has resisted explanation for decades. A model this successful should not be quietly wrong about one number.',
        },
        whatWouldSettleIt: {
          essential:
            'The discrepancy may lie in stellar astrophysics — lithium being destroyed inside the old stars where it is measured — in nuclear reaction rates, or in physics beyond the Standard Model. Better measurements in unevolved stars, and improved reaction cross-sections, would discriminate.',
        },
        references: [referenceId('cyburt-2016-bbn')],
      },
    ],
    furtherReading: [referenceId('cyburt-2016-bbn')],
  },

  {
    id: topicId('recombination'),
    slug: 'recombination',
    sectionId: UNIVERSE,
    order: 7,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Recombination',
    subtitle: 'The moment the fog cleared and light could finally travel.',
    summary: {
      essential:
        'For 380,000 years the Universe was an opaque glowing fog. Then it cooled enough for atoms to form, and light was suddenly free.',
      detailed:
        'Recombination is the boundary of what can ever be seen with light. Everything earlier is hidden behind it, which is why the earliest Universe has to be studied indirectly.',
    },
    glossaryTerms: [glossaryTermId('cmb')],
    related: [topicId('cmb'), topicId('hot-early-universe'), topicId('earliest-universe')],
    blocks: [
      {
        id: 'prose',
        kind: 'prose',
        text: {
          essential:
            'While electrons roamed free, they scattered light constantly — a photon could not travel far before being knocked in a new direction. At about 3,000 degrees, electrons finally bound to nuclei to make neutral atoms, the scattering stopped, and light streamed away in every direction.',
          detailed:
            'The name is slightly wrong: the electrons and nuclei had never been combined before. What we observe is not a place but a moment — the “surface of last scattering”, the instant in each direction at which light last bounced off a free electron.',
          technical:
            'Recombination occurs at z ≈ 1090, delayed well below the naive 13.6 eV expectation because the photon-to-baryon ratio is enormous: even a tiny high-energy tail of the blackbody spectrum keeps hydrogen ionised until the temperature has fallen much further.',
        },
      },
      {
        id: 'viz',
        kind: 'visualization',
        visualizationId: visualizationId('primordial-plasma'),
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'The light released at that moment is still arriving. Stretched by 13.8 billion years of expansion, it is now microwave radiation filling the whole sky.',
          detailed:
            'It was detected accidentally by Penzias and Wilson in 1965, after having been predicted by Gamow, Alpher and Herman in the late 1940s. Its spectrum was later shown by COBE/FIRAS to be a blackbody to within about 50 parts per million — the most perfect blackbody ever measured, anywhere.',
        },
        evidence: 'established',
        references: [
          referenceId('penzias-wilson-1965'),
          referenceId('gamow-1948'),
          referenceId('mather-1994-cobe-firas'),
        ],
      },
      {
        id: 'wall',
        kind: 'callout',
        tone: 'note',
        title: 'A wall we cannot see past',
        text: {
          essential:
            'No telescope will ever see further back than this using light, because before recombination the Universe was opaque. Everything earlier must be reconstructed from theory, from particle physics, or from messengers other than light — neutrinos and gravitational waves, neither yet detected from that era.',
        },
        references: [referenceId('mather-1994-cobe-firas')],
      },
    ],
    furtherReading: [referenceId('planck-2018-vi')],
  },

  {
    id: topicId('cmb'),
    slug: 'cosmic-microwave-background',
    sectionId: UNIVERSE,
    order: 8,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The Cosmic Microwave Background',
    subtitle: 'The oldest light there is, and the most informative map in science.',
    summary: {
      essential:
        'The whole sky glows faintly with radiation from when the Universe was 380,000 years old. Its tiny temperature ripples encode nearly everything we know about the cosmos.',
      detailed:
        'The CMB is not just a relic. Its pattern of hot and cold spots is a photograph of the density variations that later became galaxies, and fitting that pattern is how the age, composition and geometry of the Universe are measured.',
    },
    glossaryTerms: [glossaryTermId('cmb'), glossaryTermId('dark-matter')],
    related: [topicId('recombination'), topicId('large-scale-structure'), topicId('dark-matter')],
    blocks: [
      {
        id: 'prose',
        kind: 'prose',
        text: {
          essential:
            'Point a sensitive microwave antenna anywhere in the sky and you receive it. The temperature is the same in every direction to about one part in 100,000 — and it is in those minuscule differences that the information lives.',
          detailed:
            'Before recombination, photons and matter were locked together as a single fluid. Gravity pulled matter into denser regions; radiation pressure pushed back. The fluid rang like a struck bell, and the CMB is a snapshot of those standing sound waves at the instant they froze out.',
        },
      },
      {
        id: 'viz',
        kind: 'visualization',
        visualizationId: visualizationId('cmb-fluctuations'),
      },
      {
        id: 'claim-anisotropy',
        kind: 'claim',
        statement: {
          essential:
            'The ripples are real and have been mapped across the whole sky by three generations of satellites, each confirming and sharpening the last.',
          detailed:
            'COBE detected the anisotropies in 1992 at a level of about one part in 100,000. WMAP mapped them across the full sky at higher resolution; Planck did so again with greater sensitivity. The characteristic angular size of the spots — about one degree — directly measures the geometry of space, and it comes out flat.',
        },
        evidence: 'established',
        references: [
          referenceId('smoot-1992-cobe'),
          referenceId('bennett-2013-wmap9'),
          referenceId('planck-2018-vi'),
        ],
      },
      {
        id: 'claim-parameters',
        kind: 'claim',
        statement: {
          essential:
            'Fitting the pattern of ripples is how cosmologists measure the age of the Universe, how much ordinary matter it holds, how much dark matter, and how much dark energy.',
          detailed:
            'The heights and spacings of the peaks in the CMB angular power spectrum are sensitive to different quantities: the first peak position measures curvature, the ratio of odd to even peak heights measures the baryon density, and the overall damping measures the matter density. Six free parameters fit thousands of independent data points.',
        },
        evidence: 'inference',
        references: [referenceId('planck-2018-vi')],
      },
      {
        id: 'composition',
        kind: 'visualization',
        visualizationId: visualizationId('cosmic-composition'),
      },
      {
        id: 'note',
        kind: 'callout',
        tone: 'history',
        title: 'You have seen it without knowing',
        text: {
          essential:
            'On an old analogue television tuned between channels, a small fraction of the static was this radiation — photons that had travelled for 13.8 billion years, ending their journey in a domestic aerial.',
        },
        references: [referenceId('penzias-wilson-1965')],
      },
    ],
    furtherReading: [referenceId('planck-2018-vi'), referenceId('mather-1994-cobe-firas')],
  },

  {
    id: topicId('first-stars-universe'),
    slug: 'first-stars',
    sectionId: UNIVERSE,
    order: 9,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The first stars',
    subtitle: 'A hundred million years of darkness, then fusion.',
    summary: {
      essential:
        'After the fog cleared there was nothing to see: no stars existed yet. Gravity spent about a hundred million years gathering gas until the first ones ignited.',
      detailed:
        'No first-generation star has ever been observed. What exists is a well-developed theory of how pristine hydrogen collapses, plus the chemical fingerprints those stars left in the oldest stars that survive.',
    },
    related: [topicId('first-galaxies-universe'), topicId('large-scale-structure'), topicId('cmb')],
    blocks: [
      {
        id: 'prose',
        kind: 'prose',
        text: {
          essential:
            'The Universe after recombination was dark, cold and almost featureless — cooling hydrogen and helium, plus dark matter detectable only by its gravity. Slowly, gravity pulled the very slightly denser regions together.',
          detailed:
            'Dark matter, unaffected by radiation pressure, collapsed into halos first; ordinary gas then fell into those gravitational wells. The faint density ripples visible in the CMB grew over roughly a hundred million years into clouds dense enough to ignite.',
        },
      },
      {
        id: 'viz',
        kind: 'visualization',
        visualizationId: visualizationId('structure-formation'),
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'The first stars were probably far more massive than stars forming today — tens to hundreds of times the mass of the Sun — because pristine gas cools poorly and fragments into much larger clumps.',
          detailed:
            'Without carbon, oxygen or dust to radiate heat away, a collapsing primordial cloud stays warmer and therefore fragments at a much larger Jeans mass. Such stars would burn ferociously and die within a few million years, seeding the Universe with the first elements heavier than lithium.',
        },
        evidence: 'model',
        references: [referenceId('bromm-larson-2004-first-stars')],
      },
      {
        id: 'uncertain',
        kind: 'callout',
        tone: 'caution',
        title: 'Nobody has seen one',
        text: {
          essential:
            'This is a theoretical picture supported by indirect evidence. JWST has now observed galaxies within the first few hundred million years, but no individual first-generation star has been confirmed, and predicted masses still span a wide range.',
        },
        references: [
          referenceId('bromm-larson-2004-first-stars'),
          referenceId('curtis-lake-2023-jwst'),
        ],
      },
    ],
    furtherReading: [referenceId('bromm-larson-2004-first-stars')],
  },

  {
    id: topicId('first-galaxies-universe'),
    slug: 'first-galaxies',
    sectionId: UNIVERSE,
    order: 10,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The first galaxies',
    subtitle: 'Now directly observed — and slightly brighter than expected.',
    summary: {
      essential:
        'The James Webb Space Telescope has confirmed galaxies that existed when the Universe was only about 300 million years old.',
      detailed:
        'These early galaxies both confirm the broad picture and pose a live problem: several look more luminous and more massive than models predicted, and the field is actively working out why.',
    },
    related: [topicId('first-stars-universe'), topicId('large-scale-structure')],
    blocks: [
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'Galaxies existed within the first few hundred million years. This is a direct observation, confirmed by spectroscopy rather than inferred from colour alone.',
          detailed:
            'Curtis-Lake and colleagues confirmed four galaxies at redshifts 10.3–13.2 using JWST/NIRSpec. Spectroscopic confirmation matters here: photometric candidates at extreme redshift can be mimicked by dusty galaxies much closer to us, and several early claims did not survive follow-up.',
        },
        evidence: 'established',
        references: [referenceId('curtis-lake-2023-jwst')],
      },
      {
        id: 'reionization',
        kind: 'prose',
        text: {
          essential:
            'Their ultraviolet light gradually stripped the electrons back off the hydrogen filling space — a process called reionization. Ionised bubbles grew around galaxies and eventually overlapped, finishing roughly a billion years after the beginning.',
          detailed:
            'Reionization is measured two ways that agree: the optical depth of the CMB to electron scattering, and the absorption seen in the spectra of distant quasars. Both point to a process largely complete by z ≈ 6.',
        },
      },
      {
        id: 'tension',
        kind: 'claim',
        statement: {
          essential:
            'Some of these very early galaxies look brighter and more massive than models expected. Whether the models need adjusting or the masses are being overestimated is being actively debated.',
          detailed:
            'Proposed explanations include more efficient early star formation, a top-heavy initial mass function, bursty star formation histories, or systematic errors in converting observed light into stellar mass. This is a genuine open problem — and, contrary to some reporting, it is not evidence against the Big Bang model, since these objects are dated using that very model.',
        },
        evidence: 'active-research',
        references: [
          referenceId('curtis-lake-2023-jwst'),
          referenceId('stark-2016-first-billion-years'),
        ],
      },
    ],
    furtherReading: [referenceId('stark-2016-first-billion-years')],
  },

  {
    id: topicId('large-scale-structure'),
    slug: 'large-scale-structure',
    sectionId: UNIVERSE,
    order: 11,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Large-scale structure',
    subtitle: 'Galaxies are not scattered at random. They lie on a web.',
    summary: {
      essential:
        'Mapped in three dimensions, galaxies form sheets and filaments around enormous nearly-empty voids — a structure that grew from the ripples visible in the microwave background.',
      detailed:
        'The cosmic web is the largest structure there is, and its statistics are a precision test of cosmology: simulations reproduce it only when dark matter is included.',
    },
    glossaryTerms: [glossaryTermId('dark-matter')],
    related: [topicId('dark-matter'), topicId('cmb'), topicId('first-galaxies-universe')],
    blocks: [
      {
        id: 'prose',
        kind: 'prose',
        text: {
          essential:
            'When astronomers first measured distances to thousands of galaxies rather than just their positions on the sky, the result was a surprise: the galaxies were arranged on surfaces surrounding vast empty regions, like foam.',
          detailed:
            'The 1980s CfA redshift survey revealed the “Great Wall”, a sheet of galaxies hundreds of millions of light-years across. Later surveys mapped millions of galaxies and confirmed that the pattern continues — dense knots of clusters, connected by filaments, separated by voids.',
        },
      },
      {
        id: 'viz',
        kind: 'visualization',
        visualizationId: visualizationId('structure-formation'),
      },
      {
        id: 'claim-web',
        kind: 'claim',
        statement: {
          essential:
            'The web is real, mapped by galaxy surveys — and computer simulations that start from the measured early Universe grow the same pattern.',
          detailed:
            'Simulations such as Millennium and Illustris begin from initial conditions constrained by CMB measurements and evolve gravity forward. They reproduce the observed clustering statistics, the shapes of filaments and the abundance of voids — but only when cold dark matter is included. Without it, structure does not form fast enough.',
        },
        evidence: 'established',
        references: [
          referenceId('geller-huchra-1989'),
          referenceId('springel-2005-millennium'),
          referenceId('vogelsberger-2014-illustris'),
        ],
      },
      {
        id: 'claim-bao',
        kind: 'claim',
        statement: {
          essential:
            'The sound waves that left ripples in the microwave background also left a preferred distance between galaxies, about 490 million light-years. It has been detected, and it works as a cosmic ruler.',
          detailed:
            'Baryon acoustic oscillations are the same standing waves frozen in at recombination, imprinted in the distribution of matter. Detecting that characteristic scale in galaxy surveys — first by Eisenstein and colleagues in 2005 — gives a standard ruler whose apparent size at different redshifts measures the expansion history independently of supernovae.',
        },
        evidence: 'established',
        references: [referenceId('eisenstein-2005-bao'), referenceId('desi-2024-bao')],
      },
      {
        id: 'link',
        kind: 'cross-link',
        topicId: topicId('dark-matter'),
        rationale: 'Why the web cannot be built without something invisible.',
      },
    ],
    furtherReading: [referenceId('springel-2005-millennium'), referenceId('eisenstein-2005-bao')],
  },
];
