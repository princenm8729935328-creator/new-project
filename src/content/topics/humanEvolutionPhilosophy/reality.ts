/**
 * Human Evolution, Philosophical Lens — Movement I: is the world as it seems?
 *
 * The journey has to start somewhere the reader already stands, and everybody
 * stands here: the unexamined confidence that seeing is a kind of contact. This
 * movement does not try to overturn that confidence. It tries to convert it
 * from an assumption into a question, because every later movement — the self,
 * freedom, morality, consciousness — depends on being able to ask whether the
 * obvious thing is the true thing.
 *
 * A note on how claims are handled throughout this lens. A `claim` block here
 * reports what a philosopher argued, not what is true. `established` means the
 * attribution is uncontroversial among people who read the text; `inference`
 * means the reading is defensible but contested; `active-research` means the
 * dispute is live now. Nowhere does a claim block assert that a philosophical
 * position is correct, because that is not something a citation can support.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const PHIL_REALITY_TOPICS: readonly Topic[] = [
  {
    id: topicId('does-the-world-look-the-way-it-is'),
    slug: 'does-the-world-look-the-way-it-is',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 101,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Does the world look the way it is?',
    subtitle: 'You have never once checked.',
    summary: {
      essential:
        'Seeing feels like contact with the world. But between the world and the seeing there is a long chain of transformations, and you have no way to step outside it and compare.',
      detailed:
        'The question is not whether your senses sometimes err — everyone grants that. It is whether the whole apparatus could be systematically unlike what it reports, and what it would even mean to find out.',
      technical:
        'The sceptical structure at issue is not error-theoretic but global: it concerns whether any evidence available from inside a representational system could discriminate between hypotheses about that system’s relation to what it represents.',
    },
    glossaryTerms: [glossaryTermId('epistemology'), glossaryTermId('metaphysics')],
    related: [topicId('platos-cave'), topicId('descartes-and-certainty')],
    blocks: [
      {
        id: 'question',
        kind: 'prose',
        text: {
          essential:
            'Look up from this page. Something is there — a room, a window, a person. You did not infer it. You did not reason your way to it. It arrived complete, and it arrived as the world itself rather than as a picture of the world.',
          detailed:
            'That immediacy is the intuition this movement starts with, and it is worth naming precisely before it is examined. It is not the belief that you are usually right about what you see. It is the much stronger feeling that seeing is not a belief at all — that it is a kind of contact.',
        },
      },
      {
        id: 'intuition',
        kind: 'prose',
        text: {
          essential:
            'Almost nobody walks around thinking they are receiving a reconstruction. The reconstruction, if that is what it is, does not feel like one. That is the first thing to notice: whatever the process is, it hides itself completely.',
          detailed:
            'You do not experience your visual system working, any more than you experience your stomach digesting. The output arrives and the machinery is invisible. This is a fact about the experience, not yet an argument about the world.',
        },
      },
      {
        id: 'chain',
        kind: 'visualization',
        visualizationId: visualizationId('appearance-and-reality'),
      },
      {
        id: 'problem',
        kind: 'prose',
        text: {
          essential:
            'Here is the problem. Every check you could run on your senses is itself a use of your senses. If you doubt what you see, you can look again — with the same eyes. You can ask someone else — and hear their answer with the same ears.',
          detailed:
            'This is what makes the question different from ordinary error-correction. When a thermometer is suspect you check it against a second instrument. There is no second instrument here. There is no position outside experience from which experience could be compared with what it is experience of.',
          technical:
            'The difficulty is structural rather than evidential. Any confirming observation is itself drawn from within the system under test, so no observation can raise the probability of the reliability hypothesis over its rivals without already assuming reliability.',
        },
      },
      {
        id: 'not-paranoia',
        kind: 'callout',
        tone: 'misconception',
        title: 'This is not a claim that your senses are lying',
        text: {
          essential:
            'Philosophers who press this point are not, in general, suggesting that the room is not there. They are asking what the belief that it is there rests on.',
          detailed:
            'It is a common misreading — and it makes the whole tradition look silly. Nobody writing about this stops trusting their eyes when crossing a road. The question is about justification, not about behaviour. A belief can be perfectly reasonable to act on and still be hard to justify when you are asked to say what supports it.',
        },
      },
      {
        id: 'useful-not-accurate',
        kind: 'claim',
        statement: {
          essential:
            'A representation built to be useful is not the same as a representation built to be accurate, and the two can come apart.',
          detailed:
            'This is a point about what any system that samples and processes is doing. A representation is selected — by design or otherwise — for what it lets its user do. Accuracy and usefulness overlap a great deal, which is why the distinction is easy to miss, but they are different properties and nothing guarantees they coincide everywhere.',
        },
        evidence: 'inference',
        references: [referenceId('kant-critique-pure-reason'), referenceId('sep-skepticism')],
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The strongest objection is practical. Our picture of the world lets us predict what will happen, build things that work, and correct each other. Does that not amount to a check?',
          detailed:
            'It is a serious reply. A representation that consistently supports successful prediction is not arbitrary — it is tracking something. The difficulty is saying what it shows. Success tells you the representation is useful for the purposes you have. It does not by itself tell you the representation resembles what it represents, because a systematically distorted map can support flawless navigation as long as the distortion is consistent.',
        },
      },
      {
        id: 'counter',
        kind: 'prose',
        text: {
          essential:
            'And there is a reply to the reply: if a picture supports prediction across every domain we have ever tested, at what point does insisting it might still be wrong stop being a question and start being a pose?',
          detailed:
            'That pressure is real, and it is why very few philosophers are global sceptics. The productive move is not to decide who wins but to notice what the exchange has produced: a question that started out looking like a fact — of course I see the world — has turned into a position that has to be argued for. That is what philosophy does to an intuition.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Could there be a fact about the world that no possible experience could reach?',
        whyItMatters: {
          essential:
            'If yes, then there is a permanent limit on what can be known, and we cannot even survey what lies beyond it. If no, then reality and the knowable coincide — which is a striking claim needing its own defence.',
          detailed:
            'Both answers are costly. The first makes knowledge permanently partial in a way we cannot map. The second says that anything real must in principle be detectable by beings like us, which looks like an extraordinary coincidence unless something explains it.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing observational, by construction. This is a question about the relation between experience and what lies outside it, so no experience is in a position to answer it.',
          detailed:
            'It is settled, if at all, by argument: by showing that the notion of an in-principle undetectable fact is incoherent, or by showing that it is not. Both projects have serious defenders and neither has closed.',
        },
        references: [referenceId('sep-skepticism'), referenceId('kant-critique-pure-reason')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'This question is old. The oldest surviving version of it is a story about people watching shadows — and the story contains an argument that is easy to miss underneath the imagery.',
        },
      },
    ],
    furtherReading: [referenceId('sep-skepticism')],
  },

  {
    id: topicId('platos-cave'),
    slug: 'platos-cave',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 102,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The cave',
    subtitle: 'An image everyone knows, containing an argument most retellings drop.',
    summary: {
      essential:
        'Plato imagines prisoners who have only ever seen shadows and take them for reality. The image is famous. The argument inside it — and the strong objection to that argument — usually goes missing.',
      detailed:
        'The allegory is doing two separate jobs: it makes a distinction vivid, and it makes a claim about which side of the distinction philosophers are on. The second job is the contestable one.',
      technical:
        'The cave functions within the Republic as an illustration of the divided line, mapping degrees of clarity in cognition onto degrees of reality in their objects — a correspondence that is itself a substantive metaphysical commitment.',
    },
    glossaryTerms: [glossaryTermId('metaphysics'), glossaryTermId('epistemology')],
    related: [topicId('does-the-world-look-the-way-it-is'), topicId('kants-turn')],
    blocks: [
      {
        id: 'setup',
        kind: 'prose',
        text: {
          essential:
            'People have been in a cave since birth, facing a wall, unable to turn their heads. Behind them a fire burns, and between the fire and their backs others carry objects whose shadows fall on the wall. The prisoners see the shadows, hear echoes, and name them. That is their world.',
          detailed:
            'The details matter more than the summary usually allows. Nobody is deceiving them. The shadows are genuine shadows of genuine objects. The prisoners are not making a mistake in any ordinary sense — they are reporting accurately on everything available to them.',
        },
      },
      {
        id: 'intuition',
        kind: 'prose',
        text: {
          essential:
            'Reading it, almost everyone identifies with the one who gets out. That reaction is worth catching, because the story gives no reason to think you are that one rather than one of the others.',
        },
      },
      {
        id: 'figure',
        kind: 'visualization',
        visualizationId: visualizationId('platos-cave'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'In the Republic, Plato uses the cave to argue that the world available to the senses stands to genuine reality as shadows stand to objects.',
          detailed:
            'The allegory appears at the opening of Book VII and is explicitly tied to the divided line that precedes it: degrees of clarity in what we grasp track degrees of reality in what is grasped, with the Forms at the top and sensory images at the bottom.',
        },
        evidence: 'established',
        references: [referenceId('plato-republic')],
      },
      {
        id: 'the-argument',
        kind: 'prose',
        text: {
          essential:
            'Strip away the imagery and the argument is this: our ordinary condition might be one in which everything we can check is downstream of something we cannot check. And if it were, nothing from inside would tell us.',
          detailed:
            'That is the part worth keeping regardless of what you think of Plato’s metaphysics. It is a claim about the structure of a possible predicament rather than about Forms, and it survives long after the theory of Forms stops being accepted.',
        },
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The obvious objection: the story is not an argument. It shows what such a predicament would be like if we were in one. It gives no evidence that we are.',
          detailed:
            'Compare: describing in detail what it would be like to be asleep right now does not raise the probability that you are. Vividness is not support. Plato does offer arguments elsewhere for the existence of Forms; the cave is not one of them, and treating the image as though it carried the argument is the standard overreach in retellings.',
        },
      },
      {
        id: 'counter',
        kind: 'prose',
        text: {
          essential:
            'The reply is that the story is not meant as proof but as a demonstration of possibility — and that possibility is enough to make a question of what felt like a fact.',
          detailed:
            'Before the story, "of course I see the world" is not even a claim, because there is no alternative in view. After it, there is an alternative, and the confident sentence becomes something that has to be defended. Making an alternative thinkable is real philosophical work, even though it is not proof.',
        },
      },
      {
        id: 'forms-caution',
        kind: 'callout',
        tone: 'caution',
        title: 'Plato’s own answer is a further claim',
        text: {
          essential:
            'What the prisoner finds outside, in Plato’s telling, is a realm of eternal unchanging Forms. That is a specific metaphysical theory, and it is separable from the cave.',
          detailed:
            'Very few philosophers today accept the theory of Forms. Many still find the cave useful. The two can be pulled apart, and keeping them together is a good way to discard a live question along with a dead answer.',
        },
        references: [referenceId('plato-republic')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'If you were in the cave, is there anything you could notice from inside that would tell you?',
        whyItMatters: {
          essential:
            'If there is, the predicament is detectable and less troubling. If there is nothing, then the situation is one no amount of care could reveal — which changes what "being careful" can accomplish.',
          detailed:
            'This is the question that separates an interesting story from a serious epistemological problem, and it recurs in every later version, from Descartes’s deceiver to contemporary simulation arguments.',
        },
        whatWouldSettleIt: {
          essential:
            'An argument that some feature of experience must differ between the two cases — or a demonstration that no such feature could exist.',
          detailed:
            'Attempts have been made in both directions: coherence-based arguments that a systematically deceptive experience would betray itself, and arguments that any such test would be reproducible inside the deception. Neither has commanded agreement.',
        },
        references: [referenceId('plato-republic'), referenceId('sep-skepticism')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Two thousand years later, someone decided to take the possibility seriously rather than as a story — and to see how much survived if he doubted everything he possibly could.',
        },
      },
    ],
    furtherReading: [referenceId('plato-republic')],
  },

  {
    id: topicId('descartes-and-certainty'),
    slug: 'descartes-and-certainty',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 103,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What survives being doubted',
    subtitle: 'Descartes tried to find the floor by removing everything that was not it.',
    summary: {
      essential:
        'Descartes set out to doubt everything that could conceivably be false, to see whether anything was left. Something was. What exactly it amounts to has been argued about ever since.',
      detailed:
        'The method is more interesting than the conclusion. Doubting in order to find what cannot be doubted is a technique, and it can be applied to things Descartes never applied it to.',
      technical:
        'The Meditations proceed by successively widening the scope of doubt — sensory error, the dream argument, the deceiver hypothesis — until the doubt is self-undermining in exactly one case, which is then used as the foundation for a reconstruction.',
    },
    glossaryTerms: [
      glossaryTermId('methodical-doubt'),
      glossaryTermId('cogito'),
      glossaryTermId('solipsism'),
    ],
    related: [topicId('platos-cave'), topicId('the-thinking-thing')],
    blocks: [
      {
        id: 'question',
        kind: 'prose',
        text: {
          essential:
            'Suppose you wanted to know which of your beliefs were certain — not likely, not well-supported, but impossible to be wrong about. How would you find out?',
          detailed:
            'Descartes’s answer was to attack rather than defend. Rather than looking for reasons in favour of each belief, he looked for any conceivable way it could be false, and set aside everything that had one. What is left at the end, if anything, is certain by construction.',
        },
      },
      {
        id: 'ladder',
        kind: 'visualization',
        visualizationId: visualizationId('doubt-ladder'),
      },
      {
        id: 'dream',
        kind: 'prose',
        text: {
          essential:
            'The turn that does the real work is the dream argument. Descartes notes that he has had vivid dreams he took for waking life, and asks what feature of his present state rules out its being one.',
          detailed:
            'The demand is for a mark — something available now that could not be present in a dream. Vividness will not do; dreams are vivid. Coherence will not do; dreams are coherent while you are in them. Pinching yourself will not do; you can dream a pinch. He concludes there is no such mark, and this removes not only unusual sensory conditions but the ordinary ones as well.',
        },
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Descartes argues in the Meditations that no feature available from inside experience distinguishes waking from dreaming, and that the doubt therefore reaches every belief based on the senses.',
          detailed:
            'The First Meditation moves from sensory error to the dream argument to the hypothesis of a powerful deceiver, each stage reaching a wider class of belief than the last. The deceiver stage extends the doubt beyond the senses to reasoning itself.',
        },
        evidence: 'established',
        references: [referenceId('descartes-meditations')],
      },
      {
        id: 'survivor',
        kind: 'prose',
        text: {
          essential:
            'Then the reversal. Whatever is being deceived must exist in order to be deceived. The doubting cannot doubt itself away.',
          detailed:
            'This is not a clever trick, and it does not depend on the deceiver. Any attempt to think "there is no thinking happening" defeats itself in the act. The point survives even the most extravagant version of the doubt, which is exactly why Descartes built on it.',
        },
      },
      {
        id: 'structure',
        kind: 'visualization',
        visualizationId: visualizationId('cogito-structure'),
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The standing objection is that Descartes claims more than he has earned. What the argument secures is that thinking is occurring. The step to an "I" that does the thinking adds something.',
          detailed:
            'Lichtenberg put it sharply: we say "it is raining" without supposing a rainer. Grammar requires a subject; the weather does not supply one. If the same is true here, then what the doubt cannot reach is a process, not a person — and the persisting self Descartes went on to describe would need a separate argument.',
        },
      },
      {
        id: 'defence',
        kind: 'claim',
        statement: {
          essential:
            'Whether the cogito establishes an enduring subject or only the occurrence of thought is contested, and has been since the seventeenth century.',
          detailed:
            'Defenders argue that a thought without a thinker is not something we can make sense of, and that the objection trades on a grammatical analogy rather than an argument. Critics reply that our inability to make sense of it may be a fact about our concepts rather than about what exists. The dispute is live.',
        },
        evidence: 'active-research',
        references: [
          referenceId('sep-descartes-epistemology'),
          referenceId('descartes-meditations'),
        ],
      },
      {
        id: 'rebuild',
        kind: 'callout',
        tone: 'history',
        title: 'What happened next is the part that did not survive',
        text: {
          essential:
            'Descartes went on to argue from the cogito to God, and from God’s non-deceiving nature back to the reliability of the senses. Almost nobody accepts that reconstruction now.',
          detailed:
            'The argument is widely held to be circular: it uses clear and distinct perception to establish God, and God to validate clear and distinct perception. Critics raised this in the Objections published with the Meditations themselves, and Descartes’s reply has not persuaded many. The method is his lasting contribution; the rebuilding is not.',
        },
        references: [referenceId('descartes-meditations')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Is certainty the right thing to have been looking for?',
        whyItMatters: {
          essential:
            'Descartes assumed that knowledge needs an indubitable foundation. Most philosophy since has doubted that assumption — and if it is wrong, the entire project was aimed at the wrong target.',
          detailed:
            'The alternative is that beliefs support each other in a web rather than resting on a base, so that any of them can be revised while the rest holds. That picture avoids the foundational problem and inherits a different one: what stops a coherent web from being coherently wrong.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of justification that either requires foundations or shows they are unnecessary. The debate between foundationalist and coherentist pictures is centuries old and unresolved.',
        },
        references: [referenceId('sep-skepticism'), referenceId('sep-descartes-epistemology')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Descartes doubted the senses. A century later, Hume found a problem in something that looked much safer: the ordinary expectation that the future will resemble the past.',
        },
      },
    ],
    furtherReading: [referenceId('descartes-meditations')],
  },

  {
    id: topicId('humes-problem'),
    slug: 'humes-problem',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 104,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why do you expect tomorrow?',
    subtitle: 'The most useful inference anyone makes is the hardest one to justify.',
    summary: {
      essential:
        'Every expectation about the future rests on the assumption that the future will resemble the past. Hume asked what justifies that assumption, and found that every answer seems to use it.',
      detailed:
        'This is not a reason to stop making predictions. Hume did not stop. It is a demonstration that a step we take constantly is a step, and that we cannot say what holds it up.',
      technical:
        'The argument is a dilemma: the uniformity principle is either demonstrative, in which case its denial would be contradictory and it is not, or probable, in which case it is supported by inference from experience and the justification is circular.',
    },
    glossaryTerms: [glossaryTermId('induction'), glossaryTermId('epistemology')],
    related: [topicId('descartes-and-certainty'), topicId('kants-turn')],
    blocks: [
      {
        id: 'intuition',
        kind: 'prose',
        text: {
          essential:
            'You are confident the floor will hold when you stand up. You have no doubts about this at all. Why?',
          detailed:
            'The natural answer is: because it always has. Floors of this kind, in buildings of this kind, have held every time anyone has tried. That answer feels not merely adequate but obvious, which is what makes what follows uncomfortable.',
        },
      },
      {
        id: 'gap',
        kind: 'visualization',
        visualizationId: visualizationId('induction-gap'),
      },
      {
        id: 'problem',
        kind: 'prose',
        text: {
          essential:
            'The evidence is entirely about floors that have already been stood on. The conclusion is about one that has not. Nothing in the evidence is about this next case, so something else must be carrying the inference across.',
          detailed:
            'That something is an assumption: that the unobserved resembles the observed, that nature is uniform. Once you see that the assumption is there, the question is what supports it. And the only available support is that it has worked so far — which is an inference from observed cases to unobserved ones, which is the move being justified.',
        },
        depths: ['essential', 'detailed', 'technical'],
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Hume argues that inferences from experience are not founded on reasoning, and that no argument can justify the assumption of uniformity without presupposing it.',
          detailed:
            'The argument appears in the Treatise and in a compressed form in the Enquiry. Hume’s own conclusion is not that we should stop: he holds that the inference is produced by custom and habit, that it is natural and unavoidable, and that this is a psychological explanation rather than a justification.',
        },
        evidence: 'established',
        references: [referenceId('hume-enquiry'), referenceId('hume-treatise')],
      },
      {
        id: 'not-antiscience',
        kind: 'callout',
        tone: 'misconception',
        title: 'This is not an attack on science',
        text: {
          essential:
            'The problem of induction is sometimes deployed as though it showed scientific conclusions to be no better than guesses. It does not, and Hume did not think so.',
          detailed:
            'Everything the argument says about science applies equally to the expectation that food will nourish you and that the floor will hold. It is a completely general point about a completely general inference. A problem that applies to every belief about the future cannot be used to single out one class of them.',
        },
        references: [referenceId('hume-enquiry')],
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'Several replies have been attempted. The best-known is Popper’s: science does not use induction at all, because it never confirms, only refutes.',
          detailed:
            'A theory is proposed, predictions are derived, and failures eliminate it. Nothing is ever established by accumulation. It is an elegant relocation of the problem — and the standard reply is that it relocates rather than solves it, because choosing to rely on a theory that has survived testing is itself a bet that its past survival predicts future performance.',
        },
      },
      {
        id: 'counter',
        kind: 'claim',
        statement: {
          essential: 'No response to the problem of induction is generally accepted as a solution.',
          detailed:
            'Pragmatic vindications, reliabilist accounts, Bayesian reconstructions and the claim that the demand for justification is itself confused have all been developed at length. Each has adherents; none has closed the question. That is the honest state of the field rather than a gap in this account.',
        },
        evidence: 'open-question',
        references: [referenceId('sep-induction-problem')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'If a belief cannot be justified but cannot be given up either, what is its status?',
        whyItMatters: {
          essential:
            'Hume’s answer was that the belief is produced by habit rather than reason, and that this is simply how creatures like us work. That answer has consequences well beyond induction.',
          detailed:
            'If some of our most basic commitments are held for reasons that are not reasons, then the picture of a person as a believer who proportions belief to evidence is wrong at the foundation. The self movement and the free will movement both run into versions of this, which is one reason Hume appears in all three.',
        },
        whatWouldSettleIt: {
          essential:
            'Either a successful justification of induction, or an account of rational belief that does not require one. Both projects are active.',
        },
        references: [referenceId('sep-induction-problem'), referenceId('hume-enquiry')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Kant said reading Hume woke him from a dogmatic slumber. His response was to stop asking how the mind conforms to the world, and ask the question the other way round.',
        },
      },
    ],
    furtherReading: [referenceId('hume-enquiry')],
  },

  {
    id: topicId('kants-turn'),
    slug: 'kants-turn',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 105,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The lens you cannot take off',
    subtitle: 'Kant’s answer, and what it costs.',
    summary: {
      essential:
        'Kant proposed that some features of the world as we experience it — space, time, causation — are contributions our minds make rather than things we find. That would explain why they seem necessary, at the price of putting reality-in-itself out of reach.',
      detailed:
        'It is the most influential response to the sceptical tradition, and the most disputed. What exactly Kant meant by the appearance/thing-in-itself distinction is still argued about by people who have spent careers on it.',
      technical:
        'Transcendental idealism holds that space and time are forms of sensible intuition and the categories conditions of possible experience, so that synthetic a priori knowledge is possible with respect to appearances but not with respect to things as they are in themselves.',
    },
    glossaryTerms: [glossaryTermId('transcendental-idealism'), glossaryTermId('thing-in-itself')],
    related: [topicId('humes-problem'), topicId('does-the-world-look-the-way-it-is')],
    blocks: [
      {
        id: 'question',
        kind: 'prose',
        text: {
          essential:
            'Some things seem impossible to imagine otherwise. An object not located anywhere. An event with no before and after. A change with nothing bringing it about. Where does that impossibility come from?',
          detailed:
            'It cannot come from experience, because experience only ever reports what has happened, never what must. And yet these do not feel like well-supported generalisations. They feel like conditions on anything being a world at all.',
        },
      },
      {
        id: 'reversal',
        kind: 'visualization',
        visualizationId: visualizationId('kants-lens'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Kant argues that space and time are forms of our intuition rather than features we discover, and that certain concepts are conditions of any experience being possible for us.',
          detailed:
            'The Critique of Pure Reason presents this as the only way to explain how synthetic a priori judgements are possible: necessity cannot come from experience, so it must come from the constitution of the experiencing subject. Kant himself called the move a Copernican revolution, reversing the assumed direction of fit between mind and object.',
        },
        evidence: 'established',
        references: [referenceId('kant-critique-pure-reason')],
      },
      {
        id: 'payoff',
        kind: 'prose',
        text: {
          essential:
            'If this is right, the sceptical worry changes shape. There is no longer a gap between the world and our picture of it that our picture might fail to cross, because the world we are talking about is the world as structured for experience.',
          detailed:
            'Hume’s problem is addressed the same way: causation is not a regularity we hope continues, but part of the framework anything must fit to count as an experience at all. That is a genuine answer, and it is why Kant mattered so much. But look at what it costs.',
        },
      },
      {
        id: 'cost',
        kind: 'prose',
        text: {
          essential:
            'The cost is that whatever the world is apart from being experienced by beings like us, we are permanently unable to reach it. Not difficult to reach. Structurally unable.',
          detailed:
            'Kant accepts this and calls it a limit rather than a loss, on the grounds that a question our concepts cannot frame is not a question we were missing an answer to. Whether that is a reassurance or a defeat is one of the things readers divide on.',
        },
      },
      {
        id: 'objection',
        kind: 'claim',
        statement: {
          essential:
            'The standard objection, raised in Kant’s own lifetime, is that the thing in itself is either incoherent or does no work.',
          detailed:
            'If we cannot apply our concepts beyond experience, we cannot say that things in themselves exist, nor that they cause our experience — since existence and causation are among the concepts restricted to appearances. Jacobi pressed the point early: one seems to need the assumption to enter the system and to be forbidden it once inside.',
        },
        evidence: 'established',
        references: [referenceId('sep-kant-transcendental-idealism')],
      },
      {
        id: 'interpretation',
        kind: 'claim',
        statement: {
          essential: 'How to read the distinction is still actively disputed among Kant scholars.',
          detailed:
            'On a "two worlds" reading, appearances and things in themselves are distinct objects. On a "two aspects" reading, they are one set of objects considered in two ways, which softens the objection considerably. Both readings have serious textual support and serious problems, and the dispute is a live area of scholarship rather than a settled matter with a popular error attached.',
        },
        evidence: 'active-research',
        references: [referenceId('sep-kant-transcendental-idealism')],
      },
      {
        id: 'not-relativism',
        kind: 'callout',
        tone: 'misconception',
        title: 'Not "everyone has their own reality"',
        text: {
          essential:
            'Kant is not saying that each person constructs a private world, or that all views are equally valid. The forms he describes are meant to be universal among rational beings, which makes objectivity possible rather than impossible.',
          detailed:
            'On his account, that we share the same forms is exactly what allows us to disagree with each other about a common object, to correct each other, and to be wrong. A relativism in which everyone has their own truth would have no room for any of that. The mind-dependence here is at the level of the species, not the individual.',
        },
        references: [referenceId('kant-critique-pure-reason')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'If the mind contributes the structure of experience, how could we ever examine the contribution?',
        whyItMatters: {
          essential:
            'Any investigation of our own conceptual apparatus is conducted using that apparatus. The lens cannot be inspected from outside, which is the same difficulty the first topic reached by a different route.',
          detailed:
            'The question has a modern descendant. If our cognitive structure has a history — if it was shaped by what our ancestors needed rather than by what is true — then the apparatus is not only unexaminable from outside but contingent. What follows from that is contested, and it returns in the debate about evolutionary debunking arguments in the morality movement.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing observational. It is settled, if at all, by argument about whether a self-examining system can reach its own preconditions.',
        },
        references: [
          referenceId('kant-critique-pure-reason'),
          referenceId('sep-kant-transcendental-idealism'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Every question so far has assumed something: that there is a you doing the asking, the same one throughout. That assumption is the next thing to look at.',
        },
      },
    ],
    furtherReading: [referenceId('kant-critique-pure-reason')],
  },
];
