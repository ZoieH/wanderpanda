import React from 'react';
import { Home, Users, Briefcase, Headphones } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Accommodation',
    description: 'Private coliving accommodation. Convenient location. Superior rooms with Premium amenities. Private shared spaces such as co-living facilities. Security cameras'
  },
  {
    icon: Briefcase,
    title: 'Workspace',
    description: 'Dedicated workspace space. High speed internet. Reliable equipment. Rock/noise space. Efficiency productive space. Coffee café. Community laptop'
  },
  {
    icon: Users,
    title: 'Community Events',
    description: 'Ice breaker. Renewal activities. Sports. Mental activities. Legit. meditation. Ice bath and. sauna-related. self hosting activities. Everything sharing workshop. Culture exploration.'
  },
  {
    icon: Headphones,
    title: 'Logistic Support',
    description: 'China phone number. Pocket WiFi. Travel station. Logistics support. Translate support service. Anything else can make your China trip seamlessly.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-secondary font-light mb-4">
            We make the experience <em className="font-accent text-accent-lg text-primary-600">seamless</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <feature.icon size={32} className="text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-secondary font-medium text-center mb-4">{feature.title}</h3>
              <p className="text-gray-600 font-primary text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;