import React from "../../snowpack/pkg/react.js";
import {RepoCard} from "./RepoCard.js";
export const RepoList = (props) => {
  const repos = props.repos.map((repo) => {
    return /* @__PURE__ */ React.createElement(RepoCard, {
      key: repo.id,
      repo
    });
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "ui container cards"
  }, repos);
};
