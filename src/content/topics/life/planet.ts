/**
 * Origin & Evolution of Life — life changes the planet.
 *
 * Everything before this group treats the planet as a stage and life as the
 * thing happening on it. This group reverses the relationship. Life is a
 * geological force: it rebuilt the atmosphere, it moves more carbon per year
 * than volcanoes do, it makes most of the minerals on Earth's surface, and it
 * has repeatedly changed the conditions it then had to survive.
 *
 * The group ends with Gaia because Gaia is where this idea is most useful and
 * most abused. The honest treatment separates three claims that get bundled
 * together — that life influences the environment, that some of those
 * influences are stabilising, and that Earth is in some sense a living or
 * purposeful organism — and says clearly which of the three the evidence
 * supports.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const LIFE = sectionId('life');
const REVIEWED = '2026-09-10';

export const LIFE_PLANET_TOPICS: readonly Topic[] = [
  {
    id: topicId('life-as-a-geological-force'),
    slug: 'life-as-a-geological-force',
    sectionId: LIFE,
    order: 66,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Life as a geological force',
    subtitle: 'Living things do not merely inhabit the planet. They rebuild it.',
    summary: {
      essential:
        'Life is not a thin film sitting on top of geology. It moves carbon, nitrogen, sulphur and oxygen around the planet faster than volcanoes and erosion do, and it has changed the chemistry of the air, the oceans and the rocks themselves.',
      detailed:
        'The most striking single fact is mineralogical: most of the mineral species on Earth exist only because life put oxygen into the air. A planet without life would have a few hundred minerals. Earth has thousands.',
      technical:
        'Biological fluxes dominate the modern carbon, nitrogen and sulphur cycles at the surface. Gross primary production moves roughly 100 gigatonnes of carbon per year, two orders of magnitude above volcanic outgassing, and biological nitrogen fixation exceeds the abiotic rate by a comparable factor.',
    },
    glossaryTerms: [glossaryTermId('biosphere'), glossaryTermId('banded-iron-formation')],
    related: [
      topicId('how-photosynthesis-changed-earth'),
      topicId('life-and-the-carbon-cycle'),
      topicId('earth-as-a-changing-system'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Pick up a piece of limestone. It is made of the shells of organisms that lived and died in a shallow sea, compacted and cemented over millions of years. Whole mountain ranges are built of it. The white cliffs of Dover are the accumulated skeletons of algae so small you would need a microscope to see one. There is nothing metaphorical about calling life a geological force; the rock in your hand is the evidence.',
          detailed:
            'Coal and oil are the same story told with different chemistry — buried plant and plankton carbon that never got recycled. Iron ore, the material that industrial civilisation is built from, is mostly banded iron formation: iron that was dissolved in the ancient oceans until photosynthetic bacteria released enough oxygen to precipitate it out. We mine the waste product of a microbial revolution two billion years old.',
          technical:
            'The mineralogical argument is the most systematic version. Of the roughly 5,000 known mineral species, the large majority require oxidising surface conditions, hydrated weathering environments or biologically concentrated elements to form. An abiotic rocky planet of Earth’s composition is estimated to support a few hundred. Mineral diversity is therefore a biosignature in its own right, and one that persists in the rock record long after the organisms are gone.',
        },
      },
      {
        id: 'viz-biomass',
        kind: 'visualization',
        visualizationId: visualizationId('biosphere-biomass'),
      },
      {
        id: 'claim-fluxes',
        kind: 'claim',
        statement: {
          essential:
            'Biological processes move far more carbon through the Earth’s surface each year than volcanic and tectonic processes do.',
          detailed:
            'Photosynthesis fixes on the order of 100 billion tonnes of carbon per year, and respiration and decay return almost all of it. Volcanoes release something like 0.1 billion tonnes per year. The biological flux is roughly a thousand times larger — though it is very nearly balanced, which is why the slow geological flux still controls the long-term budget.',
          technical:
            'This distinction between a large, fast, nearly closed loop and a small, slow, open one is essential to reading the carbon cycle correctly. Biology sets the size of the surface reservoir exchange; geology sets the net input and removal that determine atmospheric composition over millions of years.',
        },
        evidence: 'established',
        references: [
          referenceId('falkowski-2008-microbial-engines'),
          referenceId('berner-2003-carbon-cycle'),
        ],
      },
      {
        id: 'biomass-surprise',
        kind: 'prose',
        text: {
          essential:
            'If you were asked to guess how the mass of life on Earth is distributed, you would probably guess wrong. Animals are a rounding error. Plants are about eighty percent of all biomass, almost all of it wood. Bacteria come second. All animals together — every fish, insect, bird, mammal and worm — amount to roughly half a percent of the total.',
          detailed:
            'Humans are about 0.01 percent of biomass, and our livestock outweigh all wild mammals by more than an order of magnitude. These numbers carry uncertainty, particularly for deep-subsurface microbes, which are hard to sample and could shift the bacterial figure substantially. But the broad shape — plants dominant, microbes second, animals marginal — is robust.',
        },
      },
      {
        id: 'claim-biomass',
        kind: 'claim',
        statement: {
          essential:
            'Plants account for roughly 80% of Earth’s biomass; animals account for well under 1%.',
          detailed:
            'The most careful census to date puts total biomass at about 550 gigatonnes of carbon, of which plants are ~450, bacteria ~70, fungi ~12, archaea ~7, protists ~4 and animals ~2. Humans are ~0.06.',
          technical:
            'Uncertainties are asymmetric and largest for the deep subsurface biosphere, where estimates have been revised downward substantially over the past two decades as sampling improved. Treat the plant and animal figures as well constrained and the microbial ones as approximate.',
        },
        evidence: 'inference',
        references: [referenceId('bar-on-2018-biomass')],
      },
      {
        id: 'not-a-plan',
        kind: 'callout',
        tone: 'misconception',
        title: 'Powerful is not the same as purposeful',
        text: {
          essential:
            'That life reshapes the planet does not mean it is trying to. Cyanobacteria did not release oxygen in order to build an ozone layer; oxygen was a waste product. The consequences were planetary, and none of them were intended.',
          detailed:
            'This distinction matters because the language of Earth-system science borrows heavily from the language of regulation and design. Keeping the mechanism in view — organisms doing what their chemistry does, side effects accumulating over geological time — is what separates a scientific claim from a story about purpose.',
        },
      },
    ],
    furtherReading: [referenceId('falkowski-2008-microbial-engines')],
  },

  {
    id: topicId('how-photosynthesis-changed-earth'),
    slug: 'how-photosynthesis-changed-earth',
    sectionId: LIFE,
    order: 67,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How photosynthesis changed Earth',
    subtitle: 'One chemical trick rewrote the atmosphere, the oceans and the rocks.',
    summary: {
      essential:
        'Oxygenic photosynthesis let organisms use water as a source of electrons, with oxygen as the discarded by-product. Water is everywhere, so this removed the main limit on how much life the planet could support — and it filled the air with a gas that had been almost absent.',
      detailed:
        'The consequences ran far beyond biology. Oxygen rusted the oceans, oxidised the continents, built an ozone layer that made land habitable, and made possible the high-energy metabolism that complex life runs on.',
      technical:
        'The transition from anoxygenic to oxygenic photosystems required coupling two reaction centres in series to span the redox gap between water oxidation and NADP reduction. The manganese-calcium cluster of photosystem II remains the only known biological catalyst for water splitting.',
    },
    glossaryTerms: [
      glossaryTermId('photosynthesis'),
      glossaryTermId('cyanobacteria'),
      glossaryTermId('great-oxidation-event'),
    ],
    related: [
      topicId('photosynthesis'),
      topicId('the-oxygen-revolution'),
      topicId('earths-changing-atmosphere'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Every photosynthetic organism faces the same problem: to build sugar out of carbon dioxide it needs electrons, and it has to take them from something. The earliest photosynthesisers took them from hydrogen sulphide, or from dissolved iron, or from hydrogen gas. All of these work, and all of them share a fatal limitation — they are locally scarce. A bacterium living on hydrogen sulphide can only live where hydrogen sulphide is.',
          detailed:
            'Then cyanobacteria, or their ancestors, solved the problem the hard way. They learned to take electrons from water. Water holds onto its electrons tightly — splitting it takes far more energy than splitting hydrogen sulphide — and the solution was to run two light-capturing systems in series, so that two photons could be used to lift a single electron up the energy hill. It is an awkward, expensive arrangement, and it has evolved exactly once as far as we can tell.',
          technical:
            'The pay-off was that the electron source became effectively unlimited. Primary productivity was no longer capped by the supply of reduced chemical species delivered by geology; it was capped only by light, water, carbon dioxide and nutrients. Estimates suggest oxygenic photosynthesis raised global primary production by two to three orders of magnitude over the anoxygenic world.',
        },
      },
      {
        id: 'viz-oxygen-budget',
        kind: 'visualization',
        visualizationId: visualizationId('planetary-oxygen-budget'),
      },
      {
        id: 'claim-single-origin',
        kind: 'claim',
        statement: {
          essential:
            'Oxygenic photosynthesis appears to have originated once, in the ancestors of cyanobacteria. Every plant and alga performs it using machinery inherited from that lineage.',
          detailed:
            'Plants do not photosynthesise with their own invention. They do it inside chloroplasts, which are captured cyanobacteria — so the oak tree in a park is running two-and-a-half-billion-year-old bacterial hardware.',
          technical:
            'Phylogenetic analyses of photosystem components support a single origin of the two-photosystem architecture, though the branching order among anoxygenic phototrophs and the timing relative to the Great Oxidation Event remain actively debated.',
        },
        evidence: 'inference',
        references: [
          referenceId('blankenship-2010-photosynthesis'),
          referenceId('fischer-2016-oxygenic'),
        ],
      },
      {
        id: 'lag',
        kind: 'prose',
        text: {
          essential:
            'Oxygen did not accumulate immediately. For a long time — possibly hundreds of millions of years — everything it was produced near simply absorbed it. Dissolved iron in the oceans rusted and sank. Volcanic gases consumed it. Rocks weathered and took it up. The atmosphere stayed essentially oxygen-free while an enormous chemical debt was paid off.',
          detailed:
            'The banded iron formations are the record of that period: alternating layers of iron oxide and silica laid down as oxygen met iron in the water column. Only once the accessible sinks were saturated could oxygen begin to build in the air, around 2.4 billion years ago. The delay between the invention of oxygenic photosynthesis and the Great Oxidation Event is one of the more actively argued numbers in Precambrian geology.',
        },
      },
      {
        id: 'claim-ozone',
        kind: 'claim',
        statement: {
          essential:
            'Atmospheric oxygen produced the ozone layer, which absorbs ultraviolet light and made the land surface survivable for life.',
          detailed:
            'Before ozone, ultraviolet radiation reaching the surface would have damaged DNA faster than most organisms could repair it, effectively restricting life to water, sediment or shaded microhabitats. The colonisation of land, hundreds of millions of years later, was possible only because a by-product of marine bacteria had built a shield above it.',
          technical:
            'Ozone forms photochemically from O2 and requires oxygen concentrations above roughly 1% of present levels to produce an effective UV screen. The timing of that threshold relative to the terrestrialisation of plants and animals is consistent, though the causal chain also involves soil development and hydraulic tissue.',
        },
        evidence: 'established',
        references: [
          referenceId('catling-zahnle-2020-atmosphere'),
          referenceId('lyons-2014-oxygen-rise'),
        ],
      },
      {
        id: 'crosslink-earth',
        kind: 'cross-link',
        topicId: topicId('earths-changing-atmosphere'),
        rationale:
          'The same story told from the planet’s side, as part of the history of Earth’s air.',
      },
    ],
    furtherReading: [referenceId('fischer-2016-oxygenic')],
  },

  {
    id: topicId('life-and-the-carbon-cycle'),
    slug: 'life-and-the-carbon-cycle',
    sectionId: LIFE,
    order: 68,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Life and the carbon cycle',
    subtitle:
      'The same atoms, endlessly rearranged — and a slow leak that sets the planet’s temperature.',
    summary: {
      essential:
        'Carbon moves continuously between the air, the oceans, living things and the rocks. Photosynthesis takes it out of the air; respiration and decay put it back. A tiny fraction escapes the loop by being buried, and that fraction is what controls climate over millions of years.',
      detailed:
        'Understanding the cycle means holding two timescales at once: a fast biological loop that turns over in years to centuries, and a slow geological loop that turns over in hundreds of thousands to millions of years.',
      technical:
        'The fast loop exchanges ~100 GtC/yr between atmosphere and biosphere and ~90 GtC/yr with the surface ocean. The slow loop — silicate weathering, carbonate deposition, subduction and volcanic return — operates at ~0.1–0.3 GtC/yr but is the only route by which the surface system gains or loses carbon on geological time.',
    },
    glossaryTerms: [
      glossaryTermId('silicate-weathering'),
      glossaryTermId('photosynthesis'),
      glossaryTermId('biosphere'),
    ],
    related: [
      topicId('volcanoes-and-the-carbon-cycle'),
      topicId('life-as-a-geological-force'),
      topicId('life-environment-feedback'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A carbon atom in the air today was, quite possibly, part of a leaf last summer, part of a soil bacterium the winter before, part of a limestone cliff for a hundred million years before that, and part of a volcanic plume before that. The atom does not change. What changes is what it is bound to and where it is sitting, and the movement between those places is what we call the carbon cycle.',
          detailed:
            'The fast part of the cycle is dominated by life and is close to balanced. Plants take carbon dioxide out of the air; plants, animals, fungi and bacteria put it back through respiration and decay. On a global annual basis these two flows nearly cancel — the seasonal wobble you can see in atmospheric CO2 records is the northern hemisphere’s forests breathing in during summer and out during winter.',
        },
      },
      {
        id: 'viz-carbon',
        kind: 'visualization',
        visualizationId: visualizationId('biological-carbon-cycle'),
      },
      {
        id: 'burial',
        kind: 'prose',
        text: {
          essential:
            'The interesting part is the leak. A very small fraction of organic carbon never gets decomposed. It sinks into ocean sediment where there is no oxygen, or is buried in a swamp, and stays there. Over hundreds of millions of years those tiny leaks accumulated into coal seams, oil fields and the vast reservoir of organic carbon dispersed through sedimentary rock.',
          detailed:
            'That burial is also what allows oxygen to persist. Photosynthesis and respiration are chemically opposite; if every scrap of organic carbon were respired, all the oxygen released in making it would be consumed again. The oxygen in the air exists precisely because some carbon was buried unoxidised. Atmospheric oxygen and buried organic carbon are two sides of one ledger.',
          technical:
            'This coupling is why organic carbon isotope records are used to reconstruct oxygen history. Photosynthesis preferentially fixes the lighter carbon-12, so periods of enhanced burial leave the remaining inorganic reservoir enriched in carbon-13 — a signal recorded in carbonate rocks and used to infer changes in the oxygen budget over Precambrian and Phanerozoic time.',
        },
      },
      {
        id: 'claim-thermostat',
        kind: 'claim',
        statement: {
          essential:
            'Life accelerates the weathering of rock, strengthening the feedback that regulates Earth’s long-term temperature.',
          detailed:
            'Silicate weathering pulls carbon dioxide out of the air, and it runs faster when the planet is warmer and wetter — a natural thermostat. Roots, soil acids and the fungi associated with roots increase weathering rates substantially compared with bare rock, which means the arrival of land plants tightened a control loop that had been operating since long before there were plants.',
          technical:
            'Field and experimental estimates of the biotic weathering enhancement vary widely, from factors of two to more than ten depending on lithology, climate and the plant community. The direction of the effect is well established; the magnitude, and hence the size of the Devonian climate perturbation attributed to it, remains actively researched.',
        },
        evidence: 'active-research',
        references: [
          referenceId('berner-2003-carbon-cycle'),
          referenceId('walker-1981-thermostat'),
        ],
      },
      {
        id: 'today',
        kind: 'callout',
        tone: 'note',
        title: 'Why the present matters here',
        text: {
          essential:
            'Burning fossil fuels takes carbon that the slow cycle removed over hundreds of millions of years and returns it to the air in a few centuries. That is not a new kind of process — it is the same cycle, run in reverse at a rate the slow loop cannot match.',
          detailed:
            'The silicate-weathering thermostat does eventually remove excess carbon dioxide, and it will do so this time as well. Its response time is on the order of hundreds of thousands of years, which is why it is not a solution to anything on a human timescale.',
        },
        references: [referenceId('ipcc-2021-ar6-wg1')],
      },
    ],
    furtherReading: [referenceId('berner-2003-carbon-cycle')],
  },

  {
    id: topicId('the-biosphere'),
    slug: 'the-biosphere',
    sectionId: LIFE,
    order: 69,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The biosphere',
    subtitle:
      'A thin, connected shell of living chemistry — thinner, relative to Earth, than the skin on an apple.',
    summary: {
      essential:
        'The biosphere is the whole of Earth’s living matter and the zone it occupies: a layer that runs from a few kilometres into the atmosphere down to several kilometres into the crust and the deepest ocean sediments.',
      detailed:
        'Its most important property is connection. Material and energy flow between distant parts of it — dust from the Sahara fertilises the Amazon, salmon carry ocean nitrogen into forests — so treating any part as self-contained is a simplification that fails at the edges.',
      technical:
        'Depth limits are set by temperature (roughly 120 °C for known life) and energy availability rather than by pressure. The deep subsurface biosphere may hold a substantial fraction of prokaryotic cells, with estimates that have been revised significantly and remain uncertain.',
    },
    glossaryTerms: [glossaryTermId('biosphere'), glossaryTermId('archean')],
    related: [
      topicId('life-as-a-geological-force'),
      topicId('what-is-an-ecosystem'),
      topicId('what-does-life-actually-need'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Scale it. Earth is about 12,700 kilometres across. Almost all life sits within a shell perhaps twenty kilometres thick — from the highest birds to the deepest drilled microbes. On a globe the size of a basketball, that is a layer thinner than a coat of varnish. Everything that has ever lived, every forest and ocean and civilisation, has happened inside it.',
          detailed:
            'It is also not uniform. Most of the biosphere’s mass is in a much thinner band still: the upper few metres of soil, the sunlit top of the ocean, and the trunks of trees. Below and above that, life becomes sparse, slow and strange — subsurface microbes that may divide once a century, living on hydrogen seeping out of rock.',
        },
      },
      {
        id: 'viz-biosphere',
        kind: 'visualization',
        visualizationId: visualizationId('biosphere-biomass'),
      },
      {
        id: 'connected',
        kind: 'prose',
        text: {
          essential:
            'The parts are linked in ways that look implausible until you follow the material. Dust blown from a dry lake bed in Chad crosses the Atlantic and delivers phosphorus to the Amazon rainforest, which loses phosphorus to its rivers and would run down without the resupply. Salmon swim upstream, are eaten by bears, and the nitrogen from the open Pacific ends up in the wood of trees hundreds of kilometres inland.',
          detailed:
            'These are not curiosities; they are how the biosphere works. Nutrient limitation is local, transport is global, and the pathways are frequently biological. It is one of the reasons ecological boundaries are analytical conveniences rather than real edges, and one of the reasons predicting the consequences of a local disturbance is hard.',
        },
      },
      {
        id: 'claim-deep',
        kind: 'claim',
        statement: {
          essential:
            'Life extends kilometres into the crust and into ocean sediments, living on chemical energy rather than sunlight.',
          detailed:
            'Drilling programmes have recovered active microbial communities from sediments hundreds of metres below the seafloor and from continental crust several kilometres down. Some of these organisms appear to metabolise extraordinarily slowly, with estimated generation times of years to millennia.',
          technical:
            'Total deep-subsurface cell counts have been revised downward substantially since early estimates, from ~10^30 cells to roughly 2–6 × 10^29, and remain among the least certain numbers in the biomass census. The upper temperature limit for growth is ~122 °C in culture, which places a physical floor on the biosphere along the geothermal gradient.',
        },
        evidence: 'active-research',
        references: [
          referenceId('bar-on-2018-biomass'),
          referenceId('rothschild-mancinelli-2001-extremophiles'),
        ],
      },
    ],
    furtherReading: [referenceId('bar-on-2018-biomass')],
  },

  {
    id: topicId('life-environment-feedback'),
    slug: 'life-environment-feedback',
    sectionId: LIFE,
    order: 70,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Life–environment feedback',
    subtitle:
      'Organisms change their surroundings, and the changed surroundings select the next generation.',
    summary: {
      essential:
        'Life and environment are not separate systems with one acting on the other. Organisms alter conditions; altered conditions change which organisms do well; those organisms alter conditions further. The loop has been running for four billion years.',
      detailed:
        'Some of these loops amplify change and some damp it down. Both exist, and which dominates in a given situation is an empirical question — not something that can be assumed from the fact that the planet has remained habitable.',
      technical:
        'Positive feedbacks (ice–albedo, methane–clathrate) and negative feedbacks (silicate weathering, nutrient limitation of productivity) coexist across overlapping timescales. System behaviour depends on relative gains and response times, and can include multiple stable states with threshold transitions between them.',
    },
    glossaryTerms: [glossaryTermId('albedo'), glossaryTermId('silicate-weathering')],
    related: [
      topicId('ecological-feedback'),
      topicId('gaia-hypothesis'),
      topicId('snowball-earth'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The cleanest example of a loop that runs away is ice. Ice is white and reflects sunlight, so the more ice there is, the less heat the planet absorbs, so it gets colder, so there is more ice. Once that starts it accelerates itself. The clearest example of a loop that settles down is rock weathering. A warmer, wetter planet weathers rock faster, weathering pulls carbon dioxide out of the air, less carbon dioxide means a cooler planet, and weathering slows.',
          detailed:
            'Earth has both, operating at once, on different timescales. That is why its climate history is neither a smooth line nor a runaway: it is long stable stretches punctuated by fast transitions, which is exactly what a system with strong stabilising feedbacks and occasional threshold-crossing amplifying ones should look like.',
        },
      },
      {
        id: 'viz-feedback',
        kind: 'visualization',
        visualizationId: visualizationId('life-environment-feedback'),
      },
      {
        id: 'biological',
        kind: 'prose',
        text: {
          essential:
            'Life sits inside these loops rather than beside them. Forests transpire water that falls again as rain downwind, so a rainforest partly makes its own rainfall — cut enough of it and the remainder gets drier. Marine plankton release a sulphur compound that helps seed cloud droplets, and clouds reflect sunlight. Peat bogs lock carbon away and keep themselves waterlogged in doing so.',
          detailed:
            'Each of these is a real, measured mechanism. What is not established is how strong any of them is at planetary scale, and the honest position varies by case. Amazonian moisture recycling is well documented; the plankton–cloud connection is real chemistry whose climatic magnitude has been argued about for three decades and is now generally thought to be modest.',
        },
      },
      {
        id: 'claim-tipping',
        kind: 'claim',
        statement: {
          essential:
            'Systems with strong feedbacks can have more than one stable state, and can flip between them quickly when a threshold is crossed.',
          detailed:
            'Snowball Earth is the dramatic case: a planet that was temperate, crossed an ice-albedo threshold, and froze to the tropics — then stayed frozen for millions of years because the same feedback held it there, until volcanic carbon dioxide accumulated enough to force it back. The same mathematics describes lakes that flip between clear and algae-choked, and rangeland that flips between grass and scrub.',
          technical:
            'Formally these are alternative attractors separated by an unstable equilibrium, with hysteresis: the forcing needed to leave a state is larger than the forcing that would have prevented entering it. Identifying thresholds in advance from observational data is difficult, and proposed early-warning indicators such as critical slowing down have shown mixed performance outside controlled systems.',
        },
        evidence: 'model',
        references: [referenceId('hoffman-2017-snowball-review'), referenceId('ipcc-2021-ar6-wg1')],
      },
      {
        id: 'not-designed',
        kind: 'callout',
        tone: 'caution',
        title: 'Stabilising is not the same as designed to stabilise',
        text: {
          essential:
            'A negative feedback loop can hold a system steady without anyone or anything having arranged it. Silicate weathering regulates Earth’s temperature because of the temperature dependence of a chemical reaction, not because the planet is maintaining itself.',
          detailed:
            'Keeping this straight is what allows the next topics to be read carefully. The existence of stabilising feedbacks is a scientific observation. The claim that they exist because they stabilise, or that the system selects for them, is a much stronger claim requiring a mechanism — and that is precisely the point of contention in the Gaia debate.',
        },
      },
    ],
    furtherReading: [referenceId('kirchner-2002-gaia')],
  },

  {
    id: topicId('niche-construction'),
    slug: 'niche-construction',
    sectionId: LIFE,
    order: 71,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Niche construction',
    subtitle:
      'Organisms do not only adapt to their environment. They build the environment they then adapt to.',
    summary: {
      essential:
        'Niche construction is the observation that organisms modify their own surroundings — and their descendants’ surroundings — in ways that change the selection pressures acting on them. Beavers build dams; earthworms rebuild soil; trees create shade and then compete for light in it.',
      detailed:
        'The scientific content is that inheritance has two channels: genes, and a modified environment. Both are passed to the next generation, and both influence which variants succeed.',
      technical:
        'Formally, niche construction introduces a feedback term into evolutionary models in which the fitness function itself depends on the population’s past activity. Whether this requires an extension of evolutionary theory or is adequately captured within standard frameworks is an active and sometimes heated methodological dispute.',
    },
    glossaryTerms: [
      glossaryTermId('niche-construction'),
      glossaryTermId('ecological-niche'),
      glossaryTermId('adaptation'),
    ],
    related: [
      topicId('what-is-an-evolutionary-niche'),
      topicId('life-environment-feedback'),
      topicId('gaia-hypothesis'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A beaver is not simply well adapted to ponds. Beavers make ponds. A dam turns a stream into still water, floods the surrounding trees, changes what plants grow there, and produces exactly the habitat that beaver anatomy and behaviour suit. The dam outlasts the beaver that built it. Its offspring inherit not only their parents’ genes but their parents’ pond.',
          detailed:
            'Once you notice this pattern it is everywhere. Earthworms drag leaves underground and change soil chemistry and drainage so much that the soil of a temperate woodland is substantially a worm product — and worm physiology, still closer to a freshwater ancestor than a terrestrial one, works in that soil because worms made it that way. Ants farm fungus. Corals build the reef they live in. Every forest is an organism-built environment.',
        },
      },
      {
        id: 'viz-niche-construction',
        kind: 'visualization',
        visualizationId: visualizationId('niche-construction'),
      },
      {
        id: 'claim-two-inheritance',
        kind: 'claim',
        statement: {
          essential:
            'Environmental modifications made by one generation can persist and alter selection on the next, giving a second channel of inheritance alongside genes.',
          detailed:
            'This is called ecological inheritance. It is not an alternative to genetic inheritance and it is not Lamarckian — no acquired trait is written back into DNA. What is passed on is a changed set of conditions, which changes which genes do well.',
          technical:
            'Models incorporating niche construction can produce outcomes standard models do not, including the fixation of otherwise deleterious alleles, time-lagged responses to selection, and the persistence of populations in conditions that would otherwise be unsuitable. Whether such effects are common enough to demand a reframing of evolutionary theory is disputed.',
        },
        evidence: 'active-research',
        references: [referenceId('odling-smee-2003-niche-construction')],
      },
      {
        id: 'dispute',
        kind: 'open-question',
        question:
          'Does niche construction require a change to evolutionary theory, or is it already accounted for?',
        whyItMatters: {
          essential:
            'Everyone agrees organisms modify their environments and that this affects selection. The argument is about whether this is a genuinely new causal structure that standard population genetics handles awkwardly, or a well-known phenomenon that existing models already describe once you write the environment as a variable.',
          detailed:
            'Advocates argue that treating the environment as an independent given misses a real feedback and leads to poorer predictions. Critics reply that environmental change has always been modellable as a frequency- or density-dependent term, and that renaming it does not add explanatory power. This is a dispute about framing and emphasis as much as about facts, and it has not resolved.',
        },
        whatWouldSettleIt: {
          essential:
            'A prediction that the two framings disagree about, tested in a real system. So far the disagreement has mostly produced different descriptions of the same outcomes rather than different expectations.',
          detailed:
            'The most promising candidates are long-running experiments in which organisms measurably alter their medium — microbial systems where the environment is manipulable and the modification can be switched off — so that the evolutionary trajectory with and without the feedback can be compared directly.',
        },
        references: [referenceId('odling-smee-2003-niche-construction')],
      },
      {
        id: 'scale-up',
        kind: 'prose',
        text: {
          essential:
            'Scaled up, niche construction is the mechanism behind the previous three topics. Cyanobacteria oxygenating the atmosphere is niche construction at planetary scale — and a reminder that constructed niches are not necessarily better ones. The oxygen those bacteria released poisoned most of the world that existed at the time, including a great deal of life closely related to them.',
        },
      },
    ],
    furtherReading: [referenceId('odling-smee-2003-niche-construction')],
  },

  {
    id: topicId('gaia-hypothesis'),
    slug: 'gaia-hypothesis',
    sectionId: LIFE,
    order: 72,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The Gaia hypothesis',
    subtitle: 'Three different claims travel under one name. They deserve very different verdicts.',
    summary: {
      essential:
        'Gaia is the proposal that life and the physical Earth form a single self-regulating system. Part of that idea is uncontroversial science, part is genuinely disputed, and part is a philosophical claim that is not supported by evidence — and the three are constantly confused.',
      detailed:
        'What is solid: life strongly influences the atmosphere, oceans and rocks, and some of those influences are stabilising. What is disputed: whether the system as a whole is regulated in any meaningful sense, and by what mechanism. What is not scientifically supported: that Earth is literally an organism, or that it has purposes.',
      technical:
        'The core mechanistic objection is that regulation at planetary scale would require selection among planets or among biospheres, and no such process is known. Proposed alternatives include sequential selection, selection by survival, and the observation that persistent configurations are simply the ones we find ourselves in — all of which weaken the claim considerably.',
    },
    glossaryTerms: [glossaryTermId('biosphere'), glossaryTermId('natural-selection')],
    related: [
      topicId('life-environment-feedback'),
      topicId('niche-construction'),
      topicId('does-evolution-have-a-purpose'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'James Lovelock was working on instruments for detecting life on Mars when he had the thought that turned into Gaia. He reasoned that a lifeless planet’s atmosphere should settle into chemical equilibrium, whereas life would keep pushing it away from equilibrium. Mars, he noted, has an atmosphere that is essentially at equilibrium: carbon dioxide, and not much else happening. Earth’s is wildly out of equilibrium — oxygen and methane coexisting, when they should react away.',
          detailed:
            'That much is straightforwardly right, and it remains one of the most useful ideas in the search for life beyond Earth. The step that made Gaia famous, and contentious, was the next one: Lovelock proposed with Lynn Margulis that life does not merely disturb the planet’s chemistry but actively regulates it, holding temperature, ocean salinity and atmospheric composition within limits suitable for life.',
        },
      },
      {
        id: 'viz-daisyworld',
        kind: 'visualization',
        visualizationId: visualizationId('gaia-daisyworld'),
      },
      {
        id: 'claim-influence',
        kind: 'claim',
        statement: {
          essential:
            'Life measurably influences Earth’s atmosphere, oceans and surface chemistry, holding them far from what chemistry alone would produce.',
          detailed:
            'This part of the Gaia programme is not in dispute and has been thoroughly vindicated. Atmospheric oxygen, the nitrogen cycle, the composition of the ocean and the mineralogy of the crust are all substantially biological products.',
        },
        evidence: 'established',
        references: [
          referenceId('lovelock-margulis-1974-gaia'),
          referenceId('falkowski-2008-microbial-engines'),
        ],
      },
      {
        id: 'daisyworld',
        kind: 'prose',
        text: {
          essential:
            'The best-known argument for the stronger claim is a model called Daisyworld. Imagine a planet with two kinds of daisy, one black and one white, orbiting a star that slowly brightens. When the planet is cool, black daisies absorb heat and do better, warming the planet. When it is hot, white daisies reflect heat and do better, cooling it. The result is a planet whose temperature stays remarkably steady while the star’s output changes enormously — and no daisy is trying to regulate anything.',
          detailed:
            'Daisyworld is a beautiful demonstration that planetary-scale regulation does not require foresight. But it is a demonstration of possibility, not evidence about Earth. Its regulation depends on a specific and convenient coupling: the trait under selection (colour) happens to be the same trait that controls the planetary variable (albedo), and it works in the right direction. There is no general reason for real biospheres to be built that way.',
          technical:
            'Subsequent analyses showed Daisyworld’s regulation is sensitive to assumptions about the shape of the growth-temperature response, the introduction of cheaters and herbivores, and mutation of albedo. Some extensions preserve regulation; others destroy it. The model is best read as an existence proof for a mechanism class rather than a claim about Earth.',
        },
      },
      {
        id: 'the-hard-objection',
        kind: 'callout',
        tone: 'caution',
        title: 'The mechanism problem',
        text: {
          essential:
            'Natural selection works because entities reproduce with variation and differ in how many descendants they leave. There is only one Earth. It does not reproduce, there is no population of competing biospheres, and so there is no known process that could have shaped the biosphere to be good at regulating itself.',
          detailed:
            'This objection, pressed hardest by Ford Doolittle and by Richard Dawkins before him, is the reason many biologists reject strong Gaia while accepting every individual mechanism it points at. Recent responses propose that persistence rather than reproduction could do the selecting — configurations that happen to be stable last longer and are therefore what we observe — but that is a substantially weaker claim than regulation, and closer to a survivorship observation than a mechanism.',
        },
        references: [referenceId('doolittle-2019-gaia')],
      },
      {
        id: 'not-an-organism',
        kind: 'callout',
        tone: 'misconception',
        title: 'Earth is not a conscious living being',
        text: {
          essential:
            'The name invites it, and popular retellings often make the leap: Earth as an organism, aware of itself, with intentions. There is no scientific evidence for this, and it is not what the scientific version of the hypothesis claims. Earth has no nervous system, no metabolism of its own distinct from the organisms on it, no capacity to reproduce, and no demonstrated goals.',
          detailed:
            'Lovelock himself later regretted the personifying language, and the field that grew out of his work is called Earth system science rather than Gaia theory for exactly this reason. Saying the planet is a coupled system with feedbacks is a scientific statement. Saying it is alive, or that it wants anything, is a metaphor at best and a claim without evidence at worst — and the two get conflated constantly.',
        },
      },
      {
        id: 'open-regulation',
        kind: 'open-question',
        question:
          'Is Earth’s habitability the result of regulation, or of luck plus the fact that we are here to ask?',
        whyItMatters: {
          essential:
            'Earth has stayed habitable for close to four billion years while the Sun brightened by around thirty percent. Something kept the temperature in range. The silicate-weathering thermostat plausibly explains a large part of it without any biological regulation at all. Whether life adds meaningful stabilisation on top of that, or has merely ridden along, is unresolved.',
          detailed:
            'There is also a selection effect that must be taken seriously: we could only be having this conversation on a planet where things happened to stay habitable long enough. If habitable stretches are rare and mostly short, we would still find ourselves on a long one. Distinguishing genuine regulation from that observation requires either a mechanism or a sample of other biospheres, and at present we have neither.',
        },
        whatWouldSettleIt: {
          essential:
            'Other biospheres. A statistical sample of inhabited planets would show whether long habitable histories are typical, as regulation predicts, or rare, as the luck-plus-observation-bias account predicts.',
          detailed:
            'Short of that, progress comes from quantifying the individual feedbacks well enough to ask whether the abiotic ones alone can account for Earth’s temperature history under a brightening Sun. If they can, strong Gaia becomes explanatorily unnecessary; if a stabilising gap remains, the case for a biological contribution strengthens.',
        },
        references: [
          referenceId('doolittle-2019-gaia'),
          referenceId('sagan-mullen-1972-faint-sun'),
        ],
      },
    ],
    furtherReading: [referenceId('doolittle-2019-gaia'), referenceId('kirchner-2002-gaia')],
  },
];
