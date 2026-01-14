import { Linkedin, Mail, Github, ChevronDown, Code, MapPin } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const Hero = ({ personalInfo, scrollTo }) => {
  const handleCtaClick = () => {
    trackEvent('select_content', {
      content_type: 'cta_button',
      item_id: 'view_projects',
      location: 'hero',
    });
    scrollTo('projects');
  };

  const handleGitHubClick = () => {
    trackEvent('select_content', {
      content_type: 'social',
      item_id: 'github',
      location: 'hero',
    });
  };

  const handleEmailClick = () => {
    trackEvent('select_content', {
      content_type: 'contact',
      item_id: 'email',
      location: 'hero',
    });
  };

  const handleLinkedInClick = () => {
    trackEvent('select_content', {
      content_type: 'social',
      item_id: 'linkedin',
      location: 'hero',
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden" aria-label="Seção inicial">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -z-10 animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] -z-10" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-neutral-900/50 border border-red-900/30 rounded-full px-4 py-1 text-sm text-red-400" role="status" aria-live="polite">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" aria-hidden="true"></span>
            <span>Disponível para projetos freelance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Olá, eu sou <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              {personalInfo.name}
            </span>
          </h1>
          
          <p className="text-xl text-neutral-300 max-w-lg leading-relaxed border-l-4 border-red-600 pl-6">
            {personalInfo.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={handleCtaClick}
              className="px-8 py-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-all shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-900"
              aria-label="Ver projetos em destaque"
            >
              Ver Meu Trabalho
            </button>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer noopener"
              onClick={handleLinkedInClick}
              className="px-8 py-4 bg-transparent border border-neutral-700 text-white font-bold rounded hover:border-red-600 hover:text-red-500 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-900"
              aria-label="Visitar perfil no LinkedIn"
            >
              <Linkedin size={20} aria-hidden="true" /> LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 text-neutral-400" role="list">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer noopener" 
              onClick={handleGitHubClick} 
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
              aria-label="Visitar perfil no GitHub"
              role="listitem"
            >
              <Github size={24} aria-hidden="true" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              onClick={handleEmailClick} 
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
              aria-label={`Enviar email para ${personalInfo.email}`}
              role="listitem"
            >
              <Mail size={24} aria-hidden="true" />
            </a>
            <div className="w-px h-8 bg-neutral-800" aria-hidden="true"></div>
            <div className="flex items-center gap-2 text-sm text-neutral-300" role="listitem">
              <MapPin size={16} className="text-red-500" aria-hidden="true" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
        
        {/* Abstract Visual Representation */}
        <div className="relative hidden md:flex justify-center items-center" aria-hidden="true">
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

      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
        aria-label="Rolar para a próxima seção"
        onClick={(e) => {
          e.preventDefault();
          scrollTo('about');
        }}
      >
        <ChevronDown size={24} aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
