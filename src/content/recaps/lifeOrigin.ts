/**
 * Recaps for the origin of life.
 *
 * These questions are written to be failable in a useful way. The tempting
 * wrong answer in almost every case is the confident one — that science knows
 * how life began, that the Miller–Urey experiment settled it, that the RNA
 * world is established, that LUCA was the first organism. Getting one of those
 * wrong and then reading why is the point, so each explanation names the
 * distinction rather than restating the answer.
 */
import type { RecapsByTopic } from '../schema/recap';

export const LIFE_ORIGIN_RECAPS: RecapsByTopic = {
  'what-is-life': {
    summary: {
      essential:
        'There is no accepted definition of life. Every criterion proposed — metabolism, growth, reproduction, response, evolution, homeostasis — is either failed by something alive or passed by something dead.',
      detailed:
        'Most working definitions put evolution at the centre, because it is the property fire and crystals lack. But a mule is alive and does not reproduce, a dormant seed metabolises almost not at all, and a virus evolves vigorously while being unable to do anything without a host. The absence of a definition has not slowed biology down, and it becomes a practical problem only at the edges: searching for life elsewhere, and deciding when a chemical system on the early Earth had crossed over.',
    },
    questions: [
      {
        id: 'fire',
        prompt: 'Why does fire fail to qualify as alive under most definitions?',
        options: [
          {
            id: 'a',
            text: 'It does not consume energy',
          },
          {
            id: 'b',
            text: 'It cannot respond to its surroundings',
          },
          {
            id: 'c',
            text: 'It has no heredity — a fire passes nothing to the next fire, so nothing can accumulate across generations',
            correct: true,
          },
          {
            id: 'd',
            text: 'It does not grow or spread',
          },
        ],
        explanation:
          'Fire consumes fuel, grows, spreads and responds. What it lacks is transmission of information to descendants, which is why heredity sits at the centre of most definitions and why evolution is the criterion that does the most work.',
      },
      {
        id: 'mule',
        prompt: 'What does a sterile mule show about definitions of life?',
        options: [
          {
            id: 'a',
            text: 'That reproduction is not required for anything to be alive',
          },
          {
            id: 'b',
            text: 'That reproduction cannot be a requirement for an individual organism, only for a lineage',
            correct: true,
          },
          {
            id: 'c',
            text: 'That mules are a borderline case like viruses',
          },
          {
            id: 'd',
            text: 'That definitions of life should be abandoned entirely',
          },
        ],
        explanation:
          'A mule is unambiguously alive and cannot reproduce. The criterion has to be applied at the level of a lineage rather than an individual — which is a real complication for any attempt to say whether a single chemical system is alive.',
      },
    ],
  },

  'where-does-non-life-end-and-life-begin': {
    summary: {
      essential:
        'There is no line. Between simple molecules and cells lies a series of systems — polymers, self-templating molecules, autocatalytic networks, protocells — each slightly more life-like than the last, and no point at which everyone agrees the transition happened.',
      detailed:
        'This is not a failure of definition to be fixed by more work. It is what a gradual physical transition looks like when described with a word that evolved to sort obvious cases. Where a boundary must be drawn for practical reasons — in origin-of-life research, in astrobiology — the choice is stipulative, and being explicit about that is better than pretending nature supplies one.',
    },
    questions: [
      {
        id: 'no-line',
        prompt: 'Why is there no agreed point at which non-life becomes life?',
        options: [
          {
            id: 'a',
            text: 'Because the relevant chemistry has not yet been studied',
          },
          {
            id: 'b',
            text: 'Because different laboratories use different equipment',
          },
          {
            id: 'c',
            text: 'Because the transition is gradual, and each step in the sequence differs only slightly from the one before it',
            correct: true,
          },
          {
            id: 'd',
            text: 'Because life did not arise gradually but appeared suddenly',
          },
        ],
        explanation:
          'A word that sorts rocks from rabbits does not have to sort every intermediate. Where the physical change is continuous, a sharp verbal boundary has to be imposed rather than discovered.',
      },
      {
        id: 'protocell',
        prompt:
          'Why is a protocell — a membrane vesicle with replicating contents — the hardest case?',
        options: [
          {
            id: 'a',
            text: 'Because it has never been made in a laboratory',
          },
          {
            id: 'b',
            text: 'Because it has a boundary, an inside, crude heredity and a crude metabolism, so most criteria are partly satisfied and none decisively',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because it reproduces faster than any living cell',
          },
          {
            id: 'd',
            text: 'Because it contains DNA but no proteins',
          },
        ],
        explanation:
          'Protocells are where honest disagreement is unavoidable, and it is not a disagreement about facts. Vesicles that grow and divide have been made; what has not been made is one whose contents replicate as it divides.',
      },
    ],
  },

  'what-does-life-actually-need': {
    summary: {
      essential:
        'Every known organism needs a source of energy, a source of carbon, liquid water, and a set of chemical elements. What it does not need is sunlight, oxygen, moderate temperatures, or anything a person would call comfortable.',
      detailed:
        'The known envelope is far wider than intuition suggests: growth above 120 degrees celsius, at pH near zero, at over a thousand atmospheres, and kilometres down in rock living on hydrogen. Liquid water is the requirement that has resisted every attempt to relax it — it is the solvent all known biochemistry runs in — and it is the one that shapes where we look for life elsewhere.',
    },
    questions: [
      {
        id: 'sunlight',
        prompt: 'Is sunlight a requirement for life?',
        options: [
          {
            id: 'a',
            text: 'Yes — all food chains ultimately trace back to photosynthesis',
          },
          {
            id: 'b',
            text: 'No — chemosynthetic communities at hydrothermal vents and deep in the crust run on chemical energy and never use sunlight',
            correct: true,
          },
          {
            id: 'c',
            text: 'Yes, except for parasites',
          },
          {
            id: 'd',
            text: 'Only for organisms living above the ocean floor',
          },
        ],
        explanation:
          'Vent communities and the deep subsurface biosphere run on chemical energy from rock and water. A large share of all living cells may never encounter sunlight at any point in their existence.',
      },
      {
        id: 'water',
        prompt: 'Why is liquid water the requirement that has proved hardest to relax?',
        options: [
          {
            id: 'a',
            text: 'Because it is the most abundant compound in the universe',
          },
          {
            id: 'b',
            text: 'Because it is the only compound that can dissolve salt',
          },
          {
            id: 'c',
            text: 'Because all known biochemistry runs in it as a solvent, and no alternative has been shown to support comparable chemistry',
            correct: true,
          },
          {
            id: 'd',
            text: 'Because organisms are mostly water by mass',
          },
        ],
        explanation:
          'Being made of water is not the point; being able to run chemistry in it is. Alternatives such as liquid ammonia or methane are discussed seriously, but no demonstrated biochemistry works in them, which is why the search for life elsewhere follows liquid water.',
      },
    ],
  },

  'how-could-complex-molecules-form-on-early-earth': {
    summary: {
      essential:
        'Amino acids, sugars and nucleobases form readily under a range of plausible early-Earth conditions and arrive ready-made on meteorites. That part of the problem is not in doubt.',
      detailed:
        'Miller and Urey demonstrated it in 1953, and reanalysis of their sealed vials in 2008 found more than twenty amino acids. The atmosphere they used is now thought to be wrong for Earth as a whole, but similar chemistry works in more neutral mixtures and near volcanic vents, and the Murchison meteorite alone contains more than eighty amino acids. What remains hard is everything after the building blocks: linking them into long chains, and getting a chain that copies itself.',
    },
    questions: [
      {
        id: 'miller',
        prompt: 'How should the Miller–Urey experiment be read today?',
        options: [
          {
            id: 'a',
            text: 'As a demonstration that life can be created in a laboratory',
          },
          {
            id: 'b',
            text: 'As discredited, since the atmosphere used was wrong',
          },
          {
            id: 'c',
            text: 'As a real demonstration that building blocks form readily under plausible conditions, even though the specific atmosphere used is now thought to be wrong for early Earth as a whole',
            correct: true,
          },
          {
            id: 'd',
            text: 'As showing that amino acids can only form in a reducing atmosphere',
          },
        ],
        explanation:
          'The result survives the criticism of the setup, because similar chemistry works in other mixtures and because meteorites deliver the same molecules. What the experiment did not do — and was never claimed to do — is produce anything self-replicating.',
      },
      {
        id: 'hard-part',
        prompt: 'Which part of prebiotic chemistry remains genuinely unsolved?',
        options: [
          {
            id: 'a',
            text: 'Making amino acids',
          },
          {
            id: 'b',
            text: 'Making nucleobases such as adenine',
          },
          {
            id: 'c',
            text: 'Making complete nucleotides',
          },
          {
            id: 'd',
            text: 'Producing a molecule that copies itself accurately enough to sustain a lineage',
            correct: true,
          },
        ],
        explanation:
          'Complete pyrimidine nucleotides were made in 2009 by a route that never assembles the pieces separately — a genuine breakthrough. Self-replication has been the central experimental target for four decades and has not been achieved.',
      },
    ],
  },

  'rna-world': {
    summary: {
      essential:
        'The RNA world hypothesis proposes that before DNA and proteins, life ran on RNA alone — a molecule that can both store a sequence and catalyse reactions, and so needs no partner to get started.',
      detailed:
        'The strongest evidence is inside you: the ribosome, which builds every protein in every cell, is a ribozyme, with RNA rather than protein catalysing the chemical step. ATP, coenzyme A and NAD are also RNA-like in structure. The problems are chemical: ribose is hard to make prebiotically and unstable once made, RNA degrades quickly in warm water, and no self-replicating ribozyme has been produced. It is a leading hypothesis, not an established account.',
    },
    questions: [
      {
        id: 'problem-solved',
        prompt: 'What problem does the RNA world hypothesis solve?',
        options: [
          {
            id: 'a',
            text: 'How amino acids formed on the early Earth',
          },
          {
            id: 'b',
            text: 'How the first cell membrane assembled',
          },
          {
            id: 'c',
            text: 'The chicken-and-egg problem: DNA cannot be copied without proteins and proteins cannot be made without DNA, whereas RNA can do both jobs',
            correct: true,
          },
          {
            id: 'd',
            text: 'How oxygen first appeared in the atmosphere',
          },
        ],
        explanation:
          'It removes the need for two interdependent molecules to appear together. One molecule doing both jobs badly is a better starting point than two doing them well and requiring each other.',
      },
      {
        id: 'ribosome',
        prompt: 'Why is the structure of the ribosome evidence for an RNA world?',
        options: [
          {
            id: 'a',
            text: 'Because ribosomes are found only in bacteria',
          },
          {
            id: 'b',
            text: 'Because the chemical step that joins amino acids is catalysed by RNA rather than by the proteins attached to the outside — a hard result to explain unless RNA came first',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because ribosomes are made entirely of RNA',
          },
          {
            id: 'd',
            text: 'Because ribosomes can replicate themselves',
          },
        ],
        explanation:
          'The ribosome has proteins, but they are structural; the catalysis is done by RNA. That was established when the structure was solved in 2000, and it is the single most-cited piece of evidence for the hypothesis.',
      },
      {
        id: 'status',
        prompt: 'What is the current status of the RNA world hypothesis?',
        options: [
          {
            id: 'a',
            text: 'Established, and no longer seriously questioned',
          },
          {
            id: 'b',
            text: 'Refuted by the difficulty of making ribose',
          },
          {
            id: 'c',
            text: 'A leading hypothesis with strong supporting evidence and serious unresolved chemistry, including the absence of any self-replicating ribozyme',
            correct: true,
          },
          {
            id: 'd',
            text: 'A minority view held by a few researchers',
          },
        ],
        explanation:
          'Popular accounts routinely present it as settled. It is the leading candidate and it has real problems, and some researchers propose that a simpler genetic polymer preceded RNA — which would preserve the logic while relieving the chemistry.',
      },
    ],
  },

  'did-information-come-before-modern-cells': {
    summary: {
      essential:
        'Information-first accounts propose that a replicating molecule came before metabolism and before cells: once something copies itself with variation, selection can begin, and everything else follows.',
      detailed:
        'The appeal is that it identifies the moment biology starts — heredity — rather than requiring a whole working cell to appear at once. The difficulty is the error threshold: copying must be accurate enough that information is not lost faster than selection can maintain it, and accurate copying requires a good catalyst, which requires a long sequence, which requires accurate copying. Escaping that circle is the central unsolved problem of the field.',
    },
    questions: [
      {
        id: 'error-threshold',
        prompt: 'What is the error threshold, and why does it matter?',
        options: [
          {
            id: 'a',
            text: 'The point at which a cell’s repair machinery fails',
          },
          {
            id: 'b',
            text: 'The sequence length above which copying errors destroy information faster than selection can maintain it — which caps how much an early replicator could encode',
            correct: true,
          },
          {
            id: 'c',
            text: 'The maximum number of mutations an organism can survive',
          },
          {
            id: 'd',
            text: 'The rate at which RNA spontaneously degrades in water',
          },
        ],
        explanation:
          'At a given copying fidelity, only sequences shorter than roughly the reciprocal of the error rate can be maintained. Early replicators copying badly could therefore only have been short, which limits how good a catalyst they could encode.',
      },
      {
        id: 'circle',
        prompt: 'What is the circularity that information-first accounts have to escape?',
        options: [
          {
            id: 'a',
            text: 'Proteins require DNA and DNA requires proteins',
          },
          {
            id: 'b',
            text: 'Accurate copying needs a good catalyst, a good catalyst needs a long sequence, and a long sequence needs accurate copying',
            correct: true,
          },
          {
            id: 'c',
            text: 'Cells require membranes and membranes require cells',
          },
          {
            id: 'd',
            text: 'Metabolism requires energy and energy requires metabolism',
          },
        ],
        explanation:
          'This is the error-threshold trap stated as a loop. Modern cells escape it by using proteins to proofread, reaching around 99.9999999 percent accuracy — but proteins are exactly what an RNA world does not yet have.',
      },
    ],
  },

  'could-metabolism-have-come-first': {
    summary: {
      essential:
        'Metabolism-first accounts propose that a self-sustaining network of chemical reactions came before any replicating molecule. Nothing in the network is the replicator; the network as a whole makes more of itself.',
      detailed:
        'The version with the strongest chemical case puts this in an alkaline hydrothermal vent, where mineral surfaces provide catalysis and a natural proton gradient across the vent wall provides energy — no encoding required. The weakness is heredity: such a network can persist and can vary in composition, but it has no obvious way to store a sequence, so how it could evolve open-endedly rather than merely continue is unclear.',
    },
    questions: [
      {
        id: 'unit',
        prompt: 'In a metabolism-first account, what is the unit that reproduces?',
        options: [
          {
            id: 'a',
            text: 'A single catalytic molecule that copies itself',
          },
          {
            id: 'b',
            text: 'A membrane vesicle containing the reactions',
          },
          {
            id: 'c',
            text: 'The network as a whole — each member catalyses the formation of the next, so the closed loop makes more of itself',
            correct: true,
          },
          {
            id: 'd',
            text: 'A mineral surface that templates its own structure',
          },
        ],
        explanation:
          'This is what makes the idea hard to picture: nothing in the set is the replicator. Remove one member and the loop opens and the whole set collapses, which is the clearest demonstration that the network is the unit.',
      },
      {
        id: 'weakness',
        prompt: 'What is the main weakness of metabolism-first accounts?',
        options: [
          {
            id: 'a',
            text: 'They require conditions that did not exist on the early Earth',
          },
          {
            id: 'b',
            text: 'They cannot explain where the energy comes from',
          },
          {
            id: 'c',
            text: 'They have no clear way to store a sequence, so it is unclear how such a system could evolve open-endedly rather than merely persist',
            correct: true,
          },
          {
            id: 'd',
            text: 'They have been ruled out by laboratory experiments',
          },
        ],
        explanation:
          'Energy is the strength of these accounts, not the weakness — the vent gradient supplies it geologically. Heredity is the gap, and it is the mirror image of the information-first problem, which has heredity and struggles with energy and chemistry.',
      },
    ],
  },

  'hydrothermal-vents-and-other-possible-origins': {
    summary: {
      essential:
        'Several settings on the early Earth could plausibly have hosted the origin of life: alkaline hydrothermal vents, surface pools that wet and dry, ice with unfrozen brine channels, and delivery of material from space. Each has a strong case and a serious problem.',
      detailed:
        'Vents supply a natural proton gradient and catalytic minerals but dilute everything and destabilise RNA. Surface pools concentrate solutes and drive polymerisation but expose the products to destructive ultraviolet and require land that was scarce. Ice stabilises RNA and concentrates solutes but runs slowly and needs a cold early Earth that conflicts with most reconstructions. This is a live disagreement between serious researchers, not a consensus with dissenters.',
    },
    questions: [
      {
        id: 'vent-strength',
        prompt: 'What is the strongest argument for the alkaline vent hypothesis?',
        options: [
          {
            id: 'a',
            text: 'Vents are the only place where organic molecules can form',
          },
          {
            id: 'b',
            text: 'They supply a natural proton gradient across mineral walls — the same energy currency all cells use — along with iron-sulphur catalysts resembling those in ancient enzymes',
            correct: true,
          },
          {
            id: 'c',
            text: 'RNA is most stable in warm alkaline water',
          },
          {
            id: 'd',
            text: 'Vent fluids concentrate organic molecules efficiently',
          },
        ],
        explanation:
          'Chemiosmosis is universal and appears to predate LUCA, and a vent supplies a proton gradient for free. Dilution is precisely the vent hypothesis’s weakness, and RNA is less stable, not more, in warm alkaline conditions.',
      },
      {
        id: 'pools-tradeoff',
        prompt: 'What is the trade-off in the surface-pool hypothesis?',
        options: [
          {
            id: 'a',
            text: 'Pools are too cold for the chemistry to run',
          },
          {
            id: 'b',
            text: 'Wet–dry cycling concentrates solutes and drives polymerisation, but the unscreened ultraviolet light that also drives some reactions destroys many of the products',
            correct: true,
          },
          {
            id: 'c',
            text: 'Pools cannot form without an ozone layer',
          },
          {
            id: 'd',
            text: 'Pools existed only after life had already appeared',
          },
        ],
        explanation:
          'The same ultraviolet flux that supplies energy for several key prebiotic reactions damages the products. That, plus the scarcity of exposed land on a mostly ocean-covered early Earth, is what keeps the hypothesis from winning outright.',
      },
    ],
  },

  'protocells-and-membranes': {
    summary: {
      essential:
        'Molecules with a water-loving head and a water-hating tail assemble themselves into closed compartments without any assistance. Above a critical concentration, tails hide from water by facing each other, heads face outward, and the resulting sheet closes into a sphere because an edge would expose tails.',
      detailed:
        'That gives an inside and an outside — the minimum requirement for a cell — for free. Fatty acid vesicles have been shown to grow when fed more material and to divide when agitated, and they can encapsulate RNA. What has not been demonstrated is a vesicle whose contents replicate as it divides, so that daughters inherit. Compartmentalisation is the part of the origin-of-life problem that is going well.',
    },
    questions: [
      {
        id: 'self-assembly',
        prompt: 'Why does a membrane form itself without assistance?',
        options: [
          {
            id: 'a',
            text: 'Because the molecules are electrically attracted to each other',
          },
          {
            id: 'b',
            text: 'Because each molecule has a water-loving head and a water-repelling tail, and there is exactly one arrangement that satisfies both ends',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because proteins in the water assemble them',
          },
          {
            id: 'd',
            text: 'Because the water evaporates and leaves them stacked',
          },
        ],
        explanation:
          'The shape of the molecule does all the work. Tails facing each other and heads facing water is the lowest-energy arrangement, and the sheet closes into a sphere because an exposed edge would leave tails in contact with water.',
      },
      {
        id: 'not-done',
        prompt: 'What has not yet been achieved with protocells?',
        options: [
          {
            id: 'a',
            text: 'Getting vesicles to form spontaneously',
          },
          {
            id: 'b',
            text: 'Getting vesicles to grow when supplied with more material',
          },
          {
            id: 'c',
            text: 'Encapsulating RNA inside a vesicle',
          },
          {
            id: 'd',
            text: 'Getting the contents to replicate as the vesicle divides, so that daughter vesicles inherit',
            correct: true,
          },
        ],
        explanation:
          'The first three have all been demonstrated. Inheritance across division is the missing piece, and it is what would turn a growing droplet into something a population geneticist would recognise.',
      },
    ],
  },

  'how-chemistry-could-become-biology': {
    summary: {
      essential:
        'No demonstrated route runs from simple molecules to a living cell. What exists is a set of successful fragments — building blocks, complete nucleotides, self-assembling membranes — with real gaps between them, sometimes under conditions that are not compatible with each other.',
      detailed:
        'The ends of the sequence are solid and the middle is not. Building blocks form readily; compartments form themselves; and a population with heredity, variation and differential survival would be under natural selection and therefore alive. Between them sit two steps nobody has taken: long chains forming reliably without enzymes, and a molecule that copies itself accurately enough to sustain a lineage.',
    },
    questions: [
      {
        id: 'honest',
        prompt: 'What is the honest current state of origin-of-life research?',
        options: [
          {
            id: 'a',
            text: 'A complete pathway has been demonstrated in the laboratory',
          },
          {
            id: 'b',
            text: 'The problem has been shown to be insoluble',
          },
          {
            id: 'c',
            text: 'Several individual steps have been achieved, sometimes under mutually incompatible conditions, with major gaps remaining — most importantly self-replication',
            correct: true,
          },
          {
            id: 'd',
            text: 'Only the very first step, forming amino acids, has been achieved',
          },
        ],
        explanation:
          'Presenting the field as either solved or hopeless both misrepresent it. There has been real progress, particularly on nucleotide synthesis and compartmentalisation, and there are gaps that four decades of concentrated effort have not closed.',
      },
      {
        id: 'when-biology',
        prompt: 'At what point would the process count as biology rather than chemistry?',
        options: [
          {
            id: 'a',
            text: 'When a membrane forms around the reactions',
          },
          {
            id: 'b',
            text: 'When the system begins to consume energy',
          },
          {
            id: 'c',
            text: 'When there is heredity, variation and differential survival, since natural selection then takes over',
            correct: true,
          },
          {
            id: 'd',
            text: 'When the molecules involved become large enough',
          },
        ],
        explanation:
          'Those three ingredients are what natural selection requires. Once they are all present the system is under selection whether or not anyone calls it alive, and the subsequent history is evolutionary rather than merely chemical.',
      },
    ],
  },

  'when-did-the-first-life-appear': {
    summary: {
      essential:
        'Life is at least 3.4 billion years old on the strength of accepted evidence, and probably older. Claims reach back to 4.1 billion years, and every one of those older claims is contested.',
      detailed:
        'The uncertainty is not about dating but about interpretation: layered structures and biological-looking carbon isotope ratios can both be produced without life, so a claim needs several independent lines of evidence pointing the same way. What can be said with confidence is that life appeared early, within a few hundred million years of the planet becoming habitable — though whether that implies life arises readily is a weaker inference than it first appears, because we could only be observing from a planet where it happened.',
    },
    questions: [
      {
        id: 'early',
        prompt:
          'What does the early appearance of life on Earth tell us about how easily life arises?',
        options: [
          {
            id: 'a',
            text: 'It proves life arises readily wherever conditions permit',
          },
          {
            id: 'b',
            text: 'It proves life required an extraordinary sequence of accidents',
          },
          {
            id: 'c',
            text: 'Less than it seems: we could only be observing from a planet where life appeared, so an early origin is what we would find whether the process was common or a fluke',
            correct: true,
          },
          {
            id: 'd',
            text: 'Nothing, since the dating is unreliable',
          },
        ],
        explanation:
          'This is an anthropic selection effect, and it is unavoidable with a sample of one. Bayesian analyses find the early-origin argument gives only modest support for a high abiogenesis rate. A second independent origin found anywhere would change the situation completely.',
      },
      {
        id: 'accepted',
        prompt: 'What is the oldest widely accepted evidence of life?',
        options: [
          {
            id: 'a',
            text: 'A 4.1-billion-year carbon inclusion in a zircon crystal',
          },
          {
            id: 'b',
            text: 'The 3.7-billion-year Isua structures in Greenland',
          },
          {
            id: 'c',
            text: 'Stromatolites from Western Australia, around 3.4 to 3.5 billion years old',
            correct: true,
          },
          {
            id: 'd',
            text: 'Banded iron formations from 2.4 billion years ago',
          },
        ],
        explanation:
          'The Australian stromatolites are accepted because several independent lines of evidence agree. The Isua structures were reinterpreted as rock deformation in 2018 and remain disputed; the zircon inclusion is a single speck in a single grain.',
      },
    ],
  },

  'what-might-the-first-organisms-have-been-like': {
    summary: {
      essential:
        'The first organisms were almost certainly single cells without a nucleus, living on chemical energy rather than sunlight, in an atmosphere with no oxygen. Beyond that, reconstruction becomes inference rather than observation.',
      detailed:
        'Nothing from before LUCA has left a trace, so anything said about the very first organisms is extrapolation backwards from what LUCA appears to have had, plus the constraints of the environment. What can be said is negative and useful: no oxygen, so no aerobic respiration; no ozone, so ultraviolet at the surface; and no other organisms, so no predation, no competition for prey, and no ecology in any recognisable sense.',
    },
    questions: [
      {
        id: 'energy',
        prompt: 'What did the first organisms most plausibly live on?',
        options: [
          {
            id: 'a',
            text: 'Sunlight, via photosynthesis',
          },
          {
            id: 'b',
            text: 'Oxygen, via aerobic respiration',
          },
          {
            id: 'c',
            text: 'Chemical energy from reactions between rock, water and dissolved gases',
            correct: true,
          },
          {
            id: 'd',
            text: 'Organic matter produced by other organisms',
          },
        ],
        explanation:
          'Photosynthesis is a sophisticated later invention, aerobic respiration requires oxygen that did not exist, and there were no other organisms to feed on. Chemical energy from geological sources is what was available.',
      },
      {
        id: 'limits',
        prompt:
          'Why is reconstructing the first organisms so much harder than reconstructing LUCA?',
        options: [
          {
            id: 'a',
            text: 'Because LUCA left fossils and the first organisms did not',
          },
          {
            id: 'b',
            text: 'Because LUCA can be reconstructed from features shared by all living things, whereas anything before LUCA left no descendants and therefore no genetic record',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because the first organisms were chemically identical to non-living matter',
          },
          {
            id: 'd',
            text: 'Because LUCA is much more recent than the first organisms',
          },
        ],
        explanation:
          'Comparative genetics works backwards from survivors. Lineages that died out before LUCA have no survivors, so that method cannot reach them and there is nothing else that can.',
      },
    ],
  },

  'luca-the-last-universal-common-ancestor': {
    summary: {
      essential:
        'LUCA is the most recent organism from which every living thing descends. It can be reconstructed, in part, from the features shared by all life today — a genetic code, ribosomes, ATP as an energy currency, and a proton gradient across a membrane.',
      detailed:
        'Roughly 350 gene families can be traced to it, against several thousand in a modern bacterium, and the reconstructed set is heavy with enzymes using hydrogen, carbon dioxide and iron-sulphur clusters — which points towards a hydrothermal setting. Two basic features are genuinely unknown: bacteria and archaea build their membranes from different, mirror-image lipids, and use unrelated enzymes to copy DNA. Either LUCA had neither, or both lineages replaced them, and neither answer is comfortable.',
    },
    questions: [
      {
        id: 'how-known',
        prompt: 'How is anything known about an organism that left no fossils?',
        options: [
          {
            id: 'a',
            text: 'From ancient DNA recovered from Archean rock',
          },
          {
            id: 'b',
            text: 'From features shared by all living things today, which are most simply explained as inherited from a common ancestor',
            correct: true,
          },
          {
            id: 'c',
            text: 'From laboratory experiments recreating early conditions',
          },
          {
            id: 'd',
            text: 'From the chemical composition of the oldest sedimentary rocks',
          },
        ],
        explanation:
          'The method is comparative. A feature present in bacteria, archaea and eukaryotes alike was most likely present in their shared ancestor, and the universal genetic code and ribosome structure are the clearest examples.',
      },
      {
        id: 'unknown',
        prompt: 'Which basic feature of LUCA is genuinely unknown?',
        options: [
          {
            id: 'a',
            text: 'Whether it used a genetic code',
          },
          {
            id: 'b',
            text: 'Whether it used ATP',
          },
          {
            id: 'c',
            text: 'What kind of membrane it had, since bacteria and archaea build theirs from different, mirror-image lipids using unrelated enzymes',
            correct: true,
          },
          {
            id: 'd',
            text: 'Whether it had ribosomes',
          },
        ],
        explanation:
          'The genetic code, ribosomes and ATP are universal and confidently inferred. The membrane and the DNA replication machinery are not shared, which is the biggest open problem in LUCA reconstruction and hints that LUCA may have been less cell-like than the name suggests.',
      },
    ],
  },

  'why-luca-was-not-the-first-life': {
    summary: {
      essential:
        'LUCA is the most recent common ancestor of everything that survived — not the first organism. Lineages that existed before it, or alongside it and died out, were real life that left no descendants and therefore no genetic record.',
      detailed:
        'This distinction matters because LUCA already had a genetic code, ribosomes and ATP, which are sophisticated and clearly the product of a long prior history. How long that history was is unknown; the interval between the origin of life and LUCA could be tens of millions of years or hundreds. Whatever happened in it is unrecoverable by the comparative method, because that method works only backwards from survivors.',
    },
    questions: [
      {
        id: 'definition',
        prompt: 'What exactly is LUCA?',
        options: [
          {
            id: 'a',
            text: 'The first organism to appear on Earth',
          },
          {
            id: 'b',
            text: 'The first organism with a cell membrane',
          },
          {
            id: 'c',
            text: 'The most recent organism from which every living thing today descends',
            correct: true,
          },
          {
            id: 'd',
            text: 'The common ancestor of bacteria and archaea, but not of eukaryotes',
          },
        ],
        explanation:
          'The word last in the name is doing important work: it means most recent, not first. Anything that lived before LUCA, or beside it without surviving, is outside what genetics can reach.',
      },
      {
        id: 'sophisticated',
        prompt: 'What does LUCA’s sophistication imply?',
        options: [
          {
            id: 'a',
            text: 'That life must have been created rather than evolved',
          },
          {
            id: 'b',
            text: 'That LUCA arose immediately after the planet cooled',
          },
          {
            id: 'c',
            text: 'That a long prior history of evolution preceded it, since a genetic code, ribosomes and ATP-based energy handling are not simple starting points',
            correct: true,
          },
          {
            id: 'd',
            text: 'That the genetic code arose by chance in a single step',
          },
        ],
        explanation:
          'LUCA is a well-developed organism, not a primitive one. Everything it already had had to come from somewhere, and that somewhere is precisely the interval the record cannot reach.',
      },
    ],
  },
};
