/**
 * Recaps for Human Evolution, Scientific Lens — Movements III and IV.
 *
 * These two movements carry most of the section's uncertainty, so several
 * recaps here check that a reader has absorbed a limit rather than a fact: that
 * the record is a filtered sample, that genus boundaries are conventions, that
 * brain volume is used because it survives rather than because it matters, and
 * that the origin of language has no direct evidence at all.
 */
import type { RecapsByTopic } from '../schema/recap';

export const HUMAN_FOSSIL_RECAPS: RecapsByTopic = {
  'how-a-fossil-becomes-evidence': {
    summary: {
      essential:
        'Fossilisation requires a specific and unlikely sequence: dying where burial is possible, being buried fast, the right groundwater chemistry, the deposit surviving, exposure now, and somebody finding it. The record is a heavily filtered sample, not a thin version of the truth.',
      detailed:
        'The filter has direction. East Africa dominates because the Rift Valley supplies burial, datable volcanic ash and continuous exposure in one place, while acidic forest soils destroy bone entirely — so a hominin population living in West or Central Africa for a million years could leave essentially nothing.',
    },
    questions: [
      {
        id: 'bias',
        prompt: 'Why does the hominin fossil record concentrate in East Africa?',
        options: [
          {
            id: 'a',
            text: 'Because the Rift Valley combines rapid burial, datable volcanic ash and continuous exposure — it is where preservation and discovery are possible',
            correct: true,
          },
          { id: 'b', text: 'Because hominins only lived in East Africa' },
          { id: 'c', text: 'Because East African rock is older than rock elsewhere' },
          { id: 'd', text: 'Because other regions have not been surveyed at all' },
        ],
        explanation:
          'It is a geological accident with large consequences for the story. When a species is described as East African, the honest statement is often that East Africa is where we can see. The discovery of Sahelanthropus in Chad was startling largely because nobody had been able to look there.',
      },
      {
        id: 'dating',
        prompt: 'How is a hominin fossil usually dated?',
        options: [
          {
            id: 'a',
            text: 'By dating volcanic layers above and below it, which brackets its age',
            correct: true,
          },
          { id: 'b', text: 'By radiocarbon dating the bone directly' },
          { id: 'c', text: 'By comparing its anatomy with better-dated specimens' },
          { id: 'd', text: 'By counting sediment layers from the present downwards' },
        ],
        explanation:
          'Volcanic minerals trap decay products from the moment they cool, so an ash layer can be dated precisely and a fossil between two of them is bracketed. Radiocarbon runs out around fifty thousand years, far too recent for most of this record. A date quoted without its method and error bars is not a measurement.',
      },
    ],
  },

  'the-earliest-possible-hominins': {
    summary: {
      essential:
        'Sahelanthropus, Orrorin and Ardipithecus are all proposed as early hominins, and every one of the arguments is disputed. Near a branching point the two lineages have barely diverged, so a small number of suggestive traits is exactly what is expected — and easiest to read two ways.',
      detailed:
        'Ardipithecus is the best preserved and the most consequential: a pelvis with bipedal features together with a grasping big toe, a combination no living primate has, used to argue that the last common ancestor was not chimpanzee-like. The pelvis is crushed and its reconstruction is contested.',
    },
    questions: [
      {
        id: 'ambiguity',
        prompt: 'Why are fossils from close to the human–chimpanzee split so hard to classify?',
        options: [
          {
            id: 'a',
            text: 'Because the two lineages had barely diverged, so few distinguishing features had yet accumulated',
            correct: true,
          },
          { id: 'b', text: 'Because fossils that old are always too damaged to study' },
          { id: 'c', text: 'Because dating methods do not reach that far back' },
          { id: 'd', text: 'Because the relevant researchers disagree about evolution itself' },
        ],
        explanation:
          'This is a structural problem rather than a practical one. A fossil from that window is expected to look like a generalised ape with a handful of suggestive traits, and a handful of traits is precisely what supports competing readings.',
      },
      {
        id: 'ardi',
        prompt: 'What combination made Ardipithecus ramidus surprising?',
        options: [
          {
            id: 'a',
            text: 'Pelvic features associated with upright walking together with a grasping, opposable big toe',
            correct: true,
          },
          { id: 'b', text: 'A large brain with an ape-like body' },
          { id: 'c', text: 'Stone tools associated with a pre-Homo species' },
          { id: 'd', text: 'Modern human teeth in a very ancient deposit' },
        ],
        explanation:
          'No living primate has that combination — apparently bipedal on the ground and climbing with a grasping foot. Because Ardi also lacks knuckle-walking adaptations, the find was used to argue that the last common ancestor was a more generalised ape than a chimpanzee.',
      },
    ],
  },

  'the-australopithecines': {
    summary: {
      essential:
        'For about two million years Africa held upright-walking apes with brains close to chimpanzee size. The order of events is the finding: bipedalism fully established, the brain barely changed.',
      detailed:
        'The field could not accept this ordering for thirty years because the Piltdown forgery had convinced it that a large brain came first. Once Piltdown was exposed in 1953, the australopithecines could be read for what they are.',
    },
    questions: [
      {
        id: 'ordering',
        prompt: 'What do the australopithecines establish about the order of human evolution?',
        options: [
          {
            id: 'a',
            text: 'That bipedalism preceded brain expansion by roughly two million years',
            correct: true,
          },
          { id: 'b', text: 'That brain expansion and bipedalism happened together' },
          { id: 'c', text: 'That a large brain came first and the body followed' },
          { id: 'd', text: 'That tool use preceded both' },
        ],
        explanation:
          'Australopith postcranial anatomy is derived for bipedality from at least 4.2 million years ago, while endocranial volumes stay within or close to the chimpanzee range for another two million. Whatever drove brain expansion, it happened later and separately.',
      },
      {
        id: 'piltdown',
        prompt: 'Why was the Taung Child dismissed for nearly thirty years?',
        options: [
          {
            id: 'a',
            text: 'Because the Piltdown forgery had convinced the field that a big brain evolved before an upright body',
            correct: true,
          },
          { id: 'b', text: 'Because it was correctly suspected of being a forgery itself' },
          { id: 'c', text: 'Because it was found in South Africa rather than East Africa' },
          { id: 'd', text: 'Because its dating was unreliable' },
        ],
        explanation:
          'Piltdown Man, assembled in England in 1912 from a human braincase and an ape jaw, made the opposite combination look wrong. A useful reminder that a field can be confidently wrong for decades when its central evidence is bad.',
      },
    ],
  },

  'lucy-and-laetoli': {
    summary: {
      essential:
        'Lucy’s skeleton shows an anatomy capable of upright walking. The Laetoli footprints show upright walking happening. Neither alone would close the argument; together they do, because they fail in different ways.',
      detailed:
        'This is the pattern that makes a conclusion in this field strong — independent kinds of evidence with unrelated weaknesses pointing the same way. When a claim rests on only one kind, that is the moment to ask how it could fail.',
    },
    questions: [
      {
        id: 'convergence',
        prompt: 'Why is the combination of Lucy and Laetoli stronger than either alone?',
        options: [
          {
            id: 'a',
            text: 'Anatomy can be misread as to function, and footprints cannot be wrong about behaviour — the two fail in different ways',
            correct: true,
          },
          { id: 'b', text: 'Because they come from the same individual' },
          { id: 'c', text: 'Because two pieces of evidence are always better than one' },
          { id: 'd', text: 'Because the footprints were dated by the same method as the skeleton' },
        ],
        explanation:
          'Bones establish capability, not habit — someone could argue Lucy mostly climbed and walked upright only occasionally. A trackway records what an animal was doing at the moment it made it, and says nothing about anatomy. The independence is what closes the question.',
      },
      {
        id: 'limits',
        prompt: 'What do the Laetoli footprints not tell us?',
        options: [
          { id: 'a', text: 'Which species made them', correct: true },
          { id: 'b', text: 'Whether the walkers had a raised arch' },
          { id: 'c', text: 'Whether the big toe was in line with the others' },
          { id: 'd', text: 'How old the trackway is' },
        ],
        explanation:
          'No fossils were found in the ash. The usual attribution to Australopithecus afarensis rests on it being the hominin known from that time and region — a reasonable inference rather than a demonstration. A good deal of published interpretation of these prints has gone considerably further than the evidence.',
      },
    ],
  },

  'the-robust-branch': {
    summary: {
      essential:
        'Paranthropus solved its problems with teeth rather than tools, persisted for over a million years alongside early Homo, and then disappeared. Calling it a dead end smuggles in a judgement: it lasted roughly five times as long as our species has so far.',
      detailed:
        'Its anatomy says hard-object specialist and its microwear and isotopes say grasses and sedges. Why it went extinct around 1.2 million years ago is genuinely unknown, and the usual specialisation story is complicated by the fact that its actual diet was abundant rather than rare.',
    },
    questions: [
      {
        id: 'coexist',
        prompt: 'What is the relationship between Paranthropus and early Homo?',
        options: [
          {
            id: 'a',
            text: 'They were contemporaries on the same landscape for over a million years',
            correct: true,
          },
          { id: 'b', text: 'Paranthropus was the direct ancestor of early Homo' },
          { id: 'c', text: 'Early Homo evolved after Paranthropus went extinct' },
          { id: 'd', text: 'They lived on different continents' },
        ],
        explanation:
          'Both genera are recovered from overlapping stratigraphic contexts at multiple sites. Their coexistence is a matter of stratigraphy rather than inference, and it is one of the clearest contradictions of the ladder picture.',
      },
      {
        id: 'nutcracker',
        prompt: 'Why is the nickname "Nutcracker Man" misleading?',
        options: [
          {
            id: 'a',
            text: 'Because tooth wear and enamel chemistry indicate grasses and sedges rather than hard objects',
            correct: true,
          },
          { id: 'b', text: 'Because its teeth were not actually unusually large' },
          { id: 'c', text: 'Because the specimen turned out to be female' },
          { id: 'd', text: 'Because it belonged to the genus Homo' },
        ],
        explanation:
          'The anatomy is real and extreme, but a structure built to survive the hardest thing an animal ever has to process may be used most of the time on something else. Isotopes put Paranthropus boisei at roughly 75 to 80% grass- or sedge-derived carbon, the highest of any hominin measured.',
      },
    ],
  },

  'the-first-homo': {
    summary: {
      essential:
        'There is no agreed definition of the genus Homo and no agreed first member. Every proposed criterion — brain size, tool manufacture, body proportions, dental reduction — includes or excludes specimens inconsistently.',
      detailed:
        'This is not a gap awaiting a better fossil. Genus boundaries are conventions imposed on a continuous process, so populations near the boundary are genuinely ambiguous — which is a prediction of evolutionary theory rather than a problem for it.',
    },
    questions: [
      {
        id: 'definition',
        prompt: 'Why is there no agreed definition of the genus Homo?',
        options: [
          {
            id: 'a',
            text: 'Because genus boundaries are conventions imposed on a continuous process, so any threshold is arbitrary',
            correct: true,
          },
          { id: 'b', text: 'Because too few early Homo fossils have been found' },
          { id: 'c', text: 'Because researchers refuse to cooperate' },
          { id: 'd', text: 'Because the fossils have not been dated accurately' },
        ],
        explanation:
          'Compare asking when a child becomes an adult: any threshold is a convention and people near it are ambiguous, not because development is mysterious but because it is continuous. Leakey lowered the accepted brain-size threshold in 1964 to admit Homo habilis, which tells you the boundary was drawn by people.',
      },
      {
        id: 'diversity',
        prompt:
          'What does the reconstruction of the Homo habilis type specimen suggest about early Homo?',
        options: [
          {
            id: 'a',
            text: 'That it comprised several contemporaneous lineages rather than one gradually changing one',
            correct: true,
          },
          { id: 'b', text: 'That all early Homo specimens belong to a single variable species' },
          { id: 'c', text: 'That Homo habilis should be reassigned to Australopithecus' },
          { id: 'd', text: 'That the specimen was misdated' },
        ],
        explanation:
          'Correcting for post-depositional distortion yielded a morphology incompatible with placing all early Homo material in one variable species. At least two and possibly three lineages appear to have been present simultaneously.',
      },
    ],
  },

  'homo-erectus': {
    summary: {
      essential:
        'From about two million years ago Homo erectus had roughly modern body proportions, a substantially larger brain and eventually a range spanning Africa and Asia. It survived for well over a million years — longer than any other known human species.',
      detailed:
        'Several things change together around this time: body size, leg length, gut size, brain size, and the appearance of the Acheulean handaxe. The association is well supported; the causal ordering is not.',
    },
    questions: [
      {
        id: 'body',
        prompt: 'What is most striking about the Turkana Boy skeleton?',
        options: [
          {
            id: 'a',
            text: 'Below the neck it is essentially a modern human body, with no suggestion of time spent in trees',
            correct: true,
          },
          { id: 'b', text: 'It has a brain the size of a modern human' },
          { id: 'c', text: 'It was found with stone tools of modern type' },
          { id: 'd', text: 'It is the oldest hominin skeleton known' },
        ],
        explanation:
          'Long legs, short arms, narrow shoulders, a narrow waist and a barrel-shaped rib cage. The climbing compromise that defined the australopithecines for two million years is over.',
      },
      {
        id: 'handaxe',
        prompt: 'What is puzzling about the Acheulean handaxe?',
        options: [
          {
            id: 'a',
            text: 'It stayed essentially unchanged for over a million years while brain size was increasing',
            correct: true,
          },
          { id: 'b', text: 'It is too crude to have required any planning' },
          { id: 'c', text: 'It appears only in Africa and never elsewhere' },
          { id: 'd', text: 'It was made by australopiths rather than by Homo' },
        ],
        explanation:
          'Making one requires deciding the final shape before starting — the first evidence of a tool made to a mental template. Then a hundred thousand generations pass with no cumulative improvement, which suggests that whatever produced these tools did not include the ratcheting improvement of later human technology.',
      },
    ],
  },

  'out-of-africa-the-first-time': {
    summary: {
      essential:
        'Hominins reached the Caucasus by 1.85 million years ago with brains around half modern size and simple flake tools. Leaving Africa required none of the equipment that was assumed necessary.',
      detailed:
        'Dmanisi also delivered an uncomfortable result: five crania from one place within a few thousand years differ from each other as much as specimens assigned to separate species elsewhere — which raises the possibility that some named hominin species are within-population variation sampled one fossil at a time.',
    },
    questions: [
      {
        id: 'dmanisi',
        prompt: 'What did the Dmanisi hominins show about the first dispersal from Africa?',
        options: [
          {
            id: 'a',
            text: 'That it happened with small brains, simple tools and no evidence of fire',
            correct: true,
          },
          { id: 'b', text: 'That it required control of fire and handaxes' },
          { id: 'c', text: 'That it happened much later than previously thought' },
          { id: 'd', text: 'That only Homo sapiens ever left Africa' },
        ],
        explanation:
          'Brains of 546 to 730 cubic centimetres, Oldowan-grade flakes and choppers rather than handaxes, some small-bodied individuals, and 4,000 kilometres from the Rift Valley. The expected prerequisites turn out not to have been prerequisites.',
      },
      {
        id: 'variation',
        prompt: 'Why does the variation among the five Dmanisi skulls matter for the whole field?',
        options: [
          {
            id: 'a',
            text: 'Because it shows how much a single population can vary, suggesting some named species may be variants',
            correct: true,
          },
          { id: 'b', text: 'Because it proves the skulls were wrongly dated' },
          { id: 'c', text: 'Because it shows several species lived at Dmanisi' },
          { id: 'd', text: 'Because it means brain size cannot be measured reliably' },
        ],
        explanation:
          'This is a rare chance to observe within-population variation directly rather than assume it. The fifth skull, with a long face and the smallest braincase, would very likely have been named a new species had it been found alone.',
      },
    ],
  },

  'how-complete-is-the-family-tree': {
    summary: {
      essential:
        'The record establishes that many hominin species existed and that several overlapped. It does not establish which were ancestral to which, and for most named species that question is open.',
      detailed:
        'The uncertainty is concentrated in one place — the fine structure of who descended from whom — which is exactly where you would expect it given how the record is made. The large-scale pattern rests on many independent lines of evidence.',
    },
    questions: [
      {
        id: 'ancestry',
        prompt:
          'Why can phylogenetic methods rarely identify a fossil species as a direct ancestor?',
        options: [
          {
            id: 'a',
            text: 'Because being an ancestor is not a feature that can be scored on a bone — the methods resolve sister-group relationships instead',
            correct: true,
          },
          { id: 'b', text: 'Because ancestors never fossilise' },
          { id: 'c', text: 'Because the methods are not yet sophisticated enough' },
          { id: 'd', text: 'Because DNA is required and rarely survives' },
        ],
        explanation:
          'A species known from three jaw fragments might be our direct ancestor or a close cousin of our ancestor, and nothing about those jaws distinguishes those cases. This is why museum diagrams from different institutions disagree, often substantially.',
      },
      {
        id: 'naledi',
        prompt: 'Why was the dating of Homo naledi a surprise?',
        options: [
          {
            id: 'a',
            text: 'A hominin with a 500 cm³ brain turned out to be alive at the same time as the earliest Homo sapiens',
            correct: true,
          },
          { id: 'b', text: 'It turned out to be older than the australopithecines' },
          { id: 'c', text: 'It could not be dated at all' },
          { id: 'd', text: 'It proved to be a modern human burial' },
        ],
        explanation:
          'Its anatomy had led most observers to guess around two million years; six independent methods converged on 335 to 236 thousand. Nobody had predicted this lineage existed, and it was found in a well-explored region of a well-studied country.',
      },
    ],
  },

  'the-cost-of-a-brain': {
    summary: {
      essential:
        'Brain tissue runs at roughly ten times the body average rate and never switches off — about a fifth of an adult’s resting energy for 2% of their mass, and over 40% in a young child. Any explanation of brain expansion has to explain how that bill got paid.',
      detailed:
        'Only two answers are possible: take in more, or spend less elsewhere. The classic gut-versus-brain trade-off failed a general comparative test, while measurement supports the other route — humans expend several hundred more calories per day than other apes and carry far more fat.',
    },
    questions: [
      {
        id: 'cost',
        prompt: 'Why is a larger brain not simply an improvement waiting to happen?',
        options: [
          {
            id: 'a',
            text: 'Because it is a continuous energy cost that has to be paid for out of what would otherwise go to growth, movement or reproduction',
            correct: true,
          },
          { id: 'b', text: 'Because larger brains are slower to react' },
          { id: 'c', text: 'Because skull size is limited by the birth canal alone' },
          { id: 'd', text: 'Because brain tissue wears out faster than other tissue' },
        ],
        explanation:
          'Unlike muscle, which is cheap at rest, neural tissue draws power continuously — mostly on pumping ions back across membranes to restore gradients that every signal discharges. A brain is a purchase, and the price is real.',
      },
      {
        id: 'expensive-tissue',
        prompt: 'What happened when the expensive-tissue hypothesis was tested across mammals?',
        options: [
          {
            id: 'a',
            text: 'No negative correlation between brain mass and gut mass was found, undermining the hypothesis in its original form',
            correct: true,
          },
          { id: 'b', text: 'The predicted trade-off was confirmed strongly' },
          { id: 'c', text: 'Brain mass was found to correlate with body length instead' },
          { id: 'd', text: 'The test could not be carried out' },
        ],
        explanation:
          'A comparative analysis of about a hundred species found brain size negatively correlated with fat deposits rather than with digestive tract mass. It does not rule out an energetic trade-off in hominins specifically, but it removes the general pattern the hypothesis assumed.',
      },
    ],
  },

  'how-brain-size-changed': {
    summary: {
      essential:
        'Hominin brain size roughly tripled over three million years, but not steadily: flat for two million years, rising in bursts, and in parallel in the Neanderthal and Homo sapiens lineages separately. Not every contemporaneous hominin was on the trend.',
      detailed:
        'Average human brain volume also appears to have declined by something like 5 to 10% over the last ten to thirty thousand years, with the magnitude, cause and even existence of the decline currently disputed.',
    },
    questions: [
      {
        id: 'parallel',
        prompt:
          'Neanderthals and Homo sapiens both reached brain volumes around 1,400 cm³ from a smaller-brained common ancestor. What does that imply?',
        options: [
          {
            id: 'a',
            text: 'That the expansion happened separately in both lineages, so a shared selective condition was operating on both',
            correct: true,
          },
          { id: 'b', text: 'That the two are actually the same species' },
          { id: 'c', text: 'That their common ancestor already had a large brain' },
          { id: 'd', text: 'That brain volume measurements are unreliable' },
        ],
        explanation:
          'Parallel increase implies shared conditions rather than a single ancestral event. And Homo naledi, alive at the same time with a brain around 500 cubic centimetres, shows it was not a trend everyone was on.',
      },
      {
        id: 'eq',
        prompt: 'Why should hominin encephalisation quotients be treated cautiously?',
        options: [
          {
            id: 'a',
            text: 'Because they are ratios that depend on body mass estimates which are themselves reconstructions with wide error bars',
            correct: true,
          },
          { id: 'b', text: 'Because they cannot be calculated for extinct species' },
          { id: 'c', text: 'Because brain volume cannot be measured from a braincase' },
          { id: 'd', text: 'Because they are only defined for primates' },
        ],
        explanation:
          'A ratio is not a measure of capability, and the correction depends on estimating the body mass of an animal known from fragments. Any hominin EQ value carries more uncertainty than it usually displays.',
      },
    ],
  },

  'size-is-not-the-whole-story': {
    summary: {
      essential:
        'Neanderthal brains averaged slightly larger than ours. Volume is used because it survives, not because it is what matters — shape, organisation and development all differ and at least one of them can be read from fossils.',
      detailed:
        'The globular modern braincase develops gradually between about 100 and 35 thousand years ago, after brain size had stopped increasing. That is a reorganisation rather than an expansion.',
    },
    questions: [
      {
        id: 'volume',
        prompt:
          'What does the Neanderthal brain volume comparison reveal about the use of brain size?',
        options: [
          {
            id: 'a',
            text: 'That volume was never doing the work it was credited with — it is used because it is what survives',
            correct: true,
          },
          { id: 'b', text: 'That Neanderthals were more intelligent than modern humans' },
          { id: 'c', text: 'That endocranial volume cannot be measured accurately' },
          { id: 'd', text: 'That brain size is unrelated to body size' },
        ],
        explanation:
          'The moment the number produces an inconvenient result, everybody reaches for organisation, wiring and development instead. That reflex is correct, and it means volume was a convenience rather than a measure of capability.',
      },
      {
        id: 'globular',
        prompt: 'When did the modern globular braincase develop?',
        options: [
          {
            id: 'a',
            text: 'Gradually between about 100 and 35 thousand years ago, after brain volume had stopped increasing',
            correct: true,
          },
          { id: 'b', text: 'At the same time as the increase in brain volume' },
          { id: 'c', text: 'Only in the last five thousand years' },
          { id: 'd', text: 'Before Homo sapiens appeared' },
        ],
        explanation:
          'The earliest Homo sapiens crania have modern faces and elongated, archaic-looking braincases. The reshaping involves the parietal areas and the cerebellum bulging outward — regions associated with integrating sensory information, spatial and tool-related processing, and language and working memory.',
      },
      {
        id: 'frontal',
        prompt: 'Is the human frontal lobe disproportionately large compared with other apes?',
        options: [
          {
            id: 'a',
            text: 'No — it occupies roughly the proportion expected for an ape brain of our size',
            correct: true,
          },
          { id: 'b', text: 'Yes, it is about twice the expected size' },
          { id: 'c', text: 'Yes, and this is what explains human language' },
          { id: 'd', text: 'It is smaller than expected' },
        ],
        explanation:
          'What does appear to differ is internal organisation — connectivity, cell density, the relative expansion of particular subregions. A satisfying story that measurement did not support, and a reminder that "which part got bigger" is usually the wrong question to ask about a brain.',
      },
    ],
  },

  'why-did-brains-get-bigger': {
    summary: {
      essential:
        'Social complexity, ecological problem-solving, energy supply and cultural transmission are all serious proposals, and no single pressure has been shown to be necessary or sufficient. The leading hypothesis has lost ground rather than gained it.',
      detailed:
        'Brain expansion happened over two million years in several lineages under changing conditions, so there is no particular reason to expect one pressure throughout — and a mixture of causes would produce exactly the pattern of partially supported, mutually incompatible hypotheses the field has.',
    },
    questions: [
      {
        id: 'social',
        prompt: 'What weakened the social brain hypothesis?',
        options: [
          {
            id: 'a',
            text: 'A large comparative study found primate brain size predicted by diet rather than by any measure of sociality',
            correct: true,
          },
          { id: 'b', text: 'It was shown that primates do not live in groups' },
          { id: 'c', text: 'Human group sizes turned out to be much larger than predicted' },
          { id: 'd', text: 'Brain size was found not to vary between primate species' },
        ],
        explanation:
          'Across more than 140 species, frugivory outperformed group size, social organisation and mating system as a predictor. Other work finds the original correlation depends on whether relative or absolute brain size is used. The hypothesis is not dead, but the headline result is no longer stable.',
      },
      {
        id: 'nosingle',
        prompt: 'Why might the absence of a single answer be a finding rather than a failure?',
        options: [
          {
            id: 'a',
            text: 'Because different pressures could have dominated at different times, which would produce exactly this pattern of partially supported hypotheses',
            correct: true,
          },
          { id: 'b', text: 'Because brain expansion may not have happened' },
          { id: 'c', text: 'Because the hypotheses are all untestable in principle' },
          { id: 'd', text: 'Because comparative methods cannot work on extinct species' },
        ],
        explanation:
          'The field has spent forty years looking for the single answer, which may be the wrong shape of question. Distinguishing "no single cause" from "cause not yet found" is itself hard, and it should make anyone suspicious of a book offering one key to humanity.',
      },
    ],
  },

  'social-intelligence': {
    summary: {
      essential:
        'On physical problems — space, quantity, causality — two-year-old children and adult chimpanzees score about the same. On social problems the children are far ahead. The difference is a specific cluster, not general intelligence.',
      detailed:
        'At the centre of it is shared intentionality: holding a goal jointly with someone else and knowing that you both know you are doing it together. That capacity is what makes information transmit accurately, which links social cognition to everything about cumulative culture.',
    },
    questions: [
      {
        id: 'domains',
        prompt: 'What did the Primate Cognition Test Battery find?',
        options: [
          {
            id: 'a',
            text: 'Children and chimpanzees performed comparably on physical tasks and children much better on social tasks',
            correct: true,
          },
          { id: 'b', text: 'Children outperformed chimpanzees on every task' },
          { id: 'c', text: 'Chimpanzees outperformed children on physical tasks' },
          { id: 'd', text: 'No differences were found in either domain' },
        ],
        explanation:
          'The asymmetry is the result. Human cognitive advantage over apes is concentrated in social learning, communication and reading intentions, not in general problem-solving — which reframes what the decisive human capacity was.',
      },
      {
        id: 'transmission',
        prompt: 'Why does shared intentionality matter for culture?',
        options: [
          {
            id: 'a',
            text: 'Because copying a skill accurately requires inferring what someone is trying to achieve, not just watching their movements',
            correct: true,
          },
          { id: 'b', text: 'Because it allows individuals to invent more solutions' },
          { id: 'c', text: 'Because it increases group size' },
          { id: 'd', text: 'Because it is required for spoken language' },
        ],
        explanation:
          'A population that can transmit skills faithfully can accumulate them; one that cannot, cannot, however intelligent its individuals are. The decisive capacity may never have been individual problem-solving but the machinery for getting a solution reliably out of one head and into another.',
      },
    ],
  },

  'learning-imitation-and-teaching': {
    summary: {
      essential:
        'Social learning is widespread among animals. What is unusual about humans is the fidelity of copying, which is what allows improvements to survive long enough to be built on.',
      detailed:
        'Human children copy actions including visibly unnecessary ones. That looks like a failure of reasoning and is arguably the opposite: many human techniques have steps whose purpose is invisible, and copying faithfully preserves information nobody currently possesses.',
    },
    questions: [
      {
        id: 'overimitation',
        prompt: 'Why might copying visibly unnecessary steps be advantageous?',
        options: [
          {
            id: 'a',
            text: 'Because many techniques have steps whose purpose is invisible, and trimming them can be dangerous',
            correct: true,
          },
          { id: 'b', text: 'Because it makes learning faster' },
          { id: 'c', text: 'Because it signals respect for the demonstrator' },
          { id: 'd', text: 'Because children cannot distinguish relevant from irrelevant actions' },
        ],
        explanation:
          'Leaching toxins from a plant food may require soaking, heating and rinsing in sequence, where omitting a step produces poisoning that is slow and hard to attribute. Copying without requiring understanding preserves information the copier does not have.',
      },
      {
        id: 'knapping',
        prompt: 'What did transmission-chain experiments with Oldowan knapping find?',
        options: [
          {
            id: 'a',
            text: 'Skill degraded rapidly when learners only observed, and was maintained when they were actively taught',
            correct: true,
          },
          { id: 'b', text: 'Observation alone transmitted the skill perfectly' },
          { id: 'c', text: 'Nobody in any condition produced a usable flake' },
          { id: 'd', text: 'Verbal instruction performed worst of all conditions' },
        ],
        explanation:
          'Across chains of 184 participants, imitation and reverse engineering produced much lower flake yield and quality than gestural or verbal teaching. The extrapolation to Pleistocene hominins is an inference from modern naive learners, and the experiments compress into hours what would have been years of childhood exposure.',
      },
    ],
  },

  language: {
    summary: {
      essential:
        'We do not know when language evolved. Speech leaves no direct trace, every proposed anatomical proxy has been weak or has failed, and the genetic story that briefly seemed to settle it has come apart.',
      detailed:
        'What survives is weaker and more interesting: Neanderthal ear anatomy indicates sensitivity across the same narrow frequency band that carries the information-dense parts of human speech. That is suggestive and not proof, and the field still ranges from a recent origin under 100,000 years to one predating the split with Neanderthals.',
    },
    questions: [
      {
        id: 'foxp2',
        prompt: 'What happened to the claim that FOXP2 was "the language gene"?',
        options: [
          {
            id: 'a',
            text: 'Neanderthals carry the same variants, the associated disorder involves general motor control, and the reported selective sweep did not survive larger samples',
            correct: true,
          },
          { id: 'b', text: 'It was confirmed by whole-genome sequencing' },
          { id: 'c', text: 'The gene turned out not to exist in humans' },
          { id: 'd', text: 'It was shown to control grammar specifically' },
        ],
        explanation:
          'FOXP2 is a regulatory gene active in many tissues and species, including in birdsong learning. It remains relevant to speech motor control; the claim that it underwent recent human-specific positive selection does not stand.',
      },
      {
        id: 'settle',
        prompt: 'What would settle when language originated?',
        options: [
          {
            id: 'a',
            text: 'Nothing currently known — there is no trace language leaves in bone, stone or DNA that could be read unambiguously',
            correct: true,
          },
          { id: 'b', text: 'A complete Neanderthal vocal tract preserved in ice' },
          { id: 'c', text: 'Finding the gene responsible for grammar' },
          { id: 'd', text: 'Better dating of European cave art' },
        ],
        explanation:
          'Progress is most likely to come indirectly, from the genetics of language development in living people, comparative work on other species, and archaeology of behaviours hard to transmit without symbolic communication. All of that constrains without answering, and some researchers argue the question may be permanently beyond direct evidence.',
      },
    ],
  },

  'symbolic-thought': {
    summary: {
      essential:
        'A symbol stands for something else by convention, and only works if it is shared — so symbolic objects are indirect evidence of a community with conventions, which is much closer to evidence of a mind than any tool is.',
      detailed:
        'The old model of a sudden creative revolution around 40,000 years ago in Europe was an artefact of where people had been digging. African Middle Stone Age evidence pushed the record back to at least 77,000 years for deliberate engraving and 320,000 for processed pigment.',
    },
    questions: [
      {
        id: 'why-symbols',
        prompt: 'Why is a bead better evidence of cognition than a stone tool?',
        options: [
          {
            id: 'a',
            text: 'Because it has no practical payoff, so wearing it implies a shared convention that others could read',
            correct: true,
          },
          { id: 'b', text: 'Because beads are harder to make than stone tools' },
          { id: 'c', text: 'Because beads are always found with burials' },
          { id: 'd', text: 'Because stone tools can be produced accidentally' },
        ],
        explanation:
          'Someone chose a shell for no nutritional reason, carried it inland, perforated it and wore it — and other people understood what wearing it meant. A symbol only works if it is shared, which makes it evidence about a community rather than an individual.',
      },
      {
        id: 'revolution',
        prompt: 'Why did the "creative revolution" model dissolve?',
        options: [
          {
            id: 'a',
            text: 'Because African Middle Stone Age excavation found much older evidence, revealing the pattern as an artefact of where people had dug',
            correct: true,
          },
          { id: 'b', text: 'Because the European cave art was redated as much younger' },
          {
            id: 'c',
            text: 'Because symbolic behaviour was shown to be impossible before language',
          },
          { id: 'd', text: 'Because the original evidence was fabricated' },
        ],
        explanation:
          'European caves had been excavated intensively for a century while African Middle Stone Age sites had not. As African fieldwork expanded, the supposed revolution dissolved backwards into a long, patchy accumulation.',
      },
    ],
  },
};
