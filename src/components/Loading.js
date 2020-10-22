import React from 'react'
import '../css/Loading.css'

export const Loading = () => {
  return (<div className="ui loading">
    <div className="ui active inverted dimmer">
      <div className="ui large text loader">Loading</div>
    </div>
    <p></p>
  </div>)
}
