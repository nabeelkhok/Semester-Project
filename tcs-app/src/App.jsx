import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

// Lazy load Home Components
const HomeSlideshow = lazy(() => import('./Views/Home/HomeSlideshow'));
const HomeInfoSection = lazy(() => import('./Views/Home/HomeInfoSection'));
const HomeFeatures = lazy(() => import('./Views/Home/HomeFeatures'));
const HomeTestimonials = lazy(() => import('./Views/Home/HomeTestimonials'));
const HomeCallToAction = lazy(() => import('./Views/Home/HomeCallToAction'));

// Lazy load About Components
const AboutOverview = lazy(() => import('./Views/about/AboutOverview'));
const AboutMissionVision = lazy(() => import('./Views/about/AboutMissionVision'));
const AboutStatsCounter = lazy(() => import('./Views/about/AboutStatsCounter'));
const AboutTeam = lazy(() => import('./Views/about/AboutTeam'));
const AboutTestimonials = lazy(() => import('./Views/about/AboutTestimonials'));
const AboutPartners = lazy(() => import('./Views/about/AboutPartners'));
const AboutCallToAction = lazy(() => import('./Views/about/AboutCallToAction'));

// Lazy load Tracking Components
const TrackingPage = lazy(() => import('./Views/tracking/TrackingPage'));

// Lazy load Contact Component
const ContactForm = lazy(() => import('./Views/contact/ContactForm'));

// Loading Spinner Component
function LoadingSpinner() {
  return (
    <div className="w-full py-20 flex justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

// 404 Not Found component
function NotFoundPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen p-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 text-red-600">404</h1>
        <p className="text-xl mb-6">Oops! The page you're looking for does not exist.</p>
        <a href="/" className="text-blue-600 underline hover:text-blue-800">Go back home</a>
      </div>
    </section>
  );
}

// Home Page Component
function HomePage() {
  return (
    <>
      <HomeSlideshow />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <HomeInfoSection />
        <HomeFeatures />
        <HomeTestimonials />
        <HomeCallToAction />
      </div>
    </>
  );
}

// About Page Component
function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      <AboutOverview />
      <AboutMissionVision />
      <AboutStatsCounter />
      <AboutTeam />
      <AboutTestimonials />
      <AboutPartners />
      <AboutCallToAction />
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ContactForm />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full bg-white text-gray-900">
        <Navbar />

        <main className="flex-1 w-full">
          <div className="w-full mx-auto">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/tracking" element={<TrackingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;