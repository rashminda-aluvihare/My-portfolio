import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Activities', href: '#activities' },
    { label: 'Contact', href: '#contact' },
  ];

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      // Scroll state for translucent background
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'skills', 'activities', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`glass-panel`}
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1100px',
        zIndex: 1000,
        borderRadius: '16px',
        padding: scrolled ? '10px 24px' : '16px 24px',
        background: scrolled ? 'var(--nav-bg)' : 'rgba(10, 13, 20, 0.25)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--card-border)',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'var(--transition-smooth)',
      }}
    >
      {/* Brand logo */}
      <a
        href="#home"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
          color: 'var(--text-primary)',
          fontWeight: 800,
          fontSize: '1.25rem',
          letterSpacing: '-0.02em',
        }}
      >
        <span className="gradient-text">Rashminda Aluvihare</span>
      </a>

      {/* Desktop Navigation Items */}
      <div
        className="nav-links-desktop"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '20px',
          }}
        >
          {navItems.map((item) => {
            const sectionName = item.href.substring(1);
            const isActive = activeSection === sectionName;

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'var(--transition-smooth)',
                    position: 'relative',
                    padding: '8px 4px',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-cyan)')}
                  onMouseLeave={(e) =>
                    (e.target.style.color = isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)')
                  }
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '4px',
                        right: '4px',
                        height: '2px',
                        background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px var(--accent-cyan)',
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Vertical divider */}
        <span style={{ height: '20px', width: '1px', background: 'var(--card-border)' }} />

        {/* Theme switcher */}
        <button
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px',
            borderRadius: '8px',
            transition: 'var(--transition-smooth)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.color = 'var(--accent-cyan)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* CV Download Button */}
        <button
          onClick={() => alert("CV download will be available soon! In the meantime, feel free to reach out via the Contact section.")}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '0.82rem',
            fontWeight: 700,
            background: 'rgba(0, 242, 254, 0.1)',
            border: '1px solid rgba(0, 242, 254, 0.25)',
            color: 'var(--accent-cyan)',
            cursor: 'pointer',
            transition: 'var(--transition-bounce)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent-cyan)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 242, 254, 0.1)';
            e.currentTarget.style.color = 'var(--accent-cyan)';
          }}
        >
          <Download size={14} />
          <span>CV</span>
        </button>
      </div>

      {/* Mobile menu controls */}
      <div
        className="nav-mobile-controls"
        style={{
          display: 'none',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <button
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            padding: '6px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Toggle Theme Mobile"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            left: 0,
            right: 0,
            background: 'var(--bg-secondary)',
            border: '1px solid var(--card-border)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            zIndex: 9999,
          }}
        >
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              listStyle: 'none',
              gap: '4px',
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item) => {
              const sectionName = item.href.substring(1);
              const isActive = activeSection === sectionName;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                      background: isActive ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                      textDecoration: 'none',
                      fontWeight: isActive ? 700 : 600,
                      fontSize: '1rem',
                      display: 'block',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      transition: 'all 0.2s ease',
                      border: isActive ? '1px solid rgba(0, 242, 254, 0.3)' : '1px solid transparent',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Injecting CSS specifically for responsive display toggle */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-mobile-controls {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
