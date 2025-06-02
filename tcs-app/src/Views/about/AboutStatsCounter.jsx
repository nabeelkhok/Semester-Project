import React from 'react';

function AboutStatsCounter() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-5xl font-bold text-red-600 mb-2">10M+</h2>
            <p className="text-xl text-gray-700">Deliveries Made</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-5xl font-bold text-red-600 mb-2">500+</h2>
            <p className="text-xl text-gray-700">Cities Covered</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-5xl font-bold text-red-600 mb-2">99%</h2>
            <p className="text-xl text-gray-700">Customer Satisfaction</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default AboutStatsCounter;
