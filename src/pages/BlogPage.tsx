import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import BlogPostCard from '../components/BlogPostCard';
import NewsletterSection from '../components/NewsletterSection';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState<string>(searchParams.get('q') || '');
  const [debouncedQuery, setDebouncedQuery] = useState<string>(searchInput);

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

  // Debounce the search input
  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(searchInput.trim()), 250);
    return () => clearTimeout(id);
  }, [searchInput]);

  // Sync URL with query
  useEffect(() => {
    const q = debouncedQuery;
    const next = new URLSearchParams(searchParams);
    if (q) {
      next.set('q', q);
    } else {
      next.delete('q');
    }
    setSearchParams(next, {replace: true});
  }, [debouncedQuery, searchParams, setSearchParams]);

  const filteredPosts = useMemo(() => {
    const q = debouncedQuery.toLowerCase();
    if (!q) return blogPosts;
    return blogPosts.filter((p) => {
      const inTitle = p.title?.toLowerCase().includes(q);
      const inExcerpt = p.excerpt?.toLowerCase().includes(q);
      const inCats = (p.categories || []).some((c) => c.toLowerCase().includes(q));
      return inTitle || inExcerpt || inCats;
    });
  }, [blogPosts, debouncedQuery]);

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
          
          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
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
                       <>
                       {debouncedQuery && filteredPosts.length === 0 && (
                         <div className="text-center py-10">
                           <p className="text-gray-600">No results for "{debouncedQuery}"</p>
                         </div>
                       )}
                       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
           </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default BlogPage;