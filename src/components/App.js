import React from 'react';
import SearchBar from './SearchBar'
import RepoList from './RepoList'
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
      response = await github.get(`/users/${name}/starred`,{
        params: {
          per_page: 90,
          page: 1
        }
      });
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
  renderContent() {
    if (this.state.http_status === 200 && this.state.name !== "") {
      return <RepoList repos = {
        this.state.starred_repos
      }
      />
    } else if (this.state.err_msg !== 200 && this.state.name !== "") {
      return <NameError name = {
        this.state.name
      }
      />
    }
  }
  render() {
    return (
      <div>
        < SearchBar onSubmit = { this.onSearchSubmit }/>
        { this.renderContent() }
      </div>
    )
  }
};

export default App;