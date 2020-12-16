import React from 'react'
import '../css/Footer.css'

export const Footer = () => {
  return (
    <footer>
      GitHub Star Sign is built with{' '}
      <Link url="https://reactjs.org/" name="React" /> . Source is on{' '}
      <Link url="https://github.com/hyuraku/github-star-signs" name="GitHub" />.
    </footer>
  )
}

type Props = {
  url: string
  name: string
}

const Link: React.FC<Props> = (props) => {
  const { url, name } = props
  return (
    <>
      {/* eslint-disable-next-line */}
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </>
  )
}
