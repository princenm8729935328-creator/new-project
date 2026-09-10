/**
 * Recaps for the final five groups: life as a planetary force, why complexity
 * happened, the questions science does not close, the history, and the bridge
 * towards human evolution.
 *
 * The philosophy recaps are the delicate ones. Their correct answers are
 * frequently "the evidence does not settle this", and the distractors are the
 * confident conclusions people reach in both directions — that science has
 * shown existence meaningless, and that it has shown life was intended. Neither
 * follows, and saying so precisely is the whole point of that group.
 */
import type { RecapsByTopic } from '../schema/recap';

export const LIFE_SYNTHESIS_RECAPS: RecapsByTopic = {
  'life-as-a-geological-force': {
    summary: {
      essential:
        'Life moves more carbon, nitrogen and sulphur around the planet each year than volcanoes and erosion do. It has changed the chemistry of the air, the oceans and the rocks themselves.',
      detailed:
        'The most systematic evidence is mineralogical: most of the roughly five thousand known mineral species require oxidising surface conditions or biologically concentrated elements, so a lifeless rocky planet of Earth’s composition would have only a few hundred. Limestone is compacted shells; coal and oil are buried plant and plankton carbon; iron ore is the precipitate left when photosynthetic bacteria rusted the ancient oceans.',
    },
    questions: [
      {
        id: 'minerals',
        prompt:
          'Why does Earth have thousands of mineral species when a lifeless planet of the same composition would have a few hundred?',
        options: [
          {
            id: 'a',
            text: 'Because plate tectonics generates new minerals continuously',
          },
          {
            id: 'b',
            text: 'Because most mineral species require oxidising surface conditions or biologically concentrated elements, and the oxygen is a biological product',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because impacts create high-pressure mineral phases',
          },
          {
            id: 'd',
            text: 'Because Earth is larger than most rocky planets',
          },
        ],
        explanation:
          'Mineral diversity is a biosignature in its own right, and one that persists in the rock record long after the organisms are gone. Plate tectonics contributes, but the oxygen is the dominant factor.',
      },
      {
        id: 'biomass-shape',
        prompt: 'How is Earth’s biomass actually distributed?',
        options: [
          {
            id: 'a',
            text: 'Roughly evenly between plants, animals and microbes',
          },
          {
            id: 'b',
            text: 'Animals dominate, followed by plants',
          },
          {
            id: 'c',
            text: 'Plants are about 80%, almost all of it wood; bacteria come second; all animals together are under 1%',
            correct: true,
          },
          {
            id: 'd',
            text: 'Bacteria dominate, with plants a distant second',
          },
        ],
        explanation:
          'The total is around 550 gigatonnes of carbon. Humans are about 0.01%, and our livestock outweigh all wild mammals by more than an order of magnitude.',
      },
    ],
  },

  'how-photosynthesis-changed-earth': {
    summary: {
      essential:
        'Oxygenic photosynthesis let organisms take electrons from water — which is everywhere — instead of from locally scarce chemicals. That removed the main limit on how much life the planet could support, and filled the air with a gas that had been almost absent.',
      detailed:
        'The consequences ran far beyond biology. Oxygen rusted the oceans, oxidised the continents, built an ozone layer that made the land surface survivable, and made possible the high-energy metabolism complex life runs on. Plants do not photosynthesise with their own invention: chloroplasts are captured cyanobacteria, so an oak tree is running two-and-a-half-billion-year-old bacterial hardware.',
    },
    questions: [
      {
        id: 'ozone',
        prompt: 'What made the land surface survivable for life?',
        options: [
          {
            id: 'a',
            text: 'The formation of soil by early plants',
          },
          {
            id: 'b',
            text: 'The cooling of the planet after the Hadean',
          },
          {
            id: 'c',
            text: 'The ozone layer, formed from atmospheric oxygen, which absorbs ultraviolet light that would otherwise damage DNA faster than most organisms could repair it',
            correct: true,
          },
          {
            id: 'd',
            text: 'The appearance of hard external skeletons',
          },
        ],
        explanation:
          'Before ozone, ultraviolet at the surface effectively restricted life to water, sediment or shade. The shield above the continents was built by a waste product of marine bacteria.',
      },
      {
        id: 'chloroplast',
        prompt: 'Where does a plant’s photosynthetic machinery come from?',
        options: [
          {
            id: 'a',
            text: 'It evolved independently in the plant lineage',
          },
          {
            id: 'b',
            text: 'From captured cyanobacteria — chloroplasts are endosymbionts, so plants run inherited bacterial machinery',
            correct: true,
          },
          {
            id: 'c',
            text: 'From mitochondria, which were modified for the purpose',
          },
          {
            id: 'd',
            text: 'From horizontal gene transfer from soil bacteria',
          },
        ],
        explanation:
          'Oxygenic photosynthesis appears to have originated once, in the ancestors of cyanobacteria. Every plant and alga performs it using machinery inherited from that lineage through endosymbiosis.',
      },
    ],
  },

  'life-and-the-carbon-cycle': {
    summary: {
      essential:
        'Carbon moves continuously between air, oceans, living things and rock. The biological loop is enormous and nearly balanced; the geological loop is tiny and unbalanced, and it is the one that controls climate over millions of years.',
      detailed:
        'Photosynthesis fixes around 120 gigatonnes of carbon a year and respiration returns almost the same amount — a thousand times the volcanic flux, and very nearly closed. The tiny fraction of organic carbon that escapes decay and is buried is also why there is oxygen in the air: atmospheric oxygen and buried organic carbon are two sides of one ledger.',
    },
    questions: [
      {
        id: 'two-loops',
        prompt:
          'Why does the small geological flux control atmospheric carbon dioxide over long times, despite being dwarfed by the biological one?',
        options: [
          {
            id: 'a',
            text: 'Because geological processes are more reliable',
          },
          {
            id: 'b',
            text: 'Because the biological loop is nearly balanced, so it exchanges carbon without changing the total, whereas the geological loop is the only net route in or out',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because volcanic carbon dioxide is chemically different',
          },
          {
            id: 'd',
            text: 'Because biological carbon is not released into the atmosphere',
          },
        ],
        explanation:
          'Size and net effect are different things. A hundred gigatonnes in and a hundred out changes nothing; a fraction of a gigatonne of net input or removal, sustained for millions of years, changes everything.',
      },
      {
        id: 'oxygen-ledger',
        prompt: 'Why does atmospheric oxygen depend on carbon burial?',
        options: [
          {
            id: 'a',
            text: 'Because buried carbon releases oxygen as it decomposes',
          },
          {
            id: 'b',
            text: 'Because photosynthesis and respiration are chemically opposite — if every scrap of organic carbon were respired, all the oxygen released in making it would be consumed again',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because carbon burial cools the planet, which slows oxygen loss',
          },
          {
            id: 'd',
            text: 'Because buried carbon prevents rock from oxidising',
          },
        ],
        explanation:
          'The oxygen in the air exists precisely because some carbon was buried unoxidised. This is why organic carbon isotope records are used to reconstruct oxygen history.',
      },
    ],
  },

  'the-biosphere': {
    summary: {
      essential:
        'The biosphere is a shell perhaps twenty kilometres thick on a planet 12,700 kilometres across — on a globe the size of a basketball, thinner than a coat of varnish.',
      detailed:
        'Its parts are linked in ways that look implausible until you follow the material. Dust from a dry lake bed in Chad crosses the Atlantic and delivers phosphorus to the Amazon; salmon carry ocean nitrogen into forests hundreds of kilometres inland. Life also extends kilometres into the crust, where some organisms metabolise so slowly that estimated generation times run to years or millennia.',
    },
    questions: [
      {
        id: 'thin',
        prompt: 'How thick is the biosphere relative to Earth?',
        options: [
          {
            id: 'a',
            text: 'About a tenth of Earth’s radius',
          },
          {
            id: 'b',
            text: 'About a hundred kilometres, most of it atmosphere',
          },
          {
            id: 'c',
            text: 'About twenty kilometres on a planet 12,700 kilometres across — proportionally thinner than the skin on an apple',
            correct: true,
          },
          {
            id: 'd',
            text: 'It extends throughout the crust and upper mantle',
          },
        ],
        explanation:
          'And it is not uniform even within that: most of the biosphere’s mass is in a much thinner band still — the upper few metres of soil, the sunlit top of the ocean, and the trunks of trees.',
      },
      {
        id: 'linked',
        prompt: 'What does the Sahara-to-Amazon dust connection illustrate?',
        options: [
          {
            id: 'a',
            text: 'That deserts are expanding into rainforests',
          },
          {
            id: 'b',
            text: 'That nutrient limitation is local while transport is global, so distant parts of the biosphere are materially connected',
            correct: true,
          },
          {
            id: 'c',
            text: 'That rainforests originally formed from desert soils',
          },
          {
            id: 'd',
            text: 'That phosphorus is abundant everywhere',
          },
        ],
        explanation:
          'The Amazon loses phosphorus to its rivers and would run down without resupply. Connections like this are why ecological boundaries are analytical conveniences rather than real edges.',
      },
    ],
  },

  'life-environment-feedback': {
    summary: {
      essential:
        'Organisms alter conditions, altered conditions change which organisms do well, and those organisms alter conditions further. Some of these loops amplify change and some damp it down.',
      detailed:
        'Ice–albedo amplifies: more ice reflects more sunlight, which makes more ice. Silicate weathering damps: a warmer wetter planet weathers faster, which removes carbon dioxide, which cools it. Earth has both, on different timescales, which is why its climate history is long stable stretches punctuated by fast transitions. A stabilising loop does not imply anything arranged it.',
    },
    questions: [
      {
        id: 'both',
        prompt: 'Why is Earth’s climate history neither a smooth line nor a runaway?',
        options: [
          {
            id: 'a',
            text: 'Because the Sun’s output has been perfectly constant',
          },
          {
            id: 'b',
            text: 'Because the planet has both amplifying and damping feedbacks operating on different timescales, giving long stable stretches punctuated by fast threshold-crossing transitions',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because the atmosphere buffers all changes equally',
          },
          {
            id: 'd',
            text: 'Because the oceans absorb all excess heat',
          },
        ],
        explanation:
          'The Sun has brightened by roughly a third. What produces the observed pattern is a system with strong stabilising feedbacks and occasional amplifying ones that cross thresholds.',
      },
      {
        id: 'not-designed',
        prompt: 'Does a stabilising feedback imply that something arranged it?',
        options: [
          {
            id: 'a',
            text: 'Yes — stability at planetary scale requires regulation',
          },
          {
            id: 'b',
            text: 'No — silicate weathering regulates temperature because of the temperature dependence of a chemical reaction, with nothing arranging anything',
            correct: true,
          },
          {
            id: 'c',
            text: 'Yes, since only life produces stabilising loops',
          },
          {
            id: 'd',
            text: 'Only if the feedback involves living organisms',
          },
        ],
        explanation:
          'This distinction is what allows the Gaia topic to be read carefully. That stabilising loops exist is an observation; that they exist because they stabilise is a much stronger claim requiring a mechanism.',
      },
    ],
  },

  'niche-construction': {
    summary: {
      essential:
        'Organisms do not only adapt to their environment; they build the environment they then adapt to. Beavers make ponds, earthworms rebuild soil, corals build the reef they live in.',
      detailed:
        'The scientific content is that inheritance has two channels: genes, and a modified environment. A beaver’s offspring inherit its pond as well as its genes, and the selection pressures acting on them are pressures their parent created. This is not Lamarckian — nothing acquired is written into DNA. Whether it requires an extension of evolutionary theory or is adequately handled within standard frameworks is disputed.',
    },
    questions: [
      {
        id: 'ecological-inheritance',
        prompt: 'What is ecological inheritance?',
        options: [
          {
            id: 'a',
            text: 'The passing of acquired characteristics to offspring',
          },
          {
            id: 'b',
            text: 'The passing on of a modified environment, which changes the selection pressures acting on the next generation',
            correct: true,
          },
          {
            id: 'c',
            text: 'The inheritance of a territory from a parent',
          },
          {
            id: 'd',
            text: 'The transfer of symbionts from parent to offspring',
          },
        ],
        explanation:
          'It is explicitly not Lamarckian. What is passed on is changed conditions, not changed genes, and the effect is on which existing genes do well.',
      },
      {
        id: 'not-better',
        prompt: 'What does the oxygenation of the atmosphere show about constructed niches?',
        options: [
          {
            id: 'a',
            text: 'That constructed niches always benefit the constructor',
          },
          {
            id: 'b',
            text: 'That a constructed niche is not necessarily a better one — the oxygen cyanobacteria released poisoned most of the world that existed at the time',
            correct: true,
          },
          {
            id: 'c',
            text: 'That niche construction only operates at small scales',
          },
          {
            id: 'd',
            text: 'That constructed niches are always temporary',
          },
        ],
        explanation:
          'Niche construction at planetary scale is the same process as a beaver dam, and it carries no guarantee of benefit. A great deal of life closely related to the cyanobacteria was killed by their waste product.',
      },
    ],
  },

  'gaia-hypothesis': {
    summary: {
      essential:
        'Three different claims travel under the name Gaia. That life strongly influences the atmosphere, oceans and rocks is established. That the system as a whole is regulated is disputed. That Earth is literally a living or conscious organism is not supported by evidence.',
      detailed:
        'The core objection to the strong version is mechanistic: natural selection works because entities reproduce with variation and differ in descendants left. There is only one Earth, it does not reproduce, and there is no population of competing biospheres — so no known process could have shaped the biosphere to be good at regulating itself. Lovelock himself later regretted the personifying language, and the field that grew from his work is called Earth system science.',
    },
    questions: [
      {
        id: 'three-claims',
        prompt: 'Which part of the Gaia programme is uncontroversial?',
        options: [
          {
            id: 'a',
            text: 'That Earth actively regulates its own temperature',
          },
          {
            id: 'b',
            text: 'That life measurably influences the atmosphere, oceans and surface chemistry, holding them far from what chemistry alone would produce',
            correct: true,
          },
          {
            id: 'c',
            text: 'That Earth is a single living organism',
          },
          {
            id: 'd',
            text: 'That the biosphere has been selected for stability',
          },
        ],
        explanation:
          'This part has been thoroughly vindicated: atmospheric oxygen, the nitrogen cycle, ocean composition and crustal mineralogy are all substantially biological products. It is also the part Lovelock got right first, from the observation that Earth’s atmosphere is wildly out of chemical equilibrium and Mars’s is not.',
      },
      {
        id: 'mechanism',
        prompt: 'What is the central objection to strong Gaia?',
        options: [
          {
            id: 'a',
            text: 'That life is too weak to influence planetary chemistry',
          },
          {
            id: 'b',
            text: 'That the feedbacks proposed have been measured and found absent',
          },
          {
            id: 'c',
            text: 'That there is only one Earth, it does not reproduce, and there is no population of competing biospheres — so no known process could have shaped it to regulate itself',
            correct: true,
          },
          {
            id: 'd',
            text: 'That Daisyworld has been shown to be mathematically inconsistent',
          },
        ],
        explanation:
          'Selection requires reproduction with variation and differential success. Recent responses propose that persistence rather than reproduction could do the selecting, but that is a substantially weaker claim, closer to a survivorship observation than a mechanism.',
      },
      {
        id: 'daisyworld',
        prompt: 'What does the Daisyworld model actually demonstrate?',
        options: [
          {
            id: 'a',
            text: 'That Earth regulates its temperature through daisies',
          },
          {
            id: 'b',
            text: 'That planetary regulation is impossible without foresight',
          },
          {
            id: 'c',
            text: 'That planetary-scale regulation does not require foresight — but it is an existence proof for a mechanism class, not evidence about Earth',
            correct: true,
          },
          {
            id: 'd',
            text: 'That albedo has no effect on planetary temperature',
          },
        ],
        explanation:
          'Its regulation depends on a convenient coupling: the trait under selection, colour, is also the trait controlling the planetary variable, and it acts in the right direction. There is no general reason for real biospheres to be built that way, and extensions with cheaters and herbivores destroy the regulation in some versions.',
      },
    ],
  },

  'why-didnt-life-stay-simple': {
    summary: {
      essential:
        'For roughly three billion years it did. Life was single-celled and microscopic for the large majority of its existence, and what needs explaining is not why complexity took so long but why it happened at all.',
      detailed:
        'Two things had to happen. Energy: a bacterium generates energy across its outer membrane, whose area grows with the square of size while costs grow with the cube, so it cannot afford a large genome — a constraint that mitochondria lift. And cooperation without cheating, which requires cells to be near-identical clones. The first appears to have happened once in four billion years.',
    },
    questions: [
      {
        id: 'shape',
        prompt: 'What does compressing the history of life into a single day reveal?',
        options: [
          {
            id: 'a',
            text: 'That complexity increased steadily throughout',
          },
          {
            id: 'b',
            text: 'That bacteria and archaea occupy the morning, afternoon and most of the evening, with everything recognisable as a plant or animal in the last couple of hours',
            correct: true,
          },
          {
            id: 'c',
            text: 'That most of the day is taken up by the Cambrian and afterwards',
          },
          {
            id: 'd',
            text: 'That life appeared only in the late afternoon',
          },
        ],
        explanation:
          'Life did not spend three billion years failing to become complex. It spent them being extremely successful at being simple, and inventing essentially all of biochemistry while it was at it.',
      },
      {
        id: 'ceiling',
        prompt: 'Why is a rising maximum complexity not evidence of a trend towards complexity?',
        options: [
          {
            id: 'a',
            text: 'Because the maximum is difficult to measure',
          },
          {
            id: 'b',
            text: 'Because life started against a hard lower bound, so random variation can only extend the distribution upward — the tail grows with no bias pushing organisms along it',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because complexity has actually decreased on average',
          },
          {
            id: 'd',
            text: 'Because the fossil record undersamples complex organisms',
          },
        ],
        explanation:
          'This is the distinction between a distribution’s upper tail and its centre. The mode has stayed on bacteria throughout, which is what a passive diffusion from a wall produces.',
      },
    ],
  },

  'why-multicellular-organisms-evolved': {
    summary: {
      essential:
        'The immediate advantages of being multicellular are usually simple: being too big to be eaten, moving faster, or holding a position where food arrives. Multicellularity has evolved independently at least twenty-five times.',
      detailed:
        'The hard part is not sticking together — that has been evolved in the laboratory from single-celled yeast within about sixty transfers. The hard part is the transition to an organism in which almost all cells have given up their own reproduction, which is stable only because the cells of a body are near-identical clones. Complex multicellularity with true tissues has arisen only a handful of times, and only in lineages that develop from a single cell each generation.',
    },
    questions: [
      {
        id: 'predator',
        prompt: 'What is the most reliable immediate advantage of forming a cluster?',
        options: [
          {
            id: 'a',
            text: 'Sharing nutrients between cells',
          },
          {
            id: 'b',
            text: 'Dividing labour between cells',
          },
          {
            id: 'c',
            text: 'Being too large for a filter-feeding predator with a fixed mouth size',
            correct: true,
          },
          {
            id: 'd',
            text: 'Reproducing faster than single cells',
          },
        ],
        explanation:
          'Adding a predator to populations of single-celled algae has repeatedly produced multicellular colonies within a few hundred generations. Nothing worked anything out; the clusters were the ones still there.',
      },
      {
        id: 'counts',
        prompt:
          'What does the contrast between twenty-five origins of simple multicellularity and about six of complex multicellularity tell us?',
        options: [
          {
            id: 'a',
            text: 'That complex multicellularity is a more recent invention',
          },
          {
            id: 'b',
            text: 'That the first step is cheap and easily repeated, while the second — differentiated tissues with most cells forgoing reproduction — is not',
            correct: true,
          },
          {
            id: 'c',
            text: 'That simple multicellular forms are always transitional',
          },
          {
            id: 'd',
            text: 'That complex multicellularity requires oxygen and simple forms do not',
          },
        ],
        explanation:
          'The counts are the evidence. Sticking together happens readily wherever it pays; giving up reproduction requires clonal development and elaborate suppression of cheating.',
      },
    ],
  },

  'cooperation-between-cells': {
    summary: {
      essential:
        'A multicellular body only works if cells restrain themselves: divide when signalled, stop when told, and die when they are supposed to. Any cell that stops obeying gains an immediate advantage over its neighbours.',
      detailed:
        'That makes every complex organism a system with permanent internal conflict, held in check by an elaborate set of controls — checkpoints, programmed cell death, replicative limits, immune surveillance. The comparative evidence is striking: large long-lived animals should suffer far more cancer than small ones on a simple per-division argument and do not, and elephants carry roughly twenty copies of the tumour-suppressor gene TP53 against the usual one.',
    },
    questions: [
      {
        id: 'petos',
        prompt: 'What is Peto’s paradox?',
        options: [
          {
            id: 'a',
            text: 'That cancer is more common in small animals than large ones',
          },
          {
            id: 'b',
            text: 'That large long-lived animals should suffer far more cancer than small ones on a per-cell-division argument, and do not',
            correct: true,
          },
          {
            id: 'c',
            text: 'That cancer cells reproduce more slowly than healthy cells',
          },
          {
            id: 'd',
            text: 'That cancer rates are identical across all species',
          },
        ],
        explanation:
          'The resolution is that lineage-specific defences evolved repeatedly. Elephants carry about twenty copies of TP53; other large animals have different solutions, which indicates independent evolution of stronger policing.',
      },
      {
        id: 'dicty',
        prompt: 'What does the social amoeba Dictyostelium show about cooperation between cells?',
        options: [
          {
            id: 'a',
            text: 'That cooperation is impossible without a nervous system',
          },
          {
            id: 'b',
            text: 'That when aggregates form from cells that meet rather than from a single cell, they can contain multiple genotypes and cheater strains appear',
            correct: true,
          },
          {
            id: 'c',
            text: 'That programmed cell death evolved only in animals',
          },
          {
            id: 'd',
            text: 'That single-celled organisms cannot cooperate at all',
          },
        ],
        explanation:
          'About a fifth of the cells become the stalk and die while the rest become spores. Because the slug forms by aggregation rather than from one cell, cheaters that preferentially end up in the spore head exist — which is the clearest natural demonstration of why clonal development matters.',
      },
    ],
  },

  'specialization-of-cells': {
    summary: {
      essential:
        'A neuron and a skin cell in the same body carry the same DNA. They differ because different genes are switched on, and that is what makes complex bodies possible.',
      detailed:
        'Specialisation dissolves conflicts a single cell cannot escape: a shape good for swimming is not a shape good for absorbing nutrients. A muscle cell can fill itself with contractile fibres because it will never need to swim. The trade-off is flexibility — specialised cells usually cannot revert, which is why plants regenerate readily from ordinary tissue and vertebrates do not.',
    },
    questions: [
      {
        id: 'cloning',
        prompt:
          'What settled the question of whether differentiated cells lose genetic information?',
        options: [
          {
            id: 'a',
            text: 'Sequencing of individual cell types',
          },
          {
            id: 'b',
            text: 'Cloning — a nucleus taken from a differentiated adult cell can direct the development of an entire animal, so the information was only switched off',
            correct: true,
          },
          {
            id: 'c',
            text: 'Observation of cell division under a microscope',
          },
          {
            id: 'd',
            text: 'The discovery of stem cells',
          },
        ],
        explanation:
          'It was a genuinely open question, and the answer won a Nobel Prize. The main exceptions — mammalian red blood cells losing their nuclei, and the immune system deliberately rearranging its own DNA — are evolved departures from a rule that otherwise holds.',
      },
      {
        id: 'tradeoff',
        prompt: 'What does specialisation cost?',
        options: [
          {
            id: 'a',
            text: 'Energy, since specialised cells consume more',
          },
          {
            id: 'b',
            text: 'Flexibility — a specialised cell usually cannot revert, which is why vertebrates regenerate poorly compared with plants and sponges',
            correct: true,
          },
          {
            id: 'c',
            text: 'Speed, since specialised cells work more slowly',
          },
          {
            id: 'd',
            text: 'Genetic stability',
          },
        ],
        explanation:
          'Sponges have few cell types and can be pushed through a sieve and reassemble. Plants keep pools of undifferentiated cells and regrow from fragments. Vertebrates have hundreds of cell types, exceptional performance and poor regeneration, and nothing has all three.',
      },
    ],
  },

  'why-complexity-has-costs': {
    summary: {
      essential:
        'Complex organisms are expensive to build and run, take longer to develop, reproduce more slowly, and have more components that can fail. These are why complexity is not the default.',
      detailed:
        'A bacterium can divide in twenty minutes; a human takes fifteen years to reach reproductive age. Nervous tissue is among the most expensive material an animal can build — the human brain is about 2% of body mass and around 20% of resting energy use — and it cannot be switched off. Complexity is also a liability in a catastrophe: after the end-Cretaceous impact no land animal much larger than a domestic cat survived.',
    },
    questions: [
      {
        id: 'fragility',
        prompt:
          'Why are complex organisms often the first to disappear when conditions change sharply?',
        options: [
          {
            id: 'a',
            text: 'Because they are physically weaker',
          },
          {
            id: 'b',
            text: 'Because they reproduce slowly, need more resources, and have more components that can fail — so they cannot track a fast change',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because they have less genetic variation',
          },
          {
            id: 'd',
            text: 'Because they are always at the top of the food chain',
          },
        ],
        explanation:
          'After the end-Cretaceous impact, bacteria, fungi, insects and small vertebrates came through in numbers while nothing large on land did. Complexity is not a defence against catastrophe and is often a liability in one.',
      },
      {
        id: 'brain-cost',
        prompt: 'How expensive is human brain tissue?',
        options: [
          {
            id: 'a',
            text: 'About 2% of body mass and 2% of resting energy',
          },
          {
            id: 'b',
            text: 'About 2% of body mass and around 20% of resting energy use, rising to roughly 60% in a newborn',
            correct: true,
          },
          {
            id: 'c',
            text: 'About 10% of body mass and 10% of resting energy',
          },
          {
            id: 'd',
            text: 'Its cost cannot be measured separately from the rest of the body',
          },
        ],
        explanation:
          'Most of that goes on pumping ions back across neuron membranes, a cost incurred at rest whether or not the neuron is doing anything. It also cannot be interrupted — a few minutes without oxygen destroys it.',
      },
    ],
  },

  'why-complex-life-is-not-automatically-better': {
    summary: {
      essential:
        'Better at what? By abundance, biomass, habitat range, metabolic versatility and evolutionary durability, prokaryotes outperform every complex lineage. Complexity is a strategy, not a rank.',
      detailed:
        'Eukaryotes do essentially two things for energy, both inherited from captured bacteria. Prokaryotes additionally oxidise sulphur, iron, hydrogen, ammonia, manganese and methane, respire using sulphate, nitrate, iron and uranium, and fix atmospheric nitrogen, which no eukaryote can do. The dependence runs one way: remove all eukaryotes and the biosphere continues, altered; remove all prokaryotes and it collapses within a few generations.',
    },
    questions: [
      {
        id: 'dependence',
        prompt: 'Which way does the dependence between prokaryotes and eukaryotes run?',
        options: [
          {
            id: 'a',
            text: 'Prokaryotes depend on eukaryotes for organic carbon',
          },
          {
            id: 'b',
            text: 'The dependence is mutual and symmetric',
          },
          {
            id: 'c',
            text: 'Eukaryotes depend on prokaryotes — particularly for nitrogen fixation, which no eukaryote can perform — while the reverse is not true',
            correct: true,
          },
          {
            id: 'd',
            text: 'Neither depends on the other',
          },
        ],
        explanation:
          'Nitrogen fixation is the decisive case: the atmosphere is 78% nitrogen and no eukaryote can use it directly. Remove all prokaryotes and the biosphere fails within a small number of generations.',
      },
      {
        id: 'higher-lower',
        prompt: 'Why has biology abandoned the language of higher and lower organisms?',
        options: [
          {
            id: 'a',
            text: 'Because it is impolite to rank organisms',
          },
          {
            id: 'b',
            text: 'Because complexity turned out to be impossible to measure',
          },
          {
            id: 'c',
            text: 'Because there is no scale on which one organism is higher than another, and the language is inherited from a theological ranking of creation that predates evolutionary thinking',
            correct: true,
          },
          {
            id: 'd',
            text: 'Because all organisms are equally complex',
          },
        ],
        explanation:
          'The great chain of being ranked creation from lowest to highest with humans near the top. Darwin was aware of the trap and wrote a note to himself in a margin: never use the words higher and lower.',
      },
    ],
  },

  'why-evolution-favors-simplicity': {
    summary: {
      essential:
        'When a structure stops paying for itself, organisms that lose it do better. Parasites shed organs, cave animals shed eyes, and endosymbiotic bacteria shed most of their genome.',
      detailed:
        'Buchnera, which lives inside aphids, has a genome about a seventh the size of its free-living relatives; Carsonella ruddii is down to about 180 genes, fewer than some viruses. Two forces drive this: relaxed selection makes loss-of-function mutations effectively neutral, and small effective population sizes let drift fix slightly deleterious ones. There is also a subtlety — in the absence of selection, parts tend to become more different from each other, so relaxed selection can increase a kind of complexity even while removing function.',
    },
    questions: [
      {
        id: 'two-forces',
        prompt: 'Which two forces drive genome reduction in endosymbionts?',
        options: [
          {
            id: 'a',
            text: 'Mutation pressure and horizontal gene transfer',
          },
          {
            id: 'b',
            text: 'Relaxed selection, which makes loss-of-function mutations effectively neutral, and drift in small effective populations, which can fix slightly deleterious ones',
            correct: true,
          },
          {
            id: 'c',
            text: 'Competition between symbionts and host immune attack',
          },
          {
            id: 'd',
            text: 'Physical constraints on cell size and DNA replication speed',
          },
        ],
        explanation:
          'Vertically transmitted symbionts have very small effective population sizes, which weakens selection against slightly harmful changes. The process is essentially irreversible: genes once lost are not recovered.',
      },
      {
        id: 'ztfel',
        prompt: 'What does the zero-force evolutionary law propose?',
        options: [
          {
            id: 'a',
            text: 'That evolution stops in the absence of selection',
          },
          {
            id: 'b',
            text: 'That in the absence of constraint, variation within an organism increases — so some observed complexity requires no adaptive explanation, and selection is often what keeps organisms simple',
            correct: true,
          },
          {
            id: 'c',
            text: 'That all organisms tend towards the simplest possible form',
          },
          {
            id: 'd',
            text: 'That mutation rates are constant across lineages',
          },
        ],
        explanation:
          'McShea and Brandon’s point inverts the usual assumption. If parts drift apart by default, then complexity can be the null expectation and simplicity the thing requiring selection to maintain.',
      },
    ],
  },

  'why-diversity-can-be-more-important-than-complexity': {
    summary: {
      essential:
        'What has increased over four billion years is not sophistication but variety — the number of distinct ways of making a living. Diversity is also what makes systems durable.',
      detailed:
        'A varied community keeps functioning when conditions change because something in it can handle the new conditions; a sophisticated but uniform one cannot. The same argument holds over evolutionary time: after each mass extinction it was not the most sophisticated survivors that rebuilt the world, but whichever lineages happened to suit the new conditions — and the more lineages there were, the better the odds that something did.',
    },
    questions: [
      {
        id: 'cedar-creek',
        prompt:
          'What is the most important result from the long-running grassland diversity experiments?',
        options: [
          {
            id: 'a',
            text: 'That diverse plots contain more individual plants',
          },
          {
            id: 'b',
            text: 'That diverse plots vary less from year to year and lose far less productivity in drought, not merely that they produce more',
            correct: true,
          },
          {
            id: 'c',
            text: 'That diversity increases soil carbon storage',
          },
          {
            id: 'd',
            text: 'That monocultures produce more in good years',
          },
        ],
        explanation:
          'Higher productivity is the headline; lower variability is the result that matters, because it is what stability means in practice. The mechanism is that species respond differently, so aggregate properties fluctuate less than individual populations.',
      },
      {
        id: 'stock',
        prompt: 'What does a mass extinction destroy, in the terms of this topic?',
        options: [
          {
            id: 'a',
            text: 'The total number of individuals alive',
          },
          {
            id: 'b',
            text: 'The complexity of the most advanced organisms',
          },
          {
            id: 'c',
            text: 'The biosphere’s stock of distinct evolutionary experiments — its store of possible futures, which is not quickly replaced',
            correct: true,
          },
          {
            id: 'd',
            text: 'The physical structure of ecosystems only',
          },
        ],
        explanation:
          'Recovery from major extinctions took millions of years and what returned was never what had been lost. Diversity is not a reservoir that refills automatically on any timescale that concerns anyone.',
      },
    ],
  },
};
