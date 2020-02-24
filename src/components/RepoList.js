import React from 'react';
import RepoCard from './RepoCard'

const RepoList = (props) => {
  const repos = props.repos.map((repo)=>{
    return <RepoCard key={repo.id} repo={repo}/>
  })
  return (
    < div className = "ui container centered cards" >
      {repos}
    </div>
  )
}

export default RepoList
