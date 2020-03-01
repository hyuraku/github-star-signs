import React from 'react'

const NameError = props => {
  return (
    <div className="ui container">
      Can't find user {props.name}. Check spelling.
    </div>
  )
}

export default NameError
