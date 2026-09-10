/**
 * Earth — the planet before life, the first traces of life, and the handover.
 *
 * These three close the section and open the next one. "Earth before life" sets
 * the chemical stage without pre-empting the origin-of-life section; "the first
 * evidence of life" is deliberately about *evidence* rather than about
 * organisms, because every candidate for the oldest trace of life is contested
 * and a reader deserves to see why; and "Earth as a changing system" gathers
 * the section's argument — that geology, air, ocean and life became one coupled
 * machine — and hands the reader across.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const EARTH = sectionId('earth');
const REVIEWED = '2026-09-10';

export const EARTH_LIFE_TOPICS: readonly Topic[] = [
  {
    id: topicId('earth-before-life'),
    slug: 'earth-before-life',
    sectionId: EARTH,
    order: 14,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Earth before life',
    subtitle: 'Warm water, dissolved minerals, energy gradients — and no biology yet.',
    summary: {
      essential:
        'By roughly 4.3 billion years ago Earth had oceans, an atmosphere without oxygen, active volcanism, and a surface being constantly reworked by heat and water. That is a chemistry laboratory of enormous size, running continuously, with energy arriving from sunlight, lightning, volcanoes and hot rock meeting cold sea.',
      detailed:
        'It is important not to slide from "the ingredients were there" to "therefore life". Having carbon, water, energy and time makes chemistry inevitable. It does not make biology inevitable. What this topic does is describe the conditions honestly; what came next is a separate and much harder question.',
      technical:
        'Constraints on the pre-biotic surface come from zircon geochemistry, models of atmospheric composition buffered by mantle oxidation state, and the observed chemistry of modern analogue environments — alkaline serpentinising vents, subaerial hot springs, and impact-generated hydrothermal systems.',
    },
    glossaryTerms: [glossaryTermId('prebiotic-chemistry'), glossaryTermId('hadean')],
    related: [
      topicId('the-first-evidence-of-life'),
      topicId('how-could-complex-molecules-form-on-early-earth'),
      topicId('hydrothermal-vents-and-other-possible-origins'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Picture the surface. There is an ocean, warmer than today’s and probably more acidic, because the atmosphere above it is heavy with carbon dioxide. There is land, though much less of it — the continents are still growing. Volcanoes are more numerous and more active, because the planet is hotter inside. There is no ozone layer, so ultraviolet light reaches the surface at intensities that would be lethal to most modern life. And there is no oxygen, which means organic molecules are not immediately destroyed by oxidation the way they would be today.',
          detailed:
            'That last point is easy to skip past and is central. Oxygen is why a dead leaf rots and why iron rusts. In an atmosphere without it, organic molecules formed by whatever process can persist, accumulate, and react with each other. The anoxic early Earth was, chemically speaking, a far more hospitable place for building complicated carbon compounds than the modern one.',
        },
      },
      {
        id: 'viz-early-earth-env',
        kind: 'visualization',
        visualizationId: visualizationId('prebiotic-environments'),
      },
      {
        id: 'energy-gradients',
        kind: 'prose',
        text: {
          essential:
            'Chemistry needs energy, and the early Earth had it in several forms. Sunlight, unfiltered. Lightning, in an atmosphere that probably supported plenty of it. Heat from volcanoes and from a hotter interior. Impacts, which briefly created enormous local temperatures. And, perhaps most interestingly, chemical gradients — places where two fluids of different composition met and had not yet reacted.',
          detailed:
            'A gradient is a source of energy in the way a hill is a source of energy for a rolling ball. Where hot, alkaline, hydrogen-rich fluid seeping out of the seafloor met cold, mildly acidic ocean water, there was a persistent difference in both acidity and chemical potential across a thin mineral barrier. That is not a poetic description. It is very close to the arrangement every living cell uses to make its energy today, which is why it has attracted so much attention.',
        },
      },
      {
        id: 'claim-organic-inventory',
        kind: 'claim',
        statement: {
          essential:
            'The molecules life is built from form readily under early-Earth-like conditions, and they also arrive from space. Amino acids, sugars and the components of nucleotides have all been made in laboratory simulations and found in meteorites.',
          detailed:
            'Stanley Miller’s 1953 experiment made this concrete: a flask of simple gases, a spark to simulate lightning, and within a week the water contained amino acids. The assumed atmosphere was later judged too reducing, but reanalysis of his archived samples with modern instruments found a far richer product mixture than he could detect, and comparable experiments with more realistic gas mixtures also yield organics, if less abundantly.',
          technical:
            'The Murchison meteorite contains over 90 amino acids, including many not used by biology, with a slight enantiomeric excess in some. This is important as a control: it demonstrates abiotic synthesis unambiguously, since the meteorite predates any terrestrial biology it could have been contaminated by, and the non-biological amino acids rule out contamination as the source.',
        },
        evidence: 'established',
        references: [referenceId('miller-1953'), referenceId('bada-2013-miller-legacy')],
      },
      {
        id: 'caution-gap',
        kind: 'callout',
        tone: 'caution',
        title: 'Ingredients are not an explanation',
        text: {
          essential:
            'Making amino acids is not making life, and the distance between them is the whole problem. A cell is not a collection of the right molecules; it is a system of molecules organised so that it maintains itself, extracts energy from its surroundings and reproduces with heredity. Producing the parts does not produce the organisation.',
          detailed:
            'The honest position is that we know the chemical inventory of the early Earth included what was needed, we have plausible routes to several of the harder molecules, and we do not know how the transition to self-maintaining, replicating systems occurred. The next section examines the competing proposals in detail. This one stops here deliberately.',
        },
        references: [referenceId('benner-2010-defining-life')],
      },
      {
        id: 'xlink-origin',
        kind: 'cross-link',
        topicId: topicId('how-could-complex-molecules-form-on-early-earth'),
        rationale:
          'The chemistry that follows from these conditions is taken up properly in the Origin & Evolution of Life section.',
      },
    ],
    furtherReading: [referenceId('zahnle-2007-early-earth')],
  },

  {
    id: topicId('the-first-evidence-of-life'),
    slug: 'the-first-evidence-of-life',
    sectionId: EARTH,
    order: 15,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The first evidence of life',
    subtitle:
      'Every candidate for the oldest trace is disputed — and the reasons are worth understanding.',
    summary: {
      essential:
        'Nobody has found a fossil cell from the earliest Earth. What exists are candidate traces: layered structures that might be microbial mats, tiny shapes in rock that might be cells, and carbon with an isotopic signature that living things tend to produce. Each has been challenged, and some of the challenges have stuck.',
      detailed:
        'The difficulty is real and not a failure of effort. Ancient rocks have been heated, squeezed and chemically altered for billions of years. Non-biological processes can make shapes that look like microbes and can, in some circumstances, fractionate carbon isotopes in a life-like direction. Distinguishing a trace of life from a mineral coincidence in a four-billion-year-old rock is genuinely hard.',
      technical:
        'The main lines of evidence are morphological (stromatolites, putative microfossils), isotopic (δ¹³C depletion of −20 to −40‰ characteristic of carbon fixation), and molecular-clock estimates. The strongest widely accepted case is the 3.465 Ga Apex chert assemblage with taxon-correlated δ¹³C; older claims at 3.7 and 4.1 Ga remain contested.',
    },
    glossaryTerms: [glossaryTermId('stromatolite'), glossaryTermId('abiogenesis')],
    related: [
      topicId('earth-before-life'),
      topicId('when-did-the-first-life-appear'),
      topicId('luca-the-last-universal-common-ancestor'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'To say something was alive, billions of years after it stopped being alive, you need a trace that only life could have left. Three kinds have been proposed. Shapes: structures the right size and form to be cells or microbial mats. Chemistry: carbon whose isotopes are sorted in the way living things sort them. And context: a rock formed in an environment where life would plausibly have lived. The strongest cases have all three.',
          detailed:
            'The isotope argument is the most powerful and worth understanding. Carbon comes in two stable forms, and the lighter one reacts slightly more readily. Enzymes that build organic molecules from carbon dioxide therefore prefer the lighter isotope, and the organic matter they produce comes out measurably light — typically twenty to forty parts per thousand lighter than the source. Find carbon that light in an ancient rock and you have found something that behaves as though it was made by a metabolism.',
        },
      },
      {
        id: 'viz-earliest-life',
        kind: 'visualization',
        visualizationId: visualizationId('earliest-life-evidence'),
      },
      {
        id: 'claim-3465',
        kind: 'claim',
        statement: {
          essential:
            'The strongest widely accepted evidence for early life comes from 3.465-billion-year-old rocks in Western Australia, where microscopic structures have carbon isotope signatures that differ between shapes in exactly the way different metabolisms would produce.',
          detailed:
            'That last detail is what makes the case unusually strong. It would be one thing to find light carbon in a rock; it is another to find that structures of different shapes carry systematically different isotope values, matching what you would expect if some were photosynthesisers and others methane-cycling organisms. Non-biological processes have no obvious reason to sort carbon by the shape of the object containing it.',
          technical:
            'Secondary ion mass spectrometry on individual microfossils in the Apex chert yields δ¹³C values from −30 to −43‰, correlated with morphotype. The correlation, rather than the absolute values, is the load-bearing part of the argument; abiotic Fischer–Tropsch-type synthesis can produce comparably light bulk carbon.',
        },
        evidence: 'inference',
        references: [referenceId('schopf-2018-microfossils')],
      },
      {
        id: 'contested',
        kind: 'prose',
        text: {
          essential:
            'Older claims exist and each one has been argued over publicly. In 2016 a team reported 3.7-billion-year-old stromatolites from Greenland; in 2018 another team examined the same outcrop, found the structures continued into three dimensions in ways that did not fit a microbial mat, and concluded they were deformation features in the rock. In 2017 microscopic tubes in Canadian rocks, possibly as old as 4.28 billion years, were interpreted as vent-dwelling microbes; others have proposed mineral explanations. In 2015 a Hadean zircon was found to contain carbon with a life-like isotope signature — one grain, in one crystal.',
          detailed:
            'None of these disputes indicates bad science. They indicate a field working at the limit of what the evidence can support, where the correct response to an extraordinary claim is for other groups to go and look. It is worth noticing that the disputes almost never concern whether the rocks are old; dating is the solid part. They concern whether the feature inside the rock was made by an organism.',
        },
      },
      {
        id: 'caution-absence',
        kind: 'callout',
        tone: 'caution',
        title: 'Absence of evidence, in this case, really is weak evidence of absence',
        text: {
          essential:
            'Failing to find traces of life in the oldest rocks does not mean life was absent. The preservation odds are terrible: soft-bodied single cells rarely fossilise even under ideal conditions, and almost no rock of the relevant age survives unaltered.',
          detailed:
            'This is why molecular clocks matter as an independent line. Comparing gene sequences across living organisms and calibrating the rate of change against dated fossils gives an estimate of when lineages diverged. Those estimates consistently place the last common ancestor of all life well before the oldest undisputed fossil — which is what you would expect if the fossil record is incomplete, and is a genuinely independent argument.',
        },
        references: [referenceId('moody-2024-luca')],
      },
      {
        id: 'quantities-early-life',
        kind: 'quantity',
        quantities: [
          {
            id: 'oldest-accepted',
            label: 'Oldest widely accepted microfossils',
            value: 3.465,
            unit: 'billion years',
            context:
              'Age well constrained and biogenicity accepted by most. Apex chert, Western Australia, with morphology-correlated carbon isotopes.',
            references: [referenceId('schopf-2018-microfossils')],
          },
          {
            id: 'oldest-claimed',
            label: 'Oldest claimed trace',
            value: 4.1,
            unit: 'billion years',
            uncertainty: { kind: 'lower-limit' },
            context:
              'Contested; the range reflects disagreement about the host rock as well as the interpretation. Carbon in a Hadean zircon, and tubular structures in Canadian vent deposits. Neither is settled.',
            references: [
              referenceId('bell-2015-biogenic-carbon'),
              referenceId('dodd-2017-vent-fossils'),
            ],
          },
          {
            id: 'oldest-rock',
            label: 'Oldest surviving intact rock',
            value: 4.03,
            unit: 'billion years',
            uncertainty: { plusMinus: 0.01 },
            context:
              'Acasta Gneiss, Canada. Everything older is known only from crystals that outlived their parent rock.',
            references: [referenceId('valley-2014-hadean-zircon')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('allwood-2018-isua-comment')],
  },

  {
    id: topicId('earth-as-a-changing-system'),
    slug: 'earth-as-a-changing-system',
    sectionId: EARTH,
    order: 16,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Earth as a changing system',
    subtitle: 'Rock, air, ocean and life stopped being separate subjects a long time ago.',
    summary: {
      essential:
        'The habit of studying Earth in pieces — geology here, atmosphere there, biology somewhere else — is a convenience of university departments, not a feature of the planet. Everything is connected. Volcanoes set the carbon dioxide level, which sets the temperature, which sets the weathering rate, which sets the carbon dioxide level. Life changed the atmosphere, and the changed atmosphere changed what life was possible.',
      detailed:
        'Once you see the couplings, the interesting question stops being "what is Earth like" and becomes "what states can Earth occupy, and what moves it between them". A planet with feedbacks has more than one stable configuration, and the record shows it has visited several.',
      technical:
        'Earth-system science treats the coupled geosphere–hydrosphere–atmosphere–biosphere as a dynamical system with multiple attractors, feedback loops of both signs, and transitions that can be gradual or abrupt. The Snowball episodes and the Great Oxidation Event are the clearest examples of state transitions in the record.',
    },
    glossaryTerms: [
      glossaryTermId('biosphere'),
      glossaryTermId('silicate-weathering'),
      glossaryTermId('great-oxidation-event'),
    ],
    related: [
      topicId('life-as-a-geological-force'),
      topicId('gaia-hypothesis'),
      topicId('how-earths-climate-works'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Take one example and follow it round. Plate tectonics builds mountains. Mountains expose fresh rock to rain. Rain weathering removes carbon dioxide from the atmosphere. Less carbon dioxide means a weaker greenhouse effect and a cooler planet. A cooler planet grows ice sheets. Ice sheets are heavy enough to depress the crust beneath them and change sea level worldwide, which changes where sediment is deposited, which changes what gets buried and subducted, which eventually changes what the volcanoes erupt.',
          detailed:
            'Now add life. Plants accelerate weathering by cracking rock with roots and acidifying soil, so the appearance of land plants around 470 million years ago drew down carbon dioxide and probably contributed to a major glaciation. Marine organisms build carbonate shells, which is now the dominant route for carbon into rock. Microbes control the nitrogen cycle entirely. Life is not a passenger on the geochemical system; it is one of the machinery.',
        },
      },
      {
        id: 'viz-earth-system',
        kind: 'visualization',
        visualizationId: visualizationId('feedback-loops'),
      },
      {
        id: 'claim-coupling',
        kind: 'claim',
        statement: {
          essential:
            'Biological, chemical and geological processes on Earth are coupled tightly enough that none of them can be understood in isolation. The clearest demonstration is that the composition of the atmosphere is set by biology and in turn sets the conditions biology has to live under.',
          detailed:
            'The Great Oxidation Event is the proof case. One metabolic innovation in one group of bacteria eventually changed the atmosphere of an entire planet, which precipitated dissolved iron out of the oceans, laid down the world’s major iron ore deposits, destroyed the methane greenhouse and may have triggered a global glaciation, and made a whole new energy-rich way of life possible for everything that came afterwards. Chemistry, geology, climate and biology, all one event.',
          technical:
            'Microbial metabolisms mediate the major redox transformations in the carbon, nitrogen, sulfur and iron cycles, with turnover times orders of magnitude shorter than the abiotic pathways they replaced. On the modern Earth, essentially the entire nitrogen cycle and most of the sulfur cycle run through biology.',
        },
        evidence: 'established',
        references: [
          referenceId('lyons-2014-oxygen-rise'),
          referenceId('falkowski-2008-microbial-engines'),
        ],
      },
      {
        id: 'states',
        kind: 'prose',
        text: {
          essential:
            'A system with strong feedbacks does not have one setting. It has several, and it can flip between them. Earth has been an ice-covered world and a world with forests at the poles. It has had an atmosphere without oxygen and one with more oxygen than today. In each case the planet was stable in that state — until something pushed it far enough that a reinforcing feedback took over and carried it somewhere else.',
          detailed:
            'This is why the geological record is more useful than any single model for thinking about what a planet can do. It contains examples of the transitions actually happening, with their speeds and their aftermaths recorded in rock. The uncomfortable lesson from those records is that transitions are often much faster than the slow processes that set up the conditions for them.',
        },
      },
      {
        id: 'note-not-designed',
        kind: 'callout',
        tone: 'note',
        title: 'Coupled is not the same as designed',
        text: {
          essential:
            'It is tempting, looking at the feedbacks, to describe Earth as regulating itself for the benefit of life. Resist that phrasing. The weathering thermostat exists because chemical reactions go faster when warm, which is a fact about chemistry and not a purpose. It stabilises the climate as a side effect.',
          detailed:
            'The distinction matters because the feedbacks are not all stabilising, and they are indifferent to whether life benefits. The ice–albedo feedback nearly ended the biosphere. The oxygen produced by cyanobacteria was lethal to most organisms alive at the time. A coupled system is not a benevolent one — it is a system whose parts affect each other, which sometimes helps and sometimes does not.',
        },
        references: [referenceId('kirchner-2002-gaia')],
      },
      {
        id: 'xlink-life',
        kind: 'cross-link',
        topicId: topicId('what-is-life'),
        rationale:
          'Earth was a chemically active planet for a billion years before anything on it was alive. What changed is the subject of the next section.',
      },
    ],
    furtherReading: [referenceId('falkowski-2008-microbial-engines')],
  },
];
