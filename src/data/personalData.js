// Dados Pessoais Baseados na Análise
export const personalInfo = {
  name: "Marcelly Guimarães",
  role: "Desenvolvedora Front-end & UI Enthusiast",
  tagline: "Crio sites profissionais, landing pages e sistemas web sob medida que geram resultados reais para o seu negócio.",
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

// Projetos (Clientes em produção e projetos pessoais)
export const projects = [
  {
    title: "Gaia Pet Sitter",
    type: "client",
    client: "Gaia Pet Sitter",
    description: "Landing page para um serviço de pet sitter em Feira de Santana. Estrutura pensada para gerar confiança, apresentar os serviços e facilitar o agendamento via WhatsApp.",
    result: "Facilita a divulgação do serviço e o recebimento de pedidos de visita diretamente pelo WhatsApp.",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/MarcellyGuimaraes/gaia-petsitter-project",
    demoLink: "https://gaiapetsitterfsa.netlify.app",
    featured: true
  },
  {
    title: "Buscar Planos",
    type: "client",
    client: "BuscarPlanos",
    description: "Plataforma para comparação de planos de saúde, com fluxo em etapas, detecção de localização e exibição de tabela oficial de planos 2026.",
    result: "Ajuda usuários a encontrarem planos de saúde adequados de forma simples, organizada e visualmente clara.",
    tags: ["Laravel", "Blade", "Bootstrap", "MySQL"],
    link: "https://github.com/MarcellyGuimaraes/saude-select",
    demoLink: "https://buscarplanos.com.br",
    featured: true
  },
  {
    title: "RobloxUniverse",
    type: "client",
    client: "RobloxUniverse",
    description: "Portal de notícias, guias e dicas sobre o universo Roblox, com artigos em destaque, newsletter e estrutura otimizada para conteúdo recorrente.",
    result: "Organiza o conteúdo do cliente e fortalece a presença digital junto à comunidade de jogadores.",
    tags: ["WordPress", "Blog", "Conteúdo"],
    demoLink: "https://blozx.com",
    featured: false
  },
  {
    title: "Horrorflix",
    type: "personal",
    description: "Interface de streaming focada em filmes de terror, consumindo APIs externas de filmes. Explora organização de catálogo, UI temática e consumo de dados assíncronos.",
    tags: ["JavaScript", "API Rest", "CSS3", "HTML5"],
    link: "https://github.com/MarcellyGuimaraes/Horrorflix",
    demoLink: "https://horrorflix-celly.netlify.app",
    featured: false
  },
  {
    title: "VUTTR (Very Useful Tools)",
    type: "personal",
    description: "Aplicação Full Stack para gerenciar um repositório de ferramentas úteis. Inclui criação de API, autenticação e front-end moderno para listagem, busca e organização.",
    tags: ["React", "Node.js", "Axios", "Styled Components"],
    link: "https://github.com/MarcellyGuimaraes/vuttr-app",
    demoLink: "https://vuttr-app-celly.netlify.app",
    featured: false
  },
  {
    title: "Mobile CRUD App",
    type: "personal",
    description: "Aplicativo móvel para gerenciamento de dados, com operações de CRUD, demonstrando versatilidade entre desenvolvimento web e mobile.",
    tags: ["React Native", "Java", "Android Studio"],
    link: "https://github.com/MarcellyGuimaraes/react-native-crud",
    featured: false
  }
];

// Serviços Oferecidos
export const services = [
  {
    title: "Desenvolvimento Web",
    iconType: "Code",
    description: "Pacote ideal para empresas e profissionais que precisam de um site institucional ou landing page profissional. Inclui layout personalizado, responsivo, integração com WhatsApp e formulário de contato."
  },
  {
    title: "Design UI/UX",
    iconType: "Paintbrush",
    description: "Criação ou refino visual de interfaces com foco em conversão e experiência do usuário. Ideal para quem já tem um projeto no ar, mas sente que o visual não representa o nível do negócio."
  },
  {
    title: "Desenvolvimento Mobile",
    iconType: "Smartphone",
    description: "Aplicativos móveis multiplataforma com React Native, ideais para negócios que querem chegar ao bolso do cliente sem investir em dois códigos diferentes (Android e iOS)."
  },
  {
    title: "Desenvolvimento Back-end",
    iconType: "Database",
    description: "Criação de APIs RESTful, integração com bancos de dados e lógica de negócio para sistemas web. Indicado para quem precisa tirar um sistema interno do papel ou modernizar o que já existe."
  },
  {
    title: "SEO & Otimização",
    iconType: "Search",
    description: "Otimização técnica para mecanismos de busca (SEO) e performance, melhorando tempo de carregamento, estrutura de conteúdo e boas práticas para ranquear melhor no Google."
  },
  {
    title: "Manutenção & Suporte",
    iconType: "Settings",
    description: "Atualizações, correções, melhorias evolutivas e suporte contínuo para manter seu site ou sistema sempre saudável, seguro e atualizado."
  }
];
