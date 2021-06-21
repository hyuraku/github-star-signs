import React, { useState } from 'react'
import '../css/SearchBar.css'

interface Props {
  onSubmit: (arg0: string) => void
  readOnly: boolean
}

export const SearchBar: React.FC<Props> = (props) => {
  const [name, setName] = useState('')
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onSubmit(name)
  }
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <h1>Enter GitHub username</h1>
          <label>
            <input
              type="text"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              readOnly={props.readOnly}
              placeholder="Your GitHub username"
            />
          </label>
        </div>
      </form>
    </div>
  )
}
