import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import Button from './ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Logo size="md" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-primary text-gray-700 hover:text-orange-500 transition-colors">
              How it works
            </Link>
            <Link to="/" className="font-primary text-gray-700 hover:text-orange-500 transition-colors">
              Trips
            </Link>
            <Link to="/blog" className="font-primary text-gray-700 hover:text-orange-500 transition-colors">
              Resource
            </Link>
            <Link to="/" className="font-primary text-gray-700 hover:text-orange-500 transition-colors">
              Referral
            </Link>
            <Button variant="primary" className="rounded-full">
              Apply Now
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link to="/" className="block px-3 py-2 font-primary text-gray-700">How it works</Link>
              <Link to="/" className="block px-3 py-2 font-primary text-gray-700">Trips</Link>
              <Link to="/blog" className="block px-3 py-2 font-primary text-gray-700">Resource</Link>
              <Link to="/" className="block px-3 py-2 font-primary text-gray-700">Referral</Link>
              <Button variant="primary" className="w-full">
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