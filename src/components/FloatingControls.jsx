import React, { useState, useEffect } from 'react';
import { Mail, ArrowUp } from 'lucide-react';

export default function FloatingControls() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed Right-Side Vertical Floating Social Dock */}
      <aside aria-label="Social Channels" className="floating-social-dock">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rashminda-aluvihare/"
          target="_blank"
          rel="noreferrer"
          className="floating-social-btn"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" width="19" height="19" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span className="floating-social-tooltip">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rashminda-aluvihare"
          target="_blank"
          rel="noreferrer"
          className="floating-social-btn"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" width="19" height="19" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <span className="floating-social-tooltip">GitHub</span>
        </a>

        {/* Email */}
        <a
          href="mailto:rashmindaluvihare@gmail.com"
          className="floating-social-btn"
          aria-label="Email"
        >
          <Mail size={19} strokeWidth={2.2} />
          <span className="floating-social-tooltip">Email</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/94779743901?text=Hi%20Rashminda,%20I%20saw%20your%20portfolio!"
          target="_blank"
          rel="noreferrer"
          className="floating-social-btn"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
          </svg>
          <span className="floating-social-tooltip">WhatsApp</span>
        </a>
      </aside>

      {/* Floating Scroll to Top Pill */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="floating-scroll-top-btn"
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '20px',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
            color: '#FFFFFF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)',
            zIndex: 99998,
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
            e.currentTarget.style.boxShadow = '0 10px 24px rgba(37, 99, 235, 0.55)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
          }}
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      )}
    </>
  );
}
