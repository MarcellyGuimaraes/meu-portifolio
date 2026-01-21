import { Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#111111] relative" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-red-600 font-mono text-xl" aria-hidden="true">01.</span>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-white">O Que Eu Faço</h2>
          <div className="h-px bg-neutral-700 flex-grow max-w-xs" aria-hidden="true"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 text-neutral-300 space-y-4 leading-relaxed text-lg">
            <p>
              Especialista em <span className="text-white font-medium">Criação de Landing Pages, Sites Institucionais e Sistemas Web</span> usando <span className="text-white font-medium">React</span>. Atuo como desenvolvedora freelancer em <span className="text-white font-medium">Feira de Santana, Bahia</span>, entregando soluções web completas e responsivas.
            </p>
            <p>
              Desenvolvo <span className="text-white font-medium">Aplicações Web Modernas</span> com foco em performance, experiência do usuário e design responsivo. Minha expertise inclui desenvolvimento Front-end com React, Vue.js e Next.js, além de Back-end com Laravel e Node.js.
            </p>
            <p>
              Crio <span className="text-white font-medium">Sites Responsivos</span> e <span className="text-white font-medium">Aplicações Web</span> que resolvem problemas reais de negócios. Trabalho com Landing Pages otimizadas para conversão, Sites Institucionais profissionais e Sistemas Web personalizados para empresas.
            </p>
            <p>
              Com experiência em projetos freelancer (Upwork e 99Freelas), entendo a importância de entregar soluções que funcionam, dentro do prazo e com qualidade profissional. Cada projeto é desenvolvido com atenção aos detalhes, performance e usabilidade.
            </p>
          </div>
          <div className="md:col-span-2 relative group" aria-hidden="true">
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
