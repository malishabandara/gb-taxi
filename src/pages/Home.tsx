import { Clock, Plane, Shield, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BookingSection } from '../components/BookingSection';
import Carousel from '../components/Carousel';
import VehicleCard from '../components/VehicleCard';
import { vehicles } from '../data/mockData';
import taxi1 from "../public/taxi1.jpg";
export default function Home() {
  return (
    <div>
      <Carousel />
<div className="container mx-auto py-12 px-4">
        {/* Add the booking section here */}
        <BookingSection />
      </div>
      <section className="py-20 bg-slate-900">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Why Choose TaxiGo?
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Experience the best airport taxi service with our focus on comfort, safety, and on-time arrivals.
      </p>
    </div>

    {/* Responsive Grid: 2 columns on medium screens, 4 on large screens */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      
      {/* Card 1: 24/7 Service */}
      <div className="bg-slate-800 rounded-2xl p-8 text-center transition-all duration-300 hover:border-yellow-500 border border-transparent hover:-translate-y-2">
        <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock className="w-10 h-10 text-yellow-500" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">24/7 Service</h3>
        <p className="text-slate-400">
          We’re always available — day or night — whenever you need a ride.
        </p>
      </div>

      {/* Card 2: Safe & Secure */}
      <div className="bg-slate-800 rounded-2xl p-8 text-center transition-all duration-300 hover:border-yellow-500 border border-transparent hover:-translate-y-2">
        <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-10 h-10 text-yellow-500" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Safe & Secure</h3>
        <p className="text-slate-400">
          Your safety is our top priority from pickup to drop-off.
        </p>
      </div>

      {/* Card 3: Airport Transfers */}
      <div className="bg-slate-800 rounded-2xl p-8 text-center transition-all duration-300 hover:border-yellow-500 border border-transparent hover:-translate-y-2">
        <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Plane className="w-10 h-10 text-yellow-500" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Airport Transfers</h3>
        <p className="text-slate-400">
          Enjoy stress-free, on-time airport rides with comfort and convenience.
        </p>
      </div>

      {/* Card 4: Punctuality Guaranteed */}
      <div className="bg-slate-800 rounded-2xl p-8 text-center transition-all duration-300 hover:border-yellow-500 border border-transparent hover:-translate-y-2">
        <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Timer className="w-10 h-10 text-yellow-500" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Punctuality Guaranteed</h3>
        <p className="text-slate-400">
          Count on us to get you there on time, every time.
        </p>
      </div>
    </div>

    {/* Call-to-Action */}
    <div className="text-center">
      <h3 className="text-3xl font-bold text-white mb-4">
        Ready for a Smooth Airport Transfer?
      </h3>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        Book your ride now and discover why travelers trust TaxiGo for reliable, on-time airport transportation.
      </p>
      <Link
        to="/airport-services"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-yellow-500/20 transform hover:scale-105"
      >
        Book Your Ride
      </Link>
    </div>
  </div>
</section>

      <section 
      className="relative py-20 md:py-28 bg-cover bg-center" 
      style={{ backgroundImage:`url(${taxi1})`}}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content container */}
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Airport Services
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Reliable and comfortable airport transfers to make your journey stress-free
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Airport Pickup */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              {/* Plane Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Airport Pickup</h3>
            <p className="text-gray-300">
              Prompt and reliable pickup service from all major airports. Your driver will be waiting for you.
            </p>
          </div>

          {/* Card 2: Airport Drop-off */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              {/* MapPin Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Airport Drop-off</h3>
            <p className="text-gray-300">
              Get to the airport on time, every time. We monitor your flight to ensure timely service.
            </p>
          </div>

          {/* Card 3: Extra Luggage Space */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              {/* Luggage Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"></path>
                <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"></path>
                <path d="M10 20h4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Extra Luggage Space</h3>
            <p className="text-gray-300">
              All our airport vehicles come with ample luggage space for your comfort and convenience.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/airport-services"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Learn More About Airport Services
          </Link>
        </div>
      </div>
    </section>


      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Taxi Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse range of vehicles to suit your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.slice(0,3).map((vehicle) => (
              <Link to="/taxi-services" key={vehicle.id}>
                <VehicleCard vehicle={vehicle} onClick={() => {}} />
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/taxi-services"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
