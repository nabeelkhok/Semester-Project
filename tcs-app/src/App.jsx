import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import AboutCallToAction from './Views/about/AboutCallToAction';
import AboutHeroSection from './Views/about/AboutHeroSection';
import AboutMissionVision from './Views/about/AboutMissionVision';
import AboutOverview from './Views/about/AboutOverview';
import AboutPartners from './Views/about/AboutPartners';
import AboutStatsCounter from './Views/about/AboutStatsCounter';
import AboutTeam from './Views/about/AboutTeam';
import AboutTestimonials from './Views/about/AboutTestimonials';
import ContactForm from './Views/contact/ContactForm';
// import CustomerInfo from './Views/shipment/CustomerInfo';
// import ShipmentCard from './Views/shipment/ShipmentCard';
// import CardLayout from './Views/shipment/CardLayout';
// import SectionContainer from './Views/shipment/SectionContainer';
// import TrackingPage from './Views/tracking/TrackingPage';
import ShipmentTracker from './Views/shipment/ShipmentTracker';

 //Sample shipment if you need to pass props
// const sampleShipment = {
//   trackingID: "10001",
//   customerName: "Alice Johnson",
//   status: "Pending",
//   estimatedDelivery: "2025-03-25",
//   lastUpdated: "2025-03-18"
// };

const mockShipments = [
    { trackingID: "10001", customerName: "Alice", status: "Pending", estimatedDelivery: "2025-05-07", lastUpdated: "2025-05-01" },
    { trackingID: "10002", customerName: "Bob", status: "In Transit", estimatedDelivery: "2025-05-06", lastUpdated: "2025-05-03" },
    { trackingID: "10003", customerName: "Charlie", status: "Delivered", estimatedDelivery: "2025-05-04", lastUpdated: "2025-05-04" },
  ];

function App() {
  return (
    <Router>
      <Navbar />
      {/* You can use <Routes> with <Route> if you want page-based routing */}
      {/* Example: <Routes><Route path="/tracking" element={<TrackingPage shipment={sampleShipment} />} /></Routes> */}
      <AboutCallToAction />
      <AboutHeroSection />
      <AboutMissionVision />
      <AboutOverview />
      <AboutPartners />
      <AboutStatsCounter />
      <AboutTeam />
      <AboutTestimonials />
      <ContactForm />
       {/* <ShipmentCard />
      <CustomerInfo />
      <CardLayout />
      <SectionContainer />
      <TrackingPage shipment={sampleShipment} />  */}
     <ShipmentTracker
        title="📦 Welcome to QuickShip Tracker"
        initialData={mockShipments}
      >
        <p className="text-gray-600 text-sm text-center mb-4">
          Enter your Tracking ID to check shipment status.
        </p>
      </ShipmentTracker>
      <Footer />
    </Router>
  );
}

export default App;
