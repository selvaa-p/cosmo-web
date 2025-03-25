import React from 'react';
import PrivacyPolicy from './page';

describe('PrivacyPolicy Component', () => {
  beforeEach(() => {
    cy.mount(<PrivacyPolicy />);
  });

  describe('Basic Rendering', () => {
    it('renders the main container', () => {
      cy.get('.min-h-screen').should('exist');
    });

    it('renders the header', () => {
      cy.get('.sticky').should('exist');
      cy.get('.sticky').should('have.class', 'top-0');
    });

    it('renders the footer', () => {
      cy.get('footer').should('exist');
    });
  });

  describe('Hero Section', () => {
    it('renders hero section with correct content', () => {
      // Check the hero section by its unique classes and content
      cy.get('[class*="bg-gradient-to-r"]').contains('Privacy Policy')
        .should('exist')
        .parent()
        .within(() => {
          cy.get('h1').contains('Privacy Policy').should('exist');
          cy.get('p').contains('Your privacy is important to us').should('exist');
        });
    });
  });

  describe('Content Sections', () => {
    it('renders all main sections', () => {
      const sections = [
        'Information We Collect',
        'How We Use Your Information',
        'Information Sharing and Disclosure',
        'Cookies and Similar Technologies',
        'Enterprise Products',
        'Security',
        'Your Rights and Control Over Personal Data',
        'Privacy Portal',
        'Contact Us'
      ];

      sections.forEach(section => {
        cy.contains('h2', section).should('exist');
      });
    });

    it('renders information collection list items', () => {
      cy.contains('h2', 'Information We Collect')
        .parent()
        .parent()
        .find('li')
        .should('have.length.at.least', 4);
    });
  });

  describe('Interactive Elements', () => {
    it('renders and handles contact button click', () => {
      cy.get('a').contains('Contact Us').should('have.attr', 'href', '/#contact');
    });

    it('renders privacy portal link', () => {
      cy.get('a[href="/privacy-portal"]').should('exist');
    });
  });

  describe('Icons', () => {
    it('renders all required icons', () => {
      // Check for icon containers
      cy.get('.w-6.h-6.text-primary').should('have.length.at.least', 9);
      cy.get('[class*="text-highlight"]').should('exist');
    });
  });

  describe('Responsive Design', () => {
    it('maintains layout at different viewport sizes', () => {
      const viewports = [
        ['iphone-6', 375, 667],
        ['ipad-2', 768, 1024],
        ['macbook-13', 1280, 800]
      ];

      viewports.forEach(([device, width, height]) => {
        cy.viewport(device);
        cy.get('.min-h-screen').should('be.visible');
        cy.get('.container').should('exist');
        cy.get('h1').contains('Privacy Policy').should('exist');
      });
    });
  });

  describe('Content Verification', () => {
    it('displays the last updated date', () => {
      cy.contains('Last updated:').should('exist');
    });

    it('contains all required privacy sections', () => {
      cy.get('.prose').within(() => {
        cy.contains('Cosmohentorq Innovations Pvt. Ltd.').should('exist');
        cy.contains('Information Technology Act, 2000').should('exist');
        cy.contains('We do not sell your data').should('exist');
      });
    });

    it('verifies all list items have proper structure', () => {
      cy.get('li').each($li => {
        cy.wrap($li)
          .find('.bg-primary')
          .should('exist');
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      cy.get('h1').contains('Privacy Policy').should('exist');
      cy.get('h2').should('have.length.at.least', 8);
    });

    it('ensures all links have href attributes', () => {
      cy.get('a').each($link => {
        cy.wrap($link).should('have.attr', 'href');
      });
    });
  });

  describe('Error Handling', () => {
    it('handles missing props gracefully', () => {
      cy.mount(<PrivacyPolicy />);
      cy.get('.min-h-screen').should('exist');
    });
  });

  describe('Style Verification', () => {
    it('applies correct background colors', () => {
      cy.get('.bg-background').should('exist');
      cy.get('.bg-light-bg').should('exist');
    });

    it('applies correct text styles', () => {
      cy.get('[class*="text-3xl"]').should('exist');
      cy.get('.font-bold').should('exist');
    });

    it('verifies gradient backgrounds', () => {
      cy.get('[class*="bg-gradient-to-r"]').should('exist');
    });

    it('verifies shadow effects', () => {
      cy.get('.shadow-md').should('exist');
      cy.get('.shadow-lg').should('exist');
    });
  });

  describe('Layout Structure', () => {
    it('verifies proper section spacing', () => {
      // Check that most sections have mb-10 except the last one
      cy.get('section').each(($section, index, $list) => {
        if (index < $list.length - 1) {
          cy.wrap($section).should('have.class', 'mb-10');
        }
      });
    });

    it('checks container alignment', () => {
      cy.get('.container').should('have.class', 'mx-auto');
    });

    it('verifies proper padding', () => {
      cy.get('.px-4').should('exist');
      cy.get('.py-8').should('exist');
    });
  });
});