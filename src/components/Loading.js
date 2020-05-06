import React from 'react'
import '../css/Loading.css'

const Loading = props => {
  return (<div className="ui loading">
    <div className="ui active inverted dimmer">
      <div className="ui large text loader">Loading</div>
    </div>
    <p></p>
  </div>)
}

export default Loading
