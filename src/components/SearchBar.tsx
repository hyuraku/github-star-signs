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
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <h1>Enter GitHub username</h1>
          <div className="search-input-container">
            <label className="search-label">
              <input
                type="text"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                readOnly={props.readOnly}
                placeholder="Enter GitHub username"
                className="search-input"
              />
            </label>
            <button
              type="submit"
              onClick={handleSearchClick}
              disabled={props.readOnly || !name.trim()}
              className="search-button"
            >
              {props.readOnly ? 'Searching...' : 'Search'}
            </button>
          </div>
          <p className="search-hint">Press Enter or click Search to find starred repositories</p>
        </div>
      </form>
    </div>
  )
})

SearchBar.displayName = 'SearchBar'
