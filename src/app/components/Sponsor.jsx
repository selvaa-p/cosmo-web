"use client";
import React from 'react';
import Image from 'next/image';

const sponsors = [
  {
    name: "Google",
    logo: "/assets/sponsors/google.svg",
    url: "https://www.google.com"
  },
  {
    name: "Microsoft",
    logo: "/assets/sponsors/microsoft.png", 
    url: "https://www.microsoft.com"
  },
  {
    name: "Apple",
    logo: "/assets/sponsors/apple.svg",
    url: "https://www.apple.com",
    scale: 0.5
  },
  {
    name: "Amazon",
    logo: "/assets/sponsors/amazon.svg",
    url: "https://www.amazon.com"
  },
  {
    name: "Tesla",
    logo: "/assets/sponsors/tesla.png",
    url: "https://www.tesla.com"
  },
  {
    name: "Salesforce",
    logo: "/assets/sponsors/salesforce.svg",
    url: "https://www.salesforce.com"
  },
  {
    name: "Spotify",
    logo: "/assets/sponsors/spotify.svg",
    url: "https://www.spotify.com"
  },
  {
    name: "BBC",
    logo: "/assets/sponsors/bbc.svg",
    url: "https://www.bbc.com"
  },
  {
    name: "Figma",
    logo: "/assets/sponsors/figma.svg",
    url: "https://www.bbc.com"
  },
  {
    name: "Netflix",
    logo: "/assets/sponsors/netflix.webp",
    url: "https://www.netflix.com"
  },
 {
    name: "IBM",
    logo: "/assets/sponsors/ibm.png",
    url: "https://www.ibm.com"
}
];

export default function SponsorSection() {
    return (
      <section 
        id="sponsors" 
        className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-red mb-4">
              Trusted By Leading Innovators
            </h2>
            <p className="text-text max-w-2xl mx-auto">
              Our solutions are powering innovation across industries, supported by some of the world's most forward-thinking companies.
            </p>
          </div>
          
          {/* Mobile View Grid Layout */}
          <div className="md:hidden grid grid-cols-3 gap-6 place-items-center">
            {sponsors.map((sponsor, index) => (
              <div 
                key={`${sponsor.name}-mobile-${index}`} 
                // Add conditional className for last row centering
                className={`w-full max-w-[100px] 
                  ${index >= sponsors.length - (sponsors.length % 3) 
                    ? 'col-start-2' // Center the last row if not fully filled
                    : ''}`
                }
              >
                <Image 
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={100}
                  height={100}
                  // Conditionally apply scale for Apple logo
                  className={`object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 w-full h-auto 
                    ${sponsor.name === 'Apple' ? 'scale-50' : ''}`}
                />
              </div>
            ))}
          </div>
          
          {/* Desktop View - Seamless Marquee */}
          <div className="hidden md:block relative w-full overflow-hidden">
            <div className="sponsor-track inline-flex items-center">
              <div className="flex animate-marquee space-x-12">
                {[...sponsors, ...sponsors].map((sponsor, index) => (
                  <div 
                    key={`${sponsor.name}-scroll-${index}`} 
                    className="flex items-center justify-center w-[150px] h-[100px]"
                  >
                    <Image 
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={120}
                      height={80}
                      className={`object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 max-w-full max-h-full"
                        ${sponsor.name === 'Apple' ? 'scale-50' : ''}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }