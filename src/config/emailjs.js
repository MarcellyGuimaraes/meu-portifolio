// Configuração do EmailJS
// IMPORTANTE: Preencha estas variáveis com suas credenciais do EmailJS
// Você pode obter essas credenciais em: https://www.emailjs.com/
// Para produção no Netlify, configure as variáveis no painel: Site settings > Environment variables

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';

// Log de debug apenas em desenvolvimento
if (import.meta.env.DEV) {
  console.log('📧 EmailJS Config Status:', {
    publicKey: publicKey ? '✅ Configurado' : '❌ Não configurado',
    serviceId: serviceId ? '✅ Configurado' : '❌ Não configurado',
    templateId: templateId ? '✅ Configurado' : '❌ Não configurado',
  });
  
  if (!publicKey || !serviceId || !templateId) {
    console.warn('⚠️ EmailJS não está totalmente configurado. O formulário usará fallback mailto:');
    console.warn('📖 Para configurar no Netlify, veja: NETLIFY_SETUP.md');
  }
}

// Expõe no window para verificação no console do navegador (apenas em dev)
if (import.meta.env.DEV && typeof window !== 'undefined') {
  window.__EMAILJS_CONFIG__ = {
    publicKey: publicKey ? '✅ Configurado' : '❌ Não configurado',
    serviceId: serviceId ? '✅ Configurado' : '❌ Não configurado',
    templateId: templateId ? '✅ Configurado' : '❌ Não configurado',
    isConfigured: !!(publicKey && serviceId && templateId),
  };
  console.log('💡 Dica: Digite window.__EMAILJS_CONFIG__ no console para verificar o status');
}

export const emailjsConfig = {
  // Seu Public Key do EmailJS (encontrado em Account > API Keys)
  publicKey,
  
  // ID do seu serviço de email (encontrado em Email Services)
  serviceId,
  
  // ID do template de email (encontrado em Email Templates)
  templateId,
  
  // Verifica se está totalmente configurado
  isConfigured: !!(publicKey && serviceId && templateId),
};
