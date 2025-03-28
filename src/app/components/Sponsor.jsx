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
    url: "https://www.apple.com"
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
          
          <div className="relative w-full inline-flex flex-nowrap overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center justify-center space-x-12 md:space-x-16">
              {sponsors.map((sponsor, index) => (
                <div 
                  key={`${sponsor.name}-${index}`} 
                  className="inline-block mx-4"
                >
                  <Image 
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={400}
                    height={400}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate the marquee for seamless infinite scroll */}
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center justify-center space-x-12 md:space-x-16">
              {sponsors.map((sponsor, index) => (
                <div 
                  key={`${sponsor.name}-duplicate-${index}`} 
                  className="inline-block mx-4"
                >
                  <Image 
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={400}
                    height={400}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }