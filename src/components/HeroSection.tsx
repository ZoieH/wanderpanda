import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-secondary font-light mb-6">
          Work Together &
          <br />
          <em className="font-accent text-5xl md:text-7xl text-orange-400">Adventure Together</em>
        </h1>
        <p className="text-xl md:text-2xl font-primary mb-8 max-w-3xl mx-auto leading-relaxed">
          Join Wander Panda for an unforgettable 2-week workation in China, exploring the ancient 
          traditions and cultural sites of our destinations. Embrace community, culture, and adventure while 
          thriving with like-minded digital nomads.
        </p>
        <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-primary font-medium hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
          Start from $599
        </button>
      </div>
    </section>
  );
};

export default HeroSection;