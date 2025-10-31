import { ArrowRight, Bus, Car, Clock, Info } from 'lucide-react'; // Added 'Info'
import { TourPackage } from '../data/packages';
// import pht from '../public/packages/1-1.jpg';
interface TourCardProps {
  package: TourPackage;
  onBookNow: () => void;
}

// A small helper component for the vehicle icons
const VehicleIcon = ({ type }: { type: string }) => {
  if (type === 'Van') {
    return <Bus className="w-3 h-3 text-yellow-400" />;
  }
  // Default to Car icon
  return <Car className="w-3 h-3 text-yellow-400" />;
};

export default function TourCard({ package: pkg, onBookNow }: TourCardProps) {
  return (
    <div className="flex flex-col bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2 group h-full">
      {/* --- Image & Badges --- */}
      <div className="relative w-full h-52">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
            <Clock className="w-3 h-3 text-yellow-400" />
            {pkg.days} {pkg.days > 1 ? 'Days' : 'Day'}
          </span>
          {pkg.vehicles.map((v) => (
            <span
              key={v}
              className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full"
            >
              <VehicleIcon type={v} />
              {v}
            </span>
          ))}
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
          {pkg.title}
        </h3>
        <p className="text-sm text-slate-400 mb-3 font-medium">
          {pkg.subtitle}
        </p>

        {/* Description as bullet points */}
        <div className="text-sm text-slate-300 space-y-1 mb-5">
          {pkg.description.split('•').map(
            (item, index) =>
              item.trim() && (
                <div key={index} className="flex gap-2">
                  <span className="text-yellow-500 opacity-80"> • </span>
                  <span>{item.trim()}</span>
                </div>
              )
          )}
        </div>

        {/* Spacer to push button to bottom */}
        <div className="flex-grow"></div>

        {/* --- View More Button (NEW) --- */}
        <a
          href="https://www.gbtourstravels.com/packages"
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer"
          className="w-full bg-slate-700 hover:bg-slate-600 text-slate-100 font-bold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 mb-3"
        >
          <Info className="w-4 h-4" />
          View More
        </a>

        {/* --- Book Now Button --- */}
        <button
          onClick={onBookNow}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
        >
          Book Now
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}