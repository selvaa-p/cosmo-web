import React from 'react';
import Contact from './Contact';

describe('<Contact />', () => {
  beforeEach(() => {
    cy.mount(<Contact />);
    // Wait for animations to complete
    cy.wait(500);
  });

  it('renders the component with all sections', () => {
    // Check headings
    cy.contains('Contact Us').should('be.visible');
    cy.contains('Our Information').should('be.visible');
    cy.contains('Send us a message').should('be.visible');

    // Check if contact info section is visible
    cy.get('#contact-info').should('be.visible');
    cy.get('#contact-form').should('be.visible');
  });

  it('displays all contact information correctly', () => {
    // Check address info
    cy.contains('Our Location').should('be.visible');
    cy.contains('250, Malleeswari nagar, Madambakkam').should('be.visible');
    
    // Check phone info
    cy.contains('Call Us').should('be.visible');
    cy.contains('+91 7358404072').should('be.visible');
    cy.contains('Monday-Friday, 9AM-5PM').should('be.visible');
    
    // Check email info
    cy.contains('Email Us').should('be.visible');
    cy.contains('cosmohentorq@gmail.com').should('be.visible');
  });

  it('displays Google Maps iframe', () => {
    cy.get('iframe').should('be.visible')
      .should('have.attr', 'src')
      .and('include', 'google.com/maps');
  });

  it('has all form fields and submit button', () => {
    // Test form fields exist
    cy.get('#name').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#subject').should('be.visible');
    cy.get('#message').should('be.visible');
    
    // Test submit button
    cy.contains('Send Message').should('be.visible');
  });

  it('allows user to input data in all form fields', () => {
    // Type in all fields and verify the values
    cy.get('#name').type('Test User').should('have.value', 'Test User');
    cy.get('#email').type('test@example.com').should('have.value', 'test@example.com');
    cy.get('#subject').type('Test Subject').should('have.value', 'Test Subject');
    cy.get('#message').type('This is a test message').should('have.value', 'This is a test message');
  });

  it('submit button has proper styling classes', () => {
    // Check for the right classes that would enable hover effects
    cy.contains('Send Message')
      .should('have.class', 'transition-all')
      .should('have.class', 'duration-300')
      .should('have.class', 'hover:bg-secondary')
      .should('have.class', 'hover:shadow-lg')
      .should('have.class', 'hover:-translate-y-1');
    
    // Check that the initial style is set
    cy.contains('Send Message')
      .should('have.attr', 'style')
      .and('include', 'linear-gradient');
  });

  it('verifies animation classes are removed after mounting', () => {
    // After the useEffect timeout, these classes should be removed
    cy.get('#contact-info')
      .should('not.have.class', 'opacity-0')
      .should('not.have.class', 'translate-y-8');
    
    cy.get('#contact-form')
      .should('not.have.class', 'opacity-0')
      .should('not.have.class', 'translate-y-8');
  });

  it('checks if form submission event works', () => {
    // Create a spy to verify form submission
    const formSubmitSpy = cy.spy().as('formSubmitSpy');
    
    // Stub the form submission
    cy.get('form').then($form => {
      $form.on('submit', e => {
        e.preventDefault();
        formSubmitSpy();
      });
    });
    
    // Fill form and submit
    cy.get('#name').type('Test User');
    cy.get('#email').type('test@example.com');
    cy.get('#subject').type('Test Subject');
    cy.get('#message').type('This is a test message');
    cy.contains('Send Message').click();
    
    // Verify the spy was called
    cy.get('@formSubmitSpy').should('have.been.called');
  });

  it('verifies responsive layout changes', () => {
    // Test in mobile viewport
    cy.viewport('iphone-x');
    // For mobile view - should have 'grid-cols-1' class
    cy.get('.grid').should('have.class', 'grid-cols-1');
    
    // Test in desktop viewport - larger than lg breakpoint
    cy.viewport(1200, 800);
    // For desktop view - should have 'lg:grid-cols-2' class
    cy.get('.grid').should('have.class', 'lg:grid-cols-2');
  });

  it('checks icon containers have proper styling classes', () => {
    // Check that the icon containers have the right classes for hover effects
    cy.get('.w-12.h-12.rounded-lg')
      .first()
      .should('have.class', 'transition-all')
      .should('have.class', 'duration-300')
      .should('have.class', 'hover:scale-110');
  });
});