const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/index.jsx",
    module: {
        rules: [
            { test: /\.svg$/, use: "svg-inline-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(js|jsx)$/, use: "babel-loader" },
        ],
      },
      resolve: {
        extensions: [".jsx", "..."]
      },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
      },
    plugins: [
        new HtmlWebpackPlugin({
          template: "app/index.html"
        })
    ],
    mode: process.env.NODE_ENV === 'production'
    ? 'production'
    : 'development'
};