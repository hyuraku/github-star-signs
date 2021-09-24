import React from "../../snowpack/pkg/react.js";
import {SearchBar} from "./SearchBar.js";
import {github} from "../api/github.js";
import {MainContent} from "./MainContent.js";
import {Footer} from "./Footer.js";
import "../css/Top.css.proxy.js";
const maxRepoSize = 100;
class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      starredRepos: [],
      addRepoSize: 0,
      name: "",
      httpStatus: 200,
      errMsg: "",
      page: 1,
      loading: false
    };
    this.onSearchSubmit = async (name) => {
      let response = "";
      try {
        this.setState({
          page: 1,
          loading: true
        });
        response = await github.get(`/users/${name}/starred`, {
          params: {
            per_page: maxRepoSize,
            page: 1
          }
        });
        this.setState({
          name,
          httpStatus: response.status,
          starredRepos: response.data,
          page: this.state.page + 1,
          errMsg: "",
          addRepoSize: response.data.length
        });
        while (this.state.addRepoSize === maxRepoSize) {
          let add_response = await github.get(`/users/${name}/starred`, {
            params: {
              per_page: maxRepoSize,
              page: this.state.page
            }
          });
          this.setState({
            starredRepos: [...this.state.starredRepos, ...add_response.data],
            page: this.state.page + 1,
            addRepoSize: add_response.data.length
          });
        }
        this.setState({
          loading: false
        });
      } catch (error) {
        this.setState({
          name,
          httpStatus: error.response.status,
          errMsg: error.response.message,
          loading: false
        });
      }
    };
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "top"
    }, /* @__PURE__ */ React.createElement(SearchBar, {
      onSubmit: this.onSearchSubmit,
      readOnly: this.state.loading
    }), /* @__PURE__ */ React.createElement(MainContent, {
      loading: this.state.loading,
      httpStatus: this.state.httpStatus,
      name: this.state.name,
      starredRepos: this.state.starredRepos
    }), /* @__PURE__ */ React.createElement(Footer, null));
  }
}
export default App;
