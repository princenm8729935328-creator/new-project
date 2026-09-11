/**
 * Human Evolution, Philosophical Lens — Movement XII: meaning, and how to live.
 *
 * The closing movement, and the one with the strongest pull towards a doctrine.
 * Every instinct at the end of a long journey is to resolve it — to hand the
 * reader an answer as a reward for having followed. That would undo everything
 * the previous eleven movements did, because the whole point was that these
 * questions stay open and that holding them open is a skill.
 *
 * So the last topic closes the lens without closing the questions. It says what
 * the reader now has, which is not a set of answers but a set of distinctions,
 * and it leaves the final question in their hands where it belongs.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const PHIL_MEANING_TOPICS: readonly Topic[] = [
  {
    id: topicId('does-life-have-a-meaning'),
    slug: 'does-life-have-a-meaning',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 150,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Does life have a meaning?',
    subtitle: 'Three different questions hide inside one sentence.',
    summary: {
      essential:
        'The question is usually asked as one thing and is at least three: whether the universe assigns a purpose, whether a particular life can be meaningful, and whether meaning is found or made.',
      detailed:
        'Separating them is most of the work. Several apparent disagreements turn out to be people answering different questions.',
      technical:
        'Contemporary work distinguishes supernaturalist, objective naturalist, subjective and hybrid accounts, and further distinguishes meaning in life from meaning of life and from well-being.',
    },
    glossaryTerms: [glossaryTermId('nihilism')],
    related: [topicId('why-am-i-this-person'), topicId('the-absurd')],
    blocks: [
      {
        id: 'three',
        kind: 'prose',
        text: {
          essential:
            'First question: was there a purpose the universe had in producing us? Second: can a particular life be meaningful, whatever the answer to the first? Third: is meaning something you discover or something you make?',
          detailed:
            'These come apart cleanly. Someone can hold that the universe assigns no purpose and that lives can nonetheless be meaningful. Someone can hold that the universe does assign one and that most lives fail to engage with it. Running the three together is what produces the impression that the whole subject is unanswerable.',
        },
      },
      {
        id: 'views',
        kind: 'visualization',
        visualizationId: visualizationId('meaning-views'),
      },
      {
        id: 'science',
        kind: 'prose',
        text: {
          essential:
            'The Scientific Lens of this section answers a different question than people often take it to. It says how we came to exist. It says nothing about whether that coming-to-exist was for anything.',
          detailed:
            'Some read the scientific account as settling the first question in the negative: a process with no foresight cannot have intended anything. That inference is worth examining rather than accepting. It establishes that natural selection had no purpose in view, which is not the same as establishing that nothing whatever could have. The lens does not take a position on the further claim, which is where the arguments about theism live and is outside what either lens here undertakes.',
        },
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'Contemporary philosophy of meaning distinguishes supernaturalist, objective naturalist, subjective and hybrid accounts, and none commands agreement.',
          detailed:
            'Supernaturalism ties meaning to a relation with a spiritual realm. Objective naturalism holds that certain conditions confer meaning independently of attitudes. Subjectivism ties meaning to the agent’s own concerns. Hybrid views require both. The debate has been active and technical since the 1980s and shows no sign of converging.',
        },
        evidence: 'open-question',
        references: [referenceId('sep-life-meaning')],
      },
      {
        id: 'nihilism',
        kind: 'callout',
        tone: 'misconception',
        title: 'Nihilism is a position, not a mood',
        text: {
          essential:
            'Nihilism about meaning is the claim that no life has meaning. It is defended with arguments, and it is not the same as feeling that nothing matters.',
          detailed:
            'It is also not what Nietzsche recommended — he diagnosed nihilism as a cultural condition to be overcome. The confusion between a philosophical position and a state of despair makes both harder to think about: someone in despair is not thereby a nihilist, and a nihilist is not thereby in despair.',
        },
        references: [referenceId('sep-life-meaning')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Would an assigned purpose actually be the thing people want when they ask this?',
        whyItMatters: {
          essential:
            'Discovering that you were made for a task does not obviously make your life meaningful. A tool has an assigned purpose, and that is not the relation to your own life most people are hoping for.',
          detailed:
            'This is worth pressing because the supernaturalist answer is usually assumed to be the one that would satisfy, if only it were true. Whether it would is a separate question, and some who accept it on other grounds have argued that being loved rather than being useful is the relevant relation.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing empirical. This is a question about what would satisfy a demand, and it is answered by getting clear about the demand.',
        },
        references: [referenceId('sep-life-meaning'), referenceId('wolf-meaning-in-life')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'One writer built his whole work around what happens when you ask the universe for meaning and get no reply.',
        },
      },
    ],
    furtherReading: [referenceId('sep-life-meaning')],
  },

  {
    id: topicId('the-absurd'),
    slug: 'the-absurd',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 151,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The absurd',
    subtitle: 'Camus on what to do when the question gets no answer.',
    summary: {
      essential:
        'For Camus the absurd is not a property of the universe but a relation: between a human demand for meaning and a world that does not supply one. He argues that neither despair nor a leap of faith is the right response.',
      detailed:
        'The essay is frequently reduced to a slogan about imagining Sisyphus happy. The argument underneath it is more demanding than the slogan.',
      technical:
        'Camus distinguishes the absurd from both nihilism and pessimism by locating it in a confrontation, and argues that any resolution which removes one of the two terms — by supplying meaning or abandoning the demand — dissolves rather than answers it.',
    },
    glossaryTerms: [glossaryTermId('the-absurd'), glossaryTermId('existentialism')],
    related: [topicId('does-life-have-a-meaning'), topicId('meaning-you-make')],
    blocks: [
      {
        id: 'definition',
        kind: 'prose',
        text: {
          essential:
            'The absurd is not in the universe and it is not in you. It is what happens between them: you need reasons, the world offers none, and neither side will yield.',
          detailed:
            'This is a careful definition and it does real work. A universe without meaning is not absurd on its own — it is simply a universe. A creature demanding meaning is not absurd on its own. The absurd is the relation, which means it cannot be resolved by describing either term more accurately.',
        },
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Camus argues that the absurd arises from a confrontation between human need and the silence of the world, and that it must be maintained rather than resolved.',
          detailed:
            'He opens by treating suicide as the serious philosophical question and argues against it: it removes one of the two terms and so evades the confrontation rather than facing it. He argues equally against what he calls philosophical suicide — the leap to a belief that supplies the missing meaning — on the same grounds.',
        },
        evidence: 'established',
        references: [referenceId('camus-sisyphus')],
      },
      {
        id: 'sisyphus',
        kind: 'prose',
        text: {
          essential:
            'The image at the end: a man condemned to roll a boulder uphill for ever, watching it roll back each time. Camus’s interest is in the moment he walks back down, aware of his situation.',
          detailed:
            'The point is not that repetitive labour is secretly fulfilling. It is that consciousness of the situation, without illusion and without despair, is itself a kind of victory — that the fate is made his by being fully recognised rather than escaped. Whether that is profound or a refusal to face the problem is a fair thing to argue about.',
        },
      },
      {
        id: 'not-slogan',
        kind: 'callout',
        tone: 'misconception',
        title: 'Not "nothing matters, so do what you like"',
        text: {
          essential:
            'Camus argued the opposite, and at length. He held that the absurd generates commitments — to lucidity, to revolt, to refusing to add to the suffering of others.',
          detailed:
            'He also broke publicly with those who drew licence from similar premises, and he argued in later work that recognising the absurd rules out murder rather than permitting it. Reading him as a shrug is a misreading of a writer who took the stakes of the question as seriously as anyone has.',
        },
        references: [referenceId('camus-sisyphus')],
      },
      {
        id: 'nagel',
        kind: 'claim',
        statement: {
          essential:
            'Nagel gives a different account of the absurd: it arises from the collision between the seriousness with which we live and our capacity to step back and see that seriousness as arbitrary.',
          detailed:
            'On his account the absurd is not about a cosmic silence but about a structural feature of self-conscious creatures — we can always adopt a view from which our concerns look unjustified, and we cannot stop caring. His recommended response is irony rather than Camus’s defiance, on the grounds that defiance takes the situation more seriously than it deserves.',
        },
        evidence: 'established',
        references: [referenceId('nagel-1971-absurd')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Is the demand for meaning something to be satisfied, or something to be examined?',
        whyItMatters: {
          essential:
            'Camus takes the demand as given and works out how to live with it unmet. A different response is to ask where the demand came from and whether it is well formed.',
          detailed:
            'If the demand is a feature of creatures like us rather than a response to a genuine lack, then the absurd might dissolve rather than require confronting. Camus would reject this as another evasion. Whether it is an evasion or a diagnosis is exactly the kind of question this lens leaves open.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing external. It turns on whether the demand for meaning can be examined without being either endorsed or explained away, which is contested.',
        },
        references: [referenceId('camus-sisyphus'), referenceId('nagel-1971-absurd')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'If meaning is not supplied, one answer is that it has to be made. That answer has a serious version and a very popular shallow one.',
        },
      },
    ],
    furtherReading: [referenceId('camus-sisyphus')],
  },

  {
    id: topicId('meaning-you-make'),
    slug: 'meaning-you-make',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 152,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Meaning you make',
    subtitle: 'The existentialists, who did not agree with each other.',
    summary: {
      essential:
        'If nothing assigns you a purpose, you define yourself by what you do. That is the existentialist thought, and its serious versions carry obligations the popular version drops.',
      detailed:
        'The thinkers grouped under the label disagreed sharply, several rejected it, and flattening them into one worldview is the standard error.',
      technical:
        'Sartrean radical freedom, Beauvoir’s situated freedom, Kierkegaard’s religious existentialism and Heidegger’s account of authenticity are distinct positions with incompatible commitments.',
    },
    glossaryTerms: [
      glossaryTermId('existentialism'),
      glossaryTermId('existence-precedes-essence'),
      glossaryTermId('bad-faith'),
      glossaryTermId('facticity'),
    ],
    related: [topicId('the-absurd'), topicId('meaning-you-find')],
    blocks: [
      {
        id: 'core',
        kind: 'prose',
        text: {
          essential:
            'Sartre’s formula: existence precedes essence. A paper knife is made for a purpose that exists before the knife does. A person arrives first and is defined afterwards, by what they do.',
          detailed:
            'From which he draws the conclusion that unsettles people: you are responsible for what you become, and there is nothing — no nature, no circumstance, no role — that can carry the decision for you.',
        },
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Sartre argues that there is no fixed human nature determining what a person should be, and that each person is responsible for defining themselves through their choices.',
          detailed:
            'He adds a claim that is often dropped: in choosing for yourself you choose an image of what a person should be, and so the choice is not private. He also insists that the position produces anguish rather than liberation, since there is nothing to appeal to and no excuse available.',
        },
        evidence: 'established',
        references: [referenceId('sartre-existentialism-humanism')],
      },
      {
        id: 'bad-faith',
        kind: 'prose',
        text: {
          essential:
            'Bad faith is his name for the evasion: pretending a role, a circumstance or a past decided something you decided. The waiter who performs being a waiter so completely that there is no one behind the performance is his example.',
          detailed:
            'It is a useful concept because it is so recognisable. "I had no choice" is almost never literally true; usually it means the alternatives were costly. Sartre’s claim is that pretending otherwise is not a mistake about facts but a refusal of something, and that the refusal is itself a choice.',
        },
      },
      {
        id: 'beauvoir',
        kind: 'claim',
        statement: {
          essential:
            'Beauvoir argues that freedom is situated and that one’s own freedom depends on the freedom of others, which supplies the ethics Sartre’s account was accused of lacking.',
          detailed:
            'The Ethics of Ambiguity answers the charge that radical freedom licenses anything: willing oneself free, she argues, commits one to willing others free, since a freedom exercised in a world of oppressed people is impoverished. She also insists on facticity — body, history, material conditions — as what freedom operates within, against readings on which freedom is unconstrained. Her analysis of a self formed under conditions it did not choose is more concrete than Sartre’s and, on many readings, more defensible.',
        },
        evidence: 'established',
        references: [referenceId('beauvoir-ethics-ambiguity')],
      },
      {
        id: 'not-one-view',
        kind: 'callout',
        tone: 'caution',
        title: 'They did not form a school',
        text: {
          essential:
            'Kierkegaard was a Christian for whom the decisive choice was a leap of faith. Heidegger rejected the label. Camus denied being an existentialist and fell out with Sartre. Beauvoir’s ethics and Sartre’s early position are not the same.',
          detailed:
            'Collapsing them into "life has no meaning so make your own" loses almost everything. Kierkegaard’s account of choice as constituting a self and Sartre’s atheistic version share a structure and disagree about what the structure is for. Presenting existentialism as a single doctrine is a textbook convenience, not a description of what these people argued.',
        },
        references: [referenceId('sep-existentialism'), referenceId('kierkegaard-either-or')],
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The objection that matters: if you are the one assigning value, can you get it wrong? And if you cannot, is the assignment worth anything?',
          detailed:
            'A life devoted with total sincerity to something trivial or cruel would be meaningful on a purely creative account, and most people find that verdict unacceptable. Beauvoir’s answer is that freedom has conditions which rule some projects out. Whether that is a consistent development of the position or a rescue from outside it is disputed.',
        },
      },
      {
        id: 'conditioning',
        kind: 'prose',
        text: {
          essential:
            'And there is an objection this lens has already prepared. The conditioning movement gave reasons to doubt that the self doing the defining was itself self-made.',
          detailed:
            'Sartre’s radical freedom sits uneasily with that. Beauvoir’s situated freedom sits much better with it, which is one reason her version has worn better. Neither, though, answers the Basic Argument — and the existentialists were not trying to, which is worth saying rather than pretending their positions engage arguments they predate or ignore.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Can something you assigned value to be genuinely valuable?',
        whyItMatters: {
          essential:
            'If yes, meaning is available to anyone at any time, and the worry about a silent universe was misplaced. If no, then made meaning is a consolation rather than the thing itself.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of value that either allows or forbids self-conferred value. This is the metaethical dispute from Movement V, arriving in a different form.',
        },
        references: [referenceId('sep-life-meaning'), referenceId('wolf-meaning-in-life')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'The most discussed contemporary answer says that made meaning and found meaning are both half-right.',
        },
      },
    ],
    furtherReading: [referenceId('beauvoir-ethics-ambiguity')],
  },

  {
    id: topicId('meaning-you-find'),
    slug: 'meaning-you-find',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 153,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Meaning you find',
    subtitle: 'Wolf’s proposal, and the problem it does not solve.',
    summary: {
      essential:
        'Susan Wolf argues that meaning arises where subjective attraction meets objective attractiveness — where you are gripped by something that is also worth being gripped by.',
      detailed:
        'It is currently the most discussed account, largely because it explains the failure cases that pure subjectivism and pure objectivism each handle badly.',
      technical:
        'The hybrid view requires both an appropriate subjective attitude of engagement and an object with independent worth, and inherits the objectivist’s burden of specifying the latter.',
    },
    glossaryTerms: [glossaryTermId('hybrid-view-of-meaning')],
    related: [topicId('meaning-you-make'), topicId('death-and-meaning')],
    blocks: [
      {
        id: 'proposal',
        kind: 'visualization',
        visualizationId: visualizationId('meaning-sources'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Wolf argues that meaning in life arises when subjective attraction meets objective attractiveness — when one is actively engaged in a project of independent worth.',
          detailed:
            'Both conditions are necessary on her account. Engagement alone leaves the person absorbed in something worthless; worth alone leaves them going through motions. She also distinguishes meaning from both happiness and morality, arguing it is a third category of reason that ordinary life takes seriously and moral philosophy has neglected.',
        },
        evidence: 'established',
        references: [referenceId('wolf-meaning-in-life')],
      },
      {
        id: 'cases',
        kind: 'prose',
        text: {
          essential:
            'The account earns its keep on the failure cases. A life spent memorising phone directories, absorbing and harmless, is not one most people would call meaningful. Neither is a life spent grinding through something admirable that the person has no relationship to.',
          detailed:
            'Pure subjectivism has to accept the first as meaningful. Pure objectivism has to accept the second. That the hybrid view gets both right is the main argument for it, and it is a reasonable kind of argument — a theory that matches considered judgements across a range of cases has something going for it.',
        },
      },
      {
        id: 'problem',
        kind: 'prose',
        text: {
          essential:
            'And the problem it does not solve: who says what is objectively worth engaging with? Wolf does not supply a criterion, and she says so.',
          detailed:
            'The worry is that the objective condition smuggles in a consensus about what is worthwhile — the arts, science, relationships, craft, service — which looks suspiciously like the tastes of a particular kind of person. Defenders say the account does not need a full theory of worth to be useful, and that there is more agreement about clear cases than the objection assumes. It remains the acknowledged weak point.',
        },
      },
      {
        id: 'wellbeing',
        kind: 'callout',
        tone: 'note',
        title: 'Meaning, happiness and morality come apart',
        text: {
          essential:
            'A life can be meaningful and unhappy, happy and meaningless, or meaningful and morally unremarkable. Treating the three as one thing is a common source of confusion.',
          detailed:
            'Someone caring for a dying parent may have a life with great meaning and little pleasure. Someone comfortable and untroubled may have a great deal of pleasure and no engagement with anything beyond themselves. And meaning is not the same as moral goodness: a meaningful life is not automatically an admirable one, which is part of why Wolf treats meaning as a separate category of reason rather than a branch of ethics.',
        },
        references: [referenceId('sep-well-being'), referenceId('wolf-meaning-in-life')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Could you be wrong about whether your own life is meaningful?',
        whyItMatters: {
          essential:
            'On any account with an objective component, yes — which is uncomfortable, because it means sincere conviction about one’s own life could be mistaken.',
          detailed:
            'On pure subjectivism, no: if you find it meaningful, it is. The cost of that comfort is that it removes the possibility of the realisation people actually report, when someone looks back and judges that they spent decades on the wrong thing. That such realisations happen is a datum any account has to handle.',
        },
        whatWouldSettleIt: {
          essential:
            'Resolution of whether worth can be objective — the metaethical question of Movement V, which remains open.',
        },
        references: [referenceId('wolf-meaning-in-life'), referenceId('sep-life-meaning')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Every account of meaning has to deal with the fact that the life it describes ends.',
        },
      },
    ],
    furtherReading: [referenceId('wolf-meaning-in-life')],
  },

  {
    id: topicId('death-and-meaning'),
    slug: 'death-and-meaning',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 154,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Death',
    subtitle: 'Whether it is bad, and whether it makes anything matter less.',
    summary: {
      essential:
        'Epicurus argued that death cannot harm you because you will not be there to be harmed. The deprivation reply says it harms you by taking away what you would have had. Neither settles whether life needs to end to matter.',
      detailed:
        'Two separate questions here: whether death is bad for the one who dies, and whether mortality drains or supplies significance.',
      technical:
        'The Epicurean argument requires a subject and a time for the harm; deprivation accounts locate the harm in the comparative badness of the shorter life, and face the symmetry objection from prenatal nonexistence.',
    },
    glossaryTerms: [glossaryTermId('stoicism'), glossaryTermId('the-absurd')],
    related: [topicId('meaning-you-find'), topicId('how-should-a-human-being-live')],
    blocks: [
      {
        id: 'epicurus',
        kind: 'prose',
        text: {
          essential:
            'Epicurus’s argument: where death is, you are not; where you are, death is not. There is no moment at which you are both existing and harmed by being dead. So death is nothing to you.',
          detailed:
            'It is a genuine argument rather than a consolation, and it assumes something specific: that a harm needs a subject and a time. If that assumption holds, the conclusion follows.',
        },
      },
      {
        id: 'deprivation',
        kind: 'claim',
        statement: {
          essential:
            'Deprivation accounts hold that death is bad because it deprives the person of goods they would otherwise have had, not because it involves an unpleasant state.',
          detailed:
            'On this view the harm is comparative: the shorter life contains less of what makes a life good. The standard objection is symmetry — we do not regret the time before we existed, though it deprived us equally. Replies include Nagel’s, that we care about the future in a way we do not care about the past, and Parfit’s discussion of that asymmetry as a brute feature of how we are.',
        },
        evidence: 'established',
        references: [referenceId('sep-death'), referenceId('nagel-mortal-questions')],
      },
      {
        id: 'immortality',
        kind: 'prose',
        text: {
          essential:
            'The other direction: would a life without end be better? Williams argued not — that an endless life would eventually exhaust the projects that give a person their identity.',
          detailed:
            'His case turns on what he calls categorical desires: desires that give you a reason to go on living rather than merely being conditional on living. He argues these would be exhausted, leaving either boredom or a series of successive people with nothing linking them. Critics reply that new projects keep arriving, and that the argument underestimates how much there is to do.',
        },
      },
      {
        id: 'does-it-drain',
        kind: 'prose',
        text: {
          essential:
            'And the question that actually worries people: if it all ends, does any of it matter?',
          detailed:
            'The argument that it does not is usually implicit and worth stating: if nothing lasts, nothing counts. But the premise is doing all the work, and it is not obvious. A conversation that ends was not worthless while it happened. Nagel makes a related point about the view from outside — from far enough away nothing anyone does looks significant, and it is not clear why that vantage point should be the authoritative one.',
        },
      },
      {
        id: 'careful',
        kind: 'callout',
        tone: 'caution',
        title: 'No comfort is being offered here',
        text: {
          essential:
            'These are arguments about whether death is a harm and whether mortality affects significance. They are not reassurance, and philosophical arguments have a poor record as consolation.',
          detailed:
            'Someone grieving is not in need of the deprivation account. The arguments address a question, and the question is real, but treating philosophy as a source of comfort tends to produce both bad philosophy and bad comfort. This lens does not attempt it.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Does something have to last to have mattered?',
        whyItMatters: {
          essential:
            'Nearly every worry about meaninglessness in the face of death depends on an unstated yes. If the answer is no, most of the worry has no support.',
          detailed:
            'Arguments in both directions exist and neither is decisive. The permanence intuition is strong and hard to justify; the denial is hard to feel even when accepted. That gap between what someone can argue and what they can believe is itself worth noticing, and it has appeared in several movements of this lens.',
        },
        whatWouldSettleIt: {
          essential:
            'An account of what mattering consists in. That returns to the metaethical question, which is where several of these threads end up.',
        },
        references: [referenceId('sep-death'), referenceId('nagel-mortal-questions')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential: 'Which leaves the question this lens has been circling from the beginning.',
        },
      },
    ],
    furtherReading: [referenceId('sep-death')],
  },

  {
    id: topicId('how-should-a-human-being-live'),
    slug: 'how-should-a-human-being-live',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 155,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How should a human being live?',
    subtitle: 'The answers that have been given, and what each of them costs.',
    summary: {
      essential:
        'Several traditions have answered this seriously. None of them is offered here as correct. What can be done is to set them out with their costs visible, which is what makes choosing between them a decision rather than a mood.',
      detailed:
        'The costs are the important part. Any answer presented without one has been simplified.',
      technical:
        'The traditions differ not only in their verdicts but in what they take a normative theory to be for: a decision procedure, a standard of assessment, or a description of a life.',
    },
    glossaryTerms: [glossaryTermId('stoicism'), glossaryTermId('eudaimonia')],
    related: [topicId('death-and-meaning'), topicId('what-you-are-left-holding')],
    blocks: [
      {
        id: 'traditions',
        kind: 'visualization',
        visualizationId: visualizationId('how-to-live-traditions'),
      },
      {
        id: 'why-costs',
        kind: 'prose',
        text: {
          essential:
            'Each answer above is a real position held by people who thought about it for decades. Each has a cost that its critics press and its defenders have to live with.',
          detailed:
            'Presenting them without costs would be the most common failure of this kind of survey — it produces a menu where every option looks appealing and nothing is at stake in choosing. The costs are what make them rival answers rather than complementary moods.',
        },
      },
      {
        id: 'stoic',
        kind: 'claim',
        statement: {
          essential:
            'The Stoics hold that virtue is the only genuine good and that peace of mind comes from correctly distinguishing what is and is not within one’s power.',
          detailed:
            'Epictetus puts the division at the centre: opinions, intentions and responses are ours; body, reputation, and outcomes are not. The practice is a daily discipline rather than a conclusion. The standard objection is that the division can shade into accepting what ought to be resisted, and that treating externals as indifferent is easier to recommend than to mean.',
        },
        evidence: 'established',
        references: [referenceId('epictetus-discourses')],
      },
      {
        id: 'no-formula',
        kind: 'prose',
        text: {
          essential:
            'Notice something the serious answers share: none of them is a formula. Aristotle says explicitly that no rule settles particular cases. The Stoics teach a practice. Kant gives a test that requires judgement to apply.',
          detailed:
            'This is not evasion on their part. It may be the shape of the subject. If living well were a matter of following a procedure, the procedure could be written down and the question would have closed a long time ago. That it has not is evidence about what kind of question it is.',
        },
      },
      {
        id: 'no-doctrine',
        kind: 'callout',
        tone: 'caution',
        title: 'This lens does not recommend one',
        text: {
          essential:
            'Not out of neutrality for its own sake, and not because the question does not matter. Because the reader is the only one in a position to weigh these costs against a particular life.',
          detailed:
            'A platform that ended by telling you how to live would be doing the opposite of what the previous fifty topics were for. The argument throughout has been that these questions are genuinely open, that the confident answers on all sides are weaker than they sound, and that thinking more clearly is the available skill. Handing over a doctrine at the end would contradict all of it.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Is there one right way for a human being to live?',
        whyItMatters: {
          essential:
            'If there is, then the differences between these traditions are errors and one of them is closer to right. If there is not, then the question is what kind of thing a good life is, given that several very different ones can be good.',
          detailed:
            'Pluralism — the view that there are several genuinely good ways of living that cannot be ranked — is a position rather than a compromise, and it has serious defenders. It also has a cost: it is hard to state without sliding into relativism, and hard to hold onto when confronted with a way of living one thinks is simply wrong.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing available. This is the oldest question in the subject and it has not closed in two and a half thousand years of serious attention.',
        },
        references: [referenceId('aristotle-nicomachean-ethics'), referenceId('sep-well-being')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential: 'One topic remains, and it is not another answer.',
        },
      },
    ],
    furtherReading: [referenceId('epictetus-discourses')],
  },

  {
    id: topicId('what-you-are-left-holding'),
    slug: 'what-you-are-left-holding',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 156,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What you are left holding',
    subtitle: 'Not answers. Something more useful than answers.',
    summary: {
      essential:
        'Nothing in this lens was settled, and that was not a failure. What a reader has at the end is a set of distinctions, a list of questions that stay open, and a better sense of which confident claims are not entitled to their confidence.',
      detailed:
        'The closing topic states what was established, what remains open, and why the second list is longer — without converting either into a doctrine.',
      technical:
        'The lens is organised around the difference between a settled question, a contested question with live positions, and a question whose form is itself disputed. Distinguishing these is the transferable result.',
    },
    glossaryTerms: [glossaryTermId('epistemology'), glossaryTermId('metaethics')],
    related: [
      topicId('how-should-a-human-being-live'),
      topicId('does-the-world-look-the-way-it-is'),
    ],
    blocks: [
      {
        id: 'settled',
        kind: 'prose',
        text: {
          essential:
            'A few things were actually established, and they are worth separating out. Not truths about the world — facts about the arguments.',
          detailed:
            'That seeing is not direct contact, and that noticing this is different from doubting the world. That the memory criterion of identity fails transitivity as stated. That the open-question argument is not decisive against naturalism. That the is–ought gap does not make evidence irrelevant to morality. That the Libet experiments do not show what they are said to show. That "could have done otherwise" has several readings and the dispute often turns on which is in play. These are results, and they hold regardless of what anyone concludes.',
        },
      },
      {
        id: 'open',
        kind: 'prose',
        text: {
          essential:
            'And the list that stayed open: whether we have free will, whether morality is objective, whether the self is real, what consciousness is, whether life has objective meaning, and whether anyone is responsible if they did not create themselves.',
          detailed:
            'Every one of these was left where it was found. Not because the lens declined to look, but because the arguments genuinely have not converged, and reporting otherwise would have been the same failure as overstating a scientific result.',
        },
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'The central questions of this lens remain unresolved among philosophers who have worked on them professionally for decades.',
          detailed:
            'Surveys of the field find substantial division on free will, on moral realism, on personal identity, on physicalism about mind, and on the possibility of philosophical zombies. In several of these the largest single position holds well under half the field. This is the actual state of the subject, and it is not a temporary embarrassment awaiting a result.',
        },
        evidence: 'open-question',
        references: [
          referenceId('sep-freewill'),
          referenceId('sep-moral-realism'),
          referenceId('sep-consciousness'),
        ],
      },
      {
        id: 'skill',
        kind: 'prose',
        text: {
          essential:
            'What is left is a set of moves you can now make. Ask what exactly is being claimed. Ask what would count as evidence against it. Ask whether the origin of a belief is being confused with its truth. Ask whether two people are disagreeing or answering different questions. Ask what a position costs its holder.',
          detailed:
            'None of these is specific to philosophy. All of them transfer — to an argument about policy, to a disagreement with someone you love, to a claim in a headline. They are what the fifty-five topics before this one were actually teaching, underneath the particular subject matter of each.',
        },
      },
      {
        id: 'both-lenses',
        kind: 'prose',
        text: {
          essential:
            'The other lens on this section answered a different question and answered it well: how we came to be here. It is worth saying plainly that neither lens answers the other one’s question, and that this is not a deficiency in either.',
          detailed:
            'The scientific account of human origins does not tell you whether you are responsible for what you do, and the philosophical account does not tell you when the genus Homo appeared. Reading either as competing with the other produces bad science or bad philosophy and usually both. Two ways of looking; one reality.',
        },
      },
      {
        id: 'cross',
        kind: 'cross-link',
        topicId: topicId('how-a-primate-became-homo-sapiens'),
        rationale:
          'The Scientific Lens closes by stating what the evidence supports and what it does not. Reading the two closings together shows how differently the two kinds of question behave, and how similar the discipline of answering them honestly turns out to be.',
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'What will you do with a question that has no answer?',
        whyItMatters: {
          essential:
            'This is the only question in the lens addressed to the reader rather than about a subject, and it is the one the lens is not in a position to answer.',
          detailed:
            'The available responses are recognisable by now. Pick a side and stop looking. Decide the question is meaningless and stop looking. Or hold it open, keep testing it, and act in the meantime — which is uncomfortable, which is what most people who work on these questions do, and which is not obviously the right choice either.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing. It is not that kind of question, and noticing which kind a question is may be the most useful thing this lens has to offer.',
        },
        references: [referenceId('nagel-mortal-questions'), referenceId('camus-sisyphus')],
      },
      {
        id: 'close',
        kind: 'prose',
        text: {
          essential:
            'The questions were here before you and will be here after. That is not a reason to stop asking them. It is most of the reason they are worth asking.',
        },
      },
    ],
    furtherReading: [referenceId('sep-life-meaning'), referenceId('nagel-mortal-questions')],
  },
];
