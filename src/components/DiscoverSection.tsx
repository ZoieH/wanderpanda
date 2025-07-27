import React, { useState } from 'react';

const tabContent = {
  adventure: {
    title: 'The landscape of China is breathtaking',
    description: 'Explore China\'s breathtaking landscapes from bustling megalopolis to serene old streets and picturesque workspaces. Unload breathing paradise.',
    images: [
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1376766/pexels-photo-1376766.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      'https://images.pexels.com/photos/2506552/pexels-photo-2506552.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    ]
  },
  food: {
    title: 'Authentic Chinese cuisine awaits',
    description: 'Discover the rich flavors of regional Chinese cuisine, from spicy Sichuan dishes to delicate Cantonese dim sum. Experience authentic local markets and traditional cooking methods.',
    images: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    ]
  },
  culture: {
    title: 'Immerse in ancient traditions',
    description: 'Experience China\'s rich cultural heritage through traditional arts, ancient temples, and time-honored customs. Connect with local artisans and learn traditional crafts.',
    images: [
      'https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3225552/pexels-photo-3225552.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      'https://images.pexels.com/photos/1376766/pexels-photo-1376766.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    ]
  },
  lifestyle: {
    title: 'Modern Chinese lifestyle',
    description: 'Experience the perfect blend of traditional values and modern innovation. Discover co-working spaces, digital payment systems, and the vibrant startup culture.',
    images: [
      'https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    ]
  }
};

const DiscoverSection = () => {
  const [activeTab, setActiveTab] = useState('adventure');
  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-secondary font-light mb-8">
            Discover the faucet of <em className="font-accent text-accent-lg text-primary-600">China</em>
          </h2>
          
          <div className="flex justify-center flex-wrap gap-4 md:gap-8 mb-12">
            <button 
              onClick={() => setActiveTab('adventure')}
              className={`pb-2 transition-all duration-300 ${
                activeTab === 'adventure' 
                  ? 'text-orange-500 border-b-2 border-orange-500' 
                  : 'text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-600'
              }`}
            >
              Adventure
            </button>
            <button 
              onClick={() => setActiveTab('food')}
              className={`pb-2 transition-all duration-300 ${
                activeTab === 'food' 
                  ? 'text-orange-500 border-b-2 border-orange-500' 
                  : 'text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-600'
              }`}
            >
              Food
            </button>
            <button 
              onClick={() => setActiveTab('culture')}
              className={`pb-2 transition-all duration-300 ${
                activeTab === 'culture' 
                  ? 'text-orange-500 border-b-2 border-orange-500' 
                  : 'text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-600'
              }`}
            >
              Culture
            </button>
            <button 
              onClick={() => setActiveTab('lifestyle')}
              className={`pb-2 transition-all duration-300 ${
                activeTab === 'lifestyle' 
                  ? 'text-orange-500 border-b-2 border-orange-500' 
                  : 'text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-600'
              }`}
            >
              Lifestyle
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-secondary font-light mb-6">{currentContent.title}</h3>
            <p className="text-gray-300 font-primary mb-8 leading-relaxed">
              {currentContent.description}
            </p>
            <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-gray-800 transition-all duration-300 font-primary">
              Learn more
            </button>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src={currentContent.images[0]} 
                alt={`${activeTab} image 1`} 
                className="rounded-lg w-full h-48 object-cover transition-opacity duration-500"
              />
              <img 
                src={currentContent.images[1]} 
                alt={`${activeTab} image 2`} 
                className="rounded-lg w-full h-32 object-cover transition-opacity duration-500"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src={currentContent.images[2]} 
                alt={`${activeTab} image 3`} 
                className="rounded-lg w-full h-32 object-cover transition-opacity duration-500"
              />
              <img 
                src={currentContent.images[3]} 
                alt={`${activeTab} image 4`} 
                className="rounded-lg w-full h-48 object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;