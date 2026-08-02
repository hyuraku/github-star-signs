import { GitHubRepository } from '../types/github'

const BASE_URL = 'https://api.github.com'

/** Repositories requested per page; a full page means more may follow. */
export const PAGE_SIZE = 100

/**
 * Thrown when GitHub answers with a non-2xx status.
 * Unlike axios, fetch resolves such responses, so the check is explicit.
 */
export class GitHubApiError extends Error {
  readonly status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'GitHubApiError'
    this.status = status
  }
}

/** Status used when the request never produced an HTTP response at all. */
export const NETWORK_ERROR_STATUS = 500

export const fetchStarredRepos = async (
  username: string,
  page: number
): Promise<GitHubRepository[]> => {
  const path = `/users/${encodeURIComponent(username)}/starred`
  const query = `?per_page=${PAGE_SIZE}&page=${page}`

  const response = await fetch(`${BASE_URL}${path}${query}`, {
    headers: { Accept: 'application/vnd.github+json' },
  })

  if (!response.ok) {
    throw new GitHubApiError(
      response.status,
      `GitHub API responded with ${response.status}`
    )
  }

  return response.json()
}

/** Maps a thrown value onto the HTTP status the UI renders. */
export const statusFromError = (error: unknown): number =>
  error instanceof GitHubApiError ? error.status : NETWORK_ERROR_STATUS
