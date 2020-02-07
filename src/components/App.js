import React from 'react';
import SearchBar from './SearchBar'
import RepoList from './RepoList'
import github from '../api/github'

class  App extends React.Component{
  state = { starred_repos: [], name: '', http_status: 200 }

  onSearchSubmit = async(name) => {
    let response = ''
    this.setState({name: name})
    try {
      response = await github.get(`/users/${name}/starred`);
      this.setState({
        starred_repos: response.data
      })
    } catch (error) {
      this.setState({
        http_status: error.response.status
      })
    }
  }
  render(){
      return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <RepoList
          repos={this.state.starred_repos}
          name={this.state.name}
          status_code={this.state.http_status}
        />
      </div>
    )
  }
};

export default App;
