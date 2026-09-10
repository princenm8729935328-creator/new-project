/**
 * Recaps for Stars & Galaxies.
 *
 * The distractors here target a specific family of errors: the plausible
 * near-miss. Stellar astrophysics is full of statements that are almost right —
 * a red giant's core expands, bigger stars live longer, all elements were made
 * in stars, spiral arms are fixed structures, ellipticals are aged spirals,
 * galaxies collide so stars must collide. Every one of those is what a careful
 * reader would guess, and every one is wrong for a reason worth knowing.
 *
 * The explanations therefore name the mechanism rather than restating the
 * answer, because the point of getting one wrong is to find out which piece of
 * physics you were missing.
 */
import type { RecapsByTopic } from '../schema/recap';

export const STARS_GALAXIES_RECAPS: RecapsByTopic = {
  'what-is-a-star': {
    summary: {
      essential:
        'A star is a balance, not an object doing one thing. Gravity pulls every part of it inward; the pressure of its hot interior pushes outward; and the two nearly cancel. Fusion’s job is to keep replacing the energy the star radiates, so the interior stays hot enough for the pressure to hold. Take away the fusion and the balance fails.',
      detailed:
        'The balance is self-correcting, which is why stars are steady rather than twitchy. Expansion cools the interior and lowers the pressure; contraction heats it and raises the pressure. Both restore the previous state. What sets a star’s properties is therefore not what it is made of so much as how much of it there is — mass fixes the weight, which fixes the central temperature, which fixes almost everything else.',
    },
    questions: [
      {
        id: 'balance',
        prompt: 'What holds a star up against its own gravity?',
        options: [
          { id: 'a', text: 'The outward force of the photons streaming from its core' },
          {
            id: 'b',
            text: 'The pressure of its hot interior, which fusion keeps replenished',
            correct: true,
          },
          { id: 'c', text: 'The centrifugal effect of its rotation' },
          { id: 'd', text: 'A solid core that the rest of the star rests on' },
        ],
        explanation:
          'Gas pressure does the work, and fusion exists to keep the gas hot enough to supply it. Radiation pressure contributes significantly only in the most massive stars, rotation is far too slow to matter, and there is no solid anything inside a star — it is plasma throughout.',
      },
      {
        id: 'not-burning',
        prompt: 'Why is it wrong to say the Sun is "burning"?',
        options: [
          { id: 'a', text: 'Because there is no oxygen in space to burn with' },
          {
            id: 'b',
            text: 'Because chemical burning releases roughly a million times too little energy per kilogram to have kept the Sun shining for 4.6 billion years',
            correct: true,
          },
          { id: 'c', text: 'Because the Sun is too hot for chemical reactions to occur at all' },
          { id: 'd', text: 'Because burning requires a solid fuel and the Sun is a gas' },
        ],
        explanation:
          'The decisive argument is the energy budget, not the chemistry. Even given ideal fuel and oxidiser, chemical energy would exhaust the Sun in a few thousand years. That gap is what forced physics to look for a nuclear source.',
      },
    ],
  },

  'how-stars-are-born': {
    summary: {
      essential:
        'Stars form in the coldest places in a galaxy. A molecular cloud at ten or twenty kelvin has so little pressure that gravity can win in its denser clumps. As a clump collapses it fragments, so stars form in groups; it spins up, so it flattens into a disk; and it fires jets from its poles, which is how it sheds the rotation it cannot keep.',
      detailed:
        'The controlling variable is cooling. Pressure resists gravity, and pressure rises with temperature, so gas that cannot radiate away the heat of compression simply holds itself up. Everything about star formation — where it happens, how efficient it is, what masses result — follows from how efficiently the gas can lose heat, which is why the first stars, with no dust and few molecules, must have formed differently.',
    },
    questions: [
      {
        id: 'why-cold',
        prompt: 'Why do stars form in the coldest regions of a galaxy rather than the warmest?',
        options: [
          { id: 'a', text: 'Cold gas is denser, and density alone determines whether stars form' },
          {
            id: 'b',
            text: 'Pressure resists gravity, and cold gas has little pressure — so gravity can win',
            correct: true,
          },
          { id: 'c', text: 'Warm gas has already been used up by earlier generations of stars' },
          { id: 'd', text: 'Fusion can only begin in material that started out cold' },
        ],
        explanation:
          'It is a contest between gravity and pressure. Warm gas holds itself up. Only gas that can radiate its heat away lets gravity take over — which is why star formation is fundamentally a story about cooling.',
      },
      {
        id: 'why-groups',
        prompt: 'Why do stars almost always form in groups rather than one at a time?',
        options: [
          { id: 'a', text: 'Because a single star could not generate enough gravity to collapse' },
          {
            id: 'b',
            text: 'Because the mass needed for collapse falls as the gas gets denser, so a collapsing cloud breaks into many independently collapsing pieces',
            correct: true,
          },
          { id: 'c', text: 'Because magnetic fields tie neighbouring stars together as they form' },
          { id: 'd', text: 'Because stars only ignite when a nearby supernova triggers them' },
        ],
        explanation:
          'Fragmentation is a consequence of the collapse itself. As density rises, smaller and smaller regions independently exceed the threshold for collapse — so one cloud becomes many stars.',
      },
    ],
  },

  'why-gravity-makes-stars-hot': {
    summary: {
      essential:
        'Falling is heating. Particles falling toward a common centre collide, and their organised inward motion becomes disorganised random motion — which is what temperature is. This is the default heat source for every astronomical object, and fusion is the exception that only some of them get to use.',
      detailed:
        'The virial theorem adds a twist that is worth carrying: only half the released gravitational energy stays as heat, and the other half is radiated away. So a contracting star that loses energy gets hotter, not cooler. It has a negative heat capacity, and it cannot reach a steady state — it keeps shrinking and heating until fusion takes over or, for a brown dwarf, until degeneracy stops the contraction and it simply fades.',
    },
    questions: [
      {
        id: 'mechanism',
        prompt: 'How does gravitational collapse raise a cloud’s temperature?',
        options: [
          { id: 'a', text: 'Friction between the gas and the surrounding interstellar medium' },
          {
            id: 'b',
            text: 'Infalling material collides, converting organised inward motion into random motion — which is temperature',
            correct: true,
          },
          { id: 'c', text: 'Compression triggers fusion, and the fusion supplies the heat' },
          { id: 'd', text: 'Gravity directly adds energy to each particle without any conversion' },
        ],
        explanation:
          'The energy comes from the height the material falls through, and collisions randomise it. The fusion answer inverts the causal order: heating is what eventually makes fusion possible, so it cannot be caused by it.',
      },
      {
        id: 'negative-heat-capacity',
        prompt: 'A contracting protostar radiates energy into space. What happens to its interior?',
        options: [
          { id: 'a', text: 'It cools, as any object losing energy would' },
          {
            id: 'b',
            text: 'It gets hotter — losing energy makes it contract, and contraction releases more energy than was lost',
            correct: true,
          },
          {
            id: 'c',
            text: 'Its temperature stays constant because the losses are exactly balanced',
          },
          { id: 'd', text: 'It cools at the surface but the core is unaffected' },
        ],
        explanation:
          'This is the virial theorem’s strangest consequence. A self-gravitating object has a negative heat capacity: radiate energy away and it heats up. That is precisely how a protostar reaches fusion temperature.',
      },
    ],
  },

  'when-a-star-switches-on': {
    summary: {
      essential:
        'A protostar contracts and heats until fusion supplies energy as fast as the star radiates it. At that point there is no longer any need to shrink, and the star settles. What makes the new state stable is that fusion is fiercely temperature-sensitive, so any small temperature rise produces a large energy surge that expands and cools the core back down.',
      detailed:
        'The thermostat is the important idea, not the ignition. There is no ignition event — fusion is always occurring at some rate and simply becomes large enough to matter as the core heats. The regulation depends on the gas remaining non-degenerate; where it does not, as in the helium flash of a low-mass star, the same temperature sensitivity produces a runaway rather than a regulator.',
    },
    questions: [
      {
        id: 'thermostat',
        prompt: 'Why is a main-sequence star’s energy output so steady over billions of years?',
        options: [
          { id: 'a', text: 'The fuel supply is delivered to the core at a constant rate' },
          {
            id: 'b',
            text: 'Fusion is steeply temperature-sensitive, so any excess heat expands and cools the core, cutting the rate back',
            correct: true,
          },
          { id: 'c', text: 'The star’s magnetic field regulates the reaction rate' },
          {
            id: 'd',
            text: 'The core is at exactly the threshold temperature and cannot exceed it',
          },
        ],
        explanation:
          'It is a negative feedback loop. A hotter core burns much faster, which raises the pressure, which expands and cools it. Nothing supervises the process; the physics regulates itself.',
      },
      {
        id: 'no-ignition',
        prompt: 'What actually happens at the moment a star "switches on"?',
        options: [
          {
            id: 'a',
            text: 'The fusion rate rises past the point where it supplies the star’s whole radiated output, so contraction stops',
            correct: true,
          },
          {
            id: 'b',
            text: 'The core crosses a sharp threshold and fusion begins where there was none',
          },
          { id: 'c', text: 'A shock wave from the collapse ignites the core all at once' },
          { id: 'd', text: 'The outer layers become transparent and the star becomes visible' },
        ],
        explanation:
          'There is no threshold and no flash. Fusion runs at some rate at any temperature; what changes is when that rate becomes large enough to replace the star’s losses. It is a crossing point on a graph, not an event.',
      },
    ],
  },

  'nuclear-fusion-inside-stars': {
    summary: {
      essential:
        'Four protons combine, in stages, into one helium nucleus that weighs 0.7 percent less. The missing mass has become energy. Getting protons close enough is only possible because they tunnel through the electrical barrier they cannot climb — and the first step is so improbable that a given proton waits billions of years for it, which is exactly why the Sun burns slowly.',
      detailed:
        'A second route exists. Where carbon, nitrogen and oxygen are already present, they can catalyse the same net reaction: they absorb protons, cycle through several nuclei, and emerge unchanged having released a helium nucleus. The CNO cycle needs a hotter core but is far more temperature-sensitive, so it dominates above about 1.3 solar masses — and its neutrinos have now been detected from the Sun, where it supplies about 1 percent of the energy.',
    },
    questions: [
      {
        id: 'tunnelling',
        prompt:
          'The Sun’s core is about a thousand times too cool for protons to overcome their mutual repulsion. Why does fusion happen anyway?',
        options: [
          { id: 'a', text: 'Enormous pressure forces the protons together mechanically' },
          {
            id: 'b',
            text: 'Quantum tunnelling lets protons pass through the electrical barrier rather than over it',
            correct: true,
          },
          { id: 'c', text: 'The magnetic field in the core neutralises the electrical repulsion' },
          { id: 'd', text: 'Electrons in the plasma screen the charge completely' },
        ],
        explanation:
          'Tunnelling makes the reaction possible and keeps it rare. That rarity is a feature: it is why the Sun releases its energy over ten billion years rather than in a few minutes.',
      },
      {
        id: 'cno-role',
        prompt: 'What is the role of carbon in the CNO cycle?',
        options: [
          { id: 'a', text: 'It is consumed as fuel alongside hydrogen' },
          {
            id: 'b',
            text: 'It acts as a catalyst — it absorbs protons, passes through other nuclei, and is returned unchanged',
            correct: true,
          },
          { id: 'c', text: 'It is the product of the cycle, built up from hydrogen' },
          { id: 'd', text: 'It lowers the temperature needed for hydrogen to fuse' },
        ],
        explanation:
          'The net reaction is the same as the proton–proton chain: four protons become helium. Carbon shepherds the process and emerges intact, which is what makes it a catalyst rather than a fuel — and it raises rather than lowers the required temperature.',
      },
      {
        id: 'energy-source',
        prompt: 'Where does the energy released by fusion actually come from?',
        options: [
          { id: 'a', text: 'The kinetic energy of the colliding protons' },
          {
            id: 'b',
            text: 'A mass deficit: the helium nucleus weighs about 0.7 percent less than the four protons that formed it',
            correct: true,
          },
          { id: 'c', text: 'The gravitational energy released as material falls toward the core' },
          { id: 'd', text: 'The annihilation of matter with antimatter in the core' },
        ],
        explanation:
          'Binding a nucleus more tightly releases the difference as energy, and by E = mc² that difference shows up as missing mass. The Sun converts about 4.26 million tonnes of mass into energy every second.',
      },
    ],
  },

  'mass-determines-a-stars-life': {
    summary: {
      essential:
        'One number — the mass a star is born with — sets its core temperature, its fusion rate, its brightness, its lifetime and its final fate. The chain is short and the consequences are steep: doubling the mass makes a star roughly ten times brighter, so it burns through its larger fuel supply far faster and lives a much shorter life.',
      detailed:
        'The counterintuitive step is the last one. A bigger tank should last longer, and it would if consumption were constant. But luminosity rises as roughly the 3.5th power of mass while fuel rises only linearly, so lifetime falls as mass to the power of about −2.5. Nature also makes far more small stars than large ones, so the sky you see — dominated by rare luminous stars — is a badly biased sample of what actually exists.',
    },
    questions: [
      {
        id: 'lifetime',
        prompt:
          'A star with ten times the Sun’s mass has ten times as much fuel. Why does it live only about one three-hundredth as long?',
        options: [
          { id: 'a', text: 'Massive stars can only use a small fraction of their fuel' },
          {
            id: 'b',
            text: 'Its luminosity is thousands of times higher, so it consumes fuel far faster than the extra supply compensates for',
            correct: true,
          },
          {
            id: 'c',
            text: 'Massive stars lose most of their mass to stellar winds before they can fuse it',
          },
          {
            id: 'd',
            text: 'Fusion is less efficient at the higher temperatures inside a massive star',
          },
        ],
        explanation:
          'Consumption rate rises much faster than tank size. Luminosity goes roughly as mass to the 3.5, fuel goes as mass to the 1 — so lifetime falls as mass to the −2.5.',
      },
      {
        id: 'night-sky',
        prompt:
          'Nearly every star visible to the naked eye is far more luminous than the Sun. What does that tell you?',
        options: [
          { id: 'a', text: 'Luminous stars are the most common type in the Galaxy' },
          {
            id: 'b',
            text: 'Nothing about what is common — only that dim stars cannot be seen from far away, so the sky is a biased sample',
            correct: true,
          },
          { id: 'c', text: 'The Sun is unusually faint compared with typical stars' },
          { id: 'd', text: 'Most stars near the Sun happen to be large ones' },
        ],
        explanation:
          'This is a selection effect. Around three quarters of stars are dim red dwarfs and not one is visible without a telescope. Any brightness-limited survey over-represents luminous objects, and correcting for it is routine work.',
      },
    ],
  },

  'the-main-sequence': {
    summary: {
      essential:
        'Plot stars by brightness against temperature and most fall on one diagonal band. That band is not a stage stars travel along — it is a mass sequence. A star arrives at the position its mass dictates, stays near there while it fuses core hydrogen, and then leaves the band entirely.',
      detailed:
        'The band exists because a main-sequence star has essentially one free parameter. Fix the mass and the composition, and hydrostatic equilibrium plus energy transport fix everything else. About nine in ten observed stars are on it, not because the phase is special but because it lasts roughly ten times longer than everything that follows — so a snapshot of the sky catches most stars in it.',
    },
    questions: [
      {
        id: 'not-a-track',
        prompt: 'Does a star move along the main sequence as it ages?',
        options: [
          { id: 'a', text: 'Yes — it starts blue and hot and slides down to red and cool' },
          {
            id: 'b',
            text: 'No — position on the band is set by mass, and a star leaves the band when its core hydrogen runs out',
            correct: true,
          },
          { id: 'c', text: 'Yes — it starts red and faint and climbs to become blue and bright' },
          { id: 'd', text: 'Only massive stars move along it; low-mass stars stay put' },
        ],
        explanation:
          'It is a mass sequence, not an age sequence. A star drifts slightly during its life — the Sun is about 30 percent brighter than at birth — but that is a small local shift, not a journey along the band.',
      },
      {
        id: 'ninety-percent',
        prompt: 'Why are roughly 90 percent of observed stars on the main sequence?',
        options: [
          { id: 'a', text: 'Most stars never evolve beyond it' },
          {
            id: 'b',
            text: 'Because it lasts about ten times longer than the later stages, so a snapshot catches most stars in it',
            correct: true,
          },
          { id: 'c', text: 'Because later stages are too faint to detect' },
          { id: 'd', text: 'Because only stars of a certain mass range can leave it' },
        ],
        explanation:
          'Every star that lives long enough goes through the later stages. They are simply brief, so at any instant few stars are in them — which makes red giants rarer in a census even though every Sun-like star becomes one.',
      },
    ],
  },

  'the-life-of-a-sun-like-star': {
    summary: {
      essential:
        'Ten billion quiet years fusing hydrogen, then the interesting part. The core runs out of fuel and contracts; fusion moves into a shell around it and burns hotter than the core ever did; and the extra energy inflates the envelope into a red giant. Eventually the star sheds its outer layers entirely and leaves its bare core behind as a white dwarf.',
      detailed:
        'The core and the envelope move in opposite directions, which is the part worth holding on to. The core shrinks and heats while the star as a whole swells and cools. A Sun-like star never reaches carbon fusion, because its core becomes degenerate and cannot be compressed to the required temperature — so the sequence stops, the envelope departs as a planetary nebula, and what remains simply cools forever.',
    },
    questions: [
      {
        id: 'why-expand',
        prompt: 'Why does a star expand into a red giant when its core fuel runs out?',
        options: [
          { id: 'a', text: 'The core explodes and pushes the outer layers outward' },
          {
            id: 'b',
            text: 'The core contracts and heats, driving a hydrogen-burning shell that is more luminous than the core ever was — and the envelope expands to carry that energy out',
            correct: true,
          },
          {
            id: 'c',
            text: 'Gravity weakens as the star loses mass, letting the envelope drift outward',
          },
          {
            id: 'd',
            text: 'The star begins fusing helium, which releases far more energy than hydrogen',
          },
        ],
        explanation:
          'The star gets bigger because its centre got smaller. Core contraction heats the shell above it, the shell burns furiously, and the envelope must expand to radiate the increased luminosity at a lower surface temperature.',
      },
      {
        id: 'ending',
        prompt: 'How does a Sun-like star end?',
        options: [
          { id: 'a', text: 'It explodes as a supernova and leaves a neutron star' },
          {
            id: 'b',
            text: 'It sheds its envelope as a planetary nebula and leaves a slowly cooling white dwarf',
            correct: true,
          },
          { id: 'c', text: 'It collapses directly into a black hole once fusion stops' },
          { id: 'd', text: 'It gradually fades in place, keeping all its mass' },
        ],
        explanation:
          'No explosion is involved. The envelope leaves in a wind, the exposed core lights it briefly from inside, and about half the star’s original mass returns to interstellar space enriched with carbon and nitrogen.',
      },
    ],
  },

  'the-life-of-a-massive-star': {
    summary: {
      essential:
        'A massive star does everything the Sun will do, far faster, and then keeps going. Its hotter core burns hydrogen in a few million years, then helium, carbon, neon, oxygen and silicon — each stage shorter than the last, the final one lasting about a day — until it has built an iron core and has nothing left to burn.',
      detailed:
        'Two effects drive the acceleration. Each successive fuel yields less energy per kilogram, so more must be consumed per second. And beyond carbon burning, the core is hot enough to produce neutrinos that stream straight out, carrying energy away faster than light can. The core is refrigerated from within and must burn furiously just to stay supported. Meanwhile most massive stars are exchanging mass with a companion, which alters this picture substantially.',
    },
    questions: [
      {
        id: 'acceleration',
        prompt:
          'Why does each successive burning stage in a massive star last so much less time than the one before?',
        options: [
          { id: 'a', text: 'The star is running out of material to fuse' },
          {
            id: 'b',
            text: 'Later fuels release less energy per kilogram, and from carbon burning onward neutrinos carry energy away rapidly — so the core must burn far faster to stay supported',
            correct: true,
          },
          { id: 'c', text: 'The core shrinks, so there is less volume in which fusion can occur' },
          { id: 'd', text: 'Radiation pressure blows away the fuel before it can be consumed' },
        ],
        explanation:
          'It is an energy-budget problem. Poorer fuel plus enormous neutrino losses means the burning rate has to climb steeply. Hydrogen lasts millions of years; silicon lasts about a day.',
      },
      {
        id: 'binaries',
        prompt:
          'What is the most important complication to the single-star picture of massive stellar evolution?',
        options: [
          { id: 'a', text: 'Massive stars are rare, so few have been observed' },
          {
            id: 'b',
            text: 'Around 70 percent of massive stars exchange mass with a binary companion, which changes their mass, rotation and eventual fate',
            correct: true,
          },
          { id: 'c', text: 'Massive stars are always obscured by the dust clouds they formed in' },
          {
            id: 'd',
            text: 'Their cores are convective, which makes their structure unpredictable',
          },
        ],
        explanation:
          'Binary interaction is the typical case, not the exception. It can strip a star’s envelope or merge two stars, which is why several supernova classes and the masses of merging black holes cannot be understood from single-star models.',
      },
    ],
  },

  'red-giants-and-supergiants': {
    summary: {
      essential:
        'A red giant is a star whose core has contracted and whose envelope has swollen enormously in response. Its surface is cooler, hence red, but there is so much more surface that the star is far brighter overall. The see-saw between shrinking core and expanding envelope is the whole mechanism.',
      detailed:
        'Giants are also chemical factories with a delivery system. Deep convection in the swollen envelope reaches down into layers where fusion has changed the composition and carries the products to the surface, where stellar winds blow them into space. The proof that this happens is technetium: it has no stable isotope and decays away in a few hundred thousand years, so finding it in a giant’s atmosphere means it was made inside that star recently and brought up.',
    },
    questions: [
      {
        id: 'bigger-cooler-brighter',
        prompt:
          'A red giant has a cooler surface than the Sun but is a thousand times more luminous. How?',
        options: [
          { id: 'a', text: 'It fuses a more energetic fuel than hydrogen' },
          {
            id: 'b',
            text: 'Its radius is enormously larger, and luminosity depends on surface area as well as temperature',
            correct: true,
          },
          { id: 'c', text: 'Its surface only appears cool because of intervening dust' },
          { id: 'd', text: 'It emits most of its energy as neutrinos rather than light' },
        ],
        explanation:
          'Luminosity goes as radius squared times temperature to the fourth. A radius increase of a hundredfold beats a temperature drop of a factor of two by a wide margin.',
      },
      {
        id: 'technetium',
        prompt: 'Why is finding technetium in a red giant’s atmosphere such strong evidence?',
        options: [
          {
            id: 'a',
            text: 'Technetium is only produced in supernovae, so the star must have been near one',
          },
          {
            id: 'b',
            text: 'Every technetium isotope decays away in far less time than a star lives, so it must have been made inside that star recently and carried to the surface',
            correct: true,
          },
          {
            id: 'c',
            text: 'Technetium cannot exist in a gas, so its presence proves a solid surface',
          },
          { id: 'd', text: 'It is the only element that fusion can produce directly' },
        ],
        explanation:
          'It is a clock. Technetium-99 has a half-life of about 211,000 years against a stellar lifetime of billions, so any present must be freshly made — which converted stellar nucleosynthesis from theory into something with a smoking gun.',
      },
    ],
  },

  'making-the-elements': {
    summary: {
      essential:
        'The Universe began with hydrogen, helium and a trace of lithium. Everything else was assembled later, by several distinct processes: helium burning in stars makes carbon; massive stars and their explosions make oxygen through to the iron peak; exploding white dwarfs make about half the iron; and rapid neutron capture, confirmed in neutron-star mergers, makes gold and uranium.',
      detailed:
        'Two accidental gaps in nuclear physics shape the whole story. There is no stable nucleus with five nucleons and none with eight, so the expanding early Universe could not bridge past helium and stopped. Stars bridge it by the triple-alpha process, which only works efficiently because carbon-12 happens to have a resonance at almost exactly the right energy — a state Hoyle predicted from the fact that carbon exists, and which was then found.',
    },
    questions: [
      {
        id: 'not-all-stars',
        prompt: 'Which statement about the origin of the elements is most accurate?',
        options: [
          { id: 'a', text: 'Every element heavier than hydrogen was made inside stars' },
          {
            id: 'b',
            text: 'Hydrogen and most helium came from the Big Bang; heavier elements come from several distinct processes including stellar cores, dying giants, two kinds of supernova and neutron-star mergers',
            correct: true,
          },
          {
            id: 'c',
            text: 'All elements were made in the Big Bang and stars merely redistribute them',
          },
          { id: 'd', text: 'Elements heavier than iron were all made in core-collapse supernovae' },
        ],
        explanation:
          '"Made in stars" is a good slogan and an imprecise statement. Your hydrogen is primordial and has never been inside a star; your gold required a neutron-star collision. The elements have separate biographies.',
      },
      {
        id: 'bbn-stop',
        prompt:
          'Why did Big Bang nucleosynthesis stop at helium and lithium rather than continuing up the periodic table?',
        options: [
          { id: 'a', text: 'The Universe was never hot enough to fuse anything heavier' },
          {
            id: 'b',
            text: 'There is no stable nucleus with 5 or 8 nucleons, and bridging those gaps needs three-body collisions at densities the expanding Universe had already fallen below',
            correct: true,
          },
          {
            id: 'c',
            text: 'All the heavier nuclei that formed were immediately destroyed by photons',
          },
          { id: 'd', text: 'Carbon requires carbon as a catalyst, which did not yet exist' },
        ],
        explanation:
          'Two gaps in the chart of nuclides did it. Stars get past them via the triple-alpha process, which needs sustained high density — something the early Universe had for only a few minutes.',
      },
      {
        id: 'r-process',
        prompt:
          'What is the confirmed astrophysical site for making elements like gold and uranium?',
        options: [
          { id: 'a', text: 'The cores of massive stars during silicon burning' },
          { id: 'b', text: 'Neutron-star mergers, observed directly in 2017', correct: true },
          { id: 'c', text: 'Thermonuclear supernovae of white dwarfs' },
          { id: 'd', text: 'The helium-burning shells of red giants' },
        ],
        explanation:
          'GW170817 was seen in gravitational waves and light, and strontium was identified in the resulting glow. Whether mergers account for all r-process production, or whether rare supernova variants also contribute, is still open.',
      },
    ],
  },

  'iron-the-turning-point': {
    summary: {
      essential:
        'Fusing light nuclei releases energy; fusing heavy ones costs energy. The crossover is at the iron group, which is the most tightly bound region of the binding-energy curve. Once a massive star has built an iron core, no further fusion can pay for the pressure holding it up — so the core collapses.',
      detailed:
        'The collapse is accelerated by the two things that happen when you try to heat an iron core. Photons become energetic enough to blast iron nuclei apart, which absorbs energy exactly when the star needs to produce it. And the crushing density forces electrons into protons, removing the very electrons whose degeneracy pressure was providing support. Both effects speed up the collapse that caused them, and the core falls in under a second.',
    },
    questions: [
      {
        id: 'why-iron',
        prompt: 'Why can a star not keep fusing elements beyond iron to stay alive?',
        options: [
          { id: 'a', text: 'Iron nuclei are too large for the strong force to act on' },
          {
            id: 'b',
            text: 'Iron-group nuclei sit at the peak of the binding-energy curve, so fusing them absorbs energy rather than releasing it',
            correct: true,
          },
          { id: 'c', text: 'Iron sinks to the centre where the temperature is too low for fusion' },
          { id: 'd', text: 'The star runs out of protons before reaching iron' },
        ],
        explanation:
          'It is an energy question, not a difficulty question. Reactions that move toward the binding-energy peak release energy; those that move away must be paid for. A star can only run downhill in energy.',
      },
      {
        id: 'most-bound',
        prompt: 'Which nucleus is the most tightly bound per nucleon?',
        options: [
          { id: 'a', text: 'Iron-56, which is why it is the most abundant heavy nucleus' },
          {
            id: 'b',
            text: 'Nickel-62 — although iron-56 is what accumulates, because silicon burning proceeds through nickel-56 which then decays to iron',
            correct: true,
          },
          { id: 'c', text: 'Uranium-238, the heaviest naturally occurring nucleus' },
          { id: 'd', text: 'Helium-4, which is exceptionally stable' },
        ],
        explanation:
          '"Most bound" and "most abundant" are different questions with different answers. Nickel-62 wins on binding energy by a small margin; iron-56 wins on abundance because of the reaction pathway that produces it.',
      },
    ],
  },

  supernovae: {
    summary: {
      essential:
        'When an iron core collapses, the centre stiffens at nuclear density and the infalling material bounces, launching a shock. That shock stalls almost immediately, and something has to revive it — most likely neutrino heating aided by convection. About 99 percent of the energy leaves as neutrinos; the spectacular light is a rounding error.',
      detailed:
        'There are two unrelated things called supernovae, and conflating them causes real confusion. Core-collapse supernovae end massive stars and are powered by gravity. Thermonuclear supernovae destroy white dwarfs by runaway fusion and leave nothing behind. The observations of both are excellent. The detailed explosion mechanism of core collapse remains an active research problem rather than a settled result.',
    },
    questions: [
      {
        id: 'energy-budget',
        prompt: 'Where does most of a core-collapse supernova’s energy go?',
        options: [
          { id: 'a', text: 'Into the light we see, which is why it outshines a galaxy' },
          { id: 'b', text: 'Into neutrinos — about 99 percent of the total', correct: true },
          { id: 'c', text: 'Into the kinetic energy of the expelled material' },
          { id: 'd', text: 'Into gravitational waves radiated during the collapse' },
        ],
        explanation:
          'This was measured, not just calculated: two dozen neutrinos from SN 1987A arrived hours before the light, with energies and timing matching prediction. The visible display carries about 0.01 percent of the energy.',
      },
      {
        id: 'mechanism-status',
        prompt: 'What is the current status of the core-collapse explosion mechanism?',
        options: [
          { id: 'a', text: 'Fully solved — the bounce shock blows the star apart' },
          {
            id: 'b',
            text: 'The observations are excellent and the mechanism is an active research problem; neutrino heating aided by convection is the leading model but explosion energies and which stars explode are not settled',
            correct: true,
          },
          { id: 'c', text: 'Completely unknown — no viable model exists' },
          { id: 'd', text: 'Solved for massive stars but not for white dwarfs' },
        ],
        explanation:
          'The prompt shock is known to stall; reviving it is the problem. Three-dimensional simulations now do produce explosions, which is real progress, but often at lower energies than observed and with no consensus on which progenitors explode.',
      },
      {
        id: 'two-kinds',
        prompt: 'What distinguishes a thermonuclear (Type Ia) supernova from a core-collapse one?',
        options: [
          {
            id: 'a',
            text: 'It destroys a white dwarf by runaway fusion, is powered by nuclear energy rather than gravity, and leaves no remnant',
            correct: true,
          },
          { id: 'b', text: 'It occurs in more massive stars and leaves a black hole' },
          { id: 'c', text: 'It is the same process seen from a different angle' },
          { id: 'd', text: 'It happens only in the early Universe' },
        ],
        explanation:
          'Different progenitor, different power source, different outcome. Type Ia events are also the standardisable distance indicators used to discover the accelerating expansion of the Universe.',
      },
    ],
  },

  'what-happens-after-a-massive-star-dies': {
    summary: {
      essential:
        'Three endings, decided by what stops the collapse. Electron degeneracy stops it at planet size — a white dwarf. If gravity beats the electrons, neutrons take over and stop it at city size — a neutron star. If gravity beats the neutrons too, nothing known stops it, and a black hole forms.',
      detailed:
        'The endings are discrete rather than continuous because each support mechanism has a maximum load, past which it fails completely rather than gradually. What decides the outcome is the mass of the core at the end, which is related to birth mass in a way still not fully mapped — mass loss and binary interaction can move a star between outcomes, and some massive stars may collapse quietly without a bright supernova at all.',
    },
    questions: [
      {
        id: 'what-stops',
        prompt: 'What determines which of the three remnants a dying star leaves?',
        options: [
          { id: 'a', text: 'How much hydrogen it started with' },
          {
            id: 'b',
            text: 'The mass of its core at the end, which decides whether electron degeneracy, neutron degeneracy, or nothing can stop the collapse',
            correct: true,
          },
          { id: 'c', text: 'Whether the star was rotating rapidly' },
          { id: 'd', text: 'The metallicity of the gas cloud it formed from' },
        ],
        explanation:
          'It is a contest between gravity and a support mechanism with a hard ceiling. Metallicity and rotation matter indirectly, by changing how much mass the star loses and therefore how heavy the final core is.',
      },
      {
        id: 'failed-sn',
        prompt: 'What may happen to some of the most massive stars at the end of their lives?',
        options: [
          { id: 'a', text: 'They explode more violently than any other star' },
          {
            id: 'b',
            text: 'The shock may never revive, so the star collapses directly into a black hole with little or no visible explosion',
            correct: true,
          },
          { id: 'c', text: 'They shed all their mass and leave nothing at all' },
          { id: 'd', text: 'They become white dwarfs, because they have lost so much mass' },
        ],
        explanation:
          'A small number of candidate "vanishing" stars have been reported, and pre-explosion imaging has not found the high-mass red supergiant progenitors that models predict. The channel is plausible and actively investigated rather than established.',
      },
    ],
  },

  'neutron-stars': {
    summary: {
      essential:
        'A neutron star is more than the Sun’s mass in a ball about 22 kilometres across, at the density of an atomic nucleus. Many spin hundreds of times a second with enormous magnetic fields, and when their beams sweep past us we see pulsars whose timing rivals atomic clocks. They are the densest objects that still have a surface.',
      detailed:
        'They occupy an unusual epistemic position: we know their masses and radii to within a few percent, and we do not know what they are made of. Below the crust, nuclei dissolve into a neutron-rich fluid; at the several-times-nuclear densities of the core, the matter may remain hadronic or may become deconfined quarks. Mass and radius measurements plus the tidal deformability from GW170817 have narrowed the possibilities without resolving the composition.',
    },
    questions: [
      {
        id: 'what-holds-up',
        prompt: 'What supports a neutron star against collapse?',
        options: [
          { id: 'a', text: 'Heat left over from the supernova' },
          {
            id: 'b',
            text: 'Neutron degeneracy pressure together with the repulsive core of the nuclear force',
            correct: true,
          },
          { id: 'c', text: 'Its rapid rotation' },
          { id: 'd', text: 'The pressure of its magnetic field' },
        ],
        explanation:
          'Degeneracy pressure does not depend on temperature, which is why a neutron star does not shrink as it cools. The nuclear force contribution is substantial and is exactly what makes the maximum mass uncertain.',
      },
      {
        id: 'unknown-interior',
        prompt: 'What is genuinely unknown about neutron stars?',
        options: [
          { id: 'a', text: 'Whether they exist' },
          {
            id: 'b',
            text: 'What their matter is composed of at the highest densities in their cores',
            correct: true,
          },
          { id: 'c', text: 'Their typical masses' },
          { id: 'd', text: 'Whether they rotate' },
        ],
        explanation:
          'Masses, radii and rotation are measured. The composition at several times nuclear density — hadronic, hyperonic, or deconfined quark matter — cannot be reproduced in any laboratory, which makes neutron stars the only probe of that regime.',
      },
    ],
  },

  'white-dwarfs-and-the-chandrasekhar-limit': {
    summary: {
      essential:
        'A white dwarf is held up by electrons refusing to share quantum states, not by heat — so it does not shrink as it cools. That support behaves unlike anything familiar: adding mass makes it smaller. And past about 1.4 solar masses it fails entirely, because the electrons approach light speed and their pressure stops rising fast enough to keep up with gravity.',
      detailed:
        'The limit is a genuine prediction from first principles rather than a fitted number, which is why it was so hard for its contemporaries to accept: it implied that heavy stars must collapse to something with no known endpoint. Chandrasekhar was right, and the endpoints turned out to be neutron stars and black holes. A white dwarf pushed toward the limit does not collapse quietly — it detonates as a Type Ia supernova.',
    },
    questions: [
      {
        id: 'backwards',
        prompt: 'What happens to a white dwarf’s radius as you add mass to it?',
        options: [
          { id: 'a', text: 'It grows, as with any object gaining material' },
          {
            id: 'b',
            text: 'It shrinks, roughly as the inverse cube root of the mass',
            correct: true,
          },
          { id: 'c', text: 'It stays the same, because degeneracy pressure is fixed' },
          { id: 'd', text: 'It grows until the Chandrasekhar limit and then shrinks' },
        ],
        explanation:
          'More mass means more weight to support, which requires higher density, which means a smaller radius. Extrapolating the relation gives zero radius at a finite mass — and that mass is the limit.',
      },
      {
        id: 'why-limit',
        prompt: 'Why does electron degeneracy pressure fail above about 1.4 solar masses?',
        options: [
          { id: 'a', text: 'The electrons are crushed into the protons and disappear' },
          {
            id: 'b',
            text: 'The electrons become relativistic, and their pressure then rises too slowly with density to keep pace with gravity',
            correct: true,
          },
          { id: 'c', text: 'The exclusion principle stops applying at high density' },
          { id: 'd', text: 'The star gets so hot that degeneracy is lifted' },
        ],
        explanation:
          'Relativity is what sets the limit. Non-relativistic degenerate gas has pressure going as density to the 5/3; ultra-relativistic gas as density to the 4/3 — and 4/3 is exactly the exponent at which equilibrium becomes possible at only one mass.',
      },
    ],
  },

  'stellar-remnants-and-cosmic-recycling': {
    summary: {
      essential:
        'A star keeps only part of itself. The rest — enriched with what it manufactured — is blown back into interstellar space by winds and explosions, mixed into gas clouds, and eventually built into new stars and planets. Each cycle raises the heavy-element content of the gas slightly.',
      detailed:
        'The loop is lossy at both ends, and that is what makes galaxies differ. Material locked into remnants and long-lived small stars never returns. Supernova-driven winds blow material out of small galaxies entirely. Fresh un-enriched gas keeps falling in from outside and dilutes what is there. Some of the returned material condenses into dust grains, a few of which survive intact into meteorites — physical samples of other stars, held in laboratories.',
    },
    questions: [
      {
        id: 'return-fraction',
        prompt: 'What happens to the material of a star that has died?',
        options: [
          { id: 'a', text: 'Essentially all of it is locked into the remnant permanently' },
          {
            id: 'b',
            text: 'Roughly a third to a half returns to the interstellar medium enriched, while the rest stays locked in remnants and long-lived low-mass stars',
            correct: true,
          },
          { id: 'c', text: 'All of it returns to the gas, since remnants eventually evaporate' },
          { id: 'd', text: 'It is expelled from the galaxy entirely in every case' },
        ],
        explanation:
          'Low-mass stars are the biggest permanent sink: a red dwarf formed at the dawn of the Galaxy is still burning today and will be for trillions of years, holding its material out of circulation indefinitely.',
      },
      {
        id: 'presolar',
        prompt: 'What are presolar grains?',
        options: [
          { id: 'a', text: 'Dust particles that formed in the early Solar System' },
          {
            id: 'b',
            text: 'Dust grains that condensed around other stars before the Sun existed, recovered from meteorites and identifiable by their isotope ratios',
            correct: true,
          },
          { id: 'c', text: 'Grains that formed in the Big Bang' },
          { id: 'd', text: 'Interstellar dust collected by spacecraft in the outer Solar System' },
        ],
        explanation:
          'They are the only physical samples of material from other stars anyone has held. Their isotopic compositions are wildly unlike anything else in the Solar System, and they confirm stellar nucleosynthesis predictions grain by grain.',
      },
    ],
  },

  'what-is-a-galaxy': {
    summary: {
      essential:
        'A galaxy is stars, gas, dust, a central supermassive black hole and a vast dark-matter halo, all bound by gravity. The stars are the visible part and a minority of the mass. Gravitationally, a galaxy is mostly dark matter with a small amount of luminous material settled at its centre.',
      detailed:
        'The evidence is dynamical. Stars far out in a spiral orbit about as fast as stars near the middle, which requires far more mass, distributed far more extensively, than the light accounts for. The same conclusion arrives independently from gravitational lensing, from cluster dynamics and from the microwave background — which is why the inference is secure even though the identity of the matter is not.',
    },
    questions: [
      {
        id: 'rotation-curves',
        prompt: 'What do flat galaxy rotation curves show?',
        options: [
          { id: 'a', text: 'That galaxies rotate like solid bodies' },
          {
            id: 'b',
            text: 'That there is far more mass, spread far more widely, than the visible material accounts for',
            correct: true,
          },
          { id: 'c', text: 'That Newtonian gravity has been disproved' },
          { id: 'd', text: 'That the outer stars are being flung out of the galaxy' },
        ],
        explanation:
          'If visible matter were all the mass, outer stars should orbit more slowly, as outer planets do. They do not — which requires additional mass in an extended halo, corroborated by several independent methods.',
      },
      {
        id: 'emptiness',
        prompt: 'How much of a galaxy is empty space?',
        options: [
          { id: 'a', text: 'Very little — stars are densely packed' },
          {
            id: 'b',
            text: 'Almost all of it: if the Sun were a grain of sand, the nearest other grain would be about 6 kilometres away',
            correct: true,
          },
          { id: 'c', text: 'About half, with gas filling the rest' },
          { id: 'd', text: 'None, because dark matter fills the gaps' },
        ],
        explanation:
          'That emptiness is why galaxy collisions do not produce stellar collisions. The gas is a different story — gas clouds are enormous compared with stars and do collide directly.',
      },
    ],
  },

  'how-galaxies-form': {
    summary: {
      essential:
        'Galaxies were built from the bottom up. Tiny density variations, measured directly in the microwave background, grew under gravity into dark-matter halos. Gas fell in, cooled, and settled into rotating disks where stars formed. Small galaxies merged into larger ones, and that process continues.',
      detailed:
        'The key asymmetry is that gas can radiate energy away and dark matter cannot. So gas sinks and flattens into a disk while dark matter stays extended and roughly spherical. Without feedback, this over-produces stars by large factors at both the low and high mass ends — which is how we know feedback must be important, even though its microphysics is inserted into simulations as a calibrated recipe rather than derived.',
    },
    questions: [
      {
        id: 'why-disks',
        prompt: 'Why do galaxies have flat disks inside roughly spherical dark-matter halos?',
        options: [
          { id: 'a', text: 'Dark matter is repelled from the disk plane' },
          {
            id: 'b',
            text: 'Gas can radiate energy away and settle into a rotating disk; dark matter cannot lose energy and so stays extended',
            correct: true,
          },
          { id: 'c', text: 'The disk formed first and the halo accreted around it' },
          { id: 'd', text: 'Magnetic fields confine the gas to a plane' },
        ],
        explanation:
          'Both components feel the same gravity; only one can dissipate. Angular momentum then stops the cooling gas from reaching the centre, so it settles into a disk instead.',
      },
      {
        id: 'simulations',
        prompt: 'How should you interpret a cosmological simulation of galaxy formation?',
        options: [
          {
            id: 'a',
            text: 'As a reconstruction of what actually happened, computed from first principles',
          },
          {
            id: 'b',
            text: 'As a constrained model: gravity and initial conditions are solid, but star formation and feedback are inserted as calibrated recipes below the resolution limit',
            correct: true,
          },
          { id: 'c', text: 'As an artist’s impression with no predictive content' },
          { id: 'd', text: 'As a direct observation of the early Universe' },
        ],
        explanation:
          'The initial conditions are measured and the gravity is computed, which is genuinely strong. But the sub-resolution physics is parameterised and tuned, so matching the observations used for tuning is not by itself an independent test.',
      },
    ],
  },

  'the-major-types-of-galaxies': {
    summary: {
      essential:
        'Spirals, ellipticals, lenticulars and irregulars are useful shorthand, not natural kinds. Large classification surveys show morphology is continuous: many galaxies are genuinely intermediate and classifiers disagree on a substantial fraction. What morphology correlates with — gas content, star formation, stellar age, how the stars move — is more informative than the label.',
      detailed:
        'What is genuinely bimodal is colour, not shape. Galaxies cluster into a blue star-forming population and a red quiescent one with relatively few in between, which means the transition between them must be fast. Identifying what causes that rapid shutdown is the quenching problem, and it is unresolved. Hubble’s "early" and "late" type terminology is a historical artefact and implies no evolutionary sequence.',
    },
    questions: [
      {
        id: 'continuum',
        prompt: 'What do large morphological classification surveys show about galaxy types?',
        options: [
          { id: 'a', text: 'Galaxies fall cleanly into four discrete categories' },
          {
            id: 'b',
            text: 'Morphology is continuous — many galaxies are intermediate, and where you draw a boundary is a choice',
            correct: true,
          },
          { id: 'c', text: 'Nearly all galaxies are spirals; other types are rare' },
          { id: 'd', text: 'Morphology correlates with nothing physical' },
        ],
        explanation:
          'Galaxy Zoo produced a distribution of opinions per galaxy rather than a label, and that distribution is itself informative. The classes compress a continuous, multidimensional reality.',
      },
      {
        id: 'early-late',
        prompt: 'What do the terms "early-type" and "late-type" galaxy mean?',
        options: [
          { id: 'a', text: 'Ellipticals formed earlier in cosmic history than spirals' },
          {
            id: 'b',
            text: 'Nothing about time — they are historical labels from Hubble’s classification and imply no evolutionary sequence',
            correct: true,
          },
          {
            id: 'c',
            text: 'Early-type galaxies are still forming stars, late-type ones have stopped',
          },
          { id: 'd', text: 'Spirals evolve into ellipticals as they age' },
        ],
        explanation:
          'Hubble did not intend a time sequence, but the words invite that reading. If anything the tendency runs the other way: mergers turn disks into spheroids, not the reverse.',
      },
    ],
  },

  'spiral-galaxies': {
    summary: {
      essential:
        'A spiral galaxy is a rotating disk with a central bulge and bright arms. The arms are not fixed structures made of the same stars — they are a wave, a region where material piles up temporarily, with stars passing through and out again. The standard analogy is a traffic jam.',
      detailed:
        'The argument is decisive. A spiral disk rotates differentially, with inner material orbiting much faster than outer material, so any material arm would wind into an unrecognisable coil within a few rotations. Since spirals have rotated dozens of times and still show open arms, the arms must be a pattern rather than a structure. Gas compressed on entering the arm forms stars, which is why arms are lined with short-lived blue stars and glowing gas.',
    },
    questions: [
      {
        id: 'winding',
        prompt: 'Why can spiral arms not be fixed collections of stars?',
        options: [
          { id: 'a', text: 'Because stars are constantly being ejected from the galaxy' },
          {
            id: 'b',
            text: 'Because the disk rotates differentially, so a material arm would wind into a tight coil within a few rotations',
            correct: true,
          },
          { id: 'c', text: 'Because the stars in arms are too young to have completed an orbit' },
          { id: 'd', text: 'Because arms are made of gas rather than stars' },
        ],
        explanation:
          'The winding problem is what reveals the answer. Arms persist for billions of years across dozens of rotations, so they must be a wave passing through the material rather than a piece of it.',
      },
      {
        id: 'why-bright',
        prompt: 'Why do spiral arms look brighter than the rest of the disk?',
        options: [
          { id: 'a', text: 'They contain more stars in total' },
          {
            id: 'b',
            text: 'Gas is compressed as it enters the arm and forms short-lived hot blue stars, which mark where the wave is now',
            correct: true,
          },
          { id: 'c', text: 'They are closer to us than the rest of the disk' },
          { id: 'd', text: 'Dust is cleared from the arms, so we see through to more stars' },
        ],
        explanation:
          'The old stellar population shows almost no arm structure at all. The arms are visible because they are lined with the brief, luminous consequences of triggered star formation.',
      },
    ],
  },

  'elliptical-galaxies': {
    summary: {
      essential:
        'An elliptical galaxy is a smooth swarm of mostly old stars with little cold gas and little ongoing star formation. Its stars move on randomly oriented orbits rather than circling together — it is held up by disorder rather than by rotation, much as a gas is held up by the random motion of its molecules.',
      detailed:
        'Their chemistry dates them. Massive ellipticals are enhanced in oxygen relative to iron, which means their stars formed fast and stopped before thermonuclear supernovae had time to deliver iron hundreds of millions of years later. The leading formation picture is an early intense burst building a compact core, followed by billions of years of growth by swallowing smaller galaxies, which puffs the outskirts up without forming anything new.',
    },
    questions: [
      {
        id: 'support',
        prompt: 'How is an elliptical galaxy supported against gravity?',
        options: [
          { id: 'a', text: 'By organised rotation, like a spinning plate' },
          {
            id: 'b',
            text: 'By the random motions of its stars — disorder, not rotation',
            correct: true,
          },
          { id: 'c', text: 'By radiation pressure from its stars' },
          { id: 'd', text: 'By the pressure of the hot gas between its stars' },
        ],
        explanation:
          'You can measure the difference spectroscopically: rotation shifts one side of the galaxy blueward and the other redward, while random motion broadens every line instead. The width gives the velocity dispersion.',
      },
      {
        id: 'not-aged-spirals',
        prompt: 'Is an elliptical galaxy simply an old spiral?',
        options: [
          {
            id: 'a',
            text: 'Yes — all spirals eventually become ellipticals as their gas runs out',
          },
          {
            id: 'b',
            text: 'No — an undisturbed spiral keeps its disk. Turning organised rotation into disordered motion needs something violent, typically a major merger',
            correct: true,
          },
          { id: 'c', text: 'Yes, and the process is irreversible' },
          {
            id: 'd',
            text: 'No — ellipticals and spirals form from different kinds of dark matter',
          },
        ],
        explanation:
          'Age alone does not scramble a disk. And the change is not one-way: a spheroid that later accretes cold gas can regrow a disk. Morphology records dynamical history, not age.',
      },
    ],
  },

  'galaxy-mergers': {
    summary: {
      essential:
        'When galaxies collide, essentially no stars hit each other — the space between stars is so vast that direct collisions are negligible. What happens is gravitational: each galaxy distorts the other, flinging out long tidal tails and eventually merging the two. The Toomres demonstrated this in 1972 with a calculation that ignored almost everything.',
      detailed:
        'The gas behaves completely differently. Gas clouds are hundreds of light-years across and do collide directly, shocking and compressing, which can raise a galaxy’s star-formation rate a hundredfold. Compressed gas also loses angular momentum and funnels toward the centre, which links mergers to both starbursts and the feeding of supermassive black holes.',
    },
    questions: [
      {
        id: 'no-collisions',
        prompt: 'When two galaxies merge, what happens to their stars?',
        options: [
          { id: 'a', text: 'Large numbers collide, producing a burst of light' },
          {
            id: 'b',
            text: 'Essentially none collide — but their orbits are completely rearranged by the changing gravitational field',
            correct: true,
          },
          { id: 'c', text: 'They pass through unaffected, keeping their original orbits' },
          { id: 'd', text: 'Most are ejected from both galaxies entirely' },
        ],
        explanation:
          'Scale the Sun to a grain of sand and the nearest other grain is 6 kilometres away. Contact is negligible; gravitational rearrangement is total. The galaxy is transformed without a single star being struck.',
      },
      {
        id: 'gas',
        prompt: 'Why does a galaxy merger often trigger a burst of star formation?',
        options: [
          { id: 'a', text: 'Colliding stars release material that forms new stars' },
          {
            id: 'b',
            text: 'Gas clouds are large enough to collide directly, and the resulting shocks compress the gas',
            correct: true,
          },
          { id: 'c', text: 'The combined gravity of the two galaxies is stronger' },
          { id: 'd', text: 'Supernovae from one galaxy ignite the gas in the other' },
        ],
        explanation:
          'The same event is a collisionless rearrangement for the stars and a violent, dissipative collision for the gas. That difference explains most of what mergers do.',
      },
    ],
  },

  'star-formation-inside-galaxies': {
    summary: {
      essential:
        'A galaxy forms stars only if it has cold, dense gas. The rate rises steeply with the surface density of that gas, and the relation holds from quiet spiral disks to extreme starbursts. What differs between galaxies is mainly how much suitable gas they have, not how efficiently they use it.',
      detailed:
        'Star formation is strikingly inefficient — only a few percent of a molecular cloud becomes stars before feedback disrupts it. Across cosmic time, the Universe formed stars roughly ten times faster at its peak around ten billion years ago than it does now, driven mainly by the shrinking supply of cold gas accreting onto galaxies. Over half the stars that exist today formed before the Universe was half its present age.',
    },
    questions: [
      {
        id: 'what-limits',
        prompt: 'What most directly determines a galaxy’s star-formation rate?',
        options: [
          { id: 'a', text: 'The total mass of its dark-matter halo' },
          { id: 'b', text: 'How much cold, dense molecular gas it contains', correct: true },
          { id: 'c', text: 'The age of its oldest stars' },
          { id: 'd', text: 'How rapidly it rotates' },
        ],
        explanation:
          'The relation is tightest when only molecular gas is counted, because that is what stars actually form from. Atomic gas is a reservoir rather than a fuel.',
      },
      {
        id: 'cosmic-noon',
        prompt: 'When did the Universe form stars fastest?',
        options: [
          { id: 'a', text: 'In the first few hundred million years, then steadily declining' },
          {
            id: 'b',
            text: 'Around ten billion years ago, at roughly ten times today’s rate',
            correct: true,
          },
          { id: 'c', text: 'Today — the rate has been rising throughout cosmic history' },
          {
            id: 'd',
            text: 'The rate has been essentially constant since the first galaxies formed',
          },
        ],
        explanation:
          'The peak, often called cosmic noon, is measured by combining ultraviolet and infrared surveys across redshift. The decline since is driven mainly by the shrinking supply of accreting cold gas.',
      },
    ],
  },

  'galactic-feedback': {
    summary: {
      essential:
        'Stars and black holes push back on the gas around them. Supernovae and stellar winds disrupt clouds and can drive gas out of small galaxies entirely; actively feeding black holes inject enormous energy into large ones. Without this, models produce far more stars than galaxies actually contain — off by a factor of five even in a Milky Way-sized halo.',
      detailed:
        'The evidence that feedback matters is largely indirect but overwhelming, because the discrepancy without it is enormous and worst at both extremes of galaxy mass. The mass dependence points to the mechanisms: shallow potential wells in small galaxies let supernova winds expel gas, while black-hole energy is invoked in massive ones. In simulations, feedback is a tuned recipe rather than derived physics — so "feedback regulates star formation" is better read as "something with roughly these energetics is required".',
    },
    questions: [
      {
        id: 'why-needed',
        prompt: 'What is the main evidence that feedback must be important?',
        options: [
          { id: 'a', text: 'Direct imaging of supernova-driven winds in most galaxies' },
          {
            id: 'b',
            text: 'Without it, models predict far more stars than galaxies actually contain — by a factor of five at Milky Way mass and far more in small galaxies',
            correct: true,
          },
          { id: 'c', text: 'Galaxies are observed to be losing mass at the predicted rate' },
          { id: 'd', text: 'Feedback is required for dark matter to form halos' },
        ],
        explanation:
          'It is an accounting failure that reveals the need. Count the available gas, let it cool and form stars, and the answer is badly too high — so something removes or heats most of it.',
      },
      {
        id: 'why-small-galaxies',
        prompt: 'Why does supernova feedback affect small galaxies far more than large ones?',
        options: [
          { id: 'a', text: 'Small galaxies have more supernovae per unit mass' },
          {
            id: 'b',
            text: 'Their shallow gravitational wells mean a handful of supernovae can expel gas that a massive galaxy would merely stir',
            correct: true,
          },
          { id: 'c', text: 'Supernovae are more energetic in low-metallicity environments' },
          { id: 'd', text: 'Small galaxies have no dark matter to hold gas in' },
        ],
        explanation:
          'It comes down to escape velocity. That mass dependence is exactly what is needed to explain why small galaxies are so inefficient at converting their gas into stars.',
      },
    ],
  },

  'the-milky-way': {
    summary: {
      essential:
        'Our Galaxy is a barred spiral: a disk of a few hundred billion stars about 100,000 light-years across, with a bar, a bulge, a sparse halo of old stars and globular clusters, and a dark-matter halo far larger than all of it. The Sun sits 26,000 light-years from the centre.',
      detailed:
        'Mapping it is unusually hard because we are inside it and dust blocks the view along the plane. Most of what we know about its large-scale structure comes from radio and infrared observations that penetrate dust, plus Gaia’s precise distances and motions for over a billion stars. The number of spiral arms is still not universally agreed — a striking reminder that our own Galaxy is less well characterised than many we see face-on.',
    },
    questions: [
      {
        id: 'why-hard',
        prompt:
          'Why is the Milky Way’s structure harder to determine than that of many distant galaxies?',
        options: [
          { id: 'a', text: 'It is too faint to study in detail' },
          {
            id: 'b',
            text: 'We are inside it, so we see it edge-on through obscuring dust rather than face-on from outside',
            correct: true,
          },
          { id: 'c', text: 'It has no clear structure to determine' },
          { id: 'd', text: 'Its stars move too fast to be tracked' },
        ],
        explanation:
          'Every picture of the Milky Way from outside is an illustration. The map is built from inside, star by star, which is why even the number of spiral arms remains debated.',
      },
      {
        id: 'globulars',
        prompt: 'What is significant about the Milky Way’s globular clusters?',
        options: [
          { id: 'a', text: 'They are the youngest structures in the Galaxy' },
          {
            id: 'b',
            text: 'They are among the oldest objects known, at roughly 12–13 billion years, and place a lower bound on the age of the Universe',
            correct: true,
          },
          { id: 'c', text: 'They orbit within the disk plane' },
          { id: 'd', text: 'They contain most of the Galaxy’s stars' },
        ],
        explanation:
          'Their ages come from the main-sequence turn-off point. Historically this was a serious constraint — for a period the best cluster ages exceeded the best estimate of the cosmic age.',
      },
    ],
  },

  'our-place-inside-the-milky-way': {
    summary: {
      essential:
        'The Sun sits about halfway out in the disk, 26,000 light-years from the centre, in a minor feature between two major spiral arms. It orbits once every 220 million years or so. The band of light we call the Milky Way is simply the disk seen edge-on from inside it.',
      detailed:
        'The shape of the night sky is a direct readout of our position. Looking along the band means looking through the greatest depth of stars; looking away from it means looking out of the disk. The dark rifts are dust clouds, not gaps. And the band is brightest toward Sagittarius because that is the direction of the Galactic Centre.',
    },
    questions: [
      {
        id: 'the-band',
        prompt: 'What is the band of light called the Milky Way?',
        options: [
          { id: 'a', text: 'A nearby cloud of glowing gas' },
          {
            id: 'b',
            text: 'The combined light of billions of distant stars in our own galaxy’s disk, seen edge-on from inside it',
            correct: true,
          },
          { id: 'c', text: 'Light reflected from interstellar dust' },
          { id: 'd', text: 'A separate galaxy seen from a great distance' },
        ],
        explanation:
          'Galileo resolved it into individual stars in 1610. Its band shape tells you the Galaxy is a disk — a spherical distribution would look the same in every direction.',
      },
      {
        id: 'dark-rifts',
        prompt: 'What are the dark lanes running through the band of the Milky Way?',
        options: [
          { id: 'a', text: 'Regions where no stars have formed' },
          {
            id: 'b',
            text: 'Clouds of dust blocking the light of stars behind them',
            correct: true,
          },
          { id: 'c', text: 'Gaps between spiral arms' },
          { id: 'd', text: 'Shadows cast by nearby stars' },
        ],
        explanation:
          'They are absorption, not absence. The same dust is what makes the Galaxy’s structure so hard to map optically and why radio and infrared observations were needed.',
      },
    ],
  },

  'the-galactic-centre': {
    summary: {
      essential:
        'Stars at the centre of the Milky Way have been tracked for three decades, sweeping along complete Keplerian ellipses around something that emits almost no light. One star, S2, orbits every 16 years. Those orbits require 4.3 million solar masses inside a region smaller than the Solar System.',
      detailed:
        'Keep the observation and the inference distinct. What is measured is a mass, a volume and an absence of light, using exactly the reasoning Newton and Kepler supply for planets. That the object is a black hole is an inference — an extremely strong one, since no other configuration of that much mass in that little space could survive, and since general-relativistic effects on S2’s orbit have now been detected directly.',
    },
    questions: [
      {
        id: 'how-mass',
        prompt: 'How is the mass of Sagittarius A* determined?',
        options: [
          { id: 'a', text: 'From the brightness of the radiation it emits' },
          {
            id: 'b',
            text: 'By applying Kepler’s third law to the measured orbits of individual stars around it',
            correct: true,
          },
          { id: 'c', text: 'From the size of the shadow in the Event Horizon Telescope image' },
          { id: 'd', text: 'From the gravitational waves it emits' },
        ],
        explanation:
          'It is the same reasoning used for planets orbiting the Sun, run backwards: measure the orbit, solve for the enclosed mass. The measurement itself assumes nothing about what the object is.',
      },
      {
        id: 'observation-vs-inference',
        prompt:
          'Which part of the Galactic Centre result is an inference rather than a direct observation?',
        options: [
          { id: 'a', text: 'That stars orbit a common focus' },
          { id: 'b', text: 'That the central object is a black hole', correct: true },
          { id: 'c', text: 'That the enclosed mass is about 4.3 million solar masses' },
          { id: 'd', text: 'That the object emits very little light' },
        ],
        explanation:
          'The mass, the volume and the darkness are measured. "Black hole" is the conclusion — extremely well supported, since alternatives such as a dense cluster or a ball of degenerate fermions cannot survive in that volume, and relativistic effects on S2’s orbit have been detected.',
      },
    ],
  },

  'supermassive-black-holes-and-galaxy-evolution': {
    summary: {
      essential:
        'Nearly every large galaxy has a supermassive black hole whose mass correlates tightly with how fast the stars in the surrounding bulge move. The correlation is established. What produces it is not — and the black hole’s direct gravitational reach covers a region thousands of times smaller than the bulge it tracks.',
      detailed:
        'Two families of explanation compete. Self-regulation: as the black hole grows, the energy released by accretion drives gas away, starving both itself and star formation at a mass set by the depth of the potential well. Or merger averaging: repeated galaxy mergers drive the black-hole-to-bulge ratio toward a common value by the central limit theorem, with no interaction required at all. Both are viable and neither is established.',
    },
    questions: [
      {
        id: 'why-surprising',
        prompt:
          'Why is the correlation between black-hole mass and bulge velocity dispersion surprising?',
        options: [
          { id: 'a', text: 'Because black holes should have no mass at all' },
          {
            id: 'b',
            text: 'Because the black hole’s gravity dominates only a tiny central region, thousands of times smaller than the bulge whose properties it tracks',
            correct: true,
          },
          { id: 'c', text: 'Because bulges form long after black holes do' },
          { id: 'd', text: 'Because velocity dispersion cannot be measured accurately' },
        ],
        explanation:
          'From the bulge’s point of view the black hole is a negligible point mass. Yet the two numbers are locked together tightly enough to predict one from the other — which is why a mechanism is needed.',
      },
      {
        id: 'correlation-causation',
        prompt: 'What can be concluded from the M–σ relation?',
        options: [
          { id: 'a', text: 'That black holes control the evolution of their host galaxies' },
          {
            id: 'b',
            text: 'That black-hole mass and bulge properties are tightly linked — the causal mechanism, whether feedback or merger averaging, remains under investigation',
            correct: true,
          },
          { id: 'c', text: 'That galaxies form around pre-existing black holes' },
          { id: 'd', text: 'That the correlation is coincidental and carries no physical meaning' },
        ],
        explanation:
          'Observation, hypothesis and simulation output are three different things here. The correlation is a fact about black holes; "AGN feedback sets black-hole mass" is a hypothesis; and simulations reproducing it were calibrated to reproduce galaxy properties.',
      },
    ],
  },

  'where-did-the-atoms-in-your-body-come-from': {
    summary: {
      essential:
        'Your atoms have separate biographies. The hydrogen — about 10 percent of your mass and two thirds of your atoms — is primordial, made in the first minutes of the Universe and never inside a star. Carbon and nitrogen came largely from dying medium-mass stars; oxygen from massive stars that exploded; iron about half from exploding white dwarfs; and trace heavy elements like iodine from neutron-star collisions.',
      detailed:
        'Each of those had to be blown into interstellar space, mixed into a gas cloud, incorporated into the cloud that collapsed to form the Sun 4.6 billion years ago, condensed into rock, and taken up by living things. The precise version of "we are made of stardust" is more remarkable than the slogan: the oxygen and the iron in a single one of your cells came from different kinds of explosion, separated by hundreds of millions of years.',
    },
    questions: [
      {
        id: 'hydrogen',
        prompt: 'Where was the hydrogen in your body made?',
        options: [
          { id: 'a', text: 'In the cores of stars, like the other elements' },
          { id: 'b', text: 'In the first few minutes after the Big Bang', correct: true },
          { id: 'c', text: 'In supernova explosions' },
          { id: 'd', text: 'In the Earth’s early atmosphere' },
        ],
        explanation:
          'Stars destroy hydrogen; they do not make it. Every hydrogen nucleus in every water molecule in you is a proton that has existed unchanged for 13.8 billion years — by a wide margin the oldest thing you own.',
      },
      {
        id: 'oxygen-iron',
        prompt: 'Your oxygen and your iron came from different sources. Which is right?',
        options: [
          {
            id: 'a',
            text: 'Oxygen mainly from massive stars and their core-collapse supernovae; iron roughly half from thermonuclear supernovae of white dwarfs',
            correct: true,
          },
          { id: 'b', text: 'Both came from the same core-collapse supernovae' },
          { id: 'c', text: 'Oxygen from the Big Bang, iron from stars' },
          { id: 'd', text: 'Both came from neutron-star mergers' },
        ],
        explanation:
          'The split is read off a clock. Core-collapse supernovae deliver oxygen within a few million years of a star-forming burst; thermonuclear supernovae deliver iron only after hundreds of millions of years, because a white dwarf must form first.',
      },
      {
        id: 'stardust-precision',
        prompt: 'What is imprecise about the phrase "we are made of stardust"?',
        options: [
          { id: 'a', text: 'Nothing — it is exactly accurate' },
          {
            id: 'b',
            text: 'It compresses several distinct processes into one, and omits that your hydrogen is primordial and your heaviest elements needed stellar corpses colliding',
            correct: true,
          },
          { id: 'c', text: 'Dust is not involved in element production at all' },
          { id: 'd', text: 'The atoms in your body were actually made on Earth' },
        ],
        explanation:
          'The sentiment is right and worth keeping. The precise account — several processes, several kinds of object, ten billion years of galactic chemistry — is the better story, not a pedantic correction of it.',
      },
    ],
  },

  'from-stars-to-planets': {
    summary: {
      essential:
        'Every young star is surrounded by a disk of leftover gas and dust, and planets are built from it. Dust grains stick into pebbles, pebbles into larger bodies, and once objects are big enough gravity takes over. Those disks are now imaged directly, and many show rings and gaps.',
      detailed:
        'The middle of the process is genuinely unsolved. At around a metre in size, objects drift inward toward the star faster than they can grow, and collisions at those sizes tend to bounce or shatter rather than stick. The leading solution is the streaming instability, in which drag between pebbles and gas concentrates them into clumps that collapse directly under their own gravity, skipping the dangerous size range entirely. It works in simulations and has not been confirmed.',
    },
    questions: [
      {
        id: 'snow-line',
        prompt: 'Why does the inner Solar System have rocky planets and the outer one giants?',
        options: [
          { id: 'a', text: 'The Sun’s gravity sorted material by density' },
          {
            id: 'b',
            text: 'Beyond the snow line, ice is stable, so far more solid material was available to build large bodies',
            correct: true,
          },
          { id: 'c', text: 'The giants formed elsewhere and migrated outward' },
          { id: 'd', text: 'The inner disk had no gas at all' },
        ],
        explanation:
          'A single temperature boundary in one disk splits the outcome. Inside it only rock and metal condense; beyond it ice is available too, and there is far more of it.',
      },
      {
        id: 'metre-barrier',
        prompt: 'What is the unsolved step in planet formation?',
        options: [
          { id: 'a', text: 'How dust grains form in the first place' },
          {
            id: 'b',
            text: 'How metre-sized objects grow further, when they spiral into the star within a few hundred years and collisions tend to bounce or shatter',
            correct: true,
          },
          { id: 'c', text: 'How planets acquire atmospheres' },
          { id: 'd', text: 'How disks form around young stars' },
        ],
        explanation:
          'It is the step that makes everything afterwards possible, and no mechanism is confirmed. The streaming instability is the leading candidate because it bypasses the dangerous size range altogether.',
      },
    ],
  },

  'why-stellar-generations-matter': {
    summary: {
      essential:
        'The first stars formed from hydrogen and helium alone, so they could not have had rocky planets — there was no rock. Only after generations of stars had lived and died was there enough carbon, oxygen, silicon and iron for planets like Earth. Our existence required a chain of earlier stars.',
      detailed:
        'Astronomers sort stars by metallicity into populations, but the labels are cruder than they sound: metallicity varies continuously, and the numbering runs backwards relative to time because Baade defined the categories by location rather than age. Population III — the metal-free first generation — is a theoretical category with no confirmed members. Planet occurrence does correlate with host metallicity, strongly for giant planets and weakly for small rocky ones.',
    },
    questions: [
      {
        id: 'no-rock',
        prompt: 'Why could the first stars not have had Earth-like planets?',
        options: [
          { id: 'a', text: 'They were too massive for planets to survive around them' },
          {
            id: 'b',
            text: 'The gas contained only hydrogen and helium — there was no silicon, iron or oxygen to build a rocky planet from',
            correct: true,
          },
          { id: 'c', text: 'They formed too quickly for a disk to develop' },
          { id: 'd', text: 'The Universe was too hot for solids to condense anywhere' },
        ],
        explanation:
          'The raw material did not exist yet. Rocky planets are made almost entirely from the heavy-element fraction, which was zero at the start and is still under 2 percent of the Universe by mass today.',
      },
      {
        id: 'population-labels',
        prompt: 'What is misleading about the Population I / II / III labels?',
        options: [
          { id: 'a', text: 'They refer to galaxies rather than stars' },
          {
            id: 'b',
            text: 'They suggest three discrete generations, but metallicity varies continuously — and the numbering runs backwards in time, with Population I being youngest',
            correct: true,
          },
          { id: 'c', text: 'They apply only to stars in the Milky Way' },
          { id: 'd', text: 'They are based on stellar mass rather than composition' },
        ],
        explanation:
          'Baade defined the categories by where stars were rather than when they formed, which is how the numbering ended up inverted. Treat them as rough shorthand for how enriched the gas was.',
      },
    ],
  },

  'the-first-stars': {
    summary: {
      essential:
        'The first stars formed from metal-free gas roughly 100 to 200 million years after the Big Bang. Without carbon, oxygen or dust to cool it, that gas stayed warmer, and warmer gas fragments into larger pieces — so the first stars were probably much more massive than stars today. No individual one has ever been observed.',
      detailed:
        'The predicted mass range has shifted substantially as simulations improved: early work suggested a single very massive star per halo, while later calculations that resolved disk fragmentation found multiple stars with a broad distribution starting around ten solar masses. That revision is worth noting, because it shows how much the answer depends on what a calculation can resolve. The best evidence is second-hand — the chemical fingerprints of the oldest surviving stars, which formed from first-generation debris.',
    },
    questions: [
      {
        id: 'why-massive',
        prompt: 'Why are the first stars expected to have been more massive than stars today?',
        options: [
          { id: 'a', text: 'The early Universe was denser, so more material was available' },
          {
            id: 'b',
            text: 'Without heavy elements or dust, primordial gas could not cool efficiently — and warmer gas requires more mass before it collapses',
            correct: true,
          },
          { id: 'c', text: 'Gravity was stronger in the early Universe' },
          { id: 'd', text: 'They formed from mergers of smaller stars' },
        ],
        explanation:
          'Only molecular hydrogen was available as a coolant, and it works poorly. Primordial gas could reach a couple of hundred kelvin against ten or twenty in a modern cloud, and that raises the minimum mass for collapse considerably.',
      },
      {
        id: 'observed',
        prompt: 'Has an individual Population III star ever been observed?',
        options: [
          { id: 'a', text: 'Yes — JWST detected several in its earliest deep fields' },
          {
            id: 'b',
            text: 'No, and probably none ever will be; the evidence is indirect, from the chemistry of the oldest surviving stars',
            correct: true,
          },
          { id: 'c', text: 'Yes — the most metal-poor stars in the halo are Population III' },
          { id: 'd', text: 'Yes, but only in other galaxies' },
        ],
        explanation:
          'If the first stars were massive they died within a few million years. Searches for metal-free stars have found stars of extraordinarily low metallicity but none with zero — which is itself weak evidence that low-mass Population III stars were rare.',
      },
    ],
  },

  'the-first-galaxies': {
    summary: {
      essential:
        'Galaxies existed within a few hundred million years of the Big Bang — JWST has spectroscopically confirmed several above redshift 13. They are small, compact and forming stars intensely. Some appeared more massive or luminous than pre-launch models predicted, and what that means is still being argued.',
      detailed:
        'Separate what is measured from what is inferred. That these objects are at very high redshift is established spectroscopically. Their stellar masses and ages are fitted from their light using assumptions about the initial mass function, dust and star-formation history that are poorly constrained at these epochs — and each of those assumptions can move the inferred mass by a large factor. Most workers currently think no change to cosmology is required.',
    },
    questions: [
      {
        id: 'what-established',
        prompt: 'What has JWST established about the earliest galaxies?',
        options: [
          {
            id: 'a',
            text: 'That galaxies existed a few hundred million years after the Big Bang, confirmed spectroscopically',
            correct: true,
          },
          { id: 'b', text: 'That the standard cosmological model is wrong' },
          { id: 'c', text: 'That the first stars have been directly imaged' },
          { id: 'd', text: 'That early galaxies are identical to nearby ones' },
        ],
        explanation:
          'The redshifts are secure where spectroscopy exists — which matters, because several early photometric candidates turned out to be dusty galaxies at moderate redshift mimicking distant colours.',
      },
      {
        id: 'tension',
        prompt:
          'Some early galaxies appear more massive than models allow. What is the most likely explanation?',
        options: [
          { id: 'a', text: 'The cosmological model needs to be replaced' },
          {
            id: 'b',
            text: 'Stellar masses are fitted using poorly constrained assumptions — a more top-heavy IMF, bursty star formation, less dust or black-hole contamination can each account for it',
            correct: true,
          },
          { id: 'c', text: 'The redshift measurements are wrong' },
          { id: 'd', text: 'Dark matter behaves differently at early times' },
        ],
        explanation:
          'Stellar mass is not measured but inferred, and every input to that inference is weakly constrained at these epochs. Spectroscopic follow-up has already revised several masses downward.',
      },
    ],
  },

  'how-the-universe-became-chemically-rich': {
    summary: {
      essential:
        'A star’s outer layers preserve the composition of the gas it formed from, so old stars are dated chemical samples of the interstellar medium. Reading them reconstructs the Galaxy’s chemical history directly rather than modelling it — and the history is one of slow, uneven enrichment over more than thirteen billion years.',
      detailed:
        'Element ratios encode timescales. Plot oxygen against iron across many stars and the curve bends where thermonuclear supernovae began contributing iron, hundreds of millions of years after core-collapse supernovae had already delivered oxygen. Where the bend falls dates a population’s star formation. Enrichment is also uneven in space: massive galaxies retain what they make, while small ones lose it to supernova-driven winds.',
    },
    questions: [
      {
        id: 'stars-as-fossils',
        prompt: 'How can old stars reveal the chemical history of the Galaxy?',
        options: [
          { id: 'a', text: 'Their cores can be sampled by measuring neutrinos' },
          {
            id: 'b',
            text: 'Their outer layers preserve the composition of the gas they formed from, essentially unchanged for their whole lives',
            correct: true,
          },
          { id: 'c', text: 'They continuously manufacture new elements at their surfaces' },
          { id: 'd', text: 'Their ages can be read directly from their colours' },
        ],
        explanation:
          'Stars are dated samples of the interstellar medium, scattered through space and still legible. This is what makes stellar archaeology possible.',
      },
      {
        id: 'alpha-knee',
        prompt:
          'Plotting oxygen against iron across many stars produces a curve that bends. What does the bend mark?',
        options: [
          { id: 'a', text: 'The moment the Galaxy stopped forming stars' },
          {
            id: 'b',
            text: 'The point where thermonuclear supernovae began delivering iron, hundreds of millions of years after core-collapse supernovae had delivered oxygen',
            correct: true,
          },
          { id: 'c', text: 'A change in the initial mass function' },
          { id: 'd', text: 'The formation of the Sun' },
        ],
        explanation:
          'It is a timestamp built from a delay. Different galaxies show the bend at different iron abundances, revealing how fast each formed its stars.',
      },
    ],
  },

  'how-do-we-know-what-stars-are-made-of': {
    summary: {
      essential:
        'Each element absorbs light at a fixed, unique set of wavelengths, because electrons can only occupy certain energy levels. Match the dark lines in a star’s spectrum against elements measured in a laboratory and you know what the star contains. This is how a question once cited as permanently unanswerable became routine.',
      detailed:
        'Payne showed in 1925 that stars are overwhelmingly hydrogen and helium, against a prevailing view that the Sun resembled the Earth. Her insight was that line strength depends far more on temperature than on abundance — iron lines look strong because iron is easily excited at solar temperatures, not because there is much of it. Turning line strengths into abundances still requires a model atmosphere, and revising those models has moved widely quoted numbers substantially.',
    },
    questions: [
      {
        id: 'why-lines',
        prompt: 'Why does each element produce a unique pattern of spectral lines?',
        options: [
          { id: 'a', text: 'Because each element has a different density' },
          {
            id: 'b',
            text: 'Because its electrons can only occupy certain energy levels, so only photons matching the gaps between them are absorbed',
            correct: true,
          },
          { id: 'c', text: 'Because heavier elements absorb longer wavelengths' },
          { id: 'd', text: 'Because each element emits at a temperature unique to it' },
        ],
        explanation:
          'The levels are set by quantum mechanics and are identical for every atom of an element anywhere in the Universe — which is what makes the pattern a reliable fingerprint.',
      },
      {
        id: 'payne',
        prompt: 'What did Cecilia Payne establish in 1925?',
        options: [
          { id: 'a', text: 'That the Sun has roughly the same composition as the Earth' },
          {
            id: 'b',
            text: 'That stars are overwhelmingly hydrogen and helium, because line strength depends far more on temperature than on abundance',
            correct: true,
          },
          { id: 'c', text: 'That spectral lines are caused by the Doppler effect' },
          { id: 'd', text: 'That stellar composition cannot be determined from spectra' },
        ],
        explanation:
          'The result was so unexpected that she was persuaded to call it probably spurious in her own thesis. It was correct, and it overturned the prevailing picture entirely.',
      },
    ],
  },

  'measuring-stellar-distances': {
    summary: {
      essential:
        'Nearby stars are measured geometrically: as Earth orbits the Sun, a nearby star appears to shift, and the size of the shift gives the distance. Further out we use standard candles — objects whose true brightness can be determined, so that apparent brightness gives distance. Gaia has now measured parallaxes for over a billion stars.',
      detailed:
        'The word "ladder" is exact and matters. Parallax calibrates Cepheids; Cepheids calibrate Type Ia supernovae; supernovae reach across billions of light-years. Because each rung depends on the one below, a systematic error low down propagates all the way up and does not average out. That is why the persistent disagreement between ladder-based and microwave-background-based measurements of the expansion rate is taken seriously.',
    },
    questions: [
      {
        id: 'parallax',
        prompt: 'What does stellar parallax measure directly?',
        options: [
          { id: 'a', text: 'A star’s velocity toward or away from us' },
          {
            id: 'b',
            text: 'Its distance, geometrically, from the apparent shift in its position as Earth orbits the Sun',
            correct: true,
          },
          { id: 'c', text: 'Its intrinsic brightness' },
          { id: 'd', text: 'Its mass, from its gravitational deflection of background light' },
        ],
        explanation:
          'It is pure geometry with no assumptions about the star. That is what makes it the foundation on which every other rung of the distance ladder is calibrated.',
      },
      {
        id: 'ladder',
        prompt: 'Why is the "ladder" metaphor for cosmic distance measurement important?',
        options: [
          { id: 'a', text: 'Because the rungs are independent checks on each other' },
          {
            id: 'b',
            text: 'Because each rung is calibrated using the one below, so a systematic error low down propagates all the way to the top',
            correct: true,
          },
          { id: 'c', text: 'Because it only works for objects arranged in a line' },
          { id: 'd', text: 'Because distances can only be measured in fixed steps' },
        ],
        explanation:
          'The dependence is the point. It is why the ladder receives so much scrutiny, and why the Hubble tension is treated as a possible systematic rather than dismissed.',
      },
    ],
  },

  'how-do-we-measure-a-stars-temperature': {
    summary: {
      essential:
        'Hotter objects glow bluer, so a star’s colour is a thermometer readable from any distance — blue stars are hot, red stars are cool, which reverses the everyday association. Colour is quick but approximate; spectral lines give a better answer, because which lines appear and how strong they are depends steeply on temperature.',
      detailed:
        'The main limitation of colour is interstellar dust, which preferentially removes blue light and makes distant stars look cooler than they are. Reddening is degenerate with temperature — a hot star behind dust can mimic a cooler star without it — and breaking the degeneracy needs spectroscopy or a wide wavelength baseline. The spectral class sequence O B A F G K M is ordered by temperature, but the letters were assigned before anyone knew that.',
    },
    questions: [
      {
        id: 'colour-temp',
        prompt: 'Which is hotter, a blue star or a red one?',
        options: [
          { id: 'a', text: 'The red one, as with a red-hot poker' },
          {
            id: 'b',
            text: 'The blue one — hotter objects peak at shorter wavelengths',
            correct: true,
          },
          { id: 'c', text: 'They are the same; colour indicates composition, not temperature' },
          { id: 'd', text: 'It depends on the star’s distance' },
        ],
        explanation:
          'Wien’s law: the peak wavelength moves shorter as temperature rises. An O star at 40,000 K is blue-white; an M dwarf at 3,000 K is deep red. The everyday association of red with hot is backwards.',
      },
      {
        id: 'dust',
        prompt: 'What is the main limitation of estimating a star’s temperature from its colour?',
        options: [
          { id: 'a', text: 'Colour cannot be measured accurately for faint stars' },
          {
            id: 'b',
            text: 'Interstellar dust removes blue light preferentially, making stars look cooler than they are',
            correct: true,
          },
          { id: 'c', text: 'Colour depends mainly on composition rather than temperature' },
          { id: 'd', text: 'Stars change colour rapidly over human timescales' },
        ],
        explanation:
          'Reddening is degenerate with temperature, so correcting for it is essential and imperfect. Spectroscopy breaks the degeneracy because line ratios respond to temperature in ways dust does not mimic.',
      },
    ],
  },

  'measuring-stellar-mass': {
    summary: {
      essential:
        'There is only one direct way to weigh a star: watch something orbit it and apply Newton’s law of gravitation. That means binary stars supply nearly all our stellar masses. Measure the orbit’s size and period to get the total mass, and the ratio of the two stars’ speeds to divide it between them.',
      detailed:
        'The most accurate masses come from eclipsing binaries, where the orbit happens to be edge-on so the inclination is known and both masses and radii follow with no assumed model of stellar structure. Around two hundred such systems anchor the empirical mass–luminosity relation. Most quoted masses for single stars are model-based estimates calibrated on those binaries — usually good, and a different kind of number.',
    },
    questions: [
      {
        id: 'only-way',
        prompt: 'What is the only direct way to measure a star’s mass?',
        options: [
          { id: 'a', text: 'From its luminosity, using the mass–luminosity relation' },
          {
            id: 'b',
            text: 'By observing something orbiting it and applying gravity',
            correct: true,
          },
          { id: 'c', text: 'From the width of its spectral lines' },
          { id: 'd', text: 'From its surface temperature and radius' },
        ],
        explanation:
          'Only gravity responds to mass. The mass–luminosity relation is useful but indirect — it is itself calibrated on binary measurements, so using it to check stellar models would be circular.',
      },
      {
        id: 'eclipsing',
        prompt: 'Why are eclipsing binaries especially valuable?',
        options: [
          { id: 'a', text: 'They are the most common type of binary' },
          {
            id: 'b',
            text: 'Eclipses mean the orbit is seen edge-on, so the inclination is known and both masses and radii can be determined without assuming a stellar model',
            correct: true,
          },
          { id: 'c', text: 'They are the brightest stars in the sky' },
          { id: 'd', text: 'Their orbital periods are unusually long' },
        ],
        explanation:
          'Without eclipses, the unknown inclination means only a lower bound on mass can be extracted. The edge-on geometry removes that degeneracy, which is why a few hundred such systems carry so much weight.',
      },
    ],
  },

  'how-do-we-know-galaxies-are-moving': {
    summary: {
      essential:
        'Spectral lines sit at known wavelengths, so any shift in their observed position measures motion along the line of sight. Slipher found in the 1910s that almost all spiral nebulae were redshifted; combined with Hubble’s distances a decade later, that became the evidence for an expanding Universe.',
      detailed:
        'A distinction matters. Nearby, the shift is an ordinary Doppler effect from motion through space, and galaxies show both blueshifts and redshifts — Andromeda is approaching. For distant galaxies the dominant effect is cosmological: space expanded while the light was travelling, stretching its wavelength. Treating that as a velocity gives numbers that do not correspond to anything physical.',
    },
    questions: [
      {
        id: 'cosmological',
        prompt: 'What causes the redshift of a very distant galaxy?',
        options: [
          { id: 'a', text: 'Its motion through space, as an ordinary Doppler shift' },
          {
            id: 'b',
            text: 'The expansion of space while the light was in transit, which stretched its wavelength',
            correct: true,
          },
          { id: 'c', text: 'Light losing energy as it travels' },
          { id: 'd', text: 'Absorption by intervening dust' },
        ],
        explanation:
          'It is not motion through space, which is why applying the Doppler formula to large redshifts produces meaningless velocities. Nearby, the distinction hardly matters; it stops being negligible well before the distances at which people casually apply it.',
      },
      {
        id: 'andromeda',
        prompt: 'Andromeda is blueshifted — approaching us. Does this contradict cosmic expansion?',
        options: [
          { id: 'a', text: 'Yes — it shows expansion is not universal' },
          {
            id: 'b',
            text: 'No — within a gravitationally bound system like the Local Group, ordinary gravity governs and expansion does not operate',
            correct: true,
          },
          { id: 'c', text: 'Yes — it means Andromeda is not really a galaxy' },
          { id: 'd', text: 'No — the blueshift is caused by Andromeda’s rotation' },
        ],
        explanation:
          'Expansion is not a force pushing things apart everywhere. It describes large-scale behaviour where nothing is bound. The Local Group is bound; the space between distant clusters is not.',
      },
    ],
  },

  'reading-the-light-of-the-universe': {
    summary: {
      essential:
        'Almost everything in this section came from light. A single spectrum constrains composition, temperature, surface gravity, rotation, radial velocity and magnetic field — because each of those affects the lines in a different and largely separable way. Astronomy is the discipline of extracting the maximum from arriving photons.',
      detailed:
        'The technique scales from exoplanet atmospheres to the most distant galaxies without changing its logic. What changes is the difficulty. And every extracted number is data plus a model: a spectrum is an observation, but an abundance or a temperature derived from it depends on a model atmosphere — which is why widely quoted stellar parameters can shift when the modelling improves, with no new observation involved.',
    },
    questions: [
      {
        id: 'how-much',
        prompt: 'What can a single high-quality stellar spectrum tell you?',
        options: [
          { id: 'a', text: 'Only the star’s chemical composition' },
          {
            id: 'b',
            text: 'Composition, temperature, surface gravity, rotation speed, radial velocity and magnetic field strength — because each affects the lines differently',
            correct: true,
          },
          { id: 'c', text: 'Only its distance' },
          { id: 'd', text: 'Its age, directly' },
        ],
        explanation:
          'The effects are largely independent, which is what allows them to be disentangled. Rotation broadens lines symmetrically, pressure broadens wings, magnetic fields split lines, motion shifts them all together.',
      },
      {
        id: 'model-dependence',
        prompt: 'Why can a widely quoted stellar abundance change without any new observation?',
        options: [
          { id: 'a', text: 'Because stars change composition over decades' },
          {
            id: 'b',
            text: 'Because turning line strengths into abundances requires a model atmosphere, and improving the model changes the result',
            correct: true,
          },
          { id: 'c', text: 'Because instruments are recalibrated' },
          { id: 'd', text: 'Because abundances are arbitrary conventions' },
        ],
        explanation:
          'The solar oxygen abundance is the cautionary example: it moved substantially when three-dimensional atmospheres replaced one-dimensional ones, and broke a long-standing agreement with helioseismology that is still not fully repaired.',
      },
    ],
  },

  'how-long-do-stars-live': {
    summary: {
      essential:
        'Stellar lifetimes span a factor of about a million. The most massive stars last a few million years; the Sun gets about ten billion; the smallest red dwarfs are predicted to burn for trillions — longer than the Universe has existed, which means not one has ever died.',
      detailed:
        'Lifetime falls as roughly mass to the power −2.5, because luminosity rises far faster than fuel supply does. Low-mass stars do even better than that scaling suggests, because they are fully convective and can burn nearly all their hydrogen rather than only the core’s tenth. That prediction cannot be tested: no red dwarf has aged appreciably yet, and none will for trillions of years.',
    },
    questions: [
      {
        id: 'red-dwarfs',
        prompt: 'How many red dwarfs have reached the end of their lives?',
        options: [
          { id: 'a', text: 'Most of those formed in the early Universe' },
          {
            id: 'b',
            text: 'None — their predicted lifetimes exceed the age of the Universe by a factor of a hundred or more',
            correct: true,
          },
          { id: 'c', text: 'About half of them' },
          { id: 'd', text: 'All of the ones formed before the Milky Way’s disk' },
        ],
        explanation:
          'They are faint, so they consume fuel slowly, and fully convective, so they can use nearly all of it. Their eventual fate is a model extrapolation with no observational check available for trillions of years.',
      },
      {
        id: 'palimpsest',
        prompt: 'What does the range of stellar lifetimes imply about the stars you can see?',
        options: [
          { id: 'a', text: 'They all formed at about the same time' },
          {
            id: 'b',
            text: 'Every massive star visible formed recently, while red dwarfs may have formed at any time in the last thirteen billion years',
            correct: true,
          },
          { id: 'c', text: 'The brightest stars are the oldest' },
          { id: 'd', text: 'Stellar ages cannot be inferred from mass' },
        ],
        explanation:
          'The sky mixes objects with wildly different formation dates. Massive stars are necessarily young because none survives long; low-mass stars carry no such constraint.',
      },
    ],
  },

  'can-we-see-the-first-stars': {
    summary: {
      essential:
        'No. JWST has found galaxies a few hundred million years after the Big Bang, which is a genuine achievement and not the same thing — those galaxies already contain heavy elements, so earlier stars had already lived and died. Detecting an individual primordial star is likely beyond any telescope now planned.',
      detailed:
        'Several routes could give a defensible detection short of resolving a single star: a pair-instability supernova, which only very massive metal-free stars produce; a galaxy spectrum with no detectable metal lines; or the 21 cm signature of primordial hydrogen responding to the first starlight. The EDGES claim of such a signal in 2018 was not confirmed by an independent experiment and is currently regarded as unconfirmed.',
    },
    questions: [
      {
        id: 'jwst',
        prompt: 'Has JWST observed the first stars?',
        options: [
          { id: 'a', text: 'Yes — that was its primary result' },
          {
            id: 'b',
            text: 'No — it has observed early galaxies, which already contain heavy elements, so earlier stars must have preceded them',
            correct: true,
          },
          { id: 'c', text: 'Yes, but only in gravitationally lensed fields' },
          { id: 'd', text: 'No, because the first stars emitted no light' },
        ],
        explanation:
          'Three claims often get merged. Galaxies at 300 million years: established. Those galaxies containing the first stars: not shown, and the detected metals argue against it. A resolved Population III star: no.',
      },
      {
        id: 'what-counts',
        prompt: 'Which would count as strong evidence for the first stars?',
        options: [
          { id: 'a', text: 'A very distant galaxy detected photometrically' },
          {
            id: 'b',
            text: 'A pair-instability supernova, which only very massive metal-free stars can produce and which has a distinctive light curve',
            correct: true,
          },
          { id: 'c', text: 'A metal-poor star in the Milky Way halo' },
          { id: 'd', text: 'Any object above redshift 10' },
        ],
        explanation:
          'The pair-instability mechanism operates only in a specific mass range that requires metal-free composition, so finding one would be decisive. A metal-poor halo star is second-generation evidence, useful but indirect.',
      },
    ],
  },

  'what-we-still-dont-understand-about-stars': {
    summary: {
      essential:
        'Stellar physics predicts lifetimes, luminosities and structures that match observation across an enormous range — and has specific, load-bearing gaps. Convection is modelled with a one-parameter recipe from 1958. Mass-loss rates for massive stars are uncertain by factors of several. The supernova explosion mechanism is unresolved, neutron-star interiors are unknown, and most massive stars are in binaries the standard picture ignores.',
      detailed:
        'A useful test of whether a gap is serious is whether it changes a number the field depends on. Convection does — it shifts predicted stellar ages and radii. Mass loss does — it decides whether a star leaves a neutron star or a black hole. These are gaps in specific mechanisms inside a framework that works, which is the normal condition of a mature science rather than a sign of confusion.',
    },
    questions: [
      {
        id: 'convection',
        prompt: 'How is convection inside stars currently modelled?',
        options: [
          {
            id: 'a',
            text: 'From first principles, by solving the fluid equations in three dimensions',
          },
          {
            id: 'b',
            text: 'With a one-dimensional recipe containing a free parameter calibrated on the Sun and applied everywhere',
            correct: true,
          },
          { id: 'c', text: 'It is neglected, because it carries little energy' },
          { id: 'd', text: 'It is measured directly for each star' },
        ],
        explanation:
          'Mixing-length theory dates from 1958 and has survived because it works well enough. Three-dimensional simulations show the free parameter ought to vary with temperature, gravity and composition rather than being universal.',
      },
      {
        id: 'mass-loss',
        prompt: 'Why does uncertainty in massive-star mass-loss rates matter so much?',
        options: [
          { id: 'a', text: 'It changes how bright the star appears' },
          {
            id: 'b',
            text: 'Because the mass at the end determines the remnant, so it decides whether a star leaves a neutron star or a black hole',
            correct: true,
          },
          { id: 'c', text: 'It affects the star’s colour but nothing else' },
          { id: 'd', text: 'It changes the star’s chemical composition at birth' },
        ],
        explanation:
          'Rates are uncertain by factors of several from clumping corrections alone, and giant eruptions like Eta Carinae’s are not predicted by any theory — so a star’s final mass, and hence its fate, inherits substantial uncertainty.',
      },
    ],
  },

  'what-we-still-dont-understand-about-galaxies': {
    summary: {
      essential:
        'The cosmological framework is solid: measured initial conditions, computable dark-matter structure growth, galaxies forming inside halos. What is not solid is the baryonic physics — star formation, feedback, black-hole growth — which happens on scales far below what cosmological simulations can resolve and is therefore inserted as calibrated recipes.',
      detailed:
        'It is a strange position: the exotic component we cannot identify is the part modelled most confidently, because it only feels gravity, while ordinary matter defeats us because it radiates and forms stars. Outstanding problems include where supermassive black-hole seeds came from, why quenching is so fast, and dwarf-galaxy discrepancies that may reflect baryonic physics or may point to dark matter behaving differently than assumed.',
    },
    questions: [
      {
        id: 'what-is-uncertain',
        prompt: 'Which part of galaxy formation is least well understood?',
        options: [
          { id: 'a', text: 'The growth of dark-matter structure from the initial conditions' },
          {
            id: 'b',
            text: 'The baryonic physics — star formation, feedback and black-hole growth — which operates below simulation resolution',
            correct: true,
          },
          { id: 'c', text: 'The initial density fluctuations' },
          { id: 'd', text: 'Whether galaxies form inside dark-matter halos at all' },
        ],
        explanation:
          'The ordinary matter is the hard part, because it does chemistry, radiates and forms stars on scales no cosmological simulation resolves. The dark matter is easier precisely because it only feels gravity.',
      },
      {
        id: 'simulation-evidence',
        prompt:
          'A simulation reproduces the observed distribution of galaxy masses. What does that establish?',
        options: [
          { id: 'a', text: 'That the implemented feedback microphysics is correct' },
          {
            id: 'b',
            text: 'That the recipes have roughly the right net effect — but since they were calibrated on such observations, matching them is partly a design goal',
            correct: true,
          },
          { id: 'c', text: 'Nothing at all' },
          { id: 'd', text: 'That dark matter must be cold' },
        ],
        explanation:
          'The stronger evidence is when a calibrated model reproduces observations it was never tuned to — which modern simulations do for sizes, morphologies and clustering. That still does not establish the microphysics.',
      },
    ],
  },
};
