import React from 'react'
import '../css/Footer.css'

export const Footer = React.memo(() => {
  return (
    <footer>
      GitHub Star Sign is built with{' '}
      <Link url="https://reactjs.org/" name="React" /> . Source is on{' '}
      <Link url="https://github.com/hyuraku/github-star-signs" name="GitHub" />.
    </footer>
  )
})

Footer.displayName = 'Footer'

type Props = {
  url: string
  name: string
}

const Link: React.FC<Props> = React.memo(({ url, name }) => {
  return (
    <>
      {/* eslint-disable-next-line */}
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </>
  )
})

Link.displayName = 'Link'
