/**
 * Human Evolution, Scientific Lens — Movement I: before "us".
 *
 * This movement exists because almost every misconception about human origins
 * is a misconception about the shape of the tree rather than about any
 * particular fossil. A reader who believes we descend from chimpanzees, or that
 * evolution is a ladder with us at the top, will misread every species in the
 * movements that follow no matter how carefully those are written.
 *
 * So the tree comes first, and the fossils come after. The order is deliberate
 * and it is the reason this movement opens with a question about classification
 * rather than with a discovery.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const HUMAN_BEFORE_US_TOPICS: readonly Topic[] = [
  {
    id: topicId('what-is-a-human'),
    slug: 'what-is-a-human',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 1,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What is a human?',
    subtitle: 'Before asking where we came from, it helps to be precise about what we are.',
    summary: {
      essential:
        'Biologically, a human is an animal, a mammal, a primate and an ape. Those are not insults or metaphors — they are nested groups, and we are inside all of them.',
      detailed:
        'Classification in biology is meant to reflect ancestry. Every group we belong to is a group we never left, because descendants cannot leave the lineage they came from. This is why "humans are apes" is a statement about the tree rather than a claim about behaviour.',
      technical:
        'Modern systematics is cladistic: a valid group is an ancestor plus all of its descendants. Under that rule Hominoidea includes Homo, and no amount of subsequent divergence removes us from it — a lineage cannot evolve out of its own ancestry.',
    },
    glossaryTerms: [
      glossaryTermId('clade'),
      glossaryTermId('hominid'),
      glossaryTermId('common-ancestry'),
    ],
    related: [topicId('our-place-among-the-apes'), topicId('hominins-and-how-to-read-a-tree')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Try answering the question without using the word "human". You might reach for upright walking, or tool use, or language, or a large brain — and every one of those turns out to be either shared with other animals or absent in some of our own ancestors. It is a harder question than it looks, and for most of the history of biology nobody had a principled way to answer it.',
          detailed:
            'The difficulty is real, not a trick. Chimpanzees make and use tools. Crows solve problems that defeat most mammals. Bonobos and gorillas walk bipedally for short stretches. Several extinct members of our own lineage had brains the size of a chimpanzee’s. Pick any single trait as the definition of humanity and you will find it either outside our group or missing from part of it.',
        },
      },
      {
        id: 'the-answer-is-ancestry',
        kind: 'prose',
        text: {
          essential:
            'The answer biology settled on is not a list of traits at all. It is a position on a family tree. A human is a member of the lineage that descends from a particular ancestral population — and that definition works even for ancestors that looked nothing like us.',
          detailed:
            'This was a genuine shift in how classification is done. Before it, groups were bundles of resemblance: things that looked alike went together. The problem is that resemblance is a poor guide to relatedness. A dolphin resembles a fish and is a mammal. Once biologists decided that classification should track ancestry instead of appearance, a great many familiar groupings had to be rebuilt — and one of the casualties was the idea that humans sit outside the apes.',
          technical:
            'The formal criterion is monophyly: a named group must contain a common ancestor and every one of its descendants. Groups that exclude some descendants — the traditional "apes" without humans, "reptiles" without birds, "fish" without tetrapods — are paraphyletic. They remain useful shorthand, but they do not correspond to anything in the branching structure of life, and a paraphyletic group cannot be the subject of a statement about evolutionary history.',
        },
      },
      {
        id: 'nested-groups',
        kind: 'visualization',
        visualizationId: visualizationId('nested-ancestry'),
      },
      {
        id: 'each-level-is-real',
        kind: 'prose',
        text: {
          essential:
            'Each of the boxes we sit inside was earned by an ancestor. Being a mammal means an ancestor had hair, warm blood and milk. Being a primate means an ancestor had grasping hands, forward-facing eyes and a reliance on vision over smell. Being an ape means an ancestor lost its tail and gained shoulders that could rotate freely overhead.',
          detailed:
            'Those traits are still in us, and they constrain everything that follows. Grasping hands from a tree-dwelling primate ancestor are the hands that would later hold a stone core. Mobile ape shoulders, evolved for hanging beneath branches, are why a human can throw. None of this was preparation. It is inheritance, and inheritance is what the later chapters of this story are forced to work with.',
        },
      },
      {
        id: 'ape-claim',
        kind: 'claim',
        statement: {
          essential:
            'Humans belong inside the great ape group. We are more closely related to chimpanzees and bonobos than either is to gorillas.',
          detailed:
            'Whole-genome comparison places humans, chimpanzees and bonobos as a three-way cluster, with gorillas outside it and orangutans outside that. Any classification that puts humans outside "the apes" leaves out part of a natural group.',
        },
        evidence: 'established',
        references: [referenceId('chimpanzee-consortium-2005'), referenceId('prufer-2012-bonobo')],
      },
      {
        id: 'not-a-demotion',
        kind: 'callout',
        tone: 'misconception',
        title: '“Humans are apes” is not a claim about how we behave',
        text: {
          essential:
            'It says where we sit on the tree, and nothing else. A statement about ancestry carries no implication about intelligence, worth or capability — those would be separate claims requiring separate evidence.',
          detailed:
            'The resistance the phrase provokes usually comes from reading it as a ranking rather than as a location. But there is no ranking in the structure. Chimpanzees are also apes, and they are not lesser humans; they are the current end of their own five-million-year lineage, which is exactly as long as ours.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'So the question becomes sharper. Not "what makes us human" in the abstract, but: among the apes, which ones are we closest to, and how long ago did our lineages part?',
        },
      },
    ],
    furtherReading: [referenceId('wood-boyle-2016-hominin-taxonomy')],
  },

  {
    id: topicId('our-place-among-the-apes'),
    slug: 'our-place-among-the-apes',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 2,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Our place among the apes',
    subtitle: 'Two species are our closest living relatives, and they are equally close.',
    summary: {
      essential:
        'Chimpanzees and bonobos are our nearest living relatives. Both are exactly as related to us as the other, because our lineage split from theirs before they split from each other.',
      detailed:
        'The order of branching matters more than it sounds. Our lineage separated from the chimpanzee–bonobo lineage first; chimpanzees and bonobos then separated from each other much later. So no living ape is "more ancestral" to us than another.',
      technical:
        'Genomic analyses resolve (Homo, (Pan troglodytes, Pan paniscus)) with high confidence, with Gorilla as the next outgroup. A substantial minority of genomic regions support alternative topologies through incomplete lineage sorting, which is expected given a large ancestral population and closely spaced speciation events.',
    },
    glossaryTerms: [
      glossaryTermId('clade'),
      glossaryTermId('incomplete-lineage-sorting'),
      glossaryTermId('molecular-clock'),
    ],
    related: [topicId('what-is-a-human'), topicId('the-last-common-ancestor')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'For most of the twentieth century, nobody could settle the order. Anatomists compared skulls and teeth and came to different conclusions depending on which features they weighted. Gorillas and chimpanzees both knuckle-walk, so perhaps they were each other’s closest relatives and humans branched off earlier. It was an entirely reasonable reading of the bones.',
          detailed:
            'The problem with settling it from anatomy is that shared traits can mean two different things. They can be inherited from a common ancestor, which is informative, or they can have evolved separately in each lineage, which is misleading. Knuckle-walking is the test case: it is either one inheritance shared by gorillas and chimpanzees, or two independent solutions to the same problem. Bones alone could not distinguish these.',
        },
      },
      {
        id: 'molecules-settled-it',
        kind: 'prose',
        text: {
          essential:
            'Molecules settled it, because there is so much more of them. A skull has perhaps a few hundred features an anatomist can score. A genome has three billion positions, and the overwhelming majority of them are not under selection for anything, which makes them a far better record of who is related to whom.',
          detailed:
            'From the 1960s onward, protein and then DNA comparisons repeatedly returned the same answer: humans, chimpanzees and bonobos form a cluster to the exclusion of gorillas. The result was initially resisted, because it contradicted a well-established reading of the anatomy. It has since been confirmed by every method applied to it, including whole-genome sequencing of all four species.',
          technical:
            'Knuckle-walking is now generally interpreted as convergent, or as a retained ancestral condition lost in hominins — the question is not fully resolved. Ardipithecus, with a hand lacking knuckle-walking specialisations, is the main evidence against a knuckle-walking last common ancestor, though the interpretation of that hand is itself contested.',
        },
      },
      {
        id: 'tree-figure',
        kind: 'visualization',
        visualizationId: visualizationId('ape-relationships'),
      },
      {
        id: 'equal-distance',
        kind: 'claim',
        statement: {
          essential:
            'Humans are equally related to chimpanzees and to bonobos. Neither is closer to us than the other.',
          detailed:
            'The human lineage separated from theirs before they separated from each other, so the distance from a human to either species runs through the same branching point. Behavioural differences between chimpanzees and bonobos therefore say nothing about which is more like our ancestor.',
        },
        evidence: 'established',
        references: [referenceId('prufer-2012-bonobo')],
      },
      {
        id: 'bonobo-trap',
        kind: 'callout',
        tone: 'misconception',
        title: 'Choosing the ape that suits the argument',
        text: {
          essential:
            'Chimpanzee societies feature male coalitions and lethal raiding; bonobo societies feature female alliances and far less severe violence. Both are used, by different writers, as the model for what our ancestors were like. Neither is.',
          detailed:
            'Both species have had the same several million years to evolve since our lineages parted, and each has changed. Picking whichever one supports a thesis about human nature and calling it ancestral is a rhetorical move rather than an inference. Where the two disagree, the honest position is that the ancestral state is unresolved — and that is exactly what the comparative evidence says.',
        },
        references: [referenceId('white-2009-ardipithecus')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Knowing the order of branching leads straight to the next question, and it is the one most often answered wrongly: what was the creature at that branching point actually like?',
        },
      },
    ],
    furtherReading: [referenceId('chimpanzee-consortium-2005')],
  },

  {
    id: topicId('the-last-common-ancestor'),
    slug: 'the-last-common-ancestor',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 3,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The last common ancestor',
    subtitle: 'A population, not an individual — and we have never found it.',
    summary: {
      essential:
        'Somewhere between about nine and six million years ago, one population of African apes gave rise to two lineages: one leading to chimpanzees and bonobos, one leading to us. We have no confirmed fossil of it.',
      detailed:
        'The date comes from molecular clocks, which have wide uncertainty. What the animal looked like is genuinely open, and the common assumption that it resembled a chimpanzee is an assumption rather than a finding.',
      technical:
        'Clock-based estimates shifted substantially after direct measurement of the human germline mutation rate lowered it relative to phylogenetic calibrations, pushing the Homo–Pan divergence from roughly 5–6 Ma towards 6.5–9 Ma. The range is dominated by uncertainty in mutation rate and generation time rather than by sequence data.',
    },
    glossaryTerms: [glossaryTermId('molecular-clock'), glossaryTermId('common-ancestry')],
    related: [
      topicId('our-place-among-the-apes'),
      topicId('why-we-did-not-evolve-from-chimpanzees'),
      topicId('the-earliest-possible-hominins'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'There is a phrase that does a lot of damage here: "the missing link". It suggests a single creature, half ape and half human, that we have simply failed to dig up yet. Almost every part of that picture is wrong, and the most wrong part is "single creature".',
          detailed:
            'The last common ancestor was a population — thousands of individuals, spread over a landscape, varying among themselves the way any population does. Speciation is not an event that happens to an animal. It is a process in which gene flow between two parts of a population dwindles and finally stops, often over hundreds of thousands of years, and often reversing part-way before it completes.',
        },
      },
      {
        id: 'split-was-messy',
        kind: 'claim',
        statement: {
          essential:
            'The human and chimpanzee lineages appear to have separated gradually rather than cleanly, with the possibility of continued interbreeding for some time afterwards.',
          detailed:
            'Different regions of the genome give divergence dates spread over millions of years. Some of that spread is ordinary statistical scatter from a large ancestral population, but the pattern has also been read as evidence that the two lineages exchanged genes after they first began to separate.',
        },
        evidence: 'active-research',
        references: [referenceId('prufer-2012-bonobo'), referenceId('moorjani-2016-divergence')],
      },
      {
        id: 'dating-figure',
        kind: 'visualization',
        visualizationId: visualizationId('divergence-dating'),
      },
      {
        id: 'how-the-clock-works',
        kind: 'prose',
        text: {
          essential:
            'The date comes from counting differences. Two genomes accumulate mutations at a roughly steady rate, so the number of differences between a human and a chimpanzee is a measure of how long they have been diverging. The catch is that you need to know the rate, and the rate is the hard part.',
          detailed:
            'For decades the rate was calibrated against fossils, which made the whole argument partly circular. Then it became possible to sequence parents and their children directly and simply count the new mutations. The measured rate came out about half what had been assumed — and every divergence date calculated from it roughly doubled. Estimates of the human–chimpanzee split moved from around five or six million years to something more like six-and-a-half to nine.',
          technical:
            'Generation time compounds the problem: mutations accumulate largely per generation rather than per year, so a divergence date in years depends on the average generation interval over millions of years in lineages whose life histories we cannot observe. Estimates for wild chimpanzees and gorillas of roughly 24–25 years, longer than the 20 years often assumed, push dates older again.',
        },
      },
      {
        id: 'rate-claim',
        kind: 'claim',
        statement: {
          essential:
            'Directly measured human mutation rates are roughly half the rates previously inferred from fossil calibration, which moved many divergence dates substantially older.',
          detailed:
            'Sequencing parent–offspring trios gives a per-generation mutation rate of around 1.2 × 10⁻⁸ per base pair. This is an observation rather than a model output, and it forced a revision of dates across primate phylogenetics.',
        },
        evidence: 'established',
        references: [
          referenceId('scally-durbin-2012-mutation-rate'),
          referenceId('langergraber-2012-generation-times'),
        ],
      },
      {
        id: 'what-did-it-look-like',
        kind: 'open-question',
        question: 'What did the last common ancestor of humans and chimpanzees look like?',
        whyItMatters: {
          essential:
            'Every statement about what changed in our lineage is measured against this animal. If we assume it was chimpanzee-like, then knuckle-walking, a small brain and a chimpanzee social system become our starting point — and everything after is read as a departure from that.',
          detailed:
            'The assumption is load-bearing and largely untested. If instead the ancestor was a more generalised ape, then chimpanzees have specialised as much as we have, and a whole literature that treats chimpanzee behaviour as a window onto our past is reading a modern species as a fossil.',
        },
        whatWouldSettleIt: {
          essential:
            'Fossils from between nine and six million years ago in equatorial Africa. There are almost none, because the forested regions where these apes probably lived have acidic soils that destroy bone.',
          detailed:
            'The gap is a taphonomic one rather than an accident of effort. Fossilisation requires rapid burial in the right chemistry, which happens in lake margins and volcanic ash and rarely in wet tropical forest. The African fossil record for apes in this window may be close to permanently thin, which is why the Ardipithecus material — whatever it turns out to represent — has received so much attention.',
        },
        references: [
          referenceId('white-2009-ardipithecus'),
          referenceId('brunet-2002-sahelanthropus'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'One consequence of all this is worth stating on its own, because it is the single most common error people make about human evolution.',
        },
      },
    ],
    furtherReading: [referenceId('scally-durbin-2012-mutation-rate')],
  },

  {
    id: topicId('why-we-did-not-evolve-from-chimpanzees'),
    slug: 'why-we-did-not-evolve-from-chimpanzees',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 4,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why we did not evolve from chimpanzees',
    subtitle: 'They are our cousins. They have been evolving for exactly as long as we have.',
    summary: {
      essential:
        'Chimpanzees are not our ancestors and never were. We share an ancestor with them, and both lineages have changed since.',
      detailed:
        'The common picture — ape becomes ape-man becomes man — puts living species in a line of descent. But a living species cannot be the ancestor of another living species. Chimpanzees have had the same six-or-so million years we have had, and have used them.',
      technical:
        'Chimpanzees show more evidence of recent positive selection in several genomic regions than humans do, and their effective population size has been substantially larger, giving selection more to act on. "Less evolved" is not a coherent description of them under any measure.',
    },
    glossaryTerms: [glossaryTermId('common-ancestry'), glossaryTermId('clade')],
    related: [
      topicId('the-last-common-ancestor'),
      topicId('hominins-and-how-to-read-a-tree'),
      topicId('evolution-is-not-a-ladder'),
    ],
    blocks: [
      {
        id: 'the-image',
        kind: 'prose',
        text: {
          essential:
            'You know the picture: a knuckle-walking ape at the left, a series of increasingly upright figures, and a modern human striding off the right-hand edge. It was drawn for a 1965 Time-Life book, it was never meant as a scientific statement, and it has probably done more to shape public understanding of human evolution than every museum exhibit combined.',
          detailed:
            'What makes it so persistent is that it is easy to read, and what makes it wrong is the same thing. A line has one dimension. It can show sequence, and it cannot show branching, coexistence, dead ends, or the fact that several of the figures in it lived at the same time as each other.',
        },
      },
      {
        id: 'cousins-figure',
        kind: 'visualization',
        visualizationId: visualizationId('cousins-not-ancestors'),
      },
      {
        id: 'the-logic',
        kind: 'prose',
        text: {
          essential:
            'The logical point is simple once stated. Your cousin is not your ancestor. You and your cousin share a grandparent, and neither of you descends from the other. Chimpanzees stand in exactly that relation to us, with the shared grandparent several hundred thousand generations back.',
          detailed:
            'And your cousin’s family has been having children for just as long as yours has. That is the part the ladder image hides. Every year that has passed since the split has passed for both lineages. Chimpanzees are not a preserved snapshot of our past; they are the current outcome of a history we know far less about than our own, mostly because forest environments do not produce fossils.',
        },
      },
      {
        id: 'chimps-evolved-too',
        kind: 'claim',
        statement: {
          essential:
            'Chimpanzees have been evolving for the same length of time as humans, and in several respects show more genomic change than we do.',
          detailed:
            'Comparisons of the two genomes find regions under recent positive selection in both lineages. Chimpanzees have maintained a larger effective population size than humans through most of this period, which increases the efficiency of selection. There is no measure on which they are an earlier version of anything.',
        },
        evidence: 'established',
        references: [referenceId('chimpanzee-consortium-2005'), referenceId('prufer-2012-bonobo')],
      },
      {
        id: 'why-it-matters',
        kind: 'prose',
        text: {
          essential:
            'This is not pedantry about wording. The ladder picture actively generates wrong predictions. It suggests there should be a single sequence of fossils, each one intermediate between the last and the next. What the fossil record actually contains is a bush — several hominin species alive at the same time, most of them leaving no descendants at all.',
          detailed:
            'Between roughly three and one million years ago, Africa held several hominin species simultaneously: gracile australopiths, robust australopiths with enormous chewing apparatus, and early Homo. Two million years ago, at least four hominin species were alive somewhere on the planet. Read as a ladder, that looks like a contradiction. Read as a bush, it is simply what a radiating group looks like.',
        },
      },
      {
        id: 'not-progress',
        kind: 'callout',
        tone: 'caution',
        title: 'There is no direction built into any of this',
        text: {
          essential:
            'Natural selection has no goal and no foresight. It is the statistical consequence of some variants leaving more descendants than others in a particular environment. When the environment changes, what counts as favourable changes with it.',
          detailed:
            'Which means there is no sense in which evolution was working towards us, or towards intelligence, or towards anything. The lineages that led to modern chimpanzees and to modern humans both survived; the several hominin lineages that did not survive were subject to the same process. The Origin & Evolution of Life section works through this in detail, and nothing in this section overturns it.',
        },
      },
      {
        id: 'link-nature-choose',
        kind: 'cross-link',
        topicId: topicId('does-nature-choose'),
        rationale:
          'The general version of this correction — why selection is not a chooser and has no destination — is worked through there with non-human examples.',
      },
    ],
    furtherReading: [referenceId('gould-1996-full-house')],
  },

  {
    id: topicId('hominins-and-how-to-read-a-tree'),
    slug: 'hominins-and-how-to-read-a-tree',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 5,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Hominins, and how to read a tree',
    subtitle: 'The word for our side of the split, and the diagram it belongs on.',
    summary: {
      essential:
        'A hominin is any species on our side of the branch point with chimpanzees — us and all our extinct relatives. Reading a family tree correctly means reading the branching points, not the left-to-right order of the tips.',
      detailed:
        'Evolutionary trees are diagrams of relationship, not of rank or of time along the page. Two tips next to each other are not necessarily close relatives, and a tip at the far right is not the endpoint of anything.',
      technical:
        'A cladogram encodes only topology: the nesting of shared derived characters. Branch lengths may encode time or change or nothing at all, depending on the diagram, and the rotational order of sister clades around any node is arbitrary — a tree can be rotated at every node without altering a single relationship it asserts.',
    },
    glossaryTerms: [glossaryTermId('hominin'), glossaryTermId('hominid'), glossaryTermId('clade')],
    related: [
      topicId('why-we-did-not-evolve-from-chimpanzees'),
      topicId('how-complete-is-the-family-tree'),
    ],
    blocks: [
      {
        id: 'the-word',
        kind: 'prose',
        text: {
          essential:
            'Hominin is a technical term with a precise meaning: every species more closely related to us than to chimpanzees. Lucy is a hominin. Neanderthals are hominins. Chimpanzees are not, and neither are gorillas.',
          detailed:
            'The word is recent in this sense, and older books use "hominid" for the same idea. That older usage has been retired because the genetic evidence forced a reorganisation: humans turned out to sit inside the great ape group rather than beside it, so the great ape family had to expand to include us, and a new name was needed for our branch alone. If you read a book from before about 1990, mentally translate its "hominid" to "hominin".',
        },
      },
      {
        id: 'reading-figure',
        kind: 'visualization',
        visualizationId: visualizationId('reading-a-tree'),
      },
      {
        id: 'how-to-read',
        kind: 'prose',
        text: {
          essential:
            'Now the diagram. The only information in an evolutionary tree is where the branches join. Everything else — which tip is drawn on the left, which on the right, how the branches curve — is layout, and carries no meaning at all.',
          detailed:
            'This is worth dwelling on, because trees are routinely misread in a specific way. Readers scan left to right and interpret the sequence as progress, with the rightmost tip as the most advanced. But every node in a tree can be rotated freely, like a mobile hanging from a ceiling, without changing a single relationship it states. A tree that puts humans at the far right and one that puts us in the middle are the same tree.',
          technical:
            'Nor does the tip position encode time: all surviving tips are contemporary, sitting at the present day regardless of where they are drawn. In a time-calibrated tree, vertical or horizontal position encodes age of divergence; in a plain cladogram, branch length encodes nothing. Confusing the two is how readers conclude that a species with a short branch is "less evolved".',
        },
      },
      {
        id: 'rotation-claim',
        kind: 'claim',
        statement: {
          essential:
            'Rotating the branches at any node of an evolutionary tree produces a diagram that makes exactly the same claims about relatedness.',
          detailed:
            'The information content of a cladogram is its topology — which groups nest inside which. Tip order is a consequence of drawing choices. This is why the same phylogeny appears in different publications with the taxa in different orders and no disagreement is implied.',
        },
        evidence: 'established',
        references: [referenceId('hug-2016-tree-of-life')],
      },
      {
        id: 'how-many-species',
        kind: 'callout',
        tone: 'note',
        title: 'How many hominin species were there?',
        text: {
          essential:
            'Somewhere between about a dozen and thirty, depending on who is counting. The disagreement is not mostly about fossils; it is about how much variation one species is allowed to contain.',
          detailed:
            'Researchers described as "splitters" name a new species when specimens differ noticeably; "lumpers" treat the same differences as variation within a species, pointing out that living humans and living chimpanzees vary considerably too. Both camps look at the same bones. Bear this in mind whenever a species count is quoted as though it were a measurement.',
        },
        references: [referenceId('wood-boyle-2016-hominin-taxonomy')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'With the tree in place, we can turn to the evidence that builds it. And the most quoted number in the whole field turns out to need careful handling.',
        },
      },
    ],
    furtherReading: [referenceId('wood-collard-1999-homo')],
  },

  {
    id: topicId('how-similar-are-human-and-chimpanzee-genomes'),
    slug: 'how-similar-are-human-and-chimpanzee-genomes',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 6,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How similar are human and chimpanzee genomes?',
    subtitle:
      'The famous percentage is real, and it answers a narrower question than people think.',
    summary: {
      essential:
        'The "98.8% identical" figure counts single-letter differences in the parts of the two genomes that line up cleanly. Count insertions and deletions as well and the similarity drops to roughly 95–96%. Neither number is wrong; they measure different things.',
      detailed:
        'A percentage similarity is meaningless without stating what was compared and how. And the more important point is that the size of a genetic difference tells you very little about the size of its effect — a single-letter change in a regulatory sequence can alter the shape of a skull.',
      technical:
        'The ~1.2% figure is the single-nucleotide substitution rate in alignable euchromatic sequence. Including indels raises divergence to roughly 4–5%. Segmental duplications, copy-number variation and structural rearrangement are harder to summarise as a percentage at all, and much of the functionally relevant divergence is regulatory rather than protein-coding.',
    },
    glossaryTerms: [glossaryTermId('pseudogene'), glossaryTermId('molecular-clock')],
    related: [topicId('the-last-common-ancestor'), topicId('reading-ancestry-in-a-genome')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'It is one of the few statistics about human evolution that almost everybody has heard: we share 98.8% of our DNA with chimpanzees. It gets deployed to prove opposite things — that we are basically chimpanzees, or that a 1.2% difference must be doing something extraordinary. Both readings ask more of the number than it can carry.',
          detailed:
            'The first question to ask of any similarity percentage is: similar in what sense, over what? The 98.8% figure comes from taking the regions of the two genomes that can be aligned with each other and counting how often the single letters differ. That is a well-defined measurement. It simply is not the only one available.',
        },
      },
      {
        id: 'similarity-figure',
        kind: 'visualization',
        visualizationId: visualizationId('genome-similarity'),
      },
      {
        id: 'depends-on-counting',
        kind: 'claim',
        statement: {
          essential:
            'Human–chimpanzee genome similarity is about 98.8% when counting single-letter substitutions and about 95–96% when insertions and deletions are included.',
          detailed:
            'The two figures come from the same genomes. Substitutions are single-position changes; indels add or remove whole stretches at once, so a small number of indel events accounts for a large number of differing positions. Both are legitimate measures, and quoting either without saying which was used is where the confusion starts.',
        },
        evidence: 'established',
        references: [
          referenceId('chimpanzee-consortium-2005'),
          referenceId('varki-altheide-2005-genome-comparison'),
        ],
      },
      {
        id: 'size-is-not-effect',
        kind: 'prose',
        text: {
          essential:
            'The deeper problem with the number is that it invites a false equation between the amount of genetic difference and the amount of biological difference. There is no such relationship. Most of a genome does not code for proteins at all, and much of what matters is not what a gene says but when and where and how strongly it is switched on.',
          detailed:
            'Changes in regulatory sequence can shift the timing of a developmental process, and a shift in timing can change an entire structure. A modest change in how long a growth process continues will alter the proportions of a limb or the volume of a braincase — and in the genome it registers as a handful of letters. This is why comparing the percentage of shared DNA between species and expecting it to predict how different they look is not a meaningful exercise. Humans and mice share roughly 85% of protein-coding sequence.',
        },
      },
      {
        id: 'not-a-blueprint',
        kind: 'callout',
        tone: 'misconception',
        title: 'A genome is not a blueprint',
        text: {
          essential:
            'A blueprint has a part of the drawing corresponding to each part of the building. A genome is more like a recipe followed by a process: the same ingredient can appear at many stages, and changing when a step happens can change the result more than changing an ingredient.',
          detailed:
            'This is why "which gene makes us human" is not a well-formed question, and why the answer to "what did that 1.2% do" is not a list of human genes. Traits are built by developmental processes in which many genes interact, and the relevant differences are distributed across regulation, timing, copy number and protein sequence all at once.',
        },
        references: [referenceId('varki-altheide-2005-genome-comparison')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'What a genome comparison is very good at is a different job: not measuring how different two species are, but establishing beyond reasonable doubt that they are related at all.',
        },
      },
    ],
    furtherReading: [referenceId('chimpanzee-consortium-2005')],
  },

  {
    id: topicId('reading-ancestry-in-a-genome'),
    slug: 'reading-ancestry-in-a-genome',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 7,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Reading ancestry in a genome',
    subtitle: 'Shared mistakes are better evidence than shared function.',
    summary: {
      essential:
        'The strongest genetic evidence for common ancestry is not that we share working genes with other apes. It is that we share the same broken ones, broken in the same way, in the same place.',
      detailed:
        'Functional similarity could in principle reflect similar requirements. A shared error has no such explanation: the probability of two lineages independently acquiring the identical disabling mutation, or the identical viral insertion at the identical position, is vanishingly small.',
      technical:
        'The argument rests on the improbability of independent identical state changes at specific genomic coordinates. Endogenous retroviral insertions, processed pseudogenes and Alu elements are effectively unique markers — insertion sites are near-random across a three-billion-base genome — so shared position implies shared inheritance.',
    },
    glossaryTerms: [
      glossaryTermId('pseudogene'),
      glossaryTermId('endogenous-retrovirus'),
      glossaryTermId('common-ancestry'),
    ],
    related: [
      topicId('how-similar-are-human-and-chimpanzee-genomes'),
      topicId('the-body-as-an-archive'),
    ],
    blocks: [
      {
        id: 'the-plagiarism-test',
        kind: 'prose',
        text: {
          essential:
            'Teachers marking essays have a reliable method for detecting copying, and it is not that two essays make the same true statements. True statements are available to everyone. It is that two essays contain the same misspelling, the same wrong date, the same odd turn of phrase. Errors are what betray a shared source.',
          detailed:
            'The same logic applies to genomes, and it is the reason the genetic evidence for common ancestry is considered conclusive rather than merely suggestive. If humans and chimpanzees both have a functioning gene for some enzyme, one could argue that both needed that enzyme. But when both have the same gene disabled by the same mutation at the same position, "both needed it broken that way" is not an available explanation.',
        },
      },
      {
        id: 'markers-figure',
        kind: 'visualization',
        visualizationId: visualizationId('shared-errors'),
      },
      {
        id: 'chromosome-2',
        kind: 'prose',
        text: {
          essential:
            'The clearest single example is a matter of simple counting. Chimpanzees, gorillas and orangutans all have 24 pairs of chromosomes. Humans have 23. If we share an ancestor with them, a pair must have merged somewhere in our lineage — and if so, the join should still be visible.',
          detailed:
            'It is. Human chromosome 2 carries, in its middle, the distinctive repeated sequence that normally marks the tip of a chromosome, arranged head to head as two ends fused together would leave it. It also carries the remains of a second centromere, the structural region a chromosome normally has exactly one of, in the position matching two chimpanzee chromosomes laid end to end. The gene order along its length matches those two chimpanzee chromosomes as well.',
          technical:
            'This was a prediction before it was an observation. Common ancestry with 24-chromosome apes required a fusion; the fusion required relic telomeric repeats and a vestigial centromere at predictable positions. Both were found where predicted, and the alternative — that the human genome was independently arranged to look exactly like two ape chromosomes joined — explains nothing and predicts nothing.',
        },
      },
      {
        id: 'fusion-claim',
        kind: 'claim',
        statement: {
          essential:
            'Human chromosome 2 formed by the end-to-end fusion of two ancestral ape chromosomes. The fusion site retains telomere-like repeats and a second, inactivated centromere.',
          detailed:
            'The fusion point contains head-to-head arrays of the TTAGGG telomeric repeat characteristic of chromosome ends, in an internal position where no such sequence should otherwise occur, and the gene content and order correspond to chimpanzee chromosomes 2A and 2B.',
        },
        evidence: 'established',
        references: [referenceId('ijdo-1991-chromosome-2')],
      },
      {
        id: 'viruses-claim',
        kind: 'claim',
        statement: {
          essential:
            'Humans and other apes carry the remains of the same ancient viral infections at the same positions in their genomes, inherited from shared ancestors.',
          detailed:
            'Retroviruses insert copies of themselves into host DNA at effectively arbitrary positions. When such an insertion lands in a cell that produces eggs or sperm, it becomes heritable. Roughly 8% of the human genome consists of these remains, and thousands of insertions are shared with chimpanzees at identical coordinates.',
        },
        evidence: 'established',
        references: [referenceId('johnson-2019-endogenous-retroviruses')],
      },
      {
        id: 'vitamin-c',
        kind: 'callout',
        tone: 'note',
        title: 'The gene we all have and none of us use',
        text: {
          essential:
            'Most mammals make their own vitamin C. Primates do not, because the gene for the final enzyme in the pathway is present but disabled — and it is disabled in the same way, by the same lesions, across the primates that lack it.',
          detailed:
            'A second case is even better dated. The CMAH gene, which modifies a sugar on cell surfaces, was inactivated by a specific deletion in our lineage after the split from chimpanzees. Chimpanzees have the working version; we carry the broken one. This is not the absence of a gene. It is the presence of a specific, shared, identifiable breakage — which is what an inherited error looks like.',
        },
        references: [referenceId('chou-1998-cmah')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Genomes tell us who is related to whom, and roughly when. What they cannot tell us is what any of these animals did with their bodies. For that, the evidence has to come out of the ground — and the first thing it shows is a skeleton being rebuilt from the ground up.',
        },
      },
    ],
    furtherReading: [referenceId('johnson-2019-endogenous-retroviruses')],
  },
];
