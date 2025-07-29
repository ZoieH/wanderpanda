import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom'; // Added Link import

const HowItWorksPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Start with first FAQ open

  const coreValues = [
    {
      icon: '👥',
      title: 'Community',
      description: 'Connect with like-minded digital nomads'
    },
    {
      icon: '🧠',
      title: 'Open-mindedness',
      description: 'Embrace new cultures and perspectives'
    },
    {
      icon: '⭐',
      title: 'Adventure',
      description: 'Explore exciting destinations together'
    },
    {
      icon: '🤝',
      title: 'Connection',
      description: 'Build meaningful relationships'
    }
  ];

  const itinerary = [
    {
      day: 'SATURDAY',
      activity: 'WELCOME PARTY (ICE BREAKER)'
    },
    {
      day: 'SUNDAY',
      activity: 'WORK DAY'
    },
    {
      day: 'MONDAY',
      activity: 'WORK DAY'
    },
    {
      day: 'TUESDAY',
      activity: 'WORK DAY'
    },
    {
      day: 'WEDNESDAY',
      activity: 'WORK DAY'
    },
    {
      day: 'THURSDAY',
      activity: 'WORK DAY'
    },
    {
      day: 'FRIDAY',
      activity: 'DAY TRIP TO SHAXI ANCIENT TOWN'
    },
    {
      day: 'WEEKEND!!',
      activity: 'WEEKEND TRIP - HIKING AT TIGER LEAGUE VALLEY'
    }
  ];

  const joinSteps = [
    {
      icon: '📝',
      title: 'Apply',
      description: 'Fill out the application form to introduce yourself.'
    },
    {
      icon: '👁️',
      title: 'Discovery',
      description: 'Our community facilitator will schedule a call with you if there\'s a fit.'
    },
    {
      icon: '💰',
      title: 'Payment',
      description: 'Once you decide that our program aligns with your expectations, you can proceed to pay for your selected destination.'
    },
    {
      icon: '🧳',
      title: 'Prepare',
      description: 'What sets us apart is our commitment to supporting you as you prepare for your trip to China.'
    },
    {
      icon: '😊',
      title: 'Enjoy!',
      description: 'Pack your bags, board your flight, and get ready for a life-changing, exotic travel experience with fellow nomads from around the world!'
    }
  ];

  const faqs = [
    {
      question: 'Can I work remotely from China?',
      answer: 'One of the biggest challenges of working remotely in China is navigating the Great Firewall, which blocks many commonly used apps like Google and Facebook. However, with a proper VPN, you can bypass these restrictions and enjoy internet speeds of 40 Mbps to 150 Mbps.\n\nInstalling multiple VPNs ensures a smooth internet connection about 90% of the time. If you have an extremely tight work schedule, we don\'t recommend coming to China, as there\'s a risk of occasional disruptions. For moderate workloads and those looking to try out working remotely in China, the connection should be sufficient.'
    },
    {
      question: 'What is the accommodation like?',
      answer: 'As an experienced digital nomad, Zoie understands the needs of remote workers. Every accommodation is handpicked to ensure stable Wi-Fi, a workstation (usually with a personal desk in the room), common areas for socializing, and a private bathroom.\n\nBeyond these essentials, Zoie aims to add extra value by including features like in-room projectors, smart toilets, on-site swimming pools, convenient locations near scenic spots, kitchens, bars, and amenities like pool tables.'
    },
    {
      question: 'How do I join, and why do I need to apply?',
      answer: 'We interview and select each member for every cohort to ensure the best experience for the community.\n\nPlease understand that the dynamics of the group are important—for example, one person relaxing by the pool while others are working all day could create a mismatch. You can refer to "how to join" section to learn more about our application process, or visit application page to submit your application.'
    },
    {
      question: 'Why two weeks?',
      answer: 'A two-week trip allows for slow travel, enabling you to immerse yourself in the local way of life. It also provides the stability needed for remote work to ensure productivity. Additionally, the two-week duration aligns with China\'s visa-free policy, eliminating the hassle of navigating the often frustrating Chinese visa system. It\'s the perfect length to "test the waters" for living and working in China.'
    },
    {
      question: 'Why is the price so affordable? Will quality be compromised?',
      answer: 'Zoie, your host, is a seasoned digital nomad and a native Chinese who sources accommodations directly from local business owners, ensuring first-hand deals. She strategically selects travel seasons to avoid local holidays, reducing overtourism and making travel more sustainable. This approach not only supports the local economy but also helps secure the best deals for digital nomads, without compromising on quality.'
    },
    {
      question: 'What will my daily life look like with Wander Panda?',
      answer: 'You can refer to "sample itinerary" section for a detailed itinerary.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <h1 
            className="text-5xl md:text-6xl font-secondary font-light mb-6"
            style={{
              fontSize: '48px',
              fontFamily: 'Maitree, Georgia, serif'
            }}
          >
            Feel the Wander Panda vibe
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Join Wander Panda for an unforgettable 2-week workation in China, exploring hand-picked destinations, 
            embracing community, culture, and adventure while thriving with like-minded digital nomads.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-secondary font-light mb-4"
              style={{
                fontSize: '48px',
                fontFamily: 'Maitree, Georgia, serif'
              }}
            >
              Explore our sample 2 weeks itinerary
            </h2>
            <p className="text-xl text-gray-600">
              Wondering what your day would look like at Wander Panda? Check it out.
            </p>
          </div>

          <div className="bg-pink-100 rounded-2xl p-8 relative overflow-hidden">
            {/* Itinerary image */}
            <img 
              src="/images/how/itinerary.png" 
              alt="Wander Panda 2-Week Itinerary" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Meet the Host Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-secondary font-light mb-4"
              style={{
                fontSize: '48px',
                fontFamily: 'Maitree, Georgia, serif'
              }}
            >
              <span style={{ fontFamily: 'Maitree, Georgia, serif' }}>Meet the</span>{' '}
              <span style={{ fontFamily: 'Parisienne, cursive' }}>Host</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Full-width image carousel */}
            <div className="overflow-x-auto">
              <div className="flex space-x-4 pb-4" style={{ minWidth: 'max-content' }}>
                <img 
                  src="/images/host/host_1.png" 
                  alt="Zoie - Host at Wander Panda" 
                  className="w-80 h-80 object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/host/host_2.png" 
                  alt="Zoie - Host at Wander Panda" 
                  className="w-80 h-80 object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/host/host_3.png" 
                  alt="Zoie - Host at Wander Panda" 
                  className="w-80 h-80 object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/host/host_4.png" 
                  alt="Zoie - Host at Wander Panda" 
                  className="w-80 h-80 object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/host/host_5.png" 
                  alt="Zoie - Host at Wander Panda" 
                  className="w-80 h-80 object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/host/host_6.png" 
                  alt="Zoie - Host at Wander Panda" 
                  className="w-80 h-80 object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/host/host_7.png" 
                  alt="Zoie - Host at Wander Panda" 
                  className="w-80 h-80 object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/host/host_8.png" 
                  alt="Zoie - Host at Wander Panda" 
                  className="w-80 h-80 object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/host/host_9.png" 
                  alt="Zoie - Host at Wander Panda" 
                  className="w-80 h-80 object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/host/host_10.png" 
                  alt="Zoie - Host at Wander Panda" 
                  className="w-80 h-80 object-cover rounded-lg flex-shrink-0"
                />
              </div>
            </div>

            {/* Host bio text below carousel */}
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-secondary font-light mb-6">Hey, it's Zoie, your host at Wander Panda Retreat! 🌏✨</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                After exploring over 30 countries as a digital nomad, I've realized that what truly makes every journey special isn't just the destinations—it's the incredible people we meet and the communities we create along the way. That's why I'm so passionate about hosting retreats that bring people together to connect, share, and grow.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a native Chinese, I couldn't wait to launch retreats in China when visa policies loosened—it's my way of sharing the beauty of my homeland and creating meaningful experiences that bridge cultures.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When I'm not hosting retreats, you'll find me surfing, kitesurfing, scuba diving, DJing, indulging in amazing food, or teaching yoga. Oh, and as a UX designer, I love crafting experiences that are thoughtful and unforgettable—just like our time together will be!
              </p>
              <p className="text-gray-700 leading-relaxed">
                I can't wait to welcome you to Wander Panda and create memories that will last a lifetime. Let's make magic together! 🐼✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-secondary font-light mb-4"
              style={{
                fontSize: '54px',
                fontFamily: 'Maitree, Georgia, serif'
              }}
            >
              <span style={{ fontFamily: 'Maitree, Georgia, serif' }}>How to</span>{' '}
              <span style={{ fontFamily: 'Parisienne, cursive' }}>Join</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {joinSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-secondary font-light mb-4"
              style={{
                fontSize: '48px',
                fontFamily: 'Maitree, Georgia, serif'
              }}
            >
              FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to your most common questions about Wander Panda! From booking details to payment options, we got you covered.
            </p>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-center cursor-pointer py-6" onClick={() => toggleFaq(index)}>
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <svg className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openFaq === index && (
                  <div className="pb-6 text-gray-600 space-y-3">
                    {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Can't find your answer?{' '}
              <Link to="/contact" className="text-orange-500 underline hover:text-orange-600 transition-colors">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage; 