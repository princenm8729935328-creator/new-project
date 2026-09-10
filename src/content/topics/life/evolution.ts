/**
 * Origin & Evolution of Life — evolution itself.
 *
 * This group carries most of the section's misconception load, so several
 * topics exist purely to dismantle a specific wrong picture: that nature
 * chooses, that evolution is a ladder, that humans are its destination, that
 * "fittest" means strongest, that complexity is the direction of travel.
 *
 * The tone throughout is deliberate. These are not corrections delivered as
 * scoldings; each wrong picture is treated as a reasonable thing to have
 * inferred from the way evolution is usually described, and then taken apart
 * by showing what the mechanism actually does. The distinction the brief asks
 * for most insistently — process versus agent — is made in three separate
 * topics because one is not enough to dislodge it.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const LIFE = sectionId('life');
const REVIEWED = '2026-09-10';

export const LIFE_EVOLUTION_TOPICS: readonly Topic[] = [
  {
    id: topicId('what-is-evolution'),
    slug: 'what-is-evolution',
    sectionId: LIFE,
    order: 27,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What is evolution?',
    subtitle:
      'Change in what a population is made of, across generations. Nothing more mysterious than that.',
    summary: {
      essential:
        'Evolution is change in the inherited characteristics of a population over generations. Individuals do not evolve — you will die with the genes you were born with. Populations evolve, because the mix of variants in them shifts as some individuals leave more descendants than others.',
      detailed:
        'This is a much smaller claim than the word usually carries. It does not assert progress, improvement, or direction. It asserts that the composition of populations changes, and that this change is measurable, observed, and explained by known mechanisms.',
      technical:
        'Formally, evolution is change in allele frequencies in a population over time. The mechanisms are mutation, genetic drift, gene flow, and natural selection; only selection systematically produces adaptation, but the others are not negligible and drift dominates for effectively neutral variants.',
    },
    glossaryTerms: [glossaryTermId('natural-selection'), glossaryTermId('common-ancestry')],
    related: [
      topicId('variation-heredity-and-selection'),
      topicId('natural-selection'),
      topicId('evolution-is-not-a-ladder'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The single most useful correction is that evolution happens to populations, not to individuals. A giraffe does not stretch its neck and pass on a longer one. What happens is that within a population of giraffes there is variation in neck length, that variation is partly inherited, and if longer-necked individuals leave slightly more offspring, then the average in the next generation is slightly higher. No individual changed. The population did.',
          detailed:
            'Once that is clear, most of the confusion dissolves. Species do not decide to adapt. Nothing is trying to become anything. There is only a distribution of variants, and a filter — the world — that lets some through more readily than others. The filtering is not intentional, and the variation it acts on is generated without regard to what would be useful.',
        },
      },
      {
        id: 'viz-population-shift',
        kind: 'visualization',
        visualizationId: visualizationId('population-shift'),
      },
      {
        id: 'claim-evolution-observed',
        kind: 'claim',
        statement: {
          essential:
            'Evolution is observed directly. It has been measured in wild populations across decades, in laboratory populations across tens of thousands of generations, and in the emergence of antibiotic resistance in hospitals.',
          detailed:
            'Peter and Rosemary Grant spent forty years measuring beak sizes in Galápagos finches, individual by individual, generation by generation. When drought killed the plants with small seeds, birds with larger beaks survived better, and average beak size rose measurably within a single generation. When conditions reversed, so did the trend. This is not inference from fossils; it is a directly observed change in a wild population.',
          technical:
            'Richard Lenski’s long-term experiment has followed twelve populations of E. coli for over 70,000 generations with frozen samples at intervals — a literal fossil record that can be revived and competed against later strains. Fitness relative to the ancestor has increased throughout, without plateauing, and one population evolved an entirely new metabolic capability.',
        },
        evidence: 'established',
        references: [referenceId('grant-grant-2002-finches'), referenceId('lenski-2015-ltee')],
      },
      {
        id: 'two-claims',
        kind: 'prose',
        text: {
          essential:
            'It helps to separate two things that get bundled together. One is the historical claim: living species descend, with modification, from earlier ones, and all of them from common ancestors. The other is the mechanistic claim: the main process producing the modifications is natural selection acting on inherited variation.',
          detailed:
            'The historical claim is supported independently of any particular mechanism, by the fossil record, by the nested pattern of shared features, by shared genetic errors in the same positions in related species, and by biogeography. The mechanistic claim is supported by direct observation of selection, by population genetics, and by experiment. The evidence for both is strong, but they are separate propositions, and keeping them apart makes the structure of the evidence clearer.',
        },
      },
      {
        id: 'misconception-theory',
        kind: 'callout',
        tone: 'misconception',
        title: '“It’s only a theory”',
        text: {
          essential:
            'In ordinary speech a theory is a guess. In science it is the opposite: an explanatory framework that has survived extensive testing and organises a large body of evidence. Gravity is a theory. Germ theory is a theory. The word marks explanatory scope, not tentativeness.',
          detailed:
            'The distinction worth drawing is between the fact that populations change and share ancestry — which is observed — and the theory that explains how and why. Working biologists argue vigorously about mechanisms: the relative importance of drift versus selection, how much of the genome is functional, how species form. None of those disputes touches whether evolution happens.',
        },
        references: [referenceId('mayr-1982-growth-biology')],
      },
    ],
    furtherReading: [referenceId('darwin-1859')],
  },

  {
    id: topicId('variation-heredity-and-selection'),
    slug: 'variation-heredity-and-selection',
    sectionId: LIFE,
    order: 28,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Variation, heredity and selection',
    subtitle:
      'Three ingredients. If all three are present, change is not optional — it is arithmetic.',
    summary: {
      essential:
        'Evolution by natural selection requires exactly three things. Individuals must differ. Those differences must be at least partly inherited. And the differences must affect how many offspring individuals leave. Given all three, the population changes. It cannot not change.',
      detailed:
        'This is what makes the argument so robust. It is not a hypothesis about biology so much as a consequence of the setup. Anything with variation, heredity and differential reproduction will evolve — which is why the same logic applies to bacteria, to elephants, and to computer programs in an evolutionary algorithm.',
      technical:
        'The breeder’s equation R = h²S formalises the response to selection: the change per generation equals the selection differential times the heritability. If heritability is zero, selection produces no lasting change no matter how strong it is — which is why the inheritance requirement is not a technicality.',
    },
    glossaryTerms: [glossaryTermId('natural-selection'), glossaryTermId('fitness')],
    related: [
      topicId('natural-selection'),
      topicId('how-adaptations-spread'),
      topicId('what-is-evolution'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Take the three conditions one at a time. Variation: no two individuals in a sexually reproducing population are identical, and even in clonal populations mutation constantly generates differences. Heredity: offspring resemble their parents more than they resemble random members of the population. Differential reproduction: some individuals leave more surviving offspring than others, and which ones do is not entirely random.',
          detailed:
            'Now notice that no additional ingredient is needed. If tall individuals leave more offspring, and tallness is heritable, the next generation is taller on average. That is not a biological law requiring evidence; it is bookkeeping. Darwin’s achievement was seeing that this bookkeeping, run for long enough, could account for the appearance of design.',
        },
      },
      {
        id: 'viz-three-ingredients',
        kind: 'visualization',
        visualizationId: visualizationId('selection-ingredients'),
      },
      {
        id: 'claim-heritability',
        kind: 'claim',
        statement: {
          essential:
            'Selection only produces lasting change to the extent that the selected trait is inherited. A strongly selected trait with no heritable basis leaves no evolutionary trace at all.',
          detailed:
            'This is easy to demonstrate and easy to forget. Body size in many organisms depends heavily on nutrition. Select the largest individuals in a poorly fed population and you may be selecting the best-fed rather than the genetically largest — and their offspring, on an average diet, will be average. Animal breeders learned this the expensive way long before anyone could measure heritability directly.',
          technical:
            'Heritability in the narrow sense, h², is the proportion of phenotypic variance attributable to additive genetic variance. It is a property of a population in an environment, not of a trait in itself — the same trait can have high heritability in one setting and near zero in another, which is a frequent source of misinterpretation.',
        },
        evidence: 'established',
        references: [referenceId('darwin-1859'), referenceId('mayr-1982-growth-biology')],
      },
      {
        id: 'mutation-blind',
        kind: 'prose',
        text: {
          essential:
            'Where does the variation come from? Mutation, mostly — copying errors, radiation damage, chemical accidents — plus, in sexually reproducing organisms, the reshuffling of existing variants each generation. The crucial point is that mutations happen without reference to whether they would be useful. A population under heat stress does not start producing heat-tolerance mutations.',
          detailed:
            'This is not a philosophical assumption; it has been tested. In 1943 Luria and Delbrück designed an experiment to distinguish two possibilities: do bacteria develop resistance in response to being attacked by a virus, or does resistance already exist by chance and get selected? The statistical distribution of resistant colonies across replicate cultures distinguishes the two sharply, and the answer was unambiguous. The mutations were there beforehand.',
        },
      },
      {
        id: 'note-not-random',
        kind: 'callout',
        tone: 'note',
        title: '“Random” means undirected, not uniform',
        text: {
          essential:
            'Mutations are random with respect to what would be useful. They are not random in the sense of equally likely everywhere. Some parts of the genome mutate far more often than others, some kinds of change are much commoner than others, and some organisms increase their overall mutation rate under stress.',
          detailed:
            'None of that makes mutation directed. A stressed bacterium that raises its mutation rate is not producing better-targeted mutations; it is producing more mutations of all kinds, most of them harmful, which is a gamble that pays off only because the population is in trouble anyway. The distinction between undirected and uniform is worth holding onto, because critics of evolution often attack the uniform version, which nobody claims.',
        },
        references: [referenceId('lenski-2015-ltee')],
      },
    ],
    furtherReading: [referenceId('darwin-1859')],
  },

  {
    id: topicId('natural-selection'),
    slug: 'natural-selection',
    sectionId: LIFE,
    order: 29,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Natural selection',
    subtitle: 'A filter, not a designer — and the filter is just the world.',
    summary: {
      essential:
        'Natural selection is what happens when inherited differences affect survival and reproduction. That is the entire mechanism. There is no selector — the "selection" is simply the consequence of some variants doing better than others in a particular place at a particular time.',
      detailed:
        'What makes it powerful is accumulation. A variant that leaves one percent more offspring than average will, over enough generations, go from rare to universal. Small advantages compound, which is how a process with no foresight produces structures that look designed.',
      technical:
        'A beneficial allele with selection coefficient s in a population of effective size N fixes with probability approximately 2s when s ≫ 1/N. For s = 0.01, fixation takes of order (2/s)·ln(2N) generations — a few thousand for typical populations, which is geologically instantaneous.',
    },
    glossaryTerms: [
      glossaryTermId('natural-selection'),
      glossaryTermId('adaptation'),
      glossaryTermId('fitness'),
    ],
    related: [
      topicId('does-nature-choose'),
      topicId('how-adaptations-spread'),
      topicId('why-survival-of-the-fittest-is-often-misunderstood'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Imagine a population of moths on tree bark, some slightly darker than others, in a place where birds hunt by sight. The darker ones are harder to see against the bark. Nobody decides this. No moth is chosen. It is simply that birds find the pale ones more often, so pale moths leave fewer offspring, so the next generation is slightly darker on average. Run this for fifty generations and the population has changed colour.',
          detailed:
            'Now notice how little the process requires. No intention anywhere. No knowledge of what would be useful. No mechanism connecting the need to the variation. Just differences that already exist, and an environment in which those differences have consequences. The word "selection" is a metaphor borrowed from animal breeding, and it is the source of most of the confusion, because in breeding there really is a selector.',
        },
      },
      {
        id: 'viz-selection',
        kind: 'visualization',
        visualizationId: visualizationId('natural-selection-lab'),
      },
      {
        id: 'claim-cumulative',
        kind: 'claim',
        statement: {
          essential:
            'Small reproductive advantages accumulate. A variant that produces one percent more surviving offspring per generation will spread through a population within a few thousand generations, which is geologically instantaneous.',
          detailed:
            'This is the part that intuition gets wrong, because a one percent advantage sounds negligible. It is not — it is compound interest. Over a thousand generations a one percent per-generation edge is a factor of twenty thousand. What limits the spread is not the size of the advantage but chance in small populations, where a rare beneficial variant can be lost by bad luck before it establishes.',
          technical:
            'Haldane showed that even a strongly beneficial mutation is usually lost while rare: its probability of eventual fixation is about 2s, so a 1% advantage fixes only about 2% of the times it arises. Adaptation therefore depends on the mutation recurring, which is why population size matters so much.',
        },
        evidence: 'established',
        references: [referenceId('lenski-2015-ltee'), referenceId('darwin-1859')],
      },
      {
        id: 'kinds',
        kind: 'prose',
        text: {
          essential:
            'Selection does not always push in one direction. Sometimes it favours one extreme, and the population shifts — as with beak size in drought. Sometimes it favours the average and removes both extremes, which is why human birth weight has a narrow optimum: too small is dangerous, too large is dangerous. Sometimes it favours both extremes over the middle, which can split a population in two.',
          detailed:
            'And often it does not push consistently at all. The Grants found that selection on finch beaks reversed repeatedly as wet and dry years alternated, so that over forty years the net change was much smaller than any single episode. This matters for reading the fossil record: long periods of apparent stasis need not mean selection was absent, only that it was not pointing the same way for long.',
        },
      },
      {
        id: 'misconception-designer',
        kind: 'callout',
        tone: 'misconception',
        title: '“Selection produces the variation it needs”',
        text: {
          essential:
            'Selection cannot create anything. It can only sift what is already there. If the useful variant does not arise, the population does not adapt — it declines, or goes extinct, or persists imperfectly adapted. This happens constantly.',
          detailed:
            'This is why organisms are full of arrangements no designer would choose. The vertebrate retina has its light-sensing cells facing backwards, with nerves and blood vessels in front of them and a blind spot where they exit. Octopus eyes, evolved separately, are wired the sensible way round. Selection improved the vertebrate eye enormously within the constraints of its starting configuration, and could not go back and start again.',
        },
        references: [referenceId('gould-lewontin-1979-spandrels')],
      },
    ],
    furtherReading: [referenceId('wallace-1858')],
  },

  {
    id: topicId('how-adaptations-spread'),
    slug: 'how-adaptations-spread',
    sectionId: LIFE,
    order: 30,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How adaptations spread',
    subtitle: 'One individual, one mutation, and then a lot of arithmetic.',
    summary: {
      essential:
        'Every adaptation starts as a single mutation in a single individual. For it to become a feature of the species, it has to spread from that one copy to essentially all copies in the population — and most beneficial mutations fail to, purely by chance, before they get established.',
      detailed:
        'This is why evolution is slow even when selection is strong, and why population size matters enormously. Large populations generate more mutations and lose fewer of them to chance; small populations are dominated by luck.',
      technical:
        'Fixation probability for a beneficial allele is approximately 2s for s ≫ 1/N_e, and 1/(2N_e) for neutral variants. Genetic drift dominates when |s| < 1/(2N_e), which means the same mutation can be effectively neutral in a small population and strongly selected in a large one.',
    },
    glossaryTerms: [glossaryTermId('adaptation'), glossaryTermId('fitness')],
    related: [
      topicId('natural-selection'),
      topicId('evolutionary-contingency-how-much-is-chance'),
      topicId('variation-heredity-and-selection'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Follow a single new mutation. It appears in one individual, in one copy. Even if it is genuinely advantageous, that individual might be eaten before reproducing, or might have a poor year, or might simply not pass on that particular chromosome copy. Most beneficial mutations vanish in the first few generations for reasons that have nothing to do with their merit.',
          detailed:
            'J. B. S. Haldane worked out the arithmetic in the 1920s: a mutation conferring a one percent advantage has roughly a two percent chance of ever becoming common. Ninety-eight times out of a hundred it disappears. Adaptation therefore depends on the same useful mutation arising repeatedly, which depends on how many individuals there are and how often they reproduce.',
        },
      },
      {
        id: 'viz-fixation',
        kind: 'visualization',
        visualizationId: visualizationId('allele-fixation'),
      },
      {
        id: 'claim-drift',
        kind: 'claim',
        statement: {
          essential:
            'Chance changes gene frequencies too, and in small populations it can overwhelm selection entirely. This is genetic drift, and it is not a minor correction to the theory.',
          detailed:
            'Drift is simply sampling error. If only some individuals reproduce, the genes in the next generation are a sample of the genes in this one, and samples differ from what they were drawn from. In a population of a million, the sampling error is tiny. In a population of fifty, it is large enough that a variant with a real advantage can be lost, and a mildly harmful one can become universal.',
          technical:
            'Kimura’s neutral theory holds that most molecular variation is effectively neutral and its dynamics are governed by drift rather than selection. This is not an alternative to selection but a claim about which parts of the genome selection acts on — a distinction that took two decades of argument to settle and remains partly contested at the margins.',
        },
        evidence: 'established',
        references: [referenceId('lenski-2015-ltee')],
      },
      {
        id: 'linkage',
        kind: 'prose',
        text: {
          essential:
            'There is a further complication that shapes real genomes. Genes sit on chromosomes, physically next to each other, and are inherited in blocks. So when selection sweeps a beneficial variant to fixation, it drags its neighbours along whether or not they are any good.',
          detailed:
            'This leaves a detectable signature: a region of the genome with unusually little variation, because everything in the neighbourhood of the selected gene got carried along and diversity was wiped out. Scanning genomes for such signatures is now a standard way of finding genes that have been under recent strong selection — it is how the lactase-persistence and high-altitude adaptations in human populations were identified.',
        },
      },
    ],
    furtherReading: [referenceId('blount-2008-citrate')],
  },

  {
    id: topicId('does-nature-choose'),
    slug: 'does-nature-choose',
    sectionId: LIFE,
    order: 31,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Does nature “choose”?',
    subtitle: 'No. And the word "selection" is the reason so many people think otherwise.',
    summary: {
      essential:
        'Nature has no demonstrated conscious plan, no destination, and no capacity to choose anything. Natural selection is a population-level process in which inherited differences affect survival and reproduction in particular environments. That is a description of an outcome, not of a decision.',
      detailed:
        'The confusion is built into the vocabulary. Darwin borrowed "selection" from animal breeding, where a breeder really does choose. He knew the analogy was risky and defended it anyway because it conveyed the effect. The cost has been a century and a half of readers picturing an agent.',
      technical:
        'Teleological language in biology — "the eye evolved in order to see", "selection favours" — is a shorthand for cumulative differential reproduction. It is convenient and, used carefully, harmless. Used loosely, it smuggles in an agent that the mechanism does not contain and does not need.',
    },
    glossaryTerms: [glossaryTermId('natural-selection'), glossaryTermId('adaptation')],
    related: [
      topicId('evolution-has-no-conscious-goal'),
      topicId('natural-selection'),
      topicId('does-evolution-have-a-purpose'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Say what actually happens, in a sentence with no agent in it. In a population, individuals differ. Some of those differences are inherited. In a given environment, some individuals leave more surviving offspring than others, and which ones do is partly determined by those inherited differences. Therefore the composition of the next generation differs from that of this one.',
          detailed:
            'There is nothing in that description that chooses. There is no point at which anything evaluates a variant, forms a preference, or acts on it. There is a distribution of variants and a world that has consequences. "Selection" names the statistical result of those consequences, in the same way that "erosion" names what happens when rain falls on rock without anyone deciding which grains to remove.',
        },
      },
      {
        id: 'viz-no-chooser',
        kind: 'visualization',
        visualizationId: visualizationId('selection-not-choice'),
      },
      {
        id: 'claim-no-agent',
        kind: 'claim',
        statement: {
          essential:
            'Natural selection is a process, not an agent. There is no evidence of any entity making choices about which organisms survive, and the mechanism requires none.',
          detailed:
            'This is not a claim that could be settled by finding better evidence in either direction; it is a statement about what the theory contains. Selection is defined as the differential reproduction of heritable variants. Adding a chooser to it would not explain anything the process does not already explain, and it would need its own explanation.',
          technical:
            'Ernst Mayr distinguished proximate causes — how a mechanism works in an individual — from ultimate causes, the evolutionary history that made the mechanism common. Teleological-sounding statements about ultimate causes are legitimate shorthand for that history. They become errors when read as statements about intention.',
        },
        evidence: 'established',
        references: [referenceId('mayr-1982-growth-biology'), referenceId('darwin-1859')],
      },
      {
        id: 'why-it-matters',
        kind: 'prose',
        text: {
          essential:
            'Why insist on this? Because the agent version generates predictions that are simply false. If nature chose, adaptations would be optimal, they would appear when needed, and species facing a threat would develop what the situation required. None of that happens. Species go extinct constantly, precisely because the useful variation did not arise. Organisms are full of clumsy compromises.',
          detailed:
            'The agent version also gets misused in ways that are worth naming. "Nature selected humans" and "the fittest deserve to win" are not conclusions from evolutionary biology; they are the agent metaphor extended into a claim about worth. Natural selection describes what happened to gene frequencies in particular environments. It contains no notion of merit, and licenses no conclusions about what ought to be.',
        },
      },
      {
        id: 'misconception-chosen',
        kind: 'callout',
        tone: 'misconception',
        title: '“Humans were chosen by nature”',
        text: {
          essential:
            'Nothing chose us. Our ancestors happened to have variants that worked in the environments they lived in, and enough luck to survive several near-extinctions. The same is true of every beetle, every fungus and every bacterium alive today. Being here is not a verdict.',
          detailed:
            'Genetic evidence suggests our own lineage passed through periods of very low population size, where a modest amount of additional bad luck would have ended it. And the mammals that produced us survived the end-Cretaceous impact largely by being small, unspecialised and able to shelter — traits that were useless advantages for a hundred million years and decisive for one afternoon. That is not selection recognising potential.',
        },
        references: [referenceId('gould-1989-wonderful-life')],
      },
    ],
    furtherReading: [referenceId('mayr-1982-growth-biology')],
  },

  {
    id: topicId('evolution-has-no-conscious-goal'),
    slug: 'evolution-has-no-conscious-goal',
    sectionId: LIFE,
    order: 32,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Evolution has no conscious goal',
    subtitle:
      'It cannot plan, cannot anticipate, and cannot accept a short-term loss for a long-term gain.',
    summary: {
      essential:
        'Evolution has no foresight. It cannot make an organism temporarily worse in order to make it better later. Every step has to be viable on its own terms in the environment of the moment, which is a severe constraint and explains a great deal about how organisms are built.',
      detailed:
        'This is the practical consequence of having no goal. A designer can dismantle a working mechanism and rebuild it better. Evolution can only modify what is there while it keeps functioning, which is why so much of biology looks like a structure that has been repeatedly extended rather than planned.',
      technical:
        'Adaptive landscapes make the constraint explicit: selection climbs local gradients and cannot cross valleys of reduced fitness, so populations become stuck on local optima. Escape requires drift in small populations, environmental change that reshapes the landscape, or neutral paths through sequence space.',
    },
    glossaryTerms: [glossaryTermId('adaptation'), glossaryTermId('natural-selection')],
    related: [
      topicId('does-nature-choose'),
      topicId('why-evolution-produces-trade-offs'),
      topicId('evolution-is-not-a-ladder'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The constraint is easiest to see in a specific case. The nerve that controls part of the larynx in mammals does not run from the brain to the throat directly. It descends into the chest, loops under an artery near the heart, and comes back up. In a human that is a detour of tens of centimetres. In a giraffe it is a detour of about four metres, to reach a destination a few centimetres away.',
          detailed:
            'The reason is history. In fish the equivalent nerve runs a short, sensible path to the gills. As the neck extended over hundreds of millions of years, the nerve stayed on the wrong side of the artery and was dragged along. At no point could the nerve be detached and rerouted, because there is no viable intermediate in which it is disconnected. Each generation was fine; the accumulated result is absurd.',
        },
      },
      {
        id: 'viz-local-optimum',
        kind: 'visualization',
        visualizationId: visualizationId('fitness-landscape'),
      },
      {
        id: 'claim-no-foresight',
        kind: 'claim',
        statement: {
          essential:
            'Every evolutionary step must be viable at the time it occurs. Evolution cannot accept a temporary decline in fitness in exchange for a later gain, because there is no mechanism that could hold a lineage through the decline.',
          detailed:
            'This produces a specific, testable prediction: organisms should show local rather than global optimisation. They should be well adapted given their starting point, and poorly adapted compared with what an unconstrained designer could achieve. That is exactly what is observed — the vertebrate retina, the mammalian birth canal, the human spine and knee, the pharynx that routes food and air through the same tube.',
          technical:
            'Sewall Wright’s shifting-balance theory addressed exactly this problem: how a population escapes a local optimum. His proposed answer — subdivision into small demes where drift can cross valleys, followed by migration — remains debated. The problem it addresses is real regardless of whether that solution is the right one.',
        },
        evidence: 'established',
        references: [referenceId('gould-lewontin-1979-spandrels')],
      },
      {
        id: 'exaptation',
        kind: 'prose',
        text: {
          essential:
            'There is a route around the constraint that does not require foresight: a structure that evolved for one job can be repurposed for another. Feathers appear in the fossil record on dinosaurs that could not fly, where they plausibly served for insulation or display. Once present, they turned out to be useful for gliding.',
          detailed:
            'This is called exaptation, and it dissolves many of the "what use is half a wing" objections. Half a wing is not a bad wing; it is a good something-else that later became a wing. The same applies to the mammalian ear, whose tiny bones were part of a reptilian jaw joint — a transition documented in the fossil record with unusual completeness, and one where every intermediate had a working jaw and working hearing.',
        },
      },
    ],
    furtherReading: [referenceId('gould-lewontin-1979-spandrels')],
  },

  {
    id: topicId('evolution-is-not-a-ladder'),
    slug: 'evolution-is-not-a-ladder',
    sectionId: LIFE,
    order: 33,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Evolution is not a ladder',
    subtitle: 'It is a branching bush, and every living twig is equally far from the root.',
    summary: {
      essential:
        'The familiar image of a line of creatures progressing from fish to human is wrong in a specific way: it implies a single track with humans at the end. Evolution branches. Every species alive today has been evolving for exactly the same amount of time since the last common ancestor.',
      detailed:
        'Chimpanzees are not an earlier stage on the way to us. They are our cousins, evolving alongside us for the same six or seven million years since we shared an ancestor — an ancestor that was neither a human nor a chimpanzee.',
      technical:
        'The ladder picture is a survival of the pre-evolutionary scala naturae. Phylogenetically it corresponds to treating a tree as a line by ignoring all branches that do not lead to the taxon of interest — which is always possible for any taxon, and therefore tells you only which one the illustrator chose.',
    },
    glossaryTerms: [glossaryTermId('common-ancestry'), glossaryTermId('convergent-evolution')],
    related: [
      topicId('common-ancestry-and-the-tree-of-life'),
      topicId('are-humans-the-goal-of-evolution'),
      topicId('is-evolution-progress'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The picture everyone has seen — a hunched ape gradually straightening into a striding man — was drawn for a 1965 book and has been reproduced ever since. It is memorable and it is misleading in almost every respect. It shows a single lineage where the actual record shows many branches, several of them coexisting; it implies a direction; and it puts one currently living species at the end as though the sequence were aiming there.',
          detailed:
            'Replace it with a bush. From a common root, lineages split repeatedly. Most branches end — over ninety-nine percent of species that have ever existed are extinct. The surviving twigs are all at the same height, because they have all been growing for the same length of time. There is no top.',
        },
      },
      {
        id: 'viz-bush',
        kind: 'visualization',
        visualizationId: visualizationId('tree-not-ladder'),
      },
      {
        id: 'claim-equal-time',
        kind: 'claim',
        statement: {
          essential:
            'Every organism alive today is exactly as evolved as every other. A bacterium in a pond and a human being have both been evolving continuously since their last shared ancestor, which was the same ancestor at the same time.',
          detailed:
            'It is worth stating this carefully, because it sounds like a rhetorical flourish and it is a straightforward consequence of how descent works. If two lineages split at some point, then both have accumulated the same number of years of change since. Bacteria have accumulated far more generations of change than we have, since their generation time is measured in minutes.',
          technical:
            'Rate of molecular change differs between lineages, so "equally evolved" is not a claim about equal genetic divergence. It is a claim about elapsed time and about phylogenetic position: no living species is ancestral to another living species, because ancestors are, by definition, in the past.',
        },
        evidence: 'established',
        references: [referenceId('hug-2016-tree-of-life')],
      },
      {
        id: 'living-ancestors',
        kind: 'prose',
        text: {
          essential:
            'A related error is calling some living species "primitive" or describing them as living fossils. Coelacanths, horseshoe crabs and sharks are often described this way. But none of them is our ancestor, and none has stopped evolving. They have retained a body plan that continues to work, which is a statement about their ecology rather than about their evolutionary status.',
          detailed:
            'Coelacanths are a good example of how the label misleads. The living species differ substantially from the fossil forms and are not the same genus. Their genome has been sequenced and shows ordinary rates of change in most respects. What is conserved is overall shape, which is what a fossil records — so "living fossil" partly describes the limitations of fossils.',
        },
      },
      {
        id: 'misconception-descended',
        kind: 'callout',
        tone: 'misconception',
        title: '“If we evolved from monkeys, why are there still monkeys?”',
        text: {
          essential:
            'Because we did not evolve from any monkey now living. We and modern monkeys share an ancestor that was neither. Asking why monkeys still exist is like asking why, if you are descended from your grandmother, your cousins still exist.',
          detailed:
            'The question also contains a hidden assumption worth surfacing: that a descendant replaces its ancestor. Speciation usually happens when a population splits, and both halves continue. The ancestral form may persist unchanged in one place while the other diverges. Nothing requires the parent lineage to disappear.',
        },
        references: [referenceId('gould-1996-full-house')],
      },
    ],
    furtherReading: [referenceId('gould-1996-full-house')],
  },

  {
    id: topicId('are-humans-the-goal-of-evolution'),
    slug: 'are-humans-the-goal-of-evolution',
    sectionId: LIFE,
    order: 34,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Are humans the goal of evolution?',
    subtitle: 'No. We are one surviving branch among millions, and a recent one.',
    summary: {
      essential:
        'There is no scientific sense in which evolution was aiming at us. We are one twig on a bush with millions of living twigs and vastly more dead ones. Our lineage is young, has come close to disappearing more than once, and exists because of a long series of accidents that could have gone otherwise.',
      detailed:
        'The feeling that we must be the point is understandable — we are the ones asking — but it is a selection effect. Any species capable of asking would find itself at the end of its own history, and would find that history leading to it.',
      technical:
        'By any standard biological measure, humans are unremarkable: one species among an estimated 8.7 million eukaryotic species, with a small global biomass relative to plants and bacteria, and a lineage a few million years old against a biosphere four billion years old.',
    },
    glossaryTerms: [glossaryTermId('common-ancestry'), glossaryTermId('biodiversity')],
    related: [
      topicId('evolution-is-not-a-ladder'),
      topicId('why-intelligence-is-not-evolutions-inevitable-destination'),
      topicId('why-humans-are-not-evolutions-final-destination'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Consider the numbers first, because they are bracing. Life has existed for roughly four billion years. Anatomically modern humans have existed for about three hundred thousand of those — about seven thousandths of one percent. If the history of life were a calendar year, we appear in the last twenty minutes of the thirty-first of December.',
          detailed:
            'Now consider mass. Plants make up about eighty percent of all the biomass on Earth. Bacteria account for another substantial share. All animals together are a few tenths of one percent, and humans are a small fraction of that — outweighed several times over by the arthropods, and outweighed by our own livestock. By the ordinary measures a biologist would use, we are a minor component of the biosphere.',
        },
      },
      {
        id: 'viz-biomass',
        kind: 'visualization',
        visualizationId: visualizationId('biomass-pyramid'),
      },
      {
        id: 'claim-contingency',
        kind: 'claim',
        statement: {
          essential:
            'Our existence depended on a long chain of contingent events, several of which could easily have gone differently. There is no evidence that any of them was aimed at producing us.',
          detailed:
            'Mammals spent over a hundred million years as small, mostly nocturnal animals while dinosaurs occupied the large-body niches. That changed because an asteroid roughly ten kilometres across struck a particular part of the Yucatán, in shallow sulfur-rich rock that maximised the atmospheric effects, at a particular angle. Change the timing by an hour and it lands in deep ocean instead.',
          technical:
            'Genetic evidence indicates our own lineage experienced severe bottlenecks; estimates of the effective population size of the ancestral human population are in the low thousands to low tens of thousands, which is small enough that extinction was a live possibility rather than a remote one.',
        },
        evidence: 'inference',
        references: [
          referenceId('gould-1989-wonderful-life'),
          referenceId('schulte-2010-chicxulub'),
        ],
      },
      {
        id: 'the-dispute',
        kind: 'prose',
        text: {
          essential:
            'There is a real scientific disagreement adjacent to this, and it should not be flattened. Stephen Jay Gould argued that if you rewound the tape of life and replayed it, you would get something utterly different — that history is dominated by contingency. Simon Conway Morris argued the opposite: that convergence is so pervasive that certain solutions, possibly including intelligence, are close to inevitable.',
          detailed:
            'Both are pointing at real evidence. Convergence genuinely is striking — eyes have evolved dozens of times, powered flight four times, complex societies many times. But convergence on a solution to a physical problem is not the same as convergence on a specific lineage. Note also that even Conway Morris’s position does not make humans a goal; at most it makes humanlike intelligence a likely outcome somewhere, at some time.',
        },
      },
      {
        id: 'note-anthropic',
        kind: 'callout',
        tone: 'note',
        title: 'Why the feeling is so persistent',
        text: {
          essential:
            'Every species is at the end of its own lineage. A beetle tracing its ancestry would find four billion years of history leading precisely to beetles. The sense that the whole process was heading toward us comes from looking backwards along one path and not seeing the branches we did not take.',
          detailed:
            'This is a selection effect in the technical sense: the observation is guaranteed by the existence of the observer, so it carries no information about the process. Only a species capable of wondering whether it was the goal could wonder about it — which is why the wondering itself cannot be evidence.',
        },
        references: [referenceId('gould-1996-full-house')],
      },
    ],
    furtherReading: [referenceId('conway-morris-2003-convergence')],
  },

  {
    id: topicId('is-evolution-progress'),
    slug: 'is-evolution-progress',
    sectionId: LIFE,
    order: 35,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Is evolution the same as progress?',
    subtitle: 'Only if you first decide what counts as better — and biology does not supply that.',
    summary: {
      essential:
        'Evolution produces organisms better suited to particular environments at particular times. It does not produce organisms that are better in any general sense, because there is no general sense available. Better at what, and where, and when?',
      detailed:
        'A polar bear is superbly adapted, and would die within days in the Sahara. A cave fish that has lost its eyes is better adapted to a cave. Adaptation is always relative to circumstances, and circumstances change — which means today’s improvement is tomorrow’s liability.',
      technical:
        'Apparent long-term trends toward complexity are largely explained by a bounded random walk: complexity has a hard lower limit and no upper one, so variance increases and the maximum rises while the mode does not move. Gould called this the difference between a trend in the maximum and a trend in the distribution.',
    },
    glossaryTerms: [glossaryTermId('adaptation'), glossaryTermId('fitness')],
    related: [
      topicId('why-complex-life-is-not-automatically-better'),
      topicId('evolution-is-not-a-ladder'),
      topicId('why-evolution-sometimes-makes-organisms-simpler'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The question sounds empirical and is not. To ask whether evolution produces progress you must first say what progress would be — and every candidate answer turns out to be a preference rather than a measurement. More complex? Larger? More intelligent? More numerous? Longer-lasting as a lineage? These rank organisms in completely different orders.',
          detailed:
            'Take the last one seriously for a moment. If persistence is the measure, bacteria have been going for three and a half billion years and show no sign of difficulty, while most mammal species last a couple of million. If abundance is the measure, the winner is a marine bacterium nobody had identified until 1986. If total biomass is the measure, plants win overwhelmingly. Choosing intelligence as the criterion is a choice, and it happens to be made by the only species that would score well on it.',
        },
      },
      {
        id: 'viz-complexity-trend',
        kind: 'visualization',
        visualizationId: visualizationId('passive-vs-driven-trend'),
      },
      {
        id: 'claim-bounded-walk',
        kind: 'claim',
        statement: {
          essential:
            'The apparent increase in maximum complexity over time is explained by a random walk against a wall. Complexity cannot go below the minimum needed to live, so variation can only spread upward — no driving force is required.',
          detailed:
            'Gould’s illustration is a drunk walking along a pavement with a wall on one side and a gutter on the other. He staggers at random. Over time he ends up in the gutter, not because he prefers it but because the wall stops him going the other way. Life started at the wall — the simplest thing that can be alive — so any random variation shows up as an increase in the maximum, while the most common form of life stays exactly where it began.',
          technical:
            'The test is whether the mode of the complexity distribution moves, not the maximum. It does not: the most abundant and most numerous organisms on Earth are still single-celled prokaryotes, as they have been throughout. A driven trend would move the whole distribution; a passive one moves only the tail.',
        },
        evidence: 'model',
        references: [
          referenceId('gould-1996-full-house'),
          referenceId('mcshea-brandon-2010-ztfel'),
        ],
      },
      {
        id: 'note-values',
        kind: 'callout',
        tone: 'caution',
        title: 'Where science stops and values begin',
        text: {
          essential:
            'Science can tell you which organisms have more cell types, larger genomes, bigger brains or longer lineages. It cannot tell you which of those constitutes being better, because "better" is not a measurable property of an organism. That judgement comes from outside biology.',
          detailed:
            'This matters historically. The idea that evolution means progress toward higher forms was used to rank human populations, to justify colonial policy and to argue against helping the poor, all under the borrowed authority of biology. The biology never supported it. Natural selection describes changes in gene frequencies in environments; it contains no scale of worth and issues no recommendations.',
        },
        references: [referenceId('mayr-1982-growth-biology')],
      },
    ],
    furtherReading: [referenceId('gould-1996-full-house')],
  },

  {
    id: topicId('why-evolution-sometimes-makes-organisms-simpler'),
    slug: 'why-evolution-sometimes-makes-organisms-simpler',
    sectionId: LIFE,
    order: 36,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why evolution sometimes makes organisms simpler',
    subtitle: 'Losing a feature is often the adaptive move — and it happens constantly.',
    summary: {
      essential:
        'Evolution removes things at least as readily as it adds them. Cave animals lose their eyes. Parasites lose their digestive systems. Flightless birds lose the ability to fly. In each case the lost structure was expensive and no longer earning its cost.',
      detailed:
        'This is not degeneration or evolution running backwards. It is ordinary adaptation. A structure that provides no benefit still costs energy to build and maintain, and mutations that damage it are no longer removed by selection — so it decays, and often the decay is actively favoured because the resources go elsewhere.',
      technical:
        'Regressive evolution proceeds by relaxed selection plus, frequently, positive selection for reduction. Genome reduction in obligate endosymbionts is the extreme case: some lineages have fallen below 150 kb and a few hundred genes, retaining only what the host cannot supply.',
    },
    glossaryTerms: [glossaryTermId('adaptation'), glossaryTermId('natural-selection')],
    related: [
      topicId('is-evolution-progress'),
      topicId('why-evolution-favors-simplicity'),
      topicId('parasitism'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'An eye is expensive. It requires a large share of the nervous system to process what it sees, it is vulnerable to injury and infection, and it consumes energy continuously. In a lightless cave it provides nothing. An animal born with a damaged eye pays less and loses nothing — so the damaged variants spread, and after enough generations the population has no functioning eyes at all.',
          detailed:
            'The Mexican cavefish shows this happening in real time. It exists as a surface form with normal eyes and multiple independent cave populations that have lost them, each having colonised its cave separately. The genetic changes differ between caves, which tells you the loss happened independently each time rather than being inherited from a single blind ancestor.',
        },
      },
      {
        id: 'viz-loss',
        kind: 'visualization',
        visualizationId: visualizationId('reductive-evolution'),
      },
      {
        id: 'claim-loss-common',
        kind: 'claim',
        statement: {
          essential:
            'Loss of complex features is common, repeated and well documented across the tree of life. Simplification is a normal evolutionary outcome, not an exception.',
          detailed:
            'The most extreme examples are among parasites and symbionts. Tapeworms have no gut at all, because they live surrounded by digested food. Some parasitic plants have lost photosynthesis entirely, including the genes for it. Bacteria that live permanently inside insect cells have shed most of their genome, retaining only the functions their host cannot provide.',
          technical:
            'Buchnera, the aphid endosymbiont, has a genome of about 640 kb against roughly 4,600 kb for its free-living relative E. coli, having lost the capacity to synthesise most compounds it now receives from the host — while retaining the pathways that make amino acids the aphid’s sap diet lacks.',
        },
        evidence: 'established',
        references: [referenceId('wolfe-li-2003-genome-reduction')],
      },
      {
        id: 'irreversibility',
        kind: 'prose',
        text: {
          essential:
            'Losses are often permanent in practice. Once the genes for a structure have accumulated enough damage, rebuilding it would require reversing many specific mutations, which selection has no way to arrange. Whales that returned to the sea did not regrow fish tails; they modified mammalian ones. Flightless birds that later needed to escape predators did not regain flight; they went extinct.',
          detailed:
            'This tendency, that complex lost structures rarely return in their original form, is sometimes called Dollo’s law. It is a statistical tendency rather than a physical law, and genuine exceptions exist — some stick insects appear to have regained wings after long flightless periods, presumably because the developmental machinery was retained for other reasons. The principle holds well enough to be useful and not so well that it should be stated as absolute.',
        },
      },
    ],
    furtherReading: [referenceId('wolfe-li-2003-genome-reduction')],
  },

  {
    id: topicId('why-evolution-produces-trade-offs'),
    slug: 'why-evolution-produces-trade-offs',
    sectionId: LIFE,
    order: 37,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why evolution produces trade-offs',
    subtitle: 'Because resources are finite, and every improvement is paid for somewhere.',
    summary: {
      essential:
        'No organism is good at everything. An animal that grows fast usually lives shorter. One that produces many offspring usually invests little in each. Big muscles cost food. Strong immune defences cost energy and sometimes attack the body itself. Every capability has a price, and the price is paid in other capabilities.',
      detailed:
        'This is why evolution does not converge on a single super-organism. There is no arrangement that maximises everything, because the resources spent on one thing cannot be spent on another. What selection produces is a solution suited to a particular set of circumstances.',
      technical:
        'Life-history theory treats organisms as allocating a finite energy budget among growth, maintenance and reproduction. The resulting trade-offs — notably between offspring number and offspring quality, and between current and future reproduction — are measurable and predict observed strategies across taxa.',
    },
    glossaryTerms: [glossaryTermId('adaptation'), glossaryTermId('fitness')],
    related: [
      topicId('why-complexity-has-costs'),
      topicId('why-large-brains-are-expensive'),
      topicId('is-evolution-progress'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'An organism has a finite budget. Food eaten today can be turned into growth, or into repairing damage, or into offspring — but each unit only once. That single constraint generates most of the diversity in how organisms live.',
          detailed:
            'Consider the two ends of one axis. A cod releases millions of eggs and abandons them; almost all die, but a few survive by sheer numbers. An albatross raises one chick every two years, feeding it for months. Both strategies work. Which is better depends entirely on how predictable the environment is and how much a parent can actually improve an offspring’s odds.',
        },
      },
      {
        id: 'viz-tradeoffs',
        kind: 'visualization',
        visualizationId: visualizationId('life-history-tradeoffs'),
      },
      {
        id: 'claim-tradeoffs',
        kind: 'claim',
        statement: {
          essential:
            'Trade-offs are measurable. Experimentally increasing investment in one function reliably reduces performance in another, across a wide range of organisms.',
          detailed:
            'The experiments are straightforward in principle. Force fruit flies to lay more eggs and they die sooner. Select for longer life and they lay fewer eggs. Increase a bird’s brood size artificially and the parents survive the winter less well. These are direct demonstrations that the budget is real and cannot be evaded.',
          technical:
            'Trade-offs are detected as negative genetic correlations between traits. Their strength depends on resource availability, which is why they can be masked in unusually rich laboratory conditions — one reason field experiments matter for testing life-history theory.',
        },
        evidence: 'established',
        references: [referenceId('stearns-1989-tradeoffs')],
      },
      {
        id: 'immune',
        kind: 'prose',
        text: {
          essential:
            'Some trade-offs are less obvious and more consequential. Immune defence is expensive, and an immune system aggressive enough to catch everything will sometimes attack the body it is protecting. Autoimmune disease is not a design flaw so much as the far end of a dial that has to be set somewhere.',
          detailed:
            'The same logic runs through medicine. Sickle-cell trait causes serious disease when inherited from both parents and protects against malaria when inherited from one, which is why it persists at high frequency exactly where malaria is common and is rare elsewhere. That is not a defect that selection failed to remove; it is the visible consequence of a trade-off whose terms depend on where you live.',
        },
      },
    ],
    furtherReading: [referenceId('stearns-1989-tradeoffs')],
  },

  {
    id: topicId('what-is-an-evolutionary-niche'),
    slug: 'what-is-an-evolutionary-niche',
    sectionId: LIFE,
    order: 38,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What is an evolutionary niche?',
    subtitle:
      'Not a place. A way of making a living, defined by everything a species can tolerate and use.',
    summary: {
      essential:
        'A niche is not a location. It is the full set of conditions a species can survive in and resources it can exploit, together with the role it plays where it lives. Two species in the same forest occupy different niches if they eat different things at different times in different parts of the canopy.',
      detailed:
        'The concept matters because niches, not places, are what species compete for. Two species that need exactly the same things cannot stably coexist — one will eventually exclude the other — which is why coexisting species almost always differ in some dimension of their requirements.',
      technical:
        'Hutchinson defined the fundamental niche as an n-dimensional hypervolume of environmental variables within which a population can persist, and the realised niche as the smaller region actually occupied once competitors and predators are present. The competitive exclusion principle follows: complete niche overlap is unstable.',
    },
    glossaryTerms: [glossaryTermId('ecological-niche')],
    related: [
      topicId('ecological-niches'),
      topicId('competition'),
      topicId('convergent-evolution'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The word invites a spatial image — a hole in a wall that an organism fits into — and that image is wrong. Think instead of a job description. What temperatures can it tolerate? What does it eat, and how big must the pieces be? When is it active? What eats it? Where does it breed? Every answer narrows the description, and the complete set is the niche.',
          detailed:
            'Robert MacArthur made this concrete in the 1950s with five species of warbler that all feed in the same spruce trees on the same insects — an apparent violation of the rule that identical requirements cannot coexist. He watched carefully and found that each species concentrates on a different part of the tree: outer branches near the top, inner branches lower down, and so on. The trees were one place and five niches.',
        },
      },
      {
        id: 'viz-niche',
        kind: 'visualization',
        visualizationId: visualizationId('niche-space'),
      },
      {
        id: 'claim-exclusion',
        kind: 'claim',
        statement: {
          essential:
            'Two species with identical requirements cannot coexist indefinitely in the same place. Whichever is even slightly better at exploiting the shared resource will eventually eliminate the other.',
          detailed:
            'Georgy Gause demonstrated this in the 1930s with two species of Paramecium. Grown separately in the same medium, both thrived. Grown together, one consistently drove the other extinct. The result is robust and gives the principle its usual name.',
          technical:
            'The exclusion principle applies strictly only in constant environments at equilibrium. Real environments fluctuate, disturbance resets competition, and spatial structure allows local coexistence — which is why the natural world contains far more coexisting similar species than the simplest theory allows. Explaining that excess is a long-running problem in ecology.',
        },
        evidence: 'established',
        references: [referenceId('hutchinson-1957-niche')],
      },
      {
        id: 'realised',
        kind: 'prose',
        text: {
          essential:
            'There is a useful distinction between what a species could do and what it actually does. Remove its competitors and many species expand into conditions they never occupy in the wild. Barnacles on a rocky shore live in a narrow band; remove the species above them and they spread upward immediately.',
          detailed:
            'This is why introduced species can be so destructive. A species released from the competitors, predators and parasites that constrained it at home may expand into a far wider range than it ever occupied there. The rabbit in Australia and the cane toad are not unusually capable organisms. They are ordinary ones whose realised niche suddenly expanded toward their fundamental one.',
        },
      },
    ],
    furtherReading: [referenceId('hutchinson-1957-niche')],
  },

  {
    id: topicId('why-survival-of-the-fittest-is-often-misunderstood'),
    slug: 'why-survival-of-the-fittest-is-often-misunderstood',
    sectionId: LIFE,
    order: 39,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why “survival of the fittest” is often misunderstood',
    subtitle: 'Fittest means best-fitting, not strongest — and survival is not the point either.',
    summary: {
      essential:
        'The phrase suggests a contest won by the strongest, and both halves mislead. "Fittest" means best matched to the current environment, which is often the smallest, the most cooperative or the most fertile. And what matters is not surviving but reproducing — an organism that lives a century and leaves no offspring has zero fitness.',
      detailed:
        'Darwin did not coin the phrase. Herbert Spencer did, and Darwin adopted it in a later edition at Wallace’s suggestion, a decision that has caused a century and a half of misreading.',
      technical:
        'Fitness is expected relative reproductive success in a specified environment. It is a property of a genotype in a context, not of an organism in isolation, and it is frequency-dependent in many cases — the fitness of a strategy can depend on how common that strategy already is.',
    },
    glossaryTerms: [glossaryTermId('fitness'), glossaryTermId('natural-selection')],
    related: [topicId('natural-selection'), topicId('cooperation'), topicId('does-nature-choose')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Take the two words apart. "Fittest" in modern usage means physically strong, and that is not the meaning here at all — it means fitting, as a key fits a lock. The fittest organism in a particular environment might be the one that needs the least food, or hides best, or tolerates cold, or cooperates most effectively with others of its kind.',
          detailed:
            '"Survival" is the second problem. Surviving matters only because you have to be alive to reproduce. A sterile individual in perfect health contributes nothing to the next generation, and selection cannot see it at all. Some organisms have fitness strategies that involve dying quickly: a salmon that spawns and dies immediately has enormous fitness, and an octopus that starves while guarding her eggs has more fitness than one that abandons them and lives.',
        },
      },
      {
        id: 'viz-fitness',
        kind: 'visualization',
        visualizationId: visualizationId('fitness-is-context'),
      },
      {
        id: 'claim-context',
        kind: 'claim',
        statement: {
          essential:
            'Fitness is always relative to an environment. The same genetic variant can be strongly advantageous in one place and lethal in another, so there is no such thing as being fit in general.',
          detailed:
            'The Grants’ finches show this over a single lifetime. Large beaks were advantageous during drought, when only large tough seeds remained, and disadvantageous in wet years, when small seeds were abundant and small-beaked birds could process them faster. The same trait, the same population, opposite fitness, a few years apart.',
          technical:
            'Fitness can also depend on its own frequency. A rare strategy may do well precisely because it is rare — as with rare-male mating advantages, or prey colour morphs that predators have not formed a search image for. Frequency dependence can maintain variation indefinitely rather than eliminating it.',
        },
        evidence: 'established',
        references: [referenceId('grant-grant-2002-finches')],
      },
      {
        id: 'caution-tautology',
        kind: 'callout',
        tone: 'caution',
        title: 'Is it circular? Who survives? The fittest. Who are the fittest? Those who survive.',
        text: {
          essential:
            'Stated that way it would be empty, and the objection has been raised seriously. The escape is that fitness can be measured independently of the outcome — you can predict, before the fact, which variant should do better, and then check.',
          detailed:
            'That is exactly what field and laboratory studies do. Measure beak depth, predict survival through a drought from the mechanics of cracking seeds, then count survivors. Predict which antibiotic-resistance mutation will spread from its measured effect on growth rate, then watch. When the prediction can fail and does not, the reasoning is not circular.',
        },
        references: [referenceId('mayr-1982-growth-biology')],
      },
      {
        id: 'note-social-darwinism',
        kind: 'callout',
        tone: 'misconception',
        title: 'The phrase has been badly misused',
        text: {
          essential:
            'Survival of the fittest has been invoked to justify letting the poor suffer, colonial conquest and eugenics. None of this follows from the biology. Natural selection describes how gene frequencies change; it contains no claim that whatever spreads is good, or that anyone deserves their circumstances.',
          detailed:
            'The logical error has a name — deriving what ought to be from what is. Even where a description of nature is accurate, it carries no instructions. Infanticide, parasitism and cannibalism are all natural and widespread. Nobody thinks that settles whether they are acceptable, and the same reasoning applies to everything else evolution produces.',
        },
        references: [referenceId('mayr-1982-growth-biology')],
      },
    ],
    furtherReading: [referenceId('grant-grant-2002-finches')],
  },

  {
    id: topicId('common-ancestry-and-the-tree-of-life'),
    slug: 'common-ancestry-and-the-tree-of-life',
    sectionId: LIFE,
    order: 40,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Common ancestry and the tree of life',
    subtitle: 'The pattern of similarities is nested — and that nesting is the evidence.',
    summary: {
      essential:
        'Species are not similar to each other in random ways. The similarities fall into groups within groups: all mammals have hair, all vertebrates within that have backbones, all animals within that have multicellular bodies. That nested pattern is what descent with branching produces, and it is hard to explain any other way.',
      detailed:
        'The pattern is now confirmed at the genetic level, where it is much sharper. Independent genes give congruent trees, and shared errors — broken genes and inserted viral sequences at identical positions — appear in exactly the pattern shared ancestry predicts.',
      technical:
        'The strongest single class of evidence is shared derived defects: pseudogenes and endogenous retroviral insertions at orthologous loci. Humans and chimpanzees share the same inactivating mutation in the GULO gene for vitamin C synthesis, and thousands of ERV insertions at identical positions — each an independently improbable event.',
    },
    glossaryTerms: [glossaryTermId('common-ancestry'), glossaryTermId('horizontal-gene-transfer')],
    related: [
      topicId('luca-the-last-universal-common-ancestor'),
      topicId('evolution-is-not-a-ladder'),
      topicId('convergent-evolution'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Naturalists noticed the pattern long before anyone explained it. Organisms sort into groups within groups, and the sorting is consistent no matter which features you use. Linnaeus built his classification on it a century before Darwin, without believing in evolution at all. The system worked; nobody knew why.',
          detailed:
            'Descent with branching explains it immediately. If species split from ancestors, then features acquired before a split are shared by everything after it, and features acquired after are confined to one branch. Nested groups are exactly what a branching process leaves behind. No other proposed explanation predicts nesting rather than an arbitrary mosaic of similarities.',
        },
      },
      {
        id: 'viz-nested',
        kind: 'visualization',
        visualizationId: visualizationId('nested-similarity'),
      },
      {
        id: 'claim-shared-errors',
        kind: 'claim',
        statement: {
          essential:
            'Related species share the same broken genes, with the same specific damage, in the same positions. Shared mistakes are far stronger evidence of copying than shared functioning parts.',
          detailed:
            'Most mammals make their own vitamin C. Primates cannot, because the gene for the final enzyme is broken. It is still there, recognisable, with a specific mutation that disabled it — and humans, chimpanzees, gorillas and orangutans all carry the same disabling mutation at the same position. A common ancestor broke it once and passed the broken copy to everything descended from it.',
          technical:
            'Endogenous retroviruses make the argument sharper still. When a retrovirus inserts into a germline genome it lands at an essentially arbitrary position among three billion bases. Humans and chimpanzees share thousands of such insertions at identical loci. The probability of independent insertion at the same site, thousands of times over, is not a number anyone can take seriously.',
        },
        evidence: 'established',
        references: [referenceId('hug-2016-tree-of-life')],
      },
      {
        id: 'network',
        kind: 'prose',
        text: {
          essential:
            'The tree metaphor works well for animals and plants, where genes pass from parent to offspring and nowhere else. It works less well for microbes, which routinely swap genes sideways — between species, between genera, sometimes between domains. For much of life, the correct picture is closer to a network with a tree-like shape near the tips.',
          detailed:
            'This does not undermine common ancestry; it complicates the shape of the diagram. All the genes still descend from ancestral genes, and the shared genetic code still points to a single origin. What it means is that a single tree cannot represent the history of every gene in a microbial genome, because different genes in the same organism can have arrived by different routes.',
        },
      },
      {
        id: 'caution-diagram',
        kind: 'callout',
        tone: 'caution',
        title: 'A tree diagram is a summary, not a record',
        text: {
          essential:
            'Every published tree of life is a reconstruction from present-day data, showing a selected sample of lineages. It is not a complete record of ancestry. The overwhelming majority of branches are extinct and invisible, and the resolution at the deepest nodes is genuinely uncertain.',
          detailed:
            'Trees also change as data improves and as methods are refined. The position of some major groups has moved repeatedly. That instability is normal for a historical reconstruction and should not be mistaken for doubt about descent itself: the disagreement is about the order of branches, not about whether branching happened.',
        },
        references: [referenceId('doolittle-1999-lateral')],
      },
    ],
    furtherReading: [referenceId('hug-2016-tree-of-life')],
  },

  {
    id: topicId('extinction-as-part-of-evolution'),
    slug: 'extinction-as-part-of-evolution',
    sectionId: LIFE,
    order: 41,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Extinction as part of evolution',
    subtitle:
      'Over ninety-nine percent of all species that ever existed are gone. That is the normal condition.',
    summary: {
      essential:
        'Extinction is not a failure of evolution or an interruption of it. It is a constant feature. Species have finite lifespans in the same way individuals do — a typical one lasts a few million years — and the fossil record is overwhelmingly a record of things that are no longer here.',
      detailed:
        'It also matters for what comes next. Extinction frees ecological space, and the fastest bursts of diversification in the record follow the largest losses. The living world is shaped as much by what was removed as by what was added.',
      technical:
        'Background extinction rates are estimated at roughly 0.1–1 species per million species-years, against which the five major mass extinctions stand out by an order of magnitude or more. Species durations vary by group: marine invertebrates average 5–10 Myr, mammals rather less.',
    },
    glossaryTerms: [glossaryTermId('mass-extinction'), glossaryTermId('biodiversity')],
    related: [
      topicId('extinction'),
      topicId('mass-extinctions'),
      topicId('why-extinction-is-not-the-opposite-of-evolution'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The number worth sitting with is that more than ninety-nine percent of all species that have ever lived are extinct. Everything alive today is drawn from the surviving fraction of a fraction. Extinction is not what happens when evolution goes wrong; it is the ordinary end of a species, as death is the ordinary end of an individual.',
          detailed:
            'Species end in two different ways, and the distinction matters for reading the fossil record. Some simply die out, leaving nothing. Others disappear as a name because they changed enough, or split, that palaeontologists classify the descendants differently — the lineage continues under another label. The first is true extinction; the second is a bookkeeping artefact.',
        },
      },
      {
        id: 'viz-extinction-rate',
        kind: 'visualization',
        visualizationId: visualizationId('extinction-record'),
      },
      {
        id: 'claim-turnover',
        kind: 'claim',
        statement: {
          essential:
            'Extinction runs continuously at a low background rate, punctuated by rare episodes when it spikes enormously. Both patterns are visible in the fossil record.',
          detailed:
            'The background rate is not obviously related to anything dramatic — species are lost steadily through ordinary competition, environmental change and bad luck. The spikes are different in kind, not just in degree: they remove species across many unrelated groups simultaneously, over intervals short enough that adaptation cannot keep up.',
          technical:
            'Van Valen’s analysis of survivorship curves found that extinction probability is roughly constant with a lineage’s age — species do not become more extinction-resistant as they persist. He explained this with the Red Queen hypothesis: the environment for any species consists largely of other evolving species, so adaptation never catches up.',
        },
        evidence: 'established',
        references: [
          referenceId('raup-sepkoski-1982-extinctions'),
          referenceId('vanvalen-1973-red-queen'),
        ],
      },
      {
        id: 'creative',
        kind: 'prose',
        text: {
          essential:
            'Extinction also creates. Every mass extinction is followed by a radiation, because the survivors inherit an emptied world. Mammals had existed for over a hundred million years as small nocturnal animals before the dinosaurs disappeared; within a few million years afterwards they had produced whales, bats, horses and primates.',
          detailed:
            'The pattern is general. Trilobites were removed by the end-Permian event, and other arthropods expanded. Ammonites went with the dinosaurs, and modern fish diversified. The species that inherit are rarely the ones that were dominant before — extinction resets the competitive landscape rather than simply pruning it, which is why the world after is a different world rather than a thinner version of the same one.',
        },
      },
    ],
    furtherReading: [referenceId('raup-sepkoski-1982-extinctions')],
  },

  {
    id: topicId('convergent-evolution'),
    slug: 'convergent-evolution',
    sectionId: LIFE,
    order: 42,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Convergent evolution',
    subtitle:
      'Unrelated lineages arriving at the same answer, because physics keeps asking the same question.',
    summary: {
      essential:
        'Dolphins, sharks and extinct ichthyosaurs all have the same streamlined shape with the same fins in the same places. They are a mammal, a fish and a reptile. Nothing was copied — each lineage arrived at that shape independently, because moving fast through water imposes the same constraints on anything that tries.',
      detailed:
        'Convergence is common enough to be a general phenomenon rather than a curiosity. Eyes have evolved dozens of times, powered flight four times, echolocation several times, and complex agriculture at least twice among insects. It reveals that the space of good solutions to a physical problem is narrower than the space of possible organisms.',
      technical:
        'Convergence is identified by mapping traits onto independently constructed phylogenies: a trait present in distant lineages and absent in their common ancestor and intervening branches must have arisen more than once. Molecular convergence also occurs — the same amino acid substitutions in echolocating bats and whales, for example.',
    },
    glossaryTerms: [glossaryTermId('convergent-evolution'), glossaryTermId('adaptation')],
    related: [
      topicId('evolutionary-contingency-how-much-is-chance'),
      topicId('common-ancestry-and-the-tree-of-life'),
      topicId('why-intelligence-is-not-evolutions-inevitable-destination'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Water is dense and viscous, and a body moving through it fast pays a heavy penalty for the wrong shape. The shape that minimises the penalty is a torpedo with a narrow tail and stabilising fins. Anything that makes a living by swimming fast is pushed toward it, regardless of what it started as. A dolphin is a modified land mammal and a shark is a fish, and from a distance they look the same.',
          detailed:
            'The differences are where the history shows. A dolphin’s tail moves up and down, because mammalian spines flex vertically — a legacy of running. A shark’s moves side to side. A dolphin breathes air through a nostril that has migrated to the top of its head. The overall solution converged; the implementation still records where each lineage came from.',
        },
      },
      {
        id: 'viz-convergence',
        kind: 'visualization',
        visualizationId: visualizationId('convergent-evolution'),
      },
      {
        id: 'claim-repeated',
        kind: 'claim',
        statement: {
          essential:
            'Eyes have evolved independently dozens of times, and camera-type eyes with a lens at least several times. The same optical problem has the same small set of good solutions.',
          detailed:
            'Vertebrate and octopus eyes are the standard comparison. Both are camera eyes with a cornea, an adjustable lens, an iris and a retina. Their common ancestor had at most a light-sensitive patch. The two were built independently from different tissues — which is why the octopus retina is wired sensibly and ours is wired backwards.',
          technical:
            'The molecular picture is more interesting than pure independence. Opsin proteins and the Pax6 regulatory gene are shared across the animals with eyes, so the lineages did not start from nothing — they repeatedly redeployed a common toolkit. Convergence at the level of structure combined with deep homology at the level of genes is the usual pattern.',
        },
        evidence: 'established',
        references: [referenceId('losos-2011-convergence')],
      },
      {
        id: 'what-it-implies',
        kind: 'prose',
        text: {
          essential:
            'What does convergence tell us about predictability? Less than it is often made to. It shows that when a particular way of life is available, evolution finds similar solutions repeatedly. It does not show that any particular way of life will be occupied, or that any particular lineage will occupy it.',
          detailed:
            'Simon Conway Morris has argued from convergence that the broad shape of life’s history is largely determined, and that something humanlike was close to inevitable. Critics point out that the convergences we notice are the ones that recurred, and that the inventory of things that have happened only once — the eukaryotic cell, oxygenic photosynthesis, human-level abstract language — is at least as informative and points the other way. This is a live disagreement between serious people, and it is not resolved.',
        },
      },
    ],
    furtherReading: [referenceId('conway-morris-2003-convergence')],
  },

  {
    id: topicId('evolutionary-contingency-how-much-is-chance'),
    slug: 'evolutionary-contingency-how-much-is-chance',
    sectionId: LIFE,
    order: 43,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Evolutionary contingency: how much is chance?',
    subtitle: 'Rewind the tape and play it again. Would you get anything like this?',
    summary: {
      essential:
        'Stephen Jay Gould posed the question as a thought experiment: replay life’s history from the Cambrian and see what emerges. He argued you would get something unrecognisable — that chance events, especially which lineages happened to survive mass extinctions, dominate the outcome.',
      detailed:
        'The opposing view holds that convergence is so pervasive that the broad outlines would recur even if the details differed. Remarkably, the thought experiment has been partly performed — in the laboratory, with bacteria — and the answer is that both effects are real.',
      technical:
        'Lenski’s twelve replicate E. coli populations, evolved in identical conditions for tens of thousands of generations, show strong parallelism in fitness gains and in which genes are targeted, alongside genuinely unique events. The citrate-utilisation innovation arose in one population and depended on earlier potentiating mutations that were individually neutral.',
    },
    glossaryTerms: [glossaryTermId('convergent-evolution'), glossaryTermId('natural-selection')],
    related: [
      topicId('convergent-evolution'),
      topicId('are-humans-the-goal-of-evolution'),
      topicId('mass-extinctions'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Gould’s argument came from looking at the Burgess Shale, a Cambrian deposit full of animals so strange that many could not be assigned to any living group. His reading was that the Cambrian produced a much wider range of body plans than survives today, and that which ones made it through was substantially a matter of luck rather than merit.',
          detailed:
            'If that is right, then the history of animals is not a story of the best designs winning. It is a story of an initial burst of experimentation followed by a lottery. Change the lottery — a different set of survivors, a slightly different asteroid — and everything downstream is different, including whether anything like a vertebrate exists.',
        },
      },
      {
        id: 'viz-contingency',
        kind: 'visualization',
        visualizationId: visualizationId('replay-the-tape'),
      },
      {
        id: 'claim-ltee',
        kind: 'claim',
        statement: {
          essential:
            'The replay experiment has been done with bacteria, and the answer is that both repeatability and contingency are real. Identical populations in identical conditions largely improve in parallel — and occasionally one does something none of the others does.',
          detailed:
            'Twelve populations of E. coli have been growing in identical flasks since 1988. Eleven of them still cannot use the citrate in their medium. One, after roughly 31,000 generations, evolved the ability to — an innovation that transformed its ecology. When researchers replayed that population from frozen samples, they found the innovation only arose from later time points, meaning earlier mutations had prepared the ground without themselves being useful.',
          technical:
            'This is contingency demonstrated rather than argued: the citrate innovation required a specific prior genetic background, arising through a tandem duplication that placed an existing transporter gene under an aerobically expressed promoter. The potentiating mutations were not selected for this function and could not have been.',
        },
        evidence: 'established',
        references: [referenceId('blount-2008-citrate'), referenceId('lenski-2015-ltee')],
      },
      {
        id: 'both',
        kind: 'prose',
        text: {
          essential:
            'The sensible reading is that the two positions describe different levels. At the level of functional solutions — streamlining, eyes, wings — convergence is strong and outcomes are fairly predictable. At the level of which lineage produces them, and whether a particular innovation appears at all, contingency dominates.',
          detailed:
            'So a replayed Earth would probably have swimming things shaped like fish, flying things with aerofoils, and photosynthesis. Whether it would have anything with a spine, or anything that builds telescopes, is a completely different question, and the honest answer is that nobody knows. The disagreement between Gould and Conway Morris was partly about which of these questions was being asked.',
        },
      },
    ],
    furtherReading: [referenceId('gould-1989-wonderful-life')],
  },

  {
    id: topicId('why-intelligence-is-not-evolutions-inevitable-destination'),
    slug: 'why-intelligence-is-not-evolutions-inevitable-destination',
    sectionId: LIFE,
    order: 44,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why intelligence is not evolution’s inevitable destination',
    subtitle: 'It is one expensive strategy among many, and most lineages never go near it.',
    summary: {
      essential:
        'Intelligence is not a rung on a ladder that lineages climb given time. It is a costly adaptation that pays off in some circumstances and not others. Most of the successful organisms on Earth have nothing resembling it, and have been successful for far longer than we have.',
      detailed:
        'Human-level abstract reasoning has arisen once in four billion years. That is a much weaker record than eyes, flight or photosynthesis, all of which evolution found repeatedly. If we were reasoning from frequency alone, we would call it a fluke.',
      technical:
        'Brain tissue costs roughly twenty times as much energy per gram as resting muscle. The human brain is about 2% of body mass and consumes about 20% of resting metabolism. Such an investment is only sustainable given a high-quality diet and is repeatedly lost or reduced in lineages where the payoff falls.',
    },
    glossaryTerms: [glossaryTermId('adaptation'), glossaryTermId('convergent-evolution')],
    related: [
      topicId('why-intelligence-became-evolutionarily-useful'),
      topicId('are-humans-the-goal-of-evolution'),
      topicId('why-did-intelligence-evolve'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Ask what intelligence is for and the answer is: solving problems that cannot be solved by a fixed response. That is genuinely useful in a variable, socially complex environment. It is useless overhead in a predictable one. A tick waiting on a leaf for a mammal to pass does not need to think, and the energy it would spend thinking would be better spent waiting longer.',
          detailed:
            'And thinking is expensive. Nervous tissue is among the most metabolically costly material an animal can build. A brain must be fed continuously, protected, and supplied with oxygen without interruption — a few minutes without it and the tissue dies. An animal that carries a large brain has to find substantially more food than one that does not, every single day.',
        },
      },
      {
        id: 'viz-brain-cost',
        kind: 'visualization',
        visualizationId: visualizationId('brain-energy-budget'),
      },
      {
        id: 'claim-once',
        kind: 'claim',
        statement: {
          essential:
            'Complex problem-solving has evolved several times, but human-level abstract reasoning with cumulative culture has arisen once. Compared with eyes or flight, it is not a solution evolution finds readily.',
          detailed:
            'Real cognitive sophistication exists in several lineages — corvids, parrots, cetaceans, elephants, octopuses. Crows make and use tools, and some can solve multi-step puzzles. Octopuses are startlingly capable and separated from us by six hundred million years. So the raw ingredient recurs. What has not recurred is the specific combination that produces cumulative technology.',
          technical:
            'Comparative neurobiology suggests neuron count in relevant regions correlates better with cognitive performance than absolute or relative brain size. On that measure some birds achieve high counts in small brains through much denser packing, which is one reason simple brain-size comparisons across distant lineages are unreliable.',
        },
        evidence: 'inference',
        references: [
          referenceId('roth-dicke-2005-brains'),
          referenceId('herculano-houzel-2009-neurons'),
        ],
      },
      {
        id: 'reversals',
        kind: 'prose',
        text: {
          essential:
            'Cognitive investment can also be reduced. Some cave-dwelling and parasitic lineages have simplified nervous systems relative to their relatives. Domesticated animals have consistently smaller brains than their wild ancestors — dogs relative to wolves, and the same pattern across most domesticated species.',
          detailed:
            'The sea squirt is the case usually cited, and worth stating carefully because it is often exaggerated. Its larva swims, has a simple nerve cord and a light sensor, and finds a rock. Once attached it reabsorbs much of that nervous tissue, because a filter-feeder fixed to a rock has little use for it. It is not a lesson about brains being pointless — it is a lesson about brains being expensive enough that they are abandoned when they stop earning.',
        },
      },
      {
        id: 'caution-search',
        kind: 'callout',
        tone: 'caution',
        title: 'What this does and does not say about life elsewhere',
        text: {
          essential:
            'That intelligence arose once here is a single data point, and single data points support almost no inference about rates. It does not establish that intelligence is rare in the universe, and it certainly does not establish that it is common.',
          detailed:
            'The observation is also filtered: only a planet where intelligence arose could produce anyone to notice. This is the same selection effect that makes the early appearance of life on Earth weaker evidence than it seems. Estimates of how often intelligence evolves, in either direction, are currently opinions rather than measurements.',
        },
        references: [referenceId('conway-morris-2003-convergence')],
      },
    ],
    furtherReading: [referenceId('roth-dicke-2005-brains')],
  },
];
