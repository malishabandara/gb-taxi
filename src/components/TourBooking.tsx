import {
  Car,
  Clock,
  Sparkles,
  X
} from 'lucide-react';
import { useState } from 'react';
import { TourPackage } from '../data/packages'; // Import your TourPackage type

interface TourBookingModalProps {
  tour: TourPackage;
  onClose: () => void;
}

// Helper component for vehicle icons (from your TourCard)
const VehicleIcon = ({ type }: { type: string }) => {
  if (type === 'Van') {
    return <Sparkles className="w-4 h-4 text-yellow-400" />;
  }
  return <Car className="w-4 h-4 text-yellow-400" />;
};

export default function TourBookingModal({
  tour,
  onClose,
}: TourBookingModalProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travelers, setTravelers] = useState('1'); // Default to 1
  const [contact, setContact] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBooking = () => {
    // Validation
    if (!startDate || !endDate || !travelers || !contact) {
      setErrorMessage('⚠️ Please fill in all fields to make a booking.');
      return;
    }

    setErrorMessage('');

    // --- WHATSAPP MESSAGE (same as your original) ---
    const message = `Tour Package Booking Request
--------------------------------
Package: ${tour.title}
ID: ${tour.id}
Start Date: ${startDate}
End Date: ${endDate}
Number of Travelers: ${travelers}
Contact Number: ${contact}
--------------------------------
Hi! I'd like to get more information about this booking.`;

    const whatsappUrl = `https://wa.me/94720532077?text=${encodeURIComponent(
      message
    )}`;
    // 0720532077
    window.open(whatsappUrl, '_blank');
  };

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {/* FIX 1: Modal Container is now scrollable on mobile (overflow-y-auto) 
        and resets to hidden on desktop (md:overflow-hidden).
      */}
      <div className="relative bg-slate-800 rounded-2xl w-full max-w-4xl text-white shadow-2xl overflow-y-auto md:overflow-hidden max-h-[90vh]">
        {/* --- Close Button --- */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-900/50 hover:bg-slate-700 p-2 rounded-full z-20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* --- Two-Column Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* FIX 2: Image is visible on mobile (h-52) and full height on desktop.
          */}
          <div className="h-52 md:h-full md:col-span-5">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover" // Simplified className
            />
          </div>

          {/* --- RIGHT COLUMN (Content & Form) --- */}
          <div className="col-span-12 md:col-span-7">
            {/* FIX 3: Content area only scrolls on desktop (md:overflow-y-auto).
              On mobile, it expands, letting the parent modal scroll.
            */}
            <div className="p-6 md:p-8 flex flex-col md:overflow-y-auto md:max-h-[90vh]">
              {/* Header */}
              <div className="pr-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  {tour.title}
                </h2>
                <p className="text-sm text-slate-400 mt-1 uppercase font-mono">
                  Package ID: {tour.id}
                </p>
              </div>

              {/* Specs (like your TourCard) */}
              <div className="flex flex-wrap gap-4 mt-4 text-slate-300">
                <span className="flex items-center gap-1.5 text-sm">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  {tour.days} {tour.days > 1 ? 'Days' : 'Day'}
                </span>
                {tour.vehicles.map((v) => (
                  <span
                    key={v}
                    className="flex items-center gap-1.5 text-sm"
                  >
                    <VehicleIcon type={v} />
                    {v}
                  </span>
                ))}
              </div>

              {/* Subtitle / Description */}
              <p className="text-slate-300 mt-4 text-base">
                {tour.subtitle}
              </p>

              {/* Highlights (from tour.description) */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Package Highlights
                </h3>
                <div className="text-sm text-slate-300 space-y-1.5">
                  {tour.description.split('•').map(
                    (item, index) =>
                      item.trim() && (
                        <div key={index} className="flex gap-2">
                          <span className="text-yellow-500 opacity-80">
                            •
                          </span>
                          <span>{item.trim()}</span>
                        </div>
                      )
                  )}
                </div>
              </div>

              {/* --- Booking Section --- */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  Book Your Ride
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Start Date */}
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
                  {/* End Date */}
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
                  {/* Travelers */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      placeholder="e.g., 2"
                      min="1"
                      className="w-full px-3 py-2 text-sm bg-slate-700 border border-slate-600 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition"
                    />
                  </div>
                  {/* Contact Number */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Contact Number
                    </label>
                    <input
                      type="tel"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="e.g., +94..."
                      className="w-full px-3 py-2 text-sm bg-slate-700 border border-slate-600 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <p className="text-red-400 text-sm mb-4 bg-red-500/10 border border-red-400/30 rounded-lg p-3">
                    {errorMessage}
                  </p>
                )}

                <button
                  onClick={handleBooking}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 rounded-lg transition-colors"
                >
                  Book via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}