import React from 'react';
import SearchBar from './SearchBar'
import RepoList from './RepoList'
import github from '../api/github'

class  App extends React.Component{
  state = { starred_repos: [] }

  onSearchSubmit = async(name) => {
    const response = await github.get(`/users/${name}/starred`);

    this.setState({
      starred_repos: response.data
    })
  }
  render(){
      return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <RepoList repos={this.state.starred_repos}/>
      </div>
    )
  }
};

export default App;
