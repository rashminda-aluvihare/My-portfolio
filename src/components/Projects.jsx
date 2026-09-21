import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import ProjectDemoModal from './ProjectDemoModal';
import CaseStudyModal from './CaseStudyModal';
import { caseStudiesData } from '../data/caseStudiesData';

// Project banner images
import finbridgeImg from '../assets/finbridge.png';
import fundManagementImg from '../assets/fund_management.png';
import agronexaImg from '../assets/agronexa.png';
import fixedDepositImg from '../assets/fixed_deposit.png';
import loanSavingsImg from '../assets/loan_savings.png';
import portfolioProjectImg from '../assets/portfolioproject.png';

export default function Projects() {
  const [activeDemo, setActiveDemo] = useState(null);
  const [activeCaseStudyKey, setActiveCaseStudyKey] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const scrollContainerRef = useRef(null);

  // Lock background scroll when 'View All Projects' modal is open
  useEffect(() => {
    if (showAllModal) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('lightbox-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('lightbox-open');
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowAllModal(false);
      }
    };

    if (showAllModal) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showAllModal]);

  const projectsList = [
    {
      id: 'agronexa',
      index: '01',
      categoryLabel: 'BA & PM LEAD / AGRI-FINTECH',
      title: 'AgroNexa LK — Smart Farming & Supply Chain Ledger',
      description: 'Led end-to-end planning, multi-role stakeholder elicitation (Farmer, Buyer, Equipment Owner), KYC workflows, and cryptographic ledger integrity.',
      tags: ['BA & PM Lead', 'React.js', 'Node.js', 'PostgreSQL', 'SHA-256 Ledger'],
      github: 'https://github.com/rashminda-aluvihare/agronexa-lk',
      demo: 'https://agronexa-lk.vercel.app',
      image: agronexaImg,
    },
    {
      id: 'finbridge',
      index: '02',
      categoryLabel: 'AI FINTECH / COMMERCIAL LENDING',
      title: 'FinBridge — AI-Powered Credit Scoring & Lending Platform',
      description: 'Engineered an alternative 300–850 credit risk model, Grameen group lending workflows, trilingual i18n support, and real-time EMI repayment schedules.',
      tags: ['Next.js 16', 'React 19', 'TypeScript', 'Credit Scoring', 'Grameen Lending'],
      github: 'https://github.com/rashminda-aluvihare/finbridge',
      demo: 'https://finbridge-xi.vercel.app',
      image: finbridgeImg,
    },
    {
      id: 'fund-management',
      index: '03',
      categoryLabel: 'CUSTOM SOFTWARE / FINANCIAL MANAGEMENT',
      title: 'Fund Management System — HNDIT Enterprise Platform',
      description: 'Coordinated team scope, structured role-based contributions & expense logging, modeled transparent accounting workflows, and delivered full SRS.',
      tags: ['Scope Coordination', 'SRS Documentation', 'PHP 8', 'MySQL', 'Role Dashboards'],
      github: 'https://github.com/suneththivanka128/FundManagementSystem-v2',
      demo: null,
      image: fundManagementImg,
    },
    {
      id: 'portfolio-website',
      index: '04',
      categoryLabel: 'WEB PLATFORM / INTERACTIVE ENGINE',
      title: 'Rashminda Aluvihare — BA & PM Portfolio Showcase',
      description: 'High-speed editorial portfolio built with React 19, Vite, and custom CSS design systems, featuring BA & PM deliverables and interactive case studies.',
      tags: ['React 19', 'Vite', 'Design System', 'Case Studies Modal'],
      github: 'https://github.com/rashminda-aluvihare/My-portfolio',
      demo: 'https://rashmindaluvihare.vercel.app/',
      image: portfolioProjectImg,
    },
    {
      id: 'fixed-deposit',
      index: '05',
      categoryLabel: 'CORE BANKING / JAVA SE',
      title: 'Fixed Deposit Calculation & Maturity Engine',
      description: "Desktop banking suite modeled on People's Bank fixed deposit schemes, computing compound interest, maturity values, and statutory tax deductions.",
      tags: ['Java SE', 'Commercial Banking Formulas', 'OOP Architecture', 'Maturity Modeling'],
      github: 'https://github.com/rashminda-aluvihare/FixedDepositCalculation-System',
      demo: 'fixed-deposit',
      image: fixedDepositImg,
    },
    {
      id: 'loan-savings',
      index: '06',
      categoryLabel: 'FINANCIAL MODELING / JAVA SE',
      title: 'Savings & Loan Amortization Calculation Suite',
      description: "Automated loan EMI, reducing-balance interest formulas, and structured repayment schedules inspired by People's Bank commercial lending operations.",
      tags: ['Java SE', 'OOP Architecture', 'Loan EMI & Repayment', 'Reducing-Balance'],
      github: 'https://github.com/rashminda-aluvihare/Savingaccounts-LoancalculationSystem',
      demo: 'loan-savings',
      image: loanSavingsImg,
    },
  ];

  // Quadruple projects for smooth infinite marquee looping
  const marqueeProjects = [...projectsList, ...projectsList, ...projectsList, ...projectsList];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const renderProjectCard = (project, uniqueKey, isModal = false) => (
    <div
      key={uniqueKey}
      className={`project-card-item ${isModal ? 'project-card-modal-item' : 'project-card-marquee-item'}`}
    >
      {/* 1. Preview Image Banner (Always fully visible) */}
      <div className="project-card-banner">
        <img
          src={project.image}
          alt={project.title}
          loading="eager"
          decoding="async"
          className="project-card-banner-img"
        />
        <div className="project-card-badge">
          {project.index}
        </div>
      </div>

      {/* 2. Card Content Body */}
      <div className="project-card-body">
        <div className="project-card-category">
          {project.categoryLabel}
        </div>

        <h3 className="project-card-title">
          {project.title}
        </h3>

        <p className="project-card-desc">
          {project.description}
        </p>

        <div className="project-card-tags">
          {project.tags.map((tag, tIdx) => (
            <span key={tIdx} className="project-card-tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Card Action Footer */}
      <div className="project-card-footer">
        <button
          onClick={() => {
            if (isModal) setShowAllModal(false);
            setActiveCaseStudyKey(project.id);
          }}
          className="btn-case-study-action"
          title="View Full Case Study"
        >
          <span>Case Study</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-github-action"
            title="View Source Code on GitHub"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span>GitHub</span>
          </a>

          {project.demo && (
            <button
              onClick={() => {
                if (isModal) setShowAllModal(false);
                if (project.demo.startsWith('http')) {
                  window.open(project.demo, '_blank');
                } else {
                  setActiveDemo(project.demo);
                }
              }}
              className="btn-live-action"
              title="Launch Live Application"
            >
              <ExternalLink size={13} strokeWidth={2.5} />
              <span>LIVE</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section section-light" style={{ position: 'relative', overflow: 'hidden', padding: '90px 0' }}>
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Section Header with 'View all projects' and Navigation Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          <div>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: 'var(--color-text-primary)', letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0 }}>
              Projects
            </h2>
          </div>

          {/* Top-Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <button
              onClick={() => setShowAllModal(true)}
              className="view-all-projects-btn"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-accent)',
                fontSize: '0.96rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 2px',
                borderBottom: '2px solid var(--color-accent)',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                transition: 'all 0.25s ease',
              }}
            >
              <span>View all projects</span>
            </button>

            {/* Carousel Navigation Buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={scrollLeft}
                aria-label="Previous project"
                className="btn-outline project-carousel-btn"
                style={{
                  width: '40px',
                  height: '40px',
                  padding: 0,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.2s ease',
                }}
              >
                <ChevronLeft size={19} />
              </button>

              <button
                onClick={scrollRight}
                aria-label="Next project"
                className="btn-outline project-carousel-btn"
                style={{
                  width: '40px',
                  height: '40px',
                  padding: 0,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.2s ease',
                }}
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Page: Horizontal Continuous Infinite Scrolling Stream ── */}
      <div className="projects-scroll-container" ref={scrollContainerRef}>
        <div className="projects-scroll-track">
          {marqueeProjects.map((project, idx) =>
            renderProjectCard(project, `marquee-${project.id}-${idx}`, false)
          )}
        </div>
      </div>

      {/* ── View All Projects Modal: Responsive Downward Flowing Grid with Full Images ── */}
      {showAllModal && createPortal(
        <div
          className="all-projects-modal-backdrop"
          onClick={() => setShowAllModal(false)}
        >
          <div
            className="all-projects-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="all-projects-modal-header">
              <div>
                <h3 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', fontWeight: 900, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', margin: 0 }}>
                  All Projects ({projectsList.length})
                </h3>
              </div>
              <button
                onClick={() => setShowAllModal(false)}
                className="all-projects-modal-close-btn"
                aria-label="Close directory modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scrollable Projects Grid (With Full Images Downward) */}
            <div className="all-projects-modal-grid">
              {projectsList.map((project) =>
                renderProjectCard(project, `modal-${project.id}`, true)
              )}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Case Study Modal */}
      {activeCaseStudyKey && caseStudiesData[activeCaseStudyKey] && (
        <CaseStudyModal
          caseStudy={caseStudiesData[activeCaseStudyKey]}
          onClose={() => setActiveCaseStudyKey(null)}
          onOpenDemo={(demoType) => {
            setActiveCaseStudyKey(null);
            setActiveDemo(demoType);
          }}
        />
      )}

      {/* Interactive Project Demo Modal overlay */}
      {activeDemo && (
        <ProjectDemoModal
          demoType={activeDemo}
          onClose={() => setActiveDemo(null)}
        />
      )}

      <style>{`
        /* ── HORIZONTAL SCROLL CAROUSEL (Main Page) ── */
        .projects-scroll-container {
          width: 100%;
          overflow-x: auto;
          position: relative;
          padding: 8px 0 24px 0;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          mask-image: linear-gradient(to right, transparent, black 3%, black 97%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 3%, black 97%, transparent);
        }

        .projects-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .projects-scroll-track {
          display: flex;
          gap: 24px;
          width: max-content;
          will-change: transform;
          animation: marqueeProjectsScroll 65s linear infinite;
          padding: 6px 20px;
        }

        .projects-scroll-container:hover .projects-scroll-track {
          animation-play-state: paused;
        }

        @keyframes marqueeProjectsScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        /* ── PROJECT CARD BASE ── */
        .project-card-item {
          background: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .project-card-marquee-item {
          width: 350px;
          min-width: 350px;
          flex-shrink: 0;
        }

        .project-card-modal-item {
          width: 100%;
          min-width: unset;
        }

        .project-card-item:hover {
          transform: translateY(-6px);
          border-color: rgba(20, 184, 166, 0.35);
          box-shadow: 0 16px 36px rgba(20, 184, 166, 0.14);
        }

        /* ── CARD IMAGE BANNER (GUARANTEED VISIBLE) ── */
        .project-card-banner {
          position: relative;
          height: 185px;
          width: 100%;
          overflow: hidden;
          background: #F1F5F9;
          border-bottom: 1px solid rgba(226, 232, 240, 0.85);
          display: block;
        }

        .project-card-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card-item:hover .project-card-banner-img {
          transform: scale(1.05);
        }

        .project-card-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(8px);
          color: #2DD4BF;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 3px 9px;
          border-radius: 999px;
          font-family: var(--font-display);
          letter-spacing: 0.05em;
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 2;
        }

        /* ── CARD BODY ── */
        .project-card-body {
          padding: 18px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .project-card-category {
          font-size: 0.68rem;
          font-weight: 800;
          color: #14B8A6;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-family: var(--font-display);
        }

        .project-card-title {
          font-size: 1.08rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          line-height: 1.32;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-card-desc {
          color: #475569;
          font-size: 0.84rem;
          line-height: 1.5;
          margin: 0;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 6px;
        }

        .project-card-tag-pill {
          font-size: 0.68rem;
          font-weight: 600;
          color: #334155;
          background: #F1F5F9;
          border: 1px solid rgba(226, 232, 240, 0.85);
          padding: 3px 8px;
          border-radius: 6px;
          font-family: var(--font-display);
        }

        /* ── CARD FOOTER ── */
        .project-card-footer {
          padding: 12px 18px;
          background: #F8FAFC;
          border-top: 1px solid rgba(226, 232, 240, 0.85);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        /* ── VIEW ALL PROJECTS MODAL STYLES ── */
        .all-projects-modal-backdrop {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          background: rgba(15, 23, 42, 0.72) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          z-index: 9999999 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 24px !important;
          animation: modalFadeIn 0.2s ease-out;
        }

        .all-projects-modal-container {
          background: #F8FAFC !important;
          border: 1px solid rgba(226, 232, 240, 0.9) !important;
          border-radius: 24px !important;
          max-width: 1200px !important;
          width: 100% !important;
          max-height: 90vh !important;
          display: flex !important;
          flex-direction: column !important;
          overflow: hidden !important;
          box-shadow: 0 30px 80px rgba(15, 23, 42, 0.25) !important;
          animation: modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .all-projects-modal-header {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          padding: 20px 28px !important;
          background: #FFFFFF !important;
          border-bottom: 1px solid rgba(226, 232, 240, 0.85) !important;
          flex-shrink: 0 !important;
        }

        .all-projects-modal-close-btn {
          background: #F1F5F9 !important;
          border: 1px solid rgba(226, 232, 240, 0.8) !important;
          border-radius: 50% !important;
          width: 38px !important;
          height: 38px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: #0F172A !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
        }

        .all-projects-modal-close-btn:hover {
          background: #0F172A !important;
          color: #FFFFFF !important;
          transform: rotate(90deg) !important;
        }

        /* Responsive, Balanced Downward Flowing Grid in Modal */
        .all-projects-modal-grid {
          padding: 26px 28px !important;
          overflow-y: auto !important;
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          grid-auto-rows: max-content !important;
          grid-template-rows: none !important;
          align-items: start !important;
          gap: 22px !important;
          -webkit-overflow-scrolling: touch !important;
          scrollbar-width: thin !important;
          scrollbar-color: #14B8A6 #F1F5F9 !important;
        }

        @media (max-width: 1060px) {
          .all-projects-modal-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 18px !important;
          }
        }

        @media (max-width: 680px) {
          .all-projects-modal-backdrop {
            padding: 12px !important;
          }
          .all-projects-modal-container {
            max-height: 94vh !important;
            border-radius: 18px !important;
          }
          .all-projects-modal-header {
            padding: 14px 18px !important;
          }
          .all-projects-modal-grid {
            padding: 16px 14px !important;
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .project-card-marquee-item {
            width: 300px;
            min-width: 300px;
          }
          .project-card-banner {
            height: 165px;
          }
          .project-card-body {
            padding: 14px 16px;
          }
          .project-card-footer {
            padding: 10px 14px;
          }
        }
      `}</style>
    </section>
  );
}
