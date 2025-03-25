// src/app/products/hak/page.js
import Image from "next/image";
import Link from "next/link";

export default function HAKPage() {
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
              H.A.K CLOUD SERVICE
            </h1>
            <h2 className="text-xl text-gray-400 mb-6">Secure, Reliable Cloud Storage Solutions</h2>
            <p className="text-lg text-gray-300 mb-8">
              Developed by <strong>Cosmohentorq Innovations Pvt Ltd</strong>, H.A.K offers premium cloud storage solutions for both business and domestic users with a unique one-time purchase model.
            </p>
          </div>
          <div className="lg:w-1/2">
            {/* Placeholder for Image */}
            <Image 
              src="/assets/cloud.png" 
              alt="H.A.K Cloud Service" 
              width={500} 
              height={500} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Service Offerings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Teron */}
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-10 border-l-4 border-blue-500 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-300 mb-5">Teron</h3>
              <p className="text-gray-300 mb-8">Premium cloud storage solution designed specifically for business use.</p>
              <h4 className="text-xl font-semibold text-blue-200 mb-4">Storage Plans:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8">
                <li><strong>Basic Plan:</strong> 100GB</li>
                <li><strong>Standard Plan:</strong> 500GB</li>
                <li><strong>Premium Plan:</strong> 1TB+</li>
              </ul>
              <div className="bg-blue-900 bg-opacity-20 p-6 rounded mt-6">
                <p className="text-gray-200">Ideal for small to medium-sized enterprises (SMEs) needing scalable, secure storage solutions.</p>
              </div>
            </div>
            
            {/* Infryn */}
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-10 border-l-4 border-purple-500 shadow-xl">
              <h3 className="text-2xl font-bold text-purple-300 mb-5">Infryn</h3>
              <p className="text-gray-300 mb-8">Affordable cloud storage solution designed for domestic users.</p>
              <h4 className="text-xl font-semibold text-purple-200 mb-4">Storage Plans:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8">
                <li><strong>Basic Plan:</strong> 50GB</li>
                <li><strong>Standard Plan:</strong> 200GB</li>
                <li><strong>Premium Plan:</strong> 500GB+</li>
              </ul>
              <div className="bg-purple-900 bg-opacity-20 p-6 rounded mt-6">
                <p className="text-gray-200">Perfect for individual users and households looking for affordable and reliable cloud storage.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["File Synchronization", "Seamlessly sync your files across all your devices"],
              ["Secure File Sharing", "Collaborate and share files with controlled access"],
              ["Automatic Backups", "Never lose your important data with scheduled backups"],
              ["Version Control", "Track changes and restore previous versions of your files"],
              ["Cross-Platform Access", "Access your files from any device, anywhere"],
              ["End-to-End Encryption", "Your data remains secure with advanced encryption"]
            ].map(([title, desc], index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">{title}</h3>
                <p className="text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Pricing</h2>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-10 mb-10 shadow-xl">
            <h3 className="text-2xl font-bold text-blue-300 mb-5">One-Time Purchase</h3>
            <p className="text-4xl font-bold text-white mb-4">₹5 <span className="text-xl text-gray-400">per GB</span></p>
            <p className="text-lg text-gray-300">Pay once for the storage you need, no recurring charges for storage.</p>
          </div>
          
          <h3 className="text-2xl font-bold text-blue-300 mb-6">Annual Maintenance Fees</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["Basic Plan", "₹100", "per year"],
              ["Standard Plan", "₹250", "per year"],
              ["Premium Plan", "₹500", "per year"]
            ].map(([plan, price, period], index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg text-center shadow-lg">
                <h4 className="text-xl font-semibold text-blue-300 mb-4">{plan}</h4>
                <p className="text-3xl font-bold text-white mb-2">{price}</p>
                <p className="text-gray-400">{period}</p>
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