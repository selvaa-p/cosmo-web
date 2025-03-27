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

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      observerOptions
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
};

export default function Home() {
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const expertiseRef = useRef(null);
  const productsRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  const faqsRef = useRef(null);

  const heroVisible = useOnScreen(heroRef);
  const visionVisible = useOnScreen(visionRef);
  const expertiseVisible = useOnScreen(expertiseRef);
  const productsVisible = useOnScreen(productsRef);
  const teamVisible = useOnScreen(teamRef);
  const contactVisible = useOnScreen(contactRef);
  const footerVisible = useOnScreen(footerRef);
  const faqVisible = useOnScreen(faqsRef);

  return (
    <main className="overflow-x-hidden">
      <Header />
      <div id="home" ref={heroRef} className={`transition-opacity duration-500 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
      </div>
      <div id="about" ref={visionRef} className={`transition-opacity duration-500 ${visionVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Vision />
      </div>
      <div id="expertise" ref={expertiseRef} className={`transition-opacity duration-500 ${expertiseVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Expertise />
      </div>
      <div id="products" ref={productsRef} className={`transition-opacity duration-500 ${productsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Products />
      </div>
      <div id="team" ref={teamRef} className={`transition-opacity duration-500 ${teamVisible ? 'opacity-100' : 'opacity-0'}`}>
        <TeamSection />
      </div>
      <div id="faq" ref={faqsRef} className={`transition-opacity duration-500 ${faqVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Faq />
      </div>
      <div id="contact" ref={contactRef} className={`transition-opacity duration-500 ${contactVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Contact />
      </div>
      <div id="footer"> {/*ref={footerRef} className={`transition-opacity duration-1000 ${footerVisible ? 'opacity-100' : 'opacity-0'}`} */}
        <Footer />
      </div>
    </main>
  );
}