import React from 'react';

function AboutCallToAction() {
  return (
    <section className="relative z-10 bg-blue-600 text-white py-10 mt-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">Ready to Ship with TCS?</h2>
        <button className="mt-2 px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-300 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default AboutCallToAction;
