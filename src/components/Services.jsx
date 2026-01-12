import { Code, Paintbrush, Smartphone, Database, Search, Settings } from 'lucide-react';

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
  };

  return (
    <section id="services" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-red-600 font-mono text-xl">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Serviços</h2>
          <div className="h-px bg-neutral-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconType];
            return (
              <button
                key={idx}
                onClick={() => handleServiceClick(service.title)}
                className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900 hover:border-red-600/50 transition-all duration-300 group text-left cursor-pointer"
              >
                <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
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
