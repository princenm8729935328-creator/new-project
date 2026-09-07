/**
 * Einstein & Relativity — where the theory leads.
 *
 * Topics 14–17: the relativistic foundations a later Black Holes section will
 * need, gravitational waves, the experimental record, and a closing account of
 * what general relativity explains that Newtonian gravity cannot — ending, as
 * every section here does, on what is still unknown.
 *
 * The black-hole page is deliberately a foundation and not a section. It
 * establishes the Schwarzschild radius, the horizon as a one-way surface, and
 * the singularity as a failure of the theory rather than a described object —
 * and stops. Accretion, Hawking radiation, formation, spin and the information
 * problem belong to Phase 5, and this page says so.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const RELATIVITY = sectionId('relativity');
const REVIEWED = '2026-09-07';

export const RELATIVITY_FRONTIER_TOPICS: readonly Topic[] = [
  {
    id: topicId('black-hole-foundations'),
    slug: 'black-hole-foundations',
    sectionId: RELATIVITY,
    order: 14,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Black holes: the relativistic foundations',
    subtitle: 'What the equations say happens when curvature stops being gentle.',
    summary: {
      essential:
        'Compress enough mass into a small enough region and spacetime curves so strongly that no path leads back out. That boundary is the event horizon, and it is a consequence of the field equations rather than an extra assumption.',
      detailed:
        'This page establishes only the foundations: where the horizon radius comes from, why it is a surface rather than an object, and why the "singularity" at the centre is a statement about the theory breaking down. Everything else about black holes belongs to a later section.',
      technical:
        'The Schwarzschild solution is the unique static spherically symmetric vacuum solution. Its horizon at r = 2GM/c² is a coordinate singularity, removable by a change of coordinates; the curvature singularity at r = 0 is not.',
    },
    glossaryTerms: [glossaryTermId('event-horizon'), glossaryTermId('schwarzschild-radius')],
    related: [
      topicId('gravitational-time-dilation'),
      topicId('curved-spacetime'),
      topicId('gravitational-waves'),
    ],
    blocks: [
      {
        id: 'origin',
        kind: 'prose',
        text: {
          essential:
            'Within weeks of Einstein publishing the field equations, Karl Schwarzschild — serving on the Russian front — found the first exact solution for the space around a spherical mass. Buried in it was a radius at which the mathematics did something alarming.',
          detailed:
            'At r = 2GM/c², the time component of Schwarzschild’s metric goes to zero and the radial one blows up. For any ordinary body this radius lies far inside the object, where the vacuum solution does not apply, so it was long treated as a mathematical curiosity. It took decades of work to establish that for a sufficiently compact object the radius is real, that the apparent blow-up is an artefact of the coordinates rather than of the geometry, and that the surface it marks is a genuine one-way boundary.',
        },
      },
      {
        id: 'viz-schwarzschild',
        kind: 'visualization',
        visualizationId: visualizationId('schwarzschild-radius'),
      },
      {
        id: 'claim-radius',
        kind: 'claim',
        statement: {
          essential:
            'The formula is simple: r = 2GM/c². For the Sun it gives about 3 kilometres; for the Earth, about 9 millimetres. Nothing ordinary is anywhere near this compressed.',
          detailed:
            'The radius is proportional to mass, so a black hole of ten solar masses has a horizon 30 km across and one of four million solar masses has one about 12 million km across. Notice what that implies about density: a supermassive black hole’s average density inside its horizon can be lower than water’s. Compactness, not density, is what makes a black hole.',
          technical:
            'r_s = 2GM/c², numerically 2.95 km per solar mass. For a 70 kg person it is 1.0 × 10⁻²⁵ m, about ten orders of magnitude smaller than a proton — which is the honest reason people are not black holes.',
        },
        evidence: 'model',
        references: [referenceId('schwarzschild-1916'), referenceId('hartle-2003-gravity')],
      },
      {
        id: 'horizon',
        kind: 'prose',
        text: {
          essential:
            'The event horizon is not a wall and not a surface made of anything. It is a location defined entirely by which paths lead outward. Inside it, every path through spacetime — for light included — leads further in. There is nothing to hit and, for someone falling through a large one, nothing locally to notice.',
          detailed:
            'The most useful way to state it is in terms of the light cone. Far away, half the directions in a light cone point outward. Closer in, the cones tip inward. At the horizon they have tipped so far that the outward edge is exactly vertical: light aimed straight out hovers. Inside, even that edge points inward, and moving away from the centre is as impossible as moving into yesterday.',
        },
      },
      {
        id: 'claim-time',
        kind: 'claim',
        statement: {
          essential:
            'Gravitational time dilation goes to its limit at the horizon. To a distant observer, an infalling clock ticks slower and slower and never quite arrives — while the falling observer crosses in a perfectly finite time by their own watch.',
          detailed:
            'Both descriptions are correct, and they do not contradict each other for the same reason that two observers can disagree about simultaneity: they are using different notions of "when". The image the distant observer sees also fades exponentially fast as the light climbing out is redshifted away, so the frozen image is not merely dim but effectively gone within milliseconds for a stellar-mass hole.',
          technical:
            'dτ/dt = √(1 − r_s/r) → 0 at r = r_s. Schwarzschild time diverges at the horizon while proper time along the infalling geodesic remains finite; in Eddington–Finkelstein or Kruskal coordinates the crossing is manifestly unremarkable.',
        },
        evidence: 'model',
        references: [referenceId('hartle-2003-gravity'), referenceId('misner-thorne-wheeler-1973')],
      },
      {
        id: 'singularity',
        kind: 'callout',
        tone: 'caution',
        title: 'The singularity is not a described object',
        text: {
          essential:
            'General relativity says curvature grows without bound towards the centre. That is not a discovery that infinite density exists — it is the theory reporting that it has stopped working. A prediction of infinity is how a physical theory says it has been used outside its domain.',
          detailed:
            'Exactly the same thing happens when the equations are run backwards to the beginning of the Universe, and for the same reason: at those scales quantum effects cannot be ignored, and no tested theory covers gravity and quantum mechanics together. Anything stated confidently about the interior of a black hole is model-dependent, and this platform will not present it otherwise.',
        },
        references: [
          referenceId('misner-thorne-wheeler-1973'),
          referenceId('will-2014-confrontation'),
        ],
      },
      {
        id: 'claim-observed',
        kind: 'claim',
        statement: {
          essential:
            'They are not hypothetical. Two have been imaged at horizon scale, dozens of mergers have been heard as gravitational waves, and stars have been tracked orbiting an invisible four-million-solar-mass object at the centre of our galaxy.',
          detailed:
            'The Event Horizon Telescope published a horizon-scale image of M87* in 2019 and of Sagittarius A* in 2022; both show a dark central region of the size general relativity predicts, ringed by emission. Independently, the orbits of individual stars around the galactic centre give a mass of about 4.3 million suns confined within a region smaller than our Solar System, and the star S2 shows the predicted gravitational redshift at closest approach.',
        },
        evidence: 'established',
        references: [
          referenceId('eht-2019-m87'),
          referenceId('eht-2022-sgr-a'),
          referenceId('gravity-2018-s2-redshift'),
        ],
      },
      {
        id: 'scope',
        kind: 'callout',
        tone: 'note',
        title: 'This page stops here on purpose',
        text: {
          essential:
            'What is above is the relativity a reader needs: where the horizon radius comes from, what the horizon is, and why the centre is not described. How black holes form, how they spin, what accretion discs and jets do, Hawking radiation, and the information problem all belong to the Stars, Galaxies & Black Holes section — which has not been written yet, and is not being summarised here in a paragraph.',
        },
      },
    ],
    furtherReading: [referenceId('schwarzschild-1916'), referenceId('hartle-2003-gravity')],
  },

  {
    id: topicId('gravitational-waves'),
    slug: 'gravitational-waves',
    sectionId: RELATIVITY,
    order: 15,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Gravitational waves',
    subtitle: 'Spacetime itself can ripple — and in 2015 we finally felt one.',
    summary: {
      essential:
        'When massive objects accelerate violently, they send ripples of curvature outward at the speed of light. A passing wave stretches space one way and squeezes it the other, by an almost unimaginably small amount.',
      detailed:
        'Einstein predicted them in 1916 and doubted for decades whether they were physically real or a mathematical artefact. They were confirmed indirectly in the 1970s, and detected directly in 2015 — a century after the prediction.',
      technical:
        'Linearising the field equations about flat spacetime gives a wave equation for the metric perturbation, with two transverse traceless polarisations propagating at c. The leading radiation is quadrupolar; there is no monopole or dipole gravitational radiation.',
    },
    glossaryTerms: [glossaryTermId('gravitational-wave'), glossaryTermId('spacetime')],
    related: [
      topicId('curved-spacetime'),
      topicId('black-hole-foundations'),
      topicId('testing-relativity'),
    ],
    blocks: [
      {
        id: 'what',
        kind: 'prose',
        text: {
          essential:
            'If mass curves spacetime, then moving mass around must change that curvature — and the change cannot arrive instantly, because nothing does. It travels outward at the speed of light as a wave. That is the whole argument.',
          detailed:
            'A passing wave does something no other wave does: it changes distances themselves. A ring of free-floating objects is stretched horizontally and squeezed vertically, then the reverse, as the wave goes through. Nothing pushes them; the geometry between them changes. The effect is transverse — it acts across the direction of travel — and it comes in two independent polarisations offset by 45 degrees rather than the 90 of light.',
        },
      },
      {
        id: 'viz-wave',
        kind: 'visualization',
        visualizationId: visualizationId('gravitational-wave'),
      },
      {
        id: 'claim-indirect',
        kind: 'claim',
        statement: {
          essential:
            'They were confirmed indirectly first. Two neutron stars orbiting each other should lose energy to gravitational waves and spiral inward — and one such pair has been watched doing exactly that since 1974.',
          detailed:
            'Hulse and Taylor discovered PSR B1913+16, a pulsar in a binary orbit whose ticks act as an extremely precise clock. General relativity predicts the orbit should shrink by a specific amount each year as energy leaves as gravitational radiation. Forty years of timing show the orbital period decaying at 0.9983 ± 0.0016 times the predicted rate — agreement to about two parts in a thousand, and the discovery earned the 1993 Nobel Prize.',
        },
        evidence: 'established',
        references: [
          referenceId('hulse-taylor-1975'),
          referenceId('weisberg-huang-2016-binary-pulsar'),
        ],
      },
      {
        id: 'claim-direct',
        kind: 'claim',
        statement: {
          essential:
            'The first direct detection was on 14 September 2015: two black holes of about 36 and 29 solar masses merging, 1.3 billion light-years away. The signal lasted 0.2 seconds.',
          detailed:
            'LIGO measures the length difference between two four-kilometre arms with laser interferometry. The wave from GW150914 changed that difference by about 4 × 10⁻¹⁸ metres — a small fraction of the diameter of a proton — and did so identically at two detectors 3,000 km apart, seven milliseconds apart, in the pattern predicted for an inspiral and merger. About three solar masses of energy were radiated as gravitational waves in a fraction of a second, briefly outshining every star in the observable Universe combined.',
          technical:
            'Peak strain h ≈ 1.0 × 10⁻²¹. The waveform was matched against templates from numerical relativity — the full non-linear field equations solved on a computer, since no analytic solution for a merger exists. Detections through the third observing run now number around ninety.',
        },
        evidence: 'established',
        references: [referenceId('ligo-2016-gw150914'), referenceId('abbott-2023-gwtc3')],
      },
      {
        id: 'claim-speed',
        kind: 'claim',
        statement: {
          essential:
            'In 2017 a neutron-star merger was seen in gravitational waves and in light. After travelling 130 million years, the two signals arrived 1.7 seconds apart — so gravity and light travel at the same speed to extraordinary precision.',
          detailed:
            'GW170817 was followed 1.7 seconds later by a short gamma-ray burst from the same position, and then by observations across the whole electromagnetic spectrum. The tiny delay is consistent with the gamma rays being emitted slightly after the merger, and it bounds the fractional difference between the speed of gravity and the speed of light to within about one part in 10¹⁵. That single measurement eliminated a large family of alternative gravity theories.',
        },
        evidence: 'established',
        references: [referenceId('abbott-2017-gw170817')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'gw150914-strain',
            label: 'Peak strain of GW150914',
            value: 1e-21,
            unit: '(fractional length change)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Applied to LIGO’s 4 km arms this is a length change of about 4 × 10⁻¹⁸ m, a small fraction of a proton’s diameter.',
            references: [referenceId('ligo-2016-gw150914')],
          },
          {
            id: 'binary-pulsar-agreement',
            label: 'Observed orbital decay of PSR B1913+16, as a fraction of the prediction',
            value: 0.9983,
            unit: '',
            uncertainty: { plusMinus: 0.0016 },
            context:
              'Forty years of pulsar timing against the general-relativistic rate of energy loss to gravitational radiation.',
            references: [referenceId('weisberg-huang-2016-binary-pulsar')],
          },
        ],
      },
      {
        id: 'new-sense',
        kind: 'callout',
        tone: 'note',
        title: 'A different way of observing',
        text: {
          essential:
            'Every previous astronomy used light, or particles. Gravitational waves are not light at all: they pass through everything, they carry information about mass and motion rather than temperature and chemistry, and they can reach us from events that emit no light whatsoever — which is how two black holes, objects that by definition cannot shine, were observed merging.',
        },
        references: [referenceId('abbott-2023-gwtc3')],
      },
    ],
    furtherReading: [referenceId('ligo-2016-gw150914'), referenceId('abbott-2017-gw170817')],
  },

  {
    id: topicId('testing-relativity'),
    slug: 'testing-relativity',
    sectionId: RELATIVITY,
    order: 16,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Testing relativity',
    subtitle: 'A century of attempts to break it, and what each one measured.',
    summary: {
      essential:
        'Relativity is not accepted because Einstein was clever. It is accepted because for a hundred years people have tried extremely hard to catch it out, in every regime they could reach, and it has not yet failed.',
      detailed:
        'The tests fall into families: the constancy of light speed, the universality of free fall, the behaviour of clocks, the deflection and delay of light, the dynamics of orbits, and the properties of gravitational radiation. Each family bounds a different way the theory could be wrong.',
    },
    related: [
      topicId('gravitational-lensing'),
      topicId('gravitational-waves'),
      topicId('beyond-newton'),
    ],
    blocks: [
      {
        id: 'framework',
        kind: 'prose',
        text: {
          essential:
            'Modern tests are not simply "does relativity work?" They are set up so that a whole family of possible theories is described by a handful of numbers, with general relativity sitting at one particular set of values. Each experiment then measures one of those numbers.',
          detailed:
            'This is the parameterised post-Newtonian framework, and it is what turns a yes-or-no question into a quantitative one. Two of the parameters have familiar meanings: γ measures how much space curvature a unit of mass produces, and β measures the non-linearity of gravity. General relativity says both are exactly 1, and experiments now pin them there to a few parts in 10⁵.',
        },
      },
      {
        id: 'claim-shapiro',
        kind: 'claim',
        statement: {
          essential:
            'The sharpest Solar System test tracked radio signals to the Cassini spacecraft as they passed close to the Sun. The signals were delayed by the Sun’s curvature by exactly the predicted amount, to two parts in 100,000.',
          detailed:
            'Light passing near a mass is not only deflected but slowed relative to a distant observer — the Shapiro delay. For Cassini the round-trip delay was about 200 microseconds, and measuring it constrained γ to 1 + (2.1 ± 2.3) × 10⁻⁵. This remains one of the tightest bounds on any departure from general relativity in the weak field.',
        },
        evidence: 'established',
        references: [referenceId('bertotti-2003-cassini'), referenceId('will-2014-confrontation')],
      },
      {
        id: 'claim-gpb',
        kind: 'claim',
        statement: {
          essential:
            'A satellite with four near-perfect gyroscopes measured two effects Newton has no way to express: spacetime being tilted by the Earth’s mass, and dragged around by its rotation.',
          detailed:
            'Gravity Probe B flew from 2004 to 2005 and measured the geodetic effect — the precession of a gyroscope carried around a mass — at −6,601.8 ± 18.3 milliarcseconds per year against a prediction of −6,606.1. It also detected frame dragging, the much smaller twisting of spacetime by the Earth’s rotation, at −37.2 ± 7.2 against a predicted −39.2. Frame dragging has no Newtonian counterpart at all: in Newton’s gravity a spinning mass and a stationary one of the same mass are indistinguishable.',
        },
        evidence: 'established',
        references: [referenceId('everitt-2011-gravity-probe-b')],
      },
      {
        id: 'families',
        kind: 'prose',
        text: {
          essential:
            'The record, briefly. The speed of light is the same in every direction to a part in 10¹⁷. Different materials fall at the same rate to a part in 10¹⁵. Clocks shift with height as predicted, from 33-centimetre laboratory tests to satellites. Light bends and is delayed by the predicted amount. Orbits precess by the predicted amount. Binary pulsars lose energy at the predicted rate. Gravitational waves travel at the speed of light.',
          detailed:
            'What matters is the spread rather than any single number. These experiments probe field strengths from a laboratory bench to the surface of a neutron star, speeds from a walking pace to 0.9994 c, and timescales from nanoseconds to forty years. A wrong theory that happened to survive one regime would be very unlikely to survive all of them.',
        },
      },
      {
        id: 'strong-field',
        kind: 'claim',
        statement: {
          essential:
            'The newest tests reach the regime where gravity is strong — merging black holes, and the horizon-scale images of two of them. Nothing has disagreed with the theory yet.',
          detailed:
            'Gravitational-wave signals let the merger waveform be compared against numerical relativity, which tests the full non-linear equations rather than a weak-field expansion. Event Horizon Telescope images test whether the dark region is the size and shape the Kerr solution predicts. Both are much less precise than the Solar System tests — a few percent rather than parts per hundred thousand — but they probe a completely different regime, which is exactly where a breakdown would be expected.',
        },
        evidence: 'active-research',
        references: [
          referenceId('abbott-2023-gwtc3'),
          referenceId('eht-2022-sgr-a'),
          referenceId('will-2014-confrontation'),
        ],
      },
      {
        id: 'why-keep-testing',
        kind: 'callout',
        tone: 'note',
        title: 'Why keep testing something that keeps passing?',
        text: {
          essential:
            'Because we already know general relativity is incomplete. It cannot be combined with quantum mechanics, and it predicts its own breakdown at singularities. Somewhere there must be a departure from it, and the only way to find out where is to keep measuring more precisely and in more extreme places.',
        },
        references: [referenceId('will-2014-confrontation')],
      },
    ],
    furtherReading: [
      referenceId('will-2014-confrontation'),
      referenceId('everitt-2011-gravity-probe-b'),
    ],
  },

  {
    id: topicId('beyond-newton'),
    slug: 'what-general-relativity-explains',
    sectionId: RELATIVITY,
    order: 17,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What general relativity explains that Newton cannot',
    subtitle: 'The list, and then the honest ending: where this theory stops too.',
    summary: {
      essential:
        'Newtonian gravity is an excellent approximation. General relativity explains everything it explains, plus a specific list of things it cannot — and predicts phenomena Newton has no language for at all.',
      detailed:
        'Some of the items on the list are corrections to Newtonian answers. Others are entirely new objects and phenomena that Newtonian gravity cannot even describe: horizons, waves, frame dragging, an expanding Universe.',
    },
    related: [
      topicId('newtonian-limits'),
      topicId('testing-relativity'),
      topicId('big-bang-model'),
    ],
    blocks: [
      {
        id: 'corrections',
        kind: 'prose',
        text: {
          essential:
            'First, the corrections. Mercury’s orbit precesses by an extra 43 arcseconds per century. Light bends twice as much as a Newtonian calculation gives. Clocks run at different rates at different heights. Signals passing a mass are delayed. Every one of these is measured, and every one is a number Newtonian gravity gets demonstrably wrong.',
          detailed:
            'Notice that these are not small errors in the sense of being unimportant. Forty-three arcseconds per century was a nineteenth-century scandal. The factor of two in light deflection is not a refinement but a different answer. And the clock effect, at 38 microseconds a day, is the difference between satellite navigation working and being useless.',
        },
      },
      {
        id: 'claim-new-phenomena',
        kind: 'claim',
        statement: {
          essential:
            'Second, and more strikingly: general relativity predicts things Newtonian gravity has no way to express at all. Event horizons. Gravitational waves. The dragging of space by a spinning mass. An expanding Universe.',
          detailed:
            'These are not corrections to Newtonian answers, because Newtonian gravity does not produce answers here. It has no maximum speed, so it has no horizons and no waves — its gravity is instantaneous. Its spinning masses pull exactly like non-spinning ones. And it has no equations that describe space itself as something that can change scale, so it cannot describe an expanding cosmos. Every one of these has since been observed.',
          technical:
            'Frame dragging, gravitational radiation, horizons and cosmological expansion all follow from features Newtonian gravity structurally lacks: a finite propagation speed, a dynamical metric, and the coupling of gravity to energy and momentum rather than to mass alone.',
        },
        evidence: 'established',
        references: [
          referenceId('everitt-2011-gravity-probe-b'),
          referenceId('ligo-2016-gw150914'),
          referenceId('hubble-1929'),
        ],
      },
      {
        id: 'cosmology',
        kind: 'prose',
        text: {
          essential:
            'The largest consequence is the one this platform opened with. General relativity applied to a universe filled roughly evenly with matter does not permit it to sit still — it must expand or contract. That is where the Big Bang model comes from.',
          detailed:
            'Friedmann and Lemaître derived the expanding solutions in the 1920s, before Hubble’s measurements confirmed the expansion. Einstein initially added the cosmological constant to keep the Universe static, and later regretted it — and then, seventy years after that, the accelerating expansion put a term of exactly that form back into the equations for reasons nobody yet understands.',
        },
      },
      {
        id: 'cross-big-bang',
        kind: 'cross-link',
        topicId: topicId('big-bang-model'),
        rationale: 'The cosmology that general relativity makes possible.',
      },
      {
        id: 'newton-still-right',
        kind: 'callout',
        tone: 'note',
        title: 'And Newton is still what you should use',
        text: {
          essential:
            'None of this demotes Newtonian gravity to an error. For spacecraft navigation, tides, planetary orbits and everything on a human scale, it gives the same answer to more decimal places than the problem requires, and it is far easier to compute. Relativity told us where the boundary of that domain is — it did not move the boundary inward.',
        },
        references: [referenceId('will-2014-confrontation')],
      },
      {
        id: 'open-quantum-gravity',
        kind: 'open-question',
        question: 'What replaces general relativity where quantum effects cannot be ignored?',
        whyItMatters: {
          essential:
            'General relativity is a classical theory: it treats spacetime as smooth and definite. Quantum mechanics does not work that way. At a singularity and at the first instant of the Universe, both are essential and no tested theory covers both.',
          detailed:
            'This is the same pattern as the last section, one step along. Newtonian gravity failed at strong fields and high precision; general relativity fails where quantum mechanics becomes essential. In each case the older theory was not wrong so much as bounded, and the boundary was found by measuring more carefully.',
        },
        whatWouldSettleIt: {
          essential:
            'No experiment yet reaches the regime directly — the energies required are around 10¹⁵ times what the Large Hadron Collider produces. Nearer-term evidence could come from the ringdown of merging black holes, from tabletop experiments testing whether gravity can place a mass in superposition, or from imprints of the earliest moments in the cosmic microwave background.',
        },
        references: [referenceId('will-2014-confrontation'), referenceId('abbott-2023-gwtc3')],
      },
      {
        id: 'open-dark-energy',
        kind: 'open-question',
        question: 'Is the accelerating expansion a new form of energy, or a failure of the theory?',
        whyItMatters: {
          essential:
            'The acceleration is measured. Its cause is not identified. It may be a cosmological constant — a property of spacetime itself that general relativity permits — or it may be a sign that the field equations need modifying on the largest scales.',
        },
        whatWouldSettleIt: {
          essential:
            'Measuring whether the effect has stayed constant over cosmic time. A cosmological constant does not change; most alternatives do. Surveys now under way are designed to detect a change of a few percent, and the answer would distinguish new physics in the contents of the Universe from new physics in gravity itself.',
        },
        references: [referenceId('riess-1998'), referenceId('planck-2018-vi')],
      },
      {
        id: 'closing',
        kind: 'prose',
        text: {
          essential:
            'Three centuries separated Newton’s gravity from Einstein’s. We are one century past Einstein, with a theory that has passed every test and that we already know cannot be the final one. That is not a failure of physics. It is what the process looks like when it is working.',
        },
      },
    ],
    furtherReading: [
      referenceId('will-2014-confrontation'),
      referenceId('misner-thorne-wheeler-1973'),
    ],
  },
];
