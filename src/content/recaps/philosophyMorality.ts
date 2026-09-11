/**
 * Recaps for Movements V through IX: morality, the is–ought gap, character,
 * punishment and responsibility.
 *
 * Three distractors in this file are doing specific corrective work, because
 * they are the three misreadings this part of the lens is most likely to leave
 * behind: that Nietzsche endorsed cruelty or domination, that the is–ought gap
 * means evidence is irrelevant to moral questions, and that social psychology
 * has shown character to be a myth. Each appears as an option so that a reader
 * holding it gets an explanation rather than passing through unchallenged.
 */
import type { RecapsByTopic } from '../schema/recap';

export const PHILOSOPHY_MORALITY_RECAPS: RecapsByTopic = {
  'where-does-wrong-come-from': {
    summary: {
      essential:
        'The certainty that some acts are wrong is not in question. What is in question is what the certainty is about — a fact detected, an attitude expressed, or something else. The physical description of an event is complete without the wrongness in it.',
      detailed:
        'Two questions get run together: what makes an action right, answered by a normative theory, and what makes anything right at all, which is metaethics. Almost any normative theory pairs with almost any metaethical position.',
    },
    questions: [
      {
        id: 'levels',
        prompt: 'What is the difference between normative ethics and metaethics?',
        options: [
          { id: 'a', text: 'Normative ethics is practical and metaethics is theoretical' },
          {
            id: 'b',
            text: 'Normative ethics asks what makes an action right; metaethics asks what moral claims are and what could make them true',
            correct: true,
          },
          { id: 'c', text: 'Metaethics is the study of moral psychology' },
          { id: 'd', text: 'They are two names for the same field' },
        ],
        explanation:
          'Keeping them apart is the first useful move. Someone can be a utilitarian who thinks moral facts are objective, or a utilitarian who thinks morality is a construction we should nonetheless run this way. Conflating the levels produces arguments at cross purposes.',
      },
      {
        id: 'intuition',
        prompt: 'What does the strength of a moral intuition establish?',
        options: [
          { id: 'a', text: 'That there are objective moral facts' },
          { id: 'b', text: 'That moral claims express attitudes' },
          {
            id: 'c',
            text: 'Nothing on its own, since realism, expressivism and error theory all explain it',
            correct: true,
          },
          { id: 'd', text: 'That the judgement is correct' },
        ],
        explanation:
          'Realists say the intuition detects a fact; expressivists say some attitudes are deeply held; error theorists say the judgement asserts an objective fact, which is why it feels like detection, and that the assertion is false. Each explains the same datum, so the datum cannot decide.',
      },
    ],
  },

  'morality-of-consequences': {
    summary: {
      essential:
        'Consequentialism evaluates acts by outcomes, counting everyone equally. Its power shows in the cases where it disagreed with common sense and turned out right; its difficulty shows when the arithmetic licenses something that feels like a violation.',
      detailed:
        'The standard replies to the organ-harvesting case all argue that the violation is not actually optimific. None says it would be wrong even if it were — which is where the next theory begins.',
    },
    questions: [
      {
        id: 'replies',
        prompt:
          'What do the standard consequentialist replies to the organ-harvesting case have in common?',
        options: [
          {
            id: 'a',
            text: 'They all argue the violation would not actually produce the best outcome',
            correct: true,
          },
          { id: 'b', text: 'They all appeal to individual rights' },
          { id: 'c', text: 'They all reject the case as impossible' },
          { id: 'd', text: 'They all accept that the surgeon should proceed' },
        ],
        explanation:
          'Rules against it produce better outcomes; a society permitting it would be worse; the calculation is never clean. Each has force. But none of them says the act would be wrong even if it were optimific — which is exactly the claim the deontologist wants to make.',
      },
      {
        id: 'trolley',
        prompt: 'What are the trolley cases for?',
        options: [
          { id: 'a', text: 'Surveying what most people would do' },
          { id: 'b', text: 'Testing whether someone is a good person' },
          {
            id: 'c',
            text: 'Isolating a structural distinction by holding the numbers fixed and varying one feature',
            correct: true,
          },
          { id: 'd', text: 'Showing that consequentialism is correct' },
        ],
        explanation:
          'Foot introduced the original in a discussion of double effect. The interesting datum is not the distribution of answers but that the same person often answers the two versions differently, which suggests they are tracking something besides the total.',
      },
    ],
  },

  'morality-of-duty': {
    summary: {
      essential:
        'Kant’s universal law test asks whether an act would still be possible if its rule were universal, which is a contradiction test rather than a consequence test. The humanity formulation forbids treating a person merely as a means.',
      detailed:
        'The standing difficulty is that the test is sensitive to how the maxim is described and Kant gives no procedure for fixing the description. Threshold deontology is the usual compromise and is widely regarded as unprincipled.',
    },
    questions: [
      {
        id: 'test',
        prompt: 'Why does the false promise fail Kant’s universal law test?',
        options: [
          { id: 'a', text: 'Because a world of liars would be unpleasant to live in' },
          {
            id: 'b',
            text: 'Because in a world where the rule were universal, promising would convey nothing and the act could not be performed',
            correct: true,
          },
          { id: 'c', text: 'Because most people would disapprove' },
          { id: 'd', text: 'Because it harms the person lent to' },
        ],
        explanation:
          'It defeats itself — a contradiction in the act, not a prediction about a worse world. That is the difference between Kant’s test and "what if everyone did that?", which is a consequence question wearing Kant’s clothes.',
      },
      {
        id: 'description',
        prompt: 'What is the main structural objection to the universal law test?',
        options: [
          { id: 'a', text: 'That it is too permissive' },
          {
            id: 'b',
            text: 'That almost any act passes under a narrow enough description and fails under a broad one',
            correct: true,
          },
          { id: 'c', text: 'That it requires knowing the consequences' },
          { id: 'd', text: 'That it applies only to promises' },
        ],
        explanation:
          'And Kant supplies no procedure for fixing the description. Defenders argue the humanity formulation is less vulnerable; critics hold the gap is structural. If descriptions can be adjusted until the answer comes out right, the prior judgement is doing the work.',
      },
    ],
  },

  'morality-of-character': {
    summary: {
      essential:
        'Aristotle asks what to become rather than what to do, treats virtue as a disposition built by practice, and holds that no rule settles particular cases — that is the work of practical wisdom.',
      detailed:
        'Two objections: that it gives no guidance, answered by pointing out that every theory needs judgement to apply; and the situationist challenge from social psychology, whose empirical base has its own replication problems.',
    },
    questions: [
      {
        id: 'mean',
        prompt: 'What does Aristotle say about where the mean lies?',
        options: [
          { id: 'a', text: 'Exactly halfway between the excess and the deficiency' },
          {
            id: 'b',
            text: 'Relative to the person and the situation, located by practical judgement rather than by formula',
            correct: true,
          },
          { id: 'c', text: 'At whatever point a society approves of' },
          { id: 'd', text: 'As close to the deficiency as possible' },
        ],
        explanation:
          'He is explicit that it is not an arithmetic midpoint and that no general account settles particulars. That is not vagueness on his part; it is the claim that moral knowledge is a skill rather than a body of principles.',
      },
      {
        id: 'feeling',
        prompt:
          'On Aristotle’s account, is someone who does the right thing against strong contrary desire virtuous?',
        options: [
          { id: 'a', text: 'Yes — the action is what matters' },
          {
            id: 'b',
            text: 'No — they are continent; virtue requires feeling rightly as well as acting rightly',
            correct: true,
          },
          { id: 'c', text: 'Yes, and more so than someone who finds it easy' },
          { id: 'd', text: 'The question does not arise in his framework' },
        ],
        explanation:
          'The distinction between continence and virtue is one of the sharper features of the theory, and it is where it differs most from act-centred views. It also explains why habituation matters: the point is to become someone for whom the right action is not a struggle.',
      },
    ],
  },

  'is-morality-objective': {
    summary: {
      essential:
        'The question is whether any moral claims are true independently of what anyone thinks. Serious philosophers answer both ways, and both quick answers — "obviously, or atrocities were merely distasteful" and "obviously not, cultures differ" — are much weaker than the positions they gesture at.',
      detailed:
        'Mackie’s argument from queerness is the strongest anti-realist case: an objective value would have to be a fact that by being known gives anyone a reason to act, unlike any other fact. Street’s evolutionary dilemma is the most active current challenge.',
    },
    questions: [
      {
        id: 'relativism',
        prompt: 'Why is cultural variation not by itself an argument for relativism?',
        options: [
          { id: 'a', text: 'Because cultures do not really differ much' },
          {
            id: 'b',
            text: 'Because disagreement about a topic does not show there is no truth about it — astronomical beliefs have differed too',
            correct: true,
          },
          { id: 'c', text: 'Because some cultures are more advanced than others' },
          { id: 'd', text: 'Because moral codes converge over time' },
        ],
        explanation:
          'The inference needs a further premise: that the disagreement could not be resolved by better information or clearer reasoning. Mackie argues for that premise rather than assuming it, which is what makes his version serious and the conversational version not.',
      },
      {
        id: 'queerness',
        prompt: 'What is Mackie’s argument from queerness?',
        options: [
          { id: 'a', text: 'That moral claims are meaningless' },
          {
            id: 'b',
            text: 'That an objective value would have to be a strange kind of fact — one that by being known gives anyone a reason to act',
            correct: true,
          },
          { id: 'c', text: 'That moral intuitions vary between individuals' },
          { id: 'd', text: 'That morality evolved for cooperation' },
        ],
        explanation:
          'And the faculty detecting such facts would be unlike any other faculty. His conclusion is error theory: ordinary moral claims assert something of this kind, and are therefore uniformly false — which is a stronger and stranger position than relativism.',
      },
      {
        id: 'debunking',
        prompt: 'What is Street’s Darwinian dilemma?',
        options: [
          {
            id: 'a',
            text: 'That if moral intuitions were shaped by selection, either they are unrelated to independent moral truths or realism must explain the coincidence',
            correct: true,
          },
          { id: 'b', text: 'That evolution proves morality is subjective' },
          { id: 'c', text: 'That natural selection favours moral behaviour' },
          { id: 'd', text: 'That moral realism is incompatible with evolution' },
        ],
        explanation:
          'It is a dilemma, not a refutation — realists have replies, including that selection favoured responsiveness to genuine features of the environment. The exchange is one of the most active in contemporary metaethics and has not concluded.',
      },
    ],
  },

  'nietzsche-and-the-genealogy-of-morals': {
    summary: {
      essential:
        'Nietzsche asks what kind of life produces a moral system and what the system does to those who hold it — a different question from whether it is true. His historical claims are disputed by scholars; the method has been enormously influential.',
      detailed:
        'The central objection is the genetic fallacy: origin says nothing about truth. His defenders reply that he argues the values are costly rather than false, which requires "what a value does to you" to be a reason to revise it.',
    },
    questions: [
      {
        id: 'not-saying',
        prompt: 'Which of these did Nietzsche argue?',
        options: [
          { id: 'a', text: 'That cruelty is good and the strong should dominate the weak' },
          { id: 'b', text: 'That the Übermensch means becoming powerful over others' },
          {
            id: 'c',
            text: 'That moral concepts have histories, and that a value can be a symptom of the life that produced it',
            correct: true,
          },
          { id: 'd', text: 'That anything a person wants thereby becomes moral' },
        ],
        explanation:
          'None of the other three is his position, and all three are common misreadings. He was contemptuous of German nationalism and antisemitism and wrote against both; his sister, an antisemite, controlled the estate after his collapse and shaped the posthumous presentation.',
      },
      {
        id: 'history',
        prompt: 'What is the status of Nietzsche’s specific historical and etymological claims?',
        options: [
          { id: 'a', text: 'Confirmed by later scholarship' },
          {
            id: 'b',
            text: 'Disputed by classicists and historians, and generally separated from the method',
            correct: true,
          },
          { id: 'c', text: 'Never intended as historical claims at all' },
          { id: 'd', text: 'Irrelevant to his argument' },
        ],
        explanation:
          'The reconstruction has not survived as history; the genealogical method has. Presenting the reconstruction as established fact would misrepresent both the scholarship and what is actually valuable in the work.',
      },
      {
        id: 'fallacy',
        prompt: 'What is the genetic fallacy objection to genealogy?',
        options: [
          {
            id: 'a',
            text: 'That where a value came from says nothing about whether it is right',
            correct: true,
          },
          { id: 'b', text: 'That genealogy relies on genetics' },
          { id: 'c', text: 'That historical claims cannot be verified' },
          { id: 'd', text: 'That Nietzsche was not a historian' },
        ],
        explanation:
          'A good idea can have a disreputable origin. Whether the objection lands depends on whether Nietzsche is claiming the values are false or that they are costly — and the same structure appears in evolutionary debunking arguments and in the conditioning movement.',
      },
    ],
  },

  'humes-gap': {
    summary: {
      essential:
        'Hume observes that arguments slide from is to ought without explaining the transition, and asks for a reason. That is a useful tool for locating the unstated value premise — and it is not the claim that evidence is irrelevant to morality.',
      detailed:
        'How strong a conclusion the passage supports is disputed among Hume scholars. Several strategies for bridging the gap are actively defended and none is generally accepted.',
    },
    questions: [
      {
        id: 'not-slogan',
        prompt: 'Which of these is the oversimplification the topic warns against?',
        options: [
          { id: 'a', text: 'That moral arguments contain unstated value premises' },
          { id: 'b', text: 'That Hume asked for the transition to be explained' },
          { id: 'c', text: 'That science cannot say anything about morality', correct: true },
          { id: 'd', text: 'That widespread practice does not establish permissibility' },
        ],
        explanation:
          'It is false, it is not what Hume said, and believing it makes you worse at moral reasoning. Whether a policy reduces harm, whether a creature can suffer, whether a punishment deters — all empirical, all decisive for real moral questions.',
      },
      {
        id: 'use',
        prompt: 'What is the gap-spotting question useful for in practice?',
        options: [
          { id: 'a', text: 'Showing that moral arguments are all invalid' },
          {
            id: 'b',
            text: 'Locating the unstated value premise so that it can be examined',
            correct: true,
          },
          { id: 'c', text: 'Proving that values are subjective' },
          { id: 'd', text: 'Determining which facts are relevant' },
        ],
        explanation:
          'Very often an argument that looked like it rested on evidence turns out to rest on an assumption nobody stated or defended. Getting the assumption into the open is where the actual disagreement usually turns out to be.',
      },
    ],
  },

  'the-open-question-argument': {
    summary: {
      essential:
        'Moore argued that if "this is pleasant, but is it good?" remains a real question, goodness has not been defined as pleasantness. The water/H₂O case shows a definition can be true without being obvious, which is why the argument is no longer thought decisive.',
      detailed:
        'It is now treated as a challenge naturalist accounts must meet rather than a refutation of them. Watching a famous argument be substantially defeated is itself worth seeing.',
    },
    questions: [
      {
        id: 'rebuttal',
        prompt: 'What does the water/H₂O case show about the open-question argument?',
        options: [
          { id: 'a', text: 'That chemistry and ethics are the same kind of enquiry' },
          {
            id: 'b',
            text: 'That an identity can be true without being transparent, so openness does not refute a definition',
            correct: true,
          },
          { id: 'c', text: 'That Moore was wrong about water' },
          { id: 'd', text: 'That all definitions are discovered empirically' },
        ],
        explanation:
          '"This is H₂O, but is it water?" would have been an open question before the chemistry. So the test tracks what we currently understand rather than what the terms mean, which is why it now functions as a challenge rather than a proof.',
      },
      {
        id: 'evolved',
        prompt:
          'Why is the "good = what we evolved to approve of" version particularly relevant now?',
        options: [
          {
            id: 'a',
            text: 'Because evolutionary accounts of morality are often presented as answering the question rather than relocating it',
            correct: true,
          },
          { id: 'b', text: 'Because Moore wrote about evolution' },
          { id: 'c', text: 'Because evolution is the only naturalist option' },
          { id: 'd', text: 'Because the question is closed in that case' },
        ],
        explanation:
          '"We evolved to approve of this, but is it good?" stays open. That does not refute the naturalist — the rebuttal applies here too — but it does show that explaining why we have a reaction is not the same as showing the reaction is correct.',
      },
    ],
  },

  'science-and-morality': {
    summary: {
      essential:
        'Facts settle most of what real moral disagreements turn on. What they do not settle is which outcomes are better, and complete information about consequences leaves genuine value conflicts unresolved.',
      detailed:
        'Two equally common mistakes: treating an evolutionary explanation of morality as refuting it, and using the is–ought gap as an excuse for ignoring evidence. Someone equipped with both can defend any position indefinitely.',
    },
    questions: [
      {
        id: 'settles',
        prompt: 'What does evidence settle in a moral dispute?',
        options: [
          { id: 'a', text: 'Nothing — moral questions are value questions' },
          { id: 'b', text: 'Everything, once we understand human nature' },
          {
            id: 'c',
            text: 'Most of what is actually disputed, once an evaluative premise is in place',
            correct: true,
          },
          { id: 'd', text: 'Only questions about individual psychology' },
        ],
        explanation:
          'Two people who agree that suffering matters and disagree about a policy are usually disagreeing about what the policy does. That is a question with an answer. Historical moral catastrophes have very often involved false empirical beliefs.',
      },
      {
        id: 'limit',
        prompt: 'What would remain unsettled if every empirical question were answered?',
        options: [
          {
            id: 'a',
            text: 'Which outcomes are better — how to weigh welfare against equality, or liberty against safety',
            correct: true,
          },
          { id: 'b', text: 'Whether any creature can suffer' },
          { id: 'c', text: 'Whether punishments deter' },
          { id: 'd', text: 'Nothing would remain unsettled' },
        ],
        explanation:
          'The disagreement in genuine value conflicts is about weighting, not about consequences. Complete information about what each option produces does not tell you which production is preferable, and that is not another measurement.',
      },
    ],
  },

  'am-i-a-good-person': {
    summary: {
      essential:
        'Almost everyone who asks concludes yes, which means the process producing the answer is not an assessment. Three reasons: you know your intentions and see others’ behaviour, you choose the criteria, and you cannot run the tests you were never given.',
      detailed:
        'The conclusion is about the reliability of the instrument, not the quality of people. Deciding you are actually terrible is the same error in the other direction.',
    },
    questions: [
      {
        id: 'asymmetry',
        prompt: 'What is the asymmetry that distorts self-assessment?',
        options: [
          { id: 'a', text: 'People are more honest about others than about themselves' },
          {
            id: 'b',
            text: 'You know your own intentions and see other people’s behaviour, so your failures come with explanations and theirs do not',
            correct: true,
          },
          { id: 'c', text: 'Memory is better for one’s own actions' },
          { id: 'd', text: 'People are more critical of themselves than of others' },
        ],
        explanation:
          'Both judgements feel like observations, and only one had access to the relevant information. No dishonesty is required for the distortion to operate, which is what makes it hard to correct for.',
      },
      {
        id: 'conclusion',
        prompt: 'What is the topic’s conclusion?',
        options: [
          { id: 'a', text: 'That most people are worse than they think' },
          { id: 'b', text: 'That most people are better than they think' },
          {
            id: 'c',
            text: 'That self-assessment is unreliable, so the question may not have an answer you can find by asking yourself',
            correct: true,
          },
          { id: 'd', text: 'That moral self-assessment should be abandoned' },
        ],
        explanation:
          'It is an argument about an instrument. Deciding you are terrible on the basis of it means trusting the same unreliable instrument in the other direction, which is not more honest — it is the same mistake with a different sign.',
      },
    ],
  },

  'situations-and-character': {
    summary: {
      essential:
        'Experiments repeatedly find small situational factors moving behaviour more than observers predict. The philosophical argument built on this is that virtue ethics describes traits that may not exist, and it is answered in several ways.',
      detailed:
        'The empirical base has replication problems, so the strength of the argument depends on which findings are relied on. The prediction gap looks robust; specific effect sizes are much less so.',
    },
    questions: [
      {
        id: 'result',
        prompt: 'What is the robust finding the philosophical argument relies on?',
        options: [
          { id: 'a', text: 'That character traits do not exist' },
          {
            id: 'b',
            text: 'That situations influence behaviour substantially more than observers predict in advance',
            correct: true,
          },
          { id: 'c', text: 'That most people will harm others if instructed' },
          { id: 'd', text: 'That religious belief does not affect behaviour' },
        ],
        explanation:
          'The prediction error is the philosophically interesting part rather than any particular rate. Specific numbers from these studies should be treated carefully; the direction and size of the gap between expectation and result is what survives scrutiny.',
      },
      {
        id: 'does-not-show',
        prompt: 'What do these studies not establish?',
        options: [
          { id: 'a', text: 'That hurry can affect helping behaviour' },
          { id: 'b', text: 'That people underestimate situational influence' },
          { id: 'c', text: 'That character is a myth', correct: true },
          { id: 'd', text: 'That authority affects compliance' },
        ],
        explanation:
          'Even taken at face value they show situations matter more than people assume, not that dispositions do nothing. And several key results have had replication difficulties, so an objection to a normative theory resting on them is only as strong as the findings.',
      },
      {
        id: 'practical',
        prompt: 'What practical advice follows without the strong claim?',
        options: [
          {
            id: 'a',
            text: 'Choose your situations, since structure may do more than resolve',
            correct: true,
          },
          { id: 'b', text: 'Stop trying to improve your character' },
          { id: 'c', text: 'Trust your instincts more' },
          { id: 'd', text: 'Judge others more harshly' },
        ],
        explanation:
          'Avoid the hurry, avoid the escalating institutional setting, do not rely on willpower where structure would do. This follows from the findings without requiring the claim that character is a myth.',
      },
    ],
  },

  'reasons-after-the-fact': {
    summary: {
      essential:
        'There is evidence that moral judgements often come first and reasoning afterwards. The unrestricted version of this claim defeats itself, since it would apply to the reasoning that produced it.',
      detailed:
        'The defensible claim is about conditions: reasoning is often post hoc under time pressure, when a conclusion is tied to identity, and when nobody pushes back. Conditions can be changed, which is where the practical advice comes from.',
    },
    questions: [
      {
        id: 'self-defeat',
        prompt: 'Why is "all reasoning is just rationalisation" self-defeating?',
        options: [
          { id: 'a', text: 'Because rationalisation is sometimes accurate' },
          {
            id: 'b',
            text: 'Because it would apply to the reasoning that produced it, leaving no reason to accept it',
            correct: true,
          },
          { id: 'c', text: 'Because the studies have not been replicated' },
          { id: 'd', text: 'Because Haidt does not claim it' },
        ],
        explanation:
          'The researchers do not make the unrestricted claim. The defensible version specifies conditions under which reasoning tends to be post hoc — which is a claim you can act on, unlike the version that undermines itself.',
      },
      {
        id: 'test',
        prompt: 'What practical test does the topic suggest?',
        options: [
          { id: 'a', text: 'Ask whether the judgement feels certain' },
          { id: 'b', text: 'Ask whether most people agree' },
          { id: 'c', text: 'Ask what would change your mind', correct: true },
          { id: 'd', text: 'Ask whether the judgement is consistent with your values' },
        ],
        explanation:
          'A judgement with no possible defeater is a commitment wearing a conclusion’s clothes. Note that the test applies to positions you approve of as well as ones you do not, which is the part people skip.',
      },
    ],
  },

  'moral-luck': {
    summary: {
      essential:
        'The control principle says you are only answerable for what you control. Almost every judgement we make violates it — for outcomes, for circumstances, and for character itself — and neither response to the problem is generally accepted.',
      detailed:
        'Constitutive luck is the version that connects to the Basic Argument: push the control principle into character and it consumes everything. Two independent lines of reasoning converging on the same place is informative.',
    },
    questions: [
      {
        id: 'kinds',
        prompt:
          'Two people drive home equally drunk; a child runs in front of one of them. What kind of moral luck is this?',
        options: [
          { id: 'a', text: 'Constitutive luck' },
          { id: 'b', text: 'Resultant luck', correct: true },
          { id: 'c', text: 'Circumstantial luck' },
          { id: 'd', text: 'Causal luck' },
        ],
        explanation:
          'Everything the agents controlled — the decision, the impairment, the risk taken — was identical, and only the outcome differed. If the control principle holds, the two are morally identical, which almost nobody believes.',
      },
      {
        id: 'responses',
        prompt: 'What does each of the two main responses cost?',
        options: [
          {
            id: 'a',
            text: 'Restricting assessment to what was controlled shrinks it towards nothing; abandoning the control principle owes an account of why luck matters morally',
            correct: true,
          },
          { id: 'b', text: 'Neither has a cost; the problem is merely apparent' },
          { id: 'c', text: 'Both require abandoning moral judgement entirely' },
          { id: 'd', text: 'Both depend on determinism being true' },
        ],
        explanation:
          'Williams and Nagel, who set the problem out, did not think it resolved. A third strategy distinguishes blameworthiness from liability and regret, which helps with resultant luck and not with constitutive luck.',
      },
      {
        id: 'humility',
        prompt: 'What does circumstantial luck suggest about judging others?',
        options: [
          {
            id: 'a',
            text: 'A particular humility in the judge, which is different from leniency for the judged',
            correct: true,
          },
          { id: 'b', text: 'That nobody should ever be blamed' },
          { id: 'c', text: 'That people who fail tests are unlucky rather than culpable' },
          { id: 'd', text: 'That untested people are more virtuous' },
        ],
        explanation:
          'Someone who collaborated still collaborated. The point is about the confidence of the person judging, who has usually not faced the test — and confusing humility in the judge with excuse for the judged is a real risk here.',
      },
    ],
  },

  'why-do-we-punish': {
    summary: {
      essential:
        'Punishment is the deliberate infliction of suffering, and several justifications are offered for it — desert, deterrence, protection, reform, communication. They conflict, and the conflicts give different answers about who and how much.',
      detailed:
        'Hart separates the general justifying aim of the institution from the principles governing its distribution, which lets a system be forward-looking in aim while keeping desert-based limits on its reach.',
    },
    questions: [
      {
        id: 'hart',
        prompt: 'What does Hart’s framework separate?',
        options: [
          { id: 'a', text: 'Criminal from civil law' },
          {
            id: 'b',
            text: 'Why the institution exists from who may be punished and how much',
            correct: true,
          },
          { id: 'c', text: 'Punishment from rehabilitation' },
          { id: 'd', text: 'Moral from legal responsibility' },
        ],
        explanation:
          'The separation lets the aim be forward-looking — the institution reduces harm — while the distribution stays backward-looking, so only the guilty may be punished and only in proportion. That answers the objection that pure deterrence would permit punishing the innocent.',
      },
      {
        id: 'evidence',
        prompt:
          'A system justified by deterrence is organised around severity of sentence. Why is that a problem by its own standard?',
        options: [
          {
            id: 'a',
            text: 'Because research generally finds certainty of apprehension to matter more than severity',
            correct: true,
          },
          { id: 'b', text: 'Because deterrence is morally illegitimate' },
          { id: 'c', text: 'Because severity is hard to measure' },
          { id: 'd', text: 'Because desert sets an upper limit' },
        ],
        explanation:
          'Where the justification is forward-looking it is answerable to evidence, and the evidence can be inconvenient. Noticing this requires no moral disagreement at all — it is the is–ought discipline paying off in a practical case.',
      },
    ],
  },

  'punishment-and-desert': {
    summary: {
      essential:
        'Retributivism holds that punishment is justified because it is deserved. In its strongest form it is not about satisfaction but about a wrong requiring an answer, and it explains why punishing the innocent is wrong rather than merely inefficient.',
      detailed:
        'The pressure comes from the free will movement: desert requires responsibility deep enough that suffering is owed. Retributivists reply that ordinary responsibility suffices; critics say the positive reason to punish needs more than that.',
    },
    questions: [
      {
        id: 'revenge',
        prompt: 'What distinguishes retribution from revenge?',
        options: [
          { id: 'a', text: 'Retribution is carried out by the state' },
          {
            id: 'b',
            text: 'Retribution is impersonal and proportionate, setting an upper bound that revenge has no reason to respect',
            correct: true,
          },
          { id: 'c', text: 'Revenge is always excessive' },
          { id: 'd', text: 'There is no real difference' },
        ],
        explanation:
          'The bound is doing real work: this much and no more, because that is what is deserved. Moving from private vengeance to proportionate public punishment was a substantial moral achievement, and collapsing the two erases it.',
      },
      {
        id: 'advantage',
        prompt: 'What can retributivism explain that pure deterrence cannot?',
        options: [
          { id: 'a', text: 'Why punishment reduces crime' },
          {
            id: 'b',
            text: 'Why punishing an innocent person is wrong in itself rather than merely inefficient',
            correct: true,
          },
          { id: 'c', text: 'Why prisons should be humane' },
          { id: 'd', text: 'Why some offenders reoffend' },
        ],
        explanation:
          'This is why desert appears as a constraint even in theories that are not retributive overall — it supplies a limit that forward-looking justifications have difficulty generating from their own resources.',
      },
    ],
  },

  'punishment-without-desert': {
    summary: {
      essential:
        'The quarantine model justifies restraining dangerous offenders by self-defence and defence of others, constrained by least infringement, with no appeal to desert. It is consistent, and it removes the upper bound that desert supplied.',
      detailed:
        'Duff’s communicative objection is different: a conviction says publicly that the wrong mattered, and treating an offender as a hazard to be managed loses that address — and loses something owed to the victim too.',
    },
    questions: [
      {
        id: 'basis',
        prompt: 'What justifies restraint on the quarantine model?',
        options: [
          { id: 'a', text: 'That the offender deserves it' },
          { id: 'b', text: 'The right of self-defence and defence of others', correct: true },
          { id: 'c', text: 'The deterrent effect on others' },
          { id: 'd', text: 'The expressive function of conviction' },
        ],
        explanation:
          'The analogy is with restricting someone carrying a dangerous infection: not deserved, justified by protection, with the least restriction that works and release when the danger passes.',
      },
      {
        id: 'objection',
        prompt: 'What is the most serious objection to a purely protective system?',
        options: [
          { id: 'a', text: 'That it would be too lenient' },
          {
            id: 'b',
            text: 'That protection permits detaining the dangerous who have done nothing, and has no hard upper bound',
            correct: true,
          },
          { id: 'c', text: 'That it requires determinism to be true' },
          { id: 'd', text: 'That it is more expensive' },
        ],
        explanation:
          'Defenders answer with the least-infringement principle and a high evidential bar. Critics reply that these are weaker than desert because they can be outweighed by a sufficiently large projected harm, whereas desert is a hard ceiling.',
      },
    ],
  },

  'responsibility-without-self-creation': {
    summary: {
      essential:
        'Nobody assembled themselves, and nobody has stopped blaming, thanking or forgiving. Either the practice is a vast error or the arguments were aimed at something it never needed. Three answers are on offer and none is established.',
      detailed:
        'Strawson’s is the most distinctive: responsibility is grounded in the reactive attitudes, which are constitutive of human relationships rather than conclusions drawn from a metaphysical premise.',
    },
    questions: [
      {
        id: 'answers',
        prompt: 'Which of these is not one of the three answers on offer?',
        options: [
          { id: 'a', text: 'The practice never needed ultimate responsibility' },
          { id: 'b', text: 'It did need it, so the desert-involving parts should go' },
          { id: 'c', text: 'It did need it, but can be revised into something that does not' },
          {
            id: 'd',
            text: 'The question is meaningless, so no answer is required',
            correct: true,
          },
        ],
        explanation:
          'The three live positions all take the question seriously. Declaring it meaningless is a fourth move, and it is not one the participants in this debate make — which is worth noticing, since it is a common reaction from outside.',
      },
      {
        id: 'strawson',
        prompt: 'What is Strawson’s claim about the reactive attitudes?',
        options: [
          {
            id: 'a',
            text: 'That they are constitutive of participating in human relationships, not conclusions from a metaphysical premise',
            correct: true,
          },
          { id: 'b', text: 'That they are irrational and should be abandoned' },
          { id: 'c', text: 'That they prove determinism is false' },
          { id: 'd', text: 'That they apply only to people who could have done otherwise' },
        ],
        explanation:
          'On his account they are not justified by a theory and so cannot be dislodged by one. The objection is direct: that we cannot give something up does not make it correct. Whether his reply to that is deep or evasive is genuinely disputed.',
      },
    ],
  },

  'reactive-attitudes-and-relationships': {
    summary: {
      essential:
        'Strawson distinguishes the participant stance, in which resentment and gratitude operate, from the objective stance, in which we treat someone as a thing to be managed. He argues a permanent global shift to the second is not available to us.',
      detailed:
        'Excuses show an act was not what it seemed; exemptions remove a person from the scope of the attitudes. Determinism is neither, on his account. Pereboom argues one can drop resentment while keeping love, concern and the demand for change.',
    },
    questions: [
      {
        id: 'distinction',
        prompt: 'What is the difference between an excuse and an exemption?',
        options: [
          {
            id: 'a',
            text: 'An excuse shows the act carried no ill will; an exemption removes the person from the scope of the attitudes',
            correct: true,
          },
          { id: 'b', text: 'An excuse is legal and an exemption is moral' },
          { id: 'c', text: 'An excuse is partial and an exemption is total' },
          { id: 'd', text: 'They are the same thing described differently' },
        ],
        explanation:
          '"He did not know" leaves the person a full participant; severe psychosis does not. Strawson’s argument is that determinism fits neither category, so it cannot function as the universal excuse or exemption incompatibilists take it to be.',
      },
      {
        id: 'forgiveness',
        prompt: 'Why does forgiveness require the participant stance?',
        options: [
          { id: 'a', text: 'Because it requires believing the person could have done otherwise' },
          {
            id: 'b',
            text: 'Because it means giving up warranted resentment, and someone regarded as a mechanism has nothing to forgive',
            correct: true,
          },
          { id: 'c', text: 'Because it is a religious concept' },
          { id: 'd', text: 'Because it requires the offender to apologise' },
        ],
        explanation:
          'Forgiveness is not deciding the person was not responsible — that would be an excuse. It is relinquishing a response that was appropriate, which is only available inside the framework the hard incompatibilist wants to dissolve.',
      },
    ],
  },

  'degrees-of-responsibility': {
    summary: {
      essential:
        'Real judgements of responsibility are almost always partial — duress, provocation, immaturity, diminished capacity. What they track is capacity to recognise and respond to reasons, which comes in degrees.',
      detailed:
        'This does not dissolve the deep problem, since the capacity was not chosen either. What it shows is that a practice already exists tracking something real and gradable, which is what would have to be replaced.',
    },
    questions: [
      {
        id: 'common',
        prompt: 'What do duress, provocation, immaturity and diminished capacity have in common?',
        options: [
          { id: 'a', text: 'They all excuse completely' },
          { id: 'b', text: 'They all involve external force' },
          {
            id: 'c',
            text: 'They all reduce the capacity to recognise reasons or to act on that recognition',
            correct: true,
          },
          { id: 'd', text: 'They are all recognised only in criminal law' },
        ],
        explanation:
          'And capacity clearly admits of more and less, which is why practice already delivers fine-grained partial verdicts. None of this requires settling a metaphysical question first.',
      },
      {
        id: 'limit',
        prompt: 'Why does a degree-based account not solve the deep problem?',
        options: [
          { id: 'a', text: 'Because capacities cannot be measured' },
          {
            id: 'b',
            text: 'Because the capacity itself was not chosen, so the Basic Argument applies to it too',
            correct: true,
          },
          { id: 'c', text: 'Because legal practice is not philosophically authoritative' },
          { id: 'd', text: 'Because degrees are arbitrary' },
        ],
        explanation:
          'Presenting degrees as the solution would be convenient and wrong. Someone with more capacity got it from somewhere, and the regress applies to capacities exactly as it applies to characters.',
      },
    ],
  },

  'taking-responsibility-forward': {
    summary: {
      essential:
        'Being held responsible looks backward at desert; taking responsibility looks forward at repair and future conduct. The arguments that threaten the first leave most of the second standing — which is not a resolution, because they are different things.',
      detailed:
        'A practical corollary: guilt that produces repair is doing work, guilt that only produces suffering is not. If ultimate desert is doubtful, suffering for its own sake loses its justification even in the internal case.',
    },
    questions: [
      {
        id: 'distinction',
        prompt: 'Why is the forward-looking notion not a resolution of the problem?',
        options: [
          { id: 'a', text: 'Because it is also threatened by the Basic Argument' },
          {
            id: 'b',
            text: 'Because it identifies a different thing that was never under attack',
            correct: true,
          },
          { id: 'c', text: 'Because nobody actually takes responsibility' },
          { id: 'd', text: 'Because it requires free will' },
        ],
        explanation:
          '"So responsibility survives after all" would be a cheap ending. The responsibility that survives is not the one the arguments were about — though it is the part most people care about most of the time.',
      },
      {
        id: 'guilt',
        prompt: 'What follows about guilt if ultimate desert is doubtful?',
        options: [
          { id: 'a', text: 'That guilt should be abandoned entirely' },
          {
            id: 'b',
            text: 'That guilt which produces repair keeps its justification while suffering for its own sake loses it',
            correct: true,
          },
          { id: 'c', text: 'That nobody should feel guilty about anything' },
          { id: 'd', text: 'That guilt is always irrational' },
        ],
        explanation:
          'The distinction follows from the argument rather than being a therapeutic aside. Someone who has followed it might hold themselves to account more precisely and punish themselves less.',
      },
    ],
  },
};
