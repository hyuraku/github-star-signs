import React from "../../snowpack/pkg/react.js";
import {RepoList} from "./RepoList.js";
import {NoStarRepo} from "./NoStarRepo.js";
import {NameError} from "./NameError.js";
import {Loading} from "./Loading.js";
import {NoContent} from "./NoContent.js";
export const MainContent = ({
  loading,
  name,
  httpStatus,
  starredRepos
}) => {
  if (loading === true)
    return /* @__PURE__ */ React.createElement(Loading, null);
  if (name === "")
    return /* @__PURE__ */ React.createElement(NoContent, null);
  if (httpStatus !== 200)
    return /* @__PURE__ */ React.createElement(NameError, {
      name
    });
  if (starredRepos.length === 0)
    return /* @__PURE__ */ React.createElement(NoStarRepo, {
      name
    });
  return /* @__PURE__ */ React.createElement(RepoList, {
    repos: starredRepos
  });
};
