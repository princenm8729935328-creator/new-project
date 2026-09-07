/**
 * Einstein & Relativity — special relativity.
 *
 * Topics 1–7: the problem Newtonian mechanics could not solve, the two
 * postulates, and the four consequences that follow from them — simultaneity,
 * time dilation, length contraction and mass–energy — finishing with the
 * geometry that ties them together.
 *
 * The writing rule for this section: never state a relativistic effect without
 * saying how it was measured. Relativity is the part of physics readers are
 * most likely to have met as a set of surprising assertions, and the surprise
 * is exactly why every page here carries an experiment.
 *
 * Evidence levels do real work again. "Moving clocks run slow" is
 * `established` — it is measured daily in particle accelerators and hourly in
 * satellite navigation. "Spacetime is a four-dimensional geometry" is `model`:
 * an extraordinarily well-tested description, and still a description.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const RELATIVITY = sectionId('relativity');
const REVIEWED = '2026-09-07';

export const SPECIAL_RELATIVITY_TOPICS: readonly Topic[] = [
  {
    id: topicId('speed-of-light-problem'),
    slug: 'speed-of-light',
    sectionId: RELATIVITY,
    order: 1,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The problem with light',
    subtitle: 'Speeds add — except light’s, which refuses to. Something had to give.',
    summary: {
      essential:
        'Throw a ball forward from a moving train and its speed adds to the train’s. Shine a torch forward and the light does not speed up at all. That single stubborn fact broke Newtonian physics.',
      detailed:
        'By 1900 two enormously successful theories flatly contradicted each other: Newtonian mechanics said velocities add, and Maxwell’s electromagnetism said light travels at one fixed speed. Experiments kept siding with Maxwell.',
      technical:
        'Maxwell’s equations give c = 1/√(ε₀μ₀) with no reference to any observer. Under a Galilean transformation the equations change form, implying a preferred frame — the "luminiferous ether" — that no experiment could detect.',
    },
    glossaryTerms: [glossaryTermId('lorentz-factor')],
    related: [
      topicId('special-relativity'),
      topicId('relativity-of-simultaneity'),
      topicId('newtonian-limits'),
    ],
    blocks: [
      {
        id: 'open',
        kind: 'prose',
        text: {
          essential:
            'Walk forward at 5 km/h along a train moving at 100 km/h and, to someone on the platform, you are moving at 105 km/h. Speeds add. Everyone knows this, it is obviously true, and it is the assumption that had to be abandoned.',
          detailed:
            'The rule is called Galilean velocity addition and it is the backbone of Newtonian mechanics. It is not an approximation anybody thought to question, because at the speeds of trains and planets it is right to more decimal places than anyone can measure. The trouble only appears when one of the things being added is light.',
        },
      },
      {
        id: 'claim-maxwell',
        kind: 'claim',
        statement: {
          essential:
            'Maxwell’s equations for electricity and magnetism predict a speed for light — a single, fixed number, with nothing in the equations about who is measuring it.',
          detailed:
            'In the 1860s Maxwell showed that changing electric and magnetic fields sustain each other as a wave, and that the wave’s speed follows from two constants measurable on a laboratory bench. The number that came out matched the measured speed of light, which was how light was identified as an electromagnetic wave. But the equations name no observer, and that is the problem: every other wave in physics travels at a fixed speed *relative to its medium*.',
          technical:
            'c = 1/√(ε₀μ₀). Under a Galilean boost the equations do not keep their form, so if they are exactly right in one frame they must be wrong in every other — which would make the frame in which they hold a physically preferred one.',
        },
        evidence: 'established',
        references: [referenceId('einstein-1905-sr'), referenceId('codata-2018')],
      },
      {
        id: 'ether',
        kind: 'prose',
        text: {
          essential:
            'The obvious fix was to say light travels through a medium — an invisible "ether" filling space, with c measured relative to it. Then the Earth’s motion through the ether should make light appear slightly faster in one direction than another, just as a swimmer is faster downstream.',
          detailed:
            'This was not a fringe idea; it was the mainstream position of nineteenth-century physics, and it made a precise, testable prediction. The Earth orbits at about 30 km/s, one ten-thousandth of light speed, which is easily enough to detect with an interferometer sensitive to the second-order effect.',
        },
      },
      {
        id: 'claim-michelson',
        kind: 'claim',
        statement: {
          essential:
            'The experiment was done, carefully, in 1887 — and found nothing. Light travelled at exactly the same speed in every direction, no matter how the Earth was moving.',
          detailed:
            'Michelson and Morley split a beam of light, sent the halves along two perpendicular arms, recombined them, and looked for the interference shift that motion through the ether would produce. They expected about four tenths of a fringe. They saw less than a hundredth. The apparatus floated on mercury so it could be rotated, and they repeated the measurement at different times of year; the answer was always the same.',
          technical:
            'The expected shift scales as (v/c)² × L/λ. The null result has since been reproduced with modern resonators to about one part in 10¹⁷, and no anisotropy of the speed of light has ever been found.',
        },
        evidence: 'established',
        references: [referenceId('michelson-morley-1887')],
      },
      {
        id: 'the-crisis',
        kind: 'callout',
        tone: 'note',
        title: 'Two theories, both superb, flatly incompatible',
        text: {
          essential:
            'Newtonian mechanics had three centuries of success behind it. Maxwell’s electromagnetism explained light, radio, and every electrical machine being built at the time. They could not both be exactly right. What Einstein did in 1905 was not to find new data — the data had been sitting there for eighteen years — but to work out which of the two theories’ hidden assumptions to drop.',
        },
        references: [referenceId('einstein-1905-sr')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'c',
            label: 'Speed of light in vacuum',
            value: 299792458,
            unit: 'm/s',
            context:
              'Exact by definition since 1983: the metre is defined from this value, so c is no longer measured but fixed.',
            references: [referenceId('codata-2018')],
          },
          {
            id: 'earth-orbital-speed',
            label: 'Earth’s orbital speed around the Sun',
            value: 29.78,
            unit: 'km/s',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About 1/10,000 of light speed — small, but the Michelson–Morley apparatus was sensitive enough to detect it if the ether existed.',
            references: [referenceId('nasa-planetary-factsheet')],
          },
        ],
      },
      {
        id: 'cross-newton',
        kind: 'cross-link',
        topicId: topicId('newtonian-limits'),
        rationale:
          'The gravitational side of the same story: where Newton’s gravity stops working.',
      },
      {
        id: 'cross-sr',
        kind: 'cross-link',
        topicId: topicId('special-relativity'),
        rationale: 'The two assumptions Einstein kept, and everything that followed from them.',
      },
    ],
    furtherReading: [referenceId('einstein-1905-sr'), referenceId('taylor-wheeler-1992-spacetime')],
  },

  {
    id: topicId('special-relativity'),
    slug: 'special-relativity',
    sectionId: RELATIVITY,
    order: 2,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Special relativity',
    subtitle: 'Two assumptions. Everything strange follows from them by arithmetic.',
    summary: {
      essential:
        'Einstein assumed just two things: the laws of physics are the same for everyone moving steadily, and light travels at the same speed for everyone. Every famous consequence — slow clocks, shrinking rulers, E = mc² — is forced by those two.',
      detailed:
        'The theory is called "special" because it deals with the special case of uniform motion, with no acceleration and no gravity. That restriction is what makes it simple enough to derive on a page, and it is what Einstein spent the next decade removing.',
      technical:
        'The postulates single out the Lorentz transformations as the coordinate changes between inertial frames, replacing the Galilean ones. Every kinematic result of special relativity is a consequence of that substitution.',
    },
    glossaryTerms: [glossaryTermId('lorentz-factor'), glossaryTermId('proper-time')],
    related: [topicId('speed-of-light-problem'), topicId('time-dilation'), topicId('spacetime')],
    blocks: [
      {
        id: 'postulates',
        kind: 'prose',
        text: {
          essential:
            'The first postulate: if you are moving smoothly at a steady speed, no experiment you can do inside a sealed room will tell you how fast you are going. There is no such thing as being absolutely at rest. The second postulate: light travels at c for everyone, whatever their own motion, and whatever the motion of whatever emitted it.',
          detailed:
            'The first postulate is old — Galileo argued it with a ship, a bowl of fish and a swinging lamp — and it is uncontroversial. The second is the radical one, and it is the direct consequence of taking Maxwell at his word and the Michelson–Morley result at face value. Everything else in this section is arithmetic performed on those two sentences.',
        },
      },
      {
        id: 'claim-consequence',
        kind: 'claim',
        statement: {
          essential:
            'If both postulates hold, then time itself cannot run at the same rate for everyone. That is not an extra assumption — it is what the two postulates force.',
          detailed:
            'Speed is distance over time. If two observers in relative motion measure the same speed for the same light pulse, and they disagree about the distance it travelled, they must also disagree about the time it took. The alternative — keeping universal time — would mean giving up the constancy of c, and that is the thing the experiments will not allow.',
          technical:
            'Requiring the interval s² = (cΔt)² − Δx² − Δy² − Δz² to be invariant under changes of inertial frame yields the Lorentz transformations, in which t′ mixes both t and x. Time dilation, length contraction and the relativity of simultaneity are three readings of that one mixing.',
        },
        evidence: 'model',
        references: [referenceId('einstein-1905-sr')],
      },
      {
        id: 'viz-lorentz',
        kind: 'visualization',
        visualizationId: visualizationId('lorentz-factor'),
      },
      {
        id: 'gamma',
        kind: 'prose',
        text: {
          essential:
            'One number governs how strong the effects are: the Lorentz factor, γ = 1 ÷ √(1 − v²/c²). At everyday speeds it is 1.000000000001 and nothing happens. At 87% of light speed it is 2, and everything doubles or halves.',
          detailed:
            'This is why relativity went unnoticed for three centuries. A passenger jet travels at about a millionth of light speed, giving γ − 1 ≈ 5 × 10⁻¹³ — a clock aboard loses about 30 nanoseconds on a transatlantic flight, which nobody could have measured before atomic clocks existed. Newtonian mechanics is not a different theory from relativity; it is relativity with γ set to 1.',
          technical:
            'γ = (1 − β²)^(−1/2) with β = v/c. Expanding for small β gives γ ≈ 1 + β²/2, so the leading correction to kinetic energy is the Newtonian ½mv² — Newtonian mechanics falls out of relativity as the first term of a series, not as an approximation bolted on afterwards.',
        },
      },
      {
        id: 'not-illusions',
        kind: 'callout',
        tone: 'misconception',
        title: 'These are not optical illusions',
        text: {
          essential:
            'A common way to soften relativity is to say the moving clock only *appears* to run slow, or the ruler only *looks* shorter. That is wrong. The muons reaching the ground really do reach the ground; the satellite clocks really do have to be corrected; the accelerator really does need more energy than Newton predicts. The effects are about what the world does, not about what an observer perceives.',
          detailed:
            'There is a genuine visual effect too — light from different parts of a fast-moving object reaches your eye at different times, which distorts and rotates its apparent shape — but it is a separate phenomenon and it is not what "length contraction" refers to.',
        },
        references: [referenceId('taylor-wheeler-1992-spacetime')],
      },
      {
        id: 'what-stays',
        kind: 'prose',
        text: {
          essential:
            'Plenty survives unchanged. Momentum and energy are still conserved. Cause still comes before effect for everybody. Nothing carrying information outruns light. What is lost is the idea that space and time are a fixed stage that everyone shares identically.',
          detailed:
            'The word "relativity" misleads on this point. The theory does not say everything is relative; it says a specific short list of things are relative — durations, lengths, simultaneity — precisely so that something else can be absolute: the speed of light, and the spacetime interval built from it.',
        },
      },
      {
        id: 'cross-simultaneity',
        kind: 'cross-link',
        topicId: topicId('relativity-of-simultaneity'),
        rationale: 'The first and strangest consequence: "now" is not shared.',
      },
    ],
    furtherReading: [referenceId('einstein-1905-sr'), referenceId('taylor-wheeler-1992-spacetime')],
  },

  {
    id: topicId('relativity-of-simultaneity'),
    slug: 'simultaneity',
    sectionId: RELATIVITY,
    order: 3,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The relativity of simultaneity',
    subtitle: 'Two things can happen at the same time for you and at different times for me.',
    summary: {
      essential:
        'There is no universal "now". Two events that are simultaneous for one observer happen one after the other for another observer moving past — and neither of them is wrong.',
      detailed:
        'This is the consequence that most people find hardest, and it is the one from which time dilation and length contraction are easiest to derive. Once "at the same time" stops being absolute, almost everything else follows.',
      technical:
        'In the Lorentz transformation t′ = γ(t − vx/c²), the term vx/c² makes the time coordinate depend on position. Two events with the same t but different x therefore have different t′.',
    },
    glossaryTerms: [glossaryTermId('simultaneity')],
    related: [topicId('special-relativity'), topicId('time-dilation'), topicId('spacetime')],
    blocks: [
      {
        id: 'setup',
        kind: 'prose',
        text: {
          essential:
            'Einstein’s own example: a train speeding past a platform, and two bolts of lightning that strike its front and back. Someone standing exactly midway along the platform sees the two flashes arrive together and concludes the strikes were simultaneous.',
          detailed:
            'Now put a second observer exactly midway along the train. The light from both strikes still travels at c — that is the second postulate, and it applies to them too. But they are moving towards where the front flash was emitted and away from where the rear one was. The front flash reaches them first. Since the light travelled equal distances at equal speed in their frame, they must conclude the front strike happened earlier.',
        },
      },
      {
        id: 'viz-train',
        kind: 'visualization',
        visualizationId: visualizationId('simultaneity-train'),
      },
      {
        id: 'claim-both-right',
        kind: 'claim',
        statement: {
          essential:
            'Both observers are right. There is no further fact of the matter about which strike "really" came first — the question has no observer-independent answer.',
          detailed:
            'This is the part that is genuinely a change in how the world is described, not a puzzle to be resolved by looking more carefully. The two observers are not making an error that better instruments would fix. Simultaneity is a relation between events *and a frame*, in the same way that "to the left of" is a relation between objects and a viewpoint.',
          technical:
            'For events separated by Δx with zero Δt in one frame, another frame moving at v gives Δt′ = −γvΔx/c². The sign depends on the direction of motion, so a third observer travelling the other way puts the events in the opposite order.',
        },
        evidence: 'model',
        references: [referenceId('einstein-1905-sr'), referenceId('minkowski-1952-space-and-time')],
      },
      {
        id: 'causality',
        kind: 'callout',
        tone: 'caution',
        title: 'Cause and effect are still safe',
        text: {
          essential:
            'Observers can disagree about the order of two events only when the events are far enough apart in space and close enough in time that not even light could get from one to the other. In that case neither could have caused the other, so nothing is at stake. Whenever one event *could* have influenced another, every observer agrees which came first.',
          detailed:
            'The dividing line is the light cone. Events inside each other’s light cones have an order all observers agree on; events outside — "spacelike separated" — do not, and cannot be causally connected. Relativity does not merely permit this arrangement; it requires exactly this arrangement, which is what stops the theory contradicting itself.',
        },
        references: [referenceId('minkowski-1952-space-and-time')],
      },
      {
        id: 'definition',
        kind: 'definition',
        termId: glossaryTermId('simultaneity'),
      },
      {
        id: 'why-it-matters',
        kind: 'prose',
        text: {
          essential:
            'This is why the other effects are not paradoxes. Each observer sees the other’s clock running slow — which sounds impossible until you notice that comparing two distant clocks requires deciding what "at the same time" means, and that is exactly the thing the two observers do not agree on.',
          detailed:
            'Almost every apparent contradiction in special relativity — the twins, the pole and the barn, the two mutually slow clocks — dissolves the moment simultaneity is handled carefully. The effects are not hiding a logical flaw; the flaw is in the unstated assumption that "now" is universal.',
        },
      },
      {
        id: 'cross-dilation',
        kind: 'cross-link',
        topicId: topicId('time-dilation'),
        rationale: 'The measurable consequence, and the experiments that confirm it.',
      },
    ],
    furtherReading: [referenceId('einstein-1905-sr'), referenceId('taylor-wheeler-1992-spacetime')],
  },

  {
    id: topicId('time-dilation'),
    slug: 'time-dilation',
    sectionId: RELATIVITY,
    order: 4,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Time dilation',
    subtitle: 'A moving clock ticks slower — and this is measured, routinely, every day.',
    summary: {
      essential:
        'The faster something moves relative to you, the slower its clock runs as measured by you. Not its mechanism — time itself. The effect is tiny at ordinary speeds and enormous near light speed.',
      detailed:
        'This is the most thoroughly tested prediction in relativity. It is confirmed by particles in accelerators, by cosmic rays reaching the ground, by atomic clocks flown around the world, and by every satellite navigation fix anyone has ever taken.',
      technical:
        'Δt = γΔτ, where τ is proper time — the time measured by a clock carried along the path. Proper time is a property of the path through spacetime, not of the clock.',
    },
    glossaryTerms: [glossaryTermId('proper-time'), glossaryTermId('lorentz-factor')],
    related: [
      topicId('relativity-of-simultaneity'),
      topicId('length-contraction'),
      topicId('gravitational-time-dilation'),
    ],
    blocks: [
      {
        id: 'mechanism',
        kind: 'prose',
        text: {
          essential:
            'Build a clock from two mirrors and a light pulse bouncing between them. One bounce is one tick. Now set that clock moving sideways: from where you stand, the pulse has to travel a longer, diagonal path to get from one mirror to the other. It cannot go faster to compensate, because nothing does. So it takes longer, and the clock ticks slower.',
          detailed:
            'The argument is complete as it stands, and it works for any clock, not just this one — because if a light clock and a wristwatch disagreed, you could tell how fast you were moving by comparing them, and the first postulate forbids that. The geometry is just Pythagoras: if the pulse travels ct along the diagonal while the clock moves vt sideways, the vertical distance is ct₀, and c²t² = c²t₀² + v²t², which rearranges to t = γt₀.',
        },
      },
      {
        id: 'viz-light-clock',
        kind: 'visualization',
        visualizationId: visualizationId('light-clock'),
      },
      {
        id: 'claim-muons',
        kind: 'claim',
        statement: {
          essential:
            'Cosmic-ray muons prove it. They live 2.2 microseconds on average, which even at light speed should carry them only about 660 metres — yet they are created 15 kilometres up and reach the ground in large numbers.',
          detailed:
            'Muons are produced when cosmic rays strike the upper atmosphere. Without time dilation, almost none would survive the descent: 15 km takes about 50 microseconds at their speed, or roughly 23 lifetimes, leaving a fraction of about 10⁻¹⁰. Measured at a mountain top and again at sea level, the surviving fraction is far higher than that — and matches the relativistic prediction. Frisch and Smith made this into a classroom-grade demonstration in 1963.',
          technical:
            'At the typical γ ≈ 10 the effective lifetime in the Earth frame is about 22 μs, and the surviving fraction rises from ~10⁻¹⁰ to a few tens of percent. In a storage ring at CERN, muons circulating with γ = 29.33 had their lifetime dilated by that factor, agreeing with special relativity to 2 parts in 1000.',
        },
        evidence: 'established',
        references: [
          referenceId('frisch-smith-1963-muons'),
          referenceId('bailey-1977-muon-lifetime'),
        ],
      },
      {
        id: 'claim-clocks',
        kind: 'claim',
        statement: {
          essential:
            'It has also been done with ordinary clocks. In 1971 caesium clocks were flown around the world on commercial airliners and came back disagreeing with the clocks left at home — by the predicted number of nanoseconds.',
          detailed:
            'Hafele and Keating flew clocks east and west and compared them with the reference clocks at the US Naval Observatory. Two relativistic effects compete: the aircraft’s speed slows its clock, while its altitude speeds it up, and the Earth’s rotation makes the eastward and westward trips different. For the westward flights the prediction was a gain of 275 ± 21 nanoseconds and the measurement was 273 ± 7. The experiment has since been repeated with far better clocks and far smaller error bars.',
        },
        evidence: 'established',
        references: [referenceId('hafele-keating-1972'), referenceId('ashby-2003-gps')],
      },
      {
        id: 'twins',
        kind: 'callout',
        tone: 'misconception',
        title: 'The twin puzzle, and why it is not a paradox',
        text: {
          essential:
            'One twin travels fast and returns younger. The apparent paradox is that from the traveller’s point of view the stay-at-home was the one moving — so why is the answer not symmetric? Because the situation is not symmetric: the traveller turns around, and turning around means accelerating. Only one twin changes frames, and that is the one who comes back younger.',
          detailed:
            'The cleanest way to see it is geometric. Both twins take a path through spacetime between the same two events; the elapsed time each experiences is the length of their own path, measured in proper time. The straight path — the one that does not accelerate — is the longest in proper time. There is no more paradox here than in two roads between the same towns having different lengths.',
        },
        references: [referenceId('taylor-wheeler-1992-spacetime')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'muon-lifetime',
            label: 'Muon mean lifetime at rest',
            value: 2.1969811,
            unit: 'µs',
            uncertainty: { plusMinus: 0.0000022 },
            context:
              'A property of the particle itself. In the Earth’s frame a fast muon lives γ times as long, which is why cosmic-ray muons reach the ground.',
            references: [referenceId('pdg-2024')],
          },
          {
            id: 'storage-ring-gamma',
            label: 'Lorentz factor of muons in the CERN storage ring',
            value: 29.33,
            unit: '',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Their observed lifetime was dilated by this factor, matching special relativity to 2 parts in 1000.',
            references: [referenceId('bailey-1977-muon-lifetime')],
          },
        ],
      },
      {
        id: 'cross-length',
        kind: 'cross-link',
        topicId: topicId('length-contraction'),
        rationale: 'The same effect seen from the moving object’s own point of view.',
      },
    ],
    furtherReading: [
      referenceId('bailey-1977-muon-lifetime'),
      referenceId('taylor-wheeler-1992-spacetime'),
    ],
  },

  {
    id: topicId('length-contraction'),
    slug: 'length-contraction',
    sectionId: RELATIVITY,
    order: 5,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Length contraction',
    subtitle: 'Distances shrink along the direction of motion — by exactly the same factor.',
    summary: {
      essential:
        'An object moving past you is shorter along its direction of travel than it is when at rest. Sideways dimensions are unaffected. The shrinking factor is the same γ that slows the clock.',
      detailed:
        'Length contraction is what keeps the two descriptions of the same experiment consistent. Where the Earth-based observer explains the muon’s survival by its slowed clock, the muon explains it by the atmosphere being thinner — and both get the same answer.',
      technical:
        'L = L₀/γ, with L₀ the proper length measured in the object’s rest frame. Only the component along the boost direction contracts.',
    },
    glossaryTerms: [glossaryTermId('lorentz-factor')],
    related: [
      topicId('time-dilation'),
      topicId('relativity-of-simultaneity'),
      topicId('spacetime'),
    ],
    blocks: [
      {
        id: 'what',
        kind: 'prose',
        text: {
          essential:
            'Measure a rod as it flies past and you get a shorter number than its owner does. At half light speed it is 87% of its rest length; at 0.9c, 44%; at 0.99c, 14%. Its height and width are untouched.',
          detailed:
            'Measuring the length of something moving means noting where both ends are *at the same moment* — and that is precisely the operation on which observers in relative motion disagree. Length contraction is not a separate postulate; it is the relativity of simultaneity applied to a measurement of distance.',
        },
      },
      {
        id: 'viz-contraction',
        kind: 'visualization',
        visualizationId: visualizationId('length-contraction'),
      },
      {
        id: 'claim-consistency',
        kind: 'claim',
        statement: {
          essential:
            'The muon that reaches the ground is the proof. From the ground, its clock ran slow. From the muon, its clock ran normally and the 15 kilometres of atmosphere were squashed to a few hundred metres. Both descriptions predict the same number of muons arriving.',
          detailed:
            'This is the standard test of whether a relativistic argument has been done correctly: two frames must always agree about anything that can actually be observed. They may disagree about durations and distances; they may not disagree about whether the muon hit the detector. At γ = 22 the 15 km column contracts to about 680 m, which a muon covers well within its ordinary 2.2 μs lifetime.',
          technical:
            'The two accounts are related by the Lorentz transformation, not by coincidence. Any quantity that is frame-independent — a count of detections, a proper time, a spacetime interval — comes out identical in both.',
        },
        evidence: 'established',
        references: [
          referenceId('frisch-smith-1963-muons'),
          referenceId('taylor-wheeler-1992-spacetime'),
        ],
      },
      {
        id: 'symmetry',
        kind: 'callout',
        tone: 'misconception',
        title: '“So who is really shorter?”',
        text: {
          essential:
            'Both, each according to the other. If two identical rockets pass at high speed, each crew measures the other’s ship as the shorter one. That is not a contradiction, because the two measurements are made at different pairs of events: each crew is checking where the other ship’s nose and tail are "at the same time", and they mean different things by that phrase.',
        },
        references: [referenceId('einstein-1905-sr')],
      },
      {
        id: 'practical',
        kind: 'prose',
        text: {
          essential:
            'This has practical consequences. In a particle accelerator, a beam of protons at 0.999999991 of light speed is squeezed to a fraction of its rest length, which changes how bunches of particles interact and has to be designed for.',
          detailed:
            'Engineers of relativistic machines cannot treat these effects as philosophy. Beam optics, synchrotron radiation, the timing of accelerating cavities and the design of detectors all assume relativistic kinematics; a machine built on Newtonian mechanics would not steer its beam at all.',
        },
      },
    ],
    furtherReading: [
      referenceId('taylor-wheeler-1992-spacetime'),
      referenceId('frisch-smith-1963-muons'),
    ],
  },

  {
    id: topicId('mass-energy-equivalence'),
    slug: 'mass-energy',
    sectionId: RELATIVITY,
    order: 6,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Mass and energy',
    subtitle: 'E = mc² — what it actually claims, and what it does not.',
    summary: {
      essential:
        'Mass and energy are the same thing measured in different units. A tiny amount of mass corresponds to an enormous amount of energy, because the conversion factor is the speed of light squared.',
      detailed:
        'The equation is a statement about what mass *is*, not a recipe for extracting energy. Most of the mass of everyday matter is not particle masses at all — it is the energy of the interactions binding quarks inside protons.',
      technical:
        'E² = (pc)² + (mc²)², with E = mc² the special case for a body at rest. m is the invariant rest mass; the older idea of "relativistic mass" growing with speed is a bookkeeping device modern practice avoids.',
    },
    related: [topicId('time-dilation'), topicId('nucleosynthesis'), topicId('testing-relativity')],
    blocks: [
      {
        id: 'what-it-says',
        kind: 'prose',
        text: {
          essential:
            'A body at rest has energy simply for existing, and the amount is its mass times c². Because c² is about 9 × 10¹⁶ in SI units, one gram corresponds to roughly 90 terajoules — comparable to a 21-kilotonne explosion.',
          detailed:
            'Einstein derived it in a three-page follow-up to the 1905 relativity paper, by considering a body emitting light in two opposite directions and asking what happens to its mass. The conclusion was that emitting energy L reduces the body’s mass by L/c². It was, in his own framing, a question rather than an announcement: the paper’s title asks whether the inertia of a body depends on its energy content.',
        },
      },
      {
        id: 'viz-mass-energy',
        kind: 'visualization',
        visualizationId: visualizationId('mass-energy'),
      },
      {
        id: 'claim-not-a-recipe',
        kind: 'claim',
        statement: {
          essential:
            'The equation does not say mass can easily be turned into energy. Complete conversion requires antimatter. Nuclear fission releases about a thousandth of the mass-energy available; burning petrol releases about a billionth.',
          detailed:
            'What nuclear reactions convert is binding energy, not the particles themselves. In fission, the fragments together weigh about 0.1% less than the original nucleus, and that difference appears as energy. In fusion in the Sun, four hydrogen nuclei become one helium nucleus about 0.7% lighter. The particles are rearranged, not annihilated, and the mass deficit is what is released.',
          technical:
            'The Sun radiates 3.828 × 10²⁶ W, which by E = mc² corresponds to converting about 4.26 million tonnes of mass into energy every second — while consuming roughly 600 million tonnes of hydrogen per second to do it.',
        },
        evidence: 'established',
        references: [referenceId('einstein-1905-inertia'), referenceId('pdg-2024')],
      },
      {
        id: 'claim-most-mass',
        kind: 'claim',
        statement: {
          essential:
            'Almost all of your mass is energy already. The quarks inside a proton account for about 1% of its mass; the rest is the energy of the force field binding them together.',
          detailed:
            'A proton weighs 938 MeV/c². Its three valence quarks contribute only around 9 MeV/c² of intrinsic mass. The remainder is the kinetic energy of the quarks and the energy stored in the gluon field — which is to say, mass is largely what confined energy looks like from outside. Understood this way, E = mc² is not a strange conversion between two substances; it is the observation that they were never two substances.',
        },
        evidence: 'established',
        references: [referenceId('pdg-2024')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'kg-energy',
            label: 'Energy equivalent of one kilogram',
            value: 8.9875517874e16,
            unit: 'J',
            context:
              'Exact, because c is exact by definition. Equivalent to about 21.5 megatonnes of TNT — roughly a large thermonuclear weapon.',
            references: [referenceId('codata-2018')],
          },
          {
            id: 'sun-mass-loss',
            label: 'Mass the Sun converts to energy each second',
            value: 4.26,
            unit: 'million tonnes/s',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Calculated from the measured solar luminosity divided by c². The Sun has lost about 0.03% of its mass this way over its lifetime.',
            references: [referenceId('codata-2018'), referenceId('nasa-planetary-factsheet')],
          },
        ],
      },
      {
        id: 'relativistic-mass',
        kind: 'callout',
        tone: 'caution',
        title: 'Mass does not increase with speed',
        text: {
          essential:
            'Older books say a moving object gets heavier. Modern practice does not: mass is the invariant that every observer agrees on, and what grows with speed is energy and momentum. The difference is bookkeeping rather than physics, but the modern convention avoids a real trap — a fast particle does not develop extra gravitational pull, and it certainly does not turn into a black hole no matter how fast it goes.',
        },
        references: [referenceId('pdg-2024')],
      },
    ],
    furtherReading: [referenceId('einstein-1905-inertia'), referenceId('pdg-2024')],
  },

  {
    id: topicId('spacetime'),
    slug: 'spacetime',
    sectionId: RELATIVITY,
    order: 7,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Spacetime',
    subtitle: 'Not space and time separately, but one four-dimensional geometry.',
    summary: {
      essential:
        'Observers disagree about distances and about durations — but they always agree about one combination of the two. That combination is the real geometry, and space and time are just two ways of slicing it.',
      detailed:
        'Minkowski’s reformulation in 1908 turned special relativity from a set of surprising corrections into geometry. It is also the step that made general relativity possible: once spacetime is a geometry, gravity can be a property of that geometry.',
      technical:
        'The invariant interval s² = (cΔt)² − Δx² − Δy² − Δz² plays the role that distance plays in Euclidean geometry, with the crucial minus sign that separates timelike, lightlike and spacelike separations.',
    },
    glossaryTerms: [glossaryTermId('spacetime'), glossaryTermId('light-cone')],
    related: [
      topicId('special-relativity'),
      topicId('curved-spacetime'),
      topicId('relativity-of-simultaneity'),
    ],
    blocks: [
      {
        id: 'invariant',
        kind: 'prose',
        text: {
          essential:
            'Two observers measure the gap between two events. They get different distances and different times. But if each takes the time, multiplies by c, squares it, and subtracts the square of the distance, they get exactly the same number — every time.',
          detailed:
            'That number is the spacetime interval, and its invariance is the single fact from which all of special relativity can be rebuilt. It plays the role that length plays in ordinary geometry: rotating a ruler changes how much of it points north and how much points east, but not how long it is. A change of velocity does the same thing to time and space.',
          technical:
            's² = (cΔt)² − Δx². The minus sign is not a technicality — it is what makes the geometry Lorentzian rather than Euclidean, and it is why boosts are hyperbolic rotations with no maximum angle, rather than circular rotations that come back round.',
        },
      },
      {
        id: 'viz-spacetime',
        kind: 'visualization',
        visualizationId: visualizationId('spacetime-diagram'),
      },
      {
        id: 'claim-minkowski',
        kind: 'claim',
        statement: {
          essential:
            'Space and time are not two separate arenas that happen to be linked. They are two directions in one four-dimensional structure, and how you divide it into "space" and "time" depends on how you are moving.',
          detailed:
            'Minkowski put it in 1908 with unusual confidence for a mathematician: space by itself and time by itself were destined to fade to shadows, and only a union of the two would keep an independent reality. That was not rhetoric — it was the observation that Einstein’s transformations are exactly the symmetries of a four-dimensional geometry with one minus sign.',
          technical:
            'The Lorentz group is the isometry group of Minkowski spacetime, in the same way the rotation group is the isometry group of Euclidean space. Every kinematic result of special relativity becomes a statement about invariants of that geometry.',
        },
        evidence: 'model',
        references: [
          referenceId('minkowski-1952-space-and-time'),
          referenceId('taylor-wheeler-1992-spacetime'),
        ],
      },
      {
        id: 'definition-light-cone',
        kind: 'definition',
        termId: glossaryTermId('light-cone'),
      },
      {
        id: 'worldlines',
        kind: 'prose',
        text: {
          essential:
            'In this picture nothing "moves through" spacetime — each object simply *is* a line in it, called a worldline, running from its beginning to its end. Sitting still is a straight vertical line. Travelling is a tilted one. And the length of that line, measured in the geometry, is the time you personally experience.',
          detailed:
            'This is the cleanest way to think about the twin puzzle: two worldlines between the same pair of events have different lengths, and the twins age by their own lengths. It is also the setup general relativity needs — once the geometry can be curved, "the straightest available worldline" becomes the definition of free fall.',
        },
      },
      {
        id: 'cross-curved',
        kind: 'cross-link',
        topicId: topicId('curved-spacetime'),
        rationale: 'What happens when this geometry stops being flat.',
      },
    ],
    furtherReading: [
      referenceId('minkowski-1952-space-and-time'),
      referenceId('taylor-wheeler-1992-spacetime'),
    ],
  },
];
