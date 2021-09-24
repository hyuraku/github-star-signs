import axios from "../../snowpack/pkg/axios.js";
export const github = axios.create({
  baseURL: "https://api.github.com/"
});
