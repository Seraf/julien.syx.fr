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
      fr: 'Blog de randonn\u00E9e "Chroniques des marches sauvages" (\u91CE\u6B69\u8A18). R\u00E9cits d\'aventures en famille \u00E0 travers la nature, avec photos et traces GPS.',
      en: 'Hiking blog "Chronicles of wild walks" (\u91CE\u6B69\u8A18). Family adventure stories through nature, with photos and GPS tracks.',
    },
    tech: ['Astro', 'TypeScript', 'Markdown'],
  },
  {
    name: 'Yaholink',
    url: 'https://www.yahokink.fr',
    description: {
      fr: 'Application de randonn\u00E9e permettant de planifier, suivre et partager ses parcours de marche.',
      en: 'Hiking application for planning, tracking and sharing walking routes.',
    },
    tech: ['Web App', 'GPS', 'Cartographie'],
  },
  {
    name: 'S\u00E9nart Taekwondo Hapkido',
    url: 'https://www.senart-taekwondo-hapkido.fr',
    description: {
      fr: 'Site web du club de taekwondo et hapkido de S\u00E9nart (~250 membres). Informations, planning et inscriptions.',
      en: 'Website for the S\u00E9nart taekwondo and hapkido club (~250 members). Information, schedule and registration.',
    },
    tech: ['Yapla', 'Web'],
  },
  {
    name: 'Taekwondo Learning App',
    url: 'https://app.senart-taekwondo-hapkido.fr',
    description: {
      fr: 'Application d\'apprentissage des techniques de taekwondo. Catalogue de mouvements, vid\u00E9os et progression par grade.',
      en: 'Taekwondo technique learning app. Movement catalog, videos and progression by grade.',
    },
    tech: ['Web App', 'Video', 'Progressive Web App'],
  },
  {
    name: 'Interactions M\u00E9dicamenteuses',
    url: 'https://interaction-medicament.vercel.app',
    description: {
      fr: 'Application de v\u00E9rification des interactions entre m\u00E9dicaments, d\u00E9velopp\u00E9e \u00E0 la demande de ma femme infirmi\u00E8re.',
      en: 'Drug interaction checking application, developed at the request of my wife, a nurse.',
    },
    tech: ['Vercel', 'TypeScript', 'API'],
  },
];
