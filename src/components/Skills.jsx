import { Layout, Server, Smartphone } from 'lucide-react';

const Skills = ({ skillsData }) => {
  const iconMap = {
    Layout: Layout,
    Server: Server,
    Smartphone: Smartphone
  };

  return (
    <section id="skills" className="py-24 px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-end">
          <div className="h-px bg-neutral-700 flex-grow max-w-xs"></div>
          <span className="text-red-600 font-mono text-xl">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Minha Stack</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((skill, idx) => {
            const IconComponent = iconMap[skill.iconType];
            return (
              <div key={idx} className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:bg-neutral-900 hover:border-red-900/50 transition-all duration-300 group hover:-translate-y-2">
                <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
