import React from 'react';

function TrackingSection() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Track Your Order</h1>
            <input type="text" id="trackingInput" placeholder="Enter Tracking ID" className="w-full p-2 border rounded mb-4" />
            <button id="trackBtn" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Track</button>
        </div>
    );
}

export default TrackingSection;