// src/app/products/julie/page.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function JuliePage() {
  const trackerRef = useRef(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <motion.div 
        data-testid="motion-div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <Link href="/#products" className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Products
        </Link>

        {/* Hero Section with reduced image size and professional background */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="flex flex-col lg:flex-row items-center gap-12 mb-16 relative overflow-hidden rounded-2xl p-8"
          style={{
            background: "linear-gradient(rgba(17, 24, 39, 0.8), rgba(0, 0, 0, 0.9)), url('/assets/circuit-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Add subtle particle effect overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-10"></div>
        
        <motion.div variants={fadeIn} className="lg:w-1/2 z-10">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            J.U.L.I.E. A.I.
          </h1>
          <h2 className="text-xl text-gray-400 mb-6">The Game Changer You Didn't Know You Needed</h2>
          <p className="text-lg text-gray-300 mb-8">
            Developed by <strong>Cosmohentorq Innovations Pvt Ltd</strong>, J.U.L.I.E is an advanced artificial intelligence system with a multi-foundational approach, designed for real-world applications.
          </p>
        </motion.div>
        <motion.div 
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="lg:w-1/2 z-10 flex justify-center"
        >
          <Image 
            src="/assets/brain.png" 
            alt="J.U.L.I.E AI" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

        {/* Enhanced Vertical Timeline Section */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeIn}
  className="mb-16"
>
  <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">Development Timeline</h2>
  
  <div className="relative py-8">
    {/* Timeline connector line - centered on mobile too */}
    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform -translate-x-1/2"></div>
    
    {/* Announcement milestone */}
    <div className="flex flex-col md:flex-row items-center mb-16 relative">
    <div className="w-full md:w-1/2 md:pr-12 text-center md:text-right order-2 md:order-1 mt-16 md:mt-0">
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-blue-900 bg-opacity-30 p-6 rounded-lg border-l-4 md:border-l-0 md:border-r-4 border-blue-500 shadow-lg inline-block"
      >
          <h3 className="text-2xl font-bold text-blue-300 mb-2">Announcement</h3>
          <p className="text-gray-300 mb-4">Project J.U.L.I.E officially revealed to the public</p>
          <p className="text-3xl font-bold text-white bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            May 29, 2024
          </p>
        </motion.div>
      </div>
      
      <div className="absolute left-1/2 w-12 h-12 bg-blue-600 rounded-full border-4 border-gray-900 transform -translate-x-1/2 flex items-center justify-center order-1 md:order-2 z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="w-6 h-6 bg-blue-300 rounded-full"
        />
      </div>
      
      <div className="w-full md:w-1/2 md:pl-12 order-3 hidden md:block">
      {/* Empty on the right side for first milestone */}
      </div>
    </div>
    
    {/* Development Milestones */}
    <div className="flex flex-col md:flex-row items-center mb-16 relative">
      <div className="w-full md:w-1/2 md:pr-12 order-2 hidden md:block">
        {/* Empty on the left side */}
      </div>
      
      <div className="absolute left-1/2 w-12 h-12 bg-indigo-600 rounded-full border-4 border-gray-900 transform -translate-x-1/2 flex items-center justify-center order-1 z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="w-6 h-6 bg-indigo-300 rounded-full"
        />
      </div>
      
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left mt-6 md:mt-0 order-3">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-indigo-900 bg-opacity-30 p-6 rounded-lg border-l-4 border-indigo-500 shadow-lg inline-block"
        >
          <h3 className="text-2xl font-bold text-indigo-300 mb-2">Development Phases</h3>
          <p className="text-gray-300 mb-4">Multi-foundational training across various modalities</p>
          <p className="text-xl font-bold text-white">June 2024 - April 2025</p>
        </motion.div>
      </div>
    </div>
    
    {/* Beta Testing */}
    <div className="flex flex-col md:flex-row items-center mb-16 relative">
      <div className="w-full md:w-1/2 md:pr-12 text-center md:text-right order-2 md:order-1 mt-6 md:mt-0">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-violet-900 bg-opacity-30 p-6 rounded-lg border-l-4 md:border-l-0 md:border-r-4 border-violet-500 shadow-lg inline-block"
        >
          <h3 className="text-2xl font-bold text-violet-300 mb-2">Beta Testing</h3>
          <p className="text-gray-300 mb-4">Limited access for selected partners</p>
          <p className="text-xl font-bold text-white">March 2025 - April 2025</p>
        </motion.div>
      </div>
      
      <div className="absolute left-1/2 w-12 h-12 bg-violet-600 rounded-full border-4 border-gray-900 transform -translate-x-1/2 flex items-center justify-center order-1 md:order-2 z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="w-6 h-6 bg-violet-300 rounded-full"
        />
      </div>
      
      <div className="w-full md:w-1/2 md:pl-12 order-3 hidden md:block">
        {/* Empty on the right side */}
      </div>
    </div>
    
    {/* Stable Release */}
    <div className="flex flex-col md:flex-row items-center relative">
      <div className="w-full md:w-1/2 md:pr-12 order-2 hidden md:block">
        {/* Empty on the left side */}
      </div>
      
      <div className="absolute left-1/2 w-16 h-16 bg-purple-600 rounded-full border-4 border-gray-900 transform -translate-x-1/2 flex items-center justify-center order-1 z-10">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            boxShadow: [
              "0 0 0 0 rgba(196, 130, 251, 0.7)",
              "0 0 0 10px rgba(196, 130, 251, 0)",
              "0 0 0 0 rgba(196, 130, 251, 0)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-8 h-8 bg-purple-300 rounded-full"
        />
      </div>
      
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left mt-6 md:mt-0 order-3">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gradient-to-br from-purple-900 to-purple-700 p-8 rounded-lg border-l-4 md:border-l-4 border-purple-500 shadow-xl inline-block relative"
        >
          <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">MILESTONE</div>
          <h3 className="text-2xl font-bold text-white mb-3 mt-2">Stable Release</h3>
          <p className="text-gray-200 mb-4">Full deployment of J.U.L.I.E. A.I.</p>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-3xl font-bold text-white bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
              May 1, 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</motion.div>

         {/* Training Phases - Cyclical Representation */}
         <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-blue-400 mb-10 text-center">Training Phases</motion.h2>
          
          <div className="relative">
            {/* Central Hub */}
            <motion.div 
              variants={fadeIn}
              className="w-48 h-48 bg-blue-900 rounded-full mx-auto flex items-center justify-center z-10 relative border-4 border-blue-700 shadow-lg"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-300">J.U.L.I.E.</h3>
                <p className="text-sm text-gray-300">Multi-foundational AI</p>
              </div>
            </motion.div>
            
            {/* Circular phases */}
            <div className="relative max-w-4xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* First 9 phases remain the same */}
                {[
                  ["Textual Phase", "Enhancement of reading and writing capabilities using books, articles, and transcripts."],
                  ["Audio Corpus & Web Junk", "Integrating audio processing and web data analysis."],
                  ["Image Phase", "Advanced visual recognition and interpretation using extensive datasets."],
                  ["Video Phase", "Real-time analysis and understanding of dynamic video content."],
                  ["Forefront Phase", "Researching cutting-edge AI advancements."],
                  ["Artificial Response (NLP)", "Refining natural language processing for seamless human-AI interaction."],
                  ["Regional Language Understanding", "Expanding J.U.L.I.E's capabilities across regional languages."],
                  ["NAS Development", "Developing secure, scalable, and efficient data handling for NAS integration."],
                  ["NAS Deployment", "Optimizing performance across different NAS types (1, 2, 3, and 4)."],
                ].map(([title, desc], index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeIn}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-800 bg-opacity-50 rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-blue-900/20 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-blue-300">{title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* 10th phase centered below */}
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 bg-opacity-50 rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-blue-900/20 hover:shadow-lg transition-all mt-6 mx-auto max-w-md"
              >
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                    <span className="text-white font-bold">10</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-300">Deployment & AR Integration</h3>
                </div>
                <p className="text-gray-300 text-sm">Final deployment strategy, ensuring real-world application & AR capabilities.</p>
              </motion.div>

              {/* Connecting elements - visible on larger screens */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-blue-600 opacity-20 -z-10"></div>
              <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-dashed border-blue-500 opacity-20 -z-10"></div>
              <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 rounded-full border-2 border-dashed border-blue-400 opacity-10 -z-10"></div>
            </div>
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-blue-400 mb-6">Additional Features</motion.h2>
          <div className="space-y-8">
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-blue-300">Hub Access Kernel (HAK)</h3>
              <p className="text-gray-300 mt-2">A centralized system hosted in NAS for seamless AI operation management.</p>
            </motion.div>
            
            <motion.div 
              ref={trackerRef}
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-blue-300">J.U.L.I.E IVAA Human Tracker v1.0</h3>
              <p className="text-gray-300 mt-2 mb-4">An intelligent human-tracking system for security and analytics.</p>
              
              {/* Tracker Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <Image 
                    src="/assets/julie2.png" 
                    alt="J.U.L.I.E Human Tracker Interface" 
                    width={400} 
                    height={300} 
                    className="w-full object-cover transition-all duration-300 hover:brightness-110"
                  />
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <Image 
                    src="/assets/julie.gif" 
                    alt="J.U.L.I.E Human Tracker in Action" 
                    width={400} 
                    height={300}
                    className="w-full object-cover transition-all duration-300 hover:brightness-110"
                    unoptimized
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Deployment Strategy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 bg-gray-800 bg-opacity-30 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Deployment Strategy</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-300">Pre-Deployment Testing</h3>
                <p className="text-gray-300 mt-1">Rigorous testing to ensure compatibility and optimal performance across various environments.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-300">Secure Deployment</h3>
                <p className="text-gray-300 mt-1">Advanced security protocols focused on data integrity and protection at every level.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full p-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-300">Post-Deployment Support</h3>
                <p className="text-gray-300 mt-1">Continuous monitoring, updates, and improvements to enhance performance and capabilities.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-blue-400 mb-6">Key Highlights</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["True AI", "Built with advanced intelligence and adaptability.", "brain"],
              ["Multi-foundational Training", "Covering text, audio, images, and more.", "book-open"],
              ["NAS Deployment", "Optimized for secure AI operations.", "server"],
              ["AR Integration", "Enhancing user experience with interactive AR.", "cube"],
              ["HAK System", "A centralized control hub for AI operations.", "cpu"],
              ["Full-Scale Deployment", "Tested across multiple environments.", "globe"]
            ].map(([title, desc, icon], index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-blue-800 flex flex-col items-center text-center"
              >
                <div className="bg-blue-600 p-3 rounded-full mb-4">
                  {/* Icon placeholder - replace with actual icon components */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">{title}</h3>
                <p className="text-gray-300">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center py-12 mb-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to experience J.U.L.I.E?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us for a demo or more information.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}