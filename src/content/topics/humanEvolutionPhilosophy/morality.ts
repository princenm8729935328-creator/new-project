/**
 * Human Evolution, Philosophical Lens — Movements V and VI: morality, and the
 * gap between facts and values.
 *
 * Two hazards handled explicitly here.
 *
 * The first is Nietzsche. He is the philosopher most often reduced to slogans,
 * and the reduction runs in two directions at once: into a self-help message
 * about becoming powerful, and into an endorsement of cruelty he did not make.
 * The topic on him is written to be accurate about what he argued, what he did
 * not argue, and what is disputed among people who read him professionally.
 *
 * The second is the is–ought gap, which is routinely oversimplified into
 * "science cannot explain morality" — a slogan that is both wrong and useless.
 * The topic ends by insisting on how much facts do settle, because a reader who
 * comes away thinking evidence is irrelevant to moral questions has been made
 * worse at thinking rather than better.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const PHIL_MORALITY_TOPICS: readonly Topic[] = [
  {
    id: topicId('where-does-wrong-come-from'),
    slug: 'where-does-wrong-come-from',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 124,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Where does "wrong" come from?',
    subtitle: 'Some things seem obviously wrong. What is the seeming a seeming of?',
    summary: {
      essential:
        'Torturing a child for entertainment is wrong. Almost nobody hesitates. The question is what that judgement is — a perception of a fact, a report of an attitude, or something else.',
      detailed:
        'The certainty is not in question here. What is in question is what the certainty is about, and the answer turns out to be surprisingly hard to give.',
      technical:
        'The question is metaethical rather than normative: it concerns the semantics, metaphysics and epistemology of moral judgement rather than which actions are right.',
    },
    glossaryTerms: [glossaryTermId('metaethics')],
    related: [topicId('the-basic-argument'), topicId('morality-of-consequences')],
    blocks: [
      {
        id: 'intuition',
        kind: 'prose',
        text: {
          essential:
            'Take a case with no complications: someone hurts a child because they enjoy it. Wrong. Not "wrong in my culture", not "wrong according to my preferences". Wrong.',
          detailed:
            'That reaction is immediate, and it does not feel like a preference. Preferences feel like preferences. This feels like noticing something. Any account of morality has to say something about why.',
        },
      },
      {
        id: 'problem',
        kind: 'prose',
        text: {
          essential:
            'Now try to say what you noticed. Not what you felt — what property of the act you detected. Where is the wrongness located, and what would it be made of?',
          detailed:
            'The physical description of the event is complete without it: bodies, forces, nerve signals, sounds. Nothing in that description is the wrongness. And yet the judgement does not feel like an addition to the description. It feels like part of what was there.',
        },
      },
      {
        id: 'frameworks',
        kind: 'visualization',
        visualizationId: visualizationId('moral-theory-lenses'),
      },
      {
        id: 'two-questions',
        kind: 'prose',
        text: {
          essential:
            'Two different questions are usually run together here, and separating them is the first useful move. One: what makes an action right? Two: what makes anything right at all?',
          detailed:
            'The first is answered by a normative theory — consequences, duties, character. The second is metaethics, and you can hold any normative theory alongside almost any metaethical position. Someone can be a utilitarian who thinks moral facts are objective, or a utilitarian who thinks morality is a human construction that we should nonetheless run this way.',
        },
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'The strength of a moral intuition is not, by itself, evidence for any particular account of what moral judgements are.',
          detailed:
            'Realists explain the strength by saying the intuition detects a fact. Expressivists explain it by saying that some attitudes are very deeply held. Error theorists explain it by saying that the judgement asserts an objective fact — which is why it feels like detection — and that the assertion is false. All three explain the same datum, so the datum cannot decide between them.',
        },
        evidence: 'inference',
        references: [referenceId('sep-moral-realism'), referenceId('sep-moral-anti-realism')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Could two people agree on every fact about a situation and still disagree about whether it was wrong?',
        whyItMatters: {
          essential:
            'If they could, then moral disagreement is not factual disagreement, which constrains what moral judgements can be. If they could not, moral facts are somehow fixed by the other facts — and it needs saying how.',
          detailed:
            'Real cases are hard to assess, because apparent moral disagreement usually turns out to involve some factual disagreement as well: about consequences, about who is affected, about what actually happened. Whether any residue remains once those are cleared away is exactly what is at issue.',
        },
        whatWouldSettleIt: {
          essential:
            'A clean case of moral disagreement with no factual disagreement underneath — which is very hard to construct, because the parties can always attribute a factual error to each other.',
        },
        references: [referenceId('mackie-ethics'), referenceId('sep-moral-realism')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Before the deep question, the practical one. Three families of answer have dominated, and they disagree in ways that show up in real cases.',
        },
      },
    ],
    furtherReading: [referenceId('sep-moral-realism')],
  },

  {
    id: topicId('morality-of-consequences'),
    slug: 'morality-of-consequences',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 125,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What if only outcomes matter?',
    subtitle: 'The simplest moral theory, and the places it takes you.',
    summary: {
      essential:
        'Consequentialism says an act is right if it produces the best outcome. It is simple, powerful, and it generates conclusions many of its own defenders find hard to accept.',
      detailed:
        'Its great strength is that it takes suffering seriously wherever it occurs. Its great difficulty is that it will sometimes tell you to do something that feels like a violation.',
      technical:
        'Act consequentialism evaluates each act by its outcome; rule consequentialism evaluates acts by conformity to rules whose general acceptance would produce the best outcomes, and faces the charge of collapsing into act consequentialism or into rule worship.',
    },
    glossaryTerms: [glossaryTermId('consequentialism'), glossaryTermId('utilitarianism')],
    related: [topicId('where-does-wrong-come-from'), topicId('morality-of-duty')],
    blocks: [
      {
        id: 'appeal',
        kind: 'prose',
        text: {
          essential:
            'The starting thought is hard to argue with: suffering is bad, and it is no less bad for happening to a stranger. If that is right, the question for any action is simply how much suffering and flourishing it produces.',
          detailed:
            'Two features follow immediately. Everyone counts equally, which was a radical idea when Bentham stated it and is still not how most people behave. And nothing is forbidden in itself — every rule is answerable to what it produces.',
        },
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Mill holds that actions are right in proportion as they tend to promote happiness and wrong as they tend to produce the reverse.',
          detailed:
            'Mill departs from Bentham by insisting that pleasures differ in kind as well as quantity, arguing that those acquainted with both would prefer the higher. The move is designed to answer the charge that utilitarianism is a doctrine fit for swine, and it has been attacked as inconsistent with the underlying theory ever since.',
        },
        evidence: 'established',
        references: [referenceId('mill-utilitarianism')],
      },
      {
        id: 'power',
        kind: 'prose',
        text: {
          essential:
            'Its power shows up when it disagrees with common sense in a direction that turns out to be right. It said slavery was wrong when most people did not. It says distance does not reduce an obligation, which most people still do not act on.',
          detailed:
            'Singer’s argument makes the second point sharply: if you would ruin your shoes to pull a drowning child from a pond, and distance makes no moral difference, then you have obligations to distant strangers that almost nobody discharges. The argument is simple and most people cannot say what is wrong with it — which is uncomfortable in a way worth sitting with.',
        },
      },
      {
        id: 'problem',
        kind: 'prose',
        text: {
          essential:
            'The difficulty arrives when the sums come out wrong. If harvesting one unwilling person’s organs would save five, the arithmetic is clear, and the answer is monstrous.',
          detailed:
            'The standard replies are serious: rules against this produce better outcomes overall; a society that permitted it would be worse; the calculation is never as clean as the case stipulates. Each reply has force. But notice what they have in common — they all argue that the violation is not actually optimific. None says it would be wrong even if it were.',
        },
      },
      {
        id: 'trolley',
        kind: 'claim',
        statement: {
          essential:
            'The trolley cases were designed to isolate the difference between harm as a means and harm as a side effect, not to poll intuitions.',
          detailed:
            'Foot introduced the original case in a discussion of double effect. Thomson added the footbridge variant, where pushing one person to stop the trolley uses them as the means. Many people judge the two cases differently while granting that the arithmetic is identical, which is the datum a purely consequentialist theory has to explain away or accept as error.',
        },
        evidence: 'established',
        references: [referenceId('foot-1967-double-effect'), referenceId('thomson-1976-trolley')],
      },
      {
        id: 'trolley-caution',
        kind: 'callout',
        tone: 'misconception',
        title: 'The trolley problem is not about trolleys',
        text: {
          essential:
            'It is not a survey question and not a test of whether you are a good person. It is an instrument for locating a distinction, and it works by holding the numbers fixed while changing one structural feature.',
          detailed:
            'Treating it as a poll — "most people say pull the lever" — misses the point entirely. What is interesting is not the distribution of answers but the fact that the same person often answers the two versions differently, which suggests they are tracking something other than the total.',
        },
        references: [referenceId('thomson-1976-trolley')],
      },
      {
        id: 'demanding',
        kind: 'prose',
        text: {
          essential:
            'A second difficulty is demandingness. If you should always act to produce the most good, then every meal out, every evening off and every gift to a friend rather than to a stranger is a failure.',
          detailed:
            'Consequentialists split. Some accept it: the theory is demanding because the world contains a great deal of remediable suffering, and our comfort with not helping is the thing to be suspicious of. Others build in permissions for personal projects, at the cost of complicating the theory that was supposed to be simple.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Is there anything that would be wrong even if it produced the best outcome?',
        whyItMatters: {
          essential:
            'A yes commits you to something outside the calculation — which is what the next topic is about. A no commits you to accepting the conclusions in the cases you find worst.',
          detailed:
            'It is worth noticing that most people answer yes quickly and then have difficulty saying what the something is, or why it outranks preventing harm. That difficulty is the whole subject matter of deontological ethics.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing empirical. This is a question about what moral reasons there are, and it is settled by argument if at all.',
        },
        references: [referenceId('mill-utilitarianism'), referenceId('kant-groundwork')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential: 'Kant answered yes, and built a theory around what that something is.',
        },
      },
    ],
    furtherReading: [referenceId('singer-1972-famine')],
  },

  {
    id: topicId('morality-of-duty'),
    slug: 'morality-of-duty',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 126,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What if some things are simply forbidden?',
    subtitle: 'Kant’s answer, its strictness, and what the strictness buys.',
    summary: {
      essential:
        'Kant holds that some acts are wrong regardless of outcome, because they cannot be willed as universal rules or because they treat a person merely as a means.',
      detailed:
        'The theory is often caricatured as rigid rule-following. Its actual structure is a test, and the test is more interesting and more fragile than the caricature.',
      technical:
        'The Formula of Universal Law tests a maxim for contradiction in conception or in willing; the Formula of Humanity forbids treating rational nature merely as a means. Kant holds these equivalent, which is disputed.',
    },
    glossaryTerms: [glossaryTermId('deontology'), glossaryTermId('categorical-imperative')],
    related: [topicId('morality-of-consequences'), topicId('morality-of-character')],
    blocks: [
      {
        id: 'starting',
        kind: 'prose',
        text: {
          essential:
            'Kant starts from something ordinary: the difference between doing the right thing and doing it for the right reason. A shopkeeper who is honest only because dishonesty would hurt trade is not acting morally, on his account, however reliable the honesty.',
          detailed:
            'That observation is worth pausing on because it is the opposite of the consequentialist starting point. For Kant, what matters morally is not what happens but what the person willed, and a good outcome produced from self-interest carries no moral credit.',
        },
      },
      {
        id: 'test',
        kind: 'visualization',
        visualizationId: visualizationId('universalizability-test'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Kant argues that one must act only on maxims that could be willed as universal laws, and must treat humanity never merely as a means but always also as an end.',
          detailed:
            'The Groundwork presents these as formulations of a single principle. The first is a consistency test on the rule one is acting on; the second forbids using a person in a way they could not in principle consent to. Kant holds the formulations equivalent, and whether they are has been argued about since.',
        },
        evidence: 'established',
        references: [referenceId('kant-groundwork')],
      },
      {
        id: 'not-golden-rule',
        kind: 'callout',
        tone: 'misconception',
        title: 'Not "what if everyone did that?"',
        text: {
          essential:
            'The universal law test is not a question about consequences. It asks whether the act would still be possible if the rule were universal, not whether the results would be bad.',
          detailed:
            'The false promise fails because in a world where everyone made insincere promises when convenient, promising would convey nothing and the act could not be performed. That is a contradiction in the act itself, not a prediction about a worse world. Nor is it the golden rule: Kant explicitly rejected that formulation as inadequate, partly because it makes the test depend on what you happen to want.',
        },
        references: [referenceId('kant-groundwork')],
      },
      {
        id: 'strength',
        kind: 'prose',
        text: {
          essential:
            'The second formulation is where most of the lasting force is. Treating someone merely as a means is using them for your purposes in a way they could not agree to if they knew what was happening.',
          detailed:
            'It captures something the consequentialist framework struggles with. Deception and coercion are wrong on this account not because of what they produce but because of what they do to the other person’s standing as someone who reasons and decides. Most contemporary work on autonomy, consent and manipulation traces back to this.',
        },
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The famous objection: a murderer asks where your friend is hiding. Kant’s own answer, in a short essay, is that you may not lie. Almost nobody follows him here.',
          detailed:
            'The standard defence is that the essay overstates his own theory and that the maxim can be described in a way that passes the test. The standard reply is that this concedes the objection — if the description can be adjusted until the answer comes out right, the test is not doing the work; the prior judgement is.',
        },
      },
      {
        id: 'description-problem',
        kind: 'claim',
        statement: {
          essential:
            'The universalisability test is sensitive to how the maxim is described, and Kant provides no procedure for fixing the description.',
          detailed:
            'Almost any act passes under a sufficiently specific description and fails under a sufficiently general one. Defenders argue that the Formula of Humanity is less vulnerable, and that a reasonable reading of an agent’s actual maxim is available in practice. Critics hold that the gap is structural. The problem is long-standing and is not regarded as resolved.',
        },
        evidence: 'active-research',
        references: [referenceId('kant-groundwork'), referenceId('korsgaard-sources-normativity')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Can a moral rule be absolute if we can always imagine a case where following it is catastrophic?',
        whyItMatters: {
          essential:
            'Allowing exceptions makes the rule answerable to outcomes, which is the theory it was meant to replace. Refusing them produces verdicts almost nobody will accept.',
          detailed:
            'Threshold deontology is the usual compromise: constraints hold until the stakes become extreme. It is widely used and widely regarded as unprincipled, since nothing in the theory says where the threshold is or why there should be one.',
        },
        whatWouldSettleIt: {
          essential:
            'A principled account of when a constraint yields. Several have been proposed; none is standard.',
        },
        references: [referenceId('kant-groundwork')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Both theories so far ask what to do. An older tradition thought that was the wrong question to start with.',
        },
      },
    ],
    furtherReading: [referenceId('kant-groundwork')],
  },

  {
    id: topicId('morality-of-character'),
    slug: 'morality-of-character',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 127,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What if the question is who to be?',
    subtitle: 'Virtue ethics, and the objection from psychology.',
    summary: {
      essential:
        'Aristotle asks not which acts are permitted but what kind of person to become. Virtue is a stable disposition, acquired by practice, and located by judgement rather than by formula.',
      detailed:
        'The tradition has an old objection — that it gives no guidance — and a newer one from psychology, that stable character traits may not exist in the way the theory needs.',
      technical:
        'Aristotelian virtue is a hexis: a settled disposition concerning choice, lying in a mean relative to us, determined by reason as the person of practical wisdom would determine it.',
    },
    glossaryTerms: [
      glossaryTermId('virtue-ethics'),
      glossaryTermId('eudaimonia'),
      glossaryTermId('doctrine-of-the-mean'),
      glossaryTermId('phronesis'),
    ],
    related: [topicId('morality-of-duty'), topicId('situations-and-character')],
    blocks: [
      {
        id: 'reframe',
        kind: 'prose',
        text: {
          essential:
            'Aristotle’s question is not "what should I do now?" but "what should I become?" — on the grounds that a person of good character will mostly see what to do without needing a rule.',
          detailed:
            'This is a genuinely different starting point rather than a rephrasing. It makes moral development the central topic, treats moral knowledge as a skill rather than a body of principles, and explains why good people sometimes cannot articulate why an action was wrong while being reliably right about it.',
        },
      },
      {
        id: 'mean',
        kind: 'visualization',
        visualizationId: visualizationId('virtue-mean'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Aristotle holds that virtue is a settled disposition acquired through habituation, lying between an excess and a deficiency, and identified by practical wisdom rather than by a rule.',
          detailed:
            'He is explicit that the mean is relative to the person and the circumstances rather than an arithmetic midpoint, and that no general account can settle particular cases, because particulars fall outside what a rule can specify. He also holds that virtue requires feeling rightly, not merely acting rightly: someone who does the right thing while wanting badly to do otherwise is continent rather than virtuous.',
        },
        evidence: 'established',
        references: [referenceId('aristotle-nicomachean-ethics')],
      },
      {
        id: 'habituation',
        kind: 'prose',
        text: {
          essential:
            'The account of how virtue is acquired is the practical heart of it. You become just by doing just things, courageous by doing courageous things. The disposition is built by the acts, not the other way round.',
          detailed:
            'This has an uncomfortable implication and Aristotle accepts it: someone raised badly may be unable to see what a well-raised person sees, and may be beyond the reach of argument. Moral education has to happen before the capacity for moral reasoning is in place — which returns the conditioning movement’s problem in a new form.',
        },
      },
      {
        id: 'objection-guidance',
        kind: 'prose',
        text: {
          essential:
            'The old objection: this tells you nothing. Faced with a decision, "be courageous" is not advice.',
          detailed:
            'Hursthouse’s reply is that the theory does generate guidance — act as a virtuous person would, and the virtues and vices name specific things to do and avoid: do not betray, do not be callous, be honest. She argues the complaint holds every theory to a standard none of them meets, since "maximise utility" and "act on universalisable maxims" also require judgement to apply.',
        },
      },
      {
        id: 'objection-situationism',
        kind: 'claim',
        statement: {
          essential:
            'Situationist critics argue that experimental social psychology finds behaviour driven more by features of the situation than by stable global character traits.',
          detailed:
            'Doris and others draw on studies of helping, obedience and conformity to argue that the robust, cross-situationally consistent traits virtue ethics requires are not what the evidence shows. Defenders reply that the virtues were never claimed to be common, that the studies test something narrower than Aristotelian virtue, and — increasingly — that several of the key findings have had difficulty replicating. The dispute is live and its resolution is not obvious.',
        },
        evidence: 'active-research',
        references: [referenceId('doris-lack-of-character'), referenceId('sep-ethics-virtue')],
      },
      {
        id: 'traditions',
        kind: 'callout',
        tone: 'note',
        title: 'Not only a Greek idea',
        text: {
          essential:
            'The Confucian tradition develops a character-centred ethics independently, with its own account of cultivation through role, ritual and practice.',
          detailed:
            'Mengzi argues that moral response has natural beginnings — the immediate alarm on seeing a child about to fall into a well — which must then be cultivated deliberately, like a sprout. The parallel with Aristotle on habituation is real, and so are the differences: the Confucian account puts far more weight on relationships and social role, and less on a single unified account of the good life.',
        },
        references: [referenceId('mengzi'), referenceId('analects-confucius')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'If character is largely a product of upbringing and circumstance, what is the status of praising someone for it?',
        whyItMatters: {
          essential:
            'Virtue ethics makes character the primary object of moral assessment, and the conditioning movement gave reasons to think character is substantially inherited and circumstantial.',
          detailed:
            'This is constitutive moral luck arriving in the middle of a normative theory. One response is that praising a character is not the same as claiming its owner produced it — we admire a good person as we admire a good painting, without the painting having painted itself. Whether admiration of that kind can carry the weight moral praise carries is the open part.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of what praise is for. If it is a way of reinforcing and encouraging, the problem largely dissolves; if it is a verdict on what someone has earned, it does not.',
        },
        references: [referenceId('sep-moral-luck'), referenceId('sep-ethics-virtue')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Three theories, three sets of problems. Underneath all of them the prior question is still standing: is any of this true, or are we describing our preferences in elevated language?',
        },
      },
    ],
    furtherReading: [referenceId('aristotle-nicomachean-ethics')],
  },

  {
    id: topicId('is-morality-objective'),
    slug: 'is-morality-objective',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 128,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Is morality objective?',
    subtitle: 'A question where both confident answers are held by people who have thought hard.',
    summary: {
      essential:
        'Are there moral facts that hold independently of what anyone thinks? Serious philosophers say yes and serious philosophers say no, and the arguments on each side are strong.',
      detailed:
        'The two popular answers — "obviously, or the Holocaust was only a matter of taste" and "obviously not, cultures differ" — are both much weaker than the positions they gesture at.',
      technical:
        'Realism, error theory, expressivism and constructivism differ along two axes: whether moral claims are truth-apt, and whether anything mind-independent makes them true.',
    },
    glossaryTerms: [
      glossaryTermId('moral-realism'),
      glossaryTermId('error-theory'),
      glossaryTermId('expressivism'),
      glossaryTermId('moral-relativism'),
    ],
    related: [topicId('morality-of-character'), topicId('humes-gap')],
    blocks: [
      {
        id: 'stakes',
        kind: 'prose',
        text: {
          essential:
            'The question is not whether moral claims matter. It is whether any of them are true in the way that claims about mass or distance are true — true regardless of who is asking.',
          detailed:
            'Both answers have costs that people tend not to notice when they pick one quickly. If there are objective moral facts, we need an account of what they are made of and how we detect them. If there are not, we need an account of why moral argument works, why we can be wrong, and why some judgements feel like discoveries.',
        },
      },
      {
        id: 'map',
        kind: 'visualization',
        visualizationId: visualizationId('metaethics-map'),
      },
      {
        id: 'realism',
        kind: 'prose',
        text: {
          essential:
            'The case for realism is mostly the phenomena. Moral disagreement looks like disagreement rather than like two people expressing different tastes. We think we can be wrong. We think moral progress has happened, and progress implies something to get closer to.',
          detailed:
            'That last point is the strongest. It is very hard to describe the abolition of slavery as a change in preference rather than as the correction of an error, and describing it as a preference change does not look like a more sophisticated view — it looks like a worse description of what happened.',
        },
      },
      {
        id: 'queerness',
        kind: 'claim',
        statement: {
          essential:
            'Mackie argues against objective moral values on two grounds: the variation in moral codes, and the strangeness of the entities objective values would have to be.',
          detailed:
            'The argument from queerness is the more forceful. An objective moral fact would have to be a fact that, merely by being known, gives anyone who knows it a reason to act — unlike any other kind of fact. And the faculty that detects such facts would be unlike any other faculty. Mackie concludes that ordinary moral claims assert something of this kind and are therefore uniformly false.',
        },
        evidence: 'established',
        references: [referenceId('mackie-ethics')],
      },
      {
        id: 'relativism-caution',
        kind: 'callout',
        tone: 'misconception',
        title: 'Cultural variation is not an argument for relativism',
        text: {
          essential:
            'That moral codes differ is a fact about codes. Astronomical beliefs have differed too, and nobody concludes that the shape of the Earth is relative to culture.',
          detailed:
            'The inference needs a further premise: that the disagreement is not the kind that could be resolved by better information or clearer reasoning. Mackie argues for that premise rather than assuming it, which is what makes his version serious. The version people reach for in conversation — "different cultures, therefore no objective truth" — is not.',
        },
        references: [referenceId('mackie-ethics')],
      },
      {
        id: 'expressivism',
        kind: 'prose',
        text: {
          essential:
            'Expressivists try to keep all the phenomena without the facts. Moral statements express attitudes, and attitudes can be consistent or inconsistent, better or worse informed, and argued about.',
          detailed:
            'The sophisticated versions go a long way. Blackburn argues that we can earn the right to talk of moral truth and moral mistake from within a practice of expressing and refining attitudes — quasi-realism. The standing objection is whether the earned notions are the real ones or lookalikes, and whether the account can explain moral reasoning in complex embedded contexts.',
        },
      },
      {
        id: 'debunking',
        kind: 'claim',
        statement: {
          essential:
            'Street argues that evolutionary explanations of our evaluative tendencies create a dilemma for moral realism.',
          detailed:
            'If our moral intuitions were shaped by selection for reproductive advantage, then either they are unrelated to independent moral truths — in which case we have no reason to trust them — or realism must explain why the two coincide. Realists have replied by arguing that selection favoured responsiveness to genuine features of the environment, or that some moral knowledge is not intuition-based. The exchange is one of the most active in contemporary metaethics.',
        },
        evidence: 'active-research',
        references: [
          referenceId('street-2006-darwinian-dilemma'),
          referenceId('enoch-taking-morality-seriously'),
        ],
      },
      {
        id: 'state',
        kind: 'prose',
        text: {
          essential:
            'The honest report: this is not settled. Surveys of professional philosophers find the field divided, with realism somewhat more common than its rivals and nothing like consensus.',
          detailed:
            'It is worth saying plainly because the question is one where both confident answers are common in public conversation and neither is supported by the state of the argument. Someone who has concluded the matter after ten minutes has not reached a position; they have picked one.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'If morality is not objective, does anything change about how you should act?',
        whyItMatters: {
          essential:
            'Many people assume anti-realism licenses anything. Most anti-realists deny this — their attitudes against cruelty are not weakened by a theory about the status of attitudes.',
          detailed:
            'The interesting question is whether that stability is coherent or merely a habit that has not caught up with the theory. Error theorists have written at length on whether one should go on making moral claims one believes to be false, and the answers range from fictionalism to abolition.',
        },
        whatWouldSettleIt: {
          essential:
            'An argument that metaethical commitments do or do not entail first-order ones. It is widely held that they do not, and the argument for that is itself contested.',
        },
        references: [referenceId('mackie-ethics'), referenceId('sep-moral-anti-realism')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'One philosopher argued that the question of whether morality is true is less revealing than the question of where it came from — and that the answer is not flattering.',
        },
      },
    ],
    furtherReading: [referenceId('mackie-ethics')],
  },

  {
    id: topicId('nietzsche-and-the-genealogy-of-morals'),
    slug: 'nietzsche-and-the-genealogy-of-morals',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 129,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Nietzsche’s question',
    subtitle: 'Not whether morality is true, but where it came from and what it does.',
    summary: {
      essential:
        'Nietzsche asks what kind of life produces a given moral system and what that system does to those who hold it. It is a different question from whether the system is correct, and it is the question he thought was being avoided.',
      detailed:
        'He is the most misread philosopher in this lens. What follows separates what he argued, what is disputed, and what he did not say at all.',
      technical:
        'The Genealogy offers a historical hypothesis about the transvaluation of the noble good/bad contrast into the good/evil contrast of slave morality, together with an account of the internalisation of cruelty producing bad conscience.',
    },
    glossaryTerms: [
      glossaryTermId('genealogy-method'),
      glossaryTermId('master-and-slave-morality'),
      glossaryTermId('ubermensch'),
      glossaryTermId('eternal-recurrence'),
      glossaryTermId('nihilism'),
    ],
    related: [topicId('is-morality-objective'), topicId('meaning-you-make')],
    blocks: [
      {
        id: 'question',
        kind: 'prose',
        text: {
          essential:
            'Everyone before him asked whether moral claims are true. Nietzsche asks a different question: under what conditions did these particular values arise, and what are they doing for the people who hold them?',
          detailed:
            'The shift is deliberate. He thinks the first question has been asked so persistently that nobody has noticed the second, and that the second is where the interesting material is.',
        },
      },
      {
        id: 'method',
        kind: 'visualization',
        visualizationId: visualizationId('genealogy-of-values'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Nietzsche argues that the contrast between good and evil arose historically as a reversal of an earlier contrast between good and bad, produced from a position of powerlessness.',
          detailed:
            'On his account the noble evaluation starts with self-affirmation and calls what is unlike it bad, almost as an afterthought. The slave evaluation starts with the enemy, brands them evil, and derives its own goodness by contrast. He treats this as a historical hypothesis and offers etymological and historical arguments for it.',
        },
        evidence: 'established',
        references: [referenceId('nietzsche-genealogy')],
      },
      {
        id: 'history-contested',
        kind: 'claim',
        statement: {
          essential:
            'Nietzsche’s specific historical and etymological claims are disputed by classicists and historians.',
          detailed:
            'His account of the origins of moral vocabulary and of the role of priestly castes is not accepted as history. Scholars generally distinguish the genealogical method, which has been enormously influential, from his particular reconstruction, which has not survived as scholarship. Presenting the reconstruction as established fact would misrepresent the state of knowledge.',
        },
        evidence: 'inference',
        references: [referenceId('sep-nietzsche-moral-political')],
      },
      {
        id: 'ressentiment',
        kind: 'prose',
        text: {
          essential:
            'The concept doing the most work is ressentiment: a reactive hostility that cannot discharge itself and turns into a value system instead. On Nietzsche’s account, calling the strong evil is a way of achieving a victory that could not be won directly.',
          detailed:
            'What makes this more than name-calling is the second half of his claim: that the resulting values get internalised, so that the cruelty which could not be directed outward is turned inward and becomes guilt. Whether or not the history is right, the psychological hypothesis — that a moral system can be a strategy without anyone intending it as one — is the part that has lasted.',
        },
      },
      {
        id: 'not',
        kind: 'callout',
        tone: 'misconception',
        title: 'What Nietzsche is not saying',
        text: {
          essential:
            'Not that cruelty is good. Not that the strong should dominate the weak. Not that anything you want becomes moral. Not that the Übermensch means becoming powerful over others. And not anything the Nazis later claimed, which he would have despised.',
          detailed:
            'On the last point the record is clear: Nietzsche was contemptuous of German nationalism and of antisemitism, broke with Wagner partly over it, and wrote against both repeatedly. His sister Elisabeth, an antisemite, controlled his literary estate after his collapse and shaped the posthumous presentation of his work. The Übermensch appears in a literary work and is presented as someone who creates values rather than inheriting them — a task, not a claim about superiority of birth or strength. Reading him as a doctrine of domination requires ignoring a great deal of what he wrote.',
        },
        references: [
          referenceId('sep-nietzsche-moral-political'),
          referenceId('nietzsche-zarathustra'),
        ],
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The central objection is straightforward: where a value came from says nothing about whether it is right. A good idea can have a disreputable origin.',
          detailed:
            'This is the genetic fallacy, and Nietzsche is frequently accused of it. Defenders reply that he is not arguing that these values are false but that they are costly — that holding them does something to a person, and that nobody has been examining the cost. Whether that defence works depends on whether "what a value does to you" can be a reason to revise it, which is itself a substantive claim.',
        },
      },
      {
        id: 'recurrence',
        kind: 'prose',
        text: {
          essential:
            'His positive proposal, such as it is, comes as a test rather than a doctrine. Imagine having to live this exact life again, endlessly, with nothing changed. Would the thought crush you, or not?',
          detailed:
            'The eternal recurrence is presented as a question to put to yourself, not as a cosmological theory. It is a way of asking whether you are living a life you would affirm rather than merely tolerate. Notice how unlike a rule this is — which is consistent with someone who thought the demand for rules was itself the symptom.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Can knowing where a value came from be a reason to hold it differently, even if it cannot show the value false?',
        whyItMatters: {
          essential:
            'If yes, genealogy is doing real philosophical work rather than committing a fallacy. If no, the method is at best historically interesting.',
          detailed:
            'Something similar is at stake in the evolutionary debunking arguments of the previous topic, and in the conditioning movement’s question about inherited beliefs. The same structure keeps appearing: an origin story that does not refute a belief but seems to unsettle it. Whether that unsettling is rational is one of the genuinely open questions in this lens.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of when causal history provides an epistemic defeater. Work on this is active and inconclusive.',
        },
        references: [
          referenceId('nietzsche-genealogy'),
          referenceId('street-2006-darwinian-dilemma'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'All of this has skirted a structural point that Hume noticed in a single paragraph, and that has organised the subject ever since.',
        },
      },
    ],
    furtherReading: [referenceId('nietzsche-genealogy')],
  },

  {
    id: topicId('humes-gap'),
    slug: 'humes-gap',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 130,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'From is to ought',
    subtitle: 'A paragraph that changed the subject, and is constantly overread.',
    summary: {
      essential:
        'Hume noticed that arguments slide from statements about what is to statements about what ought to be without explaining the move. Noticing the slide is not the same as showing it can never be made.',
      detailed:
        'The observation is real and useful. The slogan it has become — "science cannot explain morality" — is both stronger than the observation and much less useful.',
      technical:
        'The passage claims only that the transition requires explanation. Whether it establishes a logical barrier, and whether Hume intended it to, is disputed among Hume scholars.',
    },
    glossaryTerms: [glossaryTermId('is-ought-gap')],
    related: [topicId('is-morality-objective'), topicId('the-open-question-argument')],
    blocks: [
      {
        id: 'observation',
        kind: 'prose',
        text: {
          essential:
            'Hume observes that moral treatises proceed with ordinary statements of fact and then, imperceptibly, the sentences start containing "ought" instead of "is" — and no explanation is given of how the change was made.',
          detailed:
            'What he asks for is modest: that the transition be explained. He does not say it cannot be done. The passage is three sentences long and has generated two and a half centuries of argument about what exactly it claims.',
        },
      },
      {
        id: 'figure',
        kind: 'visualization',
        visualizationId: visualizationId('is-ought-gap'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Hume observes that writers move from is to ought without explanation and asks that a reason be given for the transition.',
          detailed:
            'The passage occurs at the end of Treatise III.i.1. Scholars disagree about how strong a conclusion it supports: some read it as announcing a logical barrier, others as a remark about the argumentative practice of his contemporaries, others as directed specifically at rationalist accounts of morality. The strong reading is the popular one and is not clearly Hume’s.',
        },
        evidence: 'inference',
        references: [referenceId('hume-treatise'), referenceId('sep-hume-moral')],
      },
      {
        id: 'why-useful',
        kind: 'prose',
        text: {
          essential:
            'The observation is a genuinely useful tool, because the unstated premise is usually the one worth examining.',
          detailed:
            'Someone argues from a fact about human nature to a conclusion about how we should live. The gap-spotting question is: which value premise is doing the crossing? Once it is stated, it can be discussed — and very often the argument that looked like it rested on evidence turns out to rest on an assumption nobody defended.',
        },
      },
      {
        id: 'not-slogan',
        kind: 'callout',
        tone: 'misconception',
        title: 'Not "science cannot say anything about morality"',
        text: {
          essential:
            'This is the oversimplification to avoid. It is false, it is not what Hume said, and believing it makes you worse at moral reasoning rather than better.',
          detailed:
            'Almost every real moral question turns on facts. Does this policy reduce suffering? Can this creature feel pain? Does this punishment deter? Was the person capable of understanding what they did? Every one of those is empirical, and getting them wrong produces bad moral conclusions regardless of one’s values. The gap concerns where the values enter, not whether evidence matters — and someone who dismisses evidence by invoking Hume has misunderstood him completely.',
        },
        references: [referenceId('sep-hume-moral')],
      },
      {
        id: 'attempts',
        kind: 'claim',
        statement: {
          essential:
            'Several strategies for bridging the gap are actively defended, and none is generally accepted.',
          detailed:
            'Naturalists argue that moral properties are natural properties, so the crossing is not a crossing. Constructivists argue that the normative premises are derivable from what any rational agent must be committed to. Neo-Aristotelians argue that facts about a kind of creature’s flourishing are already evaluative. Each has serious defenders and serious objections; the question of whether the gap can be closed remains open.',
        },
        evidence: 'open-question',
        references: [
          referenceId('sep-naturalism-moral'),
          referenceId('korsgaard-sources-normativity'),
        ],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Where does the first ought come from, if it cannot be derived from any is?',
        whyItMatters: {
          essential:
            'If values cannot be derived from facts and cannot be derived from other values without regress, something has to be foundational. What that something could be is the central problem of metaethics.',
          detailed:
            'The available answers are the positions of the previous topic: a non-natural fact, a construction from rational agency, an attitude, or nothing at all. The gap does not decide between them. It shows why a decision is needed.',
        },
        whatWouldSettleIt: {
          essential:
            'Resolution of the metaethical question itself, which is exactly what remains open.',
        },
        references: [referenceId('sep-moral-realism'), referenceId('sep-hume-moral')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'A century and a half later, Moore produced a test he thought showed that no definition of "good" in natural terms could work.',
        },
      },
    ],
    furtherReading: [referenceId('sep-hume-moral')],
  },

  {
    id: topicId('the-open-question-argument'),
    slug: 'the-open-question-argument',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 131,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The open question',
    subtitle: 'Moore’s test, and why it is no longer thought decisive.',
    summary: {
      essential:
        'Moore argued that if "this is pleasant, but is it good?" is still a real question, then goodness has not been defined as pleasantness. The test is elegant and its weakness is now well understood.',
      detailed:
        'It is included partly for itself and partly as an example of a famous argument that most of the field has moved past — which is a useful thing for a reader to see happen.',
      technical:
        'The argument assumes that a correct analysis would be transparent to competent speakers, an assumption undermined by cases of a posteriori identity.',
    },
    glossaryTerms: [
      glossaryTermId('open-question-argument'),
      glossaryTermId('naturalistic-fallacy'),
    ],
    related: [topicId('humes-gap'), topicId('science-and-morality')],
    blocks: [
      {
        id: 'test',
        kind: 'prose',
        text: {
          essential:
            'Take any proposed definition of "good" — pleasure, desire satisfaction, what we evolved to approve of — and ask: "this has that property, but is it good?" If the question still makes sense, the definition has not captured the meaning.',
          detailed:
            'Compare a genuine definition. "This is a bachelor, but is he unmarried?" is not a question; it is a sign of confusion. Moore’s point is that the moral cases never feel like that.',
        },
      },
      {
        id: 'figure',
        kind: 'visualization',
        visualizationId: visualizationId('open-question-test'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Moore argues that "good" cannot be defined in natural terms, and calls the attempt to do so the naturalistic fallacy.',
          detailed:
            'His conclusion is that good is a simple, indefinable, non-natural property, known directly rather than analysed. The positive view attracted fewer followers than the negative argument, which dominated the first half of the twentieth century.',
        },
        evidence: 'established',
        references: [referenceId('moore-principia-ethica')],
      },
      {
        id: 'rebuttal',
        kind: 'prose',
        text: {
          essential:
            'The decisive reply came from a different area of philosophy. Water is H₂O — that is an identity, not a coincidence. But "this is H₂O, but is it water?" would have been a perfectly open question before the chemistry was known.',
          detailed:
            'So an identity can be true and not obvious. If moral properties are identical with natural ones in that way — discovered rather than analysed — then the openness of the question shows only that we have not made the discovery, not that there is nothing to discover.',
        },
      },
      {
        id: 'status',
        kind: 'claim',
        statement: {
          essential:
            'The open-question argument is now generally treated as a challenge that naturalist accounts must meet rather than as a refutation of them.',
          detailed:
            'Naturalists still have to explain why the identification is not transparent and what makes their candidate the right one. But the argument no longer functions as a proof that no such account can work, and most contemporary metaethics proceeds on that basis.',
        },
        evidence: 'established',
        references: [referenceId('sep-naturalism-moral')],
      },
      {
        id: 'lesson',
        kind: 'callout',
        tone: 'note',
        title: 'Why this topic is here',
        text: {
          essential:
            'An argument can be famous, influential for fifty years, and then be substantially defeated. Watching that happen is worth more than the argument itself.',
          detailed:
            'It is also a reminder about the shape of progress in philosophy. The field did not simply forget Moore; it found where the argument assumed something, and the assumption turned out to be false for reasons discovered elsewhere. That is progress, and it is slower and less visible than the scientific kind.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'If moral properties could turn out to be natural ones, how would we find out which?',
        whyItMatters: {
          essential:
            'Chemistry settled the water case by investigation. There is no agreed method for the moral case, and without one the naturalist position is a possibility rather than a programme.',
          detailed:
            'Some naturalists appeal to a network of platitudes about morality and look for whatever plays that role. Others appeal to the theoretical role moral properties play in explaining behaviour. Neither approach has produced agreement, and the critics argue that the absence of a method is not incidental.',
        },
        whatWouldSettleIt: {
          essential:
            'A convincing identification of a moral property with a natural one, together with an account of why the identification was not obvious. This is an active research programme with no settled result.',
        },
        references: [referenceId('sep-naturalism-moral'), referenceId('moore-principia-ethica')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Which raises the practical question: what exactly can evidence contribute to a moral argument?',
        },
      },
    ],
    furtherReading: [referenceId('moore-principia-ethica')],
  },

  {
    id: topicId('science-and-morality'),
    slug: 'science-and-morality',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 132,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What evidence can settle',
    subtitle: 'A great deal — and one thing it cannot.',
    summary: {
      essential:
        'Facts settle most of what is actually disputed in moral arguments. What they do not settle is which things matter in the first place. Both halves of that need saying.',
      detailed:
        'This topic exists to prevent the is–ought gap from being used as a licence to ignore evidence, which is the commonest way the gap gets misused.',
      technical:
        'Once an evaluative premise is fixed, the remaining questions in most applied moral disputes are empirical, which is why applied ethics is heavily evidence-dependent despite the gap.',
    },
    glossaryTerms: [glossaryTermId('is-ought-gap'), glossaryTermId('evolutionary-debunking')],
    related: [topicId('the-open-question-argument'), topicId('am-i-a-good-person')],
    blocks: [
      {
        id: 'much',
        kind: 'prose',
        text: {
          essential:
            'Start with what evidence decides. Whether a policy reduces harm. Whether a species can suffer. Whether a punishment deters. Whether a child understands what they did. Whether a treatment works. Whether a belief about a group is true.',
          detailed:
            'These are not marginal. They are what almost every real moral disagreement turns on. Two people who agree that suffering matters and disagree about a policy are usually disagreeing about what the policy does — which is a question with an answer, and one that can be got wrong.',
        },
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'Once an evaluative premise is in place, most remaining moral disputes are empirical.',
          detailed:
            'This is why applied ethics — medical, environmental, legal — is so heavily dependent on evidence, and why moral error is so often factual error. Historical moral catastrophes have very often involved false empirical beliefs about who could suffer, who was capable of reasoning, and what the consequences of a practice were.',
        },
        evidence: 'inference',
        references: [referenceId('sep-naturalism-moral')],
      },
      {
        id: 'limit',
        kind: 'prose',
        text: {
          essential:
            'Now the limit. Suppose every empirical question were answered. You would know exactly what each option produces. You would still need to say which outcomes are better — and that is not another measurement.',
          detailed:
            'The point is easiest to see where the values genuinely conflict: total welfare against equality, present people against future ones, liberty against safety. Complete information about consequences does not settle those, because the disagreement is about how to weigh them.',
        },
      },
      {
        id: 'evolution',
        kind: 'prose',
        text: {
          essential:
            'What about explaining morality itself? The Scientific Lens of this section describes how cooperation, reciprocity and group living shaped us. Does that explain morality away?',
          detailed:
            'It explains a great deal about why we have the reactions we have. Whether that undermines them is the debunking question from the objectivity topic, and it is unresolved. What can be said confidently is that the explanation does not settle the question by itself, in either direction: showing why we feel that cruelty is wrong neither establishes that it is nor establishes that it is not.',
        },
      },
      {
        id: 'both-errors',
        kind: 'callout',
        tone: 'caution',
        title: 'Two mistakes, equally common',
        text: {
          essential:
            'One: "science shows morality is just evolved instinct, so it is not real." Two: "morality is a value question, so evidence is irrelevant." Both are wrong, and each is often deployed against the other.',
          detailed:
            'The first commits the genetic fallacy and assumes that an explanation of a belief’s origin refutes it. The second uses a narrow logical point to excuse ignoring the facts on which the argument actually turns. Someone equipped with both can defend any position indefinitely, which is a sign that neither is doing real work.',
        },
      },
      {
        id: 'division',
        kind: 'visualization',
        visualizationId: visualizationId('metaethics-map'),
        caption:
          'The same conceptual map as before, revisited: where a position sits here determines what it can say about the relationship between evidence and moral truth.',
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Could a complete science of human beings tell us how to live?',
        whyItMatters: {
          essential:
            'Some think yes — that once you know what a creature like this needs to flourish, the normative conclusions follow. Others think the step from "this is what we need" to "this is what we should pursue" is the gap again, unbridged.',
          detailed:
            'The neo-Aristotelian naturalist position holds that facts about a kind of creature are already evaluative — that "this is a defective specimen" is a factual claim. Critics reply that reading a norm off a species description is either smuggling in a value or describing statistical typicality, which is not the same thing.',
        },
        whatWouldSettleIt: {
          essential: 'Resolution of the naturalism debate, which is active and unresolved.',
        },
        references: [
          referenceId('sep-naturalism-moral'),
          referenceId('street-2006-darwinian-dilemma'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Enough about morality in general. There is a question you can ask about yourself, and it turns out to be almost impossible to answer honestly.',
        },
      },
    ],
    furtherReading: [referenceId('sep-naturalism-moral')],
  },
];
