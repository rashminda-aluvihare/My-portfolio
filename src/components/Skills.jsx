import { Database, Code2, Cpu, FileCheck, Target, Workflow, LayoutList, Terminal } from 'lucide-react';

export default function Skills() {
  const skills = [
    // Project Management & Business Analysis
    { name: 'Requirements Gathering', type: 'Business Analysis', color: '#00f2fe', icon: <FileCheck size={18} /> },
    { name: 'Agile & Scrum', type: 'Methodology', color: '#9b51e0', icon: <Workflow size={18} /> },
    { name: 'Project Planning', type: 'Management', color: '#ff6384', icon: <Target size={18} /> },
    { name: 'UML & BPMN Modeling', type: 'System Design', color: '#00758F', icon: <LayoutList size={18} /> },
    { name: 'Process Improvement', type: 'Business Analysis', color: '#38ef7d', icon: <Workflow size={18} /> },

    // Software Development
    { name: 'Next.js & TypeScript', type: 'Fullstack Stack', color: '#0070f3', icon: <Code2 size={18} /> },
    { name: 'React 19 & Zustand', type: 'Frontend Logic', color: '#61dafb', icon: <Code2 size={18} /> },
    { name: 'Tailwind & Framer Motion', type: 'UI & Animations', color: '#38bdf8', icon: <Code2 size={18} /> },
    { name: 'Recharts Visualization', type: 'Data Analytics', color: '#ff7300', icon: <Cpu size={18} /> },
    { name: 'JavaScript (ES6+)', type: 'Core Frontend', color: '#f7df1e', icon: <Code2 size={18} /> },
    { name: 'PHP', type: 'Backend Stack', color: '#4F5D95', icon: <Terminal size={18} /> },
    { name: 'Java SE', type: 'OOP Language', color: '#b07219', icon: <Cpu size={18} /> },
    { name: 'Responsive Web UI', type: 'CSS Design', color: '#9b51e0', icon: <Code2 size={18} /> },

    // Database & Architecture
    { name: 'SQL', type: 'Query Language', color: '#f1e05a', icon: <Database size={18} /> },
    { name: 'MySQL', type: 'RDBMS', color: '#00758F', icon: <Database size={18} /> },
    { name: 'System Analysis', type: 'Architecture', color: '#00f2fe', icon: <Cpu size={18} /> },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            Skills & Tech Stack
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '10px' }}>
            My technical competencies, business analysis toolsets, and software engineering capabilities.
          </p>
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
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'var(--transition-bounce)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 15px 30px rgba(0,0,0,0.15), 0 0 20px -5px ${skill.color}50`;
                e.currentTarget.style.borderColor = skill.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--card-border)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
                <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{skill.name}</span>
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
                  whiteSpace: 'nowrap',
                }}
              >
                {skill.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
