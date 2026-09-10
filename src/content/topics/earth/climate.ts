/**
 * Earth — climate, ice, drifting continents, and changing air.
 *
 * These four are grouped because they are the same story told at different
 * amplitudes. Climate is a balance between energy arriving and energy leaving;
 * feedbacks can stabilise that balance or run away with it; the arrangement of
 * continents changes the boundary conditions; and the composition of the air
 * has itself been rewritten, twice, by processes on the surface.
 *
 * Snowball Earth sits here rather than in the "before life" group deliberately.
 * It is the clearest demonstration in the record that a stabilising feedback
 * and a runaway feedback can be the same planet's two available modes.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const EARTH = sectionId('earth');
const REVIEWED = '2026-09-10';

export const EARTH_CLIMATE_TOPICS: readonly Topic[] = [
  {
    id: topicId('how-earths-climate-works'),
    slug: 'how-earths-climate-works',
    sectionId: EARTH,
    order: 10,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How Earth’s climate works',
    subtitle: 'Energy in, energy out — and everything interesting happens in between.',
    summary: {
      essential:
        'Earth’s temperature is set by a balance. Sunlight arrives and warms the surface; the surface radiates heat back to space as infrared. If those two are equal, the temperature holds steady. Change either — how much sunlight is absorbed, or how easily infrared escapes — and the temperature moves until balance is restored.',
      detailed:
        'Certain gases in the atmosphere absorb outgoing infrared and re-radiate part of it downward. That is the greenhouse effect, and it is not optional or controversial: without it Earth’s average surface temperature would be about −18 °C instead of about +15 °C, and the oceans would be ice.',
      technical:
        'Equilibrium requires (1 − α)S/4 = σT_e⁴, giving an effective radiating temperature of 255 K for α = 0.30 and S = 1361 W m⁻². The 33 K difference between T_e and the observed surface temperature is the greenhouse effect, produced because the atmosphere is largely transparent in the visible and largely opaque across much of the thermal infrared.',
    },
    glossaryTerms: [glossaryTermId('greenhouse-effect'), glossaryTermId('albedo')],
    related: [
      topicId('snowball-earth'),
      topicId('volcanoes-and-the-carbon-cycle'),
      topicId('earths-changing-atmosphere'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Everything about Earth’s climate follows from one accounting problem. Sunlight arrives at a known rate. Some of it bounces straight back off clouds, ice and bright ground without ever warming anything. The rest is absorbed. And because a warm object radiates, Earth sends energy back out as infrared. When outgoing equals incoming, the temperature stops changing. That is all a climate is: the solution to that balance.',
          detailed:
            'Do the arithmetic naively and you get a planet at about −18 °C. The actual average surface temperature is about +15 °C. The 33-degree gap is the greenhouse effect, and understanding it requires one more fact: the atmosphere treats visible light and infrared light completely differently. Sunlight passes through almost unimpeded. Outgoing infrared runs into carbon dioxide, water vapour and methane, which absorb it and radiate it again in all directions, including back down.',
        },
      },
      {
        id: 'viz-energy-balance',
        kind: 'visualization',
        visualizationId: visualizationId('climate-energy-balance'),
      },
      {
        id: 'claim-greenhouse',
        kind: 'claim',
        statement: {
          essential:
            'The greenhouse effect is measured, not inferred. Satellites see the infrared leaving Earth and observe the specific wavelength bands where greenhouse gases block it; instruments on the ground see the same bands arriving back downward.',
          detailed:
            'This is worth spelling out because the greenhouse effect is sometimes discussed as though it were a theoretical construct. The absorption spectra of carbon dioxide and water vapour were measured in laboratories in the nineteenth century. The bites they take out of Earth’s outgoing infrared spectrum are visible directly from orbit. The physics is about as settled as physics gets.',
          technical:
            'The Earth’s outgoing longwave spectrum shows the 15 μm CO₂ band radiating at stratospheric rather than surface temperatures, and the depth of that notch has deepened measurably as CO₂ concentration has risen — a change detected in satellite spectra between 1970 and the present.',
        },
        evidence: 'established',
        references: [referenceId('ipcc-2021-ar6-wg1')],
      },
      {
        id: 'feedbacks',
        kind: 'prose',
        text: {
          essential:
            'The complications are all feedbacks — changes that cause further changes. Warm the planet and ice melts; ice is bright and what is underneath is dark, so more sunlight is absorbed, so it warms further. That is a reinforcing feedback. Warm the planet and the air holds more water vapour, which is itself a greenhouse gas, so it warms further still. Also reinforcing.',
          detailed:
            'Not all feedbacks push the same way, which is why the planet is not permanently running away in one direction. A warmer surface radiates more strongly — the fourth power of temperature — which is a powerful stabilising effect and the reason a climate has an equilibrium at all. Clouds do both: they reflect sunlight, which cools, and they trap infrared, which warms, and which effect dominates depends on their height and thickness. Clouds remain the largest single source of uncertainty in climate projections.',
        },
      },
      {
        id: 'misconception-greenhouse',
        kind: 'callout',
        tone: 'misconception',
        title: '“A greenhouse works the same way”',
        text: {
          essential:
            'It does not, which is unfortunate given the name. A garden greenhouse stays warm mainly because the glass physically stops warm air from rising away and mixing with the cold air outside. It suppresses convection.',
          detailed:
            'The atmospheric effect is genuinely radiative: outgoing infrared is absorbed and re-emitted, and the surface ends up warmer because it is receiving radiation from the atmosphere as well as from the Sun. The name stuck for historical reasons and has been confusing students ever since. The physics is not in doubt; only the analogy is bad.',
        },
        references: [referenceId('ipcc-2021-ar6-wg1')],
      },
      {
        id: 'quantities-climate',
        kind: 'quantity',
        quantities: [
          {
            id: 'solar-constant',
            label: 'Sunlight arriving at the top of the atmosphere',
            value: 1361,
            unit: 'W per m²',
            uncertainty: { plusMinus: 0.5 },
            context:
              'Averaged over the whole sphere and over day and night, that becomes about 340 W/m².',
            references: [referenceId('ipcc-2021-ar6-wg1')],
          },
          {
            id: 'albedo-value',
            label: 'Earth’s albedo',
            value: 0.3,
            unit: '',
            uncertainty: { plusMinus: 0.01 },
            context:
              'Thirty percent of arriving sunlight is reflected without being absorbed, mostly by clouds.',
            references: [referenceId('ipcc-2021-ar6-wg1')],
          },
          {
            id: 'greenhouse-warming',
            label: 'Warming from the natural greenhouse effect',
            value: 33,
            unit: '°C',
            context:
              'Well constrained: the difference between the 255 K effective temperature and the 288 K surface average. The difference between the temperature Earth radiates at and the temperature at its surface.',
            references: [referenceId('ipcc-2021-ar6-wg1')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('ipcc-2021-ar6-wg1')],
  },

  {
    id: topicId('snowball-earth'),
    slug: 'snowball-earth',
    sectionId: EARTH,
    order: 11,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Snowball Earth',
    subtitle: 'Twice, at least, the ice reached the equator — and the way out was volcanoes.',
    summary: {
      essential:
        'Around 700 million years ago, glaciers left deposits at sea level in places that were then tropical. The most straightforward reading is that ice covered essentially the entire planet, ocean included, for millions of years at a time. It happened at least twice.',
      detailed:
        'The reason it is possible at all is the ice–albedo feedback: ice reflects sunlight, which cools the planet, which makes more ice. Past a certain point the process runs away and the planet freezes over completely. The reason it is not permanent is that the same freezing shuts down weathering while volcanoes keep erupting, so carbon dioxide accumulates until the greenhouse effect overwhelms the ice.',
      technical:
        'Energy-balance models show that once the ice line advances past roughly 30° latitude the ice–albedo feedback becomes unstable and global glaciation follows. Escape requires accumulating pCO₂ of order 0.1 bar over 10⁶–10⁷ years, and the immediate aftermath is recorded as cap carbonates deposited directly on glacial diamictites.',
    },
    glossaryTerms: [glossaryTermId('albedo'), glossaryTermId('silicate-weathering')],
    related: [
      topicId('how-earths-climate-works'),
      topicId('volcanoes-and-the-carbon-cycle'),
      topicId('multicellular-life'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The evidence arrived as a puzzle that would not go away. Rocks of a certain age, found on several continents, carry the unmistakable marks of glaciers: jumbled unsorted debris, scratched bedrock, stones dropped into fine sediment by melting ice. That is ordinary enough. What is not ordinary is where these rocks were at the time. Magnetic minerals in them record the latitude at which they formed, and they say: near the equator, at sea level.',
          detailed:
            'Tropical glaciers at sea level are not something the modern Earth can produce. Something far more extreme was happening. The proposal that emerged — most forcefully from Paul Hoffman and colleagues in 1998 — was that the whole ocean froze, pole to pole, and stayed frozen for millions of years.',
        },
      },
      {
        id: 'viz-snowball',
        kind: 'visualization',
        visualizationId: visualizationId('snowball-earth'),
      },
      {
        id: 'claim-runaway',
        kind: 'claim',
        statement: {
          essential:
            'Once ice spreads far enough toward the equator, the ice–albedo feedback becomes unstoppable and the planet freezes completely. This is not speculation about a mechanism; it falls out of simple energy-balance calculations.',
          detailed:
            'The reason is geometrical. Sunlight arrives most steeply near the equator, so tropical regions absorb far more energy per square metre than polar ones. Ice advancing across a polar region removes relatively little absorbed sunlight. Ice advancing across the tropics removes a great deal. Past a critical latitude, each increment of ice cools the planet more than the last, and there is no equilibrium left between "some ice" and "all ice".',
          technical:
            'In a one-dimensional energy-balance model with diffusive heat transport, the ice-line latitude has a fold bifurcation near 30°: solutions with the ice line between about 30° and the equator are unstable, so the system jumps to the globally glaciated branch. The same models predict that escape requires a very large CO₂ forcing, which is what makes the exit mechanism non-obvious.',
        },
        evidence: 'model',
        references: [referenceId('hoffman-1998-snowball')],
      },
      {
        id: 'escape',
        kind: 'prose',
        text: {
          essential:
            'The way out is the most satisfying part of the story. Weathering — the process that normally removes carbon dioxide from the atmosphere — needs liquid water and exposed rock. A frozen planet has neither. So the sink switches off. But volcanoes do not care about surface conditions; they keep erupting through the ice, and carbon dioxide keeps accumulating with nothing to remove it.',
          detailed:
            'After millions of years the concentration reaches something like a tenth of an atmosphere, hundreds of times today’s level, and the greenhouse effect finally overwhelms the reflectivity of the ice. Melting starts, which exposes dark ocean, which absorbs more sunlight, which melts more ice — the same feedback that caused the freeze, now running in reverse and just as fast. The deglaciation may have taken only a few thousand years, ending in a hot, humid world under a crushing carbon dioxide atmosphere.',
        },
      },
      {
        id: 'cap-carbonates',
        kind: 'callout',
        tone: 'note',
        title: 'The rock that sits directly on top of the ice deposits',
        text: {
          essential:
            'Immediately above the glacial debris, all over the world, lies a distinctive layer of carbonate rock tens to hundreds of metres thick, deposited in warm water. Glacial rubble with tropical limestone lying straight on top of it, with no transition, is exactly what a sudden catastrophic deglaciation should leave behind.',
          detailed:
            'These cap carbonates are the strongest single piece of supporting evidence, because they are hard to explain any other way. They also carry unusual carbon isotope values, which the hypothesis interprets as the signature of a biosphere that had been almost shut down and was restarting. That interpretation is more contested than the observation itself.',
        },
        references: [referenceId('hoffman-1998-snowball')],
      },
      {
        id: 'open-slushball',
        kind: 'open-question',
        question: 'Was the ocean completely frozen, or was there open water somewhere?',
        whyItMatters: {
          essential:
            'Photosynthetic life survived these episodes. A completely ice-covered ocean makes that difficult to explain, because photosynthesis needs light and kilometres of ice do not transmit any.',
          detailed:
            'The alternative — sometimes called a slushball — has a band of open water or thin ice near the equator. It is easier on biology but harder to reconcile with the strength of the ice–albedo instability, and it does not obviously explain the cap carbonates as well.',
        },
        whatWouldSettleIt: {
          essential:
            'Sedimentary evidence of open water at low latitudes during the glaciation itself, rather than before or after it.',
          detailed:
            'Proposed refuges include cracks in the ice, meltwater ponds on the surface, and thin ice in the tropics. Several groups have reported sediments they interpret as recording open-water conditions mid-glaciation; whether these are correctly dated within the event is the crux of the dispute.',
        },
        references: [referenceId('hoffman-2017-snowball-review')],
      },
    ],
    furtherReading: [referenceId('hoffman-2017-snowball-review')],
  },

  {
    id: topicId('continents-that-move'),
    slug: 'continents-that-move',
    sectionId: EARTH,
    order: 12,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Continents that move',
    subtitle:
      'They gather into one landmass, break apart, and gather again — roughly every 400 million years.',
    summary: {
      essential:
        'The continents are not drifting randomly. Because there is a limited amount of continental crust and it cannot sink, the pieces repeatedly collide and merge into a single supercontinent, then rift apart, then reassemble. Pangaea was the most recent, about 300 million years ago, and it was not the first.',
      detailed:
        'The cycle matters far beyond geography. A supercontinent has a dry interior, changes ocean circulation, alters how much rock is exposed to weathering, and can trigger enormous volcanic events when it breaks up. Several mass extinctions line up with those breakups.',
      technical:
        'Supercontinent cycles of roughly 300–500 Myr are reconstructed from palaeomagnetic pole paths, orogenic belt ages and detrital zircon age spectra. Named predecessors include Rodinia (~1.1–0.75 Ga) and Columbia/Nuna (~1.8 Ga); reconstructions become progressively less certain further back.',
    },
    glossaryTerms: [glossaryTermId('plate-tectonics'), glossaryTermId('subduction')],
    related: [topicId('plate-tectonics'), topicId('snowball-earth'), topicId('mass-extinctions')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Continental crust is buoyant. It is made of lighter minerals than the seafloor, and when a plate carrying a continent is dragged toward a subduction zone, the ocean floor goes down and the continent does not. That single fact drives the whole pattern: continents can be pushed around and jammed together, but they cannot be destroyed. Over billions of years they accumulate, collide, and stick.',
          detailed:
            'So the arrangement of land on Earth is not stable and never has been. Ocean basins open and close on timescales of a couple of hundred million years. Continents that are on opposite sides of the world today were joined in the recent geological past, and will be joined again. The Atlantic is currently widening by a few centimetres a year; the Pacific is shrinking.',
        },
      },
      {
        id: 'viz-supercontinent',
        kind: 'visualization',
        visualizationId: visualizationId('supercontinent-cycle'),
      },
      {
        id: 'claim-pangaea',
        kind: 'claim',
        statement: {
          essential:
            'Around 300 million years ago essentially all the continental land on Earth was joined into a single mass, Pangaea, surrounded by a single global ocean.',
          detailed:
            'The evidence converges from several independent directions. Mountain belts of matching age and structure run across what are now separate continents. Fossils of land animals that could not have crossed an ocean turn up on both sides of the Atlantic. Ancient glacial deposits in South America, Africa, India and Australia line up into a single ice sheet once the continents are reassembled. And palaeomagnetism gives the latitude each rock formed at, which constrains the reconstruction independently.',
          technical:
            'Palaeomagnetic apparent polar wander paths for different continents converge when the continents are restored to a Pangaea configuration, which is a strong test: the paths were measured separately and were not fitted to each other.',
        },
        evidence: 'established',
        references: [referenceId('wessel-muller-2007-tectonics'), referenceId('wegener-1915')],
      },
      {
        id: 'consequences',
        kind: 'prose',
        text: {
          essential:
            'A supercontinent is a different kind of world to live on. Interiors are enormously far from the ocean, so they are arid and have brutal temperature swings. Coastline — where most marine life lives — is drastically reduced, because a single blob has far less perimeter than many scattered pieces of the same area. Ocean currents that would otherwise carry heat around the planet are blocked or redirected.',
          detailed:
            'The breakups may be more consequential than the assemblies. Rifting a supercontinent apart is associated with vast outpourings of lava — flood basalts covering millions of square kilometres — which inject carbon dioxide and sulfur into the atmosphere on a scale that can restructure the climate. The end-Permian extinction, the worst in Earth’s history, coincides with the Siberian Traps eruptions during the early stages of Pangaea’s instability.',
        },
      },
      {
        id: 'caution-reconstruction',
        kind: 'callout',
        tone: 'caution',
        title: 'Older reconstructions are much less certain than Pangaea',
        text: {
          essential:
            'Pangaea is solid: multiple independent lines of evidence agree, and the reconstruction is tight. Rodinia, its predecessor about a billion years ago, is agreed to have existed but its exact configuration is genuinely disputed. Anything earlier is a working hypothesis.',
          detailed:
            'The difficulty is that palaeomagnetism gives latitude but not longitude — the field is symmetric about the rotation axis, so it cannot tell you how far east or west a continent was. Reconstructions therefore depend on matching geological features across margins, which becomes harder as those features are eroded, metamorphosed and overprinted. Illustrations of Rodinia should be read as one proposal among several.',
        },
        references: [referenceId('korenaga-2013-tectonics-history')],
      },
    ],
    furtherReading: [referenceId('wessel-muller-2007-tectonics')],
  },

  {
    id: topicId('earths-changing-atmosphere'),
    slug: 'earths-changing-atmosphere',
    sectionId: EARTH,
    order: 13,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Earth’s changing atmosphere',
    subtitle: 'The air has been replaced twice, and the second time was done by living things.',
    summary: {
      essential:
        'Earth has had three atmospheres. The first was captured hydrogen and helium, and it escaped. The second was outgassed from the interior: carbon dioxide, nitrogen and water vapour, with no free oxygen. The third — the one you are breathing — was produced by life, and it took more than two billion years to establish.',
      detailed:
        'That third atmosphere is chemically bizarre. Twenty-one percent oxygen alongside methane and other reduced gases is a combination that should react itself away. It persists only because biology keeps regenerating both sides. An atmosphere held far from chemical equilibrium is one of the strongest signs that a planet is alive.',
      technical:
        'The modern atmosphere is 78.08% N₂, 20.95% O₂, 0.93% Ar and about 0.042% CO₂ by dry volume. The coexistence of O₂ and CH₄ represents a thermodynamic disequilibrium of order 10¹⁰ in free energy terms relative to equilibrium — the observation Lovelock proposed as a remote biosignature.',
    },
    glossaryTerms: [glossaryTermId('outgassing'), glossaryTermId('great-oxidation-event')],
    related: [
      topicId('earths-early-atmosphere'),
      topicId('the-oxygen-revolution'),
      topicId('gaia-hypothesis'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'It is worth stating plainly how unusual the air is. Oxygen is a ferociously reactive gas. Left alone it attacks iron, rots organic matter, burns methane, and combines with almost anything that will have it. On a dead planet oxygen would be scrubbed from the atmosphere within a few million years — a geological instant. The fact that Earth’s air is one-fifth oxygen means something is putting it back, continuously, and has been for a very long time.',
          detailed:
            'The full history has three acts. The captured nebular atmosphere leaked away. The outgassed atmosphere — carbon dioxide, nitrogen, water — dominated for two billion years. Then oxygen appeared, and the composition of the air became a biological output rather than a geological one.',
        },
      },
      {
        id: 'viz-atmosphere-2',
        kind: 'visualization',
        visualizationId: visualizationId('atmosphere-evolution'),
      },
      {
        id: 'claim-disequilibrium',
        kind: 'claim',
        statement: {
          essential:
            'Earth’s atmosphere is held far from chemical equilibrium by life. Oxygen and methane coexist in it even though they react with each other, which means both are being replenished faster than the reaction consumes them.',
          detailed:
            'James Lovelock noticed this in the 1960s while working on how to detect life on Mars, and drew a conclusion that has become central to astrobiology: you do not need to land on a planet to tell whether it is inhabited. Measure its atmosphere from a distance, and if the composition is one that chemistry alone could not maintain, something is maintaining it.',
          technical:
            'The methane flux required to sustain the observed 1.9 ppm against oxidation is roughly 500 Tg/yr, overwhelmingly biological. Detecting an O₂–CH₄ pair in an exoplanet atmosphere is the canonical biosignature target for the next generation of telescopes, with the important caveat that abiotic false positives have been identified for oxygen alone.',
        },
        evidence: 'inference',
        references: [
          referenceId('lovelock-margulis-1974-gaia'),
          referenceId('catling-zahnle-2020-atmosphere'),
        ],
      },
      {
        id: 'nitrogen',
        kind: 'prose',
        text: {
          essential:
            'Nitrogen deserves a mention, because it is the majority of the air and almost nobody thinks about it. It is there precisely because it is unreactive: the triple bond holding a nitrogen molecule together is one of the strongest in chemistry, so nitrogen accumulated in the atmosphere while more reactive gases were consumed by rocks and oceans.',
          detailed:
            'That inertness is also a problem for life, which needs nitrogen for proteins and DNA but cannot break the triple bond easily. Only certain bacteria can, using an enzyme that is itself remarkable, and every other organism on Earth ultimately depends on them. Nitrogen availability is one of the main limits on how much life a given environment can support.',
        },
      },
      {
        id: 'misconception-plants',
        kind: 'callout',
        tone: 'misconception',
        title: '“Rainforests are the lungs of the planet”',
        text: {
          essential:
            'A mature forest produces oxygen by photosynthesis and consumes almost exactly as much through respiration and decay. Its net contribution to atmospheric oxygen is close to zero. Forests are enormously important for climate, water, and biodiversity — but not as an oxygen supply.',
          detailed:
            'Oxygen accumulates in the atmosphere only when organic carbon is buried before it can be oxidised, which happens mostly in ocean sediments. The oxygen you breathe is the accumulated residue of hundreds of millions of years of carbon burial, not a flow from any currently living forest. The reservoir is also enormous: if all photosynthesis stopped tomorrow, atmospheric oxygen would take millions of years to fall appreciably.',
        },
        references: [referenceId('lyons-2014-oxygen-rise')],
      },
      {
        id: 'quantities-air',
        kind: 'quantity',
        quantities: [
          {
            id: 'n2-fraction',
            label: 'Nitrogen in dry air',
            value: 78.08,
            unit: '%',
            context:
              'Well determined by direct measurement of dry air. Abundant because it is unreactive, not because it is especially plentiful.',
            references: [referenceId('catling-zahnle-2020-atmosphere')],
          },
          {
            id: 'o2-fraction',
            label: 'Oxygen in dry air',
            value: 20.95,
            unit: '%',
            context:
              'Well determined by direct measurement of dry air. Entirely biological in origin, and absent for the first half of Earth’s history.',
            references: [referenceId('lyons-2014-oxygen-rise')],
          },
          {
            id: 'ch4-conc',
            label: 'Methane',
            value: 1.9,
            unit: 'parts per million',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Rising; methane concentration is not in a steady state. Tiny, but its coexistence with oxygen is the disequilibrium that marks Earth as inhabited.',
            references: [referenceId('ipcc-2021-ar6-wg1')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('catling-zahnle-2020-atmosphere')],
  },
];
