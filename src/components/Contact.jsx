import { Linkedin } from 'lucide-react';

const Contact = ({ personalInfo }) => {
  return (
    <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-2xl mx-auto">
        <p className="text-red-500 font-mono mb-6">04. Vamos conversar?</p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
          Entre em Contato
        </h2>
        <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
          Estou sempre em busca de novos desafios e oportunidades para colaborar em projetos incríveis. 
          Seja para um freelance, uma proposta full-time ou apenas um networking, 
          minha caixa de entrada está aberta!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="px-8 py-4 bg-transparent border-2 border-red-600 text-red-500 font-bold rounded hover:bg-red-600 hover:text-white transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
          >
            Diga Olá
          </a>
          <a 
             href={personalInfo.linkedin}
             target="_blank"
             rel="noreferrer"
             className="px-8 py-4 bg-neutral-900 border border-neutral-800 text-white font-bold rounded hover:bg-neutral-800 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Linkedin size={20} /> Conectar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
