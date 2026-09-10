/**
 * Recaps for early life — cells, energy, oxygen and the two mergers.
 *
 * The recurring correction in this file is against reading the microbial world
 * as a preamble. Three billion years of single-celled life is not a slow start;
 * it is most of the history of life, and the inventions made in it — the
 * genetic code, photosynthesis, respiration, nitrogen fixation — are the ones
 * everything since has depended on.
 */
import type { RecapsByTopic } from '../schema/recap';

export const LIFE_EARLY_RECAPS: RecapsByTopic = {
  'the-first-cells': {
    summary: {
      essential:
        'The first cells were single, small, without a nucleus, and dependent on chemical energy from their surroundings. They had a membrane, a genome, ribosomes and a way of turning a chemical gradient into usable energy — and essentially nothing else.',
      detailed:
        'A cell is not merely a bag of chemistry. The membrane makes an inside, which allows concentration gradients, which allow energy storage; the genome makes heredity possible; the ribosome makes proteins to specification. Those three together are what all life since has been variations on, which is why they can be confidently attributed to LUCA and why anything simpler is hard to call a cell.',
    },
    questions: [
      {
        id: 'membrane-purpose',
        prompt: 'Beyond keeping the contents in, what does a membrane make possible?',
        options: [
          {
            id: 'a',
            text: 'Protection from ultraviolet light',
          },
          {
            id: 'b',
            text: 'Movement towards food',
          },
          {
            id: 'c',
            text: 'A difference in concentration between inside and outside, which can be used to store and release energy',
            correct: true,
          },
          {
            id: 'd',
            text: 'Reproduction by division',
          },
        ],
        explanation:
          'The gradient is the point. Pumping ions across a membrane stores energy that can be released by letting them flow back, and every living cell uses exactly this mechanism — which is why chemiosmosis appears to be older than LUCA.',
      },
      {
        id: 'minimum',
        prompt:
          'Which three components are shared by every cell alive and confidently attributed to LUCA?',
        options: [
          {
            id: 'a',
            text: 'A nucleus, mitochondria and a cell wall',
          },
          {
            id: 'b',
            text: 'A membrane, a genome and ribosomes',
            correct: true,
          },
          {
            id: 'c',
            text: 'Chloroplasts, a nucleus and DNA',
          },
          {
            id: 'd',
            text: 'A cell wall, flagella and a genome',
          },
        ],
        explanation:
          'Nuclei, mitochondria and chloroplasts are eukaryotic and much later. The membrane, the genome and the ribosome are universal, which is what allows them to be traced back to the common ancestor.',
      },
    ],
  },

  'how-cells-obtained-energy': {
    summary: {
      essential:
        'Cells store energy as a difference in proton concentration across a membrane, then let the protons flow back through a rotating molecular machine that assembles ATP. This mechanism, called chemiosmosis, is universal.',
      detailed:
        'Peter Mitchell proposed it in 1961 and spent a decade being disbelieved, because everyone was looking for a chemical intermediate rather than a gradient. The rotation of ATP synthase was eventually filmed directly. Fermentation, which needs no external electron acceptor, yields about two ATP per glucose; respiration, which passes electrons down a chain while pumping protons, yields around thirty — which is why the arrival of oxygen mattered so much.',
    },
    questions: [
      {
        id: 'chemiosmosis',
        prompt: 'How does a cell actually make most of its ATP?',
        options: [
          {
            id: 'a',
            text: 'By breaking chemical bonds in glucose directly',
          },
          {
            id: 'b',
            text: 'By absorbing energy from surrounding heat',
          },
          {
            id: 'c',
            text: 'By pumping protons across a membrane and letting them flow back through a rotating enzyme',
            correct: true,
          },
          {
            id: 'd',
            text: 'By transferring electrons directly to ATP molecules',
          },
        ],
        explanation:
          'The gradient is an intermediate energy store, and ATP synthase is a physical rotor turning at several hundred revolutions per second. Mitchell’s proposal was resisted precisely because it was spatial rather than chemical.',
      },
      {
        id: 'yield',
        prompt: 'Why does respiration yield so much more energy than fermentation?',
        options: [
          {
            id: 'a',
            text: 'Because oxygen contains stored chemical energy',
          },
          {
            id: 'b',
            text: 'Because passing electrons down a chain to a strong final acceptor extracts far more of the available energy, whereas fermentation leaves most of it in the waste products',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because fermentation destroys ATP as it produces it',
          },
          {
            id: 'd',
            text: 'Because respiration operates at a higher temperature',
          },
        ],
        explanation:
          'Fermentation breaks glucose only part-way and discards ethanol or lactate still containing most of the energy. Respiration takes the electrons all the way to oxygen, which has the largest available drop — about fifteen times the yield.',
      },
    ],
  },

  photosynthesis: {
    summary: {
      essential:
        'Photosynthesis uses light to strip electrons from something and build sugar from carbon dioxide. The earliest versions took electrons from hydrogen sulphide or dissolved iron; the version that changed the planet takes them from water.',
      detailed:
        'Water holds its electrons tightly, so splitting it required an awkward and expensive arrangement — two light-capturing systems in series, two photons per electron. It appears to have evolved exactly once. The pay-off was that the electron source became effectively unlimited, so productivity was no longer capped by the local supply of reduced chemicals, and estimates put the resulting increase in global primary production at two to three orders of magnitude.',
    },
    questions: [
      {
        id: 'electron-source',
        prompt: 'What distinguishes oxygenic from anoxygenic photosynthesis?',
        options: [
          {
            id: 'a',
            text: 'Oxygenic photosynthesis uses sunlight and anoxygenic uses chemical energy',
          },
          {
            id: 'b',
            text: 'Oxygenic photosynthesis takes electrons from water, releasing oxygen as waste; anoxygenic versions take them from more easily oxidised sources such as hydrogen sulphide',
            correct: true,
          },
          {
            id: 'c',
            text: 'Oxygenic photosynthesis occurs only in plants',
          },
          {
            id: 'd',
            text: 'Anoxygenic photosynthesis produces no sugar',
          },
        ],
        explanation:
          'Both build sugar from carbon dioxide using light. The difference is the electron donor, and switching from a locally scarce donor to a globally abundant one is what turned photosynthesis from a niche metabolism into a planetary force.',
      },
      {
        id: 'two-photosystems',
        prompt: 'Why does oxygenic photosynthesis need two photosystems in series?',
        options: [
          {
            id: 'a',
            text: 'To capture two different colours of light',
          },
          {
            id: 'b',
            text: 'To produce twice as much sugar',
          },
          {
            id: 'c',
            text: 'Because water holds its electrons so tightly that a single photon cannot lift one far enough, so two are used in sequence',
            correct: true,
          },
          {
            id: 'd',
            text: 'To provide redundancy in case one system fails',
          },
        ],
        explanation:
          'The energy required to strip electrons from water exceeds what one photon supplies. The two-photosystem arrangement is expensive and awkward — which is consistent with its having evolved only once.',
      },
    ],
  },

  'the-oxygen-revolution': {
    summary: {
      essential:
        'Around 2.4 billion years ago oxygen began to accumulate in the atmosphere. It had been produced for a long time before that, but dissolved iron, volcanic gases and exposed rock consumed it as fast as it was made.',
      detailed:
        'The timing is pinned by sulphur isotopes: a distinctive fractionation pattern that requires ultraviolet light reaching the lower atmosphere, and therefore no ozone and no oxygen, disappears from the rock record at about 2.4 billion years. The banded iron formations that industrial civilisation mines are the record of the largest sink being paid off. Oxygen levels afterwards were still only around one percent of today’s, and stayed low for another billion and a half years.',
    },
    questions: [
      {
        id: 'sulphur',
        prompt: 'How is the timing of the Great Oxidation Event established?',
        options: [
          {
            id: 'a',
            text: 'From the first appearance of fossil cyanobacteria',
          },
          {
            id: 'b',
            text: 'From the total volume of banded iron formation deposited',
          },
          {
            id: 'c',
            text: 'From the disappearance of a sulphur isotope pattern that can only form when ultraviolet light reaches the lower atmosphere, and therefore only without oxygen',
            correct: true,
          },
          {
            id: 'd',
            text: 'From radiometric dating of the oldest oxidised soils',
          },
        ],
        explanation:
          'Mass-independent sulphur fractionation requires an atmosphere with essentially no oxygen and no ozone. Its sharp disappearance is the strongest single constraint, and it puts the transition at roughly 2.45 to 2.32 billion years ago.',
      },
      {
        id: 'name',
        prompt: 'Why does the name Great Oxidation Event somewhat oversell what happened?',
        options: [
          {
            id: 'a',
            text: 'Because oxygen levels actually fell during the event',
          },
          {
            id: 'b',
            text: 'Because oxygen afterwards was still only about one percent of present levels and stayed low for another billion and a half years',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because the oxygen was not biologically produced',
          },
          {
            id: 'd',
            text: 'Because it happened in the ocean rather than the atmosphere',
          },
        ],
        explanation:
          'It marks the end of a long instability rather than a sudden filling of the air. The rise to modern levels was a second, later transition in the Neoproterozoic, and it is that one which lines up with the appearance of animals.',
      },
    ],
  },

  'oxygen-poison-and-opportunity': {
    summary: {
      essential:
        'Oxygen is highly reactive, and for two billion years it was straightforwardly toxic — it damages proteins, membranes and DNA. What changed was not oxygen but the appearance of enzymes that neutralise it.',
      detailed:
        'Once an organism could survive oxygen, the same reactivity became the largest energy source available: aerobic respiration extracts roughly fifteen times more energy from the same food than fermentation. Anaerobes did not disappear. They retreated into sediment, deep rock and the guts of animals, where they remain enormously abundant, and several of them are the reason nitrogen cycles at all.',
    },
    questions: [
      {
        id: 'both',
        prompt: 'How can oxygen be both a poison and an opportunity?',
        options: [
          {
            id: 'a',
            text: 'It is toxic in high concentrations and useful in low ones',
          },
          {
            id: 'b',
            text: 'The same chemical reactivity that damages cellular molecules also makes it the best available electron acceptor, so it became an energy source once organisms evolved defences against it',
            correct: true,
          },
          {
            id: 'c',
            text: 'It is toxic to bacteria but useful to eukaryotes',
          },
          {
            id: 'd',
            text: 'It was toxic only until the ozone layer formed',
          },
        ],
        explanation:
          'Reactivity is the single property doing both jobs. Enzymes such as catalase and superoxide dismutase neutralise the damaging by-products, and once those exist the reactivity becomes a resource.',
      },
      {
        id: 'anaerobes',
        prompt: 'What happened to anaerobic organisms after oxygen appeared?',
        options: [
          {
            id: 'a',
            text: 'They went extinct',
          },
          {
            id: 'b',
            text: 'They all evolved oxygen tolerance',
          },
          {
            id: 'c',
            text: 'They retreated into environments where oxygen does not reach — sediment, deep rock, and animal guts — where they remain extremely abundant',
            correct: true,
          },
          {
            id: 'd',
            text: 'They became the ancestors of eukaryotes',
          },
        ],
        explanation:
          'Calling it a mass extinction overstates it. Anaerobes lost the surface and kept everything else, and some of them run steps in the nitrogen and sulphur cycles that no aerobe can perform.',
      },
    ],
  },

  'the-rise-of-eukaryotic-cells': {
    summary: {
      essential:
        'Eukaryotic cells — those with a nucleus and internal compartments — appear to have arisen once, from a merger between an archaeal host and a bacterium. Every plant, animal, fungus and protist descends from that single event.',
      detailed:
        'Bacteria and archaea have been evolving alongside eukaryotes for two billion years, with far larger populations and faster generation times, and have never independently produced anything comparable. The tree also changed recently: eukaryotes are now placed within the archaea rather than as a third domain, following the discovery of Asgard archaea carrying genes previously thought eukaryote-specific.',
    },
    questions: [
      {
        id: 'once',
        prompt: 'What is the evidence that complex cells arose only once?',
        options: [
          {
            id: 'a',
            text: 'No eukaryote fossils are found before 1.8 billion years ago',
          },
          {
            id: 'b',
            text: 'All eukaryotes share a set of features and a mitochondrial ancestry tracing to a single bacterial acquisition, and no prokaryote lineage has independently produced anything comparable in two billion years',
            correct: true,
          },
          {
            id: 'c',
            text: 'Laboratory experiments have failed to reproduce the merger',
          },
          {
            id: 'd',
            text: 'Eukaryotes all have the same number of chromosomes',
          },
        ],
        explanation:
          'Shared ancestry of the mitochondrion is the key evidence — even eukaryotes lacking mitochondria turn out to have lost them secondarily. The absence of independent repeats despite enormous opportunity is what suggests the transition was hard.',
      },
      {
        id: 'asgard',
        prompt: 'How did the discovery of Asgard archaea change the picture?',
        options: [
          {
            id: 'a',
            text: 'It showed eukaryotes are older than previously thought',
          },
          {
            id: 'b',
            text: 'It moved eukaryotes from being a third domain to being a branch within the archaea, with the mitochondrion contributed separately by a bacterium',
            correct: true,
          },
          {
            id: 'c',
            text: 'It showed that mitochondria evolved independently several times',
          },
          {
            id: 'd',
            text: 'It disproved the endosymbiotic origin of mitochondria',
          },
        ],
        explanation:
          'Lokiarchaeum, found in Arctic seafloor sediment in 2015, carried genes thought to be eukaryote-specific. Further Asgard groups followed and one was cultured in 2020 after twelve years, and the two-domain tree is now the mainstream picture.',
      },
    ],
  },

  endosymbiosis: {
    summary: {
      essential:
        'Mitochondria and chloroplasts were once free-living bacteria. They were taken up by another cell and never left, and most of their genes have since migrated to the host genome.',
      detailed:
        'The evidence is direct: they have their own circular DNA, ribosomes of the bacterial rather than eukaryotic type, a double membrane whose inner layer has bacterial lipids, they divide by splitting rather than being assembled, and they are inherited from one parent only. Antibiotics that target bacterial ribosomes affect mitochondria too, which is a clinical fact and a phylogenetic argument at once. How the original uptake happened is not known.',
    },
    questions: [
      {
        id: 'evidence',
        prompt:
          'Which observation most directly supports the endosymbiotic origin of mitochondria?',
        options: [
          {
            id: 'a',
            text: 'They are found in all eukaryotic cells',
          },
          {
            id: 'b',
            text: 'They are the site of ATP production',
          },
          {
            id: 'c',
            text: 'They have their own circular DNA and bacterial-type ribosomes, and divide by splitting rather than being built by the cell',
            correct: true,
          },
          {
            id: 'd',
            text: 'They have a folded inner membrane',
          },
        ],
        explanation:
          'Carrying a separate genome of bacterial type is very hard to explain any other way. Lynn Margulis argued this in 1967 against considerable resistance, and sequencing settled it.',
      },
      {
        id: 'unknown',
        prompt: 'What about the origin of mitochondria remains unknown?',
        options: [
          {
            id: 'a',
            text: 'Whether they were originally bacteria',
          },
          {
            id: 'b',
            text: 'Whether they have their own DNA',
          },
          {
            id: 'c',
            text: 'How the bacterium came to be inside the host cell in the first place',
            correct: true,
          },
          {
            id: 'd',
            text: 'Whether they are inherited maternally',
          },
        ],
        explanation:
          'Engulfment without digestion, an initially parasitic relationship, and a metabolic partnership between neighbours growing progressively closer are all argued for. The fossil record has nothing to say about it.',
      },
    ],
  },

  'why-complex-cells-were-such-a-major-step': {
    summary: {
      essential:
        'A eukaryotic cell can afford tens of thousands of genes, internal structure and elaborate regulation. A bacterium cannot, and the reason appears to be energetic.',
      detailed:
        'A bacterium generates energy across its outer membrane, whose area scales with the square of its size while its costs scale with the cube — so getting bigger makes its energy budget per gene worse. A eukaryote generates energy on hundreds or thousands of internal mitochondrial membranes, each with its own small genome controlling it locally, which lifts that constraint. The strong version of this argument is contested; the correlation between acquiring mitochondria and expanding the genome is not.',
    },
    questions: [
      {
        id: 'scaling',
        prompt: 'Why does simply getting bigger not solve a bacterium’s energy problem?',
        options: [
          {
            id: 'a',
            text: 'Larger bacteria cannot absorb nutrients fast enough',
          },
          {
            id: 'b',
            text: 'Membrane area grows with the square of size while volume and costs grow with the cube, so energy available per gene falls as it grows',
            correct: true,
          },
          {
            id: 'c',
            text: 'Larger bacteria are more vulnerable to predation',
          },
          {
            id: 'd',
            text: 'Larger cells cannot divide',
          },
        ],
        explanation:
          'This is a geometric constraint, not a biological accident. It is why large bacteria exist but none of them has evolved a genome anywhere near eukaryotic size.',
      },
      {
        id: 'contested',
        prompt: 'How should Lane and Martin’s energetic argument be presented?',
        options: [
          {
            id: 'a',
            text: 'As an established fact that settles the origin of complexity',
          },
          {
            id: 'b',
            text: 'As a fringe view rejected by most biologists',
          },
          {
            id: 'c',
            text: 'As an influential argument whose strong form — that mitochondria were a prerequisite rather than merely helpful — is disputed, though the correlation it rests on is not',
            correct: true,
          },
          {
            id: 'd',
            text: 'As disproved by the discovery of Asgard archaea',
          },
        ],
        explanation:
          'Critics point out that the result depends on how the comparison is normalised and that some bacteria maintain extensive internal membranes. Distinguishing the disputed claim from the undisputed correlation is exactly the kind of separation this atlas is for.',
      },
    ],
  },

  'multicellular-life': {
    summary: {
      essential:
        'Multicellularity has evolved independently at least twenty-five times in simple form, and perhaps six times with genuinely differentiated tissues. The first step is easy; the second is not.',
      detailed:
        'Clusters of cells form readily, and have been evolved in the laboratory from single-celled yeast within about sixty transfers simply by selecting whatever settled fastest. The hard step is the one where almost all cells give up their own reproduction to support a body they will not pass on — which is stable only because the cells of a body are near-identical clones, and which is why complex multicellularity has arisen only in lineages that develop from a single cell each generation.',
    },
    questions: [
      {
        id: 'first-step',
        prompt: 'What does the yeast experiment demonstrate?',
        options: [
          {
            id: 'a',
            text: 'That multicellularity requires millions of years to evolve',
          },
          {
            id: 'b',
            text: 'That heritable multicellular clusters can evolve from single-celled ancestors within tens of generations under simple selection',
            correct: true,
          },
          {
            id: 'c',
            text: 'That multicellularity requires a predator to be present',
          },
          {
            id: 'd',
            text: 'That yeast were originally multicellular and lost it',
          },
        ],
        explanation:
          'Ratcliff and colleagues selected simply by keeping whatever settled fastest in a tube. Snowflake clusters appeared within about sixty transfers, with some cells dying in a programmed way to help the cluster reproduce — a rudimentary division of labour.',
      },
      {
        id: 'hard-step',
        prompt: 'What makes the transition to complex multicellularity difficult?',
        options: [
          {
            id: 'a',
            text: 'Cells must evolve the ability to stick together',
          },
          {
            id: 'b',
            text: 'The organism must become large enough to be seen',
          },
          {
            id: 'c',
            text: 'Almost all cells must give up their own reproduction, which is stable only when they are near-identical clones',
            correct: true,
          },
          {
            id: 'd',
            text: 'Cells must evolve a nucleus first',
          },
        ],
        explanation:
          'From a cell’s point of view, never reproducing is an extraordinary arrangement. It works because a liver cell helping the body reproduce is propagating copies of its own genes through the germ line — which requires the body to develop from a single cell.',
      },
    ],
  },

  'when-cells-began-cooperating': {
    summary: {
      essential:
        'A multicellular body is a truce. Every cell in it could in principle divide as fast as its resources allow, and almost all of them do not — because they are clones, so helping the body reproduce propagates their own genes.',
      detailed:
        'The truce is not perfect. Cells accumulate mutations as they divide, and eventually one acquires a change that lets it ignore the stop signals. From that moment it out-reproduces its neighbours and its descendants inherit the advantage: that is what a tumour is, and it is natural selection running inside one organism over years. The extensive machinery that suppresses it — checkpoints, programmed cell death, division limits, immune surveillance — is the evidence that the conflict is continuous.',
    },
    questions: [
      {
        id: 'why-stable',
        prompt: 'Why do somatic cells cooperate rather than compete?',
        options: [
          {
            id: 'a',
            text: 'Because the nervous system controls them',
          },
          {
            id: 'b',
            text: 'Because they lack the machinery to divide independently',
          },
          {
            id: 'c',
            text: 'Because all cells in a body descend from one fertilised egg and share the same genes, so helping the body reproduce propagates their own genes',
            correct: true,
          },
          {
            id: 'd',
            text: 'Because they are physically prevented from moving',
          },
        ],
        explanation:
          'Genetic identity is what removes the conflict of interest. Where relatedness within a group of cells is lower — as in aggregating slime moulds — cheater strains appear and have to be suppressed by other means.',
      },
      {
        id: 'cancer',
        prompt: 'In evolutionary terms, what is cancer?',
        options: [
          {
            id: 'a',
            text: 'A failure of the immune system to recognise foreign cells',
          },
          {
            id: 'b',
            text: 'Damage caused by external agents that kill cells',
          },
          {
            id: 'c',
            text: 'Natural selection operating inside an organism, favouring cell lineages that have stopped obeying the controls on division',
            correct: true,
          },
          {
            id: 'd',
            text: 'A reversion of cells to a more primitive state',
          },
        ],
        explanation:
          'Variation, heredity and differential reproduction are all present among the cells of a body, so selection applies. It is also why tumours evolve resistance to treatment: a drug is a selection pressure and a tumour is a diverse population.',
      },
    ],
  },

  'the-cambrian-explosion': {
    summary: {
      essential:
        'Most animal body plans appear in the fossil record within roughly twenty million years starting about 538 million years ago. It is a real event, and two things make it look larger than it was.',
      detailed:
        'Molecular clocks place the divergences of those same lineages substantially earlier, in the Ediacaran or before — the animals existed, small and soft, and did not fossilise. What changed is that animals started making mineralised skeletons, largely in response to predation, and that oxygen rose enough to support larger and more active bodies. So the record shows a genuine ecological revolution and also an artefact of what could be preserved, and the relative size of the two effects is still argued.',
    },
    questions: [
      {
        id: 'molecular',
        prompt: 'What do molecular clock estimates suggest about animal origins?',
        options: [
          {
            id: 'a',
            text: 'That animals appeared exactly when the fossil record shows',
          },
          {
            id: 'b',
            text: 'That the fossil dates are too old',
          },
          {
            id: 'c',
            text: 'That the lineages diverged substantially earlier than their first fossils, meaning small soft-bodied animals existed before the Cambrian without leaving a record',
            correct: true,
          },
          {
            id: 'd',
            text: 'That all animal phyla diverged simultaneously',
          },
        ],
        explanation:
          'Molecular clocks count genetic differences and calibrate against known fossils. They consistently give earlier divergences than the fossil record, which is why the explosion is partly a preservation phenomenon.',
      },
      {
        id: 'skeletons',
        prompt: 'Why did animals start making hard parts?',
        options: [
          {
            id: 'a',
            text: 'Because seawater chemistry changed to make it easier',
          },
          {
            id: 'b',
            text: 'Because they needed protection from ultraviolet light',
          },
          {
            id: 'c',
            text: 'Largely in response to predation — once some organisms made a living eating others, everything was under pressure to become harder to eat',
            correct: true,
          },
          {
            id: 'd',
            text: 'Because increased gravity required structural support',
          },
        ],
        explanation:
          'Seawater chemistry and oxygen both contributed to making it possible, but predation is what made it advantageous. Mineralised skeletons appear across many unrelated groups within a few tens of millions of years, which is a response rather than a coincidence.',
      },
    ],
  },

  'why-life-became-so-diverse': {
    summary: {
      essential:
        'Diversity accumulates because populations that stop exchanging genes drift apart, because different ways of making a living are rewarded differently, and — most importantly — because each new kind of organism creates new opportunities for others.',
      detailed:
        'That third point is what makes the process compound rather than merely repeat. Once there are trees, there is room for things that eat leaves, bore into wood, live in bark, and eat the things that eat leaves. Flowering plants are the clearest case: their radiation was accompanied by an explosion of associated insects, and a large fraction of all animal species on Earth are insects associated with flowering plants.',
    },
    questions: [
      {
        id: 'compound',
        prompt: 'What makes diversity compound rather than simply accumulate?',
        options: [
          {
            id: 'a',
            text: 'Mutation rates increase as diversity rises',
          },
          {
            id: 'b',
            text: 'Larger populations produce more variants',
          },
          {
            id: 'c',
            text: 'Each new kind of organism is itself an environment, opening new ways of making a living for other species',
            correct: true,
          },
          {
            id: 'd',
            text: 'Extinction rates fall as diversity rises',
          },
        ],
        explanation:
          'Life is its own environment. A single new lineage — flowering plants, say — can open a dozen new niches for things that eat it, live in it, pollinate it or parasitise the things that eat it.',
      },
      {
        id: 'count',
        prompt: 'How many eukaryote species are there?',
        options: [
          {
            id: 'a',
            text: 'About 1.5 million, all of them described',
          },
          {
            id: 'b',
            text: 'Probably around 8 to 10 million, of which roughly 1.5 million have been described',
            correct: true,
          },
          {
            id: 'c',
            text: 'Around 100 million',
          },
          {
            id: 'd',
            text: 'The number is precisely known from global surveys',
          },
        ],
        explanation:
          'Most species are small, live in places that are hard to sample, and take a specialist to describe. Estimates are extrapolations from sampled groups and disagree substantially; for prokaryotes the uncertainty spans orders of magnitude.',
      },
    ],
  },
};
