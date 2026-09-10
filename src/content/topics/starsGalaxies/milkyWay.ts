/**
 * Stars & Galaxies — our own Galaxy, and its centre.
 *
 * Measuring the Milky Way is harder than measuring other galaxies, and the file
 * says so repeatedly rather than presenting numbers with borrowed confidence.
 * We sit inside the disk, behind dust, at an unknown distance from a centre we
 * cannot see optically. Almost every structural parameter here has a real
 * uncertainty attached, and several were revised substantially in the last
 * decade.
 *
 * The Galactic Centre topic exists to make one specific point: the S-star
 * orbits are direct observations, and "therefore a black hole" is an inference
 * — an extremely strong one, with the alternatives now essentially excluded,
 * but an inference. The Black Holes section carries the rest.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const STARS = sectionId('stars-galaxies');
const REVIEWED = '2026-09-09';

export const STARS_MILKY_WAY_TOPICS: readonly Topic[] = [
  {
    id: topicId('the-milky-way'),
    slug: 'the-milky-way',
    sectionId: STARS,
    order: 26,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The Milky Way',
    subtitle: 'The one galaxy we can only see from inside.',
    summary: {
      essential:
        'Our Galaxy is a barred spiral: a flat disk of a few hundred billion stars roughly 100,000 light-years across, with a bar through the middle, a bulge around the centre, a sparse halo of old stars and globular clusters, and a dark-matter halo far larger than all of it.',
      detailed:
        'Mapping it is unusually difficult, because we are inside it and dust blocks our view along the plane. Almost everything we know about its large-scale structure comes from radio and infrared observations that penetrate dust, plus, since 2013, precise distances and motions for over a billion stars from the Gaia mission.',
      technical:
        'Structural parameters: R₀ = 8.178 ± 0.026 kpc (geometric, from S2’s orbit), circular speed at the Sun ≈ 230 km/s, thin-disk scale length ≈ 2.6 kpc and scale height ≈ 300 pc, thick disk ≈ 900 pc, bar semi-major axis ≈ 5 kpc at ~27° to the Sun–centre line. Stellar mass ≈ 5 × 10¹⁰ M☉; virial mass ≈ 1–1.5 × 10¹² M☉ with substantial method dependence.',
    },
    glossaryTerms: [glossaryTermId('galactic-halo'), glossaryTermId('parsec')],
    related: [
      topicId('our-place-inside-the-milky-way'),
      topicId('the-galactic-centre'),
      topicId('spiral-galaxies'),
    ],
    blocks: [
      {
        id: 'from-inside',
        kind: 'prose',
        text: {
          essential:
            'Every picture you have seen of the Milky Way from outside is an illustration. Nobody has ever photographed our Galaxy from beyond it, and nobody will. What we have is a map built from inside — measuring the distance and motion of star after star, and gas cloud after gas cloud, and inferring the shape they collectively make.',
          detailed:
            'This is why the number of spiral arms has changed over the decades and is still not universally agreed. Infrared surveys revised the picture toward two dominant arms plus fainter ones; other analyses favour four. It is a genuinely hard measurement, and the honest answer is that the Milky Way’s arm structure is less well determined than that of galaxies we can see face-on from millions of light-years away.',
        },
      },
      {
        id: 'viz-milky-way',
        kind: 'visualization',
        visualizationId: visualizationId('milky-way-structure'),
      },
      {
        id: 'claim-bar',
        kind: 'claim',
        statement: {
          essential:
            'The Milky Way has a bar — a straight, elongated structure of stars through its centre, from whose ends the spiral arms emerge. This was suspected from gas motions in the 1960s and 70s and confirmed by infrared surveys that could see through the dust.',
          detailed:
            'Bars are common: roughly two thirds of nearby disk galaxies have one. They matter dynamically because they are efficient at driving gas inward, which links them to central star formation and to feeding the central black hole. Our bar’s length and its angle to our line of sight are still being refined, with recent estimates around 5 kiloparsecs and 25–30 degrees.',
        },
        evidence: 'established',
        references: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
      },
      {
        id: 'components',
        kind: 'prose',
        text: {
          essential:
            'The disk holds most of the stars and nearly all the gas, and it is where new stars form. The bulge is older and denser. The halo is a thin scattering of very old stars and about 150 globular clusters, extending far beyond the disk. And the dark-matter halo, which nobody has ever seen, extends further still and outweighs everything else combined.',
          detailed:
            'The disk is really two overlapping disks. A thin one, a few hundred parsecs thick, containing young metal-rich stars including the Sun. And a thick one, roughly three times taller, of older, more metal-poor stars on hotter orbits — plausibly heated by an early merger, or formed thick, with both explanations still in play.',
        },
      },
      {
        id: 'claim-globulars',
        kind: 'claim',
        statement: {
          essential:
            'The Milky Way’s globular clusters are among the oldest objects known, with ages around 12 to 13 billion years. They formed before the disk did and still orbit through the halo on paths that ignore it.',
          detailed:
            'Their ages are measured from the main-sequence turn-off point, and they place a hard lower bound on the age of the Universe — historically a serious constraint, since for a period in the 1990s the best cluster ages exceeded the best estimates of the cosmic age. Better distances and better cosmological parameters resolved that. Some clusters are now understood to be the stripped cores of dwarf galaxies the Milky Way swallowed.',
        },
        evidence: 'inference',
        references: [
          referenceId('harris-2010-globular-catalog'),
          referenceId('helmi-2018-gaia-enceladus'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'r0',
            label: 'Distance from the Sun to the Galactic Centre',
            value: 8.178,
            unit: 'kpc',
            uncertainty: { plusMinus: 0.026 },
            context:
              'A geometric measurement from the orbit of the star S2 around Sagittarius A* — no distance ladder involved. Equivalent to about 26,700 light-years.',
            references: [referenceId('gravity-2019-galactic-centre-distance')],
          },
          {
            id: 'disk-diameter',
            label: 'Diameter of the Milky Way’s stellar disk',
            value: 100000,
            unit: 'light-years (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'The disk has no sharp edge — the stellar density falls off exponentially — so any diameter is a convention about where to stop counting.',
            references: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
          },
          {
            id: 'globular-count',
            label: 'Known globular clusters in the Milky Way',
            value: 157,
            unit: 'clusters',
            context:
              'The catalogued number. More are still being found in the obscured inner Galaxy, so this is a lower bound rather than a census.',
            references: [referenceId('harris-2010-globular-catalog')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
  },

  {
    id: topicId('our-place-inside-the-milky-way'),
    slug: 'our-place-inside-the-milky-way',
    sectionId: STARS,
    order: 27,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Our place inside the Milky Way',
    subtitle: 'What the band of light across the night sky actually is.',
    summary: {
      essential:
        'The Sun sits about halfway out in the disk, roughly 26,000 light-years from the centre, between two major spiral arms. It orbits the Galaxy once every 220 million years or so. And the faint band of light called the Milky Way is simply the disk seen edge-on from inside it.',
      detailed:
        'That last point is worth sitting with. When you look at the band, you are looking along the plane of the disk, through the greatest depth of stars. When you look away from it, you are looking out of the disk, through the least. The shape of the night sky is a direct consequence of our position inside a flattened system.',
      technical:
        'The Sun lies at R₀ ≈ 8.18 kpc, about 20 pc above the midplane, with circular speed ≈ 230 km/s giving an orbital period ≈ 220–230 Myr. Its peculiar velocity relative to the local standard of rest is about 13 km/s. It sits in the Local Arm (Orion Spur), a minor feature between the Sagittarius and Perseus arms rather than in a major arm.',
    },
    glossaryTerms: [glossaryTermId('parsec'), glossaryTermId('light-year')],
    related: [
      topicId('the-milky-way'),
      topicId('the-galactic-centre'),
      topicId('measuring-stellar-distances'),
    ],
    blocks: [
      {
        id: 'the-band',
        kind: 'prose',
        text: {
          essential:
            'Go somewhere genuinely dark and the Milky Way is a hazy band arcing across the sky. Galileo pointed a telescope at it in 1610 and resolved it into individual stars — settling a question that had been open for two thousand years. The band is the combined light of billions of stars too faint and too close together to separate by eye.',
          detailed:
            'Its shape tells you the shape of the Galaxy. A band means a disk seen edge-on; a sphere of stars would look the same in every direction. The dark rifts running through it are not gaps but dust clouds blocking the light behind them. And the band is brightest toward Sagittarius because that is the direction of the Galactic Centre, where the stars are densest.',
        },
      },
      {
        id: 'viz-position',
        kind: 'visualization',
        visualizationId: visualizationId('solar-neighbourhood'),
      },
      {
        id: 'claim-orbit',
        kind: 'claim',
        statement: {
          essential:
            'The Sun orbits the Galactic Centre at about 230 kilometres per second, completing one circuit roughly every 220 million years. It has been round about twenty times since it formed.',
          detailed:
            'That number is a nice unit for deep time. One galactic year ago, the first dinosaurs had not yet appeared. Two ago, the largest extinction event in Earth’s history was still in the future. Attempts to link the Sun’s galactic orbit to terrestrial extinction cycles have been made repeatedly and remain unconvincing — the claimed periodicities are not robust to how the data are analysed.',
        },
        evidence: 'established',
        references: [
          referenceId('bland-hawthorn-gerhard-2016-milky-way'),
          referenceId('gravity-2019-galactic-centre-distance'),
        ],
      },
      {
        id: 'ordinary-place',
        kind: 'callout',
        tone: 'note',
        title: 'An unremarkable address, and that is informative',
        text: {
          essential:
            'The Sun is not at the centre, not in the halo, and not in a major spiral arm. It sits in a minor feature between two arms, at a middling distance, in a fairly ordinary part of a fairly ordinary galaxy.',
          detailed:
            'The consistent lesson of four centuries of astronomy is that assuming we occupy a special location has always turned out wrong — Earth is not the centre of the Solar System, the Sun is not the centre of the Galaxy, and the Galaxy is not the centre of anything. That said, "typical" needs care: we necessarily live somewhere that permits observers, which is a real selection effect and not the same as being at a random location.',
        },
        references: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'sun-speed',
            label: 'Orbital speed of the Sun around the Galaxy',
            value: 230,
            unit: 'km/s',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Recent determinations cluster between about 220 and 240 km/s. Combined with the geometric distance to the centre, this gives the orbital period.',
            references: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
          },
          {
            id: 'naked-eye-stars',
            label: 'Stars visible to the naked eye from a dark site',
            value: 4500,
            unit: 'stars (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'From one hemisphere at any moment, in excellent conditions. Out of a few hundred billion in the Galaxy — a sample of about one in a hundred million, and a heavily biased one at that.',
            references: [referenceId('gaia-2021-edr3-parallax')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
  },

  {
    id: topicId('the-galactic-centre'),
    slug: 'the-galactic-centre',
    sectionId: STARS,
    order: 28,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The Galactic Centre',
    subtitle: 'Watching stars orbit something that emits almost nothing.',
    summary: {
      essential:
        'At the centre of the Milky Way, stars are seen orbiting an invisible object. Their orbits have been tracked for three decades — one star completes a full ellipse every 16 years — and those orbits require about 4.3 million solar masses inside a region smaller than the Solar System. The only viable explanation is a black hole.',
      detailed:
        'What makes this the strongest case for any supermassive black hole is that it is close enough to resolve individual stars. Everywhere else, the central mass is inferred from the average motion of unresolved gas or stars. Here we have complete Keplerian orbits of individual objects, measured over decades, exactly as if they were planets around a sun.',
      technical:
        'Near-infrared adaptive optics and interferometry have tracked S2 (P = 16.05 yr, a ≈ 970 AU, e ≈ 0.88, periapsis ≈ 120 AU at ~7650 km/s). Orbit fitting yields M = 4.30 ± 0.01 (stat) ± 0.03 (sys) × 10⁶ M☉ and R₀ = 8.178 ± 0.026 kpc. The gravitational redshift and Schwarzschild precession of S2 have both been detected at high significance, confirming the potential is relativistic and not merely Keplerian.',
    },
    glossaryTerms: [glossaryTermId('event-horizon'), glossaryTermId('agn')],
    related: [
      topicId('supermassive-black-holes-and-galaxy-evolution'),
      topicId('the-milky-way'),
      topicId('measuring-stellar-mass'),
    ],
    blocks: [
      {
        id: 'the-orbits',
        kind: 'prose',
        text: {
          essential:
            'Two teams began photographing the same tiny patch of sky in infrared light in the early 1990s, and kept doing it, year after year. Slowly, the stars in that patch moved. Not drifting randomly — sweeping along ellipses, fast near one point and slow at the other, exactly as Kepler described for planets. Whatever they orbit sits at the shared focus of every ellipse, and emits almost no light.',
          detailed:
            'The star known as S2 has been the workhorse. Its orbit takes 16 years, so several complete circuits have now been recorded. At closest approach it comes within about 120 astronomical units of the centre and is travelling at nearly 3 percent of the speed of light. Applying Kepler’s third law to a measured orbit gives the enclosed mass directly — the same reasoning already used in the Newton section for planets, applied 26,000 light-years away.',
        },
      },
      {
        id: 'viz-s2',
        kind: 'visualization',
        visualizationId: visualizationId('galactic-centre-orbits'),
      },
      {
        id: 'link-newton',
        kind: 'cross-link',
        topicId: topicId('universal-law'),
        rationale:
          'The mass comes straight out of Newton’s law of gravitation and Kepler’s third law — the same reasoning used for planetary orbits.',
      },
      {
        id: 'claim-mass',
        kind: 'claim',
        statement: {
          essential:
            'The orbits require about 4.3 million solar masses packed inside a region smaller than the orbit of Neptune. That is the observation.',
          detailed:
            'The mass and the distance come out of the same orbital fit, which is why the Galactic Centre now provides one of the most precise distances in astronomy — a geometric measurement independent of the entire cosmic distance ladder. The measurement itself makes no assumption about what the object is: it is Kepler’s third law applied to measured positions and velocities.',
        },
        evidence: 'established',
        references: [
          referenceId('gravity-2019-galactic-centre-distance'),
          referenceId('genzel-2010-galactic-centre'),
          referenceId('ghez-2008-galactic-centre'),
        ],
      },
      {
        id: 'claim-inference',
        kind: 'claim',
        statement: {
          essential:
            'That the object is a black hole is an inference from the observation — an extremely strong one. No other configuration of that much mass in that little space could survive: a cluster of stars or dark remnants would collapse or evaporate in far less than the Galaxy’s age.',
          detailed:
            'The distinction is worth keeping sharp. What is measured is a mass, a volume, and the absence of light. What is inferred is a black hole. The inference has been strengthened repeatedly: the mass has been confined to smaller and smaller volumes as observations improved, alternatives such as a ball of degenerate fermions have been excluded by the tightening constraints, and general-relativistic effects — gravitational redshift and orbital precession of S2 — have now been detected directly. The Event Horizon Telescope image is consistent with a black-hole shadow of the expected size, and is an image of surrounding emission rather than of a horizon.',
        },
        evidence: 'inference',
        references: [
          referenceId('gravity-2020-schwarzschild-precession'),
          referenceId('gravity-2018-s2-redshift'),
          referenceId('eht-2022-sgr-a'),
        ],
      },
      {
        id: 'link-black-holes',
        kind: 'cross-link',
        topicId: topicId('what-is-a-black-hole'),
        rationale:
          'What a black hole is, what the shadow images show and do not show, and the rest of the physics has its own section.',
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'sgra-mass',
            label: 'Mass of Sagittarius A*',
            value: 4.297e6,
            unit: 'M☉',
            uncertainty: { plusMinus: 0.013e6 },
            context:
              'From fitting the orbits of stars around it, principally S2. The quoted statistical precision is remarkable; systematic uncertainties from the astrometric reference frame are somewhat larger.',
            references: [referenceId('gravity-2019-galactic-centre-distance')],
          },
          {
            id: 's2-period',
            label: 'Orbital period of the star S2',
            value: 16.05,
            unit: 'years',
            context:
              'Short enough that several complete orbits have been observed since monitoring began, which is what makes the fit so tight.',
            references: [referenceId('genzel-2010-galactic-centre')],
          },
          {
            id: 's2-speed',
            label: 'Speed of S2 at closest approach',
            value: 7650,
            unit: 'km/s',
            context:
              'About 2.6 percent of the speed of light — fast enough that relativistic corrections to its orbit are measurable, and have been measured.',
            references: [referenceId('gravity-2018-s2-redshift')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('genzel-2010-galactic-centre'),
      referenceId('gravity-2019-galactic-centre-distance'),
    ],
  },

  {
    id: topicId('supermassive-black-holes-and-galaxy-evolution'),
    slug: 'supermassive-black-holes-and-galaxy-evolution',
    sectionId: STARS,
    order: 29,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Black holes and their galaxies',
    subtitle: 'A tight correlation, and an unfinished argument about what causes it.',
    summary: {
      essential:
        'Nearly every large galaxy has a supermassive black hole at its centre, and its mass correlates closely with properties of the surrounding galaxy — particularly how fast the stars in the bulge move. The correlation is well established. What produces it is not.',
      detailed:
        'The puzzle is one of scale. The black hole’s gravity dominates only within a tiny region, thousands of times smaller than the galaxy. It has no direct gravitational influence over the bulge whose properties it tracks. So either the black hole affects the galaxy by some non-gravitational route — energy released while feeding — or both are shaped by a common history.',
      technical:
        'The M–σ relation, M_BH ∝ σ^{4–5}, has scatter of only ~0.3 dex over three orders of magnitude in mass. The black hole’s sphere of influence r_h = GM_BH/σ² is of order 10 pc against a bulge of kpc scale. Proposed explanations include self-regulation by AGN feedback (energy or momentum driven), and hierarchical merger averaging, which produces a correlation from the central limit theorem without any causal interaction. Both are viable; neither is established.',
    },
    glossaryTerms: [glossaryTermId('agn'), glossaryTermId('galactic-halo')],
    related: [
      topicId('the-galactic-centre'),
      topicId('galactic-feedback'),
      topicId('elliptical-galaxies'),
    ],
    blocks: [
      {
        id: 'the-correlation',
        kind: 'prose',
        text: {
          essential:
            'In the late 1990s, astronomers measuring black-hole masses in nearby galaxies noticed something unexpected. The mass of the central black hole tracked the velocity dispersion of the surrounding bulge — how fast its stars move — with remarkably little scatter, across black holes differing by a factor of a thousand in mass.',
          detailed:
            'It was a surprise because there is no obvious reason it should be true. The black hole’s gravitational reach extends over perhaps ten parsecs. The bulge is thousands of parsecs across. From the bulge’s point of view, the black hole is a point mass of negligible consequence. Yet the two numbers are locked together tightly enough that you can predict one from the other.',
        },
      },
      {
        id: 'viz-msigma',
        kind: 'visualization',
        visualizationId: visualizationId('black-hole-galaxy-relation'),
      },
      {
        id: 'claim-msigma',
        kind: 'claim',
        statement: {
          essential:
            'Black-hole mass rises roughly as the fourth to fifth power of the bulge velocity dispersion, with scatter small enough that the relation is useful for estimating black-hole masses in galaxies too distant to measure directly.',
          detailed:
            'The relation is tighter with velocity dispersion than with bulge luminosity or mass, which is itself a clue. It appears to hold for classical bulges and ellipticals; galaxies with pseudo-bulges built by internal disk processes rather than mergers follow it more loosely or not at all. That distinction is one of the strongest hints that mergers are part of the story.',
        },
        evidence: 'established',
        references: [referenceId('kormendy-ho-2013')],
      },
      {
        id: 'coevolution-question',
        kind: 'open-question',
        question: 'Does the black hole shape the galaxy, or do both grow together?',
        whyItMatters: {
          essential:
            'If black holes regulate their galaxies, then feedback from them is a central ingredient in galaxy formation, and every model needs to include it. If the correlation instead arises because both grow through the same mergers, then black holes are passengers rather than drivers. The two pictures imply very different physics.',
          detailed:
            'The self-regulation story is appealing: as the black hole grows, the energy released by accretion drives gas away, which starves both the black hole and star formation, stopping growth at a mass set by the depth of the potential well — which naturally produces a relation with velocity dispersion. The merger-averaging story is subtler: repeated mergers of galaxies with uncorrelated black-hole and bulge masses drive the ratio toward a common value by the central limit theorem, requiring no interaction at all.',
        },
        whatWouldSettleIt: {
          essential:
            'Measuring how the relation evolves with cosmic time, and whether black holes or bulges grow first. Both are hard: black-hole masses at high redshift can only be estimated indirectly, and the selection effects are severe, since the easiest black holes to weigh far away are the brightest and therefore the most massive.',
          detailed:
            'Evidence exists on both sides. Energetic outflows driven by active nuclei are observed, establishing that the energy is delivered. But whether that energy quantitatively accounts for the relation, rather than merely being present, has not been demonstrated. Meanwhile some studies find black holes over-massive relative to their hosts in the early Universe, which would favour black holes leading — while others attribute that to selection bias.',
        },
        references: [
          referenceId('kormendy-ho-2013'),
          referenceId('fabian-2012-agn-feedback'),
          referenceId('naab-ostriker-2017-galaxy-formation'),
        ],
      },
      {
        id: 'correlation-caution',
        kind: 'callout',
        tone: 'caution',
        title: 'A correlation is not a mechanism',
        text: {
          essential:
            'It is common to read that supermassive black holes "regulate" or "control" their galaxies. The correlation is real and tight. The causal claim behind that language is an active area of research, not a settled result — and it is worth noticing which of the two is being asserted.',
          detailed:
            'This is a good case study in reading science writing. "Black hole mass correlates with bulge dispersion" is an observation. "AGN feedback sets black hole mass" is a hypothesis. "Simulations including AGN feedback reproduce the relation" is a statement about simulations that were calibrated to reproduce galaxy properties. All three are true statements; only the first is a fact about black holes.',
        },
        references: [referenceId('kormendy-ho-2013')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'bh-bulge-ratio',
            label: 'Typical black-hole to bulge mass ratio',
            value: 0.5,
            unit: 'percent (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Around 0.2 to 0.5 percent for classical bulges and ellipticals. The black hole is dynamically negligible for the galaxy as a whole, which is what makes the correlation surprising.',
            references: [referenceId('kormendy-ho-2013')],
          },
          {
            id: 'sphere-of-influence',
            label: 'Radius within which Sagittarius A* dominates the gravity',
            value: 3,
            unit: 'pc (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Against a Galaxy 30,000 parsecs across. Outside this tiny region, the black hole’s direct gravitational influence is negligible.',
            references: [referenceId('genzel-2010-galactic-centre')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('kormendy-ho-2013'), referenceId('fabian-2012-agn-feedback')],
  },
];
