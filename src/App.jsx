import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FullPortfolioBackground from './components/FullPortfolioBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import FloatingControls from './components/FloatingControls';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px -30px -30px 0px',
      threshold: 0.05,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach((sec) => {
      sec.classList.add('reveal-on-scroll');
      observer.observe(sec);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Full Portfolio Ambient Background Animation */}
      <FullPortfolioBackground />

      {/* Fixed top Navbar dock */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Page Sections */}
      <main style={{ position: 'relative' }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Skills />
        <Activities />
        <Blogs />
        <Contact />
      </main>

      {/* Fixed Right-Side Social Dock & Scroll to Top */}
      <FloatingControls theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}
