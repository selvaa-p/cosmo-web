"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Lottie from 'react-lottie';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    path: "/assets/animation.json", // Path to your animation file
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-white via-amber-50 to-amber-100">
      {/* Background Animation - positioned as an accent rather than covering content */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 pointer-events-none">
        <Lottie 
          options={lottieOptions} 
          isClickToPauseDisabled={true}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -left-24 top-24 w-64 h-64 rounded-full bg-amber-200 opacity-20 blur-3xl"></div>
      <div className="absolute -right-24 bottom-24 w-80 h-80 rounded-full bg-orange-200 opacity-30 blur-3xl"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          {/* Left side - Content */}
          <div className="text-left w-full md:w-1/2 space-y-6">
            <Image 
              src="/assets/logo.png" 
              alt="Company Logo" 
              width={200} 
              height={200} 
              priority={true}
              className="mb-6"
            />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
              Create Something <span className="text-orange-500">Extraordinary</span>
            </h1>
            
            <p className="text-lg md:text-xl text-amber-800 max-w-lg">
              Elevate your digital experience with our innovative solutions designed for the modern world.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-medium text-lg flex items-center group transition-all duration-300 hover:shadow-lg hover:shadow-amber-200"
              >
                Get Started 
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#expertise"
                onClick={(e) => handleSmoothScroll(e, "expertise")}
                className="bg-transparent text-amber-800 border-2 border-amber-400 px-8 py-3 rounded-full font-medium text-lg hover:bg-amber-400 hover:text-amber-900 transition-colors duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
          
          {/* Right side - Visual element */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-20 blur-xl"></div>
              <div className="relative h-full w-full flex items-center justify-center">
                <Lottie 
                  options={lottieOptions} 
                  height="100%"
                  width="100%"
                  isClickToPauseDisabled={true}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-8 h-12 rounded-full border-2 border-amber-600 flex justify-center p-2">
            <div className="w-1 h-3 bg-amber-600 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
