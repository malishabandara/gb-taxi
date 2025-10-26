import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import TourBookingModal from '../components/TourBooking';
import TourCard from '../components/TourCard';
import { packages, TourPackage } from '../data/packages'; // Import data
import tourBanner from '../public/tourism.jpg';

export default function TourPackages() {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);

  const handleBookNow = (pkg: TourPackage) => {
    setSelectedTour(pkg);
  };

  const handleCloseModal = () => {
    setSelectedTour(null);
  };

  // 1. Group packages into rows of 4
  const itemsPerRow = 4; // Corresponds to lg:grid-cols-4
  const packagesByRow = [];
  for (let i = 0; i < packages.length; i += itemsPerRow) {
    packagesByRow.push(packages.slice(i, i + itemsPerRow));
  }

  // --- Animation Variants ---
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  // This will stagger the animation of each *row*
  const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // ✅ Stagger each row by 0.3s (was 0.2)
      },
    },
  };

  // This variant animates the *entire row* as one unit
  const rowItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }, // ✅ Duration 0.5s (was 0.4)
    },
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero Banner Section */}
      <motion.section
        className="relative pt-40 pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${tourBanner})` }}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Tour Packages</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Choose from curated packages ranging from quick gateways to extended
            grand tours.
          </p>
        </div>
      </motion.section>

      {/* Animate the Grid Section */}
      <motion.section
        className="py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* 2. This is now a 1-column grid that stacks the rows */}
        <motion.div
          className="grid grid-cols-1 gap-6 justify-items-center mx-auto max-w-screen-xl px-4"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* 3. Map over the `packagesByRow` array */}
          {packagesByRow.map((row, rowIndex) => (
            // This motion.div is the ROW, and it animates
            <motion.div
              key={rowIndex}
              variants={rowItemVariants}
              // This sub-grid contains the 4 cards for the row
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
            >
              {row.map((pkg) => (
                // 4. Add h-full wrapper for fixed height
                <div key={pkg.id} className="h-full">
                  <TourCard
                    package={pkg}
                    onBookNow={() => handleBookNow(pkg)}
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Modal */}
      {selectedTour && (
        <TourBookingModal tour={selectedTour} onClose={handleCloseModal} />
      )}
    </div>
  );
}