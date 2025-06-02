import React from 'react';

function AboutPartners() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Trusted Partners</h2>
        
        <div className="flex flex-wrap justify-center items-center mt-8 gap-6">
          <img src={Partner1} alt="Partner 1" className="h-12 object-contain" />
          <img src={Partner2} alt="Partner 2" className="h-12 object-contain" />
        </div>
      </div>
    </section>
  );
}

export default AboutPartners;
