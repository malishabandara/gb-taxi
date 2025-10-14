import { Users } from 'lucide-react';
import { Vehicle } from '../data/mockData';

interface VehicleCardProps {
  vehicle: Vehicle;
  onClick: () => void;
}

export default function VehicleCard({ vehicle, onClick }: VehicleCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden cursor-pointer transition-all duration-300 hover:border-yellow-500 flex md:flex-col md:hover:-translate-y-2 h-48 md:h-96"
    >
      {/* --- IMAGE SECTION --- */}
      <div className="relative w-2/5 md:w-full md:h-56 flex-shrink-0">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="absolute inset-0 w-full h-full object-contain md:transition-transform md:duration-300 md:group-hover:scale-110"
        />
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="w-3/5 md:w-full p-4 md:p-6 flex flex-col">
        {/* Title */}
        <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3 line-clamp-1">
          {vehicle.name}
        </h3>
        
        {/* Description */}
        <p className="text-xs md:text-sm text-slate-400 mb-3 md:mb-5 h-12 md:h-20 line-clamp-2 md:line-clamp-3">
          {vehicle.description}
        </p>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Passenger Info */}
        <div className="flex items-center space-x-2 text-slate-300 mb-4 md:mb-5">
          <Users className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0" />
          <span className="font-medium text-xs md:text-sm">{vehicle.capacity} Passengers</span>
        </div>

        {/* Button */}
        <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-2 md:py-2.5 rounded-lg transition-colors duration-300 text-sm md:text-base">
          View Details
        </button>
      </div>
    </div>
  );
}
