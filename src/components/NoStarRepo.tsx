import React from 'react'
import '../css/NoStarRepo.css'

interface Props {
  name: string
}

export const NoStarRepo: React.FC<Props> = ({ name }) => {
  return (
    <div className="ui container NoStarRepo">
      <h2>
        {' '}
        <span className="name">{name}</span> has no starred repository
      </h2>
    </div>
  )
}
