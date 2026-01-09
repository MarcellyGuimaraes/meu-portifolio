import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = ({ experiences, courses }) => {
  return (
    <section id="experience" className="py-24 px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-red-600 font-mono text-xl">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experiência & Formação</h2>
          <div className="h-px bg-neutral-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experiências Profissionais */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-red-500 w-6 h-6" />
              <h3 className="text-2xl font-bold text-white">Experiências</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-neutral-800 hover:border-red-600/50 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-neutral-950 border-2 border-red-600 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                        <p className="text-red-500 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-400 text-sm">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="text-xs font-mono bg-neutral-900 text-red-400 px-2 py-1 rounded border border-neutral-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cursos e Formação */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-red-500 w-6 h-6" />
              <h3 className="text-2xl font-bold text-white">Formação</h3>
            </div>
            <div className="space-y-6">
              {courses.map((course, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-neutral-800 hover:border-red-600/50 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-neutral-950 border-2 border-red-600 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-white">{course.title}</h4>
                        <p className="text-red-500 font-medium">{course.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-400 text-sm">
                        <Calendar size={14} />
                        <span>{course.period}</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">{course.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {course.technologies.map((tech, i) => (
                        <span key={i} className="text-xs font-mono bg-neutral-900 text-red-400 px-2 py-1 rounded border border-neutral-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
