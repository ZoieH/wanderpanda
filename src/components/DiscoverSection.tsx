import React, { useState } from 'react';
import Button from './ui/Button';

const tabContent = {
  adventure: {
    title: 'Adventure awaits',
    description: 'Embark on thrilling outdoor adventures through China\'s most breathtaking landscapes. From mountain trekking to river rafting, experience the raw beauty of nature.',
    images: [
      '/images/discover/landscape 1.jpg',
      '/images/discover/landscape 2.jpg',
      '/images/discover/landscape 3.jpg'
    ]
  },
  food: {
    title: 'Culinary delights',
    description: 'Savor the rich flavors of Chinese cuisine, from street food to fine dining. Discover regional specialties and traditional cooking methods.',
    images: [
      '/images/discover/food 1.jpeg',
      '/images/discover/food 2.webp',
      '/images/discover/food 3.avif'
    ]
  },
  culture: {
    title: 'Cultural heritage',
    description: 'Immerse yourself in China\'s rich cultural traditions. Visit ancient temples, explore historical sites, and experience local customs.',
    images: [
      '/images/discover/culture 1.jpg',
      '/images/discover/culture 2.jpg',
      '/images/discover/culture 3.jpg'
    ]
  },
  lifestyle: {
    title: 'Modern Chinese lifestyle',
    description: 'Experience the perfect blend of traditional values and modern innovation. Discover co-working spaces, digital payment systems, and the vibrant startup culture.',
    images: [
      '/images/discover/lifestyle-1.jpeg',
      '/images/discover/lifestyle-2.jpeg',
      '/images/discover/lifestyle-3.jpg'
    ]
  }
};

const DiscoverSection = () => {
  const [activeTab, setActiveTab] = useState('adventure');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentContent.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentContent.images.length - 1 : prev - 1
    );
  };

  // Reset image index when tab changes
  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  return (
    <section className="py-20 bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-secondary font-light mb-8"
            style={{
              fontSize: '48px',
              fontFamily: 'Maitree, Georgia, serif'
            }}
          >
            Discover the facet of <span 
              style={{
                fontSize: '54px',
                fontFamily: 'Parisienne, cursive'
              }}
            >China</span>
          </h2>
          
          <div className="flex justify-center flex-wrap gap-4 md:gap-8 mb-12">
            {Object.keys(tabContent).map((tabKey) => (
            <button 
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`pb-2 transition-all duration-300 font-primary capitalize ${
                  activeTab === tabKey 
                    ? 'text-white border-b-2 border-white' 
                  : 'text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-600'
              }`}
            >
                {tabKey}
            </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="order-2 lg:order-1 lg:col-span-1">
            <div className="transition-all duration-500 ease-in-out">
              <h3 
                className="font-secondary font-light mb-6"
                style={{
                  fontSize: '36px',
                  fontFamily: 'Maitree, Georgia, serif'
                }}
              >
                {currentContent.title}
              </h3>
            <p className="text-gray-300 font-primary mb-8 leading-relaxed">
              {currentContent.description}
            </p>
              <Button variant="outline" size="md">
              Learn more
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="relative">
              {/* Image Carousel */}
              <div className="flex items-center justify-center space-x-[-20px] relative">
                {/* Left Image */}
                <div className="w-[345px] h-[259px] overflow-hidden rounded-lg relative z-10">
              <img 
                    src={currentContent.images[(currentImageIndex - 1 + currentContent.images.length) % currentContent.images.length]} 
                    alt={`${activeTab} image left`} 
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                  />
                </div>
                
                {/* Center Image with Large Asymmetric Corner */}
                <div 
                  className="w-[500px] h-[375px] relative z-20 overflow-hidden"
                  style={{ borderRadius: '8px' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-800/20">
              <img 
                      src={currentContent.images[currentImageIndex]} 
                      alt={`${activeTab} image center`} 
                      className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                      style={{
                        borderRadius: '8px 100px 8px 8px'
                      }}
              />
            </div>
                </div>
                
                {/* Right Image */}
                <div className="w-[345px] h-[259px] overflow-hidden rounded-lg relative z-10">
              <img 
                    src={currentContent.images[(currentImageIndex + 1) % currentContent.images.length]} 
                    alt={`${activeTab} image right`} 
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              />
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex justify-center mt-8 space-x-4">
                <button 
                  onClick={prevImage}
                  className="w-12 h-12 text-white hover:text-gray-300 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="w-12 h-12 text-white hover:text-gray-300 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;