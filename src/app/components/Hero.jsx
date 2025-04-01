"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Simple placeholder that's visually similar to the animation
const LottiePlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 animate-pulse"></div>
  </div>
);

// Dynamically import Lottie with no SSR to avoid document reference issues
const Lottie = dynamic(() => import('react-lottie'), { 
  ssr: false,
  loading: () => <LottiePlaceholder />
});

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state immediately after component mounts
    setIsMounted(true);
    
    // Set up scroll listener
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Simplified Lottie rendering without extra states
  const renderLottie = () => {
    if (!isMounted) return null;
    
    const lottieOptions = {
      loop: true,
      autoplay: true,
      path: "/assets/animation.json",
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        progressiveLoad: false // Disable progressive loading to load faster
      },
    };
    
    return (
      <Lottie 
        options={lottieOptions} 
        isClickToPauseDisabled={true}
      />
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-amber-50 to-amber-100">
      {/* Background Animation - only shown on larger screens */}
      <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full opacity-40 pointer-events-none">
        {isMounted && renderLottie()}
      </div>
      
      
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-4 sm:px-6 md:px-12 max-w-6xl mx-auto py-12 sm:py-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6 md:gap-8">
          {/* Left side - Content - always left aligned */}
          <div className="text-left w-full md:w-1/2 space-y-4 sm:space-y-6">
            <div className="flex justify-center md:justify-start w-full">
              <Image 
                src="/assets/logo.png" 
                alt="Company Logo" 
                width={150} 
                height={150} 
                priority={true}
                className="mb-2 sm:mb-4 md:mb-6 w-32 sm:w-40 md:w-auto h-auto"
              />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
              Create Something <span className="text-orange-500">Extraordinary</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-amber-800 max-w-lg">
              Elevate your digital experience with our innovative solutions designed for the modern world.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-start gap-4 pt-4">
              <Link
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg flex items-center justify-center sm:justify-start group transition-all duration-300 hover:shadow-lg hover:shadow-amber-200 w-full sm:w-auto"
              >
                Get Started 
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#expertise"
                onClick={(e) => handleSmoothScroll(e, "expertise")}
                className="bg-transparent text-amber-800 border-2 border-amber-400 px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg flex items-center justify-center sm:justify-start hover:bg-amber-400 hover:text-amber-900 transition-colors duration-300 w-full sm:w-auto"
              >
                Our Services
              </Link>
            </div>
          </div>
          
          {/* Right side - Visual element with more efficient animation loading */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-20 blur-xl"></div>
              <div className="relative h-full w-full flex items-center justify-center">
                {isMounted ? renderLottie() : <LottiePlaceholder />}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-6 sm:w-8 h-10 sm:h-12 rounded-full border-2 border-amber-600 flex justify-center p-2">
            <div className="w-1 h-3 bg-amber-600 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaArrowRight } from 'react-icons/fa';
// import dynamic from 'next/dynamic';

// // Preload the animation JSON file
// const preloadAnimation = () => {
//   if (typeof window !== "undefined") {
//     const link = document.createElement('link');
//     link.rel = 'preload';
//     link.href = '/assets/animation.json';
//     link.as = 'fetch';
//     link.type = 'application/json';
//     document.head.appendChild(link);
//   }
// };

// // Use a simpler loading placeholder that doesn't require heavy rendering
// const LottiePlaceholder = () => (
//   <div className="w-full h-full flex items-center justify-center">
//     <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 animate-pulse"></div>
//   </div>
// );

// // Dynamically import Lottie with a better loading state
// const Lottie = dynamic(() => import('react-lottie'), { 
//   ssr: false,
//   loading: () => <LottiePlaceholder /> 
// });

// export default function Hero() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const [lottieError, setLottieError] = useState(false);
//   const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
//   const lottieRef = useRef(null);

//   useEffect(() => {
//     // Set mounted after initial render
//     setIsMounted(true);
    
//     // Preload the animation file
//     preloadAnimation();
    
//     // Scroll event listener
//     if (typeof window !== "undefined") {
//       const handleScroll = () => {
//         setScrolled(window.scrollY > 100);
//       };
//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }
//   }, []);

//   // Clean up Lottie on unmount to prevent destroy errors
//   useEffect(() => {
//     return () => {
//       if (lottieRef.current) {
//         lottieRef.current = null;
//       }
//     };
//   }, []);

//   const handleSmoothScroll = (e, targetId) => {
//     e.preventDefault();
//     if (typeof window !== "undefined" && typeof document !== "undefined") {
//       const target = document.getElementById(targetId);
//       if (target) {
//         target.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }
//   };

//   // Optimized Lottie rendering with better error handling and loading states
//   const renderLottie = () => {
//     if (!isMounted || lottieError) return null;
    
//     const lottieOptions = {
//       loop: true,
//       autoplay: true,
//       path: "/assets/animation.json",
//       rendererSettings: {
//         preserveAspectRatio: 'xMidYMid slice',
//         progressiveLoad: true, // Enable progressive loading
//       },
//     };
    
//     try {
//       return (
//         <Lottie 
//           ref={lottieRef}
//           options={lottieOptions} 
//           isClickToPauseDisabled={true}
//           eventListeners={[
//             {
//               eventName: 'error',
//               callback: () => setLottieError(true),
//             },
//             {
//               eventName: 'data_ready',
//               callback: () => setIsAnimationLoaded(true),
//             }
//           ]}
//         />
//       );
//     } catch (error) {
//       console.error("Error rendering Lottie animation:", error);
//       setLottieError(true);
//       return null;
//     }
//   };

//   // Simplified fallback with less rendering overhead
//   const renderFallback = () => (
//     <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-300 rounded-full flex items-center justify-center">
//       <div className="text-amber-800 text-3xl">✨</div>
//     </div>
//   );

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-amber-50 to-amber-100">
//       {/* Background Animation - lazy loaded for performance */}
//       <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full opacity-40 pointer-events-none">
//         {isMounted && !lottieError ? renderLottie() : renderFallback()}
//       </div>
      
//       {/* Decorative elements - simplified for better performance */}
//       <div className="absolute -left-24 top-24 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-amber-200 opacity-20 blur-2xl"></div>
//       <div className="absolute -right-24 bottom-24 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 rounded-full bg-orange-200 opacity-30 blur-2xl"></div>
      
//       {/* Content Container */}
//       <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-4 sm:px-6 md:px-12 max-w-6xl mx-auto py-12 sm:py-0">
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6 md:gap-8">
//           {/* Left side - Content - always left aligned */}
//           <div className="text-left w-full md:w-1/2 space-y-4 sm:space-y-6">
//             <div className="flex justify-center md:justify-start w-full">
//               <Image 
//                 src="/assets/logo.png" 
//                 alt="Company Logo" 
//                 width={150} 
//                 height={150} 
//                 priority={true}
//                 className="mb-2 sm:mb-4 md:mb-6 w-32 sm:w-40 md:w-auto h-auto"
//               />
//             </div>
            
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
//               Create Something <span className="text-orange-500">Extraordinary</span>
//             </h1>
            
//             <p className="text-base sm:text-lg md:text-xl text-amber-800 max-w-lg">
//               Elevate your digital experience with our innovative solutions designed for the modern world.
//             </p>
            
//             <div className="flex flex-col sm:flex-row justify-start gap-4 pt-4">
//               <Link
//                 href="#about"
//                 onClick={(e) => handleSmoothScroll(e, "about")}
//                 className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg flex items-center justify-center sm:justify-start group transition-all duration-300 hover:shadow-lg hover:shadow-amber-200 w-full sm:w-auto"
//               >
//                 Get Started 
//                 <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Link>
              
//               <Link
//                 href="#expertise"
//                 onClick={(e) => handleSmoothScroll(e, "expertise")}
//                 className="bg-transparent text-amber-800 border-2 border-amber-400 px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg flex items-center justify-center sm:justify-start hover:bg-amber-400 hover:text-amber-900 transition-colors duration-300 w-full sm:w-auto"
//               >
//                 Our Services
//               </Link>
//             </div>
//           </div>
          
//           {/* Right side - Visual element with better performance for the animation container */}
//           <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
//             <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-20 blur-xl"></div>
//               <div className="relative h-full w-full flex items-center justify-center">
//                 {isAnimationLoaded ? (
//                   isMounted && !lottieError ? renderLottie() : renderFallback()
//                 ) : (
//                   <LottiePlaceholder />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Scroll indicator */}
//         <div className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
//           <div className="w-6 sm:w-8 h-10 sm:h-12 rounded-full border-2 border-amber-600 flex justify-center p-2">
//             <div className="w-1 h-3 bg-amber-600 rounded-full animate-bounce"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }