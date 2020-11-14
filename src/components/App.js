import React from 'react'
import { SearchBar } from './SearchBar'
import github from '../api/github'
import { Result } from './Result'
import { Footer } from './Footer'
import '../css/Top.css'

const max_repo_size = 90
class App extends React.Component {
  state = {
    starred_repos: [],
    add_repo_size: 0,
    name: '',
    http_status: 200,
    err_msg: '',
    page: 1,
    loading: false,
  }

  onSearchSubmit = async (name) => {
    let response = ''
    try {
      this.setState({
        page: 1,
        loading: true,
      })
      response = await github.get(`/users/${name}/starred`, {
        params: {
          per_page: max_repo_size,
          page: 1,
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
      this.setState({
        loading: false,
      })
    } catch (error) {
      this.setState({
        name: name,
        http_status: error.response.status,
        err_msg: error.response.message,
        loading: false,
      })
    }
  }

  render() {
    return (
      <div className="top">
        <SearchBar
          onSubmit={this.onSearchSubmit}
          readOnly={this.state.loading}
        />
        <Result loading={this.state.loading} http_status={this.state.http_status} name={this.state.name} starred_repos={this.state.starred_repos}/> 
        <Footer/>
      </div>
    )
  }
}

export default App
