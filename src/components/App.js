import React from 'react';
import SearchBar from './SearchBar'
import RepoList from './RepoList'
import NoStarRepo from './NoStarRepo'
import NameError from './NameError';
import github from '../api/github'

class App extends React.Component {
  state = {
    starred_repos: [],
    name: '',
    http_status: 200,
    err_msg: ''
  }

  onSearchSubmit = async (name) => {
    let response = ''
    try {
      response = await github.get(`/users/${name}/starred`);
      this.setState({
        name: name,
        http_status: response.status,
        starred_repos: response.data,
        err_msg: ''
      })
    } catch (error) {
      this.setState({
        name: name,
        http_status: error.response.status,
        err_msg: error.response.message
      })
    }
  }

  render() {
    let result = ""
    if (this.state.http_status === 200 && this.state.name !== "" && this.state.starred_repos.length === 0) {
      result = < NoStarRepo name = {this.state.name}/>
    } else if (this.state.http_status === 200 && this.state.name !== "" ) {
      result = < RepoList repos = {this.state.starred_repos}/>
    } else if (this.state.http_status !== 200 && this.state.name !== "") {
      result = < NameError name = {this.state.name}/>
    }
    return (
      <div>
        < SearchBar onSubmit = { this.onSearchSubmit }/>
        { result }
      </div>
    )
  }
};

export default App;