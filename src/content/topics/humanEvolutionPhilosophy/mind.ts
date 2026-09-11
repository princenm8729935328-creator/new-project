/**
 * Human Evolution, Philosophical Lens — Movements X and XI: consciousness, and
 * why this one.
 *
 * Consciousness is the place where a science-adjacent platform is most tempted
 * to reassure. The temptation runs in both directions: towards "neuroscience
 * will explain it in due course", and towards "science can never touch it".
 * Both are positions in a live dispute, and neither is a result. Every topic
 * here states what is known, what is theorised, and what is contested, and
 * leaves the reader with the dispute rather than a resolution of it.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const PHIL_MIND_TOPICS: readonly Topic[] = [
  {
    id: topicId('the-thing-you-cannot-doubt'),
    slug: 'the-thing-you-cannot-doubt',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 144,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The one thing you cannot doubt',
    subtitle: 'And the one thing nobody can explain.',
    summary: {
      essential:
        'That there is something it is like to be you is the most certain thing available and the least explained. Those two facts about the same thing are the whole subject.',
      detailed:
        'The certainty is first-personal and the explanatory problem is third-personal, and the mismatch between them is what makes this different from every other unsolved scientific question.',
      technical:
        'Phenomenal consciousness is epistemically privileged and explanatorily recalcitrant in a way that access consciousness is not, which is what the easy/hard distinction is designed to mark.',
    },
    glossaryTerms: [glossaryTermId('qualia'), glossaryTermId('metaphysics')],
    related: [topicId('taking-responsibility-forward'), topicId('the-hard-problem')],
    blocks: [
      {
        id: 'certainty',
        kind: 'prose',
        text: {
          essential:
            'Whatever else is doubtful, this is not: there is something it is like to be reading this. Colours look some way. Sounds sound some way. The experience is happening.',
          detailed:
            'This is Descartes’s point arriving again, but with a different emphasis. He used it as a foundation for knowledge. What matters now is not what it supports but what it is — because the thing that cannot be doubted is also the thing that cannot be explained.',
        },
      },
      {
        id: 'contrast',
        kind: 'prose',
        text: {
          essential:
            'Notice how unusual the situation is. Most unsolved problems are unsolved because the evidence is hard to get. Here the evidence is unavoidable — you have it constantly — and the problem persists anyway.',
          detailed:
            'A physicist who lacks data can build a bigger instrument. There is no instrument that would help here. Whatever the difficulty is, it is not a shortage of access to the phenomenon.',
        },
      },
      {
        id: 'what-is-known',
        kind: 'claim',
        statement: {
          essential:
            'A great deal is known about how conscious states correlate with brain activity, and this knowledge has not resolved why there is experience at all.',
          detailed:
            'Anaesthesia reliably abolishes experience; specific lesions abolish specific kinds of experience; stimulation produces specific experiences; measures of cortical integration track conscious level well enough to be clinically useful. All of this is real progress on the correlations, and none of it addresses the question of why any of the processing is accompanied by experience rather than occurring without it.',
        },
        evidence: 'established',
        references: [referenceId('sep-consciousness')],
      },
      {
        id: 'asymmetry',
        kind: 'prose',
        text: {
          essential:
            'There is a further asymmetry. You have direct access to exactly one case, and no access at all to any other. Everything you believe about other people’s experience is inference.',
          detailed:
            'That will matter later in this movement. For now it is enough to notice that the one thing you are most certain of is also the one thing whose existence elsewhere you cannot check — which is an odd shape for a fact to have.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Why is there something it is like to be a person at all?',
        whyItMatters: {
          essential:
            'Every other biological function has an account in terms of what it does and how it came about. Experience has a rich account of the mechanisms and no account of why the mechanisms are accompanied by anything.',
          detailed:
            'The question is not rhetorical and it is not mystical. It is asked most sharply by philosophers who are otherwise thoroughgoing naturalists, and it is answered — differently, and without agreement — by other philosophers who are equally naturalist.',
        },
        whatWouldSettleIt: {
          essential:
            'Not established. There is not even agreement on what an adequate answer would look like, which is itself a symptom of how the problem differs from ordinary scientific ones.',
        },
        references: [referenceId('chalmers-1995-facing-up'), referenceId('sep-consciousness')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'The problem was given its modern name and its sharpest formulation in 1995, and the formulation is worth getting exactly right.',
        },
      },
    ],
    furtherReading: [referenceId('sep-consciousness')],
  },

  {
    id: topicId('the-hard-problem'),
    slug: 'the-hard-problem',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 145,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The hard problem',
    subtitle: 'What makes it different in kind from the difficult problems.',
    summary: {
      essential:
        'Chalmers separates the problems of explaining what the brain does from the problem of explaining why doing it is accompanied by experience. The first are hard; the second may be a different kind of question.',
      detailed:
        'Whether the distinction is genuine is itself the main dispute. Presenting the hard problem as an established fact would be as inaccurate as presenting it as a confusion.',
      technical:
        'The explanatory gap is between functional and structural explanations, which suffice for the easy problems, and phenomenal properties, which appear not to be entailed by any functional or structural description.',
    },
    glossaryTerms: [
      glossaryTermId('hard-problem'),
      glossaryTermId('philosophical-zombie'),
      glossaryTermId('qualia'),
    ],
    related: [topicId('the-thing-you-cannot-doubt'), topicId('what-mary-didnt-know')],
    blocks: [
      {
        id: 'split',
        kind: 'visualization',
        visualizationId: visualizationId('hard-problem-gap'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Chalmers distinguishes the easy problems of consciousness, which concern explaining functions, from the hard problem of explaining why the performance of those functions is accompanied by experience.',
          detailed:
            'He calls the first set easy not because they are simple — they are the work of centuries — but because we know what an answer would look like: specify a mechanism that performs the function. For the hard problem, he argues, specifying such a mechanism leaves the question untouched, because one can always ask why that mechanism is accompanied by experience.',
        },
        evidence: 'established',
        references: [referenceId('chalmers-1995-facing-up')],
      },
      {
        id: 'zombie',
        kind: 'prose',
        text: {
          essential:
            'The sharpest way to put the worry is the zombie argument. Imagine a being physically identical to you, behaving identically, with no inner experience at all. If that is coherent, then experience is not entailed by the physical facts.',
          detailed:
            'Notice how much rests on "coherent". The argument moves from conceivability to metaphysical possibility, and that step is where nearly all the resistance is concentrated. Nothing in the argument claims such beings exist.',
        },
      },
      {
        id: 'zombie-objection',
        kind: 'claim',
        statement: {
          essential:
            'The main objection to the zombie argument is that conceivability does not establish possibility.',
          detailed:
            'It is conceivable, for someone who does not know the chemistry, that water is not H₂O — and it is not possible. Critics argue the zombie case is similar: it seems conceivable because we do not understand the relevant relation, not because there is none. Defenders reply that the water case involves an a posteriori identity with an accompanying explanation of the appearance of contingency, and that no such explanation is available here. The exchange is highly developed and has not converged.',
        },
        evidence: 'active-research',
        references: [referenceId('sep-zombies'), referenceId('chalmers-conscious-mind')],
      },
      {
        id: 'deflation',
        kind: 'prose',
        text: {
          essential:
            'The other main response denies there is a hard problem at all. On this view, once every function is explained, nothing is left over — and the feeling that something is left over is itself something to be explained rather than trusted.',
          detailed:
            'Dennett argues that the residue is generated by an unreliable picture we have of our own states. Illusionists put it more strongly: we are systematically misrepresenting what our experience is like, which is not the claim that nobody feels anything, but the claim that what we think we are pointing at when we say "qualia" is not there.',
        },
      },
      {
        id: 'not-mysticism',
        kind: 'callout',
        tone: 'misconception',
        title: 'The hard problem is not a claim about souls',
        text: {
          essential:
            'Almost everyone who takes the hard problem seriously is a naturalist. The dispute is within a scientific picture of the world, not between one and something else.',
          detailed:
            'Chalmers’s own proposal is that experience might be a fundamental feature alongside mass and charge, with psychophysical laws relating it to physical processes. That is an unusual position, and it is not a supernatural one. Treating the hard problem as the thin end of a religious wedge misreads both the argument and the people making it.',
        },
        references: [referenceId('chalmers-conscious-mind')],
      },
      {
        id: 'state',
        kind: 'claim',
        statement: {
          essential:
            'Whether the hard problem is a genuine problem or an artefact of how we conceive our own states is unresolved.',
          detailed:
            'Surveys of professional philosophers find the field divided on physicalism, on whether zombies are metaphysically possible, and on the prospects for explaining consciousness. Both "it will be solved by neuroscience" and "it can never be solved" are confident predictions about a dispute that has not been settled by argument.',
        },
        evidence: 'open-question',
        references: [referenceId('sep-consciousness')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'What would a satisfying explanation of consciousness even look like?',
        whyItMatters: {
          essential:
            'In most fields there is agreement about the form of an answer before the answer arrives. Here there is not, which may indicate a deep problem or a badly posed question.',
          detailed:
            'Some hold that the demand is for something no explanation could supply — that any explanation will describe structure and function, and the complaint will always be that structure and function are not experience. If that is right, the hard problem is not a problem awaiting solution but a demand that cannot be met, and philosophers divide sharply on whether that is a reason to abandon the demand.',
        },
        whatWouldSettleIt: {
          essential:
            'Agreement on the form of an adequate explanation, which does not currently exist.',
        },
        references: [referenceId('chalmers-1995-facing-up'), referenceId('sep-consciousness')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'One thought experiment has done more than any other to make the gap vivid — and its author later changed his mind about it.',
        },
      },
    ],
    furtherReading: [referenceId('chalmers-1995-facing-up')],
  },

  {
    id: topicId('what-mary-didnt-know'),
    slug: 'what-mary-didnt-know',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 146,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What Mary did not know',
    subtitle: 'The knowledge argument, and four ways of resisting it.',
    summary: {
      essential:
        'Mary knows every physical fact about colour vision and has never seen colour. When she does, does she learn something? If yes, physical facts were not all the facts.',
      detailed:
        'The argument is a single clean step from an intuition, which is why it is so much discussed. Every reply attacks either the intuition or the step.',
      technical:
        'The argument runs: Mary has complete physical knowledge; on release she acquires new knowledge; therefore some knowledge is non-physical. Replies target the second premise or deny that new knowledge entails a new fact.',
    },
    glossaryTerms: [glossaryTermId('knowledge-argument'), glossaryTermId('physicalism')],
    related: [topicId('the-hard-problem'), topicId('other-minds')],
    blocks: [
      {
        id: 'setup',
        kind: 'visualization',
        visualizationId: visualizationId('marys-room'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Jackson argues that a scientist with complete physical knowledge of colour vision who had never seen colour would learn something new on seeing it, and that this shows physicalism is incomplete.',
          detailed:
            'The stipulation is idealised deliberately: Mary has all the physical information there is, not merely all that is currently known. Jackson’s original conclusion was epiphenomenalism — that experiential properties exist and have no causal effects — which is a position few accept and which he later abandoned.',
        },
        evidence: 'established',
        references: [referenceId('jackson-1982-epiphenomenal-qualia')],
      },
      {
        id: 'ability',
        kind: 'prose',
        text: {
          essential:
            'The first reply: what Mary gains is an ability, not a fact. She can now recognise red, imagine it, and remember it. Learning how is not learning that.',
          detailed:
            'This is elegant because it explains the intuition without conceding the conclusion. The objection to it is that the ability seems to come from something — she can now imagine red because she now knows what it is like — and that "what it is like" looks like a fact rather than a skill.',
        },
      },
      {
        id: 'acquaintance',
        kind: 'prose',
        text: {
          essential:
            'The second reply: she learns an old fact in a new way. The same physical fact, encountered through a different mode of access.',
          detailed:
            'Compare knowing that the author of a book is a particular person and then meeting them. Nothing new about the world is learned; a new route to the same fact is acquired. The question is whether modes of presentation are themselves covered by the physical facts, and that is exactly where the dispute reconvenes.',
        },
      },
      {
        id: 'denial',
        kind: 'prose',
        text: {
          essential:
            'The third reply: she learns nothing, and the intuition that she does comes from nobody genuinely imagining complete physical knowledge.',
          detailed:
            'Dennett argues that when we picture Mary we picture someone who has read a lot of neuroscience, not someone who knows literally everything physical — and that we have no idea what the latter would be able to do. It is a blunt reply, and its force is that the thought experiment asks us to have an intuition about a state nobody can occupy.',
        },
      },
      {
        id: 'jackson',
        kind: 'callout',
        tone: 'history',
        title: 'Jackson changed his mind',
        text: {
          essential:
            'The philosopher who devised the argument later rejected its conclusion and defended a physicalist position.',
          detailed:
            'His later view is that the intuition is explained by a representationalist account of experience, on which what Mary gains is a new representational state rather than access to a non-physical fact. The argument continues to be discussed on its own merits regardless of its author’s change of position — which is how it should be, but the biographical fact is worth knowing, because arguments are sometimes treated as if their authors were still behind them.',
        },
        references: [referenceId('jackson-1982-epiphenomenal-qualia')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Is there anything about your own experience that could not be conveyed to someone who has never had it?',
        whyItMatters: {
          essential:
            'If there is, then some knowledge is available only from a particular point of view — which is a strange property for a fact to have, and is what Nagel’s bat argument presses.',
          detailed:
            'The question is not hypothetical for everyone. People who have never had colour vision, or who acquire a sense late, are in something like Mary’s position, and their reports are relevant without being decisive: what someone says about their own experience is exactly the kind of evidence the next topic shows is hard to assess from outside.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of what facts are, on which either perspectival facts are coherent or they are not. This is contested.',
        },
        references: [referenceId('nagel-1974-bat'), referenceId('sep-qualia')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Which raises a question that is easy to state and impossible to answer: how do you know that anyone else is experiencing anything?',
        },
      },
    ],
    furtherReading: [referenceId('jackson-1982-epiphenomenal-qualia')],
  },

  {
    id: topicId('other-minds'),
    slug: 'other-minds',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 147,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Other minds',
    subtitle: 'A belief nobody doubts, resting on a step nobody can justify.',
    summary: {
      essential:
        'You have direct access to one mind. Everything you believe about every other mind is inference from behaviour and physiology. The inference is hard to justify and impossible to abandon.',
      detailed:
        'The problem stops being academic as soon as the case is unlike you — an octopus, an insect, a patient who cannot respond, a system that produces fluent reports.',
      technical:
        'The argument from analogy generalises from a single confirmed instance; inference-to-best-explanation versions avoid that weakness but require an account of what makes the mentalistic hypothesis explanatorily superior.',
    },
    glossaryTerms: [glossaryTermId('problem-of-other-minds'), glossaryTermId('solipsism')],
    related: [topicId('what-mary-didnt-know'), topicId('candidate-answers-on-consciousness')],
    blocks: [
      {
        id: 'inference',
        kind: 'visualization',
        visualizationId: visualizationId('other-minds-inference'),
      },
      {
        id: 'problem',
        kind: 'prose',
        text: {
          essential:
            'The classic version is a generalisation from one case: in me, this feeling accompanies this behaviour; others behave this way; therefore others feel this way. Generalising from a sample of one would be unacceptable anywhere else.',
          detailed:
            'The better version treats it as inference to the best explanation rather than generalisation. Given everything people do — including what they say about their own states, and how those reports change under injury and anaesthesia — the hypothesis that they have inner lives explains far more than the alternative. Most philosophers find this adequate.',
        },
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'No account of how we know other minds exist is generally regarded as fully satisfactory, though the belief is not seriously doubted.',
          detailed:
            'Analogical, explanatory, criterial and direct-perception accounts have all been developed. Each faces objections, and the problem is unusual in that its difficulty is entirely disproportionate to anyone’s actual uncertainty. That mismatch is itself philosophically interesting: it suggests the belief may not be held on the basis of an argument at all.',
        },
        evidence: 'open-question',
        references: [referenceId('sep-other-minds')],
      },
      {
        id: 'bats',
        kind: 'prose',
        text: {
          essential:
            'Nagel sharpens it by choosing a case where the similarity runs out. A bat navigates by echolocation. There is presumably something it is like to be one. You cannot get at it by imagining yourself with wings.',
          detailed:
            'What you can imagine is what it would be like for you to behave as a bat does. That is not the question. The question is what it is like for the bat, and Nagel’s point is that our imaginative resources are built from our own experience and so cannot reach a sufficiently different one.',
        },
      },
      {
        id: 'nagel',
        kind: 'claim',
        statement: {
          essential:
            'Nagel argues that an organism has conscious experience if there is something it is like to be it, and that this subjective character resists capture by objective description.',
          detailed:
            'His claim is not that we cannot know that bats are conscious. It is that a complete objective account of a bat would leave out the point of view, and that we currently have no idea how an objective account could include one. He explicitly presents this as a problem for physicalism to solve rather than as a refutation of it.',
        },
        evidence: 'established',
        references: [referenceId('nagel-1974-bat')],
      },
      {
        id: 'stakes',
        kind: 'prose',
        text: {
          essential:
            'This is where the problem gets practical. Whether a creature can suffer decides how it may be treated — and the question of which creatures can suffer is exactly the one we cannot settle from outside.',
          detailed:
            'The behavioural and physiological evidence takes us a long way for mammals and birds, less far for fish and cephalopods, and very little distance for insects. Where the evidence thins, an enormous amount rides on an inference the philosophical problem says we cannot justify. The same difficulty is now arriving for artificial systems that produce fluent reports about their own states, and nothing in the literature supplies a test.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Is there any test that could distinguish a system that has experiences from one that only behaves as if it does?',
        whyItMatters: {
          essential:
            'Without such a test, questions about which animals matter morally, and about what we are building, have no principled answer — only a judgement about similarity.',
          detailed:
            'Proposed markers exist: measures of information integration, global availability of information across a system, flexible behaviour that is not explicable by fixed responses. Each is contested, and each faces the objection that it identifies a correlate of consciousness in the one case we know about rather than a criterion for consciousness as such.',
        },
        whatWouldSettleIt: {
          essential:
            'A theory of consciousness that explains why a particular property is sufficient for experience — which requires the hard problem to have been addressed first.',
        },
        references: [referenceId('sep-other-minds'), referenceId('nagel-1974-bat')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Given all of this, what positions are actually on the table? It is worth laying them out without pretending one has won.',
        },
      },
    ],
    furtherReading: [referenceId('nagel-1974-bat')],
  },

  {
    id: topicId('candidate-answers-on-consciousness'),
    slug: 'candidate-answers-on-consciousness',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 148,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The options, none of them settled',
    subtitle: 'Six positions, each with defenders and each with a serious cost.',
    summary: {
      essential:
        'Reductive physicalism, illusionism, mysterianism, property dualism, panpsychism, and the formal theories. Every one has a difficulty its defenders acknowledge.',
      detailed:
        'Laying them out side by side is more useful than defending one, because the shape of the disagreement is itself the most informative thing available.',
      technical:
        'The positions differ on two independent questions: whether everything is physical, and whether the explanatory gap marks a real feature of the world or a feature of our concepts.',
    },
    glossaryTerms: [
      glossaryTermId('physicalism'),
      glossaryTermId('dualism'),
      glossaryTermId('panpsychism'),
      glossaryTermId('illusionism'),
      glossaryTermId('functionalism'),
    ],
    related: [topicId('other-minds'), topicId('why-am-i-this-person')],
    blocks: [
      {
        id: 'map',
        kind: 'visualization',
        visualizationId: visualizationId('consciousness-positions'),
      },
      {
        id: 'physicalism',
        kind: 'prose',
        text: {
          essential:
            'The majority position is that experience is a physical process we do not yet understand, and that the gap will close as neuroscience matures — as the mystery of life closed without needing a vital force.',
          detailed:
            'The analogy is the argument, and it is also where the objection lands. The vital-force case closed because the functions of life turned out to be all there was to explain. Critics say the consciousness case is different precisely because explaining the functions seems to leave the question standing — which is what the analogy would need to rule out and cannot.',
        },
      },
      {
        id: 'searle',
        kind: 'claim',
        statement: {
          essential:
            'Searle argues with the Chinese Room that executing a program is not sufficient for understanding.',
          detailed:
            'A person following symbol-manipulation rules could produce appropriate Chinese responses without understanding Chinese; Searle concludes that syntax is not sufficient for semantics. The systems reply — that the whole system understands even if the person does not — is the standard response, and Searle’s counter is that the person could internalise the whole system and still not understand. The argument remains one of the most discussed in philosophy of mind and is not regarded as settled either way.',
        },
        evidence: 'active-research',
        references: [referenceId('searle-1980-minds-brains-programs')],
      },
      {
        id: 'panpsychism',
        kind: 'prose',
        text: {
          essential:
            'Panpsychism is worth taking seriously precisely because it sounds absurd. The motivation is not mysticism but a structural problem: if experience is not fundamental, it has to emerge from things with none, and nobody can say how.',
          detailed:
            'Making it basic removes that difficulty and immediately creates another. If tiny bits of matter have tiny bits of experience, how do they combine into a unified experience of a scene? The combination problem is regarded by its own proponents as the position’s central unsolved difficulty, which is a mark of intellectual honesty in the literature rather than a weakness in the summary.',
        },
      },
      {
        id: 'theories',
        kind: 'claim',
        statement: {
          essential:
            'Several formal theories of consciousness are under active development and disagree with one another about which systems are conscious.',
          detailed:
            'Integrated information theory identifies consciousness with a measure of how much a system’s causal structure is irreducible to its parts; global workspace theories identify it with information being broadly available across a system; higher-order theories with a state being represented by another state. These make different predictions about split-brain patients, about simple systems and about artificial ones. Adversarial collaborations have been run to test between them, and the results have narrowed rather than settled the field.',
        },
        evidence: 'active-research',
        references: [referenceId('sep-consciousness')],
      },
      {
        id: 'honest',
        kind: 'callout',
        tone: 'caution',
        title: 'Nobody knows',
        text: {
          essential:
            'This is not a case where the experts agree and the public has not caught up. The experts disagree, and the disagreement is at the foundations.',
          detailed:
            'That is a genuinely different situation from, say, evolution or the age of the universe, where public confusion coexists with scientific consensus. Presenting consciousness as similarly settled — in either direction — would misrepresent the state of knowledge, and this platform does not do that in the Scientific Lens either.',
        },
        references: [referenceId('sep-consciousness')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Is consciousness the kind of thing that has an explanation?',
        whyItMatters: {
          essential:
            'Every position here assumes it does, apart from mysterianism, which holds that our minds are the wrong shape for the answer.',
          detailed:
            'Mysterianism is unsatisfying and not obviously false. We accept that other animals have cognitive limits that are invisible from inside; there is no argument that we have none. But the position is also unfalsifiable and does no work, which is why most philosophers treat it as a last resort rather than a proposal.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing currently imaginable. The absence of an agreed criterion for success is the deepest feature of this problem.',
        },
        references: [referenceId('sep-consciousness'), referenceId('chalmers-conscious-mind')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'One question remains that belongs to no movement so far, and it is the strangest one in the lens.',
        },
      },
    ],
    furtherReading: [referenceId('sep-consciousness')],
  },

  {
    id: topicId('why-am-i-this-person'),
    slug: 'why-am-i-this-person',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 149,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why am I this one?',
    subtitle: 'Of all the people there are, one of them is being experienced from inside.',
    summary: {
      essential:
        'There are billions of people. One of them is you — not from the outside, but in the sense that this one is the one you are looking out of. Whether that is a fact needing explanation is disputed.',
      detailed:
        'The question either dissolves under analysis or leaves a residue, and which of those is true is not obvious even to people who have thought about it carefully.',
      technical:
        'The question concerns whether there is an indexical fact — that this person is the subject — over and above the impersonal facts about which persons exist and what each is like.',
    },
    glossaryTerms: [glossaryTermId('personal-identity'), glossaryTermId('qualia')],
    related: [topicId('candidate-answers-on-consciousness'), topicId('does-life-have-a-meaning')],
    blocks: [
      {
        id: 'strangeness',
        kind: 'prose',
        text: {
          essential:
            'Sit with it for a moment. There are billions of people, each with a complete inner life, each as detailed as yours. And out of all of them, this one is the one you are inside.',
          detailed:
            'The feeling of strangeness usually arrives before any clear question does, which is a sign that the question needs to be stated carefully before it can be assessed.',
        },
      },
      {
        id: 'readings',
        kind: 'visualization',
        visualizationId: visualizationId('this-person-question'),
      },
      {
        id: 'dissolve',
        kind: 'prose',
        text: {
          essential:
            'Here is the dissolving reply. There was no you waiting to be assigned. The person is not a container that a self was placed into; the person *is* the self. Asking why you got this one presupposes a lottery that never took place.',
          detailed:
            'And the reply has real force. Every person can ask the question and every answer would be "because you are that one", which is either trivially true or not an answer. A question that yields the same non-answer for every possible asker is a good candidate for being malformed.',
        },
      },
      {
        id: 'residue',
        kind: 'prose',
        text: {
          essential:
            'And yet something seems to survive. It is true of every person that they are an "I" to themselves. It is also true that exactly one of them is the one from which the world is being experienced right now.',
          detailed:
            'The dissolving reply handles the first. Whether it handles the second is what is at issue. Those who think it does not argue that a complete impersonal description of the world — every person, every experience, every point of view — would leave out which one is happening here, and that is a strange thing for a complete description to leave out.',
        },
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'Whether there is a genuine further fact about which person is the subject of experience, beyond the impersonal facts, is disputed.',
          detailed:
            'Deflationists hold that the apparent residue is an artefact of indexical language — "here" and "now" behave the same way, and nobody thinks there is a mysterious fact about which place is here. Others argue that the case is different because the point of view is not merely a position but the condition on there being any experience at all. Nagel treats the question as a real one connected to the mind-body problem; Parfit’s reductionism pushes the other way.',
        },
        evidence: 'open-question',
        references: [referenceId('nagel-mortal-questions'), referenceId('parfit-reasons-persons')],
      },
      {
        id: 'careful',
        kind: 'callout',
        tone: 'caution',
        title: 'Strangeness is not evidence',
        text: {
          essential:
            'That a question feels vertiginous does not show it is deep. Plenty of confused questions feel exactly like this one.',
          detailed:
            '"Why is now now?" produces the same sensation and is generally agreed to be malformed. The honest position is that the analogy may or may not hold, and that the feeling of profundity cannot be used to decide. This is one of the places where the lens has least to offer by way of resolution, and saying so is better than manufacturing one.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Would a complete description of the universe include the fact that this person is the one experiencing it?',
        whyItMatters: {
          essential:
            'If it would, then there is a fact of a kind physics does not traffic in. If it would not, then something that seems obviously true is not a fact at all.',
          detailed:
            'This connects directly to the hard problem. Both are questions about whether an impersonal, structural description of the world leaves something out, and someone’s answer to one tends to constrain their answer to the other.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of indexical facts that either accommodates or eliminates the apparent residue. Both projects are pursued and neither has ended.',
        },
        references: [referenceId('nagel-mortal-questions'), referenceId('sep-identity-personal')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'This one, then, and one life in it. The last movement asks what that life is for — and whether the question has an answer.',
        },
      },
    ],
    furtherReading: [referenceId('nagel-mortal-questions')],
  },
];
