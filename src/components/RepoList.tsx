import React from 'react'
import { RepoCard } from './RepoCard'

interface Props {
  repos: Array<RepoCard>
}

// eslint-disable-next-line
interface RepoCard {
  id: string
  name: string
  html_url: string
  description: string
  owner: {
    login: string
  }
  language: string
  stargazers_count: number
}

export const RepoList: React.FC<Props> = ({ repos }) => (
  <div className="ui container cards">
    {repos.map((repo) => (
      <RepoCard key={repo.id} repo={repo} />
    ))}
  </div>
)
