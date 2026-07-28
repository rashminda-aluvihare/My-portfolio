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
    { name: 'JavaScript (ES6+)', type: 'Core Language', level: 95, category: 'lang', color: '#f7df1e', icon: <Code2 size={18} />, evidence: 'Used in: FinBridge, AgroNexa, Portfolio' },
    { name: 'Java SE (OOP)', type: 'Core Language', level: 88, category: 'lang', color: '#b07219', icon: <Cpu size={18} />, evidence: 'Used in: Banking Engines & Loan Calculators' },
    { name: 'PHP 8', type: 'Backend Language', level: 86, category: 'lang', color: '#4F5D95', icon: <Terminal size={18} />, evidence: 'Used in: FundManagementSystem-v2' },
    { name: 'SQL', type: 'Database Query', level: 90, category: 'lang', color: '#f1e05a', icon: <Database size={18} />, evidence: 'Used in: MySQL & PostgreSQL Architectures' },

    // Frontend Development
    { name: 'React 19 & Zustand', type: 'Frontend Framework', level: 94, category: 'frontend', color: '#61dafb', icon: <Code2 size={18} />, evidence: 'Used in: FinBridge & Portfolio' },
    { name: 'Next.js 16 (App Router)', type: 'Fullstack React', level: 90, category: 'frontend', color: '#0070f3', icon: <Code2 size={18} />, evidence: 'Used in: FinBridge AI Platform' },
    { name: 'HTML5 & CSS3', type: 'UI Structure', level: 95, category: 'frontend', color: '#e34f26', icon: <Code2 size={18} />, evidence: 'Used in: All Web Applications' },
    { name: 'Tailwind CSS', type: 'Styling Engine', level: 92, category: 'frontend', color: '#38bdf8', icon: <Code2 size={18} />, evidence: 'Used in: AgroNexa LK Marketplace' },

    // Backend Development & Databases
    { name: 'Node.js & Express.js', type: 'Backend Runtime', level: 89, category: 'backend', color: '#339933', icon: <Terminal size={18} />, evidence: 'Used in: AgroNexa LK & FinBridge APIs' },
    { name: 'MySQL RDBMS', type: 'Relational DB', level: 88, category: 'backend', color: '#00758F', icon: <Database size={18} />, evidence: 'Used in: FundManagement & Banking Apps' },
    { name: 'PostgreSQL', type: 'Relational DB', level: 85, category: 'backend', color: '#336791', icon: <Database size={18} />, evidence: 'Used in: AgroNexa LK Crypto Ledger' },
    { name: 'RESTful API Design', type: 'Web Service', level: 92, category: 'backend', color: '#38ef7d', icon: <Layers size={18} />, evidence: 'Used in: Decodelabs & FinBridge' },

    // Business Analysis & Project Management
    { name: 'Requirements Engineering', type: 'SRS / BRD', level: 90, category: 'ba', color: '#38ef7d', icon: <FileCheck size={18} />, evidence: 'Applied in: HNDIT Modules & Decodelabs' },
    { name: 'BPMN 2.0 & UML Modeling', type: 'Process Modeling', level: 88, category: 'ba', color: '#00f2fe', icon: <LayoutList size={18} />, evidence: 'Applied in: System Analysis & Banking Specs' },
    { name: 'Agile & Scrum Framework', type: 'Delivery Method', level: 92, category: 'ba', color: '#9b51e0', icon: <Workflow size={18} />, evidence: 'Applied in: Decodelabs Internship' },
    { name: 'IT Project Planning', type: 'Backlog & Sprints', level: 86, category: 'ba', color: '#ff6384', icon: <Target size={18} />, evidence: 'Applied in: Academic & Industry Projects' },

    // Tools & Platforms
    { name: 'Git & GitHub', type: 'Version Control', level: 94, category: 'tools', color: '#f05032', icon: <Terminal size={18} />, evidence: 'Applied in: All Project Repositories' },
    { name: 'Vite & Webpack', type: 'Build Tool', level: 90, category: 'tools', color: '#646cff', icon: <Cpu size={18} />, evidence: 'Applied in: Portfolio & React Apps' },
    { name: 'Postman', type: 'API Testing', level: 88, category: 'tools', color: '#ff6c37', icon: <Layers size={18} />, evidence: 'Applied in: REST API Integration' },
    { name: 'Vercel Deployment', type: 'Cloud Hosting', level: 92, category: 'tools', color: '#ffffff', icon: <Layers size={18} />, evidence: 'Applied in: Production Deployments' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            Skills & Tech Competencies
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '1rem' }}>
            Technical proficiency spanning modern full-stack web development, database management, and agile software delivery.
          </p>
        </div>

        {/* Skill Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: activeCategory === cat.id ? 'var(--accent-cyan)' : 'var(--card-bg)',
                color: activeCategory === cat.id ? '#05070a' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: activeCategory === cat.id ? 'var(--accent-cyan)' : 'var(--card-border)',
                borderRadius: '12px',
                padding: '10px 22px',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeCategory === cat.id ? '0 0 15px rgba(0, 242, 254, 0.3)' : 'none',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Unified Skills Grid */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '20px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.015)';
                e.currentTarget.style.boxShadow = `0 15px 30px rgba(0,0,0,0.2), 0 0 20px -5px ${skill.color}50`;
                e.currentTarget.style.borderColor = skill.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--card-border)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      background: `${skill.color}15`,
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
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>{skill.name}</span>
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: skill.color,
                    background: `${skill.color}12`,
                    padding: '4px 10px',
                    borderRadius: '999px',
                    border: `1px solid ${skill.color}30`,
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
                  <span style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}bb)`,
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
          ))}
        </div>
      </div>
    </section>
  );
}
