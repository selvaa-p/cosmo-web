// src/app/components/TeamSection.jsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

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

// The Team Section component
export default function TeamSection() {
  // State variables
  const [isMobile, setIsMobile] = useState(false); // Tracks if the screen is mobile-sized
  const [activeIndex, setActiveIndex] = useState(0); // Index of the currently displayed team member
  const [isHovering, setIsHovering] = useState(false); // Tracks if the user is hovering over the image area (to pause rotation)
  const [imagesLoaded, setImagesLoaded] = useState(false); // Tracks if all team member images have preloaded
  const autoRotateIntervalRef = useRef(null); // Stores the interval ID for auto-rotation

  // Effect for preloading images on component mount
  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates if component unmounts during async operations
    const preloadImages = async () => {
      try {
        // Create promises for each image load
        const imagePromises = teamMembers.map(member => {
          return new Promise((resolve) => { // Changed reject to resolve to avoid Promise.all failure on single image error
            const img = new window.Image();
            img.src = member.image;
            img.onload = resolve; // Resolve promise on successful load
            img.onerror = (err) => {
              console.warn(`Failed to load image: ${member.image}`, err);
              resolve(); // Resolve even on error to allow the component to render
            };
          });
        });
        // Wait for all image load attempts to complete
        await Promise.all(imagePromises);
        if (isMounted) {
            setImagesLoaded(true); // Set images loaded state if component is still mounted
        }
      } catch (error) {
        console.error("Error during image preloading:", error);
        if (isMounted) {
            setImagesLoaded(true); // Set loaded state even on error to show the rest of the component
        }
      }
    };
    preloadImages(); // Initiate preloading

    // Cleanup function to set isMounted flag to false when component unmounts
    return () => { isMounted = false; };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Effect for handling window resize to update mobile state
  useEffect(() => {
    // Check if window object is available (client-side)
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768); // Update mobile state based on window width
      checkMobile(); // Initial check
      window.addEventListener('resize', checkMobile); // Add resize listener
      // Cleanup function to remove resize listener
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // --- Auto-rotation functionality ---
  // Function to start the auto-rotation interval
  const startAutoRotate = () => {
    stopAutoRotate(); // Clear any existing interval first
    autoRotateIntervalRef.current = setInterval(() => {
      // Update activeIndex, cycling back to 0 from the last member
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 6000); // Rotate every 6 seconds
  };

  // Function to stop the auto-rotation interval
  const stopAutoRotate = () => {
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current); // Clear the interval using its ID
      autoRotateIntervalRef.current = null; // Reset the ref
    }
  };

  // Effect to manage starting/stopping auto-rotation based on hover state and image loading
  useEffect(() => {
    if (!imagesLoaded) return; // Don't start rotation until images are loaded

    if (!isHovering) {
      startAutoRotate(); // Start rotation if not hovering
    } else {
      stopAutoRotate(); // Stop rotation if hovering
    }

    // Cleanup function to stop rotation when component unmounts or dependencies change
    return () => stopAutoRotate();

  }, [isHovering, imagesLoaded]); // Rerun this effect if hover state or imagesLoaded state changes

  // --- Handle manual member selection ---
  const handleMemberChange = (newIndex) => {
    // Prevent unnecessary state updates and timer restarts if clicking the already active member
    if (newIndex === activeIndex) return;

    setActiveIndex(newIndex); // Update the active member index

    // Explicitly stop and restart the timer on manual selection
    // This ensures the 6-second countdown restarts from the newly selected member
    stopAutoRotate();
    startAutoRotate();
  };

  // --- Calculate position for small avatar circles ---
  const getCirclePosition = (index, total) => {
    // Increased radius to push avatars further from the center (Fix for visual clutter)
    const radius = isMobile ? 40 : 45; // Use different radius for mobile/desktop
    // Calculate angle for the avatar position (start at the top: -Math.PI / 2)
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    // Convert polar coordinates (radius, angle) to Cartesian percentages (x, y) relative to center (50, 50)
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { x, y };
  };

  // --- Loading State ---
  // Display a loading indicator while images are preloading
  if (!imagesLoaded) {
    return (
      <section className="py-16 md:py-24 relative overflow-hidden bg-background min-h-[600px] flex flex-col items-center justify-center">
        {/* Show title even during load */}
        <div className="text-center mb-8 sm:mb-12 z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-custom-red mb-4">Meet Our Experts</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-text">Veins of CIPL</h3>
        </div>
        {/* Loading spinner */}
        <div className="flex justify-center items-center h-40">
          <div data-testid="loading-spinner" className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  // --- Loaded State ---
  // Render the main component content once images are loaded
  return (
    <section
      role="region" // Accessibility: Defines the section for screen readers
      aria-labelledby="team-section-title" // Links the section to its title
      className="py-16 md:py-24 relative overflow-hidden bg-background" // Styling for padding, position, overflow, background
    >
      {/* Background decorative gradient blurs */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none"> {/* z-0 to be behind content, opacity for subtlety */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary rounded-full filter blur-3xl"></div>
       </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"> {/* Max width, centering, padding, relative position for z-index */}
        {/* Section Title with animation */}
        <motion.div
          className="text-center mb-16 md:mb-20" // Centering and margin
          initial={{ opacity: 0, y: 30 }} // Initial animation state (invisible, slightly down)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible, original position when in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing and easing
          viewport={{ once: true }} // Trigger animation only once when it enters viewport
        >
           <div className="relative inline-block"> {/* Container for title and underline */}
             <h2 id="team-section-title" className="text-4xl md:text-5xl font-bold text-custom-red mb-4">Meet Our Experts</h2> {/* The title text, linked by ID for aria-labelledby */}
             {/* Animated underline */}
             <motion.div
               className="h-1 bg-gradient-to-r from-primary to-secondary absolute -bottom-1 left-0" // Styling for the underline
               initial={{ width: "0%" }} // Start with zero width
               whileInView={{ width: "100%" }} // Animate to full width when in view
               transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Animation timing, easing, and delay
               viewport={{ once: true }} // Trigger only once
               aria-hidden="true" // Hide decorative element from screen readers
             ></motion.div>
           </div>
           <h3 className="text-xl md:text-2xl font-semibold text-text mt-4">Veins of CIPL</h3> {/* Subtitle */}
         </motion.div>

        {/* Main Content Grid (Image Circle + Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center"> {/* Responsive grid layout */}
          {/* Image Circle Section */}
          <motion.div
            className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto" // Responsive max width, centered, maintains square aspect ratio
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} // Entrance animation
            // Event handlers to pause auto-rotation on interaction
            onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            onTouchStart={() => setIsHovering(true)} onTouchEnd={() => setIsHovering(false)}
          >
            {/* Outer Border Ring */}
            <div className="w-full h-full rounded-full border-2 border-highlight absolute top-0 left-0 pointer-events-none"></div> {/* Decorative border */}

            {/* Central Active Member Image with transition */}
             <motion.div
                key={activeIndex} // Key change triggers transition when activeIndex updates
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-2 border-primary shadow-lg overflow-hidden z-10" // Positioning, sizing, styling
                initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease: "easeInOut" }} // Fade-in transition for image change
             >
                <img src={teamMembers[activeIndex].image} alt={teamMembers[activeIndex].name} className="w-full h-full object-cover" loading="lazy" /> {/* The image itself */}
             </motion.div>

            {/* Small Member Avatars orbiting the center */}
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true"> {/* Container for orbiting avatars */}
              {teamMembers.map((member, index) => {
                // --- FIX: Skip rendering the small avatar if it's the currently active member ---
                if (index === activeIndex) {
                  return null; // Prevents the duplicate image overlay issue
                }
                // --- END FIX ---

                const { x, y } = getCirclePosition(index, teamMembers.length); // Calculate position
                return (
                  // Use button for semantics and accessibility
                  <motion.button
                    key={member.id}
                    aria-label={`View ${member.name}`} // Screen reader label
                    // Styling for the small avatar buttons (no active state needed here anymore)
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden absolute cursor-pointer border-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background border-transparent hover:border-secondary`}
                    style={{ left: `${x}%`, top: `${y}%`, transform: `translate(-50%, -50%)` }} // Apply calculated position
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} // Staggered entrance animation
                    onClick={() => handleMemberChange(index)} // Click handler to change active member
                  >
                    <img src={member.image} alt="" className="w-full h-full object-cover pointer-events-none" /> {/* Image inside button, alt="" as button has label */}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Text Content Section (Role, Name, Description) */}
          <div className="relative text-center lg:text-left mt-12 sm:mt-0"> {/* Alignment and margin adjustments */}
             <AnimatePresence mode="wait"> {/* Handles enter/exit animations smoothly */}
                {/* Animate content changes based on activeIndex */}
                <motion.div
                    key={activeIndex} // Key change triggers animation
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} // Fade and slide animation
                    transition={{ duration: 0.4, ease: "easeInOut" }} // Animation timing
                    className="space-y-3 md:space-y-4" // Spacing between text elements
                >
                    {/* Role Badge with uniform gradient */}
                    <div className={`inline-block rounded-full px-4 py-1 sm:px-5 sm:py-1.5 bg-gradient-to-r from-primary to-secondary text-white text-xs sm:text-sm font-medium shadow`} >
                         {teamMembers[activeIndex].role}
                    </div>
                    {/* Member Name */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text" >
                        {teamMembers[activeIndex].name}
                    </h3>
                    {/* Member Description */}
                    <p className="text-base sm:text-lg text-text/80 max-w-lg mx-auto lg:mx-0" > {/* Slightly muted text color, max width */}
                        {teamMembers[activeIndex].description}
                    </p>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots (Modernized) */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mt-16 md:mt-24" role="tablist" aria-label="Team members">
          {teamMembers.map((member, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`team-member-panel-${member.id}`}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${          
                  activeIndex === index
                  ? 'bg-gradient-to-r from-primary to-secondary scale-125 shadow-md' // Gradient and shadow for active
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600' // Darker hover for dark mode
              }`}
              onClick={() => handleMemberChange(index)}
              aria-label={`View ${member.name}`}
            >
              {/* Optional: Subtle inner glow for active dot */}
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