import { personalInfo, skills, projects, services } from '../data/personalData';
import { experiences } from '../data/experienceData';

const StructuredData = () => {
  // Person Schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    description: personalInfo.tagline,
    email: personalInfo.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Feira de Santana',
      addressRegion: 'BA',
      addressCountry: 'BR',
    },
    sameAs: [
      personalInfo.linkedin,
      personalInfo.github,
    ],
    knowsAbout: skills.flatMap(skill => skill.items),
    alumniOf: experiences.map(exp => ({
      '@type': 'Organization',
      name: exp.company,
    })),
  };

  // ProfessionalService Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${personalInfo.name} - Desenvolvimento Web`,
    description: personalInfo.tagline,
    provider: {
      '@type': 'Person',
      name: personalInfo.name,
      email: personalInfo.email,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    serviceType: services.map(service => service.title),
  };

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${personalInfo.name} - Portfolio`,
    description: personalInfo.tagline,
    url: 'https://celly-guimaraes-dev.netlify.app/',
    author: {
      '@type': 'Person',
      name: personalInfo.name,
    },
  };

  // Portfolio Schema
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${personalInfo.name} - Portfolio`,
    creator: {
      '@type': 'Person',
      name: personalInfo.name,
    },
    about: projects.map(project => ({
      '@type': 'SoftwareApplication',
      name: project.title,
      description: project.description,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
};

export default StructuredData;
