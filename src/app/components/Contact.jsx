// src\app\components\Contact.jsx
"use client";
import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa';
export default function Contact() {
  useEffect(() => {
    // Fix the animation issue by using direct class manipulation
    const animateElements = () => {
      const infoSection = document.getElementById('contact-info');
      const formSection = document.getElementById('contact-form');
      
      // Add a slight delay to make animation more visible
      setTimeout(() => {
        if (infoSection) infoSection.classList.remove('opacity-0', 'translate-y-8');
        if (formSection) formSection.classList.remove('opacity-0', 'translate-y-8');
      }, 300);
    };

    // Run animation after component is mounted
    animateElements();
  }, []);

  // Lighter shade of #fec07a - a soft peachy orange
  const lighterShade = "#fed5a8";

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-background to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 md:w-80 h-40 md:h-80 bg-red-100 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-custom-red font-medium text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mt-2 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-custom-red mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Contact Info Section */}
          <div 
            id="contact-info" 
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-700 opacity-0 translate-y-8 h-full flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-text mb-6 border-b pb-4">Our Information</h3>
              <p className="text-text mb-8 text-base md:text-lg">Have a project in mind? We're ready to bring your vision to life. Contact us directly or fill out the form.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4 shadow-md transform transition-all duration-300 hover:scale-110 flex-shrink-0">
                    <FaMapMarkerAlt className="text-custom-red text-lg" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-text mb-1">Our Location</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      250, Malleeswari nagar, Madambakkam, <br />
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4 shadow-md transform transition-all duration-300 hover:scale-110 flex-shrink-0">
                    <FaPhoneAlt className="text-custom-red text-lg" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-text mb-1">Call Us</h4>
                    <p className="text-gray-600 text-sm md:text-base">+91 7358404072</p>
                    <p className="text-gray-600 text-sm md:text-base mt-1">Monday-Friday, 9AM-5PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4 shadow-md transform transition-all duration-300 hover:scale-110 flex-shrink-0">
                    <FaEnvelope className="text-custom-red text-lg" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-text mb-1">Email Us</h4>
                    <p className="text-gray-600 text-sm md:text-base">cosmohentorq@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Integration - Adjusted size */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg h-48">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.6772568767753!2d80.14605726776591!3d12.901580158347322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ed69b420a69%3A0x985a2239b20fdc!2s251B%2C%20Bhuvaneshwari%20Nagar%2C%20Padamavathy%20Nagar%2C%20Yeswanth%20Nagar%2C%20Madambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600073!5e0!3m2!1sen!2sin!4v1711038407044!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form Section - Adjusted layout */}
          <div 
            id="contact-form" 
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-700 opacity-0 translate-y-8 delay-300 h-full flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-bold text-text mb-6 border-b pb-4">Send us a message</h3>
            <form className="flex flex-col justify-between h-full">
              {/* Form inputs with adjusted layout */}
              <div className="space-y-4 flex-grow">
                {/* Full-width name input */}
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red/50 transition-all text-text placeholder-gray-500" 
                    placeholder="Your Name" 
                    id="name"
                  />
                </div>
                
                {/* Full-width email input */}
                <div className="relative">
                  <input 
                    type="email" 
                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red/50 transition-all text-text placeholder-gray-500" 
                    placeholder="Your Email" 
                    id="email"
                  />
                </div>
                
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red/50 transition-all text-text placeholder-gray-500" 
                    placeholder="Subject" 
                    id="subject"
                  />
                </div>
                
                {/* Reduced height textarea */}
                <div className="relative">
                  <textarea 
                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red/50 transition-all text-text placeholder-gray-500" 
                    placeholder="Your Message"
                    rows="12"
                    id="message"
                  ></textarea>
                </div>
              </div>
              
              {/* Submit button with lighter shade highlight on hover */}
              <div className="mt-4">
                <button 
                  type="submit" 
                  className="bg-submit text-white px-6 py-3 md:px-8 md:py-4 font-medium uppercase tracking-wider flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-secondary hover:shadow-lg transform hover:-translate-y-1"
                  style={{ 
                    boxShadow: '0 4px 14px rgba(254, 192, 122, 0.3)',
                    background: 'linear-gradient(135deg,rgb(111, 39, 65) 0%, #570120 100%)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = `linear-gradient(135deg,rgb(149, 67, 97) 0%,rgb(111, 56, 76) 100%)`}
                  onMouseOut={(e) => e.currentTarget.style.background = `linear-gradient(135deg,rgb(161, 86, 113) 0%,rgb(89, 5, 36) 100%)`}
                >
                  Send Message <FaArrowRight className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

