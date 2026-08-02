import React from 'react'
import { SearchBar } from './SearchBar'
import { MainContent } from './MainContent'
import { Footer } from './Footer'
import { useStarredRepos } from '../hooks/useStarredRepos'
import '../css/Top.css'

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
          <MainContent state={state} onLoadMore={loadMore} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
