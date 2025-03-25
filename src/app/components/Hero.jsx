// src\app\components\Hero.jsx
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center p-6 pt-20"
      style={{ background: "linear-gradient(135deg, #F4E6D6, #F1B474)",  backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Image src="/assets/logo.png" alt="Company Logo" width={300} height={300} priority />
      <br></br>
      <br></br>
      <button>
        <Link
          href="#about"
          onClick={(e) => handleSmoothScroll(e, "about")}
          className="bg-transparent text-[#270c00] border-2 border-[#270c00] px-6 py-2 font-medium text-lg tracking-wider flex items-center justify-center rounded-full transition-colors hover:bg-primary hover:text-black "
        >
          Get Started <FaArrowRight className="ml-2" />
        </Link>
      </button>
    </section>
  );
}