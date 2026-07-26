import { useState } from 'react';
import { Database, Code2, Cpu, FileCheck, Target, Workflow, LayoutList, Terminal, Layers } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech & Skills' },
    { id: 'dev', label: 'Software & Web Dev' },
    { id: 'ba', label: 'BA & Management' },
    { id: 'db', label: 'Data & System Architecture' },
  ];

  const skills = [
    // Project Management & Business Analysis
    { name: 'Agile Methodology', type: 'Methodology', level: 92, category: 'ba', color: '#9b51e0', icon: <Workflow size={18} /> },
    { name: 'Scrum Framework', type: 'Agile', level: 90, category: 'ba', color: '#00f2fe', icon: <Workflow size={18} /> },
    { name: 'Project Planning', type: 'Management', level: 85, category: 'ba', color: '#ff6384', icon: <Target size={18} /> },
    { name: 'Requirement Engineering', type: 'Business Analysis', level: 88, category: 'ba', color: '#38ef7d', icon: <FileCheck size={18} /> },
    { name: 'Business Process Modeling', type: 'BPMN 2.0', level: 86, category: 'ba', color: '#00758F', icon: <LayoutList size={18} /> },
    { name: 'Requirements Gathering', type: 'SRS / BRD', level: 90, category: 'ba', color: '#00f2fe', icon: <FileCheck size={18} /> },

    // Software Development
    { name: 'Next.js & TypeScript', type: 'Fullstack Stack', level: 90, category: 'dev', color: '#0070f3', icon: <Code2 size={18} /> },
    { name: 'React 19 & Zustand', type: 'Frontend Logic', level: 94, category: 'dev', color: '#61dafb', icon: <Code2 size={18} /> },
    { name: 'Tailwind & Framer Motion', type: 'UI & Animations', level: 92, category: 'dev', color: '#38bdf8', icon: <Code2 size={18} /> },
    { name: 'JavaScript (ES6+)', type: 'Core Language', level: 95, category: 'dev', color: '#f7df1e', icon: <Code2 size={18} /> },
    { name: 'PHP & MySQL', type: 'Backend Stack', level: 88, category: 'dev', color: '#4F5D95', icon: <Terminal size={18} /> },
    { name: 'Java SE (OOP)', type: 'Core Language', level: 85, category: 'dev', color: '#b07219', icon: <Cpu size={18} /> },

    // Database & Architecture
    { name: 'SQL & Database Design', type: 'Query Language', level: 90, category: 'db', color: '#f1e05a', icon: <Database size={18} /> },
    { name: 'MySQL RDBMS', type: 'Database', level: 88, category: 'db', color: '#00758F', icon: <Database size={18} /> },
    { name: 'System Analysis & UML', type: 'Architecture', level: 87, category: 'db', color: '#00f2fe', icon: <Cpu size={18} /> },
    { name: 'RESTful APIs', type: 'Integration', level: 92, category: 'dev', color: '#38ef7d', icon: <Layers size={18} /> },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
