import { CalendarDays, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../public/logo.png";
export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if user has scrolled more than 20 pixels
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items for mapping
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/taxi-services', label: 'Airport and Taxi Services' },
    {path:'/tours',label :'Tour Packages'},

    // { path: '/airport-services', label: 'Airport Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  // ✨ Helper function to check for active path
  const isActive = (path: string) => location.pathname === path;

  // ✨ Dynamically change navbar classes based on scroll position
  const navClasses = isScrolled
    ? 'bg-gray-900/95 backdrop-blur-sm shadow-xl'
    : 'bg-black/20 backdrop-blur-md';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
            <div className="bg-gradient-to-r bg-yellow-400  rounded-lg shadow-md">
              <img src={logo} className='w-14 h-10 object-cover p-2 '></img>
            </div>
            <span className="text-2xl font-bold text-white drop-shadow-lg">Sri Lankan Taxi Drivers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-yellow-400 text-gray-900 shadow-md'
                    : `text-white hover:bg-white/20`
                }`}
              >
                {item.label}
              </Link>
            ))}
             <Link
              to="/taxi-services"
              className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2 rounded-full transition-colors shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex flex-row items-center">
              <Link
              to="/taxi-services"
              onClick={() => setIsMenuOpen(false)}
              className="  rounded-full py-2 px-2 text-gray-900 font-bold   "
            >
             <CalendarDays size={24} className='text-white'></CalendarDays>
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white py-2  pl-1 ">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ✨ Mobile Menu with dynamic styling */}
      {isMenuOpen && (
        <div className={`md:hidden absolute w-full transition-all duration-300 ${isScrolled ? 'bg-gray-900/95' : 'bg-gray-800/95'}`}>
          <div className="flex flex-col items-center space-y-2 px-4 pt-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-center py-3 rounded-lg font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'bg-yellow-400 text-gray-900'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {item.label}
              </Link>
            ))}
          
          </div>
        </div>
      )}
    </nav>
  );
}