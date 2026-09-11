/**
 * Human Evolution, Scientific Lens — Movement V: tools, fire and culture.
 *
 * This is the turning point of the whole section, and the writing has to earn
 * it rather than announce it. The argument is that behaviour stops being only
 * an output of evolution and starts being an input: cooking changes what a gut
 * needs to be, technology changes which bodies survive, and accumulated
 * knowledge becomes something selection can act on.
 *
 * The cooking hypothesis is the hardest thing here to write honestly. It is
 * elegant, influential, and its central prediction — controlled fire early
 * enough to matter — is not supported by the archaeological record. Both halves
 * are stated.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const HUMAN_CULTURE_TOPICS: readonly Topic[] = [
  {
    id: topicId('the-first-stone-tools'),
    slug: 'the-first-stone-tools',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 35,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The first stone tools',
    subtitle: 'Simple to look at, difficult to make, and older than our genus.',
    summary: {
      essential:
        'The oldest widely accepted stone tools are about 2.6 million years old. Older claims at 3.3 million years exist and are debated. Either way, toolmaking begins before the genus Homo is securely established.',
      detailed:
        'An Oldowan flake looks crude and is not. Detaching a usable flake requires selecting the right stone, reading its internal structure, and striking at a precise angle — a skill that takes modern learners months to acquire.',
      technical:
        'Conchoidal fracture requires striking within a narrow range of exterior platform angles with appropriate force and location. Failure modes — step and hinge terminations, platform collapse — are frequent in naive knappers and rare in Oldowan assemblages, which is the basis for reading them as skilled rather than opportunistic.',
    },
    glossaryTerms: [glossaryTermId('oldowan'), glossaryTermId('knapping')],
    related: [
      topicId('the-hand-and-the-grip'),
      topicId('tools-and-minds'),
      topicId('the-first-homo'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Pick up an Oldowan tool and it is easy to be unimpressed: a fist-sized cobble with a few chips knocked off one edge. Try to make one and the impression changes quickly. Most people who attempt it produce nothing usable for a long time.',
          detailed:
            'The reason is that stone does not break where you hit it. It breaks along a cone of force that propagates from the impact point, and whether a clean flake comes off depends on the angle of the edge you strike, the angle of the blow, the force, and the internal structure of the stone — which you must read from the outside. Get any of these wrong and the stone shatters, or the flake terminates in a step that ruins the edge for further work.',
        },
      },
      {
        id: 'knapping-figure',
        kind: 'visualization',
        visualizationId: visualizationId('knapping-mechanics'),
      },
      {
        id: 'not-crude',
        kind: 'prose',
        text: {
          essential:
            'Look at Oldowan assemblages with that in mind and they stop looking crude. The failure patterns that dominate a beginner’s output are uncommon. Raw material was selected — some sites show a preference for particular stone types, carried from particular outcrops rather than picked up locally.',
          detailed:
            'Carrying stone is the detail that changes the interpretation most. Moving a cobble several kilometres before using it means anticipating a future need at a place you are not yet at, with a material you have chosen for properties you have learned about. That is not opportunistic behaviour, and it is present from early in the record.',
        },
      },
      {
        id: 'gona-claim',
        kind: 'claim',
        statement: {
          essential:
            'Deliberately flaked stone tools were being made by about 2.6 million years ago.',
          detailed:
            'The Gona assemblages in Ethiopia are securely dated and show systematic conchoidal flaking with selection of raw material, establishing skilled knapping rather than incidental fracture.',
        },
        evidence: 'established',
        references: [referenceId('semaw-1997-gona')],
      },
      {
        id: 'lomekwi',
        kind: 'prose',
        text: {
          essential:
            'In 2015 a much older claim appeared: flaked stone at Lomekwi in Kenya, dated to 3.3 million years — seven hundred thousand years before the oldest accepted tools, and before any fossil assigned to Homo.',
          detailed:
            'The Lomekwi pieces are large and were apparently made by a different technique, striking a core against an anvil rather than holding it. If genuine, they show toolmaking arising in australopith-grade hominins. The claim is contested: critics argue some pieces could result from natural rock fracture, and the site has not yet been paralleled elsewhere. It has not been withdrawn and it has not been accepted.',
        },
      },
      {
        id: 'lomekwi-claim',
        kind: 'claim',
        statement: {
          essential:
            'Flaked stone at Lomekwi, Kenya, has been dated to 3.3 million years ago and interpreted as deliberately made.',
          detailed:
            'The assemblage predates any securely identified member of Homo. Objections concern the possibility of natural fracture and the absence of comparable assemblages from the same period elsewhere; the interpretation remains under active debate.',
        },
        evidence: 'active-research',
        references: [referenceId('harmand-2015-lomekwi')],
      },
      {
        id: 'cutmarks',
        kind: 'callout',
        tone: 'note',
        title: 'Marks on bone, without the tools',
        text: {
          essential:
            'At Dikika in Ethiopia, animal bones from 3.4 million years ago carry marks interpreted as cuts from stone edges — older than any tools found nearby.',
          detailed:
            'The counter-argument is trampling: bones trodden into sandy sediment by passing animals acquire marks that can resemble cut marks under a microscope. The debate turned on statistical comparison of mark morphology and has not fully closed. It is a good illustration of how much of Early Stone Age archaeology depends on distinguishing deliberate modification from natural damage.',
        },
        references: [referenceId('mcpherron-2010-cutmarks')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'What happened next is stranger than the beginning. For over a million years, the technology barely changed.',
        },
      },
    ],
    furtherReading: [referenceId('stout-2011-toolmaking-brain')],
  },

  {
    id: topicId('a-million-years-of-the-same-handaxe'),
    slug: 'a-million-years-of-the-same-handaxe',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 36,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'A million years of the same handaxe',
    subtitle: 'Technological stasis is the thing that needs explaining, not technological change.',
    summary: {
      essential:
        'The Acheulean handaxe appears about 1.76 million years ago and persists, largely unchanged, across Africa, Europe and Asia for over a million years. Nothing in later human history resembles that stability.',
      detailed:
        'It is a genuine puzzle. Brains were getting larger throughout the period, and the technology did not improve. Whatever makes human technology accumulate today was evidently not operating, or not operating the same way.',
      technical:
        'Acheulean bifaces require hierarchical action sequences, imposed symmetry in three planes and platform preparation — cognitively more demanding than Oldowan flaking by most measures — yet show minimal directional change over roughly 1.5 Myr and across three continents.',
    },
    glossaryTerms: [glossaryTermId('acheulean'), glossaryTermId('cumulative-culture')],
    related: [
      topicId('the-first-stone-tools'),
      topicId('cumulative-culture'),
      topicId('homo-erectus'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The handaxe is a teardrop of stone, worked on both faces, symmetrical along its length and across its thickness. Making one requires deciding on the final shape before you start and then removing material to reach it — the first evidence of a tool made to a mental template rather than to a usable edge.',
          detailed:
            'It appears around 1.76 million years ago in East Africa. It then spreads with Homo erectus across Africa, into the Near East, into Europe, into India. And for the next million and a half years, it stays essentially the same. A handaxe from Spain at half a million years and one from Tanzania at a million and a half are recognisably the same object.',
        },
      },
      {
        id: 'stasis-figure',
        kind: 'visualization',
        visualizationId: visualizationId('technological-stasis'),
      },
      {
        id: 'stasis-claim',
        kind: 'claim',
        statement: {
          essential:
            'Acheulean biface technology persisted with minimal directional change for over a million years across three continents.',
          detailed:
            'Assemblages spanning roughly 1.76 Ma to 0.3 Ma show local variation in size and refinement without cumulative directional improvement, a pattern without parallel in later human technology.',
        },
        evidence: 'established',
        references: [referenceId('lepre-2011-acheulean')],
      },
      {
        id: 'why-strange',
        kind: 'prose',
        text: {
          essential:
            'Consider how strange this is by comparison. In the last ten thousand years, human technology has changed beyond recognition several times over. In the last two hundred, several times per generation. The Acheulean went a hundred thousand generations without a noticeable improvement.',
          detailed:
            'And it is not that the makers were incapable of change — the handaxe itself was an innovation, and brain size was increasing throughout the period. Something about how information moved between people, or about the conditions of their lives, prevented improvements from accumulating.',
        },
      },
      {
        id: 'explanations',
        kind: 'prose',
        text: {
          essential:
            'Several explanations are on offer. Transmission may have been too lossy: if a skill has to be rediscovered partly from scratch each generation, improvements do not survive to be built on. Populations may have been too small and too scattered, so that innovations died with the groups that had them.',
          detailed:
            'A third possibility is that the handaxe was simply adequate. A general-purpose cutting and butchery tool in a stable way of life may have had no pressure pushing it anywhere. And a fourth is that we are mis-reading the evidence, because stone is what survives: the wooden, fibre and hide technologies that surrounded these tools are invisible, and they may have changed considerably while the stone stayed constant.',
          technical:
            'These are not mutually exclusive and none is established. The transmission and demography arguments are supported by experimental and ethnographic work on later technologies; extending them a million years back is an extrapolation. The "adequacy" argument is difficult to test at all, and the preservation argument is difficult to test in principle.',
        },
      },
      {
        id: 'lesson',
        kind: 'callout',
        tone: 'note',
        title: 'What stasis teaches about the later acceleration',
        text: {
          essential:
            'If a million years of large-brained hominins produced no cumulative technological change, then intelligence alone does not generate accumulating technology. Something else has to be in place.',
          detailed:
            'This is the negative result that makes the case for cumulative culture as a distinct phenomenon. Later movements return to it: the explosion of technological variety in the last hundred thousand years tracks population density and connection at least as closely as it tracks anything about brains.',
        },
        references: [referenceId('powell-2009-demography-culture')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Whatever the handaxe did or did not demand, making one leaves a signature in the brain that can be measured — in living people.',
        },
      },
    ],
    furtherReading: [referenceId('stout-2011-toolmaking-brain')],
  },

  {
    id: topicId('tools-and-minds'),
    slug: 'tools-and-minds',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 37,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Tools and minds',
    subtitle: 'What happens in a brain when it learns to knap.',
    summary: {
      essential:
        'Stone knapping can be taught to modern volunteers inside a brain scanner, which turns a question about extinct cognition into an experiment about living brains.',
      detailed:
        'The results show that Oldowan and Acheulean knapping recruit partly different networks, with the more complex technique drawing on regions also involved in hierarchical sequencing — including areas associated with language.',
      technical:
        'Functional imaging during naturalistic toolmaking shows Acheulean knapping recruiting right inferior frontal gyrus and ventral premotor regions beyond the Oldowan network, alongside white-matter change with training. The overlap with language-associated circuitry supports a shared-substrate hypothesis without demonstrating co-evolution.',
    },
    glossaryTerms: [glossaryTermId('knapping'), glossaryTermId('acheulean')],
    related: [topicId('a-million-years-of-the-same-handaxe'), topicId('language')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'You cannot scan a Homo erectus brain. You can teach a modern person to make the same tools, scan them while they do it, and see which systems the task requires. It is an indirect argument — but it converts speculation about cognition into measurement.',
          detailed:
            'The design is straightforward. Take volunteers with no knapping experience, train some of them intensively over months, and image brain activity and structure as the skill develops. Compare the simple Oldowan technique with the more demanding Acheulean one.',
        },
      },
      {
        id: 'toolmaking-figure',
        kind: 'visualization',
        visualizationId: visualizationId('toolmaking-cognition'),
      },
      {
        id: 'the-result',
        kind: 'prose',
        text: {
          essential:
            'The two techniques do not load the brain the same way. Oldowan knapping draws mainly on visual and motor systems — seeing the stone, aiming the blow. Acheulean knapping recruits those and additional regions in the right frontal lobe associated with organising actions into hierarchies: sequences of sub-goals that serve a larger plan.',
          detailed:
            'Some of those regions have counterparts on the left side involved in syntax. That has fuelled a long-running proposal that language and complex toolmaking share cognitive machinery for structured sequencing — that the ability to embed one operation inside another is the same ability in both cases.',
          technical:
            'The inference is limited in a specific way: it shows that a modern human brain, already shaped by a lifetime of language, performs the task using those regions. It does not show that a Homo erectus brain did, or that the shared substrate is ancestral rather than a modern redeployment. Overlapping activation is also weak evidence for shared mechanism, since brain regions are rarely dedicated to one function.',
        },
      },
      {
        id: 'imaging-claim',
        kind: 'claim',
        statement: {
          essential:
            'Acheulean toolmaking recruits brain regions beyond those used for Oldowan toolmaking, including areas associated with hierarchical action organisation.',
          detailed:
            'Functional imaging of trained knappers shows additional right prefrontal and ventral premotor recruitment for biface production, with training-related white matter change. The extension to extinct hominin cognition is an inference from modern brains.',
        },
        evidence: 'inference',
        references: [referenceId('stout-2011-toolmaking-brain')],
      },
      {
        id: 'careful',
        kind: 'callout',
        tone: 'caution',
        title: 'A modern brain is not a fossil brain',
        text: {
          essential:
            'Every participant in these experiments grew up speaking a language, using tools, and being taught. Watching which of their brain regions a task recruits tells you how a modern human does it, not how the original makers did.',
          detailed:
            'It is still worth doing, because it establishes what the task demands in principle — that the Acheulean requires hierarchical planning is a fact about the task, not about the knapper. But the step from "this task is cognitively demanding" to "its makers had the cognition we use for language" is a long one, and the literature is not always careful about taking it.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Stone is only one of the technologies that mattered, and probably not the most important. The other one leaves a much fainter trace.',
        },
      },
    ],
    furtherReading: [referenceId('morgan-2015-teaching-tools')],
  },

  {
    id: topicId('fire'),
    slug: 'fire',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 38,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Fire',
    subtitle: 'Using it, keeping it and making it are three different achievements.',
    summary: {
      essential:
        'Evidence of fire associated with hominins goes back about a million years. Evidence of habitual, controlled use is much later and much patchier, and that gap matters for everything built on it.',
      detailed:
        'Distinguishing a hearth from a natural burn requires showing heating in place, at temperatures and in patterns that wildfire does not produce. Very few early sites meet that standard.',
      technical:
        'Diagnostic criteria include heat-altered sediment micromorphology, burnt bone and lithics in spatially discrete concentrations, and magnetic susceptibility signatures. Wonderwerk at ~1 Ma and Gesher Benot Ya‘aqov at ~790 ka are the strongest early cases; habitual use in Europe appears only after ~400–300 ka.',
    },
    glossaryTerms: [glossaryTermId('taphonomy')],
    related: [topicId('cooking-and-the-energy-budget'), topicId('homo-erectus')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Three quite different things get called "the control of fire". Using a fire that started by itself. Keeping a fire alive by feeding it. Making one from nothing. They require different capabilities and they almost certainly appeared at different times.',
          detailed:
            'Archaeology struggles to distinguish them, and it struggles with a more basic problem first: telling a hearth from a wildfire. Lightning-started fires are common in African grassland and they burn bone, redden sediment and char wood exactly as a campfire does. Finding burnt material at a site proves that something burnt there.',
        },
      },
      {
        id: 'fire-figure',
        kind: 'visualization',
        visualizationId: visualizationId('fire-evidence'),
      },
      {
        id: 'the-test',
        kind: 'prose',
        text: {
          essential:
            'What distinguishes a hearth is heating in place, repeatedly, in one spot. That leaves signatures in the microscopic structure of the sediment: minerals altered at temperatures wildfire rarely reaches at ground level, ash preserved in situ rather than blown in, and a discrete concentration rather than a spread.',
          detailed:
            'Applied rigorously, this test removes most claimed early fire evidence. Wonderwerk Cave in South Africa survives it: burnt bone and ashed plant material, deep inside a cave where wildfire could not reach, at around a million years ago. Gesher Benot Ya‘aqov in Israel survives it differently — burnt flint clustered in the same locations across many successive occupation layers, which is hard to produce by accident.',
        },
      },
      {
        id: 'fire-claim',
        kind: 'claim',
        statement: {
          essential:
            'Hominins were using fire inside Wonderwerk Cave, South Africa, by about one million years ago.',
          detailed:
            'Micromorphological and spectroscopic analysis shows ashed plant material and burnt bone heated in situ at 30 m from the cave entrance, where natural fire is implausible. It establishes use; it does not establish fire-making or habitual use.',
        },
        evidence: 'established',
        references: [referenceId('berna-2012-wonderwerk')],
      },
      {
        id: 'the-gap',
        kind: 'prose',
        text: {
          essential:
            'The awkward part is what comes between. If fire was in use a million years ago, sites from the following half-million years should show it routinely. They do not. In Europe, well-excavated sites older than about 400,000 years generally lack fire evidence entirely, including sites where it would have been preserved.',
          detailed:
            'Two readings are possible. Either fire use was occasional and opportunistic for a very long time before becoming habitual, or habitual use is older and the evidence is systematically missing. The absence is hardest to dismiss where preservation is otherwise excellent — and that is where it is most consistently found.',
          technical:
            'The reviewers who established this pattern emphasise that hominins occupied northern Europe during cold stages apparently without fire, which if correct has substantial implications for how they coped. The claim is an argument from absence, and its strength rests on the quality of the sites where fire is absent rather than on their number.',
        },
      },
      {
        id: 'gap-claim',
        kind: 'claim',
        statement: {
          essential:
            'Habitual fire use in Europe appears only after roughly 400,000 years ago, despite earlier occupation.',
          detailed:
            'A systematic review of European sites finds no fire evidence at well-preserved localities before this threshold, followed by consistent evidence afterwards. The inference is from absence and is therefore weaker than a positive finding, but the pattern is consistent across many sites.',
        },
        evidence: 'inference',
        references: [referenceId('roebroeks-villa-2011-fire')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'That gap bears directly on one of the most influential hypotheses in the field, because the hypothesis requires fire to be early.',
        },
      },
    ],
    furtherReading: [referenceId('goren-inbar-2004-gesher')],
  },

  {
    id: topicId('cooking-and-the-energy-budget'),
    slug: 'cooking-and-the-energy-budget',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 39,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Cooking and the energy budget',
    subtitle: 'An elegant hypothesis with a chronological problem.',
    summary: {
      essential:
        'Cooking makes food substantially easier to digest, which could have paid for a larger brain and a smaller gut. The measured energetics support the mechanism; the archaeology does not yet support the timing.',
      detailed:
        'The hypothesis requires controlled fire by around two million years ago, when body and brain changed. The earliest solid fire evidence is about a million years later, and habitual use later still.',
      technical:
        'Cooking gelatinises starch and denatures protein, raising net energy yield and lowering the cost of digestion; feeding trials in mice show measurable mass differences on cooked versus raw diets. Non-thermal processing — slicing and pounding — also reduces masticatory effort substantially, offering an alternative route that requires no fire.',
    },
    glossaryTerms: [glossaryTermId('encephalization')],
    related: [topicId('fire'), topicId('the-cost-of-a-brain'), topicId('teeth-jaws-and-diet')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A chimpanzee spends something like six hours a day chewing. A human spends under an hour. That difference is not a matter of manners — raw food, especially raw plant food, takes an enormous amount of processing to extract energy from, and processing time is time not spent doing anything else.',
          detailed:
            'Cooking changes the arithmetic directly. Heat breaks down the structure of starch granules and unfolds proteins, so digestive enzymes reach more of the material and the body spends less energy extracting it. The net gain is real and has been measured: animals fed cooked versions of the same food gain more weight than animals fed it raw.',
        },
      },
      {
        id: 'energy-figure',
        kind: 'visualization',
        visualizationId: visualizationId('cooking-energy'),
      },
      {
        id: 'the-hypothesis',
        kind: 'prose',
        text: {
          essential:
            'The cooking hypothesis takes this and builds a large claim on it: that control of fire was the change that made everything else possible. More energy from the same food, less time chewing, smaller teeth and guts needed — and enough surplus to run a much larger brain.',
          detailed:
            'It explains a great deal at once, which is what makes it attractive. The reduction in tooth and gut size in Homo erectus, the increase in brain size, the shift to a body that cannot survive on raw food in the wild — all fall out of one change. Modern humans really are obligate cooks: sustained raw-food diets in industrialised settings, with cultivated high-calorie foods available, still lead to weight loss and reproductive disruption in a substantial fraction of people.',
        },
      },
      {
        id: 'cooking-claim',
        kind: 'claim',
        statement: {
          essential:
            'Cooking substantially increases the energy an animal obtains from the same food.',
          detailed:
            'Controlled feeding trials show greater body mass maintenance on cooked than raw diets of identical composition, for both meat and starch-rich tubers, with animals preferring cooked food when given the choice.',
        },
        evidence: 'established',
        references: [referenceId('carmody-wrangham-2009-cooking')],
      },
      {
        id: 'the-problem',
        kind: 'prose',
        text: {
          essential:
            'The problem is chronological. The anatomical changes the hypothesis explains happen around 1.9 million years ago. The earliest solid evidence of fire use is around one million. Habitual fire use is later than that.',
          detailed:
            'That is a gap of roughly a million years between the effect and its proposed cause. Advocates argue the archaeological record is simply missing early fire, which is not unreasonable given how poorly open-air hearths preserve. Critics reply that this converts the hypothesis into one that cannot currently be tested, and that the absence is strongest precisely where preservation is best.',
        },
      },
      {
        id: 'alternative',
        kind: 'prose',
        text: {
          essential:
            'There is an alternative that needs no fire at all. Slicing meat and pounding tubers with stone tools — technology that is securely dated to 2.6 million years — reduces chewing effort substantially on its own.',
          detailed:
            'Measured directly, a diet including a third meat, with the meat sliced and the tubers pounded, cuts the number of chews per year by about 2.5 million and reduces the force required per chew by around 15%. That is enough to relax selection on teeth and jaws without invoking fire, and it arrives at the right time. It does not deliver the same energetic gain as cooking, so it weakens the brain-energy half of the argument while strengthening the chronology.',
        },
      },
      {
        id: 'processing-claim',
        kind: 'claim',
        statement: {
          essential:
            'Slicing meat and pounding plant foods with simple stone tools substantially reduces chewing effort without any use of fire.',
          detailed:
            'Experimental measurement of masticatory performance gives roughly a 17% reduction in chewing force and a 2.5 million reduction in annual chewing cycles for a diet including one-third sliced meat and pounded tubers, relative to unprocessed food.',
        },
        evidence: 'established',
        references: [referenceId('zink-lieberman-2016-food-processing')],
      },
      {
        id: 'open',
        kind: 'open-question',
        question: 'Did cooking drive the changes in Homo erectus anatomy?',
        whyItMatters: {
          essential:
            'It is the strongest candidate for a single technological change that reshaped human biology, and the first clear case of behaviour altering the selection pressures acting on a body.',
          detailed:
            'If it holds, gene–culture feedback begins two million years ago rather than in the Neolithic, and the human body is in a meaningful sense a product of technology. If it does not, the anatomical changes need a different cause and the feedback story starts much later.',
        },
        whatWouldSettleIt: {
          essential:
            'Secure evidence of controlled fire at or before about 1.9 million years ago — or a demonstration that the early absence of fire evidence is a preservation artefact rather than a real absence.',
          detailed:
            'Progress is most likely from micromorphological analysis of well-preserved early sites, and from better modelling of how open-air combustion features survive. Dietary reconstruction from dental and isotopic evidence at the relevant dates can constrain what was being eaten without resolving how it was processed, which is the crux.',
        },
        references: [
          referenceId('wrangham-2009-catching-fire'),
          referenceId('roebroeks-villa-2011-fire'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Whichever route it took, something important has happened here that the rest of the section depends on: what our ancestors did began to change what selection was acting on.',
        },
      },
    ],
    furtherReading: [referenceId('herculano-houzel-2012-cooked')],
  },

  {
    id: topicId('when-behaviour-starts-changing-evolution'),
    slug: 'when-behaviour-starts-changing-evolution',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 40,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'When behaviour starts changing evolution',
    subtitle: 'The environment that selects a population is partly built by that population.',
    summary: {
      essential:
        'Once a population reliably processes its food, shelters itself and passes on techniques, the pressures acting on its bodies are partly of its own making. Evolution stops being a one-way process.',
      detailed:
        'This is not unique to humans — beavers and earthworms do versions of it — but in humans the constructed part of the environment is transmitted culturally, which makes it change far faster than genes can.',
      technical:
        'Niche construction models treat the organism-modified environment as a second inheritance channel with its own dynamics. Where cultural transmission supplies that channel, environmental change can outpace genetic response, producing sustained directional selection rather than equilibrium.',
    },
    glossaryTerms: [
      glossaryTermId('niche-construction'),
      glossaryTermId('gene-culture-coevolution'),
    ],
    related: [
      topicId('cooking-and-the-energy-budget'),
      topicId('gene-culture-coevolution'),
      topicId('niche-construction'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Up to this point the story has a simple shape: the world presents problems, and populations that happen to cope leave more descendants. From here on that shape breaks down, because the population is now altering the world it is being tested against.',
          detailed:
            'A hominin that processes food with tools is no longer subject to the same pressure on teeth. One that uses fire for warmth is no longer under the same pressure for body hair or fat. One that makes shelter changes what climate means for it. The selective environment is not simply given any more — part of it is manufactured, and manufactured differently by different groups.',
        },
      },
      {
        id: 'feedback-figure',
        kind: 'visualization',
        visualizationId: visualizationId('behaviour-feedback'),
      },
      {
        id: 'not-unique',
        kind: 'prose',
        text: {
          essential:
            'Animals modifying their own selective environment is not a human invention. Beavers build dams and their descendants are selected in ponds their ancestors made. Earthworms have restructured soil chemistry for hundreds of millions of years, and their physiology reflects the soil they produce rather than the soil they started with.',
          detailed:
            'What differs in humans is the transmission channel. A beaver’s dam-building is genetically transmitted, so the constructed environment changes only as fast as the genes do. Human techniques are transmitted by learning, which means they can change within a generation, spread sideways through a population, and accumulate. The constructed environment can therefore move far faster than any genetic response to it.',
        },
      },
      {
        id: 'niche-claim',
        kind: 'claim',
        statement: {
          essential:
            'Organisms that modify their environments alter the selection pressures acting on their descendants, and culturally transmitted modifications can do so faster than genetic change can track.',
          detailed:
            'Niche construction is documented across many taxa. The human case is distinguished by the speed and cumulative character of cultural transmission, which decouples the rate of environmental change from the rate of genetic change.',
        },
        evidence: 'model',
        references: [
          referenceId('laland-2000-gene-culture'),
          referenceId('odling-smee-2003-niche-construction'),
        ],
      },
      {
        id: 'careful',
        kind: 'callout',
        tone: 'caution',
        title: 'This does not mean culture replaced biology',
        text: {
          essential:
            'A common misreading is that once culture appears, evolution stops mattering. The opposite follows: culture creates new selection pressures, and several of the strongest signals of recent selection in the human genome are responses to culturally created conditions.',
          detailed:
            'Dairying selected for lactase persistence. Farming selected for starch digestion and for resistance to crowd diseases that farming itself created. These are not evolution being suspended; they are evolution responding to an environment people built. The relationship is a loop, not a handover.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'For that loop to run, knowledge has to survive between generations reliably enough to accumulate. That turns out to depend on something unexpected: how many people there are.',
        },
      },
    ],
    furtherReading: [referenceId('richerson-boyd-2005-not-by-genes')],
  },

  {
    id: topicId('cumulative-culture'),
    slug: 'cumulative-culture',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 41,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Cumulative culture',
    subtitle: 'Knowledge that survives its inventor, and the population size it needs.',
    summary: {
      essential:
        'Cumulative culture is knowledge that builds across generations instead of being reinvented. It depends on faithful transmission — and faithful transmission depends on having enough connected people.',
      detailed:
        'Small, isolated populations lose techniques. This is documented historically and reproduced experimentally, and it offers an explanation for archaeological "regressions" that does not require anyone to have become less intelligent.',
      technical:
        'Models of cultural transmission with imperfect copying predict an equilibrium skill level increasing with the number of models available and with transmission fidelity. Below a threshold, expected loss exceeds expected innovation and complexity declines — a demographic rather than cognitive constraint.',
    },
    glossaryTerms: [glossaryTermId('cumulative-culture'), glossaryTermId('social-learning')],
    related: [
      topicId('learning-imitation-and-teaching'),
      topicId('a-million-years-of-the-same-handaxe'),
      topicId('exchange-and-social-networks'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'No individual human knows how to make a pencil. Someone knows about graphite, someone about the timber, someone about the machining, someone about the lacquer — and nobody holds the whole process. Human technology exceeds individual understanding by an enormous margin, and it does so because knowledge accumulates outside any one head.',
          detailed:
            'That is the defining feature. An individual chimpanzee can invent a technique, and other chimpanzees can pick it up; what does not happen is a chain in which each generation starts from the last one’s best and adds to it. Without that chain, technology is bounded by what one lifetime can discover.',
        },
      },
      {
        id: 'ratchet-figure',
        kind: 'visualization',
        visualizationId: visualizationId('cultural-ratchet'),
      },
      {
        id: 'losing-it',
        kind: 'prose',
        text: {
          essential:
            'The ratchet can also run backwards, and this is where the argument gets its empirical teeth. Cultural knowledge is lost when there are too few people holding it.',
          detailed:
            'Tasmania is the textbook case. Rising sea levels at the end of the last glacial cut Tasmania off from mainland Australia around 10,000 years ago, isolating a population of a few thousand people. Over the following millennia the archaeological record shows the disappearance of bone tools, of fishing, of hafted implements — a toolkit becoming simpler rather than more complex. Nothing suggests anyone became less capable. The population was simply too small to reliably retain every skill.',
          technical:
            'The Tasmanian interpretation has been debated, with some arguing for deliberate abandonment of fishing for cultural or environmental reasons. The demographic mechanism does not depend on this single case: it is supported by comparative work on Oceanian toolkits and by controlled laboratory transmission experiments.',
        },
      },
      {
        id: 'tasmania-claim',
        kind: 'claim',
        statement: {
          essential:
            'Small, isolated populations tend to lose culturally transmitted skills, because too few holders of a skill make its loss likely in each generation.',
          detailed:
            'The effect is derived from transmission models, supported by comparative analysis of Oceanian island toolkits against population size and contact, and reproduced in laboratory transmission chains where group size is manipulated directly.',
        },
        evidence: 'model',
        references: [
          referenceId('henrich-2004-tasmania'),
          referenceId('kline-boyd-2010-population-size'),
        ],
      },
      {
        id: 'experiment',
        kind: 'prose',
        text: {
          essential:
            'The prediction can be tested under controlled conditions. Give groups of different sizes a skill to transmit along a chain of learners, and see what survives at the end.',
          detailed:
            'When this was done with two tasks of differing difficulty, larger groups maintained and improved the harder skill while smaller groups lost it — with the same individuals, the same instructions and the same time. The variable that mattered was how many models a learner could observe. That is a demographic explanation for a cultural outcome, and it removes the need to invoke changes in intelligence to explain changes in the archaeological record.',
        },
      },
      {
        id: 'group-size-claim',
        kind: 'claim',
        statement: {
          essential:
            'In controlled transmission experiments, larger groups maintain complex skills that smaller groups lose.',
          detailed:
            'Groups of two, four, eight and sixteen participants transmitted two tasks along chains. The complex skill was retained and improved in larger groups and degraded in smaller ones, with no difference in individual ability.',
        },
        evidence: 'established',
        references: [referenceId('derex-2013-group-size-cultural')],
      },
      {
        id: 'implication',
        kind: 'callout',
        tone: 'note',
        title: 'Why this reframes the Upper Palaeolithic',
        text: {
          essential:
            'The burst of technological and symbolic complexity in the last 50,000 years has often been explained by a cognitive change — a mutation, a rewiring, the arrival of language. Demography offers an alternative that requires no change in minds at all.',
          detailed:
            'Population densities in Europe and Africa rose substantially over this period, and modelling suggests the resulting increase in connected population size is sufficient to produce the observed appearance of complex technology, without any accompanying change in individual cognition. The two explanations are not mutually exclusive, and distinguishing them is difficult, but the demographic account has the advantage of being quantitatively testable.',
        },
        references: [referenceId('powell-2009-demography-culture')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'If culture can change the environment, and if culture accumulates, then genes should show the marks of it. They do — and the clearest case involves milk.',
        },
      },
    ],
    furtherReading: [referenceId('boyd-richerson-1985-culture')],
  },

  {
    id: topicId('gene-culture-coevolution'),
    slug: 'gene-culture-coevolution',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 42,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Gene–culture coevolution',
    subtitle: 'Dairying changed our genomes, and the genomes then changed the dairying.',
    summary: {
      essential:
        'Lactase persistence — digesting milk as an adult — evolved independently in several populations after they began keeping milk-producing animals. A cultural practice created a selection pressure, and the genetic response then reinforced the practice.',
      detailed:
        'It is the clearest documented case of culture driving human genetic evolution, and recent ancient-DNA work has complicated the simple version of the story in an instructive way.',
      technical:
        'At least five independent alleles produce lactase persistence in different populations. The European −13910*T variant shows one of the strongest selection signals in the human genome. Ancient DNA shows milk consumption preceding the allele’s rise by millennia, implicating famine and pathogen exposure rather than routine nutrition as the selective agent.',
    },
    glossaryTerms: [
      glossaryTermId('gene-culture-coevolution'),
      glossaryTermId('lactase-persistence'),
      glossaryTermId('selective-sweep'),
    ],
    related: [
      topicId('when-behaviour-starts-changing-evolution'),
      topicId('new-selection-pressures'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Every mammal digests milk as an infant and stops afterwards. Switching off the enzyme when weaning ends is the normal mammalian condition, and most adult humans worldwide follow it. The unusual thing is the populations that do not.',
          detailed:
            'In parts of northern Europe, and in several pastoralist populations in Africa and the Middle East, a large majority of adults keep producing lactase throughout life. The genetic changes responsible are different in each case — at least five separate mutations, in different places in the DNA near the lactase gene, all producing the same effect. That pattern is the signature of independent evolution under a shared pressure.',
        },
      },
      {
        id: 'lactase-figure',
        kind: 'visualization',
        visualizationId: visualizationId('lactase-coevolution'),
      },
      {
        id: 'convergence-claim',
        kind: 'claim',
        statement: {
          essential:
            'Lactase persistence evolved independently at least five times, in populations that had independently adopted dairying.',
          detailed:
            'Distinct regulatory variants upstream of the lactase gene are found in European, East African and Middle Eastern populations, each associated with local pastoralist histories and each showing independent signatures of recent selection.',
        },
        evidence: 'established',
        references: [referenceId('tishkoff-2007-lactase')],
      },
      {
        id: 'strength',
        kind: 'prose',
        text: {
          essential:
            'The European variant carries one of the strongest signals of recent natural selection anywhere in the human genome. It spread fast enough to leave a long, almost unbroken stretch of shared chromosome around it — the genetic equivalent of a wave still visible on the surface.',
          detailed:
            'When a variant is strongly favoured, it sweeps through a population faster than recombination can shuffle its neighbours, so it drags a long block of surrounding DNA with it. Measuring how long that block is gives an estimate of both how recent and how strong the selection was. For this variant the answer is: very recent, and very strong.',
        },
      },
      {
        id: 'sweep-claim',
        kind: 'claim',
        statement: {
          essential:
            'The European lactase persistence variant shows one of the strongest and most recent selective sweeps identified in the human genome.',
          detailed:
            'The associated haplotype extends over roughly a megabase with little decay in linkage disequilibrium, implying rapid recent increase in frequency under strong positive selection within the last several thousand years.',
        },
        evidence: 'established',
        references: [referenceId('bersaglieri-2004-lct')],
      },
      {
        id: 'the-twist',
        kind: 'prose',
        text: {
          essential:
            'The obvious story — people started drinking milk, so digesting it became advantageous — turns out to be too simple. Ancient DNA and pottery residues together show that Europeans were consuming milk for thousands of years before the allele became common.',
          detailed:
            'That is a problem, because if milk were routinely valuable then selection should have acted immediately. The current explanation is that the advantage was intermittent rather than constant. Adults who cannot digest lactose can still consume fermented dairy safely, and can tolerate small amounts of milk. The difference becomes lethal under specific conditions: during famine, when milk may be the only food available, and during epidemics of diarrhoeal disease, when lactose-induced fluid loss compounds an existing threat.',
          technical:
            'On this reading selection acted in rare, severe episodes rather than continuously, which reconciles strong selection coefficients with a long lag between practice and allele frequency change. The model is supported by correlating allele frequency change with proxies for famine and settlement density; it remains an inference from correlation.',
        },
      },
      {
        id: 'timing-claim',
        kind: 'claim',
        statement: {
          essential:
            'Milk consumption in Europe preceded the rise of lactase persistence by several thousand years, implying selection driven by famine and disease rather than routine nutrition.',
          detailed:
            'Pottery lipid residues document widespread dairying from the early Neolithic, while ancient DNA shows the persistence allele remaining rare until much later. Correlations between allele frequency change and indicators of subsistence stress support the episodic-selection interpretation.',
        },
        evidence: 'inference',
        references: [referenceId('evershed-2022-lactase')],
      },
      {
        id: 'the-loop',
        kind: 'prose',
        text: {
          essential:
            'The important structure here is the loop. Keeping animals created a food source that only some people could fully use. Those people left more descendants. As the ability spread, dairying became more valuable, and the practice intensified — which strengthened the pressure that produced the ability.',
          detailed:
            'That is gene–culture coevolution: neither the practice nor the gene is prior, and neither can be explained without the other. It is the clearest available demonstration that human evolution in the last ten thousand years is not a story of biology being superseded by culture, but of the two driving each other.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'By the time this was happening, our own species had already spread across the planet — and had met, and mixed with, other kinds of human along the way.',
        },
      },
    ],
    furtherReading: [referenceId('laland-2000-gene-culture')],
  },
];
