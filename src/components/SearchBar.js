import React, {useState} from 'react'
import '../css/SearchBar.css'
import {
  useHistory
} from 'react-router-dom'

const SearchBar = props => {
  const [name, setName] = useState("")
  const history = useHistory()
  const onFormSubmit = event => {
    event.preventDefault()
    props.onSubmit(name)
    history.push(`/user/${name}`)
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
