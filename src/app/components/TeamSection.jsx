//src\app\components\TeamSection.jsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const teamMembers = [
  {
    id: 1,
    name: "Hariharan M",
    role: "CEO",
    description: "Create strong rules for following regulations while inspiring and guiding others to build a team-focused, creative, and responsible work culture.",
    color: "from-primary to-secondary",
    image: "/assets/hari.jpg"
  },
  {
    id: 2,
    name: "Udhaya Kumar",
    role: "Co-founder & Secretary",
    description: "Assist the CEO in creating and executing strategies, applying technical skills and market knowledge, while handling the technical elements of client projects for smooth execution and success.",
    color: "from-text to-highlight",
    image: "/assets/udhaya.jpg"
  },
  {
    id: 3,
    name: "Srinivasan G",
    role: "COO",
    description: "Overseeing operations to drive efficiency and growth by managing daily activities in production, procurement, logistics, and facilities for effective business execution.",
    color: "from-secondary to-text",
    image: "/assets/srinivasan.jpg"
  },
  {
    id: 4,
    name: "LEO",
    role: "Tech Head Lead Executive",
    description: "Leading a diverse team to create and launch advanced software solutions, while offering technical guidance, mentorship, and promoting a culture of teamwork, innovation, and ongoing learning.",
    color: "from-highlight to-primary",
    image: "/assets/leo.jpg"
  },
  {
    id: 5,
    name: "Roshan",
    role: "CIO & Head of Information Security",
    description: "Set and carry out IT strategies that match business goals, managing the design, setup, and upkeep of strong IT systems to ensure they are scalable, reliable, and secure.",
    color: "from-text to-secondary",
    image: "/assets/roshan.jpg"
  },
  {
    id: 6,
    name: "Dinesh Kumar J S",
    role: "CFO",
    description: "Oversee financial activities like budgeting, forecasting, and reporting to enhance profits and increase shareholder value, while implementing financial plans and capital distribution that support long-term growth goals.",
    color: "from-secondary to-highlight",
    image: "/assets/dinesh.jpg"
  },
  {
    id: 7,
    name: "Sudharsan",
    role: "Product Executive",
    description: "Managing the product process from idea to launch, ensuring it meets market demands and customer needs, while setting priorities and strategies based on research and feedback for success.",
    color: "from-highlight to-text",
    image: "/assets/sudha.jpg"
  },
  {
    id: 8,
    name: "Bhavithra",
    role: "Cumulative Administrative Point Executive",
    description: "Develop and carry out plans to improve administrative operations, while tracking their effectiveness and making adjustments for ongoing improvement and value.",
    color: "from-text to-primary",
    image: "/assets/bhavi.jpg"
  }
];

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = teamMembers.map(member => {
          return new Promise((resolve, reject) => {
            const img = new window.Image();
            img.src = member.image;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to preload images:", error);
        setImagesLoaded(true);
      }
    };

    preloadImages();

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
  
    if (isHovering) {
      return;
    }
  
    const interval = setInterval(() => {
      handleMemberChange((activeIndex + 1) % teamMembers.length);
    }, 6000);
  
    return () => clearInterval(interval);
  }, [isHovering, activeIndex, imagesLoaded]);
  

  const handleMemberChange = (newIndex) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setActiveIndex(newIndex);
  };

  const getCirclePosition = (index, total) => {
    const radius = isMobile ? 38 : 42;
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { x, y };
  };

  if (!imagesLoaded) {
    return (
      <section className="py-16 md:py-24 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-#CF0404 mb-6">Meet Our Experts</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-text mt-4">Veins of CIPL</h3>
          </div>
          <div className="flex justify-center items-center h-64">
          <div data-testid="loading-spinner" className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-custom-red mb-6">Meet Our Experts</h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-primary to-secondary absolute bottom-0 left-0"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-text mt-4">Veins of CIPL</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full rounded-full border-2 border-highlight absolute"></div>
            <div className="w-4/5 h-4/5 rounded-full border border-highlight absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-2 border-highlight overflow-hidden z-10">
              <img
                src={teamMembers[activeIndex].image}
                alt={teamMembers[activeIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              {teamMembers.map((member, index) => {
                const { x, y } = getCirclePosition(index, teamMembers.length);

                return (
                  <motion.div
                    key={member.id}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden absolute"
                    style={{ left: `${x}%`, top: `${y}%`, transform: `translate(-50%, -50%)` }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    onClick={() => handleMemberChange(index)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onTouchStart={() => setIsHovering(true)}
                    onTouchEnd={() => setIsHovering(false)}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
          <AnimatePresence mode="wait">
  {teamMembers.map((member, index) => (
    activeIndex === index && (
      <motion.div
        key={member.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-4 sm:space-y-4 mt-12 sm:mt-0" /* Added top margin for mobile */
      >
        <div
          className={`inline-block rounded-full sm:w-auto px-3 py-1 sm:px-6 sm:py-2.5 bg-gradient-to-r ${member.color} text-white overflow-hidden text-ellipsis`}
        >
          <span className="text-xs sm:text-sm md:text-base font-medium whitespace-normal break-words">{member.role}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{member.name}</h3>
        <p className="text-text max-w-lg">{member.description}</p>
      </motion.div>
    )
  ))}
</AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-10 sm:mt-16">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 border-highlight transition-all duration-300 ${
                activeIndex === index ? 'bg-custom-red' : 'bg-highlight hover:bg-secondary'
              }`}
              onClick={() => handleMemberChange(index)}
              aria-label={`View team member ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}