"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { 
  Clock, 
  Bell, 
  Mail, 
  Calendar, 
  Star, 
  AlertCircle
} from "lucide-react";

export default function ComingSoonPage() {
  const notifyRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Set up persistent countdown timer
  useEffect(() => {
    // Check if we have a stored target date in localStorage
    const storedTargetDate = localStorage.getItem('launchTargetDate');
    let targetDate;
    
    if (!storedTargetDate) {
      // If no stored date, set target date to 25 days from now
      targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 25);
      // Store the target date in localStorage for persistence
      localStorage.setItem('launchTargetDate', targetDate.toString());
    } else {
      // Use the stored target date
      targetDate = new Date(storedTargetDate);
    }
    
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      // If past launch date, set all to zero
      if (difference < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    // Update timer immediately
    updateTimer();
    
    // Update timer every second
    const timer = setInterval(updateTimer, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, []);
  
  // Format time value with leading zero if needed
  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const scrollToNotify = () => {
    notifyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="animate-fade-in-down">
          <Link href="/#products" className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-flex items-center group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Products
          </Link>
        </div>

        {/* Hero Section with Coming Soon Animation */}
        <div className="flex flex-col items-center justify-center mb-16 animate-fade-in-up">
          {/* Coming Soon Animation - Centered and Large */}
          <div className="w-full flex justify-center mb-10">
            <div className="relative">
              <h1 className="text-7xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
                COMING SOON
              </h1>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600 animate-[width] scale-x-0 origin-left animate-scale-x"></div>
            </div>
          </div>

          {/* Content Below Animation */}
          <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4 leading-tight">
                NEW PRODUCT
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Developed by <strong className="text-blue-300">Cosmohentorq Innovations Pvt Ltd</strong>. More details will be revealed soon.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="animate-scale-in">
                <div className="rounded-2xl shadow-2xl bg-gradient-to-br from-blue-600/20 to-purple-700/20 p-12 hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center">
                  <Clock className="w-32 h-32 text-blue-400 mb-8" />
                  <div className="text-center">
                    <p className="text-xl text-gray-300 mb-2">Coming Soon</p>
                    <div className="grid grid-cols-4 gap-3 text-center">
                      {[
                        { value: formatTime(timeLeft.days), label: "DAYS" },
                        { value: formatTime(timeLeft.hours), label: "HOURS" },
                        { value: formatTime(timeLeft.minutes), label: "MINS" },
                        { value: formatTime(timeLeft.seconds), label: "SECS" }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-3">
                          <span className="block text-2xl font-bold text-white">{item.value}</span>
                          <span className="text-xs text-gray-400">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add CSS for the scale animation */}
        <style jsx global>{`
          @keyframes scale-x {
            0% {
              transform: scaleX(0);
            }
            100% {
              transform: scaleX(1);
            }
          }
          .animate-scale-x {
            animation: scale-x 2s ease-in-out infinite alternate;
          }
        `}</style>

        {/* Teaser Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Feature 1", 
                description: "More details coming soon"
              },
              {
                icon: AlertCircle,
                title: "Feature 2", 
                description: "More details coming soon"
              },
              {
                icon: Calendar,
                title: "Feature 3", 
                description: "More details coming soon"
              },
              {
                icon: Bell,
                title: "Feature 4", 
                description: "More details coming soon"
              },
              {
                icon: Mail,
                title: "Feature 5", 
                description: "More details coming soon"
              },
              {
                icon: Clock,
                title: "Feature 6", 
                description: "More details coming soon"
              }
            ].map(({ icon: Icon, title, description }, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 p-8 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/30 rounded-full p-3 mr-4">
                    <Icon className="text-blue-400 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-300">{title}</h3>
                </div>
                <p className="text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mystery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Stay Tuned</h2>
          <div className="bg-gray-800/20 rounded-2xl p-10 mb-10 border border-gray-700 shadow-[8px_8px_16px_rgba(59,130,246,0.1),-8px_-8px_16px_rgba(124,58,237,0.1)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-5">Something Exciting Is Coming</h3>
                <p className="text-lg text-gray-300 mb-6">
                  We're working on something new. Details will be revealed soon.
                </p>
                <ul className="text-gray-300 space-y-3">
                  {["Sign up for updates", "Be the first to know", "Early access opportunities"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 mr-2 text-blue-400" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
                <div className="h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center">
                  <p className="text-xl text-blue-300 font-medium">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-10 mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl shadow-2xl border border-blue-800/20">
          <h2 className="text-3xl font-bold mb-5">Be The First To Know</h2>
          <p className="text-xl text-gray-300 mb-8">Join our list of early adopters.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={scrollToNotify} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-colors text-lg shadow-lg">
              Get Notified
            </button>
            <Link href="/#contact" className="inline-block border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-10 rounded-full transition-colors text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}