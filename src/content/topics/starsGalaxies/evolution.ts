/**
 * Stars & Galaxies — stellar evolution, and the origin of the elements.
 *
 * "Making the elements" is the load-bearing topic of the whole section, and it
 * is placed here rather than at the end deliberately: everything before it is
 * the machinery that makes it possible, and everything after it is the
 * consequence. It is also the topic where the popular version is most wrong.
 * "We are made of stardust" is true in spirit and sloppy in detail — different
 * elements come from genuinely different processes, and lumping them together
 * throws away the most interesting part of the story.
 *
 * The iron topic exists as its own page because the binding-energy curve
 * explains, in one picture, why stars die at all. Readers who understand that
 * curve understand supernovae before they have read about them.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const STARS = sectionId('stars-galaxies');
const REVIEWED = '2026-09-09';

export const STARS_EVOLUTION_TOPICS: readonly Topic[] = [
  {
    id: topicId('the-life-of-a-sun-like-star'),
    slug: 'the-life-of-a-sun-like-star',
    sectionId: STARS,
    order: 8,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The life of a Sun-like star',
    subtitle: 'Ten billion steady years, then a very eventful billion.',
    summary: {
      essential:
        'A star like the Sun fuses hydrogen quietly for about ten billion years. When the core hydrogen runs out, the core contracts and the outer layers swell enormously — a red giant. Helium burning follows, then instability, then the star gently sheds its outer layers and leaves behind its bare core: a white dwarf, cooling forever.',
      detailed:
        'The counterintuitive part is that the star gets bigger as its core gets smaller. When core fusion stops, the core has nothing holding it up, so it contracts and heats. That heat drives fusion in a shell around the core, and the shell is hotter and more productive than the core ever was. The extra energy inflates the envelope by a factor of a hundred or more.',
      technical:
        'Sequence for roughly 1 M☉: core H exhaustion → isothermal helium core → shell hydrogen burning → red giant branch ascent with a degenerate core → helium flash at M_core ≈ 0.47 M☉ → horizontal branch core helium burning → asymptotic giant branch with double shell burning and thermal pulses → superwind and envelope ejection → planetary nebula → C/O white dwarf of ≈ 0.55 M☉. The star never reaches carbon ignition, because the degenerate core cannot be compressed to the required temperature.',
    },
    glossaryTerms: [glossaryTermId('white-dwarf'), glossaryTermId('degeneracy-pressure')],
    related: [
      topicId('red-giants-and-supergiants'),
      topicId('white-dwarfs-and-the-chandrasekhar-limit'),
      topicId('the-life-of-a-massive-star'),
    ],
    blocks: [
      {
        id: 'the-long-middle',
        kind: 'prose',
        text: {
          essential:
            'For ten billion years, almost nothing happens. The Sun converts hydrogen to helium in its core, slowly, at a rate its own thermostat keeps steady. It brightens gradually — about 10 percent every billion years — because the accumulating helium makes the core denser and hotter. But there is no drama. The drama begins when the core hydrogen is gone.',
          detailed:
            'That gradual brightening is not a footnote. In roughly a billion years the Sun will be luminous enough to push Earth out of the range where liquid water is stable at the surface — long before the red giant phase, and long before the Sun leaves the main sequence. The habitable period of a planet is set by the star’s slow main-sequence evolution, not by its dramatic ending.',
        },
      },
      {
        id: 'viz-tracks',
        kind: 'visualization',
        visualizationId: visualizationId('stellar-evolution-tracks'),
      },
      {
        id: 'claim-shell',
        kind: 'claim',
        statement: {
          essential:
            'When core hydrogen runs out, fusion does not stop — it moves outward into a shell around the now-inert helium core. That shell burns hotter and faster than the core ever did, and the extra energy makes the star expand into a red giant.',
          detailed:
            'The core meanwhile contracts, because nothing is generating energy inside it any more. As it contracts it heats, and it heats the shell above it, which burns faster still. So the star has a shrinking, heating core and a swelling, cooling envelope at the same time. This "mirror" behaviour is one of the genuinely strange features of stellar structure, and it is why a red giant can be a thousand times more luminous than the star it used to be while having a much cooler surface.',
        },
        evidence: 'established',
        references: [referenceId('choi-2016-mist'), referenceId('herwig-2005-agb')],
      },
      {
        id: 'helium-flash',
        kind: 'callout',
        tone: 'note',
        title: 'The helium flash: an explosion that does nothing visible',
        text: {
          essential:
            'In a star around the Sun’s mass, the helium core becomes degenerate before it gets hot enough to fuse. Degenerate matter does not expand when heated, so when helium finally ignites, the usual safety valve is missing. The reaction runs away, and for a few seconds the core generates energy at a rate comparable to a whole galaxy.',
          detailed:
            'And essentially nothing is visible from outside. The energy goes into lifting the degeneracy rather than into light: it expands the core, which relieves the degeneracy, which restores the thermostat, and the star settles into ordinary helium burning. The whole episode is buried under the enormous envelope. It is a real, calculated event that no telescope has ever caught in the act, and its existence is inferred from stellar structure models plus the observed properties of horizontal-branch stars.',
        },
        references: [referenceId('choi-2016-mist')],
      },
      {
        id: 'ending',
        kind: 'prose',
        text: {
          essential:
            'Late in life the star develops two burning shells — hydrogen and helium — and becomes unstable, pulsing and shedding material in strong winds. Eventually it sheds the entire envelope. The exposed core, still at tens of thousands of degrees, lights the escaping gas from inside. That glowing shell is a planetary nebula, and it lasts only tens of thousands of years before dispersing.',
          detailed:
            'The name is a historical accident: through small eighteenth-century telescopes these objects looked like round greenish planetary disks. They have nothing to do with planets. What matters physically is that the ejected material is enriched — it carries carbon and nitrogen dredged up from the interior, and dust grains condensed in the cool outer wind. This is one of the main ways carbon gets into the interstellar medium.',
        },
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'sun-giant-radius',
            label: 'Predicted maximum radius of the Sun as a red giant',
            value: 1,
            unit: 'AU (order of magnitude)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Models put the tip-of-the-giant-branch radius near the Earth’s present orbit. Whether Earth is engulfed depends on how much mass the Sun loses first, which widens the orbit — and mass-loss rates at that stage are not precisely known.',
            references: [referenceId('choi-2016-mist'), referenceId('smith-2014-mass-loss')],
          },
          {
            id: 'wd-mass',
            label: 'Typical white dwarf mass left by a Sun-like star',
            value: 0.55,
            unit: 'M☉',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Roughly half the original mass ends as the remnant; the rest is returned to the interstellar medium. The observed white dwarf mass distribution peaks near 0.6 M☉.',
            references: [referenceId('pons-2005-white-dwarf-cooling')],
          },
          {
            id: 'pn-lifetime',
            label: 'Visible lifetime of a planetary nebula',
            value: 20000,
            unit: 'years',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Brief by astronomical standards, which is why only a few thousand are known despite most stars passing through the phase.',
            references: [referenceId('herwig-2005-agb')],
          },
        ],
      },
      {
        id: 'link-massive',
        kind: 'cross-link',
        topicId: topicId('the-life-of-a-massive-star'),
        rationale: 'Everything above changes if the star starts with eight times more mass.',
      },
    ],
    furtherReading: [referenceId('choi-2016-mist'), referenceId('herwig-2005-agb')],
  },

  {
    id: topicId('the-life-of-a-massive-star'),
    slug: 'the-life-of-a-massive-star',
    sectionId: STARS,
    order: 9,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The life of a massive star',
    subtitle: 'Everything the Sun will do in ten billion years, done in ten million.',
    summary: {
      essential:
        'A star of eight solar masses or more lives fast. Its core is hotter, so fusion runs faster, so it burns through hydrogen in a few million years instead of ten billion. And because it stays hot enough, it does not stop at helium — it burns carbon, then neon, oxygen and silicon, each stage faster than the last, until it builds an iron core and runs out of options.',
      detailed:
        'The accelerating timescales are startling. Hydrogen burning might take 7 million years; carbon burning a few hundred; silicon burning about a day. The reason is that each later stage releases less energy per kilogram while the star is more luminous than ever, and after carbon burning almost all the energy escapes as neutrinos rather than light — so the core must burn furiously just to keep itself supported.',
      technical:
        'For a 20 M☉ star: H ≈ 8 Myr, He ≈ 1 Myr, C ≈ 300 yr, Ne ≈ 1 yr, O ≈ 1 yr, Si ≈ days. Beyond carbon, thermal neutrino losses via pair production dominate the energy budget, and L_ν exceeds L_photon by orders of magnitude. The result is the onion-shell structure: an iron core surrounded by shells of successively lighter elements, each still burning at its own boundary. Most massive stars also exchange mass with a binary companion, which alters this picture substantially.',
    },
    glossaryTerms: [glossaryTermId('supernova'), glossaryTermId('nucleosynthesis')],
    related: [
      topicId('iron-the-turning-point'),
      topicId('supernovae'),
      topicId('making-the-elements'),
    ],
    blocks: [
      {
        id: 'faster',
        kind: 'prose',
        text: {
          essential:
            'Take the Sun and give it twenty times the mass. The weight pressing on its core is far greater, so the core must be hotter to hold itself up. Fusion is extremely sensitive to temperature, so it now runs enormously faster. The star is about 50,000 times more luminous than the Sun and has only 20 times the fuel — so it lasts about a thousandth as long.',
          detailed:
            'A useful way to hold this: a massive star is not a bigger version of the Sun so much as a different regime. Its core is convective rather than radiative, because the CNO cycle concentrates energy generation in a tiny central volume. Radiation pressure contributes significantly to holding it up. It loses mass continuously through a powerful wind. And it will almost certainly interact with a binary companion at some point. Very little of the Sun’s story transfers.',
        },
      },
      {
        id: 'viz-onion',
        kind: 'visualization',
        visualizationId: visualizationId('onion-shell-burning'),
      },
      {
        id: 'claim-stages',
        kind: 'claim',
        statement: {
          essential:
            'A massive star burns through a sequence of fuels — hydrogen, helium, carbon, neon, oxygen, silicon — and each stage is dramatically shorter than the one before. The final silicon-burning stage lasts about a day.',
          detailed:
            'Two things drive the acceleration. Each successive fuel yields less energy per unit mass than the last, so more of it must be consumed per second. And from carbon burning onward the core is hot enough that electron–positron pairs form and annihilate into neutrinos, which stream straight out of the star carrying energy away. The core is effectively refrigerated from within and must burn ever faster to compensate. This structure — an iron core inside shells of silicon, oxygen, neon, carbon, helium and hydrogen — is a robust prediction of stellar evolution codes, not a directly observed arrangement.',
        },
        evidence: 'model',
        references: [referenceId('woosley-2002-massive-stars')],
      },
      {
        id: 'binaries',
        kind: 'callout',
        tone: 'caution',
        title: 'Most massive stars are not alone',
        text: {
          essential:
            'The neat single-star picture above describes a minority of cases. Around 70 percent of massive stars exchange mass with a companion at some point — one star strips the other’s envelope, or the two merge. That changes the star’s mass, its rotation, and what it eventually explodes as.',
          detailed:
            'This has real consequences for the section’s claims. Some supernova classes almost certainly require a companion to have removed the hydrogen envelope. The masses of black holes seen in gravitational-wave mergers depend on binary evolution. And when a supernova’s progenitor mass is estimated from single-star models, the answer may be systematically wrong. Binary evolution is an active field precisely because it is both important and hard.',
        },
        references: [referenceId('sana-2012-binaries')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'lifetime-20',
            label: 'Main-sequence lifetime of a 20 M☉ star',
            value: 8.5,
            unit: 'million years',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'From evolutionary model grids at solar metallicity. Rotation and mass loss shift this by tens of percent, so the figure is a model result rather than a measured constant.',
            references: [referenceId('choi-2016-mist')],
          },
          {
            id: 'silicon-burning',
            label: 'Duration of silicon burning in a massive star',
            value: 1,
            unit: 'day (order of magnitude)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'The last stage before core collapse. The star spends millions of years on hydrogen and about a day on silicon — and from outside, nothing visibly changes until the explosion.',
            references: [referenceId('woosley-2002-massive-stars')],
          },
          {
            id: 'ccsn-threshold',
            label: 'Minimum initial mass for core collapse',
            value: 8,
            unit: 'M☉ (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'The boundary between stars that end as white dwarfs and stars that collapse is around 8 solar masses, but it is not sharp: it depends on metallicity, rotation, convective overshooting and binary history.',
            references: [
              referenceId('smartt-2009-progenitors'),
              referenceId('woosley-2002-massive-stars'),
            ],
          },
        ],
      },
      {
        id: 'link-iron',
        kind: 'cross-link',
        topicId: topicId('iron-the-turning-point'),
        rationale: 'Why the sequence stops at iron rather than continuing up the periodic table.',
      },
    ],
    furtherReading: [referenceId('woosley-2002-massive-stars'), referenceId('sana-2012-binaries')],
  },

  {
    id: topicId('red-giants-and-supergiants'),
    slug: 'red-giants-and-supergiants',
    sectionId: STARS,
    order: 10,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Red giants and supergiants',
    subtitle: 'How a star gets bigger by having its centre get smaller.',
    summary: {
      essential:
        'A red giant is a star whose core has run out of fuel and contracted, while its outer layers have swollen enormously in response. The surface is cooler — which is why it looks red — but there is so much more of it that the star is far brighter overall.',
      detailed:
        'The mechanism is a kind of see-saw. The core contracts and heats; the hydrogen shell around it burns harder; the extra energy flux pushes the envelope outward; expansion cools the surface. Core and envelope move in opposite directions, which is why "the star expands" and "the core collapses" are both true at the same time.',
      technical:
        'The mirror principle arises because the shell source has a very steep temperature dependence and sits at a nearly fixed mass coordinate. As M_core/R_core rises, the shell temperature rises, L_shell rises steeply, and the envelope must adjust to a much larger radius to transport it. With L ∝ R²T⁴ fixed by the shell, a hundredfold radius increase corresponds to a factor of about three drop in T_eff — the giant branch in the HR diagram.',
    },
    glossaryTerms: [glossaryTermId('hr-diagram'), glossaryTermId('luminosity')],
    related: [
      topicId('the-life-of-a-sun-like-star'),
      topicId('making-the-elements'),
      topicId('the-main-sequence'),
    ],
    blocks: [
      {
        id: 'why-big',
        kind: 'prose',
        text: {
          essential:
            'Think of the burning shell as a heater whose output has been turned way up. The envelope above it has to carry that energy outward, and the only way it can do so is by expanding — spreading the same power over a much larger surface. A larger surface at lower temperature can radiate the same total energy, and that is exactly what happens.',
          detailed:
            'The Stefan–Boltzmann law makes this quantitative. Luminosity goes as radius squared times temperature to the fourth. If the shell forces the luminosity up by a factor of a thousand and the surface cools by a factor of two, the radius must grow by a factor of roughly 130. That is the whole giant branch in one equation, and it is why every red giant is both cooler and vastly brighter than the star it came from.',
        },
      },
      {
        id: 'viz-giant',
        kind: 'visualization',
        visualizationId: visualizationId('red-giant-expansion'),
      },
      {
        id: 'claim-density',
        kind: 'claim',
        statement: {
          essential:
            'A red giant’s outer envelope is extraordinarily thin — in the outer layers, thinner than the best vacuum achievable in a laboratory on Earth. Meanwhile its core may be denser than any solid.',
          detailed:
            'This enormous internal contrast is why "the Sun will swallow the Earth" needs care. If Earth is engulfed, it does not meet a wall — it enters gas so tenuous it would barely register as matter. What destroys an engulfed planet is drag over time plus radiative heating, not impact. And whether it happens at all depends on how much mass the Sun sheds beforehand, since a lighter Sun holds the Earth in a wider orbit.',
        },
        evidence: 'model',
        references: [referenceId('choi-2016-mist'), referenceId('smith-2014-mass-loss')],
      },
      {
        id: 'dredge-up',
        kind: 'prose',
        text: {
          essential:
            'Giants are also where a star turns itself inside out. The swollen envelope becomes deeply convective, and convection reaches down into layers where fusion has changed the composition. Material that was processed in the interior is carried to the surface — where we can see it, and from where the star’s wind can blow it into space.',
          detailed:
            'These episodes are called dredge-ups, and they are how we know the interiors of stars do what the models say. A star that has undergone the third dredge-up on the asymptotic giant branch shows carbon and s-process elements such as barium and technetium in its spectrum. Technetium is decisive: it has no stable isotope and a half-life far shorter than a star’s life, so finding it at the surface proves it was made recently, inside, and brought up.',
        },
      },
      {
        id: 'claim-technetium',
        kind: 'claim',
        statement: {
          essential:
            'Technetium has been detected in the atmospheres of red giants. Since every isotope of technetium decays away in far less time than a star lives, it must have been manufactured inside that star and transported to the surface — direct evidence that nucleosynthesis and dredge-up are real.',
          detailed:
            'Merrill’s 1952 detection was decisive at exactly the moment the field needed it: it converted stellar nucleosynthesis from a plausible theory into something with a smoking gun. The longest-lived relevant isotope, technetium-99, has a half-life of about 211,000 years — negligible compared with the billions of years a giant has existed.',
        },
        evidence: 'established',
        references: [referenceId('herwig-2005-agb'), referenceId('b2fh-1957')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'betelgeuse-radius',
            label: 'Radius of Betelgeuse',
            value: 764,
            unit: 'R☉',
            uncertainty: { plus: 116, minus: 62 },
            context:
              'A red supergiant large enough that, placed at the Sun’s position, its surface would lie beyond the orbit of Mars. Radii of supergiants are hard to measure because the "surface" is extended and variable, so quoted values differ substantially between methods.',
            references: [referenceId('smith-2014-mass-loss')],
          },
          {
            id: 'giant-density',
            label: 'Typical density in a red giant’s outer envelope',
            value: 1e-8,
            unit: 'kg/m³ (order of magnitude)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Roughly a hundred-billionth of air at sea level — comparable to a good laboratory vacuum. The core at the same moment may exceed 10⁷ kg/m³.',
            references: [referenceId('choi-2016-mist')],
          },
        ],
      },
      {
        id: 'link-elements',
        kind: 'cross-link',
        topicId: topicId('making-the-elements'),
        rationale:
          'Giants are one of the Universe’s main chemical factories. This is what they make, and how it escapes.',
      },
    ],
    furtherReading: [referenceId('herwig-2005-agb')],
  },

  {
    id: topicId('making-the-elements'),
    slug: 'making-the-elements',
    sectionId: STARS,
    order: 11,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Making the elements',
    subtitle: 'Different atoms have genuinely different origin stories.',
    summary: {
      essential:
        'The Universe began with hydrogen, helium and a trace of lithium — and nothing else. Every other element was assembled later, but not all in the same place. Carbon and nitrogen come mostly from dying medium-mass stars; oxygen and most of the way to iron from massive stars and their explosions; iron itself substantially from a different kind of supernova; and gold and uranium from neutron-star collisions.',
      detailed:
        'The first three minutes made hydrogen and helium in a ratio that has been measured and matches prediction precisely. Then nothing new was made for a hundred million years, because there was nothing hot and dense enough. Stars restarted nucleosynthesis, and every generation since has enriched the gas a little further. The Universe is still only about 1.5 percent heavy elements by mass.',
      technical:
        'Big Bang nucleosynthesis fixes Y_p ≈ 0.247 and leaves essentially nothing above mass 7 because of the gaps at A = 5 and A = 8. Stellar nucleosynthesis proceeds by charged-particle burning up to the iron peak, plus neutron capture on the slow (s) and rapid (r) paths for heavier nuclei. Yields per site are computed from stellar models convolved with an initial mass function and integrated over galactic chemical evolution; the resulting element-by-element attributions carry model-dependent uncertainties of tens of percent, and larger for the r-process.',
    },
    glossaryTerms: [
      glossaryTermId('nucleosynthesis'),
      glossaryTermId('r-process'),
      glossaryTermId('s-process'),
      glossaryTermId('metallicity'),
    ],
    related: [
      topicId('iron-the-turning-point'),
      topicId('where-did-the-atoms-in-your-body-come-from'),
      topicId('supernovae'),
    ],
    blocks: [
      {
        id: 'first-minutes',
        kind: 'prose',
        text: {
          essential:
            'For the first few minutes after the Big Bang the whole Universe was hot enough to fuse. It made helium, some deuterium, a trace of lithium — and then it expanded and cooled below the temperature where fusion works, and stopped. That is the entire primordial inventory: about 75 percent hydrogen and 25 percent helium by mass, with everything else at the parts-per-billion level.',
          detailed:
            'Why did it stop there rather than continuing up the periodic table? Because there is no stable nucleus with 5 nucleons, and none with 8. To get past helium you have to jump those gaps, and jumping them requires three particles to meet at once — which needs densities that the expanding Universe had already fallen below. Two accidental gaps in nuclear physics are the reason the early Universe made no carbon.',
        },
      },
      {
        id: 'claim-bbn',
        kind: 'claim',
        statement: {
          essential:
            'The primordial helium fraction predicted by Big Bang nucleosynthesis agrees with the measured value, and the predicted deuterium abundance agrees to about one percent. These are among the strongest quantitative successes in cosmology.',
          detailed:
            'The prediction depends on one free parameter — the density of ordinary matter — and it must simultaneously fit four different light nuclei spanning nine orders of magnitude in abundance. It does, for deuterium, helium-3 and helium-4. Lithium-7 is the exception: the observed abundance in old stars is about a factor of three below prediction, and this "lithium problem" remains unresolved.',
        },
        evidence: 'established',
        references: [referenceId('cyburt-2016-bbn'), referenceId('planck-2018-vi')],
      },
      {
        id: 'triple-alpha',
        kind: 'prose',
        text: {
          essential:
            'Stars solve the mass-8 gap by brute force. In the core of a helium-burning star, two helium nuclei stick together into beryllium-8 — which falls apart again in a ten-thousandth of a billionth of a microsecond. But at high enough density, a third helium nucleus sometimes arrives during that vanishing instant, and the three of them become carbon.',
          detailed:
            'That this works at all depends on a coincidence. The reaction is only fast enough because carbon-12 happens to have an excited state at almost exactly the right energy. Fred Hoyle predicted that state must exist — not from nuclear theory, but from the observation that carbon exists — and told experimentalists where to look. They found it. It remains one of the few genuinely successful predictions made from anthropic reasoning, and it is worth being precise about that: the state was predicted, then measured, and the prediction was correct.',
        },
      },
      {
        id: 'viz-origins',
        kind: 'visualization',
        visualizationId: visualizationId('element-origins'),
      },
      {
        id: 'claim-attribution',
        kind: 'claim',
        statement: {
          essential:
            'Different elements come from different places. Carbon and nitrogen: mostly from dying low- and intermediate-mass stars. Oxygen, neon, magnesium and silicon: mostly from massive stars and their core-collapse supernovae. Iron: roughly half from thermonuclear supernovae of white dwarfs. Gold, platinum and uranium: from rapid neutron capture, with neutron-star mergers a confirmed site.',
          detailed:
            'These attributions come from galactic chemical evolution models — stellar yields computed per site, weighted by an initial mass function and integrated over the history of a galaxy, then compared against observed abundance patterns in stars of different ages. They fit well overall, and the broad picture is secure. But individual percentages carry real uncertainty: nitrogen and the elements between the iron peak and the heavy r-process are actively debated, and yields depend on rotation, mass loss and binary interaction that are themselves uncertain.',
        },
        evidence: 'model',
        references: [
          referenceId('kobayashi-2020-origin-of-elements'),
          referenceId('b2fh-1957'),
          referenceId('herwig-2005-agb'),
        ],
      },
      {
        id: 'neutron-capture',
        kind: 'prose',
        text: {
          essential:
            'Above iron, fusion stops paying. To go heavier, nuclei absorb neutrons instead — which is easy, because neutrons have no charge and no barrier to cross. The absorbed neutron later converts into a proton, and the element moves up one place. Do this slowly and you get the s-process; do it in a violent burst and you get the r-process.',
          detailed:
            'The distinction is about how the capture rate compares with the beta-decay rate. In an asymptotic giant branch star, neutrons trickle in slowly enough that any unstable nucleus decays before capturing again, so the path stays close to stability and stops at lead. In an environment with an overwhelming neutron flux, nuclei absorb far faster than they can decay, race out to extremely neutron-rich isotopes, and only afterwards decay back — which is the only way to reach uranium and thorium.',
        },
      },
      {
        id: 'claim-kilonova',
        kind: 'claim',
        statement: {
          essential:
            'In 2017 two neutron stars were observed merging, in gravitational waves and in light. The glow that followed matched the prediction for freshly made heavy elements, and strontium was later identified in its spectrum — direct evidence that neutron-star mergers manufacture r-process elements.',
          detailed:
            'This is the strongest single piece of evidence in the whole origin-of-elements story, because it is a site caught in the act rather than inferred. What it does not settle is whether mergers make *all* the r-process. The rate of mergers, and the mass ejected per merger, are still being pinned down, and abundance patterns in some very old stars are difficult to reconcile with mergers alone. A contribution from rare, rapidly rotating magnetised supernovae remains under investigation.',
        },
        evidence: 'inference',
        references: [
          referenceId('abbott-2017-gw170817'),
          referenceId('watson-2019-kilonova-strontium'),
          referenceId('kobayashi-2020-origin-of-elements'),
        ],
      },
      {
        id: 'stardust-caveat',
        kind: 'callout',
        tone: 'misconception',
        title: '“All the elements were made in stars”',
        text: {
          essential:
            'Almost, but the exceptions matter. The hydrogen in your body — about 10 percent of your mass, and every water molecule in you — was made in the first minutes of the Universe and has never been inside a star. Most lithium in the Universe was not made in ordinary stellar cores either. And the heaviest elements need neutron-star collisions, which are stellar corpses rather than stars.',
          detailed:
            'The phrase is worth keeping, because the sentiment is right and it is how most people first encounter the idea. It is just worth being able to say what it actually means: the elements heavier than helium were assembled, over billions of years, by several distinct processes in several distinct kinds of object. That is a better story than the slogan, not a worse one.',
        },
        references: [
          referenceId('cyburt-2016-bbn'),
          referenceId('kobayashi-2020-origin-of-elements'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'primordial-helium',
            label: 'Primordial helium mass fraction',
            value: 0.247,
            unit: 'dimensionless',
            uncertainty: { plusMinus: 0.003 },
            context:
              'Measured from emission lines in metal-poor galaxies and predicted independently by Big Bang nucleosynthesis using the baryon density from the microwave background. The two agree.',
            references: [referenceId('cyburt-2016-bbn')],
          },
          {
            id: 'solar-metallicity',
            label: 'Fraction of the Sun’s mass in elements heavier than helium',
            value: 1.4,
            unit: 'percent',
            uncertainty: { plusMinus: 0.2 },
            context:
              'After 9 billion years of galactic enrichment before the Sun formed, everything from lithium to uranium still amounts to under 2 percent by mass. The value has been revised downward over the last two decades as solar atmosphere models improved.',
            references: [referenceId('asplund-2021-solar-composition')],
          },
          {
            id: 'carbon-12-resonance',
            label: 'Energy of the Hoyle state in carbon-12',
            value: 7.654,
            unit: 'MeV',
            context:
              'The excited state Hoyle predicted must exist for the triple-alpha process to make carbon efficiently. Measured shortly after his prediction, close to where he said it would be.',
            references: [referenceId('hoyle-1954-carbon'), referenceId('audi-2021-atomic-mass')],
          },
        ],
      },
      {
        id: 'link-body',
        kind: 'cross-link',
        topicId: topicId('where-did-the-atoms-in-your-body-come-from'),
        rationale: 'The same story, told for the specific atoms you are made of.',
      },
    ],
    furtherReading: [
      referenceId('b2fh-1957'),
      referenceId('kobayashi-2020-origin-of-elements'),
      referenceId('cyburt-2016-bbn'),
    ],
  },

  {
    id: topicId('iron-the-turning-point'),
    slug: 'iron-the-turning-point',
    sectionId: STARS,
    order: 12,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Iron: the turning point',
    subtitle: 'The one element a star cannot profit from.',
    summary: {
      essential:
        'Fusing light nuclei releases energy. Fusing heavy ones costs energy. The crossover is at iron. So when a massive star has built an iron core, it has reached the end: no further fusion can pay for the pressure holding the star up, and the core collapses.',
      detailed:
        'The reason is one curve — binding energy per nucleon against atomic mass. It rises steeply from hydrogen, peaks near iron-56 and nickel-62, and declines slowly thereafter. Every fusion reaction that moves *up* that curve releases the difference as energy. Reactions that move down it must be paid for. A star can only run downhill in energy, so it can only run up the curve to the peak.',
      technical:
        'Binding energy per nucleon peaks at ⁶²Ni (8.7945 MeV) with ⁵⁸Fe and ⁵⁶Fe just below. Silicon burning proceeds via nuclear statistical equilibrium and terminates at ⁵⁶Ni, which beta-decays to ⁵⁶Fe through ⁵⁶Co — the decay chain that powers supernova light curves. Once the core is iron-group, further fusion is endothermic, and photodisintegration plus electron capture remove pressure support, initiating collapse on a free-fall timescale of order 0.1 s.',
    },
    glossaryTerms: [glossaryTermId('binding-energy'), glossaryTermId('nucleosynthesis')],
    related: [
      topicId('supernovae'),
      topicId('making-the-elements'),
      topicId('the-life-of-a-massive-star'),
    ],
    blocks: [
      {
        id: 'the-curve',
        kind: 'prose',
        text: {
          essential:
            'There is one graph that explains why stars die, why fusion and fission both release energy, and why iron is special. It plots how tightly bound each nucleus is, per particle inside it. Light nuclei are loosely bound; iron-group nuclei are the most tightly bound of all; very heavy nuclei are slightly less so. Energy is released by any change that moves toward the peak.',
          detailed:
            'That single shape does a lot of work. Fusion of light elements moves right toward the peak and releases energy — that is stars. Fission of uranium moves left toward the peak and releases energy — that is reactors and bombs. And nothing releases energy by fusing past the peak, which is why no star has ever been powered by making gold.',
        },
      },
      {
        id: 'viz-binding',
        kind: 'visualization',
        visualizationId: visualizationId('binding-energy-curve'),
      },
      {
        id: 'claim-peak',
        kind: 'claim',
        statement: {
          essential:
            'The most tightly bound nucleus is nickel-62, with iron-58 and iron-56 close behind. Fusion up to this region releases energy; fusion beyond it absorbs energy.',
          detailed:
            'People often say "iron-56 is the most tightly bound", and it is very nearly true — nickel-62 beats it by about 0.09 MeV per nucleon. But iron-56 is what actually accumulates, for a different reason: silicon burning in a star proceeds through nickel-56, which is doubly magic and easily assembled from 14 helium nuclei, and which then decays to iron-56. So the abundance peak in nature sits at iron-56 even though the binding-energy peak sits at nickel-62. The distinction between "most bound" and "most abundant" is worth keeping straight.',
        },
        evidence: 'established',
        references: [
          referenceId('audi-2021-atomic-mass'),
          referenceId('woosley-2002-massive-stars'),
        ],
      },
      {
        id: 'the-collapse',
        kind: 'prose',
        text: {
          essential:
            'The moment the core is iron, the star is in trouble it cannot get out of. Every previous time a fuel ran out, the core contracted, heated, and lit the next fuel. This time there is no next fuel. Contraction heats the core, but heating it now destroys iron rather than fusing it: the photons become energetic enough to blast iron nuclei apart into helium, absorbing energy exactly when the star needs to produce it.',
          detailed:
            'Two processes remove support at once. Photodisintegration undoes in a fraction of a second what took the star a million years to build, consuming energy as it goes. And the crushing density forces electrons into protons, making neutrons and neutrinos — which removes the electrons whose degeneracy pressure was holding the core up, and lets the neutrinos carry the energy away. Both effects accelerate the collapse that caused them. The core falls inward in well under a second.',
        },
      },
      {
        id: 'claim-timescale',
        kind: 'claim',
        statement: {
          essential:
            'An iron core about the size of the Earth collapses to roughly 30 kilometres across in less than a second, reaching speeds of a quarter of the speed of light.',
          detailed:
            'This is a calculation, not an observation — nobody has watched a core collapse directly. What has been observed is its consequence: the neutrino burst from SN 1987A arrived hours before the light, exactly as predicted, because the neutrinos leave the collapsing core immediately while the shock takes hours to climb out through the star. That timing is the closest thing to a direct measurement of core collapse that exists.',
        },
        evidence: 'model',
        references: [
          referenceId('janka-2012-explosion-mechanism'),
          referenceId('hirata-1987-sn1987a'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'ni62-binding',
            label: 'Binding energy per nucleon of nickel-62',
            value: 8.7945,
            unit: 'MeV',
            context:
              'The maximum of the binding-energy curve. Iron-56 is at 8.7903 MeV and iron-58 at 8.7921 — the three are within 0.005 percent of each other, which is why the "iron peak" is a region rather than a point.',
            references: [referenceId('audi-2021-atomic-mass')],
          },
          {
            id: 'fe-core-mass',
            label: 'Iron core mass at the point of collapse',
            value: 1.4,
            unit: 'M☉ (approximately)',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Close to the Chandrasekhar mass, because that is precisely what sets the limit: the iron core is supported by electron degeneracy, and collapses when it can no longer be.',
            references: [
              referenceId('woosley-2002-massive-stars'),
              referenceId('chandrasekhar-1931'),
            ],
          },
        ],
      },
      {
        id: 'link-supernova',
        kind: 'cross-link',
        topicId: topicId('supernovae'),
        rationale: 'What happens in the second after the collapse begins.',
      },
    ],
    furtherReading: [
      referenceId('audi-2021-atomic-mass'),
      referenceId('woosley-2002-massive-stars'),
    ],
  },
];
