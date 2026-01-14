import React, { useState, useEffect, lazy, Suspense } from 'react';
import { personalInfo, skills, projects, services } from './data/personalData';
import { experiences, courses } from './data/experienceData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StructuredData from './components/StructuredData';

// Lazy load components below the fold for better initial load performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Efeito de scroll para Navbar e Seções Ativas com throttling para performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          
          const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
          const scrollPosition = window.scrollY + 100;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
              setActiveSection(section);
              break; // Exit early once we find the active section
            }
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-red-600 selection:text-white">
      <StructuredData />
      {/* Skip link para acessibilidade */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navbar 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrolled={scrolled}
        scrollTo={scrollTo}
      />
      <main id="main-content">
        <Hero personalInfo={personalInfo} scrollTo={scrollTo} />
        <Suspense fallback={null}>
          <About personalInfo={personalInfo} />
          <Skills skillsData={skills} />
          <Projects projects={projects} personalInfo={personalInfo} />
          <Experience experiences={experiences} courses={courses} />
          <Services servicesData={services} />
          <Contact personalInfo={personalInfo} />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer personalInfo={personalInfo} />
      </Suspense>
    </div>
  );
};

export default App;