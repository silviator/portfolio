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
  siteTitle: 'Portfolio · Silvia Torres Melero',
  hero: {
    name: 'Silvia Torres Melero',
    role: 'Técnico Superior en Desarrollo de Aplicaciones Web',
    location: 'Rivas-Vaciamadrid, Madrid, España',
    availability: 'Disponible para nuevas oportunidades',
    avatarUrl: '/image.png',
    summary:
      'Técnico Superior en Desarrollo de Aplicaciones Web con sólida formación y amplia experiencia en el sector sanitario. Destaco por mi alta capacidad de aprendizaje, organización y atención al detalle, fusionando habilidades técnicas con un compromiso firme hacia la calidad y el trabajo en equipo. Busco nuevas oportunidades para aplicar y expandir mis conocimientos en desarrollo web, aportando iniciativa, creatividad y adaptabilidad en entornos digitales dinámicos.',
  },
  about: {
    title: 'Sobre mí',
    body:
      'Soy Técnico Superior en Desarrollo de Aplicaciones Web (actualmente cursando en Ilerna Online), con una trayectoria profesional de más de 15 años en el sector sanitario como Higienista Dental y Auxiliar de Clínica. Esta experiencia me ha dado una base sólida en atención al detalle, organización, trabajo en equipo y comunicación con personas.\n\nActualmente me estoy formando en tecnologías web modernas, habiendo completado cursos de Desarrollo Frontend con HTML, CSS y JavaScript (60h) y Gestión de proyectos software con Git y GitHub (50h), ambos de la Universidad Politécnica de Madrid.\n\nMe motiva especialmente la posibilidad de crear experiencias digitales útiles y accesibles, aplicando mi perfil analítico y mi orientación a la calidad en cada proyecto.',
  },
  experience: [
    {
      company: 'Azuara Dental',
      role: 'Higienista Dental y Auxiliar de Clínica',
      startDate: 'May 2008',
      endDate: 'May 2025',
      location: 'Madrid, España',
      description:
        'Realización de procedimientos de higiene bucodental. Apoyo al odontólogo en procedimientos dentales. Preparación y esterilización de materiales e instrumentos. Atención al paciente durante las consultas. Gestión de agendas y documentación clínica.',
      technologies: [
        { name: 'Atención al paciente' },
        { name: 'Gestión clínica' },
        { name: 'Organización' },
        { name: 'Trabajo en equipo' },
      ],
    },
    {
      company: 'Clínicas Dentales Segurident S.L.',
      role: 'Auxiliar de Clínica',
      startDate: '2008',
      endDate: '2008',
      location: 'Madrid, España',
      description:
        'Asistencia en tratamientos odontológicos. Mantenimiento de la limpieza y organización de la clínica. Apoyo en la atención al paciente.',
      technologies: [
        { name: 'Atención al paciente' },
        { name: 'Asistencia clínica' },
      ],
    },
    {
      company: 'Fundación para el Desarrollo Local',
      role: 'Auxiliar de Geriatría',
      startDate: '2008',
      endDate: '2008',
      location: 'Santo Tomé, Jaén, España',
      description:
        'Cuidado y apoyo a personas mayores. Ayuda en actividades diarias y monitoreo de la salud. Trabajo en equipo con profesionales del área sanitaria.',
      technologies: [
        { name: 'Cuidados geriátricos' },
        { name: 'Trabajo en equipo' },
      ],
    },
  ],
  projects: [
    {
      name: 'Portfolio Personal',
      description:
        'Portfolio web desarrollado para mostrar mi experiencia, proyectos y habilidades como desarrolladora web. Construido con tecnologías modernas de frontend.',
      link: 'https://github.com/silviator/',
      repository: 'https://github.com/silviator/',
      technologies: [
        { name: 'HTML5', icon: '/icons/html5.svg' },
        { name: 'CSS', icon: '/icons/css_old.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'Git', icon: '/icons/git.svg' },
      ],
    },
  ],
  contact: {
    email: 'silviatormel@gmail.com',
    github: 'https://github.com/silviator/',
    linkedin: 'https://www.linkedin.com/in/silvia-torres-melero-49bb4b44/',
    location: 'Rivas-Vaciamadrid, Madrid, España',
  },
  socials: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/silvia-torres-melero-49bb4b44/',
    },
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/silviator/',
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:silviatormel@gmail.com',
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
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
};