import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Layout components
import Header from './components/Header';
import Footer from './components/Footer';

// Page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import Safety from './pages/Safety';
import TrackShipment from './pages/TrackShipment';
import RequestQuote from './pages/RequestQuote';
import Contact from './pages/Contact';

// Scroll to top helper on page change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Scroll Helper */}
        <ScrollToTop />

        {/* Navigation Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/track" element={<TrackShipment />} />
            <Route path="/quote" element={<RequestQuote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
