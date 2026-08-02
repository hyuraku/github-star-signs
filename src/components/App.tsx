import React, { useState } from 'react'
import { SearchBar } from './SearchBar'
import { fetchStarredRepos, statusFromError, PAGE_SIZE } from '../api/github'
import { MainContent } from './MainContent'
import { Footer } from './Footer'
import { GitHubRepository } from '../types/github'
import '../css/Top.css'

const App: React.FC = () => {
  const [starredRepos, setStarredRepos] = useState<GitHubRepository[]>([]);
  const [name, setName] = useState('');
  const [httpStatus, setHttpStatus] = useState(200);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const onSearchSubmit = async (searchName: string) => {
    try {
      setLoading(true);
      setCurrentPage(1);
      setHasMore(true);

      const repos = await fetchStarredRepos(searchName, 1);

      setName(searchName);
      setHttpStatus(200);
      setStarredRepos(repos);
      setHasMore(repos.length === PAGE_SIZE);
      setCurrentPage(2);
      setLoading(false);
    } catch (error) {
      setName(searchName);
      setHttpStatus(statusFromError(error));
      setLoading(false);
      setHasMore(false);
    }
  };

  const loadMoreRepos = async () => {
    if (!name || loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);
      const repos = await fetchStarredRepos(name, currentPage);

      setStarredRepos(prevRepos => [...prevRepos, ...repos]);
      setHasMore(repos.length === PAGE_SIZE);
      setCurrentPage(prev => prev + 1);
      setLoadingMore(false);
    } catch {
      setLoadingMore(false);
      setHasMore(false);
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <div className="top">
        <header role="banner">
          <SearchBar
            onSubmit={onSearchSubmit}
            readOnly={loading}
          />
        </header>
        <main id="main-content" role="main" aria-label="Repository results" tabIndex={-1}>
          <MainContent
            loading={loading}
            httpStatus={httpStatus}
            name={name}
            starredRepos={starredRepos}
            loadingMore={loadingMore}
            hasMore={hasMore}
            onLoadMore={loadMoreRepos}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
