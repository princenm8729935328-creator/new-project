/**
 * Origin & Evolution of Life — why life became complex.
 *
 * This group exists to defuse a single intuition that almost every reader
 * arrives with: that evolution has been building towards complexity, and that
 * complex organisms are its achievements. The counter-argument is not that
 * complexity is unimportant. It is that complexity is one option among many,
 * that it is expensive, that it is frequently abandoned, and that the most
 * successful lineages on the planet by almost every measure never adopted it.
 *
 * The order is deliberate: first why simplicity was not the end of the story,
 * then how complexity was actually achieved and what it cost, then a sustained
 * argument that it is not a ranking. The group closes on diversity, because
 * diversity — not complexity — is what the record actually shows increasing.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const LIFE = sectionId('life');
const REVIEWED = '2026-09-10';

export const LIFE_COMPLEXITY_TOPICS: readonly Topic[] = [
  {
    id: topicId('why-didnt-life-stay-simple'),
    slug: 'why-didnt-life-stay-simple',
    sectionId: LIFE,
    order: 73,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why didn’t life stay simple?',
    subtitle:
      'For most of its history, it did. The interesting question is why anything ever left.',
    summary: {
      essential:
        'Life was single-celled and microscopic for something like three billion years — the large majority of its existence. Complexity is not the main story of life on Earth; it is a late and unusual development in a few lineages.',
      detailed:
        'Two things had to happen for complexity to become possible: an energy supply large enough to run a bigger genome, and a way for cells to cooperate without cheating. Neither was inevitable, and the first appears to have happened once.',
      technical:
        'The energetic argument holds that mitochondrial endosymbiosis removed a scaling constraint on genome size by providing many small, locally controlled bioenergetic membranes per cell. The argument is contested in its strong form but the correlation between mitochondria and eukaryotic genome expansion is not in dispute.',
    },
    glossaryTerms: [
      glossaryTermId('prokaryote'),
      glossaryTermId('eukaryote'),
      glossaryTermId('endosymbiosis'),
    ],
    related: [
      topicId('why-complex-cells-were-such-a-major-step'),
      topicId('why-multicellular-organisms-evolved'),
      topicId('why-evolution-favors-simplicity'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Compress the history of life into a single day. Life appears before four in the morning. For the entire morning, the whole afternoon and most of the evening, it is bacteria and archaea — single cells, invisible, chemically inventive and structurally unremarkable. Complex cells appear somewhere around seven in the evening. Animals appear at about half past nine. Everything you would recognise as a plant or an animal occupies the last couple of hours.',
          detailed:
            'That shape should reset the question. Life did not spend three billion years failing to become complex. It spent three billion years being extremely successful at being simple — colonising every environment on the planet, inventing photosynthesis, nitrogen fixation, respiration and essentially all of biochemistry. What needs explaining is not why complexity took so long, but why it happened at all.',
        },
      },
      {
        id: 'viz-timeline',
        kind: 'visualization',
        visualizationId: visualizationId('complexity-timeline'),
      },
      {
        id: 'constraint',
        kind: 'prose',
        text: {
          essential:
            'One answer is energy. A bacterium generates its energy across its outer membrane, and that membrane area scales with the square of its size while its volume — and its costs — scale with the cube. Getting bigger makes a bacterium worse off. It cannot afford a large genome, because copying and expressing genes is expensive and the energy budget per gene falls as it grows.',
          detailed:
            'A eukaryotic cell escapes this because its energy generation is not on the outer membrane. It is inside mitochondria, hundreds or thousands of them, each with its own folded membranes and its own small genome controlling them locally. The available energy per gene rises by orders of magnitude, and suddenly a cell can afford tens of thousands of genes, regulation, internal structure and specialised compartments.',
          technical:
            'Lane and Martin estimated the eukaryotic advantage in energy per gene at roughly four to five orders of magnitude. The argument has been criticised on the grounds that the comparison depends on how the normalisation is done and that some large bacteria do maintain extensive internal membranes; the correlation between mitochondrial acquisition and genomic expansion is nonetheless robust.',
        },
      },
      {
        id: 'claim-once',
        kind: 'claim',
        statement: {
          essential:
            'Complex cells appear to have arisen once. All eukaryotes — every plant, animal, fungus and protist — descend from a single ancestral merger.',
          detailed:
            'Bacteria and archaea have been evolving alongside eukaryotes for two billion years and have never independently produced anything comparable, despite having far larger populations and faster generation times. Whatever the transition required, it does not appear to be something evolution stumbles into readily.',
          technical:
            'The evidence is the universal presence of a shared set of eukaryote-specific features and a mitochondrial ancestry that traces to a single alphaproteobacterial acquisition. Amitochondriate eukaryotes have all been shown to be secondarily reduced. The archaeal host lineage is now identified with the Asgard archaea, though the sequence and intermediate states of the merger remain actively researched.',
        },
        evidence: 'inference',
        references: [
          referenceId('lane-martin-2010-energetics'),
          referenceId('spang-2015-lokiarchaeota'),
        ],
      },
      {
        id: 'not-a-trend',
        kind: 'callout',
        tone: 'misconception',
        title: 'A ceiling rising is not a trend upward',
        text: {
          essential:
            'The maximum complexity of life has increased over time. The typical complexity has not. Bacteria are still the most abundant, most widespread and most metabolically diverse organisms on Earth, and their descendants are not becoming more complex.',
          detailed:
            'This is the distinction between a distribution’s upper tail and its centre. Life started at the simplest possible configuration — there is a hard wall there, nothing can be less complex than the minimum — so any random drift in complexity can only extend the distribution in one direction. The tail grows without any bias pushing organisms up it.',
        },
        references: [referenceId('gould-1996-full-house')],
      },
    ],
    furtherReading: [referenceId('lane-2015-vital-question')],
  },

  {
    id: topicId('why-multicellular-organisms-evolved'),
    slug: 'why-multicellular-organisms-evolved',
    sectionId: LIFE,
    order: 74,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why multicellular organisms evolved',
    subtitle: 'Being bigger has advantages — and staying together is easier than it sounds.',
    summary: {
      essential:
        'Multicellularity has evolved independently many times. The immediate advantages are usually simple: being too big to be eaten, being able to move faster, or being able to hold a position where food arrives.',
      detailed:
        'The hard part is not sticking together — that happens readily, and has been produced in the laboratory in weeks. The hard part is the transition from a clump of cells to an organism in which cells have given up their own reproduction.',
      technical:
        'Simple multicellularity has arisen in at least 25 independent lineages; complex multicellularity with differentiated tissues in perhaps six. Experimental evolution under selection for rapid settling produces heritable multicellular clusters within tens of generations.',
    },
    glossaryTerms: [glossaryTermId('natural-selection'), glossaryTermId('adaptation')],
    related: [
      topicId('multicellular-life'),
      topicId('cooperation-between-cells'),
      topicId('specialization-of-cells'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The most reliable reason to be multicellular is that something is trying to eat you. A single-celled alga is exactly the right size for a filter-feeding predator. A clump of forty of them is not. In laboratory experiments, adding a predator to a population of single-celled algae has repeatedly produced multicellular colonies within a few hundred generations — not because the algae worked anything out, but because the ones that stuck together were the ones that were still there.',
          detailed:
            'There are other pay-offs. A larger body sinks or swims differently, which matters for reaching nutrients. A colony can generate a stronger feeding current than any of its cells could alone. Some cells can hold position while others do something else. None of these requires anything sophisticated, which is why simple multicellularity has appeared over and over in unrelated groups.',
        },
      },
      {
        id: 'viz-multicellularity',
        kind: 'visualization',
        visualizationId: visualizationId('multicellularity'),
      },
      {
        id: 'claim-experimental',
        kind: 'claim',
        statement: {
          essential:
            'Multicellular clusters can evolve from single-celled ancestors in the laboratory in a matter of weeks under the right selection.',
          detailed:
            'Ratcliff and colleagues selected brewer’s yeast simply by repeatedly keeping whatever settled fastest to the bottom of a tube. Within about sixty transfers, snowflake-shaped clusters had evolved that reproduced as clusters, and some cells within them were dying in a programmed way that helped the cluster break into offspring. That is a rudimentary division of labour, arrived at very quickly.',
          technical:
            'The clusters form by incomplete cell separation after division rather than by aggregation, which means they are clonal — a crucial detail, because clonality removes the conflict of interest that otherwise destabilises cooperation. Whether this system is a good model for the origins of complex multicellularity is debated, but as a demonstration that the first step is easy it is decisive.',
        },
        evidence: 'established',
        references: [referenceId('ratcliff-2012-multicellularity')],
      },
      {
        id: 'hard-part',
        kind: 'prose',
        text: {
          essential:
            'The step that is genuinely difficult comes later. In a real multicellular organism, almost all the cells will never reproduce. Your liver cells will leave no descendants; only the germ line does. Every one of those cells has given up its own reproductive future to support a body it is not going to pass on.',
          detailed:
            'From the point of view of a cell, that is an extraordinary arrangement, and it is stable only because the cells in a body are genetically nearly identical. A liver cell that helps the body reproduce is helping copies of its own genes get into the next generation — just not through itself. Where relatedness is lower, cooperation is much harder to maintain, and the transition to complex multicellularity has occurred only in lineages that develop from a single cell each generation.',
        },
      },
      {
        id: 'claim-independent',
        kind: 'claim',
        statement: {
          essential:
            'Multicellularity has evolved independently dozens of times; complex multicellularity with true tissues only a handful of times.',
          detailed:
            'Animals, land plants, red algae, brown algae and two fungal groups are the usual list for complex multicellularity. Simple multicellular forms — filaments, colonies, aggregates — appear in bacteria, many algal groups, slime moulds and elsewhere. The contrast between the two counts is informative: the first step is cheap, the second is not.',
        },
        evidence: 'inference',
        references: [referenceId('knoll-2011-multicellularity')],
      },
    ],
    furtherReading: [referenceId('knoll-2011-multicellularity')],
  },

  {
    id: topicId('cooperation-between-cells'),
    slug: 'cooperation-between-cells',
    sectionId: LIFE,
    order: 75,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Cooperation between cells',
    subtitle: 'A body is a truce — and cancer is what happens when the truce breaks.',
    summary: {
      essential:
        'A multicellular body only works if cells restrain themselves: divide when signalled, stop when told, and die when they are supposed to. Any cell that stops obeying gains an immediate advantage over its neighbours.',
      detailed:
        'This makes every complex organism a system with a permanent internal conflict, held in check by an elaborate set of controls. Cancer is not a malfunction imported from outside; it is evolution operating on cells inside a body, on a timescale of years.',
      technical:
        'The stability of somatic cooperation rests principally on clonal development, which makes within-organism relatedness effectively 1, supplemented by policing mechanisms: checkpoint control, apoptosis, replicative senescence, and immune surveillance. Somatic mutation continually generates variants that escape these controls.',
    },
    glossaryTerms: [glossaryTermId('natural-selection'), glossaryTermId('fitness')],
    related: [
      topicId('when-cells-began-cooperating'),
      topicId('cooperation'),
      topicId('specialization-of-cells'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Consider what a cell in your arm is doing. It could, in principle, divide as fast as its resources allow. Instead it sits still, divides only when signalled, and if it detects damage in its own DNA it may destroy itself. It behaves, in other words, like a member of a community rather than an organism pursuing its own reproduction.',
          detailed:
            'It behaves that way because it is a clone. Every cell in your body descends from one fertilised egg, so they carry the same genes. A cell that helps the whole body reproduce is propagating exactly the genes it carries. There is no conflict of interest to speak of — as long as the genes stay the same.',
        },
      },
      {
        id: 'viz-cooperation',
        kind: 'visualization',
        visualizationId: visualizationId('cell-cooperation'),
      },
      {
        id: 'cheating',
        kind: 'prose',
        text: {
          essential:
            'But they do not stay the same. Cells accumulate mutations as they divide, and sooner or later one of them acquires a change that makes it ignore the stop signals. That cell now divides faster than its neighbours. Its descendants inherit the change and divide faster still. Within the body, natural selection favours it — it is out-reproducing everything around it.',
          detailed:
            'That is what a tumour is: a lineage of cells that has defected from the cooperative arrangement and is being selected for defection. It is a genuinely evolutionary process, with variation, heredity and differential reproduction, running inside a single organism over years. Which is also why cancers evolve resistance to treatment: a drug is a selection pressure, and a tumour is a diverse population.',
          technical:
            'This framing has practical consequences. Adaptive-therapy approaches deliberately avoid maximum-tolerated dosing on the grounds that eliminating the drug-sensitive population releases resistant clones from competition. Clinical results so far are limited and mixed, but the underlying evolutionary logic is well supported.',
        },
      },
      {
        id: 'claim-policing',
        kind: 'claim',
        statement: {
          essential:
            'Multicellular organisms carry extensive machinery whose function is to suppress the reproduction of their own cells.',
          detailed:
            'Cell-cycle checkpoints, programmed cell death, limits on how many times a cell may divide, and immune cells that recognise abnormal ones all act to stop individual cells from doing what a free-living cell would do. The existence of so much dedicated suppression is itself the evidence that the conflict is real and continuous.',
          technical:
            'The comparative evidence is striking: large, long-lived animals should suffer far more cancer than small ones on a simple per-cell-division argument, and do not — Peto’s paradox. Elephants carry roughly twenty copies of the tumour-suppressor gene TP53 against the usual one. The lineage-specific solutions differ, which indicates repeated independent evolution of stronger policing.',
        },
        evidence: 'established',
        references: [referenceId('szathmary-smith-1995-transitions')],
      },
      {
        id: 'slime-mould',
        kind: 'callout',
        tone: 'note',
        title: 'What happens when relatedness is lower',
        text: {
          essential:
            'The social amoeba Dictyostelium lives as separate cells until food runs out, then tens of thousands aggregate into a slug and form a stalk with a spore head on top. About a fifth of the cells become the stalk and die. The rest become spores and survive.',
          detailed:
            'Because these aggregates form from cells that meet rather than from a single cell, they can contain more than one genotype — and cheater strains exist that preferentially end up in the spore head. The system persists anyway, through mechanisms including kin discrimination and pleiotropic links between cheating and other costs. It is the clearest natural demonstration of why clonal development matters so much for stable multicellularity.',
        },
      },
    ],
    furtherReading: [referenceId('szathmary-smith-1995-transitions')],
  },

  {
    id: topicId('specialization-of-cells'),
    slug: 'specialization-of-cells',
    sectionId: LIFE,
    order: 76,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Specialisation of cells',
    subtitle: 'Identical genomes, radically different cells — and the switch that makes it work.',
    summary: {
      essential:
        'A neuron and a skin cell in the same body carry the same DNA. They differ because different genes are switched on. Specialisation is a matter of which parts of a shared instruction set each cell is reading.',
      detailed:
        'This is what makes complex bodies possible. Once cells can specialise, they can do things no single cell could — conduct signals over a metre, contract with force, secrete a hard skeleton — because none of them has to do everything.',
      technical:
        'Differentiation is implemented through transcription-factor networks, chromatin modification and DNA methylation, producing heritable cell-state attractors without changes in sequence. The trade-off is that specialised states are largely irreversible in situ, which is why regeneration capacity varies so widely across lineages.',
    },
    glossaryTerms: [glossaryTermId('eukaryote'), glossaryTermId('adaptation')],
    related: [
      topicId('cooperation-between-cells'),
      topicId('why-complexity-has-costs'),
      topicId('multicellular-life'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A single-celled organism has to do everything itself: find food, digest it, sense its surroundings, move, defend itself, reproduce. Every one of those jobs makes demands on its structure, and the demands conflict. A shape good for swimming is not a shape good for absorbing nutrients. A cell that is busy dividing is not doing much else.',
          detailed:
            'Specialisation dissolves those conflicts by handing each job to a different cell. A muscle cell can fill itself with contractile fibres because it will never need to swim. A neuron can grow a fibre a metre long because something else is feeding it. A red blood cell in a mammal goes so far as to eject its own nucleus to make room for more haemoglobin — a cell that has given up the capacity to make new proteins in exchange for being a better container.',
        },
      },
      {
        id: 'viz-specialisation',
        kind: 'visualization',
        visualizationId: visualizationId('cell-specialisation'),
      },
      {
        id: 'claim-same-genome',
        kind: 'claim',
        statement: {
          essential:
            'Specialised cells in one organism have essentially the same genome. What differs is gene expression, not gene content.',
          detailed:
            'The decisive demonstration was cloning: a nucleus taken from a differentiated adult cell and placed into an egg can direct the development of an entire animal. The information was never lost — it had only been switched off. That result won a Nobel Prize and settled a question that had been genuinely open.',
          technical:
            'The main exceptions are informative rather than contradictory: mammalian red blood cells and lens fibre cells lose their nuclei entirely, and the vertebrate immune system deliberately rearranges its own DNA to generate antibody diversity. These are specific, evolved departures from a general rule that otherwise holds.',
        },
        evidence: 'established',
        references: [referenceId('knoll-2011-eukaryotes')],
      },
      {
        id: 'costs',
        kind: 'prose',
        text: {
          essential:
            'Specialisation buys performance and pays for it in flexibility. A specialised cell usually cannot go back. Damage a plant and it can often regrow the missing part from ordinary tissue; damage a human spinal cord and it does not regrow, because the cells involved cannot revert to a state from which they could rebuild.',
          detailed:
            'The trade-off is visible across the tree of life. Sponges have few cell types and can be pushed through a sieve and reassemble. Plants keep pools of undifferentiated cells at their growing tips and can regenerate whole individuals from fragments. Vertebrates have hundreds of cell types, exceptional performance, and comparatively poor regeneration. Nothing has all three.',
        },
      },
      {
        id: 'crosslink-development',
        kind: 'cross-link',
        topicId: topicId('why-complexity-has-costs'),
        rationale:
          'Specialisation is the clearest case of a general pattern: every gain in complexity is paid for somewhere.',
      },
    ],
    furtherReading: [referenceId('knoll-2011-eukaryotes')],
  },

  {
    id: topicId('why-complexity-has-costs'),
    slug: 'why-complexity-has-costs',
    sectionId: LIFE,
    order: 77,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why complexity has costs',
    subtitle: 'More parts means more energy, more development, more that can go wrong.',
    summary: {
      essential:
        'Complex organisms are expensive to build and to run, take longer to develop, reproduce more slowly, need more resources, and have more components that can fail. These are not incidental drawbacks; they are why complexity is not the default.',
      detailed:
        'The costs compound. A large body requires a circulatory system, which requires regulation, which requires a nervous system, which requires energy, which requires a bigger body. Each solution creates the problem the next solution addresses.',
      technical:
        'Costs appear across levels: metabolic (tissue-specific basal rates), developmental (extended maturation, higher per-offspring investment), genomic (larger mutational target, more regulatory interactions), and ecological (smaller populations, longer generation times, lower evolutionary responsiveness).',
    },
    glossaryTerms: [glossaryTermId('fitness'), glossaryTermId('adaptation')],
    related: [
      topicId('why-evolution-produces-trade-offs'),
      topicId('why-large-brains-are-expensive'),
      topicId('why-evolution-favors-simplicity'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A bacterium can go from birth to division in twenty minutes. A human takes a decade and a half to reach reproductive age and produces a handful of offspring in a lifetime. Between those two numbers sits the entire cost of being complex, and it is enormous.',
          detailed:
            'The reason is that complexity has to be built, and building takes time and energy that could have gone into reproducing. An organism with two hundred cell types must run a developmental programme that puts each of them in the right place at the right time — and every step of that programme is an opportunity for something to go wrong. Most human pregnancies that fail do so early, largely because development is a demanding process with many ways to fail.',
        },
      },
      {
        id: 'viz-costs',
        kind: 'visualization',
        visualizationId: visualizationId('complexity-costs'),
      },
      {
        id: 'claim-metabolic',
        kind: 'claim',
        statement: {
          essential:
            'Complex tissues carry high running costs. In humans, the brain is about 2% of body mass and consumes roughly 20% of resting energy.',
          detailed:
            'Nervous tissue is metabolically among the most expensive material an animal can build, and it must be supplied continuously — a few minutes without oxygen destroys it. Every organism with a large brain has had to find that energy somewhere, and comparative evidence suggests it usually came at the expense of something else.',
          technical:
            'The expensive-tissue hypothesis proposed that hominin brain expansion was funded by reduction of the gut, made possible by a higher-quality diet. Broad comparative tests across mammals have not supported a general gut–brain trade-off, and current accounts favour a combination of increased total energy throughput, reduced locomotor and growth costs, and dietary change. The metabolic expense of brain tissue itself is not disputed.',
        },
        evidence: 'active-research',
        references: [
          referenceId('aiello-wheeler-1995-expensive-tissue'),
          referenceId('herculano-houzel-2009-neurons'),
        ],
      },
      {
        id: 'fragility',
        kind: 'prose',
        text: {
          essential:
            'Complexity also makes an organism more fragile in a specific sense: it has more ways to fail. A bacterium with four thousand genes has a small target for damage. A human with twenty thousand genes and an intricate developmental programme has a large one, and many of its components are single points of failure.',
          detailed:
            'This shows in extinction patterns. When conditions change sharply, large complex organisms with slow reproduction tend to disappear first, while small fast-reproducing ones persist. After the end-Cretaceous impact, no land animal much larger than a domestic cat survived — while bacteria, fungi, insects and small vertebrates came through in numbers. Complexity is not a defence against catastrophe; it is often a liability in one.',
        },
      },
    ],
    furtherReading: [referenceId('mcshea-brandon-2010-ztfel')],
  },

  {
    id: topicId('why-complex-life-is-not-automatically-better'),
    slug: 'why-complex-life-is-not-automatically-better',
    sectionId: LIFE,
    order: 78,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why complex life is not automatically “better”',
    subtitle: 'By every measure biology actually uses, the simple organisms are winning.',
    summary: {
      essential:
        'Better at what? By abundance, by biomass, by range of habitats, by metabolic versatility and by evolutionary durability, prokaryotes outperform every complex lineage. Complexity is a strategy, not a rank.',
      detailed:
        'The impulse to rank organisms comes from us, not from the evidence. Evolution has no metric of quality — only differential survival and reproduction in a particular place at a particular time.',
      technical:
        'Prokaryotes occupy essentially the full range of physicochemical conditions compatible with life, including regimes lethal to all eukaryotes: temperatures above 100 °C, pH below 0, and kilometres of crust. Their metabolic repertoire includes electron-donor–acceptor pairs unavailable to any complex organism.',
    },
    glossaryTerms: [glossaryTermId('prokaryote'), glossaryTermId('fitness')],
    related: [
      topicId('evolution-is-not-a-ladder'),
      topicId('is-evolution-progress'),
      topicId('why-diversity-can-be-more-important-than-complexity'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Ask what makes an organism successful and the answer has to be something biology can actually measure. Number of individuals: bacteria win by an unimaginable margin. Total mass: plants and bacteria dominate; all animals together are under one percent. Range of habitats: bacteria live in boiling acid, in rock kilometres underground, in radiation that would kill anything else. Time in existence: bacteria have been here for nearly four billion years and show no sign of going anywhere.',
          detailed:
            'On which measure, then, is a mammal better? The honest answer is none of them. What a mammal has is a particular set of capabilities — regulated body temperature, sustained activity, learning — that work extremely well in particular circumstances and are useless or fatal in others. Put a mammal in a hydrothermal vent and it is not a superior organism; it is a dead one.',
        },
      },
      {
        id: 'viz-metrics',
        kind: 'visualization',
        visualizationId: visualizationId('success-metrics'),
      },
      {
        id: 'claim-versatility',
        kind: 'claim',
        statement: {
          essential:
            'Prokaryotes are metabolically far more versatile than all complex life combined, and occupy environments no eukaryote can survive.',
          detailed:
            'Eukaryotes essentially do two things for energy: photosynthesis and aerobic respiration, both inherited from captured bacteria. Prokaryotes additionally oxidise sulphur, iron, hydrogen, ammonia, manganese and methane, respire using sulphate, nitrate, carbon dioxide, iron and uranium, and fix atmospheric nitrogen — which no eukaryote can do.',
          technical:
            'The dependence runs one way. Eukaryotic life relies on prokaryotic nitrogen fixation and on prokaryotic contributions to the sulphur and nitrogen cycles. Remove all eukaryotes and the biosphere continues, altered. Remove all prokaryotes and it collapses within a small number of generations.',
        },
        evidence: 'established',
        references: [
          referenceId('falkowski-2008-microbial-engines'),
          referenceId('rothschild-mancinelli-2001-extremophiles'),
        ],
      },
      {
        id: 'better-language',
        kind: 'callout',
        tone: 'misconception',
        title: '“Higher” and “lower” organisms',
        text: {
          essential:
            'These terms are still in circulation and they carry an assumption that biology abandoned long ago. There is no scale on which a chimpanzee is higher than a fern, and no evidence that evolution is moving anything along one.',
          detailed:
            'The language is inherited from the medieval great chain of being, a ranking of creation from lowest to highest with humans near the top — a theological scheme, not a biological one, and one that predates evolutionary thinking entirely. Darwin was aware of the trap and wrote a note to himself in a margin: never use the words higher and lower.',
        },
        references: [referenceId('gould-1996-full-house')],
      },
      {
        id: 'still-remarkable',
        kind: 'prose',
        text: {
          essential:
            'None of this makes complex life uninteresting. An octopus solving a puzzle, a forest moving water into the sky, a brain reconstructing a world from photons — these are genuinely extraordinary things for matter to be doing, and the fact that they are not the point of evolution does not make them less so.',
          detailed:
            'What changes is the frame. They are remarkable because they are rare, hard, and contingent — not because they are what life was heading towards. That is a more interesting reading, and it has the advantage of being what the evidence shows.',
        },
      },
    ],
    furtherReading: [referenceId('gould-1996-full-house')],
  },

  {
    id: topicId('why-evolution-favors-simplicity'),
    slug: 'why-evolution-favors-simplicity',
    sectionId: LIFE,
    order: 79,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why evolution sometimes favours simplicity',
    subtitle: 'Losing what you no longer need is not decline. It is often the winning move.',
    summary: {
      essential:
        'When a structure stops paying for itself, organisms that lose it do better. Parasites shed organs, cave animals shed eyes, symbionts shed genes — and in each case the simplified version out-competes the complex one in that setting.',
      detailed:
        'This is the same process as any other adaptation, running in the direction that happens to pay. It looks like degeneration only if you have already assumed complexity is the goal.',
      technical:
        'Reductive evolution is driven by relaxed selection combined with the cost of maintenance and, in small populations, by drift fixing loss-of-function alleles. Endosymbiont genomes provide the extreme case, with some reduced below 200 kilobases and under 200 protein-coding genes.',
    },
    glossaryTerms: [glossaryTermId('natural-selection'), glossaryTermId('symbiosis')],
    related: [
      topicId('why-evolution-sometimes-makes-organisms-simpler'),
      topicId('why-complexity-has-costs'),
      topicId('parasitism'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A tapeworm has no gut. It lives surrounded by digested food and absorbs it through its skin, so a digestive system would be an organ it paid to build and maintain for no return. Its ancestors had one. Losing it was an improvement.',
          detailed:
            'The pattern repeats wherever the environment removes a need. Fish that live permanently in caves lose their eyes, repeatedly and independently, in populations separated for only a few thousand generations. Some island birds lose flight when there are no predators to escape — flight muscle is among the most expensive tissue a bird carries. Barnacles, which are crustaceans, gave up moving altogether and became cemented filter-feeders in a shell.',
        },
      },
      {
        id: 'viz-reduction',
        kind: 'visualization',
        visualizationId: visualizationId('reductive-evolution'),
      },
      {
        id: 'claim-genome-reduction',
        kind: 'claim',
        statement: {
          essential:
            'Bacteria that live permanently inside hosts undergo dramatic genome reduction, in some cases losing more than 90% of their genes.',
          detailed:
            'Buchnera, which lives inside aphids and supplies them with amino acids, has a genome roughly a seventh the size of its free-living relatives. Some insect endosymbionts have been reduced to a few hundred genes — smaller than some viruses, and far below what any independent organism could manage. They survive because the host supplies what they no longer make.',
          technical:
            'Two forces act together. Relaxed selection on functions the host provides makes loss-of-function mutations effectively neutral, and the small effective population sizes of vertically transmitted symbionts weaken selection against slightly deleterious changes, allowing drift to fix them. The process is largely irreversible: once lost, genes are not recovered.',
        },
        evidence: 'established',
        references: [referenceId('wolfe-li-2003-genome-reduction')],
      },
      {
        id: 'not-decline',
        kind: 'callout',
        tone: 'misconception',
        title: 'Simplification is not devolution',
        text: {
          essential:
            'There is no such thing as evolving backwards. A tapeworm has not regressed to an earlier state; it has become extremely well adapted to a situation its ancestors never occupied. It is a highly derived organism with a specialised set of features — most of them not obvious, such as its ability to survive a host’s immune system.',
          detailed:
            'The word devolution assumes a direction that evolution does not have. What actually happens is that selection removes what no longer pays and elaborates what does, and the result can be simpler or more complex in any given respect depending entirely on circumstances.',
        },
      },
      {
        id: 'ztfel',
        kind: 'prose',
        text: {
          essential:
            'There is a subtlety worth noticing. In the absence of selection, parts tend to become more different from each other rather than simpler — mutations accumulate and duplicated structures drift apart. So relaxed selection can increase a certain kind of complexity even as it removes function.',
          detailed:
            'McShea and Brandon called this the zero-force evolutionary law: in the absence of constraint, variation within an organism increases. It implies that some observed complexity requires no adaptive explanation at all — it is what happens by default when selection stops paying attention — and that selection is often what keeps organisms simple, not what makes them complicated.',
        },
      },
    ],
    furtherReading: [referenceId('mcshea-brandon-2010-ztfel')],
  },

  {
    id: topicId('why-diversity-can-be-more-important-than-complexity'),
    slug: 'why-diversity-can-be-more-important-than-complexity',
    sectionId: LIFE,
    order: 80,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why diversity can matter more than complexity',
    subtitle:
      'What has actually increased over four billion years is not sophistication. It is variety.',
    summary: {
      essential:
        'The clearest long-term trend in the history of life is not that organisms got more complex. It is that there came to be more kinds of them, doing more different things, in more places.',
      detailed:
        'Diversity is also what makes systems durable. A varied community keeps functioning when conditions change, because something in it can handle the new conditions. A sophisticated but uniform one cannot.',
      technical:
        'The insurance and portfolio effects give a mechanistic account: species differ in their environmental responses, so aggregate community properties fluctuate less than individual populations. Empirical support from long-running grassland experiments is strong for productivity and stability, with effect sizes that depend on the function measured.',
    },
    glossaryTerms: [glossaryTermId('biodiversity'), glossaryTermId('ecological-niche')],
    related: [
      topicId('biodiversity'),
      topicId('why-life-became-so-diverse'),
      topicId('ecosystem-stability-and-resilience'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Look at what changed between the Cambrian seas and today. Individual animals are not obviously more sophisticated — a Cambrian arthropod had eyes, limbs, a gut and a nervous system, much as a modern one does. What changed is the number of ways of being alive. There are now beetles that eat only fungus growing in tunnels they dug, birds that navigate by magnetic field, fish that generate electric fields to see in muddy water, plants that trap insects because their soil lacks nitrogen.',
          detailed:
            'Each of those is a solution to a specific problem in a specific place, and each of them is a place that did not previously have anything living in it. That is what the record shows expanding: the number of occupied ways of making a living. Complexity is one of the things that occasionally enables a new one, but it is not what is being accumulated.',
        },
      },
      {
        id: 'viz-diversity',
        kind: 'visualization',
        visualizationId: visualizationId('diversity-vs-complexity'),
      },
      {
        id: 'claim-stability',
        kind: 'claim',
        statement: {
          essential:
            'More diverse communities tend to be more stable and more productive over time than less diverse ones.',
          detailed:
            'The Cedar Creek grassland experiments have run for decades, comparing plots planted with different numbers of species. Diverse plots produce more biomass, and — the more important result — vary less from year to year. During a severe drought, diverse plots lost far less productivity and recovered faster, because they contained species that could cope.',
          technical:
            'The mechanisms are complementarity, where species use resources differently, and the insurance effect, where asynchronous responses damp aggregate fluctuations. Effect sizes vary by ecosystem and by which function is measured, and the relationship can saturate at moderate richness. The direction of the effect is well replicated; extrapolation from plot experiments to whole landscapes remains an active question.',
        },
        evidence: 'established',
        references: [referenceId('tilman-2014-biodiversity')],
      },
      {
        id: 'evolutionary-insurance',
        kind: 'prose',
        text: {
          essential:
            'The same argument holds over evolutionary time. A diverse biosphere has more starting material when conditions change. After each mass extinction it was not the most sophisticated survivors that rebuilt the world — it was whichever lineages happened to have something the new conditions rewarded, and the more lineages there were, the better the odds that something did.',
          detailed:
            'This reframes what a mass extinction destroys. The loss that matters most is not the number of individuals but the number of distinct evolutionary experiments that end. Diversity is the biosphere’s stock of possible futures, and it is not quickly replaced: recovery from major extinctions took millions of years, and what returned was never what had been lost.',
        },
      },
      {
        id: 'crosslink-recovery',
        kind: 'cross-link',
        topicId: topicId('how-life-recovers-after-mass-extinction'),
        rationale:
          'What actually happens when the stock of diversity is destroyed, and how long rebuilding takes.',
      },
    ],
    furtherReading: [referenceId('tilman-2014-biodiversity')],
  },
];
