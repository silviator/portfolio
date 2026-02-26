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

export const portfolioConfig: PortfolioConfig = { siteTitle: 'Portfolio · Silvia Torres Melero', hero: { name: 'Silvia Torres Melero', role: 'Técnico Superior en Desarrollo de Aplicaciones Web', location: 'Rivas-Vaciamadrid, Madrid, España', availability: 'Disponible para nuevas oportunidades', avatarUrl: '/image.png', summary: 'Desarrolladora web en formación con experiencia previa en el sector sanitario. Destaco por mi organización, atención al detalle y capacidad de aprendizaje. Actualmente amplío mis conocimientos en HTML, CSS, JavaScript y Git, buscando oportunidades para crecer en entornos frontend.', }, about: { title: 'Sobre mí', body: 'Soy Técnico Superior en Desarrollo de Aplicaciones Web (actualmente cursando en Ilerna Online), con una trayectoria profesional de más de 15 años en el sector sanitario como Higienista Dental y Auxiliar de Clínica. Esta experiencia me ha aportado una fuerte orientación al detalle, organización, trabajo en equipo y comunicación con personas.\n\n' + 'En mi transición al desarrollo web he completado los cursos **Desarrollo Frontend con HTML, CSS y JavaScript (60h)** y **Gestión de proyectos software con Git y GitHub (50h)**, ambos impartidos por la Universidad Politécnica de Madrid.\n\n' + 'Me motiva crear experiencias digitales útiles y accesibles, aplicando un enfoque analítico y orientado a la calidad en cada proyecto.', }, experience: [ { company: 'Universidad Politécnica de Madrid', role: 'Curso: Desarrollo Frontend con HTML, CSS y JavaScript', startDate: 'Dec 2024', endDate: 'Aug 2025', location: 'Madrid, España', description: 'Curso de 60 horas donde trabajé HTML, CSS y JavaScript, completando actividades de autoevaluación y prácticas orientadas al desarrollo frontend.', technologies: [ { name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, ], }, { company: 'Universidad Politécnica de Madrid', role: 'Curso: Gestión de proyectos software con Git y GitHub', startDate: 'Dec 2024', endDate: 'Aug 2025', location: 'Madrid, España', description: 'Curso de 50 horas centrado en control de versiones, flujos de trabajo, ramas, resolución de conflictos y uso profesional de GitHub.', technologies: [ { name: 'Git' }, { name: 'GitHub' }, ], }, { company: 'Azuara Dental', role: 'Higienista Dental y Auxiliar de Clínica', startDate: 'May 2008', endDate: 'May 2025', location: 'Madrid, España', description: 'Realización de procedimientos de higiene bucodental, apoyo al odontólogo, preparación y esterilización de materiales, atención al paciente y gestión de agendas y documentación clínica.', technologies: [ { name: 'Atención al paciente' }, { name: 'Gestión clínica' }, { name: 'Organización' }, { name: 'Trabajo en equipo' }, ], }, { company: 'Clínicas Dentales Segurident S.L.', role: 'Auxiliar de Clínica', startDate: '2008', endDate: '2008', location: 'Madrid, España', description: 'Asistencia en tratamientos odontológicos, mantenimiento de la limpieza y organización de la clínica y apoyo en la atención al paciente.', technologies: [ { name: 'Atención al paciente' }, { name: 'Asistencia clínica' }, ], }, { company: 'Fundación para el Desarrollo Local', role: 'Auxiliar de Geriatría', startDate: '2008', endDate: '2008', location: 'Santo Tomé, Jaén, España', description: 'Cuidado y apoyo a personas mayores, ayuda en actividades diarias, monitoreo de la salud y trabajo en equipo con profesionales del área sanitaria.', technologies: [ { name: 'Cuidados geriátricos' }, { name: 'Trabajo en equipo' }, ], }, ], projects: [ { name: 'Portfolio Personal', description: 'Portfolio web desarrollado con HTML, CSS y JavaScript para mostrar mi experiencia, proyectos y habilidades como desarrolladora web. Incluye diseño responsive, navegación por secciones y componentes reutilizables.', link: 'https://github.com/silviator/', repository: 'https://github.com/silviator/', technologies: [ { name: 'HTML5', icon: '/icons/html5.svg' }, { name: 'CSS', icon: '/icons/css_old.svg' }, { name: 'JavaScript', icon: '/icons/javascript.svg' }, { name: 'Git', icon: '/icons/git.svg' }, ], }, ], contact: { email: 'silviatormel@gmail.com', github: 'https://github.com/silviator/', linkedin: 'https://www.linkedin.com/in/silvia-torres-melero-49bb4b44/', location: 'Rivas-Vaciamadrid, Madrid, España', }, socials: [ { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/silvia-torres-melero-49bb4b44/', }, { id: 'github', label: 'GitHub', url: 'https://github.com/silviator/', }, { id: 'email', label: 'Email', url: 'mailto:silviatormel@gmail.com', }, ], navigation: { items: [ { section: 'experience', label: 'Experiencia' }, { section: 'projects', label: 'Proyectos' }, { section: 'about', label: 'Sobre mí' }, { section: 'contact', label: 'Contacto' }, ], }, sections: { order: ['hero', 'experience', 'projects', 'about', 'contact'], }, theme: { primaryColor: '#22d3ee', secondaryColor: '#facc15', backgroundColor: '#020617', surfaceColor: '#0f172a', textColor: '#e5e7eb', mutedTextColor: '#94a3b8', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', }, };