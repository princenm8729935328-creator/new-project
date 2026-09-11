/**
 * Human Evolution, Scientific Lens — Movement IX and the synthesis.
 *
 * Two constraints shape this movement. The first is the instruction not to make
 * speculative predictions sound like forecasts: the future topic is written to
 * state what can be projected from measured processes and to refuse the rest.
 * The second is that the closing synthesis must not answer "what it means to be
 * human" — that question belongs entirely to the Philosophical Lens — so the
 * final topic gathers the causal account and stops there.
 *
 * The topic on human variation is included because the population-structure
 * evidence is scientific and the misconception it corrects is one that the rest
 * of this movement would otherwise leave standing.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const HUMAN_PRESENT_TOPICS: readonly Topic[] = [
  {
    id: topicId('did-human-evolution-stop'),
    slug: 'did-human-evolution-stop',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 59,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Did human evolution stop?',
    subtitle: 'It cannot, and the reason is in the definition.',
    summary: {
      essential:
        'Evolution is change in the frequency of gene variants in a population. That happens whenever people differ in how many children they have, or in which variants they pass on. Both are still happening.',
      detailed:
        'The intuition behind "evolution stopped" is that medicine and technology have removed the pressures that used to kill people. That changes which variants are favoured; it does not switch the process off.',
      technical:
        'Evolutionary change requires heritable variation in fitness. Contemporary human populations retain both. Relaxation of mortality-based selection shifts the fitness component towards fertility and timing of reproduction, which are themselves heritable and variable.',
    },
    glossaryTerms: [
      glossaryTermId('natural-selection'),
      glossaryTermId('genetic-drift'),
      glossaryTermId('fitness'),
    ],
    related: [topicId('selection-we-can-measure'), topicId('medicine-and-changing-selection')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The claim that human evolution has stopped is usually made in a specific form: modern medicine, agriculture and technology mean that almost everyone survives to adulthood, so natural selection has nothing left to act on. The premise is roughly true in some countries. The conclusion does not follow.',
          detailed:
            'Selection is not only about who dies. It is about who leaves more descendants, and that depends on fertility, on the age at which people reproduce, on how many children survive, and on how many of those go on to reproduce themselves. Variation in all of these persists, and differences in them that are even partly heritable are selection whether anyone dies young or not.',
        },
      },
      {
        id: 'still-evolving-figure',
        kind: 'visualization',
        visualizationId: visualizationId('selection-components'),
      },
      {
        id: 'definition-claim',
        kind: 'claim',
        statement: {
          essential:
            'Evolution continues in any population with heritable variation in reproductive success, regardless of mortality rates.',
          detailed:
            'Selection acts on lifetime reproductive success, of which survival is one component. Relaxing mortality-based selection redistributes the fitness variance to fertility and reproductive timing rather than eliminating it.',
        },
        evidence: 'established',
        references: [referenceId('stearns-2010-measuring-selection')],
      },
      {
        id: 'the-other-processes',
        kind: 'prose',
        text: {
          essential:
            'Selection is also only one of the processes. Genetic drift — random change in which variants happen to get passed on — operates in every finite population and never stops. Mutation introduces new variation every generation. And gene flow between populations is currently higher than at any point in human history.',
          detailed:
            'That last one is substantial and underappreciated. For most of our history, populations were partly separated and differences between them accumulated slowly. Global mobility has reversed that: people from populations that were separated for tens of thousands of years now routinely have children together. Measured as change in the distribution of genetic variation, this is one of the largest evolutionary changes happening to our species right now, and it is homogenising rather than diversifying.',
        },
      },
      {
        id: 'misconception',
        kind: 'callout',
        tone: 'misconception',
        title: 'Evolution is not the same as improvement',
        text: {
          essential:
            'Behind "has evolution stopped?" usually sits an assumption that evolution means getting better. It does not mean anything of the kind. It means allele frequencies changing, in whatever direction current conditions push them.',
          detailed:
            'Asking whether humans are still evolving in the sense of still improving is not a question evolutionary biology can answer, because it contains a value judgement the theory does not supply. The scientific question — are allele frequencies in human populations changing, and can we measure it — has a clear answer, and it is yes.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'That answer is not a matter of principle. It has been measured, in living populations, with dates and numbers attached.',
        },
      },
    ],
    furtherReading: [referenceId('hawks-2007-acceleration')],
  },

  {
    id: topicId('selection-we-can-measure'),
    slug: 'selection-we-can-measure',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 60,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Selection we can measure',
    subtitle: 'Small effects, detected in populations with good records.',
    summary: {
      essential:
        'Ongoing natural selection has been measured directly in contemporary human populations with detailed medical and genealogical records. The effects are real, statistically solid, and small.',
      detailed:
        'These studies are important precisely because they are unglamorous. They show what present-day human evolution actually looks like: shifts of a fraction of a percent per generation, not a species transforming.',
      technical:
        'Selection differentials estimated in the Framingham Heart Study indicate directional selection on several traits including age at first birth and total cholesterol. Icelandic genealogical data show a measurable decline in polygenic scores associated with educational attainment of roughly 0.01 standard deviations per decade.',
    },
    glossaryTerms: [glossaryTermId('natural-selection'), glossaryTermId('fitness')],
    related: [topicId('did-human-evolution-stop'), topicId('local-adaptations')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'To measure selection in a living population you need three things: a trait that varies, a record of how many children each person had, and evidence that the trait is at least partly heritable. A handful of long-running studies have all three.',
          detailed:
            'The Framingham Heart Study has followed residents of one Massachusetts town, and then their children and grandchildren, since 1948, recording detailed medical measurements throughout. That makes it possible to ask whether women with particular measured characteristics had more children than others — and, because the study spans generations, whether those characteristics are passed on.',
        },
      },
      {
        id: 'measured-figure',
        kind: 'visualization',
        visualizationId: visualizationId('measured-selection'),
      },
      {
        id: 'framingham-claim',
        kind: 'claim',
        statement: {
          essential:
            'Natural selection on several measured traits has been detected in a contemporary human population, with small but statistically significant effects.',
          detailed:
            'Analysis of the Framingham cohort found directional selection towards slightly lower total cholesterol, lower blood pressure, earlier age at first birth and later age at menopause, projected to shift population means by a fraction of a percent over ten generations.',
        },
        evidence: 'established',
        references: [referenceId('byars-2010-framingham')],
      },
      {
        id: 'iceland',
        kind: 'prose',
        text: {
          essential:
            'Iceland offers a different kind of dataset: genealogies reaching back centuries combined with genetic data on a large fraction of the living population. That allows a direct look at whether particular genetic variants are becoming more or less common over time.',
          detailed:
            'One analysis examined variants statistically associated with educational attainment and found their frequency declining slightly across the twentieth century — consistent with people who stay in education longer having, on average, slightly fewer children. The measured rate is around a hundredth of a standard deviation per decade.',
          technical:
            'This result is easy to misreport and has been. The variants are associated with years of education in a specific population and social context; they do not index any intrinsic capacity, and the association itself is partly mediated by social environment. The magnitude is also tiny relative to the effect of changes in education systems over the same period. It is included here as a demonstration that change is measurable, not as a finding about human capability.',
        },
      },
      {
        id: 'iceland-claim',
        kind: 'claim',
        statement: {
          essential:
            'Genetic variants associated with educational attainment declined slightly in frequency in Iceland over the twentieth century.',
          detailed:
            'Genealogical and genomic data give a decline of roughly 0.01 standard deviations per decade in the relevant polygenic score. The variants index a population- and context-specific statistical association rather than any intrinsic trait.',
        },
        evidence: 'established',
        references: [referenceId('kong-2017-iceland-selection')],
      },
      {
        id: 'scale',
        kind: 'callout',
        tone: 'caution',
        title: 'How small these effects are',
        text: {
          essential:
            'The measured shifts amount to fractions of a percent per generation. At those rates, visible change takes hundreds of generations — thousands of years — and only if the pressure stays constant, which for human social environments it almost never does.',
          detailed:
            'This is the honest scale of contemporary human evolution, and it sits between two popular exaggerations. It is not true that evolution has stopped. It is also not true that humans are noticeably changing within historical memory. Anyone claiming to have detected a large, fast evolutionary change in modern humans is making a claim far stronger than the measurements support.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Larger effects do exist — but they come from populations living under genuinely severe conditions, and they took thousands of years.',
        },
      },
    ],
    furtherReading: [referenceId('stearns-2010-measuring-selection')],
  },

  {
    id: topicId('local-adaptations'),
    slug: 'local-adaptations',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 61,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Local adaptations',
    subtitle: 'Altitude, diet and diving — three environments, several separate solutions.',
    summary: {
      essential:
        'Human populations living under extreme conditions show genuine local genetic adaptation. High altitude is the clearest case, and different populations solved it in different ways.',
      detailed:
        'These are the strongest examples of recent human evolution, and their most interesting feature is convergence: Tibetans, Andeans and Ethiopians each adapted to thin air by different genetic routes.',
      technical:
        'Tibetan adaptation centres on EPAS1 variants introgressed from Denisovans, producing lower haemoglobin concentration without polycythaemia. Andean populations show a different genetic architecture with elevated haemoglobin. Ethiopian highlanders differ again. Convergent phenotypic outcomes from distinct genetic solutions.',
    },
    glossaryTerms: [
      glossaryTermId('introgression'),
      glossaryTermId('selective-sweep'),
      glossaryTermId('adaptation'),
    ],
    related: [
      topicId('interbreeding'),
      topicId('selection-we-can-measure'),
      topicId('human-variation'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'At 4,000 metres the air holds about 60% of the oxygen it does at sea level. A visitor’s body responds by making more red blood cells, which helps at first and then causes problems: thicker blood, higher blood pressure, and in pregnancy a substantially raised risk of complications and low birth weight.',
          detailed:
            'Populations that have lived at altitude for thousands of years do not respond this way. Tibetans at 4,000 metres have haemoglobin concentrations close to sea-level values. They compensate differently — breathing faster, wider blood vessels, better oxygen delivery to tissue — and they avoid the costs of thickened blood entirely.',
        },
      },
      {
        id: 'altitude-figure',
        kind: 'visualization',
        visualizationId: visualizationId('altitude-adaptation'),
      },
      {
        id: 'epas1',
        kind: 'prose',
        text: {
          essential:
            'The genetic basis is one of the strongest selection signals ever found in humans, centred on a gene that regulates the body’s response to low oxygen. And the version Tibetans carry did not originate in our species.',
          detailed:
            'The variant matches Denisovan sequence almost exactly. Modern humans moving into Asia interbred with Denisovans; that DNA persisted at low frequency; and when a population later occupied the Tibetan Plateau, it turned out to be exactly what was needed and swept to high frequency. An advantageous variant was acquired from another human population and deployed tens of thousands of years later.',
        },
      },
      {
        id: 'epas1-claim',
        kind: 'claim',
        statement: {
          essential:
            'The Tibetan high-altitude variant of EPAS1 was inherited from Denisovans through ancient interbreeding.',
          detailed:
            'The haplotype found at high frequency in Tibetans matches the Denisovan sequence closely and is essentially absent from other populations, a pattern explicable by introgression followed by strong local positive selection.',
        },
        evidence: 'established',
        references: [
          referenceId('huerta-sanchez-2014-epas1'),
          referenceId('yi-2010-tibetan-exome'),
        ],
      },
      {
        id: 'different-solutions',
        kind: 'prose',
        text: {
          essential:
            'Andean populations at comparable altitude solved the same problem differently. They do carry elevated haemoglobin, and their adaptations centre on other genes, including ones affecting cardiovascular function.',
          detailed:
            'Ethiopian highlanders differ again, with their own set of variants. Three populations, one environmental challenge, three genetic solutions. This is convergent evolution observed within a single species on a timescale of millennia, and it is a direct demonstration that adaptation depends on which variants happen to be available rather than on finding the optimal answer.',
        },
      },
      {
        id: 'andean-claim',
        kind: 'claim',
        statement: {
          essential:
            'Andean and Tibetan populations adapted to high altitude through different genetic changes producing different physiological solutions.',
          detailed:
            'Andean adaptation involves elevated haemoglobin and selection signals at distinct loci including cardiovascular genes, whereas Tibetan adaptation produces near-sea-level haemoglobin via EPAS1 and EGLN1. Ethiopian highlanders show yet another genetic architecture.',
        },
        evidence: 'established',
        references: [referenceId('crawford-2017-andean'), referenceId('beall-2010-epas1-tibet')],
      },
      {
        id: 'other-cases',
        kind: 'callout',
        tone: 'note',
        title: 'Cold, fat and diving',
        text: {
          essential:
            'Greenlandic Inuit carry variants affecting the processing of the fatty acids abundant in a marine mammal diet. The Bajau of Southeast Asia, who free-dive for much of their working lives, have spleens around 50% larger than neighbouring populations, with a candidate gene under selection.',
          detailed:
            'A larger spleen matters because it contracts during a dive, releasing a reservoir of oxygen-carrying red cells into circulation. The Bajau result comes from a single study with modest sample sizes and should be held accordingly — but along with the Inuit and altitude cases it establishes the general point. Human populations under sustained extreme conditions do adapt genetically, within a few thousand years.',
        },
        references: [
          referenceId('fumagalli-2015-greenland-inuit'),
          referenceId('ilardo-2018-bajau'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Local adaptation of this kind is real. It is also routinely confused with something quite different, and the difference matters enough to spend a topic on.',
        },
      },
    ],
    furtherReading: [referenceId('yi-2010-tibetan-exome')],
  },

  {
    id: topicId('human-variation'),
    slug: 'human-variation',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 62,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How human variation is actually structured',
    subtitle: 'Real, gradual, mostly within groups, and not divided into races.',
    summary: {
      essential:
        'Human genetic variation is real and geographically patterned, but it varies gradually across space and most of it exists within populations rather than between them. It does not form discrete biological races.',
      detailed:
        'This is a scientific finding with a measurable basis, not a political preference. The distribution of variation has been characterised in detail, and the pattern is clinal — gradients rather than boundaries.',
      technical:
        'Roughly 85–90% of human genetic variance is within populations and 10–15% between them. Clustering algorithms on genome-wide data recover geographic structure, but cluster number is set by the analyst and boundaries fall where sampling is discontinuous rather than where variation is.',
    },
    glossaryTerms: [
      glossaryTermId('population-structure'),
      glossaryTermId('gene-flow'),
      glossaryTermId('founder-effect'),
    ],
    related: [
      topicId('local-adaptations'),
      topicId('out-of-africa-again'),
      topicId('peopling-the-world'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Two things are true at once and are frequently confused. Human populations do differ genetically in ways that track geography and history. And those differences do not partition people into discrete biological groups.',
          detailed:
            'The first measurement of this was published in 1972, using the limited data then available, and the result has held up under every subsequent increase in data. Around 85 to 90% of human genetic variation is found within any given population. Only 10 to 15% distinguishes populations from each other. Pick two people from the same village and most of the genetic difference between any two humans anywhere is already present.',
        },
      },
      {
        id: 'variation-figure',
        kind: 'visualization',
        visualizationId: visualizationId('variation-structure'),
      },
      {
        id: 'apportionment-claim',
        kind: 'claim',
        statement: {
          essential:
            'Roughly 85–90% of human genetic variation occurs within populations rather than between them.',
          detailed:
            'First estimated from blood group and protein polymorphism data and confirmed repeatedly with genome-wide datasets. The proportion between conventionally defined continental groups is consistently in the range of 10–15%.',
        },
        evidence: 'established',
        references: [
          referenceId('lewontin-1972-apportionment'),
          referenceId('jorde-wooding-2004-variation'),
        ],
      },
      {
        id: 'clines',
        kind: 'prose',
        text: {
          essential:
            'The variation that does distinguish populations is distributed as gradients. Walk from Portugal to Beijing sampling people as you go, and allele frequencies shift smoothly. There is no line anywhere along that walk where one group ends and another begins.',
          detailed:
            'This is a direct consequence of the history in the previous movement. People expanded gradually, founder effects accumulated with distance, and neighbouring populations always exchanged partners. That process produces gradients, and gradients are what the data show.',
          technical:
            'Clustering algorithms applied to genome-wide data do recover structure corresponding to geography, which is sometimes cited as evidence for discrete groups. But the number of clusters is specified by the analyst, and where sampling is continuous the clusters become continuous too. The apparent discreteness in some analyses is a property of sampling widely separated populations rather than of the underlying variation.',
        },
      },
      {
        id: 'structure-claim',
        kind: 'claim',
        statement: {
          essential:
            'Human genetic variation is clinal — it varies gradually with geography — and does not form discrete biological races.',
          detailed:
            'Genome-wide analyses recover geographic structure while showing continuous variation without natural boundaries. Cluster-based analyses require the number of clusters to be specified in advance and produce apparent discreteness that reflects sampling gaps.',
        },
        evidence: 'established',
        references: [
          referenceId('rosenberg-2002-population-structure'),
          referenceId('yudell-2016-taking-race'),
        ],
      },
      {
        id: 'why-appearance-misleads',
        kind: 'prose',
        text: {
          essential:
            'The traits people use to sort each other — skin colour above all — are among the worst possible guides to ancestry. Pigmentation responds strongly and quickly to ultraviolet intensity, so it tracks latitude rather than relatedness.',
          detailed:
            'Populations at similar latitudes on different continents have converged on similar pigmentation from different genetic routes and different ancestries. Meanwhile two African populations may differ from each other more, genetically, than either does from a European population — because African populations retain the deepest divisions in the human family, having never passed through the bottleneck that everyone else descends from. A visible trait that responds to sunlight simply does not encode deep history.',
        },
      },
      {
        id: 'ancestry-vs-race',
        kind: 'callout',
        tone: 'misconception',
        title: 'Ancestry is a measurement. Race is a category.',
        text: {
          essential:
            'Genetic ancestry is real, continuous and estimable, and it matters in medicine and in reconstructing history. Race is a set of socially defined groupings whose boundaries have shifted across time and place. They are not the same variable and one is not a proxy for the other.',
          detailed:
            'Confusing them produces errors in both directions: treating a socially defined category as a biological one, and dismissing genuine population-level variation because the categories used to describe it are unsound. Population genetics handles ancestry with continuous measures precisely because discrete categories misrepresent the underlying structure.',
        },
        references: [referenceId('yudell-2016-taking-race')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'That is where the evidence currently stands. The remaining question — what happens next — is the one where the evidence runs out fastest.',
        },
      },
    ],
    furtherReading: [referenceId('mallick-2016-simons')],
  },

  {
    id: topicId('medicine-and-changing-selection'),
    slug: 'medicine-and-changing-selection',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 63,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Medicine, culture and changing selection',
    subtitle: 'Selection pressures are not removed. They are replaced.',
    summary: {
      essential:
        'Medicine changes which variants are disadvantageous rather than abolishing disadvantage. So does every other major cultural change — and some of them create new pressures that are stronger than the ones they removed.',
      detailed:
        'The clearest case runs the other way from the usual story: modern conditions have made some previously neutral variants harmful, and made some previously harmful ones survivable.',
      technical:
        'Relaxation of selection against a deleterious variant reduces its removal rate; equilibrium frequency then rises over many generations at a rate set by mutation–selection balance. Meanwhile mismatch between evolved physiology and novel environments — dietary, infectious, photic — generates new directional selection.',
    },
    glossaryTerms: [
      glossaryTermId('natural-selection'),
      glossaryTermId('gene-culture-coevolution'),
      glossaryTermId('fitness'),
    ],
    related: [
      topicId('did-human-evolution-stop'),
      topicId('new-selection-pressures'),
      topicId('what-comes-next'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Consider severe myopia. Before corrective lenses, being unable to see at a distance was a serious disadvantage. Now it is a minor inconvenience corrected in an afternoon. Selection against the variants involved has been relaxed — not by changing the variants, but by changing what the world demands.',
          detailed:
            'The same applies across medicine. Type 1 diabetes was fatal in childhood and is now managed. Many congenital conditions that prevented reproduction no longer do. Each of these is a real relaxation of selection, and the expected consequence is a slow increase in the frequency of the variants involved — slow because the removal rate was never fast either.',
        },
      },
      {
        id: 'pressure-figure',
        kind: 'visualization',
        visualizationId: visualizationId('changing-pressures'),
      },
      {
        id: 'the-other-direction',
        kind: 'prose',
        text: {
          essential:
            'The more interesting effect runs the other way. Modern environments have made some previously harmless variants harmful, which is new selection rather than relaxed selection.',
          detailed:
            'Metabolic variants that were unremarkable under a diet of foraged or subsistence foods can contribute to type 2 diabetes under an environment of abundant refined carbohydrate. Immune variants that were advantageous against endemic parasites appear to contribute to allergic and autoimmune conditions in environments where those parasites are absent. Myopia itself is now known to be driven substantially by time spent indoors in childhood — a cultural change acting on a developmental process, producing an epidemic far too fast to be genetic.',
        },
      },
      {
        id: 'relaxation-claim',
        kind: 'claim',
        statement: {
          essential:
            'Medical and cultural change alters which variants are under selection rather than eliminating selection.',
          detailed:
            'Relaxation of selection against particular deleterious variants proceeds slowly and is accompanied by novel directional selection arising from mismatch between evolved physiology and modern dietary, infectious and behavioural environments.',
        },
        evidence: 'inference',
        references: [referenceId('stearns-2010-measuring-selection')],
      },
      {
        id: 'infectious-disease',
        kind: 'prose',
        text: {
          essential:
            'Infectious disease remains the strongest selective force acting on humans, and it has not gone away. The genomic regions showing the clearest recent selection are immune loci, and epidemics continue to act on them.',
          detailed:
            'The relationship is also two-way, because pathogens evolve faster than we do. Antibiotic resistance is evolution happening on a timescale of years, in populations we created the conditions for. The arms race described in the ecology section is running now, and our side of it moves at generational speed while the other side moves at hourly speed.',
        },
      },
      {
        id: 'careful',
        kind: 'callout',
        tone: 'caution',
        title: 'Relaxed selection does not mean degeneration',
        text: {
          essential:
            'The idea that removing selection pressure causes a population to deteriorate is a recurring theme in popular writing and it has an ugly history. The actual expectation is far more modest: a very slow increase in the frequency of some variants, over hundreds of generations, with effects that medicine is meanwhile getting better at managing.',
          detailed:
            'It is also worth noting the asymmetry in the argument. The same people who worry about relaxed selection rarely mention the new selection pressures created by the same environment, which are stronger and better measured. There is no scientific basis for a general claim that human populations are deteriorating, and the claim has historically served purposes that had nothing to do with evidence.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Which leaves the question people most want answered, and the one where science has least to offer.',
        },
      },
    ],
    furtherReading: [referenceId('byars-2010-framingham')],
  },

  {
    id: topicId('what-comes-next'),
    slug: 'what-comes-next',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 64,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What comes next',
    subtitle: 'What can be projected, and what cannot.',
    summary: {
      essential:
        'Some things can be said about human evolutionary futures with reasonable confidence. Most of what is usually said cannot, because it requires predicting environments that depend on human decisions.',
      detailed:
        'Evolution has no direction of its own; it tracks conditions. Since human conditions are now largely made by humans, predicting our evolution means predicting our societies — which is not a biological question.',
      technical:
        'Projection is feasible where the selective regime is stable and measurable: mutation–selection balance, drift in finite populations, ongoing admixture. It is not feasible where the regime depends on technological and social trajectories, which are the dominant determinants of contemporary human selection pressures.',
    },
    glossaryTerms: [
      glossaryTermId('genetic-drift'),
      glossaryTermId('gene-flow'),
      glossaryTermId('gene-culture-coevolution'),
    ],
    related: [
      topicId('medicine-and-changing-selection'),
      topicId('how-a-primate-became-homo-sapiens'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Popular accounts of human evolutionary futures tend towards the dramatic: bigger heads, weaker bodies, longer fingers, a species splitting in two. Almost none of this rests on anything. It is extrapolation of current trends, and evolution does not extrapolate trends.',
          detailed:
            'The reason is straightforward. Selection responds to conditions. If the conditions change — and human conditions now change every few decades — the direction of selection changes with them. A trend that ran for three generations tells you about those three generations and nothing about the next thirty.',
        },
      },
      {
        id: 'futures-figure',
        kind: 'visualization',
        visualizationId: visualizationId('evolutionary-futures'),
      },
      {
        id: 'what-can-be-said',
        kind: 'prose',
        text: {
          essential:
            'A few things can be projected with reasonable confidence, because they follow from processes that are measured and stable. Gene flow between previously separated populations will continue and will reduce between-population differences. Drift will continue in small isolated populations. Mutation will continue to introduce variation.',
          detailed:
            'Selection by infectious disease will continue, because pathogens evolve continuously and remain the strongest measured pressure on human genomes. And where populations remain under sustained extreme conditions, local adaptation will continue at roughly the rates observed for altitude and diet — thousands of years for a detectable change.',
        },
      },
      {
        id: 'what-cannot',
        kind: 'open-question',
        question: 'How will human populations evolve over the coming millennia?',
        whyItMatters: {
          essential:
            'It is the question people most want answered about their own species, and the honest answer is that it is not principally a biological question any more.',
          detailed:
            'Human selection pressures are now overwhelmingly determined by technology, medicine, social organisation and the environments we build. Predicting human evolution therefore means predicting those — and nobody can predict those over the timescales evolution works on.',
        },
        whatWouldSettleIt: {
          essential:
            'Nothing available. Evolutionary projection requires a known selective regime, and ours depends on decisions not yet made.',
          detailed:
            'There is a further complication that has no precedent in the four-billion-year history covered by this atlas: direct modification of the human germline is now technically possible. Whether and how it is used is a matter of law, ethics and politics rather than of biology, and it could uncouple human genetic change from natural selection entirely. That is a genuinely new situation, and this section takes no position on it beyond noting that it makes projection harder rather than easier.',
        },
        references: [
          referenceId('stearns-2010-measuring-selection'),
          referenceId('hawks-2007-acceleration'),
        ],
      },
      {
        id: 'no-direction',
        kind: 'callout',
        tone: 'misconception',
        title: 'There is no next stage',
        text: {
          essential:
            'The idea of a future "higher" form of human assumes evolution has a direction it is travelling along. It does not. There is no ladder, no destination, and no reason to expect that whatever comes next would be recognisable as an improvement.',
          detailed:
            'The same point applies backwards. Homo sapiens is not the endpoint of a process that was heading here. We are the surviving branch of a bush that had many branches, most of which ended. Extinction is the normal outcome for a species, and there is no principle in evolutionary biology that exempts ours.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential: 'Which is the point at which the whole account can be put together.',
        },
      },
    ],
    furtherReading: [referenceId('stearns-2010-measuring-selection')],
  },

  {
    id: topicId('how-a-primate-became-homo-sapiens'),
    slug: 'how-a-primate-became-homo-sapiens',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 65,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'How a primate became Homo sapiens',
    subtitle: 'The whole chain, and what holds it together.',
    summary: {
      essential:
        'No single change made us human. What happened was a long sequence of modifications, each one constrained by what came before, in which the results of earlier changes became the conditions for later ones.',
      detailed:
        'Bipedalism freed hands and cost stability. Tools changed diet. Diet changed the energy available. Energy allowed a larger brain. A larger brain required a longer childhood. A longer childhood allowed more learning. Learning allowed culture. Culture changed the environment, and the environment selected the bodies.',
      technical:
        'The account is one of coupled, partially independent changes under shifting selective regimes, with feedback between biological and cultural inheritance channels from at least the Early Pleistocene. No single-factor model reproduces the sequence, and several of the transitions remain unexplained.',
    },
    glossaryTerms: [
      glossaryTermId('gene-culture-coevolution'),
      glossaryTermId('mosaic-evolution'),
      glossaryTermId('natural-selection'),
    ],
    related: [
      topicId('what-is-a-human'),
      topicId('why-we-did-not-evolve-from-chimpanzees'),
      topicId('what-comes-next'),
    ],
    blocks: [
      {
        id: 'the-chain',
        kind: 'prose',
        text: {
          essential:
            'A population of African apes began walking upright, for reasons still argued about. Their skeletons were rebuilt from the pelvis down, at the cost of a difficult birth and a fragile back. Their hands, no longer required to hold on, became better at holding things.',
          detailed:
            'For two million years that was most of it. Brains stayed roughly ape-sized. Then stone tools appeared, and cutting and pounding food reduced what teeth and guts had to do. Bodies became taller and longer-legged, built for covering ground and shedding heat. Brains began to grow, and something had to pay for them — more energy in, from better food and probably eventually from fire, and more energy shared, from a group that provisioned its young.',
        },
      },
      {
        id: 'synthesis-figure',
        kind: 'visualization',
        visualizationId: visualizationId('the-whole-chain'),
      },
      {
        id: 'the-loop',
        kind: 'prose',
        text: {
          essential:
            'Paying for a brain that large meant growing it slowly, mostly after birth, which meant a childhood measured in years rather than months. A long childhood spent among other people is a long apprenticeship. And a species that can transmit what it learns accurately can accumulate more than any individual could discover.',
          detailed:
            'At that point the process changes character. Accumulated knowledge lets a population occupy environments no body is adapted to. Occupying them changes what selection acts on. Techniques create new foods, new diseases, new densities — and those select bodies, which make the techniques more viable. From somewhere in the Pleistocene onward, human evolution is a loop between two inheritance systems rather than a single line.',
        },
      },
      {
        id: 'chain-claim',
        kind: 'claim',
        statement: {
          essential:
            'Human evolution involved coupled changes in locomotion, diet, energy budget, brain size, development and culture, with feedback between biological and cultural inheritance.',
          detailed:
            'The individual transitions are each supported by multiple independent lines of evidence. Their causal ordering is established in some cases — bipedalism preceded encephalisation by roughly two million years — and remains open in others.',
        },
        evidence: 'inference',
        references: [
          referenceId('anton-2014-evolution-of-homo'),
          referenceId('richerson-boyd-2005-not-by-genes'),
        ],
      },
      {
        id: 'contingency',
        kind: 'prose',
        text: {
          essential:
            'Nothing about this sequence was scheduled. At every step there were hominin species that did something else and are not here. Paranthropus solved its problems with teeth and lasted a million and a half years. Homo naledi kept a small brain and was alive when we were. Neanderthals did nearly everything we did and are gone.',
          detailed:
            'And the sequence depended on conditions that could have been otherwise: a climate that fluctuated, a continent that happened to be drying, a population that happened to be small enough for a variant to spread and large enough not to vanish. Run it again with the same physics and slightly different weather and there is no reason to expect this outcome, or any outcome resembling it.',
        },
      },
      {
        id: 'not-a-destination',
        kind: 'callout',
        tone: 'caution',
        title: 'What this chain does not show',
        text: {
          essential:
            'That a sequence of events led to us is not evidence that it was heading for us. Every surviving species can trace a chain of causes to itself, and every one of those chains contains contingencies that could have gone differently.',
          detailed:
            'The account above is a reconstruction of what happened, assembled from fossils, genomes, isotopes, artefacts and experiments. It carries no implication that the process had a goal, that Homo sapiens is its culmination, or that intelligence was what it was aiming at. Those would be separate claims, and nothing in this section supports them.',
        },
      },
      {
        id: 'what-we-do-not-know',
        kind: 'prose',
        text: {
          essential:
            'It is worth ending with the holes, since the chain above reads smoothly and the evidence does not. We do not know why bipedalism evolved. We do not know what drove brain expansion. We do not know when language appeared. We do not know why every other human species disappeared.',
          detailed:
            'Each of those is a genuine gap rather than a detail. What sits around them is unusually well established for events millions of years past: that humans are apes, that we share ancestry with chimpanzees, that bipedalism came long before large brains, that several human species usually coexisted, that our species originated in Africa and spread from there, that we interbred with the humans we met, and that culture and biology have been changing each other for a very long time. None of that was known two centuries ago. All of it was recovered from stone, bone, chemistry and DNA by people who mostly did not live to see the picture assembled.',
        },
      },
      {
        id: 'handover',
        kind: 'prose',
        text: {
          essential:
            'That is the scientific account: how a primate lineage became Homo sapiens. It is a description of a process, and it is the limit of what this lens can offer. It does not tell you what any of it means, or what a human being is for, or whether the answer would matter. Those are real questions and they are not answerable from fossils and genomes. They belong to the other lens.',
        },
      },
    ],
    furtherReading: [referenceId('anton-2014-evolution-of-homo')],
  },
];
