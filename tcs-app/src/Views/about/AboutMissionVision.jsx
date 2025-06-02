import React from 'react';

function AboutMissionVision() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission & Vision</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-left">
          <div className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-md shadow-sm">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To provide fast, reliable, and affordable courier services, ensuring customer satisfaction through innovation and efficiency.
            </p>
          </div>

          <div className="p-6 border-l-4 border-yellow-500 bg-gray-50 rounded-md shadow-sm">
            <h3 className="text-xl font-bold text-yellow-500 mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To become the global leader in logistics and courier services by embracing cutting-edge technology and sustainable practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMissionVision;
