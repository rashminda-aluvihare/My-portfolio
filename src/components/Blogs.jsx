import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const MEDIUM_USERNAME = '@rashmindaluvihare';
const MEDIUM_PROFILE_URL = 'https://medium.com/@rashmindaluvihare';
const RSS_API_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${MEDIUM_USERNAME}`;

// Reliable fallback with all 3 published articles so the section is always populated and fast
const FALLBACK_BLOGS = [
  {
    title: 'When Digital Payments Don’t Match: Understanding Payment Reconciliation',
    pubDate: '2026-10-09 10:17:00',
    link: 'https://medium.com/@rashmindaluvihare/when-digital-payments-dont-match-understanding-payment-reconciliation-d04d48a9de9b',
    thumbnail: '/payment_reconciliation.png',
  },
  {
    title: 'How E-Wallets Work: The Role of Tokenization in Digital Payments',
    pubDate: '2026-09-21 12:08:14',
    link: 'https://medium.com/@rashmindaluvihare/how-e-wallets-work-the-role-of-tokenization-in-digital-payments-029e24889091',
    thumbnail: '/ewallet_tokenization.png',
  },
  {
    title: 'Business Process Reengineering vs. Continuous Improvement',
    pubDate: '2026-09-13 13:10:01',
    link: 'https://medium.com/@rashmindaluvihare/business-process-reengineering-vs-continuous-improvement-22ebf5bbf0b1',
    thumbnail: '/bpr_vs_ci.png',
  },
];

export default function Blogs() {
  const [blogs, setBlogs] = useState(FALLBACK_BLOGS);
  const [_loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth * 0.8;
      const index = Math.round(container.scrollLeft / (cardWidth || 1));
      setActiveIndex(Math.min(Math.max(index, 0), blogs.length - 1));
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -290, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 290, behavior: 'smooth' });
    }
  };

  const scrollToCard = (idx) => {
    if (scrollContainerRef.current) {
      const cards = scrollContainerRef.current.querySelectorAll('.blog-card-slot');
      if (cards[idx]) {
        cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
    }
  };

  // Helper to extract cover image from content or description if thumbnail field is empty
  const extractThumbnail = (item) => {
    const titleLower = (item.title || '').toLowerCase();
    if (titleLower.includes('reconciliation') || titleLower.includes('match')) {
      return '/payment_reconciliation.png';
    }
    if (titleLower.includes('tokenization') || titleLower.includes('wallet')) {
      return '/ewallet_tokenization.png';
    }
    if (item.thumbnail && item.thumbnail.trim() !== '') {
      return item.thumbnail;
    }
    const html = item.content || item.description || '';
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    if (match && match[1]) {
      return match[1];
    }
    return '/bpr_vs_ci.png';
  };

  useEffect(() => {
    let isMounted = true;

    const fetchBlogs = async () => {
      try {
        const response = await fetch(RSS_API_URL);
        const data = await response.json();

        if (data.status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
          const parsedBlogs = data.items.map((item) => ({
            title: item.title,
            pubDate: item.pubDate,
            link: item.link ? item.link.split('?')[0] : '',
            thumbnail: extractThumbnail(item),
          }));

          // Merge live fetched items with static FALLBACK_BLOGS
          const blogsMap = new Map();
          parsedBlogs.forEach((blog) => {
            const key = blog.title.toLowerCase().trim();
            blogsMap.set(key, blog);
          });

          FALLBACK_BLOGS.forEach((blog) => {
            const key = blog.title.toLowerCase().trim();
            if (!blogsMap.has(key)) {
              blogsMap.set(key, blog);
            }
          });

          const mergedBlogs = Array.from(blogsMap.values());
          mergedBlogs.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

          if (isMounted) {
            setBlogs(mergedBlogs);
          }
        }
      } catch (err) {
        console.warn('Could not fetch Medium RSS feed live, using cached data.', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="blogs"
      className="section section-white"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(60px, 8vw, 95px) 0',
      }}
    >
      <div className="container">
        <div className="blog-inner-container">
          {/* Section Header Row */}
          <div className="blog-header-row">
            <div>
              <h2 className="blog-header-title">Blogs</h2>
              <p className="blog-mobile-subtitle">Swipe horizontally to browse articles</p>
            </div>

            <div className="blog-header-actions">
              {/* Mobile Prev / Next Arrow Controls */}
              <div className="blog-mobile-nav-buttons">
                <button
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous blog article"
                  className="blog-nav-arrow-btn"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  aria-label="Next blog article"
                  className="blog-nav-arrow-btn"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              <a
                href={MEDIUM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-view-all-link"
              >
                <span>View all</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Blogs Grid - Desktop 3 Columns / Mobile Smooth Horizontal Scroll */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="blog-cards-grid"
          >
            {blogs.map((blog, index) => (
              <article key={index} className="blog-card-slot">
                {/* Top Thumbnail Banner */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-slot-banner"
                  aria-label={blog.title}
                >
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="blog-slot-img"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      if (blog.localFallback) {
                        e.currentTarget.src = blog.localFallback;
                        return;
                      }
                      const title = (blog.title || '').toLowerCase();
                      if (title.includes('reconciliation') || title.includes('match')) {
                        e.currentTarget.src = '/payment_reconciliation.png';
                      } else if (title.includes('tokenization') || title.includes('wallet')) {
                        e.currentTarget.src = '/ewallet_tokenization.png';
                      } else {
                        e.currentTarget.src = '/bpr_vs_ci.png';
                      }
                    }}
                  />
                </a>

                {/* Card Slot Content Body */}
                <div className="blog-slot-body">
                  {/* Title Link */}
                  <h3 className="blog-slot-title">
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-slot-title-link"
                    >
                      {blog.title}
                    </a>
                  </h3>

                  {/* Card Footer Action */}
                  <div className="blog-slot-footer">
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-slot-action-btn"
                    >
                      <span>Read Story</span>
                      <ArrowRight size={14} className="blog-slot-arrow" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile Swipe / Carousel Dot Indicators */}
          <div className="blog-mobile-indicators">
            {blogs.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to article ${i + 1}`}
                className={`blog-dot ${activeIndex === i ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Inner Container - Full width matching container (1240px) */
        .blog-inner-container {
          width: 100%;
          margin: 0 auto;
        }

        /* Header Row */
        .blog-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 32px;
        }

        .blog-header-title {
          font-size: clamp(2.1rem, 4vw, 3.2rem);
          font-weight: 900;
          color: var(--color-text-primary);
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0;
          font-family: var(--font-display);
        }

        .blog-view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #14B8A6;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          padding: 6px 0;
          white-space: nowrap;
          transition: gap 0.2s ease, color 0.2s ease;
          font-family: var(--font-display);
        }

        .blog-view-all-link:hover {
          color: #0F766E;
          gap: 9px;
        }

        /* ── HORIZONTAL CARD SLOTS GRID ── */
        .blog-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }

        /* Individual Card Slot */
        .blog-card-slot {
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
        }

        .blog-card-slot:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(20, 184, 166, 0.14);
          border-color: rgba(20, 184, 166, 0.45);
        }

        /* Top Thumbnail Banner */
        .blog-slot-banner {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9.5;
          background: #0E171E;
          overflow: hidden;
          display: block;
        }

        .blog-slot-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .blog-card-slot:hover .blog-slot-img {
          transform: scale(1.06);
        }

        /* Card Slot Content Body */
        .blog-slot-body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 22px 24px 24px;
          flex: 1;
          gap: 20px;
        }

        /* Title */
        .blog-slot-title {
          font-size: 1.16rem;
          font-weight: 800;
          line-height: 1.4;
          margin: 0;
          letter-spacing: -0.02em;
          font-family: var(--font-display);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 4.2em;
        }

        .blog-slot-title-link {
          color: #0F172A;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .blog-slot-title-link:hover {
          color: #14B8A6;
        }

        /* Footer Action */
        .blog-slot-footer {
          display: flex;
          align-items: center;
          margin-top: auto;
        }

        .blog-slot-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #14B8A6;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          transition: gap 0.2s ease, color 0.2s ease;
          font-family: var(--font-display);
          width: fit-content;
        }

        .blog-slot-action-btn:hover {
          color: #0F766E;
          gap: 10px;
        }

        .blog-slot-arrow {
          transition: transform 0.2s ease;
        }

        .blog-slot-action-btn:hover .blog-slot-arrow {
          transform: translateX(3px);
        }

        /* Dark Mode Overrides */
        [data-theme="dark"] .blog-header-title {
          color: #F8FAFC !important;
        }

        [data-theme="dark"] .blog-view-all-link {
          color: #14B8A6 !important;
        }

        [data-theme="dark"] .blog-view-all-link:hover {
          color: #2DD4BF !important;
        }

        [data-theme="dark"] .blog-card-slot {
          background: #111C22 !important;
          border-color: #1E3A3A !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;
        }

        [data-theme="dark"] .blog-card-slot:hover {
          border-color: #14B8A6 !important;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.55), 0 0 24px rgba(20, 184, 166, 0.18) !important;
        }

        [data-theme="dark"] .blog-slot-banner {
          background: #0B1419 !important;
        }

        [data-theme="dark"] .blog-slot-title-link {
          color: #F8FAFC !important;
        }

        [data-theme="dark"] .blog-slot-title-link:hover {
          color: #2DD4BF !important;
        }

        [data-theme="dark"] .blog-slot-action-btn {
          color: #14B8A6 !important;
        }

        [data-theme="dark"] .blog-slot-action-btn:hover {
          color: #2DD4BF !important;
        }

        /* ── HEADER ACTIONS & CONTROLS ── */
        .blog-header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .blog-mobile-subtitle {
          display: none;
          margin: 6px 0 0;
          font-size: 0.82rem;
          color: #64748B;
          font-family: var(--font-display);
          letter-spacing: 0.01em;
        }

        [data-theme="dark"] .blog-mobile-subtitle {
          color: #94A3B8;
        }

        .blog-mobile-nav-buttons {
          display: none;
          align-items: center;
          gap: 6px;
        }

        .blog-nav-arrow-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.95);
          color: #0F172A;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
        }

        [data-theme="dark"] .blog-nav-arrow-btn {
          background: #16252E;
          border-color: #1E3A3A;
          color: #F8FAFC;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .blog-nav-arrow-btn:active {
          transform: scale(0.92);
          background: #14B8A6;
          color: #FFFFFF;
          border-color: #14B8A6;
        }

        /* ── MOBILE CAROUSEL DOT INDICATORS ── */
        .blog-mobile-indicators {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 14px;
        }

        .blog-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: none;
          background: rgba(148, 163, 184, 0.35);
          cursor: pointer;
          padding: 0;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .blog-dot.active {
          width: 24px;
          background: #14B8A6;
          box-shadow: 0 0 10px rgba(20, 184, 166, 0.6);
        }

        /* ── RESPONSIVE BREAKPOINTS ── */
        @media (max-width: 1024px) {
          .blog-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        /* Mobile View: Smooth Horizontal Touch Carousel (No vertical stack) */
        @media (max-width: 768px) {
          .blog-header-row {
            margin-bottom: 20px;
          }

          .blog-mobile-subtitle {
            display: block;
          }

          .blog-mobile-nav-buttons {
            display: flex;
          }

          .blog-mobile-indicators {
            display: flex;
          }

          .blog-cards-grid {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 16px !important;
            padding: 8px 16px 20px 16px !important;
            margin-left: -16px !important;
            margin-right: -16px !important;
            scroll-padding: 0 16px !important;
            scrollbar-width: none;
          }

          .blog-cards-grid::-webkit-scrollbar {
            display: none;
          }

          .blog-card-slot {
            flex: 0 0 85% !important;
            max-width: 320px !important;
            min-width: 270px !important;
            scroll-snap-align: start !important;
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
          }

          .blog-slot-body {
            padding: 18px 20px 20px !important;
          }

          .blog-slot-title {
            font-size: 1.05rem !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
