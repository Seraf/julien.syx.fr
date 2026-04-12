import type { Lang } from '../i18n';

export interface Project {
  name: string;
  url: string;
  description: Record<Lang, string>;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: 'Yahoki',
    url: 'https://www.yahoki.fr',
    description: {
      fr: 'Blog de randonnee "Chroniques des marches sauvages" (\u91CE\u6B69\u8A18). Recits d\'aventures en famille a travers la nature, avec photos et traces GPS.',
      en: 'Hiking blog "Chronicles of wild walks" (\u91CE\u6B69\u8A18). Family adventure stories through nature, with photos and GPS tracks.',
    },
    tech: ['Astro', 'TypeScript', 'Markdown'],
  },
  {
    name: 'Yaholink',
    url: 'https://www.yahokink.fr',
    description: {
      fr: 'Application de randonnee permettant de planifier, suivre et partager ses parcours de marche.',
      en: 'Hiking application for planning, tracking and sharing walking routes.',
    },
    tech: ['Web App', 'GPS', 'Cartographie'],
  },
  {
    name: 'Senart Taekwondo Hapkido',
    url: 'https://www.senart-taekwondo-hapkido.fr',
    description: {
      fr: 'Site web du club de taekwondo et hapkido de Senart (~250 membres). Informations, planning et inscriptions.',
      en: 'Website for the Senart taekwondo and hapkido club (~250 members). Information, schedule and registration.',
    },
    tech: ['Yapla', 'Web'],
  },
  {
    name: 'Taekwondo Learning App',
    url: 'https://app.senart-taekwondo-hapkido.fr',
    description: {
      fr: 'Application d\'apprentissage des techniques de taekwondo. Catalogue de mouvements, videos et progression par grade.',
      en: 'Taekwondo technique learning app. Movement catalog, videos and progression by grade.',
    },
    tech: ['Web App', 'Video', 'Progressive Web App'],
  },
  {
    name: 'Interactions Medicamenteuses',
    url: 'https://interaction-medicament.vercel.app',
    description: {
      fr: 'Application de verification des interactions entre medicaments, developpee a la demande de ma femme infirmiere.',
      en: 'Drug interaction checking application, developed at the request of my wife, a nurse.',
    },
    tech: ['Vercel', 'TypeScript', 'API'],
  },
];
