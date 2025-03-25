import React from 'react';
import Home from '../../src/app/page';

describe('Home Component', () => {
  beforeEach(() => {
    // Mount the component before each test
    cy.mount(<Home />);
    
    // Stub Intersection Observer
    cy.window().then((window) => {
      const observerCallback = (entries) => {
        entries.forEach(entry => {
          entry.target.dispatchEvent(
            new CustomEvent('intersection', {
              detail: { isIntersecting: entry.isIntersecting }
            })
          );
        });
      };
      
      class MockIntersectionObserver {
        constructor(callback) {
          this.callback = callback;
        }
        
        observe(element) {
          // Simulate intersection after a short delay
          setTimeout(() => {
            this.callback([
              {
                target: element,
                isIntersecting: true,
                boundingClientRect: element.getBoundingClientRect(),
                intersectionRatio: 1,
                intersectionRect: element.getBoundingClientRect(),
                rootBounds: null,
                time: Date.now(),
              }
            ]);
          }, 100);
        }
        
        unobserve() {}
        disconnect() {}
      }

      window.IntersectionObserver = MockIntersectionObserver;
    });
  });

  it('renders all main sections', () => {
    // Check if all main section containers exist
    const sections = [
      'home',
      'about',
      'expertise',
      'products',
      'team',
      'faq',
      'contact',
      'footer'
    ];

    sections.forEach(section => {
      cy.get(`#${section}`).should('exist');
    });
  });

  it('includes header component', () => {
    // Check for header element instead of component name
    cy.get('header').should('exist');
  });

  it('applies correct classes to sections', () => {
    const sections = [
      'home',
      'about',
      'expertise',
      'products',
      'team',
      'faq',
      'contact'
    ];

    sections.forEach(section => {
      cy.get(`#${section}`)
        .should('have.class', 'transition-opacity')
        .should('have.class', 'duration-1000');
    });
  });

  describe('Scroll Behavior', () => {
    it('sections are initially rendered', () => {
      // Verify initial render state
      cy.get('#home').should('exist');
      cy.get('#about').should('exist');
      cy.get('#expertise').should('exist');
      cy.get('#products').should('exist');
      cy.get('#team').should('exist');
      cy.get('#faq').should('exist');
      cy.get('#contact').should('exist');
    });

    it('handles scroll events', () => {
      // Check if sections respond to scroll
      cy.get('#about').scrollIntoView({ duration: 500 });
      cy.get('#expertise').scrollIntoView({ duration: 500 });
      cy.get('#products').scrollIntoView({ duration: 500 });
    });
  });

  describe('Layout and Structure', () => {
    it('has proper document structure', () => {
      cy.get('main').should('exist');
      cy.get('header').should('exist');
      cy.get('#footer').should('exist');
    });

    it('main container has correct classes', () => {
      cy.get('main').should('have.class', 'overflow-x-hidden');
    });
  });

  describe('Performance', () => {
    it('loads and renders within acceptable time', () => {
      const startTime = performance.now();
      cy.mount(<Home />).then(() => {
        const endTime = performance.now();
        const renderTime = endTime - startTime;
        expect(renderTime).to.be.lessThan(1000);
      });
    });
  });

  describe('Error Handling', () => {
    it('renders without intersection observer', () => {
      cy.window().then((window) => {
        window.IntersectionObserver = undefined;
        cy.mount(<Home />);
        cy.get('main').should('exist');
        cy.get('#home').should('exist');
      });
    });
  });
});