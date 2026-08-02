import React from 'react'
import { SearchBar } from './SearchBar'
import { MainContent } from './MainContent'
import { ErrorBoundary } from './ErrorBoundary'
import { Footer } from './Footer'
import { useStarredRepos, StarredReposState } from '../hooks/useStarredRepos'
import '../css/Top.css'

/** Identifies what is being shown, so a new request clears a caught error. */
const boundaryResetKey = (state: StarredReposState) =>
  state.tag === 'idle' ? state.tag : `${state.tag}:${state.name}`

const App: React.FC = () => {
  const { state, search, loadMore } = useStarredRepos()

  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <div className="top">
        <header role="banner">
          <SearchBar onSubmit={search} readOnly={state.tag === 'loading'} />
        </header>
        <main id="main-content" role="main" aria-label="Repository results" tabIndex={-1}>
          {/* SearchBar sits outside the boundary, so a failed render
              still leaves the user a way to search again. */}
          <ErrorBoundary resetKey={boundaryResetKey(state)}>
            <MainContent state={state} onLoadMore={loadMore} />
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
