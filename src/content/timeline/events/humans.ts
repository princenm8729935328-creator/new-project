/**
 * Hominin and human milestones.
 *
 * The organising principle of this file is that human evolution is a bush, not
 * a ladder. Every milestone here is written to make that structural: species
 * overlap in time, most lineages end without descendants, and traits appear in
 * mosaic rather than in sequence. The accompanying `hominin-tree` figure shows
 * the overlaps directly, because a diagram argues this better than prose can.
 */
import { cosmicTimeFromYearsAgo } from '../../schema/cosmicTime';
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { timelineEventId, type TimelineEvent } from '../../schema/timeline';
import { visualizationId } from '../../schema/visualization';

export const HUMAN_EVENTS: readonly TimelineEvent[] = [
  {
    id: timelineEventId('hominin-divergence'),
    slug: 'hominin-divergence',
    title: 'The human and chimpanzee lineages separate',
    eraId: 'hominins',
    time: cosmicTimeFromYearsAgo(7e6, 'measured'),
    whenLabel: 'about 7 to 6 million years ago',
    whenRange: 'Genetic estimates span roughly 6.5–9.3 million years',
    prominence: 0.9,
    evidence: 'model',
    sectionId: sectionId('human-evolution'),
    visualizationId: visualizationId('hominin-tree'),
    summary: {
      essential:
        'Two populations of African apes stopped interbreeding. One lineage led to chimpanzees and bonobos, the other eventually to us.',
    },
    whatHappened: {
      essential:
        'There was no moment when an ape gave birth to a human. A single ape population split into groups that gradually stopped exchanging genes, and each went on evolving separately. We did not descend from chimpanzees; chimpanzees and humans are cousins with a shared ancestor that was neither.',
      detailed:
        'The separation was probably not clean. Genomic evidence suggests gene flow continued for a period after the initial divergence. Fossils from around this time — Sahelanthropus, Orrorin, Ardipithecus — show a mixture of ape-like and hominin-like features, and their exact positions on the family tree are debated.',
    },
    whyItMatters: {
      essential:
        'It sets the starting point for everything that follows, and it corrects the single most common misconception about human evolution: that we came from chimpanzees.',
    },
    evidenceBasis: {
      essential:
        'Comparison of human and chimpanzee genomes, calibrated by mutation rates, gives a divergence date. Fossils from Chad and Ethiopia in roughly the right age range show early upright-walking features.',
      detailed:
        'Sahelanthropus tchadensis, dated to about 7 million years, has a forward-positioned foramen magnum suggesting an upright posture, though this has been contested. Molecular estimates depend on assumed mutation and generation rates; revisions to those rates have shifted the date considerably over the past two decades.',
    },
    uncertainty: {
      essential:
        'The date has a wide range, and it is unclear which — if any — of the earliest fossils are on our side of the split rather than the chimpanzee side or an extinct branch.',
      detailed:
        'Sahelanthropus, Orrorin tugenensis and Ardipithecus kadabba are all candidates for early hominins, and all are argued over. Postcranial evidence is limited. The divergence itself was likely extended rather than instantaneous.',
    },
    references: [referenceId('brunet-2002-sahelanthropus'), referenceId('darwin-1859-origin')],
    relatedEvents: [timelineEventId('australopithecines')],
  },

  {
    id: timelineEventId('australopithecines'),
    slug: 'australopithecines',
    title: 'Upright walking, small brains',
    eraId: 'hominins',
    time: cosmicTimeFromYearsAgo(3.5e6, 'measured'),
    whenLabel: 'about 4.2 to 2 million years ago',
    prominence: 0.85,
    evidence: 'established',
    sectionId: sectionId('human-evolution'),
    visualizationId: visualizationId('hominin-tree'),
    summary: {
      essential:
        "Australopithecines walked upright on two legs while still having brains roughly the size of a chimpanzee's. Bipedalism came first — by millions of years.",
    },
    whatHappened: {
      essential:
        'Several species of Australopithecus lived across eastern and southern Africa. They were fully bipedal on the ground but retained features useful for climbing. Their brains were around 400–500 cubic centimetres, close to a chimpanzee\'s and roughly a third of ours. The famous "Lucy" skeleton belongs to this group.',
      detailed:
        'This is the clearest evidence that human evolution is mosaic rather than sequential: the traits we think of as human did not arrive as a package. Upright walking is established by 4.2 million years ago and possibly earlier; brain enlargement does not begin in earnest for another two million years. Robust forms — sometimes placed in a separate genus, Paranthropus — evolved massive jaws for tough vegetation and persisted alongside early Homo before dying out.',
    },
    whyItMatters: {
      essential:
        'It demolishes the idea that a big brain drove everything else. Our ancestors were walking upright for millions of years while still small-brained.',
    },
    evidenceBasis: {
      essential:
        'Skeletons showing bipedal hips, knees and feet — plus the Laetoli footprints in Tanzania, made 3.66 million years ago by individuals walking upright across fresh volcanic ash.',
      detailed:
        'Australopithecus anamensis at 4.2–3.9 Ma provides among the earliest firm postcranial evidence of bipedality. Endocranial volumes are measured directly from fossil skulls, and the contrast with the timing of bipedal anatomy is unambiguous.',
    },
    references: [referenceId('leakey-1995-australopithecus-anamensis')],
    relatedEvents: [timelineEventId('genus-homo'), timelineEventId('hominin-bush')],
  },

  {
    id: timelineEventId('genus-homo'),
    slug: 'genus-homo',
    title: 'The genus Homo appears',
    eraId: 'hominins',
    time: cosmicTimeFromYearsAgo(2.8e6, 'measured'),
    whenLabel: 'about 2.8 million years ago',
    prominence: 0.85,
    evidence: 'active-research',
    sectionId: sectionId('human-evolution'),
    visualizationId: visualizationId('hominin-tree'),
    summary: {
      essential:
        'Fossils with somewhat larger brains and smaller teeth appear, alongside stone tools. Where Australopithecus ends and Homo begins is genuinely blurry.',
    },
    whatHappened: {
      essential:
        'Around 2.8 million years ago, fossils appear that combine australopithecine features with a slightly larger brain and reduced chewing apparatus. Stone tools go back even further — cut-marked bones and simple flaked stones predate the earliest Homo fossils, meaning tool use was probably not invented by our genus.',
      detailed:
        'Oldowan tools date from about 2.6 million years ago, and possible tools from Lomekwi in Kenya have been reported at 3.3 million years — before any known Homo. Meat and marrow in the diet, and later cooking, are commonly linked to the energy budget that a larger brain requires, though the causal chain is inferred rather than demonstrated.',
    },
    whyItMatters: {
      essential:
        'It marks the beginning of the group we belong to — and it shows that the traits used to define "human" appeared piecemeal, in different lineages, at different times.',
    },
    evidenceBasis: {
      essential:
        'A jawbone from Ledi-Geraru in Ethiopia, dated to 2.8 million years, is the oldest well-dated fossil assigned to Homo. Stone tools and cut-marked bones provide independent behavioural evidence.',
    },
    uncertainty: {
      essential:
        'The boundary between Australopithecus and Homo is a judgement call, not a discovery. Different researchers place it differently, and some argue Homo habilis should not be in Homo at all.',
      detailed:
        'Definitions of the genus rest on brain size, tooth proportions and inferred tool use — all continuous variables. The Ledi-Geraru specimen is a partial mandible, which limits how much can be concluded. Species boundaries in this interval are among the most contested in palaeoanthropology.',
    },
    references: [referenceId('villmoare-2015-early-homo')],
    relatedEvents: [timelineEventId('homo-erectus'), timelineEventId('hominin-bush')],
  },

  {
    id: timelineEventId('homo-erectus'),
    slug: 'homo-erectus',
    title: 'Homo erectus and the first long journeys',
    eraId: 'hominins',
    time: cosmicTimeFromYearsAgo(1.9e6, 'measured'),
    whenLabel: 'from about 1.9 million years ago',
    prominence: 0.85,
    evidence: 'established',
    sectionId: sectionId('human-evolution'),
    visualizationId: visualizationId('hominin-tree'),
    summary: {
      essential:
        'A tall, long-legged, larger-brained human species that was the first to leave Africa — and one of the longest-lived of all, surviving over a million years.',
    },
    whatHappened: {
      essential:
        "Homo erectus had body proportions much closer to ours: long legs, narrow hips, a barrel chest, and a brain roughly two-thirds the size of a modern human's. It made more sophisticated stone tools, and it spread out of Africa into Asia, reaching Georgia by 1.8 million years ago and Indonesia soon after.",
      detailed:
        'Its skeleton shows adaptations for endurance walking and running — long Achilles tendons, a nuchal ligament, arched feet, and enhanced heat dissipation. Evidence for controlled use of fire appears during its tenure, though how early and how habitually is debated. Homo erectus survived for well over a million years, considerably longer than our own species has so far.',
    },
    whyItMatters: {
      essential:
        'It is the first hominin with a recognisably human body, the first to leave Africa, and a reminder that longevity, not brain size, is the usual measure of evolutionary success.',
    },
    evidenceBasis: {
      essential:
        'Skeletons such as the Turkana Boy from Kenya, and fossils across Africa, Georgia, China and Indonesia, together with the Acheulean stone tools found with them.',
      detailed:
        'The anatomical case for endurance running rests on a suite of features absent in australopithecines and present in Homo erectus and later humans. Some researchers separate the African fossils as Homo ergaster; this is a taxonomic disagreement, not a factual one.',
    },
    references: [referenceId('bramble-lieberman-2004-endurance-running')],
    relatedEvents: [timelineEventId('neanderthals-denisovans'), timelineEventId('hominin-bush')],
  },

  {
    id: timelineEventId('hominin-bush'),
    slug: 'hominin-bush',
    title: 'Many human species at once',
    eraId: 'hominins',
    time: cosmicTimeFromYearsAgo(1e6, 'measured'),
    whenLabel: 'throughout the last 4 million years',
    prominence: 0.9,
    evidence: 'established',
    sectionId: sectionId('human-evolution'),
    visualizationId: visualizationId('hominin-tree'),
    summary: {
      essential:
        'For nearly all of the past four million years, several upright, tool-using human species were alive at the same time. Being the only one is the strange, recent situation.',
    },
    whatHappened: {
      essential:
        'The fossil record shows repeated branching. Robust australopithecines lived alongside early Homo. Homo erectus, Homo heidelbergensis, Homo floresiensis, Homo naledi, Homo luzonensis, Neanderthals and Denisovans overlapped in various combinations. Most of these lineages ended without descendants. As recently as 50,000 years ago there were at least four kinds of human on Earth.',
      detailed:
        'Homo naledi is especially instructive: it had a brain about a third the size of ours yet lived only around 250,000 years ago, at the same time as large-brained humans. Homo floresiensis, barely a metre tall, survived on Flores until roughly 50,000 years ago. Neither fits a ladder in which brains steadily enlarge over time.',
    },
    whyItMatters: {
      essential:
        'The familiar image of an ape straightening up into a modern human is wrong in structure, not just in detail. Evolution branches; it does not climb.',
      detailed:
        'Treating the record as a single line requires discarding most of the fossils. Every species here was a full, functioning organism adapted to its own circumstances — not a rough draft of us. That we are currently the only surviving hominin is unusual, and it is a recent development.',
    },
    evidenceBasis: {
      essential:
        'Overlapping date ranges from independently dated fossil sites across Africa, Europe and Asia — plus ancient DNA showing that some of these populations met and interbred.',
      detailed:
        'Homo naledi was dated to 335–236 thousand years by combining optically stimulated luminescence, uranium–thorium and electron spin resonance methods. The overlaps are established by dating each site independently, not by assuming a sequence.',
    },
    references: [
      referenceId('berger-2015-homo-naledi'),
      referenceId('prufer-2014-altai-neanderthal'),
      referenceId('reich-2010-denisova'),
    ],
    relatedEvents: [timelineEventId('neanderthals-denisovans'), timelineEventId('homo-sapiens')],
  },

  {
    id: timelineEventId('neanderthals-denisovans'),
    slug: 'neanderthals-denisovans',
    title: 'Neanderthals and Denisovans',
    eraId: 'hominins',
    time: cosmicTimeFromYearsAgo(4e5, 'measured'),
    whenLabel: 'from at least 430,000 until about 40,000 years ago',
    prominence: 0.9,
    evidence: 'established',
    sectionId: sectionId('human-evolution'),
    visualizationId: visualizationId('hominin-tree'),
    summary: {
      essential:
        'Two human populations that lived across Eurasia for hundreds of thousands of years. Both interbred with Homo sapiens — and most people alive today carry some of their DNA.',
    },
    whatHappened: {
      essential:
        'Neanderthals lived across Europe and western Asia; Denisovans across parts of Asia. Both descend from a population that left Africa long before our own species did. Neanderthals had brains as large as ours, made tools, controlled fire, buried some of their dead and used pigments. When Homo sapiens expanded out of Africa, the groups met and interbred.',
      detailed:
        'Most people with ancestry outside sub-Saharan Africa carry roughly 1–2% Neanderthal DNA. Denisovan ancestry is concentrated in Oceania, reaching several percent in Papuan and Aboriginal Australian populations, with a distinct signal in parts of East Asia. A high-altitude adaptation gene common in Tibetans appears to have been inherited from Denisovans. One remarkable fossil, "Denny", was a first-generation individual with a Neanderthal mother and a Denisovan father.',
    },
    whyItMatters: {
      essential:
        'They were not brutish failures, and they are not entirely gone: their DNA is in most living people. Human ancestry is a braided river, not a single stream.',
    },
    evidenceBasis: {
      essential:
        'Ancient DNA recovered from fossil bones. The Denisovans were identified from a genome sequenced from a single finger bone before anyone knew what species it belonged to.',
      detailed:
        'The 2010 draft Neanderthal genome first showed excess allele sharing with non-Africans. The 2014 high-coverage Altai genome quantified the admixture and dated it to roughly 50–60 thousand years ago. Denisovans remain defined primarily by genetics, with very few diagnostic fossils — an unusual situation in palaeoanthropology.',
    },
    uncertainty: {
      essential:
        'Why Neanderthals disappeared is unresolved. Competition, climate change, disease, low population numbers and absorption into larger Homo sapiens populations have all been proposed, and several may be true at once.',
      detailed:
        'Denisovan anatomy is largely unknown because so few fossils have been identified. The number, timing and locations of interbreeding episodes are still being refined as more ancient genomes are sequenced.',
    },
    references: [
      referenceId('green-2010-neanderthal-genome'),
      referenceId('prufer-2014-altai-neanderthal'),
      referenceId('reich-2010-denisova'),
    ],
    relatedEvents: [timelineEventId('homo-sapiens'), timelineEventId('out-of-africa')],
  },

  {
    id: timelineEventId('homo-sapiens'),
    slug: 'homo-sapiens',
    title: 'Homo sapiens',
    eraId: 'sapiens',
    time: cosmicTimeFromYearsAgo(3e5, 'measured'),
    whenLabel: 'at least 300,000 years ago',
    prominence: 1,
    evidence: 'established',
    sectionId: sectionId('human-evolution'),
    visualizationId: visualizationId('hominin-tree'),
    summary: {
      essential:
        'Our own species appears in Africa — not in one place, but across a continent, from populations that were already exchanging genes with each other.',
    },
    whatHappened: {
      essential:
        'Fossils with recognisably modern features appear in Africa by around 300,000 years ago. The oldest known are from Jebel Irhoud in Morocco, at roughly 315,000 years — far from the East African sites long assumed to be the cradle of our species. Fully modern anatomy assembled gradually, and different features appear at different times in different places.',
      detailed:
        'Current evidence favours a pan-African origin: a network of populations across the continent, partly separated and periodically reconnected, rather than a single ancestral group in one valley. Behavioural markers often called "modern" — pigment use, long-distance exchange, complex tools, ornaments — also appear at different times in different places rather than as a sudden package.',
    },
    whyItMatters: {
      essential:
        'This is us. And even our own origin is a branching, geographically spread process rather than a single event in one location.',
    },
    evidenceBasis: {
      essential:
        'Fossils from Morocco dated to about 315,000 years and from Ethiopia to at least 233,000 years, combined with genetic diversity in living African populations that points to deep, structured ancestry.',
      detailed:
        'The Jebel Irhoud remains were re-dated in 2017 by thermoluminescence on associated burnt flints. The Omo Kibish fossils were re-dated in 2022 to ≥233 ± 22 thousand years using a volcanic ash layer. Living African populations retain more genetic diversity than the rest of the world combined.',
    },
    references: [referenceId('hublin-2017-jebel-irhoud'), referenceId('vidal-2022-omo-kibish')],
    relatedEvents: [timelineEventId('out-of-africa'), timelineEventId('hominin-bush')],
  },

  {
    id: timelineEventId('out-of-africa'),
    slug: 'out-of-africa',
    title: 'Homo sapiens spreads across the world',
    eraId: 'sapiens',
    time: cosmicTimeFromYearsAgo(6e4, 'measured'),
    whenLabel: 'the major dispersal from about 70,000 to 50,000 years ago',
    prominence: 0.9,
    evidence: 'established',
    sectionId: sectionId('human-evolution'),
    summary: {
      essential:
        'The dispersal that populated every continent. Australia was reached by 65,000 years ago; the Americas much later.',
    },
    whatHappened: {
      essential:
        'Populations of Homo sapiens expanded out of Africa and, within tens of thousands of years, occupied Asia, Europe, Australia and eventually the Americas. Reaching Australia required crossing open water. Along the way they encountered Neanderthals and Denisovans and interbred with them.',
      detailed:
        'This was not the first time our species left Africa — earlier excursions reached the Levant and Greece, but left little or no genetic trace in living populations. Almost all non-African ancestry today derives from the later dispersal. The Americas were reached by roughly 15,000–20,000 years ago, with some sites suggesting earlier arrivals.',
    },
    whyItMatters: {
      essential:
        'It explains why humans everywhere are so closely related genetically, and why nearly all human genetic diversity is found within Africa.',
    },
    evidenceBasis: {
      essential:
        'Genome sequencing of populations worldwide, which traces the branching order and timing of dispersals, plus archaeological sites with reliable dates — including occupation in northern Australia by 65,000 years ago.',
      detailed:
        'Three large-scale genomic studies published together in 2016 converged on a single major dispersal accounting for the great majority of non-African ancestry. The Madjedbebe rock shelter in Australia was dated by optically stimulated luminescence to 65 ± 6 thousand years.',
    },
    uncertainty: {
      essential:
        'The exact routes, the number of waves, and the timing of the first arrival in the Americas are all still debated, with new sites regularly revising the picture.',
    },
    references: [
      referenceId('nielsen-2017-peopling-of-the-world'),
      referenceId('clarkson-2017-madjedbebe'),
      referenceId('green-2010-neanderthal-genome'),
    ],
    relatedEvents: [timelineEventId('agriculture')],
  },

  {
    id: timelineEventId('agriculture'),
    slug: 'agriculture',
    title: 'Farming and the first cities',
    eraId: 'sapiens',
    time: cosmicTimeFromYearsAgo(11e3, 'measured'),
    whenLabel: 'from about 12,000 to 10,000 years ago',
    prominence: 0.9,
    evidence: 'established',
    sectionId: sectionId('human-evolution'),
    visualizationId: visualizationId('deep-time-scale'),
    summary: {
      essential:
        'After a stable climate returned, people in several unconnected regions began farming. Everything we call civilisation follows, in the last 0.00008% of cosmic time.',
    },
    whatHappened: {
      essential:
        'As the last ice age ended and the climate stabilised, people in at least eleven separate regions independently began cultivating plants and keeping animals — in the Fertile Crescent, China, Mesoamerica, the Andes, New Guinea and elsewhere. Farming supported denser settlements, which led to towns, writing, states and everything built on them.',
      detailed:
        'Domestication was gradual, taking centuries to millennia, and it was not obviously an improvement for the individuals involved: early farmers were often shorter, less well nourished and more disease-ridden than the foragers they replaced. What farming provided was more calories per unit of land, and therefore more people.',
    },
    whyItMatters: {
      essential:
        'All of recorded history sits inside this sliver. If the age of the Universe were compressed into a single year, everything since the invention of farming would occupy the last 25 seconds.',
    },
    evidenceBasis: {
      essential:
        'Archaeological remains of cultivated plants and managed animals, radiocarbon dated, together with genetic evidence of domestication in crops and livestock.',
      detailed:
        'Domesticated cereals are identifiable by morphological changes such as non-shattering seed heads. Independent origins across several continents rule out the spread of a single invention and demonstrate that farming was a repeated response to similar conditions.',
    },
    references: [
      referenceId('zeder-2011-agriculture-origins'),
      referenceId('diamond-2002-domestication'),
    ],
    relatedEvents: [timelineEventId('present-day')],
  },

  {
    id: timelineEventId('present-day'),
    slug: 'present-day',
    title: 'Now',
    eraId: 'sapiens',
    time: cosmicTimeFromYearsAgo(0, 'measured', 'today'),
    whenLabel: 'today',
    prominence: 1,
    evidence: 'established',
    sectionId: sectionId('open-questions'),
    visualizationId: visualizationId('deep-time-scale'),
    glossaryTerms: [glossaryTermId('hubble-constant'), glossaryTermId('dark-energy')],
    summary: {
      essential:
        'One species on one planet, roughly 13.8 billion years in, able to reconstruct almost all of the preceding story — and still unable to explain most of what the Universe is made of.',
    },
    whatHappened: {
      essential:
        'Within the last few centuries, humans worked out the age of the Earth, the age of the Universe, the mechanism of evolution and the structure of matter. Within the last century we detected the leftover heat of the early Universe, photographed the shadow of a black hole and read DNA from people who died 400,000 years ago.',
    },
    whyItMatters: {
      essential:
        'Every date on this timeline was measured, not assumed. The remarkable thing is not that the story is long — it is that it can be reconstructed at all.',
    },
    evidenceBasis: {
      essential:
        'The timeline you have just travelled is assembled from radiometric dating, the cosmic microwave background, genome sequencing, the fossil record and gravitational-wave astronomy — independent methods that agree with one another.',
      detailed:
        'The strength of the account comes from that convergence. The age of the Solar System from meteorite lead isotopes, the age of the Universe from the CMB, and the divergence times from genomics are derived by completely unrelated physics, and they are consistent.',
    },
    uncertainty: {
      essential:
        'About 95% of the contents of the Universe is unidentified. We do not know what dark matter is, what dark energy is, how life began, or how to reconcile gravity with quantum mechanics. Two careful measurements of the current expansion rate disagree with each other.',
      detailed:
        'The Hubble tension — a roughly 5σ discrepancy between the expansion rate inferred from the CMB and that measured with the local distance ladder — may indicate an unknown systematic error, or physics missing from the standard model of cosmology. It is currently one of the most consequential open problems in the field.',
    },
    references: [
      referenceId('planck-2018-vi'),
      referenceId('riess-2022-sh0es'),
      referenceId('eht-2019-m87'),
    ],
    relatedEvents: [timelineEventId('hot-dense-beginning')],
  },
];
