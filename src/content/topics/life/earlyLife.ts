/**
 * Origin & Evolution of Life — early cells, energy, oxygen and complexity.
 *
 * The organising claim of this group is that a handful of metabolic and
 * organisational innovations, each occurring once or a few times, determined
 * everything that followed. Photosynthesis rewrote the atmosphere.
 * Endosymbiosis produced the only lineage capable of building large organisms.
 * Multicellularity turned cells into tissues. Each is treated as an event with
 * causes and consequences rather than as a definition to memorise.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const LIFE = sectionId('life');
const REVIEWED = '2026-09-10';

export const LIFE_EARLY_TOPICS: readonly Topic[] = [
  {
    id: topicId('the-first-cells'),
    slug: 'the-first-cells',
    sectionId: LIFE,
    order: 15,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The first cells',
    subtitle: 'Why being enclosed changes everything about what is possible.',
    summary: {
      essential:
        'A cell is not just chemistry in a bag. The bag is what makes the chemistry work. Enclosing a set of reactions concentrates the ingredients, keeps the products where they can be used, allows an internal composition different from the outside, and — crucially — means that any improvement stays with the system that produced it.',
      detailed:
        'That last point is the reason cells exist. Without a boundary, a molecule that made its neighbourhood better would benefit every competitor equally. With one, the benefit is private, and selection can act.',
      technical:
        'Compartmentalisation solves the public-goods problem in prebiotic evolution. It also permits the maintenance of chemical disequilibrium across a barrier, which is the basis of chemiosmotic energy conservation — the mechanism used by every cell in all three domains.',
    },
    glossaryTerms: [glossaryTermId('protocell'), glossaryTermId('prokaryote')],
    related: [
      topicId('protocells-and-membranes'),
      topicId('how-cells-obtained-energy'),
      topicId('luca-the-last-universal-common-ancestor'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Suppose a molecule in the open ocean happens to catalyse a useful reaction. It produces something valuable — and that something immediately drifts away, diluting into an ocean, available to anything nearby. The molecule has done work and gained nothing relative to its competitors. This is the reason a boundary is not an optional refinement but a precondition.',
          detailed:
            'Enclose the same reaction in a membrane and the arithmetic reverses. The products stay put, at high concentration, where the catalyst can use them. If the compartment divides, both daughters carry the advantage. Selection now has a unit to act on: not a molecule, but a system.',
        },
      },
      {
        id: 'viz-cell',
        kind: 'visualization',
        visualizationId: visualizationId('first-cell-anatomy'),
      },
      {
        id: 'claim-membrane-energy',
        kind: 'claim',
        statement: {
          essential:
            'Every living cell, in every domain of life, generates energy by pumping protons across a membrane and letting them flow back through a molecular turbine. This universality means the mechanism was present in the last common ancestor.',
          detailed:
            'Peter Mitchell proposed this in 1961 and was widely disbelieved, because biochemists at the time expected energy to be stored in a chemical intermediate, not as a physical gradient across a barrier. He was right, and the enzyme that does it — ATP synthase — turned out to be a literal rotary motor, one of very few in biology.',
          technical:
            'The proton-motive force across a bacterial membrane is typically 150–200 mV, established by respiratory or photosynthetic electron transport chains. ATP synthase couples proton flow to rotation of a c-ring, driving conformational changes in the F₁ head that catalyse ADP phosphorylation, at roughly three protons per ATP.',
        },
        evidence: 'established',
        references: [referenceId('mitchell-1961-chemiosmosis')],
      },
      {
        id: 'two-domains',
        kind: 'prose',
        text: {
          essential:
            'The oldest split in the tree of life separates bacteria from archaea. They look similar under a microscope — both are small, both lack a nucleus — but their membranes are built from chemically different lipids, joined by different bonds, with mirror-image backbones. Their DNA-copying machinery differs too.',
          detailed:
            'This is a genuine puzzle. If LUCA had a membrane, why do its two descendant groups have incompatible ones? One answer is that LUCA lived in a mineral compartment and had not yet fully committed to a lipid membrane of its own, with the two lineages solving the problem separately after they diverged. It is a hypothesis that neatly explains an awkward observation, and it is not established.',
        },
      },
      {
        id: 'note-not-primitive',
        kind: 'callout',
        tone: 'misconception',
        title: '“Bacteria are primitive”',
        text: {
          essential:
            'Bacteria have been evolving for exactly as long as you have. They are not an early draft that complex life improved on; they are a hugely successful strategy that has never needed replacing. They outnumber all other organisms, occupy more environments, and perform chemistry no animal can.',
          detailed:
            'The word "simple" is doing misleading work here too. A bacterium has thousands of genes, tightly regulated networks, sophisticated sensing and movement, and metabolic capabilities that human industry copies with difficulty. It is smaller and less internally compartmented than a eukaryotic cell. Small is not the same as primitive.',
        },
        references: [referenceId('hug-2016-tree-of-life')],
      },
    ],
    furtherReading: [referenceId('woese-1990-three-domains')],
  },

  {
    id: topicId('how-cells-obtained-energy'),
    slug: 'how-cells-obtained-energy',
    sectionId: LIFE,
    order: 16,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How cells obtained energy',
    subtitle:
      'Every organism is running the same trick: move electrons downhill, capture the fall.',
    summary: {
      essential:
        'All energy metabolism works the same way underneath. Take electrons from something that holds them loosely, pass them to something that grabs them tightly, and capture some of the energy released along the way. What varies between organisms is only which molecules play those two roles.',
      detailed:
        'Early life had no oxygen, which is the best electron acceptor available, so it worked with weaker ones — sulfate, carbon dioxide, iron. That gives much less energy per reaction, which is a large part of why life stayed small and simple for so long.',
      technical:
        'The free energy available scales with the difference in reduction potential between donor and acceptor. The H₂/CO₂ couple yields roughly 130 kJ per mol of methane formed; the same donor with O₂ yields nearly 500 kJ. That factor of four constrains how much biosynthesis a cell can afford.',
    },
    glossaryTerms: [glossaryTermId('chemiosmosis'), glossaryTermId('atp')],
    related: [
      topicId('photosynthesis'),
      topicId('the-first-cells'),
      topicId('could-metabolism-have-come-first'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Think of electrons as sitting at different heights depending on which molecule holds them. Some molecules hold them loosely — hydrogen gas, for instance, is practically giving them away. Others grab them hard, and oxygen grabs hardest of almost anything. Move an electron from a loose holder to a tight one and energy is released, exactly as a falling weight releases energy.',
          detailed:
            'What a cell does is arrange for that fall to happen in stages, through a chain of carriers embedded in a membrane, so the energy comes out in manageable amounts rather than all at once. At several points along the chain the energy is used to push a proton across the membrane. The accumulated protons are the cell’s battery, and letting them back through ATP synthase is how the charge gets spent.',
        },
      },
      {
        id: 'viz-energy',
        kind: 'visualization',
        visualizationId: visualizationId('cellular-energy'),
      },
      {
        id: 'claim-oxygen-yield',
        kind: 'claim',
        statement: {
          essential:
            'Respiration using oxygen releases several times more energy per unit of food than any anaerobic alternative. This is a matter of chemistry, and it constrained what life could do before oxygen existed.',
          detailed:
            'Fermenting a glucose molecule yields two ATP. Respiring the same molecule with oxygen yields around thirty. Everything expensive that organisms do — moving quickly, maintaining a large body, running a nervous system — became affordable only once that better return was available.',
          technical:
            'The difference comes from the reduction potential of the terminal acceptor. O₂/H₂O sits at +0.82 V; sulfate/sulfide at −0.22 V; CO₂/CH₄ at −0.24 V. The span between the NADH donor and the acceptor sets the number of protons that can be pumped, and hence the ATP yield.',
        },
        evidence: 'established',
        references: [referenceId('lane-martin-2010-energetics')],
      },
      {
        id: 'variety',
        kind: 'prose',
        text: {
          essential:
            'Once you see the pattern, the diversity of microbial metabolism stops looking like a list to memorise and starts looking like combinations. Some organisms take electrons from hydrogen and give them to carbon dioxide, producing methane. Some take them from sulfur compounds and give them to oxygen. Some take them from ammonia, or from iron, or from arsenic. Some take them from light.',
          detailed:
            'Bacteria and archaea between them exploit nearly every chemically viable donor–acceptor pairing available on this planet. Animals, by contrast, use exactly one: organic molecules to oxygen. Our metabolic repertoire is a tiny corner of what life does, which is worth remembering when judging which organisms are sophisticated.',
        },
      },
      {
        id: 'note-food-chain',
        kind: 'callout',
        tone: 'note',
        title: 'Why deep-sea vents have ecosystems with no sunlight',
        text: {
          essential:
            'Communities around hydrothermal vents include tube worms, crabs and clams, none of which could exist on the energy in the trickle of debris falling from above. The base of that food chain is bacteria oxidising hydrogen sulfide from the vent fluid.',
          detailed:
            'When these communities were discovered in 1977, it overturned the assumption that all ecosystems ultimately run on sunlight. They run on chemical energy from the planet’s interior instead. The relevance to origin-of-life research is direct: it demonstrates that a complete ecosystem can be powered by geochemistry alone, which is what the earliest one must have been.',
        },
        references: [referenceId('kelley-2005-lost-city')],
      },
    ],
    furtherReading: [referenceId('lane-martin-2010-energetics')],
  },

  {
    id: topicId('photosynthesis'),
    slug: 'photosynthesis',
    sectionId: LIFE,
    order: 17,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Photosynthesis',
    subtitle:
      'Using light to prise electrons out of water — the most consequential invention in Earth’s history.',
    summary: {
      essential:
        'Photosynthesis captures light energy and uses it to build sugars from carbon dioxide. The version that changed the world does something specific and difficult: it takes the electrons it needs from water, which holds them very tightly, and releases oxygen as the leftover.',
      detailed:
        'Earlier forms of photosynthesis used easier sources — hydrogen sulfide, iron, hydrogen gas — and released no oxygen. Learning to split water was the innovation, and it required a manganese-containing catalyst that appears to have evolved exactly once.',
      technical:
        'Oxygenic photosynthesis links two photosystems in series so that a single photon at each stage can lift an electron from the +0.82 V of water to the −0.32 V of NADP⁺. Water oxidation is performed by the Mn₄CaO₅ oxygen-evolving complex in photosystem II, which has no known independent origin elsewhere in biology.',
    },
    glossaryTerms: [glossaryTermId('photosynthesis'), glossaryTermId('cyanobacteria')],
    related: [
      topicId('the-oxygen-revolution'),
      topicId('how-photosynthesis-changed-earth'),
      topicId('how-cells-obtained-energy'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Building sugar out of carbon dioxide means pushing electrons uphill — carbon dioxide holds its electrons in a low-energy arrangement, and to make something useful out of it you must supply energy. Photosynthesis uses a photon of light to do that push. A pigment absorbs the photon, an electron in it jumps to a higher energy, and before it can fall back the cell whisks it away down a chain of carriers.',
          detailed:
            'Then there is the question of replacing the electron. The pigment is now short one and cannot absorb another photon until it is refilled. Early photosynthesisers took the replacement from whatever was cheap: hydrogen sulfide, dissolved iron, hydrogen gas. All of these give up electrons easily, and none of them produces oxygen.',
        },
      },
      {
        id: 'viz-photosynthesis',
        kind: 'visualization',
        visualizationId: visualizationId('photosynthesis'),
      },
      {
        id: 'claim-water-splitting',
        kind: 'claim',
        statement: {
          essential:
            'The decisive innovation was taking electrons from water. Water is abundant everywhere, which removed the limit on how much photosynthesis could happen — and the discarded oxygen is where all the oxygen in the atmosphere came from.',
          detailed:
            'Water does not give up electrons willingly; it takes far more energy than pulling them from hydrogen sulfide. Cyanobacteria solved it by wiring two light-capturing systems in series, so two photons rather than one power each electron’s journey, and by evolving a cluster of four manganese atoms and a calcium that can accumulate four positive charges before splitting two water molecules in one step.',
          technical:
            'The oxygen-evolving complex cycles through five S-states, storing oxidising equivalents until it can perform the four-electron oxidation of water in a single concerted step — avoiding the highly damaging one-electron intermediates. This structure occurs in exactly one place in all of biology, which is the strongest argument that water oxidation was invented once.',
        },
        evidence: 'established',
        references: [
          referenceId('blankenship-2010-photosynthesis'),
          referenceId('fischer-2016-oxygenic'),
        ],
      },
      {
        id: 'chloroplasts',
        kind: 'prose',
        text: {
          essential:
            'Plants did not invent photosynthesis. They acquired it. Every chloroplast in every plant and alga is a descendant of a cyanobacterium that was engulfed by another cell and never digested. Chloroplasts still have their own DNA, their own ribosomes, and a double membrane — the outer one being the remains of the vesicle that swallowed them.',
          detailed:
            'This means the entire visible green world — every forest, every field of grass, every bloom of algae in the ocean — is running on machinery invented once by bacteria and subsequently borrowed. A great deal of Earth’s ecology traces back to a single ancient act of failed digestion.',
        },
      },
      {
        id: 'open-when-oxygenic',
        kind: 'open-question',
        question: 'When did oxygen-producing photosynthesis first evolve?',
        whyItMatters: {
          essential:
            'Oxygen appears in the atmosphere at 2.4 billion years ago. If cyanobacteria evolved much earlier, there was a long delay between the ability to make oxygen and oxygen accumulating — and the reason for that delay is a major question in Earth history.',
          detailed:
            'Estimates range from shortly before the Great Oxidation Event to several hundred million years earlier. Claimed geochemical "whiffs" of oxygen at 3.0 and 2.7 billion years have been reported and contested. The stakes are high because the answer determines whether the bottleneck was biological invention or planetary chemistry.',
        },
        whatWouldSettleIt: {
          essential:
            'Reliable, reproducible geochemical markers of local oxygen production in rocks well before 2.4 billion years, or molecular fossils specific to cyanobacteria.',
          detailed:
            'Lipid biomarkers once seemed to settle it, but many were later shown to be contamination from younger rock. The current best hope is trace-metal and isotope proxies sensitive to local oxidation, applied across many well-dated sections rather than single samples.',
        },
        references: [referenceId('fischer-2016-oxygenic')],
      },
    ],
    furtherReading: [referenceId('blankenship-2010-photosynthesis')],
  },

  {
    id: topicId('the-oxygen-revolution'),
    slug: 'the-oxygen-revolution',
    sectionId: LIFE,
    order: 18,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The oxygen revolution',
    subtitle:
      'A waste product that rusted an ocean, wrecked a climate, and rebuilt the atmosphere.',
    summary: {
      essential:
        'Around 2.4 billion years ago free oxygen appeared in Earth’s atmosphere for the first time. It was not produced deliberately and it was not useful to anything at first — it was the waste from a new way of doing photosynthesis. It went on to change the chemistry of the entire planet.',
      detailed:
        'The rise was not immediate. Cyanobacteria may have been producing oxygen for hundreds of millions of years before any of it accumulated, because the oceans and rocks absorbed it as fast as it appeared. Only when those sinks were saturated could it build up in the air.',
      technical:
        'The Great Oxidation Event is dated by the disappearance of mass-independent sulfur fractionation at approximately 2.45–2.32 Ga, alongside the appearance of red beds and the disappearance of detrital pyrite and uraninite. Atmospheric O₂ rose from below 10⁻⁵ PAL to perhaps 10⁻²–10⁻¹ PAL, then remained low for over a billion years.',
    },
    glossaryTerms: [
      glossaryTermId('great-oxidation-event'),
      glossaryTermId('banded-iron-formation'),
    ],
    related: [
      topicId('oxygen-poison-and-opportunity'),
      topicId('photosynthesis'),
      topicId('the-great-oxygenation-event'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Oxygen did not accumulate the moment it started being produced, because the planet ate it. The early oceans were full of dissolved iron, which had been stable for billions of years in the absence of oxygen. Iron and oxygen react eagerly. Every oxygen molecule released met dissolved iron and rusted it, and the rust sank.',
          detailed:
            'The result is written in rock: banded iron formations, alternating layers of iron oxide and silica, hundreds of metres thick, deposited across the world between roughly 2.5 and 1.8 billion years ago. They are the world’s principal iron ore deposits, and essentially all the iron in every steel object you have used came from an ocean being scrubbed of dissolved iron by biologically produced oxygen.',
        },
      },
      {
        id: 'viz-oxygen',
        kind: 'visualization',
        visualizationId: visualizationId('oxygen-history'),
      },
      {
        id: 'claim-goe',
        kind: 'claim',
        statement: {
          essential:
            'Atmospheric oxygen rose from essentially nothing to a persistent presence around 2.4 billion years ago. This is one of the best-dated transitions in Earth history.',
          detailed:
            'Several independent markers change at the same time. The peculiar sulfur isotope signature that only survives in an atmosphere with no ozone disappears. Sediments start showing red iron oxides where they had shown none. Minerals like pyrite and uraninite, which dissolve in oxygenated water, stop appearing as river-transported grains and start being absent.',
          technical:
            'The tightest constraint is from Δ³³S, which falls from values of several per mil to within analytical error of zero across a stratigraphically narrow interval in multiple basins on different continents. The convergence of independent proxies across separate sections is what makes the date robust.',
        },
        evidence: 'established',
        references: [
          referenceId('lyons-2014-oxygen-rise'),
          referenceId('holland-2006-goe'),
          referenceId('farquhar-2000-sulfur'),
        ],
      },
      {
        id: 'consequences',
        kind: 'prose',
        text: {
          essential:
            'The consequences went far beyond breathability. Oxygen destroys methane, and methane was probably a major greenhouse gas keeping the young, faint-Sun Earth warm. Removing it may have triggered the Huronian glaciation, one of the longest and most severe ice ages in the record, beginning shortly after oxygen appeared.',
          detailed:
            'It also created an ozone layer, which absorbed ultraviolet light and made the land surface survivable for the first time. And it opened up an entirely new energy budget — oxygen respiration, several times more productive than any anaerobic alternative — which is the foundation everything large and active is built on.',
        },
      },
      {
        id: 'note-slow',
        kind: 'callout',
        tone: 'note',
        title: 'The word "event" is doing a lot of work',
        text: {
          essential:
            'The Great Oxidation Event took somewhere between tens and hundreds of millions of years. And the oxygen level it reached was still far below today’s — probably a few percent of modern levels at most. Earth then sat at that low level for well over a billion years before oxygen rose again.',
          detailed:
            'That long middle interval, sometimes called the boring billion, is anything but boring as a problem. It is when eukaryotes appeared and when the ancestors of all complex life were established, all under oxygen levels that would not support a mouse. Why oxygen stayed low for so long, and what eventually raised it, are both actively researched.',
        },
        references: [referenceId('lyons-2014-oxygen-rise')],
      },
    ],
    furtherReading: [referenceId('lyons-2014-oxygen-rise')],
  },

  {
    id: topicId('oxygen-poison-and-opportunity'),
    slug: 'oxygen-poison-and-opportunity',
    sectionId: LIFE,
    order: 19,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Oxygen: poison and opportunity',
    subtitle: 'The gas you cannot live without is also, chemically, trying to destroy you.',
    summary: {
      essential:
        'Oxygen is reactive, which is exactly why it is useful and exactly why it is dangerous. Organisms that could use it gained a large energy advantage. Organisms that could not were poisoned, and retreated to the shrinking places oxygen could not reach.',
      detailed:
        'The danger has not gone away for those of us who use it. Oxygen metabolism produces reactive by-products that damage DNA, proteins and membranes, and every aerobic organism spends resources continuously repairing that damage.',
      technical:
        'Partial reduction of O₂ yields superoxide, hydrogen peroxide and hydroxyl radical. Aerobes carry superoxide dismutase, catalase and peroxidases as standing defences. The oxidative-damage burden is implicated in ageing, though the simple free-radical theory of ageing has not survived testing intact.',
    },
    glossaryTerms: [glossaryTermId('great-oxidation-event')],
    related: [
      topicId('the-oxygen-revolution'),
      topicId('the-rise-of-eukaryotic-cells'),
      topicId('extinction'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'For the organisms alive when oxygen appeared, this was not an opportunity. It was a chemical assault on a biosphere that had evolved for two billion years in its absence. Oxygen attacks the iron–sulfur clusters at the heart of many ancient enzymes. It oxidises membrane lipids. It generates reactive fragments that break DNA.',
          detailed:
            'Some lineages died. Many retreated — into sediments, into deep rock, into the guts of animals, into any place still without oxygen. Strict anaerobes are still abundant today, and they still cannot tolerate air; a spoonful of ordinary soil contains organisms that would be killed by a few minutes of exposure. And some lineages did something else: they evolved defences, and then went further and turned the poison into a fuel.',
        },
      },
      {
        id: 'viz-oxygen-tolerance',
        kind: 'visualization',
        visualizationId: visualizationId('oxygen-tolerance'),
      },
      {
        id: 'claim-tradeoff',
        kind: 'claim',
        statement: {
          essential:
            'Every organism that uses oxygen must also continuously defend against it. The defences — enzymes that dismantle reactive oxygen species — are found in every aerobe and are essential to survival.',
          detailed:
            'This is a genuine trade-off rather than a solved problem. Superoxide dismutase, catalase and the peroxidases are among the most abundant enzymes in aerobic cells, and knocking any of them out is severely damaging or lethal. The cost of running an oxygen metabolism includes the permanent overhead of the repair system.',
          technical:
            'Superoxide dismutase is among the fastest enzymes known, operating close to the diffusion limit — which is a measure of how urgent the problem is. Roughly 0.1–2% of oxygen consumed by mitochondria leaks as superoxide, depending on conditions.',
        },
        evidence: 'established',
        references: [referenceId('lane-2015-vital-question')],
      },
      {
        id: 'extinction-framing',
        kind: 'callout',
        tone: 'note',
        title: 'Sometimes called the first mass extinction, with caveats',
        text: {
          essential:
            'The oxygen crisis is often described as the largest extinction event in Earth’s history. That is plausible and essentially untestable — microbial lineages leave almost no fossil record, so nobody can count what was lost.',
          detailed:
            'What can be said is that the chemical environment of the entire planet changed in a way that was lethal to the dominant metabolisms of the time, and that the microbial world afterwards was structured differently. Calling it an extinction is a reasonable inference from chemistry rather than an observation from fossils, and it is worth flagging the difference.',
        },
        references: [referenceId('lyons-2014-oxygen-rise')],
      },
      {
        id: 'opportunity',
        kind: 'prose',
        text: {
          essential:
            'And then the opportunity. Once an organism can handle oxygen safely, it can use it — and using it releases several times more energy per meal than any alternative. Everything that costs a lot of energy became possible: large bodies, fast movement, warm blood, nervous systems, active predation.',
          detailed:
            'It is not a coincidence that animals appear in the fossil record after the second major rise in oxygen, around 600 million years ago, rather than after the first. A large, actively moving animal has an energy budget that low-oxygen respiration cannot support. Whether oxygen was the trigger for animal evolution or merely a precondition that had to be met is still argued — the correlation is clear, the causation less so.',
        },
      },
    ],
    furtherReading: [referenceId('lane-2015-vital-question')],
  },

  {
    id: topicId('the-rise-of-eukaryotic-cells'),
    slug: 'the-rise-of-eukaryotic-cells',
    sectionId: LIFE,
    order: 20,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The rise of eukaryotic cells',
    subtitle:
      'A different kind of cell, apparently invented once, from which everything large descends.',
    summary: {
      essential:
        'Eukaryotic cells are bigger, more complicated and internally compartmented — with a nucleus holding the DNA and specialised organelles doing particular jobs. Every animal, plant, fungus and alga is built from them. Bacteria and archaea, despite billions of years and enormous numbers, never produced anything like one.',
      detailed:
        'The evidence suggests this happened once. All eukaryotes share features that point to a single ancestral event, most importantly the acquisition of mitochondria. Given how often evolution repeats its inventions, a genuinely singular origin demands explanation.',
      technical:
        'Phylogenomic analyses place eukaryotes within or sister to the Asgard archaea, with mitochondria derived from a single alphaproteobacterial endosymbiont. The nucleus, endomembrane system, cytoskeleton and sexual reproduction were all in place in the last eukaryotic common ancestor, which is dated to roughly 1.8–2.1 Ga.',
    },
    glossaryTerms: [
      glossaryTermId('eukaryote'),
      glossaryTermId('prokaryote'),
      glossaryTermId('endosymbiosis'),
    ],
    related: [
      topicId('endosymbiosis'),
      topicId('why-complex-cells-were-such-a-major-step'),
      topicId('the-first-cells'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Put a bacterium and a typical eukaryotic cell side by side and the difference is not subtle. The eukaryote is often ten to a hundred times larger in diameter and thousands of times larger in volume. Its DNA is packaged inside a nucleus. It has internal membranes dividing labour between compartments, a cytoskeleton that lets it change shape and move things around inside, and mitochondria generating its energy.',
          detailed:
            'It also does things bacteria essentially do not: engulf other cells whole, grow to enormous sizes, differentiate into specialised types, and build multicellular bodies with organs. The gap in organisational capability is large, and it separates the world of microbes from the world of visible organisms.',
        },
      },
      {
        id: 'viz-eukaryote',
        kind: 'visualization',
        visualizationId: visualizationId('eukaryote-origin'),
      },
      {
        id: 'claim-single-origin',
        kind: 'claim',
        statement: {
          essential:
            'All eukaryotes appear to descend from a single ancestral cell that acquired mitochondria. The event seems to have happened once in four billion years.',
          detailed:
            'The evidence is that all mitochondria trace to one bacterial lineage — they form a single group within the alphaproteobacteria in every analysis. If engulfment had happened repeatedly, we would expect mitochondria in different eukaryotes to derive from different bacteria. They do not. Even eukaryotes that appear to lack mitochondria turn out, on inspection, to have reduced remnants of them.',
          technical:
            'The host is now placed within the Asgard archaea, following the 2015 discovery of Lokiarchaeota, which carry eukaryote-signature proteins including actins and small GTPases. The 2020 isolation of a cultured Asgard archaeon showed it forms long branching protrusions and grows in syntrophy with partners — consistent with, though not proof of, an entangling-then-engulfing route.',
        },
        evidence: 'inference',
        references: [
          referenceId('roger-2017-mitochondria'),
          referenceId('spang-2015-lokiarchaeota'),
        ],
      },
      {
        id: 'why-once',
        kind: 'prose',
        text: {
          essential:
            'Why only once? One influential proposal is energetic. A bacterium generates energy across its outer membrane, and the area of that membrane grows more slowly than the volume it has to supply as the cell gets bigger. Grow too large and the energy supply per gene becomes impossible. Mitochondria break the constraint by putting energy-generating membrane inside the cell, in hundreds of copies, each with its own small genome controlling it locally.',
          detailed:
            'On this account, mitochondria did not just make eukaryotes more efficient; they removed a ceiling. Nick Lane and William Martin calculated that a eukaryotic cell has thousands of times more energy available per gene than a bacterium, which is what pays for a large genome and the regulatory complexity it enables. The argument is elegant and influential, and it is contested — some researchers argue the energetic constraint is overstated and that the decisive innovations were in cell structure instead.',
        },
      },
      {
        id: 'caution-once',
        kind: 'callout',
        tone: 'caution',
        title: 'What "only once" does and does not tell us',
        text: {
          essential:
            'A single origin is consistent with the step being extremely improbable. It is also consistent with it being reasonably likely but only needing to happen once, because the first lineage to do it would occupy the niche and prevent competitors from establishing.',
          detailed:
            'This distinction matters for astrobiology. If complex cells are a fluke, complex life elsewhere may be very rare even where microbes are common. If they are merely unrepeated because of pre-emption, the picture is quite different. With one planet in the sample, the two cannot be distinguished, and confident statements in either direction go beyond the evidence.',
        },
        references: [referenceId('lane-martin-2010-energetics')],
      },
    ],
    furtherReading: [referenceId('roger-2017-mitochondria')],
  },

  {
    id: topicId('endosymbiosis'),
    slug: 'endosymbiosis',
    sectionId: LIFE,
    order: 21,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Endosymbiosis',
    subtitle: 'The organelles that power your cells were once free-living bacteria.',
    summary: {
      essential:
        'Mitochondria — the structures that generate energy in every one of your cells — are descended from bacteria that were taken inside another cell and never released. The same happened separately with chloroplasts in plants and algae. Both still carry their own DNA.',
      detailed:
        'This was proposed in the nineteenth century, revived and argued forcefully by Lynn Margulis in 1967 against considerable resistance, and confirmed decisively once gene sequencing became possible. It is now among the best-supported conclusions in cell biology.',
      technical:
        'Mitochondrial genomes are circular, lack histones, use a bacterial-type ribosome sensitive to bacterial antibiotics, and phylogenetically nest within the alphaproteobacteria. Most of the original endosymbiont’s genes have been transferred to the nuclear genome; human mitochondrial DNA retains 37 genes from an ancestral complement of several thousand.',
    },
    glossaryTerms: [glossaryTermId('endosymbiosis'), glossaryTermId('eukaryote')],
    related: [
      topicId('the-rise-of-eukaryotic-cells'),
      topicId('symbiosis'),
      topicId('photosynthesis'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The evidence is unusually direct, which is what makes this such a satisfying result. Mitochondria have their own DNA, separate from the cell’s nucleus, and it is circular — the shape bacteria use, not the shape eukaryotic chromosomes use. They have their own ribosomes, and those ribosomes are bacterial in type, which is why certain antibiotics that target bacterial ribosomes also have side effects on human mitochondria. They divide by splitting in two, on their own schedule, as bacteria do. And they are wrapped in two membranes, the inner one being the bacterium’s and the outer one the remains of the vesicle that engulfed it.',
          detailed:
            'Put the mitochondrial genes into a phylogenetic analysis alongside bacterial ones and they land firmly among the alphaproteobacteria, a group that includes organisms living inside other cells today. The chloroplast genes land among the cyanobacteria. These are not analogies. They are family relationships read off sequences.',
        },
      },
      {
        id: 'viz-endosymbiosis',
        kind: 'visualization',
        visualizationId: visualizationId('endosymbiosis'),
      },
      {
        id: 'claim-endosymbiosis',
        kind: 'claim',
        statement: {
          essential:
            'Mitochondria and chloroplasts are descended from free-living bacteria that became permanent residents inside another cell. This is established by their own genomes, their ribosomes, their membranes and their mode of division.',
          detailed:
            'The theory also explains a great deal that would otherwise be arbitrary. Why does a mitochondrion have two membranes rather than one? Why does it keep a handful of genes rather than either all of them or none? Why do the proteins it does encode all sit in the energy-generating membrane, where local control matters? Endosymbiosis answers each of these; no alternative account does.',
          technical:
            'Gene transfer from the endosymbiont to the host nucleus is ongoing and observable — fragments of mitochondrial DNA are found integrated in nuclear genomes across eukaryotes. The genes retained are predominantly hydrophobic membrane proteins, consistent with the co-location-for-redox-regulation hypothesis for why any genome is retained at all.',
        },
        evidence: 'established',
        references: [
          referenceId('sagan-margulis-1967-endosymbiosis'),
          referenceId('roger-2017-mitochondria'),
        ],
      },
      {
        id: 'history-margulis',
        kind: 'callout',
        tone: 'history',
        title: 'A paper rejected fifteen times',
        text: {
          essential:
            'Lynn Margulis submitted the paper laying out the modern case in the mid-1960s and it was rejected repeatedly before being published in 1967. The idea was considered fringe. It is now in every introductory textbook.',
          detailed:
            'The episode is often told as a story about a lone genius against a closed-minded establishment, and that reading is too simple. Endosymbiosis had been proposed before and had not been accepted because the available evidence did not settle it. What changed was not that people became more open-minded but that molecular sequencing arrived and made the question decidable. Margulis was right, and she was right in a way that could not be demonstrated until the technology existed.',
        },
        references: [referenceId('sagan-margulis-1967-endosymbiosis')],
      },
      {
        id: 'still-happening',
        kind: 'prose',
        text: {
          essential:
            'Endosymbiosis is not a one-off historical curiosity. It is still happening. Some algae contain chloroplasts acquired not from cyanobacteria directly but by swallowing another alga that had already done so — second-hand acquisition, and in a few cases third-hand. Certain insects house bacteria that supply nutrients their diet lacks, in specialised cells, with reduced genomes that can no longer live independently.',
          detailed:
            'Those insect symbionts are especially instructive because they show the process in progress. Their genomes have shrunk to a fraction of a free-living bacterium’s, they have lost the genes their host now supplies, and they are transmitted from mother to offspring. That is what an organelle looks like early on. Watching it happen makes the ancient events considerably easier to believe.',
        },
      },
    ],
    furtherReading: [referenceId('roger-2017-mitochondria')],
  },

  {
    id: topicId('why-complex-cells-were-such-a-major-step'),
    slug: 'why-complex-cells-were-such-a-major-step',
    sectionId: LIFE,
    order: 22,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why complex cells were such a major step',
    subtitle: 'Not because they are better — because they made a different set of things possible.',
    summary: {
      essential:
        'Eukaryotic cells did not outcompete bacteria; bacteria are still everywhere and still dominant by most measures. What eukaryotes did was open a door bacteria never went through: they could get much larger, carry far more genes, and eventually build bodies out of many differentiated cells.',
      detailed:
        'Three things came together. Mitochondria removed an energy constraint on genome size. Internal compartments allowed different chemistry in different places at once. And a cytoskeleton allowed the cell to move, change shape and engulf things — including other cells.',
      technical:
        'Lane and Martin estimate roughly 10⁵-fold more energy available per gene in a eukaryote than in a bacterium, owing to internalised bioenergetic membranes under local genomic control. Whether this is the cause or a consequence of eukaryotic complexity is disputed.',
    },
    glossaryTerms: [glossaryTermId('eukaryote'), glossaryTermId('endosymbiosis')],
    related: [
      topicId('the-rise-of-eukaryotic-cells'),
      topicId('multicellular-life'),
      topicId('why-complex-life-is-not-automatically-better'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'It is easy to describe this step as an improvement and much more accurate to describe it as a divergence. Bacteria did not become obsolete. By number, by total mass in many environments, and by metabolic range, they remain the dominant form of life on the planet. Eukaryotes did not replace them; they went somewhere else.',
          detailed:
            'Where they went was toward size and internal complexity. A bacterium is constrained: as it grows, its volume increases faster than its energy-generating surface, and it also has to copy its whole genome from a single origin. A eukaryote sidesteps both — hundreds of mitochondria supply energy from inside, and chromosomes are copied from many origins at once. The constraints that keep bacteria small simply do not apply.',
        },
      },
      {
        id: 'viz-complexity-cost',
        kind: 'visualization',
        visualizationId: visualizationId('cell-complexity-scaling'),
      },
      {
        id: 'claim-genome-size',
        kind: 'claim',
        statement: {
          essential:
            'Eukaryotic genomes are typically orders of magnitude larger than bacterial ones, and the extra capacity is what pays for regulatory complexity, cell specialisation and multicellular development.',
          detailed:
            'Bacterial genomes are under intense pressure to stay compact, because every base has to be copied every generation and generations are short. Eukaryotic genomes carry vast amounts of regulatory sequence, introns, and duplicated gene families — the raw material from which new functions are built. A gene can be duplicated and one copy repurposed only if carrying the spare is affordable.',
          technical:
            'Typical bacterial genomes run 2–6 Mb with 85–90% coding. Human protein-coding sequence is roughly 1.5% of a 3.1 Gb genome. The difference in regulatory sequence per gene is the structural basis for the developmental control that multicellularity requires.',
        },
        evidence: 'established',
        references: [referenceId('lane-martin-2010-energetics')],
      },
      {
        id: 'phagocytosis',
        kind: 'prose',
        text: {
          essential:
            'One capability deserves separate mention: eating. A eukaryote can engulf another cell whole, wrapping its flexible membrane around it and digesting it internally. Bacteria essentially cannot — a rigid cell wall and no cytoskeleton mean they absorb dissolved molecules instead.',
          detailed:
            'This single ability restructured ecology. Before it, microbial ecosystems were largely about competing for dissolved chemicals. Predation on whole cells creates a food chain with levels, and food chains with levels produce arms races: better defences, better attack, faster movement, larger size. A great deal of what makes ecosystems dynamic follows from the invention of eating things.',
        },
      },
      {
        id: 'note-slow',
        kind: 'callout',
        tone: 'note',
        title: 'And then almost nothing happened for a billion years',
        text: {
          essential:
            'Eukaryotes appear in the record around 1.8 billion years ago. Complex multicellular life appears around 600 million years ago. That is more than a billion years of eukaryotes existing without building anything large.',
          detailed:
            'The gap is one of the outstanding puzzles in the history of life. Proposed explanations include persistently low oxygen, limited availability of key trace nutrients, the time needed to evolve developmental control, and the possibility that nothing was holding it back and it simply took that long. None is established, and the honest position is that we do not know why the delay was so long.',
        },
        references: [referenceId('knoll-2011-eukaryotes')],
      },
    ],
    furtherReading: [referenceId('lane-2015-vital-question')],
  },

  {
    id: topicId('multicellular-life'),
    slug: 'multicellular-life',
    sectionId: LIFE,
    order: 23,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Multicellular life',
    subtitle:
      'Cells that stay together — which turns out to be easy, and only sometimes leads anywhere.',
    summary: {
      essential:
        'Multicellularity means cells that stick together after dividing instead of separating. It has evolved independently at least twenty-five times across the tree of life, in animals, plants, fungi, algae and several other groups. The basic step is not difficult.',
      detailed:
        'What is much rarer is complex multicellularity: bodies with many distinct cell types, organised tissues and a developmental programme. That has happened perhaps six times. Sticking together is easy; becoming an organism is not.',
      technical:
        'Simple multicellularity has arisen in at least 25 independent lineages. Complex multicellularity — defined by three-dimensional tissues, cell-type differentiation and intercellular signalling — is restricted to animals, plants, red algae, brown algae and two fungal groups, and all six required oxygen levels and cell-adhesion machinery not available earlier.',
    },
    glossaryTerms: [glossaryTermId('eukaryote')],
    related: [
      topicId('when-cells-began-cooperating'),
      topicId('why-multicellular-organisms-evolved'),
      topicId('specialization-of-cells'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The mechanical requirement is trivial: after a cell divides, the two daughters fail to separate. That is all. Many single-celled organisms do this occasionally already, forming chains or clumps, and the difference between a temporary clump and a permanent one is small.',
          detailed:
            'It has been demonstrated in the laboratory. Researchers grew yeast — normally single-celled — under conditions where larger clusters settled faster through liquid, and selected the fastest-settling fraction each day. Within about sixty days, clusters had evolved that stayed together, had a shared life cycle, and even showed cells dying in specific places to help offspring separate. That is a form of programmed cell death, appearing within two months under selection.',
        },
      },
      {
        id: 'viz-multicellularity',
        kind: 'visualization',
        visualizationId: visualizationId('multicellularity'),
      },
      {
        id: 'claim-many-times',
        kind: 'claim',
        statement: {
          essential:
            'Multicellularity has evolved independently at least twenty-five times. Complex multicellularity, with differentiated tissues, has evolved about six times.',
          detailed:
            'The contrast is the interesting part. Something that happens twenty-five times independently is clearly not a difficult step — evolution finds it readily whenever it is useful. Something that happens six times in four billion years is a different kind of event, and the six cases share requirements: enough oxygen to supply interior cells, molecular systems for cells to stick to one another and communicate, and a way to control which cell becomes what.',
          technical:
            'Independent origins are established by phylogenetic placement: the multicellular lineages are scattered across the eukaryotic tree with unicellular relatives on either side, which rules out a single origin followed by losses as the simpler explanation.',
        },
        evidence: 'established',
        references: [
          referenceId('knoll-2011-multicellularity'),
          referenceId('ratcliff-2012-multicellularity'),
        ],
      },
      {
        id: 'the-hard-part',
        kind: 'prose',
        text: {
          essential:
            'The hard part is not adhesion but coordination. A clump of identical cells is a clump. An organism requires that cells become different from one another — some doing digestion, some structural support, some reproduction — and that they do so in the right places, in the right numbers, in the right order, from a single starting cell.',
          detailed:
            'That means a developmental programme: a set of genetic switches that read a cell’s position and history and decide what it becomes. Building such a programme requires substantial regulatory genome, which is one reason multicellularity is a eukaryotic phenomenon. It also requires that cells reliably do their assigned job rather than reverting to reproducing themselves — a problem that has an obvious modern name.',
        },
      },
      {
        id: 'note-cancer',
        kind: 'callout',
        tone: 'note',
        title: 'Cancer is the failure mode of the arrangement',
        text: {
          essential:
            'In a multicellular body, most cells give up their own reproduction to support a few reproductive cells. That is an unstable arrangement from the point of view of selection acting on cells: a cell that starts reproducing for itself will outgrow its neighbours within the body.',
          detailed:
            'This is exactly what a tumour is — a lineage of cells that has stopped cooperating and reverted to reproducing on its own account. Every multicellular organism carries elaborate machinery to prevent it: checkpoints, repair systems, programmed cell death, immune surveillance. Understanding cancer as a breakdown of an evolved cooperation, rather than simply as a disease, explains why it is so persistent — the selective pressure that produces it is generated by the body’s own structure.',
        },
        references: [referenceId('szathmary-smith-1995-transitions')],
      },
    ],
    furtherReading: [referenceId('knoll-2011-multicellularity')],
  },

  {
    id: topicId('when-cells-began-cooperating'),
    slug: 'when-cells-began-cooperating',
    sectionId: LIFE,
    order: 24,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'When cells began cooperating',
    subtitle: 'Why a cell would give up reproducing — and the conditions that make that stable.',
    summary: {
      essential:
        'Cooperation between cells looks like it should be impossible. A cell that helps its neighbours at its own expense should be outcompeted by one that takes the help and gives nothing. Yet bodies exist. The resolution is relatedness: in a body grown from a single cell, the neighbours are genetically identical.',
      detailed:
        'Helping an identical twin propagate your genes is not self-sacrifice in any evolutionary sense — it is the same thing as propagating them yourself. This is why nearly all complex multicellular organisms develop from a single cell rather than by aggregation.',
      technical:
        'Hamilton’s rule, rb > c, states that an altruistic act spreads when the benefit to the recipient weighted by relatedness exceeds the cost to the actor. Single-cell bottlenecks make r ≈ 1 among somatic cells, which is why the condition is trivially satisfied inside a body and why aggregative multicellularity remains simple.',
    },
    glossaryTerms: [glossaryTermId('natural-selection'), glossaryTermId('fitness')],
    related: [
      topicId('multicellular-life'),
      topicId('cooperation'),
      topicId('why-multicellular-organisms-evolved'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Look at your own body as a population of cells and something strange stands out. Trillions of cells work continuously, and almost none of them will pass anything on. Only the germ cells reproduce. Every other cell — muscle, nerve, skin, liver — works its entire life and then dies without descendants. From the point of view of a selfish cell, that is a terrible deal.',
          detailed:
            'The reason it is not a terrible deal is that those cells are not separate competitors. Your body grew from one fertilised cell, so every cell in it carries essentially the same genome. A skin cell supporting a germ cell is supporting a copy of its own genes. There is no sacrifice, because there is no distinct interest to sacrifice.',
        },
      },
      {
        id: 'viz-cooperation',
        kind: 'visualization',
        visualizationId: visualizationId('cell-cooperation'),
      },
      {
        id: 'claim-bottleneck',
        kind: 'claim',
        statement: {
          essential:
            'Complex multicellular organisms almost all develop from a single cell. That bottleneck is what makes cooperation between their cells evolutionarily stable.',
          detailed:
            'Compare the alternative. Slime moulds are multicellular by aggregation: separate amoebae, genetically different, gather together when starved and form a stalk with spores on top. The cells that form the stalk die and leave no descendants. Because they are not related to the spore-formers, there is real conflict — and cheater strains that preferentially end up in the spores are found in wild populations, exactly as the theory predicts.',
          technical:
            'The single-cell bottleneck also has a second function beyond raising relatedness: it purges within-organism genetic variation each generation, which prevents the accumulation of cell lineages selected for their success within the body rather than for the body’s success.',
        },
        evidence: 'model',
        references: [
          referenceId('szathmary-smith-1995-transitions'),
          referenceId('ratcliff-2012-multicellularity'),
        ],
      },
      {
        id: 'policing',
        kind: 'prose',
        text: {
          essential:
            'High relatedness makes cooperation stable in principle. It does not make it automatic, because mutations happen constantly and any cell that acquires the right mutation can start acting for itself. So bodies also police themselves: they check for damaged DNA before allowing division, they instruct suspect cells to self-destruct, and they run an immune system that removes cells behaving abnormally.',
          detailed:
            'The scale of the effort is a measure of how strong the underlying pressure is. Large, long-lived animals need more policing than small short-lived ones, because they have more cell divisions in which something can go wrong. Elephants, which by simple arithmetic should get far more cancer than humans, carry around twenty copies of a key tumour-suppressor gene where we have one. The problem is real enough that evolution has repeatedly invested in solving it.',
        },
      },
    ],
    furtherReading: [referenceId('szathmary-smith-1995-transitions')],
  },

  {
    id: topicId('the-cambrian-explosion'),
    slug: 'the-cambrian-explosion',
    sectionId: LIFE,
    order: 25,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The Cambrian explosion',
    subtitle:
      'Most animal body plans appear within a few tens of millions of years — and the reasons are argued about.',
    summary: {
      essential:
        'Starting around 538 million years ago, the fossil record changes character abruptly. Animals with hard parts, complex eyes, jointed limbs and recognisable body plans appear across a geologically short interval. Nearly every major group of animals alive today has its first fossils in this window.',
      detailed:
        'Calling it an explosion is fair as a description of the fossil record and misleading as a description of evolution. Molecular evidence indicates that the animal lineages had already been diverging for tens of millions of years beforehand. What changed in the Cambrian may be partly what got preserved, not only what existed.',
      technical:
        'The main radiation spans roughly 538–515 Ma. Molecular clocks place the divergence of major bilaterian lineages in the Ediacaran, 30–100 Myr earlier, creating the "Cambrian conundrum" — a mismatch between molecular and palaeontological timing that neither method fully resolves.',
    },
    glossaryTerms: [glossaryTermId('biodiversity')],
    related: [
      topicId('why-life-became-so-diverse'),
      topicId('the-evolutionary-arms-race'),
      topicId('oxygen-poison-and-opportunity'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Below a certain level in the rock, animal fossils are scarce and strange — soft, flat, mostly unlike anything alive. Above it, within a span geologists can measure in tens of millions of years, there are arthropods with compound eyes, molluscs with shells, worms with segments, and the first chordates. It is the single most dramatic transition in the fossil record.',
          detailed:
            'Darwin knew about it and was troubled by it, because it looked like exactly the sudden appearance his theory said should not happen. He suggested the earlier record was simply missing. He was partly right — Precambrian fossils have since been found in quantity — and partly not, because even with those finds the Cambrian remains a genuine acceleration.',
        },
      },
      {
        id: 'viz-cambrian',
        kind: 'visualization',
        visualizationId: visualizationId('cambrian-explosion'),
      },
      {
        id: 'claim-conundrum',
        kind: 'claim',
        statement: {
          essential:
            'Molecular evidence indicates that the major animal lineages had already separated well before their first fossils appear. The Cambrian records when animals became fossilisable and abundant, not necessarily when they originated.',
          detailed:
            'The mismatch is substantial — molecular clocks typically place the divergences tens of millions of years earlier, sometimes considerably more. Neither method is above suspicion. Molecular clocks depend on assumptions about rates that are hard to check across such intervals. The fossil record depends on preservation, and small soft-bodied animals preserve terribly.',
          technical:
            'The likely resolution is partly biological and partly taphonomic: the acquisition of mineralised skeletons in multiple lineages during the early Cambrian dramatically improved preservation, while burrowing behaviour began mixing sediments in ways that both destroyed some records and created others.',
        },
        evidence: 'active-research',
        references: [referenceId('erwin-2011-cambrian')],
      },
      {
        id: 'causes',
        kind: 'prose',
        text: {
          essential:
            'Why then? Several explanations are on the table and they are not mutually exclusive. Oxygen rose again shortly beforehand, and large active predators are energetically expensive. Predation itself may have been the trigger — once something starts eating other animals, armour, speed and eyes all become valuable at once, and each improvement provokes another. The genetic toolkit for building complex bodies may have reached a threshold of flexibility. And the aftermath of the Snowball glaciations may have flooded the oceans with nutrients.',
          detailed:
            'The honest position is that no single cause is established, and the search for one may be misconceived. A radiation of this scale plausibly required several permissive conditions to coincide — enough oxygen, enough developmental flexibility, and an ecological trigger. Distinguishing which was limiting is difficult when all of them changed within the same interval.',
        },
      },
      {
        id: 'misconception-explosion',
        kind: 'callout',
        tone: 'misconception',
        title: '“New body plans stopped evolving after the Cambrian”',
        text: {
          essential:
            'It is often said that no new phyla have appeared since. That is close to true as a statement about classification and misleading as a statement about evolution. The categories were defined using Cambrian and later animals, so of course the boundaries fall where they do.',
          detailed:
            'Enormous morphological innovation has happened since: vertebrates moving onto land, the entire insect radiation, flight evolving four separate times, flowering plants, whales returning to the sea. None of these creates a new phylum because they all occur within existing ones — which is a fact about the ranking system rather than about how much things changed.',
        },
        references: [referenceId('marshall-2006-cambrian')],
      },
    ],
    furtherReading: [referenceId('erwin-2011-cambrian')],
  },

  {
    id: topicId('why-life-became-so-diverse'),
    slug: 'why-life-became-so-diverse',
    sectionId: LIFE,
    order: 26,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why life became so diverse',
    subtitle: 'Because every new way of living creates new ways of living alongside it.',
    summary: {
      essential:
        'Diversity is not the result of some drive toward variety. It emerges because each new kind of organism creates opportunities for others — something to eat it, something to live on it, something to exploit what it leaves behind. Life is its own environment, and a more varied environment supports more variety.',
      detailed:
        'There is also a simpler reason. Populations that become separated diverge, because mutations are random and selection differs between places. Given time and any barrier to interbreeding, one species becomes two. The process needs no explanation beyond isolation and time.',
      technical:
        'Diversification is bounded by ecological opportunity: adaptive radiations are fastest when niches are empty, and slow as they fill. Estimates of global species richness remain uncertain by a factor of several — around 8.7 million eukaryotic species by one widely cited estimate, with prokaryotic diversity essentially unbounded by current methods.',
    },
    glossaryTerms: [glossaryTermId('biodiversity'), glossaryTermId('ecological-niche')],
    related: [
      topicId('the-cambrian-explosion'),
      topicId('ecological-niches'),
      topicId('why-does-nature-produce-so-much-diversity'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Start with the mechanical part, which is almost boring. Take one population and split it — a river changes course, a mountain rises, some individuals reach an island. The two halves now experience different conditions and accumulate different mutations. After long enough they cannot interbreed even if reunited. One species has become two. Repeat for hundreds of millions of years across a planet full of barriers.',
          detailed:
            'But that alone does not explain the scale. There are more species of beetle than of any other group of animals, and there are more species of parasite than of free-living organism. Diversity has a second source: each organism is itself a habitat and a resource. A new plant is an opportunity for a specialist herbivore, which is an opportunity for a specialist parasitoid wasp, which is an opportunity for something else. The number of available ways to make a living grows as the number of organisms grows.',
        },
      },
      {
        id: 'viz-diversity',
        kind: 'visualization',
        visualizationId: visualizationId('diversity-radiation'),
      },
      {
        id: 'claim-opportunity',
        kind: 'claim',
        statement: {
          essential:
            'Diversification is fastest when ecological opportunity is greatest — after a mass extinction, after colonising a new place, or after an innovation opens up a way of living nobody was exploiting.',
          detailed:
            'This is visible repeatedly in the record. Mammals were present and small for over a hundred million years alongside dinosaurs; within a few million years of the dinosaurs’ disappearance they had radiated into large herbivores, predators, fliers and swimmers. Cichlid fish in African lakes have produced hundreds of species in a few hundred thousand years. In both cases the trigger is empty niche space, not a change in the mutation rate.',
          technical:
            'Adaptive radiations characteristically show early-burst diversification with rate slowdown as niches fill, detectable in the shape of phylogenetic branching-time distributions. The pattern is not universal, which is itself informative — some clades diversify steadily, suggesting opportunity is not always the limiting factor.',
        },
        evidence: 'established',
        references: [
          referenceId('losos-2011-convergence'),
          referenceId('mcshea-brandon-2010-ztfel'),
        ],
      },
      {
        id: 'note-not-a-drive',
        kind: 'callout',
        tone: 'misconception',
        title: '“Life tends toward greater diversity”',
        text: {
          essential:
            'There is no force pushing toward diversity. What there is is a floor and no ceiling: variation accumulates unless something removes it, and there is far more room above any given level of difference than below it. Diversity increases for the same reason a random walk that cannot go below zero drifts upward.',
          detailed:
            'The record supports the unglamorous version. Diversity has crashed repeatedly and severely — five times catastrophically — and each time it recovered because the process that generates variation kept running, not because anything was steering. McShea and Brandon call this the zero-force evolutionary law: in the absence of constraint, diversity increases by default.',
        },
        references: [referenceId('mcshea-brandon-2010-ztfel')],
      },
    ],
    furtherReading: [referenceId('mora-2011-species')],
  },
];
