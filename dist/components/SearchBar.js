import React, {useState} from "../../snowpack/pkg/react.js";
import "../css/SearchBar.css.proxy.js";
export const SearchBar = React.memo((props) => {
  const [name, setName] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(name);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "ui segment"
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: onFormSubmit,
    className: "ui form"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "field"
  }, /* @__PURE__ */ React.createElement("h1", null, "Enter GitHub username"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    autoFocus: true,
    value: name,
    onChange: (e) => setName(e.target.value),
    readOnly: props.readOnly,
    placeholder: "Your GitHub username"
  })))));
});
SearchBar.displayName = "SearchBar";
