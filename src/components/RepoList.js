import React from 'react';
import RepoCard from './RepoCard'
import NameError from './NameError';

const RepoList = (props) => {
  if (props.status_code === 404 && props.name !== "") {
    return <NameError name={props.name} />
  } else {
    const repos = props.repos.map((repo)=>{
      return <RepoCard key={repo.id} repo={repo}/>
    })
    return <div>{repos}</div>
  }
}

export default RepoList
