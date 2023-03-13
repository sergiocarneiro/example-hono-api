/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_routeConvention: true,
  },
  ignoredRouteFiles: ["**/.*"],
  watchPaths: ["../../packages/api"], // automatically reloads when the api package changes ✨
};
