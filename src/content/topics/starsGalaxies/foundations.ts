/**
 * Stars & Galaxies — foundations: what a star is, and how one starts.
 *
 * The order here is the argument. A reader who is told "stars fuse hydrogen"
 * first has learned a fact and no physics. So the section opens with the
 * balance — gravity pulling in, pressure pushing out — because every later
 * topic is a variation on what happens when that balance shifts. Fusion arrives
 * only once the reader already wants to know what keeps the pressure up.
 *
 * The other deliberate move is putting gravitational heating before fusion.
 * Students routinely believe a protostar is heated by fusion, which cannot be
 * true, because fusion is what the heating is trying to reach. Getting that
 * causal order right early prevents a lot of later confusion.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const STARS = sectionId('stars-galaxies');
const REVIEWED = '2026-09-09';

export const STARS_FOUNDATION_TOPICS: readonly Topic[] = [
  {
    id: topicId('what-is-a-star'),
    slug: 'what-is-a-star',
    sectionId: STARS,
    order: 1,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What is a star?',
    subtitle: 'A ball of gas that is falling inward and never arrives.',
    summary: {
      essential:
        'A star is an enormous ball of hot gas held together by its own gravity, hot enough at the centre to fuse hydrogen into helium. That fusion keeps the inside hot, the heat keeps the pressure up, and the pressure is what stops gravity from crushing it. A star is not a burning object — it is a balance.',
      detailed:
        'Two numbers describe a star from the outside: how much energy it radiates every second (its luminosity) and how hot its visible layers are (its effective temperature). Those two, plus its mass, fix nearly everything else about it. Inside, the star is plasma — atoms so hot that electrons have been stripped away — and every layer is being squeezed by the weight of everything above it.',
      technical:
        'A star is a self-gravitating sphere of plasma in hydrostatic equilibrium, dP/dr = −Gm(r)ρ(r)/r², with an energy source from thermonuclear fusion and energy transported outward by radiation and convection. Its luminosity follows from the Stefan–Boltzmann law, L = 4πR²σT_eff⁴. For a given composition, the mass essentially determines the structure — a statement close enough to true that it has its own name, the Vogt–Russell conjecture.',
    },
    glossaryTerms: [
      glossaryTermId('luminosity'),
      glossaryTermId('effective-temperature'),
      glossaryTermId('hydrostatic-equilibrium'),
    ],
    related: [
      topicId('why-gravity-makes-stars-hot'),
      topicId('when-a-star-switches-on'),
      topicId('the-main-sequence'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Start with the thing a star is actually doing. It is being pulled inward by its own gravity, everywhere, all the time. Nothing holds it up the way a table holds up a cup — there is no solid structure anywhere inside it. What stops it collapsing is that its interior is extremely hot, and hot gas pushes outward. A star exists because those two effects nearly cancel.',
          detailed:
            '"Nearly" is doing real work in that sentence. If the outward push exceeded the inward pull, the star would expand, which would cool it, which would reduce the push — and it would settle back. If gravity won, the star would contract, which would heat it, which would raise the push — and again it would settle back. The balance is self-correcting, which is why stars are stable for billions of years rather than oscillating wildly or exploding.',
        },
      },
      {
        id: 'viz-equilibrium',
        kind: 'visualization',
        visualizationId: visualizationId('hydrostatic-equilibrium'),
      },
      {
        id: 'not-burning',
        kind: 'callout',
        tone: 'misconception',
        title: '“The Sun is burning”',
        text: {
          essential:
            'Burning means chemistry: molecules rearranging, electrons swapping partners. If the Sun were burning in that sense — even if it were made of pure, ideal fuel and pure oxygen — it would run out in a few thousand years. It has been shining for 4.6 billion. Whatever powers it releases roughly a million times more energy per kilogram than any chemical reaction can.',
          detailed:
            'This was a genuine crisis in nineteenth-century physics. Kelvin and Helmholtz calculated that gravitational contraction could power the Sun for perhaps 20 to 40 million years — impressive, but already contradicted by geologists who could read far longer histories in rock. The gap was only closed when nuclear physics supplied a source of the right size, which is why the answer had to wait for the 1920s and 30s.',
        },
        references: [referenceId('bethe-1939-energy-production')],
      },
      {
        id: 'claim-plasma',
        kind: 'claim',
        statement: {
          essential:
            'The material inside a star is plasma: so hot that electrons have been torn away from nuclei and the gas is a soup of charged particles. This is not an exotic state — it is what most of the ordinary matter in the Universe is doing right now.',
          detailed:
            'That the electrons are free matters physically, not just descriptively. Free electrons scatter light very effectively, which makes the interior opaque and forces energy to leak outward slowly rather than stream out. It is also why a star has no surface: the "surface" we see is simply the depth at which the gas becomes transparent enough for photons to escape, which for the Sun is a layer a few hundred kilometres thick called the photosphere.',
          technical:
            'The opacity κ of stellar material — dominated by electron scattering in hot interiors and by bound–free and free–free absorption in cooler layers — sets the radiative temperature gradient dT/dr = −3κρL(r)/(16πacr²T³). When that gradient would exceed the adiabatic one, the layer becomes convectively unstable instead. Which mechanism operates where is a function of mass: the Sun is radiative inside and convective outside, and stars above roughly 1.3 solar masses have the arrangement reversed.',
        },
        evidence: 'established',
        references: [
          referenceId('eddington-1926-internal-constitution'),
          referenceId('christensen-dalsgaard-2002-helioseismology'),
        ],
      },
      {
        id: 'viz-structure',
        kind: 'visualization',
        visualizationId: visualizationId('stellar-structure'),
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'solar-luminosity',
            label: 'Luminosity of the Sun',
            value: 3.828e26,
            unit: 'W',
            context:
              'The IAU nominal value, adopted as the reference unit L☉. Every second the Sun converts about 4 million tonnes of mass into energy to sustain this.',
            references: [referenceId('iau-2015-nominal-constants')],
          },
          {
            id: 'solar-teff',
            label: 'Effective temperature of the Sun',
            value: 5772,
            unit: 'K',
            context:
              'The temperature of a blackbody radiating the same power per unit area. The core is far hotter — about 15.7 million kelvin — and the outer atmosphere hotter still, for reasons that are still not fully explained.',
            references: [referenceId('iau-2015-nominal-constants')],
          },
          {
            id: 'solar-core-density',
            label: 'Density at the centre of the Sun',
            value: 150000,
            unit: 'kg/m³',
            context:
              'About 150 times the density of water, and roughly 8 times that of solid gold — yet still a gas, because at 15.7 million kelvin nothing can be anything else.',
            references: [referenceId('bahcall-2005-solar-neutrinos')],
          },
        ],
      },
      {
        id: 'definition-hydrostatic',
        kind: 'definition',
        termId: glossaryTermId('hydrostatic-equilibrium'),
      },
      {
        id: 'the-boundary',
        kind: 'prose',
        text: {
          essential:
            'Not everything round and made of gas is a star. The dividing line is whether the object can ever get hot enough at its centre to fuse ordinary hydrogen. Below about 8 percent of the Sun’s mass, gravitational squeezing runs out of room before the temperature gets there, and the object becomes a brown dwarf: warm, glowing faintly, slowly fading, but never a star.',
          detailed:
            'The reason there is a sharp floor rather than a gentle fade is degeneracy. As a low-mass object contracts, its electrons begin to resist compression for quantum-mechanical reasons rather than thermal ones. That resistance halts the contraction — and therefore halts the heating — before the core reaches the roughly 4 million kelvin needed for the proton–proton chain to run in a sustained way. Around 0.075 solar masses for solar composition, the two effects cross, and that crossing is the boundary between a star and something that will never be one.',
        },
      },
      {
        id: 'claim-hb-limit',
        kind: 'claim',
        statement: {
          essential:
            'The minimum mass for a hydrogen-burning star is about 0.075 times the mass of the Sun, or roughly 80 times the mass of Jupiter. The exact figure depends on composition.',
          detailed:
            'Metal-poor objects need slightly more mass, because their material is more transparent and loses heat more readily. This is a calculated boundary from stellar-structure models, well supported by the observed properties of very low-mass stars and brown dwarfs, rather than a directly measured constant.',
        },
        evidence: 'model',
        references: [referenceId('chabrier-baraffe-2000-low-mass')],
      },
      {
        id: 'link-fusion',
        kind: 'cross-link',
        topicId: topicId('nuclear-fusion-inside-stars'),
        rationale:
          'The pressure holding a star up has to be paid for continuously. This is the reaction that pays.',
      },
    ],
    furtherReading: [
      referenceId('eddington-1926-internal-constitution'),
      referenceId('pecaut-mamajek-2013-stellar-scale'),
    ],
  },

  {
    id: topicId('how-stars-are-born'),
    slug: 'how-stars-are-born',
    sectionId: STARS,
    order: 2,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How stars are born',
    subtitle: 'The coldest places in a galaxy are where the hottest objects begin.',
    summary: {
      essential:
        'Stars form inside cold, dense clouds of molecular gas. Gravity pulls a clump together; the clump gets denser and hotter; and if enough mass gathers, the centre eventually gets hot enough to start fusion. Along the way the clump spins up, flattens into a disk, and fires jets from its poles — all consequences of conserving angular momentum.',
      detailed:
        'The obstacle is not getting gravity to pull. It is getting gravity to win. A cloud is supported by thermal pressure, turbulence and magnetic fields, and for most of a cloud’s life those win. Collapse begins where a region becomes dense enough and cold enough that its own gravity beats its own support — and once collapse starts, it fragments, which is why stars form in groups rather than one at a time.',
      technical:
        'The Jeans criterion sets the threshold: a uniform region collapses when its mass exceeds M_J ≈ (5kT/Gμm_H)^{3/2}(3/4πρ)^{1/2}. Because M_J falls as density rises at fixed temperature, a collapsing cloud becomes unstable to sub-fragmentation — the origin of clustered star formation and, ultimately, of the initial mass function. Real clouds are turbulent and magnetised, so the observed star-formation efficiency per free-fall time is only a few percent rather than order unity.',
    },
    glossaryTerms: [
      glossaryTermId('molecular-cloud'),
      glossaryTermId('protostar'),
      glossaryTermId('interstellar-medium'),
    ],
    related: [
      topicId('why-gravity-makes-stars-hot'),
      topicId('when-a-star-switches-on'),
      topicId('from-stars-to-planets'),
    ],
    blocks: [
      {
        id: 'where',
        kind: 'prose',
        text: {
          essential:
            'The raw material is a molecular cloud: a region of interstellar gas cold enough that hydrogen exists as H₂ molecules rather than separate atoms. Ten to twenty kelvin — colder than anything on Earth outside a laboratory. These clouds are also dusty, and the dust blocks visible light, which is why they appear on photographs as dark holes in the star field rather than as bright objects.',
          detailed:
            'Cold matters for a specific reason. Pressure is what resists gravity, and pressure rises with temperature. A warm cloud simply holds itself up. Only when gas can cool efficiently — radiating its heat away through molecular and dust emission — does gravity get the chance to win. This is why star formation is essentially a story about cooling, and why the very first stars, which had no dust and almost no molecules to cool with, must have formed differently.',
        },
      },
      {
        id: 'viz-collapse',
        kind: 'visualization',
        visualizationId: visualizationId('molecular-cloud-collapse'),
      },
      {
        id: 'claim-fragmentation',
        kind: 'claim',
        statement: {
          essential:
            'A collapsing cloud does not make one star. It breaks into pieces as it contracts, and each piece may break again — so stars are born in groups, from a few dozen to many thousands at once.',
          detailed:
            'The reason is that the mass required for collapse gets smaller as the gas gets denser. So a region that has just started to collapse as a whole soon contains many sub-regions that each independently exceed the threshold. Fragmentation stops when the gas can no longer radiate away the heat of compression fast enough — at that point contraction starts warming the gas, pressure rises, and further splitting is suppressed. That cut-off is one of the ingredients that sets the smallest stellar masses.',
        },
        evidence: 'established',
        references: [
          referenceId('mckee-ostriker-2007-star-formation'),
          referenceId('kroupa-2001-imf'),
        ],
      },
      {
        id: 'spin',
        kind: 'prose',
        text: {
          essential:
            'Every cloud is turning a little. As a clump shrinks, that slow turn speeds up enormously — the same reason a spinning skater speeds up when they pull their arms in. The material cannot fall straight to the centre any more, so it settles into a flattened, rotating disk with the growing protostar at the middle.',
          detailed:
            'This creates a real problem, and it is one of the central difficulties in the subject. If angular momentum were simply conserved by the infalling gas, the star could never form: the material would spin up until centrifugal support stopped the collapse long before stellar densities were reached. Something has to carry angular momentum away. Magnetic fields threading the disk, and the jets those fields drive, are the leading answer — which is why nearly every young star is observed to be firing collimated outflows from its poles.',
        },
      },
      {
        id: 'claim-jets',
        kind: 'claim',
        statement: {
          essential:
            'Young stars are observed with disks around their equators and narrow jets shooting from their poles, sometimes for light-years. The disk is where planets will form; the jets are how the system sheds the rotation it cannot keep.',
          detailed:
            'Disks are now imaged directly at high resolution, and many show rings and gaps. The disks themselves, and their substructures, are observations. That the gaps are carved by forming planets is a strong and widely held interpretation, supported in a few cases by direct detection of a planet in the gap — but for most disks it remains an inference rather than a confirmed identification.',
        },
        evidence: 'inference',
        references: [
          referenceId('andrews-2018-dsharp'),
          referenceId('drazkowska-2023-planet-formation'),
        ],
      },
      {
        id: 'timescale',
        kind: 'quantity',
        quantities: [
          {
            id: 'cloud-temperature',
            label: 'Typical molecular cloud temperature',
            value: 15,
            unit: 'K',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Ranges from about 10 to 20 K in quiescent regions. Cold enough that hydrogen is molecular and gravity can overcome pressure in dense clumps.',
            references: [referenceId('draine-2011-ism')],
          },
          {
            id: 'sfr-milky-way',
            label: 'Star formation rate of the Milky Way today',
            value: 1.65,
            unit: 'M☉ per year',
            uncertainty: { plusMinus: 0.19 },
            context:
              'About one to two Sun-masses of new stars per year across the whole Galaxy — a modest rate, and far below what the Milky Way managed when it was young.',
            references: [referenceId('kennicutt-evans-2012-star-formation')],
          },
          {
            id: 'formation-time',
            label: 'Time for a Sun-like star to reach the main sequence',
            value: 30,
            unit: 'million years',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'From the onset of collapse to sustained hydrogen fusion. Massive stars do it in a fraction of that time; the smallest stars take hundreds of millions of years.',
            references: [referenceId('choi-2016-mist')],
          },
        ],
      },
      {
        id: 'link-hot',
        kind: 'cross-link',
        topicId: topicId('why-gravity-makes-stars-hot'),
        rationale:
          'The collapse described here is also the heating. The next topic explains why falling inward makes something hot.',
      },
    ],
    furtherReading: [
      referenceId('mckee-ostriker-2007-star-formation'),
      referenceId('draine-2011-ism'),
    ],
  },

  {
    id: topicId('why-gravity-makes-stars-hot'),
    slug: 'why-gravity-makes-stars-hot',
    sectionId: STARS,
    order: 3,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why gravity makes stars hot',
    subtitle: 'Falling is heating, if there is nowhere left to fall.',
    summary: {
      essential:
        'When something falls, it speeds up. In a collapsing cloud, particles fall inward, collide, and their organised inward motion becomes disorganised random motion — which is exactly what temperature is. Gravity does not heat things by magic. It converts height into speed, and collisions convert speed into heat.',
      detailed:
        'Half the released gravitational energy goes into heating; the other half is radiated away. That factor of one half is the virial theorem, and it has a strange consequence: a contracting star that radiates energy gets *hotter*, not cooler. Losing energy makes it shrink, and shrinking releases more energy than was lost. A star is an object with a negative heat capacity.',
      technical:
        'For a self-gravitating system in equilibrium, 2⟨K⟩ + ⟨U⟩ = 0. Contraction from radius R₁ to R₂ releases |ΔU| ≈ (3/5)GM²(1/R₂ − 1/R₁) for a uniform sphere; half becomes internal energy and half is radiated. The Kelvin–Helmholtz timescale t_KH ≈ GM²/(RL) is about 30 million years for the Sun — the answer nineteenth-century physics got for the Sun’s age, and the reason that answer had to be wrong.',
    },
    glossaryTerms: [glossaryTermId('hydrostatic-equilibrium')],
    related: [
      topicId('how-stars-are-born'),
      topicId('when-a-star-switches-on'),
      topicId('what-is-a-star'),
    ],
    blocks: [
      {
        id: 'intuition',
        kind: 'prose',
        text: {
          essential:
            'Drop a stone and it speeds up as it falls. The energy it had by virtue of its height turns into motion. Now imagine an enormous number of particles all falling toward a common centre. They cannot all arrive; they collide with each other on the way. Each collision randomises the direction of motion. Ordered infall becomes disordered jostling — and disordered jostling, measured across huge numbers of particles, is precisely what we mean by temperature.',
          detailed:
            'This is worth pausing on, because it is the mechanism behind every hot astronomical object that is not powered by fusion. Brown dwarfs glow this way. Jupiter still radiates more energy than it receives from the Sun this way. Newly formed white dwarfs and neutron stars start out ferociously hot this way. Gravitational contraction is the Universe’s default heat source, and fusion is the exception that only some objects get to use.',
        },
      },
      {
        id: 'viz-virial',
        kind: 'visualization',
        visualizationId: visualizationId('gravitational-heating'),
      },
      {
        id: 'claim-virial',
        kind: 'claim',
        statement: {
          essential:
            'Only half the gravitational energy released by contraction stays in the object as heat. The other half is radiated away. This is not an approximation for a particular case — it follows for any self-gravitating system that settles into equilibrium.',
          detailed:
            'The consequence is genuinely counterintuitive: radiating energy away makes a star hotter. It loses energy, so it contracts; contraction releases twice the energy that was lost; half of that goes into heat, leaving the interior warmer than before. A star heated this way cannot reach a steady state — it keeps shrinking and heating until something else takes over. For a protostar, that something is fusion. For a brown dwarf, nothing does, and it simply fades.',
          technical:
            'The virial theorem for a gas sphere with a non-relativistic ideal equation of state gives 2K + U = 0, hence total energy E = K + U = U/2 = −K. Since K sets the temperature, dE < 0 implies dT > 0: a negative heat capacity. The result fails when the equation of state stiffens — for a fully degenerate configuration, contraction no longer heats efficiently, which is precisely why brown dwarfs stall.',
        },
        evidence: 'established',
        references: [referenceId('eddington-1926-internal-constitution')],
      },
      {
        id: 'kelvin-history',
        kind: 'callout',
        tone: 'history',
        title: 'The argument Kelvin lost',
        text: {
          essential:
            'In the 1860s Kelvin and Helmholtz used exactly this physics to compute how long the Sun could shine on gravitational contraction alone. The answer was tens of millions of years. Geologists insisted the Earth was far older; Darwin needed longer still. Kelvin, who had the better-looking calculation, was confident and wrong.',
          detailed:
            'He was not wrong about the physics — the Kelvin–Helmholtz timescale is real, and it correctly describes protostars and contracting white dwarfs. He was wrong that it was the only available energy source. The resolution required a form of energy nobody in 1862 knew existed. It is a clean example of a calculation being correct, careful, and beaten by an unknown unknown.',
        },
        references: [referenceId('bethe-1939-energy-production')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'kh-timescale',
            label: 'Kelvin–Helmholtz timescale for the Sun',
            value: 3.1e7,
            unit: 'years',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'How long the Sun could shine at its present luminosity on gravitational contraction alone. The Sun is about 150 times older than this, which is the whole argument that fusion must exist.',
            references: [referenceId('eddington-1926-internal-constitution')],
          },
          {
            id: 'solar-age',
            label: 'Age of the Solar System',
            value: 4.5682e9,
            unit: 'years',
            uncertainty: { plusMinus: 0.0002e9 },
            context:
              'From lead–lead dating of calcium–aluminium-rich inclusions in meteorites, the oldest solids that condensed in the solar nebula.',
            references: [referenceId('bouvier-wadhwa-2010-solar-system-age')],
          },
        ],
      },
      {
        id: 'link-switch',
        kind: 'cross-link',
        topicId: topicId('when-a-star-switches-on'),
        rationale:
          'Contraction heats the core until something interrupts it. This is what interrupts it.',
      },
    ],
    furtherReading: [referenceId('eddington-1926-internal-constitution')],
  },

  {
    id: topicId('when-a-star-switches-on'),
    slug: 'when-a-star-switches-on',
    sectionId: STARS,
    order: 4,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'When a star switches on',
    subtitle: 'The moment contraction stops, and a thermostat takes over.',
    summary: {
      essential:
        'A protostar contracts and heats until its core reaches roughly 10 million kelvin. At that point hydrogen fusion begins in earnest and supplies enough energy to replace what the star radiates. Contraction stops. The star settles into a balance it can hold for billions of years — and that moment is when it becomes a star.',
      detailed:
        'What makes the balance stable is that fusion is fiercely temperature-sensitive. A small rise in core temperature produces a large rise in energy output, which expands the core slightly, which cools it back down. A small drop does the reverse. The star runs its own thermostat, and this is why main-sequence stars are so steady.',
      technical:
        'The proton–proton chain scales roughly as ε ∝ ρT⁴ near solar conditions; the CNO cycle as ε ∝ ρT¹⁷. Perturbing the core outward does work against gravity and lowers T, reducing ε — a negative feedback loop with a response time of order the thermal timescale. Stability requires the equation of state to remain non-degenerate; where it does not, as in the helium flash of a low-mass star, the same sensitivity produces a runaway rather than a regulator.',
    },
    glossaryTerms: [glossaryTermId('main-sequence'), glossaryTermId('hydrostatic-equilibrium')],
    related: [
      topicId('nuclear-fusion-inside-stars'),
      topicId('the-main-sequence'),
      topicId('why-gravity-makes-stars-hot'),
    ],
    blocks: [
      {
        id: 'the-moment',
        kind: 'prose',
        text: {
          essential:
            'Picture the protostar shrinking, its centre getting hotter with every step. Nothing dramatic happens for millions of years. Then, over a relatively short stretch, the core crosses about 10 million kelvin, and protons start fusing fast enough to matter. Energy now arrives from inside at the same rate it leaves from outside. There is no longer any need to shrink. The star stops.',
          detailed:
            'It is worth being precise about what "no longer any need to shrink" means. The star was shrinking because it was losing energy and had no other way to replace it. Fusion replaces it. The pressure that holds the star up is now paid for out of nuclear energy rather than out of gravitational collapse, and since the nuclear supply is enormous, the arrangement can last a very long time.',
        },
      },
      {
        id: 'viz-thermostat',
        kind: 'visualization',
        visualizationId: visualizationId('stellar-thermostat'),
      },
      {
        id: 'claim-thermostat',
        kind: 'claim',
        statement: {
          essential:
            'A main-sequence star regulates itself. If the core gets slightly hotter, fusion speeds up sharply, the extra pressure pushes the core outward, expansion cools it, and fusion slows again. The star holds its own temperature steady without anything supervising it.',
          detailed:
            'The sensitivity is what makes this work. Near solar core conditions the proton–proton rate goes roughly as the fourth power of temperature — so a 5 percent temperature rise gives about a 20 percent jump in energy output. In a massive star running the CNO cycle the dependence is closer to the seventeenth power, and a 5 percent rise more than doubles the output. That extreme sensitivity is also why massive stars have convective cores: the energy is generated in so small a central region that radiation alone cannot carry it away.',
        },
        evidence: 'established',
        references: [
          referenceId('bethe-1939-energy-production'),
          referenceId('christensen-dalsgaard-2002-helioseismology'),
        ],
      },
      {
        id: 'not-a-switch',
        kind: 'callout',
        tone: 'misconception',
        title: '“The star ignites, like a match”',
        text: {
          essential:
            'There is no ignition event to watch. Fusion does not start suddenly at a threshold temperature — it is always happening at some rate, and that rate simply rises steeply as the core heats. What changes is when the rate becomes large enough to supply the star’s whole radiated output. That is a crossing point in a graph, not a flash.',
          detailed:
            'A young star does briefly burn deuterium, and later lithium, at lower temperatures than ordinary hydrogen requires — these are real, observable stages, and the presence or absence of lithium is used to test whether an object is massive enough to be a star. But even these are gradual. Nothing about a star turning on resembles striking a match.',
        },
        references: [referenceId('chabrier-baraffe-2000-low-mass')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'core-temp-fusion',
            label: 'Core temperature of the Sun',
            value: 1.57e7,
            unit: 'K',
            context:
              'Sustained hydrogen fusion in a solar-composition star requires roughly 10 million kelvin. The Sun runs comfortably above that; the smallest stars sit only just above it.',
            references: [referenceId('bahcall-2005-solar-neutrinos')],
          },
          {
            id: 'solar-mass-loss',
            label: 'Mass the Sun converts to energy each second',
            value: 4.26e9,
            unit: 'kg',
            context:
              'From L = mc² applied to the solar luminosity: about 4.26 million tonnes per second. Over the Sun’s whole main-sequence life this amounts to well under one part in a thousand of its mass.',
            references: [referenceId('iau-2015-nominal-constants')],
          },
        ],
      },
      {
        id: 'link-fusion',
        kind: 'cross-link',
        topicId: topicId('nuclear-fusion-inside-stars'),
        rationale: 'What the reaction actually is, step by step, and why it releases energy.',
      },
    ],
    furtherReading: [referenceId('bethe-1939-energy-production')],
  },

  {
    id: topicId('nuclear-fusion-inside-stars'),
    slug: 'nuclear-fusion-inside-stars',
    sectionId: STARS,
    order: 5,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Nuclear fusion inside stars',
    subtitle: 'Four protons in, one helium nucleus out, and a little mass missing.',
    summary: {
      essential:
        'Deep in a star’s core, hydrogen nuclei — single protons — combine in stages to make helium. The helium nucleus that results weighs slightly less than the four protons that went in. That missing mass has become energy, and it is the energy that keeps the star shining.',
      detailed:
        'Getting two protons to touch is hard: both are positive and repel fiercely. Even at 15 million kelvin, almost no proton has enough energy to climb that barrier. Fusion happens anyway because of quantum tunnelling — protons pass through the barrier they cannot climb. This is why the Sun burns so slowly, and why it will last billions of years rather than minutes.',
      technical:
        'The pp-I chain: p + p → d + e⁺ + ν_e (weak, and the rate-limiting step), d + p → ³He + γ, then ³He + ³He → ⁴He + 2p. Net: 4p → ⁴He + 2e⁺ + 2ν_e, releasing 26.73 MeV of which about 0.6 MeV escapes as neutrinos. The mass deficit is 0.7 percent. The Gamow peak — the product of the falling Maxwell–Boltzmann tail and the rising tunnelling probability — determines the effective energy at which fusion actually occurs, well above kT but far below the Coulomb barrier.',
    },
    glossaryTerms: [glossaryTermId('nucleosynthesis'), glossaryTermId('quantum-tunnelling')],
    related: [
      topicId('when-a-star-switches-on'),
      topicId('making-the-elements'),
      topicId('iron-the-turning-point'),
    ],
    blocks: [
      {
        id: 'the-problem',
        kind: 'prose',
        text: {
          essential:
            'Two protons both carry positive charge, so they push each other apart, and the closer they get the harder they push. To fuse, they must get close enough for the strong nuclear force to grab them — but that force only reaches about a millionth of a billionth of a metre. Getting there means overcoming an enormous electrical barrier.',
          detailed:
            'The numbers are stark. The electrical barrier between two protons corresponds to a temperature of several billion kelvin. The Sun’s core is 15.7 million kelvin — roughly a thousand times too cold. Classically, essentially no fusion should occur at all. The Sun should not shine.',
        },
      },
      {
        id: 'tunnelling',
        kind: 'claim',
        statement: {
          essential:
            'Protons fuse by quantum tunnelling: they pass through the electrical barrier rather than over it. The probability for any given encounter is minuscule, but there are so many protons colliding so often that the reaction proceeds anyway — slowly, steadily, and for billions of years.',
          detailed:
            'The slowness is essential rather than incidental. The very first step, two protons forming deuterium, requires one of them to convert into a neutron via the weak interaction at the same moment — a coincidence so improbable that a given proton in the Sun’s core waits, on average, billions of years for it. That bottleneck is what makes the Sun a slow, steady star rather than a bomb. Had the weak interaction been slightly stronger, stellar lifetimes would be far shorter.',
          technical:
            'Gamow’s tunnelling factor gives a penetration probability ∝ exp(−2πη) with the Sommerfeld parameter η = Z₁Z₂e²/(4πε₀ħv). Folding this against the Maxwell–Boltzmann distribution produces the Gamow peak at E₀ ≈ (bkT/2)^{2/3}, roughly 6 keV in the solar core versus kT ≈ 1.35 keV. The pp cross-section at those energies has never been measured directly in a laboratory — it is calculated from weak-interaction theory, and its normalisation is one of the standard solar model’s inputs.',
        },
        evidence: 'established',
        references: [
          referenceId('bethe-1939-energy-production'),
          referenceId('bahcall-2005-solar-neutrinos'),
        ],
      },
      {
        id: 'viz-pp',
        kind: 'visualization',
        visualizationId: visualizationId('proton-proton-chain'),
      },
      {
        id: 'cno',
        kind: 'prose',
        text: {
          essential:
            'There is a second route. If a star already contains some carbon, nitrogen and oxygen, those nuclei can act as catalysts: a carbon nucleus absorbs protons one at a time, passes through nitrogen and oxygen, and eventually spits out a helium nucleus and returns to being carbon. The carbon is not consumed — it just shepherds the reaction.',
          detailed:
            'The CNO cycle needs higher temperatures than the proton–proton chain, because the barrier against a carbon nucleus is six times higher than against a proton. But once it gets going it is far more temperature-sensitive, so it takes over sharply. In the Sun it supplies only about 1 percent of the energy. In a star of about 1.3 solar masses or more, it dominates — and that changeover is what makes massive stars structurally different, with convective cores instead of radiative ones.',
        },
      },
      {
        id: 'viz-cno',
        kind: 'visualization',
        visualizationId: visualizationId('cno-cycle'),
      },
      {
        id: 'claim-borexino',
        kind: 'claim',
        statement: {
          essential:
            'The CNO cycle is not a theoretical convenience. Neutrinos produced specifically by it have been detected coming from the Sun, at a rate consistent with it supplying about 1 percent of the Sun’s energy.',
          detailed:
            'Borexino reported this in 2020, after decades of effort, because the CNO signal is small and sits beneath backgrounds that had to be suppressed to extraordinary levels. It matters beyond bookkeeping: the CNO neutrino flux depends on how much carbon, nitrogen and oxygen the solar core actually contains, so measuring it is a way of weighing the Sun’s interior composition directly rather than inferring it from the surface.',
        },
        evidence: 'established',
        references: [referenceId('borexino-2020-cno'), referenceId('bahcall-2005-solar-neutrinos')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'pp-energy',
            label: 'Energy released converting four protons to one helium-4 nucleus',
            value: 26.73,
            unit: 'MeV',
            context:
              'About 0.6 MeV of this escapes immediately as neutrinos and never heats the star. The mass deficit is 0.7 percent of the input mass.',
            references: [
              referenceId('bethe-1939-energy-production'),
              referenceId('audi-2021-atomic-mass'),
            ],
          },
          {
            id: 'cno-fraction',
            label: 'Fraction of the Sun’s energy from the CNO cycle',
            value: 1,
            unit: 'percent',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Measured via CNO neutrinos by Borexino in 2020, consistent with standard solar model predictions of roughly 1 percent.',
            references: [referenceId('borexino-2020-cno')],
          },
          {
            id: 'photon-escape',
            label: 'Time for energy generated in the Sun’s core to reach the surface',
            value: 100000,
            unit: 'years',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Estimates range from tens of thousands to a few hundred thousand years depending on the opacity model and how the random walk is treated. The neutrinos released in the same reactions arrive in about 8 minutes.',
            references: [referenceId('christensen-dalsgaard-2002-helioseismology')],
          },
        ],
      },
      {
        id: 'link-elements',
        kind: 'cross-link',
        topicId: topicId('making-the-elements'),
        rationale:
          'Hydrogen to helium is the first step. What happens after the hydrogen runs out is where the rest of the periodic table comes from.',
      },
    ],
    furtherReading: [
      referenceId('bethe-1939-energy-production'),
      referenceId('bahcall-2005-solar-neutrinos'),
    ],
  },

  {
    id: topicId('mass-determines-a-stars-life'),
    slug: 'mass-determines-a-stars-life',
    sectionId: STARS,
    order: 6,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Mass decides everything',
    subtitle: 'Tell me a star’s mass and I can tell you how it lives and how it dies.',
    summary: {
      essential:
        'Almost everything about a star follows from one number: how much mass it started with. Mass sets the core temperature, which sets the fusion rate, which sets the luminosity, which sets the lifetime — and it decides whether the star ends as a white dwarf, a neutron star, or a black hole.',
      detailed:
        'The relationship is startlingly steep. Double a star’s mass and it does not become twice as bright; it becomes roughly ten times as bright. That means it burns through its fuel far faster than the extra fuel can compensate for, so heavier stars live dramatically shorter lives. A star ten times the Sun’s mass has ten times the fuel and burns it thousands of times faster.',
      technical:
        'For main-sequence stars above about half a solar mass, L ∝ M^α with α ≈ 3.5 empirically, tending to α ≈ 3 at high mass where radiation pressure matters and steepening below. Since lifetime t ∝ M/L, this gives t ∝ M^{−2.5}. The steepness is a consequence of hydrostatic equilibrium plus radiative transport: higher mass demands a higher central temperature to hold itself up, and the fusion rate responds to temperature as a high power.',
    },
    glossaryTerms: [glossaryTermId('luminosity'), glossaryTermId('initial-mass-function')],
    related: [
      topicId('the-main-sequence'),
      topicId('how-long-do-stars-live'),
      topicId('the-life-of-a-massive-star'),
    ],
    blocks: [
      {
        id: 'why-mass',
        kind: 'prose',
        text: {
          essential:
            'Here is the chain, and it is worth following once slowly. More mass means more weight pressing on the core. More weight means the core must push back harder, so it must be denser and hotter. A hotter core fuses much faster. Faster fusion means more energy per second — a brighter star. And a brighter star is spending its fuel faster.',
          detailed:
            'The last link is the surprising one. Intuition says a bigger tank lasts longer. But the consumption rate rises much faster than the tank size. A star of 10 solar masses has 10 times the Sun’s fuel and burns it roughly 3,000 times faster, so it lasts about one three-hundredth as long. The Sun gets 10 billion years on the main sequence; a 10-solar-mass star gets about 30 million.',
        },
      },
      {
        id: 'viz-mass-luminosity',
        kind: 'visualization',
        visualizationId: visualizationId('mass-luminosity-relation'),
      },
      {
        id: 'claim-ml',
        kind: 'claim',
        statement: {
          essential:
            'Across most of the main sequence, a star’s luminosity rises roughly as the 3.5th power of its mass. This is measured, not assumed: masses come from binary star orbits and luminosities from distances and brightnesses, entirely independently.',
          detailed:
            'The exponent is not a universal constant. It is steeper than 4 for low-mass stars, close to 3.5 through the middle range, and flattens toward about 3 for the most massive stars, where radiation pressure begins to support a significant fraction of the weight. Quoting "3.5" is a useful shorthand for the middle of the range, and it is worth saying which range you mean.',
        },
        evidence: 'established',
        references: [
          referenceId('torres-2010-eclipsing-binaries'),
          referenceId('eddington-1926-internal-constitution'),
        ],
      },
      {
        id: 'imf',
        kind: 'claim',
        statement: {
          essential:
            'Nature makes far more small stars than large ones. For every star born above 10 solar masses, hundreds of smaller stars form alongside it. Most stars in the Galaxy are red dwarfs — dimmer than the Sun, and none of them visible to the naked eye.',
          detailed:
            'The distribution of birth masses is called the initial mass function, and it falls steeply: roughly as M^−2.3 above half a solar mass. It appears remarkably similar in many different environments, which is a genuinely surprising observational result given how different those environments are. Whether it is truly universal, or only looks that way within current measurement precision, is still debated.',
        },
        evidence: 'inference',
        references: [referenceId('kroupa-2001-imf')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'mass-range',
            label: 'Range of stellar masses',
            value: 0.075,
            unit: 'to about 150 M☉',
            context:
              'The lower bound is where hydrogen fusion becomes possible. The upper bound is not sharp: very massive stars shed mass violently, and the highest reliably measured masses are around 150–200 solar masses, with the true limit still argued about.',
            references: [
              referenceId('chabrier-baraffe-2000-low-mass'),
              referenceId('smith-2014-mass-loss'),
            ],
          },
          {
            id: 'red-dwarf-fraction',
            label: 'Fraction of stars that are M dwarfs',
            value: 70,
            unit: 'percent',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Around three quarters of stars in the solar neighbourhood are cool, low-mass M dwarfs. Not one of them is bright enough to see without a telescope.',
            references: [referenceId('kroupa-2001-imf')],
          },
        ],
      },
      {
        id: 'brightest-not-typical',
        kind: 'callout',
        tone: 'misconception',
        title: 'The night sky is a biased sample',
        text: {
          essential:
            'Nearly every star you can see with the naked eye is intrinsically far brighter than the Sun. That is not because bright stars are common — it is because dim ones are invisible from any distance. The sky shows you the rare and luminous, and hides the ordinary majority.',
          detailed:
            'This selection effect has a name — Malmquist bias — and it distorts far more than casual stargazing. Any survey limited by apparent brightness preferentially finds intrinsically luminous objects at large distances, and correcting for it is a routine and non-trivial part of measuring anything about a stellar or galactic population.',
        },
        references: [referenceId('kroupa-2001-imf')],
      },
      {
        id: 'link-lifetimes',
        kind: 'cross-link',
        topicId: topicId('how-long-do-stars-live'),
        rationale:
          'The lifetime consequences of this relationship, spanning six orders of magnitude.',
      },
    ],
    furtherReading: [referenceId('torres-2010-eclipsing-binaries'), referenceId('choi-2016-mist')],
  },

  {
    id: topicId('the-main-sequence'),
    slug: 'the-main-sequence',
    sectionId: STARS,
    order: 7,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The main sequence',
    subtitle: 'Not a stage of life so much as the long, quiet middle of it.',
    summary: {
      essential:
        'Plot stars by how bright they are against how hot they are, and they do not scatter randomly. Most fall along one diagonal band. That band is the main sequence, and a star sits on it for as long as it is fusing hydrogen in its core — which is most of its life.',
      detailed:
        'The band exists because a star on it has only one free parameter. Once you fix the mass and the composition, hydrostatic equilibrium and energy transport fix the radius, the temperature and the luminosity. So main-sequence stars cannot occupy the whole diagram: they are confined to a line, with position along the line set by mass.',
      technical:
        'The Hertzsprung–Russell diagram plots log L against log T_eff, conventionally with temperature increasing leftward. Main-sequence position is monotonic in mass: about 0.08 M☉ at the faint red end, 100 M☉ or more at the bright blue end. Stars leave the band when the core hydrogen is exhausted; the luminosity at the turn-off point of a coeval population therefore dates it, which is how star cluster ages are measured.',
    },
    glossaryTerms: [glossaryTermId('main-sequence'), glossaryTermId('hr-diagram')],
    related: [
      topicId('mass-determines-a-stars-life'),
      topicId('the-life-of-a-sun-like-star'),
      topicId('how-do-we-measure-a-stars-temperature'),
    ],
    blocks: [
      {
        id: 'the-diagram',
        kind: 'prose',
        text: {
          essential:
            'Around 1910, Hertzsprung and Russell independently tried something simple: plot every star you know by brightness against colour. If stars were just balls of gas of arbitrary sizes and temperatures, the plot should be a shapeless cloud. It was not. Most stars lay along one clean diagonal, with a couple of separate clumps elsewhere. Something was constraining them.',
          detailed:
            'That plot is arguably the single most useful diagram in astrophysics, and it was made before anyone knew what powered a star. It is an empirical result that demanded a theory, and the theory — hydrostatic equilibrium plus nuclear energy generation plus radiative transport — took another three decades to arrive. When it did, it explained the diagonal exactly.',
        },
      },
      {
        id: 'viz-hr',
        kind: 'visualization',
        visualizationId: visualizationId('hr-diagram'),
      },
      {
        id: 'claim-mostly-there',
        kind: 'claim',
        statement: {
          essential:
            'About 90 percent of the stars we observe are on the main sequence. Not because that phase is special, but because it is long: everything that comes afterward happens roughly ten times faster.',
          detailed:
            'This is a survivorship statement about a snapshot, not about individual stars. Every star that lives long enough spends most of its life fusing core hydrogen, so at any instant most stars are caught in that phase. The later stages are as real and as inevitable — they are just brief, which makes red giants and supergiants rarer in a census even though every Sun-like star becomes one.',
        },
        evidence: 'established',
        references: [referenceId('gaia-2018-hr-diagram')],
      },
      {
        id: 'not-a-sequence-in-time',
        kind: 'callout',
        tone: 'misconception',
        title: '“Stars move along the main sequence as they age”',
        text: {
          essential:
            'They do not. A star does not start at the blue end and slide down to the red end. It arrives at the position its mass dictates, stays near there for most of its life, and then leaves the band altogether when its core hydrogen runs out. The main sequence is a mass sequence, not an age sequence.',
          detailed:
            'A star does drift slightly during its main-sequence life — the Sun is about 30 percent brighter now than when it formed, because its core has been gradually converting hydrogen to helium and contracting a little in response. But this is a small movement roughly upward and to the right along a short track, not a journey down the length of the band.',
        },
        references: [referenceId('choi-2016-mist')],
      },
      {
        id: 'turnoff',
        kind: 'claim',
        statement: {
          essential:
            'Because heavier stars leave the main sequence first, a cluster of stars all born together shows a clean break: everything above a certain brightness has gone, everything below is still there. Where that break falls gives the cluster’s age.',
          detailed:
            'This is one of the most reliable age-dating methods in astronomy, and it underpins the claim that some globular clusters are over 12 billion years old — a constraint that has to be consistent with the age of the Universe, and historically was not always so. The method assumes the cluster is coeval and chemically homogeneous, and high-precision photometry has since shown that many globular clusters contain multiple populations, which complicates but does not overturn the technique.',
        },
        evidence: 'inference',
        references: [referenceId('gaia-2018-hr-diagram'), referenceId('choi-2016-mist')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'sun-ms-lifetime',
            label: 'Main-sequence lifetime of the Sun',
            value: 1.0e10,
            unit: 'years',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About 10 billion years in total, of which roughly 4.6 billion have passed. Models put the end of core hydrogen burning at around 10–11 billion years from formation.',
            references: [referenceId('choi-2016-mist')],
          },
          {
            id: 'sun-position',
            label: 'The Sun’s spectral type',
            value: 2,
            unit: 'G2 V',
            context:
              'A G2 main-sequence star: yellow-white, 5772 K, and almost exactly average among the stars you can see, while being far brighter than the typical star that exists.',
            references: [referenceId('pecaut-mamajek-2013-stellar-scale')],
          },
        ],
      },
      {
        id: 'link-sunlike',
        kind: 'cross-link',
        topicId: topicId('the-life-of-a-sun-like-star'),
        rationale: 'What happens when a star like the Sun finally leaves the band.',
      },
    ],
    furtherReading: [referenceId('gaia-2018-hr-diagram'), referenceId('choi-2016-mist')],
  },
];
