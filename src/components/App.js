import React from 'react'
import { SearchBar } from './SearchBar'
import github from '../api/github'
import { MainContent } from './MainContent'
import { Footer } from './Footer'
import '../css/Top.css'

const max_repo_size = 90
class App extends React.Component {
  state = {
    starredRepos: [],
    addRepoSize: 0,
    name: '',
    httpStatus: 200,
    errMsg: '',
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
        httpStatus: response.status,
        starredRepos: response.data,
        page: this.state.page + 1,
        errMsg: '',
        addRepoSize: response.data.length,
      })
      while (this.state.addRepoSize === max_repo_size) {
        let add_response = await github.get(`/users/${name}/starred`, {
          params: {
            per_page: max_repo_size,
            page: this.state.page,
          },
        })
        this.setState({
          starredRepos: [...this.state.starredRepos, ...add_response.data],
          page: this.state.page + 1,
          addRepoSize: add_response.data.length,
        })
      }
      this.setState({
        loading: false,
      })
    } catch (error) {
      this.setState({
        name: name,
        httpStatus: error.response.status,
        errMsg: error.response.message,
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
        <MainContent
          loading={this.state.loading}
          httpStatus={this.state.httpStatus}
          name={this.state.name}
          starredRepos={this.state.starredRepos}
        />
        <Footer />
      </div>
    )
  }
}

export default App
