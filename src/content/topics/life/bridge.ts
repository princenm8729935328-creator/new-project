/**
 * Origin & Evolution of Life — the bridge towards human evolution.
 *
 * This group deliberately stops short. It is about intelligence as a biological
 * phenomenon — what it costs, when it pays, which lineages arrived at it — and
 * not about human origins, which belong to their own section. The constraint
 * shapes the writing: every example is drawn from crows, octopuses, dolphins,
 * elephants and primates in general, and where humans appear it is as one
 * comparison point among several.
 *
 * The final topic is the handover. It has to do two things at once: state the
 * chain from the first moment to a species that can ask about it, and refuse
 * the reading that the chain was aimed at us.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const LIFE = sectionId('life');
const REVIEWED = '2026-09-10';

export const LIFE_BRIDGE_TOPICS: readonly Topic[] = [
  {
    id: topicId('why-intelligence-became-evolutionarily-useful'),
    slug: 'why-intelligence-became-evolutionarily-useful',
    sectionId: LIFE,
    order: 100,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why intelligence became evolutionarily useful',
    subtitle:
      'When the world changes faster than genes can, it pays to work things out within a lifetime.',
    summary: {
      essential:
        'Genetic adaptation is slow: it needs generations. Learning is fast: it needs minutes. Where conditions change within a lifetime, an animal that can learn outperforms one carrying a fixed rule.',
      detailed:
        'This is the core of why cognition pays at all. It is a mechanism for tracking change on a timescale evolution cannot reach, and its value depends entirely on how variable the environment is.',
      technical:
        'Formal models of learning versus innate behaviour predict that learning is favoured when environmental variation occurs on timescales comparable to a generation, and disfavoured when variation is either very fast, so learning cannot keep up, or very slow, so an innate rule suffices.',
    },
    glossaryTerms: [glossaryTermId('adaptation'), glossaryTermId('natural-selection')],
    related: [
      topicId('why-did-intelligence-evolve'),
      topicId('why-large-brains-are-expensive'),
      topicId('why-some-animals-became-social-problem-solvers'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A digger wasp performs a long, precise sequence to provision its nest, and it does not have to be taught any of it. That is an inherited program, refined over an enormous number of generations, and it is extremely efficient — no learning period, no mistakes, no brain tissue to feed. As long as the world stays the same shape, it is the better solution.',
          detailed:
            'The weakness shows when the world moves. Interrupt the sequence at the wrong point and some wasps will restart it from the beginning, repeatedly, even when the step has already been completed. The program has no representation of the goal, only of the sequence. It cannot notice that circumstances have changed, because noticing is not something it does.',
        },
      },
      {
        id: 'viz-learning',
        kind: 'visualization',
        visualizationId: visualizationId('learning-vs-instinct'),
      },
      {
        id: 'claim-variability',
        kind: 'claim',
        statement: {
          essential:
            'Learning is favoured when the environment changes on a timescale close to an organism’s lifetime — not when it is stable, and not when it is chaotic.',
          detailed:
            'If conditions never change, an inherited rule is cheaper and gets it right immediately. If conditions change faster than an animal can learn, what it learned is already wrong. Between those extremes is the band where paying for a brain returns more than it costs, and that is where flexible cognition is found.',
          technical:
            'The prediction is supported comparatively: relative brain size and behavioural flexibility tend to be higher in species occupying seasonal, patchy or recently colonised environments. Birds successfully establishing populations outside their native range tend to have larger relative brains than those that fail, which is consistent though not decisive, since range expansion correlates with several other traits.',
        },
        evidence: 'active-research',
        references: [
          referenceId('roth-dicke-2005-brains'),
          referenceId('dunbar-shultz-2007-social-brain'),
        ],
      },
      {
        id: 'what-it-buys',
        kind: 'prose',
        text: {
          essential:
            'What cognition actually buys is prediction. A crow that has watched a person hide food can retrieve it later; it has built an internal model of a situation it cannot currently see and used it to act. That capacity — running a situation forward before committing to it — is expensive, and it is the reason it is worth the expense.',
          detailed:
            'It also compounds when animals can learn from each other. A behaviour one individual works out can spread through a population within a season and persist across generations, without any genetic change at all. Japanese macaques washing sweet potatoes, and the different tool-manufacturing traditions in separate New Caledonian crow populations, are cases where information is being inherited outside the genome.',
        },
      },
      {
        id: 'not-superior',
        kind: 'callout',
        tone: 'misconception',
        title: 'Useful in context, not in general',
        text: {
          essential:
            'Intelligence is an adaptation to particular circumstances, in the same way that a thick coat is. It is not a general-purpose improvement, and the vast majority of successful species have very little of it and are not disadvantaged.',
          detailed:
            'The comparison that makes this concrete: there are more species of beetle than of all vertebrates combined, and beetles have managed it without anything resembling flexible problem-solving. If cognition were generally advantageous rather than situationally advantageous, the distribution of it across life would look completely different.',
        },
      },
    ],
    furtherReading: [referenceId('roth-dicke-2005-brains')],
  },

  {
    id: topicId('why-large-brains-are-expensive'),
    slug: 'why-large-brains-are-expensive',
    sectionId: LIFE,
    order: 101,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why large brains are expensive',
    subtitle:
      'Two percent of the body, twenty percent of the energy — and that is only the running cost.',
    summary: {
      essential:
        'Nervous tissue is among the most metabolically costly material an animal can build and maintain. It also has to be supplied constantly, cannot be switched off, and requires a long, dependent childhood to develop.',
      detailed:
        'These costs are the reason large brains are rare. They are only worth paying where the environment reliably returns more than they cost, and most environments do not.',
      technical:
        'Neurons are expensive largely because of the cost of maintaining ion gradients across their membranes. Cost scales with neuron number and with connectivity, and the human figure of ~20% of basal metabolic rate for ~2% of body mass is high but not unique among primates.',
    },
    glossaryTerms: [glossaryTermId('adaptation'), glossaryTermId('fitness')],
    related: [
      topicId('why-complexity-has-costs'),
      topicId('why-intelligence-became-evolutionarily-useful'),
      topicId('why-evolution-produces-trade-offs'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A neuron spends most of its energy on something that sounds trivial: keeping sodium and potassium on the correct sides of its membrane. That gradient is what a nerve impulse discharges, and it has to be pumped back continuously, at rest, whether or not the neuron is doing anything. A brain is therefore not an organ you can idle.',
          detailed:
            'The consequences are unforgiving. Brain tissue cannot store fuel and cannot tolerate interruption — a few minutes without oxygen destroys it, which is why unconsciousness follows so quickly from a blocked artery. And the demand does not fall when an animal is resting. It is a fixed cost, incurred every hour of every day of an animal’s life.',
        },
      },
      {
        id: 'viz-brain-cost',
        kind: 'visualization',
        visualizationId: visualizationId('brain-energy-budget'),
      },
      {
        id: 'claim-cost',
        kind: 'claim',
        statement: {
          essential:
            'In humans, the brain is roughly 2% of body mass and accounts for around 20% of resting energy use. In a newborn the figure approaches 60%.',
          detailed:
            'Neuron number scales the cost fairly directly, and the human brain has on the order of 86 billion neurons. Comparative work suggests the human brain is what a primate brain of its size should cost — the striking thing is not an unusual efficiency but that a primate that size supports so many neurons at all.',
          technical:
            'The energetic problem of how that was funded is not settled. The expensive-tissue hypothesis proposed a trade-off against gut size, and broad comparative tests across mammals have not supported it. Current accounts emphasise increased total energy throughput, higher-quality diets including cooked food, and reduced costs elsewhere including slower growth and reduced locomotor expense.',
        },
        evidence: 'active-research',
        references: [
          referenceId('herculano-houzel-2009-neurons'),
          referenceId('aiello-wheeler-1995-expensive-tissue'),
        ],
      },
      {
        id: 'developmental',
        kind: 'prose',
        text: {
          essential:
            'The running cost is not the largest one. A brain that learns has to be built partly by experience, which means it cannot be finished at birth — and an animal with an unfinished brain cannot look after itself. Long dependency is not a side effect of large brains; it is part of the price.',
          detailed:
            'That price is paid in reproduction. An animal that needs years of care produces fewer offspring, spaced further apart, each representing an enormous investment that may be lost. Elephants, whales, great apes and large parrots all show the same package: big brain, slow development, few offspring, long life, extensive care. It is a coherent strategy and a fragile one, which is why species built this way recover so poorly from population crashes.',
        },
      },
      {
        id: 'why-rare',
        kind: 'prose',
        text: {
          essential:
            'Set the costs against the benefits and the rarity of large brains stops being puzzling. Most animals live in circumstances where an inherited behavioural repertoire works well enough, and where the energy a brain would consume is better spent on growth, on reproduction, or on not starving during a lean season.',
          detailed:
            'This is why the question is not why some animals became intelligent but why so few did — and why the answer is about specific ecological circumstances rather than about a general advantage. Intelligence is a strategy with a high fixed cost and a variable return, and evolution takes that bet only where the return is reliable.',
        },
      },
    ],
    furtherReading: [referenceId('herculano-houzel-2009-neurons')],
  },

  {
    id: topicId('why-some-animals-became-social-problem-solvers'),
    slug: 'why-some-animals-became-social-problem-solvers',
    sectionId: LIFE,
    order: 102,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why some animals became social problem-solvers',
    subtitle:
      'The hardest environment to predict is one made of other individuals who are also predicting you.',
    summary: {
      essential:
        'Living in a stable group creates a distinctive cognitive problem. Physical environments are difficult but indifferent; other group members are adapting to you as you adapt to them, and the difficulty escalates.',
      detailed:
        'Groups that stay together long enough for individuals to recognise each other and remember past interactions generate demands that a solitary animal never faces — tracking relationships, predicting behaviour, and managing reputation.',
      technical:
        'The social intelligence hypothesis is supported by correlations between relative neocortex size and group size in primates, but does not generalise cleanly across all clades, and alternative or complementary accounts emphasise ecological and developmental factors. Current treatments regard these as jointly contributing.',
    },
    glossaryTerms: [
      glossaryTermId('coevolution'),
      glossaryTermId('symbiosis'),
      glossaryTermId('adaptation'),
    ],
    related: [
      topicId('why-did-intelligence-evolve'),
      topicId('cooperation'),
      topicId('the-evolutionary-arms-race'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A tree does not change its strategy because you learned to climb it. Another monkey does. That single difference is why social life is a distinctive cognitive problem: the thing you are trying to predict is also trying to predict you, and every improvement on one side raises the difficulty on the other.',
          detailed:
            'The demands are concrete. In a stable group you need to know who is dominant to whom, and dominance is not a simple ranking because alliances change it. You need to remember who groomed you and who did not, over intervals of days. You need to notice when two others have been spending time together, because that changes what will happen if you challenge one of them. Chimpanzees and baboons demonstrably track this kind of information about individuals they are not currently interacting with.',
        },
      },
      {
        id: 'viz-social',
        kind: 'visualization',
        visualizationId: visualizationId('social-complexity'),
      },
      {
        id: 'claim-group-size',
        kind: 'claim',
        statement: {
          essential:
            'Across primates, species living in larger social groups tend to have larger neocortices relative to body size.',
          detailed:
            'This correlation is the empirical core of the social intelligence hypothesis. The proposed reading is that the number of relationships to track grows faster than the number of individuals — with fifty group members there are over a thousand pairwise relationships, each of which may matter.',
          technical:
            'The relationship holds within primates and is weaker or absent elsewhere. Some large-brained birds and cetaceans do not fit the pattern, results are sensitive to how sociality is measured and to the phylogenetic correction used, and the direction of causation is not established by correlation alone. Treat it as a well-supported association within one clade rather than a general law.',
        },
        evidence: 'active-research',
        references: [referenceId('dunbar-shultz-2007-social-brain')],
      },
      {
        id: 'other-lineages',
        kind: 'prose',
        text: {
          essential:
            'Primates are not the only case, and the others are what make the pattern interesting. Ravens and crows form long-term partnerships and appear to keep track of who has cheated them. Dolphins form alliances, and alliances between alliances. Elephants remember individuals across decades and respond differently to the calls of familiar and unfamiliar animals.',
          detailed:
            'These lineages are separated by hundreds of millions of years and have brains organised on entirely different plans. A bird has no neocortex at all; its equivalent capacities are supported by a differently structured forebrain. Arriving at comparable social cognition from such different starting points is a strong indication that the pressure is real and the solution is reachable by more than one route.',
        },
      },
      {
        id: 'caution-anthropomorphism',
        kind: 'callout',
        tone: 'caution',
        title: 'Careful with the inner life',
        text: {
          essential:
            'Describing an animal as deceiving, or as knowing what another believes, imports a great deal. Some of these behaviours are well documented; the interpretations of what is happening inside are much less secure, and the field has repeatedly revised them.',
          detailed:
            'Whether any non-human animal represents another’s beliefs — theory of mind — has been argued for decades with results that shift as experimental designs improve. A behaviour that looks like deception can often be produced by simpler learned associations. The honest position is that the behaviour is real, the underlying representation is uncertain, and confident claims in either direction are running ahead of the evidence.',
        },
      },
    ],
    furtherReading: [referenceId('dunbar-shultz-2007-social-brain')],
  },

  {
    id: topicId('why-humans-are-not-evolutions-final-destination'),
    slug: 'why-humans-are-not-evolutions-final-destination',
    sectionId: LIFE,
    order: 103,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why humans are not evolution’s final destination',
    subtitle: 'We are a recent twig on one branch, and evolution did not stop when we arrived.',
    summary: {
      essential:
        'Nothing in evolutionary theory identifies an endpoint, and humans are not one. We are one surviving lineage among millions, recently arrived, and still changing.',
      detailed:
        'The intuition that we are the culmination comes from being the ones doing the looking. Every species could construct the same story with itself at the end of it, because every species is at the end of its own lineage.',
      technical:
        'Human populations show clear evidence of ongoing selection within the last 10,000 years, including lactase persistence, high-altitude adaptation and multiple disease-resistance loci. There is no biological sense in which a lineage can be final short of extinction.',
    },
    glossaryTerms: [
      glossaryTermId('natural-selection'),
      glossaryTermId('common-ancestry'),
      glossaryTermId('adaptation'),
    ],
    related: [
      topicId('are-humans-the-goal-of-evolution'),
      topicId('evolution-is-not-a-ladder'),
      topicId('why-intelligence-is-not-evolutions-inevitable-destination'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Draw the tree of life properly and the shape of the mistake becomes obvious. Humans are a twig. So is every other living species — that is what being alive now means, and there are millions of them, all equally at the tip of their own branch. There is no sense in which one twig is the end of the tree.',
          detailed:
            'The illusion comes from how the story is usually told: a line from bacteria to fish to reptile to mammal to ape to human, each apparently leading to the next. But that line is drawn backwards, from us, by selecting at every branch point the ancestor that happens to lead our way and discarding everything else. Draw the same line to a hummingbird and it is equally continuous, equally long, and equally arbitrary.',
        },
      },
      {
        id: 'viz-twig',
        kind: 'visualization',
        visualizationId: visualizationId('humans-on-the-tree'),
      },
      {
        id: 'claim-still-evolving',
        kind: 'claim',
        statement: {
          essential:
            'Human populations have continued to evolve throughout recorded history and are evolving now.',
          detailed:
            'The clearest examples are recent and well characterised. The ability to digest milk into adulthood spread through several populations within the last ten thousand years, independently, following dairying. Tibetan and Andean populations carry different genetic adaptations to low oxygen at altitude. Resistance alleles for malaria have risen to high frequency in regions where the disease is endemic, at a real cost in other conditions.',
          technical:
            'Genome-wide scans identify hundreds of loci with signatures of recent positive selection, though the strength of individual signals varies and some are contested. Selection has not stopped: it operates on whatever varies in survival and reproduction, and medicine and culture change what that is rather than removing it.',
        },
        evidence: 'established',
        references: [referenceId('hug-2016-tree-of-life'), referenceId('lenski-2015-ltee')],
      },
      {
        id: 'recent',
        kind: 'prose',
        text: {
          essential:
            'The other thing worth registering is how recent we are. Anatomically modern humans have existed for roughly 300,000 years. Sharks have existed in some form for over 400 million. Horseshoe crabs, cyanobacteria and many groups of insects have durations that make our entire species look like an event rather than a lineage.',
          detailed:
            'Being newly arrived is not a criticism, but it should discourage conclusions about endpoints. The average mammal species persists for perhaps one to two million years. We are at a small fraction of that, and no species has ever had information about its own future duration.',
        },
      },
      {
        id: 'still-remarkable',
        kind: 'callout',
        tone: 'note',
        title: 'Not a diminishment',
        text: {
          essential:
            'Saying humans are not the goal is not saying humans are unremarkable. A lineage that produces mathematics, music and radio telescopes is doing something no other lineage on this planet has done, and that is worth noticing.',
          detailed:
            'The correction is only to the direction of the claim. Unusual is a statement about frequency and is well supported. Intended is a statement about purpose and is not. Holding the first without sliding into the second is the whole of what is being asked here.',
        },
      },
    ],
    furtherReading: [referenceId('gould-1996-full-house')],
  },

  {
    id: topicId('from-life-to-a-species-capable-of-asking-questions'),
    slug: 'from-life-to-a-species-capable-of-asking-questions',
    sectionId: LIFE,
    order: 104,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'From life to a species capable of asking questions',
    subtitle: 'Where this section ends and the next one begins.',
    summary: {
      essential:
        'This section has followed a chain: a universe that made elements, a planet that assembled them into chemistry, chemistry that became self-copying, and four billion years of variation and selection that eventually produced organisms able to reconstruct the whole sequence.',
      detailed:
        'The chain is real and each link is evidenced. What the chain does not establish is that it was aimed at its current end, and reading it that way is the one conclusion this section has consistently declined to draw.',
      technical:
        'Every step in this account carries different evidential weight, from established (stellar nucleosynthesis, common ancestry, natural selection) through inference (LUCA’s properties, the eukaryotic merger) to genuinely open (the origin of life itself, the basis of consciousness). Summarising them as a single narrative should not flatten those differences.',
    },
    glossaryTerms: [
      glossaryTermId('common-ancestry'),
      glossaryTermId('luca'),
      glossaryTermId('natural-selection'),
    ],
    related: [
      topicId('why-humans-are-not-evolutions-final-destination'),
      topicId('does-life-have-an-objective-meaning'),
      topicId('common-ancestry-and-the-tree-of-life'),
    ],
    blocks: [
      {
        id: 'chain',
        kind: 'prose',
        text: {
          essential:
            'The Universe produced stars. Stars produced elements. Earth assembled those elements into chemistry. Chemistry eventually produced life. Life began evolving. And one branch eventually became capable of asking where all of this came from.',
          detailed:
            'Every link in that chain has been the subject of a topic in this atlas, and every link rests on a different kind of evidence — spectra from distant stars, isotope ratios in ancient rock, the shared genetic code of everything alive, the fossil record, and experiments that have run for decades. The chain is not a story that has been assembled to sound good. It is what a great many independent lines of investigation converge on.',
        },
      },
      {
        id: 'viz-chain',
        kind: 'visualization',
        visualizationId: visualizationId('cosmic-chain'),
      },
      {
        id: 'what-it-does-not-mean',
        kind: 'callout',
        tone: 'caution',
        title: 'What that sentence does not establish',
        text: {
          essential:
            'A chain of events that ends with us is not evidence that it was heading for us. Every effect has a chain of causes behind it, and the fact that we can trace ours says nothing about whether it was aimed.',
          detailed:
            'The sentence above is a summary of a sequence, not a demonstration of a purpose. Written the other way round it would be equally true and would sound entirely different: the Universe produced stars, and among the outcomes on one small planet was a species that reconstructs its own history. Same facts, no destination. Which version feels more natural is a fact about human narrative preference rather than about the evidence.',
        },
      },
      {
        id: 'honest-inventory',
        kind: 'prose',
        text: {
          essential:
            'It is worth being explicit about what is still missing, because a summary tends to smooth it over. We do not know how chemistry became life. We do not know whether life exists anywhere else. We do not know why physical processes are accompanied by experience. Each of those is a genuine hole in the account, not a detail awaiting tidying.',
          detailed:
            'What we do have is unusually solid for questions of this scale: that all life on Earth shares an ancestor, that natural selection produces adaptation without design, that the planet and its life have been changing each other for four billion years, and that the elements in your body were made in stars. Those are not provisional. They are among the best-established results in science, and they were all unknown two centuries ago.',
        },
      },
      {
        id: 'handover',
        kind: 'prose',
        text: {
          essential:
            'The next section takes up the branch this one has deliberately left alone: how one lineage of African apes came to have the capacities this atlas has been describing from the outside. It is a smaller story in time — the last few million years against four billion — and it is told with the same rules. What is established will be marked as established. What is inferred from fragmentary evidence will be marked as inferred. And where the evidence runs out, the section will say so rather than filling the gap.',
        },
      },
    ],
    furtherReading: [referenceId('hug-2016-tree-of-life')],
  },
];
