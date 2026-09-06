/**
 * Universe & Cosmology — the dark sector and the edges of knowledge.
 *
 * Topics 12–17: dark matter, dark energy, accelerating expansion, the
 * observable Universe, the limits of what can be known about the earliest
 * moments, and the open questions.
 *
 * This is where a cosmology section most often overclaims. Two rules govern
 * every claim here: dark matter is *inferred*, never detected as a particle;
 * acceleration is *observed*, while its cause is not.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const UNIVERSE = sectionId('universe');
const REVIEWED = '2026-09-06';

export const DARK_UNIVERSE_TOPICS: readonly Topic[] = [
  {
    id: topicId('dark-matter'),
    slug: 'dark-matter',
    sectionId: UNIVERSE,
    order: 12,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Dark matter',
    subtitle: 'Strong evidence that something is there. No idea what it is.',
    summary: {
      essential:
        'Galaxies rotate too fast for the matter we can see. Something invisible is holding them together — and after ninety years, nobody has identified it.',
      detailed:
        'Dark matter is an inference from several independent gravitational observations, not a detection. The distinction is the whole point of this topic.',
    },
    glossaryTerms: [glossaryTermId('dark-matter')],
    related: [topicId('large-scale-structure'), topicId('cmb'), topicId('open-questions-universe')],
    blocks: [
      {
        id: 'prose',
        kind: 'prose',
        text: {
          essential:
            'In a solar system, the outer planets move more slowly than the inner ones, because gravity weakens with distance. Galaxies should behave the same way. They do not: stars far out in the disc orbit about as fast as those near the centre.',
          detailed:
            'Vera Rubin and Kent Ford measured this in Andromeda and then in dozens of other spirals in the 1970s. The rotation curves stay flat far beyond the visible edge of the galaxy. Either there is a great deal of unseen mass, or gravity does not work as expected on those scales.',
        },
      },
      {
        id: 'viz-rotation',
        kind: 'visualization',
        visualizationId: visualizationId('rotation-curve'),
      },
      {
        id: 'claim-lines',
        kind: 'claim',
        statement: {
          essential:
            'The evidence comes from several completely independent directions, and they agree on how much unseen mass there is.',
          detailed:
            'Galaxy rotation curves; the velocities of galaxies inside clusters, first noticed by Zwicky in 1933; gravitational lensing, which weighs mass directly by how it bends light; the relative heights of the peaks in the microwave background; and the fact that cosmological simulations cannot grow the observed cosmic web without it. Each method probes a different scale and a different epoch, and all give a consistent answer.',
        },
        evidence: 'established',
        references: [
          referenceId('rubin-ford-1970'),
          referenceId('zwicky-1933'),
          referenceId('planck-2018-vi'),
          referenceId('bertone-hooper-2018-history'),
        ],
      },
      {
        id: 'claim-bullet',
        kind: 'claim',
        statement: {
          essential:
            'In one collided pair of galaxy clusters, most of the mass is measurably in a different place from the visible gas. That is hard to explain by changing the law of gravity.',
          detailed:
            'In the Bullet Cluster, two clusters passed through each other. The hot gas — which is most of the ordinary matter — was slowed by friction and left behind in the middle, while gravitational lensing shows the bulk of the mass carried on with the galaxies. Modified-gravity explanations, which tie gravity to where the visible matter is, struggle with this separation.',
        },
        evidence: 'established',
        references: [referenceId('clowe-2006-bullet-cluster')],
      },
      {
        id: 'not-detected',
        kind: 'claim',
        statement: {
          essential:
            'No dark-matter particle has ever been detected. Decades of increasingly sensitive experiments have returned nothing but tighter limits.',
          detailed:
            'Direct-detection experiments such as LUX-ZEPLIN, XENONnT and PandaX watch for a dark-matter particle recoiling off an atomic nucleus in shielded underground detectors. Collider searches look for missing energy. Indirect searches look for annihilation products. All have so far reported null results, progressively excluding the parameter space that the most popular candidate — the WIMP — was expected to occupy.',
        },
        evidence: 'established',
        references: [referenceId('lux-zeplin-2023'), referenceId('bertone-hooper-2018-history')],
      },
      {
        id: 'careful',
        kind: 'callout',
        tone: 'caution',
        title: 'What “dark matter exists” does and does not mean',
        text: {
          essential:
            'It means: there is a well-measured gravitational effect that visible matter cannot account for, seen by several independent methods that agree. It does not mean: we have found the particle. Anything that describes dark matter as detected, identified, or observed directly is wrong.',
          detailed:
            'The name is a label for a discrepancy, not a description of a substance. The leading interpretation is a new kind of particle that interacts gravitationally and almost nothing else; alternatives modifying gravity remain under discussion, though they struggle with the cluster and CMB evidence.',
        },
        references: [referenceId('bertone-hooper-2018-history')],
      },
      {
        id: 'open',
        kind: 'open-question',
        question: 'What is dark matter made of?',
        whyItMatters: {
          essential:
            'It is roughly five times more abundant than ordinary matter. Identifying it would be one of the largest additions to physics in a century — and its absence, after this much searching, is itself informative.',
        },
        whatWouldSettleIt: {
          essential:
            'A direct detection reproduced by an independent experiment, or production at a collider with a matching signature. Attention has broadened from WIMPs to axions, sterile neutrinos and primordial black holes as the WIMP window has narrowed.',
        },
        references: [referenceId('lux-zeplin-2023'), referenceId('bertone-hooper-2018-history')],
      },
    ],
    furtherReading: [referenceId('bertone-hooper-2018-history')],
  },

  {
    id: topicId('accelerating-expansion'),
    slug: 'accelerating-expansion',
    sectionId: UNIVERSE,
    order: 13,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Accelerating expansion',
    subtitle: 'The expansion should be slowing down. It is speeding up.',
    summary: {
      essential:
        'Gravity should be putting the brakes on cosmic expansion. In 1998 two teams found the opposite: the expansion has been speeding up for the last five to six billion years.',
      detailed:
        'The acceleration is an observation, confirmed by several independent methods. This topic covers the measurement; what causes it is the next topic, and is not known.',
    },
    glossaryTerms: [glossaryTermId('dark-energy'), glossaryTermId('redshift')],
    related: [topicId('dark-energy'), topicId('expansion'), topicId('large-scale-structure')],
    blocks: [
      {
        id: 'prose',
        kind: 'prose',
        text: {
          essential:
            'Two teams set out to measure how fast cosmic expansion was slowing down. Both found that distant exploding stars were fainter — and therefore further away — than a decelerating universe allows.',
          detailed:
            'Type Ia supernovae have a nearly uniform peak brightness once corrected for the shape of their light curve, which makes them standardisable candles. Comparing their apparent brightness with their redshift reconstructs the expansion history directly.',
        },
      },
      {
        id: 'viz',
        kind: 'visualization',
        visualizationId: visualizationId('expansion-history'),
      },
      {
        id: 'claim',
        kind: 'claim',
        statement: {
          essential:
            'The expansion of the Universe is accelerating. This has been confirmed by three independent kinds of measurement, not just supernovae.',
          detailed:
            'The 1998 and 1999 supernova results have since been corroborated by the cosmic microwave background, by baryon acoustic oscillations in galaxy surveys, and by gravitational lensing. The Pantheon+ compilation now includes over 1500 supernovae. That acceleration is happening is not seriously disputed.',
        },
        evidence: 'established',
        references: [
          referenceId('riess-1998'),
          referenceId('perlmutter-1999'),
          referenceId('brout-2022-pantheon-plus'),
          referenceId('eisenstein-2005-bao'),
        ],
      },
      {
        id: 'when',
        kind: 'prose',
        text: {
          essential:
            'It has not always been accelerating. For the first eight billion years or so, matter was dense enough that gravity won and the expansion slowed. Only as matter thinned out did the other component take over.',
          technical:
            'In ΛCDM the transition from deceleration to acceleration occurs at z ≈ 0.6, roughly 6 billion years ago, when the cosmological constant term overtakes the matter term in the second Friedmann equation.',
        },
      },
      {
        id: 'link',
        kind: 'cross-link',
        topicId: topicId('dark-energy'),
        rationale: 'What might be causing it — and why nobody knows.',
      },
    ],
    furtherReading: [referenceId('brout-2022-pantheon-plus')],
  },

  {
    id: topicId('dark-energy'),
    slug: 'dark-energy',
    sectionId: UNIVERSE,
    order: 14,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Dark energy',
    subtitle: 'A name for something we can measure the effect of, and nothing else.',
    summary: {
      essential:
        'About 69% of the energy content of the Universe is something that makes expansion accelerate. “Dark energy” is a placeholder name, not an explanation.',
      detailed:
        'The simplest candidate — a cosmological constant — fits the data well but is in catastrophic conflict with the only theoretical estimate we have of its size.',
    },
    glossaryTerms: [glossaryTermId('dark-energy')],
    related: [
      topicId('accelerating-expansion'),
      topicId('open-questions-universe'),
      topicId('cmb'),
    ],
    blocks: [
      {
        id: 'prose',
        kind: 'prose',
        text: {
          essential:
            'Something is pushing the expansion faster. It behaves as though it has a constant density everywhere, which means that as space grows, there is more of it — so its influence increases while everything else thins out.',
          detailed:
            'That behaviour is the signature of a cosmological constant: a fixed energy density of space itself. It is the simplest thing that fits, and it is what the Λ in ΛCDM stands for. But calling it a cosmological constant is a description of behaviour, not an identification of a substance.',
          technical:
            'Dark energy is characterised by its equation-of-state parameter w = p/ρ. A cosmological constant has w = −1 exactly. Current constraints are consistent with w = −1 to within a few percent.',
        },
      },
      {
        id: 'composition',
        kind: 'visualization',
        visualizationId: visualizationId('cosmic-composition'),
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'omega-lambda',
            label: 'Dark energy fraction',
            value: 68.9,
            unit: '%',
            uncertainty: { plusMinus: 0.6 },
            context: 'Planck 2018 base-ΛCDM (Ω_Λ = 0.6889 ± 0.0056).',
            references: [referenceId('planck-2018-vi')],
          },
          {
            id: 'omega-dm',
            label: 'Dark matter fraction',
            value: 26.2,
            unit: '%',
            uncertainty: { plusMinus: 0.5 },
            context: 'Planck 2018: cold dark matter density Ω_c ≈ 0.262.',
            references: [referenceId('planck-2018-vi')],
          },
          {
            id: 'omega-b',
            label: 'Ordinary matter fraction',
            value: 4.9,
            unit: '%',
            uncertainty: { plusMinus: 0.1 },
            context:
              'Everything made of atoms — stars, gas, planets, people — is about a twentieth of the total.',
            references: [referenceId('planck-2018-vi')],
          },
        ],
      },
      {
        id: 'claim-unknown',
        kind: 'claim',
        statement: {
          essential:
            'Nobody knows what dark energy is. It has never been detected as anything other than an effect on the expansion of the Universe.',
          detailed:
            'If it is the energy of the vacuum, quantum field theory estimates exceed the observed value by many tens of orders of magnitude — a mismatch often called the worst prediction in physics. Alternatives include a slowly evolving scalar field (“quintessence”) and modifications to general relativity on cosmological scales. None has independent support.',
        },
        evidence: 'active-research',
        references: [referenceId('weinberg-1989-cc-problem'), referenceId('planck-2018-vi')],
      },
      {
        id: 'evolving',
        kind: 'claim',
        statement: {
          essential:
            'Recent survey results hint that dark energy might not be constant after all — but the hint is not yet strong enough to be called a discovery.',
          detailed:
            'DESI’s baryon acoustic oscillation measurements, combined with supernovae and CMB data, mildly prefer an equation of state that evolves with time over a strict cosmological constant. The significance depends on which datasets are combined, and the collaboration itself describes the result as suggestive rather than conclusive.',
        },
        evidence: 'active-research',
        references: [referenceId('desi-2024-bao')],
      },
      {
        id: 'open',
        kind: 'open-question',
        question: 'Is dark energy a constant, or does it change?',
        whyItMatters: {
          essential:
            'It determines how the Universe ends. A true constant means expansion continues forever, galaxies drift out of view, and the sky slowly empties. An evolving dark energy allows very different futures.',
        },
        whatWouldSettleIt: {
          essential:
            'Measuring the expansion history precisely enough to see whether w deviates from −1. DESI, Euclid and the Vera Rubin Observatory are designed to do exactly this over the next several years.',
        },
        references: [referenceId('desi-2024-bao'), referenceId('brout-2022-pantheon-plus')],
      },
    ],
    furtherReading: [referenceId('weinberg-1989-cc-problem'), referenceId('desi-2024-bao')],
  },

  {
    id: topicId('observable-universe'),
    slug: 'observable-universe',
    sectionId: UNIVERSE,
    order: 15,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The observable Universe',
    subtitle: 'What we can see is not all there is — and the difference is not a technicality.',
    summary: {
      essential:
        'We can only see the part of the Universe whose light has had time to reach us. That sphere is about 93 billion light-years across. The Universe itself may be far larger, or infinite.',
      detailed:
        'Confusing the observable Universe with the Universe is one of the most common errors in popular cosmology, and it makes several other ideas — the “size” of the Universe, its “edge”, its “centre” — come out wrong.',
    },
    glossaryTerms: [glossaryTermId('light-year'), glossaryTermId('redshift')],
    related: [topicId('expansion'), topicId('big-bang-model'), topicId('earliest-universe')],
    blocks: [
      {
        id: 'prose',
        kind: 'prose',
        text: {
          essential:
            'Light travels fast but not instantly. Since the Universe is 13.8 billion years old, we can only receive light from objects close enough for that light to have arrived. That defines a sphere around us — the observable Universe — with us at the centre simply because we are doing the observing.',
          detailed:
            'Every observer, anywhere, has their own observable sphere centred on themselves. This is not evidence that we occupy a special place; it is a statement about how far light has travelled, and it is true of every point in the Universe equally.',
        },
      },
      {
        id: 'viz',
        kind: 'visualization',
        visualizationId: visualizationId('observable-universe'),
      },
      {
        id: 'claim-radius',
        kind: 'claim',
        statement: {
          essential:
            'The observable Universe is about 46 billion light-years in radius — much more than 13.8, because space expanded while the light was in transit.',
          detailed:
            'The furthest matter we can see emitted its light 13.8 billion years ago, but that matter is now roughly 46 billion light-years away, because the space between us grew during the journey. The radius quoted is a comoving distance: where those objects are now, not how far the light travelled.',
          technical:
            'The comoving distance to the particle horizon in Planck ΛCDM is about 14.3 Gpc, or 46.5 billion light-years; the sphere is therefore roughly 93 billion light-years across.',
        },
        evidence: 'inference',
        references: [referenceId('gott-2005-map-of-the-universe'), referenceId('planck-2018-vi')],
      },
      {
        id: 'claim-larger',
        kind: 'claim',
        statement: {
          essential:
            'The whole Universe is at least much larger than the part we can see, and may be infinite. Measurements constrain it from below; nothing constrains it from above.',
          detailed:
            'Space is measured to be flat to within about half a percent. A flat universe is spatially infinite in the simplest models, though a flat but finite topology is possible. What can be said with confidence is that no edge, boundary or centre has been observed, and the observable region shows no sign of being special.',
        },
        evidence: 'inference',
        references: [referenceId('planck-2018-vi')],
      },
      {
        id: 'misconception',
        kind: 'callout',
        tone: 'misconception',
        title: '“How big is the Universe?”',
        text: {
          essential:
            'The honest answer is: unknown. The observable Universe has a well-defined size. The Universe as a whole does not have a measured one, and it may not have a finite one at all. A source that gives a single number for “the size of the Universe” without saying “observable” is telling you something else.',
        },
        references: [referenceId('planck-2018-vi')],
      },
      {
        id: 'shrinking',
        kind: 'prose',
        text: {
          essential:
            'Because expansion is accelerating, our view is slowly closing. Galaxies beyond a certain distance are receding so fast that light leaving them now will never reach us. In the very long run, an observer here would see almost nothing outside our own galaxy group.',
          detailed:
            'This has an uncomfortable implication: the evidence for cosmic expansion is a temporary feature of the epoch we happen to live in. Observers in the far future, with the same instruments and intelligence, would have no way to discover that the Universe expands.',
        },
      },
    ],
    furtherReading: [referenceId('gott-2005-map-of-the-universe')],
  },

  {
    id: topicId('earliest-universe'),
    slug: 'earliest-universe',
    sectionId: UNIVERSE,
    order: 16,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What we can know about the earliest Universe',
    subtitle: 'Where confident physics ends, and what replaces it.',
    summary: {
      essential:
        'The Universe’s history is well tested back to about one second. Before that, confidence falls off sharply — and before 10⁻⁴³ seconds, no tested physics applies at all.',
      detailed:
        'This topic maps the gradient from established to unknown, so a reader can tell which parts of the early-Universe story are load-bearing and which are extrapolation.',
    },
    related: [topicId('inflation'), topicId('recombination'), topicId('open-questions-universe')],
    blocks: [
      {
        id: 'prose',
        kind: 'prose',
        text: {
          essential:
            'Popular accounts often run smoothly from 10⁻⁴³ seconds to the present, in the same confident tone throughout. The actual confidence varies enormously across that range, and it is worth knowing where the changes happen.',
        },
      },
      {
        id: 'claim-second',
        kind: 'claim',
        statement: {
          essential:
            'From about one second onwards, the model is tested by evidence: the light-element abundances confirm conditions at a few minutes, and the microwave background confirms conditions at 380,000 years.',
          detailed:
            'Big Bang nucleosynthesis is sensitive to the expansion rate, the baryon density and the number of relativistic species at t ≈ 1–200 s, and its predictions match observation. This is the earliest epoch for which we have direct empirical evidence.',
        },
        evidence: 'established',
        references: [referenceId('cyburt-2016-bbn'), referenceId('planck-2018-vi')],
      },
      {
        id: 'claim-collider',
        kind: 'claim',
        statement: {
          essential:
            'Between about 10⁻¹² seconds and one second, we rely on particle physics that has been tested in colliders — well founded, but no longer directly observed in the sky.',
          detailed:
            'The LHC reaches energies corresponding to roughly 10⁻¹² seconds after the beginning. Below that timescale, the description rests on physics verified at accessible energies and extrapolated upward.',
        },
        evidence: 'model',
        references: [referenceId('busza-2018-heavy-ion'), referenceId('pdg-2024')],
      },
      {
        id: 'claim-earlier',
        kind: 'claim',
        statement: {
          essential:
            'Earlier than that, everything is extrapolation. Grand unification, inflation and the physics of the first instants are proposals guided by theory, with limited or no direct evidence.',
          detailed:
            'Inflation, if it happened, occurred around 10⁻³⁶ to 10⁻³² seconds — twenty orders of magnitude below any energy a collider can reach. The relevant physics is not merely untested; it is currently untestable except through indirect cosmological signatures.',
        },
        evidence: 'active-research',
        references: [referenceId('guth-1981-inflation'), referenceId('bicep-keck-2021')],
      },
      {
        id: 'claim-planck',
        kind: 'claim',
        statement: {
          essential:
            'Before about 10⁻⁴³ seconds, no tested theory applies. General relativity and quantum mechanics both break down and there is no accepted theory that replaces them.',
          detailed:
            'At Planck-scale curvature, quantum effects on spacetime itself cannot be neglected, and general relativity is not expected to hold. The classical singularity at t = 0 is therefore a signal that the theory has failed, not a description of an event. Candidate frameworks — string theory, loop quantum gravity — make no confirmed predictions here.',
        },
        evidence: 'open-question',
        references: [referenceId('einstein-1916-gr'), referenceId('planck-2018-vi')],
      },
      {
        id: 'caution',
        kind: 'callout',
        tone: 'caution',
        title: 'What “we do not know” is not',
        text: {
          essential:
            'Uncertainty about the first instant does not undermine what follows. The evidence for expansion, for the hot early phase, and for the composition of the Universe is strong and independent of what happened at t = 0. A theory can be solidly established over the range where it has been tested and silent outside it — that is normal science, not weakness.',
        },
      },
    ],
    furtherReading: [referenceId('planck-2018-vi'), referenceId('pdg-2024')],
  },

  {
    id: topicId('open-questions-universe'),
    slug: 'open-questions',
    sectionId: UNIVERSE,
    order: 17,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Open questions and active research',
    subtitle: 'The parts of cosmology that are genuinely unfinished.',
    summary: {
      essential:
        'Cosmology measures the Universe to remarkable precision while remaining ignorant of what most of it is made of. These are the live problems.',
      detailed:
        'Each question below is stated with what is established, what is contested, and what evidence would settle it — because a field’s open problems are as informative as its results.',
    },
    glossaryTerms: [glossaryTermId('hubble-constant'), glossaryTermId('dark-energy')],
    related: [topicId('dark-matter'), topicId('dark-energy'), topicId('earliest-universe')],
    blocks: [
      {
        id: 'intro',
        kind: 'prose',
        text: {
          essential:
            'The standard model of cosmology fits an extraordinary range of data with six numbers. It also says that about 95% of the contents of the Universe is something we cannot identify. Both statements are true at once.',
        },
      },
      {
        id: 'q-hubble',
        kind: 'open-question',
        question: 'Why do measurements of the expansion rate disagree?',
        whyItMatters: {
          essential:
            'The rate inferred from the early Universe and the rate measured locally differ by about 5σ. If both are right, the standard model is incomplete.',
        },
        whatWouldSettleIt: {
          essential:
            'Independent distance measurements that share neither method’s assumptions — gravitational-wave standard sirens, time-delay lensing, and red-giant-branch calibrations are all being pushed to the necessary precision.',
        },
        references: [
          referenceId('planck-2018-vi'),
          referenceId('riess-2022-sh0es'),
          referenceId('freedman-2021-h0'),
        ],
      },
      {
        id: 'q-dm',
        kind: 'open-question',
        question: 'What is dark matter?',
        whyItMatters: {
          essential:
            'Five times more abundant than ordinary matter, required by half a dozen independent observations, and completely unidentified after ninety years of evidence and forty of dedicated searching.',
        },
        whatWouldSettleIt: {
          essential:
            'A reproducible direct detection, or collider production with a matching signature. Continued null results are themselves meaningful: they have already closed most of the WIMP parameter space and redirected the field towards axions and lighter candidates.',
        },
        references: [referenceId('lux-zeplin-2023'), referenceId('bertone-hooper-2018-history')],
      },
      {
        id: 'q-de',
        kind: 'open-question',
        question: 'What is dark energy, and is it constant?',
        whyItMatters: {
          essential:
            'It is the largest component of the Universe and it determines how everything ends. The simplest explanation is off by tens of orders of magnitude.',
        },
        whatWouldSettleIt: {
          essential:
            'Precision measurement of the expansion history. DESI, Euclid and the Vera Rubin Observatory are built for it, and DESI has already produced a suggestive — not conclusive — hint of evolution.',
        },
        references: [referenceId('desi-2024-bao'), referenceId('weinberg-1989-cc-problem')],
      },
      {
        id: 'q-inflation',
        kind: 'open-question',
        question: 'Did inflation happen, and what drove it?',
        whyItMatters: {
          essential:
            'Inflation underpins the standard account of where cosmic structure came from. Its signature prediction has not been detected, and no known field could have caused it.',
        },
        whatWouldSettleIt: {
          essential:
            'Detection of primordial gravitational waves as B-mode polarisation in the microwave background. The current limit is r < 0.036; next-generation experiments aim roughly an order of magnitude deeper.',
        },
        references: [referenceId('bicep-keck-2021'), referenceId('ijjas-steinhardt-loeb-2013')],
      },
      {
        id: 'q-matter',
        kind: 'open-question',
        question: 'Why is there more matter than antimatter?',
        whyItMatters: {
          essential:
            'Without the imbalance, everything would have annihilated into radiation. The Standard Model produces an asymmetry many orders of magnitude too small.',
        },
        whatWouldSettleIt: {
          essential:
            'New sources of CP violation — measurable in neutrino oscillations, in a neutron electric dipole moment, or at colliders — would show where the asymmetry could have come from.',
        },
        references: [referenceId('pdg-2024')],
      },
      {
        id: 'speculation',
        kind: 'claim',
        statement: {
          essential:
            'Some cosmologists explore whether our Universe is one of many. This is not established science, and at present no observation distinguishes it from a single universe.',
          detailed:
            'Eternal inflation and the string landscape both suggest a multiverse as a by-product. The idea is taken seriously as a consequence of other models, but it makes no confirmed testable prediction and is included here only to show where the boundary of testable cosmology currently lies.',
        },
        evidence: 'speculation',
        speculationNote:
          'No observation currently distinguishes a multiverse from a single universe. Proposed signatures, such as imprints of bubble collisions in the microwave background, have been searched for and not found.',
        references: [referenceId('planck-2018-x-inflation')],
      },
    ],
    furtherReading: [referenceId('planck-2018-vi'), referenceId('bertone-hooper-2018-history')],
  },
];
