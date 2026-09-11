/**
 * Recaps for Movements X, XI and XII: consciousness, why this person, and
 * meaning.
 *
 * The closing recaps have one extra job. A reader arriving at the end of a
 * fifty-six topic journey is primed to expect a conclusion, and the last few
 * questions here are written so that the correct answer is consistently "the
 * question stayed open" — not as a rhetorical trick, but because that is the
 * accurate answer, and a comprehension check that rewarded a manufactured
 * resolution would undo the lens on its final page.
 */
import type { RecapsByTopic } from '../schema/recap';

export const PHILOSOPHY_MIND_RECAPS: RecapsByTopic = {
  'the-thing-you-cannot-doubt': {
    summary: {
      essential:
        'That there is something it is like to be you is the most certain thing available and the least explained. Most unsolved problems are unsolved for lack of evidence; here the evidence is unavoidable and the problem persists anyway.',
      detailed:
        'A great deal is known about how conscious states correlate with brain activity, and none of it addresses why the processing is accompanied by experience. There is also an asymmetry: direct access to exactly one case, and none to any other.',
    },
    questions: [
      {
        id: 'unusual',
        prompt: 'What makes this different from an ordinary unsolved scientific problem?',
        options: [
          { id: 'a', text: 'That nobody has funded the research properly' },
          {
            id: 'b',
            text: 'That the evidence is unavoidable rather than scarce, and the problem persists anyway',
            correct: true,
          },
          { id: 'c', text: 'That it concerns something non-physical' },
          { id: 'd', text: 'That the brain is too complex to study' },
        ],
        explanation:
          'A physicist lacking data can build a bigger instrument. There is no instrument that helps here, because the difficulty is not a shortage of access to the phenomenon — you have it constantly.',
      },
      {
        id: 'correlates',
        prompt: 'What does the established work on neural correlates of consciousness address?',
        options: [
          { id: 'a', text: 'Why physical processing is accompanied by experience' },
          {
            id: 'b',
            text: 'Which processes track conscious states, without addressing why they are accompanied by any',
            correct: true,
          },
          { id: 'c', text: 'Nothing of scientific value' },
          { id: 'd', text: 'Whether other people are conscious' },
        ],
        explanation:
          'Anaesthesia, lesions, stimulation and integration measures all deliver real results about correlation. The gap between a correlate and an explanation is exactly what the next topic is about.',
      },
    ],
  },

  'the-hard-problem': {
    summary: {
      essential:
        'Chalmers separates explaining what the brain does from explaining why doing it is accompanied by experience. The zombie argument sharpens this by moving from conceivability to possibility, which is where nearly all the resistance concentrates.',
      detailed:
        'The deflationary response denies there is a residue and treats the feeling that there is as something to be explained rather than trusted. Whether the hard problem is genuine or an artefact of how we conceive our own states is unresolved.',
    },
    questions: [
      {
        id: 'easy',
        prompt: 'Why does Chalmers call the other problems "easy"?',
        options: [
          { id: 'a', text: 'Because they are simple to solve' },
          {
            id: 'b',
            text: 'Because we know what an answer would look like — a mechanism performing the function',
            correct: true,
          },
          { id: 'c', text: 'Because neuroscience has already solved them' },
          { id: 'd', text: 'Because they do not concern the brain' },
        ],
        explanation:
          'The term is ironic: each is the work of centuries. The distinction is in the form of an adequate answer, not in difficulty — which is why a complete solution to all of them might leave the hard problem untouched.',
      },
      {
        id: 'zombie',
        prompt: 'What is the main objection to the zombie argument?',
        options: [
          { id: 'a', text: 'That zombies would behave differently from people' },
          {
            id: 'b',
            text: 'That conceivability does not establish possibility — water not being H₂O was once conceivable',
            correct: true,
          },
          { id: 'c', text: 'That no such beings have been observed' },
          { id: 'd', text: 'That the argument assumes dualism' },
        ],
        explanation:
          'Defenders reply that the water case involves an a posteriori identity with an explanation of why it seemed contingent, and that no such explanation is available here. The exchange is highly developed and has not converged.',
      },
      {
        id: 'not-souls',
        prompt: 'What is the hard problem not?',
        options: [
          { id: 'a', text: 'A question about why experience accompanies processing' },
          { id: 'b', text: 'A challenge to purely functional explanations' },
          { id: 'c', text: 'An argument for the existence of a soul', correct: true },
          { id: 'd', text: 'A dispute within a naturalistic picture of the world' },
        ],
        explanation:
          'Almost everyone who takes it seriously is a naturalist, Chalmers included — his own proposal is that experience might be fundamental alongside mass and charge, related to physical processes by psychophysical laws. That is unusual, not supernatural.',
      },
    ],
  },

  'what-mary-didnt-know': {
    summary: {
      essential:
        'Mary has every physical fact about colour vision and has never seen colour. If she learns something on release, physical facts were not all the facts. Four replies attack the premise or the inference.',
      detailed:
        'Jackson, who devised the argument, later rejected its conclusion in favour of a representationalist physicalism — a rare and clean case of a philosopher publishing against their own famous argument.',
    },
    questions: [
      {
        id: 'ability',
        prompt: 'What does the ability reply say Mary gains?',
        options: [
          { id: 'a', text: 'A new physical fact about her own brain' },
          {
            id: 'b',
            text: 'Capacities to recognise, imagine and remember — know-how rather than know-that',
            correct: true,
          },
          { id: 'c', text: 'Nothing whatsoever' },
          { id: 'd', text: 'A new mode of presentation of an old fact' },
        ],
        explanation:
          'It explains the intuition without conceding the conclusion. The objection is that the ability seems to come from something — she can imagine red because she knows what it is like — and "what it is like" looks like a fact.',
      },
      {
        id: 'jackson',
        prompt: 'What happened to Jackson’s own view of the argument?',
        options: [
          { id: 'a', text: 'He defended it for the rest of his career' },
          {
            id: 'b',
            text: 'He later rejected its conclusion and defended a physicalist position',
            correct: true,
          },
          { id: 'c', text: 'He never intended it as an argument' },
          { id: 'd', text: 'He abandoned philosophy' },
        ],
        explanation:
          'His later view is that Mary gains a new representational state rather than access to a non-physical fact. The argument is still discussed on its merits, which is right — but arguments are sometimes treated as if their authors were still behind them.',
      },
    ],
  },

  'other-minds': {
    summary: {
      essential:
        'You have direct access to one mind and infer all the others from behaviour and physiology. The generalisation version rests on a sample of one; the inference-to-best-explanation version is better and still not regarded as fully satisfactory.',
      detailed:
        'The problem stops being academic as soon as the case is unlike you — an octopus, an insect, a patient who cannot respond, a system producing fluent reports about its own states. Whether a creature can suffer decides how it may be treated.',
    },
    questions: [
      {
        id: 'weak-step',
        prompt: 'What is wrong with the argument from analogy for other minds?',
        options: [
          { id: 'a', text: 'Other people might be lying about their experiences' },
          {
            id: 'b',
            text: 'It generalises from exactly one confirmed instance, which would be unacceptable anywhere else',
            correct: true,
          },
          { id: 'c', text: 'Behaviour is not observable' },
          { id: 'd', text: 'It assumes other people are physically similar' },
        ],
        explanation:
          'A sample of one. The better version treats it as inference to the best explanation, which avoids that weakness and requires an account of what makes the mentalistic hypothesis explanatorily superior.',
      },
      {
        id: 'nagel',
        prompt: 'What is Nagel’s point about bats?',
        options: [
          { id: 'a', text: 'That bats are probably not conscious' },
          {
            id: 'b',
            text: 'That an objective description would leave out the point of view, and we have no idea how it could include one',
            correct: true,
          },
          { id: 'c', text: 'That echolocation is a form of vision' },
          { id: 'd', text: 'That we can imagine being a bat with enough effort' },
        ],
        explanation:
          'What you can imagine is what it would be like for you to behave as a bat does, which is not the question. He explicitly presents this as a problem for physicalism to solve rather than as a refutation of it.',
      },
      {
        id: 'stakes',
        prompt: 'Why does this problem have practical stakes?',
        options: [
          {
            id: 'a',
            text: 'Because whether a creature can suffer decides how it may be treated, and that is what cannot be settled from outside',
            correct: true,
          },
          { id: 'b', text: 'Because solipsism would justify treating others badly' },
          { id: 'c', text: 'Because it affects how we diagnose mental illness' },
          { id: 'd', text: 'Because it determines legal personhood' },
        ],
        explanation:
          'The evidence takes us a long way for mammals and birds, less for fish and cephalopods, very little for insects. Where it thins, an enormous amount rides on an inference the philosophical problem says we cannot justify — and the same difficulty is now arriving for artificial systems.',
      },
    ],
  },

  'candidate-answers-on-consciousness': {
    summary: {
      essential:
        'Reductive physicalism, illusionism, mysterianism, property dualism, panpsychism and the formal theories are all live, and each has a difficulty its own defenders acknowledge. Nobody knows.',
      detailed:
        'This is not a case where experts agree and the public has not caught up. The disagreement is at the foundations, which is a genuinely different situation from evolution or the age of the universe.',
    },
    questions: [
      {
        id: 'panpsychism',
        prompt: 'What motivates panpsychism, and what is its central difficulty?',
        options: [
          {
            id: 'a',
            text: 'It avoids experience emerging from things with none; its difficulty is explaining how small experiences combine',
            correct: true,
          },
          { id: 'b', text: 'It is motivated by mysticism and has no difficulties' },
          { id: 'c', text: 'It follows from quantum mechanics and conflicts with relativity' },
          { id: 'd', text: 'It explains the hard problem completely' },
        ],
        explanation:
          'The motivation is structural rather than mystical. The combination problem is regarded by its own proponents as the position’s central unsolved difficulty — which is a mark of honesty in the literature rather than a weakness in the summary.',
      },
      {
        id: 'vital-force',
        prompt: 'What is the objection to the "consciousness is like the vital force" analogy?',
        options: [
          { id: 'a', text: 'That vitalism was never seriously held' },
          {
            id: 'b',
            text: 'That the vital-force case closed because the functions were all there was to explain, which is exactly what is in question here',
            correct: true,
          },
          { id: 'c', text: 'That biology and neuroscience are unrelated' },
          { id: 'd', text: 'That the analogy proves too much' },
        ],
        explanation:
          'The analogy is the argument, and it assumes what the objection denies. Explaining the functions of life left nothing over; critics say explaining the functions of the brain appears to leave the question standing, which is the disanalogy.',
      },
      {
        id: 'state',
        prompt: 'What is the state of expert opinion on consciousness?',
        options: [
          {
            id: 'a',
            text: 'A consensus that physicalism is true, not yet reflected in public opinion',
          },
          { id: 'b', text: 'A consensus that the hard problem is insoluble' },
          {
            id: 'c',
            text: 'Substantial disagreement at the foundations, including about what an answer would look like',
            correct: true,
          },
          { id: 'd', text: 'General agreement that the question is meaningless' },
        ],
        explanation:
          'That makes it genuinely different from evolution or cosmology, where public confusion coexists with scientific consensus. Presenting it as settled in either direction would misrepresent the field.',
      },
    ],
  },

  'why-am-i-this-person': {
    summary: {
      essential:
        'The question dissolves on one reading — there was no you waiting to be assigned a life — and seems to leave a residue on another: that exactly one point of view is the one from which the world is being experienced.',
      detailed:
        'Deflationists compare "why is now now?" and treat the residue as an artefact of indexical language. Others argue the case is different because a point of view is the condition on there being any experience at all. Strangeness is not evidence either way.',
    },
    questions: [
      {
        id: 'dissolve',
        prompt: 'What is the dissolving reply to "why did I get this life?"',
        options: [
          { id: 'a', text: 'That the question is answered by biology' },
          {
            id: 'b',
            text: 'That it presupposes a self waiting to be assigned, when the person is the self',
            correct: true,
          },
          { id: 'c', text: 'That everyone gets the life they deserve' },
          { id: 'd', text: 'That the question is about consciousness rather than identity' },
        ],
        explanation:
          'Every person could ask it and every answer would be "because you are that one". A question yielding the same non-answer for every possible asker is a strong candidate for being malformed — though whether that settles it is what is disputed.',
      },
      {
        id: 'strangeness',
        prompt: 'What does the topic say about the feeling of vertigo the question produces?',
        options: [
          { id: 'a', text: 'That it is evidence the question is deep' },
          { id: 'b', text: 'That it shows the question is confused' },
          {
            id: 'c',
            text: 'That it cannot settle the matter either way, since confused questions produce it too',
            correct: true,
          },
          { id: 'd', text: 'That it is caused by a failure of imagination' },
        ],
        explanation:
          '"Why is now now?" produces the same sensation and is generally agreed to be malformed. Whether the analogy holds for this case is exactly what is at issue, and the feeling of profundity is not a reason to decide.',
      },
    ],
  },

  'does-life-have-a-meaning': {
    summary: {
      essential:
        'One sentence hides three questions: whether the universe assigns a purpose, whether a particular life can be meaningful, and whether meaning is found or made. Separating them removes several apparent disagreements.',
      detailed:
        'The scientific account of human origins answers how we came to exist and not whether that was for anything. Four families of answer about meaning are current and none commands agreement.',
    },
    questions: [
      {
        id: 'three',
        prompt: 'Why does separating the three questions help?',
        options: [
          {
            id: 'a',
            text: 'Because they come apart — one can hold that the universe assigns no purpose and that lives can be meaningful',
            correct: true,
          },
          { id: 'b', text: 'Because only one of them is a real question' },
          { id: 'c', text: 'Because science answers the first two' },
          { id: 'd', text: 'Because the third is a matter of taste' },
        ],
        explanation:
          'Running them together produces the impression that the whole subject is unanswerable. Kept apart, several apparent disagreements turn out to be people answering different questions.',
      },
      {
        id: 'nihilism',
        prompt: 'What is nihilism about meaning?',
        options: [
          { id: 'a', text: 'The feeling that nothing matters' },
          {
            id: 'b',
            text: 'The claim that no life has meaning, defended with arguments',
            correct: true,
          },
          { id: 'c', text: 'Nietzsche’s recommended attitude' },
          { id: 'd', text: 'The view that meaning is subjective' },
        ],
        explanation:
          'A position, not a mood. Someone in despair is not thereby a nihilist and a nihilist is not thereby in despair. Nietzsche diagnosed nihilism as a cultural condition to be overcome rather than recommending it.',
      },
    ],
  },

  'the-absurd': {
    summary: {
      essential:
        'For Camus the absurd is a relation between a human demand for meaning and a world that supplies none. He argues against both suicide and the leap to belief, on the grounds that each removes one term rather than facing the confrontation.',
      detailed:
        'Nagel gives a different account, locating the absurd in the collision between the seriousness with which we live and our capacity to step back from it, and recommends irony rather than defiance.',
    },
    questions: [
      {
        id: 'location',
        prompt: 'Where does Camus locate the absurd?',
        options: [
          { id: 'a', text: 'In the universe, which is meaningless' },
          { id: 'b', text: 'In human beings, who demand too much' },
          {
            id: 'c',
            text: 'In the relation between the demand and the silence, so it cannot be resolved by describing either term better',
            correct: true,
          },
          { id: 'd', text: 'In the failure of religion to provide answers' },
        ],
        explanation:
          'A universe without meaning is not absurd on its own; a creature demanding meaning is not absurd on its own. Locating it in the relation is what makes his rejection of both exits — despair and the leap — consistent.',
      },
      {
        id: 'not-shrug',
        prompt: 'What does Camus conclude from the absurd?',
        options: [
          { id: 'a', text: 'That nothing matters, so one may do as one likes' },
          {
            id: 'b',
            text: 'That it generates commitments — to lucidity, to revolt, to not adding to others’ suffering',
            correct: true,
          },
          { id: 'c', text: 'That one should adopt a religious belief anyway' },
          { id: 'd', text: 'That suicide is the rational response' },
        ],
        explanation:
          'He argued the opposite of the shrug, at length, and broke publicly with those who drew licence from similar premises. His later work argues that recognising the absurd rules out murder rather than permitting it.',
      },
    ],
  },

  'meaning-you-make': {
    summary: {
      essential:
        'If nothing assigns a purpose, one answer is that you define yourself by what you do. Sartre draws responsibility and anguish from this rather than liberation; Beauvoir adds that freedom is situated and depends on the freedom of others.',
      detailed:
        'The thinkers grouped as existentialists disagreed sharply and several rejected the label. Collapsing them into one doctrine loses almost everything, including the disagreements that make the positions testable against each other.',
    },
    questions: [
      {
        id: 'bad-faith',
        prompt: 'What is bad faith?',
        options: [
          { id: 'a', text: 'Lying to other people about your motives' },
          {
            id: 'b',
            text: 'Pretending that a role, a circumstance or a past decided something you decided',
            correct: true,
          },
          { id: 'c', text: 'Believing something without evidence' },
          { id: 'd', text: 'Failing to live up to your own standards' },
        ],
        explanation:
          '"I had no choice" is almost never literally true; usually it means the alternatives were costly. Sartre’s claim is that the pretence is not a mistake about facts but a refusal — and that the refusal is itself a choice.',
      },
      {
        id: 'beauvoir',
        prompt: 'What does Beauvoir add to the existentialist account?',
        options: [
          { id: 'a', text: 'That freedom is an illusion' },
          {
            id: 'b',
            text: 'That freedom is situated and that willing oneself free commits one to willing others free',
            correct: true,
          },
          { id: 'c', text: 'That existence follows essence after all' },
          { id: 'd', text: 'That choices should be made according to rules' },
        ],
        explanation:
          'It supplies the ethics Sartre’s account was accused of lacking, and it insists on facticity — body, history, material conditions — as what freedom operates within. On many readings her version is the more defensible one.',
      },
      {
        id: 'not-school',
        prompt: 'Which of these is true of the existentialists?',
        options: [
          { id: 'a', text: 'They shared a single doctrine about meaning' },
          {
            id: 'b',
            text: 'They disagreed sharply, and several rejected the label',
            correct: true,
          },
          { id: 'c', text: 'They were all atheists' },
          { id: 'd', text: 'They all agreed that morality is subjective' },
        ],
        explanation:
          'Kierkegaard was a Christian for whom the decisive choice was a leap of faith. Heidegger rejected the label. Camus denied being one and fell out with Sartre. The textbook grouping is a convenience, not a description.',
      },
    ],
  },

  'meaning-you-find': {
    summary: {
      essential:
        'Wolf argues that meaning arises where subjective attraction meets objective attractiveness. The account earns its keep on the failure cases — absorption in something worthless, and worth without engagement — that pure subjectivism and pure objectivism each handle badly.',
      detailed:
        'It does not supply a criterion for what is objectively worth engaging with, and Wolf says so. Meaning, happiness and moral goodness are three different things that come apart.',
    },
    questions: [
      {
        id: 'cases',
        prompt: 'What is the main argument for the hybrid view?',
        options: [
          { id: 'a', text: 'That it is more optimistic than the alternatives' },
          {
            id: 'b',
            text: 'That it gets the failure cases right where pure subjectivism and pure objectivism each get one wrong',
            correct: true,
          },
          { id: 'c', text: 'That it follows from the nature of value' },
          { id: 'd', text: 'That most people already believe it' },
        ],
        explanation:
          'Pure subjectivism must accept a life absorbed in memorising phone directories as meaningful; pure objectivism must accept a life of unengaged duty. Matching considered judgements across a range of cases is a reasonable kind of argument for a theory.',
      },
      {
        id: 'distinctions',
        prompt: 'What is the relationship between meaning, happiness and moral goodness?',
        options: [
          { id: 'a', text: 'They are three names for the same thing' },
          {
            id: 'b',
            text: 'They come apart: a life can be meaningful and unhappy, or happy and meaningless, or meaningful and morally unremarkable',
            correct: true,
          },
          { id: 'c', text: 'Meaning is a component of happiness' },
          { id: 'd', text: 'Moral goodness guarantees meaning' },
        ],
        explanation:
          'Someone caring for a dying parent may have great meaning and little pleasure. Treating the three as one thing is a common source of confusion, and it is why Wolf treats meaning as a separate category of reason rather than a branch of ethics.',
      },
    ],
  },

  'death-and-meaning': {
    summary: {
      essential:
        'Epicurus argues death cannot harm you because there is no time at which you exist and are harmed by it. Deprivation accounts locate the harm comparatively and face the symmetry objection from prenatal nonexistence.',
      detailed:
        'The worry that mortality drains significance rests on an unstated premise that nothing counts unless it lasts. That premise is doing all the work and it is not obvious.',
    },
    questions: [
      {
        id: 'epicurus',
        prompt: 'What does the Epicurean argument assume?',
        options: [
          { id: 'a', text: 'That there is no afterlife' },
          { id: 'b', text: 'That a harm needs a subject and a time', correct: true },
          { id: 'c', text: 'That death is instantaneous' },
          { id: 'd', text: 'That pleasure is the only good' },
        ],
        explanation:
          'If that assumption holds, the conclusion follows. Deprivation accounts reject it, locating the harm in the comparative badness of the shorter life rather than in an unpleasant state occurring at a time.',
      },
      {
        id: 'premise',
        prompt: 'What unstated premise is doing the work in "if it all ends, none of it mattered"?',
        options: [
          { id: 'a', text: 'That the universe is indifferent' },
          { id: 'b', text: 'That nothing counts unless it lasts', correct: true },
          { id: 'c', text: 'That people fear death' },
          { id: 'd', text: 'That meaning must be assigned from outside' },
        ],
        explanation:
          'And it is not obvious. A conversation that ends was not worthless while it happened. Nagel adds that from far enough away nothing anyone does looks significant, and it is unclear why that vantage point should be authoritative.',
      },
    ],
  },

  'how-should-a-human-being-live': {
    summary: {
      essential:
        'Several traditions answer seriously — character, the Stoic division of what is in our power, duty, utility, created values, living with the absurd — and each has a cost its critics press. None is offered here as correct.',
      detailed:
        'None of the serious answers is a formula. Aristotle says explicitly that no rule settles particulars, the Stoics teach a practice, Kant gives a test requiring judgement. That may be the shape of the subject rather than an evasion.',
    },
    questions: [
      {
        id: 'formula',
        prompt: 'What do the serious answers have in common?',
        options: [
          { id: 'a', text: 'They all place virtue at the centre' },
          { id: 'b', text: 'They all reject religious accounts' },
          {
            id: 'c',
            text: 'None of them is a formula that could be applied without judgement',
            correct: true,
          },
          { id: 'd', text: 'They all agree in practice while disagreeing in theory' },
        ],
        explanation:
          'If living well were a matter of following a procedure, the procedure could be written down and the question would have closed long ago. That it has not is evidence about what kind of question it is.',
      },
      {
        id: 'stoic-cost',
        prompt: 'What is the standard objection to the Stoic answer?',
        options: [
          { id: 'a', text: 'That it requires suppressing all emotion' },
          {
            id: 'b',
            text: 'That the division between what is and is not in our power can shade into accepting what should be resisted',
            correct: true,
          },
          { id: 'c', text: 'That it is incompatible with having relationships' },
          { id: 'd', text: 'That it depends on a particular theology' },
        ],
        explanation:
          'Stoicism is not the suppression of emotion — that is a modern misreading. The real cost is the political one: a doctrine centred on what you cannot change can become a reason not to try.',
      },
      {
        id: 'recommendation',
        prompt: 'Why does the lens decline to recommend one of these?',
        options: [
          { id: 'a', text: 'Because all views are equally valid' },
          { id: 'b', text: 'Because the question does not matter' },
          {
            id: 'c',
            text: 'Because the reader is the only one in a position to weigh these costs against a particular life',
            correct: true,
          },
          { id: 'd', text: 'Because philosophers have not decided yet' },
        ],
        explanation:
          'Not neutrality for its own sake. The argument throughout has been that these questions are genuinely open and that the confident answers are weaker than they sound — so handing over a doctrine at the end would contradict all of it.',
      },
    ],
  },

  'what-you-are-left-holding': {
    summary: {
      essential:
        'A few things were established — about arguments rather than about the world. Many more stayed open, and were left open deliberately. What transfers is a set of moves: what is being claimed, what would count against it, and whether the disagreement is real.',
      detailed:
        'The other lens on this section answered how we came to be here. Neither lens answers the other’s question, and reading either as competing with the other produces bad science and bad philosophy.',
    },
    questions: [
      {
        id: 'established',
        prompt: 'Which of these was actually established by this lens?',
        options: [
          { id: 'a', text: 'That we do not have free will' },
          { id: 'b', text: 'That morality is not objective' },
          {
            id: 'c',
            text: 'That the Libet experiments do not show what they are commonly said to show',
            correct: true,
          },
          { id: 'd', text: 'That the self is an illusion' },
        ],
        explanation:
          'The results are about arguments, not about the world: that the memory criterion fails transitivity, that the open-question argument is not decisive, that the is–ought gap does not make evidence irrelevant, that "could have done otherwise" has several readings. The other three options are exactly the questions left open.',
      },
      {
        id: 'open',
        prompt: 'What is the honest status of the lens’s central questions?',
        options: [
          { id: 'a', text: 'Answered, but the answers are uncomfortable' },
          { id: 'b', text: 'Meaningless, since the terms cannot be defined' },
          {
            id: 'c',
            text: 'Unresolved among philosophers who have worked on them professionally for decades',
            correct: true,
          },
          { id: 'd', text: 'Awaiting results from neuroscience' },
        ],
        explanation:
          'Surveys find substantial division on free will, moral realism, personal identity and physicalism about mind. In several the largest single position holds well under half the field. That is the actual state of the subject, not a temporary embarrassment.',
      },
      {
        id: 'transfers',
        prompt: 'What is the transferable result of the lens?',
        options: [
          { id: 'a', text: 'A set of positions to adopt' },
          {
            id: 'b',
            text: 'A set of moves: what is being claimed, what would count against it, whether origin is being confused with truth, whether two people are disagreeing or answering different questions',
            correct: true,
          },
          { id: 'c', text: 'The conclusion that certainty is impossible' },
          { id: 'd', text: 'A ranking of the major philosophers' },
        ],
        explanation:
          'None of these is specific to philosophy. They transfer to an argument about policy, a disagreement with someone you love, a claim in a headline — which is what the fifty-five topics before the last one were teaching underneath their particular subjects.',
      },
    ],
  },
};
