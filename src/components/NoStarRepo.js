import React from 'react'
import './NoStarRepo.css'

const NoStarRepo = props => {
  return (
    <div className="ui container"> 
      <h2> <span className="name">{props.name}</span> has no starred repository</h2>
    </div>
  )
}

export default NoStarRepo
