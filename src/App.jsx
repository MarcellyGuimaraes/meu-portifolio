import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Layout, 
  Smartphone, 
  Server, 
  PenTool,
  Menu, 
  X, 
  ChevronDown,
  MapPin
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Dados Pessoais Baseados na Análise
  const personalInfo = {
    name: "Marcelly Guimarães",
    role: "Desenvolvedora Front-end & UI Enthusiast",
    tagline: "Transformando ideias complexas em interfaces visuais impactantes.",
    location: "Feira de Santana, BA",
    linkedin: "https://www.linkedin.com/in/marcellyguimaraes/",
    github: "https://github.com/MarcellyGuimaraes",
    email: "souzaguimaraesmarcelly@gmail.com", // Placeholder para contato
    about: `Minha jornada com tecnologia começou cedo, aos 14 anos, influenciada pelo ambiente familiar de desenvolvimento. Hoje, atuo como freelancer criando soluções web completas. Não escrevo apenas código; foco na Experiência do Usuário (UX/UI) para entregar produtos que são tão funcionais quanto bonitos. Tenho uma alma "Full Stack", transitando com facilidade entre o refino do Front-end e a robustez do Back-end.`
  };

  // Stack Tecnológica (Baseada no GitHub + Perfil Profissional)
  const skills = [
    { 
      name: "Front-end & UI", 
      icon: <Layout className="w-8 h-8" />, 
      description: "Criação de interfaces responsivas e pixel-perfect.",
      items: ["React.js", "Vue.js", "Next.js", "Tailwind CSS", "Bootstrap", "Figma"] 
    },
    { 
      name: "Back-end & DB", 
      icon: <Server className="w-8 h-8" />, 
      description: "Lógica robusta e gerenciamento de dados.",
      items: ["PHP (Laravel)", "Node.js", "Python (Django)", "MySQL", "SQL Server"] 
    },
    { 
      name: "Mobile & Tools", 
      icon: <Smartphone className="w-8 h-8" />, 
      description: "Desenvolvimento multiplataforma e DevOps básico.",
      items: ["React Native", "Docker", "Git/GitHub", "Linux", "Netlify"] 
    }
  ];

  // Projetos (Baseados nos repositórios analisados)
  const projects = [
    {
      title: "Horrorflix",
      description: "Um clone de interface de streaming focado em filmes de terror. O projeto consome APIs externas de filmes, demonstrando manipulação avançada de DOM, design responsivo e consumo de dados assíncronos.",
      tags: ["JavaScript", "API Rest", "CSS3", "HTML5"],
      link: "https://github.com/MarcellyGuimaraes", // Link genérico para o perfil
      featured: true
    },
    {
      title: "VUTTR (Very Useful Tools)",
      description: "Aplicação Full Stack para gerenciar um repositório de ferramentas úteis. Desafio técnico que envolveu criação de API, autenticação e um front-end moderno para listagem e busca.",
      tags: ["React", "Node.js", "Axios", "Styled Components"],
      link: "https://github.com/MarcellyGuimaraes",
      featured: false
    },
    {
      title: "Mobile CRUD App",
      description: "Aplicativo móvel desenvolvido para operações de gerenciamento de dados. Demonstra a versatilidade em transitar do desenvolvimento web para o ecossistema mobile nativo.",
      tags: ["React Native", "Java", "Android Studio"],
      link: "https://github.com/MarcellyGuimaraes",
      featured: false
    },
    {
      title: "Soluções Freelance",
      description: "Diversos projetos comerciais entregues via Upwork e 99Freelas, focando em sites institucionais e sistemas de gestão personalizados para pequenas empresas.",
      tags: ["WordPress", "PHP", "Web Design", "SEO"],
      link: "https://www.linkedin.com/in/marcellyguimaraes/",
      featured: false
    }
  ];

  // Efeito de scroll para Navbar e Seções Ativas
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-red-600 selection:text-black">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/95 backdrop-blur-md border-b border-red-900/30 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-2xl font-bold tracking-tighter cursor-pointer group"
            onClick={() => scrollTo('home')}
          >
            <span className="text-white group-hover:text-red-500 transition-colors">M</span>
            <span className="text-red-600">.</span>
            <span className="text-white group-hover:text-red-500 transition-colors">G</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Sobre', 'Habilidades', 'Projetos'].map((item) => {
               const id = item.toLowerCase() === 'sobre' ? 'about' : item.toLowerCase() === 'habilidades' ? 'skills' : 'projects';
               return (
                <button 
                  key={item}
                  onClick={() => scrollTo(id)}
                  className={`text-sm font-medium uppercase tracking-widest hover:text-red-500 transition-colors ${activeSection === id ? 'text-red-500' : 'text-neutral-400'}`}
                >
                  {item}
                </button>
               )
            })}
            <button 
              onClick={() => scrollTo('contact')}
              className="px-5 py-2 border border-red-600 text-red-500 rounded text-sm font-bold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.1)] hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              Contato
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-neutral-950 z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 px-6`}>
           <div className="flex flex-col space-y-6">
            {['Home', 'Sobre', 'Habilidades', 'Projetos', 'Contato'].map((item) => {
               const id = item.toLowerCase() === 'home' ? 'home' : item.toLowerCase() === 'sobre' ? 'about' : item.toLowerCase() === 'habilidades' ? 'skills' : item.toLowerCase() === 'projetos' ? 'projects' : 'contact';
               return (
                <button 
                  key={item}
                  onClick={() => scrollTo(id)}
                  className="text-2xl font-bold text-white hover:text-red-500 text-left border-b border-neutral-800 pb-4"
                >
                  {item}
                </button>
               )
            })}
           </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-neutral-900/50 border border-red-900/30 rounded-full px-4 py-1 text-sm text-red-400">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              <span>Disponível para projetos freelance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Olá, eu sou <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                {personalInfo.name}
              </span>
            </h1>
            
            <p className="text-xl text-neutral-400 max-w-lg leading-relaxed border-l-4 border-red-600 pl-6">
              {personalInfo.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => scrollTo('projects')}
                className="px-8 py-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-all shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:scale-105"
              >
                Ver Meu Trabalho
              </button>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-4 bg-transparent border border-neutral-700 text-white font-bold rounded hover:border-red-600 hover:text-red-500 transition-all flex items-center justify-center gap-2"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8 text-neutral-500">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors"><Mail size={24} /></a>
              <div className="w-px h-8 bg-neutral-800"></div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-red-500" />
                {personalInfo.location}
              </div>
            </div>
          </div>
          
          {/* Abstract Visual Representation */}
          <div className="relative hidden md:flex justify-center items-center">
            <div className="relative w-80 h-96 border-2 border-neutral-800 rounded-lg bg-neutral-900/50 backdrop-blur-sm transform rotate-6 hover:rotate-0 transition-all duration-500 z-10 flex flex-col p-6 shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-neutral-600"></div>
                <div className="w-3 h-3 rounded-full bg-neutral-600"></div>
              </div>
              <div className="space-y-3 font-mono text-xs text-neutral-400">
                <div className="flex"><span className="text-red-500 mr-2">const</span> <span className="text-white">developer</span> = {'{'}</div>
                <div className="pl-4">name: <span className="text-green-400">'{personalInfo.name}'</span>,</div>
                <div className="pl-4">skills: ['React', 'Laravel', 'UI'],</div>
                <div className="pl-4">status: <span className="text-green-400">'Ready to code'</span></div>
                <div>{'}'};</div>
                <div className="h-20"></div>
                <div className="text-neutral-600">// Focada em performance</div>
                <div className="text-neutral-600">// e design de alta qualidade</div>
              </div>
              <div className="mt-auto flex justify-end">
                <Code className="text-red-600 opacity-20 w-24 h-24" />
              </div>
            </div>
            <div className="absolute w-80 h-96 border border-red-900/30 rounded-lg bg-red-900/5 transform -rotate-6 z-0"></div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-600">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-900 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-red-600 font-mono text-xl">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Sobre Mim</h2>
            <div className="h-px bg-neutral-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 text-neutral-300 space-y-4 leading-relaxed text-lg">
              <p>
                Olá! Sou Marcelly, uma desenvolvedora apaixonada que reside em <span className="text-white font-medium">Feira de Santana, Bahia</span>.
              </p>
              <p>
                Minha história com a programação começou de forma curiosa aos 14 anos, quando vi meu pai codando. Aquilo me fascinou. O que começou como curiosidade se tornou minha profissão.
              </p>
              <p>
                {personalInfo.about}
              </p>
              <p>
                Já atuei em diversos projetos como freelancer (via Upwork e 99Freelas), o que me deu a casca grossa necessária para entender prazos, clientes reais e a importância de entregar software que resolve problemas de verdade.
              </p>
            </div>
            <div className="md:col-span-2 relative group">
              <div className="absolute inset-0 border-2 border-red-600 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
              <div className="relative bg-neutral-800 rounded h-full min-h-[250px] flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                {/* Placeholder Image - replace with actual photo if available */}
                <div className="text-center p-6">
                  <Layout size={48} className="mx-auto text-red-500 mb-2" />
                  <span className="font-mono text-sm text-neutral-400">Front-end &<br/>Visual Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16 justify-end">
            <div className="h-px bg-neutral-700 flex-grow max-w-xs"></div>
            <span className="text-red-600 font-mono text-xl">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Minha Stack</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:bg-neutral-900 hover:border-red-900/50 transition-all duration-300 group hover:-translate-y-2">
                <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                <p className="text-neutral-400 text-sm mb-6 h-10">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-xs font-mono bg-neutral-800 text-red-400 px-2 py-1 rounded border border-neutral-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-red-600 font-mono text-xl">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projetos em Destaque</h2>
            <div className="h-px bg-neutral-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`flex flex-col bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800 hover:border-red-600/50 transition-all duration-300 group ${project.featured ? 'md:col-span-2 md:flex-row border-l-4 border-l-red-600' : ''}`}>
                
                {/* Content */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <FolderIcon className={`w-10 h-10 ${project.featured ? 'text-red-500' : 'text-neutral-600'}`} />
                      <div className="flex gap-4">
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                      </div>
                    </div>

                    <h3 className={`text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors ${project.featured ? 'text-3xl' : ''}`}>
                      {project.title}
                    </h3>
                    
                    <div className="bg-neutral-900/80 p-4 rounded-lg mb-6 backdrop-blur-sm">
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <ul className="flex flex-wrap gap-3 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <li key={tIdx} className="text-xs font-mono text-red-400">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white border-b-2 border-red-600 pb-1 hover:text-red-500 transition-colors font-bold tracking-wide"
            >
              Ver mais repositórios no GitHub <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
        {/* Background decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-2xl mx-auto">
          <p className="text-red-500 font-mono mb-6">04. Vamos conversar?</p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
            Entre em Contato
          </h2>
          <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
            Estou sempre em busca de novos desafios e oportunidades para colaborar em projetos incríveis. 
            Seja para um freelance, uma proposta full-time ou apenas um networking, 
            minha caixa de entrada está aberta!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-4 bg-transparent border-2 border-red-600 text-red-500 font-bold rounded hover:bg-red-600 hover:text-white transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              Diga Olá
            </a>
            <a 
               href={personalInfo.linkedin}
               target="_blank"
               rel="noreferrer"
               className="px-8 py-4 bg-neutral-900 border border-neutral-800 text-white font-bold rounded hover:bg-neutral-800 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Linkedin size={20} /> Conectar
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-red-900/20 text-center">
        <div className="flex justify-center gap-6 mb-4 text-neutral-500">
           <a href={personalInfo.github} className="hover:text-red-500 transition-colors"><Github size={20} /></a>
           <a href={personalInfo.linkedin} className="hover:text-red-500 transition-colors"><Linkedin size={20} /></a>
        </div>
        <p className="text-neutral-600 text-sm font-mono">
          Desenvolvido por <span className="text-red-600">{personalInfo.name}</span>
        </p>
        <p className="text-neutral-700 text-xs mt-2">
          React • Tailwind • Lucide
        </p>
      </footer>
    </div>
  );
};

// Helper Icon Component
const FolderIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

export default App;