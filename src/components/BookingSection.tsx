import React, { useMemo, useState } from 'react';
// Make sure this path to your mockData is correct
import { Vehicle, vehicles } from '../data/mockData';

// --- TYPE DEFINITIONS ---
export interface BookingFormData {
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  dropoffLocation: string;
  transferType: 'One Way' | 'Round Trip';
  adults: number;
  children: number;
}

// --- THE SINGLE COMPONENT ---
export const BookingSection = () => {
  // --- STATE MANAGEMENT ---
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    pickupDate: '',
    pickupTime: '',
    pickupLocation: '',
    dropoffLocation: '',
    transferType: 'One Way',
    adults: 1,
    children: 0,
  });
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [errors, setErrors] = useState({
    pickupLocation: '',
    dropoffLocation: '',
  });
  const [filter, setFilter] = useState<'all' | 'car' | 'van'>('all');
  
  // --- NEW STATE FOR AIRPORT TOGGLE ---
  const [isAirportService, setIsAirportService] = useState(false);

  // --- NAVIGATION FUNCTIONS ---
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const goToStep = (stepNumber: number) => {
    // Only allow going back to completed steps
    if (stepNumber < step) {
      setStep(stepNumber);
    }
  };

  // --- FORM LOGIC (from Step 1) ---
  const updateFormData = (data: Partial<BookingFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({
      [name]:
        name === 'adults' || name === 'children' ? parseInt(value) : value,
    });
  };

  // --- NEW HANDLER FOR AIRPORT TOGGLE ---
  const handleAirportToggle = () => {
    const newStatus = !isAirportService;
    setIsAirportService(newStatus);
    if (newStatus) {
      // Pre-fill the pickup location
      updateFormData({ pickupLocation: 'Bandaranaike International Airport' });
      // Clear any errors on that field
      setErrors((prev) => ({ ...prev, pickupLocation: '' }));
    } else {
      // Clear the pickup location only if it was the default airport text
      if (formData.pickupLocation === 'Bandaranaike International Airport') {
        updateFormData({ pickupLocation: '' });
      }
    }
  };


  const handleNextStep1 = () => {
    let hasErrors = false;
    const newErrors = { pickupLocation: '', dropoffLocation: '' };

    if (formData.pickupLocation.trim() === '') {
      newErrors.pickupLocation = 'Pickup location is required.';
      hasErrors = true;
    }
    if (formData.dropoffLocation.trim() === '') {
      newErrors.dropoffLocation = 'Drop-off location is required.';
      hasErrors = true;
    }

    setErrors(newErrors);
    if (!hasErrors) {
      nextStep();
    }
  };

  // --- VEHICLE LOGIC (from Step 2) ---
  const totalPassengers = formData.adults + formData.children;
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      const maxCapacity = parseInt(v.capacity.split('-').pop() || '0');
      if (maxCapacity < totalPassengers) {
        return false;
      }
      if (filter === 'all') {
        return true;
      }
      return v.category === filter;
    });
  }, [totalPassengers, filter]);

  // --- WHATSAPP LOGIC (from Step 3) ---
  // Updated with your number
  const WHATSAPP_NUMBER = "94720532077";

  const generateWhatsAppMessage = () => {
    const message = `
*New Taxi Booking Request*

--- *Ride Details* ---
*Pickup:* ${formData.pickupLocation}
*Drop-off:* ${formData.dropoffLocation}
*Date:* ${formData.pickupDate || 'Not specified'}
*Time:* ${formData.pickupTime || 'Not specified'}
*Type:* ${formData.transferType}

--- *Passenger Details* ---
*Adults:* ${formData.adults}
*Children:* ${formData.children}

--- *Vehicle Choice* ---
*Vehicle:* ${selectedVehicle?.name || 'Not selected'}
*Category:* ${selectedVehicle?.category || 'N/A'}

Please confirm availability and price.
    `;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message.trim()
    )}`;
  };

  // --- SUB-RENDER FUNCTIONS (To keep JSX clean) ---

  const renderStepIndicator = () => {
    const steps = [
      { num: 1, title: 'Ride Details' },
      { num: 2, title: 'Choose Vehicle' },
      { num: 3, title: 'Contact' },
    ];

    return (
      <nav className="flex items-center justify-between border-b pb-4">
        {steps.map((stepItem, index) => {
          const isActive = step === stepItem.num;
          const isCompleted = step > stepItem.num;

          return (
            <React.Fragment key={stepItem.num}>
              <button
                onClick={() => goToStep(stepItem.num)}
                disabled={!isCompleted}
                className="flex flex-col items-center cursor-pointer disabled:cursor-not-allowed group"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                    ${isActive ? 'bg-orange-500 text-white' : ''}
                    ${
                      isCompleted
                        ? 'bg-green-500 text-white group-hover:bg-green-600'
                        : ''
                    }
                    ${
                      !isActive && !isCompleted
                        ? 'bg-gray-200 text-gray-500'
                        : ''
                    }
                  `}
                >
                  {isCompleted ? '✓' : stepItem.num}
                </div>
                <span
                  className={`mt-2 text-xs md:text-sm font-semibold ${
                    isActive ? 'text-orange-500' : 'text-gray-600'
                  } ${isCompleted ? 'group-hover:text-black' : ''}`}
                >
                  {stepItem.title}
                </span>
              </button>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </nav>
    );
  };

  const renderCurrentStep = () => {
    switch (step) {
      // --- JSX for Step 1 ---
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Ride Details
            </h3>
            
            {/* --- NEW AIRPORT TOGGLE SECTION --- */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center">
              <div>
                <label
                  className="font-semibold text-gray-800"
                  id="airport-toggle-label"
                >
                  Special: Airport Pickup
                </label>
                <p className="text-sm text-gray-600">
                  Toggle on to set pickup to International Air Port Katunayaka.
                </p>
              </div>
              <button
                type="button"
                onClick={handleAirportToggle}
                className={`${
                  isAirportService ? 'bg-orange-500' : 'bg-gray-300'
                } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2`}
                role="switch"
                aria-checked={isAirportService}
                aria-labelledby="airport-toggle-label"
              >
                <span
                  aria-hidden="true"
                  className={`${
                    isAirportService ? 'translate-x-5' : 'translate-x-0'
                  } inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                />
              </button>
            </div>
            {/* --- END OF NEW SECTION --- */}

            <div className="space-y-4">
              <div className="form-group">
                <label
                  htmlFor="pickupLocation"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  id="pickupLocation"
                  placeholder="Enter a location"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  // Disable if airport service is on
                  disabled={isAirportService} 
                  className={`w-full p-3 border rounded-md ${
                    errors.pickupLocation ? 'border-red-500' : 'border-gray-300'
                  } ${isAirportService ? 'bg-gray-100' : ''}`}
                />
                {errors.pickupLocation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.pickupLocation}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label
                  htmlFor="dropoffLocation"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Drop-off Location
                </label>
                <input
                  type="text"
                  name="dropoffLocation"
                  id="dropoffLocation"
                  placeholder="Enter a location"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.dropoffLocation
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />
                {errors.dropoffLocation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.dropoffLocation}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label
                  htmlFor="pickupDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Pickup Date
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  id="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  min={new Date().toISOString().split('T')[0]} // Prevent past dates
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="pickupTime"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Pickup Time
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  id="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="form-group">
                <label
                  htmlFor="transferType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Transfer Type
                </label>
                <select
                  name="transferType"
                  id="transferType"
                  value={formData.transferType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md bg-white"
                >
                  <option>One Way</option>
                  <option>Round Trip</option>
                </select>
              </div>
              <div className="form-group">
                <label
                  htmlFor="adults"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Adults
                </label>
                <input
                  type="number"
                  name="adults"
                  id="adults"
                  min="1"
                  value={formData.adults}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="children"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Children
                </label>
                <input
                  type="number"
                  name="children"
                  id="children"
                  min="0"
                  value={formData.children}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={handleNextStep1}
                className="bg-orange-500 text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors"
              >
                Choose a Vehicle &rarr;
              </button>
            </div>
          </div>
        );

      // --- JSX for Step 2 ---
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Choose a Vehicle ({totalPassengers}{' '}
              {totalPassengers > 1 ? 'Passengers' : 'Passenger'})
            </h3>
            <div className="flex space-x-2 border-b border-gray-200 pb-2">
              {(['all', 'car', 'van'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`capitalize py-2 px-4 rounded-md text-sm font-semibold transition-colors
                    ${
                      filter === cat
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {cat}s
                </button>
              ))}
            </div>
            {filteredVehicles.length === 0 ? (
              <p className="text-center text-gray-600 p-4 border rounded-md bg-gray-50">
                No vehicles available for {totalPassengers} passengers{' '}
                {filter !== 'all' ? `in the '${filter}' category` : ''}. Please
                adjust passenger count or change the filter.
              </p>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {filteredVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    onClick={() => setSelectedVehicle(vehicle)}
                    className={`flex flex-col md:flex-row items-center border rounded-lg p-4 cursor-pointer transition-all
                      ${
                        selectedVehicle?.id === vehicle.id
                          ? 'border-orange-500 border-2 shadow-lg scale-[1.01]'
                          : 'border-gray-200 hover:shadow-md'
                      }
                    `}
                  >
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-32 h-20 object-contain rounded-md mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="font-bold text-lg">{vehicle.name}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {vehicle.description}
                      </p>
                      <div className="flex justify-center md:justify-start gap-4 mt-2 text-sm text-gray-500">
                        <span>Max: {vehicle.capacity} </span>
                        <span className="font-medium">
                          {vehicle.ac ? 'A/C' : 'Non A/C'}
                        </span>
                        <span>{vehicle.transmission}</span>
                      </div>
                    </div>
                    <div className="md:ml-4 mt-4 md:mt-0 text-center">
                      <p className="font-bold text-lg text-orange-600">
                        {vehicle.payment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-between pt-4 border-t">
              <button
                onClick={prevStep}
                className="bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-md hover:bg-gray-400 transition-colors"
              >
                &larr; Back
              </button>
              <button
                onClick={nextStep}
                disabled={!selectedVehicle}
                className="bg-orange-500 text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Confirm Details &rarr;
              </button>
            </div>
          </div>
        );

      // --- JSX for Step 3 ---
      case 3:
        if (!selectedVehicle) {
          return (
            <div className="text-center p-4">
              <p className="text-red-600 font-semibold">
                No vehicle selected.
              </p>
              <button
                onClick={prevStep}
                className="mt-2 text-orange-500 hover:underline font-medium"
              >
                &larr; Go back and choose a vehicle
              </button>
            </div>
          );
        }
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Booking Summary
            </h3>
            <div className="p-4 border rounded-md bg-gray-50 space-y-3">
              <div>
                <strong className="text-gray-700 text-sm">From:</strong>
                <p className="text-lg font-medium">
                  {formData.pickupLocation}
                </p>
              </div>
              <div>
                <strong className="text-gray-700 text-sm">To:</strong>
                <p className="text-lg font-medium">
                  {formData.dropoffLocation}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                <div>
                  <strong className="text-gray-700 text-sm">
                    Date & Time:
                  </strong>
                  <p>
                    {formData.pickupDate || 'ASAP'} at{' '}
                    {formData.pickupTime || 'N/A'}
                  </p>
                </div>
                <div>
                  <strong className="text-gray-700 text-sm">
                    Passengers:
                  </strong>
                  <p>
                    {formData.adults} Adults, {formData.children} Children
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t">
                <strong className="text-gray-700 text-sm">Vehicle:</strong>
                <p className="text-xl font-semibold text-orange-600">
                  {selectedVehicle.name}
                </p>
                <p className="text-sm font-medium">
                  {selectedVehicle.payment}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Click the button below to send your booking request directly to us
              via WhatsApp. We will confirm your booking shortly.
            </p>
            <div className="flex items-center justify-between pt-4 border-t">
              <button
                onClick={prevStep}
                className="bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-md hover:bg-gray-400 transition-colors"
              >
                &larr; Back
              </button>
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.451-4.437-9.887-9.888-9.888-5.451 0-9.887 4.436-9.889 9.888.001 2.263.657 4.287 1.942 6.082l-.349 1.26h.002l-1.127 4.089 4.161-1.087z" />
                </svg>
                Send via WhatsApp
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderSummary = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 h-full">
        {step === 1 && (
          <>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Your Route
            </h4>
            <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center text-gray-500">
              <p className="font-medium">Map Placeholder</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="text-sm text-gray-600 block">
                  Total Distance
                </span>
                <span className="text-xl font-bold">0 km</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="text-sm text-gray-600 block">Total Time</span>
                <span className="text-xl font-bold">0 h 0 m</span>
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Your Ride
            </h4>
            <div className="space-y-4">
              <div className="border-b pb-2">
                <strong className="text-gray-600 text-sm">From:</strong>
                <p className="font-medium text-gray-900">
                  {formData.pickupLocation || 'Not set'}
                </p>
              </div>
              <div className="border-b pb-2">
                <strong className="text-gray-600 text-sm">To:</strong>
                <p className="font-medium text-gray-900">
                  {formData.dropoffLocation || 'Not set'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong className="text-gray-600 text-sm">
                    Passengers:
                  </strong>
                  <p className="font-medium text-gray-900">
                    {formData.adults} Adults, {formData.children} Children
                  </p>
                </div>
                <div>
                  <strong className="text-gray-600 text-sm">Date:</strong>
                  <p className="font-medium text-gray-900">
                    {formData.pickupDate || 'Not set'}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        {step === 3 && selectedVehicle && (
          <>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Your Vehicle
            </h4>
            <img
              src={selectedVehicle.image}
              alt={selectedVehicle.name}
              className="w-full h-48 object-contain rounded-md mb-4 bg-gray-100 p-2"
            />
            <h5 className="text-2xl font-bold text-gray-900">
              {selectedVehicle.name}
            </h5>
            <p className="text-orange-600 font-semibold text-lg">
              {selectedVehicle.payment}
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-gray-700">
              {selectedVehicle.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  };

  // --- MAIN RENDER ---
  return (
    <section className="bg-yellow-400 p-4 md:p-8 rounded-lg shadow-xl max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
        Book Your Taxi Now
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Get instant quotes and book your Ceylon Taxi service with our easy
        online booking system
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Form Steps */}
        <div className="w-full lg:w-3/5 bg-white rounded-lg shadow-md p-6">
          {renderStepIndicator()}
          <div className="mt-6">{renderCurrentStep()}</div>
        </div>

        {/* Right Column: Summary / Map */}
        <div className="w-full lg:w-2/5">{renderSummary()}</div>
      </div>
    </section>
  );
};