/**
 * Black holes — the theoretical frontier.
 *
 * These three topics carry the section's least settled material, so they carry
 * the strictest rules. Hawking radiation is labelled as a prediction of quantum
 * field theory in curved spacetime that has never been observed and, for any
 * astrophysical black hole, cannot currently be. The information problem is
 * presented as unresolved, with the leading positions named rather than one of
 * them adopted. Nothing here is described as known that is not.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const BLACK_HOLES = sectionId('black-holes');
const REVIEWED = '2026-09-07';

export const BLACK_HOLE_FRONTIER_TOPICS: readonly Topic[] = [
  {
    id: topicId('hawking-radiation'),
    slug: 'hawking-radiation',
    sectionId: BLACK_HOLES,
    order: 17,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Hawking radiation',
    subtitle:
      'A prediction that black holes are not entirely black — and that has never been seen.',
    summary: {
      essential:
        'In 1974 Stephen Hawking showed that applying quantum field theory to the spacetime around a black hole predicts a faint thermal glow from its horizon. The temperature is inversely proportional to mass, so real black holes are colder than empty space and the effect has never been detected.',
      detailed:
        'The prediction is theoretically robust — it follows from quantum field theory in curved spacetime, a framework that is well understood, rather than from a speculative theory of quantum gravity. It is also unobservable in practice for any known black hole: a solar-mass black hole has a temperature of 6 × 10⁻⁸ K, ten million times colder than the cosmic microwave background, so it absorbs far more than it emits.',
    },
    glossaryTerms: [glossaryTermId('hawking-radiation'), glossaryTermId('event-horizon')],
    related: [
      topicId('black-hole-thermodynamics'),
      topicId('singularity'),
      topicId('black-hole-open-questions'),
    ],
    blocks: [
      {
        id: 'what-it-says',
        kind: 'prose',
        text: {
          essential:
            'Hawking’s result was unexpected, including to him. Take quantum field theory — the framework behind all of particle physics — and apply it not in flat space but in the curved spacetime around a black hole. The answer that comes back is that a distant observer sees a steady stream of thermal radiation coming from the horizon, at a definite temperature set by the black hole’s mass.',
          detailed:
            'It matters that this uses established physics on both sides. General relativity supplies the geometry, quantum field theory supplies the fields, and the calculation treats gravity classically throughout. It is not a result of any candidate quantum theory of gravity. That makes it about as reliable as an untested prediction can be, and it is why almost every theorist takes it seriously despite there being no observation.',
        },
      },
      {
        id: 'pair-production',
        kind: 'callout',
        tone: 'caution',
        title: 'The virtual-pair picture is a rough analogy',
        text: {
          essential:
            'The popular explanation — a particle–antiparticle pair appears at the horizon, one falls in and the other escapes — is Hawking’s own simplification, and he was explicit that it is heuristic. It gets the right sign and the right order of magnitude and misleads about the mechanism. In the actual derivation, radiation arises because "vacuum" is not observer-independent: the quantum state a distant observer calls empty is not what a freely falling observer calls empty, and the mismatch across the horizon produces a thermal spectrum.',
          detailed:
            'The analogy also invites a wrong picture of where the energy comes from. It is not that the black hole "swallows a negative-energy particle". The energy is drawn from the gravitational field of the black hole as a whole, and the mass loss is a consequence of energy conservation applied to the full spacetime rather than to an individual pair.',
        },
        references: [referenceId('hawking-1975-radiation')],
      },
      {
        id: 'claim-temperature',
        kind: 'claim',
        statement: {
          essential:
            'The predicted temperature is inversely proportional to mass. Bigger black holes are colder. A black hole of one solar mass would be at 6 × 10⁻⁸ kelvin — a hundred-millionth of a degree above absolute zero.',
          detailed:
            'The inverse relationship is the crucial and counter-intuitive part: adding mass to a black hole cools it. That means a black hole has a negative heat capacity, unlike ordinary objects, and it is what makes evaporation a runaway at the end — as the hole shrinks it gets hotter, radiates faster, and shrinks faster still. Sgr A* at 4.3 million solar masses is predicted to sit at about 1.4 × 10⁻¹⁴ K.',
          technical:
            'T_H = ħc³/(8πGMk_B) ≈ 6.17 × 10⁻⁸ K × (M☉/M). Evaporation time scales as M³: roughly 2 × 10⁶⁷ years for a solar mass, against a present cosmic age of 1.4 × 10¹⁰ years.',
        },
        evidence: 'model',
        references: [referenceId('hawking-1975-radiation')],
      },
      {
        id: 'viz-temperature',
        kind: 'visualization',
        visualizationId: visualizationId('hawking-temperature'),
      },
      {
        id: 'claim-unobserved',
        kind: 'claim',
        statement: {
          essential:
            'Hawking radiation has never been observed, and for astrophysical black holes it cannot currently be. Every known black hole is far colder than the cosmic microwave background that bathes it, so it absorbs more energy than it emits and grows rather than evaporating.',
          detailed:
            'The CMB is at 2.725 K. A solar-mass black hole at 6 × 10⁻⁸ K is about eight orders of magnitude colder. Evaporation cannot even begin until the Universe has expanded and cooled below a black hole’s temperature, which for stellar-mass holes is something like 10¹⁷ years away. The predicted evaporation time then scales as the cube of the mass — around 10⁶⁷ years for a solar mass, against a Universe that is 1.4 × 10¹⁰ years old. Laboratory analogue systems, using sound waves in flowing fluids or light in optical media, have produced results consistent with the analogous effect; these test the kinematic mechanism, not gravity, and they are not detections of Hawking radiation.',
          technical:
            'A black hole would need to be below about 10²² kg — asteroid mass, with a horizon smaller than a proton — for its Hawking temperature to exceed the CMB today. Searches for gamma-ray bursts from final-stage evaporation of primordial black holes have set limits but found nothing.',
        },
        evidence: 'model',
        references: [
          referenceId('hawking-1975-radiation'),
          referenceId('fixsen-2009-cmb-temperature'),
        ],
      },
      {
        id: 'quantities',
        kind: 'quantity',
        quantities: [
          {
            id: 'hawking-temp-solar',
            label: 'Hawking temperature of a one-solar-mass black hole',
            value: 6.17e-8,
            unit: 'K',
            context:
              'Predicted, never measured. For comparison, the cosmic microwave background is 2.725 K — about 44 million times warmer.',
            references: [referenceId('hawking-1975-radiation')],
          },
          {
            id: 'evaporation-solar',
            label: 'Predicted evaporation time, one solar mass',
            value: 2.1e67,
            unit: 'years',
            uncertainty: { kind: 'order-of-magnitude' },
            context:
              'Assuming no accretion at all, including of the CMB — which does not hold for at least the next 10¹⁷ years. The present age of the Universe is 1.4 × 10¹⁰ years.',
            references: [referenceId('hawking-1975-radiation')],
          },
        ],
      },
      {
        id: 'link-thermo',
        kind: 'cross-link',
        topicId: topicId('black-hole-thermodynamics'),
        rationale:
          'If a black hole has a temperature, it has an entropy — and that turns out to be the deeper result.',
      },
    ],
    furtherReading: [
      referenceId('hawking-1975-radiation'),
      referenceId('bekenstein-1973-entropy'),
      referenceId('bardeen-carter-hawking-1973'),
    ],
  },

  {
    id: topicId('black-hole-thermodynamics'),
    slug: 'thermodynamics-and-the-information-problem',
    sectionId: BLACK_HOLES,
    order: 18,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Black-hole thermodynamics and the information problem',
    subtitle: 'An entropy that scales with area, and a contradiction nobody has resolved.',
    summary: {
      essential:
        'Black holes obey laws that mirror thermodynamics exactly, with horizon area playing the role of entropy. That analogy became a physical claim once Hawking showed they have a temperature — and it produced a contradiction: if a black hole evaporates completely, what happened to the information about what fell in?',
      detailed:
        'Quantum mechanics requires that information be preserved: the evolution of a quantum state is reversible in principle. Hawking’s original calculation gives radiation that is exactly thermal, depending only on mass, spin and charge — carrying no trace of what formed the hole. Those two statements cannot both be right. Fifty years on, the problem is not settled, though most theorists now expect information is preserved.',
    },
    glossaryTerms: [glossaryTermId('hawking-radiation'), glossaryTermId('event-horizon')],
    related: [
      topicId('hawking-radiation'),
      topicId('singularity'),
      topicId('black-hole-open-questions'),
    ],
    blocks: [
      {
        id: 'area-never-decreases',
        kind: 'prose',
        text: {
          essential:
            'In the early 1970s Hawking proved that the total area of black-hole horizons never decreases — merge two black holes and the resulting horizon is larger than the two you started with, combined. That is a strange thing for a purely geometric quantity to do. There is one other quantity in physics with that property: entropy.',
          detailed:
            'Bekenstein pushed the analogy into a claim. If a black hole had no entropy, you could throw a hot gas into one and reduce the entropy of the Universe, violating the second law of thermodynamics. He proposed that a black hole’s entropy is proportional to its horizon area. Bardeen, Carter and Hawking then wrote down four laws of black-hole mechanics that mirror the four laws of thermodynamics term by term, with surface gravity playing the role of temperature. They regarded the correspondence as a formal analogy — until Hawking’s own 1974 calculation showed that the temperature is real.',
        },
      },
      {
        id: 'claim-entropy',
        kind: 'claim',
        statement: {
          essential:
            'A black hole’s entropy is proportional to the area of its horizon, not to the volume inside. That is unlike every other system in physics, where entropy scales with volume.',
          detailed:
            'The Bekenstein–Hawking entropy is one quarter of the horizon area measured in Planck units, and the numbers involved are enormous: a solar-mass black hole has an entropy around 10⁷⁷ in natural units, vastly exceeding that of the star it formed from. The area scaling is the origin of the holographic principle — the proposal that the information content of a region is bounded by the area of its boundary rather than its volume, which has become one of the more influential ideas in theoretical physics.',
          technical:
            'S = k_B A c³/(4Għ). String-theoretic counting of microstates for certain extremal and near-extremal black holes reproduces this coefficient exactly, which is one of the strongest indications that the entropy is genuinely statistical rather than merely formal.',
        },
        evidence: 'model',
        references: [
          referenceId('bekenstein-1973-entropy'),
          referenceId('bardeen-carter-hawking-1973'),
        ],
      },
      {
        id: 'the-problem',
        kind: 'prose',
        text: {
          essential:
            'Here is the contradiction. Quantum mechanics says information is never destroyed: in principle you could always run the evolution of a quantum system backwards. But Hawking’s calculation gives radiation that is exactly thermal — its spectrum depends only on the black hole’s mass, spin and charge, and on nothing else. Burn a book and the information is scrambled but present in the smoke. Drop a book into a black hole and wait for it to evaporate, and by that calculation, the information is simply gone.',
          detailed:
            'The two principles cannot both hold. Either quantum mechanics fails in the presence of a horizon, or Hawking’s calculation is incomplete in a way that lets subtle correlations carry information out. Hawking argued for the first for nearly thirty years, and famously conceded in 2004 — a concession most of the field accepted, and which did not amount to a solution.',
        },
      },
      {
        id: 'not-settled',
        kind: 'callout',
        tone: 'caution',
        title: 'This is not a solved problem',
        text: {
          essential:
            'Popular accounts sometimes report the information paradox as resolved. It is not. What has changed is that a majority of theorists now expect information to be preserved, largely on the strength of the AdS/CFT correspondence, in which a gravitational theory is exactly equivalent to a quantum theory without gravity where information is manifestly conserved. Since 2019, calculations of the "Page curve" using replica wormholes have reproduced the entropy behaviour that unitarity requires. Both results are enormously suggestive. Neither identifies the physical mechanism by which information leaves a specific black hole, and both rest on tools whose applicability to our Universe is not established.',
          detailed:
            'The competing positions remain live. Firewalls propose that the horizon is not smooth after all, at the cost of the equivalence principle. Remnants propose that evaporation stops, leaving a Planck-scale object holding the information. Complementarity proposes that infalling and distant descriptions are both valid and never comparable. Each has known difficulties. Presenting any of them as the answer would misrepresent the field.',
        },
        references: [
          referenceId('hawking-1976-information'),
          referenceId('hawking-1975-radiation'),
        ],
      },
      {
        id: 'open-information',
        kind: 'open-question',
        question: 'What happens to information that falls into a black hole?',
        whyItMatters: {
          essential:
            'It is the sharpest known conflict between the two theories that underpin modern physics. General relativity and quantum mechanics both work superbly in their own domains; here they give incompatible answers about the same physical process. Whatever resolves it is likely to be a genuine constraint on any theory of quantum gravity.',
          detailed:
            'It also bears directly on what a horizon is. If information escapes, something must carry it, and the smooth featureless horizon of classical general relativity may not survive. If it does not escape, quantum mechanics is not universally valid — which would be a far larger revision than the one the question appears to be about.',
        },
        whatWouldSettleIt: {
          essential:
            'No feasible experiment reaches this regime: it requires observing an evaporating black hole, and no known black hole is evaporating. Progress is expected to come from theory — a derivation of the radiation’s correlations from first principles, or a demonstration that AdS/CFT arguments extend to spacetimes like ours. Analogue-gravity experiments can test the kinematics of horizon radiation but not the information question.',
        },
        references: [
          referenceId('hawking-1976-information'),
          referenceId('bekenstein-1973-entropy'),
        ],
      },
      {
        id: 'link-hawking',
        kind: 'cross-link',
        topicId: topicId('hawking-radiation'),
        rationale: 'The prediction the whole problem rests on, and how confident we can be in it.',
      },
    ],
    furtherReading: [
      referenceId('bekenstein-1973-entropy'),
      referenceId('hawking-1976-information'),
      referenceId('bardeen-carter-hawking-1973'),
    ],
  },

  {
    id: topicId('black-hole-open-questions'),
    slug: 'what-remains-unknown',
    sectionId: BLACK_HOLES,
    order: 19,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What remains unknown',
    subtitle: 'The honest list, kept separate from everything the section has established.',
    summary: {
      essential:
        'A great deal about black holes is measured and settled: they exist, their masses, their exteriors, their mergers. A great deal is not: what replaces the singularity, where the supermassive ones came from, what happens to information, and whether horizons are smooth all the way down.',
      detailed:
        'Keeping these lists apart is the point of this page. The evidence for black holes as astrophysical objects is overwhelming and comes from four independent directions. The theoretical questions about their interiors and their quantum behaviour are wide open, and no amount of observational success on the exterior closes them.',
    },
    glossaryTerms: [glossaryTermId('singularity'), glossaryTermId('hawking-radiation')],
    related: [
      topicId('singularity'),
      topicId('black-hole-thermodynamics'),
      topicId('beyond-newton'),
    ],
    blocks: [
      {
        id: 'settled',
        kind: 'prose',
        text: {
          essential:
            'Start with what is not in doubt. Objects of measured mass, too compact for any alternative, exist throughout the Universe. Their exteriors match general relativity’s predictions everywhere the predictions have been tested — orbits, redshifts, precession, waveforms, shadow sizes. They merge, and the merger waveforms match theory across the strongest fields ever probed.',
          detailed:
            'That list is not small, and it is worth stating before the open questions because the two are often blurred. Uncertainty about a black hole’s interior is not uncertainty about whether black holes exist, any more than uncertainty about the Earth’s inner core casts doubt on the Earth.',
        },
      },
      {
        id: 'open-interior',
        kind: 'open-question',
        question: 'What is actually inside?',
        whyItMatters: {
          essential:
            'General relativity predicts a singularity, and a singularity is a failure of the theory rather than a description. Whatever is really there is governed by physics we do not have — the same physics needed for the first instants of the Universe.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing observational, directly: the interior is causally disconnected from us. The realistic routes are precision tests of the exterior — ringdown spectroscopy, shadow shape, echo searches — which would show whether the classical description holds all the way to the horizon, and theoretical work that produces a testable prediction elsewhere.',
        },
        references: [referenceId('penrose-1965-singularities'), referenceId('abbott-2023-gwtc3')],
      },
      {
        id: 'open-seeds',
        kind: 'open-question',
        question: 'How did supermassive black holes get so big so early?',
        whyItMatters: {
          essential:
            'Billion-solar-mass quasars are observed less than 700 million years after the Big Bang. Growing one from an ordinary stellar remnant in that time requires continuous accretion at the maximum sustainable rate, with no margin — which suggests either much heavier seeds or episodes of accretion faster than the standard limit.',
        },
        whatWouldSettleIt: {
          essential:
            'A census of accreting black holes in the first billion years. JWST is already finding candidate active nuclei at those redshifts, and measuring their mass distribution would distinguish light from heavy seeds. Detecting intermediate-mass mergers with future gravitational-wave observatories would test the hierarchical route directly.',
        },
        references: [referenceId('kormendy-ho-2013'), referenceId('curtis-lake-2023-jwst')],
      },
      {
        id: 'open-horizon-smooth',
        kind: 'open-question',
        question: 'Is the horizon smooth, as general relativity says?',
        whyItMatters: {
          essential:
            'Classical general relativity says an infalling observer notices nothing at the horizon. Some attempts to preserve quantum information suggest otherwise — that a "firewall" of high-energy quanta sits there, which would violate the equivalence principle at the one place it has never been tested.',
          detailed:
            'The question is sharp because both alternatives are unacceptable to someone. A smooth horizon appears to require information loss; a firewall appears to require abandoning the equivalence principle. Something widely believed has to give, and which one is not known.',
        },
        whatWouldSettleIt: {
          essential:
            'Searches for echoes in gravitational-wave ringdown are the only current empirical handle: a reflective surface where a horizon should be would send back delayed repetitions of the signal. Searches so far find nothing significant, which constrains but does not exclude the proposals.',
        },
        references: [referenceId('abbott-2023-gwtc3'), referenceId('hawking-1976-information')],
      },
      {
        id: 'open-primordial',
        kind: 'open-question',
        question: 'Do primordial black holes exist?',
        whyItMatters: {
          essential:
            'If black holes formed from density fluctuations in the first fraction of a second, they would be a component of the Universe with no stellar origin, and in some mass ranges they could contribute to dark matter. No primordial black hole has ever been detected.',
        },
        whatWouldSettleIt: {
          essential:
            'Microlensing surveys, constraints from the CMB, and the mass and spin distribution of gravitational-wave sources all bound the possibilities; existing limits rule them out as the dominant dark-matter component across most of the plausible range. A detection would require finding a black hole in a mass range stellar evolution cannot produce, in a population that cannot be explained by mergers.',
        },
        references: [referenceId('bertone-hooper-2018-history'), referenceId('abbott-2023-gwtc3')],
      },
      {
        id: 'pattern',
        kind: 'callout',
        tone: 'note',
        title: 'The pattern this section shares with the last one',
        text: {
          essential:
            'Newtonian gravity worked superbly until its edges were found, and general relativity contains it as a limit. General relativity is now in the same position: it has passed every test put to it, and it predicts its own breakdown at singularities and cannot be combined with quantum mechanics. Black holes are where both of those problems become concrete. That is why they matter beyond their own strangeness.',
        },
        references: [referenceId('will-2014-confrontation')],
      },
    ],
    furtherReading: [
      referenceId('penrose-1965-singularities'),
      referenceId('hawking-1976-information'),
      referenceId('will-2014-confrontation'),
    ],
  },
];
