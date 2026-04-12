import fr from './fr';
import en from './en';

export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export const defaultLang = 'fr';

export type Lang = keyof typeof languages;

const translations = { fr, en } as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof fr): string {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

// Maps FR page paths to EN equivalents and vice versa
const pathMap: Record<string, Record<Lang, string>> = {
  home: { fr: '/', en: '/en/' },
  parcours: { fr: '/parcours/', en: '/en/journey/' },
  experience: { fr: '/experience/', en: '/en/experience/' },
  realisations: { fr: '/realisations/', en: '/en/projects/' },
  engagements: { fr: '/engagements/', en: '/en/commitments/' },
  cv: { fr: '/cv/', en: '/en/cv/' },
};

export function getLocalizedPath(currentPath: string, targetLang: Lang): string {
  for (const page of Object.values(pathMap)) {
    for (const [, path] of Object.entries(page)) {
      if (currentPath === path || currentPath === path.slice(0, -1)) {
        return page[targetLang];
      }
    }
  }
  return targetLang === 'fr' ? '/' : '/en/';
}

export function getNavLinks(lang: Lang) {
  const t = useTranslations(lang);
  return [
    { href: pathMap.parcours[lang], label: t('nav.parcours') },
    { href: pathMap.experience[lang], label: t('nav.experience') },
    { href: pathMap.realisations[lang], label: t('nav.realisations') },
    { href: pathMap.engagements[lang], label: t('nav.engagements') },
  ];
}
