import React from 'react'
import '../css/NoStarRepo.css'

const NoStarRepo = props => {
  return (
    < div className = "ui container NoStarRepo" >
      <h2> <span className="name">{props.name}</span> has no starred repository</h2>
    </div>
  )
}

export default NoStarRepo
