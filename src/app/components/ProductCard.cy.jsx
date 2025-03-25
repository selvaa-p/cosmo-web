import React from 'react';
import ProductCard from './ProductCard';

describe('<ProductCard />', () => {
  const productsData = [
    {
      name: "J.U.L.I.E",
      image: "/assets/brain.png",
      description: "A new standard in AI, combining multi-foundational design and limitless training to deliver unmatched intelligence and versatility.",
      link: "/products/julie"
    },
    {
      name: "H.A.K",
      image: "/assets/cloud.png",
      description: "Redefines storage with Teron for businesses and Infryn for homes, offering scalability at just 5 rupees per GB—no strings, one-time purchase freedom!",
      link: "/products/hak"
    },
    {
      name: "P.U.L.S.A.R",
      image: "/assets/glass.png",
      description: "A pioneering augmented reality, delivers unparalleled visualization and real-time interactivity, allowing users to engage with immersive elements that transform their environment.",
      link: "/products/pulsar"
    },
    {
      name: "Y.A.K.O",
      image: "/assets/food.png",
      description: "An autonomous food delivery robot revolutionizing efficiency with dynamic levitation, energy harvesting, self-healing materials, and adaptive AI.",
      link: "/products/yako"
    },
    {
      name: "Yet to Name",
      image: "/assets/lastj-Photoroom.jpg",
      description: "Arriving Soon...",
      link: "/products/coming-soon"
    }
  ];

  productsData.forEach((product, index) => {
    it(`renders ${product.name} correctly`, () => {
      cy.mount(<ProductCard product={product} />);

      // Ensure the product name is displayed
      cy.contains(product.name).should('exist');

      // Ensure the description is displayed
      cy.contains(product.description).should('exist');

      // Ensure the image is rendered correctly
      cy.get(`img[alt="${product.name}"]`).should('exist');

      // Ensure the product link works
      cy.get('a').should('have.attr', 'href', product.link);
    });
  });
});
