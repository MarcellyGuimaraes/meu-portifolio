import { Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#111111] relative" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-red-600 font-mono text-xl" aria-hidden="true">01.</span>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-white heading-font">O Que Eu Faço</h2>
          <div className="h-px bg-neutral-700 flex-grow max-w-xs" aria-hidden="true"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 text-neutral-300 space-y-6 leading-relaxed text-base md:text-lg">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 heading-font">
              PARA NEGÓCIOS QUE PRECISAM DE PRESENÇA DIGITAL FORTE
            </p>
            <p>
              Eu ajudo empresas e profissionais a terem <span className="text-white font-medium">sites profissionais, landing pages que convertem</span> e <span className="text-white font-medium">sistemas web sob medida</span>. Atuo como desenvolvedora freelancer em <span className="text-white font-medium">Feira de Santana (BA)</span>, atendendo clientes em todo o Brasil.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-white mb-2 heading-font">Como posso te ajudar hoje</h3>
                <ul className="text-sm space-y-1.5 list-disc list-inside text-neutral-300">
                  <li>Site institucional que passa credibilidade para sua marca.</li>
                  <li>Landing pages focadas em captar contatos e vendas.</li>
                  <li>Sistemas web para organizar processos do seu negócio.</li>
                </ul>
              </div>
              <div className="bg-neutral-900/40 border border-neutral-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-white mb-2 heading-font">Minha forma de trabalho</h3>
                <ul className="text-sm space-y-1.5 list-disc list-inside text-neutral-300">
                  <li>Alinhamento claro de objetivos e prazos.</li>
                  <li>Foco em performance, responsividade e UX.</li>
                  <li>Entrega acompanhada de ajustes finos e suporte inicial.</li>
                </ul>
              </div>
            </div>
            <p>
              Trago experiência com projetos freelancer em plataformas como <span className="text-white font-medium">Upwork, 99Freelas e Fiverr</span>, sempre com foco em entregar soluções que realmente ajudam o negócio do cliente, e não apenas “mais um site na internet”.
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
