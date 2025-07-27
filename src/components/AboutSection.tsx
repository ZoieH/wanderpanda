import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-primary text-gray-700 leading-relaxed mb-8">
            Wander Panda is a <em className="font-accent text-accent-lg text-primary-600">Community</em> that brings together Digital 
            Nomads for adventure-themed workations exploring the wonders of <em className="font-accent text-accent-lg text-primary-600">China</em>.
          </p>
          
          <p className="text-lg md:text-xl font-primary text-gray-700 leading-relaxed mb-8">
            We invite open-minded, adventurous individuals to embrace new cultures through our well-designed{' '}
            <em className="font-accent text-accent-lg text-primary-600">Workations</em> that balance adventure, social connection, and 
            productivity, fostering idea exchange, skill-sharing, and deeper connections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;