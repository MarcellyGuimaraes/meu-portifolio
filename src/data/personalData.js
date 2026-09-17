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
    items: ["React.js", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Figma"]
  },
  { 
    name: "Back-end & DB", 
    iconType: "Server", 
    description: "Lógica robusta e gerenciamento de dados.",
    items: ["PHP (Laravel)", "Node.js", "Supabase", "PostgreSQL", "MySQL", "Python (Django)"]
  },
  { 
    name: "Mobile & Tools", 
    iconType: "Smartphone", 
    description: "Desenvolvimento multiplataforma e DevOps básico.",
    items: ["React Native", "Docker", "Git/GitHub", "Linux", "Netlify"] 
  }
];

// Projetos (Sistemas em produção, projetos para clientes e desafios técnicos)
export const projects = [
  {
    title: "SindiproSE — Portal do Sindicato",
    type: "client",
    client: "SindiproSE",
    description: "Plataforma institucional completa para o Sindicato dos Provedores de Internet de Sergipe, reunindo três frentes no mesmo sistema: site público (notícias, convenções CCT/ACT, diretoria e parceiros), painel administrativo da diretoria para gestão de todo o conteúdo e área logada do associado com feed de comunicados e documentos privados.",
    result: "Centraliza comunicação, documentos e gestão de associados em um único sistema, com autenticação e permissões por perfil.",
    tags: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS"],
    link: "https://github.com/MarcellyGuimaraes/sindipro",
    demoLink: "https://sindipro-ten.vercel.app",
    featured: true
  },
  {
    title: "CRM Kikos Fitness",
    type: "personal",
    description: "CRM full stack de gestão de leads e negócios para times de vendas: funil em kanban com transição por arrastar e soltar, histórico de interações por comentários, ação de ganho/perdido e dashboard com indicadores por vendedor. Monorepo com TypeScript de ponta a ponta e validações compartilhadas entre back-end e front-end.",
    result: "Demo pública em nuvem (login: ana@kikos.com / kikos123) para explorar o funil, o dashboard e a gestão de leads.",
    tags: ["TypeScript", "React", "Node.js", "Monorepo"],
    link: "https://github.com/MarcellyGuimaraes/kikos-crm-teste-tecnico",
    demoLink: "https://crm-kikos.onrender.com",
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
    featured: false
  },
  {
    title: "NexCert — Certificados Digitais",
    type: "client",
    client: "NexCert",
    description: "Site institucional e comercial de uma certificadora digital, com apresentação da marca, planos de certificados (e-CPF, e-CNPJ A1/A3 e combos), preços, benefícios e chamadas para compra e atendimento via WhatsApp. Foco em clareza da oferta e conversão.",
    result: "Apresenta os produtos ICP-Brasil de forma organizada e direciona o cliente para a compra e o atendimento.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://next-cert-certificados.vercel.app",
    featured: false
  },
  {
    title: "Di Santinni — Home E-commerce",
    type: "personal",
    description: "Home mobile de e-commerce da marca Di Santinni, desenvolvida a partir do layout no Figma: hero em carrossel, catálogo, compra por tamanho, sacola e navegação SPA. Fidelidade ao design via CSS Modules e design tokens, com foco em acessibilidade (ARIA) e SEO.",
    tags: ["React 19", "Vite", "React Router", "CSS Modules"],
    link: "https://github.com/MarcellyGuimaraes/wicomm-disantinni",
    demoLink: "https://wicomm-disantinni.vercel.app",
    featured: false
  },
  {
    title: "Card Explorer — Magic",
    type: "personal",
    description: "Aplicação para busca e exploração de cartas de Magic: The Gathering, consumindo a API pública do Scryfall. Busca em tempo real, filtro pelas cinco cores de mana, detalhe em modal e identidade visual temática própria — tudo sem bibliotecas extras de UI ou data-fetching.",
    tags: ["React 19", "TypeScript", "Vite", "API Rest"],
    link: "https://github.com/MarcellyGuimaraes/magic-simbiox",
    demoLink: "https://magic-simbiox.vercel.app",
    featured: false
  },
  {
    title: "Gaia Pet Sitter",
    type: "client",
    client: "Gaia Pet Sitter",
    description: "Landing page para um serviço de pet sitter em Feira de Santana. Estrutura pensada para gerar confiança, apresentar os serviços e facilitar o agendamento via WhatsApp.",
    result: "Facilita a divulgação do serviço e o recebimento de pedidos de visita diretamente pelo WhatsApp.",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/MarcellyGuimaraes/gaia-petsitter-project",
    demoLink: "https://gaiapetsitterfsa.netlify.app",
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
