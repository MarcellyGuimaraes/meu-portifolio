// Configuração do EmailJS
// IMPORTANTE: Preencha estas variáveis com suas credenciais do EmailJS
// Você pode obter essas credenciais em: https://www.emailjs.com/

export const emailjsConfig = {
  // Seu Public Key do EmailJS (encontrado em Account > API Keys)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  
  // ID do seu serviço de email (encontrado em Email Services)
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  
  // ID do template de email (encontrado em Email Templates)
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
};
