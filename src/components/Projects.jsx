import { Github, ExternalLink } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

// Helper Icon Component
const FolderIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

const Projects = ({ projects, personalInfo }) => {
  const handleProjectGitHubClick = (projectTitle = null, location = 'projects_card') => {
    trackEvent('select_content', {
      content_type: 'project',
      item_id: 'github',
      location,
      project_title: projectTitle || null,
    });
  };

  const handleMoreReposClick = () => {
    trackEvent('select_content', {
      content_type: 'project',
      item_id: 'github',
      location: 'projects_footer',
    });
  };

  return (
    <section id="projects" className="py-24 bg-[#111111]" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-red-600 font-mono text-xl" aria-hidden="true">03.</span>
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-white">Exemplos de Sites Responsivos e Aplicações Web</h2>
          <div className="h-px bg-neutral-700 flex-grow max-w-xs" aria-hidden="true"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8" role="list">
          {projects.map((project, index) => (
            <article key={index} className={`flex flex-col bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800 hover:border-red-600/50 transition-all duration-300 group ${project.featured ? 'md:col-span-2 md:flex-row border-l-4 border-l-red-600' : ''}`} role="listitem">
              
              {/* Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <FolderIcon className={`w-10 h-10 ${project.featured ? 'text-red-500' : 'text-neutral-600'}`} aria-hidden="true" />
                  </div>

                  <h3 className={`text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors ${project.featured ? 'text-3xl' : ''}`}>
                    {project.title}
                  </h3>
                  
                  <div className="bg-neutral-900/80 p-4 rounded-lg mb-6 backdrop-blur-sm">
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <ul className="flex flex-wrap gap-3" role="list">
                    {project.tags.map((tag, tIdx) => (
                      <li key={tIdx} className="text-xs font-mono text-red-400" role="listitem">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-3 pt-2">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer noopener"
                      onClick={() => handleProjectGitHubClick(project.title, 'projects_card')}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-red-600/50 text-white rounded transition-all duration-300 hover:text-red-400 font-medium text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-950"
                      aria-label={`Ver projeto ${project.title} no GitHub`}
                    >
                      <Github size={18} aria-hidden="true" /> Ver no GitHub
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-red-600/50 hover:bg-red-600/10 text-red-500 hover:text-red-400 rounded transition-all duration-300 font-medium text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-950"
                        aria-label={`Ver demonstração do projeto ${project.title}`}
                      >
                        <ExternalLink size={18} aria-hidden="true" /> Ver Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer noopener"
            onClick={handleMoreReposClick}
            className="inline-flex items-center gap-2 text-white border-b-2 border-red-600 pb-1 hover:text-red-500 transition-colors font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
            aria-label="Ver mais repositórios no GitHub"
          >
            Ver mais repositórios no GitHub <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
