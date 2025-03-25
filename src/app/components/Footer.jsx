// // src/app/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-10 bg-text text-center text-light-bg">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-center">
          <a 
            href="#" // Add a placeholder link for Facebook
            className="w-10 h-10 mx-2 flex items-center justify-center bg-background text-text rounded-full transition-all hover:text-facebook"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookF className="w-6 h-6 fa6SvgIcon" />
          </a>
          <a
            href="https://x.com/cosmohento88115?t=fj8rO50a3RvB7CE18svGuw&s=09"
            className="w-10 h-10 mx-2 flex items-center justify-center bg-background text-text rounded-full transition-all hover:text-twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="w-6 h-6 fa6SvgIcon" />
          </a>
          <a 
            href="https://www.instagram.com/cosmohentorq?igsh=YzljYTk1ODg3Zg"
            className="w-10 h-10 mx-2 flex items-center justify-center bg-background text-text rounded-full transition-all hover:text-instagram"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 fa6SvgIcon" />
          </a>
          <a 
            href="#"
            className="w-10 h-10 mx-2 flex items-center justify-center bg-background text-text rounded-full transition-all hover:text-linkedin"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedinIn className="w-6 h-6 fa6SvgIcon" />
          </a>
          <a 
            href="#"
            className="w-10 h-10 mx-2 flex items-center justify-center bg-background text-text rounded-full transition-all hover:text-youtube"
            target="_blank"
            rel="noopener noreferrer">
            <FaYoutube className="w-6 h-6 fa6SvgIcon" />
          </a>
        </div>
       
        <div className="mb-4">
          <Link href="/privacy-policy" className="text-highlight hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>
       
        <div className="text-sm text-highlight">
        © {new Date().getFullYear()} Cosmohentorq Innovations Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}