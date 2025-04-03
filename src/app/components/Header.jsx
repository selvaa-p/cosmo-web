// src\app\components\Header.jsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Header({ alwaysSolid = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Separate state for mobile dropdown
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const dropdownRef = useRef(null);

  // Force full page reload when logo is clicked and ensure redirection to hero section
  const handleLogoClick = (e) => {
    e.preventDefault();
    // Set the location to root path with no hash to ensure landing on hero section
    window.location.href = '/';
    
    // Force a complete page reload
    setTimeout(() => {
      window.location.reload(true);
      
      // After reload, ensure we're at the top of the page (hero section)
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    if (!alwaysSolid) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [alwaysSolid]);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    setMobileDropdownOpen(false);
  };

  // Handle mobile dropdown item clicks
  const handleMobileItemClick = (e, href) => {
    if (href.startsWith('#')) {
      // For hash links, use smooth scroll
      e.preventDefault();
      const targetId = href.substring(1);
      
      if (!isHomePage) {
        window.location.href = `/#${targetId}`;
      } else {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else {
      // For non-hash links, allow default behavior (no preventDefault)
      // The Link component will handle it
    }
    
    // Close menus after clicking
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { 
      href: "#about", 
      label: "About", 
      hasDropdown: true,
      dropdownItems: [
        { href: "#about", label: "Company" },
        { href: "#blog", label: "Blogs" },
        { href: "/careers", label: "Careers" }
      ] 
    },
    { href: "#products", label: "Products" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        alwaysSolid || scrolled 
          ? "bg-white/85 backdrop-blur-md shadow-lg h-16 md:h-20" 
          : "bg-transparent h-20 md:h-24 py-2 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo Section with Enhanced Styling */}
        <div className="flex items-center">
          {/* Using a standard anchor tag for more control over reload behavior */}
          <a href="/" onClick={handleLogoClick}>
            <div className="flex items-center group">
              <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-100 to-white p-1.5 shadow-md transition-all duration-300 group-hover:shadow-lg">
                <Image
                  src="/assets/logo_only.png"
                  alt="CosmoHentorq Logo"
                  width={50}
                  height={50}
                  priority={false}
                  className="object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h1 className="text-2xl font-bold ml-3 text-text md:block hidden bg-gradient-to-r from-text to-primary bg-clip-text text-transparent">
                COSMOHENTORQ <span className="font-light">INNOVATIONS</span>
              </h1>
            </div>
          </a>
        </div>
       
        {/* Desktop Navigation with Improved Glass Morphism */}
        <nav className="hidden md:flex items-center bg-white bg-opacity-30 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-sm">
          {navLinks.map((link, index) => (
            <div 
              key={link.label} 
              className="relative"
              ref={link.hasDropdown ? dropdownRef : null}
            >
              <a
                href={link.hasDropdown ? "#" : (isHomePage ? link.href : `/${link.href}`)}
                onClick={(e) => {
                  if (link.hasDropdown) {
                    e.preventDefault();
                    setDropdownOpen(!dropdownOpen);
                  } else {
                    handleSmoothScroll(e, link.href.substring(1));
                  }
                }}
                className={`text-text text-base font-medium px-4 py-2 rounded-xl border border-transparent 
                  hover:border-highlight hover:bg-highlight transition-all relative mx-1 flex items-center
                  ${link.hasDropdown && dropdownOpen ? 'bg-highlight/20 border-highlight/20' : ''}
                  ${index === navLinks.length - 1 ? 'bg-primary text-white hover:bg-primary/90 hover:text-white hover:shadow-md' : ''}
                `}
              >
                {link.label}
                {link.hasDropdown && <FaChevronDown className={`ml-2 text-xs transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />}
              </a>
              
              {/* Dropdown Menu */}
              {link.hasDropdown && dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-white/90 backdrop-blur-md shadow-lg border border-gray-100 overflow-hidden z-50 transition-all duration-300">
                  {link.dropdownItems.map((item) => (
                    <Link 
                      key={item.label} 
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith('#')) {
                          handleSmoothScroll(e, item.href.substring(1));
                        }
                        setDropdownOpen(false);
                      }}
                      className="block px-4 py-3 text-text hover:bg-highlight/10 transition-colors border-b border-gray-100 last:border-0 flex items-center"
                    >
                      <span>{item.label}</span>
                      <FaArrowRight className="ml-auto text-xs opacity-50" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        {/* Mobile Menu Button with Enhanced Styling */}
        <button
          className="md:hidden text-text p-2.5 rounded-xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 border border-white/40"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes className="text-primary" /> : <FaBars className="text-primary" />}
        </button>
      </div>
      
      {/* Mobile Navigation with Enhanced Styling - COMPLETELY REWORKED */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md w-full absolute top-full left-0 py-4 shadow-lg rounded-2xl border-t border-gray-100 mt-1 mx-2 max-w-[calc(100%-1rem)]">
          <nav className="flex flex-col space-y-2 px-4">
            {/* Regular Links */}
            {navLinks.map((link, index) => {
              // If it's not a dropdown link
              if (!link.hasDropdown) {
                return (
                  <a
                    key={link.label}
                    href={isHomePage ? link.href : `/${link.href}`}
                    onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                    className={`text-text text-lg font-medium px-4 py-3 rounded-xl border border-transparent 
                      hover:border-highlight/20 hover:bg-highlight/10 transition-colors flex items-center justify-between
                      ${index === navLinks.length - 1 ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-md' : 'bg-gray-50/80'}
                    `}
                  >
                    {link.label}
                    <FaArrowRight className="text-sm opacity-70" />
                  </a>
                );
              }
              
              // If it's a dropdown link (About section)
              return (
                <div key={link.label}>
                  {/* Dropdown Toggle Button */}
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className={`text-text text-lg font-medium px-4 py-3 rounded-xl border border-transparent w-full
                      hover:border-highlight/20 hover:bg-highlight/10 transition-colors flex items-center justify-between
                      ${mobileDropdownOpen ? 'bg-highlight/10 border-highlight/20' : 'bg-gray-50/80'}
                    `}
                  >
                    {link.label}
                    <FaChevronDown className={`text-sm opacity-70 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Dropdown Items */}
                  {mobileDropdownOpen && (
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-primary/20 ml-4">
                      {link.dropdownItems.map((item) => {
                        if (item.href.startsWith('#')) {
                          // For hash links, use anchor tags
                          return (
                            <a 
                              key={item.label} 
                              href={item.href}
                              onClick={(e) => handleMobileItemClick(e, item.href)}
                              className="block px-4 py-2.5 text-text text-base bg-gray-50/50 hover:bg-highlight/10 transition-colors rounded-lg flex items-center justify-between"
                            >
                              <span>{item.label}</span>
                              <FaArrowRight className="text-xs opacity-50" />
                            </a>
                          );
                        } else {
                          // For path links like "/careers", use Link component
                          return (
                            <Link 
                              key={item.label} 
                              href={item.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDropdownOpen(false);
                              }}
                              className="block px-4 py-2.5 text-text text-base bg-gray-50/50 hover:bg-highlight/10 transition-colors rounded-lg flex items-center justify-between"
                            >
                              <span>{item.label}</span>
                              <FaArrowRight className="text-xs opacity-50" />
                            </Link>
                          );
                        }
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}