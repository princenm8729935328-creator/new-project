/**
 * Stars & Galaxies — how any of this is known.
 *
 * This group exists because the rest of the section makes confident statements
 * about objects nobody will ever visit, and a reader is entitled to ask how.
 * The answer is almost always the same: light arrives, and it carries more
 * information than it looks like it should.
 *
 * The distance topic is the one most often told badly. The ladder is a chain of
 * calibrations, each rung depending on the one below, and a systematic error
 * anywhere propagates all the way up. Saying that plainly is more useful than
 * presenting the rungs as independent confirmations of each other.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const STARS = sectionId('stars-galaxies');
const REVIEWED = '2026-09-09';

export const STARS_OBSERVATION_TOPICS: readonly Topic[] = [
  {
    id: topicId('how-do-we-know-what-stars-are-made-of'),
    slug: 'how-do-we-know-what-stars-are-made-of',
    sectionId: STARS,
    order: 36,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How do we know what stars are made of?',
    subtitle: 'Every element writes its name in light, in its own handwriting.',
    summary: {
      essential:
        'Spread starlight into a spectrum and it is crossed by dark lines. Each element absorbs light at a fixed, unique set of wavelengths — a barcode. Matching the barcode in a star’s spectrum against elements measured in a laboratory tells you what the star contains, and how much.',
      detailed:
        'The lines exist because electrons in atoms can only occupy certain energy levels. A photon whose energy exactly matches a gap between two levels gets absorbed; one that does not, passes through. Since the levels are set by quantum mechanics and are identical for every atom of an element anywhere, the pattern is universal.',
      technical:
        'Line strengths depend on temperature, pressure, ionisation state and abundance jointly, through the Boltzmann and Saha equations. Extracting an abundance therefore requires a model atmosphere. Modern analyses use three-dimensional hydrodynamic models with departures from local thermodynamic equilibrium, which shifted the inferred solar oxygen abundance downward by roughly 0.2 dex relative to older one-dimensional work — a revision that created a still-unresolved conflict with helioseismology.',
    },
    glossaryTerms: [glossaryTermId('spectroscopy'), glossaryTermId('metallicity')],
    related: [
      topicId('reading-the-light-of-the-universe'),
      topicId('how-do-we-measure-a-stars-temperature'),
      topicId('making-the-elements'),
    ],
    blocks: [
      {
        id: 'the-lines',
        kind: 'prose',
        text: {
          essential:
            'Fraunhofer looked carefully at sunlight through a prism in 1814 and found the rainbow was interrupted by hundreds of narrow dark lines. He catalogued them without knowing what they were. Decades later it emerged that each line is a wavelength absorbed by a particular element in the Sun’s outer layers — and that the same lines can be produced in a laboratory.',
          detailed:
            'This was, in retrospect, the moment astrophysics became possible. The philosopher Auguste Comte had used stellar composition as his standard example of permanently unknowable knowledge in 1835 — we can measure their positions and motions, he wrote, but never their chemistry. He was wrong within his own lifetime, and wrong by way of an instrument that already existed.',
        },
      },
      {
        id: 'viz-spectroscopy',
        kind: 'visualization',
        visualizationId: visualizationId('stellar-spectroscopy'),
      },
      {
        id: 'claim-payne',
        kind: 'claim',
        statement: {
          essential:
            'Stars are overwhelmingly hydrogen and helium. This was established in 1925 by Cecilia Payne, who showed that the apparent strength of an element’s lines depends far more on temperature than on how much of that element is present.',
          detailed:
            'The prevailing view was that the Sun had roughly the Earth’s composition, because iron lines are prominent in the solar spectrum. Payne applied the new physics of ionisation and showed the inference was backwards: iron lines are strong because iron happens to have transitions that are easily excited at solar temperatures, while hydrogen — a million times more abundant — shows relatively weak lines because most of it is in the ground state. Her conclusion was so unexpected that she was persuaded to describe it as probably spurious in her own thesis. It was correct.',
        },
        evidence: 'established',
        references: [
          referenceId('payne-1925-stellar-atmospheres'),
          referenceId('asplund-2021-solar-composition'),
        ],
      },
      {
        id: 'model-dependence',
        kind: 'callout',
        tone: 'caution',
        title: 'Abundances are inferred, not read off',
        text: {
          essential:
            'A spectral line tells you an element is present. Turning line strength into "this star is 1.4 percent heavy elements by mass" requires a model of the star’s atmosphere — its temperature and pressure structure, its convection, and whether the gas is in thermal equilibrium. Change the model and the number changes.',
          detailed:
            'This is not hypothetical. Replacing one-dimensional static atmospheres with three-dimensional hydrodynamic ones lowered the inferred solar oxygen abundance substantially in the 2000s. The new value fits the spectrum better — and it broke the agreement between the standard solar model and helioseismology, which had been one of astrophysics’ best-fitting results. That conflict is still not fully resolved, and it is a useful reminder that a widely quoted number can rest on a model that is itself being revised.',
        },
        references: [
          referenceId('asplund-2021-solar-composition'),
          referenceId('christensen-dalsgaard-2002-helioseismology'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'solar-h-fraction',
            label: 'Hydrogen fraction of the Sun by mass',
            value: 73.8,
            unit: 'percent',
            uncertainty: { plusMinus: 0.5 },
            context:
              'With about 24.9 percent helium and 1.4 percent everything else. These are photospheric values; the core has been converting hydrogen to helium for 4.6 billion years and differs substantially.',
            references: [referenceId('asplund-2021-solar-composition')],
          },
          {
            id: 'fraunhofer-lines',
            label: 'Absorption lines catalogued in the solar spectrum',
            value: 574,
            unit: 'lines (by Fraunhofer)',
            context:
              'Fraunhofer mapped 574 by 1817. Modern high-resolution solar atlases contain hundreds of thousands.',
            references: [referenceId('fraunhofer-1817-lines')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('payne-1925-stellar-atmospheres')],
  },

  {
    id: topicId('measuring-stellar-distances'),
    slug: 'measuring-stellar-distances',
    sectionId: STARS,
    order: 37,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How do we measure stellar distances?',
    subtitle: 'One geometric measurement, and everything else calibrated against it.',
    summary: {
      essential:
        'For nearby stars, distance is geometry: as Earth orbits the Sun, a nearby star appears to shift slightly against the background, and the size of that shift gives the distance directly. For anything further, we use objects whose true brightness we can work out, and compare that with how bright they look.',
      detailed:
        'This is the cosmic distance ladder, and the word "ladder" is exact — each rung is calibrated using the rung below it. Parallax calibrates Cepheid variables; Cepheids calibrate Type Ia supernovae; supernovae reach across billions of light-years. A systematic error at the bottom propagates all the way to the top.',
      technical:
        'Parallax: d[pc] = 1/p[arcsec]. Gaia reaches ~20–25 μas precision for bright sources, giving useful distances to several kiloparsecs. Standard candles use the distance modulus m − M = 5 log₁₀(d/10 pc) + A, where extinction A is a significant systematic. The Cepheid period–luminosity relation requires metallicity corrections; Type Ia peak luminosities require light-curve shape and colour standardisation. Residual disagreement between ladder-based and CMB-inferred values of H₀ is the Hubble tension.',
    },
    glossaryTerms: [
      glossaryTermId('parallax'),
      glossaryTermId('parsec'),
      glossaryTermId('standard-candle'),
    ],
    related: [
      topicId('how-do-we-know-galaxies-are-moving'),
      topicId('our-place-inside-the-milky-way'),
      topicId('measuring-stellar-mass'),
    ],
    blocks: [
      {
        id: 'parallax',
        kind: 'prose',
        text: {
          essential:
            'Hold a finger up and look at it with one eye, then the other. It jumps against the background. The closer it is, the bigger the jump. Now use the Earth’s orbit as the distance between your eyes: observe a star in January and again in July, from positions 300 million kilometres apart, and a nearby star will have shifted. Measure the shift; you have the distance.',
          detailed:
            'The shifts are tiny. The nearest star shows a parallax of 0.77 arcseconds — about the angle a one-euro coin makes at six kilometres. That is why nobody measured one until 1838, and why the failure to detect parallax was for centuries a serious argument against the Earth moving at all. The critics were reasoning correctly from the precision they had; the stars were simply much further away than anyone expected.',
        },
      },
      {
        id: 'viz-parallax',
        kind: 'visualization',
        visualizationId: visualizationId('stellar-parallax'),
      },
      {
        id: 'claim-gaia',
        kind: 'claim',
        statement: {
          essential:
            'The Gaia spacecraft has measured parallaxes for over a billion stars, with a precision of tens of microarcseconds — good enough to measure distances across much of the Galaxy geometrically, with no assumptions about the stars themselves.',
          detailed:
            'This transformed the field. Before Gaia, the geometric foundation of the distance ladder rested on a few thousand stars from Hipparcos. Now it rests on a billion, including large numbers of Cepheids and other calibrators, which allows the higher rungs to be calibrated far more securely and their systematic errors to be tested rather than assumed.',
        },
        evidence: 'established',
        references: [referenceId('gaia-2021-edr3-parallax'), referenceId('bessel-1838-parallax')],
      },
      {
        id: 'viz-ladder',
        kind: 'visualization',
        visualizationId: visualizationId('distance-ladder'),
      },
      {
        id: 'claim-cepheids',
        kind: 'claim',
        statement: {
          essential:
            'Cepheid variable stars pulse with a period that depends on their true brightness — brighter ones pulse more slowly. Time the pulsation and you know the true brightness; compare with the apparent brightness and you have the distance.',
          detailed:
            'Henrietta Leavitt found this in 1912 by studying variable stars in the Small Magellanic Cloud, where all the stars are at effectively the same distance, so differences in apparent brightness are differences in true brightness. It was the discovery that made measuring the Universe possible: within a decade it was used to prove that other galaxies exist, and it remains a load-bearing rung of the distance ladder today.',
        },
        evidence: 'established',
        references: [referenceId('leavitt-1912-cepheids')],
      },
      {
        id: 'ladder-caveat',
        kind: 'callout',
        tone: 'caution',
        title: 'The rungs are not independent',
        text: {
          essential:
            'Because each rung is calibrated on the one below, an error low down carries all the way up — and it does not average out. This is why the distance ladder gets so much scrutiny, and why the disagreement between ladder-based and microwave-background-based measurements of the expansion rate is taken seriously rather than dismissed.',
          detailed:
            'Both sides of that disagreement have been checked hard. Ladder measurements have been repeated with different calibrators — Cepheids, tip-of-the-red-giant-branch stars, Mira variables, water masers — that do not share the same systematics. The tension has narrowed in places and persisted overall. It may yet turn out to be an unrecognised systematic; it may be new physics. It is currently unresolved.',
        },
        references: [
          referenceId('riess-2022-sh0es'),
          referenceId('freedman-2021-h0'),
          referenceId('planck-2018-vi'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'proxima-parallax',
            label: 'Parallax of Proxima Centauri',
            value: 768.07,
            unit: 'milliarcseconds',
            uncertainty: { plusMinus: 0.05 },
            context:
              'The largest stellar parallax known, and still under one arcsecond. It corresponds to a distance of 1.30 parsecs, or 4.25 light-years.',
            references: [referenceId('gaia-2021-edr3-parallax')],
          },
          {
            id: 'gaia-precision',
            label: 'Gaia parallax precision for bright stars',
            value: 20,
            unit: 'microarcseconds (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'About the angle subtended by a human hair at 1,000 kilometres. Precision degrades for fainter stars, so useful distances extend to a few kiloparsecs rather than across the whole Galaxy.',
            references: [referenceId('gaia-2021-edr3-parallax')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('gaia-2021-edr3-parallax'), referenceId('leavitt-1912-cepheids')],
  },

  {
    id: topicId('how-do-we-measure-a-stars-temperature'),
    slug: 'how-do-we-measure-a-stars-temperature',
    sectionId: STARS,
    order: 38,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How do we measure a star’s temperature?',
    subtitle: 'Colour gets you close. Spectral lines get you closer.',
    summary: {
      essential:
        'A hot object glows, and the hotter it is the bluer its glow. Measure a star’s colour — how much blue light compared with red — and you have an estimate of its surface temperature. Blue stars are hot, red stars are cool, and the everyday association of red with hot is exactly backwards.',
      detailed:
        'Colour is quick but approximate, because a star is not a perfect blackbody and because intervening dust reddens its light. The more reliable method uses spectral lines: which lines appear, and how strong they are, depends steeply on temperature through the ionisation and excitation state of the gas.',
      technical:
        'Wien’s displacement law, λ_max T = 2.898 × 10⁻³ m·K, gives a first estimate from the spectral peak; broadband colour indices such as B−V are calibrated against it. Effective temperature is defined by L = 4πR²σT_eff⁴ and so is a flux-weighted quantity rather than the temperature of any particular layer. Line-based determinations use excitation and ionisation equilibrium — requiring, for example, that iron abundances derived from Fe I and Fe II lines agree — and are model-atmosphere dependent.',
    },
    glossaryTerms: [
      glossaryTermId('effective-temperature'),
      glossaryTermId('spectroscopy'),
      glossaryTermId('hr-diagram'),
    ],
    related: [
      topicId('how-do-we-know-what-stars-are-made-of'),
      topicId('the-main-sequence'),
      topicId('what-is-a-star'),
    ],
    blocks: [
      {
        id: 'colour',
        kind: 'prose',
        text: {
          essential:
            'Heat a piece of metal. It glows dull red, then orange, then yellow-white, then blue-white as it gets hotter. Stars do exactly the same thing, and for exactly the same reason. So a star’s colour is a thermometer you can read from any distance — provided nothing has reddened the light along the way.',
          detailed:
            'The physics is the blackbody spectrum, which is the same curve introduced in the Quantum Physics section as the thing classical physics could not explain. Its peak moves to shorter wavelengths as temperature rises — Wien’s law — and its total output rises as the fourth power of temperature. Both relations are used constantly in stellar astronomy, and both come out of the quantum treatment of radiation.',
        },
      },
      {
        id: 'viz-temperature',
        kind: 'visualization',
        visualizationId: visualizationId('stellar-temperature-colour'),
      },
      {
        id: 'link-blackbody',
        kind: 'cross-link',
        topicId: topicId('blackbody-radiation'),
        rationale:
          'Why hot things glow the colours they do, and why explaining it required the quantum, is developed in Quantum Physics.',
      },
      {
        id: 'claim-limits',
        kind: 'claim',
        statement: {
          essential:
            'Colour-based temperatures are approximate. Interstellar dust preferentially removes blue light, making distant stars look cooler than they are — an effect that must be corrected for and cannot be measured perfectly.',
          detailed:
            'Reddening is degenerate with temperature: a hot star behind dust and a cooler star without it can produce similar observed colours. Breaking the degeneracy needs either spectroscopy, which measures line ratios that dust does not mimic, or observations spanning a wide wavelength range where the shape of the extinction curve differs from a blackbody. This is one of the persistent systematic difficulties in stellar astronomy.',
        },
        evidence: 'established',
        references: [
          referenceId('pecaut-mamajek-2013-stellar-scale'),
          referenceId('draine-2011-ism'),
        ],
      },
      {
        id: 'spectral-classes',
        kind: 'prose',
        text: {
          essential:
            'Stars are sorted into spectral classes — O, B, A, F, G, K, M — running from hottest to coolest. The sequence looks arbitrary because it is: the letters were assigned by the strength of hydrogen lines before anyone knew what determined them, and had to be reordered once temperature turned out to be the controlling variable.',
          detailed:
            'The reordering was done at Harvard by Annie Jump Cannon, who classified several hundred thousand spectra by eye and established the sequence still in use. It was Payne who then showed what the sequence physically meant. The system has since been extended at the cool end with L, T and Y for brown dwarfs, objects that were not known to exist when the scheme was made.',
        },
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'o-star-temp',
            label: 'Surface temperature of an O-type star',
            value: 40000,
            unit: 'K (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Against about 3,000 K for an M dwarf. Since luminosity per unit area goes as the fourth power of temperature, that is a factor of over 30,000 in surface brightness.',
            references: [referenceId('pecaut-mamajek-2013-stellar-scale')],
          },
          {
            id: 'wien-constant',
            label: 'Wien displacement constant',
            value: 2.897771955e-3,
            unit: 'm·K',
            context:
              'Divide by temperature to get the wavelength of peak emission. For the Sun this gives about 502 nm — green-blue, in the middle of the visible band.',
            references: [referenceId('codata-2018')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('pecaut-mamajek-2013-stellar-scale')],
  },

  {
    id: topicId('measuring-stellar-mass'),
    slug: 'measuring-stellar-mass',
    sectionId: STARS,
    order: 39,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How do we weigh a star?',
    subtitle: 'You cannot, unless something is orbiting it.',
    summary: {
      essential:
        'Mass is the hardest stellar property to measure and the most important one. There is only one direct method: watch something orbit the star and apply Newton’s law of gravitation. That means binary stars — pairs orbiting each other — are where nearly all our stellar masses come from.',
      detailed:
        'The reasoning is the same used for planets in the Newton section, run backwards. For planets we know the Sun’s mass and predict the orbit. For binaries we measure the orbit — its size and period — and solve for the total mass. Split that between the two stars using how far each moves, and you have both masses.',
      technical:
        'Kepler’s third law generalised: a³/P² = G(M₁+M₂)/4π². Spectroscopic binaries give M sin³i, degenerate with inclination; eclipsing binaries break the degeneracy because eclipses require i ≈ 90°, and detached double-lined eclipsing systems yield masses good to better than 1–3%. These calibrate the mass–luminosity relation, which is then used to estimate masses for single stars — an indirect route that inherits the calibration’s systematics.',
    },
    glossaryTerms: [glossaryTermId('luminosity'), glossaryTermId('spectroscopy')],
    related: [
      topicId('mass-determines-a-stars-life'),
      topicId('the-galactic-centre'),
      topicId('measuring-stellar-distances'),
    ],
    blocks: [
      {
        id: 'the-only-way',
        kind: 'prose',
        text: {
          essential:
            'Nothing about a star’s appearance tells you its mass directly. Two stars can look nearly identical and differ substantially in mass. The only thing that responds to mass is gravity — so to weigh a star, you need something moving under its gravitational influence, and you need to watch it long enough to trace the path.',
          detailed:
            'Fortunately, most stars have companions. Roughly half of Sun-like stars, and the large majority of massive ones, are in binary or multiple systems. Each such system is a natural experiment: two objects orbiting a common centre of mass, with a period and separation that fix the total mass by Kepler’s third law, and a ratio of speeds that fixes how it divides.',
        },
      },
      {
        id: 'link-newton',
        kind: 'cross-link',
        topicId: topicId('universal-law'),
        rationale:
          'The law being applied here is exactly the one derived for planetary orbits in the Newton section.',
      },
      {
        id: 'viz-binary',
        kind: 'visualization',
        visualizationId: visualizationId('binary-star-masses'),
      },
      {
        id: 'claim-eclipsing',
        kind: 'claim',
        statement: {
          essential:
            'The most accurate stellar masses come from eclipsing binaries — pairs whose orbit we happen to view edge-on, so each star passes in front of the other. These give masses accurate to better than a few percent, and radii too.',
          detailed:
            'The edge-on geometry is what makes them valuable, because otherwise the orbital inclination is unknown and only a lower bound on mass can be extracted. When eclipses occur, the inclination is known to be near 90 degrees, and combining the eclipse timing with spectroscopic velocities of both stars gives both masses and both radii with no model of stellar structure assumed. These systems are the empirical foundation on which nearly all other stellar mass estimates rest.',
        },
        evidence: 'established',
        references: [referenceId('torres-2010-eclipsing-binaries')],
      },
      {
        id: 'single-stars',
        kind: 'callout',
        tone: 'caution',
        title: 'Most quoted stellar masses are estimates, not measurements',
        text: {
          essential:
            'When you read that a particular single star has 1.3 solar masses, that number almost certainly came from comparing its luminosity and temperature against stellar models, not from watching anything orbit it. It is a model-based estimate calibrated on binaries — usually good, and not the same kind of number.',
          detailed:
            'The distinction matters when the models are being tested. Using model-derived masses to check the models is circular, which is why the roughly two hundred stars with directly measured masses from detached eclipsing binaries carry weight out of all proportion to their number. Asteroseismology now provides a partly independent route for some stars, by measuring oscillation frequencies that depend on mean density.',
        },
        references: [
          referenceId('torres-2010-eclipsing-binaries'),
          referenceId('christensen-dalsgaard-2002-helioseismology'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'eb-precision',
            label: 'Precision of masses from detached eclipsing binaries',
            value: 1,
            unit: 'percent (better than about 3)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'For the best-studied systems. Around 200 such systems have masses and radii known to this standard, and they anchor the empirical mass–luminosity relation.',
            references: [referenceId('torres-2010-eclipsing-binaries')],
          },
          {
            id: 'binary-fraction',
            label: 'Fraction of massive stars in interacting binaries',
            value: 70,
            unit: 'percent (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Most massive stars will exchange mass with a companion during their lives, which makes binaries both the source of our best masses and a complication for stellar evolution.',
            references: [referenceId('sana-2012-binaries')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('torres-2010-eclipsing-binaries')],
  },

  {
    id: topicId('how-do-we-know-galaxies-are-moving'),
    slug: 'how-do-we-know-galaxies-are-moving',
    sectionId: STARS,
    order: 40,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How do we know galaxies are moving?',
    subtitle: 'The barcode shifts, and two quite different things can shift it.',
    summary: {
      essential:
        'Because spectral lines sit at known wavelengths, any shift in their observed position means the source is moving relative to us — toward us if the shift is blueward, away if redward. Measuring the shift measures the speed, and it works at any distance you can get a spectrum from.',
      detailed:
        'There is an important distinction. Nearby, the shift is an ordinary Doppler effect from motion through space, and galaxies show both blueshifts and redshifts. For distant galaxies, the dominant effect is cosmological: space itself has expanded while the light was travelling, stretching its wavelength. These are physically different, and treating cosmological redshift as a velocity gives wrong answers at large distances.',
      technical:
        'For v ≪ c, z ≈ v/c. Cosmological redshift instead satisfies 1 + z = a(t_obs)/a(t_emit), a ratio of scale factors rather than a velocity; naively inverting the special-relativistic Doppler formula misattributes it. Nearby galaxies show peculiar velocities of hundreds of km/s superposed on the Hubble flow — Andromeda’s net blueshift of ~300 km/s is peculiar motion dominating over expansion at 0.78 Mpc.',
    },
    glossaryTerms: [glossaryTermId('redshift'), glossaryTermId('spectroscopy')],
    related: [
      topicId('reading-the-light-of-the-universe'),
      topicId('measuring-stellar-distances'),
      topicId('galaxy-mergers'),
    ],
    blocks: [
      {
        id: 'the-shift',
        kind: 'prose',
        text: {
          essential:
            'You already know the Doppler effect from sound: a siren rises in pitch as it approaches and drops as it passes. Light does the same. If a galaxy is moving away, every one of its spectral lines is shifted to longer wavelengths — and because we know exactly where those lines belong, even a tiny shift is measurable.',
          detailed:
            'The precision is remarkable. Lines can be located to a small fraction of their width, so velocities of a few metres per second are measurable for bright stars — which is how planets are detected by the wobble they induce in their host star. The same technique applied to galaxies gives velocities to a few kilometres per second, which is a fractional precision of around one part in a hundred thousand.',
        },
      },
      {
        id: 'viz-doppler',
        kind: 'visualization',
        visualizationId: visualizationId('doppler-redshift'),
      },
      {
        id: 'claim-slipher',
        kind: 'claim',
        statement: {
          essential:
            'Slipher measured the spectra of spiral nebulae from 1912 onward and found that almost all of them were redshifted — receding. That observation, combined a decade later with distances, became the evidence for an expanding Universe.',
          detailed:
            'Slipher’s work is often skipped in the popular telling, which jumps straight to Hubble. But the velocities were his, obtained with enormous difficulty on a 24-inch refractor with exposures lasting many nights. Hubble supplied the distances, using Cepheids, and the combination produced the velocity–distance relation. Neither piece is sufficient alone.',
        },
        evidence: 'established',
        references: [referenceId('slipher-1917-radial-velocities'), referenceId('hubble-1929')],
      },
      {
        id: 'not-doppler',
        kind: 'callout',
        tone: 'misconception',
        title: 'Cosmological redshift is not a Doppler shift',
        text: {
          essential:
            'For distant galaxies, the redshift is not caused by the galaxy moving through space. It is caused by space expanding while the light is in transit, which stretches the wavelength along the way. Converting a large redshift into a velocity with the Doppler formula produces a number that does not correspond to anything physical.',
          detailed:
            'The practical consequence is that objects at redshift greater than about 1.5 have recession rates exceeding the speed of light in the standard cosmological description — which violates nothing, because it is not motion through space and no signal is overtaking light locally. Nearby, the distinction hardly matters and the Doppler formula is a fine approximation. It stops being fine well before the distances at which people casually apply it.',
        },
        references: [referenceId('planck-2018-vi'), referenceId('hubble-1929')],
      },
      {
        id: 'claim-andromeda',
        kind: 'claim',
        statement: {
          essential:
            'Not every galaxy is receding. Andromeda is approaching us at about 110 kilometres per second, because at this distance the local gravitational pull between the two galaxies overwhelms cosmic expansion entirely.',
          detailed:
            'This is a useful check on the mental model. Expansion is not a force that pushes things apart everywhere — it describes the large-scale behaviour of space where nothing is gravitationally bound. Within a bound system, whether a galaxy, a galaxy group or a cluster, ordinary gravity governs and expansion does not operate. The Local Group is bound; the space between distant clusters is not.',
        },
        evidence: 'established',
        references: [referenceId('slipher-1917-radial-velocities')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'andromeda-velocity',
            label: 'Radial velocity of Andromeda',
            value: -110,
            unit: 'km/s',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Negative meaning approaching. The value relative to the Sun is about −300 km/s; correcting for the Sun’s own motion around the Milky Way gives roughly −110 km/s between the two galaxies.',
            references: [referenceId('slipher-1917-radial-velocities')],
          },
          {
            id: 'rv-precision',
            label: 'Radial velocity precision achievable for bright stars',
            value: 0.3,
            unit: 'm/s (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Slower than walking pace, measured on an object light-years away, by tracking spectral line positions. This is the precision that makes small-planet detection possible.',
            references: [referenceId('gaia-2021-edr3-parallax')],
          },
        ],
      },
    ],
    furtherReading: [referenceId('slipher-1917-radial-velocities')],
  },

  {
    id: topicId('reading-the-light-of-the-universe'),
    slug: 'reading-the-light-of-the-universe',
    sectionId: STARS,
    order: 41,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Reading the light of the Universe',
    subtitle: 'One beam of light, and almost everything in this section comes out of it.',
    summary: {
      essential:
        'Nearly everything in this section was learned from light. A single spectrum tells you what an object is made of, how hot it is, how fast it is moving toward or away from you, how dense its gas is, how strong its magnetic field is, and often how massive it is. Astronomy is the science of extracting the maximum from arriving photons.',
      detailed:
        'The reason one measurement yields so much is that different physical conditions imprint themselves on the spectrum in different, separable ways. Composition sets which lines appear. Temperature sets their relative strengths. Motion shifts them all together. Pressure and rotation broaden them. Magnetic fields split them. These effects are largely independent, so they can be disentangled.',
      technical:
        'A single high-resolution spectrum constrains: elemental abundances via equivalent widths against a model atmosphere; T_eff via excitation and ionisation equilibrium; log g via pressure-sensitive wings; radial velocity via line centroids; v sin i via rotational broadening; magnetic field strength via Zeeman splitting; and, with time series, orbital solutions and asteroseismic frequencies. Each requires assumptions, and the assumptions are where systematic errors live.',
    },
    glossaryTerms: [
      glossaryTermId('spectroscopy'),
      glossaryTermId('redshift'),
      glossaryTermId('effective-temperature'),
    ],
    related: [
      topicId('how-do-we-know-what-stars-are-made-of'),
      topicId('how-do-we-know-galaxies-are-moving'),
      topicId('measuring-stellar-mass'),
    ],
    blocks: [
      {
        id: 'one-beam',
        kind: 'prose',
        text: {
          essential:
            'Consider what is actually available. We cannot visit a star, sample it, or run an experiment on it. All we get is light — and for most objects, not much of it. Yet from that we extract composition, temperature, motion, size, mass, age and history. The whole discipline is an exercise in getting the most out of the least.',
          detailed:
            'It works because light is not a single number. A photon carries a wavelength, a direction, a polarisation and an arrival time, and a stream of them carries statistics of all four. Every physical condition at the source leaves a distinguishable imprint on one of those. Spectroscopy is the art of separating imprints that arrived superimposed.',
        },
      },
      {
        id: 'viz-reading',
        kind: 'visualization',
        visualizationId: visualizationId('spectrum-decoder'),
      },
      {
        id: 'claim-multiple',
        kind: 'claim',
        statement: {
          essential:
            'A single stellar spectrum simultaneously constrains composition, temperature, surface gravity, rotation speed, radial velocity and magnetic field strength — because each of those affects the lines in a different and largely independent way.',
          detailed:
            'Rotation broadens every line symmetrically by an amount set by the projected equatorial velocity. Pressure broadens the wings of certain lines much more than their cores, which is sensitive to surface gravity and hence to whether the star is a dwarf or a giant. Magnetic fields split lines into components whose separation gives the field strength. These signatures have different shapes, so a good enough spectrum can separate them.',
        },
        evidence: 'established',
        references: [
          referenceId('payne-1925-stellar-atmospheres'),
          referenceId('asplund-2021-solar-composition'),
        ],
      },
      {
        id: 'across-scales',
        kind: 'prose',
        text: {
          essential:
            'The same technique scales all the way up. Spectra of stars give stellar chemistry. Spectra of gas clouds give the conditions inside them. Spectra of galaxies give the combined light of billions of stars, plus the motions that reveal dark matter. And spectra of the most distant galaxies give redshifts, which give distances and look-back times.',
          detailed:
            'It scales down too. Spectra of protoplanetary disks reveal their chemistry; spectra of exoplanet atmospheres, taken as a planet transits its star, reveal molecules in an atmosphere trillions of kilometres away. The instrument changes, the wavelength range changes, the difficulty changes enormously — the underlying idea does not.',
        },
      },
      {
        id: 'assumptions',
        kind: 'callout',
        tone: 'caution',
        title: 'Every spectrum is interpreted through a model',
        text: {
          essential:
            'A spectrum is data. An abundance, a temperature or a mass extracted from it is data plus a model. The models are good and extensively tested, and they are still models — which is why a widely quoted stellar parameter can shift when the modelling improves, without any new observation being made.',
          detailed:
            'The solar oxygen abundance is the cautionary example: it moved substantially when three-dimensional atmospheres replaced one-dimensional ones, and the shift broke a long-standing agreement with helioseismology that has not been fully repaired. Nobody made a mistake. The earlier number was the best inference from the best model available, and that is what it means for a measurement to be model-dependent.',
        },
        references: [
          referenceId('asplund-2021-solar-composition'),
          referenceId('christensen-dalsgaard-2002-helioseismology'),
        ],
      },
    ],
    furtherReading: [referenceId('payne-1925-stellar-atmospheres')],
  },
];
