import type { Lang } from '../i18n';

export interface Engagement {
  category: string;
  title: Record<Lang, string>;
  organization?: string;
  period: string;
  description: Record<Lang, string>;
}

export const engagements: Engagement[] = [
  {
    category: 'climate',
    title: { fr: 'Animateur de la Fresque du Climat', en: 'Climate Fresk Facilitator' },
    organization: 'La Fresque du Climat',
    period: '2023 - ...',
    description: {
      fr: 'Animation d\'ateliers ludiques, participatifs et creatifs sur le changement climatique bases sur l\'intelligence collective.',
      en: 'Facilitating fun, participative and creative workshops on climate change based on collective intelligence.',
    },
  },
  {
    category: 'climate',
    title: { fr: 'Animateur de la Fresque du Numerique', en: 'Digital Fresk Facilitator' },
    organization: 'La Fresque du Numerique',
    period: '2023 - ...',
    description: {
      fr: 'Sensibilisation aux impacts environnementaux du numerique a travers des ateliers collaboratifs.',
      en: 'Raising awareness of the environmental impact of digital technology through collaborative workshops.',
    },
  },
  {
    category: 'climate',
    title: { fr: 'Animateur Ateliers 2tonnes', en: '2 Tonnes Workshop Facilitator' },
    organization: '2tonnes',
    period: '2023 - ...',
    description: {
      fr: 'Animation d\'ateliers immersifs pour explorer les leviers individuels et collectifs de reduction de l\'empreinte carbone.',
      en: 'Facilitating immersive workshops to explore individual and collective levers for reducing carbon footprint.',
    },
  },
  {
    category: 'climate',
    title: { fr: 'Animateur Nos Vies Bas Carbone', en: 'Low Carbon Lives Facilitator' },
    organization: 'Nos Vies Bas Carbone',
    period: '2023 - ...',
    description: {
      fr: 'Animation d\'ateliers pour inventer collectivement des modes de vie compatibles avec les limites planetaires.',
      en: 'Facilitating workshops to collectively imagine lifestyles compatible with planetary boundaries.',
    },
  },
  {
    category: 'climate',
    title: { fr: 'Contributeur Open Source', en: 'Open Source Contributor' },
    organization: 'Boavizta',
    period: '2023 - ...',
    description: {
      fr: 'Contribution au developpement d\'approches ouvertes (open-source & open-data) pour evaluer l\'impact environnemental de l\'informatique.',
      en: 'Contributing to open approaches (open-source & open-data) to assess the environmental impact of IT.',
    },
  },
  {
    category: 'sport',
    title: { fr: 'Ceinture noire & Assistant Club de Taekwondo', en: 'Black Belt & Taekwondo Club Assistant' },
    organization: 'Senart Taekwondo Hapkido',
    period: '2021 - ...',
    description: {
      fr: 'Ceinture noire et diplome d\'assistant club. Secretaire de l\'association (~250 membres). J\'assiste le professeur et donne des cours ponctuellement. Diplome d\'instructeur federal prevu en 2027.',
      en: 'Black belt and club assistant certification. Club secretary (~250 members). I assist the instructor and occasionally lead classes. Federal instructor certification planned for 2027.',
    },
  },
];
