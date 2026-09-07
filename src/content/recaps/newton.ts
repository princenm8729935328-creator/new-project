/**
 * Recaps for Gravity & Newton — the three laws and what they achieved.
 *
 * Newton's laws are the most misremembered physics in existence: nearly
 * everyone can recite them and nearly everyone carries an Aristotelian model
 * underneath. The distractors here are that model, stated plainly.
 */
import type { RecapsByTopic } from '../schema/recap';

export const NEWTON_RECAPS: RecapsByTopic = {
  'forces-and-motion': {
    summary: {
      essential:
        'Four words have to mean one thing each before the laws work. A force is a push or pull, always exerted by something on something else. Mass measures resistance to acceleration. Velocity includes direction, so turning at constant speed is a change in velocity. And acceleration is any change in velocity — speeding up, slowing down, or turning.',
      detailed:
        'The precision matters because the everyday meanings of these words quietly encode a wrong theory. "Force" in ordinary speech is something an object *has*; in mechanics it is an interaction between two objects, and naming both is part of naming the force. "Speed" and "velocity" are used interchangeably in conversation, but only velocity is a vector, and only with that distinction does uniform circular motion count as accelerated — which it must, since something has to be bending the path. And acceleration is a rate of change of velocity, not a synonym for going fast: a car at a constant 100 km/h has zero acceleration, while one crawling round a tight corner has a great deal. Every apparent paradox in the three laws dissolves once these four definitions are held firmly.',
    },
    questions: [
      {
        id: 'circular',
        prompt: 'A car travels round a circular track at a constant 60 km/h. Is it accelerating?',
        options: [
          { id: 'a', text: 'No — its speed is constant' },
          {
            id: 'b',
            text: 'Yes — its direction is changing, so its velocity is changing',
            correct: true,
          },
          { id: 'c', text: 'Only when it enters and leaves the curve' },
          { id: 'd', text: 'Only if the track is banked' },
        ],
        explanation:
          'Velocity is a vector: magnitude and direction. Changing either one is acceleration. The car is accelerating toward the centre of the circle the whole way round, which is why friction from the tyres is needed to hold it on the track.',
      },
      {
        id: 'force-pairs',
        prompt: 'Which of these is a correctly stated force?',
        options: [
          { id: 'a', text: 'The ball has a force of 20 N' },
          { id: 'b', text: 'The bat exerts 20 N on the ball', correct: true },
          { id: 'c', text: 'The ball’s momentum produces a force inside it' },
          { id: 'd', text: 'The ball carries 20 N of motion' },
        ],
        explanation:
          'A force is an interaction between two identified objects, not a property one object possesses. Stating a force means naming what exerts it and what it acts on — which is also why every force has a partner acting the other way.',
      },
    ],
  },

  'first-law': {
    summary: {
      essential:
        'An object at rest stays at rest, and an object in motion continues at constant velocity in a straight line, unless a net external force acts on it. Motion needs no cause; *changes* in motion do. Everything on Earth stops eventually because friction, drag and gravity are acting — not because stopping is what motion naturally does.',
      detailed:
        'The first law is a claim about what does not need explaining, and it overturns two thousand years of the opposite assumption. Aristotle’s physics — that continued motion requires a continued push — matches everyday experience perfectly, because everyday experience never lacks friction. Newton’s law describes the idealised case that friction hides, and it is vindicated exactly where friction is removed: a puck on an air table, a probe between the planets, a spacecraft coasting for decades with its engines off. The law also does something structural: it defines the class of reference frames — inertial frames — in which the second law holds. In an accelerating car or a spinning carousel, objects appear to accelerate with nothing pushing them, and the fix is either to change frame or to introduce fictitious forces that book-keep the frame’s own acceleration.',
    },
    questions: [
      {
        id: 'why-stop',
        prompt:
          'A hockey puck slides across ice and gradually stops. What does Newton’s first law say about this?',
        options: [
          { id: 'a', text: 'Objects naturally come to rest, so no force is needed' },
          {
            id: 'b',
            text: 'Friction is a net external force acting on the puck; without it the puck would slide forever',
            correct: true,
          },
          { id: 'c', text: 'The puck runs out of the force it was given' },
          { id: 'd', text: 'Its momentum decays with time' },
        ],
        explanation:
          'Motion does not need maintaining; stopping needs explaining. On ice friction is small, so the puck travels far; on carpet it is large, so the puck stops quickly. The difference is the force, not the motion.',
      },
      {
        id: 'no-motion',
        prompt: 'A book rests motionless on a table. What can you conclude?',
        options: [
          { id: 'a', text: 'No forces act on it' },
          { id: 'b', text: 'The forces acting on it sum to zero', correct: true },
          { id: 'c', text: 'Gravity is not acting because it is supported' },
          { id: 'd', text: 'The table exerts no force, since it is not moving' },
        ],
        explanation:
          'The first law concerns the *net* force. Gravity pulls the book down and the table pushes it up with an equal magnitude; both are real and both are large. Zero acceleration means balance, not absence.',
      },
    ],
  },

  'second-law': {
    summary: {
      essential:
        'F = m·a: the acceleration an object undergoes is the net force on it divided by its mass. Double the force and you double the acceleration; double the mass and you halve it. This is the law that turns qualitative statements about pushes into numbers, and it is what makes the whole of Newtonian mechanics predictive.',
      detailed:
        'Three points sharpen it. The F is the *net* force — the vector sum of everything acting — which is why a book on a table does not accelerate despite two large forces on it. The mass in the denominator is inertial mass, and its appearance here is what makes the equality with gravitational mass so remarkable. And the deeper form is F = dp/dt, force as the rate of change of momentum, which reduces to m·a only when mass is constant: a rocket burning fuel or a relativistic particle needs the momentum form. That is also where F = ma stops being exact — at speeds approaching c, momentum is γmv rather than mv, and the same force produces steadily less acceleration as γ grows.',
    },
    questions: [
      {
        id: 'net',
        prompt:
          'You push a crate with 100 N and friction resists with 40 N. The crate has a mass of 20 kg. What is its acceleration?',
        options: [
          { id: 'a', text: '5 m/s², from the 100 N push' },
          { id: 'b', text: '3 m/s², from the 60 N net force', correct: true },
          { id: 'c', text: '7 m/s², from the two forces added' },
          { id: 'd', text: '2 m/s², from the friction alone' },
        ],
        explanation:
          'The F in F = ma is the net force: 100 − 40 = 60 N, and 60/20 = 3 m/s². Forgetting that the F is a vector sum rather than one named push is the single most common error in applying the second law.',
      },
      {
        id: 'limit',
        prompt: 'Where does F = ma stop being exact?',
        options: [
          { id: 'a', text: 'For very small forces' },
          {
            id: 'b',
            text: 'When speeds approach the speed of light, or when the object’s mass is changing — the general form is F = dp/dt',
            correct: true,
          },
          { id: 'c', text: 'In a vacuum, where there is no medium to push against' },
          { id: 'd', text: 'For objects heavier than about a tonne' },
        ],
        explanation:
          'Newton wrote the law as force equalling the rate of change of momentum, which becomes m·a only for constant mass. Relativistically p = γmv, so as γ grows a constant force yields less and less acceleration — the reason nothing with mass reaches c.',
      },
    ],
  },

  'third-law': {
    summary: {
      essential:
        'Every force is one half of a pair: if A pushes B, then B pushes A with equal magnitude in the opposite direction. The essential detail is that the two forces act on *different objects*, which is why they never cancel each other. You push the ground backwards, the ground pushes you forwards, and you walk.',
      detailed:
        'The classic objection — if forces always come in equal and opposite pairs, how can anything ever accelerate? — comes from adding the two halves together. But a net force is a sum over the forces on *one* object, and the two members of a third-law pair are on different objects, so they never appear in the same sum. When you push a box, the relevant question is the sum of forces on the box: your push, minus friction. The box’s push on you belongs to your equation, not its. This law is also what makes rocketry possible in vacuum: an engine pushes exhaust one way and is pushed the other, needing nothing to push against, and it is what makes momentum conservation follow directly, since equal and opposite forces over equal times give equal and opposite momentum changes.',
    },
    questions: [
      {
        id: 'cancel',
        prompt: 'If every force has an equal and opposite reaction, why can anything accelerate?',
        options: [
          { id: 'a', text: 'The reaction is slightly smaller in practice' },
          {
            id: 'b',
            text: 'The two forces act on different objects, so they never enter the same net-force sum',
            correct: true,
          },
          { id: 'c', text: 'The reaction arrives a moment later' },
          { id: 'd', text: 'Friction breaks the symmetry' },
        ],
        explanation:
          'Net force is computed per object. Your push on a box and the box’s push on you belong to two different equations. Only the forces acting *on the box* decide the box’s acceleration.',
      },
      {
        id: 'rocket',
        prompt: 'A rocket accelerates in the vacuum of space. What is it pushing against?',
        options: [
          { id: 'a', text: 'The residual gas of interplanetary space' },
          {
            id: 'b',
            text: 'Its own exhaust — it pushes gas backwards and the gas pushes it forwards',
            correct: true,
          },
          { id: 'c', text: 'Nothing; it is pulled by the destination’s gravity' },
          { id: 'd', text: 'The launch pad, through conserved momentum' },
        ],
        explanation:
          'A rocket needs no external medium. The engine expels mass in one direction, and by the third law the expelled mass pushes the rocket the other way. This is momentum conservation in action, and it works better in vacuum than in air.',
      },
    ],
  },

  'newtons-achievement': {
    summary: {
      essential:
        'Newton’s achievement was unification: showing that the falling apple and the orbiting Moon obey one law. Before him, terrestrial and celestial motion were assumed to follow different rules. After him there was one physics, expressed mathematically, that predicted the future positions of bodies from their present ones — and that programme worked for two centuries.',
      detailed:
        'The Moon test is the argument in miniature. The Moon is about 60.34 Earth radii from Earth’s centre, so an inverse-square law predicts its acceleration should be 60.34² ≈ 3,640 times smaller than 9.81 m/s² — that is 2.69 × 10⁻³ m/s². The Moon’s observed orbital acceleration is exactly that. One number, computed two ways from unrelated data, matching: the apple and the Moon fall by the same rule. What followed was a new kind of science, in which a compact mathematical law generates testable predictions across enormous ranges of scale, and it delivered Halley’s comet, the shape of the Earth, the tides, and eventually Neptune found by calculation before it was seen. And then, after two centuries of success, Mercury’s 43 arcseconds and the speed of light showed where it stopped — which is how physics is supposed to work.',
    },
    questions: [
      {
        id: 'moon-test',
        prompt: 'What did Newton’s Moon test actually demonstrate?',
        options: [
          { id: 'a', text: 'That the Moon is held up by a force balancing gravity' },
          {
            id: 'b',
            text: 'That the Moon’s orbital acceleration is smaller than an apple’s by exactly the inverse-square factor of its greater distance',
            correct: true,
          },
          { id: 'c', text: 'That the Moon is falling toward the Earth at 9.81 m/s²' },
          { id: 'd', text: 'That the Moon’s mass equals a fixed fraction of Earth’s' },
        ],
        explanation:
          'At 60.34 Earth radii, an inverse-square law demands an acceleration 60.34² ≈ 3,640 times smaller than at the surface: 2.69 × 10⁻³ m/s². The Moon’s measured orbital acceleration matches. Two independent routes to one number is what makes it evidence rather than assertion.',
      },
      {
        id: 'unification',
        prompt: 'What made Newton’s work a turning point rather than one more result?',
        options: [
          { id: 'a', text: 'He was the first to describe gravity' },
          {
            id: 'b',
            text: 'He showed that terrestrial and celestial motion obey the same mathematical law, replacing two separate physics with one',
            correct: true,
          },
          { id: 'c', text: 'He proved that the Earth orbits the Sun' },
          { id: 'd', text: 'He invented the telescope observations that confirmed his law' },
        ],
        explanation:
          'The heavens had been assumed to run on different principles from the ground. Newton demonstrated one law covering both, expressed so that it made numerical predictions — a template for physics that held for two hundred years and remains how the subject works.',
      },
    ],
  },
};
