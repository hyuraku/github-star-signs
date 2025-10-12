import React from 'react'
import '../css/ErrorMessage.css'

interface Props {
  name: string
  httpStatus: number
}

export const ErrorMessage: React.FC<Props> = ({ name, httpStatus }) => {
  const getErrorMessage = () => {
    switch (httpStatus) {
      case 404:
        return {
          title: 'User Not Found',
          message: `The GitHub user "${name}" could not be found. Please check the username and try again.`,
          suggestion: 'Make sure the username is spelled correctly and exists on GitHub.'
        }
      case 403:
        return {
          title: 'API Rate Limit Exceeded',
          message: 'GitHub API rate limit has been exceeded.',
          suggestion: 'Please wait a few minutes before trying again. Authenticated requests have higher rate limits.'
        }
      case 401:
        return {
          title: 'Authentication Required',
          message: 'Authentication is required to access this resource.',
          suggestion: 'Please check your GitHub authentication credentials.'
        }
      case 500:
      case 502:
      case 503:
        return {
          title: 'Server Error',
          message: 'GitHub servers are experiencing issues.',
          suggestion: 'Please try again later. If the problem persists, check GitHub status page.'
        }
      default:
        return {
          title: 'Something Went Wrong',
          message: `An unexpected error occurred (Status: ${httpStatus}).`,
          suggestion: 'Please try again. If the problem persists, contact support.'
        }
    }
  }

  const error = getErrorMessage()

  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-icon">
          {httpStatus === 404 ? '🔍' : httpStatus === 403 ? '⏱️' : '⚠️'}
        </div>
        <h2 className="error-title">{error.title}</h2>
        <p className="error-message">{error.message}</p>
        <p className="error-suggestion">{error.suggestion}</p>
        <div className="error-details">
          <span className="error-status">Status Code: {httpStatus}</span>
        </div>
      </div>
    </div>
  )
}
