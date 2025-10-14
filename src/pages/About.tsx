import { Award, Clock, ShieldCheck, Star, Target, Users } from 'lucide-react';
import taxi1 from "../public/taxi1.jpg";
export default function About() {
  return (
    <div className="min-h-screen  pb-16">
      <div className="relative h-96 mb-16">
        <img
          src={taxi1}
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">About TaxiGo</h1>
            <p className="text-2xl">Your Trusted Transportation Partner</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4">
            Founded in 2015, TaxiGo has been serving our community with dedication and excellence. What started as a small fleet of vehicles has grown into a comprehensive transportation service that thousands of customers rely on daily.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is simple: to provide safe, reliable, and comfortable transportation for everyone. We believe that quality service shouldn't come at a premium price, which is why we work hard to keep our rates competitive while maintaining the highest standards.
          </p>
          <p className="text-lg text-gray-700">
            Every member of our team is committed to making your journey as pleasant as possible. From our professional drivers to our customer service staff, we're here to ensure you reach your destination safely and on time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
            <p className="text-gray-600">Years of Excellence</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">50K+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
            <p className="text-gray-600">Available Service</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
            <p className="text-gray-600">Professional Drivers</p>
          </div>
        </div>

        <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            These principles guide every decision we make and every ride we provide, ensuring a service you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Safety First */}
          <div className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <div className="bg-slate-700 group-hover:bg-yellow-500 rounded-full p-4 transition-colors duration-300">
                <ShieldCheck className="w-8 h-8 text-yellow-400 group-hover:text-slate-900 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Safety First</h3>
            <p className="text-slate-400">
              Your security and well-being are our top priorities in every journey we undertake.
            </p>
          </div>

          {/* Card 2: Reliability */}
          <div className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <div className="bg-slate-700 group-hover:bg-yellow-500 rounded-full p-4 transition-colors duration-300">
                <Clock className="w-8 h-8 text-yellow-400 group-hover:text-slate-900 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Reliability</h3>
            <p className="text-slate-400">
              We pride ourselves on being on time, every time. You can count on us, no matter the circumstances.
            </p>
          </div>

          {/* Card 3: Excellence */}
          <div className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <div className="bg-slate-700 group-hover:bg-yellow-500 rounded-full p-4 transition-colors duration-300">
                <Star className="w-8 h-8 text-yellow-400 group-hover:text-slate-900 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Excellence</h3>
            <p className="text-slate-400">
              From our vehicles to our drivers, we constantly strive to exceed your expectations with superior service.
            </p>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
}
