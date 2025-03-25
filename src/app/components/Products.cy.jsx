// src/app/components/Products.cy.jsx
import React from 'react'
import Products from './Products'

describe('<Products />', () => {
  beforeEach(() => {
    cy.mount(<Products />)
  })

  // Basic Rendering Tests
  describe('Component Rendering', () => {
    it('renders the component successfully', () => {
      cy.get('section').should('exist')
    })

    it('displays the correct section title', () => {
      cy.get('h2')
        .should('exist')
        .and('have.text', 'Our Products')
        .and('have.class', 'text-4xl')
        .and('have.class', 'text-custom-red')
    })
  })

  // Product Card Tests
  describe('Product Card Validation', () => {
    it('renders the correct number of product cards', () => {
      cy.get('[data-testid="product-card"]')
        .should('have.length', 5)
        .and('be.visible')
    })

    it('checks product card names', () => {
      const expectedProducts = [
        'J.U.L.I.E',
        'H.A.K',
        'P.U.L.S.A.R',
        'Y.A.K.O',
        'Yet to Name'
      ]

      cy.get('[data-testid="product-card"]').each(($card, index) => {
        cy.wrap($card)
          .find('h3')
          .should('have.text', expectedProducts[index])
          .and('be.visible')
      })
    })

    it('checks product card links', () => {
      const expectedLinks = [
        '/products/julie',
        '/products/hak',
        '/products/pulsar',
        '/products/yako',
        '/products/coming-soon'
      ]

      cy.get('[data-testid="product-card"]').each(($card, index) => {
        // Use a more flexible approach for link checking
        cy.wrap($card)
          .invoke('attr', 'data-link')
          .should('eq', expectedLinks[index])
      })
    })

    it('checks product card images', () => {
      const expectedImages = [
        '/assets/brain.png',
        '/assets/cloud.png',
        '/assets/glass.png',
        '/assets/food.png',
        '/assets/lastj-Photoroom.jpg'
      ]

      cy.get('[data-testid="product-card"]').each(($card, index) => {
        // Use a more flexible approach for image checking
        cy.wrap($card)
          .find('img')
          .should('be.visible')
          .and(($img) => {
            // Check if image src contains the expected image name
            const src = $img.attr('src')
            expect(src).to.include(expectedImages[index].replace('/assets/', ''))
          })
      })
    })
  })

  // Layout and Responsive Tests
  describe('Layout and Responsiveness', () => {
    it('verifies grid layout structure', () => {
      cy.get('section > div')
        .should('have.class', 'grid')
        .and('have.class', 'grid-cols-1')
        .and('have.class', 'md:grid-cols-3')
    })

    // Responsive Design Test
    const viewports = [
      { name: 'mobile', width: 375, height: 667, expectedColumns: 1 },
      { name: 'tablet', width: 768, height: 1024, expectedColumns: 3 },
      { name: 'desktop', width: 1024, height: 768, expectedColumns: 3 }
    ]

    viewports.forEach(({ name, width, height, expectedColumns }) => {
      it(`adapts layout for ${name} viewport`, () => {
        cy.viewport(width, height)
        
        // Check grid columns
        cy.get('section > div')
          .should('have.class', expectedColumns === 1 
            ? 'grid-cols-1' 
            : 'md:grid-cols-3'
          )

        // Verify product cards are still visible
        cy.get('[data-testid="product-card"]')
          .should('be.visible')
          .and('have.length', 5)
      })
    })
  })
})