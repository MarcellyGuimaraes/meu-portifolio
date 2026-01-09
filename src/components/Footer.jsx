import { Github, Linkedin } from 'lucide-react';

const Footer = ({ personalInfo }) => {
  return (
    <footer className="bg-black py-8 border-t border-red-900/20 text-center">
      <div className="flex justify-center gap-6 mb-4 text-neutral-500">
         <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors"><Github size={20} /></a>
         <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors"><Linkedin size={20} /></a>
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
