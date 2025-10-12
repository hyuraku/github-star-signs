import React from 'react'
import { RepoList } from './RepoList'
import { NoStarRepo } from './NoStarRepo'
import { ErrorMessage } from './ErrorMessage'
import { Loading } from './Loading'
import { NoContent } from './NoContent'
import { GitHubRepository } from '../types/github'

interface Props {
  loading: boolean
  name: string
  httpStatus: number
  starredRepos: GitHubRepository[]
}

export const MainContent: React.FC<Props> = ({
  loading,
  name,
  httpStatus,
  starredRepos,
}): JSX.Element => {
  if (loading === true) return <Loading />
  if (name === '') return <NoContent />
  if (httpStatus !== 200) return <ErrorMessage name={name} httpStatus={httpStatus} />
  if (starredRepos.length === 0) return <NoStarRepo name={name} />
  return <RepoList repos={starredRepos} />
}
