import React from 'react';
import TeamSection from './TeamSection';

describe('TeamSection Component', () => {
  beforeEach(() => {
    // Stub image loading to control loading state
    cy.stub(Image.prototype, 'onload').callsFake(function() {
      // Delay image loading to test loading state
      setTimeout(() => {
        this.onload.restore()?.();
      }, 1000);
    });
    
    cy.mount(<TeamSection />);
  });

  it('displays loading state initially', () => {
    // Check loading spinner exists before images load
    cy.get('[data-testid="loading-spinner"]').should('exist');
    cy.get('[data-testid="loading-spinner"]').should('have.class', 'animate-spin');
    
    // Wait for loading to complete
    cy.get('img').should('be.visible');
    cy.get('[data-testid="loading-spinner"]').should('not.exist');
  });

  it('renders main section elements after loading', () => {
    // Wait for loading to complete
    cy.get('img').should('be.visible');
    
    cy.get('h2').contains('Meet Our Experts').should('be.visible');
    cy.get('h3').contains('Veins of CIPL').should('be.visible');
    cy.get('.grid').should('exist');
  });

  it('displays correct initial team member', () => {
    // Wait for loading to complete
    cy.get('img').should('be.visible');
    
    cy.get('h3').contains('Hariharan M').should('be.visible');
    cy.get('span').contains('CEO').should('be.visible');
  });

  it('navigates through team members using dots', () => {
    // Wait for loading to complete
    cy.get('img').should('be.visible');
    
    // Get initial member name
    cy.get('h3.text-2xl').invoke('text').as('initialMember');
    
    // Click second navigation dot
    cy.get('button[aria-label="View team member 2"]').click();
    
    // Wait for animation
    cy.wait(300);
    
    // Verify member changed
    cy.get('@initialMember').then((initialMember) => {
      cy.get('h3.text-2xl').should('not.contain', initialMember);
    });
  });

  it('auto-rotates team members', () => {
    // Wait for loading to complete
    cy.get('img').should('be.visible');
    
    // Get initial member name
    cy.get('h3.text-2xl').invoke('text').as('initialMember');
    
    // Wait for auto-rotation (6 seconds + buffer)
    cy.wait(6500);
    
    // Verify member changed
    cy.get('@initialMember').then((initialMember) => {
      cy.get('h3.text-2xl').should('not.contain', initialMember);
    });
  });

  it('handles mobile responsive layout', () => {
    // Wait for loading to complete
    cy.get('img').should('be.visible');
    
    // Test mobile viewport
    cy.viewport('iphone-x');
    cy.wait(500); // Wait for resize event to process
    
    // Verify mobile-specific classes and layouts
    cy.get('.grid').should('have.class', 'grid-cols-1');
    
    // Test desktop viewport
    cy.viewport(1024, 768);
    cy.wait(500); // Wait for resize event to process
    
    // Verify desktop-specific classes and layouts
    cy.get('.grid').should('have.class', 'lg:grid-cols-2');
  });

  it('preloads all team member images', () => {
    // Wait for all images to load
    cy.get('img').should('be.visible').and('have.length.gt', 0);
    
    // Check if all team member images are loaded
    cy.get('img').each(($img) => {
      expect($img[0].complete).to.be.true;
    });
  });

  it('displays correct member information on click', () => {
    // Wait for loading to complete
    cy.get('img').should('be.visible');
    
    // Click through all team members and verify content
    cy.get('button[aria-label^="View team member"]').each(($button, index) => {
      if (index < 3) { // Test first 3 members for efficiency
        cy.wrap($button).click();
        cy.wait(300); // Wait for animation
        
        // Verify member content is visible
        cy.get('.space-y-4').should('be.visible');
        cy.get('.text-2xl').should('be.visible');
        cy.get('.text-text').should('be.visible');
      }
    });
  });

  it('handles window resize events', () => {
    // Wait for loading to complete
    cy.get('img').should('be.visible');
    
    // Test mobile layout
    cy.viewport(500, 500);
    cy.wait(500); // Wait for resize event to process
    cy.get('.grid').should('have.class', 'grid-cols-1');
    
    // Test desktop layout
    cy.viewport(1024, 768);
    cy.wait(500); // Wait for resize event to process
    cy.get('.grid').should('have.class', 'lg:grid-cols-2');
  });

  it('maintains circular navigation order', () => {
    // Wait for loading to complete
    cy.get('img').should('be.visible');
    
    // Get total number of navigation dots
    cy.get('button[aria-label^="View team member"]').its('length').then((totalMembers) => {
      // Click through all members and back to first
      for (let i = 0; i < totalMembers + 1; i++) {
        cy.get('button[aria-label^="View team member"]').eq(i % totalMembers).click();
        cy.wait(300);
      }
      
      // Verify we're back to the first member
      cy.get('h3.text-2xl').should('contain', 'Hariharan M');
    });
  });

  it('handles animation classes correctly', () => {
    // Wait for loading to complete
    cy.get('img').should('be.visible');
    
    cy.get('.text-center')
      .should('have.class', 'mb-20')
      .find('h2')
      .should('have.class', 'text-4xl');

    // Verify gradient animation
    cy.get('.bg-gradient-to-r')
      .should('exist')
      .and('be.visible');
  });
});