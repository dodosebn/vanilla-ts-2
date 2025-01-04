/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true, dot: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-typescript',
  ],
  routes: [
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  packageOptions: {
    /* Add specific package optimizations if needed */
  },
  devOptions: {
    open: 'default', // Open the default browser in dev mode
  },
  buildOptions: {
    out: 'build', // Output directory for Vercel
    baseUrl: '/', // Adjust if hosting on a subpath
  },
};
