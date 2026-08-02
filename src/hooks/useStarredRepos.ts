import { useReducer } from 'react'
import { fetchStarredRepos, statusFromError, PAGE_SIZE } from '../api/github'
import { GitHubRepository } from '../types/github'

/**
 * Every screen the app can show, as one value.
 * Fields live on the state that owns them, so combinations like
 * "errored but holding results" cannot be constructed.
 */
export type StarredReposState =
  | { tag: 'idle' }
  | { tag: 'loading'; name: string }
  | { tag: 'error'; name: string; httpStatus: number }
  | { tag: 'empty'; name: string }
  | {
      tag: 'loaded'
      name: string
      repos: GitHubRepository[]
      nextPage: number
      hasMore: boolean
      loadingMore: boolean
    }

type Action =
  | { type: 'search_started'; name: string }
  | { type: 'search_succeeded'; name: string; repos: GitHubRepository[] }
  | { type: 'search_failed'; name: string; httpStatus: number }
  | { type: 'load_more_started' }
  | { type: 'load_more_succeeded'; repos: GitHubRepository[] }
  | { type: 'load_more_failed' }

const reducer = (
  state: StarredReposState,
  action: Action
): StarredReposState => {
  switch (action.type) {
    case 'search_started':
      return { tag: 'loading', name: action.name }

    case 'search_succeeded':
      if (action.repos.length === 0) {
        return { tag: 'empty', name: action.name }
      }
      return {
        tag: 'loaded',
        name: action.name,
        repos: action.repos,
        nextPage: 2,
        hasMore: action.repos.length === PAGE_SIZE,
        loadingMore: false,
      }

    case 'search_failed':
      return {
        tag: 'error',
        name: action.name,
        httpStatus: action.httpStatus,
      }

    // The remaining actions only make sense while results are on screen.
    case 'load_more_started':
      if (state.tag !== 'loaded') return state
      return { ...state, loadingMore: true }

    case 'load_more_succeeded':
      if (state.tag !== 'loaded') return state
      return {
        ...state,
        repos: [...state.repos, ...action.repos],
        nextPage: state.nextPage + 1,
        hasMore: action.repos.length === PAGE_SIZE,
        loadingMore: false,
      }

    case 'load_more_failed':
      if (state.tag !== 'loaded') return state
      return { ...state, hasMore: false, loadingMore: false }
  }
}

export const useStarredRepos = () => {
  const [state, dispatch] = useReducer(reducer, { tag: 'idle' })

  const search = async (name: string) => {
    dispatch({ type: 'search_started', name })
    try {
      const repos = await fetchStarredRepos(name, 1)
      dispatch({ type: 'search_succeeded', name, repos })
    } catch (error) {
      dispatch({
        type: 'search_failed',
        name,
        httpStatus: statusFromError(error),
      })
    }
  }

  const loadMore = async () => {
    if (state.tag !== 'loaded' || state.loadingMore || !state.hasMore) return

    dispatch({ type: 'load_more_started' })
    try {
      const repos = await fetchStarredRepos(state.name, state.nextPage)
      dispatch({ type: 'load_more_succeeded', repos })
    } catch {
      dispatch({ type: 'load_more_failed' })
    }
  }

  return { state, search, loadMore }
}
