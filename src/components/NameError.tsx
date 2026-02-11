import React from 'react'
import '../css/NameError.css'

interface Props {
  name: string
}

export const NameError: React.FC<Props> = ({ name }) => {
  return (
    <div className="repo-container nameError">
      <h2>
        Can't find user <span className="name">{name}</span>. Check spelling.
      </h2>
    </div>
  )
}
