import React from 'react'
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
  return (
    <article className="card" aria-label={`Repository: ${name}`}>
      <div className="content">
        <div className="ui header">
          <a
            href={html_url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${name} - Open repository in new tab`}
          >
            {name}
          </a>
        </div>
        <div className="ui meta grid" role="group" aria-label="Repository metadata">
          <div className="ui equal width row">
            <div className="column" aria-label="Repository owner">{owner.login}</div>
            <div className="column" aria-label="Programming language">{language || 'Not specified'}</div>
            <div className="column" aria-label={`${stargazers_count} stars`}>
              <span aria-hidden="true">&#9733;</span>
              {stargazers_count}
            </div>
          </div>
        </div>
        <div className="ui description">{description || 'No description available'}</div>
      </div>
    </article>
  )
}
