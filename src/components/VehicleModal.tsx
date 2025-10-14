import { Calendar, Gauge, Users, Wind, X } from 'lucide-react';
import { useState } from 'react';
import { Vehicle } from '../data/mockData';

interface VehicleModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

export default function VehicleModal({ vehicle, onClose }: VehicleModalProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBooking = () => {
    if (!startDate || !endDate) {
      setErrorMessage('⚠️ Please select both start and end dates before booking.');
      return;
    }

    setErrorMessage('');
    const message = `Taxi Service Booking Request\n\nHi! I'd like to book the ${vehicle.name}.\n\nStart Date: ${startDate}\nEnd Date: ${endDate}\nCapacity: ${vehicle.capacity} Passengers`;
    const whatsappUrl = `https://wa.me/94720532077?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center z-50 p-4 pt-12 sm:pt-20">
      <div className="relative bg-slate-800 rounded-2xl w-full sm:w-11/12 md:max-w-4xl flex flex-col md:flex-row max-h-[90vh] text-white shadow-2xl overflow-hidden">
        
        {/* --- Close Button --- */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-slate-900/50 hover:bg-slate-700 p-2 rounded-full z-20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* --- Left Side: Image --- */}
        <div className="md:w-5/12 flex-shrink-0">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-48 md:h-full object-contain rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          />
        </div>

        {/* --- Right Side: Content --- */}
        <div className="md:w-7/12 p-4 md:p-6 flex flex-col overflow-y-auto">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white pr-8">{vehicle.name}</h2>
            <div className="flex items-center space-x-4 mt-2 text-sm text-slate-300">
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1.5 text-yellow-400" /> {vehicle.capacity} Seats
              </span>
              <span className="flex items-center">
                <Gauge className="w-4 h-4 mr-1.5 text-yellow-400" /> {vehicle.transmission}
              </span>
              <span className="flex items-center">
                <Wind className="w-4 h-4 mr-1.5 text-yellow-400" /> {vehicle.ac ? 'A/C' : 'Non A/C'}
              </span>
            </div>
          </div>

          <p className="text-slate-400 my-4 text-sm line-clamp-3 md:line-clamp-none">
            {vehicle.description}
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-white mb-2">Features</h3>
            <div className="flex flex-wrap gap-2">
              {vehicle.features.map((feature, index) => (
                <span key={index} className="bg-slate-700 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Booking Section */}
          <div className="border-t border-slate-700 mt-auto pt-4">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-yellow-400" />
              Book Your Ride
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-700 border border-slate-600 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-700 border border-slate-600 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition"
                  min={startDate || new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {errorMessage && (
              <p className="text-red-400 text-sm mb-3 bg-red-500/10 border border-red-400/30 rounded-lg p-2">
                {errorMessage}
              </p>
            )}

            <button
              onClick={handleBooking}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-2.5 rounded-lg transition-colors"
            >
              Book via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
