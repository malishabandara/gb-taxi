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
  const [isAirportService, setIsAirportService] = useState(false);
  // These are now general-purpose
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBooking = () => {
    // Validation updated to include new fields for all bookings
    if (!startDate || !endDate) {
      setErrorMessage(
        ' Please select both start and end dates before booking.'
      );
      return;
    }

    if (!pickupLocation || !dropoffLocation) {
      setErrorMessage(
        'Please fill in both "From" and "To" locations.'
      );
      return;
    }

    setErrorMessage('');

    const airportServiceMessage = isAirportService
      ? '\nService: Airport Service'
      : '';

    // Updated message to include From/To for everyone
    const message = `Taxi Service Booking Request\n
Hi! I'd like to book the ${vehicle.name}.\n
From: ${pickupLocation}
To: ${dropoffLocation}
Start Date: ${startDate}
End Date: ${endDate}
Capacity: ${vehicle.capacity} Passengers${airportServiceMessage}`;

    const whatsappUrl = `https://wa.me/94720532077?text=${encodeURIComponent(
      message
    )}`;
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
        <div className="md:w-7/12 p-4 md:p-6 flex flex-col overflow-y-auto flex-1 min-h-0">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white pr-8">
              {vehicle.name}
            </h2>
            <div className="flex items-center space-x-4 mt-2 text-sm text-slate-300">
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1.5 text-yellow-400" />{' '}
                {vehicle.capacity} Seats
              </span>
              <span className="flex items-center">
                <Gauge className="w-4 h-4 mr-1.5 text-yellow-400" />{' '}
                {vehicle.transmission}
              </span>
              <span className="flex items-center">
                <Wind className="w-4 h-4 mr-1.5 text-yellow-400" />{' '}
                {vehicle.ac ? 'A/C' : 'Non A/C'}
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
                <span
                  key={index}
                  className="bg-slate-700 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full"
                >
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
            {/* --- UPDATED GRID --- */}
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-700 border border-slate-600 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-700 border border-slate-600 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition"
                  min={startDate || new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* --- MOVED "FROM" AND "TO" INPUTS HERE --- */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  From
                </label>
                <input
                  type="text"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="Your location"
                  className="w-full px-3 py-2 text-sm bg-slate-700 border border-slate-600 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  To
                </label>
                <input
                  type="text"
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  placeholder="Your destination"
                  className="w-full px-3 py-2 text-sm bg-slate-700 border border-slate-600 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition"
                />
              </div>
            </div>
            {/* --- END OF GRID --- */}

            {/* --- CLEANED UP AIRPORT SERVICE TOGGLE --- */}
            <div className="bg-slate-700 rounded-lg p-3 my-4">
              <label
                htmlFor="airport-service"
                className="flex justify-between items-center cursor-pointer"
              >
                <div>
                  <div className="font-medium text-white">
                    Special: Airport Service
                  </div>
                  <div className="text-xs text-slate-400">
                    Toggle on for airport pickup or drop-off.
                  </div>
                </div>

                {/* --- The Toggle Switch --- */}
                <div className="relative">
                  <input
                    type="checkbox"
                    id="airport-service"
                    className="sr-only peer"
                    checked={isAirportService}
                    onChange={(e) => setIsAirportService(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-slate-600 rounded-full peer-focus:ring-2 peer-focus:ring-yellow-500/50 peer-checked:bg-yellow-500 transition-colors"></div>
                  <div className="absolute top-0.5 left-[2px] w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-full"></div>
                </div>
              </label>

              {/* Removed conditional inputs from here */}
            </div>
            {/* --- END OF AIRPORT SERVICE SECTION --- */}

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