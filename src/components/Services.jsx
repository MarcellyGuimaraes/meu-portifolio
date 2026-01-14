import { Code, Paintbrush, Smartphone, Database, Search, Settings } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const Services = ({ servicesData }) => {
  const iconMap = {
    Code: Code,
    Paintbrush: Paintbrush,
    Smartphone: Smartphone,
    Database: Database,
    Search: Search,
    Settings: Settings
  };

  const handleServiceClick = (serviceTitle) => {
    const phoneNumber = '5575991815241';
    const message = `Olá! Tenho interesse no serviço de ${serviceTitle}. Podemos conversar?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    trackEvent('generate_lead', {
      method: 'whatsapp',
      context: 'services_card',
      service_name: serviceTitle,
    });
  };

  return (
    <section id="services" className="py-24 px-6 bg-[#111111]" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-red-600 font-mono text-xl" aria-hidden="true">05.</span>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white">Serviços</h2>
          <div className="h-px bg-neutral-700 flex-grow max-w-xs" aria-hidden="true"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconType];
            return (
              <button
                key={idx}
                onClick={() => handleServiceClick(service.title)}
                className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900 hover:border-red-600/50 transition-all duration-300 group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-900"
                role="listitem"
                aria-label={`Contatar sobre serviço de ${service.title}`}
              >
                <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
