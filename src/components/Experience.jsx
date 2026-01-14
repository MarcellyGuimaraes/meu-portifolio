import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = ({ experiences, courses }) => {
  // Função para extrair data inicial do período (em timestamp para ordenação)
  const getStartDate = (period) => {
    // Mapeamento de meses em português
    const monthMap = {
      'jan': 0, 'fev': 1, 'mar': 2, 'abr': 3, 'mai': 4, 'jun': 5,
      'jul': 6, 'ago': 7, 'set': 8, 'out': 9, 'nov': 10, 'dez': 11
    };
    
    // Tenta encontrar padrão "Mês YYYY" ou "MM YYYY"
    const monthYearMatch = period.match(/(\w{3})\s+(\d{4})/i);
    if (monthYearMatch) {
      const month = monthMap[monthYearMatch[1].toLowerCase().substring(0, 3)];
      const year = parseInt(monthYearMatch[2]);
      if (month !== undefined) {
        return new Date(year, month).getTime();
      }
    }
    
    // Tenta encontrar apenas o ano "YYYY"
    const yearMatch = period.match(/(\d{4})/);
    if (yearMatch) {
      return new Date(parseInt(yearMatch[1]), 0).getTime();
    }
    
    // Para períodos sem data clara (como "Contínuo"), retorna um valor muito alto (vai para o final)
    return 9999999999999;
  };

  // Ordenar experiências da mais antiga para a mais recente
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = getStartDate(a.period);
    const dateB = getStartDate(b.period);
    return dateA - dateB; // Ordem crescente (mais antiga primeiro)
  });

  // Ordenar cursos da mais antiga para a mais recente
  const sortedCourses = [...courses].sort((a, b) => {
    const dateA = getStartDate(a.period);
    const dateB = getStartDate(b.period);
    return dateA - dateB; // Ordem crescente (mais antiga primeiro)
  });

  return (
    <section id="experience" className="py-24 px-6 bg-neutral-950" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-red-600 font-mono text-xl" aria-hidden="true">04.</span>
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-white">Experiência & Formação</h2>
          <div className="h-px bg-neutral-700 flex-grow max-w-xs" aria-hidden="true"></div>
        </div>

        <div className="flex flex-col gap-12">
          {/* Experiências Profissionais */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-red-500 w-6 h-6" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white">Experiências</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {sortedExperiences.map((exp, idx) => (
                <article key={idx} className="relative pl-8 border-l-2 border-neutral-800 hover:border-red-600/50 transition-colors" role="listitem">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-neutral-950 border-2 border-red-600 rounded-full" aria-hidden="true"></div>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                        <p className="text-red-500 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-300 text-sm">
                        <Calendar size={14} aria-hidden="true" />
                        <time>{exp.period}</time>
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2" role="list">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="text-xs font-mono bg-neutral-900 text-red-400 px-2 py-1 rounded border border-neutral-800" role="listitem">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Cursos e Formação */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-red-500 w-6 h-6" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white">Formação</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {sortedCourses.map((course, idx) => (
                <article key={idx} className="relative pl-8 border-l-2 border-neutral-800 hover:border-red-600/50 transition-colors" role="listitem">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-neutral-950 border-2 border-red-600 rounded-full" aria-hidden="true"></div>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-white">{course.title}</h4>
                        <p className="text-red-500 font-medium">{course.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-300 text-sm">
                        <Calendar size={14} aria-hidden="true" />
                        <time>{course.period}</time>
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{course.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2" role="list">
                      {course.technologies.map((tech, i) => (
                        <span key={i} className="text-xs font-mono bg-neutral-900 text-red-400 px-2 py-1 rounded border border-neutral-800" role="listitem">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
