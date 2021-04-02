// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Test Link Text', () => {
    cy.get('a').contains('Learn React')
  })

  it('Snapshot', () => {
    cy.percySnapshot()
  })
})