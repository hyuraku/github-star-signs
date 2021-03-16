import React from 'react'
import '../css/RepoCard.css'

type Props = {
  repo: {
    name: string
    html_url: string
    description: string
    owner: any
    language: string
    stargazers_count: number
  }
}

export const RepoCard: React.FC<Props> = (props) => {
  const {
    name,
    html_url,
    description,
    owner,
    language,
    stargazers_count,
  } = props.repo
  return (
    <div className="card">
      <div className="content">
        <div className="ui header">
          <a href={html_url} target="_blank" rel="noreferrer noopener">
            {name}
          </a>
        </div>
        <div className="ui meta grid">
          <div className="ui equal width row">
            <div className="column">{owner.login} </div>
            <div className="column">{language} </div>
            <div className="column">&#9733;{stargazers_count} </div>
          </div>
        </div>
        <div className="ui description">{description}</div>
      </div>
    </div>
  )
}