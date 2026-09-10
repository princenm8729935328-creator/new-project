/**
 * Recaps for ecology.
 *
 * Ecology taught as vocabulary is forgettable, so every question here is
 * anchored to a specific case — Paine's starfish, the Yellowstone wolves, the
 * fig and its wasp, MacArthur's warblers. The distractors are built from the
 * intuitions that ecology most reliably overturns: that removing a predator
 * helps its prey's community, that a balance of nature exists, that parasites
 * evolve towards harmlessness, that stability means constancy.
 */
import type { RecapsByTopic } from '../schema/recap';

export const LIFE_ECOLOGY_RECAPS: RecapsByTopic = {
  'what-is-an-ecosystem': {
    summary: {
      essential:
        'An ecosystem is all the organisms in an area together with the physical environment they interact with, treated as one system because energy and materials flow through all of it.',
      detailed:
        'Two things behave completely differently within it. Energy arrives as sunlight, passes up through the food web and leaves as heat at every step — it cannot be recycled, which is why ecosystems need a continuous supply. Matter cycles: the same atoms have been going round for billions of years. Confusing the two is the most common error in thinking about ecosystems.',
    },
    questions: [
      {
        id: 'energy-matter',
        prompt:
          'What is the crucial difference between how energy and matter move through an ecosystem?',
        options: [
          {
            id: 'a',
            text: 'Energy moves faster than matter',
          },
          {
            id: 'b',
            text: 'Energy flows through once and is lost as heat, while matter cycles and is reused indefinitely',
            correct: true,
          },
          {
            id: 'c',
            text: 'Matter is lost at each step while energy is conserved',
          },
          {
            id: 'd',
            text: 'Both flow through and are lost',
          },
        ],
        explanation:
          'The second law forbids recycling energy, which is why a continuous supply is needed and why cutting off sunlight collapses an ecosystem from the bottom. Atoms have no such constraint — the carbon in your body has been in a leaf, a bacterium and a limestone cliff.',
      },
      {
        id: 'not-organism',
        prompt: 'Is an ecosystem a kind of superorganism?',
        options: [
          {
            id: 'a',
            text: 'Yes — its parts are as integrated as the organs of a body',
          },
          {
            id: 'b',
            text: 'No — it is not a unit of selection, and there is no mechanism making ecosystems that work well leave more descendant ecosystems',
            correct: true,
          },
          {
            id: 'c',
            text: 'Yes, but only mature ecosystems qualify',
          },
          {
            id: 'd',
            text: 'The question cannot be answered scientifically',
          },
        ],
        explanation:
          'What produces the appearance of integration is that species adapted to each other over long periods, so the parts fit. That fit is the outcome of selection on individual organisms, not on the system — the same distinction that becomes contentious in the Gaia debate.',
      },
    ],
  },

  'every-organism-lives-in-a-network': {
    summary: {
      essential:
        'No organism can be understood in isolation. What it eats, what eats it, what competes with it and what it depends on shape its anatomy, behaviour and evolutionary trajectory as directly as its own genes do.',
      detailed:
        'The clearest demonstration is what happens when a network is disturbed. Sea otters eat urchins, urchins eat kelp, and otters do not eat kelp — but hunting otters nearly to extinction along the North Pacific coast let urchin numbers explode, and the kelp forests were grazed to bare rock, taking the fish, invertebrates and seabirds with them. The network also extends inside organisms: termites do not digest wood, microbes in their gut do.',
    },
    questions: [
      {
        id: 'indirect',
        prompt: 'What does the sea otter case demonstrate?',
        options: [
          {
            id: 'a',
            text: 'That predators always control the abundance of their prey',
          },
          {
            id: 'b',
            text: 'That removing a species changes the abundance of species it never directly interacted with — indirect effects can be large and reach far',
            correct: true,
          },
          {
            id: 'c',
            text: 'That kelp forests cannot survive without predators',
          },
          {
            id: 'd',
            text: 'That urchins are a keystone species',
          },
        ],
        explanation:
          'Otters never touched the kelp. The effect propagated through urchins to kelp to everything the kelp supported, which is why predicting the consequences of a local disturbance is so difficult.',
      },
      {
        id: 'inside',
        prompt: 'In what sense does the network extend inside organisms?',
        options: [
          {
            id: 'a',
            text: 'Organs interact with each other like species in a community',
          },
          {
            id: 'b',
            text: 'Many animals depend on microbial partners for functions they cannot perform — termites do not digest wood, and cows do not digest grass',
            correct: true,
          },
          {
            id: 'c',
            text: 'Cells within an organism compete like species',
          },
          {
            id: 'd',
            text: 'Genes interact in networks resembling food webs',
          },
        ],
        explanation:
          'In these cases asking what the animal eats is genuinely ambiguous: the cow digests the microbes that digested the grass. The animal is better described as a partnership than as an individual.',
      },
    ],
  },

  'energy-flow-through-life': {
    summary: {
      essential:
        'Roughly ninety percent of the energy at one trophic level is lost before it reaches the next. That single number explains why there are far fewer predators than prey and why food chains are short.',
      detailed:
        'Losses come from material never eaten, material eaten and not digested, and — the largest share — energy burned staying alive, which leaves as heat. After four steps only about a ten-thousandth of the original energy remains, which is not enough to sustain a viable population of anything sizeable. Predators are not rare because being one is dangerous; they are rare because there is not enough energy left to make many.',
    },
    questions: [
      {
        id: 'why-short',
        prompt: 'Why are food chains rarely longer than four or five levels?',
        options: [
          {
            id: 'a',
            text: 'Because predators large enough to eat top predators do not exist',
          },
          {
            id: 'b',
            text: 'Because roughly ninety percent of energy is lost at each transfer, so after a few steps too little remains to sustain a population',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because top predators reproduce too slowly',
          },
          {
            id: 'd',
            text: 'Because parasites interrupt the chain',
          },
        ],
        explanation:
          'It is arithmetic. At ten percent transfer efficiency, four steps leave a ten-thousandth of the original energy, and warm-blooded animals do worse because so much goes into maintaining body temperature.',
      },
      {
        id: 'inverted',
        prompt: 'Why can an ocean biomass pyramid appear upside down?',
        options: [
          {
            id: 'a',
            text: 'Because zooplankton are larger than phytoplankton',
          },
          {
            id: 'b',
            text: 'Because the ten percent rule does not apply in water',
          },
          {
            id: 'c',
            text: 'Because standing mass at a moment is not the same as energy flow over time — phytoplankton are tiny, divide in hours, and are replaced continuously',
            correct: true,
          },
          {
            id: 'd',
            text: 'Because phytoplankton are not really producers',
          },
        ],
        explanation:
          'Measured as a rate rather than a standing stock, the ocean pyramid is the right way up and steeper than a grassland. What must obey the ten percent rule is the flow, not the amount sitting there at any instant.',
      },
    ],
  },

  'food-chains-and-food-webs': {
    summary: {
      essential:
        'A food chain is a path; a web is what actually exists. Most species eat several things and are eaten by several things, and the consequences of removing one can reach species it never touched.',
      detailed:
        'Webs also have structure that matters: how long the chains are, how specialised the consumers are, and whether alternative prey or predators exist to buffer a change. Species-rich systems often show weaker cascades than simple ones, because there is more redundancy — which is one of the practical reasons diversity matters.',
    },
    questions: [
      {
        id: 'web-vs-chain',
        prompt: 'Why is a food web a better description than a food chain?',
        options: [
          {
            id: 'a',
            text: 'Because chains only exist in aquatic systems',
          },
          {
            id: 'b',
            text: 'Because most species eat several things and are eaten by several things, and effects propagate through connections a single chain does not show',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because webs include decomposers and chains do not',
          },
          {
            id: 'd',
            text: 'Because chains imply energy is conserved',
          },
        ],
        explanation:
          'A chain is a path through the web, useful for tracing energy. It cannot show the indirect effects — the ones that reach species the disturbed one never interacted with — which are routine and often large.',
      },
      {
        id: 'buffer',
        prompt: 'Why do species-rich systems often show weaker trophic cascades?',
        options: [
          {
            id: 'a',
            text: 'Because they contain fewer predators',
          },
          {
            id: 'b',
            text: 'Because alternative prey and predators exist, so the loss of one link can be partly absorbed rather than propagating undamped',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because energy transfer is more efficient in diverse systems',
          },
          {
            id: 'd',
            text: 'Because rich systems have shorter food chains',
          },
        ],
        explanation:
          'Redundancy buffers. This is one of the practical arguments for biodiversity: not that every species is essential, but that a system with alternatives keeps functioning when one is lost.',
      },
    ],
  },

  'ecological-niches': {
    summary: {
      essential:
        'Two species using a resource identically cannot coexist indefinitely — the one even marginally better at it eventually excludes the other. Coexistence requires that they differ somewhere.',
      detailed:
        'MacArthur’s warblers are the case that made this concrete: five species feeding in the same spruce trees in Maine turn out to divide the tree, one working the outer tips of the upper branches, another the inner branches below, and so on, differing also in timing and in which insects they take. In practice such differences are often subtle and are not always found even when species clearly do coexist, which is a long-standing puzzle sometimes called the paradox of the plankton.',
    },
    questions: [
      {
        id: 'warblers',
        prompt: 'What did MacArthur find about five warbler species in the same trees?',
        options: [
          {
            id: 'a',
            text: 'That four of the five were slowly being excluded',
          },
          {
            id: 'b',
            text: 'That they divide the tree, each feeding in a different zone and differing in timing and prey, so they are not in fact using the resource identically',
            correct: true,
          },
          {
            id: 'c',
            text: 'That they alternate use of the trees by season',
          },
          {
            id: 'd',
            text: 'That they hybridise, forming a single interbreeding population',
          },
        ],
        explanation:
          'They looked like competitors for the same insects until someone recorded where each actually spent its time. This is the observation that turned the niche from a metaphor into something measurable.',
      },
      {
        id: 'paradox',
        prompt: 'What is the paradox of the plankton?',
        options: [
          {
            id: 'a',
            text: 'That plankton are more diverse in nutrient-poor water',
          },
          {
            id: 'b',
            text: 'That many plankton species coexist on apparently identical resources, which competitive exclusion says should not happen',
            correct: true,
          },
          {
            id: 'c',
            text: 'That plankton biomass is lower than that of the zooplankton eating them',
          },
          {
            id: 'd',
            text: 'That plankton reproduce faster than they are consumed',
          },
        ],
        explanation:
          'It is a genuine open problem in ecology. Proposed resolutions include environmental variation preventing equilibrium ever being reached, spatial structure, and predation keeping any one species from winning.',
      },
    ],
  },

  competition: {
    summary: {
      essential:
        'Two species coexist when each suppresses itself more than it suppresses the other. If either suppresses the other more strongly than it suppresses itself, it drives the other out.',
      detailed:
        'That rule falls out of the standard competition model and is not obvious: coexistence is not about being equally matched, it is about the competitors being different enough that each runs out of its own limiting resources before exhausting the other’s. The model is deliberately simple and ignores space, changing conditions and third species, all of which can permit coexistence it forbids.',
    },
    questions: [
      {
        id: 'rule',
        prompt: 'Under what condition do two competitors coexist?',
        options: [
          {
            id: 'a',
            text: 'When they are exactly equally matched',
          },
          {
            id: 'b',
            text: 'When one is much stronger than the other',
          },
          {
            id: 'c',
            text: 'When each suppresses its own population growth more than it suppresses the other’s',
            correct: true,
          },
          {
            id: 'd',
            text: 'When their populations are the same size',
          },
        ],
        explanation:
          'Equal matching gives a knife-edge that any perturbation destroys. Stable coexistence requires self-limitation to exceed cross-limitation, which in practice means the species are using at least partly different resources.',
      },
      {
        id: 'model-limits',
        prompt: 'What does the simple competition model leave out?',
        options: [
          {
            id: 'a',
            text: 'The effect of population size on growth rate',
          },
          {
            id: 'b',
            text: 'Space, time-varying conditions and third species — all of which can allow coexistence the model forbids',
            correct: true,
          },
          {
            id: 'c',
            text: 'The possibility of one species going extinct',
          },
          {
            id: 'd',
            text: 'The role of resources in limiting growth',
          },
        ],
        explanation:
          'Real communities coexist for reasons the two-species equations cannot represent: patchiness, disturbance, seasonal alternation and shared predators can all keep a superior competitor from winning.',
      },
    ],
  },

  predation: {
    summary: {
      essential:
        'Predation is a selection pressure that intensifies itself. Once some organisms make a living eating others, everything alive is under pressure to become harder to eat — and every defence puts pressure on predators to get past it.',
      detailed:
        'This is why the Cambrian looks the way it does: mineralised skeletons appear across many unrelated groups within a few tens of millions of years, which is a response rather than a coincidence, and eyes appear, useful to both sides. Predators also do more than remove individuals. They change where and when prey feed, and those behavioural effects can exceed the direct effect of the killing.',
    },
    questions: [
      {
        id: 'cambrian',
        prompt:
          'Why did hard parts appear across many unrelated animal groups at roughly the same time?',
        options: [
          {
            id: 'a',
            text: 'Because seawater chemistry suddenly permitted mineralisation',
          },
          {
            id: 'b',
            text: 'Because all animal lineages diverged at that moment',
          },
          {
            id: 'c',
            text: 'Because predation had become a major pressure, and defences were advantageous in every lineage simultaneously',
            correct: true,
          },
          {
            id: 'd',
            text: 'Because oxygen levels made calcium carbonate available',
          },
        ],
        explanation:
          'Chemistry and oxygen made it possible; predation made it worth doing. A shared selective pressure acting on many lineages at once is what produces convergent responses across a whole fauna.',
      },
      {
        id: 'behavioural',
        prompt: 'Beyond killing prey, how else do predators affect prey populations?',
        options: [
          {
            id: 'a',
            text: 'They increase prey reproduction rates',
          },
          {
            id: 'b',
            text: 'They change prey behaviour — where and when they feed — and those effects can exceed the direct effect of the killing',
            correct: true,
          },
          {
            id: 'c',
            text: 'They reduce genetic diversity in prey populations',
          },
          {
            id: 'd',
            text: 'They have no other effects',
          },
        ],
        explanation:
          'The Yellowstone wolves are the well-known case: elk changed where they browsed, which changed where willows could regrow, which changed the streams. How much of that cascade the wolves caused is debated, but the behavioural mechanism itself is well documented.',
      },
    ],
  },

  'the-evolutionary-arms-race': {
    summary: {
      essential:
        'In an arms race, both sides improve enormously and neither gains ground. Predator speed and prey speed both rise, and the gap between them stays roughly where it started.',
      detailed:
        'Van Valen called this the Red Queen hypothesis, after the character who has to run to stay in the same place, and proposed it to explain why extinction risk in the fossil record does not appear to fall as a lineage persists: the environment that matters most is other organisms, and they keep adapting. Real arms races do not run indefinitely — they hit physical and energetic limits, and the trade-off against everything else the organism must do eventually binds.',
    },
    questions: [
      {
        id: 'no-gain',
        prompt: 'What is counter-intuitive about the outcome of an evolutionary arms race?',
        options: [
          {
            id: 'a',
            text: 'One side always wins eventually',
          },
          {
            id: 'b',
            text: 'Both sides improve enormously in absolute terms while the advantage of neither changes',
            correct: true,
          },
          {
            id: 'c',
            text: 'Neither side changes at all',
          },
          {
            id: 'd',
            text: 'The prey species always goes extinct',
          },
        ],
        explanation:
          'Enormous change producing no net advantage is exactly what makes the Red Queen worth stating. Each side is running to stay in the same relative position.',
      },
      {
        id: 'limits',
        prompt: 'Why do arms races not escalate indefinitely?',
        options: [
          {
            id: 'a',
            text: 'Because one side eventually goes extinct',
          },
          {
            id: 'b',
            text: 'Because mutation supplies no further variation',
          },
          {
            id: 'c',
            text: 'Because physical and energetic limits bind, and resources spent on the arms race are unavailable for everything else the organism must do',
            correct: true,
          },
          {
            id: 'd',
            text: 'Because predators voluntarily stop improving',
          },
        ],
        explanation:
          'A cheetah cannot become arbitrarily fast; muscle, bone and the energy budget set limits. Trade-offs are what keep escalation bounded, which is the same constraint that appears throughout life-history theory.',
      },
    ],
  },

  cooperation: {
    summary: {
      essential:
        'Cooperation is a puzzle because defecting usually pays better in any single interaction. Three mechanisms resolve it: kinship, repetition and reputation.',
      detailed:
        'Kinship works because helping a relative propagates copies of your own genes — Hamilton’s rule states the condition precisely, that relatedness times benefit must exceed cost. Repetition works because defecting today costs cooperation tomorrow. Reputation works where behaviour is observed, and requires recognising individuals and remembering what they did, which is cognitively demanding and is one proposed driver of large brains in social species.',
    },
    questions: [
      {
        id: 'hamilton',
        prompt: 'What does Hamilton’s rule state?',
        options: [
          {
            id: 'a',
            text: 'That organisms always help their offspring first',
          },
          {
            id: 'b',
            text: 'That helping is favoured when relatedness times the benefit to the recipient exceeds the cost to the helper',
            correct: true,
          },
          {
            id: 'c',
            text: 'That cooperation only evolves in species with parental care',
          },
          {
            id: 'd',
            text: 'That the most closely related individuals compete most intensely',
          },
        ],
        explanation:
          'It makes the condition quantitative. It is why sterile worker bees make evolutionary sense — they share three quarters of their genes with their sisters — and why parental care is close to universal.',
      },
      {
        id: 'repetition',
        prompt: 'Why does repeated interaction favour cooperation?',
        options: [
          {
            id: 'a',
            text: 'Because individuals become fond of each other',
          },
          {
            id: 'b',
            text: 'Because cooperation becomes habitual',
          },
          {
            id: 'c',
            text: 'Because defecting once costs cooperation in every subsequent round, so the long-run payoff of cooperating is higher',
            correct: true,
          },
          {
            id: 'd',
            text: 'Because repeated interaction reduces the temptation to defect',
          },
        ],
        explanation:
          'The temptation to defect is unchanged in any single round; what changes is the shadow of the future. Vampire bats regurgitate blood for roost-mates that failed to feed, preferentially for those that have fed them before.',
      },
    ],
  },

  symbiosis: {
    summary: {
      essential:
        'Symbiosis simply means living together. Whether the relationship benefits both partners, one, or one at the other’s expense is a separate question — and the answer can change with circumstances.',
      detailed:
        'Mutualism, commensalism and parasitism are three regions of a continuum rather than three categories. Mycorrhizal fungi help plants take up phosphorus and are repaid in sugar, but where soil phosphorus is abundant the plant gains little and the fungus moves closer to being a cost. Nothing about the organisms changed; the context did.',
    },
    questions: [
      {
        id: 'continuum',
        prompt: 'Why are mutualism, commensalism and parasitism better treated as a continuum?',
        options: [
          {
            id: 'a',
            text: 'Because the terms are poorly defined',
          },
          {
            id: 'b',
            text: 'Because the same relationship can move along the axis as conditions change, and true neutrality is hard to demonstrate',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because most symbioses involve more than two species',
          },
          {
            id: 'd',
            text: 'Because the categories apply only to microbes',
          },
        ],
        explanation:
          'Gut bacteria are helpful in the gut and dangerous in the bloodstream. Careful measurement also often turns apparent commensalism into slight benefit or slight cost, so the middle category is more a measurement limit than a state.',
      },
      {
        id: 'meaning',
        prompt: 'What does the word symbiosis mean on its own?',
        options: [
          {
            id: 'a',
            text: 'A relationship benefiting both partners',
          },
          {
            id: 'b',
            text: 'Living together in close association, without specifying who benefits',
            correct: true,
          },
          {
            id: 'c',
            text: 'A relationship in which one organism lives inside another',
          },
          {
            id: 'd',
            text: 'A permanent merger of two organisms',
          },
        ],
        explanation:
          'Popular usage has narrowed it to mean mutual benefit. In biology it is the umbrella term, and parasitism is a kind of symbiosis.',
      },
    ],
  },

  mutualism: {
    summary: {
      essential:
        'Mutualisms benefit both partners, which raises an obvious question: why are they not destroyed by individuals that take without giving? Three mechanisms keep them stable.',
      detailed:
        'Sanctions: legume plants cut oxygen supply to root nodules whose bacteria are not fixing nitrogen, and the bacteria inside reproduce far less. Vertical transmission: a symbiont passed from parent to offspring has its reproductive future bound to the host’s, so harming the host harms its own descendants. Partner choice: plants send more carbon to the mycorrhizal fungi delivering more phosphorus, and the fungi reciprocate — a market rather than a punishment.',
    },
    questions: [
      {
        id: 'sanctions',
        prompt: 'How was plant sanctioning of non-performing symbionts demonstrated?',
        options: [
          {
            id: 'a',
            text: 'By removing the bacteria and measuring plant growth',
          },
          {
            id: 'b',
            text: 'By supplying root nodules with argon instead of nitrogen so the bacteria could not fix any, and observing the plant cut their oxygen supply while they reproduced far less',
            correct: true,
          },
          {
            id: 'c',
            text: 'By comparing plants grown with and without fertiliser',
          },
          {
            id: 'd',
            text: 'By genetically modifying the bacteria',
          },
        ],
        explanation:
          'The argon experiment is elegant because the bacteria are unchanged and only their output is prevented. The plant detects performance rather than identity, which is exactly what a sanctioning mechanism requires.',
      },
      {
        id: 'vertical',
        prompt:
          'Why are vertically transmitted symbionts usually more cooperative than horizontally transmitted ones?',
        options: [
          {
            id: 'a',
            text: 'They are more closely related to their host',
          },
          {
            id: 'b',
            text: 'Their reproductive future is bound to the host’s, so harming the host harms their own descendants',
            correct: true,
          },
          {
            id: 'c',
            text: 'They have smaller genomes and fewer harmful genes',
          },
          {
            id: 'd',
            text: 'Hosts can more easily expel horizontally transmitted symbionts',
          },
        ],
        explanation:
          'Aligned reproductive interests do the work. Symbionts that move between unrelated hosts have no such alignment and are far more often parasitic — which is a general prediction the data support.',
      },
    ],
  },

  parasitism: {
    summary: {
      essential:
        'Parasites gain at their host’s expense, and they do not evolve towards harmlessness. Selection settles virulence at an intermediate level, because doing more damage usually raises transmission while it lasts but shortens the window.',
      detailed:
        'The prediction that falls out of this is practical: where a parasite can spread without the host moving — through water, through a vector, through a hospital ward — the cost of disabling the host falls, and higher virulence is favoured. Cholera and malaria are the standard examples. The trade-off relationship varies by system and for some parasites is weak or absent.',
    },
    questions: [
      {
        id: 'not-harmless',
        prompt: 'Why do parasites not simply evolve to be harmless?',
        options: [
          {
            id: 'a',
            text: 'Because harmless parasites are outcompeted by virulent ones within a host',
          },
          {
            id: 'b',
            text: 'Because more damage often means faster transmission while it lasts, so the optimum is at an intermediate level of harm rather than zero',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because host immune systems force parasites to be aggressive',
          },
          {
            id: 'd',
            text: 'Because harmlessness would make them commensals rather than parasites',
          },
        ],
        explanation:
          'The total transmission achieved is the product of transmission rate and duration, and that product peaks at intermediate virulence. Zero harm is not optimal for the parasite.',
      },
      {
        id: 'waterborne',
        prompt: 'Why does waterborne transmission tend to favour higher virulence?',
        options: [
          {
            id: 'a',
            text: 'Water carries parasites further than air',
          },
          {
            id: 'b',
            text: 'Because the parasite can spread without the host moving, so disabling the host costs it little',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because waterborne parasites reproduce faster',
          },
          {
            id: 'd',
            text: 'Because immune responses are weaker against waterborne pathogens',
          },
        ],
        explanation:
          'Paul Ewald’s argument. A pathogen that needs its host walking about to meet others pays a price for disabling them; one carried by water or an insect vector does not, which predicts the difference between a common cold and cholera.',
      },
    ],
  },

  coevolution: {
    summary: {
      essential:
        'Coevolution is reciprocal change: each species is the environment the other adapts to, so each generation of one raises the difficulty for the next generation of the other.',
      detailed:
        'Darwin’s orchid is the demonstration case. In 1862 he received a Madagascan orchid with a nectar spur about thirty centimetres long and predicted a moth with a comparable proboscis. He was ridiculed; the moth was described in 1903 and named praedicta, and its feeding was filmed in 1992. Neither partner is trying to escalate — longer spurs press the moth harder against the pollen, and longer tongues reach nectar others cannot.',
    },
    questions: [
      {
        id: 'orchid',
        prompt: 'Why is Darwin’s orchid prediction a strong piece of evidence?',
        options: [
          {
            id: 'a',
            text: 'Because it showed that orchids and moths are closely related',
          },
          {
            id: 'b',
            text: 'Because it was a specific, falsifiable prediction made from the shape of a flower alone, and it was later confirmed',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because it demonstrated that flowers evolve faster than insects',
          },
          {
            id: 'd',
            text: 'Because it was the first observation of pollination',
          },
        ],
        explanation:
          'He could have been wrong, and was ridiculed for it. A prediction that risks failure and then succeeds is worth far more than an explanation constructed after the fact.',
      },
      {
        id: 'escalation',
        prompt: 'What drives the escalation in a coevolving pair like the orchid and the moth?',
        options: [
          {
            id: 'a',
            text: 'Each species deliberately outcompetes the other',
          },
          {
            id: 'b',
            text: 'Flowers with longer spurs force the moth to press harder against the pollen and so are pollinated better, while moths with longer tongues reach nectar others cannot',
            correct: true,
          },
          {
            id: 'c',
            text: 'Random drift in both populations',
          },
          {
            id: 'd',
            text: 'Competition between orchid species for the same moth',
          },
        ],
        explanation:
          'Both sides are simply doing better than their own conspecifics, and the escalation is a side effect. Neither is trying to escalate, and neither ends up further ahead than it started.',
      },
    ],
  },

  'why-one-species-does-not-simply-take-over-everything': {
    summary: {
      essential:
        'Whatever becomes common does worse. The commonest prey is the one predators learn to recognise, the commonest host is the one parasites are adapted to, and the commonest plant depletes the nutrients it needs while accumulating the pathogens that attack it.',
      detailed:
        'This is negative frequency dependence, and it pushes the system back towards the middle from either side. Janzen and Connell proposed the last of those mechanisms to explain why tropical forests hold hundreds of tree species rather than being dominated by the best competitor: seedlings near a parent tree die from that species’ own accumulated enemies. Add resource limits, disturbance and the fact that environments keep changing, and taking over everything is not available to anyone.',
    },
    questions: [
      {
        id: 'frequency',
        prompt: 'What is negative frequency dependence?',
        options: [
          {
            id: 'a',
            text: 'Rare species mutate faster than common ones',
          },
          {
            id: 'b',
            text: 'Being common reduces a species’ success, so whatever is abundant is pushed back down and whatever is rare is favoured',
            correct: true,
          },
          {
            id: 'c',
            text: 'Population size oscillates around a fixed value',
          },
          {
            id: 'd',
            text: 'Species become more specialised as they become more abundant',
          },
        ],
        explanation:
          'The mechanisms are specific rather than abstract: predator search image, parasite adaptation, and soil pathogen accumulation all penalise abundance directly.',
      },
      {
        id: 'janzen',
        prompt: 'What does the Janzen–Connell hypothesis explain?',
        options: [
          {
            id: 'a',
            text: 'Why tropical forests grow faster than temperate ones',
          },
          {
            id: 'b',
            text: 'Why tropical forests hold hundreds of tree species rather than being dominated by one — seedlings near a parent die from that species’ accumulated enemies',
            correct: true,
          },
          {
            id: 'c',
            text: 'Why tropical soils are nutrient-poor',
          },
          {
            id: 'd',
            text: 'Why tropical trees are taller than temperate trees',
          },
        ],
        explanation:
          'It converts an abstract principle into a spatial mechanism. A seed that lands far from its parent, in a patch dominated by a different species, escapes the enemies specialised on its own kind.',
      },
    ],
  },

  biodiversity: {
    summary: {
      essential:
        'Biodiversity is three things, and counting species catches only one. Genetic diversity within a species, species diversity within a community, and ecosystem diversity across a landscape each matter, and each can be lost independently.',
      detailed:
        'The Irish potato famine happened with one species present in enormous numbers and essentially no genetic diversity — a single clone with no resistance to the blight. Cheetahs are so genetically uniform after a bottleneck that unrelated individuals accept skin grafts from each other. And a landscape of one habitat type, however species-rich, loses everything to a single event.',
    },
    questions: [
      {
        id: 'genetic',
        prompt: 'Why does genetic diversity within a species matter as well as species count?',
        options: [
          {
            id: 'a',
            text: 'Because it determines how many species can coexist',
          },
          {
            id: 'b',
            text: 'Because a species with no genetic variation cannot adapt and is vulnerable to a single pathogen or change — as the Irish potato clone was',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because it increases the total number of species over time',
          },
          {
            id: 'd',
            text: 'Because it prevents inbreeding between species',
          },
        ],
        explanation:
          'Species richness can be high while every population within it is genetically impoverished. The two are separable, and both are lost by different mechanisms.',
      },
      {
        id: 'weighted',
        prompt: 'Why are measures weighted by evolutionary distinctness increasingly used?',
        options: [
          {
            id: 'a',
            text: 'Because species counts are too difficult to obtain',
          },
          {
            id: 'b',
            text: 'Because a raw count treats every species as equivalent, whereas losing one of two hundred beetle species is not comparable to losing the last member of an ancient lineage',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because distinct species are more likely to be endangered',
          },
          {
            id: 'd',
            text: 'Because evolutionary distinctness correlates with body size',
          },
        ],
        explanation:
          'A count discards information about how much evolutionary history each species represents. The tuatara is the last survivor of an order; a beetle species is one of hundreds of thousands.',
      },
    ],
  },

  'keystone-species': {
    summary: {
      essential:
        'A keystone species has an influence far out of proportion to its abundance. Removing one can restructure an entire community, and Robert Paine demonstrated this by hand on a rocky shore in Washington State.',
      detailed:
        'He removed a starfish that preyed mainly on mussels, repeatedly, for years. Mussels — previously held in check and the best competitors for space — spread across the rock and crowded out almost everything else, and diversity fell from fifteen species to eight. Removing a predator reduced diversity, which was not what anyone expected. The concept has since been overused: keystone status is a property of a species in a particular system, not a label it carries everywhere.',
    },
    questions: [
      {
        id: 'surprise',
        prompt: 'What was surprising about the result of Paine’s removal experiment?',
        options: [
          {
            id: 'a',
            text: 'The mussels declined after the predator was removed',
          },
          {
            id: 'b',
            text: 'Removing a predator reduced the diversity of the community, from fifteen species to eight',
            correct: true,
          },
          {
            id: 'c',
            text: 'The starfish returned to the plot on its own',
          },
          {
            id: 'd',
            text: 'No measurable change occurred',
          },
        ],
        explanation:
          'Intuition says removing a predator helps the community it preys on. Instead the best competitor for space, previously held in check, monopolised the rock — which is why the effect is called a keystone effect.',
      },
      {
        id: 'overused',
        prompt: 'What is the main caution about the keystone concept?',
        options: [
          {
            id: 'a',
            text: 'That keystone species are always predators',
          },
          {
            id: 'b',
            text: 'That the effect only occurs in marine systems',
          },
          {
            id: 'c',
            text: 'That keystone status is a property of a species within a particular system, not a permanent label the species carries everywhere',
            correct: true,
          },
          {
            id: 'd',
            text: 'That the original experiment has not been replicated',
          },
        ],
        explanation:
          'A species that is keystone in one community may be unremarkable in another where alternative competitors or predators exist. The label describes a role in a network, not a kind of organism.',
      },
    ],
  },

  'ecosystem-stability-and-resilience': {
    summary: {
      essential:
        'Stability and resilience are different things. A system can resist change, or it can absorb change and recover, and the two do not always come together.',
      detailed:
        'More diverse communities tend to be more stable over time — and the important part of that result is not that they produce more, but that they vary less. In the Cedar Creek grassland experiments, diverse plots lost far less productivity during a severe drought and recovered faster, because they contained species that could cope. The mechanism is that species respond differently to conditions, so aggregate properties fluctuate less than individual populations.',
    },
    questions: [
      {
        id: 'insurance',
        prompt: 'Why does diversity stabilise ecosystem function?',
        options: [
          {
            id: 'a',
            text: 'Because diverse systems have more total biomass',
          },
          {
            id: 'b',
            text: 'Because species respond differently to conditions, so when some fail others do well and the aggregate fluctuates less',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because diverse systems have more predators to control populations',
          },
          {
            id: 'd',
            text: 'Because diverse systems reach equilibrium faster',
          },
        ],
        explanation:
          'This is the insurance effect. It is why a diverse plot loses less productivity in a drought than a uniform one, even though individual species within it may do very badly.',
      },
      {
        id: 'constancy',
        prompt: 'Does a stable ecosystem mean an unchanging one?',
        options: [
          {
            id: 'a',
            text: 'Yes — stability means the community composition stays fixed',
          },
          {
            id: 'b',
            text: 'No — a stable system can turn over continuously in composition while its aggregate functions stay within bounds',
            correct: true,
          },
          {
            id: 'c',
            text: 'Yes, unless it is disturbed by humans',
          },
          {
            id: 'd',
            text: 'Only mature ecosystems are truly stable',
          },
        ],
        explanation:
          'The balance of nature is a poor model. Populations fluctuate, species come and go, and what stability describes is the persistence of function and structure rather than constancy of membership.',
      },
    ],
  },

  'ecological-feedback': {
    summary: {
      essential:
        'Ecological systems contain loops that amplify change and loops that damp it. Which dominates in a given situation is an empirical question, and systems with strong feedbacks can have more than one stable state.',
      detailed:
        'A shallow lake can be clear with plants on the bottom, or turbid and algae-dominated, at the same nutrient level — and the nutrient input that tips it over is higher than the one needed to bring it back. That gap is called hysteresis, and it is why restoring a degraded system is so much harder than not degrading it. The same structure describes coral reefs turning to algal rock and grassland turning to scrub.',
    },
    questions: [
      {
        id: 'hysteresis',
        prompt: 'What is hysteresis in an ecological system?',
        options: [
          {
            id: 'a',
            text: 'A delay between a disturbance and its effect',
          },
          {
            id: 'b',
            text: 'The forcing needed to leave a state is larger than the forcing that would have prevented entering it, so reversing the cause does not reverse the effect',
            correct: true,
          },
          {
            id: 'c',
            text: 'A cycle that repeats with a fixed period',
          },
          {
            id: 'd',
            text: 'The tendency of a system to return to equilibrium',
          },
        ],
        explanation:
          'It is why lowering nutrient input back to the level it was at before a lake flipped does not flip it back. The turbid state is stabilised by its own feedbacks and has to be pushed considerably further to break.',
      },
      {
        id: 'predict',
        prompt: 'How easy is it to identify a threshold before it is crossed?',
        options: [
          {
            id: 'a',
            text: 'Straightforward, given enough monitoring data',
          },
          {
            id: 'b',
            text: 'Difficult — proposed early-warning indicators such as critical slowing down have shown mixed performance outside controlled systems',
            correct: true,
          },
          {
            id: 'c',
            text: 'Impossible in principle',
          },
          {
            id: 'd',
            text: 'Easy in aquatic systems and impossible in terrestrial ones',
          },
        ],
        explanation:
          'This is one of the more consequential open problems in ecology, because it determines whether a threshold can be avoided or only recognised afterwards.',
      },
    ],
  },

  extinction: {
    summary: {
      essential:
        'Extinction is continuous. The average species in the fossil record persists a few million years, and over 99% of species that have ever lived are gone.',
      detailed:
        'What varies is the rate. Background extinction runs constantly and selects on ordinary traits; mass extinctions are brief intervals when the rate spikes and — more importantly — when the traits that help you survive change. Specialisation to a reliable food source and large body size help in normal times and become liabilities when conditions change abruptly.',
    },
    questions: [
      {
        id: 'background',
        prompt: 'What is background extinction?',
        options: [
          {
            id: 'a',
            text: 'Extinction caused by human activity',
          },
          {
            id: 'b',
            text: 'Extinction of species that were never abundant',
          },
          {
            id: 'c',
            text: 'The continuous baseline rate at which species disappear, outside mass extinction events',
            correct: true,
          },
          {
            id: 'd',
            text: 'Extinction that leaves no fossil record',
          },
        ],
        explanation:
          'It is the ordinary rate at which lineages end, and it never stops. Mass extinctions are spikes on top of it, not a different phenomenon appearing against a still background.',
      },
      {
        id: 'selectivity',
        prompt: 'What most distinguishes a mass extinction from intensified background extinction?',
        options: [
          {
            id: 'a',
            text: 'The total number of species lost',
          },
          {
            id: 'b',
            text: 'The speed at which it occurs',
          },
          {
            id: 'c',
            text: 'It selects on different traits — geographic range predicts survival in a way it does not during normal times, so ecosystems are reorganised rather than thinned',
            correct: true,
          },
          {
            id: 'd',
            text: 'It affects marine species more than terrestrial ones',
          },
        ],
        explanation:
          'Jablonski showed the change in selective regime. It is why the survivors of the end-Cretaceous look like an arbitrary selection rather than the best of the previous world.',
      },
    ],
  },

  'mass-extinctions': {
    summary: {
      essential:
        'Five events in the last 540 million years stand out for the proportion of life they removed. The largest, at the end of the Permian, took perhaps 90% of marine species and 70% of land vertebrates.',
      detailed:
        'The causes differ. The end-Ordovician was rapid glaciation draining the shallow shelf seas; the Late Devonian a series of pulses with widespread ocean anoxia; the end-Permian the Siberian Traps erupting through coal deposits; the end-Triassic volcanism associated with the break-up of Pangaea; the end-Cretaceous an asteroid impact with the Deccan Traps erupting across the same interval. What they share is speed relative to the ability of ecosystems to track the change.',
    },
    questions: [
      {
        id: 'largest',
        prompt: 'Which was the largest mass extinction, and what caused it?',
        options: [
          {
            id: 'a',
            text: 'The end-Cretaceous, caused by an asteroid impact',
          },
          {
            id: 'b',
            text: 'The end-Permian, caused principally by the Siberian Traps erupting through coal deposits, warming and acidifying the oceans and stripping their oxygen',
            correct: true,
          },
          {
            id: 'c',
            text: 'The end-Ordovician, caused by a gamma-ray burst',
          },
          {
            id: 'd',
            text: 'The Late Devonian, caused by the spread of land plants',
          },
        ],
        explanation:
          'The end-Cretaceous is the famous one because of the dinosaurs; the end-Permian was considerably larger and took around ten million years to recover from.',
      },
      {
        id: 'common',
        prompt: 'What do the big five events have in common?',
        options: [
          {
            id: 'a',
            text: 'They were all caused by asteroid impacts',
          },
          {
            id: 'b',
            text: 'They all occurred at intervals of roughly 26 million years',
          },
          {
            id: 'c',
            text: 'They all involved environmental change fast enough that ecosystems could not track it',
            correct: true,
          },
          {
            id: 'd',
            text: 'They all removed the same proportion of species',
          },
        ],
        explanation:
          'The causes differ — glaciation, anoxia, volcanism, impact — and so do the magnitudes. Speed relative to adaptive capacity is the shared feature, which is why current rates of change are the relevant comparison.',
      },
    ],
  },

  'how-life-recovers-after-mass-extinction': {
    summary: {
      essential:
        'Life has recovered from every mass extinction, over millions of years, and has never come back as what it was. Recovery is not restoration.',
      detailed:
        'The immediate aftermath is dominated by a handful of tolerant generalists — the clam Claraia in the sea, Lystrosaurus on land — which bloom for a few hundred thousand to a few million years and then fade as diversity rebuilds. Recovery to pre-extinction diversity typically takes five to ten million years, longer after the end-Permian. And the cast is different: brachiopods never regained their Palaeozoic position, and bivalves and gastropods took over.',
    },
    questions: [
      {
        id: 'disaster-taxa',
        prompt: 'What are disaster taxa?',
        options: [
          {
            id: 'a',
            text: 'Species that go extinct first during a mass extinction',
          },
          {
            id: 'b',
            text: 'Tolerant generalists with fast reproduction that dominate the immediate aftermath, blooming while there is nothing to compete with them',
            correct: true,
          },
          {
            id: 'c',
            text: 'Species that cause mass extinctions',
          },
          {
            id: 'd',
            text: 'Species that survive only in refuges',
          },
        ],
        explanation:
          'They are usually unremarkable before the event and suddenly the only thing around. Claraia and Lystrosaurus dominate their respective aftermath assemblages to an extent that is itself diagnostic of an emptied world.',
      },
      {
        id: 'not-reassuring',
        prompt:
          'Why is the fact that life always recovers not reassuring about present extinction rates?',
        options: [
          {
            id: 'a',
            text: 'Because current rates exceed anything in the fossil record',
          },
          {
            id: 'b',
            text: 'Because recovery takes millions of years — a duration with no relationship to human civilisation — and what returns is never what was lost',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because recovery has only happened five times',
          },
          {
            id: 'd',
            text: 'Because modern ecosystems are too degraded to recover at all',
          },
        ],
        explanation:
          'The fossil record establishes what recovery costs in time, and the number is large. Whether the present episode reaches the magnitude of the big five is not established and depends on what happens next.',
      },
    ],
  },
};
