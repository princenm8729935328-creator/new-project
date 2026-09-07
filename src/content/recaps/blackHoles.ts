/**
 * Recaps for Black Holes.
 *
 * The distractors here are the misconceptions the section spends nineteen
 * topics dismantling: that black holes suck, that they are dense objects, that
 * escape velocity explains the horizon, that the EHT photographed one, that
 * Hawking radiation has been observed, and that the information problem is
 * settled. Every wrong answer below is something a reader might plausibly
 * believe on arriving.
 */
import type { RecapsByTopic } from '../schema/recap';

export const BLACK_HOLE_RECAPS: RecapsByTopic = {
  'what-is-a-black-hole': {
    summary: {
      essential:
        'A black hole is a region of spacetime, not an object. It is curved so steeply that every path leading forward in time leads further in, so nothing — not even light — escapes. Its boundary is the event horizon, and in general relativity the whole thing is described by just three numbers: mass, spin and charge.',
      detailed:
        'Two consequences follow from "region, not object". First, a black hole does not suck: at a given distance its gravity is exactly that of the same mass in any other form, so replacing the Sun with a solar-mass black hole would leave Earth’s orbit untouched. What is different is that you can get close to all that mass, because it is no longer spread across a star. Second, the horizon is defined by where paths lead — a global property of the spacetime — rather than by anything locally present, which is why nothing marks it and why an infalling observer feels nothing on crossing. The no-hair result adds the third piece: whatever formed the black hole leaves no trace in the exterior description beyond mass, angular momentum and charge, and charge is negligible for anything astrophysical.',
    },
    questions: [
      {
        id: 'suction',
        prompt:
          'If the Sun were replaced by a black hole of exactly one solar mass, what would happen to Earth’s orbit?',
        options: [
          { id: 'a', text: 'Earth would be pulled in within days' },
          {
            id: 'b',
            text: 'Nothing would change about the orbit; it would simply go dark',
            correct: true,
          },
          { id: 'c', text: 'Earth would slowly spiral inward over centuries' },
          { id: 'd', text: 'Earth would be flung out of the Solar System' },
        ],
        explanation:
          'Gravity at a given distance depends on the enclosed mass, not on how compact it is. At Earth’s distance the field would be identical. Black holes do not suck; what makes them extreme is that you can approach much closer to the mass than any star would allow.',
      },
      {
        id: 'no-hair',
        prompt:
          'What determines everything about the exterior of a black hole in general relativity?',
        options: [
          { id: 'a', text: 'The composition of the star that formed it' },
          {
            id: 'b',
            text: 'Its mass, angular momentum and electric charge — nothing else',
            correct: true,
          },
          { id: 'c', text: 'Its mass and its age' },
          { id: 'd', text: 'Its mass and the total number of particles that fell in' },
        ],
        explanation:
          'The no-hair theorems establish that a stationary isolated black hole is exhausted by those three numbers. Two black holes of equal mass and spin are identical, whatever they were made from — which is precisely what makes the information problem sharp.',
      },
      {
        id: 'region',
        prompt:
          'Why is "a region of spacetime" a better description than "an extremely dense object"?',
        options: [
          { id: 'a', text: 'Because a black hole has no mass' },
          {
            id: 'b',
            text: 'Because what defines it is where paths lead, not what occupies it — and average density inside the horizon can be lower than air',
            correct: true,
          },
          { id: 'c', text: 'Because it is made of energy rather than matter' },
          { id: 'd', text: 'Because the object inside is too small to be measured' },
        ],
        explanation:
          'The horizon radius is proportional to mass, so mean density falls as mass rises: M87*’s is around 0.4 kg/m³, thinner than air. The horizon is a causal boundary — the set of events from which no signal reaches a distant observer — not a surface of a material body.',
      },
    ],
  },

  'black-hole-formation': {
    summary: {
      essential:
        'The best-understood route is the collapse of a massive star’s core once fusion stops paying. But black holes also grow by accretion and form by merging, and the supermassive ones at galaxy centres appear too early and too large for any of those routes to explain comfortably.',
      detailed:
        'Separate the seed from the growth. A star above roughly 20 solar masses leaves a core above the neutron-star limit of about 2.2 solar masses, and nothing known can hold that up. Merger is a second formation channel in its own right — GW190521 produced a 142-solar-mass black hole that did not exist before the event. Growth by accretion is capped by the Eddington limit, at which outward radiation pressure balances inward gravity, giving an e-folding time of a few tens of millions of years. That cap is what makes billion-solar-mass quasars at 700 million years after the Big Bang a genuine problem: growing one from a stellar remnant needs continuous maximum-rate accretion with no margin. Heavy seeds from direct collapse, runaway stellar collisions, and episodic super-Eddington accretion are all live proposals, and none is established.',
    },
    questions: [
      {
        id: 'why-collapse',
        prompt: 'Why does a massive star’s core collapse once it has built an iron core?',
        options: [
          { id: 'a', text: 'Iron is denser than the lighter elements, so gravity increases' },
          {
            id: 'b',
            text: 'Fusing iron absorbs energy rather than releasing it, so the support that held the core up disappears',
            correct: true,
          },
          { id: 'c', text: 'The magnetic field of iron attracts the outer layers inward' },
          { id: 'd', text: 'Iron atoms cannot resist compression at all' },
        ],
        explanation:
          'A star is a standoff between gravity and pressure maintained by fusion. Iron sits at the peak of nuclear binding energy, so fusing it costs energy instead of releasing it. The pressure source vanishes and the core falls in seconds.',
      },
      {
        id: 'seeds',
        prompt: 'What is the difficulty with explaining the earliest supermassive black holes?',
        options: [
          { id: 'a', text: 'They are more massive than general relativity allows' },
          {
            id: 'b',
            text: 'Billion-solar-mass quasars exist within 700 million years of the Big Bang, leaving barely enough time to grow one even at the maximum sustainable accretion rate',
            correct: true,
          },
          { id: 'c', text: 'No mechanism can form a black hole above a hundred solar masses' },
          { id: 'd', text: 'They are found only in the early Universe and nowhere since' },
        ],
        explanation:
          'The Eddington limit caps how fast accretion can proceed, giving roughly 800 million years to grow from a stellar-mass seed to a billion solar masses with no interruptions. Heavier seeds or periods of super-Eddington accretion would relieve the tension; neither is established.',
      },
      {
        id: 'primordial',
        prompt: 'What is the observational status of primordial black holes?',
        options: [
          { id: 'a', text: 'They have been detected and make up most of dark matter' },
          {
            id: 'b',
            text: 'None has been detected, and they are ruled out as the dominant dark-matter component across most plausible masses',
            correct: true,
          },
          { id: 'c', text: 'They are ruled out entirely by theory' },
          { id: 'd', text: 'They are routinely produced in particle accelerators' },
        ],
        explanation:
          'The hypothesis is serious and well studied, but no primordial black hole has been observed. Microlensing surveys, CMB constraints and gravitational-wave population data bound them tightly without excluding every mass window.',
      },
    ],
  },

  'gravitational-collapse': {
    summary: {
      essential:
        'Every stable object is a standoff between gravity and pressure. Collapse is what happens when pressure loses. Beyond fusion there are two more supports — electron degeneracy pressure up to about 1.4 solar masses, neutron degeneracy up to roughly 2.2 — and beyond those, nothing known holds.',
      detailed:
        'The critical feature is that collapse is a runaway rather than a compression. In ordinary matter, squeezing raises internal pressure faster than the gravitational load, so a new equilibrium is found. In relativistic collapse the pressure itself gravitates — pressure appears alongside energy density in the source of Einstein’s equations — so adding support adds weight. Past a certain compactness, resisting harder makes it worse. Oppenheimer and Snyder followed this through in 1939 for a spherical case, and Penrose showed in 1965 that the singular endpoint does not depend on assuming symmetry. The collapse also has two correct descriptions: finite and short in the falling surface’s own time, asymptotically frozen and exponentially redshifting from far away.',
    },
    questions: [
      {
        id: 'runaway',
        prompt:
          'Why does relativistic collapse not find a new equilibrium the way squeezing a rock does?',
        options: [
          { id: 'a', text: 'Because there is no matter left to provide pressure' },
          {
            id: 'b',
            text: 'Because pressure itself gravitates in general relativity, so adding support adds weight',
            correct: true,
          },
          { id: 'c', text: 'Because gravity becomes repulsive at high density' },
          { id: 'd', text: 'Because the core is spinning too fast to stabilise' },
        ],
        explanation:
          'Pressure appears in the stress–energy tensor alongside energy density, so it sources curvature. Past a certain compactness, increasing the pressure increases the gravitational load faster than it increases the support — the opposite of the Newtonian case.',
      },
      {
        id: 'penrose',
        prompt: 'What did Penrose’s 1965 theorem establish?',
        options: [
          { id: 'a', text: 'That black holes emit radiation' },
          {
            id: 'b',
            text: 'That once a trapped surface forms, a singularity follows under very general conditions — it is not an artefact of assuming perfect symmetry',
            correct: true,
          },
          { id: 'c', text: 'That the singularity is a point of infinite density' },
          { id: 'd', text: 'That collapse can be halted by rotation' },
        ],
        explanation:
          'The natural objection to earlier work was that real stars are lumpy and rotating, so matter might miss the centre and bounce. Penrose used global geometric arguments rather than symmetry assumptions and showed geodesic incompleteness follows regardless.',
      },
      {
        id: 'two-views',
        prompt: 'A distant observer watches a star collapse. What do they see?',
        options: [
          { id: 'a', text: 'The surface crossing the horizon after a short delay' },
          {
            id: 'b',
            text: 'The image slowing, reddening and fading — the crossing is never seen to complete, though the object goes dark almost immediately',
            correct: true,
          },
          { id: 'c', text: 'Nothing at all, because light cannot leave a collapsing star' },
          { id: 'd', text: 'The star bouncing back outward' },
        ],
        explanation:
          'From the surface’s own frame the crossing is finite and quick. From far away the light takes longer and longer to climb out and is redshifted without limit. Both are correct; they are different frames, not competing claims. The fade takes microseconds for a stellar-mass hole.',
      },
    ],
  },

  'event-horizon': {
    summary: {
      essential:
        'The event horizon is the boundary of the region nothing escapes from. For a non-rotating black hole it lies at r = 2GM/c² — 3 km for the Sun’s mass, 9 mm for the Earth’s. Nothing marks it locally: an observer crossing a large black hole’s horizon notices nothing at all.',
      detailed:
        'The escape-velocity story — set √(2GM/r) equal to c and solve — lands on exactly the right radius, and Michell and Laplace used it in the 1780s and 90s. It is worth having and it is wrong about the mechanism. It implies light is thrown up, slows and falls back, and it implies you could still leave slowly under continuous thrust, as a rocket leaves Earth without ever reaching 11.2 km/s. Neither is true. The correct statement is geometric: inside the horizon, decreasing radius becomes a direction in time, so reaching smaller r is as unavoidable as reaching a later moment. Engines change how quickly, never whether. Note also that horizon radius is proportional to mass, so mean density falls as mass rises.',
    },
    questions: [
      {
        id: 'escape-limit',
        prompt:
          'Why can a rocket with unlimited fuel not climb slowly out of an event horizon, the way it can leave Earth without reaching escape velocity?',
        options: [
          { id: 'a', text: 'Because no engine can produce that much thrust' },
          {
            id: 'b',
            text: 'Because inside the horizon there is no outward direction in the future — every available path leads to smaller radius',
            correct: true,
          },
          { id: 'c', text: 'Because gravity there exceeds the strength of any material' },
          { id: 'd', text: 'Because time stops at the horizon' },
        ],
        explanation:
          'The escape-velocity picture is a Newtonian analogy that lands on the right radius by algebraic coincidence. Inside a horizon the radial direction becomes timelike: going inward is as inescapable as going forward in time, and no amount of thrust changes which directions exist.',
      },
      {
        id: 'crossing',
        prompt:
          'What would an astronaut feel on crossing the horizon of a supermassive black hole?',
        options: [
          { id: 'a', text: 'A sharp jolt as they pass through the surface' },
          {
            id: 'b',
            text: 'Nothing — there is no local signature of the horizon at all',
            correct: true,
          },
          { id: 'c', text: 'Instant destruction by tidal forces' },
          { id: 'd', text: 'Their clock stopping' },
        ],
        explanation:
          'All curvature invariants are finite at the horizon, and for a supermassive black hole the tidal forces there are gentle. What changes is entirely about which futures remain available, and the future is not something you can feel at a point.',
      },
      {
        id: 'density',
        prompt:
          'How does average density inside the horizon change as black holes get more massive?',
        options: [
          { id: 'a', text: 'It rises, since more mass is packed in' },
          {
            id: 'b',
            text: 'It falls as 1/M², because radius grows linearly with mass while volume grows as its cube',
            correct: true,
          },
          { id: 'c', text: 'It stays constant for all black holes' },
          { id: 'd', text: 'It rises up to a limit and then plateaus' },
        ],
        explanation:
          'r = 2GM/c² is linear in mass, so volume goes as M³ while mass goes as M. M87*’s mean density comes out below that of air. Density is not what makes something a black hole — compactness relative to its own Schwarzschild radius is.',
      },
    ],
  },

  'spacetime-around-a-black-hole': {
    summary: {
      essential:
        'Near a black hole, the effects familiar from general relativity become extreme rather than subtle. Clocks run slower, light is redshifted, and space is stretched radially. The clearest picture is the light cone: as you approach, the cones tip inward until, at the horizon, outgoing light makes no progress at all.',
      detailed:
        'The time factor is √(1 − r_s/r): about 95% of the distant rate at ten Schwarzschild radii, about 10% at 1.01, and going to zero at the horizon. The redshift of escaping light follows the same factor, which is why the last light from an infalling object stretches away to nothing. The light-cone picture is what explains the horizon without invoking a force: every object moves inside its own light cone, and once the cone points entirely inward there is no outward path to take. This also fixes the meaning of "radius": the r coordinate is defined by circumference over 2π, not by a distance to the centre, because the interior is not a static region a ruler could span. And the funnel imagery from embedding diagrams should be discarded — a black hole has no "down".',
    },
    questions: [
      {
        id: 'cones',
        prompt: 'What does it mean that light cones "tip" near a black hole?',
        options: [
          { id: 'a', text: 'That light travels slower there' },
          {
            id: 'b',
            text: 'That the set of directions an object can move in becomes skewed toward the black hole, until at the horizon outward light makes no progress',
            correct: true,
          },
          { id: 'c', text: 'That light is bent by the accretion disc' },
          { id: 'd', text: 'That time runs backwards inside the horizon' },
        ],
        explanation:
          'Everything moves inside its light cone — that is what a speed limit means. Curvature reorients the cones, so at the horizon the outgoing edge is vertical and inside it the whole cone points inward. This is why "just accelerate harder" cannot work.',
      },
      {
        id: 'radius-meaning',
        prompt: 'What does the r coordinate in the Schwarzschild solution actually measure?',
        options: [
          { id: 'a', text: 'The distance from the centre, measured with a ruler' },
          {
            id: 'b',
            text: 'The circumference of a sphere at that location, divided by 2π',
            correct: true,
          },
          { id: 'c', text: 'The proper time to reach the singularity' },
          { id: 'd', text: 'The distance light travels in one second there' },
        ],
        explanation:
          'Space is stretched radially, so ruler distance between two shells exceeds what their circumferences would suggest in flat geometry. Defining r by circumference sidesteps the problem — and "distance to the centre" is not even well defined, since the interior is not a static region.',
      },
    ],
  },

  singularity: {
    summary: {
      essential:
        'General relativity predicts that collapse ends in a singularity, where curvature becomes infinite and the equations stop returning meaningful answers. That is the theory reporting its own failure, not a description of an object. Nobody knows what is actually there.',
      detailed:
        'Infinities in physics almost always mark the edge of a model’s domain — the infinite self-energy of a point electron and the ultraviolet catastrophe both did, and quantum mechanics resolved both. Penrose’s 1965 theorem removed the easy escape by showing singularity formation is generic once a trapped surface exists, requiring only the null energy condition and no symmetry assumptions. Two further details are usually skipped: in a rotating black hole the classical singularity is a ring rather than a point, and the Kerr interior is thought to be unstable to realistic perturbations anyway; and for a non-rotating hole the singularity is not a place in space but a moment in the future of everything inside, which is why it cannot be avoided by steering. Resolving it requires quantum gravity, at scales roughly 10¹⁵ times beyond LHC energies.',
    },
    questions: [
      {
        id: 'what-it-means',
        prompt:
          'When physicists say a singularity has infinite density, what does that infinity signify?',
        options: [
          { id: 'a', text: 'A measured property of an object at the centre' },
          {
            id: 'b',
            text: 'That the theory has been pushed outside its domain and is no longer describing anything',
            correct: true,
          },
          { id: 'c', text: 'That matter is compressed to the Planck density exactly' },
          { id: 'd', text: 'That the black hole is growing without limit' },
        ],
        explanation:
          'Infinity is not a value a measurement can return. It is what an equation produces when asked a question it cannot answer. The same signal appeared in classical electromagnetism and in black-body radiation, and in both cases marked the entrance to new physics.',
      },
      {
        id: 'not-a-place',
        prompt:
          'Why can an object inside the horizon not steer away from the singularity of a non-rotating black hole?',
        options: [
          { id: 'a', text: 'Because gravity there is too strong to resist' },
          {
            id: 'b',
            text: 'Because the singularity is a moment in its future, not a location in space',
            correct: true,
          },
          { id: 'c', text: 'Because all directions inside point toward the centre of mass' },
          { id: 'd', text: 'Because engines cannot operate inside a horizon' },
        ],
        explanation:
          'Inside the horizon, r becomes a timelike coordinate. Reaching r = 0 is then like reaching next Tuesday: steering does not help, because the destination is not somewhere you are heading, it is when you are heading.',
      },
    ],
  },

  'schwarzschild-black-holes': {
    summary: {
      essential:
        'The Schwarzschild solution describes an idealised non-rotating black hole with a single parameter: mass. From it come three radii worth knowing — the horizon at 2GM/c², the photon sphere at 1.5 times that, and the innermost stable circular orbit at three times that.',
      detailed:
        'The innermost stable circular orbit is the one with the largest observational consequence. In general relativity, unlike in Newtonian gravity, circular orbits below a certain radius are unstable: nudge one inward and it spirals in rather than settling into a smaller circle. That radius sets the inner edge of an accretion disc, and therefore how deep gas can fall while still radiating — which fixes the efficiency of accretion. The shadow radius, √27 GM/c² ≈ 2.6 r_s, is larger than the horizon because rays that would have missed the black hole in flat space are bent into it. No real black hole is exactly Schwarzschild, since anything that forms or feeds one carries angular momentum, but the structure carries over qualitatively and the corrections are modest for slow spin.',
    },
    questions: [
      {
        id: 'isco',
        prompt: 'What is the significance of the innermost stable circular orbit?',
        options: [
          { id: 'a', text: 'It is where the event horizon lies' },
          {
            id: 'b',
            text: 'It is the closest a parcel of gas can circle without spiralling in, so it sets an accretion disc’s inner edge and its efficiency',
            correct: true,
          },
          { id: 'c', text: 'It is where light can orbit the black hole' },
          { id: 'd', text: 'It is the radius at which tidal forces become lethal' },
        ],
        explanation:
          'Newtonian gravity has stable circular orbits at every radius; general relativity does not. Below the ISCO — 3 r_s for a non-rotating black hole — orbits are unstable and matter plunges in, taking its remaining energy with it.',
      },
      {
        id: 'shadow-size',
        prompt: 'Why is a black hole’s shadow larger than its event horizon?',
        options: [
          { id: 'a', text: 'Because the accretion disc obscures the surrounding region' },
          {
            id: 'b',
            text: 'Because gravity bends into the hole rays that would otherwise have passed by',
            correct: true,
          },
          { id: 'c', text: 'Because the image is blurred by the telescope’s resolution' },
          { id: 'd', text: 'Because the horizon expands when the black hole is observed' },
        ],
        explanation:
          'Trace a ray backwards from the telescope. Rays with impact parameter below √27 GM/c² ≈ 2.6 r_s came from the horizon and carry no light, so those pixels are dark — a region substantially larger than the horizon itself.',
      },
    ],
  },

  'rotating-black-holes': {
    summary: {
      essential:
        'Every real black hole spins, because everything that forms one rotates and angular momentum is conserved. Spin adds the ergosphere: a region outside the horizon where spacetime is dragged around so hard that nothing can hold still, and from which energy can be extracted.',
      detailed:
        'Frame dragging is a general prediction for any rotating mass — Gravity Probe B measured it around the Earth at about 37 milliarcseconds per year — and near a rapidly spinning black hole it dominates. Two consequences matter observationally. Energy can be drawn from the rotation: the Penrose process does it mechanically, and the Blandford–Znajek mechanism does it electromagnetically, with magnetic fields threading the horizon carrying rotational energy outward. This is the leading explanation for relativistic jets, and it is why some jets carry more power than the accretion disc radiates. And spin moves the innermost stable circular orbit inward, from 3 r_s to about 0.5 r_s, raising accretion efficiency from roughly 6% to as much as 42% — measurable from disc continuum fitting or the shape of the broadened iron K-α line.',
    },
    questions: [
      {
        id: 'ergosphere',
        prompt: 'What is distinctive about the ergosphere?',
        options: [
          { id: 'a', text: 'It is the region inside the horizon where rotation is fastest' },
          {
            id: 'b',
            text: 'It lies outside the horizon, and within it nothing can remain stationary relative to distant stars — but escape is still possible',
            correct: true,
          },
          { id: 'c', text: 'It is where the singularity is located in a rotating black hole' },
          { id: 'd', text: 'It is the region where Hawking radiation is emitted' },
        ],
        explanation:
          'Frame dragging inside the ergosphere exceeds what any engine can counteract, so you are carried around whatever you do. But it is outside the horizon, so you can still leave — and energy can be extracted from it, which is not true of anything inside.',
      },
      {
        id: 'jets-energy',
        prompt:
          'Some jets carry more power than their accretion disc radiates. What does this imply?',
        options: [
          { id: 'a', text: 'That matter is escaping from inside the horizon' },
          {
            id: 'b',
            text: 'That the energy is being drawn from the black hole’s rotation, not only from accretion',
            correct: true,
          },
          { id: 'c', text: 'That the accretion rate has been underestimated by a large factor' },
          { id: 'd', text: 'That the jets are powered by nuclear fusion in the disc' },
        ],
        explanation:
          'Accretion cannot deliver more than 100% of the infalling rest-mass energy. Blandford and Znajek showed that magnetic fields threaded through a spinning black hole can tap its rotational energy — up to 29% of a maximal Kerr hole’s total mass-energy is in its spin.',
      },
      {
        id: 'spin-efficiency',
        prompt:
          'Why does spin raise the efficiency with which accreting matter is converted into radiation?',
        options: [
          {
            id: 'a',
            text: 'Because rotation heats the disc directly through friction with the horizon',
          },
          {
            id: 'b',
            text: 'Because the innermost stable circular orbit moves inward, so gas can fall deeper while still radiating',
            correct: true,
          },
          { id: 'c', text: 'Because a spinning black hole has a stronger gravitational field' },
          { id: 'd', text: 'Because the ergosphere reflects radiation back outward' },
        ],
        explanation:
          'Efficiency is set by the binding energy at the ISCO, since past that point matter plunges in and takes its energy with it. Moving the ISCO from 3 r_s to about 0.5 r_s raises the radiated fraction from 5.7% to as much as 42%.',
      },
    ],
  },

  'accretion-disks': {
    summary: {
      essential:
        'Gas falling toward a black hole has angular momentum, so it settles into an orbiting disc rather than falling straight in. Friction between rings heats it to millions of kelvin and lets material spiral inward. Accretion is the most efficient sustained energy source known — up to 42% of rest mass, against 0.7% for fusion.',
      detailed:
        'The mechanism has two halves. Friction between neighbouring rings — driven by magnetically-seeded turbulence, not molecular viscosity, which is far too weak — transfers angular momentum outward, letting inner material spiral in and releasing gravitational potential energy as heat. And the depth to which matter can fall while still radiating is set by the innermost stable circular orbit, which depends on spin. Temperature rises steeply inward, so stellar-mass systems peak in X-rays at around 10⁷ K while quasar discs, spread over a vastly larger area, peak in the ultraviolet at around 10⁵ K — which lets an accreting object’s mass be estimated from its spectrum. The essential point to hold onto: every photon comes from the gas. The black hole contributes nothing, and an unfed one is invisible.',
    },
    questions: [
      {
        id: 'efficiency',
        prompt: 'Why is accretion onto a black hole more efficient than nuclear fusion?',
        options: [
          {
            id: 'a',
            text: 'Because the black hole converts matter directly into energy at 100% efficiency',
          },
          {
            id: 'b',
            text: 'Because matter falls very deep into a gravitational well before it is lost, radiating between 6% and 42% of its rest mass',
            correct: true,
          },
          { id: 'c', text: 'Because fusion cannot occur near a black hole' },
          { id: 'd', text: 'Because the disc is hotter than a stellar core' },
        ],
        explanation:
          'Efficiency here means the fraction of rest mass radiated, and it is set by the binding energy at the innermost stable circular orbit. Fusion of hydrogen to helium releases 0.7%; accretion onto a rapidly spinning black hole reaches 42%.',
      },
      {
        id: 'friction',
        prompt: 'Why does gas in a stable orbit around a black hole ever fall in?',
        options: [
          { id: 'a', text: 'The black hole’s gravity gradually overpowers the orbit' },
          {
            id: 'b',
            text: 'Friction between rings orbiting at different speeds transfers angular momentum outward, letting inner material spiral in',
            correct: true,
          },
          { id: 'c', text: 'Radiation pressure pushes it inward' },
          { id: 'd', text: 'The gas loses mass and so cannot maintain its orbit' },
        ],
        explanation:
          'An orbit is stable; something must remove angular momentum for anything to move inward. Turbulence driven by the magnetorotational instability does it, and the energy released in the process is what makes the disc glow.',
      },
      {
        id: 'whose-light',
        prompt: 'Where does the light in an image of an accreting black hole come from?',
        options: [
          { id: 'a', text: 'From the black hole itself, glowing from the heat of compression' },
          {
            id: 'b',
            text: 'Entirely from the surrounding gas and plasma; the black hole emits nothing',
            correct: true,
          },
          { id: 'c', text: 'From Hawking radiation at the horizon' },
          { id: 'd', text: 'From matter escaping just before it crosses the horizon' },
        ],
        explanation:
          'A black hole contributes exactly zero photons. Its brightness tells you about the gas supply, not about the black hole: Sgr A* is quiet because little is falling in, while M87* drives a jet across its galaxy.',
      },
    ],
  },

  'relativistic-jets': {
    summary: {
      essential:
        'Many accreting black holes launch narrow beams of plasma from their poles at close to the speed of light, extending in the largest cases for hundreds of thousands of light years. Nothing escapes from inside the horizon — the material was in the accretion flow and was accelerated before it could fall in.',
      detailed:
        'The leading model is Blandford–Znajek: magnetic field lines anchored in the surrounding plasma and threading a spinning black hole are wound up by frame dragging, and the resulting magnetic stress carries rotational energy outward while the hole spins down slightly. Jet power scales with the square of both the threaded magnetic flux and the horizon angular velocity, and simulations in the magnetically arrested regime reproduce jets exceeding the accretion power, which requires tapping spin. Two observational signatures follow from relativity rather than from the source: relativistic beaming makes the approaching jet far brighter than the receding one, and apparent superluminal motion of jet knots — five to ten times c is routine — is a projection effect that places a firm lower bound on the true speed. Jets also matter galactically, heating and expelling gas and regulating star formation far beyond the black hole’s gravitational reach.',
    },
    questions: [
      {
        id: 'one-jet',
        prompt: 'Why do images of jetted sources usually show only one jet?',
        options: [
          { id: 'a', text: 'Because only one jet is actually launched' },
          {
            id: 'b',
            text: 'Relativistic beaming concentrates and blue-shifts emission from the approaching jet while dimming the receding one',
            correct: true,
          },
          { id: 'c', text: 'Because the receding jet is blocked by the accretion disc' },
          { id: 'd', text: 'Because the far jet is too distant to resolve' },
        ],
        explanation:
          'Jets come in pairs. Material moving toward us at close to c has its emission beamed forward and blue-shifted; the receding side is dimmed and reddened. The brightness ratio is a measurement — it gives the jet speed.',
      },
      {
        id: 'superluminal',
        prompt:
          'Jet knots often appear to move across the sky at several times the speed of light. What is happening?',
        options: [
          { id: 'a', text: 'They genuinely exceed c, which is permitted for plasma' },
          {
            id: 'b',
            text: 'A projection effect: a source moving almost directly toward us at close to c means successive emissions have less distance to travel',
            correct: true,
          },
          { id: 'c', text: 'Space is expanding between the knots' },
          { id: 'd', text: 'The measurements are calibration errors' },
        ],
        explanation:
          'Nothing exceeds c. When the emitter chases its own light almost directly toward us, the apparent transverse motion is compressed in time and can appear superluminal. The size of the effect sets a firm lower bound on the true speed.',
      },
    ],
  },

  'tidal-forces-black-holes': {
    summary: {
      essential:
        'Tidal force is the difference in gravitational pull across an extended body — the same physics as ocean tides. Near a black hole it stretches you lengthwise and squeezes you across. Counter-intuitively, small black holes are far more dangerous at the horizon than large ones.',
      detailed:
        'Tidal acceleration goes as 2GML/r³. Evaluate it at the horizon, where r = 2GM/c², and the mass dependence inverts: the result scales as 1/M². For a ten-solar-mass black hole the stretching at the horizon is about 2 × 10⁷ g, and it is already lethal some 800 km out — about 27 horizon radii. For M87* it is around 5 × 10⁻¹¹ g at the horizon, which is nothing at all. This is also the one thing near a black hole that can be felt locally: a freely falling observer cannot detect gravity, but can detect its gradient, and that irreducible residual is exactly what spacetime curvature is. The effect is observed astronomically as tidal disruption events, in which a star straying too close to a supermassive black hole is torn apart and about half the debris returns to form a temporary accretion flow, brightening the nucleus for months to years.',
    },
    questions: [
      {
        id: 'small-worse',
        prompt:
          'Why is crossing the horizon of a ten-solar-mass black hole lethal, while crossing M87*’s would be imperceptible?',
        options: [
          {
            id: 'a',
            text: 'Because a smaller black hole has a stronger gravitational field overall',
          },
          {
            id: 'b',
            text: 'Because tidal force at the horizon scales as 1/M² — the horizon of a small black hole is close in, where the field gradient is steep',
            correct: true,
          },
          { id: 'c', text: 'Because a supermassive black hole has no horizon' },
          { id: 'd', text: 'Because larger black holes spin more slowly' },
        ],
        explanation:
          'Tidal acceleration goes as 2GML/r³. Substituting r = 2GM/c² gives a result proportional to 1/M². Bigger black holes have their horizons much further out, where the field varies far more gently across a body.',
      },
      {
        id: 'gradient',
        prompt:
          'Why is tidal force the only gravitational effect a freely falling observer can detect locally?',
        options: [
          { id: 'a', text: 'Because it is the strongest of the gravitational effects' },
          {
            id: 'b',
            text: 'Because free fall removes the field at a point but cannot remove its variation across an extended body — and that variation is curvature',
            correct: true,
          },
          { id: 'c', text: 'Because it acts on the body’s interior rather than its surface' },
          { id: 'd', text: 'Because it does not obey the equivalence principle' },
        ],
        explanation:
          'The equivalence principle is local: choosing a free-fall frame cancels gravity at one point. It cannot cancel the difference in the field between two points, and that irreducible residual is precisely what the curvature tensor measures.',
      },
    ],
  },

  'photon-sphere-and-shadow': {
    summary: {
      essential:
        'At 1.5 Schwarzschild radii, gravity bends light exactly enough that a photon can orbit — the photon sphere. The orbit is unstable, so nothing accumulates there, but the impact parameter that puts a ray on it separates capture from escape, and that dividing line is the edge of the shadow.',
      detailed:
        'Trace rays backwards from a telescope. Rays with impact parameter above √27 GM/c² = 2.6 r_s came from the sky; below it, from the horizon, which emits nothing — so those pixels are dark. Rays just above the threshold loop the photon sphere one or more times and pile up into a thin bright ring. The shadow is therefore substantially larger than the horizon, roughly five horizon radii in diameter. The EHT images of M87* (2019) and Sgr A* (2022) show radio emission from hot plasma lensed around the black hole, with the shadow at the centre. They are not photographs of an event horizon, and no telescope can take one. Two further caveats: the images are reconstructions from very sparse interferometric data, validated by running independent pipelines blind against each other; and Sgr A* varies on timescales comparable to the observation, so the published image is a time-average.',
    },
    questions: [
      {
        id: 'eht-claim',
        prompt: 'What do the Event Horizon Telescope images actually show?',
        options: [
          { id: 'a', text: 'A photograph of an event horizon' },
          {
            id: 'b',
            text: 'Radio emission from hot plasma around the black hole, lensed into a ring, with a dark shadow substantially larger than the horizon at the centre',
            correct: true,
          },
          { id: 'c', text: 'The surface of the black hole glowing from accreted material' },
          { id: 'd', text: 'Hawking radiation emitted at the horizon' },
        ],
        explanation:
          'A horizon emits nothing and can never be photographed. The bright ring is lensed plasma emission; the dark centre is the shadow, a lensing feature about 2.6 Schwarzschild radii in apparent radius. The images are strong evidence, honestly bounded.',
      },
      {
        id: 'unstable',
        prompt: 'The photon sphere orbit is unstable. What does that mean for what we see?',
        options: [
          { id: 'a', text: 'Nothing is visible there, because light immediately falls in' },
          {
            id: 'b',
            text: 'Nothing accumulates at the photon sphere, but it acts as a divider between captured and escaping rays — producing the ring’s sharp edge',
            correct: true,
          },
          { id: 'c', text: 'The ring flickers randomly as photons enter and leave the orbit' },
          { id: 'd', text: 'The photon sphere expands and contracts over time' },
        ],
        explanation:
          'Instability means a photon there either spirals in or spirals away — nothing stays. Its role is as a threshold: the critical impact parameter separates capture from escape, and rays just above it loop several times before escaping, piling into a thin bright ring.',
      },
    ],
  },

  'black-hole-classes': {
    summary: {
      essential:
        'Known black holes fall into three ranges. Stellar-mass, from about 3 to a few tens of solar masses, from collapsing stars. Supermassive, from around a hundred thousand to tens of billions, at galaxy centres. And the intermediate range between them, where until recently almost nothing was securely measured.',
      detailed:
        'The lower bound on stellar-mass black holes is the neutron-star limit of roughly 2.2–2.5 solar masses. The upper bound comes from stellar evolution, with a pair-instability gap at roughly 65–120 solar masses where no remnant is expected. Notably, black holes seen in gravitational waves are systematically heavier than those in X-ray binaries — 30 to 40 solar masses rather than 5 to 20 — reflecting formation in low-metallicity environments with weaker stellar winds, plus a selection effect since heavier mergers are detectable further away. The intermediate gap matters because it is where the supermassive seed question lives: if the biggest black holes grew from stellar remnants, the intermediate range is the road they travelled and should be populated. GW190521 in 2020 gave the first securely measured example, at about 142 solar masses.',
    },
    questions: [
      {
        id: 'gap-matters',
        prompt: 'Why does the scarcity of intermediate-mass black holes matter?',
        options: [
          { id: 'a', text: 'Because it suggests general relativity fails at those masses' },
          {
            id: 'b',
            text: 'Because it is the mass range supermassive black holes would have passed through if they grew from stellar-mass seeds',
            correct: true,
          },
          { id: 'c', text: 'Because black holes in that range would be visible to the naked eye' },
          { id: 'd', text: 'Because dark matter is thought to consist of them' },
        ],
        explanation:
          'Counting intermediate-mass black holes tests how the supermassive ones formed. A well-populated range supports growth from light seeds; a sparse one favours heavy seeds formed by direct collapse.',
      },
      {
        id: 'gw-heavier',
        prompt:
          'Black holes found in gravitational waves are systematically heavier than those in X-ray binaries. Why?',
        options: [
          { id: 'a', text: 'Gravitational-wave measurements systematically overestimate mass' },
          {
            id: 'b',
            text: 'Partly formation in low-metallicity environments with weaker stellar winds, and partly selection — heavier mergers are detectable further away',
            correct: true,
          },
          { id: 'c', text: 'X-ray binaries contain neutron stars rather than black holes' },
          {
            id: 'd',
            text: 'Black holes grow rapidly once they begin emitting gravitational waves',
          },
        ],
        explanation:
          'Both effects are real. Low-metallicity stars lose less mass to winds and leave heavier remnants, and the gravitational-wave signal scales with mass, so a heavier merger is visible across a far larger volume.',
      },
    ],
  },

  'supermassive-black-holes': {
    summary: {
      essential:
        'Essentially every large galaxy has a supermassive black hole at its centre. Ours is 4.297 million solar masses and currently quiet. When such a black hole is being fed it becomes a quasar, outshining a galaxy of hundreds of billions of stars from a region smaller than the Solar System.',
      detailed:
        'The best-measured case is our own. Individual stars have been tracked around Sgr A* since the early 1990s; S2 has a 16-year orbit, passes within about 120 astronomical units, and reaches nearly 3% of light speed at closest approach. Kepler’s third law applied to that orbit gives the enclosed mass with no model of the central object required, and two independent teams agree. GRAVITY has since measured both the pericentre gravitational redshift and the Schwarzschild precession at general-relativistic values. Their masses correlate tightly with host-galaxy properties, most sharply with the bulge’s stellar velocity dispersion — the M–σ relation — which is remarkable because the black hole’s direct gravitational influence spans only tens of light years against a bulge of thousands. Feedback from accretion is the leading explanation for that coupling, but it is a model rather than an established mechanism.',
    },
    questions: [
      {
        id: 's2',
        prompt: 'What makes the mass measurement of Sgr A* particularly clean?',
        options: [
          { id: 'a', text: 'It is close enough that the horizon can be measured directly' },
          {
            id: 'b',
            text: 'Individual stellar orbits give the enclosed mass from Kepler’s third law alone, with no assumption about what the object is',
            correct: true,
          },
          { id: 'c', text: 'Its X-ray brightness scales exactly with mass' },
          { id: 'd', text: 'Its accretion rate has been measured directly' },
        ],
        explanation:
          'Orbital dynamics needs only the period and the orbit size. Tracking S2 through a full 16-year orbit gives 4.297 million solar masses inside a region smaller than the Solar System — and no configuration of ordinary matter at that density would survive.',
      },
      {
        id: 'm-sigma',
        prompt: 'Why is the M–σ relation surprising?',
        options: [
          { id: 'a', text: 'Because it implies black holes are more massive than their galaxies' },
          {
            id: 'b',
            text: 'Because the black hole’s direct gravitational influence spans a region thousands of times smaller than the bulge whose stars it correlates with',
            correct: true,
          },
          { id: 'c', text: 'Because it holds only for spiral galaxies' },
          { id: 'd', text: 'Because it contradicts general relativity' },
        ],
        explanation:
          'Sgr A* governs orbits within a few light years; the Milky Way’s bulge is thousands across. Something must couple them, and feedback — radiation and jets heating and expelling gas — is the leading candidate, though the causal story remains a model.',
      },
      {
        id: 'quasar-size',
        prompt: 'How was it established that quasars are physically small?',
        options: [
          { id: 'a', text: 'They were resolved directly by early telescopes' },
          {
            id: 'b',
            text: 'They vary in brightness over hours, and a source cannot brighten coherently faster than light crosses it',
            correct: true,
          },
          { id: 'c', text: 'Their spectra show narrow emission lines' },
          { id: 'd', text: 'Their parallax was measured' },
        ],
        explanation:
          'Variability timescale bounds size. A quasar varying over hours can be no more than a few light hours across, yet outshines a whole galaxy — which leaves gravitational accretion onto a compact object as the only efficient enough process.',
      },
    ],
  },

  'black-hole-mergers': {
    summary: {
      essential:
        'Two orbiting black holes radiate gravitational waves, lose energy and spiral together. The signal has three parts: a rising chirp during inspiral, the merger itself, and a brief ringdown as the remnant settles. GW150914, in 2015, was the first detected.',
      detailed:
        'Each phase carries different information. The inspiral is calculable from post-Newtonian expansions and fixes the chirp mass precisely. The merger required two decades of numerical relativity before anyone could compute a waveform at all, and those templates were ready just in time. The ringdown is a set of damped oscillations whose frequencies depend only on the remnant’s mass and spin, so detecting more than one mode tests the no-hair theorem directly. GW150914 came from black holes of about 36 and 29 solar masses forming a remnant of 62 — three solar masses radiated in about 0.2 seconds, at a peak power exceeding the light of every star in the observable Universe. The resulting strain at Earth was 10⁻²¹, about 4 × 10⁻¹⁸ metres over LIGO’s 4 km arms. Mergers are also the strongest evidence available for horizons: alternatives without one generally predict post-ringdown echoes, and none has been found.',
    },
    questions: [
      {
        id: 'phases',
        prompt:
          'Which phase of a merger signal required numerical relativity before it could be predicted at all?',
        options: [
          { id: 'a', text: 'The inspiral' },
          { id: 'b', text: 'The merger itself', correct: true },
          { id: 'c', text: 'The ringdown' },
          { id: 'd', text: 'None — all three follow from analytic formulas' },
        ],
        explanation:
          'The inspiral yields to post-Newtonian expansion and the ringdown to quasinormal mode analysis. The merger, where both horizons are strongly interacting, has no analytic treatment; supercomputer simulations solved it in 2005, a decade before the first detection.',
      },
      {
        id: 'energy',
        prompt:
          'GW150914 radiated about three solar masses as gravitational waves. Where did that energy come from?',
        options: [
          { id: 'a', text: 'From matter escaping the horizons during the merger' },
          {
            id: 'b',
            text: 'From the binding energy of the orbit, as the two black holes spiralled together',
            correct: true,
          },
          { id: 'c', text: 'From nuclear reactions in the surrounding gas' },
          { id: 'd', text: 'From the annihilation of the two singularities' },
        ],
        explanation:
          'Mass and energy are the same quantity. As the orbit shrank, gravitational binding energy was released and carried away as waves, so the remnant is lighter than the sum of its parts — 62 rather than 65 solar masses.',
      },
      {
        id: 'echoes',
        prompt: 'Why are merger observations relevant to whether event horizons really exist?',
        options: [
          { id: 'a', text: 'Because the waveform shows the horizon directly' },
          {
            id: 'b',
            text: 'Because proposed horizonless alternatives predict echoes after the ringdown, and searches have found none',
            correct: true,
          },
          {
            id: 'c',
            text: 'Because horizons emit gravitational waves of a characteristic frequency',
          },
          { id: 'd', text: 'Because only objects with horizons can merge' },
        ],
        explanation:
          'A reflective surface where a horizon should be would send back delayed repetitions of the signal. No significant echoes have been found. That is a bound on alternatives rather than a proof, and it is the closest thing to direct evidence for horizons we have.',
      },
    ],
  },

  'detecting-black-holes': {
    summary: {
      essential:
        'A black hole emits nothing, so every detection is indirect. Four independent methods work: stellar orbits around an invisible mass, X-rays from gas falling onto a compact object in a binary, gravitational waves from mergers, and radio imaging of the ring of lensed light. They rely on unrelated physics, and they agree.',
      detailed:
        'The inference always has two steps: establish that a large mass occupies a small volume, then argue that nothing but a black hole can be that compact and persist. The second step does most of the work — a cluster of dark stellar remnants at Sgr A*’s density would disperse or collapse within a few million years. Each method has its own reach. Orbital dynamics is the cleanest, needing only Kepler’s third law. X-ray binaries add the argument from absence: no thermonuclear bursts, no pulsations, lower quiescent luminosity than neutron-star systems — all consistent with matter being advected through a horizon rather than landing on a surface. Gravitational waves observe the objects themselves with no intervening matter. EHT imaging resolves the emission around them. A fifth channel, pulsar timing, reported evidence in 2023 for a nanohertz background plausibly from supermassive binaries; that result is not yet at detection significance.',
    },
    questions: [
      {
        id: 'why-four',
        prompt: 'Why does having four detection methods matter so much?',
        options: [
          { id: 'a', text: 'Because each one alone is unreliable' },
          {
            id: 'b',
            text: 'Because they rely on unrelated physics and different instruments, so their agreement is very hard to arrange by systematic error',
            correct: true,
          },
          { id: 'c', text: 'Because each works only for one class of black hole' },
          { id: 'd', text: 'Because general relativity requires four independent confirmations' },
        ],
        explanation:
          'Orbital dynamics, X-ray spectroscopy, gravitational-wave interferometry and radio VLBI share almost no assumptions. Concordance across that many independent routes is the strongest form of evidence available in astronomy.',
      },
      {
        id: 'no-surface',
        prompt:
          'What is the evidence that black-hole candidates in X-ray binaries lack a solid surface?',
        options: [
          { id: 'a', text: 'Their surfaces have been imaged and found to be absent' },
          {
            id: 'b',
            text: 'They show none of the features a surface would produce — no thermonuclear bursts, no pulsations, and lower quiescent luminosity than neutron-star systems',
            correct: true,
          },
          { id: 'c', text: 'Their masses are too large for any surface to exist' },
          { id: 'd', text: 'They emit no X-rays at all' },
        ],
        explanation:
          'Matter landing on a neutron star’s surface eventually re-radiates and can ignite in thermonuclear flashes. Black-hole candidates show neither, consistent with the energy being carried through a horizon. It is an argument from absence — a strong bound, not a proof.',
      },
      {
        id: 'direct',
        prompt: 'Which statement about "direct observation" of black holes is accurate?',
        options: [
          { id: 'a', text: 'Event horizons have now been photographed directly' },
          {
            id: 'b',
            text: 'Gravitational waves are direct observation of spacetime distortion, and EHT images are direct observation of surrounding plasma — neither observes a horizon',
            correct: true,
          },
          { id: 'c', text: 'All evidence remains purely theoretical' },
          { id: 'd', text: 'Only the interiors have been observed, not the exteriors' },
        ],
        explanation:
          'Both are enormously stronger than what preceded them, and neither is an observation of a horizon — a horizon emits nothing. Overstating this weakens a case that is already very strong.',
      },
    ],
  },

  'hawking-radiation': {
    summary: {
      essential:
        'In 1974 Hawking showed that applying quantum field theory to the curved spacetime around a black hole predicts a faint thermal glow from the horizon. The temperature is inversely proportional to mass, so real black holes are far colder than empty space, and the effect has never been observed.',
      detailed:
        'The prediction is unusually robust for something untested: it uses established physics on both sides, with general relativity supplying the geometry and quantum field theory the fields, treating gravity classically throughout. It is not a result of any candidate quantum-gravity theory. The temperature is T = ħc³/8πGMk_B ≈ 6.17 × 10⁻⁸ K × (M☉/M), so adding mass cools a black hole — a negative heat capacity, which makes final-stage evaporation a runaway. Every known black hole is far colder than the 2.725 K microwave background, so all of them absorb more than they emit and grow rather than evaporate; evaporation cannot begin for stellar-mass holes for something like 10¹⁷ years. The popular virtual-pair story is Hawking’s own heuristic, and he said so: the actual mechanism is that the notion of "vacuum" is observer-dependent, and the mismatch across the horizon yields a thermal spectrum.',
    },
    questions: [
      {
        id: 'observed',
        prompt: 'What is the observational status of Hawking radiation?',
        options: [
          { id: 'a', text: 'Detected from stellar-mass black holes in the 1990s' },
          {
            id: 'b',
            text: 'Never observed — every known black hole is far colder than the microwave background, so it absorbs far more than it emits',
            correct: true,
          },
          { id: 'c', text: 'Observed indirectly through black-hole mass loss' },
          { id: 'd', text: 'Ruled out by observation' },
        ],
        explanation:
          'A solar-mass black hole is predicted at 6 × 10⁻⁸ K against a CMB at 2.725 K — about eight orders of magnitude colder. Laboratory analogue experiments test the kinematic mechanism in fluids and optical media; they are not detections of the gravitational effect.',
      },
      {
        id: 'temperature',
        prompt: 'How does Hawking temperature depend on mass?',
        options: [
          { id: 'a', text: 'It rises with mass, since larger black holes have more energy' },
          {
            id: 'b',
            text: 'It falls as mass rises — bigger black holes are colder',
            correct: true,
          },
          { id: 'c', text: 'It is the same for all black holes' },
          { id: 'd', text: 'It depends only on spin, not on mass' },
        ],
        explanation:
          'T ∝ 1/M. That inverse relationship gives a black hole negative heat capacity: adding mass cools it. It is also why evaporation ends in a runaway — as the hole shrinks it heats, radiates faster, and shrinks faster.',
      },
      {
        id: 'pairs',
        prompt: 'How should the virtual-particle-pair explanation be regarded?',
        options: [
          { id: 'a', text: 'As the exact mechanism from Hawking’s derivation' },
          {
            id: 'b',
            text: 'As Hawking’s own heuristic — it gives the right order of magnitude and misleads about the mechanism, which is that "vacuum" is observer-dependent',
            correct: true,
          },
          { id: 'c', text: 'As a discredited early idea with no relation to the result' },
          { id: 'd', text: 'As an alternative theory competing with Hawking’s' },
        ],
        explanation:
          'Hawking offered it as a picture and said it was heuristic. It also misleads about the energy source: nothing "swallows a negative-energy particle" — the energy comes from the gravitational field of the whole spacetime.',
      },
    ],
  },

  'black-hole-thermodynamics': {
    summary: {
      essential:
        'Black holes obey laws that mirror thermodynamics exactly, with horizon area playing the role of entropy. Once Hawking showed they also have a temperature, the analogy became physical — and produced a contradiction: if a black hole evaporates completely, what happened to the information about what fell in?',
      detailed:
        'Hawking proved that total horizon area never decreases, which is a strange property for a geometric quantity and a familiar one for entropy. Bekenstein argued that a black hole must have entropy proportional to area, or you could reduce the entropy of the Universe by throwing hot gas in. The Bekenstein–Hawking entropy is one quarter of the horizon area in Planck units, and its scaling with area rather than volume is the origin of the holographic principle. The contradiction is sharp: quantum mechanics requires evolution to be reversible in principle, while Hawking’s calculation gives radiation depending only on mass, spin and charge — carrying no trace of what formed the hole. Most theorists now expect information is preserved, largely from AdS/CFT and from replica-wormhole calculations that reproduce the Page curve. Neither identifies the physical mechanism, and the problem is not resolved.',
    },
    questions: [
      {
        id: 'area',
        prompt: 'What is unusual about black-hole entropy?',
        options: [
          { id: 'a', text: 'It decreases over time' },
          {
            id: 'b',
            text: 'It scales with the horizon’s area rather than the enclosed volume',
            correct: true,
          },
          { id: 'c', text: 'It is exactly zero, since the state is fully specified' },
          { id: 'd', text: 'It depends only on the temperature of infalling matter' },
        ],
        explanation:
          'Every other system in physics has entropy scaling with volume. Area scaling led to the holographic principle — the proposal that a region’s information content is bounded by the area of its boundary — which has become one of the most influential ideas in theoretical physics.',
      },
      {
        id: 'paradox',
        prompt: 'What exactly is the information problem?',
        options: [
          { id: 'a', text: 'That we cannot see inside a black hole' },
          {
            id: 'b',
            text: 'That quantum mechanics requires information to be preserved, while Hawking’s calculation gives radiation depending only on mass, spin and charge',
            correct: true,
          },
          { id: 'c', text: 'That black holes evaporate faster than expected' },
          { id: 'd', text: 'That the entropy formula gives a non-integer number of states' },
        ],
        explanation:
          'Burn a book and the information is scrambled but present in the smoke. By the original calculation, a black hole’s radiation carries no trace of what formed it — so if it evaporates completely the information is gone, contradicting quantum mechanics.',
      },
      {
        id: 'status',
        prompt: 'What is the current status of the information problem?',
        options: [
          { id: 'a', text: 'Resolved: Hawking conceded in 2004 and the matter is closed' },
          {
            id: 'b',
            text: 'Unresolved — most theorists now expect information is preserved, but no physical mechanism for how it leaves a specific black hole has been identified',
            correct: true,
          },
          { id: 'c', text: 'Resolved: information is definitively destroyed' },
          { id: 'd', text: 'Abandoned as unanswerable' },
        ],
        explanation:
          'AdS/CFT and replica-wormhole calculations of the Page curve are strongly suggestive, and both rest on tools whose applicability to our Universe is not established. Firewalls, remnants and complementarity all remain live, each with known difficulties.',
      },
    ],
  },

  'black-hole-open-questions': {
    summary: {
      essential:
        'A great deal is settled: black holes exist, their masses are measured, their exteriors match general relativity everywhere tested, and their mergers behave as predicted. A great deal is not: what replaces the singularity, where the supermassive ones came from, what happens to information, and whether horizons are smooth all the way down.',
      detailed:
        'Keeping those two lists apart is the point. Uncertainty about an interior is not uncertainty about existence, any more than uncertainty about Earth’s inner core casts doubt on the Earth. The open questions cluster around one theme: general relativity is a classical theory that predicts its own breakdown, and every unresolved item here sits where it breaks down or where quantum mechanics must be brought in. The horizon-smoothness question is the sharpest, because both answers are unacceptable to someone — a smooth horizon appears to require information loss, while a firewall appears to abandon the equivalence principle at the one place it has never been tested. Echo searches in ringdown data are the only current empirical handle, and they find nothing significant. The pattern is the one Newtonian gravity followed: a superb theory whose edges have been located.',
    },
    questions: [
      {
        id: 'separate',
        prompt:
          'Does uncertainty about black-hole interiors weaken the case that black holes exist?',
        options: [
          { id: 'a', text: 'Yes — an object whose interior is unknown cannot be confirmed' },
          {
            id: 'b',
            text: 'No — existence and exterior behaviour are established by four independent methods; the open questions concern interiors and quantum behaviour',
            correct: true,
          },
          { id: 'c', text: 'Yes, because the singularity is the defining feature' },
          { id: 'd', text: 'The question cannot be answered either way' },
        ],
        explanation:
          'Masses, orbits, waveforms and shadow sizes are measured and match theory. What is unknown lies inside a causally disconnected region and in the quantum regime. Conflating the two is how a strong result gets reported as a shaky one.',
      },
      {
        id: 'firewall',
        prompt: 'Why is the question of whether horizons are smooth so sharp?',
        options: [
          { id: 'a', text: 'Because it can be settled by a single straightforward observation' },
          {
            id: 'b',
            text: 'Because a smooth horizon appears to require information loss, while a firewall appears to abandon the equivalence principle — something widely believed has to give',
            correct: true,
          },
          { id: 'c', text: 'Because it determines whether black holes can merge' },
          { id: 'd', text: 'Because it decides whether Hawking radiation exists' },
        ],
        explanation:
          'Both alternatives cost a principle that physicists are reluctant to give up. Ringdown echo searches are the only empirical handle available, and they constrain the proposals without excluding them.',
      },
    ],
  },
};
