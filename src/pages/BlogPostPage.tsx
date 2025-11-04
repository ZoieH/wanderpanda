import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { client, POST_QUERY, urlFor } from '../lib/sanity.js';
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
}

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.fetch(POST_QUERY, { slug: id });
        setPost(data);
      } catch (err) {
        console.error('Error fetching post', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

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
    </div>
  );
};

export default BlogPostPage;