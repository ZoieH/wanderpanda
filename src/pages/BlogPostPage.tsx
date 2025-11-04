import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { client, POST_QUERY, RELATED_POSTS_QUERY, urlFor } from '../lib/sanity.js';
import { PortableText } from '@portabletext/react';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body?: any;
  excerpt?: string;
  imageUrl?: string;
  authorName?: string;
  authorImage?: string;
  categories?: string[];
  estimatedReadingTime?: number;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

interface RelatedPostSummary {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  imageUrl?: string;
  mainImage?: any;
  categories?: string[];
}

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPostSummary[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.fetch(POST_QUERY, { slug: id });
        setPost(data);
        if (data?.categories && data.categories.length > 0) {
          const rel = await client.fetch(RELATED_POSTS_QUERY, {
            slug: data.slug?.current,
            categories: data.categories,
          });
          setRelatedPosts(rel || []);
        } else {
          setRelatedPosts([]);
        }
      } catch (err) {
        console.error('Error fetching post', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  // Basic SEO tags without extra deps
  useEffect(() => {
    if (!post) return;
    const title = post.seo?.metaTitle || post.title;
    const description = post.seo?.metaDescription || post.excerpt || '';
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const image = post.imageUrl || '';

    // Title
    const prevTitle = document.title;
    document.title = title;

    // Helpers
    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      if (!content) return;
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Standard meta
    setMeta('description', description);
    if (post.seo?.keywords && post.seo.keywords.length > 0) {
      setMeta('keywords', post.seo.keywords.join(', '));
    }

    // Open Graph
    setMeta('og:type', 'article', 'property');
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    if (url) setMeta('og:url', url, 'property');
    if (image) setMeta('og:image', image, 'property');

    // Twitter
    setMeta('twitter:card', image ? 'summary_large_image' : 'summary');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    if (image) setMeta('twitter:image', image);

    // Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    if (url) linkCanonical.setAttribute('href', url);

    // JSON-LD Article schema
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      datePublished: post.publishedAt,
      image: image ? [image] : undefined,
      author: post.authorName ? { '@type': 'Person', name: post.authorName } : undefined,
      articleSection: post.categories && post.categories.length > 0 ? post.categories : undefined,
      description,
      mainEntityOfPage: url || undefined,
    } as any;

    let script = document.getElementById('post-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'post-jsonld';
      (script as HTMLScriptElement).type = 'application/ld+json';
      document.head.appendChild(script);
    }
    (script as HTMLScriptElement).textContent = JSON.stringify(jsonLd);

    // Cleanup on unmount
    return () => {
      document.title = prevTitle;
    };
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-xl">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Post not found.</p>
          <Link to="/blog" className="text-orange-500 hover:text-orange-600">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const categoriesText = post.categories && post.categories.length > 0
    ? post.categories.map(cat => cat.toUpperCase()).join(', ')
    : '';

  return (
    <div className="min-h-screen pt-16">
      {post.imageUrl && (
        <div className="relative h-96 bg-gray-900">
          <img 
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      <div className="bg-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-600 flex-wrap gap-x-2">
            <Link 
              to="/" 
              className="hover:text-orange-500 transition-colors"
            >
              HOME
            </Link>
            <span className="text-gray-400">&gt;</span>
            <Link 
              to="/blog" 
              className="hover:text-orange-500 transition-colors"
            >
              BLOG
            </Link>
            {categoriesText && (
              <>
                <span className="text-gray-400">&gt;</span>
                <span className="text-gray-800">{categoriesText}</span>
              </>
            )}
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-900 font-medium line-clamp-1">
              {post.title.toUpperCase()}
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar size={16} className="mr-2" />
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-6">{post.title}</h1>
        </header>

        {post.body ? (
          <div className="blog-content prose prose-lg max-w-none">
            <PortableText 
              value={post.body}
              components={{
                types: {
                  callout: ({value}: any) => (
                    <div className={`blog-callout blog-callout-${value.type || 'info'}`}>
                      <p>{value.text}</p>
                    </div>
                  ),
                  image: ({value}: any) => {
                    if (!value?.asset?._ref) {
                      return null;
                    }
                    return (
                      <figure className="blog-image">
                        <img 
                          src={urlFor(value).width(1200).auto('format').url()} 
                          alt={value.alt || ''}
                          className="w-full rounded-lg"
                        />
                        {value.caption && (
                          <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
                            {value.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  },
                },
                block: {
                  blockquote: ({children}: any) => (
                    <blockquote className="blog-blockquote">
                      {children}
                    </blockquote>
                  ),
                },
              }}
            />
          </div>
        ) : (
          <p className="text-gray-700">{post.excerpt}</p>
        )}
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 
              className="font-light text-center mb-12"
              style={{
                fontSize: '36px',
                fontFamily: 'Maitree, Georgia, serif'
              }}
            >
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((rp) => (
                <div key={rp._id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <Link to={`/blog/${rp.slug.current}`} className="block">
                    <div className="aspect-[16/10] bg-gray-100">
                      {rp.imageUrl ? (
                        <img 
                          src={rp.imageUrl}
                          alt={rp.title}
                          className="w-full h-full object-cover"
                        />
                      ) : rp.mainImage ? (
                        <img
                          src={urlFor(rp.mainImage).width(600).height(375).fit('crop').auto('format').url()}
                          alt={rp.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100" />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-medium mb-2 line-clamp-2">{rp.title}</h3>
                      {rp.publishedAt && (
                        <p className="text-sm text-gray-500">
                          {new Date(rp.publishedAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
                        </p>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;