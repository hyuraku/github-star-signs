import React, { useState } from 'react'
import { SearchBar } from './SearchBar'
import { github } from '../api/github'
import { MainContent } from './MainContent'
import { Footer } from './Footer'
import { GitHubRepository, ApiResponse, ApiError } from '../types/github'
import '../css/Top.css'

const maxRepoSize = 100

const App: React.FC = () => {
  const [starredRepos, setStarredRepos] = useState<GitHubRepository[]>([]);
  const [name, setName] = useState('');
  const [httpStatus, setHttpStatus] = useState(200);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const onSearchSubmit = async (searchName: string) => {
    let response = {} as ApiResponse<GitHubRepository[]>;
    try {
      setLoading(true);
      setCurrentPage(1);
      setHasMore(true);

      response = await github.get(`/users/${searchName}/starred`, {
        params: {
          per_page: maxRepoSize,
          page: 1,
        },
      });

      setName(searchName);
      setHttpStatus(response.status);
      setStarredRepos(response.data);
      setHasMore(response.data.length === maxRepoSize);
      setCurrentPage(2);
      setLoading(false);
    } catch (error) {
      setName(searchName);
      const apiError = error as ApiError;
      setHttpStatus(apiError.response?.status || 500);
      setLoading(false);
      setHasMore(false);
    }
  };

  const loadMoreRepos = async () => {
    if (!name || loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);
      const response = await github.get(`/users/${name}/starred`, {
        params: {
          per_page: maxRepoSize,
          page: currentPage,
        },
      });

      setStarredRepos(prevRepos => [...prevRepos, ...response.data]);
      setHasMore(response.data.length === maxRepoSize);
      setCurrentPage(prev => prev + 1);
      setLoadingMore(false);
    } catch (error) {
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
