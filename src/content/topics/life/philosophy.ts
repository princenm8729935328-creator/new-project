/**
 * Origin & Evolution of Life — the questions science does not close.
 *
 * The rule this group is written under: philosophy may not stand in for
 * evidence, and an open question may not be quietly answered. Each topic
 * separates the part that is a scientific question with a partial answer from
 * the part that is a question about meaning, which science does not address —
 * and says which is which, rather than letting the second borrow authority
 * from the first.
 *
 * Several of these topics end without a conclusion. That is the correct
 * outcome, and stating it plainly is more useful to a reader than a satisfying
 * ending that the evidence does not support.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const LIFE = sectionId('life');
const REVIEWED = '2026-09-10';

export const LIFE_PHILOSOPHY_TOPICS: readonly Topic[] = [
  {
    id: topicId('why-did-life-begin'),
    slug: 'why-did-life-begin',
    sectionId: LIFE,
    order: 81,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why did life begin?',
    subtitle:
      'Two different questions hide inside this one, and only one of them has a scientific answer.',
    summary: {
      essential:
        'Asked as “what physical process produced the first living system”, this is a hard scientific question with real progress and no settled answer. Asked as “for what purpose did life arise”, it is not a scientific question at all.',
      detailed:
        'Conflating the two is the most common error in this area. The chemistry is genuinely being worked on. The purpose question presupposes an intention, and no evidence for one exists.',
      technical:
        'Thermodynamic framings — that dissipative structures form spontaneously in driven systems — describe why organised chemistry is not improbable given a free-energy gradient. They do not identify a mechanism for the specific transition to heredity, and they should not be presented as if they did.',
    },
    glossaryTerms: [glossaryTermId('abiogenesis'), glossaryTermId('prebiotic-chemistry')],
    related: [
      topicId('how-chemistry-could-become-biology'),
      topicId('why-did-life-persist'),
      topicId('why-is-there-life-instead-of-nothing'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The word “why” does two jobs in English and they are easy to confuse. Ask why it rains and you want a mechanism: moist air rises, cools, water condenses. Ask why someone lied to you and you want a reason — an intention held by a mind. Both are legitimate uses of the word, and applying the second to the origin of life smuggles in an assumption that has not been established.',
          detailed:
            'The mechanistic version of the question is the one this section has been answering, imperfectly, for fourteen topics: what sequence of chemical events on a young planet produced a system that could copy itself and vary. We have parts of it. We do not have the whole. That is an honest statement of the state of a difficult field.',
        },
      },
      {
        id: 'viz-why',
        kind: 'visualization',
        visualizationId: visualizationId('two-kinds-of-why'),
      },
      {
        id: 'thermodynamic',
        kind: 'prose',
        text: {
          essential:
            'There is a physical answer that goes some of the way, and it is worth stating carefully because it is often overstated. Where energy flows steadily through matter — sunlight onto a planet, hot fluid meeting cold seawater — organised structures form spontaneously. Convection cells, hurricanes and flames all do this. They are not exceptions to the second law of thermodynamics; they exist because they dissipate energy gradients faster than disorder alone would.',
          detailed:
            'Life is a structure of that kind, sustained by a flow. Early Earth had abundant gradients: sunlight, geothermal heat, chemical disequilibria between rock and water. In that setting the appearance of self-organising chemistry is not surprising. What this account does not supply is the step from self-organising chemistry to heredity — a system that copies information about its own structure — and that step is the one nobody has demonstrated.',
        },
      },
      {
        id: 'claim-inevitable',
        kind: 'claim',
        statement: {
          essential:
            'Whether life arises readily wherever conditions permit, or required a sequence of rare accidents, is not currently known.',
          detailed:
            'The evidence base is a single example. Life on Earth appeared early — within a few hundred million years of the planet becoming habitable — which is sometimes read as evidence that it is easy. But we could only be observing from a planet where it happened, and an early origin is what we would find whether the process was common or a fluke, so the inference is weak.',
          technical:
            'Attempts to formalise this run into the anthropic selection effect directly. Bayesian analyses of the early-origin argument find that it provides only modest evidence for a high abiogenesis rate given a single observation, and the conclusion is sensitive to the prior. A second independent origin — on Mars, in an icy moon, or a shadow biosphere on Earth — would change the situation completely.',
        },
        evidence: 'open-question',
        references: [
          referenceId('cleland-chyba-2002-life'),
          referenceId('joyce-szostak-2018-protocells'),
        ],
      },
      {
        id: 'purpose',
        kind: 'callout',
        tone: 'caution',
        title: 'What science is not saying here',
        text: {
          essential:
            'Nothing in the scientific account addresses whether life has a purpose. Science has not found that life is purposeless; it has found no evidence of purpose, which is a different statement, and it is not equipped to look for one.',
          detailed:
            'People reach different conclusions about meaning from the same evidence, and those conclusions come from elsewhere — from philosophy, from religion, from temperament. The claim being made here is narrow and worth stating precisely: the chemistry does not require a purpose to explain it, and the chemistry is what science can speak to.',
        },
      },
    ],
    furtherReading: [referenceId('schrodinger-1944')],
  },

  {
    id: topicId('why-did-life-persist'),
    slug: 'why-did-life-persist',
    sectionId: LIFE,
    order: 82,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why did life persist?',
    subtitle:
      'Four billion years without a break, through impacts, freezings and mass extinctions.',
    summary: {
      essential:
        'Once life existed and could reproduce and vary, persistence had a mechanism: whatever survived left descendants, and the population was continuously restocked with variants suited to the conditions that had just changed.',
      detailed:
        'It also helped enormously that life is small, fast and everywhere. Catastrophes that eliminate large organisms barely touch microbes in sediment, in rock and in the deep ocean.',
      technical:
        'Persistence required only that some lineage survived every event. The record shows repeated near-total turnover at the level of species with unbroken continuity at the level of the biosphere — a distinction that dissolves the apparent improbability of a four-billion-year run.',
    },
    glossaryTerms: [glossaryTermId('natural-selection'), glossaryTermId('mass-extinction')],
    related: [
      topicId('why-did-life-begin'),
      topicId('how-life-recovers-after-mass-extinction'),
      topicId('the-biosphere'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Four billion years is a long time to go without a break. Earth has been struck by asteroids large enough to boil the top of the ocean, frozen from pole to equator more than once, and swept by extinctions that removed most species on the planet. Life came through all of it. The question is what made that possible, and the answer has two parts.',
          detailed:
            'The first is that reproduction with variation is self-correcting. Any event that kills most organisms leaves the survivors in an emptied world, and they reproduce into it. The population does not have to be tough; it only has to contain something that happened to be tough enough, and a diverse population generally does.',
        },
      },
      {
        id: 'viz-persistence',
        kind: 'visualization',
        visualizationId: visualizationId('persistence-through-crises'),
      },
      {
        id: 'refuges',
        kind: 'prose',
        text: {
          essential:
            'The second part is where life keeps most of itself. We picture the biosphere as forests and reefs because that is what we can see, but a large share of living cells are in ocean sediment, in soil, and kilometres down in rock — places almost nothing reaches.',
          detailed:
            'That geography changes the arithmetic of catastrophe. An asteroid impact darkens the sky and collapses food chains that depend on sunlight. It does very little to a bacterium living on hydrogen two kilometres underground, which has never used sunlight and does not notice. Even the Snowball Earth episodes, which covered the planet in ice, left volcanic hot spots, sub-ice oceans and hydrothermal systems running.',
        },
      },
      {
        id: 'claim-continuity',
        kind: 'claim',
        statement: {
          essential:
            'Life on Earth has been continuous since it began. Every living thing is descended from organisms alive at every point in the past four billion years.',
          detailed:
            'This follows from the genetic evidence: all known life shares a common ancestry, a single genetic code and a common core of molecular machinery. If life had been extinguished and restarted, we would expect to find lineages with unrelated biochemistry, and we do not.',
          technical:
            'The argument constrains total sterilisation but not a partial one, and it cannot exclude earlier origins that were wiped out before LUCA. It also cannot exclude an undiscovered shadow biosphere with different biochemistry, since essentially all microbiological detection methods assume the biochemistry we know.',
        },
        evidence: 'inference',
        references: [referenceId('weiss-2016-luca'), referenceId('woese-1990-three-domains')],
      },
      {
        id: 'not-protected',
        kind: 'callout',
        tone: 'misconception',
        title: 'Survival is not evidence of protection',
        text: {
          essential:
            'That life has always come through is sometimes read as suggesting something looks after it. The reasoning does not hold: we could only be here to observe a history in which life persisted. Every planet where it did not is not being written about by anybody.',
          detailed:
            'This is a selection effect, and it is unavoidable in a sample of one. It does not prove that Earth’s survival was luck — but it does mean that survival on its own is not evidence of anything, because it is the only outcome an observer could find.',
        },
      },
    ],
    furtherReading: [referenceId('raup-sepkoski-1982-extinctions')],
  },

  {
    id: topicId('does-evolution-have-a-purpose'),
    slug: 'does-evolution-have-a-purpose',
    sectionId: LIFE,
    order: 83,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Does evolution have a purpose?',
    subtitle:
      'It produces things that look designed for something. That is not the same as being aimed at something.',
    summary: {
      essential:
        'Evolution has no known goal, no target and no foresight. It is a process in which whatever reproduces more becomes more common. Organisms end up appearing designed because the process retains what works — after the fact, not in advance.',
      detailed:
        'The confusing part is that individual features genuinely do have functions. An eye is for seeing. That kind of purpose is real and explicable. What does not follow is that the process producing eyes is heading anywhere.',
      technical:
        'Biology distinguishes teleonomy — apparent goal-directedness arising from a program shaped by past selection — from teleology, which posits a future goal as a cause. Functional language in biology is licensed by the first and not the second, and the distinction is what keeps adaptive explanation from being circular.',
    },
    glossaryTerms: [glossaryTermId('natural-selection'), glossaryTermId('adaptation')],
    related: [
      topicId('evolution-has-no-conscious-goal'),
      topicId('is-there-a-direction-to-evolution'),
      topicId('does-nature-choose'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'It is perfectly correct to say that a heart is for pumping blood. Biologists say things like that constantly and they are not being sloppy. The heart has that function because hearts that pumped blood well left more descendants than hearts that did not — the purpose is real, and it is entirely explained by what happened in the past.',
          detailed:
            'Notice what that explanation does not require. It does not require anything to have wanted a heart, or to have foreseen that one would be useful. The function is a summary of a history of differential survival. Ernst Mayr coined the term teleonomy for this: apparent purposiveness produced by a mechanism with no purposes.',
        },
      },
      {
        id: 'viz-teleonomy',
        kind: 'visualization',
        visualizationId: visualizationId('teleonomy-vs-teleology'),
      },
      {
        id: 'claim-no-foresight',
        kind: 'claim',
        statement: {
          essential:
            'Natural selection cannot anticipate. It acts only on variation that already exists, according to conditions that already obtain.',
          detailed:
            'The evidence is in the failures. Populations regularly go extinct when conditions change in ways their existing variation cannot cover — which would not happen if the process could prepare. Adaptations that would be advantageous but require passing through a disadvantageous intermediate generally do not appear.',
          technical:
            'This is the source of the constraints described elsewhere in this section: path dependence, the persistence of poor solutions such as the vertebrate blind spot, and the prevalence of jury-rigged structures built from whatever was available. A process with foresight would leave a very different record.',
        },
        evidence: 'established',
        references: [referenceId('mayr-1982-growth-biology'), referenceId('darwin-1859')],
      },
      {
        id: 'the-hard-part',
        kind: 'prose',
        text: {
          essential:
            'What the science establishes is narrower than what is often claimed on its behalf. It shows that the mechanism does not need a purpose to work, and that the observed pattern of adaptations, dead ends and awkward compromises is what a purposeless mechanism produces. It does not demonstrate that the universe contains no purposes.',
          detailed:
            'That further claim is metaphysical, and people who accept all of the biology in this section still divide over it. Some read the absence of any need for purpose as evidence there is none. Others hold that the mechanism itself is the means by which some larger purpose operates. Nothing in the evidence settles between them, and pretending otherwise would be overstepping what the evidence supports.',
        },
      },
      {
        id: 'careful-language',
        kind: 'callout',
        tone: 'caution',
        title: 'Watch the shorthand',
        text: {
          essential:
            'Phrases like “evolution developed wings so birds could fly” or “the species adapted in order to survive” are convenient and technically wrong. Wings were not developed for anything; ancestors with slightly better structures left more offspring, repeatedly, for a very long time.',
          detailed:
            'The shorthand is hard to avoid entirely and mostly harmless among people who know what it stands for. It becomes a problem when it is the only version someone has heard, because it produces a picture of evolution as an agent making decisions — which is exactly the picture the evidence contradicts.',
        },
      },
    ],
    furtherReading: [referenceId('mayr-1982-growth-biology')],
  },

  {
    id: topicId('is-there-a-direction-to-evolution'),
    slug: 'is-there-a-direction-to-evolution',
    sectionId: LIFE,
    order: 84,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Is there a direction to evolution?',
    subtitle: 'Some trends are real. None of them is a destination.',
    summary: {
      essential:
        'Certain patterns do recur: maximum body size has increased, maximum complexity has increased, and some ecological roles get refilled after extinctions. But these are trends in a distribution’s edges, not evidence of a direction being followed.',
      detailed:
        'The strongest reason to doubt a built-in direction is that the same trends reverse whenever conditions favour reversal, and that lineages moving in opposite directions coexist throughout the record.',
      technical:
        'Distinguishing a driven trend, in which most lineages move the same way, from a passive one, in which a boundary plus diffusion extends the tail, requires examining the whole distribution rather than the maximum. Most claimed large-scale trends in complexity are consistent with passive diffusion from a lower bound.',
    },
    glossaryTerms: [glossaryTermId('convergent-evolution'), glossaryTermId('natural-selection')],
    related: [
      topicId('evolution-is-not-a-ladder'),
      topicId('convergent-evolution'),
      topicId('evolutionary-contingency-how-much-is-chance'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Imagine a drunk walking home along a pavement with a wall on one side and a gutter on the other. He steps at random. Over time, the average distance from the wall increases — not because he is trying to get away from it, but because the wall is a boundary and random steps can only go one way when he is against it.',
          detailed:
            'Life started against the wall. The first organisms were as simple as anything that can be alive, so any change in complexity could only add. The maximum complexity in the biosphere has increased for four billion years, and none of that requires a tendency to become complex — it requires only variation and a lower limit. Stephen Jay Gould used exactly this argument, and it remains the strongest reason for caution about apparent directions.',
        },
      },
      {
        id: 'viz-drift',
        kind: 'visualization',
        visualizationId: visualizationId('passive-vs-driven-trend'),
      },
      {
        id: 'claim-passive',
        kind: 'claim',
        statement: {
          essential:
            'Most large-scale trends in complexity are consistent with passive diffusion away from a lower bound rather than with a directional push.',
          detailed:
            'The test is to look at the whole distribution rather than its record-holders. If evolution pushed towards complexity, the typical organism should be getting more complex. It is not: the mode of the distribution has stayed where it was, on bacteria, throughout the history of life.',
          technical:
            'Some subsidiary trends do appear genuinely driven within limited clades — increases in brain size relative to body size in several mammalian lineages, for example, and Cope’s rule for body size in some groups — but these are lineage-specific, frequently reversed, and do not aggregate into a biosphere-wide direction.',
        },
        evidence: 'inference',
        references: [
          referenceId('gould-1996-full-house'),
          referenceId('mcshea-brandon-2010-ztfel'),
        ],
      },
      {
        id: 'convergence-caveat',
        kind: 'prose',
        text: {
          essential:
            'There is a real argument on the other side, and it deserves stating properly. Certain solutions appear over and over in unrelated lineages: eyes have evolved dozens of times, flight at least four, complex societies many times. Simon Conway Morris argues this shows the space of workable solutions is narrow, so evolution finds the same answers repeatedly and outcomes are more predictable than they look.',
          detailed:
            'The evidence for convergence is strong. The disagreement is over what it implies. Convergence shows that physics and chemistry constrain the options — camera eyes work, so things that need to see well arrive at them. It does not show that anything had to need to see well, or that a lineage capable of building telescopes was likely. The constrained-options claim and the predictable-outcomes claim are different, and only the first is well supported.',
        },
      },
      {
        id: 'open-direction',
        kind: 'open-question',
        question: 'If the history of life were re-run, how much would come out the same?',
        whyItMatters: {
          essential:
            'This is the sharpest version of the direction question, and the two answers imply very different pictures of life in the universe: one where something like us is a likely outcome, and one where we are a particular accident.',
          detailed:
            'Gould argued that replaying the tape would produce a radically different biosphere, because so much depends on accidents — which lineages happened to survive the Cambrian, which happened to be alive when the asteroid struck. Conway Morris argued that convergence would drag the replay back towards similar solutions. Both are reading the same fossil record.',
        },
        whatWouldSettleIt: {
          essential:
            'Independent biospheres. Finding life that arose separately, and seeing whether it converged on similar solutions, would answer this in a way that argument over one history cannot.',
          detailed:
            'Short of that, experimental evolution provides limited replays at small scale: parallel populations from identical ancestors under identical conditions. These show a mixture — much parallel adaptation at the level of genes and pathways, alongside rare, contingent innovations that appeared in only one line out of twelve. That mixture is suggestive but does not scale straightforwardly to four billion years.',
        },
        references: [
          referenceId('gould-1989-wonderful-life'),
          referenceId('conway-morris-2003-convergence'),
          referenceId('blount-2008-citrate'),
        ],
      },
    ],
    furtherReading: [referenceId('conway-morris-2003-convergence')],
  },

  {
    id: topicId('why-is-there-life-instead-of-nothing'),
    slug: 'why-is-there-life-instead-of-nothing',
    sectionId: LIFE,
    order: 85,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why is there life instead of nothing?',
    subtitle: 'Part of this has a physical answer. Part of it does not, and probably cannot.',
    summary: {
      essential:
        'Why matter organises itself into living systems has a partial physical answer involving energy gradients and self-organisation. Why there is anything at all for that to happen to is a different question, and not one biology can address.',
      detailed:
        'Splitting the question is the useful move. The first part is being actively researched. The second is where physics hands over to metaphysics, and being clear about the handover is more honest than blurring it.',
      technical:
        'The physical part reduces to: given a persistent free-energy gradient and a chemistry capable of autocatalysis, are self-maintaining organised structures expected? The answer appears to be yes for dissipative structures generally, and remains undemonstrated for the specific case of a system with open-ended heredity.',
    },
    glossaryTerms: [glossaryTermId('abiogenesis'), glossaryTermId('biosphere')],
    related: [
      topicId('why-did-life-begin'),
      topicId('what-is-life'),
      topicId('does-life-have-an-objective-meaning'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The most striking thing about a living organism, physically, is that it stays organised. Everything else runs down. A cup of tea cools, a building crumbles, a sandcastle flattens. A bacterium maintains a sharp chemical difference between its inside and its outside for as long as it lives, and then, within hours of dying, becomes indistinguishable from its surroundings.',
          detailed:
            'Schrödinger asked in 1944 how this was possible without violating thermodynamics, and gave essentially the right answer: an organism is not a closed system. It maintains its own order by increasing disorder elsewhere — taking in energy in a usable form and releasing it degraded. Order inside is paid for by disorder outside, and the books balance.',
        },
      },
      {
        id: 'viz-gradient',
        kind: 'visualization',
        visualizationId: visualizationId('order-from-flow'),
      },
      {
        id: 'claim-dissipative',
        kind: 'claim',
        statement: {
          essential:
            'Organised structures form spontaneously in systems with a steady flow of energy through them. This is ordinary physics, not an exception to it.',
          detailed:
            'Heat a shallow pan of oil from below and the flow organises into a regular pattern of hexagonal convection cells. Nobody arranged them. They form because they move heat upward more effectively than disordered motion does, and they persist for as long as the heating continues. Life is a far more elaborate example of the same principle.',
          technical:
            'The general framework covers a wide class of driven systems, from Bénard convection to autocatalytic chemistry. It explains why organisation is expected in the presence of gradients. It does not by itself explain heredity, and treating the two as the same result is the most common overstatement in this area.',
        },
        evidence: 'established',
        references: [referenceId('schrodinger-1944')],
      },
      {
        id: 'the-other-half',
        kind: 'prose',
        text: {
          essential:
            'That covers why organised matter exists given a universe with energy gradients. It does not touch why there is a universe with energy gradients — or why anything exists rather than nothing at all.',
          detailed:
            'That second question has been asked for a very long time and there is no scientific method for approaching it, because science works by finding out how things behave, and this asks why there are things at all. Physics can push the account back a long way — to the early universe, to the conditions that produced structure — but each answer describes something existing, so the question survives every answer.',
        },
      },
      {
        id: 'honest-stop',
        kind: 'callout',
        tone: 'note',
        title: 'Where this atlas stops',
        text: {
          essential:
            'This is a real boundary, not a temporary gap in knowledge to be filled by better instruments. It is worth saying so plainly rather than gesturing at a future answer.',
          detailed:
            'People take different views past this point, and the evidence in this section is compatible with several of them. What this atlas can do is be precise about which claims rest on evidence and which do not, and this one does not — in either direction.',
        },
      },
    ],
    furtherReading: [referenceId('schrodinger-1944')],
  },

  {
    id: topicId('why-does-nature-produce-so-much-diversity'),
    slug: 'why-does-nature-produce-so-much-diversity',
    sectionId: LIFE,
    order: 86,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why does nature produce so much diversity?',
    subtitle:
      'Four hundred thousand kinds of beetle. There is a reason, and it is not extravagance.',
    summary: {
      essential:
        'Diversity accumulates because populations that stop exchanging genes drift apart, because different ways of making a living are rewarded differently, and because each new kind of organism creates new opportunities for others.',
      detailed:
        'The last of these is the most important and the least obvious: life is its own environment. Every species is a resource, a habitat or a hazard for something else, so diversity generates more diversity.',
      technical:
        'Speciation rates depend on the frequency of reproductive isolation and on the availability of ecological opportunity. Diversity-dependent models, in which rates decline as niches fill, fit many clade histories; whether global diversity is bounded or has expanded without limit remains contested.',
    },
    glossaryTerms: [glossaryTermId('biodiversity'), glossaryTermId('ecological-niche')],
    related: [
      topicId('why-life-became-so-diverse'),
      topicId('ecological-niches'),
      topicId('why-diversity-can-be-more-important-than-complexity'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The biologist J. B. S. Haldane, asked what his study of creation had taught him about the Creator, is said to have replied that He appeared to have an inordinate fondness for beetles. There are around 400,000 described beetle species and probably many more undescribed. Every one of them is doing something slightly different from all the others, and that is not decoration — it is the reason there is room for so many.',
          detailed:
            'The basic engine is separation. Take one population, split it — a river changes course, a forest fragments, a few individuals reach an island — and the two halves stop exchanging genes. Mutations accumulate independently, selection pushes them in slightly different directions, and after enough time they can no longer interbreed. There are now two species where there was one, and each can be split again.',
        },
      },
      {
        id: 'viz-diversification',
        kind: 'visualization',
        visualizationId: visualizationId('diversity-radiation'),
      },
      {
        id: 'life-makes-niches',
        kind: 'prose',
        text: {
          essential:
            'The part that makes diversity accelerate is that organisms are themselves environments. Once there are trees, there is space for things that eat leaves, things that bore into wood, things that live in bark, things that eat the things that eat leaves, and fungi that live in partnership with roots. A single new kind of organism can open a dozen new ways of making a living.',
          detailed:
            'Flowering plants are the clearest case. Their radiation, beginning in the Cretaceous, was accompanied by an explosion of insects that pollinate them, feed on them and parasitise the insects that feed on them. A large fraction of all animal species on Earth are insects associated with flowering plants. Diversity is not just accumulating; it is compounding.',
        },
      },
      {
        id: 'claim-unknown-total',
        kind: 'claim',
        statement: {
          essential:
            'We do not know how many species exist. Estimates for eukaryotes cluster around 8–10 million, of which roughly 1.5 million have been described.',
          detailed:
            'The uncertainty is not a failure of effort. Most species are small, most live in places that are hard to sample — soil, canopy, deep sea — and describing one properly takes a specialist. Estimates are extrapolations from sampled groups, and different extrapolation methods disagree substantially.',
          technical:
            'For prokaryotes the uncertainty is far larger still, spanning orders of magnitude, and it is compounded by genuine disagreement about what a bacterial species is when lineages exchange genes horizontally. Any global species count should be read as an order-of-magnitude statement.',
        },
        evidence: 'active-research',
        references: [referenceId('mora-2011-species')],
      },
      {
        id: 'no-tendency',
        kind: 'callout',
        tone: 'misconception',
        title: 'Nature is not aiming for variety',
        text: {
          essential:
            'Diversity accumulates as a by-product of populations separating and opportunities opening. Nothing is generating variety on purpose, and diversity is not conserved: it has crashed repeatedly and taken millions of years to rebuild each time.',
          detailed:
            'Reading diversity as a goal also gets the causality backwards in a practical way. Diversity is not a reservoir that refills automatically, which is why the present loss of species is a serious matter rather than a fluctuation that will correct itself on any timescale that concerns us.',
        },
      },
    ],
    furtherReading: [referenceId('mora-2011-species')],
  },

  {
    id: topicId('why-did-intelligence-evolve'),
    slug: 'why-did-intelligence-evolve',
    sectionId: LIFE,
    order: 87,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why did intelligence evolve?',
    subtitle:
      'Not because thinking is valuable in general, but because in certain situations it paid.',
    summary: {
      essential:
        'Nervous systems evolved to control movement. Elaborate ones evolved where the problems an animal faced changed faster than natural selection could track — unpredictable food, complex social groups, novel environments.',
      detailed:
        'Intelligence is one solution to variability, and an expensive one. Most lineages solved the same problems more cheaply, which is why most animals are not particularly clever and are doing perfectly well.',
      technical:
        'The main hypotheses — ecological, social and cultural intelligence — are not mutually exclusive and have different comparative support in different clades. Correlations between relative brain size and social group size are robust in primates and weaker or absent in some other groups.',
    },
    glossaryTerms: [glossaryTermId('adaptation'), glossaryTermId('natural-selection')],
    related: [
      topicId('why-intelligence-became-evolutionarily-useful'),
      topicId('why-large-brains-are-expensive'),
      topicId('why-intelligence-is-not-evolutions-inevitable-destination'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Nervous systems did not appear so that animals could think. They appeared so that animals could move usefully — sense something, decide, contract a muscle. A jellyfish has a nerve net and no brain, and it does what it needs to. Everything that came later is an elaboration on the problem of controlling a body in a world that keeps changing.',
          detailed:
            'The sea squirt is the standing joke here, and it makes the point sharply. As a larva it swims, and it has a simple brain to steer with. When it finds a rock, it attaches, and then it reabsorbs most of its nervous system — it no longer needs one, because it is no longer going anywhere. Brains are for animals with decisions to make.',
        },
      },
      {
        id: 'viz-intelligence-drivers',
        kind: 'visualization',
        visualizationId: visualizationId('intelligence-drivers'),
      },
      {
        id: 'when-it-pays',
        kind: 'prose',
        text: {
          essential:
            'The conditions that favour flexible cognition all have the same shape: the right answer keeps changing. If your food is always in the same place, an inherited rule works and costs almost nothing. If your food is fruit that ripens on different trees at different times across a large forest, remembering and predicting pays.',
          detailed:
            'Social life produces the same pressure from a different direction, and it is a harsher one, because the problem is other individuals who are also adapting. Knowing who is dominant, who reciprocates, who to avoid and who owes you something requires tracking a network that changes daily. The social intelligence hypothesis proposes that this arms race — among conspecifics, each generation raising the difficulty for the next — is what drove the largest brains.',
        },
      },
      {
        id: 'claim-social',
        kind: 'claim',
        statement: {
          essential:
            'In primates, relative brain size correlates with typical social group size — a central piece of evidence for the social intelligence hypothesis.',
          detailed:
            'Dunbar’s comparative work found that species living in larger, more stable groups tend to have larger neocortices relative to body size. The proposed explanation is that maintaining relationships in a large group is cognitively demanding in a way that finding food is not.',
          technical:
            'The correlation is robust within primates but does not generalise cleanly. Some large-brained birds and cetaceans do not fit, alternative measures of sociality give different results, and analyses using different phylogenetic corrections have reached different conclusions. Current accounts treat social, ecological and developmental factors as jointly contributing rather than competing.',
        },
        evidence: 'active-research',
        references: [
          referenceId('dunbar-shultz-2007-social-brain'),
          referenceId('roth-dicke-2005-brains'),
        ],
      },
      {
        id: 'many-times',
        kind: 'prose',
        text: {
          essential:
            'Something worth calling intelligence has evolved several times, in animals only distantly related to each other. Crows make and use tools and plan for future needs. Octopuses solve novel problems with a nervous system organised nothing like a vertebrate’s, most of it distributed through the arms. Dolphins, elephants and parrots each arrived independently.',
          detailed:
            'That repetition tells us cognition is a solution evolution can reach from many starting points when conditions reward it. It does not tell us the conditions are common. Every one of these lineages is unusual within its own group — most birds are not crows, most molluscs are clams — and each remains a rare exception rather than a trend.',
        },
      },
    ],
    furtherReading: [referenceId('roth-dicke-2005-brains')],
  },

  {
    id: topicId('why-are-we-conscious'),
    slug: 'why-are-we-conscious',
    sectionId: LIFE,
    order: 88,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why are we conscious?',
    subtitle: 'The one question in this section where the honest answer is that nobody knows.',
    summary: {
      essential:
        'We can explain a great deal about how brains process information, direct attention and report on their own states. What is not explained is why any of that is accompanied by subjective experience — why it feels like something to be you.',
      detailed:
        'This is not a gap that more neuroscience has obviously been closing. It may be a genuinely different kind of problem, and there is no consensus on whether it will yield to the usual methods.',
      technical:
        'Chalmers’ distinction between the easy problems — discrimination, integration, reportability, all tractable functional questions — and the hard problem of phenomenal experience frames the field. Leading theories (global workspace, integrated information, higher-order and predictive-processing accounts) make different and only partly testable predictions; adversarial collaborations have begun to discriminate among them but have not resolved the question.',
    },
    glossaryTerms: [glossaryTermId('adaptation')],
    related: [
      topicId('why-did-intelligence-evolve'),
      topicId('does-life-have-an-objective-meaning'),
      topicId('what-is-life'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Look at something red. A physicist can tell you the wavelength; a neuroscientist can trace the signal from your retina through the visual cortex and show you which cells fire. Every step of that account is a description of information being processed. None of it explains why there is also an experience of redness — why the processing is accompanied by something it is like to undergo it.',
          detailed:
            'David Chalmers named this the hard problem, distinguishing it from the easy problems, which are only easy by comparison: how the brain discriminates stimuli, integrates information, focuses attention, controls behaviour and reports on its own states. Those are difficult scientific questions with visible paths to answers. The hard problem is not obviously that kind of question, because a complete functional account seems compatible with there being no experience at all.',
        },
      },
      {
        id: 'viz-consciousness',
        kind: 'visualization',
        visualizationId: visualizationId('consciousness-problem'),
      },
      {
        id: 'what-we-do-know',
        kind: 'prose',
        text: {
          essential:
            'A great deal is genuinely known. Specific brain damage produces specific and often bizarre changes in experience — people who cannot recognise faces, people who deny that a paralysed limb is theirs, people who can act on visual information they report not seeing. Anaesthesia switches consciousness off and back on reliably. Certain patterns of large-scale cortical integration track whether someone is conscious well enough to be used clinically.',
          detailed:
            'All of that is progress on the correlates and the machinery. The gap is that identifying which brain processes accompany experience does not explain why those processes are accompanied by experience while others are not. Correlation here is real and useful and still leaves the central question untouched.',
        },
      },
      {
        id: 'claim-open',
        kind: 'claim',
        statement: {
          essential:
            'There is no accepted scientific explanation of why physical processes give rise to subjective experience.',
          detailed:
            'Serious proposals exist and are being actively tested. Global workspace theory holds that consciousness is information broadcast widely across the brain. Integrated information theory proposes a mathematical measure of how much a system’s parts inform each other. Higher-order theories emphasise representations of one’s own mental states. Recent adversarial collaborations, in which competing groups agree in advance on tests that could falsify their theories, have constrained some predictions without settling the field.',
          technical:
            'A live methodological worry is whether the hard problem is empirically tractable at all, since the theories differ in what they predict about systems whose experience cannot be reported. Positions range from the view that the problem will dissolve once the easy problems are solved, through the view that it requires new physics, to the view that it is beyond human cognitive reach.',
        },
        evidence: 'open-question',
        references: [
          referenceId('chalmers-1995-hard-problem'),
          referenceId('seth-bayne-2022-consciousness'),
        ],
      },
      {
        id: 'evolutionary-angle',
        kind: 'prose',
        text: {
          essential:
            'From an evolutionary standpoint there is a further puzzle. If experience makes a difference to behaviour, selection could act on it. If it makes no difference — if a creature that processed identically without experiencing anything would behave the same — then it is hard to see how selection could have produced it.',
          detailed:
            'Most researchers suspect the dilemma is malformed and that experience is not separable from the processing in the way the question assumes. But saying that is a bet on how the problem will turn out, not a solution to it. This is the point in the section where the correct thing to report is that we do not know, and that it is not clear what finding out would even look like.',
        },
      },
    ],
    furtherReading: [referenceId('seth-bayne-2022-consciousness')],
  },

  {
    id: topicId('does-life-have-an-objective-meaning'),
    slug: 'does-life-have-an-objective-meaning',
    sectionId: LIFE,
    order: 89,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Does life have an objective meaning?',
    subtitle:
      'Science can say what is the case. Whether that carries meaning is a question of a different kind.',
    summary: {
      essential:
        'Nothing in biology, chemistry or physics identifies a purpose that life is for. That is a statement about what the evidence contains, not a demonstration that no such purpose exists.',
      detailed:
        'The distinction matters because both overstatements are common: that science has proven existence meaningless, and that scientific findings supply a meaning. Neither follows from the evidence.',
      technical:
        'The underlying issue is the is–ought gap: descriptive claims about what exists do not entail evaluative claims about what matters. This is a structural feature of the two kinds of claim, not a temporary limitation of current science.',
    },
    glossaryTerms: [glossaryTermId('biosphere')],
    related: [
      topicId('does-evolution-have-a-purpose'),
      topicId('why-is-there-life-instead-of-nothing'),
      topicId('from-life-to-a-species-capable-of-asking-questions'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'This section has described a long chain of physical events: a planet assembled from debris, chemistry running in water, a system that copied itself, four billion years of variation and selection, and eventually organisms complicated enough to wonder about it. At no point in that account did a purpose appear, and at no point was one needed to explain what happened next.',
          detailed:
            'It is tempting to conclude that this settles the matter. It does not, and the reason is worth being precise about. Science works by describing what is there. A purpose is not the kind of thing that would show up in a chemical analysis or a fossil record — so its absence from those records is not evidence against it, any more than the absence of colour in a mass spectrum is evidence that things are colourless.',
        },
      },
      {
        id: 'viz-is-ought',
        kind: 'visualization',
        visualizationId: visualizationId('is-and-ought'),
      },
      {
        id: 'the-gap',
        kind: 'prose',
        text: {
          essential:
            'David Hume noticed the underlying structure nearly three centuries ago. You can pile up facts about how the world is indefinitely, and no statement about what matters follows from them by logic alone. Something evaluative has to be supplied from somewhere else before a fact becomes a reason.',
          detailed:
            'This cuts equally in both directions, which is what makes it useful here. “Evolution has no goal, therefore nothing matters” is a non-sequitur — a fact about a biological mechanism, plus an unstated and unsupported premise that meaning requires a cosmic goal. “Life is astonishing, therefore it must have been intended” is the same move in the other direction. Both take a genuine observation and attach a conclusion the observation does not carry.',
        },
      },
      {
        id: 'claim-limits',
        kind: 'claim',
        statement: {
          essential:
            'Empirical investigation can establish what exists and how it behaves. It cannot, by itself, establish what has value.',
          detailed:
            'This is not a criticism of science and not a gap awaiting better instruments. It is a consequence of what the two kinds of claim are. Recognising it is what allows a scientific account to be complete on its own terms without pretending to answer questions it was never addressed to.',
        },
        evidence: 'inference',
        references: [referenceId('cleland-chyba-2002-life')],
      },
      {
        id: 'what-remains',
        kind: 'callout',
        tone: 'note',
        title: 'What the evidence does leave standing',
        text: {
          essential:
            'Some things in this section are simply true regardless of how anyone answers the meaning question. Every atom in your body was made in a star. You are related to every organism alive, and the relationship is documented in your cells. The capacity to ask this question at all is roughly a hundred thousand years old on a planet four and a half billion years old.',
          detailed:
            'People take very different views on whether facts like these amount to meaning, and this atlas does not have a position on that. What it can do is get the facts right and be explicit about where the evidence stops — which is here.',
        },
      },
    ],
    furtherReading: [referenceId('gould-1996-full-house')],
  },
];
