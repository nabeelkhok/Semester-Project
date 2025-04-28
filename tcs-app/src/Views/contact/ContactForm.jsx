import React from 'react';

function ContactForm() {
    return (
        <main className="container mx-auto mt-16 p-6">
            <section className="text-center mb-8">
                <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
                <p className="mt-4 text-gray-700">We'd love to hear from you. Reach out to us anytime!</p>
            </section>

            <section className="max-w-3xl mx-auto bg-white p-6 mt-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-center">Send Us a Message</h2>
                <form className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Message</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send Message</button>
                </form>
            </section>
        </main>
    );
}

export default ContactForm;