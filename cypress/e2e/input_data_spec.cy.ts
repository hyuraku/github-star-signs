export {}

describe('input user name', function () {
  beforeEach(() => {
    cy.visit('/')
  })

  it('input user name', () => {
    cy.get('.top label').within(() => {
      cy.intercept('/users').as('getStars')
      cy.get('input').type('hyuraku').type('{enter}')
      cy.wait(10000)
    })
    cy.get('.card')
      .last()
      .within(() => {
        cy.get('.ui.header').contains('developer-roadmap')
        cy.get('.column').contains('kamranahmedse')
        expect(cy.get('.ui.description')).to.exist
      })
  })
})
