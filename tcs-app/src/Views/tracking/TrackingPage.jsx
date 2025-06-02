import React, { useState } from "react";
import ShipmentCard from "../shipment/ShipmentCard";
import CustomerInfo from "../shipment/CustomerInfo";
import CardLayout from "../shipment/CardLayout";
import SectionContainer from "../shipment/SectionContainer";

const TrackingPage = ({ initialShipments = [] }) => {
  const [trackingID, setTrackingID] = useState("");
  const [currentShipment, setCurrentShipment] = useState(null);

  const handleTrack = () => {
    const trimmedID = trackingID.trim().toLowerCase();
    const shipment = initialShipments.find(
      (s) => s.trackingID.toLowerCase() === trimmedID
    );
    if (shipment) {
      setCurrentShipment(shipment);
    } else {
      alert("Tracking ID not found!");
      setCurrentShipment(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <SectionContainer>
        <CardLayout>
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
            Track Your Order
          </h1>
          <input
            type="text"
            placeholder="Enter Tracking ID"
            className="w-full p-2 border rounded mb-4"
            value={trackingID}
            onChange={(e) => setTrackingID(e.target.value)}
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

      {currentShipment && (
        <SectionContainer>
          <CardLayout>
            <CustomerInfo name={currentShipment.customerName} />
            <ShipmentCard
              trackingID={currentShipment.trackingID}
              status={currentShipment.status}
              estimatedDelivery={currentShipment.estimatedDelivery}
              lastUpdated={currentShipment.lastUpdated}
            />
          </CardLayout>
        </SectionContainer>
      )}
    </div>
  );
};

export default TrackingPage;
