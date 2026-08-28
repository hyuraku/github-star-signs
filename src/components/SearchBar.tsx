import React, { useState } from 'react'
import { isValidUsername, USERNAME_ERROR_MESSAGE } from '../utils/validateUsername'
import '../css/SearchBar.css'

interface Props {
  onSubmit: (arg0: string) => void
  readOnly: boolean
}

export const SearchBar: React.FC<Props> = (props) => {
  const [name, setName] = useState('')
  // Only set on submit: warning while the user is still typing would flag
  // every name as broken before it is finished.
  const [invalid, setInvalid] = useState(false)

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) {
      return
    }
    if (!isValidUsername(trimmed)) {
      setInvalid(true)
      return
    }
    setInvalid(false)
    props.onSubmit(trimmed)
  }

  return (
    <div className="search-segment">
      <form onSubmit={onFormSubmit} className="search-form" role="search" aria-label="GitHub user search">
        <div className="field">
          <h1 id="search-heading">Enter GitHub username</h1>
          <div className="search-input-container">
            <label className="search-label" htmlFor="github-username-input">
              <input
                id="github-username-input"
                type="text"
                autoFocus
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  // Drop a stale warning as soon as the name changes.
                  setInvalid(false)
                }}
                readOnly={props.readOnly}
                placeholder="Enter GitHub username"
                className="search-input"
                aria-labelledby="search-heading"
                aria-describedby={invalid ? 'search-error search-hint' : 'search-hint'}
                aria-invalid={invalid ? 'true' : undefined}
                aria-required="true"
              />
            </label>
            <button
              type="submit"
              disabled={props.readOnly || !name.trim()}
              className="search-button"
              aria-label={props.readOnly ? 'Searching for repositories' : 'Search for starred repositories'}
            >
              {props.readOnly ? 'Searching...' : 'Search'}
            </button>
          </div>
          {invalid && (
            <p id="search-error" className="search-error" role="alert">
              {USERNAME_ERROR_MESSAGE}
            </p>
          )}
          <p id="search-hint" className="search-hint">Press Enter or click Search to find starred repositories</p>
        </div>
      </form>
    </div>
  )
}
