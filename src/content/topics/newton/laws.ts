/**
 * Newton’s laws of motion.
 *
 * Four topics: the vocabulary (force, net force, mass, acceleration), then one
 * page each for the three laws.
 *
 * Each law gets the same treatment — what it says, why it is true in the
 * Newtonian model, what changes when you change each variable, how the effect
 * shows up in everyday life, what the mathematics means, and where the law is
 * routinely misstated. The third law page in particular is written against the
 * single most common error in physics teaching: "the forces cancel". They never
 * cancel, because they never act on the same object.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const NEWTON = sectionId('newton');
const REVIEWED = '2026-09-06';

export const NEWTON_LAW_TOPICS: readonly Topic[] = [
  {
    id: topicId('forces-and-motion'),
    slug: 'forces-and-motion',
    sectionId: NEWTON,
    order: 1,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Forces, mass and motion',
    subtitle: 'Four words that have to mean exactly one thing each before the laws make sense.',
    summary: {
      essential:
        'A force is a push or a pull. Mass is how much an object resists being sped up or slowed down. Acceleration is any change in velocity. Newton’s laws connect them.',
      detailed:
        'Most confusion about Newton’s laws is really confusion about the words. In particular, "acceleration" in physics includes slowing down and turning corners, and only the *net* force — everything added together — has any effect on motion.',
    },
    glossaryTerms: [glossaryTermId('net-force'), glossaryTermId('inertia')],
    related: [topicId('first-law'), topicId('second-law'), topicId('third-law')],
    blocks: [
      {
        id: 'force',
        kind: 'prose',
        text: {
          essential:
            'A force is a push or a pull on an object, measured in newtons. One newton is about the force you need to hold up a small apple. Forces have a direction as well as a size, and that matters: a 10 N push north and a 10 N push south are not the same thing.',
          detailed:
            'Forces come in a small number of kinds. Contact forces — pushes, pulls, friction, tension in a rope, the normal force a table exerts upward — are ultimately electromagnetic. Then there is gravity, which acts at a distance without contact. All of them enter the laws the same way, which is part of what makes the framework powerful: Newton’s second law does not care where the force came from.',
        },
      },
      {
        id: 'net-force',
        kind: 'prose',
        text: {
          essential:
            'Only the net force matters — all the forces added together as arrows. A book resting on a table has gravity pulling it down and the table pushing it up equally, so the net force is zero and nothing happens. That is not the same as no forces acting.',
          detailed:
            'The distinction is easy to test. Cut the table away and the book accelerates immediately, which it could not do if there had been genuinely no forces. Balanced is not absent. Getting this right is the difference between understanding the first law and merely reciting it.',
          technical:
            'Forces add as vectors: ΣF = F₁ + F₂ + …, and it is ΣF that appears in the second law. In two dimensions the components add independently, which is why projectile motion decomposes into constant horizontal velocity and constant vertical acceleration.',
        },
      },
      {
        id: 'definition-net-force',
        kind: 'definition',
        termId: glossaryTermId('net-force'),
      },
      {
        id: 'mass',
        kind: 'prose',
        text: {
          essential:
            'Mass, in kilograms, measures how stubborn an object is. Push a shopping trolley and an empty one speeds up easily; a full one barely moves. Same push, different mass, different result.',
          detailed:
            'This stubbornness is called inertia, and mass is its measure. Notice that it has nothing to do with gravity in this context — the full trolley is harder to push sideways too, and it would be just as hard to push in orbit where it weighs nothing at all.',
        },
      },
      {
        id: 'acceleration',
        kind: 'prose',
        text: {
          essential:
            'Acceleration means any change in velocity: speeding up, slowing down, or changing direction. A car going round a roundabout at a steady 30 km/h is accelerating the whole way, because its direction keeps changing.',
          detailed:
            'This is the definition that most often trips people up, and it is essential for the rest of the platform. It is why a satellite in a circular orbit at constant speed is accelerating — continuously, towards the Earth — and therefore must have a force on it. Constant speed and constant velocity are different statements.',
          technical:
            'Velocity is a vector; acceleration is its time derivative, a = dv/dt. In circular motion at speed v and radius r, the magnitude of the acceleration is v²/r and it points at the centre, even though |v| is constant.',
        },
      },
      {
        id: 'misconception-motion',
        kind: 'callout',
        tone: 'misconception',
        title: '“Motion needs a force to keep it going”',
        text: {
          essential:
            'This is the intuition everyone starts with, and it is wrong — but understandably so. On Earth almost everything that moves is being resisted by friction or air, so keeping something moving does require continuous effort. The effort is not maintaining the motion; it is cancelling the resistance. Remove the resistance and no effort is needed at all.',
          detailed:
            'This misconception is roughly Aristotle’s physics, and it survived for two millennia because it describes everyday experience accurately. What it fails to describe is a puck on ice, a spacecraft between planets, or a ball rolling on a very smooth floor — situations where the resistance is small enough for the underlying rule to show through.',
        },
        references: [referenceId('newton-1687-principia')],
      },
      {
        id: 'cross-first',
        kind: 'cross-link',
        topicId: topicId('first-law'),
        rationale: 'The law that says what happens when the net force is zero.',
      },
    ],
    furtherReading: [referenceId('newton-1687-principia')],
  },

  {
    id: topicId('first-law'),
    slug: 'first-law',
    sectionId: NEWTON,
    order: 2,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The first law: inertia',
    subtitle: 'An object keeps doing what it is doing until something makes it stop.',
    summary: {
      essential:
        'An object at rest stays at rest, and an object in motion keeps moving at a steady speed in a straight line, unless a net force acts on it.',
      detailed:
        'The law defines what "no force" looks like. Its real content is negative: it says that uniform motion needs no explanation and no cause. Only *changes* in motion require a force, and therefore only changes require explaining.',
      technical:
        'Formally the first law asserts the existence of inertial reference frames — frames in which a body free of net force has zero acceleration. The second law then holds in those frames. Read this way the first law is not a special case of the second; it is the statement of the arena in which the second applies.',
    },
    glossaryTerms: [glossaryTermId('inertia'), glossaryTermId('net-force')],
    related: [topicId('forces-and-motion'), topicId('second-law'), topicId('orbits')],
    blocks: [
      {
        id: 'statement',
        kind: 'prose',
        text: {
          essential:
            'Newton’s statement: every body continues in its state of rest, or of uniform motion in a straight line, unless it is compelled to change that state by forces impressed upon it.',
          detailed:
            'Two halves, and the second is the surprising one. That a stationary object stays put is obvious. That a moving object keeps moving for ever, at exactly the same speed, in exactly the same direction, with nothing sustaining it, contradicts everyday experience — and everyday experience is the thing that is misleading.',
        },
      },
      {
        id: 'claim-friction',
        kind: 'claim',
        statement: {
          essential:
            'Things appear to stop on their own because of friction. Friction is a force. Take it away and nothing stops.',
          detailed:
            'Slide a book across a table and it stops in half a metre. Slide it across polished ice and it travels ten metres. Slide it across an air-hockey table and it crosses the whole surface and rebounds. The book is not becoming more or less inclined to keep moving — the retarding force is getting smaller. Extrapolate to zero friction and the book never stops. Galileo made exactly this argument, from experiments with balls rolling down one incline and up another, before Newton formalised it.',
          technical:
            'For a block on a level surface, the only horizontal force after the initial push is kinetic friction, f = μ_k N = μ_k m g, giving a constant deceleration a = −μ_k g, independent of mass. Stopping distance is d = v² / (2 μ_k g): halve the friction coefficient and the block goes twice as far, and μ_k = 0 makes d infinite.',
        },
        evidence: 'model',
        references: [
          referenceId('galileo-1638-two-new-sciences'),
          referenceId('newton-1687-principia'),
        ],
      },
      {
        id: 'viz-track',
        kind: 'visualization',
        visualizationId: visualizationId('first-law-track'),
      },
      {
        id: 'everyday',
        kind: 'prose',
        text: {
          essential:
            'You feel the first law every time a bus brakes. You keep going forward at the speed you were already travelling, because nothing has yet acted on you — the bus stopped, you did not. A seatbelt is a device for supplying the missing force.',
          detailed:
            'The same principle explains why loose objects slide across a car’s dashboard on a bend (they continue straight while the car turns), why you can whip a tablecloth from under crockery (the friction acts too briefly to change the crockery’s motion much), and why a headrest reduces whiplash injury (it supplies a force to your head that the seat is already supplying to your torso).',
        },
      },
      {
        id: 'space',
        kind: 'prose',
        text: {
          essential:
            'The clearest demonstration is in space. The Voyager probes shut their main engines down in the 1970s and are still travelling outward at over 15 kilometres per second, with nothing pushing them at all.',
          detailed:
            'It is not quite perfectly force-free — the Sun’s gravity still acts, and has been very gradually slowing them — but there is no propulsion, no air, and no friction. Their continued motion is not maintained by anything. That is the first law made visible on a scale of decades.',
        },
      },
      {
        id: 'inertial-frames',
        kind: 'prose',
        depths: ['technical'],
        text: {
          essential:
            'The first law holds in inertial frames and fails in accelerating ones — which is why a braking bus seems to violate it.',
          technical:
            'The first law is frame-dependent in an important way: it is true in inertial frames and false in accelerating ones. In a braking bus, an unrestrained passenger accelerates forward with no identifiable force acting — which does not refute the law but shows that the bus is not an inertial frame. Physicists recover the equations of motion in such frames by introducing pseudo-forces (centrifugal, Coriolis) that have no third-law partner and vanish under a change of frame. The Earth’s surface is itself very slightly non-inertial, which is why long-range artillery and weather systems must account for the Coriolis effect.',
        },
      },
      {
        id: 'misconception-cancel',
        kind: 'callout',
        tone: 'misconception',
        title: '“No motion means no forces”',
        text: {
          essential:
            'A car cruising at a steady 100 km/h on a motorway has a large forward force from the engine and an equally large backward force from air resistance and friction. Net force zero, steady velocity — exactly what the first law describes. Zero net force does not mean an absence of forces; it means a tie.',
        },
      },
      {
        id: 'cross-second',
        kind: 'cross-link',
        topicId: topicId('second-law'),
        rationale: 'What happens when the net force is not zero — quantitatively.',
      },
    ],
    furtherReading: [referenceId('newton-1687-principia')],
  },

  {
    id: topicId('second-law'),
    slug: 'second-law',
    sectionId: NEWTON,
    order: 3,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The second law: F = ma',
    subtitle: 'How much a push changes motion, and what mass has to do with it.',
    summary: {
      essential:
        'Force equals mass times acceleration. Push harder and an object speeds up faster; make it heavier and the same push does less.',
      detailed:
        'This is the working equation of classical mechanics. It converts a statement about forces into a prediction about motion — where something will be, and when — and it is the reason Newtonian physics is used to fly spacecraft rather than merely to describe them.',
      technical:
        'Newton stated it as force equal to the rate of change of momentum, F = dp/dt. For constant mass this reduces to F = ma; the momentum form is the more general one and is what survives into relativistic mechanics and into problems where mass changes, such as a rocket burning fuel.',
    },
    glossaryTerms: [glossaryTermId('net-force'), glossaryTermId('inertia')],
    related: [topicId('first-law'), topicId('third-law'), topicId('free-fall')],
    blocks: [
      {
        id: 'statement',
        kind: 'prose',
        text: {
          essential:
            'The equation is F = m × a. Rearranged as a = F ÷ m it reads more usefully: the acceleration you get is the force you apply divided by the mass you are applying it to.',
          detailed:
            'Three quantities, and knowing any two gives the third. That is what makes it a tool. Knowing the mass of a spacecraft and the thrust of its engine gives its acceleration; knowing the acceleration and the mass gives the force that must have caused it — which is how forces are measured in the first place.',
        },
      },
      {
        id: 'proportional',
        kind: 'prose',
        text: {
          essential:
            'Two proportional relationships, and they pull in opposite directions. Acceleration is proportional to force: double the force, double the acceleration. Acceleration is inversely proportional to mass: double the mass, halve the acceleration.',
          detailed:
            'Worked through with numbers: a 1000 kg car with 4000 N of driving force accelerates at 4 m/s². Load it to 2000 kg with the same engine force and it manages 2 m/s². Keep it at 1000 kg but double the force to 8000 N and it reaches 8 m/s². Double both and you are back to 4 m/s² — because F/m is unchanged. Only the ratio matters.',
          technical:
            'a = F/m is a first-order linear relation in each variable separately, which is why the effects compose so simply. Integrating twice gives v = v₀ + at and s = s₀ + v₀t + ½at² for constant force, the equations behind every projectile and braking-distance calculation.',
        },
      },
      {
        id: 'viz-lab',
        kind: 'visualization',
        visualizationId: visualizationId('second-law-lab'),
      },
      {
        id: 'claim-units',
        kind: 'claim',
        statement: {
          essential:
            'The newton is defined by this equation: one newton is the force that accelerates one kilogram at one metre per second squared. The unit exists because the law does.',
          detailed:
            'That circularity is deliberate and useful. Rather than defining force independently and then discovering the law, the SI system takes mass, length and time as basic and defines force through F = ma. It means the equation is partly a definition and partly a physical claim — the physical content being that the *same* m works for every kind of force applied to a given object.',
          technical:
            '1 N = 1 kg·m·s⁻². The empirical content of the second law is that the constant of proportionality between net force and acceleration is a property of the object alone, independent of the force’s nature, magnitude or direction.',
        },
        evidence: 'model',
        references: [referenceId('newton-1687-principia'), referenceId('codata-2018')],
      },
      {
        id: 'everyday',
        kind: 'prose',
        text: {
          essential:
            'The law is why a loaded lorry takes far longer to stop than an empty one: the brakes supply a similar force, but there is more mass to decelerate. It is why a cricket ball hurts more than a tennis ball at the same speed — stopping it requires more force. And it is why airbags work, by stretching the stopping out in time so the required force is smaller.',
          detailed:
            'That last one is worth doing properly. Stopping a 70 kg person from 15 m/s in 0.02 s (hitting a dashboard) needs about 52,500 N. Doing it in 0.2 s (an airbag) needs about 5,250 N. Nothing about the energy or the momentum has changed; only the time available, and force is what fills the gap.',
        },
      },
      {
        id: 'gravity-link',
        kind: 'prose',
        text: {
          essential:
            'Combine this law with gravity and free fall falls out immediately. Gravity supplies a force proportional to mass; the second law divides by mass to get acceleration; the mass cancels, and everything falls at the same rate.',
          detailed:
            'Written out: F = GMm/r² and a = F/m give a = GM/r². This is the single most consequential piece of algebra in classical physics, and it is only two lines. It also shows why the cancellation is not obvious in advance: the m in the gravity equation and the m in F = ma are, conceptually, two different quantities that happen always to be equal.',
        },
      },
      {
        id: 'cross-mass',
        kind: 'cross-link',
        topicId: topicId('mass-and-weight'),
        rationale: 'Why the two masses in that cancellation are the same number.',
      },
      {
        id: 'momentum-form',
        kind: 'prose',
        depths: ['technical'],
        text: {
          essential:
            'Newton stated the law in terms of momentum rather than acceleration, and that version remains correct when the mass itself changes.',
          technical:
            'Newton’s own formulation was in terms of momentum, p = mv, with force as the rate of change of momentum: F = dp/dt. When mass is constant this gives F = m dv/dt = ma. When it is not — a rocket ejecting propellant, a raindrop accreting water, a relativistic particle — the momentum form remains correct and F = ma does not. The rocket equation, Δv = v_e ln(m₀/m₁), follows from the momentum form and is why staging matters so much in launch vehicle design.',
        },
      },
      {
        id: 'limits',
        kind: 'callout',
        tone: 'caution',
        title: 'Where F = ma stops being exact',
        text: {
          essential:
            'At speeds approaching that of light, the same force produces less and less acceleration, and the simple form fails; the momentum formulation with relativistic momentum survives. At atomic scales, forces and trajectories are replaced by quantum mechanics altogether. Between those extremes — which is to say, in essentially all engineering — F = ma is exact for practical purposes.',
        },
        references: [referenceId('pdg-2024')],
      },
    ],
    furtherReading: [referenceId('newton-1687-principia')],
  },

  {
    id: topicId('third-law'),
    slug: 'third-law',
    sectionId: NEWTON,
    order: 4,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The third law: action and reaction',
    subtitle: 'Every force is half of a pair — and the two halves act on different objects.',
    summary: {
      essential:
        'If A pushes B, then B pushes A equally hard in the opposite direction. The two forces are always the same size, always opposite, and always on different objects.',
      detailed:
        'The last clause is the one that gets dropped, and dropping it turns the law into nonsense. Two forces acting on *different* objects cannot cancel, because cancelling is something that only happens within the force budget of a single object.',
      technical:
        'F_AB = −F_BA. The law is equivalent to the conservation of momentum for an isolated pair: since the internal forces are equal and opposite and act for the same duration, the total momentum change of the pair is zero whatever they do to each other.',
    },
    glossaryTerms: [glossaryTermId('net-force')],
    related: [topicId('second-law'), topicId('what-gravity-is'), topicId('orbits')],
    blocks: [
      {
        id: 'statement',
        kind: 'prose',
        text: {
          essential:
            'To every action there is always an equal and opposite reaction. Push on a wall and the wall pushes back on you with exactly the same force. Sit on a chair and the chair pushes up on you as hard as you press down on it.',
          detailed:
            'Newton’s own phrasing continues: "the mutual actions of two bodies upon each other are always equal, and directed to contrary parts." The word "mutual" is doing the work. There is no such thing as a one-sided force in Newtonian mechanics; a force is always an interaction between two things.',
        },
      },
      {
        id: 'claim-different-objects',
        kind: 'claim',
        statement: {
          essential:
            'The two forces in a pair never act on the same object, so they never cancel. One acts on A, the other acts on B. Each object feels only its own half.',
          detailed:
            'Take a book on a table. Gravity pulls the book down with 10 N; the table pushes the book up with 10 N. Those two *do* cancel — but they are not a third-law pair. They are two different interactions that happen to act on the same object. The third-law partner of "Earth pulls book down" is "book pulls Earth up"; the partner of "table pushes book up" is "book pushes table down". Sorting a situation into correct pairs is the whole skill, and it is why the law is stated with the two objects named.',
          technical:
            'A useful test: a genuine third-law pair always has the same type of force (both gravitational, both normal, both frictional), the same magnitude, opposite directions, and the two objects swapped in the description. If any of those fails, the two forces are not partners.',
        },
        evidence: 'model',
        references: [referenceId('newton-1687-principia')],
      },
      {
        id: 'misconception-cancel',
        kind: 'callout',
        tone: 'misconception',
        title: '“If the forces are equal and opposite, nothing can ever move”',
        text: {
          essential:
            'This objection sounds airtight and dissolves the moment the objects are separated. When you push a shopping trolley, you push the trolley and the trolley pushes you. The trolley’s motion is decided by the forces on the trolley — your push, minus friction — and your push has no competitor there. The trolley’s push back acts on you, not on itself, and it is one of the reasons pushing a heavy trolley is tiring.',
          detailed:
            'The two halves also produce very different results, because acceleration is force divided by mass. Two ice skaters push apart with the same force; the 50 kg one accelerates at 4 m/s² under a 200 N push while the 80 kg one accelerates at 2.5 m/s². Same force, different outcomes — and both skaters move, which is the answer to the objection.',
        },
      },
      {
        id: 'viz-pairs',
        kind: 'visualization',
        visualizationId: visualizationId('third-law-pairs'),
      },
      {
        id: 'walking',
        kind: 'prose',
        text: {
          essential:
            'Walking is the third law in action. Your foot pushes backwards against the ground; the ground pushes forwards against you, and that forward push is what accelerates you. Take away the grip — try walking on wet ice — and you cannot generate the pair at all.',
          detailed:
            'The same explains swimming (push water backwards, water pushes you forwards), rowing, propellers and jet engines. In every case the trick is to throw something backwards, and the "something" is what makes the difference: a swimmer throws water, a car throws the whole Earth backwards by an imperceptible amount through friction at the tyres.',
        },
      },
      {
        id: 'claim-rockets',
        kind: 'claim',
        statement: {
          essential:
            'A rocket works the same way, and it does not need anything to push against. It throws mass out of the back at high speed, and the reaction to throwing that mass is what pushes the rocket forward.',
          detailed:
            'The common objection — that a rocket in vacuum would have "nothing to push against" — misunderstands the law: the rocket pushes on its own exhaust, and the exhaust pushes back on the rocket. Air is not merely unnecessary — it is a hindrance, and rockets work better in vacuum. Equivalently, in momentum terms: expelling propellant backwards must be balanced by the rocket gaining forward momentum, because nothing external is acting on the combined system.',
          technical:
            'Thrust equals the mass flow rate times the exhaust velocity, F = ṁ v_e (plus a pressure term at the nozzle exit). Both the thrust on the vehicle and the equal, opposite force on the exhaust stream are internal to the rocket-plus-propellant system, whose total momentum is therefore conserved — which is exactly the rocket equation.',
        },
        evidence: 'established',
        references: [referenceId('newton-1687-principia')],
      },
      {
        id: 'jumping',
        kind: 'prose',
        text: {
          essential:
            'When you jump, you push down on the Earth and the Earth pushes up on you. The forces are equal. Your acceleration is a few metres per second squared; the Earth’s is around 10⁻²² metres per second squared, because it is 10²³ times more massive than you.',
          detailed:
            'The Earth genuinely does move — the physics is not hedging. A 70 kg person pushing off with 1,400 N gives the Earth an acceleration of about 2 × 10⁻²² m/s², which over a 0.2 s push corresponds to a displacement vastly smaller than an atomic nucleus. The force is real; the response is unmeasurable. That is a statement about the Earth’s mass, not about the law.',
        },
      },
      {
        id: 'collisions',
        kind: 'prose',
        text: {
          essential:
            'In a crash between a lorry and a small car, both feel exactly the same force. The car is wrecked and the lorry is dented because the car has far less mass, so the same force produces a far larger acceleration — and it is acceleration, not force, that injures people.',
          detailed:
            'With a 3,000 kg lorry and a 1,200 kg car experiencing 60,000 N each, the lorry decelerates at 20 m/s² and the car at 50 m/s². Passengers experience those accelerations, which is why vehicle mass matters so much in a collision and why crumple zones — which lengthen the collision time and therefore lower the force — matter more.',
        },
      },
      {
        id: 'momentum',
        kind: 'prose',
        depths: ['detailed', 'technical'],
        text: {
          essential:
            'The third law is the conservation of momentum in disguise: whatever momentum one object gains, the other loses.',
          detailed:
            'The third law is really the conservation of momentum in disguise. Because the two forces are equal, opposite and act for exactly the same length of time, whatever momentum one object gains the other loses. Add them up and the total never changes — which is why momentum is conserved in every collision, explosion and rocket burn.',
          technical:
            'For an isolated pair, dp₁/dt = F₂₁ and dp₂/dt = F₁₂ = −F₂₁, so d(p₁ + p₂)/dt = 0. Conservation of momentum is the more fundamental statement — it follows from the translational symmetry of space via Noether’s theorem and survives into relativity and quantum mechanics, where the third law in its original form does not hold for all interactions.',
        },
      },
      {
        id: 'gravity-pair',
        kind: 'cross-link',
        topicId: topicId('what-gravity-is'),
        rationale:
          'Gravity obeys the third law too: you pull the Earth exactly as hard as it pulls you.',
      },
    ],
    furtherReading: [referenceId('newton-1687-principia')],
  },
];
