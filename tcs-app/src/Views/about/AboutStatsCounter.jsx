import React from 'react';

function AboutStatsCounter() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center my-10">
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600">10M+</h3>
                <p className="text-gray-700">Deliveries Made</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                <p className="text-gray-700">Cities Covered</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600">99%</h3>
                <p className="text-gray-700">Customer Satisfaction</p>
            </div>
        </section>
    );
}

export default AboutStatsCounter;