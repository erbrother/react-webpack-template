const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path")

module.exports = merge(common, {
  mode: "development",
  devServer: {
    host: "0.0.0.0",
    port: "8888",
    open: true,
    historyApiFallback: true,
  },
});
