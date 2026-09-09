/**
 * Quantum Physics — how classical physics ran out, and what replaced it.
 *
 * The organising rule for this file, and for the section: each topic exists
 * because the previous one failed. Blackbody radiation is here because
 * classical thermodynamics gave an absurd answer; Planck is here because
 * something had to fix it; the photoelectric effect is here because Planck's
 * fix was mathematical and Einstein made it physical; Bohr is here because
 * spectra demanded it and then Bohr's own model broke. Presented as a list of
 * discoveries this is trivia. Presented as a chain of forced moves it is an
 * argument, and the argument is the thing worth learning.
 *
 * Voice: explain it first the way you would to a bright student who has not
 * met the mathematics, then bring the mathematics in as the thing that makes
 * the intuition precise. Never childish, never a paper.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const QUANTUM = sectionId('quantum');
const REVIEWED = '2026-09-09';

export const QUANTUM_FOUNDATION_TOPICS: readonly Topic[] = [
  {
    id: topicId('classical-limits'),
    slug: 'where-classical-physics-ran-out',
    sectionId: QUANTUM,
    order: 1,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Where classical physics ran out',
    subtitle: 'Three ordinary questions that the physics of 1900 could not answer.',
    summary: {
      essential:
        'By 1900 physics could describe planets, engines, light and electricity superbly. But three everyday questions broke it: why a hot object glows the colours it does, why light knocks electrons out of metal only above a certain colour, and why atoms emit sharp lines instead of a smear. Each answer needed the same new idea.',
      detailed:
        'It is worth being precise about what "broke" means. Classical physics did not merely fail to have an answer to these questions — it gave definite answers that were wrong, and in one case absurd. That is much more serious. A theory with a gap can be extended. A theory that confidently predicts infinite energy from a warm oven has something wrong at its foundations.',
      technical:
        'The three failures are of different kinds: the Rayleigh–Jeans law diverges (a mathematical catastrophe), the photoelectric threshold contradicts the energy-flux argument of classical electromagnetism (a qualitative contradiction), and discrete atomic spectra have no classical mechanism at all (an absence). Together they localised the problem to the exchange of energy between radiation and matter.',
    },
    glossaryTerms: [glossaryTermId('planck-constant')],
    related: [
      topicId('blackbody-radiation'),
      topicId('planck-quantum'),
      topicId('newtonian-limits'),
    ],
    blocks: [
      {
        id: 'the-confidence',
        kind: 'prose',
        text: {
          essential:
            'Start with how good the situation looked. By the end of the nineteenth century, Newton’s mechanics predicted the motion of the planets, Maxwell’s equations unified electricity, magnetism and light, and thermodynamics explained heat engines. A physicist of 1899 could reasonably feel that the framework was finished and only the decimal places were left.',
          detailed:
            'That confidence is often mocked, and it should not be. It was earned. The same framework had predicted radio waves before anyone had detected them, had given the speed of light from two laboratory constants, and had explained the behaviour of gases from the motion of invisible molecules. Being wrong at the edges is what happens to successful theories; it is not a sign that the theory was foolish.',
        },
      },
      {
        id: 'claim-three-failures',
        kind: 'claim',
        statement: {
          essential:
            'Three specific experimental facts had no classical explanation: the spectrum of light from a hot object, the existence of a threshold colour in the photoelectric effect, and the sharp discrete lines in atomic spectra.',
          detailed:
            'Take them in turn. A hot object glows, and the colour distribution of that glow was measured very accurately in the 1890s; classical statistical mechanics predicted a curve that not only missed the data but rose without limit at short wavelengths. Shine light on a metal and electrons come off — but only if the light is bluer than a certain colour, no matter how bright it is, which classical wave theory flatly forbids. And heat a gas and it emits light at a handful of exact wavelengths rather than a continuous rainbow, with no classical mechanism to explain why those wavelengths.',
          technical:
            'These are not three separate anomalies. Each concerns the exchange of energy between the electromagnetic field and matter, and each is resolved by the same rule: that exchange happens in discrete amounts proportional to frequency, E = hf. That one rule, found by Planck as a fitting device, turned out to be the hinge of twentieth-century physics.',
        },
        evidence: 'established',
        references: [
          referenceId('planck-1901-radiation'),
          referenceId('einstein-1905-photoelectric'),
          referenceId('bohr-1913-atom'),
        ],
      },
      {
        id: 'not-small-corrections',
        kind: 'callout',
        tone: 'note',
        title: 'Why these could not be patched',
        text: {
          essential:
            'It is natural to assume that anomalies get fixed by adjusting the existing theory — a correction term here, a better model of the material there. That was tried, seriously, for years. What made these three different is that the classical predictions were not slightly off; they were structurally wrong. An infinite answer is not a number waiting for a correction, and a threshold frequency cannot be produced by any theory in which energy arrives continuously.',
          detailed:
            'This distinction matters for how you read the rest of this section. Quantum mechanics is not a refinement bolted onto classical physics. It is a different account of what a physical state is, from which classical physics emerges as an approximation in the regime where actions are large compared with h. That is why the concepts have to be learned rather than translated.',
        },
      },
      {
        id: 'link-blackbody',
        kind: 'cross-link',
        topicId: topicId('blackbody-radiation'),
        rationale: 'The first of the three, and the one whose failure was mathematically absurd.',
      },
    ],
    furtherReading: [referenceId('planck-1901-radiation'), referenceId('griffiths-2018-quantum')],
  },

  {
    id: topicId('blackbody-radiation'),
    slug: 'blackbody-radiation',
    sectionId: QUANTUM,
    order: 2,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Blackbody radiation',
    subtitle: 'Why a warm oven should have blinded everyone in the room.',
    summary: {
      essential:
        'Everything warm glows. The colour depends only on temperature, not on what the object is made of — which is a strong hint that something very general is going on. Classical physics predicted that any warm object should pour out an infinite amount of short-wavelength light. Ovens do not do this, and the gap between the prediction and the measurement is where quantum physics starts.',
      detailed:
        'The classical argument is short and seemingly airtight. Treat the radiation in a cavity as a collection of standing waves. Statistical mechanics says each mode gets, on average, k_BT of energy. Count the modes: there are more of them at short wavelengths, without limit. Multiply, and the total energy is infinite. The measured curve instead rises, peaks, and falls — and the peak moves to shorter wavelengths as the object gets hotter, which is why a heated poker goes red, then orange, then white.',
      technical:
        'The Rayleigh–Jeans law, u(λ,T) = 8πk_BT/λ⁴, follows from equipartition and mode counting and diverges as λ → 0 — the "ultraviolet catastrophe", named by Ehrenfest in 1911. Wien’s law fits the short-wavelength end and fails at long wavelengths. Planck’s law, u(λ,T) = (8πhc/λ⁵)/(e^{hc/λk_BT} − 1), reproduces both limits and the whole measured curve, and reduces to Rayleigh–Jeans when hc/λ ≪ k_BT.',
    },
    glossaryTerms: [glossaryTermId('planck-constant')],
    related: [topicId('classical-limits'), topicId('planck-quantum'), topicId('cmb')],
    blocks: [
      {
        id: 'colour-of-heat',
        kind: 'prose',
        text: {
          essential:
            'Heat a piece of iron. At first it just feels hot — it is radiating, but in the infrared where your eye cannot see. Keep heating and it glows dull red, then orange, then yellow, then a blue-white. Notice what did not enter that description: what the metal is. A block of carbon at the same temperature glows the same colour. The glow depends on temperature and nothing else.',
          detailed:
            'That independence is the clue. When a result does not depend on the details of the material, it usually reflects something about the radiation itself rather than about the substance. Physicists made this precise with the idea of a "blackbody": an idealised object that absorbs all light falling on it and, in equilibrium, re-emits a spectrum determined only by its temperature. A small hole in a heated cavity is an excellent approximation to one, and that is what was actually measured.',
        },
      },
      {
        id: 'viz-blackbody',
        kind: 'visualization',
        visualizationId: visualizationId('blackbody-spectrum'),
      },
      {
        id: 'claim-catastrophe',
        kind: 'claim',
        statement: {
          essential:
            'Classical physics predicted that the intensity should keep rising as the wavelength gets shorter, without limit. Add up all the light and you get infinity — from a warm oven. The prediction is not slightly wrong; it is absurd.',
          detailed:
            'The reasoning, step by step. Radiation trapped in a box can only take the forms that fit — standing waves, like the notes on a guitar string. Count how many of these fit at each wavelength: at short wavelengths there are far more of them, and the number grows without bound. Now use the classical rule that in thermal equilibrium every mode gets the same average energy, k_BT. More modes, each with the same energy, means more energy at short wavelengths, forever. This is the ultraviolet catastrophe, and it is a genuine prediction of nineteenth-century physics rather than a caricature of it.',
          technical:
            'The mode density in 3D is 8π/λ⁴ per unit volume per unit wavelength; equipartition assigns k_BT per mode (½k_BT per quadratic degree of freedom, two per mode). The product is the Rayleigh–Jeans spectral energy density, whose integral over λ diverges at the short-wavelength end. Note that the derivation is correct given its premises: the failure is in equipartition, applied to modes whose energy quantum exceeds k_BT.',
        },
        evidence: 'established',
        references: [referenceId('planck-1901-radiation'), referenceId('griffiths-2018-quantum')],
      },
      {
        id: 'not-ultraviolet',
        kind: 'callout',
        tone: 'misconception',
        title: '“The ultraviolet catastrophe was an observed disaster”',
        text: {
          essential:
            'Nothing catastrophic was ever seen. The catastrophe is entirely in the theory: the classical formula predicts unbounded energy at short wavelengths, and reality politely declines. The name was coined in 1911, a decade after Planck had already solved the problem, so it is a label historians applied looking backwards rather than the crisis that drove Planck’s work.',
          detailed:
            'What actually drove Planck was more mundane and more interesting: high-quality new measurements from the Physikalisch-Technische Reichsanstalt in Berlin showed that Wien’s law, which fitted the short-wavelength data well, failed at long wavelengths. Planck was looking for a formula that fitted both ends. He found one by interpolation in October 1900, and then spent two months trying to derive it — which is when the quantum appeared.',
        },
        references: [referenceId('planck-1901-radiation')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'wien-constant',
            label: 'Wien displacement constant',
            value: 2.897771955e-3,
            unit: 'm·K',
            context:
              'The peak wavelength times the temperature is this constant, so a 5,772 K solar photosphere peaks near 500 nm — in the middle of the visible range, which is not a coincidence for creatures that evolved under it.',
            references: [referenceId('codata-2018')],
          },
          {
            id: 'cmb-blackbody',
            label: 'Deviation of the CMB from a perfect blackbody spectrum',
            value: 5e-5,
            unit: 'fractional, upper bound',
            uncertainty: { kind: 'upper-limit' },
            context:
              'Measured by COBE/FIRAS. The cosmic microwave background is the most precise blackbody spectrum ever measured, anywhere — a direct confirmation of Planck’s law on a cosmological scale.',
            references: [referenceId('mather-1994-cobe-firas')],
          },
        ],
      },
      {
        id: 'link-planck',
        kind: 'cross-link',
        topicId: topicId('planck-quantum'),
        rationale: 'What Planck had to assume to make the formula come out right.',
      },
    ],
    furtherReading: [referenceId('planck-1901-radiation'), referenceId('mather-1994-cobe-firas')],
  },

  {
    id: topicId('planck-quantum'),
    slug: 'plancks-quantum',
    sectionId: QUANTUM,
    order: 3,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Planck’s quantum',
    subtitle: 'A fix he did not believe in, which turned out to be the foundation.',
    summary: {
      essential:
        'Planck found that the blackbody curve comes out exactly right if energy is exchanged between light and matter only in discrete lumps, each of size E = hf — proportional to the frequency. He introduced h as a fitting constant and regarded the lumpiness as a mathematical trick. It was not a trick.',
      detailed:
        'The key move is to stop letting a mode of the field take any energy it likes. If a mode of frequency f can only hold 0, hf, 2hf, 3hf and so on, then high-frequency modes need a large minimum payment to be excited at all. At temperature T, thermal energy comes in typical parcels of about k_BT; modes needing much more than that are effectively frozen out. The short-wavelength divergence disappears not by being cancelled but by never being paid for.',
      technical:
        'Planck’s derivation replaces equipartition with the mean energy of a quantised oscillator, ⟨E⟩ = hf/(e^{hf/k_BT} − 1). Multiplying by the classical mode density gives Planck’s law. In the limit hf ≪ k_BT this expands to k_BT − hf/2 + …, recovering equipartition and hence Rayleigh–Jeans; in the opposite limit it is exponentially suppressed, giving Wien.',
    },
    glossaryTerms: [glossaryTermId('planck-constant')],
    related: [
      topicId('blackbody-radiation'),
      topicId('photons-and-photoelectric'),
      topicId('why-world-looks-classical'),
    ],
    blocks: [
      {
        id: 'the-idea',
        kind: 'prose',
        text: {
          essential:
            'Here is the idea in one sentence: expensive things do not get bought at random. If a mode of the electromagnetic field can only accept energy in packets of size hf, then a very high-frequency mode demands a very large packet. Thermal jostling at temperature T supplies energy in typical amounts of about k_BT. When the packet costs far more than that, the mode simply never gets excited — and the runaway at short wavelengths is gone.',
          detailed:
            'Compare it to a shop where everything is priced in whole coins of different denominations. Cheap items get bought constantly; an item priced at a thousand coins is almost never bought by someone carrying loose change. Classical physics assumed you could buy any fraction of anything, which is why every mode got its k_BT and the total ran away. Quantisation puts a minimum price on each mode, rising with frequency, and the market for expensive modes collapses.',
          technical:
            'Concretely: ⟨E⟩ = Σ n hf e^{−nhf/k_BT} / Σ e^{−nhf/k_BT} = hf/(e^{hf/k_BT} − 1). For hf ≪ k_BT this tends to k_BT; for hf ≫ k_BT it falls off as hf·e^{−hf/k_BT}. The exponential suppression is the entire content of the fix, and h is the constant that decides where the crossover sits.',
        },
      },
      {
        id: 'reluctance',
        kind: 'callout',
        tone: 'history',
        title: 'An act of desperation',
        text: {
          essential:
            'Planck called it "an act of desperation" and spent years trying to derive his own result without the quantum. He believed the discreteness was a property of how his hypothetical oscillators absorbed energy, not of light itself. It took Einstein, five years later, to say the harder thing: that light itself comes in quanta.',
          detailed:
            'This is worth sitting with, because it shows how physics actually works. A correct and revolutionary idea can be introduced by someone who does not believe it, as a device to make a formula fit. What converts it from a trick into physics is finding that the same assumption, independently, explains something else. That is exactly what happened next.',
        },
        references: [referenceId('planck-1901-radiation')],
      },
      {
        id: 'claim-h',
        kind: 'claim',
        statement: {
          essential:
            'The constant h sets the scale of the quantum world. It is fantastically small in everyday units — 6.626 × 10⁻³⁴ joule-seconds — which is precisely why the world looks continuous to us.',
          detailed:
            'The quantity h has units of energy × time, which is called action. Quantum effects matter when the action involved in a process is comparable to h. For a swinging pendulum the action is around 1 J·s, roughly 10³⁴ times h, so the quantisation of its energy levels is unobservable. For an electron in an atom the action is of order h itself, and the quantisation is everything. There is no sharp boundary between the quantum and classical worlds — there is a ratio, and it is enormous in one regime and of order one in the other.',
          technical:
            'Since the 2019 SI redefinition, h is exact by definition: 6.62607015 × 10⁻³⁴ J·s. The kilogram is now defined in terms of it. The reduced constant ħ = h/2π appears wherever angular measure is involved, and it is ħ that sets the commutator [x̂, p̂] = iħ and hence the uncertainty relation.',
        },
        evidence: 'established',
        references: [referenceId('codata-2018'), referenceId('planck-1901-radiation')],
      },
      {
        id: 'def-h',
        kind: 'definition',
        termId: glossaryTermId('planck-constant'),
      },
      {
        id: 'link-photoelectric',
        kind: 'cross-link',
        topicId: topicId('photons-and-photoelectric'),
        rationale: 'The experiment that made the quantum a property of light, not of oscillators.',
      },
    ],
    furtherReading: [referenceId('planck-1901-radiation'), referenceId('codata-2018')],
  },

  {
    id: topicId('photons-and-photoelectric'),
    slug: 'photons-and-the-photoelectric-effect',
    sectionId: QUANTUM,
    order: 4,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Photons and the photoelectric effect',
    subtitle: 'The experiment where brightness does not help and colour decides everything.',
    summary: {
      essential:
        'Shine light on a metal and electrons come out — but only if the light is bluer than a threshold colour. Below that colour, nothing happens no matter how bright the light or how long you wait. Above it, even feeble light produces electrons immediately. Waves cannot do this. Particles of light — photons, each carrying E = hf — can.',
      detailed:
        'The classical prediction is unambiguous and wrong in three separate ways. Classically, energy arrives continuously, so a dim light should eventually accumulate enough energy at an electron — after a measurable delay — and brighter light should give the ejected electrons more energy. What is measured instead: no delay, no threshold dependence on intensity, and electron energy that depends on frequency alone. Intensity changes only how many electrons come out.',
      technical:
        'Einstein’s relation is E_max = hf − φ, where φ is the work function of the metal. The stopping voltage satisfies eV_stop = hf − φ, so a plot of V_stop against f is a straight line whose slope is h/e and whose intercept gives φ — independent of intensity. Millikan measured this in 1916, obtaining h to about 0.5%, while explicitly disbelieving the light-quantum hypothesis he was confirming.',
    },
    glossaryTerms: [glossaryTermId('planck-constant')],
    related: [
      topicId('planck-quantum'),
      topicId('wave-particle-duality'),
      topicId('quantum-fields'),
    ],
    blocks: [
      {
        id: 'the-experiment',
        kind: 'prose',
        text: {
          essential:
            'The setup is simple enough for a school laboratory. Light hits a clean metal surface in a vacuum; a nearby electrode collects any electrons knocked loose; a meter reads the current. You can change the brightness and the colour independently, and you can apply a voltage that pushes back against the electrons to find out how much energy they left with.',
          detailed:
            'Now the results, and why each one is a problem. Turn the brightness up on red light and nothing happens — no current at all, at any brightness. Switch to ultraviolet at the faintest setting and the current appears immediately, within nanoseconds. Turn the ultraviolet brightness up and you get more electrons, each with exactly the same maximum energy as before. Make the light bluer and the electrons come out faster. Every one of those observations contradicts the picture of light as a continuous wave delivering energy at a rate proportional to its intensity.',
        },
      },
      {
        id: 'viz-photoelectric',
        kind: 'visualization',
        visualizationId: visualizationId('photoelectric-effect'),
      },
      {
        id: 'claim-einstein',
        kind: 'claim',
        statement: {
          essential:
            'Einstein’s explanation: light arrives as discrete quanta of energy hf. One quantum is absorbed by one electron. If hf exceeds the energy binding the electron to the metal, it escapes with the difference; if not, nothing happens however many quanta arrive.',
          detailed:
            'Read the equation E_max = hf − φ as a transaction. The photon pays hf. The metal charges φ — the work function, the minimum energy needed to remove an electron from the surface. Whatever is left over becomes kinetic energy. Since one photon interacts with one electron, having more photons cannot help an individual electron over the barrier; it only means more transactions. That is exactly why intensity changes the count and not the energy, and why there is a threshold frequency f₀ = φ/h below which no photon is rich enough.',
          technical:
            'The linearity of V_stop against f, with slope h/e independent of the metal and intercept −φ/e depending on it, is the sharp test. Millikan’s 1916 measurement gave h = 6.57 × 10⁻³⁴ J·s. Einstein’s 1921 Nobel Prize cites this work rather than relativity. Note that a two-photon process can beat the threshold at very high intensities — this is real, routine in modern laser physics, and does not undermine the argument, because it requires intensities far beyond anything available in 1905.',
        },
        evidence: 'established',
        references: [
          referenceId('einstein-1905-photoelectric'),
          referenceId('millikan-1916-photoelectric'),
        ],
      },
      {
        id: 'not-tiny-bullets',
        kind: 'callout',
        tone: 'caution',
        title: 'A photon is not a tiny bullet of light',
        text: {
          essential:
            'It is tempting to picture a photon as a small hard grain flying along. That picture gets the energy bookkeeping right and almost everything else wrong: photons have no definite position while in flight, they interfere with themselves, and their number is not even fixed — photons are created and destroyed constantly. The honest modern statement is that a photon is a single quantised excitation of the electromagnetic field.',
          detailed:
            'What the photoelectric effect really establishes is narrower than "light is made of particles". It establishes that light exchanges energy with matter in discrete amounts proportional to frequency. That is a statement about interaction, not about light travelling as a stream of pellets. The full account arrives with quantum field theory, later in this section, and it retains the discreteness while dropping the pellets.',
        },
        references: [referenceId('peskin-schroeder-1995')],
      },
      {
        id: 'link-duality',
        kind: 'cross-link',
        topicId: topicId('wave-particle-duality'),
        rationale:
          'Light behaves as a wave in one experiment and in quanta in another. Both are true, and the tension is the point.',
      },
    ],
    furtherReading: [
      referenceId('einstein-1905-photoelectric'),
      referenceId('millikan-1916-photoelectric'),
    ],
  },

  {
    id: topicId('atomic-spectra-bohr'),
    slug: 'atomic-spectra-and-the-bohr-model',
    sectionId: QUANTUM,
    order: 5,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Atomic spectra and the Bohr model',
    subtitle:
      'A barcode for every element, a model that explained it, and why that model had to go.',
    summary: {
      essential:
        'Heated hydrogen emits light at a few exact wavelengths, always the same ones, forming a barcode unique to the element. Bohr explained it in 1913 by allowing only certain electron orbits and saying light is emitted when an electron drops between them. The numbers came out right — and the model was still wrong.',
      detailed:
        'Bohr’s model gets the hydrogen spectrum exactly right, which is remarkable, and it does so with assumptions that are not derived from anything. It simply forbids the electron from radiating in an allowed orbit — the one thing classical electromagnetism insists it must do. It works for hydrogen and fails for helium. It has no account of why some spectral lines are brighter than others. It is best understood as a brilliant piece of scaffolding: right enough to show that discreteness lives inside the atom, wrong enough to force something deeper.',
      technical:
        'Bohr quantised angular momentum as L = nħ, giving E_n = −13.606 eV/n² and r_n = n²a₀ with a₀ = 5.29 × 10⁻¹¹ m. Transitions give 1/λ = R_∞(1/n₁² − 1/n₂²) with R_∞ = 1.097 × 10⁷ m⁻¹, reproducing the Balmer, Lyman and Paschen series. The model fails for multi-electron atoms, gives no transition rates, contradicts the later result that the ground state has zero orbital angular momentum, and assumes definite orbits that the uncertainty relation forbids.',
    },
    glossaryTerms: [glossaryTermId('planck-constant')],
    related: [
      topicId('photons-and-photoelectric'),
      topicId('matter-waves'),
      topicId('atomic-structure'),
    ],
    blocks: [
      {
        id: 'barcode',
        kind: 'prose',
        text: {
          essential:
            'Pass sunlight through a prism and you get a continuous rainbow. Pass light from a tube of hot hydrogen through the same prism and you get four bright lines against darkness — red, blue-green, violet, deep violet — and nothing in between. Every element has its own pattern, unchanging, and it is how astronomers know what stars are made of without going there.',
          detailed:
            'The precision of this is easy to underestimate. The wavelengths are reproducible to many decimal places, in a laboratory or in a galaxy a billion light years away. In 1885 a Swiss schoolteacher, Johann Balmer, found that the four visible hydrogen lines fit a simple formula involving small whole numbers. He had no idea why. For nearly thirty years that formula sat there — a piece of exact numerology in the middle of physics — waiting for an explanation.',
        },
      },
      {
        id: 'viz-levels',
        kind: 'visualization',
        visualizationId: visualizationId('atomic-energy-levels'),
      },
      {
        id: 'claim-bohr',
        kind: 'claim',
        statement: {
          essential:
            'Bohr proposed that an electron in an atom can only occupy certain allowed states with certain energies, and that light is emitted when it jumps from a higher one to a lower one, carrying away exactly the energy difference as a photon.',
          detailed:
            'The two rules do all the work. First: allowed states exist, and while in one, the electron does not radiate — an outright contradiction of classical electromagnetism, asserted because the alternative is that every atom collapses in about 10⁻¹¹ seconds, which they visibly do not. Second: when the electron moves from a state of energy E₂ to one of energy E₁, a single photon carries the difference, so hf = E₂ − E₁. Because the energies are discrete, the frequencies are discrete. The barcode is a picture of the atom’s allowed energies.',
          technical:
            'Bohr obtained the levels by imposing L = mvr = nħ on a circular Coulomb orbit, giving E_n = −(m e⁴)/(8ε₀²h²n²) = −13.606 eV/n². The Balmer series is n₂ → 2, the Lyman series n₂ → 1 (ultraviolet), the Paschen series n₂ → 3 (infrared). Modern spectroscopy measures the 1S–2S transition in hydrogen to about 15 significant figures, and the agreement with quantum electrodynamics at that precision is one of the strongest tests in physics.',
        },
        evidence: 'established',
        references: [referenceId('bohr-1913-atom')],
      },
      {
        id: 'bohr-failures',
        kind: 'callout',
        tone: 'caution',
        title: 'Why the Bohr model is taught and then withdrawn',
        text: {
          essential:
            'The Bohr model is not a simplified version of the truth; it is a different and incorrect picture that happens to give the right hydrogen energies. Electrons do not travel in circular orbits. The ground state has zero orbital angular momentum, not ħ as Bohr required. The model gives no way to calculate how bright a line should be, and it fails outright for helium — an atom with two electrons.',
          detailed:
            'So why teach it? Because it establishes the one idea that survives: the energies inside an atom are discrete, and spectral lines are transitions between them. That much is exactly right and is retained by quantum mechanics. Everything about *how* the electron occupies those states had to be replaced, and the replacement — orbitals described by a wavefunction — is genuinely different, not a refinement. Hold on to the energy-level ladder; let go of the orbits.',
        },
        references: [referenceId('bohr-1913-atom'), referenceId('griffiths-2018-quantum')],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'rydberg-energy',
            label: 'Hydrogen ground-state binding energy',
            value: 13.605693,
            unit: 'eV',
            uncertainty: { plusMinus: 0.000001 },
            context:
              'The energy needed to remove the electron from a hydrogen atom in its lowest state. Bohr’s model gives this figure correctly, which is why it was taken seriously despite its assumptions.',
            references: [referenceId('codata-2018')],
          },
          {
            id: 'bohr-radius',
            label: 'Bohr radius',
            value: 5.29177e-11,
            unit: 'm',
            context:
              'The characteristic size of a hydrogen atom. In quantum mechanics it is not an orbit radius but the most probable distance of the electron from the nucleus in the ground state.',
            references: [referenceId('codata-2018')],
          },
        ],
      },
      {
        id: 'link-matter-waves',
        kind: 'cross-link',
        topicId: topicId('matter-waves'),
        rationale:
          'The idea that turned Bohr’s arbitrary quantisation rule into something with a reason behind it.',
      },
    ],
    furtherReading: [referenceId('bohr-1913-atom'), referenceId('griffiths-2018-quantum')],
  },

  {
    id: topicId('matter-waves'),
    slug: 'matter-waves',
    sectionId: QUANTUM,
    order: 6,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Matter waves',
    subtitle:
      'If light can behave like particles, de Broglie asked, can particles behave like waves?',
    summary: {
      essential:
        'In 1924 Louis de Broglie made a symmetry argument: light was known to carry momentum p = h/λ, so perhaps anything with momentum has a wavelength λ = h/p. It sounded like numerology. Three years later, electrons were observed diffracting off a crystal exactly as the formula predicted.',
      detailed:
        'The proposal also does something Bohr could not: it explains why only certain orbits are allowed. If an electron has a wavelength, then a stable orbit must fit a whole number of wavelengths around its circumference — otherwise the wave interferes with itself destructively and cannot persist. Setting 2πr = nλ with λ = h/p reproduces Bohr’s quantisation condition L = nħ exactly. A rule that had been imposed by hand now followed from a wave fitting into a space.',
      technical:
        'λ = h/p, with p = γmv relativistically. For a 100 eV electron λ ≈ 0.12 nm — comparable to atomic spacing, which is why crystals work as diffraction gratings for electrons and why electron microscopes can resolve far below the optical limit. For a 70 kg person walking at 1 m/s, λ ≈ 10⁻³⁵ m, some twenty orders of magnitude below the Planck length, which is why nobody diffracts through doorways.',
    },
    glossaryTerms: [glossaryTermId('wavefunction'), glossaryTermId('planck-constant')],
    related: [
      topicId('atomic-spectra-bohr'),
      topicId('wave-particle-duality'),
      topicId('double-slit'),
    ],
    blocks: [
      {
        id: 'the-symmetry',
        kind: 'prose',
        text: {
          essential:
            'De Broglie’s reasoning was almost embarrassingly simple. Physics had just accepted that light — the textbook example of a wave — also behaves as discrete quanta carrying momentum. He asked the mirror question: electrons are the textbook example of particles, so do they also have a wavelength? He proposed λ = h/p, the same relation read backwards, and put it in his doctoral thesis.',
          detailed:
            'His examiners were unsure what to make of it. The thesis was passed partly because Einstein, shown a copy, said it looked important. What made it more than a guess was that it immediately explained something otherwise unexplained: Bohr’s quantisation of angular momentum. Picture the electron’s wave wrapped around the nucleus. If a whole number of wavelengths fits the circumference, the wave closes on itself and reinforces; if not, it cancels itself out. Only the fitting cases survive — and those are exactly Bohr’s allowed orbits.',
          technical:
            'The standing-wave condition 2πr = nλ with λ = h/p gives 2πrp = nh, that is L = rp = nħ. The argument is heuristic — the modern treatment replaces circular orbits with solutions of the Schrödinger equation in three dimensions — but it correctly identifies the mechanism: quantisation arises from a wave equation with boundary conditions, exactly as the allowed frequencies of a drum arise from its rim.',
        },
      },
      {
        id: 'claim-davisson',
        kind: 'claim',
        statement: {
          essential:
            'In 1927 Davisson and Germer fired electrons at a nickel crystal and found them diffracting — bright and dark directions, exactly the pattern a wave of wavelength h/p would produce.',
          detailed:
            'The experiment was an accident. A vacuum tube broke, the nickel target oxidised, and heating it to clean it turned the polycrystalline surface into large crystal grains — accidentally producing a proper diffraction grating with atomic spacing. The scattered electrons then showed strong peaks at particular angles. Applying the standard Bragg formula for crystal diffraction gave a wavelength that matched h/p to within experimental error. G. P. Thomson independently demonstrated it with electrons through thin foils in the same year, and shared the 1937 Nobel Prize — his father, J. J. Thomson, had received one for showing that the electron is a particle.',
          technical:
            'Davisson and Germer observed a peak at 50° for 54 eV electrons from Ni(111), consistent with Bragg’s condition nλ = d sin θ for d = 0.215 nm, giving λ = 0.165 nm against a de Broglie prediction of 0.167 nm. Matter-wave interference has since been demonstrated for neutrons, atoms, C₆₀ molecules and organic molecules exceeding 25,000 atomic mass units.',
        },
        evidence: 'established',
        references: [
          referenceId('davisson-germer-1927'),
          referenceId('de-broglie-1925-matter-waves'),
          referenceId('fein-2019-massive-interference'),
        ],
      },
      {
        id: 'why-not-us',
        kind: 'callout',
        tone: 'note',
        title: 'Why you do not diffract',
        text: {
          essential:
            'The formula applies to you as much as to an electron — it just gives an absurdly small answer. Walk at one metre per second and your de Broglie wavelength is about 10⁻³⁵ metres. To see wave behaviour you would need an obstacle of about that size, and nothing of that size exists to walk through. The quantum world is not a separate world; it is the same rules with h in them, and h is very small.',
          detailed:
            'The trend is measurable rather than rhetorical. Electrons diffract easily. Neutrons diffract. Whole atoms diffract. C₆₀ molecules — sixty carbon atoms — were interfered in 1999. Molecules over 25,000 atomic mass units were interfered in 2019. Each step is harder because the wavelength shrinks and the experiment must be colder, slower and better isolated. No barrier of principle has appeared yet, and finding one is an active research programme.',
        },
        references: [
          referenceId('arndt-1999-fullerene'),
          referenceId('fein-2019-massive-interference'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'electron-wavelength',
            label: 'de Broglie wavelength of a 100 eV electron',
            value: 0.123,
            unit: 'nm',
            context:
              'Comparable to the spacing between atoms in a solid, which is why crystals diffract electrons and why electron microscopes resolve structures far smaller than light can.',
            references: [referenceId('davisson-germer-1927'), referenceId('codata-2018')],
          },
          {
            id: 'heaviest-interfered',
            label: 'Heaviest molecule shown to interfere',
            value: 25000,
            unit: 'atomic mass units',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'A 2019 experiment with tailored organic molecules of about 2,000 atoms. There is no known mass at which quantum interference must stop; the limits so far are technical.',
            references: [referenceId('fein-2019-massive-interference')],
          },
        ],
      },
    ],
    furtherReading: [
      referenceId('de-broglie-1925-matter-waves'),
      referenceId('davisson-germer-1927'),
    ],
  },

  {
    id: topicId('wave-particle-duality'),
    slug: 'wave-particle-duality',
    sectionId: QUANTUM,
    order: 7,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Wave–particle duality',
    subtitle: 'Not two natures taking turns — one nature that neither word describes.',
    summary: {
      essential:
        'Electrons and photons produce interference patterns, which is wave behaviour, and they arrive as single localised events, which is particle behaviour. The honest conclusion is not that they are secretly both. It is that "wave" and "particle" are two classical pictures, each borrowed from everyday objects, and neither fits.',
      detailed:
        'The phrase "wave–particle duality" is a hundred-year-old placeholder that survives mainly in teaching. It suggests a quantum object switches between two modes depending on what you do. The modern description is simpler and less mysterious: there is one kind of thing, described by a quantum state, whose evolution obeys a wave equation and whose interactions are discrete. Which classical picture seems apt depends on which aspect a particular experiment is sensitive to.',
      technical:
        'Making this quantitative, wave-like and particle-like behaviour are complementary in a precise sense: the Englert–Greenberger–Yasin relation bounds them by V² + D² ≤ 1, where V is interference-fringe visibility and D is which-path distinguishability. Perfect path information forbids fringes; perfect fringes forbid path information; intermediate cases are permitted, measured, and correctly predicted.',
    },
    glossaryTerms: [glossaryTermId('wavefunction'), glossaryTermId('probability-amplitude')],
    related: [topicId('matter-waves'), topicId('double-slit'), topicId('quantum-fields')],
    blocks: [
      {
        id: 'both-words-fail',
        kind: 'prose',
        text: {
          essential:
            'A wave, in the everyday sense, is spread out: it passes through both gaps in a barrier, it can be half here and half there, and it never arrives all at once. A particle is localised: it goes through one gap, it lands at one place, and it arrives whole. Electrons do the interference that only the first can do, and the arriving-whole that only the second can do. So neither word is right.',
          detailed:
            'The mistake is to hear this as a paradox. It is only paradoxical if you assume that everything must be describable in terms of the two categories human beings developed from watching water and throwing stones. There is no reason nature should be limited to that vocabulary. Once you allow a third kind of thing — one with a state that evolves like a wave and interacts in discrete units — the mystery dissolves into unfamiliarity, which is a much more manageable problem.',
        },
      },
      {
        id: 'feynman-note',
        kind: 'callout',
        tone: 'note',
        title: 'What actually happens in an interference experiment',
        text: {
          essential:
            'Fire electrons one at a time at a double slit. Each one lands at a single spot on the detector, as a particle would. But the places where the spots accumulate are decided by an interference pattern, as a wave would. Neither aspect is more real than the other, and neither appears "instead of" the other — you get both in the same run of the same experiment.',
          detailed:
            'This was done. Tonomura and colleagues published the electron-by-electron build-up in 1989: at first the dots look random, and after tens of thousands they have assembled into stripes. Nothing switched modes. The rule that decides where dots are likely to land is the interference of amplitudes, and the rule that decides how a dot is deposited is that interaction is discrete. Both rules operate at once.',
        },
        references: [referenceId('tonomura-1989-single-electron')],
      },
      {
        id: 'claim-complementarity',
        kind: 'claim',
        statement: {
          essential:
            'How much interference you see and how much you know about which path was taken are quantitatively linked: gaining path information costs fringe contrast, in a definite and measured proportion.',
          detailed:
            'This turns Bohr’s vague "complementarity" into an inequality you can test. Set up an interferometer where you can adjust how much which-path information is available — not all-or-nothing, but a dial. As the path information rises, the fringes fade, and they fade by exactly the predicted amount. Full information means no fringes; no information means maximum fringes; partial information gives partial fringes. Experiments across photons, atoms and neutrons confirm the relation.',
          technical:
            'The Englert–Greenberger–Yasin duality relation is V² + D² ≤ 1, with equality for pure states. Here D is the maximum probability of correctly guessing the path, rescaled, and V = (I_max − I_min)/(I_max + I_min). The relation is a theorem of the formalism, not an extra postulate, and it makes "duality" a constraint rather than a slogan.',
        },
        evidence: 'established',
        references: [
          referenceId('sakurai-2020-modern-qm'),
          referenceId('tonomura-1989-single-electron'),
        ],
      },
      {
        id: 'field-preview',
        kind: 'prose',
        text: {
          essential:
            'There is a cleaner way to say all of this, and it comes later in this section. In quantum field theory there is one underlying entity — a field — and what we call a particle is a discrete excitation of it. The field explains the wave behaviour. The discreteness of excitations explains the particle behaviour. There is no duality left to reconcile, because there was only ever one thing.',
          detailed:
            'This is not a rhetorical dodge. Quantum field theory is the framework used to compute the electron’s magnetic moment to twelve significant figures and to predict the behaviour of particles at the Large Hadron Collider. The "duality" language belongs to the 1920s, when the field picture did not yet exist. It survives in teaching because the historical route is easier to follow than the modern one — but it should be set down once the modern one is available.',
        },
      },
      {
        id: 'link-double-slit',
        kind: 'cross-link',
        topicId: topicId('double-slit'),
        rationale:
          'The experiment where all of this is visible at once, and where the language has to be most careful.',
      },
    ],
    furtherReading: [
      referenceId('tonomura-1989-single-electron'),
      referenceId('arndt-1999-fullerene'),
      referenceId('peskin-schroeder-1995'),
    ],
  },
];
