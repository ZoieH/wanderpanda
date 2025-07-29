import React from 'react';

const features = [
  {
    icon: '🏠',
    title: 'Accommodation',
    items: ['Deep sleep bedding', 'Reliable Internet connection', 'Private shared spaces', 'Security cameras']
  },
  {
    icon: '💻',
    title: 'Workspace',
    items: ['Dedicated workspace', 'High speed internet', 'Reliable equipment', 'Coffee café']
  },
  {
    icon: '👥',
    title: 'Community Events',
    items: ['Ice breaker', 'Farewell dinner', 'Sports activities', 'Culture exploration']
  },
  {
    icon: '🔧',
    title: 'Logistic Support',
    items: ['China payment setup', 'Pocket WiFi', 'Travel station', 'Translate support']
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-secondary font-light mb-4"
            style={{
              fontSize: '48px',
              fontFamily: 'Maitree, Georgia, serif'
            }}
          >
            We make the experience <span 
              style={{
                fontSize: '54px',
                fontFamily: 'Parisienne, cursive'
              }}
            >seamless</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ 
                borderRadius: '20px',
                backgroundColor: '#ffffff'
              }}
            >
              <div className="p-8">
              <div className="flex justify-center mb-6">
                  <div 
                    className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-3xl"
                    style={{ borderRadius: '12px' }}
                  >
                    {feature.icon}
                  </div>
                </div>
                <h3 
                  className="text-center mb-4 font-primary font-medium"
                  style={{
                    fontSize: '36px',
                    fontFamily: 'Karla, sans-serif'
                  }}
                >
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 font-primary text-sm leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;