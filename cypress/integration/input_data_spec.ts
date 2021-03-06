export {}

describe('input user name', function () {
  beforeEach(() => {
    cy.visit('/')
  })

  it('input user name', () => {
    cy.get('.top label').within(() => {
      cy.intercept('/users').as('getStars')
      cy.get('input').type('hyuraku').type('{enter}')
      for (let i = 0; i < 4; i++) {
        cy.wait('@getStars')
      }
    })
    cy.get('.card')
      .last()
      .within(() => {
        cy.get('.ui.header').contains('developer-roadmap')
        cy.get('.column').contains('kamranahmedse')
        cy.get('.ui.description').contains(
          'Roadmap to becoming a web developer in 2021'
        )
      })
  })
})
