import React from 'react'
import Footer from './Footer'

describe('<Footer />', () => {
  beforeEach(() => {
    cy.mount(<Footer />)
  })

  it('renders the footer component', () => {
    cy.get('footer').should('exist')
    cy.get('footer').should('have.class', 'bg-text')
  })

  it('displays all social media icons', () => {
    cy.get('a').find('svg').should('have.length', 5)
    cy.get('a').find('.fa6SvgIcon').should('have.length', 5)
  })

  it('has correct links for social media icons', () => {
    // Facebook
    cy.get('a').eq(0)
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer')
      .find('svg').should('exist')

    // Twitter/X
    cy.get('a').eq(1)
      .should('have.attr', 'href', 'https://x.com/cosmohento88115?t=fj8rO50a3RvB7CE18svGuw&s=09')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer')
      .find('svg').should('exist')

    // Instagram
    cy.get('a').eq(2)
      .should('have.attr', 'href', 'https://www.instagram.com/cosmohentorq?igsh=YzljYTk1ODg3Zg')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer')
      .find('svg').should('exist')

    // LinkedIn
    cy.get('a').eq(3)
      .should('have.attr', 'href', '#')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer')
      .find('svg').should('exist')

    // YouTube
    cy.get('a').eq(4)
      .should('have.attr', 'href', '#')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer')
      .find('svg').should('exist')
  })

  it('has functioning hover effects on social icons', () => {
    // Test hover effects
    cy.get('a').eq(0).trigger('mouseover')
      .should('have.class', 'hover:text-facebook')
    
    cy.get('a').eq(1).trigger('mouseover')
      .should('have.class', 'hover:text-twitter')
    
    cy.get('a').eq(2).trigger('mouseover')
      .should('have.class', 'hover:text-instagram')
    
    cy.get('a').eq(3).trigger('mouseover')
      .should('have.class', 'hover:text-linkedin')
    
    cy.get('a').eq(4).trigger('mouseover')
      .should('have.class', 'hover:text-youtube')
  })

  it('displays privacy policy link', () => {
    cy.get('a[href="/privacy-policy"]')
      .should('exist')
      .should('have.text', 'Privacy Policy')
      .should('have.class', 'text-highlight')
      .should('have.class', 'hover:text-primary')
  })

  it('displays correct copyright text', () => {
    cy.get('div.text-sm')
      .should('exist')
      .should('contain.text', '© 2025 Cosmohentorq Innovations Pvt. Ltd. All Rights Reserved.')
      .should('have.class', 'text-highlight')
  })

  it('has proper responsive layout structure', () => {
    cy.get('div.container').should('exist')
    cy.get('div.container > div').should('have.length', 3)
    cy.get('div.container > div').eq(0).should('have.class', 'flex')
    cy.get('div.container > div').eq(0).should('have.class', 'justify-center')
  })

  it('verifies privacy policy link navigation', () => {
    // Use a stub to prevent actual navigation in the test
    cy.get('a[href="/privacy-policy"]').should('exist')
    // In a real app, you might want to test navigation 
    // but in component testing, we just verify it exists
  })

})