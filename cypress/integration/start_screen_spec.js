describe('start screen test', function () {
  beforeEach(() => {
    cy.visit('/')
  })

  it('title', () => {
    cy.get('.top h1').contains('Enter GitHub username')
  })

  it('input from', () => {
    cy.get('.top label').within(() => {
      cy.get('input').should('have.attr', 'placeholder', 'Your GitHub username')
    })
  })

  it('footer', () => {
    cy.contains('footer', 'GitHub Star Sign is built with React')
    cy.contains('footer', 'Source is on GitHub')
  })
})
