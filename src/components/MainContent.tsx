import React, { ReactEventHandler } from 'react'
import { RepoList } from './RepoList'
import { NoStarRepo } from './NoStarRepo'
import { NameError } from './NameError'
import { Loading } from './Loading'

type Props = {
  children?: any;
  loading: boolean,
  name: string,
  httpStatus: number,
  starredRepos: any
}

export const MainContent: React.FC<Props> = ({ loading, name, httpStatus, starredRepos }): any => {
  if (loading === true) return <Loading />
  if (name === '') return ''
  if (httpStatus !== 200) return <NameError name={name} />
  if (starredRepos.length === 0) return <NoStarRepo name={name} />
  return <RepoList repos={starredRepos} />
}
