import { interceptStarredSinglePage } from '../support/intercepts'

/**
 * Which names are valid is settled by the unit tests in
 * `src/utils/validateUsername.test.ts`. These tests only ask whether the
 * validator is wired into the form at all: a name GitHub could never own
 * must not reach the network, and the user must be told why.
 */
describe('Username validation', function () {
  beforeEach(() => {
    interceptStarredSinglePage()
    cy.visit('/')
  })

  it('should not call the API when the username could not exist', () => {
    cy.get('.search-input').type('oct--ocat')
    cy.get('.search-button').click()

    cy.get('.search-error')
      .should('have.attr', 'role', 'alert')
      .and('contain', 'letters, numbers, and single hyphens')

    // The app never leaves the welcome screen, and no request is made.
    // (`.card` is not usable here: the welcome screen renders sample cards.)
    cy.get('.welcome').should('exist')
    cy.get('@starred.all').should('have.length', 0)
  })

  it('should mark the input invalid for assistive technology', () => {
    cy.get('.search-input').type('my_name')
    cy.get('.search-button').click()

    cy.get('.search-input').should('have.attr', 'aria-invalid', 'true')
  })

  it('should search normally once the name is corrected', () => {
    cy.get('.search-input').type('my_name')
    cy.get('.search-button').click()
    cy.get('.search-error').should('exist')

    cy.get('.search-input').clear().type('octocat')
    cy.get('.search-button').click()

    cy.get('.search-error').should('not.exist')
    cy.get('.search-input').should('not.have.attr', 'aria-invalid', 'true')
    cy.get('.card').should('have.length', 3)
    cy.get('@starred.all').should('have.length', 1)
  })

  it('should leave valid names untouched', () => {
    cy.get('.search-input').type('octo-cat')
    cy.get('.search-button').click()

    cy.get('.search-error').should('not.exist')
    cy.get('.card').should('have.length', 3)
  })
})
