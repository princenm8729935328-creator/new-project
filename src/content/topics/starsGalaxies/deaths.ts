/**
 * Stars & Galaxies — how stars die, and what they leave.
 *
 * Two honesty problems shape this file.
 *
 * The first is supernovae. The observations are superb and the explosion
 * mechanism is not settled. Popular accounts routinely present "the bounce
 * shock stalls and neutrinos revive it" as established fact; it is the leading
 * model, it works in three-dimensional simulations, and it is still an area of
 * genuine disagreement. The topic says both things.
 *
 * The second is neutron star interiors. We know their masses and radii to a few
 * percent and we do not know what they are made of below the crust. That is an
 * unusual epistemic position and worth showing a reader explicitly.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const STARS = sectionId('stars-galaxies');
const REVIEWED = '2026-09-09';

export const STARS_DEATH_TOPICS: readonly Topic[] = [
  {
    id: topicId('supernovae'),
    slug: 'supernovae',
    sectionId: STARS,
    order: 13,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Supernovae',
    subtitle:
      'The best-observed explosions in the Universe, and we still argue about how they work.',
    summary: {
      essential:
        'When a massive star’s iron core collapses, the inner part rebounds off itself and a shock wave races outward, tearing the star apart. Almost all the energy leaves as neutrinos; a fraction of a percent becomes the light we see, which for weeks can outshine an entire galaxy.',
      detailed:
        'There are two quite different things called supernovae. Core-collapse supernovae end massive stars and are powered by gravity. Thermonuclear (Type Ia) supernovae destroy white dwarfs and are powered by runaway fusion. They look different, occur in different places, and make different elements — and conflating them causes a great deal of confusion.',
      technical:
        'Core collapse releases about 3 × 10⁴⁶ J of gravitational binding energy, of which ~99% escapes as neutrinos of all flavours over ~10 s, ~1% becomes kinetic energy of the ejecta (~10⁴⁴ J), and ~0.01% becomes radiation. The prompt bounce shock stalls within milliseconds; reviving it requires neutrino heating in the gain region, aided by convection and the standing accretion shock instability. Light curves are powered by the ⁵⁶Ni → ⁵⁶Co → ⁵⁶Fe decay chain rather than by the explosion itself.',
    },
    glossaryTerms: [glossaryTermId('supernova'), glossaryTermId('nucleosynthesis')],
    related: [
      topicId('iron-the-turning-point'),
      topicId('what-happens-after-a-massive-star-dies'),
      topicId('stellar-remnants-and-cosmic-recycling'),
    ],
    blocks: [
      {
        id: 'the-sequence',
        kind: 'prose',
        text: {
          essential:
            'The core falls inward at a quarter of light speed. When its centre reaches the density of an atomic nucleus, it suddenly stiffens — nuclear matter resists compression fiercely — and the infalling material bounces. A shock wave is launched outward. Then, almost immediately, that shock stalls, because it is spending its energy tearing apart the iron still raining down onto it.',
          detailed:
            'This is the crux of the whole problem. The bounce alone does not blow up the star; simulations have shown for fifty years that the prompt shock dies. Something has to revive it during the few hundred milliseconds before the core swallows everything. The leading answer is that a small fraction of the enormous neutrino flux is reabsorbed just behind the shock, heating it enough to push outward again — helped by violent convection that lets hot material linger in the heating region.',
        },
      },
      {
        id: 'viz-collapse',
        kind: 'visualization',
        visualizationId: visualizationId('core-collapse'),
      },
      {
        id: 'claim-neutrinos',
        kind: 'claim',
        statement: {
          essential:
            'About 99 percent of the energy of a core-collapse supernova leaves as neutrinos. The spectacular light show is a rounding error on the energy budget.',
          detailed:
            'This is not a theoretical flourish — it was measured. On 23 February 1987, three detectors recorded a burst of about two dozen neutrinos over roughly 13 seconds, hours before SN 1987A became visible in the Large Magellanic Cloud. The number detected, their energies and the duration all matched what core-collapse theory predicted. Two dozen particles is a tiny sample, and it remains one of the most informative datasets in astrophysics.',
        },
        evidence: 'established',
        references: [referenceId('hirata-1987-sn1987a'), referenceId('arnett-1989-sn1987a')],
      },
      {
        id: 'mechanism-open',
        kind: 'open-question',
        question: 'Exactly how does a stalled shock become an explosion?',
        whyItMatters: {
          essential:
            'We can see that massive stars explode — thousands have been observed. What is not settled is the detailed mechanism that turns a stalling shock into a successful blast, and how it depends on the progenitor star’s mass, rotation and structure. That matters because the mechanism determines which stars explode, which quietly collapse into black holes, and how much of each element gets out.',
          detailed:
            'Three-dimensional simulations including neutrino transport now produce explosions for a range of progenitors, which is real progress over the decades when they mostly failed. But the explosion energies are often lower than observed, results remain sensitive to numerical resolution and to the neutrino treatment, and there is no consensus on which stars should explode versus collapse. Rotation and magnetic fields probably matter for a subset of events and may dominate for the most energetic ones.',
        },
        whatWouldSettleIt: {
          essential:
            'A high-statistics neutrino burst from a Galactic supernova would map the collapse directly — current detectors would record thousands of events rather than two dozen. Gravitational waves from the same event would probe the asymmetry of the collapse. Both require a supernova close enough, which happens in our Galaxy roughly once or twice a century.',
          detailed:
            'Short of that, progress comes from matching simulated explosion energies, remnant masses and nucleosynthetic yields against the observed populations, and from pre-explosion imaging that identifies which stars did and did not explode. The apparent scarcity of high-mass red supergiant progenitors is a live clue that some massive stars may collapse without a bright supernova.',
        },
        references: [
          referenceId('janka-2012-explosion-mechanism'),
          referenceId('smartt-2009-progenitors'),
        ],
      },
      {
        id: 'two-kinds',
        kind: 'prose',
        text: {
          essential:
            'The other kind of supernova has nothing to do with a massive star. A white dwarf that gains mass — from a companion, or by merging with another white dwarf — can be pushed to the point where carbon ignites throughout its degenerate interior at once. With no thermostat to regulate it, the whole star is consumed in seconds and completely destroyed. No remnant is left at all.',
          detailed:
            'These Type Ia supernovae matter enormously to cosmology, because their peak brightness can be standardised well enough to serve as distance indicators across billions of light-years — this is how the acceleration of the Universe was discovered. What is still not settled is which progenitor route dominates: a white dwarf accreting from a normal companion, or two white dwarfs merging. Both channels appear to occur, and their relative contribution is an open question.',
        },
      },
      {
        id: 'claim-ia',
        kind: 'claim',
        statement: {
          essential:
            'Thermonuclear supernovae produce roughly half of all the iron in the Universe. Core-collapse supernovae produce most of the oxygen, neon and magnesium.',
          detailed:
            'The split can be read directly in stellar chemistry. Very old, metal-poor stars formed before thermonuclear supernovae had time to contribute — those require a white dwarf to form and then be pushed over the edge, which takes hundreds of millions of years at least. So the oldest stars are enhanced in oxygen relative to iron compared with the Sun, and the ratio changes with stellar age in exactly the way the two-source picture predicts.',
        },
        evidence: 'model',
        references: [
          referenceId('kobayashi-2020-origin-of-elements'),
          referenceId('hillebrandt-niemeyer-2000-type-ia'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'sn-energy',
            label: 'Gravitational energy released in a core collapse',
            value: 3e46,
            unit: 'J',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About a hundred times the energy the Sun will radiate over its entire ten-billion-year life, released in a few seconds. Around 99 percent departs as neutrinos.',
            references: [referenceId('janka-2012-explosion-mechanism')],
          },
          {
            id: 'sn1987a-neutrinos',
            label: 'Neutrinos detected from SN 1987A',
            value: 24,
            unit: 'events',
            context:
              'Across Kamiokande-II, IMB and Baksan, over about 13 seconds, from a supernova 168,000 light-years away. The total flux through the Earth was around 10¹⁶ per square metre.',
            references: [referenceId('hirata-1987-sn1987a')],
          },
          {
            id: 'sn-rate',
            label: 'Core-collapse supernova rate in the Milky Way',
            value: 2,
            unit: 'per century (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Estimates range from about one to three per century. Most are hidden behind dust in the Galactic plane, which is why the last unambiguous naked-eye Galactic supernova was in 1604.',
            references: [referenceId('smartt-2009-progenitors')],
          },
        ],
      },
      {
        id: 'link-remnants',
        kind: 'cross-link',
        topicId: topicId('what-happens-after-a-massive-star-dies'),
        rationale: 'What is left in the middle once the explosion has cleared.',
      },
    ],
    furtherReading: [
      referenceId('janka-2012-explosion-mechanism'),
      referenceId('woosley-2002-massive-stars'),
    ],
  },

  {
    id: topicId('what-happens-after-a-massive-star-dies'),
    slug: 'what-happens-after-a-massive-star-dies',
    sectionId: STARS,
    order: 14,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What is left behind',
    subtitle: 'Three possible endings, decided mostly by how much mass is left in the middle.',
    summary: {
      essential:
        'Every star ends as one of three things. A white dwarf, if the star was light enough that its core stayed below about 1.4 solar masses. A neutron star, if the collapsing core was heavier than that but below roughly two solar masses. A black hole, if it was heavier still — or if the explosion failed and the star simply fell in.',
      detailed:
        'What decides the outcome is not the star’s birth mass directly but the mass of its core at the end, and those two are related in a way that is still not fully mapped. Mass loss through winds, and mass exchange with a binary companion, can move a star between outcomes. This is why "stars above 25 solar masses make black holes" is a rule of thumb rather than a law.',
      technical:
        'Support is by electron degeneracy below M_Ch ≈ 1.4 M☉, by neutron degeneracy plus the repulsive core of the nuclear force up to the Tolman–Oppenheimer–Volkoff limit (observationally ≳ 2.1 M☉, theoretically uncertain to ~2.2–2.5 M☉), and by nothing above it. The initial-mass-to-remnant mapping is non-monotonic in current models: islands of explodability alternate with masses that collapse directly, and the compactness parameter is a better predictor than mass alone.',
    },
    glossaryTerms: [
      glossaryTermId('white-dwarf'),
      glossaryTermId('neutron-star'),
      glossaryTermId('degeneracy-pressure'),
    ],
    related: [
      topicId('neutron-stars'),
      topicId('white-dwarfs-and-the-chandrasekhar-limit'),
      topicId('supernovae'),
    ],
    blocks: [
      {
        id: 'the-question',
        kind: 'prose',
        text: {
          essential:
            'Once fusion is over for good, the only question left is what stops the collapse. Three answers exist. Electrons refusing to be squeezed together stop it at planet size — a white dwarf. If gravity beats the electrons, neutrons take over and stop it at city size — a neutron star. If gravity beats the neutrons too, nothing known stops it at all.',
          detailed:
            'What makes this a clean story is that each support mechanism has a maximum load. Push past it and that mechanism fails completely rather than gradually, because degeneracy pressure grows more slowly with density than gravity demands once the particles become relativistic. So the endings are genuinely discrete: there is no continuous family of objects between a white dwarf and a neutron star.',
        },
      },
      {
        id: 'viz-outcomes',
        kind: 'visualization',
        visualizationId: visualizationId('remnant-outcomes'),
      },
      {
        id: 'claim-mapping',
        kind: 'claim',
        statement: {
          essential:
            'Roughly: stars born below about 8 solar masses leave white dwarfs; between about 8 and 20 they tend to leave neutron stars; above that, black holes become likely. The boundaries are approximate and the middle range is genuinely uncertain.',
          detailed:
            'Recent modelling suggests the mapping is not even monotonic. Whether a star explodes appears to depend on the compactness of its core structure at collapse, which varies non-smoothly with initial mass — so there may be masses that explode sitting between masses that collapse quietly. Observationally this connects to the "red supergiant problem": pre-explosion images have not turned up the high-mass red supergiant progenitors that single-star models predict, which may mean the most massive of them collapse without a bright supernova.',
        },
        evidence: 'active-research',
        references: [
          referenceId('smartt-2009-progenitors'),
          referenceId('woosley-2002-massive-stars'),
        ],
      },
      {
        id: 'failed-sn',
        kind: 'callout',
        tone: 'note',
        title: 'Stars that disappear instead of exploding',
        text: {
          essential:
            'If the shock never revives, the star does not explode — it simply falls into itself and becomes a black hole. From outside, a bright supergiant would fade and vanish, with at most a faint flicker. Searches for exactly this have found a small number of candidate vanishing stars.',
          detailed:
            'The candidates are few and the evidence is not conclusive: a star can also be hidden by newly formed dust, and confirming a disappearance requires ruling that out over years. It remains a plausible and actively investigated channel rather than an established one — but if it is common, it would help explain both the missing high-mass progenitors and the existence of black holes heavier than a supernova can readily leave behind.',
        },
        references: [referenceId('smartt-2009-progenitors')],
      },
      {
        id: 'link-black-holes',
        kind: 'cross-link',
        topicId: topicId('gravitational-collapse'),
        rationale:
          'The third ending has a whole section of its own. What a black hole is, and why nothing stops the collapse, is covered there.',
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'tov-limit',
            label: 'Maximum observed neutron star mass',
            value: 2.08,
            unit: 'M☉',
            uncertainty: { plusMinus: 0.07 },
            context:
              'PSR J0740+6620, measured via the relativistic Shapiro delay. This is a lower bound on the maximum: it proves neutron stars can be at least this heavy, and does not say how much heavier they could be.',
            references: [referenceId('cromartie-2020-massive-pulsar')],
          },
          {
            id: 'chandra-limit',
            label: 'Chandrasekhar limit',
            value: 1.4,
            unit: 'M☉',
            context:
              'The maximum mass supportable by electron degeneracy pressure, for a composition with two nucleons per electron. Computed from first principles rather than measured.',
            references: [referenceId('chandrasekhar-1931')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('ozel-freire-2016-neutron-stars')],
  },

  {
    id: topicId('neutron-stars'),
    slug: 'neutron-stars',
    sectionId: STARS,
    order: 15,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Neutron stars',
    subtitle:
      'A star’s worth of mass in the space of a city, and we do not know what it is made of.',
    summary: {
      essential:
        'A neutron star packs more than the Sun’s mass into a ball about 22 kilometres across. A sugar-cube of its material would weigh about as much as all of humanity. Many spin hundreds of times a second and carry magnetic fields a trillion times Earth’s, and when their beams sweep past us we see them as pulsars.',
      detailed:
        'They are the densest objects that have a surface. The outer kilometre or so is a crystalline crust of nuclei; below that, nuclei dissolve into a fluid of neutrons with some protons and electrons. What happens in the innermost core, at several times nuclear density, is genuinely unknown — it may be neutrons, or it may be free quarks, and both possibilities remain open.',
      technical:
        'Typical parameters: M ≈ 1.4 M☉, R ≈ 11–13 km, central density ≳ 5–10 ρ_nuc where ρ_nuc ≈ 2.7 × 10¹⁷ kg/m³. Support comes from neutron degeneracy plus the repulsive core of the nuclear interaction, the latter dominating. The mass–radius relation is a one-to-one map onto the equation of state; NICER pulse-profile modelling and the tidal deformability measured from GW170817 now constrain it jointly, but do not yet determine the composition at the highest densities.',
    },
    glossaryTerms: [
      glossaryTermId('neutron-star'),
      glossaryTermId('pulsar'),
      glossaryTermId('degeneracy-pressure'),
    ],
    related: [
      topicId('what-happens-after-a-massive-star-dies'),
      topicId('white-dwarfs-and-the-chandrasekhar-limit'),
      topicId('making-the-elements'),
    ],
    blocks: [
      {
        id: 'the-density',
        kind: 'prose',
        text: {
          essential:
            'Take the Sun. Keep all the mass. Squeeze it until it is the size of a city. That is a neutron star: about 1.4 times the Sun’s mass inside a radius of roughly 12 kilometres. Its material is as dense as the inside of an atomic nucleus, which is the densest form of matter that can sit still and be looked at.',
          detailed:
            'A useful way to feel the number: an ordinary atom is almost entirely empty space, with a nucleus occupying about one part in 10¹⁵ of its volume. A neutron star is what you get when you remove that empty space from a star’s worth of atoms. Its surface gravity is around 10¹¹ times Earth’s, and light leaving it is redshifted by tens of percent — general relativity is not a small correction here, it is a leading-order effect.',
        },
      },
      {
        id: 'viz-density',
        kind: 'visualization',
        visualizationId: visualizationId('neutron-star-density'),
      },
      {
        id: 'claim-pulsars',
        kind: 'claim',
        statement: {
          essential:
            'Rotating neutron stars produce pulses of extraordinary regularity — some millisecond pulsars keep time comparably to atomic clocks over years. That regularity is what makes them precision laboratories for gravity.',
          detailed:
            'The first was found in 1967 as a signal so regular that its discoverers briefly labelled it LGM-1, half-jokingly, for "little green men". The regularity comes from angular momentum: a rotating object with nothing to slow it down keeps a very steady period. Timing pulsars in binaries has since delivered some of the sharpest tests of general relativity available, including the first evidence for gravitational waves through orbital decay.',
        },
        evidence: 'established',
        references: [
          referenceId('hewish-1968-pulsar'),
          referenceId('weisberg-huang-2016-binary-pulsar'),
        ],
      },
      {
        id: 'interior-unknown',
        kind: 'open-question',
        question: 'What is a neutron star actually made of at its centre?',
        whyItMatters: {
          essential:
            'We can measure a neutron star’s mass and radius quite well. What we cannot do is say with confidence what the matter in its core is. At several times nuclear density, it may remain neutrons and protons, or it may transition to something else — hyperons, or deconfined quark matter. No laboratory on Earth can reach those densities.',
          detailed:
            'The stakes go beyond stellar astrophysics: this is the only accessible probe of the strong interaction at high density and low temperature, a regime that heavy-ion colliders cannot reach because they produce hot matter instead. The relationship between pressure and density — the equation of state — maps one-to-one onto the mass–radius relation, so measuring masses and radii is measuring nuclear physics.',
        },
        whatWouldSettleIt: {
          essential:
            'Precise simultaneous mass and radius measurements for many neutron stars, plus tidal deformabilities from more neutron-star mergers. Both are being collected now, and both have already excluded some proposed models.',
          detailed:
            'NICER has produced mass–radius constraints from X-ray pulse profiles, and GW170817’s tidal deformability ruled out the stiffest equations of state. The existence of a 2.08-solar-mass pulsar rules out the softest. The allowed band has narrowed considerably and still admits both purely hadronic models and models with a quark core — so the composition question remains genuinely open rather than nearly settled.',
        },
        references: [
          referenceId('ozel-freire-2016-neutron-stars'),
          referenceId('riley-2019-nicer'),
          referenceId('abbott-2017-gw170817'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'ns-radius',
            label: 'Neutron star radius',
            value: 12.7,
            unit: 'km',
            uncertainty: { plus: 1.1, minus: 1.2 },
            context:
              'For PSR J0030+0451, from NICER X-ray pulse-profile modelling. Different analyses of the same data give slightly different values, and the model dependence is real.',
            references: [referenceId('riley-2019-nicer')],
          },
          {
            id: 'nuclear-density',
            label: 'Nuclear saturation density',
            value: 2.7e17,
            unit: 'kg/m³',
            context:
              'The density inside an ordinary atomic nucleus. A neutron star’s core exceeds this several times over — the regime where the composition becomes uncertain.',
            references: [referenceId('ozel-freire-2016-neutron-stars')],
          },
          {
            id: 'fastest-pulsar',
            label: 'Fastest known pulsar rotation',
            value: 716,
            unit: 'rotations per second',
            context:
              'PSR J1748−2446ad. Its equator moves at roughly a quarter of the speed of light. Nothing held together by ordinary material strength could survive this.',
            references: [referenceId('ozel-freire-2016-neutron-stars')],
          },
        ],
      },
      {
        id: 'link-elements',
        kind: 'cross-link',
        topicId: topicId('making-the-elements'),
        rationale:
          'When two neutron stars collide, the debris makes gold and uranium. That has now been observed directly.',
      },
    ],
    furtherReading: [
      referenceId('ozel-freire-2016-neutron-stars'),
      referenceId('riley-2019-nicer'),
    ],
  },

  {
    id: topicId('white-dwarfs-and-the-chandrasekhar-limit'),
    slug: 'white-dwarfs-and-the-chandrasekhar-limit',
    sectionId: STARS,
    order: 16,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'White dwarfs and the Chandrasekhar limit',
    subtitle: 'Add mass to one and it gets smaller — until it cannot exist at all.',
    summary: {
      essential:
        'A white dwarf is a dead stellar core held up not by heat but by the refusal of electrons to occupy the same quantum state. That support behaves unlike anything familiar: adding mass makes the star *shrink*. And past about 1.4 solar masses, it fails entirely — no white dwarf heavier than that can exist.',
      detailed:
        'The reason for the limit is relativity. Degeneracy pressure comes from electrons being forced into high-momentum states. As the star is compressed further, those electrons approach the speed of light, and once they do, the pressure stops rising fast enough to keep up with gravity. Squeezing harder no longer helps, and the collapse becomes unstoppable.',
      technical:
        'For a non-relativistic degenerate gas P ∝ ρ^{5/3}, giving R ∝ M^{−1/3}. In the ultra-relativistic limit P ∝ ρ^{4/3}, for which the polytropic index n = 3 admits equilibrium at only one mass: M_Ch = (√3π/2)(ħc/G)^{3/2}/(μ_e m_H)² ≈ 1.456 (2/μ_e)² M☉, or ≈ 1.44 M☉ for μ_e = 2. Coulomb corrections, general relativity and finite temperature shift the practical limit slightly downward.',
    },
    glossaryTerms: [
      glossaryTermId('white-dwarf'),
      glossaryTermId('chandrasekhar-limit'),
      glossaryTermId('degeneracy-pressure'),
    ],
    related: [
      topicId('the-life-of-a-sun-like-star'),
      topicId('neutron-stars'),
      topicId('supernovae'),
    ],
    blocks: [
      {
        id: 'a-different-support',
        kind: 'prose',
        text: {
          essential:
            'An ordinary star holds itself up with heat: hot gas pushes outward. A white dwarf has no fusion and is slowly cooling — yet it does not shrink. Something else is holding it up, and that something does not care about temperature at all. It is the exclusion principle: electrons cannot share a quantum state, so squeezing them into a smaller volume forces some of them to move very fast, and fast-moving electrons resist compression.',
          detailed:
            'This is worth appreciating as a genuinely quantum effect operating at astronomical scale. The pressure exists at absolute zero. A white dwarf will cool for hundreds of billions of years, eventually radiating almost nothing, and it will be the same size at the end as at the beginning. Its structure is set by quantum mechanics and gravity, and by nothing else.',
        },
      },
      {
        id: 'viz-chandra',
        kind: 'visualization',
        visualizationId: visualizationId('chandrasekhar-limit'),
      },
      {
        id: 'claim-backwards',
        kind: 'claim',
        statement: {
          essential:
            'A more massive white dwarf is a smaller white dwarf. The radius falls roughly as the inverse cube root of the mass — the opposite of how ordinary objects behave.',
          detailed:
            'The reason is that degeneracy pressure depends on density, not on the amount of material. More mass means more weight to support, which requires higher density, which means a smaller radius. Extrapolating this relation is what reveals the limit: the radius shrinks toward zero at a finite mass. That mass is where the star would have to be infinitely dense to support itself, which is another way of saying it cannot support itself at all.',
        },
        evidence: 'established',
        references: [
          referenceId('chandrasekhar-1931'),
          referenceId('pons-2005-white-dwarf-cooling'),
        ],
      },
      {
        id: 'eddington',
        kind: 'callout',
        tone: 'history',
        title: 'A limit nobody wanted to believe',
        text: {
          essential:
            'Chandrasekhar worked the result out in 1930, aged 19, on a boat from India to England. When he presented it in 1935, Eddington — the most eminent astrophysicist alive, and Chandrasekhar’s mentor — publicly dismissed it as absurd, on the grounds that nature would surely find a way to prevent such a collapse.',
          detailed:
            'Eddington’s objection was not stupid. The consequence of accepting the limit was that sufficiently massive stars must collapse to something with no known endpoint, which in 1935 sounded like a reductio ad absurdum rather than a prediction. Chandrasekhar was right, the collapse endpoint turned out to be neutron stars and black holes, and he received a Nobel Prize for it — fifty years later.',
        },
        references: [referenceId('chandrasekhar-1931')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'sirius-b',
            label: 'Mass of Sirius B',
            value: 1.018,
            unit: 'M☉',
            uncertainty: { plusMinus: 0.011 },
            context:
              'A white dwarf slightly more massive than the Sun, in a radius of about 5,800 km — smaller than the Earth. Its mass comes from its orbit around Sirius A, so it is a dynamical measurement rather than a model result.',
            references: [referenceId('pons-2005-white-dwarf-cooling')],
          },
          {
            id: 'wd-density',
            label: 'Typical white dwarf density',
            value: 1e9,
            unit: 'kg/m³',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About a million times the density of water. A teaspoon would weigh several tonnes — and this is the *low*-density stellar remnant.',
            references: [referenceId('pons-2005-white-dwarf-cooling')],
          },
        ],
      },
      {
        id: 'link-ia',
        kind: 'cross-link',
        topicId: topicId('supernovae'),
        rationale:
          'A white dwarf pushed toward this limit does not collapse quietly — it detonates, and those detonations are how the expansion of the Universe was measured.',
      },
    ],
    furtherReading: [referenceId('chandrasekhar-1931')],
  },

  {
    id: topicId('stellar-remnants-and-cosmic-recycling'),
    slug: 'stellar-remnants-and-cosmic-recycling',
    sectionId: STARS,
    order: 17,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Cosmic recycling',
    subtitle: 'Stars do not just die. They give most of themselves back.',
    summary: {
      essential:
        'A star locks up only part of its mass forever. The rest — enriched with the elements it manufactured — is blown back into interstellar space by winds and explosions, where it mixes into gas clouds and eventually becomes new stars and planets. The Galaxy has been running this loop for over twelve billion years.',
      detailed:
        'The bookkeeping matters. A Sun-like star returns roughly half its mass and keeps the rest as a white dwarf. A 20-solar-mass star returns the great majority and keeps a couple of solar masses as a neutron star or black hole. Each cycle raises the heavy-element content of the gas slightly, which is why later generations of stars are chemically richer than earlier ones.',
      technical:
        'The return fraction R and the yield y set galactic chemical evolution. In the instantaneous-recycling approximation with a closed box, Z(t) = −y ln(μ(t)) where μ is the gas fraction — a model that famously over-predicts the number of metal-poor stars in the solar neighbourhood (the G-dwarf problem), which is resolved by allowing gas inflow. Real treatments track delay times per element, since iron from thermonuclear supernovae arrives hundreds of Myr after the oxygen from core collapse.',
    },
    glossaryTerms: [glossaryTermId('interstellar-medium'), glossaryTermId('metallicity')],
    related: [
      topicId('making-the-elements'),
      topicId('why-stellar-generations-matter'),
      topicId('how-the-universe-became-chemically-rich'),
    ],
    blocks: [
      {
        id: 'the-loop',
        kind: 'prose',
        text: {
          essential:
            'Gas collapses into stars. Stars make heavy elements. Stars die and return most of their material, now enriched, to the gas. That gas collapses into new stars — which start with a head start on chemistry. Round and round, for the age of the Galaxy, with the heavy-element fraction creeping upward each time.',
          detailed:
            'The loop is lossy in both directions, and the losses are what make galaxies differ. Some material is locked into remnants permanently and never returns. Some is blown out of the galaxy entirely by supernova-driven winds, especially in small galaxies with weak gravity. And fresh, un-enriched gas keeps falling in from outside, diluting what is there. A galaxy’s chemistry is the running balance of all three.',
        },
      },
      {
        id: 'viz-enrichment',
        kind: 'visualization',
        visualizationId: visualizationId('chemical-enrichment'),
      },
      {
        id: 'claim-return',
        kind: 'claim',
        statement: {
          essential:
            'Roughly 30 to 50 percent of the mass that goes into forming a generation of stars comes back out again within a few billion years. The rest stays locked in white dwarfs, neutron stars, black holes and long-lived small stars.',
          detailed:
            'The figure depends on the initial mass function, because it is dominated by which stars die soonest and how much each returns. Low-mass stars are the biggest sink: a 0.3-solar-mass red dwarf formed at the dawn of the Galaxy is still on the main sequence today and will be for trillions of years, holding its material out of circulation indefinitely.',
        },
        evidence: 'model',
        references: [
          referenceId('kroupa-2001-imf'),
          referenceId('kobayashi-2020-origin-of-elements'),
        ],
      },
      {
        id: 'dust',
        kind: 'prose',
        text: {
          essential:
            'Some of the returned material condenses into solid grains — soot and sand, essentially — in the cool outer winds of dying stars and in supernova debris. That dust is what makes molecular clouds cold enough to collapse, and it is the raw material from which rocky planets are eventually assembled.',
          detailed:
            'A few of these grains survive the entire journey intact and end up in meteorites, where they can be extracted and measured. Their isotopic compositions are wildly different from anything else in the Solar System — which is how we know they formed around other stars, before the Sun existed. These presolar grains are physical samples of other stars’ nucleosynthesis, held in a laboratory.',
        },
      },
      {
        id: 'claim-presolar',
        kind: 'claim',
        statement: {
          essential:
            'Grains of dust formed around stars that died before the Sun was born have been recovered from meteorites and analysed in laboratories. Their isotope ratios identify the type of star each came from.',
          detailed:
            'Silicon carbide grains with distinctive silicon and carbon isotope ratios point to asymptotic giant branch stars; others carry the signature of supernova ejecta. These are the only direct physical samples of material from other stars that anyone has ever held, and they confirm the nucleosynthesis predictions of stellar models grain by grain.',
        },
        evidence: 'established',
        references: [referenceId('herwig-2005-agb'), referenceId('b2fh-1957')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'ism-mass',
            label: 'Mass of gas in the Milky Way’s interstellar medium',
            value: 1e10,
            unit: 'M☉ (order of magnitude)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About 10 to 15 percent of the Galaxy’s stellar mass. At the current star-formation rate this reservoir would last several billion more years, though it is continually replenished by inflow.',
            references: [referenceId('bland-hawthorn-gerhard-2016-milky-way')],
          },
          {
            id: 'dust-fraction',
            label: 'Fraction of interstellar material in solid dust grains',
            value: 1,
            unit: 'percent by mass',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'A small fraction that has an outsized effect: dust dominates the cooling of molecular clouds and blocks visible light from distant regions of the Galaxy.',
            references: [referenceId('draine-2011-ism')],
          },
        ],
      },
      {
        id: 'link-generations',
        kind: 'cross-link',
        topicId: topicId('why-stellar-generations-matter'),
        rationale: 'Why this loop matters for whether a star can have rocky planets at all.',
      },
    ],
    furtherReading: [
      referenceId('kobayashi-2020-origin-of-elements'),
      referenceId('draine-2011-ism'),
    ],
  },
];
