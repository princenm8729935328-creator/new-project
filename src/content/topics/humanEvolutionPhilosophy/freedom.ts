/**
 * Human Evolution, Philosophical Lens — Movement IV: free will.
 *
 * The rule for this movement, stated once here and honoured in every topic
 * below: no winner is declared. It does not say that science has disproved free
 * will, and it does not say that free will obviously exists. Both of those are
 * things people say confidently and neither is supportable.
 *
 * The movement is arranged so that each position gets its strongest statement
 * before its strongest objection, and so that the two positions with the most
 * popular support — the naive libertarian one and the naive "neuroscience
 * settled it" one — are the two that get examined most carefully, because
 * confidence is where the thinking stops.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const PHIL_FREEDOM_TOPICS: readonly Topic[] = [
  {
    id: topicId('the-feeling-of-choosing'),
    slug: 'the-feeling-of-choosing',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 117,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The feeling of choosing',
    subtitle: 'Something happens when you decide. The question is what it is evidence of.',
    summary: {
      essential:
        'Deliberating feels like standing at a fork with more than one road open. That feeling is real and universal. What it establishes about the world is the whole dispute.',
      detailed:
        'The intuition is the starting point of the movement and it deserves a careful statement rather than immediate demolition, because a badly stated intuition is easy to knock down and teaches nothing.',
      technical:
        'The phenomenology of open alternatives is compatible with several metaphysical situations, including one in which the openness is epistemic — a matter of the agent not yet knowing what they will do.',
    },
    glossaryTerms: [glossaryTermId('determinism')],
    related: [topicId('authoring-a-belief'), topicId('determinism-stated-carefully')],
    blocks: [
      {
        id: 'intuition',
        kind: 'prose',
        text: {
          essential:
            'You are deciding whether to say something difficult. You can feel both options there — the saying and the not-saying — and the sense that which one happens is up to you, right now, and is not yet fixed.',
          detailed:
            'This is not a theory anyone holds; it is how deliberating presents itself. And the strength of it is worth registering. People do not merely believe they have alternatives; they experience the alternatives as present.',
        },
      },
      {
        id: 'problem',
        kind: 'prose',
        text: {
          essential:
            'Now ask what that experience is evidence for. There are at least two hypotheses that would produce exactly the same feeling.',
          detailed:
            'One: more than one future is genuinely open, and you are the thing that settles which. Two: exactly one thing will happen, and the feeling of openness is the feeling of not yet knowing which — which is what deliberating from inside would feel like either way. Nothing in the experience discriminates.',
        },
      },
      {
        id: 'figure',
        kind: 'visualization',
        visualizationId: visualizationId('determinism-branching'),
      },
      {
        id: 'ambiguity',
        kind: 'claim',
        statement: {
          essential:
            'The phrase "I could have done otherwise" has several distinct readings, and determinism is incompatible with only one of them.',
          detailed:
            'On a conditional reading — I would have acted differently had I wanted to — determinism leaves the claim true. On a capacity reading — the mechanism I acted on was responsive to reasons — it also leaves it true. On a categorical reading — with the past and the laws held exactly fixed, more than one future was available — determinism rules it out. Much apparent disagreement about free will is disagreement about which reading is at issue.',
        },
        evidence: 'established',
        references: [referenceId('sep-compatibilism'), referenceId('sep-freewill')],
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'An objection worth taking seriously: perhaps the experience is not mere feeling. Perhaps deliberation is how the decision actually gets made, in which case the sense of participating is accurate.',
          detailed:
            'This is right, and it is often lost. Deliberation is not a spectator sport with the result already in from elsewhere — the weighing is part of the causal process producing the outcome. What this establishes is that the deliberation matters. What it does not establish is that more than one outcome was possible, and those are different claims.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Could any experience, from inside, distinguish a genuinely open choice from an inevitable one?',
        whyItMatters: {
          essential:
            'If not, then introspection cannot settle the question in either direction — which removes the most common reason people give for their view on free will.',
          detailed:
            'It is worth noting that this cuts both ways. Someone who says "I obviously have free will, I can feel it" is relying on introspection. So is someone who says "I can feel that my choices come from my character". Neither has evidence the other lacks.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing available from the first person. Any argument here has to come from outside the experience, which is what the rest of this movement attempts.',
        },
        references: [referenceId('sep-freewill')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Before going further, the word "determinism" needs stating properly — because almost everything said about it in ordinary conversation is a different claim.',
        },
      },
    ],
    furtherReading: [referenceId('sep-freewill')],
  },

  {
    id: topicId('determinism-stated-carefully'),
    slug: 'determinism-stated-carefully',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 118,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Determinism, stated carefully',
    subtitle: 'A precise thesis that is routinely confused with three others.',
    summary: {
      essential:
        'Determinism is the claim that the state of the world at one time, plus the laws, fixes exactly one future. It is not fatalism, not predictability, and not the claim that your choices do not matter.',
      detailed:
        'Whether our world is deterministic is not settled by physics, and — importantly — the free will problem does not go away if it turns out not to be.',
      technical:
        'Causal determinism is a thesis about the world, not about epistemic access; it is independent of predictability, which fails in deterministic chaotic systems, and of fatalism, which asserts outcome-invariance across antecedents.',
    },
    glossaryTerms: [glossaryTermId('determinism')],
    related: [topicId('the-feeling-of-choosing'), topicId('hard-determinism')],
    blocks: [
      {
        id: 'statement',
        kind: 'prose',
        text: {
          essential:
            'The thesis: given the complete state of the world at any moment and the laws that govern it, exactly one future follows. Not likely follows. Follows.',
          detailed:
            'That is all of it. It says nothing about anyone being able to compute the future, nothing about human decisions being pointless, and nothing about what will happen to you regardless of what you do.',
        },
      },
      {
        id: 'not-fatalism',
        kind: 'callout',
        tone: 'misconception',
        title: 'Determinism is not fatalism',
        text: {
          essential:
            'Fatalism says the outcome will be the same whatever you do. Determinism says your doing is part of what produces the outcome — and that your doing was itself caused.',
          detailed:
            'The practical difference is total. Under fatalism, deliberating is pointless because the result is fixed independently of it. Under determinism, deliberating is one of the causes; remove it and a different thing happens. "It was determined that I would fail, so why revise" is a fatalist inference from a deterministic premise, and it does not follow.',
        },
      },
      {
        id: 'not-predictability',
        kind: 'prose',
        text: {
          essential:
            'Nor is determinism the same as predictability. A double pendulum is governed by simple deterministic equations and is unpredictable in practice after a few seconds, because tiny differences in the starting state grow rapidly.',
          detailed:
            'So "nobody could ever predict what I will do" is true and irrelevant. It is a claim about the limits of measurement and computation, not about whether one future follows. Conflating the two makes determinism look refuted by everyday experience when it has not been touched.',
        },
      },
      {
        id: 'physics',
        kind: 'claim',
        statement: {
          essential: 'Whether our world is deterministic is not settled by current physics.',
          detailed:
            'Quantum mechanics admits both deterministic interpretations, such as Everettian and Bohmian formulations, and indeterministic ones involving genuine collapse. These are empirically equivalent on the evidence available, so the choice between them is currently made on theoretical grounds rather than by experiment. Anyone who tells you physics has proved determinism true or false is overstating what is known.',
        },
        evidence: 'open-question',
        references: [referenceId('sep-determinism-causal')],
      },
      {
        id: 'twist',
        kind: 'prose',
        text: {
          essential:
            'Here is the part that surprises people. Suppose the question were settled and the answer were "not deterministic". That would not deliver free will.',
          detailed:
            'Quantum indeterminacy, if real, means some events are not fixed by what came before. An event not fixed by what came before is not thereby fixed by *you* — it is not fixed by anything. Randomness in the causal chain does not obviously add control; it subtracts it. This is the argument the randomness topic develops, and it is why the free will problem is not waiting on a physics result.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'If neither determinism nor indeterminism gives us what we want, what exactly were we asking for?',
        whyItMatters: {
          essential:
            'A demand that cannot be satisfied by either of the only two options may be a confused demand. Or it may be a coherent demand that the world does not meet. Distinguishing these is the central task of the rest of the movement.',
        },
        whatWouldSettleIt: {
          essential:
            'A statement of what free will requires that is precise enough to check against both options — which is exactly what the competing positions are attempts to supply.',
        },
        references: [referenceId('sep-freewill'), referenceId('sep-determinism-causal')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Take the pessimistic route first: suppose determinism is true and free will requires what it rules out. What follows?',
        },
      },
    ],
    furtherReading: [referenceId('sep-determinism-causal')],
  },

  {
    id: topicId('hard-determinism'),
    slug: 'hard-determinism',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 119,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'If there is no free will',
    subtitle: 'The pessimistic position, given its best statement and its real costs.',
    summary: {
      essential:
        'Some philosophers hold that we lack free will. The argument for it is clean. What follows for blame, punishment and self-regard is disputed even among those who accept it.',
      detailed:
        'The position is not nihilism about action and it is not a licence for anything. Its defenders have generally been careful about what does and does not survive.',
      technical:
        'The consequence argument proceeds from the fixity of the past and the laws to the fixity of any consequence of them, using a transfer-of-powerlessness principle that has been the main site of compatibilist resistance.',
    },
    glossaryTerms: [
      glossaryTermId('incompatibilism'),
      glossaryTermId('consequence-argument'),
      glossaryTermId('hard-incompatibilism'),
    ],
    related: [topicId('determinism-stated-carefully'), topicId('libertarian-free-will')],
    blocks: [
      {
        id: 'argument',
        kind: 'prose',
        text: {
          essential:
            'The argument in three steps. What happened before you were born is not up to you. The laws of nature are not up to you. But what you do follows from those two things. So what you do is not up to you.',
          detailed:
            'It is called the consequence argument, and its force comes from how little it assumes. It does not need any particular science. It needs only that acts follow from antecedents, and that we do not control the antecedents.',
        },
      },
      {
        id: 'positions',
        kind: 'visualization',
        visualizationId: visualizationId('free-will-positions'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Incompatibilists argue that if determinism holds, nobody has power over the consequences of the past and the laws, and therefore nobody has power over their own acts.',
          detailed:
            'The argument turns on a transfer principle: if you are powerless over p, and powerless over the fact that p entails q, you are powerless over q. Compatibilists have attacked precisely this principle, arguing that the sense of "powerless" that makes the premises true is not the sense that makes the conclusion troubling.',
        },
        evidence: 'established',
        references: [referenceId('sep-incompatibilism-arguments')],
      },
      {
        id: 'modern',
        kind: 'prose',
        text: {
          essential:
            'The more common contemporary version does not even need determinism. It says: if determined, your acts trace back to things you did not control; if undetermined, they involve chance you also do not control. Either way, no ultimate responsibility.',
          detailed:
            'This is hard incompatibilism, and it is stronger than classical hard determinism because it does not depend on how physics turns out. Derk Pereboom has developed it at length, including a careful account of what he thinks survives.',
        },
      },
      {
        id: 'what-survives',
        kind: 'claim',
        statement: {
          essential:
            'Pereboom argues that abandoning desert-based blame need not be destructive, and that much of moral life can be reconstructed without it.',
          detailed:
            'On his account we keep the judgement that an action was wrong, the demand that someone change, the protection of potential victims, and relationships built on care rather than on desert. What goes is the backward-looking claim that a person deserves to suffer for what they did. He argues that grief, gratitude and love survive in altered but recognisable forms, and that resentment is the main casualty.',
        },
        evidence: 'inference',
        references: [referenceId('pereboom-living-without-free-will')],
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The strongest objection is not that the conclusion is uncomfortable. It is that the argument may prove too much.',
          detailed:
            'If "not up to you" applies to any act with antecedents, it applies to every act any possible agent could perform in any possible world, because acts always have antecedents. An argument showing that free will is impossible for anything whatever may have established that its own notion of freedom was incoherent rather than that we lack something.',
        },
      },
      {
        id: 'counter',
        kind: 'prose',
        text: {
          essential:
            'The reply: that is exactly the claim. The notion people have been using *is* incoherent, and the right response is to notice that rather than to redefine the term until it applies.',
          detailed:
            'Which is a real disagreement about method, not about facts. One side says a concept that could not apply to anything has to be revised; the other says a concept that could not apply to anything has been shown to be empty, and revising it changes the subject. Neither side is making a mistake the other can point to.',
        },
      },
      {
        id: 'not-license',
        kind: 'callout',
        tone: 'caution',
        title: 'This is not a licence for anything',
        text: {
          essential:
            'No serious defender of this position holds that it makes cruelty permissible or effort pointless. Several argue the opposite follows.',
          detailed:
            'If nobody ultimately deserves their character, then nobody deserves contempt for it either — which is an argument for less punitiveness rather than for less restraint. And deliberation still causes outcomes on this view, so effort is still efficacious. The inference from "no free will" to "nothing matters" is exactly the fatalist slide the previous topic identified, and it does not follow here either.',
        },
        references: [referenceId('pereboom-living-without-free-will')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Could a society function if it genuinely stopped believing in desert?',
        whyItMatters: {
          essential:
            'The question is partly empirical and partly conceptual, and it is not answerable from an armchair. But whether a view is liveable is a legitimate consideration when the view concerns how to live.',
          detailed:
            'Some argue the belief in desert does necessary work and that removing it would corrode cooperation. Others argue that the institutions could be rebuilt on protection and reform and would be more humane for it. The punishment movement later in this lens takes the question up directly.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing decisive. Small-scale evidence about how belief in free will affects behaviour exists and is contested, and it could not settle the question at the scale of a society in any case.',
        },
        references: [
          referenceId('pereboom-living-without-free-will'),
          referenceId('strawson-pf-1962-freedom-resentment'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Now the other side. Suppose the feeling of open alternatives is accurate. What would have to be true, and can it be made to work?',
        },
      },
    ],
    furtherReading: [referenceId('pereboom-living-without-free-will')],
  },

  {
    id: topicId('libertarian-free-will'),
    slug: 'libertarian-free-will',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 120,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Genuinely open futures',
    subtitle: 'The position most people start with, and the problem it has to solve.',
    summary: {
      essential:
        'Libertarians hold that we really do have more than one possible future, which requires determinism to be false. The difficulty is explaining how an undetermined event is any more yours than a determined one.',
      detailed:
        'This is the position nearly everyone holds before thinking about it, which is a reason to state it carefully rather than to skip it.',
      technical:
        'Event-causal libertarian accounts locate indeterminism within the deliberative process; agent-causal accounts posit a form of causation by a substance not reducible to causation by events involving it.',
    },
    glossaryTerms: [glossaryTermId('libertarian-free-will'), glossaryTermId('incompatibilism')],
    related: [topicId('hard-determinism'), topicId('compatibilism')],
    blocks: [
      {
        id: 'statement',
        kind: 'prose',
        text: {
          essential:
            'The position: when you deliberate, more than one outcome really is available; you settle which; and the settling is not fixed by anything prior. This is what most people mean by free will before they have been asked to be precise.',
          detailed:
            'It is not an obscure view. It is the default, and it is held by serious philosophers who have thought hard about the objection that follows. Presenting it as a naive position that education removes would be both condescending and inaccurate.',
        },
      },
      {
        id: 'why',
        kind: 'prose',
        text: {
          essential:
            'The case for it rests on two things: the experience of deliberating, and the sense that responsibility requires that the person could actually have done something else — not merely that they would have if they had been different.',
          detailed:
            'That second point has force. When we blame someone we seem to mean that this person, as they actually were at that moment, had another option. A conditional about a different person with different desires does not look like what we meant.',
        },
      },
      {
        id: 'problem',
        kind: 'visualization',
        visualizationId: visualizationId('randomness-problem'),
      },
      {
        id: 'luck',
        kind: 'claim',
        statement: {
          essential:
            'The luck objection holds that if an action is undetermined, then given everything about the agent up to the moment of action, it remains open which way things go — and what settles it is therefore not attributable to the agent.',
          detailed:
            'The point can be put as a rewind: replay the universe to a moment before the choice, with the agent in exactly the same state, and on an indeterministic account the outcome can differ. Nothing about the agent explains the difference, which is what makes it look like luck rather than control.',
        },
        evidence: 'established',
        references: [referenceId('sep-incompatibilism-arguments')],
      },
      {
        id: 'kane',
        kind: 'claim',
        statement: {
          essential:
            'Robert Kane proposes that in self-forming actions the agent genuinely wants both options, so that whichever way the indeterminacy resolves, the result is something the agent willed.',
          detailed:
            'On his account these are rare moments of inner conflict — a temptation against a commitment — where competing efforts of will are both present and the resolution is undetermined. Because the agent is trying to do each, either outcome is a success of one effort rather than an accident. Critics respond that this relocates the luck rather than removing it: which effort succeeds is still not settled by the agent.',
        },
        evidence: 'active-research',
        references: [referenceId('kane-significance-free-will')],
      },
      {
        id: 'agent-causal',
        kind: 'prose',
        text: {
          essential:
            'The other route is to say the agent is itself a cause — not an event in a chain but a substance that initiates. This gets what is wanted directly, and that is also the problem.',
          detailed:
            'The objection is that it names the desired conclusion rather than explaining it. If agent causation is not a matter of events involving the agent causing things, it is unclear what it is, and unclear how it fits into a world where everything else works by events. Defenders argue that the demand to reduce it to event causation begs the question. The exchange has not converged.',
        },
      },
      {
        id: 'not-quantum',
        kind: 'callout',
        tone: 'misconception',
        title: 'Quantum mechanics does not supply this',
        text: {
          essential:
            'Appealing to quantum indeterminacy does not rescue libertarian free will, because random is not the same as free. It is the objection, not the answer.',
          detailed:
            'Even setting aside whether quantum effects have any relevant influence on neural processing — which is itself disputed — the conceptual problem is untouched. An outcome settled by a genuinely chancy event is settled by chance. Sophisticated libertarians know this perfectly well, which is why Kane and others work so hard on the structure of the deliberation rather than simply pointing at physics.',
        },
        references: [referenceId('sep-incompatibilism-arguments')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Is there any way for an event to be neither determined nor random?',
        whyItMatters: {
          essential:
            'The whole libertarian project depends on there being a third option. If the two exhaust the possibilities, the position cannot be made to work whatever else is true.',
          detailed:
            'Defenders say the dichotomy is false and that agent causation is the third option. Critics say it is a label for the gap rather than something occupying it. Nobody has produced an account that both sides accept as coherent — which is the honest status of the most popular view of free will.',
        },
        whatWouldSettleIt: {
          essential:
            'A positive account of agent causation, or an argument that the determined/random dichotomy is exhaustive. Both have been attempted for decades.',
        },
        references: [
          referenceId('kane-significance-free-will'),
          referenceId('sep-incompatibilism-arguments'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'A third position says both sides have been arguing about the wrong thing — and it is the most widely held view among philosophers, which is itself worth knowing.',
        },
      },
    ],
    furtherReading: [referenceId('kane-significance-free-will')],
  },

  {
    id: topicId('compatibilism'),
    slug: 'compatibilism',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 121,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The freedom worth wanting',
    subtitle: 'Compatibilism, and the charge that it changes the subject.',
    summary: {
      essential:
        'Compatibilists hold that free will is a matter of acting on your own reasons without compulsion — which determinism does not disturb. It is the majority view among philosophers and it is not a trick.',
      detailed:
        'The accusation is that it redefines the term to make the problem disappear. The reply is that it identifies what the term was tracking all along. Both deserve a hearing.',
      technical:
        'Contemporary compatibilism generally combines a hierarchical or identification condition with a reasons-responsiveness condition on the mechanism issuing in action, and divides over whether a historical condition is additionally required.',
    },
    glossaryTerms: [
      glossaryTermId('compatibilism'),
      glossaryTermId('reasons-responsiveness'),
      glossaryTermId('alternate-possibilities'),
      glossaryTermId('second-order-desire'),
    ],
    related: [topicId('libertarian-free-will'), topicId('the-basic-argument')],
    blocks: [
      {
        id: 'move',
        kind: 'prose',
        text: {
          essential:
            'Start with the cases where we actually say someone was not free: pushed, drugged, coerced, delusional, compelled. Now ask what these have in common. None of them is "was caused".',
          detailed:
            'That observation is the whole compatibilist strategy. Our ordinary practice of distinguishing free from unfree acts does not track whether the act was caused — every act is — but whether it came from the person in the right way. If that is what the distinction has always tracked, determinism was never the threat.',
        },
      },
      {
        id: 'conditions',
        kind: 'visualization',
        visualizationId: visualizationId('compatibilist-conditions'),
      },
      {
        id: 'frankfurt-cases',
        kind: 'claim',
        statement: {
          essential:
            'Frankfurt argued with a counterexample that moral responsibility does not require the ability to do otherwise.',
          detailed:
            'The structure: someone decides to do something entirely on their own, while unknown to them a device stood ready to intervene had they been about to decide otherwise. The device never acts. They could not have done otherwise, and they seem fully responsible. The case has generated a very large literature, including sophisticated attempts to show that some flicker of alternative remains, and it has not been decisively refuted or accepted.',
        },
        evidence: 'established',
        references: [referenceId('frankfurt-1969-alternate-possibilities')],
      },
      {
        id: 'positive',
        kind: 'prose',
        text: {
          essential:
            'The positive account most compatibilists now give is about capacity: you acted freely if the process you acted on was one that could have registered a good enough reason and responded to it.',
          detailed:
            'Someone in a panic, or under a compulsion, or thoroughly deceived lacks that responsiveness — a reason to stop was available and could not get through. Someone weighing a decision has it, whether or not the outcome was determined. Fischer and Ravizza develop this as guidance control, adding that the mechanism has to be one the agent has taken ownership of.',
        },
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The charge: this is not what anyone was asking about. People want to know whether they could really have done otherwise, and they are being told about the absence of coercion.',
          detailed:
            'Kant called a version of it a wretched subterfuge — freedom for a turnspit whose movements are wound up in advance. The complaint is that once everything is fixed, calling the fixed thing free because nobody was holding a gun is a change of topic dressed as an answer.',
        },
      },
      {
        id: 'manipulation',
        kind: 'claim',
        statement: {
          essential:
            'Manipulation arguments press compatibilism by describing agents who satisfy its conditions and are nonetheless intuitively unfree.',
          detailed:
            'Pereboom’s four-case argument runs a sequence from direct neural manipulation through gradual engineering to ordinary determined upbringing, arguing that no principled line separates them and that if the first case is unfree so is the last. Compatibilists divide: some deny the intuition about the manipulated cases, some add a historical condition excluding certain origins. Neither response has become standard, and the argument remains one of the most active in the field.',
        },
        evidence: 'active-research',
        references: [
          referenceId('pereboom-living-without-free-will'),
          referenceId('sep-compatibilism'),
        ],
      },
      {
        id: 'counter',
        kind: 'prose',
        text: {
          essential:
            'The compatibilist reply to the subterfuge charge is direct: name a kind of freedom that is neither determined nor random, and we will discuss whether it is worth wanting. Until then, the thing we can have is the thing worth having.',
          detailed:
            'Dennett puts the point as a challenge rather than a concession: what people actually care about — not being coerced, being able to act on their own judgement, being able to change in response to reasons — is available and can be more or less present. A freedom that would require being uncaused is not available to anything, so mourning its absence is mourning an impossibility.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'Is the compatibilist offering the concept we had, or a better replacement for it?',
        whyItMatters: {
          essential:
            'These are different projects with different success conditions. The first can be wrong about what people mean; the second cannot, but has to justify the swap.',
          detailed:
            'Revisionists accept the distinction openly: they argue the folk concept is confused, that a repaired one can do the work responsibility needs, and that adopting it is a reform rather than a discovery. Whether that is honest philosophy or a concession of defeat is itself disputed.',
        },
        whatWouldSettleIt: {
          essential:
            'Partly empirical — what the ordinary concept actually involves is studied and the findings are mixed — and partly normative, which no study settles.',
        },
        references: [referenceId('sep-compatibilism'), referenceId('dennett-elbow-room')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Many people believe the question was settled in a laboratory in the 1980s. It is worth seeing exactly what those experiments found.',
        },
      },
    ],
    furtherReading: [referenceId('dennett-elbow-room')],
  },

  {
    id: topicId('what-the-brain-experiments-show'),
    slug: 'what-the-brain-experiments-show',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 122,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What the experiments actually show',
    subtitle: 'A famous result, and the gap between it and what it is said to prove.',
    summary: {
      essential:
        'Libet found brain activity beginning before people reported an urge to move. This is widely reported as showing free will is an illusion. It does not show that, and the reasons are worth going through carefully.',
      detailed:
        'The topic is included precisely because the overclaim is so common. Taking it apart is an exercise in the difference between a result and an interpretation.',
      technical:
        'The inference from readiness-potential onset to the causal antecedence of an unconscious decision requires assumptions about the RP’s significance, about the reliability of W-judgements, and about the generalisability of unmotivated self-paced movement to deliberated choice — each of which has been challenged.',
    },
    glossaryTerms: [glossaryTermId('readiness-potential')],
    related: [topicId('compatibilism'), topicId('the-basic-argument')],
    blocks: [
      {
        id: 'result',
        kind: 'prose',
        text: {
          essential:
            'The setup: flex your wrist whenever you feel like it, and note the position of a fast-moving clock hand at the moment you first became aware of the urge. Meanwhile scalp electrodes record brain activity.',
          detailed:
            'The finding is that a slow negative build-up — the readiness potential — begins before the reported moment of awareness. That is the result. Everything contested is downstream of it.',
        },
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Libet and colleagues reported that the onset of the readiness potential preceded the reported time of conscious intention to move.',
          detailed:
            'The paper reports the readiness potential beginning several hundred milliseconds before the reported awareness, which itself preceded the movement. Libet’s own interpretation was more cautious than most later reports of it: he proposed that conscious will might retain a veto over an initiated action.',
        },
        evidence: 'established',
        references: [referenceId('libet-1983-readiness-potential')],
      },
      {
        id: 'readings',
        kind: 'visualization',
        visualizationId: visualizationId('readiness-potential-interpretations'),
      },
      {
        id: 'gap1',
        kind: 'prose',
        text: {
          essential:
            'First problem: the task. Participants are asked to move at no particular time, for no reason, with nothing hanging on it. That is not a decision in any sense anyone was worried about.',
          detailed:
            'Nobody ever thought that an arbitrary twitch was the seat of free will. The choices at issue — whether to leave a job, whether to tell the truth, whether to forgive someone — involve reasons, time, and revision. A paradigm deliberately stripped of all three tells us about the stripped case.',
        },
      },
      {
        id: 'gap2',
        kind: 'prose',
        text: {
          essential:
            'Second problem: the measurement. Reporting when you first became aware of something, by reading a moving clock, is itself a demanding task with its own errors and delays.',
          detailed:
            'The reported time is not a direct readout of when awareness occurred. It is the output of a second process — attending to an urge, attending to a clock, and binding the two — and there is good reason to think that process introduces its own distortions.',
        },
      },
      {
        id: 'gap3',
        kind: 'claim',
        statement: {
          essential:
            'An alternative model proposes that the readiness potential reflects ongoing fluctuating activity crossing a threshold, rather than a decision being formed.',
          detailed:
            'Schurger and colleagues argue that when spontaneous neural activity drifts towards a threshold and movement occurs when it is crossed, averaging trials backwards from the movement will produce an apparent slow ramp whether or not any decision was accumulating. On this account the readiness potential is partly an artefact of the analysis. The model is itself debated, which is the point: the interpretation of the finding is an open scientific question, not a settled one.',
        },
        evidence: 'active-research',
        references: [referenceId('schurger-2012-accumulator')],
      },
      {
        id: 'honest',
        kind: 'callout',
        tone: 'caution',
        title: 'What this topic is not claiming',
        text: {
          essential:
            'None of this shows that we do have free will. It shows that these experiments do not show that we do not.',
          detailed:
            'That distinction matters and it is easy to lose. Dismantling an overclaim leaves the underlying question exactly where it was — open. Someone who reads this section and concludes "so free will is fine after all" has made the same kind of error in the opposite direction.',
        },
        references: [referenceId('mele-effective-intentions')],
      },
      {
        id: 'general',
        kind: 'prose',
        text: {
          essential:
            'The general lesson is worth more than the specific one. An experiment measures something specific under specific conditions. The step from that to a claim about human agency is an argument, and it has to be made rather than assumed.',
          detailed:
            'This applies equally to results that would support free will, if any appeared. The discipline of asking what exactly was measured, on whom, under what conditions, and what follows, is the same discipline the Scientific Lens of this section applies to fossils and genomes.',
        },
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question: 'Could any neuroscientific result settle the free will question?',
        whyItMatters: {
          essential:
            'If the question is about whether the agent is the source of the act, and every result will describe processes in a brain, it is unclear what a result would have to look like to answer it either way.',
          detailed:
            'A compatibilist expects free actions to be produced by brain processes; finding them is not a refutation. An incompatibilist wants to know whether the process was determined, which the measurement does not report. This is a case where the disagreement is about what would count as evidence, which is usually a sign that the dispute is not empirical.',
        },
        whatWouldSettleIt: {
          essential:
            'Agreement on what free will requires would be needed first. Without it, no experiment has a target.',
        },
        references: [referenceId('mele-effective-intentions'), referenceId('sep-freewill')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'There is one more argument, and it is the hardest of all, because it does not depend on physics, neuroscience, or determinism.',
        },
      },
    ],
    furtherReading: [referenceId('mele-effective-intentions')],
  },

  {
    id: topicId('the-basic-argument'),
    slug: 'the-basic-argument',
    sectionId: HUMAN,
    lens: 'philosophical',
    order: 123,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The Basic Argument',
    subtitle: 'To be responsible for what you do, you would have to have made yourself.',
    summary: {
      essential:
        'Galen Strawson argues that ultimate responsibility would require self-creation, that self-creation would require an earlier self doing the creating, and that the regress has no first step.',
      detailed:
        'The argument is short, and it is aimed at ultimate responsibility rather than at every notion of responsibility. Where exactly it bites is the thing to get right.',
      technical:
        'The argument is presented as valid on a reading of "ultimate responsibility" requiring responsibility for the mental nature from which action flows, and its force is directed at whether that notion is coherent rather than at whether we satisfy it.',
    },
    glossaryTerms: [glossaryTermId('basic-argument'), glossaryTermId('hard-incompatibilism')],
    related: [topicId('authoring-a-belief'), topicId('responsibility-without-self-creation')],
    blocks: [
      {
        id: 'setup',
        kind: 'prose',
        text: {
          essential:
            'This one needs no physics. It applies whether determinism is true, false, or undecided. It applies to any possible being in any possible world.',
          detailed:
            'That universality is what makes it the hardest argument in the movement — and, as the previous topic noted, also the thing its critics seize on.',
        },
      },
      {
        id: 'regress',
        kind: 'visualization',
        visualizationId: visualizationId('basic-argument-regress'),
      },
      {
        id: 'attribution',
        kind: 'claim',
        statement: {
          essential:
            'Galen Strawson argues that ultimate moral responsibility is impossible, because it would require being responsible for one’s own mental nature, which would require an impossible act of self-creation.',
          detailed:
            'The steps: you act as you do because of the way you are; to be ultimately responsible for what you do, you must be responsible for the way you are; to be responsible for the way you are, you must have chosen to be that way; but any such choice was made by a self you already were, with preferences you had not chosen. The regress is infinite and has no terminus.',
        },
        evidence: 'established',
        references: [referenceId('strawson-g-1994-impossibility')],
      },
      {
        id: 'why-hard',
        kind: 'prose',
        text: {
          essential:
            'What makes it hard is that it does not need any controversial premise about causation. It needs only that acts come from the person acting, which is the one thing everybody agrees on.',
          detailed:
            'The libertarian cannot escape by adding indeterminism, because an undetermined choice is still made by whatever self is doing the choosing. The compatibilist cannot escape by pointing to reasons-responsiveness, because the responsiveness is itself part of the nature in question.',
        },
      },
      {
        id: 'objection',
        kind: 'prose',
        text: {
          essential:
            'The main objection is that "ultimate responsibility" is a technical notion that nobody outside the argument ever wanted.',
          detailed:
            'On this reply, when we hold someone responsible we are not claiming they created themselves from nothing. We are claiming they acted knowingly, from their own values, with the capacity to do otherwise in the ordinary sense, and without compulsion. Those conditions are satisfiable and the regress never touches them.',
        },
      },
      {
        id: 'counter',
        kind: 'prose',
        text: {
          essential:
            'Strawson’s reply is that the ordinary notion does carry the deeper commitment, and that this becomes visible in the cases where blame is fiercest.',
          detailed:
            'When someone is held to deserve suffering for what they did — not to need restraining, not to need changing, but to deserve it — the claim seems to be about them rather than about their circumstances. And that claim is the one the regress attacks. The compatibilist may be describing something real while calling it by a name that carries more than it can pay for.',
        },
      },
      {
        id: 'scope',
        kind: 'callout',
        tone: 'note',
        title: 'What survives even if the argument works',
        text: {
          essential:
            'It targets ultimate desert. It does not touch whether an action was harmful, whether someone should be stopped, whether a person can change, or whether effort makes a difference.',
          detailed:
            'It is worth being precise, because the argument is often read as showing that nothing matters. Everything in ordinary life that depends on people’s actions having consequences is untouched. What is threatened is a specific backward-looking claim about what a person has earned by being who they are.',
        },
        references: [referenceId('strawson-g-1994-impossibility')],
      },
      {
        id: 'state',
        kind: 'claim',
        statement: {
          essential: 'The free will question is not settled, and is not close to settled.',
          detailed:
            'Every position surveyed in this movement has serious contemporary defenders and serious unanswered objections. Surveys of professional philosophers find compatibilism the most common view without anything approaching consensus, and the arguments have not converged over several decades of concentrated work. Anyone presenting one side as established is reporting a preference rather than a result.',
        },
        evidence: 'open-question',
        references: [referenceId('sep-freewill'), referenceId('sep-compatibilism')],
      },
      {
        id: 'deeper',
        kind: 'open-question',
        question:
          'If nobody made themselves, what should we do with the practices built on the assumption that they did?',
        whyItMatters: {
          essential:
            'This is the question the rest of the lens is organised around. Blame, punishment, pride, gratitude, self-improvement and forgiveness all have some relation to the idea that a person is the author of themselves.',
          detailed:
            'Three broad answers are on offer: the practices are fine because they never needed that assumption; they need substantial revision but can survive; they should be replaced by something forward-looking. The morality, punishment and responsibility movements take each of these seriously in turn, and the lens does not choose between them.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing that could be looked up. This is a normative question about what to do, and it will be answered by argument and by decision rather than by discovery.',
        },
        references: [
          referenceId('strawson-g-1994-impossibility'),
          referenceId('strawson-pf-1962-freedom-resentment'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Set the question of who is responsible aside for a moment. There is a prior question that has been assumed all the way through: what makes anything right or wrong in the first place?',
        },
      },
    ],
    furtherReading: [referenceId('strawson-g-1994-impossibility')],
  },
];
