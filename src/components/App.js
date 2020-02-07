import React from 'react';
import SearchBar from './SearchBar'
import RepoList from './RepoList'
import NameError from './NameError';
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
  renderContent(){
    if (this.state.http_status === 404 && this.state.name !== "") {
      return <NameError name={this.state.name}/>
    }
    if (this.state.http_status === 200 && this.state.name !== "") {
      return <RepoList repos={this.state.starred_repos}/>
    }
  }
  render(){
      return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        { this.renderContent() }
      </div>
    )
  }
};

export default App;
