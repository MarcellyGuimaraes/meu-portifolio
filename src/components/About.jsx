import { Layout } from 'lucide-react';

const About = ({ personalInfo }) => {
  return (
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
  );
};

export default About;
