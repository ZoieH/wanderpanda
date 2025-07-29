export interface Trip {
  id: number;
  title: string;
  location: string;
  date: string;
  price: string;
  duration: string;
  maxParticipants: number;
  description: string;
  introduction: string[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: {
    day: string;
    activity: string;
    description?: string;
  }[];
  accommodation: {
    title: string;
    description: string;
    features: string[];
    roomImages: string[];
  };
  adventure: {
    title: string;
    description: string;
    activities: string[];
    images: string[];
  };
  food: {
    title: string;
    description: string;
    highlights: string[];
    images: string[];
  };
  culture: {
    description: string;
    images: string[];
  };
  upgradeOptions: {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
  }[];
  storyImage: string;
  image: string;
  gallery: string[];
}

export const trips: Trip[] = [
  {
    id: 1,
    title: 'Dali Adventure',
    location: 'Dali, Yunnan',
    date: '20250304 - 20250317',
    price: '$899',
    duration: '2 weeks',
    maxParticipants: 12,
    description: 'Experience the breathtaking landscapes and rich cultural heritage of Yunnan province. From ancient towns to stunning mountain vistas, this adventure combines remote work with unforgettable exploration.',
    introduction: [
      'Imagine yourself starting your day in Dali with the warmth of the highland sunshine on your face and a cup of freshly brewed Yunnan Xiaoli coffee in hand. Take a peaceful walk along Erhai Ecological Corridor, letting the breathtaking views energize you for a productive day.',
      'When lunchtime comes, savor fresh local meals as you explore the charm of Dali\'s ancient town. In the afternoon, tap into your creativity with local cultural workshops, or keep the work momentum going.',
      'After work, unwind by Erhai Lake or join fellow adventurers for evening gatherings. This isn\'t just a workation—it\'s a journey into Yunnan\'s soul, where every moment offers discovery, connection, and inspiration.'
    ],
    highlights: [
      'Live and work in traditional Bai architecture',
      'Explore the ancient Dali Old Town',
      'Trek through the stunning Cangshan Mountains',
      'Experience local Bai minority culture',
      'Enjoy panoramic views of Erhai Lake'
    ],
    included: [
      'Accommodation in traditional courtyard house',
      'High-speed WiFi and dedicated workspace',
      'Daily breakfast and 3 group dinners',
      'Welcome ceremony and farewell celebration',
      'Guided cultural experiences',
      'Mountain hiking excursions',
      '24/7 local support'
    ],
    notIncluded: [
      'International flights',
      'Lunch and dinner (except group meals)',
      'Personal travel insurance',
      'Visa fees',
      'Personal expenses and shopping'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'Arrival and Welcome', description: 'Airport pickup and welcome dinner' },
      { day: 'Day 2-3', activity: 'Dali Old Town Exploration', description: 'Guided tour and cultural immersion' },
      { day: 'Day 4-7', activity: 'Work Week 1', description: 'Establish routine with morning hikes' },
      { day: 'Day 8-9', activity: 'Cangshan Mountain Trek', description: 'Weekend adventure in the mountains' },
      { day: 'Day 10-13', activity: 'Work Week 2', description: 'Cultural workshops and networking' },
      { day: 'Day 14', activity: 'Farewell Celebration', description: 'Final group dinner and departure' }
    ],
    accommodation: {
      title: 'Traditional Bai Courtyard House',
      description: 'Stay in an authentic traditional courtyard house featuring classic Bai architecture with modern amenities.',
      features: [
        'Private rooms with mountain or lake views',
        'Shared common areas and workspace',
        'Traditional courtyard garden',
        'Modern kitchen and bathrooms',
        'High-speed internet throughout'
      ],
      roomImages: [
        '/images/trips/dali/room/room-1.jpg',
        '/images/trips/dali/room/room-2.jpg',
        '/images/trips/dali/room/room-3.jpg',
        '/images/trips/dali/room/room-4.jpg',
        '/images/trips/dali/room/room-5.jpg',
        '/images/trips/dali/room/room-6.jpg',
        '/images/trips/dali/room/room-7.jpg',
        '/images/trips/dali/room/room-8.jpg',
        '/images/trips/dali/room/room-9.jpg',
        '/images/trips/dali/room/room-10.jpg'
      ]
    },
    adventure: {
      title: 'Mountain and Lake Adventures',
      description: 'Experience the natural beauty of Yunnan through hiking in Cangshan Mountains, cycling around Erhai Lake, and exploring hidden valleys with breathtaking waterfalls.',
      activities: [
        'Cangshan Mountain hiking trails',
        'Erhai Lake cycling tours',
        'Three Pagodas cultural site visit',
        'Traditional Bai village exploration',
        'Butterfly Spring natural area'
      ],
      images: [
        '/images/trips/dali/info/adventure-1.jpg',
        '/images/trips/dali/info/adventure-2.jpg',
        '/images/trips/dali/info/adventure-3.jpg'
      ]
    },
    food: {
      title: 'Yunnan Culinary Journey',
      description: 'Discover the unique flavors of Yunnan cuisine, from crossing-the-bridge noodles to Pu-er tea ceremonies, and learn traditional cooking techniques.',
      highlights: [
        'Crossing-the-bridge rice noodles',
        'Traditional Bai three-course tea ceremony',
        'Local mushroom and herb dishes',
        'Yunnan coffee plantation visit',
        'Cooking classes with local families'
      ],
      images: [
        '/images/trips/dali/info/food-1.jpeg',
        '/images/trips/dali/info/food-2.jpeg',
        '/images/trips/dali/info/food-3.jpeg'
      ]
    },
    culture: {
      description: 'Immerse yourself in the rich Bai minority culture through traditional festivals, handicraft workshops, and architectural marvels that tell the story of ancient China.',
      images: [
        '/images/trips/dali/info/culture-1.webp',
        '/images/trips/dali/info/culture-2.webp',
        '/images/trips/dali/info/culture-3.webp'
      ]
    },
    upgradeOptions: [
      {
        id: 'cozy-haven',
        title: 'Cozy Haven',
        description: 'Retreat to your comfortable private room, offering the perfect blend of peace and privacy in Dali.',
        price: '$150',
        image: '/images/trips/dali/upgrades/upgrade-1.jpg'
      },
      {
        id: 'scenery-lookout',
        title: 'Scenery Lookout',
        description: 'Wake up to breathtaking Dali landscapes and let nature inspire your every moment.',
        price: '$250',
        image: '/images/trips/dali/upgrades/upgrade-2.jpg'
      },
      {
        id: 'sunlit-sanctuary',
        title: 'Sunlit Sanctuary',
        description: 'Bask in the golden rays in your private living room—perfect for soaking up sunshine and serenity and sipping some afternoon tea.',
        price: '$350',
        image: '/images/trips/dali/upgrades/upgrade-3.jpg'
      }
    ],
    storyImage: '/images/trips/dali/map.png',
    image: '/images/trips/dali/yunnan.jpg',
    gallery: [
      'https://images.pexels.com/photos/2506552/pexels-photo-2506552.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1376766/pexels-photo-1376766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'Hainan Adventure',
    location: 'Wanning, Hainan',
    date: '20250418 - 20250501',
    price: '$999',
    duration: '2 weeks',
    maxParticipants: 10,
    description: 'Discover the tropical paradise of Hainan Island, where pristine beaches meet lush rainforests. Work remotely while experiencing world-class surfing, traditional Li culture, and fresh seafood.',
    introduction: [
      'Wake up to the sound of waves crashing on pristine beaches and start your day with a refreshing swim in crystal-clear waters. Wanning offers the perfect blend of tropical paradise and productive workspace.',
      'Spend your mornings working with ocean views, then dive into afternoon surf sessions or explore the island\'s rich cultural heritage. From traditional Li villages to modern beach resorts, Hainan offers endless discovery.',
      'Join a community of remote workers and adventurers as you balance productivity with tropical exploration. This workation combines the best of beach life with authentic cultural immersion.'
    ],
    highlights: [
      'World-class surfing beaches',
      'Traditional Li and Miao minority culture',
      'Tropical rainforest exploration',
      'Fresh seafood and Hainanese cuisine',
      'Hot springs and wellness activities'
    ],
    included: [
      'Beachfront accommodation',
      'High-speed WiFi and workspace',
      'Surfboard rental and lessons',
      'Cultural village visits',
      'Daily breakfast and welcome dinner',
      'Airport transfers',
      'Local guide and support'
    ],
    notIncluded: [
      'International flights',
      'Most meals (except specified)',
      'Travel insurance',
      'Personal equipment',
      'Spa treatments and optional activities'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'Arrival in Hainan', description: 'Airport pickup and beachfront check-in' },
      { day: 'Day 2-3', activity: 'Surf and Culture', description: 'Surf lessons and Li village visit' },
      { day: 'Day 4-7', activity: 'Work Week 1', description: 'Establish routine with beach breaks' },
      { day: 'Day 8-9', activity: 'Rainforest Adventure', description: 'Trek through tropical landscapes' },
      { day: 'Day 10-13', activity: 'Work Week 2', description: 'Final projects and group activities' },
      { day: 'Day 14', activity: 'Departure', description: 'Farewell breakfast and transfers' }
    ],
    accommodation: {
      title: 'Beachfront Resort Villa',
      description: 'Modern tropical accommodation just steps from the beach with all amenities for work and relaxation.',
      features: [
        'Ocean view rooms',
        'Shared workspace with WiFi',
        'Beach access',
        'Swimming pool',
        'Restaurant and cafe on-site'
      ],
      roomImages: [
        '/images/trips/wanning/room/room-1.JPG',
        '/images/trips/wanning/room/room-2.JPG',
        '/images/trips/wanning/room/room-3.JPG',
        '/images/trips/wanning/room/room-4.JPG',
        '/images/trips/wanning/room/room-5.JPG',
        '/images/trips/wanning/room/room-6.JPG',
        '/images/trips/wanning/room/room-7.JPG',
        '/images/trips/wanning/room/room-8.JPG',
        '/images/trips/wanning/room/room-9.JPG',
        '/images/trips/wanning/room/room-10.JPG',
        '/images/trips/wanning/room/room-11.JPG',
        '/images/trips/wanning/room/room-12.JPG',
        '/images/trips/wanning/room/room-13.JPG',
        '/images/trips/wanning/room/room-14.JPG',
      ]
    },
    adventure: {
      title: 'Tropical Island Adventures',
      description: 'Discover the natural wonders of Hainan through surfing perfect waves, exploring pristine rainforests, and experiencing the island\'s unique biodiversity.',
      activities: [
        'Professional surf lessons',
        'Rainforest trekking',
        'Snorkeling and diving',
        'Hot springs relaxation',
        'Island hopping tours'
      ],
      images: [
        '/images/trips/wanning/info/adventure-1.JPG',
        '/images/trips/wanning/info/adventure-2.JPG',
        '/images/trips/wanning/info/adventure-3.JPG'
      ]
    },
    food: {
      title: 'Hainanese Coastal Cuisine',
      description: 'Savor the fresh flavors of Hainan with an emphasis on seafood, tropical fruits, and the famous Hainanese chicken rice.',
      highlights: [
        'Famous Hainanese chicken rice',
        'Fresh caught seafood daily',
        'Tropical fruit varieties',
        'Coconut-based dishes',
        'Traditional Chinese medicine cuisine'
      ],
      images: [
        '/images/trips/wanning/info/food-1.JPG',
        '/images/trips/wanning/info/food-2.JPG',
        '/images/trips/wanning/info/food-3.JPG'
      ]
    },
    culture: {
      description: 'Experience the unique blend of Li and Miao minority cultures alongside Han Chinese traditions, set against the backdrop of China\'s tropical paradise.',
      images: [
        '/images/trips/wanning/info/culture-1.JPG',
        '/images/trips/wanning/info/culture-2.JPG',
        '/images/trips/wanning/info/culture-3.JPG'
      ]
    },
    upgradeOptions: [
      {
        id: 'cozy-escape',
        title: 'Cozy Escape',
        description: 'Enjoy the privacy of your own room, perfect for restful nights and productive days.',
        price: '$200',
        image: '/images/trips/wanning/upgrades/upgrade-1.jpeg'
      },
      {
        id: 'unwind-paradise',
        title: 'Unwind Paradise',
        description: 'Indulge yourself with extra cozy space for unwind and ultimate relaxation.',
        price: '$300',
        image: '/images/trips/wanning/upgrades/upgrade-2.jpeg'
      },
      {
        id: 'have-it-all',
        title: 'Have It All (2 PAX)',
        description: 'Enjoy the entire room for you and your partner in crime. Choose between twin beds (2) or a king bed for your stay.',
        price: '$600',
        image: '/images/trips/wanning/upgrades/upgrade-3.jpeg'
      }
    ],
    storyImage: '/images/trips/wanning/map.png',
    image: '/images/trips/wanning/main_Image_1080px.jpg',
    gallery: [
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1450348/pexels-photo-1450348.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ]
  }
];

export const getTripById = (id: number): Trip | undefined => {
  return trips.find(trip => trip.id === id);
};