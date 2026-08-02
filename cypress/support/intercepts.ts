import { makeRepos } from './factories'

const STARRED_ROUTE = '**/api.github.com/users/*/starred*'

/** Page size the app requests; a full page signals "there may be more". */
export const PAGE_SIZE = 100

/**
 * Serves starred repositories from local data instead of the real API.
 * `pages` maps a page number to the repositories returned for it;
 * any page not listed resolves to an empty array, which ends infinite scroll.
 * `delayMs` holds the response open so tests can observe loading states.
 */
export const interceptStarred = (
  pages: Record<number, number>,
  delayMs = 0
) => {
  cy.intercept('GET', STARRED_ROUTE, (req) => {
    const page = Number(req.query.page ?? 1)
    const count = pages[page] ?? 0
    const startId = (page - 1) * PAGE_SIZE + 1
    req.reply({
      statusCode: 200,
      body: makeRepos(count, startId),
      delay: delayMs,
    })
  }).as('starred')
}

/**
 * Serves a full first page followed by a short second page, then nothing.
 * The second page is delayed so the "loading more" indicator is observable.
 */
export const interceptStarredWithMorePages = (delayMs = 500) =>
  interceptStarred({ 1: PAGE_SIZE, 2: 20 }, delayMs)

/** Serves one short page so infinite scroll stops immediately. */
export const interceptStarredSinglePage = (count = 3) =>
  interceptStarred({ 1: count })

/** Serves an empty starred list (user exists but has starred nothing). */
export const interceptStarredEmpty = () => interceptStarred({})

/** Fails the request the way the API reports a missing user. */
export const interceptUserNotFound = () => {
  cy.intercept('GET', STARRED_ROUTE, {
    statusCode: 404,
    body: { message: 'Not Found' },
  }).as('starred')
}

/** Fails the request the way the API reports an exhausted rate limit. */
export const interceptRateLimited = () => {
  cy.intercept('GET', STARRED_ROUTE, {
    statusCode: 403,
    body: { message: 'API rate limit exceeded' },
  }).as('starred')
}
