import React from 'react'
import { RepoCard } from './RepoCard'
import { GitHubRepository } from '../types/github'

interface Props {
  repos: GitHubRepository[]
}

export const RepoList: React.FC<Props> = ({ repos }) => (
  <section
    className="ui container cards"
    role="region"
    aria-label="Starred repositories"
    aria-live="polite"
  >
    <h2 className="visually-hidden">List of starred repositories ({repos.length} repositories)</h2>
    {repos.map((repo) => (
      <RepoCard key={repo.id} repo={repo} />
    ))}
  </section>
)
