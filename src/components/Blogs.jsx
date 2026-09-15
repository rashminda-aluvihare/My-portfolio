import { useState, useEffect } from 'react';
import { ExternalLink, Calendar, Clock, BookOpen, ArrowUpRight, Sparkles } from 'lucide-react';

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
    categories: ['Business Analysis', 'Process Optimization', 'BPR vs CI'],
    description:
      'Every organization eventually hits a point where its processes no longer serve its goals well. The question is never whether to improve it’s how. Two dominant strategies compete for that answer: Business Process Reengineering (BPR) and Continuous Improvement (CI). For a business analyst, knowing when to recommend which is one of the more consequential judgment calls.',
    readTime: '5 min read',
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
    return 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80';
  };

  // Helper to strip HTML tags and generate clean summary
  const extractSnippet = (item) => {
    const raw = item.description || item.content || '';
    const text = raw.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length > 175) {
      return text.substring(0, 175) + '...';
    }
    return text;
  };

  // Helper to estimate reading time
  const calculateReadTime = (item) => {
    const raw = item.content || item.description || '';
    const text = raw.replace(/<[^>]+>/g, '');
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(2, Math.ceil(wordCount / 200));
    return `${minutes} min read`;
  };

  // Format category slugs nicely (e.g. "bpr-vs-ci" -> "BPR vs CI")
  const formatCategory = (cat) => {
    if (!cat) return 'Article';
    return cat
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
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
            categories:
              item.categories && item.categories.length > 0
                ? item.categories.map(formatCategory)
                : ['Business Analysis', 'Engineering'],
            description: extractSnippet(item),
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
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        padding: '90px 0',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '999px',
                background: 'rgba(37, 99, 235, 0.08)',
                color: '#2563EB',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              <BookOpen size={14} />
              <span>Publications & Thoughts</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
                fontWeight: 900,
                color: '#0F172A',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Blogs
            </h2>
            <p
              style={{
                margin: '8px 0 0',
                color: '#64748B',
                fontSize: '1.05rem',
                fontWeight: 500,
                maxWidth: '650px',
              }}
            >
              Industry perspectives, business analysis methodologies, and technical insights published on Medium.
            </p>
          </div>

          {/* Medium Profile CTA Pill */}
          <a
            href={MEDIUM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-projects-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '999px',
              background: '#F8FAFC',
              border: '1px solid rgba(226, 232, 240, 0.95)',
              color: '#0F172A',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#2563EB';
              e.currentTarget.style.color = '#2563EB';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.95)';
              e.currentTarget.style.color = '#0F172A';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.04)';
            }}
          >
            <span>Follow on Medium</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Blogs Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
            gap: '28px',
            alignItems: 'stretch',
          }}
        >
          {blogs.map((blog, index) => {
            const formattedDate = new Date(blog.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });

            return (
              <article
                key={index}
                className="blog-card-item"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                }}
              >
                {/* Blog Cover Image */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: 'relative',
                    height: '210px',
                    width: '100%',
                    overflow: 'hidden',
                    background: '#F1F5F9',
                    display: 'block',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.85)',
                  }}
                  className="blog-cover-link"
                >
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="blog-cover-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 23, 42, 0.82)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <Sparkles size={12} style={{ color: '#38BDF8' }} />
                    <span>Medium Story</span>
                  </div>
                </a>

                {/* Card Body */}
                <div
                  style={{
                    padding: '22px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Metadata: Date and Read Time */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        color: '#64748B',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        marginBottom: '12px',
                      }}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <Calendar size={13} style={{ color: '#2563EB' }} />
                        {formattedDate}
                      </span>
                      <span style={{ color: '#CBD5E1' }}>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <Clock size={13} style={{ color: '#64748B' }} />
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Blog Title */}
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        lineHeight: 1.35,
                        margin: '0 0 12px',
                        color: '#0F172A',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'inherit',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#2563EB')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#0F172A')}
                      >
                        {blog.title}
                      </a>
                    </h3>

                    {/* Blog Excerpt */}
                    <p
                      style={{
                        fontSize: '0.92rem',
                        color: '#475569',
                        lineHeight: 1.6,
                        margin: '0 0 18px',
                      }}
                    >
                      {blog.description}
                    </p>

                    {/* Category Tags */}
                    {blog.categories && blog.categories.length > 0 && (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '6px',
                          marginBottom: '20px',
                        }}
                      >
                        {blog.categories.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            style={{
                              background: '#F1F5F9',
                              color: '#334155',
                              padding: '3px 10px',
                              borderRadius: '999px',
                              fontSize: '0.74rem',
                              fontWeight: 600,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div
                    style={{
                      borderTop: '1px solid rgba(226, 232, 240, 0.8)',
                      paddingTop: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#2563EB',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#1D4ED8';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#2563EB';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span>Read Story on Medium</span>
                      <ExternalLink size={14} />
                    </a>

                    <span
                      style={{
                        fontSize: '0.76rem',
                        color: '#94A3B8',
                        fontWeight: 500,
                      }}
                    >
                      medium.com
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
