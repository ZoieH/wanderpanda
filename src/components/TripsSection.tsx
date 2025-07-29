import React from 'react';
import { Link } from 'react-router-dom';
import { trips } from '../data/trips';

const TripsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-secondary font-light mb-4">
            <span style={{ fontFamily: 'Maitree, Georgia, serif' }}>Upcoming</span>{' '}
            <span style={{ fontFamily: 'Parisienne, cursive' }}>Trips</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our carefully curated workation experiences in China. Each trip is designed to provide the perfect balance of productivity and adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div 
              key={trip.id} 
              className="shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{ 
                borderRadius: '20px',
                backgroundColor: '#ffffff !important',
                background: '#ffffff !important'
              }}
            >
              <div className="relative">
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className="w-full h-48 object-cover"
                />
                <div 
                  className="absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-primary backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(83, 83, 83, 0.2)',
                    border: '1px solid white'
                  }}
                >
                  {trip.date}
                </div>
              </div>
              
              <div className="p-6" style={{ backgroundColor: '#ffffff' }}>
                <h3 className="text-2xl font-secondary font-light mb-6 text-center"
                  style={{
                    fontSize: '36px',
                    fontFamily: 'Maitree, Georgia, serif'
                  }}
                >
                  {trip.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <span>📍</span>
                    <span className="text-gray-600">{trip.location}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>📅</span>
                    <span className="text-gray-600">{trip.date}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>👥</span>
                    <span className="text-gray-600">Max {trip.maxParticipants} participants</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {trip.description}
                </p>

                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-orange-600 mb-2">{trip.price}</p>
                  <p className="text-sm text-gray-500">per person</p>
                </div>

                <div className="text-center">
                  <Link to={`/trip/${trip.id}`}>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-primary font-medium hover:bg-orange-600 transition-colors">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripsSection;