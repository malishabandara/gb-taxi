import { motion, Variants } from 'framer-motion';
import {
  Award,
  Briefcase,
  Clock,
  Gauge,
  MapPin,
  Plane,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Added import
import taxi1 from '../public/taxi1.jpg';

// Define animation variants
const heroVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Animate children one by one
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function About() {
  return (
    // ✅ Changed background to slate-900
    <div className="min-h-screen bg-slate-900"> {/* Removed pb-16 */}
      {/* Hero Section */}
      <motion.div
        className="relative h-96 mb-16"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={taxi1}
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">
              About Sri Lanka Taxi Drivers
            </h1>
            <p className="text-2xl">Your Trusted Transportation Partner</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* ✅ Updated text colors for dark bg */}
          <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-lg text-gray-300 mb-4">
            TaxiGo has been serving our community with dedication and excellence.
            What started as a small fleet of vehicles has grown into a
            comprehensive transportation service that thousands of customers rely
            on daily.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Our mission is simple: to provide safe, reliable, and comfortable
            transportation for everyone. We believe that quality service
            shouldn't come at a premium price, which is why we work hard to keep
            our rates competitive while maintaining the highest standards.
          </p>
          <p className="text-lg text-gray-300">
            Every member of our team is committed to making your journey as
            pleasant as possible. From our professional drivers to our customer
            service staff, we're here to ensure you reach your destination safely
            and on time.
          </p>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ✅ Re-styled cards to match Home page */}
          <motion.div
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2"
            variants={itemVariants}
          >
            <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-yellow-500" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">5+</h3>
            <p className="text-slate-400">Years of Excellence</p>
          </motion.div>

          <motion.div
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2"
            variants={itemVariants}
          >
            <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-yellow-500" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">50K+</h3>
            <p className="text-slate-400">Happy Customers</p>
          </motion.div>

          <motion.div
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2"
            variants={itemVariants}
          >
            <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10 text-yellow-500" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
            <p className="text-slate-400">Available Service</p>
          </motion.div>

          <motion.div
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2"
            variants={itemVariants}
          >
            <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-10 h-10 text-yellow-500" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
            <p className="text-slate-400">Professional Drivers</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Airport Services Section */}
      {/* ✅ Changed bg to slate-800 for contrast, like Home page booking section */}
      <motion.section
        className="py-20 bg-slate-800 mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Airport Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Reliable and comfortable airport transfers to make your journey
              stress-free
            </p>
          </div>
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ✅ Re-styled cards to match Home page "Why Choose" cards */}
            <motion.div
              className="group bg-slate-700 p-8 rounded-2xl border border-slate-600 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plane className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Airport Pickup
              </h3>
              <p className="text-slate-400">
                Prompt and reliable pickup service from all major airports. Your
                driver will be waiting for you.
              </p>
            </motion.div>

            <motion.div
              className="group bg-slate-700 p-8 rounded-2xl border border-slate-600 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Airport Drop-off
              </h3>
              <p className="text-slate-400">
                Get to the airport on time, every time. We monitor your flight to
                ensure timely service.
              </p>
            </motion.div>

            <motion.div
              className="group bg-slate-700 p-8 rounded-2xl border border-slate-600 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Extra Luggage Space
              </h3>
              <p className="text-slate-400">
                All our airport vehicles come with ample luggage space for your
                comfort and convenience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-20 bg-slate-900"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us? {/* ✅ Updated Text */}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the best airport taxi service with our focus on
              comfort, safety, and on-time arrivals.
            </p>
          </div>
          {/* ✅ This grid now perfectly matches the "Why Choose" section on Home.js */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                24/7 Service
              </h3>
              <p className="text-slate-400">
                We're always available — day or night — whenever you need a ride.
              </p>
            </motion.div>

            <motion.div
              className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Safe & Secure
              </h3>
              <p className="text-slate-400">
                Your safety is our top priority from pickup to drop-off.
              </p>
            </motion.div>

            <motion.div
              className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plane className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Airport Transfers
              </h3>
              <p className="text-slate-400">
                Enjoy stress-free, on-time airport rides with comfort and
                convenience.
              </p>
            </motion.div>

            <motion.div
              className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gauge className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Punctuality Guaranteed
              </h3>
              <p className="text-slate-400">
                Count on us to get you there on time, every time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ✅ NEW: Call to Action Section (before footer) */}
      <motion.section
        className="py-20 bg-slate-700" // Use slate-800 for color contrast
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Ride With Us?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the safety, comfort, and reliability that sets TaxiGo
              apart. Book your next journey today.
            </p>
            <Link
              to="/taxi-services" // Or change this to your booking/contact page
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-yellow-500/20 transform hover:scale-105"
            >
              Book Your Ride Now
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}