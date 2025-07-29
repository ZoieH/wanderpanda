import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag } from 'lucide-react';

interface BlogPostCardProps {
  post: {
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
  };
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
      {/* Featured Image */}
      <Link to={`/blog/${post.slug.current}`} className="block relative overflow-hidden">
        <div className="aspect-[16/10] bg-gradient-to-br from-orange-100 to-orange-200">
          <img 
            src={post.imageUrl || 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Categories badge */}
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
              <Tag size={12} className="mr-1" />
              {post.categories[0]}
            </span>
          </div>
        )}
        
        {/* Reading time badge */}
        {post.estimatedReadingTime && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur text-gray-700 text-sm font-medium rounded-full">
              <Clock size={12} className="mr-1" />
              {post.estimatedReadingTime} min
            </span>
          </div>
        )}
      </Link>
      
      {/* Content */}
      <div className="p-6 lg:p-8">
        {/* Meta info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={14} className="mr-2" />
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          
          {post.authorName && (
            <div className="flex items-center text-sm text-gray-600">
              {post.authorImage ? (
                <img 
                  src={post.authorImage} 
                  alt={post.authorName}
                  className="w-6 h-6 rounded-full mr-2 object-cover"
                />
              ) : (
                <User size={14} className="mr-2" />
              )}
              <span className="font-medium">{post.authorName}</span>
            </div>
          )}
        </div>
        
        {/* Title */}
        <Link to={`/blog/${post.slug.current}`}>
          <h2 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
          {post.excerpt || 'Discover more insights and stories from our latest post...'}
        </p>
        
        {/* Categories */}
        {post.categories && post.categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.slice(1, 4).map((category) => (
              <span 
                key={category}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium hover:bg-orange-100 hover:text-orange-700 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        {/* Read more button */}
        <Link 
          to={`/blog/${post.slug.current}`}
          className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold text-sm group-hover:translate-x-1 transition-all duration-200"
        >
          Read Full Article
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard; 