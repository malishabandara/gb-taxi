import { Gauge, Users, Wind } from 'lucide-react';
import { Vehicle } from '../data/mockData';

interface VehicleCardProps {
  vehicle: Vehicle;
  onClick: () => void;
}

export default function VehicleCard({ vehicle, onClick }: VehicleCardProps) {
  return (
    <div
      onClick={onClick}
      className=" p-1 md:p-3 group bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden cursor-pointer transition-all duration-300 hover:border-yellow-500 flex md:flex-col md:hover:-translate-y-2 h-56 md:h-full"
    >
      {/* --- IMAGE SECTION --- */}
      <div className="relative w-2/5 md:w-full md:h-48 flex-shrink-0">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="absolute inset-0 w-full h-full object-contain md:transition-transform md:duration-300 md:group-hover:scale-110"
        />
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="w-3/5 md:w-full p-4 md:p-6 flex flex-col">
        {/* Title */}
        <h3 className="text-base md:text-xl font-bold text-white mb-2 line-clamp-1">
          {vehicle.name}
        </h3>

        {/* --- NEW: SPECS BADGES --- */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="flex items-center bg-slate-700 text-slate-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
            <Users className="w-3 h-3 mr-1 text-yellow-400" />
            {vehicle.capacity} Seats
          </span>
          <span className="flex items-center bg-slate-700 text-slate-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
            <Gauge className="w-3 h-3 mr-1 text-yellow-400" />
            {vehicle.transmission}
          </span>
          <span className="flex items-center bg-slate-700 text-slate-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
            <Wind className="w-3 h-3 mr-1 text-yellow-400" />
            {vehicle.ac ? 'A/C' : 'Non A/C'}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-slate-400 mb-4 line-clamp-2 md:line-clamp-3">
          {vehicle.description}
        </p>

        {/* Spacer (Pushes button to bottom) */}
        <div className="flex-grow"></div>

        {/* Button */}
        <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-2 md:py-2.5 rounded-lg transition-colors duration-300 text-sm md:text-base">
          View Details
        </button>
      </div>
    </div>
  );
}