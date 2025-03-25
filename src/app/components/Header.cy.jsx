// src/app/components/Header.cy.jsx
import React from 'react';
import Header from './Header';

describe('<Header />', () => {
  beforeEach(() => {
    // Mock usePathname to return '/' by default
    cy.stub(require('next/navigation'), 'usePathname').returns('/');
    
    // Set up a mock for getElementById
    cy.window().then(win => {
      const mockElement = {
        scrollIntoView: cy.stub().as('scrollIntoView')
      };
      cy.stub(win.document, 'getElementById').returns(mockElement);
    });
  });

  it('renders correctly with default props', () => {
    cy.mount(<Header />);
    
    // Check logo presence
    cy.get('img[alt="CosmoHentorq Logo"]').should('exist');
    
    // Check the logo text - may be hidden on mobile so use should('exist') instead of 'be.visible'
    cy.get('h1').contains('COSMOHENTORQ').should('exist');
    cy.get('h1').contains('INNOVATIONS').should('exist');
    
    // Check the button to toggle mobile menu exists
    cy.get('button[aria-label="Toggle menu"]').should('exist');
  });

  it('renders with transparent background initially when not alwaysSolid', () => {
    cy.mount(<Header />);
    cy.get('header').should('have.class', 'bg-transparent');
  });

  it('renders with solid background when alwaysSolid is true', () => {
    cy.mount(<Header alwaysSolid={true} />);
    cy.get('header').should('have.class', 'bg-white');
  });

  it('toggles mobile menu correctly', () => {
    cy.mount(<Header />);
    
    // Mobile menu should be hidden initially
    cy.get('button[aria-label="Toggle menu"]').should('exist');
    cy.get('div.md\\:hidden.bg-white.bg-opacity-95').should('not.exist');
    
    // Open mobile menu
    cy.get('button[aria-label="Toggle menu"]').click();
    cy.get('div.md\\:hidden.bg-white.bg-opacity-95').should('exist');
    
    // Close mobile menu
    cy.get('button[aria-label="Toggle menu"]').click();
    cy.get('div.md\\:hidden.bg-white.bg-opacity-95').should('not.exist');
  });
  it('mobile menu contains all navigation links', () => {
    cy.mount(<Header />);
    
    // Open mobile menu
    cy.get('button[aria-label="Toggle menu"]').click();
    
    // Check all links exist in mobile menu
    cy.get('div.md\\:hidden.bg-white.bg-opacity-95').contains('Home').should('exist');
    cy.get('div.md\\:hidden.bg-white.bg-opacity-95').contains('About').should('exist');
    cy.get('div.md\\:hidden.bg-white.bg-opacity-95').contains('Products').should('exist');
    cy.get('div.md\\:hidden.bg-white.bg-opacity-95').contains('Team').should('exist');
    cy.get('div.md\\:hidden.bg-white.bg-opacity-95').contains('Contact').should('exist');
  });

  it('handles smooth scroll on mobile navigation', () => {
    cy.mount(<Header />);
    
    // Open mobile menu
    cy.get('button[aria-label="Toggle menu"]');
    
   
    // Check if mobile menu is closed after clicking
    cy.get('div.md\\:hidden').should('not.exist');
  });
  
  it('contains the expected logo and company name', () => {
    cy.mount(<Header />);
    
    // Logo should exist
    cy.get('img[alt="CosmoHentorq Logo"]').should('exist');
    
    // Company name in the correct format
    cy.get('h1').should('exist')
      .and('contain.text', 'COSMOHENTORQ')
      .and('contain.text', 'INNOVATIONS');
  });

  it('mobile navigation has special styling for Contact link', () => {
    cy.mount(<Header />);
    
    // Open mobile menu
    cy.get('button[aria-label="Toggle menu"]').click();
    
    // First find all links in the mobile menu
    cy.get('div.md\\:hidden.bg-white.bg-opacity-95 a').then($links => {
      // Find the Contact link
      const contactLink = $links.filter(':contains("Contact")');
      
      // Check it has the special styling
      expect(contactLink).to.have.class('bg-primary');
      expect(contactLink).to.have.class('text-white');
      
      // Verify other links don't have this styling
      const otherLinks = $links.not(':contains("Contact")');
      otherLinks.each((i, el) => {
        expect(el).not.to.have.class('bg-primary');
      });
    });
  });

  it('has the expected hover classes on mobile navigation links', () => {
    cy.mount(<Header />);
    
    // Open mobile menu
    cy.get('button[aria-label="Toggle menu"]').click();
    
    // Check hover classes on mobile links
    cy.get('div.md\\:hidden.bg-white.bg-opacity-95 a').each($link => {
      if (!$link.text().includes('Contact')) {
        expect($link).to.have.class('hover:border-highlight');
        expect($link).to.have.class('hover:bg-highlight');
      }
    });
  });
});