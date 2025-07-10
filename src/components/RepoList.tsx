import React from 'react'
import { RepoCard } from './RepoCard'
import { GitHubRepository } from '../types/github'

interface Props {
  repos: GitHubRepository[]
}

export const RepoList: React.FC<Props> = ({ repos }) => (
  <div className="ui container cards">
    {repos.map((repo) => (
      <RepoCard key={repo.id} repo={repo} />
    ))}
  </div>
)
