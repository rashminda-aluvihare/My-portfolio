import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const MEDIUM_USERNAME = '@rashmindaluvihare';
const MEDIUM_PROFILE_URL = 'https://medium.com/@rashmindaluvihare';
const RSS_API_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${MEDIUM_USERNAME}`;

// Reliable fallback so the section is never empty
const FALLBACK_BLOGS = [
  {
    title: 'Business Process Reengineering vs. Continuous Improvement',
    pubDate: '2026-09-13 13:10:01',
    link: 'https://medium.com/@rashmindaluvihare/business-process-reengineering-vs-continuous-improvement-22ebf5bbf0b1?source=rss-ac72ecc3419e------2',
    thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*01nzBJ59N3dfY6NiE1g1qQ.png',
    readTime: '4 min read',
  },
];

export default function Blogs() {
  const [blogs, setBlogs] = useState(FALLBACK_BLOGS);
  const [loading, setLoading] = useState(true);

  // Helper to extract cover image from content or description if thumbnail field is empty
  const extractThumbnail = (item) => {
    if (item.thumbnail && item.thumbnail.trim() !== '') {
      return item.thumbnail;
    }
    const html = item.content || item.description || '';
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    if (match && match[1]) {
      return match[1];
    }
    return 'https://cdn-images-1.medium.com/max/1024/1*01nzBJ59N3dfY6NiE1g1qQ.png';
  };

  // Helper to estimate reading time
  const calculateReadTime = (item) => {
    const raw = item.content || item.description || '';
    const text = raw.replace(/<[^>]+>/g, '');
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(2, Math.ceil(wordCount / 200));
    return `${minutes} min read`;
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
            link: item.link,
            thumbnail: extractThumbnail(item),
            readTime: calculateReadTime(item),
          }));

          if (isMounted) {
            setBlogs(parsedBlogs);
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
        padding: 'clamp(60px, 8vw, 90px) 0',
      }}
    >
      <div className="container">
        <div className="blog-inner-container">
          {/* Section Header Row */}
          <div className="blog-header-row">
            <h2 className="blog-header-title">Blogs</h2>

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

          {/* Blogs List */}
          <div className="blog-cards-list">
          {blogs.map((blog, index) => {
            const formattedDate = new Date(blog.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });

            return (
              <article key={index} className="blog-compact-card">
                {/* Left Thumbnail Image */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-thumb-wrapper"
                  aria-label={blog.title}
                >
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="blog-thumb-img"
                    loading="lazy"
                    decoding="async"
                  />
                </a>

                {/* Right Content */}
                <div className="blog-content-col">
                  {/* Meta: Date & Read time */}
                  <div className="blog-meta-line">
                    <span className="blog-meta-item">
                      <Calendar size={13} className="blog-meta-cal-icon" />
                      <span>{formattedDate}</span>
                    </span>
                    <span className="blog-meta-dot">•</span>
                    <span className="blog-meta-item">
                      <Clock size={13} className="blog-meta-clock-icon" />
                      <span>{blog.readTime || '4 min read'}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="blog-card-heading">
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-heading-link"
                    >
                      {blog.title}
                    </a>
                  </h3>

                  {/* Read Story Link */}
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-read-story-btn"
                  >
                    <span>Read Story</span>
                    <ArrowRight size={14} className="blog-read-arrow" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        </div>
      </div>

      <style>{`
        /* Inner Container - Left Aligned to match other sections */
        .blog-inner-container {
          max-width: 860px;
          width: 100%;
          margin: 0;
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
          color: #2563EB;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          padding: 6px 0;
          white-space: nowrap;
          transition: gap 0.2s ease, color 0.2s ease;
          font-family: var(--font-display);
        }

        .blog-view-all-link:hover {
          color: #1D4ED8;
          gap: 9px;
        }

        /* Cards List */
        .blog-cards-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Compact Horizontal Card */
        .blog-compact-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 20px;
          padding: 16px 20px;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .blog-compact-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.08);
          border-color: rgba(37, 99, 235, 0.3);
        }

        /* Thumbnail Image */
        .blog-thumb-wrapper {
          width: 170px;
          height: 125px;
          flex-shrink: 0;
          border-radius: 14px;
          overflow: hidden;
          display: block;
          background: #F8FAFC;
        }

        .blog-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.4s ease;
        }

        .blog-compact-card:hover .blog-thumb-img {
          transform: scale(1.04);
        }

        /* Content Column */
        .blog-content-col {
          display: flex;
          flex-direction: column;
          justifyContent: center;
          gap: 10px;
          flex: 1;
          min-width: 0;
        }

        /* Meta Line */
        .blog-meta-line {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 500;
          color: #64748B;
          font-family: var(--font-display);
        }

        .blog-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .blog-meta-cal-icon {
          color: #2563EB;
        }

        .blog-meta-clock-icon {
          color: #94A3B8;
        }

        .blog-meta-dot {
          color: #CBD5E1;
        }

        /* Card Heading */
        .blog-card-heading {
          font-size: clamp(1.05rem, 2vw, 1.22rem);
          font-weight: 800;
          line-height: 1.35;
          margin: 0;
          letter-spacing: -0.02em;
          font-family: var(--font-display);
        }

        .blog-heading-link {
          color: #0F172A;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .blog-heading-link:hover {
          color: #2563EB;
        }

        /* Read Story Button */
        .blog-read-story-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #2563EB;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: gap 0.2s ease, color 0.2s ease;
          font-family: var(--font-display);
          width: fit-content;
        }

        .blog-read-story-btn:hover {
          color: #1D4ED8;
          gap: 9px;
        }

        .blog-read-arrow {
          transition: transform 0.2s ease;
        }

        .blog-read-story-btn:hover .blog-read-arrow {
          transform: translateX(2px);
        }

        /* Dark Mode Overrides */
        [data-theme="dark"] .blog-header-title {
          color: #F8FAFC !important;
        }

        [data-theme="dark"] .blog-view-all-link {
          color: #38BDF8 !important;
        }

        [data-theme="dark"] .blog-compact-card {
          background: #111827 !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;
        }

        [data-theme="dark"] .blog-compact-card:hover {
          border-color: rgba(96, 165, 250, 0.4) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.55), 0 0 20px rgba(56, 189, 248, 0.15) !important;
        }

        [data-theme="dark"] .blog-thumb-wrapper {
          background: #0B0F19 !important;
        }

        [data-theme="dark"] .blog-heading-link {
          color: #F8FAFC !important;
        }

        [data-theme="dark"] .blog-heading-link:hover {
          color: #38BDF8 !important;
        }

        [data-theme="dark"] .blog-meta-line {
          color: #94A3B8 !important;
        }

        [data-theme="dark"] .blog-read-story-btn {
          color: #38BDF8 !important;
        }

        /* Mobile Breakpoint */
        @media (max-width: 560px) {
          .blog-compact-card {
            padding: 12px 14px !important;
            gap: 14px !important;
          }
          .blog-thumb-wrapper {
            width: 115px !important;
            height: 95px !important;
            border-radius: 10px !important;
          }
          .blog-card-heading {
            font-size: 0.95rem !important;
            line-height: 1.3 !important;
          }
          .blog-meta-line {
            font-size: 0.74rem !important;
            gap: 6px !important;
          }
          .blog-read-story-btn {
            font-size: 0.82rem !important;
          }
          .blog-header-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
