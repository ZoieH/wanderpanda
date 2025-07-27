import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, ThumbsUp } from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams();

  // Sample blog post data
  const post = {
    title: 'Could China Be the Next Digital Nomad Heaven?',
    date: '24 Oct 2024',
    tags: ['Insight', 'Spotlight'],
    likes: 2,
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    content: `
      <p>China is rapidly emerging as an unexpected destination for digital nomads, offering a unique blend of ancient culture and cutting-edge technology that creates an unparalleled work-travel experience.</p>
      
      <h2>Why China is Attracting Digital Nomads</h2>
      
      <p>The recent visa policy changes, including the 30-day visa-free entry for citizens from multiple countries, have made China more accessible than ever before. This, combined with world-class infrastructure, affordable living costs in many cities, and incredible cultural experiences, makes China an attractive option for location-independent workers.</p>
      
      <h3>Infrastructure and Connectivity</h3>
      
      <p>China boasts some of the world's fastest internet speeds and most extensive digital payment systems. Cities like Shanghai, Beijing, and Shenzhen offer co-working spaces that rival those in traditional nomad hubs like Bali or Mexico City.</p>
      
      <h3>Cultural Immersion</h3>
      
      <p>Unlike many popular nomad destinations, China offers profound cultural immersion opportunities. From ancient temples and traditional tea ceremonies to modern art districts and innovative startup scenes, digital nomads can experience a depth of culture that's hard to find elsewhere.</p>
      
      <h2>Challenges to Consider</h2>
      
      <p>While China offers incredible opportunities, there are challenges to navigate. The language barrier, different internet ecosystem, and cultural differences require preparation and an open mindset. However, these challenges often become part of the adventure and personal growth that makes the experience so rewarding.</p>
      
      <h2>The Future of Nomadism in China</h2>
      
      <p>As China continues to open up and adapt to international travelers, we expect to see more nomad-friendly policies and infrastructure. The country's commitment to innovation and its rich cultural heritage make it a compelling destination for the next generation of digital nomads.</p>
    `
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-96 bg-gray-900">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar size={16} className="mr-2" />
            <span>{post.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-gray-400">
            <ThumbsUp size={16} className="mr-2" />
            <span>{post.likes} likes</span>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Social Share */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Share this article:</span>
              <div className="flex space-x-2">
                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  f
                </button>
                <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  t
                </button>
                <button className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                  in
                </button>
              </div>
            </div>
            
            <button className="flex items-center text-orange-500 hover:text-orange-600">
              <ThumbsUp size={20} className="mr-2" />
              Like this post
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-12">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <img 
                  src={`https://images.pexels.com/photos/${2506923 + i}/pexels-photo-${2506923 + i}.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop`} 
                  alt="Related post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-medium mb-2">Related Article Title {i}</h3>
                  <p className="text-gray-600 text-sm mb-4">Brief description of the related article...</p>
                  <Link to="#" className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;