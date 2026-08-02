import React from 'react'
import { RepoList } from './RepoList'
import { NoStarRepo } from './NoStarRepo'
import { ErrorMessage } from './ErrorMessage'
import { Loading } from './Loading'
import { NoContent } from './NoContent'
import { StarredReposState } from '../hooks/useStarredRepos'

interface Props {
  state: StarredReposState
  onLoadMore: () => void
}

export const MainContent: React.FC<Props> = ({
  state,
  onLoadMore,
}): React.JSX.Element => {
  // No default branch: TypeScript reports a missing return if a state
  // is ever added without a screen to render it.
  switch (state.tag) {
    case 'idle':
      return <NoContent />
    case 'loading':
      return <Loading />
    case 'error':
      return <ErrorMessage name={state.name} httpStatus={state.httpStatus} />
    case 'empty':
      return <NoStarRepo name={state.name} />
    case 'loaded':
      return (
        <RepoList
          repos={state.repos}
          loadingMore={state.loadingMore}
          hasMore={state.hasMore}
          onLoadMore={onLoadMore}
        />
      )
  }
}
