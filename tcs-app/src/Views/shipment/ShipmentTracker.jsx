import React, { useState } from 'react';
import ShipmentCard from './ShipmentCard';
import CustomerInfo from './CustomerInfo';
import CardLayout from './CardLayout';
import SectionContainer from './SectionContainer';

const ShipmentTracker = ({
  title = "Track Your Order",
  initialData = [],
  children,
}) => {
  const [shipments, setShipments] = useState(initialData);
  const [trackingID, setTrackingID] = useState('');
  const [statusUpdate, setStatusUpdate] = useState('');
  const [filter, setFilter] = useState('All');
  const [currentShipment, setCurrentShipment] = useState(null);
  const [filteredShipments, setFilteredShipments] = useState([]);

  const normalizeTrackingID = (id) => id.trim().toLowerCase();

  const handleTrack = () => {
    const normalizedInput = normalizeTrackingID(trackingID);
    const shipment = shipments.find(s => normalizeTrackingID(s.trackingID) === normalizedInput);
    if (shipment) {
      setCurrentShipment(shipment);
    } else {
      alert("Tracking ID not found!");
      setCurrentShipment(null);
    }
  };

  const handleUpdateStatus = () => {
    const normalizedInput = normalizeTrackingID(trackingID);
    if (!normalizedInput) {
      alert("Please enter a Tracking ID");
      return;
    }
    if (!statusUpdate) {
      alert("Please select a status to update");
      return;
    }

    const shipmentExists = shipments.some(s => normalizeTrackingID(s.trackingID) === normalizedInput);
    if (!shipmentExists) {
      alert("Tracking ID not found, cannot update status.");
      return;
    }

    setShipments(prev =>
      prev.map(s =>
        normalizeTrackingID(s.trackingID) === normalizedInput
          ? { ...s, status: statusUpdate, lastUpdated: new Date().toISOString().split('T')[0] }
          : s
      )
    );
    alert("Status Updated Successfully!");
    setStatusUpdate('');
    setTrackingID('');
    setCurrentShipment(null);
  };

  const handleFilter = () => {
    const filtered = shipments.filter(s => filter === 'All' || s.status === filter);
    setFilteredShipments(filtered);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      {/* Title & Children */}
      <SectionContainer>
        <CardLayout>
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">{title}</h1>
          {children}
        </CardLayout>
      </SectionContainer>

      {/* Track Section */}
      <SectionContainer>
        <CardLayout>
          <input
            type="text"
            value={trackingID}
            onChange={(e) => setTrackingID(e.target.value)}
            placeholder="Enter Tracking ID"
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleTrack}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            disabled={!trackingID.trim()}
          >
            Track Order
          </button>
        </CardLayout>
      </SectionContainer>

      {/* Shipment Display */}
      {currentShipment && (
        <SectionContainer>
          <CardLayout>
            <CustomerInfo name={currentShipment.customerName} />
            <ShipmentCard {...currentShipment} />
          </CardLayout>
        </SectionContainer>
      )}

      {/* Status Update */}
      <SectionContainer>
        <CardLayout>
          <h2 className="text-xl font-bold mb-2">Update Shipment Status</h2>
          <select
            value={statusUpdate}
            onChange={e => setStatusUpdate(e.target.value)}
            className="border p-2 w-full mb-2"
          >
            <option value="">Select New Status</option>
            <option value="Pending">Pending</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </select>
          <button
            onClick={handleUpdateStatus}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
            disabled={!statusUpdate || !trackingID.trim()}
          >
            Update
          </button>
        </CardLayout>
      </SectionContainer>

      {/* Filter */}
      <SectionContainer>
        <CardLayout>
          <h2 className="text-xl font-bold mb-2">Filter Shipments</h2>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="border p-2 w-full mb-2"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </select>
          <button
            onClick={handleFilter}
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
          >
            Filter
          </button>

          {filteredShipments.length > 0 ? (
            <div className="mt-4 w-full max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold mb-2">Filtered Shipments:</h3>
              {filteredShipments.map(s => (
                <ShipmentCard key={s.trackingID} {...s} />
              ))}
            </div>
          ) : (
            filter !== 'All' && (
              <p className="mt-4 text-center text-gray-600">No shipments found for status "{filter}"</p>
            )
          )}
        </CardLayout>
      </SectionContainer>
    </div>
  );
};

export default ShipmentTracker;
