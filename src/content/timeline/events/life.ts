/**
 * Milestones from the earliest evidence of life to the rise of mammals.
 *
 * Evolution is presented here as branching descent, never as progress towards
 * anything. Where a milestone is commonly mis-told — the Cambrian "explosion",
 * dinosaurs as failures, mammals as successors — the mis-telling is corrected
 * in the text rather than repeated.
 */
import { cosmicTimeFromYearsAgo } from '../../schema/cosmicTime';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { timelineEventId, type TimelineEvent } from '../../schema/timeline';
import { visualizationId } from '../../schema/visualization';

export const LIFE_EVENTS: readonly TimelineEvent[] = [
  {
    id: timelineEventId('earliest-life'),
    slug: 'earliest-life',
    title: 'The earliest evidence of life',
    eraId: 'early-life',
    time: cosmicTimeFromYearsAgo(3.7e9, 'measured'),
    whenLabel: 'at least 3.5 billion years ago, possibly earlier',
    whenRange:
      'Claims range from 3.5 to 4.28 billion years, with confidence falling as they get older',
    prominence: 1,
    evidence: 'active-research',
    sectionId: sectionId('life'),
    summary: {
      essential:
        'Chemistry became biology. The oldest widely accepted traces of life are about 3.5 billion years old; older claims exist and are contested.',
    },
    whatHappened: {
      essential:
        'At some point, self-copying chemistry crossed the line into living cells. The earliest organisms were single-celled and microscopic, living off chemical energy or sunlight. They left behind layered mounds called stromatolites, altered carbon isotope ratios, and — more controversially — microscopic structures interpreted as fossilised cells.',
      detailed:
        'The transition itself is not preserved anywhere. What the record shows is that by 3.5 billion years ago, microbial communities were already established and metabolically varied, which pushes the origin earlier still. Leading hypotheses locate that origin at alkaline hydrothermal vents or in surface pools subject to wet–dry cycling, but no scenario has been demonstrated end-to-end in a laboratory.',
    },
    whyItMatters: {
      essential:
        'Every living thing on Earth descends from these organisms. All of them share the same genetic code, which is why common ancestry is not seriously disputed.',
      detailed:
        'The universality of the genetic code, of ATP as an energy currency, and of ribosomal architecture across all three domains of life is extremely difficult to explain except by descent from a common ancestral population.',
    },
    evidenceBasis: {
      essential:
        'Layered rock structures built by microbial mats, carbon with an isotope ratio characteristic of biological processing, and possible microfossils in ancient seafloor rocks.',
      detailed:
        'Living organisms preferentially use the lighter carbon-12 isotope, leaving a distinctive signature. Structures in 3.77–4.28 billion-year-old rocks from the Nuvvuagittuq belt in Quebec have been interpreted as vent microfossils, and a 4.1 billion-year-old zircon has been reported to contain possibly biogenic carbon. Both claims are disputed, because non-biological processes can produce similar signatures.',
    },
    uncertainty: {
      essential:
        'We do not know how life started, when exactly it started, or whether the very oldest claimed traces are biological at all. This is one of the biggest open questions in science.',
      detailed:
        'Abiogenesis remains unexplained. Each of the oldest claimed fossils has an abiotic counter-explanation — mineral growth, metamorphic alteration, or contamination. The scientific position is that life was present by ~3.5 Ga, may have been present much earlier, and that the mechanism of its origin is unknown.',
    },
    references: [
      referenceId('dodd-2017-hydrothermal-life'),
      referenceId('bell-2015-biogenic-carbon-zircon'),
    ],
    relatedEvents: [timelineEventId('great-oxidation'), timelineEventId('early-earth')],
  },

  {
    id: timelineEventId('great-oxidation'),
    slug: 'great-oxidation',
    title: 'The Great Oxidation Event',
    eraId: 'early-life',
    time: cosmicTimeFromYearsAgo(2.4e9, 'measured'),
    whenLabel: 'about 2.4 billion years ago',
    prominence: 0.9,
    evidence: 'established',
    sectionId: sectionId('life'),
    visualizationId: visualizationId('oxygen-history'),
    summary: {
      essential:
        'Photosynthetic bacteria filled the atmosphere with oxygen — a waste product that was poisonous to most life at the time.',
    },
    whatHappened: {
      essential:
        'Cyanobacteria evolved a way to split water using sunlight, releasing oxygen as waste. For a long time that oxygen was absorbed by dissolved iron and rock. Once those sinks were saturated, roughly 2.4 billion years ago, oxygen began accumulating in the atmosphere. For most existing organisms it was a toxin, and this is often described as the first mass extinction.',
      detailed:
        'Atmospheric oxygen rose from below one part in 100,000 of present levels to perhaps a few percent, then stayed comparatively low for over a billion years — a period sometimes called the "boring billion". A second major rise around 800–540 million years ago brought oxygen towards modern levels, shortly before large animals appear.',
    },
    whyItMatters: {
      essential:
        'Oxygen-based respiration releases far more energy than the alternatives. Large, active, complex organisms — including us — are only possible because of it. It also formed the ozone layer that made land habitable.',
    },
    evidenceBasis: {
      essential:
        'Banded iron formations stop forming, ancient soils change character, and sulphur isotopes lose a distinctive pattern that only survives in an oxygen-free atmosphere.',
      detailed:
        'The disappearance of mass-independent fractionation of sulphur isotopes at ~2.4 Ga is the sharpest marker: the process requires ultraviolet photochemistry in an atmosphere without an ozone shield. Alongside it, detrital pyrite and uraninite grains vanish from sediments, and red beds appear.',
    },
    references: [referenceId('lyons-2014-oxygen-rise')],
    relatedEvents: [timelineEventId('eukaryotes'), timelineEventId('earliest-life')],
  },

  {
    id: timelineEventId('eukaryotes'),
    slug: 'eukaryotes',
    title: 'Complex cells appear',
    eraId: 'complex-life',
    time: cosmicTimeFromYearsAgo(1.8e9, 'measured'),
    whenLabel: 'by about 1.8 billion years ago',
    prominence: 0.8,
    evidence: 'model',
    sectionId: sectionId('life'),
    summary: {
      essential:
        'One cell ended up living inside another. The result — cells with a nucleus and internal power plants — is the ancestor of every plant, animal and fungus.',
    },
    whatHappened: {
      essential:
        'A host cell took in a bacterium and, instead of digesting it, kept it. That bacterium became the mitochondrion, the structure that generates energy inside almost every complex cell today. A later, separate event brought in the ancestor of chloroplasts, producing algae and eventually plants.',
      detailed:
        'Eukaryotic cells are structurally far more elaborate than bacteria and archaea: a nucleus, internal membranes, a cytoskeleton. The endosymbiotic origin of mitochondria and chloroplasts is well supported. Current evidence places the host lineage within the Asgard archaea.',
    },
    whyItMatters: {
      essential:
        'No multicellular life exists without complex cells. This single merger is a precondition for every plant and animal that ever lived.',
    },
    evidenceBasis: {
      essential:
        'Mitochondria and chloroplasts have their own DNA, their own ribosomes, and double membranes — and their genes are most closely related to those of free-living bacteria.',
      detailed:
        'Mitochondrial genes group with alphaproteobacteria and chloroplast genes with cyanobacteria in phylogenetic analyses. Fossil evidence includes large, ornamented acritarchs from around 1.6–1.8 Ga, which are too structurally elaborate to be prokaryotes.',
    },
    uncertainty: {
      essential:
        'Exactly when this happened, in what order the features appeared, and what kind of cell the host was are all still being worked out. Early eukaryote fossils are hard to identify with confidence.',
      detailed:
        'Whether the nucleus preceded or followed mitochondrial acquisition is debated, as is whether mitochondria were the trigger for eukaryotic complexity or a later addition. Molecular clock estimates for the last eukaryotic common ancestor span a wide range and often disagree with the fossil record.',
    },
    references: [referenceId('knoll-2011-multicellularity')],
    relatedEvents: [timelineEventId('multicellular-life')],
  },

  {
    id: timelineEventId('snowball-earth'),
    slug: 'snowball-earth',
    title: 'Global glaciations',
    eraId: 'complex-life',
    time: cosmicTimeFromYearsAgo(7e8, 'measured'),
    whenLabel: 'about 720 to 635 million years ago',
    prominence: 0.5,
    evidence: 'active-research',
    sectionId: sectionId('earth'),
    summary: {
      essential:
        'Ice may have reached the equator, more than once. These extreme glaciations end shortly before the first large animals appear.',
    },
    whatHappened: {
      essential:
        'Glacial deposits from this period are found in rocks that were sitting near the equator at the time. In the strongest version of the hypothesis, the entire ocean surface froze, and it took millions of years for volcanic carbon dioxide to build up enough to melt it again.',
    },
    whyItMatters: {
      essential:
        'These events sit immediately before the first complex animals in the fossil record, and immediately after a major rise in oxygen. Whether that is cause or coincidence is an open question.',
    },
    evidenceBasis: {
      essential:
        'Glacial rock deposits at tropical latitudes, identified by the magnetic orientation locked into them, together with distinctive carbonate layers directly above the glacial deposits.',
      detailed:
        'Palaeomagnetic data place Cryogenian glacial deposits at low latitude. "Cap carbonates" sitting sharply on top of glacial sediments indicate an abrupt transition to intense warmth and weathering, consistent with a massive carbon dioxide build-up during the freeze.',
    },
    uncertainty: {
      essential:
        'Whether the ocean froze completely or kept a belt of open water is actively debated, and so is the connection to the appearance of animals.',
      detailed:
        'The "snowball" and "slushball" variants are both defended. Complete freezing raises the problem of how photosynthetic life survived. The causal link to animal evolution is plausible but not demonstrated.',
    },
    references: [referenceId('hoffman-1998-snowball-earth')],
  },

  {
    id: timelineEventId('multicellular-life'),
    slug: 'multicellular-life',
    title: 'The first animals',
    eraId: 'complex-life',
    time: cosmicTimeFromYearsAgo(5.75e8, 'measured'),
    whenLabel: 'about 575 million years ago',
    prominence: 0.8,
    evidence: 'established',
    sectionId: sectionId('life'),
    summary: {
      essential:
        'Soft-bodied, multicellular organisms appear in the fossil record — the strange Ediacaran biota, unlike anything alive today.',
    },
    whatHappened: {
      essential:
        'Cells that had been living independently began staying together permanently and specialising. The Ediacaran fossils include fronds, discs and quilted forms, many centimetres to metres across, with no obvious modern relatives. Complex multicellularity arose independently several times — in animals, in plants, in fungi, in several algal groups.',
    },
    whyItMatters: {
      essential:
        'This is the beginning of the visible living world. Everything from a jellyfish to a redwood to a person is a colony of specialised cells descended from a transition like this one.',
    },
    evidenceBasis: {
      essential:
        'Impressions of soft bodies preserved in sandstone at sites across the world, from Newfoundland to South Australia to the White Sea.',
      detailed:
        'Preservation of soft tissue is rare, which is why this window is so poorly resolved. Some Ediacaran forms have been assigned to modern animal groups on the basis of biomarkers and growth patterns; others may represent lineages with no living descendants at all.',
    },
    references: [referenceId('knoll-2011-multicellularity'), referenceId('erwin-2011-cambrian')],
    relatedEvents: [timelineEventId('cambrian')],
  },

  {
    id: timelineEventId('cambrian'),
    slug: 'cambrian',
    title: 'The Cambrian diversification',
    eraId: 'animal-world',
    time: cosmicTimeFromYearsAgo(5.388e8, 'measured'),
    whenLabel: 'from about 539 million years ago',
    prominence: 0.9,
    evidence: 'established',
    sectionId: sectionId('life'),
    summary: {
      essential:
        'Over roughly 25 million years, most major animal body plans appear in the fossil record — including the first with eyes, shells and hard skeletons.',
    },
    whatHappened: {
      essential:
        'Animals developed hard parts: shells, spines, exoskeletons, teeth. Predation intensified, and with it the arms race between eating and not being eaten. Nearly all of the animal body plans alive today — arthropods, molluscs, echinoderms, and the chordates that eventually include us — are recognisable by the end of this interval.',
      detailed:
        'It is often called an "explosion", but it unfolded over roughly 20 to 25 million years. Molecular clocks indicate the lineages had already been diverging for tens of millions of years before they became visible. What changes in the Cambrian is largely what fossilises: the invention of mineralised skeletons.',
    },
    whyItMatters: {
      essential:
        'Almost every kind of animal alive today traces back to this interval. No fundamentally new body plans have appeared since.',
    },
    evidenceBasis: {
      essential:
        'Exceptionally preserved fossil sites — the Burgess Shale in Canada, Chengjiang in China — capture soft tissue as well as shells, giving an unusually complete picture of the animals of the time.',
      detailed:
        'The base of the Cambrian is formally defined at 538.8 million years by the International Commission on Stratigraphy, using the first appearance of a distinctive trace fossil. Molecular divergence estimates and the fossil record disagree about how much earlier the lineages split — the "Cambrian conundrum".',
    },
    uncertainty: {
      essential:
        'Why it happened when it did is not settled. Rising oxygen, the evolution of vision, ecological feedback from predators and changes in ocean chemistry have all been proposed, and they are not mutually exclusive.',
    },
    references: [referenceId('erwin-2011-cambrian'), referenceId('ics-chart')],
    relatedEvents: [timelineEventId('land-colonisation')],
  },

  {
    id: timelineEventId('land-colonisation'),
    slug: 'land-colonisation',
    title: 'Life moves onto land',
    eraId: 'animal-world',
    time: cosmicTimeFromYearsAgo(4.7e8, 'measured'),
    whenLabel: 'plants from about 470 million years ago; vertebrates by about 370 million',
    prominence: 0.7,
    evidence: 'established',
    sectionId: sectionId('life'),
    summary: {
      essential:
        'Plants colonised the land first, followed by arthropods and eventually by four-limbed vertebrates — the ancestors of amphibians, reptiles, birds and mammals.',
    },
    whatHappened: {
      essential:
        'Plants moved out of water around 470 million years ago, solving the problems of drying out and standing upright. Forests followed, drawing down carbon dioxide and pushing oxygen higher. Arthropods came ashore, and by around 370 million years ago some fish with sturdy, jointed fins were moving in shallow water and eventually onto land.',
      detailed:
        'Tetrapod limbs did not evolve for walking on land; they evolved in water, in fish navigating shallow, vegetated environments, and were later co-opted. This is a standard pattern in evolution — structures repurposed rather than designed for their eventual use.',
    },
    whyItMatters: {
      essential:
        "It opened an entire planet's worth of new habitat, and it built the terrestrial ecosystems that every land animal since has lived in.",
    },
    evidenceBasis: {
      essential:
        'Fossil spores and early plant fragments, then fossils such as Tiktaalik that combine fish and tetrapod features in exactly the rock age and environment predicted before it was found.',
      detailed:
        'The earliest evidence of land plants is dispersed cryptospores from the Middle Ordovician. Tiktaalik roseae was found in 375-million-year-old Devonian rocks in the Canadian Arctic after a deliberate search targeting that age and depositional setting — a successful prediction, not a post-hoc fit.',
    },
    references: [referenceId('kenrick-crane-1997-land-plants'), referenceId('ics-chart')],
  },

  {
    id: timelineEventId('dinosaurs'),
    slug: 'dinosaurs',
    title: 'The age of dinosaurs',
    eraId: 'animal-world',
    time: cosmicTimeFromYearsAgo(2.0e8, 'measured'),
    whenLabel: 'from about 233 to 66 million years ago',
    prominence: 0.85,
    evidence: 'established',
    sectionId: sectionId('life'),
    summary: {
      essential:
        'Dinosaurs dominated land ecosystems for about 165 million years — and one branch of them, the birds, is still here.',
    },
    whatHappened: {
      essential:
        'Dinosaurs appeared in the Triassic and became the dominant large land animals for 165 million years, far longer than mammals have been. Feathers evolved within the group well before flight did. Meanwhile mammals existed throughout, mostly small and mostly nocturnal.',
      detailed:
        'Birds are not descended from dinosaurs in the loose sense — they are dinosaurs, nested within the theropods. Many non-avian dinosaurs had feathers, and the evidence for warm-bloodedness in at least some groups is strong.',
    },
    whyItMatters: {
      essential:
        'It is a useful correction to the idea that evolution is heading somewhere. Dinosaurs were not a failed experiment on the way to mammals — they were spectacularly successful, and their descendants still outnumber mammal species.',
    },
    evidenceBasis: {
      essential:
        'An extensive fossil record on every continent, including feathered specimens from China, nests with eggs, and trackways.',
      detailed:
        'The dinosaur–bird link rests on a long list of shared derived characters: wishbones, hollow bones, three-fingered hands, brooding postures, and feathers preserved in numerous non-avian theropods from the Yixian Formation.',
    },
    references: [referenceId('brusatte-2015-dinosaur-extinction'), referenceId('ics-chart')],
    relatedEvents: [timelineEventId('kpg-extinction')],
  },

  {
    id: timelineEventId('kpg-extinction'),
    slug: 'kpg-extinction',
    title: 'An asteroid ends the Cretaceous',
    eraId: 'animal-world',
    time: cosmicTimeFromYearsAgo(6.6e7, 'measured'),
    whenLabel: '66.0 million years ago',
    prominence: 0.95,
    evidence: 'established',
    sectionId: sectionId('life'),
    summary: {
      essential:
        'A roughly ten-kilometre asteroid struck what is now Mexico. About three-quarters of species died out, including every dinosaur except the birds.',
    },
    whatHappened: {
      essential:
        'The impact released energy far beyond any volcanic eruption or nuclear arsenal. Rock vaporised and re-entered the atmosphere, heating it globally; dust and sulphate aerosols then blocked sunlight for years. Photosynthesis collapsed, and food chains collapsed with it. Around 75% of species disappeared.',
      detailed:
        'Large animals fared worst. Survivors tended to be small, able to burrow or shelter, and able to live on detritus or seeds rather than fresh growth. Massive volcanic eruptions in India — the Deccan Traps — were occurring around the same time and may have stressed ecosystems beforehand.',
    },
    whyItMatters: {
      essential:
        'It removed the dominant land animals in a geological instant, and cleared the way for mammals. Without it, there is no obvious reason mammals would have grown large.',
    },
    evidenceBasis: {
      essential:
        "A worldwide layer of clay at exactly this level is rich in iridium, an element rare in Earth's crust but common in asteroids. The 180-kilometre Chicxulub crater is the right size and exactly the right age.",
      detailed:
        "The iridium anomaly was reported in 1980; the crater was identified a decade later. Shocked quartz, tektites and a global soot layer corroborate it. Drilling into the crater's peak ring has since recovered the impact sequence directly, and radiometric dating places impact and extinction within tens of thousands of years of each other.",
    },
    uncertainty: {
      essential:
        'How much the Deccan volcanism contributed, and whether dinosaurs were already declining before the impact, are still argued about. That the impact happened and coincided with the extinction is not.',
    },
    references: [
      referenceId('alvarez-1980-kpg'),
      referenceId('schulte-2010-chicxulub'),
      referenceId('brusatte-2015-dinosaur-extinction'),
    ],
    relatedEvents: [timelineEventId('mammal-radiation')],
  },

  {
    id: timelineEventId('mammal-radiation'),
    slug: 'mammal-radiation',
    title: 'Mammals expand',
    eraId: 'mammals',
    time: cosmicTimeFromYearsAgo(6.4e7, 'measured'),
    whenLabel: 'from 66 million years ago',
    prominence: 0.75,
    evidence: 'established',
    sectionId: sectionId('life'),
    summary: {
      essential:
        'With the large dinosaurs gone, surviving mammals rapidly diversified into the roles left empty — on land, in the air and back into the sea.',
    },
    whatHappened: {
      essential:
        'Mammals had existed for over 150 million years, mostly small. Within a few million years of the extinction they diversified dramatically: large herbivores, large predators, bats in the air, and whales returning to the ocean. Body sizes increased by orders of magnitude.',
      detailed:
        'This is adaptive radiation — one lineage diversifying quickly when ecological opportunity opens. Whale evolution is among the best-documented major transitions in the fossil record, running from land-dwelling artiodactyls through amphibious intermediates to fully aquatic forms in roughly ten million years.',
    },
    whyItMatters: {
      essential:
        'It is why the world is full of mammals rather than dinosaurs, and it eventually produces the primates.',
    },
    evidenceBasis: {
      essential:
        'An abundant fossil record from just after the extinction, combined with DNA comparisons between living mammals that reconstruct the same branching pattern.',
      detailed:
        'A large combined analysis of anatomical and molecular data supports a rapid placental radiation immediately after the K-Pg boundary, though molecular clocks alone tend to place some divergences earlier — a recurring tension between the two kinds of evidence.',
    },
    references: [referenceId('oleary-2013-placental-mammals')],
    relatedEvents: [timelineEventId('early-primates')],
  },

  {
    id: timelineEventId('early-primates'),
    slug: 'early-primates',
    title: 'The first primates',
    eraId: 'mammals',
    time: cosmicTimeFromYearsAgo(5.6e7, 'measured'),
    whenLabel: 'about 66 to 55 million years ago',
    prominence: 0.7,
    evidence: 'active-research',
    sectionId: sectionId('human-evolution'),
    summary: {
      essential:
        'Small tree-dwelling mammals evolved grasping hands, forward-facing eyes and larger brains — the beginning of the primate lineage.',
    },
    whatHappened: {
      essential:
        'Early primates were small, agile and arboreal. Living in trees favoured grasping hands and feet, nails instead of claws, and eyes at the front of the head giving overlapping fields of view and good depth perception. Relative brain size increased. Later, some lineages became larger and more social; the apes lost their tails and developed shoulders suited to hanging.',
    },
    whyItMatters: {
      essential:
        'Hands that grip, eyes that judge distance, and brains that handle complex social life are all primate inheritances that mattered enormously later.',
    },
    evidenceBasis: {
      essential:
        'Fossil skeletons from the Paleocene and Eocene showing the gradual acquisition of primate traits, together with genetic comparisons among living primates.',
      detailed:
        'Plesiadapiforms from the early Paleocene share several features with crown primates and are generally treated as close relatives. The transition is gradual, which makes drawing a boundary a matter of definition rather than discovery.',
    },
    uncertainty: {
      essential:
        'Where exactly primates begin is partly a matter of where you draw the line. The fossil record from this period is patchy, and molecular dates often disagree with fossil dates.',
    },
    references: [referenceId('bloch-2007-primates'), referenceId('oleary-2013-placental-mammals')],
    relatedEvents: [timelineEventId('hominin-divergence')],
  },
];
