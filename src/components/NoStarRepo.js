import React from 'react'
import '../css/NoStarRepo.css'

export const NoStarRepo = props => {
  const {name} = props
  return (
    < div className = "ui container NoStarRepo" >
      <h2> <span className="name">{name}</span> has no starred repository</h2>
    </div>
  )
}
