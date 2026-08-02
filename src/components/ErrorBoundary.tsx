import React from 'react'
import '../css/ErrorMessage.css'

interface Props {
  children: React.ReactNode
  /**
   * Changing this value clears a caught error. Pass something that
   * changes when the user asks for different content, so a failed render
   * does not persist across the next search.
   */
  resetKey: string
}

interface State {
  hasError: boolean
}

/**
 * Catches render-time errors below it. Event handler failures are not
 * caught here: those are handled where the request is made.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false })
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="error-container" role="alert" aria-live="assertive">
        <div className="error-card">
          <div className="error-icon" aria-hidden="true">
            ⚠️
          </div>
          <h2 className="error-title">Could not display these results</h2>
          <p className="error-message">
            Something went wrong while rendering the repositories.
          </p>
          <p className="error-suggestion">
            Searching for another user should get you going again.
          </p>
        </div>
      </div>
    )
  }
}
