import React from 'react'
import SearchBar from './SearchBar'
import RepoList from './RepoList'
import NoStarRepo from './NoStarRepo'
import NameError from './NameError'
import github from '../api/github'
import Loading from './Loading'
import Footer from './Footer'

const max_repo_size = 90
class App extends React.Component {
  state = {
    starred_repos: [],
    add_repo_size: 0,
    name: '',
    http_status: 200,
    err_msg: '',
    page: 1,
    loading: false
  }

  onSearchSubmit = async name => {
    let response = ''
    try {
      this.setState({page: 1, loading: true})
      response = await github.get(`/users/${name}/starred`,{
        params: {
          per_page: max_repo_size,
          page: 1
        }
      });
      this.setState({
        name: name,
        http_status: response.status,
        starred_repos: response.data,
        page: this.state.page + 1,
        err_msg: '',
        add_repo_size: response.data.length,
      })
      while (this.state.add_repo_size === max_repo_size) {
        let add_response = await github.get(`/users/${name}/starred`, {
          params: {
            per_page: max_repo_size,
            page: this.state.page,
          },
        })
        this.setState({
          starred_repos: [...this.state.starred_repos, ...add_response.data],
          page: this.state.page + 1,
          add_repo_size: add_response.data.length,
        })
      }
      this.setState({loading: false})
    } catch (error) {
      this.setState({
        name: name,
        http_status: error.response.status,
        err_msg: error.response.message,
        loading: false
      })
    }
  }

  render() {
    let result = ''
    if (this.state.loading === true) {
      result = <Loading/>
    } else {
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
    }
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} readOnly={this.state.loading}/>
        {result}
        <Footer/>
      </div>
    )
  }
}

export default App
