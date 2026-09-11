import React from 'react';
import { Download, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function FloatingControls() {
  return (
    <>
      {/* Floating Vertical Social Bar on the Right Edge */}
      <aside aria-label="Quick Social Links" className="floating-social-bar">
        <a
          href="https://linkedin.com/in/rashminda-aluvihare-98604532b"
          target="_blank"
          rel="noreferrer"
          className="floating-social-link linkedin"
          data-tooltip="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

        <a
          href="https://github.com/rashminda-aluvihare"
          target="_blank"
          rel="noreferrer"
          className="floating-social-link github"
          data-tooltip="GitHub Projects"
          aria-label="GitHub Projects"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>

        <a
          href="mailto:rashmindaaluvihare@gmail.com"
          className="floating-social-link mail"
          data-tooltip="Email Me"
          aria-label="Send Email"
        >
          <Mail size={20} />
        </a>
      </aside>

      {/* Floating Profile Photo & Status Badge Pill (Woujoud Style) */}
      <div className="floating-profile-widget">
        <div className="floating-avatar-circle">
          <img src={profileImg} alt="Rashminda Aluvihare" className="floating-avatar-img" />
        </div>
        <div className="floating-status-pill">
          <span className="status-ping-dot" />
          <span>Available for work</span>
        </div>
      </div>

      {/* Floating CV Download Pill Button */}
      <a
        href="/assets/Rashminda Aluvihare.pdf"
        download="Rashminda Aluvihare.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cv-btn"
        aria-label="Download CV"
      >
        <div className="floating-cv-icon-wrapper">
          <Download size={18} />
        </div>
        <span className="floating-cv-text">Get My CV</span>
      </a>

      <style>{`
        /* Floating Social Bar */
        .floating-social-bar {
          position: fixed;
          bottom: 270px;
          right: 24px;
          z-index: 998;
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .floating-social-link {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--card-bg);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid var(--card-border);
          color: var(--text-primary);
          text-decoration: none;
          position: relative;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 6px 20px var(--shadow-color);
        }

        .floating-social-link.linkedin:hover {
          color: #0A66C2;
          border-color: #0A66C2;
          background: rgba(10, 102, 194, 0.15);
          transform: translateX(-5px) rotate(360deg);
          box-shadow: 0 8px 25px rgba(10, 102, 194, 0.4);
        }

        .floating-social-link.github:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.15);
          transform: translateX(-5px) rotate(360deg);
          box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);
        }

        .floating-social-link.mail:hover {
          color: var(--accent-emerald);
          border-color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.15);
          transform: translateX(-5px) rotate(360deg);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }

        /* Tooltip */
        .floating-social-link::after {
          content: attr(data-tooltip);
          position: absolute;
          right: 56px;
          background: var(--bg-primary);
          backdrop-filter: blur(10px);
          color: var(--text-primary);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.78rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.25s ease;
          border: 1px solid var(--card-border);
          box-shadow: 0 4px 15px var(--shadow-color);
        }

        .floating-social-link:hover::after {
          opacity: 1;
          right: 52px;
        }

        /* Floating Profile Avatar & Status Pill (Woujoud Placement) */
        .floating-profile-widget {
          position: fixed;
          bottom: 95px;
          right: 24px;
          z-index: 998;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .floating-avatar-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--accent-purple);
          box-shadow: 0 8px 25px rgba(145, 94, 255, 0.45);
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: avatarFloat 4s ease-in-out infinite;
        }

        .floating-avatar-circle:hover {
          transform: scale(1.15) rotate(5deg);
          border-color: var(--accent-cyan);
          box-shadow: 0 12px 35px rgba(6, 182, 212, 0.6);
        }

        .floating-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .floating-status-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(11, 18, 32, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 20px;
          border: 1px solid rgba(16, 185, 129, 0.4);
          font-size: 0.72rem;
          color: #10b981;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .status-ping-dot {
          width: 7px;
          height: 7px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10b981;
          animation: blinkDot 2s infinite;
        }

        @keyframes blinkDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.3); }
        }

        @keyframes avatarFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Floating CV Button */
        .floating-cv-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 998;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border: 2px solid var(--accent-emerald);
          border-radius: 999px;
          background: var(--card-bg);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          color: var(--text-primary);
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 6px 20px var(--shadow-color);
          animation: floatPulse 3s ease-in-out infinite;
        }

        .floating-cv-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          transition: transform 0.3s ease;
        }

        .floating-cv-btn:hover {
          background: linear-gradient(135deg, var(--accent-emerald) 0%, var(--accent-cyan) 100%);
          border-color: var(--accent-cyan);
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.45);
          animation: none;
        }

        .floating-cv-btn:hover .floating-cv-icon-wrapper {
          transform: translateY(-2px) rotate(-10deg);
          color: #ffffff;
        }

        @keyframes floatPulse {
          0%, 100% {
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.25);
            transform: translateY(0);
          }
          50% {
            box-shadow: 0 10px 28px rgba(6, 182, 212, 0.4);
            transform: translateY(-5px);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .floating-social-bar {
            bottom: auto;
            top: 40%;
            right: 12px;
            gap: 8px;
          }

          .floating-social-link {
            width: 38px;
            height: 38px;
          }

          .floating-social-link::after {
            display: none;
          }

          .floating-profile-widget {
            display: none;
          }

          .floating-cv-btn {
            bottom: 20px;
            right: 20px;
            padding: 8px 16px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
