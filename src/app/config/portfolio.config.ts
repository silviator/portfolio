export type SectionId = 'hero' | 'experience' | 'projects' | 'about' | 'contact';

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  surfaceColor: string;
  textColor: string;
  mutedTextColor: string;
  fontFamily: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
}

export interface HeroConfig {
  name: string;
  role: string;
  location: string;
  availability: string;
  avatarUrl: string;
  summary: string;
}

export interface Technology {
  name: string;
  icon?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string;
  technologies: Technology[];
}

export interface ProjectItem {
  name: string;
  description: string;
  link?: string;
  repository?: string;
  technologies: Technology[];
}

export interface ContactConfig {
  email: string;
  github?: string;
  linkedin?: string;
  location?: string;
}

export interface AboutConfig {
  title: string;
  body: string;
}

export interface NavigationItem {
  section: SectionId;
  label: string;
}

export interface NavigationConfig {
  items: NavigationItem[];
}

export interface SectionsConfig {
  order: SectionId[];
}

export interface PortfolioConfig {
  siteTitle: string;
  hero: HeroConfig;
  about: AboutConfig;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  contact: ContactConfig;
  socials: SocialLink[];
  navigation: NavigationConfig;
  sections: SectionsConfig;
  theme: ThemeConfig;
}

export const portfolioConfig: PortfolioConfig = {
  siteTitle: 'Portfolio · Desarrollador Web',
  hero: {
    name: 'Nombre Apellido',
    role: 'Desarrollador Web',
    location: 'Ciudad, País',
    availability: 'Disponible para nuevas oportunidades',
    avatarUrl: '/image.png',
    summary:
      'Resumen de mi perfil técnico.',
  },
  about: {
    title: 'Sobre mí',
    body:
      'Texto de ejemplo sobre mi.',
  },
  experience: [
    {
      company: 'Empresa Demo',
      role: 'Desarrollador Front-End',
      startDate: 'Ene 2023',
      endDate: 'Actualidad',
      location: 'Remoto',
      description:
        'Colaboración en el desarrollo de interfaces web modernas y mantenimiento de aplicaciones existentes.',
      technologies: [
        { name: 'Angular', icon: '/icons/angular.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'HTML5', icon: '/icons/html5.svg' },
        { name: 'CSS', icon: '/icons/css_old.svg' },
      ],
    },
    {
      company: 'Proyecto personal',
      role: 'Aplicación web demo',
      startDate: 'Sep 2022',
      endDate: 'Dic 2022',
      description:
        'Proyecto personal para practicar desarrollo full-stack y puesta en producción de una aplicación web.',
      technologies: [{ name: 'Angular', icon: '/icons/angular.svg' }],
    },
  ],
  projects: [
    {
      name: 'Portfolio demo',
      description:
        'Landing page de ejemplo para mostrar experiencia, proyectos y formas de contacto.',
      link: 'https://example.com',
      technologies: [
        { name: 'Angular', icon: '/icons/angular.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'CSS', icon: '/icons/css_old.svg' },
      ],
    },
    {
      name: 'Ejemplo de proyecto',
      description:
        'Proyecto de ejemplo. Cámbialo por uno de tus propios proyectos, añadiendo descripción, enlace y tecnologías utilizadas.',
      technologies: [
        { name: 'Tecnología 1' },
        { name: 'Tecnología 2' },
      ],
    },
  ],
  contact: {
    email: 'tu-email@ejemplo.com',
    github: 'https://github.com/tu-usuario',
    linkedin: 'https://www.linkedin.com/in/tu-perfil/',
    location: 'Ciudad, País',
  },
  socials: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com',
    },
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com',
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:tu-email@ejemplo.com',
    },
  ],
  navigation: {
    items: [
      { section: 'experience', label: 'Experiencia' },
      { section: 'projects', label: 'Proyectos' },
      { section: 'about', label: 'Sobre mí' },
      { section: 'contact', label: 'Contacto' },
    ],
  },
  sections: {
    order: ['hero', 'experience', 'projects', 'about', 'contact'],
  },
  theme: {
    primaryColor: '#22d3ee',
    secondaryColor: '#facc15',
    backgroundColor: '#020617',
    surfaceColor: '#0f172a',
    textColor: '#e5e7eb',
    mutedTextColor: '#94a3b8',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif',
  },
};
