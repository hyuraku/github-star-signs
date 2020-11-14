import React from 'react'
import { RepoList } from './RepoList'
import { NoStarRepo } from './NoStarRepo'
import { NameError } from './NameError'
import { Loading } from './Loading'

export const Result = (props) => {
  const { loading, name, http_status, starred_repos } = props
  if (loading === true) return <Loading />
  if (name !== '') {
    if (http_status === 200) {
      if (starred_repos.length === 0) {
        return <NoStarRepo name={name} />
      } else {
        return <RepoList repos={starred_repos} />
      }
    } else {
      return <NameError name={name} />
    }
  }
  return ''
}
