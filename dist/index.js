import React from "../snowpack/pkg/react.js";
import ReactDOM from "../snowpack/pkg/react-dom.js";
import App from "./components/App.js";
import registerServiceWorker from "./registerServiceWorker.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
registerServiceWorker();
