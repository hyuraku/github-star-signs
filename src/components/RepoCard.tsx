import React, { useState, useRef, useEffect } from 'react'
import { GitHubRepository } from '../types/github'
import '../css/RepoCard.css'

export type RepoCardType = {
  repo: GitHubRepository
}

export const RepoCard: React.FC<RepoCardType> = ({repo}) => {
  const {
    name,
    html_url,
    description,
    owner,
    language,
    stargazers_count,
  } = repo

  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '200px',
        threshold: 0.01,
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <article
      ref={cardRef}
      className={`card ${isVisible ? 'card-visible' : 'card-placeholder'}`}
      aria-label={`Repository: ${name}`}
    >
      {isVisible ? (
        <div className="content">
          <div className="card-header">
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${name} - Open repository in new tab`}
            >
              {name}
            </a>
          </div>
          <div className="card-meta" role="group" aria-label="Repository metadata">
            <div className="card-meta-row">
              <div className="column" aria-label="Repository owner">{owner.login}</div>
              <div className="column" aria-label="Programming language">{language || 'Not specified'}</div>
              <div className="column" aria-label={`${stargazers_count} stars`}>
                <span aria-hidden="true">&#9733;</span>
                {stargazers_count}
              </div>
            </div>
          </div>
          <div className="card-description">{description || 'Visit repository for details'}</div>
        </div>
      ) : (
        <div className="content content-skeleton">
          <div className="skeleton-header"></div>
          <div className="skeleton-meta"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-description short"></div>
        </div>
      )}
    </article>
  )
}
