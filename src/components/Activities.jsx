import { useState } from 'react';
import { Calendar, MapPin, Building2, Tag, Compass } from 'lucide-react';
import { activitiesData } from '../data/activitiesData';

export default function Activities() {
  const [activities] = useState(activitiesData);

  return (
    <section id="activities" className="section" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(155, 81, 224, 0.1)',
              border: '1px solid rgba(155, 81, 224, 0.25)',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--accent-purple)',
              marginBottom: '12px',
            }}
          >
            <Compass size={16} />
            <span>EXPOSURE & FIELD VISITS</span>
          </div>

          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            Activities & Industry Visits
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '10px' }}>
            A log of my industry exposures, tech tours, field studies, and academic activities.
          </p>
        </div>

        {/* Activities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {activities.map((item) => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderRadius: '16px',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Header Badge & Date */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid rgba(0, 242, 254, 0.2)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                  }}
                >
                  {item.category}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600 }}>
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Title & Organization */}
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {item.title}
                </h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {item.organization && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Building2 size={14} style={{ color: 'var(--accent-purple)' }} />
                      {item.organization}
                    </span>
                  )}

                  {item.location && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} style={{ color: 'var(--accent-cyan)' }} />
                      {item.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, flex: 1 }}>
                {item.description}
              </p>

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                  {item.tags.map((tag, tIdx) => (
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
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Tag size={12} style={{ color: 'var(--accent-purple)' }} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
