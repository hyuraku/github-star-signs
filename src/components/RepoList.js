import React from 'react';
import RepoCard from './RepoCard'

const RepoList = (props) => {
  if (props.status_code === 404 && props.name !== "") {
    return <div>Error</div>
  }else{
    const repos = props.repos.map((repo)=>{
      return <RepoCard key={repo.id} repo={repo}/>
    })
    return <div>{repos}</div>
  }
}

export default RepoList
