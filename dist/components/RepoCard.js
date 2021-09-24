import React from "../../snowpack/pkg/react.js";
import "../css/RepoCard.css.proxy.js";
export const RepoCard = (props) => {
  const {
    name,
    html_url,
    description,
    owner,
    language,
    stargazers_count
  } = props.repo;
  return /* @__PURE__ */ React.createElement("div", {
    className: "card"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ui header"
  }, /* @__PURE__ */ React.createElement("a", {
    href: html_url,
    target: "_blank",
    rel: "noreferrer noopener"
  }, name)), /* @__PURE__ */ React.createElement("div", {
    className: "ui meta grid"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ui equal width row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "column"
  }, owner.login, " "), /* @__PURE__ */ React.createElement("div", {
    className: "column"
  }, language, " "), /* @__PURE__ */ React.createElement("div", {
    className: "column"
  }, "★", stargazers_count, " "))), /* @__PURE__ */ React.createElement("div", {
    className: "ui description"
  }, description)));
};
