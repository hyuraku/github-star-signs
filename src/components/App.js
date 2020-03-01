import React from 'react'
import SearchBar from './SearchBar'
import RepoList from './RepoList'
import NoStarRepo from './NoStarRepo'
import NameError from './NameError'
import github from '../api/github'

class App extends React.Component {
  state = {
    starred_repos: [],
    add_repo_size: 0,
    name: '',
    http_status: 200,
    err_msg: '',
    page: 1,
  }

  onSearchSubmit = async name => {
    let response = ''
    try {
      response = await github.get(`/users/${name}/starred`, {
        params: {
          per_page: 90,
          page: this.state.page,
        },
      })
      this.setState({
        name: name,
        http_status: response.status,
        starred_repos: response.data,
        page: this.state.page + 1,
        err_msg: '',
        add_repo_size: response.data.length,
      })
    } catch (error) {
      this.setState({
        name: name,
        http_status: error.response.status,
        err_msg: error.response.message,
      })
    }
  }

  async additional(name, page) {
    let add_response = await github.get(`/users/${name}/starred`, {
      params: {
        per_page: 90,
        page: page,
      },
    })
    this.setState({
      starred_repos: this.state.starred_repos.concat(add_response.data),
      page: this.state.page + 1,
      add_repo_size: add_response.data.length,
    })
  }

  componentDidUpdate(_, prevState) {
    if (this.state.name !== prevState.name && prevState.name !== '') {
      this.setState({ page: 1 })
    }
    if (this.state.name !== '' && this.state.add_repo_size === 90) {
      this.additional(this.state.name, this.state.page)
    }
  }

  render() {
    let result = ''
    if (this.state.name !== '') {
      if (this.state.http_status === 200) {
        if (this.state.starred_repos.length === 0) {
          result = <NoStarRepo name={this.state.name} />
        } else {
          result = <RepoList repos={this.state.starred_repos} />
        }
      } else {
        result = <NameError name={this.state.name} />
      }
    }
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {result}
      </div>
    )
  }
}

export default App
