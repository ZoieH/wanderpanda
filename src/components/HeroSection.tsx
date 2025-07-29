import React from 'react';
import Button from './ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero.jpeg')`
        }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <h1 
          className="font-secondary font-light mb-6 leading-tight"
          style={{ 
            fontSize: '76px',
            fontFamily: 'Maitree, Georgia, serif'
          }}
        >
          Work Together
          <br />
          <span 
            style={{ 
              fontSize: '76px',
              fontFamily: 'Maitree, Georgia, serif'
            }}
          >
            Adventure Together
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-primary mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
          Join Wander Panda for an unforgettable 2-week workation in China, exploring hand-picked destinations, 
          embracing community, culture, and adventure while thriving with like-minded digital nomads.
        </p>
        <Button variant="primary" size="lg" className="transform hover:scale-105">
          Start from $899
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;