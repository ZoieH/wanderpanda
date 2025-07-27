import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Users, Star } from 'lucide-react';

const TripDetailPage = () => {
  const { id } = useParams();

  // Sample trip data - in a real app, this would come from an API
  const tripDetails = {
    title: 'Mysterious Yunnan',
    subtitle: 'Dali, Yunnan',
    dates: '20250304 - 20250317',
    price: 'Start from $599 only',
    description: `Imagine yourself start your day in Yunnan with the warmth of the 
    highland sunshine on your face and a cup of freshly brewed Yunnan 
    Xiaoli(小粒) coffee in hand. Take a peaceful walk along Erhai 
    Ecological Corridor(洱海生态廊道), letting the breathtaking views energize 
    you for a productive day.`,
    lunchDescription: `When lunchtime comes, savor a fresh vegan meal from the local 
    markets as you explore the charm of Dali's ancient town. In the 
    afternoon, tap into your creativity with a Chinese intangible cultural 
    heritage tie-dye (扎染) workshop, or keep the work momentum 
    going.`,
    eveningDescription: `As the day winds down, join us for a relaxed community beer and 
    BBQ dinner, where you'll share stories, laughter, and unforgettable 
    moments with your tribe.`,
    heroImage: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${tripDetails.heroImage}')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-light mb-4">
            <em className="font-accent">{tripDetails.title}</em>
          </h1>
          <p className="text-2xl mb-2">{tripDetails.subtitle}</p>
          <p className="text-xl mb-8">{tripDetails.dates}</p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors">
            {tripDetails.price}
          </button>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {tripDetails.description}
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {tripDetails.lunchDescription}
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {tripDetails.eveningDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Secret Realm Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Walk into last <em className="font-accent text-accent-lg text-primary-600">Secret</em> realm
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Adventure Section */}
            <div>
              <h3 className="text-3xl font-light mb-8">Adventure</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Yunnan is a haven for outdoor enthusiasts, offering a wealth of 
                resources for activities like trekking, hiking and nature exploration. Known 
                for its ancient town and picturesque landscapes, Dali is the perfect 
                home to dramatic mountain ranges, pristine lakes, and vast forests. Trekking 
                paths like the renowned Cangshan range offer some of the most spectacular 
                gorges in the world, with the dramatic Jade Dragon Snow Mountain nearby.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img 
                  src="https://images.pexels.com/photos/2506552/pexels-photo-2506552.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                  alt="Mountain adventure" 
                  className="rounded-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/1376766/pexels-photo-1376766.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                  alt="Scenic trail" 
                  className="rounded-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                  alt="Nature view" 
                  className="rounded-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                  alt="Mountain landscape" 
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Food Section */}
            <div>
              <h3 className="text-3xl font-light mb-8">Food</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Yunnan's cuisine is a vibrant fusion of flavors, 
                known for its diverse ethnic groups and 
                rich agricultural resources. With ingredients 
                sourced from the region's fertile valleys and 
                high-altitude plateaus, the region offers unique 
                delicacies. Unmissable local dishes showcase the 
                bold use of spices, fermented flavors, and 
                their ingredients.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                  alt="Local cuisine" 
                  className="rounded-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                  alt="Traditional dishes" 
                  className="rounded-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                  alt="Street food" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dali Story Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                The story of <em className="font-accent text-accent-lg text-primary-600">Dali, Yunnan</em>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Dali, Yunnan, feels like it's telling you its story with 
                every corner you turn. Its ancient town invites you to 
                wander through vibrant markets, discover traditional 
                crafts like tie-dye, and connect with its rich history. 
                Beyond the town, majestic mountains like Cangshan, 
                Tiger Leaping Gorge, and Jade Dragon Snow Mountain 
                await, offering breathtaking trails and unforgettable 
                adventures.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/3225552/pexels-photo-3225552.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
                alt="Map of Dali region" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Your <em className="font-accent text-accent-lg text-primary-600">Home</em> away from home
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Accommodation exterior" 
                className="rounded-lg w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                  alt="Interior space" 
                  className="rounded-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                  alt="Work space" 
                  className="rounded-lg"
                />
              </div>
              <img 
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop" 
                alt="Common area" 
                className="rounded-lg w-full"
              />
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-6">What's included</h3>
              <p className="text-gray-700 mb-8">
                We've curated everything you need for a seamless workation, 
                with opportunities to enjoy the breathtaking scenery and 
                immerse in local culture along the way.
              </p>

              <div className="space-y-4 mb-12">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Fully equipped accommodation</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Reliable high-speed WiFi</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Dedicated workstation</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Welcome ceremony with icebreakers, farewell party, and weekly dinner gatherings</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Wellness events (yoga, meditation, ice baths, etc.)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Weekly social events (hiking, food tours, movie nights, city walks, etc.)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Local guide (recommendations for co-working spaces, gyms, restaurants, activities, and transportation)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Full logistics support (language translation, transportation, SIM card setup, and more)</span>
                </div>
              </div>

              <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors">
                Start from $599
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripDetailPage;