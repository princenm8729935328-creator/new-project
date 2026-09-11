/**
 * Human Evolution, Scientific Lens — Movement VIII: agriculture and a new world.
 *
 * The brief for this movement is explicit: agriculture was not simply progress.
 * The bioarchaeological record is unambiguous that individual health declined
 * while population grew, and the two facts are not in tension once fertility and
 * mortality are separated. That distinction is the spine of the movement.
 *
 * It also closes the loop opened in Movement V: farming is the clearest case of
 * humans building an environment that then selected them.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const HUMAN_AGRICULTURE_TOPICS: readonly Topic[] = [
  {
    id: topicId('why-farming-began'),
    slug: 'why-farming-began',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 55,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why farming began',
    subtitle: 'Independently, in at least eleven places, within a few thousand years.',
    summary: {
      essential:
        'Agriculture was invented separately in many parts of the world within a few thousand years of each other, after two hundred thousand years in which nobody did it. That clustering demands an explanation.',
      detailed:
        'The most likely component is climate: the end of the last glacial produced, for the first time in the history of our species, a long stable warm period in which cultivation could pay off.',
      technical:
        'Independent domestication centres include the Fertile Crescent, China, New Guinea, Mesoamerica, the Andes, eastern North America, and sub-Saharan Africa, with primary transitions between roughly 11,000 and 4,000 years ago. Holocene climatic stability and elevated CO₂ are commonly invoked as enabling conditions rather than as proximate causes.',
    },
    glossaryTerms: [glossaryTermId('domestication')],
    related: [topicId('what-domestication-does'), topicId('the-cost-of-farming')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'For roughly two hundred thousand years, no human being farmed. Then, beginning about eleven thousand years ago, people in the Fertile Crescent, in China, in New Guinea, in Mesoamerica, in the Andes, in eastern North America and in Africa all began cultivating plants — independently, without contact, within a few thousand years of each other.',
          detailed:
            'That pattern rules out the obvious explanation. If farming were simply a good idea waiting to be had, it should have appeared at random times across the previous two hundred millennia. Instead it appears almost everywhere at almost the same time, which points at a change in conditions rather than a change in people.',
        },
      },
      {
        id: 'origins-figure',
        kind: 'visualization',
        visualizationId: visualizationId('farming-origins'),
      },
      {
        id: 'independent-claim',
        kind: 'claim',
        statement: {
          essential:
            'Agriculture was invented independently in at least eleven regions within a few thousand years, after hundreds of thousands of years in which it was never invented.',
          detailed:
            'Archaeobotanical and genetic evidence establishes separate domestication of distinct crop packages in each centre, with primary transitions clustered between roughly 11,000 and 4,000 years ago.',
        },
        evidence: 'established',
        references: [referenceId('larson-2014-domestication-review')],
      },
      {
        id: 'the-climate',
        kind: 'prose',
        text: {
          essential:
            'The change was the climate. The last glacial period was not merely cold; it was violently unstable, with temperatures in some regions shifting by several degrees within decades. Then, about 11,700 years ago, it settled into the warm, stable interval we are still in.',
          detailed:
            'Cultivation is a bet on the future. You plant now and harvest months later, on the assumption that conditions will hold. Under glacial variability that bet is frequently lost, and a mobile foraging strategy that tracks resources as they move is safer. Holocene stability changed the odds. Higher atmospheric carbon dioxide, which increases plant productivity, may have helped as well.',
          technical:
            'This explains why farming became possible rather than why it happened. Climate is an enabling condition; the proximate triggers — population pressure, resource intensification, social competition, or simply the gradual accumulation of cultivation practices already in use — differ between regions and are debated in each.',
        },
      },
      {
        id: 'not-an-invention',
        kind: 'prose',
        text: {
          essential:
            'It is also misleading to picture a moment of invention. Foragers had been managing plants for a long time — burning to encourage regrowth, protecting useful stands, replanting. Domestication emerges from intensifying practices that already existed, over centuries.',
          detailed:
            'The archaeological sequences show exactly this gradualism: long periods of cultivating morphologically wild plants before domesticated forms appear, and long periods afterwards during which people continued hunting and gathering most of their food. In some regions the transition took two or three thousand years. Nobody in it would have experienced a revolution.',
        },
      },
      {
        id: 'gradual-claim',
        kind: 'claim',
        statement: {
          essential:
            'Domestication was a gradual process spanning centuries to millennia, not a discrete invention.',
          detailed:
            'Archaeobotanical sequences in the Fertile Crescent show cultivation of morphologically wild cereals for over a millennium before domesticated traits such as tough rachis become common, with wild resources remaining important throughout.',
        },
        evidence: 'established',
        references: [referenceId('zeder-2011-domestication')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'What happened to the plants and animals involved is itself an evolutionary story, and it happened to both parties.',
        },
      },
    ],
    furtherReading: [referenceId('zeder-2011-domestication')],
  },

  {
    id: topicId('what-domestication-does'),
    slug: 'what-domestication-does',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 56,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'What domestication does',
    subtitle: 'Selection by humans, mostly without anyone intending it.',
    summary: {
      essential:
        'Domesticated species are evolutionarily modified by living with people. Most of the modification was not deliberate breeding — it was the unintended consequence of harvesting and handling.',
      detailed:
        'Wild cereals shatter to scatter their seeds. A harvester using a sickle preferentially collects the rare mutants that do not shatter, and replants them. Nobody has to intend anything for that to become a domesticated crop.',
      technical:
        'Key domestication traits — non-shattering rachis, loss of seed dormancy, larger seeds, reduced defensive chemistry — follow predictably from harvest-and-sow cycles. In animals, tameness selection is associated with a correlated suite including reduced size, coat changes and shortened faces, often described as the domestication syndrome.',
    },
    glossaryTerms: [glossaryTermId('domestication'), glossaryTermId('natural-selection')],
    related: [topicId('why-farming-began'), topicId('new-selection-pressures')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A wild wheat plant, when its seeds ripen, falls apart. The stalk holding the seed head becomes brittle and shatters, scattering the grain onto the ground. That is how a wild grass reproduces, and it makes the plant nearly useless to harvest.',
          detailed:
            'Occasionally a mutant appears whose stalk stays intact. In the wild that plant is at a serious disadvantage — its seeds never disperse. Under a sickle it is the only plant whose seed you actually collect, because the shattering ones have dropped their grain before you arrive or scatter it as you cut.',
        },
      },
      {
        id: 'domestication-figure',
        kind: 'visualization',
        visualizationId: visualizationId('domestication-selection'),
      },
      {
        id: 'the-accident',
        kind: 'prose',
        text: {
          essential:
            'Now add one more step: some of what you harvest gets sown next season. You have now, without deciding anything, run a selective breeding programme. Every cycle increases the proportion of non-shattering plants, because those are the ones that reach your basket and therefore your seed store.',
          detailed:
            'Experimental and modelling work suggests this alone can fix the non-shattering trait within a few centuries, and the archaeobotanical record shows roughly that timescale. The same logic produced larger seeds, loss of the dormancy that staggers germination, and reduced toxins — each one a trait that helps the plant survive in the wild and helps the farmer in a field.',
        },
      },
      {
        id: 'unintentional-claim',
        kind: 'claim',
        statement: {
          essential:
            'The key domestication traits in cereals follow from harvesting and sowing without deliberate selection.',
          detailed:
            'Non-shattering rachis, reduced dormancy and increased seed size are all favoured by the harvest-and-sow cycle. Archaeobotanical sequences show these traits appearing over centuries, consistent with unconscious selection rather than deliberate breeding.',
        },
        evidence: 'established',
        references: [referenceId('zeder-2011-domestication')],
      },
      {
        id: 'animals',
        kind: 'prose',
        text: {
          essential:
            'Animals show something stranger. Across many domesticated species — dogs, pigs, cattle, horses, rabbits — a similar cluster of changes appears: smaller bodies, shorter faces, floppy ears, patchy coats, smaller brains, and a longer window in youth for forming social bonds.',
          detailed:
            'These traits have no obvious reason to travel together. The best-known experiment addressing it selected silver foxes for nothing but tolerance of humans, and within a few dozen generations the other traits appeared anyway. One proposed explanation involves a population of embryonic cells that contributes to several of the affected tissues, so selecting on one output alters the others. The experiment’s history and the syndrome’s coherence have both been criticised, and the mechanism is not settled.',
          technical:
            'The neural crest hypothesis is a plausible developmental account rather than a demonstrated one, and recent work questions whether the domestication syndrome is a consistent package across species or a set of loosely associated traits assembled in hindsight. The empirical core — that tameness selection produces correlated morphological change — is not in doubt.',
        },
      },
      {
        id: 'syndrome-claim',
        kind: 'claim',
        statement: {
          essential:
            'Selecting animals for tameness alone produces correlated changes in size, coat, skull shape and development.',
          detailed:
            'The pattern is observed across independently domesticated species and reproduced experimentally where behaviour was the only selection criterion. Proposed developmental mechanisms remain hypotheses, and the coherence of the trait cluster across species is debated.',
        },
        evidence: 'active-research',
        references: [referenceId('larson-2014-domestication-review')],
      },
      {
        id: 'mutual',
        kind: 'callout',
        tone: 'note',
        title: 'Who domesticated whom',
        text: {
          essential:
            'Domestication is a relationship, not something done to a species. Wheat now occupies a vast fraction of the Earth’s arable land and is tended, watered and defended by an enormous workforce. By the standards of evolutionary success, wheat did rather well out of the arrangement.',
          detailed:
            'The framing is a corrective rather than a joke. Both parties were changed by the relationship, and both became dependent on it: domesticated cereals cannot disperse their own seed, and the human populations that grew on them cannot be fed any other way. The human side of that change is the subject of the next topic, and it is not a happy one.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Farming supported far more people. It also made most of them measurably worse off, and the skeletons record it.',
        },
      },
    ],
    furtherReading: [referenceId('larson-2014-domestication-review')],
  },

  {
    id: topicId('the-cost-of-farming'),
    slug: 'the-cost-of-farming',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 57,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'The cost of farming',
    subtitle: 'More people, and worse lives for most of them.',
    summary: {
      essential:
        'Skeletons from the agricultural transition are shorter, more diseased and more malnourished than the foragers who preceded them. Population nonetheless rose sharply. Both facts are true and they are not in conflict.',
      detailed:
        'The resolution is that natural selection counts descendants, not wellbeing. Farming raised birth rates enough to outweigh higher mortality, and a strategy that produces more surviving children wins regardless of how pleasant it is.',
      technical:
        'Bioarchaeological indicators — stature reduction, enamel hypoplasia, porotic hyperostosis, dental caries, periosteal reaction — worsen across the transition in most regions studied. Palaeodemographic analysis of juvenile proportions indicates a sharp rise in fertility, the Neolithic demographic transition.',
    },
    glossaryTerms: [glossaryTermId('zoonosis'), glossaryTermId('fitness')],
    related: [topicId('what-domestication-does'), topicId('new-selection-pressures')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Compare skeletons from just before and just after the adoption of farming in the same region, and the pattern is consistent almost everywhere it has been examined. The farmers are shorter. Their teeth have more cavities. Their bones carry more markers of childhood malnutrition, anaemia and infection.',
          detailed:
            'The specific markers are readable. Horizontal grooves in tooth enamel record periods when growth stopped during childhood, usually from illness or hunger. Spongy, porous bone around the eye sockets and on the skull vault indicates chronic anaemia. Caries reflect a diet high in fermentable carbohydrate. All of these increase with the transition to cereal agriculture.',
        },
      },
      {
        id: 'health-figure',
        kind: 'visualization',
        visualizationId: visualizationId('farming-health'),
      },
      {
        id: 'health-claim',
        kind: 'claim',
        statement: {
          essential:
            'Skeletal indicators of health deteriorate across the transition to agriculture in most regions studied, including reduced stature and increased markers of malnutrition and infection.',
          detailed:
            'Bioarchaeological syntheses across multiple continents show declines in adult stature and increases in enamel hypoplasia, porotic hyperostosis, dental caries and periosteal lesions accompanying cereal-based agriculture.',
        },
        evidence: 'established',
        references: [
          referenceId('mummert-2011-stature'),
          referenceId('larsen-1995-bioarchaeology-agriculture'),
        ],
      },
      {
        id: 'the-paradox',
        kind: 'prose',
        text: {
          essential:
            'And yet population grew, fast. This looks like a contradiction only if you assume evolution favours health. It favours descendants.',
          detailed:
            'A settled life allows births closer together. A mobile forager carrying an infant cannot easily manage a second small child, which spaces births roughly four years apart. A settled farmer can, and cereal gruel allows earlier weaning. Shorter birth intervals mean more children per woman, and enough more to outweigh higher infant mortality. The net result is rapid growth in a population whose individual members are, by most measures, worse off.',
        },
      },
      {
        id: 'demographic-claim',
        kind: 'claim',
        statement: {
          essential:
            'Birth rates rose sharply with the adoption of agriculture, outweighing increased mortality and producing rapid population growth.',
          detailed:
            'The proportion of juvenile skeletons in cemetery samples rises markedly across the transition in many regions — the Neolithic demographic transition — indicating increased fertility rather than improved survival.',
        },
        evidence: 'established',
        references: [referenceId('bocquet-appel-2011-demographic-transition')],
      },
      {
        id: 'disease',
        kind: 'prose',
        text: {
          essential:
            'Crowding and livestock brought a third change: diseases that had never been able to persist in human populations before. Measles, smallpox, influenza, tuberculosis — most of the great epidemic diseases arrived from domesticated animals, and all of them require dense populations to survive.',
          detailed:
            'A disease that confers lasting immunity and kills or cures quickly burns through a small band and vanishes, because it runs out of susceptible people. It can only persist where there is a continuous supply of new hosts — which means a large, dense population with a high birth rate. Farming created exactly that, and then kept it supplied.',
        },
      },
      {
        id: 'zoonosis-claim',
        kind: 'claim',
        statement: {
          essential:
            'Most major human epidemic diseases originated in domesticated animals and require dense host populations to persist.',
          detailed:
            'Phylogenetic reconstruction traces measles, smallpox, influenza and tuberculosis among others to animal reservoirs, with establishment in humans following domestication and settlement. Critical community size requirements explain their absence from pre-agricultural populations.',
        },
        evidence: 'established',
        references: [referenceId('wolfe-2007-zoonoses')],
      },
      {
        id: 'not-a-mistake',
        kind: 'callout',
        tone: 'caution',
        title: 'This does not make agriculture a mistake',
        text: {
          essential:
            'Once a region is farming, the population it supports cannot go back — there are too many people for the land to feed by foraging. The transition is a ratchet, and it was rarely a choice made by anyone with the information to evaluate it.',
          detailed:
            'It is also worth resisting the romantic inversion. Forager life was not gentle: infant mortality was high, violence is documented, and a bad year had no buffer. The honest statement is narrower and more interesting — that the transition traded individual health for population growth, that natural selection does not weigh those equally, and that "progress" is not a category evolution recognises at all.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'The new environment did not only make people ill. It also selected them — and the marks are still in our genomes.',
        },
      },
    ],
    furtherReading: [referenceId('larsen-2019-catalhoyuk')],
  },

  {
    id: topicId('new-selection-pressures'),
    slug: 'new-selection-pressures',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 58,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'New selection pressures',
    subtitle: 'Watching allele frequencies change, generation by generation, in ancient bone.',
    summary: {
      essential:
        'Ancient DNA from hundreds of individuals across thousands of years lets us watch specific gene variants become more or less common. Selection in the last ten thousand years is not inferred — it is observed.',
      detailed:
        'The strongest signals are responses to conditions people created: new diets, new diseases, new latitudes. Farming did not end human evolution; it redirected it.',
      technical:
        'Time-series analysis of 230 ancient Eurasian genomes identified genome-wide significant selection at loci including LCT, SLC22A4, the fatty-acid desaturase cluster, vitamin D and pigmentation genes, and immune loci, with allele frequency trajectories resolved directly rather than inferred from present-day haplotype structure.',
    },
    glossaryTerms: [
      glossaryTermId('selective-sweep'),
      glossaryTermId('lactase-persistence'),
      glossaryTermId('ancient-dna'),
    ],
    related: [
      topicId('gene-culture-coevolution'),
      topicId('the-cost-of-farming'),
      topicId('selection-we-can-measure'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Until recently, detecting recent natural selection meant looking at living people and reasoning backwards from patterns in their DNA. Ancient DNA changed the method entirely: with enough sequenced individuals spread through time, you can simply measure how common a variant was at each date and watch the line move.',
          detailed:
            'A study of 230 ancient Eurasians spanning eight thousand years did exactly this. It is a different kind of evidence from a haplotype-based inference — less clever and far more direct. Where earlier methods argued that a variant must have been favoured, this shows the frequency rising.',
        },
      },
      {
        id: 'selection-figure',
        kind: 'visualization',
        visualizationId: visualizationId('ancient-selection'),
      },
      {
        id: 'timeseries-claim',
        kind: 'claim',
        statement: {
          essential:
            'Selection on specific human gene variants over the last eight thousand years has been observed directly as changing frequencies in ancient genomes.',
          detailed:
            'Time-series analysis of 230 ancient Eurasian genomes identified genome-wide significant selection at loci associated with lactase persistence, fatty-acid metabolism, vitamin D, pigmentation, immunity and height.',
        },
        evidence: 'established',
        references: [referenceId('mathieson-2015-selection-ancient')],
      },
      {
        id: 'what-changed',
        kind: 'prose',
        text: {
          essential:
            'The list of what was selected reads like a description of the new way of life. Digesting milk. Metabolising the fatty acids in a plant-heavy diet. Making vitamin D under weak northern sun. Resisting the diseases that crowding had made permanent.',
          detailed:
            'Starch digestion belongs here too. The gene for salivary amylase varies in copy number between people, and populations with historically starch-rich diets carry more copies on average than populations with low-starch diets. More copies mean more enzyme and faster breakdown of starch in the mouth — a plausible response to a cereal-based diet, though the direction of causation is harder to pin down than in the lactase case.',
        },
      },
      {
        id: 'amylase-claim',
        kind: 'claim',
        statement: {
          essential:
            'Salivary amylase gene copy number is higher in populations with historically starch-rich diets.',
          detailed:
            'Copy number varies from about two to more than fifteen, correlating with dietary starch across populations and with salivary amylase protein levels within individuals. The association is robust; the inference to selection by diet is supported but less directly demonstrated than for lactase.',
        },
        evidence: 'inference',
        references: [referenceId('perry-2007-amylase')],
      },
      {
        id: 'the-pattern',
        kind: 'prose',
        text: {
          essential:
            'Step back and the pattern is consistent. Almost every strong recent selection signal in the human genome is a response to something people did: farming, herding, settling in dense villages, moving to high latitudes.',
          detailed:
            'This is the loop from Movement V running at full speed. Culture builds an environment; the environment selects bodies; the bodies make the culture more viable; the culture spreads further. Human evolution over the last ten thousand years is not a story of biology going quiet while culture takes over. It is the period in which the two became most tightly coupled.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Which raises the question everyone asks about the present. If selection was operating that recently, is it operating now?',
        },
      },
    ],
    furtherReading: [referenceId('mathieson-2015-selection-ancient')],
  },
];
