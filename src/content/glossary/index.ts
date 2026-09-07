/**
 * Glossary — seed set.
 *
 * Terms are added as the sections that use them are written; `relatedTopics` is
 * filled in at that point. Each definition must stand on its own, because it is
 * rendered in a tooltip with no surrounding context.
 */
import { glossaryTermId, type GlossaryTerm } from '../schema/glossary';
import { referenceId } from '../schema/reference';

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
    short:
      'A quantum system’s ability to be described by a combination of states at once, producing interference effects that no single definite state could explain.',
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
];

const BY_ID = new Map(GLOSSARY.map((term) => [term.id, term]));

export function getGlossaryTerm(id: GlossaryTerm['id']): GlossaryTerm | undefined {
  return BY_ID.get(id);
}

/** Alphabetical, for the glossary page. */
export function orderedGlossary(): readonly GlossaryTerm[] {
  return [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
}
