/**
 * Black holes — what surrounds them, and how big they come.
 *
 * The through-line of this file is that everything we see of a black hole is
 * something else: gas, magnetic fields, stars, jets. The black hole itself is
 * the one part of the picture that emits nothing, and every topic here says so
 * rather than letting the imagery imply otherwise.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const BLACK_HOLES = sectionId('black-holes');
const REVIEWED = '2026-09-07';

export const BLACK_HOLE_ENVIRONMENT_TOPICS: readonly Topic[] = [
  {
    id: topicId('accretion-disks'),
    slug: 'accretion-discs',
    sectionId: BLACK_HOLES,
    order: 9,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Accretion discs: why black holes are bright',
    subtitle: 'The most efficient energy source in the Universe, and none of the light is theirs.',
    summary: {
      essential:
        'Gas falling toward a black hole cannot fall straight in — it has angular momentum, so it settles into an orbiting disc. Friction inside the disc heats it to millions of kelvin, and it radiates. Accretion converts up to 42% of infalling rest mass into light; fusion manages 0.7%.',
      detailed:
        'The mechanism matters: friction lets a parcel of gas shed angular momentum and spiral inward, releasing gravitational potential energy as heat, which is then radiated. The inner edge of the disc is set by the innermost stable circular orbit, which depends on spin, and that is what makes efficiency spin-dependent. The light comes entirely from the gas. The black hole itself emits nothing.',
    },
    glossaryTerms: [glossaryTermId('accretion-disc'), glossaryTermId('event-horizon')],
    related: [
      topicId('rotating-black-holes'),
      topicId('relativistic-jets'),
      topicId('supermassive-black-holes'),
    ],
    blocks: [
      {
        id: 'why-a-disc',
        kind: 'prose',
        text: {
          essential:
            'Gas approaching a black hole almost never heads straight at it. Anything with sideways motion — which is everything — goes into orbit instead. Collisions between orbits flatten the flow into a disc, in the same way and for the same reason that the Solar System and the Milky Way are flat.',
          detailed:
            'Once a disc has formed, the question is how anything gets in at all. Orbits are stable; a parcel of gas in a circular orbit stays there. What breaks the stalemate is friction between neighbouring rings, which orbit at different speeds — inner faster, outer slower. That friction transfers angular momentum outward and lets the inner material spiral in, converting orbital energy into heat as it goes. The physical origin of the friction is turbulence driven by a magnetic instability, not molecular viscosity, which is far too weak.',
        },
      },
      {
        id: 'viz-disc',
        kind: 'visualization',
        visualizationId: visualizationId('accretion-disc'),
      },
      {
        id: 'claim-efficiency',
        kind: 'claim',
        statement: {
          essential:
            'Accretion onto a black hole is the most efficient sustained energy source known. Between 6% and 42% of the rest mass of infalling matter is radiated away, depending on spin. Hydrogen fusion, which powers stars, converts 0.7%.',
          detailed:
            'The efficiency comes from how deep the gas falls before it is lost. Matter spiralling inward radiates until it reaches the innermost stable circular orbit; past that, it plunges in and takes its remaining energy with it. For a non-rotating black hole the ISCO is at three Schwarzschild radii and the binding energy there is 5.7% of rest mass. For a rapidly rotating one the ISCO moves inward and the figure rises steeply — about 32% at a = 0.998, the spin ceiling realistic accretion is thought to reach, and 42% in the mathematical limit of maximal spin. This is why quasars, powered by accretion onto supermassive black holes, outshine entire galaxies of hundreds of billions of stars.',
          technical:
            'ε = 1 − E_ISCO/mc², giving 0.057 for a = 0, about 0.32 at the Thorne limit a = 0.998 (set by photon capture during accretion), and 0.42 only in the limit a → 1. The standard thin-disc solution of Shakura and Sunyaev parameterises the unknown viscosity as α, with the effective temperature profile T ∝ r^(−3/4) at large radius; the magnetorotational instability supplies the physical transport mechanism.',
        },
        evidence: 'established',
        references: [referenceId('shakura-sunyaev-1973'), referenceId('remillard-mcclintock-2006')],
      },
      {
        id: 'claim-temperature',
        kind: 'claim',
        statement: {
          essential:
            'The disc is hot, and hottest at its inner edge — millions of kelvin around a stellar-mass black hole, which is why they are found as X-ray sources.',
          detailed:
            'The temperature gradient is a direct consequence of how much energy is released per unit area, which rises steeply inward. Around a stellar-mass black hole the inner disc reaches roughly 10⁷ K and peaks in X-rays. Around a supermassive black hole the same physics gives a cooler inner disc — of order 10⁵ K — because the disc is spread over a vastly larger area, so quasars peak in the ultraviolet instead. That mass dependence is one of the ways an accreting object’s mass is estimated from its spectrum alone.',
          technical:
            'For a thin disc, T_max ∝ (Ṁ/M²)^(1/4), so peak temperature falls as M^(−1/4) at fixed Eddington ratio. Stellar-mass systems therefore show a thermal component peaking near 1 keV, while active galactic nuclei show the "big blue bump" in the far ultraviolet.',
        },
        evidence: 'established',
        references: [referenceId('shakura-sunyaev-1973'), referenceId('remillard-mcclintock-2006')],
      },
      {
        id: 'not-its-light',
        kind: 'callout',
        tone: 'misconception',
        title: 'None of the light belongs to the black hole',
        text: {
          essential:
            'Every image of a black hole is an image of something else: gas, plasma, magnetic fields, lensed background. The black hole contributes exactly nothing to the photon count. A black hole with nothing falling into it is invisible, and most black holes in the Galaxy are exactly that — quiet, unfed, and undetected.',
          detailed:
            'This has a consequence that is easy to miss. The brightness of an accreting black hole tells you about the supply of gas, not about the black hole. Sgr A* is a four-million-solar-mass black hole radiating far below its Eddington limit, because very little is falling in; M87*, a thousand times more massive, drives a jet visible across five thousand light years. The difference is what is being fed to them.',
        },
        references: [referenceId('eht-2022-sgr-a')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'accretion-efficiency',
            label: 'Rest-mass to radiation efficiency, non-rotating',
            value: 5.7,
            unit: '%',
            context:
              'Binding energy at the innermost stable circular orbit of a Schwarzschild black hole. Rises to about 42% for a maximally rotating one.',
            references: [referenceId('shakura-sunyaev-1973')],
          },
          {
            id: 'fusion-efficiency',
            label: 'Rest-mass to energy efficiency, hydrogen fusion',
            value: 0.7,
            unit: '%',
            context: 'For comparison: the process that powers every star, at its theoretical best.',
            references: [referenceId('b2fh-1957')],
          },
        ],
      },
      {
        id: 'link-jets',
        kind: 'cross-link',
        topicId: topicId('relativistic-jets'),
        rationale:
          'Some of the infalling material never arrives — it leaves at nearly the speed of light.',
      },
    ],
    furtherReading: [referenceId('shakura-sunyaev-1973'), referenceId('remillard-mcclintock-2006')],
  },

  {
    id: topicId('relativistic-jets'),
    slug: 'relativistic-jets',
    sectionId: BLACK_HOLES,
    order: 10,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Relativistic jets',
    subtitle: 'Some black holes throw matter back out, at 99% of the speed of light.',
    summary: {
      essential:
        'Many accreting black holes launch narrow beams of plasma from their poles, moving at close to the speed of light and extending, in the largest cases, for hundreds of thousands of light years. The energy comes from the accretion flow and from the black hole’s spin, not from inside the horizon.',
      detailed:
        'The leading model is the Blandford–Znajek mechanism: magnetic field lines threading a spinning black hole are twisted by frame dragging, and the resulting electromagnetic stress carries rotational energy outward. Jets are one of the reasons black holes matter to galaxies as a whole — they heat and expel gas, regulating star formation far beyond the black hole’s gravitational reach.',
    },
    glossaryTerms: [glossaryTermId('frame-dragging'), glossaryTermId('accretion-disc')],
    related: [
      topicId('rotating-black-holes'),
      topicId('accretion-disks'),
      topicId('supermassive-black-holes'),
    ],
    blocks: [
      {
        id: 'intro',
        kind: 'prose',
        text: {
          essential:
            'It is a strange fact about the least escapable objects in the Universe that many of them are also spectacular launchers. Jets emerge along the rotation axis, tightly collimated, at speeds of 99% of light and above, and they can travel further than the galaxy that hosts them. The jet of M87 is about five thousand light years long and was photographed in 1918, long before anyone knew what could produce it.',
          detailed:
            'Nothing is escaping from inside the horizon. The material in a jet never crossed it: it was in the accretion flow, and it was accelerated and beamed outward before it could fall in. The energy budget is the puzzle — some jets carry more power than the accretion disc radiates, which means accretion alone cannot be paying for them.',
        },
      },
      {
        id: 'viz-jet',
        kind: 'visualization',
        visualizationId: visualizationId('relativistic-jet'),
      },
      {
        id: 'claim-mechanism',
        kind: 'claim',
        statement: {
          essential:
            'The leading explanation is that magnetic field lines threaded through a spinning black hole are dragged around by the twisting of spacetime, and the resulting magnetic stress flings plasma outward along the rotation axis.',
          detailed:
            'Blandford and Znajek worked this out in 1977. Frame dragging near a rotating black hole winds up any magnetic field anchored in the surrounding plasma; the wound-up field acts like a spring under torsion, transporting energy and angular momentum outward. The black hole spins down slightly in exchange. General-relativistic magnetohydrodynamic simulations reproduce jets this way, and the observed correlation between jet power and inferred spin supports it. The model is well developed and widely accepted, but the details of how jets are collimated and where their particles are accelerated remain under investigation.',
          technical:
            'Jet power scales as P ≈ κ Φ_BH² Ω_H², with Φ_BH the magnetic flux threading the horizon and Ω_H the horizon angular velocity. In the magnetically arrested disc regime, simulations produce jet efficiencies exceeding unity relative to Ṁc², which requires extraction of black-hole rotational energy — accretion power alone cannot exceed 100%.',
        },
        evidence: 'model',
        references: [referenceId('blandford-znajek-1977'), referenceId('eht-2019-m87')],
      },
      {
        id: 'beaming',
        kind: 'callout',
        tone: 'note',
        title: 'Why one jet is always brighter',
        text: {
          essential:
            'Jets come in pairs, one from each pole, but images almost always show one. That is relativistic beaming: material moving toward us at close to light speed has its emission concentrated forward and blue-shifted, while the receding jet is dimmed and reddened. The asymmetry is a measurement, not an accident of the source — the brightness ratio gives the jet speed.',
          detailed:
            'The same effect produces "superluminal motion", in which jet knots appear to move across the sky faster than light. Nothing exceeds c; the apparent speed is an artefact of a source moving almost directly toward us at close to light speed, so that successive emissions have less and less distance to travel. Apparent transverse speeds of five to ten times c are routinely measured, and they place a firm lower bound on the true speed.',
        },
        references: [referenceId('eht-2019-m87')],
      },
      {
        id: 'claim-feedback',
        kind: 'claim',
        statement: {
          essential:
            'Jets matter far beyond their host black hole. They inject enough energy into surrounding gas to slow or stop star formation across an entire galaxy — a black hole a few billionths of its galaxy’s mass influencing the whole thing.',
          detailed:
            'In galaxy clusters, jets from the central galaxy’s black hole carve visible cavities in the hot X-ray-emitting gas, tens of thousands of light years across, and the energy required matches what is needed to prevent that gas from cooling and forming stars. This "radio-mode feedback" is a standard ingredient in galaxy-formation models; without it, simulations produce far more massive galaxies than are observed. The broad picture is well supported, though how efficiently the energy couples to the gas is still debated.',
          technical:
            'Cavity enthalpy measurements give jet powers of 10⁴²–10⁴⁶ erg/s, comparable to the cooling luminosity of the intracluster medium. Feedback is also invoked to explain the M–σ relation, since the black hole’s influence radius is thousands of times smaller than the galaxy it appears to regulate.',
        },
        evidence: 'model',
        references: [referenceId('kormendy-ho-2013'), referenceId('vogelsberger-2014-illustris')],
      },
      {
        id: 'link-smbh',
        kind: 'cross-link',
        topicId: topicId('supermassive-black-holes'),
        rationale:
          'The black holes that host the largest jets, and their relationship with their galaxies.',
      },
    ],
    furtherReading: [
      referenceId('blandford-znajek-1977'),
      referenceId('eht-2019-m87'),
      referenceId('kormendy-ho-2013'),
    ],
  },

  {
    id: topicId('black-hole-classes'),
    slug: 'stellar-intermediate-supermassive',
    sectionId: BLACK_HOLES,
    order: 13,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Stellar-mass, intermediate and supermassive',
    subtitle: 'Three populations spanning eight orders of magnitude in mass.',
    summary: {
      essential:
        'Known black holes fall into three ranges. Stellar-mass ones, from about 3 to a few tens of solar masses, are the remnants of massive stars. Supermassive ones, from millions to tens of billions, sit at galaxy centres. Between them lies the intermediate range, where only a handful of convincing cases are known.',
      detailed:
        'The gap is a real puzzle rather than a labelling convention. Stellar collapse has a natural ceiling and galaxy centres have a natural floor, and until recently almost nothing was securely measured in between. Gravitational-wave observations have begun to fill it: GW190521 produced a remnant of about 142 solar masses, squarely in the intermediate range.',
    },
    glossaryTerms: [glossaryTermId('event-horizon'), glossaryTermId('gravitational-wave')],
    related: [
      topicId('black-hole-formation'),
      topicId('supermassive-black-holes'),
      topicId('black-hole-mergers'),
    ],
    blocks: [
      {
        id: 'three-ranges',
        kind: 'prose',
        text: {
          essential:
            'The physics of a black hole does not change with mass — the same solution describes all of them, scaled. What changes is where they come from, where they are found, and how they are detected. Those differences are large enough that the three ranges are effectively three different subjects.',
          detailed:
            'A useful way to hold the scale: a ten-solar-mass black hole has a horizon about 30 km across and is found in a binary system in the disc of a galaxy. Sgr A* has a horizon about 25 million km across — roughly a fifth of the diameter of Mercury’s orbit — and sits at the centre of the Milky Way. M87* has a horizon about 38 billion km across, about four times the diameter of Neptune’s orbit, and drives a jet across its host galaxy.',
        },
      },
      {
        id: 'viz-mass-scale',
        kind: 'visualization',
        visualizationId: visualizationId('black-hole-mass-scale'),
      },
      {
        id: 'claim-stellar-range',
        kind: 'claim',
        statement: {
          essential:
            'Stellar-mass black holes run from about 3 solar masses — just above the heaviest possible neutron star — up to a few tens. Around twenty have been weighed in X-ray binaries, and around a hundred more through gravitational waves.',
          detailed:
            'The lower bound is set by the maximum neutron-star mass, around 2.2 to 2.5 solar masses; anything heavier collapses. The upper bound is set by stellar evolution, since very massive stars lose much of their envelope to winds before dying. Notably, the black holes seen in gravitational waves are systematically heavier than those in X-ray binaries — often 30 to 40 solar masses rather than 5 to 20 — which is thought to reflect formation in low-metallicity environments with weaker winds, plus a selection effect, since heavier mergers are detectable further away.',
          technical:
            'Pair-instability supernovae are expected to leave no remnant for helium cores of roughly 65–120 M☉, producing a gap in the mass function. Several GWTC-3 events sit near or inside that range, which is one of the arguments for hierarchical merger origins.',
        },
        evidence: 'established',
        references: [referenceId('remillard-mcclintock-2006'), referenceId('abbott-2023-gwtc3')],
      },
      {
        id: 'claim-supermassive-range',
        kind: 'claim',
        statement: {
          essential:
            'Supermassive black holes run from around a hundred thousand to tens of billions of solar masses, and essentially every large galaxy has one at its centre.',
          detailed:
            'The Milky Way’s is comparatively modest at 4.3 million solar masses. M87’s is 6.5 billion. The most massive known are in the tens of billions. Their masses correlate tightly with properties of the host galaxy’s central bulge — particularly the velocity dispersion of its stars, the M–σ relation — which is remarkable given that the black hole’s direct gravitational influence extends over a region thousands of times smaller than the galaxy.',
          technical:
            'The M–σ relation has the form M ≈ 3 × 10⁸ M☉ (σ/200 km/s)^4.4 with scatter around 0.3 dex. The correlation is generally read as evidence for coevolution mediated by feedback, though selection effects in dynamical mass measurements are a live concern.',
        },
        evidence: 'established',
        references: [referenceId('kormendy-ho-2013'), referenceId('eht-2019-m87')],
      },
      {
        id: 'the-gap',
        kind: 'callout',
        tone: 'note',
        title: 'The intermediate gap, and what is filling it',
        text: {
          essential:
            'For decades the range between a few hundred and a hundred thousand solar masses was almost empty of confirmed objects. Candidates existed — ultraluminous X-ray sources, the centres of dwarf galaxies, dense star clusters — but few were unambiguous, because dynamical mass measurements are hard at those scales. Gravitational waves changed this: GW190521 in 2020 produced a remnant of about 142 solar masses, the first solidly measured object in the range.',
          detailed:
            'The gap matters because it is where the supermassive seed problem lives. If supermassive black holes grew from stellar-mass seeds, the intermediate range is the road they travelled, and it should be populated. If they grew from heavy seeds formed by direct collapse, it need not be. Counting intermediate-mass black holes is therefore a test of how the largest ones came to exist.',
        },
        references: [referenceId('abbott-2020-gw190521'), referenceId('kormendy-ho-2013')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'sgr-a-mass',
            label: 'Mass of Sgr A*',
            value: 4.297e6,
            unit: 'M☉',
            uncertainty: { plusMinus: 0.013e6 },
            context:
              'From orbits of individual stars around the Galactic centre, tracked for over 25 years by the GRAVITY and Keck teams.',
            references: [
              referenceId('gravity-2020-schwarzschild-precession'),
              referenceId('ghez-2008-galactic-centre'),
            ],
          },
          {
            id: 'm87-mass',
            label: 'Mass of M87*',
            value: 6.5e9,
            unit: 'M☉',
            uncertainty: { plusMinus: 0.7e9 },
            context:
              'From the Event Horizon Telescope’s measurement of the ring diameter, consistent with earlier stellar-dynamical estimates.',
            references: [referenceId('eht-2019-m87')],
          },
          {
            id: 'gw190521-remnant',
            label: 'Remnant mass of GW190521',
            value: 142,
            unit: 'M☉',
            uncertainty: { plus: 28, minus: 16 },
            context:
              'The first securely measured intermediate-mass black hole, formed in a merger of two black holes of about 85 and 66 solar masses.',
            references: [referenceId('abbott-2020-gw190521')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('abbott-2023-gwtc3'),
      referenceId('kormendy-ho-2013'),
      referenceId('remillard-mcclintock-2006'),
    ],
  },

  {
    id: topicId('supermassive-black-holes'),
    slug: 'black-holes-at-galaxy-centres',
    sectionId: BLACK_HOLES,
    order: 14,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Black holes at the centres of galaxies',
    subtitle: 'Every large galaxy has one, and its mass tracks the galaxy that hosts it.',
    summary: {
      essential:
        'Essentially every large galaxy has a supermassive black hole at its centre, including ours. When they are being fed they become quasars and active galactic nuclei, the brightest sustained sources in the Universe. When they are not, as with Sgr A*, they are almost invisible.',
      detailed:
        'The strongest evidence comes from our own Galaxy, where individual stars have been tracked around Sgr A* for three decades, giving a mass of 4.297 million solar masses inside a region smaller than the Solar System. Their masses correlate closely with the properties of their host galaxies, which is one of the more surprising results in extragalactic astronomy.',
    },
    glossaryTerms: [glossaryTermId('event-horizon'), glossaryTermId('accretion-disc')],
    related: [
      topicId('black-hole-classes'),
      topicId('detecting-black-holes'),
      topicId('relativistic-jets'),
    ],
    blocks: [
      {
        id: 'ubiquity',
        kind: 'prose',
        text: {
          essential:
            'Wherever astronomers have looked carefully at the centre of a large galaxy, they have found a very large mass in a very small volume. The Milky Way, Andromeda, M87, and every well-studied elliptical: all of them. Supermassive black holes are not exotic objects found in a few unusual places. They are a standard component of a galaxy.',
          detailed:
            'This was not the expectation. Quasars were discovered in 1963 as radio sources with baffling spectra, and it took years to establish that they were extremely distant and therefore extraordinarily luminous. The realisation that they are accreting supermassive black holes, and that quiet galaxies contain the same objects no longer being fed, came together through the 1970s and 1980s. The nearest dead quasar is 26,000 light years away, at the centre of our own Galaxy.',
        },
      },
      {
        id: 'claim-sgr-a',
        kind: 'claim',
        statement: {
          essential:
            'The best-measured black hole in the sky is our own. Individual stars have been tracked orbiting the centre of the Milky Way for three decades, and their orbits require 4.297 million solar masses inside a region smaller than the Solar System.',
          detailed:
            'The star S2 has an orbital period of about 16 years and passes within about 120 astronomical units of Sgr A*, moving at nearly 3% of the speed of light at closest approach. Kepler’s third law, applied to that orbit, gives the enclosed mass directly — no model of the central object is needed. Two independent groups, using the Keck telescopes and the VLT, have tracked it since the 1990s and agree. The 2020 Nobel Prize in Physics went to Genzel and Ghez for this work, and to Penrose for the singularity theorem.',
          technical:
            'The GRAVITY interferometer has since detected both the gravitational redshift at pericentre and the Schwarzschild precession of S2’s orbit, at the level predicted by general relativity. The measured enclosed mass and the upper bound on the size of the region exclude every alternative that has been proposed except a black hole — a cluster of dark stellar remnants of that density would collapse or evaporate on a timescale far shorter than the Galaxy’s age.',
        },
        evidence: 'established',
        references: [
          referenceId('ghez-2008-galactic-centre'),
          referenceId('gravity-2020-schwarzschild-precession'),
          referenceId('gravity-2018-s2-redshift'),
        ],
      },
      {
        id: 'quasars',
        kind: 'prose',
        text: {
          essential:
            'When a supermassive black hole is being fed, the result is a quasar: a region smaller than the Solar System outshining a galaxy of hundreds of billions of stars. The most luminous known are about a hundred trillion times as bright as the Sun. Quasar activity peaked around ten billion years ago and has declined since, as the available gas has been used up.',
          detailed:
            'The rapid variability of quasars was the original clue to their size. A source cannot brighten coherently faster than light crosses it, so a quasar varying over hours must be no larger than a few light hours across — while emitting more than a galaxy. Only gravitational accretion onto a compact object is efficient enough. Our own Galaxy’s black hole is currently accreting at a minute fraction of its Eddington limit, which is why the centre of the Milky Way is not a quasar and why we can see through to it at all.',
        },
      },
      {
        id: 'claim-coevolution',
        kind: 'claim',
        statement: {
          essential:
            'A supermassive black hole’s mass correlates tightly with the properties of its host galaxy’s central bulge — most sharply with the speed at which the bulge’s stars move.',
          detailed:
            'The M–σ relation connects black-hole mass to the velocity dispersion of the surrounding stars, with surprisingly little scatter. It is surprising because the black hole’s direct gravitational influence reaches only a few tens of light years, while the bulge spans thousands. Something must couple them, and the leading candidate is feedback: as the black hole accretes, its radiation and jets heat and expel gas from the galaxy, cutting off both further accretion and star formation. The correlation is well established observationally; the causal story is a model, and how tight the relation truly is remains debated because of selection effects in the samples.',
          technical:
            'M_BH ≈ 3 × 10⁸ M☉ (σ/200 km s⁻¹)^4.4, with intrinsic scatter of roughly 0.3 dex. Kormendy and Ho argue the relation holds for classical bulges and ellipticals but not for pseudobulges, suggesting that coevolution is tied to merger-driven rather than secular growth.',
        },
        evidence: 'model',
        references: [referenceId('kormendy-ho-2013'), referenceId('vogelsberger-2014-illustris')],
      },
      {
        id: 'not-dangerous',
        kind: 'callout',
        tone: 'misconception',
        title: 'The Milky Way’s black hole is not consuming the Galaxy',
        text: {
          essential:
            'Sgr A* holds about 4.3 million solar masses, which sounds enormous and is about 0.0004% of the Milky Way’s mass. It governs the orbits of stars within a few light years of it and nothing beyond. The Sun, 26,000 light years out, orbits the combined mass of the Galaxy’s stars, gas and dark matter; Sgr A*’s contribution to that is negligible.',
        },
        references: [referenceId('ghez-2008-galactic-centre')],
      },
      {
        id: 'link-detection',
        kind: 'cross-link',
        topicId: topicId('detecting-black-holes'),
        rationale:
          'How each of these masses was actually measured, given that none of them emits light.',
      },
    ],
    furtherReading: [
      referenceId('ghez-2008-galactic-centre'),
      referenceId('kormendy-ho-2013'),
      referenceId('gravity-2020-schwarzschild-precession'),
    ],
  },
];
