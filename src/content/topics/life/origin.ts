/**
 * Origin & Evolution of Life — from chemistry to the last common ancestor.
 *
 * This is the part of the section where the temptation to overclaim is
 * strongest, so the structure is built to resist it. The group opens by asking
 * what life even is and establishing that the question has no agreed answer.
 * It then presents the competing origin hypotheses as competitors, each with
 * what it explains and what it does not, rather than narrating one of them as
 * history. And it closes by separating two things that are constantly
 * conflated: the last universal common ancestor, which is a real inference from
 * comparative genomics, and the first life, which is not the same thing and
 * about which we know far less.
 *
 * Nothing here says how life began. That is the honest state of the field.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const LIFE = sectionId('life');
const REVIEWED = '2026-09-10';

export const LIFE_ORIGIN_TOPICS: readonly Topic[] = [
  {
    id: topicId('what-is-life'),
    slug: 'what-is-life',
    sectionId: LIFE,
    order: 1,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What is life?',
    subtitle: 'Everyone can recognise it. Nobody can define it in a way that survives scrutiny.',
    summary: {
      essential:
        'You can tell a cat from a rock without effort. Writing down a rule that separates them — one that includes everything alive and excludes everything that is not — turns out to be extraordinarily difficult. Every proposed definition either lets something in that should not be there or leaves something out that should.',
      detailed:
        'This is not a word game. The definition matters for deciding whether a virus is alive, for deciding what would count as finding life on Mars, and for deciding when, in the transition from chemistry to biology, life began. If the boundary is fuzzy, then the question "when did life start" may not have a sharp answer.',
      technical:
        'Common criteria — metabolism, homeostasis, growth, response to stimuli, reproduction, and evolution by natural selection — each fail on counterexamples. NASA’s working definition, "a self-sustaining chemical system capable of Darwinian evolution", is deliberately operational rather than essential, and Cleland and Chyba have argued that a satisfactory definition awaits a general theory of life rather than preceding it.',
    },
    glossaryTerms: [glossaryTermId('abiogenesis')],
    related: [
      topicId('where-does-non-life-end-and-life-begin'),
      topicId('what-does-life-actually-need'),
      topicId('how-chemistry-could-become-biology'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Try to write the rule. "Living things grow" — so do crystals and fires. "Living things use energy" — so does a hurricane. "Living things reproduce" — so do crystals, in a sense, and a mule cannot. "Living things maintain themselves against decay" — a candle flame maintains a stable structure by consuming fuel. Each criterion that seems obvious admits something that is clearly not alive, or excludes something that clearly is.',
          detailed:
            'The most-used working definition, adopted by NASA for astrobiology, is that life is a self-sustaining chemical system capable of Darwinian evolution. It is a good definition for the job it does: it tells a mission designer what to look for. But it excludes an individual sterile organism, which cannot evolve, and it says nothing about whether a computer program that replicates and mutates should count.',
        },
      },
      {
        id: 'viz-life-criteria',
        kind: 'visualization',
        visualizationId: visualizationId('what-is-life-criteria'),
      },
      {
        id: 'claim-no-definition',
        kind: 'claim',
        statement: {
          essential:
            'There is no scientific consensus on a definition of life. This is a genuine open problem in biology and philosophy of science, not a matter of biologists not having got round to it.',
          detailed:
            'Carol Cleland and Christopher Chyba made the sharpest version of the argument: definitions of this kind work when we already have a theory that explains what the thing is. We could not usefully define "water" before atomic theory — we could only list its properties. We are, they argue, in the same position with life. We have one example, and no general theory that would tell us which of its features are essential and which are accidents of history.',
          technical:
            'Over a hundred published definitions have been catalogued. The disagreement is not superficial: proposals divide into those centred on thermodynamics and self-maintenance, those centred on information and replication, and those centred on evolutionary capacity — and these can pick out different boundaries in the same borderline cases.',
        },
        evidence: 'open-question',
        references: [
          referenceId('cleland-chyba-2002-life'),
          referenceId('benner-2010-defining-life'),
        ],
      },
      {
        id: 'schrodinger',
        kind: 'callout',
        tone: 'history',
        title: 'Schrödinger’s answer, and why it still matters',
        text: {
          essential:
            'In 1944 the physicist Erwin Schrödinger asked what life looks like from the point of view of physics, and gave an answer that has aged well: a living thing is a system that maintains its internal order by exporting disorder to its surroundings.',
          detailed:
            'This does not violate the second law of thermodynamics, and it is worth being clear why, because the point is regularly misused. An organism is not a closed system. It decreases its own entropy while increasing the entropy of its environment by more. A refrigerator does the same thing. The insight is that being alive is expensive: staying ordered requires a continuous supply of energy, and stopping means decaying.',
        },
        references: [referenceId('schrodinger-1944')],
      },
      {
        id: 'shared-features',
        kind: 'prose',
        text: {
          essential:
            'What we can do, instead of defining life, is describe what all known life shares. Every organism on Earth is built from cells enclosed by a membrane. Every one stores information in nucleic acids and reads that information using almost exactly the same genetic code. Every one makes proteins with ribosomes. Every one runs its energy metabolism by pumping protons across a membrane.',
          detailed:
            'That last set of shared features is a much stronger statement than it first appears. It could have been otherwise — there is nothing chemically necessary about this particular genetic code, and alternative codes work fine in the laboratory. The fact that everything from a bacterium to a whale uses the same one is not evidence about what life must be. It is evidence that all of it is related.',
        },
      },
    ],
    furtherReading: [referenceId('benner-2010-defining-life')],
  },

  {
    id: topicId('where-does-non-life-end-and-life-begin'),
    slug: 'where-does-non-life-end-and-life-begin',
    sectionId: LIFE,
    order: 2,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Where does non-life end and life begin?',
    subtitle: 'Probably nowhere in particular. The boundary may be a gradient, not a line.',
    summary: {
      essential:
        'If life has no sharp definition, then the transition from chemistry to biology probably had no sharp moment. There was likely a long period during which systems existed that were more organised than ordinary chemistry and less capable than a cell — and no instant at which one of them became alive.',
      detailed:
        'Viruses make the problem concrete. A virus has genes, evolves, and is exquisitely adapted to its host. It also cannot metabolise, cannot reproduce without hijacking a cell, and outside a host is an inert particle. Biologists genuinely disagree about whether viruses are alive, and the disagreement is not resolvable by finding out more facts about viruses.',
      technical:
        'Candidate intermediates include autocatalytic reaction networks, self-replicating ribozymes, and fatty-acid vesicles that grow and divide. Each satisfies some criteria for life and not others, which is what a genuine gradient looks like — and it means "when did life begin" may be a question about where we choose to place a threshold.',
    },
    glossaryTerms: [glossaryTermId('protocell'), glossaryTermId('abiogenesis')],
    related: [
      topicId('what-is-life'),
      topicId('protocells-and-membranes'),
      topicId('how-chemistry-could-become-biology'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'We are used to categories with sharp edges, because most of the objects we deal with fall clearly on one side or the other. But nature produces plenty of gradients, and asking exactly where one ends is often a question about our vocabulary rather than about the world. Where does a hill become a mountain? At what moment does a child become an adult? These have answers only by convention.',
          detailed:
            'The origin of life may be the same kind of question. Imagine a sequence: simple molecules, then molecules that catalyse their own formation, then networks of such molecules, then networks enclosed in a membrane, then enclosed networks that copy an information-carrying polymer, then ones that do so accurately enough to accumulate improvements. Somewhere along that sequence we would start calling it alive. There is no obvious step where nature does something categorically new.',
        },
      },
      {
        id: 'viz-gradient',
        kind: 'visualization',
        visualizationId: visualizationId('life-nonlife-gradient'),
      },
      {
        id: 'viruses',
        kind: 'prose',
        text: {
          essential:
            'Viruses sit exactly in the awkward zone. They carry genetic information, they mutate, and natural selection acts on them relentlessly — the reason flu vaccines are updated every year is that influenza is evolving. But a virus has no metabolism of its own. It builds nothing. Outside a cell it is a package of molecules doing nothing at all, and it can often be crystallised like a mineral.',
          detailed:
            'Some biologists resolve this by saying a virus is not alive but a viral infection is. Others point out that many bacteria are also obligate parasites, unable to reproduce outside a host, and nobody denies that bacteria are alive. The giant viruses discovered in the 2000s — some larger than small bacteria, carrying hundreds of genes including some involved in protein synthesis — made the boundary blurrier still.',
        },
      },
      {
        id: 'claim-gradient',
        kind: 'claim',
        statement: {
          essential:
            'The transition from non-living chemistry to life is best understood as a gradual process through intermediate systems, rather than a single event with a before and an after.',
          detailed:
            'This is a claim about how to frame the problem rather than a discovery, and it is worth flagging as such. It is the majority view among researchers in the field, supported by the fact that laboratory systems really do occupy intermediate positions: vesicles that grow and divide but carry no information, and replicating RNA molecules that carry information but have no compartment.',
          technical:
            'Formally, one can characterise the transition as the acquisition of several distinct capacities — compartmentalisation, energy harvesting, template replication, and heritable variation with selection — which need not have been acquired simultaneously or in a fixed order. The origin-of-life literature largely divides on which capacity came first, which presupposes exactly this decoupling.',
        },
        evidence: 'active-research',
        references: [
          referenceId('joyce-szostak-2018-protocells'),
          referenceId('benner-2010-defining-life'),
        ],
      },
      {
        id: 'note-consequence',
        kind: 'callout',
        tone: 'note',
        title: 'Why this changes the question',
        text: {
          essential:
            'If the boundary is a gradient, then "how did life originate" is not a question about a single event that either did or did not happen at a particular moment. It becomes a question about a sequence of chemical transitions, each of which can be studied separately in a laboratory.',
          detailed:
            'This reframing is why the field has become tractable. Nobody is trying to build a cell from scratch in one go. Researchers work on individual steps: how nucleotides form, how they link into chains, how vesicles grow and divide, how a template can be copied without enzymes. Each is a real chemical problem with real progress, and the open question is whether the steps can be chained together under conditions that could all have coexisted.',
        },
        references: [referenceId('szostak-2001-protocells')],
      },
    ],
    furtherReading: [referenceId('cleland-chyba-2002-life')],
  },

  {
    id: topicId('what-does-life-actually-need'),
    slug: 'what-does-life-actually-need',
    sectionId: LIFE,
    order: 3,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What does life actually need?',
    subtitle: 'Less than you would guess — but not nothing, and the list is instructive.',
    summary: {
      essential:
        'Every known organism needs four things: a source of energy, a source of carbon and other elements to build with, a liquid solvent — water, in every case we know — and conditions that do not destroy its molecules faster than it can repair them. Sunlight is not on the list. Oxygen is not on the list. A comfortable temperature is not on the list.',
      detailed:
        'Life on Earth occupies a far wider range of conditions than most people imagine: boiling water, rock kilometres underground, brine saltier than the Dead Sea, acid strong enough to dissolve metal. What all of these have in common is liquid water and a usable chemical energy gradient.',
      technical:
        'Documented limits include growth at 122 °C, at pH 0, at water activity down to about 0.6, and at pressures above 100 MPa. No known organism grows without liquid water at some point in its cycle. The lower energy bound is set by the free energy needed to synthesise ATP, roughly 20 kJ per mole under cellular conditions.',
    },
    glossaryTerms: [glossaryTermId('chemiosmosis'), glossaryTermId('atp')],
    related: [
      topicId('what-is-life'),
      topicId('how-cells-obtained-energy'),
      topicId('hydrothermal-vents-and-other-possible-origins'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The intuitive list of requirements — sunlight, air, moderate temperature — is really a list of what humans need. Widen the sample and it collapses. There are ecosystems kilometres beneath the seafloor that have not seen sunlight in millions of years, running entirely on chemical energy from rock. There are microbes growing at 122 degrees Celsius, well above the boiling point of water at sea level, kept liquid by pressure. There are organisms whose entire energy supply is the slow radioactive decay of surrounding rock splitting water molecules.',
          detailed:
            'Strip away the parochial requirements and four remain. Something to build bodies out of, which means carbon plus a handful of other elements. A liquid to do chemistry in, which on Earth is always water. A supply of energy in a form that can be captured — which means not just energy present, but a gradient, a difference between two states that can be exploited as it evens out. And a physical environment that does not tear the molecules apart faster than they can be repaired.',
        },
      },
      {
        id: 'viz-limits',
        kind: 'visualization',
        visualizationId: visualizationId('limits-of-life'),
      },
      {
        id: 'claim-water',
        kind: 'claim',
        statement: {
          essential:
            'Every known organism requires liquid water. It is the one requirement with no exceptions anywhere in the biosphere.',
          detailed:
            'Water is unusually good at the job for reasons that are chemical rather than mystical. It dissolves an enormous range of substances, so reactions can happen in it. It has a large heat capacity, so it buffers temperature swings. Its molecules are polar, which lets proteins fold into stable shapes with water-avoiding interiors — the folding that makes enzymes possible depends on it. And it is liquid over a wide temperature range at ordinary pressures.',
          technical:
            'Alternative solvents have been discussed seriously, notably liquid ammonia and, for hypothetical Titan-like biochemistry, liquid methane. Each has drawbacks: ammonia’s liquid range is at temperatures where reaction rates are very slow, and non-polar solvents cannot support the hydrophobic effect that drives protein folding and membrane self-assembly. These are arguments about plausibility, not proofs of impossibility.',
        },
        evidence: 'established',
        references: [referenceId('rothschild-mancinelli-2001-extremophiles')],
      },
      {
        id: 'gradients',
        kind: 'prose',
        text: {
          essential:
            'The energy requirement deserves emphasis because it is the one most often stated loosely. Life does not need energy in the abstract; it needs a gradient. A room at a uniform warm temperature contains a great deal of energy and no organism can extract any work from it. What life exploits is difference: hot next to cold, concentrated next to dilute, oxidised next to reduced.',
          detailed:
            'This is why deep-sea vents matter to origin-of-life research. Where hot, hydrogen-rich, alkaline fluid meets cold, mildly acidic ocean water, there is a steep and persistent chemical difference across a very short distance. Every cell alive today generates its energy by maintaining exactly this kind of difference — a proton gradient across a membrane — and then letting it discharge through a molecular turbine.',
        },
      },
      {
        id: 'quantities-limits',
        kind: 'quantity',
        quantities: [
          {
            id: 'temp-max',
            label: 'Highest temperature for confirmed growth',
            value: 122,
            unit: '°C',
            context:
              'Confirmed in culture under pressure; the record is revised upward occasionally. Methanopyrus kandleri, under pressure. Above roughly 150 °C, key biomolecules break down faster than any known repair.',
            references: [referenceId('rothschild-mancinelli-2001-extremophiles')],
          },
          {
            id: 'ph-range',
            label: 'pH range of known life',
            value: 12.5,
            unit: '',
            uncertainty: { kind: 'upper-limit' },
            context:
              'Documented extremes run from about pH 0 to pH 12.5, spanning twelve orders of magnitude in hydrogen ion concentration. pH 0 is roughly battery acid. The organisms living there keep their interiors near neutral and spend energy doing so.',
            references: [referenceId('rothschild-mancinelli-2001-extremophiles')],
          },
          {
            id: 'elements',
            label: 'Elements essential to all known life',
            value: 20,
            unit: '',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Six major domains of biochemistry with roughly twenty recognised categories in total; a few are debated at the margins. Carbon, hydrogen, nitrogen, oxygen, phosphorus and sulfur, plus trace metals in enzymes.',
            references: [referenceId('rothschild-mancinelli-2001-extremophiles')],
          },
        ],
      },
      {
        id: 'misconception-extremophile',
        kind: 'callout',
        tone: 'misconception',
        title: '“Extremophiles are tough organisms surviving hostile conditions”',
        text: {
          essential:
            'They are not enduring anything. An organism adapted to 100 °C is not hanging on; that is where it grows best, and it dies in conditions you would find pleasant. The word "extreme" describes our preferences, not theirs.',
          detailed:
            'This is worth correcting because it changes the astrobiological reasoning. If extremophiles were tough survivors, we would think of them as life clinging to the edges of habitability. Since they are simply well-adapted to different conditions, the sensible conclusion is that the range of environments where life can be at home is much wider than our intuitions suggest — which widens the search.',
        },
        references: [referenceId('rothschild-mancinelli-2001-extremophiles')],
      },
    ],
    furtherReading: [referenceId('rothschild-mancinelli-2001-extremophiles')],
  },

  {
    id: topicId('how-could-complex-molecules-form-on-early-earth'),
    slug: 'how-could-complex-molecules-form-on-early-earth',
    sectionId: LIFE,
    order: 4,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How could complex molecules form on early Earth?',
    subtitle:
      'The easy part is making the parts. The hard part is making the right ones, together.',
    summary: {
      essential:
        'Amino acids, sugars and the pieces of nucleotides all form spontaneously under conditions the early Earth plausibly had. This has been demonstrated repeatedly since 1953 and confirmed by finding the same molecules in meteorites. That part is not in doubt.',
      detailed:
        'What is hard is everything after that. Prebiotic reactions typically produce messy mixtures containing the useful molecule alongside dozens of useless ones. Chains do not form easily in water, which pulls them apart. And the biologically useful sugars and amino acids come in two mirror-image forms, of which life uses only one.',
      technical:
        'Key advances include Powner and Sutherland’s 2009 route to activated pyrimidine ribonucleotides, which bypasses the separate synthesis and joining of sugar and base, and the 2015 cyanosulfidic protometabolism producing precursors of nucleotides, amino acids and lipids from a common feedstock — hydrogen cyanide — under a single set of conditions.',
    },
    glossaryTerms: [glossaryTermId('prebiotic-chemistry')],
    related: [
      topicId('rna-world'),
      topicId('earth-before-life'),
      topicId('protocells-and-membranes'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Stanley Miller’s experiment in 1953 is famous because it made a hard question look tractable overnight. He sealed water, methane, ammonia and hydrogen in glassware, ran sparks through it for a week to simulate lightning, and found amino acids — the building blocks of proteins — in the resulting brown sludge. The lesson was that biological molecules do not need biology to make them.',
          detailed:
            'Two things have happened since. The bad news is that geochemists now think the early atmosphere was less reducing than Miller assumed — more carbon dioxide and nitrogen, less methane and ammonia — and in those mixtures the yields are much lower. The good news is that his archived vials, reanalysed decades later with modern instruments, contained far more compounds than he could detect, and that other settings, especially volcanic ones, restore the chemistry he needed.',
        },
      },
      {
        id: 'viz-prebiotic',
        kind: 'visualization',
        visualizationId: visualizationId('prebiotic-chemistry'),
      },
      {
        id: 'claim-monomers',
        kind: 'claim',
        statement: {
          essential:
            'The individual building blocks of life form readily by non-biological chemistry. This is established by laboratory synthesis and independently confirmed by their presence in meteorites that predate Earth’s biology.',
          detailed:
            'The meteorite evidence is the more decisive of the two, because it removes any worry about contamination or about experiments being tuned to succeed. The Murchison meteorite, which fell in Australia in 1969, contains more than ninety different amino acids. Most of them are not used by life at all, which is exactly what an abiotic process would produce and exactly what terrestrial contamination would not.',
          technical:
            'Murchison also contains nucleobases, sugars including ribose, and amphiphilic compounds that form vesicles in water. The amino acids show a slight excess of the left-handed form in some compounds, which is interesting because life uses left-handed amino acids exclusively — though the meteoritic excess is a few percent, not the total dominance biology shows.',
        },
        evidence: 'established',
        references: [referenceId('miller-1953'), referenceId('bada-2013-miller-legacy')],
      },
      {
        id: 'the-hard-parts',
        kind: 'prose',
        text: {
          essential:
            'Now the difficulties, and they are serious. First, the mess: prebiotic reactions produce the useful product mixed with many similar molecules, and a random mixture of building blocks does not assemble into anything functional. Second, water: linking building blocks into chains releases a water molecule at each step, which means water actively pushes the reaction backwards. Making polymers in the ocean is thermodynamically uphill.',
          detailed:
            'Third, and strangest, handedness. Amino acids and sugars come in two forms that are mirror images of each other, like left and right hands. Ordinary chemistry makes both in equal amounts. Life uses left-handed amino acids and right-handed sugars, exclusively, and a mixture does not work — a protein built from both kinds cannot fold reliably. Something must have broken the symmetry, and although several mechanisms have been proposed, none is established.',
        },
      },
      {
        id: 'sutherland',
        kind: 'callout',
        tone: 'note',
        title: 'The route that stopped asking the wrong question',
        text: {
          essential:
            'For decades, attempts to make nucleotides prebiotically failed because they tried to make the sugar and the base separately and then join them — and that final step simply does not work in water. John Sutherland’s group succeeded in 2009 by abandoning the assumption that nature had to build them the way a chemist would.',
          detailed:
            'Their route runs through a shared intermediate in which the sugar and base portions are assembled together, from simple feedstocks that plausibly existed. In 2015 the same group showed that one chemical network, driven by hydrogen cyanide and ultraviolet light with hydrogen sulfide as a reductant, can produce precursors of nucleotides, amino acids and lipids simultaneously. That is significant because it suggests the three classes of molecule need not have separate origins.',
        },
        references: [
          referenceId('powner-2009-nucleotides'),
          referenceId('patel-2015-cyanosulfidic'),
        ],
      },
      {
        id: 'caution-plausible',
        kind: 'callout',
        tone: 'caution',
        title: '“Prebiotically plausible” is a weaker claim than it sounds',
        text: {
          essential:
            'A successful prebiotic synthesis shows that a reaction can happen under conditions the early Earth could have provided. It does not show that it did happen, or that the conditions required for one step coexisted with those required for the next.',
          detailed:
            'This is the standing methodological problem of the field. Individual steps often require quite specific conditions — a particular pH, a particular mineral, a wetting and drying cycle, ultraviolet light of a particular intensity. Chaining them together requires either that all those conditions were available in one place, or that the intermediate products could travel between environments. Both are being investigated and neither is demonstrated.',
        },
        references: [referenceId('patel-2015-cyanosulfidic')],
      },
    ],
    furtherReading: [referenceId('powner-2009-nucleotides')],
  },

  {
    id: topicId('rna-world'),
    slug: 'rna-world',
    sectionId: LIFE,
    order: 5,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'RNA world',
    subtitle: 'One molecule that could both carry the message and do the work.',
    summary: {
      essential:
        'Modern life divides labour: DNA stores information, proteins do the chemistry. That is an awkward starting point, because DNA needs proteins to be copied and proteins need DNA to be specified. RNA breaks the deadlock — it can store information like DNA and catalyse reactions like a protein.',
      detailed:
        'The hypothesis is that an early stage of life ran on RNA alone, before DNA and proteins took over their specialised roles. The evidence is largely circumstantial but points consistently in one direction, and the strongest piece of it is sitting inside every cell in your body.',
      technical:
        'The chemical step that joins amino acids in the ribosome is catalysed by ribosomal RNA, not by any of the ribosome’s proteins — the peptidyl transferase centre is entirely RNA. Several essential coenzymes, including ATP, NAD and coenzyme A, contain nucleotide fragments with no functional role, which is most simply read as molecular fossils.',
    },
    glossaryTerms: [glossaryTermId('rna-world'), glossaryTermId('ribozyme')],
    related: [
      topicId('did-information-come-before-modern-cells'),
      topicId('could-metabolism-have-come-first'),
      topicId('how-could-complex-molecules-form-on-early-earth'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Start with the deadlock. In every cell today, DNA holds the instructions and proteins carry them out. But DNA cannot be copied without protein enzymes, and proteins cannot be built without the instructions in DNA. Each requires the other to exist first. That is not a comfortable place to begin a history.',
          detailed:
            'The escape came from an unexpected experimental result. In 1982, Thomas Cech and colleagues found an RNA molecule that cut and spliced itself with no protein involved. Sidney Altman’s group found another RNA acting as a catalyst around the same time. Until then, catalysis was assumed to be exclusively the business of proteins. RNA turned out to be able to do both jobs — carry a sequence and act on molecules — which meant it could in principle have preceded both DNA and proteins.',
        },
      },
      {
        id: 'viz-rna-world',
        kind: 'visualization',
        visualizationId: visualizationId('rna-world'),
      },
      {
        id: 'claim-ribosome',
        kind: 'claim',
        statement: {
          essential:
            'The ribosome — the machine that builds every protein in every organism — performs its central chemical step using RNA, not protein. This is the strongest single piece of evidence that RNA once did the work now done by proteins.',
          detailed:
            'When the ribosome’s structure was finally solved at atomic resolution in 2000, the result settled a long argument. The site where amino acids are joined together contains no protein at all within reach of the reaction. The ribosome is a ribozyme. Every protein you have ever made was made by a machine whose active core is RNA.',
          technical:
            'The nearest protein side chain in the Haloarcula marismortui 50S structure lies about 18 Å from the peptidyl transferase centre — far too distant to participate in catalysis. The proteins act as a scaffold. The reaction is catalysed by 23S rRNA, and the conclusion drawn by Steitz and colleagues was that the ribosome is a molecular fossil of an RNA world.',
        },
        evidence: 'inference',
        references: [referenceId('nissen-2000-ribosome'), referenceId('gilbert-1986-rna-world')],
      },
      {
        id: 'other-evidence',
        kind: 'prose',
        text: {
          essential:
            'Other traces point the same way. Several molecules that cells cannot do without — ATP, the universal energy currency; NAD, central to metabolism; coenzyme A — all contain a nucleotide as part of their structure. In most cases that nucleotide portion plays no chemical role. It is a handle, a leftover, the sort of thing you get when a system is built on top of an older one rather than designed fresh.',
          detailed:
            'And in the laboratory, RNA molecules can be evolved. Starting with a pool of random sequences and selecting repeatedly for a desired activity produces ribozymes that ligate RNA, that copy short templates, and that perform chemistry no natural ribozyme does. This does not prove RNA did these things four billion years ago, but it establishes that RNA is capable of the range of functions the hypothesis requires.',
        },
      },
      {
        id: 'caution-problems',
        kind: 'callout',
        tone: 'caution',
        title: 'The RNA world has real problems, and they are not minor',
        text: {
          essential:
            'RNA is chemically fragile — it degrades in water, faster when warm or alkaline. Its building blocks are hard to make prebiotically, though less hard than they used to be. No ribozyme has been evolved that can copy an RNA molecule as long as itself with the accuracy required for open-ended evolution. And ribose, the sugar in RNA, is one of the least stable sugars, which is inconvenient.',
          detailed:
            'Some researchers respond that RNA was preceded by a simpler, tougher genetic polymer — several candidates have been synthesised and shown to work — with RNA taking over later. Others argue the RNA world is broadly right and the remaining gaps are chemical problems that will yield. The honest summary is that the hypothesis explains a great deal and is not demonstrated.',
        },
        references: [referenceId('robertson-joyce-2012-rna-world')],
      },
      {
        id: 'open-rna',
        kind: 'open-question',
        question: 'Can an RNA molecule copy itself accurately enough to sustain evolution?',
        whyItMatters: {
          essential:
            'The RNA world hypothesis requires a self-replicating RNA. Without one, the story has no engine. Producing one in the laboratory would move the hypothesis from plausible to demonstrated.',
          detailed:
            'There is a threshold involved. Copying must be accurate enough that the information in the sequence is not lost faster than selection can maintain it — the error threshold. A replicase ribozyme has to be long enough to be a good catalyst and accurate enough to copy something of its own length, and those requirements pull against each other.',
        },
        whatWouldSettleIt: {
          essential:
            'An evolved ribozyme that copies a template at least as long as itself, with fidelity high enough to sustain the population.',
          detailed:
            'The best laboratory replicases have improved substantially — some now copy templates longer than themselves under specific conditions such as in ice eutectic phases — but not yet with the combination of length, generality and fidelity that closed self-replication needs. It remains the central experimental target of the field.',
        },
        references: [referenceId('joyce-szostak-2018-protocells')],
      },
    ],
    furtherReading: [referenceId('robertson-joyce-2012-rna-world')],
  },

  {
    id: topicId('did-information-come-before-modern-cells'),
    slug: 'did-information-come-before-modern-cells',
    sectionId: LIFE,
    order: 6,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Did information come before modern cells?',
    subtitle: 'The genes-first case: whatever else happened, something had to be inherited.',
    summary: {
      essential:
        'One family of hypotheses says replication came first. On this view, the crucial event was the appearance of a molecule that could be copied — because once copying exists, with occasional errors, natural selection can begin, and selection is what builds complexity.',
      detailed:
        'The argument is powerful. Without heredity, an improvement is lost when the system that had it breaks up. With heredity, improvements accumulate. Everything complicated in biology is the product of accumulated selection, so getting heredity started is arguably the pivotal step.',
      technical:
        'The genes-first position holds that a template-replicating polymer, plausibly RNA or a simpler precursor, arose before compartmentalisation and before organised metabolism. It faces the error-threshold constraint identified by Eigen: sustainable information content is limited to roughly the inverse of the per-base error rate, which for non-enzymatic copying is severe.',
    },
    glossaryTerms: [glossaryTermId('rna-world'), glossaryTermId('natural-selection')],
    related: [
      topicId('rna-world'),
      topicId('could-metabolism-have-come-first'),
      topicId('how-chemistry-could-become-biology'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Consider what it takes for anything to get better over time. A system that stumbles onto a useful arrangement by chance has gained nothing permanent unless it can pass that arrangement on. When it falls apart, the improvement disappears with it. Heredity is what converts a lucky accident into a starting point for the next accident.',
          detailed:
            'This is why one school of thought treats the origin of replication as the origin of life proper. Everything else — metabolism, membranes, the genetic code — could then be built by selection, which is a process we understand well and which demonstrably produces intricate machinery given enough time. The problem is reduced from "explain the cell" to "explain the first replicator", which is a much smaller problem.',
        },
      },
      {
        id: 'viz-replication',
        kind: 'visualization',
        visualizationId: visualizationId('template-replication'),
      },
      {
        id: 'claim-selection-needs-heredity',
        kind: 'claim',
        statement: {
          essential:
            'Natural selection requires heredity. Without a mechanism that passes variation from one generation to the next, differences in survival produce no cumulative change.',
          detailed:
            'This is not a claim about the origin of life specifically; it is a structural fact about how selection works. Selection needs three things: variation among individuals, differences in reproductive success that depend on that variation, and inheritance of the varying trait. Remove any one and nothing accumulates. The genes-first argument simply notices that inheritance is the hardest of the three to get by accident, and therefore treats it as the bottleneck.',
          technical:
            'Manfred Eigen’s error-threshold analysis makes the constraint quantitative: for a replicator of length L with per-base copying error q, information is maintained only if L ≲ 1/q. Non-enzymatic template copying has error rates around 10⁻², which caps a self-sustaining sequence at roughly a hundred bases — short for a functional replicase, which is the crux of the problem.',
        },
        evidence: 'established',
        references: [referenceId('darwin-1859'), referenceId('szathmary-smith-1995-transitions')],
      },
      {
        id: 'objections',
        kind: 'prose',
        text: {
          essential:
            'The objections are practical. A naked replicating molecule in the open ocean has a problem: any improvement it produces diffuses away and benefits its competitors as much as itself. Selection needs the benefit of a variation to stay with the variant that produced it, which is one of the strongest arguments for compartments — a membrane keeps the products of a good gene next to the gene that made them.',
          detailed:
            'There is also the question of where the energy and raw materials come from. A replicator needs a supply of activated building blocks, and something has to be producing them. Metabolism-first advocates argue this makes the genes-first picture incomplete rather than wrong: you cannot have replication without chemistry to feed it.',
        },
      },
      {
        id: 'note-synthesis',
        kind: 'callout',
        tone: 'note',
        title: 'The positions may be converging',
        text: {
          essential:
            'Genes-first and metabolism-first were once presented as rival accounts of what happened first. Increasingly, researchers on both sides suspect the components arose together in the same environment rather than in sequence.',
          detailed:
            'The 2015 result showing that nucleotide, amino acid and lipid precursors can come from one chemical network is often cited in support of this. If the same conditions that produce a replicator also produce membrane-forming molecules and the beginnings of a metabolism, arguing about which came first may be arguing about an artefact of how the question was posed.',
        },
        references: [referenceId('patel-2015-cyanosulfidic')],
      },
    ],
    furtherReading: [referenceId('szathmary-smith-1995-transitions')],
  },

  {
    id: topicId('could-metabolism-have-come-first'),
    slug: 'could-metabolism-have-come-first',
    sectionId: LIFE,
    order: 7,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Could metabolism have come first?',
    subtitle: 'The other main proposal: chemistry that sustains itself, before anything is copied.',
    summary: {
      essential:
        'The alternative view is that self-sustaining chemical cycles came before genes. On this account, the first "living" thing was not a molecule that copied itself but a network of reactions that kept regenerating its own ingredients, powered by an energy source in the environment.',
      detailed:
        'The appeal is that such networks do not need a fragile, information-rich polymer to appear from nowhere. They need a mineral surface, a supply of simple molecules and a chemical gradient — all of which the early Earth demonstrably had. The difficulty is showing that such a network can evolve, since it has no obvious way to inherit variation.',
      technical:
        'The core idea is an autocatalytic set: a collection of reactions in which every member is catalysed by some product of the set, and the whole is sustained by an external feedstock. Wächtershäuser’s surface-metabolism proposal locates this on iron–sulfur minerals, with the reductive tricarboxylic acid cycle as a candidate primordial network.',
    },
    glossaryTerms: [glossaryTermId('prebiotic-chemistry'), glossaryTermId('chemiosmosis')],
    related: [
      topicId('did-information-come-before-modern-cells'),
      topicId('hydrothermal-vents-and-other-possible-origins'),
      topicId('how-cells-obtained-energy'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A candle flame is a useful thing to think about here. It maintains a stable shape, consumes fuel, produces waste, and persists as long as the supply lasts. It is not alive — it does not inherit anything, and it cannot get better at being a flame. But it shows that self-maintaining processes are easy for nature to produce, whereas self-copying molecules are hard.',
          detailed:
            'The metabolism-first proposal takes that observation seriously. Suppose a set of chemical reactions on a mineral surface, in which the products of some reactions catalyse others, and the whole loop is fed by simple molecules from the environment. Such a network would maintain itself, spread across the surface, and could in principle be disrupted and restart. It requires no genetic molecule at all.',
        },
      },
      {
        id: 'viz-autocatalysis',
        kind: 'visualization',
        visualizationId: visualizationId('autocatalytic-network'),
      },
      {
        id: 'claim-plausible-chemistry',
        kind: 'claim',
        statement: {
          essential:
            'Metals and minerals that are abundant on Earth can catalyse reactions that build small organic molecules from carbon dioxide and hydrogen. The relevant chemistry works, and some of it resembles the core reactions cells still use.',
          detailed:
            'Iron–sulfur clusters are especially interesting, because they sit at the heart of many of the oldest enzymes in biology — the ones involved in electron transfer and carbon fixation. A cluster of iron and sulfur atoms in a modern protein has almost exactly the arrangement found in the mineral greigite. That is a striking coincidence, and metabolism-first advocates read it as continuity rather than coincidence.',
          technical:
            'The reductive acetyl-CoA (Wood–Ljungdahl) pathway is the strongest candidate for a primordial carbon-fixation route: it is the shortest, the only one that is exergonic overall under vent conditions, it is found in both bacteria and archaea, and it depends on iron–nickel–sulfur cofactors resembling minerals.',
        },
        evidence: 'active-research',
        references: [
          referenceId('wachtershauser-1988-iron-sulfur'),
          referenceId('martin-russell-2003-vents'),
        ],
      },
      {
        id: 'the-heredity-problem',
        kind: 'prose',
        text: {
          essential:
            'The standing objection is heredity. A self-sustaining reaction network can persist, but how does it get better? If it changes — a new reaction joins the loop, an old one drops out — there is no mechanism that reliably transmits that change to the networks it seeds. Without transmissible variation, selection has nothing to work on, and without selection there is no route to complexity.',
          detailed:
            'Defenders answer in two ways. Some argue that compositional inheritance is possible: a network that splits passes on its approximate composition to both halves, which is a crude form of heredity. Critics counter that this kind of inheritance carries too little information and is too easily washed out to support open-ended evolution. Others accept the objection and argue metabolism-first is about the setting in which a replicator later appeared, not a replacement for it.',
        },
      },
      {
        id: 'note-not-exclusive',
        kind: 'callout',
        tone: 'note',
        title: 'Treat these as complementary constraints, not a competition',
        text: {
          essential:
            'It is easy to present genes-first and metabolism-first as opposing camps, and researchers do argue vigorously. But both are trying to explain the same eventual outcome: a cell that has a metabolism, a membrane and a genome. Any complete account needs all three.',
          detailed:
            'What the debate really concerns is which capability was easiest to acquire without the others, and therefore which most likely came first — and that is a question about probabilities under early-Earth conditions that nobody can currently calculate. It is legitimate for the field to be divided about it.',
        },
        references: [referenceId('sojo-2016-vents')],
      },
    ],
    furtherReading: [referenceId('martin-russell-2003-vents')],
  },

  {
    id: topicId('hydrothermal-vents-and-other-possible-origins'),
    slug: 'hydrothermal-vents-and-other-possible-origins',
    sectionId: LIFE,
    order: 8,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Hydrothermal vents and other possible origins',
    subtitle: 'Several candidate settings, each explaining some steps and struggling with others.',
    summary: {
      essential:
        'Where did it happen? The main candidates are alkaline hydrothermal vents on the seafloor, volcanic hot springs on land that repeatedly wet and dry, and shallow pools exposed to ultraviolet light. Each solves a different part of the problem, and none solves all of them.',
      detailed:
        'This is not a case of one good idea and some fringe alternatives. Serious researchers back each setting, and the disagreements are about which chemical obstacles matter most. Reading the debate is a good way to see how science handles a question where the evidence underdetermines the answer.',
      technical:
        'Alkaline vents supply natural proton gradients across thin mineral barriers, catalytic Fe–Ni–S surfaces, and a continuous H₂ supply from serpentinisation. Terrestrial hot springs supply wet–dry cycling that drives condensation polymerisation and concentrates reactants. Surface pools supply the UV flux several key photochemical syntheses require but which vents cannot provide.',
    },
    glossaryTerms: [glossaryTermId('chemiosmosis'), glossaryTermId('prebiotic-chemistry')],
    related: [
      topicId('could-metabolism-have-come-first'),
      topicId('protocells-and-membranes'),
      topicId('how-cells-obtained-energy'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The setting matters because different chemical steps need different conditions, and a place that suits one may rule out another. Making chains from building blocks needs water removed, which suggests drying. Many of the best routes to nucleotides need ultraviolet light, which does not penetrate the deep ocean. Sustained energy and catalytic surfaces suggest the seafloor. These pull in different directions.',
          detailed:
            'So the argument about location is really an argument about which obstacle is the most serious. If the hardest problem is energy, the vents win. If it is polymerisation, hot springs win. If it is synthesising the building blocks in the first place, sunlit surface pools win. Each camp is, in effect, betting on which step nature found hardest.',
        },
      },
      {
        id: 'viz-vents',
        kind: 'visualization',
        visualizationId: visualizationId('origin-settings'),
      },
      {
        id: 'claim-vents',
        kind: 'claim',
        statement: {
          essential:
            'Alkaline hydrothermal vents provide, for free, the same kind of proton gradient across a thin barrier that every living cell uses to make energy. This is the strongest argument for the vent hypothesis.',
          detailed:
            'These vents are not the scalding black smokers found at mid-ocean ridges. They form where seawater reacts with mantle rock in a process called serpentinisation, producing warm, alkaline, hydrogen-rich fluid. Where that fluid seeps into the mildly acidic early ocean, it builds porous mineral chimneys — labyrinths of tiny interconnected compartments with a steep pH difference across each thin wall.',
          technical:
            'The Lost City field, discovered in 2000, demonstrates that such systems exist and persist for tens of thousands of years. The proton gradient across the chimney walls is of order 3–5 pH units, comparable in free-energy terms to the gradient a modern cell maintains, and the walls contain iron–nickel–sulfide minerals with catalytic properties resembling the active sites of ancient enzymes.',
        },
        evidence: 'active-research',
        references: [referenceId('kelley-2005-lost-city'), referenceId('sojo-2016-vents')],
      },
      {
        id: 'hot-springs',
        kind: 'prose',
        text: {
          essential:
            'The competing proposal puts the origin on land, in volcanic hot springs that fill and evaporate. The key advantage is drying. Linking building blocks into chains releases water, so a wet environment fights the reaction; let a pool dry and the same reaction runs readily. Repeated wetting and drying cycles concentrate reactants, drive polymerisation, and then redisperse the products so the cycle can begin again.',
          detailed:
            'Fatty acids also behave better in fresh water than in seawater — the high salt and divalent ion content of the ocean disrupts vesicle formation, which is a real difficulty for the vent scenario. Against this, terrestrial hot springs on the early Earth would have been much rarer than seafloor vents, because there was much less land, and they are less energetically sustained.',
        },
      },
      {
        id: 'caution-underdetermined',
        kind: 'callout',
        tone: 'caution',
        title: 'The evidence does not currently pick a winner',
        text: {
          essential:
            'No geological trace of the origin of life survives. The rock record does not reach back far enough, and even if it did, the event would leave nothing distinctive. All of the arguments here are about chemical plausibility, and plausibility arguments do not settle historical questions.',
          detailed:
            'It is also possible that the answer is "several of these". Molecules made photochemically in surface pools could have been washed into the sea. Compartments could have formed in one setting and acquired their contents in another. Requiring a single location may be importing an assumption that nature did not share.',
        },
        references: [referenceId('deamer-2017-hot-springs')],
      },
    ],
    furtherReading: [referenceId('sojo-2016-vents')],
  },

  {
    id: topicId('protocells-and-membranes'),
    slug: 'protocells-and-membranes',
    sectionId: LIFE,
    order: 9,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Protocells and membranes',
    subtitle: 'The easiest part of the whole problem: bags that build themselves.',
    summary: {
      essential:
        'A cell needs a boundary — something that keeps its contents together and separate from the outside. Remarkably, this is the step that requires the least explanation. Certain simple molecules, when put in water, spontaneously arrange themselves into hollow spheres. No machinery is needed. It is a consequence of their shape.',
      detailed:
        'These vesicles do more than just exist. They grow when fed more molecules, they divide when agitated, they let small molecules like nucleotides pass through while keeping larger ones inside, and they can be made from compounds found in meteorites. As a starting point for a cell, they are unreasonably good.',
      technical:
        'Fatty acids are amphiphiles: a polar carboxylate head and a hydrocarbon tail. Above a critical concentration they self-assemble into bilayer vesicles driven by the hydrophobic effect. Unlike modern phospholipid membranes, fatty-acid bilayers are permeable to nucleotides and divide under shear without protein machinery — both properties a protocell needs and a modern cell has lost.',
    },
    glossaryTerms: [glossaryTermId('protocell'), glossaryTermId('amphiphile')],
    related: [
      topicId('how-chemistry-could-become-biology'),
      topicId('the-first-cells'),
      topicId('rna-world'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The physics here is the same physics that makes oil separate from vinegar. Some molecules have two ends with opposite preferences: one end is attracted to water, the other repelled by it. Put a lot of them in water and they cannot satisfy both ends individually — but they can collectively. They line up in a double layer, water-loving ends facing out on both sides, water-avoiding tails hidden in the middle, and that sheet closes into a hollow sphere.',
          detailed:
            'Nothing directs this. There is no template, no enzyme, no instruction. It happens because the arrangement is the one with the lowest free energy, in the same way a soap bubble is round. And the molecules involved — fatty acids, essentially soap — form abiotically and have been extracted from meteorites and shown to make vesicles in the laboratory.',
        },
      },
      {
        id: 'viz-membrane',
        kind: 'visualization',
        visualizationId: visualizationId('membrane-self-assembly'),
      },
      {
        id: 'claim-vesicles',
        kind: 'claim',
        statement: {
          essential:
            'Fatty-acid vesicles spontaneously form, grow, and divide, without any biological machinery. This has been demonstrated repeatedly in the laboratory.',
          detailed:
            'Growth happens when free fatty acids in the surrounding solution are absorbed into the existing bilayer, increasing its surface area. Division happens when a grown vesicle is subjected to modest shear — flowing through a narrow channel, for instance — and pinches into daughters. Crucially, contents are retained through the process. That is a reproducing compartment with no genes and no proteins involved.',
          technical:
            'Szostak and colleagues showed that vesicles containing encapsulated RNA grow at the expense of empty ones, because osmotic pressure from the contents puts the membrane under tension and increases its affinity for incoming fatty acids. That is competition between compartments driven by their contents — a primitive form of selection.',
        },
        evidence: 'established',
        references: [
          referenceId('chen-walde-2010-vesicles'),
          referenceId('szostak-2001-protocells'),
        ],
      },
      {
        id: 'permeability',
        kind: 'prose',
        text: {
          essential:
            'The property that makes fatty-acid membranes useful for a protocell is one that modern cells have deliberately lost: leakiness. A fatty-acid bilayer lets nucleotides and other small molecules pass through. A modern phospholipid membrane does not — it needs dedicated transport proteins for almost everything.',
          detailed:
            'For a first cell this is exactly right. A protocell with no transport machinery could still be fed by its environment, absorbing building blocks through the membrane and using them inside. The switch to tight, phospholipid membranes came later, once cells had proteins to move things across deliberately, and it bought control at the cost of self-sufficiency.',
        },
      },
      {
        id: 'note-gap',
        kind: 'callout',
        tone: 'note',
        title: 'What is still missing',
        text: {
          essential:
            'A vesicle that grows and divides is not a cell. It has no heredity — its daughters do not inherit anything that could improve. The outstanding challenge is to put a replicating genetic molecule inside a dividing vesicle and have both processes work together.',
          detailed:
            'Each half has been achieved separately. Vesicles grow and divide; RNA can be copied non-enzymatically to a limited extent. Combining them runs into practical conflicts — the magnesium ions that RNA copying needs destabilise fatty-acid membranes, for instance, though chelators have been found that mitigate this. Closing the loop is the explicit goal of several laboratories and has not yet been done.',
        },
        references: [referenceId('joyce-szostak-2018-protocells')],
      },
    ],
    furtherReading: [referenceId('chen-walde-2010-vesicles')],
  },

  {
    id: topicId('how-chemistry-could-become-biology'),
    slug: 'how-chemistry-could-become-biology',
    sectionId: LIFE,
    order: 10,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How chemistry could become biology',
    subtitle: 'The pieces exist. Assembling them into one working system is the unsolved problem.',
    summary: {
      essential:
        'Put the strands together and a picture emerges: building blocks form, membranes assemble themselves, some molecules catalyse reactions, some can be copied. What nobody has done is combine these into a single system that maintains itself, grows, divides, and inherits improvements.',
      detailed:
        'That combination is the definition of the problem. It is not that one piece is missing; it is that the pieces have been demonstrated under conditions that do not obviously coexist, and the transitions between them have not been shown.',
      technical:
        'The minimal target is a compartment containing a replicating informational polymer, where compartment growth and division are coupled to replication so that selection acts on the compartment. Achieving this in the laboratory would not prove it happened this way, but it would establish that the pathway is chemically available.',
    },
    glossaryTerms: [glossaryTermId('abiogenesis'), glossaryTermId('protocell')],
    related: [
      topicId('protocells-and-membranes'),
      topicId('rna-world'),
      topicId('what-might-the-first-organisms-have-been-like'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'It helps to be explicit about what has actually been achieved, because the field is regularly reported as either nearly solved or hopelessly stuck, and neither is right. Achieved: synthesis of amino acids, nucleotides and lipids under plausible conditions; self-assembling membranes that grow and divide; RNA molecules that catalyse reactions including limited copying; laboratory evolution of RNA under selection. Not achieved: any system that does all of this at once.',
          detailed:
            'The gap is one of integration. Each demonstrated step has its own preferred conditions — this one needs ultraviolet light, that one needs magnesium, another needs drying, another needs the absence of the salt that a fourth requires. Nature was not obliged to do everything in one beaker, but the products of one setting had to reach another intact, and showing that is part of the problem.',
        },
      },
      {
        id: 'viz-chemistry-to-biology',
        kind: 'visualization',
        visualizationId: visualizationId('chemistry-to-biology'),
      },
      {
        id: 'claim-not-solved',
        kind: 'claim',
        statement: {
          essential:
            'Science has not identified how life began. There is no confirmed pathway from chemistry to the first organism, and anyone who tells you otherwise is overstating the case.',
          detailed:
            'What exists is a set of partial results and several competing frameworks, each of which explains some transitions well. This is a normal state for a historical science working on an event four billion years old that left no direct trace — and it is quite different from the state of, say, evolutionary theory, where the mechanism is understood and the evidence is overwhelming.',
          technical:
            'The distinction is worth stating carefully because the two are frequently conflated in public argument. That life evolved once it existed is established beyond reasonable dispute. How it originated is an open problem. Uncertainty about the second does not transfer to the first: they are different questions with different evidence bases.',
        },
        evidence: 'open-question',
        references: [
          referenceId('joyce-szostak-2018-protocells'),
          referenceId('benner-2010-defining-life'),
        ],
      },
      {
        id: 'selection-before-life',
        kind: 'prose',
        text: {
          essential:
            'One idea does real work in bridging the gap: selection can start before anything is properly alive. If some vesicles grow faster than others because of what they contain, then containers with better contents become more numerous. That is competition, and competition between systems that pass on their contents is the beginning of the process that later builds everything.',
          detailed:
            'This matters because it means the transition need not have been a leap. A population of compartments with crude, imperfect, compositional inheritance would already be subject to a weak form of selection. Weak selection acting over a very long time on an enormous number of compartments in an ocean is not obviously insufficient — though "not obviously insufficient" is a long way from demonstrated.',
        },
      },
      {
        id: 'caution-probability',
        kind: 'callout',
        tone: 'caution',
        title: 'Nobody can calculate how likely this was',
        text: {
          essential:
            'You will encounter confident statements that the origin of life was essentially inevitable given the conditions, and equally confident statements that it was so improbable that Earth may be unique. Neither can currently be justified. We have one example and no way to calculate the probability from first principles.',
          detailed:
            'A single instance tells you almost nothing about a rate. If life arose quickly on Earth, that is weakly suggestive that the process is easy — but we could only have evolved on a planet where it did happen, so the observation is filtered. Finding a genuinely independent origin of life anywhere else, even a fossil one, would transform the question overnight. Until then, estimates of the probability are opinions with equations attached.',
        },
        references: [referenceId('benner-2010-defining-life')],
      },
    ],
    furtherReading: [referenceId('joyce-szostak-2018-protocells')],
  },

  {
    id: topicId('when-did-the-first-life-appear'),
    slug: 'when-did-the-first-life-appear',
    sectionId: LIFE,
    order: 11,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'When did the first life appear?',
    subtitle: 'Early. Possibly very early. The uncertainty is hundreds of millions of years.',
    summary: {
      essential:
        'The best-supported answer is that life existed by about 3.5 billion years ago, and quite possibly by 3.8 or earlier. Since Earth formed 4.54 billion years ago and was not continuously habitable at first, that means life appeared within a few hundred million years of the planet becoming suitable.',
      detailed:
        'Two independent methods converge, which is what gives the answer weight. Fossil and chemical traces in ancient rock give one bound. Molecular clocks — reading the accumulated differences between the genes of living organisms — give another, and they tend to point even earlier.',
      technical:
        'The oldest widely accepted microfossils are 3.465 Ga. Contested claims reach 3.7–4.28 Ga. A 2024 Bayesian molecular-clock analysis calibrated on the fossil record placed LUCA at approximately 4.2 Ga, which is earlier than most previous estimates and implies life predates that by an unknown interval.',
    },
    glossaryTerms: [glossaryTermId('stromatolite'), glossaryTermId('luca')],
    related: [
      topicId('the-first-evidence-of-life'),
      topicId('luca-the-last-universal-common-ancestor'),
      topicId('why-luca-was-not-the-first-life'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The interesting thing about the answer is not the number but the interval. Earth finished forming about 4.54 billion years ago. It was hot, and then it was bombarded, and only after that could a surface environment persist. If life was here by 3.8 or even 4.2 billion years ago, the window between "habitable" and "inhabited" was short by geological standards.',
          detailed:
            'That has been taken by some as evidence that the origin of life is easy — that if it happened quickly here it will happen readily elsewhere. The inference is weaker than it looks, and it is worth seeing why, because it is a nice example of a selection effect: we could only be having this conversation on a planet where life did arise, and arose early enough to produce us before the Sun made the place uninhabitable. Our observation is not a random sample.',
        },
      },
      {
        id: 'viz-timeline',
        kind: 'visualization',
        visualizationId: visualizationId('complexity-timeline'),
      },
      {
        id: 'claim-molecular-clock',
        kind: 'claim',
        statement: {
          essential:
            'Molecular clocks provide evidence about the timing of early life that is independent of the fossil record, and they point to an early origin.',
          detailed:
            'The method works because genetic sequences accumulate changes over time. Compare the same gene in two organisms, count the differences, and if you know roughly how fast changes accumulate you get a time since they diverged. Calibrating the rate requires fossils of known age, so the two methods are not fully independent — but the fossils used for calibration are much younger than the dates being estimated, which limits the circularity.',
          technical:
            'The 2024 analysis by Moody and colleagues used a relaxed molecular clock across 350 genomes with 13 fossil calibrations, estimating LUCA at 4.2 Ga with a credible interval reaching back beyond 4.3. Earlier studies gave younger estimates, and the discrepancy comes largely from different assumptions about rate variation across the tree.',
        },
        evidence: 'inference',
        references: [referenceId('moody-2024-luca')],
      },
      {
        id: 'bombardment',
        kind: 'prose',
        text: {
          essential:
            'There is a complication in the middle of the window. For a long time it was thought that the inner Solar System suffered an intense spike of impacts around 3.9 billion years ago — a Late Heavy Bombardment — severe enough to have sterilised the surface. If real, that would compress the time available for life to appear, or mean life arose earlier and survived deep underground.',
          detailed:
            'The evidence for a discrete spike has weakened considerably. It rested largely on a cluster of ages in Apollo samples, which may reflect the fact that those samples came from a small region dominated by one large impact rather than a global event. Many researchers now favour a declining bombardment without a distinct late spike. This is an unresolved question that directly affects how much time the origin of life had.',
        },
      },
      {
        id: 'caution-first',
        kind: 'callout',
        tone: 'caution',
        title: 'Dating the oldest evidence is not dating the origin',
        text: {
          essential:
            'Every date discussed here is a date for the oldest evidence we have found, or for the ancestor of everything now living. Neither is the origin of life. Life could have existed for a very long time before leaving any trace we can read, and the first life was not the ancestor of anything alive today unless it happened to be on the surviving branch.',
          detailed:
            'It is also possible that life started more than once — that there were several independent origins, and that all but one died out or were outcompeted. There would be no way to tell from the evidence available, because we can only see the lineage that survived. This is a real limitation, not a technicality.',
        },
        references: [referenceId('moody-2024-luca')],
      },
    ],
    furtherReading: [referenceId('schopf-2018-microfossils')],
  },

  {
    id: topicId('what-might-the-first-organisms-have-been-like'),
    slug: 'what-might-the-first-organisms-have-been-like',
    sectionId: LIFE,
    order: 12,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What might the first organisms have been like?',
    subtitle: 'Small, simple, anaerobic — and a reconstruction, not an observation.',
    summary: {
      essential:
        'The first organisms were almost certainly single cells without a nucleus, living without oxygen, getting energy from chemistry rather than sunlight. Beyond that the picture becomes speculative, because there are no fossils of them and no descendants that have stayed unchanged.',
      detailed:
        'What can be reconstructed with more confidence is the last universal common ancestor, which came later. Working out what preceded it involves running the inference past the point where the comparative method works, and the confidence drops sharply.',
      technical:
        'Constraints come from the anoxic Archean atmosphere, from the chemistry available in candidate settings, and from the deepest-branching metabolisms in the modern tree, which are chemolithoautotrophic and often use the Wood–Ljungdahl pathway. None of this constrains cell size, genome size or reproductive mode for anything earlier than LUCA.',
    },
    glossaryTerms: [glossaryTermId('prokaryote'), glossaryTermId('chemiosmosis')],
    related: [
      topicId('luca-the-last-universal-common-ancestor'),
      topicId('the-first-cells'),
      topicId('how-cells-obtained-energy'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Some things follow from the environment alone. There was no oxygen, so the first organisms could not have used it — oxygen respiration is far more efficient than the alternatives, but it requires oxygen to be available, and it was not. There was no ozone layer, so ultraviolet light reached the surface, which favours living in water, under sediment, or underground. And energy had to come from chemical reactions, because photosynthesis is a complicated invention that almost certainly came later.',
          detailed:
            'Other things follow from what modern life shares. Every organism uses a membrane to separate inside from outside; every one stores information in nucleic acid; every one makes proteins on ribosomes; every one runs on proton gradients. Features shared by all three domains were most likely present in their common ancestor. That is a strong method — but it reconstructs the common ancestor, and the first organisms were earlier.',
        },
      },
      {
        id: 'viz-first-organism',
        kind: 'visualization',
        visualizationId: visualizationId('first-cell-anatomy'),
      },
      {
        id: 'claim-chemotroph',
        kind: 'claim',
        statement: {
          essential:
            'The earliest organisms very likely obtained energy from chemical reactions between simple inorganic molecules, rather than from sunlight.',
          detailed:
            'The argument runs through the tree of life. The deepest-branching lineages in both bacteria and archaea are overwhelmingly chemolithoautotrophs — organisms that eat rock chemistry, typically hydrogen and carbon dioxide. Photosynthesis, by contrast, appears in a limited number of bacterial groups and requires elaborate pigment and reaction-centre machinery that has all the marks of a later innovation.',
          technical:
            'Reconstructions of LUCA’s gene content consistently recover the Wood–Ljungdahl pathway, hydrogenases, and iron–sulfur and nickel-containing cofactors, alongside an absence of the biosynthetic machinery for many amino acids and nucleotides — which is often read as indicating dependence on environmentally supplied organics.',
        },
        evidence: 'inference',
        references: [referenceId('weiss-2016-luca')],
      },
      {
        id: 'caution-reconstruction',
        kind: 'callout',
        tone: 'caution',
        title: 'This is reconstruction, and illustrations of it are artists’ impressions',
        text: {
          essential:
            'No fossil of an early cell preserves its internal structure. Every picture of a first organism, including the diagram in this topic, is a drawing based on inference. It should not be read as a depiction of something anybody has seen.',
          detailed:
            'The inference weakens the further back it is pushed. Reconstructing LUCA from shared features is a defensible method with known limitations. Reconstructing what preceded LUCA means extrapolating past the point where comparative evidence exists, and the resulting descriptions are hypotheses constrained by chemistry rather than conclusions from data.',
        },
        references: [referenceId('weiss-2016-luca')],
      },
    ],
    furtherReading: [referenceId('weiss-2016-luca')],
  },

  {
    id: topicId('luca-the-last-universal-common-ancestor'),
    slug: 'luca-the-last-universal-common-ancestor',
    sectionId: LIFE,
    order: 13,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'LUCA — the last universal common ancestor',
    subtitle: 'Not the first life. The most recent organism everything alive descends from.',
    summary: {
      essential:
        'Every organism on Earth — every bacterium, every tree, every fungus, you — shares an ancestor. We know this because we all use the same genetic code, the same amino acids in the same handedness, the same ribosomes, the same energy currency. That common ancestor is called LUCA.',
      detailed:
        'LUCA can be partially reconstructed by finding genes present in both bacteria and archaea, since a gene in both branches was probably in the ancestor of both. What emerges is not a simple protocell but a functioning organism with a membrane, a genome, ribosomes, and a real metabolism.',
      technical:
        'Reconstruction is complicated by horizontal gene transfer, which can put a gene in both domains without it having been in LUCA. Weiss et al. applied strict phylogenetic criteria and recovered 355 genes; Moody et al. using different methods estimated a genome of roughly 2.5 Mb and 2,600 proteins. The disagreement is substantial and methodological.',
    },
    glossaryTerms: [
      glossaryTermId('luca'),
      glossaryTermId('common-ancestry'),
      glossaryTermId('horizontal-gene-transfer'),
    ],
    related: [
      topicId('why-luca-was-not-the-first-life'),
      topicId('common-ancestry-and-the-tree-of-life'),
      topicId('what-might-the-first-organisms-have-been-like'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The argument for common ancestry is worth laying out because it is unusually strong. There are sixty-four possible three-letter DNA words and twenty amino acids to assign them to. The number of possible assignments is astronomically large, and there is nothing chemically necessary about the particular one life uses — laboratories have built organisms with altered codes and they work. Yet every organism ever sequenced uses essentially the same one.',
          detailed:
            'The same goes for handedness. Amino acids come in mirror-image forms; life uses the left-handed ones exclusively, everywhere. Sugars in nucleic acids are right-handed, everywhere. ATP is the energy currency, everywhere. These are arbitrary choices, and universal agreement on an arbitrary choice is the signature of shared descent, not of independent invention.',
        },
      },
      {
        id: 'viz-luca',
        kind: 'visualization',
        visualizationId: visualizationId('tree-of-life'),
      },
      {
        id: 'claim-luca',
        kind: 'claim',
        statement: {
          essential:
            'All known life descends from a single common ancestral population. The evidence is the shared genetic code, shared molecular machinery, and the nested pattern of similarities across all sequenced genomes.',
          detailed:
            'It is worth being precise about what this claims. LUCA was probably not a single individual cell but a population, quite possibly one that exchanged genes freely. And it is the last common ancestor, not the first organism — there were ancestors before it, and there may have been contemporaneous lineages that left no descendants.',
          technical:
            'Formal statistical tests comparing a universal-common-ancestry model against multiple independent origins strongly favour common ancestry, by likelihood ratios many orders of magnitude in its favour, even when horizontal gene transfer is allowed for.',
        },
        evidence: 'established',
        references: [referenceId('woese-1990-three-domains'), referenceId('weiss-2016-luca')],
      },
      {
        id: 'what-luca-was-like',
        kind: 'prose',
        text: {
          essential:
            'What was it? The reconstructions agree on a rough outline: a single-celled organism without a nucleus, living without oxygen, probably in a hot environment, getting energy from hydrogen and carbon dioxide, using iron–sulfur and nickel-containing enzymes, and already possessing a genetic code, ribosomes and a proton-gradient energy system.',
          detailed:
            'They disagree sharply on how sophisticated it was. One influential reconstruction found only a few hundred confidently ancestral genes and painted a strikingly dependent organism, tied to a hydrothermal setting and unable to make many of its own building blocks. A more recent analysis estimated a genome of a couple of thousand genes — comparable to a modern free-living bacterium. The methods differ in how aggressively they discount horizontal gene transfer, and that choice drives the result.',
        },
      },
      {
        id: 'note-hgt',
        kind: 'callout',
        tone: 'note',
        title: 'Why the deepest branches are a network, not a tree',
        text: {
          essential:
            'Microbes swap genes sideways, not just passing them to offspring. A bacterium can pick up DNA from its environment, from a virus, or directly from another cell — including one from an entirely different group. This makes early evolutionary history genuinely reticulated.',
          detailed:
            'It has a practical consequence for reconstructing LUCA: a gene found in both bacteria and archaea might have been in their common ancestor, or might have jumped between them a billion years later. Distinguishing these requires careful phylogenetic analysis of each gene family, and reasonable people set the threshold differently — which is exactly why the estimates of LUCA’s genome size vary by an order of magnitude.',
        },
        references: [referenceId('doolittle-1999-lateral')],
      },
    ],
    furtherReading: [referenceId('moody-2024-luca')],
  },

  {
    id: topicId('why-luca-was-not-the-first-life'),
    slug: 'why-luca-was-not-the-first-life',
    sectionId: LIFE,
    order: 14,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why LUCA was not the first life',
    subtitle: 'It had ribosomes and a genetic code. Those are not things a first organism has.',
    summary: {
      essential:
        'LUCA is regularly described as the first living thing, and that is wrong in a way that matters. LUCA already had a genetic code, ribosomes that translate it into proteins, membranes, and a working metabolism. Each of those is a sophisticated system that must itself have evolved. Whatever came first was far simpler.',
      detailed:
        'The confusion is understandable, because LUCA is as far back as the comparative method reaches. Everything before it left no descendants we can compare. But "as far back as we can see" is not the same as "the beginning".',
      technical:
        'The genetic code is a mapping between 64 codons and 20 amino acids implemented by aminoacyl-tRNA synthetases and the ribosome — a system requiring hundreds of coordinated components. Its near-universality places it before LUCA; its complexity places its own origin well before that. The interval between the origin of life and LUCA is unconstrained.',
    },
    glossaryTerms: [glossaryTermId('luca'), glossaryTermId('abiogenesis')],
    related: [
      topicId('luca-the-last-universal-common-ancestor'),
      topicId('when-did-the-first-life-appear'),
      topicId('how-chemistry-could-become-biology'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Think about what LUCA had. A genetic code: a translation table between three-letter sequences of nucleotides and amino acids, implemented by a family of enzymes that each recognise one amino acid and one transfer RNA. A ribosome: a molecular machine of dozens of components that reads the code and assembles proteins. A membrane with pumps and channels. A metabolism of interlocking catalysed reactions.',
          detailed:
            'None of that is a starting point. Each is the kind of system that natural selection builds over a long time from something less capable. Calling LUCA the first life is like calling the oldest surviving cathedral the first building — it tells you where the record starts, not where the story does.',
        },
      },
      {
        id: 'viz-luca-gap',
        kind: 'visualization',
        visualizationId: visualizationId('luca-timeline-gap'),
      },
      {
        id: 'claim-precedes',
        kind: 'claim',
        statement: {
          essential:
            'LUCA was already a complex organism, so life must have existed and evolved for some time before it. How long is unknown.',
          detailed:
            'The unknown interval is genuinely unbounded by evidence. It could have been ten million years or a billion. The comparative method cannot reach past LUCA because there is nothing left to compare — any lineage that branched off earlier and went extinct left no genomes, and the geological record does not resolve individual microbial lineages at all.',
          technical:
            'One might hope to bound the interval by rates: how fast can a genetic code and a translation system plausibly evolve? Nobody has a defensible model of that rate, because the process has been observed exactly zero times. The interval is therefore a genuine gap rather than a poorly measured quantity.',
        },
        evidence: 'inference',
        references: [referenceId('weiss-2016-luca'), referenceId('moody-2024-luca')],
      },
      {
        id: 'other-lineages',
        kind: 'prose',
        text: {
          essential:
            'There is a further point that is easy to miss. LUCA being the common ancestor of everything alive does not mean it was the only organism alive at the time. It means it is the only one whose descendants are still here. Its contemporaries may have been numerous and diverse. They simply died out, or were outcompeted, and left nothing.',
          detailed:
            'This opens a possibility that cannot currently be tested: life may have originated more than once on Earth. Separate origins would have produced separate lineages, and if all but one went extinct, the survivors would look exactly as they do now — universally related, with no trace of the others. The only way to settle it would be to find a surviving organism with a genuinely independent biochemistry, and despite occasional searches, none has been found.',
        },
      },
      {
        id: 'misconception-luca',
        kind: 'callout',
        tone: 'misconception',
        title: '“LUCA was the first cell”',
        text: {
          essential:
            'It was not, and the distinction is not pedantic. Conflating them makes the origin of life look solved: if LUCA is the first life and we can reconstruct LUCA, the problem seems handled. In fact reconstructing LUCA tells us about an organism that already had everything hard about life in place.',
          detailed:
            'The two questions have completely different evidential status. LUCA’s existence and rough character are supported by comparative genomics across thousands of sequenced organisms — a strong, replicable body of evidence. The origin of life is an open problem with competing hypotheses and no decisive data. Keeping them apart is the single most useful thing a reader can take from this group of topics.',
        },
        references: [referenceId('weiss-2016-luca')],
      },
      {
        id: 'xlink-first-cells',
        kind: 'cross-link',
        topicId: topicId('the-first-cells'),
        rationale:
          'What came after LUCA is much better documented — and it is where the story becomes evolution rather than chemistry.',
      },
    ],
    furtherReading: [referenceId('moody-2024-luca')],
  },
];
