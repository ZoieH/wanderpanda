import React, { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Button from '../components/ui/Button';
import BlogPostCard from '../components/BlogPostCard';
import { client, POSTS_QUERY } from '../lib/sanity.js';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  imageUrl?: string;
  authorName?: string;
  authorImage?: string;
  categories?: string[];
  estimatedReadingTime?: number;
}

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('🔍 Starting to fetch posts...');
        console.log('📝 Query:', POSTS_QUERY);
        const posts = await client.fetch(POSTS_QUERY);
        console.log('✅ Posts fetched successfully:', posts);
        console.log('📊 Number of posts:', posts.length);
        
        if (posts.length > 0) {
          console.log('🎯 First post:', posts[0]);
        }
        
        setBlogPosts(posts);
      } catch (error) {
        console.error('❌ Error fetching posts:', error);
        console.error('🔍 Error details:', {
          message: (error as Error).message,
          name: (error as Error).name,
          stack: (error as Error).stack
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-xl">Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 to-orange-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl md:text-6xl font-light mb-6"
            style={{
              fontFamily: 'Maitree, Georgia, serif'
            }}
          >
            Resource & <em 
              style={{
                fontFamily: 'Parisienne, cursive',
                fontSize: '1.1em'
              }}
            >
              Insights
            </em>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover travel insights, digital nomad tips, and cultural experiences from around the world
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center justify-center px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-600 mb-4">No blog posts found</h3>
              <p className="text-gray-500">
                Make sure you have created posts in your Sanity Studio and they have the correct document type "post".
              </p>
                    </div>
          ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Subscribe and get first hand useful resource.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="How should we call you?"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <Button variant="secondary" size="md">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;