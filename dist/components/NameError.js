import React from "../../snowpack/pkg/react.js";
import "../css/NameError.css.proxy.js";
export const NameError = ({name}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "ui container nameError"
  }, /* @__PURE__ */ React.createElement("h2", null, "Can't find user ", /* @__PURE__ */ React.createElement("span", {
    className: "name"
  }, name), ". Check spelling."));
};
