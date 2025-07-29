import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getTripById } from '../data/trips';
import Button from '../components/ui/Button';
import NewsletterSection from '../components/NewsletterSection';

const TripDetailPage = () => {
  const { id } = useParams();
  const trip = getTripById(Number(id));
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get room images from trip data
  const roomImages = trip?.accommodation?.roomImages || [];

  if (!trip) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${trip.image}')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-light mb-4"
              style={{
                fontSize: '76px',
                fontFamily: 'Maitree, Georgia, serif'
              }}>
            <em className="font-accent">{trip.title}</em>
          </h1>
          <p className="text-2xl mb-2">{trip.location}</p>
          <p className="text-xl mb-8">{trip.date}</p>
          <Button variant="primary" size="lg">
            Start from {trip.price} only
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {trip.introduction.map((paragraph, index) => (
              <p 
                key={index}
                className="text-gray-700 mb-8 leading-relaxed"
                style={{
                  fontSize: '32px',
                  fontFamily: 'Maitree, Georgia, serif',
                  lineHeight: '1.2'
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure & Food & Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-8"
                style={{
                  fontSize: '48px',
                  fontFamily: 'Maitree, Georgia, serif'
                }}>
              Walk into last <em className="font-accent text-accent-lgtext-primary-600">Secret</em> realm
            </h2>
          </div>

          {/* Adventure Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-1">
                <h3 
                  className="font-light mb-8"
                  style={{
                    fontSize: '36px',
                    fontFamily: 'Maitree, Georgia, serif'
                  }}
                >
                  Adventure
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {trip.adventure.description}
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="relative">
                  <div 
                    className="flex overflow-x-auto space-x-4 pb-4 adventure-carousel" 
                    style={{ 
                      scrollbarWidth: 'none', 
                      msOverflowStyle: 'none',
                      scrollBehavior: 'smooth'
                    }}
                  >
                    <img 
                      src={trip.adventure.images[0] || trip.gallery[0] || "https://images.pexels.com/photos/2506552/pexels-photo-2506552.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"} 
                      alt="Adventure 1" 
                      className="rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                    />
                    <img 
                      src={trip.adventure.images?.[1] || trip.gallery[1] || "https://images.pexels.com/photos/1376766/pexels-photo-1376766.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"} 
                      alt="Adventure 2" 
                      className="rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                    />
                    <img 
                      src={trip.adventure.images?.[2] || trip.gallery[2] || "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"} 
                      alt="Adventure 3" 
                      className="rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                    />
                  </div>
                  {/* Scroll indicator */}
                  <button 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all cursor-pointer"
                    onClick={() => {
                      const container = document.querySelector('.adventure-carousel');
                      if (container) {
                        container.scrollBy({ left: 320, behavior: 'smooth' });
                      }
                    }}
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all cursor-pointer"
                    onClick={() => {
                      const container = document.querySelector('.adventure-carousel');
                      if (container) {
                        container.scrollBy({ left: -320, behavior: 'smooth' });
                      }
                    }}
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Food Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="order-2 lg:order-1 lg:col-span-2">
                <div className="relative">
                  <div 
                    className="flex overflow-x-auto space-x-4 pb-4 food-carousel" 
                    style={{ 
                      scrollbarWidth: 'none', 
                      msOverflowStyle: 'none',
                      scrollBehavior: 'smooth'
                    }}
                  >
                    <img 
                      src={trip.food.images?.[0] || trip.gallery[3] || "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"} 
                      alt="Food 1" 
                      className="rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                    />
                    <img 
                      src={trip.food.images?.[1] || trip.gallery[0] || "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"} 
                      alt="Food 2" 
                      className="rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                    />
                    <img 
                      src={trip.food.images?.[2] || trip.gallery[1] || "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"} 
                      alt="Food 3" 
                      className="rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                    />
                  </div>
                  {/* Scroll indicator */}
                  <button 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all cursor-pointer"
                    onClick={() => {
                      const container = document.querySelector('.food-carousel');
                      if (container) {
                        container.scrollBy({ left: 320, behavior: 'smooth' });
                      }
                    }}
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all cursor-pointer"
                    onClick={() => {
                      const container = document.querySelector('.food-carousel');
                      if (container) {
                        container.scrollBy({ left: -320, behavior: 'smooth' });
                      }
                    }}
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-1">
                <h3 
                  className="font-light mb-8"
                  style={{
                    fontSize: '36px',
                    fontFamily: 'Maitree, Georgia, serif'
                  }}
                >
                  Food
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {trip.food.description}
                </p>
              </div>
            </div>
          </div>

          {/* Culture Section */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-1">
                <h3 
                  className="font-light mb-8"
                  style={{
                    fontSize: '36px',
                    fontFamily: 'Maitree, Georgia, serif'
                  }}
                >
                  Culture
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {trip.culture?.description || `${trip.location.split(',')[1]} offers a vibrant mix of ethnic traditions and modern culture. Experience traditional crafts, local festivals, and authentic cultural experiences that will enrich your understanding of this unique region.`}
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="relative">
                  <div 
                    className="flex overflow-x-auto space-x-4 pb-4 culture-carousel" 
                    style={{ 
                      scrollbarWidth: 'none', 
                      msOverflowStyle: 'none',
                      scrollBehavior: 'smooth'
                    }}
                  >
                    <img 
                      src={trip.culture?.images?.[0] || trip.gallery[3] || "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"} 
                      alt="Culture 1" 
                      className="rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                    />
                    <img 
                      src={trip.culture?.images?.[1] || trip.gallery[0] || "https://images.pexels.com/photos/1376766/pexels-photo-1376766.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"} 
                      alt="Culture 2" 
                      className="rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                    />
                    <img 
                      src={trip.culture?.images?.[2] || trip.gallery[1] || "https://images.pexels.com/photos/2506552/pexels-photo-2506552.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"} 
                      alt="Culture 3" 
                      className="rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                    />
                  </div>
                  {/* Scroll indicator */}
                  <button 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all cursor-pointer"
                    onClick={() => {
                      const container = document.querySelector('.culture-carousel');
                      if (container) {
                        container.scrollBy({ left: 320, behavior: 'smooth' });
                      }
                    }}
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all cursor-pointer"
                    onClick={() => {
                      const container = document.querySelector('.culture-carousel');
                      if (container) {
                        container.scrollBy({ left: -320, behavior: 'smooth' });
                      }
                    }}
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-4xl md:text-5xl font-light mb-8"
                style={{
                  fontSize: '48px',
                  fontFamily: 'Maitree, Georgia, serif'
                }}
              >
                The story of <em 
                  style={{
                    fontSize: '54px',
                    fontFamily: 'Parisienne, cursive'
                  }}
                >
                  {trip.location.split(',')[0]}, {trip.location.split(',')[1]}
                </em>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {trip.location.split(',')[0]}, {trip.location.split(',')[1]}, feels like it's telling you its story with 
                every corner you turn. Its ancient town invites you to wander through vibrant markets, discover traditional 
                crafts, and connect with its rich history. Beyond the town, majestic mountains await, offering breathtaking 
                trails and unforgettable adventures.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={trip.storyImage || trip.gallery[2] || "https://images.pexels.com/photos/3225552/pexels-photo-3225552.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"} 
                alt="Map of region" 
                className="rounded-lg shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.pexels.com/photos/3225552/pexels-photo-3225552.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Room Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-light mb-8"
              style={{
                fontSize: '48px',
                fontFamily: 'Maitree, Georgia, serif'
              }}
            >
              Your Home away from <em 
                style={{
                  fontSize: '54px',
                  fontFamily: 'Parisienne, cursive'
                }}
              >
                home
              </em>
            </h2>
          </div>

          {/* Room Images Grid - Show first 6 images */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {roomImages.slice(0, 6).map((image, index) => (
              <div key={index} className={index === Math.min(roomImages.length, 6) - 1 ? "relative" : ""}>
                <img 
                  src={image} 
                  alt={`Room ${index + 1}`} 
                  className="rounded-lg w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsImageModalOpen(true);
                  }}
                  onError={(e) => {
                    const fallbackImages = [
                      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                      'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                      'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
            
                      'https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
                    ];
                    (e.target as HTMLImageElement).src = fallbackImages[index] || fallbackImages[0];
                  }}
                />
                
                {/* Show All Photos Button - Only on the last visible image in grid */}
                {index === Math.min(roomImages.length, 6) - 1 && roomImages.length > 0 && (
                  <button
                    className="absolute bottom-4 right-4 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-gray-50 transition-colors font-medium z-10 text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(0);
                      setIsImageModalOpen(true);
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="14" y="14" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                    </svg>
                    <span>
                      Show all ({roomImages.length} images)
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>



          {/* What's Included */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-light mb-6" style={{ fontFamily: 'Maitree, Georgia, serif' }}>
                What's included
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We curate everything for a seamless workation, allowing you to immerse yourself in local culture and breathtaking scenery.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Fully equipped accommodation
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Reliable high-speed WiFi
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Dedicated workstation
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Welcome ceremony/farewell party/weekly dinner gatherings
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Wellness events (yoga, meditation, ice baths)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Weekly social events (hiking, food tours, movie nights, city walks)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Local guide (recommendations for co-working spaces, gyms, restaurants, activities, transportation)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Full logistics support (language translation, transportation, SIM card setup)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6" style={{ fontFamily: 'Maitree, Georgia, serif' }}>
                Add-on options
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Adventure expeditions (trekking, skiing, snowboarding, surfing, kitesurfing)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Weekend trips to nearby towns/cities (shared cost)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Local workshops/activities (tie-dye, tea ceremonies, coffee tastings)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Scooter rental
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Healthy meal plans
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-6">
                *Image as reference. Final accommodation will maintain same standard and be confirmed before payment.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg">
              Start from $899
            </Button>
          </div>
        </div>
      </section>

      {/* Upgrade Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-light mb-8"
              style={{
                fontSize: '48px',
                fontFamily: 'Maitree, Georgia, serif'
              }}
            >
              Upgrade options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trip.upgradeOptions.map((upgrade) => (
              <div key={upgrade.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                <img 
                  src={upgrade.image} 
                  alt={upgrade.title} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const fallbackImages = [
                      'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
                    ];
                    const index = trip.upgradeOptions.findIndex(u => u.id === upgrade.id);
                    (e.target as HTMLImageElement).src = fallbackImages[index] || fallbackImages[0];
                  }}
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-light mb-3" style={{ fontFamily: 'Maitree, Georgia, serif' }}>
                    {upgrade.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                    {upgrade.description}
                  </p>
                  <Button variant="outline-dark" size="sm" className="w-full mt-auto">
                    Add for {upgrade.price}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white text-2xl z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
              onClick={() => setIsImageModalOpen(false)}
            >
              ×
            </button>
            
            {/* Previous Button */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
              onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : roomImages.length - 1)}
            >
              ←
            </button>
            
            {/* Next Button */}
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
              onClick={() => setCurrentImageIndex(prev => (prev + 1) % roomImages.length)}
            >
              →
            </button>
            
            {/* Image */}
            <img 
              src={roomImages[currentImageIndex]}
              alt={`Room ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                const fallbackImages = [
                  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                  'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                  'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                  'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                  'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                  'https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
                ];
                (e.target as HTMLImageElement).src = fallbackImages[currentImageIndex] || fallbackImages[0];
              }}
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
              {currentImageIndex + 1} / {roomImages.length}
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default TripDetailPage;