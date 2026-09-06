/**
 * Milestones from galaxy evolution to the early Earth.
 *
 * The transition point of the whole timeline: cosmic history stops being about
 * everything everywhere and starts being about one specific star and one
 * specific rock.
 */
import { cosmicTimeFromYearsAgo } from '../../schema/cosmicTime';
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { timelineEventId, type TimelineEvent } from '../../schema/timeline';
import { visualizationId } from '../../schema/visualization';

export const STARS_AND_EARTH_EVENTS: readonly TimelineEvent[] = [
  {
    id: timelineEventId('galaxy-evolution'),
    slug: 'galaxy-evolution',
    title: 'Galaxies grow, collide and merge',
    eraId: 'galaxies',
    time: cosmicTimeFromYearsAgo(10e9, 'modelled'),
    whenLabel: 'from about 1 billion years after the beginning onwards',
    prominence: 0.7,
    evidence: 'model',
    sectionId: sectionId('stars-galaxies'),
    visualizationId: visualizationId('structure-formation'),
    glossaryTerms: [glossaryTermId('dark-matter')],
    summary: {
      essential:
        'Over billions of years small galaxies merged into large ones, arranged along a vast web of filaments with near-empty voids between them.',
    },
    whatHappened: {
      essential:
        'Galaxies did not form once and sit still. They grew by pulling in gas and by colliding with each other. Gravity organised them into a structure sometimes called the cosmic web: dense knots of galaxy clusters linked by filaments, separated by enormous voids. Star formation across the Universe peaked around 10 billion years ago and has been declining since.',
      detailed:
        'The Milky Way assembled this way, and is still doing it — it has absorbed smaller galaxies repeatedly and will merge with Andromeda in roughly four billion years. Most large galaxies host a supermassive black hole at their centre, and the growth of those black holes appears to be linked to the growth of their galaxies, though the mechanism is debated.',
    },
    whyItMatters: {
      essential:
        'The cosmic web is the largest structure there is. Its shape is a direct record of how gravity amplified the tiny ripples visible in the microwave background.',
    },
    evidenceBasis: {
      essential:
        'Galaxy surveys have mapped millions of galaxies in three dimensions, revealing the filamentary structure. Computer simulations starting from the measured early Universe produce the same pattern.',
      detailed:
        'Because light takes time to arrive, looking further away means looking further back. Surveys therefore observe galaxy populations at many cosmic epochs directly, and the observed evolution matches simulations such as the Millennium run — but only if dark matter is included.',
    },
    uncertainty: {
      essential:
        'The overall picture is solid, but the details of how galaxies form stars, and how their central black holes grow, are not settled.',
      detailed:
        'Simulations require tuned prescriptions for star formation and for feedback from supernovae and active galactic nuclei, because those processes occur far below the resolution of a cosmological simulation. Several discrepancies between simulations and small-scale observations remain under investigation.',
    },
    references: [
      referenceId('springel-2005-millennium'),
      referenceId('planck-2018-vi'),
      referenceId('rubin-ford-1970'),
    ],
    relatedEvents: [timelineEventId('first-galaxies'), timelineEventId('stellar-enrichment')],
  },

  {
    id: timelineEventId('stellar-enrichment'),
    slug: 'stellar-enrichment',
    title: 'Stars manufacture the heavier elements',
    eraId: 'galaxies',
    time: cosmicTimeFromYearsAgo(9e9, 'modelled'),
    whenLabel: 'continuously, from the first stars to the present day',
    prominence: 0.75,
    evidence: 'established',
    sectionId: sectionId('stars-galaxies'),
    glossaryTerms: [glossaryTermId('nucleosynthesis')],
    summary: {
      essential:
        'Generation after generation of stars fused light elements into heavier ones and scattered them on dying. The atoms in your body were made this way.',
    },
    whatHappened: {
      essential:
        'Stars fuse hydrogen into helium, and massive stars go further — carbon, oxygen, neon, silicon, and finally iron. When such a star explodes as a supernova it scatters those elements into space, where they become part of the next generation of stars and planets. Some of the heaviest elements, including gold and platinum, are made when neutron stars collide.',
      technical:
        'Fusion releases energy up to iron-56, the peak of the binding-energy curve; heavier nuclei form by neutron capture. The slow (s-) process operates in evolved low-mass stars, the rapid (r-) process in explosive environments. Observation of the kilonova accompanying the neutron-star merger GW170817 confirmed the r-process site directly.',
    },
    whyItMatters: {
      essential:
        'Rocky planets and living things are made almost entirely of elements that did not exist in the early Universe. Without several generations of stars there would be nothing to build either from.',
    },
    evidenceBasis: {
      essential:
        'The chemistry of stars can be read from their light. Older stars contain fewer heavy elements than younger ones — exactly what you expect if each generation enriches the next.',
      detailed:
        "Spectroscopy measures elemental abundances in stellar atmospheres. The observed correlation between a star's age and its metal content, the abundance patterns in supernova remnants, and the theoretical framework laid out in 1957 by Burbidge, Burbidge, Fowler and Hoyle all agree. Gravitational-wave and electromagnetic observation of a neutron-star merger in 2017 detected freshly synthesised heavy elements directly.",
    },
    references: [referenceId('b2fh-1957'), referenceId('ligo-2016-gw150914')],
    relatedEvents: [timelineEventId('nucleosynthesis'), timelineEventId('solar-system')],
  },

  {
    id: timelineEventId('accelerating-expansion'),
    slug: 'accelerating-expansion',
    title: 'The expansion begins to accelerate',
    eraId: 'galaxies',
    time: cosmicTimeFromYearsAgo(6e9, 'measured'),
    whenLabel: 'roughly 5 to 6 billion years ago',
    prominence: 0.6,
    evidence: 'established',
    sectionId: sectionId('dark-universe'),
    glossaryTerms: [glossaryTermId('dark-energy'), glossaryTermId('hubble-constant')],
    summary: {
      essential:
        'The expansion of the Universe stopped slowing down and started speeding up. What is causing it is unknown; the placeholder name is dark energy.',
    },
    whatHappened: {
      essential:
        'For most of cosmic history, gravity slowed the expansion. Around five to six billion years ago, as matter thinned out, something else took over and the expansion began to accelerate. That "something else" now accounts for roughly 70% of the energy content of the Universe.',
      technical:
        'In ΛCDM the acceleration begins once the cosmological constant term overtakes the matter term, at z ≈ 0.6. Planck 2018 gives Ω_Λ ≈ 0.685 and Ω_m ≈ 0.315, with the dark-energy equation of state consistent with w = −1 within current uncertainties.',
    },
    whyItMatters: {
      essential:
        'Most of the Universe is made of something nobody has identified. Whatever dark energy is, it will determine how the Universe ends.',
    },
    evidenceBasis: {
      essential:
        'Two independent teams in the late 1990s found that distant exploding stars were fainter — and therefore further away — than a decelerating universe predicts. The result has since been confirmed by several unrelated methods.',
      detailed:
        'Type Ia supernovae serve as standardisable candles. The 1998 and 1999 results have been corroborated by the CMB, by baryon acoustic oscillations in galaxy surveys, and by gravitational lensing. Acceleration is established; its cause is not.',
    },
    uncertainty: {
      essential:
        'Nobody knows what dark energy is. It has never been detected as anything other than an effect on cosmic expansion, and the simplest theoretical explanation is off by an enormous factor.',
      detailed:
        'If dark energy is vacuum energy, quantum field theory estimates exceed the observed value by many tens of orders of magnitude — arguably the worst prediction in physics. Alternatives include a slowly evolving field or a modification of gravity on large scales. Separately, measurements of the present expansion rate from the CMB and from the local distance ladder disagree by about 5σ; this "Hubble tension" is unresolved.',
    },
    references: [
      referenceId('riess-1998'),
      referenceId('perlmutter-1999'),
      referenceId('planck-2018-vi'),
      referenceId('riess-2022-sh0es'),
    ],
    relatedEvents: [timelineEventId('present-day')],
  },

  {
    id: timelineEventId('solar-system'),
    slug: 'solar-system',
    title: 'The Solar System forms',
    eraId: 'solar-system',
    time: cosmicTimeFromYearsAgo(4.568e9, 'measured'),
    whenLabel: '4.568 billion years ago',
    whenRange: 'Oldest dated solids: 4,568.2 ± 0.5 million years',
    prominence: 1,
    evidence: 'established',
    sectionId: sectionId('stars-galaxies'),
    visualizationId: visualizationId('protoplanetary-disk'),
    summary: {
      essential:
        'A cloud of gas and dust — enriched by earlier generations of stars — collapsed into the Sun, surrounded by a disc that became the planets.',
    },
    whatHappened: {
      essential:
        'A region of a molecular cloud collapsed under its own gravity. Most of the material fell to the centre and became the Sun; the rest flattened into a spinning disc. Dust grains in that disc stuck together into pebbles, then boulders, then bodies large enough to pull in their neighbours. Within a few million years the planets had largely formed.',
      detailed:
        'Close to the Sun only rock and metal could stay solid, producing the terrestrial planets. Beyond the frost line, ices survived and the growing cores were massive enough to capture hydrogen and helium, producing the giant planets. The whole main phase took a few tens of millions of years.',
    },
    whyItMatters: {
      essential:
        'This is where the Earth comes from — and the date is one of the most precisely known numbers in all of deep time.',
    },
    evidenceBasis: {
      essential:
        'Radioactive dating of meteorites. Certain inclusions in primitive meteorites are the oldest solids known, and lead-isotope dating gives their age to within about half a million years.',
      detailed:
        'Calcium–aluminium-rich inclusions in the Allende-type carbonaceous chondrites date to 4568.2 ± 0.5 Ma by Pb–Pb dating. Independently, telescopes observe protoplanetary discs around young stars elsewhere in the galaxy at every stage of the process, including ALMA images showing gaps carved by forming planets.',
    },
    references: [
      referenceId('bouvier-wadhwa-2010-solar-system-age'),
      referenceId('patterson-1956-age-of-earth'),
    ],
    relatedEvents: [timelineEventId('earth-forms'), timelineEventId('stellar-enrichment')],
  },

  {
    id: timelineEventId('earth-forms'),
    slug: 'earth-forms',
    title: 'Earth forms',
    eraId: 'solar-system',
    time: cosmicTimeFromYearsAgo(4.54e9, 'measured'),
    whenLabel: 'about 4.54 billion years ago',
    prominence: 1,
    evidence: 'established',
    sectionId: sectionId('earth'),
    visualizationId: visualizationId('protoplanetary-disk'),
    summary: {
      essential:
        'The Earth accreted from the disc of debris around the young Sun, and separated into a metal core and a rocky mantle while still molten.',
    },
    whatHappened: {
      essential:
        'Countless collisions built the Earth up over tens of millions of years. The energy of those impacts, plus heat from radioactive decay, kept the young planet largely molten. Dense iron sank to the centre to form the core; lighter rock floated up to form the mantle and, later, a crust.',
      detailed:
        "Core formation happened early — isotopic evidence puts it within the first ~30 million years. The differentiated core is what generates Earth's magnetic field today, which in turn shields the atmosphere from being stripped by the solar wind.",
    },
    whyItMatters: {
      essential:
        'Everything that follows in this timeline happens on this one object. Its structure — a metal core, a rocky mantle, a thin crust — was set in the first few tens of millions of years.',
    },
    evidenceBasis: {
      essential:
        'Radiometric dating of meteorites and of the oldest Earth minerals, combined with the isotopic composition of Earth rocks, which shows the planet formed from the same material at the same time as the rest of the Solar System.',
      detailed:
        'Clair Patterson established the age in 1956 by lead-isotope dating of meteorites and terrestrial samples, obtaining ~4.55 billion years. Hafnium–tungsten isotope systematics date core segregation to the first tens of millions of years.',
    },
    references: [
      referenceId('patterson-1956-age-of-earth'),
      referenceId('bouvier-wadhwa-2010-solar-system-age'),
    ],
    relatedEvents: [timelineEventId('moon-forming-impact'), timelineEventId('early-earth')],
  },

  {
    id: timelineEventId('moon-forming-impact'),
    slug: 'moon-forming-impact',
    title: 'A giant impact forms the Moon',
    eraId: 'solar-system',
    time: cosmicTimeFromYearsAgo(4.5e9, 'modelled'),
    whenLabel: 'about 4.5 billion years ago',
    prominence: 0.75,
    evidence: 'model',
    sectionId: sectionId('earth'),
    summary: {
      essential:
        'A Mars-sized body is thought to have struck the young Earth. Debris thrown into orbit coalesced into the Moon.',
    },
    whatHappened: {
      essential:
        'In the leading model, a protoplanet roughly the size of Mars collided with the early Earth. The impact melted much of the planet and threw a disc of vaporised rock into orbit, which condensed and assembled into the Moon within a few years to a few centuries.',
    },
    whyItMatters: {
      essential:
        "The Moon stabilises Earth's tilt, which keeps the climate comparatively steady, and it raises the tides. Both have shaped the planet's habitability.",
    },
    evidenceBasis: {
      essential:
        'The Moon has almost no iron core, is depleted in volatile substances, and Earth and Moon rocks share nearly identical oxygen isotope signatures. A giant impact explains all three.',
      detailed:
        "Apollo samples showed the Moon is made of material resembling Earth's mantle rather than a captured asteroid. Numerical simulations of an oblique impact by a Mars-mass body reproduce the Moon's mass and the Earth–Moon angular momentum.",
    },
    uncertainty: {
      essential:
        'The isotopic similarity is almost too good: a simple impact should have left the Moon looking more like the impactor than like Earth. Several variants of the model have been proposed to fix this, and none is settled.',
      detailed:
        'Proposed resolutions include a much more energetic impact that fully mixed the material, a fast-spinning proto-Earth, or an impactor that formed at the same orbital distance and so had the same isotopic composition. The event itself is not directly dated; ages inferred from lunar samples span roughly 4.35–4.51 Ga.',
    },
    references: [referenceId('canup-asphaug-2001-moon')],
  },

  {
    id: timelineEventId('early-earth'),
    slug: 'early-earth',
    title: 'Oceans and the first crust',
    eraId: 'solar-system',
    time: cosmicTimeFromYearsAgo(4.4e9, 'measured'),
    whenLabel: 'by about 4.4 billion years ago',
    prominence: 0.7,
    evidence: 'established',
    sectionId: sectionId('earth'),
    summary: {
      essential:
        'Far sooner than once believed, Earth had a solid crust and liquid water — within about 150 million years of forming.',
    },
    whatHappened: {
      essential:
        "The magma ocean cooled, a crust formed, and water — delivered with the planet's building blocks and by later impacts — condensed into oceans. The atmosphere at this stage had essentially no free oxygen; it was mostly nitrogen and carbon dioxide.",
      detailed:
        'The picture of the Hadean as a permanently molten hellscape has been revised. Evidence now suggests a comparatively cool, wet surface for much of it, punctuated by large impacts.',
    },
    whyItMatters: {
      essential:
        'Liquid water existed on Earth almost as soon as it was physically possible. That leaves a very long window in which life could have started.',
    },
    evidenceBasis: {
      essential:
        'Tiny zircon crystals from Western Australia, dated to 4.4 billion years, have an oxygen isotope composition that indicates they formed from rock that had interacted with liquid water.',
      detailed:
        'The Jack Hills detrital zircons are the oldest known terrestrial material. Their elevated δ¹⁸O implies low-temperature aqueous alteration of their source rocks, which requires surface water and therefore a crust and an atmosphere. The host rocks themselves have not survived.',
    },
    uncertainty: {
      essential:
        'The zircons are individual grains, not intact rock, so how widespread oceans and continents were at that time is genuinely unclear. How Earth got its water is also still debated.',
      detailed:
        'The isotopic argument is inferential and has been challenged. Water delivery models range from local accretion of hydrated silicates to later delivery by carbonaceous asteroids; measured deuterium-to-hydrogen ratios favour asteroids over comets, but do not settle the question.',
    },
    references: [referenceId('wilde-2001-jack-hills-zircons')],
    relatedEvents: [timelineEventId('earliest-life')],
  },
];
