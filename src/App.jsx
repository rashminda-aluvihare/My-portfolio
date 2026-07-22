import { useState, useEffect, useRef } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark'; // dark default
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync theme to document element and local storage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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
          observer.unobserve(entry.target); // animate once
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Apply scroll reveal to all sections except home/hero (which loads instantly)
    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach((sec) => {
      sec.classList.add('reveal-on-scroll');
      observer.observe(sec);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Separate scroll threshold check for top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Background animated canvas */}
      <Background />

      {/* Navbar navigation dock */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Page Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Activities />
        <Contact />
      </main>

      {/* Footer Area */}
      <footer
        style={{
          borderTop: '1px solid var(--card-border)',
          background: 'var(--bg-secondary)',
          padding: '40px 0',
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
        }}
      >

      </footer>

      {/* Scroll to Top Trigger */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            background: 'var(--accent-cyan)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 242, 254, 0.4)',
            transition: 'var(--transition-bounce)',
            zIndex: 99,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 242, 254, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 242, 254, 0.4)';
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
