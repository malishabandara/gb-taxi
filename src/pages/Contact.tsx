import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
// It's standard practice to keep images in an `assets` folder inside `src`
import contactImage from "../public/contactus.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    // Use a local Sri Lankan placeholder number
    const whatsappUrl = `https://wa.me/94720532077?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    // 1. This is the main container. It is `relative` so the background can fill it.
    // It has a dark fallback color and controls all padding.
    <div className="relative bg-slate-900 pt-32 pb-20">
      
      {/* 2. The background image and overlay. `absolute` makes it fill the parent div. */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactImage}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        {/* Increased overlay darkness for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 3. All content is now inside a single `relative` container on top of the background. */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Get In Touch</h1>
          <p className="text-xl text-gray-200 drop-shadow-lg max-w-2xl mx-auto">
            We'd love to hear from you. Our team is available 24/7 to answer your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-300 hover:text-yellow-400 transition-colors"><a href="tel:+94771234567">+94 0720532077</a></p>
                  {/* <p className="text-gray-300 hover:text-yellow-400 transition-colors"><a href="tel:+94719876543">+94 (71) 987 6543</a></p> */}
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300 hover:text-yellow-400 transition-colors"><a href="mailto:info@taxigo.com">info@taxigo.com</a></p>
                  <p className="text-gray-300 hover:text-yellow-400 transition-colors"><a href="mailto:support@taxigo.com">support@taxigo.com</a></p>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                  <p className="text-gray-300">No. 25, Temple Road,</p>
                  <p className="text-gray-300">Rikillagaskada, Kandy</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
              <p className="text-gray-300">We are open 24 hours a day, 7 days a week. We're always available for you!</p>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
            {submitted && (
              <div className="bg-green-500 text-white p-4 rounded-lg mb-6 text-center font-semibold">
                Message sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Fields... */}
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition" placeholder="Your name"/>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition" placeholder="your.email@example.com"/>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition" placeholder="+94 77 123 4567"/>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition resize-none" placeholder="Tell us how we can help you..."/>
              </div>
              <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-yellow-500/20 transform hover:scale-105">
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}