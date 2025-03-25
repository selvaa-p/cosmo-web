"use client";
import React from 'react';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "What is CosmoHentorq Innovations?",
    answer: "CosmoHentorq Innovations is a leading technology company that specializes in research and development, artificial intelligence, UI/UX design, and cloud computing. We are committed to driving innovation and solving complex technical challenges."
  },
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including software development, AI solutions, cloud services, UI/UX design, and IT consulting. Our team of experts is dedicated to providing customized solutions to meet your business needs."
  },
  {
    question: "How can I contact you?",
    answer: "You can contact us via email at cosmohentorq@gmail.com, by phone at +91 7358404072, or by filling out the contact form on our website. We are always happy to hear from you!"
  },
  {
    question: "What is your approach to project management?",
    answer: "We follow a structured and agile approach to project management. We ensure clear communication, regular updates, and collaboration with our clients throughout the project lifecycle to deliver high-quality results."
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we offer custom solutions tailored to meet the unique needs of each client. Our team works closely with you to understand your requirements and develop solutions that align with your business goals."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a variety of industries including finance, retail, manufacturing, food industry and more. Our expertise and flexibility allow us to provide solutions across different sectors."
  }
];

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-custom-red mb-4">FAQs</h2>
        </div>
        
        <div className="faq-section">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item mb-6">
              <div
                className={`faq-question flex justify-between items-center cursor-pointer ${activeFaq === index ? 'active' : ''}`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                onMouseOver={() => setHoveredIndex(index)}
                onMouseOut={() => setHoveredIndex(null)}
                style={{
                  boxShadow: '0 4px 14px rgba(254, 192, 122, 0.3)',
                  background: hoveredIndex === index 
                    ? 'linear-gradient(135deg, #fed5a8 0%, #fec07a 100%)' 
                    : 'linear-gradient(135deg, #fec07a 0%,rgb(249, 161, 61) 100%)',
                  borderRadius: '10px',
                  padding: '15px 20px',
                  transition: 'all 0.3s ease'
                }}
              >
                <span className="text-text font-medium">{faq.question}</span>
                <FaChevronDown
                  className={`text-custom-red transition-transform duration-300 ${activeFaq === index ? 'transform rotate-180' : ''}`}
                />
              </div>
              <div 
                className={`faq-answer ${activeFaq === index ? 'active' : ''}`}
                style={{
                  background: 'linear-gradient(135deg, #fec07a 0%,rgb(251, 209, 161) 100%)',
                  borderRadius: '0 0 10px 10px',
                  maxHeight: activeFaq === index ? '1000px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.5s ease, padding 0.5s ease',
                  padding: activeFaq === index ? '15px 20px' : '0 20px',
                  boxShadow: activeFaq === index ? '0 4px 14px rgba(254, 192, 122, 0.3)' : 'none'
                }}
              >
                <p className={`${activeFaq === index ? 'active' : ''}`}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


