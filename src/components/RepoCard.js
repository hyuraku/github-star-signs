import React from 'react'
import './RepoCard.css'

const RepoCard = props => {
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
            <div className="column">{stargazers_count} </div>
          </div>
        </div>
        <div className="ui description">{description}</div>
      </div>
    </div>
  )
}

export default RepoCard
