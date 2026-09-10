/**
 * Recaps for Earth.
 *
 * The distractors here are drawn from the picture a reader almost certainly
 * arrives with: that Earth formed roughly as it is now, that the crust is a
 * meaningful fraction of the planet, that continental drift means continents
 * ploughing through the seafloor, that the greenhouse effect is a pollutant
 * rather than the reason the oceans are liquid. Each wrong option below is a
 * sentence that sounds right and is not.
 */
import type { RecapsByTopic } from '../schema/recap';

export const EARTH_RECAPS: RecapsByTopic = {
  'how-earth-was-born': {
    summary: {
      essential:
        'Earth assembled from the dust and gas of the disc left over when the Sun formed. Grains stuck together into pebbles, pebbles into kilometre-sized bodies, and those into a few dozen Moon-to-Mars-sized embryos that then collided. The last of those collisions delivered enough energy to melt much of the planet.',
      detailed:
        'The step nobody has fully explained is the middle one: objects around a metre across drift inward rapidly and tend to shatter rather than merge, so how the gap between pebbles and planetesimals is crossed remains an active research question. What follows from the melting is that Earth separated by density, sending almost all its iron to the core — which is why the crust is comparatively iron-poor and why we mine the iron that photosynthesis later put back within reach.',
    },
    questions: [
      {
        id: 'not-cold',
        prompt:
          'Why was the newly assembled Earth molten rather than a cold pile of accumulated rock?',
        options: [
          {
            id: 'a',
            text: 'Radioactive decay of uranium was far more intense than it is today',
          },
          {
            id: 'b',
            text: 'The kinetic energy of the last few giant impacts, converted to heat, was enough to melt much of the planet',
            correct: true,
          },
          {
            id: 'c',
            text: 'The young Sun was hot enough to melt the surface of a planet at Earth’s distance',
          },
          {
            id: 'd',
            text: 'Gravitational compression alone raises any body of Earth’s size above its melting point',
          },
        ],
        explanation:
          'Short-lived radioactive decay contributed, but the dominant term was impact energy. A Mars-sized body arriving at several kilometres per second deposits enough energy to melt a large fraction of the target, and the last stage of accretion consisted of exactly such collisions.',
      },
      {
        id: 'differentiation',
        prompt: 'What does it mean to say the young Earth differentiated?',
        options: [
          {
            id: 'a',
            text: 'It separated into distinct tectonic plates',
          },
          {
            id: 'b',
            text: 'Its orbit became distinct from those of the other planets',
          },
          {
            id: 'c',
            text: 'While molten, it separated by density, with iron sinking to form a core and lighter silicates floating above',
            correct: true,
          },
          {
            id: 'd',
            text: 'It cooled unevenly, producing continents in some places and ocean basins in others',
          },
        ],
        explanation:
          'Differentiation is separation by density in a molten body. It is why Earth has a metallic core at all, and why the crust is depleted in the elements that dissolve readily in iron.',
      },
      {
        id: 'open-gap',
        prompt: 'Which step in planet formation is still genuinely unresolved?',
        options: [
          {
            id: 'a',
            text: 'How dust grains stick together electrostatically',
          },
          {
            id: 'b',
            text: 'How bodies get past roughly a metre in size, since objects that size drift inward quickly and tend to shatter on collision',
            correct: true,
          },
          {
            id: 'c',
            text: 'Whether the Solar System formed from a disc at all',
          },
          {
            id: 'd',
            text: 'Whether giant impacts occurred during the final stage of accretion',
          },
        ],
        explanation:
          'The metre barrier is a real and actively researched problem. Grain sticking at one end and gravitational accretion at the other are both well understood; the crossing between them is not.',
      },
    ],
  },

  'the-young-earth': {
    summary: {
      essential:
        'For its first few hundred million years — the Hadean — Earth had a magma ocean, no permanent crust and an atmosphere of steam and carbon dioxide. Almost no rock survives from this interval, so nearly everything said about it is model output rather than observation.',
      detailed:
        'The exception is a scatter of zircon crystals from Western Australia, the oldest dated at about 4.40 billion years. Their oxygen isotope ratios indicate they crystallised from magma that had interacted with liquid water, which pushed the appearance of oceans much earlier than the old picture of a permanently molten Hadean allowed. One mineral grain does not make a whole planet temperate, and the strength of that inference is still debated.',
    },
    questions: [
      {
        id: 'evidence',
        prompt: 'What is nearly all direct physical evidence we have from the Hadean?',
        options: [
          {
            id: 'a',
            text: 'Deep-sea sediment cores from the Pacific',
          },
          {
            id: 'b',
            text: 'Individual zircon crystals, eroded out of their original rock and preserved in much younger sandstone',
            correct: true,
          },
          {
            id: 'c',
            text: 'Lunar samples returned by the Apollo missions',
          },
          {
            id: 'd',
            text: 'Banded iron formations from Western Australia',
          },
        ],
        explanation:
          'Hadean rock is essentially absent, because plate tectonics recycles the surface. Zircons survive because they are extremely durable — they outlast the rock they formed in and end up as grains in later sediments.',
      },
      {
        id: 'zircon-says',
        prompt: 'What do the oxygen isotope ratios in the oldest zircons indicate?',
        options: [
          {
            id: 'a',
            text: 'That the atmosphere already contained free oxygen',
          },
          {
            id: 'b',
            text: 'That life was already present when they formed',
          },
          {
            id: 'c',
            text: 'That the magma they crystallised from had interacted with liquid water',
            correct: true,
          },
          {
            id: 'd',
            text: 'That Earth’s magnetic field was already operating',
          },
        ],
        explanation:
          'The isotopic signature points to low-temperature interaction with water before the rock melted, which implies liquid water at the surface by about 4.4 billion years ago — far earlier than the older picture allowed.',
      },
    ],
  },

  'how-the-moon-formed': {
    summary: {
      essential:
        'The leading account is that a Mars-sized body struck the proto-Earth about 4.5 billion years ago, throwing molten and vaporised rock into orbit. That debris, dominated by mantle material rather than iron, assembled into the Moon within decades to a century.',
      detailed:
        'The evidence for it is strong: the Moon has very little iron, is depleted in volatile elements as a violent hot origin predicts, and Earth’s spin and the Moon’s orbit carry the right angular momentum. The unresolved problem is that Earth and Moon have nearly identical oxygen isotope ratios, far closer than any two bodies formed in different places — while the classic model predicts the Moon should be mostly the impactor and therefore isotopically distinct.',
    },
    questions: [
      {
        id: 'iron',
        prompt: 'Why does the Moon’s low iron content support the giant-impact hypothesis?',
        options: [
          {
            id: 'a',
            text: 'Iron would have evaporated in the heat of the collision',
          },
          {
            id: 'b',
            text: 'Both bodies had already differentiated, so the material thrown into orbit came mostly from the mantles rather than the iron cores',
            correct: true,
          },
          {
            id: 'c',
            text: 'The Moon’s weak gravity could not retain iron',
          },
          {
            id: 'd',
            text: 'Iron was rare everywhere in the early Solar System',
          },
        ],
        explanation:
          'By the time of the impact both bodies had sent their iron to their cores. An oblique collision excavates mantle, not core, so the orbiting debris — and the Moon built from it — is iron-poor.',
      },
      {
        id: 'problem',
        prompt: 'What is the main unresolved difficulty with the standard giant-impact model?',
        options: [
          {
            id: 'a',
            text: 'The Moon is too large relative to Earth for any impact to explain',
          },
          {
            id: 'b',
            text: 'No crater of the right size has been found',
          },
          {
            id: 'c',
            text: 'Earth and Moon have almost identical oxygen isotope ratios, whereas the model predicts the Moon should be mostly the impactor and so isotopically different',
            correct: true,
          },
          {
            id: 'd',
            text: 'The Moon’s orbit is in the wrong plane',
          },
        ],
        explanation:
          'This is a real and open problem. Proposed fixes include a far more energetic impact that mixed the two bodies thoroughly, or an impactor that formed at the same distance from the Sun. Neither is settled.',
      },
    ],
  },

  'earths-early-atmosphere': {
    summary: {
      essential:
        'Earth has had three atmospheres. The first, captured hydrogen and helium from the solar nebula, was lost almost at once. The second was outgassed from the interior — mostly carbon dioxide, nitrogen and water vapour, with no free oxygen. The third, the one you breathe, is a biological product.',
      detailed:
        'The second atmosphere is the one that matters for the origin of life, and it is reconstructed rather than measured. Its composition is argued about, particularly how much carbon dioxide it held, because that determines how warm the planet was under a Sun about thirty percent fainter than today. Miller and Urey’s famous 1953 experiment used a strongly reducing mixture that is now thought to be wrong for Earth as a whole, though similar chemistry works in more neutral mixtures and near volcanic vents.',
    },
    questions: [
      {
        id: 'first-lost',
        prompt: 'Why did Earth lose its first atmosphere?',
        options: [
          {
            id: 'a',
            text: 'It was blown away by the giant impact that formed the Moon',
          },
          {
            id: 'b',
            text: 'Hydrogen and helium are too light for Earth’s gravity to retain at these temperatures, and the young Sun’s output stripped what remained',
            correct: true,
          },
          {
            id: 'c',
            text: 'It dissolved into the magma ocean',
          },
          {
            id: 'd',
            text: 'It reacted with the crust to form carbonate rock',
          },
        ],
        explanation:
          'Retention of a gas depends on molecular speed against escape velocity. Hydrogen and helium move fast enough to escape a planet of Earth’s mass and temperature, and intense early solar ultraviolet accelerated the loss.',
      },
      {
        id: 'no-oxygen',
        prompt: 'Why did the second atmosphere contain essentially no free oxygen?',
        options: [
          {
            id: 'a',
            text: 'Oxygen had not yet been created in stars',
          },
          {
            id: 'b',
            text: 'The atmosphere was too hot for oxygen to remain a gas',
          },
          {
            id: 'c',
            text: 'Volcanic outgassing does not produce free oxygen, and any that formed would react rapidly with rock and volcanic gases',
            correct: true,
          },
          {
            id: 'd',
            text: 'Oxygen escaped to space along with the hydrogen and helium',
          },
        ],
        explanation:
          'Oxygen is chemically reactive and does not accumulate without continuous resupply. Nothing geological supplies it at the rate needed; only oxygenic photosynthesis does, and that had not yet appeared.',
      },
    ],
  },

  'where-earths-oceans-came-from': {
    summary: {
      essential:
        'Earth’s water was either delivered by icy and hydrated bodies after the planet formed, or incorporated during accretion and later outgassed, or both. The strongest constraint comes from the ratio of deuterium to ordinary hydrogen, which acts as a fingerprint of where the water formed.',
      detailed:
        'Earth’s ocean ratio matches carbonaceous chondrites — primitive meteorites from the outer asteroid belt, several percent water by weight — closely, and matches most comets poorly. That is the main reason chondritic delivery is the leading account. But comets turn out not to share a single ratio: Hartley 2 matches Earth almost exactly while 67P, measured in place by Rosetta, is more than three times higher. The isotope argument therefore constrains the answer without closing it.',
    },
    questions: [
      {
        id: 'fingerprint',
        prompt:
          'Why is the deuterium-to-hydrogen ratio useful for tracing where Earth’s water came from?',
        options: [
          {
            id: 'a',
            text: 'Deuterium decays at a known rate, so the ratio gives an age',
          },
          {
            id: 'b',
            text: 'Water that formed further from the Sun contains proportionally more deuterium, so the ratio records where a body formed',
            correct: true,
          },
          {
            id: 'c',
            text: 'Only comets contain deuterium, so its presence proves cometary delivery',
          },
          {
            id: 'd',
            text: 'The ratio changes when water passes through a living organism',
          },
        ],
        explanation:
          'Colder conditions further from the Sun favour deuterium enrichment in water. The ratio is therefore preserved information about formation location, and can be compared between Earth’s oceans and candidate sources.',
      },
      {
        id: 'comets',
        prompt:
          'What did the Rosetta measurement of comet 67P do to the comet-delivery hypothesis?',
        options: [
          {
            id: 'a',
            text: 'Confirmed it, since 67P matched Earth’s oceans closely',
          },
          {
            id: 'b',
            text: 'Weakened it, since 67P’s ratio is more than three times Earth’s — though other comets such as Hartley 2 do match, so comets are not uniform',
            correct: true,
          },
          {
            id: 'c',
            text: 'Had no bearing, since 67P contains no water',
          },
          {
            id: 'd',
            text: 'Settled the question in favour of asteroids exclusively',
          },
        ],
        explanation:
          'The result was a genuine setback for the strong comet hypothesis. But the spread among measured comets means neither a pure comet nor a pure asteroid account is forced, and the honest position is a constrained but open one.',
      },
    ],
  },

  'earths-interior': {
    summary: {
      essential:
        'Earth has a solid inner core of iron and nickel, a liquid outer core around it, a thick mantle of solid silicate rock that flows slowly, and a crust that is, proportionally, thinner than the skin on an apple.',
      detailed:
        'Almost none of this was observed directly — the deepest borehole reaches about twelve kilometres out of 6,371. The structure is read from earthquake waves. Shear waves cannot travel through liquid, so their disappearance at a particular depth locates the liquid outer core; Inge Lehmann found the solid inner core in 1936 from waves arriving in a shadow zone where none should have been. The inner core is solid despite being hotter than the outer core, because pressure raises the melting point faster than temperature rises.',
    },
    questions: [
      {
        id: 'how-known',
        prompt: 'How is the layered structure of Earth’s interior actually known?',
        options: [
          {
            id: 'a',
            text: 'From deep boreholes that have sampled each layer',
          },
          {
            id: 'b',
            text: 'From the composition of meteorites alone',
          },
          {
            id: 'c',
            text: 'From how earthquake waves travel, reflect and disappear — in particular, shear waves stopping at the outer core because they cannot pass through liquid',
            correct: true,
          },
          {
            id: 'd',
            text: 'From measurements of Earth’s magnetic field at the surface',
          },
        ],
        explanation:
          'Seismology is the primary tool. The deepest borehole reaches about twelve kilometres, a fifth of one percent of the way to the centre, so everything below that is inferred from wave behaviour.',
      },
      {
        id: 'inner-solid',
        prompt: 'Why is the inner core solid when the hotter outer core is liquid?',
        options: [
          {
            id: 'a',
            text: 'It is made of a different material with a higher melting point',
          },
          {
            id: 'b',
            text: 'It is cooler than the outer core',
          },
          {
            id: 'c',
            text: 'Pressure at that depth raises iron’s melting point faster than the temperature rises',
            correct: true,
          },
          {
            id: 'd',
            text: 'It is held rigid by Earth’s magnetic field',
          },
        ],
        explanation:
          'The inner core is hotter than the outer core, not cooler. Melting point rises with pressure, and at the centre the pressure is high enough that iron freezes despite temperatures around 5,400 kelvin.',
      },
    ],
  },

  'plate-tectonics': {
    summary: {
      essential:
        'Earth’s outer shell is broken into plates that move over the slowly flowing mantle beneath. New crust is created where plates pull apart, destroyed where one sinks beneath another, and neither created nor destroyed where they slide past each other.',
      detailed:
        'Wegener proposed continental drift in 1915 on the basis of fitting coastlines, matching fossils and matching rock sequences, and was rejected largely because he had no mechanism. The mechanism arrived in 1963, when Vine and Matthews showed that the seafloor either side of a mid-ocean ridge carries a symmetrical pattern of magnetic stripes recording reversals of Earth’s field — a tape recorder proving the seafloor spreads. Continents do not plough through the ocean floor; they ride on plates that include the ocean floor.',
    },
    questions: [
      {
        id: 'vine-matthews',
        prompt: 'What did the magnetic stripe pattern on the seafloor demonstrate?',
        options: [
          {
            id: 'a',
            text: 'That Earth’s magnetic field is generated in the crust',
          },
          {
            id: 'b',
            text: 'That new crust forms continuously at mid-ocean ridges and spreads outward, recording magnetic reversals symmetrically on both sides',
            correct: true,
          },
          {
            id: 'c',
            text: 'That the ocean floor is much older than the continents',
          },
          {
            id: 'd',
            text: 'That continents plough through the seafloor as Wegener proposed',
          },
        ],
        explanation:
          'The stripes are symmetrical about the ridge, which only makes sense if crust forms at the ridge, records the field direction as it cools, and is carried outward on both sides. It was the observation that turned drift into tectonics.',
      },
      {
        id: 'subduction-volcano',
        prompt: 'Why is there a line of volcanoes inland of every subduction zone?',
        options: [
          {
            id: 'a',
            text: 'Friction between the plates melts the rock directly',
          },
          {
            id: 'b',
            text: 'The descending plate cracks the overlying plate, letting magma through',
          },
          {
            id: 'c',
            text: 'Water carried down with the sinking plate lowers the melting point of the mantle rock above it, generating magma',
            correct: true,
          },
          {
            id: 'd',
            text: 'The mantle is already molten and simply leaks upward there',
          },
        ],
        explanation:
          'The mantle is solid rock. Water released from the descending slab lowers its melting point enough that it partially melts, and that melt rises to form the volcanic arc — which is why the volcanoes are inland of the trench rather than at it.',
      },
    ],
  },

  'volcanoes-and-the-carbon-cycle': {
    summary: {
      essential:
        'Volcanoes release carbon dioxide; rain and rock weathering remove it. Because weathering runs faster when the planet is warmer and wetter, the removal rate rises whenever the temperature does — which makes the pair act as a thermostat over geological time.',
      detailed:
        'The loop is why Earth has stayed habitable for four billion years while the Sun brightened by roughly a third. Its limitation is its speed: the response time is hundreds of thousands of years, so it is irrelevant to anything on a human scale. It is also why the volcanic flux matters so much despite being tiny compared with biological carbon exchange — the biological loop is nearly balanced, while the geological one is the only net route in or out.',
    },
    questions: [
      {
        id: 'thermostat',
        prompt: 'What makes the silicate-weathering feedback behave like a thermostat?',
        options: [
          {
            id: 'a',
            text: 'Volcanoes erupt less when the planet is warm',
          },
          {
            id: 'b',
            text: 'Weathering, which removes carbon dioxide, speeds up as the planet gets warmer and wetter, so warming triggers its own removal mechanism',
            correct: true,
          },
          {
            id: 'c',
            text: 'Warm oceans dissolve more carbon dioxide permanently',
          },
          {
            id: 'd',
            text: 'Plants grow faster in warm conditions and bury more carbon',
          },
        ],
        explanation:
          'The temperature dependence of the weathering reaction is what closes the loop. More warmth means faster weathering means less carbon dioxide means less warmth — a negative feedback with no designer and no foresight.',
      },
      {
        id: 'timescale',
        prompt: 'Why is this thermostat not a solution to present-day carbon dioxide emissions?',
        options: [
          {
            id: 'a',
            text: 'It only works when carbon dioxide levels are very low',
          },
          {
            id: 'b',
            text: 'It has been disabled by the loss of forests',
          },
          {
            id: 'c',
            text: 'It operates over hundreds of thousands of years, far too slowly to matter on any human timescale',
            correct: true,
          },
          {
            id: 'd',
            text: 'It only removes volcanic carbon dioxide, not carbon dioxide from other sources',
          },
        ],
        explanation:
          'The feedback will eventually remove the excess, and it does not care where the carbon came from. Its response time is the problem: hundreds of thousands of years is not a timescale on which anything human happens.',
      },
    ],
  },

  'earths-magnetic-field': {
    summary: {
      essential:
        'Convecting liquid iron in the outer core, organised by Earth’s rotation, generates a magnetic field by dynamo action. The field deflects the solar wind around the planet, and without it the upper atmosphere would be steadily stripped away.',
      detailed:
        'The comparison that makes the point is Mars. Magnetised bands in its oldest crust record a dynamo that operated early and then stopped, probably because a smaller core cooled too fast to keep convecting. Over the following billions of years Mars lost most of its atmosphere and nearly all its surface water, and the MAVEN mission has measured that escape still happening. Earth’s field also reverses irregularly, roughly every few hundred thousand years on average, and the reversals are recorded in seafloor basalt.',
    },
    questions: [
      {
        id: 'source',
        prompt: 'Where does Earth’s magnetic field come from?',
        options: [
          {
            id: 'a',
            text: 'A permanently magnetised iron core',
          },
          {
            id: 'b',
            text: 'Convection of liquid iron in the outer core, organised by the planet’s rotation into a self-sustaining dynamo',
            correct: true,
          },
          {
            id: 'c',
            text: 'Electric currents in the ionosphere',
          },
          {
            id: 'd',
            text: 'Magnetised minerals in the crust',
          },
        ],
        explanation:
          'A permanent magnet is impossible at core temperatures, which are far above the Curie point of iron. The field is generated actively by moving conducting fluid, which is why it changes and occasionally reverses.',
      },
      {
        id: 'mars',
        prompt: 'What does Mars demonstrate about the role of a planetary magnetic field?',
        options: [
          {
            id: 'a',
            text: 'That a field is unnecessary, since Mars retained its atmosphere without one',
          },
          {
            id: 'b',
            text: 'That losing a field causes a planet to cool rapidly',
          },
          {
            id: 'c',
            text: 'That a planet whose dynamo stops loses atmosphere to the solar wind over geological time — Mars retains crustal magnetisation from an early dynamo and has since lost most of its air and surface water',
            correct: true,
          },
          {
            id: 'd',
            text: 'That fields are generated by liquid water rather than by liquid metal',
          },
        ],
        explanation:
          'Mars is the natural experiment. Its crust records an early field, its core cooled too fast to sustain one, and the atmospheric loss that followed has been measured directly by spacecraft.',
      },
    ],
  },

  'how-earths-climate-works': {
    summary: {
      essential:
        'Earth’s temperature is set by a balance: sunlight absorbed must equal infrared radiated away. Two things control it — how much sunlight is reflected rather than absorbed, and how effectively the atmosphere slows the escape of infrared.',
      detailed:
        'Run the calculation with Earth’s reflectivity and no atmosphere and you get 255 kelvin, well below freezing. The observed surface average is about 288. That 33-kelvin difference is the greenhouse effect, and without it the oceans would be ice. The effect is not a pollutant; it is the reason the planet is habitable. What is changing now is its strength, not its existence.',
    },
    questions: [
      {
        id: 'greenhouse-size',
        prompt: 'How large is the natural greenhouse effect on Earth?',
        options: [
          {
            id: 'a',
            text: 'About 3 kelvin — a small correction to the energy balance',
          },
          {
            id: 'b',
            text: 'About 33 kelvin — without it, Earth’s average surface temperature would be around 255 K, well below freezing',
            correct: true,
          },
          {
            id: 'c',
            text: 'About 100 kelvin, comparable to Venus',
          },
          {
            id: 'd',
            text: 'It cannot be quantified, because it depends on cloud cover',
          },
        ],
        explanation:
          'The effective temperature computed from absorbed sunlight alone is 255 K; the observed surface average is 288 K. The difference is the greenhouse contribution, and it is the reason Earth has liquid oceans.',
      },
      {
        id: 'albedo',
        prompt: 'What does raising a planet’s albedo do?',
        options: [
          {
            id: 'a',
            text: 'It warms the planet, because more light is trapped',
          },
          {
            id: 'b',
            text: 'It cools the planet, because a larger fraction of incoming sunlight is reflected before it can be absorbed',
            correct: true,
          },
          {
            id: 'c',
            text: 'It has no effect on temperature, only on brightness',
          },
          {
            id: 'd',
            text: 'It warms the poles and cools the tropics',
          },
        ],
        explanation:
          'Albedo is the fraction of sunlight reflected. Higher albedo means less energy absorbed, and therefore a lower equilibrium temperature — which is exactly the feedback that drives a planet into a snowball state.',
      },
    ],
  },

  'snowball-earth': {
    summary: {
      essential:
        'At least twice in the Neoproterozoic, ice appears to have advanced from the poles to the tropics and stayed there for millions of years. The mechanism is the ice–albedo feedback: ice reflects sunlight, so more ice means more cooling, which makes more ice.',
      detailed:
        'The same feedback that traps the planet is what makes escape so slow. With the surface frozen there is no rain to weather rock, so volcanic carbon dioxide accumulates unchecked — for millions of years — until the greenhouse effect finally overwhelms the ice. The evidence includes glacial deposits at tropical palaeolatitudes and distinctive cap carbonates lying directly on them. How complete the ice cover was is still argued; a slushball with open equatorial water is a serious alternative.',
    },
    questions: [
      {
        id: 'feedback',
        prompt: 'What makes the ice–albedo feedback self-amplifying?',
        options: [
          {
            id: 'a',
            text: 'Ice releases heat as it forms, warming the surrounding air',
          },
          {
            id: 'b',
            text: 'Ice reflects sunlight, so more ice means less heat absorbed, which produces more ice',
            correct: true,
          },
          {
            id: 'c',
            text: 'Ice traps carbon dioxide, reducing the greenhouse effect',
          },
          {
            id: 'd',
            text: 'Ice increases the planet’s rotation rate',
          },
        ],
        explanation:
          'Each turn of the loop strengthens the next. That is what a positive feedback is, and it is why a small initial cooling can run away into a globally frozen state.',
      },
      {
        id: 'escape',
        prompt: 'How did the planet escape a snowball state?',
        options: [
          {
            id: 'a',
            text: 'The Sun brightened enough to melt the ice',
          },
          {
            id: 'b',
            text: 'Volcanic eruptions melted the ice directly',
          },
          {
            id: 'c',
            text: 'With no rain to weather rock, volcanic carbon dioxide accumulated in the atmosphere over millions of years until the greenhouse effect overwhelmed the ice',
            correct: true,
          },
          {
            id: 'd',
            text: 'Life generated enough heat to warm the surface',
          },
        ],
        explanation:
          'The escape route runs through the same carbon cycle that normally stabilises the climate. Freeze the surface and you switch off the removal side of that cycle, so the input side eventually wins — but it takes millions of years.',
      },
    ],
  },

  'continents-that-move': {
    summary: {
      essential:
        'Continents have repeatedly assembled into single supercontinents and broken apart again, on a cycle of roughly 400 to 600 million years. Rodinia formed about 900 million years ago and broke up; Pangaea assembled about 300 million years ago and has been fragmenting ever since.',
      detailed:
        'Wegener’s original evidence — the fit of coastlines, matching fossils and matching rock sequences across oceans — was good, and it was rejected because he proposed continents ploughing through the seafloor, which is physically impossible. The reconstruction we have now is built from seafloor magnetic stripes, palaeomagnetic pole positions, matching geology and fossil distributions, and it also carries a warning: extrapolating plate motions forward gives projections, not predictions, with uncertainty growing rapidly.',
    },
    questions: [
      {
        id: 'wegener',
        prompt:
          'Why was Wegener’s continental drift rejected in his lifetime despite good evidence?',
        options: [
          {
            id: 'a',
            text: 'His fossil correlations turned out to be mistaken',
          },
          {
            id: 'b',
            text: 'The coastline fit was later shown to be coincidental',
          },
          {
            id: 'c',
            text: 'He had no workable mechanism, and the one he proposed — continents ploughing through the ocean floor — is physically impossible',
            correct: true,
          },
          {
            id: 'd',
            text: 'Palaeomagnetic data at the time contradicted him',
          },
        ],
        explanation:
          'The evidence for movement was strong; the proposed mechanism was not. Once seafloor spreading supplied a mechanism in the 1960s, the same evidence became decisive.',
      },
      {
        id: 'future',
        prompt: 'How should reconstructions of the next supercontinent be read?',
        options: [
          {
            id: 'a',
            text: 'As firm predictions, since plate motions are precisely known',
          },
          {
            id: 'b',
            text: 'As model projections whose uncertainty grows rapidly the further forward they run, unlike the reconstructions of the past that rest on preserved evidence',
            correct: true,
          },
          {
            id: 'c',
            text: 'As no different in reliability from reconstructions of Pangaea',
          },
          {
            id: 'd',
            text: 'As untestable speculation with no scientific content',
          },
        ],
        explanation:
          'Past reconstructions are constrained by preserved magnetic stripes, pole positions and matching geology. Future ones extrapolate present motions, and small uncertainties compound over hundreds of millions of years.',
      },
    ],
  },

  'earths-changing-atmosphere': {
    summary: {
      essential:
        'The air you breathe is a biological product. Nitrogen is largely inherited, but the oxygen — about a fifth of the atmosphere — comes entirely from photosynthesis, and would be consumed by rock and volcanic gas within a few million years without continuous resupply.',
      detailed:
        'Oxygen appeared in the air around 2.4 billion years ago, long after the organisms making it appeared, because dissolved iron, volcanic gases and exposed rock consumed it as fast as it was produced. Once the sinks were saturated it accumulated — building an ozone layer that made the land surface survivable, and making aerobic respiration possible. It also destroyed atmospheric methane, and the resulting loss of greenhouse warming is one candidate cause of the Huronian glaciation.',
    },
    questions: [
      {
        id: 'why-delay',
        prompt:
          'Why did oxygen take hundreds of millions of years to appear in the atmosphere after oxygenic photosynthesis evolved?',
        options: [
          {
            id: 'a',
            text: 'Photosynthesis was initially very inefficient',
          },
          {
            id: 'b',
            text: 'The organisms producing it were confined to a small area',
          },
          {
            id: 'c',
            text: 'Dissolved iron, volcanic gases and exposed rock consumed the oxygen as fast as it was made, and it could only accumulate once those sinks were saturated',
            correct: true,
          },
          {
            id: 'd',
            text: 'Oxygen escaped to space until Earth’s gravity increased',
          },
        ],
        explanation:
          'Accumulation requires production to exceed removal, not merely to occur. The banded iron formations that industrial civilisation mines are the record of the largest of those sinks being paid off.',
      },
      {
        id: 'requires-resupply',
        prompt: 'What would happen to atmospheric oxygen if photosynthesis stopped?',
        options: [
          {
            id: 'a',
            text: 'It would remain indefinitely, since it is chemically stable',
          },
          {
            id: 'b',
            text: 'It would be consumed by reaction with rock, volcanic gases and organic matter within a few million years',
            correct: true,
          },
          {
            id: 'c',
            text: 'It would slowly escape to space over billions of years',
          },
          {
            id: 'd',
            text: 'It would be converted into ozone and remain in the upper atmosphere',
          },
        ],
        explanation:
          'Oxygen is highly reactive. Its presence at a fifth of the atmosphere is a state maintained far from chemical equilibrium, which is exactly why it is such a strong biosignature to look for on other planets.',
      },
    ],
  },

  'earth-before-life': {
    summary: {
      essential:
        'Before life, Earth already had oceans, continents, volcanoes, weather, plate tectonics and a carbon cycle. What it did not have was any process pushing its chemistry far from equilibrium — and the chemistry it did have is where life had to come from.',
      detailed:
        'That prebiotic world offered several settings where organic chemistry could run: alkaline hydrothermal vents with natural proton gradients across mineral walls, surface pools that concentrated solutes by evaporating, ice with unfrozen brine channels, and a steady delivery of amino acids, sugars and nucleobases on carbonaceous meteorites. Which of these hosted the origin of life is not known, and each has both a strong case and a serious problem.',
    },
    questions: [
      {
        id: 'already-there',
        prompt: 'Which of these did Earth already have before life appeared?',
        options: [
          {
            id: 'a',
            text: 'An ozone layer screening ultraviolet light',
          },
          {
            id: 'b',
            text: 'Oceans, continents, volcanism and a carbon cycle',
            correct: true,
          },
          {
            id: 'c',
            text: 'An atmosphere containing free oxygen',
          },
          {
            id: 'd',
            text: 'Soil capable of supporting rooted plants',
          },
        ],
        explanation:
          'Ozone requires oxygen, oxygen requires photosynthesis, and soil is largely made by living things. Geology and a working carbon cycle came first; the atmosphere and the soil are biological products.',
      },
      {
        id: 'vent-appeal',
        prompt:
          'What makes alkaline hydrothermal vents an attractive setting for the origin of life?',
        options: [
          {
            id: 'a',
            text: 'They are the only place on Earth where organic molecules can form',
          },
          {
            id: 'b',
            text: 'They are hot enough to drive any chemical reaction',
          },
          {
            id: 'c',
            text: 'They provide a natural proton gradient across mineral walls — the same energy currency cells use — along with catalytic iron-sulphur minerals and long-lived stability',
            correct: true,
          },
          {
            id: 'd',
            text: 'They concentrate organic molecules by evaporation',
          },
        ],
        explanation:
          'The proton gradient is the striking part: chemiosmosis is universal in living cells and appears to be older than LUCA, and a vent supplies one geologically for free. The problem vents have is dilution — concentrating anything in seawater is hard, which is what the surface-pool hypothesis does well.',
      },
    ],
  },

  'the-first-evidence-of-life': {
    summary: {
      essential:
        'The oldest widely accepted evidence of life is around 3.4 to 3.5 billion years old: stromatolites from Western Australia, layered structures built by microbial mats. Older claims exist, going back to 4.1 billion years, and every one of them is disputed.',
      detailed:
        'The difficulty is that ancient rock is rare, altered, and full of structures that mimic biology. A layered cone can be built by microbes or produced by rock deformation; a carbon isotope ratio in the biological range can also be produced by non-biological reactions. The 3.7-billion-year Isua structures in Greenland were reported as stromatolites in 2016 and reinterpreted as deformation features in 2018, and the disagreement is live. This is what an honest frontier looks like.',
    },
    questions: [
      {
        id: 'hardest',
        prompt:
          'Why is it so difficult to establish that a 3.7-billion-year-old structure was made by life?',
        options: [
          {
            id: 'a',
            text: 'Rocks that old contain no carbon',
          },
          {
            id: 'b',
            text: 'Radiometric dating does not work beyond three billion years',
          },
          {
            id: 'c',
            text: 'Ancient rock is rare and heavily altered, and both layered structures and biological-looking carbon isotope ratios can be produced without life',
            correct: true,
          },
          {
            id: 'd',
            text: 'Microfossils dissolve completely within a billion years',
          },
        ],
        explanation:
          'The problem is not dating but interpretation. Non-biological processes can produce shapes and isotopic signatures that resemble biological ones, so a claim needs several independent lines of evidence pointing the same way.',
      },
      {
        id: 'strongest',
        prompt: 'Which claim for early life is currently the strongest?',
        options: [
          {
            id: 'a',
            text: 'The 4.1-billion-year carbon inclusion in a Jack Hills zircon',
          },
          {
            id: 'b',
            text: 'The 3.8-billion-year haematite tubes from Nuvvuagittuq',
          },
          {
            id: 'c',
            text: 'The 3.43-billion-year Strelley Pool stromatolites, which show the shapes, layering and geochemical signatures expected of microbial mats and have held up under two decades of scrutiny',
            correct: true,
          },
          {
            id: 'd',
            text: 'The 3.7-billion-year Isua structures, now confirmed as biological',
          },
        ],
        explanation:
          'The Australian stromatolites are the strongest case because several independent lines of evidence agree in a setting that makes sense. The Isua structures are not confirmed — a 2018 re-examination argued they are deformation features, and the disagreement continues.',
      },
    ],
  },

  'earth-as-a-changing-system': {
    summary: {
      essential:
        'Earth is not a stage that life performs on. Its interior drives its surface, its surface regulates its climate, and for four billion years its inhabitants have been changing all of it — most drastically by filling the air with oxygen.',
      detailed:
        'Reading the planet as a coupled system is what makes its history intelligible: the same carbon cycle that stabilises the temperature is the escape route from a snowball; the same oxygen that built the ozone layer poisoned most of the world that produced it. It also sets up the next section, because the transition from a chemical planet to an inhabited one is the point where the story stops being geology.',
    },
    questions: [
      {
        id: 'coupled',
        prompt: 'What does it mean to call Earth a coupled system?',
        options: [
          {
            id: 'a',
            text: 'That its layers are physically bonded to one another',
          },
          {
            id: 'b',
            text: 'That it is in chemical equilibrium throughout',
          },
          {
            id: 'c',
            text: 'That its interior, surface, atmosphere and biosphere each influence the others, so none can be understood in isolation',
            correct: true,
          },
          {
            id: 'd',
            text: 'That its orbit is gravitationally linked to the Moon',
          },
        ],
        explanation:
          'Coupling here means causal feedback between parts. Volcanism supplies carbon dioxide, weathering removes it, life accelerates weathering and changes the air, and the changed air alters the chemistry of weathering — a loop, not a chain.',
      },
      {
        id: 'not-designed',
        prompt:
          'Does the existence of stabilising feedbacks mean the planet is regulating itself on purpose?',
        options: [
          {
            id: 'a',
            text: 'Yes — the feedbacks demonstrate planetary-scale intention',
          },
          {
            id: 'b',
            text: 'No — a negative feedback can hold a system steady without anything arranging it; silicate weathering stabilises temperature because of the temperature dependence of a chemical reaction',
            correct: true,
          },
          {
            id: 'c',
            text: 'Yes, but only since life appeared',
          },
          {
            id: 'd',
            text: 'The question cannot be addressed scientifically at all',
          },
        ],
        explanation:
          'This distinction matters for reading everything that follows, including the Gaia hypothesis. That a loop stabilises is an observation. That it exists because it stabilises is a much stronger claim requiring a mechanism, and no such mechanism is known at planetary scale.',
      },
    ],
  },
};
