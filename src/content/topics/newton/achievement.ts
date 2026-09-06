/**
 * Newton’s achievement.
 *
 * The historical and scientific closing topic of the section: how one law came
 * to cover both a falling apple and the Moon, and what that unification meant.
 *
 * Written with care about the history. The apple story is attested, but the
 * popular version — apple hits head, law appears fully formed — is not what any
 * source says, and this page says so rather than repeating it. No quotations
 * are attributed to Newton that are not in the cited work.
 */
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const NEWTON = sectionId('newton');
const REVIEWED = '2026-09-06';

export const NEWTON_ACHIEVEMENT_TOPICS: readonly Topic[] = [
  {
    id: topicId('newtons-achievement'),
    slug: 'newtons-achievement',
    sectionId: NEWTON,
    order: 5,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Newton’s achievement',
    subtitle: 'One law for the apple and the Moon — and with it, the end of two separate physics.',
    summary: {
      essential:
        'Before Newton, things falling on Earth and things moving in the sky were assumed to obey different rules. He showed they obey the same one, and proved it with a calculation.',
      detailed:
        'The unification is the achievement, not the equation. Anyone can propose that the heavens and the Earth follow one law; Newton produced a specific law, derived its consequences mathematically, and checked those consequences against the sky.',
    },
    related: [topicId('universal-law'), topicId('planetary-systems'), topicId('newtonian-limits')],
    blocks: [
      {
        id: 'two-physics',
        kind: 'prose',
        text: {
          essential:
            'The ancient picture had two sets of rules. On Earth, heavy things sought their natural place at the centre and stopped when they got there. In the heavens, bodies moved eternally in circles because that was the perfect celestial motion. The two domains had nothing to do with each other, and there was no reason to expect them to.',
          detailed:
            'By Newton’s time the picture was already cracking. Kepler had replaced circles with ellipses and found precise numerical regularities. Galileo had shown that terrestrial motion follows exact mathematical laws and that the Moon has mountains — a decidedly unperfect, earth-like feature. What was missing was a single mechanism that produced both sets of behaviour.',
        },
      },
      {
        id: 'apple',
        kind: 'callout',
        tone: 'history',
        title: 'The apple, carefully',
        text: {
          essential:
            'The apple story is not an invention: Newton told it himself in old age, and contemporaries recorded it. But the version worth keeping is not "apple falls, physics happens". It is that watching an apple fall prompted a question — does this same pull reach as far as the Moon? — which took him roughly twenty years of mathematics to answer. No account has it striking him on the head, and this platform does not attribute any quotation to him beyond what is in the Principia.',
        },
        references: [referenceId('newton-1687-principia')],
      },
      {
        id: 'claim-moon-test',
        kind: 'claim',
        statement: {
          essential:
            'The decisive test: if the same inverse-square law holds, the Moon — about sixty Earth-radii away — should accelerate about 3,600 times more slowly than an apple. It does.',
          detailed:
            'The Moon is 60.34 Earth radii from the centre of the Earth. If gravity falls as 1/r², its acceleration should be the surface value divided by 60.34², which is 3,640: 9.81 / 3,640 = 2.69 × 10⁻³ m/s². The Moon’s actual centripetal acceleration, computed from its measured orbital radius and its 27.32-day period, is 2.72 × 10⁻³ m/s². The two agree to about one percent — a comparison between a falling object in an orchard and a body 384,400 kilometres away.',
          technical:
            'The residual 1% is not measurement error and is worth naming: the simple version treats the Earth as fixed, whereas both bodies orbit their common centre of mass, so the relevant parameter is G(M⊕ + M☾) rather than GM⊕. The Moon’s mass is 1.23% of the Earth’s, which accounts for essentially the whole discrepancy. Surface g also includes a small centrifugal contribution from the Earth’s rotation.',
        },
        evidence: 'model',
        references: [
          referenceId('newton-1687-principia'),
          referenceId('nasa-planetary-factsheet'),
          referenceId('iau-2015-nominal-constants'),
        ],
      },
      {
        id: 'viz-moon-test',
        kind: 'visualization',
        visualizationId: visualizationId('moon-test'),
      },
      {
        id: 'chain',
        kind: 'prose',
        text: {
          essential:
            'The chain of reasoning is short enough to hold in your head. Objects fall. The Moon is falling too — it just keeps missing. The pull weakens with distance in a specific way. The same rule, applied to the planets, gives Kepler’s laws exactly. Therefore one law governs the whole system.',
          detailed:
            'Each link is a separate piece of work. Showing that circular motion requires a centre-directed acceleration of v²/r was new. Proving that a spherical body attracts as though its mass were at its centre required a theorem Newton had to invent. Deriving elliptical orbits from an inverse-square force is a substantial piece of geometry. The Principia is difficult because the unification was difficult.',
        },
      },
      {
        id: 'claim-predictive',
        kind: 'claim',
        statement: {
          essential:
            'What made it convincing was prediction, not explanation. The framework predicted the return of a comet, the flattening of the Earth at its poles, the timing of tides and the existence of an unseen planet — and each was confirmed afterwards.',
          detailed:
            'Halley used Newtonian mechanics to identify three historical comets as one object and predicted its return; it came back in 1758, sixteen years after his death. Newton predicted from rotation that the Earth should bulge at the equator, against the French geodesists’ measurements of the time; expeditions to Lapland and Peru settled it in his favour. Le Verrier’s calculation of Neptune’s position from Uranus’s residuals is the most striking case: a planet found because arithmetic said where to point.',
        },
        evidence: 'established',
        references: [referenceId('newton-1687-principia'), referenceId('will-2014-confrontation')],
      },
      {
        id: 'what-changed',
        kind: 'prose',
        text: {
          essential:
            'The deeper change was in what counted as an explanation. After the Principia, explaining a motion meant identifying the forces and doing the mathematics — and the answer had to be a number that could be checked. That method, not the specific law, is what the next three centuries of physics was built on.',
          detailed:
            'It also established that the same rules apply everywhere. That assumption — that physics discovered in a laboratory on Earth holds at the far side of the observable Universe — underlies every claim on this platform, from stellar nucleosynthesis to the cosmic microwave background. It is not obviously true, it is testable, and it has passed every test so far.',
        },
      },
      {
        id: 'honest-close',
        kind: 'callout',
        tone: 'caution',
        title: 'Being right for two hundred years, then being approximate',
        text: {
          essential:
            'Newtonian gravity went unchallenged for over two centuries and then turned out to be an approximation — accurate wherever gravity is weak and speeds are low, measurably wrong outside that. That is not a failure of the theory or of the man. It is what a successful theory looks like from the far side of the next one.',
        },
        references: [referenceId('will-2014-confrontation')],
      },
      {
        id: 'cross-limits',
        kind: 'cross-link',
        topicId: topicId('newtonian-limits'),
        rationale:
          'Exactly where the approximation stops being good enough, with the measurements.',
      },
    ],
    furtherReading: [
      referenceId('newton-1687-principia'),
      referenceId('kepler-1609-astronomia-nova'),
    ],
  },
];
