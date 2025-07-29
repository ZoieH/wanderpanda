import React, { useState } from 'react';
import Button from './ui/Button';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', { email, name });
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="shadow-lg max-w-6xl mx-auto overflow-hidden"
          style={{ 
            backgroundColor: '#AECAEA',
            borderRadius: '20px'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left Side - Text and Form */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <h2 
                className="mb-8"
                style={{
                  fontSize: '36px',
                  fontFamily: 'Maitree, Georgia, serif',
                  fontWeight: 'normal',
                  letterSpacing: 'normal'
                }}
              >
                Not ready? Be a friend{' '}
                <span 
                  style={{
                    fontSize: '42px',
                    fontFamily: 'Parisienne, cursive'
                  }}
                >
                  Subscribe
                </span>
                <br />
                and check our useful resource
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent font-primary"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How should we call you
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent font-primary"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="outline-dark"
                  size="md"
                >
                  Subscribe
                </Button>
              </form>
            </div>
            
            {/* Right Side - Image */}
            <div className="lg:col-span-2 relative">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;