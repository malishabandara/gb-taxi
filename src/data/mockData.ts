// src/data/mockData.ts

// Image imports for Carousel
import airport from "../public/airport.jpg";
import taxi1 from "../public/taxi1.jpg";
import taxi3 from "../public/taxi3.jpg";

// Image imports for Vehicles
import luxuryCarImage from '../assets/luxury-car.png';
import miniCarImage from '../assets/mini-car.png';
import nanoImage from '../assets/nano car.png';
import sedanImage from '../assets/sedan.png';
import wagonRImage from '../assets/wagon-r.png';
// You can add van images here when you're ready
// import kdhVanImage from '../assets/vehicles/kdh-van.png';
import acVanImage from '../assets/ac van.webp';
import kdhHighRoofImage from '../assets/high roof.webp';
import kdhFlatRoofImage from '../assets/kdh van.webp';
import miniVanImage from '../assets/mini van.png';
import nonAcVanImage from '../assets/nonAC.webp';
export interface Vehicle {
  id: number;
  name: string;
  category: 'car' | 'van'; // ✅ New property for filtering
  type: string;
  capacity: string;
  transmission: 'Auto' | 'Manual';
  ac: boolean;
  payment: string;
  image: string;
  description: string;
  features: string[];
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Nano Car",
    category: 'car', // ✅ Updated
    type: "Adventure",
    capacity: "3",
    transmission: 'Auto',
    ac: true,
    payment: "From LKR 110/km",
    image: nanoImage,
    description: "The perfect ultra-compact car for navigating tight city streets. Economical and surprisingly spacious for short trips.",
    features: ["Air Conditioning", "Compact & Agile", "Fuel Efficient", "Ideal for Solo Travelers"]
  },
  {
    id: 2,
    name: "Mini Car",
    category: 'car', // ✅ Updated
    type: "Adventure",
    capacity: "4",
    transmission: 'Auto',
    ac: true,
    payment: "From LKR 125/km",
    image: miniCarImage,
    description: "A reliable and fuel-efficient choice for daily commutes and budget-friendly travel around town.",
    features: ["Air Conditioning", "Easy to Park", "Low Running Cost", "Comfortable for 4"]
  },
  {
    id: 3,
    name: "Wagon R",
    category: 'car', // ✅ Updated
    type: "Adventure",
    capacity: "4",
    transmission: 'Auto',
    ac: true,
    payment: "From LKR 140/km",
    image: wagonRImage,
    description: "Known for its spacious interior and high roofline, this car is perfect for small families and extra luggage.",
    features: ["Air Conditioning", "Spacious Cabin", "Ample Headroom", "Flexible Seating"]
  },
  {
    id: 4,
    name: "Sedan Car",
    category: 'car', // ✅ Updated
    type: "Airport & City Ride",
    capacity: "4",
    transmission: 'Auto',
    ac: true,
    payment: "From LKR 160/km",
    image: sedanImage,
    description: "A comfortable and stylish option for airport transfers, city tours, and longer journeys with a smooth ride.",
    features: ["Air Conditioning", "Generous Legroom", "Large Trunk Space", "Smooth & Quiet Ride"]
  },
  {
    id: 5,
    name: "Luxury Car",
    category: 'car', // ✅ Updated
    type: "Business & Premium",
    capacity: "4",
    transmission: 'Auto',
    ac: true,
    payment: "From LKR 200/km",
    image: luxuryCarImage,
    description: "Experience superior comfort and modern features. Ideal for business travel, special occasions, or a premium journey.",
    features: ["Climate Control A/C", "Plush Seating", "Hybrid Engine", "Advanced Safety Features"]
  },
   {
    id: 6,
    name: "Mini Van",
    category: 'van',
    type: "Group & Tours",
    capacity: "6-8",
    transmission: 'Manual',
    ac: true,
    payment: "From LKR 180/km",
    image: miniVanImage,
    description: "A compact and economical van, ideal for small groups or families exploring the city and nearby attractions.",
    features: ["Air Conditioning", "Compact Body", "Fuel Efficient", "6-8 Passengers"]
  },
  {
    id: 7,
    name: "Non AC Van",
    category: 'van',
    type: "Budget Group Tours",
    capacity: "10-15",
    transmission: 'Manual',
    ac: false,
    payment: "From LKR 200/km",
    image: nonAcVanImage,
    description: "The most budget-friendly option for large groups. Offers basic, reliable transportation for tours and events.",
    features: ["High Capacity", "Most Economical Choice", "Ample Luggage Space", "Ventilation System"]
  },
  {
    id: 8,
    name: "AC Van",
    category: 'van',
    type: "Group & Tours",
    capacity:"10 -15",
    transmission: 'Manual',
    ac: true,
    payment: "From LKR 230/km",
    image: acVanImage,
    description: "A standard, comfortable choice for large groups needing air-conditioned travel for longer tours and trips.",
    features: ["Air Conditioning", "10-15 Passengers", "Reliable Performance", "Spacious Interior"]
  },
  {
    id: 9,
    name: "KDH Flat Roof",
    category: 'van',
    type: "Comfortable Tours",
    capacity:"10-15",
    transmission: 'Manual',
    ac: true,
    payment: "From LKR 250/km",
    image: kdhFlatRoofImage,
    description: "A popular choice known for its comfort and reliability. Excellent for group tours and airport transfers.",
    features: ["Dual A/C", "Comfortable Seating", "Generous Luggage Space", "Smooth Ride"]
  },
  {
    id: 10,
    name: "KDH High Roof",
    category: 'van',
    type: "Premium Group Travel",
    capacity:"10-15",
    transmission: 'Auto', // Often automatic for premium feel
    ac: true,
    payment: "From LKR 280/km",
    image: kdhHighRoofImage,
    description: "The ultimate in group travel comfort, featuring a high roof for extra space and a more premium interior.",
    features: ["Dual A/C & Line A/C", "Adjustable Luxury Seats", "Extra Headroom", "Entertainment System"]
  }
];

export interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    image: taxi1,
    title: "Reliable Taxi Services",
    subtitle: "Dependable rides available anytime, ensuring your comfort and punctuality."
  },
  {
    id: 2,
    image: airport,
    title: "Airport Taxi Services",
    subtitle: "Swift, on-time airport transfers designed for your convenience and peace of mind."
  },
  {
    id: 3,
    image: taxi3,
    title: "Professional Drivers",
    subtitle: "Driven by experience and courtesy, our drivers make every trip smooth and enjoyable."
  }
];