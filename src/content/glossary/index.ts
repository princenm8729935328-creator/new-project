/**
 * Glossary — seed set.
 *
 * Terms are added as the sections that use them are written; `relatedTopics` is
 * filled in at that point. Each definition must stand on its own, because it is
 * rendered in a tooltip with no surrounding context.
 */
import { glossaryTermId, type GlossaryTerm } from '../schema/glossary';
import { referenceId } from '../schema/reference';
import { PHILOSOPHY_GLOSSARY } from './philosophy';

export const GLOSSARY: readonly GlossaryTerm[] = [
  {
    id: glossaryTermId('light-year'),
    term: 'Light-year',
    short:
      'The distance light travels in one year in a vacuum — about 9.46 trillion kilometres. A unit of distance, not of time.',
    symbol: 'ly',
    unit: 'distance',
    references: [referenceId('codata-2018')],
  },
  {
    id: glossaryTermId('redshift'),
    term: 'Redshift',
    aliases: ['cosmological redshift'],
    short:
      'The stretching of light to longer wavelengths. For distant galaxies it is caused by the expansion of space during the light’s journey, and it is how astronomers measure distance and look-back time.',
    symbol: 'z',
    references: [referenceId('hubble-1929')],
  },
  {
    id: glossaryTermId('cmb'),
    term: 'Cosmic microwave background',
    aliases: ['CMB', 'relic radiation'],
    short:
      'The oldest light that can be observed: microwave radiation released when the Universe first became transparent, now measured across the whole sky at about 2.725 kelvin.',
    references: [referenceId('penzias-wilson-1965'), referenceId('fixsen-2009-cmb-temperature')],
  },
  {
    id: glossaryTermId('spacetime'),
    term: 'Spacetime',
    short:
      'Space and time treated as one four-dimensional structure. In general relativity, mass and energy change its geometry, and that changed geometry is what we experience as gravity.',
    references: [referenceId('einstein-1916-gr')],
  },
  {
    id: glossaryTermId('event-horizon'),
    term: 'Event horizon',
    short:
      'The boundary around a black hole beyond which no signal can escape to the outside. It is not a surface or an object — it is a location defined by the paths light can take.',
    references: [referenceId('eht-2019-m87')],
  },
  {
    id: glossaryTermId('dark-matter'),
    term: 'Dark matter',
    short:
      'Mass inferred from its gravitational effect on galaxies, clusters and the early Universe, but not observed to emit or absorb light. Its composition has not been identified.',
    references: [referenceId('rubin-ford-1970'), referenceId('planck-2018-vi')],
  },
  {
    id: glossaryTermId('dark-energy'),
    term: 'Dark energy',
    short:
      'The name given to whatever is causing the expansion of the Universe to accelerate. Its existence is inferred from several independent observations; its nature is unknown.',
    references: [referenceId('riess-1998'), referenceId('perlmutter-1999')],
  },
  {
    id: glossaryTermId('hubble-constant'),
    term: 'Hubble constant',
    short:
      'The present-day rate at which the Universe is expanding, expressed as a recession speed per unit distance. Independent methods of measuring it currently disagree — the "Hubble tension".',
    symbol: 'H₀',
    unit: 'km s⁻¹ Mpc⁻¹',
    references: [referenceId('hubble-1929'), referenceId('planck-2018-vi')],
  },
  {
    id: glossaryTermId('superposition'),
    term: 'Superposition',
    aliases: ['quantum superposition'],
    short:
      'A state written as a combination of other states with complex coefficients. It does not mean the system secretly already has one of those values, and it is not "being in two places at once" — it means the amplitudes add, and interference is the evidence that they do.',
    references: [referenceId('sakurai-2020-modern-qm')],
  },
  {
    id: glossaryTermId('nucleosynthesis'),
    term: 'Nucleosynthesis',
    short:
      'The formation of atomic nuclei from lighter ones — in the first minutes of the Universe (Big Bang nucleosynthesis) and, later and continuously, inside stars.',
    references: [referenceId('planck-2018-vi')],
  },
  {
    id: glossaryTermId('inertia'),
    term: 'Inertia',
    short:
      'The resistance of an object to any change in its motion. Mass is the measure of it: the same push changes a heavy object’s velocity less than a light one’s.',
    references: [referenceId('newton-1687-principia')],
  },
  {
    id: glossaryTermId('net-force'),
    term: 'Net force',
    aliases: ['resultant force'],
    short:
      'The single force equivalent to all the forces acting on an object added together as vectors. Only the net force changes an object’s motion; balanced forces leave the motion unchanged without being absent.',
    symbol: 'ΣF',
    unit: 'newton (N)',
    references: [referenceId('newton-1687-principia')],
  },
  {
    id: glossaryTermId('gravitational-constant'),
    term: 'Gravitational constant',
    aliases: ['big G', 'Newton’s constant'],
    short:
      'The constant of proportionality in Newton’s law of gravitation, 6.67430 × 10⁻¹¹ m³ kg⁻¹ s⁻². It sets how strong gravity is, and it is the least precisely known of the fundamental constants.',
    symbol: 'G',
    unit: 'm³ kg⁻¹ s⁻²',
    references: [referenceId('codata-2018'), referenceId('cavendish-1798')],
  },
  {
    id: glossaryTermId('free-fall'),
    term: 'Free fall',
    short:
      'Motion under gravity alone, with no other force acting. An object in free fall has no sensation of weight — which is why astronauts float in orbit even though Earth’s gravity there is nearly as strong as at the ground.',
    references: [referenceId('galileo-1638-two-new-sciences')],
  },
  {
    id: glossaryTermId('equivalence-principle'),
    term: 'Equivalence principle',
    short:
      'The observed fact that all objects fall with the same acceleration regardless of their mass or composition — equivalently, that gravitational mass and inertial mass are the same quantity. It is the starting point of general relativity.',
    references: [referenceId('touboul-2022-microscope'), referenceId('einstein-1916-gr')],
  },
  {
    id: glossaryTermId('escape-velocity'),
    term: 'Escape velocity',
    short:
      'The minimum speed at which an unpowered object must leave a body’s surface to never fall back, ignoring atmosphere and every other body. It depends on the body’s mass and radius, not on the escaping object’s mass.',
    symbol: 'v_e',
    unit: 'm/s',
    references: [referenceId('vallado-2013-astrodynamics')],
  },
  {
    id: glossaryTermId('tidal-force'),
    term: 'Tidal force',
    short:
      'Not a separate force, but the *difference* in gravitational pull across an extended object. It stretches the object along the line to the attracting body and squeezes it at right angles — which is why the Earth has two tidal bulges, not one.',
    references: [referenceId('agnew-2015-earth-tides')],
  },
  {
    id: glossaryTermId('lorentz-factor'),
    term: 'Lorentz factor',
    aliases: ['gamma factor'],
    short:
      'The number that says how strongly relativistic effects apply at a given speed: γ = 1/√(1 − v²/c²). It is 1.000005 at 0.003c, 1.15 at half light speed, and grows without limit as the speed approaches c.',
    symbol: 'γ',
    references: [referenceId('einstein-1905-sr')],
  },
  {
    id: glossaryTermId('proper-time'),
    term: 'Proper time',
    short:
      'The time measured by a clock carried along a particular path through spacetime — the time that thing itself experiences. Different paths between the same two events carry different proper times, which is the whole content of the twin puzzle.',
    symbol: 'τ',
    references: [referenceId('taylor-wheeler-1992-spacetime')],
  },
  {
    id: glossaryTermId('simultaneity'),
    term: 'Relativity of simultaneity',
    short:
      'Two events that happen at the same moment for one observer happen at different moments for another moving relative to the first. There is no universal "now" that everyone shares.',
    references: [referenceId('einstein-1905-sr')],
  },
  {
    id: glossaryTermId('light-cone'),
    term: 'Light cone',
    short:
      'The set of all points in spacetime that a flash of light from one event can reach, and that could have reached it. Nothing carrying information can leave its own light cone, which is why the cone — not distance alone — defines what can cause what.',
    references: [referenceId('minkowski-1952-space-and-time')],
  },
  {
    id: glossaryTermId('geodesic'),
    term: 'Geodesic',
    short:
      'The straightest possible path through a curved geometry — the closest thing to a straight line that the geometry allows. In general relativity a freely falling object follows a geodesic of spacetime, with no force acting on it at all.',
    references: [referenceId('hartle-2003-gravity')],
  },
  {
    id: glossaryTermId('gravitational-wave'),
    term: 'Gravitational wave',
    short:
      'A ripple in the geometry of spacetime, produced when massive objects accelerate asymmetrically, and travelling at the speed of light. Passing through matter it stretches it one way and squeezes it the other, by a fraction of its size far smaller than an atomic nucleus.',
    references: [referenceId('ligo-2016-gw150914')],
  },
  {
    id: glossaryTermId('schwarzschild-radius'),
    term: 'Schwarzschild radius',
    short:
      'The radius at which a given mass, if compressed inside it, would form a black hole: r = 2GM/c². For the Sun it is about 3 km; for the Earth about 9 mm. It marks where an event horizon would be, not the size of any ordinary object.',
    symbol: 'r_s',
    unit: 'm',
    references: [referenceId('schwarzschild-1916')],
  },

  // --- Black holes -------------------------------------------------------
  {
    id: glossaryTermId('singularity'),
    term: 'Singularity',
    short:
      'A place where the equations of general relativity give infinite values and stop describing anything. It marks the boundary of the theory’s validity rather than a known physical object; describing what is really there would require a quantum theory of gravity.',
    references: [referenceId('penrose-1965-singularities')],
  },
  {
    id: glossaryTermId('photon-sphere'),
    term: 'Photon sphere',
    short:
      'The radius at which gravity bends light strongly enough that a photon can orbit the black hole. For a non-rotating black hole it lies at 1.5 times the Schwarzschild radius. The orbit is unstable, so light there either falls in or escapes.',
    symbol: 'r_ph',
    unit: 'm',
    references: [referenceId('eht-2019-v-physical-origin')],
  },
  {
    id: glossaryTermId('accretion-disc'),
    term: 'Accretion disc',
    aliases: ['accretion disk'],
    short:
      'A flattened, orbiting disc of gas spiralling toward a compact object. Friction and turbulence heat it to millions of kelvin, making it one of the brightest sources in the Universe — the light comes from the disc, never from the black hole itself.',
    references: [referenceId('shakura-sunyaev-1973')],
  },
  {
    id: glossaryTermId('ergosphere'),
    term: 'Ergosphere',
    short:
      'The region outside a rotating black hole’s event horizon within which spacetime is dragged around so strongly that nothing can remain still relative to distant stars. Energy can be extracted from it, unlike from inside the horizon.',
    references: [referenceId('kerr-1963')],
  },
  {
    id: glossaryTermId('frame-dragging'),
    term: 'Frame dragging',
    aliases: ['Lense–Thirring effect'],
    short:
      'The twisting of spacetime by a rotating mass, which drags nearby inertial frames around with it. Measured around the Earth by Gravity Probe B; overwhelming near a rapidly spinning black hole.',
    references: [referenceId('everitt-2011-gravity-probe-b'), referenceId('kerr-1963')],
  },
  {
    id: glossaryTermId('hawking-radiation'),
    term: 'Hawking radiation',
    short:
      'Thermal radiation predicted to be emitted by a black-hole horizon by quantum field theory in curved spacetime. Its temperature is inversely proportional to mass, making it far too faint to detect for any known astrophysical black hole. It has never been observed.',
    references: [referenceId('hawking-1975-radiation')],
  },
  {
    id: glossaryTermId('spaghettification'),
    term: 'Spaghettification',
    aliases: ['tidal stretching'],
    short:
      'Stretching along the direction of fall and squeezing across it, caused by the difference in gravitational acceleration between the near and far parts of an extended body. Near a black hole the effect grows as 1/r³, so smaller black holes are more lethal at the horizon than large ones.',
    references: [referenceId('misner-thorne-wheeler-1973')],
  },

  // --- Quantum physics ---------------------------------------------------
  {
    id: glossaryTermId('quantum-state'),
    term: 'Quantum state',
    short:
      'The complete description of what can be known about a quantum system. It is not a list of properties the system has; it is the thing from which the probability of every possible measurement outcome is computed.',
    symbol: '|ψ⟩',
    references: [referenceId('sakurai-2020-modern-qm')],
  },
  {
    id: glossaryTermId('wavefunction'),
    term: 'Wavefunction',
    short:
      'The quantum state written as a function of position. Its squared magnitude gives the probability density for finding the particle at each place — the wavefunction itself is not a physical wave you could measure directly.',
    symbol: 'ψ(x)',
    references: [referenceId('born-1926-probability')],
  },
  {
    id: glossaryTermId('probability-amplitude'),
    term: 'Probability amplitude',
    short:
      'A complex number attached to each way an outcome can happen. Amplitudes for indistinguishable paths are added and then squared, which is why they can cancel — the source of interference, and the reason quantum probability is not ordinary probability.',
    references: [referenceId('born-1926-probability')],
  },
  {
    id: glossaryTermId('planck-constant'),
    term: 'Planck constant',
    short:
      'The constant that sets the scale of quantum effects, exactly 6.62607015 × 10⁻³⁴ J·s since the 2019 SI redefinition. Where an action is large compared with h, classical physics is an excellent approximation.',
    symbol: 'h',
    unit: 'J·s',
    references: [referenceId('codata-2018'), referenceId('planck-1901-radiation')],
  },
  {
    id: glossaryTermId('observable'),
    term: 'Observable',
    short:
      'A measurable quantity, represented in quantum mechanics by a Hermitian operator. Its eigenvalues are the possible results; two observables whose operators do not commute cannot both have sharp values in the same state.',
    references: [referenceId('sakurai-2020-modern-qm')],
  },
  {
    id: glossaryTermId('spin'),
    term: 'Spin',
    short:
      'An intrinsic angular momentum carried by particles, quantised in units of ħ/2. Nothing is physically rotating: spin is a property with no classical counterpart, and it is what divides all particles into fermions and bosons.',
    symbol: 's',
    references: [referenceId('stern-gerlach-1922')],
  },
  {
    id: glossaryTermId('entanglement'),
    term: 'Entanglement',
    short:
      'A joint state of two or more systems that cannot be written as a state for each one separately. Measurements on the parts are correlated more strongly than any local pre-arranged agreement allows — and no message can be sent this way.',
    references: [referenceId('bell-1964'), referenceId('hensen-2015-loophole-free')],
  },
  {
    id: glossaryTermId('decoherence'),
    term: 'Decoherence',
    short:
      'The rapid loss of interference when a system becomes entangled with its environment. It explains why large objects look classical without adding anything to the theory — and by itself it does not say why a single outcome occurs.',
    references: [referenceId('zurek-2003-decoherence')],
  },
  {
    id: glossaryTermId('quantum-tunnelling'),
    term: 'Quantum tunnelling',
    short:
      'The passage of a particle through a barrier it does not have the energy to climb. The wavefunction decays exponentially inside the barrier rather than stopping, so a small amplitude survives on the far side.',
    references: [referenceId('gamow-1928-alpha-decay')],
  },
  {
    id: glossaryTermId('quantum-field'),
    term: 'Quantum field',
    short:
      'A quantum system with a value at every point of spacetime. Particles are its quantised excitations: one electron is one unit of excitation of the electron field, which is why all electrons are identical.',
    references: [referenceId('peskin-schroeder-1995')],
  },
  {
    id: glossaryTermId('vacuum-state'),
    term: 'Vacuum state',
    short:
      'The lowest-energy state of a quantum field — the state with no particles. It is not empty in the sense of having nothing happening: field observables have non-zero variance in it, which has measurable consequences.',
    references: [referenceId('peskin-schroeder-1995')],
  },
  {
    id: glossaryTermId('planck-scale'),
    term: 'Planck scale',
    short:
      'The scale built from G, c and ħ alone: about 1.6 × 10⁻³⁵ m and 1.2 × 10¹⁹ GeV. It is where quantum effects on gravity are expected to become unavoidable, and it is roughly 10¹⁵ times beyond current collider energies.',
    references: [referenceId('codata-2018'), referenceId('kiefer-2012-quantum-gravity')],
  },
  {
    id: glossaryTermId('gauge-symmetry'),
    term: 'Gauge symmetry',
    short:
      'A redundancy in how a field is described that, when required to hold independently at every point, forces the existence of specific force-carrying fields. The Standard Model’s three interactions all arise this way.',
    references: [referenceId('peskin-schroeder-1995')],
  },
  // ---------------------------------------------------------------------------
  // Phase 5 — Stars & Galaxies
  // ---------------------------------------------------------------------------
  {
    id: glossaryTermId('luminosity'),
    term: 'Luminosity',
    short:
      'The total power a star radiates in all directions, across all wavelengths — energy per second, not brightness as seen from Earth. Apparent brightness depends on distance; luminosity does not.',
    symbol: 'L',
    unit: 'watts (or solar luminosities, L☉ = 3.828 × 10²⁶ W)',
    references: [referenceId('iau-2015-nominal-constants')],
  },
  {
    id: glossaryTermId('effective-temperature'),
    term: 'Effective temperature',
    aliases: ['surface temperature'],
    short:
      'The temperature of the ideal blackbody that would radiate the same power per unit area as the star does. A star has no solid surface, so this is a defined quantity rather than a temperature you could touch.',
    symbol: 'T_eff',
    unit: 'kelvin',
    references: [referenceId('pecaut-mamajek-2013-stellar-scale')],
  },
  {
    id: glossaryTermId('hydrostatic-equilibrium'),
    term: 'Hydrostatic equilibrium',
    short:
      'The condition in which the outward pressure gradient at every depth inside a star balances the inward weight of the material above it. A star that satisfies it neither collapses nor expands.',
    references: [referenceId('eddington-1926-internal-constitution')],
  },
  {
    id: glossaryTermId('main-sequence'),
    term: 'Main sequence',
    short:
      'The long phase of a star’s life during which it fuses hydrogen into helium in its core. Most stars are on it at any moment, because it lasts far longer than anything that follows.',
    references: [referenceId('gaia-2018-hr-diagram')],
  },
  {
    id: glossaryTermId('hr-diagram'),
    term: 'Hertzsprung–Russell diagram',
    aliases: ['HR diagram', 'colour–magnitude diagram'],
    short:
      'A plot of stellar luminosity against surface temperature. Stars do not fill it evenly: they cluster into a diagonal main sequence, a giant branch and a white-dwarf sequence, and those groupings are what stellar evolution has to explain.',
    references: [referenceId('gaia-2018-hr-diagram')],
  },
  {
    id: glossaryTermId('molecular-cloud'),
    term: 'Molecular cloud',
    short:
      'A cold, dense region of interstellar gas — mostly molecular hydrogen, around 10 to 20 kelvin — where gravity can overcome pressure and stars form. Dust inside it blocks visible light, which is why these regions look like dark patches.',
    references: [referenceId('draine-2011-ism')],
  },
  {
    id: glossaryTermId('protostar'),
    term: 'Protostar',
    short:
      'A collapsing clump of cloud material that already shines from the heat of its own contraction but has not yet started sustained hydrogen fusion in its core.',
    references: [referenceId('mckee-ostriker-2007-star-formation')],
  },
  {
    id: glossaryTermId('interstellar-medium'),
    term: 'Interstellar medium',
    aliases: ['ISM'],
    short:
      'The gas and dust between the stars of a galaxy. It is the material stars form out of, and the material stars return enriched when they die.',
    references: [referenceId('draine-2011-ism')],
  },
  {
    id: glossaryTermId('metallicity'),
    term: 'Metallicity',
    short:
      'In astronomy, the proportion of a star’s material heavier than helium. "Metal" here means every element from lithium upward, including carbon, oxygen and nitrogen — a usage with nothing to do with chemistry’s metals.',
    symbol: 'Z',
    references: [referenceId('asplund-2021-solar-composition')],
  },
  {
    id: glossaryTermId('degeneracy-pressure'),
    term: 'Degeneracy pressure',
    short:
      'A pressure arising because identical fermions cannot share a quantum state, so compressing them forces some into high-momentum states. It does not depend on temperature, which is why a cooling white dwarf does not shrink.',
    relatedTerms: [glossaryTermId('spin')],
    references: [referenceId('chandrasekhar-1931')],
  },
  {
    id: glossaryTermId('chandrasekhar-limit'),
    term: 'Chandrasekhar limit',
    short:
      'The maximum mass a white dwarf can have and still be held up by electron degeneracy pressure — about 1.4 solar masses for a typical carbon–oxygen composition. Above it, no stable white dwarf exists.',
    symbol: 'M_Ch',
    references: [referenceId('chandrasekhar-1931')],
  },
  {
    id: glossaryTermId('white-dwarf'),
    term: 'White dwarf',
    short:
      'The exposed, cooling core left behind by a low- or intermediate-mass star: roughly the mass of the Sun in the volume of the Earth, supported by electron degeneracy pressure rather than by fusion.',
    references: [referenceId('pons-2005-white-dwarf-cooling')],
  },
  {
    id: glossaryTermId('neutron-star'),
    term: 'Neutron star',
    short:
      'The remnant of a massive star’s collapsed core: about 1.4 to 2 solar masses within a radius of roughly 11 to 13 kilometres, supported by neutron degeneracy pressure and the strong nuclear force.',
    references: [referenceId('ozel-freire-2016-neutron-stars')],
  },
  {
    id: glossaryTermId('pulsar'),
    term: 'Pulsar',
    short:
      'A rotating, magnetised neutron star whose beamed radiation sweeps past Earth once per rotation, producing pulses of extraordinary regularity.',
    references: [referenceId('hewish-1968-pulsar')],
  },
  {
    id: glossaryTermId('supernova'),
    term: 'Supernova',
    aliases: ['supernovae'],
    short:
      'The explosive destruction or disruption of a star. Core-collapse supernovae end massive stars when their iron cores implode; thermonuclear (Type Ia) supernovae destroy white dwarfs pushed past stability.',
    references: [referenceId('woosley-2002-massive-stars')],
  },
  {
    id: glossaryTermId('binding-energy'),
    term: 'Binding energy per nucleon',
    short:
      'The energy released per proton or neutron when a nucleus is assembled from free nucleons. It peaks near iron-56 and nickel-62, which is why fusion releases energy below iron and costs energy above it.',
    references: [referenceId('audi-2021-atomic-mass')],
  },
  {
    id: glossaryTermId('r-process'),
    term: 'r-process',
    aliases: ['rapid neutron capture'],
    short:
      'Rapid neutron capture: nuclei absorb neutrons far faster than they can beta-decay, building very heavy elements. Neutron-star mergers are a confirmed site; whether some supernovae also contribute is still being worked out.',
    references: [referenceId('watson-2019-kilonova-strontium')],
  },
  {
    id: glossaryTermId('s-process'),
    term: 's-process',
    aliases: ['slow neutron capture'],
    short:
      'Slow neutron capture: nuclei absorb neutrons slowly enough that unstable ones decay between captures. It happens mainly in asymptotic giant branch stars and produces roughly half the elements heavier than iron.',
    references: [referenceId('herwig-2005-agb')],
  },
  {
    id: glossaryTermId('initial-mass-function'),
    term: 'Initial mass function',
    aliases: ['IMF'],
    short:
      'The distribution of masses with which stars are born. It is steeply weighted toward low masses: for every star above 10 solar masses, hundreds of smaller ones form.',
    references: [referenceId('kroupa-2001-imf')],
  },
  {
    id: glossaryTermId('stellar-population'),
    term: 'Stellar population',
    aliases: ['Population I', 'Population II', 'Population III'],
    short:
      'A grouping of stars by metallicity and age. Population I stars are metal-rich and young, Population II metal-poor and old, and Population III the hypothesised first generation formed from pristine gas — never yet observed individually.',
    references: [referenceId('beers-christlieb-2005-metal-poor')],
  },
  {
    id: glossaryTermId('galactic-halo'),
    term: 'Galactic halo',
    short:
      'The roughly spherical region surrounding a galaxy’s disk, containing old stars, globular clusters, hot diffuse gas, and — inferred from dynamics — most of the galaxy’s mass in the form of dark matter.',
    references: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
  },
  {
    id: glossaryTermId('agn'),
    term: 'Active galactic nucleus',
    aliases: ['AGN', 'quasar'],
    short:
      'A galactic centre whose supermassive black hole is accreting rapidly enough to outshine the rest of the galaxy. The energy it releases can heat and expel surrounding gas.',
    references: [referenceId('fabian-2012-agn-feedback')],
  },
  {
    id: glossaryTermId('standard-candle'),
    term: 'Standard candle',
    short:
      'An object whose intrinsic luminosity can be determined independently, so that its apparent brightness gives its distance. Cepheid variables and Type Ia supernovae are the principal examples.',
    references: [referenceId('leavitt-1912-cepheids')],
  },
  {
    id: glossaryTermId('parallax'),
    term: 'Parallax',
    short:
      'The small annual shift in a nearby star’s apparent position caused by Earth’s motion around the Sun. It is the only direct geometric measurement of stellar distance, and the foundation of every rung above it.',
    symbol: 'p',
    unit: 'arcseconds',
    references: [referenceId('bessel-1838-parallax'), referenceId('gaia-2021-edr3-parallax')],
  },
  {
    id: glossaryTermId('parsec'),
    term: 'Parsec',
    short:
      'The distance at which one astronomical unit subtends one arcsecond — about 3.26 light-years. Defined so that distance in parsecs is one divided by the parallax in arcseconds.',
    symbol: 'pc',
    unit: 'distance',
    references: [referenceId('iau-2015-nominal-constants')],
  },
  {
    id: glossaryTermId('spectroscopy'),
    term: 'Spectroscopy',
    short:
      'Spreading light into its component wavelengths and reading the pattern of bright and dark lines. It reveals what an object is made of, how hot it is, how fast it is moving, and often how massive it is.',
    references: [
      referenceId('fraunhofer-1817-lines'),
      referenceId('payne-1925-stellar-atmospheres'),
    ],
  },
  {
    id: glossaryTermId('protoplanetary-disk'),
    term: 'Protoplanetary disk',
    short:
      'The rotating disk of gas and dust left around a young star after its formation. Planets are built from its material, and rings and gaps have now been imaged directly in many such disks.',
    references: [referenceId('andrews-2018-dsharp')],
  },
  // ---------------------------------------------------------------------------
  // Phase 7 — Earth, and the Origin & Evolution of Life
  // ---------------------------------------------------------------------------
  {
    id: glossaryTermId('accretion'),
    term: 'Accretion',
    short:
      'The growth of a body by collecting smaller material — dust into pebbles, pebbles into boulders, boulders into planets. It is how Earth was assembled, and it took tens of millions of years.',
    references: [referenceId('chambers-2004-accretion')],
  },
  {
    id: glossaryTermId('planetesimal'),
    term: 'Planetesimal',
    short:
      'A solid body roughly a kilometre or more across in a young planetary disk, large enough for its own gravity to matter. Planetesimals are the building blocks that collide to make planets.',
    references: [referenceId('chambers-2004-accretion')],
  },
  {
    id: glossaryTermId('differentiation'),
    term: 'Differentiation',
    short:
      'The separation of a planet into layers by density — iron sinking to form a core, lighter silicates floating up to form a mantle and crust. It happens once a body is hot enough to melt.',
    references: [referenceId('kleine-2009-hf-w')],
  },
  {
    id: glossaryTermId('magma-ocean'),
    term: 'Magma ocean',
    short:
      'A global layer of molten rock, hundreds of kilometres deep, produced on the early Earth by accretional heating and giant impacts. It is where differentiation happened.',
    references: [referenceId('elkins-tanton-2012-magma-ocean')],
  },
  {
    id: glossaryTermId('hadean'),
    term: 'Hadean',
    short:
      'Earth’s first geological eon, from formation about 4.54 billion years ago to roughly 4.0 billion years ago. Named for its supposed hellishness, though the evidence now suggests it cooled faster than that name implies.',
    references: [referenceId('wilde-2001-zircon')],
  },
  {
    id: glossaryTermId('archean'),
    term: 'Archean',
    short:
      'The eon from about 4.0 to 2.5 billion years ago: an Earth with oceans, continents and microbial life, but essentially no free oxygen in the air.',
    references: [referenceId('catling-zahnle-2020-atmosphere')],
  },
  {
    id: glossaryTermId('zircon'),
    term: 'Zircon',
    short:
      'A tough crystal of zirconium silicate that survives when its parent rock does not, and that traps uranium while excluding lead — which makes it a precise clock. The oldest known zircons are 4.4 billion years old.',
    references: [referenceId('valley-2014-hadean-zircon')],
  },
  {
    id: glossaryTermId('outgassing'),
    term: 'Outgassing',
    short:
      'The release of gases dissolved in molten rock as it rises and the pressure drops — the main way a young planet builds an atmosphere from the inside.',
    references: [referenceId('zahnle-2007-early-earth')],
  },
  {
    id: glossaryTermId('plate-tectonics'),
    term: 'Plate tectonics',
    short:
      'The theory that Earth’s rigid outer shell is broken into plates that move over the hotter, slowly flowing mantle beneath, at speeds of a few centimetres a year.',
    references: [referenceId('wessel-muller-2007-tectonics')],
  },
  {
    id: glossaryTermId('subduction'),
    term: 'Subduction',
    short:
      'The process by which one tectonic plate sinks beneath another and returns to the mantle. It is where deep earthquakes, most explosive volcanoes and the recycling of the seafloor happen.',
    references: [referenceId('wessel-muller-2007-tectonics')],
  },
  {
    id: glossaryTermId('mantle-convection'),
    term: 'Mantle convection',
    short:
      'The slow overturning of Earth’s rocky mantle, which is solid but deforms like extremely stiff putty over millions of years. It is the engine that moves the plates.',
    references: [referenceId('dziewonski-anderson-1981-prem')],
  },
  {
    id: glossaryTermId('geodynamo'),
    term: 'Geodynamo',
    short:
      'The mechanism that generates Earth’s magnetic field: convecting liquid iron in the outer core, stirred by heat and rotation, sustaining electric currents that sustain the field.',
    references: [referenceId('glatzmaier-roberts-1995-dynamo')],
  },
  {
    id: glossaryTermId('magnetosphere'),
    term: 'Magnetosphere',
    short:
      'The region around Earth where its magnetic field dominates over the solar wind, deflecting most charged particles around the planet rather than into the atmosphere.',
    references: [referenceId('glatzmaier-roberts-1995-dynamo')],
  },
  {
    id: glossaryTermId('greenhouse-effect'),
    term: 'Greenhouse effect',
    short:
      'The warming produced when atmospheric gases absorb outgoing infrared radiation and re-radiate part of it downward. Without it Earth’s surface would average about −18 °C rather than about +15 °C.',
    references: [referenceId('ipcc-2021-ar6-wg1')],
  },
  {
    id: glossaryTermId('albedo'),
    term: 'Albedo',
    short:
      'The fraction of incoming sunlight a surface reflects. Fresh snow reflects most of it; open ocean reflects almost none — which is why ice and climate feed back on each other.',
    references: [referenceId('ipcc-2021-ar6-wg1')],
  },
  {
    id: glossaryTermId('silicate-weathering'),
    term: 'Silicate weathering',
    short:
      'The chemical breakdown of rock by rain and dissolved carbon dioxide, which locks carbon into carbonate minerals. It runs faster when Earth is warm, which makes it a natural thermostat.',
    references: [referenceId('walker-1981-thermostat')],
  },
  {
    id: glossaryTermId('banded-iron-formation'),
    term: 'Banded iron formation',
    short:
      'Layered sedimentary rock rich in iron oxides, laid down mostly between 2.5 and 1.8 billion years ago when dissolved iron in the oceans met the first free oxygen and precipitated out.',
    references: [referenceId('holland-2006-goe')],
  },
  {
    id: glossaryTermId('stromatolite'),
    term: 'Stromatolite',
    short:
      'A layered mound built by mats of microbes trapping sediment. Living examples still form in a few places, which is what makes ancient ones interpretable — and still argued about.',
    references: [referenceId('schopf-2018-microfossils')],
  },
  {
    id: glossaryTermId('abiogenesis'),
    term: 'Abiogenesis',
    short:
      'The origin of life from non-living chemistry. It refers to a historical event whose pathway is not known, and is a separate question from how life evolved once it existed.',
    references: [referenceId('benner-2010-defining-life')],
  },
  {
    id: glossaryTermId('prebiotic-chemistry'),
    term: 'Prebiotic chemistry',
    short:
      'Chemistry that could plausibly have occurred on the early Earth before life, producing the molecules life uses. Showing a reaction is possible is not the same as showing it happened.',
    references: [referenceId('patel-2015-cyanosulfidic')],
  },
  {
    id: glossaryTermId('ribozyme'),
    term: 'Ribozyme',
    short:
      'An RNA molecule that acts as a catalyst. Their discovery mattered because it showed one kind of molecule can both carry information and do chemistry.',
    references: [referenceId('kruger-1982-ribozyme')],
  },
  {
    id: glossaryTermId('rna-world'),
    term: 'RNA world',
    short:
      'The hypothesis that an early stage of life used RNA for both heredity and catalysis, before DNA and proteins divided the labour. Strongly suggestive, not established.',
    references: [referenceId('robertson-joyce-2012-rna-world')],
  },
  {
    id: glossaryTermId('protocell'),
    term: 'Protocell',
    short:
      'A simple compartment — typically a fatty-acid vesicle — that can grow and divide, used in the laboratory as a model of what the first cells might have been before biological machinery existed.',
    references: [referenceId('joyce-szostak-2018-protocells')],
  },
  {
    id: glossaryTermId('amphiphile'),
    term: 'Amphiphile',
    short:
      'A molecule with a water-loving end and a water-avoiding end. Put enough of them in water and they arrange themselves into sheets and spheres without being told to — the basis of every membrane.',
    references: [referenceId('chen-walde-2010-vesicles')],
  },
  {
    id: glossaryTermId('chemiosmosis'),
    term: 'Chemiosmosis',
    short:
      'Storing energy as a difference in proton concentration across a membrane, then letting protons flow back through a turbine-like enzyme to make ATP. Every domain of life does this.',
    references: [referenceId('mitchell-1961-chemiosmosis')],
  },
  {
    id: glossaryTermId('atp'),
    term: 'ATP',
    short:
      'Adenosine triphosphate: the molecule cells use to carry energy from where it is released to where it is needed. A human body turns over roughly its own weight in ATP each day, recycling the same molecules constantly.',
    references: [referenceId('mitchell-1961-chemiosmosis')],
  },
  {
    id: glossaryTermId('luca'),
    term: 'LUCA',
    aliases: ['last universal common ancestor'],
    short:
      'The last universal common ancestor: the most recent organism from which all life alive today descends. Not the first life — an already-sophisticated cell with a genetic code, membranes and metabolism.',
    references: [referenceId('weiss-2016-luca')],
  },
  {
    id: glossaryTermId('prokaryote'),
    term: 'Prokaryote',
    short:
      'A cell without a nucleus or membrane-bound organelles — bacteria and archaea. Prokaryotes are not primitive failures; they are the most abundant and metabolically inventive organisms on Earth.',
    references: [referenceId('woese-1990-three-domains')],
  },
  {
    id: glossaryTermId('eukaryote'),
    term: 'Eukaryote',
    short:
      'A cell with a nucleus and internal compartments, including mitochondria. Every animal, plant, fungus and alga is one, and the whole group appears to descend from a single ancient merger.',
    references: [referenceId('roger-2017-mitochondria')],
  },
  {
    id: glossaryTermId('endosymbiosis'),
    term: 'Endosymbiosis',
    short:
      'One cell living inside another and eventually becoming part of it. Mitochondria and chloroplasts were once free-living bacteria, and still carry their own DNA.',
    references: [referenceId('sagan-margulis-1967-endosymbiosis')],
  },
  {
    id: glossaryTermId('cyanobacteria'),
    term: 'Cyanobacteria',
    short:
      'The bacteria that invented oxygen-producing photosynthesis. They changed the composition of the atmosphere, and their descendants became the chloroplasts inside every plant cell.',
    references: [referenceId('fischer-2016-oxygenic')],
  },
  {
    id: glossaryTermId('photosynthesis'),
    term: 'Photosynthesis',
    short:
      'Using light energy to build sugars from carbon dioxide. The oxygen-producing version splits water and releases oxygen as waste — which is where nearly all the oxygen you breathe came from.',
    references: [referenceId('blankenship-2010-photosynthesis')],
  },
  {
    id: glossaryTermId('great-oxidation-event'),
    term: 'Great Oxidation Event',
    aliases: ['GOE'],
    short:
      'The rise of free oxygen in Earth’s atmosphere around 2.4 billion years ago — the largest chemical change in the planet’s history, and a by-product of one metabolic innovation.',
    references: [referenceId('lyons-2014-oxygen-rise')],
  },
  {
    id: glossaryTermId('natural-selection'),
    term: 'Natural selection',
    short:
      'A process, not an agent: when inherited variants differ in how well they survive and reproduce in a given environment, the more successful variants become more common. Nothing chooses.',
    references: [referenceId('darwin-1859')],
  },
  {
    id: glossaryTermId('fitness'),
    term: 'Fitness',
    short:
      'In evolutionary biology, expected reproductive success in a particular environment — not strength, health or superiority. A variant can be fit in one place and unfit a kilometre away.',
    references: [referenceId('mayr-1982-growth-biology')],
  },
  {
    id: glossaryTermId('adaptation'),
    term: 'Adaptation',
    short:
      'A trait shaped by natural selection because it improved reproductive success. Not every useful trait is one, and not every trait is useful.',
    references: [referenceId('gould-lewontin-1979-spandrels')],
  },
  {
    id: glossaryTermId('common-ancestry'),
    term: 'Common ancestry',
    short:
      'The observation that all known life shares descent from earlier populations, evidenced by a shared genetic code, shared molecular machinery and nested patterns of similarity.',
    references: [referenceId('hug-2016-tree-of-life')],
  },
  {
    id: glossaryTermId('convergent-evolution'),
    term: 'Convergent evolution',
    short:
      'Unrelated lineages independently arriving at similar solutions — eyes, wings, streamlined bodies — because physics and ecology present the same problems repeatedly.',
    references: [referenceId('losos-2011-convergence')],
  },
  {
    id: glossaryTermId('ecological-niche'),
    term: 'Ecological niche',
    short:
      'The full set of conditions and resources a species can use, and the role it plays in its community. Not a place — a way of making a living.',
    references: [referenceId('hutchinson-1957-niche')],
  },
  {
    id: glossaryTermId('trophic-level'),
    term: 'Trophic level',
    short:
      'A position in a food chain, counted by how many steps removed from the original energy source an organism feeds. Roughly ninety percent of the energy is lost at each step.',
    references: [referenceId('lindeman-1942-trophic')],
  },
  {
    id: glossaryTermId('keystone-species'),
    term: 'Keystone species',
    short:
      'A species whose effect on its ecosystem is far larger than its abundance suggests. Remove it and the community reorganises — which is how the concept was discovered, by removal experiments.',
    references: [referenceId('paine-1966-keystone')],
  },
  {
    id: glossaryTermId('coevolution'),
    term: 'Coevolution',
    short:
      'Two or more species acting as each other’s selection pressure, so that change in one drives change in the other — in conflict, as with predators and prey, or in partnership.',
    references: [referenceId('vermeij-1994-arms-race')],
  },
  {
    id: glossaryTermId('symbiosis'),
    term: 'Symbiosis',
    short:
      'A persistent close association between different species. It covers mutual benefit, one-sided benefit and outright parasitism — the term describes intimacy, not friendliness.',
    references: [referenceId('douglas-2010-symbiosis')],
  },
  {
    id: glossaryTermId('biodiversity'),
    term: 'Biodiversity',
    short:
      'The variety of life at every level: genes within populations, species within communities, and ecosystems within regions. It is measured in several incompatible ways, which is worth knowing when comparing numbers.',
    references: [referenceId('mora-2011-species')],
  },
  {
    id: glossaryTermId('mass-extinction'),
    term: 'Mass extinction',
    short:
      'A short interval in which a large fraction of species disappears worldwide and across many groups at once. Five are conventionally recognised in the last 540 million years.',
    references: [referenceId('raup-sepkoski-1982-extinctions')],
  },
  {
    id: glossaryTermId('biosphere'),
    term: 'Biosphere',
    short:
      'The whole of Earth’s living matter together with the parts of the air, water and rock it occupies and exchanges material with. It is thin, and it is chemically enormous in its effects.',
    references: [referenceId('bar-on-2018-biomass')],
  },
  {
    id: glossaryTermId('niche-construction'),
    term: 'Niche construction',
    short:
      'Organisms altering their own environment — burrows, dams, oxygen, soil — and thereby altering the selection pressures acting on themselves and their descendants.',
    references: [referenceId('odling-smee-2003-niche-construction')],
  },
  {
    id: glossaryTermId('horizontal-gene-transfer'),
    term: 'Horizontal gene transfer',
    short:
      'Genes moving between organisms other than from parent to offspring. It is common among microbes, and it is why the deepest part of the tree of life is better described as a network.',
    references: [referenceId('doolittle-1999-lateral')],
  },

  // Phase 8 — Human Evolution, Scientific Lens.
  {
    id: glossaryTermId('hominin'),
    term: 'Hominin',
    aliases: ['hominins', 'Hominini'],
    short:
      'Humans and every extinct species closer to us than to chimpanzees. It is a statement about which side of a branching point a species falls on, not about how human-like it looked.',
    references: [referenceId('wood-boyle-2016-hominin-taxonomy')],
  },
  {
    id: glossaryTermId('hominid'),
    term: 'Hominid',
    aliases: ['hominids', 'Hominidae'],
    short:
      'The great ape family: orangutans, gorillas, chimpanzees, bonobos and humans, living and extinct. Older books use it to mean what "hominin" means now, which is a common source of confusion.',
    references: [referenceId('wood-boyle-2016-hominin-taxonomy')],
  },
  {
    id: glossaryTermId('bipedalism'),
    term: 'Bipedalism',
    aliases: ['bipedal', 'obligate bipedalism'],
    short:
      'Habitual walking on two legs. Many animals do it occasionally; the hominin version is obligate, meaning the skeleton has been rebuilt around it and is no longer efficient on four limbs.',
    references: [referenceId('lovejoy-2005-pelvis')],
  },
  {
    id: glossaryTermId('mosaic-evolution'),
    term: 'Mosaic evolution',
    short:
      'Different parts of an organism changing at different rates, so a single fossil can have a modern-looking foot and an ape-like shoulder. It is the normal pattern, and it is why "transitional form" is a misleading phrase.',
    references: [referenceId('kivell-2011-sediba-hand')],
  },
  {
    id: glossaryTermId('taphonomy'),
    term: 'Taphonomy',
    short:
      'The study of what happens to remains between death and discovery. It is how a fossil assemblage is corrected for the fact that most bodies leave no trace at all.',
    references: [referenceId('behrensmeyer-1978-taphonomy')],
  },
  {
    id: glossaryTermId('endocast'),
    term: 'Endocast',
    short:
      'A cast of the inside of a braincase, natural or digital. It records brain size and the coarse shape of the surface, and almost nothing about internal organisation.',
    references: [referenceId('neubauer-2018-globularity')],
  },
  {
    id: glossaryTermId('encephalization'),
    term: 'Encephalization',
    aliases: ['encephalization quotient', 'EQ'],
    short:
      'Brain size relative to what body size predicts. Useful for comparing species of different sizes, and routinely over-read: it is a ratio, not a measure of capability.',
    references: [referenceId('isler-vanschaik-2009-expensive-brain')],
  },
  {
    id: glossaryTermId('knapping'),
    term: 'Knapping',
    aliases: ['flintknapping', 'flaking'],
    short:
      'Striking stone to detach sharp flakes. Doing it deliberately requires reading the geometry of the core, and the debris it leaves is often more informative than the finished tool.',
    references: [referenceId('stout-2011-toolmaking-brain')],
  },
  {
    id: glossaryTermId('oldowan'),
    term: 'Oldowan',
    short:
      'The earliest widely recognised stone technology: cores struck to produce sharp flakes, from about 2.6 million years ago. Simple in form, and not simple to make.',
    references: [referenceId('semaw-1997-gona')],
  },
  {
    id: glossaryTermId('acheulean'),
    term: 'Acheulean',
    aliases: ['Acheulian'],
    short:
      'The stone industry defined by large bifacially worked handaxes, from about 1.76 million years ago. It persisted with remarkably little change for over a million years.',
    references: [referenceId('lepre-2011-acheulean')],
  },
  {
    id: glossaryTermId('middle-stone-age'),
    term: 'Middle Stone Age',
    aliases: ['MSA'],
    short:
      'The African technological period from roughly 300,000 to 30,000 years ago, associated with prepared-core methods, pigment use and the earliest known ornaments.',
    references: [referenceId('brooks-2018-olorgesailie')],
  },
  {
    id: glossaryTermId('introgression'),
    term: 'Introgression',
    aliases: ['archaic introgression'],
    short:
      'Genetic material entering one population from another through interbreeding and then persisting. Several human populations carry Neanderthal and Denisovan sequence this way.',
    references: [referenceId('sankararaman-2014-neandertal-ancestry')],
  },
  {
    id: glossaryTermId('admixture'),
    term: 'Admixture',
    short:
      'The mixing of previously separated populations. It is the normal condition of human history rather than an exception to it.',
    references: [referenceId('mallick-2016-simons')],
  },
  {
    id: glossaryTermId('ancient-dna'),
    term: 'Ancient DNA',
    aliases: ['aDNA'],
    short:
      'DNA recovered from remains or sediment rather than from a living organism. It is short, chemically damaged and easily contaminated, and that damage pattern is what authenticates it.',
    references: [referenceId('dabney-2013-adna-methods')],
  },
  {
    id: glossaryTermId('pseudogene'),
    term: 'Pseudogene',
    short:
      'A gene that has been inactivated by mutation but is still recognisable in the genome. Shared broken genes in the same broken way are strong evidence of shared ancestry.',
    references: [referenceId('chou-1998-cmah')],
  },
  {
    id: glossaryTermId('endogenous-retrovirus'),
    term: 'Endogenous retrovirus',
    aliases: ['ERV'],
    short:
      'The remains of a viral genome inserted into a germline cell and inherited ever since. Two species carrying the same insertion at the same position inherited it from a common ancestor.',
    references: [referenceId('johnson-2019-endogenous-retroviruses')],
  },
  {
    id: glossaryTermId('genetic-drift'),
    term: 'Genetic drift',
    short:
      'Change in how common a gene variant is, caused by the randomness of who reproduces rather than by any advantage. It matters most in small populations, where chance easily outweighs selection.',
    references: [referenceId('stearns-2010-measuring-selection')],
  },
  {
    id: glossaryTermId('gene-flow'),
    term: 'Gene flow',
    short:
      'Genes moving between populations as individuals move and have children. Sustained gene flow keeps populations from diverging; its absence is what lets them.',
    references: [referenceId('rosenberg-2002-population-structure')],
  },
  {
    id: glossaryTermId('founder-effect'),
    term: 'Founder effect',
    short:
      'The loss of variation when a new population starts from a small number of individuals. Repeated over and over, it is why genetic diversity declines with distance from Africa.',
    references: [referenceId('ramachandran-2005-serial-founder')],
  },
  {
    id: glossaryTermId('selective-sweep'),
    term: 'Selective sweep',
    short:
      'The signature left when a strongly favoured variant spreads quickly, dragging neighbouring stretches of chromosome with it. It is how recent selection is detected in living genomes.',
    references: [referenceId('sabeti-2007-genome-wide-selection')],
  },
  {
    id: glossaryTermId('lactase-persistence'),
    term: 'Lactase persistence',
    short:
      'Continuing to produce the enzyme that digests milk sugar into adulthood. It evolved independently several times, and the majority of adults worldwide do not have it.',
    references: [referenceId('tishkoff-2007-lactase')],
  },
  {
    id: glossaryTermId('cumulative-culture'),
    term: 'Cumulative culture',
    aliases: ['ratchet effect'],
    short:
      'Knowledge that accumulates across generations because each one starts from what the last achieved rather than from scratch. It requires high-fidelity transmission, which is the rare part.',
    references: [referenceId('boyd-richerson-1985-culture')],
  },
  {
    id: glossaryTermId('social-learning'),
    term: 'Social learning',
    short:
      'Acquiring behaviour by observing others rather than by individual trial and error. Widespread among animals; what differs in humans is how accurately it copies.',
    references: [referenceId('whiten-2011-social-learning')],
  },
  {
    id: glossaryTermId('gene-culture-coevolution'),
    term: 'Gene–culture coevolution',
    aliases: ['dual inheritance'],
    short:
      'Culture changing the environment in which genes are selected, and the resulting genetic change feeding back into what culture can do. Dairying and lactase persistence are the standard example.',
    references: [referenceId('laland-2000-gene-culture')],
  },
  {
    id: glossaryTermId('exaptation'),
    term: 'Exaptation',
    short:
      'A structure that now serves a function it was not shaped for. Limbs with digits evolved in water and were later walked on; the term exists to stop us reading current use as original purpose.',
    references: [referenceId('gould-lewontin-1979-spandrels')],
  },
  {
    id: glossaryTermId('vestigial-structure'),
    term: 'Vestigial structure',
    short:
      'A structure reduced from a larger ancestral version. It means diminished relative to an ancestor, not useless: several vestigial structures in humans do measurable work.',
    references: [referenceId('smith-2017-appendix')],
  },
  {
    id: glossaryTermId('dental-microwear'),
    term: 'Dental microwear',
    short:
      'Microscopic scratches and pits on a tooth surface, formed in the last days or weeks of life. It records what an individual actually ate, which is often not what its teeth were built for.',
    references: [referenceId('ungar-sponheimer-2011-diets')],
  },
  {
    id: glossaryTermId('stable-isotope-analysis'),
    term: 'Stable isotope analysis',
    short:
      'Reading diet and environment from the ratios of carbon, nitrogen or oxygen isotopes locked into tissue as it formed. In hominins it distinguishes tree-based foods from grass-based ones.',
    references: [referenceId('sponheimer-2013-isotopes')],
  },
  {
    id: glossaryTermId('radiometric-dating'),
    term: 'Radiometric dating',
    short:
      'Dating material by the steady decay of an unstable isotope within it. Different isotope systems cover different time ranges, and each carries its own assumptions and error bars.',
    references: [referenceId('walker-2005-quaternary-dating')],
  },
  {
    id: glossaryTermId('obstetrical-dilemma'),
    term: 'Obstetrical dilemma',
    short:
      'The proposal that human birth is difficult because a pelvis narrow enough for efficient walking conflicts with a head large enough to be born. The conflict is real; this explanation of it is disputed.',
    references: [referenceId('haeusler-2021-obstetrical-dilemma')],
  },
  {
    id: glossaryTermId('life-history'),
    term: 'Life history',
    short:
      'The schedule of an organism’s life: how fast it grows, when it reproduces, how long it lives. Humans are unusual for a long childhood, late maturity and a long post-reproductive period.',
    references: [referenceId('dean-2001-enamel')],
  },
  {
    id: glossaryTermId('altriciality'),
    term: 'Altriciality',
    short:
      'Being born underdeveloped and dependent. Human infants are helpless for far longer than other ape infants, which shifts a great deal of development into a social environment.',
    references: [referenceId('dunsworth-2012-eem')],
  },
  {
    id: glossaryTermId('domestication'),
    term: 'Domestication',
    short:
      'A population becoming genetically shaped by living with humans. It is a long mutual process, not an act performed on a species at a moment in time.',
    references: [referenceId('larson-2014-domestication-review')],
  },
  {
    id: glossaryTermId('zoonosis'),
    term: 'Zoonosis',
    aliases: ['zoonotic disease'],
    short:
      'A disease that crossed into humans from another animal. Most of the great historical epidemic diseases did so after people began living alongside livestock in dense settlements.',
    references: [referenceId('wolfe-2007-zoonoses')],
  },
  {
    id: glossaryTermId('population-structure'),
    term: 'Population structure',
    short:
      'The pattern of how genetic variation is distributed geographically. In humans it is real, gradual and continuous, with no boundaries where one group ends and another begins.',
    references: [referenceId('rosenberg-2002-population-structure')],
  },
  {
    id: glossaryTermId('clade'),
    term: 'Clade',
    short:
      'An ancestor and all of its descendants, with nothing left out. Groups that leave descendants out — "reptiles" without birds, "apes" without humans — are conveniences, not evolutionary units.',
    references: [referenceId('hug-2016-tree-of-life')],
  },
  {
    id: glossaryTermId('incomplete-lineage-sorting'),
    term: 'Incomplete lineage sorting',
    short:
      'Why different genes in the same genome can give different family trees: variation present in an ancestral population gets sorted between descendant species at random.',
    references: [referenceId('prufer-2012-bonobo')],
  },
  {
    id: glossaryTermId('molecular-clock'),
    term: 'Molecular clock',
    short:
      'Estimating when two lineages split from how many differences have accumulated between them. It is a clock whose rate must itself be measured, and revisions to that rate move the dates.',
    references: [referenceId('scally-durbin-2012-mutation-rate')],
  },

  ...PHILOSOPHY_GLOSSARY,
];

const BY_ID = new Map(GLOSSARY.map((term) => [term.id, term]));

export function getGlossaryTerm(id: GlossaryTerm['id']): GlossaryTerm | undefined {
  return BY_ID.get(id);
}

/** Alphabetical, for the glossary page. */
export function orderedGlossary(): readonly GlossaryTerm[] {
  return [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
}
