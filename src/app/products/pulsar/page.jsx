// src/app/products/pulsar/page.js
import Image from "next/image";
import Link from "next/link";

export default function PulsarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/#products" className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Products
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              P.U.L.S.A.R
            </h1>
            <h2 className="text-xl text-gray-400 mb-6">Projected Ultra-Light Systemic Augmented Reality</h2>
            <p className="text-xl text-gray-300 mb-8">Augmented reality with real-time interactivity, transforming environments.</p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            <Image 
              src="/assets/glass.png" 
              alt="P.U.L.S.A.R" 
              width={500} 
              height={500} 
              className="relative z-10 mx-auto transform transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Overview</h2>
          <p className="text-lg text-gray-300 mb-8">P.U.L.S.A.R transforms how we interact with digital information by seamlessly blending it with our physical environment through cutting-edge AR technology.</p>
          
          {/* Features */}
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {["Ultra-lightweight transparent display (12g)", "180° field of view projection", 
              "Haptic feedback system for tactile interaction", "Spatial mapping with millimeter precision", 
              "10-hour battery life with quick-charge capability"].map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Technical Specifications */}
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Technical Specifications</h2>
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 mb-12">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                ["Resolution", "4K per eye (8K total)"],
                ["Processor", "Custom ARM-based neural processor"],
                ["Connectivity", "Wi-Fi 6E, Bluetooth 5.2, 5G optional"],
                ["Sensors", "LiDAR, dual cameras, eye tracking, motion sensors"]
              ].map(([key, value], index) => (
                <div key={index} className="mb-2">
                  <dt className="text-gray-400 capitalize mb-1">{key}:</dt>
                  <dd className="text-white font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          
          {/* Use Cases */}
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {["Industrial maintenance and repair", "Medical surgery assistance", 
              "Architectural visualization", "Immersive education and training"].map((useCase, index) => (
              <div key={index} className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded-lg p-4">
                <h3 className="text-lg font-medium text-blue-300 mb-2">
                  Case {index + 1}: {useCase}
                </h3>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center py-8 mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to experience P.U.L.S.A.R?</h2>
          <p className="text-xl text-gray-400 mb-6">Contact our team for a demo or more information</p>
          <Link href="/#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}