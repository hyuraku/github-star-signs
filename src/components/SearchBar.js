import React, {useState} from 'react'
import '../css/SearchBar.css'

const SearchBar = props => {
  const [name, setName] = useState("")
  const onFormSubmit = event => {
    event.preventDefault()
    props.onSubmit(name)
  }
  return (<div className="ui segment">
    <form onSubmit={onFormSubmit} className="ui form">
      <div className="field">
        <h1>Enter GitHub username</h1>
        <input type="text" autoFocus="autoFocus" value={name} onChange={e => setName(e.target.value)} readOnly={props.readOnly}/>
      </div>
    </form>
  </div>)
}

export default SearchBar
