import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
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
    } else {
      document.body.style.overflow = 'unset';
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
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const renderProjectCard = (project, uniqueKey, isModal = false) => (
    <div
      key={uniqueKey}
      className="project-creative-card-compact"
      style={isModal ? { width: '100%', minWidth: 'unset' } : { width: '330px', minWidth: '330px' }}
    >
      {/* Card Image Banner */}
      <div className="project-card-banner-compact">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="project-banner-img-compact"
        />
        <div className="project-index-badge-compact">
          {project.index}
        </div>
      </div>

      {/* Card Content Area */}
      <div className="project-card-body-compact">
        <div className="project-category-tag-compact">
          {project.categoryLabel}
        </div>

        <h3 className="project-title-text-compact">
          {project.title}
        </h3>

        <p className="project-desc-text-compact">
          {project.description}
        </p>

        <div className="project-tags-row-compact">
          {project.tags.slice(0, 3).map((tag, tIdx) => (
            <span key={tIdx} className="project-tag-pill-compact">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="project-tag-pill-compact" style={{ opacity: 0.7 }}>
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Card Footer Actions: Case Study | GitHub | LIVE */}
      <div className="project-card-footer-compact">
        <button
          onClick={() => {
            if (isModal) setShowAllModal(false);
            setActiveCaseStudyKey(project.id);
          }}
          className="btn-case-study-action"
          title="View Full Case Study"
        >
          <span>Case Study</span>
          <ArrowUpRight size={13} strokeWidth={2.5} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-github-action"
            title="View Source Code on GitHub"
          >
            <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
              <ExternalLink size={12} strokeWidth={2.5} />
              <span>LIVE</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section section-light" style={{ backgroundColor: '#F8FAFC', position: 'relative', overflow: 'hidden', padding: '80px 0' }}>
      <div className="container">
        {/* Section Header with 'View all projects ↗' & Navigation Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '32px',
          }}
        >
          <div style={{ maxWidth: '750px' }}>
            <div className="section-label" style={{ marginBottom: '10px' }}>
              SELECTED WORK / 03
            </div>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Featured Platforms &amp; Case Studies
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', marginTop: '8px', lineHeight: 1.6 }}>
              The end-to-end software deliverables, business requirement specifications, and interactive banking platforms businesses depend on.
            </p>
          </div>

          {/* Top-Right: 'View all projects ↗' link & Slider Arrow Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setShowAllModal(true)}
              className="view-all-projects-btn"
              style={{
                background: 'none',
                border: 'none',
                color: '#2563EB',
                fontSize: '0.94rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 2px',
                borderBottom: '2px solid #2563EB',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#1D4ED8';
                e.currentTarget.style.borderColor = '#1D4ED8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#2563EB';
                e.currentTarget.style.borderColor = '#2563EB';
              }}
            >
              <span>View all projects</span>
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>

            {/* Slider Navigation Buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={scrollLeft}
                aria-label="Previous project"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#0F172A',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2563EB';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#2563EB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.color = '#0F172A';
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
                }}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={scrollRight}
                aria-label="Next project"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#0F172A',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2563EB';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#2563EB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.color = '#0F172A';
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Continuous Horizontal Scrolling Stream (Compact Cards + Pause on Hover) */}
      <div className="projects-marquee-wrapper" ref={scrollContainerRef}>
        <div className="projects-marquee-track">
          {marqueeProjects.map((project, idx) => renderProjectCard(project, `${project.id}-${idx}`, false))}
        </div>
      </div>

      {/* 'View All Projects' Grid Modal Overlay using React Portal to render at body root */}
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
                <div className="section-label" style={{ marginBottom: '4px' }}>
                  ALL PLATFORMS &amp; DELIVERABLES
                </div>
                <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em', margin: 0 }}>
                  Complete Project Directory ({projectsList.length})
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

            {/* Modal Scrollable Projects Grid */}
            <div className="all-projects-modal-grid">
              {projectsList.map((project) => renderProjectCard(project, `modal-${project.id}`, true))}
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
        .projects-marquee-wrapper {
          width: 100%;
          overflow-x: auto;
          position: relative;
          padding: 8px 0 24px 0;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          mask-image: linear-gradient(to right, transparent, black 3%, black 97%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 3%, black 97%, transparent);
        }

        .projects-marquee-wrapper::-webkit-scrollbar {
          display: none;
        }

        .projects-marquee-track {
          display: flex;
          gap: 22px;
          width: max-content;
          will-change: transform;
          animation: marqueeLeftProjects 65s linear infinite;
          padding: 4px 16px;
        }

        .projects-marquee-wrapper:hover .projects-marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeLeftProjects {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
