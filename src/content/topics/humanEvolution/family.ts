/**
 * Human Evolution, Scientific Lens — Movement VI: the human family.
 *
 * Two framings are actively resisted throughout this movement. The first is
 * Neanderthals as failed primitives; the second is Homo sapiens as an
 * inevitable superior replacement. Both are contradicted by the evidence — the
 * demographic analyses, the introgression data, and the long overlap — and both
 * are so deeply embedded in popular writing that correcting them requires doing
 * so explicitly rather than by implication.
 *
 * The ancient DNA topic sits in the middle rather than at the start because the
 * method is easier to appreciate once the reader knows what it was used to find.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const HUMAN_FAMILY_TOPICS: readonly Topic[] = [
  {
    id: topicId('where-homo-sapiens-came-from'),
    slug: 'where-homo-sapiens-came-from',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 43,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Where Homo sapiens came from',
    subtitle: 'Africa, across the whole continent, and not from a single place.',
    summary: {
      essential:
        'Our species originated in Africa. The older picture of a single small cradle population has been replaced by one of interconnected populations spread across the continent, exchanging genes and traits.',
      detailed:
        'Fossils with modern features appear at different times in different regions, and no single site has everything. The traits we think of as modern assembled gradually and not in one place.',
      technical:
        'The pan-African model treats H. sapiens origins as a structured metapopulation with intermittent gene flow between subdivided groups. It accounts for the mosaic distribution of derived features at Jebel Irhoud, Florisbad, Omo Kibish and Herto, and for the deep coalescence times in African genomes.',
    },
    glossaryTerms: [
      glossaryTermId('population-structure'),
      glossaryTermId('gene-flow'),
      glossaryTermId('mosaic-evolution'),
    ],
    related: [topicId('out-of-africa-again'), topicId('how-complete-is-the-family-tree')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'For decades the story had a tidy shape: a single population somewhere in East Africa, around 200,000 years ago, became modern, and everyone alive descends from it. The evidence now points somewhere messier and more interesting.',
          detailed:
            'The first crack was a redating. Fossils from Jebel Irhoud in Morocco — found in the 1960s and long assumed to be around 40,000 years old — were redated in 2017 to about 315,000 years. That is more than a hundred thousand years older than anything previously called Homo sapiens, and it is in North Africa, five thousand kilometres from the supposed cradle.',
        },
      },
      {
        id: 'origins-figure',
        kind: 'visualization',
        visualizationId: visualizationId('sapiens-origins'),
      },
      {
        id: 'irhoud-claim',
        kind: 'claim',
        statement: {
          essential:
            'Fossils from Jebel Irhoud, Morocco, dated to about 315,000 years ago, show a modern facial form with a still-archaic braincase.',
          detailed:
            'Thermoluminescence dating of heated flints from the same layers gives 315 ± 34 ka. The specimens combine a face within the modern range with an elongated endocranial shape outside it, demonstrating that modern traits did not appear as a package.',
        },
        evidence: 'established',
        references: [
          referenceId('hublin-2017-jebel-irhoud'),
          referenceId('richter-2017-irhoud-age'),
        ],
      },
      {
        id: 'mosaic',
        kind: 'prose',
        text: {
          essential:
            'The Irhoud fossils have modern faces and archaic braincases. Other early specimens have the reverse. Assembled across the continent, the modern traits appear in different combinations at different places — never all at once, never at one site.',
          detailed:
            'That pattern is what a structured population looks like. If groups across Africa were partly separated but exchanged people periodically, then a trait arising in one region would spread gradually to others, and different combinations would exist simultaneously in different places. There would be no single origin point, because the origin would be distributed.',
          technical:
            'The model is supported independently by genomic evidence: deep divergences between some African lineages, and coalescence patterns implying ancestral structure. It also accommodates the possibility of gene flow from archaic African populations for which no fossils have been identified — a signal several analyses report but which remains difficult to characterise.',
        },
      },
      {
        id: 'panafrican-claim',
        kind: 'claim',
        statement: {
          essential:
            'Homo sapiens appears to have originated from interconnected populations spread across Africa rather than from a single localised ancestral group.',
          detailed:
            'The fossil record shows modern features appearing in mosaic combinations at widely separated sites over a period of more than 200,000 years, and genomic data indicate substantial ancestral population structure within Africa.',
        },
        evidence: 'inference',
        references: [referenceId('scerri-2018-african-multiregional')],
      },
      {
        id: 'omo',
        kind: 'prose',
        text: {
          essential:
            'East Africa remains central to the record — the Omo Kibish remains in Ethiopia, at around 195,000 years, and the Herto fossils at about 160,000, are among the clearest early Homo sapiens. The change is not that East Africa dropped out; it is that it is no longer the only place.',
          detailed:
            'It is worth remembering how much of this reflects where people dug. Eastern Africa has the geology that produces datable fossil-bearing deposits and has had a century of concentrated excavation. Much of the rest of the continent has neither. The pan-African model may look increasingly convincing partly because fieldwork has finally gone looking elsewhere.',
        },
      },
      {
        id: 'no-first-human',
        kind: 'callout',
        tone: 'misconception',
        title: 'There was no first Homo sapiens',
        text: {
          essential:
            'Asking who the first modern human was is like asking which grain of sand made the heap. Populations change gradually; the boundary is a label applied afterwards.',
          detailed:
            'Every individual in this story had parents of the same species as itself. The species name marks a region of a continuum that we find convenient to separate, and the fossils that fall near the boundary are genuinely ambiguous — not because we lack evidence about them, but because the category has fuzzy edges by construction.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Whoever they were, they were not alone. Eurasia already had people in it, and had done for hundreds of thousands of years.',
        },
      },
    ],
    furtherReading: [referenceId('mcdougall-2005-omo')],
  },

  {
    id: topicId('neanderthals'),
    slug: 'neanderthals',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 44,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Neanderthals',
    subtitle: 'Cold-adapted, large-brained, technologically capable, and not our ancestors.',
    summary: {
      essential:
        'Neanderthals were a human population that occupied Europe and western Asia for over 300,000 years. They had brains as large as ours, made sophisticated tools, used pigment and fire, and cared for injured individuals.',
      detailed:
        'The caricature of the shambling brute is a nineteenth-century error built on a single arthritic skeleton, and it has been thoroughly dismantled — but the correction should not swing into treating them as identical to us either.',
      technical:
        'H. neanderthalensis is characterised by midfacial prognathism, occipital bunning, large nasal aperture, barrel-shaped thorax and robust postcrania consistent with cold adaptation and high activity levels. Endocranial volume averages slightly above modern human means with different shape and postnatal trajectory.',
    },
    glossaryTerms: [glossaryTermId('hominin'), glossaryTermId('ancient-dna')],
    related: [
      topicId('denisovans'),
      topicId('interbreeding'),
      topicId('size-is-not-the-whole-story'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The image most people carry of a Neanderthal — stooped, shuffling, dim — can be traced to one reconstruction. In 1911 the French palaeontologist Marcellin Boule described a skeleton from La Chapelle-aux-Saints as having a curved spine, bent knees and a divergent big toe. The individual had severe arthritis, and Boule’s reconstruction exaggerated the rest.',
          detailed:
            'The correction took most of a century and is now complete. Neanderthals stood fully upright, walked as we do, and were considerably stronger. They were built for cold: short limbs and a broad, deep chest reduce surface area relative to volume, which conserves heat, and their nasal architecture warmed and humidified incoming air.',
        },
      },
      {
        id: 'neanderthal-figure',
        kind: 'visualization',
        visualizationId: visualizationId('neanderthal-profile'),
      },
      {
        id: 'what-they-did',
        kind: 'prose',
        text: {
          essential:
            'What survives of their behaviour is substantial. They made tools using a technique that requires shaping a core so that a single final blow detaches a predetermined flake — planning several steps ahead in stone. They controlled fire, made compound adhesives, hunted large and dangerous animals, and used pigment.',
          detailed:
            'Some of the evidence is more affecting than any artefact. Several Neanderthal skeletons show severe injuries — a withered arm, a healed skull fracture, blindness in one eye, extensive tooth loss — that had healed long before death. An individual who cannot hunt and cannot chew does not survive alone in glacial Europe. Somebody fed them for years.',
        },
      },
      {
        id: 'capability-claim',
        kind: 'claim',
        statement: {
          essential:
            'Neanderthals made compound adhesives, used pigment, controlled fire and cared for severely injured individuals over long periods.',
          detailed:
            'Birch-bark tar production requires controlled anaerobic heating; pigment use is documented at multiple sites; and several individuals show long-healed disabling injuries incompatible with independent survival in their environments.',
        },
        evidence: 'established',
        references: [
          referenceId('prufer-2014-altai'),
          referenceId('wadley-2009-compound-adhesives'),
        ],
      },
      {
        id: 'the-genome',
        kind: 'prose',
        text: {
          essential:
            'Since 2010 we have had their genome, and it answers questions bones cannot. Neanderthals and modern humans separated from a common ancestor somewhere between 550,000 and 765,000 years ago. Their populations were small and fragmented, with detectable inbreeding.',
          detailed:
            'The high-coverage Altai genome revealed that the individual’s parents were closely related — half-siblings or an equivalent relationship — and that such matings were common in the population. Neanderthal effective population size was low throughout their history. This matters for what happened later: a species living in small, scattered, partly inbred groups is demographically fragile in a way that has nothing to do with capability.',
        },
      },
      {
        id: 'population-claim',
        kind: 'claim',
        statement: {
          essential:
            'Neanderthal populations were small and fragmented, with substantial inbreeding detectable in sequenced genomes.',
          detailed:
            'The Altai individual shows runs of homozygosity indicating parents related at the level of half-siblings, and genome-wide estimates place Neanderthal effective population size well below contemporaneous modern human values.',
        },
        evidence: 'established',
        references: [referenceId('prufer-2014-altai')],
      },
      {
        id: 'not-identical',
        kind: 'callout',
        tone: 'caution',
        title: 'Correcting the caricature without erasing the differences',
        text: {
          essential:
            'The rehabilitation of Neanderthals has sometimes overshot into treating them as modern humans in different clothes. They were a distinct population with distinct anatomy, a different developmental trajectory, and an archaeological record that differs from that of contemporaneous Homo sapiens in some respects.',
          detailed:
            'Both errors are worth avoiding. Neanderthals were not inferior; they were also not us. The interesting question is what the differences actually were, and the honest answer is that we know some of the anatomy, a little of the development, and very little about the cognition.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'And they were not the only other humans in Eurasia. The next population was found in a way that had never happened before.',
        },
      },
    ],
    furtherReading: [referenceId('higham-2014-neanderthal-disappearance')],
  },

  {
    id: topicId('denisovans'),
    slug: 'denisovans',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 45,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Denisovans',
    subtitle: 'A human population identified from a finger bone, before anyone had seen its face.',
    summary: {
      essential:
        'In 2010 a fragment of finger bone from a Siberian cave yielded a genome unlike any known human population. Denisovans were identified genetically first, and are still known from very few fossils.',
      detailed:
        'This inverted the usual order of discovery. Normally a species is described from anatomy and genetics comes later; here the population was characterised in detail while almost nothing was known about what it looked like.',
      technical:
        'The Denisova 3 phalanx yielded a high-coverage genome diverging from Neanderthals around 390–440 ka. Denisovan ancestry is highest in Papuan and Aboriginal Australian populations at roughly 3–5%. The Xiahe mandible, identified by ancient proteins, extends their range to the Tibetan Plateau.',
    },
    glossaryTerms: [glossaryTermId('ancient-dna'), glossaryTermId('introgression')],
    related: [topicId('neanderthals'), topicId('interbreeding'), topicId('reading-ancient-dna')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'The fossil was a fragment of a child’s finger bone from Denisova Cave in the Altai Mountains, about the size of a grain of rice. Anatomically it says almost nothing — a finger bone from a human of some kind. Sequenced, it turned out to belong to a population nobody knew existed.',
          detailed:
            'The genome was not Neanderthal and not modern human. It represented a lineage that had separated from Neanderthals some 400,000 years earlier and had lived across Asia without leaving a fossil record anyone had recognised. They were named after the cave, because there was no anatomical description to name them from — and formally they still have no species name.',
        },
      },
      {
        id: 'denisovan-figure',
        kind: 'visualization',
        visualizationId: visualizationId('denisovan-discovery'),
      },
      {
        id: 'discovery-claim',
        kind: 'claim',
        statement: {
          essential:
            'Denisovans were identified as a distinct human population entirely from DNA, before any diagnostic fossil anatomy was available.',
          detailed:
            'Sequencing of a single phalanx from Denisova Cave produced a genome diverging from Neanderthals several hundred thousand years ago. The identification rested wholly on genetics; the type material remains fragmentary.',
        },
        evidence: 'established',
        references: [referenceId('reich-2010-denisova'), referenceId('meyer-2012-denisovan')],
      },
      {
        id: 'where-they-were',
        kind: 'prose',
        text: {
          essential:
            'Their fossils are almost absent and their genetic footprint is enormous. Denisovan DNA is present in living people across Southeast Asia and Oceania, reaching around 3–5% in Papuan and Aboriginal Australian populations — far from Siberia, and implying they were spread across much of Asia.',
          detailed:
            'A jawbone from a cave on the Tibetan Plateau, at 3,280 metres and about 160,000 years old, was identified as Denisovan by analysing ancient proteins rather than DNA — proteins survive longer and in worse conditions. Denisovan-derived sequence has since been reported in cave sediments elsewhere. A population known from a handful of bone fragments turns out to have occupied a continent.',
        },
      },
      {
        id: 'xiahe-claim',
        kind: 'claim',
        statement: {
          essential:
            'A mandible from the Tibetan Plateau, identified as Denisovan by ancient protein analysis, shows they occupied high-altitude Asia by about 160,000 years ago.',
          detailed:
            'Ancient protein sequencing of the Xiahe mandible places it with Denisovans. Uranium-series dating of the adhering carbonate crust gives a minimum age of about 160 ka, at 3,280 m elevation.',
        },
        evidence: 'established',
        references: [referenceId('chen-2019-xiahe')],
      },
      {
        id: 'the-hybrid',
        kind: 'prose',
        text: {
          essential:
            'Denisova Cave then produced something almost unreasonable. A bone fragment identified from the site yielded a genome that was half Neanderthal and half Denisovan — not a distant signal of past mixing, but a first-generation individual with a Neanderthal mother and a Denisovan father.',
          detailed:
            'Finding a first-generation hybrid among the handful of archaic individuals sequenced has an implication that goes beyond the specimen. If such individuals were rare, the chance of catching one in so small a sample would be negligible. That they were found suggests that where these populations met, they mixed regularly.',
        },
      },
      {
        id: 'hybrid-claim',
        kind: 'claim',
        statement: {
          essential:
            'A bone fragment from Denisova Cave belonged to an individual with a Neanderthal mother and a Denisovan father.',
          detailed:
            'Genome sequencing of Denisova 11 shows approximately equal Neanderthal and Denisovan ancestry distributed across the genome in the pattern expected for a first-generation offspring rather than for ancient admixture.',
        },
        evidence: 'established',
        references: [referenceId('slon-2018-denisova-11')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Which brings us to the finding that reorganised the whole picture: these populations did not simply coexist. They interbred, and the evidence is in almost everyone reading this.',
        },
      },
    ],
    furtherReading: [referenceId('meyer-2012-denisovan')],
  },

  {
    id: topicId('interbreeding'),
    slug: 'interbreeding',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 46,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Interbreeding',
    subtitle: 'Most living people carry DNA from other kinds of human.',
    summary: {
      essential:
        'People with ancestry outside sub-Saharan Africa carry roughly 1–2% Neanderthal DNA. Some populations also carry Denisovan DNA. These are not trace anomalies — they are the record of populations that met and mixed.',
      detailed:
        'Some introgressed variants were useful and rose in frequency; others were harmful and have been removed by selection. The pattern across the genome is informative about both.',
      technical:
        'Neanderthal ancestry is approximately 1–2% in non-African genomes and 3–6% Denisovan in Oceanian populations. Introgressed sequence is depleted on the X chromosome and near genes expressed in testes, consistent with hybrid incompatibility, and shows deserts spanning tens of megabases.',
    },
    glossaryTerms: [
      glossaryTermId('introgression'),
      glossaryTermId('admixture'),
      glossaryTermId('gene-flow'),
    ],
    related: [topicId('neanderthals'), topicId('denisovans'), topicId('local-adaptations')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'When the first Neanderthal genome was published in 2010, the headline result was not about Neanderthals. It was that people living today, outside sub-Saharan Africa, carry pieces of Neanderthal DNA in their own genomes.',
          detailed:
            'The finding had been actively expected not to happen. The prevailing model held that modern humans replaced archaic populations without mixing, and earlier mitochondrial DNA studies had found no Neanderthal signal — which is explicable now, since mitochondrial DNA passes only down the maternal line and represents a single locus among millions.',
        },
      },
      {
        id: 'introgression-figure',
        kind: 'visualization',
        visualizationId: visualizationId('introgression-map'),
      },
      {
        id: 'admixture-claim',
        kind: 'claim',
        statement: {
          essential:
            'People with ancestry outside sub-Saharan Africa carry approximately 1–2% Neanderthal DNA, and Oceanian populations additionally carry several percent Denisovan DNA.',
          detailed:
            'The signal is detected as an excess of allele sharing between non-African genomes and archaic genomes relative to African genomes, and is confirmed by direct identification of introgressed haplotype blocks.',
        },
        evidence: 'established',
        references: [
          referenceId('green-2010-neandertal-genome'),
          referenceId('sankararaman-2014-neandertal-ancestry'),
        ],
      },
      {
        id: 'dating-the-event',
        kind: 'prose',
        text: {
          essential:
            'The timing can be extracted from the DNA itself. When a chromosome is inherited from a mixed ancestry, it gets shuffled a little each generation, so introgressed segments get shorter over time. Measure their lengths and you can estimate how long ago the mixing happened.',
          detailed:
            'A 45,000-year-old individual from Ust’-Ishim in Siberia was decisive, because his Neanderthal segments were noticeably longer than those in living people — he was closer to the event. The estimate places the main admixture between about 50,000 and 60,000 years ago, shortly after modern humans expanded into Eurasia. That is a date derived from the physical structure of chromosomes, and it is independent of any fossil.',
        },
      },
      {
        id: 'ustishim-claim',
        kind: 'claim',
        statement: {
          essential:
            'Neanderthal admixture into the ancestors of non-Africans occurred approximately 50,000–60,000 years ago.',
          detailed:
            'Introgressed haplotype lengths in the 45,000-year-old Ust’-Ishim genome are substantially longer than in present-day people, dating the admixture to roughly 7,000–13,000 years before that individual lived.',
        },
        evidence: 'established',
        references: [referenceId('fu-2014-ust-ishim')],
      },
      {
        id: 'what-was-kept',
        kind: 'prose',
        text: {
          essential:
            'Not all of the inherited DNA survived equally. Some regions of modern genomes contain no archaic sequence at all, across millions of bases — and the depletion is strongest on the X chromosome and near genes active in the testes.',
          detailed:
            'That pattern is the signature of hybrid incompatibility, and it is seen in other species where related populations mix: the genetic differences that accumulate during separation often interact badly, and the effects concentrate on the X chromosome and on male fertility. Neanderthals and modern humans had been separated for over half a million years, which is enough for that kind of incompatibility to build up. Male hybrids may have had reduced fertility.',
        },
      },
      {
        id: 'deserts-claim',
        kind: 'claim',
        statement: {
          essential:
            'Archaic ancestry is depleted on the X chromosome and near genes expressed in the testes, consistent with reduced fertility in male hybrids.',
          detailed:
            'Genome-wide mapping of Neanderthal ancestry shows large deserts and significant depletion in these regions, matching the pattern predicted by hybrid incompatibility models and observed in other hybridising taxa.',
        },
        evidence: 'inference',
        references: [
          referenceId('sankararaman-2014-neandertal-ancestry'),
          referenceId('vernot-akey-2014-resurrecting'),
        ],
      },
      {
        id: 'species-question',
        kind: 'callout',
        tone: 'note',
        title: 'Were they separate species?',
        text: {
          essential:
            'If species are defined by inability to produce fertile offspring, then interbreeding makes the label awkward. In practice biologists apply the species concept loosely to closely related populations, and many mammal species hybridise where their ranges meet.',
          detailed:
            'Brown bears and polar bears interbreed and are called separate species. So do many birds, and several primates. The species concept works well for distant relatives and blurs for close ones, and hominins are close relatives. Whether Neanderthals were a separate species or a subspecies is a question about how we use a word, not about what happened — and what happened is reasonably clear.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Some of what we inherited turned out to be useful — including, in one striking case, the ability to live somewhere very high up.',
        },
      },
    ],
    furtherReading: [referenceId('vernot-akey-2014-resurrecting')],
  },

  {
    id: topicId('reading-ancient-dna'),
    slug: 'reading-ancient-dna',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 47,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Reading ancient DNA',
    subtitle: 'How a field that seemed impossible became routine — and where it still cannot go.',
    summary: {
      essential:
        'DNA breaks down after death into short, chemically damaged fragments, most of which are not from the organism you want. Extracting a genome from that requires distinguishing genuine ancient DNA from contamination — and the damage itself is what makes it possible.',
      detailed:
        'Ancient DNA has transformed human evolution in fifteen years. It also has hard limits: it does not survive well in warm environments, which excludes most of Africa and most of the record.',
      technical:
        'Post-mortem DNA fragments to ~50–100 bp with characteristic cytosine deamination at fragment termini. That deamination pattern authenticates sequences against modern contamination. Survival is temperature-dependent; outside permafrost, useful recovery beyond roughly 100–200 ka is rare, with proteins extending the range further.',
    },
    glossaryTerms: [glossaryTermId('ancient-dna'), glossaryTermId('molecular-clock')],
    related: [
      topicId('denisovans'),
      topicId('interbreeding'),
      topicId('how-complete-is-the-family-tree'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'When an organism dies, the machinery that repairs its DNA stops. Water attacks the molecule, breaking it into ever shorter pieces; chemical changes accumulate; and bacteria move in with genomes of their own. After a few tens of thousands of years, what remains in a bone is a soup of fragments a few dozen letters long, of which only a tiny fraction is the organism you care about.',
          detailed:
            'In a typical Neanderthal bone, well under 5% of the DNA present is Neanderthal. The rest is soil bacteria, fungi, and — the dangerous part — modern human DNA from everyone who has handled the specimen since it came out of the ground. Modern human DNA is intact, abundant, and almost identical to what you are looking for.',
        },
      },
      {
        id: 'adna-figure',
        kind: 'visualization',
        visualizationId: visualizationId('ancient-dna-damage'),
      },
      {
        id: 'damage-as-signature',
        kind: 'prose',
        text: {
          essential:
            'The solution turned out to be the damage itself. Ancient DNA degrades in a specific, predictable way: at the broken ends of each fragment, one particular chemical change accumulates over time, and it reads as a substitution of one letter for another.',
          detailed:
            'Modern contaminating DNA has no such pattern, because it has not had time to accumulate one. So a genuine ancient sequence carries a chemical signature of its own age at its ends. The very process destroying the molecule is what certifies it. Combined with clean-room protocols, dedicated facilities and treatments that remove damaged positions before sequencing, this turned ancient DNA from a field plagued by irreproducible results into a rigorous one.',
        },
      },
      {
        id: 'damage-claim',
        kind: 'claim',
        statement: {
          essential:
            'Characteristic chemical damage at fragment ends distinguishes genuine ancient DNA from modern contamination.',
          detailed:
            'Cytosine deamination to uracil accumulates preferentially at the single-stranded overhangs of degraded fragments, producing an excess of specific substitutions at fragment termini that increases with age and is absent from modern DNA.',
        },
        evidence: 'established',
        references: [referenceId('dabney-2013-adna-methods')],
      },
      {
        id: 'sediment',
        kind: 'prose',
        text: {
          essential:
            'The method has since gone somewhere that seemed absurd: DNA can be recovered from cave sediment with no bones present at all. Cells shed by an organism end up in the ground, and their DNA can bind to mineral particles and persist.',
          detailed:
            'This is a substantial change in what the record consists of. A cave with no hominin fossils can now be tested for whether hominins were present, which population they belonged to, and roughly when. It has been used to track Neanderthal and Denisovan occupation through layers of sites where no bones were ever found.',
        },
      },
      {
        id: 'sediment-claim',
        kind: 'claim',
        statement: {
          essential:
            'Hominin DNA can be recovered from cave sediments in the absence of skeletal remains, and used to identify which populations occupied a site.',
          detailed:
            'Nuclear and mitochondrial sequences recovered from sediment samples have distinguished Neanderthal populations through stratigraphic sequences at multiple sites, with authentication by the same damage criteria used for bone.',
        },
        evidence: 'established',
        references: [referenceId('vernot-2021-sediment-dna')],
      },
      {
        id: 'the-limits',
        kind: 'callout',
        tone: 'caution',
        title: 'Where ancient DNA cannot go',
        text: {
          essential:
            'DNA survival depends heavily on temperature. The oldest human genomes come from cold caves and permafrost. In warm regions the molecule degrades far faster, and most African and tropical Asian sites yield nothing.',
          detailed:
            'This produces a bias that runs opposite to the fossil record’s. Fossils are abundant in East Africa and scarce in northern Europe; ancient DNA is abundant in northern Europe and scarce in Africa. The result is that the best-genetically-known hominins are Eurasian archaics, while the continent where our species originated is the hardest to sample genetically. Ancient proteins, which survive longer, are extending the range — but they carry far less information than DNA.',
        },
        references: [referenceId('orlando-2021-ancient-dna-primer')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'These are the methods behind the next part of the story: how our species spread across the planet, and how fast.',
        },
      },
    ],
    furtherReading: [referenceId('orlando-2021-ancient-dna-primer')],
  },

  {
    id: topicId('out-of-africa-again'),
    slug: 'out-of-africa-again',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 48,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Out of Africa, again',
    subtitle: 'Several dispersals, one of which left descendants everywhere.',
    summary: {
      essential:
        'Homo sapiens left Africa more than once. Earlier dispersals reached the Levant and beyond and left little or no genetic trace; the expansion that populated the world began around 50,000–60,000 years ago.',
      detailed:
        'The genetic evidence and the fossil evidence initially disagreed about this, and the resolution — earlier dispersals that failed to persist — is a good example of two records answering different questions.',
      technical:
        'Fossils at Misliya (~180 ka) and Skhul/Qafzeh (~120–90 ka) document early presence outside Africa. Genomic data from living non-Africans coalesce to a single major dispersal at roughly 50–60 ka, consistent with earlier dispersals contributing negligibly to present-day ancestry.',
    },
    glossaryTerms: [
      glossaryTermId('founder-effect'),
      glossaryTermId('gene-flow'),
      glossaryTermId('population-structure'),
    ],
    related: [
      topicId('where-homo-sapiens-came-from'),
      topicId('peopling-the-world'),
      topicId('interbreeding'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'For years two kinds of evidence seemed to contradict each other. Fossils showed Homo sapiens in the Levant around 120,000 years ago, and later at 180,000. Genetics said everyone outside Africa descends from a dispersal about 50,000 to 60,000 years ago. Both could not be the whole story.',
          detailed:
            'The resolution is that they answer different questions. Fossils record who was present. Genetics of living people records who left descendants who are still here. A population can be present, live for tens of thousands of years, and contribute nothing measurable to anyone alive — because it died out, or was absorbed, or its descendants did not survive.',
        },
      },
      {
        id: 'dispersal-figure',
        kind: 'visualization',
        visualizationId: visualizationId('sapiens-dispersal'),
      },
      {
        id: 'two-records',
        kind: 'claim',
        statement: {
          essential:
            'Homo sapiens was present outside Africa well before the dispersal that gave rise to all present-day non-African populations.',
          detailed:
            'Fossil evidence documents presence in the Levant from at least 180,000 years ago, while genomic data from living people indicate that essentially all non-African ancestry derives from an expansion around 50,000–60,000 years ago. Earlier dispersals contributed little or nothing to present-day genomes.',
        },
        evidence: 'established',
        references: [
          referenceId('nielsen-2017-human-dispersals'),
          referenceId('mallick-2016-simons'),
        ],
      },
      {
        id: 'the-bottleneck',
        kind: 'prose',
        text: {
          essential:
            'The successful expansion left a permanent mark on human genetics. The group that left was small, and a small founding group carries only a fraction of its parent population’s variation. That reduction has never been recovered.',
          detailed:
            'The effect compounds with distance. Each time a subgroup moved on and founded a new population, it carried a sample of what the previous one had. Repeated across a continent, this produces a smooth decline in genetic diversity with distance from Africa — which is exactly what is observed, and it is one of the strongest pieces of evidence for the African origin of our species.',
        },
      },
      {
        id: 'serial-founder-claim',
        kind: 'claim',
        statement: {
          essential:
            'Human genetic diversity declines smoothly with distance from Africa, consistent with repeated founder effects during expansion.',
          detailed:
            'Genetic distance correlates strongly with geographic distance from eastern Africa along plausible land routes across worldwide populations, a pattern predicted by serial founder models and not by alternative origin scenarios.',
        },
        evidence: 'established',
        references: [referenceId('ramachandran-2005-serial-founder')],
      },
      {
        id: 'africa-stays-diverse',
        kind: 'callout',
        tone: 'misconception',
        title: 'Most human genetic diversity is in Africa',
        text: {
          essential:
            'Because only a small group left, African populations retain more genetic variation than all non-African populations combined. Two individuals from different African populations are frequently more genetically distinct from each other than a European and an East Asian are.',
          detailed:
            'This is a direct consequence of the founder structure and it undercuts the intuition that geographically distant populations must be the most genetically distant. It also matters practically: genomic studies built overwhelmingly on European samples systematically miss variation, which has consequences for medical genetics.',
        },
        references: [referenceId('mallick-2016-simons')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'From that small founding group, in a geological instant, people reached every habitable continent — including places that could only be reached by sea.',
        },
      },
    ],
    furtherReading: [referenceId('fu-2014-ust-ishim')],
  },

  {
    id: topicId('peopling-the-world'),
    slug: 'peopling-the-world',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 49,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Peopling the world',
    subtitle: 'Every habitable continent, in under fifty thousand years.',
    summary: {
      essential:
        'From a small founding population, Homo sapiens reached Australia by at least 50,000 years ago and the Americas by at least 15,000. Reaching Australia required crossing open ocean deliberately.',
      detailed:
        'The speed is the striking part. This is a dispersal across every climate zone on Earth, accomplished not by biological adaptation — which is far too slow — but by technology and knowledge.',
      technical:
        'Madjedbebe gives an occupation age of about 65 ka by optically stimulated luminescence, though the association of artefacts with dated sediments has been questioned. Sahul was never connected to Asia; minimum crossings of 70–100 km of open water were required at lowest sea level.',
    },
    glossaryTerms: [glossaryTermId('founder-effect'), glossaryTermId('cumulative-culture')],
    related: [
      topicId('out-of-africa-again'),
      topicId('local-adaptations'),
      topicId('cumulative-culture'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Consider the range of conditions involved. Arctic tundra. Tropical rainforest. High-altitude plateau. Desert. Temperate forest. Coastline. A species that had evolved in African woodland and savanna occupied all of them, and did it within a few tens of thousands of years.',
          detailed:
            'Biological adaptation cannot work at that speed. Evolving fur for the Arctic would take far longer than the entire dispersal. What made it possible was the ability to manufacture the necessary conditions: tailored clothing, shelter, fire, food storage, and the accumulated local knowledge of what is edible, where water is, and when animals move.',
        },
      },
      {
        id: 'peopling-figure',
        kind: 'visualization',
        visualizationId: visualizationId('peopling-timeline'),
      },
      {
        id: 'australia',
        kind: 'prose',
        text: {
          essential:
            'Australia is the hardest case to explain away. Even at the lowest sea levels of the last glacial, the landmass of Australia and New Guinea was never joined to Asia. Reaching it required crossing at least 70 to 100 kilometres of open water.',
          detailed:
            'That cannot happen accidentally. A raft blown off course carries a handful of people, probably not both sexes, and does not establish a population. Establishing a viable founding group needs repeated deliberate voyages — which means watercraft, some notion of navigation, and a reason to believe there was somewhere to go, since Australia is not visible from Timor.',
        },
      },
      {
        id: 'australia-claim',
        kind: 'claim',
        statement: {
          essential:
            'Humans reached Australia by at least 50,000 years ago, requiring deliberate open-water crossings of 70 km or more.',
          detailed:
            'Occupation at Madjedbebe is dated to about 65,000 years by luminescence, with the artefact–sediment association disputed; other sites securely support arrival by 50,000 years. Palaeogeographic reconstruction establishes that Sahul was never connected to Sunda.',
        },
        evidence: 'established',
        references: [referenceId('clarkson-2017-madjedbebe')],
      },
      {
        id: 'americas',
        kind: 'prose',
        text: {
          essential:
            'The Americas were the last continents reached, and the details are actively contested. The old model — a single migration through an ice-free corridor around 13,000 years ago — has not survived.',
          detailed:
            'Genetic evidence indicates the ancestral population was isolated in the Beringian region for thousands of years before entering the Americas, and then diversified rapidly. Sites older than the supposed corridor opening have accumulated, and a coastal route along the Pacific margin is now considered at least as likely. Some claimed very early sites remain disputed, and the field is unusually contentious.',
          technical:
            'Ancient genomes indicate a split of ancestral Native American populations from Siberian groups around 25–20 ka, with a period of isolation and a rapid north–south dispersal after about 16 ka. Claims of occupation substantially earlier than this rest on sites where the evidence for human agency or the dating is challenged.',
        },
      },
      {
        id: 'americas-claim',
        kind: 'claim',
        statement: {
          essential:
            'The ancestors of Native American populations were genetically isolated for thousands of years before entering the Americas, and the timing and route of entry remain actively debated.',
          detailed:
            'Ancient and modern genomes support a Beringian isolation period followed by rapid dispersal after roughly 16,000 years ago. Coastal and interior routes are both defended, and several claimed pre-16 ka sites are contested on dating or on evidence of human agency.',
        },
        evidence: 'active-research',
        references: [referenceId('willerslev-meltzer-2021-americas')],
      },
      {
        id: 'technology-not-biology',
        kind: 'callout',
        tone: 'note',
        title: 'A dispersal powered by knowledge rather than bodies',
        text: {
          essential:
            'Nothing about the human body changed enough to explain this. What changed was what people could make and what they knew — and both of those could be transmitted in a generation rather than evolved over thousands.',
          detailed:
            'This is the clearest demonstration of what cumulative culture does. A population that can accumulate techniques can occupy a range no single organism could be adapted to, because the adaptation is held outside the body and can be revised as fast as the environment demands. Local biological adaptations did follow — but they followed, and they are refinements on a colonisation that technology had already accomplished.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'And then, at some point, we were the only humans left. That needs an explanation, and the most popular one is probably wrong.',
        },
      },
    ],
    furtherReading: [referenceId('nielsen-2017-human-dispersals')],
  },

  {
    id: topicId('why-only-one-human-species-remains'),
    slug: 'why-only-one-human-species-remains',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 50,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Why only one human species remains',
    subtitle:
      'For most of our history there were several. Now there is one, and nobody is certain why.',
    summary: {
      essential:
        'Fifty thousand years ago there were at least four kinds of human on Earth. Now there is one. The evidence does not support the story of a superior species outcompeting inferior ones.',
      detailed:
        'The current leading explanation is demographic: small, fragmented populations are vulnerable to extinction through ordinary bad luck, and Neanderthal and Denisovan populations were both small and fragmented.',
      technical:
        'Population viability modelling indicates that inbreeding, Allee effects and stochastic demographic fluctuation are jointly sufficient to drive Neanderthal extinction over ten millennia without invoking any competitive disadvantage. The models are not a demonstration that this is what occurred.',
    },
    glossaryTerms: [
      glossaryTermId('genetic-drift'),
      glossaryTermId('founder-effect'),
      glossaryTermId('admixture'),
    ],
    related: [topicId('neanderthals'), topicId('interbreeding'), topicId('peopling-the-world')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Around fifty thousand years ago, a visitor to Earth would have found Homo sapiens in Africa and western Asia, Neanderthals across Europe, Denisovans somewhere in Asia, Homo floresiensis on Flores, Homo luzonensis on Luzon, and possibly Homo erectus still surviving in Java. Several kinds of human, sharing a planet.',
          detailed:
            'Within perhaps fifteen thousand years, all of them were gone but one. That is a genuine puzzle, and the fact that the survivors are the ones writing the explanation is a reason for caution rather than confidence.',
        },
      },
      {
        id: 'timeline-figure',
        kind: 'visualization',
        visualizationId: visualizationId('last-humans-standing'),
      },
      {
        id: 'the-easy-story',
        kind: 'prose',
        text: {
          essential:
            'The satisfying explanation is that we were better — smarter, better armed, better organised — and outcompeted them. It is worth noticing how well that story flatters the people telling it, and then asking what supports it.',
          detailed:
            'Less than was long assumed. Redating of European sites shows an overlap of several thousand years rather than a rapid replacement. Neanderthal technology in their final millennia is not obviously inferior, and where it changes the cause is debated. There is no archaeological evidence of systematic conflict. And the assumption that Neanderthals were cognitively behind rests largely on inference from the archaeological record, which is exactly what is in question.',
        },
      },
      {
        id: 'overlap-claim',
        kind: 'claim',
        statement: {
          essential:
            'Neanderthals and modern humans overlapped in Europe for several thousand years, with Neanderthals disappearing around 40,000 years ago.',
          detailed:
            'Improved radiocarbon pretreatment applied across forty European sites gives a Neanderthal disappearance around 41–39 ka, with a period of several millennia of co-existence and considerable regional variation in timing.',
        },
        evidence: 'established',
        references: [referenceId('higham-2014-neanderthal-disappearance')],
      },
      {
        id: 'demography',
        kind: 'prose',
        text: {
          essential:
            'The explanation gaining ground requires no superiority at all. Neanderthal populations were small, scattered and inbred. Small populations go extinct through ordinary bad luck — a run of poor years, a skewed sex ratio, a local failure that is not recolonised.',
          detailed:
            'Modelling these dynamics shows that inbreeding, the difficulty small groups have finding mates, and random year-to-year fluctuation are together sufficient to drive a population of Neanderthal size to extinction within ten thousand years, with no competitive disadvantage in the model at all. Arriving modern humans need not have outcompeted anyone; simply occupying part of the landscape and fragmenting the remaining range would tip the balance.',
          technical:
            'This is a demonstration of sufficiency, not of actuality. A model showing that demographic factors alone can produce the observed outcome does not establish that they did, and competition, disease and climate remain live contributors. Its value is in removing the necessity of the superiority hypothesis.',
        },
      },
      {
        id: 'demography-claim',
        kind: 'claim',
        statement: {
          essential:
            'Demographic factors alone — inbreeding, mate-finding difficulty and random fluctuation — are sufficient to explain Neanderthal extinction without any competitive disadvantage.',
          detailed:
            'Population viability models parameterised for Neanderthal-scale populations produce extinction within ten millennia under these factors alone. The result establishes sufficiency; it does not exclude contributions from competition, disease or climate.',
        },
        evidence: 'model',
        references: [referenceId('vaesen-2021-neanderthal-extinction')],
      },
      {
        id: 'absorbed',
        kind: 'prose',
        text: {
          essential:
            'There is also a sense in which they did not entirely disappear. Neanderthal DNA is in most people alive today. Denisovan DNA is in millions. A population can end as a distinct group while its genes continue.',
          detailed:
            'If the incoming modern human population was substantially larger, then interbreeding alone would dilute a smaller population into invisibility over enough generations without anyone dying who would not otherwise have died. That is absorption rather than replacement, and the genetic evidence is consistent with it contributing.',
        },
      },
      {
        id: 'open',
        kind: 'open-question',
        question: 'Why did every other human species disappear?',
        whyItMatters: {
          essential:
            'It is the last major event in the story, and the explanation people give reveals a great deal about their assumptions. A story of inevitable superiority reads the outcome backwards into the process.',
          detailed:
            'It also bears on how contingent our existence is. If Neanderthals disappeared through demographic bad luck, then a modest difference in population size or climate could have left two human species on Earth — which would make almost every assumption about human uniqueness look different.',
        },
        whatWouldSettleIt: {
          essential:
            'Far better resolution on population sizes, contact and chronology in the final millennia — and better evidence about what Neanderthal populations were doing immediately before they vanished.',
          detailed:
            'Sediment DNA is beginning to provide occupation histories at sites without fossils, which is the most promising route to the required resolution. Even so, distinguishing competition from demography may be difficult in principle, since both predict decline and the archaeological record cannot easily attribute a cause.',
        },
        references: [
          referenceId('vaesen-2021-neanderthal-extinction'),
          referenceId('higham-2014-neanderthal-disappearance'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Alone on the planet, our species did something in the last hundred thousand years that leaves a different kind of trace: objects that mean things.',
        },
      },
    ],
    furtherReading: [referenceId('prufer-2014-altai')],
  },
];
