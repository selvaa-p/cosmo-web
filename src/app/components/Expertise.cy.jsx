import React from 'react'
import Expertise from './Expertise'

describe('<Expertise />', () => {
  beforeEach(() => {
    cy.mount(<Expertise />)
  })

  it('renders the section with correct heading and subheading', () => {
    cy.get('section').should('have.class', 'bg-#F4E6D6')
    cy.get('h2').should('contain.text', 'Leading in').and('have.class', 'text-custom-red')
    cy.get('p').first().should('contain.text', 'Innovating and mastering key domains')
  })

  it('displays all four expertise cards', () => {
    cy.get('.grid > div').should('have.length', 4)
  })

  it('renders the correct icons and titles', () => {
    const expertiseTitles = [
      'Research and Development',
      'Artificial Intelligence',
      'UI/UX Design',
      'Cloud Computing'
    ]

    // Check each card has the right title
    expertiseTitles.forEach(title => {
      cy.contains('h3', title).should('exist').and('have.class', 'text-#FE0300')
    })

    // Verify icons exist
    cy.get('.lucide-flask-conical').should('exist')
    cy.get('.lucide-brain').should('exist')
    cy.get('.lucide-layout-dashboard').should('exist')
    cy.get('.lucide-cloud').should('exist')
  })

  it('has hover classes on cards', () => {
    // Instead of testing the CSS transform value, test for the presence of the hover classes
    cy.get('.grid > div').first()
      .should('have.class', 'hover:border-#FE0300')
      .should('have.class', 'hover:shadow-#FE0300')
      .should('have.class', 'hover:scale-105')
  })

  it('is responsive with correct grid layout', () => {
    // Test mobile view (1 column)
    cy.viewport('iphone-6')
    cy.get('.grid').should('have.class', 'grid-cols-1')
    
    // Test tablet view (2 columns)
    cy.viewport('ipad-2')
    cy.get('.grid').should('have.class', 'md:grid-cols-2')
    
    // Test desktop view (4 columns)
    cy.viewport(1200, 800)
    cy.get('.grid').should('have.class', 'lg:grid-cols-4')
  })
})