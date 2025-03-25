import React from 'react';
import JuliePage from './page';
describe('JuliePage Component', () => {
  beforeEach(() => {
    // Mount the component before each test
    cy.mount(<JuliePage />);
    // Wait for animations to complete with a longer timeout
    cy.wait(3000);
  });

  describe('Initial Rendering', () => {
    it('renders the main container', () => {
      cy.get('div.min-h-screen').should('exist')
        .and('have.class', 'bg-gradient-to-b');
    });

    it('displays the main title', () => {
      cy.contains('J.U.L.I.E. A.I.').should('be.visible');
      cy.contains('The Game Changer You Didn\'t Know You Needed').should('be.visible');
    });

    it('loads and displays the main image', () => {
      cy.get('img[alt="J.U.L.I.E AI"]')
        .should('be.visible')
        .and('have.attr', 'width', '400')
        .and('have.attr', 'height', '400');
    });
  });

  describe('Navigation', () => {
    it('has a working back to products link', () => {
      cy.get('a[href="/#products"]')
        .should('exist')
        .and('contain', 'Back to Products')
        .and('have.class', 'text-blue-400');
    });

    it('has a working contact link', () => {
      cy.get('a[href="/#contact"]')
        .should('exist')
        .and('contain', 'Get in Touch');
    });
  });


  describe('Responsive Behavior', () => {
    it('adapts to mobile viewport', () => {
      cy.viewport('iphone-x');
      cy.get('.container').should('be.visible');
      cy.get('.flex-col').should('exist');
    });

    it('adapts to tablet viewport', () => {
      cy.viewport('ipad-2');
      cy.get('.container').should('be.visible');
    });

    it('adapts to desktop viewport', () => {
      cy.viewport(1920, 1080);
      cy.get('.container').should('be.visible');
    });
  });

  describe('Animation Presence', () => {
    it('has motion elements', () => {
      // Look for Framer Motion's motion.div elements
      cy.get('[data-testid="motion-div"]').should('exist');
    });

    it('applies fade-in animations', () => {
      cy.get('[class*="opacity"]').should('exist');
    });
  });


  describe('Error Handling', () => {
    it('handles missing images gracefully', () => {
      // Intercept image requests and force them to fail
      cy.intercept('GET', '/assets/*', { statusCode: 404 });
      cy.mount(<JuliePage />);
      cy.get('.container').should('exist');
    });
  });

  describe('Performance', () => {
    it('loads images with correct attributes', () => {
      cy.get('img').each(($img) => {
        expect($img[0]).to.have.attr('src');
        expect($img[0]).to.have.attr('alt');
      });
    });
  });
});