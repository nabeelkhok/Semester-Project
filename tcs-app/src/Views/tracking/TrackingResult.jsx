import React, { useState } from 'react';

function TrackingResult({
  shipment,
  onUpdateStatus,
  isAdmin = false,
  visible = false,
}) {
  const [newStatus, setNewStatus] = useState(shipment?.status || '');

  if (!visible || !shipment) return null; // Don't render if not visible or no shipment

  const handleStatusChange = (e) => setNewStatus(e.target.value);

  const handleUpdate = () => {
    if (newStatus && newStatus !== shipment.status) {
      onUpdateStatus(shipment.trackingID, newStatus);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full max-w-md">
      <h2 className="text-xl font-semibold text-blue-600">Shipment Details</h2>
      <p><strong>Customer:</strong> {shipment.customerName}</p>
      <p><strong>Status:</strong> <span className="font-bold">{shipment.status}</span></p>
      <p><strong>Estimated Delivery:</strong> {shipment.estimatedDelivery}</p>
      <p><strong>Last Updated:</strong> {shipment.lastUpdated}</p>

      {isAdmin && (
        <>
          <select
            value={newStatus}
            onChange={handleStatusChange}
            className="w-full p-2 border rounded mt-4"
          >
            <option value="Pending">Pending</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </select>
          <button
            onClick={handleUpdate}
            className="w-full bg-green-500 text-white py-2 rounded mt-2 hover:bg-green-600 transition"
            disabled={newStatus === shipment.status}
          >
            Update Status
          </button>
        </>
      )}
    </div>
  );
}

export default TrackingResult;
