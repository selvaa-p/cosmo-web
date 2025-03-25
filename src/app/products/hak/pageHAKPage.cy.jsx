import React from 'react'
import HAKPage from './page'

describe('<HAKPage />', () => {
  beforeEach(() => {
    cy.mount(<HAKPage />)
  })

  it('renders the main container with correct styling', () => {
    cy.get('div').should('have.class', 'min-h-screen')
      .and('have.class', 'bg-gradient-to-b')
      .and('have.class', 'from-gray-900')
      .and('have.class', 'to-black')
  })

  it('displays the navigation back link correctly', () => {
    cy.get('a[href="/#products"]').should('exist')
      .and('have.text', 'Back to Products')
      .and('have.class', 'text-blue-400')
    
    cy.get('svg').should('exist')
      .and('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
  })

  it('renders the hero section with all elements', () => {
    cy.get('h1').should('contain', 'H.A.K CLOUD SERVICE')
      .and('have.class', 'text-5xl')
    
    cy.get('h2').first().should('contain', 'Secure, Reliable Cloud Storage Solutions')
    
    cy.get('p').first().should('contain', 'Cosmohentorq Innovations Pvt Ltd')
    
    cy.get('img').should('exist')
      .and('have.attr', 'alt', 'H.A.K Cloud Service')
      .and('have.attr', 'width', '500')
      .and('have.attr', 'height', '500')
  })

  it('displays both service offerings (Teron and Infryn)', () => {
    cy.get('h2').contains('Our Solutions').should('exist')
    
    // Teron section
    cy.contains('h3', 'Teron').should('exist')
    cy.contains('p', 'Premium cloud storage solution designed specifically for business use').should('exist')
    cy.contains('h4', 'Storage Plans:').should('exist')
    cy.contains('li', 'Basic Plan: 100GB').should('exist')
    cy.contains('li', 'Standard Plan: 500GB').should('exist')
    cy.contains('li', 'Premium Plan: 1TB+').should('exist')
    cy.contains('p', 'Ideal for small to medium-sized enterprises').should('exist')
    
    // Infryn section
    cy.contains('h3', 'Infryn').should('exist')
    cy.contains('p', 'Affordable cloud storage solution designed for domestic users').should('exist')
    cy.contains('li', 'Basic Plan: 50GB').should('exist')
    cy.contains('li', 'Standard Plan: 200GB').should('exist')
    cy.contains('li', 'Premium Plan: 500GB+').should('exist')
    cy.contains('p', 'Perfect for individual users and households').should('exist')
  })

  it('shows all key features', () => {
    cy.contains('h2', 'Key Features').should('exist')
    
    const features = [
      'File Synchronization',
      'Secure File Sharing',
      'Automatic Backups',
      'Version Control',
      'Cross-Platform Access',
      'End-to-End Encryption'
    ]
    
    features.forEach(feature => {
      cy.contains('h3', feature).should('exist')
    })
  })

  it('displays pricing information correctly', () => {
    cy.contains('h2', 'Pricing').should('exist')
    
    // One-time purchase
    cy.contains('h3', 'One-Time Purchase').should('exist')
    cy.contains('p', '₹5 per GB').should('exist')
    cy.contains('p', 'Pay once for the storage you need').should('exist')
    
    // Annual maintenance
    cy.contains('h3', 'Annual Maintenance Fees').should('exist')
    cy.contains('h4', 'Basic Plan').should('exist')
    cy.contains('h4', 'Standard Plan').should('exist')
    cy.contains('h4', 'Premium Plan').should('exist')
    cy.contains('p', '₹100').should('exist')
    cy.contains('p', '₹250').should('exist')
    cy.contains('p', '₹500').should('exist')
  })

  it('shows mission and vision sections', () => {
    cy.contains('h2', 'Our Mission & Vision').should('exist')
    cy.contains('h3', 'Mission').should('exist')
    cy.contains('h3', 'Vision').should('exist')
    
    cy.contains('p', 'cost-effective, secure, and reliable cloud storage solutions').should('exist')
    cy.contains('p', 'leading provider of cloud storage services').should('exist')
  })

  it('displays customer support information', () => {
    cy.contains('h2', 'Customer Support').should('exist')
    cy.contains('h3', 'Support Channels').should('exist')
    cy.contains('li', 'Email Support').should('exist')
    cy.contains('li', 'Phone Support').should('exist')
    cy.contains('li', 'Live Chat').should('exist')
    
    cy.contains('h3', 'Knowledge Base').should('exist')
    cy.contains('h3', 'Service Level Agreements').should('exist')
  })

  it('has a working call to action button', () => {
    cy.contains('h2', 'Ready to secure your data with H.A.K?').should('exist')
    cy.contains('a', 'Get in Touch')
      .should('have.attr', 'href', '/#contact')
      .and('have.class', 'bg-blue-600')
  })

  it('has proper responsive classes', () => {
    // Check for responsive grid classes
    cy.get('div').contains('Our Solutions').parent()
      .next().find('div').should('have.class', 'grid-cols-1')
      .and('have.class', 'md:grid-cols-2')
    
    // Check for responsive flex direction
    cy.get('div').contains('H.A.K CLOUD SERVICE').parentsUntil('div.flex')
      .parent().should('have.class', 'flex-col')
      .and('have.class', 'lg:flex-row')
  })

  it('has proper accessibility attributes', () => {
    cy.get('img').should('have.attr', 'alt')
    cy.get('a').each(($el) => {
      expect($el).to.have.attr('href')
    })
    
    // Check for semantic HTML structure
    cy.get('h1').should('exist')
    cy.get('h2').should('have.length.at.least', 5)
    cy.get('h3').should('have.length.at.least', 8)
  })
})