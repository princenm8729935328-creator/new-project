import { type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { Timeline, type TimelineEvent } from './lifeKit';

/**
 * Arrival dates by region, on a single axis.
 *
 * The compression is the argument: every climate zone on Earth occupied inside
 * fifty thousand years, which is far too fast for biological adaptation and can
 * only have been done with knowledge and equipment.
 */

const EVENTS: readonly TimelineEvent[] = [
  {
    ma: 0.06,
    label: 'expansion from Africa',
    detail:
      'The dispersal from which essentially all non-African ancestry derives. The founding group was small, which is why genetic diversity declines smoothly with distance from Africa ever since.',
  },
  {
    ma: 0.05,
    label: 'Australia and New Guinea',
    detail:
      'Even at the lowest sea levels, this landmass was never joined to Asia — reaching it required crossing at least 70 to 100 kilometres of open water. That cannot happen accidentally: a raft blown off course carries a handful of people and does not found a population. Establishing a viable group needs repeated deliberate voyages, watercraft, and some reason to believe there was land out there, since Australia is not visible from Timor. Madjedbebe gives about 65,000 years by luminescence, with the artefact–sediment association disputed; other sites securely support 50,000.',
  },
  {
    ma: 0.045,
    label: 'Europe',
    detail:
      'Arrival into a continent already occupied by Neanderthals, with several thousand years of overlap before they disappear.',
  },
  {
    ma: 0.04,
    label: 'northern Siberia',
    detail:
      'Occupation above the Arctic Circle requires tailored clothing, controlled fire, shelter and food storage. None of it is biological.',
  },
  {
    ma: 0.02,
    label: 'Beringian isolation',
    detail:
      'Genomes indicate the ancestors of Native American populations were genetically isolated for thousands of years before entering the Americas — a population sitting in one region long enough to become distinct.',
  },
  {
    ma: 0.015,
    label: 'the Americas',
    detail:
      'The last continents reached, and the most actively contested part of this story. The old model of a single migration through an ice-free corridor around 13,000 years ago has not survived; a Pacific coastal route is now considered at least as likely, and several claimed earlier sites are disputed on dating or on evidence of human agency.',
  },
  {
    ma: 0.003,
    label: 'remote Pacific',
    detail:
      'The last habitable places on Earth to be reached, by deliberate open-ocean voyaging over thousands of kilometres using navigation techniques carried entirely in memory and training.',
  },
];

export default function PeoplingTimeline(_props: VisualizationProps): ReactNode {
  return (
    <Timeline
      events={EVENTS}
      fromMa={0.07}
      toMa={0}
      caption="Arrival dates by region — 0.05 on the axis is fifty thousand years ago"
    />
  );
}
