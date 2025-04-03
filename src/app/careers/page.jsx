"use client";
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Careers from "../components/Careers";

export default function CareersPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <Careers />
      </div>
      <Footer />
    </main>
  );
}