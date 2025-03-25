import React from 'react'
import YakoPage from './page'

describe('<YakoPage />', () => {
  beforeEach(() => {
      cy.mount(<YakoPage />)
    })
    it('has a working call to action button', () => {
      cy.contains('h2', 'Ready to experience Y.A.K.O?').should('exist')
      cy.contains('a', 'Get in Touch')
        .should('have.attr', 'href', '/#contact')
        .and('have.class', 'bg-blue-600')
    })
  })