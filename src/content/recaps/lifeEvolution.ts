/**
 * Recaps for evolution.
 *
 * Almost every wrong option in this file is a sentence a reader has heard
 * somewhere and half-believed: that individuals evolve, that nature selects,
 * that evolution is a ladder with us on top, that survival of the fittest means
 * the strongest, that simplification is going backwards. The distractors are
 * built from those, deliberately, because getting one wrong and then reading
 * why does more than getting it right by luck.
 */
import type { RecapsByTopic } from '../schema/recap';

export const LIFE_EVOLUTION_RECAPS: RecapsByTopic = {
  'what-is-evolution': {
    summary: {
      essential:
        'Evolution is change in the heritable characteristics of a population across generations. It is a property of populations, not of individuals — no organism evolves during its lifetime.',
      detailed:
        'That distinction is the one that has to be secure before anything else makes sense. A drought does not make finches grow deeper beaks; birds that already had deeper beaks survive and have offspring, and the average shifts because the membership changed. Peter and Rosemary Grant measured exactly that on Daphne Major, and watched it reverse when the rains returned and small seeds came back.',
    },
    questions: [
      {
        id: 'level',
        prompt: 'At what level does evolution occur?',
        options: [
          {
            id: 'a',
            text: 'In individual organisms, as they adapt to their surroundings during life',
          },
          {
            id: 'b',
            text: 'In populations, as the frequencies of heritable characteristics change across generations',
            correct: true,
          },
          {
            id: 'c',
            text: 'In ecosystems, as species replace one another',
          },
          {
            id: 'd',
            text: 'In genes, independently of the organisms carrying them',
          },
        ],
        explanation:
          'An individual can acclimatise but cannot evolve. What changes across generations is the mix of variants present in a population, which is why evolution is measured as a change in frequency.',
      },
      {
        id: 'finches',
        prompt: 'What did the Grants observe in Galápagos finches during a drought?',
        options: [
          {
            id: 'a',
            text: 'Individual birds grew deeper beaks in response to hard seeds',
          },
          {
            id: 'b',
            text: 'Birds that already had deeper beaks survived better, so the population average shifted — and shifted back when small seeds returned',
            correct: true,
          },
          {
            id: 'c',
            text: 'A new species of finch appeared within one generation',
          },
          {
            id: 'd',
            text: 'Beak depth was unaffected by the drought',
          },
        ],
        explanation:
          'No bird’s beak changed. The reversal when conditions changed back is the part that makes it a clean demonstration: selection tracks the current environment and has no memory or direction of its own.',
      },
    ],
  },

  'variation-heredity-and-selection': {
    summary: {
      essential:
        'Natural selection needs exactly three things: individuals must differ, offspring must resemble their parents, and some variants must leave more offspring than others. Given all three, adaptation follows whether or not anyone believes in it.',
      detailed:
        'Each is load-bearing. Without variation there is nothing to select between, which is the danger of a genetically uniform population. Without heredity nothing is transmitted, which is why fire — which grows, spreads and responds — does not evolve. Without differential reproduction the mix cannot change through selection, though it still drifts by chance.',
    },
    questions: [
      {
        id: 'fire',
        prompt: 'Which requirement does fire fail, and why does that matter?',
        options: [
          {
            id: 'a',
            text: 'Variation — all fires are identical',
          },
          {
            id: 'b',
            text: 'Heredity — a fire passes nothing to the next fire, so no advantage can accumulate',
            correct: true,
          },
          {
            id: 'c',
            text: 'Differential reproduction — all fires spread equally',
          },
          {
            id: 'd',
            text: 'It fails all three',
          },
        ],
        explanation:
          'Fires do differ and do spread at different rates. What they cannot do is transmit their differences, so nothing accumulates across generations — which is why heredity is the criterion that separates evolving systems from merely dynamic ones.',
      },
      {
        id: 'no-variation',
        prompt: 'What happens to a population with no genetic variation?',
        options: [
          {
            id: 'a',
            text: 'It evolves faster, since there is no competition between variants',
          },
          {
            id: 'b',
            text: 'It becomes immortal',
          },
          {
            id: 'c',
            text: 'It cannot adapt through selection, because whichever individuals survive, the next generation looks the same',
            correct: true,
          },
          {
            id: 'd',
            text: 'It splits into two species',
          },
        ],
        explanation:
          'This is not hypothetical. The Irish potato famine happened because nearly all potatoes grown were a single clone with no resistance to the blight, and inbred or bottlenecked populations face the same vulnerability.',
      },
    ],
  },

  'natural-selection': {
    summary: {
      essential:
        'Natural selection is the observation that some heritable variants leave more offspring than others, so those variants become more common. There is no agent, no evaluation and no foresight anywhere in the process.',
      detailed:
        'Advantages that sound trivially small still sweep through a population given time — a variant with a one percent reproductive advantage will spread. The trajectory is S-shaped: slow while rare, fast in the middle, slow again at the end because there is less left to replace. In small populations, chance can override selection entirely, and beneficial mutations are lost far more often than intuition suggests.',
    },
    questions: [
      {
        id: 'small-advantage',
        prompt:
          'Can a variant with a one percent reproductive advantage spread through a population?',
        options: [
          {
            id: 'a',
            text: 'No — advantages below about ten percent are swamped by noise',
          },
          {
            id: 'b',
            text: 'Yes — small advantages compound across generations, and given enough time a one percent advantage sweeps a large population',
            correct: true,
          },
          {
            id: 'c',
            text: 'Only if the population is very small',
          },
          {
            id: 'd',
            text: 'Only if no other variants are present',
          },
        ],
        explanation:
          'Compounding is what makes this work: each generation the variant makes up a slightly larger share, and the effect accumulates. This is why selection can act on differences too small to notice in any individual.',
      },
      {
        id: 'drift',
        prompt: 'What limits the deterministic picture of selection?',
        options: [
          {
            id: 'a',
            text: 'Mutations are too rare to supply variation',
          },
          {
            id: 'b',
            text: 'In small populations, random chance in who happens to reproduce can override selection entirely, so beneficial variants are frequently lost',
            correct: true,
          },
          {
            id: 'c',
            text: 'Selection stops acting once a variant reaches fifty percent',
          },
          {
            id: 'd',
            text: 'Selection only acts on physical traits, not behaviour',
          },
        ],
        explanation:
          'Genetic drift is a real evolutionary force, not noise around a signal. It is why effective population size matters so much in conservation, and why the same beneficial mutation can spread in one population and vanish in another.',
      },
    ],
  },

  'how-adaptations-spread': {
    summary: {
      essential:
        'An adaptation spreads because the individuals carrying it leave more descendants than those without it. Nothing about the process requires the adaptation to be optimal, only better than what it is competing with.',
      detailed:
        'This is why so many biological structures are demonstrably suboptimal. The vertebrate eye has its wiring in front of the light-sensitive cells, producing a blind spot; the octopus eye does not. The nerve serving a giraffe’s larynx runs the length of the neck and back up. Both would be improved by a redesign, and neither can be reached from where those lineages are, because selection cannot move downhill.',
    },
    questions: [
      {
        id: 'suboptimal',
        prompt: 'Why do obviously improvable structures like the vertebrate blind spot persist?',
        options: [
          {
            id: 'a',
            text: 'Because they confer a hidden advantage not yet identified',
          },
          {
            id: 'b',
            text: 'Because reaching a better arrangement would require passing through worse intermediates, and selection cannot move downhill',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because eyes are not subject to natural selection',
          },
          {
            id: 'd',
            text: 'Because the improvement would require too many mutations at once',
          },
        ],
        explanation:
          'This is the fitness landscape constraint. A population climbs to whatever local peak it can reach from where it started, and a valley between peaks is effectively a wall.',
      },
      {
        id: 'better-than',
        prompt: 'What does an adaptation have to be, to spread?',
        options: [
          {
            id: 'a',
            text: 'The best possible solution to the problem',
          },
          {
            id: 'b',
            text: 'Beneficial to the species as a whole',
          },
          {
            id: 'c',
            text: 'Better than the alternatives currently present in the population',
            correct: true,
          },
          {
            id: 'd',
            text: 'Beneficial in all environments the species might encounter',
          },
        ],
        explanation:
          'Selection is a comparison among what is actually available, not a search of all possibilities. It has no access to designs that are not represented in the population, and no way to evaluate future environments.',
      },
    ],
  },

  'does-nature-choose': {
    summary: {
      essential:
        'Nature has no demonstrated conscious plan, no goal and no capacity to choose. Natural selection is a population-level statistical outcome: some variants happen to leave more offspring, so they become more common.',
      detailed:
        'The intuitive version — that nature notices what is needed and provides it — predicts the same outcome and explains it wrongly, which is why it is so hard to dislodge. The peppered moth case is the clean demonstration: the population already contained dark moths before industrial soot arrived, birds ate the ones they could see, and the survivors bred. Nothing at any point evaluated, decided or intended.',
    },
    questions: [
      {
        id: 'moths',
        prompt: 'Did industrial pollution cause dark moths to appear?',
        options: [
          {
            id: 'a',
            text: 'Yes — soot exposure induced darker pigmentation in the moths',
          },
          {
            id: 'b',
            text: 'Yes — the pollution caused mutations that produced dark forms',
          },
          {
            id: 'c',
            text: 'No — dark moths were already present in the population; pollution changed which ones survived to breed',
            correct: true,
          },
          {
            id: 'd',
            text: 'No — the change in moth colour was unrelated to pollution',
          },
        ],
        explanation:
          'This is the central point, and the reason the example is used. Selection works on variation that already exists; it does not call new variants into being when they would be useful.',
      },
      {
        id: 'agent',
        prompt: 'What is wrong with saying nature selected the dark moths?',
        options: [
          {
            id: 'a',
            text: 'Nothing — it is a precise description of the process',
          },
          {
            id: 'b',
            text: 'It implies an agent that recognises a need and acts on it, and no such agent exists in the process',
            correct: true,
          },
          {
            id: 'c',
            text: 'It should be birds that selected them, not nature',
          },
          {
            id: 'd',
            text: 'Selection acted on the trees rather than the moths',
          },
        ],
        explanation:
          'The shorthand is convenient among people who know what it stands for. It becomes a problem when it is the only version someone has heard, because it produces a picture of evolution as a decision-maker — and a process with foresight would leave a very different record.',
      },
    ],
  },

  'evolution-has-no-conscious-goal': {
    summary: {
      essential:
        'Evolution has no known goal, no target and no foresight. It acts only on variation that already exists, according to conditions that already obtain.',
      detailed:
        'The evidence is in the failures. Populations regularly go extinct when conditions change in ways their existing variation cannot cover, which would not happen if the process could prepare. Adaptations that would be advantageous but require passing through a disadvantageous intermediate generally do not appear. Individual features do have functions — a heart is for pumping blood — but that purpose is a summary of past differential survival, not an aim.',
    },
    questions: [
      {
        id: 'teleonomy',
        prompt: 'Is it wrong to say a heart is for pumping blood?',
        options: [
          {
            id: 'a',
            text: 'Yes — biological structures have no functions',
          },
          {
            id: 'b',
            text: 'No — the function is real, and it is fully explained by the fact that ancestors whose hearts pumped better left more descendants',
            correct: true,
          },
          {
            id: 'c',
            text: 'Yes, unless the organism is conscious of the function',
          },
          {
            id: 'd',
            text: 'No, because the heart was designed for that purpose',
          },
        ],
        explanation:
          'Ernst Mayr called this teleonomy: apparent purposiveness produced by a mechanism with no purposes. The function summarises a history of differential survival; it does not require anything to have wanted a heart.',
      },
      {
        id: 'no-foresight',
        prompt: 'What would we expect to see if evolution could anticipate future conditions?',
        options: [
          {
            id: 'a',
            text: 'More extinctions, since preparation would be costly',
          },
          {
            id: 'b',
            text: 'Slower rates of adaptation',
          },
          {
            id: 'c',
            text: 'Far fewer extinctions from environmental change, and structures that pass through disadvantageous intermediates to reach better designs',
            correct: true,
          },
          {
            id: 'd',
            text: 'Identical outcomes to what we actually observe',
          },
        ],
        explanation:
          'The record is full of lineages that went extinct because their existing variation could not cover a change, and full of jury-rigged structures built from whatever was available. A process with foresight would leave neither.',
      },
    ],
  },

  'evolution-is-not-a-ladder': {
    summary: {
      essential:
        'Evolution produces a branching tree, not a ladder. Every living species sits at the same tip — the present — because every lineage has had exactly the same amount of time to evolve.',
      detailed:
        'The march-of-progress picture is produced by choosing, at each branch point, the side that leads to us and discarding everything else. Draw the same line to a hummingbird and it is equally continuous and equally arbitrary. A fish is not a step towards an amphibian; it is a lineage that has been evolving for exactly as long and is extremely good at being a fish.',
    },
    questions: [
      {
        id: 'same-time',
        prompt: 'Why does every living species sit at the tip of the tree?',
        options: [
          {
            id: 'a',
            text: 'Because all species evolve at the same rate',
          },
          {
            id: 'b',
            text: 'Because being alive now means having exactly the same amount of evolutionary time behind you as every other living species',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because extinct species are not shown on trees',
          },
          {
            id: 'd',
            text: 'Because the tree is drawn from the present backwards',
          },
        ],
        explanation:
          'Time is the axis. A bacterium alive today has had four billion years of evolution behind it, exactly as you have, and is not a preserved ancestor of anything.',
      },
      {
        id: 'how-produced',
        prompt: 'How is the march-of-progress image produced?',
        options: [
          {
            id: 'a',
            text: 'By ordering species by their complexity',
          },
          {
            id: 'b',
            text: 'By ordering species by the date they were discovered',
          },
          {
            id: 'c',
            text: 'By selecting, at each branch point, the lineage that leads to humans, and discarding all the others',
            correct: true,
          },
          {
            id: 'd',
            text: 'By showing only species alive today',
          },
        ],
        explanation:
          'It is a path through a tree, presented as if it were the tree. That the path ends at us is a fact about who drew it, not about the shape of the evidence.',
      },
    ],
  },

  'are-humans-the-goal-of-evolution': {
    summary: {
      essential:
        'Nothing in evolutionary theory identifies humans, or anything else, as a goal. We are one recently arrived twig among millions, and the process that produced us is still running.',
      detailed:
        'The intuition that we are the culmination comes from being the ones doing the looking. Every species could construct the same story with itself at the end, because every species is at the end of its own lineage. Anatomically modern humans have existed for roughly 300,000 years; sharks in some form for over 400 million; and the average mammal species persists one to two million years.',
    },
    questions: [
      {
        id: 'why-intuition',
        prompt: 'Where does the intuition that humans are evolution’s goal come from?',
        options: [
          {
            id: 'a',
            text: 'From the fossil record, which shows a clear trend towards humans',
          },
          {
            id: 'b',
            text: 'From the fact that humans have the largest brains of any animal',
          },
          {
            id: 'c',
            text: 'From our being the ones telling the story — every species is at the end of its own lineage and could construct the same narrative',
            correct: true,
          },
          {
            id: 'd',
            text: 'From genetic evidence that humans are the most derived species',
          },
        ],
        explanation:
          'It is a perspective effect, not an observation. And humans do not have the largest brains: sperm whales and elephants do, which is one reason absolute brain size is not the measure anyone uses.',
      },
      {
        id: 'still-evolving',
        prompt: 'Are humans still evolving?',
        options: [
          {
            id: 'a',
            text: 'No — medicine and culture have stopped natural selection',
          },
          {
            id: 'b',
            text: 'Yes — lactase persistence, high-altitude adaptation and malaria resistance all spread within the last ten thousand years',
            correct: true,
          },
          {
            id: 'c',
            text: 'Only in isolated populations',
          },
          {
            id: 'd',
            text: 'Only through genetic drift, not selection',
          },
        ],
        explanation:
          'Selection acts on whatever varies in survival and reproduction. Medicine and culture change what that is; they do not remove it. Genome scans identify hundreds of loci with signatures of recent positive selection.',
      },
    ],
  },

  'is-evolution-progress': {
    summary: {
      essential:
        'Progress requires a direction and a standard of better, and evolution supplies neither. What it produces is fit to local circumstances, and circumstances keep changing.',
      detailed:
        'The maximum complexity of life has increased over four billion years. The typical complexity has not: the mode of the distribution has stayed on bacteria throughout. That pattern is what a random walk away from a hard lower bound produces without any bias pushing organisms up, which is the strongest single argument against reading the history of life as progress.',
    },
    questions: [
      {
        id: 'max-vs-mode',
        prompt: 'What has actually increased over the history of life?',
        options: [
          {
            id: 'a',
            text: 'The complexity of the typical organism',
          },
          {
            id: 'b',
            text: 'The maximum complexity found anywhere, while the most common level has stayed at bacteria',
            correct: true,
          },
          {
            id: 'c',
            text: 'Both the maximum and the typical complexity, at the same rate',
          },
          {
            id: 'd',
            text: 'Neither — complexity has been constant',
          },
        ],
        explanation:
          'Distinguishing a distribution’s upper tail from its centre is the whole argument. Life started against a hard lower wall, so random variation could only extend the distribution one way, and the tail grows without any upward push.',
      },
      {
        id: 'better',
        prompt: 'Why can evolution not be described as progress?',
        options: [
          {
            id: 'a',
            text: 'Because organisms sometimes get worse',
          },
          {
            id: 'b',
            text: 'Because extinction removes the progress made',
          },
          {
            id: 'c',
            text: 'Because progress requires a standard of better, and what counts as better depends entirely on circumstances that keep changing',
            correct: true,
          },
          {
            id: 'd',
            text: 'Because complexity has not increased at all',
          },
        ],
        explanation:
          'An organism perfectly adapted to a cold stable world does badly in a hot variable one. There is no environment-independent scale on which to measure improvement, which is why biology abandoned the language of higher and lower organisms.',
      },
    ],
  },

  'why-evolution-sometimes-makes-organisms-simpler': {
    summary: {
      essential:
        'When a structure stops paying for itself, organisms that lose it do better. Tapeworms have no gut, cave fish lose their eyes, and endosymbiotic bacteria shed most of their genome.',
      detailed:
        'Two forces drive this. When the host or the environment supplies a function, mutations that break the gene for it stop being harmful, so selection no longer removes them. And in the small populations typical of vertically transmitted symbionts, drift can fix slightly harmful changes as well. The process is essentially irreversible — genes once lost are not recovered — and it is not decline: a tapeworm is a highly derived organism superbly adapted to a situation its ancestors never occupied.',
    },
    questions: [
      {
        id: 'tapeworm',
        prompt:
          'Why does a tapeworm having no gut count as an adaptation rather than a degeneration?',
        options: [
          {
            id: 'a',
            text: 'Because it can absorb nutrients faster without one',
          },
          {
            id: 'b',
            text: 'Because it lives surrounded by digested food, so a gut would be an organ maintained at a cost for no return — losing it was an improvement',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because its ancestors never had a gut',
          },
          {
            id: 'd',
            text: 'Because tapeworms are more primitive than free-living flatworms',
          },
        ],
        explanation:
          'Maintenance is expensive. Where a function is redundant, losing it frees resources, and the organisms that lose it out-compete those that do not — which is ordinary selection running in the direction that happens to pay.',
      },
      {
        id: 'devolution',
        prompt: 'Is there such a thing as evolving backwards?',
        options: [
          {
            id: 'a',
            text: 'Yes — organisms sometimes revert to ancestral forms',
          },
          {
            id: 'b',
            text: 'No — the word assumes a direction evolution does not have; selection removes what no longer pays and elaborates what does, and either can produce simpler or more complex results',
            correct: true,
          },
          {
            id: 'c',
            text: 'Yes, but only in parasites',
          },
          {
            id: 'd',
            text: 'Only under artificial selection',
          },
        ],
        explanation:
          'Devolution presupposes a scale to move down. A tapeworm has not regressed to an earlier state; it has a specialised set of features, most of them not obvious, including the ability to survive a host’s immune system.',
      },
    ],
  },

  'why-evolution-produces-trade-offs': {
    summary: {
      essential:
        'Energy spent on one function is unavailable for another, so no organism can maximise everything at once. Growth, reproduction and maintenance come out of the same budget.',
      detailed:
        'This is why organisms with wildly different strategies coexist in the same habitat, and why there is no best allocation in general. Fast reproduction with little investment works where mortality is high and unpredictable; heavy investment in repair and few offspring works where adults survive well. It is also why evolution does not produce a perfect organism: the best split depends on circumstances that change.',
    },
    questions: [
      {
        id: 'budget',
        prompt: 'Why can an organism not simply do everything well?',
        options: [
          {
            id: 'a',
            text: 'Because genes can only encode a limited number of functions',
          },
          {
            id: 'b',
            text: 'Because energy and materials spent on one function are unavailable for another, and the total is finite',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because natural selection prevents excessive specialisation',
          },
          {
            id: 'd',
            text: 'Because organisms are constrained by their body size',
          },
        ],
        explanation:
          'The constraint is a budget, not a rule. An organism that put everything into repair would leave no offspring; one that put everything into offspring would fall apart, and both extremes are selected against.',
      },
      {
        id: 'no-best',
        prompt: 'Which life-history strategy is best?',
        options: [
          {
            id: 'a',
            text: 'Slow growth and long life, since it maximises lifetime reproduction',
          },
          {
            id: 'b',
            text: 'Fast reproduction, since it maximises the number of offspring',
          },
          {
            id: 'c',
            text: 'None in general — the best allocation depends on how dangerous and how predictable the environment is',
            correct: true,
          },
          {
            id: 'd',
            text: 'A balanced allocation is always optimal',
          },
        ],
        explanation:
          'A mayfly and a tortoise are both successful, and each strategy fails in the other’s environment. This is the same point as fitness being a relationship rather than a property.',
      },
    ],
  },

  'what-is-an-evolutionary-niche': {
    summary: {
      essential:
        'A niche is not a place. It is the full range of conditions and resources under which a species can survive and reproduce — a region in a space with as many dimensions as there are relevant conditions.',
      detailed:
        'The distinction that matters is between what a species could tolerate and where it actually lives. Connell showed this directly with barnacles on Scottish shores: remove the competing species and the other expands into zones it never occupies naturally. A niche is therefore not a fixed property of a species; it depends on who else is present.',
    },
    questions: [
      {
        id: 'not-place',
        prompt: 'Why is a niche not the same as a habitat?',
        options: [
          {
            id: 'a',
            text: 'Because habitats change and niches do not',
          },
          {
            id: 'b',
            text: 'Because a niche is a range of conditions and resources — including temperature, food, timing and interactions — rather than a physical location',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because a habitat can contain many species and a niche only one',
          },
          {
            id: 'd',
            text: 'Because niches apply only to animals',
          },
        ],
        explanation:
          'Two species in the same habitat can occupy quite different niches by feeding on different things at different times, which is exactly what MacArthur found among five warbler species in the same spruce trees.',
      },
      {
        id: 'realised',
        prompt: 'What is the difference between the fundamental and realised niche?',
        options: [
          {
            id: 'a',
            text: 'The fundamental niche is genetic and the realised niche is learned',
          },
          {
            id: 'b',
            text: 'The fundamental niche is what a species could tolerate with nothing in the way; the realised niche is where it actually lives, usually smaller because competitors occupy part of the range',
            correct: true,
          },
          {
            id: 'c',
            text: 'The fundamental niche is where the species evolved and the realised niche is where it lives now',
          },
          {
            id: 'd',
            text: 'They are two names for the same thing',
          },
        ],
        explanation:
          'The fundamental niche can be measured in the laboratory. The realised one has to be measured in the field, and it changes when the community changes — which is why removing a competitor lets a species expand.',
      },
    ],
  },

  'why-survival-of-the-fittest-is-often-misunderstood': {
    summary: {
      essential:
        'Fittest does not mean strongest, fastest or most complex. It means leaving more offspring under the conditions currently in force — and those conditions keep changing.',
      detailed:
        'The phrase is close to circular on its own, since the fittest are defined as those that reproduce most, so it says little until the environment is specified. Change the environment and the ranking changes completely: a large well-defended organism wins where conditions are stable, a heat specialist wins in drought, and a small fast-breeding generalist wins where conditions keep changing. Darwin did not coin the phrase; Herbert Spencer did, and Darwin adopted it later.',
    },
    questions: [
      {
        id: 'meaning',
        prompt: 'What does fittest actually mean in evolutionary biology?',
        options: [
          {
            id: 'a',
            text: 'Physically strongest and healthiest',
          },
          {
            id: 'b',
            text: 'Best adapted to the widest range of conditions',
          },
          {
            id: 'c',
            text: 'Leaving the most surviving offspring under the conditions currently in force',
            correct: true,
          },
          {
            id: 'd',
            text: 'Most complex or most highly evolved',
          },
        ],
        explanation:
          'Fitness is measured in descendants. A small, fragile, short-lived organism that reproduces prolifically can be far fitter than a large impressive one, and often is.',
      },
      {
        id: 'context',
        prompt: 'Why does changing the environment change which organism is fittest?',
        options: [
          {
            id: 'a',
            text: 'Because organisms change their behaviour in new environments',
          },
          {
            id: 'b',
            text: 'Because fitness is a relationship between an organism and a situation, not a property the organism carries around',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because mutation rates depend on the environment',
          },
          {
            id: 'd',
            text: 'Because only some environments allow reproduction',
          },
        ],
        explanation:
          'This is why the slogan misleads. It sounds like a claim about which organisms are best, and it is really a claim about which happen to leave more offspring here, now.',
      },
    ],
  },

  'common-ancestry-and-the-tree-of-life': {
    summary: {
      essential:
        'All known life descends from a common ancestor. The evidence is not similarity — convergence produces plenty of that — but the strict nesting of similarities into groups within groups, and the agreement of independent kinds of evidence about that nesting.',
      detailed:
        'Every mammal is an amniote; every amniote is a tetrapod; every tetrapod is a vertebrate. There are no animals with hair and milk that lack a backbone. That strict nesting is what descent with modification predicts exactly, because a trait appearing once in an ancestor is inherited by everything descended from it and by nothing else. Anatomy, genetics and embryology were gathered independently over two centuries and produce the same nesting.',
    },
    questions: [
      {
        id: 'nesting',
        prompt: 'Why is the nested pattern of similarities better evidence than similarity alone?',
        options: [
          {
            id: 'a',
            text: 'Because nested patterns are easier to measure',
          },
          {
            id: 'b',
            text: 'Because convergence can produce similarity between unrelated lineages, but only inheritance forces similarities to fall into strict groups within groups with no crossing',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because similarity is always superficial',
          },
          {
            id: 'd',
            text: 'Because nesting rules out horizontal gene transfer',
          },
        ],
        explanation:
          'Sharks and dolphins are similar and not closely related. What needs explaining is why no animal has hair and milk without a backbone, and inheritance is the only process that forces that structure.',
      },
      {
        id: 'independent',
        prompt: 'What makes the agreement between anatomy, genetics and embryology so significant?',
        options: [
          {
            id: 'a',
            text: 'They are all measured in the same laboratories',
          },
          {
            id: 'b',
            text: 'They are all derived from the fossil record',
          },
          {
            id: 'c',
            text: 'They were gathered independently, by different methods, over two centuries, and converge on the same tree — which would be an extraordinary coincidence under any other explanation',
            correct: true,
          },
          {
            id: 'd',
            text: 'They agree because each was calibrated against the others',
          },
        ],
        explanation:
          'Independent lines of evidence converging is the strongest form of scientific argument. Genetics was not available when the anatomical tree was built, and it largely confirmed it — a prediction that could have failed and did not.',
      },
    ],
  },

  'extinction-as-part-of-evolution': {
    summary: {
      essential:
        'Over 99% of species that have ever lived are extinct. That is not a record of evolution failing; it is the ordinary outcome for a lineage in a changing world.',
      detailed:
        'The average species lifespan in the fossil record is a few million years. Standing diversity at any moment is the balance between origination and extinction, both of which run continuously, rather than a total that accumulates. Extinction also creates what comes next: mammals existed for over a hundred million years as small nocturnal animals, and their expansion required not a new innovation but an empty space.',
    },
    questions: [
      {
        id: 'not-failure',
        prompt: 'Why is extinction not evolution failing?',
        options: [
          {
            id: 'a',
            text: 'Because extinct species usually leave descendants under new names',
          },
          {
            id: 'b',
            text: 'Because turnover is the normal state — standing diversity is the balance of origination and extinction, not an accumulating total',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because extinction only affects poorly adapted species',
          },
          {
            id: 'd',
            text: 'Because extinction rates are very low',
          },
        ],
        explanation:
          'If extinction were failure, then evolution has failed more than 99% of the time it has been tried, which should suggest the framing is wrong rather than the process.',
      },
      {
        id: 'creates',
        prompt: 'How does extinction create opportunity?',
        options: [
          {
            id: 'a',
            text: 'By removing genetic variation, which speeds up adaptation',
          },
          {
            id: 'b',
            text: 'By increasing mutation rates in survivors',
          },
          {
            id: 'c',
            text: 'By emptying ecological space, which surviving lineages then expand into — as mammals did after the end-Cretaceous',
            correct: true,
          },
          {
            id: 'd',
            text: 'By forcing surviving species to become more complex',
          },
        ],
        explanation:
          'Mammals had existed for over 150 million years before they became large and diurnal. What they needed was not an innovation but the absence of the incumbents.',
      },
    ],
  },

  'convergent-evolution': {
    summary: {
      essential:
        'Unrelated lineages repeatedly arrive at similar solutions: camera eyes in vertebrates and octopuses, powered flight in insects, pterosaurs, birds and bats, streamlined bodies in sharks, dolphins and ichthyosaurs.',
      detailed:
        'Convergence shows that the space of workable solutions is narrower than the space of possible ones — physics and chemistry rule out most of it. What it does not show is that any particular outcome was bound to happen, and the details give the independence away: the vertebrate retina is wired backwards with a blind spot and the octopus one is not; a bat flies on skin stretched between fingers and a bird on feathers along a fused forelimb.',
    },
    questions: [
      {
        id: 'octopus-eye',
        prompt: 'What does the difference between vertebrate and octopus eyes demonstrate?',
        options: [
          {
            id: 'a',
            text: 'That octopuses are more highly evolved than vertebrates',
          },
          {
            id: 'b',
            text: 'That the two eyes were built independently — the vertebrate retina is wired backwards with a blind spot and the octopus one is not, despite both being camera eyes',
            correct: true,
          },
          {
            id: 'c',
            text: 'That the common ancestor of the two had a camera eye',
          },
          {
            id: 'd',
            text: 'That blind spots are advantageous in vertebrates',
          },
        ],
        explanation:
          'The shared solution shows constraint; the differing implementation shows independence. Their last common ancestor, around 600 million years ago, had at most a light-sensitive patch.',
      },
      {
        id: 'implies',
        prompt: 'What does convergence license us to conclude?',
        options: [
          {
            id: 'a',
            text: 'That evolution is aimed at particular outcomes',
          },
          {
            id: 'b',
            text: 'That any given lineage will eventually evolve intelligence',
          },
          {
            id: 'c',
            text: 'That physics and chemistry constrain the options, so similar problems tend to get similar solutions — but not that anything had to face those problems',
            correct: true,
          },
          {
            id: 'd',
            text: 'That similar species must be closely related',
          },
        ],
        explanation:
          'Conway Morris argues from convergence that outcomes are more predictable than they look. The constrained-options claim is well supported; the predictable-outcomes claim is a further step, and only the first follows from the evidence.',
      },
    ],
  },

  'evolutionary-contingency-how-much-is-chance': {
    summary: {
      essential:
        'How much of the history of life was inevitable and how much was accident is genuinely open. Gould argued that replaying the tape would produce a radically different biosphere; Conway Morris argued that convergence would drag the replay back towards similar solutions.',
      detailed:
        'The tape has actually been replayed, at small scale. Lenski froze samples of twelve identical E. coli populations every 500 generations, and one of them evolved the ability to use citrate after about 31,500 generations. Restarts from before roughly generation 20,000 never reproduced it; restarts from later samples did, repeatedly. Something with no visible effect of its own had happened in the interim that made the innovation reachable — contingency demonstrated rather than argued.',
    },
    questions: [
      {
        id: 'lenski',
        prompt: 'What did the citrate result in the long-term evolution experiment show?',
        options: [
          {
            id: 'a',
            text: 'That all twelve populations evolved the same innovations',
          },
          {
            id: 'b',
            text: 'That mutations occur at a constant rate',
          },
          {
            id: 'c',
            text: 'That an innovation depended on prior history — replays from early frozen samples never produced it, while replays from later ones did',
            correct: true,
          },
          {
            id: 'd',
            text: 'That E. coli can use citrate whenever it is available',
          },
        ],
        explanation:
          'The potentiating change had no visible effect of its own, which is what makes the result so striking: the population’s history determined what was subsequently reachable, in a system with identical conditions throughout.',
      },
      {
        id: 'settle',
        prompt:
          'What would settle the contingency debate at the scale Gould and Conway Morris were arguing about?',
        options: [
          {
            id: 'a',
            text: 'A more detailed fossil record',
          },
          {
            id: 'b',
            text: 'Longer laboratory experiments',
          },
          {
            id: 'c',
            text: 'Independent biospheres — finding life that arose separately and seeing whether it converged on similar solutions',
            correct: true,
          },
          {
            id: 'd',
            text: 'Better molecular clock calibration',
          },
        ],
        explanation:
          'Both sides are reading the same single history. Only a second sample could distinguish between them at that scale, which is one reason the search for life elsewhere is more than a curiosity.',
      },
    ],
  },

  'why-intelligence-is-not-evolutions-inevitable-destination': {
    summary: {
      essential:
        'Intelligence is an expensive adaptation to particular circumstances, not a general-purpose improvement. Nervous systems evolved to control movement, and elaborate ones evolved where the problems an animal faced changed faster than selection could track.',
      detailed:
        'Brains are metabolically costly, cannot be switched off, and require a long dependent childhood that reduces reproductive output. Most lineages solved their problems more cheaply, which is why most animals are not particularly clever and are doing perfectly well. There are more beetle species than all vertebrates combined, and beetles manage without anything resembling flexible problem-solving.',
    },
    questions: [
      {
        id: 'not-general',
        prompt: 'Why is intelligence not a general-purpose advantage?',
        options: [
          {
            id: 'a',
            text: 'Because intelligent animals reproduce more slowly',
          },
          {
            id: 'b',
            text: 'Because it carries a high fixed cost and returns benefits only where conditions change on a timescale a lifetime can track — most environments do not reward it enough to justify the expense',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because intelligence makes animals more visible to predators',
          },
          {
            id: 'd',
            text: 'Because it requires social living, which is rare',
          },
        ],
        explanation:
          'Slow reproduction is one of the costs rather than the reason. The distribution of intelligence across life — rare, in unusual lineages within their own groups — is what you expect from a situational adaptation rather than a general improvement.',
      },
      {
        id: 'origin',
        prompt: 'What did nervous systems originally evolve for?',
        options: [
          {
            id: 'a',
            text: 'Learning from experience',
          },
          {
            id: 'b',
            text: 'Social communication',
          },
          {
            id: 'c',
            text: 'Controlling movement — sensing something, deciding, and contracting a muscle',
            correct: true,
          },
          {
            id: 'd',
            text: 'Storing memories of food locations',
          },
        ],
        explanation:
          'A sea squirt larva swims and has a simple brain to steer with; when it attaches to a rock it reabsorbs most of that nervous system. Brains are for animals with decisions to make, and everything else is elaboration on that.',
      },
    ],
  },
};
