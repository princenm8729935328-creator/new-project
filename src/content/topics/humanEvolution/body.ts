/**
 * Human Evolution, Scientific Lens — Movement II: the body starts telling a story.
 *
 * The organising decision here is to refuse the list. A catalogue of human
 * anatomical peculiarities — pelvis, spine, femur, knee, foot, big toe, hand,
 * thumb — reads as a set of unrelated special features and teaches nothing. So
 * the skeletal changes are treated as one integrated rebuild driven by a single
 * mechanical problem, and the topics that follow trace the consequences: what it
 * cost, what it freed, and what it broke.
 *
 * Two places here deliberately resist the tidy story. The obstetrical dilemma is
 * presented as unresolved rather than as the textbook fact it became, and the
 * vestigial-structure topic argues against the "badly designed body" framing
 * that usually accompanies it.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const HUMAN_BODY_TOPICS: readonly Topic[] = [
  {
    id: topicId('standing-up'),
    slug: 'standing-up',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 8,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Standing up',
    subtitle: 'What walking on two legs actually demands of a body built for four.',
    summary: {
      essential:
        'Bipedal walking is a controlled fall. At every step the body is balanced on one leg over a small patch of ground, and staying upright requires constant correction that a four-legged animal never has to make.',
      detailed:
        'This is why bipedalism is a whole-skeleton problem rather than a leg problem. The centre of mass must sit over the feet, the trunk must be held upright without muscular effort, and the hip must not collapse sideways when one foot leaves the ground.',
      technical:
        'During single-support phase, body weight acting through the centre of mass produces a moment about the stance hip that must be balanced by the abductor mechanism. Chimpanzees lack the required lever geometry, which is why their bipedal walking uses a laterally swaying gait with high energetic cost.',
    },
    glossaryTerms: [glossaryTermId('bipedalism')],
    related: [topicId('the-skeleton-rebuilt'), topicId('why-walk-on-two-legs')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Stand on one leg. Nothing dramatic happens, and that is the remarkable part. Half your body mass is now cantilevered out to the side of the supporting foot, and something is preventing your pelvis from tipping over towards the unsupported side. That something is a set of muscles on the outside of your hip, pulling down on the pelvis to hold it level.',
          detailed:
            'Now consider that ordinary walking puts you in this position for roughly 80% of every stride, alternating sides, about five thousand times a day. Bipedal walking is not a posture. It is a continuous act of balance in which the body is repeatedly allowed to fall forwards and then caught by the swinging leg.',
        },
      },
      {
        id: 'balance-figure',
        kind: 'visualization',
        visualizationId: visualizationId('bipedal-balance'),
      },
      {
        id: 'what-must-change',
        kind: 'prose',
        text: {
          essential:
            'For a four-legged ancestor, three things now have to change at once. The body has to be balanced over the feet rather than slung between four supports. The trunk has to be held upright without spending muscular energy on it all day. And the hip has to resist that sideways collapse at every single step.',
          detailed:
            'None of these can be solved in isolation, which is what makes bipedalism such a demanding transition. Raising the trunk moves the centre of mass upward and backward, which destabilises it. Stabilising it requires reshaping the pelvis. Reshaping the pelvis changes the angle at which the thigh bone meets it, which changes the mechanics at the knee. Each fix creates the next problem, and the solution is a package.',
          technical:
            'The abductor mechanism is the clearest illustration. In an ape the ilium is tall and flat and the gluteal muscles act as hip extensors; there is no effective lever arm for abduction. In hominins the ilium is short and curved laterally, swinging the gluteus medius and minimus around to the side of the joint and converting them into abductors that stabilise the pelvis in the coronal plane. This single reorganisation makes stable single-leg support possible and is visible in even the earliest australopith pelvis.',
        },
      },
      {
        id: 'chimp-cost',
        kind: 'claim',
        statement: {
          essential:
            'A chimpanzee walking on two legs uses substantially more energy per distance than a human does, and roughly as much as it uses walking on four.',
          detailed:
            'Measured oxygen consumption in chimpanzees trained to walk on a treadmill bipedally and quadrupedally shows human walking to be about 75% cheaper per unit distance. The difference tracks anatomical variables — hind-limb length and hip extensor mechanics — across individuals.',
        },
        evidence: 'established',
        references: [referenceId('sockol-2007-chimpanzee-locomotion')],
      },
      {
        id: 'a-real-constraint',
        kind: 'callout',
        tone: 'note',
        title: 'Why this is a useful way to find fossils',
        text: {
          essential:
            'Because the requirements are mechanical, they leave marks on bone that cannot be faked. A short, flared pelvis or a thigh bone angled inward towards the knee tells you an animal walked upright, even if nothing else of it survives.',
          detailed:
            'This is why a handful of bones can settle a question about behaviour. The mechanics constrain the anatomy so tightly that the anatomy becomes diagnostic — and it is why arguments about the earliest hominins so often turn on a single femur, a fragment of pelvis, or the angle at which the spinal cord entered the skull.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'So what does the rebuilt skeleton look like? It is worth taking in all at once, because the parts only make sense together.',
        },
      },
    ],
    furtherReading: [referenceId('lovejoy-2005-pelvis')],
  },

  {
    id: topicId('the-skeleton-rebuilt'),
    slug: 'the-skeleton-rebuilt',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 9,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The skeleton rebuilt',
    subtitle: 'Pelvis, spine, femur, knee and foot are one solution, not five features.',
    summary: {
      essential:
        'Every part of the human skeleton below the ribs has been modified for upright walking, and the modifications interlock. Change one and the others stop working.',
      detailed:
        'The pelvis shortens and wraps around to the side; the spine develops a forward curve in the lower back; the femur angles inward so the knees sit under the body’s midline; the foot loses its grasping big toe and gains an arch that acts as a spring.',
      technical:
        'The package comprises a short, laterally flared ilium with a functional abductor lever; lumbar lordosis with six free lumbar vertebrae in many individuals; a high femoral bicondylar angle placing the knee beneath the midline; a valgus knee with asymmetric condyles; and an adducted hallux with longitudinal and transverse pedal arches.',
    },
    glossaryTerms: [glossaryTermId('bipedalism'), glossaryTermId('mosaic-evolution')],
    related: [topicId('standing-up'), topicId('walking-and-climbing-at-once')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Put a human skeleton beside a chimpanzee skeleton and the differences below the ribcage are impossible to miss. But the useful exercise is not listing them. It is noticing that each one is doing a job created by one of the others.',
          detailed:
            'Start anywhere in the chain and it leads to the rest. The pelvis is short and bowl-shaped, which brings the hip muscles around to the side where they can stop the pelvis tipping. Shortening the pelvis brings the ribcage closer to the hips, so the lower spine has to curve forward to put the trunk’s weight back over the hip joints. That curve is why humans have a lower back that aches and other apes do not.',
        },
      },
      {
        id: 'skeleton-figure',
        kind: 'visualization',
        visualizationId: visualizationId('skeleton-comparison'),
      },
      {
        id: 'down-the-leg',
        kind: 'prose',
        text: {
          essential:
            'Below the hip, the thigh bone slants inward, so that the knees sit close together under the body’s centre line rather than out at the width of the hips. That is what lets you balance over one foot without swinging your torso sideways over it.',
          detailed:
            'The angle has consequences. A knee loaded at a slant would tend to slide sideways, so the joint surfaces are shaped asymmetrically to resist it and the whole joint is built to lock straight when standing — which is how humans stand for hours with almost no muscular effort, and why the knee is the joint that fails most often. This inward angle is measurable on a fossil thigh bone, and it is one of the most reliable single indicators that an animal walked upright.',
          technical:
            'The bicondylar angle is close to 0° in apes and typically 8–11° in humans. It is not present at birth and develops during infancy in response to loading, which makes it a developmental signal of bipedal walking rather than a hard-coded one — and means its presence in a juvenile fossil indicates that the individual actually walked, not merely that its species could.',
        },
      },
      {
        id: 'the-foot',
        kind: 'prose',
        text: {
          essential:
            'The foot is where the change is most complete. An ape foot is a hand: a long, opposable big toe that grips branches. A human foot has traded all of that away. The big toe is lined up with the others, the sole is stiffened into arches, and the whole structure behaves as a lever and a spring rather than a grasping organ.',
          detailed:
            'The arch matters more than it appears to. It compresses as weight comes onto the foot, storing energy in stretched ligaments and tendons, and releases that energy as the foot pushes off. It returns something like 17% of the energy of each step. A flat, flexible ape foot cannot do this, which is part of why ape bipedal walking is so expensive.',
        },
      },
      {
        id: 'arch-claim',
        kind: 'claim',
        statement: {
          essential:
            'Australopithecus afarensis had a stiff, arched foot by 3.2 million years ago.',
          detailed:
            'A complete fourth metatarsal from Hadar shows the torsion and joint orientation associated with permanent longitudinal and transverse arches. The inference rests on a single well-preserved element, and the degree of arching cannot be established from it in detail.',
        },
        evidence: 'inference',
        references: [referenceId('ward-2011-arch')],
      },
      {
        id: 'trade-off',
        kind: 'callout',
        tone: 'note',
        title: 'Everything here is a trade',
        text: {
          essential:
            'Every one of these changes bought upright walking at the cost of something else. The foot that became a spring stopped being able to grip. The lower back that carries the trunk is the most commonly injured part of the human body. The knee that locks straight is the joint that wears out.',
          detailed:
            'This is the normal shape of evolutionary change and it is worth naming early, because the rest of this section is full of it. Selection does not optimise; it modifies what is already there under whatever pressures currently dominate. Back pain, knee failure and difficult childbirth are not design flaws. They are the running costs of a structural conversion that was never designed at all.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Which raises the question the whole movement has been circling. If bipedalism costs this much, what was it worth?',
        },
      },
    ],
    furtherReading: [referenceId('lovejoy-2005-knee-foot')],
  },

  {
    id: topicId('why-walk-on-two-legs'),
    slug: 'why-walk-on-two-legs',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 10,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why walk on two legs?',
    subtitle: 'Several hypotheses, none of them decisively winning.',
    summary: {
      essential:
        'We do not know why bipedalism evolved. There are several serious hypotheses — energy efficiency, carrying, heat, feeding posture — and the evidence does not yet pick between them.',
      detailed:
        'The difficulty is that these explanations are not mutually exclusive, and that the environment in which bipedalism began is now known to have been wooded rather than open grassland, which removes the setting several of the classic hypotheses assumed.',
      technical:
        'Testing adaptive hypotheses for a transition seven million years past is constrained by the absence of the ancestral locomotor condition. Most hypotheses are supported by plausibility arguments and modern analogues rather than by evidence that discriminates between them, which is why the question remains genuinely open rather than merely unsettled.',
    },
    glossaryTerms: [glossaryTermId('bipedalism'), glossaryTermId('adaptation')],
    related: [topicId('the-skeleton-rebuilt'), topicId('endurance-heat-and-sweat')],
    blocks: [
      {
        id: 'the-savanna-story',
        kind: 'prose',
        text: {
          essential:
            'The story most people have heard goes like this: the forests shrank, our ancestors came down onto the open grassland, and standing up let them see over the grass. It is memorable, it is widely repeated, and the central premise turns out not to match the evidence.',
          detailed:
            'The premise was testable, and it has been tested. Carbon isotopes locked into ancient soils record the proportion of tropical grasses growing at a site, because grasses and trees fix carbon by different chemical routes and leave different signatures. Applied across African hominin sites spanning six million years, the method shows woody cover typically between 40% and 60% — wooded grassland and forest edge, not open savanna. Early hominins were not living on a plain.',
        },
      },
      {
        id: 'woodland-claim',
        kind: 'claim',
        statement: {
          essential:
            'Most early hominin sites were wooded grassland rather than open savanna, with tree cover typically above 40%.',
          detailed:
            'Stable carbon isotope ratios in palaeosol carbonates across East African hominin localities indicate substantial woody cover throughout the period during which bipedalism became established. Open grassland environments appear later and never dominate the record.',
        },
        evidence: 'established',
        references: [referenceId('cerling-2011-woodland')],
      },
      {
        id: 'hypotheses-figure',
        kind: 'visualization',
        visualizationId: visualizationId('bipedalism-hypotheses'),
      },
      {
        id: 'the-candidates',
        kind: 'prose',
        text: {
          essential:
            'What remains is a set of hypotheses, each with something in its favour and something against. Walking upright is cheaper over distance than knuckle-walking, which matters if food is spread out. Free hands can carry things — infants, food, tools. An upright body absorbs less midday sun and loses heat more easily. And standing is a useful posture for feeding from low branches.',
          detailed:
            'Take them in turn. The energetics argument is the best supported, because it has been measured directly rather than argued: chimpanzees walking bipedally were compared with humans, and human walking came out around 75% cheaper. But the comparison is between a modern human and a modern chimpanzee, and the first bipeds had neither anatomy. The carrying hypothesis explains why hands being free would pay, but cannot easily explain why the first bipeds — who had no tools for over a million years afterwards — were carrying enough to matter. The thermoregulatory argument works well for an open habitat at midday and much less well for the woodland the isotopes describe. The postural feeding argument fits the woodland setting and is supported by the observation that orangutans walk bipedally along branches, but it explains standing rather than travelling.',
          technical:
            'A further complication: bipedalism appears to have arisen in a context where climbing was retained, so the selective comparison may not be "bipedal versus quadrupedal" at all but "which mix of postures" — and locomotor cost models built around a single gait are then testing the wrong alternative.',
        },
      },
      {
        id: 'energy-claim',
        kind: 'claim',
        statement: {
          essential:
            'Human bipedal walking is markedly more energy-efficient per unit distance than chimpanzee locomotion, which supports but does not establish the energetics hypothesis.',
          detailed:
            'The measurement is solid; the inference to the origin of bipedalism requires assuming the ancestral condition resembled a modern chimpanzee, which is precisely what is in doubt.',
        },
        evidence: 'inference',
        references: [
          referenceId('sockol-2007-chimpanzee-locomotion'),
          referenceId('rodman-mchenry-1980-bipedalism-energetics'),
        ],
      },
      {
        id: 'open',
        kind: 'open-question',
        question: 'Why did habitual bipedalism evolve in the hominin lineage?',
        whyItMatters: {
          essential:
            'Bipedalism is the first thing that distinguishes our lineage, and it happened long before large brains, tools or anything else usually called human. Whatever drove it set the conditions for everything after.',
          detailed:
            'It also matters for how we read the rest of the story. If bipedalism was about carrying, then hands were freed early and technology was long delayed for other reasons. If it was about energy, then it is a response to a changing food landscape and the free hands are a side effect that mattered much later.',
        },
        whatWouldSettleIt: {
          essential:
            'Postcranial fossils from between eight and five million years ago, from multiple sites with good environmental reconstruction. At present there are very few.',
          detailed:
            'The specific need is for skeletal material that samples the transition rather than its endpoints, together with independent habitat reconstruction at each site. Even then, adaptive hypotheses are hard to discriminate: several of these pressures could have acted together, and a transition driven by several weak pressures would leave much the same fossil evidence as one driven by a single strong pressure.',
        },
        references: [
          referenceId('white-2009-ardipithecus'),
          referenceId('wheeler-1991-thermoregulation'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'One thing the fossils do settle is that the transition was not clean. For millions of years, our ancestors were doing both things at once.',
        },
      },
    ],
    furtherReading: [referenceId('cerling-2011-woodland')],
  },

  {
    id: topicId('walking-and-climbing-at-once'),
    slug: 'walking-and-climbing-at-once',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 11,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Walking and climbing at once',
    subtitle: 'For three million years, hominins were committed to neither.',
    summary: {
      essential:
        'Early hominins had feet and pelvises built for walking and shoulders, arms and curved fingers still built for climbing. They were not halfway to being us. They were good at a combination we no longer have.',
      detailed:
        'This is mosaic evolution: different parts of the body changing at different rates. It is the normal pattern, and it is why "transitional form" misleads — these animals were not in transit anywhere, they were successful for over a million years each.',
      technical:
        'A. afarensis retains curved manual phalanges, a cranially oriented glenoid fossa, and relatively long forelimbs alongside a fully derived lower limb and pelvis. Whether retained features are functionally significant or evolutionary baggage is a long-running and still unresolved debate.',
    },
    glossaryTerms: [glossaryTermId('mosaic-evolution'), glossaryTermId('bipedalism')],
    related: [topicId('the-skeleton-rebuilt'), topicId('the-australopithecines')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Lucy’s skeleton contains an argument that has run for fifty years. From the waist down she walked upright, and nobody disputes it. From the waist up she has long arms, upward-facing shoulder sockets and finger bones curved like an animal that hangs from things.',
          detailed:
            'Two readings have competed ever since. One says the upper body is leftover equipment — inherited, no longer used, not yet lost, because there was no strong pressure to lose it. The other says she used it: that these animals slept in trees, escaped predators in trees, and fed in trees, and that curved fingers are what an animal that climbs regularly actually has.',
        },
      },
      {
        id: 'mosaic-figure',
        kind: 'visualization',
        visualizationId: visualizationId('mosaic-body'),
      },
      {
        id: 'bone-remembers',
        kind: 'prose',
        text: {
          essential:
            'There is a way to make the question empirical. The internal structure of bone is not fixed at birth. The fine struts inside a joint thicken along the directions that are actually loaded during life, and they do it within years. Read that internal architecture and you are reading what an individual did, not what its species could do.',
          detailed:
            'Applied to fossil hands, the method gives a result that neither camp predicted cleanly. Australopithecus africanus hand bones show internal loading patterns consistent with forceful precision gripping between thumb and fingers — the pattern of a hand used for manipulating objects, in a species whose external anatomy is often read as primarily arboreal. The same technique applied to other elements has produced evidence for continued climbing in other species. The picture that emerges is not one activity or the other; it is animals doing several things.',
          technical:
            'Trabecular architecture responds to habitual loading direction and magnitude over a timescale of years, making it a record of behaviour during life rather than of phylogenetic inheritance. The inference is nonetheless indirect: loading patterns are interpreted through comparison with modern humans and apes of known behaviour, and the reference samples are small.',
        },
      },
      {
        id: 'trabecular-claim',
        kind: 'claim',
        statement: {
          essential:
            'Internal bone structure in Australopithecus africanus hands indicates habitual forceful gripping between thumb and fingers.',
          detailed:
            'Trabecular bone distribution in the metacarpals matches modern humans rather than chimpanzees, implying manipulative loading during life in a species not associated with stone tools.',
        },
        evidence: 'inference',
        references: [referenceId('skinner-2015-trabecular-hand')],
      },
      {
        id: 'sediba',
        kind: 'callout',
        tone: 'note',
        title: 'One hand, two jobs',
        text: {
          essential:
            'The hand of Australopithecus sediba makes the point in a single specimen. It has the long, strongly muscled thumb associated with precise manipulation, and the powerfully built curved fingers associated with climbing, in the same individual.',
          detailed:
            'It is a useful corrective to the habit of asking whether a species was "a climber or a walker". The question assumes a choice that the animals themselves did not have to make. A body can be a compromise, and compromises are what selection usually produces when two pressures both persist.',
        },
        references: [referenceId('kivell-2011-sediba-hand')],
      },
      {
        id: 'not-transitional',
        kind: 'callout',
        tone: 'misconception',
        title: '“Transitional form” is a description of hindsight',
        text: {
          essential:
            'Australopithecus afarensis existed for something like 900,000 years — roughly three times as long as our own species has so far. Nothing about it was in transit. It was a functioning animal, well suited to its world, that happens to lie between two points we care about.',
          detailed:
            'Every species is transitional if you are looking backwards from one of its descendants and forwards from one of its ancestors. The label tells you about the observer’s vantage point, not about the organism.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'If the feet were becoming committed to the ground, something was happening at the other end of the body. Hands that no longer had to hold on could start to be used for other things.',
        },
      },
    ],
    furtherReading: [referenceId('tocheri-2008-wrist')],
  },

  {
    id: topicId('the-hand-and-the-grip'),
    slug: 'the-hand-and-the-grip',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 12,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The hand and the grip',
    subtitle: 'A shorter palm and a longer thumb, and what that combination makes possible.',
    summary: {
      essential:
        'The human hand is not more complex than an ape hand. Its fingers are shorter and its thumb is longer, and that proportional change is what lets thumb and fingertip meet with force and control.',
      detailed:
        'Almost everything a human hand does that an ape hand cannot follows from the ability to press the pad of the thumb against the pad of a fingertip while applying real force — the grip used for a needle, a pen, and a stone flake.',
      technical:
        'Human intrinsic hand proportions give a high thumb-to-finger length ratio, combined with enlarged thenar musculature, a saddle-shaped and highly mobile first carpometacarpal joint, and three muscles absent or poorly developed in chimpanzees. The result is the pad-to-pad precision grip and the cradle "precision handling" repertoire.',
    },
    glossaryTerms: [glossaryTermId('mosaic-evolution')],
    related: [topicId('walking-and-climbing-at-once'), topicId('the-first-stone-tools')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Pick up a coin from a flat table. You did that with the pad of your thumb against the pad of a fingertip, applying enough force to lift and enough control not to flick it away. A chimpanzee, whose hand is far stronger than yours, finds this task awkward.',
          detailed:
            'The reason is proportional rather than structural. A chimpanzee hand has the same bones, the same joints and mostly the same muscles. But its fingers are long and its thumb is short, so the thumb cannot comfortably reach across to oppose a fingertip. It grips powerfully in a hook, which is what hanging beneath a branch requires, and it manipulates small objects between the side of the thumb and the side of the index finger.',
        },
      },
      {
        id: 'grip-figure',
        kind: 'visualization',
        visualizationId: visualizationId('hand-proportions'),
      },
      {
        id: 'what-changed',
        kind: 'prose',
        text: {
          essential:
            'Three things changed together in our lineage: the fingers got shorter, the thumb got longer and much more muscular, and the joint at the base of the thumb became more mobile, letting it rotate to face the fingers rather than merely swing beside them.',
          detailed:
            'Add a few small muscles that chimpanzees either lack or have only weakly, and you have a hand that can apply significant force through a very small contact area under fine control. That is the whole of it. No new bone, no new joint type — a change of proportions and of muscular detail, which is exactly the kind of change a modest amount of genetic difference can produce.',
        },
      },
      {
        id: 'grip-claim',
        kind: 'claim',
        statement: {
          essential:
            'The distinctive human precision grip results from changed hand proportions and thumb musculature rather than from novel anatomical structures.',
          detailed:
            'Human and chimpanzee hands share their skeletal and muscular plan almost entirely. The functional difference traces to relative segment lengths, thenar muscle development, and first carpometacarpal joint mobility.',
        },
        evidence: 'established',
        references: [referenceId('tocheri-2008-wrist')],
      },
      {
        id: 'order-of-events',
        kind: 'callout',
        tone: 'misconception',
        title: 'Tools did not create the hand',
        text: {
          essential:
            'The sequence is usually told backwards. Hands with human-like manipulative loading appear in australopiths, before the oldest stone tools that anyone attributes to their makers with confidence.',
          detailed:
            'This does not mean the hand evolved "for" tools and waited. It means manipulative ability was already useful — for processing plant foods, for handling objects, for whatever these animals did with their hands all day — and that stone knapping arrived to exploit a capability that already existed. Later, once tools mattered, selection could act on the hand further. But the first move was not made by technology.',
        },
        references: [referenceId('skinner-2015-trabecular-hand')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Free hands and committed feet changed what a body could do over distance, too — and that turns out to depend on something less obvious than legs.',
        },
      },
    ],
    furtherReading: [referenceId('kivell-2011-sediba-hand')],
  },

  {
    id: topicId('endurance-heat-and-sweat'),
    slug: 'endurance-heat-and-sweat',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 13,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Endurance, heat and sweat',
    subtitle: 'We are slow, and almost uniquely able to keep going.',
    summary: {
      essential:
        'Humans are poor sprinters and exceptional distance movers. The reason is not our legs but our cooling system: naked skin and millions of sweat glands let us shed heat while still moving, which most mammals cannot do.',
      detailed:
        'A galloping mammal cools mainly by panting, and panting is hard to do while galloping because breathing is coupled to stride. Sweating decouples cooling from breathing entirely, which is why a human can run for hours in conditions that force other animals to stop.',
      technical:
        'Humans have 2–5 million eccrine glands and the highest whole-body sweating capacity of any mammal, permitting evaporative heat loss exceeding 1 kW. Quadrupedal mammals rely on respiratory evaporative cooling, which is constrained during locomotion by respiratory–locomotor phase coupling in galloping gaits.',
    },
    glossaryTerms: [glossaryTermId('adaptation')],
    related: [topicId('why-walk-on-two-legs'), topicId('homo-erectus')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Almost any mammal your size can outrun you. A dog, a goat, a horse, a wildebeest — over a hundred metres, they are gone. Over forty kilometres in the midday heat, most of them will stop and you will not. That reversal is worth explaining, because it is one of the few things at which humans are genuinely exceptional.',
          detailed:
            'The limiting factor in sustained running is not muscle. It is temperature. A running body produces heat at many times its resting rate, and if that heat is not shed, core temperature climbs until the animal must stop. Every endurance athlete is really managing a thermal problem.',
        },
      },
      {
        id: 'cooling-figure',
        kind: 'visualization',
        visualizationId: visualizationId('cooling-systems'),
      },
      {
        id: 'the-panting-problem',
        kind: 'prose',
        text: {
          essential:
            'Most mammals shed heat by panting — moving air rapidly over wet surfaces in the nose and mouth. It works well at rest. It works badly while galloping, because a galloping animal’s breathing is mechanically locked to its stride: the gut slams against the diaphragm with each bound, forcing one breath per stride.',
          detailed:
            'So a galloping mammal cannot choose its breathing rate independently of its speed, and therefore cannot increase cooling without changing gait. Human sweating has no such constraint. Evaporation from skin is independent of breathing entirely, and it is spread over the whole body surface rather than concentrated in the airway. A human running in heat can shed over a kilowatt this way.',
        },
      },
      {
        id: 'sweat-claim',
        kind: 'claim',
        statement: {
          essential:
            'Humans have far more eccrine sweat glands per unit of skin than other primates, and the highest sweating capacity of any mammal measured.',
          detailed:
            'Comparative work on eccrine gland density places humans well outside the primate range, with density about tenfold that of chimpanzees and macaques. The trait appears to have evolved independently of hair reduction rather than as a consequence of it.',
        },
        evidence: 'established',
        references: [referenceId('kamberov-2018-eccrine')],
      },
      {
        id: 'the-package',
        kind: 'prose',
        text: {
          essential:
            'Cooling is not the only part. A list of human features makes little sense as adaptations for walking, and considerable sense as adaptations for running: a springy Achilles tendon, an arched foot that stores and returns energy, large buttock muscles that fire to stop the trunk pitching forward, a ligament at the back of the neck that stabilises the head, and a shoulder girdle decoupled from the skull so the arms can swing against the rotation of the hips.',
          detailed:
            'None of these does much for walking. The gluteus maximus is barely active in a walk and works hard in a run. The nuchal ligament is present in running mammals and absent in apes. The argument is that this cluster appeared together with the genus Homo, and that running — to reach carcasses before other scavengers, or to pursue prey until it overheats — is what it was for.',
          technical:
            'The endurance-running hypothesis remains debated. The main objections are that the traits could be exaptations for other functions, that the energetic return on persistence hunting is hard to establish for the Pleistocene, and that ethnographic persistence hunting, while documented, is rare among recent hunter-gatherers.',
        },
      },
      {
        id: 'running-claim',
        kind: 'claim',
        statement: {
          essential:
            'A suite of skeletal features appearing with early Homo is specific to running rather than walking, suggesting endurance running became important around two million years ago.',
          detailed:
            'The features include an enlarged gluteus maximus, a nuchal ligament, expanded joint surfaces in the lower limb, and long spring-like tendons. Their functional specificity to running is established experimentally; the inference that running drove their evolution is a reconstruction that continues to be argued.',
        },
        evidence: 'active-research',
        references: [referenceId('bramble-lieberman-2004-endurance-running')],
      },
      {
        id: 'hair-and-skin',
        kind: 'prose',
        text: {
          essential:
            'Losing body hair is part of the same system — evaporation from a furred surface cools the fur rather than the skin. But bare skin in equatorial sun creates a new problem, and the solution is the reason human skin colour varies with latitude.',
          detailed:
            'Strong ultraviolet light destroys folate, which is required for normal development, so dark pigmentation is favoured near the equator. But ultraviolet light is also how skin makes vitamin D, so at high latitudes with weak sun, dark pigmentation risks deficiency and lighter skin is favoured. Human skin colour is the running compromise between these two demands, it tracks ultraviolet intensity closely across the globe, and it has changed repeatedly and recently in many lineages. It is among the worst possible markers of deep ancestry, because it responds so quickly to where a population lives.',
        },
      },
      {
        id: 'skin-claim',
        kind: 'claim',
        statement: {
          essential:
            'Human skin pigmentation varies with ultraviolet intensity as a compromise between protecting folate and permitting vitamin D synthesis.',
          detailed:
            'Measured pigmentation correlates closely with annual UV flux across indigenous populations worldwide, and depigmentation has evolved independently in several lineages at high latitude via different genetic routes.',
        },
        evidence: 'established',
        references: [referenceId('jablonski-chaplin-2010-skin')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Moving further and shedding heat both cost energy, and energy has to come from food. Teeth are the part of the body that records what that food was.',
        },
      },
    ],
    furtherReading: [referenceId('rogers-2004-mc1r')],
  },

  {
    id: topicId('teeth-jaws-and-diet'),
    slug: 'teeth-jaws-and-diet',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 14,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Teeth, jaws and diet',
    subtitle: 'What a tooth is built for, and what it actually ate, are two different questions.',
    summary: {
      essential:
        'Teeth are the commonest hominin fossils and the most informative. Their shape records what a lineage was adapted to eat; the microscopic scratches on them record what an individual actually ate in its last weeks.',
      detailed:
        'Those two records frequently disagree, and the disagreement is itself a finding: species with massive grinding teeth turn out, from wear and chemistry, to have often eaten softer foods. Heavy-duty anatomy may be for the difficult season rather than the ordinary one.',
      technical:
        'Three independent proxies are used: gross morphology (adaptive capability), dental microwear texture (diet over days to weeks before death), and stable carbon isotope ratios in enamel (C3 versus C4 resource use over years of crown formation). Discordance between them is common and informative.',
    },
    glossaryTerms: [glossaryTermId('dental-microwear'), glossaryTermId('stable-isotope-analysis')],
    related: [topicId('the-robust-branch'), topicId('cooking-and-the-energy-budget')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Enamel is the hardest substance a vertebrate makes, which is why teeth survive when everything else is gone. A great deal of what we know about hominin diet comes from them, and there are three quite different ways of reading one.',
          detailed:
            'The first is shape. A tooth built for shearing tough leaves looks different from one built for crushing hard objects, and a jaw built to generate enormous bite force looks different from one that is not. This tells you what a lineage was equipped to handle.',
        },
      },
      {
        id: 'three-proxies',
        kind: 'visualization',
        visualizationId: visualizationId('diet-evidence'),
      },
      {
        id: 'the-other-two',
        kind: 'prose',
        text: {
          essential:
            'The second reading is microscopic. Chewing leaves scratches and pits on the enamel surface, and different foods leave different textures — hard brittle items pit, tough fibrous items scratch. That surface is continuously reworked, so it records the last days or weeks of life rather than the species’ long-term adaptation.',
          detailed:
            'The third is chemical. Plants using different photosynthetic pathways take up carbon isotopes in different proportions: trees, shrubs and their fruits sit in one range, tropical grasses and sedges in another. Animals eating those plants — or eating animals that ate them — lock the signature into their enamel as it forms. That gives a multi-year average of what an individual ate while its teeth were growing.',
        },
      },
      {
        id: 'when-they-disagree',
        kind: 'prose',
        text: {
          essential:
            'Put the three together and something surprising emerges. Paranthropus boisei had the most extreme chewing apparatus of any hominin — huge flat molars, a face buttressed to take the load, a crest on top of the skull for the jaw muscles. It was nicknamed Nutcracker Man. Its microwear does not look like a hard-object feeder at all, and its carbon isotopes say it ate overwhelmingly grasses or sedges.',
          detailed:
            'This is a genuinely instructive failure of the obvious inference. Anatomy tells you what an animal could do, and a structure built to survive the hardest thing it ever has to process may be used most of the time on something else. The current reading of P. boisei is a grass- or sedge-eater whose apparatus handled large volumes of abrasive low-quality food rather than a few very hard items.',
          technical:
            'Isotopic values for P. boisei indicate roughly 75–80% C4-derived carbon, the highest of any hominin measured. The anatomical interpretation has shifted accordingly from hard-object specialist to high-volume processor of tough, abrasive C4 resources, though the "fallback food" reading — that heavy anatomy is selected by rare critical episodes rather than typical diet — remains actively argued.',
        },
      },
      {
        id: 'isotope-claim',
        kind: 'claim',
        statement: {
          essential:
            'Carbon isotopes show hominin diets diversifying from around 3.5 million years ago, with several lineages taking up substantial amounts of grass- or sedge-derived food.',
          detailed:
            'Enamel isotope data across multiple hominin species show a shift from a largely C3 (tree and shrub) signal in earlier forms to mixed and in some cases strongly C4-dominated signals later, with substantial variation between contemporaneous species.',
        },
        evidence: 'established',
        references: [
          referenceId('sponheimer-2013-isotopes'),
          referenceId('ungar-sponheimer-2011-diets'),
        ],
      },
      {
        id: 'shrinking-teeth',
        kind: 'prose',
        text: {
          essential:
            'The other trend in hominin teeth runs the opposite way. From Homo erectus onward, teeth and jaws get steadily smaller — and they keep shrinking right through to living humans, whose third molars frequently have no room to erupt at all.',
          detailed:
            'The reduction is usually linked to food being processed outside the mouth, first by cutting and pounding and later by cooking. Something else is doing the work that molars used to do. The wisdom tooth is the end of that trend: tooth size and jaw size are governed by partly separate developmental controls, so a jaw that shrank faster than the tooth row leaves the last tooth without space.',
        },
      },
      {
        id: 'molar-cascade',
        kind: 'callout',
        tone: 'note',
        title: 'Why the last tooth is the one that fails',
        text: {
          essential:
            'Molars develop in sequence, front to back, and each developing tooth chemically suppresses the next. Change the balance slightly and the effect compounds along the row, so the third molar is where variation piles up.',
          detailed:
            'This "inhibitory cascade" predicts hominin molar proportions from a simple rule, and it explains why third molars are the teeth that go missing, stay unerupted, or appear in reduced form. It is a good illustration that a feature can look like a design fault while being the predictable output of a developmental rule that works well overall.',
        },
        references: [referenceId('evans-2016-dental-proportions')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'A body rebuilt for walking and a head that would eventually carry a much larger brain set up a collision — and it happens at birth.',
        },
      },
    ],
    furtherReading: [referenceId('teaford-ungar-2000-diet')],
  },

  {
    id: topicId('the-difficulty-of-human-birth'),
    slug: 'the-difficulty-of-human-birth',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 15,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The difficulty of human birth',
    subtitle: 'A real problem, and a famous explanation for it that is now in doubt.',
    summary: {
      essential:
        'Human birth is unusually difficult and unusually social. The standard explanation — that a pelvis narrow enough for efficient walking conflicts with a large infant head — has been directly tested in the last decade and has not held up cleanly.',
      detailed:
        'The difficulty is not in question. What is in question is the trade-off said to cause it: measurements find that a wider pelvis does not make walking more expensive, which removes the force from one side of the supposed conflict.',
      technical:
        'The obstetrical dilemma predicts a locomotor cost to pelvic widening. Experimental measurement of oxygen consumption across individuals of varying bi-iliac breadth finds no such cost. Alternative accounts invoke a maternal metabolic ceiling limiting gestation length, or fetal–maternal conflict; none is established, and the classic hypothesis retains defenders.',
    },
    glossaryTerms: [
      glossaryTermId('obstetrical-dilemma'),
      glossaryTermId('altriciality'),
      glossaryTermId('life-history'),
    ],
    related: [topicId('the-long-childhood'), topicId('the-cost-of-a-brain')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A chimpanzee usually gives birth alone, and the infant emerges facing forward, towards the mother, who can reach down and guide it out. Human birth is different in almost every respect: the infant must rotate as it passes through, it emerges facing away from the mother, and assistance is close to universal across human societies.',
          detailed:
            'The mechanical reason for the rotation is that the human birth canal is not a simple tube. Because the pelvis was reshaped for walking, its inlet is widest side to side while its outlet is widest front to back. An infant head — which is not round — has to turn part-way through to keep presenting its narrowest dimension to the narrowest part of the passage.',
        },
      },
      {
        id: 'birth-figure',
        kind: 'visualization',
        visualizationId: visualizationId('birth-canal'),
      },
      {
        id: 'the-classic-story',
        kind: 'prose',
        text: {
          essential:
            'The explanation you will find in most textbooks is called the obstetrical dilemma. It says that two pressures pull the pelvis in opposite directions: bigger brains need a wider birth canal, while efficient bipedal walking needs a narrower one. Birth is difficult because it sits at the unhappy compromise between them.',
          detailed:
            'It is an elegant argument, it explains several things at once, and it was accepted for over fifty years. It also makes a testable prediction, which nobody tested for most of that time: if a wide pelvis really compromises walking, then people with wider pelvises should use measurably more energy to walk and run.',
        },
      },
      {
        id: 'the-test',
        kind: 'claim',
        statement: {
          essential:
            'Measured across individuals, a wider pelvis does not increase the energy cost of walking or running.',
          detailed:
            'Oxygen consumption measured during walking and running across a range of bi-iliac breadths shows no relationship between pelvic width and locomotor cost. This removes the locomotor half of the trade-off that the obstetrical dilemma requires.',
        },
        evidence: 'established',
        references: [referenceId('warrener-2015-obstetric-dilemma')],
      },
      {
        id: 'alternatives',
        kind: 'prose',
        text: {
          essential:
            'So the problem needs a different explanation. One proposal shifts the limit from the pelvis to the mother’s metabolism: pregnancy is energetically demanding, and there may be a ceiling on how much energy a mother can supply, reached at around nine months. Birth would then happen when the fetus can no longer be sustained, not when it can no longer fit.',
          detailed:
            'That account fits some comparative data and has its own difficulties, including whether the proposed ceiling is real. Other work argues the original hypothesis still stands once the pelvic floor is taken into account: a wider outlet may compromise support of the abdominal organs rather than locomotion, which would restore a trade-off with a different second term.',
          technical:
            'The honest summary is that human birth is agreed to be difficult, agreed to involve a tight fit, and not agreed as to why the fit is tight. Several groups are actively arguing this, the datasets involved are small, and pelvic dimensions vary substantially between populations in ways that complicate any single global explanation.',
        },
      },
      {
        id: 'open',
        kind: 'open-question',
        question: 'Why is human birth so tightly constrained?',
        whyItMatters: {
          essential:
            'Because the answer determines what else it explains. The obstetrical dilemma was used to explain why human infants are born so helpless and why childhood is so long. If the dilemma is wrong, those consequences need their own explanations.',
          detailed:
            'It also matters for how confidently a textbook consensus should be held. This was a standard fact taught for half a century, resting on an untested premise, and the test came out against it. That is not a scandal — it is science working — but it is a useful reminder when reading any tidy adaptive story in this field.',
        },
        whatWouldSettleIt: {
          essential:
            'Larger comparative datasets on pelvic form, locomotor cost and pelvic floor function across diverse populations, and better comparative data on gestation limits in other primates.',
          detailed:
            'The competing hypotheses make different predictions that are in principle separable: a metabolic ceiling predicts gestation length scaling with maternal metabolic capacity independent of pelvic dimensions, while a pelvic floor trade-off predicts a cost to outlet width detectable in continence and prolapse rather than in oxygen consumption. Both require larger and more diverse samples than currently exist.',
        },
        references: [
          referenceId('haeusler-2021-obstetrical-dilemma'),
          referenceId('dunsworth-2012-eem'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Whatever the cause, the consequence is not in dispute: human infants arrive early, underdeveloped, and stay dependent for an extraordinarily long time.',
        },
      },
    ],
    furtherReading: [referenceId('rosenberg-trevathan-2002-birth')],
  },

  {
    id: topicId('the-long-childhood'),
    slug: 'the-long-childhood',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 16,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The long childhood',
    subtitle: 'Growing slowly is expensive. Teeth record when we started doing it.',
    summary: {
      essential:
        'Humans take far longer to grow up than any other ape, and stay dependent for years after weaning. It is a costly strategy, and teeth let us date when it appeared.',
      detailed:
        'Enamel is laid down in daily increments, like tree rings, so a fossil tooth records exactly how many days it took to form. Applied across hominins, this shows that the modern slow pattern is recent — earlier species, including Homo erectus, grew faster than we do.',
      technical:
        'Cross-striations in enamel prisms are circadian; counting them between accentuated markings gives crown formation times and, with the neonatal line, age at death to within days. Dean et al. established that H. erectus and earlier hominins had ape-like rather than human-like dental development schedules.',
    },
    glossaryTerms: [glossaryTermId('life-history'), glossaryTermId('altriciality')],
    related: [topicId('the-difficulty-of-human-birth'), topicId('learning-imitation-and-teaching')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A chimpanzee is weaned at four or five and is largely feeding itself from then on. A human child is weaned earlier — often by three — and cannot feed itself for many years afterwards. Somebody else has to supply the difference, every day, for a decade.',
          detailed:
            'From a purely accounting point of view this is a strange thing to evolve. A juvenile that cannot support itself is a net cost to the group, and the longer that period lasts, the fewer offspring can be raised in a lifetime. Whatever advantage the long childhood brings has to be large enough to pay for years of dependency per child.',
        },
      },
      {
        id: 'growth-figure',
        kind: 'visualization',
        visualizationId: visualizationId('growth-schedules'),
      },
      {
        id: 'teeth-as-clocks',
        kind: 'prose',
        text: {
          essential:
            'The question of when this pattern appeared would be unanswerable except for a convenient fact about enamel: it is laid down in daily layers, and the layers are preserved. Section a fossil tooth, count the lines, and you know how many days that crown took to form.',
          detailed:
            'There is even a marker for the moment of birth — a disturbance line laid down as the infant’s physiology changes at delivery — so age at death can be read directly from a child’s tooth to within days. Applied to hominin fossils, the method turns a question about life history into a measurement rather than an inference from body size.',
        },
      },
      {
        id: 'dean-claim',
        kind: 'claim',
        statement: {
          essential:
            'Homo erectus and earlier hominins grew their teeth on a faster, more ape-like schedule than modern humans do.',
          detailed:
            'Daily enamel increment counts give crown formation times and eruption ages intermediate between apes and modern humans, or fully ape-like in earlier forms. The distinctively slow modern human schedule appears late in the lineage.',
        },
        evidence: 'established',
        references: [referenceId('dean-2001-enamel')],
      },
      {
        id: 'even-neanderthals',
        kind: 'prose',
        text: {
          essential:
            'The method is sensitive enough to separate us from Neanderthals. Their dental development ran slightly faster than ours — meaning that even among large-brained humans, the very slow modern schedule is not universal.',
          detailed:
            'That is a useful result precisely because it is a small one. It shows that brain size and growth rate are not locked together: Neanderthals had brains as large as ours, on average, and did not have our developmental timetable. Whatever selected for our unusually extended childhood, it was not simply the size of the brain that had to be grown.',
        },
      },
      {
        id: 'neanderthal-growth-claim',
        kind: 'claim',
        statement: {
          essential:
            'Neanderthal dental development was faster than that of modern humans, indicating a somewhat shorter childhood despite comparable adult brain size.',
          detailed:
            'Synchrotron imaging of incremental markings in Neanderthal teeth gives earlier crown completion and first molar eruption than modern human means, though the samples are small and modern human variation is considerable.',
        },
        evidence: 'inference',
        references: [referenceId('smith-2010-neanderthal-development')],
      },
      {
        id: 'what-it-buys',
        kind: 'prose',
        text: {
          essential:
            'What does a long childhood buy? The leading answer is time to learn. A brain that keeps developing while immersed in a social and technical world ends up shaped by that world in ways a fast-maturing brain cannot be.',
          detailed:
            'There is a structural version of this argument. Much of human brain development happens after birth, which means it happens in contact with other people, with language, and with whatever skills the group possesses. A skill set that takes fifteen years to acquire can be far deeper than one acquired in four — but only if somebody feeds the learner throughout. The long childhood and the cooperative provisioning that pays for it are two halves of one arrangement, and neither works alone.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'A body rebuilt this thoroughly keeps traces of what it was rebuilt from. Those traces are worth looking at directly — and worth being careful about.',
        },
      },
    ],
    furtherReading: [referenceId('dunsworth-2012-eem')],
  },

  {
    id: topicId('the-body-as-an-archive'),
    slug: 'the-body-as-an-archive',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 17,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The body as an archive',
    subtitle: 'Vestigial does not mean useless. It means inherited and reduced.',
    summary: {
      essential:
        'The human body carries structures that make sense only as modified inheritances: a tailbone, muscles that twitch our ears, a blind spot in each eye. They are evidence of history, not evidence of bad design.',
      detailed:
        'The word "vestigial" is routinely misused to mean useless. It means reduced from a larger ancestral form. Several human vestigial structures do measurable work — the appendix is the clearest case — and that does not weaken the evolutionary argument at all.',
      technical:
        'The evidential force of a vestigial structure lies in its correspondence to a functional homologue in related lineages, not in its uselessness. A structure that has been repurposed is equally good evidence of descent with modification, and arguably better evidence than one that merely persists.',
    },
    glossaryTerms: [
      glossaryTermId('vestigial-structure'),
      glossaryTermId('exaptation'),
      glossaryTermId('common-ancestry'),
    ],
    related: [topicId('reading-ancestry-in-a-genome'), topicId('what-is-a-human')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'At the base of your spine are three to five small fused vertebrae that go nowhere. Behind each ear are three muscles whose job in other mammals is to swivel the ear towards a sound; in most people they produce, at best, a slight wiggle. In the centre of your visual field, in each eye, is a patch where you cannot see at all.',
          detailed:
            'None of these is a problem for you. You do not miss the tail, the ear muscles cost almost nothing, and your brain fills the blind spot so convincingly that most people never notice it. They are puzzles only if you assume a body was designed from scratch for its current use. As inherited structures modified from a working ancestral version, every one of them is exactly what you would expect.',
        },
      },
      {
        id: 'archive-figure',
        kind: 'visualization',
        visualizationId: visualizationId('body-archive'),
      },
      {
        id: 'the-blind-spot',
        kind: 'prose',
        text: {
          essential:
            'The blind spot is the best example because it is not a leftover at all — it is a consequence of how the retina is built. In vertebrates, the light-sensing cells face backwards, away from the light, and their wiring runs across the front of the retina before diving through it in a bundle to reach the brain. The hole where that bundle passes through is the blind spot.',
          detailed:
            'Octopus eyes are built the other way round, with the wiring behind the sensors, and octopuses have no blind spot. This is the point: the vertebrate arrangement is not the only possible one and not the better one, but it was the arrangement the vertebrate ancestor happened to have, and every vertebrate since has had to work with it. Evolution modifies what is there. It does not go back and re-lay the wiring.',
        },
      },
      {
        id: 'retina-claim',
        kind: 'claim',
        statement: {
          essential:
            'The vertebrate retina is inverted relative to the cephalopod retina, and the blind spot is a structural consequence of that arrangement.',
          detailed:
            'Photoreceptors in vertebrates lie behind the retinal ganglion cells and their axons, which exit through the optic disc. Cephalopod eyes, evolved independently, have the opposite arrangement and no optic disc.',
        },
        evidence: 'established',
        references: [referenceId('lamb-2007-eye-evolution')],
      },
      {
        id: 'appendix-correction',
        kind: 'callout',
        tone: 'misconception',
        title: 'The appendix is not a useless remnant',
        text: {
          essential:
            'It was long presented as the standard example of a functionless leftover. It is rich in lymphoid tissue, appears to act as a reservoir for gut bacteria after disturbance, and has evolved independently in many mammal lineages — which is not what a structure on its way out looks like.',
          detailed:
            'A structure that arises repeatedly and correlates with a specific tissue type is very unlikely to be doing nothing. This does not undercut the evolutionary reading of it; the appendix is still a modified end of the caecum, still homologous with the large fermentation chamber other mammals use, and still evidence of shared ancestry. It is simply a case where the traditional textbook example was chosen badly.',
        },
        references: [referenceId('smith-2017-appendix')],
      },
      {
        id: 'the-tail',
        kind: 'prose',
        text: {
          essential:
            'The tail is the cleanest case, and it has recently acquired a molecular explanation. Human embryos develop a tail of about ten to twelve vertebrae, which then regresses; what remains is the coccyx, which anchors several muscles of the pelvic floor and is genuinely useful.',
          detailed:
            'In 2024 a specific genetic change was identified: a jumping-gene element inserted into a gene central to tail development in the common ancestor of apes, altering how that gene is processed. Engineering the same change into mice produces tail loss. This is the kind of result that turns a comparative observation into a mechanism — and it is recent enough to be a reminder that this field is still moving.',
        },
      },
      {
        id: 'tail-claim',
        kind: 'claim',
        statement: {
          essential:
            'Tail loss in apes is associated with an inserted transposable element in the TBXT gene, shared by apes and absent in monkeys.',
          detailed:
            'An Alu element in an intron of TBXT alters splicing. Introducing the equivalent change in mice produces tail reduction. The insertion is shared across apes, consistent with a single origin in their common ancestor.',
        },
        evidence: 'established',
        references: [referenceId('xia-2024-tail-loss')],
      },
      {
        id: 'not-bad-design',
        kind: 'callout',
        tone: 'caution',
        title: 'The point is not that the body is badly made',
        text: {
          essential:
            'It is that the body is inherited. A structure that is odd, or reduced, or wired awkwardly, is odd in exactly the way an inherited structure would be — and the oddities line up precisely with the family tree built from entirely separate evidence.',
          detailed:
            'That convergence is the argument. Genetics, comparative anatomy, embryology and the fossil record are independent sources of information about the past, and they agree. A body assembled to specification would carry no such record, and no reason for the record to match.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'The body has now told us a great deal. But everything so far has been inference from living animals and from anatomy. It is time to look at what actually comes out of the ground, and at how much of it there is.',
        },
      },
    ],
    furtherReading: [referenceId('xia-2024-tail-loss')],
  },
];
