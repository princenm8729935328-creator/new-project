/**
 * Black holes — what they are, how they form, and where the theory stops.
 *
 * Three editorial rules govern this file, and the rest of the section follows
 * them:
 *
 *   - A black hole is a region of spacetime, not an object made of stuff. Every
 *     sentence that treats it as a very dense ball has to be rewritten.
 *   - The escape-velocity story is allowed, because it is how everyone first
 *     meets the idea — but it is corrected explicitly rather than left standing.
 *   - The singularity is where general relativity fails, and that is said in
 *     those words. Nothing here describes what is "at the centre".
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const BLACK_HOLES = sectionId('black-holes');
const REVIEWED = '2026-09-07';

export const BLACK_HOLE_FOUNDATION_TOPICS: readonly Topic[] = [
  {
    id: topicId('what-is-a-black-hole'),
    slug: 'what-a-black-hole-is',
    sectionId: BLACK_HOLES,
    order: 1,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What a black hole is',
    subtitle: 'A region of spacetime, not an object — and the difference matters.',
    summary: {
      essential:
        'A black hole is a region of spacetime curved so steeply that no path leads out of it, not even for light. Its boundary is the event horizon. What is inside is not a very dense object but a region from which nothing returns.',
      detailed:
        'Black holes are solutions of Einstein’s field equations, found within months of the equations being published and taken seriously as physical objects only decades later. They are described completely by three numbers — mass, angular momentum and electric charge — and everything else about whatever formed them is lost from the exterior description.',
      technical:
        'The Schwarzschild solution (1916) is the unique static, spherically symmetric vacuum solution; the Kerr solution (1963) is its rotating generalisation. The no-hair theorems establish that an isolated stationary black hole in general relativity is characterised by (M, J, Q) alone.',
    },
    glossaryTerms: [
      glossaryTermId('event-horizon'),
      glossaryTermId('schwarzschild-radius'),
      glossaryTermId('spacetime'),
    ],
    related: [
      topicId('black-hole-foundations'),
      topicId('curved-spacetime'),
      topicId('event-horizon'),
    ],
    blocks: [
      {
        id: 'not-an-object',
        kind: 'prose',
        text: {
          essential:
            'The first thing to unlearn is the picture of a black hole as a very heavy ball sitting in space, sucking things in. It is not an object at all. It is a region — a part of spacetime that is curved so steeply that every possible path forward in time leads further in, and none leads back out.',
          detailed:
            'The distinction is not pedantry. It explains why a black hole cannot "suck" anything: replace the Sun with a black hole of exactly one solar mass and the Earth’s orbit would not change by a metre, because at that distance the gravitational field is identical. Nothing about a black hole reaches further than the mass that made it. It is only when you get close — closer than any ordinary star would let you — that the geometry becomes strange.',
          technical:
            'Formally, a black hole is the region of a spacetime not contained in the causal past of future null infinity: the set of events from which no future-directed causal curve reaches a distant observer. The horizon is the boundary of that region, and it is a global feature of the spacetime rather than a locally detectable surface.',
        },
      },
      {
        id: 'suction',
        kind: 'callout',
        tone: 'misconception',
        title: '“Black holes suck things in”',
        text: {
          essential:
            'A black hole’s gravity at a given distance is exactly the gravity of the same mass in any other form. If the Sun collapsed into a black hole tonight — which it cannot — the Earth would keep orbiting on the same path, in the dark. What is different about a black hole is not the strength of its pull at a distance but that you can get so close to all that mass, because it is no longer spread over a star-sized volume.',
          detailed:
            'The word "vacuum cleaner" gets used because black holes are usually seen while they are accreting, and accretion is spectacular. But that gas is not being sucked; it is orbiting, losing angular momentum through friction, and spiralling in. Gas that is not aimed inward simply orbits, exactly as a planet does.',
        },
        references: [referenceId('schwarzschild-1916')],
      },
      {
        id: 'claim-horizon',
        kind: 'claim',
        statement: {
          essential:
            'The boundary of a black hole is the event horizon: the surface at which the outward escape route closes. Cross it and every path, including every path light could take, leads inward.',
          detailed:
            'For a non-rotating black hole the horizon sits at the Schwarzschild radius, r = 2GM/c². Nothing marks it locally — there is no wall, no membrane, no flash. An infalling observer crossing the horizon of a large black hole notices nothing at all at the moment of crossing. The horizon is defined by where paths lead, which is a global fact about the spacetime, not a local one about the place.',
          technical:
            'In Schwarzschild coordinates the metric coefficient g_tt vanishes and g_rr diverges at r = 2GM/c², but every curvature invariant remains finite there; the divergence is a coordinate artefact, removable by Eddington–Finkelstein or Kruskal–Szekeres coordinates. Inside the horizon the r coordinate becomes timelike, which is the precise sense in which reaching smaller r becomes as unavoidable as reaching a later time.',
        },
        evidence: 'established',
        references: [referenceId('schwarzschild-1916'), referenceId('misner-thorne-wheeler-1973')],
      },
      {
        id: 'def-event-horizon',
        kind: 'definition',
        termId: glossaryTermId('event-horizon'),
      },
      {
        id: 'viz-anatomy',
        kind: 'visualization',
        visualizationId: visualizationId('black-hole-anatomy'),
      },
      {
        id: 'claim-no-hair',
        kind: 'claim',
        statement: {
          essential:
            'In general relativity a black hole is described completely by three numbers: its mass, how fast it spins, and its electric charge. Everything else about what fell in is invisible from outside.',
          detailed:
            'Two black holes of the same mass and spin are identical, whether one formed from a collapsing star and the other from a mountain of encyclopaedias. Astrophysical black holes are expected to carry negligible charge, because any charge attracts the opposite charge from surrounding plasma and neutralises quickly — so in practice two numbers, mass and spin, describe them. John Wheeler’s phrase for this was that "black holes have no hair".',
          technical:
            'The uniqueness theorems (Israel, Carter, Hawking, Robinson) establish that the Kerr–Newman family exhausts the stationary, asymptotically flat, electrovacuum black-hole solutions. The result holds for the exterior of an isolated stationary hole; it says nothing about the interior, and the apparent loss of information it implies is the subject of an unresolved debate.',
        },
        evidence: 'established',
        references: [referenceId('kerr-1963'), referenceId('misner-thorne-wheeler-1973')],
      },
      {
        id: 'history',
        kind: 'callout',
        tone: 'history',
        title: 'A solution nobody believed described anything',
        text: {
          essential:
            'Karl Schwarzschild found the solution in 1916, from a trench on the Russian front, within months of Einstein publishing the field equations. For decades it was treated as a mathematical curiosity — Eddington and Einstein both doubted that nature would allow such a thing to actually form. Penrose’s 1965 theorem showed that collapse to a singularity is generic rather than an artefact of assuming perfect symmetry, and that changed the question from "could this exist?" to "where are they?"',
          detailed:
            'The term "black hole" is much later, popularised after a 1967 lecture by John Wheeler. Chandrasekhar had shown in 1931 that a white dwarf above about 1.4 solar masses cannot support itself, and Oppenheimer and Snyder in 1939 followed a collapsing star all the way through its own gravitational radius — but the Second World War intervened, and the astrophysical community did not take the result up until the 1960s discovery of quasars and X-ray binaries forced the issue.',
        },
        references: [
          referenceId('schwarzschild-1916'),
          referenceId('oppenheimer-snyder-1939'),
          referenceId('penrose-1965-singularities'),
        ],
      },
      {
        id: 'they-are-real',
        kind: 'prose',
        text: {
          essential:
            'They are no longer hypothetical. Stars have been tracked orbiting an invisible four-million-solar-mass object at the centre of our galaxy for three decades. Gravitational waves from merging black holes have been recorded since 2015. And the Event Horizon Telescope has resolved the bright ring of material orbiting close to two of them.',
          detailed:
            'Each of those is a different kind of evidence — orbital dynamics, spacetime ripples, and radio imaging — and they agree. That agreement is what moved black holes from "the equations permit this" to "these are objects in the sky with measured masses". What none of them does is show the inside, and no observation ever will: the horizon is a one-way surface.',
        },
      },
      {
        id: 'link-formation',
        kind: 'cross-link',
        topicId: topicId('black-hole-formation'),
        rationale: 'Where they come from, and why more than one route leads to the same object.',
      },
    ],
    furtherReading: [
      referenceId('schwarzschild-1916'),
      referenceId('penrose-1965-singularities'),
      referenceId('misner-thorne-wheeler-1973'),
    ],
  },

  {
    id: topicId('black-hole-formation'),
    slug: 'how-black-holes-form',
    sectionId: BLACK_HOLES,
    order: 2,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How black holes form',
    subtitle: 'Dying stars are the familiar route. They are not the only one.',
    summary: {
      essential:
        'The best-understood route is the collapse of a massive star’s core when it runs out of fuel. But black holes also grow by accretion and by merging with each other, and the supermassive ones at galaxy centres appear too early and too large for stellar collapse alone to explain.',
      detailed:
        'Formation channels differ by mass range. Stellar-mass black holes come from stars above roughly 20 solar masses. Intermediate-mass black holes may form by runaway collisions in dense clusters or by mergers, and only a few candidates are known. The origin of supermassive black holes is genuinely unsettled, with direct collapse of primordial gas clouds and rapid growth from massive seeds both under active investigation.',
    },
    glossaryTerms: [glossaryTermId('event-horizon')],
    related: [
      topicId('gravitational-collapse'),
      topicId('black-hole-classes'),
      topicId('supermassive-black-holes'),
    ],
    blocks: [
      {
        id: 'intro',
        kind: 'prose',
        text: {
          essential:
            'There is no single way to make a black hole. What every route has in common is concentration: get enough mass inside a small enough radius and no known force can hold it up. The routes differ in how the mass gets there.',
          detailed:
            'It is worth separating three questions that often get merged. How is a black hole made in the first place — the seed? How does it grow afterwards? And how does a population of black holes end up with the mass distribution we observe? Stellar collapse answers the first for the lightest ones and nothing at all for the heaviest.',
        },
      },
      {
        id: 'claim-stellar',
        kind: 'claim',
        statement: {
          essential:
            'A star more massive than about 20 solar masses ends by collapsing its core into a black hole. Fusion holds a star up; when the core becomes iron, fusion stops paying, and there is nothing left to resist gravity.',
          detailed:
            'A massive star fuses progressively heavier elements, each stage faster than the last, until it builds an iron core. Fusing iron consumes energy instead of releasing it, so the core’s support vanishes in seconds. The inner core collapses; if what remains is below about 2.2 solar masses, neutron degeneracy pressure stops it and a neutron star forms. Above that limit nothing known can stop it, and it becomes a black hole — sometimes with a supernova, sometimes with the star simply disappearing.',
          technical:
            'The Chandrasekhar limit (~1.4 M☉) bounds electron-degenerate support; the Tolman–Oppenheimer–Volkoff limit bounds neutron-degenerate support and is currently constrained to roughly 2.2–2.5 M☉, partly by the GW170817 remnant. The mapping from progenitor zero-age main-sequence mass to remnant type is not monotonic, and depends on metallicity, rotation, binarity and mass loss.',
        },
        evidence: 'established',
        references: [
          referenceId('chandrasekhar-1931'),
          referenceId('oppenheimer-volkoff-1939'),
          referenceId('abbott-2017-gw170817'),
        ],
      },
      {
        id: 'viz-collapse',
        kind: 'visualization',
        visualizationId: visualizationId('gravitational-collapse'),
      },
      {
        id: 'claim-mergers',
        kind: 'claim',
        statement: {
          essential:
            'Black holes also form by merging. Two black holes that spiral together produce one larger black hole — and gravitational-wave observatories have now recorded around ninety such events.',
          detailed:
            'Merger is a formation channel in its own right, not just a rearrangement: the remnant of GW150914 was a 62-solar-mass black hole that did not exist before the event. It is also the leading explanation for how black holes cross the mass gaps that stellar evolution struggles to fill — GW190521 produced a remnant of about 142 solar masses, in the intermediate range where no formation route is well established.',
          technical:
            'Hierarchical merger scenarios in dense environments (globular clusters, nuclear star clusters, AGN discs) can build up masses inside the pair-instability gap, roughly 65–120 M☉, where stellar collapse is not expected to leave a remnant at all. Spin magnitudes and misalignments in the population are the main observational discriminant between isolated-binary and dynamical channels.',
        },
        evidence: 'established',
        references: [referenceId('abbott-2023-gwtc3'), referenceId('abbott-2020-gw190521')],
      },
      {
        id: 'claim-accretion-growth',
        kind: 'claim',
        statement: {
          essential:
            'Once formed, a black hole grows by swallowing whatever reaches it. Growth by accretion is limited, though: infalling gas radiates so fiercely that the radiation pressure pushes further gas away.',
          detailed:
            'The ceiling is the Eddington limit, the luminosity at which outward radiation pressure balances inward gravity. A black hole accreting at that limit grows exponentially with an e-folding time of a few tens of millions of years — fast on cosmic timescales, but not fast enough to produce a billion-solar-mass quasar within the first 700 million years of the Universe from a stellar-mass seed. That tension is one of the reasons the origin of supermassive black holes is unsettled.',
          technical:
            'The Salpeter time is t_S ≈ 4.5 × 10⁷ yr × (ε/0.1)(1−ε)⁻¹ for radiative efficiency ε. Growing from a 10 M☉ seed to 10⁹ M☉ requires about 18 e-foldings, or ~800 Myr of continuous Eddington-limited accretion — leaving little margin against the observed z > 7 quasars, unless accretion is episodically super-Eddington or the seeds were much heavier.',
        },
        evidence: 'model',
        references: [referenceId('shakura-sunyaev-1973'), referenceId('kormendy-ho-2013')],
      },
      {
        id: 'seeds',
        kind: 'open-question',
        question: 'Where did the first supermassive black holes come from?',
        whyItMatters: {
          essential:
            'Quasars powered by billion-solar-mass black holes have been found less than 700 million years after the Big Bang. Building one that big that fast from an ordinary stellar remnant is difficult, and possibly impossible without periods of accretion faster than the standard limit.',
          detailed:
            'The candidate answers are all under active work: heavy seeds from the direct collapse of primordial gas clouds of 10⁴–10⁵ solar masses; runaway stellar collisions in dense early clusters; sustained super-Eddington accretion onto ordinary seeds; or primordial black holes formed from density fluctuations before any star existed. Each makes different predictions, and none is established.',
        },
        whatWouldSettleIt: {
          essential:
            'Observations of the earliest accreting black holes. JWST has already found candidate low-luminosity active nuclei at high redshift; measuring the mass function at those epochs would discriminate between light and heavy seeds. Future gravitational-wave observatories sensitive to intermediate-mass mergers would test the merger-driven route directly.',
        },
        references: [referenceId('kormendy-ho-2013'), referenceId('curtis-lake-2023-jwst')],
      },
      {
        id: 'primordial',
        kind: 'callout',
        tone: 'caution',
        title: 'Primordial black holes: hypothetical',
        text: {
          essential:
            'Black holes might also have formed directly from dense regions in the first fraction of a second after the Big Bang, with no star involved. This is a serious hypothesis with a large literature, and it has never been confirmed: no primordial black hole has been detected, and observations rule them out as the dominant form of dark matter across most of the plausible mass range.',
        },
        references: [referenceId('bertone-hooper-2018-history')],
      },
    ],
    furtherReading: [
      referenceId('chandrasekhar-1931'),
      referenceId('abbott-2023-gwtc3'),
      referenceId('kormendy-ho-2013'),
    ],
  },

  {
    id: topicId('gravitational-collapse'),
    slug: 'gravitational-collapse',
    sectionId: BLACK_HOLES,
    order: 3,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Gravitational collapse',
    subtitle: 'What happens in the seconds when nothing is holding the core up any more.',
    summary: {
      essential:
        'Every stable object is a standoff between gravity pulling in and pressure pushing out. Collapse is what happens when the pressure loses. Once the core passes the point where no known force can support it, the fall continues all the way through the horizon.',
      detailed:
        'The sequence is a ladder of failing supports: thermal pressure from fusion, then electron degeneracy pressure, then neutron degeneracy pressure. Each holds up to a mass limit. Above the last of them there is nothing left, and general relativity predicts that collapse cannot be halted — Penrose showed in 1965 that this conclusion does not depend on assuming perfect spherical symmetry.',
    },
    glossaryTerms: [glossaryTermId('event-horizon'), glossaryTermId('singularity')],
    related: [topicId('black-hole-formation'), topicId('event-horizon'), topicId('singularity')],
    blocks: [
      {
        id: 'standoff',
        kind: 'prose',
        text: {
          essential:
            'A star is not a thing that sits there; it is a balance being continuously maintained. Gravity is trying to collapse it, and the pressure of hot gas — kept hot by fusion — is holding it up. The balance lasts as long as there is fuel. It is a stalemate with an expiry date.',
          detailed:
            'The star spends its life fusing hydrogen to helium, then helium to carbon, and in the heaviest stars onward through oxygen, neon, silicon. Each stage releases less energy per unit mass and burns out faster: hydrogen for millions of years, silicon for about a day. The star ends with an iron core, and iron is where the ladder stops, because fusing it absorbs energy rather than releasing it.',
        },
      },
      {
        id: 'claim-ladder',
        kind: 'claim',
        statement: {
          essential:
            'Two more supports lie beyond fusion, and each has a mass limit. Electron degeneracy pressure holds up a white dwarf below about 1.4 solar masses. Neutron degeneracy pressure holds up a neutron star below roughly 2.2. Above that, nothing known holds.',
          detailed:
            'Degeneracy pressure is quantum mechanical rather than thermal: identical fermions cannot occupy the same state, so compressing them costs energy even at zero temperature. It is what keeps a white dwarf from collapsing after it has cooled. But it is not unlimited. Chandrasekhar showed in 1931 that above about 1.4 solar masses the electrons become relativistic and the support fails; the neutron equivalent, worked out by Tolman, Oppenheimer and Volkoff, fails somewhere around 2.2 to 2.5 solar masses, the exact figure depending on the poorly known equation of state of nuclear matter.',
          technical:
            'For a relativistic degenerate gas the pressure scales as ρ^(4/3), the same power as the gravitational term in the hydrostatic equation, so the two scale together and no equilibrium radius exists above the limiting mass. GW170817’s remnant provides one of the tightest empirical bounds on the TOV limit, constraining it to roughly 2.2–2.3 M☉ under standard assumptions.',
        },
        evidence: 'established',
        references: [
          referenceId('chandrasekhar-1931'),
          referenceId('oppenheimer-volkoff-1939'),
          referenceId('abbott-2017-gw170817'),
        ],
      },
      {
        id: 'claim-runaway',
        kind: 'claim',
        statement: {
          essential:
            'Beyond that point collapse is a runaway. Squeezing the core makes gravity at its surface stronger, which squeezes it harder still. There is no radius at which the process finds a new balance.',
          detailed:
            'This is the qualitative difference between collapse and ordinary compression. Compressing a rock increases its internal pressure faster than the gravitational load, so it settles into a new equilibrium. In relativistic collapse the pressure itself gravitates — pressure appears in the source of Einstein’s equations alongside energy density — so adding support adds weight. Past a certain compactness, resisting harder makes things worse.',
          technical:
            'The Oppenheimer–Snyder solution follows the collapse of a pressureless uniform sphere exactly: the surface crosses r = 2GM/c² in finite proper time, while a distant observer sees it asymptotically freeze and redshift away. Penrose’s theorem generalises the singular endpoint to arbitrary collapse containing a trapped surface, requiring only the null energy condition and global hyperbolicity rather than any symmetry.',
        },
        evidence: 'established',
        references: [
          referenceId('oppenheimer-snyder-1939'),
          referenceId('penrose-1965-singularities'),
        ],
      },
      {
        id: 'viz-collapse',
        kind: 'visualization',
        visualizationId: visualizationId('gravitational-collapse'),
      },
      {
        id: 'two-views',
        kind: 'callout',
        tone: 'note',
        title: 'Two accounts of the same collapse',
        text: {
          essential:
            'From the surface of the collapsing star, the fall through the horizon takes a finite and rather short time. From far away, it never quite finishes: the light from the surface takes longer and longer to climb out, and is stretched to longer and longer wavelengths, until the star fades into darkness. Both descriptions are correct. They are descriptions in different frames, not competing claims about one clock.',
          detailed:
            'This is why an older literature called them "frozen stars". The distant view is real — a black hole formed a billion years ago is still, in a distant observer’s coordinates, technically an object whose surface is asymptotically approaching its horizon — but the redshift grows exponentially with a timescale of microseconds for a stellar-mass hole, so the object goes black almost instantly for any practical purpose.',
        },
        references: [referenceId('oppenheimer-snyder-1939')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'chandrasekhar-limit',
            label: 'Chandrasekhar limit (white dwarf)',
            value: 1.4,
            unit: 'M☉',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Maximum mass supportable by electron degeneracy pressure. The precise value depends on composition; 1.4 M☉ is the standard figure for a carbon–oxygen white dwarf.',
            references: [referenceId('chandrasekhar-1931')],
          },
          {
            id: 'tov-limit',
            label: 'Tolman–Oppenheimer–Volkoff limit (neutron star)',
            value: 2.3,
            unit: 'M☉',
            uncertainty: { plusMinus: 0.3 },
            context:
              'Maximum neutron-star mass. The uncertainty reflects the unknown equation of state of matter at supranuclear density; the GW170817 remnant provides one of the tightest constraints.',
            references: [
              referenceId('oppenheimer-volkoff-1939'),
              referenceId('abbott-2017-gw170817'),
            ],
          },
        ],
      },
      {
        id: 'link-horizon',
        kind: 'cross-link',
        topicId: topicId('event-horizon'),
        rationale: 'What the collapsing surface crosses, and why nothing marks the crossing.',
      },
    ],
    furtherReading: [
      referenceId('oppenheimer-snyder-1939'),
      referenceId('penrose-1965-singularities'),
      referenceId('chandrasekhar-1931'),
    ],
  },

  {
    id: topicId('event-horizon'),
    slug: 'the-event-horizon',
    sectionId: BLACK_HOLES,
    order: 4,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The event horizon',
    subtitle: 'A one-way surface with nothing on it — at r = 2GM/c².',
    summary: {
      essential:
        'The event horizon is the boundary of the region from which nothing escapes. For a non-rotating black hole it lies at the Schwarzschild radius, r = 2GM/c² — 3 km for the Sun’s mass, 9 mm for the Earth’s. It is a place where paths lead one way, not a physical surface.',
      detailed:
        'The horizon has three properties that resist intuition. Nothing local marks it: an infalling observer crossing a large black hole’s horizon notices nothing happening. Its radius is proportional to mass, so bigger black holes are less dense on average. And from outside it appears you never quite reach it — infalling light is redshifted without limit as the source approaches.',
      technical:
        'r_s = 2GM/c² ≈ 2.95 km × (M/M☉). At the horizon the escape-velocity heuristic v_esc = √(2GM/r) formally returns c, which is why the Newtonian dark-star argument gets the radius right; it gets the physics wrong, because the correct statement is that all future-directed timelike and null curves have decreasing r.',
    },
    glossaryTerms: [
      glossaryTermId('event-horizon'),
      glossaryTermId('schwarzschild-radius'),
      glossaryTermId('escape-velocity'),
    ],
    related: [
      topicId('gravitational-collapse'),
      topicId('escape-velocity'),
      topicId('spacetime-around-a-black-hole'),
    ],
    blocks: [
      {
        id: 'radius',
        kind: 'prose',
        text: {
          essential:
            'The formula is simple: r = 2GM/c². Mass on top, the speed of light squared underneath. Put in the Sun’s mass and you get about 3 kilometres. Put in the Earth’s and you get about 9 millimetres. Put in your own and you get 10⁻²⁵ metres, far smaller than a proton.',
          detailed:
            'Notice that the radius is proportional to mass — not to its cube root, as it would be for an object of fixed density. Doubling the mass doubles the radius, so the volume enclosed grows as the cube of the mass while the mass grows linearly. Average density therefore falls as black holes get more massive. The supermassive black hole in M87 has a mean density inside its horizon lower than the air in this room.',
        },
      },
      {
        id: 'viz-schwarzschild',
        kind: 'visualization',
        visualizationId: visualizationId('schwarzschild-radius'),
        caption:
          'The Schwarzschild radius computed for real objects from their measured masses. For everything except the last three, the object is enormously larger than the radius at which it would become a black hole — which is exactly why it is not one.',
      },
      {
        id: 'escape-story',
        kind: 'prose',
        text: {
          essential:
            'Most people first meet the event horizon through escape velocity: the speed you need to leave a body for good is v = √(2GM/r), and if you compress the mass enough, that speed reaches the speed of light. Set v = c and rearrange, and you get exactly r = 2GM/c². The intuition gets the right number, and it is worth having.',
          detailed:
            'It is also historically real. John Michell in 1783 and Laplace in 1796 both reasoned that a sufficiently large, dense star would have an escape velocity above the speed of light, and would therefore be invisible — "dark stars". They got the radius right by a century and a half, using nothing but Newtonian gravity and the assumption that light behaves like a projectile.',
        },
      },
      {
        id: 'escape-fails',
        kind: 'callout',
        tone: 'caution',
        title: 'Where the escape-velocity picture stops working',
        text: {
          essential:
            'The Newtonian story says: light is thrown upward, slows, and falls back. That is not what happens. Light never slows — it always travels at c. And the escape-velocity picture implies you could still leave slowly under continuous thrust, as a rocket leaves Earth without ever reaching 11.2 km/s. Inside a horizon you cannot, no matter how much fuel you carry.',
          detailed:
            'The correct statement is geometric. Inside the horizon, the direction of decreasing radius becomes a direction in time: moving to smaller r is as unavoidable as moving to a later moment. There is no manoeuvre that avoids it, because there is no direction that points out — every path in your future light cone leads inward. Engines let you choose how quickly you reach the centre, not whether. The dark-star calculation lands on the right radius by coincidence of algebra, not because the underlying picture is right.',
        },
        references: [referenceId('misner-thorne-wheeler-1973'), referenceId('hartle-2003-gravity')],
      },
      {
        id: 'viz-escape-cone',
        kind: 'visualization',
        visualizationId: visualizationId('escape-cone'),
      },
      {
        id: 'claim-nothing-local',
        kind: 'claim',
        statement: {
          essential:
            'Nothing marks the horizon locally. An observer falling into a sufficiently large black hole crosses it without noticing — no wall, no jolt, no signal that anything has changed.',
          detailed:
            'This follows from the equivalence principle: a freely falling observer is locally in flat spacetime, and the horizon has no locally measurable curvature feature. What has changed is entirely about the future — which paths remain available — and the future is not something you can feel at a point. For a supermassive black hole the tidal forces at the horizon are gentle enough to survive, so the crossing is genuinely unremarkable. The one-way property is a global fact about the spacetime, and no local experiment reveals it.',
          technical:
            'All curvature invariants are finite at r = 2GM/c²; the Kretschmann scalar there is 48G²M²/c⁴r⁶ = 3c⁸/(4G²M⁴), which decreases with mass. The apparent divergence in Schwarzschild coordinates is removed in Eddington–Finkelstein coordinates. Whether quantum gravity preserves this smoothness is an open question — firewall proposals suggest it may not.',
        },
        evidence: 'established',
        references: [referenceId('hartle-2003-gravity'), referenceId('misner-thorne-wheeler-1973')],
      },
      {
        id: 'from-outside',
        kind: 'prose',
        text: {
          essential:
            'From the outside the crossing looks completely different. Light from the infalling object takes longer and longer to climb out, and is stretched to longer and longer wavelengths. The image slows, reddens, dims, and fades — it never visibly crosses. Nothing is contradicted: the two observers simply do not share a notion of "when".',
          detailed:
            'The dimming is fast. For a stellar-mass black hole the characteristic fade time is of order 10⁻⁴ seconds, so the object goes dark essentially at once. The commonly repeated line that "you would see them frozen at the horizon forever" is true as a statement about coordinates and false as a statement about what a telescope would record: after a few hundred microseconds there are no photons left to see.',
        },
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'rs-sun',
            label: 'Schwarzschild radius of the Sun',
            value: 2.95,
            unit: 'km',
            context:
              'Computed from the Sun’s measured mass. The Sun’s actual radius is about 696,000 km, so it is roughly 236,000 times larger than this.',
            references: [
              referenceId('schwarzschild-1916'),
              referenceId('iau-2015-nominal-constants'),
            ],
          },
          {
            id: 'rs-earth',
            label: 'Schwarzschild radius of the Earth',
            value: 8.87,
            unit: 'mm',
            context:
              'Computed from Earth’s mass. Roughly the size of a marble; Earth’s actual radius is 6,371 km.',
            references: [referenceId('nasa-planetary-factsheet')],
          },
          {
            id: 'rs-sgr-a',
            label: 'Schwarzschild radius of Sgr A*',
            value: 1.27e7,
            unit: 'km',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'From a mass of about 4.3 million solar masses. Comparable to about a fifth of the radius of Mercury’s orbit.',
            references: [referenceId('eht-2022-sgr-a'), referenceId('ghez-2008-galactic-centre')],
          },
        ],
      },
      {
        id: 'link-spacetime',
        kind: 'cross-link',
        topicId: topicId('spacetime-around-a-black-hole'),
        rationale:
          'Why "the direction out stops existing" is a statement about geometry, not engineering.',
      },
    ],
    furtherReading: [
      referenceId('schwarzschild-1916'),
      referenceId('hartle-2003-gravity'),
      referenceId('misner-thorne-wheeler-1973'),
    ],
  },

  {
    id: topicId('spacetime-around-a-black-hole'),
    slug: 'spacetime-around-a-black-hole',
    sectionId: BLACK_HOLES,
    order: 5,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Spacetime around a black hole',
    subtitle: 'Time slows, space stretches, and the light cones tip until "out" is gone.',
    summary: {
      essential:
        'Approach a black hole and the effects already familiar from general relativity become extreme. Clocks run slower, distances stretch radially, and light is redshifted. At the horizon these are not small corrections — the redshift is infinite and the tipping of the light cones is complete.',
      detailed:
        'The most useful picture is the light cone. Far away, a light cone is symmetric: you can go either way in space. Closer in, the cones tip toward the hole, so outward motion needs a larger fraction of the speed of light. At the horizon the outward edge of the cone is vertical — outward light stands still. Inside, the whole cone points inward, and every future is a smaller radius.',
    },
    glossaryTerms: [
      glossaryTermId('spacetime'),
      glossaryTermId('proper-time'),
      glossaryTermId('light-cone'),
    ],
    related: [
      topicId('curved-spacetime'),
      topicId('gravitational-time-dilation'),
      topicId('event-horizon'),
    ],
    blocks: [
      {
        id: 'not-a-funnel',
        kind: 'callout',
        tone: 'misconception',
        title: 'It is not a funnel in space',
        text: {
          essential:
            'The picture of a black hole as a hole or a funnel comes from embedding diagrams, and those diagrams are showing curvature of a two-dimensional slice, drawn as a bend in a fictitious third dimension. There is no down. A black hole looks the same from every direction, and the geometry near it is curved in all directions at once, including the time direction.',
          detailed:
            'The funnel picture also encourages a false expectation about motion: things do not roll in. What actually distinguishes the region near a black hole from the region near a star of the same mass is not a shape but a set of facts about which paths exist — and the fastest way to see them is to draw light cones rather than surfaces.',
        },
      },
      {
        id: 'claim-time',
        kind: 'claim',
        statement: {
          essential:
            'Time runs measurably slower near a black hole. A clock hovering near the horizon ticks arbitrarily slowly relative to a distant clock, and light leaving it is redshifted by the same factor.',
          detailed:
            'This is gravitational time dilation, the same effect that offsets GPS satellite clocks by 38 microseconds a day, carried to its limit. The factor is √(1 − r_s/r): at ten Schwarzschild radii a hovering clock runs at about 95% of the distant rate, at 1.01 r_s at about 10%, and as r approaches r_s it goes to zero. The redshift of light escaping from that clock is the same factor, which is why the last light from an infalling object is stretched away to nothing.',
          technical:
            'dτ/dt = √(1 − 2GM/rc²) for a static observer in Schwarzschild geometry. Static observers cannot exist at or inside r_s, since holding position would require exceeding c. This has been tested in the strong-ish field regime: the GRAVITY collaboration measured the gravitational redshift of the star S2 at its closest approach to Sgr A*, at about 1,400 Schwarzschild radii.',
        },
        evidence: 'established',
        references: [referenceId('gravity-2018-s2-redshift'), referenceId('hartle-2003-gravity')],
      },
      {
        id: 'viz-infall',
        kind: 'visualization',
        visualizationId: visualizationId('infalling-clock'),
      },
      {
        id: 'claim-cones',
        kind: 'claim',
        statement: {
          essential:
            'The reason nothing escapes is not that gravity is too strong to fight. It is that inside the horizon there is no outward direction left in the future: all available paths lead inward.',
          detailed:
            'Every object moves forward through time along a path inside its light cone — that is what it means for nothing to travel faster than light. Near a black hole the cones tilt toward it. At the horizon, the outward edge of the cone is exactly vertical: outgoing light hovers, making no progress. Inside, the entire cone points inward, so reaching a smaller radius is as inescapable as reaching a later time. This is why "just accelerate harder" does not work, and why the horizon is a property of the geometry rather than a force.',
          technical:
            'In Schwarzschild coordinates the radial null condition dr/dt = ±(1 − r_s/r)c shows both roots becoming inward-directed for r < r_s, where the Killing vector ∂_t becomes spacelike and r becomes a timelike coordinate. The singularity at r = 0 is therefore a moment in the future of every interior worldline rather than a place in space.',
        },
        evidence: 'established',
        references: [referenceId('misner-thorne-wheeler-1973'), referenceId('hartle-2003-gravity')],
      },
      {
        id: 'stretching',
        kind: 'prose',
        text: {
          essential:
            'Space is stretched too, radially. The distance you would measure with a ruler between two nearby shells is larger than the difference in their circumferences would suggest — a black hole contains more room near it than flat geometry allows for. This is the spatial half of the curvature, and it is why "radius" has to be defined carefully.',
          detailed:
            'The r coordinate in the Schwarzschild solution is fixed by the circumference: a sphere labelled r has circumference 2πr. It is not the distance to the centre, and that distance is not even defined, since the interior is not a static region you could lay a ruler across. Every statement about "the radius of a black hole" is a statement about its circumference divided by 2π.',
        },
      },
      {
        id: 'link-tidal',
        kind: 'cross-link',
        topicId: topicId('tidal-forces-black-holes'),
        rationale:
          'The one thing you can feel locally near a black hole is the difference in curvature across your body.',
      },
    ],
    furtherReading: [
      referenceId('hartle-2003-gravity'),
      referenceId('misner-thorne-wheeler-1973'),
      referenceId('gravity-2018-s2-redshift'),
    ],
  },

  {
    id: topicId('singularity'),
    slug: 'the-singularity',
    sectionId: BLACK_HOLES,
    order: 6,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The singularity, and the limits of general relativity',
    subtitle: 'The point where the theory reports its own failure.',
    summary: {
      essential:
        'General relativity predicts that collapse ends in a singularity — a place where curvature becomes infinite and the equations stop giving meaningful answers. This is not a description of an object. It is the theory saying it no longer applies.',
      detailed:
        'Infinities in physics are almost always signals that a model has been pushed outside its domain. Penrose proved in 1965 that singularity formation is generic in collapse, so it cannot be dismissed as an artefact of assumed symmetry. What actually happens in that region requires a quantum theory of gravity, which does not exist in tested form. The honest answer is that we do not know.',
    },
    glossaryTerms: [glossaryTermId('singularity'), glossaryTermId('event-horizon')],
    related: [
      topicId('gravitational-collapse'),
      topicId('black-hole-open-questions'),
      topicId('newtonian-limits'),
    ],
    blocks: [
      {
        id: 'what-it-is',
        kind: 'prose',
        text: {
          essential:
            'Follow the equations of general relativity inward past the horizon and the curvature grows without bound. At r = 0 the mathematics returns infinity — for the tidal forces, for the density, for the curvature itself. Infinity is not a value. It is what an equation says when it has been asked a question outside its competence.',
          detailed:
            'This has happened before in physics. Classical electromagnetism gives an infinite self-energy for a point electron; classical mechanics gives infinite intensity for a black body at short wavelengths. In each case the infinity marked the entrance to a new regime — quantum mechanics, in both those instances. There is every reason to read the black-hole singularity the same way, and no established theory yet to read it with.',
        },
      },
      {
        id: 'not-described',
        kind: 'callout',
        tone: 'caution',
        title: 'What this page will not tell you',
        text: {
          essential:
            'You will read that a singularity is a point of infinite density where all the mass is concentrated. That sentence treats an equation’s breakdown as a description of an object, and it is not one. Nobody knows what is there. General relativity does not describe it, quantum mechanics is not formulated for it, and no observation can reach it.',
          detailed:
            'Two further points are usually skipped. In a rotating black hole — which is every real one — the solution’s singularity is a ring rather than a point, and the interior structure of the Kerr solution is thought to be unstable to realistic perturbations anyway, so even the classical answer is not the naive one. And the singularity of a non-rotating black hole is not a place in space at all: it is a moment in the future of everything inside, which is why it cannot be avoided by steering.',
        },
        references: [referenceId('penrose-1965-singularities'), referenceId('kerr-1963')],
      },
      {
        id: 'claim-penrose',
        kind: 'claim',
        statement: {
          essential:
            'Penrose proved in 1965 that a singularity is not an artefact of assuming perfect symmetry. Once collapse passes a certain point, general relativity predicts a singularity for any realistic starting configuration.',
          detailed:
            'The earlier collapse solutions assumed exact spherical symmetry, and a reasonable objection was that a real star is lumpy and rotating — perhaps the matter would miss the centre and bounce. Penrose showed otherwise, using global geometric arguments rather than solving the equations: once a "trapped surface" forms, a region from which even outward-directed light converges, geodesic incompleteness follows under very general conditions. He shared the 2020 Nobel Prize for it.',
          technical:
            'The theorem requires the null energy condition, global hyperbolicity with a non-compact Cauchy surface, and the existence of a closed trapped surface; the conclusion is null geodesic incompleteness, which is the technical meaning of "a singularity". Notably it does not establish that curvature diverges, only that geodesics end — a distinction that matters for what a quantum theory might repair.',
        },
        evidence: 'established',
        references: [referenceId('penrose-1965-singularities')],
      },
      {
        id: 'where-quantum',
        kind: 'prose',
        text: {
          essential:
            'The scale at which quantum effects on gravity must matter is set by the Planck length, about 1.6 × 10⁻³⁵ metres. Collapse reaches it. No experimentally tested theory covers what happens there, and no accessible experiment probes that scale — the energy required is about 10¹⁵ times what the Large Hadron Collider reaches.',
          detailed:
            'Candidate frameworks exist. String theory and loop quantum gravity both make statements about the interior; some suggest the singularity is replaced by a bounce, others by a highly quantum "fuzzball" with no interior at all. None has been tested, and they disagree with each other. Presenting any of them as the answer would misrepresent the state of the subject.',
        },
      },
      {
        id: 'open-interior',
        kind: 'open-question',
        question: 'What replaces the singularity?',
        whyItMatters: {
          essential:
            'A theory that predicts infinities predicts nothing. Whatever resolves the singularity is the same thing that would tell us what happens to information that falls in, what the earliest moments of the Universe were like, and how gravity and quantum mechanics fit together — the largest open problem in fundamental physics.',
          detailed:
            'The black-hole interior and the Big Bang are the two places where general relativity predicts its own breakdown, and it is widely expected that one theory addresses both. That is why the interior of an object nobody can observe is not an idle question: it is the most accessible statement of the problem.',
        },
        whatWouldSettleIt: {
          essential:
            'Direct observation is not available and probably never will be. The realistic routes are indirect: precise measurements of black-hole ringdown after mergers, which test whether the exterior matches Kerr exactly; observations of any deviation from the predicted shadow shape; and theoretical progress that produces a testable prediction elsewhere, such as in early-Universe cosmology.',
        },
        references: [
          referenceId('penrose-1965-singularities'),
          referenceId('hawking-1976-information'),
          referenceId('abbott-2023-gwtc3'),
        ],
      },
      {
        id: 'link-open',
        kind: 'cross-link',
        topicId: topicId('black-hole-open-questions'),
        rationale: 'The full list of what is not known, kept separate from what is.',
      },
    ],
    furtherReading: [
      referenceId('penrose-1965-singularities'),
      referenceId('misner-thorne-wheeler-1973'),
      referenceId('hawking-1976-information'),
    ],
  },
];
