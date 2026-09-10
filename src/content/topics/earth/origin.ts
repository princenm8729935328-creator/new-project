/**
 * Earth — how the planet was assembled, and what it was like when it was new.
 *
 * These five topics carry the section's hardest evidential problem: almost
 * nothing survives from the time they describe. Earth recycles its own surface,
 * so the rock record thins to nothing before about four billion years and then
 * stops. What we have instead are a few thousand crystals older than any rock,
 * the isotopes locked inside meteorites, the Moon, and physics. The writing
 * says so repeatedly, because a reader who is not told will assume the
 * confident narrative rests on direct observation. It does not.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const EARTH = sectionId('earth');
const REVIEWED = '2026-09-10';

export const EARTH_ORIGIN_TOPICS: readonly Topic[] = [
  {
    id: topicId('how-earth-was-born'),
    slug: 'how-earth-was-born',
    sectionId: EARTH,
    order: 1,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How Earth was born',
    subtitle:
      'Not created in one piece. Assembled, over tens of millions of years, out of collisions.',
    summary: {
      essential:
        'Earth grew. It started as dust in the disk of gas left over from the Sun’s formation, and that dust stuck together into grains, then pebbles, then rocks, then bodies large enough to pull each other in. The last stages were not gentle. Earth finished growing by absorbing other worlds.',
      detailed:
        'The whole process took a few tens of millions of years — quick by geological standards, and quick enough that the heat released by all that infalling material could not escape as fast as it arrived. The Earth that emerged was molten, glowing, and utterly unlike the planet in the photograph.',
      technical:
        'Hafnium–tungsten isotope systematics date core formation to within roughly 30–100 Myr of Solar System formation at 4.567 Ga, and models of runaway followed by oligarchic growth reproduce that timescale with a final giant-impact stage among a few dozen Moon-to-Mars-sized embryos.',
    },
    glossaryTerms: [
      glossaryTermId('accretion'),
      glossaryTermId('planetesimal'),
      glossaryTermId('differentiation'),
    ],
    related: [
      topicId('the-young-earth'),
      topicId('how-the-moon-formed'),
      topicId('earths-interior'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Begin with what was there before Earth was: a flat, rotating disk of gas and dust circling a newly formed star, extending far beyond where the planets are now. Almost all of it was hydrogen and helium. A small fraction — under two percent — was everything else, the carbon and oxygen and silicon and iron that earlier generations of stars had made and thrown away. Earth is built entirely out of that small fraction.',
          detailed:
            'In the warm inner part of the disk, only substances with high melting points could exist as solids. Water and methane and ammonia stayed as vapour there and only froze further out, past what astronomers call the snow line. That single fact explains a great deal about the Solar System: the inner planets are small and rocky because rock was all that was solid where they formed, and the outer planets are enormous because ice was abundant enough out there to build cores massive enough to capture gas.',
        },
      },
      {
        id: 'viz-accretion',
        kind: 'visualization',
        visualizationId: visualizationId('earth-accretion'),
      },
      {
        id: 'growth',
        kind: 'prose',
        text: {
          essential:
            'Growth started slowly and then accelerated in a way that is worth pausing on. Dust grains that bumped into each other stuck, held by nothing more than static and surface forces. Once a clump reached about a kilometre across, something changed: it had enough gravity to pull neighbouring material in rather than waiting for chance collisions. From then on, the biggest bodies grew fastest, because being big is exactly what makes you good at getting bigger.',
          detailed:
            'This is called runaway growth, and it does not last. Each growing body clears out its own neighbourhood, and once the local supply of small material runs low, growth slows to a crawl. What is left after a few million years is not a planet but a few dozen planetary embryos, somewhere between the size of the Moon and the size of Mars, on orbits that are close enough together to be unstable over long timescales.',
          technical:
            'Runaway growth arises because the gravitational focusing factor (1 + v_esc²/v_rel²) grows with body radius, so dM/dt scales faster than linearly with mass. It transitions to oligarchic growth when the embryo begins to dominate the velocity dispersion of nearby planetesimals, after which growth becomes self-limiting and the isolation mass sets the embryo scale.',
        },
      },
      {
        id: 'claim-giant-impacts',
        kind: 'claim',
        statement: {
          essential:
            'The final stage of building Earth was a series of collisions between bodies large enough to be called planets in their own right. This is not a dramatic flourish; it is what the models require and what the isotopic evidence supports.',
          detailed:
            'Those embryos, left on crossing orbits, spent the next tens of millions of years perturbing each other until they collided. Each collision was catastrophic and each one added a substantial fraction of a planet’s worth of material at once. The last one Earth experienced is the one that made the Moon.',
          technical:
            'N-body integrations of the late accretion stage consistently produce two to four terrestrial planets from an initial population of embryos, with a small number of giant impacts each delivering ≳10% of the final mass, and an accretion timescale of 30–100 Myr — matching the Hf–W constraint on the timing of Earth’s core formation.',
        },
        evidence: 'model',
        references: [referenceId('chambers-2004-accretion'), referenceId('kleine-2009-hf-w')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'solar-system-age',
            label: 'Age of the Solar System',
            value: 4.567,
            unit: 'billion years',
            uncertainty: { plusMinus: 0.001 },
            context:
              'Measured from calcium–aluminium inclusions in meteorites — the oldest solids known to have formed in the Solar System.',
            references: [referenceId('kleine-2009-hf-w')],
          },
          {
            id: 'earth-age',
            label: 'Age of the Earth',
            value: 4.54,
            unit: 'billion years',
            uncertainty: { plusMinus: 0.05 },
            context:
              'Not a single moment — Earth grew over tens of millions of years, so this dates the end of the main accretion, not a birthday.',
            references: [referenceId('kleine-2009-hf-w')],
          },
          {
            id: 'core-timing',
            label: 'Core formation complete by',
            value: 60,
            unit: 'million years after the Solar System formed',
            uncertainty: { plus: 40, minus: 30 },
            context:
              'Model-dependent; the range spans current giant-impact simulations. From hafnium–tungsten isotopes: hafnium stays in the mantle and tungsten goes to the core, so the isotope split is a stopwatch on when they separated.',
            references: [referenceId('kleine-2009-hf-w')],
          },
        ],
      },
      {
        id: 'misconception-formed',
        kind: 'callout',
        tone: 'misconception',
        title: '“Earth formed 4.5 billion years ago”',
        text: {
          essential:
            'That sentence is fine as shorthand and misleading as a picture. There was no moment when Earth came into existence. There was a disk, and then there were growing bodies, and then over tens of millions of years one of them ended up with most of the material in this orbital neighbourhood. Asking exactly when it became Earth is like asking exactly when a sand dune becomes a dune.',
          detailed:
            'The date usually quoted, 4.54 billion years, comes from lead isotopes in meteorites and terrestrial rocks and effectively marks the end of the main accretion phase. It is a real measurement of a real thing. It just is not a birth date, and treating it as one hides the most interesting feature of planet formation: that it is a long, violent, gradual process.',
        },
        references: [referenceId('kleine-2009-hf-w')],
      },
      {
        id: 'xlink-stars',
        kind: 'cross-link',
        topicId: topicId('from-stars-to-planets'),
        rationale:
          'Planet formation was covered from the star’s side in Stars & Galaxies — this is the same process seen from the planet’s side.',
      },
    ],
    furtherReading: [referenceId('chambers-2004-accretion')],
  },

  {
    id: topicId('the-young-earth'),
    slug: 'the-young-earth',
    sectionId: EARTH,
    order: 2,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The young Earth',
    subtitle: 'A world of molten rock — and then, sooner than anyone expected, water.',
    summary: {
      essential:
        'Assembling a planet releases enormous heat, and the newborn Earth was hot enough that its outer layers were liquid rock. Iron sank to the centre and lighter material floated up, which is how Earth got its layered structure. Then it cooled — and the surprise is how quickly. Within about 150 million years there was liquid water at the surface.',
      detailed:
        'The name for this first eon, the Hadean, was chosen when everyone assumed it was hellish throughout. The evidence has since suggested a more interesting story: probably brief and violent at the very start, then a cooler, wetter world far earlier than the name implies. That evidence comes from a few thousand crystals, because no Hadean rocks survive at all.',
      technical:
        'Accretional energy plus core-formation potential energy plus short-lived radionuclide decay is more than sufficient for a global magma ocean of order 1000 km depth. Detrital zircons from Jack Hills, Western Australia, dated to 4.4 Ga, carry δ¹⁸O values of 5.4–7.4‰ — elevated above mantle values in a way most simply explained by low-temperature interaction with liquid water.',
    },
    glossaryTerms: [
      glossaryTermId('magma-ocean'),
      glossaryTermId('hadean'),
      glossaryTermId('zircon'),
    ],
    related: [
      topicId('how-earth-was-born'),
      topicId('where-earths-oceans-came-from'),
      topicId('earths-early-atmosphere'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Every collision that built Earth arrived carrying kinetic energy, and when it stopped, that energy had to go somewhere. It went into heat. Add the energy released as iron sank toward the centre, add the decay of radioactive isotopes that were far more abundant then than now, and the result is a planet that could not shed heat as fast as it was making it. The outer few hundred kilometres were molten.',
          detailed:
            'A magma ocean is not a metaphor. It is a global layer of liquid rock, convecting vigorously, with a surface that would have glowed. And it does something crucial: in a liquid, dense material sinks. Iron and nickel, which had been mixed evenly through the growing planet, drained to the centre and formed the core. Lighter silicates rose. Earth stopped being a homogeneous ball of debris and became a layered planet — and it happened in a geological instant.',
        },
      },
      {
        id: 'viz-magma-ocean',
        kind: 'visualization',
        visualizationId: visualizationId('early-earth-cooling'),
      },
      {
        id: 'claim-zircons',
        kind: 'claim',
        statement: {
          essential:
            'Tiny crystals called zircons, some of them 4.4 billion years old, carry a chemical signature suggesting that liquid water existed at Earth’s surface within about 150 million years of the planet forming.',
          detailed:
            'Zircon is extraordinarily durable. Its parent rock can be eroded, buried, melted and re-formed, and the zircon crystals survive to be washed into a riverbed and found billions of years later. They also trap uranium while chemically excluding lead, which makes them precise clocks: any lead inside came from uranium decay, so the ratio gives an age directly.',
          technical:
            'The argument rests on oxygen isotopes. Melts that have never interacted with surface water inherit mantle δ¹⁸O of about 5.3‰. The Jack Hills zircons run heavier, up to about 7.4‰, which requires that their parent magma incorporated material that had been altered at low temperature by liquid water. Atom-probe tomography has since confirmed that the U–Pb ages are not artefacts of nanoscale lead mobility.',
        },
        evidence: 'inference',
        references: [referenceId('wilde-2001-zircon'), referenceId('valley-2014-hadean-zircon')],
      },
      {
        id: 'caution-record',
        kind: 'callout',
        tone: 'caution',
        title: 'There are no Hadean rocks',
        text: {
          essential:
            'Everything in this topic is reconstructed from indirect evidence, and it is worth being blunt about how little there is. No rock older than about 4.03 billion years survives anywhere on Earth. The Hadean is known from a few thousand individual crystals, from meteorites that sampled the same era elsewhere, from the Moon — which does preserve its early surface — and from physics.',
          detailed:
            'This is why descriptions of the early Earth have changed so much over the past few decades and may change again. The picture of a permanently hellish Hadean gave way to a cool early Earth largely on the strength of the zircon evidence, and researchers continue to argue about how much a few thousand crystals from one Australian outcrop can be asked to tell us about a whole planet.',
        },
        references: [referenceId('valley-2014-hadean-zircon')],
      },
      {
        id: 'cooling',
        kind: 'prose',
        text: {
          essential:
            'Cooling was fast at first because a glowing surface radiates heat away efficiently, and because there was no thick insulating atmosphere yet to trap it. Once a solid crust formed, the rate slowed. But it did not stop, and the planet has been losing its birth heat ever since — which is what still drives volcanoes and moves continents today.',
          detailed:
            'Roughly half the heat escaping through Earth’s surface right now is left over from formation and core crystallisation; the other half comes from radioactive decay of uranium, thorium and potassium in the mantle and crust. That total is about 47 terawatts. It is a small flux per square metre — you cannot feel it — but integrated over the whole planet and over billions of years it is what keeps Earth geologically alive.',
        },
      },
      {
        id: 'open-hadean-habitability',
        kind: 'open-question',
        question: 'Was the Hadean surface habitable, and for how long at a time?',
        whyItMatters: {
          essential:
            'If liquid water was present from 4.4 billion years ago, the window available for life to begin is much longer than a hellish-Hadean picture allows — and the origin of life becomes a less rushed problem.',
          detailed:
            'The complication is that large impacts continued for hundreds of millions of years, and a sufficiently large one would vaporise the oceans and sterilise the surface. So the question is not simply whether the Hadean was habitable but whether it stayed habitable long enough between impacts.',
        },
        whatWouldSettleIt: {
          essential:
            'More Hadean zircons from other continents, and better constraints on how large and how frequent the late impacts were.',
          detailed:
            'The Moon is the key witness here, because its surface preserves the impact record that Earth has erased. Radiometric dating of more lunar impact melts would tighten the flux estimate, which is precisely what several planned sample-return missions are designed to do.',
        },
        references: [referenceId('zahnle-2007-early-earth'), referenceId('wilde-2001-zircon')],
      },
    ],
    furtherReading: [referenceId('elkins-tanton-2012-magma-ocean')],
  },

  {
    id: topicId('how-the-moon-formed'),
    slug: 'how-the-moon-formed',
    sectionId: EARTH,
    order: 3,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How the Moon formed',
    subtitle: 'The best explanation involves destroying a planet, and it still has a problem.',
    summary: {
      essential:
        'The leading explanation is that a body roughly the size of Mars struck the young Earth a glancing blow. The impact vaporised and melted enormous amounts of rock, threw a disk of debris into orbit, and that disk gathered itself into the Moon. It explains the Moon’s size, its orbit, and why it has almost no iron.',
      detailed:
        'It also has a real difficulty. Earth and the Moon have essentially identical oxygen isotope ratios, and every body in the Solar System that formed in a different place has a different ratio. If most of the Moon came from the impactor, the Moon should look chemically foreign. It does not.',
      technical:
        'Canonical giant-impact simulations with a Mars-mass impactor at low velocity produce a disk that is 60–80% impactor-derived. Δ¹⁷O between Earth and Moon is measured at 1 ± 5 ppm — indistinguishable. Resolutions include a much more energetic impact that fully mixes the two bodies, or the impactor having formed at nearly the same heliocentric distance.',
    },
    glossaryTerms: [glossaryTermId('differentiation'), glossaryTermId('accretion')],
    related: [topicId('the-young-earth'), topicId('how-earth-was-born')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The Moon is strange, and it is worth seeing why before hearing the explanation. It is enormous relative to its planet — over a quarter of Earth’s diameter, where most moons in the Solar System are a tiny fraction of theirs. It is much less dense than Earth, meaning it has hardly any iron. It is bone dry compared with Earth. And its orbit is tilted relative to Earth’s equator, which is not what you would expect from a moon that formed alongside its planet.',
          detailed:
            'Three explanations were seriously considered for most of the twentieth century. The Moon formed alongside Earth from the same material — but then why so little iron? The Moon formed elsewhere and was captured — but capture requires shedding an enormous amount of energy, and no plausible mechanism does that for a body this large. The Moon was spun off a fast-rotating Earth — but Earth would have had to be rotating impossibly fast. All three failed on specifics.',
        },
      },
      {
        id: 'viz-moon',
        kind: 'visualization',
        visualizationId: visualizationId('moon-forming-impact'),
      },
      {
        id: 'claim-impact',
        kind: 'claim',
        statement: {
          essential:
            'The giant-impact hypothesis explains what the alternatives could not: a Mars-sized body struck Earth obliquely, and the Moon formed from the debris thrown into orbit.',
          detailed:
            'The geometry does most of the work. A glancing blow preferentially ejects material from the outer, rocky layers of both bodies while the two iron cores merge and stay with Earth — which is exactly why the Moon is iron-poor. The angular momentum delivered by the impact accounts for the Earth–Moon system’s rotation. The extreme heat explains why the Moon is depleted in volatile elements.',
          technical:
            'Hydrodynamic simulations of an oblique impact by a ~0.1 M⊕ body at close to the mutual escape velocity place roughly a lunar mass of predominantly silicate material outside the Roche limit, with a specific angular momentum matching the present Earth–Moon system to within a factor of order unity. The Moon then accretes from that disk in perhaps 100 years.',
        },
        evidence: 'model',
        references: [referenceId('canup-2004-moon')],
      },
      {
        id: 'isotope-problem',
        kind: 'callout',
        tone: 'caution',
        title: 'The problem the hypothesis still has',
        text: {
          essential:
            'Bodies that formed at different distances from the Sun have measurably different oxygen isotope ratios — it is one of the most reliable fingerprints in planetary science. Mars is distinguishable from Earth. Most meteorite classes are distinguishable from Earth. The Moon is not distinguishable from Earth at all.',
          detailed:
            'If the standard simulations are right and most of the Moon came from the impactor, this is a genuine problem, because the impactor should have carried its own fingerprint. Two kinds of solution are being pursued: a far more energetic impact that vaporised and thoroughly mixed both bodies before the disk condensed, or an impactor that happened to form at almost exactly Earth’s distance from the Sun and therefore already shared its composition. Neither is established.',
        },
        references: [
          referenceId('young-2016-oxygen-isotopes'),
          referenceId('canup-2012-moon-isotopes'),
        ],
      },
      {
        id: 'consequences',
        kind: 'prose',
        text: {
          essential:
            'Whatever the details, the consequences for Earth were permanent. The impact left Earth spinning fast — a day of perhaps five hours — and tidal friction with the Moon has been slowing it ever since. It also left the Earth’s axis tilted, which is what gives us seasons, and gave Earth a large companion whose gravity stabilises that tilt against the tugs of the other planets.',
          detailed:
            'The tilt stabilisation is the consequence most often discussed in connection with life, and it deserves care. Mars, with only two tiny moons, has an axial tilt that wanders chaotically over tens of degrees on million-year timescales. Earth’s stays within about 2.4 degrees. Whether that stability was necessary for complex life is a reasonable hypothesis and not an established fact — it is a claim about a counterfactual planet nobody has observed.',
        },
      },
      {
        id: 'quantities-moon',
        kind: 'quantity',
        quantities: [
          {
            id: 'moon-mass',
            label: 'Moon’s mass, relative to Earth',
            value: 1.2,
            unit: '% of Earth’s',
            context:
              'Well determined from the Moon’s moment of inertia and seismic data. Large for a moon. Jupiter’s biggest moon is under 0.01% of Jupiter’s mass.',
            references: [referenceId('canup-2004-moon')],
          },
          {
            id: 'oxygen-isotope-difference',
            label: 'Earth–Moon oxygen isotope difference',
            value: 1,
            unit: 'part per million (Δ¹⁷O)',
            uncertainty: { plusMinus: 5 },
            context:
              'Indistinguishable from zero. This is the measurement that makes the standard impact model uncomfortable.',
            references: [referenceId('young-2016-oxygen-isotopes')],
          },
          {
            id: 'lunar-recession',
            label: 'Rate the Moon is receding',
            value: 3.8,
            unit: 'cm per year',
            uncertainty: { plusMinus: 0.1 },
            context:
              'Measured by bouncing lasers off reflectors left by the Apollo missions. The rate has not been constant over Earth history.',
            references: [referenceId('canup-2004-moon')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('canup-2012-moon-isotopes')],
  },

  {
    id: topicId('earths-early-atmosphere'),
    slug: 'earths-early-atmosphere',
    sectionId: EARTH,
    order: 4,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Earth’s early atmosphere',
    subtitle: 'Air you could not breathe, made by the planet exhaling.',
    summary: {
      essential:
        'Earth’s first atmosphere was whatever hydrogen and helium it could hold onto from the disk, and it lost that almost immediately — those gases are too light and Earth’s gravity too weak. The atmosphere that mattered came from inside: gases dissolved in molten rock, released as that rock rose and the pressure dropped.',
      detailed:
        'That second atmosphere was mostly carbon dioxide and nitrogen with water vapour, and it contained essentially no free oxygen. That last point is not a detail. For roughly the first half of Earth’s history there was no oxygen in the air to speak of, and the evidence for that is unusually sharp.',
      technical:
        'Outgassed volatiles were dominated by H₂O, CO₂ and N₂, with the oxidation state buffered by the mantle. Mass-independent fractionation of sulfur isotopes in Archean sediments requires atmospheric O₂ below roughly 10⁻⁵ of the present level, because photochemical MIF is only preserved when there is no ozone shield and no oxidative homogenisation of sulfur species.',
    },
    glossaryTerms: [glossaryTermId('outgassing'), glossaryTermId('archean')],
    related: [
      topicId('where-earths-oceans-came-from'),
      topicId('earths-changing-atmosphere'),
      topicId('the-oxygen-revolution'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A planet forming inside a disk of gas will capture some of that gas simply by being there. Earth did. But hydrogen and helium molecules move fast at any reasonable temperature, and Earth’s gravity is not strong enough to hold them — the fastest ones escape, then the next fastest, and over a few tens of millions of years the whole envelope leaks away. This is why Earth has no hydrogen atmosphere and Jupiter does.',
          detailed:
            'What replaced it came from below. Rock deep inside a planet holds gases dissolved within it, in the same way a sealed bottle of fizzy water holds carbon dioxide. Bring that rock toward the surface and the pressure drops and the gas comes out. On a planet with a magma ocean, and later with volcanoes, this happens continuously. The atmosphere was, quite literally, exhaled.',
        },
      },
      {
        id: 'viz-atmosphere-history',
        kind: 'visualization',
        visualizationId: visualizationId('atmosphere-evolution'),
      },
      {
        id: 'claim-anoxic',
        kind: 'claim',
        statement: {
          essential:
            'There was essentially no free oxygen in Earth’s atmosphere before about 2.4 billion years ago. This is one of the best-established facts about the early Earth.',
          detailed:
            'The clinching evidence is a peculiar signature in sulfur isotopes. Ordinary chemical processes sort isotopes by mass in a predictable way — an isotope two units heavier fractionates about twice as much as one unit heavier. In Archean rocks, sulfur isotopes are sorted in a way that breaks this rule, and the only known process that does that is ultraviolet photochemistry acting on sulfur dioxide high in an atmosphere with no ozone layer. The signal disappears abruptly at 2.4 billion years, and it has never reappeared.',
          technical:
            'The signal is quantified as Δ³³S = δ³³S − 0.515·δ³⁴S, which departs from zero by up to several per mil in pre-2.45 Ga sediments and collapses to within analytical error thereafter. Preservation of the anomaly additionally requires that sulfur be delivered to sediments through multiple exit channels — elemental sulfur and sulfate — which oxidative atmospheric chemistry would homogenise.',
        },
        evidence: 'established',
        references: [
          referenceId('farquhar-2000-sulfur'),
          referenceId('catling-zahnle-2020-atmosphere'),
        ],
      },
      {
        id: 'misconception-oxygen',
        kind: 'callout',
        tone: 'misconception',
        title: '“Volcanoes released the oxygen we breathe”',
        text: {
          essential:
            'They did not, and they could not. Volcanic gases are chemically reducing — dominated by water vapour, carbon dioxide, sulfur dioxide and hydrogen — because they equilibrate with mantle rock, which is itself reducing. No volcanic process releases free oxygen.',
          detailed:
            'This matters because oxygen is chemically aggressive and does not accumulate on its own. It reacts with iron, with sulfur, with volcanic gases, with anything available. To build an oxygen-rich atmosphere you need something that produces it faster than the planet can consume it, continuously, for a very long time. Only one process has ever managed that, and it is biological.',
        },
        references: [referenceId('catling-zahnle-2020-atmosphere')],
      },
      {
        id: 'faint-sun',
        kind: 'prose',
        text: {
          essential:
            'There is a puzzle hiding in this period. The Sun was substantially fainter when it was young — about 70 percent of its present brightness four billion years ago — because it had converted less of its hydrogen to helium. With today’s atmosphere, that Sun would have left Earth frozen solid. Yet the geological record shows liquid water and, before long, life.',
          detailed:
            'This is the faint young Sun paradox, and it has been open since Carl Sagan and George Mullen posed it in 1972. The usual answer is that the early atmosphere held far more greenhouse gas than today’s — much more carbon dioxide, possibly methane, possibly both. That works arithmetically, but the geological evidence for exactly how much of each is thin, and some proposed methane levels run into trouble with the organic haze they would produce. It is not a solved problem so much as a problem with several plausible answers and no way yet to choose between them.',
        },
      },
      {
        id: 'open-faint-sun',
        kind: 'open-question',
        question: 'How did the early Earth stay warm under a much fainter Sun?',
        whyItMatters: {
          essential:
            'Because the answer constrains what the early atmosphere was made of, which in turn constrains the chemistry available to the origin of life.',
          detailed:
            'It also matters for how we think about habitable planets elsewhere. If Earth needed an unusual atmospheric composition to avoid freezing, then the habitable zone around other stars is narrower and more contingent than the simple calculation suggests.',
        },
        whatWouldSettleIt: {
          essential:
            'Better proxies for Archean atmospheric composition — direct constraints on carbon dioxide and methane rather than model inferences.',
          detailed:
            'Promising avenues include the chemistry of ancient soils, which record the carbon dioxide they weathered under, and gas trapped in fluid inclusions in Archean minerals. Both are difficult and both currently give looser bounds than the models require.',
        },
        references: [
          referenceId('sagan-mullen-1972-faint-sun'),
          referenceId('sagan-chyba-1997-faint-sun'),
        ],
      },
    ],
    furtherReading: [referenceId('catling-zahnle-2020-atmosphere')],
  },

  {
    id: topicId('where-earths-oceans-came-from'),
    slug: 'where-earths-oceans-came-from',
    sectionId: EARTH,
    order: 5,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Where Earth’s oceans came from',
    subtitle: 'Not delivered by comets, on the current evidence — mostly built in.',
    summary: {
      essential:
        'For decades the standard answer was that Earth formed dry, because it formed too close to the Sun for ice to survive, and that comets brought the water later. Measurements have largely undermined that story. The water in most comets does not match seawater, and the water in a certain class of meteorite does.',
      detailed:
        'The test is deuterium. Water contains a small fraction of heavy hydrogen, and the exact fraction depends on where and how cold the water formed. Earth’s oceans have a specific value, and that value points at carbonaceous chondrites — asteroidal material from the outer belt — rather than at comets.',
      technical:
        'The seawater D/H ratio is 1.56 × 10⁻⁴ (VSMOW). CI and CM carbonaceous chondrites cluster near this value; most Oort-cloud comets measured run roughly twice as high, though 103P/Hartley 2 came in close to terrestrial. Nitrogen and noble gas isotopes independently favour a chondritic rather than cometary source for the bulk of Earth’s volatiles.',
    },
    glossaryTerms: [glossaryTermId('accretion'), glossaryTermId('outgassing')],
    related: [
      topicId('earths-early-atmosphere'),
      topicId('the-young-earth'),
      topicId('how-earths-climate-works'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The problem seems obvious at first. Earth sits well inside the region where water ice cannot survive as a solid in a young disk — it would have sublimated away. So where did an ocean’s worth of water come from? The intuitive answer, and the one that dominated for a long time, was delivery: comets are dirty snowballs, comets hit planets, therefore comets brought the water.',
          detailed:
            'It is a good hypothesis and it makes a testable prediction. If the water came from comets, then cometary water should chemically resemble seawater. There is a convenient fingerprint for this — the ratio of ordinary hydrogen to deuterium, hydrogen with an extra neutron. That ratio is set by the temperature at which the water molecules formed and is essentially locked in afterwards.',
        },
      },
      {
        id: 'viz-water',
        kind: 'visualization',
        visualizationId: visualizationId('water-origin-isotopes'),
      },
      {
        id: 'claim-chondrites',
        kind: 'claim',
        statement: {
          essential:
            'The deuterium content of Earth’s oceans matches a class of water-bearing meteorites from the outer asteroid belt far better than it matches most comets.',
          detailed:
            'When spacecraft and telescopes measured the deuterium ratio in comet after comet, most came out roughly twice as heavy as seawater. Carbonaceous chondrites — a type of primitive meteorite that contains water bound into its minerals — came out close to seawater. The comet story did not survive its own test.',
          technical:
            'The comparison is not perfectly clean: 103P/Hartley 2, a Jupiter-family comet, measured close to the terrestrial value, and comet D/H shows more scatter than early measurements suggested. But nitrogen isotopes and noble gases point the same way as hydrogen, and three independent tracers agreeing is a stronger argument than any one of them.',
        },
        evidence: 'inference',
        references: [
          referenceId('alexander-2012-chondrites'),
          referenceId('marty-2012-water-origin'),
          referenceId('hartogh-2011-hartley'),
        ],
      },
      {
        id: 'built-in',
        kind: 'prose',
        text: {
          essential:
            'The picture that has replaced pure delivery is that Earth was never entirely dry. Some of the material that built it came from further out in the disk, already carrying water chemically bound inside minerals rather than as ice — water can survive that way at temperatures that would boil off a snowball. Earth accreted wet, and then outgassed that water as steam when it melted.',
          detailed:
            'So the ocean condensed out of the atmosphere. As the surface cooled below the point where water vapour could stay vapour at that pressure, it rained — and on a planet with several oceans’ worth of water in the air, it rained for a very long time. The zircon evidence says this had happened by 4.4 billion years ago, remarkably soon after the planet finished forming.',
        },
      },
      {
        id: 'caution-mixed',
        kind: 'callout',
        tone: 'caution',
        title: 'Mostly built in does not mean entirely built in',
        text: {
          essential:
            'The evidence favours a chondritic source for the bulk of Earth’s water. It does not rule out a cometary contribution — it constrains it. Estimates typically put the cometary share at under about ten percent, but that number depends on assumptions about how much cometary material arrived at all.',
          detailed:
            'There is also an active argument about whether some of Earth’s hydrogen came from the solar nebula itself, dissolving into a magma ocean directly from a captured hydrogen envelope. Noble gas isotopes in the deep mantle hint at a nebular component. How large it was is not settled.',
        },
        references: [referenceId('marty-2012-water-origin')],
      },
      {
        id: 'quantities-water',
        kind: 'quantity',
        quantities: [
          {
            id: 'ocean-mass',
            label: 'Mass of Earth’s oceans',
            value: 1.35e21,
            unit: 'kg',
            context:
              'Well determined; the mass of the oceans in kilograms. About 0.02% of Earth’s mass. The oceans are, on a planetary scale, a very thin film.',
            references: [referenceId('marty-2012-water-origin')],
          },
          {
            id: 'seawater-dh',
            label: 'Deuterium-to-hydrogen ratio in seawater',
            value: 1.56e-4,
            unit: '',
            context:
              'The reference standard against which other sources are compared. The value every candidate water source has to match.',
            references: [referenceId('alexander-2012-chondrites')],
          },
          {
            id: 'mantle-water',
            label: 'Water stored in the mantle',
            value: 2,
            unit: 'ocean masses',
            uncertainty: { plusMinus: 1 },
            context:
              'Poorly constrained; estimates of how much water the mantle holds vary widely. Bound into minerals rather than present as liquid. Most of Earth’s water may never have been at the surface at all.',
            references: [referenceId('marty-2012-water-origin')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('alexander-2012-chondrites')],
  },
];
