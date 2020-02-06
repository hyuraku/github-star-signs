import React from 'react';

const RepoCard = (props) => {
  const {full_name, html_url, description, owner, language, stargazers_count} = props.repo
  return (
    <div>
      {full_name}
      {description}
      {html_url}
      {language}
      {stargazers_count}
    </div>
  )
}


export default RepoCard
