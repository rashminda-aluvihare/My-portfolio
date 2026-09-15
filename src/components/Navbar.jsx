import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Activities', href: '#activities' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Contact', href: '#contact' },
  ];

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'experience', 'projects', 'education', 'certifications', 'skills', 'activities', 'blogs', 'contact'];
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
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'max-content',
        maxWidth: '92%',
        zIndex: 1000,
        borderRadius: '999px',
        padding: scrolled ? '7px 18px' : '9px 22px',
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(226, 232, 240, 0.95)',
        boxShadow: scrolled ? '0 10px 30px rgba(15, 23, 42, 0.08)' : '0 4px 18px rgba(15, 23, 42, 0.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Desktop Navigation Items */}
      <div
        className="nav-links-desktop"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
        }}
      >
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '14px',
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
                  style={{
                    color: isActive ? '#2563EB' : '#475569',
                    textDecoration: 'none',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.88rem',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    padding: '6px 4px',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#2563EB')}
                  onMouseLeave={(e) =>
                    (e.target.style.color = isActive ? '#2563EB' : '#475569')
                  }
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '4px',
                        right: '4px',
                        height: '2px',
                        background: '#2563EB',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(37, 99, 235, 0.5)',
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Nav Action: Get In Touch Pill Button */}
        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'linear-gradient(135deg, #2563EB 0%, #4F46E5 50%, #7C3AED 100%)',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: '0.82rem',
            fontWeight: 700,
            padding: '8px 18px',
            borderRadius: '999px',
            transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: '0 3px 12px rgba(37, 99, 235, 0.35)',
            fontFamily: 'var(--font-display)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.04)';
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(37, 99, 235, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 3px 12px rgba(37, 99, 235, 0.35)';
          }}
        >
          <span>Get in Touch</span>
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Mobile Bar: Hamburger Menu Button Only (Right Side) */}
      <div className="mobile-bar-wrapper" style={{ display: 'none' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: isOpen ? '#2563EB' : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: isOpen ? '1px solid #2563EB' : '1px solid rgba(226, 232, 240, 0.95)',
            cursor: 'pointer',
            color: isOpen ? '#FFFFFF' : '#0F172A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            boxShadow: '0 6px 20px rgba(15, 23, 42, 0.1)',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={20} strokeWidth={2.4} /> : <Menu size={20} strokeWidth={2.3} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          className="mobile-drawer-box"
          style={{
            position: 'fixed',
            top: '68px',
            right: '16px',
            left: 'auto',
            width: 'min(calc(100vw - 32px), 320px)',
            maxHeight: 'calc(100vh - 84px)',
            overflowY: 'auto',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(226, 232, 240, 0.95)',
            borderRadius: '22px',
            padding: '18px 16px',
            boxShadow: '0 20px 45px rgba(15, 23, 42, 0.16)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            zIndex: 1001,
            animation: 'modalFadeIn 0.2s ease',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
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
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: isActive ? '#2563EB' : '#334155',
                      fontWeight: isActive ? 700 : 600,
                      textDecoration: 'none',
                      fontSize: '0.94rem',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      background: isActive ? '#EFF6FF' : 'transparent',
                      fontFamily: 'var(--font-display)',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span>{item.label}</span>
                    {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB' }} />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ height: '1px', background: 'rgba(226, 232, 240, 0.9)', margin: '4px 0' }} />

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.92rem',
              padding: '12px',
              borderRadius: '999px',
              textAlign: 'center',
              fontFamily: 'var(--font-display)',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
            }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          nav {
            top: 16px !important;
            right: 16px !important;
            left: auto !important;
            transform: none !important;
            width: auto !important;
            max-width: unset !important;
            padding: 0 !important;
            border: none !important;
            background: transparent !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
          .nav-links-desktop {
            display: none !important;
          }
          .mobile-bar-wrapper {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
