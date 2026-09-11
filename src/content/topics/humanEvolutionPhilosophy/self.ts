/**
 * Human Evolution, Philosophical Lens — Movement II: is there a self?
 *
 * This movement has a particular hazard. The Buddhist material is routinely
 * flattened in Western presentations into "nothing exists" or into a mood of
 * detachment, and the Parfit material is routinely presented as if the
 * thought experiments had settled something. Both are handled here as
 * arguments with premises, conclusions and objections, and the anattā topic
 * states explicitly what the position is not — because that correction is part
 * of stating it accurately, not a caveat bolted on.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const PHIL_SELF_TOPICS: readonly Topic[] = [
  {
    id: topicId('what-makes-you-the-same-person'),
    slug: 'what-makes-you-the-same-person',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 106,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The same person',
    subtitle: 'Almost nothing about you has stayed the same. Something has.',
    summary: {
      essential:
        'You are confident that the child in your earliest memory was you. Almost every physical and psychological fact about that child has changed. So what is the sameness a claim about?',
      detailed:
        'The question is not what makes you distinctive. It is what makes a person at one time numerically identical with a person at another — one thing, not two similar ones.',
      technical:
        'The persistence question asks for necessary and sufficient conditions on diachronic numerical identity for persons, distinct from both the characterisation question and the evidence question.',
    },
    glossaryTerms: [glossaryTermId('personal-identity')],
    related: [topicId('kants-turn'), topicId('locke-and-memory')],
    blocks: [
      {
        id: 'intuition',
        kind: 'prose',
        text: {
          essential:
            'Find your earliest clear memory. You were small, your voice was different, you believed things you would now find embarrassing, and essentially none of the material in your body then is in it now. And yet: that was you. Not someone related to you. You.',
          detailed:
            'The confidence is total and almost nobody has ever examined it. It survives the observation that every ingredient has been replaced, which is strange, because in most other cases replacing every ingredient is exactly what makes something a different thing.',
        },
      },
      {
        id: 'problem',
        kind: 'prose',
        text: {
          essential:
            'So the claim is not about the stuff. It is not about the personality, which has changed. It is not about the beliefs, which have changed. What is left for it to be about?',
          detailed:
            'Notice too that the question is not idle. A great deal rests on it. Promises bind the person who made them. Punishment falls on the person who acted. Anticipating tomorrow only makes sense if the person who wakes will be you. If nothing answers the question, all of that needs a different foundation.',
        },
      },
      {
        id: 'criteria',
        kind: 'visualization',
        visualizationId: visualizationId('identity-over-time'),
      },
      {
        id: 'why-hard',
        kind: 'claim',
        statement: {
          essential:
            'No criterion of personal identity over time is generally accepted, and each of the leading candidates faces a case it handles badly.',
          detailed:
            'Biological criteria have trouble with cases where the psychology goes and the organism remains; psychological criteria have trouble with fission cases, where the criterion delivers two answers where identity requires one; narrative criteria have trouble saying what makes a narrative true rather than merely told. The literature is large and the disagreement is real.',
        },
        evidence: 'open-question',
        references: [referenceId('sep-identity-personal')],
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'A reasonable objection at this point: perhaps the question is artificial. In ordinary life we never have trouble telling who someone is. Why should puzzle cases matter?',
          detailed:
            'The reply is that the puzzle cases are doing diagnostic work. A concept that functions smoothly in familiar conditions can still be incoherent, and the way to find out is to run it in conditions where its parts come apart. That is what the cases are for. Whether they succeed is a further question — and the answer to it decides how much weight the whole movement carries.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Is personal identity something we discover, or something our practices create?',
        whyItMatters: {
          essential:
            'If it is discovered, there is a fact about whether a future person is you, and we might get it wrong. If our practices create it, then the question has no answer beyond how we have decided to treat each other.',
          detailed:
            'The second option is less comfortable than it sounds, because our practices are not arbitrary — they are built around anticipation, commitment and responsibility, which appear to presuppose a fact rather than to constitute one.',
        },
        whatWouldSettleIt: {
          essential:
            'An argument that one of the two pictures is incoherent. Nothing empirical decides it, because both pictures predict exactly the same observations in every ordinary case.',
        },
        references: [referenceId('sep-identity-personal'), referenceId('sep-identity-ethics')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'One answer has been in the background since the last movement. Descartes thought he had found the self by doubting everything else. It is worth seeing what he found.',
        },
      },
    ],
    furtherReading: [referenceId('sep-identity-personal')],
  },

  {
    id: topicId('the-thinking-thing'),
    slug: 'the-thinking-thing',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 107,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The thinking thing',
    subtitle: 'Descartes found something. The dispute is over what.',
    summary: {
      essential:
        'Descartes concluded that he was essentially a thinking thing — a mind, distinct from the body. Almost nobody accepts the conclusion now, and the argument for it is worth seeing in order to see why.',
      detailed:
        'Two separate steps are involved: that thinking is occurring, and that the thinker is a distinct kind of substance. The first is hard to resist; the second is a further argument that most philosophers reject.',
      technical:
        'The real distinction argument turns on the claim that what can be clearly and distinctly conceived apart can exist apart — a modal principle that carries the weight of the dualist conclusion and has been the focus of objection since Arnauld.',
    },
    glossaryTerms: [glossaryTermId('cogito'), glossaryTermId('dualism')],
    related: [topicId('descartes-and-certainty'), topicId('locke-and-memory')],
    blocks: [
      {
        id: 'setup',
        kind: 'prose',
        text: {
          essential:
            'Descartes, having doubted everything he could, asks what the surviving thing is. His answer: a thing that thinks. Doubts, understands, affirms, denies, wills, imagines, senses.',
          detailed:
            'The list is worth noticing. He is not claiming to be a disembodied intellect. Sensing is on the list — what he brackets is whether the sensing corresponds to anything, not whether it occurs.',
        },
      },
      {
        id: 'the-step',
        kind: 'prose',
        text: {
          essential:
            'Then comes the step that most readers accept too quickly. He notices he can conceive of himself existing without a body, but not without thought. From this he concludes that thought is his essence and that mind is a distinct substance from body.',
          detailed:
            'The move relies on a principle: that what can be clearly conceived apart can exist apart. Once you see the principle stated on its own, it looks much less obvious than the conclusion did.',
        },
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Descartes argues that mind and body are really distinct substances, on the grounds that each can be clearly and distinctly conceived without the other.',
          detailed:
            'The argument is given in the Sixth Meditation and depends on the earlier vindication of clear and distinct perception. Descartes also holds that mind and body are intimately united in a person, which is why he treats sensation as a mode of the union rather than of the mind alone.',
        },
        evidence: 'established',
        references: [referenceId('descartes-meditations')],
      },
      {
        id: 'arnauld',
        kind: 'callout',
        tone: 'history',
        title: 'The objection was published with the book',
        text: {
          essential:
            'Antoine Arnauld raised the decisive objection in the Objections printed alongside the Meditations: you can conceive of a right-angled triangle without conceiving the Pythagorean relation, and that does not make the relation separable from the triangle.',
          detailed:
            'The point is that failing to see a connection is not evidence that there is none. Conceivability tracks the limits of your understanding as much as the structure of the thing understood. This objection is still the standard one, and versions of it recur in the consciousness movement, where conceivability arguments are again doing heavy lifting.',
        },
        references: [referenceId('descartes-meditations')],
      },
      {
        id: 'interaction',
        kind: 'prose',
        text: {
          essential:
            'There is a second problem, and Descartes was pressed on it in his own correspondence. If mind and body are entirely different kinds of thing, how does either affect the other?',
          detailed:
            'A decision to raise your arm has to reach the arm. A stubbed toe has to reach the mind. Elisabeth of Bohemia asked Descartes directly how an unextended thing could move an extended one, and his answers did not satisfy her. Most philosophers regard the exchange as the beginning of the end for substance dualism.',
        },
      },
      {
        id: 'what-survives',
        kind: 'prose',
        text: {
          essential:
            'What survives is narrower and more interesting. There is a perspective here. Something it is like to be reading this. Whatever that is, it is not obviously the same kind of thing as the mass of the paper or the wavelength of the light.',
          detailed:
            'You can reject the two-substances picture completely and still face that. The consciousness movement, much later in this lens, is about exactly the residue — and it is worth noticing now that the hardest problem about mind was visible in the seventeenth century and has not moved much.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Does the certainty that thinking is occurring tell you anything about what is doing it?',
        whyItMatters: {
          essential:
            'Descartes assumed that finding the thinking gave him the thinker. If that step fails, his foundation supports less than he built on it — and the self is still missing.',
          detailed:
            'This is the question Hume takes up directly, by proposing to go and look. It is also the question the Buddhist analysis reaches from an entirely different direction, several centuries earlier.',
        },
        whatWouldSettleIt: {
          essential:
            'An argument that thought requires a subject in more than a grammatical sense, or a demonstration that it does not. Both have been attempted; neither has settled it.',
        },
        references: [
          referenceId('sep-descartes-epistemology'),
          referenceId('sep-identity-personal'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Locke thought the self was not a substance at all but a continuity — and put memory at the centre of it.',
        },
      },
    ],
    furtherReading: [referenceId('descartes-meditations')],
  },

  {
    id: topicId('locke-and-memory'),
    slug: 'locke-and-memory',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 108,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'A self made of memory',
    subtitle: 'Locke moved the question from what you are made of to what you can reach.',
    summary: {
      essential:
        'Locke proposed that you are the same person as whoever you can remember being. It was a decisive break with earlier accounts, and it fails in a way that turned out to be productive.',
      detailed:
        'The proposal separates the person from both the body and the soul. That separation has survived; the particular criterion has had to be repaired repeatedly.',
      technical:
        'Locke distinguishes the identity of man (organism), person (forensic term, constituted by consciousness) and substance, and holds that only the second is what moral and legal accountability tracks.',
    },
    glossaryTerms: [
      glossaryTermId('psychological-continuity'),
      glossaryTermId('personal-identity'),
    ],
    related: [topicId('the-thinking-thing'), topicId('humes-bundle')],
    blocks: [
      {
        id: 'move',
        kind: 'prose',
        text: {
          essential:
            'Locke’s move is to stop asking what a person is made of. A person, he says, is a thinking thing that can consider itself as itself, at different times and places. And what makes it the same one over time is that its consciousness reaches back.',
          detailed:
            'This is a striking reframing. The question stops being about substance — body or soul — and becomes about access. You are whoever you can reach from inside.',
        },
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Locke argues that personal identity consists in continuity of consciousness rather than in sameness of body or of immaterial substance.',
          detailed:
            'The argument appears in the chapter on identity and diversity added to the second edition of the Essay in 1694. Locke treats "person" explicitly as a forensic term — one whose function is to attribute actions and their merit — which is why he thinks consciousness rather than substance is the right criterion.',
        },
        evidence: 'established',
        references: [referenceId('locke-essay')],
      },
      {
        id: 'forensic',
        kind: 'prose',
        text: {
          essential:
            'That last point is easy to miss and it changes how the theory should be read. Locke is not primarily asking a metaphysical question. He is asking what a person has to be for punishment and reward to make sense.',
          detailed:
            'On his account, punishing someone for an act they cannot in any way reach from inside is punishing a different person who happens to occupy the same body. That is a strong claim with real consequences, and it is why the responsibility movement later in this lens has to come back to him.',
        },
      },
      {
        id: 'reid',
        kind: 'visualization',
        visualizationId: visualizationId('memory-chain'),
      },
      {
        id: 'objection',
        kind: 'claim',
        statement: {
          essential:
            'Thomas Reid objected that the memory criterion makes identity non-transitive, which is impossible for a relation of identity.',
          detailed:
            'Reid’s case of the boy, the officer and the general shows the criterion delivering that A is B and B is C and A is not C. The standard repair replaces direct memory with overlapping chains of psychological connection, which restores transitivity and is the basis of every contemporary psychological-continuity theory.',
        },
        evidence: 'established',
        references: [referenceId('sep-identity-personal')],
      },
      {
        id: 'circularity',
        kind: 'callout',
        tone: 'caution',
        title: 'A second problem: the criterion may presuppose itself',
        text: {
          essential:
            'Genuine memory is memory of what you yourself did. Merely seeming to remember is not enough. But if the criterion needs *genuine* memory, it has quietly used the identity it was supposed to explain.',
          detailed:
            'Butler raised this early. The usual response is to define a memory-like relation — "quasi-memory" — that carries the content without presupposing identity, and then build the criterion from that. Whether the repaired notion is still doing the work the original was doing is disputed.',
        },
        references: [referenceId('sep-identity-personal')],
      },
      {
        id: 'what-survived',
        kind: 'prose',
        text: {
          essential:
            'What survives Locke is the idea that the self is a pattern of connections rather than a thing. That idea is now nearly the default, and it sets up the next two topics.',
          detailed:
            'Hume takes it further: if the self is nothing but connections, look inward and see whether anything else is there. Parfit takes it further still: if the self is nothing but connections, ask what happens when the connections branch.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'If memory is reconstructive rather than a recording, what is the criterion built on?',
        whyItMatters: {
          essential:
            'Memory is not a stored copy. It is rebuilt at each retrieval and can be altered by the rebuilding. A criterion of identity resting on it inherits that instability.',
          detailed:
            'The philosophical question is whether this matters. One answer: the criterion needs a causal connection of the right kind between past experience and present state, and reconstruction can supply that even when the content is imperfect. Another: if the content can be systematically wrong, a self built from it is a self built on a story.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of which causal relations between past and present states count. The empirical facts about memory are relevant but do not settle which relation matters.',
        },
        references: [referenceId('sep-identity-personal'), referenceId('parfit-reasons-persons')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Hume decided to test the whole thing by the simplest possible method: he went looking for the self, and reported what he found.',
        },
      },
    ],
    furtherReading: [referenceId('locke-essay')],
  },

  {
    id: topicId('humes-bundle'),
    slug: 'humes-bundle',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 109,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Looking for yourself',
    subtitle: 'Hume tried to catch himself, and kept catching something else.',
    summary: {
      essential:
        'Hume reported that whenever he looked inward for the self, he found only a perception — never the thing having it. He concluded that a person is a bundle of perceptions and nothing more.',
      detailed:
        'It is an argument from introspective failure, and arguments of that form have a known weakness. Hume himself was later dissatisfied with his own account, which is worth knowing.',
      technical:
        'The bundle theory denies that there is a simple, numerically identical substance underlying the succession of perceptions, and treats the apparent unity of the mind as produced by relations of resemblance and causation among its contents.',
    },
    glossaryTerms: [glossaryTermId('bundle-theory'), glossaryTermId('personal-identity')],
    related: [topicId('locke-and-memory'), topicId('anatta-non-self')],
    blocks: [
      {
        id: 'experiment',
        kind: 'prose',
        text: {
          essential:
            'Try it. Turn your attention inward and look for the thing that is doing the looking. Not a thought, not a feeling, not a sensation — the one that has them.',
          detailed:
            'Hume reports that he can never catch himself at any time without a perception, and can never observe anything but the perception. Whatever he attends to turns out to be a content rather than a container.',
        },
      },
      {
        id: 'figure',
        kind: 'visualization',
        visualizationId: visualizationId('bundle-search'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Hume argues that introspection reveals only a succession of perceptions and no impression of a simple, continuing self.',
          detailed:
            'The argument in the Treatise runs from his general principle that every idea derives from a prior impression: there is no impression constant and invariable through a life, so there is no idea of a self of that kind. He compares the mind to a theatre while immediately warning that the comparison misleads, since there is no stage the perceptions appear on.',
        },
        evidence: 'established',
        references: [referenceId('hume-treatise')],
      },
      {
        id: 'unity',
        kind: 'prose',
        text: {
          essential:
            'If that is right, the sense of being one continuous person needs an explanation, because it clearly exists. Hume gives one: the perceptions resemble each other and cause each other, and the mind slides along those relations so smoothly that it mistakes a succession for a thing.',
          detailed:
            'The account is of a piece with his treatment of causation and of induction: in each case a strong natural conviction turns out to be produced by the mind’s tendencies rather than read off the world. That consistency is part of what makes it persuasive, and part of what makes it uncomfortable.',
        },
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The obvious objection is that failing to find something is weak evidence that it is not there — especially when the thing you are looking for is the one doing the looking.',
          detailed:
            'Kant makes essentially this reply. A subject of experience would not show up as another item in experience, any more than the eye appears in its own visual field. That the searcher cannot find the searcher is what you would expect on either hypothesis, so the search does not discriminate between them.',
        },
      },
      {
        id: 'honest',
        kind: 'callout',
        tone: 'history',
        title: 'Hume was not satisfied with it either',
        text: {
          essential:
            'In an appendix to the Treatise, Hume writes that on reviewing the section on personal identity he finds himself in a labyrinth and cannot make his account consistent.',
          detailed:
            'He does not say which part fails, and readers have argued about it for two centuries. It is an unusual and creditable thing for a philosopher to publish, and it is worth knowing before treating the bundle theory as Hume’s settled view. He raised the problem more forcefully than he solved it.',
        },
        references: [referenceId('hume-treatise')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'If there is no self to find, what is it that notices the absence?',
        whyItMatters: {
          essential:
            'The report "I looked and found nothing" is itself made from somewhere. Whether that somewhere is a further thing, or just another perception in the bundle, is exactly what is in dispute.',
          detailed:
            'This is not wordplay. It is the sharpest form of the problem, and the fact that it can be stated in one sentence and has resisted answer for three hundred years is informative about how hard the question is.',
        },
        whatWouldSettleIt: {
          essential:
            'An argument that the perspective from which introspection is conducted must be, or need not be, a further item beyond the contents it reports.',
        },
        references: [referenceId('hume-treatise'), referenceId('sep-identity-personal')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'A twentieth-century philosopher asked what would happen to all of this if you could be copied exactly — and used the answer to argue that the question of identity may be less important than everyone assumed.',
        },
      },
    ],
    furtherReading: [referenceId('hume-treatise')],
  },

  {
    id: topicId('parfits-teletransporter'),
    slug: 'parfits-teletransporter',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 110,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The machine that copies you',
    subtitle: 'Parfit’s cases, and why he thought the answer mattered less than the question.',
    summary: {
      essential:
        'Parfit designed cases in which the usual criteria of identity give two answers, or none. His conclusion was that identity is not what we actually care about in survival.',
      detailed:
        'The cases are fictional and the conclusion is contested, but the method is rigorous: change one variable at a time and watch which change moves your answer.',
      technical:
        'Fission cases exploit the fact that psychological continuity is a one-many relation while identity is one-one, forcing either the denial that continuity suffices or the conclusion that identity is not what matters.',
    },
    glossaryTerms: [
      glossaryTermId('thought-experiment'),
      glossaryTermId('psychological-continuity'),
    ],
    related: [topicId('humes-bundle'), topicId('anatta-non-self')],
    blocks: [
      {
        id: 'case',
        kind: 'prose',
        text: {
          essential:
            'A machine scans every cell in your body, transmits the information to Mars, and builds a body there from local matter. The original is destroyed in the scanning. The person who steps out on Mars has all your memories and expects to have arrived.',
          detailed:
            'Asked whether they would use it, people divide sharply and immediately, and both sides find the other’s answer baffling. That division is the data the argument works from.',
        },
      },
      {
        id: 'variants',
        kind: 'visualization',
        visualizationId: visualizationId('teletransporter-branches'),
      },
      {
        id: 'fission',
        kind: 'prose',
        text: {
          essential:
            'The case that does the real work is the branching one. The scan is used twice; two people step out, each with an equal claim. They cannot both be you, since they are two and you are one, and there is no reason to prefer either.',
          detailed:
            'So the options are: neither is you, in which case an extra copy has somehow killed you, which is strange; or one is you and the other is not, with no fact deciding which, which is stranger; or the question of which is you has no answer, and identity is not what the psychological facts settle.',
        },
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Parfit argues that in fission cases personal identity is indeterminate, and concludes that identity is not what matters in survival.',
          detailed:
            'His positive proposal is reductionist: once all the facts about physical and psychological continuity are in, there is no further fact about identity left to discover. What we actually care about — that our memories, projects and relationships continue — is Relation R, and Relation R can hold to two people at once.',
        },
        evidence: 'established',
        references: [referenceId('parfit-reasons-persons')],
      },
      {
        id: 'consequence',
        kind: 'prose',
        text: {
          essential:
            'Parfit took this to be liberating rather than bleak. If what matters is continuity rather than identity, then the boundary between you and other people is less sharp than it looked, and so is the boundary between you and your future.',
          detailed:
            'He drew ethical conclusions from it: less special concern for one’s own future, less weight on desert, more on suffering wherever it occurs. He reports that the view made him less afraid of dying — not as consolation but as something he believed followed from the argument.',
        },
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The strongest objection is that the cases are too far from anything real to license conclusions about the actual concept.',
          detailed:
            'Our concept of a person developed among beings that do not split. Finding that it breaks under duplication may show only that it was not built for duplication — as a concept like "the original manuscript" breaks under perfect copying without telling us anything deep about manuscripts. Defenders reply that a concept which fails in a coherently describable case has a defect, whether or not the case ever occurs.',
        },
      },
      {
        id: 'animalism',
        kind: 'callout',
        tone: 'note',
        title: 'A rival that sidesteps the cases entirely',
        text: {
          essential:
            'Animalists hold that you are an organism, and that you go where the organism goes. On that view the machine simply kills you and makes a replica, and no puzzle arises.',
          detailed:
            'The position is defended seriously and has its own costs — it implies that a person whose psychology is wholly and permanently gone is still there, and that a successful brain transplant would move you nowhere. It is listed here because the psychological tradition can look inevitable when its main rival is left out.',
        },
        references: [referenceId('sep-identity-personal')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'What are you actually afraid of when you are afraid of dying?',
        whyItMatters: {
          essential:
            'If Parfit is right, the fear may be attached to something — an enduring self that persists or ceases — that is not there. If he is wrong, it is attached to exactly what it seems to be.',
          detailed:
            'This is not a rhetorical question, and the lens does not answer it. Parfit thought the argument should change how the prospect feels. Others think that a fear surviving every argument against it may be tracking something the argument has not reached.',
        },
        whatWouldSettleIt: {
          essential:
            'Resolution of the underlying question about whether identity or continuity is what matters — which is exactly what remains open.',
        },
        references: [referenceId('parfit-reasons-persons'), referenceId('sep-identity-ethics')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'A tradition on the other side of the world reached something close to the reductionist conclusion about two thousand years earlier, by a completely different route — and it is routinely misreported in Western accounts.',
        },
      },
    ],
    furtherReading: [referenceId('parfit-reasons-persons')],
  },

  {
    id: topicId('anatta-non-self'),
    slug: 'anatta-non-self',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 111,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Anattā',
    subtitle: 'A conclusion about the self reached by argument, and constantly misreported.',
    summary: {
      essential:
        'Early Buddhist texts argue that no permanent, independent, controlling self is found among the parts of a person. This is not the claim that nothing exists, and the texts reject that reading explicitly.',
      detailed:
        'The argument has a definite structure: take the person apart, apply one test to each part, and note that the test fails everywhere. It is closer to Hume’s procedure than most Western presentations suggest, and it reaches further.',
      technical:
        'The Anattalakkhaṇa Sutta argues from impermanence and lack of control over each of the five aggregates to the conclusion that none is to be regarded as "this is mine, this I am, this is my self".',
    },
    glossaryTerms: [
      glossaryTermId('anatta'),
      glossaryTermId('five-aggregates'),
      glossaryTermId('dependent-origination'),
      glossaryTermId('emptiness-sunyata'),
    ],
    related: [topicId('humes-bundle'), topicId('parfits-teletransporter')],
    blocks: [
      {
        id: 'context',
        kind: 'prose',
        text: {
          essential:
            'The position was formulated against a background that already had a strong theory of the self: an ātman, unchanging, identical with the ultimate ground of things. Anattā is a denial of that, and it is aimed at a specific target.',
          detailed:
            'Knowing the target matters, because "there is no self" read without it sounds like a claim that nothing is there. Read with it, it is the claim that this particular candidate — permanent, independent, in control — is not found.',
        },
      },
      {
        id: 'aggregates',
        kind: 'visualization',
        visualizationId: visualizationId('anatta-aggregates'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'The Anattalakkhaṇa Sutta argues that none of the five aggregates can be the self, because each is impermanent and none can be commanded to be otherwise.',
          detailed:
            'The text applies the same argument five times. For each aggregate it asks whether it is permanent, whether what is impermanent is satisfactory, and whether what is impermanent and unsatisfactory should be regarded as "my self". The test is about control and permanence, not about existence: the aggregates are not said to be unreal.',
        },
        evidence: 'established',
        references: [referenceId('bodhi-2000-connected-discourses')],
      },
      {
        id: 'chariot',
        kind: 'prose',
        text: {
          essential:
            'A later text makes the positive side clear with an image. A chariot is not the wheels, not the axle, not the frame, and not something else in addition to all of them — and yet "chariot" is a perfectly good word and chariots carry people.',
          detailed:
            'The point of the analogy is that being a composite designation rather than an independent essence does not make something unreal or useless. Applied to persons: there are persons, they act, they suffer, they bear consequences. What there is not is a separate owner behind the parts.',
        },
      },
      {
        id: 'not-nihilism',
        kind: 'callout',
        tone: 'misconception',
        title: 'This is not nihilism, and the texts say so',
        text: {
          essential:
            'The claim that nothing at all exists — annihilationism — is explicitly rejected in early Buddhist sources, and treated as an error on a par with belief in a permanent self.',
          detailed:
            'The position is presented as a middle path between eternalism and annihilationism: neither an unchanging self that persists, nor nothing whatsoever. Nāgārjuna is emphatic on the same point centuries later — emptiness means dependent origination, and reading it as "nothing exists" is a misunderstanding he warns against by name. Western summaries that render anattā as "the self is an illusion, so nothing matters" get both halves wrong.',
        },
        references: [referenceId('sep-mind-indian-buddhism'), referenceId('nagarjuna-garfield')],
      },
      {
        id: 'continuity',
        kind: 'prose',
        text: {
          essential:
            'An immediate objection: if there is no persisting self, what connects the person who acts to the person who bears the consequences?',
          detailed:
            'The answer given is causal rather than substantial. One state conditions the next; the connection is real without requiring a thing that travels along it. The standard image is a flame passed from lamp to lamp — the same fire in every sense that matters, without an object making the journey. Whether that is enough to carry moral responsibility is a genuine question, and it is one the responsibility movement in this lens returns to from the Western side.',
        },
      },
      {
        id: 'comparison',
        kind: 'claim',
        statement: {
          essential:
            'The resemblance between anattā and Hume’s bundle theory is often noted, and the two positions are not equivalent.',
          detailed:
            'Both deny a simple persisting self and both attribute the appearance of unity to relations among impermanent states. But Hume presents his as an epistemological result about what introspection finds, while the Buddhist argument is practical in aim: the point is that grasping at a self is a source of suffering, and that seeing through it changes how one lives. Reading either as a restatement of the other loses what each is for.',
        },
        evidence: 'inference',
        references: [referenceId('sep-mind-indian-buddhism'), referenceId('hume-treatise')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'If the sense of being a self is constructed, does seeing that change anything?',
        whyItMatters: {
          essential:
            'The Buddhist tradition claims it does — that the change is the point, and that intellectual assent without it is worth little. Most Western philosophy of personal identity makes no such claim.',
          detailed:
            'The disagreement is about what philosophy is for. If a correct view of the self is supposed to alter how one experiences being one, then arguments are a means and practice is the test. If it is supposed to be true and that is all, then the practical question is a separate matter. Neither position is obviously right.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing that could be settled from outside. What a first-person practice does or does not change is not something an argument establishes, and reports from inside it are exactly the kind of evidence the problem of other minds makes hard to assess.',
        },
        references: [referenceId('sep-mind-indian-buddhism'), referenceId('nagarjuna-garfield')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Set aside whether the self is metaphysically simple. There is a more immediate question about it, and it is one you can check: how much of what you call yourself did you put there?',
        },
      },
    ],
    furtherReading: [referenceId('bodhi-2000-connected-discourses')],
  },
];
