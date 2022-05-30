export {}

describe('input user name', function () {
  beforeEach(() => {
    cy.visit('/')
  })

  it('input user name', () => {
    cy.get('.top label').within(() => {
      cy.get('input').type('hyuraku').type('{enter}')
    })
    cy.get('.card')
      .last()
      .within(() => {
        cy.get('.ui.header').contains('developer-roadmap')
        cy.get('.column').contains('kamranahmedse')
        cy.get('.ui.description').contains(
          'Roadmap to becoming a developer in 2022'
        )
      })
  })
})
