"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  RefreshCcw, 
  Share2, 
  DatabaseBackup, 
  GitBranch, 
  Globe, 
  Lock 
} from "lucide-react";

export default function HAKPage() {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
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

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 animate-fade-in-up">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4 leading-tight">
              H.A.K CLOUD SERVICE
            </h1>
            <h2 className="text-xl text-gray-400 mb-6 font-medium">
              Secure, Reliable Cloud Storage Solutions
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Developed by <strong className="text-blue-300">Cosmohentorq Innovations Pvt Ltd</strong>, H.A.K offers premium cloud storage solutions for both business and domestic users with a unique one-time purchase model.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <button 
                onClick={scrollToFeatures}
                className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="animate-scale-in">
              <Image 
                src="/assets/cloud.png" 
                alt="H.A.K Cloud Service" 
                width={500} 
                height={500} 
                priority
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div ref={featuresRef} className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: RefreshCcw,
                title: "File Synchronization", 
                description: "Seamlessly sync your files across all your devices"
              },
              {
                icon: Share2,
                title: "Secure File Sharing", 
                description: "Collaborate and share files with controlled access"
              },
              {
                icon: DatabaseBackup,
                title: "Automatic Backups", 
                description: "Never lose your important data with scheduled backups"
              },
              {
                icon: GitBranch,
                title: "Version Control", 
                description: "Track changes and restore previous versions of your files"
              },
              {
                icon: Globe,
                title: "Cross-Platform Access", 
                description: "Access your files from any device, anywhere"
              },
              {
                icon: Lock,
                title: "End-to-End Encryption", 
                description: "Your data remains secure with advanced encryption"
              }
            ].map(({ icon: Icon, title, description }, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 rounded-full p-3 mr-4">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-300">{title}</h3>
                </div>
                <p className="text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Pricing</h2>
          
          {/* One-Time Purchase Section */}
          <div className="bg-gray-900 rounded-2xl p-10 mb-10 shadow-[8px_8px_16px_rgba(59,130,246,0.2),-8px_-8px_16px_rgba(124,58,237,0.2)] transform transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-blue-300 mb-5">One-Time Purchase</h3>
            <div className="flex items-center">
              <p className="text-4xl font-bold text-white mr-4">₹5 <span className="text-xl text-gray-400">per GB</span></p>
              <p className="text-lg text-gray-300">Pay once for the storage you need, no recurring charges.</p>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Plan",
                storage: "50-100GB",
                price: "₹100",
                annualFee: "per year",
                features: [
                  "Basic cloud storage",
                  "Limited file synchronization",
                  "Standard security"
                ],
                highlighted: false
              },
              {
                name: "Standard Plan",
                storage: "200-500GB",
                price: "₹250",
                annualFee: "per year",
                features: [
                  "Enhanced storage",
                  "Advanced file sharing",
                  "Priority support"
                ],
                highlighted: true
              },
              {
                name: "Premium Plan",
                storage: "1TB+",
                price: "₹500",
                annualFee: "per year",
                features: [
                  "Unlimited storage",
                  "Full feature access",
                  "24/7 dedicated support"
                ],
                highlighted: false
              }
            ].map(({ name, storage, price, annualFee, features, highlighted }, index) => (
              <div 
                key={index} 
                className={`
                  bg-gray-900 rounded-2xl p-8 text-center 
                  transition-all duration-300 
                  ${highlighted ? 'transform -translate-y-4 scale-105' : 'hover:scale-105'}
                  shadow-[8px_8px_16px_rgba(59,130,246,0.2),-8px_-8px_16px_rgba(124,58,237,0.2)]
                `}
              >
                <h4 className={`
                  text-xl font-semibold mb-4 
                  ${highlighted ? 'text-blue-400' : 'text-blue-300'}
                `}>
                  {name}
                </h4>
                <p className="text-3xl font-bold text-white mb-2">{price}</p>
                <p className="text-gray-400 mb-6">{annualFee} • {storage} Storage</p>
                <ul className="text-gray-300 mb-8 space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center">
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
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Button with updated shadows */}
                <button className="
                  w-full py-3 rounded-lg text-white font-bold 
                  bg-blue-600 hover:bg-blue-700 
                  transition-all duration-300
                  transform hover:scale-105
                  shadow-[4px_4px_8px_rgba(59,130,246,0.2),-4px_-4px_8px_rgba(124,58,237,0.2)]
                  hover:shadow-[inset_4px_4px_8px_rgba(59,130,246,0.2),inset_-4px_-4px_8px_rgba(124,58,237,0.2)]
                ">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Business Objectives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Mission</h3>
              <p className="text-gray-300 text-lg">To provide cost-effective, secure, and reliable cloud storage solutions tailored for both businesses and domestic users.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Vision</h3>
              <p className="text-gray-300 text-lg">To establish Cosmohentorq Innovations as a leading provider of cloud storage services, recognized for exceptional data security and customer service.</p>
            </div>
          </div>
        </div>

        {/* Customer Support */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Customer Support</h2>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 mb-10 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Support Channels</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
              <li>Email Support</li>
              <li>Phone Support</li>
              <li>Live Chat</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Knowledge Base</h3>
              <p className="text-gray-300 text-lg">Access our comprehensive online knowledge base with tutorials, FAQs, and troubleshooting guides.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Service Level Agreements</h3>
              <p className="text-gray-300 text-lg">We offer defined SLAs for response times and uptime guarantees to assure business customers of reliability.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-10 mb-16 bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-30 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-5">Ready to secure your data with H.A.K?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us for pricing details or more information.</p>
          <Link href="/#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-colors text-lg shadow-lg">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}