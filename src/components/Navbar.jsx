import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme = 'dark', toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const isDark = theme === 'dark';

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
      className="portfolio-navbar"
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
        background: isDark
          ? scrolled ? 'rgba(11, 15, 25, 0.94)' : 'rgba(11, 15, 25, 0.85)'
          : scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(226, 232, 240, 0.95)',
        boxShadow: isDark
          ? scrolled ? '0 12px 34px rgba(0, 0, 0, 0.55)' : '0 6px 22px rgba(0, 0, 0, 0.35)'
          : scrolled ? '0 10px 30px rgba(15, 23, 42, 0.08)' : '0 4px 18px rgba(15, 23, 42, 0.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Desktop Navigation Items */}
      <div
        className="nav-links-desktop"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
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

            const linkColor = isDark
              ? isActive ? '#38BDF8' : '#94A3B8'
              : isActive ? '#2563EB' : '#475569';

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    color: linkColor,
                    textDecoration: 'none',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.88rem',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    padding: '6px 4px',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = isDark ? '#38BDF8' : '#2563EB')}
                  onMouseLeave={(e) => (e.target.style.color = linkColor)}
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
                        background: isDark ? '#38BDF8' : '#2563EB',
                        borderRadius: '2px',
                        boxShadow: isDark
                          ? '0 0 10px rgba(56, 189, 248, 0.7)'
                          : '0 0 8px rgba(37, 99, 235, 0.5)',
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Theme Toggle Button (Desktop) */}
        {toggleTheme && (
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(241, 245, 249, 0.95)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(226, 232, 240, 0.9)',
              color: isDark ? '#F59E0B' : '#475569',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(15,23,42,0.04)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(20deg) scale(1.08)';
              e.currentTarget.style.color = isDark ? '#FBBF24' : '#2563EB';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.color = isDark ? '#F59E0B' : '#475569';
            }}
          >
            {isDark ? <Sun size={17} strokeWidth={2.4} /> : <Moon size={16} strokeWidth={2.3} />}
          </button>
        )}

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

      {/* Mobile Bar: Theme Toggle + Hamburger Menu Button */}
      <div className="mobile-bar-wrapper" style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
        {toggleTheme && (
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              background: isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(226, 232, 240, 0.95)',
              cursor: 'pointer',
              color: isDark ? '#F59E0B' : '#475569',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.2s ease',
            }}
          >
            {isDark ? <Sun size={18} strokeWidth={2.4} /> : <Moon size={18} strokeWidth={2.3} />}
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: isOpen
              ? '#2563EB'
              : isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: isOpen
              ? '1px solid #2563EB'
              : isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(226, 232, 240, 0.95)',
            cursor: 'pointer',
            color: isOpen ? '#FFFFFF' : isDark ? '#F8FAFC' : '#0F172A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
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
            background: isDark ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.14)' : '1px solid rgba(226, 232, 240, 0.95)',
            borderRadius: '22px',
            padding: '18px 16px',
            boxShadow: isDark
              ? '0 20px 45px rgba(0, 0, 0, 0.6)'
              : '0 20px 45px rgba(15, 23, 42, 0.16)',
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
                      color: isActive
                        ? isDark ? '#38BDF8' : '#2563EB'
                        : isDark ? '#CBD5E1' : '#334155',
                      fontWeight: isActive ? 700 : 600,
                      textDecoration: 'none',
                      fontSize: '0.94rem',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      background: isActive
                        ? isDark ? 'rgba(37, 99, 235, 0.2)' : '#EFF6FF'
                        : 'transparent',
                      fontFamily: 'var(--font-display)',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: isDark ? '#38BDF8' : '#2563EB',
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            style={{
              height: '1px',
              background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(226, 232, 240, 0.9)',
              margin: '4px 0',
            }}
          />

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
          nav.portfolio-navbar {
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
