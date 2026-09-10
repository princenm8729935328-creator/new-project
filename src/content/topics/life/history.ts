/**
 * Origin & Evolution of Life — the history, told as a history.
 *
 * The temptation in a group like this is to produce a timeline: a list of
 * periods, each with its characteristic organisms. That is the version most
 * readers have already met and forgotten. So each topic here is built around
 * a causal question instead — what changed, what made it possible, what it
 * made possible in turn — and the chronology is the spine rather than the
 * subject.
 *
 * The group ends on extinction because the last topic has to correct the
 * intuition the rest of the group risks creating: that the history of life is
 * a story of accumulation. It is not. It is a story of turnover, in which
 * loss is not the opposite of the process but part of how it works.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const LIFE = sectionId('life');
const REVIEWED = '2026-09-10';

export const LIFE_HISTORY_TOPICS: readonly Topic[] = [
  {
    id: topicId('the-great-oxygenation-event'),
    slug: 'the-great-oxygenation-event',
    sectionId: LIFE,
    order: 90,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The Great Oxidation Event',
    subtitle:
      'The largest change in Earth’s chemistry since the planet cooled — caused by bacteria.',
    summary: {
      essential:
        'Around 2.4 billion years ago, free oxygen began to accumulate in the atmosphere for the first time. It was produced by photosynthetic bacteria, and it changed the planet’s surface chemistry permanently.',
      detailed:
        'It was not a sudden event despite the name. Oxygen had probably been produced for hundreds of millions of years already, absorbed by iron, sulphur and volcanic gases. The transition marks the point where production finally exceeded consumption.',
      technical:
        'The primary evidence is the disappearance of mass-independent sulphur isotope fractionation from the rock record at ~2.45–2.32 Ga, which requires atmospheric oxygen below ~10⁻⁵ of present levels before and above it after. Secondary evidence includes the loss of detrital pyrite and uraninite and the appearance of oxidised palaeosols.',
    },
    glossaryTerms: [
      glossaryTermId('great-oxidation-event'),
      glossaryTermId('cyanobacteria'),
      glossaryTermId('banded-iron-formation'),
    ],
    related: [
      topicId('the-oxygen-revolution'),
      topicId('how-photosynthesis-changed-earth'),
      topicId('earths-changing-atmosphere'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'For two billion years the air had essentially no oxygen in it. Then, over a geologically short interval, it did — and almost everything about the surface of the planet changed. Iron that had been dissolved in seawater rusted out of it. Rocks began weathering differently. Whole categories of chemistry that had been impossible became routine, and whole categories that had been routine stopped.',
          detailed:
            'The cause was a waste product. Cyanobacteria splitting water for electrons had been dumping oxygen into their surroundings for a long time, and for a long time it was consumed as fast as it was made — by dissolved iron, by volcanic gases, by exposed rock. The Great Oxidation Event is the moment those sinks were finally overwhelmed.',
        },
      },
      {
        id: 'viz-goe',
        kind: 'visualization',
        visualizationId: visualizationId('oxygen-history'),
      },
      {
        id: 'claim-sulphur',
        kind: 'claim',
        statement: {
          essential:
            'The timing is pinned by sulphur isotopes, which record a chemical process that can only happen in an atmosphere without oxygen.',
          detailed:
            'Ultraviolet light acting on volcanic sulphur dioxide produces an unusual isotopic signature — one that does not scale with mass in the normal way. It requires ultraviolet light to reach the lower atmosphere, which requires no ozone, which requires no oxygen. That signature is present in rocks older than about 2.4 billion years and absent in younger ones, sharply.',
          technical:
            'Mass-independent fractionation of sulphur isotopes constrains atmospheric pO₂ to below roughly 10⁻⁵ PAL before the transition. The disappearance is now known to be less abrupt than first reported, with excursions suggesting transient oxygenation episodes hundreds of millions of years earlier — so the event is better read as the end of a long instability than as a single step.',
        },
        evidence: 'established',
        references: [
          referenceId('farquhar-2000-sulfur'),
          referenceId('holland-2006-goe'),
          referenceId('lyons-2014-oxygen-rise'),
        ],
      },
      {
        id: 'consequences',
        kind: 'prose',
        text: {
          essential:
            'The consequences ran in every direction. Oxygen destroyed atmospheric methane, a powerful greenhouse gas, and the planet may have frozen as a result — one of the candidate causes of the Huronian glaciation, an ice age lasting perhaps 300 million years. Ozone began to form and screen ultraviolet light. And aerobic respiration became possible, which extracts around fifteen times more energy from the same food than fermentation does.',
          detailed:
            'That last point is why this event sits in the history of complexity as well as the history of the atmosphere. Large, active, complex organisms need a great deal of energy per cell. Without oxygen there is no plausible route to them. It is not that oxygen caused complex life — nearly two billion years passed before animals appeared — but that it removed a hard constraint.',
        },
      },
      {
        id: 'name-caution',
        kind: 'callout',
        tone: 'caution',
        title: 'The name oversells it',
        text: {
          essential:
            'Great Oxidation Event suggests a sudden filling of the air. Oxygen after the event was still perhaps one percent of present levels, and it stayed low for another billion and a half years before rising again in the Neoproterozoic.',
          detailed:
            'That long middle period — sometimes called the boring billion, though the name is also being reconsidered — had oxygen levels that were probably too low for large animals. The rise to modern levels was a second, later transition, and it is the one that lines up with the appearance of animal life.',
        },
        references: [referenceId('lyons-2014-oxygen-rise')],
      },
    ],
    furtherReading: [referenceId('lyons-2014-oxygen-rise')],
  },

  {
    id: topicId('the-rise-of-complex-life'),
    slug: 'the-rise-of-complex-life',
    sectionId: LIFE,
    order: 91,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The rise of complex life',
    subtitle: 'A billion years of very little, and then, quite suddenly, animals.',
    summary: {
      essential:
        'Complex cells existed for well over a billion years before anything made of many of them became common. The long delay is one of the more interesting facts in the history of life, and its cause is not settled.',
      detailed:
        'The most-discussed candidate is oxygen: a second rise in atmospheric oxygen towards the end of the Precambrian coincides broadly with the first large animals. Whether it was cause, consequence or coincidence is actively argued.',
      technical:
        'Molecular clocks place the origin of animals substantially before the earliest unambiguous body fossils, implying a long cryptic history of small, soft-bodied forms. The Ediacaran biota, the Neoproterozoic oxygenation event and the Snowball glaciations all fall within the same interval, and disentangling their causal relationships is unresolved.',
    },
    glossaryTerms: [glossaryTermId('eukaryote'), glossaryTermId('archean')],
    related: [
      topicId('the-cambrian-explosion'),
      topicId('why-didnt-life-stay-simple'),
      topicId('snowball-earth'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Complex cells were in place by around 1.8 billion years ago at the latest. The first animals large enough to leave clear fossils appear around 575 million years ago. Between those dates lies more than a billion years in which eukaryotes existed, diversified quietly, and did not become large or obviously complicated. Anything claiming to explain the origin of animals has to explain that gap.',
          detailed:
            'It is not that nothing happened. Multicellularity arose repeatedly in algae. Sexual reproduction became established. Eukaryotes spread. But the world stayed microbial to a first approximation for a stretch of time longer than everything that has happened since — and the reason is not agreed.',
        },
      },
      {
        id: 'viz-precambrian',
        kind: 'visualization',
        visualizationId: visualizationId('precambrian-timeline'),
      },
      {
        id: 'ediacaran',
        kind: 'prose',
        text: {
          essential:
            'When large organisms do appear, in the Ediacaran, they are deeply strange. Quilted fronds a metre long, anchored to the seafloor. Flat, segmented discs. Things with three-fold symmetry, which almost nothing alive has. Many of them have no mouth, no gut and no obvious way of feeding, and may have absorbed nutrients directly through their surfaces.',
          detailed:
            'How they relate to later animals is contested. Some are plausibly early relatives of familiar groups; others have been placed in animals, in fungi, in lichens, and in a proposed kingdom of their own. Most disappear before the Cambrian. It is a genuine and rather unsettling episode: a world of large organisms that mostly did not lead anywhere, occupying the seafloor for tens of millions of years before being replaced.',
        },
      },
      {
        id: 'claim-oxygen-link',
        kind: 'claim',
        statement: {
          essential:
            'A second rise in atmospheric oxygen occurred in the late Precambrian, broadly coinciding with the appearance of large animals. Whether it enabled them is not settled.',
          detailed:
            'The case for causation is that large active animals with circulatory systems need considerably more oxygen than microbes, and that oxygen was probably too scarce before this to support them. The case against is that some sponges tolerate remarkably low oxygen, that the geochemical records are noisy and locally variable, and that the correlation may be the other way round — animals mixing sediment and altering carbon burial could have raised oxygen themselves.',
          technical:
            'Proxy records disagree on the timing and magnitude of Neoproterozoic oxygenation, and different proxies sample different reservoirs. The current position in the literature is that oxygen was probably a necessary condition but likely not a sufficient trigger, with ecological factors such as the onset of predation contributing.',
        },
        evidence: 'active-research',
        references: [referenceId('lyons-2014-oxygen-rise'), referenceId('knoll-2011-eukaryotes')],
      },
      {
        id: 'crosslink-cambrian',
        kind: 'cross-link',
        topicId: topicId('the-cambrian-explosion'),
        rationale: 'What happened next, and why it looks so much more sudden than it was.',
      },
    ],
    furtherReading: [referenceId('knoll-2011-eukaryotes')],
  },

  {
    id: topicId('major-transitions-in-evolution'),
    slug: 'major-transitions-in-evolution',
    sectionId: LIFE,
    order: 92,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Major transitions in evolution',
    subtitle:
      'A handful of moments where things that reproduced separately started reproducing together.',
    summary: {
      essential:
        'A small number of events in the history of life share a common shape: entities that had reproduced independently became parts of a larger entity that reproduced as a unit. Genes into chromosomes, cells into complex cells, cells into bodies, individuals into societies.',
      detailed:
        'Framing them together is useful because the same problem arises each time — why should a lower-level unit give up its own reproduction? — and the same class of answers applies.',
      technical:
        'Maynard Smith and Szathmáry’s formulation emphasises changes in how information is stored and transmitted alongside changes in the unit of selection. Each transition requires mechanisms suppressing lower-level conflict; fair meiosis, uniparental organelle inheritance, clonal development and policing are the recurring solutions.',
    },
    glossaryTerms: [
      glossaryTermId('endosymbiosis'),
      glossaryTermId('natural-selection'),
      glossaryTermId('eukaryote'),
    ],
    related: [
      topicId('endosymbiosis'),
      topicId('cooperation-between-cells'),
      topicId('why-complex-cells-were-such-a-major-step'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'John Maynard Smith and Eörs Szathmáry noticed that a few of the biggest changes in the history of life all look the same when you stand back. Separate replicating molecules became linked into chromosomes. Separate cells became a single complex cell. Separate cells became a body. Separate individuals became a colony with a single reproductive caste.',
          detailed:
            'In every case, things that had been reproducing on their own account became parts of something that reproduced as a whole — and in every case, this raises the same question. Why would a unit give up its own reproduction? A gene that replicated faster than its neighbours on a chromosome would spread. A cell that divided faster than its neighbours in a body would spread. Each transition required that possibility to be suppressed.',
        },
      },
      {
        id: 'viz-transitions',
        kind: 'visualization',
        visualizationId: visualizationId('major-transitions'),
      },
      {
        id: 'claim-conflict',
        kind: 'claim',
        statement: {
          essential:
            'Every major transition is accompanied by mechanisms that suppress competition among the units being combined.',
          detailed:
            'Meiosis gives each gene copy an equal chance of being passed on, which removes the advantage of cheating. Mitochondria are inherited from one parent only, which stops different mitochondrial lineages competing inside a cell. Bodies develop from a single cell, so all cells are relatives. Sterile castes in insect colonies come from a single queen. The pattern is consistent enough that finding it has become a way of recognising a transition.',
          technical:
            'Where suppression is incomplete, conflict is visible: meiotic drive elements, selfish mitochondrial genomes causing cytoplasmic male sterility in plants, cancer, and worker policing of worker-laid eggs in social insects. These are the exceptions that demonstrate the rule’s necessity.',
        },
        evidence: 'inference',
        references: [referenceId('szathmary-smith-1995-transitions')],
      },
      {
        id: 'information',
        kind: 'prose',
        text: {
          essential:
            'The other thread running through the list is a change in how information is stored and passed on. Chromosomes made larger genomes possible. Sex made recombination possible. The genetic code made open-ended protein sequences possible. Language made cultural inheritance possible, with information passing between individuals rather than only from parent to offspring.',
          detailed:
            'That last one is the transition we are inside. Cultural transmission is genuinely a second inheritance system, and it operates orders of magnitude faster than genetic inheritance — which is why the changes in human life over ten thousand years bear no relation in scale to the genetic changes over the same period. It fits the pattern; it is also the only entry on the list that is still visibly in progress, and its long-term shape is not something anyone can report.',
        },
      },
      {
        id: 'not-a-ladder',
        kind: 'callout',
        tone: 'misconception',
        title: 'A list is not a ranking',
        text: {
          essential:
            'The transitions are usually listed in chronological order, which makes them look like rungs. They are not stages every lineage passes through, and most lineages have not been through most of them. Bacteria have made the first transition and none of the later ones, and have been extremely successful without them.',
          detailed:
            'Nor were they inevitable. Each appears to have happened once or a small number of times, in specific circumstances, and the reason there is a list at all is that they are rare. Their rarity is the interesting feature and is easily lost when they are presented as a sequence of achievements.',
        },
      },
    ],
    furtherReading: [referenceId('szathmary-smith-1995-transitions')],
  },

  {
    id: topicId('life-moves-onto-land'),
    slug: 'life-moves-onto-land',
    sectionId: LIFE,
    order: 93,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Life moves onto land',
    subtitle: 'Every problem a body solves in water has to be solved again in air.',
    summary: {
      essential:
        'Land offered light, carbon dioxide and no competitors. It also offered desiccation, gravity, ultraviolet radiation and the problem of reproducing without water to carry gametes.',
      detailed:
        'The colonisation happened in stages and independently in several lineages — microbes first, then fungi and plants, then arthropods, then vertebrates — with each wave making the next more feasible.',
      technical:
        'Key innovations include the cuticle and stomata for water control, lignified vascular tissue for support and transport, the amniotic egg for terrestrial reproduction, and modification of paired fins into weight-bearing limbs. Devonian tetrapod fossils show limbs with digits appearing while the animals were still primarily aquatic.',
    },
    glossaryTerms: [glossaryTermId('photosynthesis'), glossaryTermId('adaptation')],
    related: [
      topicId('plants-transform-the-continents'),
      topicId('convergent-evolution'),
      topicId('earths-changing-atmosphere'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Water does a great deal for an organism without being asked. It holds the body up, so a structure does not need to support its own weight. It carries away waste and delivers dissolved gases. It keeps everything wet, which is a requirement rather than a convenience, because the chemistry of life happens in solution. It carries eggs and sperm to each other. Move onto land and every one of those services is withdrawn at once.',
          detailed:
            'Which is why colonisation took so long, and why it happened piecemeal. Microbial mats were probably on damp surfaces very early. Fungi and simple plants followed, in partnership — the earliest land plants show associations with fungi that look much like the ones modern plants depend on to extract phosphorus from soil. Arthropods came ashore in the Silurian. Vertebrates were late, in the Devonian, and were the least well prepared.',
        },
      },
      {
        id: 'viz-land',
        kind: 'visualization',
        visualizationId: visualizationId('move-to-land'),
      },
      {
        id: 'claim-tetrapods',
        kind: 'claim',
        statement: {
          essential:
            'Limbs with digits evolved in animals that were still living in water, before there was any question of walking on land.',
          detailed:
            'The Devonian fossils show the sequence clearly. Fish with robust, jointed fin skeletons and lungs, living in shallow, weedy, oxygen-poor water. Then animals with recognisable limbs and many digits — eight, seven, six — that still had gills and tail fins. Limbs were useful for pushing through vegetation and propping the head up to breathe air at the surface. Walking came later, using equipment that already existed.',
          technical:
            'Tiktaalik, Acanthostega and Ichthyostega, together with the trackway evidence from Zachelmie which predates the body fossils, have reshaped this account substantially since the 1990s. Digit number stabilised at five only after the transition, and the earliest limbed forms were probably not habitually terrestrial.',
        },
        evidence: 'established',
        references: [referenceId('clack-2009-tetrapods')],
      },
      {
        id: 'exaptation',
        kind: 'prose',
        text: {
          essential:
            'This is the general pattern for large transitions, and it is worth naming. Structures rarely appear because they will be useful later. They appear because they are useful now, for something else, and are then available when circumstances change. Lungs evolved in fish living in stagnant water. Limbs evolved for moving through weeds. Neither was a preparation for land.',
          detailed:
            'Biologists call this exaptation, and it is the answer to the old objection about what use half a wing or half an eye could be. Half a wing is a perfectly good gliding surface, or a device for controlling temperature, or a display. The question assumes the final function was the target throughout, which is exactly what the fossil record repeatedly shows it was not.',
        },
      },
    ],
    furtherReading: [referenceId('clack-2009-tetrapods')],
  },

  {
    id: topicId('plants-transform-the-continents'),
    slug: 'plants-transform-the-continents',
    sectionId: LIFE,
    order: 94,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Plants transform the continents',
    subtitle:
      'Before plants there was rock, dust and rivers that ran in sheets. Plants made soil, and soil made everything else.',
    summary: {
      essential:
        'Land plants did not simply colonise the continents; they rebuilt them. Roots broke rock into soil, soil held water, and rivers that had run in broad braided sheets began to run in stable meandering channels held by vegetation.',
      detailed:
        'The atmospheric effects were as large. Accelerated weathering and massive burial of woody carbon drew down carbon dioxide, cooled the planet, and pushed oxygen to levels higher than today.',
      technical:
        'The Devonian–Carboniferous interval records a drop in atmospheric CO₂ of roughly an order of magnitude and a rise in O₂ to perhaps 30–35%, driven by enhanced silicate weathering and organic carbon burial. The traditional explanation invoking a lag in lignin-degrading fungi is now considered only a partial account.',
    },
    glossaryTerms: [
      glossaryTermId('silicate-weathering'),
      glossaryTermId('photosynthesis'),
      glossaryTermId('greenhouse-effect'),
    ],
    related: [
      topicId('life-moves-onto-land'),
      topicId('life-as-a-geological-force'),
      topicId('life-and-the-carbon-cycle'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Picture a continent before plants. Bare rock and loose sediment. No soil, because soil is largely made by living things and held together by roots. Rain falls and runs straight off, carrying sediment in wide shallow braided channels that shift constantly. Nothing slows the water down, nothing holds the banks, and there is nothing to hold moisture between storms.',
          detailed:
            'Plants changed all of it. Roots split rock physically and dissolve it chemically, releasing minerals. Dead plant matter accumulates and becomes organic soil that holds water. Vegetation stabilises banks, so rivers begin to meander and hold their courses — and the change is visible in the sedimentary record, where the signature of stable single-channel rivers appears in step with the spread of rooted plants.',
        },
      },
      {
        id: 'viz-greening',
        kind: 'visualization',
        visualizationId: visualizationId('continental-greening'),
      },
      {
        id: 'claim-drawdown',
        kind: 'claim',
        statement: {
          essential:
            'The spread of land plants in the Devonian drew down atmospheric carbon dioxide substantially and contributed to global cooling and glaciation.',
          detailed:
            'Two mechanisms worked together. Roots and their associated fungi accelerate the weathering of silicate rock, which consumes carbon dioxide. And forests bury organic carbon on a scale that had not previously been possible on land — the Carboniferous coal measures are the result.',
          technical:
            'Geochemical models place the Devonian–Carboniferous CO₂ decline at roughly an order of magnitude, with the Late Palaeozoic Ice Age following. The magnitude of the biotic weathering enhancement is the largest source of uncertainty in these reconstructions, and the coincident Late Devonian marine extinctions have been attributed in part to nutrient runoff from newly forested land.',
        },
        evidence: 'model',
        references: [
          referenceId('berner-2003-carbon-cycle'),
          referenceId('kenrick-crane-1997-land-plants'),
        ],
      },
      {
        id: 'oxygen-peak',
        kind: 'prose',
        text: {
          essential:
            'Burying that much carbon had a second consequence. Carbon buried unoxidised is oxygen left in the air, and during the Carboniferous atmospheric oxygen appears to have reached perhaps thirty-five percent, against twenty-one today. This is the period of dragonflies with seventy-centimetre wingspans and millipedes over two metres long.',
          detailed:
            'The usual explanation for insect gigantism is that insects breathe through tubes that carry air passively into the body, and higher oxygen concentration extends the distance that works over. It is a reasonable account and is supported by rearing experiments, though body size in the fossil record also tracks the appearance of flying vertebrate predators, so oxygen is probably not the whole story.',
          technical:
            'The classic explanation for Carboniferous coal — that lignin had evolved but lignin-degrading fungi had not, so wood simply accumulated — has been substantially revised. Molecular clock work places the origin of white-rot fungi earlier than the model requires, and tectonic and climatic conditions creating persistently waterlogged basins are now considered a major factor.',
        },
      },
    ],
    furtherReading: [referenceId('kenrick-crane-1997-land-plants')],
  },

  {
    id: topicId('animals-transform-ecosystems'),
    slug: 'animals-transform-ecosystems',
    sectionId: LIFE,
    order: 95,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Animals transform ecosystems',
    subtitle: 'Once things could eat each other, the rules changed for everything.',
    summary: {
      essential:
        'Animals reorganised the biosphere by moving through it. They mixed sediment, moved nutrients between places, ate plants and so selected for defences, and created the first food webs of any complexity.',
      detailed:
        'The most consequential thing they did was eat each other. Predation is a selection pressure that intensifies itself, and it is the engine behind much of the complexity in animal bodies.',
      technical:
        'Bioturbation from the Cambrian onward altered sediment geochemistry and the oxygen penetration depth, with knock-on effects on nutrient cycling. Megafaunal nutrient transport is estimated to have declined by more than 90% following the Late Pleistocene extinctions, though these reconstructions carry wide uncertainties.',
    },
    glossaryTerms: [
      glossaryTermId('trophic-level'),
      glossaryTermId('keystone-species'),
      glossaryTermId('coevolution'),
    ],
    related: [
      topicId('predation'),
      topicId('the-evolutionary-arms-race'),
      topicId('keystone-species'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The Precambrian seafloor was covered in microbial mats — thick, tough, undisturbed layers of bacteria that had been sitting there essentially unchallenged for hundreds of millions of years. Then animals appeared and began to burrow. Within a geologically short period the mats were gone from most environments, replaced by churned sediment with animals living inside it.',
          detailed:
            'Geologists call the change the Cambrian substrate revolution, and it altered far more than the appearance of the seafloor. Burrowing pumps oxygen into sediment, changes where chemical reactions happen, and alters how phosphorus and sulphur cycle. A whole class of organisms adapted to firm, undisturbed mats disappeared, and a whole class adapted to soft churned mud appeared.',
        },
      },
      {
        id: 'viz-bioturbation',
        kind: 'visualization',
        visualizationId: visualizationId('animals-reshape'),
      },
      {
        id: 'predation-engine',
        kind: 'prose',
        text: {
          essential:
            'The larger change was predation. Once some organisms made a living by eating others, everything alive was under pressure to become harder to eat — shells, spines, speed, camouflage, toxins, burrows. And every one of those defences put pressure on predators to become better at getting past them.',
          detailed:
            'This is why the Cambrian looks the way it does. Mineralised skeletons appear across many unrelated groups within a few tens of millions of years, which is not a coincidence but a response. Eyes appear, and eyes are useful to both sides. The arms race between predators and prey has been running ever since and is responsible for a substantial fraction of the complexity in animal bodies.',
        },
      },
      {
        id: 'claim-nutrients',
        kind: 'claim',
        statement: {
          essential:
            'Large animals move nutrients across landscapes, and losing them measurably impoverishes the systems they moved through.',
          detailed:
            'Whales feeding at depth and defecating at the surface move nutrients upward against gravity, fertilising the plankton that feed them. Salmon carry ocean nitrogen into forests. Elephants and other megafauna carry nutrients away from rich patches into poor ones. The Amazon receives phosphorus from dust, but before the Pleistocene extinctions much more of it was distributed by large animals.',
          technical:
            'Model-based reconstructions suggest lateral nutrient transport capacity fell by more than 90% with the loss of Pleistocene megafauna, and vertical ocean transport by a comparable factor with whaling. These are modelled estimates with substantial uncertainty in their parameters, and should be read as indicating a large effect rather than a precise one.',
        },
        evidence: 'model',
        references: [referenceId('estes-2011-trophic-downgrading')],
      },
      {
        id: 'crosslink-arms-race',
        kind: 'cross-link',
        topicId: topicId('the-evolutionary-arms-race'),
        rationale: 'The mechanism behind most of what animals did to each other, in detail.',
      },
    ],
    furtherReading: [referenceId('vermeij-1994-arms-race')],
  },

  {
    id: topicId('the-age-of-dinosaurs'),
    slug: 'the-age-of-dinosaurs',
    sectionId: LIFE,
    order: 96,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The age of dinosaurs',
    subtitle:
      'A hundred and sixty million years of dominance that began with a catastrophe and ended with one.',
    summary: {
      essential:
        'Dinosaurs dominated land ecosystems for roughly 160 million years — a span so long that more time separates Stegosaurus from Tyrannosaurus than separates Tyrannosaurus from us.',
      detailed:
        'They did not out-compete their way to dominance. They were a modest group until the end-Triassic extinction removed their main competitors, and they expanded into the space that left.',
      technical:
        'Dinosaurs originated in the Middle to Late Triassic alongside a diverse assemblage of pseudosuchian archosaurs which were then more abundant and disparate. Their rise follows the end-Triassic extinction closely, supporting an opportunistic rather than a competitive-replacement model.',
    },
    glossaryTerms: [glossaryTermId('mass-extinction'), glossaryTermId('adaptation')],
    related: [
      topicId('the-end-cretaceous-extinction'),
      topicId('mass-extinctions'),
      topicId('extinction-as-part-of-evolution'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Get the timescale straight first, because it is almost always compressed. Stegosaurus lived about 150 million years ago. Tyrannosaurus lived about 68 million years ago. The gap between them is around 82 million years. The gap between Tyrannosaurus and you is 66 million. These animals did not coexist, and the popular image of a single dinosaur world is collapsing an interval longer than the entire age of mammals.',
          detailed:
            'Across that span the cast changed completely, several times over. Continents split apart and faunas diverged on them. Climates shifted from hot and dry to warm and wet. The sauropods of the Jurassic gave way to different giants in the Cretaceous. Flowering plants appeared partway through and reorganised terrestrial ecosystems around the herbivores that ate them.',
        },
      },
      {
        id: 'viz-mesozoic',
        kind: 'visualization',
        visualizationId: visualizationId('mesozoic-timeline'),
      },
      {
        id: 'claim-opportunity',
        kind: 'claim',
        statement: {
          essential:
            'Dinosaurs became dominant after a mass extinction removed their competitors, not by out-competing them beforehand.',
          detailed:
            'For the first thirty million years of their existence, dinosaurs were a relatively minor part of land faunas dominated by crocodile-line archosaurs, which were more numerous and more varied. The end-Triassic extinction, around 201 million years ago, removed most of those groups. Dinosaurs came through and expanded into the space.',
          technical:
            'The evidence is the relative abundance and morphological disparity of pseudosuchians versus dinosauromorphs through Triassic assemblages, which show pseudosuchians equal or superior on both measures until the boundary. This is the standard illustration of contingency: the group that inherited the Mesozoic was not the one that looked most successful going into it.',
        },
        evidence: 'inference',
        references: [referenceId('brusatte-2015-dinosaurs')],
      },
      {
        id: 'birds',
        kind: 'prose',
        text: {
          essential:
            'Dinosaurs are not extinct. Birds are dinosaurs — not descended from them in the loose sense that mammals are descended from early synapsids, but members of the group, nested inside the theropods alongside Tyrannosaurus and Velociraptor. There are roughly eleven thousand living species, which is more than there are mammals.',
          detailed:
            'The evidence accumulated over three decades and is now overwhelming: feathered non-flying dinosaurs from China, shared skeletal features down to the wishbone and the arrangement of the wrist, air sacs invading the bones, and brooding postures preserved in fossils of animals that died sitting on nests. Feathers evolved long before flight, in animals that could not fly, probably for insulation and display — another case of a structure being available before it was useful for what it is now famous for.',
        },
      },
      {
        id: 'reconstruction',
        kind: 'callout',
        tone: 'caution',
        title: 'Illustrations are interpretations',
        text: {
          essential:
            'Every picture of a living dinosaur is a reconstruction. Skeletons and, increasingly, preserved traces of feathers and pigment structures constrain them, but colour, soft tissue, posture in life and behaviour are inferred rather than observed.',
          detailed:
            'Some inferences are well grounded. Melanosome shapes preserved in some fossil feathers do indicate colour patterns, and comparison with living birds and crocodiles constrains soft tissue. Others — skin texture on most species, most behaviour, most vocalisation — are informed guesses. The confident, detailed animals in documentaries carry far more inference than their presentation suggests.',
        },
        references: [referenceId('brusatte-2015-dinosaurs')],
      },
    ],
    furtherReading: [referenceId('brusatte-2015-dinosaurs')],
  },

  {
    id: topicId('the-end-cretaceous-extinction'),
    slug: 'the-end-cretaceous-extinction',
    sectionId: LIFE,
    order: 97,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The end-Cretaceous extinction',
    subtitle:
      'A ten-kilometre rock, a very bad afternoon, and the reason mammals inherited the planet.',
    summary: {
      essential:
        'Sixty-six million years ago an asteroid roughly ten kilometres across struck what is now the Yucatán peninsula. About three quarters of species on Earth disappeared, including every dinosaur except the birds.',
      detailed:
        'The evidence for the impact is exceptionally strong: a global iridium layer, shocked quartz, tektites, the crater itself, and a precise date matching the extinction horizon.',
      technical:
        'The Chicxulub crater is ~180 km in diameter and dated to 66.05 Ma, coincident with the K–Pg boundary within analytical uncertainty. The Deccan Traps volcanic province was erupting across the same interval, and the relative contribution of the two remains debated, though the impact is now generally accepted as the proximate trigger.',
    },
    glossaryTerms: [glossaryTermId('mass-extinction'), glossaryTermId('albedo')],
    related: [
      topicId('mass-extinctions'),
      topicId('the-recovery-of-life'),
      topicId('the-age-of-dinosaurs'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The object arrived at something like twenty kilometres per second and delivered energy on the order of a hundred million megatons. It excavated a crater roughly 180 kilometres wide, threw molten rock into space on ballistic trajectories, and started fires. Within hours, that ejecta was re-entering the atmosphere worldwide, heating the sky to something like the inside of an oven.',
          detailed:
            'The longer-term problem was worse. The impact site happened to be sulphur-rich carbonate rock, so the impact injected enormous quantities of sulphate aerosol and dust into the stratosphere. Sunlight fell sharply for months to years. Photosynthesis largely stopped, in the oceans and on land, and food chains that depended on it collapsed from the bottom.',
        },
      },
      {
        id: 'viz-impact',
        kind: 'visualization',
        visualizationId: visualizationId('impact-winter'),
      },
      {
        id: 'claim-iridium',
        kind: 'claim',
        statement: {
          essential:
            'A worldwide layer of iridium-rich clay marks the boundary. Iridium is rare in Earth’s crust and common in asteroids.',
          detailed:
            'Walter and Luis Alvarez found the anomaly in 1980 while trying to measure how long the boundary clay took to deposit, and proposed an impact. It was a radical suggestion and was resisted for a decade. The crater was identified in 1991, buried under the Yucatán, and the case became very hard to argue with.',
          technical:
            'Supporting evidence includes shocked quartz with multiple planar deformation lamellae, spherule and tektite layers whose thickness increases towards the Caribbean, a boundary-aged tsunami deposit along the Gulf coast, and radiometric dates on impact glass matching the boundary to within tens of thousands of years.',
        },
        evidence: 'established',
        references: [referenceId('alvarez-1980-impact'), referenceId('schulte-2010-chicxulub')],
      },
      {
        id: 'deccan',
        kind: 'prose',
        text: {
          essential:
            'There is a genuine complication, and it has not gone away. At the same time, the Deccan Traps in India were erupting one of the largest volcanic provinces in Earth’s history — hundreds of thousands of cubic kilometres of lava, releasing sulphur dioxide and carbon dioxide over hundreds of thousands of years.',
          detailed:
            'Some researchers argue the eruptions were already stressing ecosystems and the impact finished off a weakened biosphere. Others argue the impact does the work on its own and the volcanism is a coincidence of timing. There is also evidence that the impact’s seismic energy intensified the eruptions. The consensus position now treats the impact as the proximate cause while acknowledging the Deccan contribution, and the balance between them remains an open research question.',
        },
      },
      {
        id: 'who-survived',
        kind: 'prose',
        text: {
          essential:
            'The pattern of survival is more informative than the pattern of loss. Nothing on land much larger than a domestic cat survived. What did come through were small animals, animals that could burrow, animals that could eat detritus rather than living plants, and freshwater communities that ran on decaying material washed in from outside.',
          detailed:
            'That is not a story about which groups were better. It is a story about which happened to have the right characteristics for a specific, brief, extreme set of conditions. Mammals had been around for as long as dinosaurs, mostly small and nocturnal. Being small and able to eat almost anything was not a preparation for an asteroid, but it was what mattered on the day — and it is why the world is now full of their descendants.',
        },
      },
    ],
    furtherReading: [referenceId('schulte-2010-chicxulub')],
  },

  {
    id: topicId('the-recovery-of-life'),
    slug: 'the-recovery-of-life',
    sectionId: LIFE,
    order: 98,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The recovery of life',
    subtitle: 'It always comes back. It never comes back as what it was.',
    summary: {
      essential:
        'After every mass extinction, diversity has eventually recovered — but over millions of years, and with a completely different cast. Recovery is not restoration.',
      detailed:
        'The pattern is consistent: an interval dominated by a few opportunistic species, then a long rebuilding as surviving lineages diversify into the emptied roles.',
      technical:
        'Recovery times to pre-extinction diversity are typically on the order of 5–10 million years, and longer for the end-Permian. The immediate aftermath is characterised by low-diversity, high-abundance disaster taxa and the delayed return of ecosystem complexity relative to raw taxonomic counts.',
    },
    glossaryTerms: [glossaryTermId('mass-extinction'), glossaryTermId('biodiversity')],
    related: [
      topicId('how-life-recovers-after-mass-extinction'),
      topicId('the-end-cretaceous-extinction'),
      topicId('why-extinction-is-not-the-opposite-of-evolution'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'In the layers immediately above the end-Permian boundary, the rock is dominated by a single small clam called Claraia, and by a burrowing form called Lystrosaurus that makes up a large majority of the land vertebrate fossils. This is what an emptied world looks like: not desolation, but a small number of tolerant species everywhere, with nothing to compete with them.',
          detailed:
            'Palaeontologists call these disaster taxa. They are usually generalists with fast reproduction and broad tolerances — species that were unremarkable before and are suddenly the only thing around. They bloom, dominate for a few hundred thousand to a few million years, and then fade as diversity rebuilds around them.',
        },
      },
      {
        id: 'viz-recovery',
        kind: 'visualization',
        visualizationId: visualizationId('extinction-recovery'),
      },
      {
        id: 'claim-timescale',
        kind: 'claim',
        statement: {
          essential:
            'Recovery to pre-extinction levels of diversity has taken millions of years, and after the largest extinction, considerably longer.',
          detailed:
            'The usual figure is five to ten million years for the moderate events. After the end-Permian, which removed perhaps 80 to 90 percent of marine species, marine ecosystems took on the order of ten million years to regain comparable complexity, and some functional groups considerably longer.',
          technical:
            'Recovery metrics diverge: taxonomic richness, morphological disparity and ecological complexity return on different schedules, with functional recovery typically lagging raw counts. Sampling bias in the immediate aftermath, where rock volume and preservation quality change, complicates all of these estimates.',
        },
        evidence: 'inference',
        references: [
          referenceId('burgess-2014-permian'),
          referenceId('raup-sepkoski-1982-extinctions'),
        ],
      },
      {
        id: 'different',
        kind: 'prose',
        text: {
          essential:
            'What comes back is never what was lost. After the end-Permian, the marine world that rebuilt was dominated by different groups than the one before — the brachiopods that had covered Palaeozoic seafloors never regained their position, and bivalves and gastropods took over. After the end-Cretaceous, mammals expanded from small nocturnal animals into everything from whales to bats within about ten million years.',
          detailed:
            'This is why extinction is not reversible in any meaningful sense. The lineages that are gone do not come back, and what fills their roles is something else that happened to be available, carrying its own inherited constraints. The recovery is real; the restoration is not, and confusing them is the mistake behind the idea that the biosphere will simply repair itself given time.',
        },
      },
      {
        id: 'present',
        kind: 'callout',
        tone: 'note',
        title: 'The relevant timescale',
        text: {
          essential:
            'That life recovers after mass extinctions is true and is often offered as reassurance about the present. It is not reassuring on inspection, because the recovery time is millions of years — a duration with no relationship to human civilisation.',
          detailed:
            'Current extinction rates are estimated at tens to hundreds of times the background rate, though the estimates carry real uncertainty and depend heavily on the groups sampled. Whether the present episode reaches the magnitude of the big five is not established and depends on what happens next. What the fossil record does establish is what recovery costs in time, and the number is large.',
        },
        references: [referenceId('raup-sepkoski-1982-extinctions')],
      },
    ],
    furtherReading: [referenceId('burgess-2014-permian')],
  },

  {
    id: topicId('why-extinction-is-not-the-opposite-of-evolution'),
    slug: 'why-extinction-is-not-the-opposite-of-evolution',
    sectionId: LIFE,
    order: 99,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why extinction is not the opposite of evolution',
    subtitle: 'Removal is not the failure of the process. It is half of how it works.',
    summary: {
      essential:
        'Extinction is often treated as evolution’s failure — what happens when the process does not work. It is better understood as part of the same process: differential survival at the level of species rather than individuals.',
      detailed:
        'Over 99% of species that have ever lived are extinct. That is not a record of malfunction; it is the ordinary outcome for a lineage in a changing world.',
      technical:
        'Background extinction and speciation together determine standing diversity, and the fossil record is better modelled as continuous turnover than as accumulation. Mass extinctions differ from background extinction not only in rate but in selectivity, which is why they reset ecological structure rather than merely thinning it.',
    },
    glossaryTerms: [
      glossaryTermId('mass-extinction'),
      glossaryTermId('natural-selection'),
      glossaryTermId('biodiversity'),
    ],
    related: [
      topicId('extinction-as-part-of-evolution'),
      topicId('the-recovery-of-life'),
      topicId('evolutionary-contingency-how-much-is-chance'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'More than ninety-nine percent of all species that have ever existed are gone. If extinction were evolution failing, then evolution has failed almost every time it has been tried, which should suggest the framing is wrong rather than the process.',
          detailed:
            'The average lifespan of a species in the fossil record is on the order of a few million years. Species arise, persist for a while, and disappear — either by dying out or by changing enough that palaeontologists give the later form a different name. Turnover is the normal state. Standing diversity at any moment is the balance between origination and extinction, not an accumulation.',
        },
      },
      {
        id: 'viz-turnover',
        kind: 'visualization',
        visualizationId: visualizationId('diversity-turnover'),
      },
      {
        id: 'claim-selectivity',
        kind: 'claim',
        statement: {
          essential:
            'Mass extinctions are not simply intensified background extinction. They select on different traits, which is why they reorganise ecosystems rather than thinning them evenly.',
          detailed:
            'Traits that help during normal times — specialisation to a reliable food source, large body size, a narrow but effective set of adaptations — become liabilities when conditions change abruptly. Traits that are unremarkable in normal times — being small, tolerating a wide range of conditions, eating almost anything — become decisive. That is why the survivors of the end-Cretaceous look like an arbitrary selection rather than the best of the previous world.',
          technical:
            'Jablonski’s work on selectivity showed that geographic range predicts survival during mass extinctions at the clade level in ways it does not during background intervals. The change in selective regime is what makes these events genuinely different in kind, not just in rate.',
        },
        evidence: 'inference',
        references: [
          referenceId('raup-sepkoski-1982-extinctions'),
          referenceId('gould-1989-wonderful-life'),
        ],
      },
      {
        id: 'necessary',
        kind: 'prose',
        text: {
          essential:
            'Extinction also creates the conditions for what comes next. Mammals existed for well over a hundred million years as small, mostly nocturnal animals before the end-Cretaceous. Their expansion into large body sizes and daytime activity did not require a new innovation. It required the space to be empty.',
          detailed:
            'The same is true of dinosaurs after the end-Triassic, and of the modern marine fauna after the end-Permian. Removal opens the ecological space that a radiation fills, which means the pattern of the past 500 million years is not a slow accumulation of ever-better organisms but a repeated cycle of clearance and refilling — with each refilling drawing on a different, contingent set of survivors.',
        },
      },
      {
        id: 'not-a-defence',
        kind: 'callout',
        tone: 'caution',
        title: 'This is not an argument that extinction does not matter',
        text: {
          essential:
            'Recognising extinction as part of how evolution works says nothing about whether causing it is acceptable. Those are different kinds of claim, and the descriptive one does not license the evaluative one.',
          detailed:
            'What the record does supply is the relevant timescales, and they are the argument. Species lost are lost permanently. Ecological reorganisation after major losses takes millions of years. Recovery has always happened and has never restored what was there. Those are facts about consequences, and what to do about them is a decision, not a finding.',
        },
      },
    ],
    furtherReading: [referenceId('raup-sepkoski-1982-extinctions')],
  },
];
