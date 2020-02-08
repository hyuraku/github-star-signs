import React from 'react';

const RepoCard = (props) => {
  const {name, html_url, description, owner, language, stargazers_count} = props.repo
  return (
    <div>
      {owner.login}
      {name}
      {description}
      {html_url}
      {language}
      {stargazers_count}
    </div>
  )
}


export default RepoCard
