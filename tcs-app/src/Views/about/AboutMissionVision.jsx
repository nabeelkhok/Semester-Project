import React from 'react';

function AboutMissionVision() {
    return (
        <section className="container mx-auto my-10 p-6 bg-white shadow-md rounded-lg text-center">
            <h2 className="text-2xl font-semibold">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-bold text-blue-600">Our Mission</h3>
                    <p className="mt-2 text-gray-700">To provide fast, reliable, and affordable courier services, ensuring customer satisfaction through innovation and efficiency.</p>
                </div>
                <div className="p-4 border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-500">Our Vision</h3>
                    <p className="mt-2 text-gray-700">To become the global leader in logistics and courier services by embracing cutting-edge technology and sustainable practices.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMissionVision;