import { useEffect, useState } from 'react';
import { Mail, ArrowRight, ExternalLink } from 'lucide-react';

export default function Hero() {
  const [roleText, setRoleText] = useState('');
  const roles = [
    'IT Undergraduate',
    'Aspiring Project Manager',
    'Business Analyst',
    'Full Stack Developer',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // Pause at end of role
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      setRoleText(
        isDeleting
          ? currentRole.substring(0, charIndex - 1)
          : currentRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="section hero-section-compact"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '85px',
        paddingBottom: '40px',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '18px',
        }}
      >
        {/* Welcome Tag */}
        <div
          style={{
            padding: '6px 16px',
            borderRadius: '999px',
            background: 'rgba(0, 242, 254, 0.1)',
            border: '1px solid rgba(0, 242, 254, 0.25)',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            color: 'var(--accent-cyan)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent-cyan)',
              display: 'inline-block',
              boxShadow: '0 0 8px var(--accent-cyan)',
            }}
          />
          AVAILABLE FOR PROJECTS
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.15,
            fontWeight: 800,
          }}
        >
          Hi, I'm <span className="gradient-text">Rashminda Aluvihare</span>
        </h1>

        <h2
          style={{
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            color: 'var(--text-secondary)',
            fontWeight: 500,
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          I am a&nbsp;
          <span style={{ color: 'var(--accent-purple)', borderRight: '2px solid var(--accent-purple)', paddingRight: '4px' }}>
            {roleText}
          </span>
        </h2>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.15rem',
            maxWidth: '640px',
            lineHeight: 1.6,
          }}
        >
          IT Undergraduate & Aspiring Project Manager & Business Analyst. Skilled in requirements gathering, Agile & Scrum methodologies, UML/BPMN modeling, and full-stack software development.
        </p>

        {/* Call to Actions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '8px',
          }}
        >
          <a href="#projects" className="btn-premium primary">
            <span>View Projects</span>
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-premium secondary">
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Highlighted Social Profiles */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '8px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://linkedin.com/in/rashminda-aluvihare-98604532b"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 20px',
              borderRadius: '12px',
              background: 'rgba(10, 102, 194, 0.12)',
              border: '1px solid rgba(10, 102, 194, 0.4)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.88rem',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 15px rgba(10, 102, 194, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(10, 102, 194, 0.25)';
              e.currentTarget.style.borderColor = '#0A66C2';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(10, 102, 194, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(10, 102, 194, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(10, 102, 194, 0.4)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(10, 102, 194, 0.2)';
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0A66C2' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span>LinkedIn</span>
            <ExternalLink size={13} style={{ opacity: 0.7 }} />
          </a>

          <a
            href="https://github.com/rashminda-aluvihare"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 20px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.88rem',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 15px rgba(0, 242, 254, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 242, 254, 0.15)';
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 242, 254, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.3)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 242, 254, 0.15)';
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-cyan)' }}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            <span>GitHub</span>
            <ExternalLink size={13} style={{ opacity: 0.7 }} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 50px !important;
          }
          .hero-grid div {
            align-items: center !important;
            justify-content: center !important;
          }
          .hero-grid .btn-premium {
            width: 100%;
            justify-content: center;
          }
          .hero-grid .glass-panel {
            transform: none !important;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
