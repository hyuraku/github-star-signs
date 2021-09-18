/** @type {import("snowpack").SnowpackUserConfig } */
process.env.SNOWPACK_PUBLIC_URL
module.exports = {
  mount: {
    public: {
      url: '/'
    },
    src: {
      url: '/dist'
    },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    "@snowpack/plugin-webpack",
    '@snowpack/plugin-typescript', // TS support
  ],
  /* for local SPA fallback routing support, more below */
  routes: [{
    "match": "routes",
    "src": ".*",
    "dest": "/index.html"
  }, ],
  devOptions: {
    port: 3000,
  },
  testOptions: {
    files: ['src/**/*.test.*']
  },
  /* optional, if you want to use alias when importing */
  alias: {
    "@app": "./src/",
  },
  buildOptions: {
    metaUrlPath: 'snowpack',
    baseUrl: './',
  },
};
