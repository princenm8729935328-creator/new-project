/**
 * Recaps for Human Evolution, Scientific Lens — Movements VII to IX and the
 * closing synthesis.
 *
 * The last movement carries the section's most misused claims — that evolution
 * has stopped, that relaxed selection means degeneration, that human variation
 * is partitioned into races, that a future higher human is coming — so most of
 * these questions check a correction rather than a fact.
 */
import type { RecapsByTopic } from '../schema/recap';

export const HUMAN_PRESENT_RECAPS: RecapsByTopic = {
  'pigment-ornament-and-inference': {
    summary: {
      essential:
        'A perforated shell is not automatically a bead. It has to have travelled, to have been deliberately perforated, to show wear from being worn, to come from a selected size range, and ideally to cluster with other signs of use.',
      detailed:
        'Pigment is weaker evidence than it is usually presented as, because ochre improves adhesives, preserves hides and may work as sunscreen. What strengthens the symbolic reading is processing that exceeds practical need.',
    },
    questions: [
      {
        id: 'tests',
        prompt: 'Why must a perforation be examined before a shell counts as an ornament?',
        options: [
          {
            id: 'a',
            text: 'Because predatory molluscs drill shells and abrasion breaks them, both leaving holes',
            correct: true,
          },
          { id: 'b', text: 'Because deliberate perforations are always larger' },
          { id: 'c', text: 'Because shells cannot be dated directly' },
          { id: 'd', text: 'Because only certain species were used for beads' },
        ],
        explanation:
          'Predator-drilled holes have a characteristic bevelled profile at positions the predator chooses; deliberate ones tend to be punched or ground where a string would hang the shell best. Wear polish at the margins then shows that a cord actually moved against it.',
      },
      {
        id: 'distance',
        prompt: 'Why does the distance a shell travelled matter as much as the shell itself?',
        options: [
          {
            id: 'a',
            text: 'Because carrying an inedible object tens of kilometres has no practical payoff, which is what implies a social meaning',
            correct: true,
          },
          { id: 'b', text: 'Because distant shells are better preserved' },
          { id: 'c', text: 'Because it proves the makers had boats' },
          { id: 'd', text: 'Because coastal shells are easier to perforate' },
        ],
        explanation:
          'A symbol only works if it is shared — somebody has to read the mark. Effort expended on an object with no nutritional or practical return is the strongest available indication that it meant something to a community.',
      },
    ],
  },

  'cave-art': {
    summary: {
      essential:
        'Figurative cave painting appears by at least 44,000 years ago in Indonesia and around 36,000 in Europe, and the earliest known work is already accomplished — so the tradition began earlier, on surfaces that did not survive.',
      detailed:
        'Some Spanish cave markings have been dated to more than 64,000 years, which would make them Neanderthal. The objection is technical — cave carbonates can gain or lose uranium, inflating apparent ages — and the dispute is unresolved.',
    },
    questions: [
      {
        id: 'mature',
        prompt: 'What does the sophistication of the earliest known cave art imply?',
        options: [
          {
            id: 'a',
            text: 'That the tradition began earlier, on surfaces that have not survived',
            correct: true,
          },
          { id: 'b', text: 'That the art was made much more recently than dated' },
          { id: 'c', text: 'That it was produced by a single exceptional individual' },
          { id: 'd', text: 'That artistic ability appeared suddenly and fully formed' },
        ],
        explanation:
          'Chauvet at around 36,000 years shows overlapping figures suggesting movement, shading for volume, and use of the wall contours to give an animal a shoulder. Art survives only in deep chambers with stable conditions; whatever was painted on rock shelters, skin, bark or wood is gone.',
      },
      {
        id: 'iberian',
        prompt: 'Why are the dates for the Iberian cave markings disputed?',
        options: [
          {
            id: 'a',
            text: 'Because the method assumes the carbonate crust behaved as a closed system, and cave carbonates can gain or lose uranium',
            correct: true,
          },
          { id: 'b', text: 'Because nobody accepts that Neanderthals existed in Iberia' },
          { id: 'c', text: 'Because the markings may be natural mineral staining' },
          { id: 'd', text: 'Because the caves were excavated in the nineteenth century' },
        ],
        explanation:
          'The objection is technical rather than ideological: open-system behaviour would inflate the apparent age. The original team maintains the result, critics argue the samples show signs of exactly this problem, and no resolution has been reached.',
      },
    ],
  },

  'burial-and-the-dead': {
    summary: {
      essential:
        'Distinguishing an intentional grave from a body that came to rest and was covered is genuinely hard. The best-known Neanderthal burial has been excavated, re-excavated and argued about for over a century, and the argument is still live.',
      detailed:
        'Rapid covering is not the same as a grave — roof collapse, sediment slump or a body in a natural hollow all produce a complete articulated skeleton without anyone intending anything.',
    },
    questions: [
      {
        id: 'preservation',
        prompt: 'What does a complete, articulated Neanderthal skeleton establish?',
        options: [
          {
            id: 'a',
            text: 'That the body was covered quickly — but not by whom or what',
            correct: true,
          },
          { id: 'b', text: 'That it was deliberately buried' },
          { id: 'c', text: 'That it was protected by its group' },
          { id: 'd', text: 'That it died of natural causes' },
        ],
        explanation:
          'A body left on a cave floor is scavenged, scattered and destroyed, so completeness does imply rapid covering. But a roof collapse or a body settling into a natural hollow that then filled produces the same result, which is why the geometry of the depression is what the argument turns on.',
      },
      {
        id: 'shanidar',
        prompt: 'What happened to the Shanidar "flower burial"?',
        options: [
          {
            id: 'a',
            text: 'The pollen was most likely introduced by burrowing rodents that store flower heads',
            correct: true,
          },
          { id: 'b', text: 'It was confirmed by later excavation' },
          { id: 'c', text: 'The skeleton turned out to be modern human' },
          { id: 'd', text: 'The site was destroyed before it could be studied' },
        ],
        explanation:
          'The story still circulates decades after the evidence was reinterpreted. Objects near a body may be grave goods or may be items already in the sediment, and distinguishing them needs spatial data that most old excavations did not collect.',
      },
    ],
  },

  'exchange-and-social-networks': {
    summary: {
      essential:
        'Obsidian carries an outcrop-level chemical fingerprint, so every artefact records a journey. Transport distances jump from a few kilometres in the Acheulean to tens and then hundreds through the Stone Age.',
      detailed:
        'The distance is a measurement; what it implies is a well-constrained inference. Groups connected to other groups have access to more people who know things, which is the mechanism linking exchange to technological complexity.',
    },
    questions: [
      {
        id: 'sourcing',
        prompt: 'Why can a stone tool be traced to a specific outcrop?',
        options: [
          {
            id: 'a',
            text: 'Because each volcanic eruption produces glass with its own trace-element fingerprint',
            correct: true,
          },
          { id: 'b', text: 'Because tool shapes differ by region' },
          { id: 'c', text: 'Because obsidian contains datable organic residue' },
          { id: 'd', text: 'Because prehistoric people marked their raw material' },
        ],
        explanation:
          'This makes the distance between source and find-spot a measurement rather than an interpretation — which is unusually solid evidence about social organisation, in a domain where most conclusions are inferential.',
      },
      {
        id: 'networks',
        prompt: 'Why does exchange between groups matter for technology?',
        options: [
          {
            id: 'a',
            text: 'Because a network of connected bands behaves like a much larger population for retaining and improving techniques',
            correct: true,
          },
          { id: 'b', text: 'Because traded tools are better made than local ones' },
          { id: 'c', text: 'Because exchange requires writing to record debts' },
          { id: 'd', text: 'Because it allows specialists to stop making their own food' },
        ],
        explanation:
          'Cumulative culture depends on how many skilled models a learner can observe. Connection multiplies that number without the resident group growing, which is why archaeological complexity tracks contact as well as raw population.',
      },
    ],
  },

  'why-farming-began': {
    summary: {
      essential:
        'Agriculture was invented independently in at least eleven regions within a few thousand years, after two hundred thousand years in which nobody did it. That clustering points at a change in conditions rather than in people.',
      detailed:
        'The last glacial was not merely cold but violently unstable. Cultivation is a bet that conditions will hold for months, and Holocene stability changed the odds — which explains why farming became possible rather than why it happened.',
    },
    questions: [
      {
        id: 'clustering',
        prompt: 'What does the near-simultaneous independent invention of agriculture suggest?',
        options: [
          {
            id: 'a',
            text: 'That conditions changed rather than that people did',
            correct: true,
          },
          { id: 'b', text: 'That the technique spread by contact between regions' },
          { id: 'c', text: 'That a cognitive change made farming thinkable' },
          { id: 'd', text: 'That the dating of several centres is wrong' },
        ],
        explanation:
          'If farming were simply a good idea waiting to be had, it should have appeared at random points across the previous two hundred millennia. Instead it appears almost everywhere at almost the same time, in regions with no contact and entirely different crop packages.',
      },
      {
        id: 'gradual',
        prompt: 'How quickly did domestication happen?',
        options: [
          {
            id: 'a',
            text: 'Over centuries to millennia, with long periods of cultivating morphologically wild plants first',
            correct: true,
          },
          { id: 'b', text: 'Within a single generation once cultivation began' },
          { id: 'c', text: 'Only after deliberate selective breeding was invented' },
          { id: 'd', text: 'Instantly, when the first non-shattering mutant appeared' },
        ],
        explanation:
          'Archaeobotanical sequences show over a millennium of cultivating wild-type cereals before domesticated traits become common, with wild resources important throughout. Nobody living through it would have experienced a revolution.',
      },
    ],
  },

  'what-domestication-does': {
    summary: {
      essential:
        'Most of the modification in domesticated species was not deliberate breeding but the unintended consequence of harvesting and sowing. Nobody has to intend anything for a non-shattering mutant to go to fixation.',
      detailed:
        'Animals show a stranger pattern: selecting for tameness alone produces smaller bodies, shorter faces, floppy ears and patchy coats as a correlated package, by a mechanism that is still argued about.',
    },
    questions: [
      {
        id: 'unconscious',
        prompt: 'How did wheat become non-shattering without anyone intending it?',
        options: [
          {
            id: 'a',
            text: 'Harvesting collects the rare mutants whose seed stays attached, and sowing part of the harvest multiplies them',
            correct: true,
          },
          { id: 'b', text: 'Early farmers deliberately selected non-shattering plants' },
          { id: 'c', text: 'Cultivation caused the mutation to occur' },
          { id: 'd', text: 'Shattering plants were physically removed from fields' },
        ],
        explanation:
          'A non-shattering plant is badly disadvantaged in the wild, since its seeds never disperse — and is the only plant whose seed reaches the basket. Add sowing and you have run a selective breeding programme without deciding anything.',
      },
      {
        id: 'mutual',
        prompt:
          'Why is domestication best described as a relationship rather than something done to a species?',
        options: [
          {
            id: 'a',
            text: 'Because both parties were changed and became dependent — domesticated cereals cannot disperse their own seed, and the populations they feed cannot be fed otherwise',
            correct: true,
          },
          { id: 'b', text: 'Because domesticated animals chose to live with humans' },
          { id: 'c', text: 'Because domestication can be reversed at any time' },
          { id: 'd', text: 'Because humans were domesticated by their crops first' },
        ],
        explanation:
          'By evolutionary standards wheat did rather well: it occupies a vast fraction of the Earth arable land and is tended, watered and defended by an enormous workforce. The framing is a corrective rather than a joke, because both sides of the relationship were reshaped.',
      },
    ],
  },

  'the-cost-of-farming': {
    summary: {
      essential:
        'Skeletons from the agricultural transition are shorter, more diseased and more malnourished than the foragers before them — and population nonetheless rose sharply. Both are true, because natural selection counts descendants rather than wellbeing.',
      detailed:
        'Settled life allows shorter birth intervals and earlier weaning, so more children per woman, by enough to outweigh higher mortality. Crowding and livestock then brought epidemic diseases that had never been able to persist in human populations before.',
    },
    questions: [
      {
        id: 'paradox',
        prompt: 'How can farming populations grow while individual health declines?',
        options: [
          {
            id: 'a',
            text: 'Because shorter birth intervals raised fertility by more than mortality rose — selection counts descendants, not wellbeing',
            correct: true,
          },
          { id: 'b', text: 'Because the skeletal evidence has been misinterpreted' },
          { id: 'c', text: 'Because farmers lived longer despite being less healthy' },
          { id: 'd', text: 'Because population growth came entirely from immigration' },
        ],
        explanation:
          'A mobile forager carrying an infant cannot easily manage a second small child, spacing births roughly four years apart. A settled farmer can, and cereal gruel allows earlier weaning. The proportion of juvenile skeletons rises across the transition, indicating increased fertility rather than better survival.',
      },
      {
        id: 'disease',
        prompt: 'Why could epidemic diseases only persist after farming?',
        options: [
          {
            id: 'a',
            text: 'Because a disease that confers lasting immunity needs a continuous supply of new hosts, which requires a large dense population',
            correct: true,
          },
          { id: 'b', text: 'Because the pathogens did not exist before farming' },
          { id: 'c', text: 'Because foragers had stronger immune systems' },
          { id: 'd', text: 'Because farming weakened human resistance to infection' },
        ],
        explanation:
          'Such a disease burns through a small band and vanishes, having run out of susceptible people. Farming created a dense population with a high birth rate and then kept it supplied — and most of the great epidemic diseases arrived from domesticated animals.',
      },
      {
        id: 'ratchet',
        prompt: 'Why does the health cost not make agriculture a "mistake"?',
        options: [
          {
            id: 'a',
            text: 'Because once a region farms, the population it supports is too large to feed by foraging — the transition is a ratchet',
            correct: true,
          },
          { id: 'b', text: 'Because forager life was uniformly worse' },
          { id: 'c', text: 'Because the health decline reversed within a few centuries' },
          {
            id: 'd',
            text: 'Because the decision was made with full knowledge of the consequences',
          },
        ],
        explanation:
          'It was rarely a choice made by anyone with the information to evaluate it. The romantic inversion should also be resisted: forager infant mortality was high, violence is documented, and a bad year had no buffer. Progress is not a category evolution recognises.',
      },
    ],
  },

  'new-selection-pressures': {
    summary: {
      essential:
        'With enough sequenced ancient individuals spread through time, selection can be measured directly as a change in allele frequency rather than inferred from patterns in living genomes.',
      detailed:
        'Almost every strong recent selection signal in the human genome is a response to something people did: farming, herding, settling in dense villages, moving to high latitudes. Culture and biology became most tightly coupled in exactly this period.',
    },
    questions: [
      {
        id: 'method',
        prompt: 'What does ancient DNA add to the study of recent human selection?',
        options: [
          {
            id: 'a',
            text: 'Allele frequencies can be measured at successive dates and the change observed rather than inferred',
            correct: true,
          },
          { id: 'b', text: 'It allows mutation rates to be measured directly' },
          { id: 'c', text: 'It identifies which individuals were most successful' },
          { id: 'd', text: 'It eliminates the need for statistical analysis' },
        ],
        explanation:
          'Earlier methods reasoned backwards from haplotype structure in living people that a variant must have been favoured. A time series simply shows the frequency rising — a different kind of evidence, less clever and far more direct.',
      },
      {
        id: 'pattern',
        prompt:
          'What do the strongest recent selection signals in the human genome have in common?',
        options: [
          {
            id: 'a',
            text: 'They are responses to conditions humans created: new diets, new diseases, new latitudes',
            correct: true,
          },
          { id: 'b', text: 'They all concern brain development' },
          { id: 'c', text: 'They are all found only in European populations' },
          { id: 'd', text: 'They predate the agricultural transition' },
        ],
        explanation:
          'Digesting milk, metabolising the fatty acids of a plant-heavy diet, making vitamin D under weak sun, resisting the diseases that crowding made permanent. Human evolution over the last ten thousand years is not biology going quiet while culture takes over.',
      },
    ],
  },

  'did-human-evolution-stop': {
    summary: {
      essential:
        'Evolution is change in the frequency of gene variants. That happens whenever people differ in how many children they have or in which variants they pass on, and both are still true.',
      detailed:
        'Removing early mortality does not remove selection; it moves it onto fertility and reproductive timing, both partly heritable. Drift, mutation and gene flow continue regardless — and gene flow is currently higher than at any point in human history.',
    },
    questions: [
      {
        id: 'survival',
        prompt: 'Why does near-universal survival to adulthood not stop human evolution?',
        options: [
          {
            id: 'a',
            text: 'Because selection acts on lifetime reproductive success, of which survival is only one component',
            correct: true,
          },
          { id: 'b', text: 'Because mortality has not actually fallen' },
          { id: 'c', text: 'Because mutations always outpace selection' },
          { id: 'd', text: 'Because evolution is driven by mutation rather than selection' },
        ],
        explanation:
          'Differences in how many children people have, and at what age, remain substantial and partly heritable. Relaxing mortality-based selection redistributes the fitness variance to fertility and timing rather than eliminating it.',
      },
      {
        id: 'improvement',
        prompt: 'What assumption usually sits behind the question "has evolution stopped?"',
        options: [
          { id: 'a', text: 'That evolution means getting better', correct: true },
          { id: 'b', text: 'That evolution requires high mortality' },
          { id: 'c', text: 'That evolution only affects physical traits' },
          { id: 'd', text: 'That evolution happens only in isolated populations' },
        ],
        explanation:
          'Evolution means allele frequencies changing, in whatever direction current conditions push them. Whether humans are still improving is not a question evolutionary biology can answer, because it contains a value judgement the theory does not supply.',
      },
    ],
  },

  'selection-we-can-measure': {
    summary: {
      essential:
        'Ongoing natural selection has been measured directly in living populations with good medical and genealogical records. The effects are real, statistically solid, and tiny — fractions of a percent per generation.',
      detailed:
        'That scale sits between two popular exaggerations. It is not true that evolution has stopped, and it is not true that humans are noticeably changing within historical memory.',
    },
    questions: [
      {
        id: 'requirements',
        prompt: 'What three things are needed to measure selection in a living population?',
        options: [
          {
            id: 'a',
            text: 'A trait that varies, a record of how many children each person had, and evidence the trait is partly heritable',
            correct: true,
          },
          { id: 'b', text: 'Ancient DNA, a fossil record and a mutation rate' },
          { id: 'c', text: 'An isolated population, a known founder and a stable environment' },
          { id: 'd', text: 'A controlled experiment with randomised groups' },
        ],
        explanation:
          'The Framingham Heart Study has all three: detailed medical measurements on residents of one town since 1948, followed through their children and grandchildren, which makes it possible to ask whether particular characteristics were associated with more children and whether they were passed on.',
      },
      {
        id: 'scale',
        prompt: 'How should the measured rates of contemporary human selection be understood?',
        options: [
          {
            id: 'a',
            text: 'As fractions of a percent per generation, requiring thousands of years for visible change and constant pressure throughout',
            correct: true,
          },
          { id: 'b', text: 'As fast enough to produce noticeable change within a century' },
          { id: 'c', text: 'As too small to be statistically detectable' },
          { id: 'd', text: 'As larger than at any previous point in human history' },
        ],
        explanation:
          'Human social environments almost never hold a selective pressure constant for hundreds of generations. Anyone claiming to have detected a large, fast evolutionary change in modern humans is making a claim far stronger than the measurements support.',
      },
    ],
  },

  'local-adaptations': {
    summary: {
      essential:
        'Populations under sustained extreme conditions do adapt genetically. High altitude is the clearest case, and Tibetan, Andean and Ethiopian highlanders reached different physiological solutions by different genetic routes.',
      detailed:
        'The Tibetan EPAS1 variant matches Denisovan sequence almost exactly: an advantageous variant acquired from another human population by interbreeding and deployed tens of thousands of years later.',
    },
    questions: [
      {
        id: 'convergence',
        prompt: 'What does it mean that Tibetans and Andeans solved altitude differently?',
        options: [
          {
            id: 'a',
            text: 'That adaptation depends on which variants happen to be available rather than on finding the optimal answer',
            correct: true,
          },
          { id: 'b', text: 'That one population is better adapted than the other' },
          { id: 'c', text: 'That the Andes are not high enough to require adaptation' },
          { id: 'd', text: 'That the two populations are unrelated' },
        ],
        explanation:
          'Tibetans have haemoglobin close to sea-level values and compensate by other means; Andeans carry elevated haemoglobin with adaptations at different loci; Ethiopian highlanders differ again. Convergent evolution within a single species, on a timescale of millennia.',
      },
      {
        id: 'epas1',
        prompt: 'Where did the Tibetan high-altitude EPAS1 variant come from?',
        options: [
          {
            id: 'a',
            text: 'From Denisovans, through ancient interbreeding',
            correct: true,
          },
          { id: 'b', text: 'It arose by new mutation after arrival on the plateau' },
          { id: 'c', text: 'From Neanderthals' },
          { id: 'd', text: 'It is present at high frequency in all human populations' },
        ],
        explanation:
          'The haplotype matches Denisovan sequence closely and is essentially absent elsewhere. Modern humans interbred with Denisovans in Asia, the variant persisted at low frequency, and when a population later occupied the plateau it turned out to be exactly what was needed.',
      },
    ],
  },

  'human-variation': {
    summary: {
      essential:
        'Human genetic variation is real and geographically patterned, varies gradually across space, and is mostly found within populations rather than between them. It does not form discrete biological races.',
      detailed:
        'This is a scientific finding with a measurable basis. Roughly 85 to 90% of human genetic variance is within populations, and the variation that does distinguish them is distributed as gradients without natural boundaries.',
    },
    questions: [
      {
        id: 'apportionment',
        prompt: 'Where is most human genetic variation found?',
        options: [
          { id: 'a', text: 'Within any given population — roughly 85 to 90% of it', correct: true },
          { id: 'b', text: 'Between continental groups' },
          { id: 'c', text: 'Split evenly between within and between populations' },
          { id: 'd', text: 'Almost entirely in genes affecting appearance' },
        ],
        explanation:
          'Pick two people from the same village and most of the genetic difference between any two humans anywhere is already present. First measured in 1972 with limited data, the result has held under every subsequent increase in data.',
      },
      {
        id: 'clines',
        prompt: 'Why is skin colour a poor guide to ancestry?',
        options: [
          {
            id: 'a',
            text: 'Because it responds quickly to ultraviolet intensity, so it tracks latitude rather than relatedness',
            correct: true,
          },
          { id: 'b', text: 'Because it is not genetically determined' },
          { id: 'c', text: 'Because it varies too little between populations' },
          { id: 'd', text: 'Because it cannot be measured objectively' },
        ],
        explanation:
          'Populations at similar latitudes on different continents converged on similar pigmentation from different genetic routes and different ancestries. Meanwhile two African populations may differ from each other more, genetically, than either does from a European population.',
      },
      {
        id: 'ancestry',
        prompt: 'How do genetic ancestry and race differ as variables?',
        options: [
          {
            id: 'a',
            text: 'Ancestry is continuous and estimable; race is a set of socially defined groupings whose boundaries have shifted across time and place',
            correct: true,
          },
          { id: 'b', text: 'They are the same thing under different names' },
          { id: 'c', text: 'Ancestry is social and race is biological' },
          { id: 'd', text: 'Neither has any measurable basis' },
        ],
        explanation:
          'Confusing them produces errors in both directions: treating a socially defined category as biological, and dismissing genuine population-level variation because the categories used to describe it are unsound. Population genetics uses continuous measures precisely because discrete categories misrepresent the structure.',
      },
    ],
  },

  'medicine-and-changing-selection': {
    summary: {
      essential:
        'Medicine changes which variants are disadvantageous rather than abolishing disadvantage. Modern environments have also made some previously harmless variants harmful, which is new selection rather than relaxed selection.',
      detailed:
        'Infectious disease remains the strongest selective force acting on humans, and pathogens evolve on a timescale of hours while we evolve on a timescale of generations.',
    },
    questions: [
      {
        id: 'both-ways',
        prompt: 'What is the effect of modern environments on selection, besides relaxing it?',
        options: [
          {
            id: 'a',
            text: 'They create new pressures, making previously neutral variants harmful',
            correct: true,
          },
          { id: 'b', text: 'They eliminate genetic variation entirely' },
          { id: 'c', text: 'They accelerate mutation rates' },
          { id: 'd', text: 'They have no measurable effect either way' },
        ],
        explanation:
          'Metabolic variants unremarkable under subsistence diets contribute to type 2 diabetes under abundant refined carbohydrate; immune variants advantageous against endemic parasites contribute to allergic conditions where those parasites are absent. Selection is redirected, not abolished.',
      },
      {
        id: 'degeneration',
        prompt: 'Why is the claim that relaxed selection causes human degeneration unsupported?',
        options: [
          {
            id: 'a',
            text: 'Because the expected effect is a very slow frequency change over hundreds of generations, and the same environment creates stronger new pressures',
            correct: true,
          },
          { id: 'b', text: 'Because selection has not in fact relaxed anywhere' },
          { id: 'c', text: 'Because harmful variants are removed by mutation' },
          { id: 'd', text: 'Because medicine repairs genomes directly' },
        ],
        explanation:
          'The removal rate was never fast either, so relaxing it produces a correspondingly slow rise. Note also the asymmetry in how the argument is usually made: the new pressures are stronger and better measured, and are rarely mentioned by the same writers.',
      },
    ],
  },

  'what-comes-next': {
    summary: {
      essential:
        'Some things can be projected — continued gene flow, drift, selection by pathogens, local adaptation under extreme conditions. Most of what is usually said cannot, because it requires predicting environments that depend on human decisions.',
      detailed:
        'Evolution has no direction of its own; it tracks conditions. Since human conditions are now largely made by humans, predicting our evolution means predicting our societies — which is not a biological question.',
    },
    questions: [
      {
        id: 'extrapolate',
        prompt: 'Why is extrapolating a current trend a poor way to predict human evolution?',
        options: [
          {
            id: 'a',
            text: 'Because selection responds to conditions, and human conditions now change every few decades',
            correct: true,
          },
          { id: 'b', text: 'Because evolutionary trends always reverse' },
          { id: 'c', text: 'Because current trends have not been measured' },
          { id: 'd', text: 'Because evolution has stopped in modern populations' },
        ],
        explanation:
          'A trend that ran for three generations tells you about those three generations and nothing about the next thirty. Bigger brains, weaker bodies and a species splitting in two are extrapolations rather than projections, and evolution does not extrapolate trends.',
      },
      {
        id: 'new-situation',
        prompt: 'What genuinely new factor complicates projecting human evolution?',
        options: [
          {
            id: 'a',
            text: 'Direct modification of the human germline, which could uncouple genetic change from natural selection',
            correct: true,
          },
          { id: 'b', text: 'The rising global population' },
          { id: 'c', text: 'Increased rates of mutation from modern chemicals' },
          { id: 'd', text: 'The end of migration between populations' },
        ],
        explanation:
          'It is technically possible, and whether and how it is used is a matter of law, ethics and politics rather than biology. There is no precedent for it in the four-billion-year history this atlas covers, and it makes projection harder rather than easier.',
      },
    ],
  },

  'how-a-primate-became-homo-sapiens': {
    summary: {
      essential:
        'No single change made us human. A sequence of modifications, each constrained by what came before, in which the results of earlier changes became the conditions for later ones — and from somewhere in the Pleistocene, a loop between two inheritance systems rather than a line.',
      detailed:
        'Several links remain unexplained: why bipedalism evolved, what drove brain expansion, when language appeared, why every other human species disappeared. What sits around those gaps is unusually well established for events millions of years past.',
    },
    questions: [
      {
        id: 'nosingle',
        prompt: 'Why does the account resist naming a single cause of human evolution?',
        options: [
          {
            id: 'a',
            text: 'Because each change was constrained by earlier ones and created the conditions for later ones — it is a chain with feedback, not one event',
            correct: true,
          },
          { id: 'b', text: 'Because the causes have not yet been investigated' },
          { id: 'c', text: 'Because evolutionary biology cannot identify causes in principle' },
          { id: 'd', text: 'Because all the proposed causes have been disproved' },
        ],
        explanation:
          'Bipedalism freed hands and cost stability; tools changed diet; diet changed available energy; energy allowed a larger brain; a larger brain required a longer childhood; a longer childhood allowed more learning; learning allowed culture; and culture changed the environment that selected the bodies.',
      },
      {
        id: 'contingency',
        prompt: 'What does the existence of Paranthropus, Homo naledi and the Neanderthals show?',
        options: [
          {
            id: 'a',
            text: 'That at every step there were hominins that did something else, so the sequence was not scheduled',
            correct: true,
          },
          { id: 'b', text: 'That all hominin lineages were converging on the same outcome' },
          { id: 'c', text: 'That extinction only affects poorly adapted species' },
          { id: 'd', text: 'That the human lineage was always the most successful' },
        ],
        explanation:
          'Paranthropus solved its problems with teeth and lasted a million and a half years. Homo naledi kept a small brain and was alive when we were. Neanderthals did nearly everything we did and are gone. Run the process again with slightly different conditions and there is no reason to expect this outcome.',
      },
      {
        id: 'notdestination',
        prompt: 'What does a causal chain ending with Homo sapiens establish about purpose?',
        options: [
          {
            id: 'a',
            text: 'Nothing — every surviving species can trace a chain of causes to itself, and tracing one says nothing about whether it was aimed',
            correct: true,
          },
          { id: 'b', text: 'That evolution was working towards intelligence' },
          { id: 'c', text: 'That humans are the most advanced product of evolution' },
          { id: 'd', text: 'That the chain must have been very improbable' },
        ],
        explanation:
          'The account is a reconstruction of what happened, assembled from fossils, genomes, isotopes, artefacts and experiments. It carries no implication that the process had a goal — that would be a separate claim requiring separate evidence, and nothing in this section supplies it.',
      },
    ],
  },
};
