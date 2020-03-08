import React from 'react'
import '../css/SearchBar.css'

class SearchBar extends React.Component {
  state = { name: '' }

  onFormSubmit = event => {
    event.preventDefault()

    this.props.onSubmit(this.state.name)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <h1>Enter GitHub username</h1>
            <input
              type="text"
              autoFocus="autoFocus"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
