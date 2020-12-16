import React from 'react'
import '../css/NameError.css'

type Props = {
  name: string
}

export const NameError: React.FC<Props> = (props) => {
  const { name } = props
  return (
    <div className="ui container nameError">
      <h2>
        Can't find user <span className="name">{name}</span>. Check spelling.
      </h2>
    </div>
  )
}
