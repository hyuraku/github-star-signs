import React from 'react';

const RepoCard = (props) => {
  const {name, html_url, description, owner, language, stargazers_count} = props.repo
  return (
    <div className="card">
      <div className="content">
        <div className="ui header">
          <a href={html_url}>
            {name}
          </a>
        </div>
        <div className = "ui meta grid">
          <div className = "three column row">
            <div className = "column" >{owner.login} </div>
            <div className = "column" >{language} </div>
            <div className = "column" >{stargazers_count} </div>
          </div>
        </div>
        <div className="ui description">
           {description}
        </div>
      </div>
    </div>
  )
}


export default RepoCard
