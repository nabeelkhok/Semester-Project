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

/*// Home Page Components
import HomeSlideshow from './Views/Home/HomeSlideShow';
import HomeFeatures from './Views/Home/HomeFeatures';
import HomeInfoSection from './Views/Home/HomeInfoSection';
import HomeCallToAction from './Views/Home/HomeCallToAction';
import HomeTestimonials from './Views/Home/HomeTestimonials';

// About Page Components
import AboutHeroSection from './Views/about/AboutHeroSection';
import AboutOverview from './Views/about/AboutOverview';
import AboutStatsCounter from './Views/about/AboutStatsCounter';
import AboutTestimonials from './Views/about/AboutTestimonials';
import AboutCallToAction from './Views/about/AboutCallToAction';
import AboutPartners from './Views/about/AboutPartners';
import AboutMissionVision from './Views/about/AboutMissionVision';
import AboutTeam from './Views/about/AboutTeam';

// Contact Page Components
import ContactForm from './Views/contact/ContactForm';

// Tracking Page Components
import TrackingSection from './Views/tracking/TrackingSection';
import TrackingResult from './Views/tracking/TrackingResult';*/

function App() {
    return (
        <>
        <Router>
            <Navbar/>
            <AboutCallToAction/>
            <AboutHeroSection/>
            <AboutMissionVision/>
            <AboutOverview/>
            <AboutPartners/>
            <AboutStatsCounter/>
            <AboutTeam/>
            <AboutTestimonials/>
            <ContactForm/>
            
            
            <Footer/>

        </Router>

        </>
    );
}

export default App;
