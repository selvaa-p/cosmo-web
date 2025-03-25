import React from 'react'
import Faq from './Faq'

describe('<Faq />', () => {
  beforeEach(() => {
    cy.mount(<Faq />)
  })

  it('renders the FAQ section with the correct title', () => {
    cy.get('h2').should('contain.text', 'FAQs')
    cy.get('h2').should('have.class', 'text-custom-red')
  })

  it('displays all FAQ items from the data', () => {
    // There should be 6 FAQ items based on the provided data
    cy.get('.faq-item').should('have.length', 6)
    
    // Verify the first question text
    cy.get('.faq-item').first().find('.faq-question span')
      .should('contain.text', 'What is CosmoHentorq Innovations?')
  })

  it('toggles FAQ answers when questions are clicked', () => {
    // Initially all answers should be collapsed
    cy.get('.faq-answer.active').should('not.exist')
    
    // Click the first question
    cy.get('.faq-item').first().find('.faq-question').click()
    
    // The first answer should be visible
    cy.get('.faq-item').first().find('.faq-answer')
      .should('have.class', 'active')
      .and('have.css', 'max-height', '1000px')
    
    // Answer text should be visible
    cy.get('.faq-item').first().find('.faq-answer p')
      .should('be.visible')
      .and('contain.text', 'CosmoHentorq Innovations is a leading technology company')
    
    // Click the same question again to collapse
    cy.get('.faq-item').first().find('.faq-question').click()
    
    // The answer should be collapsed
    cy.get('.faq-item').first().find('.faq-answer')
      .should('not.have.css', 'max-height', '1000px')
  })

  it('rotates the chevron icon when FAQ is expanded/collapsed', () => {
    // Initially, chevron should point down
    cy.get('.faq-item').first().find('svg') // Using svg instead of class selector
      .should('not.have.class', 'rotate-180')
    
    // Click to expand
    cy.get('.faq-item').first().find('.faq-question').click()
    
    // Chevron should rotate to point up
    cy.get('.faq-item').first().find('svg') // Using svg instead of class selector
      .should('have.class', 'rotate-180')
    
    // Click to collapse
    cy.get('.faq-item').first().find('.faq-question').click()
    
    // Chevron should rotate back to point down
    cy.get('.faq-item').first().find('svg') // Using svg instead of class selector
      .should('not.have.class', 'rotate-180')
  })

  it('changes background on hover', () => {
    // Get the original background
    cy.get('.faq-item').first().find('.faq-question')
      .invoke('css', 'background')
      .then((originalBackground) => {
        // Hover over the element
        cy.get('.faq-item').first().find('.faq-question').trigger('mouseover')
        
        // Check if background changed
        cy.get('.faq-item').first().find('.faq-question')
          .should(($el) => {
            const hoverBackground = $el.css('background')
            expect(hoverBackground).not.to.eq(originalBackground)
          })
        
        // Move mouse away
        cy.get('.faq-item').first().find('.faq-question').trigger('mouseout')
        
        // Check if background returned to original
        cy.get('.faq-item').first().find('.faq-question')
          .should(($el) => {
            const afterHoverBackground = $el.css('background')
            expect(afterHoverBackground).to.eq(originalBackground)
          })
      })
  })

  it('closes an open FAQ when another is clicked', () => {
    // Open the first FAQ
    cy.get('.faq-item').eq(0).find('.faq-question').click()
    cy.get('.faq-item').eq(0).find('.faq-answer').should('have.class', 'active')
    
    // Open the second FAQ
    cy.get('.faq-item').eq(1).find('.faq-question').click()
    
    // The first FAQ should be closed
    cy.get('.faq-item').eq(0).find('.faq-answer').should('not.have.class', 'active')
    
    // The second FAQ should be open
    cy.get('.faq-item').eq(1).find('.faq-answer').should('have.class', 'active')
  })

  it('applies the correct styles to active and inactive FAQ items', () => {
    // Click to activate the first FAQ
    cy.get('.faq-item').first().find('.faq-question').click()
    
    // Check active FAQ styling
    cy.get('.faq-item').first().find('.faq-answer')
      .should('have.css', 'box-shadow')
      .and('not.eq', 'none')
    
    // Check inactive FAQ styling
    cy.get('.faq-item').eq(1).find('.faq-answer')
      .should('have.css', 'box-shadow', 'none')
  })
})