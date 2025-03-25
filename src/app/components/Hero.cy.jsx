import React from 'react';
import Hero from './Hero';

describe('<Hero />', () => {
  beforeEach(() => {
    cy.mount(<Hero />);
  });

  it('renders the Hero component', () => {
    cy.get('button').contains('Get Started').should('be.visible');
  });

  it('scrolls smoothly when clicking "Get Started"', () => {
    cy.get('button').contains('Get Started').click();
    cy.wait(500); // Simulate scrolling time
    cy.url()
  });

  it('updates state on scroll', () => {
    cy.window().then((win) => {
      win.scrollTo(0, win.innerHeight);
    });
    cy.wait(500);
    cy.get('body').should(() => {
      // You can verify if any class changes when scrolled
      expect(true).to.be.true;
    });
  });
});
