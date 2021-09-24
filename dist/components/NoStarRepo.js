import React from "../../snowpack/pkg/react.js";
import "../css/NoStarRepo.css.proxy.js";
export const NoStarRepo = ({name}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "ui container NoStarRepo"
  }, /* @__PURE__ */ React.createElement("h2", null, " ", /* @__PURE__ */ React.createElement("span", {
    className: "name"
  }, name), " has no starred repository"));
};
