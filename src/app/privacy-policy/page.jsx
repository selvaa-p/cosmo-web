// src\app\privacy-policy\page.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { motion } from "framer-motion";
import Link from 'next/link';
import { 
  FaShieldAlt, 
  FaUserLock, 
  FaChartBar, 
  FaShareAlt, 
  FaLock, 
  FaUserCog, 
  FaCookieBite, 
  FaDesktop, 
  FaBuilding, 
  FaQuestionCircle 
} from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Fixed header with solid background */}
      <div className="sticky top-0 z-50 w-full bg-light-bg shadow-md">
        <Header alwaysSolid={true} />
      </div>
      
      {/* Hero Section - Added padding-top to prevent header overlap */}
      <div className="bg-gradient-to-r from-dark-bg to-text text-light-bg py-8 pt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <FaShieldAlt className="w-16 h-16 text-highlight" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Your privacy is important to us. We are committed to protecting your personal information.
          </p>
        </div>
      </div>
  
      
      <main className="container mx-auto px-4 py-10">
        <div className="bg-light-bg rounded-lg shadow-lg p-6 md:p-10 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="mb-10">
              <p className="text-lg leading-relaxed">
                At Cosmohentorq Innovations Pvt. Ltd., we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to protect your data.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                This statement adheres to the applicable laws under the Information Technology Act, 2000 and associated rules, including the Data Protection Bill and other relevant data protection regulations for users in India.
              </p>
            </div>
            
            <section className="mb-10">
              <div className="flex items-center mb-4">
                <FaUserLock className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-text m-0">Information We Collect</h2>
              </div>
              <div className="pl-9">
                <p className="mb-4">We collect the following types of information:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span><strong className="text-dark-bg">Personal Information:</strong> This includes your name, email address, and any other contact information you provide when you use our services or contact us.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span><strong className="text-dark-bg">Usage Data:</strong> We may collect information about how you use our website, including the pages you visit, the time and date of your visit, and other statistics.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span><strong className="text-dark-bg">Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience on our website and to track usage patterns.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span><strong className="text-dark-bg">Device Information:</strong> Data about your device, operating system, browser type, and network connection to optimize your experience.</span>
                  </li>
                </ul>
                <p className="mt-4">
                  We do not sell your data under any circumstances. Additionally, we do not use your private data for experiments or to train our artificial intelligence (AI) models.
                </p>
              </div>
            </section>
            
            <section className="mb-10">
              <div className="flex items-center mb-4">
                <FaChartBar className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-text m-0">How We Use Your Information</h2>
              </div>
              <div className="pl-9">
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Provide and maintain our products and services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Respond to your inquiries and provide customer support.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Send you information about our products and services, if you have opted in to receive such communications.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Improve our website, products, and services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Personalize your experience and provide recommendations tailored to your preferences.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Comply with legal and regulatory requirements.</span>
                  </li>
                </ul>
                <p className="mt-4">
                  We handle all projects with a robust data management framework to ensure zero leakage of data.
                </p>
              </div>
            </section>
            
            <section className="mb-10">
              <div className="flex items-center mb-4">
                <FaShareAlt className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-text m-0">Information Sharing and Disclosure</h2>
              </div>
              <div className="pl-9">
                <p className="text-lg leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. However, we may share your information under the following circumstances:
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>When required by law or to respond to legal processes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>With your explicit consent.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>With service providers who assist us in operating our website, conducting our business, or servicing you, under strict confidentiality agreements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>To protect the safety and security of users, our products, and the public.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>To defend the rights and property of Cosmohentorq Innovation and its users.</span>
                  </li>
                </ul>
              </div>
            </section>
            
            <section className="mb-10">
              <div className="flex items-center mb-4">
                <FaCookieBite className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-text m-0">Cookies and Similar Technologies</h2>
              </div>
              <div className="pl-9">
                <p className="text-lg leading-relaxed mb-4">
                  Cookies are small text files placed on your device to store data that can be recalled by our servers. We use cookies and similar technologies to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Store and honor your preferences and settings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Facilitate secure sign-ins and provide personalized experiences.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Analyze performance and improve product functionality.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Combat fraud and ensure security.</span>
                  </li>
                </ul>
                
                <p className="mt-4 mb-2"><strong>Types of Cookies We Use:</strong></p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span><strong>Essential Cookies:</strong> Required for core functionality of our websites and services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span><strong>Analytics Cookies:</strong> Help us understand user interactions and improve our products.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span><strong>Advertising Cookies:</strong> Provide relevant ads based on your preferences and browsing history.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span><strong>Social Media Cookies:</strong> Enhance your interaction with social platforms.</span>
                  </li>
                </ul>
                
                <p className="mt-4">
                  Where applicable, we obtain your consent before using cookies that are not essential. You can manage or withdraw your consent via your browser settings or other tools we provide.
                </p>
              </div>
            </section>
            
            <section className="mb-10">
              <div className="flex items-center mb-4">
                <FaBuilding className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-text m-0">Enterprise Products</h2>
              </div>
              <div className="pl-9">
                <p className="text-lg leading-relaxed">
                  Cosmohentorq Innovation's enterprise products are designed to meet the needs of businesses, educational institutions, and other organizations. Updates to these products prioritize enhanced security, compliance with applicable regulations, and tailored functionality to support organizational goals. Any data processed through these products is handled with the highest level of confidentiality and care.
                </p>
              </div>
            </section>
            
            <section className="mb-10">
              <div className="flex items-center mb-4">
                <FaLock className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-text m-0">Security</h2>
              </div>
              <div className="pl-9">
                <p className="text-lg leading-relaxed">
                  We implement a variety of security measures to maintain the safety of your personal information. These measures include secure servers, encryption, access controls, and regular security assessments to protect against unauthorized access, alteration, disclosure, or destruction of your personal data.
                </p>
              </div>
            </section>
            
            <section className="mb-10">
              <div className="flex items-center mb-4">
                <FaUserCog className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-text m-0">Your Rights and Control Over Personal Data</h2>
              </div>
              <div className="pl-9">
                <p className="mb-4">As a user, you have the right to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Access and correct your personal information.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Request the deletion of your personal information.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Opt out of receiving marketing communications from us.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Manage data collection and use for personalized advertising via our privacy settings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Access, download, or delete your data via our Privacy Dashboard.</span>
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided below or visit our Privacy Portal.
                </p>
              </div>
            </section>
            
            <section className="mb-10">
              <div className="flex items-center mb-4">
                <FaDesktop className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-text m-0">Privacy Portal</h2>
              </div>
              <div className="pl-9">
                <p className="text-lg leading-relaxed mb-4">
                  Our Privacy Portal is your dedicated resource for managing your personal data and understanding how Cosmohentorq Innovation protects your privacy. Through the Privacy Portal, you can:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Access Your Data: View and download the personal data we collect.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Update Your Preferences: Modify your privacy and communication preferences.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Request Data Deletion: Submit requests to delete personal data where applicable.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Review Privacy Resources: Access detailed information about our privacy practices and policies.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-2"></span>
                    <span>Submit Queries: Use our contact form to address specific questions or concerns about your data.</span>
                  </li>
                </ul>
                <p className="mt-4">
                  To access the Privacy Portal, visit: <a href="/privacy-portal" className="text-primary hover:text-secondary transition-colors">Privacy Portal</a>
                </p>
              </div>
            </section>
            
            <section className="mb-4">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-text m-0">Contact Us</h2>
              </div>
              <div className="pl-9">
                <p className="mb-4">If you have any questions or concerns about this Privacy Policy</p>
                <div className="flex justify-center items-center">
                    <div className="inline-block bg-custom-red hover:bg-text text-background font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                      <Link href="/#contact">
                        Contact Us
                      </Link>
                    </div>
                </div>
              </div>
            </section>
          </div>
          
          <div className="mt-12 pt-6 border-t border-highlight">
            <p className="text-sm text-text text-center">
              Last updated: March 20, 2025
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
