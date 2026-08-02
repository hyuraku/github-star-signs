# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Start Development Server:**
```bash
yarn start
```
Runs the Vite development server on localhost:5173. The app is served under the
base path `/github-star-signs`.

**Build for Production:**
```bash
yarn build
```
Runs TypeScript type checking then builds with Vite. Build output goes to `build/` directory.

**Lint:**
```bash
yarn lint
```
Runs ESLint (flat config) over `src`. `eslint-plugin-react-hooks` v7 carries the
React Compiler rules, so a violation here usually means the compiler cannot
memoize that code.

**Deploy to GitHub Pages:**
```bash
yarn deploy
```
Deploys the build directory to GitHub Pages using gh-pages.

**Testing:**
```bash
yarn cy:open    # Opens Cypress test runner
yarn cy:run     # Runs Cypress tests headlessly
yarn cy:run:chrome   # Runs tests in Chrome
yarn cy:run:firefox  # Runs tests in Firefox
```
E2E specs need the dev server running. They intercept the GitHub API rather than
calling it, so they are deterministic and do not consume the rate limit.

## Architecture Overview

This is a React + TypeScript application that displays GitHub starred repositories
for a given username. Built with Vite and deployed to GitHub Pages.

**Key Architecture Patterns:**
- **State Management**: A single `useReducer` inside the `useStarredRepos` hook.
  The state is a discriminated union, so `App` holds no `useState` at all.
- **Memoization**: Handled by the React Compiler, enabled via
  `babel-plugin-react-compiler` in `vite.config.ts`. Do not add `useMemo`,
  `useCallback` or `React.memo` by hand — the compiler inserts memoization at
  build time, and manual wrappers only add code to maintain.
- **API Integration**: `src/api/github.ts` uses `fetch`. Because `fetch` resolves
  rather than rejects on HTTP errors, the module checks `response.ok` explicitly
  and raises `GitHubApiError` carrying the status.
- **Component Structure**: Functional components with TypeScript interfaces for props.
- **Conditional Rendering**: `MainContent` switches on the state tag. It has no
  `default` branch, so adding a state without a screen fails to compile.
- **Pagination**: Infinite scroll. `RepoList` observes a sentinel element and asks
  for the next page; a full page (100 items) means more may follow.
- **Offscreen cards**: `content-visibility: auto` on `.card` lets the browser skip
  layout and paint outside the viewport. There is no JS-driven lazy rendering.

**Core Data Flow:**
1. User enters a GitHub username in `SearchBar`
2. `App` calls `search` from `useStarredRepos`
3. The reducer moves the state to one of `idle | loading | error | empty | loaded`
4. `MainContent` renders the screen for that tag:
   - `idle` → NoContent component
   - `loading` → Loading component
   - `error` → ErrorMessage component
   - `empty` → NoStarRepo component
   - `loaded` → RepoList component

**Key Components:**
- `App.tsx`: Composition only — wires the hook to the view
- `hooks/useStarredRepos.ts`: State machine and both API calls
- `MainContent.tsx`: Exhaustive switch over the state tag
- `ErrorBoundary.tsx`: Wraps `MainContent`. `SearchBar` stays outside it, so a
  render failure still leaves the user able to search again
- `RepoList.tsx`: Renders the grid and drives infinite scroll
- `RepoCard.tsx`: Individual repository display
- `SearchBar.tsx`: User input for GitHub username. The submit button carries no
  `onClick`; the form's `onSubmit` is the single entry point

**Error Handling:**
- Request failures are caught in `useStarredRepos` and become the `error` state.
  `ErrorMessage` maps the status (404, 403, 401, 5xx) to wording.
- Render-time failures are caught by `ErrorBoundary`. This matters because API
  responses are not validated, so a malformed payload throws while rendering.
- Error boundaries do not catch errors thrown in event handlers; those are
  handled where the request is made.

**Build System:**
- Vite for development server and bundling
- React Compiler via `babel-plugin-react-compiler`
- TypeScript with strict mode enabled
- ESLint flat config (`eslint.config.js`) over `src`
- Cypress for e2e testing, with GitHub API responses intercepted
- gzip and brotli pre-compression via `vite-plugin-compression`
- GitHub Pages deployment with custom base path `/github-star-signs`
