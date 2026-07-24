import { useEffect, useState } from 'react';
import { Mail, ArrowRight, ExternalLink, Download } from 'lucide-react';
import HeroBlockchainCanvas from './HeroBlockchainCanvas';
import profileImg from '../assets/profile.jpg';

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
        paddingTop: '130px',
        paddingBottom: '50px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blockchain Background Canvas strictly scoped to Home/Hero page */}
      <HeroBlockchainCanvas />

      <div className="container hero-grid-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-text-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Rashminda Aluvihare</span>
          </h1>

          <h2 className="hero-subtitle">
            I am a&nbsp;
            <span className="hero-typewriter">
              {roleText}
            </span>
          </h2>

          <p className="hero-description">
            HNDIT undergraduate specializing in Business Analysis and Project Management, with hands-on experience in full-stack development and fintech-oriented solutions.
          </p>

          {/* Call to Actions & Social Profiles */}
          <div className="hero-buttons-wrapper">
            {/* Main Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn-premium primary hero-btn">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
              <button
                onClick={() => alert("CV download will be available soon! In the meantime, feel free to reach out via the Contact section.")}
                className="btn-premium secondary hero-btn"
              >
                <Download size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span>Download CV</span>
              </button>
              <a href="#contact" className="btn-premium secondary hero-btn hero-btn-talk">
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Profiles */}
            <div className="hero-social-group">
              <a
                href="https://linkedin.com/in/rashminda-aluvihare-98604532b"
                target="_blank"
                rel="noreferrer"
                className="hero-social-btn linkedin"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0A66C2' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span>LinkedIn</span>
                <ExternalLink size={13} style={{ opacity: 0.7 }} />
              </a>

              <a
                href="https://github.com/rashminda-aluvihare"
                target="_blank"
                rel="noreferrer"
                className="hero-social-btn github"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-cyan)' }}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                <span>GitHub</span>
                <ExternalLink size={13} style={{ opacity: 0.7 }} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Avatar Photo */}
        <div className="hero-avatar-column">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-glow" />
            <div className="hero-avatar-ring">
              <img
                src={profileImg}
                alt="Rashminda Aluvihare"
                className="hero-avatar-img"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid-container {
          max-width: 1150px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 1;
        }

        .hero-text-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 18px;
        }

        .hero-title {
          font-size: clamp(2.4rem, 4.2vw, 3.8rem);
          line-height: 1.15;
          font-weight: 800;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 2.2vw, 1.8rem);
          color: var(--text-secondary);
          font-weight: 500;
          min-height: 40px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .hero-typewriter {
          color: var(--accent-purple);
          border-right: 2px solid var(--accent-purple);
          padding-right: 4px;
        }

        .hero-description {
          color: var(--text-secondary);
          font-size: 1.08rem;
          max-width: 600px;
          line-height: 1.6;
        }

        .hero-avatar-column {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-avatar-wrapper {
          position: relative;
        }

        .hero-avatar-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 242, 254, 0.35) 0%, rgba(155, 81, 224, 0.25) 60%, transparent 75%);
          filter: blur(25px);
          pointer-events: none;
        }

        .hero-avatar-ring {
          width: 240px;
          height: 240px;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
          box-shadow: 0 12px 35px rgba(0, 242, 254, 0.3);
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .hero-avatar-ring:hover {
          transform: scale(1.04);
          box-shadow: 0 16px 45px rgba(0, 242, 254, 0.5) !important;
        }

        .hero-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: 68% 25%;
          display: block;
        }

        .hero-buttons-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          width: 100%;
          max-width: 600px;
          margin-top: 6px;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          width: 100%;
          flex-wrap: wrap;
        }

        .hero-social-group {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          width: 100%;
          flex-wrap: wrap;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .hero-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: 12px;
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.88rem;
          transition: all 0.2s ease;
        }

        .hero-social-btn.linkedin {
          background: rgba(10, 102, 194, 0.12);
          border: 1px solid rgba(10, 102, 194, 0.4);
          box-shadow: 0 4px 15px rgba(10, 102, 194, 0.2);
        }

        .hero-social-btn.linkedin:hover {
          background: rgba(10, 102, 194, 0.25);
          border-color: #0A66C2;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(10, 102, 194, 0.45);
        }

        .hero-social-btn.github {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(0, 242, 254, 0.3);
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.15);
        }

        .hero-social-btn.github:hover {
          background: rgba(0, 242, 254, 0.15);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 242, 254, 0.35);
        }

        @media (max-width: 992px) {
          .hero-grid-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 24px;
          }

          .hero-avatar-column {
            order: -1;
          }

          .hero-avatar-glow {
            width: 160px;
            height: 160px;
            filter: blur(15px);
          }

          .hero-avatar-ring {
            width: 130px;
            height: 130px;
          }

          .hero-text-content {
            align-items: center;
            text-align: center;
          }

          .hero-subtitle {
            justify-content: center;
          }

          .hero-buttons-wrapper {
            align-items: center;
          }

          .hero-cta-group {
            justify-content: center;
          }

          .hero-social-group {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .hero-cta-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            width: 100%;
          }

          .hero-btn-talk {
            grid-column: 1 / -1;
            width: 100%;
          }

          .hero-btn {
            width: 100%;
            padding: 12px 10px;
            font-size: 0.88rem;
          }

          .hero-social-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            width: 100%;
          }

          .hero-social-btn {
            width: 100%;
            padding: 10px 10px;
            font-size: 0.85rem;
          }
      `}</style>
    </section>
  );
}


