import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import DiscoverSection from '../components/DiscoverSection';
import TripsSection from '../components/TripsSection';
import FeaturesSection from '../components/FeaturesSection';
import NewsletterSection from '../components/NewsletterSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <DiscoverSection />
      <TripsSection />
      <FeaturesSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;