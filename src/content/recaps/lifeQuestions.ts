/**
 * Recaps for philosophy, the history of life, and the bridge.
 *
 * The philosophy questions here are the ones most likely to have a correct
 * answer of the form "the evidence does not settle this". That is deliberate.
 * The distractors are the confident conclusions people reach in both
 * directions — that science has shown existence meaningless, and that it has
 * shown life was intended — and neither follows from anything in this section.
 */
import type { RecapsByTopic } from '../schema/recap';

export const LIFE_QUESTIONS_RECAPS: RecapsByTopic = {
  'why-did-life-begin': {
    summary: {
      essential:
        'Two different questions hide in this one. Asked as what physical process produced the first living system, it is a hard scientific question with real progress and no settled answer. Asked as for what purpose life arose, it is not a scientific question.',
      detailed:
        'There is a physical account that goes part of the way: where energy flows steadily through matter, organised structures form spontaneously, and life is a structure of that kind sustained by a flow. What it does not supply is the step to heredity — a system that copies information about its own structure — and treating the two as the same result is the most common overstatement in this area.',
    },
    questions: [
      {
        id: 'two-questions',
        prompt: 'Why does the question "why did life begin" cause so much confusion?',
        options: [
          {
            id: 'a',
            text: 'Because the chemistry involved is difficult to explain',
          },
          {
            id: 'b',
            text: 'Because the word why can request a mechanism or a reason, and only the first has a scientific answer here',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because different scientists define life differently',
          },
          {
            id: 'd',
            text: 'Because the evidence from the Hadean is so poor',
          },
        ],
        explanation:
          'Ask why it rains and you want a mechanism; ask why someone lied and you want an intention. Applying the second reading to the origin of life smuggles in an assumption that has not been established.',
      },
      {
        id: 'dissipative',
        prompt:
          'What does the thermodynamic account of self-organisation explain, and what does it not?',
        options: [
          {
            id: 'a',
            text: 'It explains everything about the origin of life',
          },
          {
            id: 'b',
            text: 'It explains nothing relevant, since life violates the second law',
          },
          {
            id: 'c',
            text: 'It explains why organised structures are expected where energy flows, but not the step to heredity',
            correct: true,
          },
          {
            id: 'd',
            text: 'It explains heredity but not metabolism',
          },
        ],
        explanation:
          'Convection cells, hurricanes and flames all organise themselves in driven systems, and they are not exceptions to the second law. Nobody has demonstrated the step from self-organising chemistry to a system that copies information about itself.',
      },
    ],
  },

  'why-did-life-persist': {
    summary: {
      essential:
        'Once life could reproduce and vary, persistence had a mechanism: whatever survived left descendants into an emptied world. It also helped enormously that a large share of living cells are in places almost nothing reaches.',
      detailed:
        'All life on Earth is descended from organisms alive at every point in the past four billion years — the genetic evidence shows a single continuous ancestry with one genetic code and a shared molecular core. But persistence on its own is not evidence that survival was likely: we could only be observing from a planet where it happened, and every planet where it did not is not being written about by anybody.',
    },
    questions: [
      {
        id: 'refuges',
        prompt:
          'Why does an asteroid impact that eliminates every large land animal barely affect a large share of the biosphere?',
        options: [
          {
            id: 'a',
            text: 'Because large animals are a small fraction of species',
          },
          {
            id: 'b',
            text: 'Because much of the biosphere lives in ocean sediment, soil and rock kilometres down, on chemical energy, and never uses sunlight',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because impacts affect only the northern hemisphere',
          },
          {
            id: 'd',
            text: 'Because microbes reproduce fast enough to outpace the damage',
          },
        ],
        explanation:
          'An impact darkens the sky and collapses food chains that depend on sunlight. It does very little to a bacterium two kilometres underground living on hydrogen, which has never used sunlight and does not notice.',
      },
      {
        id: 'selection-effect',
        prompt:
          'What does the fact that life has always come through tell us about how likely that was?',
        options: [
          {
            id: 'a',
            text: 'That something protects life on Earth',
          },
          {
            id: 'b',
            text: 'That life is extremely robust in general',
          },
          {
            id: 'c',
            text: 'Little, because we could only be observing a history in which life persisted — it is a selection effect, unavoidable with a sample of one',
            correct: true,
          },
          {
            id: 'd',
            text: 'That mass extinctions are less severe than they appear',
          },
        ],
        explanation:
          'This does not prove Earth’s survival was luck. It means survival alone is not evidence of anything, because it is the only outcome an observer could find.',
      },
    ],
  },

  'does-evolution-have-a-purpose': {
    summary: {
      essential:
        'Evolution has no known goal, target or foresight. Individual features do have functions — an eye is for seeing — but that kind of purpose is a summary of past differential survival, not an aim.',
      detailed:
        'The science establishes something narrower than what is often claimed on its behalf: that the mechanism does not need a purpose to work, and that the observed pattern of adaptations, dead ends and awkward compromises is what a purposeless mechanism produces. It does not demonstrate that the universe contains no purposes, and people who accept all of the biology still divide over that.',
    },
    questions: [
      {
        id: 'teleonomy2',
        prompt: 'What is the difference between teleonomy and teleology?',
        options: [
          {
            id: 'a',
            text: 'Teleonomy applies to plants and teleology to animals',
          },
          {
            id: 'b',
            text: 'Teleonomy is apparent goal-directedness produced by a program shaped by past selection; teleology posits a future goal as a cause',
            correct: true,
          },
          {
            id: 'c',
            text: 'They are two names for the same thing',
          },
          {
            id: 'd',
            text: 'Teleonomy is a philosophical term and teleology a biological one',
          },
        ],
        explanation:
          'The distinction is which way the arrow of causation points. It is what licenses functional language in biology without making adaptive explanation circular.',
      },
      {
        id: 'limits',
        prompt: 'What does the biology establish about purpose in the universe?',
        options: [
          {
            id: 'a',
            text: 'That there is none',
          },
          {
            id: 'b',
            text: 'That there must be one, given the improbability of life',
          },
          {
            id: 'c',
            text: 'Narrower than either: that the mechanism does not need a purpose to work, and that the evidence pattern is what a purposeless mechanism produces',
            correct: true,
          },
          {
            id: 'd',
            text: 'Nothing at all, since purpose is unmeasurable',
          },
        ],
        explanation:
          'Some read the absence of any need for purpose as evidence there is none; others hold that the mechanism is the means by which a larger purpose operates. Nothing in the evidence settles between them, and pretending otherwise would overstep.',
      },
    ],
  },

  'is-there-a-direction-to-evolution': {
    summary: {
      essential:
        'Some trends are real — maximum body size and maximum complexity have increased, and some ecological roles get refilled after extinctions. None of them is a destination.',
      detailed:
        'The strongest reason for caution is Gould’s drunkard’s walk: life started against a hard lower bound, so random variation extends the distribution in only one direction, and the maximum rises with no bias pushing anything along it. The test is to look at the whole distribution rather than the record-holders, and the mode has stayed on bacteria throughout. Convergence is the serious counter-argument, and it supports a narrower claim than it is often used for.',
    },
    questions: [
      {
        id: 'test',
        prompt: 'How can a driven trend be distinguished from a passive one?',
        options: [
          {
            id: 'a',
            text: 'By measuring the rate of change of the maximum',
          },
          {
            id: 'b',
            text: 'By looking at the whole distribution rather than the record-holders — a driven trend moves the typical value, a passive one only extends the tail',
            correct: true,
          },
          {
            id: 'c',
            text: 'By comparing marine and terrestrial lineages',
          },
          {
            id: 'd',
            text: 'By counting the number of lineages at each complexity level',
          },
        ],
        explanation:
          'The maximum rises in both cases, which is why looking only at record-holders cannot distinguish them. The mode of the real distribution has stayed on bacteria, which is the passive signature.',
      },
      {
        id: 'convergence-claim',
        prompt: 'What does convergence support, and what does it not?',
        options: [
          {
            id: 'a',
            text: 'It supports the claim that evolution is aimed at intelligence',
          },
          {
            id: 'b',
            text: 'It supports the claim that physics and chemistry constrain the options, but not the claim that any particular outcome was likely',
            correct: true,
          },
          {
            id: 'c',
            text: 'It supports neither claim',
          },
          {
            id: 'd',
            text: 'It shows that all lineages eventually reach the same solutions',
          },
        ],
        explanation:
          'Camera eyes work, so things that need to see well arrive at them. Nothing forced anything to need to see well, and the constrained-options claim and the predictable-outcomes claim are different.',
      },
    ],
  },

  'why-is-there-life-instead-of-nothing': {
    summary: {
      essential:
        'Why matter organises itself into living systems has a partial physical answer. Why there is anything at all for that to happen to is a different question, and not one biology can address.',
      detailed:
        'Splitting the question is the useful move. Organisms maintain their own order by increasing disorder elsewhere — order inside paid for by disorder outside, and the books balance, which is the answer Schrödinger gave in 1944. What that does not touch is why there is a universe with energy gradients in the first place, and that is a real boundary rather than a temporary gap to be filled by better instruments.',
    },
    questions: [
      {
        id: 'schrodinger',
        prompt: 'How does an organism maintain its order without violating the second law?',
        options: [
          {
            id: 'a',
            text: 'By generating entropy internally at a lower rate than its surroundings',
          },
          {
            id: 'b',
            text: 'By taking in energy in a usable form and releasing it degraded, so order inside is paid for by disorder outside',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because the second law does not apply to living systems',
          },
          {
            id: 'd',
            text: 'By reducing its total energy content over time',
          },
        ],
        explanation:
          'An organism is not a closed system. Convection cells and flames do the same thing at a simpler level, which is why organisation is expected rather than surprising where a gradient exists.',
      },
      {
        id: 'boundary',
        prompt: 'How should the question of why anything exists at all be treated here?',
        options: [
          {
            id: 'a',
            text: 'As a question physics will answer once quantum gravity is understood',
          },
          {
            id: 'b',
            text: 'As a meaningless question with no content',
          },
          {
            id: 'c',
            text: 'As a real boundary of what this account can address, since every physical answer describes something existing and the question survives it',
            correct: true,
          },
          {
            id: 'd',
            text: 'As already answered by the thermodynamic account of self-organisation',
          },
        ],
        explanation:
          'Physics can push the account back a long way, and each answer describes something existing. Saying so plainly is more honest than gesturing at a future answer.',
      },
    ],
  },

  'why-does-nature-produce-so-much-diversity': {
    summary: {
      essential:
        'Diversity accumulates because populations that stop exchanging genes drift apart, because different ways of making a living are rewarded differently, and because each new kind of organism creates opportunities for others.',
      detailed:
        'Nothing is generating variety on purpose, and diversity is not conserved — it has crashed repeatedly and taken millions of years to rebuild each time. We also do not know how much there is: estimates for eukaryotes cluster around eight to ten million species, of which roughly 1.5 million have been described, and for prokaryotes the uncertainty spans orders of magnitude.',
    },
    questions: [
      {
        id: 'no-aim',
        prompt: 'Is nature aiming for variety?',
        options: [
          {
            id: 'a',
            text: 'Yes — diversity is favoured because it stabilises ecosystems',
          },
          {
            id: 'b',
            text: 'No — diversity accumulates as a by-product of populations separating and opportunities opening, and it has crashed repeatedly',
            correct: true,
          },
          {
            id: 'c',
            text: 'Yes, since more diverse systems produce more offspring',
          },
          {
            id: 'd',
            text: 'The question is unanswerable',
          },
        ],
        explanation:
          'Reading diversity as a goal also gets the practical causality backwards. It is not a reservoir that refills automatically, which is why the present loss of species is a serious matter rather than a fluctuation.',
      },
      {
        id: 'uncertainty',
        prompt: 'Why is the global species count so uncertain?',
        options: [
          {
            id: 'a',
            text: 'Because taxonomists disagree about the definition of a species only for prokaryotes',
          },
          {
            id: 'b',
            text: 'Because most species are small and live in places that are hard to sample, so estimates are extrapolations from sampled groups that disagree substantially',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because no systematic surveys have been attempted',
          },
          {
            id: 'd',
            text: 'Because species are going extinct faster than they can be counted',
          },
        ],
        explanation:
          'Describing a species properly takes a specialist, and most of them are in soil, canopy or deep sea. For prokaryotes the problem is compounded by genuine disagreement about what a bacterial species is when lineages exchange genes horizontally.',
      },
    ],
  },

  'why-did-intelligence-evolve': {
    summary: {
      essential:
        'Nervous systems evolved to control movement. Elaborate ones evolved where the problems an animal faced changed faster than natural selection could track — unpredictable food, complex social groups, novel environments.',
      detailed:
        'Intelligence is one solution to variability and an expensive one. Social life produces a particularly harsh version of the pressure, because the thing being predicted is also adapting to you. The correlation between relative neocortex size and group size is robust within primates and does not generalise cleanly to birds and cetaceans, and current accounts treat social, ecological and developmental factors as jointly contributing rather than competing.',
    },
    questions: [
      {
        id: 'sea-squirt',
        prompt: 'What does the sea squirt illustrate about what brains are for?',
        options: [
          {
            id: 'a',
            text: 'That brains evolve most readily in marine animals',
          },
          {
            id: 'b',
            text: 'That as a larva it swims and has a simple brain to steer with, and when it attaches to a rock it reabsorbs most of that nervous system — brains are for animals with decisions to make',
            correct: true,
          },
          {
            id: 'c',
            text: 'That nervous systems can regenerate after damage',
          },
          {
            id: 'd',
            text: 'That intelligence requires a free-living lifestyle',
          },
        ],
        explanation:
          'It is a joke that makes a serious point. A nervous system is machinery for controlling movement in a changing world, and an animal that has stopped moving no longer needs it.',
      },
      {
        id: 'social-caveat',
        prompt: 'How well does the social brain hypothesis generalise?',
        options: [
          {
            id: 'a',
            text: 'It applies to all animals with nervous systems',
          },
          {
            id: 'b',
            text: 'It has been refuted by comparative studies',
          },
          {
            id: 'c',
            text: 'The correlation is robust within primates but does not generalise cleanly — some large-brained birds and cetaceans do not fit, and results shift with how sociality is measured',
            correct: true,
          },
          {
            id: 'd',
            text: 'It applies only to birds',
          },
        ],
        explanation:
          'Correlation also cannot establish direction. Treat it as a well-supported association within one clade rather than a general law, and note that intelligence has arisen independently in crows, octopuses, dolphins and elephants from very different starting points.',
      },
    ],
  },

  'why-are-we-conscious': {
    summary: {
      essential:
        'We can explain a great deal about how brains process information, direct attention and report on their own states. What is not explained is why any of that is accompanied by subjective experience.',
      detailed:
        'Chalmers called this the hard problem, distinguishing it from the easy problems — discrimination, integration, reportability — which are difficult scientific questions with visible paths to answers. Serious theories exist and are being tested, including through adversarial collaborations in which competing groups agree in advance on falsifying results. None is accepted, and it is not clear what finding out would even look like.',
    },
    questions: [
      {
        id: 'hard-problem',
        prompt: 'What is the hard problem of consciousness?',
        options: [
          {
            id: 'a',
            text: 'Explaining how the brain integrates information from different senses',
          },
          {
            id: 'b',
            text: 'Explaining why some people are more conscious than others',
          },
          {
            id: 'c',
            text: 'Explaining why physical processing is accompanied by subjective experience at all, when a complete functional account seems compatible with there being none',
            correct: true,
          },
          {
            id: 'd',
            text: 'Explaining how anaesthesia removes consciousness',
          },
        ],
        explanation:
          'The easy problems — discrimination, integration, attention, reportability — are tractable functional questions. The hard problem is not obviously that kind of question, which is why identifying the neural correlates does not dissolve it.',
      },
      {
        id: 'status2',
        prompt: 'What is the current scientific status of the hard problem?',
        options: [
          {
            id: 'a',
            text: 'Solved by integrated information theory',
          },
          {
            id: 'b',
            text: 'Solved by global workspace theory',
          },
          {
            id: 'c',
            text: 'Unresolved — several serious theories are being actively tested and none is accepted, and there is disagreement about whether the problem is empirically tractable at all',
            correct: true,
          },
          {
            id: 'd',
            text: 'Abandoned as unscientific',
          },
        ],
        explanation:
          'Positions range from the view that the problem will dissolve once the easy problems are solved, through the view that it requires new physics, to the view that it is beyond human cognitive reach. This is the point in the section where the correct report is that nobody knows.',
      },
    ],
  },

  'does-life-have-an-objective-meaning': {
    summary: {
      essential:
        'Nothing in biology, chemistry or physics identifies a purpose that life is for. That is a statement about what the evidence contains, not a demonstration that no such purpose exists.',
      detailed:
        'Hume noticed the structure: you can pile up facts about how the world is indefinitely, and no statement about what matters follows by logic alone. The gap cuts both ways. "Evolution has no goal, therefore nothing matters" and "life is astonishing, therefore it must have been intended" are the same invalid move in opposite directions, each resting on an unstated and unsupported premise.',
    },
    questions: [
      {
        id: 'is-ought',
        prompt: 'What is the is–ought gap?',
        options: [
          {
            id: 'a',
            text: 'The difference between what scientists observe and what they predict',
          },
          {
            id: 'b',
            text: 'That descriptive claims about what exists do not entail evaluative claims about what matters, by logic alone',
            correct: true,
          },
          {
            id: 'c',
            text: 'The tendency of scientific findings to be misreported',
          },
          {
            id: 'd',
            text: 'The delay between a discovery and its practical application',
          },
        ],
        explanation:
          'Something evaluative has to be supplied from elsewhere before a fact becomes a reason. This is a structural feature of the two kinds of claim, not a temporary limitation of current science.',
      },
      {
        id: 'both-ways',
        prompt: 'Which of these is a valid inference from the science in this section?',
        options: [
          {
            id: 'a',
            text: 'Evolution has no goal, therefore nothing matters',
          },
          {
            id: 'b',
            text: 'Life is astonishing, therefore it must have been intended',
          },
          {
            id: 'c',
            text: 'Neither — both attach a conclusion that the observation does not carry, each resting on an unstated premise',
            correct: true,
          },
          {
            id: 'd',
            text: 'Both, depending on how the evidence is weighted',
          },
        ],
        explanation:
          'The first assumes meaning requires a cosmic goal; the second assumes astonishing things require an intender. Neither premise is supplied by the evidence, and recognising that is what lets the scientific account be complete on its own terms.',
      },
    ],
  },

  'the-great-oxygenation-event': {
    summary: {
      essential:
        'Around 2.4 billion years ago free oxygen began accumulating in the atmosphere. It was produced by photosynthetic bacteria, and it changed the planet’s surface chemistry permanently.',
      detailed:
        'The timing is pinned by sulphur isotopes: a fractionation pattern requiring ultraviolet light in the lower atmosphere, and so no ozone and no oxygen, disappears from the record. Oxygen destroyed atmospheric methane and the loss of that greenhouse gas is a candidate cause of a 300-million-year ice age; ozone began to form; and aerobic respiration became possible, extracting roughly fifteen times more energy from the same food.',
    },
    questions: [
      {
        id: 'methane',
        prompt: 'How might the rise of oxygen have caused an ice age?',
        options: [
          {
            id: 'a',
            text: 'By increasing the planet’s reflectivity directly',
          },
          {
            id: 'b',
            text: 'By destroying atmospheric methane, a powerful greenhouse gas, and so removing much of the warming that kept the planet temperate',
            correct: true,
          },
          {
            id: 'c',
            text: 'By cooling the oceans through dissolved oxygen',
          },
          {
            id: 'd',
            text: 'By reducing volcanic activity',
          },
        ],
        explanation:
          'The Huronian glaciation followed, and lasted perhaps 300 million years. It is a striking case of life changing the planet in a way that nearly destroyed the conditions it depended on.',
      },
      {
        id: 'constraint',
        prompt: 'In what sense did oxygen enable complex life?',
        options: [
          {
            id: 'a',
            text: 'It caused eukaryotic cells to evolve',
          },
          {
            id: 'b',
            text: 'It triggered the Cambrian explosion directly',
          },
          {
            id: 'c',
            text: 'It removed a hard constraint, since large active organisms need far more energy per cell than fermentation can supply — though nearly two billion years passed before animals appeared',
            correct: true,
          },
          {
            id: 'd',
            text: 'It made photosynthesis more efficient',
          },
        ],
        explanation:
          'Enabling and causing are different. The gap of nearly two billion years between the Great Oxidation Event and the first animals is itself the argument that oxygen was necessary and not sufficient.',
      },
    ],
  },

  'the-rise-of-complex-life': {
    summary: {
      essential:
        'Complex cells existed for well over a billion years before anything made of many of them became common. That delay is one of the more interesting facts in the history of life, and its cause is not settled.',
      detailed:
        'The most-discussed candidate is a second rise in atmospheric oxygen towards the end of the Precambrian, coinciding broadly with the first large animals. The case against it being the trigger is that some sponges tolerate remarkably low oxygen, that the geochemical records are noisy, and that the causation may run the other way — animals mixing sediment could have raised oxygen themselves. The Ediacaran forms that appear are genuinely strange and mostly disappear before the Cambrian.',
    },
    questions: [
      {
        id: 'delay',
        prompt: 'What has to be explained about the origin of animals?',
        options: [
          {
            id: 'a',
            text: 'Why complex cells took so long to evolve',
          },
          {
            id: 'b',
            text: 'Why more than a billion years passed between the appearance of complex cells and the appearance of large organisms made of many of them',
            correct: true,
          },
          {
            id: 'c',
            text: 'Why animals appeared before plants',
          },
          {
            id: 'd',
            text: 'Why the Ediacaran biota left no fossils',
          },
        ],
        explanation:
          'Everything needed for large multicellular organisms — a nucleus, mitochondria, internal structure — was in place by about 1.8 billion years ago, and the world stayed microbial to a first approximation for a stretch longer than everything that has happened since.',
      },
      {
        id: 'ediacaran',
        prompt: 'How do the Ediacaran organisms relate to later animals?',
        options: [
          {
            id: 'a',
            text: 'They are the direct ancestors of all animal phyla',
          },
          {
            id: 'b',
            text: 'They are now known to be algae',
          },
          {
            id: 'c',
            text: 'It is contested — some are plausibly early relatives of familiar groups, others have been placed in animals, fungi, lichens or a kingdom of their own, and most disappear before the Cambrian',
            correct: true,
          },
          {
            id: 'd',
            text: 'They were not organisms at all but sedimentary structures',
          },
        ],
        explanation:
          'They are large, quilted, sometimes three-fold symmetric, and many have no mouth or gut. It is a genuinely unsettling episode: a world of large organisms that mostly did not lead anywhere.',
      },
    ],
  },

  'major-transitions-in-evolution': {
    summary: {
      essential:
        'A few events share a common shape: entities that had reproduced independently became parts of a larger entity that reproduced as a unit. Genes into chromosomes, cells into complex cells, cells into bodies, individuals into colonies.',
      detailed:
        'Each raises the same question — why should a lower-level unit give up its own reproduction? — and each required a mechanism suppressing lower-level conflict. Fair meiosis, uniparental organelle inheritance, clonal development and worker policing are the recurring solutions, and where suppression is incomplete the conflict is visible as meiotic drive, selfish mitochondria, cancer and worker-laid eggs.',
    },
    questions: [
      {
        id: 'shared',
        prompt: 'What do the major transitions have in common?',
        options: [
          {
            id: 'a',
            text: 'They all increased organism size',
          },
          {
            id: 'b',
            text: 'They all occurred within the last billion years',
          },
          {
            id: 'c',
            text: 'Entities that had reproduced independently became parts of a larger unit that reproduces as a whole, which required suppressing competition among the parts',
            correct: true,
          },
          {
            id: 'd',
            text: 'They all involved the acquisition of new genes',
          },
        ],
        explanation:
          'The list is usually given chronologically, which makes it look like rungs on a ladder. It is a structural claim rather than a sequence, and most lineages have been through only the first of them.',
      },
      {
        id: 'exceptions',
        prompt: 'Why are meiotic drive, selfish mitochondria and cancer significant?',
        options: [
          {
            id: 'a',
            text: 'They show that the major transitions never fully occurred',
          },
          {
            id: 'b',
            text: 'They are cases where conflict suppression is incomplete, which demonstrates that the conflict is real and continuous rather than resolved once',
            correct: true,
          },
          {
            id: 'c',
            text: 'They are unrelated phenomena that happen to resemble each other',
          },
          {
            id: 'd',
            text: 'They show that lower-level units always win eventually',
          },
        ],
        explanation:
          'These are the exceptions that demonstrate the rule’s necessity. The elaborate machinery suppressing them is itself evidence of how continuous the conflict is.',
      },
    ],
  },

  'life-moves-onto-land': {
    summary: {
      essential:
        'Water holds the body up, keeps it wet, delivers dissolved gases and carries gametes together. On land every one of those services is withdrawn at once, which is why colonisation took so long and happened in stages.',
      detailed:
        'The tetrapod sequence carries the more important lesson. Limbs with digits evolved in animals still living in water — useful for pushing through vegetation and propping the head up to breathe at the surface — and walking came later, using equipment that already existed. Biologists call this exaptation, and it is the answer to the old objection about what use half a wing could be.',
    },
    questions: [
      {
        id: 'limbs-first',
        prompt: 'When did limbs with digits first evolve?',
        options: [
          {
            id: 'a',
            text: 'After vertebrates became fully terrestrial',
          },
          {
            id: 'b',
            text: 'Simultaneously with the first steps onto land',
          },
          {
            id: 'c',
            text: 'While the animals were still living in water, where limbs were useful for pushing through vegetation and propping the head up to breathe',
            correct: true,
          },
          {
            id: 'd',
            text: 'In a single lineage that immediately colonised land',
          },
        ],
        explanation:
          'Acanthostega had true limbs with eight digits and functioning gills. Digit number stabilised at five only after the transition, and the earliest limbed forms were probably not habitually terrestrial.',
      },
      {
        id: 'exaptation',
        prompt: 'What does exaptation mean, and why does it matter?',
        options: [
          {
            id: 'a',
            text: 'That a structure evolved for one purpose and then stopped being used',
          },
          {
            id: 'b',
            text: 'That a structure evolved because it was useful for something else, and was then available when circumstances changed — which answers the objection about what use half a wing could be',
            correct: true,
          },
          {
            id: 'c',
            text: 'That two lineages converged on the same structure',
          },
          {
            id: 'd',
            text: 'That a structure was lost and later re-evolved',
          },
        ],
        explanation:
          'Half a wing is a good gliding surface, or a heat exchanger, or a display. The objection assumes the final function was the target throughout, which is exactly what the fossil record repeatedly shows it was not.',
      },
    ],
  },

  'plants-transform-the-continents': {
    summary: {
      essential:
        'Before land plants there was bare rock, no soil, and rivers that ran in wide braided sheets. Roots split rock into soil, soil held water, and vegetation stabilised banks so rivers began to meander and hold their courses.',
      detailed:
        'The atmospheric effects were as large. Accelerated weathering and massive burial of woody carbon drew carbon dioxide down by roughly an order of magnitude across the Devonian and Carboniferous, cooling the planet into an ice age. Buried carbon is oxygen left in the air, and oxygen may have reached thirty-five percent — the period of dragonflies with seventy-centimetre wingspans.',
    },
    questions: [
      {
        id: 'rivers',
        prompt: 'What changed about rivers when rooted plants spread?',
        options: [
          {
            id: 'a',
            text: 'They became larger and carried more water',
          },
          {
            id: 'b',
            text: 'They changed from wide braided sheets to stable meandering channels, a shift recorded in the sedimentary record in step with the spread of rooted plants',
            correct: true,
          },
          {
            id: 'c',
            text: 'They stopped carrying sediment',
          },
          {
            id: 'd',
            text: 'They became seasonal rather than perennial',
          },
        ],
        explanation:
          'Vegetation stabilises banks. It is one of the clearest demonstrations that life is a geological force, because the change is preserved in the physical structure of the rock.',
      },
      {
        id: 'coal',
        prompt: 'How has the classic explanation for the Carboniferous coal measures been revised?',
        options: [
          {
            id: 'a',
            text: 'The coal is now known to be of marine origin',
          },
          {
            id: 'b',
            text: 'Molecular clock work places the origin of lignin-degrading fungi earlier than the model requires, so tectonic and climatic conditions creating persistently waterlogged basins are now considered a major factor',
            correct: true,
          },
          {
            id: 'c',
            text: 'The coal is now dated to the Devonian rather than the Carboniferous',
          },
          {
            id: 'd',
            text: 'Lignin is now known not to be resistant to decay',
          },
        ],
        explanation:
          'The story that lignin had evolved but nothing could digest it is memorable and only partly right. This is a good example of a textbook explanation being substantially revised without being wholly discarded.',
      },
    ],
  },

  'animals-transform-ecosystems': {
    summary: {
      essential:
        'Animals reorganised the biosphere by moving through it. They churned the seafloor, moved nutrients between places, ate plants and so selected for defences, and created the first food webs of any complexity.',
      detailed:
        'The Precambrian seafloor was covered in thick microbial mats that had been essentially undisturbed for hundreds of millions of years. Burrowing destroyed them, pumped oxygen into sediment and altered how phosphorus and sulphur cycled. Large animals also move nutrients across landscapes — whales upward from depth, salmon from ocean to forest — and modelled estimates suggest lateral nutrient transport fell by more than ninety percent with the loss of Pleistocene megafauna.',
    },
    questions: [
      {
        id: 'substrate',
        prompt: 'What was the Cambrian substrate revolution?',
        options: [
          {
            id: 'a',
            text: 'The appearance of hard mineralised skeletons',
          },
          {
            id: 'b',
            text: 'The replacement of undisturbed layered microbial mats by churned sediment as burrowing animals appeared, altering sediment chemistry and nutrient cycling',
            correct: true,
          },
          {
            id: 'c',
            text: 'The formation of the first coral reefs',
          },
          {
            id: 'd',
            text: 'A change in seawater chemistry that permitted shell formation',
          },
        ],
        explanation:
          'It altered far more than the appearance of the seafloor. A whole class of organisms adapted to firm undisturbed mats disappeared, and a class adapted to soft churned mud appeared.',
      },
      {
        id: 'nutrients',
        prompt: 'How do large animals affect nutrient distribution?',
        options: [
          {
            id: 'a',
            text: 'They concentrate nutrients where they die',
          },
          {
            id: 'b',
            text: 'They move nutrients across landscapes and against gravity — whales feeding at depth and defecating at the surface, salmon carrying ocean nitrogen into forests',
            correct: true,
          },
          {
            id: 'c',
            text: 'They have no measurable effect on nutrient cycling',
          },
          {
            id: 'd',
            text: 'They only affect nutrients in aquatic systems',
          },
        ],
        explanation:
          'These are modelled estimates with substantial uncertainty in their parameters, and should be read as indicating a large effect rather than a precise one. The direction is not in doubt.',
      },
    ],
  },

  'the-age-of-dinosaurs': {
    summary: {
      essential:
        'Dinosaurs dominated land ecosystems for about 160 million years. More time separates Stegosaurus from Tyrannosaurus than separates Tyrannosaurus from us.',
      detailed:
        'They did not out-compete their way to dominance. For their first thirty million years they were a minor group in faunas dominated by crocodile-line archosaurs, which were more numerous and more varied. The end-Triassic extinction removed most of those, and dinosaurs expanded into the space. Dinosaurs are also not extinct: birds are dinosaurs, nested inside the theropods, and there are more bird species than mammal species.',
    },
    questions: [
      {
        id: 'timescale',
        prompt: 'How much time separates Stegosaurus from Tyrannosaurus?',
        options: [
          {
            id: 'a',
            text: 'About 10 million years',
          },
          {
            id: 'b',
            text: 'They were contemporaries',
          },
          {
            id: 'c',
            text: 'About 82 million years — more than separates Tyrannosaurus from the present',
            correct: true,
          },
          {
            id: 'd',
            text: 'About 200 million years',
          },
        ],
        explanation:
          'The popular image of a single dinosaur world compresses an interval longer than the entire age of mammals. Across that span the cast changed completely, several times over.',
      },
      {
        id: 'opportunity',
        prompt: 'How did dinosaurs become dominant?',
        options: [
          {
            id: 'a',
            text: 'By out-competing the crocodile-line archosaurs over thirty million years',
          },
          {
            id: 'b',
            text: 'By surviving the end-Triassic extinction that removed most of their competitors, and expanding into the space left',
            correct: true,
          },
          {
            id: 'c',
            text: 'By evolving warm-bloodedness before their rivals',
          },
          {
            id: 'd',
            text: 'By migrating into empty continents after Pangaea broke up',
          },
        ],
        explanation:
          'Pseudosuchians equalled or exceeded dinosaurs in abundance and disparity right up to the boundary. This is the standard illustration of contingency: the group that inherited the Mesozoic was not the one that looked most successful going into it.',
      },
    ],
  },

  'the-end-cretaceous-extinction': {
    summary: {
      essential:
        'Sixty-six million years ago an asteroid roughly ten kilometres across struck what is now the Yucatán. About three quarters of species disappeared, including every dinosaur except the birds.',
      detailed:
        'The evidence is exceptionally strong: a global iridium layer, shocked quartz, tektites whose thickness increases towards the Caribbean, the crater itself, and radiometric dates matching the boundary. There is a genuine complication in that the Deccan Traps were erupting across the same interval, and the consensus treats the impact as the proximate cause while acknowledging a Deccan contribution. The pattern of survival is more informative than the pattern of loss.',
    },
    questions: [
      {
        id: 'iridium',
        prompt: 'What was the original evidence for an impact?',
        options: [
          {
            id: 'a',
            text: 'The discovery of the Chicxulub crater',
          },
          {
            id: 'b',
            text: 'A worldwide layer of iridium-rich clay at the boundary — iridium is rare in Earth’s crust and common in asteroids',
            correct: true,
          },
          {
            id: 'c',
            text: 'Shocked quartz found in the Deccan Traps',
          },
          {
            id: 'd',
            text: 'The sudden disappearance of dinosaur fossils',
          },
        ],
        explanation:
          'The Alvarezes found the anomaly in 1980 while trying to measure how long the boundary clay took to deposit. The crater was identified in 1991, a decade after the proposal, which is a prediction confirmed rather than an explanation constructed after the fact.',
      },
      {
        id: 'survivors',
        prompt: 'What characterised the survivors on land?',
        options: [
          {
            id: 'a',
            text: 'They were the most advanced species of their groups',
          },
          {
            id: 'b',
            text: 'They were the largest and strongest',
          },
          {
            id: 'c',
            text: 'They were small, could burrow, or could eat detritus rather than living plants — nothing much larger than a domestic cat survived',
            correct: true,
          },
          {
            id: 'd',
            text: 'They lived in the southern hemisphere',
          },
        ],
        explanation:
          'Being small and able to eat almost anything was not a preparation for an asteroid, but it was what mattered on the day. Mammals had existed as long as dinosaurs, mostly small and nocturnal, and that is why the world is now full of their descendants.',
      },
    ],
  },

  'the-recovery-of-life': {
    summary: {
      essential:
        'After every mass extinction diversity has eventually recovered — over millions of years, and with a completely different cast. Recovery is not restoration.',
      detailed:
        'The immediate aftermath is dominated by disaster taxa: generalists with fast reproduction and broad tolerances, unremarkable before and suddenly the only thing around. Recovery to pre-extinction diversity typically takes five to ten million years, considerably longer after the end-Permian. And what fills the emptied roles is something else that happened to be available, carrying its own inherited constraints, which is why extinction is not reversible in any meaningful sense.',
    },
    questions: [
      {
        id: 'different',
        prompt: 'Why is recovery not the same as restoration?',
        options: [
          {
            id: 'a',
            text: 'Because diversity never returns to its previous level',
          },
          {
            id: 'b',
            text: 'Because the lineages that are gone do not come back, and what fills their roles is something else that happened to be available',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because recovery only restores marine diversity',
          },
          {
            id: 'd',
            text: 'Because ecosystems never regain their former productivity',
          },
        ],
        explanation:
          'Brachiopods never regained their Palaeozoic position; bivalves and gastropods took over. Mammals expanded from small nocturnal animals into whales and bats. The curve returns and the composition does not.',
      },
      {
        id: 'timescale2',
        prompt: 'What does the fossil record establish about the cost of recovery?',
        options: [
          {
            id: 'a',
            text: 'That recovery takes a few thousand years',
          },
          {
            id: 'b',
            text: 'That it takes millions of years — a duration with no relationship to human civilisation',
            correct: true,
          },
          {
            id: 'c',
            text: 'That recovery time depends only on the severity of the event',
          },
          {
            id: 'd',
            text: 'That marine and terrestrial systems recover at the same rate',
          },
        ],
        explanation:
          'Different metrics also return on different schedules: taxonomic richness, morphological disparity and ecological complexity, with functional recovery typically lagging raw counts.',
      },
    ],
  },

  'why-extinction-is-not-the-opposite-of-evolution': {
    summary: {
      essential:
        'Extinction is not the failure of the process; it is differential survival operating at the level of species. Over 99% of species that have ever lived are gone, and standing diversity is the balance of origination against extinction rather than an accumulating total.',
      detailed:
        'Extinction also creates the conditions for what comes next. Mammals existed for over a hundred million years before the end-Cretaceous; their expansion required not a new innovation but empty space. The pattern of the last 500 million years is therefore a repeated cycle of clearance and refilling, with each refilling drawing on a different, contingent set of survivors — not a slow accumulation of ever-better organisms.',
    },
    questions: [
      {
        id: 'not-opposite',
        prompt: 'Why is extinction better understood as part of evolution than as its opposite?',
        options: [
          {
            id: 'a',
            text: 'Because extinct species leave descendants under different names',
          },
          {
            id: 'b',
            text: 'Because it is differential survival at the level of species, and standing diversity is the balance of two ongoing processes rather than a total that accumulates',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because extinction rates are low compared with speciation rates',
          },
          {
            id: 'd',
            text: 'Because most extinctions are caused by competition',
          },
        ],
        explanation:
          'If extinction were failure, the process has failed more than 99% of the times it has been tried. Turnover is the normal state, and the average species persists a few million years.',
      },
      {
        id: 'not-licence',
        prompt:
          'Does recognising extinction as part of evolution say anything about whether causing it is acceptable?',
        options: [
          {
            id: 'a',
            text: 'Yes — it shows extinction is natural and therefore acceptable',
          },
          {
            id: 'b',
            text: 'Yes — it shows extinction should be prevented at all costs',
          },
          {
            id: 'c',
            text: 'No — those are different kinds of claim, and the descriptive one does not license the evaluative one',
            correct: true,
          },
          {
            id: 'd',
            text: 'Only for species that would have gone extinct anyway',
          },
        ],
        explanation:
          'What the record does supply is the relevant timescales, and they are the argument: species lost are lost permanently, and ecological reorganisation takes millions of years. Those are facts about consequences; what to do about them is a decision.',
      },
    ],
  },

  'why-intelligence-became-evolutionarily-useful': {
    summary: {
      essential:
        'Genetic adaptation needs generations; learning needs minutes. Where conditions change within a lifetime, an animal that can work things out outperforms one carrying a fixed rule.',
      detailed:
        'But only in a particular band. If conditions never change, an inherited rule is cheaper and gets it right immediately; if they change faster than an animal can learn, what it learned is already wrong. Between those extremes is where paying for a brain returns more than it costs, and that is where flexible cognition is found. What cognition actually buys is prediction — running a situation forward before committing to it.',
    },
    questions: [
      {
        id: 'band',
        prompt: 'When is learning favoured over inherited behaviour?',
        options: [
          {
            id: 'a',
            text: 'Always, since learning is more flexible',
          },
          {
            id: 'b',
            text: 'When the environment is completely stable',
          },
          {
            id: 'c',
            text: 'When the environment changes on a timescale comparable to a lifetime — not when it is stable, and not when it changes faster than an animal can learn',
            correct: true,
          },
          {
            id: 'd',
            text: 'Only in social species',
          },
        ],
        explanation:
          'Both extremes disfavour learning. This band is why relative brain size and behavioural flexibility tend to be higher in species occupying seasonal, patchy or recently colonised environments.',
      },
      {
        id: 'wasp',
        prompt: 'What does the digger wasp’s provisioning behaviour illustrate?',
        options: [
          {
            id: 'a',
            text: 'That insects can learn complex sequences',
          },
          {
            id: 'b',
            text: 'That an inherited program can be efficient and inflexible — interrupted at the wrong point, some wasps restart from the beginning even when the step is already complete',
            correct: true,
          },
          {
            id: 'c',
            text: 'That instinct always outperforms learning',
          },
          {
            id: 'd',
            text: 'That wasps have a rudimentary theory of mind',
          },
        ],
        explanation:
          'The program has no representation of the goal, only of the sequence. It cannot notice that circumstances have changed, because noticing is not something it does.',
      },
    ],
  },

  'why-large-brains-are-expensive': {
    summary: {
      essential:
        'Nervous tissue is among the most costly material an animal can build and maintain. In humans the brain is about 2% of body mass and around 20% of resting energy use, and it cannot be switched off.',
      detailed:
        'The running cost is not the largest one. A brain that learns has to be built partly by experience, so it cannot be finished at birth — and an animal with an unfinished brain cannot look after itself. Long dependency means fewer offspring, spaced further apart, each representing an enormous investment that may be lost. That package explains why species built this way recover so poorly from population crashes.',
    },
    questions: [
      {
        id: 'ion',
        prompt: 'What does most of a neuron’s energy actually go on?',
        options: [
          {
            id: 'a',
            text: 'Producing neurotransmitters',
          },
          {
            id: 'b',
            text: 'Growing new connections',
          },
          {
            id: 'c',
            text: 'Maintaining ion gradients across its membrane, a cost incurred continuously whether or not the neuron is doing anything',
            correct: true,
          },
          {
            id: 'd',
            text: 'Repairing damage from oxidative stress',
          },
        ],
        explanation:
          'That gradient is what a nerve impulse discharges, and it has to be pumped back constantly. It is why brain tissue cannot store fuel, cannot tolerate interruption, and does not reduce its demand at rest.',
      },
      {
        id: 'dependency',
        prompt:
          'Why is long dependency part of the cost of a large brain rather than a side effect?',
        options: [
          {
            id: 'a',
            text: 'Because large-brained animals are physically weaker at birth',
          },
          {
            id: 'b',
            text: 'Because a brain that learns must be built partly by experience, so it cannot be finished at birth — and an unfinished brain cannot run a body',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because large brains take longer to grow physically',
          },
          {
            id: 'd',
            text: 'Because parents must teach offspring to use their brains',
          },
        ],
        explanation:
          'The price is paid in reproduction: fewer offspring, more investment each, and catastrophic loss if one dies. Elephants, whales, great apes and large parrots all show the same package.',
      },
    ],
  },

  'why-some-animals-became-social-problem-solvers': {
    summary: {
      essential:
        'A tree does not change its strategy because you learned to climb it. Another individual does. That single difference is why social life poses a distinctive cognitive problem that escalates rather than being solved once.',
      detailed:
        'The demands are concrete: knowing who is dominant to whom when alliances change it, remembering who groomed you over days, noticing when two others have been spending time together. Chimpanzees and baboons demonstrably track this about individuals they are not currently interacting with. It has arisen independently in ravens, dolphins and elephants — lineages with brains organised on entirely different plans, which suggests the pressure is real and reachable by more than one route.',
    },
    questions: [
      {
        id: 'escalate',
        prompt: 'What makes social problems different from physical ones?',
        options: [
          {
            id: 'a',
            text: 'They involve more variables',
          },
          {
            id: 'b',
            text: 'The thing being predicted is also adapting to you, so every improvement on one side raises the difficulty on the other',
            correct: true,
          },
          {
            id: 'c',
            text: 'They require language to solve',
          },
          {
            id: 'd',
            text: 'They occur more frequently',
          },
        ],
        explanation:
          'This is why the difficulty escalates rather than being learned once. A physical environment is difficult but indifferent; other group members are neither.',
      },
      {
        id: 'caution',
        prompt: 'How should claims about animal deception or theory of mind be treated?',
        options: [
          {
            id: 'a',
            text: 'As established, since the behaviours are well documented',
          },
          {
            id: 'b',
            text: 'As disproved by controlled experiments',
          },
          {
            id: 'c',
            text: 'With care — the behaviours are real, but what is happening inside is much less secure, and behaviour that looks like deception can often be produced by simpler learned associations',
            correct: true,
          },
          {
            id: 'd',
            text: 'As untestable in principle',
          },
        ],
        explanation:
          'Whether any non-human animal represents another’s beliefs has been argued for decades with results that shift as designs improve. Confident claims in either direction run ahead of the evidence.',
      },
    ],
  },

  'why-humans-are-not-evolutions-final-destination': {
    summary: {
      essential:
        'Nothing in evolutionary theory identifies an endpoint, and humans are not one. We are one surviving lineage among millions, recently arrived, and still changing.',
      detailed:
        'Anatomically modern humans have existed for roughly 300,000 years; sharks in some form for over 400 million. Human populations have continued to evolve throughout recorded history — lactase persistence, high-altitude adaptation and malaria resistance all spread within the last ten thousand years. Saying we are not the goal is not saying we are unremarkable: unusual is a claim about frequency and is well supported, while intended is a claim about purpose and is not.',
    },
    questions: [
      {
        id: 'recent',
        prompt: 'How long have anatomically modern humans existed, in context?',
        options: [
          {
            id: 'a',
            text: 'About 2 million years, comparable to most mammal species',
          },
          {
            id: 'b',
            text: 'About 300,000 years, against over 400 million for sharks and one to two million for the average mammal species',
            correct: true,
          },
          {
            id: 'c',
            text: 'About 10,000 years, since the beginning of agriculture',
          },
          {
            id: 'd',
            text: 'About 50 million years, since the origin of primates',
          },
        ],
        explanation:
          'Being newly arrived is not a criticism, but it should discourage conclusions about endpoints. No species has ever had information about its own future duration.',
      },
      {
        id: 'diminish',
        prompt: 'Does saying humans are not evolution’s goal diminish what humans have done?',
        options: [
          {
            id: 'a',
            text: 'Yes — it implies human achievements are accidental and therefore worthless',
          },
          {
            id: 'b',
            text: 'No — a lineage that produces mathematics, music and radio telescopes is doing something no other lineage on this planet has done; what is corrected is the direction of the claim, not its content',
            correct: true,
          },
          {
            id: 'c',
            text: 'Yes, unless one adopts a religious framework',
          },
          {
            id: 'd',
            text: 'The question has no scientific content',
          },
        ],
        explanation:
          'Unusual is a statement about frequency and is well supported. Intended is a statement about purpose and is not. Holding the first without sliding into the second is the whole of what is being asked.',
      },
    ],
  },

  'from-life-to-a-species-capable-of-asking-questions': {
    summary: {
      essential:
        'The Universe produced stars. Stars produced elements. Earth assembled those elements into chemistry. Chemistry eventually produced life. Life began evolving. And one branch eventually became capable of asking where all of this came from.',
      detailed:
        'Every link rests on a different kind of evidence, and they do not all rest equally firmly: how chemistry became life is genuinely unsolved, and the origin of a questioning species is inferred from fragmentary evidence. What is solid is unusually solid — that all life shares an ancestor, that natural selection produces adaptation without design, and that the elements in your body were made in stars — and all of it was unknown two centuries ago.',
    },
    questions: [
      {
        id: 'not-destination',
        prompt: 'Does a chain of events ending with us show that it was heading for us?',
        options: [
          {
            id: 'a',
            text: 'Yes — the chain is continuous and terminates in humans',
          },
          {
            id: 'b',
            text: 'No — every effect has a chain of causes behind it, and being able to trace ours says nothing about whether it was aimed',
            correct: true,
          },
          {
            id: 'c',
            text: 'Yes, given how improbable each step was',
          },
          {
            id: 'd',
            text: 'Only if the chain contains no chance events',
          },
        ],
        explanation:
          'Written the other way round the same facts sound entirely different: the Universe produced stars, and among the outcomes on one small planet was a species that reconstructs its own history. Which version feels natural is a fact about narrative preference.',
      },
      {
        id: 'inventory',
        prompt: 'Which of these remains genuinely unsolved?',
        options: [
          {
            id: 'a',
            text: 'Whether all life on Earth shares a common ancestor',
          },
          {
            id: 'b',
            text: 'Whether natural selection produces adaptation',
          },
          {
            id: 'c',
            text: 'How chemistry became life, whether life exists anywhere else, and why physical processes are accompanied by experience',
            correct: true,
          },
          {
            id: 'd',
            text: 'Whether the elements in your body were made in stars',
          },
        ],
        explanation:
          'Marking the gaps honestly is what keeps a summary from becoming a smooth arc it has not earned. The first, second and fourth are among the best-established results in science.',
      },
    ],
  },
};
