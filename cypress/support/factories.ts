import { GitHubRepository } from '../../src/types/github'

/**
 * Builds a single repository payload shaped like the GitHub API response.
 * Pass overrides to vary the fields a test actually cares about.
 */
export const makeRepo = (
  index: number,
  overrides: Partial<GitHubRepository> = {}
): GitHubRepository => ({
  id: index,
  name: `repo-${index}`,
  html_url: `https://github.com/octocat/repo-${index}`,
  description: `Description for repo ${index}`,
  owner: {
    login: 'octocat',
    avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  },
  language: 'TypeScript',
  stargazers_count: 100 + index,
  created_at: '2020-02-01T00:00:00Z',
  updated_at: '2026-06-18T00:00:00Z',
  forks_count: index,
  open_issues_count: 0,
  topics: [],
  archived: false,
  disabled: false,
  private: false,
  ...overrides,
})

/**
 * Builds `count` repositories with ids starting at `startId`.
 * The app treats a full page (100 items) as "there may be more",
 * so pass 100 to keep infinite scroll alive and fewer to end it.
 */
export const makeRepos = (
  count: number,
  startId = 1,
  overrides: Partial<GitHubRepository> = {}
): GitHubRepository[] =>
  Array.from({ length: count }, (_, i) => makeRepo(startId + i, overrides))
