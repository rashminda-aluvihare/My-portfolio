import { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from 'lucide-react';
import { activitiesData } from '../data/activitiesData';

export default function Activities() {
  const [activities] = useState(activitiesData);

  // Lightbox Modal state
  const [activeGallery, setActiveGallery] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeGallery) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGallery]);

  const openLightbox = (title, images, startIndex = 0) => {
    setActiveGallery({ title, images, currentIndex: startIndex });
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveGallery(null);
    setZoomLevel(1);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (!activeGallery) return;
    setActiveGallery((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
    setZoomLevel(1);
  };

  const prevImage = () => {
    if (!activeGallery) return;
    setActiveGallery((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
    setZoomLevel(1);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 1));

  const getItemImages = (item) => {
    if (item.images && Array.isArray(item.images) && item.images.length > 0) {
      return item.images.filter(Boolean);
    }
    if (item.image) {
      return [item.image];
    }
    return [];
  };

  return (
    <section id="activities" className="section section-light" style={{ backgroundColor: '#F8FAFC', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '50px' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>
            ACTIVITIES &amp; LEADERSHIP / 07
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 900, color: '#0B0C0E', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Extracurricular &amp; Leadership Engagements
          </h2>
          <p style={{ color: '#6B7280', fontSize: '1.05rem', marginTop: '10px', maxWidth: '750px' }}>
            Active participation in technology communities, industrial site visits, and school-level leadership initiatives.
          </p>
        </div>

        {/* Activities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: '24px',
          }}
        >
          {activities.map((item) => {
            const allImages = getItemImages(item);
            const totalCount = allImages.length;

            return (
              <div
                key={item.id}
                className="card-flat-light"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  borderRadius: '16px',
                  height: '100%',
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.09)',
                }}
              >
                {/* Responsive Photo Gallery Grid */}
                {totalCount > 0 && (
                  <div
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid rgba(0,0,0,0.08)',
                      background: '#F4F3EF',
                    }}
                  >
                    {totalCount === 1 ? (
                      <div
                        onClick={() => openLightbox(item.title, allImages, 0)}
                        style={{
                          height: '200px',
                          position: 'relative',
                          cursor: 'zoom-in',
                          overflow: 'hidden',
                        }}
                        className="photo-hover-container"
                      >
                        <img
                          src={allImages[0]}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(11, 12, 14, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0,
                            transition: 'opacity 0.2s ease',
                          }}
                          className="hover-overlay"
                        >
                          <div
                            style={{
                              background: '#2563EB',
                              padding: '8px 16px',
                              borderRadius: '999px',
                              color: '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              fontFamily: 'var(--font-display)',
                              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
                            }}
                          >
                            <Maximize2 size={14} /> Zoom Photo
                          </div>
                        </div>
                      </div>
                    ) : totalCount === 2 ? (
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '4px',
                          height: '180px',
                        }}
                      >
                        {allImages.map((imgSrc, idx) => (
                          <div
                            key={idx}
                            onClick={() => openLightbox(item.title, allImages, idx)}
                            style={{
                              position: 'relative',
                              cursor: 'zoom-in',
                              height: '100%',
                              overflow: 'hidden',
                            }}
                          >
                            <img
                              src={imgSrc}
                              alt={`${item.title} ${idx + 1}`}
                              loading="lazy"
                              decoding="async"
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease',
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '2fr 1fr',
                          gap: '4px',
                          height: '210px',
                        }}
                      >
                        <div
                          onClick={() => openLightbox(item.title, allImages, 0)}
                          style={{
                            position: 'relative',
                            cursor: 'zoom-in',
                            height: '100%',
                            overflow: 'hidden',
                          }}
                        >
                          <img
                            src={allImages[0]}
                            alt={`${item.title} main`}
                            loading="lazy"
                            decoding="async"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease',
                            }}
                          />
                        </div>

                        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '4px', height: '100%' }}>
                          <div
                            onClick={() => openLightbox(item.title, allImages, 1)}
                            style={{ position: 'relative', cursor: 'zoom-in', overflow: 'hidden' }}
                          >
                            <img
                              src={allImages[1]}
                              alt={`${item.title} 2`}
                              loading="lazy"
                              decoding="async"
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </div>

                          <div
                            onClick={() => openLightbox(item.title, allImages, 2)}
                            style={{ position: 'relative', cursor: 'zoom-in', overflow: 'hidden' }}
                          >
                            <img
                              src={allImages[2]}
                              alt={`${item.title} 3`}
                              loading="lazy"
                              decoding="async"
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />

                            {totalCount > 3 && (
                              <div
                                style={{
                                  position: 'absolute',
                                  inset: 0,
                                  background: 'rgba(11, 12, 14, 0.75)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: '#fff',
                                  fontWeight: 800,
                                  fontSize: '0.95rem',
                                  backdropFilter: 'blur(2px)',
                                  fontFamily: 'var(--font-display)',
                                }}
                              >
                                +{totalCount - 2} More
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Header Badge & Date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#2563EB',
                      background: '#EFF6FF',
                      border: '1px solid rgba(37, 99, 235, 0.25)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {item.category}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6B7280', fontSize: '0.8rem', fontWeight: 600 }}>
                    <Calendar size={13} />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Title & Organization Header Container */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B0C0E', marginBottom: '6px', lineHeight: '1.3', letterSpacing: '-0.02em' }}>
                    {item.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#6B7280', fontSize: '0.85rem', flexWrap: 'wrap' }}>
                    {item.organization && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Building2 size={14} style={{ color: '#2563EB' }} />
                        {item.organization}
                      </span>
                    )}

                    {item.location && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={14} style={{ color: '#2563EB' }} />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                )}

                {/* Role & Contribution */}
                {item.contribution && (
                  <div style={{ background: '#F1F5F9', borderLeft: '3px solid #2563EB', padding: '10px 14px', borderRadius: '0 8px 8px 0', fontSize: '0.86rem', color: '#4B5563' }}>
                    <strong style={{ color: '#0B0C0E', display: 'block', marginBottom: '2px', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Role &amp; Contribution:</strong>
                    <span>{item.contribution}</span>
                  </div>
                )}

                {/* Key Outcome */}
                {item.outcome && (
                  <div style={{ fontSize: '0.84rem', color: '#059669', fontWeight: 600 }}>
                    <span style={{ color: '#0B0C0E', fontWeight: 700 }}>Key Outcome:</span> {item.outcome}
                  </div>
                )}

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', paddingTop: '4px' }}>
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          color: '#4B5563',
                          background: '#F4F3EF',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {activeGallery && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background: 'rgba(11, 12, 14, 0.96)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px',
          }}
          onClick={closeLightbox}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              zIndex: 10,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem', fontFamily: 'var(--font-display)' }}>
              {activeGallery.title}{' '}
              <span style={{ color: '#60A5FA', fontSize: '0.9rem', fontWeight: 700 }}>
                ({activeGallery.currentIndex + 1}/{activeGallery.images.length})
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handleZoomIn}
                style={modalControlBtnStyle}
                title="Zoom In"
              >
                <ZoomIn size={18} />
              </button>
              <button
                onClick={handleZoomOut}
                style={modalControlBtnStyle}
                title="Zoom Out"
              >
                <ZoomOut size={18} />
              </button>
              <button
                onClick={closeLightbox}
                style={{
                  ...modalControlBtnStyle,
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                }}
                title="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Main Image View */}
          <div
            style={{
              position: 'relative',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {activeGallery.images.length > 1 && (
              <button
                onClick={prevImage}
                style={{
                  ...navArrowStyle,
                  left: '20px',
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={26} />
              </button>
            )}

            <div
              style={{
                maxWidth: '90vw',
                maxHeight: '75vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'auto',
              }}
            >
              <img
                src={activeGallery.images[activeGallery.currentIndex]}
                alt={activeGallery.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.2s ease',
                  cursor: zoomLevel > 1 ? 'grab' : 'default',
                }}
              />
            </div>

            {activeGallery.images.length > 1 && (
              <button
                onClick={nextImage}
                style={{
                  ...navArrowStyle,
                  right: '20px',
                }}
                aria-label="Next image"
              >
                <ChevronRight size={26} />
              </button>
            )}
          </div>

          {/* Footer Close Button */}
          <div style={{ display: 'flex', justifyContent: 'center', zIndex: 10 }}>
            <button
              onClick={closeLightbox}
              className="btn-orange"
              style={{ padding: '8px 24px', fontSize: '0.88rem' }}
            >
              <X size={16} />
              <span>Close Gallery</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        .photo-hover-container:hover .hover-overlay {
          opacity: 1 !important;
        }
        .photo-hover-container:hover img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}

const modalControlBtnStyle = {
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  color: '#ffffff',
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};

const navArrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(11, 12, 14, 0.85)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#ffffff',
  width: '46px',
  height: '46px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 20,
  backdropFilter: 'blur(8px)',
  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
  transition: 'all 0.2s ease',
};
