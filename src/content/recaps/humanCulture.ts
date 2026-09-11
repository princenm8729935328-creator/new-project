/**
 * Recaps for Human Evolution, Scientific Lens — Movements V and VI.
 *
 * The turning point of the section is here, so several of these check that the
 * reader has the direction of causation right: that behaviour began changing
 * what selection acted on, that cumulative culture is a property of a population
 * rather than of a mind, and that the disappearance of the other human species
 * does not require anyone to have been superior.
 */
import type { RecapsByTopic } from '../schema/recap';

export const HUMAN_CULTURE_RECAPS: RecapsByTopic = {
  'the-first-stone-tools': {
    summary: {
      essential:
        'The oldest widely accepted stone tools are about 2.6 million years old, with contested claims at 3.3 million. Either way, toolmaking begins before the genus Homo is securely established.',
      detailed:
        'An Oldowan flake looks crude and is not. Stone fractures along a cone of force rather than where it is struck, so detaching a usable flake requires reading the internal structure of a rock from the outside and striking within a narrow window of angles and forces.',
    },
    questions: [
      {
        id: 'skill',
        prompt:
          'What shows that Oldowan assemblages were made skilfully rather than opportunistically?',
        options: [
          {
            id: 'a',
            text: 'The failure patterns that dominate beginner output are uncommon, and raw material was often selected and carried several kilometres',
            correct: true,
          },
          { id: 'b', text: 'The tools are symmetrical in three dimensions' },
          { id: 'c', text: 'They are always found with hominin fossils' },
          { id: 'd', text: 'They show wear from repeated resharpening' },
        ],
        explanation:
          'Carrying stone is the detail that changes the interpretation most: moving a cobble several kilometres before using it means anticipating a future need at a place you are not yet at, with a material chosen for properties you have learned about.',
      },
      {
        id: 'attribution',
        prompt:
          'Why is it often difficult to say which species made an Early Stone Age assemblage?',
        options: [
          {
            id: 'a',
            text: 'Because tools and fossils in the same deposit only show that somebody was knapping, not who',
            correct: true,
          },
          { id: 'b', text: 'Because stone tools cannot be dated' },
          { id: 'c', text: 'Because only one hominin species existed at a time' },
          { id: 'd', text: 'Because tool styles are identical across all species' },
        ],
        explanation:
          'Where two hominin species overlap, an assemblage tells you a hominin was making tools and nothing more. This is a recurring limitation, and it is why the assumption that toolmaking belongs to Homo alone is an assumption.',
      },
    ],
  },

  'a-million-years-of-the-same-handaxe': {
    summary: {
      essential:
        'The Acheulean handaxe appears about 1.76 million years ago and persists largely unchanged for over a million years across three continents. Technological stasis, not technological change, is the thing that needs explaining.',
      detailed:
        'Brains were getting larger throughout, so intelligence alone evidently does not generate accumulating technology. Something about how information moved between people, or about the conditions of their lives, prevented improvements from surviving to be built on.',
    },
    questions: [
      {
        id: 'stasis',
        prompt: 'What does a million years of unchanging handaxes suggest?',
        options: [
          {
            id: 'a',
            text: 'That individual intelligence is not sufficient for accumulating technology — something else has to be in place',
            correct: true,
          },
          { id: 'b', text: 'That the makers were not capable of innovation at all' },
          { id: 'c', text: 'That handaxes were not actually tools' },
          { id: 'd', text: 'That brain size was not increasing during this period' },
        ],
        explanation:
          'The handaxe itself was an innovation and brain size rose throughout, so it is not that these hominins could not change anything. It is the negative result that makes the case for cumulative culture as a distinct phenomenon requiring specific conditions.',
      },
      {
        id: 'explanations',
        prompt:
          'Which of these is NOT among the serious explanations offered for Acheulean stasis?',
        options: [
          {
            id: 'a',
            text: 'That the makers lacked the manual dexterity to make anything else',
            correct: true,
          },
          { id: 'b', text: 'That transmission was too lossy for improvements to survive' },
          {
            id: 'c',
            text: 'That populations were too small and scattered for innovations to spread',
          },
          { id: 'd', text: 'That perishable technologies changed while the stone did not' },
        ],
        explanation:
          'Dexterity is not the issue: making a biface to a mental template is more demanding than Oldowan flaking by most measures. The live explanations concern transmission, demography, adequacy of the tool, and the invisibility of wood, fibre and hide technologies.',
      },
    ],
  },

  'tools-and-minds': {
    summary: {
      essential:
        'Teaching modern volunteers to knap inside a scanner converts a question about extinct cognition into an experiment about living brains. Acheulean production recruits regions beyond the Oldowan network, including areas for organising actions into hierarchies.',
      detailed:
        'The limitation is the important part: every participant grew up speaking a language and using tools, so this shows how a modern brain performs the task rather than how the original makers did. What it does establish is a fact about the task.',
    },
    questions: [
      {
        id: 'result',
        prompt: 'What do imaging studies of trained knappers show?',
        options: [
          {
            id: 'a',
            text: 'Acheulean production recruits additional frontal regions associated with hierarchical action organisation',
            correct: true,
          },
          { id: 'b', text: 'Oldowan and Acheulean knapping use identical brain networks' },
          { id: 'c', text: 'Toolmaking uses only motor regions' },
          { id: 'd', text: 'The brain areas used are the same as those for reading' },
        ],
        explanation:
          'Oldowan flaking draws mainly on visual and motor systems. The handaxe adds regions handling sequences of sub-goals serving a larger plan — some with counterparts on the other side of the brain involved in syntax, which has fuelled a shared-substrate proposal.',
      },
      {
        id: 'caveat',
        prompt: 'What is the main limitation of using modern brains to study extinct cognition?',
        options: [
          {
            id: 'a',
            text: 'A modern brain has been shaped by a lifetime of language and teaching, so it may perform the task differently',
            correct: true,
          },
          { id: 'b', text: 'Modern humans cannot learn to knap stone' },
          { id: 'c', text: 'Brain imaging cannot detect motor activity' },
          { id: 'd', text: 'Ancient tools cannot be replicated accurately' },
        ],
        explanation:
          'The step from "this task is cognitively demanding" to "its makers had the cognition we use for language" is a long one, and overlapping activation is weak evidence for a shared mechanism since brain regions are rarely dedicated to one function.',
      },
    ],
  },

  fire: {
    summary: {
      essential:
        'Using a fire that started itself, keeping one alight and making one from nothing are three different achievements. Evidence of fire use goes back about a million years; evidence of habitual controlled use is much later and patchier.',
      detailed:
        'Distinguishing a hearth from a wildfire requires showing heating in place, repeatedly, in one spot. Applied rigorously, that test removes most claimed early fire evidence — and leaves an awkward gap of half a million years.',
    },
    questions: [
      {
        id: 'distinguish',
        prompt: 'What distinguishes a hearth from a natural fire in the archaeological record?',
        options: [
          {
            id: 'a',
            text: 'Evidence of heating in place, repeatedly, in a discrete spot — visible in the microscopic structure of the sediment',
            correct: true,
          },
          { id: 'b', text: 'The presence of charcoal' },
          { id: 'c', text: 'Reddened sediment' },
          { id: 'd', text: 'Burnt bone fragments' },
        ],
        explanation:
          'Lightning-started fires burn bone, redden sediment and char wood exactly as a campfire does. Finding burnt material proves only that something burnt there. Wonderwerk Cave passes the stricter test because the heating occurred thirty metres inside a cave.',
      },
      {
        id: 'gap',
        prompt: 'Why is the gap between first fire use and habitual fire use important?',
        options: [
          {
            id: 'a',
            text: 'Because the cooking hypothesis needs fire early enough to explain anatomical changes around 1.9 million years ago',
            correct: true,
          },
          { id: 'b', text: 'Because it shows fire was never controlled' },
          { id: 'c', text: 'Because it proves Neanderthals invented fire' },
          { id: 'd', text: 'Because it means all early fire evidence is fabricated' },
        ],
        explanation:
          'Well-excavated European sites older than about 400,000 years generally lack fire evidence entirely, including where it would have been preserved. Either use was occasional for a very long time, or habitual use is older and the evidence is systematically missing.',
      },
    ],
  },

  'cooking-and-the-energy-budget': {
    summary: {
      essential:
        'Cooking substantially increases the energy obtained from the same food and cuts chewing time, which could have paid for a larger brain and a smaller gut. The energetics support the mechanism; the archaeology does not yet support the timing.',
      detailed:
        'There is an alternative requiring no fire: slicing meat and pounding tubers with stone tools cuts chewing effort substantially on its own and arrives at the right date. It does not deliver the same energy gain, so it strengthens the chronology and weakens the brain half of the argument.',
    },
    questions: [
      {
        id: 'problem',
        prompt: 'What is the main problem with the cooking hypothesis?',
        options: [
          {
            id: 'a',
            text: 'The anatomical changes it explains happen around 1.9 million years ago, roughly a million years before solid fire evidence',
            correct: true,
          },
          { id: 'b', text: 'Cooking does not actually increase the energy obtained from food' },
          { id: 'c', text: 'Modern humans can live indefinitely on raw diets' },
          { id: 'd', text: 'Homo erectus teeth did not change in size' },
        ],
        explanation:
          'Advocates argue the archaeological record is simply missing early fire, which is not unreasonable given how poorly open-air hearths preserve. Critics reply that this converts the hypothesis into one that cannot currently be tested, and that the absence is strongest where preservation is best.',
      },
      {
        id: 'alternative',
        prompt: 'What does the measured effect of slicing and pounding show?',
        options: [
          {
            id: 'a',
            text: 'That much of the reduction in chewing effort can be achieved with stone tools alone, at the right date',
            correct: true,
          },
          { id: 'b', text: 'That cooking has no energetic benefit' },
          { id: 'c', text: 'That Homo erectus did not process food at all' },
          { id: 'd', text: 'That raw meat is easier to chew than cooked meat' },
        ],
        explanation:
          'A diet including a third sliced meat with pounded tubers cuts chewing force by around 17% and removes some 2.5 million chewing cycles a year. Enough to relax selection on teeth and jaws without fire — though it does not supply the energy surplus the brain argument needs.',
      },
    ],
  },

  'when-behaviour-starts-changing-evolution': {
    summary: {
      essential:
        'Once a population reliably processes its food, shelters itself and passes on techniques, the pressures acting on its bodies are partly of its own making. Evolution stops being a one-way process.',
      detailed:
        'Other animals do versions of this — beavers build dams and their descendants are selected in ponds their ancestors made. What differs in humans is that the constructed environment is transmitted culturally, so it can change far faster than genes can respond.',
    },
    questions: [
      {
        id: 'difference',
        prompt: 'What distinguishes human niche construction from a beaver building a dam?',
        options: [
          {
            id: 'a',
            text: 'Human techniques are transmitted by learning, so the constructed environment changes far faster than genetic change can track',
            correct: true,
          },
          { id: 'b', text: 'Beavers do not actually alter their environment' },
          { id: 'c', text: 'Only humans modify their surroundings deliberately' },
          { id: 'd', text: 'Human modifications are permanent and beaver dams are not' },
        ],
        explanation:
          'A beaver dam-building behaviour is genetically transmitted, so the constructed environment changes only as fast as the genes do. Cultural transmission decouples the rate of environmental change from the rate of genetic change, which is what makes the human case different in kind.',
      },
      {
        id: 'misreading',
        prompt: 'What is the common misreading of "culture changes the selective environment"?',
        options: [
          {
            id: 'a',
            text: 'That once culture appears, biological evolution stops mattering',
            correct: true,
          },
          { id: 'b', text: 'That culture is transmitted genetically' },
          { id: 'c', text: 'That environments never change on their own' },
          { id: 'd', text: 'That only humans have culture' },
        ],
        explanation:
          'The opposite follows. Several of the strongest signals of recent selection in the human genome are responses to conditions people built: dairying selected for lactase persistence, and farming selected for starch digestion and resistance to crowd diseases farming itself created.',
      },
    ],
  },

  'cumulative-culture': {
    summary: {
      essential:
        'Cumulative culture is knowledge that builds across generations instead of being reinvented, and it depends on faithful transmission — which in turn depends on having enough connected people.',
      detailed:
        'Small isolated populations lose techniques. That is documented historically, reproduced experimentally, and offers an explanation for archaeological regressions that requires nobody to have become less intelligent.',
    },
    questions: [
      {
        id: 'population',
        prompt: 'Why do small isolated populations tend to lose culturally transmitted skills?',
        options: [
          {
            id: 'a',
            text: 'Because with few skilled models available, the chance that a full version of a skill survives each generation falls',
            correct: true,
          },
          { id: 'b', text: 'Because isolated people become less intelligent over time' },
          { id: 'c', text: 'Because skills are only useful in large groups' },
          { id: 'd', text: 'Because small populations have fewer resources to work with' },
        ],
        explanation:
          'Learners acquire skills imperfectly, so the more models available the more likely at least one full version survives. Below a threshold, expected loss exceeds expected invention and complexity declines — a demographic constraint rather than a cognitive one.',
      },
      {
        id: 'upper-pal',
        prompt:
          'What alternative does demography offer to explaining the Upper Palaeolithic burst of complexity?',
        options: [
          {
            id: 'a',
            text: 'That rising population density alone can produce the observed complexity, with no change in individual cognition',
            correct: true,
          },
          { id: 'b', text: 'That the complexity was invented by a single population and copied' },
          { id: 'c', text: 'That the burst did not actually happen' },
          { id: 'd', text: 'That climate change caused the technological change directly' },
        ],
        explanation:
          'Population densities rose substantially over the period, and modelling suggests the resulting increase in connected population is sufficient. The two explanations are not exclusive and are hard to separate, but the demographic one has the advantage of being quantitatively testable — and it has been tested in controlled transmission experiments.',
      },
    ],
  },

  'gene-culture-coevolution': {
    summary: {
      essential:
        'Lactase persistence evolved independently at least five times, in populations that had independently taken up dairying. A cultural practice created a selection pressure, and the genetic response reinforced the practice.',
      detailed:
        'The simple version is too simple: ancient DNA and pottery residues show milk consumption preceding the allele by thousands of years. Selection appears to have acted in rare severe episodes — famine and diarrhoeal epidemics — rather than continuously.',
    },
    questions: [
      {
        id: 'independent',
        prompt:
          'What does the existence of at least five separate lactase persistence variants show?',
        options: [
          {
            id: 'a',
            text: 'That the same trait evolved independently in different populations under a shared cultural pressure',
            correct: true,
          },
          { id: 'b', text: 'That the variants were spread by migration from one origin' },
          { id: 'c', text: 'That lactase persistence is not genetically determined' },
          { id: 'd', text: 'That dairying was invented only once' },
        ],
        explanation:
          'Different mutations in different positions producing the same effect, in populations with independent pastoralist histories, is the signature of a shared pressure rather than a shared ancestor. It is the clearest documented case of culture driving human genetic evolution.',
      },
      {
        id: 'lag',
        prompt: 'Why did the lactase allele rise thousands of years after milk consumption began?',
        options: [
          {
            id: 'a',
            text: 'Because the advantage appears to have been intermittent — decisive during famine and disease rather than in routine nutrition',
            correct: true,
          },
          { id: 'b', text: 'Because the mutation had not yet occurred' },
          {
            id: 'c',
            text: 'Because early dairying used only fermented products that nobody could digest',
          },
          { id: 'd', text: 'Because ancient DNA dating is unreliable at that range' },
        ],
        explanation:
          'Adults who cannot digest lactose can still eat fermented dairy safely and tolerate small amounts of milk. The difference becomes lethal under specific conditions, which reconciles a strong selection coefficient with a long lag between practice and allele frequency change.',
      },
    ],
  },

  'where-homo-sapiens-came-from': {
    summary: {
      essential:
        'Our species originated in Africa, but not in a single place. Modern traits appear in different combinations at widely separated sites over more than 200,000 years — the pattern of an interconnected, structured population.',
      detailed:
        'There was also no first Homo sapiens. Every individual in the story had parents of the same species as itself; the name marks a region of a continuum that we find convenient to divide.',
    },
    questions: [
      {
        id: 'mosaic',
        prompt: 'What does the mosaic distribution of modern traits across African sites suggest?',
        options: [
          {
            id: 'a',
            text: 'That partly separated populations exchanging people periodically gave rise to our species, with no single origin point',
            correct: true,
          },
          { id: 'b', text: 'That several different species have been confused with each other' },
          { id: 'c', text: 'That the fossils have been dated incorrectly' },
          { id: 'd', text: 'That modern humans originated outside Africa' },
        ],
        explanation:
          'Jebel Irhoud at 315 thousand years has a modern face on an archaic braincase; other early specimens have the reverse. If a trait arising in one region spread gradually to others, different combinations would exist simultaneously — which is what the record shows.',
      },
      {
        id: 'irhoud',
        prompt: 'Why was the redating of the Jebel Irhoud fossils significant?',
        options: [
          {
            id: 'a',
            text: 'It put Homo sapiens features at 315,000 years in North Africa, far from the supposed East African cradle',
            correct: true,
          },
          { id: 'b', text: 'It showed they were much younger than previously thought' },
          { id: 'c', text: 'It proved they were Neanderthals' },
          { id: 'd', text: 'It confirmed a single origin in East Africa' },
        ],
        explanation:
          'Found in the 1960s and long assumed to be about 40,000 years old, they were redated by thermoluminescence on heated flints from the same layers. That is more than a hundred thousand years older than anything previously called Homo sapiens, and five thousand kilometres from where the cradle was supposed to be.',
      },
    ],
  },

  neanderthals: {
    summary: {
      essential:
        'Neanderthals occupied Europe and western Asia for over 300,000 years with brains as large as ours, sophisticated tools, controlled fire, pigment, and care of severely injured individuals over years.',
      detailed:
        'The caricature traces to one arthritic skeleton reconstructed in 1911. The correction should not swing into treating them as identical to us: they were a distinct population with distinct anatomy and a different developmental trajectory.',
    },
    questions: [
      {
        id: 'caricature',
        prompt: 'Where did the image of the stooped, shuffling Neanderthal come from?',
        options: [
          {
            id: 'a',
            text: 'A 1911 reconstruction of one individual who had severe arthritis',
            correct: true,
          },
          { id: 'b', text: 'Measurements of many Neanderthal skeletons' },
          { id: 'c', text: 'Analysis of Neanderthal footprints' },
          { id: 'd', text: 'Comparison of Neanderthal and chimpanzee spines' },
        ],
        explanation:
          'Marcellin Boule described the La Chapelle-aux-Saints skeleton as having a curved spine, bent knees and a divergent big toe. The individual was arthritic and the reconstruction exaggerated the rest. Correcting it took most of a century.',
      },
      {
        id: 'care',
        prompt: 'What do healed disabling injuries in Neanderthal skeletons indicate?',
        options: [
          {
            id: 'a',
            text: 'That individuals unable to hunt or chew were supported by others for long periods',
            correct: true,
          },
          { id: 'b', text: 'That Neanderthals healed unusually fast' },
          { id: 'c', text: 'That the injuries occurred after death' },
          { id: 'd', text: 'That Neanderthals had effective medicine' },
        ],
        explanation:
          'A withered arm, a healed skull fracture, blindness in one eye, extensive tooth loss — all healed long before death. Somebody fed these individuals for years in glacial Europe, which an isolated animal could not have survived.',
      },
      {
        id: 'population',
        prompt: 'What did high-coverage Neanderthal genomes reveal about their populations?',
        options: [
          {
            id: 'a',
            text: 'They were small and fragmented with detectable inbreeding',
            correct: true,
          },
          { id: 'b', text: 'They were larger than contemporaneous modern human populations' },
          { id: 'c', text: 'They were entirely isolated from each other' },
          { id: 'd', text: 'They show no genetic variation at all' },
        ],
        explanation:
          'The Altai individual had parents related at about the level of half-siblings, and effective population size was low throughout their history. That matters for what happened later: a species living in small, scattered, partly inbred groups is demographically fragile regardless of capability.',
      },
    ],
  },

  denisovans: {
    summary: {
      essential:
        'Denisovans were identified from DNA in a finger bone before anyone knew what they looked like — the reverse of the usual order of discovery. Their fossils are almost absent and their genetic footprint spans a continent.',
      detailed:
        'Denisova Cave also produced a first-generation hybrid with a Neanderthal mother and a Denisovan father. Finding one among the handful of archaic individuals ever sequenced implies that where these populations met, they mixed regularly.',
    },
    questions: [
      {
        id: 'discovery',
        prompt: 'What was unusual about how Denisovans were identified?',
        options: [
          {
            id: 'a',
            text: 'The population was characterised genetically before any diagnostic anatomy was available',
            correct: true,
          },
          { id: 'b', text: 'They were identified from footprints rather than bones' },
          { id: 'c', text: 'They were predicted theoretically before being found' },
          { id: 'd', text: 'They were first identified from cave paintings' },
        ],
        explanation:
          'A fragment of a child finger bone, about the size of a grain of rice, says almost nothing anatomically. Sequenced, it belonged to a lineage that had separated from Neanderthals several hundred thousand years earlier. They were named after the cave because there was no anatomical description to name them from.',
      },
      {
        id: 'hybrid',
        prompt: 'Why is Denisova 11 significant beyond being one individual?',
        options: [
          {
            id: 'a',
            text: 'Finding a first-generation hybrid in such a tiny sample implies these populations mixed regularly where they met',
            correct: true,
          },
          { id: 'b', text: 'It proves Neanderthals and Denisovans were the same species' },
          { id: 'c', text: 'It is the only Denisovan fossil ever found' },
          { id: 'd', text: 'It shows interbreeding produced sterile offspring' },
        ],
        explanation:
          'If such individuals were rare, the chance of catching one among the handful of archaic genomes ever sequenced would be negligible. The specimen is a probability argument as much as a fossil.',
      },
    ],
  },

  interbreeding: {
    summary: {
      essential:
        'People with ancestry outside sub-Saharan Africa carry roughly 1–2% Neanderthal DNA, and some populations also carry Denisovan DNA. These are the record of populations that met and mixed.',
      detailed:
        'Some introgressed variants were useful and rose in frequency; others were harmful and were removed. Archaic ancestry is depleted on the X chromosome and near genes expressed in the testes — the signature of hybrid incompatibility.',
    },
    questions: [
      {
        id: 'deserts',
        prompt: 'Why is archaic ancestry depleted on the X chromosome and near fertility genes?',
        options: [
          {
            id: 'a',
            text: 'Because differences accumulated during long separation interact badly, concentrating on the X and on male fertility — hybrid incompatibility',
            correct: true,
          },
          { id: 'b', text: 'Because those regions mutate faster' },
          { id: 'c', text: 'Because Neanderthals had no X chromosome' },
          { id: 'd', text: 'Because those regions are harder to sequence' },
        ],
        explanation:
          'The pattern is seen in other species where related populations hybridise. Neanderthals and modern humans had been separated for over half a million years, which is enough for that kind of incompatibility to build up; male hybrids may have had reduced fertility.',
      },
      {
        id: 'dating',
        prompt: 'How was the timing of Neanderthal admixture established?',
        options: [
          {
            id: 'a',
            text: 'From the lengths of introgressed segments, which shorten each generation as chromosomes are shuffled',
            correct: true,
          },
          { id: 'b', text: 'By radiocarbon dating Neanderthal fossils' },
          { id: 'c', text: 'By counting the number of Neanderthal variants present' },
          { id: 'd', text: 'From archaeological evidence of contact' },
        ],
        explanation:
          'A 45,000-year-old individual from Ust’-Ishim had noticeably longer segments than living people, placing the admixture around 50,000 to 60,000 years ago. That date comes from the physical structure of chromosomes and is independent of any fossil.',
      },
    ],
  },

  'reading-ancient-dna': {
    summary: {
      essential:
        'Ancient DNA is short, chemically damaged and swamped by contamination — and the damage itself is what authenticates it, because modern contaminating DNA has not had time to acquire it.',
      detailed:
        'Survival is strongly temperature-dependent, which produces a bias running opposite to the fossil record: fossils are abundant in East Africa and scarce in northern Europe, while ancient DNA is abundant in northern Europe and scarce in Africa.',
    },
    questions: [
      {
        id: 'authentication',
        prompt: 'How is genuine ancient DNA distinguished from modern contamination?',
        options: [
          {
            id: 'a',
            text: 'By a characteristic chemical damage pattern at fragment ends that accumulates with time',
            correct: true,
          },
          { id: 'b', text: 'By the total quantity of DNA recovered' },
          {
            id: 'c',
            text: 'By sequencing only in sterile conditions, which eliminates contamination entirely',
          },
          { id: 'd', text: 'By comparing it with living relatives of the individual' },
        ],
        explanation:
          'The very process destroying the molecule is what certifies it. Combined with clean-room protocols and treatments that remove damaged positions, this turned a field plagued by irreproducible results into a rigorous one.',
      },
      {
        id: 'limits',
        prompt: 'Why does ancient DNA tell us relatively little about African human evolution?',
        options: [
          {
            id: 'a',
            text: 'Because DNA degrades much faster at high temperatures, so recovery from most African sites is poor',
            correct: true,
          },
          { id: 'b', text: 'Because African fossils are too fragmentary' },
          { id: 'c', text: 'Because African populations have less genetic variation' },
          { id: 'd', text: 'Because ancient DNA work has not been attempted in Africa' },
        ],
        explanation:
          'The oldest human genomes come from cold caves and permafrost. The continent where our species originated is the hardest to sample genetically. Ancient proteins, which survive longer, extend the range but carry far less information.',
      },
    ],
  },

  'out-of-africa-again': {
    summary: {
      essential:
        'Homo sapiens left Africa more than once. Earlier dispersals reached the Levant and left little or no genetic trace; the expansion that populated the world began around 50,000 to 60,000 years ago.',
      detailed:
        'Fossils record who was present; genetics of living people records who left descendants who are still here. A population can be present for tens of thousands of years and contribute nothing measurable to anyone alive.',
    },
    questions: [
      {
        id: 'twoRecords',
        prompt: 'How are the fossil and genetic records of leaving Africa reconciled?',
        options: [
          {
            id: 'a',
            text: 'Earlier dispersals happened and left no surviving descendants, so they appear in fossils but not in living genomes',
            correct: true,
          },
          { id: 'b', text: 'The fossils were misidentified' },
          { id: 'c', text: 'The genetic dating was revised to match the fossils' },
          { id: 'd', text: 'The two records still contradict each other' },
        ],
        explanation:
          'They answer different questions. A population can live outside Africa for tens of thousands of years and then die out, or be absorbed, or have descendants who did not survive — present in the record of presence, absent from the record of ancestry.',
      },
      {
        id: 'diversity',
        prompt:
          'Why do African populations retain more genetic diversity than all others combined?',
        options: [
          {
            id: 'a',
            text: 'Because only a small group left, carrying a fraction of the parent population variation, and that reduction was never recovered',
            correct: true,
          },
          { id: 'b', text: 'Because African populations have higher mutation rates' },
          {
            id: 'c',
            text: 'Because Africa has been inhabited for longer by all human lineages equally',
          },
          { id: 'd', text: 'Because African populations never interbred with archaic humans' },
        ],
        explanation:
          'The effect compounds with distance: each subgroup that moved on carried a sample of what the previous one had, producing a smooth decline in diversity with distance from Africa. It also means two people from different African populations are frequently more genetically distinct than a European and an East Asian.',
      },
    ],
  },

  'peopling-the-world': {
    summary: {
      essential:
        'From a small founding population, humans reached Australia by at least 50,000 years ago and the Americas by at least 15,000, occupying every climate zone on Earth. The speed rules out biological adaptation as the mechanism.',
      detailed:
        'What made it possible was manufacturing the necessary conditions — clothing, shelter, fire, storage, and accumulated local knowledge. Local genetic adaptations followed a colonisation that technology had already accomplished.',
    },
    questions: [
      {
        id: 'australia',
        prompt: 'Why does reaching Australia imply deliberate voyaging rather than accident?',
        options: [
          {
            id: 'a',
            text: 'Because at least 70 kilometres of open water had to be crossed, and a founding population needs repeated crossings rather than one accident',
            correct: true,
          },
          { id: 'b', text: 'Because there was a land bridge that had to be walked' },
          { id: 'c', text: 'Because Australia is visible from Timor' },
          { id: 'd', text: 'Because boats have been found at the earliest sites' },
        ],
        explanation:
          'Even at the lowest glacial sea levels, Sahul was never joined to Asia. A raft blown off course carries a handful of people, probably not both sexes, and does not establish a population. Repeated deliberate voyages imply watercraft, navigation, and a reason to believe there was somewhere to go.',
      },
      {
        id: 'mechanism',
        prompt: 'Why could biological adaptation not account for this dispersal?',
        options: [
          {
            id: 'a',
            text: 'Because it is far too slow — evolving fur for the Arctic would take longer than the entire dispersal',
            correct: true,
          },
          { id: 'b', text: 'Because human populations do not adapt genetically at all' },
          { id: 'c', text: 'Because all the environments were similar to Africa' },
          { id: 'd', text: 'Because humans reached every continent in a single generation' },
        ],
        explanation:
          'This is the clearest demonstration of what cumulative culture does: a population that can accumulate techniques can occupy a range no single organism is adapted to, because the adaptation is held outside the body and revised as fast as the environment demands.',
      },
    ],
  },

  'why-only-one-human-species-remains': {
    summary: {
      essential:
        'Fifty thousand years ago there were at least four kinds of human. Now there is one, and the evidence does not support the story of a superior species outcompeting inferior ones.',
      detailed:
        'Modelling shows that inbreeding, mate-finding difficulty and random fluctuation alone are sufficient to drive a population of Neanderthal size to extinction within ten thousand years, with no competitive disadvantage assumed at all.',
    },
    questions: [
      {
        id: 'demography',
        prompt: 'What does population viability modelling show about Neanderthal extinction?',
        options: [
          {
            id: 'a',
            text: 'Demographic factors alone are sufficient to explain it, without any competitive disadvantage',
            correct: true,
          },
          { id: 'b', text: 'It required direct conflict with modern humans' },
          { id: 'c', text: 'It could only have been caused by disease' },
          { id: 'd', text: 'It proves Neanderthals were cognitively inferior' },
        ],
        explanation:
          'Small populations go extinct through ordinary bad luck — a run of poor years, a skewed sex ratio, a local failure not recolonised. The models establish sufficiency rather than actuality, but they remove the necessity of the superiority hypothesis.',
      },
      {
        id: 'overlap',
        prompt: 'What did improved radiocarbon dating reveal about the Neanderthal disappearance?',
        options: [
          {
            id: 'a',
            text: 'A period of several thousand years of overlap with modern humans rather than a rapid replacement',
            correct: true,
          },
          { id: 'b', text: 'That Neanderthals disappeared before modern humans arrived' },
          { id: 'c', text: 'That the disappearance happened within a single generation' },
          { id: 'd', text: 'That Neanderthals survived until 10,000 years ago' },
        ],
        explanation:
          'Improved removal of modern carbon contamination from old bone, applied across forty European sites, gives a disappearance around 41 to 39 thousand years ago with considerable regional variation. A long overlap is harder to reconcile with a story of rapid competitive replacement.',
      },
      {
        id: 'absorbed',
        prompt: 'In what sense did the other human populations not entirely disappear?',
        options: [
          {
            id: 'a',
            text: 'Neanderthal DNA is in most people alive today and Denisovan DNA in millions',
            correct: true,
          },
          { id: 'b', text: 'Small isolated populations of them survive today' },
          { id: 'c', text: 'Their tools are still in use' },
          { id: 'd', text: 'Their languages were adopted by modern humans' },
        ],
        explanation:
          'A population can end as a distinct group while its genes continue. If the incoming modern human population was substantially larger, interbreeding alone would dilute a smaller one into invisibility over enough generations — absorption rather than replacement.',
      },
    ],
  },
};
