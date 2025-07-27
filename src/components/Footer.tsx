import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo variant="white" size="md" />
            </div>
            <p className="font-primary text-gray-300 mb-4">
              Wander Panda
            </p>
            <p className="font-primary text-sm text-gray-400">
              Copyright © Wander Panda 2024, All Rights Reserved
            </p>
          </div>

          <div>
            <h3 className="font-secondary font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block font-primary text-gray-300 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/" className="block font-primary text-gray-300 hover:text-white transition-colors">
                Contact us
              </Link>
              <Link to="/" className="block font-primary text-gray-300 hover:text-white transition-colors">
                About us
              </Link>
              <Link to="/" className="block font-primary text-gray-300 hover:text-white transition-colors">
                Community
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-secondary font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="font-primary text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="font-primary text-xs font-bold">@</span>
              </div>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="font-primary text-xs font-bold">in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;