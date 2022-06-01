const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.join(__dirname, "../src/index"),
  },
  output: {
    filename: "[name].[hash:4].js",
    path: path.join(__dirname, "../dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../template.html"),
      filename: "index.html",
    }),
  ],
};