import { useState } from 'react';
import { Linkedin, Send, Mail } from 'lucide-react';

const Contact = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Usando mailto como fallback - para produção, integrar com EmailJS, Formspree, ou backend
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Contato do Portfolio')}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;

    // Simulação de envio (substitua por serviço real)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-neutral-900">
      {/* Background decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-red-600/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-red-500 font-mono mb-4 sm:mb-6 text-sm sm:text-base">06. Vamos conversar?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight px-2">
            Entre em Contato
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-2">
            Estou sempre em busca de novos desafios e oportunidades para colaborar em projetos incríveis. 
            Seja para um freelance, uma proposta full-time ou apenas um networking, 
            minha caixa de entrada está aberta!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 sm:py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all text-sm sm:text-base"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 sm:py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all text-sm sm:text-base"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 sm:py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all text-sm sm:text-base"
                placeholder="Assunto da mensagem"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2.5 sm:py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all resize-none text-sm sm:text-base"
                placeholder="Sua mensagem..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] text-sm sm:text-base"
            >
              {isSubmitting ? (
                <>Enviando...</>
              ) : (
                <>
                  <Send size={20} /> Enviar Mensagem
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="p-3 sm:p-4 bg-green-900/20 border border-green-700/50 rounded-lg text-green-400 text-xs sm:text-sm">
                Mensagem enviada! Verifique seu cliente de email.
              </div>
            )}
          </form>

          {/* Informações de Contato */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Outras formas de contato</h3>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-neutral-900/50 rounded-lg hover:bg-neutral-900 transition-colors border border-transparent hover:border-red-600/30 group"
              >
                <div className="p-2 sm:p-3 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors flex-shrink-0">
                  <Mail className="text-red-500" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-neutral-400 text-xs sm:text-sm">Email</p>
                  <p className="text-white font-medium text-sm sm:text-base break-words">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-neutral-900/50 rounded-lg hover:bg-neutral-900 transition-colors border border-transparent hover:border-red-600/30 group"
              >
                <div className="p-2 sm:p-3 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors flex-shrink-0">
                  <Linkedin className="text-red-500" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-neutral-400 text-xs sm:text-sm">LinkedIn</p>
                  <p className="text-white font-medium text-sm sm:text-base">Conectar no LinkedIn</p>
                </div>
              </a>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 sm:p-6">
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Respondo geralmente em até 24 horas. Se for urgente, me envie um email direto ou me procure no LinkedIn!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
