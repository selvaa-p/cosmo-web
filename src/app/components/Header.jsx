// src\app\components\Header.jsx
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Header({ alwaysSolid = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };
    if (!alwaysSolid) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [alwaysSolid]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    
    // If we're not on the homepage, navigate to homepage first
    if (!isHomePage) {
      window.location.href = `/#${targetId}`;
      return;
    }
    
    // If we're on homepage, just scroll to the section
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        alwaysSolid || scrolled 
          ? "bg-white backdrop-blur-sm bg-opacity-95 shadow-lg h-16 md:h-20" 
          : "bg-transparent h-20 md:h-24 py-2 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo Section with Enhanced Styling */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center group">
              <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-50 to-white p-1 shadow-md transition-all duration-300 group-hover:shadow-lg">
                <Image
                  src="/assets/logo_only.png"
                  alt="CosmoHentorq Logo"
                  width={55}
                  height={55}
                  className="object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h1 className="text-2xl font-bold ml-4 text-text md:block hidden bg-gradient-to-r from-text to-primary bg-clip-text text-transparent">
                COSMOHENTORQ <span className="font-light">INNOVATIONS</span>
              </h1>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation with Glass Morphism */}
        <nav className="hidden md:flex items-center bg-white bg-opacity-30 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={isHomePage ? link.href : `/${link.href}`}
              onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
              className={`text-text text-base font-medium px-4 py-2 rounded-full border border-transparent 
                hover:border-highlight hover:bg-highlight transition-colors relative mx-1
                ${index === navLinks.length - 1 ? 'bg-primary text-white hover:bg-primary hover:text-white hover:shadow-md' : ''}
              `}
            >
              {link.label}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button with Enhanced Styling */}
        <button
          className="md:hidden text-text p-2 rounded-full bg-white bg-opacity-90 shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes className="text-primary" /> : <FaBars className="text-primary" />}
        </button>
      </div>
      
      {/* Mobile Navigation with Enhanced Styling */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-md w-full absolute top-full left-0 py-4 shadow-lg rounded-b-2xl border-t border-gray-100">
          <nav className="flex flex-col space-y-2 px-4">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={isHomePage ? link.href : `/${link.href}`}
                onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                className={`text-text text-lg font-medium px-4 py-3 rounded-xl border border-transparent 
                  hover:border-highlight hover:bg-highlight transition-colors flex items-center justify-between
                  ${index === navLinks.length - 1 ? 'bg-primary text-white hover:bg-primary hover:shadow-md' : 'bg-gray-50'}
                `}
              >
                {link.label}
                <FaArrowRight className="text-sm opacity-70" />
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
