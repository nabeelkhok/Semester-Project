import ShipmentCard from "../shipment/ShipmentCard";
import CustomerInfo from "../shipment/CustomerInfo";
import CardLayout from "../shipment/CardLayout";
import SectionContainer from "../shipment/SectionContainer";

const TrackingPage = ({ shipment }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <SectionContainer>
        <CardLayout>
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Track Your Order</h1>
          <input type="text" placeholder="Enter Tracking ID" className="w-full p-2 border rounded mb-4" />
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Track Order</button>
        </CardLayout>
      </SectionContainer>

      <SectionContainer>
        <CardLayout>
          <CustomerInfo name={shipment.customerName} />
          <ShipmentCard
            trackingID={shipment.trackingID}
            status={shipment.status}
            estimatedDelivery={shipment.estimatedDelivery}
            lastUpdated={shipment.lastUpdated}
          />
        </CardLayout>
      </SectionContainer>
    </div>
  );
};

export default TrackingPage;
