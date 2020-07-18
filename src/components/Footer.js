import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>GitHub Star Sign is built with <Link url="https://reactjs.org/" name="React"/> . 
            Source is on <Link url="https://github.com/hyuraku/github-star-signs" name="GitHub"/>.</footer>
    </div>
  )
}

const Link = (props) => {
  const {url, name} = props
  return (
    <>
      {/* eslint-disable-next-line */}
      <a herf = { url } target="_blank" rel="noopener noreferrer">{ name }</a>
    </>
  )
}

export default Footer