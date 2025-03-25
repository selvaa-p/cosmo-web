import React from 'react'
import PulsarPage from './page'

describe('<PulsarPage />', () => {
  beforeEach(() => {
    cy.mount(<PulsarPage />)
  })
  it('has a working call to action button', () => {
    cy.contains('h2', 'Ready to experience P.U.L.S.A.R?').should('exist')
    cy.contains('a', 'Get in Touch')
      .should('have.attr', 'href', '/#contact')
      .and('have.class', 'bg-blue-600')
  })
})