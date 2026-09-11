/**
 * Recaps for Movements I and II of the Philosophical Lens.
 *
 * A comprehension check in philosophy has to be written differently from one in
 * science. There is no settled answer to check understanding of, so a question
 * asking "who was right about the self?" would be a question with no correct
 * option — or worse, a question that quietly invents one.
 *
 * So every question here tests something that *is* determinate: what a
 * philosopher actually argued, what an objection actually says, what a
 * distinction actually separates, or which of several claims does not follow.
 * The distractors are the misreadings people really hold, which is what makes
 * getting one wrong informative rather than merely annoying.
 */
import type { RecapsByTopic } from '../schema/recap';

export const PHILOSOPHY_REALITY_RECAPS: RecapsByTopic = {
  'does-the-world-look-the-way-it-is': {
    summary: {
      essential:
        'Seeing feels like direct contact with the world, but it is the end of a long chain of transformations, and every check on that chain uses the chain. The question is not whether your senses sometimes err — it is what the belief that they are broadly accurate rests on.',
      detailed:
        'The difficulty is structural rather than evidential: there is no second instrument to calibrate against, because any confirming observation is itself drawn from inside the system being tested. Practical success is the strongest reply, and it establishes that the representation is useful rather than that it resembles.',
    },
    questions: [
      {
        id: 'claim',
        prompt: 'What is the topic actually claiming?',
        options: [
          {
            id: 'a',
            text: 'That your senses are probably deceiving you and the room is not there',
          },
          {
            id: 'b',
            text: 'That the belief that experience matches the world is hard to justify from inside experience',
            correct: true,
          },
          { id: 'c', text: 'That perception is unreliable because people sometimes hallucinate' },
          { id: 'd', text: 'That everyone constructs their own private reality' },
        ],
        explanation:
          'The claim is about justification, not about behaviour or about hallucination. Nobody in this tradition stops trusting their eyes to cross a road; they ask what supports the trust, and find that every check available runs through the thing being checked.',
      },
      {
        id: 'success',
        prompt: 'Why does the success of prediction not fully answer the worry?',
        options: [
          {
            id: 'a',
            text: 'Because predictions sometimes fail',
          },
          {
            id: 'b',
            text: 'Because a consistently distorted representation can still support successful prediction',
            correct: true,
          },
          { id: 'c', text: 'Because science has not tested every case' },
          { id: 'd', text: 'Because prediction is a practical matter, not a theoretical one' },
        ],
        explanation:
          'A map with a consistent distortion supports flawless navigation. Success shows the representation tracks something usefully; it does not by itself show that it resembles what it represents. That gap between usefulness and accuracy is the whole point.',
      },
    ],
  },

  'platos-cave': {
    summary: {
      essential:
        'The allegory separates into an image and a claim. The image shows what it would be like to be in a predicament where everything checkable is downstream of something uncheckable. The claim — that we are in such a predicament, and that the reality behind it is a realm of Forms — is a further step the image does not establish.',
      detailed:
        'Keeping the two apart matters because the theory of Forms is almost universally rejected while the structural worry is not. Discarding the image with the theory throws away a live question along with a dead answer.',
    },
    questions: [
      {
        id: 'structure',
        prompt: 'What is the strongest objection to the cave as an argument?',
        options: [
          {
            id: 'a',
            text: 'It shows what such a predicament would be like without giving evidence that we are in one',
            correct: true,
          },
          { id: 'b', text: 'Prisoners could simply turn around and check' },
          { id: 'c', text: 'Shadows are not real, so the analogy fails' },
          { id: 'd', text: 'Modern science has shown that appearances are accurate' },
        ],
        explanation:
          'Vividness is not support. Describing in detail what being asleep would be like does not raise the probability that you are asleep. Plato argues for Forms elsewhere; the cave illustrates rather than demonstrates.',
      },
      {
        id: 'error',
        prompt: 'In the allegory, what is the prisoners’ mistake?',
        options: [
          { id: 'a', text: 'Believing what someone deliberately told them to believe' },
          { id: 'b', text: 'Seeing shadows, which are not really there' },
          {
            id: 'c',
            text: 'Assuming without examination that what they can see is everything there is',
            correct: true,
          },
          { id: 'd', text: 'Failing to reason carefully about what they observed' },
        ],
        explanation:
          'Nobody deceives them, the shadows are real shadows, and they report accurately on everything available. The error is the unexamined assumption that availability is exhaustiveness — which is what makes the allegory uncomfortable rather than merely a story about fools.',
      },
    ],
  },

  'descartes-and-certainty': {
    summary: {
      essential:
        'Descartes doubts in stages — the senses, then waking versus dreaming, then reasoning itself — to find what doubt cannot reach. Something survives: the doubting. How much that survivor amounts to is disputed, and his reconstruction from it is not accepted.',
      detailed:
        'The dream argument does the heavy lifting by demanding a mark that distinguishes waking from dreaming from inside, and finding none. The standard objection to the conclusion is Lichtenberg’s: what is secured may be that thinking is occurring, not that there is a persisting "I" who does it.',
    },
    questions: [
      {
        id: 'dream',
        prompt: 'What does the dream argument demand?',
        options: [
          {
            id: 'a',
            text: 'A feature available from inside that could not be present in a dream',
            correct: true,
          },
          { id: 'b', text: 'Proof that you have never had a vivid dream' },
          { id: 'c', text: 'Evidence that dreams are more common than people think' },
          { id: 'd', text: 'A demonstration that the external world exists' },
        ],
        explanation:
          'It asks for a criterion. Vividness fails because dreams are vivid; coherence fails because dreams cohere while you are in them; pinching fails because pinches can be dreamt. Finding no such mark is what extends the doubt to ordinary conditions and not just unusual ones.',
      },
      {
        id: 'objection',
        prompt: 'What does the Lichtenberg objection say the cogito establishes?',
        options: [
          { id: 'a', text: 'That Descartes did not exist' },
          {
            id: 'b',
            text: 'That thinking is occurring, without establishing a persisting thinker',
            correct: true,
          },
          { id: 'c', text: 'That the mind is a distinct substance from the body' },
          { id: 'd', text: 'That doubt is impossible' },
        ],
        explanation:
          'The analogy is "it is raining": grammar needs a subject, and the weather does not supply one. If the same holds here, what doubt cannot reach is a process rather than a person — which leaves the persisting self to be established separately.',
      },
      {
        id: 'rebuild',
        prompt: 'What happened to Descartes’s reconstruction of knowledge from the cogito?',
        options: [
          { id: 'a', text: 'It is generally accepted and taught as valid' },
          {
            id: 'b',
            text: 'It is widely held to be circular, an objection raised in his own lifetime',
            correct: true,
          },
          { id: 'c', text: 'It was lost and only the method survives' },
          { id: 'd', text: 'It was confirmed by later developments in physics' },
        ],
        explanation:
          'The argument uses clear and distinct perception to establish God and then God to validate clear and distinct perception. Critics raised this in the Objections printed with the Meditations. The method endures; the rebuilding does not.',
      },
    ],
  },

  'humes-problem': {
    summary: {
      essential:
        'Every expectation about the future assumes the future will resemble the past. That assumption cannot be established by experience without using itself, and no reply to the problem is generally accepted. Hume’s own view was that the inference comes from habit rather than reason.',
      detailed:
        'The problem is completely general: it applies to the expectation that a floor will hold exactly as much as to any scientific law. That generality is why it cannot be used to single out science as unreliable.',
    },
    questions: [
      {
        id: 'circle',
        prompt: 'Why can the uniformity of nature not be used to justify induction?',
        options: [
          { id: 'a', text: 'Because nature is not in fact uniform' },
          {
            id: 'b',
            text: 'Because the only support for it is that it has held so far, which is the inference being justified',
            correct: true,
          },
          { id: 'c', text: 'Because it is a religious rather than a scientific assumption' },
          { id: 'd', text: 'Because quantum mechanics shows the future is random' },
        ],
        explanation:
          'That circle is the sharpest form of the problem. The principle that would close the gap is itself supported only by an inference from observed cases to unobserved ones — which is the step it was brought in to license.',
      },
      {
        id: 'scope',
        prompt: 'Why is the problem of induction not an argument against science in particular?',
        options: [
          {
            id: 'a',
            text: 'Because it applies equally to every belief about the future, including that food will nourish you',
            correct: true,
          },
          { id: 'b', text: 'Because science uses deduction rather than induction' },
          { id: 'c', text: 'Because Popper solved it' },
          { id: 'd', text: 'Because repeated experiments eliminate the problem' },
        ],
        explanation:
          'A difficulty that applies to absolutely every expectation cannot be used to single out one class of them. Hume himself did not draw an anti-scientific conclusion; he treated the inference as natural, unavoidable and unjustified.',
      },
    ],
  },

  'kants-turn': {
    summary: {
      essential:
        'Kant proposes that space, time and certain concepts are contributions the mind makes to experience rather than features discovered in it. That would explain why some claims feel necessary, at the cost of putting things as they are in themselves permanently out of reach.',
      detailed:
        'The standing objection, raised in his lifetime, is that we cannot coherently say things in themselves exist or cause our experience, since existence and causation are among the concepts restricted to appearances. How to read the distinction is an active area of scholarship rather than a settled matter.',
    },
    questions: [
      {
        id: 'reversal',
        prompt: 'What is Kant’s reversal?',
        options: [
          { id: 'a', text: 'Asking how the mind conforms to objects instead of the reverse' },
          {
            id: 'b',
            text: 'Asking what objects must be like to be experienced by minds like ours, instead of how minds conform to objects',
            correct: true,
          },
          { id: 'c', text: 'Denying that anything exists outside the mind' },
          { id: 'd', text: 'Arguing that experience is the only source of knowledge' },
        ],
        explanation:
          'He compared it to Copernicus. Rather than treating the mind as passively fitting itself to a ready-made world, he asks what conditions any experience of ours must satisfy — which would explain the necessity that experience alone cannot supply.',
      },
      {
        id: 'not-relativism',
        prompt: 'Why is transcendental idealism not the claim that everyone has their own reality?',
        options: [
          {
            id: 'a',
            text: 'Because the forms Kant describes are shared by all rational beings, which is what makes objectivity possible',
            correct: true,
          },
          { id: 'b', text: 'Because Kant thought only philosophers construct reality' },
          { id: 'c', text: 'Because he denied that the mind contributes anything' },
          { id: 'd', text: 'Because he held that reality is entirely mind-independent' },
        ],
        explanation:
          'The mind-dependence is at the level of the species, not the individual. Shared forms are exactly what allow two people to disagree about a common object, correct each other, and be wrong — none of which a private-reality view could accommodate.',
      },
    ],
  },

  'what-makes-you-the-same-person': {
    summary: {
      essential:
        'You are confident the child in your earliest memory was you, though almost nothing about that child has stayed the same. The question asks what the sameness is a claim about, and no answer is generally accepted — each leading criterion has a case it handles badly.',
      detailed:
        'A great deal rests on it. Promises bind the person who made them, punishment falls on the person who acted, and anticipation only makes sense if the person who wakes is you. If nothing answers the question, all of that needs a different foundation.',
    },
    questions: [
      {
        id: 'which-question',
        prompt: 'What question is "personal identity over time" asking?',
        options: [
          { id: 'a', text: 'What makes you distinctive compared with other people' },
          {
            id: 'b',
            text: 'What makes a person at one time numerically one and the same as a person at another',
            correct: true,
          },
          { id: 'c', text: 'Which of your traits are most important to you' },
          { id: 'd', text: 'How other people recognise you' },
        ],
        explanation:
          'Numerical identity, not similarity or distinctiveness. Two identical twins are exactly similar and are two; you and your childhood self are wildly dissimilar and are supposed to be one. That is what makes the question hard.',
      },
      {
        id: 'matter',
        prompt: 'Why does "same matter" fail as a criterion?',
        options: [
          { id: 'a', text: 'Because matter is not really solid' },
          {
            id: 'b',
            text: 'Because almost none of an adult’s material was present in the child, so nobody would survive a decade',
            correct: true,
          },
          { id: 'c', text: 'Because the brain is what matters, not the body' },
          { id: 'd', text: 'Because matter cannot be individuated' },
        ],
        explanation:
          'The turnover is close to complete for most tissues. If sameness of matter were required for personal identity, survival across years would be impossible — and since we take ourselves to survive, the criterion cannot be right.',
      },
    ],
  },

  'the-thinking-thing': {
    summary: {
      essential:
        'Descartes concludes he is essentially a thinking thing and that mind is a distinct substance from body. The step relies on the principle that what can be clearly conceived apart can exist apart, which Arnauld attacked in the Objections printed with the book.',
      detailed:
        'A second problem, pressed by Elisabeth of Bohemia in correspondence, is how two entirely different kinds of thing could affect each other. Substance dualism is a minority position now; what survives is the narrower puzzle about experience that the consciousness movement takes up.',
    },
    questions: [
      {
        id: 'principle',
        prompt: 'Which principle carries the weight of Descartes’s dualist conclusion?',
        options: [
          { id: 'a', text: 'That the senses can never be trusted' },
          {
            id: 'b',
            text: 'That what can be clearly and distinctly conceived apart can exist apart',
            correct: true,
          },
          { id: 'c', text: 'That God would not deceive us' },
          { id: 'd', text: 'That thought is more certain than matter' },
        ],
        explanation:
          'Stated on its own, the principle looks much less obvious than the conclusion it supports — which is exactly why isolating it is useful. Arnauld’s counterexample is the right-angled triangle conceivable without the Pythagorean relation.',
      },
      {
        id: 'arnauld',
        prompt: 'What does Arnauld’s objection show?',
        options: [
          {
            id: 'a',
            text: 'That failing to see a connection is not evidence that there is none',
            correct: true,
          },
          { id: 'b', text: 'That Descartes did not understand geometry' },
          { id: 'c', text: 'That the mind is physical' },
          { id: 'd', text: 'That conceivability is always unreliable' },
        ],
        explanation:
          'Conceivability tracks the limits of your understanding as much as the structure of the thing understood. The same objection recurs in the consciousness movement, where conceivability arguments about zombies are doing similar work.',
      },
    ],
  },

  'locke-and-memory': {
    summary: {
      essential:
        'Locke proposes that you are the same person as whoever your consciousness reaches back to — a break with criteria based on body or soul. Reid’s objection shows the criterion makes identity non-transitive, forcing the repair to overlapping chains of connection.',
      detailed:
        'Locke treats "person" explicitly as a forensic term, one whose function is to attribute actions and their merit. That framing is why the responsibility movement later in the lens has to return to him.',
    },
    questions: [
      {
        id: 'reid',
        prompt: 'What exactly is wrong with the memory criterion, on Reid’s objection?',
        options: [
          { id: 'a', text: 'Memory is unreliable, so the criterion gives wrong answers' },
          {
            id: 'b',
            text: 'It makes identity non-transitive: A is B, B is C, but A is not C',
            correct: true,
          },
          { id: 'c', text: 'It ignores the body, which is what really matters' },
          { id: 'd', text: 'Nobody can remember their own birth' },
        ],
        explanation:
          'Transitivity is a formal feature of identity, so a criterion that violates it cannot be a criterion of identity. Unreliability of memory is a separate worry; this one is structural, which is why it forced a change to the theory rather than a caveat.',
      },
      {
        id: 'forensic',
        prompt: 'Why does Locke call "person" a forensic term?',
        options: [
          { id: 'a', text: 'Because he was a lawyer' },
          {
            id: 'b',
            text: 'Because its function is to attribute actions and their merit, which is what he thinks the criterion must serve',
            correct: true,
          },
          { id: 'c', text: 'Because personhood is decided by courts' },
          { id: 'd', text: 'Because identity is a legal fiction with no metaphysical content' },
        ],
        explanation:
          'On his account, punishing someone for an act they cannot reach from inside is punishing a different person in the same body. That is a strong claim with practical consequences, and it shows the theory is aimed at accountability rather than at metaphysics for its own sake.',
      },
    ],
  },

  'humes-bundle': {
    summary: {
      essential:
        'Hume reports that looking inward finds only perceptions and never the thing having them, and concludes the self is a bundle. Kant’s reply is that a subject of experience would not appear as another item in experience, so the search does not discriminate between the hypotheses.',
      detailed:
        'Hume published an appendix saying he could not make his own account consistent — an unusual and creditable admission that is worth knowing before treating the bundle theory as his settled view.',
    },
    questions: [
      {
        id: 'report',
        prompt: 'What does Hume report finding when he looks inward for the self?',
        options: [
          { id: 'a', text: 'Nothing whatsoever' },
          { id: 'b', text: 'A faint but definite sense of a continuing subject' },
          {
            id: 'c',
            text: 'Always some perception, and never anything besides the perception',
            correct: true,
          },
          { id: 'd', text: 'A stage on which the perceptions appear' },
        ],
        explanation:
          'The distinction matters. He does not find an empty mind; he finds contents and no owner. He even uses the theatre comparison and immediately warns that it misleads, precisely because there is no stage.',
      },
      {
        id: 'kant',
        prompt: 'What is the force of Kant’s reply?',
        options: [
          {
            id: 'a',
            text: 'Failing to find the searcher is what you would expect either way, so the search settles nothing',
            correct: true,
          },
          { id: 'b', text: 'Hume was not introspecting carefully enough' },
          { id: 'c', text: 'The self is located in the body rather than in experience' },
          { id: 'd', text: 'Introspection is always unreliable' },
        ],
        explanation:
          'The eye does not appear in its own visual field. If a subject of experience is not itself an item of experience, then its absence from the inventory is no evidence against it — which is what makes the introspective argument inconclusive rather than wrong.',
      },
    ],
  },

  'parfits-teletransporter': {
    summary: {
      essential:
        'Parfit varies one feature at a time until the branching case makes identity indeterminate, then argues that identity is not what matters in survival — what we care about is continuity, which can hold to two people at once.',
      detailed:
        'The main objection is that a concept which breaks under duplication may simply not have been built for duplication. Animalism avoids the puzzle entirely, at the cost of consequences of its own.',
    },
    questions: [
      {
        id: 'fission',
        prompt: 'Why is the branching case the one that does the work?',
        options: [
          { id: 'a', text: 'Because two copies are more surprising than one' },
          {
            id: 'b',
            text: 'Because both have an equal claim and identity is one-one, so the criterion gives an answer identity cannot take',
            correct: true,
          },
          { id: 'c', text: 'Because the original definitely dies in that case' },
          { id: 'd', text: 'Because it shows psychological continuity is impossible' },
        ],
        explanation:
          'Psychological continuity is a one-many relation; identity is one-one. When they come apart, either continuity does not suffice for identity, or identity is not what the psychological facts settle. Parfit takes the second option.',
      },
      {
        id: 'conclusion',
        prompt: 'What is Parfit’s conclusion?',
        options: [
          { id: 'a', text: 'That you do not exist' },
          { id: 'b', text: 'That the copy on Mars is definitely you' },
          {
            id: 'c',
            text: 'That identity is not what matters in survival — continuity is',
            correct: true,
          },
          { id: 'd', text: 'That teletransportation would be murder' },
        ],
        explanation:
          'His proposal is to stop asking which one is you and ask what you actually cared about in ordinary survival: memories, projects, relationships continuing. Those can hold to two people, so the question of which is "really" you may have no answer to find.',
      },
    ],
  },

  'anatta-non-self': {
    summary: {
      essential:
        'Early Buddhist texts apply one test to each of the five aggregates — is it permanent, is it under your control — and find no permanent, independent, controlling self among the parts. The conclusion is explicitly not that nothing exists.',
      detailed:
        'The position is presented as a middle path between eternalism and annihilationism, and Nāgārjuna warns by name against reading emptiness as "nothing exists". The resemblance to Hume is real, but the aims differ: Hume’s is an epistemological result, the Buddhist argument is practical.',
    },
    questions: [
      {
        id: 'not-nihilism',
        prompt: 'What does anattā deny?',
        options: [
          { id: 'a', text: 'That anything exists at all' },
          { id: 'b', text: 'That persons act or bear consequences' },
          {
            id: 'c',
            text: 'That a permanent, independent, controlling self is found among the parts of a person',
            correct: true,
          },
          { id: 'd', text: 'That experience occurs' },
        ],
        explanation:
          'Annihilationism — the view that nothing exists — is rejected explicitly in the early texts and treated as an error on a par with belief in a permanent self. The target is a specific candidate, formulated against a background that already had a strong theory of the self.',
      },
      {
        id: 'test',
        prompt: 'What is the test applied to each aggregate?',
        options: [
          {
            id: 'a',
            text: 'Whether it is permanent, and whether it can be commanded to be otherwise',
            correct: true,
          },
          { id: 'b', text: 'Whether it can be observed by introspection' },
          { id: 'c', text: 'Whether it is physical or mental' },
          { id: 'd', text: 'Whether it survives death' },
        ],
        explanation:
          'The argument turns on impermanence and control rather than on existence. Nothing in it says the aggregates are unreal — it says none of them is the kind of thing a permanent controlling self would have to be.',
      },
      {
        id: 'continuity',
        prompt:
          'If there is no persisting self, how do the texts connect the person who acts to the person who bears the consequences?',
        options: [
          { id: 'a', text: 'They do not — the connection is denied' },
          {
            id: 'b',
            text: 'Causally: one state conditions the next, without a thing travelling along the chain',
            correct: true,
          },
          { id: 'c', text: 'By an immaterial soul that carries responsibility' },
          { id: 'd', text: 'By memory alone, as in Locke' },
        ],
        explanation:
          'The standard image is a flame passed from lamp to lamp. Whether a causal connection of that kind can carry moral responsibility is a real question — and it is the same question the responsibility movement reaches from the Western side.',
      },
    ],
  },
};
