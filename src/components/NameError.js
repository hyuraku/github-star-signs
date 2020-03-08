import React from 'react'
import './NameError.css'

const NameError = props => {
  return (
    <div className="ui container nameError">
      <h2>
        Can 't find user <span className="name">{props.name}</span>.
        Check spelling.
      </h2> 
    </div>
  )
}

export default NameError
