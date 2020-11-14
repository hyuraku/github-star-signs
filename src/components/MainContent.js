import React from 'react'
import { RepoList } from './RepoList'
import { NoStarRepo } from './NoStarRepo'
import { NameError } from './NameError'
import { Loading } from './Loading'

export const MainContent = (props) => {
  const { loading, name, http_status, starred_repos } = props
  if (loading === true) return <Loading />
  if (name === '') return ''
  if (http_status !== 200) return <NameError name={name} />
  if (starred_repos.length === 0) return <NoStarRepo name={name} />
  return <RepoList repos={starred_repos} />
}
