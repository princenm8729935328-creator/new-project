/**
 * Stars & Galaxies — lifetimes, and the edges of what is known.
 *
 * The two "what we still don't understand" topics are deliberately specific.
 * A vague gesture at mystery is worse than nothing; it teaches a reader that
 * uncertainty is a mood rather than a location. So each names actual open
 * problems, says what is established around them, and says what evidence would
 * move them — which is also the honest way to show that a mature field can have
 * large holes in it without being in doubt overall.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const STARS = sectionId('stars-galaxies');
const REVIEWED = '2026-09-09';

export const STARS_FRONTIER_TOPICS: readonly Topic[] = [
  {
    id: topicId('how-long-do-stars-live'),
    slug: 'how-long-do-stars-live',
    sectionId: STARS,
    order: 42,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How long do stars live?',
    subtitle: 'From a few million years to longer than the Universe has existed.',
    summary: {
      essential:
        'Stellar lifetimes span an extraordinary range. The most massive stars last a few million years. The Sun gets about ten billion. The smallest red dwarfs will burn for trillions of years — far longer than the current age of the Universe, which means not one of them has ever died.',
      detailed:
        'The rule is that more massive means shorter, and steeply so. A star has fuel proportional to its mass but burns it at a rate that rises roughly as the 3.5th power of mass, so lifetime falls as mass to the power of about −2.5. Fifty times the mass buys about one seventeen-thousandth of the time.',
      technical:
        't ∝ M/L ∝ M^{−2.5} for the mid-range where L ∝ M^{3.5}. Low-mass stars live longer still than that scaling suggests, because they are fully convective and can therefore burn essentially their entire hydrogen supply rather than only the core’s ~10%. Model lifetimes for a 0.1 M☉ star exceed 10¹² yr — a prediction that cannot be tested observationally, since the Universe is 1.4 × 10¹⁰ yr old.',
    },
    glossaryTerms: [glossaryTermId('main-sequence'), glossaryTermId('luminosity')],
    related: [
      topicId('mass-determines-a-stars-life'),
      topicId('the-main-sequence'),
      topicId('the-life-of-a-massive-star'),
    ],
    blocks: [
      {
        id: 'the-range',
        kind: 'prose',
        text: {
          essential:
            'Put the numbers side by side and the range is hard to take in. A star of 60 solar masses: about 3 million years. The Sun: about 10 billion. A red dwarf of a tenth of a solar mass: several trillion. That is a factor of a million between the shortest and the longest, produced by a factor of only a few hundred in mass.',
          detailed:
            'The consequence for the Galaxy is that its stellar population is a palimpsest. Every massive star you can see formed recently — within the last few million years — because none survives longer. Every red dwarf you can see may have formed at any time in the last thirteen billion years, because none has yet died. Looking at the sky, you are seeing objects with wildly different formation dates mixed together.',
        },
      },
      {
        id: 'viz-lifetimes',
        kind: 'visualization',
        visualizationId: visualizationId('stellar-lifetimes'),
      },
      {
        id: 'claim-red-dwarfs',
        kind: 'claim',
        statement: {
          essential:
            'No red dwarf has ever finished its life. Their predicted lifetimes exceed the age of the Universe by a factor of a hundred or more, so every one that has ever formed is still burning hydrogen today.',
          detailed:
            'Two effects compound. They are faint, so they consume fuel slowly. And they are fully convective, which continuously mixes fresh hydrogen from the outer layers down into the core — so unlike the Sun, which will only ever use the hydrogen in its inner tenth, a red dwarf can consume nearly all of its fuel. Their eventual fate is a model extrapolation with no observational check available, and none possible for trillions of years.',
        },
        evidence: 'model',
        references: [referenceId('choi-2016-mist'), referenceId('chabrier-baraffe-2000-low-mass')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'life-60',
            label: 'Main-sequence lifetime of a 60 M☉ star',
            value: 3.4,
            unit: 'million years',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'From evolutionary model grids at solar metallicity. Mass loss and rotation change this by tens of percent, and most such stars also have binary companions that alter their evolution.',
            references: [referenceId('choi-2016-mist')],
          },
          {
            id: 'life-01',
            label: 'Predicted lifetime of a 0.1 M☉ red dwarf',
            value: 1e13,
            unit: 'years (order of magnitude)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About a thousand times the present age of the Universe. Entirely a model extrapolation — no such star has aged appreciably yet.',
            references: [referenceId('chabrier-baraffe-2000-low-mass')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('choi-2016-mist')],
  },

  {
    id: topicId('can-we-see-the-first-stars'),
    slug: 'can-we-see-the-first-stars',
    sectionId: STARS,
    order: 43,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Can we see the first stars?',
    subtitle: 'Not yet, probably not directly, and here is what would count instead.',
    summary: {
      essential:
        'No. JWST has pushed the observable frontier back to a few hundred million years after the Big Bang and found galaxies there — but a galaxy is not a star, and none of these has been shown to contain first-generation stars. Detecting an individual primordial star is likely beyond any telescope now planned.',
      detailed:
        'The difficulty is brightness and distance combined. A single star at redshift 20, however massive, is fantastically faint. What can realistically be detected is the collective light of the first star clusters, the imprint of their radiation on surrounding hydrogen, or the chemical fingerprint they left in the next generation.',
      technical:
        'Direct detection would require either extreme gravitational lensing magnification (μ ≳ 10³, achieved for individual stars at z ≈ 1–6 near cluster caustics) or a pair-instability supernova, whose peak luminosity could be visible at z ≈ 10–15 for a suitable survey cadence. The 21 cm absorption signal from neutral hydrogen against the CMB offers an indirect route sensitive to the first stars’ Lyman-α radiation field; the claimed EDGES detection at z ≈ 17 remains unconfirmed and disputed.',
    },
    glossaryTerms: [glossaryTermId('stellar-population'), glossaryTermId('redshift')],
    related: [
      topicId('the-first-stars'),
      topicId('the-first-galaxies'),
      topicId('what-we-still-dont-understand-about-galaxies'),
    ],
    blocks: [
      {
        id: 'what-jwst-did',
        kind: 'prose',
        text: {
          essential:
            'JWST was built to look at this era and it delivered quickly: galaxies confirmed at redshifts above 13, seen a few hundred million years after the Big Bang. That is a genuine achievement and it is not the same as seeing the first stars. These galaxies already contain heavy elements, which means earlier stars had already lived and died to make them.',
          detailed:
            'It is worth separating three claims that often get merged. "We have observed galaxies from 300 million years after the Big Bang" — established. "Those galaxies contain the first stars" — not shown, and the detected metals argue against it. "We have seen a Population III star" — no, and the distinction between a resolved star and an unresolved galaxy is not a technicality.',
        },
      },
      {
        id: 'viz-frontier',
        kind: 'visualization',
        visualizationId: visualizationId('observational-frontier'),
      },
      {
        id: 'claim-limits',
        kind: 'claim',
        statement: {
          essential:
            'Individual stars have been detected at cosmological distances, but only in rare cases where a foreground galaxy cluster magnifies them by factors of thousands. No such detection has yet been of a first-generation star.',
          detailed:
            'These lensed-star detections are remarkable and highly contingent: they require a star to sit almost exactly on a caustic in the lensing magnification pattern, which happens by chance and only briefly. They demonstrate that individual stars at high redshift are detectable in principle. Extending that to the redshifts and epochs where Population III stars should exist is a much harder problem and has not been done.',
        },
        evidence: 'established',
        references: [
          referenceId('robertson-2022-jwst-galaxies'),
          referenceId('klessen-glover-2023-first-stars'),
        ],
      },
      {
        id: 'what-would-count',
        kind: 'open-question',
        question: 'What would actually count as detecting the first stars?',
        whyItMatters: {
          essential:
            'Several routes could give a defensible detection short of resolving a single star: a pair-instability supernova, which only very massive metal-free stars can produce; a galaxy spectrum with no detectable metal lines at all; or the 21 cm signature of primordial hydrogen responding to the first starlight. Each has a different failure mode.',
          detailed:
            'The pair-instability supernova is the most decisive if found, because the explosion mechanism only operates in a specific mass range and produces a distinctive light curve and abundance pattern. The metal-free galaxy spectrum is harder to establish, since non-detection of lines is a limit rather than a measurement. The 21 cm route is sensitive to the right epoch but is technically brutal, requiring a faint signal to be extracted from foregrounds thousands of times brighter.',
        },
        whatWouldSettleIt: {
          essential:
            'A confirmed pair-instability supernova at high redshift, or a robust 21 cm measurement of the era when the first starlight coupled to the hydrogen gas. Both are targets of current and planned instruments; neither has been achieved.',
          detailed:
            'The EDGES experiment reported a 21 cm absorption feature at redshift 17 in 2018, which would date the first stars directly. Its amplitude was deeper than standard models allow, and an independent experiment, SARAS 3, did not confirm it. The claim is currently regarded as unconfirmed, and treating it as a detection of the first stars would be premature.',
        },
        references: [
          referenceId('klessen-glover-2023-first-stars'),
          referenceId('frebel-norris-2015-first-stars'),
        ],
      },
    ],
    furtherReading: [referenceId('klessen-glover-2023-first-stars')],
  },

  {
    id: topicId('what-we-still-dont-understand-about-stars'),
    slug: 'what-we-still-dont-understand-about-stars',
    sectionId: STARS,
    order: 44,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What we still don’t understand about stars',
    subtitle: 'A mature theory with several specific, load-bearing holes in it.',
    summary: {
      essential:
        'Stellar physics predicts lifetimes, luminosities and structures that match observation across an enormous range. It also has genuine gaps: how convection really works, how much mass massive stars lose, exactly how supernovae explode, what neutron-star cores are made of, and how much binary interaction changes the whole picture.',
      detailed:
        'These are not decorative uncertainties. Convection is treated with a one-parameter recipe from the 1950s that is known to be inadequate. Mass-loss rates for massive stars are uncertain by factors of several, and they determine what a star ends as. Each gap propagates into predictions the field relies on.',
      technical:
        'Mixing-length theory characterises convection by a single free parameter α calibrated on the Sun and applied everywhere, despite three-dimensional simulations showing α should vary with T_eff, log g and metallicity. Convective boundary mixing (overshoot, semiconvection, thermohaline) is similarly parameterised. Line-driven wind mass-loss rates carry factor-of-several uncertainty from clumping corrections, and eruptive mass loss is not predicted by theory at all.',
    },
    glossaryTerms: [
      glossaryTermId('hydrostatic-equilibrium'),
      glossaryTermId('neutron-star'),
      glossaryTermId('supernova'),
    ],
    related: [
      topicId('supernovae'),
      topicId('neutron-stars'),
      topicId('what-we-still-dont-understand-about-galaxies'),
    ],
    blocks: [
      {
        id: 'framing',
        kind: 'prose',
        text: {
          essential:
            'It is worth being clear about what kind of uncertainty this is. Nobody doubts that stars fuse hydrogen, that mass controls their fate, or that massive stars explode. The gaps are in specific mechanisms inside a framework that works — which is the normal condition of a mature science, and quite different from not knowing what is going on.',
          detailed:
            'A useful test of whether a gap is serious: does it change a number the field depends on? Convection does — it shifts predicted stellar ages and radii. Mass loss does — it decides whether a star leaves a neutron star or a black hole. Those are load-bearing. Many other unknowns are not, and honest accounting distinguishes them.',
        },
      },
      {
        id: 'viz-uncertainties',
        kind: 'visualization',
        visualizationId: visualizationId('stellar-uncertainties'),
      },
      {
        id: 'convection',
        kind: 'open-question',
        question: 'How should convection inside stars actually be modelled?',
        whyItMatters: {
          essential:
            'Convection carries energy through much of every star, sets how far mixing extends, and determines how much fuel a core can reach. It is fundamentally three-dimensional and turbulent — and every stellar evolution code represents it with a one-dimensional recipe containing a free parameter tuned on the Sun.',
          detailed:
            'Mixing-length theory dates from 1958 and treats convection as blobs travelling a characteristic distance before dissolving. That distance is the free parameter. It works well enough that the framework has survived seventy years, and three-dimensional simulations show the parameter ought to vary with a star’s temperature, gravity and composition rather than being universal. The consequences reach into stellar ages, cluster ages, and the calibration of the giant branch.',
        },
        whatWouldSettleIt: {
          essential:
            'Three-dimensional simulations of convection in realistic stellar conditions, used to calibrate improved one-dimensional prescriptions, plus asteroseismology — which measures the interior structure of thousands of stars directly through their oscillation frequencies.',
          detailed:
            'Both are progressing. Simulation grids now provide calibrations of the mixing-length parameter across the HR diagram, and asteroseismic data from Kepler and TESS constrain convective boundary locations in real stars. What does not yet exist is a first-principles theory that removes the free parameter entirely.',
        },
        references: [
          referenceId('christensen-dalsgaard-2002-helioseismology'),
          referenceId('choi-2016-mist'),
        ],
      },
      {
        id: 'mass-loss',
        kind: 'claim',
        statement: {
          essential:
            'Mass-loss rates for massive stars are uncertain by factors of several, and eruptive events that shed large amounts of mass suddenly are not predicted by any theory. Since mass at the end determines the remnant, this uncertainty propagates directly into predictions of which stars leave neutron stars and which leave black holes.',
          detailed:
            'Steady line-driven winds can be computed, but the rates depend on how clumpy the wind is, and correcting for clumping changed accepted rates by factors of two to three. Worse, some massive stars undergo giant eruptions — Eta Carinae ejected of order ten solar masses in the 1840s — that no model predicts. A star’s final mass, and hence its fate, therefore carries substantial uncertainty from an effect that is observed but not understood.',
        },
        evidence: 'active-research',
        references: [referenceId('smith-2014-mass-loss')],
      },
      {
        id: 'binaries-again',
        kind: 'callout',
        tone: 'caution',
        title: 'Most of this section describes single stars, and most stars are not single',
        text: {
          essential:
            'Around 70 percent of massive stars interact with a companion. That can strip a star’s envelope, spin it up, or merge two stars into one — changing the evolution, the explosion and the remnant. The single-star picture presented throughout this section is the clean case, not the typical one.',
          detailed:
            'This is not a small correction. Several supernova classes almost certainly require a stripped progenitor, which needs a companion. The masses of merging black holes detected in gravitational waves depend on binary evolution throughout. And a progenitor mass estimated from single-star models may be systematically wrong. The field has known this for over a decade and incorporating it fully into population models is still in progress.',
        },
        references: [referenceId('sana-2012-binaries')],
      },
    ],
    furtherReading: [referenceId('smith-2014-mass-loss'), referenceId('sana-2012-binaries')],
  },

  {
    id: topicId('what-we-still-dont-understand-about-galaxies'),
    slug: 'what-we-still-dont-understand-about-galaxies',
    sectionId: STARS,
    order: 45,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What we still don’t understand about galaxies',
    subtitle:
      'The framework holds; the physics inside it is largely calibrated rather than derived.',
    summary: {
      essential:
        'We can simulate a universe and get galaxies that look broadly right. What we cannot yet do is derive the processes that make them look right — feedback, quenching and black-hole growth are put in as tuned recipes rather than computed from first principles. And several observations, including JWST’s early galaxies, are not comfortably explained.',
      detailed:
        'The cosmological framework — dark matter, hierarchical structure growth, gas cooling into halos — is well supported by many independent lines of evidence. The difficulty is everything that happens on scales too small for cosmological simulations to resolve, which is where star formation and feedback actually operate.',
      technical:
        'Cosmological simulations resolve ~10²–10³ pc in the best cases; supernova remnants and accretion disks operate at 1 pc to 10⁻⁵ pc. Subgrid models bridge that with parameterised prescriptions calibrated against the stellar mass function and other observables, so agreement with those observables is not an independent test. Outstanding problems include the core–cusp and too-big-to-fail issues at dwarf scales, the origin of the quenching timescale, and the seeds and early growth of supermassive black holes.',
    },
    glossaryTerms: [
      glossaryTermId('galactic-halo'),
      glossaryTermId('agn'),
      glossaryTermId('dark-matter'),
    ],
    related: [
      topicId('galactic-feedback'),
      topicId('supermassive-black-holes-and-galaxy-evolution'),
      topicId('the-first-galaxies'),
    ],
    blocks: [
      {
        id: 'what-works',
        kind: 'prose',
        text: {
          essential:
            'Start with what is solid, because it is a lot. The initial conditions are measured in the microwave background. The growth of dark-matter structure from them is computable and matches the observed distribution of galaxies on large scales. Galaxies form inside halos, merge, and evolve. None of that framework is seriously in doubt.',
          detailed:
            'What is not solid is the baryonic physics — the gas, the stars, the black holes. That is a strange position to be in: the exotic component we cannot identify is the part we model most confidently, because it only feels gravity. The ordinary matter, which we can study in a laboratory, is the part that defeats us, because it does chemistry and radiates and forms stars on scales no cosmological simulation can resolve.',
        },
      },
      {
        id: 'viz-galaxy-unknowns',
        kind: 'visualization',
        visualizationId: visualizationId('galaxy-unknowns'),
      },
      {
        id: 'seeds',
        kind: 'open-question',
        question: 'Where did supermassive black holes come from?',
        whyItMatters: {
          essential:
            'Quasars powered by billion-solar-mass black holes are observed less than a billion years after the Big Bang. Growing a black hole that large that fast is difficult: starting from a stellar-mass seed and accreting at the standard maximum rate does not obviously get you there in the time available.',
          detailed:
            'Three families of solution are under investigation. Seeds from the collapse of very massive first-generation stars, which are small and need near-continuous maximal accretion. Direct collapse of a large gas cloud into a black hole of 10⁴ to 10⁵ solar masses, which requires specific conditions that suppress fragmentation. Or growth through runaway collisions in dense early star clusters. None is confirmed, and all three may occur.',
        },
        whatWouldSettleIt: {
          essential:
            'Detecting intermediate-mass black holes and the earliest accreting black holes, which JWST is beginning to find, and gravitational-wave observations of mergers in the seed mass range — a target for future space-based detectors.',
          detailed:
            'JWST has identified faint accreting black holes at high redshift whose masses appear large relative to their host galaxies, which would favour heavy seeds. Those measurements rest on indirect mass estimates with substantial systematics, so they are suggestive rather than decisive. A space-based gravitational-wave observatory would detect mergers of 10³–10⁶ solar-mass black holes directly and distinguish the scenarios.',
        },
        references: [referenceId('kormendy-ho-2013'), referenceId('robertson-2022-jwst-galaxies')],
      },
      {
        id: 'dwarf-problems',
        kind: 'claim',
        statement: {
          essential:
            'On the scale of small galaxies, predictions and observations do not match cleanly. Simulations of dark matter alone predict denser central cusps and more massive satellite galaxies than are observed. Whether this signals a problem with dark matter or with the baryonic physics is unresolved.',
          detailed:
            'These are the core–cusp and too-big-to-fail problems. The mainstream view is that they are resolved by baryonic effects: repeated bursts of supernova-driven outflow can transfer energy to the dark matter and flatten a central cusp, and feedback can leave the largest predicted satellites too faint to see. Simulations including these effects do reduce the discrepancies. Whether they eliminate them, or whether some residual points to dark matter behaving differently than assumed, is still argued.',
        },
        evidence: 'active-research',
        references: [
          referenceId('naab-ostriker-2017-galaxy-formation'),
          referenceId('somerville-dave-2015-galaxy-formation'),
        ],
      },
      {
        id: 'honest-close',
        kind: 'callout',
        tone: 'note',
        title: 'What a good simulation actually demonstrates',
        text: {
          essential:
            'When a simulation reproduces the observed galaxy population, that is meaningful but limited. The subgrid recipes were calibrated against some of those observations, so matching them is partly a design goal rather than a prediction. The stronger evidence is when a calibrated model reproduces observations it was never tuned to.',
          detailed:
            'By that standard modern simulations do well — they reproduce galaxy sizes, morphologies, gas content and clustering that were not part of the calibration. That is genuine evidence that the effective physics is approximately right. It still does not establish the microphysics, and a reader should hold "the recipe has the right net effect" separately from "we know how supernova feedback couples to galactic gas".',
        },
        references: [
          referenceId('vogelsberger-2014-illustris'),
          referenceId('naab-ostriker-2017-galaxy-formation'),
        ],
      },
    ],
    furtherReading: [
      referenceId('naab-ostriker-2017-galaxy-formation'),
      referenceId('somerville-dave-2015-galaxy-formation'),
    ],
  },
];
