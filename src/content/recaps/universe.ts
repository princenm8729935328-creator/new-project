/**
 * Recaps for Universe & Cosmology.
 *
 * The questions here lean hard on the distinctions the section spent seventeen
 * topics establishing: expansion is not an explosion, inflation is not
 * observed, dark matter is inferred rather than detected, and the observable
 * Universe is a horizon rather than an edge. Every distractor is a real
 * misconception rather than an invented wrong answer.
 */
import type { RecapsByTopic } from '../schema/recap';

export const UNIVERSE_RECAPS: RecapsByTopic = {
  'big-bang-model': {
    summary: {
      essential:
        'The Big Bang model is a history of expansion and cooling, not an account of a beginning. Run the observed expansion backwards and everything was hotter, denser and closer together — everywhere at once, with no centre and no edge. Three independent lines of evidence support it: receding galaxies, the microwave afterglow, and the amounts of the lightest elements. What it does not claim is a cause, a location, or a "before".',
      detailed:
        'Hold three things together. First, the mechanism: space itself grows, so every observer sees everything receding and none of them is at the centre. Second, the evidence: the distance–redshift relation, a 2.725 K thermal background, and primordial helium and deuterium abundances that agree with the CMB on a single parameter measured 380,000 years apart. Third, the boundary: running the equations back to t = 0 gives a singularity, and a singularity is where general relativity stops being trustworthy — not a described event. The model is confident about the history and silent about the origin, and confusing the two is the source of almost every misconception about it.',
    },
    questions: [
      {
        id: 'centre',
        prompt: 'Where in space did the Big Bang happen?',
        options: [
          { id: 'a', text: 'At a single point that we could in principle travel to' },
          {
            id: 'b',
            text: 'Everywhere at once — every region was part of the hot dense state',
            correct: true,
          },
          { id: 'c', text: 'At the centre of the observable Universe, where we happen to be' },
          { id: 'd', text: 'Outside space, in a void that space then expanded into' },
        ],
        explanation:
          'The model describes space itself becoming less dense everywhere, not matter flying apart through pre-existing space. Every galaxy sees the same recession in every direction, which is what uniform expansion produces and what an explosion from a point would not.',
      },
      {
        id: 'evidence',
        prompt:
          'Why is the agreement between Big Bang nucleosynthesis and the CMB such strong evidence?',
        options: [
          { id: 'a', text: 'Because they are two measurements of the same event at the same time' },
          {
            id: 'b',
            text: 'Because two independent observations, separated by 380,000 years of cosmic history, give the same value for one parameter',
            correct: true,
          },
          { id: 'c', text: 'Because the CMB was predicted before it was found' },
          { id: 'd', text: 'Because nucleosynthesis can be reproduced in a laboratory' },
        ],
        explanation:
          'Light-element abundances fix the ratio of baryons to photons in the first minutes; the CMB acoustic peaks fix it again from an epoch far later. Two unrelated routes to the same number is much harder to arrange by accident than a single successful fit.',
      },
      {
        id: 'before',
        prompt: 'What does the Big Bang model say happened before the Big Bang?',
        options: [
          { id: 'a', text: 'Nothing existed; time itself began' },
          { id: 'b', text: 'A previous universe collapsed' },
          {
            id: 'c',
            text: 'The model makes no claim — the question lies outside where the theory is trustworthy',
            correct: true,
          },
          { id: 'd', text: 'A quantum vacuum fluctuation created spacetime' },
        ],
        explanation:
          'Extrapolating the equations to t = 0 produces a singularity, which signals the failure of general relativity rather than a described physical moment. Each of the other answers is a proposal, not a result of the model.',
      },
    ],
  },

  expansion: {
    summary: {
      essential:
        'Space between galaxies is growing, and the further away a galaxy is the faster it recedes. Light emitted long ago is stretched during its journey, arriving redder than it left — and that redshift is what astronomers actually measure. Expansion only wins where gravity is too weak to hold things together: galaxies, solar systems and you are not expanding.',
      detailed:
        'The chain runs: expansion → stretched wavelengths → measured redshift → distance and look-back time. Redshift is not a Doppler shift from motion through space; it is the accumulated growth of the metric while the light was in flight, so 1 + z is exactly the factor by which the Universe has grown since emission. The expansion rate itself is contested: the value inferred from the early Universe (67.4) and the value measured on the local distance ladder (73.0 km/s/Mpc) disagree by about 5σ, which is either a hidden systematic or a gap in the standard model.',
    },
    questions: [
      {
        id: 'redshift',
        prompt: 'What causes the cosmological redshift of a distant galaxy?',
        options: [
          {
            id: 'a',
            text: 'The galaxy is moving through space away from us, like a receding ambulance',
          },
          {
            id: 'b',
            text: 'Space grew while the light was travelling, stretching the wave along with it',
            correct: true,
          },
          { id: 'c', text: 'Dust between us and the galaxy absorbs the blue light' },
          { id: 'd', text: 'The light loses energy to gravity as it climbs out of the galaxy' },
        ],
        explanation:
          'The observed wavelength is longer than the emitted one by exactly the factor by which the Universe expanded during the journey. It is a property of the trip, not of the galaxy’s local motion — which is why a galaxy at z = 1 tells you the Universe was half its present size, not how fast that galaxy is moving.',
      },
      {
        id: 'local',
        prompt: 'Is the Milky Way expanding along with the Universe?',
        options: [
          { id: 'a', text: 'Yes, but so slowly that it is unmeasurable' },
          {
            id: 'b',
            text: 'No — gravity holds bound systems together, and expansion only wins where gravity is too weak',
            correct: true,
          },
          { id: 'c', text: 'Yes, and this is why the galaxy is flattening over time' },
          {
            id: 'd',
            text: 'No, because the galaxy is outside the region where the metric changes',
          },
        ],
        explanation:
          'Expansion is not a force pulling on everything everywhere. Within a gravitationally bound system the geometry has settled into a static solution, and nothing stretches. Only above the scale of galaxy groups does expansion dominate.',
      },
      {
        id: 'tension',
        prompt: 'What is the Hubble tension?',
        options: [
          { id: 'a', text: 'A disagreement about whether the Universe is expanding at all' },
          {
            id: 'b',
            text: 'Two independent, precise measurements of the present expansion rate that do not agree with each other',
            correct: true,
          },
          { id: 'c', text: 'The stretching of galaxies by the expansion of space' },
          { id: 'd', text: 'The difference between the expansion rate now and in the past' },
        ],
        explanation:
          'The CMB-inferred value and the distance-ladder value differ by far more than their stated errors. Either one method has an unfound systematic, or the standard cosmological model is missing something between the early Universe and today.',
      },
    ],
  },

  inflation: {
    summary: {
      essential:
        'Inflation proposes an enormous burst of expansion in the first fraction of a second. It elegantly solves two real problems — why opposite sides of the sky have the same temperature, and why space is so flat — and what we measure in the microwave background is consistent with it. But the field that would have driven it is unidentified, and its sharpest prediction has not been detected. It is the leading proposal, not an observed event.',
      detailed:
        'Separate three layers carefully. The problems are real: the horizon problem and the flatness problem both need explaining. The framework works: roughly 60 e-folds of accelerated expansion solves both at once, and generic slow-roll models predict a nearly-but-not-exactly scale-invariant spectrum, which Planck measures as n_s = 0.965 ± 0.004. The mechanism is missing: no Standard Model field can do this, and the signature prediction — primordial B-mode polarisation from inflationary gravitational waves — remains undetected, with r < 0.036. That last gap is why this platform says "proposal" rather than "fact".',
    },
    questions: [
      {
        id: 'problems',
        prompt: 'Which problems was inflation invented to solve?',
        options: [
          { id: 'a', text: 'The missing mass in galaxies and the accelerating expansion' },
          {
            id: 'b',
            text: 'Why regions never in causal contact have the same temperature, and why space is so close to flat',
            correct: true,
          },
          { id: 'c', text: 'Why there is more matter than antimatter' },
          { id: 'd', text: 'Why the cosmic microwave background exists at all' },
        ],
        explanation:
          'The horizon problem and the flatness problem are both fine-tuning puzzles in the standard hot Big Bang. A brief epoch of accelerated expansion resolves both, because a tiny causally connected patch is stretched to cover everything we can see.',
      },
      {
        id: 'status',
        prompt: 'What is the current observational status of inflation?',
        options: [
          {
            id: 'a',
            text: 'Directly confirmed by the detection of primordial gravitational waves',
          },
          {
            id: 'b',
            text: 'Consistent with the data, but its signature prediction has not been detected and its mechanism is unidentified',
            correct: true,
          },
          { id: 'c', text: 'Ruled out by the latest CMB measurements' },
          { id: 'd', text: 'Untestable in principle, so not a scientific claim' },
        ],
        explanation:
          'Flatness and a slightly tilted spectrum are consistent with inflation but not unique to it. The distinctive prediction is a curl-like B-mode polarisation pattern; the current bound is r < 0.036, which already excludes some simple models but confirms none.',
      },
      {
        id: 'criticism',
        prompt: 'What is the strongest criticism levelled at inflation as a theory?',
        options: [
          { id: 'a', text: 'It contradicts the observed flatness of space' },
          { id: 'b', text: 'It requires the Universe to be younger than the oldest stars' },
          {
            id: 'c',
            text: 'The framework is flexible enough to accommodate almost any result, which weakens it as a prediction',
            correct: true,
          },
          { id: 'd', text: 'It has been shown to violate conservation of energy' },
        ],
        explanation:
          'A theory that can fit anything predicts nothing. Serious researchers argue that the space of inflationary models is broad enough that "inflation happened" is difficult to falsify — which is a reason to keep looking for the B-mode signature that would pin down a specific model.',
      },
    ],
  },

  'hot-early-universe': {
    summary: {
      essential:
        'Expansion cools; compression heats. Because the Universe has been expanding for 13.8 billion years, every step backwards is a step to higher temperature and density. The temperature at any past moment is therefore calculated, not guessed — anchored to the measured 2.7255 K of the microwave background today.',
      detailed:
        'For radiation, temperature falls in inverse proportion to the scale factor: T ∝ 1/a, so T(z) = T₀(1 + z). Given a precisely measured present temperature and a well-tested expansion history, the temperature at recombination (≈3000 K), at nucleosynthesis (≈10⁹ K) and at the electroweak scale (≈10¹⁵ K) all follow arithmetically. Note the evidence level: these are inferences, not measurements — nobody has measured the temperature of the one-second-old Universe. The check is that the background really was hotter in the past, confirmed in absorption systems out to z ≈ 3.',
    },
    questions: [
      {
        id: 'why-hot',
        prompt: 'Why do we think the early Universe was hot?',
        options: [
          { id: 'a', text: 'Because the Big Bang was an explosion, and explosions are hot' },
          {
            id: 'b',
            text: 'Because a gas that expands cools, so running the expansion backwards raises the temperature',
            correct: true,
          },
          { id: 'c', text: 'Because the first stars had already begun heating everything' },
          { id: 'd', text: 'Because we can see the heat directly at high redshift' },
        ],
        explanation:
          'It follows from thermodynamics plus the observed expansion, not from any assumption about a bang. The relation T ∝ 1/a is what makes the early Universe hot as a matter of arithmetic.',
      },
      {
        id: 'evidence-level',
        prompt:
          'Why is the temperature of the one-second-old Universe labelled an inference rather than an observation?',
        options: [
          { id: 'a', text: 'Because the number is only known to within a factor of a thousand' },
          {
            id: 'b',
            text: 'Because it is derived from measurements plus a model, rather than measured directly',
            correct: true,
          },
          { id: 'c', text: 'Because different research groups disagree about it' },
          { id: 'd', text: 'Because temperature is not well defined that early' },
        ],
        explanation:
          'The calculation rests on well-tested physics and a precisely measured present-day temperature, so it is firm — but it is still a derivation. The distinction matters because an inference inherits every assumption in the chain that produced it.',
      },
    ],
  },

  'particles-and-plasma': {
    summary: {
      essential:
        'For the first millionth of a second, quarks were not bound inside protons and neutrons. As the Universe cooled below about two trillion degrees they locked together in threes, forming every proton and neutron that exists. Then matter and antimatter annihilated almost completely — and everything you have ever seen is the one-in-a-billion residue.',
      detailed:
        'Two claims with very different standing sit on this page. The quark–gluon plasma is not merely theory: heavy-ion collisions at RHIC and the LHC produce a deconfined state whose collective flow matches relativistic hydrodynamics with extremely low viscosity, testing the relevant physics at the relevant energy. The matter–antimatter asymmetry, by contrast, is measured but unexplained — the baryon-to-photon ratio of about 6 × 10⁻¹⁰ is pinned down by two independent routes, and nothing in the Standard Model accounts for it being non-zero.',
    },
    questions: [
      {
        id: 'qgp',
        prompt: 'What is the evidential status of quark–gluon plasma?',
        options: [
          { id: 'a', text: 'Purely theoretical — it existed only in the early Universe' },
          {
            id: 'b',
            text: 'It has been created in heavy-ion colliders and behaves as predicted',
            correct: true,
          },
          { id: 'c', text: 'It has been observed directly in the cosmic microwave background' },
          { id: 'd', text: 'It is a competing alternative to the Big Bang model' },
        ],
        explanation:
          'RHIC and the LHC produce a deconfined quark–gluon state that flows almost like a perfect liquid, matching prediction. This does not observe the early Universe, but it tests the physics the early-Universe description depends on.',
      },
      {
        id: 'asymmetry',
        prompt:
          'Why does the matter–antimatter asymmetry count as an open question rather than a solved one?',
        options: [
          { id: 'a', text: 'Because the ratio has not been measured' },
          {
            id: 'b',
            text: 'Because the ratio is measured but no known physics explains why it is not zero',
            correct: true,
          },
          { id: 'c', text: 'Because antimatter has never been observed' },
          { id: 'd', text: 'Because the Standard Model predicts the wrong sign' },
        ],
        explanation:
          'Two independent measurements agree that about one particle in a billion survived. Producing that asymmetry requires baryon-number and CP violation beyond what the Standard Model supplies, and no confirmed mechanism exists.',
      },
    ],
  },

  nucleosynthesis: {
    summary: {
      essential:
        'In the first few minutes, protons and neutrons fused into the lightest nuclei — mostly helium, with traces of deuterium and lithium. Then the Universe cooled too far for fusion to continue, and the composition froze. The predicted abundances depend on a single parameter, and they match what is measured in the most pristine gas astronomers can find.',
      detailed:
        'The mechanism is a race between expansion and reaction rates. Free neutrons decay with a 15-minute half-life, so the window is short; whatever neutrons survive end up almost entirely in helium-4, giving about 24% helium by mass. Deuterium is the sharp test: its abundance is exquisitely sensitive to the baryon density, and the value inferred from quasar absorption systems agrees with the completely independent CMB determination. Lithium-7 is the outstanding discrepancy — measured about three times lower than predicted — and it is honestly still unresolved.',
    },
    questions: [
      {
        id: 'window',
        prompt: 'Why did primordial nucleosynthesis stop after a few minutes?',
        options: [
          { id: 'a', text: 'All the protons and neutrons had been used up' },
          {
            id: 'b',
            text: 'Expansion cooled and diluted the Universe below the conditions fusion needs',
            correct: true,
          },
          { id: 'c', text: 'The first stars formed and absorbed the remaining fuel' },
          { id: 'd', text: 'Gravity became too strong for nuclei to approach each other' },
        ],
        explanation:
          'Fusion needs both high temperature and high density. The expansion removed both within minutes, freezing the light-element composition — which is why the Universe is still about three-quarters hydrogen.',
      },
      {
        id: 'deuterium',
        prompt: 'Why is deuterium such a useful test of the model?',
        options: [
          { id: 'a', text: 'It is the most abundant product of primordial fusion' },
          {
            id: 'b',
            text: 'Its abundance is very sensitive to the baryon density, and the value agrees with an independent CMB measurement',
            correct: true,
          },
          { id: 'c', text: 'It is produced in stars, so it can be checked locally' },
          { id: 'd', text: 'It is the only element whose abundance is predicted exactly' },
        ],
        explanation:
          'Deuterium is fragile and is destroyed rather than made in stars, so the amount found in pristine gas is close to primordial. Its steep dependence on baryon density makes it a precise probe, and it agrees with the CMB.',
      },
      {
        id: 'lithium',
        prompt: 'How should the lithium-7 discrepancy be described?',
        options: [
          { id: 'a', text: 'A refutation of Big Bang nucleosynthesis' },
          {
            id: 'b',
            text: 'An unresolved mismatch between prediction and measurement, still under investigation',
            correct: true,
          },
          { id: 'c', text: 'A measurement error that was corrected years ago' },
          { id: 'd', text: 'Evidence that the Universe is younger than believed' },
        ],
        explanation:
          'Helium and deuterium match well; lithium-7 is measured about a factor of three below prediction. Candidate explanations range from stellar depletion to new physics, and none is established — which is exactly how an open discrepancy should be reported.',
      },
    ],
  },

  recombination: {
    summary: {
      essential:
        'For 380,000 years the Universe was an opaque plasma: free electrons scattered light constantly, so nothing could travel far. When it cooled to about 3000 K, electrons bound to nuclei, the fog cleared, and light streamed freely for the first time. That light is still arriving today, stretched by expansion into the microwave background.',
      detailed:
        'The mechanism is scattering, not opacity in the everyday sense. Free electrons Thomson-scatter photons, so the mean free path is tiny; once electrons are bound into neutral atoms the cross-section collapses and photons decouple. The surface we see is not a place but a time — the last moment each photon scattered — which is why it appears as a sphere around every observer. It also explains the hard limit on optical astronomy: no electromagnetic observation can see earlier than this, which is why probing the first 380,000 years requires neutrinos or gravitational waves.',
    },
    questions: [
      {
        id: 'why-opaque',
        prompt: 'Why was the early Universe opaque?',
        options: [
          { id: 'a', text: 'It was too dense for light to be created' },
          {
            id: 'b',
            text: 'Free electrons scattered photons constantly, so light could not travel far',
            correct: true,
          },
          { id: 'c', text: 'Dust grains absorbed all the light' },
          { id: 'd', text: 'Gravity was strong enough to trap light' },
        ],
        explanation:
          'Charged particles scatter light efficiently. Once electrons bound to nuclei to form neutral atoms, that scattering stopped almost entirely and photons began travelling freely.',
      },
      {
        id: 'surface',
        prompt: 'What is the "surface of last scattering"?',
        options: [
          { id: 'a', text: 'A physical shell of matter at the edge of the Universe' },
          {
            id: 'b',
            text: 'The time at which photons last scattered, which we see as a sphere around us',
            correct: true,
          },
          { id: 'c', text: 'The boundary of the observable Universe' },
          { id: 'd', text: 'The outer layer of the first stars' },
        ],
        explanation:
          'It is a moment, not a place. Every observer anywhere sees their own last-scattering sphere at the same look-back time, which is why the CMB surrounds us rather than lying in one direction.',
      },
      {
        id: 'limit',
        prompt: 'What does recombination imply for observational astronomy?',
        options: [
          {
            id: 'a',
            text: 'That no light of any wavelength can carry information from before it',
            correct: true,
          },
          {
            id: 'b',
            text: 'That we can see all the way back to the Big Bang with a good enough telescope',
          },
          { id: 'c', text: 'That the earliest galaxies formed at this moment' },
          { id: 'd', text: 'That the Universe stopped expanding at this moment' },
        ],
        explanation:
          'The Universe is opaque to electromagnetic radiation before recombination, so telescopes cannot see earlier. Reaching further back needs messengers that decoupled sooner — relic neutrinos, or primordial gravitational waves.',
      },
    ],
  },

  cmb: {
    summary: {
      essential:
        'The cosmic microwave background is the oldest light we can observe: released when the Universe became transparent, and now cooled to 2.7255 K. It is astonishingly uniform — variations of about one part in 100,000 — and those tiny variations are the seeds from which every galaxy grew. Every published CMB image is colour-amplified; the real sky looks flat grey.',
      detailed:
        'The CMB is doing three jobs at once. It is a thermometer: the most perfect blackbody ever measured, confirming the hot early phase. It is a snapshot: the pattern of hot and cold spots records density variations at 380,000 years. And it is a ruler: the characteristic angular size of those spots — set by how far sound could travel in the plasma before decoupling — depends on the geometry of space, which is how curvature is measured to be consistent with zero. Almost every precise number in modern cosmology comes from fitting a model to those spots.',
    },
    questions: [
      {
        id: 'origin',
        prompt: 'Where does the cosmic microwave background come from?',
        options: [
          {
            id: 'a',
            text: 'Distant galaxies whose light has been redshifted into the microwave band',
          },
          {
            id: 'b',
            text: 'The whole sky at the moment the Universe became transparent, now stretched to microwave wavelengths',
            correct: true,
          },
          { id: 'c', text: 'Thermal emission from interstellar dust' },
          { id: 'd', text: 'The surface of the most distant object in the Universe' },
        ],
        explanation:
          'It is not from any object. It is the thermal radiation that filled the entire Universe when electrons and nuclei combined, released everywhere at once and reaching us from every direction.',
      },
      {
        id: 'amplified',
        prompt: 'Why are published CMB maps so colourful?',
        options: [
          { id: 'a', text: 'The sky really does look like that at microwave wavelengths' },
          {
            id: 'b',
            text: 'The contrast is amplified enormously, because the real variations are about one part in 100,000',
            correct: true,
          },
          { id: 'c', text: 'The colours indicate different chemical elements' },
          { id: 'd', text: 'The colours are artistic and carry no information' },
        ],
        explanation:
          'The temperature variations are ±20 microkelvin about 2.7255 K. Without amplification the map would be featureless grey — so the colour scale is a deliberate, necessary exaggeration, and the pattern it reveals is real.',
      },
      {
        id: 'spots',
        prompt: 'What do the hot and cold spots in the CMB tell us?',
        options: [
          {
            id: 'a',
            text: 'Where the first stars would eventually form, and the geometry of space',
            correct: true,
          },
          { id: 'b', text: 'The positions of galaxies today' },
          { id: 'c', text: 'The distribution of dark energy' },
          { id: 'd', text: 'The temperature of the Big Bang itself' },
        ],
        explanation:
          'The spots are density variations that later grew into all cosmic structure, and their characteristic angular size acts as a standard ruler that measures the curvature of space along the way.',
      },
    ],
  },

  'first-stars-universe': {
    summary: {
      essential:
        'After recombination came the cosmic dark ages: neutral gas, no light sources, hundreds of millions of years of darkness. The first stars formed from that pristine hydrogen and helium, with no heavier elements at all. They are thought to have been enormous and short-lived, and they made the first oxygen, carbon and iron — the atoms everything since is built from.',
      detailed:
        'The physics of first-star formation differs from today’s because the coolants differ. Modern clouds cool efficiently via carbon and oxygen; a primordial cloud has only molecular hydrogen, which cools poorly, so fragments stayed hot and collapsed into much larger masses. That reasoning is solid but the conclusion is a model prediction: no individual first-generation star has been observed. The evidence is indirect — extremely metal-poor stars in the halo carrying the chemical fingerprint of their progenitors, and the reionisation history that first starlight must have driven.',
    },
    questions: [
      {
        id: 'composition',
        prompt: 'What were the first stars made of?',
        options: [
          { id: 'a', text: 'The same mix of elements as the Sun' },
          {
            id: 'b',
            text: 'Almost purely hydrogen and helium, with essentially no heavier elements',
            correct: true,
          },
          { id: 'c', text: 'Mostly iron, which then fused into lighter elements' },
          { id: 'd', text: 'Dark matter, which later converted into ordinary matter' },
        ],
        explanation:
          'Nothing heavier than lithium existed before stars made it. That composition is why the first stars behaved differently: without heavier elements a collapsing cloud cools inefficiently and fragments into much larger masses.',
      },
      {
        id: 'observed',
        prompt: 'Has an individual first-generation star ever been observed?',
        options: [
          { id: 'a', text: 'Yes, several have been imaged by the James Webb Space Telescope' },
          {
            id: 'b',
            text: 'No — the evidence is indirect, from extremely metal-poor stars and the reionisation history',
            correct: true,
          },
          { id: 'c', text: 'Yes, they are the brightest objects in the CMB' },
          { id: 'd', text: 'No, and no evidence for them exists at all' },
        ],
        explanation:
          'They were short-lived and are extraordinarily distant, so none has been resolved. What we have is a well-motivated model plus chemical fingerprints in later stars — strong, but inference rather than observation.',
      },
    ],
  },

  'first-galaxies-universe': {
    summary: {
      essential:
        'Gravity pulled the first stars into groups, and those groups into the first galaxies. The James Webb Space Telescope has now confirmed galaxies existing only a few hundred million years after the Big Bang — earlier and brighter than most models expected, which is an active problem rather than a crisis.',
      detailed:
        'Galaxy formation is hierarchical: small structures collapse first and merge into larger ones, with dark-matter haloes providing the scaffolding into which gas falls. JWST has pushed the confirmed frontier to redshifts above 13, and several of those early galaxies appear more massive or more luminous than pre-launch models comfortably allow. The honest reading is that this constrains star-formation efficiency and the initial mass function in the early Universe — not that cosmology is broken, since the same ΛCDM framework continues to fit the CMB and large-scale structure precisely.',
    },
    questions: [
      {
        id: 'order',
        prompt: 'In the standard picture, what forms first?',
        options: [
          { id: 'a', text: 'Large galaxies, which later fragment into smaller ones' },
          {
            id: 'b',
            text: 'Small structures, which merge into progressively larger ones',
            correct: true,
          },
          { id: 'c', text: 'Galaxy clusters, then galaxies, then stars' },
          { id: 'd', text: 'Everything forms simultaneously' },
        ],
        explanation:
          'Structure formation is hierarchical. Small dark-matter haloes collapse first, gas falls into them and forms stars, and mergers build larger galaxies over billions of years.',
      },
      {
        id: 'jwst',
        prompt:
          'What is the right way to describe JWST finding unexpectedly bright early galaxies?',
        options: [
          { id: 'a', text: 'The Big Bang model has been refuted' },
          {
            id: 'b',
            text: 'An active research problem that constrains how efficiently early galaxies formed stars',
            correct: true,
          },
          { id: 'c', text: 'A measurement error that has since been retracted' },
          { id: 'd', text: 'Proof that the Universe is much older than 13.8 billion years' },
        ],
        explanation:
          'The tension is with galaxy-formation modelling, not with cosmology: the same framework still fits the CMB and large-scale structure to high precision. Overstating it as a refutation confuses one uncertain layer with a well-tested one.',
      },
    ],
  },

  'large-scale-structure': {
    summary: {
      essential:
        'Matter is not spread evenly. Galaxies lie along filaments and sheets surrounding vast, nearly empty voids — the cosmic web. It grew by gravity amplifying the tiny density variations visible in the microwave background, and its statistics match simulations only when dark matter is included.',
      detailed:
        'The mechanism is gravitational instability: a slightly denser region attracts more matter, becomes denser still, and the contrast runs away. Two things make this powerful evidence rather than a just-so story. First, the starting conditions are not free parameters — they are measured directly in the CMB. Second, the resulting pattern is quantitative: the correlation function, the void size distribution and the baryon acoustic oscillation scale can all be compared with surveys, and ordinary matter alone cannot reproduce them in the time available.',
    },
    questions: [
      {
        id: 'growth',
        prompt: 'How did the cosmic web form?',
        options: [
          { id: 'a', text: 'Galaxies were placed along filaments by the initial explosion' },
          {
            id: 'b',
            text: 'Gravity amplified tiny density variations that are visible in the CMB',
            correct: true,
          },
          { id: 'c', text: 'Magnetic fields channelled gas into sheets' },
          { id: 'd', text: 'Dark energy pushed matter into the observed pattern' },
        ],
        explanation:
          'A region slightly denser than average pulls in more matter and becomes denser still. The starting variations are not assumed — they are measured in the microwave background, which makes the comparison with surveys a genuine test.',
      },
      {
        id: 'dark-matter-role',
        prompt: 'Why is large-scale structure evidence for dark matter?',
        options: [
          { id: 'a', text: 'Because dark matter is visible in the filaments' },
          {
            id: 'b',
            text: 'Because ordinary matter alone cannot grow the observed structure in the time available',
            correct: true,
          },
          { id: 'c', text: 'Because voids are completely empty' },
          { id: 'd', text: 'Because the web is expanding faster than expected' },
        ],
        explanation:
          'Ordinary matter was coupled to radiation until recombination and could not begin clumping earlier; dark matter, which does not interact with light, had a head start. Without it the structure we see would not have had time to grow.',
      },
    ],
  },

  'dark-matter': {
    summary: {
      essential:
        'Multiple independent observations say there is far more mass than the light accounts for: galaxies rotate too fast, clusters are too hot, lensing weighs more than it shines, and the CMB requires it. The gravitational effect is established. The identity of what causes it is not — no dark-matter particle has ever been detected.',
      detailed:
        'Hold the two halves apart. The evidence is strong and comes from many directions: flat rotation curves, cluster dynamics, gravitational lensing masses, the ratio of the CMB acoustic peaks, and the growth of large-scale structure. The Bullet Cluster is particularly hard to explain otherwise, since the lensing mass is offset from the hot gas that carries most of the ordinary matter. But "dark matter exists" is a statement about a gravitational effect, not about a particle — decades of direct-detection experiments have returned only null results, and modified-gravity alternatives, while strongly disfavoured by the cluster and CMB evidence, have not been formally excluded in every form.',
    },
    questions: [
      {
        id: 'status',
        prompt: 'What exactly has been established about dark matter?',
        options: [
          { id: 'a', text: 'A new particle has been detected in underground laboratories' },
          {
            id: 'b',
            text: 'That there is more gravitating mass than the visible matter accounts for',
            correct: true,
          },
          { id: 'c', text: 'That it is made of ordinary matter too faint to see' },
          { id: 'd', text: 'That gravity behaves differently on galactic scales' },
        ],
        explanation:
          'Every line of evidence is gravitational. The inference "there is unseen mass" is robust; the further step to "it is a specific particle" has never been confirmed, and the platform labels the two differently for that reason.',
      },
      {
        id: 'bullet',
        prompt: 'Why is the Bullet Cluster considered strong evidence?',
        options: [
          { id: 'a', text: 'Dark matter glows faintly in its centre' },
          {
            id: 'b',
            text: 'The lensing mass is spatially separated from the hot gas that holds most of the ordinary matter',
            correct: true,
          },
          { id: 'c', text: 'It rotates faster than any other cluster' },
          { id: 'd', text: 'It is the only cluster with measured dark matter' },
        ],
        explanation:
          'In a collision the gas is slowed by drag while collisionless matter passes through. The mass measured by lensing follows the galaxies rather than the gas, which is hard to reproduce by modifying gravity alone.',
      },
      {
        id: 'alternatives',
        prompt: 'How should modified-gravity alternatives be described?',
        options: [
          { id: 'a', text: 'Definitively ruled out' },
          {
            id: 'b',
            text: 'Strongly disfavoured by cluster and CMB evidence, but a live minority research programme',
            correct: true,
          },
          { id: 'c', text: 'Equally well supported as dark matter' },
          { id: 'd', text: 'Not scientific theories' },
        ],
        explanation:
          'They fit galaxy rotation curves well but struggle badly with cluster lensing and the CMB acoustic peaks. Reporting them as "ruled out" overstates the case; reporting them as equal alternatives understates the evidence against them.',
      },
    ],
  },

  'accelerating-expansion': {
    summary: {
      essential:
        'In the late 1990s, distant supernovae turned out to be fainter — and therefore further away — than a decelerating universe allows. The expansion is not merely continuing; it is speeding up. The observation is established and has been confirmed by several independent methods since.',
      detailed:
        'Type Ia supernovae work as standardisable candles: their intrinsic brightness can be calibrated from their light-curve shape, so the observed brightness gives a distance. Comparing that distance with redshift maps the expansion history, and the high-redshift supernovae are dimmer than a matter-only universe predicts. Two teams found this independently in 1998. Since then the baryon acoustic oscillation scale, the CMB, and the growth rate of structure have all confirmed acceleration through completely different routes — which is why the observation is treated as established even though its cause is not.',
    },
    questions: [
      {
        id: 'method',
        prompt: 'How was the acceleration discovered?',
        options: [
          { id: 'a', text: 'By directly measuring galaxies speeding up over time' },
          {
            id: 'b',
            text: 'Distant Type Ia supernovae were fainter than a decelerating universe predicts',
            correct: true,
          },
          { id: 'c', text: 'By detecting dark energy in a laboratory' },
          { id: 'd', text: 'From the temperature of the microwave background' },
        ],
        explanation:
          'Type Ia supernovae have calibratable intrinsic brightness, so faintness means extra distance. At a given redshift the distant ones were further away than a matter-only universe allows, implying the expansion sped up.',
      },
      {
        id: 'confirmation',
        prompt: 'Why is the acceleration treated as established rather than tentative?',
        options: [
          { id: 'a', text: 'Because the original 1998 measurement was extremely precise' },
          {
            id: 'b',
            text: 'Because several independent methods have since confirmed it',
            correct: true,
          },
          { id: 'c', text: 'Because a theory predicted it in advance' },
          { id: 'd', text: 'Because dark energy has been detected' },
        ],
        explanation:
          'Baryon acoustic oscillations, the CMB and the growth of structure all point the same way through different physics. Independent confirmation, not the precision of any single result, is what moves a claim to established.',
      },
    ],
  },

  'dark-energy': {
    summary: {
      essential:
        'Dark energy is the name given to whatever is causing the expansion to accelerate. It accounts for about 69% of the energy content of the Universe. Nobody knows what it is. The simplest candidate — a constant energy density of space itself — fits the data, and the theoretical prediction of its size is wrong by many tens of orders of magnitude.',
      detailed:
        'Be precise about which part is which. The acceleration is measured. Its magnitude, expressed as Ω_Λ ≈ 0.69, is measured. The equation of state is measured to be close to w = −1, which is what a cosmological constant gives. Everything after that is open. Quantum field theory’s natural estimate for vacuum energy exceeds the observed value by something like 120 orders of magnitude, the worst quantitative discrepancy in physics. Whether dark energy is a true constant or something that evolves is the question current surveys are designed to answer, and the answer would distinguish new physics in the contents of the Universe from new physics in gravity itself.',
    },
    questions: [
      {
        id: 'what-known',
        prompt: 'What is actually known about dark energy?',
        options: [
          { id: 'a', text: 'Its identity, its density and its equation of state' },
          { id: 'b', text: 'Its effect and its magnitude, but not its nature', correct: true },
          { id: 'c', text: 'Nothing at all — it is purely hypothetical' },
          { id: 'd', text: 'That it is a form of dark matter' },
        ],
        explanation:
          'The acceleration is observed, and the density needed to produce it is measured to a few percent. The cause is unidentified, which is why "dark energy" is a name for a problem rather than a description of a substance.',
      },
      {
        id: 'ccp',
        prompt: 'What is the cosmological constant problem?',
        options: [
          { id: 'a', text: 'The measured value of dark energy keeps changing' },
          {
            id: 'b',
            text: 'Quantum field theory predicts a vacuum energy vastly larger than the observed value',
            correct: true,
          },
          { id: 'c', text: 'A cosmological constant is forbidden by general relativity' },
          { id: 'd', text: 'Two teams measured different values in 1998' },
        ],
        explanation:
          'The natural estimate exceeds observation by roughly 120 orders of magnitude. Something either cancels it almost exactly or the estimate is conceptually wrong, and neither resolution is established.',
      },
      {
        id: 'test',
        prompt:
          'What observation would most sharply distinguish a cosmological constant from alternatives?',
        options: [
          {
            id: 'a',
            text: 'Measuring whether the effect has changed over cosmic time',
            correct: true,
          },
          { id: 'b', text: 'Finding dark energy in a laboratory' },
          { id: 'c', text: 'Measuring the temperature of the CMB more precisely' },
          { id: 'd', text: 'Detecting a dark-energy particle' },
        ],
        explanation:
          'A cosmological constant does not change; most alternatives do. Current surveys are designed to detect a few-percent evolution in the equation of state, which is the cleanest available discriminator.',
      },
    ],
  },

  'observable-universe': {
    summary: {
      essential:
        'The observable Universe is the region from which light has had time to reach us — a horizon, not an edge. It extends about 46.5 billion light-years in every direction, further than 13.8 billion because space expanded while the light travelled. Beyond it, the Universe continues, and may be infinite.',
      detailed:
        'Three ideas are routinely conflated and must be kept apart. The observable Universe is limited by the finite age of the Universe and the speed of light. Its 46.5 billion light-year radius exceeds the naive 13.8 because the emitting matter has been carried further away since it emitted. And every observer has their own horizon centred on themselves — ours is not special, and being at the centre of it says nothing about our location. Whether the whole Universe is finite or infinite is unresolved: curvature measurements are consistent with flat, and flat is consistent with infinite, but a measurement consistent with zero cannot prove zero.',
    },
    questions: [
      {
        id: 'radius',
        prompt:
          'Why is the observable Universe 46.5 billion light-years in radius rather than 13.8?',
        options: [
          { id: 'a', text: 'Because light travelled faster in the early Universe' },
          {
            id: 'b',
            text: 'Because space expanded while the light was in transit, carrying the source further away',
            correct: true,
          },
          { id: 'c', text: 'Because the Universe is older than 13.8 billion years' },
          { id: 'd', text: 'Because the figure includes the region we will eventually see' },
        ],
        explanation:
          'The light took 13.8 billion years to arrive, but the matter that emitted it has since been carried to about 46.5 billion light-years away. Nothing exceeded the speed of light; the distance between comoving points simply grew.',
      },
      {
        id: 'centre',
        prompt: 'What does it mean that we appear to be at the centre of the observable Universe?',
        options: [
          { id: 'a', text: 'That our galaxy is at or near the centre of the Universe' },
          {
            id: 'b',
            text: 'Nothing — every observer has their own horizon centred on themselves',
            correct: true,
          },
          { id: 'c', text: 'That the Universe is finite and we are near its middle' },
          { id: 'd', text: 'That the Big Bang happened at our location' },
        ],
        explanation:
          'The horizon is defined by how far light has had time to travel *to you*. An observer in a distant galaxy sees an equally large sphere centred on themselves, overlapping ours.',
      },
      {
        id: 'beyond',
        prompt: 'What lies beyond the observable Universe?',
        options: [
          { id: 'a', text: 'Nothing — space ends there' },
          {
            id: 'b',
            text: 'More Universe, of unknown extent, which may be infinite',
            correct: true,
          },
          { id: 'c', text: 'A wall of radiation' },
          { id: 'd', text: 'Other universes, which have been detected' },
        ],
        explanation:
          'The horizon marks the limit of what we can see, not a physical boundary. Curvature measurements are consistent with flat space of unlimited extent, but a measurement consistent with zero cannot establish that it is exactly zero.',
      },
    ],
  },

  'earliest-universe': {
    summary: {
      essential:
        'Established physics describes the Universe confidently back to about a second, and with reasonable confidence to a tiny fraction of a second. Before that, energies exceed anything tested in any experiment, and at the Planck scale both general relativity and quantum mechanics are essential while no tested theory covers both. Everything said about that regime is speculation.',
      detailed:
        'Draw the line honestly. Nucleosynthesis at one second to a few minutes is tested by measured abundances. The electroweak scale at 10⁻¹² seconds is reached by the LHC. Beyond that, extrapolation runs on untested physics, and at 10⁻⁴³ seconds — the Planck time — curvature is strong enough that quantum gravity cannot be neglected. General relativity there predicts a singularity, and a prediction of infinity is how a theory announces it has been used outside its domain. Statements about "what happened at t = 0" are therefore not conclusions of the model; they are proposals awaiting a theory that does not yet exist.',
    },
    questions: [
      {
        id: 'boundary',
        prompt: 'How far back does experimentally tested physics take us?',
        options: [
          { id: 'a', text: 'All the way to t = 0' },
          {
            id: 'b',
            text: 'To roughly the first second confidently, and to about 10⁻¹² seconds with collider-tested physics',
            correct: true,
          },
          { id: 'c', text: 'To 380,000 years, the earliest we can see' },
          { id: 'd', text: 'To the first three minutes, and no earlier' },
        ],
        explanation:
          'Nucleosynthesis is checked against measured abundances, and the electroweak scale is reached by the LHC. Earlier than that the extrapolation runs on physics no experiment has probed.',
      },
      {
        id: 'singularity',
        prompt: 'What does the singularity at t = 0 in general relativity signify?',
        options: [
          { id: 'a', text: 'A physical moment of infinite density that actually occurred' },
          {
            id: 'b',
            text: 'That the theory has been pushed outside the regime where it is trustworthy',
            correct: true,
          },
          { id: 'c', text: 'The creation of time itself, as a proven result' },
          { id: 'd', text: 'A calculation error in the standard model' },
        ],
        explanation:
          'A prediction of infinity is how a physical theory reports that it is being misapplied. At those densities quantum effects on gravity cannot be ignored, and no tested theory covers that regime.',
      },
    ],
  },

  'open-questions-universe': {
    summary: {
      essential:
        'Cosmology is precise and incomplete at the same time. The model fits an enormous range of data with a handful of parameters — and 95% of the contents are unidentified, the expansion rate is measured two ways that disagree, and nobody knows why there is matter at all. These are not failures; they are where the next results will come from.',
      detailed:
        'Sort the open questions by type. Some are missing identifications: what dark matter is, what dark energy is. Some are quantitative tensions: the 5σ Hubble discrepancy between early- and late-Universe measurements. Some are unexplained facts: the baryon asymmetry, the specific values of the fundamental constants. And some lie outside current physics entirely: what preceded the hot dense state, and whether the question is even well posed. Ideas such as the multiverse belong firmly in the last category — they are speculation, in some formulations not currently testable, and presenting them as findings misrepresents the state of the field.',
    },
    questions: [
      {
        id: 'sorting',
        prompt:
          'Which of these is best described as an unresolved measurement tension rather than a missing identification?',
        options: [
          { id: 'a', text: 'What dark matter is made of' },
          {
            id: 'b',
            text: 'The disagreement between early- and late-Universe values of the expansion rate',
            correct: true,
          },
          { id: 'c', text: 'What caused the matter–antimatter asymmetry' },
          { id: 'd', text: 'What preceded the hot dense state' },
        ],
        explanation:
          'The Hubble tension is two precise measurements of the same quantity disagreeing. The others are gaps in explanation rather than conflicts between measurements, and the distinction matters for what kind of work would resolve them.',
      },
      {
        id: 'multiverse',
        prompt: 'How should the multiverse be presented?',
        options: [
          { id: 'a', text: 'As an established consequence of inflation' },
          {
            id: 'b',
            text: 'As speculation, in some formulations without a clear observational test',
            correct: true,
          },
          { id: 'c', text: 'As a proven alternative to the Big Bang' },
          { id: 'd', text: 'As a philosophical idea with no connection to physics' },
        ],
        explanation:
          'Some inflationary models imply it, but those models are themselves unconfirmed, and several versions make no distinguishable prediction. It is a serious idea and it is not a finding.',
      },
      {
        id: 'incomplete',
        prompt:
          'What does it mean that the standard cosmological model is both precise and incomplete?',
        options: [
          { id: 'a', text: 'That the model is probably wrong' },
          {
            id: 'b',
            text: 'That it fits a huge range of data with few parameters, while 95% of the contents remain unidentified',
            correct: true,
          },
          { id: 'c', text: 'That its parameters are known but its predictions fail' },
          { id: 'd', text: 'That cosmology is not yet a quantitative science' },
        ],
        explanation:
          'ΛCDM reproduces the CMB, nucleosynthesis, large-scale structure and supernova distances with about six parameters. That success is real; so is the fact that two of its main ingredients are named after our ignorance of them.',
      },
    ],
  },
};
