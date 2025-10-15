export {}

describe('Repository Cards Display', function () {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display repository cards with correct structure after searching', () => {
    // Search for a user
    cy.get('.search-input').type('hyuraku')
    cy.get('.search-button').click()

    // Wait for loading to complete
    cy.get('.loading-container', { timeout: 15000 }).should('not.exist')

    // Verify that cards are displayed
    cy.get('.card').should('have.length.greaterThan', 0)

    // Verify first card has the correct structure
    cy.get('.card').first().within(() => {
      // Check that header link exists and is visible
      cy.get('.ui.header a')
        .should('be.visible')
        .should('have.attr', 'href')
        .and('include', 'github.com')

      cy.get('.ui.header a')
        .should('have.attr', 'target', '_blank')

      // Check that metadata section exists
      cy.get('.ui.meta.grid').should('exist')

      // Check that owner, language, and stars are displayed
      cy.get('.column').should('have.length', 3)

      // Check that owner column exists
      cy.get('.column').first().should('have.attr', 'aria-label', 'Repository owner')

      // Check that language column exists
      cy.get('.column').eq(1).should('have.attr', 'aria-label', 'Programming language')

      // Check that stars column exists and contains star icon
      cy.get('.column').last().should('have.attr', 'aria-label').and('include', 'stars')

      // Check that description exists (even if empty)
      cy.get('.ui.description').should('exist')
    })
  })

  it('should display loading indicator when loading more repositories', () => {
    // Search for a user with many repositories
    cy.get('.search-input').type('sindresorhus')
    cy.get('.search-button').click()

    // Wait for initial load
    cy.get('.loading-container', { timeout: 15000 }).should('not.exist')

    // Scroll to bottom to trigger infinite scroll
    cy.scrollTo('bottom')

    // Check that loading indicator appears
    cy.get('.loading-more').should('be.visible')
    cy.get('.spinner-small').should('be.visible')
    cy.get('.loading-more-text').should('contain', 'Loading more repositories')
  })

  it('should apply lazy loading animation to cards', () => {
    // Search for a user
    cy.get('.search-input').type('gaearon')
    cy.get('.search-button').click()

    // Wait for initial load
    cy.get('.loading-container', { timeout: 15000 }).should('not.exist')

    // Verify cards have the visible class (lazy loaded)
    cy.get('.card-visible').should('have.length.greaterThan', 0)
  })

  it('should have proper accessibility attributes on cards', () => {
    // Search for a user
    cy.get('.search-input').type('hyuraku')
    cy.get('.search-button').click()

    // Wait for loading to complete
    cy.get('.loading-container', { timeout: 15000 }).should('not.exist')

    // Verify first card is an article element with accessibility attributes
    cy.get('article.card').first().should('exist')
    cy.get('article.card').first().should('have.attr', 'aria-label')

    // Check first card's accessibility within the card
    cy.get('.card').first().within(() => {
      // Link should have aria-label
      cy.get('.ui.header a').should('have.attr', 'aria-label')

      // Metadata should have role and aria-label
      cy.get('.ui.meta.grid')
        .should('have.attr', 'role', 'group')
        .should('have.attr', 'aria-label', 'Repository metadata')

      // Each column should have aria-label
      cy.get('.column').eq(0).should('have.attr', 'aria-label', 'Repository owner')
      cy.get('.column').eq(1).should('have.attr', 'aria-label', 'Programming language')
      cy.get('.column').eq(2).should('have.attr', 'aria-label').and('include', 'stars')
    })
  })
})
