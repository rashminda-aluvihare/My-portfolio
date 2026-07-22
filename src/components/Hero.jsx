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
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
      }}
    >
      <div
        className="container hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        {/* Left column: Bio info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Welcome Tag */}
          <div
            style={{
              alignSelf: 'flex-start',
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
              gap: '6px',
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
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.1,
              fontWeight: 800,
            }}
          >
            Hi, I'm <br />
            <span className="gradient-text">Rashminda Aluvihare</span>
          </h1>

          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              color: 'var(--text-secondary)',
              fontWeight: 500,
              minHeight: '40px',
              display: 'flex',
              alignItems: 'center',
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
              fontSize: '1.1rem',
              maxWidth: '540px',
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
              gap: '16px',
              marginTop: '12px',
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

          {/* Socials Connection */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.05em' }}>
              CONNECT
            </span>
            <span style={{ width: '40px', height: '1px', background: 'var(--card-border)' }} />
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://github.com/rashminda-aluvihare"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'var(--transition-smooth)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--card-border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-cyan)';
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.transform = 'none';
                }}
                aria-label="GitHub Profile"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>

              <a
                href="https://linkedin.com/in/rashminda-aluvihare-98604532b"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'var(--transition-smooth)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--card-border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-blue)';
                  e.currentTarget.style.borderColor = 'var(--accent-blue)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.transform = 'none';
                }}
                aria-label="LinkedIn Profile"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right column: Terminal window */}
        <div
          className="glass-panel"
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
            transition: 'var(--transition-smooth)',
          }}
          onMouseMove={(e) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left - box.width / 2;
            const y = e.clientY - box.top - box.height / 2;
            card.style.transform = `perspective(1000px) rotateY(${x * 0.04}deg) rotateX(${-y * 0.04}deg) translateY(-5px)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg)';
          }}
        >
          {/* Terminal Title Bar */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '12px 18px',
              borderBottom: '1px solid var(--card-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
            </div>
            <span
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                fontFamily: 'monospace',
                fontWeight: 600,
              }}
            >
              rashminda_developer.json
            </span>
            <div style={{ width: '30px' }} />
          </div>

          {/* Terminal Body */}
          <div
            style={{
              padding: '24px',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              lineHeight: 1.6,
              color: 'var(--text-primary)',
            }}
          >
            <div style={{ color: 'var(--text-muted)' }}>{"{"}</div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-purple)' }}>"name"</span>: <span style={{ color: 'var(--accent-cyan)' }}>"Rashminda Aluvihare"</span>,
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-purple)' }}>"title"</span>: <span style={{ color: 'var(--accent-cyan)' }}>"IT Undergraduate | Aspiring PM & BA"</span>,
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-purple)' }}>"education"</span>: <span style={{ color: 'var(--text-primary)' }}>{"["}</span>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>"HNDIT @ SLIATE"</span>,
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>"DBF Level I (Reading) - IBSL"</span>
              </div>
              <div style={{ paddingLeft: '0px' }}>{"],"}</div>
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-purple)' }}>"interests"</span>: <span style={{ color: 'var(--text-primary)' }}>{"["}</span>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>"Project Management"</span>, <span style={{ color: 'var(--accent-cyan)' }}>"Business Analysis"</span>,
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>"Digital Banking"</span>, <span style={{ color: 'var(--accent-cyan)' }}>"FinTech"</span>, <span style={{ color: 'var(--accent-cyan)' }}>"System Analysis"</span>
              </div>
              <div style={{ paddingLeft: '0px' }}>{"],"}</div>
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-purple)' }}>"coreSkills"</span>: <span style={{ color: 'var(--text-primary)' }}>{"["}</span>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>"Agile & Scrum"</span>, <span style={{ color: 'var(--accent-cyan)' }}>"Project Planning"</span>,
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>"Requirements Gathering"</span>, <span style={{ color: 'var(--accent-cyan)' }}>"SQL"</span>,
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>"JavaScript (React)"</span>, <span style={{ color: 'var(--accent-cyan)' }}>"PHP"</span>, <span style={{ color: 'var(--accent-cyan)' }}>"MySQL"</span>
              </div>
              <div style={{ paddingLeft: '0px' }}>{"],"}</div>
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-purple)' }}>"location"</span>: <span style={{ color: 'var(--accent-cyan)' }}>"Colombo, Sri Lanka"</span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>{"}"}</div>
          </div>
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
