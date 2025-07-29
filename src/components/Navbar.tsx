import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import { trips } from '../data/trips';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTripsDropdownOpen, setIsTripsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.trips-dropdown')) {
        setIsTripsDropdownOpen(false);
      }
    };

    if (isTripsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTripsDropdownOpen]);

  // Use the actual trips data from CSV
  const navbarTrips = trips.map(trip => ({
    id: trip.id,
    title: trip.title,
    date: trip.date
  }));

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/60 backdrop-blur-md shadow-lg' 
        : 'bg-gray-900/60 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/logo/wanderpanda-logo-white.png" 
              alt="Wander Panda" 
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/how-it-works" 
              className={`font-primary transition-colors ${
                isScrolled 
                  ? 'text-gray-200 hover:text-white' 
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              How it works
            </Link>
            
            {/* Trips Dropdown */}
            <div className="relative trips-dropdown">
              <button
                onClick={() => setIsTripsDropdownOpen(!isTripsDropdownOpen)}
                className={`font-primary transition-colors flex items-center space-x-1 ${
                  isScrolled 
                    ? 'text-gray-200 hover:text-white' 
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                <span>Trips</span>
                <ChevronDown size={16} className={`transition-transform ${isTripsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isTripsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {navbarTrips.map((trip) => (
                    <Link
                      key={trip.id}
                      to={`/trip/${trip.id}`}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsTripsDropdownOpen(false)}
                    >
                      <div className="font-medium text-gray-900">{trip.title}</div>
                      <div className="text-sm font-medium text-orange-500">{trip.date}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/blog" 
              className={`font-primary transition-colors ${
                isScrolled 
                  ? 'text-gray-200 hover:text-white' 
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              Resource
            </Link>
            <Link 
              to="/" 
              className={`font-primary transition-colors ${
                isScrolled 
                  ? 'text-gray-200 hover:text-white' 
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              Referral
            </Link>
            <Button variant="primary" size="md">
              Apply Now
            </Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-200' : 'text-gray-200'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/80 backdrop-blur-md border-t border-gray-700">
              <Link to="/how-it-works" className="block px-3 py-2 font-primary text-gray-200 hover:text-white">How it works</Link>
              <div className="px-3 py-2">
                <div className="font-primary text-gray-200 mb-2">Trips</div>
                {navbarTrips.map((trip) => (
                  <Link
                    key={trip.id}
                    to={`/trip/${trip.id}`}
                    className="block pl-4 py-1 text-sm text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {trip.title} - {trip.date}
                  </Link>
                ))}
              </div>
              <Link to="/blog" className="block px-3 py-2 font-primary text-gray-200 hover:text-white">Resource</Link>
              <Link to="/" className="block px-3 py-2 font-primary text-gray-200 hover:text-white">Referral</Link>
              <Button variant="primary" size="sm" className="w-full">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;