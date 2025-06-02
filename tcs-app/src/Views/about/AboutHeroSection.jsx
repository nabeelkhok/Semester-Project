import React from 'react';

function AboutHeroSection() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Ready to Ship with TCS?
        </h1>
        <p className="text-xl mb-8 text-gray-700">
          Reliable & Fast Courier Services, Serving Millions.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default AboutHeroSection;
