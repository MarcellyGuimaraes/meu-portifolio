// Dados Pessoais Baseados na Análise
export const personalInfo = {
  name: "Marcelly Guimarães",
  role: "Desenvolvedora Front-end & UI Enthusiast",
  tagline: "Transformando ideias complexas em interfaces visuais impactantes.",
  location: "Feira de Santana, BA",
  linkedin: "https://www.linkedin.com/in/marcellyguimaraes/",
  github: "https://github.com/MarcellyGuimaraes",
  email: "souzaguimaraesmarcelly@gmail.com",
  about: `Minha jornada com tecnologia começou cedo, aos 14 anos, influenciada pelo ambiente familiar de desenvolvimento. Hoje, atuo como freelancer criando soluções web completas. Não escrevo apenas código; foco na Experiência do Usuário (UX/UI) para entregar produtos que são tão funcionais quanto bonitos. Tenho uma alma "Full Stack", transitando com facilidade entre o refino do Front-end e a robustez do Back-end.`
};

// Stack Tecnológica (Baseada no GitHub + Perfil Profissional)
export const skills = [
  { 
    name: "Front-end & UI", 
    iconType: "Layout", 
    description: "Criação de interfaces responsivas e pixel-perfect.",
    items: ["React.js", "Vue.js", "Next.js", "Tailwind CSS", "Bootstrap", "Figma"] 
  },
  { 
    name: "Back-end & DB", 
    iconType: "Server", 
    description: "Lógica robusta e gerenciamento de dados.",
    items: ["PHP (Laravel)", "Node.js", "Python (Django)", "MySQL", "SQL Server"] 
  },
  { 
    name: "Mobile & Tools", 
    iconType: "Smartphone", 
    description: "Desenvolvimento multiplataforma e DevOps básico.",
    items: ["React Native", "Docker", "Git/GitHub", "Linux", "Netlify"] 
  }
];

// Projetos (Baseados nos repositórios analisados)
export const projects = [
  {
    title: "Gaia Pet Sitter",
    description: "Landing page para um serviço de pet sitter em Feira de Santana. Inclui sistema de agendamento simples, que direciona o usuário para conversar e contratar via WhatsApp com apenas um clique.",
    tags: ["React", "Landing Page", "Agendamento", "WhatsApp", "Netlify"],
    link: "https://github.com/MarcellyGuimaraes/gaia-petsitter-project",
    demoLink: "https://gaiapetsitterfsa.netlify.app",
    featured: true
  },
  {
    title: "Horrorflix",
    description: "Um clone de interface de streaming focado em filmes de terror. O projeto consome APIs externas de filmes, demonstrando manipulação avançada de DOM, design responsivo e consumo de dados assíncronos.",
    tags: ["JavaScript", "API Rest", "CSS3", "HTML5"],
    link: "https://github.com/MarcellyGuimaraes/Horrorflix",
    demoLink: "https://horrorflix-celly.netlify.app",
    featured: false
  },
  {
    title: "VUTTR (Very Useful Tools)",
    description: "Aplicação Full Stack para gerenciar um repositório de ferramentas úteis. Desafio técnico que envolveu criação de API, autenticação e um front-end moderno para listagem e busca.",
    tags: ["React", "Node.js", "Axios", "Styled Components"],
    link: "https://github.com/MarcellyGuimaraes/vuttr-app",
    demoLink: "https://vuttr-app-celly.netlify.app",
    featured: false
  },
  {
    title: "Mobile CRUD App",
    description: "Aplicativo móvel desenvolvido para operações de gerenciamento de dados. Demonstra a versatilidade em transitar do desenvolvimento web para o ecossistema mobile nativo.",
    tags: ["React Native", "Java", "Android Studio"],
    link: "https://github.com/MarcellyGuimaraes/react-native-crud",
    featured: false
  },
  {
    title: "Soluções Freelance",
    description: "Diversos projetos comerciais entregues via Upwork e 99Freelas, focando em sites institucionais e sistemas de gestão personalizados para pequenas empresas.",
    tags: ["WordPress", "PHP", "Web Design", "SEO"],
    demoLink: "https://br.fiverr.com/s/YR86j3l",
    featured: false
  }
];
