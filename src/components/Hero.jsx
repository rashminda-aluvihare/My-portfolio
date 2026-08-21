import { useEffect, useState } from 'react';
import { Mail, ArrowRight, ExternalLink, Download, Code2, Terminal, Database, Sparkles } from 'lucide-react';
import HeroBlockchainCanvas from './HeroBlockchainCanvas';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const [roleText, setRoleText] = useState('');
  const roles = [
    'HNDIT Undergraduate',
    'Full Stack Developer',
    'Aspiring Business Analyst',
    'FinTech Enthusiast',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, stacks: 0, agile: 0 });

  // Animated Numbers Counter effect
  useEffect(() => {
    const duration = 1800; // Total animation time in ms
    const steps = 50;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Easing function (easeOutQuad) for natural decelerating calculation speed
      const easeOutQuad = (t) => t * (2 - t);
      const currentProgress = easeOutQuad(progress);

      setCounts({
        projects: Math.min(7, Math.floor(currentProgress * 7)),
        stacks: Math.min(10, Math.floor(currentProgress * 10)),
        agile: Math.min(100, Math.floor(currentProgress * 100)),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({ projects: 7, stacks: 10, agile: 100 });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

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
          {/* Live Availability Pill */}
          <div className="hero-status-pill">
            <span className="hero-status-dot"></span>
            <span className="hero-status-text">Open to Internship Opportunities & IT Projects</span>
          </div>

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
            HNDIT undergraduate specializing in Full-Stack Development and Business Analysis, with hands-on experience building FinTech-oriented solutions and Agile software delivery.
          </p>

          {/* Call to Actions & Social Profiles */}
          <div className="hero-buttons-wrapper">
            {/* Main Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn-premium primary hero-btn">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="/assets/Rashminda Aluvihare.pdf"
                download="Rashminda Aluvihare.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium secondary hero-btn"
              >
                <Download size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span>Download CV</span>
              </a>
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

            {/* Quick Impact Stats Bar */}
            <div className="hero-stats-row">
              <div className="hero-stat-item">
                <span className="hero-stat-number gradient-text">{counts.projects}+</span>
                <span className="hero-stat-label">Projects Built</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-item">
                <span className="hero-stat-number gradient-text">{counts.stacks}+</span>
                <span className="hero-stat-label">Tech Stacks</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-item">
                <span className="hero-stat-number gradient-text">{counts.agile}%</span>
                <span className="hero-stat-label">Agile & Responsive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Avatar Photo */}
        <div className="hero-avatar-column">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring">
              <img
                src={profileImg}
                alt="Rashminda Aluvihare"
                className="hero-avatar-img"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width="270"
                height="360"
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
          grid-template-columns: 1.1fr 0.9fr;
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
          gap: 16px;
        }

        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 16px;
          background: rgba(37, 211, 102, 0.08);
          border: 1px solid rgba(37, 211, 102, 0.3);
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #25D366;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.15);
          backdrop-filter: blur(10px);
        }

        .hero-status-dot {
          width: 8px;
          height: 8px;
          background: #25D366;
          border-radius: 50%;
          box-shadow: 0 0 10px #25D366;
          animation: pulseDot 2s ease-in-out infinite;
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
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
          padding: 10px;
        }

        /* Floating Tech Badges */
        .floating-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(10, 13, 20, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--card-border);
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          z-index: 3;
        }

        .badge-react {
          top: 15px;
          left: -20px;
          animation: floatBadge1 4s ease-in-out infinite;
          border-color: rgba(97, 218, 251, 0.4);
        }

        .badge-node {
          bottom: 25px;
          left: -25px;
          animation: floatBadge2 4.5s ease-in-out infinite 0.5s;
          border-color: rgba(56, 239, 125, 0.4);
        }

        .badge-sql {
          top: 35px;
          right: -25px;
          animation: floatBadge1 5s ease-in-out infinite 1s;
          border-color: rgba(0, 242, 254, 0.4);
        }

        .badge-next {
          bottom: 15px;
          right: -20px;
          animation: floatBadge2 4s ease-in-out infinite 1.5s;
          border-color: rgba(155, 81, 224, 0.4);
        }

        @keyframes floatBadge1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }

        @keyframes floatBadge2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(8px) rotate(-2deg); }
        }

        .hero-avatar-ring {
          width: 270px;
          max-width: 90vw;
          aspect-ratio: 898 / 1200;
          border-radius: 24px;
          padding: 0;
          background: transparent;
          border: none;
          box-shadow: 0 16px 38px rgba(0, 0, 0, 0.35);
          position: relative;
          z-index: 1;
          overflow: hidden;
          animation: avatarPopIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards,
                     avatarFloat 5s ease-in-out infinite 0.8s;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
        }

        .hero-avatar-ring:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 22px 48px rgba(0, 242, 254, 0.25) !important;
        }

        @keyframes avatarPopIn {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(40px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes avatarFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .hero-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 24px;
          object-fit: cover;
          object-position: center center;
          display: block;
        }

        .hero-buttons-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
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

        /* Quick Impact Stats Row */
        .hero-stats-row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 16px;
          margin-top: 8px;
          padding: 14px 20px;
          background: var(--card-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          width: 100%;
          box-shadow: 0 10px 30px -10px var(--shadow-color);
        }

        .hero-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-stat-number {
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1.1;
        }

        .hero-stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 600;
          margin-top: 2px;
        }

        .hero-stat-divider {
          width: 1px;
          height: 28px;
          background: var(--card-border);
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
            gap: 28px;
          }

          .hero-avatar-column {
            order: -1;
          }

          .hero-avatar-ring {
            width: 225px;
            aspect-ratio: 898 / 1200;
            height: auto;
          }

          .floating-badge {
            font-size: 0.72rem;
            padding: 4px 10px;
          }

          .badge-react { top: 0px; left: -10px; }
          .badge-node { bottom: 0px; left: -10px; }
          .badge-sql { top: 0px; right: -10px; }
          .badge-next { bottom: 0px; right: -10px; }

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

          .hero-stats-row {
            padding: 10px 12px;
            gap: 8px;
          }

          .hero-stat-number {
            font-size: 1.1rem;
          }

          .hero-stat-label {
            font-size: 0.68rem;
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
