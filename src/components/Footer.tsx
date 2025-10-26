import { ChevronRight, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
import logo from '../public/logo.png'; // Make sure you have a logo file at this path

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Description */}
          <div>
  <div className="flex items-center mb-4">
    <div className="bg-yellow-400 p-2 rounded-full mr-3">
      <img src={logo} alt="TaxiGo Logo" className="h-10 w-auto" />
    </div>
    <span className="text-xl font-bold text-white">Sri Lankan<span className='text-yellow-500 px-1'>Taxi Drivers</span></span>
  </div>
  <p className="text-slate-400 leading-relaxed">
    Your trusted partner for safe, reliable, and comfortable taxi and airport transfer services. Available 24/7 for all your travel needs.
  </p>
</div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center text-slate-300 hover:text-yellow-400 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/taxi-services" className="flex items-center text-slate-300 hover:text-yellow-400 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2" /> Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/airport-services" className="flex items-center text-slate-300 hover:text-yellow-400 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2" /> Airport Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-slate-300 hover:text-yellow-400 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-yellow-400 flex-shrink-0" />
                <span>123 Main Street, Colombo 00100, Sri Lanka</span>
              </div>
              <a href="tel:+94771234567" className="flex items-center hover:text-yellow-400 transition-colors">
                <Phone className="w-5 h-5 mr-3 text-yellow-400" />
                <span>+94 720532077</span>
              </a>
              <a href="mailto:info@taxigo.com" className="flex items-center hover:text-yellow-400 transition-colors">
                <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                <span>info@taxigo.com</span>
              </a>
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h4>
            <p className="text-slate-400 mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-yellow-500 text-white hover:text-slate-900 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              {/* Add other social media icons here in the same format */}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()}  NextGen Web Works. All rights reserved. +94 78 723 9394.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}