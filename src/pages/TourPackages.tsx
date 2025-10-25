import { useState } from "react";
import TourBookingModal from "../components/TourBooking";
import TourCard from "../components/TourCard";
import { packages, TourPackage } from "../data/packages"; // Import data

export default function TourPackages() {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null); // Handler to open the modal

  const handleBookNow = (pkg: TourPackage) => {
    setSelectedTour(pkg);
  }; // Handler to close the modal

  const handleCloseModal = () => {
    setSelectedTour(null);
  };

  return (
    <div className="bg-slate-900 p-4 md:p-8 pt-20 min-h-screen">
      {" "}
      
      <div className="text-center mt-20 max-w-2xl mx-auto mb-12">
        {" "}
        {/* Centered text block * <h1 className="text-5xl font-bold text-white mb-4">Packages</h1> {/* Larger title */}
     
        <p className="text-lg text-gray-300">
         Choose from curated packages ranging from quick gateways to
          extended grand tours.
        </p>
        {" "}
      </div>
     {/* Grid for Tour Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-14 justify-items-center mx-auto max-w-screen-xl px-4">
        {" "}
        {packages.map((pkg) => (
          <TourCard
            key={pkg.id}
            package={pkg}
            onBookNow={() => handleBookNow(pkg)}
          />
        ))}
      </div>
      {selectedTour && (
        <TourBookingModal tour={selectedTour} onClose={handleCloseModal} />
      )}
    </div>
  );
}
