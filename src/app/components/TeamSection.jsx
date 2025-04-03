// src/app/components/TeamSection.jsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css';

// Team member data
const teamMembers = [
    {
      id: 1,
      name: "Hariharan M",
      role: "CEO",
      description: "Create strong rules for following regulations while inspiring and guiding others to build a team-focused, creative, and responsible work culture.",
      image: "/assets/hari.jpg"
    },
    {
      id: 2,
      name: "Udhaya Kumar",
      role: "Co-founder & Secretary",
      description: "Assist the CEO in creating and executing strategies, applying technical skills and market knowledge, while handling the technical elements of client projects for smooth execution and success.",
      image: "/assets/udhaya.jpg"
    },
    {
      id: 3,
      name: "Srinivasan G",
      role: "COO",
      description: "Overseeing operations to drive efficiency and growth by managing daily activities in production, procurement, logistics, and facilities for effective business execution.",
      image: "/assets/srinivasan.jpg"
    },
    {
      id: 4,
      name: "LEO",
      role: "Tech Head Lead Executive",
      description: "Leading a diverse team to create and launch advanced software solutions, while offering technical guidance, mentorship, and promoting a culture of teamwork, innovation, and ongoing learning.",
      image: "/assets/leo.jpg"
    },
    {
      id: 5,
      name: "Roshan",
      role: "CIO & Head of Information Security",
      description: "Set and carry out IT strategies that match business goals, managing the design, setup, and upkeep of strong IT systems to ensure they are scalable, reliable, and secure.",
      image: "/assets/roshan.jpg"
    },
    {
      id: 6,
      name: "Dinesh Kumar J S",
      role: "CFO",
      description: "Oversee financial activities like budgeting, forecasting, and reporting to enhance profits and increase shareholder value, while implementing financial plans and capital distribution that support long-term growth goals.",
      image: "/assets/dinesh.jpg"
    },
    {
      id: 7,
      name: "Sudharsan",
      role: "Product Executive",
      description: "Managing the product process from idea to launch, ensuring it meets market demands and customer needs, while setting priorities and strategies based on research and feedback for success.",
      image: "/assets/sudha.jpg"
    },
    {
      id: 8,
      name: "Bhavithra",
      role: "Cumulative Administrative Point Executive",
      description: "Develop and carry out plans to improve administrative operations, while tracking their effectiveness and making adjustments for ongoing improvement and value.",
      image: "/assets/bhavi.jpg"
    }
];

export default function TeamSection() {
  // State variables
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [autoRotatePaused, setAutoRotatePaused] = useState(false);
  const autoRotateIntervalRef = useRef(null);

  // Preload images
  useEffect(() => {
    let isMounted = true;
    
    const preloadImages = async () => {
      try {
        const imagePromises = teamMembers.map(member => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = member.image;
            img.onload = resolve;
            img.onerror = () => {
              console.warn(`Failed to load image: ${member.image}`);
              resolve();
            };
          });
        });
        
        await Promise.all(imagePromises);
        if (isMounted) {
          setImagesLoaded(true);
        }
      } catch (error) {
        console.error("Error during image preloading:", error);
        if (isMounted) {
          setImagesLoaded(true);
        }
      }
    };
    
    preloadImages();
    return () => { isMounted = false; };
  }, []);

  // Auto-rotation functionality
  useEffect(() => {
    if (!imagesLoaded || autoRotatePaused) return;
    
    const startAutoRotate = () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
      
      autoRotateIntervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
      }, 6000);
    };
    
    startAutoRotate();
    
    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
        autoRotateIntervalRef.current = null;
      }
    };
  }, [imagesLoaded, autoRotatePaused]);

  // Handle member selection
  const handleMemberChange = (newIndex) => {
    if (newIndex === activeIndex) return;
    
    setActiveIndex(newIndex);
    
    // Reset the auto-rotation timer
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
      
      autoRotateIntervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
      }, 6000);
    }
  };

  // Loading state
  if (!imagesLoaded) {
    return (
      <section className="py-16 md:py-24 relative overflow-hidden bg-background min-h-[600px] flex flex-col items-center justify-center">
        <div className="text-center mb-8 z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-custom-red mb-4">Meet Our Experts</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-text">Veins of CIPL</h3>
        </div>
        <div className="flex justify-center items-center h-40">
          <div data-testid="loading-spinner" className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  return (
    <section
      role="region"
      aria-labelledby="team-section-title"
      className="py-16 md:py-24 relative overflow-hidden bg-background"
    >
      {/* Background decorative gradient blurs */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title with animation */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <h2 id="team-section-title" className="text-4xl md:text-5xl font-bold text-custom-red mb-4">Meet Our Experts</h2>
            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-primary to-secondary absolute -bottom-1 left-0"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              aria-hidden="true"
            ></motion.div>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-text mt-4">Veins of CIPL</h3>
        </motion.div>

        {/* Main Content Grid (Image + Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            className="relative flex justify-center items-center mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onMouseEnter={() => setAutoRotatePaused(true)}
            onMouseLeave={() => setAutoRotatePaused(false)}
            onTouchStart={() => setAutoRotatePaused(true)}
            onTouchEnd={() => setAutoRotatePaused(false)}
          >
            {/* Central Circle with Border */}
              {/* Active Member Image with clean transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-2 border-custom-red relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={teamMembers[activeIndex].image} 
                    alt={teamMembers[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            
          </motion.div>

          {/* Text Content Section */}
          <div className="relative text-center lg:text-left mt-8 sm:mt-10 lg:mt-0 px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-3 md:space-y-4"
              >
                {/* Role Badge */}
                <div className="inline-block rounded-full px-4 py-1 sm:px-5 sm:py-1.5 bg-gradient-to-r from-primary to-secondary text-white text-xs sm:text-sm font-medium shadow">
                  {teamMembers[activeIndex].role}
                </div>
                {/* Member Name */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
                  {teamMembers[activeIndex].name}
                </h3>
                {/* Member Description */}
                <p className="text-base sm:text-lg text-text/80 max-w-lg mx-auto lg:mx-0">
                  {teamMembers[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 mt-12 sm:mt-16 md:mt-20" role="tablist" aria-label="Team members">
          {teamMembers.map((member, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`team-member-panel-${member.id}`}
              className={`relative w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                activeIndex === index
                ? 'bg-gradient-to-r from-primary to-secondary scale-125 shadow-md'
                : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
              onClick={() => handleMemberChange(index)}
              aria-label={`View ${member.name}`}
            >
              {activeIndex === index && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-sm"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}