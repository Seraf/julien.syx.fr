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
    skills: ['AWS', 'GCP', 'Azure', 'Terraform', 'Kubernetes', 'Docker', 'Linux'],
  },
  {
    category: { fr: 'DevOps & Automatisation', en: 'DevOps & Automation' },
    icon: 'cog',
    skills: ['CI/CD', 'Internal Developer Portal', 'Monitoring', 'Infrastructure as Code', 'Git'],
  },
  {
    category: { fr: 'Développement', en: 'Development' },
    icon: 'code',
    skills: ['Python', 'Go', 'TypeScript', 'Shell/Bash', 'API REST', 'SQL'],
  },
  {
    category: { fr: 'IA & Outils', en: 'AI & Tooling' },
    icon: 'sparkles',
    skills: ['LLMs', 'Claude', 'Claude Code', 'Cursor', 'GitHub Copilot', 'Prompt Engineering', 'Agentic Workflows'],
  },
  {
    category: { fr: 'Leadership & Stratégie', en: 'Leadership & Strategy' },
    icon: 'users',
    skills: ['Project / Product Management', 'Team Management', 'Remote Leadership', 'Recrutement', 'Stratégie Produit'],
  },
  {
    category: { fr: 'Langues', en: 'Languages' },
    icon: 'globe',
    skills: ['Français (natif)', 'English (professional)', 'Japanese (A2)'],
  },
];
