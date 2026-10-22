export type Locale = "pt" | "en";

export interface NavItem {
  id: string;
  label: string;
}

export interface ExperienceClient {
  name: string;
  summary: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
  clients?: ExperienceClient[];
}

export interface Project {
  name: string;
  kind: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  course: string;
  institution: string;
  period: string;
  current?: boolean;
}

export interface Certificate {
  title: string;
  issuer: string;
  /** Formato AAAA-MM, exibido conforme o idioma. */
  date: string;
  url: string;
}

export interface Content {
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    status: string;
    primaryCta: string;
    secondaryCta: string;
    cvCta: string;
  };
  stack: {
    title: string;
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  experience: {
    label: string;
    title: string;
    present: string;
    clientsLabel: string;
    items: ExperienceItem[];
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    repo: string;
    live: string;
    items: Project[];
  };
  education: {
    label: string;
    title: string;
    items: EducationItem[];
    certificatesTitle: string;
    showAll: string;
    showLess: string;
  };
  contact: {
    label: string;
    title: string;
    text: string;
    copy: string;
    copied: string;
  };
  footer: {
    builtWith: string;
    backToTop: string;
  };
  a11y: {
    toggleTheme: string;
    toggleLanguage: string;
    openMenu: string;
    closeMenu: string;
  };
}
