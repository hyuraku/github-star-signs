import React, { useState } from 'react'
import { SearchBar } from './SearchBar'
import { github } from '../api/github'
import { MainContent } from './MainContent'
import { Footer } from './Footer'
import '../css/Top.css'

const maxRepoSize = 100

type responseType = {
  status: number,
  data: any,
}

type errorType = { response: {status: number, message: string}}

const App: React.FC = () => {
  const [starredRepos, setStarredRepos] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [httpStatus, setHttpStatus] = useState(200);
  const [loading, setLoading] = useState(false);

  const onSearchSubmit = async (searchName: string) => {
    let response = {} as responseType;
    try {
      setLoading(true);
      let currentPage = 1;

      response = await github.get(`/users/${searchName}/starred`, {
        params: {
          per_page: maxRepoSize,
          page: 1,
        },
      });
      
      setName(searchName);
      setHttpStatus(response.status);
      setStarredRepos(response.data);
      
      // manage page and additional data size with local variables
      currentPage += 1;
      let currentAddRepoSize = response.data.length;
      
      while (currentAddRepoSize === maxRepoSize) {
        const addResponse = await github.get(`/users/${searchName}/starred`, {
          params: {
            per_page: maxRepoSize,
            page: currentPage,
          },
        });
        
        setStarredRepos(prevRepos => [...prevRepos, ...addResponse.data]);
        currentPage++;
        currentAddRepoSize = addResponse.data.length;
      }
      
      setLoading(false);
    } catch (error) {
      setName(searchName);
      setHttpStatus((error as errorType).response.status);
      setLoading(false);
    }
  };

  return (
    <div className="top">
      <SearchBar
        onSubmit={onSearchSubmit}
        readOnly={loading}
      />
      <MainContent
        loading={loading}
        httpStatus={httpStatus}
        name={name}
        starredRepos={starredRepos}
      />
      <Footer />
    </div>
  );
};

export default App;
