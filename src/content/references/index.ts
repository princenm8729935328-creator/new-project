/**
 * The shared reference pool — seed set.
 *
 * These are the primary sources the first content phases will lean on. The pool
 * is intentionally small right now: it exists to prove the citation machinery
 * end-to-end, not to pre-empt the content work. Every entry below is a real,
 * published source; nothing here is a placeholder.
 *
 * Adding a reference: append a record, keep the id stable forever (ids appear in
 * saved links and review notes), and fill `supports` so a reviewer can check the
 * citation without reading the whole paper.
 */
import { referenceId, type Reference } from '../schema/reference';

export const REFERENCES: readonly Reference[] = [
  {
    id: referenceId('planck-2018-vi'),
    kind: 'journal-article',
    authors: 'Planck Collaboration',
    year: 2020,
    title: 'Planck 2018 results. VI. Cosmological parameters',
    source: 'Astronomy & Astrophysics 641, A6',
    doi: '10.1051/0004-6361/201833910',
    arxiv: '1807.06209',
    supports:
      'Base-ΛCDM parameters: age of the Universe, Hubble constant, matter and dark-energy densities.',
  },
  {
    id: referenceId('fixsen-2009-cmb-temperature'),
    kind: 'journal-article',
    authors: 'Fixsen, D. J.',
    year: 2009,
    title: 'The Temperature of the Cosmic Microwave Background',
    source: 'The Astrophysical Journal 707, 916',
    doi: '10.1088/0004-637X/707/2/916',
    arxiv: '0911.1955',
    supports: 'Present-day CMB monopole temperature.',
  },
  {
    id: referenceId('penzias-wilson-1965'),
    kind: 'journal-article',
    authors: 'Penzias, A. A. & Wilson, R. W.',
    year: 1965,
    title: 'A Measurement of Excess Antenna Temperature at 4080 Mc/s',
    source: 'The Astrophysical Journal 142, 419',
    doi: '10.1086/148307',
    supports: 'Discovery of the cosmic microwave background.',
  },
  {
    id: referenceId('hubble-1929'),
    kind: 'journal-article',
    authors: 'Hubble, E.',
    year: 1929,
    title: 'A Relation between Distance and Radial Velocity among Extra-Galactic Nebulae',
    source: 'Proceedings of the National Academy of Sciences 15, 168',
    doi: '10.1073/pnas.15.3.168',
    supports: 'The distance–redshift relation; first observational evidence for expansion.',
  },
  {
    id: referenceId('riess-1998'),
    kind: 'journal-article',
    authors: 'Riess, A. G. et al.',
    year: 1998,
    title:
      'Observational Evidence from Supernovae for an Accelerating Universe and a Cosmological Constant',
    source: 'The Astronomical Journal 116, 1009',
    doi: '10.1086/300499',
    arxiv: 'astro-ph/9805201',
    supports: 'Accelerating expansion from Type Ia supernovae.',
  },
  {
    id: referenceId('perlmutter-1999'),
    kind: 'journal-article',
    authors: 'Perlmutter, S. et al.',
    year: 1999,
    title: 'Measurements of Ω and Λ from 42 High-Redshift Supernovae',
    source: 'The Astrophysical Journal 517, 565',
    doi: '10.1086/307221',
    arxiv: 'astro-ph/9812133',
    supports: 'Independent supernova evidence for accelerating expansion.',
  },
  {
    id: referenceId('rubin-ford-1970'),
    kind: 'journal-article',
    authors: 'Rubin, V. C. & Ford, W. K.',
    year: 1970,
    title: 'Rotation of the Andromeda Nebula from a Spectroscopic Survey of Emission Regions',
    source: 'The Astrophysical Journal 159, 379',
    doi: '10.1086/150317',
    supports: 'Galaxy rotation curves that do not match the visible mass.',
  },
  {
    id: referenceId('einstein-1916-gr'),
    kind: 'journal-article',
    authors: 'Einstein, A.',
    year: 1916,
    title: 'Die Grundlage der allgemeinen Relativitätstheorie',
    source: 'Annalen der Physik 354, 769',
    doi: '10.1002/andp.19163540702',
    supports: 'The field equations of general relativity.',
  },
  {
    id: referenceId('newton-1687-principia'),
    kind: 'book',
    authors: 'Newton, I.',
    year: 1687,
    title: 'Philosophiæ Naturalis Principia Mathematica',
    source: 'Royal Society, London',
    supports: 'The three laws of motion and universal gravitation.',
  },
  {
    id: referenceId('ligo-2016-gw150914'),
    kind: 'journal-article',
    authors: 'Abbott, B. P. et al. (LIGO Scientific Collaboration and Virgo Collaboration)',
    year: 2016,
    title: 'Observation of Gravitational Waves from a Binary Black Hole Merger',
    source: 'Physical Review Letters 116, 061102',
    doi: '10.1103/PhysRevLett.116.061102',
    arxiv: '1602.03837',
    supports: 'First direct detection of gravitational waves; binary black hole merger.',
  },
  {
    id: referenceId('eht-2019-m87'),
    kind: 'journal-article',
    authors: 'Event Horizon Telescope Collaboration',
    year: 2019,
    title:
      'First M87 Event Horizon Telescope Results. I. The Shadow of the Supermassive Black Hole',
    source: 'The Astrophysical Journal Letters 875, L1',
    doi: '10.3847/2041-8213/ab0ec7',
    supports: 'Horizon-scale image of the M87* black hole shadow.',
  },
  {
    id: referenceId('patterson-1956-age-of-earth'),
    kind: 'journal-article',
    authors: 'Patterson, C.',
    year: 1956,
    title: 'Age of meteorites and the earth',
    source: 'Geochimica et Cosmochimica Acta 10, 230',
    doi: '10.1016/0016-7037(56)90036-9',
    supports: 'Lead-isotope determination of the age of the Earth and meteorites.',
  },
  {
    id: referenceId('hublin-2017-jebel-irhoud'),
    kind: 'journal-article',
    authors: 'Hublin, J.-J. et al.',
    year: 2017,
    title: 'New fossils from Jebel Irhoud, Morocco and the pan-African origin of Homo sapiens',
    source: 'Nature 546, 289',
    doi: '10.1038/nature22336',
    supports: 'Earliest known Homo sapiens fossils and a pan-African origin model.',
  },
  {
    id: referenceId('codata-2018'),
    kind: 'review',
    authors: 'Tiesinga, E., Mohr, P. J., Newell, D. B. & Taylor, B. N.',
    year: 2021,
    title: 'CODATA recommended values of the fundamental physical constants: 2018',
    source: 'Reviews of Modern Physics 93, 025010',
    doi: '10.1103/RevModPhys.93.025010',
    supports: 'Values of the fundamental physical constants used throughout the platform.',
  },
];

const BY_ID = new Map(REFERENCES.map((reference) => [reference.id, reference]));

export function getReference(id: Reference['id']): Reference | undefined {
  return BY_ID.get(id);
}
