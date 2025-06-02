import React from 'react';

function HomeCallToAction() {
  return (
    <section className="bg-blue-600 text-white text-center py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Join us today and experience seamless service like never before.
      </p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
        Sign Up Now
      </button>
    </section>
  );
}

export default HomeCallToAction;
