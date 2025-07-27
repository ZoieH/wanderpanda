import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ThumbsUp } from 'lucide-react';

const blogPosts = [
  {
    id: 'china-digital-nomad-heaven',
    title: 'Could China Be the Next Digital Nomad Heaven?',
    date: '24 Oct 2024',
    excerpt: 'Discover why China could be the next digital nomad hotspot. Explore visa...',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    tags: ['Insight', 'Spotlight'],
    likes: 2
  },
  {
    id: 'alipay-wechat-setup',
    title: 'How to Set Up Alipay and WeChat Pay (Step by Step Guide) - Pay Like a Crazy Rich Asian',
    date: '19 Nov 2024',
    excerpt: 'Want to pay like a Crazy Rich Asian in China? Learn how to set up Alipay and...',
    image: 'https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    tags: ['Logistic', 'How to'],
    likes: 1
  },
  {
    id: 'china-30-days-visa-free',
    title: 'China\'s 30 Days Visa Free Policy - Would you come? (Nov 24 updated)',
    date: '19 Nov 2024',
    excerpt: 'Discover China\'s new 30-day visa-free policy for travelers from 20 countries...',
    image: 'https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    tags: ['Logistic', 'How to'],
    likes: 0
  },
  {
    id: 'china-vpn-guide',
    title: 'Survive Under China\'s Firewall: The VPNs That Actually Work in China (2024 tested and updated)',
    date: '19 Nov 2024',
    excerpt: 'Discover the best VPNs that work in China as of November 2024. Stay connected...',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    tags: ['Logistic', 'How to'],
    likes: 0
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-light text-center mb-8">
            Resource & <em className="font-accent text-accent-lg text-primary-600">Insights</em>
          </h1>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <Link to={`/blog/${post.id}`}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-2xl font-medium mb-4 hover:text-orange-500 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-orange-500 hover:text-orange-600 font-medium"
                    >
                      READ MORE
                    </Link>
                    <div className="flex items-center text-gray-400">
                      <ThumbsUp size={16} className="mr-2" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;