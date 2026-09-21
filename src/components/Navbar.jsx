import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

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
          ? scrolled ? 'rgba(17, 28, 34, 0.96)' : 'rgba(17, 28, 34, 0.90)'
          : scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: isDark ? '1px solid #1E3A3A' : '1px solid rgba(226, 232, 240, 0.95)',
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
              ? isActive ? '#14B8A6' : '#94A3B8'
              : isActive ? '#14B8A6' : '#475569';

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
                  onMouseEnter={(e) => (e.target.style.color = '#14B8A6')}
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
                        background: '#2DD4BF',
                        borderRadius: '2px',
                        boxShadow: '0 0 10px rgba(45, 212, 191, 0.7)',
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
              background: isDark ? '#16252E' : 'rgba(241, 245, 249, 0.95)',
              border: isDark ? '1px solid #1E3A3A' : '1px solid rgba(226, 232, 240, 0.9)',
              color: isDark ? '#F59E0B' : '#475569',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(15,23,42,0.04)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(20deg) scale(1.08)';
              e.currentTarget.style.color = isDark ? '#FBBF24' : '#14B8A6';
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
            background: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: '0.82rem',
            fontWeight: 700,
            padding: '8px 18px',
            borderRadius: '999px',
            transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: '0 3px 12px rgba(20, 184, 166, 0.35)',
            fontFamily: 'var(--font-display)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.04)';
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(20, 184, 166, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 3px 12px rgba(20, 184, 166, 0.35)';
          }}
        >
          <span>Get in Touch</span>
        </a>
      </div>

      {/* Mobile Bar: Brand Link + Get in Touch + Theme Toggle + Hamburger Menu */}
      <div className="mobile-bar-wrapper" style={{ display: 'none', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '8px' }}>
        {/* Brand Logo / Name */}
        <a
          href="#home"
          className="mobile-brand-link"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2px',
            textDecoration: 'none',
            fontFamily: 'var(--font-display)',
            fontSize: '1.05rem',
            fontWeight: 800,
            color: isDark ? '#F8FAFC' : '#0F172A',
            letterSpacing: '-0.02em',
            padding: '4px 0',
          }}
        >
          <span>Rashminda</span>
          <span style={{ color: '#14B8A6' }}>.</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Header Contact CTA Button */}
          <a
            href="#contact"
            className="mobile-header-contact-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              background: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontSize: '0.78rem',
              fontWeight: 700,
              padding: '7px 13px',
              borderRadius: '999px',
              boxShadow: '0 3px 10px rgba(20, 184, 166, 0.35)',
              fontFamily: 'var(--font-display)',
              whiteSpace: 'nowrap',
            }}
          >
            <span>Touch</span>
          </a>

          {/* Theme Toggle Button (Mobile) */}
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              style={{
                background: isDark ? '#16252E' : 'rgba(241, 245, 249, 0.95)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: isDark ? '1px solid #1E3A3A' : '1px solid rgba(226, 232, 240, 0.95)',
                cursor: 'pointer',
                color: isDark ? '#F59E0B' : '#475569',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.2s ease',
              }}
            >
              {isDark ? <Sun size={17} strokeWidth={2.4} /> : <Moon size={16} strokeWidth={2.3} />}
            </button>
          )}

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: isOpen
                ? '#14B8A6'
                : isDark ? '#16252E' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: isOpen
                ? '1px solid #14B8A6'
                : isDark ? '1px solid #1E3A3A' : '1px solid rgba(226, 232, 240, 0.95)',
              cursor: 'pointer',
              color: isOpen ? '#FFFFFF' : isDark ? '#F8FAFC' : '#0F172A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={19} strokeWidth={2.4} /> : <Menu size={19} strokeWidth={2.3} />}
          </button>
        </div>
      </div>

      {/* Backdrop overlay for Mobile Drawer */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(11, 20, 25, 0.65)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex: 999,
          }}
        />
      )}

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          className="mobile-drawer-box"
          style={{
            position: 'fixed',
            top: '64px',
            right: '12px',
            left: '12px',
            maxWidth: '400px',
            margin: '0 auto',
            maxHeight: 'calc(100vh - 80px)',
            overflowY: 'auto',
            background: isDark ? '#111C22' : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: isDark ? '1px solid #1E3A3A' : '1px solid rgba(226, 232, 240, 0.95)',
            borderRadius: '20px',
            padding: '16px 14px',
            boxShadow: isDark
              ? '0 20px 45px rgba(0, 0, 0, 0.75)'
              : '0 20px 45px rgba(15, 23, 42, 0.16)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            zIndex: 1001,
            animation: 'modalFadeIn 0.22s ease',
          }}
        >
          {/* Header inside drawer with quick dismissal */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px 6px' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.08em', color: '#14B8A6', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
              Navigation Menu
            </span>
            <span style={{ fontSize: '0.74rem', color: isDark ? '#94A3B8' : '#64748B' }}>
              Select a section
            </span>
          </div>

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
                      minHeight: '48px',
                      color: isActive
                        ? '#14B8A6'
                        : isDark ? '#F8FAFC' : '#0F172A',
                      fontWeight: isActive ? 700 : 600,
                      textDecoration: 'none',
                      fontSize: '0.98rem',
                      padding: '10px 16px',
                      borderRadius: '12px',
                      background: isActive
                        ? isDark ? 'rgba(20, 184, 166, 0.16)' : 'rgba(20, 184, 166, 0.1)'
                        : 'transparent',
                      border: isActive
                        ? '1px solid rgba(20, 184, 166, 0.35)'
                        : '1px solid transparent',
                      fontFamily: 'var(--font-display)',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#14B8A6',
                          boxShadow: '0 0 10px rgba(20, 184, 166, 0.8)',
                        }}
                      />
                    ) : (
                      <span style={{ color: isDark ? '#475569' : '#CBD5E1', fontSize: '0.82rem' }}>→</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            style={{
              height: '1px',
              background: isDark ? '#1E3A3A' : 'rgba(226, 232, 240, 0.9)',
              margin: '2px 0',
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
              minHeight: '48px',
              background: 'linear-gradient(135deg, #14B8A6, #0F766E)',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.96rem',
              padding: '12px',
              borderRadius: '14px',
              textAlign: 'center',
              fontFamily: 'var(--font-display)',
              boxShadow: '0 4px 16px rgba(20, 184, 166, 0.4)',
            }}
          >
            <span>Get in Touch</span>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          nav.portfolio-navbar {
            top: 12px !important;
            left: 12px !important;
            right: 12px !important;
            transform: none !important;
            width: calc(100% - 24px) !important;
            max-width: 100% !important;
            border-radius: 999px !important;
            padding: 7px 14px !important;
            justify-content: space-between !important;
            box-sizing: border-box !important;
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
