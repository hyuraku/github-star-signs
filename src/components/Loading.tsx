import React from 'react'
import '../css/Loading.css'

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p className="loading-text">Fetching starred repositories...</p>
      </div>
      <div className="skeleton-grid">
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
