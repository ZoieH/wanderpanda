import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p 
            className="text-gray-700 mb-8"
            style={{ 
              fontSize: '38px',
              fontFamily: 'Maitree, Georgia, serif',
              lineHeight: '1.2'
            }}
          >
            Wander Panda is a <span 
              style={{ 
                fontSize: '38px',
                fontFamily: 'Parisienne, cursive'
              }}
            >Community</span> that brings together Digital 
            Nomads for adventure-themed workations exploring the wonders of China.
          </p>
          
          <p 
            className="text-gray-700"
            style={{ 
              fontSize: '38px',
              fontFamily: 'Maitree, Georgia, serif',
              lineHeight: '1.2'
            }}
          >
            We invite open-minded, adventurous individuals to embrace new cultures through our well-designed{' '}
            <span 
              style={{ 
                fontSize: '38px',
                fontFamily: 'Parisienne, cursive'
              }}
            >Workations</span> that balance adventure, social connection, and 
            productivity, fostering idea exchange, skill-sharing, and deeper connections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;