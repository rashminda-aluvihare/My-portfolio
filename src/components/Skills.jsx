import { useState } from 'react';
import { Database, Code2, Cpu, FileCheck, Target, Workflow, LayoutList, Terminal } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'pm_ba', name: 'PM & Business Analysis' },
    { id: 'dev', name: 'Software Development' },
    { id: 'db', name: 'Database & Architecture' },
  ];

  const skills = [
    // Project Management & Business Analysis
    { name: 'Requirements Gathering', category: 'pm_ba', type: 'Business Analysis', color: '#00f2fe', icon: <FileCheck size={18} /> },
    { name: 'Agile & Scrum', category: 'pm_ba', type: 'Methodology', color: '#9b51e0', icon: <Workflow size={18} /> },
    { name: 'Project Planning', category: 'pm_ba', type: 'Management', color: '#ff6384', icon: <Target size={18} /> },
    { name: 'UML & BPMN Modeling', category: 'pm_ba', type: 'System Design', color: '#00758F', icon: <LayoutList size={18} /> },
    { name: 'Process Improvement', category: 'pm_ba', type: 'Business Analysis', color: '#38ef7d', icon: <Workflow size={18} /> },

    // Software Development
    { name: 'Next.js & TypeScript', category: 'dev', type: 'Fullstack Stack', color: '#0070f3', icon: <Code2 size={18} /> },
    { name: 'React 19 & Zustand', category: 'dev', type: 'Frontend Logic', color: '#61dafb', icon: <Code2 size={18} /> },
    { name: 'Tailwind & Framer Motion', category: 'dev', type: 'UI & Animations', color: '#38bdf8', icon: <Code2 size={18} /> },
    { name: 'Recharts Visualization', category: 'dev', type: 'Data Analytics', color: '#ff7300', icon: <Cpu size={18} /> },
    { name: 'JavaScript (ES6+)', category: 'dev', type: 'Core Frontend', color: '#f7df1e', icon: <Code2 size={18} /> },
    { name: 'PHP', category: 'dev', type: 'Backend Stack', color: '#4F5D95', icon: <Terminal size={18} /> },
    { name: 'Java SE', category: 'dev', type: 'OOP Language', color: '#b07219', icon: <Cpu size={18} /> },
    { name: 'Responsive Web UI', category: 'dev', type: 'CSS Design', color: '#9b51e0', icon: <Code2 size={18} /> },

    // Database & Architecture
    { name: 'SQL', category: 'db', type: 'Query Language', color: '#f1e05a', icon: <Database size={18} /> },
    { name: 'MySQL', category: 'db', type: 'RDBMS', color: '#00758F', icon: <Database size={18} /> },
    { name: 'System Analysis', category: 'db', type: 'Architecture', color: '#00f2fe', icon: <Cpu size={18} /> },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            Skills & Tech Stack
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '10px' }}>
            My technical competencies and toolsets categorized by stack layers.
          </p>
        </div>

        {/* Filter categories */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: activeCategory === cat.id ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.03)',
                color: activeCategory === cat.id ? '#fff' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: activeCategory === cat.id ? 'var(--accent-cyan)' : 'var(--card-border)',
                borderRadius: '12px',
                padding: '10px 24px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                boxShadow: activeCategory === cat.id ? '0 0 15px rgba(0, 242, 254, 0.3)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'var(--transition-bounce)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 15px 30px rgba(0,0,0,0.4), 0 0 20px -5px ${skill.color}50`;
                e.currentTarget.style.borderColor = skill.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--card-border)';
              }}
            >
              {/* Top Row: Skill Icon & Name & Label */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      background: `${skill.color}15`,
                      color: skill.color,
                      padding: '8px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{skill.name}</span>
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: skill.color,
                    background: `${skill.color}12`,
                    padding: '4px 10px',
                    borderRadius: '999px',
                    border: `1px solid ${skill.color}30`,
                  }}
                >
                  {skill.type}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
