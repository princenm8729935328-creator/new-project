/**
 * Human Evolution, Scientific Lens — Movement III: the fossil record.
 *
 * The trap this movement avoids is the species parade: a list of names, dates
 * and brain volumes that a reader memorises and forgets. Two decisions prevent
 * it. First, the movement opens with how a fossil becomes evidence at all, so
 * every later claim can be read against the method that produced it. Second, it
 * closes by stating plainly how incomplete the record is, rather than letting
 * the preceding topics imply a resolved tree.
 *
 * Dmanisi and Homo naledi both appear because each one breaks a tidy story that
 * the earlier topics might otherwise have left standing.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const HUMAN_FOSSIL_TOPICS: readonly Topic[] = [
  {
    id: topicId('how-a-fossil-becomes-evidence'),
    slug: 'how-a-fossil-becomes-evidence',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 18,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How a fossil becomes evidence',
    subtitle: 'Almost nothing survives, and what survives is not a random sample.',
    summary: {
      essential:
        'Becoming a fossil requires a specific and unlikely sequence of events. The hominin record is therefore not a thin version of the truth — it is a heavily filtered one, and knowing the filter is part of reading it.',
      detailed:
        'Bone survives only where it is buried quickly in the right chemistry. That means lake margins, river deltas and volcanic ash beds are over-represented, and tropical forest is almost absent. Dating comes from the sediments around a fossil rather than from the fossil itself.',
      technical:
        'Taphonomic bias operates at every stage: death location, scavenging, weathering, burial, diagenesis, and finally exposure and discovery. Radiometric dates are typically obtained from volcanic units bracketing the fossil-bearing layer, so a fossil’s age is an interpolation whose precision depends on the stratigraphy.',
    },
    glossaryTerms: [glossaryTermId('taphonomy'), glossaryTermId('radiometric-dating')],
    related: [
      topicId('how-complete-is-the-family-tree'),
      topicId('the-earliest-possible-hominins'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'An animal dies on a savanna. Within hours scavengers have scattered it. Within weeks the bones are cracked open for marrow, sun-bleached and splitting. Within a few years, in the open, there is nothing identifiable left. This is the fate of essentially every individual that has ever lived.',
          detailed:
            'Fossilisation interrupts that sequence. It needs rapid burial — a flood, a collapsing riverbank, a fall of volcanic ash, a body sinking into lake mud — before scavengers and weather finish the job. Then it needs groundwater of the right chemistry to replace the mineral of the bone rather than dissolve it. Then it needs the deposit to survive tens of thousands of centuries of erosion, uplift and burial. Then it needs to be exposed at the surface recently enough to be found before it weathers away, and somebody has to be standing there.',
        },
      },
      {
        id: 'filter-figure',
        kind: 'visualization',
        visualizationId: visualizationId('fossil-filter'),
      },
      {
        id: 'weathering',
        kind: 'claim',
        statement: {
          essential:
            'Bone left on the surface in an open tropical environment becomes unidentifiable within roughly a decade.',
          detailed:
            'Longitudinal observation of known-age carcasses in Amboseli, Kenya, established a weathering stage sequence in which bone reaches severe cracking and exfoliation within about 6–15 years of exposure, setting a hard limit on how long burial can be delayed.',
        },
        evidence: 'established',
        references: [referenceId('behrensmeyer-1978-taphonomy')],
      },
      {
        id: 'where-the-record-is',
        kind: 'prose',
        text: {
          essential:
            'The consequence is that the hominin fossil record is a map of where bones could be preserved, not of where hominins lived. East Africa dominates it because the Rift Valley combines active volcanoes, lakes and continuous uplift — burial, datable ash layers and exposure, all in one place.',
          detailed:
            'That is a geological accident with enormous consequences for the story. West and Central Africa have acidic forest soils that destroy bone, so a hominin population living there for a million years could leave essentially nothing. When a species is described as "East African", the honest statement is that East Africa is where we can see. The discovery of Sahelanthropus in Chad, two and a half thousand kilometres west of the Rift, was startling largely because nobody had been able to look there.',
        },
      },
      {
        id: 'dating',
        kind: 'prose',
        text: {
          essential:
            'Nor is a fossil usually dated directly. What gets dated is the rock. Volcanic ash contains minerals that trap the products of radioactive decay from the moment they cool, so an ash layer can be dated precisely — and a fossil lying between two dated ash layers is bracketed between them.',
          detailed:
            'This is why the Rift Valley is so productive and why dates elsewhere are often looser. Different methods cover different windows: potassium–argon and its refinements reach back millions of years but need volcanic material; radiocarbon is precise but runs out around fifty thousand years; luminescence methods date when sediment was last exposed to sunlight, and electron spin resonance can date tooth enamel directly. Each carries its own assumptions, and a date quoted without its method and its error bars is not a measurement.',
        },
      },
      {
        id: 'dating-caution',
        kind: 'callout',
        tone: 'caution',
        title: 'Dates move, and that is not a failure',
        text: {
          essential:
            'Published dates for major fossils have shifted by tens of thousands of years — sometimes more — as methods improved. The Neanderthal disappearance and the age of Homo floresiensis both moved substantially on redating.',
          detailed:
            'Treat a date as a measurement with uncertainty attached, not as a fact. When a redating changes a story, what has usually happened is that a contaminated sample or an inappropriate method has been replaced by a better one. The revised Neanderthal chronology, for example, came from improved removal of modern carbon contamination from old bone, and it changed the picture of the overlap with Homo sapiens considerably.',
        },
        references: [referenceId('higham-2014-neanderthal-disappearance')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'With that in mind, the earliest part of the record can be read for what it is: a handful of fragmentary specimens carrying an enormous amount of argument.',
        },
      },
    ],
    furtherReading: [referenceId('walker-2005-quaternary-dating')],
  },

  {
    id: topicId('the-earliest-possible-hominins'),
    slug: 'the-earliest-possible-hominins',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 19,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The earliest possible hominins',
    subtitle: 'Three contested candidates from close to the branching point.',
    summary: {
      essential:
        'Three fossil species from between seven and four million years ago are proposed as early hominins: Sahelanthropus, Orrorin and Ardipithecus. Each is argued to be bipedal, and each argument is disputed.',
      detailed:
        'They sit near the estimated divergence date, which is exactly where classification is hardest: a fossil from close to a branching point may be on either side of it, or on the branch itself, and the features that would distinguish these are few.',
      technical:
        'The diagnostic arguments rest on limited evidence — foramen magnum position in Sahelanthropus, femoral neck morphology in Orrorin, pelvic and pedal morphology in Ardipithecus. Alternative readings placing one or more as non-hominin apes remain published and unresolved.',
    },
    glossaryTerms: [glossaryTermId('hominin'), glossaryTermId('bipedalism')],
    related: [topicId('the-last-common-ancestor'), topicId('the-australopithecines')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'If our lineage separated from the chimpanzee lineage somewhere between nine and six million years ago, then fossils from that window are the ones that matter most — and they are also the ones hardest to interpret, for a reason that is structural rather than practical.',
          detailed:
            'Near a branching point, the two lineages have barely diverged. The features that will eventually distinguish them have not accumulated yet. So a fossil from that period is expected to look like a generalised ape with a small number of suggestive traits, and a small number of traits is precisely what is easiest to read two ways.',
        },
      },
      {
        id: 'candidates-figure',
        kind: 'visualization',
        visualizationId: visualizationId('earliest-candidates'),
      },
      {
        id: 'sahelanthropus',
        kind: 'prose',
        text: {
          essential:
            'The oldest candidate is Sahelanthropus tchadensis, from Chad, at around seven million years. It is known mainly from a distorted skull. The case for bipedalism rests on where the spinal cord entered it: the opening sits further forward than in a chimpanzee, which is what you expect when a head is balanced on top of a vertical spine rather than hung from a horizontal one.',
          detailed:
            'The counter-argument is that the skull is crushed, that reconstruction involves judgement, and that foramen magnum position varies with other factors including face size. A thigh bone from the same site was described much later and read by different teams as supporting bipedalism and as not supporting it. This is a genuine dispute among specialists rather than a fringe objection.',
        },
      },
      {
        id: 'sahelanthropus-claim',
        kind: 'claim',
        statement: {
          essential:
            'Sahelanthropus tchadensis, at about 7 million years old, has been argued to be bipedal on the basis of the forward position of its foramen magnum.',
          detailed:
            'The interpretation depends on a virtual reconstruction of a heavily distorted cranium, and both the reconstruction and the diagnostic value of the character have been challenged in print.',
        },
        evidence: 'inference',
        references: [referenceId('brunet-2002-sahelanthropus')],
      },
      {
        id: 'orrorin',
        kind: 'prose',
        text: {
          essential:
            'Orrorin tugenensis, from Kenya at about six million years, is known mostly from thigh bone fragments. The argument turns on the internal architecture of the femoral neck, where the pattern of bone thickening reflects how the joint was loaded — and the pattern is closer to that of bipeds than of apes.',
          detailed:
            'It is a reasonable argument and it rests on very little material. The internal structure has been imaged and read differently by different groups, and the specimens are few. As with Sahelanthropus, the honest position is that the evidence is suggestive and not decisive.',
        },
      },
      {
        id: 'ardipithecus',
        kind: 'prose',
        text: {
          essential:
            'The best-preserved of the three is Ardipithecus ramidus, at 4.4 million years, published in 2009 after fifteen years of excavation and preparation. A substantial part of one skeleton survived, and it did not look like anything that had been predicted.',
          detailed:
            'Ardi has a pelvis with features associated with upright walking, and a foot with an opposable, grasping big toe. She apparently walked bipedally on the ground and climbed with a grasping foot in trees — a combination no living primate has. Her canine teeth are small and her hands lack knuckle-walking adaptations, which is the basis for the claim that the last common ancestor was not chimpanzee-like at all.',
          technical:
            'That claim is the most consequential and the most contested. It requires reading Ardipithecus as retaining the ancestral condition rather than as having specialised, and the original team’s reconstruction of the crushed pelvis — the element carrying most of the bipedal signal — has been questioned by other workers who have not had comparable access to the material.',
        },
      },
      {
        id: 'ardi-claim',
        kind: 'claim',
        statement: {
          essential:
            'Ardipithecus ramidus combined bipedal features in the pelvis with a grasping big toe, a combination absent in any living primate.',
          detailed:
            'The published reconstruction indicates a pelvis with a laterally flaring upper blade alongside a fully abductable hallux. The pelvis is heavily crushed and its reconstruction has been disputed; the foot is less equivocal.',
        },
        evidence: 'inference',
        references: [referenceId('white-2009-ardipithecus')],
      },
      {
        id: 'why-so-contested',
        kind: 'callout',
        tone: 'note',
        title: 'Why these arguments are so hard to close',
        text: {
          essential:
            'Each candidate is known from a handful of specimens, often distorted, usually from a single site, and frequently not freely available to other researchers for long periods. Under those conditions, disagreement is what careful science looks like.',
          detailed:
            'It is also worth noting the incentive structure. Being the discoverer of the earliest hominin is a career-defining result, and the specimens are rare enough that independent checking is slow. None of this implies bad faith; it does mean that first publications in this field should be read as opening arguments rather than as settled conclusions.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'From about four million years ago the record improves sharply, and for the first time we have enough material to talk about populations rather than individuals.',
        },
      },
    ],
    furtherReading: [referenceId('senut-2001-orrorin')],
  },

  {
    id: topicId('the-australopithecines'),
    slug: 'the-australopithecines',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 20,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The australopithecines',
    subtitle: 'Upright, small-brained, and successful for two million years.',
    summary: {
      essential:
        'From about 4.2 to 2 million years ago, Africa held a group of upright-walking apes with brains close to chimpanzee size. They are the best-documented part of early hominin evolution and the source of most of what we know about the period.',
      detailed:
        'The important fact about them is the order of events: bipedalism is fully established, and the brain has barely changed. Whatever drove brain expansion happened later and separately.',
      technical:
        'Australopithecus endocranial volumes cluster around 400–550 cm³ against a chimpanzee mean near 400 cm³ and a modern human mean near 1350 cm³. Postcranial morphology is derived for bipedality from at least 4.2 Ma, giving a gap of roughly two million years between locomotor and encephalisation change.',
    },
    glossaryTerms: [
      glossaryTermId('hominin'),
      glossaryTermId('bipedalism'),
      glossaryTermId('endocast'),
    ],
    related: [topicId('lucy-and-laetoli'), topicId('the-robust-branch')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The first australopithecine was found in 1924: a child’s skull from a South African quarry, with a small braincase and a forward-placed foramen magnum. Raymond Dart argued it was an upright-walking human relative. The scientific establishment rejected the claim for nearly thirty years.',
          detailed:
            'The rejection had a reason, and the reason was a fake. Piltdown Man, "discovered" in England in 1912, had a large braincase and an ape-like jaw, and it had convinced the field that a big brain came first and the body followed. Dart’s Taung Child had exactly the opposite combination, and so it looked wrong. It was only after Piltdown was exposed as a forgery in 1953 that the australopithecines could be read for what they were.',
        },
      },
      {
        id: 'brain-body-figure',
        kind: 'visualization',
        visualizationId: visualizationId('brain-before-body'),
      },
      {
        id: 'order-of-events',
        kind: 'claim',
        statement: {
          essential:
            'Bipedal walking was fully established in hominins roughly two million years before any substantial increase in brain size.',
          detailed:
            'Australopith postcranial anatomy is derived for bipedality from at least 4.2 million years ago, while endocranial volumes remain within or close to the chimpanzee range until the appearance of early Homo after about 2.5 million years ago.',
        },
        evidence: 'established',
        references: [
          referenceId('johanson-taieb-1976-lucy'),
          referenceId('anton-2014-evolution-of-homo'),
        ],
      },
      {
        id: 'who-they-were',
        kind: 'prose',
        text: {
          essential:
            'Picture the animal rather than the name. Something around a metre and a bit tall, walking upright on a landscape of wooded grassland, with a chimpanzee-sized brain, a projecting face, thick-enamelled teeth, and — for at least some species — hands that were doing forceful, precise work.',
          detailed:
            'They were not a single species but a group of them, distributed across eastern and southern Africa, differing in teeth and face and body size, some overlapping in time. Several have been proposed as the ancestor of Homo and no proposal commands consensus. What is agreed is that Homo emerged from somewhere within this group, and that the group as a whole persisted for around two million years, which by any reasonable standard is a success.',
        },
      },
      {
        id: 'diet-variation',
        kind: 'prose',
        text: {
          essential:
            'Their diets varied more than their anatomy suggests. Isotopes show some populations eating mainly tree-based foods and others taking substantial amounts of grass- or sedge-derived food, sometimes within the same species at different sites.',
          detailed:
            'That variability is itself informative. It suggests animals that adjusted to what was locally available rather than specialists tied to one resource, which is consistent with the picture of a climate that was not just changing but fluctuating. Flexibility, rather than specialisation, may be the thing that was actually being selected.',
        },
      },
      {
        id: 'variability-selection',
        kind: 'callout',
        tone: 'note',
        title: 'Selection for coping with change itself',
        text: {
          essential:
            'East African climate over this period did not shift once and settle. It oscillated, sometimes rapidly, between wetter and drier states. One proposal is that this favoured not adaptation to any particular habitat but the capacity to handle variation — behavioural flexibility, dietary breadth, tolerance of a wide range of conditions.',
          detailed:
            'The idea is attractive and genuinely difficult to test, because almost any trait can be described after the fact as increasing flexibility. It is included here as a serious hypothesis under active investigation rather than as an established account, and the climate record it depends on is itself coarse relative to the events it is being asked to explain.',
        },
        references: [
          referenceId('potts-2013-variability-selection'),
          referenceId('maslin-2014-east-african-climate'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'One australopithecine is better known than all the others, and the reason is worth examining: two independent kinds of evidence, found a thousand kilometres apart, that say the same thing.',
        },
      },
    ],
    furtherReading: [referenceId('anton-2014-evolution-of-homo')],
  },

  {
    id: topicId('lucy-and-laetoli'),
    slug: 'lucy-and-laetoli',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 21,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Lucy and Laetoli',
    subtitle: 'A skeleton says what a body could do. Footprints say what one actually did.',
    summary: {
      essential:
        'Lucy’s skeleton shows an anatomy capable of upright walking. The Laetoli footprints, from a different country and a slightly earlier date, show upright walking happening. Together they close an argument that neither could close alone.',
      detailed:
        'This is the pattern that makes a scientific conclusion strong: two independent kinds of evidence, with different failure modes, agreeing. An anatomical argument can be wrong about function; a trackway cannot be wrong about behaviour.',
      technical:
        'AL 288-1 preserves about 40% of a skeleton, giving pelvic, femoral and vertebral evidence of habitual bipedality. The Laetoli G trails, in 3.66 Ma volcanic ash, preserve heel-strike, arch impression and adducted hallux, with depth profiles matching modern human walking in experimental replication.',
    },
    glossaryTerms: [glossaryTermId('bipedalism'), glossaryTermId('taphonomy')],
    related: [topicId('the-australopithecines'), topicId('the-skeleton-rebuilt')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'In November 1974, in the Afar region of Ethiopia, a survey team spotted a fragment of arm bone eroding out of a slope. By the end of the season they had several hundred pieces of a single individual — about 40% of a skeleton, from an animal that had died 3.2 million years earlier.',
          detailed:
            'To understand why that mattered, consider what the record had consisted of until then: isolated teeth, jaw fragments, pieces of skull, the occasional limb bone, almost never associated with each other. With scattered elements you can describe parts. With one individual you can ask how the parts fit together — whether the arm length matches the leg length, how the pelvis and femur articulate, how tall this animal stood.',
        },
      },
      {
        id: 'lucy-figure',
        kind: 'visualization',
        visualizationId: visualizationId('lucy-completeness'),
      },
      {
        id: 'what-lucy-showed',
        kind: 'prose',
        text: {
          essential:
            'What the assembled skeleton showed was an animal about 1.1 metres tall, with a brain around 400 cubic centimetres, and a pelvis and knee unmistakably built for walking upright. It also had long arms and curved fingers. The combination was the first clear demonstration that bipedalism came first and brain expansion came much later.',
          detailed:
            'There remained a way to object. Anatomy establishes capability, not habit. A structure might be a leftover from an ancestor, or used only occasionally. Someone determined to argue that Lucy mostly climbed and walked upright rarely could not be refuted from the bones alone.',
        },
      },
      {
        id: 'the-footprints',
        kind: 'prose',
        text: {
          essential:
            'Three years later, at Laetoli in Tanzania, Mary Leakey’s team found the refutation. A nearby volcano had laid down fine ash; rain had dampened it; animals had walked across it; and it had then set like cement and been buried. Among the tracks were trails of hominin footprints running for over twenty metres.',
          detailed:
            'The prints are 3.66 million years old and they are not ambiguous. There is a deep heel strike. There is a raised arch. The big toe is in line with the others, not splayed out to the side. The stride is even. Whatever made them was walking the way we walk — not shuffling upright, not occasionally bipedal, but walking.',
        },
      },
      {
        id: 'laetoli-claim',
        kind: 'claim',
        statement: {
          essential:
            'The Laetoli footprints record habitual human-like bipedal walking at 3.66 million years ago.',
          detailed:
            'The trails preserve heel strike, longitudinal arch and an adducted hallux. Experimental work comparing print depth profiles with modern humans walking in comparable substrate supports an extended-limb gait rather than the bent-knee walking of a chimpanzee.',
        },
        evidence: 'established',
        references: [referenceId('leakey-1979-laetoli'), referenceId('raichlen-2010-laetoli')],
      },
      {
        id: 'the-convergence',
        kind: 'prose',
        text: {
          essential:
            'The two lines of evidence fail in different ways, and that is the point. Bones can be misread as to function; they cannot be misread as to anatomy. Footprints say nothing about anatomy; they cannot be wrong about what an animal was doing at the moment it made them. Neither alone would close the question. Together they do.',
          detailed:
            'This is a pattern the rest of this section returns to repeatedly. Genetics and fossils, anatomy and archaeology, isotopes and microwear: the conclusions that hold are the ones where independent methods with unrelated weaknesses point the same way. When you encounter a claim in this field supported by only one kind of evidence, that is the right moment to ask how it could fail.',
        },
      },
      {
        id: 'careful',
        kind: 'callout',
        tone: 'caution',
        title: 'What the footprints do not tell us',
        text: {
          essential:
            'They do not tell us which species made them. No fossils were found in the ash. The attribution to Australopithecus afarensis rests on it being the hominin known from that time and region — a reasonable inference, not a demonstration.',
          detailed:
            'Nor do they tell us anything about the walkers as individuals, despite a great deal of writing that has read a family group, a protective gesture, or a backwards glance into them. Two or three individuals walked across wet ash in the same direction. Everything beyond that is interpretation, and some published interpretations have gone a long way beyond the evidence.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'While one branch of this group was heading towards Homo, another was heading somewhere entirely different — and doing extremely well at it.',
        },
      },
    ],
    furtherReading: [referenceId('johanson-taieb-1976-lucy')],
  },

  {
    id: topicId('the-robust-branch'),
    slug: 'the-robust-branch',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 22,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The robust branch',
    subtitle:
      'A million-year success that left no descendants — which is not the same as a failure.',
    summary: {
      essential:
        'Paranthropus was a hominin lineage that solved its problems with teeth rather than tools. It persisted for over a million years alongside early Homo, then disappeared.',
      detailed:
        'It is usually described as an evolutionary dead end, which smuggles in a judgement. Every lineage that has ever gone extinct is a dead end in that sense, and ours may yet be one. Paranthropus was successful for roughly five times as long as Homo sapiens has existed.',
      technical:
        'Paranthropus boisei and P. robustus show extreme megadontia, thick enamel, sagittal crests and flaring zygomatics indicating very high bite forces. Isotopic data indicate a C4-dominated diet in P. boisei. Extinction around 1.0–1.2 Ma has no established cause.',
    },
    glossaryTerms: [glossaryTermId('dental-microwear'), glossaryTermId('hominin')],
    related: [topicId('teeth-jaws-and-diet'), topicId('the-first-homo')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'In 1959 Mary Leakey found a skull at Olduvai Gorge with molars four times the area of ours, a face buttressed like a bridge pier, cheekbones flared wide to make room for enormous chewing muscles, and a bony crest running along the top of the skull to give those muscles somewhere to attach. The press called it Nutcracker Man.',
          detailed:
            'Everything about the head is organised around generating and withstanding bite force. The crest exists for the same reason a gorilla has one: the jaw muscles are too large to fit on the side of the braincase, so the skull grows a ridge to extend the attachment area. This is an animal built around processing food.',
        },
      },
      {
        id: 'robust-figure',
        kind: 'visualization',
        visualizationId: visualizationId('robust-skull'),
      },
      {
        id: 'two-strategies',
        kind: 'prose',
        text: {
          essential:
            'For roughly a million years, two kinds of hominin lived on the same landscape. One had a large chewing apparatus and small brain. The other had smaller teeth, a larger brain, and stone tools. They were contemporaries, not successive stages.',
          detailed:
            'It is tempting to read this as a competition that Homo won, and the temptation should be resisted. Paranthropus appears around 2.7 million years ago and persists until somewhere around 1.0 to 1.2 million years ago. That is a run of over a million and a half years. Our own species has existed for roughly 300,000. Whatever eventually removed Paranthropus, it was not obvious inferiority.',
        },
      },
      {
        id: 'coexistence-claim',
        kind: 'claim',
        statement: {
          essential:
            'Paranthropus and early Homo coexisted in East and southern Africa for more than a million years.',
          detailed:
            'Both genera are recovered from overlapping stratigraphic contexts at multiple sites across this interval. Their coexistence is a matter of stratigraphy rather than inference.',
        },
        evidence: 'established',
        references: [referenceId('constantino-wood-2007-paranthropus')],
      },
      {
        id: 'tools-too',
        kind: 'callout',
        tone: 'note',
        title: 'They may have made tools as well',
        text: {
          essential:
            'Hand bones attributed to Paranthropus robustus include a thumb capable of precision gripping, and stone tools occur at sites where Paranthropus is the only hominin recovered. The assumption that toolmaking belongs to Homo alone is an assumption.',
          detailed:
            'The difficulty is that associating a tool with a maker requires more than finding them in the same deposit. Where two hominin species overlap, an assemblage tells you that somebody was knapping, not who. This is a recurring limitation in Early Stone Age archaeology and it is rarely stated as plainly as it should be.',
        },
      },
      {
        id: 'why-extinct',
        kind: 'open-question',
        question: 'Why did Paranthropus become extinct?',
        whyItMatters: {
          essential:
            'It is the clearest test case for whether hominin extinctions were caused by competition from our own lineage or by something else. If we do not know why a lineage that lasted a million and a half years disappeared, confident stories about later replacements deserve scepticism too.',
          detailed:
            'The standard explanation is that specialisation on a narrow dietary strategy became a liability when conditions shifted, while more generalised Homo could adjust. But the isotopic evidence complicates this: P. boisei’s diet was dominated by abundant C4 resources rather than by rare hard objects, which is not an obviously fragile strategy.',
        },
        whatWouldSettleIt: {
          essential:
            'A much denser record around the time of disappearance, with environmental reconstruction at the same sites. At present the last occurrences are scattered and the climate record is coarse relative to the event.',
          detailed:
            'Distinguishing competitive exclusion from environmental change requires showing that the decline tracks one and not the other, which needs chronological resolution the record does not currently have. The extinction may also have been gradual and regional rather than a single event, in which case a single cause may not exist.',
        },
        references: [
          referenceId('constantino-wood-2007-paranthropus'),
          referenceId('ungar-sponheimer-2011-diets'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'The other branch — the one with the smaller teeth — is where our own genus begins, and its boundary turns out to be remarkably hard to draw.',
        },
      },
    ],
    furtherReading: [referenceId('sponheimer-2013-isotopes')],
  },

  {
    id: topicId('the-first-homo'),
    slug: 'the-first-homo',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 23,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The first Homo',
    subtitle: 'Where our genus begins is a decision, not a discovery.',
    summary: {
      essential:
        'There is no agreed definition of the genus Homo and no agreed first member. The fossils from 2.8 to 1.8 million years ago are fragmentary and variable, and how they are divided into species depends on choices researchers make.',
      detailed:
        'This is not a gap waiting to be filled by a better fossil. Genus boundaries are conventions imposed on a continuous process, and a lineage that changes gradually will not have a first member of anything.',
      technical:
        'Proposed criteria for Homo have included endocranial volume thresholds, tool manufacture, dental proportions and adaptive grade; each has been shown to include or exclude specimens inconsistently. OH 7 reconstruction indicates early Homo comprised multiple contemporaneous lineages rather than a graded series.',
    },
    glossaryTerms: [glossaryTermId('hominin'), glossaryTermId('clade')],
    related: [
      topicId('the-robust-branch'),
      topicId('homo-erectus'),
      topicId('the-first-stone-tools'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'When Louis Leakey named Homo habilis in 1964, he had to lower the accepted brain-size threshold for the genus Homo to let the fossil in. That tells you something important: the boundary was not discovered in the rocks. It was drawn by people, and it has been redrawn since.',
          detailed:
            'Every proposed criterion has failed. Brain size was tried and produces an arbitrary cut through a continuous distribution. Tool manufacture was tried — the name habilis means "handy" — and then tools turned up older than the genus and possibly associated with australopiths. Adaptive grade, body proportions and dental patterns have all been proposed, and each admits or excludes specimens that other criteria place the other way.',
        },
      },
      {
        id: 'boundary-figure',
        kind: 'visualization',
        visualizationId: visualizationId('genus-boundary'),
      },
      {
        id: 'no-definition',
        kind: 'claim',
        statement: {
          essential:
            'There is no agreed morphological or behavioural definition of the genus Homo.',
          detailed:
            'Successive proposed criteria produce mutually inconsistent memberships. Some workers have proposed removing habilis and rudolfensis from Homo entirely; others retain them. The disagreement is definitional and is not expected to be resolved by new fossils alone.',
        },
        evidence: 'active-research',
        references: [
          referenceId('wood-collard-1999-homo'),
          referenceId('wood-boyle-2016-hominin-taxonomy'),
        ],
      },
      {
        id: 'what-we-have',
        kind: 'prose',
        text: {
          essential:
            'What does exist is material. A jaw fragment from Ledi-Geraru in Ethiopia, dated to 2.8 million years, is currently the oldest specimen most workers assign to Homo. It is a piece of a mandible with five teeth.',
          detailed:
            'After that come specimens attributed to Homo habilis and Homo rudolfensis, spanning roughly 2.3 to 1.6 million years, and they are strikingly variable. Faces differ in shape, brain sizes range widely, and body size estimates are inconsistent. Two readings compete: one species with a great deal of variation, or several species overlapping in time. A digital reconstruction of the distorted Homo habilis type specimen supported the second reading — deep-rooted diversity rather than a single graded lineage.',
        },
      },
      {
        id: 'diversity-claim',
        kind: 'claim',
        statement: {
          essential:
            'Early Homo appears to comprise multiple contemporaneous species rather than a single gradually changing lineage.',
          detailed:
            'Reconstruction of the OH 7 mandible, correcting for post-depositional distortion, yields a morphology incompatible with placing all early Homo material in one variable species, implying at least two and possibly three lineages present simultaneously.',
        },
        evidence: 'inference',
        references: [referenceId('spoor-2015-habilis')],
      },
      {
        id: 'why-this-is-fine',
        kind: 'callout',
        tone: 'misconception',
        title: 'A blurry boundary is what gradual change looks like',
        text: {
          essential:
            'If a lineage changes continuously, then anywhere you draw a line between "before" and "after" will be arbitrary, and populations near the line will be genuinely hard to classify. The difficulty is a prediction of the theory, not a problem for it.',
          detailed:
            'Compare asking when a child becomes an adult. Any threshold you set is a convention, and people near it are ambiguous — not because development is mysterious but because it is continuous and the category is imposed. The fossil record of early Homo is the same situation with worse sampling.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'By about two million years ago the ambiguity resolves, because something appears that is unmistakably different — taller, longer-legged, larger-brained, and about to leave Africa.',
        },
      },
    ],
    furtherReading: [referenceId('villmoare-2015-ledi-geraru')],
  },

  {
    id: topicId('homo-erectus'),
    slug: 'homo-erectus',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 24,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Homo erectus',
    subtitle: 'The first hominin with a body like ours, and the longest-lived human species.',
    summary: {
      essential:
        'From about two million years ago, Homo erectus had roughly modern body proportions, a substantially larger brain, and a range that eventually spanned Africa and Asia. It survived for well over a million years.',
      detailed:
        'This is the point where the body stops looking like an upright ape and starts looking like a human: long legs, short arms, narrow hips, a barrel chest, and a skeleton committed entirely to the ground.',
      technical:
        'H. erectus sensu lato spans roughly 2.0–0.1 Ma with endocranial volumes from about 550 to over 1100 cm³. Limb proportions, thoracic shape and pelvic morphology are essentially modern; the cranium retains a low vault, strong supraorbital torus and no chin.',
    },
    glossaryTerms: [glossaryTermId('endocast'), glossaryTermId('acheulean')],
    related: [
      topicId('out-of-africa-the-first-time'),
      topicId('endurance-heat-and-sweat'),
      topicId('fire'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'In 1984, on the west side of Lake Turkana, a team found the nearly complete skeleton of a boy who had died about 1.5 million years ago. Standing, he would have been around 1.6 metres tall at perhaps eight to ten years old, and had he reached adulthood he would probably have passed 1.8 metres.',
          detailed:
            'What matters is the shape rather than the height. Long legs, short arms, narrow shoulders, a narrow waist, a rib cage shaped like a barrel rather than a funnel. Below the neck, this is essentially a modern human body. Nothing about it suggests an animal that still spent time in trees. The compromise that had defined the australopithecines for two million years is over.',
        },
      },
      {
        id: 'erectus-figure',
        kind: 'visualization',
        visualizationId: visualizationId('erectus-body'),
      },
      {
        id: 'what-changed',
        kind: 'prose',
        text: {
          essential:
            'Several things change together around this time: body size increases, legs lengthen, the gut appears to shrink, brain size rises markedly, and the Acheulean handaxe appears. The temptation is to arrange these into a causal chain. The evidence supports the association more firmly than any particular ordering.',
          detailed:
            'A narrower rib cage and pelvis imply a smaller gut, and a smaller gut implies a diet of higher quality — food that is more concentrated in energy and easier to digest. Meat is the obvious candidate, and cut-marked bones are present. But processing food outside the body would do the same job, and so would extracting underground storage organs with tools. The general picture — a shift to a diet that needed less internal processing — is well supported. Which specific change drove it is not.',
          technical:
            'Endocranial volumes in early African H. erectus cluster around 800–900 cm³ against roughly 600 cm³ in early Homo, then increase gradually through the species’ range. Whether this represents directional selection within a lineage or replacement between populations is difficult to establish given sampling.',
        },
      },
      {
        id: 'longevity-claim',
        kind: 'claim',
        statement: {
          essential:
            'Homo erectus persisted for well over a million years, longer than any other known human species.',
          detailed:
            'Specimens assigned to H. erectus span from around 2.0 million years ago in Africa to late survival in Southeast Asia, with the youngest Javanese material dated to roughly 110,000 years ago. The taxon may encompass more than one lineage.',
        },
        evidence: 'established',
        references: [referenceId('anton-2014-evolution-of-homo')],
      },
      {
        id: 'the-handaxe',
        kind: 'prose',
        text: {
          essential:
            'The Acheulean handaxe appears around 1.76 million years ago and is genuinely strange. It is symmetrical in three dimensions, it requires planning the finished shape before starting, and then it stays essentially unchanged for over a million years across three continents.',
          detailed:
            'That stability is the puzzle. A million years of making the same object, with no cumulative improvement, in a species whose brain was meanwhile getting larger. It suggests that whatever cognitive capacity produced these tools, it did not include the open-ended, ratcheting improvement that characterises later human technology. Something other than intelligence alone is needed to explain why technology sometimes accumulates and sometimes does not.',
        },
      },
      {
        id: 'not-primitive',
        kind: 'callout',
        tone: 'caution',
        title: 'Long-lived is not the same as static',
        text: {
          essential:
            'Homo erectus spanned nearly two million years and three continents. Treating it as one uniform thing is like treating every human population of the last two million years as interchangeable.',
          detailed:
            'Specimens assigned to it vary enormously in brain size and cranial form, and many researchers separate African material as Homo ergaster. The name may cover several lineages that have been grouped because the record is too sparse to separate them confidently. When you read "Homo erectus did X", the safest reading is "some population within a very large and possibly composite taxon did X".',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Whoever they were, they did something no hominin had done before: they walked out of Africa.',
        },
      },
    ],
    furtherReading: [referenceId('lepre-2011-acheulean')],
  },

  {
    id: topicId('out-of-africa-the-first-time'),
    slug: 'out-of-africa-the-first-time',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 25,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Out of Africa, the first time',
    subtitle:
      'Hominins reached Asia nearly two million years ago, and the dates keep getting older.',
    summary: {
      essential:
        'The first hominin dispersal out of Africa happened by about 1.85 million years ago — far earlier than once thought, and by hominins with small brains and simple tools.',
      detailed:
        'The site of Dmanisi in Georgia is the key evidence, and it demolished the assumption that leaving Africa required a large brain, advanced technology or a modern body.',
      technical:
        'Dmanisi yields five crania at 1.85–1.77 Ma with endocranial volumes of 546–730 cm³ and an Oldowan-grade assemblage. The variation within this single-locality, near-contemporaneous sample spans the range used elsewhere to diagnose separate species.',
    },
    glossaryTerms: [glossaryTermId('oldowan'), glossaryTermId('endocast')],
    related: [topicId('homo-erectus'), topicId('how-complete-is-the-family-tree')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The expected story was that leaving Africa required equipment: a big brain, good tools, control of fire, a body suited to long-distance travel. Dmanisi, a site in Georgia beneath a medieval hilltop town, shows that none of that was necessary.',
          detailed:
            'The hominins there lived 1.85 to 1.77 million years ago. Their brains ranged from 546 to 730 cubic centimetres — around half modern size and overlapping the australopithecine range. Their tools were simple flakes and choppers, not handaxes. Some were small-bodied. And they were 4,000 kilometres from the Rift Valley.',
        },
      },
      {
        id: 'dispersal-figure',
        kind: 'visualization',
        visualizationId: visualizationId('first-dispersal'),
      },
      {
        id: 'dmanisi-claim',
        kind: 'claim',
        statement: {
          essential:
            'Hominins with brains of 546–730 cm³ and simple flake tools were living in the Caucasus by 1.85 million years ago.',
          detailed:
            'Five crania and associated postcrania from Dmanisi are securely dated by argon–argon and palaeomagnetic methods, with an Oldowan-grade lithic assemblage and no evidence of fire.',
        },
        evidence: 'established',
        references: [
          referenceId('ferring-2011-dmanisi'),
          referenceId('lordkipanidze-2013-dmanisi'),
        ],
      },
      {
        id: 'the-five-skulls',
        kind: 'prose',
        text: {
          essential:
            'Dmanisi delivered a second and more uncomfortable result. The five skulls come from one place within a few thousand years of each other, so they are as close to a single population as the fossil record ever gets. They differ from each other enormously — by as much as specimens that have been assigned to separate species elsewhere.',
          detailed:
            'The fifth skull in particular, with a long face, big teeth and the smallest braincase of the five, would very likely have been named a new species had it been found alone in East Africa. Found in a group, it is simply a variable individual. The implication is uncomfortable for the whole field: some named hominin species may be variation within populations that happened to be sampled one fossil at a time.',
        },
      },
      {
        id: 'variation-claim',
        kind: 'claim',
        statement: {
          essential:
            'Variation among five near-contemporaneous crania from a single site spans the range used elsewhere to separate hominin species.',
          detailed:
            'The Dmanisi sample provides a rare opportunity to observe within-population variation directly rather than assuming it. The authors argue that several early Homo species names may represent variants of a single lineage; the argument is contested but has not been dismissed.',
        },
        evidence: 'active-research',
        references: [referenceId('lordkipanidze-2013-dmanisi')],
      },
      {
        id: 'even-earlier',
        kind: 'prose',
        text: {
          essential:
            'The dates have since been pushed further. Stone artefacts from the Chinese Loess Plateau are dated to 2.1 million years ago — older than Dmanisi, and older than most specimens of Homo erectus in Africa.',
          detailed:
            'No fossils accompany them, which is the standard limitation: artefacts establish presence, not identity. If the dating holds, hominins were in East Asia before the body plan usually credited with the dispersal had appeared. It is worth holding this one loosely — single-site early dates have a history of being revised — but it fits a pattern in which every reconstruction of the first dispersal has moved earlier, not later.',
        },
      },
      {
        id: 'loess-claim',
        kind: 'claim',
        statement: {
          essential:
            'Stone artefacts from Shangchen in China have been dated to about 2.1 million years ago.',
          detailed:
            'Palaeomagnetic dating of the loess–palaeosol sequence places artefact-bearing layers at 2.12 Ma. No hominin fossils are associated, so the maker is unknown, and a single-locality date of this significance warrants independent confirmation.',
        },
        evidence: 'active-research',
        references: [referenceId('zhu-2018-shangchen')],
      },
      {
        id: 'island-relatives',
        kind: 'callout',
        tone: 'note',
        title: 'What happened on the islands',
        text: {
          essential:
            'Two of these early dispersals ended somewhere unexpected. On Flores, hominins became very small — about a metre tall, with brains around 400 cubic centimetres — and survived until roughly 50,000 years ago. On Luzon, another distinct species has been described from hand and foot bones.',
          detailed:
            'Island dwarfing is a well-documented pattern in mammals isolated with limited resources and few predators, and Flores also produced dwarf elephants. Homo floresiensis was initially dismissed by some as a diseased modern human; that reading has not survived the accumulation of further individuals. These lineages are a reminder that the human family tree had branches that went in directions nobody would have predicted.',
        },
        references: [
          referenceId('brown-2004-floresiensis'),
          referenceId('detroit-2019-luzonensis'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Before going further, it is worth stopping to ask how much of this tree we actually know — and the answer is bracing.',
        },
      },
    ],
    furtherReading: [referenceId('lordkipanidze-2013-dmanisi')],
  },

  {
    id: topicId('how-complete-is-the-family-tree'),
    slug: 'how-complete-is-the-family-tree',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 26,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How complete is the family tree?',
    subtitle: 'We know it is a bush. We do not know most of its branches.',
    summary: {
      essential:
        'The hominin fossil record establishes that many species existed and that several overlapped in time. It does not establish which ones were ancestral to which, and for most named species that question is open.',
      detailed:
        'Diagrams that draw confident ancestor–descendant lines are showing one hypothesis among several. The relationships that are well supported are usually the recent ones, where genetics can be brought to bear.',
      technical:
        'Ancestor–descendant hypotheses are difficult to test because ancestry is not a character state that can be observed; cladistic methods resolve sister-group relationships rather than direct ancestry. With small samples, high within-species variation and stratigraphic gaps, competing topologies are frequently statistically indistinguishable.',
    },
    glossaryTerms: [glossaryTermId('clade'), glossaryTermId('taphonomy')],
    related: [
      topicId('hominins-and-how-to-read-a-tree'),
      topicId('the-first-homo'),
      topicId('reading-ancient-dna'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Museum diagrams of the hominin family tree tend to show clean lines connecting species to their descendants. Compare several such diagrams from different institutions and you will find they disagree, often substantially. That disagreement is the honest state of the evidence.',
          detailed:
            'The reason is worth understanding. Methods for reconstructing evolutionary relationships work out which species are each other’s closest relatives. They do not identify ancestors, because being an ancestor is not a feature you can score on a bone. A species known from three jaw fragments might be our direct ancestor, or a close cousin of our ancestor, and nothing about those jaws will distinguish those cases.',
        },
      },
      {
        id: 'tree-uncertainty-figure',
        kind: 'visualization',
        visualizationId: visualizationId('tree-uncertainty'),
      },
      {
        id: 'ancestry-claim',
        kind: 'claim',
        statement: {
          essential:
            'For most named hominin species, whether they were ancestral to later species or side branches is not established.',
          detailed:
            'Phylogenetic methods resolve sister-group relationships, not direct ancestry. Given small samples, substantial within-species variation and stratigraphic gaps, alternative arrangements of early Homo and the australopiths are frequently not statistically distinguishable.',
        },
        evidence: 'active-research',
        references: [
          referenceId('wood-boyle-2016-hominin-taxonomy'),
          referenceId('spoor-2015-habilis'),
        ],
      },
      {
        id: 'naledi',
        kind: 'prose',
        text: {
          essential:
            'Homo naledi shows how much room is left for surprises. Found in a South African cave system in 2013, it is known from over 1,500 specimens — one of the richest hominin assemblages anywhere. It has a brain around 500 cubic centimetres, a mixture of ancient and modern features, and it dates to between 335,000 and 236,000 years ago.',
          detailed:
            'That date is the shock. A small-brained hominin was alive in Africa at the same time as the earliest Homo sapiens. Before the dating was published, its anatomy had led most observers to guess it was around two million years old. Nobody had predicted this lineage existed, and it was found in a well-explored region of a well-studied country.',
        },
      },
      {
        id: 'naledi-claim',
        kind: 'claim',
        statement: {
          essential:
            'Homo naledi, with a brain of about 500 cm³, was alive in southern Africa between 335,000 and 236,000 years ago.',
          detailed:
            'Six independent dating methods applied to teeth and surrounding sediments converge on this range. The result was unexpected given the morphology, and it demonstrates that small-brained hominins persisted far later than assumed.',
        },
        evidence: 'established',
        references: [referenceId('dirks-2017-naledi-age'), referenceId('berger-2015-naledi')],
      },
      {
        id: 'what-we-do-know',
        kind: 'prose',
        text: {
          essential:
            'It would be wrong to take all this as saying we know nothing. Several things are solid: hominins are a real group with a common ancestor; bipedalism preceded brain expansion by roughly two million years; multiple hominin species were usually alive at the same time; brain size increased substantially in our lineage; and Homo sapiens originated in Africa.',
          detailed:
            'The uncertainty is concentrated in a specific place — the fine structure of who descended from whom — and that is exactly where you would expect uncertainty given how the record is made. The large-scale pattern is supported by many independent lines of evidence. The detailed genealogy is supported by a scatter of fossils separated by hundreds of thousands of years.',
        },
      },
      {
        id: 'honest-diagram',
        kind: 'callout',
        tone: 'caution',
        title: 'How to read any hominin tree, including ours',
        text: {
          essential:
            'Assume the vertical positions are reliable, because they come from dating. Assume the horizontal connections are hypotheses. A dashed line usually means genuine doubt; a solid line often means a confident guess.',
          detailed:
            'The figures in this section follow that rule and label it. Where a relationship is disputed, the figure shows it as disputed rather than picking a side, because a diagram that looks resolved does a reader more damage than one that looks uncertain.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'The one thing that undeniably grew across this record is the brain. It is time to ask what that cost, and what it bought.',
        },
      },
    ],
    furtherReading: [referenceId('berger-2015-naledi')],
  },
];
