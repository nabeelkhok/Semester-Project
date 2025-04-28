import React from 'react';

function AboutPartners() {
    return (
        <section className="container mx-auto text-center my-10">
            <h2 className="text-2xl font-semibold">Our Trusted Partners</h2>
            <div className="flex justify-center mt-6 space-x-4">
                <img src="../../assets/image.png" alt="Partner 1" className="h-12" />
                <img src="../../assets/image.png" alt="Partner 2" className="h-12" />
            </div>
        </section>
    );
}

export default AboutPartners;