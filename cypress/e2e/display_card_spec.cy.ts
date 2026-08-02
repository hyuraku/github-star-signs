import {
  interceptStarredSinglePage,
  interceptStarredWithMorePages,
} from '../support/intercepts'

const search = (username: string) => {
  cy.get('.search-input').type(username)
  cy.get('.search-button').click()
}

describe('Repository Cards Display', function () {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display repository cards with correct structure after searching', () => {
    interceptStarredSinglePage()
    search('octocat')

    // Wait for loading to complete
    cy.get('.loading-container').should('not.exist')

    // Verify that cards are displayed
    cy.get('.card').should('have.length', 3)

    // Verify first card has the correct structure
    cy.get('.card').first().within(() => {
      // Check that header link exists and is visible
      cy.get('.card-header a')
        .should('be.visible')
        .should('have.attr', 'href')
        .and('include', 'github.com')

      cy.get('.card-header a')
        .should('have.attr', 'target', '_blank')

      // Check that metadata section exists
      cy.get('.card-meta').should('exist')

      // Check that owner, language, and stars are displayed
      cy.get('.column').should('have.length', 3)

      // Check that owner column exists
      cy.get('.column').first().should('have.attr', 'aria-label', 'Repository owner')

      // Check that language column exists
      cy.get('.column').eq(1).should('have.attr', 'aria-label', 'Programming language')

      // Check that stars column exists and contains star icon
      cy.get('.column').last().should('have.attr', 'aria-label').and('include', 'stars')

      // Check that description exists (even if empty)
      cy.get('.card-description').should('exist')
    })
  })

  it('should display loading indicator when loading more repositories', () => {
    interceptStarredWithMorePages()
    search('octocat')

    // Wait for initial load
    cy.get('.loading-container').should('not.exist')

    // Scroll to bottom to trigger infinite scroll
    cy.scrollTo('bottom')

    // Check that loading indicator appears
    cy.get('.loading-more').should('be.visible')
    cy.get('.spinner-small').should('be.visible')
    cy.get('.loading-more-text').should('contain', 'Loading more repositories')
  })

  it('should append the next page once infinite scroll resolves', () => {
    interceptStarredWithMorePages()
    search('octocat')

    cy.get('.loading-container').should('not.exist')
    cy.get('.card').should('have.length', 100)

    cy.scrollTo('bottom')

    // The second page adds 20 more cards and then stops requesting
    cy.get('.card').should('have.length', 120)
    cy.get('.load-more-trigger').should('not.exist')
  })

  it('should apply lazy loading animation to cards', () => {
    interceptStarredSinglePage()
    search('octocat')

    // Wait for initial load
    cy.get('.loading-container').should('not.exist')

    // Verify cards have the visible class (lazy loaded)
    cy.get('.card-visible').should('have.length.greaterThan', 0)
  })

  it('should have proper accessibility attributes on cards', () => {
    interceptStarredSinglePage()
    search('octocat')

    // Wait for loading to complete
    cy.get('.loading-container').should('not.exist')

    // Verify first card is an article element with accessibility attributes
    cy.get('article.card').first().should('exist')
    cy.get('article.card').first().should('have.attr', 'aria-label')

    // Check first card's accessibility within the card
    cy.get('.card').first().within(() => {
      // Link should have aria-label
      cy.get('.card-header a').should('have.attr', 'aria-label')

      // Metadata should have role and aria-label
      cy.get('.card-meta')
        .should('have.attr', 'role', 'group')
        .should('have.attr', 'aria-label', 'Repository metadata')

      // Each column should have aria-label
      cy.get('.column').eq(0).should('have.attr', 'aria-label', 'Repository owner')
      cy.get('.column').eq(1).should('have.attr', 'aria-label', 'Programming language')
      cy.get('.column').eq(2).should('have.attr', 'aria-label').and('include', 'stars')
    })
  })
})
