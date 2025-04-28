import React from 'react';

function AboutTeam() {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold">Meet Our Team</h2>
                <p className="mt-4 text-gray-700">Our experienced team ensures seamless delivery and exceptional customer service.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <img src="../../assets/75e7ceed-f664-49e0-bb72-5d34fe61e4ef.jpg" alt="CEO" className="w-24 h-24 mx-auto rounded-full" />
                        <h3 className="mt-4 text-xl font-bold">John Doe</h3>
                        <p className="text-gray-600">CEO & Founder</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <img src="../../assets/75e7ceed-f664-49e0-bb72-5d34fe61e4ef.jpg" alt="Operations Manager" className="w-24 h-24 mx-auto rounded-full" />
                        <h3 className="mt-4 text-xl font-bold">Jane Smith</h3>
                        <p className="text-gray-600">Operations Manager</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <img src="../../assets/75e7ceed-f664-49e0-bb72-5d34fe61e4ef.jpg" alt="Customer Support Head" className="w-24 h-24 mx-auto rounded-full" />
                        <h3 className="mt-4 text-xl font-bold">Michael Brown</h3>
                        <p className="text-gray-600">Head of Customer Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutTeam;