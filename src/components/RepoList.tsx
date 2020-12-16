import React from 'react'
import { RepoCard } from './RepoCard'

type Props = {
  repos: Array<RepoCard>
}

interface RepoCard {
  id: string,
  name: string,
  html_url: string,
  description: string,
  owner: any,
  language: string,
  stargazers_count: number
}

export const RepoList: React.FC<Props> = (props) => {
  const repos = props.repos.map((repo: RepoCard) => {
    return <RepoCard key={repo.id} repo={repo} />
  })
  return <div className="ui container centered cards">{repos}</div>
}
