/**
 * Earth — the inside, and what it does to the outside.
 *
 * The through-line of these four topics is that Earth's surface is a
 * consequence of its interior, and its interior is a consequence of its birth.
 * Heat left over from accretion plus radioactive decay drives convection;
 * convection drives plate tectonics; plate tectonics recycles carbon and
 * regulates climate; convection in the liquid core generates the magnetic
 * field. A reader who takes only one thing from this group should take the
 * causal chain, not the vocabulary.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const EARTH = sectionId('earth');
const REVIEWED = '2026-09-10';

export const EARTH_INTERIOR_TOPICS: readonly Topic[] = [
  {
    id: topicId('earths-interior'),
    slug: 'earths-interior',
    sectionId: EARTH,
    order: 6,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Earth’s interior',
    subtitle:
      'Nobody has been below about 12 kilometres. We know the other 6,359 from earthquakes.',
    summary: {
      essential:
        'Earth is layered: a thin rocky crust, a thick rocky mantle that is solid but flows over geological time, a liquid iron outer core, and a solid iron inner core at the centre. We know this because earthquakes send waves through the planet, and those waves bend, speed up, slow down and vanish in ways that map what they passed through.',
      detailed:
        'The deepest borehole ever drilled reached about 12 kilometres, roughly a fifth of the way through the crust in that spot. Everything deeper is inference — but inference of a very solid kind, because different earthquakes recorded at different stations around the world all have to be explained by the same internal structure.',
      technical:
        'The Preliminary Reference Earth Model inverts travel times, normal-mode frequencies and free-oscillation data for radial profiles of P- and S-wave velocity and density. The key structural boundaries are the Mohorovičić discontinuity, the core–mantle boundary at 2891 km, and the inner-core boundary at 5150 km.',
    },
    glossaryTerms: [glossaryTermId('mantle-convection'), glossaryTermId('differentiation')],
    related: [
      topicId('plate-tectonics'),
      topicId('earths-magnetic-field'),
      topicId('the-young-earth'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The trick that reveals the inside of the planet is simple to state. An earthquake releases energy that travels outward as waves, and those waves travel at speeds that depend on the material they are passing through. Record the same earthquake at hundreds of stations around the world, note when each wave arrives, and you can work backwards to what the interior must be like for all those arrival times to make sense at once.',
          detailed:
            'Two kinds of wave do most of the work. Pressure waves — the P in P-wave — squeeze and stretch the material along the direction of travel, and they can move through anything, solid or liquid. Shear waves twist material sideways, and they cannot travel through a liquid at all, because a liquid has nothing to resist the twist. That one difference is the single most important fact in the whole subject.',
        },
      },
      {
        id: 'viz-interior',
        kind: 'visualization',
        visualizationId: visualizationId('earth-interior'),
      },
      {
        id: 'claim-liquid-core',
        kind: 'claim',
        statement: {
          essential:
            'Earth’s outer core is liquid. We know because shear waves from any earthquake fail to arrive at stations on the far side of the planet — there is a shadow, and its shape gives the size of the liquid region.',
          detailed:
            'The inner core was discovered by Inge Lehmann in 1936 from a different anomaly: waves arriving inside the supposed shadow zone that should not have been there at all. She realised they were being reflected off a boundary deep within the core, which meant there was something solid down there. It is one of the most elegant deductions in the history of geophysics, made from a stack of seismograms.',
          technical:
            'The S-wave shadow begins at an epicentral distance of about 103° and is total beyond it. The P-wave shadow between 103° and 142° arises from refraction at the core–mantle boundary; the PKiKP and PKIKP phases that arrive within it require an inner boundary at 5150 km with a velocity increase consistent with solidification.',
        },
        evidence: 'established',
        references: [
          referenceId('lehmann-1936-core'),
          referenceId('dziewonski-anderson-1981-prem'),
        ],
      },
      {
        id: 'solid-flow',
        kind: 'prose',
        text: {
          essential:
            'The mantle is the part that surprises people. It is solid rock — shear waves pass through it, which is the definitive test — and yet it flows. There is no contradiction. Over seconds, mantle rock behaves like rock. Over millions of years, it deforms and creeps like extremely stiff putty. Glacier ice does the same thing on a much shorter timescale: you can shatter it with a hammer, and it still flows downhill.',
          detailed:
            'That slow flow is convection, and it is driven by the same thing that drives convection in a saucepan — the bottom is hotter than the top. Hot mantle rock is very slightly less dense, rises over tens of millions of years, cools near the surface and sinks again. The speeds involved are centimetres a year, comparable to the growth of a fingernail. It is the slowest important process on Earth and it moves continents.',
        },
      },
      {
        id: 'quantities-interior',
        kind: 'quantity',
        quantities: [
          {
            id: 'crust-thickness',
            label: 'Crust thickness',
            value: 5,
            unit: 'km',
            uncertainty: { kind: 'lower-limit' },
            context:
              'Thin under the oceans and thick under mountain ranges; the upper end is around 70 km. Less than 1% of Earth’s radius. Every hole ever drilled has stayed inside it.',
            references: [referenceId('dziewonski-anderson-1981-prem')],
          },
          {
            id: 'cmb-depth',
            label: 'Depth to the core–mantle boundary',
            value: 2891,
            unit: 'km',
            uncertainty: { plusMinus: 5 },
            context: 'The sharpest boundary inside the planet: rock above, liquid iron below.',
            references: [referenceId('dziewonski-anderson-1981-prem')],
          },
          {
            id: 'inner-core-temp',
            label: 'Temperature at the inner-core boundary',
            value: 5400,
            unit: 'K',
            uncertainty: { plusMinus: 500 },
            context:
              'Comparable to the Sun’s surface. Known indirectly, from the melting curve of iron at that pressure.',
            references: [referenceId('hirose-2013-core')],
          },
        ],
      },
      {
        id: 'light-elements',
        kind: 'callout',
        tone: 'note',
        title: 'The core is not pure iron, and nobody is sure what else is in it',
        text: {
          essential:
            'Seismology gives the density of the core, and the density is about ten percent lower than pure iron at that pressure and temperature should be. Something lighter is mixed in. The candidates are sulfur, oxygen, silicon, carbon and hydrogen, in some combination.',
          detailed:
            'This is an active research problem rather than a gap in the basics, and it matters for more than bookkeeping: which light elements are present affects the melting behaviour of the core, and therefore how fast the inner core has been growing, and therefore how long Earth’s magnetic field has been powered the way it is now.',
        },
        references: [referenceId('hirose-2013-core')],
      },
    ],
    furtherReading: [referenceId('dziewonski-anderson-1981-prem')],
  },

  {
    id: topicId('plate-tectonics'),
    slug: 'plate-tectonics',
    sectionId: EARTH,
    order: 7,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Plate tectonics',
    subtitle: 'The surface of the planet is broken, and the pieces are moving.',
    summary: {
      essential:
        'Earth’s rigid outer shell is not one piece. It is about fifteen large plates and many small ones, sliding over the hotter, weaker rock beneath at a few centimetres a year. Where they pull apart, new seafloor is made. Where they collide, one dives beneath the other or mountains rise. Where they slide past each other, they lock and then slip, which is an earthquake.',
      detailed:
        'This is the single organising theory of the Earth sciences, and it is barely sixty years old. It explains earthquakes, volcanoes, mountain ranges, the shape of the continents and the age distribution of the seafloor with one mechanism. It was accepted only when the seafloor was finally mapped.',
      technical:
        'Plate motions are described as rigid-body rotations about Euler poles on a sphere, now measured directly by GPS geodesy to sub-millimetre-per-year precision and agreeing with geological rates averaged over millions of years. The driving forces are dominated by slab pull at subduction zones, with ridge push a secondary contribution.',
    },
    glossaryTerms: [
      glossaryTermId('plate-tectonics'),
      glossaryTermId('subduction'),
      glossaryTermId('mantle-convection'),
    ],
    related: [
      topicId('continents-that-move'),
      topicId('volcanoes-and-the-carbon-cycle'),
      topicId('earths-interior'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Look at a map of the Atlantic and the coastlines of South America and Africa look like they were torn apart. People noticed this almost as soon as accurate maps existed. The obvious explanation — that they really were once joined — was proposed seriously by Alfred Wegener in 1915, and rejected by nearly every geologist for the next forty years.',
          detailed:
            'The rejection was not stubbornness. Wegener had good evidence: matching rock formations, matching fossils of animals that could not have swum an ocean, matching ancient glacial deposits in places that are now tropical. What he did not have was a mechanism. He suggested continents plough through the ocean floor, and physicists correctly pointed out that continental rock is nowhere near strong enough to do that. A hypothesis with strong evidence and an impossible mechanism is in genuine trouble.',
        },
      },
      {
        id: 'viz-tectonics',
        kind: 'visualization',
        visualizationId: visualizationId('plate-tectonics'),
      },
      {
        id: 'claim-seafloor',
        kind: 'claim',
        statement: {
          essential:
            'The continents are not ploughing through the seafloor. The seafloor itself is moving, because new seafloor is continuously created at mid-ocean ridges and destroyed at subduction zones.',
          detailed:
            'The decisive evidence came from magnetism. Earth’s magnetic field reverses direction at irregular intervals, and molten rock erupting at a ridge records the field direction at the moment it solidifies. If the seafloor spreads outward from the ridge, the record should be a series of magnetic stripes, symmetrical on either side, matching the known sequence of reversals. When ships towed magnetometers across the ridges in the early 1960s, that is exactly what they found.',
          technical:
            'Vine and Matthews predicted the pattern in 1963. The stripe widths, divided by the independently dated reversal intervals, yield spreading half-rates of 1–10 cm/yr, and the resulting seafloor age map shows no oceanic crust older than about 200 Myr anywhere — because older crust has already been subducted.',
        },
        evidence: 'established',
        references: [
          referenceId('vine-matthews-1963'),
          referenceId('wessel-muller-2007-tectonics'),
        ],
      },
      {
        id: 'history-wegener',
        kind: 'callout',
        tone: 'history',
        title: 'Wegener was right about the wrong thing',
        text: {
          essential:
            'It is a genuinely instructive episode. Wegener’s conclusion — that the continents had once been joined and had separated — turned out to be correct. His proposed mechanism was wrong, and the physicists who objected to it were right to object. Science moved when someone found a mechanism that worked.',
          detailed:
            'The moral is not "listen to the outsider" or "trust the establishment". It is that a hypothesis needs both evidence and a mechanism, and that a good scientific community will keep an evidenced idea in play even while rejecting a bad explanation of it. Wegener died in 1930 on the Greenland ice sheet, thirty years before the seafloor data arrived.',
        },
        references: [referenceId('wegener-1915')],
      },
      {
        id: 'boundaries',
        kind: 'prose',
        text: {
          essential:
            'Almost everything geologically dramatic happens at plate boundaries, and there are only three kinds. Plates move apart, and molten rock rises to fill the gap — this makes the mid-ocean ridges and, on land, rift valleys like East Africa’s. Plates move together, and something has to give: dense oceanic plate dives beneath the other and melts, feeding volcanoes above it, or two continents collide and neither will sink, so the crust crumples upward into the Himalayas. Plates slide past each other and stick until the stress breaks them, which is the San Andreas fault.',
          detailed:
            'Notice the asymmetry between ocean and continent. Oceanic crust is dense basalt and can be recycled into the mantle, which is why none of it is older than about 200 million years. Continental crust is lighter granite and cannot easily sink, which is why parts of it are four billion years old. Earth has a permanent set of continents floating on a seafloor it keeps replacing.',
        },
      },
      {
        id: 'open-when-tectonics',
        kind: 'open-question',
        question: 'When did plate tectonics begin?',
        whyItMatters: {
          essential:
            'Plate tectonics recycles carbon, builds continents and regulates climate over billions of years. When it started sets when Earth acquired the machinery that keeps it habitable.',
          detailed:
            'It also bears on the origin of life. If subduction was operating in the Hadean, the chemical environments available to early chemistry were different from those on a stagnant-lid planet with no crustal recycling.',
        },
        whatWouldSettleIt: {
          essential:
            'Diagnostic rock types and chemical signatures that only form at subduction zones, found reliably in progressively older rocks.',
          detailed:
            'Estimates in the current literature range from before 4 billion years ago to about 1 billion, which is an enormous spread. The difficulty is that the geochemical markers used as evidence for subduction can sometimes be produced by other processes, so each candidate signature is arguable.',
        },
        references: [referenceId('korenaga-2013-tectonics-history')],
      },
    ],
    furtherReading: [referenceId('wessel-muller-2007-tectonics')],
  },

  {
    id: topicId('volcanoes-and-the-carbon-cycle'),
    slug: 'volcanoes-and-the-carbon-cycle',
    sectionId: EARTH,
    order: 8,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Volcanoes and the carbon cycle',
    subtitle:
      'A thermostat made of rock, running on a timescale of hundreds of thousands of years.',
    summary: {
      essential:
        'Volcanoes put carbon dioxide into the air. Rain, made slightly acidic by that carbon dioxide, dissolves rock and washes the products to the sea, where they turn into limestone and are eventually subducted. That loop is slow, but it is self-correcting: when Earth gets warmer the weathering runs faster, pulling carbon dioxide out and cooling it back down.',
      detailed:
        'This feedback is one of the more remarkable things about the planet. Nobody designed it — it falls out of the temperature dependence of a chemical reaction — but it has probably kept Earth’s surface within the range where liquid water exists for most of four billion years, through a 30 percent brightening of the Sun.',
      technical:
        'Silicate weathering consumes CO₂ via CaSiO₃ + CO₂ → CaCO₃ + SiO₂, with a rate that increases with temperature and runoff. Because the sink strengthens with warming while the volcanic source does not, the system has negative feedback with a characteristic response time of roughly 10⁵–10⁶ years.',
    },
    glossaryTerms: [
      glossaryTermId('silicate-weathering'),
      glossaryTermId('subduction'),
      glossaryTermId('greenhouse-effect'),
    ],
    related: [
      topicId('how-earths-climate-works'),
      topicId('snowball-earth'),
      topicId('plate-tectonics'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Carbon on Earth is mostly not in the air. The overwhelming majority is locked in rock — limestone, chalk, the shells of long-dead sea creatures compressed into stone. The atmosphere holds a tiny fraction of the total. What matters is not the amount but the flow: carbon moves between rock, ocean, air and life, and the size of the atmospheric reservoir at any moment is set by the balance of those flows.',
          detailed:
            'Two flows dominate over geological time. Volcanoes and mid-ocean ridges release carbon dioxide that has been carried down into the mantle by subducting plates. And chemical weathering removes it: rainwater absorbs carbon dioxide, becomes weak carbonic acid, and slowly dissolves silicate rocks, releasing calcium and other ions that wash into the sea and combine with dissolved carbon to make carbonate minerals.',
        },
      },
      {
        id: 'viz-carbon',
        kind: 'visualization',
        visualizationId: visualizationId('carbon-cycle-thermostat'),
      },
      {
        id: 'claim-thermostat',
        kind: 'claim',
        statement: {
          essential:
            'Silicate weathering acts as a planetary thermostat, because it speeds up when the climate is warm and slows down when it is cold — automatically pushing atmospheric carbon dioxide in the direction that opposes the change.',
          detailed:
            'Think through what happens if something warms the planet. Warmer air holds more moisture and it rains more. Chemical reactions run faster at higher temperature. Both effects accelerate weathering, which pulls carbon dioxide out of the atmosphere faster, which weakens the greenhouse effect, which cools the planet. Cool the planet instead and weathering slows, volcanic carbon dioxide accumulates, and warming resumes. The loop is stabilising in both directions.',
          technical:
            'Walker, Hays and Kasting formalised this in 1981 and showed it can compensate for the roughly 30% increase in solar luminosity over Earth history. The feedback is not perfect — the response time is 10⁵–10⁶ years, so it does nothing about changes faster than that, and it can be overwhelmed if the land surface freezes.',
        },
        evidence: 'model',
        references: [
          referenceId('walker-1981-thermostat'),
          referenceId('berner-2003-carbon-cycle'),
        ],
      },
      {
        id: 'caution-timescale',
        kind: 'callout',
        tone: 'caution',
        title: 'The thermostat is far too slow to help with anything happening now',
        text: {
          essential:
            'The weathering feedback operates over hundreds of thousands to millions of years. It has nothing to say about changes on the scale of decades or centuries. Pointing at it as reassurance about present-day carbon dioxide is a category error about timescales.',
          detailed:
            'The two processes are not even in the same league for rate. Volcanic outgassing releases on the order of 0.1 to 0.3 billion tonnes of carbon dioxide a year. Human fossil-fuel burning currently releases well over a hundred times that. The geological thermostat will eventually remove the excess, on a timescale of order a hundred thousand years, which is not a timescale that helps anyone alive.',
        },
        references: [referenceId('ipcc-2021-ar6-wg1')],
      },
      {
        id: 'mountains',
        kind: 'prose',
        text: {
          essential:
            'Tectonics interferes with the thermostat in an interesting way. Weathering needs fresh rock exposed to rain, and mountain building supplies exactly that — steep slopes that shed weathered material and keep presenting new surfaces. Build a big mountain range and you increase the planet’s capacity to draw down carbon dioxide.',
          detailed:
            'The rise of the Himalayas over the past 50 million years is often proposed as a contributor to the long cooling trend that eventually produced the ice ages. It is a plausible and much-argued hypothesis rather than an established result: the timing works reasonably well, but so do several other proposed causes, and separating them in the geological record is difficult.',
        },
      },
    ],
    furtherReading: [referenceId('berner-2003-carbon-cycle')],
  },

  {
    id: topicId('earths-magnetic-field'),
    slug: 'earths-magnetic-field',
    sectionId: EARTH,
    order: 9,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Earth’s magnetic field',
    subtitle: 'Generated by liquid iron in motion — and it has flipped hundreds of times.',
    summary: {
      essential:
        'Earth’s magnetic field is not produced by a permanent magnet at the centre. Iron loses its magnetism far below core temperatures. The field is generated actively, by electrically conducting liquid iron churning in the outer core: moving conductor makes current, current makes field, field acts back on the moving conductor. It is a self-sustaining loop called a dynamo.',
      detailed:
        'The field deflects most of the solar wind around the planet. It also reverses — north and south swap places — at irregular intervals averaging a few hundred thousand years, and the record of those reversals frozen into seafloor rock is what proved plate tectonics.',
      technical:
        'The geodynamo is described by the magnetohydrodynamic induction equation coupled to the Navier–Stokes and heat equations in a rotating spherical shell. It is powered by thermal and compositional convection, the latter from light elements expelled as the inner core freezes, and organised by Coriolis forces into columnar flows aligned with the rotation axis.',
    },
    glossaryTerms: [glossaryTermId('geodynamo'), glossaryTermId('magnetosphere')],
    related: [
      topicId('earths-interior'),
      topicId('earths-early-atmosphere'),
      topicId('plate-tectonics'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Start by ruling out the intuitive answer. A compass points north, so it is natural to imagine a giant bar magnet inside the Earth. There cannot be one. Every magnetic material loses its permanent magnetism above a certain temperature — for iron, about 1,043 kelvin — and Earth’s core is roughly five times hotter than that. Whatever makes the field has to be making it continuously.',
          detailed:
            'The answer is a dynamo, and the physics is the same as in the generator in a power station, just without the wires. Move an electrical conductor through a magnetic field and you drive a current. Drive a current and you create a magnetic field. If the geometry of the motion is right, the field you create is the field you needed to start with — and the process sustains itself as long as something keeps the conductor moving.',
        },
      },
      {
        id: 'viz-dynamo',
        kind: 'visualization',
        visualizationId: visualizationId('magnetic-field'),
      },
      {
        id: 'claim-dynamo',
        kind: 'claim',
        statement: {
          essential:
            'The field is generated by convection in the liquid iron outer core, organised by Earth’s rotation. Computer simulations that model this from first principles produce a field of roughly the right strength and geometry — and reverse spontaneously, as the real field does.',
          detailed:
            'The energy comes from two sources. Heat flowing out of the core drives thermal convection. And as the inner core slowly freezes, it expels lighter elements into the liquid above, which are buoyant and rise — compositional convection, which turns out to be the more efficient of the two.',
          technical:
            'The 1995 Glatzmaier–Roberts simulation was the first to run a self-consistent three-dimensional geodynamo long enough to capture a reversal. Modern simulations still operate at Ekman and magnetic Prandtl numbers far from Earth’s values, so their agreement with observation is encouraging rather than conclusive.',
        },
        evidence: 'model',
        references: [referenceId('glatzmaier-roberts-1995-dynamo')],
      },
      {
        id: 'reversals',
        kind: 'prose',
        text: {
          essential:
            'The field reverses. Not on a schedule — the intervals between reversals are irregular, ranging from tens of thousands of years to tens of millions. The last full reversal was about 780,000 years ago. During a reversal the field does not simply switch; it weakens, becomes messy and multipolar, and then reorganises with the poles swapped.',
          detailed:
            'We know this because rock records it. Lava that cools below the Curie temperature locks in the direction of the field at that moment, and sediments do something similar as magnetic grains settle. Read a sequence of lava flows or a core of seafloor and you read the field’s history. This is the record that made seafloor spreading undeniable, and it is also a precise dating tool for anything that can be tied to it.',
        },
      },
      {
        id: 'misconception-reversal',
        kind: 'callout',
        tone: 'misconception',
        title: '“A reversal would strip the atmosphere and cause a mass extinction”',
        text: {
          essential:
            'There is no evidence for this. Reversals have happened hundreds of times during the history of complex life, and they do not line up with mass extinctions in the fossil record. The field weakens during a reversal but does not vanish, and the atmosphere itself provides substantial shielding from charged particles regardless.',
          detailed:
            'What a reversal would plausibly do is increase radiation exposure modestly at high altitude and disrupt satellites and power grids — a serious technological problem rather than a biological catastrophe. The honest summary is that the biological effects appear to be small, and the confidence in that comes from the fossil record showing nothing rather than from a detailed model showing why.',
        },
        references: [referenceId('glatzmaier-roberts-1995-dynamo')],
      },
      {
        id: 'open-when-field',
        kind: 'open-question',
        question: 'How early did Earth have a magnetic field, and did life need it?',
        whyItMatters: {
          essential:
            'Mars appears to have lost its field early and then lost most of its atmosphere. Whether Earth’s field was necessary to keep its own atmosphere — and therefore whether a magnetic field is a requirement for a habitable planet — is a live question with consequences for how we search for life elsewhere.',
          detailed:
            'Venus complicates the story. It has no global magnetic field and a very thick atmosphere, so the simple rule "no field, no air" cannot be right as stated. Atmospheric loss depends on the planet’s gravity, the composition of the upper atmosphere and the stellar wind as well as on magnetism.',
        },
        whatWouldSettleIt: {
          essential:
            'More reliable measurements of field strength recorded in very old crystals, and better models of atmospheric escape with and without a field.',
          detailed:
            'Claims of a field 4.2 billion years ago rest on magnetisation trapped in Jack Hills zircons, and other researchers have argued that the magnetic signal could have been acquired much later than the crystal. Resolving that dispute requires demonstrating that the magnetic carriers are as old as the host crystal.',
        },
        references: [referenceId('tarduno-2015-early-dynamo')],
      },
    ],
    furtherReading: [referenceId('hirose-2013-core')],
  },
];
