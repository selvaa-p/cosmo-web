// src/app/components/Vision.jsx
import React, { useState, useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Star, Navigation, Compass, Gauge, RotateCw, Globe, Orbit } from 'lucide-react';

export default function Vision() {
  // Ref for the section to detect when it's in view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  // State for which concept is currently in focus
  const [activeConcept, setActiveConcept] = useState(null);
  
  // Reset active concept when user leaves the section
  useEffect(() => {
    if (!isInView) {
      setActiveConcept(null);
    }
  }, [isInView]);
  
  // Handle concept selection
  const handleConceptClick = (concept) => {
    setActiveConcept(concept === activeConcept ? null : concept);
  };

  // Animation variants for text reveal
  const textContainerVariants = {
    hidden: { opacity: 0.2 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.3,
      }
    }
  };
  
  const wordVariants = {
    hidden: { opacity: 0.2 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Split text into words for animation
  const renderAnimatedText = (text) => {
    return text.split(' ').map((word, i) => (
      <motion.span 
        key={i} 
        variants={wordVariants}
        className="inline-block mr-1"
      >
        {word}{' '}
      </motion.span>
    ));
  };

  // Concept definitions with their details
  const concepts = [
    {
      id: 'cosmo',
      title: 'Cosmo',
      description: '"Cosmo" evokes a sense of vastness and universal scope, symbolizing our expansive vision and ability to think beyond conventional boundaries in technology.',
      mainIcon: <Globe className="w-12 h-12" />,
      secondaryIcons: [
        { icon: <Star className="w-8 h-8" />, label: 'Boundless Innovation' },
        { icon: <Orbit className="w-8 h-8" />, label: 'Universal Perspective' },
        { icon: <Globe className="w-8 h-8" />, label: 'Limitless Possibilities' }
      ]
    },
    {
      id: 'hentor',
      title: 'Hentor',
      description: '"Hentor" represents a guiding force, navigating the complex IT landscape with expertise and industry knowledge.',
      mainIcon: <Compass className="w-12 h-12" />,
      secondaryIcons: [
        { icon: <Navigation className="w-8 h-8" />, label: 'Expert Guidance' },
        { icon: <Compass className="w-8 h-8" />, label: 'Strategic Direction' },
        { icon: <Star className="w-8 h-8" />, label: 'Industry Leadership' }
      ]
    },
    {
      id: 'torque',
      title: 'Torque',
      description: '"Torque" embodies the driving force we bring to solving technical challenges with precision and power.',
      mainIcon: <RotateCw className="w-12 h-12" />,
      secondaryIcons: [
        { icon: <Gauge className="w-8 h-8" />, label: 'Performance Driven' },
        { icon: <RotateCw className="w-8 h-8" />, label: 'Transformation Power' },
        { icon: <Compass className="w-8 h-8" />, label: 'Technical Momentum' }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 md:px-20 bg-background text-text min-h-screen flex items-center"
    >
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-custom-red mb-8">Our Vision</h2>
          
          <motion.p 
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-xl text-text max-w-4xl mx-auto leading-relaxed"
          >
            {renderAnimatedText('"Cosmo Hentorq" represents our commitment to expansive thinking and powerful solutions. We navigate the complex IT landscape with expertise, driving transformative change through innovative technology.')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {concepts.map((concept) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0, delay: 0 }}
              whileHover={{ scale: 1.10 }}
              className={`bg-white rounded-xl shadow-lg p-8 cursor-pointer transition-all duration-300 ${
                activeConcept === concept.id ? 'ring-4 ring-custom-red' : ''
              }`}
              onClick={() => handleConceptClick(concept.id)}
            >
              <div className="flex justify-center mb-4 text-custom-red">
                {concept.mainIcon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-custom-red">{concept.title}</h3>
              <motion.div
                variants={textContainerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-text mb-6"
              >
                {renderAnimatedText(concept.description)}
              </motion.div>
              
              {activeConcept === concept.id && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 grid grid-cols-3 gap-3"
                >
                  {concept.secondaryIcons.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="text-custom-red mb-2">{item.icon}</div>
                      <p className="text-xs font-medium">{item.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg italic text-gray-600">
            "Our vision transcends conventional IT solutions, creating technology ecosystems that empower businesses to reach their fullest potential."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
