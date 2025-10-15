import React from 'react'
import '../css/NoStarRepo.css'

interface Props {
  name: string
}

export const NoStarRepo: React.FC<Props> = ({ name }) => {
  return (
    <div className="no-star-container" role="status" aria-live="polite">
      <div className="no-star-card">
        <div className="no-star-icon" aria-hidden="true">⭐</div>
        <h2 className="no-star-title">No Starred Repositories</h2>
        <p className="no-star-message">
          <span className="username">{name}</span> hasn't starred any repositories yet.
        </p>
        <p className="no-star-description">
          Starred repositories appear when a user finds interesting projects on GitHub
          and clicks the star button to bookmark them for later reference.
        </p>
        <div className="no-star-suggestion">
          <p>Try searching for another GitHub user to see their starred repositories!</p>
        </div>
      </div>
    </div>
  )
}
