import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users } from 'lucide-react';

const trips = [
  {
    id: 'mysterious-yunnan',
    title: 'Mysterious Yunnan',
    location: 'Dali, Yunnan',
    dates: '20250304 - 20250317',
    activity: 'Trekking, Rock climbing',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    price: 'Book Now'
  },
  {
    id: 'salty-hainan',
    title: 'Salty Hainan',
    location: 'Boyed Bay, Hainan',
    dates: '20240814 - 20240827',
    activity: 'Surfing, Kitesurfing',
    image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    price: 'Book Now'
  },
  {
    id: 'crude-xinjiang',
    title: 'Crude Xinjiang',
    location: 'Altai, Xinjiang',
    dates: 'TBD',
    activity: 'Skiing, Snowboarding',
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    price: 'Wishlist'
  }
];

const TripsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-secondary font-light mb-4">
            Join the <em className="font-accent text-accent-lg text-primary-600">tribe</em> to explore together
          </h2>
          <p className="text-xl font-primary text-gray-600">2025 Calendar Confirmed ✓</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-secondary font-light mb-2">{trip.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center font-primary text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{trip.location}</span>
                  </div>
                  <div className="flex items-center font-primary text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{trip.dates}</span>
                  </div>
                  <div className="flex items-center font-primary text-gray-600">
                    <Users size={16} className="mr-2" />
                    <span>{trip.activity}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link 
                    to={`/trip/${trip.id}`}
                    className="block w-full bg-orange-500 text-white text-center py-3 rounded-lg hover:bg-orange-600 transition-colors font-primary font-medium"
                  >
                    {trip.price}
                  </Link>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-primary">
                    Bring a friend, save more!
                  </button>
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