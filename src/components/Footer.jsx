import { Github, Linkedin } from 'lucide-react';

const Footer = ({ personalInfo }) => {
  const handleGitHubClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'github_click',
        location: 'footer'
      });
    }
  };

  const handleLinkedInClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'contact_click',
        contact_type: 'linkedin',
        location: 'footer'
      });
    }
  };

  return (
    <footer className="bg-black py-8 border-t border-red-900/20 text-center">
      <div className="flex justify-center gap-6 mb-4 text-neutral-500">
         <a href={personalInfo.github} target="_blank" rel="noreferrer" onClick={handleGitHubClick} className="hover:text-red-500 transition-colors"><Github size={20} /></a>
         <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" onClick={handleLinkedInClick} className="hover:text-red-500 transition-colors"><Linkedin size={20} /></a>
      </div>
      <p className="text-neutral-600 text-sm font-mono">
        Desenvolvido por <span className="text-red-600">{personalInfo.name}</span>
      </p>
      <p className="text-neutral-700 text-xs mt-2">
        React • Tailwind • Lucide
      </p>
    </footer>
  );
};

export default Footer;
