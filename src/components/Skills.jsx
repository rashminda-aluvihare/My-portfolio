import { useState } from 'react';
import { Database, Code2, Cpu, FileCheck, Target, Workflow, LayoutList, Terminal, Layers } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'lang', label: 'Programming Languages' },
    { id: 'frontend', label: 'Frontend Dev' },
    { id: 'backend', label: 'Backend & Databases' },
    { id: 'ba', label: 'Business Analysis & PM' },
    { id: 'tools', label: 'Tools & Platforms' },
  ];

  const skills = [
    // Programming Languages
    { name: 'JavaScript', type: 'Core Language', level: 95, category: 'lang', color: '#f7df1e', icon: <Code2 size={18} />, evidence: 'Used in: FinBridge, AgroNexa, Portfolio' },
    { name: 'Java SE (OOP)', type: 'Core Language', level: 88, category: 'lang', color: '#b07219', icon: <Cpu size={18} />, evidence: 'Used in: Banking Engines & Loan Calculators' },
    { name: 'PHP ', type: 'Backend Language', level: 86, category: 'lang', color: '#4F5D95', icon: <Terminal size={18} />, evidence: 'Used in: Fund Management System' },
    { name: 'SQL', type: 'Database Query', level: 90, category: 'lang', color: '#f1e05a', icon: <Database size={18} />, evidence: 'Used in: MySQL & PostgreSQL Architectures' },

    // Frontend Development
    { name: 'React 19 & Zustand', type: 'Frontend Framework', level: 94, category: 'frontend', color: '#61dafb', icon: <Code2 size={18} />, evidence: 'Used in: FinBridge & Portfolio' },
    { name: 'Next.js', type: 'Fullstack React', level: 90, category: 'frontend', color: '#0070f3', icon: <Code2 size={18} />, evidence: 'Used in: FinBridge AI Platform' },
    { name: 'HTML & CSS', type: 'UI Structure', level: 95, category: 'frontend', color: '#e34f26', icon: <Code2 size={18} />, evidence: 'Used in: All Web Applications' },
    { name: 'Tailwind CSS', type: 'Styling Engine', level: 92, category: 'frontend', color: '#38bdf8', icon: <Code2 size={18} />, evidence: 'Used in: AgroNexa LK Marketplace' },

    // Backend Development & Databases
    { name: 'Node.js & Express.js', type: 'Backend Runtime', level: 89, category: 'backend', color: '#339933', icon: <Terminal size={18} />, evidence: 'Used in: AgroNexa LK & FinBridge APIs' },
    { name: 'MySQL', type: 'Relational DB', level: 88, category: 'backend', color: '#00758F', icon: <Database size={18} />, evidence: 'Used in: Fund Management System' },
    { name: 'PostgreSQL', type: 'Relational DB', level: 85, category: 'backend', color: '#336791', icon: <Database size={18} />, evidence: 'Used in: AgroNexa LK Crypto Ledger' },
    { name: 'RESTful API Design', type: 'Web Service', level: 92, category: 'backend', color: '#38ef7d', icon: <Layers size={18} />, evidence: 'Used in: AgroNexa LK & FinBridge' },

    // Business Analysis & Project Management
    { name: 'Requirements Engineering', type: 'SRS / BRD', level: 90, category: 'ba', color: '#38ef7d', icon: <FileCheck size={18} />, evidence: 'Applied in: HNDIT Modules' },
    { name: 'BPMN & UML Modeling', type: 'Process Modeling', level: 88, category: 'ba', color: '#00f2fe', icon: <LayoutList size={18} />, evidence: 'Applied in: System Analysis & Banking Specs' },
    { name: 'Agile & Scrum Framework', type: 'Delivery Method', level: 92, category: 'ba', color: '#9b51e0', icon: <Workflow size={18} />, evidence: 'Applied in: HNDIT & FinTech Projects' },
    { name: 'IT Project Planning', type: 'Backlog & Sprints', level: 86, category: 'ba', color: '#ff6384', icon: <Target size={18} />, evidence: 'Applied in: Academic & Industry Projects' },

    // Tools & Platforms
    { name: 'Git & GitHub', type: 'Version Control', level: 94, category: 'tools', color: '#f05032', icon: <Terminal size={18} />, evidence: 'Applied in: All Project Repositories' },
    { name: 'Railway', type: 'Backend Hosting', level: 90, category: 'tools', color: '#646cff', icon: <Cpu size={18} />, evidence: 'Applied in: Portfolio & AgroNexa LK' },
    { name: 'Postman', type: 'API Testing', level: 88, category: 'tools', color: '#ff6c37', icon: <Layers size={18} />, evidence: 'Applied in: REST API Integration' },
    { name: 'Vercel Deployment', type: 'Frontend Hosting', level: 92, category: 'tools', color: '#ffffff', icon: <Layers size={18} />, evidence: 'Applied in: Production Deployments' },
  ];

  const [viewMode, setViewMode] = useState('marquee'); // 'marquee' | 'grid'

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  // Split skills into two balanced rows for marquee
  const halfIndex = Math.ceil(filteredSkills.length / 2);
  const row1Skills = filteredSkills.slice(0, halfIndex);
  const row2Skills = filteredSkills.slice(halfIndex);

  // Duplicate arrays to create seamless infinite scroll loops
  const marqueeRow1 = [...row1Skills, ...row1Skills, ...row1Skills, ...row1Skills];
  const marqueeRow2 = [...row2Skills, ...row2Skills, ...row2Skills, ...row2Skills];

  const renderSkillCard = (skill, index, isMarquee = false) => (
    <div
      key={`${skill.name}-${index}`}
      className="glass-panel"
      style={{
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        position: 'relative',
        overflow: 'hidden',
        minWidth: isMarquee ? '290px' : 'auto',
        maxWidth: isMarquee ? '310px' : 'none',
        flexShrink: 0,
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
        e.currentTarget.style.boxShadow = `0 15px 30px rgba(0,0,0,0.25), 0 0 20px -3px ${skill.color}60`;
        e.currentTarget.style.borderColor = skill.color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--card-border)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              background: `${skill.color}18`,
              color: skill.color,
              padding: '10px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {skill.icon}
          </div>
          <span style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>{skill.name}</span>
        </div>
        <span
          style={{
            fontSize: '0.70rem',
            fontWeight: 700,
            color: skill.color,
            background: `${skill.color}15`,
            padding: '4px 10px',
            borderRadius: '999px',
            border: `1px solid ${skill.color}35`,
            whiteSpace: 'nowrap',
          }}
        >
          {skill.type}
        </span>
      </div>

      {/* Animated Progress Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
          <span>Proficiency</span>
          <span style={{ color: skill.color, fontWeight: 700 }}>{skill.level}%</span>
        </div>
        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '999px', overflow: 'hidden' }}>
          <div
            style={{
              width: `${skill.level}%`,
              height: '100%',
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
              borderRadius: '999px',
              boxShadow: `0 0 10px ${skill.color}80`,
              transition: 'width 1s ease-in-out',
            }}
          />
        </div>
      </div>

      {/* Evidence Tag */}
      {skill.evidence && (
        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '2px', borderTop: '1px solid var(--card-border)', paddingTop: '8px' }}>
          <span style={{ color: skill.color }}>✓</span> {skill.evidence}
        </div>
      )}
    </div>
  );

  return (
    <section id="skills" className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            Skills & Tech Competencies
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '0.95rem' }}>
            Hover over any card to pause auto-scrolling & view details
          </p>
        </div>

        {/* Controls Bar: Category Filters + View Mode Switcher */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  background: activeCategory === cat.id ? 'var(--accent-emerald)' : 'var(--card-bg)',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: activeCategory === cat.id ? 'var(--accent-emerald)' : 'var(--card-border)',
                  borderRadius: '12px',
                  padding: '8px 18px',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: activeCategory === cat.id ? '0 0 14px rgba(16, 185, 129, 0.35)' : 'none',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* View Switcher: Auto-Marquee vs Grid */}
          <div
            style={{
              display: 'inline-flex',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '12px',
              padding: '4px',
              gap: '4px',
            }}
          >
            <button
              onClick={() => setViewMode('marquee')}
              style={{
                background: viewMode === 'marquee' ? 'var(--accent-cyan)' : 'transparent',
                color: viewMode === 'marquee' ? '#030712' : 'var(--text-secondary)',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 14px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              🔄 Auto-Slider
            </button>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                background: viewMode === 'grid' ? 'var(--accent-cyan)' : 'transparent',
                color: viewMode === 'grid' ? '#030712' : 'var(--text-secondary)',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 14px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              ▦ Grid View
            </button>
          </div>
        </div>
      </div>

      {/* Marquee View: Full-width infinite horizontal auto-scrolling slider */}
      {viewMode === 'marquee' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Top Marquee Row: Moves Left */}
          <div className="marquee-container">
            <div className="marquee-track-left">
              {marqueeRow1.map((skill, idx) => renderSkillCard(skill, idx, true))}
            </div>
          </div>

          {/* Bottom Marquee Row: Moves Right */}
          {marqueeRow2.length > 0 && (
            <div className="marquee-container">
              <div className="marquee-track-right">
                {marqueeRow2.map((skill, idx) => renderSkillCard(skill, idx, true))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Grid View Fallback */
        <div className="container">
          <div
            className="skills-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {filteredSkills.map((skill, index) => renderSkillCard(skill, index, false))}
          </div>
        </div>
      )}
    </section>
  );
}
