import React from 'react'
import { RepoCard } from './RepoCard'
import { GitHubRepository } from '../types/github'
import '../css/NoContent.css'

const sampleRepos: GitHubRepository[] = [
  {
    id: -1,
    name: 'react',
    html_url: 'https://github.com/facebook/react',
    description: 'The library for web and native user interfaces.',
    owner: { login: 'facebook', avatar_url: '' },
    language: 'JavaScript',
    stargazers_count: 234000,
    created_at: '', updated_at: '',
    forks_count: 0, open_issues_count: 0,
    topics: [], archived: false, disabled: false, private: false,
  },
  {
    id: -2,
    name: 'linux',
    html_url: 'https://github.com/torvalds/linux',
    description: 'Linux kernel source tree',
    owner: { login: 'torvalds', avatar_url: '' },
    language: 'C',
    stargazers_count: 217000,
    created_at: '', updated_at: '',
    forks_count: 0, open_issues_count: 0,
    topics: [], archived: false, disabled: false, private: false,
  },
  {
    id: -3,
    name: 'vscode',
    html_url: 'https://github.com/microsoft/vscode',
    description: 'Visual Studio Code',
    owner: { login: 'microsoft', avatar_url: '' },
    language: 'TypeScript',
    stargazers_count: 170000,
    created_at: '', updated_at: '',
    forks_count: 0, open_issues_count: 0,
    topics: [], archived: false, disabled: false, private: false,
  },
  {
    id: -4,
    name: 'tensorflow',
    html_url: 'https://github.com/tensorflow/tensorflow',
    description: 'An Open Source Machine Learning Framework for Everyone',
    owner: { login: 'tensorflow', avatar_url: '' },
    language: 'C++',
    stargazers_count: 188000,
    created_at: '', updated_at: '',
    forks_count: 0, open_issues_count: 0,
    topics: [], archived: false, disabled: false, private: false,
  },
]

export const NoContent: React.FC = () => {
  return (
    <div className="welcome">
      <div className="welcome-hero">
        <span className="welcome-icon" aria-hidden="true">&#9733;</span>
        <h2 className="welcome-title">Discover what developers are starring on GitHub</h2>
        <p className="welcome-subtitle">Enter a GitHub username above to explore their starred repositories</p>
      </div>
      <div className="welcome-sample">
        <p className="welcome-sample-label">Popular on GitHub</p>
        <div className="repo-container repo-cards">
          {sampleRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  )
}
