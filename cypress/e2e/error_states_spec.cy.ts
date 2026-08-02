import {
  interceptStarredEmpty,
  interceptStarredMalformed,
  interceptStarredSinglePage,
  interceptRateLimited,
  interceptUserNotFound,
} from '../support/intercepts'

const search = (username: string) => {
  cy.get('.search-input').type(username)
  cy.get('.search-button').click()
}

describe('Error and empty states', function () {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should explain that the user does not exist on a 404', () => {
    interceptUserNotFound()
    search('no-such-user')

    cy.get('.error-container').should('have.attr', 'role', 'alert')
    cy.get('.error-title').should('contain', 'User Not Found')
    cy.get('.error-message').should('contain', 'no-such-user')
    cy.get('.error-status').should('contain', '404')
  })

  it('should explain the rate limit on a 403', () => {
    interceptRateLimited()
    search('octocat')

    cy.get('.error-title').should('contain', 'API Rate Limit Exceeded')
    cy.get('.error-status').should('contain', '403')
  })

  it('should show the empty state when the user has starred nothing', () => {
    interceptStarredEmpty()
    search('octocat')

    cy.get('.no-star-container').should('have.attr', 'role', 'status')
    cy.get('.no-star-title').should('contain', 'No Starred Repositories')
    cy.get('.username').should('contain', 'octocat')
    cy.get('.card').should('not.exist')
  })

  it('should recover when a failed search is followed by a successful one', () => {
    interceptUserNotFound()
    search('no-such-user')
    cy.get('.error-title').should('contain', 'User Not Found')

    // The search bar stays usable after an error
    interceptStarredSinglePage()
    cy.get('.search-input').clear().type('octocat')
    cy.get('.search-button').click()

    cy.get('.error-container').should('not.exist')
    cy.get('.card').should('have.length', 3)
  })

  it('should keep the search usable when a repository fails to render', () => {
    // The thrown TypeError is the point of this test, not a test failure.
    cy.on('uncaught:exception', () => false)

    interceptStarredMalformed()
    search('octocat')

    cy.get('.error-title').should('contain', 'Could not display these results')

    // The search bar lives outside the boundary, so recovery is possible
    // without a reload.
    interceptStarredSinglePage()
    cy.get('.search-input').clear().type('octocat')
    cy.get('.search-button').click()

    cy.get('.error-title').should('not.exist')
    cy.get('.card').should('have.length', 3)
  })

  it('should send one request per search', () => {
    interceptStarredSinglePage()
    search('octocat')
    cy.get('.card').should('have.length', 3)

    cy.get('@starred.all').should('have.length', 1)
  })
})
