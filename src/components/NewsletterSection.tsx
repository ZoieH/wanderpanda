import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', { name, email });
    setEmail('');
    setName('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-secondary font-light mb-6">
              Still considering? Be a friend first, stay in touch.
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <input
                type="text"
                placeholder="How should we call you?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent font-primary"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent font-primary"
                required
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors font-primary font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
              alt="Happy travelers" 
              className="rounded-2xl shadow-lg max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;