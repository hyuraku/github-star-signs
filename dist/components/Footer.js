import React from "../../snowpack/pkg/react.js";
import "../css/Footer.css.proxy.js";
export const Footer = React.memo(() => {
  return /* @__PURE__ */ React.createElement("footer", null, "GitHub Star Sign is built with", " ", /* @__PURE__ */ React.createElement(Link, {
    url: "https://reactjs.org/",
    name: "React"
  }), " . Source is on", " ", /* @__PURE__ */ React.createElement(Link, {
    url: "https://github.com/hyuraku/github-star-signs",
    name: "GitHub"
  }), ".");
});
Footer.displayName = "Footer";
const Link = React.memo(({url, name}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, name));
});
Link.displayName = "Link";
