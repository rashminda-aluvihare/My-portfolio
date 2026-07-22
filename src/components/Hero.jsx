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

          {/* Highlighted Social & Contact Profiles */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '16px',
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
                padding: '10px 18px',
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
                padding: '10px 18px',
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

            <a
              href="mailto:rashmindaluvihare@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 18px',
                borderRadius: '12px',
                background: 'rgba(155, 81, 224, 0.12)',
                border: '1px solid rgba(155, 81, 224, 0.4)',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.88rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(155, 81, 224, 0.18)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(155, 81, 224, 0.25)';
                e.currentTarget.style.borderColor = 'var(--accent-purple)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(155, 81, 224, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(155, 81, 224, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(155, 81, 224, 0.4)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(155, 81, 224, 0.18)';
              }}
            >
              <Mail size={18} style={{ color: 'var(--accent-purple)' }} />
              <span>Email Me</span>
            </a>

            <a
              href="https://wa.me/94779743901?text=Hi%20Rashminda,%20I%20saw%20your%20portfolio!"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 18px',
                borderRadius: '12px',
                background: 'rgba(37, 211, 102, 0.12)',
                border: '1px solid rgba(37, 211, 102, 0.4)',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.88rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(37, 211, 102, 0.25)';
                e.currentTarget.style.borderColor = '#25D366';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(37, 211, 102, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.4)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.2)';
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ color: '#25D366' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
              <span>WhatsApp</span>
              <ExternalLink size={13} style={{ opacity: 0.7 }} />
            </a>
          </div>
        </div>

        {/* Right column: Terminal window */}
        <div
          className="glass-panel"
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
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
