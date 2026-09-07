/**
 * Black holes — the structure of the exterior.
 *
 * These four topics cover what is actually there to look at: the Schwarzschild
 * geometry, the rotating Kerr geometry with its ergosphere and frame dragging,
 * the photon sphere and the shadow it casts, and the tidal field — the one
 * thing near a black hole that an observer can feel locally.
 *
 * The shadow topic carries the section's most easily overstated claim, so it
 * states the constraint plainly: the EHT images show light from material around
 * the black hole, and the dark centre is a lensing shadow substantially larger
 * than the horizon. The horizon itself has not been photographed and cannot be.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const BLACK_HOLES = sectionId('black-holes');
const REVIEWED = '2026-09-07';

export const BLACK_HOLE_ANATOMY_TOPICS: readonly Topic[] = [
  {
    id: topicId('schwarzschild-black-holes'),
    slug: 'schwarzschild-black-holes',
    sectionId: BLACK_HOLES,
    order: 7,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Schwarzschild black holes',
    subtitle: 'The simplest case: no spin, no charge, and four radii worth knowing.',
    summary: {
      essential:
        'A Schwarzschild black hole is the idealised non-rotating case. It has one parameter — mass — and everything about its exterior follows from it: the horizon at 2GM/c², the photon sphere at 1.5 times that, and the innermost stable circular orbit at three times that.',
      detailed:
        'No real black hole is exactly Schwarzschild, since anything formed from collapsing or accreting matter carries angular momentum. The solution is still the right starting point: it is exact, it is simple enough to reason about, and its structure survives qualitatively in the rotating case. The radii it defines are the ones that matter observationally.',
      technical:
        'ds² = −(1 − r_s/r)c²dt² + (1 − r_s/r)⁻¹dr² + r²dΩ², with r_s = 2GM/c². Circular photon orbits at r = 1.5 r_s, ISCO at r = 3 r_s, and shadow angular radius √27 GM/c² = 2.6 r_s for a distant observer.',
    },
    glossaryTerms: [
      glossaryTermId('schwarzschild-radius'),
      glossaryTermId('photon-sphere'),
      glossaryTermId('event-horizon'),
    ],
    related: [
      topicId('event-horizon'),
      topicId('rotating-black-holes'),
      topicId('photon-sphere-and-shadow'),
    ],
    blocks: [
      {
        id: 'one-number',
        kind: 'prose',
        text: {
          essential:
            'The Schwarzschild solution describes a black hole with no spin and no charge. That makes it a one-parameter object: give it a mass and everything else is fixed. No black hole in the sky is exactly like this, but nearly every argument about black holes starts here, because the geometry is exact and simple enough to hold in your head.',
          detailed:
            'It is worth appreciating how unusual that is. In most of physics, an exact solution for a realistic system does not exist. Here, one of the most extreme objects in the Universe has an exact, closed-form description, found within months of the theory being written down, containing a single number.',
        },
      },
      {
        id: 'four-radii',
        kind: 'prose',
        text: {
          essential:
            'Four radii are worth knowing, all of them multiples of the same quantity. The horizon sits at r_s = 2GM/c². The photon sphere, where light can orbit, is at 1.5 r_s. The innermost stable circular orbit — the closest a bit of gas can circle without spiralling in — is at 3 r_s. And the shadow a distant telescope sees has an apparent radius of about 2.6 r_s, because of how strongly light is bent on its way out.',
          detailed:
            'Two of these deserve a second look. The ISCO exists because in general relativity, unlike in Newtonian gravity, circular orbits below a certain radius are unstable: nudge one inward and it does not settle into a slightly smaller circle, it spirals in. That radius sets the inner edge of an accretion disc, and therefore how hot the disc gets and how efficiently the black hole converts mass into light. The shadow is larger than the horizon because rays that would have missed the black hole in flat space are bent into it.',
          technical:
            'The ISCO follows from the effective potential V(r) = (1 − r_s/r)(1 + L²/r²c²), whose innermost stable extremum sits at r = 3 r_s = 6GM/c². The photon sphere at 1.5 r_s is an unstable circular null geodesic: the impact parameter b = √27 GM/c² separates capture from escape, and that value is exactly the shadow radius seen at infinity.',
        },
      },
      {
        id: 'viz-anatomy',
        kind: 'visualization',
        visualizationId: visualizationId('black-hole-anatomy'),
      },
      {
        id: 'claim-density',
        kind: 'claim',
        statement: {
          essential:
            'Because the horizon radius is proportional to mass, average density inside the horizon falls as black holes get bigger. A supermassive black hole is not a dense object in any everyday sense.',
          detailed:
            'Mass divided by the volume of a sphere of radius 2GM/c² scales as 1/M². A stellar-mass black hole of ten solar masses has a mean density around 2 × 10¹⁷ kg/m³, comparable to an atomic nucleus. Sgr A*, at 4.3 million solar masses, comes out around 10⁶ kg/m³ — a thousand times denser than water, but a hundred billion times thinner than the stellar-mass case. M87*, at 6.5 billion solar masses, is around 0.4 kg/m³, thinner than the air in a room. The density is not a statement about anything physically located there; it is mass divided by the volume the horizon encloses.',
          technical:
            'ρ̄ = 3c⁶/(32πG³M²). The scaling means that for a sufficiently large mass, a horizon can enclose a region of arbitrarily low mean density — which is one way of seeing that a horizon is a causal boundary rather than a material surface.',
        },
        evidence: 'established',
        references: [referenceId('schwarzschild-1916'), referenceId('eht-2019-m87')],
      },
      {
        id: 'idealisation',
        kind: 'callout',
        tone: 'caution',
        title: 'An idealisation, and a good one',
        text: {
          essential:
            'Every astrophysical black hole rotates, because everything that forms it rotates and angular momentum is conserved. The Schwarzschild solution is therefore never exactly right. It remains useful because the qualitative structure — horizon, photon sphere, innermost stable orbit — carries over, and because for slowly spinning black holes the numerical corrections are modest.',
          detailed:
            'For a rapidly spinning black hole they are not modest at all: the ISCO can shrink from 3 r_s to about 0.6 r_s, which raises accretion efficiency by more than a factor of five. Anywhere spin matters, the Kerr solution is the one to use.',
        },
        references: [referenceId('kerr-1963')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'photon-sphere-radius',
            label: 'Photon sphere radius',
            value: 1.5,
            unit: '× r_s',
            context:
              'Where light can travel in a circular orbit around a non-rotating black hole. The orbit is unstable: a photon there either escapes or falls in.',
            references: [referenceId('hartle-2003-gravity')],
          },
          {
            id: 'isco-radius',
            label: 'Innermost stable circular orbit',
            value: 3,
            unit: '× r_s',
            context:
              'The inner edge of an accretion disc around a non-rotating black hole. For a maximally spinning one it moves inward to about 0.5 r_s for prograde orbits.',
            references: [referenceId('shakura-sunyaev-1973')],
          },
          {
            id: 'shadow-radius',
            label: 'Apparent shadow radius seen from far away',
            value: 2.6,
            unit: '× r_s',
            context:
              'The dark region a distant observer sees, equal to √27 GM/c². It is larger than the horizon because gravity bends into the hole rays that would otherwise have missed it.',
            references: [referenceId('eht-2019-v-physical-origin')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('schwarzschild-1916'),
      referenceId('hartle-2003-gravity'),
      referenceId('misner-thorne-wheeler-1973'),
    ],
  },

  {
    id: topicId('rotating-black-holes'),
    slug: 'rotating-black-holes',
    sectionId: BLACK_HOLES,
    order: 8,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Rotating black holes and frame dragging',
    subtitle: 'Spin drags spacetime around with it — and every real black hole spins.',
    summary: {
      essential:
        'Roy Kerr found the solution for a rotating black hole in 1963. Spin adds a second parameter and a new region: the ergosphere, outside the horizon, where spacetime is dragged around so hard that standing still is impossible. Energy can be extracted from there, which is thought to be what powers relativistic jets.',
      detailed:
        'Frame dragging is a general prediction of rotating masses — Gravity Probe B measured it around the Earth, at a rate of about 37 milliarcseconds per year. Near a rapidly spinning black hole it dominates. Spin also moves the innermost stable orbit inward, which raises the efficiency with which accreting matter converts rest mass into radiation from about 6% to as much as 42%.',
      technical:
        'Writing M in geometric units, the Kerr solution has parameters M and a = J/Mc with |a| ≤ M, an outer horizon at r₊ = M + √(M² − a²), and a static limit at r_E(θ) = M + √(M² − a²cos²θ). The region between them is the ergosphere; it touches the horizon only at the poles.',
    },
    glossaryTerms: [
      glossaryTermId('ergosphere'),
      glossaryTermId('frame-dragging'),
      glossaryTermId('event-horizon'),
    ],
    related: [
      topicId('schwarzschild-black-holes'),
      topicId('relativistic-jets'),
      topicId('accretion-disks'),
    ],
    blocks: [
      {
        id: 'everything-spins',
        kind: 'prose',
        text: {
          essential:
            'Everything in the Universe rotates, and angular momentum is conserved. A stellar core that was turning slowly while it was a million kilometres across is turning very fast indeed once it is thirty kilometres across. Every real black hole spins, and many spin close to the maximum the theory allows.',
          detailed:
            'The maximum is not arbitrary. Beyond a certain spin the Kerr solution has no horizon at all, leaving a "naked singularity" exposed to the outside Universe. Whether nature permits that is an open question — Penrose’s cosmic censorship conjecture says it does not, and it remains unproven. Measured spins cluster below the limit, some at 90% or more of it.',
        },
      },
      {
        id: 'claim-frame-dragging',
        kind: 'claim',
        statement: {
          essential:
            'A rotating mass drags spacetime around with it. Near a spinning black hole the dragging is so strong that within a region called the ergosphere, nothing can stand still relative to the distant stars — no matter how powerful its engines.',
          detailed:
            'Frame dragging, or the Lense–Thirring effect, is a general prediction: any rotating mass twists the spacetime around it. Around the Earth the effect is tiny, and Gravity Probe B measured it in 2011 at about 37 milliarcseconds per year using gyroscopes in polar orbit. Around a rapidly spinning black hole it is overwhelming. The ergosphere is the region outside the horizon where the dragging exceeds the speed of light for a stationary observer — you can still escape from there, but you cannot avoid being carried around.',
          technical:
            'The Kerr metric’s cross term g_tφ produces a non-zero angular velocity ω = −g_tφ/g_φφ for zero-angular-momentum observers. The static limit surface where g_tt = 0 lies outside the horizon everywhere except at the poles, and the region between them — the ergosphere — admits negative-energy orbits, which is the basis of the Penrose process.',
        },
        evidence: 'established',
        references: [referenceId('kerr-1963'), referenceId('everitt-2011-gravity-probe-b')],
      },
      {
        id: 'viz-frame-dragging',
        kind: 'visualization',
        visualizationId: visualizationId('frame-dragging'),
      },
      {
        id: 'def-ergosphere',
        kind: 'definition',
        termId: glossaryTermId('ergosphere'),
      },
      {
        id: 'claim-energy',
        kind: 'claim',
        statement: {
          essential:
            'Energy can be extracted from a spinning black hole. Not from inside the horizon — nothing comes out of there — but from the rotational energy stored in the dragged spacetime outside it.',
          detailed:
            'Penrose showed in 1969 that an object entering the ergosphere and splitting in two, with one part falling in on a carefully chosen trajectory, can send the other part out with more energy than the original had. The black hole pays, by spinning down. The astrophysically important version is electromagnetic rather than mechanical: Blandford and Znajek showed in 1977 that magnetic fields threading the horizon of a spinning black hole can carry rotational energy outward, and this is the leading explanation for relativistic jets.',
          technical:
            'Up to 29% of a maximally rotating black hole’s total mass-energy is in its rotation and is in principle extractable, bounded by the irreducible mass M_irr = √(A c⁴/16πG²). The Blandford–Znajek power scales as Φ²Ω_H², with Φ the magnetic flux threading the horizon; general-relativistic magnetohydrodynamic simulations reproduce jet powers exceeding the accretion luminosity, which requires tapping spin rather than accretion.',
        },
        evidence: 'model',
        references: [referenceId('blandford-znajek-1977'), referenceId('kerr-1963')],
      },
      {
        id: 'spin-matters',
        kind: 'callout',
        tone: 'note',
        title: 'Why spin changes what you see',
        text: {
          essential:
            'Spin moves the innermost stable circular orbit inward — from 3 Schwarzschild radii for a non-rotating black hole to about 0.5 for a maximally spinning one, in the direction of rotation. Gas can therefore orbit closer, fall from deeper, and radiate more of its rest mass before crossing the horizon: efficiency rises from about 6% to roughly 32% at the a = 0.998 ceiling realistic accretion is thought to reach, and 42% in the limit of maximal spin. For comparison, hydrogen fusion converts 0.7%.',
          detailed:
            'This is measurable. Fitting the thermal continuum of an accretion disc, or the shape of the relativistically broadened iron K-α emission line, gives an inner disc radius and hence a spin. The measurements are model-dependent and the two methods do not always agree, but a good number of stellar-mass and supermassive black holes now have spin estimates, several close to the theoretical maximum.',
        },
        references: [referenceId('remillard-mcclintock-2006'), referenceId('shakura-sunyaev-1973')],
      },
      {
        id: 'link-jets',
        kind: 'cross-link',
        topicId: topicId('relativistic-jets'),
        rationale: 'Where the extracted rotational energy is thought to go.',
      },
    ],
    furtherReading: [
      referenceId('kerr-1963'),
      referenceId('blandford-znajek-1977'),
      referenceId('everitt-2011-gravity-probe-b'),
    ],
  },

  {
    id: topicId('photon-sphere-and-shadow'),
    slug: 'photon-sphere-and-shadow',
    sectionId: BLACK_HOLES,
    order: 12,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The photon sphere and the shadow',
    subtitle: 'Where light orbits, and what a telescope actually sees.',
    summary: {
      essential:
        'At 1.5 Schwarzschild radii, gravity bends light exactly enough that a photon can orbit the black hole. That unstable orbit is the photon sphere, and it is what produces the bright ring and dark centre in the Event Horizon Telescope images.',
      detailed:
        'The dark region — the shadow — is about 2.6 Schwarzschild radii in apparent radius, substantially larger than the horizon, because gravity bends into the hole rays that would otherwise have missed it. The ring is light from material behind and around the black hole, lensed toward us. Neither is a picture of the horizon, and no telescope can take one.',
    },
    glossaryTerms: [glossaryTermId('photon-sphere'), glossaryTermId('event-horizon')],
    related: [
      topicId('gravitational-lensing'),
      topicId('schwarzschild-black-holes'),
      topicId('detecting-black-holes'),
    ],
    blocks: [
      {
        id: 'light-can-orbit',
        kind: 'prose',
        text: {
          essential:
            'Light travels in straight lines through flat spacetime. Curve the spacetime enough and the straightest available path becomes a circle. At 1.5 Schwarzschild radii from a non-rotating black hole, that is exactly what happens: a photon aimed just right will orbit.',
          detailed:
            'The orbit is unstable, which matters. Nudge the photon inward and it spirals in; nudge it outward and it spirals away. Nothing accumulates at the photon sphere and it is not a visible surface. What it does is act as a divider: the impact parameter that puts a photon exactly on that orbit separates rays that escape from rays that are captured, and that dividing line is what a distant observer sees as the edge of the shadow.',
        },
      },
      {
        id: 'viz-photon-orbits',
        kind: 'visualization',
        visualizationId: visualizationId('photon-orbits'),
      },
      {
        id: 'def-photon-sphere',
        kind: 'definition',
        termId: glossaryTermId('photon-sphere'),
      },
      {
        id: 'claim-shadow',
        kind: 'claim',
        statement: {
          essential:
            'The dark central region in an image of a black hole is called the shadow. It is about 2.6 Schwarzschild radii in apparent radius — roughly five times larger than the horizon in diameter — because light that would have passed by is bent inward and captured.',
          detailed:
            'Work backwards from the telescope. Every pixel corresponds to a ray; trace it back and ask where it came from. Rays with a large impact parameter came from distant sky. Rays with a small enough impact parameter came from the horizon, and the horizon emits nothing, so those pixels are dark. The critical value is b = √27 GM/c² = 2.6 r_s. Around the edge of that dark region, rays that looped one or more times around the photon sphere pile up into a thin bright ring.',
          technical:
            'For Kerr the shadow is not circular: frame dragging displaces and flattens it on the side rotating toward the observer, though the deviation from circularity remains under 4% for all spins when viewed near the equatorial plane, which is why the EHT circularity constraint alone does not measure spin.',
        },
        evidence: 'established',
        references: [referenceId('eht-2019-v-physical-origin'), referenceId('eht-2019-m87')],
      },
      {
        id: 'not-a-photograph',
        kind: 'callout',
        tone: 'caution',
        title: 'What the EHT images do and do not show',
        text: {
          essential:
            'The 2019 image of M87* and the 2022 image of Sgr A* show radio emission from hot plasma orbiting and falling toward the black hole, bent by gravity on its way to us. The dark centre is the shadow — the region where captured rays leave no light — and it is substantially larger than the event horizon. The horizon has not been photographed. It emits nothing, and it never will be photographed.',
          detailed:
            'Two further caveats belong with the images. They are reconstructions from very sparse interferometric data across a handful of telescopes, produced with several independent imaging pipelines specifically so the result would not depend on one team’s assumptions; the bright ring is robust across those pipelines, finer structure is not. And they are not snapshots: Sgr A* varies on timescales of minutes, comparable to the observation, so the published image is a time-average of a changing source. What the images establish is a compact, dark, ring-forming object of the right angular size — powerful evidence, honestly bounded.',
        },
        references: [referenceId('eht-2019-m87'), referenceId('eht-2022-sgr-a')],
      },
      {
        id: 'viz-shadow',
        kind: 'visualization',
        visualizationId: visualizationId('black-hole-shadow'),
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'm87-shadow',
            label: 'Angular diameter of M87*’s ring',
            value: 42,
            unit: 'µas',
            uncertainty: { plusMinus: 3 },
            context:
              'Measured by the Event Horizon Telescope in 2017 observations, published 2019. Equivalent to resolving an orange on the surface of the Moon.',
            references: [referenceId('eht-2019-m87')],
          },
          {
            id: 'sgra-shadow',
            label: 'Angular diameter of Sgr A*’s ring',
            value: 51.8,
            unit: 'µas',
            uncertainty: { plusMinus: 2.3 },
            context:
              'Published 2022. Sgr A* is a thousand times less massive than M87* but two thousand times closer, so the two appear almost the same size from Earth.',
            references: [referenceId('eht-2022-sgr-a')],
          },
        ],
      },
      {
        id: 'link-lensing',
        kind: 'cross-link',
        topicId: topicId('gravitational-lensing'),
        rationale:
          'The same bending of light, in the weak-field regime where it was first measured.',
      },
    ],
    furtherReading: [
      referenceId('eht-2019-m87'),
      referenceId('eht-2019-v-physical-origin'),
      referenceId('eht-2022-sgr-a'),
    ],
  },

  {
    id: topicId('tidal-forces-black-holes'),
    slug: 'tidal-forces-and-spaghettification',
    sectionId: BLACK_HOLES,
    order: 11,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Tidal forces and spaghettification',
    subtitle: 'The one thing you could actually feel — and it is worse for small black holes.',
    summary: {
      essential:
        'Gravity pulls your feet harder than your head, and near a black hole that difference becomes lethal: you are stretched lengthwise and squeezed sideways. The counter-intuitive part is that small black holes are more dangerous at the horizon than large ones.',
      detailed:
        'Tidal stretching is the same physics as ocean tides, scaled up. Because the effect depends on the gradient of the field rather than its strength, it falls off as 1/r³, and at a black hole’s horizon — where r is proportional to M — it scales as 1/M². Crossing the horizon of a ten-solar-mass black hole would tear a human apart long before the crossing; crossing M87*’s would be imperceptible.',
    },
    glossaryTerms: [glossaryTermId('tidal-force'), glossaryTermId('spaghettification')],
    related: [topicId('tides'), topicId('event-horizon'), topicId('detecting-black-holes')],
    blocks: [
      {
        id: 'same-as-tides',
        kind: 'prose',
        text: {
          essential:
            'This is the physics of ocean tides, taken to an extreme. Gravity is stronger closer in, so an extended body feels a stronger pull at its near end than its far end. The difference stretches it along the direction of the pull and squeezes it across — which is exactly why Earth has two tidal bulges rather than one.',
          detailed:
            'It follows that a freely falling observer cannot feel gravity but can feel its gradient. In a small enough region, free fall is indistinguishable from floating in empty space; that is the equivalence principle. Over an extended body, the field varies, and the residual is what curvature actually is. Tidal force is the locally measurable signature of spacetime curvature — the one thing near a black hole that cannot be transformed away by choosing a frame.',
        },
      },
      {
        id: 'viz-tidal',
        kind: 'visualization',
        visualizationId: visualizationId('tidal-stretching'),
      },
      {
        id: 'claim-scaling',
        kind: 'claim',
        statement: {
          essential:
            'Tidal force at the horizon scales as 1/M². A small black hole would shred you far outside its horizon; a supermassive one would let you cross without noticing.',
          detailed:
            'The tidal acceleration across a body of length L at distance r goes as 2GML/r³. At the horizon, r = 2GM/c², so substituting gives a result proportional to c⁶L/G²M² — inversely proportional to the square of the mass. For a ten-solar-mass black hole the stretching across a two-metre human at the horizon is about 2 × 10⁷ g, and it becomes fatal roughly 800 kilometres out — some 27 horizon radii, so nobody reaches that horizon intact. For M87* at 6.5 billion solar masses the same figure at the horizon is around 5 × 10⁻¹¹ g, which is nothing. Nothing else about the crossing would be noticeable either: the horizon has no local signature.',
          technical:
            'The relevant curvature component in a freely falling frame is R^r_trt = −2GM/r³c², giving Δa = 2GMΔr/r³. Evaluated at r_s this is c⁶Δr/(4G²M²). For a 10 M☉ hole, whose horizon sits at 29.5 km, the stretch across a two-metre body at the horizon is 2.1 × 10⁸ m/s²; taking roughly 10⁴ m/s² as the disruption threshold puts the lethal radius at about 810 km, or 27 r_s.',
        },
        evidence: 'established',
        references: [referenceId('misner-thorne-wheeler-1973'), referenceId('hartle-2003-gravity')],
      },
      {
        id: 'observed',
        kind: 'claim',
        statement: {
          essential:
            'Spaghettification is not only theoretical. Stars that wander too close to a supermassive black hole are torn apart, and the resulting flare — a tidal disruption event — has been observed dozens of times.',
          detailed:
            'The star is stretched until it is unbound, roughly half of the debris escapes and half falls back, and the returning stream forms a temporary accretion flow that brightens the galaxy’s nucleus for months to years with a characteristic decline. The rate at which the flare fades follows a distinctive power law derived from how the debris returns. These events are how some otherwise quiet supermassive black holes are discovered at all.',
          technical:
            'Disruption occurs inside the tidal radius r_t ≈ R★(M_BH/M★)^(1/3); the fallback rate follows dM/dt ∝ t^(−5/3) at late times. Because r_t grows only as M_BH^(1/3) while r_s grows as M_BH, a solar-type star is swallowed whole rather than disrupted above roughly 10⁸ solar masses — one of the few places where the horizon size has a directly observable consequence.',
        },
        evidence: 'established',
        references: [referenceId('kormendy-ho-2013'), referenceId('remillard-mcclintock-2006')],
      },
      {
        id: 'not-suction',
        kind: 'callout',
        tone: 'misconception',
        title: 'Stretching is not pulling harder',
        text: {
          essential:
            'Spaghettification is often described as the black hole "pulling your feet harder than your head", which is right, and then as evidence that its pull is enormous, which does not follow. What matters is the difference across your body, not the total. You could be in free fall in a gravitational field a trillion times Earth’s and feel nothing at all, provided the field were uniform enough across you.',
        },
        references: [referenceId('misner-thorne-wheeler-1973')],
      },
      {
        id: 'link-tides',
        kind: 'cross-link',
        topicId: topicId('tides'),
        rationale:
          'The same gradient effect, at the scale where it moves oceans instead of people.',
      },
    ],
    furtherReading: [referenceId('misner-thorne-wheeler-1973'), referenceId('hartle-2003-gravity')],
  },
];
