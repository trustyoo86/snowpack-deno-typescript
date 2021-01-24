/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  // snowpack plugins
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-babel',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
    knownEntrypoints: [
      'react/jsx-runtime',
    ],
  },
  /**
   * development options
   */
  devOptions: {
    // devserver
    port: 5001,
    // open option
    open: 'default',
    // dev console
    output: 'dashboard',
    // hostname
    hostname: 'localhost',
    // hot module
    hmr: true,
    // error시 overlay 출력
    hmrErrorOverlay: true,
  },
  /**
   * build options
   */
  buildOptions: {
    // 빌드시 output folder
    out: 'build',
    // 모든 instance에 대한 url
    baseUrl: '/',
    // 빌드할 폴더 삭제
    clean: true,
    // snowpack meta folder
    metDir: '__snowpack__',
    // sourcemap
    sourcemap: true,
    // node_modules
    webmodulesUrl: 'web_modules',
  },
};
