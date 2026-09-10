/**
 * Stars & Galaxies — galaxies as physical systems.
 *
 * The temptation with galaxies is to make this a taxonomy: here are spirals,
 * here are ellipticals, learn the names. That teaches nothing. So the ordering
 * here is causal rather than descriptive — what a galaxy is, how one is
 * assembled, and only then what the resulting shapes are and why they differ.
 *
 * Two honesty commitments run through the file. Galaxy-formation simulations
 * are models constrained by observations, not recordings of what happened, and
 * that is said plainly rather than left to a caption. And dark matter is used
 * where the dynamics require it, without turning this into the dark-matter
 * section, which comes later in the roadmap.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const STARS = sectionId('stars-galaxies');
const REVIEWED = '2026-09-09';

export const STARS_GALAXY_TOPICS: readonly Topic[] = [
  {
    id: topicId('what-is-a-galaxy'),
    slug: 'what-is-a-galaxy',
    sectionId: STARS,
    order: 18,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What is a galaxy?',
    subtitle: 'A gravitationally bound system in which the stars are the minority component.',
    summary: {
      essential:
        'A galaxy is a huge collection of stars, gas, dust and dark matter, held together by gravity, usually with a supermassive black hole at its centre. Our Galaxy contains a few hundred billion stars — and by mass, those stars are a small fraction of the whole thing.',
      detailed:
        'The surprise in the definition is the accounting. Stars are the visible part, but the dynamics of every galaxy studied — how fast things orbit at large radii — require far more mass than the visible material provides. The stars sit inside a much larger, roughly spherical halo whose mass is inferred from its gravity and whose composition has not been identified.',
      technical:
        'A typical L* galaxy has M_stars ~ 10¹⁰–10¹¹ M☉, M_gas ~ 10⁹–10¹⁰ M☉, and M_halo ~ 10¹² M☉ inferred from rotation curves, satellite kinematics, weak lensing and X-ray hydrostatics. The central black hole is ~0.1% of the bulge mass. The visible disk occupies a small fraction of the virial radius, so the object that gravitationally *is* the galaxy extends far beyond anything that can be photographed.',
    },
    glossaryTerms: [
      glossaryTermId('galactic-halo'),
      glossaryTermId('dark-matter'),
      glossaryTermId('interstellar-medium'),
    ],
    related: [
      topicId('how-galaxies-form'),
      topicId('the-major-types-of-galaxies'),
      topicId('the-milky-way'),
    ],
    blocks: [
      {
        id: 'components',
        kind: 'prose',
        text: {
          essential:
            'Five things make up a galaxy. The stars, which are what you see. The gas between them, which is what new stars are made from. The dust, a small mass fraction that blocks a lot of light. A central supermassive black hole. And a vast halo of dark matter that outweighs everything else combined.',
          detailed:
            'Calling it a "collection of stars" is like calling a forest a collection of leaves — accurate about what is visible and wrong about what the system is. Gravitationally, a galaxy is mostly dark matter with a small amount of luminous material settled at its centre. The stars are tracers of a potential well they did not create.',
        },
      },
      {
        id: 'viz-rotation',
        kind: 'visualization',
        visualizationId: visualizationId('rotation-curve'),
      },
      {
        id: 'claim-rotation',
        kind: 'claim',
        statement: {
          essential:
            'Stars far out in a spiral galaxy orbit about as fast as stars near the middle. If the visible matter were all the mass there is, they should orbit far more slowly — the way outer planets orbit the Sun more slowly than inner ones.',
          detailed:
            'Rubin and Ford established this systematically in the 1970s across many galaxies, building on earlier hints. The discrepancy is not marginal: rotation curves stay flat out to the last measurable point, requiring several times more mass than the light accounts for, distributed far more extensively than the stars. The same conclusion arrives independently from gravitational lensing, from the motions of galaxies within clusters, and from the microwave background — which is why the inference is regarded as secure even though the identity of the matter is not.',
        },
        evidence: 'established',
        references: [
          referenceId('rubin-ford-1970'),
          referenceId('zwicky-1933'),
          referenceId('planck-2018-vi'),
        ],
      },
      {
        id: 'link-dark-matter',
        kind: 'cross-link',
        topicId: topicId('dark-matter'),
        rationale:
          'What the evidence for dark matter is, and what it is not, is treated properly in the Universe & Cosmology section.',
      },
      {
        id: 'scale',
        kind: 'prose',
        text: {
          essential:
            'The emptiness is hard to convey. If the Sun were a grain of sand, the nearest other grain would be about 6 kilometres away. Galaxies are overwhelmingly empty space with occasional stars in it — which is why, when two galaxies collide, essentially no stars hit each other.',
          detailed:
            'The gas is a different matter. Gas clouds are enormous compared with stars and do collide directly, shocking and compressing and triggering bursts of star formation. So a galaxy collision is a violent event for the gas and a purely gravitational rearrangement for the stars — and that difference explains most of what mergers do.',
        },
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'mw-stellar-mass',
            label: 'Stellar mass of the Milky Way',
            value: 5e10,
            unit: 'M☉',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Estimates cluster around 5 × 10¹⁰ solar masses with roughly 20 percent uncertainty, since we measure our own Galaxy from inside it and through obscuring dust.',
            references: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
          },
          {
            id: 'mw-halo-mass',
            label: 'Total mass of the Milky Way including its dark halo',
            value: 1.3e12,
            unit: 'M☉',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Inferred from satellite galaxy motions and halo star kinematics. Estimates span roughly 0.7–2 × 10¹² M☉ depending on tracer and method, so the value is a constrained inference rather than a measurement.',
            references: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
          },
          {
            id: 'star-separation',
            label: 'Distance to the nearest star from the Sun',
            value: 4.2465,
            unit: 'light-years',
            context:
              'Proxima Centauri. Expressed in solar diameters, that is about 29 million — which is why stellar collisions essentially never happen, even in galaxy mergers.',
            references: [referenceId('gaia-2021-edr3-parallax')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
  },

  {
    id: topicId('how-galaxies-form'),
    slug: 'how-galaxies-form',
    sectionId: STARS,
    order: 19,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How galaxies form',
    subtitle: 'Small things first, then merging — and gas doing something stars cannot.',
    summary: {
      essential:
        'Galaxies were built from the bottom up. Tiny density variations in the early Universe grew under gravity into dark-matter halos; gas fell into those halos, cooled, settled into disks, and formed stars. Small galaxies formed first and merged into larger ones, and that process is still going on.',
      detailed:
        'The crucial asymmetry is that gas can cool and dark matter cannot. Dark matter, interacting only gravitationally, stays puffed up in a roughly spherical halo. Gas radiates away its energy, sinks to the centre, and — because it must conserve angular momentum — settles into a rotating disk. That is why galaxies have flat, star-forming disks inside round dark halos.',
      technical:
        'Structure grows hierarchically from the primordial power spectrum measured in the CMB. Halos virialise, shock-heat infalling gas to T_vir, and gas cools where t_cool < t_dynamical — efficient below ~10⁶ K via atomic line cooling and, at low metallicity, molecular hydrogen. Without feedback, this over-produces both dwarf and massive galaxies by large factors; supernova-driven winds regulate the low-mass end and AGN heating the high-mass end. That both are needed, and roughly how much, is inferred by requiring simulations to reproduce the observed stellar mass function.',
    },
    glossaryTerms: [glossaryTermId('galactic-halo'), glossaryTermId('dark-matter')],
    related: [
      topicId('what-is-a-galaxy'),
      topicId('galactic-feedback'),
      topicId('the-first-galaxies'),
    ],
    blocks: [
      {
        id: 'from-lumps',
        kind: 'prose',
        text: {
          essential:
            'Start with the early Universe: almost perfectly smooth, with density variations of about one part in a hundred thousand. Gravity amplifies those. Slightly denser regions pull in more material, become denser still, and eventually stop expanding with the Universe and collapse on themselves. Those collapsed regions are dark-matter halos, and every galaxy sits inside one.',
          detailed:
            'The seeds are not conjecture — they are imaged directly in the cosmic microwave background, and their statistical properties are measured to high precision. What follows from them is calculated. Given the measured initial conditions and the laws of gravity, the growth of dark-matter structure is computable and robust; it is when gas, star formation and feedback enter that the modelling becomes difficult and model-dependent.',
        },
      },
      {
        id: 'link-structure',
        kind: 'cross-link',
        topicId: topicId('large-scale-structure'),
        rationale:
          'The growth of cosmic structure from those initial fluctuations is developed in the Universe & Cosmology section.',
      },
      {
        id: 'viz-formation',
        kind: 'visualization',
        visualizationId: visualizationId('galaxy-assembly'),
      },
      {
        id: 'claim-cooling',
        kind: 'claim',
        statement: {
          essential:
            'Gas can lose energy by radiating it away; dark matter cannot lose energy at all. That single difference is why galaxies have dense, flat, luminous disks sitting inside enormous diffuse spherical halos.',
          detailed:
            'Falling gas shock-heats as it enters the halo, then radiates that heat away through atomic and molecular transitions and sinks toward the centre. Angular momentum stops it reaching the middle: it settles into a rotating disk instead, at whatever radius its spin supports. Dark matter, having no way to shed energy, stays on its original orbits and remains extended. Both components feel the same gravity; only one can dissipate.',
        },
        evidence: 'model',
        references: [referenceId('somerville-dave-2015-galaxy-formation')],
      },
      {
        id: 'simulations-caveat',
        kind: 'callout',
        tone: 'caution',
        title: 'Simulations are models, not footage',
        text: {
          essential:
            'The beautiful movies of galaxies forming are computations, not recordings. They start from measured initial conditions and known gravity, which is solid. But star formation and feedback happen on scales far below what any cosmological simulation can resolve, so those processes are inserted as approximate recipes with tunable parameters.',
          detailed:
            'This matters for how you read a result. When a simulation reproduces the observed distribution of galaxy masses, that is partly a success of the physics and partly a consequence of the recipes having been calibrated to do so. The honest description is that simulations are constrained models which reproduce many independent observations they were not tuned to — which is genuinely impressive — and not a replay of history.',
        },
        references: [
          referenceId('vogelsberger-2014-illustris'),
          referenceId('somerville-dave-2015-galaxy-formation'),
        ],
      },
      {
        id: 'claim-hierarchy',
        kind: 'claim',
        statement: {
          essential:
            'Small galaxies formed first and merged into larger ones. The Milky Way carries the wreckage of past mergers: streams of stars in its halo that still move together, identifiable as the debris of galaxies it swallowed.',
          detailed:
            'Gaia’s measurements of stellar motions revealed a large population of halo stars on distinctive orbits, interpreted as the remains of a dwarf galaxy that merged with the Milky Way roughly 8 to 11 billion years ago — usually called Gaia-Enceladus. The kinematic and chemical evidence for a substantial early merger is strong; the exact mass and timing are still being refined.',
        },
        evidence: 'inference',
        references: [referenceId('helmi-2018-gaia-enceladus')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'first-galaxies-z',
            label: 'Redshift of the earliest spectroscopically confirmed galaxies',
            value: 13.2,
            unit: 'z (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'JWST has spectroscopically confirmed galaxies at z > 13, seen when the Universe was under 350 million years old. Photometric candidates at higher redshift exist but require spectroscopic follow-up before they count.',
            references: [
              referenceId('curtis-lake-2023-jwst'),
              referenceId('robertson-2022-jwst-galaxies'),
            ],
          },
          {
            id: 'baryon-fraction',
            label: 'Cosmic ratio of ordinary matter to total matter',
            value: 0.157,
            unit: 'dimensionless',
            uncertainty: { plusMinus: 0.003 },
            context:
              'From the microwave background. Most galaxies contain a smaller stellar fraction than this, because feedback ejects gas or prevents it from forming stars.',
            references: [referenceId('planck-2018-vi')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('somerville-dave-2015-galaxy-formation'),
      referenceId('naab-ostriker-2017-galaxy-formation'),
    ],
  },

  {
    id: topicId('the-major-types-of-galaxies'),
    slug: 'the-major-types-of-galaxies',
    sectionId: STARS,
    order: 20,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The major types of galaxies',
    subtitle: 'A useful classification that should not be mistaken for a set of boxes.',
    summary: {
      essential:
        'Galaxies come in a few broad shapes: spirals with flat rotating disks and arms, ellipticals that are smooth and roughly egg-shaped, lenticulars that have a disk but no arms, and irregulars with no clear structure. The categories are useful shorthand — but real galaxies form a continuum, and many sit between types.',
      detailed:
        'What the shapes correlate with is more interesting than the shapes themselves. Spirals tend to have cold gas and ongoing star formation, so they contain young blue stars. Ellipticals tend to have little cold gas and old red stars, and their internal motions are random rather than organised rotation. Morphology is a symptom of formation history, not a cause of anything.',
      technical:
        'Hubble’s tuning fork orders galaxies by bulge-to-disk ratio and arm winding; van den Bergh added a luminosity-class dimension. Modern practice favours continuous parameters — Sérsic index, colour, specific star-formation rate, kinematic support V/σ — over discrete classes. The colour–magnitude diagram of galaxies shows a "blue cloud", a "red sequence" and a sparsely populated "green valley" between them, which is a statement about transition timescales rather than about morphology.',
    },
    glossaryTerms: [glossaryTermId('agn'), glossaryTermId('interstellar-medium')],
    related: [
      topicId('spiral-galaxies'),
      topicId('elliptical-galaxies'),
      topicId('galaxy-mergers'),
    ],
    blocks: [
      {
        id: 'the-shapes',
        kind: 'prose',
        text: {
          essential:
            'Hubble sorted galaxies by appearance in 1926 and the scheme stuck: ellipticals on one side, spirals on the other, with lenticulars in between and irregulars off to the side. It was drawn as a tuning fork, and generations of textbooks presented it as an evolutionary sequence — which it is not.',
          detailed:
            'Hubble labelled ellipticals "early type" and spirals "late type", terminology that survives and misleads to this day. He did not mean galaxies evolve along it, but the words invite that reading, and the actual evolutionary tendency runs the other way if anything: mergers turn disks into spheroids, not the reverse. It is worth knowing the vocabulary is a historical artefact.',
        },
      },
      {
        id: 'viz-types',
        kind: 'visualization',
        visualizationId: visualizationId('galaxy-types'),
      },
      {
        id: 'claim-continuum',
        kind: 'claim',
        statement: {
          essential:
            'Large classification surveys show galaxy morphology is continuous, not discrete. Many galaxies are genuinely intermediate, classifiers disagree on a substantial fraction, and where you draw a boundary is a choice.',
          detailed:
            'Galaxy Zoo asked hundreds of thousands of volunteers to classify Sloan survey images, producing not a label per galaxy but a distribution of opinions per galaxy — and that distribution is itself informative. The lesson generalises: morphology is a useful compression of a continuous, multidimensional reality, and treating the classes as natural kinds leads to bad questions.',
        },
        evidence: 'established',
        references: [
          referenceId('lintott-2008-galaxy-zoo'),
          referenceId('vandenbergh-1999-galaxy-morphology'),
        ],
      },
      {
        id: 'colour-bimodality',
        kind: 'claim',
        statement: {
          essential:
            'What is genuinely bimodal is colour, not shape. Galaxies cluster into a blue, star-forming population and a red, quiescent one, with relatively few in between — which means the transition between them is fast.',
          detailed:
            'The sparse middle ground is the informative part. If galaxies drifted slowly from star-forming to quiescent, the intermediate region would be well populated. It is not, so whatever shuts star formation down must act on a timescale short compared with the age of the Universe. Identifying that mechanism is the quenching problem, and it is unresolved.',
        },
        evidence: 'inference',
        references: [
          referenceId('lintott-2008-galaxy-zoo'),
          referenceId('naab-ostriker-2017-galaxy-formation'),
        ],
      },
      {
        id: 'link-mergers',
        kind: 'cross-link',
        topicId: topicId('galaxy-mergers'),
        rationale:
          'One of the main things that moves a galaxy from one part of this picture to another.',
      },
    ],
    furtherReading: [referenceId('lintott-2008-galaxy-zoo')],
  },

  {
    id: topicId('spiral-galaxies'),
    slug: 'spiral-galaxies',
    sectionId: STARS,
    order: 21,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Spiral galaxies',
    subtitle: 'The arms are a traffic jam, not a structure.',
    summary: {
      essential:
        'A spiral galaxy is a flat rotating disk of stars and gas, usually with a central bulge, marked by bright arms. The arms are not solid objects that rotate with the galaxy. They are regions where material piles up temporarily — and stars pass through them and come out the other side.',
      detailed:
        'This has to be so, because the disk rotates differentially: inner material completes an orbit far faster than outer material. Any fixed arm made of the same stars would wind up into a tight coil within a few rotations and disappear. Since spiral arms exist in galaxies that have rotated dozens of times, they cannot be material structures.',
      technical:
        'Density-wave theory treats arms as a quasi-stationary spiral pattern rotating at a fixed pattern speed Ω_p, distinct from the material angular speed Ω(R); the two coincide only at corotation. Gas entering the potential minimum shocks, compresses and forms stars, which is why arms are traced by H II regions and blue stars. Whether real arms are long-lived standing waves or transient, recurrent features driven by local instabilities remains debated, and simulations produce both behaviours depending on conditions.',
    },
    glossaryTerms: [glossaryTermId('interstellar-medium'), glossaryTermId('molecular-cloud')],
    related: [
      topicId('the-milky-way'),
      topicId('star-formation-inside-galaxies'),
      topicId('the-major-types-of-galaxies'),
    ],
    blocks: [
      {
        id: 'winding-problem',
        kind: 'prose',
        text: {
          essential:
            'Here is the problem that reveals what arms actually are. A spiral galaxy does not rotate like a rigid disk — the inner regions go round much faster than the outer ones. If the arms were fixed collections of stars, the inner part of each arm would lap the outer part repeatedly, and after a few hundred million years the arms would be wound into an unrecognisable coil. Spiral galaxies are billions of years old and still have open, distinct arms.',
          detailed:
            'The resolution is that an arm is a wave passing through the material, not a piece of the material. The standard analogy is a traffic jam on a motorway: the jam persists for hours and may even drift slowly backward, while individual cars enter it, slow down, and leave. Nobody is stuck in the jam permanently, and the jam is real.',
        },
      },
      {
        id: 'viz-spiral',
        kind: 'visualization',
        visualizationId: visualizationId('spiral-structure'),
      },
      {
        id: 'claim-density-wave',
        kind: 'claim',
        statement: {
          essential:
            'Gas entering a spiral arm is compressed, which triggers star formation. That is why arms look bright: they are lined with young, hot, blue stars and glowing gas clouds, which are short-lived and therefore mark where the wave is now.',
          detailed:
            'The observational signature is a systematic offset. Molecular gas piles up on the leading edge of the arm; newly formed stars appear slightly downstream; and the oldest stars show no arm structure at all. That ordering is what a wave passing through material produces, and it is not what a material structure would produce. The general picture is well supported, though whether the pattern is long-lived or continually regenerated is still argued.',
        },
        evidence: 'inference',
        references: [
          referenceId('lin-shu-1964-density-wave'),
          referenceId('kennicutt-evans-2012-star-formation'),
        ],
      },
      {
        id: 'components',
        kind: 'prose',
        text: {
          essential:
            'A spiral has three visible parts and one invisible one. The disk: thin, rotating, full of gas and young stars. The bulge: a rounder central concentration of mostly older stars. The halo: sparse old stars and globular clusters scattered spherically. And around it all, the dark-matter halo, far larger than any of them.',
          detailed:
            'Many spirals, including the Milky Way, also have a bar — a straight structure through the centre from which the arms spring. Bars form spontaneously in simulations of rotating disks and are efficient at moving gas inward, which links them to central star formation and to feeding the central black hole. Roughly two thirds of nearby spirals show a bar of some strength.',
        },
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'disk-thickness',
            label: 'Thickness of the Milky Way’s thin disk',
            value: 300,
            unit: 'pc (scale height)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Against a disk radius of over 10,000 parsecs — a ratio of about 1 to 60, proportionally flatter than a compact disc.',
            references: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
          },
          {
            id: 'rotation-period',
            label: 'Time for the Sun to orbit the Galaxy once',
            value: 220,
            unit: 'million years',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'From the Sun’s galactocentric radius and circular speed. The Sun has completed roughly 20 orbits since it formed.',
            references: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('lin-shu-1964-density-wave')],
  },

  {
    id: topicId('elliptical-galaxies'),
    slug: 'elliptical-galaxies',
    sectionId: STARS,
    order: 22,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Elliptical galaxies',
    subtitle: 'Old, red, and held up by disorder rather than rotation.',
    summary: {
      essential:
        'An elliptical galaxy is a smooth, featureless swarm of mostly old stars. It has little cold gas, so it forms few new stars, so nothing young and blue is left — which is why it looks red. Its stars orbit in randomly oriented directions rather than circling together in a disk.',
      detailed:
        'That kinematic difference is the physically important one. In a spiral, most of the stellar motion is organised rotation. In an elliptical, it is random — the galaxy is held up against gravity by the spread of stellar velocities, much as a gas is held up by the random motion of its molecules. Galaxies are classified by shape, but they differ by how their stars move.',
      technical:
        'Ellipticals are pressure-supported systems with V/σ ≲ 1, following the fundamental plane relating effective radius, surface brightness and velocity dispersion — a projection of the virial theorem plus a weakly varying mass-to-light ratio. Most massive ellipticals show old (>10 Gyr) stellar populations with enhanced α/Fe, indicating rapid early formation that ended before thermonuclear supernovae could contribute much iron.',
    },
    glossaryTerms: [glossaryTermId('metallicity'), glossaryTermId('agn')],
    related: [
      topicId('galaxy-mergers'),
      topicId('galactic-feedback'),
      topicId('the-major-types-of-galaxies'),
    ],
    blocks: [
      {
        id: 'random-motion',
        kind: 'prose',
        text: {
          essential:
            'Picture a spiral galaxy as a spinning plate: everything circles the same way in the same plane. Now picture an elliptical as a swarm of bees: every star on its own orbit, tilted every which way, with no shared direction. Both are held up against gravity — one by organised rotation, the other by disordered motion.',
          detailed:
            'You can measure the difference spectroscopically. Rotation makes one side of a galaxy blueshifted and the other redshifted, a systematic pattern across the image. Random motion instead broadens every spectral line, because you see stars moving toward and away from you at the same point. The width of the lines gives the velocity dispersion, and that number is one of the most useful measurements in extragalactic astronomy.',
        },
      },
      {
        id: 'claim-alpha',
        kind: 'claim',
        statement: {
          essential:
            'The stars in massive ellipticals are old and have an unusual chemical signature: enhanced in oxygen and magnesium relative to iron. That combination says their stars formed quickly, in less than about a billion years, and then stopped.',
          detailed:
            'The reasoning is a clock. Core-collapse supernovae from massive stars deliver oxygen and magnesium within a few million years of a burst of star formation. Thermonuclear supernovae deliver iron, but only after hundreds of millions of years, because a white dwarf must first form and then be pushed over the edge. A population rich in oxygen relative to iron therefore finished forming before the iron arrived — the chemistry itself dates the star formation.',
        },
        evidence: 'inference',
        references: [
          referenceId('kobayashi-2020-origin-of-elements'),
          referenceId('naab-ostriker-2017-galaxy-formation'),
        ],
      },
      {
        id: 'formation',
        kind: 'prose',
        text: {
          essential:
            'How does a galaxy end up like this? The leading picture has two stages: an early, intense burst of star formation that builds a compact core, followed by billions of years of growth by swallowing smaller galaxies — which adds stars to the outskirts and puffs the galaxy up without forming anything new.',
          detailed:
            'The evidence comes from comparing distant, early ellipticals with nearby ones. The early ones are strikingly compact for their mass. The nearby ones of the same mass are several times larger with similar dense centres — consistent with growth by accretion onto the outside. This "two-phase" account is well motivated and widely used, and the relative contribution of the two phases remains uncertain.',
        },
      },
      {
        id: 'not-old-spirals',
        kind: 'callout',
        tone: 'misconception',
        title: '“Ellipticals are what spirals turn into when they get old”',
        text: {
          essential:
            'Age alone does not do it. A spiral left undisturbed simply keeps forming stars more slowly as its gas runs down; it does not lose its disk. Turning a rotating disk into a disordered spheroid requires something violent — typically a major merger, which scrambles the organised motion into random motion.',
          detailed:
            'The reverse can also happen: a spheroid that later accretes a supply of cold gas can regrow a disk around itself. Morphology is not a one-way ratchet, and it is not a proxy for age. It is a record of the dynamical history — how much a galaxy has been disturbed, and how much cold gas it has had since.',
        },
        references: [referenceId('naab-ostriker-2017-galaxy-formation')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'm87-mass',
            label: 'Stellar mass of M87',
            value: 6e11,
            unit: 'M☉',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'A giant elliptical at the centre of the Virgo cluster, with over ten times the Milky Way’s stellar mass and around 12,000 globular clusters against our Galaxy’s 150 or so.',
            references: [referenceId('kormendy-ho-2013')],
          },
          {
            id: 'velocity-dispersion',
            label: 'Typical stellar velocity dispersion in a giant elliptical',
            value: 300,
            unit: 'km/s',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'The spread of random stellar velocities. It correlates tightly with the mass of the central black hole — the M–σ relation.',
            references: [referenceId('kormendy-ho-2013')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('naab-ostriker-2017-galaxy-formation')],
  },

  {
    id: topicId('galaxy-mergers'),
    slug: 'galaxy-mergers',
    sectionId: STARS,
    order: 23,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Galaxy mergers',
    subtitle: 'Two galaxies can pass through each other without a single star colliding.',
    summary: {
      essential:
        'When galaxies collide, the stars miss each other. Space between stars is so vast that the chance of any two hitting is essentially zero. What happens instead is gravitational: each galaxy’s pull distorts the other, flinging out long tails of stars and eventually merging the two into one.',
      detailed:
        'The gas behaves completely differently. Gas clouds are enormous compared with stars and do collide, shocking and compressing, which often triggers an intense burst of star formation. So the same event is a purely gravitational rearrangement for the stars and a violent, dissipative collision for the gas.',
      technical:
        'Mergers proceed by dynamical friction: the massive perturber wakes the background distribution, which drags on it, causing orbital decay on a timescale ∝ M⁻¹. Tidal forces produce the bridges and tails first modelled by Toomre & Toomre with restricted three-body integrations. Major mergers (mass ratio ≳ 1:4) destroy disks and produce spheroids; minor mergers thicken disks and grow outer envelopes without destroying the rotational support.',
    },
    glossaryTerms: [glossaryTermId('tidal-force'), glossaryTermId('agn')],
    related: [
      topicId('elliptical-galaxies'),
      topicId('star-formation-inside-galaxies'),
      topicId('how-galaxies-form'),
    ],
    blocks: [
      {
        id: 'why-no-collisions',
        kind: 'prose',
        text: {
          essential:
            'Run the numbers once and the result is unforgettable. Scale the Sun down to a grain of sand; the nearest other grain is 6 kilometres away. Now imagine two swarms of such grains, each spread across a continent, passing through one another. How many grains touch? Essentially none. That is a galaxy merger from the stars’ point of view.',
          detailed:
            'The stars do not escape unaffected, though — they just are not affected by contact. Each star feels the changing gravitational field of billions of others, and that changes its orbit completely. A star that was on a tidy circular orbit in a disk can be flung onto a wildly elongated one, or thrown out into a tail hundreds of thousands of light-years long. The galaxy is transformed; not one star is hit.',
        },
      },
      {
        id: 'viz-merger',
        kind: 'visualization',
        visualizationId: visualizationId('galaxy-merger'),
      },
      {
        id: 'claim-toomre',
        kind: 'claim',
        statement: {
          essential:
            'The long tails and bridges seen in interacting galaxies are tidal features — produced purely by gravity as each galaxy stretches the other. This was demonstrated in 1972 with a computation simple enough to run on the computers of the day.',
          detailed:
            'The Toomres treated the stars as massless test particles orbiting two point masses, ignoring the self-gravity of the disks entirely. That drastic simplification still reproduced the observed shapes of famous interacting pairs, including the Antennae and the Mice. It settled the question of what the tails are, and it is a fine example of a model being valuable precisely because it left almost everything out.',
        },
        evidence: 'established',
        references: [referenceId('toomre-1972-mergers')],
      },
      {
        id: 'gas-does-collide',
        kind: 'callout',
        tone: 'note',
        title: 'The gas is another matter entirely',
        text: {
          essential:
            'Gas clouds are hundreds of light-years across, not a million kilometres. In a merger they slam into each other directly, shock, and compress — which can raise a galaxy’s star-formation rate by a factor of a hundred. The brightest infrared galaxies in the nearby Universe are almost all mergers in progress.',
          detailed:
            'The compressed gas also loses angular momentum and funnels toward the centre, where it can both build a central concentration of stars and feed the supermassive black hole. This is one of the main proposed links between mergers, starbursts and active galactic nuclei — a connection that is well motivated and observationally supported in the most extreme systems, while the merger fraction among ordinary active galaxies is still debated.',
        },
        references: [
          referenceId('kennicutt-evans-2012-star-formation'),
          referenceId('fabian-2012-agn-feedback'),
        ],
      },
      {
        id: 'andromeda',
        kind: 'claim',
        statement: {
          essential:
            'The Milky Way and Andromeda are approaching each other and are expected to interact in roughly 4 to 5 billion years. The Sun is very unlikely to collide with anything, though the Solar System’s orbit within the merged galaxy could change substantially.',
          detailed:
            'Andromeda’s radial approach — about 110 km/s toward us — has been known for a century from its blueshift. What was missing until recently was its sideways motion, which determines whether the encounter is head-on or a glancing pass. Measurements have narrowed this considerably and favour a close interaction and eventual merger, but the transverse velocity remains the dominant uncertainty and some analyses allow a wider first passage.',
        },
        evidence: 'inference',
        references: [referenceId('gaia-2021-edr3-parallax'), referenceId('toomre-1972-mergers')],
      },
    ],
    furtherReading: [referenceId('toomre-1972-mergers')],
  },

  {
    id: topicId('star-formation-inside-galaxies'),
    slug: 'star-formation-inside-galaxies',
    sectionId: STARS,
    order: 24,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Star formation inside galaxies',
    subtitle: 'Why some galaxies are still building stars and others stopped long ago.',
    summary: {
      essential:
        'A galaxy forms stars only if it has cold, dense gas. Galaxies rich in such gas — spirals, irregulars — keep making stars. Galaxies that have used it up, lost it, or had it heated — most ellipticals — have essentially stopped. The whole question is about the supply and state of the gas.',
      detailed:
        'Star formation across galaxies follows a fairly tight relation: the more dense gas per unit area, the more stars formed per unit area, with a steeper-than-linear slope. The relation holds across four orders of magnitude, from quiet spiral disks to extreme starbursts. What differs between galaxies is not mainly the efficiency but how much suitable gas they have.',
      technical:
        'The Kennicutt–Schmidt relation, Σ_SFR ∝ Σ_gas^N with N ≈ 1.4 for total gas, tightens to near-linear when only molecular gas is counted — suggesting star formation tracks H₂ rather than gas in general. Cosmic star formation peaked around z ≈ 2 and has declined by roughly an order of magnitude since, driven by the falling supply of accreting cold gas rather than by a change in efficiency.',
    },
    glossaryTerms: [
      glossaryTermId('molecular-cloud'),
      glossaryTermId('interstellar-medium'),
      glossaryTermId('initial-mass-function'),
    ],
    related: [
      topicId('galactic-feedback'),
      topicId('spiral-galaxies'),
      topicId('how-stars-are-born'),
    ],
    blocks: [
      {
        id: 'gas-supply',
        kind: 'prose',
        text: {
          essential:
            'Star formation needs gas that is cold and dense enough for gravity to beat pressure. Hot gas will not do; diffuse gas will not do. So a galaxy’s star-formation rate is essentially a question about how much molecular gas it has, and whether anything is keeping that gas cold.',
          detailed:
            'The Milky Way makes about one to two Suns’ worth of stars a year, and it holds enough gas to keep that up for several billion years — though it also keeps accreting fresh gas from its surroundings. A starburst galaxy can make hundreds of solar masses a year, which would exhaust its supply in a few tens of millions of years. That is why starbursts are brief episodes rather than states.',
        },
      },
      {
        id: 'viz-sf',
        kind: 'visualization',
        visualizationId: visualizationId('star-formation-regions'),
      },
      {
        id: 'claim-ks',
        kind: 'claim',
        statement: {
          essential:
            'Across an enormous range of galaxies, the rate of star formation per unit area rises steeply with the surface density of gas. Give a galaxy more dense gas and it makes proportionately more stars, and the relation holds from quiet disks to extreme starbursts.',
          detailed:
            'The relation is tightest when only molecular gas is counted, which points to the physical picture: stars form in molecular clouds, so the amount of molecular gas is what matters, and atomic gas is a reservoir rather than a fuel. Star formation is also strikingly inefficient — only a few percent of a cloud’s mass becomes stars before feedback disrupts it, which is a fact any theory has to explain.',
        },
        evidence: 'established',
        references: [referenceId('kennicutt-evans-2012-star-formation')],
      },
      {
        id: 'cosmic-history',
        kind: 'claim',
        statement: {
          essential:
            'The Universe formed stars far faster in the past. The peak was around 10 billion years ago, and the rate today is roughly a tenth of what it was then. We live in a quiet, late era of star formation.',
          detailed:
            'This "cosmic noon" is measured by combining ultraviolet and infrared surveys across a large range of redshifts, and the shape of the curve is robust. The decline is driven mainly by the shrinking supply of cold gas accreting onto galaxies as the Universe expands and structure matures, with feedback contributing. Over half the stars that exist today formed before the Universe was half its present age.',
        },
        evidence: 'established',
        references: [referenceId('madau-dickinson-2014-cosmic-sfh')],
      },
      {
        id: 'quenching-question',
        kind: 'open-question',
        question: 'What actually stops a galaxy forming stars?',
        whyItMatters: {
          essential:
            'Many massive galaxies have stopped almost entirely, and the transition appears to happen quickly. Something removes, heats, or prevents the accretion of cold gas — but which mechanism dominates, and under what circumstances, is not settled.',
          detailed:
            'Several candidates are all plausible and probably all operate somewhere. Energy from the central black hole heating or expelling gas. Halos above a critical mass shock-heating infalling gas so it never cools. Stripping of gas as a galaxy falls into a cluster. Or morphological stabilisation, where a dense bulge suppresses the fragmentation of the disk. Distinguishing them observationally is difficult because they leave similar imprints.',
        },
        whatWouldSettleIt: {
          essential:
            'Resolved measurements of gas content, outflows and star formation in large samples of galaxies caught in the act of shutting down, across a range of masses and environments. Surveys are now producing these, and the picture is that no single mechanism explains everything.',
          detailed:
            'Simulations can reproduce the observed quiescent fraction, but only with feedback prescriptions calibrated to do so — which means agreement is not by itself evidence that the implemented mechanism is the right one. Direct detection of the energy and mass fluxes in outflows, matched against what would be required, is the more decisive test.',
        },
        references: [
          referenceId('naab-ostriker-2017-galaxy-formation'),
          referenceId('fabian-2012-agn-feedback'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'peak-sfr',
            label: 'Redshift of peak cosmic star formation',
            value: 1.9,
            unit: 'z',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About 10 billion years ago. The cosmic star-formation rate density then was roughly ten times today’s.',
            references: [referenceId('madau-dickinson-2014-cosmic-sfh')],
          },
          {
            id: 'sf-efficiency',
            label: 'Fraction of a molecular cloud converted into stars',
            value: 3,
            unit: 'percent (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Estimates range from about 1 to 10 percent per cloud. Feedback from the first massive stars disperses the cloud before most of it can collapse.',
            references: [referenceId('kennicutt-evans-2012-star-formation')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('kennicutt-evans-2012-star-formation'),
      referenceId('madau-dickinson-2014-cosmic-sfh'),
    ],
  },

  {
    id: topicId('galactic-feedback'),
    slug: 'galactic-feedback',
    sectionId: STARS,
    order: 25,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Galactic feedback',
    subtitle: 'Galaxies limit themselves, and without that nothing would look right.',
    summary: {
      essential:
        'Stars and black holes push back on the gas around them. Supernovae blow bubbles, stellar winds and radiation heat and disperse clouds, and an actively feeding black hole can drive gas out of a whole galaxy. This "feedback" slows or stops further star formation — and every model that leaves it out produces galaxies quite unlike the real ones.',
      detailed:
        'The evidence that feedback matters is largely indirect but overwhelming. Count up the gas available in dark-matter halos and compute how many stars should have formed, and the answer is far too many, at both the small and large ends of the galaxy mass range. Something removes or heats most of the gas. Supernova-driven winds are the leading candidate in small galaxies, black-hole activity in large ones.',
      technical:
        'The stellar-mass-to-halo-mass ratio peaks near M_halo ≈ 10¹² M☉ at only ~20% of the cosmic baryon fraction, and falls steeply on both sides. Supernova feedback dominates where the halo escape velocity is low; AGN feedback is invoked above the peak, in radiative ("quasar") mode driving outflows and kinetic ("radio") mode offsetting cooling in hot halos. Coupling efficiencies are not derived from first principles in cosmological simulations — they are calibrated.',
    },
    glossaryTerms: [glossaryTermId('agn'), glossaryTermId('interstellar-medium')],
    related: [
      topicId('star-formation-inside-galaxies'),
      topicId('supermassive-black-holes-and-galaxy-evolution'),
      topicId('supernovae'),
    ],
    blocks: [
      {
        id: 'the-problem',
        kind: 'prose',
        text: {
          essential:
            'Here is a calculation that goes wrong in an instructive way. Take a dark-matter halo, add the gas that cosmology says should be in it, let the gas cool and form stars, and count. You get far more stars than the galaxy actually contains — off by a factor of five in a Milky Way-sized halo and far more in small ones. The galaxies we see are much less efficient than gravity alone would make them.',
          detailed:
            'The discrepancy is not a rounding error and it is worst at both extremes. Small galaxies have made a tiny fraction of the stars their gas allows; giant galaxies have too, for what appear to be different reasons. The middle — around the Milky Way’s mass — is where star formation has been most efficient, and even there it converted only about a fifth of the available gas.',
        },
      },
      {
        id: 'viz-feedback',
        kind: 'visualization',
        visualizationId: visualizationId('galactic-feedback'),
      },
      {
        id: 'claim-sn-feedback',
        kind: 'claim',
        statement: {
          essential:
            'Massive stars disrupt their birth clouds before most of the gas can turn into stars — first with radiation and winds, then with supernovae. In small galaxies these winds can drive gas out of the galaxy entirely.',
          detailed:
            'Whether gas escapes depends on the escape velocity, which is why small galaxies are affected far more. A dwarf galaxy has a shallow potential well, so a handful of supernovae can expel a large fraction of its gas; the same energy in a massive galaxy stirs the gas without removing it. This mass dependence is exactly what is needed to explain why small galaxies are so inefficient at making stars.',
        },
        evidence: 'inference',
        references: [
          referenceId('somerville-dave-2015-galaxy-formation'),
          referenceId('kennicutt-evans-2012-star-formation'),
        ],
      },
      {
        id: 'claim-agn',
        kind: 'claim',
        statement: {
          essential:
            'Actively feeding supermassive black holes inject enormous energy into their surroundings. In clusters of galaxies, X-ray images show cavities carved into the hot gas by jets — direct evidence that the energy is being delivered.',
          detailed:
            'The cluster case is the cleanest, because the energy required to inflate the cavities can be estimated from the pressure and volume, and it matches the energy needed to stop the surrounding gas cooling. That is a genuine energy-budget check rather than an assumption. Whether the same mechanism regulates star formation inside individual galaxies is more strongly inferred than directly demonstrated — outflows are observed, but connecting them quantitatively to quenching remains difficult.',
        },
        evidence: 'inference',
        references: [referenceId('fabian-2012-agn-feedback')],
      },
      {
        id: 'calibration-caveat',
        kind: 'callout',
        tone: 'caution',
        title: 'Feedback in simulations is fitted, not derived',
        text: {
          essential:
            'Simulations cannot resolve a supernova remnant or a black-hole accretion disk inside a cosmological volume — the scales differ by many orders of magnitude. So feedback is put in as a recipe with adjustable parameters, tuned until the simulated galaxy population matches the observed one.',
          detailed:
            'This is a legitimate and necessary technique, and it has predictive value: a model calibrated on one set of observations often reproduces others it was not tuned to. But it means "simulations show feedback regulates star formation" is a weaker statement than it sounds. The simulations show that *something* with roughly these energetics is required, which is real information, and they do not establish the microphysics.',
        },
        references: [
          referenceId('vogelsberger-2014-illustris'),
          referenceId('naab-ostriker-2017-galaxy-formation'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'star-formation-efficiency-halo',
            label: 'Peak fraction of a halo’s gas converted into stars',
            value: 20,
            unit: 'percent (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'At the most efficient halo mass, around 10¹² solar masses. Below and above that, the fraction falls by one to two orders of magnitude.',
            references: [referenceId('somerville-dave-2015-galaxy-formation')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('fabian-2012-agn-feedback'),
      referenceId('somerville-dave-2015-galaxy-formation'),
    ],
  },
];
