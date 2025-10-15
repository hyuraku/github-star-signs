import React from 'react'
import '../css/Loading.css'

export const Loading = () => {
  return (
    <div className="loading-container" role="status" aria-live="polite" aria-label="Loading repositories">
      <div className="loading-spinner">
        <div className="spinner" aria-hidden="true"></div>
        <p className="loading-text">Fetching starred repositories...</p>
      </div>
      <div className="skeleton-grid" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-header">
              <div className="skeleton-avatar"></div>
              <div className="skeleton-title"></div>
            </div>
            <div className="skeleton-description"></div>
            <div className="skeleton-description short"></div>
            <div className="skeleton-footer">
              <div className="skeleton-tag"></div>
              <div className="skeleton-tag"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
