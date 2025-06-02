import React from 'react';

function AboutTeam() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our experienced team ensures seamless delivery and exceptional customer service.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
            <p className="text-red-600">CEO & Founder</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
            <p className="text-red-600">Operations Manager</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Joensito</h3>
            <p className="text-red-600">Manager</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Michael Brown</h3>
            <p className="text-red-600">Head of Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;