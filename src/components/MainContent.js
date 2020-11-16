import React from 'react'
import { RepoList } from './RepoList'
import { NoStarRepo } from './NoStarRepo'
import { NameError } from './NameError'
import { Loading } from './Loading'

export const MainContent = (props) => {
  const { loading, name, httpStatus, starredRepos } = props
  if (loading === true) return <Loading />
  if (name === '') return ''
  if (httpStatus !== 200) return <NameError name={name} />
  if (starredRepos.length === 0) return <NoStarRepo name={name} />
  return <RepoList repos={starredRepos} />
}
