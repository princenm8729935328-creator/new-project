/**
 * Milestones from the earliest describable moment to the first galaxies.
 *
 * Note the evidence levels. Almost nothing in the first second is `established`:
 * it is `model` or `active-research`, because it is extrapolation from physics
 * tested at far lower energies. That is not a hedge — it is the actual status of
 * the science, and the timeline is built to show it.
 */
import { cosmicTime, cosmicTimeFromYearsAgo } from '../../schema/cosmicTime';
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { timelineEventId, type TimelineEvent } from '../../schema/timeline';
import { visualizationId } from '../../schema/visualization';

export const EARLY_UNIVERSE_EVENTS: readonly TimelineEvent[] = [
  {
    id: timelineEventId('hot-dense-beginning'),
    slug: 'hot-dense-beginning',
    title: 'The hot, dense beginning',
    eraId: 'primordial',
    time: cosmicTime(1e-43, 'modelled', 'the earliest describable moment'),
    whenLabel: '13.8 billion years ago',
    whenRange: 'Age of the Universe: 13.797 ± 0.023 billion years',
    prominence: 1,
    evidence: 'model',
    sectionId: sectionId('universe'),
    visualizationId: visualizationId('primordial-plasma'),
    glossaryTerms: [glossaryTermId('cmb'), glossaryTermId('redshift')],
    summary: {
      essential:
        'Everything we can observe was once in an extremely hot, extremely dense state, and has been expanding and cooling ever since.',
    },
    whatHappened: {
      essential:
        'Run the expansion of the Universe backwards and everything we can see is squeezed into a state hotter and denser than anything that exists today. That state is what "the Big Bang" names. It was not an explosion in empty space — there was no surrounding space to explode into. Space itself was dense everywhere, and then began to stretch.',
      detailed:
        'The Big Bang model describes the expansion and cooling of the Universe from a hot, dense early state. It does not describe a moment of creation, and it does not place the beginning at a point in pre-existing space: the hot dense conditions filled all of space, which was then much smaller in the sense that any two points were closer together. The model is well tested from roughly one second onwards. Before that, and especially before about 10⁻⁴³ seconds — the Planck time — our theories stop giving meaningful answers.',
      technical:
        'The FLRW metric with a hot, radiation-dominated early phase reproduces the observed expansion history, the primordial light-element abundances and the CMB power spectrum. Extrapolating a → 0 yields a coordinate singularity at t = 0, but general relativity is not expected to hold at Planck-scale curvature, so the singularity is properly read as a breakdown of the theory rather than as a physical event.',
    },
    whyItMatters: {
      essential:
        'It means the Universe has a history. Everything after this — atoms, stars, planets, life — happened in an order that can be reconstructed and dated.',
      detailed:
        'A static, eternal Universe would have no story to tell. The discovery that it has been expanding, and therefore was once denser and hotter, turned cosmology from philosophy into an observational science with datable events.',
    },
    evidenceBasis: {
      essential:
        'Three independent lines: distant galaxies are receding faster the further away they are; the whole sky glows faintly with leftover heat from when the Universe was hot; and the amounts of hydrogen and helium in the Universe match what a hot early phase predicts.',
      detailed:
        "Hubble's distance–velocity relation established the expansion in 1929. The cosmic microwave background, found accidentally in 1965, is the thermal radiation of that hot phase, now a near-perfect blackbody at 2.725 K. Big Bang nucleosynthesis predicts the primordial abundances of helium-4 and deuterium from a single parameter, and those predictions match observation. No competing model accounts for all three.",
    },
    uncertainty: {
      essential:
        'We do not know what happened at the very first instant, or whether "the first instant" is even a meaningful idea. General relativity and quantum mechanics both stop working under those conditions, and no tested theory replaces them.',
      detailed:
        'The classical singularity at t = 0 is where general relativity fails, not a described event. Whether time had a beginning, whether the hot dense phase was preceded by something else, and what physics governs the Planck epoch are all open. Anyone who tells you science knows what happened at time zero is overstating the case.',
    },
    references: [
      referenceId('planck-2018-vi'),
      referenceId('hubble-1929'),
      referenceId('penzias-wilson-1965'),
      referenceId('cyburt-2016-bbn'),
    ],
    relatedEvents: [timelineEventId('recombination'), timelineEventId('present-day')],
  },

  {
    id: timelineEventId('inflation'),
    slug: 'inflation',
    title: 'Inflation — a proposed instant of runaway expansion',
    eraId: 'primordial',
    time: cosmicTime(1e-34, 'modelled', 'around 10⁻³⁶ to 10⁻³² seconds'),
    whenLabel: 'roughly 10⁻³⁶ to 10⁻³² seconds after the beginning',
    prominence: 0.85,
    evidence: 'active-research',
    sectionId: sectionId('universe'),
    glossaryTerms: [glossaryTermId('cmb')],
    summary: {
      essential:
        'A proposed burst of extraordinarily fast expansion in the first fraction of a second. It explains several puzzles well — but it has not been confirmed.',
    },
    whatHappened: {
      essential:
        'In this model, the Universe expanded by an enormous factor in a tiny fraction of a second, stretching a region smaller than an atom to something larger than a grapefruit. Tiny quantum ripples would have been stretched along with it, becoming the seeds of every galaxy that later formed.',
      detailed:
        'Inflation was proposed in 1981 to solve two problems. The horizon problem: regions on opposite sides of the sky have the same temperature to one part in 100,000, yet in a non-inflating universe they were never in causal contact. The flatness problem: the geometry of space is very close to flat, which in a non-inflating universe requires implausible fine-tuning. A brief period of accelerated expansion solves both, and predicts a nearly — but not exactly — scale-invariant spectrum of primordial fluctuations.',
      technical:
        'Inflation is driven by a scalar field slowly rolling down a potential, giving quasi-de Sitter expansion with roughly 60 e-folds. It predicts a scalar spectral index n_s slightly below 1, negligible spatial curvature, and adiabatic, nearly Gaussian primordial fluctuations. Planck measures n_s ≈ 0.965, consistent with the generic prediction. The tensor-to-scalar ratio r, which would discriminate between inflationary models, has only an upper bound.',
    },
    whyItMatters: {
      essential:
        'If it happened, then the structure of the entire visible Universe — every galaxy, every cluster — grew from quantum fluctuations magnified to cosmic size.',
    },
    evidenceBasis: {
      essential:
        'The evidence is indirect. The cosmic microwave background has exactly the kind of nearly-uniform, slightly-rippled pattern inflation predicts, and space is measured to be very close to flat. Both are consistent with inflation, but neither proves it.',
      detailed:
        "Planck and WMAP measurements of the CMB match inflation's generic predictions: near-flat geometry, adiabatic fluctuations, and a spectral tilt slightly below scale invariance. The decisive test would be primordial gravitational waves imprinted as a B-mode polarisation pattern in the CMB. Despite a widely publicised claim in 2014 that was later attributed to galactic dust, that signal has not been detected.",
    },
    uncertainty: {
      essential:
        'Inflation is a well-motivated model, not an established fact. Its signature prediction has not been detected, no one knows what field would have driven it, and rival explanations exist. This entry is labelled "active research" for that reason.',
      detailed:
        'The identity of the inflaton field is unknown. The framework is flexible enough that many versions fit the data, which weakens its predictive power — a criticism its own architects have made. Alternatives such as bouncing cosmologies remain under discussion. A B-mode detection would be strong confirmation; its continued absence progressively constrains the simplest models.',
    },
    references: [referenceId('guth-1981-inflation'), referenceId('planck-2018-vi')],
    relatedEvents: [timelineEventId('recombination')],
  },

  {
    id: timelineEventId('particle-era'),
    slug: 'particle-era',
    title: 'The primordial particle soup',
    eraId: 'primordial',
    time: cosmicTime(1e-6, 'modelled', 'about a millionth of a second'),
    whenLabel: 'from about 10⁻¹² to 10⁻⁶ seconds after the beginning',
    prominence: 0.6,
    evidence: 'model',
    sectionId: sectionId('quantum'),
    summary: {
      essential:
        'Matter existed as free quarks and gluons — too hot to bind. As the Universe cooled, they locked together into the first protons and neutrons.',
    },
    whatHappened: {
      essential:
        'Before about a millionth of a second, the Universe was too hot for quarks to stay bound inside particles. They moved freely in a state called a quark–gluon plasma. As temperatures fell below roughly two trillion degrees, quarks became confined in threes, forming the protons and neutrons that make up every atomic nucleus today.',
      detailed:
        'Slightly earlier, at around 10⁻¹² seconds, the electroweak symmetry broke and particles acquired mass through the Higgs mechanism. Matter and antimatter annihilated almost completely; a residual excess of roughly one part in a billion is everything that now exists as matter. Why that excess existed is one of the major unsolved problems in physics.',
    },
    whyItMatters: {
      essential:
        'Every proton and neutron in your body dates from this moment. Nothing has made a new one since, outside of stars and laboratories.',
    },
    evidenceBasis: {
      essential:
        'Quark–gluon plasma is not just theory — it has been recreated in particle colliders by smashing heavy nuclei together, and behaves as predicted.',
      detailed:
        'Heavy-ion collisions at RHIC and the LHC produce a deconfined quark–gluon plasma that flows as an almost perfect fluid, matching predictions from quantum chromodynamics. This does not directly observe the early Universe, but it tests the physics the model relies on at the relevant energies.',
    },
    uncertainty: {
      essential:
        'The matter–antimatter imbalance is unexplained. The Standard Model predicts far too little of it, so something is missing from our understanding.',
      detailed:
        'Baryogenesis requires the Sakharov conditions — baryon number violation, C and CP violation, and departure from equilibrium. The Standard Model supplies all three in principle but produces an asymmetry many orders of magnitude too small. Proposed explanations involve physics beyond the Standard Model that has not been observed.',
    },
    references: [referenceId('busza-2018-heavy-ion'), referenceId('planck-2018-vi')],
  },

  {
    id: timelineEventId('nucleosynthesis'),
    slug: 'nucleosynthesis',
    title: 'The first chemical elements form',
    eraId: 'nucleosynthesis',
    time: cosmicTime(200, 'modelled', 'a few minutes'),
    whenLabel: 'from about 10 seconds to 20 minutes after the beginning',
    prominence: 0.85,
    evidence: 'established',
    sectionId: sectionId('universe'),
    glossaryTerms: [glossaryTermId('nucleosynthesis')],
    summary: {
      essential:
        'In about twenty minutes the Universe made nearly all of its hydrogen and helium — and then cooled too much to make anything more.',
    },
    whatHappened: {
      essential:
        'Protons and neutrons began sticking together into nuclei. In roughly twenty minutes the Universe produced about three-quarters hydrogen and one-quarter helium by mass, with traces of deuterium and lithium. Then expansion cooled everything below the temperature needed for fusion, and the process shut down. Almost no elements heavier than lithium were made.',
      technical:
        'Nucleosynthesis begins once the deuterium bottleneck clears at T ≈ 0.1 MeV. The helium-4 mass fraction Y_p ≈ 0.247 follows almost entirely from the neutron-to-proton ratio frozen out at T ≈ 0.8 MeV and subsequent neutron decay. Deuterium is a sensitive baryometer: its abundance fixes the baryon-to-photon ratio, which agrees with the independent CMB determination.',
    },
    whyItMatters: {
      essential:
        'It explains why the Universe is overwhelmingly hydrogen and helium, and it is one of the strongest pieces of evidence that the early Universe really was hot and dense.',
      detailed:
        'The theory predicts four abundances from essentially one free parameter, and that parameter is independently measured from the cosmic microwave background 380,000 years later. The two agree. Very few predictions in science are this sharp.',
    },
    evidenceBasis: {
      essential:
        'Astronomers measure hydrogen, helium and deuterium in ancient gas clouds that have barely been processed by stars. The measured amounts match the predictions closely.',
      detailed:
        'Deuterium is measured in absorption against distant quasars in near-pristine gas; helium-4 in metal-poor extragalactic HII regions. The inferred baryon density matches the value derived from the CMB acoustic peaks to within a few percent — two completely independent methods, separated by 380,000 years of cosmic history.',
    },
    uncertainty: {
      essential:
        'One number does not fit: there is about three times less lithium-7 in old stars than the theory predicts. This "lithium problem" is unresolved.',
      detailed:
        'The discrepancy may lie in stellar astrophysics — lithium being destroyed in stellar interiors — in nuclear reaction rates, or in new physics. It is a genuine open problem, though it does not overturn the broader success of the model.',
    },
    references: [
      referenceId('cyburt-2016-bbn'),
      referenceId('alpher-bethe-gamow-1948'),
      referenceId('planck-2018-vi'),
    ],
    relatedEvents: [timelineEventId('stellar-enrichment')],
  },

  {
    id: timelineEventId('recombination'),
    slug: 'recombination',
    title: 'The Universe becomes transparent',
    eraId: 'opaque',
    time: cosmicTime(1.2e13, 'measured', '380,000 years'),
    whenLabel: 'about 380,000 years after the beginning',
    prominence: 1,
    evidence: 'established',
    sectionId: sectionId('universe'),
    visualizationId: visualizationId('primordial-plasma'),
    glossaryTerms: [glossaryTermId('cmb'), glossaryTermId('redshift')],
    summary: {
      essential:
        'The Universe cooled enough for electrons to join nuclei and form the first atoms. Light was suddenly free to travel — and we still see it today.',
    },
    whatHappened: {
      essential:
        'Until now, free electrons scattered light constantly, making the Universe an opaque glowing fog. At about 3,000 degrees, electrons combined with nuclei to make neutral atoms. Light stopped being scattered and streamed away in every direction. That light is still arriving: stretched by 13.8 billion years of expansion, it is now microwave radiation at 2.725 degrees above absolute zero, and it fills the whole sky.',
      detailed:
        'The transition is called recombination, a slightly misleading name — the electrons and nuclei had never been combined before. What we observe is the "surface of last scattering": not a place, but the moment in every direction at which light last bounced off a free electron.',
      technical:
        'Recombination occurs at z ≈ 1090, delayed below the naive T = 13.6 eV expectation by the enormous photon-to-baryon ratio. The resulting CMB is a blackbody to within 50 parts per million, with anisotropies of order 10⁻⁵ whose angular power spectrum encodes the baryon density, dark matter density, spatial curvature and the primordial spectral index.',
    },
    whyItMatters: {
      essential:
        'This is the oldest thing anyone can see. Every measurement of the early Universe — its composition, its geometry, its age — comes from reading the faint patterns in this light.',
    },
    evidenceBasis: {
      essential:
        'The radiation was detected in 1965, and has since been mapped in extraordinary detail by satellites. Its temperature is the same in every direction to about one part in 100,000, and the tiny variations match theoretical predictions precisely.',
      detailed:
        'COBE confirmed the near-perfect blackbody spectrum and made the first detection of the anisotropies in 1992. WMAP and then Planck mapped them across the whole sky. The positions and heights of the acoustic peaks in the angular power spectrum determine the cosmological parameters — including the age of the Universe, 13.797 ± 0.023 billion years.',
    },
    references: [
      referenceId('penzias-wilson-1965'),
      referenceId('fixsen-2009-cmb-temperature'),
      referenceId('smoot-1992-cobe'),
      referenceId('bennett-2013-wmap9'),
      referenceId('planck-2018-vi'),
    ],
    relatedEvents: [timelineEventId('hot-dense-beginning'), timelineEventId('dark-ages')],
  },

  {
    id: timelineEventId('dark-ages'),
    slug: 'dark-ages',
    title: 'The Dark Ages',
    eraId: 'dark-ages',
    time: cosmicTimeFromYearsAgo(13.7e9, 'modelled'),
    whenLabel: 'from 380,000 to roughly 100–200 million years after the beginning',
    prominence: 0.55,
    evidence: 'model',
    sectionId: sectionId('universe'),
    visualizationId: visualizationId('structure-formation'),
    glossaryTerms: [glossaryTermId('dark-matter')],
    summary: {
      essential:
        'The fog cleared and there was nothing to see. No stars existed. For a hundred million years the Universe was dark, cold and nearly featureless.',
    },
    whatHappened: {
      essential:
        'After the first atoms formed, the Universe held nothing that produced light. It contained cooling hydrogen and helium gas, and dark matter that we can detect only by its gravity. Slowly, gravity pulled the slightly denser regions together while the emptier regions emptied further.',
      detailed:
        'Dark matter, unimpeded by radiation pressure, began collapsing into halos first. Ordinary gas fell into those gravitational wells. The faint density ripples imprinted in the CMB — one part in 100,000 — grew over a hundred million years into the first collapsing clouds.',
    },
    whyItMatters: {
      essential:
        'This is where the seeds visible in the microwave background grew into the structures that became galaxies. It connects the smooth early Universe to the lumpy one we live in.',
    },
    evidenceBasis: {
      essential:
        'Nothing from this era has been directly observed. It is reconstructed by starting from the measured cosmic microwave background and computing how gravity would have amplified those patterns.',
      detailed:
        'The reconstruction is a simulation constrained at both ends: the initial conditions come from CMB measurements, and the outcome must reproduce the observed distribution of galaxies. Radio astronomers are attempting to detect this era directly through the redshifted 21-centimetre line of neutral hydrogen; results so far are contested.',
    },
    uncertainty: {
      essential:
        'We have no direct observations of this period at all. When exactly the first objects formed, and how quickly, is still being worked out.',
      detailed:
        'The 21-cm signal would be the first direct probe. A claimed detection in 2018 has not been independently confirmed and its interpretation is disputed. The dark-matter component of the model, though strongly supported by gravitational evidence, has never been identified as a particle.',
    },
    references: [
      referenceId('bromm-larson-2004-first-stars'),
      referenceId('planck-2018-vi'),
      referenceId('springel-2005-millennium'),
    ],
    relatedEvents: [timelineEventId('first-stars')],
  },

  {
    id: timelineEventId('first-stars'),
    slug: 'first-stars',
    title: 'The first stars ignite',
    eraId: 'first-light',
    time: cosmicTimeFromYearsAgo(13.6e9, 'modelled'),
    whenLabel: 'roughly 100–250 million years after the beginning',
    prominence: 0.95,
    evidence: 'model',
    sectionId: sectionId('stars-galaxies'),
    visualizationId: visualizationId('structure-formation'),
    summary: {
      essential:
        'The first collapsing gas clouds became hot enough at their centres to start fusion. After a hundred million years of darkness, the Universe had light again.',
    },
    whatHappened: {
      essential:
        'Clouds of pure hydrogen and helium collapsed under gravity until their cores reached about ten million degrees and nuclear fusion began. These first stars were probably very massive — tens to hundreds of times the mass of the Sun — burned ferociously bright, and died within a few million years.',
      detailed:
        'Without heavier elements, primordial gas cools inefficiently, so it fragments into much larger clumps than gas does today. That is why the first stars are expected to have been unusually massive. Their intense ultraviolet output began to ionise the surrounding hydrogen, and their deaths as supernovae seeded the Universe with the first elements heavier than lithium.',
    },
    whyItMatters: {
      essential:
        'Everything heavier than helium — the carbon in your cells, the oxygen you breathe, the iron in your blood — was made inside stars. This is where that manufacturing began.',
    },
    evidenceBasis: {
      essential:
        'No individual first-generation star has ever been seen. The picture comes from computer simulations of collapsing primordial gas, and from the chemical fingerprints they left in the oldest surviving stars.',
      detailed:
        'Extremely metal-poor stars in the Milky Way halo carry abundance patterns consistent with enrichment by a small number of very massive early supernovae. JWST has pushed direct galaxy observations back to roughly 300 million years after the beginning, but has not yet isolated a genuine Population III star.',
    },
    uncertainty: {
      essential:
        'We do not know exactly when the first stars formed, how massive they really were, or whether any survive. This is an active area where observations are arriving quickly.',
      detailed:
        'Predicted formation redshifts span z ≈ 20–30, and predicted masses range from tens to several hundred solar masses depending on how simulated clouds fragment. Claims of Population III detections in JWST data have so far been tentative or contested.',
    },
    references: [
      referenceId('bromm-larson-2004-first-stars'),
      referenceId('curtis-lake-2023-jwst'),
    ],
    relatedEvents: [timelineEventId('first-galaxies'), timelineEventId('stellar-enrichment')],
  },

  {
    id: timelineEventId('first-galaxies'),
    slug: 'first-galaxies',
    title: 'The first galaxies assemble',
    eraId: 'first-light',
    time: cosmicTimeFromYearsAgo(13.4e9, 'measured'),
    whenLabel: 'within the first 300–500 million years',
    prominence: 0.85,
    evidence: 'established',
    sectionId: sectionId('stars-galaxies'),
    visualizationId: visualizationId('structure-formation'),
    summary: {
      essential:
        'Stars gathered into the first galaxies. The James Webb Space Telescope has now confirmed galaxies existing when the Universe was only about 300 million years old.',
    },
    whatHappened: {
      essential:
        'Groups of early stars, bound together inside halos of dark matter, formed the first galaxies. They were small, chaotic and intensely star-forming compared with galaxies today. Their ultraviolet light gradually stripped electrons back off the hydrogen filling space — a process called reionization that took several hundred million more years to complete.',
      detailed:
        'These early systems were perhaps a thousandth the mass of the modern Milky Way. They merged repeatedly, and the merger products are the cores of the galaxies we see now. Reionization was patchy: ionised bubbles grew around galaxies and eventually overlapped, finishing roughly one billion years after the beginning.',
    },
    whyItMatters: {
      essential:
        'Galaxies are where stars are made. Every subsequent step — heavier elements, planets, life — happens inside one.',
    },
    evidenceBasis: {
      essential:
        'Directly observed. JWST spectroscopically confirmed galaxies at redshifts above 13, meaning we are seeing them as they were roughly 320 million years after the beginning.',
      detailed:
        'Spectroscopic confirmation matters: photometric candidates at extreme redshift can be mimicked by dust-reddened lower-redshift galaxies. Curtis-Lake and colleagues confirmed four galaxies at z = 10.3–13.2 with JWST/NIRSpec. Independently, the CMB optical depth measured by Planck constrains when reionization occurred.',
    },
    uncertainty: {
      essential:
        'Several of these very early galaxies look brighter and more massive than models predicted. Whether that means the models need adjusting, or the masses are being overestimated, is being actively debated.',
      detailed:
        'The apparent overabundance of luminous z > 10 galaxies may reflect a more efficient early star formation, a top-heavy initial mass function, bursty star formation, or systematic errors in converting light to stellar mass. It is not, as sometimes reported, evidence against the Big Bang model — the objects are being dated by that very model.',
    },
    references: [
      referenceId('curtis-lake-2023-jwst'),
      referenceId('stark-2016-first-billion-years'),
      referenceId('planck-2018-vi'),
    ],
    relatedEvents: [timelineEventId('first-stars'), timelineEventId('galaxy-evolution')],
  },
];
