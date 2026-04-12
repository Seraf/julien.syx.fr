import type { Lang } from '../i18n';

export interface SkillGroup {
  category: Record<Lang, string>;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: { fr: 'Cloud & Infrastructure', en: 'Cloud & Infrastructure' },
    icon: 'cloud',
    skills: ['AWS', 'GCP', 'Azure', 'OpenStack', 'Terraform', 'Kubernetes', 'Docker', 'Linux', 'Nginx', 'Solaris'],
  },
  {
    category: { fr: 'DevOps & Automatisation', en: 'DevOps & Automation' },
    icon: 'cog',
    skills: ['CI/CD', 'Ansible', 'GitHub Actions', 'GitLab CI', 'Monitoring', 'Infrastructure as Code', 'Git'],
  },
  {
    category: { fr: 'Developpement', en: 'Development' },
    icon: 'code',
    skills: ['Python', 'Go', 'JavaScript', 'TypeScript', 'Shell/Bash', 'API REST', 'SQL'],
  },
  {
    category: { fr: 'Leadership & Strategie', en: 'Leadership & Strategy' },
    icon: 'users',
    skills: ['Product Management', 'Team Management', 'Remote Leadership', 'Recrutement', 'Strategie Produit'],
  },
  {
    category: { fr: 'Langues', en: 'Languages' },
    icon: 'globe',
    skills: ['Francais (natif)', 'English (professional)', 'Japanese (A2)'],
  },
];
