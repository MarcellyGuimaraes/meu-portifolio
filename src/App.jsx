import React, { useState, useEffect } from 'react';
import { personalInfo, skills, projects } from './data/personalData';
import { experiences, courses } from './data/experienceData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Efeito de scroll para Navbar e Seções Ativas
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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
      <Navbar 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrolled={scrolled}
        scrollTo={scrollTo}
      />
      <Hero personalInfo={personalInfo} scrollTo={scrollTo} />
      <About personalInfo={personalInfo} />
      <Skills skillsData={skills} />
      <Projects projects={projects} personalInfo={personalInfo} />
      <Experience experiences={experiences} courses={courses} />
      <Contact personalInfo={personalInfo} />
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default App;