/**
 * Glossary terms for the Philosophical Lens.
 *
 * Philosophical vocabulary carries a particular hazard: many of these words are
 * also ordinary English words, and the ordinary sense is usually looser and
 * sometimes the opposite of the technical one. "Nihilism" in conversation means
 * not caring; in philosophy it names a specific claim about value. "Idealism"
 * in conversation means having high hopes; in philosophy it names a thesis
 * about what exists.
 *
 * So each definition here does two jobs: it states the technical sense, and —
 * where the gap is wide enough to mislead — it says what the word does *not*
 * mean. Every entry has to survive being read alone in a tooltip, with no
 * argument around it to lean on.
 *
 * Positions that are genuinely contested are described as positions held by
 * some philosophers, never as findings.
 */
import { glossaryTermId, type GlossaryTerm } from '../schema/glossary';
import { referenceId } from '../schema/reference';

export const PHILOSOPHY_GLOSSARY: readonly GlossaryTerm[] = [
  /* ------------------------------------------------------------- reality */
  {
    id: glossaryTermId('epistemology'),
    term: 'Epistemology',
    short:
      'The study of knowledge: what it is, when a belief counts as justified, and where the limits of what we can know fall.',
    references: [referenceId('sep-skepticism')],
  },
  {
    id: glossaryTermId('metaphysics'),
    term: 'Metaphysics',
    short:
      'The study of what there is and what it is like — existence, causation, time, identity — as distinct from how we come to know about it.',
  },
  {
    id: glossaryTermId('methodical-doubt'),
    term: 'Methodical doubt',
    aliases: ['method of doubt', 'hyperbolic doubt'],
    short:
      'Descartes’s procedure of provisionally rejecting anything that could conceivably be false, in order to find out whether anything survives. It is a tool for testing foundations, not a claim that everything is false.',
    references: [referenceId('descartes-meditations')],
  },
  {
    id: glossaryTermId('cogito'),
    term: 'Cogito',
    aliases: ['I think, therefore I am'],
    short:
      'Descartes’s claim that the act of doubting guarantees the existence of a doubter. Widely accepted as establishing that thinking is occurring; much disputed as to whether it establishes a persisting self.',
    references: [referenceId('descartes-meditations'), referenceId('sep-descartes-epistemology')],
  },
  {
    id: glossaryTermId('solipsism'),
    term: 'Solipsism',
    short:
      'The position that only one’s own mind can be known to exist. Almost nobody holds it; it matters because it is hard to refute, and that difficulty is informative.',
    references: [referenceId('sep-other-minds')],
  },
  {
    id: glossaryTermId('induction'),
    term: 'Induction',
    short:
      'Reasoning from observed cases to unobserved ones — from every sunrise so far to tomorrow’s. Hume’s problem is that the inference seems to assume the very regularity it is trying to establish.',
    references: [referenceId('sep-induction-problem'), referenceId('hume-enquiry')],
  },
  {
    id: glossaryTermId('transcendental-idealism'),
    term: 'Transcendental idealism',
    short:
      'Kant’s position that space, time and the categories are contributions the mind makes to experience, so we know the world as it appears to beings like us rather than as it is in itself. How to interpret it is still debated.',
    references: [
      referenceId('kant-critique-pure-reason'),
      referenceId('sep-kant-transcendental-idealism'),
    ],
  },
  {
    id: glossaryTermId('thing-in-itself'),
    term: 'Thing in itself',
    aliases: ['noumenon'],
    short:
      'In Kant, whatever a thing is independently of the conditions under which it can appear to us. By construction it is not something experience could deliver, which is why critics call the notion empty.',
    references: [referenceId('kant-critique-pure-reason')],
  },
  {
    id: glossaryTermId('thought-experiment'),
    term: 'Thought experiment',
    short:
      'An imagined case designed to isolate one variable in an argument. It tests what a concept commits you to; it is not evidence about what actually happens.',
    references: [referenceId('parfit-reasons-persons')],
  },

  /* ---------------------------------------------------------------- self */
  {
    id: glossaryTermId('personal-identity'),
    term: 'Personal identity',
    short:
      'The question of what makes a person at one time the same person as someone at another time — not what makes someone distinctive, but what makes them numerically one and the same.',
    references: [referenceId('sep-identity-personal')],
  },
  {
    id: glossaryTermId('psychological-continuity'),
    term: 'Psychological continuity',
    short:
      'The proposal that a person persists through overlapping chains of memory, intention and character rather than through any single unchanging part.',
    references: [referenceId('locke-essay'), referenceId('parfit-reasons-persons')],
  },
  {
    id: glossaryTermId('bundle-theory'),
    term: 'Bundle theory',
    short:
      'Hume’s proposal that the self is a collection of perceptions in rapid succession, with no additional owner found behind them when one looks.',
    references: [referenceId('hume-treatise')],
  },
  {
    id: glossaryTermId('anatta'),
    term: 'Anattā',
    aliases: ['non-self', 'anatman'],
    short:
      'The Buddhist analysis that no permanent, independent, controlling self is to be found among the parts of a person. It denies a particular kind of self, not the existence of persons or of experience.',
    references: [
      referenceId('bodhi-2000-connected-discourses'),
      referenceId('sep-mind-indian-buddhism'),
    ],
  },
  {
    id: glossaryTermId('five-aggregates'),
    term: 'Five aggregates',
    aliases: ['skandhas', 'khandhas'],
    short:
      'The five categories — form, feeling, perception, formations, consciousness — into which early Buddhist analysis divides a person in order to ask, of each, whether it is the self.',
    references: [referenceId('bodhi-2000-connected-discourses')],
  },
  {
    id: glossaryTermId('dependent-origination'),
    term: 'Dependent origination',
    short:
      'The Buddhist claim that things arise in dependence on conditions rather than existing independently. It is offered as the alternative to both permanence and nothingness.',
    references: [referenceId('nagarjuna-garfield')],
  },
  {
    id: glossaryTermId('emptiness-sunyata'),
    term: 'Emptiness (śūnyatā)',
    short:
      'In Madhyamaka Buddhism, the absence of independent essence in things — explicitly not the claim that nothing exists, a reading Nāgārjuna rejects directly.',
    references: [referenceId('nagarjuna-garfield')],
  },

  /* ---------------------------------------------------- freedom and cause */
  {
    id: glossaryTermId('determinism'),
    term: 'Determinism',
    short:
      'The thesis that the complete state of the world at one time, together with the laws, fixes exactly one future. Whether our world is like this is not settled by current physics.',
    references: [referenceId('sep-determinism-causal')],
  },
  {
    id: glossaryTermId('compatibilism'),
    term: 'Compatibilism',
    short:
      'The position that free will and determinism can both be true, because the freedom worth having is a matter of acting from one’s own reasons rather than of being uncaused.',
    references: [referenceId('sep-compatibilism'), referenceId('dennett-elbow-room')],
  },
  {
    id: glossaryTermId('incompatibilism'),
    term: 'Incompatibilism',
    short:
      'The position that free will and determinism cannot both be true. It divides into those who keep free will and reject determinism, and those who keep determinism and reject free will.',
    references: [referenceId('sep-incompatibilism-arguments')],
  },
  {
    id: glossaryTermId('libertarian-free-will'),
    term: 'Libertarian free will',
    short:
      'The position that people really do have more than one possible future open to them, and that this requires determinism to be false. Unrelated to the political use of the word.',
    references: [referenceId('kane-significance-free-will'), referenceId('sep-freewill')],
  },
  {
    id: glossaryTermId('hard-incompatibilism'),
    term: 'Hard incompatibilism',
    short:
      'The position that we lack free will whether or not determinism is true — because indeterminism would only add randomness, which is no better for control.',
    references: [referenceId('pereboom-living-without-free-will')],
  },
  {
    id: glossaryTermId('consequence-argument'),
    term: 'Consequence argument',
    short:
      'The argument that if our acts follow from the past and the laws, and we control neither, then we do not control our acts. The standard incompatibilist case.',
    references: [referenceId('sep-incompatibilism-arguments')],
  },
  {
    id: glossaryTermId('basic-argument'),
    term: 'The Basic Argument',
    short:
      'Galen Strawson’s argument that being ultimately responsible would require having made yourself, which would require an earlier self doing the making, and so on without end.',
    references: [referenceId('strawson-g-1994-impossibility')],
  },
  {
    id: glossaryTermId('alternate-possibilities'),
    term: 'Principle of alternate possibilities',
    short:
      'The principle that a person is responsible only if they could have done otherwise. Frankfurt’s cases are designed to show that responsibility can survive the loss of alternatives.',
    references: [referenceId('frankfurt-1969-alternate-possibilities')],
  },
  {
    id: glossaryTermId('second-order-desire'),
    term: 'Second-order desire',
    short:
      'A desire about one’s own desires — wanting not to want something. Frankfurt uses the fit between the two levels to say when a will is the agent’s own.',
    references: [referenceId('frankfurt-1971-freedom-of-the-will')],
  },
  {
    id: glossaryTermId('reasons-responsiveness'),
    term: 'Reasons-responsiveness',
    short:
      'A capacity to recognise reasons and to act differently in response to them. Offered by several compatibilists as the condition responsibility actually tracks.',
    references: [
      referenceId('fischer-ravizza-responsibility-control'),
      referenceId('wolf-freedom-within-reason'),
    ],
  },
  {
    id: glossaryTermId('readiness-potential'),
    term: 'Readiness potential',
    short:
      'A slow build-up of scalp-recorded brain activity preceding a voluntary movement. What it indicates is disputed: a decision already made, or ordinary fluctuating activity crossing a threshold.',
    references: [
      referenceId('libet-1983-readiness-potential'),
      referenceId('schurger-2012-accumulator'),
    ],
  },
  {
    id: glossaryTermId('autonomy'),
    term: 'Autonomy',
    short:
      'Self-governance: acting on principles one can endorse as one’s own. The hard part is saying when an endorsement is genuinely the agent’s and not itself installed from outside.',
    references: [referenceId('sep-personal-autonomy')],
  },

  /* ------------------------------------------------------------ morality */
  {
    id: glossaryTermId('metaethics'),
    term: 'Metaethics',
    short:
      'The study of what moral claims are — whether they can be true, what would make them true, and how we could know — as opposed to which particular actions are right.',
    references: [referenceId('sep-moral-realism')],
  },
  {
    id: glossaryTermId('consequentialism'),
    term: 'Consequentialism',
    short:
      'The family of views on which the rightness of an act depends only on its outcomes. Utilitarianism is its best-known member.',
    references: [referenceId('mill-utilitarianism')],
  },
  {
    id: glossaryTermId('utilitarianism'),
    term: 'Utilitarianism',
    short:
      'The view that the right act is the one producing the greatest total well-being, counting everyone equally.',
    references: [referenceId('mill-utilitarianism'), referenceId('bentham-principles')],
  },
  {
    id: glossaryTermId('deontology'),
    term: 'Deontology',
    short:
      'The family of views on which some acts are required or forbidden by their nature, independently of how the outcomes total up.',
    references: [referenceId('kant-groundwork')],
  },
  {
    id: glossaryTermId('categorical-imperative'),
    term: 'Categorical imperative',
    short:
      'Kant’s supreme moral principle: act only on a rule you could will everyone to follow, and treat humanity always as an end and never merely as a means.',
    references: [referenceId('kant-groundwork')],
  },
  {
    id: glossaryTermId('virtue-ethics'),
    term: 'Virtue ethics',
    short:
      'The family of views that starts from what kind of person to be rather than from which acts are permitted, and treats character as the primary moral subject.',
    references: [referenceId('sep-ethics-virtue'), referenceId('aristotle-nicomachean-ethics')],
  },
  {
    id: glossaryTermId('eudaimonia'),
    term: 'Eudaimonia',
    short:
      'Aristotle’s term for a life that is going well as a whole — closer to flourishing than to happiness, and a matter of activity rather than of feeling.',
    references: [referenceId('aristotle-nicomachean-ethics')],
  },
  {
    id: glossaryTermId('doctrine-of-the-mean'),
    term: 'Doctrine of the mean',
    short:
      'Aristotle’s claim that each virtue sits between an excess and a deficiency, located by practical judgement in the particular case rather than by a formula.',
    references: [referenceId('aristotle-nicomachean-ethics')],
  },
  {
    id: glossaryTermId('phronesis'),
    term: 'Phronesis',
    aliases: ['practical wisdom'],
    short:
      'The judgement that tells you what a virtue requires here, in this case. Aristotle treats it as itself a skill acquired by practice, not a rule that could be written down.',
    references: [referenceId('aristotle-nicomachean-ethics')],
  },
  {
    id: glossaryTermId('moral-realism'),
    term: 'Moral realism',
    short:
      'The position that there are moral facts that hold independently of what anyone thinks about them. A live position, defended and attacked by serious philosophers.',
    references: [referenceId('sep-moral-realism'), referenceId('shafer-landau-moral-realism')],
  },
  {
    id: glossaryTermId('error-theory'),
    term: 'Error theory',
    short:
      'Mackie’s position that moral claims assert objective facts and that no such facts exist, so ordinary moral statements are systematically false.',
    references: [referenceId('mackie-ethics')],
  },
  {
    id: glossaryTermId('expressivism'),
    term: 'Expressivism',
    short:
      'The position that moral statements primarily express attitudes rather than describe facts — and, in its sophisticated forms, that this leaves moral argument intact.',
    references: [referenceId('blackburn-ruling-passions')],
  },
  {
    id: glossaryTermId('moral-relativism'),
    term: 'Moral relativism',
    short:
      'The position that moral truth is relative to a culture or framework. Distinct from the observation that moral codes differ, which nobody disputes.',
    references: [referenceId('sep-moral-anti-realism')],
  },
  {
    id: glossaryTermId('is-ought-gap'),
    term: 'Is–ought gap',
    short:
      'Hume’s observation that arguments slide from statements of fact to statements of obligation without explaining the move. How damaging it is remains disputed.',
    references: [referenceId('hume-treatise'), referenceId('sep-hume-moral')],
  },
  {
    id: glossaryTermId('naturalistic-fallacy'),
    term: 'Naturalistic fallacy',
    short:
      'Moore’s charge that defining goodness in natural terms — as pleasure, or as what we evolved to want — mistakes a substantive claim for a definition.',
    references: [referenceId('moore-principia-ethica')],
  },
  {
    id: glossaryTermId('open-question-argument'),
    term: 'Open-question argument',
    short:
      'Moore’s test: if “that is pleasant, but is it good?” still makes sense as a question, then goodness has not been successfully defined as pleasantness.',
    references: [referenceId('moore-principia-ethica'), referenceId('sep-naturalism-moral')],
  },
  {
    id: glossaryTermId('evolutionary-debunking'),
    term: 'Evolutionary debunking argument',
    short:
      'The argument that if our moral intuitions were shaped by selection for survival, we have no reason to expect them to track independent moral truths.',
    references: [referenceId('street-2006-darwinian-dilemma')],
  },
  {
    id: glossaryTermId('genealogy-method'),
    term: 'Genealogy',
    short:
      'Tracing how a concept came to have the force it has. A genealogy can unsettle a value without refuting it — where it came from is a separate question from whether it is right.',
    references: [referenceId('nietzsche-genealogy')],
  },
  {
    id: glossaryTermId('master-and-slave-morality'),
    term: 'Master and slave morality',
    short:
      'Nietzsche’s contrast between an evaluation that starts from “good versus bad” and one that starts by condemning an enemy as evil. A historical hypothesis about moral concepts, not a recommendation.',
    references: [referenceId('nietzsche-genealogy'), referenceId('sep-nietzsche-moral-political')],
  },
  {
    id: glossaryTermId('ubermensch'),
    term: 'Übermensch',
    aliases: ['overman'],
    short:
      'A figure in Nietzsche’s Zarathustra representing someone who creates values rather than inheriting them. Not a claim about racial or physical superiority, and not a call to dominate others.',
    references: [
      referenceId('nietzsche-zarathustra'),
      referenceId('sep-nietzsche-moral-political'),
    ],
  },
  {
    id: glossaryTermId('eternal-recurrence'),
    term: 'Eternal recurrence',
    short:
      'Nietzsche’s thought experiment: if you had to live this same life again endlessly, would the thought crush you or not? Presented as a test of one’s relation to one’s life.',
    references: [referenceId('nietzsche-gay-science')],
  },
  {
    id: glossaryTermId('nihilism'),
    term: 'Nihilism',
    short:
      'The position that nothing has value or meaning. In Nietzsche it is a diagnosis of a cultural crisis to be overcome, not a doctrine he endorses.',
    references: [referenceId('nietzsche-gay-science')],
  },

  /* ------------------------------------------- character and responsibility */
  {
    id: glossaryTermId('situationism'),
    term: 'Situationism',
    short:
      'The claim, drawn from social psychology, that features of a situation predict behaviour better than stable character traits do. Its scope and strength are contested.',
    references: [referenceId('doris-lack-of-character')],
  },
  {
    id: glossaryTermId('moral-luck'),
    term: 'Moral luck',
    short:
      'Cases where we judge someone for something partly outside their control — the outcome, the situation, the character they were given — despite holding that control is required for blame.',
    references: [referenceId('sep-moral-luck'), referenceId('williams-moral-luck')],
  },
  {
    id: glossaryTermId('reactive-attitudes'),
    term: 'Reactive attitudes',
    short:
      'Resentment, gratitude, indignation, forgiveness: the responses we have to each other’s regard. P. F. Strawson argues that responsibility is grounded in these rather than in a metaphysical thesis.',
    references: [referenceId('strawson-pf-1962-freedom-resentment')],
  },
  {
    id: glossaryTermId('desert'),
    term: 'Desert',
    short:
      'What someone is owed in virtue of what they have done — the idea that wrongdoing merits suffering as such, independently of any good the suffering produces.',
    references: [referenceId('sep-legal-punishment')],
  },
  {
    id: glossaryTermId('retributivism'),
    term: 'Retributivism',
    short:
      'The view that punishment is justified because it is deserved, not because of its effects. It is the view most directly threatened if ultimate responsibility is impossible.',
    references: [
      referenceId('sep-legal-punishment'),
      referenceId('caruso-rejecting-retributivism'),
    ],
  },
  {
    id: glossaryTermId('quarantine-model'),
    term: 'Quarantine model',
    short:
      'The proposal that dangerous offenders may be restrained on the same grounds as a carrier of infection — protection, with the least restriction that works — rather than because they deserve it.',
    references: [referenceId('caruso-rejecting-retributivism')],
  },
  {
    id: glossaryTermId('veil-of-ignorance'),
    term: 'Veil of ignorance',
    short:
      'Rawls’s device for choosing principles of justice without knowing which position in society you will occupy — a way of removing the influence of your own luck on your judgement.',
    references: [referenceId('rawls-theory-justice')],
  },

  /* ------------------------------------------------------- consciousness */
  {
    id: glossaryTermId('qualia'),
    term: 'Qualia',
    aliases: ['phenomenal properties'],
    short:
      'The felt qualities of experience — the particular redness of red, the specific ache of a headache. Whether they are a genuine category is itself disputed.',
    references: [referenceId('sep-qualia')],
  },
  {
    id: glossaryTermId('hard-problem'),
    term: 'The hard problem of consciousness',
    short:
      'Chalmers’s name for the question of why physical processing is accompanied by experience at all, as distinct from explaining what the brain does.',
    references: [referenceId('chalmers-1995-facing-up')],
  },
  {
    id: glossaryTermId('philosophical-zombie'),
    term: 'Philosophical zombie',
    short:
      'A hypothetical being physically identical to a person but with no inner experience. Used in an argument about what physical facts can explain; nothing to do with films.',
    references: [referenceId('sep-zombies'), referenceId('chalmers-conscious-mind')],
  },
  {
    id: glossaryTermId('knowledge-argument'),
    term: 'Knowledge argument',
    aliases: ['Mary’s room'],
    short:
      'Jackson’s case of a scientist who knows every physical fact about colour but has never seen it, used to argue that some fact about experience is left out.',
    references: [referenceId('jackson-1982-epiphenomenal-qualia')],
  },
  {
    id: glossaryTermId('dualism'),
    term: 'Dualism',
    short:
      'The position that mind and matter are distinct kinds of thing, or that mental properties are not physical properties. A minority position, but not a dead one.',
    references: [referenceId('chalmers-conscious-mind')],
  },
  {
    id: glossaryTermId('physicalism'),
    term: 'Physicalism',
    short:
      'The position that everything, including mind, is physical or fixed by the physical. The majority position among philosophers, and still argued for rather than assumed.',
    references: [referenceId('sep-consciousness')],
  },
  {
    id: glossaryTermId('functionalism'),
    term: 'Functionalism',
    short:
      'The position that a mental state is defined by the role it plays — what causes it and what it causes — rather than by what it is made of.',
    references: [referenceId('sep-consciousness')],
  },
  {
    id: glossaryTermId('panpsychism'),
    term: 'Panpsychism',
    short:
      'The position that some form of experience is a basic feature of matter. Taken seriously by some philosophers as a response to the hard problem; its main difficulty is explaining how small experiences combine.',
    references: [referenceId('sep-panpsychism')],
  },
  {
    id: glossaryTermId('illusionism'),
    term: 'Illusionism',
    short:
      'The position that the hard problem is generated by a misrepresentation of our own states — that we are wrong about what experience is like, not that we lack it.',
    references: [referenceId('dennett-consciousness-explained')],
  },
  {
    id: glossaryTermId('problem-of-other-minds'),
    term: 'Problem of other minds',
    short:
      'The difficulty of justifying the belief that anyone else has an inner life, given that only behaviour and physiology are ever observed from outside.',
    references: [referenceId('sep-other-minds')],
  },

  /* ------------------------------------------------- meaning and living */
  {
    id: glossaryTermId('the-absurd'),
    term: 'The absurd',
    short:
      'In Camus, the relation between a human demand for meaning and a world that does not supply one. It names a confrontation, not a claim that nothing matters.',
    references: [referenceId('camus-sisyphus')],
  },
  {
    id: glossaryTermId('existentialism'),
    term: 'Existentialism',
    short:
      'A loose family of twentieth-century philosophies concerned with freedom, choice and self-definition. Its members disagree sharply, and several rejected the label.',
    references: [referenceId('sep-existentialism')],
  },
  {
    id: glossaryTermId('existence-precedes-essence'),
    term: 'Existence precedes essence',
    short:
      'Sartre’s formula: a person exists first and is defined afterwards by what they do, rather than arriving with a fixed nature to fulfil.',
    references: [referenceId('sartre-existentialism-humanism')],
  },
  {
    id: glossaryTermId('bad-faith'),
    term: 'Bad faith',
    short:
      'Sartre’s term for denying one’s own freedom by treating a role, a circumstance or a past as though it decided one’s conduct.',
    references: [referenceId('sartre-being-nothingness')],
  },
  {
    id: glossaryTermId('facticity'),
    term: 'Facticity',
    short:
      'The given features of a situation — body, history, circumstance — that freedom works within. In Beauvoir it is what makes freedom concrete rather than abstract.',
    references: [referenceId('beauvoir-ethics-ambiguity')],
  },
  {
    id: glossaryTermId('stoicism'),
    term: 'Stoicism',
    short:
      'An ancient school holding that a good life comes from virtue and from correctly dividing what is and is not in one’s power. Not the same as suppressing emotion.',
    references: [referenceId('epictetus-discourses')],
  },
  {
    id: glossaryTermId('hybrid-view-of-meaning'),
    term: 'Hybrid view of meaning',
    short:
      'Susan Wolf’s proposal that meaning arises where subjective engagement meets something independently worth engaging with — neither alone being enough.',
    references: [referenceId('wolf-meaning-in-life')],
  },
];
