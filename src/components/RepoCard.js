import React from 'react';

const RepoCard = (props) => {
  const {full_name, svn_url, description} = props.repo
  return (
    <div>
      {full_name}
      {description}
      {svn_url}
    </div>
  )
}


export default RepoCard
