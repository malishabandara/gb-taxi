import { AnimatePresence, motion, Variants } from 'framer-motion'; // ✅ 1. Import Variants
import { Bus, Car } from 'lucide-react';
import { useState } from 'react';
import VehicleCard from '../components/VehicleCard';
import VehicleModal from '../components/VehicleModal';
import { Vehicle, vehicles } from '../data/mockData';
import taxi3 from '../public/taxi3.jpg';

export default function TaxiServices() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [filter, setFilter] = useState<'car' | 'van'>('car');

  const filteredVehicles = vehicles.filter(
    (vehicle) => vehicle.category === filter
  );

  // ✅ 2. Explicitly type the constant as Variants
  const cardVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };
  return (
    <div className="bg-slate-900">
      {/* Section 1: Image Banner Header (no change) */}
      <section
        className="relative pt-40 pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${taxi3})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Premium Fleet</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Select your perfect ride from our premium collection of vehicles,
            tailored for your comfort and style.
          </p>
        </div>
      </section>

      {/* Section 3: Filter Menu (no change) */}
      <section className="py-8 bg-slate-900 sticky top-0 z-20">
        <div className="container mx-auto px-6 flex justify-center items-center space-x-2 md:space-x-4">
          {/* Car Button */}
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
          {/* Van Button */}
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
          {/* ✅ 3. Convert grid to motion.div and add 'layout' prop
                 This makes the grid container smoothly animate its height. */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* ✅ 4. Wrap the list with AnimatePresence
                   This handles the exit animations when items are filtered out. */}
            <AnimatePresence>
              {filteredVehicles.map((vehicle) => (
                // ✅ 5. Wrap the card in a motion.div for enter/exit
                <motion.div
                  key={vehicle.id} // The key MUST be on this motion component
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  layout // This animates the card's position smoothly
                >
                  <VehicleCard
                    vehicle={vehicle}
                    onClick={() => setSelectedVehicle(vehicle)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Call to Action (no change) */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="bg-slate-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Our team is here 24/7 to help you select the perfect vehicle for
              your journey.
            </p>
            <a
              href="https://wa.me/94771234567" // Note: Remember to use a real number
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-green-500/20 transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-3"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Modal - This remains outside the main flow (no change) */}
      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>
  );
}