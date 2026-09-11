/**
 * Human Evolution, Scientific Lens — Movement IV: the expensive brain.
 *
 * The central discipline here is refusing single-cause explanations. Brain
 * expansion is the part of human evolution most heavily colonised by tidy
 * stories — the social brain, the cooking hypothesis, the language gene — and
 * each of them has been weakened by evidence in the last fifteen years without
 * being replaced by a winner.
 *
 * So the movement is built around a cost first, then a record, then a set of
 * competing explanations presented as competing, then the capacities themselves.
 * The language topic is deliberately the most hedged in the section, because
 * language is the human capacity with the worst evidential access.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const HUMAN_BRAIN_TOPICS: readonly Topic[] = [
  {
    id: topicId('the-cost-of-a-brain'),
    slug: 'the-cost-of-a-brain',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 27,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The cost of a brain',
    subtitle: 'Two percent of your body, a fifth of your energy.',
    summary: {
      essential:
        'Brain tissue is metabolically expensive: it runs at roughly ten times the rate of the body average and never switches off. Any explanation of brain expansion has to explain how that bill got paid.',
      detailed:
        'This is why a large brain is not simply an improvement waiting to happen. It is a purchase, and the purchase price is real: energy that could have gone to growth, movement, immune function or reproduction.',
      technical:
        'Adult human brain metabolism is roughly 20–25% of basal metabolic rate for about 2% of body mass; in childhood the fraction peaks above 40%. Grams of brain tissue consume energy at approximately 11–12 times the whole-body average rate, and consumption is near-constant rather than demand-scaled.',
    },
    glossaryTerms: [glossaryTermId('encephalization'), glossaryTermId('life-history')],
    related: [topicId('why-did-brains-get-bigger'), topicId('cooking-and-the-energy-budget')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Your brain weighs about 1.4 kilograms, which is roughly 2% of you. It consumes about a fifth of the energy you use at rest. Sitting still and thinking about nothing in particular, you are spending around 20 watts on it — and there is no way to turn it down.',
          detailed:
            'Unlike muscle, which is cheap at rest and expensive only when used, neural tissue draws power continuously. Most of that power goes not on thinking but on maintenance: pumping ions back across membranes to restore the electrical gradients that every signal discharges. The brain is running a pump that cannot stop, because if it stops the cells die within minutes.',
        },
      },
      {
        id: 'cost-figure',
        kind: 'visualization',
        visualizationId: visualizationId('brain-energy-cost'),
      },
      {
        id: 'the-child',
        kind: 'prose',
        text: {
          essential:
            'The adult figure understates the problem. In a young child, the brain takes over 40% of the body’s entire resting energy budget — and it is a child’s body, which also has to grow.',
          detailed:
            'This is one reason human childhood is so strange. Human children grow slowly compared with other primates, and the period of slowest growth coincides with the period of peak brain energy demand. The two look like a trade: growth of the body is throttled back while the brain is being built and wired. A child cannot do both at full rate, so it does one.',
        },
      },
      {
        id: 'cost-claim',
        kind: 'claim',
        statement: {
          essential:
            'The human brain accounts for roughly 20–25% of resting energy use in adults and over 40% in young children, for about 2% of body mass.',
          detailed:
            'Measured cerebral metabolic rate places brain tissue at approximately eleven times the whole-body average rate of energy consumption per gram. The childhood peak coincides with the period of slowest somatic growth.',
        },
        evidence: 'established',
        references: [referenceId('aiello-wells-2002-energetics')],
      },
      {
        id: 'how-was-it-paid',
        kind: 'prose',
        text: {
          essential:
            'So where does the extra energy come from? Only two answers are possible: take in more, or spend less somewhere else. Both have been proposed, and the evidence has turned out to favour the first rather more than expected.',
          detailed:
            'The classic proposal was the expensive-tissue hypothesis: that the gut shrank as the brain grew, because a higher-quality diet needs less digestive machinery, and the saving paid for the brain. It fits the fossils — Homo erectus does have a narrower rib cage — and it was widely accepted. Then somebody tested the general claim across mammals, and found no correlation between brain mass and gut mass once body composition is accounted for. The trade-off it predicts does not appear in the comparative data.',
          technical:
            'Navarrete et al. found brain size negatively correlated with adipose deposits rather than with digestive tract mass across 100 mammal species, suggesting the trade-off — if any — is against fat storage rather than gut. Humans are an awkward case here because we are unusually fat for a primate, which cuts against a simple version of that story too.',
        },
      },
      {
        id: 'gut-claim',
        kind: 'claim',
        statement: {
          essential:
            'Across mammals, brain size does not trade off against gut size, which undermines the expensive-tissue hypothesis in its original form.',
          detailed:
            'A comparative analysis of about 100 mammal species found no negative correlation between brain mass and digestive tract mass after controlling for fat-free body mass. The result does not rule out an energetic trade-off in the hominin lineage specifically, but removes the general pattern the hypothesis assumed.',
        },
        evidence: 'established',
        references: [referenceId('navarrete-2011-brain-size-fat')],
      },
      {
        id: 'more-in',
        kind: 'prose',
        text: {
          essential:
            'The alternative is that humans simply acquire and spend more energy overall. Measured directly, that is what we do: humans burn substantially more energy per day than chimpanzees, gorillas or orangutans of comparable size.',
          detailed:
            'We also carry far more body fat than other apes — a buffer against the interruption of supply that a continuously running brain cannot tolerate. The picture that emerges is not a budget reallocation but a raised budget: higher energy throughput, larger reserves, and a system of provisioning that spreads the risk across a group. Which is a different kind of explanation, because it makes brain expansion depend on social and technological arrangements rather than on anatomy alone.',
        },
      },
      {
        id: 'throughput-claim',
        kind: 'claim',
        statement: {
          essential:
            'Humans expend substantially more energy per day than other great apes and carry considerably more body fat.',
          detailed:
            'Doubly labelled water measurements across humans, chimpanzees, bonobos, gorillas and orangutans show human total energy expenditure roughly 400 kcal/day above the ape range after size correction, alongside markedly higher adiposity.',
        },
        evidence: 'established',
        references: [referenceId('pontzer-2016-metabolic-acceleration')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'With the price established, the next question is what was actually bought, and when. The fossil record has an answer, and it is less tidy than the usual graph suggests.',
        },
      },
    ],
    furtherReading: [referenceId('isler-vanschaik-2009-expensive-brain')],
  },

  {
    id: topicId('how-brain-size-changed'),
    slug: 'how-brain-size-changed',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 28,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How brain size actually changed',
    subtitle: 'Not a smooth climb, and not only upward.',
    summary: {
      essential:
        'Hominin brain size roughly tripled over three million years, but not steadily. It was flat for two million years, rose in bursts, and appears to have decreased slightly over the last ten thousand.',
      detailed:
        'Brain size also has to be read against body size, and the two changed together in ways that make the raw numbers misleading on their own.',
      technical:
        'Endocranial volume rises from roughly 400–550 cm³ in australopiths to about 1350 cm³ mean in modern humans, with much of the increase between 2.0 and 0.2 Ma. Holocene reduction of order 5–10% is reported and its cause is disputed, with sampling and body-size confounds unresolved.',
    },
    glossaryTerms: [glossaryTermId('endocast'), glossaryTermId('encephalization')],
    related: [topicId('the-cost-of-a-brain'), topicId('size-is-not-the-whole-story')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The brain does not fossilise. What survives is the braincase, and the volume it enclosed can be measured by filling it — historically with seeds or beads, now by CT scanning. That volume is a good proxy for brain size, and it is most of what we have.',
          detailed:
            'The resulting record is genuinely impressive in aggregate: from around 450 cubic centimetres in australopiths to around 1350 in modern humans, a roughly threefold increase. But the aggregate hides the shape of the change, and the shape is where the interesting questions are.',
        },
      },
      {
        id: 'brain-record-figure',
        kind: 'visualization',
        visualizationId: visualizationId('brain-size-record'),
      },
      {
        id: 'the-shape',
        kind: 'prose',
        text: {
          essential:
            'For the first two million years of hominin existence, brain size barely moved. It then rose through the Homo erectus range, and rose again more steeply in the last half-million years, in more than one lineage independently.',
          detailed:
            'That last point deserves emphasis. Neanderthals and Homo sapiens both reached brain volumes around 1,400 cubic centimetres, from a common ancestor with a smaller brain, on separate continents. Whatever pressure was operating, it was operating on both lineages at once. And Homo naledi, alive at the same time, had a brain of about 500 cubic centimetres. The increase was not a trend that everyone was on.',
        },
      },
      {
        id: 'parallel-claim',
        kind: 'claim',
        statement: {
          essential:
            'Brain size increased in parallel in the Neanderthal and Homo sapiens lineages after they diverged, and did not increase in all contemporaneous hominins.',
          detailed:
            'Both lineages reach comparable adult endocranial volumes from a smaller-brained common ancestor, while Homo naledi retains about 500 cm³ within the same period. Parallel increase implies shared selective conditions rather than a single ancestral event.',
        },
        evidence: 'established',
        references: [
          referenceId('neubauer-2018-globularity'),
          referenceId('dirks-2017-naledi-age'),
        ],
      },
      {
        id: 'body-size',
        kind: 'prose',
        text: {
          essential:
            'Raw volume is also not the whole comparison, because bodies changed too. A larger animal generally has a larger brain without being any more capable — more body to run requires more neural tissue to run it.',
          detailed:
            'Correcting for this gives a ratio often called the encephalisation quotient. It is useful for comparing species of very different sizes, and it gets over-read constantly. A ratio is not a measure of capability, and the correction depends on body mass estimates, which for fossil hominins are themselves reconstructions with wide error bars. Treat any hominin EQ value as carrying more uncertainty than it usually displays.',
        },
      },
      {
        id: 'shrinking',
        kind: 'prose',
        text: {
          essential:
            'And then there is the awkward recent fact: average human brain volume appears to have decreased by something like 5–10% over the last ten to thirty thousand years.',
          detailed:
            'Several explanations are on offer and none is established. Bodies also became smaller over the same period, so part of it may be simple scaling. Domesticated animals show brain reduction relative to their wild ancestors, which has suggested a self-domestication parallel. Some have proposed that offloading information into social networks and external records reduced the individual demand. It has also been argued that the apparent decline is an artefact of how samples are assembled across time and geography.',
          technical:
            'The reduction is reported in several independent datasets but its magnitude, timing and even existence are contested, with published exchanges turning on sample composition and on whether body-mass correction is applied. It is included here because it is real enough to be argued about and because it is a useful check on the assumption that brain size only moves one way.',
        },
      },
      {
        id: 'shrinking-open',
        kind: 'open-question',
        question: 'Has human brain size decreased in the last ten thousand years, and if so why?',
        whyItMatters: {
          essential:
            'A confident narrative of ever-increasing brains underlies a lot of popular writing about human evolution. If the trend reversed recently, that narrative needs rethinking — and so does the assumption that bigger is simply better.',
          detailed:
            'It also bears directly on whether brain size is a good proxy for anything. If capability did not fall while volume did, then volume was never measuring capability in the first place, and a great deal of comparative reasoning built on endocranial volume is weaker than it appears.',
        },
        whatWouldSettleIt: {
          essential:
            'Large, well-dated, geographically controlled samples with reliable body-size estimates — which is exactly what current datasets lack.',
          detailed:
            'The confounds are severe: crania from different periods come from different regions and populations, body mass must be estimated from postcrania that are often not associated, and secular trends in stature within the Holocene are themselves substantial. Resolving it requires samples assembled specifically for the question rather than aggregated from existing collections.',
        },
        references: [referenceId('neubauer-2018-globularity')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'All of which points at a deeper problem with the whole measurement: volume may be the least interesting thing about a brain.',
        },
      },
    ],
    furtherReading: [referenceId('aiello-wells-2002-energetics')],
  },

  {
    id: topicId('size-is-not-the-whole-story'),
    slug: 'size-is-not-the-whole-story',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 29,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Size is not the whole story',
    subtitle: 'Neanderthals had brains as large as ours. Shape and development differed.',
    summary: {
      essential:
        'Brain volume is measurable and therefore over-used. What a brain does depends on how it is organised, how it is wired, and how it develops — and at least one of those can be read from fossils.',
      detailed:
        'Neanderthal brains were as large as modern human brains on average, and differently shaped. Modern human brains became globular after brain size had stopped increasing, and that reshaping is the more recent change.',
      technical:
        'Endocranial shape analysis shows the modern globular form emerging between roughly 100 and 35 ka, involving parietal and cerebellar bulging, and not present in the earliest H. sapiens crania. Neanderthal endocasts are elongated with comparable or greater volume, and postnatal developmental trajectories diverge in the first year.',
    },
    glossaryTerms: [glossaryTermId('endocast'), glossaryTermId('encephalization')],
    related: [topicId('how-brain-size-changed'), topicId('neanderthals')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Neanderthal brains averaged about 1,400 cubic centimetres. Modern human brains average about 1,350. If brain size were the measure of cognitive capacity, we would have to conclude that Neanderthals were slightly ahead — and nobody thinks the comparison works that way.',
          detailed:
            'Which is an admission worth sitting with. The moment a number produces an inconvenient result, everybody reaches for organisation, wiring and development instead. That reflex is correct, but it means brain size was never doing the work it was being credited with. Volume is used because it is what survives, not because it is what matters.',
        },
      },
      {
        id: 'shape-figure',
        kind: 'visualization',
        visualizationId: visualizationId('brain-shape'),
      },
      {
        id: 'globularity',
        kind: 'prose',
        text: {
          essential:
            'Shape can be measured from an endocast, and it tells a different story from volume. Early Homo sapiens skulls from around 300,000 years ago have modern faces and elongated, archaic-looking braincases. The rounded, globular skull we think of as modern appears gradually, and reaches its present form only in the last 35,000 years or so.',
          detailed:
            'The reshaping involves particular regions bulging outward — the parietal areas, which are involved in integrating sensory information and in spatial and tool-related processing, and the cerebellum, long associated with motor coordination and more recently with language and working memory. This happened after brain size had stopped increasing. It is a reorganisation rather than an expansion.',
          technical:
            'Whether the shape change reflects neural reorganisation or is a consequence of changes in facial and basicranial architecture is not fully resolved; endocranial form is constrained by surrounding structures as well as by the brain. The correlation with archaeological change over the same interval is suggestive and not causal evidence.',
        },
      },
      {
        id: 'globular-claim',
        kind: 'claim',
        statement: {
          essential:
            'The globular modern human braincase developed gradually between about 100,000 and 35,000 years ago, after brain volume had ceased to increase.',
          detailed:
            'Geometric morphometric analysis of Homo sapiens endocasts across the species’ range shows progressive parietal and cerebellar bulging independent of volume change, with the earliest specimens outside the modern range of variation in shape.',
        },
        evidence: 'inference',
        references: [referenceId('neubauer-2018-globularity')],
      },
      {
        id: 'development',
        kind: 'prose',
        text: {
          essential:
            'Development differs too, and it is visible in infant fossils. Newborn Neanderthal and modern human brains are similar in shape. In the first year of life, modern human brains go through a phase of rapid globularisation that Neanderthal brains do not.',
          detailed:
            'That first year is when an infant is immersed in social interaction, language and care. A difference in how a brain reorganises during precisely that window is potentially significant — and "potentially" is the correct word. We have a handful of infant Neanderthal specimens, the developmental inference is drawn from cranial shape rather than from neural tissue, and what follows for cognition is unknown.',
        },
      },
      {
        id: 'development-claim',
        kind: 'claim',
        statement: {
          essential:
            'Modern human and Neanderthal brain development diverge in the first year after birth, despite similar shape at birth.',
          detailed:
            'Comparison of endocranial shape trajectories in infant specimens indicates a globularisation phase present in modern humans and absent in Neanderthals. Sample sizes are very small and the cognitive implications are unknown.',
        },
        evidence: 'inference',
        references: [referenceId('gunz-2010-neandertal-brain')],
      },
      {
        id: 'frontal-lobe',
        kind: 'callout',
        tone: 'misconception',
        title: 'The human frontal lobe is not disproportionately large',
        text: {
          essential:
            'A common claim holds that humans owe their capacities to an enlarged frontal cortex. Measured against other apes, the human frontal lobe occupies about the proportion of the brain that ape brains of our size would be expected to have.',
          detailed:
            'What does appear to differ is internal organisation — connectivity, cell density, the relative expansion of particular subregions rather than the lobe as a whole. This is a good example of a satisfying story that measurement did not support, and of why "which part got bigger" is usually the wrong question to ask about a brain.',
        },
        references: [referenceId('semendeferi-2002-prefrontal')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'None of this explains why the expansion happened at all. There is no shortage of explanations — that is precisely the problem.',
        },
      },
    ],
    furtherReading: [referenceId('sherwood-2008-brain-evolution')],
  },

  {
    id: topicId('why-did-brains-get-bigger'),
    slug: 'why-did-brains-get-bigger',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 30,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why did brains get bigger?',
    subtitle: 'Four good hypotheses, each with evidence against it.',
    summary: {
      essential:
        'The main proposals are social complexity, ecological problem-solving, diet and energy supply, and cultural transmission. Each has support, each has been challenged, and they are not mutually exclusive.',
      detailed:
        'The honest position is that brain expansion is unexplained in the sense that no single pressure has been shown to be sufficient or necessary. What has changed recently is that the leading hypothesis has lost ground rather than gained it.',
      technical:
        'Comparative tests across primates give conflicting results depending on the brain measure, the social variable and the phylogenetic method chosen. The most cited result supporting social drivers (group size vs neocortex ratio) does not replicate consistently when diet is included or when absolute brain mass is used.',
    },
    glossaryTerms: [glossaryTermId('encephalization'), glossaryTermId('adaptation')],
    related: [
      topicId('the-cost-of-a-brain'),
      topicId('social-intelligence'),
      topicId('cooking-and-the-energy-budget'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Something paid for a threefold increase in the most expensive tissue in the body. The candidates are not short of plausibility — the problem is that there are several of them and they all sound convincing.',
          detailed:
            'It is worth naming why this is hard. Brain expansion happened over two million years, in several lineages, across changing environments. There is no reason to expect one pressure throughout, and no obvious way to detect a changing mixture of pressures in the evidence available. The field has nonetheless spent forty years looking for the single answer, which may be the wrong shape of question.',
        },
      },
      {
        id: 'hypotheses-figure',
        kind: 'visualization',
        visualizationId: visualizationId('brain-hypotheses'),
      },
      {
        id: 'social-brain',
        kind: 'prose',
        text: {
          essential:
            'The best-known proposal is the social brain hypothesis. Living in a group where individuals have relationships, alliances and histories is cognitively demanding: you must track who did what to whom and predict what they will do next. Larger groups require tracking more relationships, and the number of relationships grows much faster than the number of individuals.',
          detailed:
            'The original evidence was a correlation across primates between group size and the relative size of the neocortex, which gave the hypothesis quantitative teeth and produced the widely cited estimate of a natural human group size of around 150. It is an elegant argument.',
          technical:
            'It has weakened considerably. A large comparative analysis found primate brain size predicted by diet — specifically frugivory — and not by any of several measures of sociality. Other work finds the result depends on whether relative or absolute brain size is used and on how social complexity is operationalised. The hypothesis is not dead, but the headline correlation is no longer a stable finding.',
        },
      },
      {
        id: 'social-challenge-claim',
        kind: 'claim',
        statement: {
          essential:
            'A large comparative study found primate brain size predicted by diet rather than by measures of social complexity.',
          detailed:
            'Across more than 140 primate species, frugivory was a stronger predictor of brain size than group size, social organisation or mating system, with the effect robust to several phylogenetic methods. The result directly challenges the social brain hypothesis as usually stated.',
        },
        evidence: 'active-research',
        references: [referenceId('decasien-2017-primate-brain-diet')],
      },
      {
        id: 'others',
        kind: 'prose',
        text: {
          essential:
            'The ecological alternative says the demanding problems were about the world rather than about each other: finding foods that are patchy in space and time, remembering where they are, extracting food that is embedded or defended, tracking animals, and coping with environments that change unpredictably.',
          detailed:
            'The energetic argument is different in kind. It says the constraint was never cognitive demand at all but supply: brains could not get larger until the energy to run them could be obtained reliably, and once cooking, tool use and cooperative provisioning removed that ceiling, expansion could proceed. On this reading the demand was always there and the ceiling is what moved.',
          technical:
            'A modelling study apportioning human brain expansion between drivers assigned roughly 60% to ecological demands, 30% to cooperative and 10% to competitive social demands, with between-group competition contributing negatively. Model-based apportionment of this kind depends heavily on its assumptions and should be read as one structured argument rather than as a measurement.',
        },
      },
      {
        id: 'model-claim',
        kind: 'claim',
        statement: {
          essential:
            'A quantitative model of brain-size drivers apportioned most of human brain expansion to ecological rather than social demands.',
          detailed:
            'The model reproduces observed hominin brain and body size trajectories with a majority contribution from ecological challenge. It is a model fit, not an observation, and its conclusions follow from the structure assumed for skill acquisition and energy allocation.',
        },
        evidence: 'model',
        references: [referenceId('gonzalez-forero-gardner-2018-ecological')],
      },
      {
        id: 'cultural',
        kind: 'prose',
        text: {
          essential:
            'A fourth proposal turns the question around. Perhaps what mattered was not solving problems but acquiring solutions from others — that once a population had accumulated knowledge worth learning, the brain was selected for absorbing it.',
          detailed:
            'This makes brain size and culture mutually reinforcing rather than one causing the other: more culture makes a bigger brain worth paying for, and a bigger brain allows more culture to accumulate. It has the advantage of explaining the acceleration, since feedback loops accelerate. It has the disadvantage of being difficult to test, because the cultural half is invisible for most of the period.',
        },
      },
      {
        id: 'the-honest-answer',
        kind: 'open-question',
        question: 'What drove the increase in hominin brain size?',
        whyItMatters: {
          essential:
            'It is the central question of human evolution, and how confidently it is answered shapes almost everything else people believe about human origins.',
          detailed:
            'It also matters because a single-cause answer would license a lot of further inference — about human nature, about what we are "for", about which capacities are fundamental. The absence of one is itself a finding, and it should make anyone suspicious of a book that offers a single key to humanity.',
        },
        whatWouldSettleIt: {
          essential:
            'Comparative tests that discriminate rather than merely support, and better data on the ecological and social circumstances of hominin populations at the times when brain size actually changed.',
          detailed:
            'The deeper problem may be that the question presupposes one answer. Brain expansion occurred across two million years and several lineages; different pressures could have dominated at different times, and a mixture of causes would produce exactly the pattern of partially supported, mutually incompatible hypotheses the field currently has. Distinguishing "no single cause" from "cause not yet found" is itself hard, and the field has not agreed on how.',
        },
        references: [
          referenceId('powell-2017-brain-size-hypotheses'),
          referenceId('decasien-2017-primate-brain-diet'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Whatever drove it, the social hypothesis points at something real about human minds, and it is worth looking at on its own terms.',
        },
      },
    ],
    furtherReading: [referenceId('dunbar-shultz-2007-social-brain')],
  },

  {
    id: topicId('social-intelligence'),
    slug: 'social-intelligence',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 31,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Social intelligence',
    subtitle: 'Where toddlers and chimpanzees differ is narrower than you would expect.',
    summary: {
      essential:
        'Tested on physical problems — space, quantity, causality — two-year-old children and adult chimpanzees perform about equally. Tested on social problems, the children are far ahead.',
      detailed:
        'The difference is not general intelligence but a specific cluster: following another’s attention, understanding that others have intentions, and acting together towards a shared goal.',
      technical:
        'The Primate Cognition Test Battery found 2.5-year-olds and adult chimpanzees statistically indistinguishable on the physical domain and children substantially superior on the social domain. The result is robust but has been debated on grounds of testing conditions and rearing history.',
    },
    glossaryTerms: [glossaryTermId('social-learning'), glossaryTermId('cumulative-culture')],
    related: [topicId('learning-imitation-and-teaching'), topicId('why-did-brains-get-bigger')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Give a two-and-a-half-year-old child and an adult chimpanzee the same set of physical puzzles — where a hidden object went, which quantity is larger, how to get a reward out of a tube — and they score about the same. The child is not smarter across the board.',
          detailed:
            'Change to social tasks and the picture separates sharply. Can you work out what someone is trying to do from a failed attempt? Can you follow a pointing finger to a hidden object? Can you learn a new solution by watching? On these, the child is well ahead of the chimpanzee and the gap is large.',
        },
      },
      {
        id: 'cognition-figure',
        kind: 'visualization',
        visualizationId: visualizationId('cognition-battery'),
      },
      {
        id: 'battery-claim',
        kind: 'claim',
        statement: {
          essential:
            'Two-and-a-half-year-old children and adult chimpanzees perform comparably on physical cognition tasks, while children perform substantially better on social cognition tasks.',
          detailed:
            'The Primate Cognition Test Battery administered to 105 children, 106 chimpanzees and 32 orangutans found no significant human advantage in the physical domain and a large one in the social domain, particularly in social learning, communication and theory of mind.',
        },
        evidence: 'established',
        references: [referenceId('herrmann-2007-cultural-intelligence')],
      },
      {
        id: 'shared-intentionality',
        kind: 'prose',
        text: {
          essential:
            'The capacity at the centre of the difference has a name: shared intentionality. It is the ability to hold a goal jointly with someone else — not merely to want the same thing, but to know that you both know you are doing it together.',
          detailed:
            'It sounds abstract and it shows up very early and very concretely. Infants point at things simply to share attention, with nothing to gain. They offer objects to show rather than to give. They notice when a partner stops cooperating and try to re-engage them. Chimpanzees do many sophisticated social things — deceive, form coalitions, reconcile after conflict — and do not do this cluster in the same way.',
          technical:
            'Whether the difference is a distinct cognitive adaptation or an emergent consequence of other differences, including a long dependent childhood in a cooperative environment, is unresolved. Comparative work is also constrained by the fact that captive apes and human children differ in rearing environment in ways that are impossible to equalise.',
        },
      },
      {
        id: 'why-it-matters',
        kind: 'prose',
        text: {
          essential:
            'This matters more than it might seem, because shared intentionality is what makes information transmit accurately. Learning from someone requires more than watching them. It requires attending to what they attend to, inferring what they are trying to achieve, and copying the goal rather than the surface movements.',
          detailed:
            'That is the link between social cognition and everything in the next movement. A population that can transmit skills faithfully can accumulate them across generations; a population that cannot, cannot, however intelligent its individuals are. On this view the decisive human capacity was never individual problem-solving. It was the machinery for getting a solution reliably out of one head and into another.',
        },
      },
      {
        id: 'careful',
        kind: 'callout',
        tone: 'caution',
        title: 'What comparative tests can and cannot show',
        text: {
          essential:
            'The children were tested by adults of their own species, in a familiar setting, using conventions they had been immersed in since birth. The chimpanzees were not. Some of the gap may be about the test rather than the mind.',
          detailed:
            'This objection has been raised repeatedly and it is a real limitation rather than a quibble. It does not obviously explain the pattern — the same asymmetry would then have to spare the physical tasks, where children have no advantage — but it means the size of the social gap should be held more loosely than its existence.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Copying faithfully turns out to be a more unusual capacity than it sounds, and it produces an effect that no amount of individual cleverness can substitute for.',
        },
      },
    ],
    furtherReading: [referenceId('tomasello-2005-shared-intentionality')],
  },

  {
    id: topicId('learning-imitation-and-teaching'),
    slug: 'learning-imitation-and-teaching',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 32,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Learning, imitation and teaching',
    subtitle: 'Copying badly loses information. Copying well lets it accumulate.',
    summary: {
      essential:
        'Many animals learn from each other. What is unusual about humans is the fidelity of the copying, which is what allows improvements to survive long enough to be built on.',
      detailed:
        'Without high-fidelity transmission, each generation loses part of what the last one knew and progress cannot compound. With it, a population accumulates knowledge no individual could have invented.',
      technical:
        'Transmission chain experiments show fidelity determines whether a skill degrades or is maintained across generations. Experimental work on Oldowan knapping transmission finds reverse engineering and imitation produce markedly lower yields than gestural or verbal teaching.',
    },
    glossaryTerms: [glossaryTermId('social-learning'), glossaryTermId('cumulative-culture')],
    related: [
      topicId('social-intelligence'),
      topicId('cumulative-culture'),
      topicId('the-long-childhood'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Social learning is not rare. Chimpanzee communities have local traditions of tool use that neighbouring communities lack. Whales pass on songs. Birds learn dialects. Learning from others is widespread.',
          detailed:
            'What is rare is the accuracy. Chimpanzees watching a demonstration tend to extract the goal and then work out their own route to it — "emulation" rather than imitation. Human children do something stranger: they copy the actions, including actions that are visibly unnecessary. Shown a sequence where the demonstrator taps a box before opening it, a chimpanzee skips the tap and a child does not.',
        },
      },
      {
        id: 'transmission-figure',
        kind: 'visualization',
        visualizationId: visualizationId('transmission-fidelity'),
      },
      {
        id: 'overimitation',
        kind: 'prose',
        text: {
          essential:
            'Copying the unnecessary step looks like a failure of reasoning. It is arguably the opposite. If you are learning something you do not understand — and a child learning from adults usually is — then reproducing the whole procedure is safer than reproducing the parts you think matter.',
          detailed:
            'Many human techniques have steps whose purpose is invisible. Leaching toxins from a plant food may require a sequence of soaking, heating and rinsing where omitting one step produces poisoning that is slow and hard to attribute. A learner who trims what seems redundant will be wrong often enough to matter. Copying faithfully, without requiring understanding, preserves information nobody currently possesses.',
        },
      },
      {
        id: 'the-ratchet',
        kind: 'prose',
        text: {
          essential:
            'The consequence is a ratchet. If copying is accurate enough, an improvement made by one person survives into the next generation, and the generation after can improve on that rather than starting over. If copying is lossy, each generation recovers only part of the last one’s knowledge and the level stalls.',
          detailed:
            'This is why cumulative culture is not simply a matter of intelligence. It is a property of a transmission system. And it means the important evolutionary change might not have been in reasoning ability at all, but in the mechanisms of attention, motivation and imitation that determine how faithfully information moves between people.',
        },
      },
      {
        id: 'teaching-experiment',
        kind: 'prose',
        text: {
          essential:
            'It is possible to test this with actual stone tools. Take volunteers who have never knapped, transmit the skill along a chain of learners under different conditions, and measure what survives at the end of the chain.',
          detailed:
            'The conditions ranged from reverse engineering — just being handed the products — through observing a knapper, to being actively taught with gestures, to being taught with speech. Yield and skill declined sharply in the low-support conditions and were maintained under active teaching. Even the simplest stone technology transmits poorly by observation alone.',
          technical:
            'The result is used to argue that Oldowan technology implies some form of teaching, and that the million-year stasis of the Acheulean might reflect a transmission ceiling rather than a cognitive one. Both inferences are contested: modern undergraduates are not a model of Pleistocene learners, and the experiments compress into hours what would have been years of childhood exposure.',
        },
      },
      {
        id: 'teaching-claim',
        kind: 'claim',
        statement: {
          essential:
            'In transmission-chain experiments, Oldowan knapping skill degrades rapidly when learners only observe, and is maintained when they are actively taught.',
          detailed:
            'Across chains of 184 participants, imitation and emulation conditions produced substantially lower flake yield and quality than gestural or verbal teaching conditions. The extrapolation to Pleistocene hominins is an inference from modern naive learners.',
        },
        evidence: 'inference',
        references: [referenceId('morgan-2015-teaching-tools')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Teaching with speech performed best in that experiment, which raises the question the rest of this movement has been avoiding: when did people start talking?',
        },
      },
    ],
    furtherReading: [referenceId('whiten-2011-social-learning')],
  },

  {
    id: topicId('language'),
    slug: 'language',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 33,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Language',
    subtitle: 'The most consequential human capacity, and the worst-evidenced.',
    summary: {
      essential:
        'We do not know when language evolved. Speech leaves no direct trace, the anatomical proxies are weak, and the genetic story that briefly seemed to settle it has fallen apart.',
      detailed:
        'What we have are indirect arguments: anatomy that permits speech, archaeology that seems to require communication, and comparative evidence about what other animals can and cannot do. None of them dates the origin of language.',
      technical:
        'Proposed proxies — hypoglossal canal size, hyoid morphology, vocal tract reconstruction, auditory bandwidth, FOXP2 — have each been found either not diagnostic or, in the FOXP2 case, not supported on larger samples. The field ranges from claims of a recent origin under 100 ka to a shared origin before the sapiens–Neanderthal split.',
    },
    glossaryTerms: [glossaryTermId('cumulative-culture'), glossaryTermId('social-learning')],
    related: [
      topicId('symbolic-thought'),
      topicId('learning-imitation-and-teaching'),
      topicId('neanderthals'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Language is probably the most important thing about human beings and it is the hardest thing in this section to say anything reliable about. Speech is air. It leaves nothing. Every claim about when language began is an inference from something else.',
          detailed:
            'The something-elses have not held up well. For a while the size of the canal carrying the nerve to the tongue was proposed as a proxy for fine motor control of speech; it turned out to vary too much among living primates to be diagnostic. Reconstructions of the vocal tract from fossil skulls were used to argue Neanderthals could not produce the full vowel range; the reconstructions depended on assumptions about soft tissue that do not survive. A hyoid bone from a Neanderthal was found to be essentially modern; unfortunately a hyoid tells you little about what was done with it.',
        },
      },
      {
        id: 'evidence-figure',
        kind: 'visualization',
        visualizationId: visualizationId('language-evidence'),
      },
      {
        id: 'foxp2',
        kind: 'prose',
        text: {
          essential:
            'Then came what looked like a solution. A British family with an inherited speech and language disorder led to the identification of a gene, FOXP2. Humans carry two amino acid changes not found in chimpanzees. Early analyses suggested these had swept through the human population in the last 200,000 years. It was widely reported as the language gene.',
          detailed:
            'Almost all of that has since been qualified. FOXP2 is a regulatory gene active in many tissues and in many species — it is involved in birdsong learning and in mouse vocalisation. The disorder in that family involves general orofacial motor control, not a specific loss of grammar. Neanderthals turned out to carry the same two amino acid changes we do. And when the selective sweep was re-examined with much larger and more diverse samples, the evidence for recent selection did not hold.',
        },
      },
      {
        id: 'foxp2-claim',
        kind: 'claim',
        statement: {
          essential:
            'The reported recent selective sweep at FOXP2 is not supported by larger, more diverse genomic samples.',
          detailed:
            'Reanalysis using expanded and globally diverse datasets found the original signal attributable to sample composition. FOXP2 remains relevant to speech motor control; the claim that it underwent recent human-specific positive selection does not stand.',
        },
        evidence: 'established',
        references: [referenceId('atkinson-2018-foxp2-revisited')],
      },
      {
        id: 'what-is-left',
        kind: 'prose',
        text: {
          essential:
            'What survives is weaker and more interesting. Neanderthal ear bones indicate hearing tuned to the same narrow frequency band that carries the information-dense parts of human speech — a band that chimpanzee hearing does not emphasise.',
          detailed:
            'That is genuinely suggestive, because auditory tuning to a speech-relevant band is hard to explain unless something speech-like was being listened to. It is not proof: the tuning could serve other vocal communication, and the reconstruction of hearing from fossil ear anatomy involves modelling. Combined with the shared FOXP2 variants and the archaeological record of Neanderthal behaviour, it has moved many researchers towards thinking language, in some form, predates the split between our lineages.',
          technical:
            'The opposing position holds that the modern language faculty is recent and perhaps abrupt, associated with the behavioural changes of the last 100,000 years. The disagreement is not primarily about evidence — both sides accept the same data — but about what would count as language, which is a definitional dispute that evidence alone cannot settle.',
        },
      },
      {
        id: 'hearing-claim',
        kind: 'claim',
        statement: {
          essential:
            'Neanderthal auditory anatomy indicates sensitivity across the same frequency range that carries most information in human speech.',
          detailed:
            'Modelled auditory capacities from CT scans of Sima de los Huesos and Neanderthal temporal bones show an occupied bandwidth comparable to modern humans and wider than chimpanzees. The inference from hearing range to spoken language is indirect.',
        },
        evidence: 'inference',
        references: [referenceId('conde-valverde-2021-hearing')],
      },
      {
        id: 'open',
        kind: 'open-question',
        question: 'When did language evolve?',
        whyItMatters: {
          essential:
            'Language is what makes cumulative culture possible at scale. Whether it arrived half a million years ago or fifty thousand changes the explanation for almost everything else in the archaeological record.',
          detailed:
            'It also determines how we read Neanderthals. If language is old and shared, then their technology, their burials and their pigment use sit in a familiar frame. If it is recent and exclusive to us, then a different explanation is needed for everything they did.',
        },
        whatWouldSettleIt: {
          essential:
            'Honestly, it is not clear anything would. There is no known trace that language leaves in bone, stone or DNA that could be read unambiguously.',
          detailed:
            'Progress is most likely to come indirectly: better understanding of the genetics of language development in living people, better comparative work on what communication systems other species can and cannot support, and archaeological evidence of behaviours that are difficult to imagine transmitting without symbolic communication. All of that constrains the question without answering it, and some researchers argue the origin of language may be permanently beyond direct evidence.',
        },
        references: [
          referenceId('dediu-levinson-2013-neandertal-language'),
          referenceId('fisher-scharff-2009-foxp2'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'One thing does leave a trace: using one thing to stand for another. That is visible in the ground, and it is the closest archaeology gets to looking inside a mind.',
        },
      },
    ],
    furtherReading: [referenceId('rilling-2008-arcuate')],
  },

  {
    id: topicId('symbolic-thought'),
    slug: 'symbolic-thought',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 34,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Symbolic thought',
    subtitle: 'A mark that means something is the only kind of thought that fossilises.',
    summary: {
      essential:
        'A symbol is something that stands for something else by convention. Pigment, beads and engravings are the archaeological traces of that capacity, and they appear earlier and more patchily than the old "creative revolution" story allowed.',
      detailed:
        'Interpreting them is hard: a mark can be decoration, a tally, a signature or a by-product, and archaeology often cannot distinguish these. What it can establish is deliberate, repeated, non-functional modification.',
      technical:
        'The traditional threshold was the European Upper Palaeolithic around 40 ka. African Middle Stone Age evidence — Blombos engravings at 77 ka, shell beads at 82 ka, Olorgesailie pigment at 320 ka — has moved the earliest evidence substantially older and shifted the debate from when to how gradual.',
    },
    glossaryTerms: [glossaryTermId('middle-stone-age'), glossaryTermId('cumulative-culture')],
    related: [topicId('language'), topicId('pigment-ornament-and-inference'), topicId('cave-art')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A stone tool tells you someone could make a stone tool. A bead tells you something different: that someone chose a shell for no nutritional reason, carried it inland, made a hole in it, wore it, and that other people understood what wearing it meant.',
          detailed:
            'That last step is the important one. A symbol only works if it is shared. Marking yourself with ochre is pointless unless somebody reads the mark. So symbolic objects are indirect evidence of a community with conventions — which is much closer to evidence of a mind than any tool is.',
        },
      },
      {
        id: 'symbols-figure',
        kind: 'visualization',
        visualizationId: visualizationId('symbolic-record'),
      },
      {
        id: 'the-old-story',
        kind: 'prose',
        text: {
          essential:
            'The story that held for most of the twentieth century was of a sudden revolution: anatomically modern humans existed for a hundred thousand years behaving unremarkably, then around 40,000 years ago in Europe something changed and art, ornament, complex tools and burial appeared together.',
          detailed:
            'It was an artefact of where people had been digging. European caves had been excavated intensively for a century; African Middle Stone Age sites had not. As African excavation expanded, the supposed revolution began to dissolve backwards into a long, patchy accumulation.',
        },
      },
      {
        id: 'blombos',
        kind: 'prose',
        text: {
          essential:
            'Blombos Cave in South Africa is the site that broke the model. It produced pieces of ochre engraved with deliberate cross-hatched patterns at around 77,000 years ago, shell beads with wear from being strung, and later a piece of stone with lines drawn on it in an ochre crayon.',
          detailed:
            'The engraving is the strongest of these. Cross-hatching is not a by-product of scraping pigment for use — the lines are ordered, repeated across separate pieces, and made with deliberate strokes. It is hard to call it a message, because we cannot read it. It is not hard to call it intentional patterning that meant something to somebody.',
        },
      },
      {
        id: 'blombos-claim',
        kind: 'claim',
        statement: {
          essential:
            'Deliberate abstract engravings on ochre were being produced in southern Africa by about 77,000 years ago.',
          detailed:
            'Multiple engraved ochre pieces from Blombos Cave show consistent cross-hatched designs produced by deliberate stroke sequences, in securely dated Middle Stone Age layers. Their meaning is unknown; their intentionality is not seriously disputed.',
        },
        evidence: 'established',
        references: [
          referenceId('henshilwood-2002-blombos'),
          referenceId('henshilwood-2018-drawing'),
        ],
      },
      {
        id: 'older-still',
        kind: 'prose',
        text: {
          essential:
            'Pigment goes back much further. At Olorgesailie in Kenya, ochre with signs of processing occurs at around 320,000 years ago, alongside obsidian brought from tens of kilometres away — which is itself evidence of either exchange between groups or a much wider range than earlier hominins had.',
          detailed:
            'Pigment is weaker evidence than an engraving, because ochre has non-symbolic uses: it works as an adhesive additive, a hide preservative and possibly a sunscreen. Its presence alone does not demonstrate symbolism. But processed pigment plus long-distance raw material transport at 320,000 years suggests a set of behaviours that the old model placed a quarter of a million years later.',
        },
      },
      {
        id: 'olorgesailie-claim',
        kind: 'claim',
        statement: {
          essential:
            'Pigment processing and transport of stone over tens of kilometres were occurring in East Africa by about 320,000 years ago.',
          detailed:
            'Excavations at Olorgesailie document worked ochre and obsidian sourced from distances of 25–95 km in early Middle Stone Age contexts. The symbolic interpretation of the pigment is an inference; the transport distances are measurements.',
        },
        evidence: 'inference',
        references: [referenceId('brooks-2018-olorgesailie')],
      },
      {
        id: 'absence',
        kind: 'callout',
        tone: 'caution',
        title: 'Absence of evidence, in a record that destroys most things',
        text: {
          essential:
            'Almost all symbolic behaviour would leave no trace. Body paint washes off. Songs and stories vanish. Anything made of wood, fibre, feather or skin is gone within centuries outside exceptional conditions.',
          detailed:
            'So the archaeological record of symbolism is a record of what happened to be durable, in places that happened to preserve it, that happened to be excavated. The first appearance of a bead in the record is not the first bead. This cuts both ways: it warns against reading a late first appearance as a late origin, and equally against treating the earliest known example as the beginning of anything.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Minds are inferred. Stone is not. The clearest window onto what hominins were actually doing is the technology they left, and it starts earlier than our own genus.',
        },
      },
    ],
    furtherReading: [referenceId('bouzouggar-2007-beads')],
  },
];
