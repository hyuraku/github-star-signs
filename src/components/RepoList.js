import React from 'react';
import RepoCard from './RepoCard'
import Loading from './Loading'

const RepoList = (props) => {
  const repos = props.repos.map((repo)=>{
    return <RepoCard key={repo.id} repo={repo}/>
  })
  return (
    < div className = "ui container centered " >
      < div className = "ui cards" >
        {repos}
      </div>
      < Loading />
    </div>
  )
}

export default RepoList
