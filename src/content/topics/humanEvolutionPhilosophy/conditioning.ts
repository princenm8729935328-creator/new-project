/**
 * Human Evolution, Philosophical Lens — Movement III: did I choose who I became?
 *
 * The trap in this movement is a slide. Notice that beliefs are inherited,
 * notice that circumstances shape people, and it is very easy to land on
 * "therefore the environment determines everything and nothing is mine" — a
 * conclusion the evidence does not support, which forecloses the free will
 * movement before it starts, and which readers tend to adopt as a mood rather
 * than as a position they could defend.
 *
 * So this movement does the opposite. It establishes the uncomfortable facts
 * carefully, and then spends three topics on the question those facts actually
 * raise, which is not "is anything mine?" but "what would it take for something
 * to be?" The last topic ends without an answer, deliberately.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const PHIL_CONDITIONING_TOPICS: readonly Topic[] = [
  {
    id: topicId('did-i-choose-who-i-became'),
    slug: 'did-i-choose-who-i-became',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 112,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Did I choose who I became?',
    subtitle: 'The person doing the choosing had to come from somewhere.',
    summary: {
      essential:
        'You make choices with your values, your temperament and your judgement. None of those was chosen — they were in place before you were in a position to have a view about them.',
      detailed:
        'This is not yet an argument about free will. It is an observation about the ordering: the equipment you decide with was assembled before any deciding could happen.',
      technical:
        'The observation is about the constitutive rather than the causal question: whatever the metaphysics of action, the evaluative standards an agent applies are themselves items the agent did not set.',
    },
    glossaryTerms: [glossaryTermId('autonomy')],
    related: [topicId('anatta-non-self'), topicId('accident-of-birth')],
    blocks: [
      {
        id: 'intuition',
        kind: 'prose',
        text: {
          essential:
            'Think of a decision you are proud of. You weighed things, you chose, and the choice expressed what you care about. That is what it is for a decision to be yours.',
          detailed:
            'Nothing so far is in question. The decision came from your values rather than from a coin or a threat. That is exactly the right thing to say about it.',
        },
      },
      {
        id: 'problem',
        kind: 'prose',
        text: {
          essential:
            'Now ask where the values came from. Not "were they good ones" — where they came from. At what point did you select them?',
          detailed:
            'There is no such point. By the time you were capable of evaluating a value, you were already using values to do the evaluating. The apparatus was running before there was anyone there to install it.',
        },
      },
      {
        id: 'sources',
        kind: 'visualization',
        visualizationId: visualizationId('sources-of-a-self'),
      },
      {
        id: 'careful',
        kind: 'callout',
        tone: 'caution',
        title: 'What this does not say',
        text: {
          essential:
            'It does not say that the environment determines everything, or that your choices are not yours, or that effort is pointless. None of those follows from what has been established.',
          detailed:
            'What has been established is narrow: the standards you decide by were not themselves decided on. That is compatible with your decisions being genuinely yours, with effort mattering enormously, and with people changing. Whether it is compatible with being *ultimately* responsible is a much harder question, and it is not answered here.',
        },
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'Whether a desire or value counts as genuinely the agent’s own, given that it has causes the agent did not control, is a central and unresolved problem in the philosophy of autonomy.',
          detailed:
            'Procedural accounts say a desire is the agent’s own if it survives the right kind of reflective endorsement. Substantive accounts add conditions on the content or the history. Each faces the manipulation problem: an agent engineered to endorse exactly what they were built to want appears to satisfy the procedural conditions while lacking the thing the conditions were meant to capture.',
        },
        evidence: 'active-research',
        references: [referenceId('sep-personal-autonomy')],
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The natural objection: so what? A river did not choose its banks either, and it still flows. Why should the origin of my values undermine my acting on them?',
          detailed:
            'This is the compatibilist reply, and it is strong. Being caused to be a certain way is not the same as being coerced, and acting from values you did not select is still acting from *your* values rather than from someone else’s. The objection will be developed properly in the next movement. Holding it in reserve for now is deliberate — the point of this movement is to make the question sharp before answering it.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Is there a difference between having a value and endorsing it?',
        whyItMatters: {
          essential:
            'If there is, then reflective endorsement might be where authorship lives, even though the values themselves arrived unchosen. If there is not, the regress has nowhere to stop.',
          detailed:
            'The difficulty is that endorsement is itself performed by a person with a particular temperament and history. Someone raised to defer endorses differently from someone raised to argue — so the endorsement may be as inherited as the thing endorsed.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of endorsement that explains why it confers ownership without needing to have been itself chosen. Several have been proposed; none commands agreement.',
        },
        references: [
          referenceId('sep-personal-autonomy'),
          referenceId('frankfurt-1971-freedom-of-the-will'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Start with the largest of the unchosen inputs, and the one easiest to verify: where you happened to be born.',
        },
      },
    ],
    furtherReading: [referenceId('sep-personal-autonomy')],
  },

  {
    id: topicId('accident-of-birth'),
    slug: 'accident-of-birth',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 113,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Where you happened to start',
    subtitle: 'The single largest input into a life, and nobody has any say in it.',
    summary: {
      essential:
        'Century, country, family, language, class, body. Every one of these shapes a person profoundly, and every one was fixed before the person existed.',
      detailed:
        'The philosophical interest is not that this is unfair — it is not obviously the kind of thing fairness applies to — but what it does to judgements about desert.',
      technical:
        'Rawls’s formulation is that the distribution of natural talents and social starting positions is arbitrary from a moral point of view, which is a premise in an argument about the basic structure rather than a complaint about the world.',
    },
    glossaryTerms: [glossaryTermId('veil-of-ignorance'), glossaryTermId('moral-luck')],
    related: [topicId('did-i-choose-who-i-became'), topicId('moral-luck')],
    blocks: [
      {
        id: 'scale',
        kind: 'prose',
        text: {
          essential:
            'Almost everything that will matter about your life was in place before you could form a sentence: which of a few thousand years you arrived in, which of two hundred countries, which family within it, and what that family had.',
          detailed:
            'It is worth resisting the urge to move on from this quickly. It is genuinely strange. The largest single determinant of how a life goes is settled by something nobody involved had any part in.',
        },
      },
      {
        id: 'thought',
        kind: 'prose',
        text: {
          essential:
            'Here is a way to feel it. Imagine choosing the rules for a society before knowing which position in it you will occupy — not the richest, not the poorest, no information at all about which one is yours.',
          detailed:
            'Rawls uses this device to argue for particular principles of justice. The device itself is separable from his conclusions, and it is useful on its own: it makes vivid how much of what we take ourselves to deserve is downstream of a position we were assigned.',
        },
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Rawls argues that the distribution of natural talents and social starting positions is arbitrary from a moral point of view.',
          detailed:
            'The claim is that nobody deserves their initial place in the distribution of natural assets any more than they deserve their starting place in society, and that a theory of justice therefore should not let those arbitrary factors determine shares. This is a premise in an argument, and it has been disputed — most prominently by Nozick, who argued that people can be entitled to what they have without deserving the talents that produced it.',
        },
        evidence: 'established',
        references: [referenceId('rawls-theory-justice')],
      },
      {
        id: 'not-fatalism',
        kind: 'callout',
        tone: 'misconception',
        title: 'Starting position is not destiny',
        text: {
          essential:
            'That starting conditions matter enormously is not the claim that they fix outcomes. People move, change, and diverge from where they began, and treating the correlation as a law gets the facts wrong.',
          detailed:
            'The philosophical point survives without the overstatement. It does not need starting position to determine everything; it needs only that it contributes substantially and that nobody chose it. Overstating it into fatalism is both false and self-defeating, since it removes the very agency the rest of the argument is trying to locate.',
        },
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The strongest objection is that unchosen origins do not touch desert for what you do with them. Two people given the same start do different things with it, and the difference is where desert lives.',
          detailed:
            'The reply is uncomfortable: whatever produced the difference — persistence, curiosity, the capacity to delay gratification — is itself something the person did not manufacture. Push on any trait and it dissolves into inheritance and circumstance. That is the regress the Basic Argument formalises later in this lens.',
        },
      },
      {
        id: 'counter',
        kind: 'prose',
        text: {
          essential:
            'And a reply to that reply: if the argument works, it works against every judgement of desert ever made, including the ones we are least willing to give up. A conclusion that broad is a reason to check the argument as well as to accept it.',
          detailed:
            'Philosophers divide here. Some take the breadth as a reason to abandon desert; some take it as a reductio showing a premise is wrong; some accept the argument about ultimate desert while keeping a more modest notion that does real work. The division is genuine and none of the options is cost-free.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Can you deserve something that depended on circumstances you did not control?',
        whyItMatters: {
          essential:
            'Nearly everything depends on such circumstances. If the answer is no, desert applies to almost nothing. If yes, the account of desert has to explain which dependencies are compatible with it.',
        },
        whatWouldSettleIt: {
          essential:
            'A worked-out account of desert that either excludes luck-dependent achievements or explains why it need not. Both directions are actively defended.',
        },
        references: [referenceId('sep-moral-luck'), referenceId('rawls-theory-justice')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Circumstances are easy to see as external. What about the things that feel most internal — the things you think?',
        },
      },
    ],
    furtherReading: [referenceId('rawls-theory-justice')],
  },

  {
    id: topicId('beliefs-you-did-not-examine'),
    slug: 'beliefs-you-did-not-examine',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 114,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Beliefs you did not examine',
    subtitle: 'The feeling of having reasoned is present either way.',
    summary: {
      essential:
        'Most of what anyone believes arrived rather than was concluded. The unsettling part is that arriving and concluding feel identical from inside.',
      detailed:
        'The correct response is neither to dismiss inherited beliefs nor to treat inheritance as proof of falsity. Both are mistakes, and the second is the more tempting one.',
      technical:
        'The inference from causal origin to falsity is the genetic fallacy; the relevant epistemic question is whether the causal process is truth-tracking, which origin alone does not determine.',
    },
    glossaryTerms: [glossaryTermId('epistemology'), glossaryTermId('autonomy')],
    related: [topicId('accident-of-birth'), topicId('influence-and-authorship')],
    blocks: [
      {
        id: 'intuition',
        kind: 'prose',
        text: {
          essential:
            'Pick a conviction you hold strongly. Now try to reconstruct how you came to hold it. For most convictions, most people cannot — there is no moment of conclusion to find.',
          detailed:
            'What there is instead is a sense of obviousness. It seems like something you worked out, because it seems like something anyone would work out. That feeling is the thing to examine.',
        },
      },
      {
        id: 'figure',
        kind: 'visualization',
        visualizationId: visualizationId('belief-inheritance'),
      },
      {
        id: 'evidence',
        kind: 'claim',
        statement: {
          essential:
            'People give confident accounts of why they did or believed something that do not match the factors actually influencing them.',
          detailed:
            'Nisbett and Wilson reported a series of studies in which participants’ explanations of their own choices were confident, fluent and unrelated to the variable the experimenters had manipulated. The interpretation is debated and the effect is not universal, but the basic finding — that introspective reports of one’s own reasons can be confabulated rather than read off — has held up and is directly relevant here.',
        },
        evidence: 'established',
        references: [referenceId('nisbett-wilson-1977-telling-more')],
      },
      {
        id: 'careful-empirical',
        kind: 'callout',
        tone: 'caution',
        title: 'What an experiment can and cannot contribute here',
        text: {
          essential:
            'This is a philosophical topic that makes one empirical claim, and the claim is narrow: sometimes people are wrong about their own reasons. It is not offered as showing that reasoning never happens.',
          detailed:
            'Experiments about self-report cannot establish that no belief is well grounded, and nothing in this lens treats them as if they could. They establish that the feeling of having reasoned is not a reliable indicator of having reasoned — which is enough for the argument here and not more than the studies support.',
        },
        references: [referenceId('nisbett-wilson-1977-telling-more')],
      },
      {
        id: 'problem',
        kind: 'prose',
        text: {
          essential:
            'So the introspective test fails. You cannot tell, from inside, whether a conviction was reached or absorbed, because both feel like seeing that something is true.',
          detailed:
            'This is what makes the issue philosophically serious rather than merely humbling. If the internal indicator were reliable, you could simply check. It is not, and there is no second indicator.',
        },
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The objection that matters: none of this shows any particular belief is false. Where a belief came from and whether it is true are different questions, and running them together is a known fallacy.',
          detailed:
            'You inherited your first language without choosing it, and the sentences you form in it are not thereby false. Someone raised among careful people may have inherited the habit of carefulness — inherited, and better for it. The origin of a belief bears on whether you are entitled to be confident, not on whether the belief is correct.',
        },
      },
      {
        id: 'counter',
        kind: 'claim',
        statement: {
          essential:
            'Whether a belief’s causal history can undermine confidence in it, without showing it false, is a substantive question in epistemology, not a settled matter.',
          detailed:
            'The standard framing is about defeaters: learning that your belief was produced by a process insensitive to whether it is true can give you reason to lower confidence even with no evidence against the content. How far this generalises — and whether it would undermine all beliefs including this one — is actively argued, and the same structure reappears in the evolutionary debunking arguments about morality later in this lens.',
        },
        evidence: 'active-research',
        references: [referenceId('street-2006-darwinian-dilemma')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'If you cannot tell from inside which beliefs you reasoned to, what should you do differently?',
        whyItMatters: {
          essential:
            'The practical answer people reach for — examine your beliefs — assumes the examining is not subject to the same problem. It may be.',
          detailed:
            'Some proposals: seek out the strongest opposing case rather than the nearest one; notice when a belief is suspiciously well aligned with your interests; take disagreement from people who are careful as evidence rather than as an obstacle. None of these escapes the problem entirely, and saying they do would be the same overreach the topic is warning about.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of when reflection is reliable that does not itself rely on unreliable reflection. This is a hard constraint and no proposal clearly meets it.',
        },
        references: [referenceId('sep-personal-autonomy')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'So far the picture is of a person assembled from inputs. That picture has a flaw, and it is worth finding.',
        },
      },
    ],
    furtherReading: [referenceId('nisbett-wilson-1977-telling-more')],
  },

  {
    id: topicId('influence-and-authorship'),
    slug: 'influence-and-authorship',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 115,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Does influence mean no authorship?',
    subtitle: 'The step from "shaped by" to "nothing of mine" is a step, not an observation.',
    summary: {
      essential:
        'Everything established so far shows influence. The conclusion people jump to is that nothing is theirs. That conclusion needs an argument, and the argument is harder to make than it looks.',
      detailed:
        'The confusion is between two claims: that you did not create the materials, and that you did nothing with them. Only the first has been shown.',
      technical:
        'The inference from causal antecedence to the absence of agency requires a premise that agency demands uncaused origination — precisely the premise compatibilists reject.',
    },
    glossaryTerms: [glossaryTermId('autonomy'), glossaryTermId('determinism')],
    related: [topicId('beliefs-you-did-not-examine'), topicId('authoring-a-belief')],
    blocks: [
      {
        id: 'slide',
        kind: 'prose',
        text: {
          essential:
            'Here is the slide to watch for. My values came from my upbringing. My upbringing was not chosen. Therefore my values are not mine. Therefore nothing I do is really mine.',
          detailed:
            'Each step feels like it follows. Look at the third one: "came from somewhere I did not choose" has become "not mine". That is not an observation. It is a claim about what ownership requires, and it has been smuggled in without being stated.',
        },
      },
      {
        id: 'test',
        kind: 'prose',
        text: {
          essential:
            'Test it against a case. A language is entirely inherited — the vocabulary, the grammar, the idioms, none of it invented by you. Is the sentence you just spoke therefore not yours?',
          detailed:
            'Nobody says so. The materials are given and the arrangement is not. Something similar may be true of a person: the inputs unchosen, what is made of them not fixed by them. Whether the analogy holds is exactly the question — but noticing that it might is enough to show the slide was too fast.',
        },
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'The inference from "caused by factors outside your control" to "not genuinely yours" requires a substantive premise about what ownership demands, and that premise is rejected by a large body of philosophical work.',
          detailed:
            'Compatibilists hold that an action is the agent’s when it flows from the agent’s own reasons through an undistorted process, regardless of how those reasons came about. On that view causal history is simply the wrong place to look for ownership. Incompatibilists reply that a process which is itself a product of unchosen factors cannot confer ownership on its outputs. Both are developed positions; neither is obviously correct.',
        },
        evidence: 'active-research',
        references: [referenceId('sep-compatibilism'), referenceId('sep-personal-autonomy')],
      },
      {
        id: 'no-conclusion',
        kind: 'callout',
        tone: 'caution',
        title: 'This movement does not conclude that environment determines everything',
        text: {
          essential:
            'That conclusion is stronger than anything shown here, and it is not supported. What has been shown is that the inputs were unchosen — not that the outputs are fixed by them.',
          detailed:
            'It is worth being blunt, because the slide is common and comfortable: it converts a hard question into a settled verdict and removes the need to think further. The honest position at the end of this movement is that the question of authorship is open, not that it has been answered in the negative.',
        },
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The strongest reply to the language analogy: a speaker arranging words has a capacity for arrangement that was itself given. Push the analogy and the same regress appears.',
          detailed:
            'That is fair, and it is why this movement ends without a verdict rather than with the analogy as a solution. The point of the analogy is not to establish authorship but to show that the negative conclusion does not follow immediately — which leaves a real question rather than a settled loss.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'What would have to be true of a person for something to count as genuinely theirs?',
        whyItMatters: {
          essential:
            'Until this is answered, both the confident "of course it is mine" and the resigned "none of it is mine" are unsupported. The next topic takes the question seriously rather than settling it.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of ownership that survives the manipulation cases, and that does not require an impossible act of self-creation. Constructing one is an active project.',
        },
        references: [referenceId('sep-personal-autonomy'), referenceId('sep-compatibilism')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'So: what would authoring a belief actually consist in? It is worth trying to say, in enough detail to notice where the attempt breaks.',
        },
      },
    ],
    furtherReading: [referenceId('sep-personal-autonomy')],
  },

  {
    id: topicId('authoring-a-belief'),
    slug: 'authoring-a-belief',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 116,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What would it take to author a belief?',
    subtitle: 'An attempt at the positive account, and where it runs out.',
    summary: {
      essential:
        'If authorship is not nothing and not automatic, it must come in degrees. This topic tries to say what the degrees are, and where the attempt stops working.',
      detailed:
        'The attempt is deliberately made in full before the objection is raised, because an account that is never stated clearly cannot be tested.',
      technical:
        'The proposal sketched is procedural: ownership as a function of the reflective processes a belief has survived, with the manipulation and regress objections then applied to it.',
    },
    glossaryTerms: [glossaryTermId('autonomy'), glossaryTermId('second-order-desire')],
    related: [topicId('influence-and-authorship'), topicId('the-basic-argument')],
    blocks: [
      {
        id: 'attempt',
        kind: 'prose',
        text: {
          essential:
            'Here is a candidate. A belief is more yours the more of the following are true: you can state it clearly; you have met the best case against it; you can state that case fairly; you have changed your mind about something before; and you would recognise what would count as evidence you were wrong.',
          detailed:
            'Notice what this account does not require. It does not require that you invented the belief, or that you arrived at it alone, or that nothing caused you to hold it. It locates ownership in what has happened to the belief since, not in where it came from.',
        },
      },
      {
        id: 'degrees',
        kind: 'visualization',
        visualizationId: visualizationId('authorship-degrees'),
      },
      {
        id: 'why-plausible',
        kind: 'prose',
        text: {
          essential:
            'It has something going for it. It matches how we actually distinguish people: someone who has genuinely wrestled with a question is different from someone repeating what they were told, even when they say the same words.',
          detailed:
            'It also makes the difference a matter of degree rather than a switch, which fits the phenomenon. Nobody has examined all their beliefs and nobody has examined none, and an account that forced a binary verdict would be worse than the thing it describes.',
        },
      },
      {
        id: 'frankfurt',
        kind: 'claim',
        statement: {
          essential:
            'Frankfurt proposes that a will is a person’s own when they endorse it at a higher order — when what they want is also what they want to want.',
          detailed:
            'The account distinguishes the unwilling addict, who wants the drug and wishes they did not, from the willing addict, who wants it and is content to. The behaviour can be identical; the hierarchical structure differs, and Frankfurt argues that is where freedom of the will actually lies.',
        },
        evidence: 'established',
        references: [referenceId('frankfurt-1971-freedom-of-the-will')],
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'Now the objection, and it is the one that has to be faced. The examining is done by a person who was also assembled. Someone raised to defer will examine deferentially. The reflection is as inherited as the belief.',
          detailed:
            'And if you ask whether your second-order endorsement is itself yours, you need a third order, and the same question applies there. Frankfurt is aware of the regress and tries to stop it with the notion of wholehearted identification — a point at which no further question arises for the agent. Critics reply that a question ceasing to arise is not the same as its having been answered.',
        },
      },
      {
        id: 'manipulation',
        kind: 'callout',
        tone: 'note',
        title: 'The manipulation case, stated once properly',
        text: {
          essential:
            'Imagine a person designed before birth to hold exactly these beliefs, to examine them in exactly this way, and to endorse the result. They satisfy every condition above. Are the beliefs theirs?',
          detailed:
            'Most people’s immediate answer is no. If that answer is right, then no procedural account can be sufficient, because the procedure is exactly what was engineered. This case recurs in almost every part of the free will literature, and how a theory handles it is one of the main things dividing the field.',
        },
        references: [referenceId('sep-personal-autonomy')],
      },
      {
        id: 'honest',
        kind: 'prose',
        text: {
          essential:
            'So the attempt does not succeed, at least not as a complete answer. It describes something real — the difference between an examined and an unexamined belief — without showing that the difference amounts to authorship in the deep sense.',
          detailed:
            'That is where this movement ends. Not with "nothing is yours", which was never established, and not with a solution, which nobody has. With a question that is now sharp enough to be worth the next movement.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Is there a kind of ownership worth wanting that does not require having created yourself?',
        whyItMatters: {
          essential:
            'If yes, the regress is survivable and the thing people care about was never the thing the regress destroys. If no, then the concept people have been using all along is empty, and a great deal built on it has to be rebuilt.',
          detailed:
            'The entire free will movement can be read as an attempt to answer this, and it is not answered there either. What the next movement adds is precision about what exactly is at stake, and about which of the available answers cost what.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of ownership that survives the manipulation case without requiring self-creation — or a demonstration that no such account is possible.',
        },
        references: [
          referenceId('frankfurt-1971-freedom-of-the-will'),
          referenceId('sep-personal-autonomy'),
          referenceId('strawson-g-1994-impossibility'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Underneath all of this has been a question nobody has stated yet: when you decide something, is more than one outcome actually possible?',
        },
      },
    ],
    furtherReading: [referenceId('frankfurt-1971-freedom-of-the-will')],
  },
];
