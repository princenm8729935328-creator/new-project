/**
 * Stars & Galaxies — cosmic chemistry, and where we came from.
 *
 * "Where did the atoms in your body come from" is the emotional centre of the
 * section, and the way to make it land is precision rather than awe. The
 * ordinary version — "you are made of stardust" — is a slogan that flattens
 * five distinct processes into one. Naming them separately, and saying which
 * atoms in a human body came from which, is both more moving and more true.
 *
 * The two "first" topics carry the section's sharpest honesty problem: no
 * individual Population III star has ever been observed, and it is likely none
 * ever will be. Everything we say about them is simulation plus indirect
 * chemical evidence, and the topics say so in their own voice rather than in a
 * footnote.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const STARS = sectionId('stars-galaxies');
const REVIEWED = '2026-09-09';

export const STARS_CHEMISTRY_TOPICS: readonly Topic[] = [
  {
    id: topicId('where-did-the-atoms-in-your-body-come-from'),
    slug: 'where-did-the-atoms-in-your-body-come-from',
    sectionId: STARS,
    order: 30,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Where did the atoms in your body come from?',
    subtitle: 'Five different origins, and you can name which is which.',
    summary: {
      essential:
        'Your hydrogen — about 10 percent of your mass, and every water molecule in you — was made in the first minutes of the Universe. Your carbon and nitrogen came mostly from dying medium-sized stars. Your oxygen came mostly from massive stars that exploded. Your iron came substantially from a different kind of supernova. And the trace of iodine in your thyroid was probably made when two neutron stars collided.',
      detailed:
        'Every one of those atoms then had to be blown into interstellar space, mixed into a gas cloud, incorporated into the cloud that collapsed to form the Sun 4.6 billion years ago, condensed into the rocky material that became Earth, and eventually taken up by a living thing. The atoms are far older than the Sun. Most are older than the Solar System by billions of years.',
      technical:
        'By mass, a human is ~65% oxygen, ~18% carbon, ~10% hydrogen, ~3% nitrogen, ~1.4% calcium, ~1.1% phosphorus, with iron at ~0.006%. Mapping those onto production sites using galactic chemical evolution yields: H from BBN; C and N predominantly from AGB stars with a substantial massive-star contribution to C; O, Mg, Si, S, Ca predominantly from core-collapse supernovae; Fe roughly half from thermonuclear supernovae; and trace heavy elements including I from r-process events.',
    },
    glossaryTerms: [
      glossaryTermId('nucleosynthesis'),
      glossaryTermId('r-process'),
      glossaryTermId('metallicity'),
    ],
    related: [
      topicId('making-the-elements'),
      topicId('stellar-remnants-and-cosmic-recycling'),
      topicId('from-stars-to-planets'),
    ],
    blocks: [
      {
        id: 'the-question',
        kind: 'prose',
        text: {
          essential:
            'Hold your hand up. Every atom in it was assembled somewhere, at some time, by a specific physical process. None of them was made on Earth. Most were made before the Sun existed. And they did not all come from the same place — which is the part the familiar phrase leaves out.',
          detailed:
            'Start with the most abundant. By number of atoms, you are mostly hydrogen. Every one of those hydrogen nuclei is a single proton that has existed, unchanged, since the first second after the Big Bang. It has never been inside a star. It is, by a very wide margin, the oldest thing you own.',
        },
      },
      {
        id: 'viz-journey',
        kind: 'visualization',
        visualizationId: visualizationId('atom-origins-journey'),
      },
      {
        id: 'claim-hydrogen',
        kind: 'claim',
        statement: {
          essential:
            'The hydrogen in your body — roughly 10 percent of your mass, and two thirds of your atoms — was made in the first few minutes after the Big Bang, about 13.8 billion years ago. It is primordial.',
          detailed:
            'Stars destroy hydrogen; they do not make it. So every hydrogen nucleus in every water molecule in every cell of you predates all stars. It formed when the Universe cooled enough for protons to stop being torn apart, and it has been passed along ever since. Some of it has been inside stars — the Sun contains plenty of hydrogen that has not yet been fused — but the nucleus itself has never been transmuted.',
        },
        evidence: 'established',
        references: [referenceId('cyburt-2016-bbn'), referenceId('planck-2018-vi')],
      },
      {
        id: 'claim-cno',
        kind: 'claim',
        statement: {
          essential:
            'Your carbon and nitrogen came mainly from stars a few times the Sun’s mass, which made them late in life and shed them gently in winds rather than explosions. Your oxygen — the single largest component of your body by mass — came mainly from massive stars and their core-collapse supernovae.',
          detailed:
            'The split is not clean, and the honest version says so. Carbon has substantial contributions from both asymptotic giant branch stars and massive stars, with the relative proportion still debated and dependent on how stellar winds and rotation are modelled. Nitrogen is harder still: it has both a "primary" channel that works even in metal-free stars and a "secondary" channel that requires pre-existing carbon and oxygen, and disentangling them is an active problem. What is secure is that oxygen tracks massive stars and that carbon and nitrogen have a large intermediate-mass contribution.',
        },
        evidence: 'model',
        references: [
          referenceId('kobayashi-2020-origin-of-elements'),
          referenceId('herwig-2005-agb'),
        ],
      },
      {
        id: 'claim-iron-iodine',
        kind: 'claim',
        statement: {
          essential:
            'The iron carrying oxygen in your blood came roughly half from thermonuclear supernovae — exploding white dwarfs — and half from massive stars. The iodine your thyroid needs was made by rapid neutron capture, and neutron-star mergers are a confirmed site for that.',
          detailed:
            'The iron split is inferred from how the iron-to-oxygen ratio in stars has changed over the Galaxy’s history, which acts as a clock: thermonuclear supernovae contribute with a delay of hundreds of millions of years while core-collapse supernovae contribute almost immediately. For iodine and other r-process elements, the 2017 neutron-star merger provided direct evidence of production, but whether mergers account for all of it — or whether rare supernova variants also contribute — is not settled.',
        },
        evidence: 'inference',
        references: [
          referenceId('kobayashi-2020-origin-of-elements'),
          referenceId('watson-2019-kilonova-strontium'),
          referenceId('abbott-2017-gw170817'),
        ],
      },
      {
        id: 'stardust-precise',
        kind: 'callout',
        tone: 'misconception',
        title: 'Saying it precisely is better, not worse',
        text: {
          essential:
            '"We are made of stardust" is a lovely sentence and it compresses several different things into one. More precisely: you are made of primordial hydrogen from the Big Bang, plus elements assembled by at least four distinct processes in at least three distinct kinds of object, over ten billion years of galactic chemistry, and then mixed into one cloud that happened to collapse into the Sun.',
          detailed:
            'The precise version is more remarkable, not less. It says the atoms in your hand have separate biographies — that the oxygen and the iron in the same cell came from different kinds of explosion, separated by hundreds of millions of years, and met for the first time in the cloud that became the Solar System.',
        },
        references: [referenceId('kobayashi-2020-origin-of-elements')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'body-oxygen',
            label: 'Oxygen as a fraction of human body mass',
            value: 65,
            unit: 'percent (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Mostly bound up in water. Oxygen is the most abundant element in the body by mass and the third most abundant in the Universe, and both facts trace to massive stars.',
            references: [referenceId('asplund-2021-solar-composition')],
          },
          {
            id: 'body-hydrogen-atoms',
            label: 'Hydrogen as a fraction of the atoms in a human body',
            value: 62,
            unit: 'percent (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'By count rather than by mass. Nearly two thirds of your atoms are individual protons that have existed since the first minutes of the Universe.',
            references: [referenceId('cyburt-2016-bbn')],
          },
          {
            id: 'atom-age',
            label: 'Age of a typical heavy atom in your body',
            value: 6e9,
            unit: 'years (order of magnitude)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Older than the Solar System, which formed 4.57 billion years ago from gas that had already been enriched for roughly nine billion years. Individual atoms vary enormously.',
            references: [referenceId('bouvier-wadhwa-2010-solar-system-age')],
          },
        ],
      },
      {
        id: 'link-planets',
        kind: 'cross-link',
        topicId: topicId('from-stars-to-planets'),
        rationale: 'How the enriched material actually gets assembled into a rocky world.',
      },
    ],
    furtherReading: [referenceId('kobayashi-2020-origin-of-elements'), referenceId('b2fh-1957')],
  },

  {
    id: topicId('from-stars-to-planets'),
    slug: 'from-stars-to-planets',
    sectionId: STARS,
    order: 31,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'From stars to planets',
    subtitle: 'Planets are what the leftovers do.',
    summary: {
      essential:
        'Every young star is surrounded by a disk of leftover gas and dust. Dust grains in that disk stick together into pebbles, pebbles into boulders, boulders into bodies large enough for gravity to take over — and those grow into planets. Planet formation is not a rare accident; it is the ordinary fate of a disk.',
      detailed:
        'Those disks are now imaged directly, and many of them show sharp rings and gaps. What is not settled is the middle of the process. Getting from millimetre grains to kilometre bodies runs into a real difficulty: at around a metre in size, objects drift inward toward the star faster than they can grow, and they should be lost. Several solutions are proposed and none is confirmed.',
      technical:
        'The metre-size barrier arises because gas-drag-induced radial drift peaks at Stokes number ~1, giving inspiral timescales of ~100 yr at 1 AU — far shorter than growth timescales through pairwise collisions, which also tend to bounce or fragment at those sizes. Leading resolutions are the streaming instability, which concentrates pebbles into self-gravitating clumps that collapse directly to ~100 km planetesimals, and pressure-bump trapping. Subsequent growth proceeds by pebble accretion, which is far more efficient than planetesimal accretion.',
    },
    glossaryTerms: [glossaryTermId('protoplanetary-disk'), glossaryTermId('interstellar-medium')],
    related: [
      topicId('how-stars-are-born'),
      topicId('where-did-the-atoms-in-your-body-come-from'),
      topicId('why-stellar-generations-matter'),
    ],
    blocks: [
      {
        id: 'leftovers',
        kind: 'prose',
        text: {
          essential:
            'When a cloud collapses to make a star, not all of it lands on the star. Rotation prevents that: material with too much angular momentum settles into a disk instead, orbiting in a plane. That disk is a fraction of a percent of the total mass, and everything that is not the star is built out of it.',
          detailed:
            'The composition of the disk matters enormously. Close to the star it is too hot for water ice or organic molecules to survive, so only rock and metal condense. Beyond a certain distance — the snow line — ice is stable, and there is suddenly far more solid material available. That is why the inner Solar System has small rocky planets and the outer one has giants: the same disk, split by a temperature boundary.',
        },
      },
      {
        id: 'viz-disk',
        kind: 'visualization',
        visualizationId: visualizationId('protoplanetary-disk'),
      },
      {
        id: 'claim-disks-observed',
        kind: 'claim',
        statement: {
          essential:
            'Protoplanetary disks have been imaged in detail around many young stars, and a large fraction show concentric rings and gaps. The disks and their structures are direct observations.',
          detailed:
            'The DSHARP survey imaged twenty nearby disks at about five astronomical units of resolution, and rings and gaps turned out to be common rather than exceptional. The natural interpretation is that forming planets are clearing those gaps, and in a small number of cases a planet has been directly detected within one. But rings can also be produced by condensation fronts, magnetohydrodynamic effects and dust instabilities — so for most disks the planet interpretation remains an inference.',
        },
        evidence: 'inference',
        references: [referenceId('andrews-2018-dsharp')],
      },
      {
        id: 'metre-barrier',
        kind: 'open-question',
        question: 'How do pebbles become planetesimals?',
        whyItMatters: {
          essential:
            'Grains stick together easily up to about a millimetre. Once bodies reach a hundred kilometres or so, gravity does the rest. Between those two sizes there is a real problem: metre-sized objects spiral into the star within a few hundred years, faster than they can grow, and collisions at those sizes tend to bounce or shatter rather than stick.',
          detailed:
            'This is not a minor gap in the story — it is the step that makes everything afterwards possible, and it is unsolved in the sense that no single mechanism has been confirmed. The leading candidate is the streaming instability, in which the mutual drag between pebbles and gas concentrates them into dense clumps that collapse directly under their own gravity, skipping the dangerous size range entirely. It works in simulations and is consistent with the observed size distribution of Kuiper belt objects.',
        },
        whatWouldSettleIt: {
          essential:
            'Direct evidence of pebble concentration in real disks, and detailed comparison between predicted and observed planetesimal size distributions. Sample-return missions to primitive asteroids provide another route, since the internal structure of a body tells you something about how it was assembled.',
          detailed:
            'Observations of dust traps in disk rings are consistent with the required concentration, and the size distribution of cold classical Kuiper belt objects matches streaming-instability predictions reasonably well. Neither is decisive. Laboratory work on collisional sticking at low velocity continues to constrain which growth pathways are even possible.',
        },
        references: [referenceId('drazkowska-2023-planet-formation')],
      },
      {
        id: 'link-earth',
        kind: 'cross-link',
        topicId: topicId('planetary-systems'),
        rationale:
          'How the Solar System in particular came out of this process is developed in the Newton section, and Earth itself gets its own section later.',
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'disk-lifetime',
            label: 'Lifetime of a protoplanetary disk',
            value: 3,
            unit: 'million years (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'From the fraction of young clusters of different ages that still show disks. Giant planets must therefore form fast — within a few million years — which is a stringent constraint on any formation model.',
            references: [referenceId('drazkowska-2023-planet-formation')],
          },
          {
            id: 'disk-mass',
            label: 'Typical disk mass as a fraction of the star’s mass',
            value: 1,
            unit: 'percent (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'And only about 1 percent of that is solid material in the inner regions — which is all the rock and metal that rocky planets can be built from.',
            references: [referenceId('andrews-2018-dsharp')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('drazkowska-2023-planet-formation'),
      referenceId('andrews-2018-dsharp'),
    ],
  },

  {
    id: topicId('why-stellar-generations-matter'),
    slug: 'why-stellar-generations-matter',
    sectionId: STARS,
    order: 32,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why stellar generations matter',
    subtitle: 'A rocky planet needs an ancestor.',
    summary: {
      essential:
        'The first stars had nothing but hydrogen and helium to work with, so they could not have had rocky planets — there was no rock. Only after generations of stars had lived and died was there enough carbon, oxygen, silicon and iron in the gas for planets like Earth to be possible. Our existence required a chain of earlier stars.',
      detailed:
        'Astronomers sort stars into populations by how much heavy material they contain. Population I stars, like the Sun, are metal-rich and young, and live in the disk. Population II stars are metal-poor and old, and live in the halo and globular clusters. Population III is the hypothesised first generation, formed from gas with no metals at all — and none has ever been observed.',
      technical:
        'Metallicity is expressed as [Fe/H] = log₁₀(N_Fe/N_H)_star − log₁₀(N_Fe/N_H)_Sun. Population I spans roughly −0.5 to +0.5; Population II runs from about −1 to below −4 in the most extreme cases. Planet occurrence, especially for giant planets, correlates positively with host metallicity, consistent with the need for solid material to build cores. Rocky planets appear at lower metallicity than giants, so the threshold is not sharp.',
    },
    glossaryTerms: [glossaryTermId('stellar-population'), glossaryTermId('metallicity')],
    related: [
      topicId('the-first-stars'),
      topicId('how-the-universe-became-chemically-rich'),
      topicId('from-stars-to-planets'),
    ],
    blocks: [
      {
        id: 'no-rock',
        kind: 'prose',
        text: {
          essential:
            'Imagine trying to build a rocky planet in the early Universe. You have hydrogen and helium — both gases that will not condense at any temperature a planet-forming disk reaches — and essentially nothing else. There is no silicon for rock, no iron for a core, no oxygen for water. A planet like Earth was not merely unlikely then; it was impossible.',
          detailed:
            'The point sharpens when you look at proportions. Today the Universe is still only about 1.5 percent heavy elements by mass, and that fraction had to be built one stellar generation at a time. Earth is made almost entirely of that 1.5 percent — the rare residue, concentrated by the fact that the light gases could not condense at our distance from the Sun.',
        },
      },
      {
        id: 'viz-generations',
        kind: 'visualization',
        visualizationId: visualizationId('stellar-generations'),
      },
      {
        id: 'claim-metallicity-planets',
        kind: 'claim',
        statement: {
          essential:
            'Stars with more heavy elements are more likely to host planets, particularly giant planets. The correlation is strong and is what you would expect if planets are built from the solid material available in the disk.',
          detailed:
            'The relationship is clearest for giant planets, whose occurrence rate rises steeply with host metallicity. For small rocky planets the dependence is much weaker — they are found around relatively metal-poor stars too, suggesting the threshold for building a rocky world is lower than for building a gas giant’s core. This is one of the more direct observational links between galactic chemical evolution and the existence of planets.',
        },
        evidence: 'inference',
        references: [referenceId('drazkowska-2023-planet-formation')],
      },
      {
        id: 'populations-caveat',
        kind: 'callout',
        tone: 'caution',
        title: 'The population labels are cruder than they look',
        text: {
          essential:
            'Populations I, II and III sound like three tidy generations. They are not. Metallicity varies continuously, stars of very different ages coexist, and the labels were coined in the 1940s from a much smaller picture. Population III in particular is a theoretical category with no confirmed members.',
          detailed:
            'The numbering is also backwards relative to time: Population I is the youngest, because Baade defined the categories by where the stars were rather than when they formed. And the boundaries are conventions — a star at [Fe/H] = −1 is called Population II by some authors and intermediate by others. Treat the labels as rough shorthand for "how enriched was the gas this formed from".',
        },
        references: [referenceId('beers-christlieb-2005-metal-poor')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'most-metal-poor',
            label: 'Iron content of the most metal-poor stars known',
            value: -7,
            unit: '[Fe/H] (below about)',
            uncertainty: { kind: 'upper-limit' },
            context:
              'A few stars have measured iron abundances more than ten million times below solar. These are almost certainly second-generation objects formed from gas enriched by a single early supernova.',
            references: [referenceId('frebel-norris-2015-first-stars')],
          },
          {
            id: 'metals-today',
            label: 'Heavy-element fraction of the Universe today',
            value: 1.5,
            unit: 'percent by mass (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'After 13.8 billion years of stellar processing, everything heavier than helium still amounts to a small fraction. It varies substantially between galaxies and between regions of the same galaxy.',
            references: [referenceId('asplund-2021-solar-composition')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('beers-christlieb-2005-metal-poor')],
  },

  {
    id: topicId('the-first-stars'),
    slug: 'the-first-stars',
    sectionId: STARS,
    order: 33,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The first stars',
    subtitle: 'Predicted in detail, never seen.',
    summary: {
      essential:
        'The first stars formed from gas containing only hydrogen and helium, roughly 100 to 200 million years after the Big Bang. Simulations suggest they were typically far more massive than stars today. No individual first-generation star has ever been observed, and it is likely that none ever will be.',
      detailed:
        'The reason they should have been massive is cooling. Star formation needs gas that can shed heat, and the coolants available today — carbon, oxygen, dust — did not exist. Primordial gas could only cool via molecular hydrogen, which is far less effective, so it stayed warmer, and warmer gas fragments into larger pieces. How much larger is exactly what the simulations disagree about.',
      technical:
        'H₂ cooling limits primordial gas to T ≈ 200 K and n ≈ 10⁴ cm⁻³, giving a characteristic Jeans mass of order 10³ M☉ — but subsequent fragmentation of the accretion disk, and radiative feedback terminating accretion, both reduce the final masses. Modern simulations resolving disk fragmentation favour a broad IMF spanning ~10 to a few hundred M☉ rather than a uniformly very massive population. Stars in the 140–260 M☉ range should end as pair-instability supernovae, whose distinctive odd–even abundance pattern has not been convincingly identified in surviving metal-poor stars.',
    },
    glossaryTerms: [glossaryTermId('stellar-population'), glossaryTermId('molecular-cloud')],
    related: [
      topicId('why-stellar-generations-matter'),
      topicId('the-first-galaxies'),
      topicId('can-we-see-the-first-stars'),
    ],
    blocks: [
      {
        id: 'different-conditions',
        kind: 'prose',
        text: {
          essential:
            'Everything about the first stars was different, and it all traces back to one missing ingredient: heavy elements. Without carbon, oxygen and dust, primordial gas could not cool efficiently. It stayed hot. And hot gas resists collapse until far more mass has accumulated — so the clumps that eventually collapsed were much larger than the ones that form stars today.',
          detailed:
            'The only coolant available was molecular hydrogen, which forms inefficiently in the absence of dust grains to catalyse it and radiates poorly. It could bring gas down to a couple of hundred kelvin, against the ten or twenty kelvin of a modern molecular cloud. That difference of an order of magnitude in temperature translates into a much larger minimum mass for collapse.',
        },
      },
      {
        id: 'viz-first-stars',
        kind: 'visualization',
        visualizationId: visualizationId('first-stars'),
      },
      {
        id: 'claim-masses',
        kind: 'claim',
        statement: {
          essential:
            'Simulations indicate the first stars were typically more massive than stars forming today — plausibly tens to hundreds of solar masses. This is a computational result, not an observation, and the predicted mass range has shifted substantially as the simulations improved.',
          detailed:
            'Early work suggested a single very massive star per halo, of several hundred solar masses. Later simulations that resolved the fragmentation of the accretion disk found multiple stars forming instead, with a broad distribution starting around ten solar masses. That revision is worth noting explicitly: it shows how much the answer depends on what the calculation can resolve, and it is a reason to treat current numbers as provisional.',
        },
        evidence: 'model',
        references: [
          referenceId('klessen-glover-2023-first-stars'),
          referenceId('bromm-larson-2004-first-stars'),
        ],
      },
      {
        id: 'indirect-evidence',
        kind: 'claim',
        statement: {
          essential:
            'The best evidence we have is second-hand: the chemical composition of the oldest surviving stars. Those stars formed from gas polluted by the first generation, so their abundance patterns are a fingerprint of what the first stars produced when they died.',
          detailed:
            'Some extremely metal-poor stars show patterns consistent with enrichment by a single supernova from a star of a few tens of solar masses — which supports first stars in that range. What has not been convincingly found is the distinctive signature of pair-instability supernovae, which should come from stars of 140 to 260 solar masses. Either such stars were rare, or their signature is being missed, and both possibilities are taken seriously.',
        },
        evidence: 'inference',
        references: [
          referenceId('frebel-norris-2015-first-stars'),
          referenceId('beers-christlieb-2005-metal-poor'),
        ],
      },
      {
        id: 'never-seen',
        kind: 'callout',
        tone: 'caution',
        title: 'No Population III star has been observed',
        text: {
          essential:
            'This deserves saying plainly, because popular coverage often blurs it. We have images of very distant, very early galaxies. We have stars whose chemistry implies they formed from first-generation debris. We do not have an observation of an individual metal-free star, and we may never get one.',
          detailed:
            'If the first stars were massive, they lived only a few million years and died long ago — so the only ones that could survive to be observed today would be low-mass ones, and it is not clear that primordial gas made any. Searches for metal-free stars in the Milky Way halo have found stars of extraordinarily low metallicity but none with zero. That non-detection is itself weak evidence that low-mass Population III stars were rare.',
        },
        references: [referenceId('frebel-norris-2015-first-stars')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'first-star-time',
            label: 'When the first stars are expected to have formed',
            value: 150,
            unit: 'million years after the Big Bang',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Simulations put the first star formation between roughly 100 and 250 million years, corresponding to redshifts around 20–30. This is a model prediction; no observation reaches that epoch yet.',
            references: [referenceId('klessen-glover-2023-first-stars')],
          },
          {
            id: 'popiii-lifetime',
            label: 'Expected lifetime of a 100-solar-mass first star',
            value: 3,
            unit: 'million years (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Which is why none survive. Any first-generation star still shining today would have to be below about 0.8 solar masses, and none has been found.',
            references: [referenceId('klessen-glover-2023-first-stars')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('klessen-glover-2023-first-stars'),
      referenceId('frebel-norris-2015-first-stars'),
    ],
  },

  {
    id: topicId('the-first-galaxies'),
    slug: 'the-first-galaxies',
    sectionId: STARS,
    order: 34,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The first galaxies',
    subtitle: 'JWST found them earlier and brighter than expected, and the argument is ongoing.',
    summary: {
      essential:
        'Galaxies existed within a few hundred million years of the Big Bang — JWST has spectroscopically confirmed several at redshifts above 13. They are small, compact and forming stars intensely. Some appear more massive or more luminous than pre-launch models predicted, and what that means is actively contested.',
      detailed:
        'It is worth separating what is measured from what is claimed. That these objects are at very high redshift is now established spectroscopically for a growing sample. Their stellar masses and ages are inferred by fitting models to their light, and those inferences depend on assumptions about the initial mass function, dust and star-formation history that are poorly constrained at these epochs.',
      technical:
        'JADES and related programmes have spectroscopic confirmations at z ≈ 13–14, corresponding to ~300 Myr after the Big Bang. Photometric candidates initially implied stellar masses of ~10¹⁰–10¹¹ M☉ at z > 8, in tension with ΛCDM halo abundances; spectroscopic follow-up revised several downward, and remaining tension is plausibly accommodated by a more top-heavy IMF, bursty star formation, reduced dust attenuation, or AGN contamination. Cosmology is not currently required to change.',
    },
    glossaryTerms: [glossaryTermId('redshift'), glossaryTermId('galactic-halo')],
    related: [
      topicId('the-first-stars'),
      topicId('how-galaxies-form'),
      topicId('can-we-see-the-first-stars'),
    ],
    blocks: [
      {
        id: 'looking-back',
        kind: 'prose',
        text: {
          essential:
            'Looking far away is looking back in time, because light takes time to arrive. A galaxy whose light has travelled 13.4 billion years is being seen as it was 13.4 billion years ago, when the Universe was about 3 percent of its present age. That is the era JWST was built to reach, and it reached it almost immediately.',
          detailed:
            'The expansion of the Universe stretches that ancient light into the infrared, which is why an infrared telescope was needed and why Hubble could not do this. Redshift is the measurement: it converts directly into a look-back time given a cosmological model. A spectroscopic redshift, from identified emission lines, is far more trustworthy than a photometric one estimated from broad-band colours, and the distinction has mattered a great deal in this field over the last few years.',
        },
      },
      {
        id: 'link-first-galaxies',
        kind: 'cross-link',
        topicId: topicId('first-galaxies-universe'),
        rationale:
          'The cosmological picture of this era — reionisation and the cosmic dark ages — is developed in Universe & Cosmology.',
      },
      {
        id: 'claim-confirmed',
        kind: 'claim',
        statement: {
          essential:
            'Galaxies have been spectroscopically confirmed at redshifts above 13, seen as they were roughly 300 million years after the Big Bang. Their existence at that time is established.',
          detailed:
            'Spectroscopic confirmation matters because photometric redshifts can be badly wrong — a dusty galaxy at moderate redshift can mimic the colours of a very distant one, and several early high-redshift candidates turned out to be exactly that. The confirmed sample is small but growing, and it establishes that galaxy assembly was well underway within a few hundred million years.',
        },
        evidence: 'established',
        references: [
          referenceId('curtis-lake-2023-jwst'),
          referenceId('robertson-2022-jwst-galaxies'),
        ],
      },
      {
        id: 'tension',
        kind: 'open-question',
        question: 'Are early galaxies really more massive than models allow?',
        whyItMatters: {
          essential:
            'Some early JWST results implied galaxies so massive, so early, that there had not been time to assemble them from available material. If that held up, it would strain the standard cosmological model. If it does not, it tells us something important about how stars formed in the first galaxies instead.',
          detailed:
            'The tension is between an inferred stellar mass and the number of dark-matter halos available to host it at that redshift. But stellar mass is not measured — it is fitted, using assumptions about the initial mass function, dust, star-formation history and possible contamination by an accreting black hole. Every one of those assumptions is poorly constrained at these epochs, and each can move the inferred mass by a large factor.',
        },
        whatWouldSettleIt: {
          essential:
            'Spectroscopy of the candidates, which is under way and has already revised several masses downward, and independent constraints on the initial mass function and dust content at these redshifts.',
          detailed:
            'The current position among most workers is that no change to cosmology is required: a somewhat more top-heavy initial mass function, bursty star formation that temporarily boosts brightness, less dust than assumed, or a contribution from active nuclei can each account for the discrepancy. That is a defensible reading and not a settled one, and the field is moving quickly enough that any summary should be read with a date attached.',
        },
        references: [
          referenceId('robertson-2022-jwst-galaxies'),
          referenceId('naab-ostriker-2017-galaxy-formation'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'z13-age',
            label: 'Age of the Universe at redshift 13',
            value: 300,
            unit: 'million years (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About 2 percent of the present age of the Universe. Computed from the standard cosmological model using measured parameters.',
            references: [referenceId('planck-2018-vi'), referenceId('curtis-lake-2023-jwst')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('robertson-2022-jwst-galaxies'),
      referenceId('curtis-lake-2023-jwst'),
    ],
  },

  {
    id: topicId('how-the-universe-became-chemically-rich'),
    slug: 'how-the-universe-became-chemically-rich',
    sectionId: STARS,
    order: 35,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How the Universe became chemically rich',
    subtitle: 'Thirteen billion years of slow enrichment, read off the sky.',
    summary: {
      essential:
        'The Universe started with two elements and now has ninety-odd. The change happened gradually, through generation after generation of stars living, manufacturing, and dying. And it is readable: stars preserve the composition of the gas they formed from, so old stars are chemical fossils of the era that made them.',
      detailed:
        'Enrichment did not proceed uniformly. It happened faster where star formation was intense, and barely at all in isolated regions. Some galaxies today are still chemically primitive; the centres of massive galaxies are enriched well beyond solar. The Universe has a chemical history and a chemical geography.',
      technical:
        'Galactic chemical evolution tracks Z(t) given a star-formation history, an IMF, stellar yields per mass and metallicity, and gas flows. Element ratios encode timescales: [α/Fe] stays high while core-collapse supernovae dominate and falls once thermonuclear supernovae contribute after ~0.1–1 Gyr, so the "knee" in [α/Fe] versus [Fe/H] dates the star-formation history of a population. The mass–metallicity relation for galaxies, and its dependence on star-formation rate, reflects the competition between enrichment, outflow and inflow.',
    },
    glossaryTerms: [
      glossaryTermId('metallicity'),
      glossaryTermId('nucleosynthesis'),
      glossaryTermId('stellar-population'),
    ],
    related: [
      topicId('stellar-remnants-and-cosmic-recycling'),
      topicId('why-stellar-generations-matter'),
      topicId('making-the-elements'),
    ],
    blocks: [
      {
        id: 'reading-history',
        kind: 'prose',
        text: {
          essential:
            'A star’s outer layers keep the composition of the gas it condensed from, essentially unchanged for its whole life. So measuring an old star’s chemistry tells you what the Galaxy was made of when that star formed. Stars are dated samples of the interstellar medium, scattered through space and still legible.',
          detailed:
            'This makes stellar archaeology possible. Find stars of many different ages, measure their compositions, and you reconstruct the chemical history of the Galaxy — not by modelling it, but by reading it. The technique has limits: convection can alter surface abundances in some stars, and a few elements diffuse. But for most elements in most stars the record holds.',
        },
      },
      {
        id: 'viz-enrichment-history',
        kind: 'visualization',
        visualizationId: visualizationId('cosmic-chemical-history'),
      },
      {
        id: 'claim-alpha-knee',
        kind: 'claim',
        statement: {
          essential:
            'Plot the ratio of oxygen to iron against total iron content across many stars and you get a distinctive shape: flat and high at low iron, then bending downward. That bend is a timestamp — the moment thermonuclear supernovae began contributing iron.',
          detailed:
            'The logic is a delay. Core-collapse supernovae from massive stars deliver oxygen within a few million years of a star-forming episode. Thermonuclear supernovae deliver iron after hundreds of millions of years, because a white dwarf has to form first. So early on, the gas is oxygen-rich relative to iron; later, iron catches up. Where the bend occurs tells you how fast that population formed its stars — and different galaxies show the bend at different places, revealing different histories.',
        },
        evidence: 'inference',
        references: [
          referenceId('kobayashi-2020-origin-of-elements'),
          referenceId('beers-christlieb-2005-metal-poor'),
        ],
      },
      {
        id: 'geography',
        kind: 'prose',
        text: {
          essential:
            'Enrichment is uneven in space as well as time. The inner Milky Way is more enriched than the outer disk, because more stars formed there. Small galaxies are systematically less enriched than large ones, because their weak gravity lets supernova winds blow the enriched gas away entirely.',
          detailed:
            'That last point produces one of the cleanest relationships in extragalactic astronomy: the more massive a galaxy, the higher its gas-phase metallicity, across several orders of magnitude in mass. The natural reading is retention — massive galaxies hold on to what they make, small ones lose it. It is one of the strongest indirect arguments that feedback-driven outflows are real and important.',
        },
      },
      {
        id: 'still-poor',
        kind: 'callout',
        tone: 'note',
        title: 'The Universe is still mostly hydrogen',
        text: {
          essential:
            'After 13.8 billion years of stars manufacturing elements, the Universe is about 74 percent hydrogen, 24 percent helium, and under 2 percent everything else. All of chemistry, all of geology, all of biology, is built from that last sliver.',
          detailed:
            'And it will not change much. Star formation peaked ten billion years ago and has been declining since; the total mass of stars ever to form is not going to increase by a large factor. The Universe has essentially finished making its heavy elements, and the final tally will be only modestly higher than today’s.',
        },
        references: [
          referenceId('asplund-2021-solar-composition'),
          referenceId('madau-dickinson-2014-cosmic-sfh'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'z-at-sun-formation',
            label: 'Time the Galaxy spent enriching before the Sun formed',
            value: 9,
            unit: 'billion years (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'The Milky Way is around 13.6 billion years old and the Sun formed 4.57 billion years ago. Roughly nine billion years of stellar generations preceded the material that became the Solar System.',
            references: [
              referenceId('bouvier-wadhwa-2010-solar-system-age'),
              referenceId('bland-hawthorn-gerhard-2016-milky-way'),
            ],
          },
        ],
      },
    ],
    furtherReading: [referenceId('kobayashi-2020-origin-of-elements')],
  },
];
