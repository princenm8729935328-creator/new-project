/**
 * Human Evolution, Philosophical Lens — Movements VII, VIII and IX: being
 * judged, punishing, and being responsible.
 *
 * These three movements belong in one file because they are one argument.
 * Movement VII asks whether you can assess your own character. Movement VIII
 * asks what a society is doing when it punishes. Movement IX asks what is left
 * of responsibility once the free will movement has done its work.
 *
 * The empirical material in Movement VII is handled with the same discipline as
 * the Libet material earlier: reported as findings with contested
 * interpretations and known replication problems, never as a demonstration that
 * character is a myth. A reader who comes away believing psychology has abolished
 * character has been misinformed, and the topic says so directly.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const PHIL_CHARACTER_TOPICS: readonly Topic[] = [
  {
    id: topicId('am-i-a-good-person'),
    slug: 'am-i-a-good-person',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 133,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Am I a good person?',
    subtitle: 'A question you cannot ask from a neutral position.',
    summary: {
      essential:
        'Almost everyone who asks this concludes yes. That near-unanimity is itself the problem: a test almost nobody fails is not measuring anything.',
      detailed:
        'The difficulty is not that people are dishonest. It is that the assessor and the assessed are the same person, and the assessment is made with standards that person already holds.',
      technical:
        'Self-assessment here suffers from at least three distinct problems: asymmetric access to one’s own intentions versus others’ behaviour, motivated standard-selection, and the unavailability of counterfactual tests one has never faced.',
    },
    glossaryTerms: [glossaryTermId('virtue-ethics')],
    related: [topicId('science-and-morality'), topicId('situations-and-character')],
    blocks: [
      {
        id: 'question',
        kind: 'prose',
        text: {
          essential:
            'Ask it honestly. Most people, after a pause, arrive at something like "broadly yes, with some faults". Very few arrive at no.',
          detailed:
            'That distribution should be suspicious. If the question were a genuine assessment, the answers would spread out. Instead they cluster at the same point regardless of what the person has actually done, which suggests the process producing them is not an assessment.',
        },
      },
      {
        id: 'asymmetry',
        kind: 'prose',
        text: {
          essential:
            'Here is one reason why. You know your own intentions and you see other people’s behaviour. So your failures come with explanations attached, and theirs do not.',
          detailed:
            'You were short with someone because you had slept badly and were worried about something. They were short with you because they are like that. Both judgements feel like observations. Only one of them had access to the relevant information, and it was not the one about the other person.',
        },
      },
      {
        id: 'standards',
        kind: 'prose',
        text: {
          essential:
            'A second reason: you choose the criteria. Someone who is generous but unkind will weigh generosity heavily. Someone who is honest but cold will think honesty is what matters most.',
          detailed:
            'This does not require any dishonesty. It is what happens when a person assesses themselves using values they already hold, and their values are correlated with what they are good at — which is exactly what you would expect, since the same history produced both.',
        },
      },
      {
        id: 'untested',
        kind: 'prose',
        text: {
          essential:
            'And a third, which is the hardest. You are certain you would not have collaborated, would have spoken up, would have helped. You have never been tested, and you cannot test yourself.',
          detailed:
            'Almost everyone believes this about themselves, and historically, most people in such situations did not. Both cannot be right. There is no way to check from inside, and the confidence is no evidence at all, because everyone has it including those who turned out not to act.',
        },
      },
      {
        id: 'not-cynicism',
        kind: 'callout',
        tone: 'caution',
        title: 'The conclusion is not that everyone is secretly bad',
        text: {
          essential:
            'The argument is about the reliability of self-assessment, not about the quality of people. It cuts equally against concluding that you are worse than you think.',
          detailed:
            'Someone who reads this and decides they are actually terrible has made the same mistake — trusting an unreliable instrument, just in the other direction. The honest conclusion is narrower and less dramatic: the instrument is unreliable, and the question may not have the kind of answer you can find by asking yourself.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Is there any way to find out what kind of person you are?',
        whyItMatters: {
          essential:
            'If self-assessment is unreliable and the tests that would settle it are ones you cannot arrange, then a fact about you may be permanently out of your reach.',
          detailed:
            'Partial answers exist. What you have actually done is evidence, and it is public. What people who know you well say, especially when it is unwelcome, is evidence. What you do when it is costly is better evidence than what you intend when it is not. None of these gets you a verdict, and the demand for one may itself be the wrong shape.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing available. Even a complete behavioural record would leave open what you would have done in the situations you never faced, which is a large part of what the question is asking.',
        },
        references: [referenceId('sep-ethics-virtue'), referenceId('sep-moral-luck')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'There is a body of research that bears on the last of these worries, and it is both more interesting and less conclusive than its popular reputation.',
        },
      },
    ],
    furtherReading: [referenceId('sep-ethics-virtue')],
  },

  {
    id: topicId('situations-and-character'),
    slug: 'situations-and-character',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 134,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How much is the situation?',
    subtitle: 'Findings that unsettle the idea of character, and what they do not show.',
    summary: {
      essential:
        'Experiments repeatedly find that small situational factors move behaviour more than observers predict. What philosophical conclusion follows is contested, and the empirical picture has its own problems.',
      detailed:
        'This is the one place in this movement where empirical work does substantial philosophical work, so the standard of care has to be correspondingly high.',
      technical:
        'The situationist challenge targets the existence of robust, cross-situationally consistent global traits, not the existence of dispositions as such; the inference to virtue ethics being empirically inadequate requires that Aristotelian virtue be a global trait of that kind.',
    },
    glossaryTerms: [glossaryTermId('situationism'), glossaryTermId('virtue-ethics')],
    related: [topicId('am-i-a-good-person'), topicId('reasons-after-the-fact')],
    blocks: [
      {
        id: 'findings',
        kind: 'visualization',
        visualizationId: visualizationId('situation-vs-character'),
      },
      {
        id: 'milgram',
        kind: 'claim',
        statement: {
          essential:
            'Milgram reported levels of compliance with instructions to administer what participants believed were harmful shocks that greatly exceeded what observers had predicted in advance.',
          detailed:
            'The prediction gap is the philosophically interesting part rather than any particular rate. Psychiatrists and laypeople asked beforehand expected almost nobody to continue to the end; a substantial proportion did. The studies have been extensively criticised on ethical and methodological grounds, and later analyses of the archives have complicated the original picture, but the basic prediction failure has held up in partial replications.',
        },
        evidence: 'established',
        references: [referenceId('milgram-1963-obedience')],
      },
      {
        id: 'batson',
        kind: 'claim',
        statement: {
          essential:
            'Darley and Batson found that whether seminary students stopped to help a person in apparent distress was predicted by whether they had been told they were late, rather than by what they were on their way to speak about.',
          detailed:
            'Some participants were on their way to give a talk on the parable of the Good Samaritan. Hurry was the variable that moved helping. The study has a small sample by modern standards and its exact effect sizes should be treated with caution; it is cited here for the direction of the finding, which is the part the philosophical argument uses.',
        },
        evidence: 'established',
        references: [referenceId('darley-batson-1973-jerusalem')],
      },
      {
        id: 'philosophical',
        kind: 'prose',
        text: {
          essential:
            'The philosophical argument built on these: virtue ethics requires stable traits that hold across situations. If behaviour is driven by situations instead, the theory describes something that does not exist.',
          detailed:
            'Doris presses this as an empirical objection to a normative theory, which is unusual and is part of why the debate has been productive. If a theory tells you to become courageous and there is no such trait to become, the advice has no referent.',
        },
      },
      {
        id: 'replies',
        kind: 'claim',
        statement: {
          essential:
            'Defenders of virtue ethics reply that the studies do not test Aristotelian virtue, and that the theory never claimed virtue was common.',
          detailed:
            'Three replies are standard. First, Aristotle holds that full virtue is rare and takes a lifetime; finding that ordinary people are situationally variable is consistent with that. Second, the studies measure single behaviours in unfamiliar settings, not the settled dispositions the theory describes. Third, the theory is partly a recommendation — become this — which is not refuted by finding that few people have.',
        },
        evidence: 'active-research',
        references: [referenceId('sep-ethics-virtue'), referenceId('doris-lack-of-character')],
      },
      {
        id: 'replication',
        kind: 'callout',
        tone: 'caution',
        title: 'The empirical base is not as solid as the argument needs',
        text: {
          essential:
            'Social psychology has had substantial replication problems over the past fifteen years, and several classic situationist results have been re-examined critically.',
          detailed:
            'This matters for how much weight the philosophical argument can bear. An objection to a normative theory that rests on empirical findings is only as strong as the findings. The prediction-gap result appears robust; specific effect sizes and some individual studies are much less so. Anyone using this literature to draw a strong conclusion about human character should say which findings they are relying on and how confident those are.',
        },
        references: [referenceId('doris-lack-of-character')],
      },
      {
        id: 'takeaway',
        kind: 'prose',
        text: {
          essential:
            'What survives all of this is modest and genuinely useful: situations matter more than people expect, and the expectation error is large and consistent.',
          detailed:
            'That has a practical consequence. If you want to behave well, choosing your situations may do more than resolving to be better — avoid the hurry, avoid the escalating institutional setting, do not rely on willpower where structure would do. This is advice that follows from the findings without requiring the strong claim that character is a myth.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'If you behave well only in situations that make it easy, are you a good person?',
        whyItMatters: {
          essential:
            'Most people’s lives contain few severe tests. If virtue requires passing tests you were never given, then most assessments of character are assessments of circumstance.',
          detailed:
            'This is circumstantial moral luck, arriving from the empirical side. It is the same problem the moral luck topic reaches by argument, and the convergence is worth noticing: two entirely different routes lead to the conclusion that character assessment is entangled with fortune.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing empirical. Whether untested virtue counts as virtue is a conceptual question about what the term picks out.',
        },
        references: [referenceId('sep-moral-luck'), referenceId('sep-ethics-virtue')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'There is a related finding about the reasons people give for what they do, and it is more unsettling than the one about behaviour.',
        },
      },
    ],
    furtherReading: [referenceId('doris-lack-of-character')],
  },

  {
    id: topicId('reasons-after-the-fact'),
    slug: 'reasons-after-the-fact',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 135,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Reasons that arrive afterwards',
    subtitle: 'Sometimes the argument is built to defend a conclusion already reached.',
    summary: {
      essential:
        'There is evidence that moral judgements often come first and the reasoning afterwards. How general this is, and what follows from it, are both disputed.',
      detailed:
        'The finding is easy to overstate into "reasoning is a sham", which is neither supported nor coherent — since the claim itself is offered as the conclusion of an argument.',
      technical:
        'The social intuitionist model holds that moral judgement is typically caused by automatic intuition with reasoning serving post hoc justificatory and social functions, while allowing that private reflection and interpersonal argument can cause judgement change.',
    },
    glossaryTerms: [glossaryTermId('epistemology')],
    related: [topicId('situations-and-character'), topicId('moral-luck')],
    blocks: [
      {
        id: 'phenomenon',
        kind: 'prose',
        text: {
          essential:
            'The pattern: someone judges an action wrong immediately, offers a reason, has the reason answered, and does not change their judgement. They then look for another reason.',
          detailed:
            'That sequence is the interesting part. If the reason had been the ground of the judgement, defeating it should have moved the judgement. That it does not suggests the reason was recruited rather than relied on.',
        },
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Haidt proposes that moral judgement is usually produced by rapid intuition, with reasoning generated afterwards to justify it.',
          detailed:
            'The social intuitionist model allows two routes by which reasoning can change a judgement: private reflection, which he holds is rare, and argument from other people, which he holds is the main one. The model has been influential and has been challenged, including by work finding that reasoning affects judgement more than the model predicts.',
        },
        evidence: 'active-research',
        references: [referenceId('haidt-2001-emotional-dog')],
      },
      {
        id: 'confabulation',
        kind: 'prose',
        text: {
          essential:
            'The more general version of this is older. Nisbett and Wilson found people giving confident, fluent explanations of their own choices that had nothing to do with what actually influenced them.',
          detailed:
            'The participants were not lying. They reported what seemed to them to be their reasons, and what seemed to them to be their reasons was constructed. This is the finding from the conditioning movement, returning here in a moral context.',
        },
      },
      {
        id: 'overclaim',
        kind: 'callout',
        tone: 'misconception',
        title: '"Reasoning is just rationalisation" defeats itself',
        text: {
          essential:
            'If all reasoning is post hoc justification, then so is the reasoning that led to that conclusion, and there is no reason to accept it.',
          detailed:
            'The defensible claim is narrower: reasoning is often post hoc, especially under time pressure, especially when a conclusion is tied to identity, and especially when nobody will push back. That is a claim about conditions, and conditions can be changed. The unrestricted version is self-undermining and is not what the researchers claim.',
        },
        references: [referenceId('haidt-2001-emotional-dog')],
      },
      {
        id: 'so-what',
        kind: 'prose',
        text: {
          essential:
            'If this is right even in part, then feeling certain about a moral judgement is not evidence that you have thought it through — and the two feel the same.',
          detailed:
            'The practical test that follows is a good one: can you say what would change your mind? A judgement with no possible defeater is not a conclusion; it is a commitment wearing a conclusion’s clothes. Note that this test applies to positions you approve of as well as ones you do not.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'If reasoning often follows judgement, is moral argument pointless?',
        whyItMatters: {
          essential:
            'It clearly is not pointless — people do change their minds, moral consensus does shift, and arguments do sometimes work. Explaining how that happens if reasoning is mostly post hoc is the real question.',
          detailed:
            'Haidt’s own answer is that the persuasion happens between people rather than inside them: your argument does not change your mind but it can change mine. Others argue that reasoning evolved for exactly that social function and works well in groups with disagreement while working badly alone. On either account, the practical lesson points the same way: argue with people who disagree with you.',
        },
        whatWouldSettleIt: {
          essential:
            'Better evidence on when private reflection does and does not change moral judgements. This is an active empirical question.',
        },
        references: [referenceId('haidt-2001-emotional-dog')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Set aside how well you assess yourself. There is a problem with moral assessment as such, and it applies to judgements made by anyone about anyone.',
        },
      },
    ],
    furtherReading: [referenceId('haidt-2001-emotional-dog')],
  },

  {
    id: topicId('moral-luck'),
    slug: 'moral-luck',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 136,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Moral luck',
    subtitle: 'We judge people for things they did not control, and we know we do.',
    summary: {
      essential:
        'A principle everyone accepts — you are only answerable for what you control — turns out to be violated by almost every judgement we actually make, including ones we are unwilling to revise.',
      detailed:
        'Williams and Nagel set the problem out in the 1970s and neither thought it had a solution. It remains one of the cleanest unresolved problems in moral philosophy.',
      technical:
        'Four varieties are standardly distinguished: resultant, circumstantial, constitutive and causal luck, the last of which is the free will problem under another description.',
    },
    glossaryTerms: [glossaryTermId('moral-luck')],
    related: [topicId('reasons-after-the-fact'), topicId('why-do-we-punish')],
    blocks: [
      {
        id: 'principle',
        kind: 'prose',
        text: {
          essential:
            'Start with something that seems obvious: a person can only be blamed for what was up to them. Nobody is to blame for the weather.',
          detailed:
            'This is the control principle, and it underlies excuse, duress, accident, and the distinction between bad luck and bad conduct. It is about as secure as a moral principle gets.',
        },
      },
      {
        id: 'cases',
        kind: 'visualization',
        visualizationId: visualizationId('moral-luck-cases'),
      },
      {
        id: 'resultant',
        kind: 'prose',
        text: {
          essential:
            'Two people drive home equally drunk. A child runs into the road in front of one of them. Everything either of them controlled was identical.',
          detailed:
            'One will be charged with a serious offence, will be treated by their community as having done something terrible, and will very likely regard themselves that way for the rest of their life. The other will wake up with a headache. If the control principle is right, these two people are morally identical. Almost nobody believes that.',
        },
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Williams and Nagel independently argued that our moral judgements are pervasively influenced by factors outside the agent’s control, in ways that resist elimination.',
          detailed:
            'Nagel distinguishes resultant, circumstantial, constitutive and causal luck and argues that stripping away everything not controlled leaves nothing to assess. Williams introduces agent-regret — the distinctive response of someone whose action caused harm through no fault — and argues that it is not irrational, which is itself a challenge to the control principle.',
        },
        evidence: 'established',
        references: [referenceId('nagel-mortal-questions'), referenceId('williams-moral-luck')],
      },
      {
        id: 'regress',
        kind: 'prose',
        text: {
          essential:
            'The version that connects to everything earlier in this lens is constitutive luck. Your patience, your courage, your capacity for cruelty — you did not assemble these.',
          detailed:
            'Push the control principle into character and it consumes everything. The person who resisted where another collaborated had a different temperament, and neither chose theirs. This is the Basic Argument arriving from a different direction, and the fact that two independent lines of reasoning converge here is informative.',
        },
      },
      {
        id: 'responses',
        kind: 'claim',
        statement: {
          essential:
            'Responses to moral luck divide between restricting moral assessment to what was controlled and abandoning the control principle, and neither is generally accepted.',
          detailed:
            'The first preserves the principle at the cost of saying that the drunk driver who killed someone is no more blameworthy than the one who did not, and that our practices are systematically mistaken. The second preserves the practices at the cost of the principle, and owes an account of why luck should make a moral difference. A third strategy distinguishes blameworthiness from other responses such as liability and regret, which helps with some cases and not with constitutive luck.',
        },
        evidence: 'open-question',
        references: [referenceId('sep-moral-luck')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Would you be a different person morally if your life had contained different tests?',
        whyItMatters: {
          essential:
            'Most people are confident they would have behaved well in circumstances they never faced. Circumstantial luck suggests that confidence is unfounded — and that the difference between a good record and a bad one may be substantially a difference in what was asked.',
          detailed:
            'This is not an excuse for anyone. Someone who collaborated still collaborated. It is a reason for a particular kind of humility in the judge, which is different from leniency for the judged, and the two are easy to confuse.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing. The counterfactual is not testable, and the conceptual question about whether luck can affect moral status is not empirical.',
        },
        references: [referenceId('sep-moral-luck'), referenceId('williams-moral-luck')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'If luck reaches this far into moral assessment, what exactly is a society doing when it punishes someone?',
        },
      },
    ],
    furtherReading: [referenceId('nagel-mortal-questions')],
  },

  {
    id: topicId('why-do-we-punish'),
    slug: 'why-do-we-punish',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 137,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why do we punish?',
    subtitle: 'Deliberately imposing suffering is the hardest thing a society does to justify.',
    summary: {
      essential:
        'Punishment means intentionally harming someone. Anything that requires that much justification deserves to have the justification stated — and there are several, which do not agree.',
      detailed:
        'Most people hold two or three of these at once without noticing that they conflict, and the conflicts show up in real disagreements about sentencing.',
      technical:
        'Hart’s framework separates the general justifying aim of the institution from the principles of distribution governing whom it may be applied to and how much, allowing mixed theories that are forward-looking in aim and retributive in constraint.',
    },
    glossaryTerms: [
      glossaryTermId('retributivism'),
      glossaryTermId('desert'),
      glossaryTermId('quarantine-model'),
    ],
    related: [topicId('moral-luck'), topicId('punishment-and-desert')],
    blocks: [
      {
        id: 'stark',
        kind: 'prose',
        text: {
          essential:
            'State it plainly. Punishment is the deliberate infliction of suffering on a person by other people who have decided to do it. Everything about that requires justification.',
          detailed:
            'Ordinarily, deliberately causing someone to suffer is close to a paradigm of wrongdoing. Punishment is the case where we hold that it is not only permitted but required, and the arguments for that need to be as strong as the thing they license.',
        },
      },
      {
        id: 'justifications',
        kind: 'visualization',
        visualizationId: visualizationId('punishment-justifications'),
      },
      {
        id: 'conflict',
        kind: 'prose',
        text: {
          essential:
            'The justifications conflict, and the conflicts are not academic. They give different answers about who should be punished and how much.',
          detailed:
            'Deterrence favours punishing the visible and the copyable, regardless of how culpable they were. Desert favours proportionality to the wrong regardless of effect. Protection favours detaining whoever is dangerous, including people who have done nothing yet. Reform favours intervention until the person changes, which may be longer or shorter than the offence warrants. A real system that tries to serve all four will be incoherent at the edges, and it is.',
        },
      },
      {
        id: 'hart',
        kind: 'claim',
        statement: {
          essential:
            'Hart argues that the question of why the institution of punishment exists must be separated from the question of who may be punished and how much.',
          detailed:
            'On his account the general justifying aim can be forward-looking — the institution exists because it reduces harm — while the principles of distribution remain backward-looking, so that only the guilty may be punished and only in proportion to what they did. This structure allows a mixed theory to answer the objection that pure deterrence would permit punishing the innocent.',
        },
        evidence: 'established',
        references: [referenceId('hart-punishment-responsibility')],
      },
      {
        id: 'evidence',
        kind: 'prose',
        text: {
          essential:
            'Where the justification is forward-looking, it is answerable to evidence — and this is where the is–ought discipline pays off.',
          detailed:
            'If punishment is justified because it deters, then how much it deters is a question with an answer, and the answer can be inconvenient. Research on deterrence generally finds certainty of apprehension to matter more than severity of sentence. A system justified by deterrence and organised around severity is failing by its own standard, and noticing that requires no moral disagreement at all.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Is there any justification for punishment that does not depend on desert?',
        whyItMatters: {
          essential:
            'If the free will movement’s harder conclusions hold, desert-based justifications are in trouble, and everything would rest on the forward-looking ones.',
          detailed:
            'Those have their own problems — deterrence permits punishing the innocent if nobody finds out, protection permits detaining the dangerous who have done nothing. Whether a forward-looking system can be built with adequate constraints is the question the quarantine model tries to answer, and it is taken up in the next topic.',
        },
        whatWouldSettleIt: {
          essential:
            'A worked-out system with constraints that do not covertly appeal to desert. Proposals exist and are actively criticised.',
        },
        references: [
          referenceId('sep-legal-punishment'),
          referenceId('caruso-rejecting-retributivism'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Take the most intuitive justification — that it is deserved — and see what it needs to be true.',
        },
      },
    ],
    furtherReading: [referenceId('sep-legal-punishment')],
  },

  {
    id: topicId('punishment-and-desert'),
    slug: 'punishment-and-desert',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 138,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Deserved',
    subtitle: 'The oldest justification, and the one the earlier movements threaten.',
    summary: {
      essential:
        'Retributivism says punishment is justified because it is deserved, not because of what it achieves. It captures something real about moral response, and it needs exactly the kind of responsibility the Basic Argument attacks.',
      detailed:
        'It is worth stating in its strongest form before applying pressure, because the weak form — punishment as revenge — is easy to dismiss and is not what its defenders hold.',
      technical:
        'Retributivism holds that desert provides a non-instrumental reason to punish, which distinguishes it both from consequentialist theories and from theories treating desert merely as a constraint on distribution.',
    },
    glossaryTerms: [glossaryTermId('retributivism'), glossaryTermId('desert')],
    related: [topicId('why-do-we-punish'), topicId('punishment-without-desert')],
    blocks: [
      {
        id: 'strongest',
        kind: 'prose',
        text: {
          essential:
            'The strongest version is not about satisfaction. It is that a serious wrong creates a moral situation that is unresolved until something answers it, and that punishment is what answers it.',
          detailed:
            'On this account, letting a grave wrong pass without response says something false — that it did not matter, or that the victim did not. Kant held that punishment must never be inflicted merely as a means to some other good, because that would use the offender as a tool, and that it is owed to them as a rational agent responsible for what they did.',
        },
      },
      {
        id: 'not-revenge',
        kind: 'callout',
        tone: 'misconception',
        title: 'Retribution is not revenge',
        text: {
          essential:
            'Revenge is personal, unlimited, and satisfied by suffering. Retribution is impersonal, proportionate, and constrained by what the person did.',
          detailed:
            'The distinction is doing real work. A retributive theory sets an upper bound: this much and no more, because that is what is deserved. Revenge has no such bound. Historically, moving from private vengeance to proportionate public punishment was a substantial moral achievement, and treating the two as the same erases it.',
        },
        references: [referenceId('sep-legal-punishment')],
      },
      {
        id: 'appeal',
        kind: 'prose',
        text: {
          essential:
            'It also does something the forward-looking theories cannot: it explains why punishing an innocent person is not merely inefficient but wrong.',
          detailed:
            'A pure deterrence theory has to explain that case away. Retributivism does not have to: punishing someone who did not do it is unjust in itself, because they do not deserve it. That is a real advantage and it is why desert appears as a constraint even in theories that are not retributive overall.',
        },
      },
      {
        id: 'pressure',
        kind: 'prose',
        text: {
          essential:
            'Now the pressure. Desert requires that the person be responsible in a deep enough sense that suffering is owed. The Basic Argument says nobody is responsible in that sense.',
          detailed:
            'And the pressure does not require accepting the Basic Argument in full. It is enough to notice how much of what produced this person — their temperament, their childhood, the situation they were in, the harms done to them — they did not choose. Sentencing already recognises this in mitigation. The question is why it should stop where it currently stops.',
        },
      },
      {
        id: 'reply',
        kind: 'claim',
        statement: {
          essential:
            'Retributivists reply that desert requires responsibility of the ordinary kind — knowing what one is doing and being able to act otherwise in the ordinary sense — not ultimate self-creation.',
          detailed:
            'On this view the demand for ultimate responsibility is a philosopher’s addition that ordinary desert judgements never contained. Critics respond that the difference between "deserves to suffer" and "should be prevented from doing it again" is exactly what needs the deeper notion, and that without it the retributivist is entitled to the constraint but not to the positive reason to punish.',
        },
        evidence: 'active-research',
        references: [
          referenceId('sep-legal-punishment'),
          referenceId('strawson-g-1994-impossibility'),
        ],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'If someone’s cruelty is fully explained by what was done to them, does that reduce what they deserve?',
        whyItMatters: {
          essential:
            'Most people’s intuitions move as the explanation gets more complete — which suggests desert is already understood to track something about origins. Where it stops moving, and why, is hard to state.',
          detailed:
            'This is the manipulation argument in its real-world form, and courts face it constantly. A severely abused childhood is treated as mitigation. A brain tumour is treated as exculpation. A bad character formed by ordinary bad luck is treated as neither. Articulating the principle behind those lines has proved extremely difficult.',
        },
        whatWouldSettleIt: {
          essential:
            'A principled account of which causal histories defeat desert. Several have been attempted; none is standard.',
        },
        references: [
          referenceId('sep-moral-responsibility'),
          referenceId('caruso-rejecting-retributivism'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Suppose desert goes. Is there a system left, and would it be better or worse?',
        },
      },
    ],
    furtherReading: [referenceId('hart-punishment-responsibility')],
  },

  {
    id: topicId('punishment-without-desert'),
    slug: 'punishment-without-desert',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 139,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'A system without desert',
    subtitle: 'What would be left, and what would be lost.',
    summary: {
      essential:
        'If nobody ultimately deserves to suffer, a justice system would have to rest on protection, prevention and repair. Proposals exist. They are not obviously worse and they are not obviously safe.',
      detailed:
        'Taking the proposal seriously is the test of whether the earlier arguments were being held or merely admired.',
      technical:
        'The quarantine analogy grounds incapacitation in the right of self-defence and the principle of least infringement, generating constraints intended to substitute for the limiting role desert plays in mixed theories.',
    },
    glossaryTerms: [glossaryTermId('quarantine-model'), glossaryTermId('retributivism')],
    related: [topicId('punishment-and-desert'), topicId('responsibility-without-self-creation')],
    blocks: [
      {
        id: 'proposal',
        kind: 'prose',
        text: {
          essential:
            'The main proposal draws an analogy with public health. We restrict someone carrying a dangerous infection without supposing they deserve it. We use the least restriction that works, we treat them well, and we release them when the danger passes.',
          detailed:
            'Applied to crime: detain the dangerous for protection, use the least restrictive measure effective, invest heavily in the conditions that reduce offending, and never impose suffering as an end. Caruso develops this in detail, including the constraints meant to prevent it becoming preventive detention without limit.',
        },
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Caruso argues that a public-health quarantine model can justify incapacitation of dangerous offenders without appealing to desert.',
          detailed:
            'The justification is the right of self-defence and the defence of others, constrained by a principle of least infringement. The model is explicitly forward-looking, treats the causes of criminal behaviour as a public-health problem, and rejects the claim that anyone deserves to suffer for what they have done.',
        },
        evidence: 'established',
        references: [referenceId('caruso-rejecting-retributivism')],
      },
      {
        id: 'advantages',
        kind: 'prose',
        text: {
          essential:
            'Some advantages are real. It removes the justification for punishment that exceeds what protection requires. It makes prevention central rather than an afterthought. And it is consistent, which mixed systems are not.',
          detailed:
            'It also dissolves a problem that troubles retributivism: how to set a sentence when the wrong is incommensurable with any quantity of time. A protection-based system has a natural answer — as long as the danger lasts and no longer — even if measuring that is difficult.',
        },
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The objections are serious. Protection permits detaining someone dangerous who has committed no offence. It permits indefinite detention if the danger does not pass. And it removes the upper bound desert provided.',
          detailed:
            'Defenders answer that the least-infringement principle and a high evidential bar supply the constraints. Critics reply that these are weaker than desert, because they can be outweighed by a sufficiently large projected harm, whereas desert is a hard ceiling. Whether the substitute constraints hold under pressure is the crux, and the historical record of preventive detention is not reassuring.',
        },
      },
      {
        id: 'expression',
        kind: 'prose',
        text: {
          essential:
            'A different objection: something is lost that is not about deterrence or protection at all. A conviction says publicly that what happened was wrong and that the victim mattered.',
          detailed:
            'Duff’s communicative account puts this at the centre: punishment addresses the offender as a member of a moral community, calling them to account rather than managing them as a hazard. The quarantine model, by treating the offender as a danger to be contained, arguably loses that address — and loses something owed to the victim as well.',
        },
      },
      {
        id: 'honest',
        kind: 'callout',
        tone: 'caution',
        title: 'This lens does not recommend a system',
        text: {
          essential:
            'Both frameworks have defenders who have thought about this far longer than a reader of this page has, and both have costs that are not hypothetical.',
          detailed:
            'The point of the movement is not to arrive at a policy. It is that anyone with a confident view about punishment should be able to say which justification they are relying on, what that justification requires to be true, and what it costs when the requirement fails. Most confident views have not done that.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Can a society hold people accountable without believing anyone deserves to suffer?',
        whyItMatters: {
          essential:
            'Accountability and desert are usually bundled together. Whether they come apart is the practical form of the entire free will problem.',
          detailed:
            'Some of what accountability involves clearly survives: the judgement that an act was wrong, the demand for explanation and repair, the withdrawal of trust, the protection of others. What is in question is whether resentment — and the sense that suffering is owed — can be removed without the rest collapsing. P. F. Strawson thought not; Pereboom and Caruso think so.',
        },
        whatWouldSettleIt: {
          essential:
            'Partly a conceptual question about what accountability requires and partly an empirical one about what people can sustain. Neither is answered.',
        },
        references: [
          referenceId('strawson-pf-1962-freedom-resentment'),
          referenceId('caruso-rejecting-retributivism'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Which brings the lens back to the person rather than the institution. What is left of being responsible?',
        },
      },
    ],
    furtherReading: [referenceId('caruso-rejecting-retributivism')],
  },

  {
    id: topicId('responsibility-without-self-creation'),
    slug: 'responsibility-without-self-creation',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 140,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Responsible without having made yourself',
    subtitle: 'The question the whole lens has been building towards.',
    summary: {
      essential:
        'Nobody created themselves. We hold each other responsible constantly and cannot stop. The question is whether that practice needs the thing it cannot have.',
      detailed:
        'Three serious answers are on offer and this topic gives each its strongest form without choosing between them.',
      technical:
        'The positions are: that responsibility never required ultimate origination; that it did and must therefore be abandoned; and that it did but can be revised into something that does not.',
    },
    glossaryTerms: [glossaryTermId('reactive-attitudes'), glossaryTermId('reasons-responsiveness')],
    related: [topicId('the-basic-argument'), topicId('reactive-attitudes-and-relationships')],
    blocks: [
      {
        id: 'situation',
        kind: 'prose',
        text: {
          essential:
            'Here is where the lens has arrived. Nobody assembled themselves. Luck reaches into character. Self-assessment is unreliable. And none of this has stopped anyone from blaming, thanking, resenting or forgiving for a single day.',
          detailed:
            'That gap between what the arguments suggest and what everyone actually does is the datum. Either the practice is a vast error, or the arguments have been aimed at something the practice never needed.',
        },
      },
      {
        id: 'conditions',
        kind: 'visualization',
        visualizationId: visualizationId('responsibility-conditions'),
      },
      {
        id: 'answer1',
        kind: 'prose',
        text: {
          essential:
            'First answer: the practice never needed it. What we actually check — did they know, could they have acted otherwise in the ordinary sense, were they capable of responding to reasons — is all satisfiable.',
          detailed:
            'On this view the metaphysical demand was imported by philosophers and then found wanting, which says more about the import than about the practice. Notice that the conditions we do check are tracking a capacity, and capacities are real, present in some people and absent in others, and improvable.',
        },
      },
      {
        id: 'answer2',
        kind: 'prose',
        text: {
          essential:
            'Second answer: it did need it, and so the practice is mistaken and should be given up — at least in its desert-involving parts.',
          detailed:
            'This is not a counsel of despair on its defenders’ account. They argue that dropping the claim that people deserve to suffer leaves protection, repair, moral judgement of acts, and the demand that someone change. What goes is resentment and the sense of owed suffering, and they argue both would be better gone.',
        },
      },
      {
        id: 'answer3',
        kind: 'claim',
        statement: {
          essential:
            'P. F. Strawson argues that responsibility is grounded in the reactive attitudes we take towards one another, and that no general theoretical thesis could rationally dislodge them.',
          detailed:
            'His argument is that the framework of resentment, gratitude and indignation is constitutive of participating in human relationships rather than a conclusion we draw from a metaphysical premise. We do suspend these attitudes in particular cases — for children, for the severely ill, under duress — but a global suspension is not something we could adopt, and he doubts it is even intelligible as a decision.',
        },
        evidence: 'established',
        references: [referenceId('strawson-pf-1962-freedom-resentment')],
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The objection to Strawson is direct: that we cannot give something up does not make it correct. People have been unable to give up plenty of things that were wrong.',
          detailed:
            'His defenders reply that this misses the argument — the claim is not that the attitudes are justified by our inability to drop them, but that they are not the kind of thing that stands in need of external justification, because the framework within which justification operates is partly constituted by them. Whether that is a deep point or a sophisticated evasion is genuinely disputed.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Which parts of holding someone responsible survive if ultimate responsibility does not?',
        whyItMatters: {
          essential:
            'This is the practical residue of the entire lens, and it is a question each of the three answers settles differently.',
          detailed:
            'There is more agreement here than the positions suggest. Almost everyone accepts that judging an act wrong survives, that demanding change survives, that protecting people survives, and that some responses — resentment above all — are the ones under pressure. The disagreement is about whether what remains deserves the name.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing discoverable. This is a question about which practices to keep, and it will be settled by argument and decision if it is settled at all.',
        },
        references: [
          referenceId('strawson-pf-1962-freedom-resentment'),
          referenceId('sep-moral-responsibility'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Strawson’s argument deserves its own examination, because it changes what kind of question this is.',
        },
      },
    ],
    furtherReading: [referenceId('sep-moral-responsibility')],
  },

  {
    id: topicId('reactive-attitudes-and-relationships'),
    slug: 'reactive-attitudes-and-relationships',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 141,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Resentment, gratitude, forgiveness',
    subtitle: 'Responsibility may live in relationships rather than in metaphysics.',
    summary: {
      essential:
        'Strawson’s move is to relocate the question. Responsibility is not a conclusion drawn from a theory about causation; it is part of what it is to be in relationships with people.',
      detailed:
        'Whether that relocation solves the problem or sidesteps it is the live question, and it has organised most work on responsibility since 1962.',
      technical:
        'The distinction between the participant stance and the objective stance grounds excuses and exemptions within the practice, while blocking the inference from a general thesis to a global exemption.',
    },
    glossaryTerms: [glossaryTermId('reactive-attitudes')],
    related: [
      topicId('responsibility-without-self-creation'),
      topicId('degrees-of-responsibility'),
    ],
    blocks: [
      {
        id: 'observation',
        kind: 'prose',
        text: {
          essential:
            'Start with what resentment is. It is not a judgement about causation. It is a response to being treated with contempt or indifference by someone whose regard matters to you.',
          detailed:
            'Notice that it has an addressee. You cannot resent the weather, and you do not resent a falling tile. Resentment is directed at someone as someone — as a participant in a relationship who could have shown you something better.',
        },
      },
      {
        id: 'stance',
        kind: 'prose',
        text: {
          essential:
            'Strawson contrasts this participant stance with an objective stance, in which we treat someone as a thing to be managed, cured or avoided rather than argued with.',
          detailed:
            'We adopt the objective stance sometimes: with very young children, in severe illness, under extreme duress. It is a real option and it is available. His claim is that adopting it permanently towards everyone is not — it would be the end of adult human relationships rather than a change of theory about them.',
        },
      },
      {
        id: 'excuses',
        kind: 'claim',
        statement: {
          essential:
            'Strawson distinguishes excuses, which show an act was not what it seemed, from exemptions, which remove a person from the scope of the attitudes.',
          detailed:
            'An excuse — he did not know, he was pushed, it was an accident — leaves the person a full participant while showing that the act carried no ill will. An exemption — severe psychosis, very young age — treats the person as not currently a participant. His central argument is that determinism, if true, would not be an excuse of the first kind, and that treating it as a universal exemption would require the global suspension he argues is not available.',
        },
        evidence: 'established',
        references: [referenceId('strawson-pf-1962-freedom-resentment')],
      },
      {
        id: 'forgiveness',
        kind: 'prose',
        text: {
          essential:
            'Forgiveness fits this picture in an interesting way. It is not deciding that the person was not responsible — that would be an excuse. It is giving up the resentment while holding that it was warranted.',
          detailed:
            'That structure is only available inside the participant stance. Someone who genuinely regards another as a mechanism has nothing to forgive. So forgiveness, which most people value highly, appears to require exactly the framework the hard incompatibilist wants to dissolve. Whether a successor practice could do the same work is unclear.',
        },
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The objection, again: a practice can be inescapable and unjustified. Optical illusions are inescapable and we do not therefore believe them.',
          detailed:
            'Pereboom presses the further point that the objective stance is not the only alternative — that one can abandon resentment while retaining love, moral concern, disappointment and the demand for change. He argues from cases: people do sometimes come to see a person’s cruelty as fully explained by their history, and find the resentment dissolving without the relationship ending.',
        },
      },
      {
        id: 'careful',
        kind: 'callout',
        tone: 'note',
        title: 'What a lot of this turns on',
        text: {
          essential:
            'Much of this dispute is about what human beings can actually sustain, which is not a question philosophy can answer alone.',
          detailed:
            'Whether a person can drop resentment and keep the rest, whether a society can, whether the result would be humane or cold — these are partly empirical and partly personal. That does not make them less philosophical. It means the philosophical work is in getting clear about what would count as an answer.',
        },
        references: [referenceId('pereboom-living-without-free-will')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Is it possible to love someone while regarding them as fully caused?',
        whyItMatters: {
          essential:
            'If yes, the hard incompatibilist’s position is liveable and the objection that it destroys relationships fails. If no, then a whole philosophical position runs aground on something nobody can do.',
          detailed:
            'The question has an unusual status: it is answered by trying rather than by arguing. Parents of very young children may have the most relevant experience, since they routinely love someone whose behaviour they regard as not yet fully theirs — without that love being diminished.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing an argument could establish. Reports from people who have attempted it are the available evidence, and the problem of other minds limits what they can settle.',
        },
        references: [
          referenceId('strawson-pf-1962-freedom-resentment'),
          referenceId('pereboom-living-without-free-will'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'One thing the whole debate tends to obscure: in practice, responsibility is never a yes or no.',
        },
      },
    ],
    furtherReading: [referenceId('strawson-pf-1962-freedom-resentment')],
  },

  {
    id: topicId('degrees-of-responsibility'),
    slug: 'degrees-of-responsibility',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 142,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Responsibility in degrees',
    subtitle: 'The binary framing may be the thing causing the trouble.',
    summary: {
      essential:
        'Almost every real judgement of responsibility is partial. Duress, provocation, immaturity, ignorance and compulsion all reduce it without removing it — which suggests the concept was never binary.',
      detailed:
        'This does not dissolve the deep problem, and saying it does would be too convenient. But it changes what the deep problem threatens.',
      technical:
        'Degree-theoretic accounts tie responsibility to the degree of the relevant capacity — for reasons-recognition and reasons-reaction — which admits of more and less in a way an origination requirement does not.',
    },
    glossaryTerms: [glossaryTermId('reasons-responsiveness')],
    related: [
      topicId('reactive-attitudes-and-relationships'),
      topicId('taking-responsibility-forward'),
    ],
    blocks: [
      {
        id: 'practice',
        kind: 'prose',
        text: {
          essential:
            'Look at what any legal system or any family actually does. Nobody is asked whether a person was responsible. They are asked how responsible, given what they knew, what pressure they were under, and what they were capable of.',
          detailed:
            'Duress reduces. Provocation reduces. Age reduces. Diminished capacity reduces. None of these produces a clean yes or no, and the gradations are fine-grained and taken seriously by people with a great deal at stake.',
        },
      },
      {
        id: 'capacity',
        kind: 'prose',
        text: {
          essential:
            'What these all have in common is capacity. The question is how well the person could recognise the reasons against acting, and how well they could act on that recognition.',
          detailed:
            'And capacity clearly comes in degrees. A fifteen-year-old has more than a five-year-old and less than a thirty-year-old. Someone exhausted has less than someone rested. Someone in a state of terror has less than someone calm. None of this requires a metaphysical decision.',
        },
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'Several accounts tie responsibility to a capacity for recognising and responding to reasons, which admits of degrees.',
          detailed:
            'Fischer and Ravizza require that the mechanism issuing in action be moderately reasons-responsive and that the agent have taken ownership of it. Wolf requires the ability to act in accordance with reasons one could recognise as good. Both frameworks make partial responsibility natural rather than an awkward special case, which is a point in their favour given how universal partial responsibility is in practice.',
        },
        evidence: 'established',
        references: [
          referenceId('fischer-ravizza-responsibility-control'),
          referenceId('wolf-freedom-within-reason'),
        ],
      },
      {
        id: 'limit',
        kind: 'callout',
        tone: 'caution',
        title: 'This does not dissolve the deep problem',
        text: {
          essential:
            'The capacity itself was not chosen. Someone with more of it got it from somewhere, and the Basic Argument applies to capacities exactly as it applies to characters.',
          detailed:
            'It would be convenient to present degrees as the solution, and it is not. What it does is narrower: it shows that a practice already exists which tracks something real and gradable, and that this practice is what would have to be replaced if the deep argument succeeds. That is useful without being an answer.',
        },
        references: [referenceId('strawson-g-1994-impossibility')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'If responsibility tracks capacity, and capacity was not chosen, what exactly is being tracked?',
        whyItMatters: {
          essential:
            'A capacity-based account is attractive because it matches practice, and it inherits the problem it was meant to avoid as soon as you ask where the capacity came from.',
          detailed:
            'One reply: what is tracked is the present state of the person, and that is what blame is addressed to — a person with a working capacity is someone an appeal can reach, which is what makes addressing them appropriate. Whether that makes blame apt or merely useful is precisely the disagreement between Strawsonian and hard incompatibilist views.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of why present capacity is the morally relevant feature, independent of how it was acquired. Attempts exist and are contested.',
        },
        references: [
          referenceId('sep-moral-responsibility'),
          referenceId('fischer-ravizza-responsibility-control'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'There is one form of responsibility the arguments so far have not touched at all — and it points forwards rather than backwards.',
        },
      },
    ],
    furtherReading: [referenceId('fischer-ravizza-responsibility-control')],
  },

  {
    id: topicId('taking-responsibility-forward'),
    slug: 'taking-responsibility-forward',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 143,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Taking responsibility',
    subtitle: 'A different thing from being held responsible, and it survives more.',
    summary: {
      essential:
        'Being held responsible looks backward at what someone deserves. Taking responsibility looks forward at what someone will do about it. The arguments that threaten the first leave much of the second standing.',
      detailed:
        'This is not offered as a way out of the problem. It is an observation about which parts of the practice depend on which premises.',
      technical:
        'Forward-looking responsibility concerns the assumption of obligations regarding repair and future conduct, and does not require the desert base that backward-looking blame requires.',
    },
    glossaryTerms: [glossaryTermId('autonomy')],
    related: [topicId('degrees-of-responsibility'), topicId('the-thing-you-cannot-doubt')],
    blocks: [
      {
        id: 'distinction',
        kind: 'prose',
        text: {
          essential:
            'Two different things share a name. Being held responsible is something others do to you, about the past. Taking responsibility is something you do, about what happens next.',
          detailed:
            'The second does not require deciding what you deserved. Someone can say "this happened because of what I did, and I am going to repair it and not do it again" without any claim about self-creation being involved.',
        },
      },
      {
        id: 'survives',
        kind: 'prose',
        text: {
          essential:
            'Almost nothing in the earlier movements touches this. The Basic Argument targets ultimate desert. Moral luck targets assessment. Neither says anything against a person deciding what to do now.',
          detailed:
            'And the capacity to do it is real and unevenly distributed: some people can acknowledge a fault and change; some cannot. That difference is observable, it matters enormously in practice, and no metaphysical result makes it disappear.',
        },
      },
      {
        id: 'not-escape',
        kind: 'callout',
        tone: 'caution',
        title: 'This is not a resolution of the problem',
        text: {
          essential:
            'The forward-looking notion does not answer the question of whether anyone ultimately deserves blame. It identifies a different thing that was never under attack.',
          detailed:
            'It would be a cheap ending to say "so responsibility survives after all" — the responsibility that survives is not the one the arguments were about. What can be said is that the part of the practice most people care about most of the time, the part concerned with repair and with not doing it again, rests on less than the part concerned with desert.',
        },
      },
      {
        id: 'guilt',
        kind: 'prose',
        text: {
          essential:
            'There is a practical corollary about guilt. Guilt that makes someone repair something is doing work. Guilt that only makes them suffer is doing none.',
          detailed:
            'The distinction is not a therapeutic aside; it follows from the argument. If ultimate desert is doubtful, then suffering for its own sake has lost its justification even in the internal case — while the forward-looking part, the part that changes what you do, keeps whatever justification it had. Someone who has followed the arguments might reasonably hold themselves to account more precisely and punish themselves less.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Can you take responsibility for something you could not have avoided?',
        whyItMatters: {
          essential:
            'People do, constantly — for harm caused by accident, by illness, by decisions made under conditions that made a good choice impossible. Whether this is a mistake or a form of moral seriousness is not obvious.',
          detailed:
            'Williams’s agent-regret is exactly this: the lorry driver who, through no fault, kills a child, and who would be a worse person if he felt only what a bystander felt. Williams argues the response is not irrational, which is a substantial claim against the control principle.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of what agent-regret is responding to. Williams’s own treatment is influential and not regarded as conclusive.',
        },
        references: [referenceId('williams-moral-luck'), referenceId('sep-moral-luck')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Every movement so far has been about a person — deciding, being judged, being responsible. It is time to look at what a person is made of from the inside.',
        },
      },
    ],
    furtherReading: [referenceId('williams-moral-luck')],
  },
];
