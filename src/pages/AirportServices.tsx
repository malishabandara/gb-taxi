// src/pages/AirportServices.tsx

import { Bus, Car } from 'lucide-react'; // Icons for the filter buttons
import { useState } from 'react';
import VehicleCard from '../components/VehicleCard';
import { Vehicle, vehicles } from '../data/mockData';
// Import a background image for the header
import AirportVehicleModel from '../components/AirportVehicleModel';
import airportBannerImage from '../public/airport.jpg'; // Using a more relevant image name

export default function AirportServices() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  // 1. State to manage the active filter, defaulting to 'car'
  const [filter, setFilter] = useState<'car' | 'van'>('car');

  // 2. Filter the main vehicles array based on the current state
  const filteredVehicles = vehicles.filter(vehicle => vehicle.category === filter);

  return (
    <div className="bg-slate-900">
      {/* Section 1: Image Banner Header */}
      <section 
        className="relative pt-40 pb-20 bg-cover bg-center" 
        style={{ backgroundImage: `url(${airportBannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Airport Taxi Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Arrive on time and in comfort. Choose from our premium airport taxis for a smooth, stress-free transfer.
          </p>
        </div>
      </section>

      {/* 3. Filter Menu Section */}
      <section className="py-8 bg-slate-900 sticky top-0 z-20">
        <div className="container mx-auto px-6 flex justify-center items-center space-x-2 md:space-x-4">
          {/* Car Filter Button */}
          <button
            onClick={() => setFilter('car')}
            className={`flex items-center space-x-3 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 border-2 ${
              filter === 'car'
                ? 'bg-yellow-500 text-slate-900 border-yellow-500 shadow-lg'
                : 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700 hover:border-slate-600'
            }`}
          >
            <Car className="w-6 h-6" />
            <span>Cars</span>
          </button>
          {/* Van Filter Button */}
          <button
            onClick={() => setFilter('van')}
            className={`flex items-center space-x-3 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 border-2 ${
              filter === 'van'
                ? 'bg-yellow-500 text-slate-900 border-yellow-500 shadow-lg'
                : 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700 hover:border-slate-600'
            }`}
          >
            <Bus className="w-6 h-6" />
            <span>Vans</span>
          </button>
        </div>
      </section>

      {/* Section 4: Vehicle Grid */}
      <section className="pt-8 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 4. Map over the `filteredVehicles` array instead of the full `vehicles` array */}
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onClick={() => setSelectedVehicle(vehicle)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 5: Call to Action */}
      <section className="pb-20">
         <div className="container mx-auto px-6">
           <div className="bg-slate-800 rounded-2xl p-12 text-center">
             <h2 className="text-3xl font-bold text-white mb-4">
               Need Help Choosing?
             </h2>
             <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
               Our team is here 24/7 to help you select the perfect vehicle for your journey.
             </p>
             <a
               href="https://wa.me/94771234567" // Replace with your WhatsApp number
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-green-500/20 transform hover:scale-105"
             >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
               Chat with Us on WhatsApp
             </a>
           </div>
         </div>
      </section>

      {/* Modal - This remains outside the main flow */}
      {selectedVehicle && (
        <AirportVehicleModel
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>
  );
}