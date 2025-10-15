import React, { useState } from 'react'
import '../css/SearchBar.css'

interface Props {
  onSubmit: (arg0: string) => void
  readOnly: boolean
}

export const SearchBar: React.FC<Props> = React.memo((props) => {
  const [name, setName] = useState('')
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (name.trim()) {
      props.onSubmit(name.trim())
    }
  }

  const handleSearchClick = () => {
    if (name.trim()) {
      props.onSubmit(name.trim())
    }
  }

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form" role="search" aria-label="GitHub user search">
        <div className="field">
          <h1 id="search-heading">Enter GitHub username</h1>
          <div className="search-input-container">
            <label className="search-label" htmlFor="github-username-input">
              <input
                id="github-username-input"
                type="text"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                readOnly={props.readOnly}
                placeholder="Enter GitHub username"
                className="search-input"
                aria-labelledby="search-heading"
                aria-describedby="search-hint"
                aria-required="true"
              />
            </label>
            <button
              type="submit"
              onClick={handleSearchClick}
              disabled={props.readOnly || !name.trim()}
              className="search-button"
              aria-label={props.readOnly ? 'Searching for repositories' : 'Search for starred repositories'}
            >
              {props.readOnly ? 'Searching...' : 'Search'}
            </button>
          </div>
          <p id="search-hint" className="search-hint">Press Enter or click Search to find starred repositories</p>
        </div>
      </form>
    </div>
  )
})

SearchBar.displayName = 'SearchBar'
