import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import TaxiServices from './pages/TaxiServices';
import TourPackages from './pages/TourPackages';
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/taxi-services" element={<TaxiServices />} />
            {/* <Route path="/airport-services" element={<AirportServices />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tours" element={<TourPackages/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
