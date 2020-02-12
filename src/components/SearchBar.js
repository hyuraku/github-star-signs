import React from 'react'

class SearchBar extends React.Component{
  state = { name: '' }

  onFormSubmit=(event)=>{
    event.preventDefault();

    this.props.onSubmit(this.state.name)
  }

  render(){
    return(
      <div className="ui form">
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Enter Your Account Name</label>
            <input
              type = "text"
              value={this.state.name}
              onChange={(e)=> this.setState({ name: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
