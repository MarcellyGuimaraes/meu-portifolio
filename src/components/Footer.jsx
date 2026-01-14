import { Github, Linkedin } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const Footer = ({ personalInfo }) => {
  const handleGitHubClick = () => {
    trackEvent('select_content', {
      content_type: 'social',
      item_id: 'github',
      location: 'footer',
    });
  };

  const handleLinkedInClick = () => {
    trackEvent('select_content', {
      content_type: 'social',
      item_id: 'linkedin',
      location: 'footer',
    });
  };

  return (
    <footer className="bg-black py-8 border-t border-red-900/20 text-center" role="contentinfo">
      <div className="flex justify-center gap-6 mb-4 text-neutral-500" role="list">
         <a 
           href={personalInfo.github} 
           target="_blank" 
           rel="noreferrer noopener" 
           onClick={handleGitHubClick} 
           className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black rounded"
           aria-label="Visitar perfil no GitHub"
           role="listitem"
         >
           <Github size={20} aria-hidden="true" />
         </a>
         <a 
           href={personalInfo.linkedin} 
           target="_blank" 
           rel="noreferrer noopener" 
           onClick={handleLinkedInClick} 
           className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black rounded"
           aria-label="Visitar perfil no LinkedIn"
           role="listitem"
         >
           <Linkedin size={20} aria-hidden="true" />
         </a>
      </div>
      <p className="text-neutral-400 text-sm font-mono">
        Desenvolvido por <span className="text-red-600">{personalInfo.name}</span>
      </p>
      <p className="text-neutral-500 text-xs mt-2">
        React • Tailwind • Lucide
      </p>
    </footer>
  );
};

export default Footer;
