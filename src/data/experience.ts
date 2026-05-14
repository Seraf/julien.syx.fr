import type { Lang } from '../i18n';

export interface Experience {
  company: string;
  role: Record<Lang, string>;
  period: string;
  location?: string;
  description: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
}

export const experiences: Experience[] = [
  {
    company: 'Cycloid',
    role: { fr: 'CTO / Product Lead', en: 'CTO / Product Lead' },
    period: '2015 - ...',
    location: 'Full Remote, Europe',
    description: {
      fr: 'Premier salarié et associé. Stratégie produit et direction technique d\'une plateforme interne unifiée pour les développeurs, simplifiant l\'adoption du Cloud et du DevOps.',
      en: 'First employee and partner. Product strategy and technical leadership for a unified internal developer platform, simplifying Cloud and DevOps adoption.',
    },
    highlights: {
      fr: [
        'Construction et management de l\'équipe technique (15 personnes)',
        'Stratégie produit et roadmap en collaboration avec les équipes',
        'Full remote à travers l\'Europe, anglais comme langue de travail',
        'Recrutement et structuration de l\'équipe engineering',
      ],
      en: [
        'Built and managed the engineering team (15 people)',
        'Product strategy and roadmap in collaboration with teams',
        'Fully remote across Europe, English as working language',
        'Recruiting and structuring the engineering team',
      ],
    },
  },
  {
    company: 'Red Hat',
    role: { fr: 'Senior Cloud Consultant', en: 'Senior Cloud Consultant' },
    period: '2014 - 2015',
    description: {
      fr: 'Suite au rachat d\'eNovance par Red Hat, poursuite des missions de consulting cloud et OpenStack à l\'échelle mondiale.',
      en: 'Following the acquisition of eNovance by Red Hat, continued cloud and OpenStack consulting at global scale.',
    },
    highlights: {
      fr: [
        'Consulting cloud et infrastructure à l\'échelle mondiale',
        'Expertise OpenStack et technologies open source',
      ],
      en: [
        'Global-scale cloud and infrastructure consulting',
        'OpenStack and open source technology expertise',
      ],
    },
  },
  {
    company: 'eNovance',
    role: { fr: 'DevOps', en: 'DevOps Engineer' },
    period: '2012 - 2014',
    description: {
      fr: 'Entreprise à la pointe de l\'hébergement et du cloud computing. Immersion dans l\'écosystème OpenStack et les pratiques DevOps avancées.',
      en: 'Cutting-edge hosting and cloud computing company. Deep dive into the OpenStack ecosystem and advanced DevOps practices.',
    },
    highlights: {
      fr: [
        'Écosystème OpenStack et cloud computing',
        'Pratiques DevOps avancées',
        'Télétravail partiel',
      ],
      en: [
        'OpenStack ecosystem and cloud computing',
        'Advanced DevOps practices',
        'Partial remote work',
      ],
    },
  },
  {
    company: 'BSO Network Solutions',
    role: { fr: 'Ingénieur Système N2', en: 'System Engineer - Level 2' },
    period: '2012',
    description: {
      fr: 'Administration système et gestion d\'infrastructure.',
      en: 'System administration and infrastructure management.',
    },
    highlights: { fr: [], en: [] },
  },
  {
    company: 'Stockho SI',
    role: { fr: 'Technical Lead / Ingénieur Système', en: 'Technical Lead / System Engineer' },
    period: '2010 - 2012',
    description: {
      fr: 'Gestion de plateformes e-commerce à fort trafic (Etam, Christian Louboutin, The Kooples, Jennyfer...). Pilotage technique et automatisation de l\'infrastructure.',
      en: 'Managing high-traffic e-commerce platforms (Etam, Christian Louboutin, The Kooples, Jennyfer...). Technical leadership and infrastructure automation.',
    },
    highlights: {
      fr: [
        'Plateformes e-commerce Magento à fort trafic',
        'Appui technique et pilotage de l\'équipe de production',
        'Développement d\'outils d\'automatisation',
        'Gestion de la sécurité (Firewall, VLAN, Reverse Proxy)',
      ],
      en: [
        'High-traffic Magento e-commerce platforms',
        'Technical support and production team leadership',
        'Automation tool development',
        'Security management (Firewall, VLAN, Reverse Proxy)',
      ],
    },
  },
  {
    company: 'Novactive',
    role: { fr: 'Administrateur Système', en: 'System Administrator' },
    period: '2007 - 2010',
    location: 'Paris',
    description: {
      fr: 'Gestion de l\'ensemble de l\'infrastructure du département hébergement. Firewall, load balancers, serveurs Apache et MySQL.',
      en: 'Managing the entire hosting department infrastructure. Firewall, load balancers, Apache and MySQL servers.',
    },
    highlights: {
      fr: [
        'Gestion complète de l\'infrastructure d\'hébergement',
        'Optimisation des configurations serveur',
        'Firewall, load balancers, Apache, MySQL',
      ],
      en: [
        'Full hosting infrastructure management',
        'Server configuration optimization',
        'Firewall, load balancers, Apache, MySQL',
      ],
    },
  },
];

export interface Education {
  school: string;
  degree: Record<Lang, string>;
  period: string;
}

export const education: Education[] = [
  {
    school: 'EPITECH - European Institute of Technology',
    degree: {
      fr: 'Master, Technologies de l\'Information',
      en: 'Master\'s degree, Information Technology',
    },
    period: '2005 - 2010',
  },
  {
    school: 'Lycée Blaise Pascal',
    degree: {
      fr: 'Baccalauréat Scientifique, Option Sciences de l\'Ingénieur',
      en: 'Scientific Baccalaureate, Engineering Sciences',
    },
    period: '2005',
  },
];
