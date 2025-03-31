// src/app/page.js
"use client";
import React, { useEffect, useRef } from 'react';
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Expertise from "./components/Expertise";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import TeamSection from "./components/TeamSection";
import Faq from "./components/Faq";
import SponsorSection from './components/Sponsor';
import Blog from './components/Blogs';

// Improved observer setup with better performance options
const observerOptions = {
  root: null,
  rootMargin: '50px 0px', // Preload elements before they come into view
  threshold: 0.05, // Trigger earlier at just 5% visibility
};

// Consolidated observer hook that tracks multiple refs
const useSectionObserver = (refs) => {
  const [visibleSections, setVisibleSections] = React.useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Once an element becomes visible, keep it visible
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    // Observe all section refs
    Object.entries(refs).forEach(([id, ref]) => {
      if (ref.current) {
        ref.current.id = id; // Ensure ID is set for the observer callback
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up by unobserving all elements
      Object.values(refs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);

  return visibleSections;
};

export default function Home() {
  // Create all section refs
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    expertise: useRef(null),
    sponsors: useRef(null),
    products: useRef(null),
    team: useRef(null),
    blog: useRef(null),
    faq: useRef(null),
    contact: useRef(null),
    footer: useRef(null),
  };

  // Use a single observer for all sections
  const visibleSections = useSectionObserver(sectionRefs);

  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* Hero is visible immediately for better initial load experience */}
      <div id="home" ref={sectionRefs.home} className="opacity-100">
        <Hero />
      </div>
      
      {/* Other sections fade in when they come into view */}
      <div id="about" ref={sectionRefs.about} 
           className={`transition-opacity duration-300 ease-in-out ${visibleSections.about ? 'opacity-100' : 'opacity-0'}`}>
        <Vision />
      </div>
      
      <div id="expertise" ref={sectionRefs.expertise} 
           className={`transition-opacity duration-300 ease-in-out ${visibleSections.expertise ? 'opacity-100' : 'opacity-0'}`}>
        <Expertise />
      </div>
      
      <div id="sponsors" ref={sectionRefs.sponsors} 
           className={`transition-opacity duration-300 ease-in-out ${visibleSections.sponsors ? 'opacity-100' : 'opacity-0'}`}>
        <SponsorSection />
      </div>
      
      <div id="products" ref={sectionRefs.products} 
           className={`transition-opacity duration-300 ease-in-out ${visibleSections.products ? 'opacity-100' : 'opacity-0'}`}>
        <Products />
      </div>
      
      <div id="team" ref={sectionRefs.team} 
           className={`transition-opacity duration-300 ease-in-out ${visibleSections.team ? 'opacity-100' : 'opacity-0'}`}>
        <TeamSection />
      </div>
      
      <div id="blog" ref={sectionRefs.blog} 
           className={`transition-opacity duration-300 ease-in-out ${visibleSections.blog ? 'opacity-100' : 'opacity-0'}`}>
        <Blog />
      </div>
      
      <div id="faq" ref={sectionRefs.faq} 
           className={`transition-opacity duration-300 ease-in-out ${visibleSections.faq ? 'opacity-100' : 'opacity-0'}`}>
        <Faq />
      </div>
      
      <div id="contact" ref={sectionRefs.contact} 
           className={`transition-opacity duration-300 ease-in-out ${visibleSections.contact ? 'opacity-100' : 'opacity-0'}`}>
        <Contact />
      </div>
      
      <div id="footer" ref={sectionRefs.footer} 
           className={`transition-opacity duration-300 ease-in-out ${visibleSections.footer ? 'opacity-100' : 'opacity-0'}`}>
        <Footer />
      </div>
    </main>
  );
}