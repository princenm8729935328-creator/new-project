/**
 * Recaps for Human Evolution, Scientific Lens — Movements I and II.
 *
 * The distractors here are drawn from the specific misconceptions these topics
 * exist to correct: descent from living chimpanzees, tree tips as a ranking,
 * percentage similarity as a measure of difference, and vestigial as useless.
 * A distractor that is merely a wrong fact teaches nothing; one that is the
 * reader's likely prior belief does the work.
 */
import type { RecapsByTopic } from '../schema/recap';

export const HUMAN_ORIGINS_RECAPS: RecapsByTopic = {
  'what-is-a-human': {
    summary: {
      essential:
        'Biology defines a group by ancestry rather than by resemblance. Humans sit inside the animals, the mammals, the primates and the apes — not beside them — because a lineage cannot evolve out of the ancestry it came from.',
      detailed:
        'Every attempt to define humanity by a single trait fails: tool use, bipedal walking, large brains and language are each either shared with other animals or absent in some of our own ancestors. What works instead is position on a family tree. Each group we belong to was earned by an ancestor, and what that ancestor had is still in us and still constrains what came later.',
    },
    questions: [
      {
        id: 'why-apes',
        prompt: 'Why do biologists say humans are apes?',
        options: [
          {
            id: 'a',
            text: 'Because a valid group contains an ancestor and all its descendants, and we descend from the ancestral ape',
            correct: true,
          },
          { id: 'b', text: 'Because humans and apes look and behave similarly' },
          { id: 'c', text: 'Because humans evolved from apes that are alive today' },
          { id: 'd', text: 'Because apes and humans can interbreed' },
        ],
        explanation:
          'It is a statement about the structure of the tree. Modern classification requires a named group to include an ancestor and every one of its descendants, so a group called "apes" that left humans out would not correspond to anything in the branching structure of life. Resemblance is a poor guide — a dolphin resembles a fish and is a mammal.',
      },
      {
        id: 'inheritance',
        prompt:
          'The mobile shoulders that let a human throw a spear evolved in an ancestor that hung beneath branches. What does that illustrate?',
        options: [
          {
            id: 'a',
            text: 'That evolution modifies inherited equipment rather than designing for future uses',
            correct: true,
          },
          { id: 'b', text: 'That the ancestor was preparing the lineage for tool use' },
          { id: 'c', text: 'That throwing and hanging are the same motion' },
          { id: 'd', text: 'That shoulder anatomy is unrelated to ancestry' },
        ],
        explanation:
          'Selection has no foresight. A shoulder shaped for suspension was simply what the lineage had when throwing became useful, and the later capability is built out of it. This pattern — later functions running on inherited structures — recurs throughout the section.',
      },
    ],
  },

  'our-place-among-the-apes': {
    summary: {
      essential:
        'Chimpanzees and bonobos are our closest living relatives and are equally close to us, because our lineage separated from theirs before they separated from each other.',
      detailed:
        'Anatomy could not settle the order, because shared traits like knuckle-walking may be inherited or may have evolved separately. Genomes settled it: three billion positions, most of them under no selective pressure, make a far better record of relatedness than a few hundred scoreable skeletal features.',
    },
    questions: [
      {
        id: 'equally',
        prompt: 'Why are chimpanzees and bonobos equally related to humans?',
        options: [
          {
            id: 'a',
            text: 'Because the human lineage branched off before the two of them separated from each other',
            correct: true,
          },
          { id: 'b', text: 'Because they are the same species under two names' },
          { id: 'c', text: 'Because they live in the same region of Africa' },
          { id: 'd', text: 'Because both share exactly 98.8% of their DNA with us' },
        ],
        explanation:
          'The distance from a human to either species runs through the same branching point. This matters for a common rhetorical move: picking whichever of the two supports a thesis about human nature and calling it ancestral. Where they disagree, the ancestral state is unresolved.',
      },
      {
        id: 'molecules',
        prompt: 'Why did molecular evidence settle a question that anatomy could not?',
        options: [
          {
            id: 'a',
            text: 'Because most genomic positions are not under selection, so they record ancestry rather than adaptation',
            correct: true,
          },
          { id: 'b', text: 'Because DNA cannot be misinterpreted' },
          { id: 'c', text: 'Because anatomists had not examined the skulls carefully enough' },
          { id: 'd', text: 'Because genetic similarity always matches physical similarity' },
        ],
        explanation:
          'Shared anatomical traits can mean inheritance or independent evolution, and bones alone often cannot distinguish these. Sequence positions that do nothing are not pushed towards similarity by shared requirements, so their pattern of differences tracks who is related to whom.',
      },
    ],
  },

  'the-last-common-ancestor': {
    summary: {
      essential:
        'The last common ancestor of humans and chimpanzees was a population, not an individual, living somewhere between about nine and six million years ago. We have no confirmed fossil of it, and what it looked like is genuinely open.',
      detailed:
        'The date comes from counting genetic differences and dividing by a mutation rate — a rate that was revised downward by roughly half in 2012 when it became possible to measure it directly by sequencing parents and children. Every divergence estimate built on the old rate roughly doubled.',
    },
    questions: [
      {
        id: 'population',
        prompt: 'Why is "the missing link" a misleading phrase?',
        options: [
          {
            id: 'a',
            text: 'Because the ancestor was a varying population and speciation is a gradual process, not a single creature or a single event',
            correct: true,
          },
          { id: 'b', text: 'Because no transitional fossils have ever been found' },
          { id: 'c', text: 'Because the ancestor has already been identified with certainty' },
          { id: 'd', text: 'Because links between species do not exist at all' },
        ],
        explanation:
          'Speciation is gene flow between two parts of a population dwindling and finally stopping, often over hundreds of thousands of years and sometimes reversing part-way. There is no individual at which one species becomes two.',
      },
      {
        id: 'rate',
        prompt:
          'Direct measurement showed the human mutation rate was about half what had been assumed. What happened to divergence dates?',
        options: [
          {
            id: 'a',
            text: 'They roughly doubled, because fewer mutations per generation means more time to accumulate the same difference',
            correct: true,
          },
          { id: 'b', text: 'They roughly halved' },
          { id: 'c', text: 'They were unaffected, since the genetic differences had not changed' },
          { id: 'd', text: 'They became impossible to estimate' },
        ],
        explanation:
          'The number of differences between two genomes is fixed by measurement. Dividing it by a slower rate yields more generations, and therefore more elapsed time. The genetic data did not change; the divisor did.',
      },
      {
        id: 'appearance',
        prompt: 'Why is it risky to assume the last common ancestor looked like a chimpanzee?',
        options: [
          {
            id: 'a',
            text: 'Because chimpanzees have had the same several million years to change as we have, and may have specialised too',
            correct: true,
          },
          { id: 'b', text: 'Because chimpanzees are not closely related to us' },
          { id: 'c', text: 'Because the ancestor is known to have been gorilla-like' },
          { id: 'd', text: 'Because ancestral traits cannot be reconstructed in principle' },
        ],
        explanation:
          'If the ancestor was a more generalised ape, then a whole literature treating chimpanzee behaviour as a window onto our past is reading a modern species as a fossil. Ardipithecus, with a hand lacking knuckle-walking specialisations, is the main evidence against a chimpanzee-like ancestor — and its interpretation is itself contested.',
      },
    ],
  },

  'why-we-did-not-evolve-from-chimpanzees': {
    summary: {
      essential:
        'Chimpanzees are cousins, not ancestors. A living species cannot be the ancestor of another living species, and both lineages have been evolving for exactly as long since the split.',
      detailed:
        'The march-of-progress image encodes two errors: that these species form a single line of descent, and that each replaced the one before. The fossil record is a bush — several hominin species alive at once, most leaving no descendants.',
    },
    questions: [
      {
        id: 'cousins',
        prompt: 'What is wrong with saying humans evolved from chimpanzees?',
        options: [
          {
            id: 'a',
            text: 'Both descend from a shared ancestral population, and neither descends from the other',
            correct: true,
          },
          { id: 'b', text: 'Nothing — it is a reasonable simplification' },
          { id: 'c', text: 'It is wrong only because the timing is usually stated incorrectly' },
          { id: 'd', text: 'Chimpanzees are too distantly related for the claim to make sense' },
        ],
        explanation:
          'Your cousin is not your ancestor. Chimpanzees stand in exactly that relation to us, with the shared grandparent several hundred thousand generations back — and their family has been having children for just as long as yours.',
      },
      {
        id: 'bush',
        prompt:
          'Around two million years ago at least four hominin species were alive at the same time. Why does that matter?',
        options: [
          {
            id: 'a',
            text: 'It contradicts the ladder picture, which predicts a single sequence with each species replacing the last',
            correct: true,
          },
          { id: 'b', text: 'It shows that one species must have been misidentified' },
          { id: 'c', text: 'It proves that evolution speeds up when species compete' },
          { id: 'd', text: 'It means none of them can have been our ancestor' },
        ],
        explanation:
          'Read as a ladder, coexistence looks like a contradiction. Read as a bush, it is simply what a radiating group looks like — and most of those branches end, which is the normal outcome for a species.',
      },
    ],
  },

  'hominins-and-how-to-read-a-tree': {
    summary: {
      essential:
        'A hominin is any species more closely related to us than to chimpanzees. The only information in an evolutionary tree is where the branches join — tip order, curvature and left-to-right position are layout.',
      detailed:
        'Every node in a tree can be rotated freely without changing a single relationship it states, which is why the same phylogeny appears in different publications with taxa in different orders and no disagreement is implied. Older books use "hominid" for what "hominin" now means, because the genetic evidence forced the great ape family to expand to include us.',
    },
    questions: [
      {
        id: 'rotation',
        prompt: 'What happens if you rotate the branches at a node of an evolutionary tree?',
        options: [
          {
            id: 'a',
            text: 'Nothing changes — the tree makes exactly the same claims about relatedness',
            correct: true,
          },
          { id: 'b', text: 'The tree becomes incorrect and must be redrawn' },
          { id: 'c', text: 'The evolutionary order of the species reverses' },
          { id: 'd', text: 'The divergence dates shift' },
        ],
        explanation:
          'A tree is like a mobile hanging from a ceiling: the branches can swing without the connections changing. The information content is the topology — which groups nest inside which — and tip order is a consequence of drawing choices.',
      },
      {
        id: 'counting',
        prompt:
          'Why do estimates of how many hominin species existed range from about a dozen to about thirty?',
        options: [
          {
            id: 'a',
            text: 'Because researchers disagree about how much variation a single species is allowed to contain',
            correct: true,
          },
          { id: 'b', text: 'Because many fossils have not yet been excavated' },
          { id: 'c', text: 'Because dating methods disagree about their ages' },
          { id: 'd', text: 'Because some researchers reject common ancestry' },
        ],
        explanation:
          'Both camps look at the same bones. Splitters name a new species when specimens differ noticeably; lumpers treat the same differences as within-species variation, pointing out that living humans and chimpanzees vary considerably too. A species count is an interpretation, not a measurement.',
      },
    ],
  },

  'how-similar-are-human-and-chimpanzee-genomes': {
    summary: {
      essential:
        'The 98.8% figure counts single-letter differences in the parts of the two genomes that align. Counting insertions and deletions as well gives about 95–96%. Neither is wrong; they measure different things.',
      detailed:
        'More importantly, the size of a genetic difference tells you very little about the size of its effect. Most of a genome does not code for proteins, and a change to when and how strongly a gene is switched on can alter a whole structure while registering as a handful of letters.',
    },
    questions: [
      {
        id: 'method',
        prompt: 'Why do different sources quote different human–chimpanzee similarity figures?',
        options: [
          {
            id: 'a',
            text: 'Because they count different things — substitutions alone, or substitutions plus insertions and deletions',
            correct: true,
          },
          { id: 'b', text: 'Because some are based on older, less accurate sequencing' },
          { id: 'c', text: 'Because similarity varies between individual chimpanzees' },
          { id: 'd', text: 'Because one figure is correct and the others are errors' },
        ],
        explanation:
          'Both come from the same genomes. A single insertion event can account for hundreds of differing positions, so including indels drops the figure by several percent. A percentage without a stated method is not a measurement.',
      },
      {
        id: 'effect',
        prompt: 'Why does a small percentage difference not imply a small biological difference?',
        options: [
          {
            id: 'a',
            text: 'Because changes to when and where genes are switched on can alter whole structures while involving very few letters',
            correct: true,
          },
          { id: 'b', text: 'Because percentage differences are calculated incorrectly' },
          { id: 'c', text: 'Because only protein-coding regions matter' },
          { id: 'd', text: 'Because chimpanzee and human genomes are different lengths' },
        ],
        explanation:
          'A genome is more like a recipe followed by a process than a blueprint. Shifting the timing of a developmental step can change the proportions of a limb or the volume of a braincase. This is also why "which gene makes us human" is not a well-formed question.',
      },
    ],
  },

  'reading-ancestry-in-a-genome': {
    summary: {
      essential:
        'The strongest genetic evidence for common ancestry is not shared working genes but shared broken ones — broken in the same way, in the same place. Shared errors have no explanation other than inheritance.',
      detailed:
        'Human chromosome 2 carries telomere repeats at an internal position and the remains of a second centromere, exactly where two ape chromosomes joined end to end would leave them. That was a prediction before it was an observation.',
    },
    questions: [
      {
        id: 'errors',
        prompt:
          'Why are shared genetic errors stronger evidence of ancestry than shared functional genes?',
        options: [
          {
            id: 'a',
            text: 'Because a shared requirement could explain a shared working gene, but nothing requires a gene to be broken in one particular way',
            correct: true,
          },
          { id: 'b', text: 'Because broken genes are easier to sequence' },
          { id: 'c', text: 'Because functional genes change too slowly to be informative' },
          { id: 'd', text: 'Because errors are more common than functional sequence' },
        ],
        explanation:
          'It is the logic teachers use to detect copied essays: two essays making the same true statements prove nothing, and two containing the same misspelling do. The probability of two lineages independently acquiring the identical disabling mutation at the identical position is vanishingly small.',
      },
      {
        id: 'chr2',
        prompt: 'What does human chromosome 2 show?',
        options: [
          {
            id: 'a',
            text: 'That two ancestral ape chromosomes fused, leaving telomere repeats and a relic centromere at internal positions',
            correct: true,
          },
          { id: 'b', text: 'That humans lost a chromosome that other apes retained' },
          { id: 'c', text: 'That chromosome number is unrelated to ancestry' },
          { id: 'd', text: 'That humans gained an extra chromosome after the split' },
        ],
        explanation:
          'Other great apes have 24 pairs and we have 23, so common ancestry required a fusion — and a fusion required relic chromosome-end sequence and a vestigial second centromere at predictable positions. Both were found where predicted, and the gene order matches two chimpanzee chromosomes laid end to end.',
      },
      {
        id: 'ervs',
        prompt: 'Why are shared retroviral insertions informative about ancestry?',
        options: [
          {
            id: 'a',
            text: 'Because insertion sites are effectively random across a three-billion-base genome, so a shared position implies a shared ancestor',
            correct: true,
          },
          { id: 'b', text: 'Because retroviruses only infect closely related species' },
          { id: 'c', text: 'Because viral sequence mutates faster than host sequence' },
          { id: 'd', text: 'Because the viruses are still active in both species' },
        ],
        explanation:
          'When a retrovirus inserts into a cell that produces eggs or sperm, the insertion becomes heritable. Roughly 8% of the human genome is this kind of wreckage, and thousands of insertions sit at identical coordinates in humans and chimpanzees.',
      },
    ],
  },

  'standing-up': {
    summary: {
      essential:
        'Bipedal walking is a controlled fall in which the body is balanced on one leg for most of every stride. Holding the pelvis level in that position requires hip muscles with a lever to pull on, which is what the human pelvis provides and an ape pelvis does not.',
      detailed:
        'Because the requirements are mechanical they leave marks on bone that cannot be faked, which is why a fragment of pelvis or a thigh bone angled inward can establish that an extinct animal walked upright.',
    },
    questions: [
      {
        id: 'onelegged',
        prompt: 'What is the central mechanical problem bipedal walking had to solve?',
        options: [
          {
            id: 'a',
            text: 'Stopping the pelvis tipping sideways while the body is supported on one leg',
            correct: true,
          },
          { id: 'b', text: 'Generating enough forward thrust from two limbs instead of four' },
          { id: 'c', text: 'Keeping the head level while running' },
          { id: 'd', text: 'Preventing the knees from bending backwards' },
        ],
        explanation:
          'For roughly 80% of every stride, half the body mass is cantilevered out beside the supporting foot. A short pelvis with blades wrapped round to the side puts the gluteal muscles where they can hold it level; a tall, flat ape pelvis gives them no lever, which is why chimpanzee bipedal walking swings the trunk over each foot in turn.',
      },
      {
        id: 'package',
        prompt: 'Why can bipedalism not be described as a change to the legs alone?',
        options: [
          {
            id: 'a',
            text: 'Because each fix creates the next problem — raising the trunk destabilises it, stabilising it reshapes the pelvis, which changes the knee',
            correct: true,
          },
          { id: 'b', text: 'Because the legs did not actually change' },
          { id: 'c', text: 'Because the arms changed more than the legs did' },
          { id: 'd', text: 'Because walking is controlled entirely by the nervous system' },
        ],
        explanation:
          'The solution is a package rather than a sequence of independent improvements. That interlocking is also why the skeletal signature is so diagnostic: the parts only work together.',
      },
    ],
  },

  'the-skeleton-rebuilt': {
    summary: {
      essential:
        'Pelvis, spine, femur, knee and foot are one integrated solution rather than five separate features, and every one of them bought upright walking at the cost of something else.',
      detailed:
        'The foot that became a spring stopped being able to grip. The lower back that carries the trunk is the most commonly injured part of the human body. The knee that locks straight is the joint that wears out. These are running costs of a structural conversion, not design flaws.',
    },
    questions: [
      {
        id: 'angle',
        prompt: 'Why does the human thigh bone slant inward from hip to knee?',
        options: [
          {
            id: 'a',
            text: 'To bring the knees and feet under the body midline so it can balance over one foot',
            correct: true,
          },
          { id: 'b', text: 'To increase stride length' },
          { id: 'c', text: 'To make room for a wider pelvis during childbirth' },
          { id: 'd', text: 'Because the femur grows faster than the rest of the leg' },
        ],
        explanation:
          'The angle is close to zero in apes and typically 8 to 11 degrees in humans. It develops during infancy in response to loading, which means its presence in a juvenile fossil shows the individual actually walked, not merely that its species could.',
      },
      {
        id: 'tradeoff',
        prompt: 'Human back pain and knee failure are best described as:',
        options: [
          {
            id: 'a',
            text: 'Running costs of modifying an inherited quadrupedal skeleton for upright walking',
            correct: true,
          },
          { id: 'b', text: 'Evidence that bipedalism was a mistake' },
          { id: 'c', text: 'Recent problems caused entirely by modern lifestyles' },
          { id: 'd', text: 'Design flaws that natural selection has not yet noticed' },
        ],
        explanation:
          'Selection does not optimise; it modifies what is already there under whatever pressures currently dominate. A structure converted to a new function keeps the weaknesses of its origins, and that pattern recurs throughout the human body.',
      },
    ],
  },

  'why-walk-on-two-legs': {
    summary: {
      essential:
        'We do not know. Energy efficiency, carrying, heat load and feeding posture are all serious proposals, and the evidence does not pick between them — not least because the savanna setting several of them assumed turns out not to match the environmental record.',
      detailed:
        'Carbon isotopes in ancient soils show early hominin sites had woody cover typically above 40%: wooded grassland and forest edge, not open plain. The hypotheses are also not mutually exclusive, and a transition driven by several weak pressures would leave much the same evidence as one driven by a single strong one.',
    },
    questions: [
      {
        id: 'savanna',
        prompt:
          'What does the carbon isotope record of ancient soils show about early hominin habitats?',
        options: [
          {
            id: 'a',
            text: 'Substantial tree cover — wooded grassland rather than open savanna',
            correct: true,
          },
          { id: 'b', text: 'Open grassland with almost no trees' },
          { id: 'c', text: 'Dense closed-canopy rainforest' },
          { id: 'd', text: 'Desert with seasonal water sources' },
        ],
        explanation:
          'Grasses and trees fix carbon by different chemical routes and leave different isotopic signatures in soil carbonates. Applied across African hominin sites spanning six million years, the method gives woody cover typically between 40% and 60% — which removes the setting the classic savanna story assumed.',
      },
      {
        id: 'energetics',
        prompt:
          'Chimpanzee bipedal walking costs about four times more energy per distance than human walking. Why does this not settle why bipedalism evolved?',
        options: [
          {
            id: 'a',
            text: 'Because it compares two modern species, and the first bipeds had neither anatomy',
            correct: true,
          },
          { id: 'b', text: 'Because energy efficiency does not affect survival' },
          { id: 'c', text: 'Because the measurement has not been replicated' },
          { id: 'd', text: 'Because chimpanzees rarely walk bipedally in the wild' },
        ],
        explanation:
          'The measurement is solid; the inference to the origin requires assuming the ancestral condition resembled a modern chimpanzee, which is exactly what is in doubt. If the first bipeds retained climbing, the relevant comparison may not be bipedal versus quadrupedal at all.',
      },
    ],
  },

  'walking-and-climbing-at-once': {
    summary: {
      essential:
        'Early hominins had lower bodies built for walking and upper bodies still built for climbing. This is mosaic evolution — different parts changing at different rates — and it is the normal pattern rather than an awkward halfway stage.',
      detailed:
        'Internal bone structure offers a way to ask what an individual actually did rather than what its species could do: the fine struts inside a joint thicken along the directions habitually loaded during life, within years.',
    },
    questions: [
      {
        id: 'trabecular',
        prompt:
          'Why can the internal structure of a fossil bone reveal behaviour rather than just anatomy?',
        options: [
          {
            id: 'a',
            text: 'Because internal struts thicken along the directions actually loaded during life, over a timescale of years',
            correct: true,
          },
          { id: 'b', text: 'Because internal bone does not fossilise unless it was used' },
          { id: 'c', text: 'Because bone density is fixed genetically at birth' },
          { id: 'd', text: 'Because internal structure preserves DNA' },
        ],
        explanation:
          'Applied to Australopithecus africanus hands, the method found loading patterns matching modern humans rather than chimpanzees — evidence of habitual forceful gripping in a species whose external anatomy is often read as primarily arboreal.',
      },
      {
        id: 'transitional',
        prompt:
          'Why is "transitional form" a misleading description of Australopithecus afarensis?',
        options: [
          {
            id: 'a',
            text: 'Because it existed for roughly 900,000 years as a functioning animal and was not in transit anywhere',
            correct: true,
          },
          { id: 'b', text: 'Because it is not actually related to later hominins' },
          { id: 'c', text: 'Because no intermediate fossils exist' },
          { id: 'd', text: 'Because its anatomy was not actually intermediate' },
        ],
        explanation:
          'Every species is transitional if you look backwards from one of its descendants and forwards from one of its ancestors. The label describes the observer vantage point, not the organism — which was successful for roughly three times as long as our own species has been.',
      },
    ],
  },

  'the-hand-and-the-grip': {
    summary: {
      essential:
        'The human hand is not more complex than an ape hand. Shorter fingers and a longer, more muscular thumb let the thumb pad meet a fingertip pad with force and control, which is the basis of almost everything a human hand does that an ape hand cannot.',
      detailed:
        'The order of events matters: australopith hand bones show human-like manipulative loading before the oldest stone tools their makers are confident about. Manipulative ability was already useful, and knapping arrived to exploit a capability that existed.',
    },
    questions: [
      {
        id: 'proportions',
        prompt: 'What makes the human precision grip possible?',
        options: [
          {
            id: 'a',
            text: 'Changed proportions and thumb musculature, not any novel anatomical structure',
            correct: true,
          },
          { id: 'b', text: 'An extra joint at the base of the thumb absent in apes' },
          { id: 'c', text: 'A greater number of finger bones' },
          { id: 'd', text: 'Greater overall hand strength than a chimpanzee' },
        ],
        explanation:
          'Human and chimpanzee hands share their skeletal and muscular plan almost entirely. Shorter fingers, a longer and more muscular thumb, a more mobile thumb joint and a few small muscles produce the difference — a change of ratio, which is exactly the kind of change modest genetic difference can produce.',
      },
      {
        id: 'order',
        prompt:
          'What does the evidence suggest about the relationship between the human hand and stone tools?',
        options: [
          {
            id: 'a',
            text: 'Manipulative hand use predates the oldest confidently attributed stone tools',
            correct: true,
          },
          { id: 'b', text: 'The hand evolved specifically in order to make tools' },
          { id: 'c', text: 'Stone tools appear before any manipulative hand anatomy' },
          { id: 'd', text: 'Hand anatomy has not changed since the last common ancestor' },
        ],
        explanation:
          'This does not mean the hand evolved "for" tools and waited. It means hands were already being used forcefully and precisely for other things, and technology later arrived to exploit that. Selection could then act on the hand further — but the first move was not made by technology.',
      },
    ],
  },

  'endurance-heat-and-sweat': {
    summary: {
      essential:
        'Humans are poor sprinters and exceptional distance movers, and the reason is cooling rather than legs. Sweating from naked skin is independent of breathing; panting is mechanically locked to stride in a galloping animal.',
      detailed:
        'Sustained running is limited by heat rather than muscle. A suite of traits appearing with early Homo — a springy Achilles tendon, large buttock muscles, a nuchal ligament, a decoupled shoulder girdle — does little for walking and a great deal for running.',
    },
    questions: [
      {
        id: 'panting',
        prompt: 'Why does panting work poorly for a galloping mammal?',
        options: [
          {
            id: 'a',
            text: 'Because in a bounding gait breathing is mechanically locked to stride, so cooling cannot be increased independently of speed',
            correct: true,
          },
          { id: 'b', text: 'Because the mouth must stay closed while running' },
          { id: 'c', text: 'Because panting requires more energy than sweating' },
          { id: 'd', text: 'Because the airways dry out at speed' },
        ],
        explanation:
          'The gut slams against the diaphragm with each bound, forcing roughly one breath per stride. Sweating has no such constraint — it is spread over the whole skin and independent of breathing — and humans have roughly ten times the eccrine gland density of other primates.',
      },
      {
        id: 'skin',
        prompt: 'Why does human skin pigmentation vary with latitude?',
        options: [
          {
            id: 'a',
            text: 'It is a compromise: strong ultraviolet destroys folate, but ultraviolet is also how skin makes vitamin D',
            correct: true,
          },
          { id: 'b', text: 'Because darker skin absorbs less heat' },
          { id: 'c', text: 'Because it tracks how long a population has existed' },
          { id: 'd', text: 'Because it reflects deep ancestral relationships between populations' },
        ],
        explanation:
          'Pigmentation tracks annual ultraviolet flux closely across indigenous populations worldwide, and depigmentation has evolved independently at high latitudes by different genetic routes. That responsiveness makes it among the worst possible markers of deep ancestry.',
      },
    ],
  },

  'teeth-jaws-and-diet': {
    summary: {
      essential:
        'Tooth shape records what a lineage was equipped to eat; microscopic wear records the last weeks of an individual life; enamel chemistry records years. The three frequently disagree, and the disagreement is itself a finding.',
      detailed:
        'Paranthropus boisei had the most extreme chewing apparatus of any hominin and was nicknamed Nutcracker Man. Its microwear does not match a hard-object feeder and its carbon isotopes say it ate overwhelmingly grasses or sedges. Anatomy records what an animal could survive, not what it usually ate.',
    },
    questions: [
      {
        id: 'proxies',
        prompt: 'What does dental microwear record that tooth shape does not?',
        options: [
          {
            id: 'a',
            text: 'What an individual actually ate in the last days or weeks before it died',
            correct: true,
          },
          { id: 'b', text: 'The species long-term dietary adaptation' },
          { id: 'c', text: 'The age of the individual at death' },
          { id: 'd', text: 'Whether food was cooked' },
        ],
        explanation:
          'The enamel surface is continuously reworked by chewing, so it records recent behaviour rather than inherited capability. Hard brittle items pit it; tough fibrous items scratch it. Reading anatomy as habit is the mistake the Paranthropus case exposed.',
      },
      {
        id: 'wisdom',
        prompt: 'Why do human third molars so often lack room to erupt?',
        options: [
          {
            id: 'a',
            text: 'Because jaw size and tooth row are under partly separate developmental control, and the jaw shrank faster',
            correct: true,
          },
          { id: 'b', text: 'Because third molars are a recent evolutionary addition' },
          { id: 'c', text: 'Because modern diets make jaws grow abnormally' },
          { id: 'd', text: 'Because they serve no function in any primate' },
        ],
        explanation:
          'Molars develop front to back with each suppressing the next, so variation compounds along the row and piles up at the last tooth. It is a predictable output of a developmental rule that works well overall — a useful case of something that looks like a design fault and is not.',
      },
    ],
  },

  'the-difficulty-of-human-birth': {
    summary: {
      essential:
        'Human birth is unusually difficult and unusually social. The classic explanation — a conflict between a pelvis narrow enough for efficient walking and a head large enough to be born — has been directly tested and has not held up cleanly.',
      detailed:
        'Measured across individuals, a wider pelvis does not increase the energy cost of walking or running, which removes the locomotor half of the supposed trade-off. Alternative accounts exist and none is established.',
    },
    questions: [
      {
        id: 'rotation',
        prompt: 'Why must a human infant rotate as it passes through the birth canal?',
        options: [
          {
            id: 'a',
            text: 'Because the pelvis was reshaped for walking, so the canal is widest side to side at the inlet and front to back at the outlet',
            correct: true,
          },
          { id: 'b', text: 'Because the infant head is perfectly round' },
          { id: 'c', text: 'Because the mother pelvis widens during labour' },
          { id: 'd', text: 'Because rotation reduces the risk of infection' },
        ],
        explanation:
          'The head is not round either, so it has to turn part-way through to keep presenting its narrowest dimension to the narrowest part of the passage. It emerges facing away from the mother, which is why assistance at birth is close to universal in human societies.',
      },
      {
        id: 'dilemma',
        prompt: 'What did the direct test of the obstetrical dilemma find?',
        options: [
          {
            id: 'a',
            text: 'A wider pelvis does not increase the energy cost of walking or running',
            correct: true,
          },
          {
            id: 'b',
            text: 'A wider pelvis dramatically increases locomotor cost, confirming the hypothesis',
          },
          { id: 'c', text: 'Pelvic width has no effect on the difficulty of birth' },
          { id: 'd', text: 'Human gestation is longer than the hypothesis predicted' },
        ],
        explanation:
          'Oxygen consumption measured across a range of pelvic widths showed no relationship with locomotor cost. The difficulty of birth is not in question; the explanation for it is, and that is worth knowing before trusting any tidy adaptive story in this field.',
      },
    ],
  },

  'the-long-childhood': {
    summary: {
      essential:
        'Humans take far longer to grow up than any other ape and stay dependent long after weaning — an expensive strategy that somebody has to pay for every day. Teeth let us date when it appeared, and the answer is recent.',
      detailed:
        'Enamel is laid down in daily increments, so counting the layers in a fossil tooth gives the number of days its crown took to form. On that measure Homo erectus and everything earlier grew on a more ape-like schedule, and even Neanderthals developed slightly faster than we do.',
    },
    questions: [
      {
        id: 'enamel',
        prompt: 'How can the pace of growth be measured in a fossil hominin?',
        options: [
          {
            id: 'a',
            text: 'By counting the daily increments in tooth enamel, which record how many days a crown took to form',
            correct: true,
          },
          { id: 'b', text: 'From the overall size of the skeleton' },
          { id: 'c', text: 'From the number of teeth present at death' },
          { id: 'd', text: 'By radiocarbon dating individual bones' },
        ],
        explanation:
          'Enamel is deposited in circadian layers that survive fossilisation, and a disturbance line marks the moment of birth — so age at death can be read from a child tooth to within days. It turns a question about life history into a measurement rather than an inference from body size.',
      },
      {
        id: 'neanderthal',
        prompt:
          'Neanderthals had brains as large as ours but developed slightly faster. What does that show?',
        options: [
          {
            id: 'a',
            text: 'That brain size and growth rate are not locked together, so something other than brain size selected for our long childhood',
            correct: true,
          },
          { id: 'b', text: 'That Neanderthal brains were less complex' },
          { id: 'c', text: 'That the dental method does not work on Neanderthals' },
          { id: 'd', text: 'That Neanderthals were not closely related to us' },
        ],
        explanation:
          'It is a small result that carries a large implication. Whatever produced our unusually extended childhood, it was not simply the volume of brain that had to be grown — and the long childhood and the cooperative provisioning that pays for it are two halves of one arrangement.',
      },
    ],
  },

  'the-body-as-an-archive': {
    summary: {
      essential:
        'The human body carries structures that make sense only as modified inheritances. "Vestigial" means reduced relative to an ancestral form, not useless — and several human vestigial structures do measurable work.',
      detailed:
        'The evidential force lies in the correspondence to a functional homologue in related lineages, not in uselessness. A structure that has been repurposed is equally good evidence of descent with modification.',
    },
    questions: [
      {
        id: 'vestigial',
        prompt: 'What does "vestigial" actually mean?',
        options: [
          {
            id: 'a',
            text: 'Reduced from a larger ancestral form, whether or not it still does something',
            correct: true,
          },
          { id: 'b', text: 'Completely functionless' },
          { id: 'c', text: 'Present only in embryos' },
          { id: 'd', text: 'Harmful to the organism that carries it' },
        ],
        explanation:
          'The appendix is the case that makes this clear: it is dense in lymphoid tissue, appears to act as a bacterial refuge after gut disturbance, and has evolved independently in many mammal lineages. It is still a modified end of the caecum and still evidence of shared ancestry.',
      },
      {
        id: 'blindspot',
        prompt: 'Why do vertebrates have a blind spot and octopuses do not?',
        options: [
          {
            id: 'a',
            text: 'The two retinas are wired in opposite directions, and each lineage was stuck with the arrangement its ancestor happened to have',
            correct: true,
          },
          { id: 'b', text: 'Octopus eyes are simpler and detect less detail' },
          {
            id: 'c',
            text: 'Vertebrate brains compensate, so the structure was never selected against',
          },
          { id: 'd', text: 'Octopuses have more optic nerves' },
        ],
        explanation:
          'In vertebrates the light-sensing cells face backwards and their wiring runs across the front of the retina before diving through it in a bundle; the hole where it passes through is the blind spot. Evolution modifies what is there. It does not go back and re-lay the wiring.',
      },
    ],
  },
};
