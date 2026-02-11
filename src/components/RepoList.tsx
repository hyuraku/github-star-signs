import React, { useEffect } from 'react'
import { RepoCard } from './RepoCard'
import { GitHubRepository } from '../types/github'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import '../css/RepoList.css'

interface Props {
  repos: GitHubRepository[]
  loadingMore?: boolean
  hasMore?: boolean
  onLoadMore?: () => void
}

export const RepoList: React.FC<Props> = ({
  repos,
  loadingMore = false,
  hasMore = false,
  onLoadMore,
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: '100px',
  })

  useEffect(() => {
    if (isIntersecting && hasMore && !loadingMore && onLoadMore) {
      onLoadMore()
    }
  }, [isIntersecting, hasMore, loadingMore, onLoadMore])

  return (
    <section
      className="repo-container repo-cards"
      role="region"
      aria-label="Starred repositories"
      aria-live="polite"
    >
      <h2 className="visually-hidden">List of starred repositories ({repos.length} repositories)</h2>
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}

      {hasMore && (
        <div ref={targetRef} className="load-more-trigger" aria-hidden="true">
          {loadingMore && (
            <div className="loading-more" role="status" aria-label="Loading more repositories">
              <div className="spinner-small"></div>
              <p className="loading-more-text">Loading more repositories...</p>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
