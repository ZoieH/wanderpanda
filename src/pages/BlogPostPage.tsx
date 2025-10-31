import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { client, POST_QUERY } from '../lib/sanity.js';
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

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar size={16} className="mr-2" />
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-6">{post.title}</h1>
        </header>

        {post.body ? (
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} />
          </div>
        ) : (
          <p className="text-gray-700">{post.excerpt}</p>
        )}
      </article>
    </div>
  );
};

export default BlogPostPage;