import { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Building2,
  Tag,
  Compass,
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
  const [activeGallery, setActiveGallery] = useState(null); // { title, images, currentIndex }
  const [zoomLevel, setZoomLevel] = useState(1);

  // Close lightbox on Escape key & Arrow navigation
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

  // Helper to normalize images list (support both item.images array and item.image single string)
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
    <section id="activities" className="section" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
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
            <span>EXPOSURE & FIELD VISITS</span>
          </div>

          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
            Activities & Industry Visits
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '10px' }}>
            A log of my industry exposures, tech tours, field studies, and academic activities. Click any photo to zoom.
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
          {activities.map((item) => {
            const allImages = getItemImages(item);
            const totalCount = allImages.length;

            return (
              <div
                key={item.id}
                className="glass-panel"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  borderRadius: '16px',
                  transition: 'all 0.2s ease',
                  overflow: 'hidden',
                }}
              >
                {/* Dynamic Responsive Photo Gallery Grid */}
                {totalCount > 0 && (
                  <div
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid var(--card-border)',
                      background: 'rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {totalCount === 1 ? (
                      // Single Photo Banner
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
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(0, 0, 0, 0.3)',
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
                              background: 'rgba(0, 0, 0, 0.7)',
                              padding: '8px 14px',
                              borderRadius: '20px',
                              color: '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                            }}
                          >
                            <Maximize2 size={14} /> Zoom Photo
                          </div>
                        </div>
                      </div>
                    ) : totalCount === 2 ? (
                      // Dual Photo Grid
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
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease',
                              }}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                                background: 'rgba(0, 0, 0, 0.6)',
                                padding: '4px',
                                borderRadius: '50%',
                                color: '#fff',
                                display: 'flex',
                              }}
                            >
                              <Maximize2 size={12} />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Multi-Photo Gallery (3+ Photos)
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '2fr 1fr',
                          gap: '4px',
                          height: '210px',
                        }}
                      >
                        {/* Main Featured Photo */}
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
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease',
                            }}
                          />
                        </div>

                        {/* Secondary Photos Stack */}
                        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '4px', height: '100%' }}>
                          <div
                            onClick={() => openLightbox(item.title, allImages, 1)}
                            style={{ position: 'relative', cursor: 'zoom-in', overflow: 'hidden' }}
                          >
                            <img
                              src={allImages[1]}
                              alt={`${item.title} 2`}
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
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />

                            {/* +N More Overlay if more than 3 photos */}
                            {totalCount > 3 && (
                              <div
                                style={{
                                  position: 'absolute',
                                  inset: 0,
                                  background: 'rgba(0, 0, 0, 0.75)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: '#fff',
                                  fontWeight: 800,
                                  fontSize: '1rem',
                                  backdropFilter: 'blur(2px)',
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
                          padding: '4px 10px',
                          borderRadius: '6px',
                          display: 'inline-block',
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

      {/* FULL SCREEN LIGHTBOX MODAL */}
      {activeGallery && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(5, 7, 15, 0.94)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={closeLightbox}
        >
          {/* Modal Header Controls Bar */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 10000,
              color: '#fff',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{activeGallery.title}</h4>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                Photo {activeGallery.currentIndex + 1} of {activeGallery.images.length}
              </p>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={handleZoomIn}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                }}
                title="Zoom In"
              >
                <ZoomIn size={18} /> Zoom In
              </button>

              <button
                onClick={handleZoomOut}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                }}
                title="Zoom Out"
              >
                <ZoomOut size={18} /> Zoom Out
              </button>

              <button
                onClick={closeLightbox}
                style={{
                  background: 'rgba(255, 0, 85, 0.2)',
                  border: '1px solid rgba(255, 0, 85, 0.4)',
                  color: '#fff',
                  padding: '8px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Main Image View Container */}
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '75vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'auto',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeGallery.images[activeGallery.currentIndex]}
              alt={`${activeGallery.title} full view`}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                transform: `scale(${zoomLevel})`,
                transition: 'transform 0.25 ease',
                borderRadius: '12px',
                cursor: zoomLevel > 1 ? 'grab' : 'default',
              }}
            />
          </div>

          {/* Navigation Arrows (Prev / Next) if multiple images */}
          {activeGallery.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                style={{
                  position: 'absolute',
                  left: '30px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  padding: '14px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  zIndex: 10001,
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
                }}
                title="Previous Photo (Left Arrow)"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                style={{
                  position: 'absolute',
                  right: '30px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  padding: '14px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  zIndex: 10001,
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
                }}
                title="Next Photo (Right Arrow)"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Bottom Thumbnails Strip */}
          {activeGallery.images.length > 1 && (
            <div
              style={{
                position: 'absolute',
                bottom: '25px',
                display: 'flex',
                gap: '10px',
                zIndex: 10000,
                background: 'rgba(0, 0, 0, 0.6)',
                padding: '8px 16px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {activeGallery.images.map((thumb, tIdx) => (
                <div
                  key={tIdx}
                  onClick={() => {
                    setActiveGallery((prev) => ({ ...prev, currentIndex: tIdx }));
                    setZoomLevel(1);
                  }}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: tIdx === activeGallery.currentIndex ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                    opacity: tIdx === activeGallery.currentIndex ? 1 : 0.6,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <img src={thumb} alt="thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
