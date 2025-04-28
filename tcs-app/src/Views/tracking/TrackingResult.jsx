import React from 'react';

function TrackingResult() {
    return (
        <div id="trackingResult" className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full max-w-md hidden">
            <h2 className="text-xl font-semibold text-blue-600">Shipment Details</h2>
            <p><strong>Customer:</strong> <span id="customerName"></span></p>
            <p><strong>Status:</strong> <span id="status" className="font-bold"></span></p>
            <p><strong>Estimated Delivery:</strong> <span id="estimatedDelivery"></span></p>
            <p><strong>Last Updated:</strong> <span id="lastUpdated"></span></p>

            {/* Admin Panel: Update Status (Conditionally Render if needed) */}
            <select id="statusUpdate" className="w-full p-2 border rounded mt-4">
                <option value="Pending">Pending</option>
                <option value="In Transit">In Transit</option>
                <option value="Delivered">Delivered</option>
            </select>
            <button id="updateBtn" className="w-full bg-green-500 text-white py-2 rounded mt-2 hover:bg-green-600 transition">Update Status</button>
        </div>
    );
}

export default TrackingResult;