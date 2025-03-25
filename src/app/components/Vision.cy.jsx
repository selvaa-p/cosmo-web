import React from 'react'
import Vision from './Vision'

describe('<Vision />', () => {
  beforeEach(() => {
    cy.mount(<Vision />)
  })

  // Test initial rendering
  it('renders the main section elements', () => {
    cy.get('section').should('exist')
    cy.get('h2').should('contain.text', 'Our Vision')
    cy.contains('"Cosmo Hentorq" represents our commitment').should('be.visible')
  })

  // Test concept cards rendering
  it('renders all concept cards', () => {
    cy.get('.grid').children().should('have.length', 3)
    cy.contains('Cosmo').should('be.visible')
    cy.contains('Hentor').should('be.visible')
    cy.contains('Torque').should('be.visible')
  })

  // Test concept card interactions
  it('expands concept card on click and shows secondary icons', () => {
    // Click on Cosmo card
    cy.contains('.cursor-pointer', 'Cosmo').click()
    
    // Verify secondary icons are visible
    cy.contains('Boundless Innovation').should('be.visible')
    cy.contains('Universal Perspective').should('be.visible')
    cy.contains('Limitless Possibilities').should('be.visible')
    
    // Verify active state styling
    cy.contains('.cursor-pointer', 'Cosmo')
      .should('have.class', 'ring-4')
      .should('have.class', 'ring-custom-red')
  })

  // Test concept card toggle
  it('toggles concept card expansion', () => {
    // Click to expand
    cy.contains('.cursor-pointer', 'Hentor').click()
    cy.contains('Expert Guidance').should('be.visible')
    
    // Click again to collapse
    cy.contains('.cursor-pointer', 'Hentor').click()
    cy.contains('Expert Guidance').should('not.exist')
  })

  // Test multiple concept interactions
  it('handles multiple concept card interactions', () => {
    // Open first concept
    cy.contains('.cursor-pointer', 'Cosmo').click()
    cy.contains('Boundless Innovation').should('be.visible')
    
    // Open second concept - first should close
    cy.contains('.cursor-pointer', 'Hentor').click()
    cy.contains('Boundless Innovation').should('not.exist')
    cy.contains('Expert Guidance').should('be.visible')
  })

  // Test icons presence
  it('displays all required icons', () => {
    cy.get('svg').should('have.length.at.least', 3) // Main concept icons
    
    // Check specific icons after expanding
    cy.contains('.cursor-pointer', 'Torque').click()
    cy.get('svg').should('have.length.at.least', 6) // Main + secondary icons
  })

  // Test animations
  it('applies animations on view', () => {
    cy.get('.text-5xl').should('have.css', 'opacity', '1')
    cy.get('.text-xl').should('have.css', 'opacity', '1')
  })

  // Test responsive layout
  it('maintains responsive layout', () => {
    // Test mobile view
    cy.viewport('iphone-6')
    cy.get('.grid').should('have.class', 'grid-cols-1')
    
    // Test desktop view
    cy.viewport(1024, 768)
    cy.get('.grid').should('have.class', 'lg:grid-cols-3')
  })

  // Test for content accuracy
  it('displays correct content for each concept', () => {
    const concepts = [
      {
        title: 'Cosmo',
        description: 'evokes a sense of vastness and universal scope'
      },
      {
        title: 'Hentor',
        description: 'represents a guiding force'
      },
      {
        title: 'Torque',
        description: 'embodies the driving force'
      }
    ]

    concepts.forEach(concept => {
      cy.contains('.cursor-pointer', concept.title)
        .within(() => {
          cy.get('.text-text').should('contain.text', concept.description)
        })
    })
  })

  // Test quote section
  it('displays the vision quote', () => {
    cy.contains('Our vision transcends conventional IT solutions')
      .should('be.visible')
      .and('have.class', 'italic')
  })

  // Test accessibility
  it('meets basic accessibility requirements', () => {
    cy.get('h2').should('have.css', 'font-size').and('not.eq', '0px')
    cy.get('section').should('have.attr', 'class').and('include', 'min-h-screen')
  })

  // Updated animation classes test
  it('applies correct animation classes and styles', () => {
    // Check for transition classes
    cy.get('.transition-all').should('exist')
    
    // Check for animated elements
    cy.get('.container').within(() => {
      // Title section animations
      cy.get('h2').parent()
        .should('have.css', 'opacity')
        .and('not.eq', '0')
      
      // Concept cards animations
      cy.get('.grid').children()
        .should('have.length', 3)
        .each($card => {
          cy.wrap($card)
            .should('have.css', 'opacity')
            .and('not.eq', '0')
        })
    })
  })

  // Test for proper icon rendering in each concept
  it('renders correct icons for each concept', () => {
    // Test Cosmo icons
    cy.contains('.cursor-pointer', 'Cosmo').within(() => {
      cy.get('svg').should('exist')
    }).click()
    cy.contains('Boundless Innovation').parent().find('svg').should('exist')

    // Test Hentor icons
    cy.contains('.cursor-pointer', 'Hentor').within(() => {
      cy.get('svg').should('exist')
    }).click()
    cy.contains('Expert Guidance').parent().find('svg').should('exist')

    // Test Torque icons
    cy.contains('.cursor-pointer', 'Torque').within(() => {
      cy.get('svg').should('exist')
    }).click()
    cy.contains('Performance Driven').parent().find('svg').should('exist')
  })

  // Additional test for hover animations
  it('applies hover animations to concept cards', () => {
    cy.contains('.cursor-pointer', 'Cosmo')
      .trigger('mouseenter')
      .should('have.css', 'transform')
      .and('not.eq', 'none')
  })
})