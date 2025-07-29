import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/logo/wanderpanda-logo-white.png" 
                alt="Wander Panda Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="font-primary text-sm text-gray-400">
              Copyright © Wander Panda 2024, All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6">
              <Link to="/" className="font-primary text-sm text-gray-300 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/contact" className="font-primary text-sm text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link to="/" className="font-primary text-sm text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/" className="font-primary text-sm text-gray-300 hover:text-white transition-colors">
                Community
              </Link>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/g/1Fsp7kzTif/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="font-primary text-xs font-bold">f</span>
              </a>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="font-primary text-xs font-bold">@</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="font-primary text-xs font-bold">▶</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 flex justify-end">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;