describe('input user name', function () {
  beforeEach(() => {
    cy.visit('/')
  })

  it('input user name', () => {
    cy.get('.top label').within(() => {
      cy.intercept('/users').as('getStars')
      cy.get('input')
        .type('hyuraku')
        .type('{enter}')
      cy.wait('@getStars')
      cy.wait('@getStars')
      cy.wait('@getStars')
      cy.wait('@getStars')
    })    
  })
})
