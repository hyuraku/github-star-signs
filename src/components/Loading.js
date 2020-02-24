import React from 'react';
import "./Loading.css"

const Loading = () => {
  return (
  <div className="ui segment">
    <div className="ui active inverted dimmer loading">
      <div className = "ui text loader" > Loading </div>
    </div>
  </div>
  )
}

export default Loading