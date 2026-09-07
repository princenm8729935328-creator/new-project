/**
 * Black holes — mergers, and how anything about them is measured at all.
 *
 * The observations topic is the evidential spine of the section. It is
 * deliberately organised by method rather than by object, because the strength
 * of the case is that four unrelated techniques — orbital dynamics, X-ray
 * spectroscopy, gravitational waves and radio interferometry — agree.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const BLACK_HOLES = sectionId('black-holes');
const REVIEWED = '2026-09-07';

export const BLACK_HOLE_OBSERVATION_TOPICS: readonly Topic[] = [
  {
    id: topicId('black-hole-mergers'),
    slug: 'mergers-and-gravitational-waves',
    sectionId: BLACK_HOLES,
    order: 15,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Mergers and gravitational waves',
    subtitle:
      'Two black holes, one signal, and three solar masses turned into ripples in spacetime.',
    summary: {
      essential:
        'When two black holes orbit each other they radiate gravitational waves, lose energy, and spiral together. The final moments produce a signal that LIGO and Virgo can detect: a rising chirp, a merger, and a brief ringdown as the new black hole settles.',
      detailed:
        'GW150914, detected in September 2015, came from black holes of about 36 and 29 solar masses merging into one of 62. The missing three solar masses were radiated as gravitational waves in a fraction of a second, at a peak power exceeding the light output of every star in the observable Universe combined. Around ninety merger events have been catalogued since.',
    },
    glossaryTerms: [glossaryTermId('gravitational-wave'), glossaryTermId('event-horizon')],
    related: [
      topicId('gravitational-waves'),
      topicId('detecting-black-holes'),
      topicId('black-hole-classes'),
    ],
    blocks: [
      {
        id: 'inspiral',
        kind: 'prose',
        text: {
          essential:
            'A pair of orbiting black holes is not a stable arrangement. Their motion stirs the geometry around them, radiating gravitational waves that carry energy away, so the orbit shrinks. As it shrinks they orbit faster, which radiates faster still. The process starts imperceptibly slowly and ends in milliseconds.',
          detailed:
            'For a pair like GW150914’s, the inspiral takes billions of years to bring the orbit down to a few hundred kilometres and then a fraction of a second to finish. The last few orbits happen at a substantial fraction of the speed of light. This runaway is why detection is possible at all: only the final moments are loud enough, and they are loud enough to be heard across a billion light years.',
        },
      },
      {
        id: 'viz-inspiral',
        kind: 'visualization',
        visualizationId: visualizationId('binary-inspiral'),
      },
      {
        id: 'claim-signal',
        kind: 'claim',
        statement: {
          essential:
            'The signal has three parts, and each says something different: an inspiral whose rising chirp encodes the masses, a merger where the horizons join, and a ringdown as the remnant settles into a smooth Kerr black hole.',
          detailed:
            'The inspiral is calculable from post-Newtonian expansions and gives the "chirp mass" precisely. The merger itself is not calculable by hand at all — it required two decades of work in numerical relativity before anyone could compute the waveform, and those templates were ready just in time. The ringdown is a superposition of damped oscillations whose frequencies depend only on the remnant’s mass and spin, so measuring more than one of them tests the no-hair theorem directly.',
          technical:
            'The chirp mass M_c = (m₁m₂)^(3/5)/(m₁+m₂)^(1/5) controls the leading-order frequency evolution df/dt ∝ f^(11/3). Ringdown quasinormal modes are labelled (l, m, n); detecting a subdominant mode alongside the fundamental (2,2,0) constitutes black-hole spectroscopy, and current constraints are consistent with Kerr but not yet stringent.',
        },
        evidence: 'established',
        references: [referenceId('ligo-2016-gw150914'), referenceId('abbott-2023-gwtc3')],
      },
      {
        id: 'viz-waveform',
        kind: 'visualization',
        visualizationId: visualizationId('merger-waveform'),
      },
      {
        id: 'claim-energy',
        kind: 'claim',
        statement: {
          essential:
            'GW150914 converted about three solar masses into gravitational waves in roughly a fifth of a second. For that instant it radiated more power than all the light of every star in the observable Universe combined.',
          detailed:
            'The peak luminosity was about 3.6 × 10⁴⁹ watts. Nothing about this violates any conservation law: mass and energy are the same quantity, and the energy came from the binding energy of the orbit. The event happened about 1.3 billion light years away, and by the time it reached Earth it stretched LIGO’s four-kilometre arms by about 4 × 10⁻¹⁸ metres — a thousandth of the width of a proton. That is why it took a century between prediction and detection.',
          technical:
            'The characteristic strain h ≈ 10⁻²¹ implies ΔL ≈ 4 × 10⁻¹⁸ m over 4 km arms. Detection required suspended test masses isolated from seismic noise, 100 kW of circulating laser power, squeezed light to beat the shot-noise limit, and two detectors 3,000 km apart to reject local disturbances by coincidence.',
        },
        evidence: 'established',
        references: [referenceId('ligo-2016-gw150914')],
      },
      {
        id: 'why-it-matters',
        kind: 'callout',
        tone: 'note',
        title: 'Why mergers are the strongest evidence',
        text: {
          essential:
            'Every other line of evidence for black holes measures something around them: stars orbiting, gas glowing, light bending. A merger signal comes from the objects themselves, in the strongest gravitational fields ever probed, where any deviation from general relativity would be largest. The measured waveforms match the predictions of the theory across the inspiral, the merger and the ringdown.',
          detailed:
            'The observations also rule out alternatives. Objects proposed to mimic black holes without horizons — boson stars, gravastars — generally predict echoes after the ringdown, as waves reflect off a surface where a horizon should be. Searches have found no significant echoes. That is a bound rather than a proof, and it is the closest thing to direct evidence for horizons that exists.',
        },
        references: [referenceId('abbott-2023-gwtc3'), referenceId('ligo-2016-gw150914')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'gw150914-masses',
            label: 'GW150914 primary black-hole mass',
            value: 36,
            unit: 'M☉',
            uncertainty: { plus: 5, minus: 4 },
            context:
              'Merged with a companion of about 29 M☉ to form a remnant of about 62 M☉, at a distance of roughly 410 Mpc.',
            references: [referenceId('ligo-2016-gw150914')],
          },
          {
            id: 'gw150914-radiated',
            label: 'Energy radiated as gravitational waves',
            value: 3,
            unit: 'M☉c²',
            uncertainty: { plusMinus: 0.5 },
            context: 'Released in about 0.2 seconds, at a peak power of roughly 3.6 × 10⁴⁹ W.',
            references: [referenceId('ligo-2016-gw150914')],
          },
          {
            id: 'gwtc3-count',
            label: 'Compact-binary merger candidates catalogued',
            value: 90,
            unit: 'events',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Through the third LIGO–Virgo–KAGRA observing run (GWTC-3). The great majority are binary black holes.',
            references: [referenceId('abbott-2023-gwtc3')],
          },
        ],
      },
      {
        id: 'link-gw',
        kind: 'cross-link',
        topicId: topicId('gravitational-waves'),
        rationale: 'What a gravitational wave is, and why detecting one required a century.',
      },
    ],
    furtherReading: [
      referenceId('ligo-2016-gw150914'),
      referenceId('abbott-2023-gwtc3'),
      referenceId('abbott-2020-gw190521'),
    ],
  },

  {
    id: topicId('detecting-black-holes'),
    slug: 'how-we-detect-black-holes',
    sectionId: BLACK_HOLES,
    order: 16,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How we detect something that emits no light',
    subtitle: 'Four independent methods, and they agree.',
    summary: {
      essential:
        'A black hole emits nothing, so every detection is indirect. Four methods work: watching stars orbit an invisible mass, measuring X-rays from gas falling in, catching gravitational waves from mergers, and imaging the ring of light bent around one.',
      detailed:
        'What makes the case strong is that these methods are unrelated. Orbital dynamics uses Kepler’s third law and nothing else. X-ray binaries measure mass from the visible companion’s motion. Gravitational waves come from the objects themselves. Radio interferometry resolves the emission around them. Different instruments, different physics, consistent answers.',
    },
    glossaryTerms: [glossaryTermId('event-horizon'), glossaryTermId('accretion-disc')],
    related: [
      topicId('supermassive-black-holes'),
      topicId('black-hole-mergers'),
      topicId('photon-sphere-and-shadow'),
    ],
    blocks: [
      {
        id: 'problem',
        kind: 'prose',
        text: {
          essential:
            'The detection problem is real: the object is defined by the fact that nothing comes out of it. Every method below therefore measures something else — the motion of a nearby star, the light of gas heated on its way in, the shape of spacetime rippling outward, or the shadow cast on background light — and infers the black hole from that.',
          detailed:
            'The inference has two steps. First, establish that a large mass occupies a small volume. Second, argue that nothing except a black hole can be that compact and stay that way. The second step is where most of the work is: a dense cluster of neutron stars or dark remnants can be ruled out by showing it would collide or evaporate faster than the system has existed.',
        },
      },
      {
        id: 'claim-orbits',
        kind: 'claim',
        statement: {
          essential:
            'The cleanest method is to watch stars orbit. Track a star’s orbit around an invisible object, apply Kepler’s third law, and you get the enclosed mass — with no assumptions about what the object is.',
          detailed:
            'This is how the Milky Way’s central black hole was established. Two teams tracked individual stars near the Galactic centre from the early 1990s, over full orbits. The star S2 completes a 16-year orbit and passes within about 120 astronomical units, reaching almost 3% of the speed of light. The orbit requires 4.297 million solar masses inside that pericentre distance, which is smaller than the Solar System. No stable configuration of ordinary matter fits: a cluster of dark remnants at that density would disperse or collapse within a few million years. The 2020 Nobel Prize recognised this work.',
          technical:
            'The GRAVITY interferometer subsequently measured both the pericentre gravitational redshift (2018) and the Schwarzschild precession of the orbit (2020) at the general-relativistic values, which additionally tests the metric rather than only the enclosed mass.',
        },
        evidence: 'established',
        references: [
          referenceId('ghez-2008-galactic-centre'),
          referenceId('gravity-2020-schwarzschild-precession'),
        ],
      },
      {
        id: 'claim-xray',
        kind: 'claim',
        statement: {
          essential:
            'The second method is X-ray binaries: a black hole pulling gas from an ordinary companion star. The companion’s orbit gives the mass; the X-rays show that something is accreting; and if the mass exceeds what a neutron star can be, it is a black hole.',
          detailed:
            'Cygnus X-1 was the first case, identified as a bright X-ray source in 1964 and argued through the early 1970s to be a black hole. Its mass is now measured at about 21 solar masses, far above the neutron-star limit. The logic is careful: the visible companion’s Doppler wobble gives the invisible object’s mass, the X-ray emission shows matter is falling onto something extremely compact, and the absence of the surface features a neutron star would show — thermonuclear bursts, pulsations, a hard surface for infalling matter to hit — supports a horizon rather than a surface.',
          technical:
            'Roughly twenty dynamically confirmed stellar-mass black holes are known in the Galaxy, with mass functions derived from radial-velocity curves and inclination constraints. The absence of type-I X-ray bursts in black-hole candidates, and the systematically lower quiescent luminosities compared with neutron-star systems, are the standard arguments for advection through a horizon rather than re-radiation from a surface.',
        },
        evidence: 'established',
        references: [referenceId('remillard-mcclintock-2006')],
      },
      {
        id: 'claim-gw',
        kind: 'claim',
        statement: {
          essential:
            'The third method is gravitational waves. A merger signal comes from the black holes themselves rather than from anything around them, and it delivers both masses, the distance, and the properties of the remnant.',
          detailed:
            'LIGO, Virgo and KAGRA have catalogued around ninety merger candidates. The waveform is matched against templates computed from general relativity, and the fit returns the component masses, the spins, the luminosity distance and the sky position. This is the only method that observes black holes in a strong gravitational field with no intervening matter — which makes it both the cleanest test of the theory and the only route to black holes that are not accreting anything.',
          technical:
            'Detection requires coincidence between widely separated interferometers, matched filtering against template banks spanning the mass–spin parameter space, and careful vetoing of instrumental transients. False-alarm rates for the strongest events are below one per 200,000 years of observation.',
        },
        evidence: 'established',
        references: [referenceId('ligo-2016-gw150914'), referenceId('abbott-2023-gwtc3')],
      },
      {
        id: 'claim-eht',
        kind: 'claim',
        statement: {
          essential:
            'The fourth is direct imaging. The Event Horizon Telescope linked radio dishes across the planet to resolve the ring of emission around M87* in 2019 and Sgr A* in 2022 — light from hot plasma, bent around a dark central region.',
          detailed:
            'Very-long-baseline interferometry at 1.3 mm turns the Earth into a single telescope with an effective aperture of its own diameter, giving an angular resolution of about 20 microarcseconds. The measured ring diameters — 42 μas for M87*, 51.8 μas for Sgr A* — match what general relativity predicts for objects of the independently estimated masses. The dark centre is the shadow, a lensing feature substantially larger than the horizon. It is not a photograph of an event horizon, and no telescope can take one, because a horizon emits nothing.',
          technical:
            'Images are reconstructed from sparse (u,v) coverage using regularised maximum likelihood and CLEAN-based pipelines run blind against each other; the ring is robust across methods, sub-ring structure is not. Sgr A*’s variability timescale of minutes is comparable to the observation, so the published image is a time-average of a changing source.',
        },
        evidence: 'established',
        references: [
          referenceId('eht-2019-m87'),
          referenceId('eht-2022-sgr-a'),
          referenceId('eht-2019-v-physical-origin'),
        ],
      },
      {
        id: 'viz-shadow',
        kind: 'visualization',
        visualizationId: visualizationId('black-hole-shadow'),
      },
      {
        id: 'honest-limits',
        kind: 'callout',
        tone: 'caution',
        title: 'What none of these establishes',
        text: {
          essential:
            'Together these methods establish that there are objects of measured mass, compact beyond any alternative, whose exteriors match general relativity’s predictions to the precision available. They do not show the horizon directly, and they say nothing whatever about the interior. Observationally, a horizon is inferred from the absence of things a surface would produce — no thermonuclear bursts, no ringdown echoes, no excess quiescent luminosity — and absence of evidence bounds alternatives rather than eliminating them.',
          detailed:
            'The phrase to be careful with is "direct observation". Gravitational-wave detection is direct observation of spacetime distortion produced by the objects; EHT imaging is direct observation of plasma emission around them. Both are enormously stronger than what came before. Neither is an observation of a horizon, and treating them as such overstates a case that is already strong.',
        },
        references: [referenceId('abbott-2023-gwtc3'), referenceId('eht-2019-v-physical-origin')],
      },
      {
        id: 'nanograv',
        kind: 'claim',
        statement: {
          essential:
            'A fifth channel is opening. Pulsar timing arrays have found evidence for a background hum of very-low-frequency gravitational waves, plausibly the combined signal of supermassive black-hole pairs across the Universe.',
          detailed:
            'By timing millisecond pulsars across the Galaxy for decades and looking for correlated timing deviations with a specific angular pattern, NANOGrav and other collaborations reported evidence in 2023 for a nanohertz gravitational-wave background. The most natural source is the population of supermassive black-hole binaries formed when galaxies merge. The evidence is not yet at the significance of a detection claim, and cosmological sources have not been excluded.',
          technical:
            'The signature is the Hellings–Downs angular correlation between pulsar pairs. The 2023 NANOGrav 15-year result reported roughly 3–4σ evidence; distinguishing a binary population from cosmological backgrounds requires the spectral shape and, ultimately, resolving individual binaries.',
        },
        evidence: 'active-research',
        references: [referenceId('nanograv-2023-gwb')],
      },
    ],
    furtherReading: [
      referenceId('ghez-2008-galactic-centre'),
      referenceId('remillard-mcclintock-2006'),
      referenceId('eht-2019-m87'),
    ],
  },
];
