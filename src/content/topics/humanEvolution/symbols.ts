/**
 * Human Evolution, Scientific Lens — Movement VII: symbols, culture and complexity.
 *
 * Archaeology of behaviour is where overreach is easiest, because the objects
 * are evocative and the inferences are unfalsifiable if stated loosely. Every
 * topic here therefore separates what was excavated from what is concluded from
 * it, and the burial topic deliberately gives both sides of a dispute that is
 * genuinely unresolved rather than picking the more moving reading.
 */
import { glossaryTermId } from '../../schema/glossary';
import { referenceId } from '../../schema/reference';
import { sectionId } from '../../schema/section';
import { topicId, type Topic } from '../../schema/topic';
import { visualizationId } from '../../schema/visualization';

const HUMAN = sectionId('human-evolution');
const REVIEWED = '2026-09-11';

export const HUMAN_SYMBOL_TOPICS: readonly Topic[] = [
  {
    id: topicId('pigment-ornament-and-inference'),
    slug: 'pigment-ornament-and-inference',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 51,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Pigment, ornament and inference',
    subtitle: 'What a bead proves, and what it only suggests.',
    summary: {
      essential:
        'Beads and pigment are the earliest durable evidence of symbolic behaviour. Reading them requires care: a shell with a hole is evidence of ornament only if the hole was deliberate, the shell was carried, and the wear shows it was worn.',
      detailed:
        'The archaeology here is a chain of small technical arguments, each of which can fail. Getting the chain right is what separates a finding from a story.',
      technical:
        'Diagnostic criteria for deliberate ornament include non-local raw material, perforation morphology inconsistent with predation or abrasion, use-wear at perforation margins, ochre residue, and recurrence of a restricted species and size range across assemblages.',
    },
    glossaryTerms: [glossaryTermId('middle-stone-age'), glossaryTermId('taphonomy')],
    related: [topicId('symbolic-thought'), topicId('exchange-and-social-networks')],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'A perforated shell is not automatically a bead. Marine snails are drilled by predatory molluscs. Shells abrade against rocks. Waves break them in predictable places. Before a shell becomes evidence of ornament, several other explanations have to be eliminated.',
          detailed:
            'The tests are specific. Predator-drilled holes have a characteristic bevelled profile and appear at positions the predator chooses. Deliberate perforations tend to be punched or ground, and to sit where a string would hang the shell to display it best. Wear polish at the hole margins shows a cord moved against it. Ochre traces suggest contact with a decorated body. And the species and size should be tightly constrained — people making beads select, while natural accumulation does not.',
        },
      },
      {
        id: 'bead-figure',
        kind: 'visualization',
        visualizationId: visualizationId('bead-inference'),
      },
      {
        id: 'the-case',
        kind: 'prose',
        text: {
          essential:
            'Assemblages that pass all of these exist, and the earliest are from North and South Africa around 80,000 years ago. At Taforalt in Morocco, perforated Nassarius shells occur far from the coast, in a narrow size range, with wear at the perforations and ochre traces on several.',
          detailed:
            'The distance matters as much as the shells. These shells were carried tens of kilometres inland. Carrying an inedible object a long way, modifying it, and wearing it is behaviour with no nutritional or practical payoff — which is precisely why it implies a social meaning. Somebody was meant to see it and understand something from it.',
        },
      },
      {
        id: 'beads-claim',
        kind: 'claim',
        statement: {
          essential:
            'Deliberately perforated and worn shell beads, transported far inland, were in use in North Africa by about 82,000 years ago.',
          detailed:
            'Nassarius shells from Taforalt show a restricted size range, anthropogenic perforations, use-wear consistent with suspension, and ochre residues, in layers dated by multiple methods, at a site roughly 40 km from the contemporaneous coast.',
        },
        evidence: 'established',
        references: [referenceId('bouzouggar-2007-beads')],
      },
      {
        id: 'pigment-harder',
        kind: 'prose',
        text: {
          essential:
            'Pigment is a weaker case and it is often presented as a stronger one. Ochre is genuinely useful for non-symbolic purposes: it improves adhesives, it helps preserve hides, and it may work as a sunscreen or insect repellent. Its presence at a site does not demonstrate symbolism.',
          detailed:
            'What strengthens the case is processing that exceeds practical need — grinding to fine powder, selection for particular colours, preparation in containers, and application to objects rather than to materials. Where those occur together the symbolic reading becomes reasonable. Where ochre simply appears, it does not.',
        },
      },
      {
        id: 'standards',
        kind: 'callout',
        tone: 'caution',
        title: 'A double standard worth noticing',
        text: {
          essential:
            'Evidence of symbolic behaviour associated with Homo sapiens has often been accepted more readily than identical evidence associated with Neanderthals. That asymmetry was an assumption, not a finding.',
          detailed:
            'Perforated shells, pigment use, eagle talons apparently modified for wearing and marked bones have all been reported from Neanderthal contexts and have all drawn scrutiny that comparable modern human finds did not. Some of those claims are genuinely weak. The point is that the scrutiny should be applied evenly, and for a long time it was not.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'The most vivid symbolic evidence is on cave walls — and the dating of some of it has produced one of the sharpest disputes in the field.',
        },
      },
    ],
    furtherReading: [referenceId('henshilwood-2002-blombos')],
  },

  {
    id: topicId('cave-art'),
    slug: 'cave-art',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 52,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Cave art',
    subtitle: 'Old, skilled, global, and not exclusively ours.',
    summary: {
      essential:
        'Figurative cave painting appears by at least 44,000 years ago in Indonesia and around 36,000 in Europe. Some Spanish cave markings have been dated older than 64,000 years, which would make them Neanderthal.',
      detailed:
        'The art is not the crude beginning of a tradition. The earliest known figurative work is already accomplished, which means the tradition began earlier than the evidence shows — on surfaces that did not survive.',
      technical:
        'Uranium-thorium dating of carbonate crusts overlying pigment gives minimum ages. The Iberian results exceeding 64.8 ka have been challenged on grounds of open-system behaviour in the carbonate and of sampling; the dispute has not been resolved.',
    },
    glossaryTerms: [glossaryTermId('radiometric-dating')],
    related: [
      topicId('symbolic-thought'),
      topicId('neanderthals'),
      topicId('pigment-ornament-and-inference'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'When the painted cave at Altamira was published in 1880, it was widely dismissed as a forgery. The paintings were too good. Prehistoric people were not supposed to be capable of them, and the man who reported them died before they were accepted.',
          detailed:
            'The reaction was wrong about the age and right about one thing: the art is extremely accomplished. Chauvet, at around 36,000 years, includes overlapping figures suggesting movement, shading to indicate volume, and the use of the cave wall’s own contours to give an animal a shoulder. This is not the beginning of a tradition — it is a tradition already mature, with everything before it invisible.',
        },
      },
      {
        id: 'art-figure',
        kind: 'visualization',
        visualizationId: visualizationId('cave-art-record'),
      },
      {
        id: 'not-only-europe',
        kind: 'prose',
        text: {
          essential:
            'The idea that cave art was a European phenomenon has not survived either. Caves in Sulawesi and Borneo contain figurative animal paintings and hand stencils of comparable age, including a panel showing animals and small human-like figures with what appear to be ropes or spears.',
          detailed:
            'That panel, dated to at least 44,000 years, has been described as the earliest known narrative scene — multiple figures in a relationship to one another rather than isolated images. The interpretation is contested, since reading a scene requires assuming the figures were composed together. What is not contested is that figurative art of this age exists on the other side of the world from Europe, which means the capacity travelled with people rather than emerging in one place.',
        },
      },
      {
        id: 'sulawesi-claim',
        kind: 'claim',
        statement: {
          essential:
            'Figurative cave painting was being produced in Sulawesi by at least 44,000 years ago.',
          detailed:
            'Uranium-series dating of carbonate overlying the pigment gives minimum ages of 43.9 ka for a panel depicting animals and small anthropomorphic figures. The reading of the panel as a single narrative composition is an interpretation.',
        },
        evidence: 'established',
        references: [referenceId('aubert-2019-sulawesi')],
      },
      {
        id: 'the-dispute',
        kind: 'prose',
        text: {
          essential:
            'The sharpest disagreement concerns three Spanish caves. Markings there — a ladder-like shape, hand stencils, painted dots — were dated by measuring the carbonate crust that had grown over the pigment, giving minimum ages over 64,000 years. That is more than twenty thousand years before Homo sapiens is known in Iberia.',
          detailed:
            'If the dates hold, Neanderthals made these marks. The objection is technical rather than ideological: the method assumes the carbonate has behaved as a closed system since it formed, and cave carbonates can gain or lose uranium over time, which would inflate the apparent age. Critics have argued the samples show signs of exactly this. The original team disputes it. The dispute is unresolved.',
        },
      },
      {
        id: 'iberian-claim',
        kind: 'claim',
        statement: {
          essential:
            'Cave markings in three Spanish caves have been dated to more than 64,000 years ago, which would attribute them to Neanderthals. The dating is disputed.',
          detailed:
            'Uranium-thorium ages on carbonate crusts overlying pigment exceed 64.8 ka at La Pasiega, Maltravieso and Ardales. Objections concern possible open-system behaviour of the carbonate and sampling protocol; the authors maintain the results. No resolution has been reached.',
        },
        evidence: 'active-research',
        references: [referenceId('hoffmann-2018-uranium-cave-art')],
      },
      {
        id: 'what-survived',
        kind: 'callout',
        tone: 'note',
        title: 'We are looking at the deepest parts of caves',
        text: {
          essential:
            'Art survives where nothing disturbs it: deep chambers with stable temperature and humidity. Whatever was painted on rock shelters, on skin, on bark or on wood is entirely gone.',
          detailed:
            'So the surviving record is not a sample of what was made. It is a sample of what happened to be made in the few places that preserve anything for forty thousand years. Both the geography and the subject matter of prehistoric art are filtered by that, and any conclusion about what people depicted or where they did it has to reckon with the filter first.',
        },
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Another behaviour leaves traces in the ground, and it raises harder questions about what can be inferred from a deposit.',
        },
      },
    ],
    furtherReading: [referenceId('henshilwood-2018-drawing')],
  },

  {
    id: topicId('burial-and-the-dead'),
    slug: 'burial-and-the-dead',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 53,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Burial and the dead',
    subtitle: 'Distinguishing an intentional grave from a body that ended up covered.',
    summary: {
      essential:
        'Deliberate burial is among the most evocative evidence in archaeology and among the hardest to demonstrate. A body in a pit may have been placed there or may have come to rest there.',
      detailed:
        'The best-known Neanderthal burial has been excavated, re-excavated and argued about for over a century, and the argument is still live. That is worth knowing before reading confident claims about prehistoric belief.',
      technical:
        'Criteria include a pit whose geometry cannot be explained by natural depression, sediment fill distinguishable from surrounding matrix, anatomical articulation implying rapid covering, and absence of carnivore modification. Each criterion is contestable at most sites and requires the original excavation to have recorded the necessary detail.',
    },
    glossaryTerms: [glossaryTermId('taphonomy')],
    related: [
      topicId('neanderthals'),
      topicId('cave-art'),
      topicId('pigment-ornament-and-inference'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'In 1908 a nearly complete Neanderthal skeleton was excavated at La Chapelle-aux-Saints in France, apparently in a pit. It became the standard example of Neanderthal burial and, through Boule’s reconstruction of the same individual, the standard example of Neanderthal primitiveness. The two claims sat oddly together and both have been argued over ever since.',
          detailed:
            'The problem is that the original excavation, by the standards of 1908, recorded very little of what a modern archaeologist would need: the exact geometry of the depression, the character of the sediment filling it against the surrounding deposit, the position of every bone. Without that, the central question — whether the pit was dug — cannot be answered from the old records.',
        },
      },
      {
        id: 'burial-figure',
        kind: 'visualization',
        visualizationId: visualizationId('burial-criteria'),
      },
      {
        id: 'the-re-excavation',
        kind: 'prose',
        text: {
          essential:
            'A modern team returned to the site and re-excavated it, which is the only way to recover what the first dig did not record. They concluded that the depression had geometry inconsistent with natural formation and that the fill differed from the surrounding sediment, supporting deliberate digging.',
          detailed:
            'Another team reviewed the same evidence and disagreed, arguing the depression could be a natural feature modified by the deposit, that the sedimentary distinction is not clear enough to bear the weight placed on it, and that the excellent preservation of the skeleton has other explanations. Both papers are careful. Neither has persuaded the other.',
        },
      },
      {
        id: 'burial-claim',
        kind: 'claim',
        statement: {
          essential:
            'Whether Neanderthals practised intentional burial is disputed, with careful arguments published on both sides for the best-studied site.',
          detailed:
            'Re-excavation at La Chapelle-aux-Saints has been interpreted as demonstrating a deliberately dug pit and, by other workers examining the same evidence, as not demonstrating one. Several other candidate sites are similarly contested.',
        },
        evidence: 'active-research',
        references: [
          referenceId('rendu-2014-chapelle'),
          referenceId('dibble-2015-burial-critique'),
        ],
      },
      {
        id: 'what-preservation-implies',
        kind: 'prose',
        text: {
          essential:
            'There is an argument from preservation that is worth taking seriously. Complete, articulated skeletons are extremely rare. A body left on a cave floor is scavenged, scattered and destroyed. That several Neanderthal skeletons survive substantially complete suggests they were covered quickly.',
          detailed:
            'But rapid covering is not the same as a grave. A roof collapse, a slump of sediment, a body in a natural hollow that filled — all produce rapid burial without anyone intending it. The argument establishes that something covered these bodies soon after death. It does not establish who or what.',
        },
      },
      {
        id: 'grave-goods',
        kind: 'callout',
        tone: 'misconception',
        title: 'The flower burial that probably was not',
        text: {
          essential:
            'At Shanidar in Iraq, pollen clusters around a Neanderthal skeleton were interpreted as flowers placed on a grave. It became one of the most repeated images in the field. The pollen was most likely introduced by burrowing rodents, which store flower heads and are present at the site.',
          detailed:
            'The story survives in popular accounts decades after the evidence was reinterpreted, which is itself instructive. Objects near a body may be grave goods or may be items that were already in the sediment; distinguishing them requires spatial data that most old excavations did not collect. Newer work at Shanidar is more careful and has revived some claims about deliberate placement of bodies — without reviving the flowers.',
        },
        references: [referenceId('pettitt-2011-burial')],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'One category of evidence does escape this difficulty, because it depends on distance rather than interpretation: stone that ended up a long way from where it came out of the ground.',
        },
      },
    ],
    furtherReading: [referenceId('pettitt-2011-burial')],
  },

  {
    id: topicId('exchange-and-social-networks'),
    slug: 'exchange-and-social-networks',
    sectionId: HUMAN,
    lens: 'scientific',
    order: 54,
    status: 'published',
    reviewedOn: REVIEWED,
    title: 'Exchange and social networks',
    subtitle: 'Stone that travelled further than any one person plausibly did.',
    summary: {
      essential:
        'Stone tools can be chemically traced to the outcrop they came from. Distances between source and find-spot increase through the Stone Age, which is evidence of expanding networks between groups.',
      detailed:
        'This is unusually solid evidence about social organisation, because the distance is a measurement rather than an interpretation. What it implies about relationships between groups is an inference, but a well-constrained one.',
      technical:
        'Obsidian sourcing by trace-element geochemistry gives outcrop-level attribution. Middle Stone Age transport distances at Olorgesailie reach 25–95 km against typical Acheulean distances under 5 km; later Palaeolithic networks in Europe extend several hundred kilometres.',
    },
    glossaryTerms: [glossaryTermId('middle-stone-age'), glossaryTermId('cumulative-culture')],
    related: [
      topicId('cumulative-culture'),
      topicId('pigment-ornament-and-inference'),
      topicId('symbolic-thought'),
    ],
    blocks: [
      {
        id: 'opening',
        kind: 'prose',
        text: {
          essential:
            'Obsidian is volcanic glass, and each eruption produces glass with its own trace-element fingerprint. Measure the chemistry of a tool and you can identify the specific outcrop it came from. That turns every obsidian artefact into a record of a journey.',
          detailed:
            'For most of the Acheulean, the journeys are short. Stone was picked up within a few kilometres of where it was used — consistent with people carrying material around their own range. Then, in the African Middle Stone Age, the distances jump.',
        },
      },
      {
        id: 'exchange-figure',
        kind: 'visualization',
        visualizationId: visualizationId('exchange-distance'),
      },
      {
        id: 'distance-claim',
        kind: 'claim',
        statement: {
          essential:
            'Obsidian at Olorgesailie in the early Middle Stone Age came from sources 25 to 95 kilometres away, far beyond earlier Acheulean transport distances.',
          detailed:
            'Trace-element sourcing attributes artefacts to specific outcrops at these distances in deposits dated to around 320,000 years ago, against typical Acheulean distances of a few kilometres at the same locality.',
        },
        evidence: 'established',
        references: [referenceId('brooks-2018-olorgesailie')],
      },
      {
        id: 'two-readings',
        kind: 'prose',
        text: {
          essential:
            'Two explanations are available, and they are not equally likely. Either individual groups ranged over vastly larger territories than before, or material passed between groups — hand to hand, across a network of relationships.',
          detailed:
            'The second is generally preferred, because a group ranging over a hundred kilometres of varied terrain would leave other traces, and because the pattern appears alongside pigment use and other markers of social signalling. Exchange between groups requires something substantial: a way of meeting without violence, some notion of reciprocity, and probably a way of marking who you are and who you are connected to — which is where ornament comes in.',
          technical:
            'The inference is not airtight. Down-the-line movement of material through repeated short transfers, direct procurement by long-distance expeditions and seasonal aggregation all produce similar distributions, and distinguishing them requires distributional data that early sites rarely provide.',
        },
      },
      {
        id: 'why-networks-matter',
        kind: 'prose',
        text: {
          essential:
            'The reason this matters beyond logistics is what it does to knowledge. Groups connected to other groups have access to more people who know things — and cumulative culture depends on how many people a learner can learn from.',
          detailed:
            'A network of connected bands behaves, for the purposes of retaining and improving techniques, like a much larger population than any one band. This is the mechanism linking the archaeological record of exchange to the record of technological complexity: the two increase together, and the demographic models predict exactly that relationship.',
        },
      },
      {
        id: 'network-claim',
        kind: 'claim',
        statement: {
          essential:
            'Technological complexity in Palaeolithic and ethnographic societies tracks the size of the connected population rather than population size alone.',
          detailed:
            'Comparative analysis of Oceanian toolkits shows complexity predicted by population size and by degree of inter-island contact, matching transmission models in which effective population is the number of available models rather than the number of co-residents.',
        },
        evidence: 'inference',
        references: [
          referenceId('kline-boyd-2010-population-size'),
          referenceId('powell-2009-demography-culture'),
        ],
      },
      {
        id: 'onward',
        kind: 'prose',
        text: {
          essential:
            'Networks, accumulated knowledge and growing populations set up the last major change in this story — one that transformed human life and damaged human bodies.',
        },
      },
    ],
    furtherReading: [referenceId('derex-2013-group-size-cultural')],
  },
];
