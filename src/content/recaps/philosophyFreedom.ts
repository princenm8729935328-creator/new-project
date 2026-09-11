/**
 * Recaps for Movements III and IV: conditioning, and free will.
 *
 * The distractors in this file are doing more work than usual, because this is
 * where the tempting wrong answers are most tempting. "Therefore the
 * environment determines everything", "therefore neuroscience has disproved
 * free will", "quantum randomness gives us freedom" — each of these is a real
 * position readers arrive with, and each appears here as an option so that
 * choosing it produces an explanation rather than passing unnoticed.
 */
import type { RecapsByTopic } from '../schema/recap';

export const PHILOSOPHY_FREEDOM_RECAPS: RecapsByTopic = {
  'did-i-choose-who-i-became': {
    summary: {
      essential:
        'You decide using your values, temperament and judgement — and none of those was selected, because the apparatus was running before there was anyone there to install it. That is an observation about ordering, not yet a conclusion about freedom.',
      detailed:
        'Whether a desire counts as genuinely the agent’s own, given that it has causes the agent did not control, is a central and unresolved problem. Procedural accounts answer in terms of reflective endorsement and face the manipulation case; substantive accounts add conditions and have to justify them.',
    },
    questions: [
      {
        id: 'scope',
        prompt: 'What has actually been established at this point?',
        options: [
          { id: 'a', text: 'That your choices are not really yours' },
          { id: 'b', text: 'That the environment determines everything about a person' },
          {
            id: 'c',
            text: 'That the standards you decide by were not themselves decided on',
            correct: true,
          },
          { id: 'd', text: 'That effort makes no difference to how a life goes' },
        ],
        explanation:
          'Only the narrow claim. It is compatible with decisions being genuinely yours, with effort mattering, and with people changing. The stronger conclusions require an additional premise about what ownership demands, which has not been supplied.',
      },
      {
        id: 'regress',
        prompt: 'Why does reflective endorsement not obviously settle the question of ownership?',
        options: [
          {
            id: 'a',
            text: 'Because the endorsing is done by a person with a temperament and history they also did not choose',
            correct: true,
          },
          { id: 'b', text: 'Because most people never reflect on their values' },
          { id: 'c', text: 'Because endorsement is a feeling rather than a judgement' },
          { id: 'd', text: 'Because values cannot be put into words' },
        ],
        explanation:
          'Someone raised to defer endorses differently from someone raised to argue. If the endorsement is as inherited as the thing endorsed, it is unclear how it confers ownership — which is the regress the Basic Argument later formalises.',
      },
    ],
  },

  'accident-of-birth': {
    summary: {
      essential:
        'Century, country, family and body are fixed before the person exists, and they shape a life profoundly. Rawls argues this distribution is arbitrary from a moral point of view — a premise in an argument about justice, which has been disputed.',
      detailed:
        'The objection is that desert applies to what you do with your start rather than to the start itself. The reply is that whatever produced the difference in what people do is also unchosen, which is the regress arriving from a different direction.',
    },
    questions: [
      {
        id: 'rawls',
        prompt: 'What is Rawls’s claim about natural talents and social starting positions?',
        options: [
          { id: 'a', text: 'That they are unfair and should be equalised' },
          {
            id: 'b',
            text: 'That they are arbitrary from a moral point of view, so a theory of justice should not let them determine shares',
            correct: true,
          },
          { id: 'c', text: 'That they do not really affect how a life goes' },
          { id: 'd', text: 'That people deserve whatever their talents produce' },
        ],
        explanation:
          'It is a premise in an argument about the basic structure of society, not a complaint about the world. Nozick disputed it by arguing that people can be entitled to what they have without deserving the talents that produced it — a distinction worth keeping.',
      },
      {
        id: 'overstate',
        prompt: 'Which of these does the topic explicitly refuse to claim?',
        options: [
          { id: 'a', text: 'That starting conditions substantially shape a life' },
          { id: 'b', text: 'That nobody chose their starting conditions' },
          { id: 'c', text: 'That starting conditions determine outcomes', correct: true },
          { id: 'd', text: 'That judgements of desert are affected by this' },
        ],
        explanation:
          'People move, change and diverge from where they began. The philosophical point needs only substantial contribution plus non-choice, and overstating it into fatalism is both false and self-defeating, since it removes the agency the argument is trying to locate.',
      },
    ],
  },

  'beliefs-you-did-not-examine': {
    summary: {
      essential:
        'Most convictions arrived rather than were concluded, and arriving feels identical to concluding from inside. That undermines the introspective test, and it does not show any particular belief is false.',
      detailed:
        'Running origin and truth together is the genetic fallacy. The live question is a narrower one about defeaters: whether learning that a belief was produced by a process insensitive to truth can lower confidence without showing the belief false.',
    },
    questions: [
      {
        id: 'fallacy',
        prompt:
          'Someone says: "You only believe that because of how you were raised, so it is false." What is wrong with the argument?',
        options: [
          { id: 'a', text: 'Nothing — upbringing is unreliable' },
          {
            id: 'b',
            text: 'It confuses where a belief came from with whether it is true',
            correct: true,
          },
          { id: 'c', text: 'Upbringing has no effect on adult beliefs' },
          { id: 'd', text: 'It assumes people can examine their own beliefs' },
        ],
        explanation:
          'You inherited your first language too, and your sentences in it are not thereby false. The genetic fallacy is treating the origin as the verdict. A belief’s history bears on how confident you are entitled to be, not directly on its truth.',
      },
      {
        id: 'introspection',
        prompt: 'What does the experimental work on self-report contribute here?',
        options: [
          { id: 'a', text: 'It shows that reasoning never happens' },
          {
            id: 'b',
            text: 'It shows that the feeling of having reasoned is not a reliable indicator of having reasoned',
            correct: true,
          },
          { id: 'c', text: 'It shows that all beliefs are inherited' },
          { id: 'd', text: 'It shows that introspection is impossible' },
        ],
        explanation:
          'Nisbett and Wilson found confident explanations that did not match the manipulated cause. That is enough for the argument here — the internal indicator is unreliable — and no more than the studies support.',
      },
    ],
  },

  'influence-and-authorship': {
    summary: {
      essential:
        'The slide from "shaped by unchosen factors" to "nothing is mine" needs a premise about what ownership requires, and that premise is exactly what compatibilists reject. Noticing the unstated step is the work of this topic.',
      detailed:
        'The language analogy makes the point: the vocabulary and grammar are entirely inherited and the sentence is still yours. Whether the analogy survives pressure is the open part, since the capacity for arrangement was also given.',
    },
    questions: [
      {
        id: 'step',
        prompt: 'Where exactly does the slide happen?',
        options: [
          { id: 'a', text: 'At the claim that values come from upbringing' },
          { id: 'b', text: 'At the claim that upbringing is not chosen' },
          {
            id: 'c',
            text: 'At the unstated move from "came from somewhere unchosen" to "not mine"',
            correct: true,
          },
          { id: 'd', text: 'At the claim that people have values at all' },
        ],
        explanation:
          'The first two steps are observations. The third is a claim about what ownership requires, smuggled in without being stated. Making it explicit is what turns a feeling of resignation back into a question that can be argued about.',
      },
      {
        id: 'conclusion',
        prompt: 'What does this movement conclude?',
        options: [
          { id: 'a', text: 'That the environment determines everything' },
          { id: 'b', text: 'That authorship is secured by reflection' },
          {
            id: 'c',
            text: 'That the question of authorship is open, not answered in the negative',
            correct: true,
          },
          { id: 'd', text: 'That the question is meaningless' },
        ],
        explanation:
          'The negative conclusion is comfortable because it converts a hard question into a settled verdict and removes the need to think further. It is also unsupported by anything the movement establishes.',
      },
    ],
  },

  'authoring-a-belief': {
    summary: {
      essential:
        'A procedural account of ownership — stating a belief, meeting the best objection, having revised under pressure — describes something real without showing it amounts to authorship in the deep sense. The examining is done by a person who was also assembled.',
      detailed:
        'Frankfurt’s hierarchical account locates ownership in agreement between what one wants and what one wants to want. The manipulation case is the standard difficulty: an agent engineered to endorse exactly what they were built to want satisfies every procedural condition.',
    },
    questions: [
      {
        id: 'frankfurt',
        prompt: 'What distinguishes Frankfurt’s unwilling addict from his willing one?',
        options: [
          { id: 'a', text: 'The unwilling addict takes a smaller dose' },
          {
            id: 'b',
            text: 'The unwilling addict does not want to want the drug; the behaviour can be identical',
            correct: true,
          },
          { id: 'c', text: 'The willing addict could stop if they tried' },
          { id: 'd', text: 'The unwilling addict is physically coerced' },
        ],
        explanation:
          'The behaviour is the same and the hierarchical structure differs. Frankfurt argues that is where freedom of the will lies — in agreement between first-order desire and second-order endorsement rather than in anything observable from outside.',
      },
      {
        id: 'manipulation',
        prompt: 'Why is the manipulation case a problem for procedural accounts?',
        options: [
          {
            id: 'a',
            text: 'Because the engineered agent satisfies every procedural condition while seeming unfree',
            correct: true,
          },
          { id: 'b', text: 'Because manipulation is physically impossible' },
          { id: 'c', text: 'Because manipulated agents behave differently' },
          { id: 'd', text: 'Because it assumes determinism is true' },
        ],
        explanation:
          'The procedure is precisely what was engineered, so no amount of the procedure can distinguish the cases. That is why some compatibilists add a historical condition and others deny the intuition — and why neither response has become standard.',
      },
    ],
  },

  'the-feeling-of-choosing': {
    summary: {
      essential:
        'Deliberating presents itself as standing at a fork with roads genuinely open. At least two hypotheses produce exactly that experience, so nothing in the experience discriminates between them.',
      detailed:
        '"I could have done otherwise" has several readings, and determinism is incompatible with only the categorical one. Much apparent disagreement about free will is disagreement about which reading is in play.',
    },
    questions: [
      {
        id: 'readings',
        prompt: 'Which reading of "I could have done otherwise" is ruled out by determinism?',
        options: [
          { id: 'a', text: 'Nobody was physically preventing me' },
          { id: 'b', text: 'I would have acted differently had I wanted to' },
          {
            id: 'c',
            text: 'With the past and the laws held exactly fixed, more than one future was available',
            correct: true,
          },
          { id: 'd', text: 'My reasoning was functioning normally' },
        ],
        explanation:
          'The first three readings survive determinism untouched; only the categorical one does not. Noticing which reading someone means is usually the fastest way to find out whether a free will disagreement is real.',
      },
      {
        id: 'introspection',
        prompt: 'What does the experience of deliberating establish?',
        options: [
          { id: 'a', text: 'That more than one future was genuinely open' },
          { id: 'b', text: 'That the outcome was already fixed' },
          {
            id: 'c',
            text: 'Nothing about which, since both hypotheses predict the same experience',
            correct: true,
          },
          { id: 'd', text: 'That deliberation makes no difference to the outcome' },
        ],
        explanation:
          'Not yet knowing what you will do feels like the options being open, whether or not they are. This cuts both ways: "I can feel that I have free will" and "I can feel that my choices come from my character" are equally unsupported by introspection.',
      },
    ],
  },

  'determinism-stated-carefully': {
    summary: {
      essential:
        'Determinism says the state of the world plus the laws fixes exactly one future. It is not fatalism, not predictability, and not the claim that deliberating is pointless. Whether our world is deterministic is not settled by physics.',
      detailed:
        'Indeterminism would not deliver free will either, since an event nothing about you settled is not thereby settled by you. That is why the problem is not waiting on a physics result.',
    },
    questions: [
      {
        id: 'fatalism',
        prompt: 'What is the difference between determinism and fatalism?',
        options: [
          {
            id: 'a',
            text: 'Fatalism says the outcome is the same whatever you do; determinism says your doing is one of the causes',
            correct: true,
          },
          { id: 'b', text: 'They are two names for the same thesis' },
          { id: 'c', text: 'Fatalism concerns the past and determinism the future' },
          { id: 'd', text: 'Determinism is religious and fatalism is scientific' },
        ],
        explanation:
          'The practical difference is total. Under determinism, remove your deliberation and a different thing happens. "It was determined that I would fail, so why revise" is a fatalist inference from a deterministic premise, and it does not follow.',
      },
      {
        id: 'predictability',
        prompt: 'Why is unpredictability not evidence against determinism?',
        options: [
          { id: 'a', text: 'Because everything is in fact predictable in principle' },
          {
            id: 'b',
            text: 'Because deterministic systems like a double pendulum are unpredictable in practice',
            correct: true,
          },
          { id: 'c', text: 'Because prediction requires a predictor' },
          { id: 'd', text: 'Because quantum mechanics makes prediction impossible' },
        ],
        explanation:
          'Predictability is about measurement and computation; determinism is about what follows from what. Conflating them makes determinism look refuted by everyday experience when it has not been touched.',
      },
      {
        id: 'indeterminism',
        prompt: 'Why would establishing that the world is indeterministic not deliver free will?',
        options: [
          { id: 'a', text: 'Because quantum effects are too small to matter' },
          {
            id: 'b',
            text: 'Because an event not fixed by what came before is not thereby fixed by you',
            correct: true,
          },
          { id: 'c', text: 'Because indeterminism is incompatible with causation' },
          { id: 'd', text: 'Because physics cannot describe decisions' },
        ],
        explanation:
          'Randomness in the causal chain subtracts control rather than adding it. This is why sophisticated libertarians work on the structure of deliberation instead of pointing at physics — the conceptual problem is untouched by the physical question.',
      },
    ],
  },

  'hard-determinism': {
    summary: {
      essential:
        'The consequence argument runs from the fixity of the past and the laws to the fixity of our acts. The contemporary version does not need determinism at all: determined acts trace to what you did not control, undetermined ones involve chance you also do not control.',
      detailed:
        'Pereboom argues that abandoning desert-based blame leaves moral judgement, the demand for change, protection and relationships intact, with resentment the main casualty. The strongest objection is that the argument may prove too much, showing the concept incoherent rather than showing we lack something.',
    },
    questions: [
      {
        id: 'hard-incomp',
        prompt: 'What makes hard incompatibilism stronger than classical hard determinism?',
        options: [
          { id: 'a', text: 'It has more supporters' },
          {
            id: 'b',
            text: 'It does not depend on whether determinism is true, since indeterminism only adds chance',
            correct: true,
          },
          { id: 'c', text: 'It relies on neuroscientific evidence' },
          { id: 'd', text: 'It denies that actions have causes' },
        ],
        explanation:
          'Classical hard determinism is hostage to how physics turns out. The hard incompatibilist argument closes both branches, which is why it has largely replaced the older position among those who reach the sceptical conclusion.',
      },
      {
        id: 'not-license',
        prompt: 'What do defenders of this position say follows from it?',
        options: [
          { id: 'a', text: 'That cruelty is permissible since nobody is responsible' },
          { id: 'b', text: 'That effort and deliberation are pointless' },
          {
            id: 'c',
            text: 'That there is less ground for contempt and punitiveness, not less for restraint',
            correct: true,
          },
          { id: 'd', text: 'That moral judgements are all false' },
        ],
        explanation:
          'If nobody deserves their character, nobody deserves contempt for it either. And deliberation still causes outcomes on this view, so effort remains efficacious. The inference from "no free will" to "nothing matters" is the fatalist slide again.',
      },
    ],
  },

  'libertarian-free-will': {
    summary: {
      essential:
        'Libertarians hold that more than one future is genuinely open and that we settle which. The luck objection says that if nothing about you settled the outcome, what did settle it is not attributable to you.',
      detailed:
        'Kane locates indeterminism in self-forming actions where the agent wants both options; critics say this relocates the luck. Agent-causal accounts name the wanted conclusion and are accused of not explaining it. Neither route has produced an account both sides accept as coherent.',
    },
    questions: [
      {
        id: 'luck',
        prompt: 'State the luck objection.',
        options: [
          { id: 'a', text: 'Lucky people make better decisions' },
          {
            id: 'b',
            text: 'If the outcome is not settled by anything about the agent, what settles it is not the agent',
            correct: true,
          },
          { id: 'c', text: 'Quantum events are too rare to affect decisions' },
          { id: 'd', text: 'Libertarians ignore the influence of upbringing' },
        ],
        explanation:
          'The rewind version makes it vivid: replay the universe to a moment before the choice with the agent in exactly the same state, and on an indeterministic account the outcome can differ. Nothing about the agent explains the difference.',
      },
      {
        id: 'quantum',
        prompt: 'Why does appealing to quantum indeterminacy not rescue libertarian free will?',
        options: [
          { id: 'a', text: 'Because quantum mechanics is deterministic' },
          {
            id: 'b',
            text: 'Because random is not free — it is the objection rather than the answer',
            correct: true,
          },
          { id: 'c', text: 'Because the brain is too warm for quantum effects' },
          { id: 'd', text: 'Because indeterminacy applies only to particles, not to people' },
        ],
        explanation:
          'Even setting aside whether quantum effects influence neural processing, the conceptual problem is untouched. An outcome settled by a chancy event is settled by chance, and sophisticated libertarians know this — which is why their work is elsewhere.',
      },
    ],
  },

  compatibilism: {
    summary: {
      essential:
        'Compatibilists point out that the cases where we say someone was not free — pushed, drugged, coerced, compelled — have nothing to do with being caused. Freedom is acting on your own reasons through an undistorted process, which determinism does not disturb.',
      detailed:
        'Frankfurt cases argue that responsibility does not require the ability to do otherwise. The manipulation argument is the main pressure: an agent engineered to satisfy the conditions seems unfree, and no response to that has become standard.',
    },
    questions: [
      {
        id: 'strategy',
        prompt: 'What is the compatibilist’s central observation?',
        options: [
          { id: 'a', text: 'That determinism is false' },
          {
            id: 'b',
            text: 'That the cases where we deny freedom involve coercion or compulsion, never merely being caused',
            correct: true,
          },
          { id: 'c', text: 'That free will is an illusion but a useful one' },
          { id: 'd', text: 'That nobody knows whether determinism is true' },
        ],
        explanation:
          'If our practice of distinguishing free from unfree acts tracks the manner of causation rather than its presence, then determinism was never the threat it appeared to be. The accusation is that this changes the subject; the reply is that it identifies what the subject always was.',
      },
      {
        id: 'frankfurt-case',
        prompt: 'What do Frankfurt cases aim to show?',
        options: [
          { id: 'a', text: 'That determinism is compatible with alternate possibilities' },
          {
            id: 'b',
            text: 'That moral responsibility does not require the ability to do otherwise',
            correct: true,
          },
          { id: 'c', text: 'That neuroscientists can control decisions' },
          { id: 'd', text: 'That people are never responsible' },
        ],
        explanation:
          'Someone decides entirely on their own while a device stands ready to intervene had they been about to decide otherwise. The device never acts. They could not have done otherwise and seem fully responsible — which, if right, removes the principle the consequence argument needs.',
      },
      {
        id: 'objection',
        prompt: 'What is the "wretched subterfuge" charge?',
        options: [
          {
            id: 'a',
            text: 'That compatibilism answers a different question from the one people were asking',
            correct: true,
          },
          { id: 'b', text: 'That compatibilists are dishonest about their motives' },
          { id: 'c', text: 'That compatibilism requires determinism to be false' },
          { id: 'd', text: 'That it makes responsibility impossible' },
        ],
        explanation:
          'Kant’s complaint: once everything is fixed, calling the fixed thing free because nobody held a gun is a change of topic dressed as an answer. The compatibilist reply is a challenge — name a freedom that is neither determined nor random and we will discuss it.',
      },
    ],
  },

  'what-the-brain-experiments-show': {
    summary: {
      essential:
        'Libet found a readiness potential beginning before the reported urge to move. Three separate gaps stand between that result and the claim that free will is an illusion: the task, the measurement, and the interpretation of the signal itself.',
      detailed:
        'Dismantling the overclaim leaves the underlying question exactly where it was. Concluding "so free will is fine after all" is the same kind of error in the opposite direction.',
    },
    questions: [
      {
        id: 'task',
        prompt: 'What is the first problem with generalising from the Libet paradigm?',
        options: [
          { id: 'a', text: 'The sample sizes were too small' },
          {
            id: 'b',
            text: 'It uses an arbitrary movement with no reasons on either side, which is not the kind of choice at issue',
            correct: true,
          },
          { id: 'c', text: 'The equipment was not sensitive enough' },
          { id: 'd', text: 'Participants were not told what the study was about' },
        ],
        explanation:
          'Nobody ever thought an arbitrary twitch was the seat of free will. The choices at issue involve reasons, time and revision — all three deliberately stripped out of the paradigm.',
      },
      {
        id: 'accumulator',
        prompt: 'What does the accumulator model propose about the readiness potential?',
        options: [
          { id: 'a', text: 'That it is caused by muscle movement rather than by the brain' },
          {
            id: 'b',
            text: 'That averaging trials backwards from the movement can produce an apparent ramp from fluctuating activity',
            correct: true,
          },
          { id: 'c', text: 'That it occurs after the decision rather than before' },
          { id: 'd', text: 'That it does not exist' },
        ],
        explanation:
          'Schurger and colleagues argue the signal may be partly an artefact of the analysis rather than a forming decision. The model is itself debated — which is the point: the interpretation is an open scientific question, not a settled one.',
      },
      {
        id: 'conclusion',
        prompt: 'What does this topic conclude?',
        options: [
          { id: 'a', text: 'That we do have free will after all' },
          { id: 'b', text: 'That neuroscience will eventually settle the question' },
          {
            id: 'c',
            text: 'That these experiments do not show we lack free will, which leaves the question open',
            correct: true,
          },
          { id: 'd', text: 'That the experiments were badly conducted' },
        ],
        explanation:
          'Dismantling an overclaim is not establishing its opposite. The general lesson is worth more than the specific one: the step from a measurement to a claim about human agency is an argument and has to be made rather than assumed.',
      },
    ],
  },

  'the-basic-argument': {
    summary: {
      essential:
        'To be ultimately responsible for what you do, you would have to be responsible for how you are; to be responsible for how you are, you would have to have made yourself; and any such making was done by a self you already were. The regress has no first step.',
      detailed:
        'It needs no physics and applies to any possible being. The main objection is that "ultimate responsibility" is a technical notion nobody outside the argument wanted. Strawson replies that the ordinary notion carries the commitment wherever blame is fiercest.',
    },
    questions: [
      {
        id: 'independence',
        prompt: 'Why does the Basic Argument not depend on determinism?',
        options: [
          { id: 'a', text: 'Because it assumes determinism is false' },
          {
            id: 'b',
            text: 'Because it needs only that acts come from the person acting, which holds either way',
            correct: true,
          },
          { id: 'c', text: 'Because it concerns morality rather than causation' },
          { id: 'd', text: 'Because it applies only to human beings' },
        ],
        explanation:
          'An undetermined choice is still made by whatever self is doing the choosing. Adding indeterminism does not give the libertarian an escape, and reasons-responsiveness does not give the compatibilist one, because the responsiveness is part of the nature in question.',
      },
      {
        id: 'scope',
        prompt: 'What does the argument leave untouched, even if it succeeds?',
        options: [
          {
            id: 'a',
            text: 'Whether an act was harmful, whether someone should be stopped, and whether people can change',
            correct: true,
          },
          { id: 'b', text: 'Nothing — it shows that nothing matters' },
          { id: 'c', text: 'Only legal responsibility, not moral responsibility' },
          { id: 'd', text: 'Only the responsibility of children' },
        ],
        explanation:
          'It targets ultimate desert — a specific backward-looking claim about what a person has earned by being who they are. Everything in ordinary life that depends on actions having consequences is unaffected.',
      },
      {
        id: 'state',
        prompt: 'What is the honest state of the free will question after this movement?',
        options: [
          { id: 'a', text: 'Settled in favour of compatibilism' },
          { id: 'b', text: 'Settled in favour of hard incompatibilism' },
          {
            id: 'c',
            text: 'Unsettled, with every position holding serious defenders and unanswered objections',
            correct: true,
          },
          { id: 'd', text: 'Meaningless, since the terms cannot be defined' },
        ],
        explanation:
          'Surveys find compatibilism the most common view without anything approaching consensus, and the arguments have not converged over decades of concentrated work. Presenting one side as established is reporting a preference rather than a result.',
      },
    ],
  },
};
