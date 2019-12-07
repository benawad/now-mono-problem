const withCSS = require("@zeit/next-css");
const withSourceMaps = require("@zeit/next-source-maps")();

module.exports = withSourceMaps(
  withCSS({
    typescript: {
      ignoreDevErrors: true,
      ignoreBuildErrors: true
    }
  })
);
