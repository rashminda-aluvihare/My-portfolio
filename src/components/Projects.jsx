import { useState } from 'react';
import { ExternalLink, Calendar, BookOpen, ArrowUpRight } from 'lucide-react';
import ProjectDemoModal from './ProjectDemoModal';
import CaseStudyModal from './CaseStudyModal';
import { caseStudiesData } from '../data/caseStudiesData';

// Import project banner images for high-end professional aesthetics
import finbridgeImg from '../assets/finbridge.png';
import fundManagementImg from '../assets/fund_management.png';
import agronexaImg from '../assets/agronexa.png';
import fixedDepositImg from '../assets/fixed_deposit.png';
import loanSavingsImg from '../assets/loan_savings.png';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [activeDemo, setActiveDemo] = useState(null);
  const [activeCaseStudyKey, setActiveCaseStudyKey] = useState(null);

  const projectCategories = [
    { id: 'all', name: 'All Work' },
    { id: 'web', name: 'Web & FinTech' },
    { id: 'java', name: 'Java Systems' },
  ];

  const projectsList = [
    {
      id: 'finbridge',
      title: 'FinBridge AI Platform',
      description: 'AI-driven microfinance, digital wallet & alternative loan risk assessment platform tailored for underserved micro-entrepreneurs. Evaluates non-traditional inputs to generate credit scores (300–850), lowering interest barriers.',
      tags: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'Trilingual i18n'],
      category: 'web',
      github: 'https://github.com/rashminda-aluvihare/finbridge',
      demo: 'https://finbridge-xi.vercel.app',
      date: 'AI FinTech Platform',
      image: finbridgeImg,
    },
    {
      id: 'fund-management',
      title: 'FundManagementSystem-v2',
      description: 'A Web-based Fund Management System developed for SLIATE HNDIT academic curriculum. Built using PHP & MySQL database. Integrates Chart.js visualizations to manage registrations, track monthly payments, and monitor expenditures.',
      tags: ['PHP', 'MySQL', 'Chart.js', 'Bootstrap', 'JavaScript'],
      category: 'web',
      github: 'https://github.com/suneththivanka128/FundManagementSystem-v2',
      demo: null,
      date: 'Semester 2 Project',
      image: fundManagementImg,
    },
    {
      id: 'agronexa',
      title: 'agronexa-lk',
      description: 'A tracking and smart planning platform tailored for agricultural workflows. Formulates visual reporting data, helps optimize farm operations, and tracks crop outputs using modern JavaScript modules.',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Interactive Charts'],
      category: 'web',
      github: 'https://github.com/rashminda-aluvihare/agronexa-lk',
      demo: 'https://agronexa-lk.vercel.app',
      date: 'Independent Development',
      image: agronexaImg,
    },
    {
      id: 'fixed-deposit',
      title: 'FixedDepositCalculation-System',
      description: 'A Java-based core logic simulator for calculating fixed deposit schemes. Calculates interest models, compounding formulas, and tax deductions based on investment duration variables.',
      tags: ['Java SE', 'Financial Formulas', 'Desktop Console'],
      category: 'java',
      github: 'https://github.com/rashminda-aluvihare/FixedDepositCalculation-System',
      demo: 'fixed-deposit',
      date: 'Java Academic Project',
      image: fixedDepositImg,
    },
    {
      id: 'loan-savings',
      title: 'Savingaccounts-LoancalculationSystem',
      description: 'A mathematical logic engine in Java for tracking saving account interests and loan amortization schedules. Incorporates reducing-balance algorithms, EMI computations, and payment tables.',
      tags: ['Java SE', 'OOP Logic', 'Interest Algorithms'],
      category: 'java',
      github: 'https://github.com/rashminda-aluvihare/Savingaccounts-LoancalculationSystem',
      demo: 'loan-savings',
      date: 'Academic Assignment',
      image: loanSavingsImg,
    },
  ];

  const filteredProjects = filter === 'all'
    ? projectsList
    : projectsList.filter((proj) => proj.category === filter);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            Featured Projects
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '10px' }}>
            A curated selection of my academic work, web systems, and system applications. Click <strong style={{ color: 'var(--accent-cyan)' }}>View Case Study</strong> for full details.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                background: filter === cat.id ? 'var(--accent-purple)' : 'rgba(255,255,255,0.03)',
                color: filter === cat.id ? '#fff' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: filter === cat.id ? 'var(--accent-purple)' : 'var(--card-border)',
                borderRadius: '12px',
                padding: '10px 24px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                boxShadow: filter === cat.id ? '0 0 15px rgba(155, 81, 224, 0.3)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (filter !== cat.id) {
                  e.currentTarget.style.borderColor = 'var(--accent-purple)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== cat.id) {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '30px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'var(--transition-bounce)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
              }}
            >
              {/* Card Image Area */}
              {project.image && (
                <div style={{ position: 'relative', height: '190px', overflow: 'hidden', borderBottom: '1px solid var(--card-border)' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="project-card-image"
                  />
                </div>
              )}

              {/* Card Header Area */}
              <div
                style={{
                  padding: '20px 24px 12px 24px',
                  borderBottom: '1px solid var(--card-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                  <Calendar size={14} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{project.date}</span>
                </div>
                
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: project.category === 'web' ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                    background: project.category === 'web' ? 'rgba(0, 242, 254, 0.1)' : 'rgba(155, 81, 224, 0.1)',
                    border: `1px solid ${project.category === 'web' ? 'rgba(0, 242, 254, 0.2)' : 'rgba(155, 81, 224, 0.2)'}`,
                    padding: '4px 10px',
                    borderRadius: '8px',
                  }}
                >
                  {project.category === 'web' ? 'Web System' : 'Java Backend'}
                </span>
              </div>

              {/* Card Body Area */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, flex: 1 }}>
                  {project.description}
                </p>

                {/* Case Study Trigger Button */}
                <button
                  onClick={() => setActiveCaseStudyKey(project.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    background: 'rgba(0, 242, 254, 0.08)',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    marginTop: '4px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 242, 254, 0.18)';
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 242, 254, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.25)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <BookOpen size={16} />
                  <span>View Case Study</span>
                  <ArrowUpRight size={16} />
                </button>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--card-border)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Links */}
              <div
                style={{
                  padding: '16px 24px',
                  background: 'rgba(0, 0, 0, 0.15)',
                  borderTop: '1px solid var(--card-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    color: 'var(--text-secondary)',
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  <span>GitHub</span>
                </a>
                
                {project.demo && (
                  <button
                    onClick={() => {
                      if (project.demo.startsWith('http')) {
                        window.open(project.demo, '_blank');
                      } else {
                        setActiveDemo(project.demo);
                      }
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--accent-cyan)',
                      cursor: 'pointer',
                      transition: 'var(--transition-smooth)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.textShadow = '0 0 8px var(--accent-cyan)')}
                    onMouseLeave={(e) => (e.currentTarget.style.textShadow = 'none')}
                  >
                    <span>Run Demo</span>
                    <ExternalLink size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

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
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
